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
    "2PbKTcea3FEopBJ6nvN6zvL7vaNmrLi1ZrHP7gpSpy9eRR1V7XP7ig3cu7sG2VwJM6v5DBgbZ2Sewv9x3kiCAD9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7JDVvPntGNYoTmFeTgvp7PB4xYxtSiuhWBUqDCcjAoTd5XWaYHwpjze3uV97Cw2FBpdRVBrpGXR6vNPGZT4Jp",
  "key1": "2xo8WdYHnUKrbE22Ywrjy29Z1Vx7X3THPytoC24g59KcZz5J5t2xkyorjVSR3pom5241nST7di9vk5fe9L1tGsqZ",
  "key2": "5nmz4sUtKLEy77B4VM9kN82yAYc4jddzzVGoZqTMDZujKWM6v4jZ3Ctkd9AQZn3jM4p6Q1xheg27P96hbfsJJC2x",
  "key3": "3FhZSNh2gWrnM9b4EqtD895PuMSenREJgNosL4fTvD73tK1qbUADN5KwcnwXgwZGSC3CtFhTD5gnd7jE7Yu4BR5K",
  "key4": "5jKFP6dVgobRpMgJ8LY7s2o5BBgWzj5NhAe6VhSyevbwYoQz8AFpdzgt1gKJ5qc8sMRz5VfLQJp9J8cJEyiGKN6Q",
  "key5": "65Hjp9EPFKcZziMvjUNy7g6HugAf8ZaFnoMm6h4cJdcJ69pjunmNqMLm4ENR8q1zaYocNYJSqG3yRvviTy8Bs2V",
  "key6": "3PAzycVjZvzpbZrheEg5zCnH1mKcxtS9W1dQaahYZXNnUvq8ScsoWXW3hprRAS6F4QyfMv7fNiEe6bPiLHW2DkRG",
  "key7": "3QtfTiNQdk6hdMEqi5HyrUqviW8Ptt9KbsCb7q21TMEsQzPmG1ebf9fQm4yJ9m3xJCYasi16SnY5ZcLXjQw1RJFx",
  "key8": "453r47ocnLyKHZfgTKnnFbfJ4FdoDid58q8H8TWquK8gFLNrsZKStajiuPEYpWSwR8tacVpWigwY2EgcN5AF2KY2",
  "key9": "2SB1NYmqh1TQs3xxvi49V4M7CpqZGgSuFKCDGi8eUacU5f5hzmD7GvGDPB3n18Z9tTRT8fBXMewx8n1ZbjKwYusg",
  "key10": "5M54gejqxHkksPGTCBUMk9JZWShjfdNcAiSFauDH2VE6g3hsH7puhheMfPCw6boKUk8rs5B3r5hzy5jDDg97dcX3",
  "key11": "61diGE7bb5ZW8xzeWN77r6Ffj39dnk3yV9HdHTRFTNjxUcMj9SvYvRYVh5VEieZTGWLpQvZXKiFZ9SAJhGk5zbbT",
  "key12": "f24UDnvD5o5qY7W4skiCPPyeokZTb95mQDV4twvCsuJwxUVLQbCeya8kNSv8Gp3cdebohztd43TwMGfpig72keM",
  "key13": "Z73kuYw3o88gfwYG9TRJaNY13hzzGTkFF4UDRT346vdaSpCt4SGhQhpGWSrsRUBpmEhF5hoLt764cC2dbV5xbjd",
  "key14": "5tyc5d2cFemPhaQjTjmQ4WCAJk8TowyiESHk522GeEZQBmVwZDU5mkkNPLoTMLJemwQccvCUWEeR7FfZjYPfjasS",
  "key15": "3VEhxAZk2ZYFhuLdfi7V8cKHBaVvmYRF7LgqhTEndT2GTJgeNt46JYg27A6uJUy7kGBbN82wZgkoKsiBL6hnBqz2",
  "key16": "28tRmd4mh8LvS69k2r2MXG9VwLZmipDPgnMWWZ8mkYBtxrmtJXPkuP3aThqEVF3eXeMitBg8s2GnbHbEf8fsnCgx",
  "key17": "3QB6Ctogtv2o6MbrSMG353qw77bsy3vgRa8SdC9FNorKevtDdMyK1VfRHLgjnpC6LvVS2t3SPWL8Sb2wFwU7ugZu",
  "key18": "3UmQS4vFJ7yr8SKSgwVJsH11MD2D8zwZK6ukam8zUCxBBxwmm6zfyCex8vxwRcKrQaCsLo4tr4pqTfFSBnraQprH",
  "key19": "4pVhmRpnrfuv3FqJ6A1RGCXLfcvKvhMpL2qUsJKQ3M8NKVm7XfkQpi11rMqFbZeARczvXtMJMdSGc1CTkmzJEsKv",
  "key20": "5rSkgZiB6jxPWXnBeRydaL1grqDoKLKpdTfXRzgfrPQKCEEAymN1PNEysCbwN2Z4aBfnp1LA6TobQzc24edGSTgi",
  "key21": "3dfwDq9yHEVJ3UVevVT3U6iEDRkbgohzoPFM6gbGQTgUQ2s2WSzpTjgbmNi8bWxpxhgGcutqEdFsm8eYoEoxad54",
  "key22": "4XRea1LFs3RtoXqUcF9npw731Y7us2ecseyah7dgFv9e2HzvbGLGTAH1HcVceBfUEbWi1YrCfENQaDFMbE5TwHU6",
  "key23": "zpFRnRKCFjgHYksYyLw3JYfB2TCQm48oaajSBK1b62DuxKvWwfBMDCcfmoVN5V3ipTYiTcvjZDXXAdagQq7H2a9",
  "key24": "4RxDPYs9DjKwXuxd46gxkPacyGLaqnAR8WjSrNQysYkAC6TRStC98BC1iipBvy9JKq8eLx5YHPMapZCBzzfW7669",
  "key25": "4v3j1uN29uY82W726HAPEMXZUhVFFdjL3vKrcB6Tsw2odNcpoDBuQLpsbqmjJsuWjuC4bgAYcjK4DFcFqyXzxsCC",
  "key26": "EpUNotHpkwb1d3Kjg7BtQuE6CiBEW69FkN4YvCCnFSjmDEaDhict8MDrpo5YwmjcK7UgUR4WcHhLoLgvhcpw5Ve",
  "key27": "4WFG6kFkrUFtnixsyNUKa8L8vkYVfmGAb84ovshUjqkLNEZbS8iQkgZyTjzcMSQoHRFex16yfVhNr6AEFD5t587b",
  "key28": "mzjyDgpGGvmeBVF8koji2mMYcjDhoNbz1DxikeEbw2AQVWRYasT1i89RipfN2CigTFGmrLrZYP9fzYZvRimAoBy",
  "key29": "kpDSgoCn1y6u6eHDBdTg5zGjFikvxLwW6qunJvkZTiZoTiYv4oDySYLWQkCQAvKUaxXHXYCLMRV5QnDY3VwjmcP",
  "key30": "2d4pQNgupk66UBqB9u6aNWwjuSx4W6Bbyc1XCA3qa9YA42581yYg4Xz3gLkgQtSk33hx756tza1dszy3FhF4iCNX",
  "key31": "3kjWBYyxiNTwHvUo61XFe3edgiHPB2jhcAWqhH5kpiezRz5n3refKevdaHMPa1qZ5C7R7V6bzzEF2jycK55mTZCa",
  "key32": "3Y3t8DqEYZ9CsdsmB8SiSBP1hMSopg7cb4CHRTxcrLBigBB5EfXQC5CWnDAAYZ7grGm3n7MVFgHGaE6HmT6LMkP9",
  "key33": "49BF7uwk9QiHGytu3t8gYkaLXZn1yuyEjw7PU8CBJuazaCZNoQ9zc6FNG1BehnceLSfxYzQNsq6CNs9jRYbeFoXo",
  "key34": "D3Fs897UebdJ64Yp46d4E7ycX14zrhi7eyWy5z9dJf87FiUQsQGBSvM5L3AJMwPjx1cuTz2YtQNGJ2Rw1jHejr2",
  "key35": "2uwknD6JKpBB3cfcEcxaz2W4PLCHK4fJB4bFPePJ7St9u9mCMAATo6kjaTjPpEWQnVsvKUskB2ZZRKL7iPWDwVwx",
  "key36": "2yGq2eK2pJ46o2UiBobM55xysNdDyDUvydySVE5ZaWVAgo2Qebm49svtrG6bMkEhrRgCMNmQPi1iBeuGdsNuoqQU",
  "key37": "3foJ7FVFo2zEaVmyUQqg2bUGuyMVLoEUEfU56aSJjA4b5pUGUvZTWV2dyCBzHfKDURHxBWEe7J8i6ZauF3RCsxg7",
  "key38": "37E38h5foCVorK3ddLbFFmWkjq5RbYDSZVo4tsx5dySpqruNQUqK8YpDx3K7w6X9UPebJttVy7io6GYJX8hRJCcc",
  "key39": "3vMZBh9dmAhNgjVcrigFNHt9NURJZzZhWzxqPrXmw6VCbmKNk1hcgsgkTzrhTK8TMxQtnJZQyzrkSiLixGbxzWp5",
  "key40": "2VheA86KUym5ZbqAohyVPo2r9df2TdxAv1rBA92DVLuDSQKq8n8KAtX27tEk8rvNAuguxPLMaPsuar1gqXUKpNix",
  "key41": "4RxLBZhBCiD1HShZTutzBdxt5VzentyGn78vpNG7WwHbYZ9nrvqwQpkSb2H4gHHxJoAcjtBBBv8zrreR5pAAWzy2",
  "key42": "4UjMUpzjCo4JomtfKVabMFeBesV8tQhqSJjXv3fXbzFxHoD2LFwY9G1wx5CioczGDkX1yWsttQnseh4onoKiDRz3",
  "key43": "31BS3j8iwz5LwcHNjLXgwPUHEkTSGh5HQY6aGfR7KfMkNHSSECRUsaNBrWhsRXTkr9WSyeAHeDRwHDXar8PVpUYY",
  "key44": "44sDkHmrZYWTk8UfTfEfZHAs6wHfpqpJzfDTmvcBhVS17GWvQhqcNb6CTB9YEbCmessdxrhW46AMiLb8Pns4twyP",
  "key45": "4MFsENbhafnrzurzsZs4PR97eqZYQo8b9Hr7Np6H5t4A1gzRqpMQRNHNFeFqXTyEb6EDCR4VbKSJxnLAtJcT9Hnx",
  "key46": "3grzEEhPM5h9qATcbSxMSWwJrzYiuGU6WPDp3hmTiDXxp9AQ6AK2JYCmMuoQTBVsDBN6mCCwC9mjX2mQooeVNxhL",
  "key47": "2kZTrxkYvEByhVNhPpzA1XcQRQg3R17D6iMAU6CS9WF8kK1PpbRBWqsQAkTSZqptqdfhyWg8p9BxahPbCtKyexS",
  "key48": "2SLNNYpnjWVuX6NfW4yUqzeRZcCeuy2w2N2NJg4XMADwuyjYJKR8UhQct2CgWoxReXzcNGqmhgjiMtZvMNQZVUwR",
  "key49": "3Sc9sBwHj3RRfZdDh4p9S8u2T7vpsGE6gfYbYuSdEhjxAhvYzS6MitZ2443jSY6QaP5kyecn93oKuCVRFUKxi4MN"
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
