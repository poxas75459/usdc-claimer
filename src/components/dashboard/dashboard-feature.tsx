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
    "pNiDjiRc4ojL4kzdLskRKDvtrFCuZ7ypq8gcsunrVWhFfe4XxE85359MhkQvvwAheW4MpD5qLrmbZA9X1rcGUZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzLJiCCwau97o3aJA2Ybu5M2yhsbHbAfGL9a7RC3GocKsGcekAkFMjrxyaQRsrjNbPruod17VbrY8PJ7v3bQGT3",
  "key1": "4fwAr7bFxSjAMcxuCnEy9qQgMzYnrQmZw6pFwTJ41kFfFgZ6sfsQJaYY6aRPmkDhdB3cdZJEjD7F4MTbrp9CrsTn",
  "key2": "4kjxhXbuuSUwHF9vfFidBDFWA2eEzw8aWvxd8vFHtKuwRxugwLzABSYa9TTwPzJMUoTFjbp5ht33Xa2Jnm17xb6W",
  "key3": "2zxPrw1LuuVmSYsJmfsrNEFjyNfHzVx7v3hCs6RCAwYDV7SzT1nbB2akHgAemmiQQJJnbr8PBZufruMuFFWQw2RF",
  "key4": "3jJG8NeCZppk8FmHxbDETj6a9cvxwHmaMbjVNXMHgENiXwy35oJbjWhspPmgYR4XtQ8mxf9mfvxq7HZDnx3Cxb3N",
  "key5": "b1VHc2W6wnr5HFfGiPHcNgT86aSNwSxJTBMTw16wBMvAVmZAwoYEKjhupBmPTtSHnYy4MSxQaYZTMYPzaLXJccu",
  "key6": "4vVjXJ3YSgMgEhdszH69pAY1iR3zCrqkKT6NEsji41uBfYLoeDrkcRdF8cp9CMMEJJqPfNQVAkEZP1WHgQMRiYrM",
  "key7": "2LDp3GoWPXudpiksQij8a3Pr8v6aYEquuLFmXUgL93KmqRRUpHD62RJy8xGA4X4YtP5u2Mym3Zh1rU2BtvqgwvbF",
  "key8": "25GioxENN9LjGPXy6pqWsJz8LdwKkPizHtucYxKDe5ZEpH13tSvJtvbxunoxAu5Gs8kV69Sdf4bK5QcVM87oJDUj",
  "key9": "3AcYu8q2oUMKFfEyivZMmxriLUYoh9KHFNDnhLwk7EVK4mqXPqBoHGBJCqKqsDfBwQpQ23FthhVpz8AJDwCEYBWP",
  "key10": "3H1ZwVJuhqRZMsHTB435BMp62JtsV4Dan66UcETS8uc5QuAYk3MkndnHxEy5oggkukV9d5FAtjdey9bEA8ACRKPK",
  "key11": "XRruQGY4tsrnLNiQR7HVkGmPxjZXshWLJsY5pXaVY9qn5m8duEh91bxJcUuGkbNw1dZozvVQUHtPaFW1gcTbfCX",
  "key12": "nDfVfeZrde5ggYQkvoVrRjkPtf93a7DyogPym31UtgjAKb6LfvwrT9D2EVPWYCB2bB1QkJzPPR2m3ZPL99V4SQt",
  "key13": "3u5yg1kuRjRqqm4Kv4aJYL9HmNu1fwYa1Msqj47chCxpWiJeHX7WPNhY8WkpwPn3vFYtESyNwVJ9v9kRUNQHc5Y5",
  "key14": "3HjzJb3LToFrL991rEJEheBbLqZ6D6UdqfUiGEEgH5Mf21N7DxpDJ6Mv2n93jhHg8X5GJAoadbG8PzigB1qc4PTQ",
  "key15": "4sRGgGJfnYkT4Pn7EFBtC2k4Eb1uXh8HqnoFpUjRLS6AxTZzJJv89MafDHXNcgPD44erBNHT9fnzPGmpA3pNGWYX",
  "key16": "4wCPZXgpWhYUKLqGwMtixP7v2wdwY69Ni5KVHynwNL9V36Vdru4XnxnzoMWzJAsN3yBZr5QwJqVZiUWr1F2zZ76H",
  "key17": "3J5UrkJMLvFozMmdTRg4bbLLGwtNugXDktyNQPwMCTsx2jnvJaXvsw9ywsAHuR3aBjiiGp5HS5q8zLro3gtKw8h2",
  "key18": "3F5Ay8JDRR66b7tr3UxSyp57iuPMPV5QGXhR55DSaFBJfxLSmX2U9dfvqVM4VQsqB7VHkVunpqktBR8Fmfz5BPQq",
  "key19": "2GVhjuQLLzwx8J7jTpBM85m3ipso1Ph4P36Gg7PPbwrC9QCfeoDCft4MoRQBSxKWdoJozo1rNndhWv1MBytJNnNZ",
  "key20": "4jLaiCMrBcVyFAW9C3xAWBYfLovhP1yXoHbLraMmKo9Z85iw8ef4r3knY3sh2MupP58kb37dWSToL18WJdm4nB8v",
  "key21": "2ygAdZx6LaAN6JjYfQzxeyxEicNzez4Zyow3Yv1ryhPBKBTVgjpMogmeURPtDC8LDUbjfcHXHkMkVgSTVRp4DCY8",
  "key22": "3oeBQZPHhmtncUwWES8MarPKkoznT2PWexBi38Sh5E3Gvg24kc9pH3443RKZbGpjkQhaXpxwzSo7jnBSqedKQueZ",
  "key23": "4wApyChZ9G6XDPcWL6T1ZfzdPkVVVDfV1N3K11aXjA5PoNE9N8xdTNW7dxt3GkvyVLLBGoEkxVTFQQ7HuXjmdWpj",
  "key24": "SB8ynMB9A1cM9ewrWQMRYaq4GUKU992S4F3LBoF2xJaAFzsXzWXd1XcwRbrD4Uq6qYVpxbwcakjPKvdV9QSwPx4",
  "key25": "5NeQqc2DpLkCfuMG2RYrBZiRAiBTcadiqqWJTRz4ac3UMJ1Kk8R8eg2JyiKt1UEwHAmEdgZmmERZh9C5wxUqesWs",
  "key26": "3q1tS4SGyawcKxG5o7m2Xfw3tXt96huipoeSp5ytz2wqUDEzuU6hyPenwUfVKLErAzuc2Yt4YM3L8zEeQDo9SRsG",
  "key27": "31UXYxPQUpx2KxU96W49i9Hm1qLwMS2Qz39vgmFXSGUAUDPyFMtD2bhMp5pzipvyZZvxyAfhEvttpHLSYQiK8KhF",
  "key28": "62XeicVhzTA9n3KY6MQffRbreqJz15KDUh46XoefLkrMreWfaN1zHT28b1829HosPsuD7ZSMKdkkriViRdDF765p",
  "key29": "5PyrYnp5Q8qqFtzhwVBLthcKR8kNJWNNg6cYXkgj7Ey9NJn7WrBiRmkaYFqaBqjaQ5yuXtAVqYBemuhhPuB2Z4mX",
  "key30": "uSDh6jaBWuC8hEZXnZYonRvmQfuTkNc1L8ywSUYJkvbAaop4tuqNLjMufRo7mT15YzsB8xgbSD1YyThQj3Ah4rv",
  "key31": "4yLagbKhQau34YqgqfpjD1oSdqRCT5k9c1yFAFoYWkBghKoZvwZE8aQm41sQuH6FrWksjmsuG78csbLTwdJ4hgbD",
  "key32": "2v6smjugjHuPDmcUFGLjPtnSAJLfZT2uVNeuq34vs4cDs88sL1JHC1sw3eVbaRxnoLNcJtwiHsM3qmZJiTcajNBX",
  "key33": "2uusMmjiW3jjzoZu2Xq4QuRLhyTAUqDEwStFNZpMSELbmdGw5FgS1JK63ZMX98JRS64zQXrRMUYc8qtC83CsD56p",
  "key34": "5dLpWoSLLVaFfJeZZbU25t92hv5xaztFGLCZjFXK8ZN2verTRMVZ66Cr48Fqvz1KBj1iAwbvaKHs7hx7gufvWeyU",
  "key35": "3cY35YuJDNQJiePX3gA9mPJN7i9kwWfysB8SSEbjEr6ZT7f83hU2UHRczRRCnym9MXERrWQydjZ9cKS7vigzj6is",
  "key36": "2R8KB99Zy7iMo8fNz6fvT1Df2K7jagLLATk4DDTXzvGJCthgRJdreXn4AMtrHAw2e3DTCdZ5DauojaUjCb8MquB9",
  "key37": "5tau9ZdGUkGYUCfcsQoheqL4AhEEBrNZkrviykuej2eF1A6W6LQJJuMWNx1n8nEAjy3D7o2xVyN1RNx3UESaKcSW",
  "key38": "37Q34KvnWFJAqFCjiivAgmnbdRU6EpaJzaNSfx3Wi3i6TwuhYTnyVa9LYMJhmTu9zG668L7KGg29y7wFZQ5wPzFd",
  "key39": "52V27sQQaY1k3aURRX4bQ7iEuBVH2v5WhvWj9ZcaTEHtVEK9KfducVEDuaSJ8am9ZNAZQycQaFpxEMroYMwEWNUZ",
  "key40": "25Vqw9KBzbRCq8uXkVVmUaujAdskLPU3zj8CBoJB2Pn2AuPvTbL9fTDbW9dVhLN3CguGqQ3jAS4v7GuQ9CTSGAXb",
  "key41": "383SNP4VSLX2uF4A3UgD311SYrjajGU6GFjK7CvJRLHmw2DTUhoWNQoTyV3Vp2LtKxVTpojSSx1tf4yGPW8KRAUy",
  "key42": "dTnvQJkiCK5uPmiBZfRUUjNNw9cSJcHWnUN5qt5H6Y7xi1kEhyDpgUNmkFTQUupXGiEdoUEjPMD8deP3nC3kS7i",
  "key43": "3aD2sD9Lo1148RJvoBopkdmK9hERETcibxrHgEkcjKuTjqVxodK8zTtLkTSaGPHvAYqZtNFjHfovAmr89AiK4Ys8",
  "key44": "5j7EfTySjfDVFDh7LSDnjAAxmSgmKUtqVWPdZHQypLM4NRaNxxXndovKJMiyRu5VxyqqVCeVypoLLPjzTLngQyZL",
  "key45": "5E1fkrjbyc7NJE4NhHi16ER18auwQ5RhoT52Z1pafREe3ZeAyAJRNXz3Lei9u2XRE7iBWvayqwbFCRro7GCSg6xT",
  "key46": "46QKmkGXRgG6eUFMF9HrXPPVH2oxJ1x5BeagUABjE8PNxsG7k9A9VNYNmyxqAvyCudBXeMoxJpi3eEnHxooE7mTn",
  "key47": "5f2gF336P7K5rTbFsaEeDJUc6AJD8v314dxj42pMLxph18cdbczGNaLhj6rDp5BKP6GMaA4gG2DgeSwRiz9cGCBn",
  "key48": "4MxWXPjFKm55trMgUxGFYpwNZqnvgAykxZKQYMQRXiD2SDfvmpWhPzuwmuZz6CvJfHQ7tw8NsXGzAvgyAtjiEgyD",
  "key49": "37LHhCSMcPZqiL79W57WwuMEeNqDskurCG5XT1ZRqojyAmWWfxLxwbuYDfMFDUAdcxevWBGzMdMS6G7H3eM73SvY"
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
