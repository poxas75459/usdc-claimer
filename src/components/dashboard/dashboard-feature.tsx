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
    "N7WecZaKXB8vHymcJrhzPoJtPViDLrjxmswzcmQWHQXovwDcGkRyrc83rMKbBd7BcLQPMG7NfAKsXiMzPrw4EG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFAPuEaREhyD1mVLF7yPPRw7uoaFaDqkoWiRJabikwJdUeRS7VRzKjB8dPRJpHHP2EHwQsXndHs8trCJCUcRRjn",
  "key1": "21UPfP7pjoyNVatUa5sxYQVppnXUP7X5GiamwgDkFuutShxoKZv2GZUwizxtB9mzGVsGTWoqCw8z3i3fNnRiSBG3",
  "key2": "2CkpLRW3gSPQzbX66HKv1NRSsfnQkmrYmokmyBmHv9yGfmVhh6MMRfyoFuqiJ4P679tAcJ8L45cLtVK4v5o28oer",
  "key3": "5eFHj37vvrJGFx97bBZ1CUwf8q9pLLq2NEViD4S5L9G9acAHzYnRjwPmuW9cTQfWiHZ2mnkkXTrPswkHdEk56y3o",
  "key4": "26DtjpUvaYcnhWiJ8xGbSHeJyLHVC7MNqABGJiCWe5WpGztTRuXLgL1DqiqbgEAqMzGdKsZ3DHjo3CdiHZB5wnv9",
  "key5": "cuc2cmYxgpGRogeB4k8LpV69mw9r8oj2Qej3KDcSmFDALz3Z6CVAUTHQe9d4P5ygukRr44Py7cvXDEbdFGga2Ra",
  "key6": "2R5SLmnXsdctoLTeXAwNRjx8ZqJysQWUDT9TY2gNJinqY7NdrYovatwpkEHedJgzoR3juStTTMuxfF8vA43WaDyc",
  "key7": "5VNTqJuYpDQc1vzJ4y5wzTaCc9ELcGEvNeD8nysD2oeJdESERLxzUz2h1V3hqLshC4mc5dWBWFrkKCUgRnfhEmLw",
  "key8": "5jGQpDeeQUsv9yKDhDS8GCf5YEvYo5VondLmg64zQuvwEV3zjQZYp3EKRB2YTATo9oF6q6fezDNVn7LZMaKu6Vw7",
  "key9": "5TvL1Ck336Up3KrEQ71qMT7ba4EBd3uCx4o8f6P8zsQecJi19tGoERANDRwygkUuGPykFNFZ2wVFNmNyfQRRpwqJ",
  "key10": "rFSg2ohmW7p6UCNCxmEzRwnN8DbyuS4zDLDwpACkC7zgpVnt7efwpRCeVY7syefkqsQhnEvYnJeAvTM6gcWvD9d",
  "key11": "4pC2A4c3eyCu4ZyxEwsR7SoFhdid2C791LWUHGPHARE36gxW5x1h1aY4hgz6hxoXBi7T88BuiyPoyLLhqkNgs4xW",
  "key12": "3Tsrncj68Wvq4jEuuJPsMjQ6oxcRkZ1X84PpMRc9vEwzmDRTBgzgCtYqx5atoz6QzzavZS7kc87LuHeAsJLdDvYY",
  "key13": "n9bv2s66mHFGhB9PuLSJuzns6raLNTUBApTC7UfsySoDbmPyk1cA1YTNVzLoMTyBouj8Rb2ybcr9y5BjJzJBVxN",
  "key14": "4UCC3snepesQsMQs232oGNuFtywtmzYKAMmDwUwA3rDrkgVjJt6mjeqSWatHiwed1nDfjfPasSzxUDwT5xVK4fG9",
  "key15": "27df5uo6DvEskUGNnysWWwPAgcpx2HssyR57q6jPFh29CJwYA9nrYRmp8f665VaF5NP3N3rkqEPPtm34xht6xuu9",
  "key16": "4bmEEknejtcv9uR3uZtGSXYieTLYfiDm6AiGoMu9ZwnqJcQxT1oABqDs1E1JFF58znFiCm3gZ9s9fLVs2NtKkkyT",
  "key17": "2EgNHC9R4u4DLCN6hqGJKZn3CPoqDYLZvW1u1MNSKPWQyjQ2EY95XddExG5Kb4dWWV5LT6qJipTs8DbWqoDavrD7",
  "key18": "R4ThZi9gE3gBZ4NboqSBeWmp6MeveLUN59Z7fNunJBBC1PtAfEGhoRPPHQ7ymCPCBwbQRr1N9BbDJxojkiGUdU9",
  "key19": "3hdFReT5rkctk5FzdDJoBwqYmDPydHzQnvyosHwNwroRRpbMhHX6ubCA6owpjtTd4qaVraC2o4ZL9W5pretNY5JJ",
  "key20": "37Fmhio5e42oqWWTwdPvxerVrrRbFsHFifusNcDT4GXGvYjBsDsnSLRRFvUAbZWTCSVdzP3gEKXYvNvzQsU7xsEK",
  "key21": "2QEuoyStMqybo7QuTKEf12gk9HN6W5VY56SziGRZ1LSbSaPjWD2AALBGacmdx9SyZc979apXQLekKzLJHWS4r7NG",
  "key22": "2xKbeAqu3jWuNmpMg4tQUaWzRgVyi9bfoxreBpy5udf2hFgoaHJdy1rNJ5sv6gEKfXU91SbpJztw1neT8VjwReqV",
  "key23": "2YZ5CNfD4xHHHQrLQNYAeUnj8jT7Hy8qZsxRYogrTyKQg7HeZMqZWyVpWtm2X8c46wCoY978UYJzGZDTe5kHLema",
  "key24": "4AmfNtHYL1kiDUqpmXfn6YJCRQgTGNzT3jAWHTawfYahQuJxUphtqhzt3e9RMbtkXeswsUHm3UBsniJfhGjaXXRk",
  "key25": "4CFXqG9EJZY5JVZ5zUCtJ8dHW9yapWT2kccLi9YhwdZ1dtyideZZFwEXyXYs53RkfgFMQhWMLpuux3wHeUngyX8D",
  "key26": "4fjJitQHevzgZZfKANMDkuv7r4bnV8MCdSYLQgKbFgFF7R4aKXZNhDYTtqSS3uwbzSr8w6DY9XfttfuxyszNWYxm",
  "key27": "4mi8HN9g71iPoTmnteCHncerNugZZNf6dZkZ7u8oHxJ8vgt27YkYLWPoyvPxsuhauXcbJpkAydobLmdiy8d5pg6n",
  "key28": "SP7pxP6W4ySnvHEzA5uQkAjxbHdi1L63ZPw1hsuDZNrTjBCgCDJpZLoyxtENtke49uxwSSjEgqkcJBBvs9yYVuc",
  "key29": "3v9b3hR7QZoFgqWNPvLgVGBwDCHmVC7TQhcL4XzJmQeYaJAumAZyq2eBsX88mJoYe8cRi41h4ukSCZ2TMcrAtc42",
  "key30": "3NPqrEFqp7QFSnJWcGaGg8MCLfFYhUiXMonFuGy2Nvrw4ZzRFECMNEucnjzsSfg7ah4ziwYgvSTwGAJ9Yd8g1kfW",
  "key31": "3fr4AaV1npdisbvHEvSiHBEvmAix6zFcWCdxMe8C71JYNimrg5APHRenPpWFDBsqLZWZZi58ntVLk2B2sYorjSr6",
  "key32": "5X9wvdi6BMSTGaBvskoYYMACHWjB8ZrsjvtT1H7qq478bdf5xjAa3haBzuHf884p24GEuWXaQvbWvERJkvhp5iwW",
  "key33": "3b5HAyzVr9WSKt7pGV8mVgxx8gZCMzh8EpbZioapAojAubrNwCuYJVKXvh1JQPEvLyvZHfgdNdwvshhcvQC5TmTA",
  "key34": "2uG41SXNjCtuP5rCoRLjHFqr9VPJ15UUER5C2NAA4jWGtxHpEJtbTmyRk2Q2YQaeqHi6ZQQooc3TjJPPjGM17Fwh",
  "key35": "5oznapFb85JNR7ZDx7ZQiwbUZadTgGxSk2pTFK8a6qzoTnCNKnLJSBYXwQy8ZGBKW6e83Z4kwFiyPHFLUcP6xirw",
  "key36": "4FSQoLY2Awy8djrJx3a7UiUdYpRZz1oTbCkWodzTfhSB3K9H6nFWyZZ9mY5kv5vhLVnKA3yR1LCPwJoBZiWsQib9",
  "key37": "UvfrqWCaoMAsU1BuxULYAVeAkRccVfdR492WWzz5J98FczeWzkfcy8cWxdyD3JjSGsWqh9eFcoaHMXugdf4kS56",
  "key38": "5UL6HCoGQGVHUcGAAPBmK1rTymuCuMQDKv5DbJBvok5YK5qssHpRVAriUyVKhT8pZ8WERTt4sAriogGjuFw2fGc",
  "key39": "5rqNRm76ABzL4ZWcNWKEd2d1eVknGfgcANWofhrMnuRAZbXaP5ttwVWf9K2QCEz5k9sMTzHHQKtqte6uaNHnKwi7",
  "key40": "5qeryEmW9mTjF33GND7YAkL7cAENvMESkQwnazmodc8BPvimARpfGfgo5Tss7zzQV83q1mwvRJ4RspGC7ViH4RhJ",
  "key41": "2WuUQcRQDpQYLkTsmjH5F9MyVfCYBM4GkkVzzBivXy3P7dFWi4dEgctLebiXqKZ4X96K5dS8642FCFzr2pkEeJBi",
  "key42": "UtUePrTgF1yQ2kbazCSF81G24NPpee7wxF2F4duJA8QhERaVdsB3DYt7ozxVub1r2dCFVFyPS8xGo9681HTuxg4",
  "key43": "aXddJoMgNoZdLmSA6Hj8LJ2iV5qgnzJ8JiDT1r1yKSNNznMmMYUPyroyMC2vYFgggLN2idE5gDgXmiWs8cSxHcU",
  "key44": "4mHGXNURLoqYK12PYVBp2rD1fqevQ2jPGzshEQyvadH4SgVxrPoD16q8M9raRHVdrLUmnLo7ULxYKmBAAG7rS9pp",
  "key45": "7YiDyMc8h19EEsowaiphwMHs8ggB3dyGR3ejjfRGh8LugsmS29sEg6DCaxzjoutZoa6FRQdLXScU5HXuNi4QiR4",
  "key46": "2cpqY6kL84nbqjnTooVDrFjPbiYz6qeTnGucJeon3LnERiZ1EURh33WN198mh24NkB2fP6dxsizfLeS2Atto5vbb",
  "key47": "2Whp6e7WYYXwZHD2Gpuor5xgRy9haHahA5DWnJAxw4yHRJc1R9raDtfY8FvCmapVSjuXnQKdtcDc9xQ86pQT1ss9",
  "key48": "3hnCnErjaTdB2m5ZH6tsaGpgNjG9vxGCAfwjBy1ZreFpwU9jW9uNTNhMKYv8Zc2TmzL5xNDZtEno8NeAtFT7M47Y"
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
