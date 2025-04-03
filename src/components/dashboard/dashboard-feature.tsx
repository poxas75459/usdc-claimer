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
    "3adhUV6ULnvR58942oAdbxLEdnQHy4aavgT4EF7G97mSjyZe6oqfSSyui5gDDsWWYgL2QgqBCmDmPu8T8Astuu61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpg1HX4o5MxNnN8VkRT8JKEBQpxkCzvkDwtvxnUpheQDqFikmKToqZxeVTtYipm7NM9TGoT5iiLsDcKJzsWhRRV",
  "key1": "4ARjjfC65GGf7TmKm3FozGwAAdJFoFUygK1iJqkwEFSi6y6r9agGVEZpNcsAjqzZ2VXzupr2f9XH2uoGENz27VM4",
  "key2": "61Echfcw39C8j99j2GAxy274GqJgPjFDhD8GD16Uk6L1fqJZDbdhqT8Z4iTxtsJjgbyQkvHhQP8BikAaUzg4GEfc",
  "key3": "2G7eQP3wW7166ZikxxMEg3sKZZkUFXUNwZjnDZtaXtBYtNZKt5aZziMDVJKc31m4DdseqioBbKt5guE5Ck55dpmp",
  "key4": "4d2DFWbPy2KRuEn45dngsb4oUd7DU1RxkmDmNEdV22MWAEvQ4wSb9suFKqixLEJWR57UjTen4Rx5LtWMS142DxiD",
  "key5": "4KFrLzasmWbTxeKdnEcjPbnhseK71ciEkzYQeyi5eZDyNdRExeSzmPBBzjQUndfUcu23oV8jqUJj3hPSVopp4Qeq",
  "key6": "2RKswbXNE1rtArtd7Z7AgfaMSR8coNPaDvyStha5s6jCvafgFeuqwoM7MAbPBQwZxNSNVmEKKusmWrxzok4frQYU",
  "key7": "5V9Bs4tsCp4t7eVweya1X9m7xqLSM7unc58CSjhGiWDP8ZoDN3iaGU7EGiZL9M8Zqn4sWw8q2Dw2uhH2F79KeD8K",
  "key8": "Yi8Y2D84i4K2qs9QbMoRBg9Fa83tFncf5LioLNVLzhMw2a8P6aGKTEpw3wkPY4BbP6hgFUkoTZ6mi4DP84gTToE",
  "key9": "2rPhennuVRn7Cgmn6nw3kKSBgfVXtEQeDCNyVZbVNMCh8N6hBthmBd3vJwdPezv3UKD2rJeuUfXQYDnxcRXjzGpx",
  "key10": "3fR6x1UuFYkA5vHCbhyjpAXeQBG2k4d3TZUE78uxMpSfg21oDV2wUk4VPgHyNVU4cma1yRH2aMRE8nsJ374mHMU9",
  "key11": "TLHsMhpSc7FhV75GRKNzQRRDPfk986sXsnEWBsTyB8WFiL1mcJVXH8HHKv64TGBMyS3jabCmNtY97GCN94UwjHy",
  "key12": "57jFnUXKfKBqsBp74Hjcu4FBXeQkKcnxTExH668jdmBJfPfaPQ3Z2y5v1oR7tBHkVaFsptEWkdSWqdZhUi5DVXVd",
  "key13": "2c7n4AmugkX5k1cgwNfxmhWp7ZPuz3z5i3YUzr5dgXkP1kuD5PgGdi5RvPRvNfQsjWKoCwGgUYmuT75R1JZrrov9",
  "key14": "4tdbu3wKa5ghjDKbeefuYV97gHAPTshRUiTzuZVWvJvn6HP16XqDfuyi4gr4TF2sFdSnc9NAE84CSNbThs4NX3ib",
  "key15": "64yxrnzMPmoMzkUkEdqyJHs9iHYfyWvVCum6xqbHWMAMBzY3kyGLZTgiBch3tMQdqsoqD3RbTPNHx99iA7G3RHsL",
  "key16": "4VgTzPxRENwLQyXJpPA1N19yZXHZEdM4BJXLi2qV1kcrq3DkTNzHVCdryMhqawvUMRJ3tvYeL24ayQqbEF9rHq1V",
  "key17": "3pvQpKinraXeC8GpkVaiKZkKTW7U3Cg9W8kNEVugjoGvJN1ucqg9pY1n8Qv5mYnGeyiuVg1fVU5i9yAmUgJq5MQi",
  "key18": "4nutaPrdkY4o4Ujz39NCU3jXjwA8DuasrPhmWQB7kFMnE91AdVwAHJ92cdxYL6pH8aDPkbjoCvykG62WhFeXt9Us",
  "key19": "c9qD9p9e55yQgtyGMLwHuBFiUYBCzPCtsUdLrYWC45Jbp7u8bhQEZxCATqL9y5eDHH9WcvKbb252AsHbhuYAMeX",
  "key20": "351ucY8qXkwGumt8wH7VPHJCXN9XPGEe2cLDVCL2NbYZMH6bniiK2jykVrNRPrameSuYiJJRg6ZCPmzw8Ws9Ugz2",
  "key21": "4wJTkYFBysBh37smACSQfJVDntxGg9gJYi1VSBPK1qyPjGe1cXUuwwhqPgvnBXbkXCEJPvM46HKYzHtxGEf2ybRr",
  "key22": "3ndbrxDMDkmNZscBmt3hPFBEdKRv1c13RTTLMBE2Mm4agoQEbSPM5Scez375RJcxK8XFvNc5gPiR8PaLgrLjtfTw",
  "key23": "4LwKJRiNDTAvWCjRqDHzV9LqCwbxzggFcAvtvaxvPfvkKyZHsc1DeE2z7dCtEZasB2fcFSuFQEYTYqqvFad8wsY6",
  "key24": "gZ7k1uvxA5Gd35C6YXS5sh2ohDCNAWdQVZQ6qd9Xje9tqWcUZdsvUb7KR4HjfamqUYvwSmTpKMeLspHDLmMEFsc",
  "key25": "5J9F2DHLCKMyegLeVfj9ZcWZYJVanJb4uNAoP4HdGEttXeogwWri9VqbmQhiiEmAfNDbby7CKg5tanRiteWJBEFo",
  "key26": "535fYQ1tHe76bLJTGRexCpoha2yvN231HdunZbqTf1fePuAXDg2R2qzcWMjZzdJ95qVteZron6Qh29Px3iusnJGA",
  "key27": "8CWej3qyCqX5SQhRq77iZhURGKQYAPgwp5FTgmHSLDSrsBnJyrAAHKSMefA2jmXaNmh2jpZEfWwHGmnqkXWft6X",
  "key28": "3hMRLH9P8HX2xwaGwGQbMBMjBMfJqro9Y4vULoapvSwJC5vs5UBA1QcvWPZcTsQrx5QFMNo6SeXhK49ojpnEZayo",
  "key29": "5dy9YAeVzikt5PMwsP7HCW9zVdn1Y2YBrbxKTw5ZV4vYEQ528z8GnySWPzgVVKGCYEYy7JdYM6VqRLhXNkZ5E4FN",
  "key30": "41rfYiv1a994yBZNDR9azXE2Zj6gCMtXYNvis1j2NqZpeQba3FiGbngVfByRExEKAzZLSzoiqe7wA2Bb5Mu7Qi8i",
  "key31": "hrN9xzbGkCuzx2p1Dq7RG8XPKVrZGT9pGW39yJFppDWfDg1nnZowCxbN1URXThesrxjngC2ymmz9h5SXCqqXyCo",
  "key32": "34o9P3rFfEFCBjVoHkn4eaf4gyyYiJ6JcYCdAQZeoKffngWHrtX1QycqXDCVKphxTuQyGP2QqNJwfZFnyBU464hZ",
  "key33": "2MXzf1JTP7GbhFEPVtgsXxGwoS6ota7SdVmSTicSt8NHedu9k7moLnr9jcAjrk8QusT7ra1XNqsGGotWJe6pf8eC",
  "key34": "4yvSsc7gd5YDb2UTU5bh2xCSdwTzZdTegmJ82ivrgfHqir2aPTdyBvLH9eeCBiaruqMSirKzpHszymdABHj1zvpS",
  "key35": "4hThxFQnp2LeyTY14hbz6Gu5a4GvAmAgJGCKmgHiCU1qCgiVgJsPqdQudXTibhxC2zJSpt71WcgEA67mUapVJdEh",
  "key36": "AiyuejaSgzHzBKGYhKVUjrJ5b34QhpDezH5ayyWpj6q4vAQAsmR1cxCNLjZ85mu53ETAF6ZunpoU7Di3WP5MZbX",
  "key37": "3B2hdGGajSHe1jcySZkRpswy7psspe5p7NyFSCVNN8MRSedvqBsCV9nmTsCuFyVbXBTZhPKjGvyF5AkLMAUvuTet",
  "key38": "22u6Xr9G2oQCFrAGcz7rkR3d4fxG12gBwrHDh5jvMwjQf8jcgq7WtdyecRWzx5A5qmiL7Qyh4vXomutXen9Z5ajQ",
  "key39": "5qXojqTUExLAkoP95m3UkNVLQ3NWtWWCn8zD4CfVScY3ymMkQXrfrhLjjw8TVoJkdW7CWxXZVyVyspixCVzmtjQd",
  "key40": "63UMg5MtecvuBzeDwEGnRtYw837fbT6oHVXcaoe6kNg2bkvsfm8cTdSEedPGur9fRMW2Fm1QWetD7tpRMyWg9YBw",
  "key41": "vkKuJH8xV5GqnFyCCD9jyiTWBQeG4JGpDykEBkrx88RM3J9jNZ7wYyTytJHyTrawbfCDgAFpydVemTCrmSuTocH",
  "key42": "48AgmjPUfZD8miGN86usmZQQ1QncKsR3cG2oqUbicbCZJy7Jzghd6qRyqr9oiRmwE4qDTdMjsgc9E2zj9p536rkw",
  "key43": "24UL3Dzeeu3exDBKHay2wenkK5xgGnZDrHzHjDGoAM4Vys56Z6dw3rXcyGVYZnx7jai4vgvmNW3WoJ77ULQzjfmN",
  "key44": "3S39eHBSpacjYxpb7MckTgaMjGiP8FaBKjQpRtZ3wHsHzYAfWmj6PwCZTaiPfCC5i8jTbM7b5oGn8kLuacs2vVvC",
  "key45": "dHECZRgc7ZyQSTPBucQpbxu1wMKNUngfHGHNwSfMf2FRFdZPsj7t2h7dSV6C5t8PHBnZsa462Ps6D5FfhdsZWe4",
  "key46": "2VyEgDymvbWL7625pNKDZLNd4NQcsAVtr1NcqsDCVSe3YJZBnwQJLxi5wUT3T6kJ7xvaXbwrUrMhhouRhx2pbMmF",
  "key47": "9VF1c2VSkw4b61mkiBoz2uQt1dkaCCemrfpJ1p9tgzvEfAnwqwLPY87UmjHkVmPC9aFXdNFbuder9WgFvrrN6Gu",
  "key48": "wBU1dQc8n3FgfHyvy8TeVciKHowjAsHp2s42XBJdqCdVWyEbVdb6AbAWTMzWfYNVianZ4rm2bh5n3wfxsibCQQ4",
  "key49": "mcXG9Wcxb8AeqFgkL9WKD5cDgEWBYdUpb9MhdVhCRHmsnqdtn5kLA7c61QZQTeeaNapX918mJRkB81icZoAWQPU"
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
