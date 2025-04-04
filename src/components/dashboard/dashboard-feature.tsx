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
    "3J4hrVfGr5GHwxCbgZr1z55j5kzDwx5zJ3WPwYWtNEJYrWk72PvWxfkQrSdK8PvmLyx6iadSa1z27LuGXB9SQ6bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZEyFEuePF9TyiPQpoiMNd152mGWS2TfyEhE8t7wtwuEuPcNvbSvmGQsAjzXNS1wexYXLo5ZCQSacwrr3erCSFj",
  "key1": "2adSk3o9g5JeXvzQKDCQG1pLxuvvAb9jddirnqJvdGcXbyV25zwZEj8Kq4gtUqwsHBkFrLmwjFDAWGtfLUa9yJsG",
  "key2": "3h2sGQgKmRCuwyHMwzpbNg1aFzYFf8p7NFbN3iafhsiqmYWMGH3PxSAiqSMi8B3WVftfnd8bDN8iKkXPxjj1r1t9",
  "key3": "35RWrtuqiFhH5r9Sx4ZQUtFs2sdkfkCxbpDGzT8VYYceLfdb9xMmbDPqv75k9A7aZj8RKrJsipuBKSizEBN3PtYZ",
  "key4": "4wDyghZUpGA31hZqg4sL2Qu1MRxfFx8wb4eZG6J7tsGSwFaqrkXPHwweoqviuL9jjjWnqK4hSUDnpfPscVYsDRDj",
  "key5": "5v9zGbxoE6omX2B7Do2gU37jbm5R4qArt9CYmH3pD7CupQr9nx8VSK1m3PnXqokeHkECCANKWF4jjTaNee7AFkFM",
  "key6": "3xzbs5fuqFinQZwFsdXhKorTdQcWp2m3qjByti8YqbRQuHonecMSHsDwPUuHUkGtwozNQynmVuNpT2bvPKA2F4hZ",
  "key7": "2Wpfnk3DPRvYHbdKtPX9fESJ5CMvmTudqCwJBxM3VAvKoZS1F7cVRrLgXai87S2Kv4bbSWSZsc3Svaec6NXHvZPY",
  "key8": "4JTLVaJgYMWLAeiGYh75U2GzktnnK5GWstRDCg5T2a6QhC6Xmj396GdKNbxfpPZmH5NpUtBZQYFn3MNEG6ztH5DN",
  "key9": "QKqJ7nwhQVuE4SVASiCaPu3BZDvZLgyP3n2LVGbqTMtMyiFAomGPMPfCEhvGJUH7UcbfecL28z7oJSWbsyGR5hw",
  "key10": "5jtdG8kJYE7bDZVaxfVgLmYRXuFWgstWqqE5ABWP4UuNR8moVSg7HKh1P7QPnMU9nU7wg9vKHwfaxFsKwG6ChEek",
  "key11": "648a5k7kpmXHCZCktTfyyuJZb2tz6VX8Tsutzy4m6xPmFapHFshGJ2ceLP7Z8hE3h9pQvhofZ3fdsbZ49EDRDceL",
  "key12": "2sWYspDpWFHG6XeJguwk3MhYH2WeK9KZ6Nds5Mw1XUM5VS3sycddcE1TAdSXp9tgF9Zqm5bHfuEJ5TaqLXLErEew",
  "key13": "wkBHiwVJLUcfzngUeu4jziKEvRZmRnJvLSMADhYqHWdzdG2c4e5jhcPvLz9Qdbx8LoUFc9KTbB7y1T2LteJGLPV",
  "key14": "4gy46PUSFqvq4VxbYpMVLRivfqPcrBRfL3ZPHREXuSnJrJnakgD89Bdpir2gyNMw4KzHy4X9f7U6wQbNqLRRjuoT",
  "key15": "aF4hx51uuUTfemZivQiBJYH74giNnEWPyXzv6V5NBTQ3Wz5EyazVfmX2KXsbHxjCxBAV2pY3xLAxAJypnpQaZLJ",
  "key16": "4qZvkh12gg61eeD4w4c9r1UdMcQUQtw3hUkZNcy9VgdgG7nFfYZozxtvj5j66WsJwX9dYAX6Yhtgfmh3gkWMGCF2",
  "key17": "Cm8Br7qMuvUwRsejLeL2wewuJNXQq2rWHceiQ8XtbJMBrzECWtjnFbZsiYY6V3aeHrzindsB7gqFCorWYZmFKRd",
  "key18": "2f7YHJEeRcY55i2Bt6Feup1wTda4D4D18m9pq8pdTmuFMgnsNDYZWLNwf6ZNQm8b7TaAksvRSQviJq4YQBF2A9RJ",
  "key19": "38ZdMbxTzhpNafx4kQs1ePju2gVnvuCJ3Ne5omDnars9QS5d3LjABvKcaHa2HJYEaKLpudUtmzGah93vj73mRkpA",
  "key20": "2XiBk9MBaUEFXxhnziGghLXL4isWsTfoVj4gPjL27Vi9RfSDnn17AsedCWzWZRfb2tTssW7FfLMNh9tzfBCrCeZU",
  "key21": "2zfk8eRiFrCAWn3VTgbMoix1hEkinT29XTe7Hk6qT7rbn7AWQzoPhGgVqcn1mkCsFbboNju2A2rehMnTiCCWAdS9",
  "key22": "38b6qEYS2voksE5FQxuq2zmRhtCaTTSCQzzXPv8m9efCyJTEvenAEBw4mFyFa8HGpPQnFBZ33LmkciwkPmubQqEJ",
  "key23": "5vrDPdDHiow3v3a7NAuR1MCTyHbSP8U8MyJxVU3Lyj5vrZxfef56rVEcdYasGtm8e9EsUz4HZYdrSEh4VkeKFPpi",
  "key24": "3W7QdqXv16HCWDrFKfboG72ChFJ24DsYep2Jdfk5ozzJCG7KbNb4pjk2VRVm2zr7LPK2mpMocJ4kJgUSj8vUQAHx",
  "key25": "4UizkoSLbaGjk7T8TCNQ4ttxY3aAj9PrJjCVKbGnuUXrCfiWbH6bNxRprmLHPFx3iSfWGZDLn2FALeWkqrTzebrp",
  "key26": "3Z8ZEW99oLbrKi7aWvzRZkaemyte1hoaRUFtr3AyzJC3oaUgs9SkArDbayxvCGMEY54ZHm9QPSKLNHEvRHpU4yKc",
  "key27": "2R55eUifs5X89oABL27hN4NmMAn165GvmuWZKFtwHkqqJj8WkYSnRbRcBFAgw2LLQ9UeZoSxKv2jQBrM1BB2rmhm",
  "key28": "6nYT74uXf2wHWvFFTWPSz7yvh8WWsL8zJdXefgkNbrwEpuBKYSxbqbxsKZssRjwFd9JXW9fw9zbeVcfJcUhQF3C",
  "key29": "2hVaNJBmSHZVEDy7M5HRVBswKvPoL2PAT1V2UicrjE1K22czwhNqmCoEXzc6z6dswvB1neeXXnXpJWyVEqHZSNe",
  "key30": "3RQPmStpttRrnUKyNKwAmE3eTtJXjxn8agF1AHHweaug6HVdxe5dEqMAKZDmhL2zjPchGBBEkeLgT8wdVwUS6KsM",
  "key31": "4UNt8BBX3pqXBRgdizfMt1p5gmcjCF7BBLPq5j9tF3jut4sLrsAwWyWSVf9mNe1xiiC471d9j4eQNuVqSt7evcW2",
  "key32": "5rvLq6VhAyEs6dNWmpDuDqbTJ3aVQ61TvYoaeZYa9N6EJT4MANJgnnWRZg38rrohHSzsLrMZCNifjUVgkYHWeQxa",
  "key33": "1W45BcMLmdj3qstHVmZNB1gVWXXBQRU5MM41E9UTmosC7aQzEHRUAgyYZRjDftLV9SqMTa6ANJxYXKLyAe4WLyv",
  "key34": "4oGJVF4hiqfg1QCSPAGm8wiTh4nwVLYBYyPTJiYWGdLtBecTtj4ZoQMVnQJDt8Bixy4JPW3Zg68qjFBHAX8w6R85",
  "key35": "5K8xWQ5VJYq8rFpouc2wYMfiBZLmZUPudwvE7Q9J2aAwLDFa8foUimYzQEKo826TPQPEoRxUZFi1fUZwdDGCEaZ8",
  "key36": "4J3MRgA3L2CU2ZqCUDTKjWFGwkW3574FKdoX7c5rpcZo5dH9d5h7aHvYTRA1GsePUVg6VJQtPAt723d7BFiqQU7p",
  "key37": "5nJ8zLDyv9hmCgGS3Fg12pZwccA6HVU9NRpY4bW1cJV89yShNBkotZusE6r3bVXyzqCzmPuLtxmFX7i87hv83MHb",
  "key38": "2iiTNMrrEKQEWr6y2yyuxBDQUkW7L44vJ2EYPGiFvpXpxH3sziK8oN1z716TdoiL1wHS8piAfPqhScQNbPL4VKE1",
  "key39": "VkWjBYDqj7Wr51VWGQVcDG93yBy95BP5d9pv7s1FrmAungaXqZGRfx6sEdSibM9rtdbqVx6SRwPUNWVVwUZnnry",
  "key40": "4SCgQj48MaLCRiwTWvevrT42etBGm3TDX9Li4SKqLz1a45cEdbZb3rtvFwPebUE4xcJDfHRAf9JkUk6bgzE2B2xT",
  "key41": "2nPisXQ94HPHqRVA6BYcRTagwFbwENcWTBeNkqTbbXvr17oAAM8hDYe1TGE3vozEJ81v8j11rirpY6oDqZswrHUE",
  "key42": "tEpUpzwkctHCjgEoEhSt6KkcsBetmRL8TNfBZfZQTJDaB6Mvo5r9QBAJoDmssM3d5ZBTQGwqixWQW4NtFiEbE1v",
  "key43": "47jMqz8NnjNkVfsmRFAuGHG4TYt3P7axthyEk7qTgfNMXozNFdwHfZskWuKw8FwsW1ZApWSsA7p2uow4xmA3U692",
  "key44": "4MYSZ7Ta2kUqy97KDZUXHGjkUs94Yb2kEUp6YasGRLT7MpWaT6vbD4DosNPWPd4312DLNiqEJ3fxFHD3MJHZBRfG",
  "key45": "2BajaAHit7vw3yyeTFkCpwy2cyufLPdp2RjrdJoaVuGvLrbdn1M5sFmNtyoZAUrGod28z1A5mPQ9D96z6RhanByu",
  "key46": "4hdjMux1inhXh6WXUBG9iEFmNgU1TU2sJ8Ui5HPgY2UbgCQC7Pc48H96zZTHoEsNUA638NHQEHyPApyTuCMx4P2i",
  "key47": "474X1BSZ6ejRhSQCYzmZNra7jL2Uc6La5dk7HbDT6aKQWNF3PFij4jkUCj7xAEXReex9mztdx3g5sxriQ5LaWd8N",
  "key48": "3L5M5bfkWSGWcUHDCEdKPXTpomKkQzLw1aDSiVTe7FeKBb8AiSJ3gB5GJUjFp7n2wVrYSD4UAgUdcTELjyB6Zp4w"
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
