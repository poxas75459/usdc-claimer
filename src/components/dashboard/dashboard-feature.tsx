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
    "26ohKAbD5orVtAEobdgJ53NQmLuCPQ94GQeMtF9dUPcVPB3LPjh4AUMZ6B4AhBYr9YhmbfeHftGSuCsmG4xoBFGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYQPd7AanKXfHudzfgqMYJQPXb6vKqPo16rhQFkfATxeb9ntcdBGieYMtuYPTid3KRVLfTs3EwJ7fmncUJcN4iA",
  "key1": "4HxRfquYVgcuQiHwRqTF3Zfkf91gAD36hwZpvQiVfmT2RukbbpP2MLxaS3UcGxZj29y4pCo9N8keanewy7fC1fCD",
  "key2": "2VsMMQk3Ps3ySJe59d1vDbhUZ8aSMGTSkvhnarzuNqvx6WmTot1D1dXdtPYw5pAes8aoNEk14ZTgF7NV5NSJZtNM",
  "key3": "243Wa7TnKcs6mvWgU2ou2fK4zVqNaMjHkDCn6iuq73oThRbNoND78rDSPQzPEkqGX5dT3vtGZWMJD1MpytaM6jMf",
  "key4": "F5q9EWEVLhgcsmevcttYr21cQUvdCWRKGnF2QdsLqkeBG53HssDnX8u52GZLnqU7e4RDcob4wfvJYqdgsjmJ8SY",
  "key5": "67XzqyyMyBADhqXLTDxUEFnLhZ7mBAGU5x5r9vg8TuZct9Y6AYoDA3Pk2EmT977Sbf2Sabifdxkpn9mDoeRGK9gy",
  "key6": "eBfsfpsECqYRZYJLcxmq5daACpJL9cDgdndLf9mL73G2aTFAnxad3RigRY13fHhVUXFY5Da68h5gkgFjzwa4RAs",
  "key7": "oLZDsvVS2TRVvq5PeQZFnSTneXMKCqmk3XTDQTCnXrZLjJSWPB6mtY7ZFory5gGVdRJVzA5FL55qMG8dZJTvzXx",
  "key8": "2YWJ1H9wePCR7X66PaJCMknNJqLpePSzMhZ4PGcGQjWQtTLxZC4sjzMSLUnkPm2H4o4WCi1g8RrBnKbenewHDoXR",
  "key9": "V6ok64Sv8kKATp85zBo42ygZBWGFFcXrn4BNMxjtjyGx8Ff5C8tQhPjkv2WMZpcp4quyhMcq916fz76kWbxjbWT",
  "key10": "3t1ASLQnkPP1Fj3AgrGyaceHaBSMJR1o2G6J1JLfwZe4Y6WXJgmuvh6WYR6PPqMHKLpT9frqyHbrrcDm1CodUZTz",
  "key11": "5FSWrRrYvQNfeBsGxvx8D8t7RATc4Pt92W2CLsmD6Bssf2rNo2HHbhHjczbVdZM1bYaNeZq5sbykfDwaxc4BacSF",
  "key12": "kpgbkLo8ujB3rfK2RfKpyWZvQJfxxPqL384kc6JdxAi6KiwPTNg4pptLjCUZQQkRxM6zMw8Msu9mRz4ujyYWwyx",
  "key13": "2RUkFA8VWYo4fRU2RkRBRYJzgdjkucZQiqKK5CwBYGHhTTrevcRrJQm4TMe8LHZcytAnS5Z8GfdV1c475tLS3GXF",
  "key14": "3we9SL3HJAkhEC9EUDjKYKn9rS2mCUHTyQh9eET2LkTisvHqd6WzkVcat6mSdARFvyS9RiJNVF9bEoZk1TUbEgUp",
  "key15": "3JVfoAZ33jYm2tVa4SBFoAXYYrepvyu6ThFTwAEJ3JPD4QLJ3xHHYj7Rk9rS5zfz1cGYg7N5nx2v1rLxmicia1iL",
  "key16": "3bHEwJf1uwAnAiP3Ff4SpmCvy599ste1Jnrzjehnbe6WYApFisEiATzacHUtPMbZ5neiCGnss2THSg4CVgWqDXDi",
  "key17": "5FonWA7WRFMT7sShy8udyAnuY94PHBQt26ij5jrur8PXXAPAWaogejP7NA9cT4y5C5M3MEm1Z5nELkhosBMZ9g25",
  "key18": "5xkogQbmDvtpzhd3u1bjjm2LkEcWg9MH4M5t6WKiFoVv9HDq9SZZ7Gn2KXJpAyRBfL1D3vE8RkRfNFEb1uGHR2du",
  "key19": "5gjP5eYHxuKgXSiMoJiuFbWfhQaUHgoybz5i4hS8Fr7S3oLciKpk4LgyjbkQmmP9DvcXZ5S82XxJ6DU9M81C9VPA",
  "key20": "3HF4cSi44347JpWJfnQCnSyAGR9TaixxyHT2oqhnk6CMVgZHpVrxmQCCtPu5mLWFMYjKQbuLJps5rGt2cXGFFtaA",
  "key21": "84G64YYV54vqAiwVtvJt2YkPELua2cWz4nm1eXLX15muJjVtx4eV6SViJ9Ja82oVv7b1GNgKMPhLEScFJq8UCgt",
  "key22": "5BLU8CKpEcXzEdLC3NNWus2RtS8zirqTBjwsUiYQEcMsEY34rGEBrhqp1AVydVpxEcSq6CooqpmyFbZaxudthhRV",
  "key23": "64Hv7RD1WPK9sKAuE14iKFF1S3fsNzzAJU2WKZPz25Qr4uhTdDCDbcxBmjcCiEPFznN4DMoiqUprub8BLM4wFE31",
  "key24": "4wv9TWdMJYjFzuCJtpdCeNgQw3MSPXCB7agi4pYfPRHP6iPnBDCgNdBufxVvafZaaGfxcE8F6YhcWJu92aeV2qs9",
  "key25": "3hQV9B7Rrts1fyNeTwkWrwrXPhk9hZrfWSeySviMBa66haRQw55Hjo989MeUFKiM5J4UJbFd5uKcs4YVgup5bpGW",
  "key26": "jxkErJD8NXhDfs5rkJEwxTercM66KimFKXzpYNxTsZLSh1JGs3bNbgGLAzXMeyBbrWkM9tWVycs9atZLE2Vy6RN",
  "key27": "32qMoFpr1tdcZRaENuLYYZmuRmyFDJ8jGSCvt7Kby3DsqZ46f9KFAmFGXHsvUH3rRbWsNF1deXuSpZ7uYgMDuQsm"
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
