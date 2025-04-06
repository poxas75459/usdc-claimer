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
    "43y2fc2UHQ2cFTpJxUG7dkCYriTiBn6EQpBNAMsFhTHSfmaE2WxgWKDbJZT4qk75Kvo7bttyemt48B7JRQcCMs86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVNuuf1uCqBeTeA4G5nwCWw7WdX4CPLieN9W7QkAH3pTTjqm4mr45EQmfgc19BwjgNw7DqHzjKPSy1dVSGhu2DB",
  "key1": "571ZP4c4PHe1zeoFYSRF1X8FUpiPpQK8QPFLbRyxrp3Nto7KF6A1XRdumdKEScmTCBK51Qtoaitpt1PWCYkyFzkc",
  "key2": "4WKuAX51ZLq5pKuuE6mmBvt9Gdu7bC1QiwfDRfAZ9y8xYc55xbQqiB17r2XLT5v7bzP39pgkR53aeBUK1WZSQLuU",
  "key3": "4J2CPRQXzT2ibpoyvXR2HVequfuqFdbPK4L2N26djun1Bp2VgRZe5qB9iok1fmDiJWjMVzYqV4LvM8M9iJJ988JH",
  "key4": "2iaf9wqknJxqaoSSGdtFChUX9uYWeuTNvCP7kMo4PgasWx8dtmii2MXWWrJj5Yzc1AUSPvjvkUoYgS8sXWmfibw2",
  "key5": "33cCLzwxvuqLvS1XWFpAaBXupoWVcAL7oqwqVpXhWpXV2KGfdV2SPPTkPe7zLkLtYF8hGEvthsHwvwSTfufh94BL",
  "key6": "3w1B6zPugVJ8rkoGJrLCgqu1GQuKgynTy3UjBhBaUFxszZhoAk2YqNoeHNMgcfVrmgGCvzjrnisDtoBCimae3WZ",
  "key7": "2rAdeL4H4dgeKUf7WKWXXzU3VorZmMwucqSZGoLie2a8F5b5SEjSUQYX6S3of22hQFNef6k9S8Dqy9KnaS92c7ds",
  "key8": "2qX8wDRWSAGYV1WWN4EE6KH9Ewq3bhs3YSaVgVD4n47UCeEKugqtdtUzyNZiaqiRwE2wZXC7SAyF33qULSJgHjx4",
  "key9": "3V3xfH34rYQ99svi5XB21GKbPXtx3xmFQaSYyr2FsqSZQ6AbnmuAwA1R81X6HWzDmyQCgaQh1VHDCN7Cjq25ucR5",
  "key10": "4U12q9uhwsuN2WZyJ7hJ9wZWzo5JHBLieuP9QwKrbDnLqHS3HP5AdVPfUtKW2Q5FVWg6faVeEFvEqHWeFr3N9ms",
  "key11": "3kZJZLkSceGWAVTnG156tADaYgPThLDgt9eFHkPPyCPTpTnJBFr4TFtsxC4rNgYy1f64HJq2zDEjuPWivzrhdzty",
  "key12": "4NR218qU2msxZH5RZjDffjANewCwLxDysTw9G6e4wyuPrtkrFe95xt95N2a1QcnkLZ3ftvQVYvc9DDftp9ZYkFzt",
  "key13": "2B9m1f6cv7kCreFTcngcyUc2M8GHDwXZyhBSaTS9RcV4bzSjsnBDXFfatedRCMgruJxPDU3kcBKe22tmsn2yCmiG",
  "key14": "5SF18WJRj69vNUAwgRvvYX4XaN9pmC3bWrj24jz1vELXXx2T1ZBN7t7EkZ8wRq4voenZsqS5S7rnEP1zQw9Zm1PW",
  "key15": "2Em9GzrM7fbxbn91frvpuCQRzctVbciDhbFa4CuqknJ7TRfVpgCRbG6YDww5fYyuWwxTXfbv7My2nLyNa62LRuEj",
  "key16": "2arrpJpUrpSnEPDwjGVctJrREWD5LAmyao4xUXN8KAJhjmzremS7MwN6yr9hu5z1mxvrEAGWBrFQ6qH78aDozLhM",
  "key17": "tzHzUSKnYpJvbf52RB1QbMr7gt1BHPLjJDVCKwa6BeQRURRPWscthQqh9mvMmi1qsFjWFrP9iCfH5MAAAR16P91",
  "key18": "nb4GeTmWveRTLJ2RFusNNgCbQ1rUpqPowteETYDo9Hfo28HeaarTmbRJ4U42EATsCWE6TbPFrjDXRSft4es266P",
  "key19": "3xBuAWLEDYTDfcrGZZynEKjUFQo56H9GSiLAQTaaoRc9BNGqz3GSecbjQKEJb1YZAHHZG9Vbz7LbbS6jzfK6RRox",
  "key20": "4mTW8RQHuzxxDAteLn2Jvwzyb7spxUvGGL9MZZDGdzqj3sjQc7cVPNVtUUww16sBBJi1L19axgd1weK2EKLHWErP",
  "key21": "2jYuf69EMyn1hJr5tUjjxdwmRwdMx6H3DY89zWmJ7vVrtsxiFMcBjqTH9zjdXbtDN9vRxb7NP5VD9x7yXAV2SrMk",
  "key22": "4cNx5jxdx1JrgkCeXH2vTT6aK5jXBykwJvkpToJ9FYC4wVdhJai4LbEJNGArkpjrLwggomPDmC2TRAQjw8PwsxSu",
  "key23": "2gKECdP6ZhwSjhNvHkXpRgrcET9CaLz3VJM2X3UrJpBnGkhpJEtb1qHU8T8w14smscLL9AHZqgEjGTKnQeLjaAGR",
  "key24": "5Ds6LsLun9ZfXFwMpUxAyubkSiyULFBiWxz2eAe4qoKL1zrrKTW6WZyg7wZruEAJTQEYcHqi7N3DExyx4sNZuu7f",
  "key25": "5CLecX5zyMULb4QefvTqvz8iCjWTfYc75CRKEjczDmTGAdVBzXQkbFkzcKXgvckShQ8JVJR4j3STHz9gRagCSwoe",
  "key26": "2bZ5tEJoafYLkqfXQpou57VLpD7HzHfzf9EAJUFavjgUEnUtUjLEX7PNDcytJkw6hM6aSRYaedBUjbJLBSFLFPfV",
  "key27": "5a4pz6H4dj3CV4Kwp4mva6FbTyteruq7CZqher86JZCruCS9Gqs6buKFL1kNUURotoAGNeJW7myHQrPSXVHKwyrB",
  "key28": "4vtocANGPDk8Nir172f9m1KiLfZyZxjh1fjUL4mCePboHvCe7rSWjbfgby1skYbjTCv7w4d474E55uJ3UrXyAbeV",
  "key29": "jymJ3rrasd4VVPacWEL2hBXX7EWR5o3ABH5M37bZPoiGQbcfg8NMQho48WYLiHG2kZnqivNVZXcfdwL1RqLzEWU",
  "key30": "3sVrmQEmg2NBDBqFL6cygVQqrUptBtYAsQfd33NG4YVDWzQ2uDLsdD5hqskGTHcSdxa4x3mGtGA7aiJbHw2E9sgH",
  "key31": "4dWSEZcRBt1edoWDAkNDrkwToxgN4g3ZHLAL1jjH72Do7Nh69VxL678RDhjQvSrHiyhBNWoK6mww1FYhJ7WTbk5Z",
  "key32": "4SWS9vUn6VnZPbwX4eAFZPRMyMZr1uodAVcpUUbSicj4AeP3Z5pzuLasZmhznLdVAZWoLLRM3Sf62AUCSnBtepNU",
  "key33": "3vY2Mx4VSQeeeTXvNszMefsMZN4esYcEFio8nXuJbBGezDeoTBbeEuoyAe3Yv8B9ZHG9MM5FDQF7ARyJPNumVbLE",
  "key34": "s7ka3yEo6nar9HqabW9X5SvQ3TCa62AHmXjzLEnQC3wbjdKvy7dUU9vCPpJqAFt4Rh83NrzHQ8R4WSK7Fwy79mf",
  "key35": "5JFVE3Pa7KAxYJu97BeqJiBfcp7ksDTmPLTNVrkNu5ZYvkp78gFEfm2Bj3ouV2xnfWPCrXqw4AKDNyshDroheesp",
  "key36": "2KZqz6mH7zdWataJvVWyocrcu6cihAf8oG5ysV2RqA9MNTVJmJSWr33Jz6hMQsbg9sZoqFjAPtvNpvrZhMjtTSFJ",
  "key37": "4e6DWdmca5ZRd7E9tetdC2aZMGSywE6UzfhBxJU9DdGWn2uHEjX9PySbdjzHM8bdjREgQMt4PQFjaHspbacrsLb3",
  "key38": "2eBe1j2XtMEAYbiDbU2vz5hzkju9vzPDY2288yGr1ivknriS2MUEVxofK5tQBgz6im1CMyjmYJQD2acXUqQkwnYn",
  "key39": "27bXKt4LzNuN9ZwEXA68LkiqCt4yLy9FBPDUChn3tgzsUtSmcK2r6zL8SEaXaqjzizsuuME6TyQBVjwgpeiSUoxD",
  "key40": "5xrS2ipHARwvPotSQB76q5Zzn28sntCTo42vyMwLRHs3ixiBwMA49gJAvzN3ALKMUxHoNUY8uRGPh1U9mh5tCujZ",
  "key41": "4AF27ojtunAX3aDmunYisfhhWvaPXt52cZBw29rwoYYYfLFazhnjQ3yT6faA8ULzrhZgYH74cgwRWp4QKiQyATJi",
  "key42": "672duWd5JRgkeKgnZja5ML5V8uenyaVAdzu5pp4pi2QerRoLwz4zNNAvXWqTfr1zrq7zMR5mFXZssZ9ryWSng9DH",
  "key43": "4tc9Nwas7Si1VKCztonR2HMgV8vqcK1R1sDhhW5ymKZaEuLy2pvrrQms3mR7EgW6sr4mxJtmErJG3BLj3jvUBF9W",
  "key44": "yxJJp3dsmcPAj2LpY4xdXZC6P9prEcekfakdH4aFiGpck1N3Fc7cCQAxmW8Ghg36XP2oFjxDGdW6ThueEhiWmAs",
  "key45": "4YftoNya3uFQVofjku2S9tsr7wAbF3ucsQy4u4GmJyTRL65SLaNYJR31bEnCtod1BtzbCzmMLUBaND9gbJryBycR",
  "key46": "4otTgpmijEJzDAHaGraf1RmPM1K2rwXzrXix7BhkKeuECyEtWK823KtUVqwDsaokZBppyQcY2ijAiHGfszARrh7N",
  "key47": "27CyTLLn5Y8tz5Com3XGX8rT4n3cU7ZpDuyv2aaRR68zm4rCRo7cXvRWNXomEnj6u2aXPzm3imFV757uGPQmXhVm",
  "key48": "4bbzztSyLdFQevtEsZEWJH8Psy6pT82wbtZDAgL3VFqBedxqjPasodpZpmogpBagqCqFz2pg9sjdQ9ja5t7iaFmj",
  "key49": "2BAvriC9vJZ2wT99WXfq3s1o9stRTQ6WKD9xk6ciCZSX5cKCM9A9X4wpacNkETcPv4gxLKyAWCFQNioat6GobdBU"
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
