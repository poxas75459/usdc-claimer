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
    "3M9g7CFV9HC3ZETRipfFLESzgw96RwpcTZCxFm5U6LBk6E7Nvk9ybxFaXbd7booDErSDJprEbS478uZeQ5GXT5CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3csXJdhn38zVn72EdmC44SenZecV67BKrsZC2R71Tggozwz6GbLThGhkKoJH2c8JwbwvdFK9mzCFsPGErFkWJ1h5",
  "key1": "hFJafFChVyoMcvzjxnUGm2JYmCg8QLcjuamtHBvYxG7JWLthAHPneEhgFL9cQck45GbsxXkfaXZZUtQir4qN1X1",
  "key2": "5AbzPsP2hdr92JKz5wSjMmQMTddunuFu2DyYcQmmwY33VM4PgKDwDBVhAYQ7L3aCQrpEd1MsE55zQKHmVdvZGMbZ",
  "key3": "5cihu5AMjARYqUPpei1Soc6KrCnkQ3K4cZkK8dkYq5QAgPJhk2rFNqJqCb1mEuiswtmNguaE4KRv49eyb6JzqzY2",
  "key4": "5NL79hRiRiuWEpLuBnx4niYP5kvYshRBosuqF2nNUXykdXS6a6t59GozcYjjzYGN5JGxtmcjDpqcySUtvHQDc9fA",
  "key5": "2kGSDQq4jqeWPe1rkLry3Nd4jG8JTb4zvrxGYKhNassCQe2H1BYHR1ZaupQq3mpodsfxQoGe41qJavKqrAqYsWwN",
  "key6": "vi5Fkby2HiAgJye7w3fw4Vs1HYoLj1WiTRhvBUHM7dumh36ydmGBGgyMRSW6dVPEtbMke9TQz7kr1VNkNtrJnAJ",
  "key7": "51ZnfYYHLhJApV2MKaQPzx3xNRfa3sYSPBPNHhjJczjK9bQCFvpkPuDuWt76tjTdyMBznTXkmZZSPFE2zz4ixY9K",
  "key8": "5pooDb3VmQpu92FFF2bkgmPCwuj2nw1yNPGc8UeuCJuLBsYTzbyxvYSS6dRgT5GMPVFX4BSyZotMnfA8qhpx8qLq",
  "key9": "4eA6BNfGwzH3fFygNRKwBaY7je3fK5Up5RxSbdpLa1rP5TMLmQdcBJ9ndP8oKhVYeAfhjmgAmXSZxwiwa7Cn7dqa",
  "key10": "659JPL6Kz1xqXHrXZnnb6jNerwb7dP1a4VGudVhjFedjyp3Xo1d3h57qipxPMeDmpV6wj6Xx55NTyooi3c75TYKf",
  "key11": "4Z97XnsbDue55DpcnPD2TS7SYsTaD438KxPiv1BatQjix6TQ5YT13BDo22yD6C83MQN1bygsWt4VTbJDfvbpRrxx",
  "key12": "2qqxbAVNGJqu7zg7GQBUZ5G8kpYWbWbKXcnEj24qdWmsQKCjjmwgJxoFM2RoF58pYJQDviUBB39fszR9ngSymBWM",
  "key13": "4HVU4j9pYFf4o6oH27uEVprseqMN8e8X1nAAXqP8Zj8KFwEjcnqmsKLRxRx3R5JuxaA6zzfomp5u2oFMqDWZu7yu",
  "key14": "5mHsHSwu3e4oRwspCvaL78tjNVNJ1JGJSJ4FWZyktgfLsnV7jJmGfm224s4uuUk7wFQnBMLjCzujSmBAndoUcMTU",
  "key15": "4NJVmXqpW1MtC82LP4ihoDbCcRd2EhugsP23B8mdKYVpBSPhEKU24oUbUukFiUDZP3AesrtC1UiVqPbESR8kTXn3",
  "key16": "3dPR2qUd18CVaUuvLYJazcZ5sRtEG51nhJLf4btADPqMjaYkLUFp77cXa3KfKM54bSWD8oSqS1zYy2k77CSgzQnw",
  "key17": "5Aue9jGKih3M1vt3jJbrrJ1V3Ltn2bb4WLA98UNbNEYTcfAPZMGT7xNVtDkVUDGZ7rpzuRkA5jYBwWRmUB5Mnf7A",
  "key18": "3wHcMZktU977F7JUd3uJpeiuCHBs9kUtFMehY1eCSvFyQiEWS1f1sfEA26cu7HNJvjcZfhZdRGdrkhZBqqT7w8h6",
  "key19": "2JiJsN9aWHqMYj2CfaJwdxBqeg6eXYZ3A1mE7gky1GBYyDgNde472Jm9amgFwccL6ngtU2zGpvNmPj1RNSwWtpRB",
  "key20": "2W7BTGhysXiei618xLED7AEBtt7LbA1XyJMLtQqmd4ZTPtyi2sUyd7rNDMxGkQxs1toC8yNVLbDYWKZGP6NtqAv5",
  "key21": "62fbdhnSSmDNvHoTj1SJQyjLE6BvWuxq9Ny88YYeNumwJt2SoS35HGeB9Ev2Door6p63mvN7bMbMf9m6XYccrEJ5",
  "key22": "5mX2wR3LnkyfkuMySMBt45FADAejyr28cDu11tKxzD7NBTtWsBR369eVUAy4nJA3b9ZGYfcU4gMZTFVz2wX4khfu",
  "key23": "2Kb6EAkyFVwUHbiMxkcW78o14mNFAgkAZGQ1RwXGk5wUewZcwupb1o97LQsV6yJR5y6FggHnsy8e2M1gR1gyfvpm",
  "key24": "4UPC7rf1FcUZYTgSRXZVtW8jZe98iCwo3pEuovQVjuZvLtxZKpWiR4nRHoPB7zg9CxrUhyXpLQ7nQVKShrX92GPi",
  "key25": "3H393X1oTdEPDQLYEqfpo1m58Hr7WCYkznrM4WqwbhsFQxtvZMsQUnhVC3gD7gZQVVN6YCJ7hTuB2E56mqz2Hv88",
  "key26": "4bT4Guy9pof7xsLRjgdCodnJW3EeXYRXHB9543YBhWEywyw3WyYcTQXyuwsCieN9JkuhAGgzJo866Nf1RNG78CJE",
  "key27": "3aMKW8eb9imEyPkoporoykwNMGgZtxLEevbEMXjdTnxg166iXgm1UPkP4fe1J6gG6JyKQYxPYfRiKJy4gMfPQJu1",
  "key28": "aNTJySwrbk5HLb9dpFMLb4pVHnAZjNaVqDVHeSpGPCGmPHfMYXVmjDwociQ1esdN2ynBFvbathTEqA8Rhyq5GVp",
  "key29": "3iHQd8bpvoqPe37vzqkig2CfrZ9WKjKwnHyFMZLMZHLEVButNKgJtgGxYfB4z6fzp6zudb86gPoNGd7cRYBSNKZX",
  "key30": "W83DyTVsLZtLmDMpvgswrdR5puc6TUTHXFioE7uRYXQn5XQhBtchF3G9ePwNfMGMzJshseampfV8vYN6YAZTmw5",
  "key31": "4ch2XD1k5EPnWzpnTZHsx8W6UJX8jSeLwZpWsA3hRbYc4QFtEKr7erWu1g8KV4pNpbgnuy3EtRi448uXaKJpyL44",
  "key32": "4VV3jfVHgP9H1u2C7Q9BR3NokjKpbwo8sWd1YwWdLz6DtqeZS1ZgABhqXZLgCmkej6pHVkQfZXJF9mH1Zj5cc4bV",
  "key33": "3RV2LGCGtiYoKTKkiRcfm978qUMioCcAsajPezHrGVFxy2rJef7pPGJ2AvjHm4zt3KzPrJ8fkzZRpmwsC93GEnBh",
  "key34": "4MscTbLxGWoFBiBsJ49ZokJqs5E64feThzvmnECU6q4Sk6dij5gNbQZxeUTdQwmGz96qimTv9SVG6dyJXYQtTqLR",
  "key35": "4NjExTaqHdLJxHB5srGNP24fHWZNwBHyqqHgTk6CGeW3e6c7VcpHBk4PjWbddTQC7DrKbQqJrEXhMSW7gW3iwH3C",
  "key36": "5Qtm2aBinMGPbQCoWVmjs7PRur5Vk6WJpcHCLkjDmr4eDuLLqctSB2FTjpUGU7H4V8qGsnw7NaUKa9zyMQp5FM5E",
  "key37": "kfWfsLsF93QeL8xtJ2DSN2zm3k99Na72WPdLMcAasZbDhn3x1DmorAmQE7Zky95Aos9NdbqpkxHYBgiRaYAdEsi",
  "key38": "3xPUewQ1JE7DGdrZQfFRvYWZuf64JgZJ2ByxVaWUQoY5b8oc266G4wK2KMKoSibkktdFzjqKKxXuBCFUPoHFhAHM"
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
