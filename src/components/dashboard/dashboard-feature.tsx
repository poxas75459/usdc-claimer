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
    "24xLaKre5My97eCh793e9gDNQAsQki6TPxUwEMNDZL6RgTbsSeMa3zTLyinX2CoDM3tHDiHC6vmh3eXpDFXh3frV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ppibcv9tcozAoe5uV5oyzdGJncgZULbHJ2sa12DP22NkG6jSqPMjhj4BfyNGEg7skNxvTVChYz23HvEwn9e8ssQ",
  "key1": "5614fiWGYsZDtKJNQEijnZWZ7oDiShoPTvFnFzFHCcWDov2kohppWUfLcNHULzVWPMbQjXJqoEidffMjpGw4nzGB",
  "key2": "4hMsUnXhrxzMcKTHoefrzFvhFa4VtuWFyp8ivjdHjvDJBjEpjaZG1RyhnmotJnxVbtmkwjPjyNdvvtftxP2JoXne",
  "key3": "2Vy6nuQSQca89bd6UQMy5seVKjPnXHyyYNoZCwwgjFH3xPQGKfhZY5sjYkooYoR4HKo6ezoSfA3edUJKTibtn975",
  "key4": "2pNE4dyUgraJi7tGou8rWoconr813XCgGegP5ZN4Jd5vmSwvvU67G1DksAnomU7tnqxUL5MELrThyDzqTdrr1fgL",
  "key5": "5cH94YohX5b8Z7MK5TywDkxVLtWLCso5cERYiC5125WNXtk1Zyw9R9NP1rQ2aY9KYJAXgVLRWvmHC5UjmFxVRDht",
  "key6": "2GxSCuGUQWJBecgMXPoM9C5Db4Qr2wcM9kCTMShuVTJYPjfsndPMGu96hREuVj64WpMduZs4NiDZkYfw1MGeTfXt",
  "key7": "dhpESmQ9BaPfswGdd5L7qK9wS7xu3Amz9EwZRdYSGUN2HNksVSkG1zM6NtrRtqtUzr6QmVNKakkbjWoVWmbmz4x",
  "key8": "4QGZxbpYrhh4KqThddY48uDLpfrJ4NjWgPztouMTjVwhJK1jsBuaGAaZW4CZNAwmGyhTPpAXjSKQW5mtFe2bDngZ",
  "key9": "4WKLYgKoyk85ff2NLEc92grkgPiTWmo6nLVDJiNJJFD7M9f6WSL77qskUdpo2WLBUKaEn3BxsQDDadyHMuV1thR8",
  "key10": "53dzsjJPqmTSxz2WYZDQzCDtAPKvPJZg8Qw6xmyMU1inVFENhJTth1yDyiGPafCRsY193D4ou97rmdhZV4Yx5YWT",
  "key11": "3NP32hS2Gpru7JWR7WFTcS2xBSnjD9b9CdjnDDvtzi1pn9B46jLpJiVRop83rx1Sw6ZHKVmM2VpyzYPs7x1RUvLa",
  "key12": "4LqrS8KfsaVBVqj36TYniLdqxZZ3Bazejy6S6kbVTAHRkkcJzgXbipA48ug6KZjwQ52NS37uUSMMYAYT9j66dDn2",
  "key13": "3QRB5CAu3JojK1HkY8PJKpFhcN5hFXGH1GCM1XbBtpvMYQLLA6MrLGZsLWdUBcgpByXoSe5ajEJwLDXrCspSXjsA",
  "key14": "62hozVmQBYFVQLPW6aqBEPhpW9pdJL1NiR2pDR9r7ySJxMY35qGYEEEuWxMvyNsyVXJNnnbxpXs4V1EK5mB72rTM",
  "key15": "3qGpvKb8Fjg27AsEnVL6r5DFWT4hhy79YpfrUeaEVKJkHnAAMkSvr1X4ZqfrWe3HAPocMkwLYtxXusR71kf1izVC",
  "key16": "2aSKJviAJhYGC1w7yBDAR6R9kqa5gWtQY41pBtabKnCdgXYnNMJjDdsip7z6c5HduXeWbfRvotpM1NQbQybCB7Vb",
  "key17": "2JtrcnMEKp51VVrGDGSU9MPe1rLdu51a1J4bH8Qk6eFT2vVs14naNQjUVj5fvedHiqFvBfvF2akM7QRR74Fuzd45",
  "key18": "423fPhv96QA5tJNYbTmReaYLq597G38RD3NjgUYdv1814ZdqV3mqHaxv5Ea29MYhX2VdwnPLwfbVdndnugM8NaFF",
  "key19": "5WAguCc3BQAG5UDAomUqj6dTfU3gZy8r6aP6NFA754aVRMi6yyw7cJxbBxEeMsVbPQEdGeiYibNU62QGMnfyrbKU",
  "key20": "3BWYNoP9FtdgfLth5s5UUR2t4DatfEY6gKQKq1pqH9u8d4y2Cysmn7ucoVsPeLvP81RNq2gkNtBaWHytvckc38cu",
  "key21": "3wgG11q4r8qGF8XNTtptrRJme31pLJ3YrJEstVTZUZbAD2dfrUtMFDgoMKixe7Er8nMjos7VmsX41EfhpdoSGmGN",
  "key22": "3bCfpWMXKFHfMaN6Br1BHrXY8jH5q7AZJa2Sc8T5w6Zo34sQVGcAArTCWNznQqnhMyXzxg6XnXwYbSfNC3JVK8d6",
  "key23": "2jcwLwvVu2Lb3Bk43HM7n2kY99g5gNwqsXFQNn2KGbv65EtRL5Dn94dqhC2Jg5hZonWKxQJQdNZx8zZdEKU7p5eH",
  "key24": "3JYv1Nywu93LA2AJdPtCUFd3irFdnJ1ZqobYFDHqMvANPMxFsHSUTKttzADBEMcqLz1GkBDEDLTcpP9DPuSy3v32",
  "key25": "ttc7uwiS7azrg9haK8Sn96Zew5YsB3QMiWpDJRavTSLupRbi2196eAFpkC1m4FuRzu8nRjfFSk7Xoabr5ZDeNrA",
  "key26": "2AhABbNaJzuq2sd9mb6EJSC9pgyokCzSLH7ADigHrLmCRo3EPvmWMxECD7ssVeMRjhnWt8JykTwk3pSAiQ8ZJhrK",
  "key27": "4qYQuXRdVsM6CKkPF7n76MeS3EsZTJchVXmWYifoRxvyasPUgA6kgVuxNmkmn4Me7M9P7iNAbXdjCC2h4XJnw3fC",
  "key28": "3un215mm7EukWCieho7FQAb8pqVviKHkzNeJ7bxGkMutXq7EMMW6JVs4NcmQe89ce1up6RtYC2qaDjPUvnpJsQPJ",
  "key29": "5uzhaHfkq1vW7icfUottXuygpsRvNJh2q8VCKpw1XqhJugcKKyxuJcCPjAfkKy4Z4SW8jbpbwv1gvE3ZizpbudXq",
  "key30": "zAYqWZMn72LvM8yhcybHP2zbZxGq86mQLjZFxAKCUXAgKecY4SRVYoC95gbyLa1YCP54YFWqcHiUjUTD2eBJ1X6",
  "key31": "RMbYyp5XLCFfSMKWwJndTT95UGPPcrSk1ymMraCvWnBSmbchwZvNg8qEBnQpgddLPW55cMWbscGdvqwVJNneGnB",
  "key32": "5J7opLsdhojaz9A9CyC2RGrdYLe9mTRc4SYe4MF9Hy9RranAcn5hUbpF1rYNtSJk9FtprzscqcpqECgwNJ65UYZ7",
  "key33": "3rc9qQ1HmBEkRdrf7tQGacuPjyWy8oa8JHDLbpWH9d6ZeQr7xc4U33yuV3EJN2Uz4Wo6pK3UpRMnKffaDjnGRNBi",
  "key34": "44XPi8SZPxyA9gAHguhwq1rJaNir9b2em2cTLKKpxpkGc5YxGgkfJzJ7wv1ua4zTrNDk4ykHcNxebn3ZDh2wz3mr",
  "key35": "2JKX3eKtjxwupWNUG5zoiPKfcNmpoW26R2zWgyQGhJjdDJhywzXP8WwJbMMR3naWs5zSuoDX94qSxv2hUr8GPtSY",
  "key36": "5amJWFTfia3SVELm6WasrZzC8s1cwqFktENvjD8VU9GhpzFHBejnHCR4VWhajeVrGEHu6uc7KMEH7VVyFxsb7fus",
  "key37": "3DAaQuA8uVk4BqVoBFLnKDMWKxLv5zq6H7iF95bjaChwhHBTPqmT3bphnPdbtRQjgxWPjGrfaut8r3rv49Yqrcu",
  "key38": "5BwYxza3VTKmzaxYij1sHrjKeJAbwPuNUmfZn5pWgm9ZCiE29WkAvc65EsVzj6LW6GvVTC31V19Ggn2srwWJeCJ3",
  "key39": "5Wn8rnaAsJsDw7Mbr49aaAMzjqkE11cMpGVuPdp68BFnd4kph6c5tEhD5iuJdS1tLZSRVNunmVksuQXQVWCaLN4L"
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
