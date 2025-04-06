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
    "wtZzxAeDvJWbLEPzo9V1woenUzRn2N6GBiVRPud2SwLMHGFGdhcthtRmzCtsUFRaHL9aRt7Jkvmmidm1mHeCnqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pskGhi78oKg1CwzsFnuTHqZFth6mfizsnHyrRHYnTxv74xGbxHVAeh1yRfBe8z4adFjr2G8KFsSs9rCRp216wur",
  "key1": "vzyEbsD3dsNysWGGb1TofcCeBFkD7qE5QoWGRLdhT53atBy2mSMpRaGJTkAtxnLVYazoFm9TcASzXqe5irQCWvJ",
  "key2": "EyivoyArC9fc6XQJGZpmbpGEnABb3LtYS1K2KJPufAiuasMB6gRidG5qWA4evHm9d2HryBGChnTvCcmFgsrDYzG",
  "key3": "5UaZHyhobJssKsaxcjzoBpAGYZNpzUVyCt5RMEyJvs8L4tNXqpQ74cFWbPVTHpiRkGMXD6vgi523zQSAKSnYAiK6",
  "key4": "5zXtdzbuasqAFvzKMv7a67Cb5cniz7jc2Pr3uWcCfd6aXLVZLEBL6R5c85APfcraDgsjK7tHEEBT9DwPbJwhvokh",
  "key5": "4YUdJnUgPQvWojepG4bA4rPuqEKAmbYsJSHYugzXKeJ5T7tY95fmgWRESYTHp4MzkvRsV52iQY74kwwEdMiYLffS",
  "key6": "4Rb6m34cLTVXzyEU2xfv2zUTurLsNT4Svy8TehCNQBRwYRcAGiedZ8G6Ug7ZhRBggFULa9fcbaeXoqU6YBhRedLZ",
  "key7": "3yzEUr9dyujtsDXxntNvomasnvmK5Tfbovo731P5Zg99rJo5PE8eGRUbUB3VeCXLck6FytmrGmuH17b11bEpPTFw",
  "key8": "4VbN4oGvdBwkiegw2jCPjENVpZHwcr6qKMWc1yh9wQCzoT2427MpUbvsKPGTadYTeUKU5jHhpyogvjX2EYASKkJN",
  "key9": "5VoWzGgE5Atjbi2yNyFPYb4uxKW7KNHkXHg7buKEqkDv39g9pZxkLN2GrykMNaNyyMvDhqDe92HynvHiXBEY7Vg9",
  "key10": "5ZKzvTxXYdcLhUdcvG8Tfhw1EAvjKDQ2z57AcFNuF5afw1o6z2Qr1UnzHngd872DafhAAJwabyTmMw55HmqAntHL",
  "key11": "3VspHDPQDHc4vQfLarHs26nup3QmC8PZ7eFhQARyeEXJCyC1LRWeQHVJ6x8CHGvLno42Q1u2Nu5P67c1ZkV5YUyn",
  "key12": "zC6feaa2PbuVC1SekGX6AinTehLDerkv52jQBpDa181HDASWeWDNoGSaSoQX6aZkF1xGDkGtUtHUsbrgpuCgS3f",
  "key13": "8ZkJMWiETY8fGXHFuctT44xv5KAC7HsnGZpjEGuK1j9UirRrA8F2i3jRZGuiQH8XRrbXs6JntYeccCdBpp5L66f",
  "key14": "3kJRPhkrosg1byR2v3DJavzTShZ24wxgLuMkAkWA2hJwqC4AVmtfzhnDkAEJFtJLg9WHAqJAH9iV9nC3oyPX7F6P",
  "key15": "35jwouDW6DF3rPaMM4bag7dALXnNShvYh5PLHprrP7b1xvkGTECVqpb2toXfdzG1BWnM9xs9993bZF2GMkW6Yx3D",
  "key16": "P99f4m3DgK9fLcDrwVVSSxgaaEBmB8KWRiJqBASuCHBySNkgV5FbL3mgaSxWiCRnZ6ZLbmFYJiXMvW24JWFo1Nu",
  "key17": "29eKd3fYPc8m1xgvNXhYXhEZQG8NM1UyHxbhZUyEshMK7aMQaH1sYE8Xrob713jgyT3khtWa7wirFYzRnHuANn6n",
  "key18": "5TUUJeabFGM47NXt8TXve22QuuzpB14L4h46amjuLUMVG9pHoKhGpsPF2XQEjoam1dwiBtY7nXJfMkXG8FV8UH3F",
  "key19": "2wxRNy37LdbndwFf7k7DWnFZkRzrK7rVStogpzoqJmbgkYxe2HVQ7DoKhscHDx9tXt1wNvsmuDXyfgNJRzm1iJfH",
  "key20": "3Vfp2qe8vK6qZ88eiPQfGn3Wn3vQsfufuqPffXLTgETpNPJGFdAgw5CfRNJHgxUN2JH46YpQ7s2Sd2TCthHiFeyW",
  "key21": "4z4sb96jNyuUyszQHjCs9X28QTiqgUnEdZ3eRS6qeLbKiZi1HugAwtXhBJaJjgwPRyxVmkZo2xWcWbQ5LyFTkrkw",
  "key22": "5BL6i33sDJ2KT7jQnd5hUYo8g1cuSFfTSmAAVadiY2ejvqjAMV812TDbktPXQ7p3BzpxCsW7xEw64GuMyQ3Z9XhV",
  "key23": "aTNAc5VhchFjg1QKKVfeWByrFzQLQHqxLHiAeGTmcp1v4inndCMq1xsyzcwfNCut2AuropPN7XqFpupWRcH3aLG",
  "key24": "5gqwdMF6xu12xKjqyyrZ6cABPM3mFgqv5G7FKpF7zh2xhhwBs3TSL7p6CfZCYZjqjSoae3r3THsrdBzunXRaJN2Y"
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
