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
    "5wA4c8LynAGhjYVhWGBTGL2hgXKLsTFTMnsZd2PNrqW83xnE3i9tibPTBewyNyN5QA989FFPAovGZYKeyjzf4enc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dLqFhs1pRkHPz91HGnVqAqTLmCz62hAMKWkZA3wvro3WMfW44qFkMEigxJV6sZoNiQes813f38xTrviaSeBc3n",
  "key1": "41mgUwW9ehNjBEpnChxj5NsLpyEwCSb8t8TQd1Ne5CG1VHxFPMMSCAV2yXktFXoL7MvGhshCRistMDUNRzt3HNU",
  "key2": "2kHn9SCQZ6ECX4HLqFbtt9tJ9AZoqCMmqoN42Eqs6w8rZQjEkE5TzuKgQvPtLX5komoSy3s6m3RzuLztrgcbNeDL",
  "key3": "mdPeeJvMiY5kQnwZxY7hjaDm5dBKMK74qrS41DqxySxR6g6puPpXmYXJgKtvxhZhV989qDnLFvzGFmy5DtCtmkv",
  "key4": "2cGYBkzHh9FbTQUkWRUVEdtUPCxvSk5bEP8hbqZXobY7ENHpFCRdZeuNuJ2RY2Ch2mZhbvYmNUcbfDLY88pgXqDm",
  "key5": "4F9GuMXFvoDmoVQLoLfBuCWDWc7HT1eoV8SZebifezU5sgV2DnS9ar8DB58zYR8itwPfcah6aWQ47QxxD9ZZNG8F",
  "key6": "5f6b6MnPsShnyr4GaWuvd2WdnPStAEbgFURmWpgHKpzHpBYknd1qUQJ2VFfCAWc4mxUtjz9FF35eScn41dbW7gkL",
  "key7": "3jKAb3QcK8C92qPb6RPiZgBtejbENB1CJQJqz8Tdn57S6H1LTKtvw6RAUXFerEKR7Z1BDsNitACpbWEuvaeDwAHM",
  "key8": "3kou9hCmb59xcR3DVrBomyxwohyYRmS7zLRqQdCf3AfQ5Yd7GHmbPeuiGrZrhDdLKr7JKrkv2npQMby1xryWAyae",
  "key9": "4PgUffrzdTMBuGwoGasb8W4sTyC4yw7L3sbxzrpytguXwBxPiURp9t3W6u7UWa2mLVEvTUkFdiT1pmymAvohWJNa",
  "key10": "3sWABterD3LYL2XogBeSUcL8HzLqhGWNTAJNVoW9S2jMeruUE3dcDq7Z9skQMmzoYM84HcTNbGNng93StLNYw2kS",
  "key11": "2t2uKZSd7wH1ghJCQTQR4pyMovhVZczGggx8eXCAANouj7fqqr76vrUxHU3kQ5LzZEAHJpP6NwvnfiabZFxSzZbA",
  "key12": "3h9yGkeKY8BCPshYGYLndZa82urzra1iA2dsqJH7xjJeYD4tPMoFQRCE13J4wnc4ubAQKQJR17XxouRcHWxpYwKi",
  "key13": "2Q8Hmj8rt7pcbQRJd2XLmLAz9t6PAYjCRAhdGfKcztTLP65TM3LEYku964NChq2hSWarK95w5oasVWYoBz5yf5xa",
  "key14": "y4G5hkj188ArAXC5i8miP3GActzHionmPTDeWZ4BDUtSZNVGeHvYrBjn447gzeeVdr79AZNxJ9xVL4xBVM1KWHk",
  "key15": "2XpJndY3NWi3Q42WMLN5msTwzvWpJvc849AY5b4TKevLYxGNM5cuvdpi3VeWfrCHWXSPnWurYk7RSCuSSwyk1YSq",
  "key16": "5mj6Cxx2UyjbHgn9weJQTQ6UUfRKLMwQCYxcbMcpZMsMtpyWEDTYpvar91EaFVjQynpkF4E3BMaPeWKzpp9bRnL1",
  "key17": "56baqahrqze8Faq17h7yGXwjwpc33S3AmtzubgMS9y7wHYT8W7R5r4dbzHSnvrozdppKbKLdNsLk9o5kzFoZBXbk",
  "key18": "VuNHGS3b8ZgJVAthTN8qPvsLAnmGmq7nYUgejFQEufiqur6q7qtuS7Qkvo4Y4f6QxPNjtvLkpKjMKg9ZN7YYWEP",
  "key19": "2NZyac7DB61jeKi5EsuFY2m9CGJ8q4YockSNqwDPrRsoVRo9if68kCS88UT25w3QU34t7YUzaP7Wf3u5BYZbimKS",
  "key20": "3Mk5ybkWtTFtBaPqYXo8QkKFzP4LCFCQUEE6VxLHhf1sMSRSZFPVXsxAvcYCGPbQnsKW8Pa6mQj753Di9J41MVbx",
  "key21": "3EggUjhREQvzjsdRpXsbpPedwtbZiJnxGhqCsm1QAPWpgEg9cE4CmJ3A6H4YmMZuGyP8bM3jisxafy9tHWiFBFjw",
  "key22": "5ikFAVVUGJKiQoa4ZqbVEBrhHJnmCN84DZBGCrbquCdQxeKTo2bqZAfo5ptXCFgWrEnGziymyQTMzQY9U4RbURfu",
  "key23": "4ZywaYsUqs9LjFJvr2uT14XJ3gpCJX8vfDiNGQ9Sot2KVHrHxpPhoEqoN9xxkgutRrGJy9UqJToLNex733U6Xav8",
  "key24": "55LG5cnQdiRHiCFvuj8PWmvWhFEj9bz2s9Z8P44TKpfk8DbjcQZZgxEuVC7zm4Upesp2TufJs2w62SaP8Xpgp8Yd",
  "key25": "43YCTJ4Zae3FG7w5A2mHN5SXX1uPD3mzcTDRBZYEQdgNtGtmL1jQpHsYMd57YBapUAWpopMAPWmNZcecQVHrLth8",
  "key26": "2nJGZ7QeEj9cx15KJzFj6NNvhZHtV4Hn388mZDZonqtPxK7Aoz5jZ5kudDCND2KmZiTQSErhzBJju639JcTip5iy",
  "key27": "3hwPXzFv6pNUZmhCydKLcLmTAu2a1mTAJaaa1AzmG6o2t7DfMjLMoEG4EoFj93pMxJvbJiyLyMLUGyVBxryZ4HX2",
  "key28": "4zmQ2cZhHXagxnJxvQXCW6Kmdk6bCkbFs2NYkiCb4eMsg6gr26ZJaXnxP1TYpdDntKJLBKzuasxWpnthyckibeYh",
  "key29": "bjdMTzotRLw9Ke6y3skhz3UuhzUC7EDfWkuEtzgFmx5NDVYir4kXdhzPqX2h4HCTCmE4aTC1PFeL4xeG9k9j8g5",
  "key30": "3e6J7TsuKxzNC84GsUGhpvFn4Wd48imHBquf1XtCjDpeF7DAN5GzwcAb9NXSSzrAQqx4ip5spVDH1cwkGTk2osJb",
  "key31": "2r23Je6YpNPsPCan2j3f25sTxcArFfP7sFiLJhi6sJP4iaCELqr13dyDCAAJAserqKa1zW49BqD7Y42FEu6nQnKD",
  "key32": "2RToq7BBuDej2F71gu63rtKZAb2qW2RKs6enEcuZtP8TVzj9vGKxubhsAbvVEUD3XShkAWimngM8TbNVV4t7TTka",
  "key33": "htWgHYZVi4UtgmyfaqzmWWLY9vKHms4RrwBVFCe5qmBkHitTffSEZmxx5G9rZ5xdzkjLmnEtv7vL6Rd9feN3MMw",
  "key34": "5Y6B8QgUYCq7z21V41Amjya2pasvgu2tEha2a7DX19A5dMk8NMxN1wUJZ7BkmwUNufY1UmJTUCHAfWZ3xzwxvoEU"
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
