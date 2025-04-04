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
    "2TVQdFSuJdoSmVTHoSVjsniUYNmrF6vzymE2YBBoQeUdp2ERNYbr7LRtqPVkdgMw1AGPbFstMa4Kfkc24gsnRzzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTRM5x5WGRQrUQpkPpvQVVM8fL1VkWAit6nP5VxxeVnfFknFPvbP7JrkkAxAk8Bv2Te9N8UnNrA2ru2Ejwj2hvK",
  "key1": "5Y456GLGUfjNiEps1cAU2rCQKA9nx5MmG2iscHAkryLAASmmqZdVML5fXEeP222CZpBGxP63vdHLTJGCWFrtf9a5",
  "key2": "2bjHTXFDzGAe4WksCz3LmxpxCg3iGcYF4RoFXTZVBvhXG5R2hKjN892qvgCf8rVx9AtWsbqS8eUVC7q8sWJ1tMX7",
  "key3": "Ar2yohNtZzVQRUXsupPs6yfwB5LjgG6TVvMTUFpTr9wAQdBBJuEU7NnL1kAwaAnzJCoRpvrPJhZyz1ZpALrp3P4",
  "key4": "Dng7uFPPttpfGrFPQq4z2PW8BQ8ToRFRKgPwBwFTXmM26NYDs4dsyJJw72NQ3ryxkcHW8ctxuAkeqgxNtFW2ZTm",
  "key5": "4G2FyMuJ1fE4ErNyWDtBD8F1GQkGXkmqnhPQG84nPD48uux1dn8NNqFh9aa3RfP746ULNfo6j1xWBpueKQ5TVr8Z",
  "key6": "3bH6CZTv6JPs6XJcN6vjQQw5DdP6FvNbcjuVdmFvSicDotvTU9ATLVH5HoVB1T8h2fS2cYkagDa8Mk6QVK8eNss7",
  "key7": "4rJR513FhCMEQp1Vw2cg8XiiNc2Lj2faxWVG1Kw3GpVhTF24Phg6G1i3M33bRa99kBhA2mK226RdLrBQqTzYdQvD",
  "key8": "3eCNussiKy6QYYMQTzqXeVvm597LxCzP2F7xwphmpJBkQGUS8igE2e9KhCVEqWWjJzXp2M3KG1eb7UaA5LUDju71",
  "key9": "mnc5g3xRpLcX1VMXfwT8BuqvQYqQR7VJsFymmEQgbYa1U22EDSkoxe9chpUMqExBwGx6UMySA8ppdhZkqVUivx8",
  "key10": "3gV7eqF9sLmjWM9LxTuMud9Nq58fXPzsTzDXJwgueXx4t6eL522w5p1HhbZ4xrhH6AVe52gc8huoXu6TDmqBH7WX",
  "key11": "3EvrRWWJAUaubyp61cp7HcNcQNtR1r4WP42S1Da3Sfds9TPKwF1GcQ6LeXPNnef2ekpsXkvbPnVL8HYCMk3uM6Q6",
  "key12": "5QvQ9ByNRTWCTLA25TBzybJbNVXUkt5xwKGqGCfpDbZpnvXBmuTpdgnBtPkQWLqi1y3kqiGsxUpb3rvDg4RQfnHv",
  "key13": "3wEgXFhaufx6qCrSP7y7DCXy5XmZcHYPWE3FGLbMdn718H3rgMx4ZwwP3RpTUdkmDgu3CwTcfkFgc9F8KFjSyadu",
  "key14": "2V8HyhwREUeyQ3RjPL1Tdi9wgQTBmjH6XJ2rJWdFUu88xVFk9z8J4iZMYjB7Y5mVpXzAmzX5wRC4VJLpKQamiVL4",
  "key15": "38NwmQAbLTijpapxzmQnwAep1pFU3soY9veJS7AdBYEvdxvp6iMHZwegwRTzcRDM6rDvhobH8YTLt2HnpSywNX5u",
  "key16": "DD8iiLC3HpP5TJmMSYfC9qQZafGay272EJdZxUeeP4UYHFwetcB4t6s5irATVaZv2T5gS6itB57C3U3HN5jcYPd",
  "key17": "5k9SZfk5a5qoTNyKz4Z4weGwGaNbBDn1M8UgzFhrvFLVFYKSC1kmdhJagtjZH1EwwCTbkkPbpTrgGvRHVcFoYruo",
  "key18": "5Y8ZfFf2WJ12qgE7gbXEsevGHjEqUYgeu3sBqs7tbBNv96qXCYoTGjm1VDzWWiQsRjHe34eFQWRcdCoE5dyuN8ru",
  "key19": "3WcCpAHMM5sQY5hSjmDxdTULedAgH1bVApBsg91j3zirVzJGqyH95v2hZkcEJN36ACPAhLvBkHwELvLJ9mXEMAu3",
  "key20": "3VyQeJAFMmN5jx8Q7NBxeS7PXdsT7GTAHFYkhVSbCjcH9YvQeCsocfPf1XhVwmPcvsYjtDQ4mU8EFyTcZ2kZ3m3b",
  "key21": "Dt9q2roJvBv9zVhkkJ1zaqN1MTkMBPMqiDwzhiSMnqLufBBgfqBgsGpb3G3nMEHHmy8chbdNvpZ9RdnUytCtK5i",
  "key22": "2DxEcy4r9gJpEgE2dHbn5SvbgMDNSRLv9p2hxXn84gtJ2Lrw5hTw4xJTURHvPe7rsvP4qjNBSZ467QdgVwG951s2",
  "key23": "4MZ4oo4F6AcAxwLLTfmLhzuM9n8Bm6wbFcAE8iBo23UiGihNzt6uGsGBq8izbuxjDxRpsrFjbLw9tfmWpoS1hec2",
  "key24": "5TmBnNd3A2waZf6manMQfPn2kJJJ8YjuuY4wdDqg3QvG7wMuadoFqQyTMpZFw7ETjz6tYcaUubtJtjUtkxJGkboK",
  "key25": "2JCoMTtPiNXrNPkNJaysuYVkGrJh3EFFY864mXAbZiBR2KS1mkmCX1hzGdA9sgeUoLpbswbqwBdteoS9fed9gkcx",
  "key26": "4s6mpeBtNAfULbtqumMLFrJH7rpw1kJAqgG6sVQabrXLjWR68vMN7q82cwmxz4Ym1R8TSga6s8fw3rr29sZ5XPV3",
  "key27": "22i4yXXqJMF46CtwcRu8ZSppDbYr8wtcD7xMQp5AhwChdiNUwH7BcfzzatiBoe52GezLxF9Y1SvRzp3ieQxkFAKL",
  "key28": "3BfKJzVkhvydoLUBWGftEXsdVEQRMfGPABbBpxQfdWaT7LH3DCjiuuH8WhYvGZQxb8MzNBL4YgjLAQeC7ZhSahMG",
  "key29": "5ELNEUSYAukbSUQHzZweZUSZYoKMNt1Pimfw1egVFoJRqMGbU21y6rsX7QYAoZEt11EuLa6mjgMRdqcbEnrp46yU",
  "key30": "4qXtee91Ne7NvHzvFmULdkbLUoFopnoz83zeYbFAnDh8bLJYZRepgoAiLTAkJD4GagaRxVxX3dhucQg6G42VrQKU"
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
