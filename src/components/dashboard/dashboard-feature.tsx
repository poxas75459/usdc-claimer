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
    "4CgDyjmbJPsJRonozjLpKHr7FXX8fj8mhWFJA9KhyXCbxbpbuLdAK3zpTvo3PDtQtS47BSaWgpV686fyh2wAg6Re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdU3cXWSRYTMyThCP6YT2eMTsTYa58F2CVL79yC4aNJZsu8fiCRiuhsVdKKBmX8ZQNFhSRezqgpGrzHD6qJ5dwL",
  "key1": "3crEEX8vidRB7rmDTgMBanz3KRCGfzbbxmWGhJAGTPHxBcUmi4uLkFAiHmzRcPLXox2rNQbooSQxsugx3ADnphbt",
  "key2": "44gRr2oo8Ke4aYspsBPGsA75zPD2PGvpGaqAhnfTwig1iajzxJTam5qV2iyjJeizrSw8wTBQtSnmRrH3jTfHyo8y",
  "key3": "5YFMDJBmyZLGGezoqcpemE5mM13UyegWP7Dj97V61SoYfWUiFLeq8rhRsu6SgLuDRHNHvv35EMLzAkZ5sDM9uGrJ",
  "key4": "23i5uArYJ3WG7z52kpg1QbQcUUPJAnjLpfvAiSiBoTF3odTro11SWgczjpcfvN8CKs8nJMtu9CuPGGKyfnFBdWjF",
  "key5": "3bMeJ95AvUhNufXwi3zEsHW9yZJ1vbxaVRxMycXT2fnwUcaW7VSgt63DgQ4MFJ6gjwFcNJyfzUM8JBzB8KVBdQrT",
  "key6": "5x3P9K5MyN8rCBRYQD1Wayo3LqBtC9mH9w2d2aESpWjbBxjWChWsX5BypLhqYBTd9dBW13dZt8bcr3jWS1oivu8P",
  "key7": "4MQC8RJU11TW3CFFuEmBZxogFwLcy5C438Hq6PEAK16ZBLLMMf8JMZYKipytYDYrvYshocBTed2qy1XXQ9dsxewT",
  "key8": "3yATurh9tFPdPyvfLRxJU8HfkK79MJKPrMFaDJmjh1Rp3znFNo9x9EJPuvG4QgNXh53E9vgNRQB8j8rGgXtn4p8g",
  "key9": "5ju1CGfVdwsGuNpXWtcLCb8BTcsc4Q6P7ctw8ToyGAL3DNKgNK3iwkhzVWf73hsxgc1z7fUFhCYjXgbSZUJMXqLC",
  "key10": "4wCAcmqRhFQddAEvEwv1DsWmg8kYo9cZySjiveDE2gz4QujiuVCGLgW5g3PEdGFhUtZfh2gvMahQrQiY5ZtJiCvP",
  "key11": "5MpyVFEzVznUENT6z338UUZZzQzyQ4D1MD324GGJhjRxhAjA3iqp4aszPZQPWN4LVVaZgt5v4Hz1YxNSjjgb9tYA",
  "key12": "623tZ3tauXWPp1Pr9RfjveHiz1fZktVFKpXneH5wsNMiBP3EQ3Sae1HnNi873UWv6M7yJT4uEpzXUHwmqobsnE7z",
  "key13": "2CammWQMbzvJ5nuS44nJd9x5n8xM1caUmEFZ2TpjYUDo8s5L219iGBcvA4aAShdiHjh61TGAbDPx9R8Na6ut9cQ1",
  "key14": "2mKkcK7kzaPbddUKMAy8evNaqbsQzoY9wofbc22j85iM1JFcY458pgStquJieJwWKyDt2Gjo3529XvgNGKXuFmq8",
  "key15": "63qBzRS8zuqohQ171EmvZnqvcc9pRBGQQGCrB4STj1ESReMqWG4iu7x3WawTjQo64NEqveKWuM6RWeUXtBKWdWqX",
  "key16": "2MsTuzCzZCiiUNAb6ZHpdhic6kK9ocADdtHisFKMWhXvjtUtm4qqiTZw5aiuQ7vaH8s6bW3KkaAPWsawWcVE8iL9",
  "key17": "3mhnPNxPTjvNPyvb2at1oY9vaU1jmT14Z8rzoMHcRXk1Rte7Bhf1Ky9GrS6pzRdU6taFwQndVFJBQB4YxiDHisjC",
  "key18": "Vuf8DdyefnEQUVentRgSGeWmrYXu9hUEkmsSxXeDEXiaveAyPwUkrHXMQSJeEvaNWeHiZAq3za5DEjKtSXYgiVX",
  "key19": "4A5d8SJEV6UpAbrBPKePV2WFsKutejZNpMBZP7AJw3Ggz7PcpyE8tgERiwomCjhuy9PDDhcexAuayGe6Ytth3Mca",
  "key20": "55PTbsFB7KeCaqXrLm9Uic5nrJLPQTRC3qxDCFzFSFL9dLwtezVhxAD717ZVvEkRgwx4PdxKyqgCa1BzVYxSzfj9",
  "key21": "3BZbHJsCPXVX69H9GdLgvsnJhhbhxWQKbc1vqTUciQHAmkMvXoRNUh6WR79Jem6YxRaLmuiPVJZCeAdsBgoeW3uN",
  "key22": "2q2fZTerEQ7r7o2xHZvGNsewZeHPhF9jeumNNzgTcXx4i3jqfgkfzF2UrMMD37WDZMXMy4bFXqnsJg9CNQmewBDi",
  "key23": "2AgeLRNM9MVXNXxhpqbUgVUy1x6dAPrWwQeSht3fbmhQvhAnkdh3udi2P4AeZAU7Lm6a4sq3QjaP957S5EKVMyXG",
  "key24": "2rQTWdtFVDZGoM5UeeKWD8VpBFvAYBtrYqcN2HEK38ie9faN8bWtRp6TrrRa1m8bqVjhF72EpuRTjcRxaHjzz5tM",
  "key25": "3qQEwbCmPwdbgKHRt1dqwPoSEofGWqoBKMx42S4XooEkMvb8L9DXdjtxYNysJppafM1eU7DRCC5VF7E8rwfasVYR",
  "key26": "2Ao6qkrKyWenvrjAWHPX3emGdj4Wekw8VU6y7VKDv6EpYVqWQQCTh1JQLTmo2R8RH9yWSJvG9W5W7Bo5A5QfRcJS",
  "key27": "2jvU2HnkvXZu1WYJqkvdWeYaX3afZG1gKBKt9psrh7j3sKc6o9wZCtCQLHjBJDLciTd4XUo6CuAet8sQMfzkTt6x",
  "key28": "4vryfN2oZtUM1TdRDLSwsU7ZrhFo8ykJgtv1o6sWHQNmRhrVPuAUr7BLGPPkYoTfEqejdEiv8SUY7u8xkQytmn3",
  "key29": "5pv4UDte6Svv8fwfStmX8fGy4qhZHanuZwQieXsaRmYBMcXyBVDvWwEVesvkfgVdCSceBphrAfoHngQH2dkzVzKD",
  "key30": "36PWYtKiuXnw5vV1Co6vpbU3kd18EAZMsxMp2GxLzssRcPCo1WvJRLrVqWtuf62t8qnLEtqZmD7vLiqMC5Tqs9ia",
  "key31": "2tQ24rezHaapVzh1geGQPZjJoC3a8S9ehfFVnbM3vziU3KJSNW3UaHCVeMNK8hwR9r6xbhP5asvkUU4K6cMDamCX"
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
