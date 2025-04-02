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
    "BLksHcbhJuKYzf3N8cdezgLayuedLhcjBmC9ieZaRq4TY5yDWfSMmSoSBVVprZSjanYUZUe8TEB19p7kkJtGCAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtTxncJA8xSaPiyLYnM2KDwwn1isfTV8dSzd8iMZEfVJcvByctftUNsyEkx7U3awFgNrrZ5S9ZmgwyipTttr9tB",
  "key1": "23C3Mop62PJhGfyw9SGaNWq7439nCT4vojFxWmnTfrJZJjsBoDBnLuyqexpeG2p2vAcjJAKfNFZdSisFh7cYWMDp",
  "key2": "48EH1jdPsLVc7Z6djMXvXvzdCmutQMejNpKgceH4LA6fQjF34UyBLuKHfY8AHm467pheHGpUYcH8Ryi2JRtfgpqB",
  "key3": "5v2bhTxxibfgwqTGHt9meMrFmhG9ZV8qXxRpf4xSWKwMUUtxvhDxpRmYPbaFnm9i9wiWpWcWXTrUnGDtV3nULiHV",
  "key4": "56x79yza1qWxsMbdVmBANq4gqnHH1hPy1H4f5uFfesEJoipCa3xjUHe1Ao2C6ei7YdWAu7tSQ6JLZ3ezHuZz1xDK",
  "key5": "iQVsWrmh1NmRvvG4FgEhG7gU41BySJiaPfauQK9yvs7EMgGmzGqzsmWVEh7CjdVjnrKjZrQ97hYqpfENcCHHr3w",
  "key6": "LypNfNnC23RVZZofTPiJ1FPomzgRHBin2WUrTm6DgfNu29yg8WSyXp6SVHEibx5oJBpdhujTTBhQ8P9RQrWMVQX",
  "key7": "5wqTT7498q7Sn5E4dDKMFb6oYneURb9mvKiUFXX3HU8oRkndH7aMjxy6yb1VAU4qZDYpAKSLYsGKUdM2JEXGhdDe",
  "key8": "3oRAehPVwEHxYLQUGM9WmKJyynbpJBzNCFPKjEU57jjAzmFeb99NUMYdwGmQMt8LPmr6RobB6VntH9LYDUZJoGnW",
  "key9": "KL33UgMKK8KBBA7fJoBAXQ1LURSDe1Ghj1qtZi6HoJi2rnrvpBGmLucdh6oThkzbXNAorKatygXZjcFeXVJ7ChN",
  "key10": "JGkptgnWS71HquYY19aktM4TBf41u6JJ4t4HUAngm4He3FLbs46s7U8uB7LwwcjQc5kDGNnf7dTn5gD56TEpzjF",
  "key11": "QKhKktChMNkowevKbRnSbHSXnuChGfpfF27zSL8Usfc1tK3edAb4y7yu7WgXMrhZ1UprNmvhkaLJjaqqPDDJsKW",
  "key12": "3GsSYbxsMwcd2QHPWxmE6C46E94Q9X56SDL8ggjTEJytpFM4y1LmxVB2qEETfsytyD539pSyGukTAbu9e7x55BSy",
  "key13": "2uq5FnjNAo3jBggNDmaNwBETo9WwfMH23vU95UYUABS2KqnjT5SDg55KEY5hF2doSiK3rmbGvzFuPq96u74AKH4n",
  "key14": "5jxstNsMnpQibpXLRF1aomPL9RLkNib8m4dprCG1FwkzyPiVhpmGm12ZNAbb4kRASriG1NLXpwoCyK5852TnBC5h",
  "key15": "akqWLAmSTwLzrYp1VKYjvFjaUBNtdkJDk4Tta6KCY7CDZaniyxQoFKsz1yvhDPWxWmCUfLmvnFtyVx75dfmr6GQ",
  "key16": "pjSG1nyGgLyqYp1ZJNeBg2DtRFhaugfKHi9xa6YerLMUL8iJrxpXm632K9FUv1owUPqUXW1ReNokZhydqzoQVdJ",
  "key17": "Pja8t5fK3ySS4XR259HW2A3fttGFFgKQNyyYyPENrCqhg1sRx1EzXL8PiAVQnPy1L2tH7wrXEvX4ts5tTisARjU",
  "key18": "4SVEBUZ93ZZXEU3zXyrmtMhgEfnv1YmKUsQr8a8NQYwrbwRD2wCdBNE7m1UnEzAd7K4ewjk5J4ps9qBydWctPyXh",
  "key19": "4DJp93XKk4o7XLxcnx9xVS6MBBWJRtRCqP7Wqp94q1JBfanKaiqST8Q8kXjVX5dhCazJjJUa9VSyKdsQmRcErc43",
  "key20": "5XjLdHoVDhr14HDUY7iUNdrTHS2gzfYnXXznH3F5t4gE8gtq5t3qagH23rLeXz5cXnY94VXsft7awZEoHxboU41N",
  "key21": "NJ97DcTkLAXrEgf8XeeQrygzSDKx3G2tfHithu2TUDMQkaBWbMhWWZHQK9ugiXZCFtTF6e1Ep5yCq5Zz4NgY5ft",
  "key22": "2pNXTj1xPAETrxfbMEqDu9eBFiBzVxWkihstC1LSDXTQtz8uVyt6iVtJxqBKeqssw1rSC48A2F1KDVfjeZZwBWPm",
  "key23": "VDrgZnFK9nQaXE6WU5RuNAMFFxXbXAnFRNEkPNMmDRf2iukd4Z8bWyynT25gpwu8J4r3JTn7cnUC5B32REyZKq9",
  "key24": "4G1JiuuLqwHyBRF8GX37KkUV8iQ7LKS34RL28RG1F8AbeYEycaF258TTxGL5FU2z3nf2QHgRbFpTraNqMzsPncTF",
  "key25": "UueDBj4xY7PcBb5PBweaKPgBCFdLKoKTaWHRzm4TWL2GizEEtDAu9R2jkzbVDQHdPy1NrKCWNS8chmKJgx8f8GN",
  "key26": "3bRGPXuwpUuSkYtFiVhH9wxFpKr85D4vwWGjxMYk1ZiFeYTcdVZ4qmh8CLaBJcqpaFubLzkjgvFHgxzqshsT9NED",
  "key27": "5a33KV4gX9AapFf7izmMXZrNZCH6hAbURprLnJz1q21Au1GbUqbHdUA164AWVjkVN9tVDKgtooqJZewfeRHxm7w1",
  "key28": "3tCKyBS7ZqyHz36a73ztf7MqAE4GgVWhbYaEo9EA5inTwBgqSHf1wHeLJQYWtAitvKL48tZQKEJnCacw4K832mkd",
  "key29": "yedwmUiviquSgHkX7RtgAjakspocHSyWY8dtf4uZHcXkGJ21udHQ2cPFL5z6y75herix8vUkZi8o2zy3vBdFHeh",
  "key30": "27xpn1jeGjeaxXj2d2xjGtXC6vcR7NXSPEZveJDSNXpAAR1W5fLfW4MFWiZ9YoefYSDE3z4N3QW5Miz9e3d6B6JN",
  "key31": "5LiPGjTgbtXHZBfqL54LeDVzfSa4B2jPsp3RRJhae8cBQfPVpgpJvhxQ5vqEhrYkiPRQQX5euazDKsuXwUXAaZoo",
  "key32": "3WuwEe8edjgAbLZ7bMWD7NS2kZLEETiEQQ1SGjsoHcPJgBiWLwiKq8k5BMM7uunMRTdQTPzxUMJ3wFrnRzg8Scrf",
  "key33": "3bo7xjDozGCGu67Vc2gzwZqA2QQ4XLPC7FeLsR9UGp5e4BtViQPMAZkMKcnt389ReG2Yc4sVUrSAy18Y9kUxdp6N",
  "key34": "QZh9f4YL3gcpH5bLbpAeV9CAmherXycNyQofGT66J48jYzZcxk8jaZRc4d7U8fXJQtNobNeXVGuTAs8Dh5NLhWm",
  "key35": "5S4dN7F1Bmvv2YkHGduR2KqF6VMj4rmmrwKgis4PSrm4jEy1sZPX6WCs1RLvFwn7Rm5yL7ScNirw1R1d7as6PcLj",
  "key36": "4zSTgx2vP8rdkkqNWKJtShUCc4ir2gRMu3XpfEuHfk9yXgq52qt1PPQVDsuseAifMRYvh7nKjYKq2grbdM44bXdL",
  "key37": "3W1FgXJTPPqELYbZ5BoUM7bhRfpyoYyhV5uNpvELeibjcYfmwFnhtUHaZBUCe3FwjU3uDbXP2afGsMdZNLSHGzD3",
  "key38": "5eJHAjHAn7ReXTrJ2FUSw2JsJb69eFw8ojEha4f8fQY68HyR3VG1RJ6UobsizQ1KZqHDdpQff55bbegmgorFsden",
  "key39": "35ecLxTidTV1exRE5u1q55RLHV3Vhc8GXAURiEKqTM9JDEvxrJVhhPE5KSGNQ5MG2Jaf7ccWL9xHTSapqLrNpJ7n",
  "key40": "2AcEuRiuXPVLdbDvRzrAHFXKeMTqWS8ki88PiQr154VYrvgvMXrUY8y8ZecMvrvtUKYuczPv7KyvYBzoqyygkZkG",
  "key41": "3gfCWV75JoMBW4SvrMp4RWSVPjdPVDCp59S7SNB62yhrwiR4AxASMKoWvfj1TfjVydAuK238QgPffzMQqbxxHMhB",
  "key42": "5R58pZP5tVzfG5qdpvSi5oR45TcaCSkW7626rKmEfaCCvutaC5kciMjxeXbjDdtWTb22S6nysmwX51r38nV9BmwG",
  "key43": "37ZJDb9qEHiUtF47Dn9BP5uPNnrevEdgNShCtttCnv9jPoP12PizCS4kE4xpkzrdPqtm7FXjDEiBGXniaZUFg1SZ",
  "key44": "2SLyzhgzquZgHsBHdoGq8ASLkm89o6D3oFtAHGoKK1CyCHuvCoNneEt3Jfj5VoQE4f6XZWjTUooabGpazxT7TGVX"
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
