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
    "37GDZ3GsLNe4gbLtgZt6VWKx5MjThDecTwf6NBvtQd7qBhTtuMJjBJNJNpxFCTF6Tvaisb4wAAiYMVuHn3nCJiXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puVzMQ5UvaHXgAEU7Gh9YCBg2NCrHZjaZskNyre33CxPB2RPgMbjThhH7K46crvweVNk9JtZW83GgrP7BsSAy9m",
  "key1": "3zQEWyCuPNguLL7jGkdxiYKfYUBDRYujYkGPFk5xc5HdirH5MbG77DkwhRJGenSnAZFKBrGMpmyNC5PfeYXck53X",
  "key2": "5LSjzzGorpfFX5qdiqFY2bAnXLaKWRwD1ipLFEERGX9adnj7wu56jGbQJkDydRAX1SSQhaahKBUi3fwRqesqwY6G",
  "key3": "4XpgPGov5qwY8LqvZUd1Qo3bk73kdSAxDsDo75zxw37dKzWfdWDTk3EL5iCnsTbjkkRCxJNdsAdDkgXCzdpb5WYL",
  "key4": "2pKWDtCrzH2btsewftBSK5KpuoEoVR4r5PxEkYn4NHkUDp9UuRa1S9xHv3zMTCm2xKpmhAv9MDTM75KhRAiLqEt3",
  "key5": "QiJ1oyVNYNxX25fShqoLZfDjCeqcFrTcRDuNFdsDSS9paUE2btuf7mtcThVq7iTMZ9Kt5HNqxtmxZ4LD67t9wTN",
  "key6": "s1wYFYfRcnP13DQVgmUBjkfVMcQSHqUpDMzjhrPjF6KfaUg8CF2PKfDMosxxPEAjKxQMeErMg1XVYsWK4U5J6Ew",
  "key7": "5S3shRn6iVdPJxjoL15HayCMXwCzHeU3oLTc3eHzjSDQwsD2WDSKjqArGpAaBzLy21GAfyY6cshWqhm3xN9Z68HR",
  "key8": "4ezWWB2niRTfpo6bWWMGcKCCE49QMN53LpknR6dBfk242vJWrRd5oY2KUmj18nwqfypGHAReDF3ba5tULrtUgVXC",
  "key9": "3npgUbm3agBsybwNCRY3vJHcMkyRhXjPkEkJ4EYNrZPV8v3EeiH7s5y9PG8DeW8SnhEZXhrVEPLJi4QWq8UA83mb",
  "key10": "3wQZ8fa2NgwsK7SLoUkYXCqAFAVHpXLUjK75xjrZfiVEkeqFRVq3ogQYmSq6hM6W7rQbofu1Hggfimr5hkDhWwE5",
  "key11": "4H2ajp3x8sMhk1MjAKaaPYb8AjXYGwKfnSAQAQUjG6BvLQXaE8Tp4VnrCCdmXdHd5cCbQqyPBW5ZCXdZ9kqTUpEU",
  "key12": "61AvbFkRP3uZNDtAuYe1zm7YTLdGk5RqaGaVCq4WZndCjMruHgybxWyjh8YPZFBbJQQosiQyJEqChY654GEkgqi6",
  "key13": "3xYAfPryK3UtdMm1u9SC7knBVpQCppqduZKPMXYwBtAdVgLXB8GeZkGswn7jvyYHf8GWnWVBrZm3Y7Dt4V4vbyry",
  "key14": "3haBP7DgU7KVbUxs2fQ8vDszSMVLLvMkrZUwXLkj3bq3HE3MpVWfrrdQnuLfN7hKb1zRwQsEwz3qWkfDgoNZUXPX",
  "key15": "5ihjHA74ZSPp3QXMyHGkVuf1WiPiFhqXHKcaRQdzF9XLfEwxKVcCzqXFM4v8P9n3SCSe2pXzE3ozpcV1TQ52yzuR",
  "key16": "28JTfDSwi8HFyBzjsCv4p12ouqwFe9kJpnRJnqP6XSTt4gwf4g2TJbwoL3BPhciGJ2HjoQVKA2E42nYczrv2E7pw",
  "key17": "3cS3sGpsmEsoV18A3B8Q7DeF7jQDKP8yBEu2QHm72woZosetU2T2uyru2xn7uhSDQvZSs1jAQe2CTnNWv4zcSS3p",
  "key18": "3s3N1t71FNAhaWVskXSgxDh9CfvDKiT4gx33f3pQ7MmTiohV8VKY8LmVrSvHeBadhrv4YxwCvmWzkfjsQE5eTRsR",
  "key19": "3DbGKUtmQRQftqfbUusRrRZSsuVcfMu8BJ2Dy1458a7YXvkj3oq51pY5ThUeCCH92QcbnG5Spi8iPhR7vgVtG5it",
  "key20": "qHdpKcknco1XfqrhfJUvmvFRmv8rBZhvsNxzcWxLAhqgbFMTcuAonPwxESWL15WJMES6K5jxYcx4oLeik4t4pLm",
  "key21": "41vCVXYgvqz74qyhLxp7UHS1WZZhKBVUtFCdGtafHQzmCsztbwDQYujcQYrAt5w2Mgcg2fwVf69W99eNqg3bTXu9",
  "key22": "3i15UEo6w8NvAALQRGFeRzCmNiSuvBabqA8TDrxDgaPuPoDEp9kv9yJDxxrRTXqPNWfT9FU1VHPEowezvcgGFHf4",
  "key23": "WJxQNAoA3Pb8CMLp4qysk3GPXmh9gGvX4NVR8xdCkNVQbufSSaS7RV9vGNeT1UEwG3Xv98qcBuk3Mbwnb2V7jd2",
  "key24": "2fxbsxVgaGytp18FPpudt3fCPQ97vg1zjdc8wKLmxZoCnFmc4V5FZ1HnwKGJkbuYBFuEPgJ2qWCqnLVR9c8v3xdT",
  "key25": "5P453nFipnBPuk6KMnakt1wGpHKAifQE1r3QimkmTQTg9xGcdrYiw9YBqcRExvKKkRKDGqVUhx8qEGJQjUZGaYvj",
  "key26": "PfykLfn1kiSPzECzJRsUQvfadB8jHTSofUEryUxUDskrTTGQnWDpteXhFe6YEe6m7Nj2UgA6a1upRVMCQquWCcm",
  "key27": "4gUEnfiYLFwj7J1455DcvNSbgPLHmDtQ89cEfQk7QPdPf5aBMUdG7yc1Jxt3ZzzTHQd6rh1QmgbFzgUPRMRrwW74",
  "key28": "4T8cTt8umGR94Zs2m1mncDZswqLVc8d9YfhW5S3ptBJzeFYhR5ffGNYT9jHK2qXzphBdHV7Abq6omq9dvaGkQcnL",
  "key29": "3QmYJ5URT9Vodqw7971h98HndveP4uEyNrfgsHC7C83hqxhDJ1SEYssU6ghDB3xeuMmLTfNhBUxemb6qbSL6BLjY",
  "key30": "4XLAAXUwEGRBhbJd6SzzK3ymq8GVsnjjGd25VwvE6syHtvEcV635iLuVtxWTQMHp52DDpjauQJ66doGyRiDHtJfu",
  "key31": "2mgf63VBV995pxoy4evqxYFrTvfWwY1QLUpiNaVchLVcML7gbEErwZgu1DmtKjZEVbd2esZSXNj99qefVNotCbno",
  "key32": "CSgrAdSfeCKWB1FWb9XE2MzN6wLpmvdkGRehWrDeWTGjXazC8ej3jWHmkqvW65k7Hy5XWHPScm7ACUbCthM88mR",
  "key33": "3jP7JEEB888iRPWFacSrzmCovxZ9SrpbDKP2GSuu4g6J3EUxiYK2HgF9q826vSeXjobrdcYgnufXKtFB1aoQZfxu",
  "key34": "4uweDxJedj5JysetVNWVytBHB5ybY2XVk1ynEg8fPKMMtk4AccGTTxUHDDbgEF2YFjZdhLqE1Wakwq9Cc4gGq1Gi"
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
