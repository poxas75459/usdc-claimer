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
    "2YnywsG8vr1haaXceMnDtCVeF2wKmC3z1obabFNMtAg6P8V11UNpJBVSQZsiDaMAASbvRWWYUEGwAQFS4UejjpiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csLzVe51wnwicK3vP7MphpF3eGC9pGzvgEYCMVi9cfx7REVxyozyo7dK1UcwyVkzh1WGtM8mbhHA62LjcL7QXhL",
  "key1": "EBSzbwiF5nmZCPdq7oeHFzuAiM4yVpSvv9HcmXUG9MiSQTYKkdzFxGfqLXt9LQ1tY914eg5P9WaMRsAK9sXZ648",
  "key2": "64LacMhTHQfSBCm3nozk15E9SFdXGtkHFkHEZg1jQcFtBqaxpdeAiJeQZNBWJ6Nibr6wahVfKiEtaoMJKwBn2UJy",
  "key3": "4c2Cp3HoCetiwQHG9NJhY33hsm4dcj2Pe89GsVNEWtzm8dL3v4JGUkkJJbdDuRMjoRXtLTZGMmaQXonNP87b6xnt",
  "key4": "4CBNNrJk6uqLpUbAAwuvcrUxJpmUCbMoqqCGe28Q7tCXHpbXybSofhyQS2tb7hAtRH3fqJswhygavM9MtrvL7YLv",
  "key5": "3MRdL3CDzM6ntjvfsvfpNZNf2q11MgvX5RwkBmi327x3i2wazpYNHce6mYfAvVVdWm5jZ4quDuGz9jy7NEpLeihr",
  "key6": "3PAVFYA9uJQVqTKNJcn7xJcDMUvSM4R1XiFs2UcAvUtSrF57HnJ2hqmiKpZyspUwMtZ9s13WxeXZzLpvKvQyWthg",
  "key7": "5mNkVMYzuryXwjHjNdTCh2qbiD4tWGduFA94wXXky7XAoMfQRvz2UyFrzBQnyDkeA5FGfLsHMnyyHvdK4sVLWqwu",
  "key8": "39XCMosoFUvFot58LBbyFkxY351U5JudN6TmhbMiPhBGQnfj1LH7H2UByGuoEapowUDcV2cDC88D8Ua2Q9kqcLgs",
  "key9": "vxQE5PrLxTEATxKSMYgFHh1Xhg5ydwmaTE4XRYgoxwdfSD3UXDCRD9qM4mLZbWftz43aoSnD8TpzFEwfrpPuqWv",
  "key10": "4CydMn8Bn4PLJ67LXMXnBozmAhZNw5BurmsZLz8bQ8DuBEsvJY6T3YDgn2tnZi1SvppGGDUZrxS7znRKsXhh8WcR",
  "key11": "py1VBvuoCLdTDTPBmv9SrhNKEGEnKAK2KE5Ysh78cfXBpjxFbTS5MeDk9uHQjsSef1Fp5r9HFCQF2k81LBazkic",
  "key12": "5MPFRRu1XabH52F3P2X5vwr73raVuSSL5bqAsvM2EAwHhqb3Ly1KbcTLKf9UYuzdQQDqqwgKZ7Ko4tWqG6HvK7ii",
  "key13": "26YnXG5Yr4FBjRJMG54gDyXywZ6TBUqANJuLQFUth7MKaAH1SD5qn3A6V3VuWP6EG96pnZvrQ79YYZHP9cwfNwQD",
  "key14": "3ALa2zcPkeYALH7cGB2yDjcqBaj8voRofk6hwkVLneyL6Ruj9pcBx2AUGvKbxyWY7fEm2jMTXy3E3KrXi47TMhqH",
  "key15": "2CQ4VWqf2A9rjASyeVfbyNKMyWV36kVibnuuvqKsQ85euPeDFeyCJDJiGYmevBXQ2HnPa8N8SpoiZptaBr7R8g6z",
  "key16": "xEfT6CQL9hyftYCeTXH9DC2sG27d9sBodPTzPnJ94z4A6bjUHXG87WfPn9P2iW6LY7t1hxLi9fNBhse4wVwWxE8",
  "key17": "5PQYHJGAJXko8BjVNxD3fmDeiDWxzSuPaEmaEeE5wR2TA2tdqGLBokNp5tkVHK6deSbk6hep2E1bXuawPJ6dw8i3",
  "key18": "2sZrGbWqCx9sq4fQt4G8TFZQDqcfEzEKP3zUaLKo5hhsgTinjJ4PNVyH4xCiCiuinUKDLiBKZQK9wSZBRTufoZBw",
  "key19": "5QGXcqeMm5v2meVFz8w4fyHcVDVVETf4zxrff1radUWyq6Niy9HvjktxVtedUDrdtN8yXeKoE9NLrfxwBn38JUWZ",
  "key20": "2EC4XiPQET8VPzN8S1vFNwbpcwRHd55cmWNNR6h65YJ8w1R6ntMGiF6WgSgjUgshut2eNqj53We6aKRBENS3KPfU",
  "key21": "3eKoKVTkcYggBf7rknx5hPqjJqn5FFwobAtAU3UEsu27TMCeU1pTmZcJrRRfHvYanmvarCjmmHH9R9VFX5183prH",
  "key22": "4pu4bA1hUiq9DkCXCkK4MhZoYNtcFSXMCAoRgiXfcLB1NJ2bisf6X7NVwhLH9rCq236ueC1ZfPqCpzXqbNv12sQR",
  "key23": "25WiK8Z4x1TtWF3zqvJFg46mfDvzxMTMADEyieGBNv1Qu7rYY5JTBQxUb9kC8nEZT25o6imPCE5A2Vmh6CRXUWYN",
  "key24": "4FtoRM7SxCPXoiZo64UhhmJnkQhH6b5DmW2GidZUMxjnAujs52W4dh3pHNe7jtP2iURfbawcgeuvESDo3553dF2U",
  "key25": "2obtGs4NGYgaaybaEPbSMHVDx8H5wjRqkMSLmooyDQV3rBi8z1qYemUAZKeTZ7GvPskeKwhTertfhpnu7en8Dd8r",
  "key26": "3SWHLFJ6nQjLKbQ1FexKxorhPmv7FHvFXPmiiNEekx6aj8B8KN17MDCaUYUCGxcn7da44Xwfb4zuhSBgFuSPhuyr",
  "key27": "2xGkhMB3mQvsNeQonFLodGu8WgeUXz53UBwf3Mj9StEMpXag1kR5qJx9VCUeyLKNjTx53GU9x2gFba1Fma4Kh2Pj",
  "key28": "JsuLA7kvFuzhpTptoBpuXtg1gLXDddafnQFVjbaMwZjZ5UZXjmN6q1ANu2RTxNnwmH9F4gcsjMk4FHJWkzK7bij",
  "key29": "44ifXabouDetvTZRt1uRgbhoyW1oJjeeeuak9yorJZ8dWH3GMYTP5ttieJi61jvKdnYeZ3jsyKa6yCkYo5PXNpSF",
  "key30": "24jKQHdu5Pu15tjQyxrLP3VKzLfHNEi21Ljt7R69BqSovmqj72cXF5nsoNuCBsVVhu5kwNMAQ3RvxdFdNiRvtmok",
  "key31": "4aLUcUzkcgR6kNYFWGVoeQUcjCr1WZxTtZT1kxhBCpJq1vcSFrisrsUzzo4M5GRXAxnAuiYAmPFj6kQjA6D7wuzE",
  "key32": "2M4xNEJ1dzAEs6haLWQHpkvFejc1kzJe3KPLB6NreNobSuFiKdChybiCwJWnq3Zvt4AC3ndW8qkGD9MBjkLUP1HJ",
  "key33": "2BTYnBLbjATTGmq9qBLxc7xAa15RH8fXoi3MGYGWrj125AKoe1tSRCPARpk6EaF3GvnuRLwa1Zx1a2GsVnzdMrb",
  "key34": "3DRBEVMMDM4JHogh4jD9MngD5TCFwWHZxkhroSmmHSkL5PdfG5Fpjrbry7xgcD1NfzvSR1kay2ChuR7hcZ7cNvhM",
  "key35": "29Xj6mx2rbpUUc4ighvAEksk9pPiDED5mTyrx2twLVLvq9sTjKHsv4PQRCWEHRYRfsBeNBEAFyEMTXevXDs3Ud8f",
  "key36": "3CfFSK27jhLDJXbjKj5bPgpTQ3B1HoA3kzwPoZc8AyGRDdiiNzgyE6B3BqxJKjaH7NNWdnJyqbtZ1KPqgmnGwnjv",
  "key37": "44yj4cG4wj5HzgMLxn3q4d2pbK7e9J9HTjm3H7LJiCcyHkZzYbcFzk4qMB39hqKiNqGAYycF548ckxXzpmC7qhue"
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
