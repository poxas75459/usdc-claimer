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
    "5w9dLLJwq9vEbUKyXTs3N7hPwR1ieL7FU8w2sYL8qpLeBwPEoyf7ZJUKCYiyxdbGCMcm9Kxi7Rk8Rh35ahyjmvP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piUY8n4foHq8uQmSHMAqqB3vVAFB3AESu4acJyDdPXATQrvo9H8i6XWYZwgdFTZz3DvetY1BwB32ciRLjz4DJgp",
  "key1": "iQNfo17jk8eRL3x4bHGQrUYfiKSKAQwLQai9s1AKv3Z7R9R5wVftNdH7ZykewxKTJg1x8XmJwdcsPrFqut58MuG",
  "key2": "tSkcyyyaqgQ1zRGN5aexiPpbWuewgNrSTneNA1MmKVJkps3XciEDpboubNzqTTgHyMxqXDmeddCJ23rKCySLJ2k",
  "key3": "3LUPZsm3gWkF4kzLw2DWk1YgvgSbYSRFn1pZEsaUXYGS3qGzFrAxqAVJCEmbiSg68mZnN17cfaV8X7jdtbut4C2W",
  "key4": "pFRQ2DvJ1mSR2EUBmzFdfMhJcZv9bSg8rYF49Ltsg5KJLQTwcc6LVpfpVfPGxKazkS2EvhWcctHFimd6SLoebH8",
  "key5": "2gDVbJxaETq9s34RZunXp2CzQnHYpA7K9JbVmYk2cUE6YhHPiwrZg5DBpBmJMuHzC6c2GLB7nCQTZ8rRzcboXj6x",
  "key6": "2mPvwUCMk1dSyWWFoKKpf7M2TZqD2Q8Xtm5mcjNJ3WA994eNG1GVVy9ubcCo1NVC78xWfJXJnJ28webZv2nUFRE9",
  "key7": "413LokdSES9cumSoiEiRNZzKPg15zzytE1eQXGpdKdPuZKGLakRKbP8nWqy5vH6PZipk9zdfVagZVGmLnKcoatjj",
  "key8": "2fWmvAFDCiPMjdrpncbWMX6Ke2uTMZN71HFB3CMpymFJSdiq2b7voDWnSiBKWks4t4VSbuLbos5GjVwsqVPkXFfM",
  "key9": "NdP4yx1RfpQGgsKNC2VPkqppMKqDPR5qq1w2Z5wRR4sByCfLN2S6BZw6UnAJLpMwMpDcSj4U9zV6tVVXh6XfqvZ",
  "key10": "65G6mghpa4Wj5mBFPZ3rXqnNXwF9NVacySFZpJFDDZjUuucjvq88vyNokdgYavUw7G11stcdSGkQkbJSUEmXY4ZP",
  "key11": "45aMdWpd1oatrThUgHDZSohfKn5VyHuq3Gny7sk9NSHVs2ruwsP1VvaYZsRzmErH8YHcj1N5L653o39tHrrgTWH6",
  "key12": "5CfpNbxJ213VY9kUWGXYeJCbMmbrvBMQkaaeN1XV7A9PnwhDGxXc1fi6h9ax5TFEx6S7Enyc16WsG6ci9yNEHBQr",
  "key13": "vvXSkJqRyuj7oKUs452qsSSxuixva5Q3gFVZatTbT6SNqxGeBLQSxxw98MYGDBkNRZWiYsMVVJKUz4c7WJJ3TR9",
  "key14": "ZqodN2ypXusrqPmWjVFTx8PENA7ECrZwK9Kn4EeN9aFqDQ53HRuxjUX5KnGzq1YFt5cjbLQ5cJD31QnQ6tpxFgn",
  "key15": "2KyCoo6S2iRJ9GX9b5JpjabnHHgmEXK5iBgHYPNPiaqM7QEPq1YbZv9nicXbDE1Qife6LuCC6ThLGAzr47dPnTyp",
  "key16": "2PAs65hkfciohvapfYZrVDZPybJGa9SKTHv3XHuwDJEKnzmXGMbv4cMamhJE3QnNSvRWNRbjpxRHGgV34294TvPt",
  "key17": "5xM1csKa8EjU6mrkvzhtMn6vp3GZhjeJiJoG4FPKgDoAn9hZcAhG7udJkZEKV5xzudwGEM7FRgaVzpjQUyQaguwW",
  "key18": "5J7PZWZmZAMDocFRfhRdQeDfMicPz7sABkLmi7boKz3cpMFFgZ8uK3cNZB5aQ2VgVSuBo7Sqn8qpsZP5gwBGebji",
  "key19": "22Xvpyi5MEXomYM9YfWfG4NbUbutowZ522sygqGrfftAY4EYqCYg2DmjK7CUwyEaM5b3i4GdhsYJK2ELPUrKPcVW",
  "key20": "23edxu6BB2QtKvvurV3SFCnNnYCQf4UE1tTCgjZpe7fSHzLjb9XDW82oBniKHL2xtX83TYDHshsaYKtF3dKaQMP1",
  "key21": "KXnpHKqnA7R5Zub1Aa6iNFuWk1MNiLeRkmAGuegrmeuGNqNta4HRsKbozcEcXHkFdQh8e7RUNtqVZbCoih6J4S6",
  "key22": "5zYKGPoLR9mSibog4YLzvGE8W59k2DzAW4hwtrPmVhUWVTLCxnPFra89umU3jMaR8iDJYBFH1ASJ1zBBuKZSXP5B",
  "key23": "4YFnvDnUJ2WyK9PtjR6ttS6yW2zaXuJUBnraheYvEXxF1UkaCFFbkKkPEJWcAz115SViT9xReEq99ycvuArhmmxh",
  "key24": "62H8JnTECzeVyQZzT5xkf1xV9Lv52BCoVtnctxvTZAMVYxdkAz2aC8RLhrN3TR6aoVFbd9bED1ViVSFFaaGt2u76",
  "key25": "3eFRGCY56o4Kk2YYHMN8DMzp1hUb1SPR7uYCTPCF6xRYx4m1Ras5jw5qU12tiKU9sFx4FBtGxKkVHtpmU2fJrYe1",
  "key26": "2ESUnZKSN2i19HY56uBh5pQsu9GGsfeGVUk7kEToNN9cMASjkt9cXpRxW2qqkyvHHgReiJxeVQbYtXVWXVE5LWWS",
  "key27": "5EuQojhPQ612wTZLXGoxJG1N4kRBBVd3QTL9r1JJ4xLSgPmniE3WepjrmU8SUTiRxGyV6SUdo3qPzctvFSHt5V7V",
  "key28": "5FYoZZpdHphSD1mZVnKuXoHErecGyifYYtRyZaBSuzHv7VNdX7XUqkKZX7qe99pPobzdbZJwZY3AmPqbXcsp1p2N",
  "key29": "41Cs6NWsT2ffLrbuEzhXFnTetPPwBbqXgYYkZWfgKVDTaeX5cxFaVWipW37cpE5ewg6KDVAdRvey4ixPopehezww",
  "key30": "5r8RmeBz5fzR66Rxn4w7YfdEu6b7491qrgv2b8gATMCr86yYQQ7et8SNDmvzwbrM7BsojC1S9buL3hXnwi7L9484",
  "key31": "VwhBu4eubUJXQTuU9SsJHxWDBBtMq5ZCSmeuWwAuC6hBSqFtAXERLamfEgcDtuLawmcp7vA6Tqe75SRkXxoY2s5",
  "key32": "5cBkZLhp4iT2KXXYzerGkqijJEusyj4GRakjcDqDY7qfSigD7bYWVkbEeya11TNFM15mLiWGGsPPtnFaoZwf7JUU",
  "key33": "5U9jW79cUcW3J3gKigs9CSrPmfVbPiE539CYXvpz5Rkur4WuVU4u7JHvVQQAJ87KN31Eaj6MYKRq3bavvNeeXgqi",
  "key34": "3U7Y3X2uBDy74tKZfsXYbn6wxJTCRZWByd7KM95e8mFiRUmPNBHGUr8cKZDngrLegUhPbZ31pEakx8a4X8FtbbB4",
  "key35": "5EwWfQ74enT8d86ik1JAk4jnoUhscW2yJi9x1JoMzKXjRPct4o5ZtBfz41BSjuGGp5KsY1Mhi8DiCwYkTbaucLjn",
  "key36": "3RenvVnZ5tpNSPMLNaqhFNS4SCaGj2geWzyL16E3ktX1hfgnSMnuyLiRhb6TPqLE79sQ1g6rQUsDX3XojWpNp3Bs",
  "key37": "22AMr3BXnkbFpqqJJDUbeQkVbFKC4U2Tiw6cyhEQFP8SzJQ1m8qPzKv1dJqtQhbyvxpHAx9mHNRkMXNkLvbXRVPs",
  "key38": "3hLUsetEqDv5DG8j7wHqie8LwJcgYZ3NpPpjcVKgR8h7AB83pANFALds9cPXpfGs2mhAsJ8fzWh6VnWSebGWrF9c",
  "key39": "3Gc9oQi8mkU2zZ21GLbhbskPyLRYjBFQ5D3TMyp9MAfMw1FRpXH2JsacR7UcSm79RNEW94Pgy4VVZyaJRmZNiTXo",
  "key40": "3LbpUN19EJSCunqtrLRvWcwz8cZ71XH4Ynbsr4UNwtckCse6HEHTk6SMoNu6AUi6AGEKEzpm93QME2c21HHS79Zh",
  "key41": "3X9yECP92wo9Z2E6Aq64QU5ggX8ZzTHxRvrhtspudcec3zg79xmJkYy8rL97dUQJmAWMz5WCe85Kb32UHxYWrdZ",
  "key42": "3ekGJiyVL7rMMbbmPu6Pn7a1byjjpebFeechztBv1JrTAgy5tg5Z4EJAytsJcfkywAph6VNM9pMZyG56e6DvCfA7",
  "key43": "3tqQAecwb8ytLRf3VGjYLb5cD5MfsJuecL6hWsFyRwpcLrWMfMKg2V2U6aFzzJN8QQAoV98wwvbi8vPAjf9kGs9c",
  "key44": "4xADoimCgCZVGWJRDdUNLeF7UmbexMthdqWXGpPQjzAVZrMyKp5tEHwPw45ahFn2SdJBoqnYiD5K7UB5EyQ67PoP",
  "key45": "4KHP2v3siA5vDxbvF6ux6ASA1rCTgk5U15tfrvuhGn11X7MtShrdDzMnZdUBv6mPsUjty8WabHDNBoQiCdHbJYCe",
  "key46": "C2f3tQyQmoYWUwnyFNkHQtTLFeQMeqop2ecGgkdtpu8teAVJD5BSm9As1UY6gnzDuGcJi8SBTXQ5cw6m7tp2CGN",
  "key47": "46RhopucnmGN5TrC3MmKiJLBffyvLY62gwp7XWZbGFuGcaytZ3SpS4UuKeTdxNCM4MEsP8yo5JdLBruCwaEd6VW"
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
