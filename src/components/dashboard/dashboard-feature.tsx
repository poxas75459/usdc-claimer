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
    "2RoJ1yMw2PjC5bf2bvP34qxGnmDdUadncsNrL7Q18WcsCpe2cXCYLPUvwJjjYuDhNrTCGYUcptjBRsq4dV7ssHfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uX1sh1Btkkq3zRMfxXaPtXK95myNurjF1dfjhUTumuHEkqK816HQ9Qkvzi8rTaRAfRwqo9XeWBWgxZfwbDXuSyJ",
  "key1": "5MMMtUDbSLSVa26fk4Kccj8QDRbuU9k8CjUkZrBR5iNEqZjwgNeUEJdu31tLJMeecX1tXaNGbsyUDRSjS5oZmFQt",
  "key2": "2caMBKcKQ8okKaJxNv9FEMC3UjZbHWqpeRNLSbTD6jC3Yc88kk2uf4qACJxSrpXb1iy2AeDHkJGPriAKMZAKcqxJ",
  "key3": "4NX5XNzUWR55oc5RPoapmqrnDicEgPMFWdFmi7PwmEpmYe9iNE1AXbG4z3DR5YdZFPkcqxJFzQRxBmSAEhjHv9oL",
  "key4": "BtHwyenDK4XSWb1iipFB5JvvC9oa1n5NtwVrxzDNggYLnxLpuQXjCXAr813EdkbHaQ8dn5KuTXkMCKB3uuDV1UH",
  "key5": "kvWpFJfcHYKsvcbCDRShdMGSuEu7GKf8718bJQtnzfiQM7QTXkDUrSVr34r6tAGg6WAdNoo4Nz85Khqx8YAn9kt",
  "key6": "4xF2euYYf7tyNfUwdBMX8UiszvyZU5faaVN94NQTQEaBcSqwhsQaB9FN9ijMmjgdBNmj2qa4k5AwcwmmLS4UrbQ8",
  "key7": "3dp5mUthX1nNWRgQ3SExv7mv49xJwrat2L3wottZALtRWLwV9rY9vH3nLQeFnsF7JRZHCGo6ZkDSHCNCU94vbXE9",
  "key8": "4HJ57QjMjoPTcK2imeYHVVALMvUsTbWbnZe4L1j6UMrk2dAddq8qdpgEJwttz1qWPsV2azHMxTRPdQamg1wtUoDz",
  "key9": "TxH11zwEQ2PcMLvxp7VWzd18hbuzpFiMvvqheULaZseRAM9nn1LrTzJKUAMQhHBqvp646vc8fZbCzf9rtr1nHuT",
  "key10": "55rF3u5Tg3btkg6Jimb7BMs2Ac4YAi4tEorcPLD14B4Xo6TnoLN9qAHfytS6EheS1Ff7GLataCb3LzRkUBYF2bXa",
  "key11": "4cBuhrg7FCL4nT29qHuXjFDaSwM7YbDvFYyhpPcEdDNxtDVUF8e9jzbLpQNGZha2AKtphLLkXqatiKzQLEzpVbMZ",
  "key12": "31Sg8Cf2uveMArmnXD857Gy76LkjATWxn8fsR6PiN5J7DFKqqSB2THGQmKZr9QwdmD7mu7ywkvYcc22Fj88Bk3vb",
  "key13": "3CGTpZzyqpeqMDN5trDZpS8GY3kBfhD1s5xjBQqHtXaUF3j5ZyVgxLNvAZAdVNpsPsPQY2ma2WdhJNhWEGpWAxhB",
  "key14": "2SqiRTMfdjQmB46eYxVFZF1RHcgT3oQoSvLYByptG9zxmXEVRBHeMgnV38n1uigKmJaZ82a43B8kJnH5bQ7cSpSa",
  "key15": "5D9UkYouKcSpSxvdWqhQfcJyWxybNePT2FTBrww4evahs346Q3Hh5NbrTw9F18z7HovgXbQ7mpjUkVyH5VZRDeHi",
  "key16": "3RziZm3qyntN2CHfmSwJdG5TkTszWmJAMH8ZZ9uQMBV1fnJGtfq4dhKMRRSpbQo5zGA5RSygzUc3CmHbSZa9gewy",
  "key17": "5eBzMFuFC17ziVYkBeLvP3ndfbjt88NJKBfS7D2JnxT6q6zMeRovyNSiW6zu8oAPnfG8mpwgiKe1pfKwDWPaSoKH",
  "key18": "2pQ1ip6A6JBMCoWY1ZVC1fbkqzUsRnK1sEzDBTygiY5WLiQ5iJq1fsyc7Wd9aQXFxaVSk6ZaDoUgtzbymnfu9seu",
  "key19": "4f8mdkyFQdLsYFmwwXXpFajQZ5L9qEgnC9L9YtK8vkQmZ4pbs1gSj7fZkrnaqd87bvnQX5RjqHnLiYPeSSju8sm6",
  "key20": "2XaitdJh4rWAC7EHexphJtRNb3iTmnGGhiv32wy5g16Z8qnAfXRHoASEU7ikK21KUds7s21EM3sg3NWSCDARcqso",
  "key21": "4V7AeAhmBeC6w9ocKCwZB5sATN5yyxrWhkUYze9ndT5o6Hv73zmqaC3gcUodKuSnHgUuPRGUmLPYWPWLWjxJQQB1",
  "key22": "411Pkw4WuN4cmAL7QfSq58dsVwi1rKyNNPqMA1Mh4uZkVKXruvPCPSiPKEd8PszetkHaGwqx7bJ6Dh9L4ymUFRiX",
  "key23": "3xmVgKzcyAv5wKkkW5LzGt5sS69pZe9r2onzMjBQrHtGrUTzZC26yWrj8YsPTF1T86k58qqNKhKvGv6zGF82j3ES",
  "key24": "5R9R4B8H59t2zCpYTqYMdpUD5NcgT3hr7r6tsDu8DmAUvvXtTmPvP9UsFk5DbYyszdt7F4Z5CRAoEpTrup5Q55MT",
  "key25": "2EZwHiLKV7T5FiAvGn8Nqzxmtny6wkLd16qUPduRpHmLZuWsf7GvwaSFyMBvqS6bvCGtnF5QkttvLkf29UcqJkV9",
  "key26": "rGVJqe28651moJJ4eEFYYBwum2etXjqzvJ9eZ54FxDJ6fZuGgY1mJjWU4HoqW3HY22jzxHn9eHgNmRERyvEAUJG",
  "key27": "2FL9FWVNFvEavnp43QwzJvquFti4bBBjPLdtrLwaPD4hh1hsjBgzzN42Ke3tSifQgZhRvB12jKLw8ZEmdNBsdbyr",
  "key28": "K8bNfFCaeuVpfQNjb2humMWtEiP1uLvfKwnWCK4bWvUvvMpUXkqdWZ3tnS9PjGKg8iQLFkckasYSac4mMfREPUt",
  "key29": "3VteP3SeH2vcgYRNUr8atuV7117ZVDsJqg6N5GDUFtsqDduJpZ8SYMnRB2ax8KkF8N8b5icA2HGpo2n8UaiKcrZf",
  "key30": "BmmdeGimDUYZL5A2ATEdkWGPuUPC1qpiLhjS185GfDLFtJx1mjsrqpfLmgD8t9HJVyEt3ubNKyh6j83cgv4WkeA",
  "key31": "4YwsZgKEbErGDnraVb1hTJqoF4ZD2kn2MH6EiwTK8Zq1eJxTz9TfZ4VVyYg5Huf7f68nMUpMFxp4AKSxXcgXMU4z",
  "key32": "2eZ74yJzkkXupHGqBr9vnCrQbF6iUC7qkm6zczbNwZ9Qg1uA9B6TtaeENDicTHKguatiMJJkmaR2qQMjjCdnQbn3",
  "key33": "2owkBiQ3jgawN9wauFG5ek29rmvvhx8e2CogNxbVHDRMVgJpHSAvPKzZfGwpdhfA4BTtN1UGcjEcHe9HxyqXJDin",
  "key34": "43cnQxktPrR5DVNb8wPnDUMUfR15chKjFusCoDXocPR7V3o2L4LHCYYvQpakHEG2PbhGi1BJ5pRamHcxGjj2RuAM",
  "key35": "24ngYYAZG94gtqwsRi5F54TfiqAwcioKSd9XbGpBMuxRH1pPHiK9A51y1nkNzsne8CbYkgv1DdEhB7gsLinKXQ1S",
  "key36": "3Kq6bu5tnLEBmqpUEkyVSZV5he9qrj4eryWGaYuvSz9hjfmfvR3WBjgsUCn7hoZiiF3ockZgKrC4289FEWKJVANW",
  "key37": "4SiyY4aF4X218jWPBQBXQpAm2dEKhPNUdhY6QDrs9xbzBrjNGdD5F2Sy6vZbyurKm5Zydfj1GiikhdpuwaG2BeeX",
  "key38": "2staVrRNqnsgr74e8bzVXZx4RsNV7sATeC1Qpz9mZSkudm3v46yLdrvJwTYE6uRYMqSmCMQf8vmfqNr1NcnRTz2P",
  "key39": "2tVHrto9j68xa5vgQ1Ptm3zKCrgJtDR35fHJiqG7smsJUumUWuR4wjeLPto1DgpZr2irqWvT4WfcVmExnMHNVUZK",
  "key40": "562VGjSeaYvVaTi4dKfu6aHhHNQJpKhquja3zkAUU9y2mhKxqTVWLDVZyjE72NN72aNYC1pohtQUE7SWqNrgUqHM",
  "key41": "3svxra3tb5161dPdQ5wUk92XW7cv9FMLdGe39rd4srEpPJ2vdhDPxWXak6LG54ZpgU36iLPDCJvA8xwnKTuG2GxZ",
  "key42": "39sZYcxzA2TXHRyMvEiD2iNSZJKoAnSK26YcU7zdtMuPAVyKF8ZohShVsEyL72tHxNs9B2NJcPxtmaZ9RVP5ZwET",
  "key43": "2muQVhDGWNDrkhcFMPDXucqQm8nDG3r5G7Vq3ave92GgasFxi2ncKoHQLbuAdzYHXJvtPxZXGwpRf6jfMR1wVPx",
  "key44": "4uncfjLAbNs3qkgHohbrCBUvgHbiiT7KBk6GKBNBfCeKCHnrCtDUmWHE6jHbWjJ7EoNHmixhu5iezVZfVQrfue1v",
  "key45": "3TKwjYo4AWUD3iWa7uAtxHufrNrtfcpfQvFNDhADNSgrrbaJH84YJ1fkUj9NPSoDEKJxp3fxnonkUnW3J4HxMo6i",
  "key46": "2ogj4Mb8PjDRfUXYBvExBPdgYb8Gmn7DjSkmoCpkYdSyZm6ubfBgCJ7EXsfzvaeNTjWWaDpgun5nTJAUnkdgEWgF",
  "key47": "gZ37FUUhhJn7TiE81cmgSsaHsGn6Zq3cT1QGevQTpnsT6NK31FqPxvSTvcbbeYXr5T7NbdKHbxwP56jqA2WXujW",
  "key48": "3aWvDZu3pdcChRAhqA3vereY2krXnnFBawNxMuQQUddYzo6UXzFKpucbYLWHo6SCbTVeeG7Zvsrx8tPV6JcBtRko"
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
