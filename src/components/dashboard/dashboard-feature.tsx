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
    "4v1AoG9iubjyyPgPexGLJ3gipv1YXe4CAwmcTff2s2i1DppYocUVp6Nu5vtCfrZK41g9Y4uwLJSbxH2P1cznMcdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUCKUzFBgV6K6KUh15TcRsB7KdCvvtkefrm95imV6uKKTfLQeg7y7RHriemaZTJb58a6r1xuLok8UKFKe2HgoEq",
  "key1": "VeYr6dcwihHr9YfYbpg7G2jQpsaHZXabKqMm6HUbryGbupFseE3YxkDRVENh17mVdrMTAtaP9s6p87mcMZz89zf",
  "key2": "5xhk5AZ3BBayjPKHEPqsxdJm8gFoZa3kkK8wpvzNzJffA1koHWwhXWKVUMkACBs3s8oKt4yALkSB1HoD8tp6kthS",
  "key3": "4okH31B4bSuVwWfgVgqo2YNxRKJNax7RS17KfnaHZRZNaWp6EQouFk1vNjCKeLGCJRRbm5tWay7kHaU74XnJh6Cr",
  "key4": "3bxtZDyEvPPpLgsFV1gpeX5X4Vb7boDexYdATCmn7EtdTyM1oLt6iJXaDyAuwMJFJmnepwKAEx7Ex6JbNJpq6Rj",
  "key5": "z4AQ1nHujMm987NodH4n59KVYvVm7V6YGLMyhq4QLvXKyBvw8uCSySpTe2MSRvpGpdZv7WwqiP89wYLZhES8HxV",
  "key6": "4P9SqKCuyGbLE9K1KGyXYCyKVpqbTipRfLZagyKdHbA7cnMEcMUZCjqYMZ24Fiw7wt34i3PxGrLFZxBK4nrLPiMG",
  "key7": "39TPJtK8ZyA4wjFSxStwz4zUqGENnkMn4Mp71VwjvJNk3yNZ76oV4bUmdtvf8HRGFLxvwWSTKiKDepxNWxAsdWoL",
  "key8": "5BuW48QNxyrEPJ76XZFPdRXkuEhRZi44GAn8rfAmzRmnwxYUf8FRU9wP75aQVLrCHb57QNxxpzW1zbywm7stwBur",
  "key9": "61a2psLf4djBCJhp15VHY8yErpQQZDAwMwWjiestfUuQkp4Kt4vJi7bPxuZqWVTaSmW2R4sQ5VuvNdW2sbdrVGCa",
  "key10": "v9aAd2p4cSKBmoEfe3KBM7PRLCATiCgHnwMPcKBdM49QdZY3KanVKcCiGzEaJZZTzivbvALui7czv7wh9ANxnmu",
  "key11": "4vBydJK5yU3kLZBz7SSogCm6gzQXj43DvWAzXFSS2yzdBnG5Bkgo6EA8f4P9AwV3tX2KFndbk1HVZBvASYiVtf1N",
  "key12": "3rdCjicptm3ZFWYH8zE9E3ptNhwWBReJ7haDew1noW7T7Uir1tw6EDchMYU3vPcCLurb2ksP8bJRqnWj2Jptc2Cd",
  "key13": "rkBcZsFjpdRF7J4EdgakBz5HbAJde7n1bAoxzQk95TDRVusu72KYWqn8q2SJEFmGJqNE3VbFBcuUHNSywkv7HRt",
  "key14": "38DFQBGzX8b5UmMbPpobxe1fcxpvbzvj79y8ERhJNBmcxH5ZahCw94mBfQqe6zoeSyarW6ZY1xBQp8A5Ktojc2bW",
  "key15": "tWWxFB7Y1P5hpjj8STLYMpCVDxeP8s7zwRo49Voxe6WWnxLPfPfVPLazRoqGSugDCUB6X5hGD1DrpC7i5jU3Qok",
  "key16": "2LQdeVZ8RbBySFCWfZxrwsuhMgnyZf3Piv7WmV11KZRHick6zZqybFStRLgJ8N4tdR5mfqeirjyEW94YPTnViZTZ",
  "key17": "6dwXMcz5yk7oFvu4zvvGpB8unJ4uZaporwe5M7qpdM27RqTVy4WLiaJPPiTCo9yT4xNMQwjuFWXv6FqUZYqbnBc",
  "key18": "3e9s5GdgvTMcoSWgiXkfKckAu3J4bdXkuUon4F3ChS4PhbFhqVuXSy9ofHW7v9Qr9jhixGJZAMM9L3ZDfxPmxH9E",
  "key19": "3d1YLiej14JYrD5xTxVoxh8CwKft4LtQQoUdtncdiS81VKUbppQC5kQGW1n1TuK7RwFtbEU8FU3zNsLMHM5JTNji",
  "key20": "2rSPDNmsDRhXaE5ScWDimVYAnE9ACw44c5FSJng4HGpXhvArGZPoZcDWZqPHTNgRYqZKHENbS2ozn4DSJjR7ppaY",
  "key21": "3VHG3La7wKrq3szjfKDP2wbYJD6gzcdiDAcdpk8QEZkEm2FRo7i8v9QXdtjPP4k7WgeEtuQn1WT7KPDGS13uP4oy",
  "key22": "5F4w9nj38289hkYS7DPrkrDMTXUmKKtC6PFrEcs753GEGEKomhWMkGoEgoMtP1JZHisakKywSE7bCEyPbCeVifX8",
  "key23": "5Jq5HCdjnqFMCjhS54qarmPoGUafh5k1T9sUE8WYZ4nUy7q6s5WuPBUoReZ2MrYFRZEDPJWM9vAKw3ijSuaqqpg1",
  "key24": "2rSGc3JYxY3UyvLQsqvYHT9ucegwwBvUvEu4oXsgsa7sSkCVhkDRWVawvU6CYynKPqR9PXgcxNgDYtQ1664sRYyg",
  "key25": "3yLhxNQmZyGLWhN3CG5KPz17dDebuN43MMej3bgLHCSh1b9aZSrcoue9FxerGUUM5Xtq1Gxomv5PWENqqLKgKt2e",
  "key26": "5qL3sGfuHUyw2M8TYZY1g1Zx4jUiXJWTGX56gh3jwuSjVrpNsfKD7LjE6toMPHyoLMcVZvDi8Sb2AiLkDGGTR22W",
  "key27": "3Ybq3rWWrBhASdYubgP9WaA5tEeyz2yLUrfFMb3o6itG1fvwd3Dj5nF8Mz66K8UYWD5oBHE3iwH4eJExi1Cbuerj",
  "key28": "n5UdyzJHqhkawioD5ryE9hqYkn7yQywbWzVEfhtTBTu9ui9gLbfCkoTxJA5XRW27ukTKXZCbxEQu4mxLDSGB1TJ",
  "key29": "48NvCyfMJSyKtShuTUEUjhv5GVL1neNe11BPSkY8BAnzLB6kkwNNxx4mx4CA9qb7CZT5jbvysC4qatsqapuLQuhP",
  "key30": "2Gpc2MMqsS77ZQU5NyR1xj6aANREwZVEJSdHD4ot2YtrV3WAvzG9b5oLWHCw3vRLEQBw5WBRyuSeKvBmGRyuZMAG",
  "key31": "5PCYaC8TTtBq6uRatLJSPvbGwXcV7F7xr1BjRLR1CGVG4DQVUBDfU3rPw9jgnQ3VRL6ABuhakDBcKzjwWtbjs77s",
  "key32": "2vgTiGvN7q9a4NRLCj4mDMHJPeSKtoTsNgmaaT6vW5DyekB5RFdvPSXNr24pJ74UGiTokuqtbePFyMtQgBmJiKf",
  "key33": "QDLFtZoJ8GuXmH5VmVzuwKZRkzYpSxLwzeNT9hV5F2SZFkyh9eSrAJebmcRsKZD61PtLqDSS3SaVKojzkw6GDJp",
  "key34": "4nt9Hn8PfYAJUc62ciyUW5VdCc7brYEXsc8t8Y7NWusoDGRKhxR81kRfo2YJew4vYAnt3XbzC9tHoA4MTUEVq5Ts",
  "key35": "7zg1jEGvuYKRe8VWnszhdUTEL6qqCtyXPHf8XiHWTFdKMrN3Kqi9ydbPrmtiMM14bgAVFgL7djnxwf7qc4nEo2r",
  "key36": "da1mhRM4BuCZXpsC1HqRFzgwS2cyG3PjUJhu9DXtgJzC78cZvEL22aYkaWyuVNEGzt8gqkumXShdspMhvzXRn4N",
  "key37": "3Zu9ErnFA1ps6sZkQ6fkJxdaMGtMKi6LHjRks5P5r9YRv4C6pGvpza6adNVeLRFYyKPfFVkYHSFazWiqAQMzk4De",
  "key38": "3zutvFU5DoVg2ycJyVr2Ze3msrikb5MaUGV9w41iDoVCbq24CSBFaPbDA5E1uAAX3dG6nQLYhbsm3ZvsKmUcnfuK",
  "key39": "29pgmBfLaZQPuHpJCcs9jTXcz1xTmPWGz5XfYtfNnh2UKrmD9Z16PAvC1ZrnxjbDSmtqGLKjK9DQ9UoHRSsBcX8y",
  "key40": "39oqKRUW4rj4FzFH7yZtQFKUojwXchdEF4zS3qDSxcJLHHgv4cHcu9maTnRNUj37PU2rFym2KeZB1CZ5J39HkwTi",
  "key41": "GYUup2KhLUqYf7guKx8eWWguhGDhkGx9yqZpUFBvGFgT7QRnxhKBza54rVVFVyxRv7D7oihiXiTxQ4jPmAQVxUg",
  "key42": "5tFmoVHLymd55tT6iHwhQDjm4yKEqDfhHkm9NgKdG5Dxj5fY6FLGL5x7RDjxCPSmdKJhXYSGVc5QLRKf5pUpjnL2",
  "key43": "59tNYkay9p84jZkLEed1L4isZbmVKspA8Ye2fNNDnjYWsTZAToHehpHuiFY33vciK9wcgXvPHsyWrGKanJY22C4w",
  "key44": "4vhLcLwHzMa9CQsU4fiC1kdEShtpxEcHkhAW4uncUCzHqqymiyA2uffeAxCPSK7vYym8P9BuRCUVSiTyhcwXkyAn",
  "key45": "3ATJWUWKDEBQcnTNnLkkJJtSwfPuVA5PkQKfRbD7xRcT1gNhHDcFZezGdMcFM3Jfbeo98eonVBhgSdGZMnnpJ1US"
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
