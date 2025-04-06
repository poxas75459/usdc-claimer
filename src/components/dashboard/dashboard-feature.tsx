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
    "2ekuRAX3c1GqGGRjDZm8e3LYWk2Y8WnG4keAWXAesv8PGWZzJ3fNr6i4cqsnD3KqFZR2AECtbXAUV8fLyAjE2pfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmagNLojsjuRzAzX53sYk16RhFSH2L1QjnSWeifKRSburamfqzkW2YAVV7GAcoPrgzdhAjGagkGhYWxRLRpqfF7",
  "key1": "4zKymZ29k3CnBiY2UWUDMqb2Dt8uemj3nhFAN1NxRcy9Z51u8HdLVugurxW2xPLavE7EyjUbX7cFsuHuXQT3SDNm",
  "key2": "4iXcPGrGtrefo5HrQtJrsoXdAgenP7uDRRpgpHLyJLU137XYjyijwxFKGe7oF5vWuKif19tPVFKvPQHzfM54YJ8d",
  "key3": "2SEqFoAkReQWENnreC5KZBQKcj66F6edVUruxx3tun8nLUAbCGTxV24ytqdtodH2N2FV4ZvKHrbaoAtNNyMhKawN",
  "key4": "45okDxrrgv6X91D5AJ8JM4HcP24XwCZSEx4PK7HVjfRyfQPGmnBUgJssXmQ3j44M5vLbbn2caBzNvYYicp3cYV2U",
  "key5": "3K6zAHXKVCrjrHrgKmoHUua5LtT1UgzXm1p88fStzsJoachNXECUv6hXaYS7pcEMCSGX2sSdMV8Wa2MUoddbHCMN",
  "key6": "3jFzKsGKaT66nnfCYFHMAGaqREM9WCVYdCzDWQnHiAgq1aVod2X1D6MJBPa3QihQyTMrfM2fmmzKBWawCpv3UQ9J",
  "key7": "3LvusJU2pMSfXizLwwkztwJBdxXT3gnHKDeTMNNmno4Narfg1HNHaQ8tf2ixVdRabvdBNTb8iWrkqYTkHXEtK192",
  "key8": "3PNKmMiSRYLXZSHoehTGYi2qh6qtHYxZZRFgCUNR5ikmhtfskHEkFUjNcxhL3KsKWBT6X8owKCYkfE4Wn3W2kxCs",
  "key9": "2mLfmT8z9gejV9uY6xbSXuoPejx3qR9khGKSkPvd5BHt1LbsdaMJ5bLg4ZYz6DWoVQ4iX7T8HVrRp6GBpNv5oHbv",
  "key10": "4gAEoMBbfGuSSeBR9xrgcfpBYhpXBjMr6M5sRBRJGaAzk5ycntvW5VDJ5tEotn6haxQHxVn87CYpcpzpvZw9Tbe",
  "key11": "3htzSpT3uKSdXopLRqC3TnFARgiDZZJg2rSCnG8xZh6xS5kxnj9KY1Sgf3dwuoHDTCeQtAPy1Fbrc9oATe2msLct",
  "key12": "4aaMiidXyWy6pF8ZCRKaz97cFk9mfCXMo8g1pX8XvQKwPuiuiuHy5M3QQ7GZTnBF4G54fbcbJTSJAcEywjjMwVeZ",
  "key13": "2Pk74sysWUcZJ387mNr5VzkdUBJPsvWmnHNfaxm7TzEstkDrMtfUgJWMpf54vCo2A6xm87p6WKr8bs4kWB87XV8p",
  "key14": "2n7K3jE4qViAfdmAyXWkmLJj5PgFj6JgkB8Zgmr8UGdxUwmejtJhKRHvdN62agbph42fNcVdcsS92Z4kGhFrJgzm",
  "key15": "4jNrwc43tTLgR1SGawoNQrXqT1JjgX3XxmZK1Gi3jiBFjzFkWG2Y55UYujy12eSsGBztLZ1rNbBc5vMzvm44sHwx",
  "key16": "6iujPCsjLECrxb7ZZWadcNyRMTqQqhdnN47GNY1wrMQYf1MRev12trFAMcFZwNuvcJudDPBi31Lmt4wHQQtrT6h",
  "key17": "2zRm5q68jWqqHnoKAX9hEfBrghLuXpmhkEVkLxJvLPyY5pMQa7PdJjib5tJ3DZDXjd9Lh7ZmjM1de6nEXXrG9sMC",
  "key18": "4E7qyYhzS8Ck4sKZ66S8oEv51u23Zd6Wb6U5FTtW2H9pVzfnALP9uQuWhSWfs3kkjw2ZVCQJZBzDDNC1DK99nsxK",
  "key19": "5X7bDzF7UqSDzkfQJG1chSLqejrUzqUUV1LLqGizp8o6HJffwFjXRwC2viQjUesdbdx1EX3RHJeFQEp6ztqJwnn5",
  "key20": "2FL2HULzof1pSZVmYAGG5jRbAGmrbhgydCUySpCngJWgjxv8x88kEbjzmErahA1VoiRgMT7zUr4UBQ4Qk3XtQxsc",
  "key21": "5sgq1Q1YEgzzTZfGNBKQtbudhMUKqWoA9yaBUKURrDJMRKmQy1zmSHnPtSiZMPpdZVjpggJvdoe2yzWpRKeKQAEi",
  "key22": "42kfXw9uttjiKkxfv3HC7vCc2te5B1yvhYu2ksgTmuqAhDQ1TLQxG6iUoFBjfCU6y6vwShWBgGrsVZefRUgSiTvZ",
  "key23": "4vdBPyLrKtXWZYT16GPPFDbAUv3ejULBJDTox5aJ27aF9RkDfU41qeY3kJFPeZgctzxgQFgYxahzG6MXp1xLmFRi",
  "key24": "5WrDasVcVDHCLPdCDDm3PsPGs7EsHVZCF3H6iaGk3KCmuC8H32ZJ46x14qqdTrrQ4WF4NqF2wXgJ8M1FyTirKfnn",
  "key25": "2RXec1WxaP8AhnFARGvix5KRHMawi71zUwqa8QUdfRYjSqNgZuTUBekMGPuUkiiF8JkK8ZQszAPwGwqJSKcegbpz",
  "key26": "3CRZjqgA8LuM2BKMATdU38aRMynzbm4P6QkG2kr35UZ36zpLUVjjs5zF3BVTnntfCkFq4Fp1qeLAHATMr5zuc1aH",
  "key27": "4AZebw1DbH3Ms7G5MmkvqKF5a9XpbSXyNadzF76a2VnbzEchYbyHbfu45LfRLwBiGcN92XaostDfPJERmsVVxFEa",
  "key28": "2oaPFpJ8zDnVPAHySWUR697QG2j4vvQ4DZ7EkNJ5gbVWQ2VmwkKjFQH5eySC4nEjRhbpSq7Fy63CXzqLuP9P1ADr",
  "key29": "5FVzBt6ha6vq4Ujhsa8ATzFEqSvogWnHRELmHfQu8LRH57je9visrb1HHzr2rDUoKXKPdSiWo3VX6PwedvF76oQi",
  "key30": "RncmxdgQTTdd6y76DqZNoLSatuxMN3EM1rkaFAK9kd8EK4cmZ8dfvRr3crQF1Z4UAfQuY7iTLB7mFsKhcVcCma7",
  "key31": "AbzAfjfyYgHiHkgBK9Pvy6yPDfc4kicUqKbe7AFM1BtMxubxym1Y4NXZ688pr1WpY577BwU4LCQ2qJJKsCV4Nfp",
  "key32": "5JjsT2sR2mdmZz52anLpk8zuSVLWMgtK6NMJhCR8SBgovy7NWeYYBxPRxKm6PGQFndijhwyLDdweEqKBoes1FnGM",
  "key33": "pznnjcq5URZn9DRAg1kdiVx5q423cJ4DnkP4HbimAD5vbfphYb8JyHbFjKXnHMRcTxTZL5scYH9Fva8aJLohbxv",
  "key34": "59Q2zVbrvTA1yiuCQfUtkJBMXggXT1SNrUkTyGX15w6nbMhhGC4NRJYnTHfeisLnu3hD9rV2cZedaA4rCcz4Sfpz",
  "key35": "Zak3r8ehPchEupgJbdff3dYfjHAduawsje3kqYPcQB7UY82sfvTYuDe9qiiVKDxWCtUu4JWvjraZ5L6MhZw4iX1",
  "key36": "56ud96c3d2ZmPUpN8kVUsY5ez6EjGBv349cu7PLfrHp5Vb9jzV9DCi5Pf3uRByPEWSxeT2q7itJEFNe2jfXgowgW",
  "key37": "2ZQsJ8AcDkHtXxX4BpACD8p9Bzvmud99f5q7JnrgXZ9qzQL6MZyj3hWz2EDYuvmFMH727Qb7yvRWZrqJVWkEBtgV",
  "key38": "38NNKJnjiDmVwbZYjW85Fyz1vZtdqhciWnZ6Lcg8P5kfjZPnc8ypHVgzrCtpqxqff5i3718KbQJAGaN3VgyvCs6h",
  "key39": "3wukZp1N9nnQRBpMVWKEvEJZqougGEKw8rgTPgrpvqcde5DPc8YZVkPgkbD4TjyUbaiM4pL7fK5jcVPrRMk1u6fS",
  "key40": "2NxDBw94nNCziVdKLzDhB9tn526Z5snUUhgX2dGfkxNWkqVKdzsrShPjGRvWfZiX3kZnvs5o6me3mghgBBL9nuVu",
  "key41": "2FKKQjytwa2pyvLyx9PCQk8mfjyzBcY9xnDt33BHmL9s37M6ZAyjNWsjstuWYCFy8wyi2wWM3vb3x9oC1ybE38Pj",
  "key42": "4883PuPRMnMErhxkMXyy4vbqfYyQVsKqvq5c9FoMmFXHUnypvEzwPhLJSyk3fhKgpD3woauBM39U9uh2oYvfaqMj",
  "key43": "5sosX5enytr5p4PgWA22yV1VeYbsgtRfDFd6BEhFWfJ2gFCbCqQFYcX8GcSpFkcdUb52DqwHuXtLmsV4zU6Aw9wx",
  "key44": "Juct3tuoLn7oWpj6idFd3gSBVQ8iLEC2JsaVfLbmbgLn8Rn7e7tjPrfDnAv3kwvEsEKd3EqdeN12nsHJ6j1quEE",
  "key45": "9FhLgKZ455bRZv2UW1c9zYFzYHN6EHJe1aukUYfNUXJzJ5ztji9FRZyB4C8gb6cVPowpKcQvYoeieRRUGiWjwZN"
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
