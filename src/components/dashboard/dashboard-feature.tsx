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
    "3ZPtF7BzyCQgMWwqheA7REDUkggSc7txa4K5CiBRQNndA7Ye3a7Z5cigN29rucUrHWt4YGZ7s21AkyYvj9kZsZJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syjS9h9SDRiwmJn7uMhEqori99zkLwjhPzZgiicQBPpA74wy5EfWSqxjnR2A6MtuTN9rvWVeevzmb9G6wQ52PMk",
  "key1": "4rdyCJuECRuwkkEvcUFvYuEoUXRZwKADdSKFp1Qcw2Nodb5KwupAiQAe7ASqpFcN4p5waf1SQowrSeW4jwcuRA9y",
  "key2": "2Cb5iBw54PNu198u4GqsWw5HPJaxsLQjyiTDprk8nWBzcvM7VqE4BVM7iXy6Y91CRGu9u3zoto8C6enZPHcswRaM",
  "key3": "5GBvFdfd1xNnr8NyrXSWUSNpCGTK5GFxKEgk1BMsbyNeynAcYmbxq8trvwKTETf3oWu22FXd2fEzXEe1C95BojjP",
  "key4": "D6bBxsiz7yMYqDqBDfQYHhG241ZnhWbKTWjuqpi2NLx8dWhdWLxTwdjz75dQ8dUBBXUGFddHxkjELoWzTYfCkwv",
  "key5": "y9R3T18cvnJB2nUspKzW5eBF53GVVghDquQYC6g9qy3S4fMRNnnBUdH3LdsocWHpvK9fZgCZkmsofcbTZASEif6",
  "key6": "yGRfNYsJ1deL5W6z6uG6uYZcg7mNWzja5EFRJuh45cGw2EkvU3g3AKFdsJow8DhHA6Mk3oEVMX7BkXkuEJzfu1y",
  "key7": "qajxdPJrvJgDnNJkvYNZoNWu5wHEN1NZYh7kcG6VR5qkuUkPfoxxVWY7D7uYvt4XdZkEAW8rYwTd7cHzQ9YdiEk",
  "key8": "2FkmMGecHni78PvPqV2j3wxnqqXrg9PDTtjrxLGHNQSFoLuDe5NGbynmhKpZFu3vY26KXTN2Wg2TEPTqDsXLaP1r",
  "key9": "2GtYvWqb7uS4yuSWHSMpxx7m81tPw4VAnZvtyxdcSUX8ssER9ZbRrZAn4ymsUCm25JA618m6z3VyAzBW7z4UTaKe",
  "key10": "4aaa19xFTagQ5kaJkZdVNTiKBbBTR7YL488GyuoH3Nu2fWnoNFburRVm8MCQe7sYHiVYrfvbEfvggyD2jMZ2kuqV",
  "key11": "4qMQc3eMYae6y2v3LwYPKiL997k5zgU2zJ34tbGp7znfQnGEYsJhUxD5LtmWVS7eqtPSdygiiHtW6LNrpk5TQcwj",
  "key12": "2r5fSUNabo9x7BWVYCfh3QLEsoLk65YKRG7MHcNxnNDXCM1FQ2gfofTwqhpMUZ8i8pPopcCHczLj5wFz1uirS2G8",
  "key13": "5G4umrpMT7vnZUMaTjUWV6mHjmdiy7dsgeh6k4U4zAWh12nd4zRT5Wvrhyi6bXVKLrXXFoHwK65mnBzzSBoNCtgB",
  "key14": "3JQAFMzcWTggoqGiJLefutQyGaTuBkAKt6UoRNMv51GWZXouFsCtPzTkRntWdPqyywDV75SkGt81DtgEEvyArpSj",
  "key15": "3qU4ngwdrjqRbuz4aPXhFfFVWTvC7xax32dZWyuksYjGiJfbkFeA8Sub4dxTAdnAzyTSVXJabPDm17UbTCNAH1ir",
  "key16": "4Nv8WrkAiRVCr78jtoGrVoR4jUBw1knbRuga2Ae6PzLfxGmneaDMYpcjBoHoBXtLToqsCCJS72wprMRoGMeiWrNf",
  "key17": "3BCq9svXNKr7NXfGturjmQnaYL84vJ1DJ3ghpdjd7mXXNG7SYQbdqH4vu7xV6cu869EfqHS1HxLnXkY5YkmTBXxi",
  "key18": "DbL5iqnqvs6J15bRWD9FxCoez1uGp2HbC4JTxFiWcRFuEb8SfCMvECggzSdf7bZicRvcZeGsnhcCamLHKRfZaqR",
  "key19": "2uMeDHArQ3d13ZsYz31sYLB3UgbtDS5KbaUKVPFyFF4KyTbFRm5W65Cya8w1bnoWcyPhcbwDM6ZpaxieRzemEvNc",
  "key20": "3UHVNGM1zJg4daAibs88etW8cQ8CBdf4HHXTvWbBfUxtFkj5CpCjHs1gwz81Cgq7CkELhqn8m793EAiHsPhSL5Go",
  "key21": "ojnhLTb26rRwXzWsVFjMAQRFaD3C24pvWozcGkKnPwtiW8KACgNYjnynZZZMXd5BqSH2XRcivYGtVaGg2Yfwex4",
  "key22": "HgUWUxKi6mxR3vaAKytCs57rEdNrUbxFhk5eej9Cmtr4C6TFTfCqE6bS98Fyp7iJNyn7joyuhmzbLZMPeBGgMjP",
  "key23": "38nHbeJGc548EsUThpMkJznMK3Jq1vCyUt591pSnQgupsXpLcLnquHTMjYiXxjuDcwkwRjDQVaQeARY4hFqxKMgn",
  "key24": "4q3dVMZxN77bjRhMrzXHsGx5coykqVrRze1Bj3oUU5c6iTa7Hwtc3D3Q7pfYKgeXSivdZ2W7McTcp4yTGqq7eMVs",
  "key25": "ziz4jnbCJY5AYTP5KVW2wGL9ik1Lcfmne1h3jvKeFm4hWicsEQibXZuUX8QEGp9cC8Bvy5bCvHrQFc7SFrVBGvi",
  "key26": "GfBfvBXXgyByidTbKQ6D1GxNnNzrPtJRJf64Uwa79VN65waApUMPqpMTUUYYP1TwRkm8hALbcYcRoa2HgZEtJ9c",
  "key27": "4ZP1m4j8ULAEWLmMENuptTEX5GWoiMyxtLfvxDBB8Muoissb1occNZ9gXLDu3fRfvsKoQJpn4JGx9Qx62ovSoGXk",
  "key28": "2GXkejAoZYan3DCkZSug4NHm58jhkWCWaKSJ5jLZ8BgMtXjnUiSGr4hFJhq9Cg5toYUbzkvZDhpU12VNbQ4vQLUy",
  "key29": "aAQRUcFM2p2Nr2TLBB6Vab5XYFGr3e5Y5nM24QQ3pBzTMhd1WtKjrkWo7MmSm53ASehzk9XeUHWX2JpxyykSwT5",
  "key30": "5xBGXG6nQM7GrAtmTYsbJmewcKx8qWKGreVMpNDtLNbA5JyG7FYFKyywZxT1zurWGDbajP7GkNPoEgb5GW7KyowN",
  "key31": "WWt91y1nfnyebHSN1DGaxxbBsPavGTa9DboUqFNoRetTeHAJAvWzj42iKz7VqVBTHtq2UC8hyjTUEPLnz8pHg91",
  "key32": "2iQDvhTVcXokxsVwDu4Nz1u8MGZhtoMckG332CqsC2g3PunyxyTdLy5DXh7UEJBGAW3sYiEukvsxr7a55btd2a4a",
  "key33": "5bzTzutEN5VaviVtfC2dxwuNjtkVg8d1kk7erTPU9h84AZvYFbifB8diP3Pb7JjSxrHrNaNedgLY4uUrux9tf1CP",
  "key34": "2ZGW9p89BGxSvgNiAoNA7U3duyop2zHJY11yw1N4sytpbqcGhLJ6yTaFJfnuFWedYDEvWw1kiH7Whb1JdAsKrPze",
  "key35": "4YVNLem3dqYeiQ43ojYcBYMzFwUstX8fSPw51rQrABN3LkbmHcuKKg33Ug4eXan6KsCEbwpY1Dxmi4qdPdkct9PX",
  "key36": "5UjAxb5P5n2wD2KUb9C7Hv4GwPbSHfxsxiiCocZWt6f82n4BdSgNC11VieTX1SjdaRdss7DzwfqGuQtGHwe776pw",
  "key37": "4yrGyePc6QeJbmL2GVfQJ5ko31SEXgtSDJmKB78mZnJF8VXLQqpApLaqgWSdd9yARaEKwK48fGX4DtzTuySY9LHm",
  "key38": "rGNvqjR4fFiCyCPyXMJBBHZmHXUmSprgfqvmiGnrRhLWYgkWZ9MiG7L89Yz5XxERvVeGfhrV8RpGddUiM27bvDY",
  "key39": "47jSdU2iv2Yf3LyrGxuL91hgqEFfvTf32eBTrWn2HqCVeC54HQDfyrF5d7ab8Hs65GidyHqR7C4vKg5DcRptkxNW",
  "key40": "b95XJtZqXkz5r1NHqQvMeca3Z35SsjcyiWs5TAiHJLVKysQcktBDyuwow3JKMzbytgVvNeckhLuXC9mdRbcc83g",
  "key41": "3RBkBmQfjBJXpXXY7AhuVsDYn94rKjcxFhTCvrabeKAmBSsEdgwSXBDyo9uqMNY9PnqUeFvp469XujeoWqehCrPu",
  "key42": "2Ws4wAaaqvCYNtzPRWcBkB1N6DgqvHHQNV2zFzaWuLgffF3dZbGGYFLUV8eizJt7BKdngPyKB3ceehzVmceRdWUY",
  "key43": "6hnApyvqrXcyoZwSQaaBpJ2Q4CDycn8ZjjnBdei48BQFE26QACeZYJ4qT9QEKNUbe5VrXtWkH4uWnFD3v7Bpqsw",
  "key44": "5XDwnURDzxX6bL7LD9L61KKf4ffiLE4Q7hAxMDDQZBePeAWV6vRBeN7N3VD1Pxc4oUNCZa6EVkVRhHWUfZvbLAW9",
  "key45": "nqNTJ9sNCkBBGnY3TYEMmZ4f8GGww1pqxz5KHwuMJKKHdJSNKJAoihKD8P14biJ5v3ghDZstvFmv732Zmb75KXD",
  "key46": "2FS9Vt8nvo7aWRvzeiYb6UPr8jRCggWD5KksZy3F4xfbongnmjSE8bXSX2SRmHz9Au9akyBZ7x6NwTScRiPUszJ7",
  "key47": "XyaNikBCmCnPZijuGyQgcLt7XLd97meQ52BGBM7sD9zMQrYazDt1nSyFozYKVNn2j8FehxfMituP8Y5is1uTDoY",
  "key48": "sKEmLbdL5EQ9iaduceQTxke9nW48pTMS8qjcxYoNMrUDYdAbfibnoeUZaYDwBMZxufixkgHqTVqNxQ7YCtzGYUP",
  "key49": "sGh6p8UY1kWLeJKxtzAFL1NR5CfjFBHYuBzR3aMivut4WwPUYayZwAoprMSvYKt6tu7uVDZRHdT2fFz7xfgAhWL"
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
