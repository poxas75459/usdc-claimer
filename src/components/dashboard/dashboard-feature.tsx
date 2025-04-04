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
    "3upp5Jf2rX5G4qdbxiAv3AM742U3wt7ZjVUfA3nLxZCUJ5BnzJSFfVj5RdcEx1NXf9GLYWTd4ZouffTRQmiPCqDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KyWU4ofGrwPKRS4Fd5JfNaFSpXRE3wom86aDmU764tpRTmk4McieP56Bxa4uZRvPe62WH7N2jSozCTyVrzaaBDC",
  "key1": "5fM1cvdgBC47c9NxeVoJ42Q8QqyHF9qYhKDwVJp6aZBLtLG19Mry6q4LGw5BrmGeiWVoX9rpjrMZ4GmMLTJ8vfeF",
  "key2": "5V9PCyL5CRoMD6ADtoqsw6eP8xuDaHXGKu8r1a9av3Fv3A8qkuHvgt52zFsbw4mWxn1JxWHNAnoNoGU5mRAvUCCH",
  "key3": "5gSVrjGV6bRvdvAdPoDFVHk7QcZ4snSbNTQKhEup7Bc1FYrM8wvUefaKZKkCihMyhP521HCt8Cb87Be9fHGwh65A",
  "key4": "4cAuwKGqjK966u7qpkMcEni2HZhHdWFNV4BNym3z5JDwFzrdT3YmECyM6ug37ZdoPytWMqFUo4QaXoBhjuTMff7p",
  "key5": "3teS28qVYWGoFqZ9P5rU4QYKupB7iaX6bzvcVuqXNiaNaeZ7wuPC6H8mjSv7vrgASsWFKMo1B5ZLA11Q73rp8kYx",
  "key6": "5GiaCh1i4YzmvUpv2ncd5uewAsUhQJVbLgjbFaszvyZdakGfFB4gjEE6WvvoLg6ZXYpZuYEosLkfmFWQCgYTDsTu",
  "key7": "4H5HrG35fKdwrGSyWBgj3k7c9Vubp5ANeDAdaA3AaumKFjZxe34cpySioPrsw81oDVxWyLcDrrKovdrZVf7FAXWZ",
  "key8": "5TznT7yXnEjBjHuvmStjBRkSyLm9yTyiiG4bJ35fXjUqbPTA38BBbUnZQgtkAvwCqM3BjNViavr4pPCaipDbKGxw",
  "key9": "5TGnvzhW32rR3V3m7Nh3UyaB3PusyTqvZ9SNjGfvr6A8WhMtPFw1dabXthkmKwAhsG2xk341RLmarTKjYrDj8wfK",
  "key10": "4JjbyNtMkfC7NxAxJFqm9x9cj6jD5ZCCpKzsvXPV14y1HuCCvFGY2cztuudqifp5VPQHJPLQXxVHz7nbSQu9Tqb4",
  "key11": "ycJHASJ7Sj7JiNZ4sPrnMEwDgLkoHjNzrencoJnymC6zjLQiGZaUT8TQ7UeRt9cRtYpemeNkBXU4mur9GP6BG6n",
  "key12": "5DqMYx58dRbBPmNAiviXZr2PyUief22mEr8hjYXACwmPdDn8Uj8uW79AgVDyYFYdTNDg6q2ctFS1retTxM4w7NXi",
  "key13": "4VR7FtzfBcBgFP3bcfiLjJ8W7fUUYXdQ7U8eXQfSupeSf2ypoGpr6HrGb8fjN395qg7Tb1v5316c5gnrK45f68RH",
  "key14": "4usgyQGgkFT4sLdTKdjGAG5d4etUXtdhbSsyygHR3w2y9gdYBF75CDBQ1kuhEYTV4qn1fm6nvyTcdyY4wumGtxFm",
  "key15": "4C8rR8TgkCYRtb1ZjwSjMELRvUQwHrZkDERBa4SvCGu7VUE8Q9vghm8zv8Lak9UVAjBYqWqKy7VM5t7TuLRt3QsR",
  "key16": "3SemkRDg5w829kFYtvGS15PL1gkrmm1g6jkhT3CbkjxGdhgmUwPsCN3pgfK8BF4iM5vsv9VYepgbACi2y6Y1PFic",
  "key17": "3yw7MMQpdCiefwz5xC5fyb7a54y5d3CJccdsE9Ju7xoXPSTK6o5SEdVF2sGWvKr7hRiQ3R37qWNy8uM3C3JCxxcV",
  "key18": "GHL2hgtdC4vzB6PgJ5mqrgmJiGwZn9HiH8jrYGEc6EkmckzXuJqPTAgkagurA9o9pYyYAVFQDW6zFMruTM4oQ3e",
  "key19": "5M1yByqvc6mnoMymH2oEp5EECNvnpDJCH46gUPJajPwxq2HxosA8a8c23fENV8qWh4CiNrn1wcW1iYAhYGkJM2y4",
  "key20": "efXDgJqHEyRx7qgRS9yeCoHCMyAuZ6AcVoGjDPKuqR3CybeE6AZ3LP4WgMFHwQPbWpZhcnhe4GrZfqhVdHYCCw5",
  "key21": "5g3zN34qMC9qNNyWPP2S7iwdRWV3eYGonfp457oriMBCupLokQe8DzTK7jDs9JAHJMYCB6z1p49rKAWDGjfsWkbW",
  "key22": "24S1M2T3HUB8yF2Cxg17hdW1MgP7EJfFPGm7cq98GiYeSudTLUNZxiYuvovrGmrdgJyJMBRfkz2xgRuzChUFf2qQ",
  "key23": "3jcsdvU56o8YKvc1aYq4YZiXYAy3PjUHyPRXmZiCi3VNmefbQfpr6obEcgeCe5UYrFyyeCbtXrKVJag5Y8JrtLZM",
  "key24": "WsySFkZCwgZW7XAvXEseEdTSDb2KvZfhmerUJXLzNfuyZEB5uDrevx8CfJQdzDnPzeT14R5xQP13z2xxpevMyrt",
  "key25": "2MKf6DPvVoLP2ZMTrUZc89SR8PDC5xFb7BfPDSoterC4ugwtZZPKYkdnhdvL5dGxzEAQGyku1dY57QLfWpq7Es9U",
  "key26": "5zJa7UE1shwBkqHij82Jw8DxQFP1BvawPeRZZa2aXYeJcA6CtU2QzTEeqaeJR35LbLU2e2c6H8nkVoq4NEtz2Tv7",
  "key27": "2qrpeVxhxHxuBixG1FUAzMrQcBcC6WmFWU4QAsrMbExLFu39v8ErjNf1GNxccn1DMCm955GuzrDYo64jX9uuXfpb",
  "key28": "5BPCQXRXTRrtmY8BA7pkiuSZ3PTh3oBJ1jgDmq5yqStj8i1Ym1k3kx7rhaHWAjoTKkYTsW2nFMegT3ECdU1cEuNg",
  "key29": "3WTN6iGsqeMNvdcuM7y9WS39i4JW4XDkmBBZGayyYWYhZuNcqT9LzkJNtjtNvj9QXKLfCmxihruaVC4KZmyHU1C9",
  "key30": "5T5mXvtx7t4uDZWiRsohMvVQj2WWxkzcXA1dnzUFESJQDy5mNdh9z4vuFLP58cihbEtMnhCrLr6gRYig2VxBMKgh",
  "key31": "2rVzqzbyXJNvnjxwCcgedQwXHwyuKYAfhuRr6v44xEfWTu6CS3HqG2B1kx2Dd4SENzGNL34wiQKsHrtcsZyPiuc2",
  "key32": "2E3pzK7MaNBs2eG61SyGLNtmaxBbCpMqL2hPx8LxRjUV1N4mBnRxgkPoAWBTqrimA6srhserntCctJPaZFYEaTzT",
  "key33": "49FWrA5pPCsMySoAd3wZENvCwz1yjWDCH17cPBNzhf6ytZyLSBN7fV4Bsb5JgGKRPRTBaan3rSjLJ5PENF3akGs8",
  "key34": "5qjGetL4wn9bUsboGb4A4hJv7EaDmWmvGaQL4fNJkgAadptbDEP8gfsxFhTmA9jUBd7uab3smsqWVdjahxyYFHKL"
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
