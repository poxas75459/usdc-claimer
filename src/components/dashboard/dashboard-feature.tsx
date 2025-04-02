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
    "5DHJ6pjXPHejA4p9xFRyU59SDs8uVWHAEqDHWFvpxMnqLhdWE4ZNRBqjms7a2zCwGMd4r9qu9ryFyFAjRtBhfmvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGwCy7bcAiHSaSjhiSWyiAFUkuVkktMknB2rja954ko1V8N5L6jRWsMrWf3rK4SUbjqtXBm4fwr7qSe6nyMM7T1",
  "key1": "5c65ChjYp5iUsL3Emqhhy2CfS3bPcmR2kxCQSaqC8RLmDNycgHUui4NTMuHqFe2WRQSiWp1ThcNk475LiSuXjpHK",
  "key2": "3Dese9QP5YEa8RT3oka9hjmEg6yZh8EZX8dmp4fAmG9j8QSKVVmF51devcLJrDG13gezUSz8ZKnbxcYQiQ7DzLQW",
  "key3": "3a8GpqW71F5aSey8NxupvuQDS6K8pbLcvqtab5npevgg1onjdvDFAwxWHMaiZwaau7UUwVCyc4WSH1uMFB5he7aA",
  "key4": "5do7ZhkPYcNG6PB1T6VSzrJQtWrm4GT7PMq4rnsRo8ASEuqYtUzCoMifNmXsgMpkJUs3RVhecxtShbczt8Zd24BT",
  "key5": "2Lanawbc7YUNnq9YZZ8SK35cYVLDkeibjz5EYaYN1sFYCsRLEpNYX2NdkUoBYWGWtsXKyzspjx657ofCEQzNPLry",
  "key6": "3nx4ZRt61vDLNi8Xuw6kZtwg1j3tkKD2xwsaJ7175JNA7FezXRzDqPnssMpLu5nbLxDupK9Yc2kbBf3dTmkdrw5C",
  "key7": "4NeBKGBtRGCKC2hKzRinBHcmRjrTx736iE77u7L1mvMpB6Uq8uAtgMZ7zga2XQ5Kt2REAVitJT1VSxzo2WaXT8kH",
  "key8": "3hsm69xRPY7UHiUk2Q1SeqGpsBc867576uuLyf4ninpTmLwSsWsynaM9AmmbmxqmhxhNqRjS6biVPqaEmNGdfJfA",
  "key9": "5tyx2ecCkdPtVEgCpcXU8jWsyaaezCTM2JsqeFZWmsX2medyJJoimwPCuYiHENHbZ5n8c3ykUrFfkiA4uayHhq6Z",
  "key10": "2Bjb8eoZj9s9SR3BkMge7vg8WY2WcZ6z3CRn5yGceKKTuG6WWE1imHKsaCi5TySBVCUoTWHRryhM4HZDYvDBLvW5",
  "key11": "5tDKm9tRmqEPynjcKQbWweXeuAhNjgNgxumKWJfVrq8gGa9FReCekgHMdAqWoLWe9H3kHsZNFj4tg8DVcZgoJ91g",
  "key12": "46YXykjUtjBRKbhXW7qQ71WnS5KkcYXqkQezZrXqRVBAtHCVs47tuduE9ffJGZDnrEBZy2jRDJ7XfjxhDfibZyn2",
  "key13": "61tyPJp7LUakcPxTeZUVWLfUkXDZLWNNr9SKsodw4MT9FYxfZZ7QdWfve6EUZX3gKdTe9A2dfnh1HkNFwgVQ1mE8",
  "key14": "4hsBzkviGwd8SzvbquSQLTcQmzwxa1aVhX9ted2DBFs1pgou9j6XU4FeeYNnFFsMUGZCeCuRw9dQahGwLUtWyaNw",
  "key15": "NGu1p2j17AmFgcDkZd2yztSjrt6nd2r3jfW5StWYNxMuAAgLTjQ36FiDygYDDbPi3kEfBZSCAp32FQDNhNhzSYf",
  "key16": "4Pbj6K7uWpS9E64xEGNimQ9jQC8YofjRqhRQqKfYUrWpVMACt8uesaKVSv4eWaEXARgGjC6sxAJw5gBuyqzw7hXW",
  "key17": "4JuGnbu8zumkngsgLXPE2YrDUARnxte4g2KGekRd4jRGHKkcfxZSN9dHzE5MJFBzaJQKwTRr817SHjF6rkdv9LSA",
  "key18": "4T4oZac46YZzZzDsjxAXqoPuAMfN81Eirjt388aHz6CXPAdq1rczJNddzDFpAYyEynkKwHg9xzQNKTwqEAwHWbC2",
  "key19": "2qa299ZAkGEAeMvyKUkcb4Us2Ji1QCWMXMtPfPZDSKHK6PS7pLX5NzZPo1ixkq1F1TmbrAJRnetHPZyBVvFomU1p",
  "key20": "5ErDDqYHALnP2wQheFjaZ75tW7XUjjcVgFiYHaLYR5x9j6ZqGpgYbrLCFSpdiGcR8get15AmS4U7TsyV2kQPMXNE",
  "key21": "xA5fcCLknuqkZRDfanKHeB2rvfSjRmJzqWxC6oHu8Jn9A2ztLqhko6HiKuMt7cvnHertYWJSNewg2pUDP7kp3co",
  "key22": "4z59iVeaWeDg1GNQYABLGoN1beCPh9mNDZ9esZo6JmCsfE9F1t2HNtnrcPP1KBH4CCq4gnjTMn6VyfK9zgJzCsEU",
  "key23": "55FuKUPVJdhyXCXCa12n9pLofesQUWs9vcK4gFJVcs1w7Bxdch6LqjQBNtiuyY9cMQkoKpXY2ArjykzBYUsb3ejT",
  "key24": "2ahYVEFtEL3U29Rzw1Gu1RXVQ1ot1p5FxWkodqkBjQ8zT77hJC1egbz7hqTQLMZwfPZYwBtrTdbrRgPUU7idQbWP",
  "key25": "5w6Bn9Cu42ULw4dRReGYngRbNJcWY4EcyJTygZfh4dMaAFEcjCfJ8QERN7AQUm5KcZtpCN6i7WhtHXThAFpdLLf4",
  "key26": "V2KMWZpZ1kHupLWpd7Eney4Yx1P721yUkvwHLUasezSQoLfwpzbZd1Ly3WdvngK2fuzhuG6VAU3aQFK58fLefqM",
  "key27": "2vpCdwgVotu884XFsCdWznid8ZV3wAKodPTR18C9qyfzi81UbmNovD5JfJTEHydC1WVJGF4hFGowx2ezt5wXAj87",
  "key28": "1tPmbCpySpShwGVz2gSBN3oBaXDzgCZQaZK1pSrg2mTttMsnex6NSLkYvAPDBKhKL2Bdi18aMtTtZFeDwW1YEu6",
  "key29": "4FDMJYTxgsAcLNDaJV3B3tUEPdBaUPkJ87foDbt9o1nRR6DhjivqBb85fCXDpSbFsEHxRvvUpL542mjsXqy5SXKy",
  "key30": "4QUP5TDiYCstTvFomZcBWMsWa65wME1giYCQY8w6n9yD4724Jr3L8i7BM4efBrSLi2bG9errYiKhmJPQFNEkNESH",
  "key31": "3dYQGCUMx9p1ry4GGAUhXiE92xYC8HRt6Pzs6vYGvA82VRvS494YQBWzY6hu7NYBcraQ8rze52eWFZh2ekwVEkhY",
  "key32": "43BS76ZdyXiGZihDUUsk88t8DSPYYNCYZYhfqWMxTu5mTdNV6AX3WsuuYdaSCcGMBfxcABJ5HRqDi5Hn2QdF3wsX",
  "key33": "3UQoU9MxwyQx9dSZ1jxRUNeAnQr4Qa2S7d8dmPYhjU8edkMB6QVduU8XtpYuDzyH7cyzh1eEv3pZJ4ZpMFfBVGLK",
  "key34": "5rbtpKfJUVbXrpFYQ9fvCVjmTVhhMuTGW5ubxq4isLGj49XXyCVx2i4FTLstd5ejEUxtxzVMyKmmzQbAC7SkV6Mx",
  "key35": "f6yy1APyj41EhyCBKT8EcSeTds26uvvH5dFWwDdgcConP423evBUowtnbrdXzG8srpjBN5Yq21V8UaxuRY856yN"
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
