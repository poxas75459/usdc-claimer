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
    "Qaekqs7PSaLhd4kmKGGDsutLYiTspZ9dmJ9rrAm2cKkAJujbixdEKjEZYEpbNJT1uRSvmWwfcyzrunTYVbeJuyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLiP8icsUJvQDxNnimDGJaza957LWij8v8QqBbHZyMQ5SaM3ND2VRfuviqk3BQEgJ7wgtonk3oKjsXW4ehWu5yR",
  "key1": "5fcuf4zpkw6u93KRr2b4oup7TSbHmZnjUgvJkQsQeh5JRRgQPynNdW2BdNbxoQRAUUSkoouK81JEHnumCtNAu5R7",
  "key2": "kBucDpQc4mCt9HNyyXvpePcxA15vaDHf63mbY3D3kYMc14mFjBbqvzMiXMT4W1Hqum6mTNyTkbQ25LAse15ZwAu",
  "key3": "5Js4VFj474eFgY4GhuZtDxQg9pniGpAADBFfbRyBSSXf1V5axviUDpxPXyfNtP9KVvqZ9NMHTrAPzcDoiD8CH6c8",
  "key4": "fmhvBf3Z4AJNUqnd6p8i6eh1hbYsVEsbK1Ec9KfyrwrDJWjxMoJkVW3LLoBnbdTdn9qPd7QQcQJJw5cg4unwvWj",
  "key5": "3RLaVbvFZuA6gZy8uP1Et93PV45H6zHM7hzTGMLYirUZduDVcLrFTTGrLwkkDzcdGB6EzUeugRhwvjcdJy89ZawT",
  "key6": "3VRtkC2wX5kgoMkWU9sE2dzKidT8rnXKwix4GmBwNMA7kM5XC1oCsywThfRvUiomhqnftTAFatkspY4g4QjyzcqM",
  "key7": "2iN6mjY5MUqMSGGgxPXVJbkHKz14prgAemJzxGu3XFLNYzCA87HQrGfpsLGzEFNccSS9sGAbrxJLi8imuLYpv4Dw",
  "key8": "66M6Ex2FoicTRfbKrM9iX377Zr1aXpXe7RedaTLx2S8zqAjxvMH54n11FAohFqmm6xWrUZiYvxZAkxUbb1RMyy1D",
  "key9": "2xu6qhWd4LhXiGdRhMgqMoxdF7Wg7RebP7Q7c5WGbPianhSm5VMP7EJZW1dvjEPM8ADzunyfga9XqepjZUaXguVe",
  "key10": "z5pCf2Em8vagxnG1C3joBnPm4PELEL1DUJTag9ytVqrvYQstD5jGCaVVXmbUXW1WBMSgn5b6EWViTLdKbRrs2uV",
  "key11": "5mbdwuG81riAG93ucD2MEdKrmqJ7KMAiNkDzvAL1m4QaLU9o3xn6PKro6Erg1VtMkPdBW4myWVE5rU6wAcrGBLgf",
  "key12": "3gcZ7ZcGK7LxZv2djxmkEXaa5jevg3ZmBJ93xAeX7VSNd2G5K3XpNZ7kK9qUpytdKLPdosfQSBT4fAaT6tUbUjQ2",
  "key13": "aEDQV2d3pgUtVjpsFe8LpNJ5J2GqQw7jgzUqoDzBk3bntkWjczsvaV1FQ28G6rKWyTvcHyjoNDLCHyzVQvSmxkr",
  "key14": "5boM12m8Rgq5Tm75ghWYAsHNMtg6A1bPjUBCJxYc7D5ws8GjbQ4pNppiezQkwNiLC3sMeF6VmLrJ61C2g8CTMMyB",
  "key15": "3S6oDxmwEhBnSkUevtSeACqWPMD9ydVcfRQYJhpV7wrVc6rCDzcMnZJ9MAEwHJ1KAAq7Xu4izgTFhXgrffCPLkEi",
  "key16": "4xH4VDYA4B8nGCAjuPNMY2rk5tmWKM2pt1rjxmmEpu1QDkC2MTnCE5SKcXU2dz9cg17nqqkbxVyKDwjvccoMGBMy",
  "key17": "3uM35ezFfVQMJGsCSZHvGqbMUph67QfRFtET2E4ZJshhVnLjyd8opw69Ni3k4Dz5cwMUSsPYhPpTAic2WRWGZip3",
  "key18": "5Scs7PHKBXGi4rfnG8ZWTAyVp46Ui4siGtJPom8Wi9kRix1jLQwBS1TP8GBdnq4RMMsTmV5MBbC6xQehw3kFv1Dr",
  "key19": "5GKZ4d29XDPXMhSd8ZoT1MY3CcVJzup2UnprgTGpmKbXMzfiEH5roks94WP8bXmtMuanAcH8GfK9CJQPbeNvS58F",
  "key20": "3SnRkwfiM9vGm6DRnrK133GocWP9KA4ECYcepphZ7k6NhnXM7JEnLLoxSdxtvmi3V2De2jbTNgeRpGy1pBbdaYpx",
  "key21": "qpEU7Li8quoDkrZ1qgJKazkMWbRLhkN4yneJ51151hEaN4s1k9JgBqwhgNozgsArnu294L7ZBXTovkEBPkoiyMJ",
  "key22": "4DhjWpKsq3448gUWiMXpxPa4mEXD1a7rBk6nUtaUUsGm16wdBzKKvt3XDRQbxRtV8VwMzQhXvGaECnX51SmdX7Ys",
  "key23": "3tHTmt561MkFbJCi8ZQosbEBy95Z8v9W94VEdzjZuwBWu7qnA8WAotZG6grnNvqK3kpDcgTVCisKXATe7Am7UDJf",
  "key24": "3vzqyToJrvpwT2xFa8VwWgD9m9q9pWQaPL81kE4DnHCBYVGzNKKZRw72QExt3YogSNt2CNgQN7dC8jmwJ8RvnmSn",
  "key25": "2HBkQZ7PzSUPtj7B17fVNU1uDiwpDEVadjnnvxsvRRn7SpZL2hbQTk98uUauAaMEzeChy1CCZxWMy8bgDomUWrK8",
  "key26": "4orijn9MFNkNt9KGyjTPuLJUw4cXEKJakgdfBUF1Egsr1ovAHy2HwQ92Q5Nu7ADR4bU6ZnXc9ufYnV9eUEzQoak5",
  "key27": "2knS64TW7Cz5nur7sv2EMHHLk1FzCqq1sQebJdCV6zbYh36kwUxcfjBvDmE1DE79k8irUd7kZzfCZ2boELoZxrHK",
  "key28": "3GZQ5mepL2ZXWzCn7xowV8fshq3TjYNfADEacRTCXDQ5BsXrRm264mnszD9nzrDEYm8wwiS7UTveq7fkp1oFvi3e",
  "key29": "62ZnH4XMV1Zmjsb57cBd17E6qu6TUTiJVJXVmJEifVJrTy4uiEaPjVaeHMJUhdLWBQpSyxxjbPJqpdiaV3J7VqAB",
  "key30": "5bW2NnxjFdiTghVJx3BFjKNcWTqDFSFjgKYr9oafBzcfy3tF7CNa6KtEhhbKgczU2imAMvRFZuTtEzmKHdENeDtG",
  "key31": "2m1JcV3D5opr54Qij8FWfF7TDGS5NsFKKVfB8WrtfRfynaA8ih3BQsgu2xZcCVEzCFLU2j6nNqjKAY3MNUYwAsCa",
  "key32": "4Knsa34Ydrhs2XsMpNccJaFJxMPphMMCsxPmYhejAUg24zLJ7CqMwf8G59tp6o6q6b5KDn3pVTVBNPpiQ9Dx9T7M",
  "key33": "45BEGJmtE5coynWAKayEqX6XYGw9n32e47vScnK2e6Z1QRpwG2rwxSs3W4SJrGYMLF4DsQh4RWSYx33GBRCfQ4oT",
  "key34": "2xEewFcXNLvfR24GcEigHyrDiCNgJFVzGbRrdK5gxA2EDqWaCwc9sTBV6ko52ARqwYEZc5oGd1oMrVPRzNEvd8FB",
  "key35": "TPBY5QMkyfg17durwvm897KsDq4WV3FiJPe8uhr198ohweV46ki5EaEUoHUDX9YXPKgMBne7GP5qsQsCUsPT34K",
  "key36": "2X5u3nGSZHf1wUTLd8QWLj58CxtCyUo8pSzQfmFsgwPGbtux8sL2DYB2EhyDvcKF6ZZk7quYAFYnEJWGaMJepv4Q",
  "key37": "5zCdrjzGt16r3bMWLdHn4YzJa8FE2SAEVNANdKwXphX9JD8zKQNc5HoRu9MWRjDkkBWWB7WNEW1Gqvcn2icf1Hf2",
  "key38": "4haBf4dj7UfoShuBTamGjaxCfKqTpL8RSQ88oG4YXFccpwxELqs5VknZcmx4YVdSDSBP6QchAGdZwUkbEknSm4Gj",
  "key39": "gj5pwRdpEgqHPFxj615R3aRNJa2hqekqSSyrsY5zSC5HYSgZUTYzANY8CmDEYaHusAXzdAU5G4MX9mnNejrdrG4",
  "key40": "2bYsuwW33S8SKNtES87Qk6uxLZyZzpTEEYiYNqZmWi24Ycs9qbyqEvBUyZG5Wpdi2GL6HoH8zYWVqY1GkYRhx1rF",
  "key41": "2jAJdJ5Na9gncshCbnMP9pNScn2XtfC2epd2XSq77mNDuTCe1Zj9jG6oLsvLDjFp33UVPm2FezcvkMdDRraFAoCW",
  "key42": "5FarQYa688RWUQwXKUWRHm2exRbjBrjMLiBZEz9rYtEuoYmm4tFUoK2ZDK1p6eu1WTXLkQSWxAeDQ2UHHxtfXn9z",
  "key43": "2UCmMJKUr5EuhKSKUyHxzxLqP2hW5ju4LQWG1ki3riM9ULuQrWpzLG9zodUKPMLLq2urEXNan2C8eCy8Eamp58iL",
  "key44": "4tqLEbcG7CyWozdNnMBRQm1kJeBjbkUvvczqJpgFugmyymXGrjUL2RZz93pLE3F1Stk9n15eVhfXRbj3jYj5qCH3",
  "key45": "3FpNdGfc7AdAkqj5YPo4dLWwRiwwgWMdvk7KUehE5UERvD36a1RXdZ978qPgc5SWpMhnFML83fkRGcMGUkyzWxQn",
  "key46": "2hqdPdjZn3tstXTHb6psFEHBZHjXmYQyFgtmyJ7G7VVg5DuUpN6Asu6pdkjppCCfYkYGFxnhCWA3f1RFSgXssvAp",
  "key47": "5VFi6eN2ax8P3V8gp969HLNQZ4pK9ceSJcoiY2ZnjPx7A7wqg6HzEhg56Dm3zHfmf2tgwzkpqCV4vpMqWsvArsq"
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
