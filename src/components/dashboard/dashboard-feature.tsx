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
    "4mgdd6DV4dLxGdDFWsWRorbM19uFeGPxv3AXVrY4nEpGy49hE2jHLxrRG3vBKWmvRDVKfNDmpFc8Xzs9fzzfvWPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVxHJWbjd24Z6AEvNr9pzLqvjWkDyAX4YncdQwhbDomwiF94fTQnn2AdbT597rnHqKdiPuJRuQtaXjh5Q9HjcyL",
  "key1": "i8fSweHqpDVSbgRXEkivocewMF9HFmjM1GsHi1mNnnLyKJi8CEPZcdjiMwVo92cdw3YcQEmFQTyMBg1UorKKga7",
  "key2": "LzgJLgrtfJyuG9mg2BX6rcsZBgzWNrSiwXZ7mwtkFnyNgZWFZ1NBuR1zSGWjZ78wYJryrf8EVhsDx4HvUzRVu2b",
  "key3": "ib6EP6iKWftDS5dmfDGUwYtfPhC7Eps3GeQ3U9BG7GhPaGvjkkJfhmWfQfqoLMXiJCFcsz95XPv52FoGs4jdKfd",
  "key4": "5HraW9o7PYhApmCGpPDPKBc7GSF9AEQa6kymUjjnUJJfU93aPi3wPtZcZzkUWN9RUvzHVCaTkpa5D2JLZMLiEKGn",
  "key5": "4QczW9fgzFzAe4sqJE1mtJMSyQDotjUp3ccVUcaFeVfvELPgYzNo5rVfDALa6rhhgAbWU2k1H7T3qy2WNmYFn1RD",
  "key6": "5RNkgyY1cLwPuF12tjfd8YWjfoEz2f7d57GSYuhDEkz2tFeNb4fmiQ8yv58pVF5whtz39uPRjLxeqxCaLeWxuscw",
  "key7": "5YCWauVhL8B2NFLtNytDBEwYYyMEMNhnJQDKvXCxsN9U7cYcP8N8Hxg1NicjxCP8m9VpBgNm4ev6n4ij7gg8zm3S",
  "key8": "44utG9jjhcTj4XNoJZgFnB89kAdhiCCtXZxcucbtJwXWfDjdefDpdDHjNtXWwjXaPWkEvBiRcCpz6zoMfFYkEFRd",
  "key9": "3jBHMTHce8gQCSssh1Q5tibskVdYWH7GfywbThAE7GURqGMgBiYoN3Na1vjy2dQBrq5koPTUmCN5PfHDSJHR5HW3",
  "key10": "3YDGwLr6PSReKpe1bZPWWJCm8jCGhfuqzdrTYpvUEYbaJSDRjiEmfxC1UURF7YwQm5DYdbaPRmvRKtJ44XWs1jYh",
  "key11": "poUS4SNr4osYTWAVSmz5BNtL9GZJQK7CvXCFitSnRy77DDjvD8uPLXJihdkEMLkgySvbzuaoKN4ckTPw2qMgvDy",
  "key12": "54tfxMdD9k4aooL5WdpHpoUb3xZydFpEE3hn4vy7XABCh8fcR7RpULpfRut3xXDx1TEaEFrZd6RmqwLvqh2ukqZL",
  "key13": "5REFB9Wi7nFafJ4Neuwwy2Z1uDm4uoCkvyHt1trZTtQmwMuBYJdGfRpnKeWexmVcEXwUb81BusxcmWcGYhpM5XBi",
  "key14": "HnH9dJ4iQn5JsheTHrUyE4mDYN57wtj7FxjR6rSMemWMVXQcvqL3Y9qztbsXec5EfmxV9PC8Erm7BHraqtwF55r",
  "key15": "3TwnBeoPKT8m6j4tU9sgsSYV9eVQxBUXFzr293iW7rKKQ4hGSU1iyqr2vfWKnn2YUqyRKdY11iKE5H9j2KgANzkp",
  "key16": "4b9wzdBofrz6dX6bcDhs5FS7YL6vQQ167KWNzS9QACrUM48Ga97CghPnVVqPREGFB8B2hg2VX5g2EcyEHXZjnd36",
  "key17": "2c5tSWiPq8YDk1BHHDAHRNRGxMLiewowU64Mhw96g7UcmXeGhfYx71dcy5ugJtGUeRZvNszFovALYbHCY8KxCpos",
  "key18": "2eYHzRfLizYmo8TX8ZgPscaQ4pT8MtBrFUV8RBBaeY76BynUBFQ9LnzG52PRHKMFwC7yuxRSGJcEtM3AAPr9CMeB",
  "key19": "d4r5tA9bfUJt6oH5dH1w7T4xA2VCjUZcb7bto6TFAEcnDJVJCpD6m19iBYjdfFvDt5Lq4yyfxoQ8KBRzZRGYR6y",
  "key20": "5LoZXRrm8xtJhNpGKK2phnF28692qCma356xgyoPv4k8z1ntkLTjHC9cySo2yeVKoiW3FhRQLTd16jR6aQsBuWXb",
  "key21": "27LhJcf3LQxxgqKyexJBMcv7SAwP6PxxRe7b1CuKp7QXSLi78S6ppLdP4bQMrhQw5BzYar6VfWxem91XniuBRRxb",
  "key22": "3Uf7NWDphtmbERSMaQzc7sTEpnD8EUU7yxrF13N7TdJKf9R9dN3JWebSckaME2VRZjijoBJGLFJvd4dDiPHhUuWq",
  "key23": "9j5tbcf1ry4E1D2PxDN34paYVnwNiJFRvK2mUZNKXyA3GsKuqLsjtTaZSyDuyr2t2DEki7caoda3yb4Z3e2hbCq",
  "key24": "3GHM16ZRz1CR9m7ox36DQYgqJbdXdvugBrqNyYhgdifp1KhsntqXuZkZdzkwEXYFBRteb4FoD2KpmhJtRY3E8B56",
  "key25": "5cMHiXb2xWjejg2B9G3wvAqcsLsM4WxYPKfhWWyDZafVaH8x1nHvoFdGMw3EN2fUMhBEnZiGyCiW2F7s6yjtezKi",
  "key26": "2RcyTPnr2Uei3fbbPnottQVCzi3CesbUtUnvYERXjGvF9NYraZ6UwKmY7DjH2Bry9UGaoToLA1a28pFsGg6E3rwd",
  "key27": "4Sbdabu8GyfNEy1ktCzgri8epzBsiAz1ZoXaY6a8UqoE9RNiped3dCLodGAPRoZvtpV27s4ejQtFFtA64Tas4C4B",
  "key28": "2RPTvovytqiHPkBFiazpFmw1JuMbzzJEzGSftUbjxsTqznaC2VAS3v5NizkLQi5q6a7DEJF1GTyGkhrULQMfCj9H",
  "key29": "4QEf3jv3xHtwAwqH7gd9JvmV1CDQJxTsiQLdQc1kTQo4pVknMEygAdZwA8cNewJVmgAznSNwXppvi1CowRAjh3sf",
  "key30": "67Yv6e7ravybh4P16kr8ojJsGEFX8jNqdQGCn67HPXRorG5QfqqRErq4Em79ARsi1En4TfZsH1oUrWrhgGBP35zS"
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
