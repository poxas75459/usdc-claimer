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
    "2Bf2nS2wJabSMZKVnyS5PCu8BU57TXaACWb82ZkzjcZXJUoUTVxiNPSXfD1gC88YNUouRdYm7Ag9iPCiJsn1SaRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogJ6K5RgH3eQHe1fQM5kBtxkxSoAuHvQMUDTgNwxu9QMbVr4XonGRZohHxzu5PRqXMXeUYuLA83ywSrabvWFRUL",
  "key1": "2rBMLjdxQpbVs23LRQQpRNXzQ8FtUtxaP7XYLtAaTQP26cMNQ3ry8n1Pjdt6h17biKQRJpN9CLg8ainB6i8mh4LP",
  "key2": "3umXPGdKbxQzJpec7U8Yzcf32EDfuYwnfbB9QkZ2dsPSoR67MaoHpbAAEaGPjPAnCefB4bSk2FkFa6uWdAQ3LFLd",
  "key3": "41D6CbtFWWxUN4SLsm2nzqKKJty9w7Pb2HCyUTVrct9XmhCtLFkXNyB9g7yyVkoyFQbc8263xejFNvVjoswSKuw5",
  "key4": "4jABVz5M7h1v6QsRoXfsdXqUHaBsFCw4hVvc2Um1p3HBmL3zkcvhwA6R6HnoB4FAwo38sHSCqV7MHf8KorJm9iYm",
  "key5": "2duK2rtKDP1tG6TTEZKrdXurwqzz5hjThpptH93P8mTQKnvR5fKAHp8ZB2cQgmgbZYVZMfz69yXyM3Q6DVanpHAW",
  "key6": "3BzYpeaENQgwsWoV5Kn9E48ThxkqmCkTpJPMqEKSmjDeqbd9om6ZbkPM6iy8BSSuECedddnCoN8D1RAs7Ry7muS",
  "key7": "59q8LBta8hompwb5xzciGzWpz7ZCxGcXCp6roMuhEr3xnRD3DzfLNR11LQaatU3sCfzyGxH1rAZ6aRNSsS1BxPBV",
  "key8": "3wcbseXdYfgtFJDCiSZXQL8SywCRoEvTamWeFssb7QFhrr4fLD2TjYdzV6Y51NhhvDa1z9u57SHYS9X1mSyLy4Bw",
  "key9": "5iRANQFmNZ8Ta3ZpYdJeDXMh3UcpTzXke5XoXKrdtiDVcLq3Zuz1wTf3FJYVy73ShT1pw4N1C1tsUpr5mFEJUuTf",
  "key10": "5WWzuW5qSv6HmdVLbfiwfsrtokyHxgJJtXMWFRmK5P1ZD5hrzo9fzkUKPS4Jo3sJdMvzVSHcoFFV9tSUxTxB16jP",
  "key11": "672GGAhoNFxBogo8n8dJ1RkkJCkgGLSiSL8m9o86ZDxJZXmp8Ae2mtULLS4ZxhFEfdCir3kiCNcHY4qSBTVFoCaf",
  "key12": "DiWMow684gNmeXYWyU8Jd58PhpMNf6Hg2mtVxFFVc6grZ5ck3vf65q2zmy5CBo1dkVxeEJ8S1dAhMxCZ3Ce2nZa",
  "key13": "5wRCVZR9X7pjAH2cWwHCUQRvn9wUCdJvdE1PrhnrwuZqDDzrBJVP6xZTtbTzTCHvjcotPCmWazvU43JfTE41Du5W",
  "key14": "LP5gwdV55b6b2LASACyUCNfnQiWWfZC27WYd7NdwuZxxD54EdbN5iQ2h1jsM7SvHafJkcSfZo3Uwx5CcHmFhb2Y",
  "key15": "5EKMxY7PSNDB5xs7bBAR8apobSp9xSZuSQQarSGmajkeEDanKsw8iPm8huDDxb5zjchYZB8HtzqvwdJaP1P2pdtV",
  "key16": "4MUECfjGdKA5P3sRC1rQE59JNx59fq8AWh1anANua79hn87QicG2BfXx4fS9xGGU1N54FsZvtaD2PAahvuy8S5t5",
  "key17": "5RjxLrrAeGX1MHzHXyPoGXpwhSu1Jg5x5xvbLkomiHijuDohFerbRJSuLyZJ3v5TpVYzmhEmUanBUo6tX4yMLJ3Y",
  "key18": "5KuQzSwqegDeM3tEds2k6URuR8vr2mhxYKM4Cu5D7nHS18hk5L6kEdqiGMcorSaHGvSeiAzmSBvfL9ssnKF79Fdk",
  "key19": "3xs5718V6cMtwzzgTgKUp4jx1umo1KxHQWz5Vb1aY66bCNBEfXgsNLw5REJxQUVnWYqmhzxJPKnFm5d8MV6jzms7",
  "key20": "2kcgmCQsmhWVXcdSLtkcpmHBVxHQ35U4wuDBUEbGPx1znyfQ72qnM2rY3GknfdHTcUpuCbQcVm6aCqPH2kuW8mEQ",
  "key21": "2JH24R2epeZFAD81TLDsfzmMpe9oGdFMQPmp4B9JQkFAykmqqJq4AkJnd8LQsGWLyJV99cwa1XA323rZt7rzBjem",
  "key22": "31vKfg17fFNeLVM2McohFYeYM5J9sCb1SwcZUwY8t9Z6uiKRrroP48X1fcixzx5iYbNviuNPGNZAdxyx1nHfyaSF",
  "key23": "2YVUbiQJqDVjK9hZeDjGRLEx95efwuaUfMjdoPhiYPFkeYq5TY64dPLXBjR5Qbkw7c4VgW3f9Tm8DAia8bopznXC",
  "key24": "67j6oquYP8GmQ8AamyjaAvtt73M6GFgRovkCQkBpHUJZ29dG8yvS7yhU3en9xCa61YkzF2RHk5xd369WqQvnCWaD",
  "key25": "4Qs66tdjCaSAmCocmt6C511wYzudz8pssqrPuccVN38ctcUXk8JaW6E2dXk6St4vHggE15S7AVpwLfkC3xYpieip",
  "key26": "2Tzwj9cmH5w7d77UCxLbuYVuNd86pte5gAcwcdms69wkBTENZsYrpoWnJuTBFSer1fTk34Pi5y6MrWV2DFLr4tGC",
  "key27": "4XHkabqunTdVDid6fequUE1EVN3zbnyjveusjZiKw3ALhMUqLee96cp63a3ztXCqtnneuwHgzpUzXh3zANNg5q3R",
  "key28": "3wv5KR1u7nvp4evAUwsjSsk5cf47QFNi5GYtnvPKEJ4JHUjGDm8sRaESmC8gTfoEEnJBQQ3afyu3UhVqvbdV1XYF"
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
