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
    "32Bdh87XkZR9zeaNbP4Wwu9Buc63woCcQMJuTHVtRYdUogZHn2U9xTsyjBa7a6ih1doRPwEGGJo1VNRU9j1WaZ1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7wUKzRCsm8CHeBD6XTvichiESd1znrP1rf77YWsPvCNF98eiChoPQVga1Xrs31dcnXYQZJPYhnSq5HDNaiutey",
  "key1": "4Fk926MEPC7d9LWWJRenhrM6Nchm8MCebXuLW7nLW2TF86HegyCSf7rQWYKN5xAoZBVtPdH2dMez4mVqKoVVj99p",
  "key2": "5FbnjcAQLFEcnvic1kcbVKcDiXSRWD5ah5S61HPeWV5DZCwZ6BtBizhsxrhFPrVkfJ7yX6cJsmLgpTCcMpxV5S2u",
  "key3": "35yW1SQZwrQovqnbqZgxYYCK15KDiov9z6raqMX5HJCpAbELQiJBHnDYdAS4PTRbjdtMTSAwZbrnzrTmfdZiCvzT",
  "key4": "9gAhtDTiCCDsRszVaSHMu1u7ntJgkW5wjjFYkWdtzNRPesbfyopCxAUC7gs7x4E3vTXZZNRDRCRQtrQK1n2HG4t",
  "key5": "4aSLKiSfQtTqDG6f4p9PW9oaKRJDwjRYFxvj5X3aKr7yX43nqBESQWQ618TxTBHHfdR42dRGd1W5qo45dLfGspMh",
  "key6": "CaE28nwqxaqv4bWMDX7heDpKSA6ZCR2GPZobSrKuKfXv1yJmRVn69vuEauFCjUnbb1tPdtP8hbBdnqRcCbg3bT3",
  "key7": "2mkp3hyo5u8P52KF7fcsKWrMEKLfwGqNsCFWrHPmvBRyrxdU9RHcbeLrSgocu52b8Hcu2gh3d4igsC9eHxNRRcFV",
  "key8": "2YW2DkGoowZpBygszyy93qtHZ8AEiGBvXNVhYXwP9QE9mazQ4FSnGjhFzxwBZ2NZiAyaW8NGYwjTAWkUAL9tyVqo",
  "key9": "45qLPrQoznhiYnz3AJoWUnVe4n1mENrgtdQAfB4oD9xRmtVTNThFeY9zVhsf82uAQVSinZ3w2rSmfrqCZ737vR4K",
  "key10": "5GCaXrsiEVFe8rw1eQcvTRQVAad5TivooVBnUHpSZJTTHRCywQHboLSAzdxgWuAW4t78y2KGZCcFJ6deNq6PQVh8",
  "key11": "12AACrWeB5GMy51rr48qmnXms35AgjACJQMN7V2Ltr1aAEgNNnc5e7sJ5TFRLZQrwBMYLhyoPj8joZ2s7srLsATP",
  "key12": "2RZ49iFqJkUM2FWdC2FYTGRuYVTqm3zvA4apiWCteoTYBFFMrowuCLHibdoe8bk4nVe7kX19E86M3mNJZ2GXab77",
  "key13": "3Y6wjgTWzyE7JgoeLrCCvQ9q6RA2rrrQiHzuzsyLXNf9AKReWyqkj6EquZK7Q2XHezGpyY1Uo7V7P8XKc3td5i7E",
  "key14": "5BBBkNUHPhWEoTTvhif4QrxtQt5bk8ay7PHWsrfE1ffFpFwCEdVMBF7S5hLPKc9WsUZokhVgF5FxLMUzywW8WV7U",
  "key15": "4ncqGh5t4yGwcoDBx4WRk69dqDb6rwMseaiSv2CCnJ1sPFVE9LfM1o4j6zNNyCqCehtkKHxUA7mAL7zjASFSwico",
  "key16": "5MeSL4mzsfQk9Eskj2FrqXkmuRWwNLP2Vn3Dwo5ATWbfbhd9rjcWsAQTuNZwpMk4kgn1aacz3u7NXwi1Cx72o6QJ",
  "key17": "4DQPKKQaA536iVLtS11RoN9T9fhwecoTbjg9gZDQhjUDdf66scs6mDoVBXP3NbACJvv7sRQkjHYesg7iTbSuKiWy",
  "key18": "63dtFWs4a87cmtRVb9KhGhoayJpN5kR7qxdH97m9uEdLzRZKkyQVfvDtNfMf4JbXcZfsitCjm7vaJvGD7zDe7jrf",
  "key19": "8uAEJWveFbvnr2h2RS7dpMk1e9AJsXTaPtCeFCnoMAwN2R62UBEL2sLUgnVP2anC8UJxrE1BwvpoNdndbDE5AyH",
  "key20": "vrbvEK2Nw577mN1hx8rfzStLWgBqXHKEoR4uija6pLgWpg3H71DnGGf84auLnJ26QwG9mEMbsgnTD4ddmwrW1qV",
  "key21": "33pf1mM9diSLhLaSVNDWyqimAT3xH72wC1pRDuhuxd4AyXgbDiZrA6ptP5fJU5Q7EUPBrkTV9xPW3YVifHqooWAL",
  "key22": "3Cj1p2JH3ZpUTso96VTjrU66udRDoF12Sehoh9pg1xgsukLPjFmWomnxkYHvio19Ga89MnJeLykQRvrWL4vpVtmn",
  "key23": "2y6vYohnDEEbRHxjgay8XyEhJPEzZMSczi7aRkfBeGGSVdYFBGev9PScvbAaCc96SBthF5kxh79X6EkiRCrzUFUe",
  "key24": "5J2Yy4Qkvd6d6PfhbHgRfVeHUT161ThJoXT2PLZr9ts7WthY74k2ZmZYL2FY6ugHVhWEFN5of4YjD6v9ePGuzAEH",
  "key25": "3btDnpCqi9Rv1eKFoDSHNm8XC9eX2xJ2HrVjpKfZQDa3QbDNREauqtSocJC7UakoybRdLsjKBFJvDQ5CCLNbUrca",
  "key26": "4c5CZ5LTvSmrGiiZksDhAPihJQ8MD2qSz47QJzWMvE2kmZgzsRGvZACCmwmfCkPK5zRhcksS3XCMaku6sFAo2iwv",
  "key27": "4cuYnpRKwHxQN6DQofSiYvtrEBoA3jJnAivpsfYpGEhSPzPhqZxkCCoMFJUSLFm3BjybJnS1wE3sdujJ4DGxBDzB",
  "key28": "5YVoAa1ESfChG5TMadWS4Hcw9QdJsRjiNVRJLc8n7NJhy8UEdHRJ6SdGAEPs7rTA1wLWG1VXfFESN3rwX4GCbXiv",
  "key29": "5otJcTsxE3sqA2gbUp1NqUqToq1ngsXAYaL9zyhp1qLczMMPRZqovhG1riWHU5weAEGFH3Xbe4wkMwbeYjhEZFzM",
  "key30": "Q7tWJFFAmHMNtfv4JVJxad9PbDAipqtsUX1qL6aQi1dtDAhnyGK4BKfKAWmaBqkxpprtmtNzy2QupVu7ALCnzht",
  "key31": "3tMeMGFvV3FzZueiUHtcCQXqtD6aA28KqBRMQMCp1hEaCn3NFTeUB4WGvK5xz6Lgm7kDFGfNYCWgeLtmyGwdwjLS",
  "key32": "4pGB2tA2dtHPuFR5z2JMbVNGAPKFNwe2wrXq7WJiZUyaFvUtZhLNkY76McdoA8QKceFJqsnmsHWaXfptepkqu425",
  "key33": "UsZQmkDN991x9zFtaFKG4LRoDPjKhrM2KgvQ7UcXQRjFJU944rKXRvitxwG6cZLDdBH53ALKkqY3WpcnBr4GNxV",
  "key34": "1sLcd65AXd3EU6Q8ym4GU2oCokpMrJzPRZPbF8JoA6Jiqxrb5YxyGtjfwtSBWhnkW7U1wqDAWbjaehBpQHDs7HK",
  "key35": "fEszePhkcQD8vfjvQnE82yYFcxQMQSmCg4L25cc76CvTK8ySpJsiYPGjkjuUJkNfZQXWBZApDMu4zxgQWNqKa38",
  "key36": "2GXxP8zLB5KVPEz9Gg9MqJFgdDJJA5zsog4FSK4ngtEhdBrX45y19Kwq89DnsWq1spAmwcvoB7UA3Ea5tXEEGPpg",
  "key37": "eSVGSJZUXdGCApqhFp8RY9zgM1oRbRBBCDziUFobTRcXh8Aq8rAvYJsmVR4w5PunxjxDBiM8mJxmYeP4vdBZzQK",
  "key38": "61JMSyzycZXfJG6rR596eQBW5fJ7ckEEE7pTtHV3MG3PqdvRryaJfmX2nyGWjppfB2Ujk1e4QBkD9wNRrThDQout",
  "key39": "2vskj4ZUEkUfjfgFE9V39A7KY3vzWr4ADa7MHVKnnF1AKVjVWk3uSPKm6PKoetWmM3KcvnvkJxmT3Z3v4dZotVBw",
  "key40": "xF4duQUyzvjQqYq8QHaqq6TBkSRc6FX6akyrExMCxNzysZNU7sbg53PczP87Kjmc5YNnvnyZqem26DKcNGr359t",
  "key41": "3tPejTh3rbLrhwdBFKDz3fWsFpfi7nuKYLcmJFC9X3NN4FyxJYJTyujtMz7V2nCaDsjFa2xEmiYBg1HsyMdH712S",
  "key42": "hwMg8uERGdwcsxzRnqShWCxUL1QD7BgxspQZPhczXRpEMftg8oyyYvBquC9b6V7CdT7X5DKLHwB2EGEgrNS4csn",
  "key43": "5ZsPxuQGHvRpvY537LrgKZBcB8tAVxnKTxo7AxKr5GdhT4tfKiK4iez6DLvLamoeAbn15Xxg1eW5tRnJV1ASpeq9",
  "key44": "3ojpdrPnhYf7m5g5Wbji3FFyGHiaLHydSwsRfE5mnqjtAvkAS7wKRs4S9AhFRiiBkbrF8qM8tobhGRqvarddUvGD",
  "key45": "334kAuEkkFMjYXyoJkaQ577R8fUhQhZXKbWSywN2m8PH58FN4bzuAB99Zs66qjY3ZkdGw1e3WyRYDyTNv3SAEviv"
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
