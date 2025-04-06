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
    "5EN56MjYvU5W151ptwAEBEkL4gKdTFbMz87ppYkxcDymLbwN5o3zRaYEXUypNX8tqt4sStQE6vguWRGpjWcdQ6Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GDqgQ8XZWGksi9YU5iNUWMFfqRyep6zfLwC39izBzCVmRrzyUct14tLq6GpooWbYSpLrVGcGuF9LCzvyAcAj4X9",
  "key1": "5SS4P8Wv1MnUaBvcUeo39ipMtMxLJ9gft5JGWE4zq2cTptVfQAKSwdMzeVyUmw4CAyZzvhZJRa19Y6PTc2rXVn8r",
  "key2": "5m9TAkTEjxBFCgnNCYc51i9BPxG8Q5zauNeJbzXUQM5e9cjBQDDCSgTRdHqNYckbTjEv674BjgckNzTpN1y6H2Eh",
  "key3": "4x1QmZGbuWAbTyRGt2CGnqvLWmK66S7MMp1fv9w2eLqipaSQ3P62BJHBLoxssuLUUcaSGix7TBMjFHQM2FPKndpe",
  "key4": "5yLWU2jnaKXLvwdMUYzTBKCcDqfHiSdnMTvGuUyo8m7Ano7msoSMCfaonRG1hKXBKB3X3UkUSvfK6sbhj3fhEX71",
  "key5": "NkYL4tBAYy3tn8mce9v7dKKQYaKo1kth969L23yawi2uwX75FFBz4oYCoD4JaYjaR4wisYjastj5bzVkhTAftD8",
  "key6": "3hTWY7jonEeCvdKUn97e56bnomoFNQ712HE2rtqpEJpCoUWBw98fxh4ZNeefQ9ZrV1gA7vHeoB7Fq6FshjXQ4BG4",
  "key7": "5o7SuwRTKsry19qnb5hyW2SYsw5QQP8fdnavQ27FJjk5zuXuSCRDcJGVqCTLjsNrpkAiP9aZzQh6yFQFtSz9vuZw",
  "key8": "5aFp21gZaYNgwHhzKVSNQ8XMecnR1AkVV91PvE8RNuhubCf1AaMPpfu2oUU9arLF4skJWn7kWZw78AqvLkAh4rWT",
  "key9": "4KCnt2bicLKJeLvWW2PVt4SLeUV8feWJd9XHrrD7L63zMd2K7ZxfD19qCyemhh4Ac5eYe2tZw7sTQGEfJeMAzRJf",
  "key10": "3CP4M5Myq5wf9EmqyVxZLBvUYUFQpWK2rFZYDxzic6uaGK6WKmraPRRSoqa1yCWjCNs6VPAsz4WVk1khj39JJCqa",
  "key11": "2kS2kERyoUkb1LkVxQJPUsr6LNCYrXhSG5TE1Hno4jsxmVkD9ZTrRCX2ALSRtVaZm9iosNEpSE2ksJcoqpiY2vpA",
  "key12": "3t3HzbBHG3gWDuAKmmH32MoWbVFyR2x8jkeBjRSAe1PzJR6MaCaQFPMUPfJJAf4Nj3i8KgSfPJbY9VmP8jpchZ4k",
  "key13": "2bCtwpNfiqz6sggkYDN7cC9BwB99nk1XEWA2BFLsHvqNewPUCnFANoGQqNCuw3kFjMt4U9ydqNAB4gkGnZ6r9ZuW",
  "key14": "5aBYSS3YgExbwgdBT3km1sm1biyPD8y1nPYu9cUAHwJxPv2MbfpznTvVm52Hmd17XvHCAJF8StvNtJK6wKSkk7NG",
  "key15": "3u2yhmjaogwfuFNqKfwMxnkuTspbBdAe3K5n9DtocH4LGk12qRHVPiJWpH2NsTzEAtbnQRYjnSWjfSwxBjvHkjWV",
  "key16": "2T3XAmj5ehoAbE64ij4MJwo8v7YGrS883Fc3zZeSV996x7HyicQRgwEB5GKFJ5ZV542Kpge8bPvP3w6TpfzbeabF",
  "key17": "dnLxfDQ6kvzg6pn56ic2Wh2VkNu6DcmfNTJHKRDDoF2ohHRNCAQkTwCGhCv2wQPrB8BD2bnAyhUGCpQcTtnZL8X",
  "key18": "3o5QGNHe3FBY8yktJQ3w9deF9vM8CkbAuMRuzqaw2bM1ej5X9Mi7K2bahPQtT2j9s1wUzK4B2CvAqmvMrDAkYjGn",
  "key19": "rFbMBMso6775W9SzzcaXrYNLLJ7Qg2qYTFq2TNA3eKEq9SKoXSX2UCMbehj7KtxTexWiWMFA1Q2fCLF2v9TNXSx",
  "key20": "4rXuCcwq61pqgP61jKd9K22qsYhaMykJkKvK5mwzH66Pw1G1bzzh8Y3NnHdB6pEmgHMLKpmXG8D7yDsumnnJLjmP",
  "key21": "4zYjheioKuTxYQzPozb4Hj8A9ZodNMBinfrD1CDu8Qq9UmYcMTFdjKq2s6vX26dMVbhFuKBrnN3FeKpJeVchXh9z",
  "key22": "akMgx4EmhMz5fPzX45MJXCYKXkcMRwdnudoHDzXBHrpd2NTRuyRZJmW2vR6NyHfchKj47M813ahij9rMjRDpUp4",
  "key23": "4usoEwnXUx5Vz7FwTMHiqbV9XenCWEmKWwiqiBg3Yvn22e2NrCpsDeXGDKtYpi8eyY12N1BEW49rj6ZrNYgtjZ74",
  "key24": "3vCiGCzXZv5fa6QVPoZ5wZDQRCUXKLQxqEti9iAAKRgViAGpw7kh8sKGg421PEBJfZWKb57uhekHfReT5rV83xPx",
  "key25": "5sWLJNq5L53W6x43LxnTaZU7hrT1ZjhG4BaMJ7esUW8AMhj8GEgjRDPcpLjAcerWWunU9KXFqYvSSyuRsUtzdnAR",
  "key26": "4W2z2ZoLZUCwe757QH1pH9q2L8NQt7tEecFb2J99SavZK8hv8CBCtn2CQfQgLPG81VizavtcpXi6WTZt84e3rRWJ",
  "key27": "42wSQ6uqnJkf58w7nuNfMY7vDY5dJncZNavspuQ752LSJ8NZUMadWQzxevrLnhoKkzvVM7Z6cNRvZuTdwpR39Ugw",
  "key28": "zUJVmpbi2MmmkD1768Ka5Rc3sDG2izKyxDLSUeTnw2jn3UG4uw9kd77fTqET9be8kpjVtktpSQZPk1pqiybXMv5",
  "key29": "58UMC6e6PezrYyCXa5xq4kFXEUC4ug89BPchps7a1XW1THn72WTh7qw5heZC6HuRELuYBf2PkSRWPn8q2Yz6encz"
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
