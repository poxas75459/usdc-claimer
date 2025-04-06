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
    "5LZh3FEKQUVXV9LDCTGTUEBBto5PgE3TJmpAGRFB6sGg4e3gScFaXu3kTDaAueRXhwETPyh9hug17kzKovHZ663i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTMzK1juKHRERrQPPF5ozFj52F4ahnhT1rQ6SaHVSa13MFctNpnNrys4vqktUgHbp3P5JuesgaxQHdqwZ77xQvQ",
  "key1": "2uUqaVBd1DXA4i7QJGBvSZMsrLD9sBYdUqPfmLemU7mnwpou6DyDmTBt72YpLvd2HXQZzVwbPtBGbWRZoCiHe52a",
  "key2": "3nL7Xx84Lc3v9QsFJ4vj23UYXWjFWBYBtzmhZW8mXASMUpHUvbNiibGQuwmSHgcVEkquGGCsk3MBd3kqvB2T5fUT",
  "key3": "5nTnU4svU2oEHR3C6gmQzC363ACasrMYgU8F1SdBw739zr6vRrSs4qBm8hwdkBfhX4APbDwEoF6vL522XN3VJnd2",
  "key4": "jYiaRAqRgAdDMfH31g8LL7xK6aYejsMbM5gVpe8B5sCBC9NkgMd8yxuUdCjMRgmKk1p5yKb91sHuYSGVs7M1u5g",
  "key5": "4KhNnEC4b1EMS5bcqM32LdW1iWeX5McMKAToTY7S5LHmcQnuEAiJmiHH7wx9yFVt1PXxst8SoDic7obfAS6SK3EU",
  "key6": "5WHD8gmQ6Ks87ph4BbKDCt5Xe1BNVLb9uBav5FUYsd1rZyXHxYT3M24mYuK9URSkf3EDtAfY2oZH46RnhvqXsXoC",
  "key7": "AoHYQgTBhYyk8iZ6Wpx26aBeyKCWPREAmJrLLqcNzFLAM3AkLV14yMySqN75a5p7S2smSkdaSiREj9CfDsXW3qx",
  "key8": "3E4Z2qHjBm26DezDTTiN3t3DhzLB9BHKKQvznk76vbwsezQcxpYndGfa2RkSq2rKKwkkMrrK42G2J1aE5Gq7HBqH",
  "key9": "5vtTsbc2M5dgh9sgWo3P9tg72PUhMYGskkNPyzAuLpKHeruouj1rKq74rSAaywHusSqCxtpmVqQGhMTFrvzmaXKp",
  "key10": "WAhyrAR4TX3k9Zsmf3dSzZeTS6cGNKdPuhPn5EKxJ9erQskCFgntuCfGfYdPLC39zJ1fN5rv5Xuz3Eu3SCqtKbe",
  "key11": "4uK7kLN3RfbMoAx11BjjXFVu9Svq1kWnsz5AMnvm1oZKraNhybFjCbZnsjgfm5kEhMbvRvDGZqkWco5p75L1uw4b",
  "key12": "JFft2pRvQGkPVwmNmazoPRBrDqwEq7zzixqsSG9vaWRuZHf9TtX43NUCksbHeWZiaCCMNkmkzMeoFLK2KCXq2pw",
  "key13": "p5PZHXS5tL3kJhxTifZcJbBcYw7ea9gD7uM4cZFG3cisknWEpsYDx4PQr8P3v8xRwNvuRJbx1ghXdUjBF2zPML9",
  "key14": "2wdc3MdTPTK9Swd4f9CzXG6yxGkGkA1grMKanS5q477JQzPNbT6981BcgdzAYisp93EeJtUbNoxVK5rxPkP5UCn8",
  "key15": "5WuFzQ7ZoXrmAb2Tn8V8qgcMr8QQ2YDMrCaiCSQpXWX4iFugoZmjYDkCUgvV6bKWHxqbPKEFhgkzwz22XrYtQDkR",
  "key16": "oNM84nYFEnxphkzCrT9cgPDTdVCyzsreQcq3v93ScsXNCanxtFgKTMjszuwssut97JWbCmEyGqLRHbHqrfDJxzq",
  "key17": "3o6d5HaDcq3TqcZUM35dDcD7D53Qg4byTszxwXZb61BSyJvBZXfGzKfWCNKXYa4wPvJ3TzzC8PT4wcbUNKAEdign",
  "key18": "5sA5Q9YVb1G6aY7pVagUcTGDFcqHzsesNAcW1YiJZT1zEsBxzX9n9kHMChdpuswaJNcPCb6MtoLKRwwfF3iWTpQc",
  "key19": "32riNMvC6iwE5tqZVkxsR2T2cp1rXeai1YiQSogxeNRXo9EU98DcpZdpTsTyKiqyufAWsXdNBVkcyoFBY7hj1emo",
  "key20": "48EoQnydW1oG15NNVXJMS3WqYVxtKRAujN65NftkPzktYtx7Bc18BmGFq5rXSmScbnSe9dBe2YFBjC4aNLDd9MUT",
  "key21": "3sU4yaaw4NMSD6V8Cb8hCEKHPsdbiGAzgGeavDUVb939ycX7UKYaRxM9JXpX6Ht6mn12cMspms25KBZtLMLyB8cG",
  "key22": "3Gg5j1nVjaVgbq2zGwJdH8uicugjgNjgZN4DehmEAPqExon92J85gRQrmjqjZabcJGZVhQFgBK1hwy7UfoWF6CMi",
  "key23": "3p7zU6BXVpHaxyCYVxQodKF1dBkAPppoPPdHYrW2ZKsK5BSZoDeZmk5UNzX2XLFtYstVNTYiGYKicM6nVyjnCsLU",
  "key24": "29RY2zdTdHG5LyQMA2RPDatgFbofAmZoke2UMGoF9wv71F6UvWCCSFZPS3NJBsWyNVQyYgqwV3XHW4Dyy2fegYqQ",
  "key25": "51qkTEt8ZTSHvxVCmtmbifPcN2T1V1zMZdjBd8DXLenPCSqGLYmPY1jknHTSWEALr6o3qjQtNpiVcCExRncZ3R59",
  "key26": "24Le7qtUj1zNRBzPmoAFQNjwWbxEpns5RwoKLEmKkzvqsGbvJXTqwMTwZisch5Z2KW4X8XdgXohz34ZVY3e1FfM2",
  "key27": "CxWvuwC9hASrqiBaoxzUrc1v7vSbMbsYka5cnTvST2uVL8sa7j3BpkwEoxMhWyiQe4XaTjze3zrvxr1DPgtThaa",
  "key28": "2EzydQyuwth8VJxdw3WpM9kiEohje5zZqWgbWjKJrm6gW9oBLBmopf27Tf8thxztyWmfomNY3oG3YsoT9mYG4aiN",
  "key29": "nYLhGJ5U5JNYixpCGjygVb2GmPaqvyqHdR4NJoaBKdfTniZvtfuaTPwwrSL4iakA6b3iabMucBMP57efwtrWKCm",
  "key30": "4ARvBMxrDTgm5HwJhQBnzR8W9teoiUcCgFxvrfFdxbSjDRPBqqSgzHRya6d3JBKc1TVQDQxoyKGRzH1G5YRWtSVx",
  "key31": "4bpbHxRDEuFcEVX7x7fLH2aSv9HToYmAZ8z4mrF9MSRv4VtjujgURmnoHQqGz2ZUbqMvn33nLEzkMZeePbaMsWjm",
  "key32": "5UTMyWhLoyXonZ9XLCo7ucfQmMPhJXw87zP76jJN3ECuXNTE3GpYUVvXW7QmNFVqevoWVmKWcDphKcexApSkA7QR",
  "key33": "4mh1Xk3cJwJwgoDdxB9HHKVaGSomkHXuRQeobirsJHAWAQXMWom4fXxNEcaeJYa27aM7WzMyZ5ruwtsNBRtfJUTS",
  "key34": "3THiBVtKaALniKaYWZ1aoHXmRqdexkExQogqxsnkD2HNSo1QsLrY89gk6BEV434xnzcfVFcdCc4EB58c1itGne1c",
  "key35": "2iE8JXSxQGikxNaYH9v9Ma6vtskPxWkhAwGtmpiq9DhkZkUBHtrx48ArKqhsbCJXve2qnMTbpvT2yDD3wH1DLfkj",
  "key36": "3UfPTmJT7rGN9i7gU5FRAjECvJowpWHAECZeiAGrHfDmphq4r7gM2Tk6QwSFzm1a6x9hShsszsNAyp2rSxvWQVsa",
  "key37": "3eby5tcwCVUBEcFC4tkx1jnSL6kGzuJgNvhNnwRhm9Roz3N9h7a1YbQKDdLT6p2Ktfxk1ijKcDZmCxsDAWBqpeHH",
  "key38": "5wcAt5qHSKCCBBUC6q9ZTbcRoSYoGgZGbB11rWmxb842ocHWWAqinfzvoE28c4E1A6YWzgPWFGQhzWrxhSnVKKyh",
  "key39": "3YMg3gLzCr6J9hNEoYBoWzJtnEERPwEBncUreAWmSxiHZ7MzyXhAXARKwwZPp9E9ivKNZ1YXEmwGA8pQzPX6Jkr",
  "key40": "5P8GVYBnQz7GszfVqhzHXN4whPwu8b2WqNJGDAmEU5Nk7ZE6PLVWJLktL3vE4TtJZoU3C6N4vecgGgCr7YStY94g",
  "key41": "4BbKFDZMVxBkPTJyKR99G2Fdw7zdimSWRMbWKEewPXnMA1KL1tZQfQXmV2SR28M73dz75a6oFJRNVJi92XNZemNj",
  "key42": "5i4GKMNJDZAkeXHGKMHathW7C914djdmZZW3twxWn9FG9PcRp5XDFPD5qw3wFfNtoPgLiC3BsZ8YeZHxGQWqPWgU",
  "key43": "5m6UFmvUSNGTU89biY5iqW4vKtTP6Hj3bCW1zTcoZqb1ae1g5GgMSmuXTKStwoFjKz3ca5dMBACdkmrYrFNqs8dc",
  "key44": "4fKTe9V9oNT6wZvAu6xuqLZ7Pm4Wrs2crgSLTpWPoCGAbb1NJTNmeo42e375EnWyfbV6z7bGvfzTJH1fB2j7ojrq",
  "key45": "5awif5qHS2BTsaPbF7DrxjzdcLyDiEFYN1q6EvSVgZVcp8dXcUUQqptNtZaY3noss36ZEr3UnBWDWLAVjsd9jnkR",
  "key46": "5wTHBUJUx8xM5Z2FKLtj3G8jwnjC8RQ6m4dkrCBPizxwfcZorg4ht8tvz2tLSZeyKQU5tGfK1Us4Ki1WiruiMziw",
  "key47": "2wNwrsAkm9d7vaB6cffNzSt5F4NtrJRfodWWaXnpMvsPHBGidgjNjJngPSdTwLPjQZYvZtwcrLFq6SGpzJxV7ct8"
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
