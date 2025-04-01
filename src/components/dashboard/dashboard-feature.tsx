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
    "4pHTxax3rT8szRVtuqnXCn5GzjnNEBDRfZXPgYJXNcUgeWixMCZqFvRGhxeL5iS7CuihLeQs59UQgAuJahrpcERZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35N3vjuDC5XvufzzosmUM43kq6nur2oVGpLGfDSQ75T6sywJxFcjzyazpCifdiiecWHYGcJc5qKn8KZNBoz5Nk6q",
  "key1": "4M7HW5LRGuEEfwzmy9CwZH81dFm6NGs1RuqdV9eTKZUtZ15wKcUcC4T34wNaQPqz6joKrRSSsb2jh3EdoDdjBTVw",
  "key2": "2swjeHhoLH5hE4jCJ8a7NzfXaWNsy7ePG9PzaQyDndwpLCUquTPTgPcE96pLh7kcnEwvdLZd2zQwENGtnv5NuPee",
  "key3": "3QS6Gh7Xv2a5HQfCERSe9sVAV1iGQn37aQ1jbAoqZoeHEH9c5JcikmdWfeXb8QmNRSKhwhzWRkyD9fXMiQGUr4k4",
  "key4": "23UEoJM87127TVsynN9n5Ce1gGMwitvhB4gXFAgaJLjGZUHRJpMCKrpF8Ej8DmgFdbvK8JWLwqeoca8h7fjydnwk",
  "key5": "3ETf6Ag9kkqzwpZ1PeK6Zqwh1zWuDqyHBNpXgpsMss5Sm2xZD4WmrZRSrvHAAAZwJiN6WYQz3Z5fyMLnDdFP8w3R",
  "key6": "5oXJVoiahRWNUaiQYBMpyGJ81hYHZuy1CybKku1m8XdyDypRvgD9Uq538RauzqnbQ3Lo8sg79vCZ7hQMVYBRMzfW",
  "key7": "5et6sboZNw7GkQt9AYzxbrQLfNCjXaCbpKFd4YasGJrPCxfZnHntQiZTVnHdXFP8cJE4RA3exEp239y5bNaa5dbz",
  "key8": "UwxDxNWbW14tJnKv34dFTui4d5MYCyEGRTJXdqZR4qHhs7TgqGvcAcf3AUUSG8rGrXVaq2bYH9vPL3JkAUY2d6v",
  "key9": "2V5REqhGYK8apyDdHEaBGqjbUNVzC3bNuB7UKp9fNjRZuHTTPkFt2dG68eb7oqwtkTKUX5gqgXpfDqAXboetknov",
  "key10": "4ddt2F3XoCFrANLU13R479zgWg1H8Z558QRB3GroedGWqMveYTznoxK3zL8HTR1mQUAuGiqrCdw87kz5TQ8qXdFH",
  "key11": "4ua3uUuybFxFzRRG4edXMbLRR1yTGVVGPXiJtsmsTdBex5x6X4S3Lp7htjpiUjx9MwJinwmLsvhmGBUGeyk4vZA4",
  "key12": "L81KFCciyFoDCFoJ9j2rSMYKYXre6GF9GKteRMR9SH6FeeoaR1g19m5MUyeAgN5A2QkQ4exxPmobrfd4ZJkEvxU",
  "key13": "3Cvg8qhio8aDZsu8esjucf46SsGR8Xrc8nGSG3qfPrfj85UGRQrW3YNxbvCkjBUAiFzirmSZ6RDcgUPWFVRVRr7X",
  "key14": "2pmB3Lw44QRf2XDcUhR2SbSPAxwPwZHzCPFRjd6sTXu89nan8Nhwa9UEoGjatUBHZdN2tkT1CaSBvXrg1AGoa3W3",
  "key15": "3nUDYjbM8kchMnbmVDmBWkuyy6NxdUhKsbEELLyw6AbwJXddpU7E9B6KBXa9S8gwS1W1fgyywbTituxFANeipSSE",
  "key16": "4K4BV5no3qDFkBg34JV4novz5HBgVCfddJf5T9vNR87aCujtotCcwY91JeqxJrEKDWTvZWAFM8BEk8rwicHXdRJ6",
  "key17": "4FNsXKbSo4Meck11SGDvXpVyWyZQXCkQR7V1BPpjvZBrnqHop6qFL3dZmyENdz72S2R7mF8XHmM1cEgowRKzocFo",
  "key18": "4hU8jK25xeM2D7SoUnfFZNXSBu5v5jD9LVmKyLj9whxYtW1Ete4FiRfLTXVDHxCToJMTDhyoYAPKP5gYqCA4udqC",
  "key19": "4KyBW9rFTidC9yPY5CJRrVx5NLygFGoHjavnxrSQsjq9FZttqgSafQqMPUwfrjKHDTZL2giVDCCCWLdoxtqGNTPC",
  "key20": "42h1Tkcz6siu2q6wYSR9gZ2EDgaDpVym99ncN44XhSqaH4dotQhHF7woYEq13gdD1HmmHqEUKkrTjHnkNwaAwr3U",
  "key21": "2qdYcNCqdSjJ3oexYmHgMW6MmKobLfAPei6xsMmikFMUQxjCY4Cbgrfuc5NV1tDoPBckpjgYawPKcya1igR7ueVZ",
  "key22": "3G2NMr8yBvzzXNVC5oXCFqNCS8xQiwLpUPnacymF3HPptDvtZYEte34pfT5DtMLfVQbQfL4PysfbQcS2fWypqb54",
  "key23": "5N8XdpsrJW5oQbJNMkA4V93xDN91sqXjseVEsDK1pcaE2fCR92YRSL81fJQyzh2fXux97viymrpL5kHrjK8egc4c",
  "key24": "421952EM5RnoTBCCVTJLVvPuXjYn4yyNp9yE1xmhGFq7VTHCpaz1tsySeDTuBDa1ApLt4a1B7PGib14LRCFDrjwF",
  "key25": "21L4APptgTy8Ht73v7WG2dNU89xgqxeCwUMAEvV97Ns5to4JirLcgAMsn81bVgMWLnvmx8XzGbDejJeT23dHZkwQ",
  "key26": "3YXEjwrmbuP2Ts5Rrsyy1sYHhGApmTfYpEPP9inxT2cKFjAnUEhQoZjEUJPzLWZrUzCuvsbQp13g3BGy2mqMgx4G",
  "key27": "3xyiimhAmQa5FxXJcyjvE7W3bEbxWMDZNGrASmhQBn1jNFRZ7fYMMMvhEsFDwLk5EPZ9PR3FTaFkuWya1RxfHoCn",
  "key28": "4qToft2V6AUYtTL2Y45aUH2BJEfi1JzhdNTrHQnJ6gcwNbV5omNTobd1gA7xoW4ub3wjgXUnPgGZAEudeKLyCJmY",
  "key29": "3TjY6TEvHQWh4ouPNEzV7zPUymxmE2dr733UHhTC3VWK9gmWY2js3WuJ7xGkJyHwS5kMeWTU7JU5vxrPRkPVay4T",
  "key30": "4NM2sdbLCjvZeAzy56NY9sG1nB2BSLuQSmZUu9GNPYyAe4U1wDSBWjN94D2DQzE6aYsCpzMDP28JVRVM8BdSDb2e",
  "key31": "1cMr6mKCZB4HRAjA4xs3brPLbJQnCn3MVeosuNW6bQWcAiDoXE5oBdj2H9uHfHqsckVpjKQbphdD926McNC7cc4",
  "key32": "49d6HrFepao8tPDBV4NZc8NPenmpdWGtE7FCFZgRV1YNrbj8oDFv7gLqpMcXpYpCSr2uBgGEPZk3G2VQ52D6hBD1",
  "key33": "7rp3vBnESoaBqYqcNvXT2S4bYdhBmMykyxZkPzq2MBMgScDDaiYDLBmSDV1cqrdWSQh4stZxZMigssj1BNZUFLV",
  "key34": "4CgQyA7LPNuRt88pFbZnNq3NXhm5iyfLYuvL8APrNDo5HJt26cTCyDNoMTR1dcptB1j5NEUMS6Btv1FqWy3Muv1A",
  "key35": "3Ct3D7jekVDE79wVYh89yq6Qcn3y91MYXaLRcqfDYJY2SsT5bvT46DBzJmWsXGKQDoJcNt37UZmpmRpqhBsapMQG",
  "key36": "263roR4Lhir7Gc9PBDSXpDjhe95X1CfwQYLZL5ZDDV7bjfsiKpQ3acmiB3Z17wdvtdB4SjPRNoy8jQ3QNkqcwPqN",
  "key37": "5v5KBnwikVKEkNooEpey2aSgdog7eC6oFxhg1LRyxq9fzMrUFu2tAx3MjXuTE4SKJXUFKC4WjbsL3EERLndZZZBN",
  "key38": "RrrFXkwj2QWKBgDftXR5Fw94tkk6JYiDqKME9fckR83JVJRk9wEXS4B9gWPmkHzgQPX8iR2ySAas7iAM27PgTM2",
  "key39": "5Dee3WDuEUGZDn5Zz1djZ9ydQAgcigMLU8pD4bGk734ka4i42vWg2YaguCHfWLkPi8t65SmKq3G2Emg57KVKBKTZ",
  "key40": "2jJkvZTbt92LKiL8c2Pqztxqf5QhaWgaGX7VRLHt9A5mWtQMRQ1xML8MpHTtFopo6RPqsWnVJG8dPs95pGi2UPQ1",
  "key41": "5SZTmw6eE1xasc9m58K8x91hweQYk2TBZmMavSe9MBeYDjTszGmUXqYXoaFFd5uiYwDvJ6YMmFSyToqDAo45tYWw",
  "key42": "5VbdtgoBCnuC8WuQZvBCQchmQB4XVmv76kS79PEcSU5S9hR6EeT6QYFc6ngrE7qkUn4BWkiRZMn5EUnmUJfbAVTw"
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
