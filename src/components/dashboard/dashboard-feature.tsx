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
    "FCBH269JibCSpjFbXhr537KckGGNMfVNssJxgdDe17oqpnUWECFNjrEjLxuqkUvh1NjxVkWBKSMAyE1rYKsnbjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REEmpc6cbt5S4vWt8NTUn8R4yfQFdgVNkUSKjfrkGAnGCsLcyQQhNq7CYiQ2BM1pKnDvk4DimAZvP5XA8aur4aY",
  "key1": "5L1jQyLTYXka9iBEiGMEFLSeyMdPUmAmePTGiqAzubmcVsq1RJxEfd1ZxoSAbzQqYeVWGG6DyPyq7CFp5PReJcSC",
  "key2": "2PjknTcHZUCZjq5LL6aQPibNKTZE2HESenpSPbd1xVEkq1mCXAtcf8Lc57UmKekRNjj6tSPcHFKK26C66iHCDuds",
  "key3": "pi6iDiru337Z37fZMVKcnqHKWT1Mo1Q4hY1kAXavAEg51bUBAJn1tQ695hnABXkP4jdpQn54wCFkxNabqbYP9aM",
  "key4": "3QUi361aUFwAmR8GQXCKhtjHqrHz6ubfdc9V7xaLjzoFAA9sBtZNkJ4cDV31n14tP3P72RxjxNpwZn5mFF7vNZx8",
  "key5": "665RuS3dQZEmAMV2CJPndVVA8ei11AiDuywdPoAgVywyF1ipCS2badgp7B7X34qRARuu8QSTTsm7RkuxcngnHqzD",
  "key6": "47QPXUrWHD2VEcpZBdkgQ1YsyJHcD4iRmU2oPLK9GfEnL5SFSV6qE6vftPuLFqXhDHP5XYGuyoVGq8YEN3P7XZB4",
  "key7": "5dPLwtneu8ZcGSJNj3MSRjFoEnVuzaYFSFwLiGb5SyT7yu4feJf24tkQ6MnxePwgaAnN5seKZacfDfzwXogwbQaU",
  "key8": "55mdgXmM8vjudp6m8PNXM5e1pycndXzaQHpY4oCRbXN1BKY5AA63n3NCqN9Pv7QZR4Y85HnVtW3zfRVURNccCPzb",
  "key9": "4QNtr2SMTcucvVBVgTCcVdgcjseENDGoA7fESkYyyZXHGXdScExioyA1jgjq7abYFE9SRc8wyzoMdss3gCK1y7v6",
  "key10": "4CUpQLMqXJjEhUjdfZmLx3mBgqHVWELifUqPiMQsEz56uPVNX3T1SoE38MiRzAC8qsjDK6Ur18zGfvjA9BGs4Qk3",
  "key11": "5GvZcKJk7FqWXDznA1ycqnKRtG5TGZda7DqJma3UoqaiH7RpJYwfd7XjrQQB1gG3VsRwoYpMWTWVYrXGMKb3oaJs",
  "key12": "3FFdakZV6rZSsxYwa3cQDHHids7YzjYsFjnM7UcYm6gVLgMAUW6RwKDrNyZP25EaeHTbs8HET1EWryrMocj9MRqN",
  "key13": "TY42LgF5cvmEN2EyEsJLv47JrerPmBAosiTKoN32NrqdSoW5S1tF69ZsFCnxAJmSW8QvW3Fv9JoKhzEXfBdtaxZ",
  "key14": "4GpjqHGc2GQwhMBrpqYWu3FwFhoDs2iP7Gvo319HK92mtbG4tbYAYv9Qikh1u7drPoDwofkwUM2bLh6Q11nLgjJv",
  "key15": "2PW9JwHqq5rfxCsRyk6CVRxqQUudB2qwpQeQz2zxbfXPJhMTpc6FFPVN2nMLH7cujH5gDJ6Nctxz9qtYEKsMcaq",
  "key16": "58D6m27pZRsBpiZdESb28DF2NrKAXfHTRjDnkX5iajFEytVdwo17tMPTmntjEEJzhbX25FLr61NneYzNGp7TFEL7",
  "key17": "4ksjaUHqR1moQyzxFZxxi32dZAXfWQXf2QZKbYn8xC4x7XW1YEgSAfA85KobJUjSPY178PHG5AA6QETBnBP1pxRu",
  "key18": "5yAANLKVwy7sLbc3rDU6JpxSBriSunC8zAJudRpDsNMLfBwtQ1NXSzbyGBZWzFYTmywhmhUx6ZMFjnuPm2XnhuZB",
  "key19": "24eTsKgMaPFBJsxVjgVU8bHhrnTEkYrXP4kmzvi82ij7PUFg3shJzubp3AE23zYAVDgJrzVK5AgQZk31Br1E5FSt",
  "key20": "NbgtanRDo5gLS2panakGVCDDxCDyD9XoRB7rubgAzzo6MGrAos2ByBTDJ95wTv6KUcdq6zni4CvTiUYsyjoDt4X",
  "key21": "3eZUgWWBQcM5CRTb7jhsBca46b1ZM7EeCe46HfnGtTBF7ZLyYjGNtZ4REh5N4Fni654UUPvjefv1Cuw12927jYLp",
  "key22": "3XEMarLHG2pXVEvnQnBUJTTP3qvpEUFqgdbaFqKfEqzLASxNptXd3AXmeu49LJAFKJ93x2izRV5qdKTC5bkZcyDz",
  "key23": "5iD5dmLHDyJkfJDxhnXNoyPXjA9N692eSNPpfbBu8Zmn3zHJ6b9bwLb4m7ykWxHXxKy69znymriih3tkaSaRZwh2",
  "key24": "3Vk2sp4jCxCWkbnapj5Hh7ZMNswHGRDqwzcH9TXDqMKsP3nZHxASBZLbmNnnMowVh6mFLSAqApc6Sn1iiNQwo8s3",
  "key25": "3q4wX77ReFBk8kQsKpdvh4JTFJv79GLktVsLrc33a15VWGcsAJPkSby3WKtBoVHQ5oPnNoJSvAAgk4nkBoaSpdL5",
  "key26": "2Gy16jgnr6dVi8nuLwDqEf6whkvKmYqqeBXMRoCsFmn4cs7CwYbv6NemuyY9i5x2ZVH49H8j75bMTrNYNi1K5PNN",
  "key27": "5TfZ5EKsZocX1XN8Kv9Mumg6RFx5seSECunWmC9ArVzuSmzgwcgbeus62b8rxzgZQBbYrG5L76DnVjPueZrb8ryg",
  "key28": "EH8e9YSPqLYo95HGe7xSYh2moSJswQusneYGuAMeKAsm6AZkm3s5EHFXWf9uwm9LVw1sXmz2sKgeHf4dYAh8fXT",
  "key29": "22A5gQrWG7fkLJbBzbYv78LdmeP65bKK5uYSdkefFuSe2pGCAKNpMbFtcw9bhWtrwWS5Mkjy4Ui3gng9e5Cpg2WW",
  "key30": "GG7JzHShjfpjnDMtGn34aSb4mqNFb5qLApHynByBKFh9Dtxarve9KfrFBvBmQLcLwF1omJtLt5jRo2RSa4Cdacv",
  "key31": "2eNnWx6FMVL1WBrDYpRw3W3CdoqsUNoCQ8qGKu3vdBjwrfuTsH23mT6SUTQynMosJ9H2eHsL1NYtMPmuaLYqEUjf",
  "key32": "3Sj62QWxg71jyfuTZJzKebAA4WLzQJZQ8mFRBDmrEdApTnwLTTLuCh7ANQY5pqb7pLuyTvxwakiPBqzVnewt5J58",
  "key33": "n7QzpLyUmffRjuAh7JqqjzrssbE2zrLjsK6xPzcdSMTyoYy3cCgETC92fgWM9McruLHdzvvJQoPeUUeiArKR2ov",
  "key34": "3wqrMhD8AEnJCsi1Bmqv7NnQmcFkEKzQCuyPfBdt6rNBmgxiwuHmgf34nARTzyFq6SPvcLqf2gpQiE16XH3NnhzP",
  "key35": "4rXoeqqJeH7MP6sTazvMFkmQdwSkxKaWGcdfD8crwoigSv29rbtDRAZhyLQpzJKBVN3qwjwBThrGq63Li8AjtRnD",
  "key36": "M37E6Sf8REriQnQdbcUWNjUeNrbZu7jikB97rhAWa9RM3A8d5x81xjNZ3cUGpWYxSjrsjSbn954j47YxBJ3nFS3",
  "key37": "61PU17PVQRTWJ4yxoCDjvuTGYro2CjDTzhqifCwsp7vZSrLdbHYrGvsshEgpTrgannxQHoQUop4tMqhpy9cvSkVE",
  "key38": "3hYYzMVD5VPyaxRYMUkV1sshTqLq78SpeZV7iCxArwT2oqZwz9cdFgvq4FtKGgVcRxnt9mLMd8fEyTTm2V6KznWT"
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
