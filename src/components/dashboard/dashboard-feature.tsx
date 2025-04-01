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
    "3KSnhTo8na6JhiccvQmJanDTBioBLVKBoAffa1Lb64Dq14drVhALSosJKNPEo3GwnqUNSn6pCyWkBNZWk1dqZsDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5HhpZNN6NdLMfZcD63c5yBwP8Ly8UCgceLJ2Yb8gbvCKdBtCHRXEkkFTZVh3cRK1nUPBQDsNQ1UiVWe9KCRtfW",
  "key1": "v71bfbwog2GYj6uAisDhYjs3qMJeejteCw8ir6bAQRE9Um1WXiEn7gxaiJM5wNKmrAm8sVUF9aAhtwTmNPCwrhd",
  "key2": "LCcAYGq86gh3ExZjr8taYkHVr4zGvezYVNzy98E9Fq83LNPbQy3bQnSmCjWTBCdU2e2EwyanKMf6hwTsiPyg38G",
  "key3": "3gGQeDUEWKZCUwetnyZSHHmGB1mQ8AErnBa56HApHKGxCzunfDewG7uQtZ1DNRoPkY9TRAtZtGbJkHkYutEsyww8",
  "key4": "27ft1Z6GytqpFXAdN8fvLp5N6jB1viqpLuMmHidcUd1485VqsgxBjy1STp5KVKvBoqa7qfp17UWoravM2aMS39rj",
  "key5": "szihTZC4XFUxAcYpkz7XYtiHcTge3tEotRvj3xakSxVqKe6Bet5VVmHmoYihcgBFfanPKhs6LmGbqpZmdJ2Suco",
  "key6": "9kNFm6TKSanFnFPycvZFfMERn3j3QLcRjBqqRVwbaq8PGYHDvDyejpJpv88gEuRZABEveWMgyFGS5xgXoce4u8k",
  "key7": "3Lsree1TACyv5va51ofjP4YFfHbicip1j3Q854hrsJjrdNDGJbLch7JgrAukMZqHfSRQixfUvUdtfqkVtW3hSJ9q",
  "key8": "2soXE8YzkuYLnaHeT2zBue2KRVRqvgPm4iCHsvTdLoHYDQWFTCNHveorv7DvdeCqEW6uM82nj6PUpxoBKw9QApBt",
  "key9": "4wnKJGqwFSjoSAAjxtyHCaJSxnaJRAbAJm2LcdHZBcWTid5HS7A4s36ZhpUS66RSwsqRsvQDdB5Vq8S2whHYbj4y",
  "key10": "4Wvqxn5QRdJpo5A2NzcDrqjuLsgEQnzJTiMxSHAQZyhKUt2hhKUtWo1kkFmtwDZ9G2YRBCgZCkTuXMFKs978aWGX",
  "key11": "2UNPMa7jmJ1BAgLaAwdLf3qWk9MisP6waMTHhDd7NZFiYM9x5UynV9ZfWms4DA88EweugMzUVp9R2eA5JATS83Nu",
  "key12": "3jNLnLjq3rLHLxaDCLoexUsJGZ2FpzyWioacNJj2mQMKvs2rV4c1cLV4VBcjU55aeXdVHypKQVANQJFFHuTmkWXv",
  "key13": "C7fgooRTdupfsbMZZMJKZZ64tSGpNZgy1oeULZTCjJiERmYWRq5DQfN9TPLN7S3RMK9BP3prYJSHXAD2g45Zsrp",
  "key14": "4t3ereQzQxVewDRnkP1ZShoJxmbxwRLH5XfjTyMatNXtnEK3kNYAn5n7NBVNwFQjUYr1ZFwWBNH9WttFrnbbPPqT",
  "key15": "dpAt7FkWfFUt5PTwXMMmB2meaxM7m9RkELVbMxEhkhKg8XChwguZUj2AU7NNVCZaSehBcuHjv8v3fhdKFaouKBh",
  "key16": "cwVENXwvwf8pkLEb977E8tybhk529Zyc1Fs8yrUxDe6knJawhSeLbXNFDCbS5rCMi1hnMxKQtqwcdjt2HX946Yj",
  "key17": "52nnao8Zx7STJee65mEmrmDGRQyPe8iVW1Wpd7FUjrCXZpu82f3C263874fThjppzZcyrgF5DMpMAzvWQc8xKwEi",
  "key18": "2jermf69dP2UTx2yNTJh9a8Zkb5D6pVWAYvZpzeTf5rAprt8c1M6vPpMxzf4Wbkss2PGJm3gyz4udfJy6o1jGDoC",
  "key19": "3wEtZkgLuAX8Uf9cA3iUHUmiVDrL7u6pthuGuWEHUwUcsZvj1vMYg1zQq5qp4x6onELMofPGtQGvPcF8QwB8vYFR",
  "key20": "5LGCdhfPGEPhk5n99NUk8sn7ycGjrHWKWHh1jht5WkR5WCP9j3Nu2JfkzNkmcvNCRGBwKZzfPuCeooHKccWJfZw2",
  "key21": "V6sMhenP1dtHDdNKahJW5zUg3AgcDusZkxECjw5WitDoXksKJeAJSfEfNT4asLe9az96SBkpEF2eTuVuYQDdGvp",
  "key22": "4zjC443ZsULNZtgY9eyzEGgkbAXeXj4bCDbEND6Sj7vkVZ6vqi8d5QbBMyFVLb9m7pzZgsP9svcT3QtXZmrfuF8i",
  "key23": "5DgHzS6XELrBkJv6NEpxhtafJ2QZWYnzodgzT7j6mM54Tvwr9QEJ8vX4z2m1atz5dNz82Nfq5771qYXDcMt8LTE9",
  "key24": "3jMxyXsNs3sZC9s8GF2QqUXms5qp44KKYkk1qK4mCgHJhczPF3GvH82z2e74Tz4q4RLfMnXf39KV1Kv34Gb96J9s",
  "key25": "MQtryjJDnctvfXPc1zhYEkCp5jDKzorG1wZtvF3u6UpmkHjKMuGnHDE89X8Uiom3e3uwzi6Rr8MdYjbw5gpooby",
  "key26": "2nD73kTGu2bkvCduye3Xs6pYFt21xBLHwP2fADUEFVmuY4pbc2hcXuhou692xreXKwJbbUR2TWJPtSV8FnLE2JBY",
  "key27": "5jH1SKJffp2Nmxukrj2Bb9jvxTzWVkchTrraoTc7k1R4B1PKBRjocEsFhkEfwfCrvGYrauN2XeMBsB2LJCF77cbn",
  "key28": "4kpjQeH1LQ88pJK1Z6EpjYHGL4vpiCKn8E5BJqWPogC6oSGWGY7kBrXmib3f4f2Gbqv5iDDKeLGFu56Ho9mKoCsj",
  "key29": "2YdWzTmHi5FUspUBdhB6B36oDYVSzwnwu7cnPTLG4sefMs4sKisdFePPKxShF5T4ndWQJBVg4dokiKNJ8cGdp13k",
  "key30": "2B9pL4KueuhbpVxVev4n5tNgQYg9Pwv2t2BeiDLhtouk7D7Xk4djqQHMPk9cVcceaCMzV1Ro15yRSp5HUSHD2Y21",
  "key31": "aRznddic6zFeypr1T74LzLs4MS2GwaRSpmFK4HjQyRWDkNxUmyACBxDWadAEDiGhfh4YBBqyRyyMWJ9y3t1XEZ3",
  "key32": "4mRENAkjR1Zxs9k4ZckfaGjZELYCqnRVowH4HQhgTaveQD3bcBEmxkr7Cxhz62a3eLy7bas23chMUic2cNNDSYkd",
  "key33": "5Jd4UeyRrSCUZ6rVsKme1WhgyHivytMx3Xhjg9NsDA8bNv286TMhDPf3PtCWk1ytjmQFpZfMBAcrXyPWVfWJJdNZ",
  "key34": "2GWTScgmxvfDmcAemdHHZ3Ut2rWDb7HFdLr76nk6Tzs3RBYNdW6Acx3MMuZDuQgH7d1BhwujW44EExWt7hEp77PX",
  "key35": "5eQBwtQHSRtm6uVFJ6ZXS7CS1dH27SnuwuNT4zQPqxD9K1EhRsDnxpYggiHnGgLLL6oRXgRsmZ93CucyZmRiffLR",
  "key36": "34NLo48k5XzKRJYEEBC2DF7z5Kw7V6vnQ2eGP85a498hWtJnFwM1dNrFXUU1dAieYfnNGDDU49tjJic7u4ZpShfW",
  "key37": "4gMiwBkDx3wTMsnw8pVDNgHHD7dkCcNrjnDroAUutvdpBHeJcFPiu4DZUSZqDFLoKbB5wwsHTmgHqJW7q7QY2cN3",
  "key38": "ELdsQQGJRBk3NqDFEqbsNVNmqw5de9dEn88LLj3NoMYeHjS4CiJutg6ndnDm4AgSTVZTHTXxF8UYG4Wh8DhgMVZ",
  "key39": "4CuF5pQVA4yTFK1eQZFDja7A44YsXL2FBGvJxK9px9HQ9fNkD6PAKKZzJYhRUzuSR9i4JZoKR8xq3DSVq4q1FN96",
  "key40": "5msgG5jqx8nfwxNPTLWTAFkwPJkZdNTXpXw9QetGEzXaJA1XXtzmLxWrVMiUc32e3U64QzYGcvwR1efs2iHZ3Qjh",
  "key41": "Bw3u116cmPQVhR7AJJ3U4fTezawGTM6fGf72udZCaX3hzSa9Pyycrdz8NYogXWziHuwMyRTn3wDBDdy3Dq86Pwu",
  "key42": "5XTTpxGgUubp1ZmSyB1sHCXKMGXWuMvzoQXgYZ1jjDCwA8CCZJtxTYHVAd1Di8S6Z2ahpJaNo4PXVpHP7pi3khqH",
  "key43": "2CBNTdVU5Wn8HGVoopVSxC87tqay5Tojnnh2S6wmShhM4CfcAdVTT3QMqGhj8xhnzTxvHRJnA59rf9e6Xaj2Bi1Y",
  "key44": "5rkKKZrBKLuWsPdHFxejdLkrWBi7icEAi8v1WPJ54dRVesx6KDvpSCUPqX6AnroUUqNZL5p7ZTsunP2zcpWfESmU"
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
