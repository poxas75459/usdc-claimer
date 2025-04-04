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
    "4oyCXxnAQf758dobNHn49xX1uVkuY7maHLJatpFH6QMic1WTsMYPFwWHjH4L9Dh94tjtt8YC8cvZeahJXHVJaRWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXo5yx6e4MvTCBV4chZ9h1wCnGgZa1K3STP4vcVPeoYDtz3CTTZDQDAnmhPiqPWbyX7SmJjcRmCUAJDekwXHWtT",
  "key1": "481wkmkHHpknSpUqaMgwJ4L7PCiGXNiGgc6RiBjq7Yasu9cVAMCGTnxHUrEwzDhjb9iWF9wYG7ehHzuvDo3BfVrc",
  "key2": "4TgvzcKwT9z7jZLTFYw55CTbbypt6meg6EzfCmFjUZUACToZfJeTk65PQXqsqvQfWHSG1kFjCTATEpN9R6bkrz8S",
  "key3": "4QECPFynNmG3PoY8id56SvY1fLEAzSdYdxF772fK19NEMVnit2ZCAYGxFkTRyCyhvLsWgFpvxxbFBnaCjAkYxpVR",
  "key4": "5C8Di28dX3LPKTVSKDSVmoP4UUuQSaNHG7xSYEA5BbvmWuMfgdEsWfDCDtCMBVpYKfGvRd6esUtZWzvVrf4piSGA",
  "key5": "4ANeiNJD2KrAnjtkUmvqQKVhTvKTzrneeRUepuVXrsVeZb149saF7VwvTwzFvnZupAShCprPaLT8BEJuWSn4RYF6",
  "key6": "2uyKuJeymmFk3cwk4pv3hH34FBZmUqqHP21jFpATVgisjpccHfbkxjhRDhsEo4qGz7KCdugfSaJeX4WpwSXWGiYp",
  "key7": "3zsyCUyhgHtgL7QcYn2fmBcc2b5iESNPK939NjyneMYazZqCT9sQusanNCPwxYLumG7PtFkwNB5b5E2cUGRBXw2d",
  "key8": "3wMa6nt89TjjNjzuh3mnEbdxkRdE3LQpsoYgHTRWiJHycK8fispDGLr9sut17nZAV8z9Uu8FUkUTWFtK9s6QRQcM",
  "key9": "UDPQP9XGmWVEEifjuCRw51gqmBGuWxGDsreAf2vv2cCJPKzSFwDdUcoWkvMK1jPF2Dx7yG9ahrzXRhno2oq2W4j",
  "key10": "4scaKx6jEo7L6YUQwh1nRFuYyFBepd4RLnZMsLLhmveWBaN89drG89pBzTnV3QNjYCuANq2uiRdqeAvcTsYfLTFB",
  "key11": "3z7ewFPy4hb9m6RumLmDF5mJi7YuRQodneprQxTEfxdiD9VeGoHJN4CvgaJCpbXY7KswjwEBF5WtucUsvUpuySva",
  "key12": "391K3C1r9gQ697uuUsKHRKXqzttVsTtjxGp39zScENF5qZi5j1P4cZqqvRfdjUF2Z1opwYKTCEeri4fqBcAGXZZE",
  "key13": "4h8drAXArrAUrRACqqX5griEt6hyd5LfsrnFJpFYxpDrzWjdhmDWXW7FRvswEy878quDBoy6sSTw81K3FFm9cFzL",
  "key14": "5WVBuPjjFbFS4ZgY6zuAtdccyyjS5jfv7z6mhfr5rGa1tYb2TwZU1tSVvyD3C622VpRYuV6wi7mEFvjcNZznK1u5",
  "key15": "4XpLkWbhjgbVRDyCVLYueKyM2Wkn1ZZfACwfnfKKKtXDXrsXn2Gpw4F3ZyS7PB4nbNqc9dPcopiuuPQrV5VBqrrw",
  "key16": "51tn5aetDbV4D1DfDptb13XD4bAYAnidYtqeqLZBEfGGfvcG1k9zncrkS2hy5JBgJ5WwWqE46ZbB3FXEhTiBjsGT",
  "key17": "2WsjK5nQZ2HSzgPqWBbJu891xY9P7LGWBYLYsUa9sEpMpJTCRLimGe1xiT28cQjVaRQKmaEeJyEpsyHQMuMif3aW",
  "key18": "3Yb9xekxqhAiFfnLycJX7W1MiN6BjutsCPmGsEyWpvrM3jHtWUpATPv7ytiSEj5fa2rXwggyLaEj9KnseBUsUAB5",
  "key19": "VCocHKtDYscKQw4BUkiiXxyycTiMhCenfLYLbhZk7SeQksHcD3atYwF1RnwA1oKJPyEFxudNhbcH3dPEA23zJbM",
  "key20": "5o5Rvmr5LegnxxmwczJe3oLs5EEZKeFGquDYxK9CVcC58bdL67uhLXwcmyya2wuazyvLWm1ZZknszj2XJtFmUXMh",
  "key21": "5CHPmgytRxzVHuoqCF6a1WBhEqoicxfW1sZi3zyy43tTHnXBmVJpHoYxLVzpw46FQkQXLCQ3gkitz3K3JtKuH64m",
  "key22": "4sCiBa3vFJSFqKpCTGtD3ZVZGEHT6gfxAQQE8LkR7wvgHW2WmwBHrtnsDMiPpRN9oQ18DQwdLzq1mujw1JnrQn31",
  "key23": "5T6nWkcoVcJJJy3eV83sEhfvzbJ7nhis1r2Faa8o59cuw9kMhpWN1PWPLYDp5G4dJnK9UE4ctm54TyeExA7LNm36",
  "key24": "5f6rrvhnU4Ai16yTh2S1KfrVYumd8YSKnSUzQ6haoGgZwrNKhMqzMYFyoBfUZV9qiDmGVGK1rKs4LhzC2Fdcy88m",
  "key25": "CXF3jGHQoFr3y5d1HfGaTGet9afJsN49G6DB4EktkxBc3mBAVhKY5MSzHqwGdQoJ3iq6A5WexsU4n4EEwivDfqs",
  "key26": "4akuQ17ouCkbHDA2jEYE2WbV2sXNKoA5cr3g4SG8GqkXR18v6Aj2FeWr6QkXssN5h8p8UUvsXkeUk81nSRf9DcUm",
  "key27": "2ssGETC3ecRejAJoekcKeQMYDkmkBmuk4ym7Hmi2HrYwfFfdw3XVBnUcSbhPMUDbpoj5zdnDBC5UB4tJ7E9kEq1r",
  "key28": "4uRJjjuHWx3MYLgQekd5EqF52rC678ShDPPQFu8wFNLzQXqCWCawZdXZkYhgDaeMGJ3Ayr8MpUtzp5BYLhNWn26J",
  "key29": "3sgknHJQKBPB9hx29U41GoZn1Nsspx1Kx6p8P9hLtGS6NA8zKhL1MjoAHiuFZr89kn4s6eX4EbNgf5mQNk1D3VW4",
  "key30": "4CPn6TiNaSgZBLyvjHzRMA2QSUkJdA3vq3zX3jLdYH89dkz2zBmGeFgvUMqoXTwYdAhDRdQoL6EHNrKLp98nYDXa",
  "key31": "TEpHHRihdcPUNYGDk8ToTYhhEL9CgGS2aRyuK1dZr9oZaRrXwFs4DsKrRYzJ9TGTqWemApoXypNenfeAH4vVU9E",
  "key32": "4K2Tze9C7ARDzVjPa9zhS9ZsAKa9RMJs4Hihs95vbYS8coVjXfVh1P4ETtTJco35YcGhS8PvJADx4GfAKMKQ6jGk",
  "key33": "52bRmTfpsh7wjb6wTWPbKpky9oKKmCrBXRddfYJ2rQvB13mTF58BcFaMqsJPrrkvYsnC2o1T9Ni5DtHGjxxkTVPn",
  "key34": "3Syo7hRHXSQVH3CJtWAmFG1xsFNFUiFzySrM4gyEsGJ6zNzX96uFeSZiKfH2tSiu9z3QCSseUoDC554hj4fwHppm",
  "key35": "3e9zqnBr1wwU8AyQzrp4K56yHH9opHgWn4nDhmVL7xBJ8Tg5MCijUMQPDn8knEDqF3SVrLGJc2WNuo2jJ7cPg1a5",
  "key36": "33TvE1CmtHv1fPHrgQedU423z4xjm8SQsxvwbo51Y4FDTB2C9kTdmiQjqA7FXsKZEXVms7a9GyETL4NSd2mLQVBY",
  "key37": "67pcWeX6keLsafhdxtEqVVK4BrQBvSdXhBa2wzAnmGnZTZnzJnZLbjRdG3RuCQYu4QUyajGxc1mRBaSQah62LSbV",
  "key38": "5MtmwgK7pMPNBcB5426vo1dxiUR1dwYe86vJeJ47x24CGdJpqj21v6tJMCh8wmretc2NFoPMVq2fgzA17qv1FyFM",
  "key39": "2xuVCf7WcHGBijNR25czziqfMEVx7EBsUkupoGeYWJoBxB6BbVQ47bFBNYkqSig5MWgG7yRwMFnCGJK75QH1itZr",
  "key40": "25Lq3ty5jQHRmFiX3eyoCBE36FSEJyZuJ2W8dgFQTKb4RqEaCUeqeVn6QSKPVjyfNraT7fbPbazLdHyw6ybsPyUj",
  "key41": "K2eZGdSmjrQGDWk97MhzK75C6LBxNw6f6rCzEtANspwSdJahcT2raPjxK5gUU4wpFV5WyzET56m7MDcv9XP5tPh",
  "key42": "2j51cHAgqDpZzphz1SDKD3gdYxYkwvNhXiSwd5Pa76QWr4HSgSK96MZe7fPbmCHr3WGmZXEc63f4fL8rrcKX75vU",
  "key43": "2pnN1e7ZpSVyBgH1wAVMD9hcvRpNUrcghTm9LJ1mok9tYxQ5dNtbyXbbfpGUk1KomZK6dr1od939K9jQorcapKpx",
  "key44": "3d69LoS1BUJVdgqyM49GbZMdLPkgZhM3RfRJkbxGdoQYW2kpKptzDopQHWtqpnJyJfFQSmB3t6BCie2qfi75bq8L",
  "key45": "29hoXTQDqFK8GLFRHipxwbiVm9H1yBSzHD2wqmLXpxjWgudHDjsjfnTEAyaTcZhvBnxvVBXVGUVrmuPgxzuy6hAU",
  "key46": "2qX9SW64FzKew2YMFwkahm8L5U2xexKu9p5Pk25DYTQzdRvwYG1hgotZXDMjoWnkPcqmbM4euHByLEQ1vqHBnAgC"
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
