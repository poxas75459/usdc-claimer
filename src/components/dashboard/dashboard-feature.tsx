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
    "MhfyHm37tfjgMRY3ndjHFoucqGtgp3P7Xa9875zbESXA1en3v2AmcAthZzgrmZmyNSzqVmvuAg7PSeFxaaic1n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1yy6x39MqtkeT5k4DBM43EYb9cnajzozZtMoXHEBYVj5ivpXm9HPm2zPWw9a3ywVJKXNg1fRVcUAeSy1sUvQ8p",
  "key1": "3KJaNvYnbRGNwjeVjkDeadmYW7bCFhTm5g4dPjh3cByWBqvamqzMGT7oCrXvoCxxD6PCGnUPkXKzjKfVkqXvqC4H",
  "key2": "1DFiQtyLNPyYNovZ8rfuxe3VT7T4GoCazNQ2LwEfWJ78HSzHE37bdpHyr7KNCAsZHT2wLPYbP8M75AzZvp2yG5S",
  "key3": "U5UcrZ87tD2RyLT4DkJAccRwfgd1ARbmg83HT9cbLNzPmYpERfuYVeusT44kaTa1xEHzmu8au59N3FHTEAUL2Cc",
  "key4": "8kMZAd9hgnXaEJkP8NH65JzLAEVSZddsbgMriHtzHhTQ5R8Yuzfcnt6oZbnwPzVUkFpwGmNtxFohcz9c8JdcQMA",
  "key5": "4V1k12erUTXwR42WdL5Qu94AM3DWXeBbgN4f6gFea8uy7oMZc2RC4FjTMnVNUqYsuYAGGEu2js4J1Mw15oC1X36b",
  "key6": "4oMwFEodPc43enKXeHrTFFgDhZTzjR69wqWRMgk7AvD8hiAus3rgQ3kiehntpvDddPwYq6bikDWMWL8XYsyvJmSn",
  "key7": "612ewEFtVB2pvziGB99pUouUL3CmBfHH3wVUmHe4UsZTuTKh5xbEZB5rdHi7KRHa9UbHguPGWpwFdYXC6153vQmT",
  "key8": "3YdXb5dVv1Z6WkFfeqcqahCxgkeufCP1VFBQ4YzT7grhMbdZJdWGdY4usjFuLTiMWRtShn54zaCUSEzDGGXUDA7p",
  "key9": "3XaDS5vuU7y5FbPKd9GrAi1Z5r3GLW5sVntNzDobxbnoTxY9XKcxpiU7qzG4oK5MjjmpLnH8pUstPpFLCSBeNYqD",
  "key10": "5EjhDPT5pq8ZPt9jxr8Ke2bKrJQ2DL4n5PdroSjMyUCab5LnmU4gfK36BLNjHZ6B3sHyPNMhavr6KjzJmmtY2Shs",
  "key11": "2pM97UP3Ve27JY1tJgMNNE2Uh8X8WMkU6kSCMmUw4XmHJPQPXUawb758CnFcMrUMjeFDmH5vTTuE8FSFa1MDzEGx",
  "key12": "4LRPoVY4Tsr2WurkPCn9mM7HNCvrXvcrcCnpfnQsfuw1MjCn1yDQj8KQ847Sag6vkTFAzbYGntVFRczHVzTuDui9",
  "key13": "28DRqqCoEzyxG5XWVcdszdJmD5qd4y58Kqz8NFvHXteqKBZXcx4BDeVHmSmnCuFBdtNdYeKi7JNz2t6NUgNPHoKu",
  "key14": "4gFXtuTvKu3q9zGxqSy5VxBvXopwXUoQ2yCz496NGQAcTAKNc6y3qgVmDZ6eWbW1u67VmeYm4aog845n3kRNLCHa",
  "key15": "2j9Hs9HrdJmSRkQM6HpZdLSCeYhFDhhKxRHm4feSKTK7aHcZrJ3BcyCPL1Ea4q7mwwnpvBPPu3Y5zgfwfnDoWrp8",
  "key16": "5zw23qC1GjDrShaWzUoHoqdgzunH5JnuvPGgbW5pSjaHgLTujU1SDxMwVBe1jWXY3ikNq2C4ZKMmtFFUgAJN3Ghh",
  "key17": "4fk2FCudtpp3QeHigfj5wsXngfHBnGg1sbnMgFrppDx5eMpJZLMWfmMEaWskSsUk2McopvJ7KrZkJ3WpHntSobAS",
  "key18": "6EXvyZJFoja64HHbh2iKwDQPyqv9D9XBSCnH6XyjQaEkAaZcmyhFJm7KtNwvHWpRUF478FozVHRqoQBAcqU7Mav",
  "key19": "3owoA29QrQ5aXZZpbRHJrxecePATuP77UZBFUtkBpr9LuZV7AEANooRkrqgaYzZtSRxFBV5gDdhmLC8zCojGXDvZ",
  "key20": "3djZzJAksRqNzNNbtj7y929fzhxtF1VHKnpkjvA8ak1A7Nc1HG1FwXZfu9hPnPSWc55y2t76cKx6pZ3tF3Zpj2V1",
  "key21": "mbGxi4jW8wYgVbxpHBkWKEqky2p1YBrsPnQnEehytMxWq3cpFneZrsf8QE9GC5EVPVkkZpnYwZGa9QJavEZAjnV",
  "key22": "2U71xbT3Nhdv6fqgFpcoQ6boQ8dESpoWtWhBWvRVJuBGDXW9Hos3AfkdyU9U9vwxLQuzr6jC8Q2siWQzNF1sKBp3",
  "key23": "4ZQuTFTLDaAkYbSKuoGrirLgwQmz4gaFMPdcp9FCLfJ1WmeWCGQBQy4w4v4MmHo6rcUWifNrvYJkaqmfJVVFzNYL",
  "key24": "3bwTLzXx52zduuLtkPwkppwEdDUMX27DYrqALMnLvECDfmemSwoUmGuih6FyNqkojGNjUaQWRH5hAiKLJfVnouUu",
  "key25": "37jYCHx4xAjVZ7vJQjUdxWCB2AyVUS8i3Vim2BeVFtHCW1pAWU7dMkB5RPoNJJmBr6ASciuMTxiskC8c8C2TnjtE",
  "key26": "QiB8V3w8s4cYYX4VRJvuRfjx7iPXLZ7yX3FkQpDv5fLZwjCAWuVmodgvmhmrmDXbHdQUCVPoFHQNdRFqs6GhoJF",
  "key27": "5rKW7NP4DSYyr9TxdJjPD7yjg1V8AhgGpFmEg86B4R2Z75nNU42sWPhTu7t37fhGyvknzhAXsFb2v3DkhWZKNS91",
  "key28": "Ud23BgnJhoGpVXsxKxnycTPTtJannV31teWZxu5ALdnSNKrypA9NvTFWS89j5dabj1wtdvZB8y4ZF77aDgun85j",
  "key29": "3XFG1ehw6QsQsiH8R6f6eZKR4zXLjZmN3Gq74z2BsjaUShQbTW4AFyVhQrr42tqnutQskLUUCnRybwXegNom1Pz4",
  "key30": "64H1HWWtkvUmRQQLM6UhH1JvRxH5DK2fX2wANNPxxP246gNV75GZWKJBYv3JNFZm7zEYoNPcpiQDjrauKvDPmE24",
  "key31": "4hU9z7RFAQrBDkK63StRQb4Y3CJNUB2gjGLVbuvGwJ7x7SzkLfwjBtii9wMac9qLpjTUPpEraH6HuxK8LoYpa2sM",
  "key32": "3dtUcUsCtjgYPZuxp8Uh87HPE5aG2UhgWHF8YA23vPBx4Ufiqw5PXxUbtWpf19mvtW8t7AvzDKWMYA4bWuH8Riyy",
  "key33": "353bqW2BLndizk2A4hPZqmGEE27Yo9XJ5yeXQhNH9aDj86tdJmciWk7S1yTSnrdSQiDHV7YEaH3ybTWRcdyadw2D",
  "key34": "39jgpZxCY6bhoGVSyF8f5hD2opV2dzPtFXRbRamaydXu38YfQikDhRfPtnyudp4i45bssLWSPZ2pMs7G1GoYtXik",
  "key35": "3vVgvXpTX4JJAeaEM1Sum5BsBNPfzUnULfFasYqKeicPnGRWaYRmSVAAQVDQTKVDaKdGVy7UATmukeTukUxivMYY",
  "key36": "AVZnkPn1aw7mApZ9YwCk2r1Nd7rAff55D7EJED4dCA6GKcH4wB3b2y6nx8ck55UG8t4bkhTvDbVrQLYyDDN8ctN",
  "key37": "4tamGbjBs4e1YNuGojMqU9BYRggsmBYouJPspSjASmjvfHsfZnHGj6pkj9uFstFhsSzAZMxSPGWUusrAYwx6ELy",
  "key38": "tNSpc8wvXj75KpeVU3bkhaGdZmFt9Dm3ZkvoAQmf9qPPYtoiG4DAzK9ruFAkcC5vDNE7G7k4gMmEpNavdNKQkUC",
  "key39": "3GpZrNf9ffNmLw5BEdwENK26zac8Teux9fjDTiEsaELT8dpfikA1cWmEVh6PHsZQu5237MQEaKsZ6FMS4Q5H5hRf",
  "key40": "2xKZeGu4RTTC2idc46Vb4iZt5J66nqdDp49cUj1vAEPP8HmF3becuatUUTJegfttzA374kSMHpfi7VWdN8oVhadL",
  "key41": "2iKRD24rjdE5r7mEyNJ7dPVPRjjGTe7hfS6syvSo4dU4faGmda7cEdogjA9iwNZHTNUEZiKHok7wWtCHhjKFDiwp",
  "key42": "3E36vuwhYMFxzMZZN2CHYvEs1vgjsbkw2r4rP4X9Yod9Y9Kxno5YZ3rPs74bp6zmDCJ37kLpQZsqhhptXMMvKhSC",
  "key43": "5Pzjegk4VQD49eui9e3f2zVP51u7tn7ADhPx2imQL444bE6iwopYvR3HTPK4kAUZFjnWJAKDzoSkE3HLWvvXyZq",
  "key44": "1ydnvydkJru2M9SgNTEmJzL9vzQGDjVrYWEMz843iw5LKXhm7dqqcai91xjFogAn8WdxddohmkaouzuDJiEqCb",
  "key45": "5Q2dMoovys9vuJpYooUS17VQTXRN9Fg66DSartyT6iK5WXFP428vLJeT4QxQo32S6eDLF14ijV151jTZfeovqWxt",
  "key46": "4MD96CzS8qZRNts47NpAeqMYpmWmM9431QsjoFHMQHBdGHLtzujUFD4eiXdcr1c4WwH8gadDcVQA4JG68EoKmiv9"
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
