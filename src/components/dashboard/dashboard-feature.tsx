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
    "25aRZYSzBKLU5n59tKx4t3pGfEwuDJamPF9ccZLYKorkZp7mQwUHaXV3DcHw3PG4XTKcpEHJJ9tYAKNneBGZAaRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8wamQMXztaT76FvKqHNkpkHyXDnJaHSh1cGBfBNCqjEZ3haj9w5i2WTPqG5ZG49GtrRCyKQGohyNSKajvfi6JE",
  "key1": "34Npho2nbkuhHKNE6VAQ2ekW5kfoD9VhXNZqUVoSyeDWatee2RiTA8yzjbuKPbdcoPQnMJDeeSH7aEr7CCUPb7ay",
  "key2": "4Dcw7wNUh5LKgWPiwMhiP4KKUEAG94kXVp2tRMQPE5NBPwC59J9tUB4J7eS86bDv81r1vKxzjSmbfhMEhBkYcvdv",
  "key3": "3t4LuLZdxauSwTkjUvrX415qbBG8Zc9NfT8UqCfzSZLDXc15AKrK1HwhbuNChQ21JgjZ9MRQz5Z39f7sjAU8Zph3",
  "key4": "2skBTVea15Awsxhv7r1HB7xcMhJZs9kdbqwzSyJGMxJ3Wn8NYSxqKNTc7s45ExFzrKcFkWm171d5tKfgWYAS3gYE",
  "key5": "221b2g33maWc46aDcq58fcTdBmQ8WVR4NXv6EcUKyQmFftqCBqkPxmD8gHdno3yH7W7jS8iBXu2rYUu7eJXS7MA3",
  "key6": "545qCBSE5dukUbwRjannL8tDrZPERLcUZSePs1QYL1hZqWudTou39WU96jsaXXoJZWwPmFA6WYihdeTNJFpVa5xq",
  "key7": "5FuBrHWYJfkoWKRddCXDajdv4CuRPM6Q37AirKBjYyJxGwFdNejfyuz3e5SYx7nUeDbEikNWiaMhEM2p7XTHe8AX",
  "key8": "5snaM2AHqhkqUrR62ZEE8TW6SbNfiKVzhnq8EHc94y9sNtNatXejyZrN43t3uTrkoTibz9rRJqfCM6LkGcWq2DfE",
  "key9": "4j1jCjtNYsmGx1WAUiWSrRTscxaz5YUe9RRoffoVF64SUy7SrdXHKbX3uNueuiJAi4wL1NqocGCcwP7SH11Lxn7y",
  "key10": "2RdhJwRdGsV1gcKP1QL8cSDdGPa62gNMZpanKAFAdSebnNxWPv9qL74qoCqV6aSjJjQxhMMwe8JHN4EES69sLEiG",
  "key11": "WsBcSFxMggS51p9Tz3Et1gHE1iav5wFGWxhDFu9RcRcZimd544S4t7D6k15cjXXPTxL75PUt13gKXb3A8MzdHNe",
  "key12": "4Tvkb2BsKukpvZiZipbZAMYqA2DHkJTCfsNgXSmTUP3H8hQ59BuzeQJrRVXVCXWKyWJVFTuEpbbH4mbXXG6J8s8D",
  "key13": "2YoP2QmRgjDFSQ6Tv6VV2y1YocW7CGRVeXx2nyPwTrBByfWwGDSYZtVAaCWtFZXv36jBkNdt9WN71cyu59V4v8rs",
  "key14": "2yhWWXDnaE93bbLmbJDYKkjNHmLKhWDLm2Z4j7pTRjDgtqQdRdmDEotA9kujZVwqjkhq5uGot7bicgtokp1rTYrC",
  "key15": "3sdoJvEYDzBigFP5kQyPArSBQ4XXvdGnwkZdpEdHbhWWruH9pGMGj9ZBEVK5zco8V6RyDx7eK4jb2cNxgQAh2ywh",
  "key16": "4bDgeRcqb461SmnXu81X1yLAFZdo46UAWraJcs7fAR2pRY541uMRyz3fNGmT4bewmtFRm4j3BaKgq7oZHZgYBgZb",
  "key17": "4VstXQmG2t7qYrEVjRDaSorwrYNBe1fKXu8euRga1ByMhFN2BkcKMNPo8YJL6w6mQxYN93zmXdCHFeEcy7U2xgKF",
  "key18": "4XFefhFxxSArKUf3n9BUKxZVCUYccDE7xtr8hZ5LZQa7X56vYs1tLCGVG3F3G3jfxF1pmF3jgpVHSkFcJUAqffZr",
  "key19": "4GgzRwDJGrS9hfsSi7xwAt9M6738qj4CUzC46rWBq3u5jiz3s6R71SzZ1mpBTMDA4LravTnfEvtav2GFe8yjEfEy",
  "key20": "267WcqiGDB8UhCvxEZUNdqVyUbJjvdkU27baUxJGtiDkER3o6CQLU7vTEef4vD7CvYsGygM1xWgGHn3ieRPFzv1E",
  "key21": "vvxWs6dc1JWN5VcXbspHUvA5Kyc9R9oDJ51A4KhvSj9SRWMB4Grf3jNtg7VwGEMPr27ugCSseBspJLn1JPts4XJ",
  "key22": "GZ1gNAHxTfaEEBpekGURARHfzuvrxDk74q1F8tcjJhjssggVeFQqfJWY4prQfAx8AFSWNVRh9TneULd2UNyn5Ep",
  "key23": "THKZ4gPst4Ttxt8sZAfJiTqB79dwDrJfWBGwQBnJtUnj2znrxZGL4UuvzfaKHNWmp9z9iiKJgRzqsFKkW1CjJhT",
  "key24": "2cwNe63fzxfgHf9xGvkZsgG31m8QKPMpE7nQVrf6tWCe5F8QS8AjBdAYzPQ6xjbwJbGh7eeRwqRUSbNzHRPaF2ap",
  "key25": "65UZADTvzaZSQmwjYukuJKMpFYm2yg7xzrKpg4mASNRRwp5oa2XxHhA2nFZtGKEadn7pYLPpkaSJEYUucoxr9EnA",
  "key26": "43s2DSd4Z4YS7c3JV3dnSV3DqwgoyAsX86KDGuV7basZ17zjB3bMau8FYvDePQ8XjPvbTau5ZXEtiWw512VaC4f5",
  "key27": "3rDa8S7ZFenLnqk9C8B28dJ9ABNfvwuQHJnVunBpdgo2x1oBDYCGoLYotcL9wdx8ogD1PdwFWsKiJYJz9njJs41D",
  "key28": "22TQsjtBC2mNKwvTay4Xr5wpRdPokL8Vv2LU9hVnjRj3J1nFXTzCVdCMTcsANLD78xySpt3CVDAuSGWx2BXhi7YS",
  "key29": "4cTx41HxTpnQ5A15dj28R4jMn14Hf7h6vaPAnRfMv1LqFdcEReUAcaCkFewGwicuhio9MhoKEhymP63FMUx3iFqL",
  "key30": "4NgAYjRNqq1mhSizHJcoJMi6JjUs6zMBkJGjN3ufPBQCXCgkyqdQppKgBxGqBLmM3Q1R4ipEWkFqYyj1eqyC7DH8",
  "key31": "2njj3pme6xbcLtw3seYuFecvRvZwzXKgQA1jimWb9PYLiEBcDHT3sjGLq7LddAEdGp8qqKWiaS8gFyxmusuVazQ2",
  "key32": "2dEsBpLqyPQTygxXdUnkJHoUR19RSnzhe2F2hSDswT68Zed4RCE9U5aoyMMrmHDeEAtcrLeoXotG3gyuGFyS8JW5",
  "key33": "5ia4BjHaxw9DBd19iqvhoCBH2eP3XNgmXD7Pn89ipoLTrDh2qKNTSkB8c2Ab2KGe4wFq97r4FfbMMo8xfS12eTaG",
  "key34": "575HS4CPULU8diKri8gXMjKWVeF9VLgKMzX9umrHYgVLUt11xKQyrbbcaHpwCBwigZue4K1vhfxVP9E25UbZyUia",
  "key35": "32zemmHsB1LVEorHyqTJo9Zdk51T6cVJeAervKd51zHmNqwG6qKeoj6gutiQRDrUpS8uNwn3y5fbBEwA4oYDMKmz",
  "key36": "4L6sfJosouMFUcVH3pfiteXkcaAp7HNs8x47jvhixKTGDEk4tJQDCzgZSfzYhKTgNWBzMcXEje5V7nu5P2DnHkpH",
  "key37": "3gCzvmsqSBT9PE3wQ6wjayaiTQX9MNSXq8rxokaZELtBLD6CoFbmq2Pos8DQ9ED1GYUEFZPpnZtbh9rLhh7pFM6v"
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
