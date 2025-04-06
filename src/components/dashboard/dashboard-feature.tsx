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
    "xkBQwRepRKnu1EGfhMmipVJLeNGeaZDuVwaC88cWerHt2tWufcUzRrrmAqC9mTHZ4cCKauaHyYmpqASHuatXoWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8i3oYrqPbXw5kdGo3itKYEwUjvDvAmYK4FEubJujWj9LYTBvBsBkLVhrvnQQWicn2nBKgBPKdxNwxFs3T8tf8Nk",
  "key1": "4vifS85hNkgoH4KpQaQZFS687hTPk8mMaFB72DuqJYgPGCxSYPWvwMkGwufXPFSY7APQoGTKfrmJBmiRfeLbucTF",
  "key2": "38mbn7bLkirTYerNg2awW6cUaPv9ToAdymty3Z3NB7g5Aj8eXAMb5Pq82eVF9WyDhXfqtxG9aXWwY7LrnGmzUu6e",
  "key3": "2UtjM8P7LTT2Y939naBQwn4zoECVrPLr1s5X9Ef9ga9aJ6ZmshKWgdKCrvMGQc6MTy1qjMEe9fC63RSwHu7xJmN5",
  "key4": "59HeYPHVi32cdgvXnK3A6jLK1ZFE9xZfNrwJFajNnaRLRJ5mAnXamyay2QzWyNEY494cxbgUdob9C9jw8SGVA8qd",
  "key5": "3svtgV9PK6f2jLrqZAgDu12q1Yon8hEHnHBNCKqsxEyVdHjFax9bWWPExQW1BouSGHxWCXtgYHp4DW2WnyWew2M1",
  "key6": "2Ytn8bgjVnKSHP3nZy8sDgDbsmwtd5S7DuJm1Vu6bQsUwSx8DwQkGQp3ETa8sGjnXwAogZg73dKe7uPcHLByzcwE",
  "key7": "4mt6w5TGyHSCKkkmjmHvij48VZQdrNa3HwuwfpDWcirxD4t2dftvxTBZoDEXsMP8zXMsWSKb7Z6nF1A5T1621r6g",
  "key8": "47NUMQNDDGS6tm8ZbX1yW2Y3BPqfH6yfQw1NKuMAx27hoEB2aTXDmtTwJVJbk1wcf3naHdxkW73Wb73jN5aTh61Z",
  "key9": "2VSiRsCiadZ6j4pn5eMaznSNu5tvLgWDWgq9hxCWR27Rd576LgETPfN8gjzWtUZqBjAq23ZcviNAsyDtwsmBTZf3",
  "key10": "3HZheGg6R4SRMwb2FAyYZsSbmy6BqDCeZE9NGobLmupheQHctnDM6kHoZpoggt5CtHNcP243inGUsGmGEciRGyPo",
  "key11": "4WMgjnjs1poJ9kSUkD2JeA5Am6A2EpcpB9LULwK9jpRZNKyUX6mUn7CGq2cUkia4JTVq1EpTE7U5aNuHAvmT1kbA",
  "key12": "2uy4iuhGc7tSXGYPWWEhqxXVwjwq9JcgwQj4bsrjuwpa9pkkmRq3WLJMtfmGzB3dr1wnuLc8Y91yMDhqKNckMmHn",
  "key13": "54Gmu2cYySXuyXNa2qJiM3M2bPusG8LvFg54vrL4oYpCP9GHP9iq5BNtktncdXpMMSgaFvc4yrXDayrkb71anLyU",
  "key14": "29tB3kKhVNYbrf8whu1Y9mWtwXoXGMRWygkpCMhPpes3FWWoZYZYqzpQ3gVViWzA2rhtz99B8uy2m4LQ1Ze2PsqY",
  "key15": "35smp5UgE8g88jAU3jhAmQvb1UhYFCbGNgptuD5uE2VTwEHuo8zYFaST78uKMKtMZ5z3Mn9GJpEh9AX43UvkhiUv",
  "key16": "5LvmEYDK4WteimMZM2UFCTUfLm7mSwjbZqQKsw6b3ohr1JrpxxfVkjKrRyfjiszedwbJn8gkKYmmmzUfxqPLr3oC",
  "key17": "48RXADXoBiu8CADySxjVTpZ85dW5qGi59ehDBrjfgfL6mrU7rRijUSxBSNhmsa5K5ik33SLjG2GWPUV54JvGWhZf",
  "key18": "2aWuY42irxN8LPFmguPbZ5m4kTnj23AVgVUFASNcBn3Fg5V9jcHRQuqW5UiM1F86MvK1Dcg2zsn5x5GUQ5UYftEw",
  "key19": "3RjBLCkpuHsyxvS9EbJjZ5fRNt24tc6vJCZUNxfGcCt9Az9SaRTFy1cM79KJpDQoudS5Xs1Kum8CfhyHASJS9KLL",
  "key20": "5pkdQRNww7zCxSJfKgvaqkGAZp5hvEGXNTRU1BgzMVJvRSPuMTmpxdCV76ALvN9KsCTPySi92QEQck4jMkiYpUbM",
  "key21": "5z25wJweoT1fR1ByLYjNeSDrC3mBvoYaMFSsZ2yJygHd7drPvJzqmCQtUoc9EbddE9ND4dy2J77xEhVNBtixjtve",
  "key22": "5n5KDpara3bcxSY8WAii7rULZe8nkFYCChw7r8qPJzyD5oTDPWTwY1XPQMfXA7BCusrR1hQS1ta4rQohNnpA6LXS",
  "key23": "38aDpDRvaQVxQ5UsATKGtkwsEgTVVEryazLhUXxw3k4EJVuch3T4mbvuuRC8jRMEkf5Kf6Y1t3h9KDMDBHaiMcGc",
  "key24": "hqXycA1CQenLzdMUK52XvSQN3RsgRCRrvsZCVq4duvzmTeN5BVx9Rtp9eUiomqUDvAXNqWy2RDNKoTmhonjyXdz",
  "key25": "3QUnS7rvurT94etUgEQWgW24VmmSKsAYzZnDCTZ1DJGGzSVTny1KitVnXee8hbfNArPf9ZTPjKtse8skN5oqMHqd",
  "key26": "Cc7gkjDbBumdiFxkL3zAPb9RtMbtxbo5adeEJPs2vNf8ktdzwqwGVv91HEvW2reCAK9BgaoNLiUBKxHiQjsiMpK",
  "key27": "4N4vngDZnE86cHwe4x58qVHdncnJq7KbaG224wNLhPSKMua25yBhNEV9fvFzm89YKk3hF4iHaaY5chQpJDFtJv8H",
  "key28": "JMF5b9xXLw85Q2psG3m86yjabKJCdZaWoMDqiACg7B6pq2FkogFjJCD6oZCiVJCoFghxvtHgHb1CzhLBX9LKabX",
  "key29": "44jyQp8jEufKCRpLFHQqpCc3kcry5KDiWXLgGmUbeTVyzxWo4T1sSTTqWH63VYRtVDM1CxX6k345tjvwLM7sz7Zn",
  "key30": "392F6eKqkWiLohYvyfoFParje1Ni4uEiYQGk1cfoN2AgCGojH5Bfa2Ud6hENcc8s54bTZcLdmhzqmbe3anY43bif",
  "key31": "29jmeRrkyJkQa1U9F5BBHBTBSPa27sTMwr6g2JAzHET5xaUPS53CkxzYoNjHDyLtV8YxrNbydrTfaadKR8X2RRTQ",
  "key32": "3RYqLHBYLs6wtzqk2N9rpg393wgzzMutFrxQu4QB4r7m6ArdAC3S9YQTeaEGiSgyn5Neb6bBSCggzg2eBCqpvpBr",
  "key33": "2hpCejiTqBehUujtxph6PcmetdfNWeZgvdiSAma73bShj9Sk1QCytFPDBpiGXQn5kUqFq1YpM3JXy7CZujFfxfTh",
  "key34": "2yiEok4o1aBktebYFASKx5nx8kp7GsvZKLs2nPRbNnVshHbjGRHNhtWvDicQze7NHYSXS6GV6LfPWx4o9xFGRkcx",
  "key35": "3zds6pa4zeSXChdRzP8tVRa4v6VsoNTWsJCCEAg3sQ3VyHtNAdyjZjaBo1dp6cZ3zneNpPfRpHuegESPg4pWGKTg",
  "key36": "5TFpxmuKJfRktRukEuqMbjSYdKsfeUHsTr5g19fKH3xr4X4YZdDBAQZeT3WQjpN9Q7JNu8xYbkD28WpTEdQRix3",
  "key37": "2n8ihyJrBTHNym1Gr5RMxk256jSpHHQqsHqneNsWGSYQjm8DjN4HaG1nLtqEpQ77yuqVxLHYem3vDLxQ1euDyTDH",
  "key38": "aRxPVgDR4BJStwu518DRy2Q18W2omEBnSErexRYwzGDgM1puZBivaiEJiQsDvwSU677jkuRsuYBr5x3DcdSsQV5",
  "key39": "4aahX2YurzCmXykpKWz57mSYEYjoRZdzLpbuCzvDRV3k5CSMPv1NqMq3adVGPDAP122VPrhCgZexN1f9rhqGm1ka",
  "key40": "BTiYnciYQPrwxeJAERQGDWj3sPEnkWDai1Q86AXZiEj3C5y5r1HdZ5VwU54ASKw31S8fYL7ndYGFm7kNJyonLvp",
  "key41": "5VraS2K2o7PSJ4tmnu38XsgyEaG6dpHRuVjWLbibtbSVzfsEDurzksFhhp6CcBQG95QjcpHPfR1v6GLhLnebQ8nd",
  "key42": "3D7C3hDCBL2RiAUGoqjxFxYzza97WpkmxCdQoCKcEaw2ZfdgDzNkTYyXgaf7mkiJd9TSW22jyr1DADaadcyBxMnD",
  "key43": "3HCPZzNzPja64SbhhDGWBULRNG47aRK8egxmKSr85iZzgqE4sNRY6hZJsVmoMt72t8AMZW38FjeVzE6JFAqdifYk"
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
