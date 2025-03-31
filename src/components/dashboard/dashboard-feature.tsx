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
    "49nx5Paf1gHX8TnjGWEiDW1ZCQA34FuTcC8gyp6BmEtW1bQF9pdh9WXuT1dJmn1FW95BUzYYqe1FqciSYQAhjsBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwHuhaj2JeYU73RRbrKBURVXKBtoNetHqEctZ9Zu8nduusuCnJjP5DGddqxaXTeoaF9r3zFYn1KeACJmGeQeTjY",
  "key1": "3wo7zenh6Xa7LpnNWdaUCKPj1yGSxnYTpo7tDa3JsvXkji1xdKqFgPE3W1DRNPmHCKKu8WEohHgNc3GP9w3MD6xu",
  "key2": "4Hs9tqTm69yn6ChnYynsfmyR2gC8qMhDgkThyd8p3UCM1uXumvH2D1CVjjYwr7mDu8sYahZ5bE74CbpCv4HvWzyE",
  "key3": "3FQJAYKTQgZrLwMzmd4WEEffD9Gj1CKBNNLdCaiLStin1PfrCFrR21cKjgp73qMsuku2KEAzHtq8YBu2EauAir8f",
  "key4": "2TDtJ7LFwpU6KfqE1BiyA5Yya3VRU191oqxM7LYGm7yVREYNNMDeJN6eH1Nif9Tnb9jT4L9btT39Sa76NtQc8aev",
  "key5": "4kSbcynjVdmdzQKdXFjjPTLWxKetsudwrR3Wc2r9sVmDSLe8jfADQYV3ZX3xuw3sNbcwni66ewALt2NstUvgqnpK",
  "key6": "44pvbX8erwhtRBXk88Qoobkhun4EaDTWnDd4DziyS3ZgdNqYmTPBBrV1NGPwUyV1jkuhtAbG2GbteNwqMmqAF9VK",
  "key7": "2PtPGShkqkf189MQ9T6mxgK58znazaRAmynh5USa9AYghBXUuubZnH2P8c9KGuDQetzdY5tBTuddNjY9SnNRFrqD",
  "key8": "5RYpBU6YfLf6vmtUsFGpzAuGsM4WC9za6Mf4CGso5KznuhkoGMMcHyJZ9FjVyxz3xvbLyeTrv9sQE9sPBE5gySgr",
  "key9": "3KFctUrmKjME7sEKHthQn4U8v34qweLvQraqw5itpw4agamQTsrU5BKR4DP9BTeBhJQjFXH7zaKsG7fdxwS5Mf2B",
  "key10": "yfKoMf2Nid3WVLNac2BGchGxpxJtBu8GZf9aeJpGsJ2CCHS6GGGbzh6fW5QEypUwnfSvShKvjk9FAJncwpA1kHv",
  "key11": "4BhZ5jYTibnSKwq1kGLCH85KXfds1tC9NYBm4SJvF5q22iumP1AEF1ePhxCgfy3LxuKgthT2PRVtSevpLz7BRFR3",
  "key12": "3f3N9bmEe2x3puGpANo77UZ7S9uvLrAKbnaLAM9AFJm2v6HSUZUSXYHS5C18a8sSzog3LxVbUWwG77k4pLwqVXRU",
  "key13": "gbJmRBdQS62ZuF5K2MGihNmfsTUw3Ve1zHzs9VMZjhNptDEspikyfkHseQ8Qy9waHuP99spxFSCMEywtTJzHGiY",
  "key14": "4EWAZqXuzBAAjeQyavK9s1UW51vphDZjWYfPyRt5HwB82YFDZnawtvsAqGMLfgrLcw5SLtb8Kj87iTe6mNsqyrRt",
  "key15": "4GDwzt8NzSMoB5qPftYydLBUCYwYhHNFrqQ9fAy2jwwFJdGQ2va1oQcz7Kr5mGABPsFqzrhNGD3GjBqSTevaJyZq",
  "key16": "4XR51YZdW4GeyFrp8nm2Q9aiKNHDDzt87ZdLi9Kj5K7YFTpumBwNY97RiT83P5t8tnE4E6vgThtyVnDkjtRwicSC",
  "key17": "3A6vgTQfzpgu65saAR9DjiQT7Rx5p5ahwQggRmrdPQpbLLkc8MgvQnfgMU6VMdN1VTVMToBzwP2xKZkFoLZcdgLp",
  "key18": "4BKHWtVssSiL1Bh5SvTowrAjSEhWD4i7iTaTQEtcN7a1BYVLg2EGm8oxEzdoRNKJ2FixQrFKHeJoYQLzQetPYdjn",
  "key19": "5Qswu3M5P6akpZgzK44F4krCecxR6tDDZGiZywuqamN5dGjziqNpHano1JbWn67vp4RJHg5RTheLERmondwzEAho",
  "key20": "3EmmEDfuv1iNvY1aYjeUUB5B4c8Pe7NrWfBzyNxJ7k8wxrZTMM52djor34mxRkB4TS3vZF9eeQeqi7ZFnqMqtao4",
  "key21": "4x6Hu6bDhc8EYZZMbhMK7cY5P1sEzkTgySuboCaegCddFVHHCcL6gZgWFmQmVTVaLH35Uwb69BdwSze9JCZAASw4",
  "key22": "3M4QWcMQxPthczHh1QVBuqYwcmPxtG4goENrA1Do7bC78atFhTcbQkEPk546wLdBWyQRYrqHQ3jRusKPjjUxwwGS",
  "key23": "2qKkHngKcQupihrzX1SQBxc2tXpN9iPHJgZdcWUy5qXasL1wL5t9Xi96usX4Ban1LQNTu3c2zJr4TGfv7KijNyK5",
  "key24": "vVw2LYbPY8J6hcBhVovKHMXzSgUoLMX2NYRjbdzyyySS6zXjLWhxdL5kXoKL54xNzjdSyURXXzbZjpnTBeqvEx5",
  "key25": "2DzoFQHxfNmzt12bdYChG1RKjCrm78hJXHjk5fH1VS4sGivxUhD9Gu23shGGVpQ8DTDXcX7nYYMinUtyZNzPXLB1",
  "key26": "2EPQB8Vy4DkKsDy1LAMgDHdzmiXhLKCJgX7z3AmxiKERPZZkESAYSsup5N1cc71oQLFEJukpkafB5S65gfq8F76e",
  "key27": "5EkPmTKm7K7wnxRktpcKoZkFZ2khhUP7mndeDfakB6HeozyCm35WGMMEJvtWiw9BeGVPrFzzZxoqvhve8Bmh1oZJ",
  "key28": "5hRFJB2npUGgViMFh9LJNSnk1X3pj6FfAWDQfP4y7dGtYd68RTRvz7kaJnuPkA2oP1DXVZidcHeTTa1qbrwWCptC",
  "key29": "4PQLkiiwX6AoCAihw3NDWRvm1NdQGYDjST9QxmKMLR8N5e3qbo76vE3dxKnqpPYpo5qod9eFyBrvvdVwW3nxZaNE",
  "key30": "2ciTNBRtA1gFRbDzca2EcCAgxS5CLik6jwTcf6qB3L6S9BWvPTpFHxEVEVy6cFryHGUmW8qAmT1mrXd6dhoYQT34",
  "key31": "22kPV17oKZq9hXDsiMQgqbt7wbhQC1Ni7LWm8fir2YoPgWrnDqK3WjJp3rSHF8r4by9ShrUV3akurtZrnuiuG4ta",
  "key32": "3fwdzCh3G6NNeUJPCvv4tkpmPentiURF18C6ALfA5m5dc7PjPUwkzQX8SBYg2xGiXKJwK7wJK4S3QAGQbSYNX6fx",
  "key33": "3aAzPpepCoLxNScqqoUBXmMbuBdh7i7LjGwE1npUGkjgFZVXjg2oUK9a46vdtC34K4QF1NYyjFev7jrSte931H5V",
  "key34": "5wpX7GZtUh1rPVQvcey2niFCdo88WQVNTyu3ACAVKbV2b4HHTWKdtMTTNFJMYSRq7vMw2QsP9rHvogeqBBusgXLG",
  "key35": "3fvKEHwRCMRisPyNA6wtRaZQ7KkajRNBavYaczEnpgnvxbGRRYhEkhwRFyhpqGADffSmD6q854fX5N2RLSMvxN8P",
  "key36": "2zdMcZNzBhzUuDAgCaBGzAdn4pvVaoowMhrpFnKUKBAnuP8jH7eBZ6uf9YuqrX7u8UYXRVYeRrfrxcj5HGH56sUu",
  "key37": "561Es81YA7A7t7Jsny328sYBRW6ED2GP56Bdz9Q4SAJjUQ4xpmGxpeGd9fRWxXp6w2U7gxhouAwb9Y5qSMwzKU9F",
  "key38": "j3yf1BJ5wmB8Fhem3vnT3KLUkApgcbpnJcjuzS762rP35XMTojaXn7iUYJtLTF7wehwmdXhEDpv4Gbck8sfUuF8",
  "key39": "5u2PemkBiFEHpvFMDUWsJVRtRFPF4vC1MqpnoPQnzamoJffeEQdmmcXYEiSqBjX6FRxLdjhtZRY88FjEjgQza6rJ",
  "key40": "5HMCEwDiPB2bKYJFbdYVNVyDWLrQZn7qsq2eLSZRsqANDejbXA1ZGfMaqWqGCFKZoFu3cq8WicYimp5dn8KHAMYp",
  "key41": "4P1nvVa1wrwvA5MqRRWqTH3Zj7wD8iUYpqXu8oDX3yADxNZgRczhFywVkbrXUKqKtAedMUZKxAuPFMAx7KvUsKJ3",
  "key42": "5FHM8W9KYDpTjrCPEQfdqrS7EnKPyEznd3GYAwQ2CRfvdhAJmBfCHK6mBX4KWDdt5xbVUySPbg9LsCMH7ZSgpXu3",
  "key43": "2tiFmkqRxiQvDb2NFTMQ68cb6ZVkacewaYvb7iQ4VwN3BuefV6ndNbD69ZfNFeCBXqnihsihZMbpdGthq2cPf15X",
  "key44": "3i7wntBQp1Po49XMg1xe64vW9UoEErExwHmGxbPHMEF7wjV1quon3igmT5fWmsrF1XYmQSiWM4nXHTXasmDtXEFD"
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
