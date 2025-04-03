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
    "BEWEgi92aYtPahvj7vvUQYsv9B3qDq2Z1x5gsGvsFbLkJWfjyxtpVtHdpf7S11AaC1jhX8Aixj6H4FtrMCpNE5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDvKaCAAf5b2uyFytsz4BFSY6wFzdrsmq3E2saLLg19WCW7jDYx1ZKAsTVpQM12gVXYjXcT63PNNMrAbgUN2J2k",
  "key1": "JrwbiVMuyVNB3fMmc8Lafgm8MHnPfNv6P7Krf2Q8jY3j1JApbie6Pff3UCLUAmGSo1xVuVMK9LbWakLuC3b9VMy",
  "key2": "3ShJ1r55hbWLLJttM93VDcQM9d9CyeStMqFqNv1weDPJHZ5w8rvm8zX1R5co9HXVtciX4VuHtXxLTGB2VQiEunMX",
  "key3": "BHdsDsZkvaDzHbAh3n2MHRBLuSacsx3ZPyUwwh4nibi88xDjkpMAp7DAtwfFPjdeuMfDpbdAaFMjxV1Xi5vQZs6",
  "key4": "3EgfL4nFFfbcok4ztnj51KCfZVbhFV6HEyiS2QYhWEu3ccsTxRBuvrsQYWT3ZVUNeLZGxzAWxjS2gD2Ycz6BPonY",
  "key5": "27Q4GQUZz71jSabugQ3Rq7kFCEMCHaqryFDendTqcjWuGTnKnGbp8onhxcaR6xu4FUuVmmqMNe7WRrxupEvs9uSV",
  "key6": "5CT5huKaHvNhb9Lqj1AL5rg5T1VAUPpjZndwVJcANJMxjz9ddN9uC6ZJzayWZexJQvbSAmxptwRWRqr9aAGdCqri",
  "key7": "2YrtT9ip7r1TkZmaeETnSGrBk9Lp1qVbeiYR5JMcHZFiJu99wbgmwGHEHnzWpXQhMpo26eoztebo73Gc3EgwJRUB",
  "key8": "4WhaXSkTaoihd7EGGtSAXNuVwV5WYXu36HdjvAfoPjfJkTbuN2TNcxcfwFXyMPZm6vtoWQwbAn89nyk6KLDfv5FW",
  "key9": "2ED65HRY9Q2v85PzpKnivUaryjhw7oWgCaSuJbA7uuZ1epAfngyKyrCULyfqkorqbrNQdcrqK4xEVN7YkmB6D8eU",
  "key10": "5mw5i6r444oKCNqXkkHBr2BaXKB4xN3uTghtkSSSjBsVb67cs76mvU2nhLxMkunx6FYfeZeKJjt2jbTzVD1rNAnX",
  "key11": "56U9TuPBZ7J1fKV9xyMNoNRZ1xbNSk6QNdhAtV1BWpY1RDafLGw81PA1GBp8TB1TcKckAJcJGgzqydJJYreBBBrP",
  "key12": "5uzenTi5iyD9dZwQp3Ab8o7dVtdgXXWWvwRBC6JvFYaAfMBhZPnErPCjZ88RzTpSpJ7hTKPQyNgbypXxit1usN6m",
  "key13": "5RPDdjSADtHwadUjkyQ3xoJ9EzdoVNmnH9Cx2ki5AuC3p3KeXmguni4gTCY2qhuyiYC7hdfRtt5su9DAbd4bparn",
  "key14": "5v6uRMJUrft7RwVLka4kkRiJrEUL8ECe7jdub9uXyvYHb6zBPtNkURCA3vsM2dT8LPaxGe5pfz4cFf83ZXsAqvY9",
  "key15": "5n7YkfxWu9AhttLC5qyaAn9BLFB7K32ikCF2HuM1eCRjUzfzmgMp8ZEBse1pzZhdSi8BX2n9qmRrys7KacFwG6iy",
  "key16": "4xAyoZe5qQKyJBZp1nFyMPfzUVw5FH2WwRvZSrKLy7uRWRMA1JrnzB3Ypq8zAF6qQXmuuXM24mQqFjWU5DsZ9kK5",
  "key17": "2xsnLneatxsU6EmysxUciamRkytyLR7pygNSCDmMXkGzecFw3bazkfPVdyn8jYaQfsDPt6vyzdrRve4o8VWCWo7E",
  "key18": "ugsLfEF5jE1c58dkMUv33qbZXHvCGsSVPkK15xxnsyd6cuam2c3zz3YXiQFBRuDF49S2Wscpi6FPD2XH5NXJyBf",
  "key19": "3ijL7A2zqho8SRGFmZ44fyQk9Vj1PpAkCgjd32Qw8ZnCAUcqYkyd9uKec4DnegJqERGMY2SgmF5pN6H4XYNzt8q6",
  "key20": "mbF7E6wgaXVPhrEotqHN2mF3g9Dy2nbzK7Pkx7U6uhYimsoztx8obKxxvrhTM81CZ9BdJ9JNCAa4VoAqqZQ9688",
  "key21": "5A518QgqT6Lw3fCq8veXTzNFxadKr9NeDEY7fJW4KCzRWbzgZhSTCpXNPoCb1d6NntPRh8yGFKh2TyYDRsRYpszN",
  "key22": "4DpFGLMJfUYWfcg7DCJ97CvZ9GSZbWREEEGB3CRsqsp3iYH78Fn7LfgDD21EEWVD99VA3hsVypmH86wnaegNNUNK",
  "key23": "5XYLzGXiWHDzaZNKF26sq32DSZCqtuVBTrJbCaqdMBZPJBB6eWADPA5Z5cpiFTxW8ea9AZuktH3kb9qAiRNW5mzE",
  "key24": "273Xp8oWyLA3fywiAyXSecdsSVSxYcC1LEm3B69uAKarQwQg2xKMVNwMtkxP44a8if34WC2B45DCPzwUtV8ab6w2",
  "key25": "2nhUZc4KfUYTYUG41M3B86TM1uaUbeM9pvqCPta1pJpYJJYPddm1ynGodh3jWuLBwZ52Xc6GQ47LfFkpr245NGfB",
  "key26": "3GdTYWMgoM2jZAfHCZS1SkZ1TD1JjufxkThXkhSV3Hgh2Hr4eCQXj1avsgQhVexFKwMR8Dvu2imQJPES46szPtka",
  "key27": "3jrbYLLsgJ4Dj6MYdP6dFrLFKSUkJmbTV8LecXKxRtNJN4qwR4M3ndMwmwYgrCjG2tzr1CYog2fdqaKSUYigsttK",
  "key28": "het5enbVGoodMhgomVxyaHCxXN7wDmEhVDmCLUzkGWGu4be9PtqRpQZhyxWYU7Giq2ZoSJdM13fnwMEt87XceJp",
  "key29": "3aG8f9sBQxRZYcwmMMwc1haCkVoFv8ffxpfzzwHUG4FLgoRH3HpYbQ7i1SHUeQC8nfrq3do35cN23VstzoJ4wCTK",
  "key30": "2b9AMpdz3yJ8DQ6qXyFJ55kFFDmAVJQeEDVLkSa8CTG224r6iwtH4G7yQ5iKiAZ9yw8TtHEkgcdvjq9QF7sSCnKa",
  "key31": "5Yqhjuv5atAQvXsYeMDKjjNZ8KJjnYrubHSDccWhwctcapK5VYt5FV1SbLHJpbc5EQsv9nS5SPG26vf1PQa8XWeV",
  "key32": "2itE1vQj13oPRtzp7pfQXogMyNhyCgr33cK73Wf9YE1SBZvMUeXHWH2dMs53w6m11g7VQujJHiMJMcUYetCpv4hy",
  "key33": "3kTwz4cQ8AmPspcUUBzhVtFzYwap6tcUzY5AeMKqk2qPupAVYnY71kJ5ouonmZd3NAQvwHsS7NUqzbdsb5fFsgYJ",
  "key34": "22JVQVZ98tJBjiaGnjfjoFeBhzfvhxJKF61jYtSbKroVmrUTZZkcWjGAWt5tYRzJg9yjRd4iiXZNTc7TeANqnMxd",
  "key35": "W3hfqqxRQRJiaqgRzwtx895SRmD7aNaDvDmdtrD2zMBpBzogHNFwaQhi559MYMYKTEypovtH4t4fMfBLVduWeaj",
  "key36": "63ayBfRmuUeTQhfAYKTwC1XtmSs2T72M1SNKgpSGZtdzf1jjYQBCtRaAavcRjktKaEFNtAb7qEafUazzfCA136h6",
  "key37": "5KNZvchLVo2FZkZFikrQySqTDBJp7oD8meh3iWfCJBHaNjeyC96LZUo6EN25uTZJ3NJkk8Pcqxqfm6aWH24LDKao",
  "key38": "5ptzRD7x8hLcuEpMhRDnaqow1VhrwN6XCnsJujEQWCo3P1uhy66TvFZWGcoLfCV9F6Z1NSGnA7bXJW9aL8ACrFVE",
  "key39": "n3kQHdu23zepY5dVc17g6pHmftTRVwEtKPqG2N4iHfgJdYLQ3fZuyaijBCpaQ1GQsWVfcuymXxWk43dTEKrcJh6",
  "key40": "4NbpkPExkSCj8xvnTHmvbFrZ7XWpcFyKsUNAYtf5d8dBk9FdqjeWpcwi4dN67LuuXLZbTfwQFKCVu9NrK8zuqWvp",
  "key41": "4sQmvNN86TVPwxY5x7H9jSaZrWLfrEiEHT56rv8ExP7z3uSmGdi6QqvHPJf1mRgUdo4YQEgWu5NQKXJXb7Pt4woa",
  "key42": "5ku5z93emdaEEZgJAFPD74Mm4KgNb9mQGzxCrRDsB7z3thjF8qkcqW2QkgPU7b83K3hXGDCDySLgEqrenJ86j4PK",
  "key43": "5LJkdqyCoo9z77r3Ex6oJyAqzyxdmejyA1oNSj61VdsZUTkG79JAXyh1xub2S2nhD9JiCDYnf7XNhTFMdCSx1n9J"
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
