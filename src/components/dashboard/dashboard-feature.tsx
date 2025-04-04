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
    "5wLoiY4sm3S1QzMrLUG1abXk593BX5zXysCCAmzuECre6WyABYw8RSudaaSMUgwrAQhKTkEf6Dn2UwtbUvNqJa82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMNr2wQFunUX1yw4a8LmrLT2dtrj8FfKSQZRAmxrLFY3YmyrLw9Y1fRyiMgQMuGETY81UuNDA3YrsZBwnqJv4QJ",
  "key1": "4vLvgvm5UET2uJCRK9cp9wxmeKnRqnjS9H4eQmmp3CHHu4QFfSRjsMGaiPapHVzYtKE7hJYU2ZCKhpgakGoNhm8o",
  "key2": "3Xquz4Ugji2KRZimXXKFe5jwct2XnYE8LzKVFopk1xfid9tSMDQAdRknUmkjfbeMm5Zw8mCB6Ku7ivodGVEW6Qn8",
  "key3": "4SmyFnwSc7fanRUhmXNpYnMYeS6bjkuC53zvQFaDeRoXD1qsMQGukGx2WiRaeup54LeRt13TKwUkw8cvEuFX34xo",
  "key4": "2PT6pcoxQkeQxqEfq855WULi4fLxFFCmbPC3NhpEPcbyASEbeJD9KeMKXedTU2RmjbgaMLn5uKp21Esb7Jv8otRM",
  "key5": "4UntP7wdbi72kR3psNR24ERsfGdF1gxj7qoaaDbycNvsriw54VaW9EVfq8g2qJp1j2UF4sLTABcwpyMYtFKicpeD",
  "key6": "S2gngoDpzGKA6bf6wAPPZ8285ifugF2yECsNg2b317Rvj2Wu1jPuiR5iVcwzVnUzKgtxFwqZi4ysKzpUNDAaeFE",
  "key7": "df1npbqq7vSnHF972WEXFNmNxjDGBXGRsUJvSmz26MVrWd9bnCtwSY73mCqwLUNqkDKCuvLu7aD5Vdz36nqW4v8",
  "key8": "DgjUML9DRcK9onZwbf513xw8yqoGf24WfpRiSuNZBw4HZ92YAMKswMHZHX8hEwKVnYXXHT64uyoMQaEcYRDDEGD",
  "key9": "44RYDbuZGSsYTdfjz1wskKq2mzPr56hBQbc7kdLvsScid9fKpvQNsKTj8WMS2zed9yKjprFGaS3uQM8G7PKrMAz1",
  "key10": "5EiDipRjV5Br4hQJXF1FCFUB8JfK8p22iq9HKaKe3x6srsWPfsYnVKoit45Q1ZknhxDrokwJcVnK6ZRYzYSYQjKV",
  "key11": "4s91mZCHqj54xH9aR5ybBS5F39Sd5khtgNSSmqqprgARbhbTztnL5R5Tb7vuGw4nngThxj2G455vBsk9ceSTLJcP",
  "key12": "GrzjXQHr467W63HtYJaVkmQbx89wYh6AbsHDrr7nsjeXdsDH1d4FFqnxWdeag3qZx4ypqWXQv3zX2H4hiEECoX8",
  "key13": "4RQ3W4Fw3VhqQeu94JsmEtxW7ewkzbtaFKbQgCS25zrqhK8SsDyCm8Wc5N1f6ynGhwxzYTb1ZVYEXXVeFyG9atws",
  "key14": "2iZdfjStQekzEvVyiMdcE7YmXW68VGsn7k13AVQ2UAQyQRBVCFr5rxv7VntWYV3PmfchpQoiyxjiqkW7AVJCowW1",
  "key15": "4XiNge64Gy6XMwkk8oyhdmGfcMV75ANGKpbKuJ9QFEnbykAA1J1ALtXPrmio5HjciWaCiKDiWGNZSKoGb5wHfhiq",
  "key16": "4G5zYDF4evPYdZCpwyaxvakKGNYwbcY1ByJzGrnV25vciafvf2o29S3HQfS3MbB5UMFxb9EmqXEj1pf4uWAiupPG",
  "key17": "2Wrc5Y4h1BwV79zUnTqyiMcqS7zapuN3mcQA7gbzg8z2HEZVniZeDVSinBWsudm9xwR5TDAe33d1LbA2od2SSviq",
  "key18": "42TBGFHdjxqCytmbokE6f2E4KaM7qWriX3gnD7eXkB1nW7w7Ukrz6tmaMRRyWjLvsKNtDVhi2GfsjQ31MuwrJFep",
  "key19": "546gVzuRMiqVRgHytCcPcpG82VvKWsJ4MKzaU5PkgYnAaWCi8wj5CP29Q3aJbiLAbUbw5tk76fHYECMhg4DQrm32",
  "key20": "3ssijz5jyNmH21KCPhDFpDkMg5FENa9w7mJKuqeP8rW3Rv31Ws9Bs166BMZ9DGKbmtBwjCR5S3H5R4txr2ruKgbd",
  "key21": "Qxtb6BqtGypFsrwQv6pQ1PzzzRx2ZmePPHJs7vYewYXaTqEjxtFwamjVnb4zFtvihnrGJVyhPdYxUR3HGi7qj99",
  "key22": "447pSJy36Bu2jbn8LXPgpHZ8vCs43mq4ekp9Z8e5zgf6bTN2LwrfU4WXP7Zgzkybz8SM9WL3R8q3FmJWHuLeGg3m",
  "key23": "3uJWpnewMKKL6gNoRcZTxgt6zwLScM7HGaZC5qi6V7ZfZrGfoq5trKb15Si1jF6oF9wfXpVtrWmSrv3DQpbpgxw8",
  "key24": "5sBqCQA9eRnrD3mkuJkTzWDSwbzLXR4u5Mp6orqBazCbTsZXgyzGBvckbqC5RdB7PWLo8WEkAR2N6ZDdqVm4rJD7",
  "key25": "3D8BrZ9nrhsZiG5sJUYBi2ZNzs8ZsnyQMP7s9Sc1AQnPvmLYmYqZzNEXqG283CJDisaUPpXvZq2cjZ2cokhkuVJo",
  "key26": "3fDJMErasCSgFVHRYBc5oVfQ1WEjFjVNZxdWUnsddfCMhGnecLVFC68ezWZzAHaqFbQioiMo1FCdZbBAW9SRZ5xs",
  "key27": "64TEpk4a8cHba5VEFAQmnzKrXhewMYU9CNMGA8HABiNNkgxmwNnD1uuW4ECxBKM4vKGsbQ5iTj1kgdD6CZiyvYF8",
  "key28": "5xfun8fhDX7oDbbqfpRs9uUmedmQeWTzcEXQoPwqLH8zqHwm48AK5hNRxdX8RZYiMj6FCz726G3n243CzfJ9Kaoz",
  "key29": "2EfHP9tRppe7onu4fTKBo5ZNNHFqENQRgbDpyaCUk5i3qrUuUmQheWbSvwRob5dEuZ2VymMm2GZuQwtn2BQAC8Dp",
  "key30": "5Z1qeET5rHAdzRY5bpiHm3Kp9EaJ3nth7g2Ckc76VNcddiLdC1QV3HLpsyw7dT9sVJX2t5AQEyFbGNa4SLbCbf2U",
  "key31": "ciF6vRytbWjLLJqaB2VymG42t1XoPK9VUbWiNyXa4F7417gpWgVMvPcEUZTu5NMsuHEXaqng2NCFdXtL66taXnr",
  "key32": "nje94s9H9X8FMf1NcrRSKJ3ZQnnBB7G959DjF6PBHnp9KTUPUKmPbGEAWL28quPFRNQmz7e48YhYpRNpPjBCsnT",
  "key33": "2FCSTVBiMPcbnZygPXwsDqiaS3VsBqPzkUbc3k1sb62PUPHXKRHDANZ5K1EqbtZpHiaq4WieZ1fwv6vMGSNscNYg",
  "key34": "xTzeunHCP1AcjPSMQxfbiLdzV6TBzN93PoYC6sKkBG8cZAym28Y8Tre2iGBCxMarJ5ju9Mgtga38hU3QBXzDbkd",
  "key35": "nsttkmCkAPPDtydTvkhuHWnwHwJSKpMjtnhNEMdZBywCdgpZ282mM2v38PSvJu7niuXHiapjuHVjfMvogfShdZu",
  "key36": "g8UKK8tXsJKaWH7drmhHfUZKKbR32rHwjhzn6SWULvU5rohVTSJUTnXvN7K3bjkA1LRataDzX6b4KaqfjYwcsE7",
  "key37": "tVxHJhUY8Q6ayngj9yrXX9jLATmx2kY3j97tVrYiEW7GkJpfx4U44SXxNjbnNMjnH5CaZb364qshSyCT68Gw4wv",
  "key38": "4dxc7AjnKmsiwpjBP4FGw2QfejoFCuesFMBnFcv9BAHMLS8cvKRwkyGMeYxbRxfEMFMo9mX3o4XxEzHXcLo95aBk",
  "key39": "3rizBzBkoXBmSS9UxHe7mLhafs7RzeKJMdng7Dyd4PpqAUxT4mPdAKLGX2vgc2aGqCZ7TXzunB7Z77yMqBWDv2QL",
  "key40": "fGkMxZzDtDT1xrPXnukG71KidoBt9UU1jRMQDgHR5GkuUoydEYmQfYwsQw6qwZnVKY6FQnzrCfz91aunH5bar7a",
  "key41": "3AU3KCE3hxNbG2JrWqKGHRy18fsxhMZUFXUztWAozkSxXqVDoCJRZF2bcJnimDSMdWwv1DiA8iXGVu7wqRALUBHy",
  "key42": "2mPPjoYhdNCG5FkkQdmEERPUicixR6T7wvjY3erN5eUEfkMynKzeiLyoQqLQUwD3EXPNNnoT4e1yFfc5baZBbvHB",
  "key43": "ZoBAsnGc8WSyrkwSA7mGGMDYj7i2gzBE8fR99MJXarw6HJAu15WuRhD9SuvjJnyjKnhPptNsd81mkawMxBwzQxd",
  "key44": "27sPMwVsBdRCuRhgddNhBCwJh2Njq3VftaDAJmg5GnmAEANDKvKL4VrjBZxNGzZZbQopBQh8mhCR8qaBfNqUW9UE",
  "key45": "3693cF9ucmuvZ5dgKjqW92VvbSJMC1XTFEaHZ5sfLJSp1B8VpvW4XVWVtpFnkY1KwBTedJ2WdpDtWqJrb1PoyHiH",
  "key46": "ng5Bq4g9DCM4iYmKRs2MqVkkb5xiD8tHEXB9wPZLrQUmMm7bD6z6FR3Gi6uWFBTLvDaJ6ZoF11FjgM3fq4j171t",
  "key47": "3isNa7J4y7f6ZWenc1tsFGUaGCYcNaXYAuDZoa17EvxyPnHKGzVRAKP9QTwoRiLJrMa8d47LgStAMbZ3LzK8xpPz",
  "key48": "2B2hQtZGtHFAQkKquywbmSL9iUv7yuvVDYemMpst2KagtT9ygydcZEHUy4eEJaj6me27FwehMAqJKoDVhAPRHhdE",
  "key49": "3q25dnWJdKAfWNZk8AQjM38sq5Z5dGif7R1rYVGSjFUV7pAGvsFzosiDDZ9BJpYR1dpmPc8nnRg2X3oUiziWMTK6"
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
