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
    "4LWpKX9nfXGYyocmRD9CVgvcGGV7vaZQPzriTfXLbWEeKuL9JbcKXdQNjHvPkWra4vQX12XraW7jUdxjmQdyKBZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzTfqsPqovWEyVXcs4fPCh7P8HRu26YEQnvtnCNJbjH2pbkrWJCwrxdQNsqKEhN1q4RKj4idEXcznWUqrUGC6u4",
  "key1": "3TRR16HAorDCSERejXhu13uJjLR2e5NqGT5yPyc8yR9F8enhfSshkUDrbPktSKF1sEe7XL9aWiLc2bzbYSnA26Z6",
  "key2": "3Z4BKqwsbPm4WwJopDcMhP7QionbsaBtRZxFemQspGnB3nMRM4UiMD5XUK365BiyzQWPPiT4R9cjTzU5eGUiKBiJ",
  "key3": "2ifXnJZkxK48JD7YAtCg9NZgxytXj4XExBESzsYBxkT1rQGBYTraFrWGbeo3gnHaJkGCETHfqxezwYSxMcTwFy42",
  "key4": "Gw2YCRs47ePVgci4maN3gnVx5xfEeLu6nYtuxen2MJrc4e2dkUMVrvJDQ7ntvA6TiLvqtkJ5B9oECPYoBKJKwNz",
  "key5": "LVZ6t8pxsjLGaNp7mKEfdfBGgZEMWbvepAzBt48EhWL33fM9uEa2QPvwcUFqKvpQUNKyksizQxAAcv1oCmpjweD",
  "key6": "22KFhJKEn51mPSacHtHRLDxC3VfxQMJMMdUjnUdgZ8yBLn8wVJ88wrikaoprMiqc92msjiXa9Ab1wqzXTPvzjFnm",
  "key7": "K7QwxS2y2t7dUj7dw5d1xh7rBN5s67ABw8ahMG3noazzmvFNedwuCesc1Xb3ZTdknHocGTK28ztnv5wTMsjY4u3",
  "key8": "UpQhubUAuYX1EgnT6wEXLN4Ab1WUQwiSTDBeHVxkSzSHTp43m2GBtGK2K6xJp3LhNxLMpiDWrKfuTKLuqACAnQB",
  "key9": "4MtZ3hFHzxqesHQ9ZK5MTLZXNSdpnkdcwm8z9AQ1mNPqxGH7DKnhdUSBeKkDtetpzC9HezJr6GzSo53C5X2khUo2",
  "key10": "3BeXAVgEKAKaVd6QXqixB7geMNHJWLCucAy5o2DFSHZrFZGtA7Us4Dqa2LXqpzGFCk3MphutKwQfXqY6iz24xVNn",
  "key11": "R6eUMxpULwArKXKtZb9fjkdRdkuNw1wEzBrDAqt6mPxYKuRdjRPjj5mRRmw3RqDfFDnwFL24rHQNbLrceLNCjzK",
  "key12": "57NQGa6Vaghdq4Nevx9NTHg4xtNpiPqfEsugxir5L8ia2FKjehg3xKPa8j26QDVNrZKW4qzRquv9eqMWHTGUEV15",
  "key13": "2MB5ZrPKAC5nhDHsDvPz5WWCse54X5jZppFwyA8t2FQ8kDQ8CaqKxzjiSiJjERu7Ehf6nA8DCAPJFDJHksQiVvMP",
  "key14": "43WPcMNm5y9JHXfbcpqp7SZ97DQ1RbMxMbDaeE7DQiRHgFEcuxf1CrzutJaoL2PbYhWvqotcgMAMJ5J7MU1vguJg",
  "key15": "2wymU3n8ByVn4PzmFL8zD3YscW1cyZrZNTjkdjQxQuwt7asGPTChDtYSnAj2ebyD2psocPfsEn6vLsGYKQLHTzp",
  "key16": "2X7H33bQDRqVAgFux4tFQ3VeqQLGub9zd9j4YswJf7gETeV1oYA4DPUoXMKfnBiytJBWAimg6evk1esb8kkVdMpA",
  "key17": "34a1M1xWFCtcEVdt7iWm9CSruWytWwKMcccto6vufQFtSF865AEJywyXLhvPurUckcz4oTYfjmg9qZcvxWQLbNkf",
  "key18": "42U1DuuwYuKUd7PbGHqXafKifejp2i3L76318QQUXmQDPwuUq5DrSpGZ4nhrHLKcZ83M3KhNLgSvg2TtABtPtsRX",
  "key19": "C91c3jsqTxes9KbhmSNvuk7tVZD1fw4MsVCtRkGrGpSUs5sM1ygGBEAGXc2XwQXekCZzH6z4kmWxmf7darasXXq",
  "key20": "5WLdNTeMtMjTouttCQkJRh91TsWSkkXwsdrALMTVwqnHhGMTwHN8by5kjPteHaibadbM21KXu5mMbEUo8uT92KQd",
  "key21": "JxYedHX8tse4iCQVgLFekgmjaAPTVNXHXb5WX2LNnd899gQULcUNqxB1wZC8BcJejh7odgUjxewvWpwgXHNG6gZ",
  "key22": "5G7VyEsTeJxTj6xus4WyqZErHvCpGfwciHsNyzDJR5qaY9e782uvGNVsaGH65bZgXaAXBHpWasMDyagF7trSuS5U",
  "key23": "2QazRmtJF8Rt9sBmdJN1ci4LsKC6t4pEtUkQjNUzFz7NLLt23mErZzVuvvq6TCEpHdHvB92YePh7ZarCryDU9SRf",
  "key24": "3ndxmqFKJkXqhnsetDqZyYdGiRFqt6k6f167UWssvJMteWQ6PVa6PTXxz4vM1Jy6vEut8h5guthymVEa1qbcAiA2",
  "key25": "4ESpDvCg8Wq5Bz5S5v69jY1vUUAvN6YPruJLVSPRf713Km751i4RqeK6EuELHBQuyvTJgivED9XMWb7buc6uw1Nj",
  "key26": "3kmvoCRTkv8gVS6QMjqGMntty9Pw7EenFADr9SBhjm5gXZRHMM4GuiUsN5dNcXkGzkfRYfd8s2tM47CvTwH3Qtch",
  "key27": "5ygwzYC6yrEygdPfpWKEh1SBx2rsVRuqt4C1EY231utNmTaDPvmgWPcuGcRMgu6MWkK6Wc6RntW7K9qG4Cfc4p5D",
  "key28": "5HmJPtqcNrFt8M7qbqU2AWDV9XjnUyjn1P2Mh7FTPq2y3xbtND3LargHJzvfi7g3FSpcphyXF6kKeZ2BAtA4AAZ1",
  "key29": "HkhdEqFi6DTiEDsRkxdqS8LAiX62hu14U5Bbn3Y84X78Bd16SSCUq7RLktngDRBoMA8U52EpPSz9QZV6oPjvCet",
  "key30": "3gq2WJzHJBaaKdL6knwomYM8ekg4vw18iBAWwj4zxhVPwnFxYxoRf3KHytzcYm8cwnqs9jrLorPC5ArJMgsqB7SQ"
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
