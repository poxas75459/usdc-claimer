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
    "iEkATpBGdrbApZ279NYZTBdJ37NH7CxwabCEeFT6YUA8Sh6K3ZXPKwUa7jsNXyvAJqmJziJhBw5nPo3EyyDoaAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ycfBzrQCAREfvEvwYaSf3VFpTNcLhSVtYDr7YiN4dfhbQ72hMAgFKiAbgRVXYB91sFvPuDRUWtAAypQ5kgU4Dd",
  "key1": "34zUYLBxs8vHN7h2xdzjp5fNz6XkiRSpC59768YNpEeZa9yGTjHzmwQTZYFqKF2TDbNZpn685BCBobsA9Nft7EWG",
  "key2": "R7MmL4Tvvz4F6wsuG14Grty9RiUBQNaP29KGz7Lhk77HtbXFYYP3ja7wiFsZxEZJAe9HiHXewoccVJv3LeaAznB",
  "key3": "4oKaq7zpptu1ZdfR9oaodNmcE8ZZC9EaKT1pKx33qfMMatcSJ1FV4HzKrotN1CpVnp3Mxc529BVRaGpKNz1q61mA",
  "key4": "5Xk15oruP5TzohGZnrky9ZzA3mdogqotAiWb8rrgnWGNxEHLgou1Fd4r1C6DcsfHjFuRGUMMgeCBh1BQepreHL4i",
  "key5": "5HitgdxUmeUNT6zv2rkMYkDbKXvhQfHUQiyczjXtM817KwhVMMGJZaBu49aFW4AYz8qJWsLwY86f8kU93jM9WcmT",
  "key6": "VNHC9SzxQrNT34GFs5NZx7kjoNow1HvJHFi8cDRM9QdvkowAxuWokjH6FoBMzTw4t6VoDrH5DGSAiKqjP4273RW",
  "key7": "2b2s1UvGFnZyvi4eBVWTwo4f1ZeGqY7ewqpFksAeXDS9zYEgRw7Q7KgCYxRpircSx2e2Vmhs9Fe2dtjZ73UyT1hn",
  "key8": "5Sjxv2dKv42nFjR2Ef9Ru6U3nE5yBbUXycFsuskPqeJG5ejGSgVZ9L4WwCgsfwYiZN2HB3Z6Ti9B1SesyLiaBmfb",
  "key9": "124bYZZ1Xi6RECEjC7ww7QpCBdg2xNeCJmuMMhHjyLXJvfKd3mUTZ8AQHwvWFzR8nVMSDd2YjvHDt4PKRgrBjhQE",
  "key10": "4exP8suygK7KYbmkQVJAaNkfwokzz7EgURWjGY95k6AUPNPhMknxipFf5ceTRcKJx3oEeddbS8Cp6nRZFv7fMWTh",
  "key11": "2Qnxn58tgfMpgzLNffrnynJaz4Coh6dpuq4Rp5tjsGTatMFYPjwWUzdMetmvnoPvMeNFXwbbMjsEHBBmszGLYtSM",
  "key12": "c9HwAdarSULZ4Vv1VygfHVwqc14Q5GfyQT6DeCh9x22TwcG1c6ZCynBa3NiNDcNaBjhqk8RfEpgEeBdjjkZEvYu",
  "key13": "6WwAEFJtGJWYrii6y9YhQJUj256tPVfqB75R9aBWAwuwnnAezWwDvH9q4xJH97JUk4iS9jZmuK91cQsStx2jmPj",
  "key14": "2rkdaCvRWCBDwijCbmJkYbpBzo1nXuC6c7RxgtHiA2w7n9LWyzaQjaMG731giytvnsQpgnJm5vaRFtn6TianQfkJ",
  "key15": "4UsSWGKimwWVs8EhYkpoUQhRWK683UuLVP3VzxPW55JVsNdAZXTxcNwex1LGgbFVAntgB2PftRtKzXRPkeeWjKGy",
  "key16": "4gsLnh3Yb17GANUDbesEcN8uVkw5if6MzRrap4TbQxmdxQ5oz4GtX66VzN6bHqTdDPgEcqhUb1iY3LoiCjEFemiq",
  "key17": "3Q6Yqt9cnhhiro9AH3weC19kU8puxQ4QAjp2Urb3MidUriyqN9eHsjSEwHKbPxvaFaPe9Jae4KRfTSeanQnvkX5d",
  "key18": "4qQQUUPQnFtPzDDL6dW94UXpKLRoGViAbPfSmLep79qQnLMBYp76xdn4opACtms1e8NZpaPaN74pcEBhg8GuFjQN",
  "key19": "3WCjJ2X4iFhekUCKUN7ASDupmvj4cAYa6LnZi4h6m9RdsPLkSieCLBTDcMu1CzCEwfh4y1E6GeosVptaGBkzbDD5",
  "key20": "2c3PVFkMFnEUHWuJFNx4bfTZDiAEavroYrWtXrowU4bbKbHvyJFRPFysZAASm5xb2oEUvAsDwmXvNpCoDFZUbpLn",
  "key21": "XF4dpoF5pNhxJk89443rX2G2tDFXPWttswYirdsuwHCQac3znXEgCU1urkjA6gCqfRkk4mqARU5ZrjPPmHRATHq",
  "key22": "5LqNiYpPbU9cAhXLfU8KxHUisvmyYBSf4hDn43k6RuTNekq9HeDtyhubisbdwQDLxWCcXJHC4Ej6LfoXHVqiEgN2",
  "key23": "3zj5VjfyzBFWN1KA8VrgER95NpypcHiUDvxfPaN6TUzXRdSeRxmxiBGCQxPKxNGApmcWTtRCCe6kCW96FPYAHH9A",
  "key24": "4SpcGpMDtkWrh15pHjCdJfPt6EiCjQr7j83fiZ9U4r598cBpPjY1cNwi49FpigDuDKrLecu9ZL4XRQDYRX7qMA3k",
  "key25": "2GN3tq3pC6j4LBdAgfwrsLfJ52FZ8fGHf9oGKNkYsV1E4buFDpJVQzWZXuoagqSL7vUCE2tTKoH121a7KwjecitA",
  "key26": "3WMtBMxNn7s7XEuiJiiepULZsRaFDVcp2tT5SjBhf3FvLLuCXVdtxk1VQGNVcsdobY3FxgqSNFjpLgDMxtmwqWoN",
  "key27": "4vKpaLXxi9YrhE34ae2rscFmYCzvQwEME31jzNTRQKP6ypWhsDTmsNQSWLchNg7dGDHRixiiLeofBsCSdap2KRa9",
  "key28": "KR37La23mtBphcHx1ixnxFesuwWCeLzayhgNqCD4U5PN3pwTfceRuiFyJB71rFLG89CwMaQePAmV41osTeQj1y5",
  "key29": "2E7BBXKejAMn61tx6sqLuE9uLsi5Q3KK8t2yJtoVaGJVd9mewpAQv71xhk2oSUw1onitmLYxmm7x72aDtqVhdNkT",
  "key30": "2Lpq4Bft8RydGj1U44HJCXQrMuU3K4NPiJJ5MEBMdFQVPHW9pf5JRZi21L7nEx4z4ZiqnbPcTZQzKdJsVqATGqYb",
  "key31": "4ooH4XtqTzuUoGYgQygdKd889CzDsvgjnQKCFvoDnRhxgzhTWVrovQBT1xzaKhrxbp2523p96K4M31fDtHZuHmVX",
  "key32": "5NhT6y5qZSfKFXwqNeayAhVx347HZd6KUCrHnsqDKxxL5r8pxGmPRyDZXZb3UThgnCuquYjTcDMUPkaiWeFzgMXe",
  "key33": "66FR5Nbz3gfcuTb1LV63of1Dm4QeoQpV4SZoVSZzAZsBjoK4Hnnx7BBPudumvDmxMRbwu63Ztvn9YSPHxXa2FjV3",
  "key34": "3nvChFowNB4b4paejsPaxdnAJXSD55rAqeEdt1tqL3RakkBqc6igjWnJs7miCNkdcFkHLS3WEyHrUcjn4mC9y7dh",
  "key35": "Ch61bDi2faatp4upME1SYapG8J4pkSrCAFHDDTPwDgTprzaw4kUTpGSRJ8RSHvKJMDKJhfPiarats1wJ2x9qBoZ",
  "key36": "5JkAzXGQpcJo8Cy6BySNc1iEsnC1dngUBQ9PCmk7XqhRDtoGF3B3ijdY9BSYCuwvwR54YPfh9vumKTJ9yapnc6Rm",
  "key37": "4bFSRUiYpuXWKuYRLk45FJt2HNKDxEFaXeV6pCjapfTSgebdoM98iJ8QK3pFy4Uuvfu88hQrNov93g3xQEKCEdmj",
  "key38": "3g1kCVnCCgPidiFkMJij37hnnZm8dsxtAzQVpFEJA9ioAPmWZnusLpg28kdtDf9mrAVJ1UGoNpETHmrXZgZggU8Y",
  "key39": "wPTx8gZuaseqR8MTwSJgKWT3RZJmAfWd3SUEGSwzfGU9CLmK11zWDgBdEcuuTYCpBAEwRFErmRhnaYtPnQbFkcf",
  "key40": "3NDY7TLMJjSDc7xn2S945YsNNpDrJ9bw7FcNiHvJSk8F9vYy5NgcZquxyqszK76zovfHzwoXhhXL1JukFppiVfKC",
  "key41": "4anrKzSj8iiZ9nF3DcEcmK5cNh9TJg358wjzrgCJ3kks75ktKcxpkZM2fF8kPecQWidFGpnTeV1wNEMidsFs7dJR",
  "key42": "5y3AAxaB9ZUbjzf1xrMf9xzUZuRKUopikENsCBDQL8YvkgUoqJTo1fLwci9LEBeKieqV4i1Fx6ZEjwGuvSsAjn3V",
  "key43": "3ZmUVrcePhsLpWzXQSi8GWGMuzANKVzs7wtMHVnrwzHt4cNfSeb7Q57b5vsSyXtmmp2dE7XFAcMNfixagvS6zjfZ",
  "key44": "5exE6mFqWb5rnHTdUkxiGCmzJ8MfuRbY6rRBmXX2qeRK8GmsrwmhhhJhsQYbcpzQNxKq8SPAiWRLthYMjWzpDzoz",
  "key45": "2st6SzpqpMsGCx98mS9Gmc1ZkwjYey81rYfhBDo1r1q1t2ttsLhyX94JR5HQejebb71puEBKGpSz6iVc5Q9L3xtZ",
  "key46": "3DPhi2jVJcAs6PGpe4Ua8sF7YwdESYNkJ3p6jFA9FqrCKnhpVxt7o1AnP3niaM4VAV4tj5ottZcaqYq7dGhzeG4q",
  "key47": "2jgdngZVJ8n1JkFu7QsGsxt8u9KpoteEy2LsnFJqXbqkJCpdHaoY4XVRyRXBD8mZWbaQJgAwUUdZ6UrrX3cpHqLE"
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
