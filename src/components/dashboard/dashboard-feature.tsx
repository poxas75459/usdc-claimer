/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2D5fMPGkD1KKeUhm43Jm8jmhKDca6LfKMtynHZxy5X4A6ZUNxbmf6ZQEsTgWZUZRQjwKKtaN1rysduA8wTXnhhgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7yhTaidLrWNP63coFsZXFqyvgfvAZeLfJeFbbZXcUJ8GXWA6d6qcj7r2JXcDwgMj4XB15rSYn99LGEhvV6ZCDb",
  "key1": "3RDpN6Cnwmkimu2bXmtgnL8ZBbHso4vtMB8hdnpFWpWvcyqMUV1sA1N7DQDVYkamCbZiu5epTURgBusth34Pzsqm",
  "key2": "2RXdnSSrHWNUGTTRD4U84RCVjGwc7JVL3PABgonf7V8sqeFeZdGRmBBh8fzsf5eBVoSvmfGXwqvL9upm4z1Q2qJF",
  "key3": "3goXTK7qMscAZhiWvmW1DV6LPXZ6BMMEVJGGUcqufewEnTrLyisq4hDygs8ejxjNBQLWuWdjzsBCWge2rapAbcQ1",
  "key4": "4zrLajrPcQA1PxNUcdir6utmUS9MeB24ZaB2eLGgsoz4Ehw4n6mYfFv6FgNpsMsH77z8SSBhfE56Fu9L5PLeCM6G",
  "key5": "2G6WmYmwvcgc2rs2dU42ikdpW3hMFnJK5KAbzTDZsys1bFPWyJmGRBYCnLwkkG4D4Z1oA3Y9wzAg6NJqBD2D7sfw",
  "key6": "4UTaQxuCmRfe6X5AMt4J712niTDCHMcFFSYJdoU4zuEhV9ocawVRiTsdHFKNb62cWKDAb5HjHM3EuNUg9bBU5CPB",
  "key7": "5uNuhbnyRirPArPSTTGHsB3b4SaMYKqaPLUYD2JvRQP9E57DyWf4qLBuhhDiSiCP11xHoHabEyE7jyUf3zdqZRfi",
  "key8": "2PvyE7nQkGowi557PsocaSqs6cA4QLpj7LhZBxALiva4bdUQN4uBsxeecgaU5EnwFMwUinDvDHztrXa6EwnKSktt",
  "key9": "4xVMoyGYReMvdLSJqtxdBXLxaGjYvvJqeSp4uunKbWEPaMMLS9Qbrfuiw1uBVECubccN5Q49bX7X5AbCMFcPwa2s",
  "key10": "5WxTnhyP8CwsbSx7cN5BogRCTiPoUXVnaifCmthmUvPyHArB29W9UUpsnFZuthcu4gKRdoyKXdFuvuiJhSpXH1VF",
  "key11": "58utrHXP33BePCRQYyLQ4z9JEUSFpCimYY41HJQq9sejXCc6uMXouecSxntxGfMjx3NLvUBomZp9wHrRPZXoTGuL",
  "key12": "3ipxJxRJjgbaeTGf6fpRRtPG8MpNuHXMoCs4w5d5qXPhyu9nm5ykzPYmxsV1cMKqNXBuJtV1wxsyWGy5edKPs27o",
  "key13": "34pmh3CtFf3FT1CRLSW3zLXVwSiyeKquRaSqrZQCmp6ENoVXD1SDKtXw3dJZ1c4fS7D916NwxjHDX1Fi2tFtH8To",
  "key14": "2nYaamnmfggDqVvT4aouBdSAyCbr5HFLvqxG5n8zzY7GFYju33rCR9AP5Rqa9qUVVC6E7vvxzBFki5FK4WD6H6FC",
  "key15": "4E7Sb3DDcXmGctXSLrkEyFe6oGyvu1Gfsgt7HGHVao4SdsydLsRxWGoM2LgRFAWsRqHEQ2VAYqmisUVmzfQYVdfE",
  "key16": "54siHqSW3yUU9sUeCEhvJsf1MELM6KwRTYQ53qc6oEbKxpT9M4zr7DLZLjpWTWKA4i32X4cYMrCBrP9FbTRQk6Dd",
  "key17": "4kif9zk3q3jWiykbPY6uiiEWkrNgtMYoAkWBNvFbgaYrppWi3JkLFpTXezTWD5RMsuiDehkk27awXCM2Njn5mVd9",
  "key18": "4hRb4JVPwFHHKfQVZRJTs9TmVbgC4gazwj9MD6eS2bkHXJrXKmGWHrXKKhodtQMQVbQJsFxw8MENQALFG9pAS12d",
  "key19": "4ojiYXUn24GvPbes72UdZk7jHyuDZx8iLszkNxbafgLQN15fbzF7a8Zx3pJ6RWaSBYpNjQKkAVHVN1A3kgq9zKky",
  "key20": "65Nd9FJQA3DiSTU7SBjdNt2zzUxYnSMAUVRnACJx1eeQinTaCep1WfjshnwTqKn6wvRhn1tK6pMWAt6T39mXu9VB",
  "key21": "4bS6ZYDwnC3WK7VuFP4PxXSkrtsFMPZopVEjgZaEzmNS2LsFNpzehWZrJiTaYEc3a699xcrek2VtgcsPJQMkWCgs",
  "key22": "dNjXRrvJUJ3M1wL2K6WeebCT3ELNLoNULMQ3qqt1RwYKymmU6P2Y4RK5oTxRZkZx94yETpNBDvLQG9y1BoW7nFh",
  "key23": "26zaJrZQyW3wMYh7bsHD2yfy4n7EM8ffRJFWDV9zaoGmtkav7TSgoq1TGB3TTX5z898afiMqVTeQkPMcB9qjnGuR",
  "key24": "3u4Mhaygu98tUBXeEgjSZKdyyaVU1M6UpWvKfiLRAnEg7XYhzAG9xoiLfKs9FdK2oo6kZ9u1oQHR1yLhEGZskXT3",
  "key25": "57MjkjMueFuhFd9zd2Y9DGmBXkLqz21wtNDmNFxewNaeDyMuEWxRQ4JKnzuhvwoY5hoD4Z1vrYr9szDnQWU3GWBQ",
  "key26": "W535RV4cG8tuuLoj8xkwvj1gzQ1XC3ezstKodHwAyxbtG1ijPT8urtqokFmzFg5aBkf4HKd8NGguvPYhgohGa6w",
  "key27": "4bzCiENoTonZsJneEjFDCuraJSsLj6uEpixWnAPiBswzBb4hqB5EKLjDsSoL5XqjhSKhnmBgZ1QzLxvdjYv8pUw5",
  "key28": "3nsrF2CKTeJRMCr3g6VVUY8TSTSt7HjLRmvoy7m9AjhaFFkEBFJuPHJBr3VJqEL5LsgxMmUq1xKVfJAKAALQ2XCY",
  "key29": "2uErARGPRPiEaArGHurAYuvsQQRSsshHMimm8ibNFxXjaqfmRwCuKiaWDEz4doS79SAuHU5tDVYNxN5J4QwNszzC",
  "key30": "26FctfF9QAvNB2TSyUvGEXHH7Enr38CKVXKRQAGaTbJ8htqa1LKAbDxaHRHbtGkZ3YxuBPBpeWbY6fvd2uNmhGN1",
  "key31": "wU211AZQis9HD2oXUJpN1LTSfzt5DU6iKQgfwN59MoeYaxYFwDRY62DT6JSmgXNb6Td67hyVzEPa5v5BSUJLEKF",
  "key32": "xgF2MK4JkFzC7PAKkdvGCn4snqW2F7wLhA9jnpVoaLer51dt5NWGauxxj4mNszNnMLHrt3AHz3g2gBoM9BRteSj",
  "key33": "HLeESKCh9R3C2uQsBstVxSGyB3nXd8MfbsTBtF6o2hvm6D3t69zhyKWeYAaED8pJgFz1NYoXtK4Hhv1KoQ94294",
  "key34": "3Vx3VeWF8ZsTMf6uDTRJF6gVBrsgtfjxnXF5MGQadU7L65k2DeF9YCmtGEux8FSmBNMjvQwpzmvuafVCQHfEeT9K",
  "key35": "4955WQemXiTRzs6g95gFqeCK7m7dsj257GzVRpikmTQ7KqwUNFnNeBmD8mQVt2JeS2HbmGGGoeB6nosJtxeRZu6",
  "key36": "xr2fuVZyB2kjhuhxYtnNJk86nYi4J3Y6dUbM7HGH9NXZHAJ9DH4wGPK3gGdocC4TrWrwbga75UrnCyWCSGYNUSq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
