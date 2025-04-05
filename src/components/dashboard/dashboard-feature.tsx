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
    "3pYW9Ui5pnxUYRUzdBTES5TVok41kijjgr5XfNdx1U2CSL8B9FHxPQRdAwTQCBn73wJ2TgjYo31UNqidiU2srsTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51inrSYUescTXGuyd9tbt9gyUpokUqSCeH576mLR4qeK2s87PHtxkt62x41tf1LMPjVogD7xXPWjAwDjv6HWL2oG",
  "key1": "3Wbm6wjEVGXUGuahWCtecsw3oQbuStjfbq7wPWHnM2jB4wcLYNRPpVmJzrkXxtnpjm6Yjj2z4bhWSTxbQBkXVc4q",
  "key2": "5tZXZw2zN1GQnrc7xkMnSCgfM1dXc3wcW175hK13fj3Dk9GDcMXjxNeRajfdghWp7cWEJxqeXsTqNZKGbqeMwjSx",
  "key3": "9rAj6aQDGkm9KCzPUXkfxLwY7Xpi4xzK6xmCtodD6C6QWhvPGLepbqQuyCjCGs4n59Sar8i6s9TUdqG9npkuz8U",
  "key4": "VEUWcwRfYNtLCXMFBhC8XzifRNRYrEycjMpu86ZbdxKKJeE9KASP5KWMkrH6NTFR2f6wXHEUS8Adki4KkmgsWVz",
  "key5": "5GkXhvfBMcknpwTGirqXzT8sdvCxKVfEBuY4j6X3a5GCEKPw4vN1XAucwqSJWFSxwa2HiKubNgSvjutWWLss9qWJ",
  "key6": "5pfjzkXWcDfxpcML8bcaDHDxwmJQVMH2qY7UqjMoM6U2zYVyZf7KUBptoBKR5aAVntABNk5KCqc9B2kksPTXsiQE",
  "key7": "3qC3KBftLd59BMq4wUiQEY95YprEnmoF1F1gw8NU4VRgYUCUWE54X7y4wBp1bPXUPLCnGP1M3tDmVxoYwKyH9nLB",
  "key8": "51cd5sHf6KgJHfvzEWSxtr58uk6KpDWMLrQYvoaW4VN7XNnujQGNvA3NEUq5YjVaa5FzbAcm6bTF7nA16w2RgtZQ",
  "key9": "UR89mxPJFxAz27v7pfWFpJXBg8mZuQcW4kxEUp5MRzaxS5tX8yjH58yNpqmzykWpF76iRi5b8FivWLsR7N4c8HS",
  "key10": "4B6zpzyzLLh4nU4KQ3X6xtmuLLe4VvvrRYGqAHTNF9snWvSJ96UtEgYQ4UqurFNffZ4HvMvDUQ2K9PkZTdEspjfn",
  "key11": "3wRSgQHm4jtEQoJ18WXfAd7TepXimu7QeffuHr4CWqQqDbSCVRixMqB2VN99RLJx9x7aUsvZyKEGU5m8KsBuEnGy",
  "key12": "2NhT2bjDJXukzyvfzy61St8R4Ta21EMZDK2fkXFqjDgJC5VgJdKtfKzjzJgKW7n8ivVuLB971asY9afJUCWjpo6N",
  "key13": "3q3JDfcUYFuC6dQfBEDHVvMVfoooQDWe57wdjmFPtrjp7g2QyV9DYkksFtdbxYu6RcbSe4fdKQX59WbcdQomoMEh",
  "key14": "4ZA7aAomBRxQsjbZTke92NDMFBoxRtgjX9bYnnhhbKLQURGrbZ93FnX5VdXGvhV1Pe2dbFJfnPTXbsGEPtpnDUXd",
  "key15": "5AHgNV4cvD3Bd83SqHHrTZjPQQwibPGiCWyJ7c9jDdNQ2wX1sEktDZLyRum2BicigXuTGUfjCjujz82J444moFFi",
  "key16": "4h7o2oFe4AfboJa3C1be2WJRTYFRsf8iVdK1Agzg28UU9n9uzrVXfnzA19SEwwUNCQEX4rXmN37ko251mwc96JJV",
  "key17": "3dcmaMEfKuBaKvhDBreqqUeLSgeY8cEQJQro36smpTXboc7oXfYETw5wyyYaaWAvPHBRaknVCeuRtfEiPXy5HaCJ",
  "key18": "5mLYcLEPXhPQouVbRxACt4ZCBg1T2GvuGNXCLE3AcGtRSbDviW6H6mNL91cxS5s42eRmoB1XXZXYkdNjdq91zcv3",
  "key19": "2i3LbukgrpYTRCiVE9rJLk8PKGg1up8WJMHzEwoM41j3aJzef4ikLXUcEZ7YBc7uW3XZVXzzr37QkthjCCcCYhTK",
  "key20": "4GJAgB2ggCLEPqA9VD6nGbrYHf7e23h5yVCJzHA89dzhbXb5FaqyGEPHrXpfvB5iW48YqATvi3kpFuq58zNkxzfR",
  "key21": "3tSzDT3AiKfLCqnfFkbSHqHqjmGicQ2TzJuQZ7CK4cGTcM3scrzzmxmWFbzCyk3cNNUujzf623wkMHfF7rEeAxMT",
  "key22": "27Ac2u9VofdtziAuU1eGg5GscLcaUojWMKWsjvLjCS5Wh6x5mwGhXfzB3W3nXyJss9CnipaFaiPWb68jf5wpYDhE",
  "key23": "3xDUJekm76ngSZZB6JMiHwMG8XKKisP3X3vqgKsZDWGPRJdahRtV2inVBx52XfQ6nqkQiLBNBvEmjdzK1vrEwDDU",
  "key24": "33wS3F5PGwV9DEwURhPnXV1T3iv12ZWFgJanKXd87N5SBzXndU8Vj1adhaX1KPFsME9nfnon2SQzZCuvUR5ohc1e",
  "key25": "4qKcPQ7p4WS22Q8PaYZQiDnyNQkDrirTRGfwtTuPDK39ixhTjKs9HJSCCev2c4sRpTD5uVE1gm3bvkWdyXUUNrAs",
  "key26": "2PJ2uh5kQ58fKKcTi15nZhZcsy3MCRJi76KMw6yFqTC7Ve5HaqyAeDtSp94L5U2ZP4uYijf7cT4wcNMfEC2cVevB",
  "key27": "5VDTfo4HZLnHqM6tntzJPYMQp6bvhC2pHXp2K2xSo29rDwsADsv4xdPZ7L6Yu6wjkRnjT1bys6W7AgHygw668ZV6",
  "key28": "58b3kdTURkguo3v53indAEKwbUdHmumRk3orYK8XJVFY51gFTZb4W3EJKnQ1yYQS5ibwvUYuXzSQ7M9dDgdzZTzP",
  "key29": "5enpoAiReCzGb4RWxcPLJ82c6t7miBMeDvyzGT4XH4pvPn3bQnbFim9uGZGzCWYzPVANvj4LcKPFoHHLosFkWzfZ",
  "key30": "3yEQrWV8WHP7Evu1LEkzWoFwJYDjWVMNHZx19eRpNDgfJgzE5RSgqHprV898cDbqkw5sZD3n6WTGqitoq6r64Bay",
  "key31": "3KpZEgWPzfB25kzVLxb5oEnfzrUqVP2YZzTbXEyNma4BqbDQ5CBNHfwxeoroCHFStYwrsgYMEACCbZSDXYYXh9qd",
  "key32": "3Wzd4LF72XN3iRKQbz785b5jUMUVN4hYZ6zKQCoM9QARMxGP4x2FWupgXLwNMb6cL1m64zHQFH32QRUtgxQDwCkz",
  "key33": "3xcd38FDgAmipFUa8MyMyMNrpSf9WvD5Tb4fHmzxrX67iKuRc43V1hmS7kxUBp2NiE7GURmaRCEQfo1R5hPUVpHN",
  "key34": "2SuafLuTs3hwSHJMBsXb5VcbQR3R8TWBEUeL3gScAfbyWCeW482WVa9yTWWziQrJpP1mnkniGo9obZ6qP5Eb7N72",
  "key35": "2mRsgPc7kr2RQGeNXHwpTQXm2j3GTGJQ8bTy457Kq4uW1djhwDYpotQZN29UQB8X5g9zbGFL1mP8XdfbrfhmFLHj",
  "key36": "4efnjyNmcAVkcrxhMpaSjzr1AnANzvFgJetpLxttJbAVx3HpNWe3dMoN7B1r4rWQiXCzp8VxC5qTZvvgQjTq8e22",
  "key37": "wn7cAWMg6BXXsU9upEzTyPT4ks819AUCbrPQXJSBkXLw3sLa9cQY5mEm7h83zbp7LrbcHumHKhCFaGUVQdKNDgc",
  "key38": "5oyQetD5opcHSpLdtsRwqeShTsLkyzSUkVgRxakmzbVRae5bquyc5PnSyDAaChacnZyhKVM5kX9mh5VJueDNPjBd",
  "key39": "49EkgCzu6ZgwRewK6UKZxacHXgUSjPD3kebxPGBeF1A5rPp2YHgAEzWq3dBacVHvA4o8LncPH1i7bfTy3StWuoRh",
  "key40": "2sXDMggECc78D2rEQJ2eLxqeCVGtrHGFFHLkg4CRqhDdtoPCHNCh1i1o9xTrg1aMcZyRea9GGHfsirRyi44V43tC",
  "key41": "23dACfLCKA5MZZ4F9EYGB2njKKAqrZgeqj63HzX5PFbvJgTt39w5X7Xg5BSfaRQMaSuGiifkSthQrggETiW5x1iE",
  "key42": "2WdJYxNFPZzXSdC6pt4J58uXbt2kLBiniyCDWXsgPG55WesLe9RCY7GWW6nLhoZCrQVsF38NGxg961qje8rxsrLh",
  "key43": "4CMhZSjL5NEJjieVoD4HF855vFVgn3PBx8WDKPL9PqA7UQX4S3NrT4dZP9fdqWajPYsuRoWDpSBJV4Xbid72BdsM",
  "key44": "41GBknDyLQVweeJw6xJWj1SNpXoGZYngn4VnnC3niU347yYaGMzJ7DQZYySUVhy18uATkDUU6jfCmi5qcdshjWjW"
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
