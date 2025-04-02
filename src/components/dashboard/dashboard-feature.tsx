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
    "2mbYRc9hZE83Vfj74cUsyqdJkeRE8Do5NQ3eFBwQw1xAm2gB9w2TkyMJZBazNbW2Kucr4aa8kNerVTP7MzsfT4Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6uquVk247np2hgS2JT2AXHsYtq9ajm8pq6bmn9ZAZN6LptULU5gMAjqa3GK85zthwVeVVHJU58HKstgdudUJRP",
  "key1": "2Pr42u989vxWYpvP4r2noBPUnxYdR8ehzGsw6wiDPm7kXZpV6VctTTEBg9C3hwRL5p4Qb1rZX7258a5kuv5iHMte",
  "key2": "2FkSsRCfkqVwQWAF2KTuqaLyQ9poqRcUi3kRSEDtvMcDkBPGaMkU8dQYtLWgeokyjxRpt7gz8V9JMzh8RBDjM6Kd",
  "key3": "xK3RxgLxouhgD1NFqERB5ui6wNGmHDHT2KNhGpapB7v3JtDgnfSgY51HBojDXCGvWB2JenrApvXkyvT5zZ3esNQ",
  "key4": "58ucXNY3wMSj9rFS7bWhtj39xqbsiubzGfo1T3VbgeNj1gBYVmhM7nJgM3ADSbbYwjtkbCz8mC2x4VSAQirzraGq",
  "key5": "kk8PQ4pBMouD3vnV6KDAaKgcNfyBZYQsmGMB7A5jUNrURnYWqSx2pBctdmhPFQAJFWZ9SPgL5ue53yoWyVcPuRM",
  "key6": "3DgRKepjMhApBFuCrarmXBxyvqCikN8ZW9BtTmdDGAfZrZcf48CBQTQRfnYmKeL8s5RmouBeXWYa4qfi63vWz8xi",
  "key7": "4vZdT1NLZz8GY3f7vfCGptVRDX3soVi8VhNjT6zcd2iYKtDcWsMo15mDUrpKfuCVp5WPZ1G24UCT7uB4okzqNqTB",
  "key8": "5uAZnFEXgFp5tUwZBqrA5LdkdV7wb4rnuKjViVgSPeDYydKyYSkhocdiWUC1Y5q45QGbfxGq1fjaaVxLpiESXf33",
  "key9": "4m6psSECaN19iBYgC77E6NqDi6cgEhsViDFzxFM6WaA1dkGczejTdLnZAnH1wjLrq75knHEQWSLApZecWvMU2qcS",
  "key10": "4zDcCxui8dr58UWFVh4QrBo1yj35EEQx3E3EFiy3NyjyVfYiWjwoxZ3aqWdfnd7xv2WZUcRZS2tfytusDWm8FaPy",
  "key11": "3swK9UG6nH4mic6UxW6KznEPck3iTjx3P4yskRAQNEHKviWxaGCUAT8gTKXp4ANcX5UN6jpvadsHdELVK9GKf193",
  "key12": "43Te6FsScxueoVWRGtwyRjxjnyAHVVawCUtVX5QK6ykjxv25xBigZc9u7AKRG5YqUt1dnMujwiMGSH6aRy47szD1",
  "key13": "cXLK3tUU3UGxipujmWY8kBoE4PdynkyZJEr5HJ7cmQEkZv3GWW5cNnmBEgcCf22g5rVSYYVZi9L2RWsTTZvFLPd",
  "key14": "2prZRMSC2zLVV5nWekp2fARSKpd7HYMwvNpW4gK4HoT3xpLNHn8b1d1Z5RuZrV8rYkMFdkRRcf9a66vHYjsYyr27",
  "key15": "3WXTfjWYJdEtbb6KTNVZQKupwEc6xw2VxGzA22xoqZFY11X75y5TN1XCLcVb2BjjvNdnB96HhhCgUWUKHtvKW3zS",
  "key16": "52D6Z8Z2QBbxxHat1Vz1P5bJyoKqUBMHG65m71rgsuKRg5XhGDGmCwhUS2tSgFdmWzACGz5g5ZQpMey9NruZMPTE",
  "key17": "5fwaN2LQLVZn5QvYSsVqR7ymzMBTGTeT5DD4uNaeHJLv77K7BSXaWeZBzCNKS49NYUK6m3NBRGLyaAaAmF18Q7F8",
  "key18": "9zaXkYHwEmuEdnMuNJ7mF3HzdWHi2zuSLetRB7N5bzDJFhC5UC7uPPdnkPtX31VqjK2dyLb6GJYpMK77gPFEXLQ",
  "key19": "5Bhb4w4geDneiZczkWKFstmKNUyiKbHkS8bBANPRonzdXh911yxLei9PHhPBfpTSRwdTZh8UzerVj6bCmLow4ed5",
  "key20": "3KFfu7W9bm2BUFQ429KannDb6GmEaJwqoA4A2QMBsd9W6ADX5zczboBMuEKsxcFQmWTZk4HkBJhX6pWk8xBC3md7",
  "key21": "2jyBnMfiWeXppnxA9gKvJFtBxUacyRFwccfziz2CnGyCK22Gp4rhPSushz4zRqqcfopuu1d5D8VN1q96BmQMiTyh",
  "key22": "TM7xP2iFuf6gX3DzhT3zjZD1j1uKLXWnpkznSTKkXXz1U7B4xs2eL7KrzsNp9uBPZaqD8ntWXfQvWtDh8pKDf5b",
  "key23": "4Jo9wKVWQktcDxikcbDZsWqpMV4tTx3PGGKg113Z8T6B1yNyqDjZMZaw1bwX3HxXQn3d34Hza7zszsrjqtJtG6eD",
  "key24": "2c5C4nCJbL3HBunnzfi1vDQezjncqXd1m6qnNfRtwT25Ua58jn4uPcBfdLpwN1EUFSqFhHiHoGNFS2iQnSBuJgKK",
  "key25": "2rruiNnn2WqucNyoczjTKdMw5TGhoxoW24ifAuLKArTtG75TkZGCr1mT3LSsuiTAkUvXV5kt17RLxXTVP5Cn7V4C",
  "key26": "XDt762q7W6Wf5apDc1j3vdWkbYgkw52a1bw19UJZXmfk9DJLxejcm2iLgxaz89ftjQdGWuuJ1ubHVUYFj72kv3F",
  "key27": "2NoCzQSqcNmPURASYxebx7HCEBjbaNUgNJJbdMAafgEVEo3BepiU3fPoYstH4USYWqgM2buXRTHfo1sHhMeBxfuq",
  "key28": "5K82oT28wwd2JELTf723fcH1U3FbeZYZ5ghWdQakJY1KDpr2Mx68jQmbDmwZo9LRkybdoJs9hvFn38FjjTP92spM",
  "key29": "MyUFLk37S3Ji16z2pQPbwssVLrQp6g6sPpcnRySfXfHo6nRzj7qmDmw7rrHq1KZMeMmGgtVZFhsAJrE393JVchp",
  "key30": "5qSej9FSNXogrqe7zWkwFpS6b8bebe4bfE4R1u9G5k9sQRPo88ktVWjBvsazdeom6diKXaEYuab838DL1LNWZAhX",
  "key31": "4ipziKwdajrmcR7N1RUd4fMKf5tvGtx8tB2TetyEo7GdcCLkNMrAUPJKVa4N44p2xN3jcimgWGgpqwwai8kwiJLA",
  "key32": "3pajn5ZnBVkidzMnxGL55X5KxutRJXeYKakxHgwNAEJsgpJjMT6DT4V6GTMgkf5zXPHxV2KQiKmGWefb2WpkVxhm",
  "key33": "zPs1YEBAP5U9apYodecqqFm8P6My9dehLgyuLoHLpFgetNRXefgVLZ7WptCTKBNh6RtqRW4yNddg3jJJ5m6xCri",
  "key34": "RwfYCWqqcMS8jUHwA5Z7EbPuF2PpNXFoh5rD2rpkcfKRm4fzDtrabW7oVQNrs8nW5aHmwCYjNssD1THyDeGHiEv",
  "key35": "7uZ99Z6pfrRZRBtX9EmeLUuE7HzsQgWa3A7hA8d1jMXPoeYyBQZdwCFWKxJeCqnK5aipJbTTpMyahodh39DjzFZ",
  "key36": "2xHUMLfvCj6ogNxYZymLFCQub8v1p8zN7GyKfpsv88bMVrYW2KM3idATh1anUTfptaJRJdRZMwZ4aebU3DntSwjf",
  "key37": "5ndWZhhvUNd1avaFm4BoKF7CZNwjsHPLPytp2j2YQRCrJR2xfrR2PTJEFH6rQt8aAs2TTe3nhQBD2tDPj95HKnSU",
  "key38": "3oozL3bEshojdvnzsgTaqWwpUiAfV2Jp9fuzx3XqskdbZAvbFv74YBD5BCrmCLm2ihDStgwQYzHDcoV1NEYc2c8Q",
  "key39": "2GhhsQ54ZsP2GPeo3fNEY5VFppV5SBSU1zKAv5g7Wa39otzD644RxBuFyxHHvwxLcoeWZBZNCYsFRtXaNuqChYCN",
  "key40": "3pFgzHFmJccmZ9EbJHgBagm68CkQYb5MvNysG9NdLNotWUDHWqdQPhFwcKyzQqt7vBTrFd4Sv38GjNkfVbgtfDHq",
  "key41": "3Lsr33KqvMKwnLEwezacViFfwiRPsjK8dhXksikn4Dm2Njaip5RScUHMtU37rsaaW2C41NATj1wVqmXdRJg5QjZM",
  "key42": "3bV8spUJaKnQjWMGXCGnAmUPxLS6i45CwqDnGzXJLWyLBChXMi8SsDp8at6aRSvXXPQzDVwqRjztgRdomGWBgtK2",
  "key43": "3NfSKp6Ek2Xico5YEBsg54amEz6kDdXDjpiY65xqZDGc4snXhKnC3g1HYrEFaEeugg7449nkuJoDA6zRokcQ2vom",
  "key44": "zGaGbJ9HwQZUuMR2QJvYhj4HASN1rvTsizdgbBkT14haNX2EphNbFHZPEzDHZXaAnShDbGCy2Dr4ZQbfimNV5Yh",
  "key45": "54SBtf3AeAe4Wo1pXExEcpiZf9vY2nbpVrJYsxZHdq52L75E8YovHDdfM4hqXgeu9KJKJAEgb8vzJQE66PaBCVzy",
  "key46": "3zczstfNm6J8Ho4P9PbfxTnrerq4BNGvygUFMzt6DXbDASvAciaaSXEDU8PyRiJDHVCSogEkrUVDqhpy9j6RzdKT",
  "key47": "fF6ycHf4jo7jNE2H4JpuhgmZq3R9d3NMYazuK9vcdhYwMwjciDEjYb1c4HrTDyZ6trqx91Bkf2Ct73gc4qb6NBS",
  "key48": "3teeAqq9WoT7jtSdRJx82AeCNJDg5xhRASPSykQJD87dumjFAxjkiceyN5yQQG2Dzf9PciV2tfWFVeF9HJybcERs",
  "key49": "3Kn26CgB1jXzvD4GPFLkRfUJxHtBrsQqBJXuDjQW1Q7fUFZqQ3LdHYG5iAtU9Sr4Wym2Pk4hjJfy9c1tJEoNB3Uk"
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
