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
    "575QpUYXrZ2cXDgpX2ooFaeXSFaUDzej5CiNErEqkD1tZ52powe3GQe8GheHXnEbXrQK4yFWp89ffrBhiA1F8ACb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qd92RbFdvvPDESFnpDEa2dr1WbuW6Esw7LAjJ1eXwJBLk9e5gSG8vpv9VhEnCyS1zwwXZXaMjWoBEn89kQUdxZA",
  "key1": "5PQvW4woid5AUdkEqyBT3cKkCjrJnCrSNFayz2kvBuAJQqGNVgEki8qpkSEf6aXwVEVbJUWzCX3Yr3PEa1SmEhXS",
  "key2": "MRtvuurcnCZLGh3X1WbY6A2DqurTe1KSH9geo9fvSuUz7bzJ3heptNoFJ1rpVB81KdnewJqqjTjpkxdTT6cZWT7",
  "key3": "4LuGEqe64FMRN5dWM36aUxvnibepkbggCtWJocptzd8YzjdsXzmHKPGMX1pQSsjExgXdtNPZK7HEiuc3agE3aynM",
  "key4": "4To4zYMj5uK6dfJM1BbDbbnZTgzhLixgSMaARF6eXao5unHVzK3hY9Hm6g91dP5jKKLST4w24SXBjxBQ1KCPg3Jr",
  "key5": "4TX7w3vcFkwr6BXxDr5ovrvoipZwB6gXYiFKR5RpeCCqvmywroFrauX2c7upx7MBoNuX5E1mM85xMv3gFYZdhTL8",
  "key6": "3UXRTw1J4QWbnGMnPJD7DkoQY6qHfrKToTRFiT78wb2zmrVNaRFC6uVipj4mADrHYTpV6ahCKv9mCTyjbyqMyqGw",
  "key7": "4VAb9rAav9mmpYM8Tcd7rVgBdtcrRes2o2fgSW6sBCRdxzmwXPqV8rhryzAWixRcUuWkgtDtRyKfYBQB4cDnpzXV",
  "key8": "2ETtiaVoDGARuV11yT8BxnTEbEgzL9FxdTR6xDxGyvzjF6WNorYwHQRnsDnB1zsrePrBcsnvn4xst4WNyh7u9cec",
  "key9": "3FUtg2dp62hQCANJCn1MVs89yvvJLyCwjYZyZpr4dkrib7bWmi15MKY1ymUA4XAA4KrNEJ527goY9X2nG9Ubx1uW",
  "key10": "5BVFb7u1Wnp5Aus6ZBb4qWmgbQTYDq72TL97LNwtykFdytPcEPHkdbDwPCpwVZeQifQXvdM4SCurd7MqF3W8aB81",
  "key11": "5JBonHN4dVqDmQSrAWiSevUVcwpbQ5y9mvNJCm5bfHJ7WF7n1U4yheJEnUGucbiedAA2pBp3v3H8prJNYKNkJgr",
  "key12": "4QnXMC4arrZdHoBMf3ou9xr98z9UbbAC9V4cpXuUEBoJciwrykrQ6Y3Vj8MZ4yVXBDn6gM2vvz69Ey2RDJWTudfX",
  "key13": "4B6DE5pSEwaJ8vV3Gc2HDtLP7jWkxR2tN8nu7gbisCwNmUtFjHUff9pEDFBUL972ELLFTqZKCsyRrgWkYgb1D6cG",
  "key14": "34UWGfeANyUQufrp5ukX1XnY8PKw5Xu6VnVfpY8uS39Y1eBu9PU4SXLMP9x4QkbdzU5mz64aZ5V2SThnTk52FXoi",
  "key15": "5o7c8WVryCUK8sFF4q8ezSFFpa6VNno9J8XKC3mTwbwi43w9zTWKaTfM2buRXJY7TY9Aw31fyxJEGaQmtT1nhN3R",
  "key16": "32PsVa5bdXHhCnGUWBRzmDvudHvwGkhEgozPoNQAfAZK6wFLLStc9mvLbJGMctu7mGNFJCVr2j9VoWjVHvymJZUu",
  "key17": "7djRGYbtMxTWx6K2hSPjKYqikkZdQreoqitjycecrsGFcSisJPiQY5b77JTA3pJh5bXpTaKQkFUuugBQkXwTJkm",
  "key18": "4kBKM1uh5MgaLPNSrcXx1oAs6z773YrMbbrnSyebAQGSkM3i7QJYzErMiEGTgTYsu7WUMJabYRiBcbPb63jjrmcX",
  "key19": "wQEtyVYFYBt5g9AAYkNAeV1Euw5GHrJXaj1YdBvAe2ieJu2hfZX4NoGRgyp7369GFGdBcU1oP3Xeqd85iDmmnjN",
  "key20": "5zq8J798qFrCMWpYq6xG68UT18tAqKkiic266fHEPiEQhGkyg6waKSTPNsz8SSwR1mfVmibu2BytFEMVgnHXWDR3",
  "key21": "64BwTtDA4DMX4TnC3R6Hcao4hi8zEyzQQdJbgWCZxXS5QMPhkPkGNZvGr8vTMnNfTKxLjmmAPoebejy3qPtjfKNc",
  "key22": "2yvEEK9TSLVAVpaF5SEfbFXy2Giwg9efcsLfQGQovCa8S2vYu1Y3L2GHJozErNmBBWRQgjcUnvM4xScyFJSn1kJu",
  "key23": "3qgPX5zasbz4vDTKAC8Er9UWq81T1jeo9FEQ2AdZH5MWACc8Mvrxq82ggtKdskxP8P7g6q6vbA12uoUU2xRFKPeM",
  "key24": "26zG9LSu3BqfUnd1mVZW3EGwpZMh4dc4n5yCyprhuP1LwkizatysshFeah9L2Chdj8Hc55UNuA4CD5dLLmmTg2KS",
  "key25": "2PDq5LgDj9o4PXAT6WrLYCnXeSWveBoZQwLwksF4m9Wt3JeoicAEJ1bSnuGemks33gTEXx353BdkLfctHjkVoQ4n",
  "key26": "31YVups5hnek8cWLXqioxqpV9ixEYsd9K9cpRetDzXPCqrGiACJe5EwZKAPmNMhuMtzvmEFX4G9Yujq5Fbu8fikE",
  "key27": "5exECz8Mu6RWFyeL4Fd9HMSSPh4JVDnvRTzNbepxJb1XQfE5C7G5h26qp25V9DvafbTQPSLkmCvSA8kB2vwfgEEE",
  "key28": "4TQ9bQoLPVfFcgvH4VFUSZMJNAfRjPokeoRi7zCZCwoiuo8vUsugJZ4CBaPuW5fSoas1cqKTwMR51jWjQxPouUp3",
  "key29": "3V7Cge5xdhHUhD3jPG2rQdCZPbiJkjC5MARSZaKd2onPjrsmaAZiuWEQzWx2mBgNiP8XyPH286fAaVAtJktE2aoq",
  "key30": "3EdNXXyiPbDvPdf2W7yZo2tiKMwaFUAFEfeMBMF1vG7HYPs9WE1cDqEbmCRTRgRwU8NsBsuYpGGH6EM1GoUY93Nz",
  "key31": "5jddGwRwprAYfm8r1RjN82JdgdifBMifdv8R2xcfJAnwFxX6LBYhRAKiFAcftdrGuNKmuZRCeE8Fu9yniW52bQ5j",
  "key32": "5rLjQT1xjC4Ve4hvc7dbyzAus4WQj6oFT3ZmN7w5mca9x88hYy1C2ATSYN71NXGE6zXyBnnob2dLtBSjJrrK6wev",
  "key33": "3EComXHrH41rcMpVVcLPjshDq1TrHgcRLLwappiAE6TJ4CaQLpsLFDghMayEDbHC3ja95KfMwzHxUByzeWakiPW8",
  "key34": "2HZXaPDHRrQMkyYYu7rbmgxE4DNyZ2ut4cDFuAoMZUmuLP2Jofb7itooN45vozmQxQW8SY98x2beRCT4v6g6xAPY",
  "key35": "62HXTco7nbHh2oi4N6FUmBe4i4eegR4NxKpJEJmg5xYr1zRyLKfrwcsrLhLGFW6PK6XAzyaLvJq2SYApBrLq4MRf",
  "key36": "4f518nSQpuh7rRb2eNSuwwDzxuwnWEAvnTCUWKmApsqjeieGmigs4TbE761KHmhqXiS5pHxDHFH9WQpyNqp6ad53",
  "key37": "4cK5TnQpbpVrJybRUUPfbyiHCGvbUVyGAV4VB1ia14pRQu5yj3dL9vZnpsmBGxG1V4KCWJe6rEwsKDcPn17YUBPE",
  "key38": "3P5N6xLUzuoCRmV3XF6Z7c11StEooy2b6xXgJbiBFvGW5oURcfkuXuxVnohpw5iP2hV9V6ohFTLYA7Tsinq7YGrm",
  "key39": "4vUSCCu2MwJvGv5opQqq1xSZStKuDYEvFfuZg7BMXSLvVriWJmXmKp7C4Rm9ggAUQKsxQbVzmJ2W9YCQ2x2fPKrL",
  "key40": "3wkZDHBhVChyLTbkPGzhfkZjUj5kBWEFzuPyi7gJTn6ThNiEDGsoUSetBWobfPcgaEquHKh68KTjraQLyqksNaQk",
  "key41": "3sAR2PbqSHs6R6J7Fd3gGZUHVEJ1EYNi6XWvreMpBsK8p8CPtHwMxcXPW6wLzJ8NjXHRxzTEKH5ytiqvxaTX1HFN",
  "key42": "5S1CN312MCND1CZrtzZzBtSFQqLhSfrfzLtUhSSnwzRaeH2LUhvhJjb8AZFuBRvVTFg63Rg9pRhraNfFrS1aQHLQ",
  "key43": "2PRj5G89uagVM81jucaGY58597xVQsdpixY3BfgJjwNJ4hQUWE3BPQajy1CZH21cGDMRj3HdmcyPhaXwdUR9mtER",
  "key44": "5zBzjm7VrQ2QFDiBv95RHSdfNQcpQLDBdsGAJDCdReVA6xZEN4E4jEHJWChGbShL4W85zgtPGYpos5ajVWYZyvQA",
  "key45": "3b3fYTc4snPtz3uhiy4Eq9NwUkYozrPtCEFZ9TjB3QtqcLsXtkt9oCdMfzKvA28uec8buWJuV2xqFjaWY165JK98",
  "key46": "5seU2e83xsATEzUsR1poEcUi1AkQtn4TSBQXQvhzcSpP7Z3JVhDxpTsW8SotauMRtqoCoZbUfKiu6covvE997TFB",
  "key47": "61aTSkadg2Mu4E4w89qkqFt9FQPwAEC444j2KqSGGVniqKrHC8rYFpoWf5wsQFwPQuPnKJxbcNB9ETMCNs9h8oLK",
  "key48": "3cP2ECKdCJycB9sPhVxj2HuJv7sty5Bppuok2d7uLT5CTNS6cS3HsdmXhefckhZrsYJVQSxEgcJ9q5K85RvEeshX",
  "key49": "5KUaytUEX3m1sdX6tfKzQnDKR1286DhCMGeJyh9Tmkt2E9P72SQgMUtaJToavJP83djFG4KeKEYS9dDyqKk6Wh3c"
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
