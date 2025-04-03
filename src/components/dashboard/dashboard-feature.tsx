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
    "qSc4VngM13P1TYY1nFJSJUCghVTLzZdJbxa8zDjmqjfCR3ZvmmCEgBQuZdEXGqdoa8DQteoFQh3HQ8trD6ttLDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRKAJVEZ13K9iZKemR4ueLNGDEPpUnHHDPL1AXWgVnGxJxBqvgYL66JGS3Vjhc8zRhvSW43Nf9ciJtYU4JtaBeV",
  "key1": "3xHTFAFevaC3aaNeRYqsGSSCBzH5NXjaUFPU2yU9mLMYuUBScgdh7eSRt3YYv8jdAFECrGkmP4Mr9zPC9xa2J2hK",
  "key2": "2eUJBbbRY7Y63MDNCXNEb3RpCLDz6KNQqyY2HpBTydEDxf66dpgMaothMpe2nFdereykg6V7mVfCNDvnZztZU3D3",
  "key3": "38u2jjQmM5oDh7BntFq1LX8z5LDSpLYYT6K8n29PrXwbj6G8h3ZkAcv39BDcknEUMm111joRfG4pu7XA178JQhqd",
  "key4": "55Xyp1EVWM6qg8poErcikKqAcrMG58aaFzrGoMDfR1UVPPW4RneSRU8HVk9m3kmMv52yFB2NfnWT4DYow79vdHzZ",
  "key5": "nFHwU2PTAP6BzfGsJd8GK1Cotvehpe3iLSQ5AVuqVs4EoHdP8SreVkRNp1z4yw4kKXD6UxWLuLpMf5ENhPzcUF6",
  "key6": "5Rqyf1bKQHvej9HhXLZ9MTWzX6vjJ1ZvF9XSbZ5yGMRG2UVjZoUndjycosAuJqDbeebtvh2GFZPrTFmMRBQyGboy",
  "key7": "5HhHN3BaEspamohjsesqZRX3trk9ocey6WxzMU6NU1M9zuBREXTFkRqJFpHdUk6hL7Egcp7p9DVjcfWYhAwWkjKh",
  "key8": "4XmtoDW7ThwUoZNQkk9DN6Fjx8qzwAB5QB53M48fdT4YXQHCT8bWUj9iu3UnbahBWKxFvdvqYTFzV15JaVSor8Yu",
  "key9": "4cWn9CQMnzGMP8Jp4rsZYFGXvmzz3GGq2HnvXVw6sUxuCQcXvku7yRXG9SjC6VC7pXiJoWs96FCKvCRkNdHbiZTp",
  "key10": "4SMMJTT6hTCiB2LjfgZWs2dAhvjAF9m8SmXGSc26ZtAAUiv8DJsELkaJfHNcr77o9BCYitBoQNduutTcSxE86rpa",
  "key11": "pjpuz5wTLGzDdq2mUEqyKj2MZRgaAeSv2xG2Ty5RpshpNaPHc4JFEBUaZi9uTs3Kh8hMohZZAese5XohPoMPHiq",
  "key12": "2T6Zf7EADcpKZgjXf6mm45Hqn9bC66QfkBtK4TUftX19chWASKgEDwMJrQ5zADEcAUrMLRhC47fyEyZ8kqTwBvQK",
  "key13": "2adegs6KqbooVM9abDY3r6hSsFg6ptPank7qQDBR5qTu8CpSWuQhQrhohGFSGxPrMtEb45Y8CgLMSA6BC4cavhb4",
  "key14": "3aeSWroECyPhZvUtCHwMhqowEzh2wSeXhC4QDVxHwPLPBuwF7h8exiAJr2HNtcTfqvXZziFYskEhbWynbQWTx4WM",
  "key15": "EjU3XH3tekkS1aGWjt2Um2iCAG1XqLDFCkyL8tAnvAWpDKcKjssxB5HrBABe1u4PConaKw6oEEJARmWaNPgwATw",
  "key16": "36uEBurxCbjh8sFsNQtE92ajy1uiXr8Y2APpuPfdFULZCU4hrT3VesMZsUvpgvVzBC2fJSym3dNdVJvQUMdWjx8o",
  "key17": "5ecQzjEuwjWydgRTApxhkDP1wrFMyYCmYgAEspF5NWiVoagtjuRenxFewcam6MD99C2MxYEL97SYWB957gVgN2a4",
  "key18": "37ZFHsxST4vGdWDs7LgrVgxV38fQwLKWsCr88FNFJYyNWkLrkL61obQNptfZYbYtxR1D1nayKZpA6YoJPHbBsHbR",
  "key19": "rdDwXYmNrizs2J7sufrywCqwEVLHGwsMTzByTn17d88zeWEqdGmaiLFfF7Y5aZd23V86LjVBJMwJvLvAw5vCnYe",
  "key20": "371EYgmXbLASwZTgxzgyvsGdKpDYjVyNDk9q5JpkNtS4PY8yzPbmRCyauovxeVGUjYjq6saB5o9JbHXuuGxtsawq",
  "key21": "4nDSzHWkSjeimKuPcj76PkmnWxzZQXCmMF1YZSsj2YNgF91CXtW2U42vFKkzzk5vDRTVrPQkGumym83VGBMz1ftT",
  "key22": "2sXMmrR9FjuaHWRcFmRPzWR9GJkJr5Y8A5DNr3wZ1Ns2LXrTk1hJhF7hV31teywFQvTZ2T4cnHZ6NS5jfyFJ3u4s",
  "key23": "33VkahcZUKckZiyN6Hrf6yJa6iGfbredgaZ3NYQqAQTo3zVQJvcyuegpZSkR1YGZ2B3cB9hubcLT38eCBjqrqfep",
  "key24": "4LRhDwbBbFdQ92v88o1JZda7u8sqZ9XRL27KyZHHFWXEkh6F7p2ecpEGB8o9JFxahgLh5tmetXAgiQHZoMGg45HJ",
  "key25": "2sxTyhSD9kjA5hFtGXJTA7e1MkZXvtdmfheGXwK9NPKqx9z3iSfdU3dMCKbHCwvHy7TycsE388rdtJgmsEU7SrCR",
  "key26": "TELHcnb49j13k4w9dhTnxPbkWLYYcY777wfZytLy5dA6L8fh4Sv8VBFngyhXPHDuS9eb2Ava2UyLUxoH8uywuuw",
  "key27": "pdcebSQVknCpKE7ydLZs51DwbBs1fYVZkaCVjhNkQ64SA4AHJ3U6kMWe1pA7usvP47Wz5axBEsagyHWwwgmVTRk",
  "key28": "3zqQEmSYKzG4aWpgYbMY7QrHBFVqRwigReRwvuixRRPzND2jubZKpXPP6u6N1yKNujX6ombiNtb4paf2iRyhwaYk"
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
