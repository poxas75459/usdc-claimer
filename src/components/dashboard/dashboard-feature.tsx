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
    "3x6AEu4VpRrV9dB5MBcqHAANAWRuZ8jfCPCJenuwyrYNnomU3HZdika5QnVvSyrJmjYcXuuBnLv8smc2vD7axbfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mk9fz2rQhDNHwrvMFR29MjgzZQQgaJEMVxYCc3LiHaf5LPn2h9wtWbUjGGxQtre8P2DWYAf7YkvCfD1ycocge4Q",
  "key1": "GMKnfjt4qQbd7csdhmiHEQDnp9gwD1x3Aej5n42S1rkFE6QR7dijLXhThifSp5EhKs6KA8RSLPH2uQ4uz5j3A2z",
  "key2": "RSzeZd9HPDuZapLSoaSGr6yzi5wdpxSHjgAqYkAK4zDTex8j9P164TuDePoLHAW65gE7bwTbrGZDVhd5Q7po6BM",
  "key3": "p2FjmfqgFFczc1jVVitcLgag5g3WHycS4vo87oPqdL8TPuUYrmEBnDLsLbgWp9QW4RxDv1zuvkxwLJWwJ5ZzeEN",
  "key4": "JRaqDSVm4bCZHyEDEuKu47P13g5xhkYtTL8ZyRMZXogQ3jYV15RzrXaVZjGJ5kthyjDYxjKTnxnb5yR5Hgc2bsq",
  "key5": "65DUUG78zzFTMdZKoucGoHxyUEz3aiP2NFfpXdnhqKXxeQFGKbtP2GURP5uJgKabsfpTa3LrhvdvGsXGmP98Za5R",
  "key6": "gjRbe6Tsjx2BYrEJdS1GyaTtQcvUwg6TkBwfEFERbKTJGZza7oNSQYtaAE2YmJ3WNQr9yLr3rXrKbYzi9uCrHFn",
  "key7": "5G6oMQ9fSKKJ1S9ZERPxSE1LUMx8AEzxD2kfpMUouXB1BCgC4tCeDPoNpaCLs4u3ds3HeWtKwSGurYXteja8XXR5",
  "key8": "2WBJHfF3pbiffFEb7WRQFi3iXsH8GJLkDRLYsuY68e6NNAd63srnRh4jwopjSYmV1NErLSRY1TCtnXSK11Y14vmq",
  "key9": "1TMs1aF41k1NeB1knc2QCjo6NPPNuoHgQedaxRfw6zGPjTYY8Wo1KvspJPA2gghXK77Pj1rSuqVBFxN4SF9f1nY",
  "key10": "5escwW1h34v4DHc3rEnmEmKYrCE26Q9pGmvrunKP1nnKt61WenpZtVv9c3HaNy24Hr7Tr7H4z48SGkwN6RNHdgR6",
  "key11": "3dp6HZv74rZX6hPobWUHS5gLsgNN3WBbVvfZFxbs8fan1EbeqvTe6t3JFtC2M9uTBs7iU2MXMYHHGB8aWYDcssFB",
  "key12": "5Sd38npZxAfAMJSH1ngUHdH4u2ZdfRGdNRoKfDBhBqpyPSRXDniLG3qhK215xe1Wm5M6JpMESf7VroKxh87UwMe5",
  "key13": "2JgGPbhJbC7aFBnBpMkCgKi24hxPYx9neBUPiM2NdsjM2tk5NM3tYLzKGLZGoyoqFZhTstVHSbsVFnFFbZvPJxmd",
  "key14": "4j1QaQ6o7GjzRJsv4i6EcEfPXMMQyTJZPB2dL8JBnz1i4UEe97Uf2fBNnGmrApSUEpQRMkBNJQLcqDSK7rTNs3Vj",
  "key15": "4sTxY8f64poxyjn4WDTVJPBh6HXmc3skLBAFqCA3RdYgT7Z53Ww9JANdwtkUby1n639UCauQXYNLNvvjhLLidC14",
  "key16": "2CvDTTNGCHMBoXXnEtEudf5NTDNLqNAXWGwXM7pmThnKo5cJo5d1RzChwfesiVHQTKeEYLG5hF8xTirskahxh3mL",
  "key17": "3PU7FJ8MPTSdnUoVimLffDFkrB3yUqCGxX85mFDHoNpbDzNnmRy1ia81ysNHFhWrRzwjUUKHvWYJTEVomMj7WiD1",
  "key18": "5ejj8DAek5hQs324uxp6AQp1KH25znjj6AGcDUoMjwqBt4vCGQuiKpYPDCyCivzcsMWdh8iNeVWkz141S94e8HiV",
  "key19": "23tCSNWZ5uNZPWBtQjNB6jvF9DpyaTPpr39xFhLxN2uDVRftWF1bu8eDcgVq8xf1aHA2osSzEXAa18du32piHXXq",
  "key20": "36pyzivQtbmoLNme35HM5a4M1CBRgQEm5LeJMu6TfjDxf2yYf6QdXFKj4NQNoykmyTEMhybyZNQtXLbJC4qtC71Z",
  "key21": "3rdtxGRMNsSjJua7KoeRnhZjvFnZXrFD4qtUrgC5K2ysychCXZJ3prR1pXp8dNDPRNoZkAKYLaUswYHCrRcbAkAA",
  "key22": "3JBCDbczLcbQpbepXQbx8DaBrGejHhETeK631CsvQr3Rxw8eMzZaGc1f2zRpTQfSvDZkN7Xc2rBdBJZNMugLMsJq",
  "key23": "5tuw6NHGn4DLRBBhMP1eTtQuf771U1bNmzronFtBAwoa4yx6kJK1Ej8QwCHZR4MAvCCD8EH3Mya26iHAvFAYEoZV",
  "key24": "2E6t6XkGopyHKeJpd1F7F8HWfhz7G78o66vJhmVrjPChavrx882ozZXhqqzPYqjuVus89PQa7F8rgp7EEYNp5BkP",
  "key25": "493BKgCE1pxzNunvutARvN22XYW65CKga1x55uug5GPfNkseiGWBY6gvGn33aUCCQ1fKE5xJDGg37qTBFzq6USz1",
  "key26": "44swbJSmtGaMEjYf2HUURA2aT4fXbpJgNGzASfY3Qk9Z1hKacgwg1QRJzYW7cD3ML4FMPK7dEwSztyKx3qFU6eMs",
  "key27": "2pwUww6QchudTM9MJbi8ELhQyw6RUaGrc1YdaweiSX9tEw1cMzZLaw6xigxVkaTf4M1LNe3TpPmKpEfz9PdZ6E51",
  "key28": "3z7jusTwqwLy9TmfueTRSGj9nKqyfXavGfFYKDHekzuCUT6TazTWeH81Bk75Ri8hPJBYRBH74Yr32oAE9TCv4hjY",
  "key29": "4RhbiJYEro8iGpdKPQnJqGRfTx5c5z7zjzptpoG3TKma33uoTmjbaAHK5F36rqpGHnf4XRf3Uxcj7SigAdpPPoSJ",
  "key30": "25XacpzzDEj8LP7qtpaY8oMQAz9UbBjqwuYbF6rYnAThQGFnQhKziTn6yydf7ogm8o6nekcNfyF5TocD9uRUdR2o",
  "key31": "3D936PtqJTUnik5gPdxK8iEJcC5ovGqgjhmCigji4AtFtU7kCHnpiB3JmGejUbSzBbJmicickQ7pQYkv8nTEuEs",
  "key32": "2ZHxgnES4ZKHyAyuNWnS29kBZAfCfwtZEwgijTVwc3t5PF2k1pNzH31PNRZh7emG1CXpnzwwRYKfc8L6NoDirBkz",
  "key33": "4EUziR8K79GW8ahmtM4hv7mTErYcvr7GNiJCvnJmeVcNXpY7ap6odhyDweabwqoXWbp1xyQgWjqnsk7vz6rZcbqF",
  "key34": "64jrMvJYkA7DVTvZSUdLuu5w5Vmb7cL6psV2RpArzJMVWBXwW8WTxoaS7Uki9TMjLJjYt587Hqaz99Rb4YC5qtXm",
  "key35": "ExRFY427fgA16PSnLxi3h45kC2o6pYEJzfS1fqZnNanwdTxxB9sRioHXsK59HyeAMk7kFbD3oCqT34q8BSLya1L",
  "key36": "2kLrVQKEYDNvmNW6CfHbocDNAc7JYp28VA2PYuqAnExRMUaLRtWAsvjiQgLer5rSgdkyERXTngnV1wSwRroBkZmk",
  "key37": "4g2Wriben9y7Tw8TQQ8KWeiDsnypKrev1Z56vGz34xzA7Y8VprUUDLthr5teKp8m3aqcHniDoJtUKiJrHgYJvnp2",
  "key38": "5k8efKAnmNyhxbDBuonWCno7EvEo5JB4HRJ7biw9xFP39c9i7VhgwisAvWqgRFmGNWGSqjuK2AFCewdRUi6Li3Qt",
  "key39": "uUexNQk69HibPRiicQMLeeMU2q4QAtYBV3KjqykwY8rfsUom3wNfHGpWqG24AQS1CqnGMaA5vs4TKCnZJCMqaGb",
  "key40": "P9HFd8YZF1t6PbhUKVij4ERhXVL1RGiNxYyzENrJNrwPxpMawFSyT7qn5sy5wrP1QBZMAa43ky7wnQGuBXLpte8",
  "key41": "L19jpk58NCKdxGoo6e7reTyrqJDCHfB2sWBpSKz1eqd4nmgv8sVGyiBTM35AeLjSZgVFZeRAtq8kSYVzB1w7D7J",
  "key42": "scYbvvc9wfRDN8PaFCvKLFUYRwxn2yXQoQcDD4wdD5tnaXzv1x2Hx4WHQYtvJbzAdsni21TWmqJaL53LkJisgJt",
  "key43": "2MZZ2KsgUiPVCbYk4LPaiEavXEH4bW6Z8cbagT3jnQV9Yw8ABqvx8pWgJXqfgAhNTx6BvhZPFf5EUceRTAQTJUpL",
  "key44": "578sfpacqbDizx5ixzxbwmJRDoqt8PLkQhjX8TvoyBCxWuYYHAQ43xsZTFUwfzZ5GevCWGoHFrKKq3GXKRN3XdyE",
  "key45": "b2V4vfAhzAeH4Uwo8CAaADfb4h7CFXGdqJEhDP6HX9fbsLZa2hXkdUfK2wKjjES7xRroxYxP3A1gjqrnMzLeA79"
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
