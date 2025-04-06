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
    "E3jcoWWY4T44o9H6oG2rA3BjTwXEt4LJYm6RvT213zNmqmWeRAeSm2X7R2U98zkNF4fvdwiCD9d3vz15yRityYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UX4mLcXLpzxcb9HmXDu4NQFBmZEPszLNHQ5eRRTxKwvB1j7BxRMYat3KAGxajFwV7y4uWTzxwzKbbbKhiGemmzb",
  "key1": "PYecgSJxUM62iNWLbpFtBFHwZQ2DjfotwMmfTczV6QEBKJxkvJ5z91YsFoakGvUFeaGN6VDnvRRc6gQdDPhrE38",
  "key2": "qWNGzsSR351oCapLAYgft1uNw97iUtYorbYutQ8KZg33iQ9QKRds8eFfNen4hqEpYbrL4jULUhaDNDDLZ8j6e5J",
  "key3": "27ooXyrgtNXC6q2eVL9guSGazsb6hYcVjuZ6CQSavptu3CXjN5feFu4TqwiyrRGdcyH3zqz396MxUrYj4Dze8wBt",
  "key4": "5HrYG18hFNMip16eczQN4YNWhBGFmpPSHk3aT8Vx1zZzbbUJGVWAGJLfvmpPSf5118cEBA2pKekVNfDQCT7mDj7t",
  "key5": "Q9ZbJq55u24vJZW3zKyhFcy3TyzfMyuw3YunS6Fcp3MfwC1CdUHvD5qBi9cPtyPyrDh2qBcPFLysTMNoTMXG8Mf",
  "key6": "3rEjD2HHQyhBuUkRFwYXcNfA77wHJCghfUE2GauYfVVyuQf9T5S1VTmoS3fGMUNTYNmVTUBbKcJXGL8oDR94suih",
  "key7": "2Sngmp1CtBj8ih1EcZaosTb8a7nYnWeJ9j8ttuMWvMSyH8kBg6cygaMHbhYFjPHvNAbnArMAFM9mhrqSV15v5Cf4",
  "key8": "RmzrShr8vs1mCjrg97yiwasC3bnisJeq5oYUDk39kUv8BFgdBjyXxFqrScn1BjFt4iLyZdrpj8Ex3DLWBkGadeK",
  "key9": "xpodHKxafMgfo2cXkyw2h9WJ5jHF77guZkjQTEdexvneKC33E3Q5LG4UiqHqCqeJybKGufeUmbCUtPWFHmU7Jx7",
  "key10": "4WybpgsVbrzT3ph1NRAkPTsXGUHuYVnRynmTCKRiQCFymUTgKkKgzgEShTJoMHZiYfzS3NRKhwhBePA5EopSqNur",
  "key11": "22XmVz2ejY3kPZ6rKNntBHWar62mb8MhKE7qSmXiFfJFmjpTawecspovK7DqMedCDm8FBH7kxvM5cQ49NkxRxPTb",
  "key12": "67UBHDNi6fcnTkC9tUC4xN69sUCWP5b5vRGruiGo4arQi8ZrAiBx3MJfC8S8Hh34EYNs1oHTL3yShPX7VRHBfH7o",
  "key13": "3zvfKoRpcfmZEsfptvhM6UwawDv6x8vGyQGU9G1xtJL5sY5vtM3BTDmWZvBEhezeLjwCjZdPxQpNkY97uKUjUGvj",
  "key14": "5cMw6PCZmpgB1ob4Ah9xf2jXY8HLPHwLrhmFEqco7vc9QJFJDGQJbjE891NjTCZzrAZbzKJCMYtcpRUNog1oXPAN",
  "key15": "25v1ubw5RMPd3cgiMgoC6xEZGw1ui3X4VGU97M5rG5bhvkR6g4y8kyFfkdSYsS4M54qD1yPrNhnPjZANpzso1wsr",
  "key16": "t9PvjtCzrMUpzVhLYT5PmxwAAsLrtZjjmr557zaLvhck4GwKVyciaYy23dZEPDYrT13qDpxzFVuhft49kAB7yHV",
  "key17": "4P3xtnJ7o7UeWnXtrShWLTWRg2Ta7pKCjF7odGPB8mWr8VFnngW7F4WvfWL1uPSQnp3Wy9do3JZDuGRSuUFk2X1g",
  "key18": "4aSqkZbzS6BPRrFvYTc31NJ6NbG4ocnT8pmSQxoAY4D267Gwqyj7PLhZX2rd9skovq5ZW5mqmmtNPqxEC3agq7ef",
  "key19": "KvEz1D748YF7bQPVnjptydnvEKdSdzwmEiRoioDJyysQRYmkFzxDNAiGxZXTercVnzjjyGWe1jsdbmYfTMLXjdR",
  "key20": "5fXWxV1Po3T5AwPXBSkrNPZJsJo6Dz9VvR9fy8bnAMjkvdc5MYfvUE8SLvyWZdcEUYqYTUKrHqeg5fKjzSo1gZqk",
  "key21": "4WihazmaEAYkhEraon6dUAqhApefAw5GAuk1Zwmkh5VJzyoMZfzBmiad8vtMbpvY8sLt53rCWhQvSsP6Y8dQTsWf",
  "key22": "3mPQbPTbDXSU4WVya8XtaAwumCGwRuKeVyyQTB28kFy5bGNm5kHmrpGenss911Lez9yEHzWbLrV1A8ypWXy4ymSC",
  "key23": "ycwgBhMffT65Jn6dxE3CnhUVjNaLKrpLsarZdL7Q7WLNL5aNip6vZF3eVMAM7cwdEHWb28Me9KqbMuJCWTU1mKo",
  "key24": "4Bavsxkf24h9B9Cb3NCpDZgozTMdiV2VfoAmiKki5W21j7YSkYxJ84ZNP9yEd5HEsu7m2iiRRxbfgmJHPKk72jfr",
  "key25": "3GPV6ukWcxMjsfW3dYqFhz5FgFAfKaZCB7rrwqypmVgeoUMGYQmZyZaKYNVpVCqoAHB7RfMsZS24dT2Wb32Etcji",
  "key26": "2FNwicNEDQHuXC62BPftYFYxaLYV4erxxkby7No2gkrPd9xYiKftFKeM7edhdzwyD98UAWktcR29VBCMbr2oBG6H",
  "key27": "8nAcBUYLSvB7kLSP6ymPgFuEij51edraZd4kDCR3nRkCFq457igWj5yXHZLDRhWdyQiyyS6thAXqUBA4MhUn6Dq",
  "key28": "5mhpDbTfM1326DEUDpJafQDq8FXirdwyG7ikzSwPoyD8U9UM61mrHBw5d7UBQhBZ13C5Xus4QzuBGH4jTKroZLVP",
  "key29": "5pL5iAjLvvAMcdnA6JU5Hy9vkT7VhzvTUzTXbzEojEvzNnAdKANQZqBMG3siNh4cAcr6TnZY8SnMyRF7ZVHgEdFC",
  "key30": "3kuE2JogSqc3taYFqZVPvWPten2bPvc1q3DxZ7uNUjra3bTEfhkULST5CxDKg2pdysZeoZbwa21SiEixK6Fy1np2",
  "key31": "3PdqLZKB4dch4RKhweraeQRMaCi6S1LmfELm2Nzvh19gESvTnjJumKAUkdTT4D5pxcjf2G9oCFSu1QRa6aFhpH4X",
  "key32": "5ygd3Xn76K7Ew1WYXD7vDozoNGJDfMGApdBiKLdGiV5sABFpGuPkZuw51LjB74U8Aa7faFxaWEyNsTNpYt6cqP9L",
  "key33": "YPfSdv3ufMhN2V4Gy2z4NfnCUHVdmvN1wXXALqmwJTqr1UfLVbYzL18yHDs4nvzrNsJLWSSf5TrHoFJtPbnwMVM",
  "key34": "63LyLfCvSozM6t33qDMqLo1hsPm8wzxceah6as7CRy8s5VYyahPWw42aeGxgufNS2dpsrF9aXsWtrMjNGBe7Hprg",
  "key35": "5H5tQGrNAwmQr3aXV7eci4yW4hHZfCusEuZiZrfmWZVPj3712vGEMUKiXmvkhKRMhPebEDHMKDGXJYS4PB7ajqRM",
  "key36": "44utZ28CqcBiLk2T5ZiSkURxtbzpaATt6YPgqZhg1MUiR2wxS8aa5GENfqW6w8etJU3Sx1ty7n1TL9MLogj8auY7",
  "key37": "2Zb1V3HGST4HXpsFzsuKPPT8hrYNDYvyXYYD52dBf9Z6fa6GDXYPqWgFipdTR9uQFenrdNic5kYRDrwTFrFsssXb",
  "key38": "4oPDnXSue7N3cGD2LtYdY8rRv3QLwNAAU7wJoK78HFpKsmNLEzvyQsc9VJpTgsq7382YtW46779fzgkXAfCqJ7oi",
  "key39": "29L3Uu6ZBj3qR1f29jHYMxdWKxFouXSk8H1GbGwxoQ712st2nfNQBTSLGDL3j6Nre5JVgbtBYCcybi2j6UQMEgPP",
  "key40": "2GjsKXnPaPijFUcWV6M6N1f5RY86NBTVKMy1nzXcGZ2P4ApASVqvHp7iRyNX8SxC3VrkGe5xK6pJyBHpx8KDLWAQ",
  "key41": "4W2KQFSCe372uyx72A7RL7Hkop9VpheRHM6xXWvYaXYqu7potfGQk6X1zDqoaxnkgBWMshp9wGCKue6TxXgTHqks",
  "key42": "2rznnFoww3E4MHVScmrR8LGTUCFaJMPJchw4Ez54TgcKjseXbJQYgvqdnn7HBsMfh3gn6H5n3M5x1qNJDYetSEB9",
  "key43": "4UVampUD6KeJbZ8pghAHaAHBfkJbHdwKi75rbfEEbKPVZe5Yv519CSaYRm4nzUJgvxiFK64XHU8VyFTeB8NUMTqT",
  "key44": "4E25fTZEo5SK8euphYcnZ7KiHnV4X6aonSu1615fZrSHPd5G5f4UCyiCMjWtEYXoUSEpFekDphffxS6qbmVWqnwJ",
  "key45": "2aR7X56btA3i7ZkzRXABtp33n1oqAu9yk7GnjXs5WVb8Xxw3ZbLuJqtW42Hbp8qW4Sy1G37SpTQZr8HfPdKw8NmW"
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
