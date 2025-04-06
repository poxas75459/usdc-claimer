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
    "3qFdQWYEJbLeaWNdALsQq4gsEYv94YpGvbaUZ4Q4kBEZzAAoPKTXZddBmFcHG8B6nJjpyfu5uEFZhBqhqKhP65vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BARFfrNumgGjfNThdnv48LcZbwWqCr66nuvfrUWgVNAdMPUN2iGWh7RP8QtVxoj2X7yYAXYCyXM8PdUA9st631f",
  "key1": "4EWH8BaJfLkerLdMnhtXKQAgov32r9SdpDeLeEB1HeQQMFmPqC2nFBWNhbgqiX4oS4iBoWkwHPQp29KSSajP2ed8",
  "key2": "5gprrpDJXEN8hXXgq7Tmd5FDWjngdwBW2DhrW5KJAmzEsTePnV88ieac8TcRKEMmXZ4JASvqLS17mSAaAgDR9HgF",
  "key3": "2Lh2nSMK75nzAemmW3c66Ze2gPBYmAJiCE5TpXUBwiGAH9bZ7jkXFWKeJkPzasWUMAUpUhYFJDt8S3Z2vV3X8KUS",
  "key4": "4MFhKtVmXQQnabRxHYkhxfm9hW7PjCZ8MUsFCtiuEpmwHTacpcBCx2p92XP5HbyTYp2VhxhxQd9ayes2xwyQGt93",
  "key5": "5tK4TQCBLQMA2UxPjEHXD29ZMPR5ihp1zdAr1rzZJtv5Q2AeUVTDnFuKRFiuEWq2YMhTf1saG7KhfG2znQDuXoLo",
  "key6": "3pvMXm9c4nDzT2wndZK9dd8HV7cZKDrBkvnyLhg6gc1tK49akmyWgWm69UBWBe1Jat6FZTBYrdUkXZY1e6tnKBYj",
  "key7": "4RUNiwDSAza9Ksm5dfz76TfCB5EVFzaPwtYxxexYYynvQnoKV97aPqpW2dGdKCc6ja6RvWGAcrwR3WTq4Pkvm7fL",
  "key8": "1GGYdHzUi5kPcqJyKpVhc38kXf2iR7WNyjZzBBziQAktocFvELMsmEKnNsFERAe7RsEeTzVcTwwX8fdvRDsW5cZ",
  "key9": "AQA4eKrsMYrbCDdcM9BFdjEnrtKFQVViQNA2KeBGxZxMkXDssKczpQDJH8gPvh8pLq3AiFmVQMq3RRbxLN2EvH6",
  "key10": "57GZGGkNs952FCWx94CgLnLzTzPcN7Cx1WqQ1LmF2etngefoZnSJaP4sBEgZRbFdLj5MNaQXDFS4fprcrkzZrTSS",
  "key11": "2SHM1LJgfTtZpxdnn9DzNwsJ71GE4fdrkRC9w7pSpSz8uzuX56FMSXy3yYUkv2s5mfAdyuM2RZaJu5KyN2Sgd3fk",
  "key12": "ktS7ko5rGa1zVjgMXoWrBHbm3wcJkT3rFGDoBd2aXAECs7eLva3ArCG5LE1qVxdvBgReupcWSmJWFguNWjptjbh",
  "key13": "5ew698UfYFcWJoiZJDARprjyxk59zXQYRHNbuGtJuh67ZhRt5TvH5vnauxfGhYNQtx4xHxytFeB7JC1FumprZBKq",
  "key14": "2w6uzyoPD6pCndnoCGdNSCy1Q1DTJ2YKS21FoGFvw41PUdiEfamopHEijDDm5p9XtrSdqkwjsREZ31sXU1FYLZDQ",
  "key15": "3GJiScFssxYNTrdFajxvKsnXk5qXakvBFGQT2xwd915wNboDrAwN7drCuMCfvLMKiQ3bWJqCqwYqXE7GMDKbbgtL",
  "key16": "54wHyzsy4bWdaU6xedG7BBbQ2r3PebcBghkNwcbx1NAXT5LHrngRr55sQbZaco8Mi9eu2QFdEeh1juiQ9eabDS1F",
  "key17": "61tdK9QFSdkjhMgjEGdbK7bNBpigQJskkeShaEPZWMZyHMEhMPksLVSPaxeYKFPuooj8hukzWd5wT9qKgsfdsmvz",
  "key18": "29i5PSw3GkRkKVKofMTDq9dYDxzDZ4kEeh13j9sneLQXwzkDBzhVc7KHkiNjS4vaKzh8nUNYBVjFQ8QmdBsvpkGD",
  "key19": "3r53Nb1yX2XBjVHGfefGV66k9rPyCP5hxMdgtendEjKAN2ZCBBxkFbi28QqMQQkszsBmnymnFMXVKoWmqFmBY3Ey",
  "key20": "5nPp6o9SaVKd4uDibD813GkvhnKYZ6Ugx4sD896K6kmFUchFrbqEnbCqXgVme3gZsHVvJPjaALXdNpx7YtkLCfjP",
  "key21": "3jhQgs3Rn3VVZ44guUjukMbgnwBiBB9V5zp1DPwhmVphX7AtdAwPqbyCVtPxemf8FcKD7xAUKTL7VLSqpLLNCbLH",
  "key22": "2xZ6a2rrhRPtn8tHHf9Vs2JtG3NcxtWPd3Wi38HnLyeRGcrNeqFtVfCtgeKp6NTiEjqsEwohznUrqDYzGB3MoCer",
  "key23": "4G8c1D493HCtjh3bURwBNytE2sPk5MLNxhFcsUaCadZS7oAiYTehDMxHrA8SFq9vKkefcABshDENEhRpSRBuuJwn",
  "key24": "55Pzmi3YtnBHe13DpPZrirTXSQyTELrvhVx5qwTEbvuFBphu6XJJgq3BykZcqNPkKw2YUGPEWr2ybFcJRNvH2RrH",
  "key25": "3H9mFS4jnmXLC4XvwHAe38rpcjPmLbL4yCWHUPtwjvz2z2rjPKTbnWkF81AziqRmMmH7zjUTgfQDnSqBpS5h2uMb",
  "key26": "4sTv2orRP7ESqSNCnmAxKhRMCfV2msM1CC8KD44qXLmDooRgxM3MKDo7dVB7NvsWsND1yoh4185KmKLQniFoswZ2",
  "key27": "4yjuWwkfFhwes6mZ5kW8XdBf9nzjQ9bTQcpZ5nZAdxS8FtT9ruMQpvkpMmPgjc699PHuq8wtdxC1FdxQcRr7UCfY",
  "key28": "5T8QYNzeMVrzUxDXpXnAkR2ycyFGWDo9ZaCJFKZmuKYToNf4fwdHWs35H5AP2Bi3ogrNKEPgtz3X4GycSZrCRXxb",
  "key29": "4ijVri2uyDDo3iFevc9SGrgeJRoVRv9xMhZatosy5nzBq9dJcPiqc7VERNZufVzz9pfJkwTKCAtXPY8jPzPeigZA",
  "key30": "2ASodBbHwZt97esrLuEo8ae3yLETSeZqnr62onYRc5kDpQsrCVfjk1WZ2qEkwKpkfaxsBhfnFpe2eDq4wCeXcqni",
  "key31": "4eheZgDZvnL9SuHmsxzWyCQPpS54r3Gs4SLNo7iuUVDxueqBUDu6hm6Pf7kha7hdxR4rHgVGMPfGPK3kgYVZPizv",
  "key32": "271A11KXP4fk3c9EbMQ2iVe4kJLbaCaXu1N5bhAZGiePpzzG6teR7H4UybuFb6JvWF4R9WBQ2iWT3EJexSCc8JiT",
  "key33": "67i8FFKhbDP8jLBwDiSxTh3PHrWexBFzW5CKybd6YKQMT3QbyJ3FfAieSQRbMePffvm3itB2pVmGydvwzhcnRNb5",
  "key34": "2SsFz9k7tpeU6nFDfrLKU72NS6oczLCtYoCiDdpdf965ZkCWXjApnxjyLghdBLx2Q9Qnbu3xkS2Y2PEDWfxrXfgb",
  "key35": "4wPwbrB8HC3u3JSGLRAcApms3hmwX9bGzLj7Q2HkwYB26EWcG9s5ZASc4pRXxLiNGC5j94r8NRZCGyvv2o9r7QmE",
  "key36": "4ihzhaghrcVa1MfdGgkfHrNTWHUNyWmk2FBQZDra2Ffej6sWs3g8njn235ZuiyeMVxFMJQy2g8BG185PoExUcc7r",
  "key37": "4ryC7W7JjE2iP25ErCHRbkYWuRZ3vcHp8qZcTwkckhJC4tuVrYawqHPE9TZ1e9mGLJX2sP4NmaShvFgm51AFhEPf",
  "key38": "5mLVt6vosdQpDwjsGWgUN3gxqSvbBBb1xmsfckKR766v5ntCvX8x4r4svPXLYADDgmHwDJQ9Cg1pwW1pTMnZ4ECy"
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
