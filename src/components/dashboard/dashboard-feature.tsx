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
    "4ZHDATcdm7KZM3hdDQktrcZLYrbXe4Bgq4vyfW28vTwKWJK2ChNE5jobPKuTyXqZ3GKMcTGhEB7AYysqYbknrwRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdfpA3Bhsq7CfAwQC18cqe1Xd32URwcxxTLKXeM4wygrg3SVAgCSGycVvVq9MUQtRjisA4VYw4rTRVRrPSb9LqR",
  "key1": "3ovhZUuzk87bxwMz3UvcCy2AgojWn82tgQFchUeXCmoWW8tagUvrWww49EJmUqW2NzioTpTknFJDnnnWJheTa4w2",
  "key2": "4SiaDYVi62o1HQGMjnKvGwyNtPuQ1Xj2LgHQ2Upw8bpAgrnR1AVW2X6BGHdimXa3QMfUNV3uh4ZGx9NLQuAXTbJs",
  "key3": "TtDwVtfh7aHzbgDrdUyNmYES9b9czxHvcMH6jKqX6eAGwR4F4AADruVezNJc1CGZ3czyM4D4Sur8AHCq86s1vRn",
  "key4": "3xMAnyw3yL7fWSJGLLu5WMmd7LawftUKTM3iXR5fVJqW6ZWWXrnueLFm2nBG2DmeE4Lss41pvM2fawo7mUPCbvh",
  "key5": "2P5LkDx7pqxbee51PtxQXsZA67TxhbmtGKfpcMuCYzNMXFJdk8ZcK3Z4RhS5NJPzVbXBbYGVbtyeNi7a8JxnKUXo",
  "key6": "523PLrLMTrUhEAXMqHYvfuJBfkUcuQ6ZyRp1SPZyvRX3g2bfEJGC2v2AnTkmJpP4uFVPzFML8PD5vQjfMzWDDxfo",
  "key7": "bLNKuWheREsjHe1937zPLNRXvzHU5ab1FY3hAGY5mTxz3GB9UqopXGfiD4xnJkHdyRWAFqpvefrqU1KGarsT1Vu",
  "key8": "9e2nmqX13xFX4TzkMBtehxHC5PLUVYffLDbPdhpsmqT8MfzJTtdBFa4TH9DaKqqosVdbV3f3GAUvSsgVK2D8v2B",
  "key9": "54FZWFyPQS4B1ZuTTdKKoF1xPHa2Ce76zaZCacAuU31QiJPXK8TjnTyPEVbjwrpNQkRJkzkPBt8F1vPzFJEd48PG",
  "key10": "3VwdW3FT5YmvTw85kZg3yNrDSNY17ZUndRT2Dehpos14uuhKLp6qHPxgtESeV5b5mJ6Aj4M5XPTa3i4no35aYi9S",
  "key11": "RWDLuN3MvsGw4dwxnvJTqAdkgga7Lsvz8uhkZnN9z1pzU2SVAK71koF1WKN2gmwZ7gyYYVTCz3BESRwPYZsoWre",
  "key12": "3b7uMdT4HJaMNiGx3PFSWWnXNBdygo9TPrVNaKK3FE9aGt4LP3MTMGqbjLWEZePb4DC36HMkqdf2Ng85hcTgXtMy",
  "key13": "5vyv5W441nygBzgXqSZk9g6QRJyfFi5Akg19FhQyMvViNUM6yMgnjzT3VeJvFS8kD8ezsFZGR18pbkf9UH6umnDf",
  "key14": "4LSvn3QFwjpeUBuXzzjGzrNyZ3qFPyUpneTQqRaTGAMrGJpWFk6EiXCKiTMcA57ycv7uXJdqoKDDdRaninujtBC4",
  "key15": "2Ki2E5vCZtJG41JiudKm4h464tSK5GFtdSb4ZFhc6pWBwkF7PzMLj4QnMgQBF8aJqjuhqfeRNumwU4LD8iN7c26m",
  "key16": "y1T1SU4nHanR7mV5ZfeF561AZTWwaF9Pam9b8Rjmrpgg9LSybHFemcxxv23Gh4i196eRErcUF3rvu9HsnLe6R8i",
  "key17": "5WwrtGVMhQjtY9bL2sBnyFcgrLxrww6gJpTmRYENo2zsYax1kkYq4aEXdRggsUXKm2BtavzLkFRUWDLyRai7XyZP",
  "key18": "5U9Nku39xzoYrazQaU1i31htV77fRoeBzhV9QVceJn8opWvecwzQynh4PiXbrKUwUouroQ9xnhvg1MdHmuVb3q1s",
  "key19": "2KET2N8bpQcQmDFofr9cteg9Jm5FUskvXtNYyrVEbq5mA89aZL19AhnV7AvFNvRsSGteH2LJZdHJWQxDsrtWL4XJ",
  "key20": "CotqMzyPuTNz1UzLK21BkBUeDrn4kNdbCM2mCzATeKuQun3bqnJymLdg6AGAFyxQdjAAqtonQdao2dAE9QD5XDt",
  "key21": "5qvJxBi1fgymphMAd33oFCDJfanCUXsYA83LmCL9F7PckqpZiUHPsgwqUMvCf2PPF6MRRomaWDKkqVCnmMmVcDN9",
  "key22": "2NNSX6CAXa7CvGJYXakdHY3L4MDBZCn66Ry2t9BbquSE9bn77sWtVXy5zYMjW5pNAyD1MWspSHNoXF9WmmMSbxYQ",
  "key23": "xEsx739s4ur49wS8CzTRiHpxvVXNPyDLKXRw4Y9aS1toKKxsWwWct51YcXtNfSt1kSS8PxnjcmMiKDCfF8fhC2g",
  "key24": "36fi4nkS3iNAmdJyLdJtYJ8mgtXy8Yczn4MeCUK3B84XkKmCFphmQVb3skqL7nojvKfX9bTEMj2nuTb1L3Psa3fK",
  "key25": "5CHuEUmkpsGsrLuFPaWp96iwFoMoXwj38j5GfEZLfmzTdHsYg5YexWNWnvRLhj8ibufMdUAvGbhttQrJ97EGCFW3",
  "key26": "2k81oohHjfyJB7jgAoFFfV7tvfcZTNbqNSC71jcS9dRC7V6J7BWhnKLWXhFRcYe2yyB3f6rnJP72NkkXYLrWHH3p",
  "key27": "29RZMFaCm8PfNJLaU6HxknxCHnPyBPjzpaK2oVexYCn1cah3MZ1vwaCsfL7j8hzDVtUgdkenoNJGw1i3wZyvWzGs",
  "key28": "2DU7XjtMTm4J12z4ivQ1N8v3bZuvgHbDFKfi1BoUPomgqzPh4P1sk9ZjfPXCsxQbbkvc7wtAZz5EnejxovQosJvs",
  "key29": "4JBuSnkh4c5mhiYystVyDwh1q6T5UpJAkR3D6LikZ6bFCVuZ2Yh5CYBpqYJ7VKXNgp2z8FUPZScTWgwEz8ctK9wV",
  "key30": "3WHnjALU3iqDPVHeRysRRwg6yWMUhLjTaLrozBVYh51HKByZTyuQdHJr8qkhfy2uhjUMLK67tvR82fuRXzQfdeFm",
  "key31": "aT3aRKmcvyP3Apam4n6xkYEHhQA9aUtz3qHqWkjQd7HjLWFddVqJHWKcDUBb12zHbvZ3BG3CasH2DdBzVxc6jJn",
  "key32": "3uBpJPLYKPuiy4CwaMzfdM1PKCpdTFuGPeFhwtRsXnboBqmwAAYxGeWCWN8T5uKqnuqmWwNQaAU4QHnJgkqM3uHV",
  "key33": "47GJe9jz27dtB1Cw6PfJm8phtuVgFComUnkeit6R4MxHSFM73o3Yb8yeF3hic6w5FEbAbS1q4eShf1fQYoJa8bnZ",
  "key34": "2jvzNTx1LU7XVViuDq5myMWtR4kMbBqygxyagyPb71cAvXaUCEofZcrWgQSzm7g1raP3YHk5YZVUPp14hADtgq75"
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
