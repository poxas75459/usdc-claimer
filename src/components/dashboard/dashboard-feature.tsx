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
    "2b7KCDo9Zqjvb5daDP1ZXXTuj1Ea79VZzdYjWFCzjSz5fzgHsLN3NTJeySmmUzmXUAfZvP7KWr7ZyUFiUEm49DhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32cSEGnURJPc8Fx91AUgxGuesYc2iQp19F66zEKYdRk1UPUVsvdePze1r7DKKsNfWqzHeQsFXSi7peWSNsMonuXW",
  "key1": "4K5wCERAUFwBGS1kpFU5GUC6PQJnHo9rdm6DdBkRiMXGwpCTnBAbQeTkrHC9vqB6xdcss7GcvD2sEo5Q67RxEK7t",
  "key2": "5cHwbFg6VYQdT6p17g6HbVkNZPc81QSNUx3YgSLjD1ZMF81NWn5iEzvHXXpFwgpiGRAQ5UfkccCGF4UjxC6G3UcV",
  "key3": "4UrgDR4Sme14pxiLu29dPqi3h8ySiL6E4VJPyA81zvQqQm1is3v3RgFYsKM45PhHJoLUFC5jwxYwinrbt61out3F",
  "key4": "4735vS5sRCuo7Add3ZTZdHFBjPt32LFeSbGcGqB3sTvxNJutyrdTX3vENWxN7XaEqv4DGqPjBPGs69WqscVLrFyt",
  "key5": "4uWv94gvKzzmTqLa3nJ6kkGKD5pypYzGYXHNE4DaXDyHVWupiK23RijKDSX5mWCKuh89vbf6D1x1dMn3QuEjkhs2",
  "key6": "8zyW38Tp2W85icyZp1KKGtTsKybfzxRnKYf2k6fXqGwpsAHFueYKqRQa6xCEXhWgaLiDJxkeaq7trx68ErY5ZVd",
  "key7": "2csQzjjfswVfxxBFKP3KecWaeXKH1a2UuoNbJWaXfsV6xnbptB5xYXZ8XvZwqpbdWQ8UR8rEkZfPvW6vLnbBW9Sx",
  "key8": "invZLffNB1Lc4XSTkUHMphCrKmgBr3h5ivnob8BsB7StyD7V7YpKMthaBsu7aku5CH2tGugL4PLNi58n3Ah79Jm",
  "key9": "3aW1g8CcGL5d8nBpUWrogYHryG2udDTR3b8JcU7rAUomPCw836UrPXBQYxFWZu1vrnG3iLdXqjoD6fW8UevHe8oh",
  "key10": "2UGEeMzi1naRmvxfMmwwThko69dEn7G9qVp96MYVUm2snk7CVJJGQYDwBThtBV8SgzLSxPUhKwcuBTPn3MYQvFRD",
  "key11": "2BAuU6w9MimBYXxgGiovSgFqqEXvWGSb4uMZbzoyBoswptUYHKSM7GahkCL2szjvnsBJRUCpF4GHWgXPpJiEp6ni",
  "key12": "2McqfXeXykVYrcBmPccJKDZLBYWYUJRcKJtKRMqk4R8KTRxdfcWgBbjVESYKxicPSHrHnShmqRJcbpC88uYYNRch",
  "key13": "57YFukxxhBE3AHPcqABsRiD9SbzehcbD4JbpPgaSP8PRwBnx5noF4z8t2qogtTA43P3p9zrDj7XxgzSmQnBYeXh6",
  "key14": "51XdNxUMx6jp9MdSjMqVkbpaYRvy1g3VnB4mYTpMhZGbMWxokPdSiYoB1H7LJ7apsrRpHz7dd2m4512W4hTMqvhC",
  "key15": "bDyMaScdQYniVPr6Te3TCN7VWP8otiWPzaP9ySMCANxp695u1ZMiFvawDCBfwt9Bxdy1x1byuRrhMKHRZzzPer1",
  "key16": "3f42RDQg8ChdsKAsAKvFEyngdirQgiXsknL8bwjxSwxexquPg8zu57yTfy1naPe5oF4Gkjf5K4eCWTRxqCDZhvMD",
  "key17": "5khU6tA7SwfShBaveCLEjgd399qHwFxs9uT6wFTVzdL1dHMWWD5ymHQdFNuPP8iRq2xZUGuzNVVP62kxSPxdFzN1",
  "key18": "4cWnhLmafL112ZpdDtTzyocCMrNTaaSQuwLj3ALeJBsrcnGSN8BPE2Dd7w9snKQraN41HBZJghSfWJV84tFiNEx8",
  "key19": "5QJwFEvP7hDEfGigjTGxoAartcjFGB8jdguUCGVBexWf8wDufdeXxBSCtfjrD4tPaDX1q1ZHoH5cTjWrg2w8ojat",
  "key20": "5s9ADdSuAAy8gkg9Rd2cE9xknAwfAxxuRfwbSxXjuspWwy8Y9NrocF5u3btSrhuvaKFpMUKzg8VB4ea62M4aHkVt",
  "key21": "3CiZCaamYXruA7KCddQMqndDDyCm1BwWJDSBLBikh36QKdCkuPnbqLCccG7GyPUbLSuShbjwRu7LE7GKfJBYs4Y7",
  "key22": "5NC2zxGYFbbFY32Mtd64TLBmLDwz5Y5wc89G2Xp892Wh1qZe6yPhTWhfCQnD4teg3wbo2a6Pnvxq8xnj9dwC8jJE",
  "key23": "62oRZPbHGm4SVARyzPJt7nsFp9GB2twB7wcYEcFiGFze565Goa8STm9fKPWeAhHzEw3jz78vPaS91181QFrnhoJj",
  "key24": "v56NLcGnD1a9eAmgENVRu4qVhkowC5S5ZJ9mAHDYyCVmMoFEgQt3SKAL1J2nLWoJv7sa3CikXg6e1jvYGq6HQGR",
  "key25": "4doaa5upe8TmNDpxTfktX7X3ANy1a6FocDtkLszKeXpMuDmusLPvQBp5PwLRetwTbQMYBwof5hoVMxvWsebktEGx",
  "key26": "8fk1zJUUH45GHMJvfxPMHiyZv8SHVaCGwxvfbarRpU1j5VDFidQLi5WSB8diKriKLQjYFqzztqv4wPUZ8RhttCh",
  "key27": "dwh3kyGyvw3WMpj9V4SaFgwf2Dwmp3sYRZ1MBedF5pvigxPyQAMQp53wuHWozCJj5oT2heo6ZwT6C23m8PzGPT7",
  "key28": "4BH7UCVyYf4DJz3orQJgfT7AEcgDMFdqmb2Lb46KjZE5B5ynUvA1DabbePxm77eh9PVUs6B6MH6JQfVavwjYxHYK",
  "key29": "2uvHE53y3GnmwxgpcYaCoAQvEowH3AS9SLxcJgNWUDPitiRbEYyHfw2ifcnU6zkjRXiMgR8DTaXL4NGsVKUUSnfg",
  "key30": "3zHAPrYABfcK3a9bK6TVyEM9pTdFh4T5VmAxPqe7KRZ1vukVGF414vtq8LF5rTdwsJD5F4bJN9gs7CBzKU1BHvkc",
  "key31": "5gUtzjMphhiTwtNprbL67tJD9y21v7eELt3BD2KfUanWfQqjWckQvXy7XErFMmhheBuwhcWyNkw1BTMvfP24i3Kc",
  "key32": "3HFZ885sUyx7iRV9GRaiEmGgh8RBGvZn8ZBSf91mJMJ7EbVriGgfmS4ezWLsEGVUdhP9qbLTLRK4hSHAqwgKy12x",
  "key33": "4N7cidYZ6ePq42cPhkWQm23nAGMBh4dc4wB1DpCCoXk65peKntnUmaops1y5e39B7det6CSrmv5D3rh4Y1xNJ4NE",
  "key34": "5U7XVHeNKwGcTFz9cNoQNSisS6kAhmedcZXJr3SGBtuezmEWT3oLqYpBDS9X1PVUTgnsPz9Pg6D5mg81T2ZYQywx",
  "key35": "5u9FEyaQiqSVSeCPDeTe4fWV66vzZYbKAfV69LTz8fpErDydD7wNTxKFLFpyYacNUqKgaDJTqTZyxrJdzr92MsUE",
  "key36": "3qq4Cq8nozVMiXKHbdgjt4HduwXDW4BCZs4FxPa3mqsXuw2JXopu3rKmfPXcypn2D4joSSj3SSX1HdwxJLo3Akt4",
  "key37": "URw9yJ35fzow2UHBq5BSpLNWgCRxij5URfEbGngChRuAxcge1pH4EYxq43HDpSEtFojSN7JTKVht1928ZL6fyc8",
  "key38": "WApKGB7Z62q2NAX7LKkwUTfgRMWc7U8jFkheffCw3uiWWc8jaw99qgAaEA4e1wnc35cEpTBW6RsJHo2PM5NdRtL",
  "key39": "VFgfraVKaJ4XnyPXKAnphKdcRsEqD8ndBfWrKBBmmewp1mw7cDgevpHSE81CAkMFhSMMARmgqtDUHguib8DsfZF",
  "key40": "2xpLL9fUPjoYLksEhLgD1YkrdivxN51QCqxVQJ9GXUARjDDcsU9NqK1eZG5A4P3SDcTjo6gz2Jsu67EdJPJKyqSS",
  "key41": "65s4ptv3hRtS6ZcCfZZLrCspY8HhrnqgQc6QUu3TueFGd1MdsBkvWtBXhQtttppPbV7oA1ZS73ivdox1BpYDRTM5",
  "key42": "5YEQJNqre9aSVUwWXDjusybPs6Yx4fuLEFE7gMb6BjJ9qB7BUquSqn78rPszV36mJysf2zefFpC7YMgLgYK6By74",
  "key43": "3TS7P8AjXouc1vd7hEfT9SpXJhVH9xHEh4RNDdN4rMe9LHq7h8iBzV88Ct8hE7xBnc2SbF5HLcUFcxbQaD37GAf1",
  "key44": "nm1kQx4W1WgXR2eN4tc4JtE8RjRrmzDUMPonBmo2UHuSZFL6FTo1zaEhQLT7yLkHwrtdcTj4hxnaHgLErKVWMq5",
  "key45": "2oFF7YPj7jt8VqkkJ95SFwZXua5eArNmY8ZGrStBtV53TdTWm1oVDFQeVRzpQcBJZPDbYdJ5nUwJs2ZHjvakp7AX"
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
