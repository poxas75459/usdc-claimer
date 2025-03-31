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
    "3cQH8TyXgd2wVzSEJYvWUEb2ipNfuu9LDnRkEN3LShtSQugnjdF65qPhTHoGRxVXvLp31RfKopTjb7TPAWD8iMva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDeDKoEHnLrXXo2mQfQfzg5QiBLyVp4mQ6SjVHjZz2zBHeGcHwbbnPMUhh6R4dnAJPZioAvh2VwCDBwSAGx2nBC",
  "key1": "2e93gKBN4MTj4AVJFJ2KH3YDYyeAiSYHxL6oFej4X69SGS4D2nWtyrsYjmM4DyJmzuGVUeodumGzqT6mWJhcFKGc",
  "key2": "5JpjJ1EqkUZGUzgiL95FCMareJnNYte2AxSWKq5sBjoQ8eFkWX3iYGkuqiQAhtwQ9VMjyh2Rq9Y7f3aHk3xjutvt",
  "key3": "3q8dGSTQiM3sMQmj8gSiWjhQSgiBb2arxvei2pUYSeEdocZABx9PAsU9pqHyPgvwHF4Fqs528ueYYeKwZJ11YA9r",
  "key4": "5Kpk65kENwmQ13hVvjXsYncJeWeti8DxPiQqxusGMuwfyAd8vWp1CkTSuMWchuCYt9YtkL6Q7ZuxG7kJsUMV9yQh",
  "key5": "5a4akaQSFzaSPoPNZhmceuBvLHyVHhsvGXwdtqyig4sagb1qy11pMA9K2g2zuirqPaPx8e2Yx4uPn8kzC2uLPUjv",
  "key6": "3XXkUbPRnbTYx9PVboSXHyQ72kS4s9DEM529EMZBiTqSN1jqec95HmB5b4RJYJvwNeBAWmejKDo85v8vYazerm9a",
  "key7": "2xPGrQ22bVUqx21d5b7Lga5HW8cSRCD7vH79hYWX7T4Lua5DN9NS4ftxTpuPevCg4GSn2igsjxqm9mxnYyURvFB6",
  "key8": "3EKESReXwZEc92KuBMHPZqpNkFZtkmcrp9TDfYZs2wCaXQTPGMMNJvMT2JPcCt2KXNoVjvPrSttGAN8bUqgGY6ST",
  "key9": "3R4jhwWtTPRfiXy8gK4zJ77hubCMZNExRgvFokKn4joT5pN8rbykRPbtJG6ZXHmkbaJ4SRNcMcVYLZ78PU7WB4m2",
  "key10": "31uj6SgNorYGgXjFDaCW81GhRj88XqreSKbeJhpr3cgxsrSuQ57w494WP2rPzV23SrJqJKXTcnCFT1yXUnQNkpvv",
  "key11": "4bHGFwyaibN2drqt3YYjoYhk1V5U79GdZaSozBEdLXQ2uKuD3koMqmEA7n79g1V9KmpJ2x5Q3UdBqRgsFKjjWALY",
  "key12": "QYnXYfBgavAnRxbAqA6FyrZ5t4281Wx6XkfN9WH52YbKQdPKzoDgBa6E74sLLGBEBgZCAATcsJsr4FoYYX4SHfb",
  "key13": "5eLaLTAaXuKGCir5Di3rXCuZbVGPix4bHxD9p8wviCZmTiGnssD9GuCUfYhW5cYRHh9cXPgiHCaYJreaDk2ce3w2",
  "key14": "4bZ8HBE28GUGXX6CeKoqsMR7NkR4EsbKhsJiJqctWFwbjzEvcWMfkWXBmQkUrxUaVbF7QNbnA9FhnKbkQ8XaypBA",
  "key15": "3nikP33DEoHCmASzazqVeqMnGp185PFqoFMDi8A8h3mj3BT1aPtqKvBTn2vYES9xfAvuDmRcjGyyoZsf49uhE3Qm",
  "key16": "5Q7f4TrK8k8Ggg4KhpbXiaRQY2EE762BsAD2GBMm1Vkz9ay5xrGtfKud2dEusvudyKSobgHuvYoVQREJhuFVaQjY",
  "key17": "4xAZ2wdsVnXCdcSQZ4mJiUTkUJeBzWuPMBK9skxrPhTL8PNymT3QGJjU8J3s6Mx7v3taFEj8KZydqnAqYsapggVr",
  "key18": "2JWyCtXfdFr1xoXdngRqup3w5x5speztiVhwrcxBHtWeCxxt9ajPB7MosZU3d7fT9FKkSuFncpZfJxHrCAD2Gh6x",
  "key19": "54buH1MZES4TkzwtJMMTfd5wCyE63cW9zYvgyqJqUWWz44Dm5riaR3UmAjhxFbtLvnUYhwDyiKMHHSPY55K1kjf4",
  "key20": "6gNUyiWtEbjBkQWkDfH9jYd8dettFrtzdKaUCRMLH1ows4yxZHQ7SVXYwak9XeKJ3DexRagFHkhTfE6z9AaXX4p",
  "key21": "4MztJ9SYAekjd5nJh6CDAT6TxmhJgVhvamrHFnjZqr6szKHrfCAhm9FYfC1TnXxY8qkGC5tqVY2TFgzMmDDmSHP9",
  "key22": "jcxWQQx1pW7L45EhbPbgCR7knE3qsox41r3r6sAQRQss8WEufRdmEtoZiP1ejvkgo3BieVnDVeeYnMsGz53aQXT",
  "key23": "64rrVSqjWBuNhB9P18sJGLNVvVkAt3YTkASbuoijNWdBJx7jjENFUmHSiLMRtRepE1YFnHG33obDJdrRhvkNg9NT",
  "key24": "61LE7m2rThVYnf6Hc2UF8Xbz5vof7xCRvNA517a9LQo3XNYVc1zKvRLeU1VBHSFXvYcw4Ne57k29WqiyvoeAbaWh",
  "key25": "2NyExt7v7jS79dYZFvPd1AYhUUMaPTQYda1MwYKWoxtTqJDM3iYZ41KGc3EFyn42HsC4xHCxtZ1SEywopJ1gmhSV",
  "key26": "3z7chqb4gc3E61LMnMDAEajmn9crN3kjyjMUwh18sVNhpQgc3hJSbMM7vKJge897TWoUtgfPenBrgqes1Nuoy3sk",
  "key27": "teiK4YiQTPkCSB7YdZxXWGN9Ln8WnwPyQyGyygm9UvBw3a8ePL99LboMEjtwe63qW9LtprBL6qNoYGFjJFdjeh3",
  "key28": "2jfsaQQxzGHV3mMUJFS64DkhAdUpG98KMC5PSD6HQa8rpMLTW2JAcbaqtfGn8ohhwQrq5esTCsYEkAkymFScxptt",
  "key29": "5uZqwM3w2GyKehYbnPJtn6x3UGKPDAAXJWnsLAfnVXCsRA36vjtcFGQkMbJky3dGJgFjaTVCNR6iHvcHiSWnrUz4",
  "key30": "UmT4tzyGXaAvnGPbHMSUS1XSmdgdgGbsziUe9BbeJ6ytba1tGD8t9j61TuinT9AKXVrCTdjoGDZjbZJ8xJ71poY",
  "key31": "5B9YJKCfs8cMWGEMfy5uRab33iEC4Cn5RJrQqhBuz1qapTX2hwhJ9JGj5SCrKqsdgYTytbv6ZY3yicyZEdHs9FHc",
  "key32": "3ZgoyHcNxMmN8jvaHzaDY7qSnDyQGvpcjoaXuVvsJKD6QN9Xbh79R6ETU9i5rmXCGSyaSCm3zChJpyq549S8Ypr3",
  "key33": "4Chf9a9dit6KGuvdUXHPLcpMgkKdzX68Mh4GqRPZ6GZNwjBNAqCbMMSRVRFsU6fdTNFiW1c8FxMYzSLZuvwboukF",
  "key34": "2PavU1FQPJXJxvT7sFg4NMKwzcmyeXrVejvS6NLEK5ywnV8ZauksQyPd3idAhXZWi4bcYSRssEdgpUz27Makx5Co",
  "key35": "Zq1PENyz1uKrwNhQ9bKUvUj3tG5XQHxuoZMzqi6voJQXDRzdsUCLn6P1Q7d8bxHZfnCAGDmKi5wM4NywG8h4EHk",
  "key36": "3HT2GdCTcRQDKn9LVtcR3BQFnEgfkuks9TbujYh6wuaoLLngdn1vW4uHNGxmmrxQBHreair6SLoA5ez96jWqSM8k",
  "key37": "5JVSdvxsBCpQeDAhiUsp7XFr8p8BqjnxEo9GCASmZ7S2cYSs6zRwGWUgy1TZ2KmpYCmp9xw7C91mZ2uV16ZH2Ppk"
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
