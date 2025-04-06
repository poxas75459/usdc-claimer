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
    "3D7UsDDxh68yd5fA9teZzLstsgMmmtwxJD5nBBoehe1e2L6EZQbW8ZkmZRgiBhwm4QmsRGDRkULC7zhXEfzBpYXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CriJHNWeTANnXs46zJKQtpNWyVDJ8BouqsY76q5ERrZ3wcTKcUWm6mQ1LkDQZofRXLqjSjWMM9jx46Ve2gyCyFi",
  "key1": "HPFLX91HRZGgqAyTBKzPzF7qAcXDuZCWJHvvnGJ9xvEjgLnrhciGu7CXD21pAa9mMB6v3mUnCXhnagSr8A23umA",
  "key2": "pfPABYZwgh1oCaRmA4JLxn7qPPUWxuLE3eSFFF6zjTrxEz8RQsfisjZthEfj7hqcJZ8aGCgCWgSUhptf1xbEJcV",
  "key3": "5tmKDMDwyqZjby4MYkApWhNjvBEAYU2xv72giCeBRHWRTwVVzDfmQS8zMRJep98hudQhioqBF9e6TxPNyZ5VxZhg",
  "key4": "3HWnNRhsjnJg22zkCcHisd5vbW9heBE3FQHx6W4a6cTbYhqi1Fv45GXM2orgcYTwe4qGz3GSU5XoXoohuiqiqoMv",
  "key5": "26QzNim8CysK3HgVGJub2HvamqQfTBg2joSA7VJAgoMTaNeAy6dwq3bRNMeTKrebfVAVN2g5RCt1qATJMRmSH3Gf",
  "key6": "4L2GMrix78jBB3RQjg1fpZXtkrt4AHRpqAPEMqhgpTr77qdwkATvbW7hG1PxphQsoEm64i36dBhJDTNdhMqCn3uM",
  "key7": "56jVxsmy7sB9ycaw3ZfPVvtpyuW55fkMMQot7SZ4UyArx8TMBE2dTL1fN53gpc7L6y3RxyBRgh4Yuf2mXg3ADxwS",
  "key8": "5NziCC2BEjpVW8YK3dm6opZVzjSCZTGPdq4U76QQBHJ6gYkYtC3XrDWUEdV4JRbFZUhM1Ce6RCQh78qBxQd9aLDS",
  "key9": "m89Y6nEFQkZhTLUqLMQDwiURk8of7i9m9tEAsnX2jcBKhJ9jzsMJpwMrhwSdcZDwA44QUdykBhzgJLHyvjC15AK",
  "key10": "52LufNEdXpDYXJKFYUpjQg65Kx3xR3R4rYCKUmHo3uB6fJ3DuAwJKCBKV8Qk18n4nuxNfcQiHG8RMWA3C4KhocxR",
  "key11": "5bvy7dd2wV1d1xWWzCRaXfnQFChs9C2VXakZHrDZ7iSLNVmj8FM6RPbgVfCqTun2aVKjkPsp3MbreLNE9ModV1hS",
  "key12": "44RjXQPVU36w4UJgLfgkZVGxgNDybsSbmiiB6GoXU6covRem1Xi49syAP5DJ7nBaenVHdyJsUrYFtpp2M8zv7NJ8",
  "key13": "4rhrFu3MqYCnhHAFGZWJDrHQ23U4cZeDbFPbUc454FBhdwHtN2QhKtQ8df87NjBxjw8UtgMCTPDkFyCtBPaoeRdZ",
  "key14": "2Yzdv66VFNJLMQBggNuTyfVpa3j2NckG9y3oayPR1KZRTHefRxN6qXJdhZ5XuBSYZ1ej1jnUH5Cr2YvDMhUXsaU5",
  "key15": "56TiF8FTfZkKEt8aKbzqkzpRuBaHaUnvNfaAyaTtBwPeNsv4ioLBNVAkdrHmEHcAhe8qYwdgk2SZ95TpkdC9WRaK",
  "key16": "366rCXUnSepRXXoCVpernarhbatJeVg92VGYR9Y2mmUKZ4PHJz1xsvn9HgkN4jEonc6YoHBYsVN8yQS1VM1qQPja",
  "key17": "2hcVzxiSEbKE9PXScMr9vWRWvuhMRYEZW54aAjnvgaVHWPBksutDw6phwW6Q6nKZhX9zn9S79RZHn5gBxkV6nMES",
  "key18": "41wUxvsBsXuFqJZwqc9SC4xuSiiJgf9j5FdN389tqrXvwXfd2NdgevQs5qhCHmHVnbvhVqYqpdjJmGJtVP1CLpNg",
  "key19": "2vsTjmeByLcLSDyYWiRwbW5ENxzk6TL86A2fdneX4K51tii8xH4Po75z17mSmcZcUctZ7Rg4S6CJoMMP2L2ivZ1a",
  "key20": "4BrPUavAAecyoE2tBcJSeuApWMgVNSdKoJQQfBP6kMFR2JFgDbTDFzxp7e24dt3AbVe67vRXFLzGeWdzYYR9epK5",
  "key21": "2dCuRKXeZbviDGkJySKNi9h8jegJTaVnppnhgrWBrV9cTf5oLUSwif614c813gnyTtE45K4ExttRM3FkhxwJLzvJ",
  "key22": "YyJBg42DYEEWeRztJff8yuNwpWegfe81FAa67WbgVvKVRUQRS9f7vvhCwDFTVpaMvqtBFxSgBCvuAQPQDw7Za8v",
  "key23": "3cUkbyurVB5N3PD8a91LEhoJ9MLK68HLqGucvQxGxqMnXpQAnvJwTmzzPFcB4u8qih4ns9Fvv3vHrNj8uCWc9Cch",
  "key24": "2j7fF9iYfhpZXfFk8o8AWRs7f2JXy72EQnzopfmpgfNDEyuuJ31Lfk4WCaEnt96iZR2g1ythPx6XdCA3d88x9qVa",
  "key25": "3dLSEkqdZisDE7dtSYEk5rZJLVoBPgC5VRJNApLmBjSvRqJDkBAvnC5QffzXgyjtNRThcCi1zNgWRUPLZUrnLpfS",
  "key26": "2TPQbBRCUfMAvPQ4yZBMdM1c7D2jQGbEhorXBfHXtTgLo23uUC2JagXYUN39LSXXeTeUPNSndHxFHeRD7bjfUvyi",
  "key27": "4CECURnD2aAPe2UwgZ9PAYZXCqcd66bR9y7NHNs5QEPQxx2iTNTEoSLX4YFgnRmu9D4iHLSDDcLYttDH79GnZuNm",
  "key28": "JqcQV91rDBpr9hBnXYZiCzmCH3aFyRpZzKB1kcb5SRq6iReNtjHXdNndqFWHGbNKXDdPNFq8pmGFK9V3JhcpZSQ",
  "key29": "3vp13oKGWc2TPg8f7oHLYQQ2GntVZyyKpS2a7o7uToR3Vv7ywwDgJygc8NhTzysPsKXwDLximoZvqofhmpBvT7hq",
  "key30": "SdwUtvkbkp6xNwHaAcBvi4LcFTfUmD9j2yZsgNRJKHbsu2WT4bMrUuCKhEd8EmyBwUn1kiMrW4vRyuCYpbq1YAd",
  "key31": "gCtJ4VPLkjhTmn37hCtNmzJHo4XLermsQ2bcmJEFqppT8psRjn9B62WV1RpqVDWewDezhHPRy3kCM3jejKj9vxo",
  "key32": "3JK2eKNkmn8oxucfWX9PWa5Lue2DxSFNfQZXB4P3n3sgEKsXkdb3iNQzVPqGkXswskXjc2T92k8xSoTffZarUT6s",
  "key33": "3kM5tnQgm8K3NXeouehoFh5BCkCenmEaPpSXGNhKBh8rTNGwy7dmRzPcQURiAPArmBuiNbSagShpUcFP2KuLWLyQ",
  "key34": "5LctZuAnrLqsXCFt6jLbMVttAa2SgrfiLrjJSNMLNCvma7YD4mYh7XDayFNTQ8muw1T5F1Y8Q9QSabT9XVHPLbWJ",
  "key35": "3jxqMoVHbKGuE2aJE7hJq9HCiJRb9omAnQVm5CH2WL9xDEQu1Qyp21qFX9b6SBC4bpErAXBoZo2a7FZY6MJUjrJ2",
  "key36": "3VnL1JFAod6pJep3cAgdjmvTQMfrgHR1pvgWrR34WQxYHwzoj7sQyPcphD3JvAQWVpdTAiJ8U6CDxagySNo73f5B"
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
