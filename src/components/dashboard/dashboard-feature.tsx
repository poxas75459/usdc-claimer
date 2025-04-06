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
    "3hRqkjLGLVLMtfFAu56uvZKdC6k3ZzH2dEQWkyhhSXZwWg4MhAMpLAJiAzCCfmxLSNAqjGiYdeaxZr3N5nwbj6bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eEsA7Y825BQAJmtGbSSrNdygXGQo77m94zWTCSUmzgMccsUaM7bE7EvJpiULXzjniZW6jgAgUcGrffpTQRqHZn",
  "key1": "2XgikpVc4bbk55NhvbpV6K3FnWmkLjUYDpaf2mk6Gt6zsfYFtVY1fxhuMVSwZtiH6uhAYrWj1cVmoaPHH9Jfr943",
  "key2": "5X14cc1X5QRoTcAf3x6QUQfhbxeGJCUaCLSfo6SjaTkeGNVPCzUvwfHbhZ1nbEVpvN7hoCDufXgSuQLjf1frYFDt",
  "key3": "3WTXvbaMW557mBKd5KrzM2dRxPQAtwUcumV6cxzPsoHxwXKzQo6c1A1C1q5AtKLcXLLxY818n4BHDVFezabuQGe8",
  "key4": "3SmHRxawBedQMwhMhFTpoyqTe4CaWxPFW8SmbmbV12fzDYR7er4gnnrBfYLZVtBJmkNpw4SezVVVww2z5mWteBnJ",
  "key5": "4Ntwi4ccnn79UECa4dJTnrF4eRtbGSja4qHRUJQE7f7tFLpqzWnQHa1EUKi8hkAHekYcivT1aHRh4gfKsvWtiT5V",
  "key6": "4Xxd2Q2cW1YPp3Ksafq3Rbj7Q7KeB3ybs3dEt6ytbs5q5wBxsXMGzhFjjxQHYqs1mTtaAVPSpDR5hkENzsPxE5Tx",
  "key7": "4BetuvzdpedrvUU2jX4vq2emTNuajZrC4ZXXRMatPnJPkgh5PKMMdcjorBu1h8V4bRR64d7AXg9VrzBRfsZKm9PZ",
  "key8": "2Xsa8158fz7HYRxgDqR1jAuF4RAL3VKGtDm8KxtSk6oBVzMZY8FWLddBDjR3PtGh1N5TZnPtTx9zVzxscZdGtos2",
  "key9": "5etGpKjUSaRZRFNtEqTEpoz2Qiu1GwdTAyRf6zPAuJmayRNpcrhxQiYqhu4BsggUBtHFMvUAZLGqB8kueb2N7BRQ",
  "key10": "2wh6qU9dHJBtqxQ1pJzqS8BkfLHKtknxTukzt3mjhWwRQL7TgfPM5HewRo9kssRu1Rg6NDtYSFV2i61jwG4wiZyw",
  "key11": "4K6wJb4Atj8NZmKXoywcYrMv3q23f9TJXzj3Sf3t6pTdFecq1rpBGq5G1R9WQrPmwudXYnN5xy62Qx7ZcdwmeMSM",
  "key12": "7jL6TFsWFQPYhEkwstsTEXDAhjfKF1SUaUsqWZURfq4V5UTKsK8b5zpXAQBS7eMJLPPrfqvFFmFL5sYESHkZNZg",
  "key13": "4uxWKgiC8em32Nd4cPjBofU52eCZzFTnYu8PwcznJ2UQeVMGRpHGRt7Z4FEk71p9yBLXBdcav5Gr3j1ZtbjzLSkK",
  "key14": "4oh1cvkKgwUFBRZHAzGRQPttwCQ5AURaWLS3vnTWbrYV89hLfvVEULCRFYjbEZMHztzsV6k8JJh745MPjZ9EseS1",
  "key15": "2r1379B6DeKyisLJgvpWALHPc8rJe5euMPmR2cCxNNzqX2f85bm2PRbM6UuDgvMD8GqMei2fWVSCGWTQcf6pf1zX",
  "key16": "46Y3LJEQVd2U9RNQtuYAwGQ5vHTdhF1fuXYWLz2VDvDCMLG9z6zjy6D3JSYJLb61nUR2PKJN2kMuUyc1LkprpFiu",
  "key17": "M2U7KFVwcMWaFpqSR7VkGzgJtD6iCWGw555hAww9XGUqiYMCAFsuwuZvY91WxFTfWcH7EFsZpHATYpsvoZGbDp2",
  "key18": "2PVeDzUVynqCUV8PatpTpTPWLsZjBKeo2sCWDQC17m624yQ8dLHtZVFrCoX7skF9ejh6jYAbS4ZGAqLtQ3ZiPmkA",
  "key19": "5jUbFcrdvKwk8YtNnF68P4Z5DdWjdFEq14TPiPKpo4Q4z72o5V7B3Ypy6Sd9zCbY67VkGBtSXCvr7fVwhkczRLnV",
  "key20": "3SaZSBdg72iesfiiWRDrJwENsSgLCSN28FKxNT65WDiWswEp9QL8wTrzuQhcWx5Li83qBrn18YvYpX4TTzmXWfJg",
  "key21": "XYLEa11yv1KYdfmHyD7sYEGxHCNuM4eRHz5HP1vghe5xrQQG6djnghowTX7TeeGayXYPCTtLviowjZTKVMVnw6J",
  "key22": "5Q3vopXmF4sn8mNRgD4Hv2NXQz14TLmMNPHzZHfQUZrSXNFhyLScmPCJnTz2P6rSkegg6keKEQXpChargdtDwTY9",
  "key23": "4jy3esP6tQTs1QkDfnT7gNNcdCNLNzjodddJwQBNpus27pwbT2MeUAhinaHQZkHKtT9LcRTyLXzHfmsprYaFYPHt",
  "key24": "Ns9WDhRT6YGDxqjN4pyqpQ5fW4xvGw86XrVPg3bjNQDsGczPRTb3Jf17Xnnf7Tvko8AmJsbprR87zg5EujEKEXe",
  "key25": "3FB4mMNswy5CvT15zfW9t3k1R1DVEqRdkE12t3wW7CnkMVxYgpghsLzhxUifuCYMm7imj3YniZine1xo1QBbTKBu",
  "key26": "5PqXNbuXxd2xsi9F62hri33PwKwPubctdSfEzBdhf4K6FbYVunjLjCE8AxZ152wtNfnDvJim3644UfjefmVpJ4XU",
  "key27": "69CP9PLTzP9NUsSp4Rq7SSPD91jUZGreKzPJLayYXWCBz2rJEifWLUu8rsym7mpuFVv9k2ihn8Q5HYsagDUjzB7",
  "key28": "5inZyuNhzQXCNErQy6tviYWLh95BNrZAzuJvThrAx27L2raXL2udSRpHNikBgoWsP1qWfB7vKMZLGm7Cx2NeoHMr",
  "key29": "KVNL9bxPuPVXGyCTKjg34cBJfeQfqwk4Lig512Gw7sueYYcWsvF9J5VFN6WRM9CGjR9MztmxJe7T1n2i1nzn19r",
  "key30": "66GjMiXt5LA6tjKBx5fcc5ZE7dn4ccmt5jzdszheX5yxWutmASM4GBQRYY77PWA8KQ4YcYykreobXZMCE82mM9e",
  "key31": "v944Y7ThA1qzJsrbNifvKNtt5NBPah2Cm2yygqSFH5drD4XQcxrzewxNEpKqgrVQqiF2EvrKtrWaLe9Qgk5qBgT",
  "key32": "4hm1uMXuQjvYTswaRssSrartrirw86ooEUh7aBnm6Qukfs1jvPLmomuW4MuhGY69kTUD8bNxGkq5TWr1t1zaz3Ws",
  "key33": "gVFAbGPfUj4Z8htBXQW1tvcVPCHHNsm5VCdxAthToVvSS5bRtoB8dFc4Fj8ZRLApwzqAUQJVRRVZPwuFPjGg2fv",
  "key34": "5ZyUk22XXshHLozEZYZtv8WxRmp8ns72ZDDisxtYupJAvU5ZgrPGSoxHpjrLLFf4xUQAvVkyGeK8hfqQd7JhJRW4",
  "key35": "5UadpRrLWTV3wbA1RWP15htfw2foCyXGL1kRYFuNiyoSYkLoqdEXopGHfJwQvFLuvZVMWEnwxzsSpsHh1VnwFA1m",
  "key36": "4nMoyt3f5QqUA2tAxKS5yB1iULF1zLFp9mv5su3UXM2ufBiJ3sVedgUeBvbPmVgNVJy7xjUvPhqmmYY32JGkeVLH",
  "key37": "3o141NW1sbT4BZYWm71oYd5Z64ySHmUkFWf2vV9HxJtaE5eMcsNWtgLTVt4s4YAcJ7xVVZAyRTxk2WzWB7ZxyAdw",
  "key38": "5W2cbYbFwyo6JAcJ7p4GwfsQkfpTd7G3vCMFtkNLSjVr43hPHo2zkSvc1THDJXdBADSZbx8j6kNXEnUpq3pvqA4S",
  "key39": "3X42CoNyVb8SAjjZyazGeXSDisvDy5yZidZejXDiZDLQYmeBQfUzUVDarh2nYEsJem5qc74QxzNQRy4tq9apfDVp",
  "key40": "3TrJXiYok1eLTzxQM8sDP9a8uVroHas56jF8LCncpPnPRwa7MVDs73UAtM37P899jgk7iE2Q2o13qbHGtjzaFA1q",
  "key41": "5eus1fvHNfAcBJhYvK1HeWB4UkUhsiSd2k3HQSMruhSvqiLxZD3pTVviUj9gkWs8acgbJymZi5Ju8uiRTx7cqEJG",
  "key42": "426JNkgkGRxkBrhK3PCVnFDgYtK6oXfeR3aeukb3s4km7FBR4PcKrJCQkarLm2e4MBpNqZNPSDPACMxWvmDfQpHz",
  "key43": "5CNGdYXXTYEwrHaFRRxXBcZhPTvY4tpGPQ2PohdqkfZqUiN9RByxQ4H4xiaVeexoCXMG1Bzd8vXx6cBPUa3LxyGf",
  "key44": "5ANb9rKPJ4tXSShopH8LUZKxZko5gL25wEJVMaGoJzfSW1KAcy1pZ1A126nJ1e5oyXEo2zNcAGPgGusk3dcH3uaK",
  "key45": "5cdfUiCybspb561kzwUyqmQmfW2oSFBBQqKPLW5N4njkxqPTJ3Dg2W65wQSyVreRpK45qk4oC7u9FfxCyuD93MtN"
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
