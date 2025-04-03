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
    "4V2hdj8m2Fs1Taxai5QH46BeW7BwAgvZBjPbNhxQHeiwWdaJugGd1YNKp9u3S6NpZHekfGC4e4yELKo21vERbL3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w21nc7ua1R9mmEvJVUxxEkVJz4EDUDBCGaWVejriJ6vHdaaCpH7ZaB6bktYQrgWNWQJiJFfc3aDzPtXZUkcCn6Y",
  "key1": "JXEJUYb9YBFZwLggmVFzeuQTridtpPUEVfoLJXju9jgSvsEyVDBuqitnDfjDXpbftgUCFzMzhiCT6mjn3g4Bsoy",
  "key2": "5Zt23qGERo8EfrT9o4KpBnGhcKMzPqKRqpvSSbFtCwUrU9sqCRuQ5PVc5Rd1vXQo6W7LAPyrMW16XxC6vt68qCu2",
  "key3": "U2mjzbLZRwzwk1cTSJKUsoA1YkBdynYS6mmd4HRnWhHgC95TLb1Vcdp7rc2ZcdKjPKrByDTe5Ghsx2fUasnApVg",
  "key4": "QXrEMCvGAxwjJDL7FGPqJRZjWL1nE7RBhVoRTJd8qhfnJb8AdoGZ74KkLzwZfr7CmJippKX5jkKxx1triTVfYmV",
  "key5": "21bShCj7Hg4f5XSSZbtQcwiJ9eNHViwZSntF5xUVoER2L8gCx5kawxZsEoRD6tguhAGSaApyCPKQqJwkBvsJZtnx",
  "key6": "2NAcdCW4MFCh32zGV5D3VFVyvxajcv6jW3H72c7pRB3Asb8yq97fapsfKE1V8cGWCU4uhGRP3LM2HKeRnnqniipC",
  "key7": "2aGFSQVQsC39Qieg7uXCu7MCxgpHkAUvdFPfxKtPDi7kCiefbJF5VmrKhVekUCmZ9dFEVSYmf7LfiThp6WUmRXrm",
  "key8": "2SUGq4GwnWyEPcGhpw2p3TyZYYusRbBye2Lqkywmo5Am7GkBq9dWDMnhXauiEP2zfTMn2HNytKE51Qa94rJK3PTw",
  "key9": "27qSyVoXxdjJrKWETnokiHWva5SfeG73qAhmEd9iL7uMFCofa646uz7P17TbJJ5G2QgbZ66pdfroLx2KDVk7jRZY",
  "key10": "2kaK2XBpShRfuqacAd5D1RY8JU9Mrwu8EahxLEg7HHcSKyW34CCgETYTfHdZAhoREL4pGL2gr3XyTnZuH8vbUHRG",
  "key11": "4bUg9MowQYkMM4Dr1pRowhB7gqR16yawgGUifsGyBWFuNmpvN83JozPRbu31KSs73j7rkpiKPowkhoQmq8ZZPfVW",
  "key12": "4rKXaTEG4Quj9z7g9QZkZQ8uqTzmNfzUfKUPK5Rx5w2Y58cbSAYotgtsgMgfp4VLBfjWUKEotaNAxw4TZ5Ge1LqF",
  "key13": "2aWTneAttPtbacxuCwVmQg83cdaDABUiuMGpeSB342E72jQWgGjWKn8YpDqds8higj1Js3JLWo35tnK5hY7Ac45b",
  "key14": "3xHPxEuTFq56QHRKuEfrChx8GvXhctTkviueEb3McbuZw4C2byGQ6iVFm1seqKDD5WpCjrnn9MM3fyYVe8TBAFu4",
  "key15": "3Nu1Yz99xkGq6mHDhFQNsWxFtorBZjvVPL6XbQqwU6V3MbnnmYG7C79YNyssqiwokoPNbEpR5yNNQRtgQXTRUrFo",
  "key16": "FW58V54eB2pC4zCL2hMUbKtcw3cz8Jrm5vcmEtKqf2Xmvkcd9kxuBmes2yd74pyFtrjHfyG5jkigUk7EBMoD4Dm",
  "key17": "4Qej3ybzK4Z9LUV7AX25nuemKPnGaMjc7EBbdwo11JwZQuFTtTChcVv6ENqRCPnm2DbsdBPU65m6tfiXqXvJfZMe",
  "key18": "5oYLkFKWN1dMs691xPd6zVZWz3TBnPr1LYDDfH9k5VYrumsVwguqyhwrC6hDc6tx7tnkzpPXDVWzhUXC74HHG57x",
  "key19": "6TdjarYCdYDbY529TSJRPLT82j8QccpTgb6FQLLVn2vgBnJ3Y8QQfm48iTyynTDk9MkPp11nwivgK8ADwEarzt3",
  "key20": "o1hfDbs6xREFwCxWW27nPjbHo1PNuuYqo2jWeRdgoLGBSZJ8rg6yZaPTEw9XxAEqGxEQK9zRyQErgehUkgbWQgC",
  "key21": "42U6oQ2tgYrkN19pBsy6mWMi97HdsKFgA8avVjz6KbRUMm7ASs5xJkWDiAfFygaDLEYehZrcvMye1b5GRoCnvgPi",
  "key22": "5YnjtMDmsDH8PLKhknw3qTNEyt6PvhzjjBaKoRd6JWF5rRbMKATuKnYCCMi6crz4ZEhdcasdehUC653ES6Lk4Zg7",
  "key23": "2WdgcWnxFtTYoUW7gotG42mGKTVBDCW2Fnxk9CU1KS7n8VCUuzmksSPJizNuFXxsoeTnSYP7wKAcxFCAVURVhqPh",
  "key24": "5SD4cqFdHMRorbQXzwSvohHw3vcVnFBXTJofkPuW362Tn3Tnh84pJGK9h7WHiVf6GRJtVjuM3aZCRHyDkgBNbi6N",
  "key25": "2g1pZWmKnxNuyuo47NSRUXvP8mwQAVwFHKDavEaHe4u1TqecCfdHm7hoUsAoaDE46P4KXFADvKP1rzvbsVNCrz2K",
  "key26": "4PGxdzL2wRZoWz9sLsQurnLTc6znLbVqQCMdo7NV6jnAQcQDs38WgnskU96k5r5pzdkxQt2p1jSx8adkwWrNBTKn",
  "key27": "47k7ECMezDvNR6jKc4Chhgw694fumHbigoQnmcWtVmxBBuDeMDTroydiT3z5edsee5i3s5jitt2aFZDCbXR3d1VM",
  "key28": "5YWpBy9gaVFJJk8HS76H6H1dWFpeGkjSGvrR51XCB7jfhJRci9pwVr4sft2UYYPD3Daot1CRjeBVLxrQqhyb7BGw",
  "key29": "GEmLmVTCHX15a4mkSXtWdE23vTC5pryMfXpqEZDcdKxBrs6t8H4sLGbJn3yN8hpWJc5WpLQmaB4XFEBzJEsP36q",
  "key30": "UTqzrPejtSocLPxiLX5GzF4emT9hC6LAJ5RWNgsLgHHtRqkGnuJoTTMFdHtY6wYj6JkfL1tWB7n1f1bW9FVCRJ6",
  "key31": "Wz2sjAYQQDANExXSMZbCvLcVjjC9pMLQK7mWEcq1kcQ3epiZWwgnYjAajXvCRRZvLXE4wgpQYAGVF6kDhQARbzH",
  "key32": "28LRJK2ccdbTw6fzuSzkddF2LXEb1THySa2sLNHLwb84QLMSXtaSnGRS5mcXnrtokuZaE59EgJDr3z4cA4X8c6xR"
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
