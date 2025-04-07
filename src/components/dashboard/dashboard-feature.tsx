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
    "3NjhNsj38YxrmchWNwtGWiNdQP3MJhoJeVZoyCKWfdwMmQC9CgpWaC6jKpGDqMyAAnWNQ9kP2mHsefejmtzCiWMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZkH9p6tiEZ8HjDGmptHEyjnWnwpF5GYr2qZYfRRQ4rEdNdKB9puUpESSSNP8NiDDoinicP71WuGGjCSXhcsRT3",
  "key1": "vwoL49agvZ2Yfq4AY4RF4TmnENBxKfSB2LBT8ZfoTffqZPVoH9X4LxfGGhrqbmpwLn2w1j321i4f94NqdKHjxAa",
  "key2": "hGDbp9ZbQhRG85XC7x4rXzBvwtrzjB7mr7MbtGLiQBjm8oKYkpAV6Fsc7D6t4UZmxoG7Grrd5eoodaTbwuA7aBE",
  "key3": "51beY6F6rjSGUCqtDwAWPSB7pKCz2B1nkZAjp444jfDPnPD8V1Qs1LTSD8qrLh7xDwKVPB5onHrUC73XD2G6uVaq",
  "key4": "2HMGMKcFBGH3VqvPVouLgK9woEGy1jMMG9AFypEshU73xdMhCDfr22AoSTtnQneRNttehHW99h94j48Yp2pjpmA5",
  "key5": "5kBnPtj5xVVJEi91Z6QMs16e1Qq22e1MNVDVHDQgyqtJ65YazaN6Qm9Zcf226dRkSgaWyuowrL9c37zo5jTdEnQU",
  "key6": "5SbWJfZTxhGYSCAa5wRwhus9xHkPz9LmLNjwBrnsLRbTaWgxEToNkHSMtz7EpSg1gTbMnzt4xeSLPm2KpV3CBTBi",
  "key7": "2nUnHAYyFZCJ88hK2guLZ2TrnB4BjgfinHgqkETrBj7QkcQoDk7ERcA4GzmWxLS8e2RY5xkupzY5xcSdgjrXaVyd",
  "key8": "4UrmRQSxvwZ3eyAJrMS6aDvmyhE6JMBRXvZ2QK5DN49Tn2whbrmbPPuhv19QTVh3Ac13AeKbZhioDFJAcpMA2CgW",
  "key9": "4HEx1cm12SWUCoY8aszJTtaSu9LvYqivw9AskLqWAbrovV2fYxdnE5U5G4iqyYGxg1LK67Jd4HqmUNt6haG981qt",
  "key10": "63QEH7CeuTN98DQcnmXGcjqP151jLtStt8ik3pzBNWN8UzMSa18JxhoPmdSbFsJpCdCLCexgeht6bJ6N67itvrbU",
  "key11": "iDUsggqbQTFK3PSfVkp7yak8KFck89Rjqt92umZRQ2QHqWer3Lx2iBycEDr2d39iyiys1bqnsYFRXGoRr3sxXZd",
  "key12": "4KLnxrPHPK8qAAvGqmSjA4y43bwmfK4RanLDZyi5JYeNfhBivA77KTnHEacB3urBPyb56PRzUvs8gv2bnWeTBZ8W",
  "key13": "5YgfhKr6V4Ru5evbLovAfDwqjzPja1Ec63ziGkuZyc1EeSCv35MBfJuZHue8T3eQpte3raaiHSxT6v9JveHCSusX",
  "key14": "dsQYjAcjjhmcqwxjswK5A61UEMbFbp4Q4cWBnmxq26E2vQgRuHZkJkY2pHkhqa5ycHFqaRuCjiVhyZ9zfq3i1S1",
  "key15": "3P8uMQgZ9pvFQeFxYejbWqWfGj4oqRamyrLoB9hS7dCzF5d7BEgGjNQNC6ZoEhWyA9tmvwjaJ5B113FPsTtPmoRs",
  "key16": "2z8J45ZFe79SdeUjJKgQv4KLagExTi11k2fS85rRDyb8dABBU8qs6oNh83gAEvKwt5FCeRTGBtWkEms2gCZ2Xddd",
  "key17": "3cF1d3sA9iMytg17SDayZ3BRCrws3UuFQN8ZMXYjBSfQUCo5F1C81uCwHs6uFTxcCg57vrm8f4YDseACtaVbRohh",
  "key18": "5Qh81s499RLYSAyBiby8e4dxyfE81HCf97Zkqup3broX59ezUUMWg9yPzcYDiR8JSFu2CB34K2C9XpHpy4nvNos7",
  "key19": "2kRyDcq8as5FgkRD3eCbS6c12xNEVq4RfTzYp5F2qhohtbt4Q9Q5njYAqLxNkUKsFs4Wb4AqJQJjvYC43q2TXwNL",
  "key20": "5x2DDEMpqofgB3QDtAwVvykQ7G53H8ynsFRkLZtEGT4Pr3b5ix5JjJsDiH2pb3gj4L3J8sn35h2jQMiuHH6QypKR",
  "key21": "vaHm1ZuHqoAxxiF9n9vTBJy6eMZyNfE8pZ8MB1mATxejrbmQqhVSjyxm4t3QvvSvgnWyjzzvG2Z5ZY41gQgBWT4",
  "key22": "5GF948yTRRwf1RCxQadZiH1WXWDHdgjBeJG99ibwvxoREzH6AGMrKpAG5aofmTMBHouQKQiprBFnZSw5qRSQVkJs",
  "key23": "2QvNzNLrU8P6c4Yq4bvdPTsGQuYoVdMULEunWhEUyuKAw94a1kpiCnWLcP7rF6yZshNcXkC4HLJsUZYNPEAdoDQ7",
  "key24": "5QeqdWcNyaGsAUpzibJhAfB26RsNbvYm8F6UCn6rhmBhDetMzLUCN1Ak3tgS3FU33V6WCgvTKbc9oayML5HnP59t",
  "key25": "4oA89yNos42cq3RLBTUsBEacNG4yKTkE3z95nqmwuTziyJkZ6omhLviH4rU2roPKX6sc5RbZ3N8GBJNad9raT27e",
  "key26": "5anQff6s3o9NsGYDufsz9gyE7YHasFk6Mhfdiu6fdSNwfLNQ9d1A7cUhLFGxnA99AqJiND54jvQLYCVt6ndhw7vn",
  "key27": "4Sgz4FL5EvVfcyM42ST8UeiSVQuJL4wAeG3TnKqwyNW797WPBFg8sWEPKNkvM9ZdgCvYLVnZC2PAwLxAMApYPETT",
  "key28": "5oCqoRus8hDzxtaCa2aYkws8h9SRp1zNwbEh3stS2hj4ALi9tVixi6kZok9J3vz5aCEYRQBRLs3cnotgi9wZ51hs",
  "key29": "47b7deeE246m24bFUMojUw2ANuANud3dyMBwoCJcfNJmkyHpF5ZQGisnZMhfomRj4y8omnbSmc84gikSEYSeF7JW",
  "key30": "2rWFymzAc5nTZSRwMEDanQK7kXrekEtGpBZN66DW2nigPCp68gdijz9hE7tXDgcUXGU4GuUDkrspuuJwyo5AFMxv",
  "key31": "5BkaC5wmf2HWuA4MsMsD8eXvXfbfaCQdkafw11f8PwiCVr7bpi4i4JhFuhwxebR3k9oYUy9gWxvARa6L2kShywzK",
  "key32": "4GnwckFV2MBuwVExFjoNrztKTLtgHBoQLJizNKNTAZBJk7mnDtQxQQEPCJ1rTTwqCwib8p7VhTzxCsTDDGAH1oKh",
  "key33": "5LcmVp26ndvq6Ygp1kQ8RTX55sW6XjNCWqhkj1WFP7R967AyLzznmLPH8cBLdwkrrmpZWBunhJXoh92qmTetk9d7",
  "key34": "FLTGbP4KpKxcBooC9XdyCjRpVb7iFvQzTYrWbKhC2jc8qaxpv3LxB1J7oXew1wnm4wbV35tQ3BZQyVEC7Zc6uGY",
  "key35": "dAJEKrauC2yWjUeawkpvFgzn77mGb5pNgvzdSNKrdwzK6Z1L2aGCEnJbhFRhz9QxtW5wjQwe5V4yuJyNmJiKpiZ",
  "key36": "2aTjKwcW5SviVJSuaDsq4yic5uHRuraWfAZ2eZjuomZLwQZMwqr2Kk2fBB4un42Ve1uTvB9A4jHg1eiBDaXhH3wV",
  "key37": "2YEvzJj8pVLXrybkmQnbg5GdjURBJVte3tP1Q49Asja16vmQ8Re7Z3fT4rNvSYSJkBaJgq78Qetb8P9P2Zj62XWD",
  "key38": "2CiMmHYSjU9Qmdzvhn3o2VDtkfeEpQuF52wga8pgKq3VqXF4weRwi62Bu6vc5DwG8QvRCVAaS8DbZcKshEBz9TMZ",
  "key39": "2HRE3XddKn37Z1pxjtGCEtsBDWKEitRm7cmFLV3niSrd7oDuE8PwdSLdaQMkJ97LaHF7sGrCGCRNtYuJwiXyGBN2",
  "key40": "RbwdS2k9bpdMZWigAL2h42cQoVLsZ3gpBybXNcFBYKysJDFzchWwr267hXc936X1Njvhhdg8y9jJvnb9rMvSvZQ",
  "key41": "5V9KiyZyznVMP7jkpHJJ6eZNqjUZ5Jbpbvh1jEjbRgxAbB5deFRdmayqFCiWGJSAyTMZS73877P8hGLuaQFJy6qo",
  "key42": "3fNa5N7L3rayJsBoWbeUqrJZcE3C8H1tTZUcEvzrgPc9iz9WHXsLqJ2PNNq4nuFeJY2HAundtq7yqPc9jAhV6t8P",
  "key43": "5YKW45yeFXm5ymcupj5MHP8fGHguzLcGvLuatBnZ8phFe8KMTauRtdJDA6XQbCUgT5UadZLnni6ETmweF9RYerWY",
  "key44": "3WiiQh9FojUTUBUkQbFTShbYpJZydJT63zQRr35GGnJxNfrjD1Q5txgqLkL51178s2co6LttUy5CfWp1vK4vLRdr",
  "key45": "47D7qdQg4Fk3YU1jiN7w2NBP5tFSA7mDf1xiSAboBaypugGBHdS6AXWGZhNV6ojeqGnFLHkuMw35tEQqSthLM2wB",
  "key46": "29JGJvfZjRXqzE8ANwuCFUPKBpSnmPdqWGeL8mr5ijdwCCzM92sx2p86A7eLxaF8RbM4gyqRS7UhDeqeNBvsyy5v",
  "key47": "2EkhM2JzSKi94qaS7cn7vXJkYenNiDMQTuBbpQrBwKvYxtU5M6LthU6bKKi9865SKtHSRppkuJk3P7KbkeyW9wkp"
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
