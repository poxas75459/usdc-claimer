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
    "2HrmJa7qRNk2DqGEpLMhyo7w4r4DAmrhaJw43KGYokkeaSNAdQHFArRy5UNqckR1EPQPsKZC36PKEeJmjcspN1tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yeQeE6JB7Tz9wJs65QPZJ76mY9Ksr7NkHQJtVFN8jhDax6jwSrz7PBG7XQ3yU56saD9pqmRXgSPd6w3DqJJkxsw",
  "key1": "3VNvdgDZQh1LYxNRKjcX4j9zqzh3DEirGZ1ZM6pdmGGKvq9cRwkfDBJbpVLDhUSJTk3rcpC9jDs8J81kdtP2Ahdw",
  "key2": "4KKDwVT8W3WbNsGpPe7uB7VT39qw81Tew7g9bGHpAYmUDYsETyYTJj7ZZTA8uebYfvASV8XUnKif3cXjGM6x6SnL",
  "key3": "4gh1ekJqJHN5rtxE3jMVr5hc6BEVozmKWR8xipVRkCaYitBAYyKKfqDKnwXHqeVXSvtHB9V3AwBfTfz1gPoAvxvY",
  "key4": "5Fj4MnUvxmiVCk9znooPY1BhTGW3rJgZjpA4QvLWxCaWGEEpZ12EgwkMRYV2P5fJi9LMMcFVgSo81QXuWcsp2W3T",
  "key5": "48LAJGkZKdxmgAYgy7zcnZVfRgrQ5J5iNLiaMGrVifyneceatxYT2mAJyGrUcRaBhjoJEkck6pgdWkRYU5nSd1pw",
  "key6": "3htjmaNey6d2JnsLVWsNCDLvt8UsErwV4Ezn73Yz4RPbbBZHHZ4LJ7MhJFomBFveCyindRgbyUMvLRzR3nbZabhQ",
  "key7": "2AXg3JL6uyzTUcwGgac1gH35nr9MwkHdUjEm6m8zTWvqWc6pnz5Z5KmpkyXLvGVu35aV1VxkMVLTf8ENWq1ysSHx",
  "key8": "kUGoxp29EueJRqfcGEShS2Dr623NsM3tU9cEe6QYJcMfm5JPFNLEUE7GJRqbSNQC5h2UnoFrdPdbqG91GCMcPH4",
  "key9": "2CFMVj8CgoabhX4G4pzNATbK8QuAwNhoC9fPG7KT5LJNyidkRUsKPPdLxM4k7JQC2AqSWC7Gr5UD5PUZZ5gbSeXi",
  "key10": "3PcsqcGjAVSGvchSop2h8Ms99ycY3ijmSGnKGVr2Gz649CJiAiW5c66nRDMyvMRZ6TBW59NiuCsnm9wmKNxuwfoV",
  "key11": "5ghxUvcXHBwLLNHhy5MecJBJr8UjkKXKUcr6PRvNu1EiEoCpt4sG6XMfSHnYTojWtm65a5JfEK5XU7maU4wps6yt",
  "key12": "4XBp45pVDVrVe6t26oHqqXAJLCgtnkM5FiwDUTgC4mPhvLQMTuZ1dRR3u778hrG3s6VjTxLeXT2Bo8e4uAPrEzts",
  "key13": "hTq9yNNCCwKUNoeUzR2fvKSM8AjLPdMQpVDvZ7bZzLLntMmxjcY1SDgbdFC8DhpTR1YfwASS5SoqF7Hj963NENc",
  "key14": "2DiTDvAsUdXcfhv75ZgQSQFuqFDDvfQnitEdoW5q46BG1XCqMgsWYbLDQFZubcBw4jko8AuB6Turx4qHT2cyaV6L",
  "key15": "45duC27P5FvdWJYUMahfoHFcYj8gYXKm1EDkjnSnDXM3a3LzFwF5gF3nC8PatHPPypCFjsKs2kTZUC8sSy2FQR4k",
  "key16": "3B9atwzu4oo9PuPWftvuM2WbP6STH5piCwvFe3ssPspCh5wNvJhcMkHAKmwtwUF8fQjUfTGwT3Z7dLGHwmy1ps8U",
  "key17": "3DdEVp6GmQGKqunvH6Rk9jQWrCJYge9wPmwLHE3RT7nuyKYS4fSotDNdeBKte4zjfHotpCQZSANZj7w7CJ3RY9Qu",
  "key18": "2So5xdwM2NktBCURjmUa2VZD75bckpRaxWd2u17urhmU8JESyDyoVUpkqZLWw3MZFsABcaWyWog9MTbXrt1ziYTf",
  "key19": "622ugHwJCHWFRYLTLydQi37bpYihXz7Crfrk2imgQhWn4LazYmYAWR2tJFqCjQBJys9zvbFn9b2eYiXdV184izRd",
  "key20": "3reycY5JyejqDs639uFZ6MnnNvpPhM38M4vrvkAgags74PPXJCDJ2Qf49XwwyGdHvkinJC1B8oMTXZGYCJEnZsXD",
  "key21": "3q1o8KuUGUmoqbXj37jYYUChDNs3XbwEGnozMqoz848BuD52XnT61AhnSq86xyf1uD8ikXW7fEfDMQ52tT1DV5v4",
  "key22": "22pKjcWsoxpVPeX5ySrKYirWzGZdMRhBbboJ86ztkzV6QVmYuQAKzPZfwCUnmMDH77PmZGCnfHqZgfjhkZrS4oQF",
  "key23": "J4eZpZuewfzsdTfav3CUm4nQ6mHboQBUVh87V99T61qBNikJeksyBDjoBTc2WfoQ2JuQHYbEJ3qscJAJc5pkp3D",
  "key24": "5bMqwN7zXctF2X7ryJ7xBnQXUfVhhPU1t1ti86ELAoaWf6WwZJbsBrPWfhKsJgMx2MBuQhiNERFvbAjhMQPWtE8D",
  "key25": "3hVJUFph6tFv4TjEc8tw5641BwKCdPaVjYA35podki8uPwKxFZRKCwkXSaafRLLR993z7Yvh1E32bgweRw8icp9H",
  "key26": "UEbBAGKzZcUcTirQkt2UBfdcUSzbpd9CeenxcZv1uGSewXcYppPzCydfQUB7xBCvLbhkqU1sCqXaM96CMW9MEmp",
  "key27": "2fwzYgU96YxHs3KRRH73XVSZu59DPPd1mmeYXxECkeGLxWavL3aSfAfVi4nZ2qCBnUA5oLWBY1oU941TJjf2C7pp",
  "key28": "456J75eL89zxTGvJ9rhBoMwd49Z64i1PoRJbgxrwPiMigifQ46UF8m82sUKs5a4ggfxm5pWPiWVrsEDmkfmuqoPg",
  "key29": "2kxLic7o1TyCJPk9pMDcGBKggMUp99ChMMhUQtDMfvSbp5Yk7TQf4R3Ry1HDdESMy5bZeEwHUu4pouwWNVUpnZsW",
  "key30": "34ujFYRcnohaTNu4RWjkWi4df29GydgkwytUqrAoj7Sk8FrNq91YEgqzFD5EoUxu5SevP4ujpSKsFpozTVE87B8A",
  "key31": "3MMJajehDfCHXXUZBe3GLksUzJRQvEXwUyefoXAjuJeT7NTTfinFFLjaS7GPdP88LhGvfjwiZqo5214CuCRVqSRa",
  "key32": "5ssdBRMpaYwgjdHuka3B5MtLBZZeiSaqkXnXNx2RHbhWYoS5r9Z3E3QUt18ni7sr1ct44vgLzQvZbp1uDHXCiv99",
  "key33": "5e6mzpDafiPVxHdpdJfDKAQUaBYwGUsKozCNnTQxExY1hs7Hr5nduwz5ciiv3W3fUvriTUUcUjXN4vo1MDM4u1sT",
  "key34": "597LTAS5rURcikQJtyoSfKQAV4aZe9SXyRWJysRG86ZK62DotVNPhQavwx7NHPDmL2BHVNmWscaJni6FeDciEnNJ",
  "key35": "3WgRFMbY8F9QTpoxej2xAZoiKGGXM7PLrVGcQpciFyJuTo2YS4hPQbz8c2bMkMVUGN5gbKxavpACMcQi8kC4pR8Q",
  "key36": "kqVodzQ8Cqkf5PipZ3eAqK1tzgQfK333T4ovDQ5UPvMYKY5NJ83fK7NbQHqhhtoXQ22LTDRBpPmRpkGxwDpCEGS",
  "key37": "2CQL4P6cXnuj6uR3z6epmRJXq29KLW3tEwbSCpQriqqSr7kcwo8oiH1DUHG2qjZM64k2SNqqY8q7TH8CZyfUgbuZ",
  "key38": "5deSzLxpDjUqTYD8KmWSPpo9biMwhzBtFnP91TPAqWk4jr8ABdjd5udLLdq99zf12A1CuGCkQR1ptTHUk9j4VuVd",
  "key39": "4kkBdGzLJYRsV3k8vEpQXufg3NUSqR5Lr4358z8Ni5BR4gKmyN1JzNyGdFmgRUbP6kXiJPbun734SANMrerVdQ75",
  "key40": "ngZNoL6Cu51w9P6TN45etj5hxct7JJKC4J4tWStW58NV3W6SJXWt6GSTS9PJX9GPCb2BVrb57Kfdkw3ZwSE8Kpk",
  "key41": "2upuBPs9U5hZHi3Ffps2zda8KTvcv3x8ieqJqUs8WSYKb4Jx2PzQm1PPerDwx16ZXNVSmgaRKEQW82j1Nswrz8Aw"
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
