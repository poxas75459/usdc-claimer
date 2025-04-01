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
    "2MpJch13yvv5FbYL4apBwQVwzJUkiKrGebmwdEjLkAmTjn7wXymw6bp15TaVs5vTfYbVy9kiKCn3tezR1v1kNd4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjC4HA6MRYNz38pkdjS9gieQCydWd1rBoMT8SNJfrVJGZUyf4ZzzFhwDhCdrjUTHE2XA5YKvEJYdvX5UdXFtS6A",
  "key1": "34PAeFbkqTWBwMehCDq4ip5xxQt99TuUhr2d93oif8teQynwCyK3a2gvLLe1M1HAiXbLpJjT6T4nAZxmBJj1NEM2",
  "key2": "5f4BcAxxKDN31TYqadrchKX7BWFNeL1jqErY6qSm53gocVC6ACYWDa5X1xkdHmd67M4o6YsQSmU271ZYTm2Wp9LW",
  "key3": "3mQwg23eQ5rLbNGC6a8erPH9Pi9XYriSARJ73Z8ShGh8b69pfyZzwKzcQhdb1KkQqD5NgveMcGKFKarh5xB4Bt5z",
  "key4": "4ZqA5bRuS4G1mcURHeioHPYFgQY2MefcUZZzBMUzazfWt6cRCzgPt1RuegqqPXiQd9HuECymQ7Dh3GW1XiMXC5A6",
  "key5": "33QckKpZX9NerWEMUwbdM9iCHK7axHaSsQkyYy7BxYEUkDqYHg3nNFCJsr1FcRJjrqnV39XDgk9tJqHeESCy994n",
  "key6": "3txGKifxUeArbiuzguqcP91wx4dPQHyDNsjWL5Aj9y8k7HdcVhoGDKvBqzkpPw5Q2SwZ631vBn6fw4XtNHZ6Ys4X",
  "key7": "57mj8fHcfLym4UukMqNA8JsJbpnMyrxMzz3tEW6CskTxPYJhcxUnJsVuecGJ6FwkFVpJS6i8QNwD8WiZ4Guzx9vG",
  "key8": "4Bg2bD6Tfa887UbDbRcFHYKKA6rtyf7UkxuhBndbudwX57UqoJSeRuyLrDgzK6ZeNzgqcZpQgkguC7wXHcneaWer",
  "key9": "4L23GgFV3CLHaYVjb5ymLRESuyGWixKhsS4GuLptsqUUPYWitAX5fCogegSDUcoemZMxgn1FhKcwcHpodwybnZYa",
  "key10": "2CqjB8pv4Y9LVasXTdL5n7vMEc7btXjLw7opDZVc3kdBq1jLDHZH4KWfUGqDay3oJCyCR85th8nyxeoFPvATibo7",
  "key11": "4SY5wLuJ3rY1EAq2mik9CgfyAkaHPHdvSub2HTsHE38vGgv6RCgbatztQoDr59PUYVsQFAW98fmXv5XrBHucRgST",
  "key12": "2nnavfZhVgnvu26kNdd2mq4htnKhzNTfEHzXy7SC3uarvpxRKSfFNmANgirchmZJqneDCpVpjS2CWGsJxv9sbQg7",
  "key13": "ArqyqXkR6ufojCbUr9LeadBqp5bKFvGxUjr87WSffhNsJ6H3c9rkyhwS5Rbe2A7BEHFwTDxQKv7qc9q8ooEHibn",
  "key14": "2ztevRqa3AsFcbZaeXAZ6RCE2UDxXSyTa37LHVGxs9MnpfTjGt4V655XSrTTqf1ZjJZdwivBKYnGjGqmnpb5RwDo",
  "key15": "28wC441ppfZ2PuZ4cRcqZd6YCtZHqg5r6Lqom1GquxygzzV3rvrY5fQt2V6JEP4DKG6Q9zrN5a8ytds7N5GmekKA",
  "key16": "47MXEk8YDUNjbNpPyE4dxmAJPKb1TchczHQZMS4TgUVXwEpJABGt2euqgJucgcqGXbAGkVNZG3KCpAzKwMBsU9j8",
  "key17": "5kLD5gRZWyy79ARppNsdTVf9Qrc4G7j9F9drHgVoBEktuuDuarGRK69mTq73CenoM7yc7PmxDK6bqVDxt7NNFotM",
  "key18": "4KtzTani44wcwwqjKRogygTuCjkuhoz8TC5yV6jMiFCU9C6XgfoUe9yLAuAWF7FX49zKrdN6unRtV3vPL1iDbF4G",
  "key19": "59vBzmhW1PcaW4skuohiZjccG6sYs4SMykGPsNUTvMyTb11Gij9Sw9hmiBceaHiZnFyLBc46VrLH5N6XRm4mDV5k",
  "key20": "3U8tKtmyWmKfQHci8gf85MPaUssMZ8UmrBUWNjXujsbcqHkhEQcBEpqKuHsfgiQKVFyB4jnFnPNUzhmYAaU4EvRn",
  "key21": "ybv5oWoagkhZvACExzpAL37XEwfZL6DczJ9uhdhW2ZTVQVZdgwH5MXfx6mB3MW1CwtQAZZBzac5E6Km1cTj6cih",
  "key22": "nvjo8UUQHziTAXnqRb9qS1u9etBNCWE9LPbm9rLpAAqjMFVsNiqbYViMxJPdCaEYdGXrV53VTszw1us9973T8Wm",
  "key23": "2BbhsyKqgqJPfNP3HiWFd46XzJ1xb34YbX4chccdVj3x8zkB7TuijnPadSN8YuEcCWK7B9XtUySGe637KcASLAsi",
  "key24": "4uGEtXjz3Rf9txm3b76EKzUke5wnEsfKYrew8g8rEBFSw6opfDKfS4bkR4b4mrNyBw9qRTqcFA69pHujFabwXp4U",
  "key25": "4xpwBTQrn9XfLhU4SDrPpjboJRUVVa58M8AMhGLzVv3NEWL6dJ9cNXA1Qa7XqNn6URJyd55VGGruQF6rcrE3Z7EQ",
  "key26": "624Wth8cxLFQvbs5ZiVDsztzFKkEMbYTUecnLhNUcf6iBCSucdRNVJ5LYreyXu2sCcDUj1WNbzyXVdQv7RDvDjte",
  "key27": "6V1umH36HE5V8k4z8bK5b6pjxe93ANkKF7Zr6931FDLPDWxuWBASzUzDhoeEJ3xZpEJ5uWTqqGjtmQpgHCjWoUW",
  "key28": "2HSHFt1CB9ZqhayyWWiCVVdTgF5UYHVmkaUkwZZCkYumoeDCDyEFErVED1NZXhsWQe6qS71gNyog9zG4XCQhejMd",
  "key29": "4YLzyaNHsnQeuKLBWiccBnVnmRCcmxT8ozkVwVjUnEhkjaKwz3Ngr8WyWZdqyfjpc1kGdPvxTFii5H5xS8YLZELk",
  "key30": "3gga1A9nHoVHVwUmsSzZKhy95LnJQ8tuH7zz4WEC1LqYb1eJDFan6Y1QPt99v2RLA44LZrj4PfRM6QWUkiNq1mvS",
  "key31": "4RX2h6ye68qgvjpGtp8AnPyPbD1Exen6CGtHhWBvVhB7HUHSL1p8xWPQunxKSZ1qFXSopB8NSz3ZeJEGniFJRoY8",
  "key32": "5tr7X9yS1iJkbaa17QVbJ92eNBWzRFGJ8CPqJeKnFo8XtLoww2zen1rM69YXUphAjewz9zZ8oUs5xLUwf7pCpmuA",
  "key33": "52z2VBb9vg1xUs9hMG13ZsaHSWzfSM16eS9AS3LwUSdrTtxgWgoQQyF47SYvNgPWTa6VLMGEt4j9uyUU45sHzzfq",
  "key34": "5DzQ3dGuPwVa2bReie1HWHWnkL7UyLYcfo33g1MdDtFusBhRxMis93LfyeMfTu44PqjfGBvyobnBNA8RiQodggWc",
  "key35": "yQcXpW1L2jJQrEmKKNc3CAQ39wCLe4EiBJ3RB6cKMEpYQ6KcZdiXEAbwe2m7F3QYgMC1pg4KmA5MuZhf2kazNw2",
  "key36": "3w6JDNqj72N9fqYpF1UdRgRFNKWmrTnWSdBj1T6yiBtddNmEdZweMk7YKJk7NJJGJeChaeRunJzF7Z5eECVQaqXG",
  "key37": "4X27AQWeeAVKiB7ECHw7XFgKkYXrT5WtbUK4ABfr1biH7maLh5PWAyRPuvCuns3i82g8fgtkG8AMFXZUS6pG2APK",
  "key38": "35StbfnyV3xpCBQPp8XJRBYve78AARggTA31VrKaM4MJFGyvoXVTmjR1n8bjHSTYPjeoVPGhWSPSku8CKdf6wYjw",
  "key39": "37UbANd1Sot4WuY1oiEU13gumonqtnYTupS7aoLmchxg1QAZfdGiXTaVgZr1XX7cSaVcSd1QHLAwk8r6Bos9Yo56",
  "key40": "4z6vC47xTDmbaxFL4Ldvk89c5rVcNSBTbVyZchtbuzuLKFNPn8RQPjzLS7rP3BQFpJTPKVyb4rQpJrb83METibJn",
  "key41": "3ezYTJdXzmLRCTQm3Q6DUFiXpVid8KNUW36MG22P8taQfXRQE3JzHbxm2MsrasBAN9cMEmNNknNpaxthyh6tonc7",
  "key42": "3eF47Sdp1o6rDAzKHBW2oMJyiVRB4DzafYW32nRLdJyPpcXYihkZ5XGZ4ZxAyPrn7FmCsofcXYTFuetbasfrVca",
  "key43": "3RFHnAKy2fjABRNWww2WbEiiUFTULzwViXMnMsp61vvFTarntcZBoS4GJJGYcoW6n1bUdosgx8RuCc2qiwbBbmMg",
  "key44": "3wexB9veTNRBShip5gt3XLyVY1H5t2SjJgnCe5rMGbZ1Nf11JKKBiK44Wtxz2F4dvmvLbpdCejGWeo6DKGwvm3DL",
  "key45": "2e6SrHfFz7Ht2QNozAFqEkhpBfCcG2A3PNsrM3LbcCV5UATC71dxbiyNzjHpwu9oRoBTZ3fnrxroF9rr7koEPL4y",
  "key46": "28rS9m19FEAVdH9sCuB15oVku6v7Jh66hvMs38Mm7hzxEFkrq3r2EA2d1xA4wXwZQvu2CQAQQMaygANoLYaBAsgy",
  "key47": "4GibVKqTxQz1ddT6BLm9iqy3bfHDK2Lb99k5chkJVDMDcKjSGEqMWPygCCq1ECh6gWvRvmYsWzDzNZEyzYUBoqpt"
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
