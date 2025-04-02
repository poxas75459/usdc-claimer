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
    "4mpJWbELLKpVv5rnP1Hiri5nbs9vvTUMjkQ3zEFkNA9qmXdM1cp8vx4zLpbhCBvTuGQdiZPrB9KR3Ar5FNehLV2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pcD8SbRCegCUeek9FDgxvUgjVXp3nhgSVps88qGV7KmYuSA2z1gCaAKDCPKwWEuLRvEvTVmnaFbzpKvm2QHsXtE",
  "key1": "4NaUdRfJUMxnFCJqbTpwboy7pK3uTnBHu7UT54ES9zGuHn3ht1KmERN745S4bbApKZLVrAPeRTrrmQEYdAKam1Hg",
  "key2": "3EiJ6wMLyhBYhbiVfEKa3YaANHmTvSXqjHxzfPauUHkRLGJk4XbVu6bewTrEA4my64urmP3NMzT2vsAGn4AvNc6k",
  "key3": "3PGMZr7a1g2H7U8YXgUWBTmG4gP8dS3F1HhngWLqc1kbbjrH9LTHZL2ukyX4Hzi4wfDgAC8rSkDNSwVE4bnd58ZE",
  "key4": "3ekBh3diVtSiZPWTUT5u6orhcDVCdKfdwv1G6frmFtC2KyQvLk71SQ6596RZ2zCkNtgEG1974nbuBF2WiL2os5ZD",
  "key5": "3dBbHun5AHRrGgxqxmZjzrznebUgcPkfa6GpkMTXFZ5NJtipN8E4eNeyax3YdfgcPz4YPenTxTi8aQJqwxvBPeo8",
  "key6": "L6dRuGv7e7rhszmmAA6SEa84yM6LQBmtZmUvkfRdDrEbGMARQfUFMeYLjGvK7AydSeidcUReZgwa5G2dRbQKZ6m",
  "key7": "4jYSQxYRvGLAaxGyz6F9PLmxD5zWKB74pNPtXB28Wyv8C5U7M7JfneSEUfBW3xqrfziyoH33a2UjuBp64ehi81mi",
  "key8": "5nFBWZm8H2fWRVexRAeuCT1Ta6qUnV7C5e2UM2WxMLDT24WJKQjroa5s4DQczDxNRVRbZrXS6MbwfMLzjrxYrgTe",
  "key9": "3j4sf6gHxNVctrZgqi97WLDrXMK2iPoJdr8Lz5Ltx3k5ZysqNqYLkpNz6FdHK2UrK31gea9mar3MjKFA985FkdqB",
  "key10": "2YneTFkhNAdnzNJpc6Tzw51uP5CrqsduPrxjCVvt4Z4QGytmKEDCgPREwHQGFU6gB67gqyT7MH7udyEKkrWCZFwb",
  "key11": "4GZoTT2jTa8qpkAK7BeiLrzjr3gAoezhNwQ3qtnx82PevhuqenXDStPcizPHEg3HZyfCegJHk6cWQZECnyyYiEHN",
  "key12": "X96dNQd78Fu4zycZnvRzfqmJNtdk4mSNW8UoFbZJNfFQqRA4gpsUe9HapQx9j2AAyDqALPnaD9c7X78nusotetx",
  "key13": "2PDEntZaZ2pxWetk92Azkwqz4nLEyLukwaH49ADGR2Vybx8AwYqbh1mDRNX3tbesQDDx67Rtg2LttSCuxrCNfPZo",
  "key14": "2vEwrqvdDzWfPtZvhQyEKsnmdyGKDg7guzybG3uexdxcMp9QKMoBPnaJE2u63mBLk6q9WVKDtfi4Aqc1CGMkhUtS",
  "key15": "UxgR79orMUeJof2ecfcBTh5h8MtNW4Bdrujj5LiLtUkcZ4bRPCWWbDZxYfPFmwE6NA9mTWWt8vjg8rsebGj1dhi",
  "key16": "3B9czvcy9AWJJFEmSUAo53u85rTZPVLbttFE4yPq3di9PqBwZCGAtNpSDvrTBquty4QLyjdY1NqrXTbnRFopDmDN",
  "key17": "4K1ffgdkCkxGmSydLzFaCUvMhgw4K5btxU8Kb5HoDYbiaZXutmEMUfRL62H55NQimxcJv9cSrc2qbGf8WZwtQaQo",
  "key18": "3oi3ZFa4YeADBcaARXzx1GXG6v7xTAURcMSgKk7MFLySM2HrrbWPMYDAer24QB1VdLFDY5rubA7hKeJ13Vi59Vpj",
  "key19": "2oL6mLHgdvWqgoD8Wnzg2bptwmqadzK1Jwx2TJ3XBHqPoMYDAWYf419bLeMDJy5i7HK8H4XJy6XfkWfpxyhZUznQ",
  "key20": "5iU2dKyG9dvQSsA26xiZFFB6tdHQNNzik65dDWxYDNfeAssM3TvHz7GQrYVUUM7a8AhPQ1k3ZQMV9dny3NHasPGc",
  "key21": "Z3pvtHA46ecEav2kySqv7rXviyt3yAjAHLgezWy1SCEsLMrxtj2oUdT1xHS7MRcHPock9veqagkXNRS8TpVRqFL",
  "key22": "64YJyhimQCA1WhC1WGhfkujrSFcvt79HLXVxGpqf6onhxccLNBaZRb3RU4haFN9pT8B25E6HaoybEvrDnCuMcL3h",
  "key23": "3TRoneb3nRJEQM7jdB6Y4srYqZgkt1rKbK5PjC6bMKaDtci6FkVrgQ9ndmb7ZvHMK8HvNxpbNJ8amzcgvCK73VMN",
  "key24": "PwqWS3LQNihCmw3VSJLPzpUBwhneZWuUHLiztcwrxgHLbbTPAKzX15gzZeQBbg7hVCBavYExu3JNeEYgiEYaMrU",
  "key25": "4JrV2D8fNxEaPWSgD9B7UnuYW6rzmHeRtXMXbg9asQ7Eet6Wz4F312ywmTyHAFpzGkokmy3pPPt8JcsW7fBS2BEx",
  "key26": "514tact4xrVScHGzTzLjXzomQagNPZJBXrYrNmUFJiKj6if6dWGx2KVHBChrednRMPPAvnf3akSHF57QbwiGmi2s"
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
