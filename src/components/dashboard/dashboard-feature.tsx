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
    "LwXaR1QZQrucQuQzBUdhZ7NpyoCAD7ZFdHyhyz3LNe896EnNpfHzhwDo1zHsNipnGYSeuBix2aGJbFzbUS2war3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSqkN7ZvMVDXhvZZfNaenSKVpMsF6WoCgjqozdc1Wuy2wFcnBkiu9ns4VXkY9qEwT5ECSxpbM6cCzE2RD8nT1Z5",
  "key1": "43ugDs3bma6w5pcss5YcQPaYXKnZb4XmGpRi6GwLpYKGyQ1nTNZpJzigUuAaTJqnwJbeHRmVZ9L9sbXrpYnh8DaK",
  "key2": "4W6m9N3rRmVyt98q6SLYnyQiD9Fo8tQ3ca8GzcN2f11DY9JqHZKVTii5JQ8A2zfxHg7vzRmtpRJQ4UseVbftQqKg",
  "key3": "42WWaR4KzzTK4cnMFpDFaRSkPrqgvnFgxobNVGSQFSzYDR5k98z5GrpsZN3f6xfDpkgt9LcWmaeTgyDJVaKCo3jJ",
  "key4": "kkRJydBaNjoNz6mGsr4suw7uBF8ZS2zLaxbBdyaV8X1iEDPVp2P4XiPkgSV29RjZAEgkZwoKvHou7xANUSvWX9t",
  "key5": "3TqgnMYxWGxAyEfzFQbE9Rh7V1LoQeS2yBDwggxP5tgz6VJqDiLnZoF8gBfSmFgpTb3voT56Gic5BnjwokHLtywD",
  "key6": "3FW38qQLE2YTLRipQRtCkrx2fN8VLSduZ8DCTEVxbQKkyQYNGNzPbLfJ8PP9uPdt1qZ5Z6RUKwiyP7AU1iUARtZe",
  "key7": "2CRZYn8GYYAzuF8zAvVXsRxHXAyYFcf42qjV6sjVAgwsSP4m55rTtfEdPgJx5r29bFNfjCWP7R6FgdCheWfJUmYA",
  "key8": "2TD7uP26PfkLCDmmzJP53DYWSMZdpMNrndq3W9WsDyvXFSDroSGxcikhdVhvAKPfE4LybuYuL9j3SPefwmnP7zej",
  "key9": "28duCKJawUwBhdUCfAgVTYKaga4nrnxKqCJmCqN3zc3ysKQKCyACoECSqZ8j9uDhntfRhchEyXiBD3cQ8TfugBSY",
  "key10": "4Ws4kEeSbjG2xpyjQFDhwrpe8oY6ykpHoRb2jBweCFez3u4CeoXX7C66QrCAXLEafEFwgyjVQWMyTPvcoEDAyefy",
  "key11": "5W8efJ4ptTTxJVyYRL6WmLqd32c6FiiNMEFFEeJmYLHssyZ94CjR96T8YecK39SAEQ1LVseSahxPuHF3SyXKxAvQ",
  "key12": "5xXgKB3q4osxqUkSx9Ye4XPNYZ1BK5QqHQn5oB2XJMDUVk7jXRUcrcQeWYxu91R1fFMnzJXv1Hxq5mejwSbrgkqG",
  "key13": "5fLjdLKhM4xds8SGXVfonfxaN1z5NN9UmftzRNYesUkwjJXidYw53T1TXGcbVmYqzLEXc5jngufqShfQCcCi35P9",
  "key14": "ZqoVK5aDC6dwufYq4QrfA34YgirFFRMuT9SRYFWQKarnDi3PP76Erc9479pmTU9BRRzq2bnfpNMyEYZfAhjKXYD",
  "key15": "672GedHoLmQkn6CqPyqMXU645gYYAbxQrBJuUN4EzsSekfbPsRkEdw6xEmVAXgpn3Hv3YeMstbRydKnJochLZJZJ",
  "key16": "3rTdhcAjzVLDye7Hq1AQjae48F3rs6VpNVoowFtNMDhRQb8ALQz5G2jRqEE9AXbzBywf7udW5zb5c5iPT4Lyk9AX",
  "key17": "4zFFLXubzG9TQK2vDMR15twEhE5t8VAS4WNef4DnwpEVK82W5xFf8cjBdR5QoBAfS4xJZTCX8iNRdUA3Dsqq7F95",
  "key18": "3HFMRgA34iX3U9Te3D271ivxtAZdRENqqVKZKGNeauxXnHYnKMqmygvLR31QNpXxijah8H6Y6Lv8vdXo4p8KdUfL",
  "key19": "4saTaS9yNncieFod3ne4e6rJxbYkimMExSPSK52jg1obe1pmyo1hyQR9XzSAfcXVBdPvcN7xfwu2jDiXCWBtmueZ",
  "key20": "4Hs16wnZ6JUsMqqk8LhbnPFSAxKgaK5HZdeVn1VaJEk6wpH5WhZAm41eYip2h9mbhPBKDgcuru1XQpyAoZfPCmWN",
  "key21": "4vqSJ9bL8fteCrWBPB9mZJ5Bm5ugy6CkXbUsfffhKG3PXwpLWQtJFcKEqYyJa8tn8GxptKZt9MpEC9rbDY2aoCwJ",
  "key22": "4wPT5KGov291buWQGnmTPF17mnkzueeAeuYP1UWZ2cf8aP1dBFvsSJ1KtWUNA5jbxMGnRJXM74Le6VHx1Mh9ysKc",
  "key23": "5CevjvMKD4bmvuzKAqmVCTdus45X69kWsMXyunCTdiaidabLvkaW5vevr1xeYDynoU2o7QmuF8UZ3hF13aFjF2Bj",
  "key24": "3gJCWNdhUjunk82nXz7bC27n7KtY4jU4rx7XwHPDVo61jQAPKLZTuiMKGEdd8Y8tf4iQTKK1zwHmkohj1k4PYu1z",
  "key25": "4W62o1Uyf7iHY7sy4sq3vNkcsaBmxxZuFYKJgfdedgxYf2DB8xtQYKL5bFF1DtScwL7AtbRoXEPknVyREbNppDaT",
  "key26": "2stKuiJ3wtNvQDc4Qj5d2nVXCVvJb4xrDG9yqUV9Ut7gTwcXFWAePogwdgBYmq815c6FBvzCoB6R97gaK26iV3go",
  "key27": "4bqa4tmTUFV7MYNff9qiYrcaBixeAmmF6SSVLsgebYSYNVRJazbt2WX1aaVbp27FNvVhYMnbs3em9YAprLNmTU4q",
  "key28": "5BNDiS2mFfZGQNZkHghne5ay7djkDqEgGxTNdaBuSbiQQNmhyYzDWZoU8L7hFi2zhVSHWhqLcprWkxpomeKacVUy",
  "key29": "3LLSo166g6Fu8sUnr1D87HTJ4YUCFFTbzWtb6EhVW76MimJa3tjnEUpTUfyFPh19ipTKxqCSnz6LxxeTXxdwmZym",
  "key30": "4xnGi5Y8dQK9eCHUtS1eY37c9Mk8BEzvx496euSdKBLa6uKkfUGfbbBhCT4mmpiyFJfatzy6eFkXsD9DRyWr9UDu",
  "key31": "2rU9VWjxmaDVXsgF3msbu4TGDU1cUCHWXE6p6bYhg82Y5mPpr3yx9EiucLbZMi3gQckWe9pCseYD51dWvrnGiwUK",
  "key32": "67TJHLHkbXqrj3oGtVQyWho5SwHLs5yENx27URTRaimNkvArC3KuaW6jAn68GoagGWeq6eWJaiMRkiKCJvP2BrKj"
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
