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
    "iMhhcQKAjSJtPsUCgHzJcmxDCyhXARfMUpBZbvT5DxJdXnRUMf6RXxj7xnERzvUEsjgaAgW2HE22NSzLSYNvUTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnGVRBMkjT2zYfRPstswGq9H2m8SKDG4KPbeMUE5Lyjf6RnTaon9E8Ny2DMbgH4RwULK7cXFiYwZBLLog1FvNFs",
  "key1": "ENrD8kZTrSzSupQhQqkuLrMEM9iG73GQm9UGz3wP5zZKdNg6o8embG1C6tDyD2JG2M6afbqA5xXni6JZ53ss8k5",
  "key2": "xro6fhRLpo8Bcge1PMf6qUDMgYTTutAGLBe4hHfQaeZiJgDqDBP5YX6dGZmGGadU83xYhEDtkBwMf7BiF7UkbsH",
  "key3": "iTuH92oRebwjryTdMhPEvrhNdbTtujkSnnDz2TZfVpFeYcZRmrk5UQRgnSg4jJRqTSCFPzYM1du1VxE7Bt9Qynr",
  "key4": "47qMV8bwP8ZPZuryo9z2HJghr9cuBTFxXR6u8cLWnbBpHcE31AdnhY4F3VQLX3NEpehweJniERqLkJMPCVzrsBpf",
  "key5": "LmV1wzmw2YdVffUATJuthLx1kUL4q9tmzHhzxKCNoCr5HXRcddxR1fLofxoFjjvpZuFCLBBoJSLrFUZLdKGcWQW",
  "key6": "2BG6veexmoVhXTqdeUJqhrfR8zR1YDKEKBfL3HSugQxTAC7QyW3GRU52dta94cuXsDVQAtUnoFFciRwQu5RH7SNU",
  "key7": "idjYvQAiYc4x4d6H4v5UU22fXExf5y4SbsxA3XFcQB9cUrALZeyaf3y2oLRwTTrg5fVqSixjMX5zyjb8uQrVndx",
  "key8": "5dxgFEW883Uu2aCH8VYc2wsaWD2JCHYKgXy2uG3njFokUHbPwEGwkopPtzgvUX9gSA6NjoSVB6tiKmJnRN6nnuev",
  "key9": "5XRSf328h2j1ZEwcaVmJMG4RhV4gfz6R7DVRhySHJcadt9uFnjoRiqBQreWHrfJ1qjyChnDZkp5NHHoghZbhAo9w",
  "key10": "46BTVUtmcK89C2cR3LFxKYtWEWtBPDgjt1gonncuQqNhQfzDGZ7zaZbfFedqdt9eKggKi7haGUsdHUZsZS6amtvv",
  "key11": "5bBHx51ZY2CW5LeeTV3grxjYnhZ2CsHh4Tv8SQx48afwmCP8dDxBEtstAxSCbp2qYDNGU3pV7cMVRdosFbNy54er",
  "key12": "2APUCpHKTMFerMysKyU1qCCquHKQuPRZTHC3jKrR6yXh1mtsViGUnWdff1gX7ovkYUWCwJrybpULdyVqdtybwoSg",
  "key13": "2n86iiVw6FajthM258ddd5H93fbvmpZQNjXQoNPrLom3GjXgvGkGV7XCK8CZa775VkYJVhCc1FWRLHbXQHtu1Dwu",
  "key14": "2CDW7vDpHkbEuuaMmdzCGg98TL7jaLK5T1X5uNieqs83zXPurWcKyW8batWpBWMcJurQ7UuTS35iPf7phTFP1K7h",
  "key15": "4n44FSf8jpCV9cV9eTne5Yn3sWrj16mY1c2M6uJaxRdSNq7WRKeXGNeQUkWboqzotcdZkP2s1bn7Wr59ZVYzTabX",
  "key16": "28wPUBPYrve6o1aQBMvLvpuB7KMXL9aZKAgw7eddX9Kf7Gt83KbD8Kyc6NrKoLFP3dmm9SPhtvpZPjvkoQNV8y2D",
  "key17": "478V2MFhxLqvHZtRPvtGgGsS6SptdoyJhAUnRoYknhqnjRhpGpBzooZxUr1vw4R2F5WskocNAFTfJM7Den681L7x",
  "key18": "4Nd7xWEC6XcSTnh4EQjNFvZRWywQsVkphMyBxHoJCE5QaLwKHW4WZ5QmrdtgTM8kPR6xeXfVgEA3U9ptPxuSSgS",
  "key19": "3joCzdBrqgwm14768XuDUDihatQS4uco5BYHLzc9FJAenpySbHjQ6ncsJ2agLSNidyWSNxgfvV9kjUGqfm4vihWn",
  "key20": "5TPqsRysaLYe2SvwVycyEEUrwyNNKWP9APgRTUKJnm3t6YhEckBwWpQRKRiPTvoUpCJrQoBTVkDGGGAbNohvR4N",
  "key21": "4te2ESVbEGx7J633W1Lnz59ahxyoxVepGVUXVT6MYxE5ZzNSPAwNF5E7HbTbo7qGrdDpKkEawC7Vz2piCfrUncDo",
  "key22": "qewoE5xZWuyGJrGqKv4T3g2jGTQPreZmeWiQdu2FcvwpkQQZq1wuBQsSffcgFK5pVJfyfdW37MxUK6WsRrQcp1Y",
  "key23": "2kEWs3jicFqdXbdhP5KJYQPZDmMHJdiViNPR9nZQZ8f4p6BRQVAtoQBVxScdv4h35Gg6Dn8gHNEsN7Svs5rArfwx",
  "key24": "4Gn99CyRHiinaNgZ2KynXpRwwpWT1on9pc1UTqHJsyt1KDdECwsfgVspTwJCEZVAWCQvd8JP4LibZ2oP7PkFuu7Q",
  "key25": "3zm3itKpRdN1cP91S38Aksij9Y1jx9eoBKdWJUcHiv5eVRpPvUPPiAUMeBb66BaJDY4nK8kuCzaEu84QgVK9YfQY",
  "key26": "5PMNzKgcMqRVt5WrTGuyaQhXKdMenkPD5LSWnqCxnuD3UAYNYP6ixZp69APQQXdC3KpiBxtU5QQh7q9dC3PTpiGk",
  "key27": "39Ghbw4MhaugB4jpFQzSmuq7HdryQVQvY8jSsiiH3Qe6FTKVFc1mrbAaDT9LMp6FP8nDTte7CeVCNek7hKcAfgaD",
  "key28": "5e8iUmejN3XrqMwqr3LcPAdsFmSzw6fGmcNqw8ppA552MwKnCvNASnCBp9VLk1AvC93N87g3VENGTMEq1bRmw2pC",
  "key29": "2yWafFwYVRSFZjJtdojYeqozuhyCwwPZvWZL7SfEpJzPyaAsm75R3CyvbHAue62TbBXmsGJELio8QWfjfz5q55n9",
  "key30": "e6VT2H3uEoCUyuiW8zAdhuZGCANe9zYZDLgGH9TX2npsTJfxURFzfE9xggZLTSADw4KfWR2fd8stYbLnctexyMd",
  "key31": "5Wh6nUcxdnKXxSxLQF3DPPTmpfiaM9LYcg1mmZnNM4ZEwiszx3TabVZTxbh22G4puo1Bb6AFbSX9anFtVdbv1Fhq",
  "key32": "5ec2NRbXP2tqa8ZyqQAv9iDvYgNhfDm44rwrgTbnSfB6d4uD3zEohywdFFaxXHhABpW7R5Uah1jnVAvFaRV8i7cJ",
  "key33": "5S9CPBPuWAtJ6VKwSkw6Q2aQdEoGPDWturGjitGAFRWboUCT2BugPfSyLUX37EZuNRWzKvogrqrNPcXb2PbUBXQ1",
  "key34": "5XU6Lp8vuZvP8QHdF83f7pEhWHRvJLUFEivVoUdmD6fcX3Jd8qLBfp5FTsNrJwKfcBkykD3W3y1g1odDUNWYR7Hr",
  "key35": "3YQRLAqNWe7tiDRoCKaiUJjd6nrK6gPHwPbwCzF5gkukQ9EYa1iu2UAYnajNp1EYVsnsoCGvBt5WNx7y5CDLMfcv",
  "key36": "3Y6PueoytsL7PJ5tdLcPa5YWSnnRUMXbWpJfh4iVTuxNfUPvoPtuUmxXUVajVhXiipT3SFaGhrhW1viLYF4gnvXE",
  "key37": "4zzgi3raAJRc5Fvp4KZddbEfNRr472R3fxfdSLwtsMTe1Da9RjUw3nddq34PNPqzvuTbR3MgCoxmt8tWveJeRt3U",
  "key38": "5D8GWyxL6LxYtTbAAgUwcFSTjK2wSbvyUqFx6oi7pe6A6X7UdgGcMgJQjthtBeQmVfjrcu7PrLF1GiLyoJ8morWM"
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
