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
    "2F4GpHhD1ayEz5aNWkPRvVdnRgHREzQuZHwpf5MwntoCvJYNaTjrkTrasMBW7MNZGdj2MCmmHDHXWBgnf2RHrQLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DPq4fSzmqUJAW3Y93aMRbKaUWePru6hmdDSExnX1HgZbcp8ihn54FLa4A4wMMfUMAjayoKQpGeFgsbKK7tBMRr",
  "key1": "5CDGe1vN3BHbK7iWMdV11S4xXdCUQoUFT63MNuoEi2SMy3exta6ka6wCS2PNM13s4bpEdRaX2xGzUFdEciqgTESn",
  "key2": "65M2ivYYXZTus7J5r9YEfJt2SpXKyW2FmaNd6dDT6e3wDUNq5at6T1k5c3LXotNMXnaBVtUMMz63iyu8bQguv5dH",
  "key3": "38wqLjVcJhL6CtzcqrZnmWGP5kMwRjBuxc7zYU44JbHzZW4NgdY5VNcDQtBKNdZ755ybhxkPBMxRNnvtUSX316JD",
  "key4": "3DSxsSji75UaJ26DxJRQx7j5d9nmRVnPuvC4FzdxikZU1Eqwc4r8bQFbDGT3qChsnx2gB4PKLZFKvDCCNjEEPvg9",
  "key5": "hjGBupSvxiXjo5j8qWA1Q3Lg6AnhzJ378nMPn4KmR8BxqrxQeu37GMtYs6e512A1E7G25s8NMr9ARU1Gmr75YGH",
  "key6": "4GW1opJ2fVppi5Vv6nJjzqbLNmipfcaz725VtQrANFkT59b1erVfy72VQ7n83pUwQtBAeVc9kD3jpEpMhT4CLtvi",
  "key7": "uUtxJy72xKKZjPU9XmgvSGAW6SmVmBLnFLaGGzPVZ2YcWjU7THuG2YJUfLRuVogTSaEyoc1VbhTSAgBwdZqtqTd",
  "key8": "2LpHZ7v6aMbjt6fmDQ6qMS6R8QRvnkCpvpB5PsjXJxr9kYCiDCVLLPvcb87kATpxRb7zk9mFrN4AQgDaLTBNKUb6",
  "key9": "24hcvsEGNqqkmQEAvuD2sKfRQaMfSZUXsaz6ZUmb2JQHMRE6KW89sAh39uN33BRkt4PJ3hJ9XJkTuhFhaFbYenNY",
  "key10": "2VVzrptaKShxcbGjskYPbatVysL1sdq4NfgNPgFPHyHusYVY2pwoT3y58MfZRN6BxEXdZ3qUHxU6fp1iziZuFpSZ",
  "key11": "2AiYQ6JWFSMGDMP2oj7fcZJ1ikGCxdHFKbdqvmJUxmeNbuXywBMjmZ1GRG599cWR8bbCCSuYKVESV6CwpLwKhoTk",
  "key12": "2c3oJpgMQdh8AoYwgo5x1wD1geY5JLfxi7GNYBbE1Mz4jv5d8yvtVYFYqriRdEiXbxgkgFoTSNKXNpYD18GvZ2gF",
  "key13": "2XFnSHC4LyFc7B4xvvgBV8TkvpC2D7ZbEwmVd2R2EDmeV6LByaUgSj4nQND4YWFrCTzBjr73mexiXxtASZwiNBzf",
  "key14": "2zRzJCQ17vLUg6EJxAs6FiDKgXqHk1MoHwirZKXosmLWpaQEdq5MEtvgVu55oc2F7GBMqeTqyQdt43N4MQXqfG2L",
  "key15": "38wkbL1AKPwGsXh7awVK5ogP9whdFBc4RgVXfepo8vLN5qdQr8s3mzDAve6VFdzRaHSsAiBfTLCpUjqZNsPuYfzr",
  "key16": "4Ne8PULaJzkQXyJspb8vrXNVLMi9XUxywRuoX2Z3K7KaQX9XgVjM86EPbRt1NL5z8GS2hyGe2nu3pbgNbGTvif2W",
  "key17": "2AGap6eMip7XoSpVDDhnN6q4cZ16s3LL7Sr2RazSKaE7JX787YYZSMmh6K1TMaENLC74Npb8p1mBTfPjQfyMGGnA",
  "key18": "5eTD9LtLt5bhayrpNDwtwfUcSBBC3gnuUMnBbg1pFUnqt2EjSkHSL1WHkeGAUSwSHF3f5a75fC1YEG4ygCTiwba",
  "key19": "2opPCGGzAD4BguTc5h95wBCGr1ivuxy4SRvBNTDg6HLMDCbHVJLEBfgpPnct6g8FUk2wMJWzq9XUodfzcNiWb37p",
  "key20": "4SdCjPyqLQ3cXWt1CKq6gJaWawLFc2DNU2hCy8UivZ7jZR2rwmeBoxVPZPTC2qcBNRBCqubYG3xH4uXcYMSKeKvi",
  "key21": "4TuVBfKAUGFjuYhQabSrQBtQUPL2j8Ehf6ZBariaZnKmGbhY9FZi622Zwn6cv6swTS4w98vUUYyyLWn7hafKR3jv",
  "key22": "3zpMzFstC47W8Fn66rsBPXptUwtYFQSQU2RGVZzjsVse3pkXaMr61b49ZXSRwTdNiQHvvmhTTbdwGjq2qPEoHwF1",
  "key23": "2wriDuZ1Gax6TtH4i3YYp4kmEBiqRZT9L1kbngTSqXHQZuM36fo83J9yT2Qq5D5JuFh1MDYTsaH9rdzePfMJSk3B",
  "key24": "67TKDPAYzBRVk25stgnWf7p449z1L1UWnQFbfRZ9d7KPDornkPrBsUPNQjT3RFwKEneZfHNidrezuLzo5bVK9xHy",
  "key25": "5TkwYzdnJnkJDtqo7FALj9xKoYuYKoz2QEaeKsrZh85hEVnagGVYf1svuv5e4nazSPTXLxSZGiJvjPeeD4Bb7hXr",
  "key26": "3JCL1YRMDQ2sTuHxu2gzkb8VhDcmo5GKYrsjRsLnnsdpyMpr7p8WvzyccmSkEJsKdz4J5BvwbpcfGCPqvrrBXa3m",
  "key27": "Wfk6NnjKUhEcm58HwzLRpjQqL1g22XRWAJb5rzDjqBpRXrWUAopLF6LikyQLSnTQGzeMjdwvrNSEumLqZuZhiaf",
  "key28": "3Nfgrq6FSMdxxUdTF7SK8wjhefowBHydLZenDAAiVrrtaKczD3W8uhYdVJ58Krb1AWyREbV96T7cRxXG7umJ4qPJ",
  "key29": "SN3aPsvRVPTjUaWPEdyYM7BaFYJ8b8kr4qfWpvpV3A3xzeVXVKPegQ6yyxtpMEaTDxGT4a4uwPHvrWFxDYpybfG",
  "key30": "3kYv6SmdvZtye938BtvDa1zqeRRtRZARKvcEUNrn43HpHCjWCrCAS4BnBGdpFi1tMnwNNUqpQysL2c3FDcAknhkV",
  "key31": "3sMNZxoV6mwin79Cnzap1UxedMBwAjzQEzFJoJtfpeJk3ekkfDanVWDeqg7ENFTdMbyfznbv1rtQtcgReVnstEgA",
  "key32": "4pvaapbyrwa7U1u3uqvw9H7k4Fad1TXLvm2fWqVTHsJfTZBERpXYQs2Y9GQxQjCFGt7Y7Y4JZvuwxNELJSX1ARYM",
  "key33": "6qB9u9kkFYGHfmdhxHMpTmom9bivEYxWw64xaAJQFDEJt7XU9Hjht8Q5WSC47QS7cFrFfzmzRdhaoQ9rnFKnquf",
  "key34": "3TF59CZincmHNtyQbG8bS1nVym3zWSputSLQtiSiquM1MpNd8xLuVZxvDaD4kcCpXPaNTdpHbAR2xa97rSngipEw",
  "key35": "38e4wHwTfFjhB96j8FmDvJpWqZ322mxR7yfrCGdSvgdFoqtxygurNnrmduno97nyMd4ubKXjMEQxF2En6ozNTrKQ",
  "key36": "2eC4jzUNqxoWcJAza5AaLKAzwWu65FUhE4fQfgKS6J59hmCebuT9MqHCxmav95ut5gwe3BZ9VRWHc9JJr3DiEh8e",
  "key37": "2emtvBgQAHZCZZmG5jz1BZYTKx3uqj1t2yw5mQGdWBH5zuV2mNiFuSJ7AzmKbNzNCfgqXSJA9MNGW6P1HoGUZoB7",
  "key38": "4kRvE151uCjBMJDNCdzzgoSyf8M85LGm23LBBgxRaNXXUhCL8DxaGgo7FhFUyj4hfFAn4CtXf4iGTKJ1dNEG2Yvw",
  "key39": "kVF8cEGFgfXBHF7gUMdTT1TNTq9i7QHduRqo5oaAFLES1JeFwr7owiWzfyZcrUJ6XqjHgCesRCBizT3iLA9tLev",
  "key40": "26jchppNJ87dA961feyNFegSs2EKVRgLDmmgo7YH34sidcEVn3McrfW7RMvq2ZpnGA8ZEW18cJA3J4m6SCPDM5Mw",
  "key41": "5tqB9kFdjF9rGEzzRwoaFK5sN79CBRNwyCUnsLPxZPqptLqS1eo5fGmQp4YHJwXKywinVPd9bpy5Ug4hWf4SVT1J",
  "key42": "4DezpCKeya7PocUEEHoe6hgGxz1ZSth2UTaYRWaKjJB9Y53QWZukUm8vSeduh6T7dwtUTHSDs65pzbKrhjdWTTjx",
  "key43": "5xPwdxV7MqrgdRyFsmywHbyMvfgzQ4KgADbyHioVtSxt5BrwLe3yo8wUTn4yTyB2erAhskjtTFQD5SdrcaTvfEwj",
  "key44": "3G9vchDjkqobBKtSqTb1pSQvU19bHHbmduAkozbJX316F64QhjAam2dU7BGosbJM3NjcPagc5HnnqMVtAunVDv8z",
  "key45": "AxMMQLQxmVHwobDTbop3o1XhEuCH5gpTJFCtrYZqHTfyGwYaqtR3pHBkfJVzainXq289nfuopuaduG7o5AuB2D9",
  "key46": "5kfaeTcWi5wFeveVKA2ibQGJrwetAZXG4LPtsAA5FcQMobDKce2EG79DzffYbNGgmer2afNCztjCuPrUPRfyvfus",
  "key47": "5Qk61QrEMqAMUefbsVXcGDX1DQ99bokY6VDKHMGE98zcTZPeg4NPu6yX5gyi8UxDmqBB8WSUmZJSaYEbG2KtCdiY",
  "key48": "2LQu7SyobeYHiTqwF8MpgCeHJVHXYyhBgCHtmDXd1nzE18e1RekbCn2uHwBAmswJjrFQFq3bfmGwFsCdSwmvdQKo"
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
