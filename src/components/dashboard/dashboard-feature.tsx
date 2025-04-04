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
    "3SZF4k6RwNQrKQ9FQdzArAukfw4vemBGCwB7Rcseygfpbepa4CMhEzaxQSmFnszkt5bb41BoZVSWemYbMkAyxaSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cETbZJT17DQwSfSVWToVFw3Vw1b5Hzy1HpPzu9JGfdfY9zRYFPpkM67SmmQKkmUfuQbdKmPafLwBcid8U6Rhgz5",
  "key1": "3NkawZF1NSvQ3j8ge3jBPzu24Bg9jA1TwabiTbFkRmfUAnrzbkxAqRUTYDWy1matAUjsuuBRJim5o51BxBgWCjqw",
  "key2": "3s8LnWSBvrZk2UP7bi7Fr3gQvikvZDrF5nC4KtDJK37dMaQYhtmo9qW9ggfYCcbvcf5uWepAA91VgnBXGWsztdYr",
  "key3": "5Xqwub5QK2oDv4Bpnuei3kQLng81nUpD8wPKqazSifCUtUzsEAaYLmAK375ZPPwgLiJ7joJNhiBpGK7TFJApUJBC",
  "key4": "5N9T3yZqfQwMx7DHESFdfpaBiPLc4fKs8Mvw3x8mEbKCTJdozqf1NFfjnSVmYpL6BN9PjaBNtnUSTMX4RqmB8Hxs",
  "key5": "2PTkE2UWtbma2d91yyGZH9EDXAAfn58EQCQ4iyvxFR6YCVC7zcdaZmyUcF96xKDiYcPk5gVD9JShn9USma4GxWZ5",
  "key6": "66HZ23xcL9RujJMkUSZ8VWE6CkXHPmGNPhAwWSf43tDjtSVezDZmYBxgGKqkf7w1odTPJjkCeNwJTfTdZJXY3ehZ",
  "key7": "4WEZGMjao6b7zgsWjEeB1mLrSpbynm7rd5dKHTMWMPZKKCdNHTuFLxedKEBcC33JTMTRFi9gbdwPPCqZwcXfVvD8",
  "key8": "2hQR3LehTCYeJRgVUwPtmnjbDwZXpz7q9GeCzsJt8iPHGauKM3vFf4JAEtcmMhgtmAaeFEhb6zmm8xCsJihg1SVe",
  "key9": "56YrztNAbDcMhDSDTgpg8rdy14aEf3HJM6RUqUmgp61sVR1Fs6DMvxXx9Spw3NbQz9dGAe3gaDY1EppUzrJV8Hdr",
  "key10": "paGijV3BK7Mcz5518cEY6gYAT3AFC16gE75iMrL361ZzxmGNcKLoXvdubHxoRt76bbY4yCzghGVntnJyRZKx6tF",
  "key11": "5vcSkmoz1THQi9rGdnEuDnp2C1Zgu9Mnb4moa92uwXmiDRydFALM5Q5b8mzKUA1FaQ5tUBiYaDPUR9H8FUitutDm",
  "key12": "3foWnZLFh5MMicMMkzy1GJurrc5tXsoKQ9GukA5bPgJNDKWoVhSjUNuaywG5PcB2z6TTkX4qRcRquf15f5GHuQcf",
  "key13": "4fs7FsXvZGUKQYN3sMgW5n7f9J55N2MwnWY3rrCa5yYpAHY2zgtkR4nPzpW1U8WwSwY6FP2jA7vXm2hBTTQNGVHN",
  "key14": "2AWYhjA7155bjg7NmKsUrGWtFjJwvAWAvBspd2JtfhzBvvJyv7h2z9xbCAAWLUaZvU6HgTVcy9aatStMQvvxtDXT",
  "key15": "3M1GfWM6YSU4sWuf9iuqURsddAzXrGuU2jAQSiVkokB6ScNeqVrJvu4JecKr94DdNhBf8frg2WAiFeUaczVAR8YM",
  "key16": "3N6LG8nDWHeVq9VZBd1C78xmwfJjphMZBK5CVZwrRijAaw2guqR9wRKtb5oUHNWiHX2TUF7hBedGcpQeYQLgXu5R",
  "key17": "4XqRfPqQ5t5PGW1R1MbmcfTxxwW1eWbeYBhTnzxGQLR3SvW2emUmoXcvESvHDecVBfZ9QyFPg5EQ7uSTcm8kZLok",
  "key18": "3rAcjnW4rAXBtChWRavWLN3RVHiKTrYV5coeQXnrEq3d46NRB6UhbaUcStEPCBMfYtaRKwA6pWTey1n56dHPZ3bU",
  "key19": "2cjRdWcBkTu8GuUYsCPrTuswW5HMvUKsYJS6ErAwBeQQ867xtLsTNf2CcRwe46kZB1svYyv9xc3YJpyhDLc1jK4n",
  "key20": "37WMztiHZR22PGcm8MMz7SUTLAgcaynoFf8pbCLdzBji9Cyht677UwxAZzCT3WsyyyHiUPet9DanhMjJot4uxudp",
  "key21": "2xA7UkxiRdTpETE8h7ZkcAHTaqa8rH9tGnnKcPL4FHL9GJCPGDwy73d4YoxHVv1GqkzS8qYFZ5jPXweNFFdASUS7",
  "key22": "3nfpRn5iHbet4PezsAhA1XKesxhKKeAoF5A9VJ73WUjq3RE8xKWMhDT1C3TPXnT28W3EmLvWqaAkoSZf7Aw7S49K",
  "key23": "3weDKLWQPdRTp4HFgDAmyux1bRG6tbr5k4oYLqmQK3bpeFChBy1MUB6VhBJXUxbY6LpxYeYoG49EtB5tQKubYc6S",
  "key24": "3vm3bmjsUu4aPVi7yMtyr73onkbSR7piqgPRdG3SiV4rwbHg41yhRPP2W8b7kR8aS8Y42y2eXTAisM6swPgMGv41",
  "key25": "2iRkPfTM2bW8YxyVaYZAZXKmKQTViMXiQwYZ8YrZxor7gfVQgk8EGe8mmMnSAHXswKoNRqbqoDMkGJ82USUF1xGL",
  "key26": "3AVGpieGxN3y4NWSiAcUSMrnKB577rguM42be9pksnLp7Ftz5x9YcPCzBiDKEuDpxVUEEG5wpntg697qC9JEkdoZ",
  "key27": "2RFWZxYcg68ppQCi2GDnS6FUt7yabsyd9aano5k242cKWboTmBDXJtmChJt7d8aMNHLHh9K8yjqahS3vXqpKpK2H",
  "key28": "2wYQa5Uzyj4mEvjA2kFYBfKbY72MgDwWWcf9qntCZxnVZWuij5VGYriJDRxKGDLwsaH8pY7SVH3GQK9sRap5q8Ud",
  "key29": "5CP9Xart2n5QtnGuKzKWTYbdEzsiQKs3qXVSQ7zi2FhK7kmpyX8KKnNzFP9umwEvKqoEZFRSXUXpkPhbp4G3XoPV",
  "key30": "3ToaXT34HAc2fEwMk6L2KJMGXGCwLHsVTCU3zXeTEhzZMrhrkbFcxkDb51ChAqetJmiqzoVCwSUiMsmA6ZftkbPt",
  "key31": "4e6pU2MKEJ456jJg3TDi1NhdbPoqSNd2tsfztwthp3HjR8nyPTuVHVq8xZksAdFk7qtx38fcCJuwevs9dkQNEoNN",
  "key32": "4252dyBpwBeYhj4JbLNUUkPrWK8TvdSGZeG69wimjVb4fxk2UhVU2WrPEbM86UyKSdMKaChc1nj6rtXReqGsipY",
  "key33": "5N3SKKTw8SyZB1GSGEvdKQ3woJVvwWGCUfouUPyGJcqViTQXq5oYfj36CPhNMCSYZ6itwR2HodroRS9ShWEdnWpJ",
  "key34": "3SNfjrbGVZJEz1oUeNJw9G2ffnDFkRQ7EgRSJF9EC21wpKRgPnyuDKQW4yUz4UTWH4dyBdVuJccR7yAciSp9hSmr",
  "key35": "3pprudg7nCW2RMkgvFpUNxdsfU5RW9rUv2QfFfLLH68gyyrx1WRcHDeG4NDuKoubAmeyCZCm391mB4PPJdS6PL6X",
  "key36": "2Eemu7UL3FPWedmz5iw12LK7mXGpd48qEy8enJmfAhPyH9sozJaghgHmzjLe9rvK4XRpAq12tMhnusZwTEW5r3TE",
  "key37": "4H8voH6JZJBSuC6LzTpY5PfrsCNMouAgnNR9FMpAWnTT93Fg8NGU7GwGWtA6PsErLG1JhZ5KtUcBHVjr23cNrTH1",
  "key38": "3nHzefLXwYjSgf8LYQFaJKNqfauBF4FmKTtMcueYwAy3dcBwc3pLLY9ZyGk4gGkbknwf24cXx4snrKNdRJ9E6TXi",
  "key39": "4qNs81MkjqyLjSm8A159W5VMH72w5u66isTqrpvbdX9taEo69MorMFwD3byRXtJcxFfKDuQ2AebFrYFpyryyeENZ",
  "key40": "48LtNFRPPYJEw97Q5JFXD4VdtQtKQHR4wU6yDHAxcHfgqjPG1MES1jVAdFYASCEFGu1ShzvmRtgSBVQuFURt2vun",
  "key41": "2QF3spcE5sSkxCUX1Tz25mvMhXrurhKirW9xxgw6s58Hcky41UYFit5gtKGHdFSNxXNKfdFw3FX5WNzK5hKFB1sB",
  "key42": "55fm9kc4rDRdGV3e19QrdSMV1GTvLSnVtxzbgLFV8j9hd9KCUMYvctih4WHsuvFAY2urRtbrcDNVFdXi29oGGrp4",
  "key43": "CfRjX1sEBeWzLvyX8dG1Y9KGsbRYN5g5nsGbAvXT9M8MuASjMzAFx9d6HhbSK6xQm3HGDhF2EX48iVaDNWzih28"
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
