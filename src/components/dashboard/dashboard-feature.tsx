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
    "KqF9BcbiwgqsyyZaCF6BWBVRLefEyFjX1CYdtvnYd5u33J55JTDd592TX5N3xxRWyT92d17HLL9oyXsdbUx16gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RH8F7k2qW8V1y51MB4HaTw7UP3oNuqF1vSr4BD3D9zDTiGx2zy5VSaFn2kXaDjb88gXQ44jQd5yshVqfD2nknwe",
  "key1": "XQ5BUsXH9jmmwrCbmQoMVmBNdSofRjRBJSW5bkkRTZb2dFr9Cr5dDZAr3ntovTqyDXtLpZJEFk7wYuVSRt5v3pC",
  "key2": "49QZWD7myMbBF4FQVrLYoJHDQsAbxRyYSoSn8cSSqh2QaDkWLsUNwc3PGrhHwMDikZcV1fEof9RJwCLpJmscbCPy",
  "key3": "2hwk2VEx93ccKacYZ29sG6NNq9rejps7tBpjkpnf2aSYzki1tdD4yFZLoL3VTQNnM7ZUPfxstsZ9GXHgZwFfZjtB",
  "key4": "293e5zZczt63o5797okaL8anzy1BECekTYGeQf67qPckafc5ZRGxsNWo4mX3J5YwHPkCYet6nUuDuL9jtixf8BQN",
  "key5": "2UdDsu8L4WY9GW1wzUtNLzuXJTzDeJBkcvYxdx1VGLB2vTSbzqKEeXMV6BmJmRJ1W1TBLDzdapX83gqNMmBDRHML",
  "key6": "qBS4vF9qUrribNqGQv7JF8CoLgwug1Amjv51TxcTQFNy4ZdoevubheGcXK4nYi8dJypqHWpjdj4u8RLHJQqP3TU",
  "key7": "63pqQDwcUSTUma98n66FMMHhd7131s2skfYcP5dnC2A6S82B1qeVvpQR4CGoRjzS9ayyPrGSDkYXeF1eh94KDjA8",
  "key8": "46igFuFRPcPmRmLqJK3qqcLBTca6eGhteDYPp79Tqr4pgU8E956nY3WMP1VQTEMGGCGtcakzExQckNPxmxSaKpdk",
  "key9": "4QtMrkg3M4WpAsKHVR2XCSQSLPP1gu7J95Rt5azp1PFRjkma3J4nxKNzM7g2ZkNYiKN6D7JhvTtHjyt3Uk7bELiv",
  "key10": "3KWX6DnMmoHsEDUmdVtD5YzNU2HFY2nvYqpY7bB1cdPGteoXyB7pp4srxkC35s4jCbXaqKnAdPh9v5U8Yx9ksrPy",
  "key11": "CH47PbdrHdG8w9UGLQDPHBpG66bqNKvaFyJyCgj6XwPH3dSUzKxNh6y59xrHuU3kPuj3JbonDUk3WkwXZMK9sZP",
  "key12": "UoRZAmcQ6T4PZUYBc5A6RuSJ9KVGH2fUasfePT29U8xcfoCqs54UvUDUB7vDoA7AJ3tKundqrVYYScmhh3cay1m",
  "key13": "2Wg1uGBPiS3J4wWbjAAunb6jpQX1AT3LWR3R3iXtQWMEW3s7PinZNvNoQcfUKxQwPoWykahCSJh8TTPKFyxhEEZj",
  "key14": "52X7LhD9LMFjrCMsPXJp3R1VjEabbRD3Ppp9r5xKm8Dvrsb1DsPZQsZS9eH68kXZQBezZQYmVvGWrjtgvtZ45QYQ",
  "key15": "SChApyjd81CB6aRdBaXzSt4shKCqovwToewt7XniiAEVt77J2cyvhHigLkJkCPQFRoAge6xvxQieHHiPyENi6AZ",
  "key16": "4nsMHNFgbgCn8haTqChLDoYGrtmVANd75uEsMxnmXmmK1JDP8fHzhkGGxL47AdDMkcZV5E3zQTGkEXBSJpyEGiN8",
  "key17": "66RgiJcnDVPQqfvPBjaN2fWS5iMdvb2RHvLrZtfnY3b9zC4YDEw4G5VjEGbyidXqGWsE53rMt3mXAMKixA6939Dd",
  "key18": "KMqtLT8E4JoJJ4fUSUw6wANWJ3U4ezEEPodj2U8GreGsvhND7pfob8DCyYkF2hnSeRYyKBtdYuPgirUEJhC3737",
  "key19": "4JDQHUSrXRCN4QbpLsoUVZAbFAYTxDihuEKjBqTpbf6Tjm8Bv4HrcTqgTnP4EChpJzXmzdWikeQWvUXNkQ1NfaTp",
  "key20": "3zE7ge8G83CUTtFQakrQJQ6yvUTV7gsFSpgAF5cQoPPQjHGto3tb5JtAmassmepH7WAy6AUbwMpPBa8dRk2w2trW",
  "key21": "4yiEtstkVT4bogvJyMuGqqQk7i7shr69AAUWHyPSLRF5irqLc7pM6EAyzMMD8RBJjH9m8QhrnEwJPCcQz8jj9BLw",
  "key22": "34JEJsXtqV5zF1fqyvwjNYXF6S9uj5UfaxLJRqT9H4PAg4Fyxcbx9AeQpTgJZ5D6eJDw3K7ZAxpXBLCTXGqkJMop",
  "key23": "4RccG8E1i9BT9onnBQxbYV4FA728mET2nSrM8M1Jm2zFrLNVVCaJNQYfh35bDKyBYexws7SNS2K7tdXSE4V1jdWu",
  "key24": "5uYMFTpnvpiHTuaLt9D19zPLXCPPaCE4GQZ7HAmCiTqufUcBrKR7FFaNVgDZPFotKGbEsniCxdnyXgaPVftvXshr",
  "key25": "5qzcEyWepCoA9XX2JeznE5VG8CxVNSsajDQLJwRBao1oWNCFgZhya6qcvdYZTBvyBKpkUA5wfkV7G6mqUnPvUoJS",
  "key26": "4kxgMsJ9qEAVdzGbgAEVTRbvMJ7RvoZAvSCEm2y5ZWkV5KUd19N8HG55zgshAXjyQU6fgP8rThFZoudgXFAPxzXR",
  "key27": "3c6CL5iyM4gftoQxPforogsmy5JXBrQKqvjrdKbY7XNXEzZZx5gdu9d77Rwone9Cnnuf4P3sR5RVyHK4eYDC1S5j",
  "key28": "3eRi48hVjRq7zbQT2g3riUt6A6ZYvcuZpegonaJRLoTy3ynigstSxKsv9hf4mTgmG1GEQ77DUSoVVQP91JPXn12R",
  "key29": "3EW2LBRCELBUj2dMCMNGTQYoakXeAspm5ep9eB7Y6UHNdhXsQihc8PeGA2mcAdbAE8hckDKMPa5RvTv95uYQfWSh",
  "key30": "ATQkVK526nwCKV4dcnX1LXU5axm2ShTw464UEMyw33aGqmR3hJXLvbqdXt8DGuEc6nUgFxDiGXwhkr2gVGw6k5T",
  "key31": "32udCzKWonR4xn9V7gibwnbEnPZ1idJw9ZCku8NeTWNUTmLYWhgEhRUXfE4PaxPnN6AC956Koq6HdLaA13Dqv69H",
  "key32": "r4moJxNAaYL8qhLF6LjNiYBDcKQCEm2bYPKRRiWxfGqnAaHChGkEpGkEgbJPzEGWhpsyC4wPMS3E1NbTKLBvMhm",
  "key33": "3VasA5txxyR44ATARX1drUp34ojoSYzmEYh6d8Dtpe3ZDnLo3S2ru7HqfqBMoT3pkEh5A8RUjXe4EKrzoquqCi8w",
  "key34": "5mGELKn7hcCDfDRVBpYA6iJRRaBjJdPcBsegAu4mRebGD8EnVuDjoS1E3uePyP7CLWbxivXyUtiPqGKG4UxGqBm4",
  "key35": "57tYhs9sqMMnMMdBpMMBs8jiFCkX1BaFwJos4Zm5uGr63EsLxtRAsZ4wLqj24MyguQdxSAFmhmxcvQmX7ziEzUJC",
  "key36": "za6BquRGG9FrjeVaeMSbjkRjsCQ2CHiSKH3zmx5g1BnwctJLiFNE63RfVQNCZTk5pEUvWUxSNtn968zjG5zrse8",
  "key37": "3b2c4DtQyAj2291pCanzgcWG9eRdi1GyvZThqRuQ2ks51PihF14vbKbJ1ghCYcTwxJRynkPuhM2eWHtSHqAfcDRz",
  "key38": "2Gr4nH9aAK1Sih6DXJniq1qwWU5Kac2PsGvXCjB9EAstAuUd9NtjPqci3SceUcgEGW45wTJd6HqDHypexdUA31j8",
  "key39": "2iD6fBRutVYbgp1tmNJWUHAgZXS1EEFuhwp6suW6w29SkfqUmoaBJATkQLhBQW5D9FY2zAZ8jyiHmmsJWtYZAt8D",
  "key40": "64CoMmBjyAHywTG4wm3DJuLLhnWhbdYT57m6zppfZ2XsUF6hAbrXbPciXzLSmS1NgSgv4eVFNKXUegQHtFYMvgai"
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
