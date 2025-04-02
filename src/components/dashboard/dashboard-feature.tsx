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
    "3bE6H2dJSUg2VcT9zrAhat4opp75iNEbmZBeLE7pahYxpKPR6eVjtVjDmnRKnnKEWLEvSv1YbEBayrABN2yA4b1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dnYqpE33s3kxVYyAra7GtfprDQK7xKbzgBLALLAkQC3keKv61cXCV4HDBvJ5hrPMJbP6WWB1YcjhNDZtBLsyfr",
  "key1": "45LyhMCMP5BJTSYAMfkij38JiZYQyrrBmi9fJJ9oQABNBNWJZUMSZatU9HqTwJQkvRXeCxtzjg2tEyBAwEPHA5ad",
  "key2": "3MNtfbzRvx7ZbfVbDUAqwH26xbFAhQNCnD3X82cWLhDpHEaksNC2CaWKxvknHUngmq6g4jTL5KKyjXAqaagGgFMe",
  "key3": "4Dkc7m269Zffm73AShYVSjSxjiEeXbKJegxEZWBeMNGFAfHcK1h65bJ52JhAnirZ48a4j8KnTvZM3p5QZNT5eYXp",
  "key4": "3oCfvgmpLU84x1uAMBBa9WNkQNsr3WeSAfncFuNNXzSoxegvmhvN7kHotbpJjQuR43QaxRHg72ptxyekPi7pL8uF",
  "key5": "2mLJ2ujS6uiRBJPn9LpLNyWRS8gfwVRRR4XnM37r5SySvXtQzjJCR9EeL9mBctp91yX2xW7DJfH8biiV1QGjNYRa",
  "key6": "wcwp84eqwhvQiYfpzBNiSCDRJezUHbuFbLYeZ8Z92xBcB7KKrCUGCo1CTxS4hfCQv6eo9uYBp36aCNqb5gLpSb8",
  "key7": "2umEAsuuSfryseXKv8wFGQdF2acKPXzwsTNAGJPgSpf4xs3Csrtu16SYfUScSHon52nvPFZKqB24vVXzZ2E5j1Aw",
  "key8": "3Lz1T8DhPc3QoQMDvfcCBfK7T81eWLRihSSZHYBZgD6GBK82VuiMkbQb9XpAPgGa4BtejC5fd4PVD26fLGhiAHJF",
  "key9": "edW63LJCx1hdjrDW19WuuabXxQFrAyBRue8gDVJuymMz3ZodUNT9tG17HcYgFwWbvQk6cq12BPoDfYJnGBL5bnw",
  "key10": "kYQBhY9YLJwC11ERYo7T2YWGas7h8EGkoHkmfQQm3AfYJoWqPzXoJk2zXibghCUetyRxshgDqNUhR3HSVz6hR3i",
  "key11": "2GhbH6tgxyxYdSR6ncsPPWEuGEYHWZB9HEsiZKrvmTtZcKGDqVAK7iXkt73tpKna2A9i9D2Eo9kzv4kwpab4ndXV",
  "key12": "4EX5boBqPdMBAnEfpKJmomqFGdQtA9VQ6sAUkxPervwtpvfqEPq9YKUBGqsgWwHKBsJwzwgXks4GngxyySAx3UkS",
  "key13": "3Q4uHijaNgrFNqvuucYJjHeDz27WPgqet2PAhgbJv8SucU3AProfpikyeUknMY3Af6CzvHywTkWYgT1PwKD1LbGQ",
  "key14": "3nzXAQ6unRm1EtvXmRRXUBYjLibE8Gn1tsCVRXzWo8qtG3gYcQic9vNThYA2HZ7QxaEGhL6SEMA4EPADZyaBZVqv",
  "key15": "RWBrwz4hp32bgpYAVMt7XfQ9iy5YPTAbaQF5dhTfs9JEripnYqzsHkyN4KwGTQNTpHZTyfmN3QB7EsviVUMcxMy",
  "key16": "3brdoyYLJcGWodxHAxSV3o68y3SNQiSiYZPfry5upB1Tyva7GzPQK5UDwxD2M7bqQqCuXfCArhTkzAgMZZLL15Ru",
  "key17": "TvNa154M2UensqwM1QxWf17iSHFZPTvAyKWPqL7eihXvT5vsmVbBKpecGR3AT6b8C6yjgVpfjN1E9UMqTYjQRfu",
  "key18": "5GUC6a1BJphksmfbAPfuHnSvnyc8ujnq1irr4E1M4BqivqnseUv4CuagU9xy7ouRwEc38n3L2UhUb3ymc6yihY79",
  "key19": "5gzZGYEZVjzBmzeRbYiNdDrcVQQgxh9EcKoL9VapmnhvBAkcwHqmqM7TAJ5r5xgLCNbxsoL2oUsAytsH8NnRciLq",
  "key20": "5XgeQ8JXusEyn9YDeNbcNap2EQLiLS7DRM9eUUJAhQkLRHkt6jwzX9i8V9kydhLiic3KYvm68inBjRT7uGxFqnGU",
  "key21": "9MqKu1Gn3VvXn4Aky8NQpZftKHEgdhWn9zgsDr2jJPkCT5frEP28k7nNmZ3CvqArni2CZidNAMNKqfYTx56yCfb",
  "key22": "Wu3nRWkhoKJcRnAqyWnUhHnvXqwXnkxZLk8g1XwC8FAuWZe4d3mstbSzQmPpEnUPvBFadP8ifYEBaeaWgRQfUGm",
  "key23": "q6KBycvMSDkN45i7cYg2U3fGzbnBHQ1nqMPSAa1XP6BKT9Chmo6PKCw4oG6h34gm3wSNLyN3Y5LjypEF5t9LoAn",
  "key24": "XnLnfyBot7fndLugkK6GsvnwGRN6SdWbFfsaYPKKCa6x2rEaCNtkG4FwBERo9i7iWCdydMZG6jotCXK6NP7MRdh",
  "key25": "56os8QFTkqdrTYtkupEmr3JD9sFMKX7CVDg4HT7YicnwCtxa5ipq7ij8F7Q35zP8zvDBhmjVpsZNb8bbkXz5g5J7",
  "key26": "bN1FVBgnAsHNzzpZdmMmXPudwP7WtWc61ddxBsMgKr3eSHwGUFLYuSDUXQSH65bHjnoiELovX9X94GeqrA2Lzmy",
  "key27": "35vJt4cqbSwLmJ1ksTJt1gnNpqp3BH2X3rR5LfLAdZYcbT74av7L6xh6UDeCWnJLTtYVCwDUbbWHSzwytmGMtW3H",
  "key28": "TspG9tzw2tHmXFT8kvUhS8XNiez77EDU5WSHdVtDNeAYdVgDbURde1KEfMfVvUrCftvd38S3Y3krMVzHptuza4F"
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
