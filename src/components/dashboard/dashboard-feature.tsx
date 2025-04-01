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
    "R2nvGFTX8GPHcNP9J6DZ7JNBUxeHaW9BqRPXjTgUhh8YNpMipxtAWg8qkgMnxPq123ECsFWPPJ4xUj5hKcGrHu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbSwKzUpL48yj63rYLkt9jFV5SqEZtFFNbHwUy28QUMZ7W8C8x3h2q46tHa9aSXbqhRYuks4ocntkJweTtLCNF2",
  "key1": "mzUSoWzbKNaYspJYrKdxmBz6AKUegbk5yyy8zv3HgeCEMhhdE7RoheNnnnjXjMtopvkW4mgCLNWbxdawBxSDtFz",
  "key2": "5L2rE9Lreb5Ju7yhKw1mChbv969fMH1YxDg4jkrup5MJ67p5kCNLGtuFq2WziE862CsmsLmMMDcSesokwkHpijwa",
  "key3": "4sAJS9FKqu3Uppw7qVu4EmW9PT9w1uKsfSnnZTDaPsPf65EpTB4krMSVbjW1gNxGqHRHdLMCrTWZBriHqUzX8rVo",
  "key4": "3SpkwXBbLCntMWZKwhWMjcvT9fo7CjvqxTEyj8XdJQ8T6R7jHwrCA737w4gCLpy6SaEzti4dfWbotFYCc2H9tMxT",
  "key5": "5maGDtGENYy7YZf8ui7YgheQV1d4Dh9WJnNVFskUxaizMij1YstYLKKMH68QvjiczHTQkLeadLwtrq6HN9aBsseU",
  "key6": "2dzASewWeSowPzR4iCgJvWjquQRiqzxiMU69sLRCs9Vt8j1KNWujhakPdcwQSmwHZvtDg6euBv3osMaU9bYcDmFg",
  "key7": "nAFEE2SwiAfcATjW6io9mGeTL1N6oMUAuhuowkPG6JsVmyxHrG3Y7cr3d6AxsSZJq7Xti2RRhjKRjMFKARKYp7h",
  "key8": "3STbj1YpAJppN885Z8pt2FraiBXB86fSzgxSHtoxvEtEg1CEbkf25LYfJEuxYx2JvDrnP9dCXiZXV9iqk3kgCFs9",
  "key9": "61AQkt435RN6EXsnQQEpSNDv4qLfBw5NCkjKJyY9AgXNxorwT1xi7VEHTJDcn4bzwNVw6mh5RaBoztRmnPLGuPbb",
  "key10": "5S58vg8X9G932A3VJG3CjeVGdNzGx8ALx64aUZ5rUXN2sfiMwdT7HFqEDywXmPAjdED3uGMjeE7Vzb72TFSneWbP",
  "key11": "63FJMFbNuiMzbHDmnUFSgUe9GSpMtYQ8J98wFRd7xtv476fZyBXUhC64bcYRds6fVHh352XA7nLLWxSWmUocfRYU",
  "key12": "Cm3gVp3tseBaWG57zMo4j8VaRndttEcb6AhV8mVyMWp2uRDGpSc9YxKpmxWxr5gr9j1rUkYYnAxj5fHMDmmbHFK",
  "key13": "1Mz59fck4GkDHv4QvFSQ7FVPmXgQf7RCPcazJwsjz6ZKPpQwzGPuEzBvzeKe4ikvDBM7rT6oSpDVJPvSFmEK8ZQ",
  "key14": "5jGQKxEpYH7metUFBEKKxjtCNBeJm63RjnDXUEdntUdbhDPN9uBrDRcVAjaWhLsw2LkU9LE3seD8ucFSZQEpubE",
  "key15": "65PbKwHdYef8wUrU4n4Ni12vbzq47KD3TEuk36ZwDmiYgjzn2xj22hbZPfHcUP6YjLH6xwhRyu7NULtyJGHnF6v",
  "key16": "4MzyH1zWL19rCKPuJK21ioCn8P96T6U8xo4RobAZjtrwBzFjZsgSzdvP5d1oREhjyo7o4qu22d73bN6fV78sb5gq",
  "key17": "4NTjJfypRbveCttBE8X2d1cpPRw1gUm64CH4Zp6oAXQcfcBnKh477GBNRXxn9SKbvgPy3EFz7mK4usWqY8aMefGN",
  "key18": "33rxVrWuon1Cx9xYNCbHYdBMorwd6jA6VrQPJNUT5akpXABdKiY5cvUfJm4jjRQ4eg73aYTDeuZCnABWKcf3Mfap",
  "key19": "63tFpB5N5JEwdsipAV4gRDBURTmLmUUs6fPJd6Np7EQbAohUKrjxifaJfnRymJSTHavKke8sKJ4JsNgmF9EfTYbA",
  "key20": "2vUVKfxu2wEZZQfyK3JE1PDLugmv8Ueet5dpad2XoQqxodaXk5KtJhUSyftFGWHSRTkmkHe8K4EF7Za97ks7qto8",
  "key21": "5dVu5L12KQsXVttFV6CGEitdDum45AsDW1h9SVaNDbihZEaKpzbJoe4K4BbjpqkpH1Bqvvfr4KDrP4Tc4WefVJgb",
  "key22": "4bwq9Xz4eMCXyUbdhA1JJYnApHxUmqHqBYyVDsS3eeXKKknZEabih5pAoLAJg56WZfgwJK4yyxMJ1MDwh1CmBtco",
  "key23": "PnsDTeMTHcPbwcdYRkER3B9Z3HFsuGEfEFMNvsh2SpYsbFMFokSV7zAk4sdGcPNKmHSQjh9mPKVjpzokgtWDLXD",
  "key24": "4BUstMEpJoLeVmMe4W9ih5Dj4qLpXASFE9aHHceytuLiJyZJZ3eirQ9SD5CS8UgnsKGQitSht14S2QVd7LUjd5hq",
  "key25": "5Czmkd4AJ7grU4bBuibHHmVUraz4Z9KadBRmohjRBpaacEWjssEWwGcZBh47FxMnPzgqaBU8zGWyaHYxx5deQN6S",
  "key26": "2GzPP1Z7j6hKSzkv2C7Yz44AkYuTcTiYk7q7YV824SLhycdCu2zDA6JUSgKoPRu3nxP4AYdhjnwe266YXNvzErJw",
  "key27": "38Wpen4LwBJm7ZmGLntYAGGQWqHLsMNiZGeooy3BtRzzRNsfrke5UQoZHaiqyoz57EeTsbyeZqzqznqvsMKRUkbX",
  "key28": "5vYEN83b4DBXvDc6Et8dZL5TxtRvE2HduBEsVYEmwuRYbqMjeM7PqQCRbCaWx1PGrmn69NXNWfdVHV2i4HyyeU8f",
  "key29": "2XEJXuPXJ2X5NEvKqtRmzjCxaqyAsX2N7f9AiPKjpB4iqDS1vuTzmQGUSy43zumqFpprHEBMwws4REUwDP2YSzwQ",
  "key30": "1256qdcm7JEttCWiXCLDZ4Eqkh3N8Lq1t8NsfyvdifCHY36o2hSq5nBHmHHRqhf8ft7vSv7wwERsiRhzc5i4WwHv",
  "key31": "5EuzPzrtTKmfUhxrYR6m7C8tSYfuprjLVoykZkPkYFsvQUuNizBzqtCJ9ufYUxBNQ2V4w5MHbSrjHhuFNmArbwtT",
  "key32": "35mRmKDXo9p9A2MPU5ec2NyEKqdmWmXDb5y4BdKKvDy4jo59dKK1DVbM1ws8W8Vg8eviTaGSAaxPkbnY6dALFtpq",
  "key33": "YkG9mmR8T2yxQwBiY4ne3VYQAqyh6eayEebZ5QVjuJQXaGYjs9yKnNfNHkWaWGj2VT4ZZearMTaTD1L3NjCcYVa",
  "key34": "3NbcWgK9jGZa99qSaWR94tCeK5i3DSvW5xpAZbsvryP7KpUa1A9574k5AjV5TMkTJTHdN8BZyAENV6qQyUXuQ7Uz",
  "key35": "57xeqLow7X8sQYNuqqZmp7QfGMv7iVYLgdShTEn4u7HVTwhHbELWAChfYjXLaz3xku6HQQpwcB4SeVgUbq1uK7h3",
  "key36": "38MidXVq9ShMkS4pSR1JzEqN1S41f9VDWYAzg6J7mK8RfKvN8zrAwcfYowZH8kdcJG5neCmCU327d2VYNfQQZ8X4",
  "key37": "4Zvrza74rgyNqb7XLx5CPwfjFG5hLtcL3TVTpw5JvccGyYbfeAdvAFUU3djt7qAmmDXcr74K866XxmxeQBLhdoPU",
  "key38": "4tY4j3TuJT8pX7Kn8uTMKgP3FioHoxNtYVhhFYxwfxprhk13TpQb33qSENozBXZkgcsyn8z17vd4oeU4wiJenkx9",
  "key39": "jR4RBJPQxweg94A9LuRFLAks5JsJWiafi563GU4SDbZL23TNALG9GspPi2WsvmC9YAKHQ37B9VWQRaGLSyHDcNW",
  "key40": "2HQuTrfKQyYJYSG7W67gu944ZEcN3ArN1Scddh5VjT8QoJ339o1A51DqtfJAdSVdj1GtZJRbds3q7Epa242wuJcN",
  "key41": "2cdPqEgH4jvbJqRhgLv2K9x3GVDsUj7iA8nBJyzVFEUhvog5RDVgcMP9387xepwevntESLTggtHq7r2C3xRYgLkz",
  "key42": "uM2q5MYsVS8mvtJxxKazk2GjwHkQ3xTL82toffUV382aDCfHxWLTjWgYd6WTsqhA7chym4j5Zg3USxx13QXRVer",
  "key43": "5CjpN557F8Axbi3WTeSWkE2VRBjhBnawP9ntoFGjQ6hYQpNGgwLEmXZqDEmPLiT9CVoQEpXNvyhsDxVHnQVC11Rj",
  "key44": "wafK3nxsrFi3KxvEcQyTaSPRxDuXMvxLm678nVFKn9Jyo8NfnhfPFDyAMrLas91mmWLnwxjS91Bga2nhApxjTyi",
  "key45": "2yN2ukYiBbvgpivKU8oAmV2tfKXU72pUShieyBjzV3rmSGkqey5FqLuZSTm2wbfCZUJJgvmXF4ftfAFnuaxjUsJE",
  "key46": "4bPbK6cHyQuikhNecNkJFSjFFwEBMvwz7iKouL2GcNXo4jjzK843UXY6btc3Rvd5GdTwLtf7g73qSMbXXHX5tt55",
  "key47": "2TgDdG5tR2AcihaHTqDXyKdkys388tTFZ2D3kXSD7G5tyaKbwdfuY6xhtPvy998swSBKbJy2demQnpKfsfL37uAB",
  "key48": "5DWRQCikHngRAcexUbaA7p9Qi6Bw67X1GnzUwQZKGBmgvKdZkRRPPraASzyDuaG9PHfgLAAkEEeUF4bDvLdB2EfD",
  "key49": "58GKtmtxTq7SKVjduHgruHm74qD9bTEHPR8Duj4C7gfFPAqG3cmpjbLDcCbxUD6jsU2coKWjF5krZ4CZp9BvHa8Z"
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
