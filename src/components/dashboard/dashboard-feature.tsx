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
    "HRBQwcUebayn1rK5GUt2oYChHRnkgLVat8B73U3sYJCurxbb2ztAvZ5ns9eV1t68rHdMXEf7PsESN4KeQcX1B8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfxJM2q2SDhjGTEumrrkq8MAyCYaxGid6Va98u2UQ93REWDpKVJeUsazehg2ctVtghvYr3UjVbcbCTWZ4wg7NRc",
  "key1": "2PYFvP7vpMPUAVrM7gL5x7kUrNMFsiZs8gBB2VkAuwLdhVLvvpVyUSWbDAY1ToKkaT5BgKD7NRnZpjsYTqScTeRC",
  "key2": "bhmce6XpJBxGp2Cix5Bd6o5CGP4Q1EJyDVPsxCjDuH1L1EsKTangLCfGRKdCGRTZc1FiJi8YGw6vVpPybdf3789",
  "key3": "4yeTWimQrprTccFYuu5izeyZWQDpdvEkFvmwyeEwWscbb5XaaeSmGhBUkGcVKdpQd1H4Z7zWDEurzwe1fie6hHac",
  "key4": "4GTMgBR89y2apveyVYR1AhDGkvvmRKxRhxsArGSuABZE4VmRuMCMY2xYoBRrzNtVbAbdJoopUR1T1pvW9vWseJfX",
  "key5": "SrERvStSRhmtRL3ktHCBcmQaYyimwj1tE3TZqr3fuB7FHWARQv2Y8TJKRnahUJMeCxqjnZsg3Z5os5YwoPTbbH4",
  "key6": "jeEa1BFAVENBzjjRV8LCbfCam1DGvTZoHf6a9GPaWHY6GspDMRBZTRsg4kHNLESXrrvEqAn19rP2tqiAsfXLX6y",
  "key7": "26kjCXhRSEeGEuyBrmb7iLXPrTJ9yozjRe51MFKzFRmQT9NQTneRAzPwxUvyyMSMaG1G4rDvBCbs1Ahg8poZzziN",
  "key8": "58XiUmCMwgUNC7avHCxQZnpCgqA5D5NzpqiYbVKVvcCqZCVePEzhLHc7Abxptc8D1VbMMz2xBQPTBrwZgdEw1FPF",
  "key9": "D164q8HM4aY7kzAL9yDsDrLNQ87FzLfYVLzvC1D5ZLa26eD6QU42T5NjLUEGmrMjWnJCVjh1hzgYECBrer6RLQQ",
  "key10": "4zfZS82h9B84f3wt8JeFyyoRvSpMa85oFBxXVezSgH2WhFp3vWKzBr2NBnd5iT53JVstKjrMqqnFXW2ZQ8HKWL4t",
  "key11": "42fidBq3NiN1ZzQMSnQ4iAPVqCnkqa1YfuyJmhLwWfL3rUNm7qHG7F7b2pPUs657H24QRhY3jUz1c7vTsGBGnUVc",
  "key12": "oPQcYom5u6mnHxKgAosChnz3ciAUJBykWjKbW8AggbmgCWNmM5v8j3jVG4jVPnxZiNG8c1PtxpwwxJujxTGeNv5",
  "key13": "26gqdnu3cXh7qg4nVjE4R9mEU6cQxvnDVWy8rxwfeUJqpTXb6M1yUvYH37ySfvL3r6CsvGgf1gNjauXipyGwDYxx",
  "key14": "4uiG4gtaCDKyNB7pqWPSWJYmv8y5X3qpu3ynT6Pr42vvJKKDWyUwbNNokVjKTNNrNK2vVdfSzT7Aa8FW3rErgceE",
  "key15": "3DDDUNauiFmjnwb9cQcbG5NxqiF9PqGqa3S1ZwNfRyLy4NEH2Wu3JmYmecnoinmFdQ4F5ZSLFFU3ZzpnrCzWpq2E",
  "key16": "cDx8UqkYYsSDGs2BcVWoHd3Viyu6KbRsn25bBy6gQwimU42npgbuhMmVBDRiNm7VqdTpftvPzRmAWNN9yS7XWnj",
  "key17": "3pWvWweNrEyeNZyQ5Gd5kkazzMYnmqWoPNL2vpihnDycDRpjC5xx8dD8b3GLRoKCTvaL2yFFM1cLHkcK8yxHkkpX",
  "key18": "3jUHL1Huwdgxj8BpEjNjZqRCeFqZ1RfzQRhC7sBMtoLnanTKssaFygAAtD7ro2n1JFLq8phYKH6xuLYjM5fTh8AE",
  "key19": "5H12KLxVqt5YrrfRrWw9Mz2ihBy2ucdmk9jzLJ3NNWZUrvRYS8xBmLNCKmC8hXAxW4mTBmY9Qr47ZYnAtrxkz7Ui",
  "key20": "35BNkn2xn327s4uDLCN6EDaDFtX6GLKS2m27hLd8HC87dNyPSxwiwrjc447KpGweg98RXKxoE1zHMrY6kRpMFeyV",
  "key21": "3QrpRenH2SbV8j8uQfP6ra9RNtd4Wem8VhntacwUaZDSKth1AKw4bSRmoKU5sxhMq7Yu6z3Z4ENK5zJj1YTB2mJf",
  "key22": "38VYLDTPo1Eo3MqaNY7ybb2DY41jzvrcPaLucbWUpoWCnJXYTywABHLdT1wpdor3bTf4ys6kn2CArocSoU39q3W4",
  "key23": "XY49RcZ1PQoBAHD12yA3x8nu7sBLTSvPodTXQRUePc6JN1P6hMLKmeDDgmh3cZiLVgFurMFXPraXmJ5ouAsgjd8",
  "key24": "5zf7uPx8onWAp6Y6wum9hKBFWd4zv9HCVfhwnUw7UKXongHzVVSBC8VUDsHiJw6oAfjPDqHzVaAf9opcsPoYKT3k",
  "key25": "4vrpiCTKekmJ2zTQsRFwEExSUKncXNVQShqprB8Q4B87Ep5fPmrSXpGqQudsxBkwUN8wALr5t4r9o3pav8B4cire",
  "key26": "2eXHxBt3VQo73Zk7uf6qeKncnuu7RUaPWPxTU27QSPtce3Yp8q32WJTKVxpPZRRy7FFAXaoCy8Wyd8FzHEC2uCoz",
  "key27": "2ZatpaJ4xiN9Zs676mAW8phnYJKj4Vvs34pSMvLmhzPS4XvtiyP2hJLNRTRg1pdGcQYpU3tscwrWyiD92pe49fJF",
  "key28": "2w6XA69ReVmhBpZqdScPVj8ht55FhhARAvUKmwsbsTsH1qdN5YFp6dy6yWS8VZaJtTAdmZ1Q7YFPcHMmB99hXhp7",
  "key29": "njyi1iXheD61ncnmEG9864q1QCHEtFy5Ud6anW1kADzbxRC7nKsVCcAbRrthzCRrJXqRKnppKEdeZavtyHRcqtg",
  "key30": "5FaRE2wKkVnbyC2iwTSmGJJwUj2QjmZuTkQNC5fAGGzGAYBe11wRGo8ywnnNWoFb28vYHJTfB7W6WVMw6kd4NZGv",
  "key31": "Yq1RcdHgQtzmsYibU5P67y4jNXmTqrj2872XYmSCjfTDaP9sG7GUTxZet4wmjEbubX8PVuT85NePZ7VCuDV9WnR",
  "key32": "2W7ff43nLZheoy5NJaMrb3GAnXo4KFQd4o4x3WiatJJax94RXgodURnHm8zGqPjhAgqan6GFQbe1Tbt5pCsSQsJa",
  "key33": "5GWWHRRuvigewmwjh8Zt2nsha3jyaonXpWeJkp6rHgLiV8bCZYxsZhkaemHjf5JF2YQL2HoGAVRBCzLwicQHN9k5",
  "key34": "5BdG3d22tQbWQEAT2X9xzDGYqdKKBBzMXQb687B4bpwnWUbB2stDM85RW9SiS69yEXT3jyRKZZJndHV8YiVCsauq",
  "key35": "5A4y6MxAVgJFRg5FnCGE6Cg1ECFWjjqp4H3waobSsx5UL4K7rE95X7UDJY2f9cHUaYtCdrapkqVZLqCcMrBYs2X6",
  "key36": "3Uf5PvxjEgevhyu3Wqp8ckqyMV2A3kBKgUjQ5JqRUnhAumUdRU9yJbLudRn1pJ4Egf1oH4nAKpi9CLNytQKTX5Gc",
  "key37": "4ufbWJaaaKt6CCmeQMaGqYk1LrTUY3Y9SbWs72ht2GfsBL86MDLkLbWzwqbtpGTckBFKtaxz6YAk59GA1WuuNK35",
  "key38": "53M4b4LHUMXx4KrSLAphknuw6GGoZUZ6dSjV9ekae1nmDLHfz6m7gjt3YhXFGNEEHPG8Wo8ik19LnBEE9F35s2jC",
  "key39": "3gznSK5NEifmxD83x8bwiqkTw2GhBoRCc3KkEusEMWG4dUExFrsPc7wcVSwGSw5pVZ9nH7j6oZzxzhB8hckhojqf",
  "key40": "5MnpfubyCZrbRkZpbocVCJEBFC5uuyAmrVSEmysBcwW1e6p1H4iqqRbdBtwTkdipuRm9o5s7pVMzTmSPLobs2gvh",
  "key41": "6TBRKCd8jdbmHjTRFaBMETbpZkooJBFbW3G2s82j7Z71gnmrAy3mkJgPcLriqfmdMAcxCHGoSGCpm9r93AEaH8A",
  "key42": "PEeiizUwZsWH9ikAzTnPjv3jN5oukLEpzrFQVMxumDnw8pvMJ4pXbNuCcRdksAbx8vYhk1PBjQzfjKKTqp71zaV",
  "key43": "3uNCUSr3uTE3kVHTJ6Mudbdw3gx23kidzyH9rxB8LQpWvzZBPPSTHcHGA3PSaZ4Jsm8DZGZXB3fvxQUuk43FyYV8"
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
