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
    "3VNNnfr9fS5bDqpm1H1HAi6iNfa7vvxwnc3cnYiz6zftjGyX9PWLMCndkpxQFN6g9baZDm4k3eKfECxPCu3Gy6b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQ6cvGxj64wBUi4g71yeLZNTVkd5tXEDwayZqydotYKnAAFEBfvVD6Vpd3rWVAgt6cjwbiVJSrSXpjeJGBkRZnt",
  "key1": "5wcPERg5JQxjT1UY1BZ6FVX6u17C5iFHZ7LBkA68WQtr3TdizTUPAMEmgVc7HsMSAf41fUt4dLJumxK8t14tckkJ",
  "key2": "3VjvYZFuKLmFm9u1SUt19i87NRk5mtWoL1pbMj2DDGqKUP39SzeXknnwkWoMLpXRNszZpLBWRzHS7HQWnHDTbfwN",
  "key3": "3KTCwnUQXvy3B7kjSLhHHNakhYZMRY2eRrk35XyXU7ZV2sY7uR1fjAVCvVWdTXJtmmSRLvq5iG5vXnC6hESVbNnj",
  "key4": "4doVJGF8FZuiGFdEMhEScDUuTPXRF8E5ER1s3fiyySXGD46rY7fCpTmhvhkPsakdMfPqPrVQGWGu82mxhuUeB5wr",
  "key5": "3gkfw5YJWmGDR7SQA435wo91SGS1YkkuTPb2hQFGWK7QthcCmiBdx3rEwgrpLs6eJ2nVcZpMhneMWBUfJzLjPiHm",
  "key6": "3W13bM3mpwLQW53wioQp4cnWyLnEQrGwwtGYr65T1aEWYRa9r6Qeotao5JGzADMU89PBkWcLh7jL9d7ZMXdwGTu2",
  "key7": "TuKbcA5axvB5DZyQBSeJBanZTPw8Kn5EtuwtMhJysbJ4UavCknCKC9KhybtKCVgbTY6c9GyeiBxV25PCVGQCRZH",
  "key8": "2MZayg88i9SFtjiwbihobHWPMfhVCjfnh6zdQPqTf9HEuWhTfZjg64h6ar7rhJYrt1YCvk5z4mVfh1oiPh9Db8BG",
  "key9": "3FamHFBKcinoe6kWutJjgqTfYqVhzi94iRmnwuaUxNKU91x91T7J6BgdVysZojdq2n8nEZjiTpiGbzCTJv58wxsd",
  "key10": "642eLvC2J7Twe48uGi3dBwRbmUqLYaM6Q9BCDcumzqEHt8qtVwH6xEuHZv93TiCgc9jiBDwkNPLBLhq4toG6pU6X",
  "key11": "46Nv3TuWBe1gWxL2jcRTqhgNyM2AbjiWcq9TUF2AoJmPy6HAv5eeXs5NS8rgSgUvqd5ZbzBy3ouBrqmUdnHiWUY",
  "key12": "Jq7W9AJwrfcEQrkf4Z7G9gruk47RdfvTDsg34MbaSxpwjGcn4AMhUsbz9UkzHa6CGHJLPaGT54c1fxGz2LagKf2",
  "key13": "61Vq4ta9MFUEz1Bvp76KWEpL3Q2NWyRCuorHi18zkD8WzJNk4Lys8An3wMDqkq7tYFM5oYV77rkLPSSjWCBEMJzT",
  "key14": "f7JFH9M6Skhv71mXZYXweq2zSyWbWc1xGxnBG3hfYr1M368ucPvuBPvpuKHQ1L9zKN5r5dMMquViPt6o9MBcaAk",
  "key15": "zWTR5GXoUjwLpaga8tEV31ri9zmuRzDPVa5dTQ12ijMrfFBahXnDW3z6LzxcVCSiky1sbcLsWQaq4t8vvFWBHPA",
  "key16": "3yDkWM2gxNzm79Eq8ZSby1v2yyp9ceykJrK5fFRR2JkbXG5Rg4giqunndH7y3hC5mHrQGoZuCr8u9eHhERYRottm",
  "key17": "iTHzSMCvT5MYQtL8yEWgYJPtUzywtkMduMJxkBjxVpBHU6BxBCE5eidfrPd1Xh1p6JwqBJD1uiNkwV4noqc11Kw",
  "key18": "2uwNfJxtgdts5qeAryQkq7p4teskE5e81PtbZxZ5bMXyzDSB84Z8cUET8zzqBik1tuPy37rG6nkpK44XDfEv4yLh",
  "key19": "2wkR8bqwjBYEySbbu5QzPK5L9edEBGKHgqVpK93eZirCffFLGST9asXPffY7ZUrR5dRFv4afrreTwNhGSibgaBnT",
  "key20": "5fudgXNZaYm7dpYQaAnw8TxD8AuT9vzPsvxo4jAxFMWechk8vxiemyB7P9hBz5Fx2a4LnoZc2zruyDKxy97mp9U9",
  "key21": "4bmxY7Cw6uJuAYh4xT5LCkh4o5pfdKAEHDePbaZnyaqYiZCuvc4nRD4PMgy35QxQ1d5Ju1DcWoZuJLXAWFP3ohwB",
  "key22": "52UWR9iDoU1poVkfwCPyiWZXyZ1AXNaNKLYRCz4DicbEj4zXAiotw3ytr99o61RnJa8HFcmvqRhFrftpFFj7Mbyo",
  "key23": "5ENsu7UrFrHAkjWSP5TFLNSjJ2Fj4Qm2LezUX6Xy9SADwgspsq2gQY5agbEGqZmdMejdoAqPBidqx2SkE4zA3Hbw",
  "key24": "4fimYUzW5PN1HWDCq1eTEVuyjM16qSK8ncGdWkcNk4ZeYvUDXcvdeoT5XdPsEUPhwYoCB3gpMNssKgBZcuqiemjF",
  "key25": "4qLsoTnBUTrG7Lt8g7YGkXXrHnow96iQgXu45Ka9xAgfbPvvzva3CErey4hZm4dZCynC4dqY3NPLspc4oeFWnfX9",
  "key26": "qCkX34iPdKFGyo63LQndGHNJCQrqSvpVJeN4iWRmdtcn3APC6iyiu7NBDwZYg6kebHvYcW6kva56XvF6fHG9Lfr",
  "key27": "5Ngsebi9uvJNCmQBauifCqsZiasLHTjDowfdohM5CGQ7HcBbpssw3rVmrpLpe65hqz6fvs4zUC3z9m2Bg7dur1TY",
  "key28": "3QqTHVKZnL32T5mKUuVCc6sidbA6mBFKxQ1bMKFw9QcffSgJeNadb4GJhgoTDJJjxY9texmitfQyFPDziWwjGfPk",
  "key29": "3jvRcvpGn7YKyuAT2mezfdypL53uMfLkFKiBWEszRX1ca551qQtWbygMpkcZRWroSFUVueuydFU35vodrK9gM5ts",
  "key30": "4nyXyLpn7bUo7K2j4aDne3F7xxmJotd9YjnEaRDAtgtfr5PpULsMr9Uh62E2Jx2Ej521dW8bvgkbzBo1XxiwCeFi",
  "key31": "2jc31Fm5fGcaVzfnNzC4kM5JbbwcLMtN3sKpwzmn1enAXYnA5J2s5hFsfhuqLdRC89MafpX7r4zSUk5TWEdqgYVB",
  "key32": "3dcKpvA2NEo5CCYPAafA5PyqgG3L9N8qrRfgjbx6gBCLwnXEdiFSkB98bB4qHcXcD39TcjRJpcFvx4VySSoH5Tut",
  "key33": "3Zw7AyXLPBHfPP3JBzMxh4UtJuYeLASgQoNQaNFx89tnGFqcXYh8gECAnQEEMavfkVD8FfKitFF6aoGYMFZ7FWqt",
  "key34": "3W7f94P168s5uS42iUhTypZyUGmVQ5ZVTPb99TWHGRNBxcaWg2dXkK4MVavsni93iWFdgXPrpur2EstHcrP6XW6x",
  "key35": "2okhZgWnSUxJ9m8tTMr3faE8y2jXGoim7Le27ntymX6yRcEVaGmgbrRBjsgPLewTKzppuJ4ZMrL2LWVjFMki5cNH",
  "key36": "4bGmKnoUiyoUzKZAakYZvX7KZsqVrec7Ht9aa7FgPjWDMJwHWWxmzJs3cD2YitFUi35xV9PemD4aTFPcYpjU9UF8",
  "key37": "4hJUeNdxQVQ5FnFmenjZdXCKRXMZzdXiGwJAKncsfrKp5bAHVSiEabBonpX5tjaYTRzB6n7U84fcrwE7bNEjKcuo",
  "key38": "DL5scWXdE8XZ165VhyaFp4sd8oGhF92j7Vo9CevncjjUKRHo7vNfT87HvLsGixSBjyexgGDoQG39BdBQaRaKJGh",
  "key39": "d83uNQQwZ12XpF7Eb6zfZJCxGdobvd9fpnfkBHc2C6JqToRqnRWxVYjyW7gMPDbRHrragEZBcwxSH43dkNDsHyS",
  "key40": "3pKUYSoXD3uTYwxKXCP36XNKJntF98QmEy6Eo1ywStJ26vd5EiNb2zrb3rYE2pa3sQyimP8mNW45tQPLmTURcktM",
  "key41": "2wwonBq59GeyKronhRBsCybNRqdohm5pSZaUaHZ72FMugCysQkkMoVCqshnFzpUPeTwHbRXMMjLxJhthw8zpWfjS",
  "key42": "4a4afmtBjJrGHMi6SRbcy1qdNbuGriXYsjRpRbmAWsWFg5toXDHhcrNU2dzQBfFWM9iMsYbegTy1d3qv9Xmo5Tpa",
  "key43": "oD23wSgLmiCo1FSEJ48it3GTX1i8PCdmuSM9hDTCyows9pJdhk2psFzVRLiYE7eGwchHRMhDXtD1xk375D4pBkh",
  "key44": "5kLyafmbn9UgjwCNwPwhyzbWxdG2Q3WUYRcV2uL4sPMNkjf1eoo3y9ZqeqktZY6oTBBcPU8Qt1GEsVp7nR4YUzAE",
  "key45": "5T8NHFvAVJnTscTiC5qs6GqTpyVNop4wyFkpLoF67PJA5X7Ta3TNbZtduq95ZL8g8nkRrC1jdYcYAWci3cgafDQk",
  "key46": "5EiEMXzWzpm5f8of1WTdrxMmKFi6tuYw5dKfuF3qyZ1FBsmKkEgbHHG2zWvf78DyFhxqfzENmgVXQNQQMAvWWmm2",
  "key47": "dfACZ81vB6Q5FRNBkSieDCJLDbCCdUkCTF69177EdhqTZngbDJudveYjivnefokm2TQjUg2LVTcrATXYQckuqSS",
  "key48": "4zdEgjkbeW8FmWGE4Cx6HhuV9gbjn9qyiMT8YGbFrLa6ihs3H5jbgeK9S8moqps4KUbVpSco6bQxBGYjDCfg4wfh"
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
