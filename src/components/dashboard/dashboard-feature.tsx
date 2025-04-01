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
    "3w7ZWehWX8ur2uhUteevz7HcJ9zvfRqynNnN2FzydJsvLAD5jWwEVFMamPBabeyFnSEdt15VbBViQDhEbHxe3Uu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oqd2ehJaosqv7wYgYJP5odvL46VAa7Ny1hAYbnBbNuXSvUuUL8m1XrEaRaCdQ7UgdLfKBQuU4S4nSWaHcnrRi4",
  "key1": "3WD8o6rujFWNRDMV1QBGpDqD56eBB3PhzC7rNyK98Dpefaqth2BUBq4CDK8Xa9dfBvUA31MQH1LyGpYtctEYH9hu",
  "key2": "JpCohTV6nS8pMNoroU3wYqv4NM529RhizBU3C6P43QdiQEXXzGurFJQB2Rd1tHKyvrKL3nsapNY9rVfxbd91Uob",
  "key3": "5rTpEXQ9yK8ssZm9aw2TrtYrdinCaNTwrDdnMFCMdB1tcbhRp1QvsNsDYcKYk5ZpRDKjTbK69Hrn8J8Tc72kaDmM",
  "key4": "5YWQfS6dBEjRDNSCR1SzRzzXo6cpbDW4hnAA5m1qvrnP9HApq3XmPLszJCRmS43bvkYLCSv8Mq9fPtbQXZhwtuZM",
  "key5": "3k2PVaq4RKEbyfxrsnGvDRVES8iRP9J2wHfgXEAm1jtbLov6GFuZiMxgE75mFZmw28dAk29SqYD2FdzKuG4ZmAJH",
  "key6": "2oV6gEn1oZBPybyC5MaRJ9Tk2uw5KuiUDfuskdU3eYLWWkasRkk2EE728UEdm2Sx3P1YBqFHWgk9owEV8QM4o35k",
  "key7": "aS262NXAg7sTTPFYMmXozf4SUJGuavTq1uNRoqLcTmFx1RJu1v4mCZyPw4ahB9dsnfsvsVBWGjtAMnchJ8xgKDR",
  "key8": "CSJMWmeWHSgh5w7kP1ZFB9cWwAjLXnF3BCmnFYcfBhsP8ksffG4e1tUuWDgz4wQMnR3gsnHeZoaJCTYifdUqiM3",
  "key9": "2ruNLS9nm7H93MrzQ8gFQLkfoBj4dnmbjxfaDG5TapUJCkTcmXQpaViT4fhp6t71jHgxMcZHCV7Wio6G3qGEamPx",
  "key10": "3PPvRbY9ZFx3NcYZouWKTEQ79aMRtXCZN6kdkfiPEP31vV8B1D67PaYZia79EuXhXjvRRFMpzTGmgKcC2Q3MJfKY",
  "key11": "QKg2BxXEfKsDmxt6KH5Dytre55XPvdx7CvAYbyVuftyjhQynJuZ8itvuXbgVcWuM3JD1KCSiJ5qENqQLDszWC1z",
  "key12": "tY6CrfRwUeu2YSa3e8GLFmrQrMTqywuyq9jnffoigtDaR7wAEQvxiqVXDCmz3p2EvszfGmU1F3xDdmrQdqUHSWh",
  "key13": "U3HLhZtDkgpa6oAPkAE3vMkn2AZSVmfNNx15SmXDqoeT7MidpQZT5gxAvD12u7rKDWYx2PtDrybzr1E4GsuCyMs",
  "key14": "2DUGRg7L4X1bjWxnTK39mn71RbuGFbc99Y3inzdUyX5boJj9B3R1T2CQTHRmoFztcfzyLfQbfwNJwMBZhU4NHQg2",
  "key15": "2dqwma7ei1ZF4awePHwqnaXHSbJxc9MSAjCLp86t4TcY4WiQn2XaEcEWC46P14ERx2XLKMDKbMcZyg4Xxtqzdg91",
  "key16": "5QxCfcQCLW2L6592TKT5R3M38uV4yAUpKfft2xYU6v4m4C6nWMXHCJmqpSrqt6hom5vx2TcK9y9xPdNZKgES3AA9",
  "key17": "3PhCq5h3wkFTWNk8S68gQYCSzhzSRMZGMyJB2978Zts4oM9dNC6JdAShHoczYm3L734MnwcUTWU9VhycGJgP7S8t",
  "key18": "21VQffP9j6wVRN1FFVVxEPiZBdrggxp73emtPL5YEe29zSxRFSoYM1pnKCnoZ4HjqUFt3huxBmGm98BMjb6Ew1Xp",
  "key19": "2Xp1NMXA9QaH1CSuNsLZAM7HGnTpU7G1WwxwbsWodn157v98uVqtYZpAGbavi8DArM64x5ht9x4f8mvg3JfjYVpc",
  "key20": "3CgWuE2KD2rCGkBxQw8bJajQo7zRsX5Aycth8hbYiQVHzcEXJ2DtnyKHhLXU9fg1QWtvtQwPyzYu3uExuiKvbSGM",
  "key21": "4AzwqNHkiNzZ1RZaHsyCFkBTFfTzLax78NsJ2pdLmJrKV4czfqubve6aWvYyh3w4p9D9o71FkdG7eCAMGX2tSPAi",
  "key22": "3UAe8vwHyw8pabx47iRxDwuk3uKUN35j7MAQqhYQe3c3HTmoagzmN954qwTeWrLdxFXBt3daEmJFHh61wuPbDFFE",
  "key23": "2oLH6tr19Kd8JwMev7CAmHA6e5seG5WcLHfVexrRm26WfLAFuDLPhHgbrN933uVHvxMcHVRYiurPy4apdT2jPRg5",
  "key24": "522pDyt42FtAdy1fxVb7bZGhaWfbYvxjJEK8DK9eDaAgeRtn7KzyNNmjkFwraurXy8XMB28DLhtF2JkNh5RAVncq",
  "key25": "65hdRF918KKSrvtbLbwz5vYNJoamQnYGuVmH4C8eh9Yi8buucuzTG929HeaTSdDgnByNUpBSKfnjFGx4BCbwRJ7s",
  "key26": "2TVDQpZCjSCvGSVA1AZr1neCDxwJD6weaQqmExckUAej1evueawcYQimUepxA9QBFq4FsQhAJMzc4W43BRWfFir4",
  "key27": "4MXTXjNhYFBZFD12UtGwjez8CkUGrEzyLmTyvdN9tmjrw8Qa3peggdxyyBNcHF2rSZypsysq5eewD6Z446NDdxJQ",
  "key28": "4hxFfCAUpq5PdqHCv2oMhgABBCjL1PgdfiJF4b7TFBDvtYthwze4W87fTfQCaWVh2M3wxuyscthsfptSRCD3TRfR",
  "key29": "3138eUFkxotG3ALsMJGWuMaWJC527BDbUq75TGwzqLnxQVzWj9VhcfDfksLpCDPc47SHzSwwYE3oN7b79N8KSfqF",
  "key30": "8Js7AUopViv3oVQRYYQHTJZ2Q1TCtKamCbRrzEgNbaQ4HvJ7yw9jZqURiBHBprJNben2fkGV1GaaC8E8cPWNxJk",
  "key31": "4xg9nk79rZpQBGntCrT5m9XaWoJu6xTrmENLAYFFNbMQGBvbSBP3u73XatShfXRg5jSQYPum9xYVKapzTZXoC6wC",
  "key32": "3EW3SpG8iGpVWDGAkd7fjfvDNAwbEHviBgeoh36pDhprjsB2hjKAxc9qxixwbYT1REJrNdcbEt3EuVPaQt1QDLpF",
  "key33": "3JHxAFaoHRw5pj1ZBQyGtRed7AypWtb7Y3VDen7uMsTBp5XHK7TP1XNx5q9jTxUs3qcDTEzpebGmmAJj3TWRVEWF",
  "key34": "3Dopx7ZvveKSaaSWzRFpKM83yDF6YazTvdHbDfNqLXTmGDiLEGGc2dYdCg2fmWT9JVCq1w2HzdtjD6Us5tEcsu5V",
  "key35": "3oUKsNZwHeYABNfsJf2cUQDRpRgwtRbPqcaFzmnom9Attw9tUnufub6cBWwWQDPBy4NesmyR5fUfuaHR6eSUPMUb",
  "key36": "5XffSZz5uCLwdzbre3MfbnpfcgvPydY4wyCVYB5hry2BeHhF1nuVNkweuNeN5W2GwJj5M4GdvsEadHE8SCRbNr6i",
  "key37": "dLmos4dhNyv1WXSmEBTM4y82qDk6SQnzH5U8vWFsegTXYhDBxsyrh1cdWKgG744RdTvGSP22SWkcyscX4vNtVZ7",
  "key38": "2cKoTb5ZnnDBBEB6peuvXByeCdTsCt572KrkAydKwSoxbRcDgu9A6rmdPf9unPN1kZ5bjHn5MvHSJpJBXmpnnCP",
  "key39": "5ModQ6BKERgksRs5pyQFGwsSCShbr6Hda5N3zs4wR3U7t1S4bmHhZKPo9QbdAewYUmxcM7Eqq1eZ8okD5RG3jXDs",
  "key40": "4YLML3Q8akCZmiCnf64xoGwYBAsruTieBhHipq2Qe3FYk9AcbBB4xuWeHphBiexykUPrm8xAF4k7YaYdsNnpuMvG",
  "key41": "2zpVtgerHqGSgoTfN1eswhWcqXTwqQhuVPL7Uwejo1A8p8tcAhEovcU5VkeUb3UgMTdTer9PnCD1NpoQbxWSsNm7",
  "key42": "3uGWJk4S4cgPvvy99aDQajDsJU6rknamfY88ho36ZB2fKg8qx5627nkmnWKNt6HkB7UQ3YtKc7WgeY4fa48T8v64",
  "key43": "3Vy4qUrAVLn8xuhPjG5BPoc2BgkDRT2TToFBq8ZG8uJ2GkY9B8YXZpzjTLyBN24TXn4VyzXQBtF4Ehne8fjQw6pk",
  "key44": "4gBqt7uQDUxWr5fU4fyCZepz5Bowivz7uhKSqCFPKeEiFjyKjbFH35PBBkWHQw5gc1evdTCL4my6YreQmWwhPe9W",
  "key45": "3dBH7Xcf1hGJ3fuyRYr6ZnrDVRRGLenmTsuZobd7bmywKthY456t7Rbm1NCkh89auqQjXBWc9B89N6NbGbXAoMmR"
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
