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
    "5B4WaMRGar9PQj67E5NZxZD9ygq77YFMBsKHfJ57pxa7FvSnFFrXHJ1LNr2uRrE84u1c9Bv6tYDi4Z34gdEBs54p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzRhYvb896FjT1nxi2KJqJuqQ6QQXCHLeLqgykCm9vtz6fBY7hM8yPz8DBC7oMYdQkAwxNy5ayh5Jce8jsR8mZM",
  "key1": "ij2zSNdFwjEN41WmnHWBT28rsta6F9zvi81SaaRyYejGaCgQARK3SRd6XBWosNcg4pNc4AkayeScZ2YZRqaSNFe",
  "key2": "ndzehdynJ6VkoKavZV6kTDzkANYwbHBen65h3QyuoiaWYmbtD8tXqwgvjzoS5NMzNeTDRsvVYCMbspvrymPwLFT",
  "key3": "3Q6DWJCyQ8sFRYSThGzwtFomMJVXEAttfwPcvh4xS1wDyfGScv8TMugf5k2QBjR5mdNko3fcroENNnzLnmj3Pk5H",
  "key4": "2KXFvAeEvmaC4ET5DEbaFWKRrYmKHzLh2VUCrSBYgFZ2cdx1AQJRH3F6aweZF9QUKmeiaUXrBFdgf1axF1Je4Dws",
  "key5": "587tK3utGw3DzmeeZy618GNCZR8UuMZwJip1bQQjWyU6AaUFVG5iK1nkhTGVsgAKwPZoRbXp2YU9ivWgScaVVRfd",
  "key6": "4N8NgsqhycZikXztLGPf6KXZQsY6RJTwGrDBjYM72Av9RRYFujzN4JXytNCgkgNCpkmBCXsB8S13z2FmqAAcWmv",
  "key7": "2RqVNqZX5naRBhR9qHiLq2L4yfhkQcfari5DJAT6nnGSMKyJTavXYQiGNeC1VnyCUTs3ezftxsBeMCaBGojAj7m3",
  "key8": "2az1CzDb41wqVbvNE9siAGeaYKa6Ydakz99NxjqTqbroFnyA35xG9j9EPFJuP2ntw28rXmm1JWPYzUMSMpnAezfo",
  "key9": "2dMYx14FG7MKpj5J4zEmamRX5rkcZRWdfrePMYBLTZAGorTQZ9sb4QGMuyyxit21WfrGsp9hyjSAiLr8GXCZbBQj",
  "key10": "5WzAx3sGhqEsNAkKGYg94gnxgde6UEnTKSGy3pMgo7Mp2hK5TaSRPTxhAGbvPLhwe7W8gUSF8LmBwfrVeHC7kbG5",
  "key11": "4wVgy6nRsLFmNF3AAUHyGxPqJoGeYq3MgWobUhEcLCc6oWgCHpKkik4ab2Sb15QJrfdEB7Srh5WkfL6no5k6qgjY",
  "key12": "52971tMTDGXLFcRbUko8YTyL9DGfneZRnbRd5HvyNSmLwavfhmpZzzywYfZpcYEyULcm8WBiMV3VHLLeDZiui6jn",
  "key13": "4sKS97ukRgcJ3zpSf5uHiGv7VuNKrAShm5E5ZDd7VJPZ7skdx65jEhxsRAjeJfA5npA66Z7SCCMFiJCaV4CQ1kWV",
  "key14": "2erokjrE6w9f7GuT9gfkQriiCvUePRNNNawA6vFDpLArgFg6sW24v1ZoTgjE6Pps5Y8iRjgc78tgEHe6MugU8C8s",
  "key15": "37SPw5k6kWihNGxib5x3fdnrBSXku1nvPtknTXTyWUw34LxaZhqEuzx3aS1ByB82JK5ussbJXuwFqvwitnRq7Fu7",
  "key16": "xJcjHYVRG2rZwCmLS4oREiBn3xjMoYspzfADJnEx661pA6WQtQBp1RC5hymYrc3tiS9CYineQrwwa3uQB8xwtAG",
  "key17": "FSJAM2dman9xVmNBGXYFmLz2getrBuS2itB89EkZVW2Kw8K6VVFWDT14iFfNK39PqSggvzBuuhp75jLH8KPsmsE",
  "key18": "47K3WCyKVSEo85AsopGUW4YKB6JUhueEPt2Mq8nvuLmd9KEBNPui2UUCwamVDGKhM5pD9xS12M6mpm32VPihxEmS",
  "key19": "4JAHRgzpuXqyWc8LmRp5n8jiTmNCukWG6sYd7YUQcKXnKUaYYMwpg7e8Z2Eb5qKzEAXsnNtpGNuzsGJPR4TDWdd5",
  "key20": "2NTdieGC8qYaP5Sp6mAiDqbg45BoBztofh1XgkdMDBJ3eCVkwDxmAPtZMjHxMDUuQmFoNx41va2BfWZKmw4SkYt7",
  "key21": "2v61P5MisEvfpKUhaWaLDv7wCTUWeh4x4fbvazq4cWG3G7UMuKtyo4cvw6bt5owz5KjviiYiuB1imUnZKyibXfKi",
  "key22": "61dGwS8aHq7RuuF7B3GjN59XuUSi3JEjejXvFCtpGiBS9KFkYSYwbfHA5jgFvQvoTtn6N7wGaCqdmRZpdE8Ki85L",
  "key23": "4QXhvhr942wo7KV7P7BcbWLsHiXqSpxAPPbr1WwxezteEezcU2Rifh9QdGvXuvhQWUs2vRGL7YYEQjZSZxiG8Tmj",
  "key24": "XWJyJDKoGrCnXz5uACzgAVWYNuSx6kFHeB2QKoT33n1MoEogME4J6eK7VUJ8T4trrqfkyeF4S3PD68cRcKTZcQX",
  "key25": "JukLeetvXPz4ydY3N2a44486rZysr42dvgf2Yto2659XDqEURkXUNubjMNKdj2JvVojN4pNaCSsMxq4VMM2765C",
  "key26": "413uYnMVsxxRdL9wPfDJkvU99rfuUBh6EBPABgUWwt3exTLxTFyKWX4mkshGxDudqhTFEthuv65Xsn9Asa8trSce",
  "key27": "3kcfU76MNu5HDchww3is8zd5sARaZkTXq7dSrpVDVUMGJ4a1WkkRV8QreHgZM2ehBrjJhkwLwrfMabY8P8WnDMAz",
  "key28": "4Gqn2LQjkwRtUBnNBdJZY7nP3JpfaUiy31hN8gJAUdWb22AEdZafEn6EKunUjsusnHCPFVw6jBZovkWxXkBJ9Pzu",
  "key29": "3m73XWG8vrreuZq8GVpcDvegfvVfhLG6BvTsXaHrsYV6VQW9NmHfm4GvSYLtCUYv62Xh9GUfjCeumV4w4uD8oR9L",
  "key30": "ym4EHJL5HpSo5QHCvPUWkY6mqNAd2qre74ttnX1pR4qTRWyztawWDGm3o7jaUy2c6ZfhRK7nb2gg9wEThi6AdVR",
  "key31": "5gfCNYfgv5gdVfyPWCCHdPqDbLPCpsVe3NtXwjjrabGEhzgaSV4jLj6vykrXPxJX3zp2gjo2wpyJMPQrFrHEegPe",
  "key32": "3eyvXWgQHw9rjXnunNE3Fi8MuvfcWz5jtdnuBpwqFJiSUQDeMcNQquPZR92hiiPM9xF5DcGb6kJpkXg5TrpY3ryw",
  "key33": "37JmFBDK1DCAhF7AVUXL1HncoVRJ2dXowEEtYn9WoM1HXgb8j1HsKmsS7bFj4YTtGC1ViFn6n7P1HaxQv3zNF7Nx",
  "key34": "EmPKnD2rXHfvWQPHmj6wjsfYu7LfdQZFPJy8QeF7Q1ej8mFBuApSFHMHb8e5cTxXs9KH319bCLMKShHXpdZvvMq",
  "key35": "2EGqxaknYGPMw8GdTR2kEPXEgHmd3i5KDMFP4Ys98pZApvR68p9pDihMg2FGJ5nKURRa9hXYvJdG9uYcwincBGNT",
  "key36": "7HRSUTyeRSd4Ha5h3rq5Vq6ymZBYvziEAby9imRhiR9Wm6MSkKw5PVhTFY6YJCy2zfPc54xLs1zNM2yeWGk9kxD",
  "key37": "2v4yVAtUXwdHV3BLGnqdiSdve5DgM17C7DBnQL1NV5vqAFWzzGTueCrkyc1byFz9kgjcDYsmrGzLmYKTcWXHjcXB",
  "key38": "wE6x5cwoy6TS7p75erwNF5R3Uv3Fx5CpABeQZw3JpWeCVbZirTthwsrux8FtFvdWD45iga8cDZEmCPLNP8EnXUD",
  "key39": "3Q92Ag79ToA2MqnGtA7u8niEyvebBvjgDaYobKvAtRQ1qo79VyCiWSTRb8FWU8aVzvQtUKuXrRUrvLbnsMcGFceF",
  "key40": "2nLqwdha1HYXoiVM6rrSBt92ynpgUeM9DDimjAx4g4maj6PgGTSxfiS5SEv64uQdmo48pwVEGr7CpkUX7ttuHTLz",
  "key41": "5UY2odtFiwB43FkjwdUhVwFus6raVZvK5igBeihJnu3eHBJGhUCc6pcpkSHXWa6WDkFyJaVBqdYokuh91aTHNhmE",
  "key42": "ca1a6DgMBjtaPikJcqAocFdFZkCPDhLoei7kKAktdezTzsM3UEnhXLy6Wn4LNP9g4YaMxCYmRY9FGkCakjHnv3u",
  "key43": "4pYyVdWgh8pdDmHTL8NY1WQ8gZQ2H4KXNRSpZABajbymUAsP6wkmh8hKbwn9A1gJPJrG8XQQE17FkcBpavCZ9zXU",
  "key44": "4tgWstHgfPYH3m5psUNcuV3brugkLUo3PWBftLRCYxrDEee3ZmqkEDPn6kZ8Kviq2EpFgbJMeGUkpMQRMJXdTE7H",
  "key45": "2xS38mEAc8PKUQHEEFWKtCrHXqNmABYgU5h4gZUjhe2HVdQ252xzv2VS8FkQrXEcv9SYY1CQRDxjsq4ZkJK6AUk5",
  "key46": "4RUG6LTKMyBxAyQrpS3T8K6EtkdJ7gCqeZT8HKFmN4sJ45brnKZCfVkwqjiQGRcAWSVChmbXyqqgT6hzECW5NN3C"
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
