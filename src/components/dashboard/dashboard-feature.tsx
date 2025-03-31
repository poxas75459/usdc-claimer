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
    "21qS38PDwznzmjGwmVHkuNW9z6PjSjiJMHRqgayph6AtaxGy7uM6Eur8HMg3V3RH4fENH3wwFVsNYZBodYtipwV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KxJun33HQCu5nT1kwG84eJ2XZj1RXaCjhsZWS8MbxAxnBriMsy3MLfvcds9ZJzPGnDciojybB2nbJTjbGSqpvdh",
  "key1": "3MgtLZvo6ALNoy2vQf6jW7jD6tBjrEoT45uEUhcTPpn9pBhJRaBZmNBM8Wbdb73eFFyE1vdLZpJfGU9ewdt5Knk5",
  "key2": "5bscYpEsVZGNm2ov8yqhydabRqPudN7z6LoCiUPhRo6g36BeXWKsQeCqUipbaY7TVyTKvtBPSrdPuypfHw2XytYe",
  "key3": "38vEYT1LRqcGyZH8JPovrGzu24JQLZaLF589qtsjK5hZd3mTxSm3whSvsVNuZPG6Lu6ZN7bCZmZThZMvbu9SeTH7",
  "key4": "2aWFsyTc38ihgTnaSYH64qJWAckF64MChP8yCcPzwvkYad86xDdb8TWJLbD7HGWwkCMebDzNtr8GM2T76Basa5sP",
  "key5": "4v2RH79rLvzxFVJJbyJ8irkmFXYoAZHE3a3k6uxFrtJBJDwfAMpDdGiW7F7EHceudc5GZ8qzEHUGt2aBHyTmGD5c",
  "key6": "4nmSs5jgkGcGTaCqNAQRSzVbsAycuMsdZffJ6ndyTdPyrAw2uozAkx1gAuWjqXe5jRu9pBYjv86zkr9fiv4mKVRL",
  "key7": "3JujiWWkCDrZ4TTbSB1WzC9pjw4tTjbYELRV4ekaeAdouF8DkuB3yTSTGrLFTdp9JaPZUp8Qyx1qpDS9U6T5khdh",
  "key8": "4XGeZxKUcye1QGitriPjhmGaEcGjiBkvSZmzbLYHemgx4xYvDweqqAsVb2rSBVPFNZf2XZmE9AsEBRCpaLSoDpLY",
  "key9": "46tVkc9nvVdKhh9Usos9g61wUvfx9mprCVTazhQLGBT5m28XC5dPQK7xjR4q8Z1QGDZZKLJs7anFpbsU8RzccwCt",
  "key10": "Eyzd3kSKedhD889EMUxqP2kMbatCmnWXZ4qihxTRtriqRbqL1Z6bxERjkG9yYj9eNmcq27uDzLKin3Mq79yr4Nh",
  "key11": "5saHHo1nPJervxBBJVxUrxqwHNMz3uagEf6gSMaskCjr2o8drUt7vUaL3TYXohx2vcBUTwqvYADyi5kU3QhJnTaS",
  "key12": "5YX15BxzVL5LtQH5YmBU9eY1boo7PAxtbuhCWductqt6p2EpFMNRKyxSbof7kCNyfuBqsfsJm7eEvaeXia6hKmSZ",
  "key13": "4MuBviSf2yo9Gx7g8qB64mYYXqgpyAqxeGWiGVZLvZJpCE8RsapdJsVCQnJe888GwWfc9tRouix9GmzWEv6WnMRB",
  "key14": "2ZT6siWgwkuxY7fhTay3PC5oX8awNEXZ9vWw1mUBDjeCiGj4eauBLWhfn3peZiFVgSTN9QctjVynPChT92GngrMW",
  "key15": "4WkUHCup11guweZB3SUwJy7UYQhn6RxgknFFWN5QY4kX2RvWUDk9xdoNJkkJgo2sxqjBji9BN8dQc27ANTkHf7FL",
  "key16": "2F3jB8GVLGo7zMYzuHAJbazcsPshHquxjg5WcJtPs6MEwR7u9zR46SrSJH9bgDgtVMK6oy33FEMeUS3edVmupkVW",
  "key17": "5R7ZUHoLFfYgtJ8UV6kG5YLtBW5nJWQCmR5pKpaFJUjmiceRCgyypYJgDy7LLLDsoLRzrsHgd79XhAguYefJeKG6",
  "key18": "5zQUbV8vM4a4v5fWJXDUzgzMH8KTvZRdwvEcxHEEJvvWarjdoARXeTF5hJEpQ7Cj8DCJMnJDESAnRVddsfPB5mxf",
  "key19": "2eBSJsmQrWTVsovZ8uJbdRGhEbfwmA5t5SmwqCKBJ9pvaifkczG6viQkCubG9Qh84MuuS6aRo84Cd4XN2TGRnZ8c",
  "key20": "62vtbqbyibkwotLLHnKEHPLdwf9CYKBNCfB47aeinFfAqfx3G36FVGbXGM1ezfYd6GPs5Ezn1nBDja9SMj963K4U",
  "key21": "2bcXGfrstYUUmfoNcfP6c7YRMdsvTPLXTsN6Dj1Hx7eGqzGP58rkk5gyY4kiho6cJ2XR7iZZxtekQtbk3GwQDxBZ",
  "key22": "4QZveav8EspHBouJVqUj2CASk9zWgCwZXK8WcJzMPkXGaZPNrYR6Qo8AkHazjPBuHQ2B1UAmuUV48HTyiiKdmmgD",
  "key23": "51yJka7aBDpQ75JsApD375aYxerd81ND4Chi4PdaY6kdNM6num69M1gVZ5CJHdQy5fUJjWCbpYK99ZwUwKtrRLwP",
  "key24": "gogvfwAJiYna4RRgwywsiHPHgz42v63f6J9mNtz6XKgrAD1LMbTmnWUXWJE4HxSQEAzQU6mX3Bg7zo9BxZu5bww",
  "key25": "5YAkJZK34oTwX7tqwGiE8oq3bywwqYZ7NEeCLAt1V2jcNbZxRbfBsvtKvSFNYFq61eJBWWcg9wovmns3CJXQkbwP",
  "key26": "DdSBVtBKZ96DZacgfmoX4svrc3smLhKMEk7ycZ7GEhtNmoh8B8p3TGJZfy6qak3PiGggnt3j4iwPnDVWdnQELbv",
  "key27": "4D3e4EeEsyXokd3dVXgn9Rs61WfmN1BJ1Kiyj1K369C6Pt8BZuvEa9js1eFfKYMQaybbxXSRQPc5m5BkHbTyDXLQ",
  "key28": "4SAAEKZqsh4CiMf6S34zPyL4UURztfdruyXSEwwZn7UZ7FN8gPByeYBiLrYLBdKtETVJfFX46PZLTDpwiMyZpmTe",
  "key29": "4GjVT2QSUUwfqmKEMFcf2rhgZdLzn3n8mQ9LFBGREEZRqA4wmaor8fQUeJPvCRBkyBv5Mtmv2ePcomqEX1QvpKNB",
  "key30": "4QKgq1LidepMhZitTQCrT42Gs6ukceuc4Jtag61AXECKFz7pVb42FUMt9AFzYaofuE7H2xWMudMMXaYMqKLSBrjZ",
  "key31": "5wqqzB46QJVx1Z4f9B4RWnPQ3f1uTkFAEQiCURuzzr8H1FH63nC2KMqgorN3RLquaW5er49JP8rhv8nDvKXfzJQQ",
  "key32": "3s8Bvinem59db4gjvpRHDaQXvRsxXNRd72P4atMM7NmSBARNFnKS86kapZ4xdBL41GuGeJeVtPa7YZBXgEwQDabv",
  "key33": "pkKs4JCTjK2wdeQD82TXFZGQW2WFAoZJndPiEejhXSZUBT5vTdcTxjLKrrQVZ22z21G4j4hJSaxq2u5bQedhdsV",
  "key34": "2UQPHMEzGVG3XtPJ5fJrm6uUUUspPFJHAZ6QJnn6NKhkm9Pay9KsYpgMCAfEz9cweEwxhkBRoKSJjpKHjsEHTasM",
  "key35": "4PsM5ck5CGDJqsSFYY2CapaicZM1LtZxZMc1c3ctCQrGEyh3xmuC91PFPCfx2mf2Q3FJ6Fvtxwx1g2yc2NX6N5TT",
  "key36": "4bapFVHpCrm2yQciKB6BGjmJzBPygytQaHhnKw93G2YiPvKtPyB61moKHEen9hvhDaSeJuvrnhR5T5T5Pz8Gc3gj",
  "key37": "j8Mx5nZqdmjcnvakUXRRwszJK5hzT7Z1Z1RFxHrurXhTxrodkKK3NoxTM2JNLHn7x6t2Ra7apha2p5ys6PMgDRB",
  "key38": "5maXs35uC99H6waKMZ668B5ph3rEduqhBvoEjNuPx2va7dQApSHABhFge5rEMNQHxDkaRKKAiJNReVu8G7tWowXR",
  "key39": "5upx8P9RMtCAdUGEypc3hDiLZKgQuv7d5sGxTGgNvfexvnWvBZsvdo8rwR8qn2XmFcedXbb3fRGkx1zzLbuYV7VX",
  "key40": "5vjQGtMjdrxgJKhW913XQm5KdDwH9CdBnzsfCa6LrMKhodfEJhiFhtcqF4cJCpdv9yYWrQZw1vScXokaZU48QeDh",
  "key41": "2EAZqbyGY3RspwvZuXDsCogWtiMcZKfwepER4ZuB9Kfp5iygizxP4FLELxcJ9BRj2WzgoH97phKUxbZ113XcZjXX",
  "key42": "SYmyfznAcTQFErCxoKCbPErYJxcXCnmhtEc6RqSz3acSaMemLXtLbWf4gmFivNDXhbDvkSLM8pLpSwMYa6zCwA9",
  "key43": "2s2A2i2vVfBGLuUETewsECgdZU5EaiJvrYoG6Drr99grDcvtzZx6BM3hm3tuM19Cmw9ftwmnb2jCX5WYydwSSdMA",
  "key44": "2YPYnCS4i6wigrBTNG3UFygH6bvNf4oZxxSqQBa25easAUYt3YuGNxxw6ZkXPHADMWqM4BtTkThpYmCfn5HJxGha",
  "key45": "2FAcKEHvbbgXw3f7h4nNYwEyQisN4feahKUr6Gkgkqt7gdcxMxns1LdG51JpePRZWe91P2X6o6vKrwfb84vDAL7r"
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
