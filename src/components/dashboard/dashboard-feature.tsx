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
    "y24Dk7QUSFyWHhQra5sWUgw3NXZjDRVKy1diaseE1dfzEpRCe3ZTJz7MVbCj5Kx8Y8f2v6nCY3JRqdDFE8yBmWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2iStpiGqnHA32jsag96jd9FUjc5zZVpmhBvsGFhBg3G762UsU4985mqsycBRLUgyP4hJiE7dBV9UXGhMH7x1Fu",
  "key1": "2xLLxoFBJCxocf2v7sPcN3CN1TSMNrj8X9Pw6xwsBFwekg1MyLmgBKJDowvPRk71p3v8o6vbKofhQ6Y21yYVZfL",
  "key2": "5F115nQq3VyahK8c4xeUUUWoFyaDNsq7Kzfscj6yVaifvHntZHnSPYJYdjXpmhiDGqASPAx62qUqDMBMySHuS9XT",
  "key3": "TYw9kB3bqkDJNT2ypqzNoHbVFsbVfL2a76UzKJCPgMqsAHg1FotJ8r3yi3E8VgDBnWUD6PzZnbCb8gsnKiCwa1W",
  "key4": "dygsexLMbaDrQNLfcgPUYc1L7p3muyCpnnL2385FFt4NWC83zjxToUCpVRrEr34wXoG7FBLDi8fMAeSxQGWYGy2",
  "key5": "MjyZy3gzeuWJuzem7Ldo7jVk8agm6NbwfLppzyJfs5jV9TL5HyoGKhVYm9zvDb78G8KPgAqenr3L277qq6NpHzj",
  "key6": "4SEA28yXgZAUmkPKbTrU6Fbq2X1wo3EEBrknK1kxZDEWdtCo1CCsfJEktdG7BJCECmAn1DACTiBW6LBLLeaDVtEC",
  "key7": "3wMMEbkCj91FZcsjdU3JbHZxnvzt4oTtQHS8GkyJA4qHjFrQA2kM8voyhokGwZotKQ2VNjSazLvDdyfNnygva7qB",
  "key8": "JFGZK7A1TdmHL4T2CUM4ATLbj8FAk3KUuRXcmmwhCMKarDUvWXdqqHTWKEYmzpVo8BzAHQGQ3QZidna3s9pbCoW",
  "key9": "tjRwNjCA9goBfg8Nov9HB4Cg4p2H8bJsvWjikvgsb4PgKQKC7YSJPH8LULUxTh41dET8vF13SYrZb28JXeWvcnq",
  "key10": "3ksLfssrFqqwPZXGKqCtUd6yauY2QBy8uDLUAQmyrBnPrSKWVa1cK8ykLyjc8YXE8ck7djontNFTus6w96EWJH1x",
  "key11": "4akAT6duMkFTeJ73Wuv8a5CzeGkwL5wUg3uKySxFhsF4heGVreLniejnMoTHPpSc9CNt4UC6S43Ct83iMsjbeb4Y",
  "key12": "5jK7CxfecUgZJwLyQNS2arHdp5B1QhwuiKpjHH5fQLdtteHWjWvB9o6QxyU6kPHMEMzi59x54h3i98LucXLgjZys",
  "key13": "3sN5RK22yijRJWNNJBN8yLDAuREPQWhJFvhjSqzX8P6ym9GM59Q9xvaDMUeeBMv3dfaVfzEWZY26rMhjVfKwnvrS",
  "key14": "3UWknQvqj5CdSxzcFN4FLMiKBCiaTRgF4NyuQjW5FiYa3AA7hMkLzamLrUbK3JyQ1e6hiHxdvndXbqmFCHTftcLK",
  "key15": "3rpq7Hdcr7Sd7KM9L1appMiHZN3GNdHuNyd1pLxmPpW93KTaptMqPnihgJdA1cc8zGb9tZvpC6yVBTRphjeND7vo",
  "key16": "4zytGN4MgdFMv7CVhssg5fyEnb7QsxkExGNcaE3FusEiaSSdaPGs5zdHYbWLVc6iiMFB941A82RTTq5y5MMTWN1z",
  "key17": "2sXYTUtrxDXob4Dzv3ZkYPwq3Xcow4DSKctfUwRuuLaBrazP5wrRLu3vBfG52GPGsqZ39e8NdnuHxYJa4LpCrEwC",
  "key18": "51GR3cdvjC31XjF16L7QqvqRAfCD2g41NmCdbUxrfX4qzwP227Txw7UQrdMjoVeTfRTTdMGxjSLNs3g6TEHeaWJK",
  "key19": "22nGFv76YmEaCBkt44uX6xRUk3c6Bi2gp2qa2h5cH5DDoXb9HX5fmFE3Mu67YmfbahkYRdjyqdwwqrKZHnf8azgG",
  "key20": "vnofHfrGjUT7wFrobmXypcuyGnc91VvNyo2HgVxGf49KA4EfXzePtAqSo1mzMtZ6XvVWC1UgP6sqbYc8BKjQfu3",
  "key21": "ZHybgXaG5SFHoky4SYcmvMBRqdbUvVqTqbsgJTZFLL9Us9yj6s2zHsGiK8adWd1fuDeQqAYZYFrKoKj9B8es8Gm",
  "key22": "3QwjARpz1MYXHNbweMQVwA7JAx9x6j29F7yNfiEc6Gm38u1nq7ZHpNCB14KRjdujGqsBmLn8fpTRWfpaWHDcScYW",
  "key23": "63fnvH71usxby6ZjfogSoQApapUwKrSfdB3Nctzc5JLw3nv6z2hLLMu9S9fZt8BVw5TcGumMVm2mnQR342iorsSF",
  "key24": "3bPwEQpj1j4rESf2XNwmxDf3ksT1uGkx55tC9x9dyaWBe14Ves8k1j6qoi3SqYrYPLbQRQTqgfQM2bqnf8rxwE5X",
  "key25": "5L5h5vcBYNLwTckKnWEKJDZ8Sem87pWbPfnny3orhXuPnTxxuovZGUMvcxm8gunQRLwAJszEGVKa795EarfSwRiy",
  "key26": "61wjdb2bhnPCTkrGQYCQBGTw6yKPgX2B95fZduwTvgGKxWprc1dJa7aZqHyietBg3jFeW1uyNgB49mBD9B62uLqE",
  "key27": "3vR5xFXarA5NCPvL5G7GwJN36k3SBXksSJEvQCQGo9ikdkvjgDG4soJtjsMMnB7gc4vx7y84efADSbWBuBFyYZta",
  "key28": "p4TPrtNRGw4Gx4khPf3zNwnnLm6Bbw5MSsH5GuhZ135X7bz5aErWnd8RqMHv275xciWMAzvFQhh5Ak8HtpJMfJ7",
  "key29": "5yfp3w2LtFZdBaaZVKu8QLMiFWRRRPvKtHNGg7S2T6Fp1k9LjkcmrKw8tUHQheznuGMA8XhopAHVV8RJmBR3cL6v",
  "key30": "3WCMaDehfcZLWpjjsY1LaCXWXogWCTzFLCtPvjZfQDyknYtahkAXtg7A5S24Mo3PpYTv2mhatkqRyTYd665eVTnX",
  "key31": "3S2Scc9tF6k3b6P2c4PbGogvg1z4DbVRUb9BUtkTfBAgWwY1Q8fZkcfupMzjZBcjcizwpMXMJKDjLp3x9SnaQwdm",
  "key32": "2vep73mCj5fmr319aeSVVQuMifnNjnGGwNZujKBMETUFsdERj58aZ7CW77nYM3qjjGdEjJETuRZdeKyEH3VTiVLz",
  "key33": "4as75ZZdVRMjJivfZJEta7NXx3TnbMEZAtu6KLHPFCCNHvycuM1xLVBZ5Hmep5F3cgcaN7muYohju7Qz9CNpbLxh",
  "key34": "5pZw915pQY1qGpE1fh6aW3k55g5U3AzhxZ94FFnQj2jseBx7SzoNos77BdCY6ZtJvY2R99kHi25NUjaRXRaNGydd",
  "key35": "66pPwABvF7bsjrMQxhWgcQcUuoLWss3pA5p2VGJrnwCbFZfFYe9zLNgmnFbKog5VjearY9pV47VcXGTamKc4KUi8",
  "key36": "5MHqRkGwQkzQfCdsLkjM9PMYY7VVavoLyk5j9Ud3sdQ9KNi7KT4Zen6SdR7efCVeJaVfPLiaHkLwZhyaSZJCR5R3",
  "key37": "2J84nsnMZ8jUAC1VHx2AjrGTD2drcna5dam1XwTDJms6WFPhYuKuAw7VQRw9RZVZVYQqwDSf7PcBtQwJrqUuW8ud",
  "key38": "3KRC2JqJxvp2oepvYiiL7xCQGroondJFPm5tRo6xd7K33yCowaDK7tD3hFzmDXDsERtVvdp1xMetyQAj6s7i2ZjU",
  "key39": "3447HG7HZaaVoeBAFRXuhjvu4yxvnqiXUdBot34Fv7v5gT4G8rt7aLWRpRuyTbyqBPwuos1QwvaEeRSwv6sCVneN",
  "key40": "2rPfhtkqepKin6pNdbyHTS9pHmtDsVH16LQZj3Z5k36SxL5XwHh7bfCCWmFN1XUHj4by5s42ZKr4gtFhsowK3rhJ",
  "key41": "2nNUWLHR2AsgKXqFLXU6xiHfdhsKnVevmejAnUhqdniASV2jqQZajntchT1Fr6AdXssmGk12PoDvitvdeakQv6MB",
  "key42": "21ZDB5eYo8XJW11kVZDxXcb4aY2nMrewgEhpCD7SsUmyK9KhcGLRqebtGjWMXyokdrW2SPowASBgSBSTTY3djtgd",
  "key43": "mY3238mSCS2jzQJYnF5BQ6fvk8yKWZRT5gAwsbAMZaEy5ngJozSqvDbEXoNr432KHLWBGuEdRT2MFEY8q875wKV",
  "key44": "44Hu2JAZNKyzYuEGzroCRoUSS39fTT52hrHfABc4RnYKP5L7ZgiqKqQVhMe4HhMCkSF3CfHVffNYDtTFNVixoKtG",
  "key45": "5xXp1nAbqxmJk67t7Qk2Ccx8eH8SmV5qniBbqv5obuFCDwvMjKenpxeypSBKhWKuDXqbojSGnSjFRRF7tWzM34uf",
  "key46": "2aDd1HqkDwvBPoWqYeUSZ4C6KN7bBNn41tXXURqSU2aP3weyVbnzTQGUaBc5Sv6vtwEKeBRxZ3HhZgWooEQx8CjW"
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
