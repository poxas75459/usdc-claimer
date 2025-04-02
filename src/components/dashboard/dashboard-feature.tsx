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
    "4nsZVJ1425S79Si3dYoQzgK9Ui5PJySkQxAvCms7HyY3n7RC44j3QQwXKDtNJSaWuRwCLJGUWb7CtG4yVd4LXXk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xicNSYg23CZshY7bMg3Ewk1oHxxBxMaVyRiRKdFpRvQBaXmEo7X1qpLNkYtPixDvqVDFMNJTSVUSPoNp247Jtdm",
  "key1": "2fuAaNQy1ygE66MLXpcmpPYqmFbhpFsYaNHn58jQtRnw1qXfhcBohhUj6U64AqqADb45mJipHwk8Jw4jEmDHVKB1",
  "key2": "pw8e7Shu8xD9VrWgJm3ewkjzBYoPJvZwRUePwTYh642K8UmcmF9t4duBhddZBbdF9WTACSKGxqQ6osju47WSuhV",
  "key3": "3qJYTpyzrwFnvpNS4dC9TSJCH3L8NPvxRKCdovKc8NHDb49LaQMYCtuNpfvx92cJa16KDQyVH4PUwCWtfFENSmK5",
  "key4": "CihXD1td6Gve1oYnSbexqPvDsppEj1A5SgCQUakE8odsoMjisDwpxfFwpGecnADE5WJzB2VJPvnmuqDc1gvGfVD",
  "key5": "63a3Hz15cHtS6WnRLxZrgXWjJUsgYcsqdCKnhLSg5mUDiq8h5waS1K85PvaP1jaHFhPMjgw4NQyagozKSPRc9QKA",
  "key6": "2B6L44iH37vED7rZMjKBphtSPHstudwz2tYKxDm8bf79QuXvCiYJ464dfyLGyFUdVNraTgu3PZ5wbzK9H17ZgKYE",
  "key7": "mrSqMLYLDhURBLvSvx7ckTVmTpJYezimmd3pT2ZtuGCUj238EYCpN9R2kdGhY11ySU5VpaoG99JuHacdbks9Wro",
  "key8": "4xE2ZS215HmYUPUPzKhFj8uid33TN6RD6NwjZ6aKq8HLty7q5nNHyeBp9AXRnYGciSHeVgrB9acf38U4fRW6Z28S",
  "key9": "4j9XXhcGZgUSsVCzdA85hHQ1V14URx7Md7Yd4geNSPz1eKUX2VjX7pAmnNFaedWy6oDLgcuDEWzEffBAN9DATy9V",
  "key10": "576mkZhM2EXGoVtdcqhrySr9MpvwXJDrHZk11bxPtnPNNZPPC7DtFmMCh9VD4aq9eRKg2YsGUqytgHob4kmQj2vB",
  "key11": "5Ba1CCxifL7SfJtMSy3jMnSp8gZqugg8kpfj4kTvJGVrZErdyDeHoJrGtmzrxoDD7iufUdzmJZSbN5XBus8QEmiw",
  "key12": "2FdCeWRU9bWC32WyjSTAXjq8DMCupwQv973krSsSmYGAJr7hFLp1TQ6htDs3sFGgeFfRmhnh8LVLJ97EaTVxnjsZ",
  "key13": "5FZ6jfyxdigxR8j8u1BdXDCsko3mfuKLJ3FAvCztzLjdKtvmjzM79RtisPwB1tnfbzzXV5zh9UrvFwjEjcExE5Ut",
  "key14": "4Wa7SzdEUdUu4ysWMUF8fvp12mGTwBGZEd1GackXdvTRXinBCcaEnURFV73N6aJPbcfSpNM68XXgNjhRQFDsjV8d",
  "key15": "2g2XtHbCvfudmeSYuMWtVifgg3XSpc9DFqzDycnrhy1cTVMU7Dnmv3yHMwtBowmS9pzVo8SHmnsjK5itNikt47sA",
  "key16": "2TgiGCpX2JWMtVCaKRZpvZXFSFTqdZQAkBR71heeDBdHGUReMwV9inge2HAj3ZVt6qiu67BaRiymKPR9YLd9Cchh",
  "key17": "3ef543ob69THq7zLHN4TRpwQhLTT4GW2gd9tYNNWZLWCAMcQnCDK6R3S8xw7od3TsHVeER2fQnnjfmuEux7V1T1y",
  "key18": "4dVZGuH2oraYGPQdokz4Qzr1D896adpKfmxskQ5kVyU5fpUoRsvt2k5iW1vDgLYkQ7Ci8CvsvmkfhviPmFV4CPNu",
  "key19": "649YSQMNdhfH4EyBELjBaSFpy3RfcC8V4UfcrZZHmJ2G9kPzVrfdBJsf6DXM4xPo3uuUekZx9pJK3oKE1e2xBMPY",
  "key20": "5rPtqoCVHDa2a9heS3rePGALk1k9TGMZwwtAiqMxXYDVvtd4BTEWgQ4xzvMRnnW5FKJ21sQ53qLhwuWZnumvMZbv",
  "key21": "5BDvtqUgvzc7Y82xA6Fibhjif1e3LXiJ3WY2NnpYRP3dwZ6Zm4dfu839mLgTt6deyhMLfmjQ8nbNVMEgwjExipfq",
  "key22": "3Aipbn9iH9i2ospd7yX7XrF7h7S7K7jscQHur92baJZRkhZbW2QRnKAZ616XeUsnaUdFgNwo7HvEBGE19s7eWSNs",
  "key23": "3CeejUkciystLhesjdmig7EAeC7Rjk6PZ4vmAUDuoub4UeNkS8iG9UtFSzhJKNEzzD37Cvd6Qrkzrscx7nyMiQRm",
  "key24": "4fTabJjhdxQeWBvWGxnz9QUhXb3A4tCWviXEWmkdDqtwfMZSSXEhAkvnYbuTfGMxgNdQ2KB1Ud5KGEPEB5UoFbKo",
  "key25": "3g6Ru3QPhiMMyvpEL7wVDVTfFh3FiVrcpzw1yCw4KvET9MvbMCGmyG5rtccmSP6SCXH98sz4wi2fCeDUSJa9hsky",
  "key26": "4imzT81x9kcWq7t7HanYdjhHKMeGUnz7Smz6KmsPMDjxuq2BELUeWBKFXyZfDrvfed6Dm4oP19tXpedwZsiXgkCA",
  "key27": "3eyWYkKZvXiVHL99wEgDDNeitUoHfBMkzvgQuNLnccwKLGffo8xtjbRzzAi5oekYctvrfYwDzbbWSdowsgMFkjtX",
  "key28": "5AZpuVMLpTfLFZPMCS8A47pvR85LJmS3MqgtaRuHixuGiaJBrXeLe4ADCPGfPxYZ8d8oEiJaomHXxa8TEc93xnQu",
  "key29": "51PrSRjNkzSY6q5wyBzjAR37EQGr2WP9jSkpZRAtbvXPX8v1ArizZmUEpq62x5fR5SrfMoF65c7ZRTfK4m8ybGEZ",
  "key30": "j4jdHdTznELvACgmsqxmBkfCP73A3Njnn2a1GVKatMXcLaTP6pSfZg4pAjDXUZxr1HGzKDPvMJYZz5xLT5jt1yL",
  "key31": "61QNEUhmfymEUKBWeqxasci5GNkoi7pREx6FuyKcp9nH6VquqPFME9UYSMop3nYG2hhxJL7DQQF1v3AuzUp8UzKK",
  "key32": "2QJXqRrsqEFCXpUbsWVYP6DWa5FSmpAduVyqdKGr7YjrngHystdxQ8V4g738Wm8uXGxfaVkKS8xbvipTVqQnniyq",
  "key33": "3HV7UnbB6R53h5LPehruzamUVhGXPtY2pnRE3KmrQ2Hjb4AKAp119WzXXdGJZtXQzHDA3kqP6AgcxqGg3z5Mam3H",
  "key34": "5GDe3vvcFZqaiNMgJAktnqJYjWdD4wMoTruBd6gSWLtcaXzbfgx1tNaajmWKQnAAQEYhksStoi3JehRf4xzooFwr"
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
