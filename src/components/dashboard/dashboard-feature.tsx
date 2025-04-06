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
    "2f4XKHyZ8FXVCt5nfvhhF5rNcJ2hfnm9J7LZqWrwNZRL9S1tozww9Ug68zvZ5xsgcMLiB4xDKQheEbNxzrzEjZwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUwcMmQTnBiz1TNwidVygrVuzD2RK8X6xthyQtboeNA86wGB9v6yqC81yDNgiB2QK1NEYRURYBTMzQfE6HaHuH1",
  "key1": "2tGtUVCXY1nkkVWniJyheyAf3ojmAjeKRzcMY9dAbcavE97abUtjb27h6cb73Qnxq4Xfdr3sugatyiFm7GgM7csL",
  "key2": "3gdkKMuAwmFyKoPmxKpYReJ7J2N48mNEK9UxANYwwfTirmhLTYsGYf4ZCYYzm5dk9sYrejRgk3ukHmM9dnCgHQ9e",
  "key3": "mkhCMVcacRY1u8tKtZ9jbFBfYA7pwg3Vdw91disRk3sSixcRiJ4wKZBuaowETr4mbSDHzTbwHoYH357KUDoerHq",
  "key4": "4yAtsYqch3BqWN6vtsrstdGhaSnzp9vbBka1UTFCuwiKy7vUzYWqGzho9G7XbT6YosCQib71d4zCdRebWewfXc8V",
  "key5": "ukWtvLoXQB4pGUTHsDY8ZJ7oGu82v78x8LX2itTJcBU3fTzckjZinq3HWg9JmMvqfFwnk81TV3PENBZJVLprBeN",
  "key6": "5sGYrUEegkfRzK3YLY99R1rkQXpyACYRrJE8ZScYnFirbpqAdVwNx6n2PC31uH9yHdCRrN26Vz6LKY51s9YA5Xjt",
  "key7": "3T6rDJ5zEVKtGJ1TkhHQy5WjXBWJXQ1hV8zGEsWu4p2mX8SB3evxPa2QxbHtzjZ9DevVoPtzasuoYXGzKmNDzNZp",
  "key8": "2XrBKfSkvUGB1Atv44XrNrA8ZnJ1fYomMq4PL2DYkVMwKY2KhdjcDoCMpdPB7JWeQj5stH39zQuHq2nEpraWXMVd",
  "key9": "e7shGcJd3zQFo9LnjPGFQNpdDjM8Qv7eq3QWxLkrhJX9Q66hyHWvuzH4991MY9yMK7NAZaJgzB3BMKZSVvkdhYd",
  "key10": "z1ZURG7Zp8Jfhxyc7fyz8YpKqxXCNvQDEEhKPcgkvYYPjQzJyVwNPPUrjUU7fTEPfQ8C2RjGZ6hnCSjdN89veru",
  "key11": "5eeRYsCcH9sLeP26KsVbPcUgmCbT1VqQ2tWrXyqRbGT3aRXybfDi72qV4rAJ6SLXD9TkbifKjmr5rij1jwKsqz7S",
  "key12": "5WtncZGhEwuNcr3wquA8NGmkqR6eEmLhv7xGdmQng84kRw5WjP92t7jd6n8m6EcK6uwcHvLbWHn93LixRtwdr3Rf",
  "key13": "yVoDTnURCmM6BPFDVw3qAa5jqQa7cTjc8bAaWeZP3Giu9hh3pCnFPFhE4XbCo4YoPyn16zW6U8bmRFE87CSeGTw",
  "key14": "bxxDzp4wfbgrLvzT7968MK9QXygZuf2SnVYJRWUrXbnH4LEjsqTJUjYJEMxTu9r92ZFHfnDppHTvGwNwkGs5NwR",
  "key15": "j9dyE4rLwhM2gjpNBzWskCmnpZdF1nrwz692kQh692PVZY6z7nLmWH5H9oqJZrcsNBvtFJPY1teDt8NLN5YJDE8",
  "key16": "5YDgAVMJDFhaaQcRD58qA1wLb4tunXQuWb4xY16jEUw8db4kWxKjdSL1EqzDiSesHpoKLjM4RhGkt9frrCusSB1G",
  "key17": "3uuEQW1xWhbPAyNZ61ZNh7pgfQiNTHPZq7mrLfNURDZLARyDBE3VE9sJfovrqErxUwqvHKaJdd7dnUpNGWd9u6dN",
  "key18": "4S5Z7gbpxNFF86Aj39RSYr4oVxp3za9Z3pV3U2zJ42UH95KHn1bHfierPDezknwVwnaTu8XY29maV8zKKmtavbqZ",
  "key19": "dRwuuMG3zpNJbeFNeuu2VhdKJggje5GQBiDyUFJKT96s38UeQjUaRaYnXnLQHQLXhjRPQxASD5deG6utTopWgK7",
  "key20": "3Yd1tQNfn1mKf616UDz9Mg8iU5qhhM259dKENnR17pRr7MDLqQttJsmuMXWBwoXDUHMcKHuxJAgfcjZtRWbyrjzY",
  "key21": "5xmQ2enDDZEXihGMvuhqr8dzCeazjgqHvNycdksDA9cjonRACgSbUYwsFLyk43bnDYZRhFkhqgQXVAQVAhLi5Sq6",
  "key22": "3d9P1kA6aqBYYLZLQk8GzaYy2QehsKoxMpJmWJeRHmspD6YMKBTgwtfNCuh6PZdFRvBxvmE1quAY1hhTJNjZcdPp",
  "key23": "3d6LRJvkp9W9CXogEYkw4juZ8G2KGAonQPnthkWsbtAy3e3k5WTY4N2we77F7kCShBst8boRGnFv7grXq8j5i7Jx",
  "key24": "4caQ2bPeNqN27YJDExNzRNc67cg7wRV1wNaT5auqP1Y9JU6HT8wu1q9u2cJL3Vf9VEwg7mEGV1XCSw69oppszmRo",
  "key25": "3jBrAVxixzHVTSdpRVcm6RSZshYdGFZxi7byfBhKixom1K8vPKDLJkKDCw8G1gQhrVRxbepSamaTqgjBDgWhzVZm",
  "key26": "3eaNhGRBVX5t6LsGkMqGWbD3mjEzADogPqnfMRHZxcYrx5CszKag7GbN7jBeqTfqdaGHmXxeGBvLPovURmsJV4ts",
  "key27": "9SzHUHoyZQF1gysFjCn3Z1mRttVf2F7yAM6edUmNDeiiQg43q5WWHVGTVM2L2ECbFimxdjWe3uq9w8tFXxQJ25E",
  "key28": "7x42rfD64jckrKNjLnzb1yQ5VDhb8bpg54DHLmwEAaoaupMTxQzDTcSFdko4PmUimruDmGjMD8BsazBwgVUXxLp",
  "key29": "41jyvDg8CdKr7nfkwBFabgCPd24b38n7F6VwRyZYq44iWop5nYCSt9NCNJEv4Fmi8ZZfqUzBjgXpoBXkUnXewZyp",
  "key30": "LyJyownxZ5TrEBKGiEmgx9azRoSafUTjXZmD934poKWHuZFUJeFHMcL8KWyehnq6sK31Nacj2L9BH2vrWtzeWkZ",
  "key31": "2WcLvwsDmnqG8Epg4e4J2QwUHiY61Hf16dREp89jv5trMYggsNpEPVoy6gtpBdsNUteSm8nxNn6ovzju8KhXHCJp"
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
