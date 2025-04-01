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
    "2GG6TWMdMrLyKV252zs8pg942DpwqGvtaN7gD9eYFPRbas63VQTaaNBEAqFznQ9gDoNsozSmoJDyvuNSzCKcCDJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evAxHbHXU7vDUGqtTDBPhE4mWr8b8m9KLkjQFctX8QRrh8SdihpbK37D7DoFVsb8EMcLHmmNCVgBcxYpHeuX19a",
  "key1": "3ecUC2i8GaAbTJPy6twv7CrtEzCmTizdn4CJLpFQ6kS3K9nEzrX3KSBD5Boo9nF3GEeoZvyEJPBpRkbKHNYH4y29",
  "key2": "41mPXGhpfFnc1brK5Vso7dfBEZBkueD9pqnrUF3gDhyUy1c17Ba5JHfuga73FDu5QM38raSmyz3dqZpQfXA21v8s",
  "key3": "3sHa4NEwnVh87J8dVSRtuhNTejKj3y4kKxtF68o9fxWfLJk2TDaAt3Ju9yfiMN2mcJNkWZHMUxs3vCJEa9LQxa3F",
  "key4": "2HuNzreZREVRf84q1LTnQLHhgFPx787EnbnUPbZfoyLX8RiiTm4Qi7kNXUstrterCTgLmmeBkbcTLgj6bXMd3Lym",
  "key5": "5EvPX8VX8Ygf8r4FLiBGENwwDnFN6yEosePNnSUv65F8hHYLJXqimFf8Y7Eurw9p19hBKe2rY839B76bsqmu4Ayd",
  "key6": "kRiWxesJV1XdoGWVDNEGZeAjSLiWn52k1mYzhJLH9vNVzihQmtMwk4k9Nt6DtHKQQMTZczQ26UjKZwywJCUqgxX",
  "key7": "4c1kXouKpyK5wGF7g2wkUBpNHAeHqVMJa3SzyXdLxRz6PRtHZ47fj68yLkBPQtGP9sYokxh9uFzJFvcw1cU9ahPp",
  "key8": "3viH5Y4ypPfmGo1wSA1VVPngZTCX5oQu3H4AAZY7BAyZzwCYjmpWZ9PC9BcFipxs2SmjUvbHjju7HekWHLWJ2Cgd",
  "key9": "3Q9ahAJ73KjmHQZt8xoZ5j1aBfd5WLRbsMxuMRUwqHvLjkxpj1PVTsdoXVyCd1xj4NoXXz2yFs2YHV8GL67D3FRT",
  "key10": "65khJ7q7neUPVMfkmBqGDEG1Kjw845KM5E7RDYHRaeU2dUQhU1WJU98uNttSLwRFe69wBAJjdwa4o1EqTzz1tcGh",
  "key11": "3mcWLpmUKcHNJrEr5z5Yifu96MJqr8c6LTg396Ufj3eLnDET3EFyy75ietpoYNxzktPCYRjVzsmWSwSa9MigBa3v",
  "key12": "N7Sh78ps1UL8wsrKePPgWJcME5dBaDq2Ed5jiMQhRS19yF3jKW814GL8dhQLWVnPvtUmFNxwaV4payqz3RmLpYt",
  "key13": "3U7kpnPgSv3wu7RkPdHL3eJvSYvNA8JpYDT34AZjBEEGzSDxFMTsnSLsN1ANehk2GHHxLJY9toZGN7owzwmN7GPV",
  "key14": "2CGcWxtCGjJ4P1eNP2Fwk5YRP8w5zkLMS8Sjk5mdSKYkrS6Sy24eqbGP9pNFvV4tFrySnfwxkY1DExdjvkqSPLTD",
  "key15": "3UR5X4nPr2VphRqAvLppJVmhbi6i2oPgexnDWAKYUCp1cTQqUCuE32Ydh3Z6cpUMdZzVJJaw33QXr5t9RVB9GMhb",
  "key16": "5bxxjDncYNpqWibZsBVHCHjKk9XkwXAR71txHBkv1rLvPawu96g5pa3xV861KsG8GZcV19uVtwdmJs7nZ6JRAf8d",
  "key17": "5K2X3RnKBiwtLSSAcbNNPgT6J8igB7ZpTXJypAmuHmWp5xKuXp3558ByBTbNSfWYtGA1vkQBeokM2RDDpejzVrxP",
  "key18": "4K2NoXCpXgcaC2u7HtxAGmPFqLK4ahBjyotjZMGQ4dYKybEZY1d6bdAuaHXsHmCHKvbujBzJFAoizqgH6w8ZNoZf",
  "key19": "2HGysqAAuYFioi7xTeJ4p9R1FM2tYhPFLTY5RjGfvHH7P9tgA49pHzRDTw9e27k8wieBuPvDV3NR5rS1G4ntsvU",
  "key20": "2A2HamRTRTDTrN7a9c6Dxcko3rh5BmDu51a9LkpPgJdwa3MmLd5vXuZsFRoY9SgHXYZYcsUUFG5tan4R8SwTt2id",
  "key21": "5AmVrbKnvVv6JNYTr8vxz1Qd81BkytiYbRFdMG13yUmqpE8x6jwapJWf5KR3LGaFak5q9U65rmGQwtC1xaYfxghJ",
  "key22": "3vANGRSEZWbgp8mREubyFXwz9YcQoWb7FmQydYGcGfTGhmmbjqp7eCTrRmpyWLjDtut4kB3hk48CjnZYRk26AgN7",
  "key23": "vXdeQo9EEbPkGNnTi2CQXFuCHn4C9tPFMuHxjEVAhyiTHsHB662eGXoTUMc9c7zXWj2iXF64hKYFwSy8AcGCo2e",
  "key24": "5qUhqx5787dsLyWH3Nohm5oL9Lf2XPZPA33MuQPyqyQpU9p6m9Lqc31NxQRU91iyD816sMg9Zug86VaWGpU16DaV",
  "key25": "4UjG4atoP99CsmyoCEf8JeypJpnGb9VY7ogfY9HzK3ofQZ89R52cFZbMc1GLFRYCDw3nm1D1EP2QHchEM1NpLwEz",
  "key26": "5SMUiGVdyY3c94YMg2ipg6NALtyuiZkuQaNDiKUcAfqFFDbAtYxcoJLLvR61bZoSdWkBNrgbWoZEqSBhwwWpvKes",
  "key27": "HuSydCFh9GQYxxvMsQTC61gJkXKSK9VaRVbipvnFBtx44FvjzwzArNZctsWHZDra7u4fobz1RwZ9j7pq3CjyHaZ",
  "key28": "NG7TF2k6rFPEoqVExCP5fPptiTstTJoa3FYVsRo3yiHzLg15Fe1cxNKTBXydMj3g8UoAb2Aug96KczkaagaiHdb",
  "key29": "2PdxQ6MtakpAnPLgszjsYq13oWGVyt8fQfJrbtgH6s7vCx6PN8z1dFmV6Q17YMLgLZEJsNArA7EBjx2VLaqVwpqa",
  "key30": "48LPoH1z6En6Z2dp4tpqNvP1HAtpKy5krpHCpHB99QLAEvroeNxeF1VG45UxzTDmDwwrZRFRoMYQ5FZVubUwnpSz",
  "key31": "Gb7Pv1HbwnuqyqEyViTUT7Fx9RuPxhfigcdST7JSYXRQuYwYBpw6HPfFmdvfkNCyMgXGrCM7c9F2mMFpxEjRNCs",
  "key32": "741J5vS17JKtsdrW27mk1LudVjr8h1K72DgD4KMFaxj6BhCW8ERHK1qkuxgUKx1zPZSv9kt7cfQPL81L9jehGPs",
  "key33": "4cY3J5xnYGEPjcCDNWcVZrgQ4r8DvXTzUAKS3fgLBarxqHy3zJpfjpxxmHw2342VR4dhiXCW4q69fd35C6syvEzL",
  "key34": "3zLFZ56A6EBzPCuAqYVworT3Arqxy9oPWogbdymYp7yNNk9wJgRTVf1TDRdoVjWFQoLHR8wznbYMhCLsC6a8F9rS",
  "key35": "zhVDipkTX9UYv3QusG8zci2NebhTQ2cJo7H5i3HaAmo3f8EzKcdaYx8yyKkRQQ6PLsqPGueEbf4ZEMZSE2j1Q9b",
  "key36": "4Z7pnGDCrxWyv4rurAr4ikUvLRWJRfm23pFcMEucgmx66icrcqgSv2nBsVQkzkDEeRjHwj3PVijaUc2DvX1XWHTL",
  "key37": "57BH1qtF2wYky96Bz7QkmpGhC9usMQ5xrfahZ7f1mX2b1dy4hc1DfajEwWL8U2xst3GYxgu9P6K5CW8aW5bdUKt"
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
