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
    "5r7ArcrXARzyaMhCMBY6B2BCoDzwRMduPCdm99EE5h4ggRuKpb5GrGB38pgjcmyHWgvktHwLvFPq6NhDxpAtz5Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kMDEMVmWixC5CvCG5Ah9QgNyvf8xcm9qFxmZAGYHP78NdKWbRQoCRecStbfiRMCVzfNxzsiTGY8JYFxwbCrSgx",
  "key1": "3Ya4aQHTE4vGrVC1Fc5kRntmFZL9ERPPQjnWgJKWwFX7HpZ61XdvQ6QXdVQtsZYpcYyEh4K5ef3TBkgUjHnS9Y8F",
  "key2": "2ETmVEiKQfeUit6Ns7wC6NKmZtqWx1ddeDD565FwquHZva18hhRtLJi78E8DXV3PoAsGaVUKAv6Ygsm3JpUEuVga",
  "key3": "2WJpn7kba3e1zTxK3stxZT8XTmyGSL7h79fRJykvrjuVf43XEn9NsuBQKjMG2sCPd7S1Jhki4Hc3oeTCVkdQCfvc",
  "key4": "FahUY5p8EeabQYazLWdN9cVKP3UVU5hhRgmfyYebDk6nPYubBXHuANaQULGYnqP4HJUwKQmz4LuRozVzw4QdTHd",
  "key5": "PEm9qxZZzM27cRfeHKcc2aJzpu1xvtZGmpfVTFDgq2vzZx3kmpzr8zZhx3khNDC1zgbj8kqZC9EkXB2u9vwMQVw",
  "key6": "VgYpr2bW4DKrkR8JKhnCMjyffbAQBtmN543xzPYdtjkXr56BpEjURE48dy1jQ7UictYEH7rzcNN3mPetnHZMnrX",
  "key7": "4uAvaJf1Z1eCG7LaCbrRWq9GXDLWDG2d96DdXNv2HR8LZCGubY6nDZHt55kf5Eo3i34nmiJVcfx3E5JfMFwRe947",
  "key8": "49obi1tkqV4VksbBU6ik1yQGwnL7ay2sZoFnA2RKPSCmL686eUkyffofQg6LgKggwpWjpMjy6DCisx6BfMPFU1jd",
  "key9": "41vdztiS4VR8SQ7P5jH72xwTNswUKpTPg57zVWDdGxGz3AKjK97DRWmQmBe2xAMgM7TykfrrQWbFbc7BvtsbtT4H",
  "key10": "3AkVK5We59ohh1FBA7hyhAa9bkTRFL45kE32gLTRWi1FcdQW7hynwxkFqbZk4SCYbUiMKviczHZZXVfqiWPcZ2Lt",
  "key11": "3xCHrKBbH9dNuwGaUjXHcosEUjtQjLwq6M62Agu1Qc1hFBhD6YrsrdU8JWDqKdbVyMpv6AYxSYKbydZThPwKwWBE",
  "key12": "5qnhGd6Gap4V8e1wx2SDwAXmX4e9poEQGrV7SdFShHan42prayjSKKfqqpaHF3mo5Yy988aVtq7C5gXkFNurivei",
  "key13": "2LZMGuW2awjBfFAa5tJyde4YeHmZ2qojmBPwQpiJ26a6s91rkkPnGCoHsJcPTVNdvUoMH1TLf1fQ3Wb8jNyrmvdB",
  "key14": "3M5jn7ZyZ7e5LjYQGP2q8u5Y6jdwERDmm1ovtHvwDCE9pL3VxK9Hjh2VSgwbxCZ1XucsxiEQV3YcsXceEncXw5Dp",
  "key15": "53NEGWfdRZe8XiLQ3rrAtVzXRidvuSvbtFz4bUaFrNGiSoNKVuvhDgkc3F2q83KRqhV6uYnj1L6YPLuwQqfpFoYE",
  "key16": "3Z1LU5m9zCWMBKQmgaUx4rNp8toPp8doUL93nDEZQG8m3uRkG5FvKDbSw9hMFxtHvt4Crbs74rVZ9So6TVwtWMZT",
  "key17": "2BUrkfhJrpt46Zv8iz1LZJccYEQmK1haL6CXUwrwuHVS8e8Lr6oiYdzG3QuHCjVEDDB9nNd46c1KZr7759GkGmmU",
  "key18": "4qfYa9XwK9EdpR3M3V2UtkWdpYb2menseob9jx2b6ovD1uTCYjxvu83VBsmLFM2iDkX2ouHAb1q2auFLW6UgE1mH",
  "key19": "4ZJJPXyieGWPMjDkVXpfds3eMYWKen6RBUmZPjgunvSF6ig3otehM5VuHSSwY6y4wt5bDDgnCZcb1JkvdDZrJVzi",
  "key20": "3CaQQxF5YgdXuom9zrd84vP4Gnjue2nsiD1tA3x1mJPjXiPTpeCgRW8bNZWy79wQ6kaKkQRCemmvsqFr5J8Pndmz",
  "key21": "RnuA9D1R4CRc2LQ63FdniLgYNxCS4Md1yPtKAeebFfdmSFnDkdhw1yRggQECpQ7B6tvmZzhCWJK2vWodkec8uHV",
  "key22": "3URwm2NhYzwFnTgKB7uooEEvTNpGL3xv9KCcq8P6xvHkvBm4WAujwm8J2rvxWyNuCJGR4jJqZTXLgWjbsGn43Ur1",
  "key23": "8gBupRG5oGy64jvsK4L6X5gXpXXvkqTpTMcDpDTq1KeBREo5su4ME97rcE3ihCGbyqfVkAcWjZyQ3L5wBYHSQXq",
  "key24": "eorbBErgkj9RwnUAMywubL85mtnMnfJTMiWchLBTU6z2azu9bTHoy9AEJeLmFyBsNiqg3JQoWFnjsEuRv39tRvr",
  "key25": "2pyDLfvQxk1mex6gyjAmqez5BKfDab74USXHJ77hKdAhfVyaiTTqixrDhHs2A82HqeHrB8zXZ2Lee599yC1zyguv"
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
