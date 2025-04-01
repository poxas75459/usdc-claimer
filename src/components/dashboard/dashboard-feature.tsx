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
    "c3j9nrRwdvCcwUkhw8VQwEpRrnzyxS9LSj7cfk3owQqeRgeiSTaT87zwwHkZHPs6CNH4QMDwm1PFP9ZhiVu2UfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywX6uNFJLK5zeZskJqpwtcHyrML25BeYsRquBaaWawcRmS8W2HYghwsg9RtbyhexByTabUZ2eaXPjWBm5uA4b9r",
  "key1": "5AQkWZpfAxNkEyMBVCJg2XguGys9sWgHtp2GMppEDwQGqAwoHy3BmyKC3n5NukXphQQPEQVTZCi7A6qRQTZ4bDme",
  "key2": "gsx14pqPMjZ7Xk7fxXUbFjBEBYT4qb14Bkmcy5NGLJRqGb4wSTbSh4YU5DqUthTNb8ZzMdpiPA44Fk7VV1RkQ7r",
  "key3": "2dthUWSpvMtbN4ddGe4KsQJkJdpgUsxPSKjQT9DiBXUcCTE5LUhifV7qUL1KxnQiTky5tCfGwqcL1aqEXmaNeGJL",
  "key4": "3gVsJd1CY8egUYY1y9r4FMD8rmWiV3xSDDD1rYYnGh1j5kMHRxqVcLW4VDhABjuEz1fjWWpBRmwo7fFFzNE86mv3",
  "key5": "3bY7exN51XAndB1qiJFB9VC4LnvFSjEkpRBjdWfAm8323tGUkncVcNWwB1fpbm18fgjwrRGaRhggd5oqKwbVoEhW",
  "key6": "5m5T7XuwkuEpqDmiZuedAfxab9S6TVefYCzbnBW8U8XLeNKaEzhbvoMpV1Mk3RuToRc6riuBjsTVhXVjMGSGLfCg",
  "key7": "3FtFQD5TMDFXpy2dZ76nAV2zpVmNdyFnTecqngaqAdNF1hhtGhdRPec3GcyaXHVCLSP7fDmjsrxDJpSRPWyg5NGi",
  "key8": "2GV49FEYCzccH7hxeAfWrw8jcnP36XPdjKu637fEd2SHC27y36fh3uArXkLz7XCYszuYqMcdGDnHzAhDrYhmpKFp",
  "key9": "5UxZqZSgS4fBP91LuABz8dCKcbM4bLRxQwm6L1gSuoVp34UaJ4w6dXupEv3hBwD8KZcsQRXWHcUDhvT8wCPe3ezi",
  "key10": "22bsUpomvDYc9DfVfAupNMnX5vduZTUnDmCLcHgSUdLY5BMrM54hXnjtMP1dGWkrXVyVzr5cQPptvGK9PVtmpxu1",
  "key11": "2yqmR82BUUC9wBQRkKy5Ru5jm5DJvG5kKMcs1XhWWJdgNAn4pvnAeXdXEsGYULwukPxyrfa4igi6N5nZKJJRBA3i",
  "key12": "4k3mK9556mEgD7vvRhjbqhY7R5dcbWThoGYW5ez1wsTqHcbT35o2SV52McyWfEbXqnDJjuebFVj4JdeAvha4XDBk",
  "key13": "4WAfgou6iCDDj6EZoXP2s21RTiEwgovx1dEk5utBH63BRYBWEuFrkei7voF7i7EQU4aeW6N7mwd9BuENEnu9GDy4",
  "key14": "7LdGzLMAAY6KjtE3NXwHdDe55hcRWe9bhM7f5b6PEcFTkDFSBGqfkvGuARPmx1x1txVDvLHBW1MeodxthJM5ipj",
  "key15": "2VLtKwgjTm2wNJAwUsNWYZ8h7ES14nN9qXwxRiuWhgsFvvDUaSC8CJ26xED72WSC9HXj3tFFu8JyTEjYqPp6p98F",
  "key16": "4RufMJSJjpbMHtipfqkSuy3fnY6iLwM1ct5aWzSj8JK5FskSpAhG5dW1CBjJiTbu2T8Ti2KrLnd8xSTn8oQByf3g",
  "key17": "G3A28Jxc4gy5fLrzxrvMZQ4V1bcspp84DTjqcSCbeAFnV9JE2LBJ7QjftXesQeye545yL77cHstiUQLzeeBxhBr",
  "key18": "E2RaBD6xMBpKYne9KWaJWkf4RUe1A2uB15BQiowoQH7e26ELbP6smF5Fdxwwrg2gDuHHGhWPRfzEpytJ1cacn8f",
  "key19": "5LCgyjy2WtMX7oV8k5cYaADWtHi8eoHnJgfK8iDieRAYFtafvan6JfpQvZYFAzgcHtCKaXPCfDov6Jqv3rqNxMMJ",
  "key20": "4RYvA9UFAkDwA7QZUKpkCEj1WqJwmvPBmT4p8Jrh99543wMyUzP3c51DSZDf4zkBS1Tj8YZgeSqCkj7YQnwuxssW",
  "key21": "2J9qbMAmwSQjnWAGFphVh5gb4teVEk9ufQuoX7srMta7G9ZsmspwQchSuiY1YGpBupyW9f7VGptS22EGSJeqLy3J",
  "key22": "5Q6JYBmCBEnz7Y6Mjzcia3mbo2wCAi5fbpwA5mkh4YoESRqxU3MS2tNd9dTfpVgWjuPkJWQF8Ra46pA3rzxHaxLE",
  "key23": "4iqdmmi8A8YCehTSEyjcbqxX7siCS1icax2df1tXimwDndtDpGn6MjYcwAi2ehBXNYFmJLGf2iD8Z1WFFpKJVcyz",
  "key24": "3ykdxkahAYoYhy3xHfYt4Zk98oSnNFqYgmaxKbeafGNEn4vnhnUhzWhq3BwUUSj113nGQgpA28EafrQRGvCVBYsU",
  "key25": "36mS3a3V71DJh4WWEGz83aRSSK4pNG93rMM3PXDFeCruggiMDdciD3pEEtTF9zDonJTYpxrN1up5hxmPpnw8Skyh",
  "key26": "2YcS6oeFpwjXT1fiMa25NqDkPc9PLggYj9nmE7t2ZV9zg6TM86eiQci9xu4KYwNBLFVyaiUfq679TVfGRRLFzLS2",
  "key27": "28GdoSmQ4z7Bif5oUVT9RP8zcyPTL8yQiLiGDqfXajspwEgfZrmz1wsgmSQFL92ikTenqHSnfccT92bwGcFofAbR",
  "key28": "3BCPR7553ZawsA1SR8pLfba4n9xsoYRfD2ofGrK7u5p2RM62Yaywbr7xjtWnfjdruSCKW1CPssRiarcnV4Lu1WcD",
  "key29": "4BPak3njmr9M25xSyF84xeDfyeEFs3SApXj59KyhLFgz4wbTGsHRftbDu1bTtUNG3dATLwKcUPqGZWPBcbur1vuP",
  "key30": "2B22zS6vRmRMVjS5oFEJCqDCipt4vbEDfYg68pZc4AFmraajNRvkZmak9mRws8jcfVXXj4Bk658KFutA6qsSc9fg",
  "key31": "3yw5qNVPMSzRC3nyTkBEBHxtPJjVYA1wbubf93gKg8gpuwoomRWbhgtMfhkujeQwMGhZXpSTMcQWJpUDSJSx4EPZ",
  "key32": "2Zixs7AuiutQUBjWsHeawjmYhVkoYLXoMRsYxWocR4r2eGSFdkYSwi83RB2wEqey4ZWK9FYR1aspJXmU8rLkaFBE",
  "key33": "42UHXqgtBVJWwguArF2TruQ8yLDx3Y9Bg3zXqMk1mbmjH8pgiUqLFyUbw694Vo4NU1axBMbZ9DPXd4vWEUKSs9m6",
  "key34": "34GZvwphVanpXMUJrnm8EwjifCtEmQXuxmWx7TQJTp9mi199Xmkk88VXeTzS8xUTofrXyZarrz8NJNfs5rZ65JWs",
  "key35": "sZ3xygdTcoTzEy5vXbJGsTjLN9gNHxiSLWbdUqg1mrz4ayEDovVznG5GE3bnDJPZQJAWSQ4T38iRqDV5WSZ1QUT",
  "key36": "4m4H9sD6vkyP5k8ARQYyiJZDhX6e4zpXAQbt4X4bGgGKY5PxfRdoZ8sKH93Yk3YaueGqR8HmBeDLBJTUuR9QZ2xc",
  "key37": "5caYXP5ySsneFotSXGUykh3PrVhejjFwVGmRJvdSpKy2c3r52xnzfjoVMmEyL4V1zkj7tzNfCDEUwcRoFu6rNAuF",
  "key38": "3vCDCWSTL3ya5ipmTHp1YLPqd2mZGWvYyS3vpkTsmtGnJpRKvY7fpqhyLd5542FjQwAWQNgFKiaUh13CMSiVgzMy",
  "key39": "24P9pyt1am3CXTEW9rhAWVgR1ihan5dL2SWZTznqqfmrcGQKYa7qNQacj2M9gyCujjJDfHvnFDyFPsKkbVKpkEKm"
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
