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
    "24uZHgqode2xMsh66sNreH1LDWbjCvJFKBuWwYRCPenUpQkV8f7jQU2RTeRnxWCxwRh64sqtmjxEH95FkUe6f2kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R11rntKyj426UfMNK4EQ54vwKQxsqraoD91yjgvSgoHdh1GDhZ7ncbvdqNThH5pdkghZhNiWfV3Y84hcDpRk62M",
  "key1": "sWRPTffN4DhqDfLPZw5mmiFtoB9QRuFcBxWGXGYfuHzywx6e5V1wTVmN4hBb98soDtHJ7bpiURR8Caag4JuCCtz",
  "key2": "4GPLo8g4dLisJ7H3fxznbJ7MH3DQSkMAAcJCwZb4QHvqRzJfik6o1hDDcsDmbLh5CD49XuHYyh4wqrDN3Qj4eVhm",
  "key3": "3X3MCdQfSxVytqtyHWBw9hybeETcuh7rDrUgx7jMfmRRRZSJEJfCqx1oeB2dDBKgf9L7i1QG2hBa9VRxWPw7hEht",
  "key4": "28F188hhsjzu4tuVbtoc3ChxnLsgMAbgADA3cGfEcYMLsCrEoXJzzVpqkV32sndj2oUSLBjzMs4JL77wZAWozHke",
  "key5": "4hECr43LjUq9zhgqzDFrJF2d822byYBBEFUerkjBHMATTZwoyb86XFBBgFx2UjY952Cmp53FWcuw74V6B9ahr5T5",
  "key6": "DtHxJaxgiR9WynWquR21fp32Uxr2HyRsgEH8LgMrQevzfgwZzyarT6tafc5zXS26eKxsNrNyx9VMYBhWJ9t3fBY",
  "key7": "2uLw6jSJxQB4SyCpCwncim5nM248vBHsTnnzVRfpnVwRDFfaV8zduW1rZawDqtezexfGSu5fJiKSoXms3zLGJDT",
  "key8": "aV5DNfqLjeMtbiPgQAsNRtKrMj9bXN7oGAQv8x6F7hUJNhcndsKHFD3agGChSXrKx2ogKdxf128UveqAmq7wjwt",
  "key9": "3iP5drRg8xHCj8wzqkdU7G3XfMHrX9p9gqQwNTFJ9q9zYfnuGAteuZuafLBxmUY2KEJoGbJxpocWxRdyDDH1UaV",
  "key10": "ujjBUuaspnBCgv9yV3n4xaWik16wCJTBiKUhCdH4s22E8imQgweRLdgbSTGWWwaSBe8tJSBrWNU6GSYxCg7fp7Z",
  "key11": "T5uw1tanUoUWb7gHE1jk2GPzGAoH79j1vBiuaURuQWZseh2vQtx6oYvxvh8Q2TkU7r6B5VuuKynNLK5efjJoPo4",
  "key12": "gDQSKYRaGr54V6CGNRR26nYMiN1LnjRZ2sbAEf2YpYWuAg43BjXwcNDviKR1s5PqQsHqESScE2RWHYBqJYMfAFA",
  "key13": "3cnExx78sUN9F3ty2mx6BZjfcrx4BGGBDsE2MKrtCEr6UWcmYVpAqAKczddYdZTQyo25tG9ZQVMZTqss9TvQSBbT",
  "key14": "5W24nTA33EFHCvmm7vqGbSzovTxhpgVYnMJZqsFZRmJuXtPP75EYSgQbsvmEta8RgDtZXA5J2V5y5A5EnKFsbj6Y",
  "key15": "3TtBzLFwb8MsYmmXC7ZYvFhayrJH2D8w5h1ydZAh8asRjhJcuib5uyU5g41amHFQY71gUb4oLo7BKmCimKKCAfvX",
  "key16": "3rm73pdPfRve6ovDcfJmFGoNxF9t3bXZBEuL1tk95PzqZf2C7wCmeFKiWsjJEuQAfcXumaKCEAktwm9h4fxy2Vtv",
  "key17": "5TAxXnTwU9mB2524q3HA8tJVcDu9tTkyqgt4vi7xDDpeehRRYp443ETnYRg2tDnG7X1RfMRtb6nseQXQwWu6pMXP",
  "key18": "2kXYZYxi9PpMHK52mZ4k9SPhANeAsabMQjnYRhWGtUoaZDri4VSQS6xko6ggJrc9AYCFuKGDCotYNpCW1T6YT25q",
  "key19": "3ob14VsT7sgmjXm1DTAXqo3JTaEpvoviYFW7wiadYqxmrfDQQFCVm3xjdQihGhZu7rQ8uWGFSpgP3adjexi1DnyA",
  "key20": "59tFbduqHNSrvdQUDQ5YydkgNTGKQPe2q3icrhvtidjuAhC2UGSBj6cktrm2bhd9rm19nra3tYA5Mx5JeS1M1EFB",
  "key21": "39b2uKkbuExnxvQUXwVTrqheWEFNdEEnv3Z8NABEm6hATABGgz8VqJTgmaGr1PMFNWnRPmDo7JbXFL17zVW8CYtn",
  "key22": "2iipk1qRMvzaG9ESrYS4bLw5pAsfAwMU5gKC2WXB68791GKWArotncViZ1k2YFyRHN6C8MRn5tLZT5EXtezy94Hy",
  "key23": "5eETPKdanzUJuwAr9tgofFgGnh8SgQo1L1M1YjqVe8dHe7ttDD1PJjQFp5viozQWkK5Ei2CS7anMsYpdoDkxLU6V",
  "key24": "iB1amZjhK6YyCJnGELPjxcNk5K7iRdJqoNLrZ5rLu1K27yBTxx5ZedCSpXRbFTLzFskDAPq2ea1zKGQXBMpZTJv",
  "key25": "4hSr9uss8ALuNbHsQsjMdNu7fvvudKJWVYQjfHyxLZL1vyBt45QNmJpaqaQw7kvshvm2q89LR5HKxL9442tCrKuv",
  "key26": "4a9JmwZm2WWoNa675GQj9jumAN2x3wXtjYomFpZQwcCYKqrsGWB2Az1odGnjyTLPtUGNgyEPB1fSeZMhxCdqUeDW",
  "key27": "cxGJu5VrQayK16KetBoDotWnY3vQ3uW2bgtZRigttQwN6xVNeKf85gqSSw59yErr67KtEnRMYtcbd8MkEQVQwPV",
  "key28": "ZBLzz7LoNWUPsDUsv98owCGN9TYghzioExjQDwsHcbbUxkWWWyYxGEzCDfhcXYYv3HYYmyyZdna3KMeuXad12LW",
  "key29": "4zRobWPdshGykNyjHe9Ew5g7usQVX3drCegyNNukjWwCdHmJKK9mmtWPLMsmS2M2kCz6fX2aNcUeZoDVHnveWA8n",
  "key30": "4PH55PoZNfnPg1yXXcDbcCJDin56CvtEKo1ewPZ8V2X5zugHnjZZmD7Cfmzctpfcp3qfY5DgsUYuG49yac8hCDQk",
  "key31": "37CbpxtWD8MK64ug3PJRkRcuvMRSJ5iaNWaXi3GUtpoz5YoVbZPMJjvwKhDJKJeEUXFgXKdyLXPUN9CzbuJ5xrtS",
  "key32": "5RUMscKZLzjVFbhxS8xjcepvmXNtEko412e9a63EVnbqMRJcXyVAwVpKSTUBHHxhAB6GRXmFTVvjMXb3Jmgo3NdR",
  "key33": "5xjVDkVTPkdGQp3HzqgYstf16DR5UNf1iver3qbax9GFX7Utx5YuWnSBThodcATakjybNqQTgB6UBkhuZSXjCdYz",
  "key34": "jukKozudQVtQNJmY9k4jav8cHKQgYpZMKDRq7Ed4UYdYEYx3gYkyAMRhbqsjHhsHbpb5tKsB9SYs6ja9zsvbRzS",
  "key35": "5mQZVzDtn4dfpTdF52m8YYg1pxDR5t9FY7kCPqKdVbiLJFHeqM6i551gRtqhoXadSuueRyX7up4vEcKHQbvrMReR",
  "key36": "4rSouhBdjuQq4Sea5W4NWiCEq9RMpsBoELnbQXU4ytn2spug65M4xVjrsWqxG1LAQj81AqPdpvgdLUQNrFv6zBSY",
  "key37": "4BRNqVGCXRF4PcA88hPYW5xQyK4XTBddpJV5EBE6PcVmoUgZaf8FLx4LBsdpwuHYk8aGnrjZZUW97YzUmyjfwreE",
  "key38": "2NnAq9J1Ajq6Dog7tV8MFkXdsjjn92ArVRasFRgV7Bp7LjsH991ukjxfu2ufdPNqAfYYJL9Au4wATGem8uWBytTu",
  "key39": "2tyxfsZynT863onSRx9RD6HS7J9GHGx7LFwgv1en9RujQsFWQtjupo5ndJqDgRHxZbwkZqx7evQSdii2Mur8Mpcu",
  "key40": "4Xa1jM8PXNiop7Jt3iXZiQkN33BfSs78oKbZs5HBHrSTSJGjmMh2EoGd4VNkG7E99wRnA7HTB6mfE7T5Q2sXnfcj",
  "key41": "5uxuBhicJj7RYHrzCSv5oMoXZ9NSAJwoZXjhqwuE5mVrGjr71oxWpULrgit1iD5aSY6NeVWSNhmGWZNrbt3n4vEF",
  "key42": "2A4GpnC5fD1JiuD45H5S1Ri8N96ucAHHJMtdRTCNMFyWFw7SGFQVdkvGTprC98Cdrr32EB4J7rcBjzqKmEfBf7BM",
  "key43": "3CYpb9BmC6xbCJ7gCM1tKF4QTGv6Svu4RdZHGNTpbL8o8MnX7up2ZxRCthgdpdHXqa65UYe4YmyGAVzwqZbQf6dr",
  "key44": "5HmSnr1RaXR5Sx3AayyhGgB6X6zQChNBqcjHW4NNPhNWfEqCBhL6KiUAL8K983ynesLfesepBD1V3UTUhAvxbWbP",
  "key45": "52mCCfXde3hoDTs1bgEdVtAaX5WhrMBvTp3fxnKzrYWP64RiRbRaBvff8Hu135V7en5NZtuYSc9gKoviHpuZCKfR"
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
