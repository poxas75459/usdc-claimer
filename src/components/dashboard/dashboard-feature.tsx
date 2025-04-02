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
    "23VvjCyG2T1xw9KhfaLQ5kiLvef9aCTgDUPrMtxGJyRwSerwwspU1xW3M6dos6JZt4Wwd2sAaxcExc6LoSSDguvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JuaEgkrigjtyECtv4zHwV8d7vJhgn337x7bgHeUN4Njwbj3AfkkjYWMRHstUugLfY72yS1WUmfpwcDjPe3jwBnP",
  "key1": "JD1U7PV9dCXT4BrcZbHQgnMSoyHrWGyuMEdHRmLieYu6Rhie8mr84SoFMmSQhvqs69S6BE2Gi3Kj8GZ3Nx9ci8s",
  "key2": "5THsBYcYDQiyUXZiGoy7ERPqWL6mLsDyx4nwKXeeSrjvgTHha1YFGZa9sr8dwAE5mWbm9e6j1A2RC7yFeB3b1Kof",
  "key3": "62Qy61hAypVYJk5ckbYvVJj6iTkpZpe1wExGJ6VHha2ssk2K6jbDAL2gLYJN5g4fDnu8cy4Jxox1jThYrCuwWt1G",
  "key4": "3M8RsSdBMXgzAUif4xQym4kLi1beH81rZXPjTYMdjasiKy6cH2tagMtCz64xdYgEtPbGDCkoyHyWsBcByvDg3D6N",
  "key5": "3JSJe2htTgniskryMdXBW9S92sXhSGodMh2wWiNWCTns4djdTcm3fPjgkL3Z5xVCdzcXpD5ty3fqEyFyspGSpqCq",
  "key6": "4baiqFtdcH16mNgtPXHrgT3mDgA6V9Lxk7uzwgspPYLRp14Zzsdwovd1iz5oynpkjc9hugxGESrFvocrEEjuNZrz",
  "key7": "4Q6RfUbp82wh4Dc8eCAef6SarzrD3pmfCzdcd7wHDs8At1yriNUQKKaF7fLtP6LEWK1kdZM3zuK557qBHmJGgbcJ",
  "key8": "4HDUyCydmVCxXc1REx24BgERxzqpF2onBAqrzroxjYwGJHMzJ2G9VGJ4789DM5rzJ7EV2Cjzar3c6ojzRRat7kT2",
  "key9": "4UuwcEa2AEd2cZkhVhPrJfBAteUevL64svJhMWfit1jEEqY8FowFNY6gN1cRs5YuTWgmNYVMxqeoEzXFWA8frnKr",
  "key10": "F9ERrBadBgY6QEjCgX5JDcP1eQFq1M3YtTa8kompjNSr9gVeHBBfC4SWYVhndxVixnE7QKdQ5K1B5nEFYGH7STS",
  "key11": "3XEViiZQ1r55jEXYxKY6q7NM64V53den2jrjhJ5pqcDajJRPqz634LsEvKVHzw6cxo2ggCTLJDvtdSuhisxhQ4gH",
  "key12": "2G1pyfSd4grDyT3CnjXgQwjXFtNovDnBHtVpUAem6vvY1Zmw5ATk9R4VYMWjbSFv9chdBY28W1hufsvN9mDCQjKC",
  "key13": "27ir1N4CDoEN6to3FbyBo5CY9AYHUE9sWboWUWoUAFdpsg9i6bhEqYAdDfGuWfWHgjasMtEzLrdXDVssAhCG33t4",
  "key14": "6JVFHBmHA6agh97eS7Li6N4UR6twpJmqoXTN33kw9ngmXZ1xCD32mWaZE5UsuJ4mtuWpxfgwjhnWWxYBFKsA9x5",
  "key15": "4yVwDKGHmZ6nnPi5v6JUD9jNFXFffZtHxEDJfxvb4fCfwt36RebXAkpUPKnPrusZEjA4GFFYSY2aLbkJUgDHZJUn",
  "key16": "61goeR135SvQuE5VBa3BVTd3nDXRj8mSWKUdbp2k2a6LjArf3xxTjraSEHXZ6mnApUebNzSVzi3jrZbLUxSccqDC",
  "key17": "3g7cswpVdyBLyVemCvnXKNnBbuNteKYVS6YVTr2QZjchcJkQsxeSwm4PGGaU7rZduj4aBaTDbkjJEcicKY2Ymszz",
  "key18": "66anFd6vZwVqve1jiWKxQvK1XYNNkDpHeeVFqbeirwcEZ8jk8hYcF5inJimNFcmembcbXweN2AjsP2bWoGPqPEFD",
  "key19": "3skmtd7nWyLVBCxviqDqzigGL7RwXVLV8u6YMh7t4Wj7xsnHioMoBNtPQE2C2ZTXqMWFU6zQVKpW18VKxpZ46FsF",
  "key20": "KuKTryhjmEyABchsWpTujk5AXgDgmyyXgNmuowVSSaGHGcWqVHQNHwYqahSxVsP9BMqEuQd3Aux61Q8e2wLgWPf",
  "key21": "2HreWeaUTbmpmpx2XahtKWqhabWMNgwGE87MmdFHQHBytyvLkKEr8tTc3VxLEJDDEKkHuvnQ6yFFwTBwJMdf3bLc",
  "key22": "3RigzepH7c5WvNXzUo4iovxtTbVHbAhihKUZ2v8wMp77b35T1Robfhh7Q8U72CxGqWWjpRGTe33t6SR5sxja6XoP",
  "key23": "2tUW9UP7XuaSB5JjTNepun53cpUButyRjb6kPaibtdUbTzQRFUd13gDbQ2qu8jJydpkM8T26F51qDS1qEq3tn7Jv",
  "key24": "5Y9s2Lhask45ykWF1RHx8rKUXnWgi2q18naSu2kaVEEXeUwDz21TnoG3PfQ8SAXg3CfWnJTnfXLcN7GdtziDSb3o",
  "key25": "53mTAc5CuHvkY7j3d1m2SezJK7yFrBzBqnhrUQHbNtg1kEYh5kG5pqb8KHcq7RAhXSuY1kFySBXwBPpNYEqw7vU9",
  "key26": "4W9Tg3ZGejoseAhkG7xdV1erTy1yjFm5xtqJcenq3AjwTFsvSRnY6PDZtHSRe2uuy9ZrF3iqYJpzPAhZNRUGgSJw",
  "key27": "4Y8yA52xDshg5LhxoDoeT58eL1XWhTyyE2smZVZwJtm1QfvT7fJbo4hueYM8qfdZNWbHYKRUg9qo6wkH4Bh3KhkU",
  "key28": "3GP4iQpNvrycACv61qZB4Y8Go14yY661EBK4d7JCUbh2F1iCuVXGvub8UuuQt5dHv2e55TrGeeFZGrK6DCW8o1H5",
  "key29": "3GKEN2h9NJeE4pX3TuTU6HYuMG6keBP68n53UzZbFYKAb6pMifmUQx1pDeHs2AysLtLG4s1nvLVLUXoG3EVnuCPw",
  "key30": "5gV9WnUr8ueMoATjv8HcqN2J6GBNcvf1k5uua5QJqvGYuuymyBjpSViB5WfJos7b4FHowzLBsBvmMnxSUGG7tThZ",
  "key31": "83MjH3wnw6cxVwALTDRYLog8wv8rmGzPZMS8DsBwQrvoKMpfmRMtVVQDXGRyeogKJWA7Bwj1UAAXD6uWSLY9e6h",
  "key32": "DoXJuBDJg7M98z7mZBJmsQ3F4k4mzQz5xxsA1yMjZvkFhrK45tKPjseKvuuf785XkSfPuHrtE7ovH7ULxzmycNJ",
  "key33": "3aaEt4cF9NFSUcvZfFFhgR58zvUPuZZtZwSCtkuJ2CTHAqRGtF3YKMqYNeJsfr5zbeyFKcrCK1kieK7HAs3gixch",
  "key34": "5Krp8i6CC57QXoHj5Biczv1kVq5pz1tRzJ4Nu2Wkbi1V3nSZTmnz6Y2bZx4yEPVd5ysUAXXibHXfn2hQfQPPEoFK",
  "key35": "3tHABVbnfFZg9vT8dsMXCWa96d2Wqg9fWAkEz2rEFA3Bb6Xrj3APaTXfWnEruvBSYFho7WjcwTMayPKyqthGcaxL",
  "key36": "5TwYNkJydQYRTxi6CdEGKbLvX7tQ2vSpvoTM3z9NNPjxbGvtcQNMH22jkH2YyqNaKvZr35mhEV2EM9a5AuZ7rqTy",
  "key37": "4WhKiKZW5xfK5BrJ3gYj4UuLaKvAYvM1yZiH2Xvif5Bx8daD7XFCZEy16yGuK9so93YEpu9b6aFBPB2hcki1QsvM",
  "key38": "4AmbNB3SkEKkKidafRvMXKqbkZZpEhREjvuJTzKzqsBmqgsRmBJ1PzSeg6VDp7KmmYrhL2EDqLibLBS5rW1YuBkv",
  "key39": "5mj37rSTqPwxPMAZsx3ktUPDeQw6WRpyep5TdwahvJVNohma6CZ5ixsyT3ddQkiNAcDPEQUb7qxYmqtpy8Svn3Bc",
  "key40": "3HuxXQWAbRve93SqmfkYnWt8Wc3JG7AvvzLc3z64vTcA24kZnkafqmhazV5qDNeo3xTHoYAkz1Ea1TuMgWYwCvbD",
  "key41": "62jVEFTvxks91PyXmsqYwPScdqgDsqggusuk1gNm6XQ3NNreD9jv6XM8E35yGkmsdeiWu5ztEAnRK4YRZipFEBmL",
  "key42": "3MeUaypKgC6mnEX7Jf2povysxFCCbV8Xhk9VNaY7aWsitmC5YEa7tXJJVDgVvzSpxQbz3VJnAwb28LdTKhV85zG7",
  "key43": "5uXZC7dWBactBT6Rj6stjQZoDdTVhrPYkpokK6XtTuD4oBS4vFxGX1tZHGd9n3xii6RhMNbunHFsVom4zxhE4dkc",
  "key44": "5P7jto29dciXub8E9Mjb37qyEFeypQAKzKMhiDT3bXZpqDrXvCVXiycT27GnkA4dYPTCMcwUH4zkqfS5YGabZwLC",
  "key45": "3JEzgyDCtH5FyYRRCbLQxzUum8NgizbTfxfHaMz6SowZfcrCMw3j4N1LFoFVqdEr3KwaGxnruHjFSik1B7bdk6gS",
  "key46": "2WwTbrBPREw3Zu7cz6ozVtQxVhuPi6N3poE5icbzLFk2sgR6D1VvPzdRBVYSpWD4H7mYnHAYdcRcmzhGWyH3CX2i",
  "key47": "EQVPBnk3fQZ6vaVGrmwFozUKf7b5obDDcxxR5oRCjPJJkgdRftbmaCMyqfD9c7HBypdZPtU9UAvjjttGYBHYiyN"
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
