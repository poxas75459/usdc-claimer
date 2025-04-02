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
    "4rCzUFHEgJJEDUh9v2gtTuUQPK2brxsDmZaAkgijE9wJ5oTENWesof6zLM2npNfZBht5q2SW2SmbR783QaYyjiAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwzEdqLX4S4ktCtECgQf7YDXRibPfpLf5i2Xb3QKNPNTPW1keauKffQCP2wS23QoUdBt5DuPXHG7DiRRUShZaA2",
  "key1": "4EwFVsa5mb5CmAnBaZgMMbcwf2xi8YpJPCoTBrxf8G8gE73hSt9Sv4LMHjamcQ9Lx9S1MTp4BWwto3ouuBCWve1D",
  "key2": "qD9Z27AJYrRgY5uMTeYixdYYjEU9nyBN4b5DfaTUc4x4ZzcwkWpdPTqWzS46n9TueV9gWsyddpgHEDkbYaKv2hN",
  "key3": "5wtAW1oHKNCUPLuv4RmswkUqwBcvh3gQE2yb4v6xKPWb12cbrvA6zK9KpaBMpX8gZeyeCgANaDMiXgqAbeWAc7ti",
  "key4": "64SfnMNxPB14G68cwDgaHFSM4hPu1rsVySD6H7MCmyLiKKRpCxj354nrU9UtNya1R53oceTVBcQnfjM5TADspCCu",
  "key5": "5qqaTwC1fUKJHgSrTyXDrsHEQc8tYpHaWs7HuEXmtLbgtbe5F4GrjNXDurqXxrWkqv7KWMwpu6UnnbwmAtBgaSLq",
  "key6": "5LToRnPojKWNBTyBcy4jCHGUYW124pUu8ZWRGUqv4EfgpvLMpHrgRJkvuwhDXZfMQMbU3LixKDVqsEcTBRwZpvbL",
  "key7": "LkAALH1N8yHnREtpyUU4o4syoeGXJh3SndMaR6A2M5c5uvibCUWsSwx2786RqyDTbYd4CYUbrgTeie5tTrTqFeV",
  "key8": "3n4xe9QhKFpRzRw9dFTMvRWZmPQ9wTvTYJa9WLWcYJcXrW3Lt4p6dwDfUq2o2Kf9HGSS1TSiu4pYuuYEqLGMAmcC",
  "key9": "2YKnG3BcURrMRihEZD1T4CF5rKJFisEEmRt74wpF2ubsRAPFvrjCawpg1STHEEEN8HDv5uoLn9t2vVEkTbUdkT35",
  "key10": "4hZmRPRUDntuQNzCi8xNUTJNPZCp1nwLYUjU3gZtss3DjDPabCyK8tw1ah3gYfsdnmXUaLDhHc8TFpqzYcrURMa8",
  "key11": "3dWvRFfgoYE6UAWpaLsCjFHvEe6HQezn8b6uV7FN7KkdG5dzTd9rXCRiGt8RVRZw2wk4VySbkhehf2Ee8cTCscMY",
  "key12": "4Gha83s6iiM8Hu4HYbGKsKGnaPCQxMMf3bwcgqES5nu8gLJNrp3pWjY5tHhUTuTie68rL1GFbdz8bfeWPQcRiGuH",
  "key13": "44yXtu2siMw6h4aRy4FvyqftrsLGh4GceCR3QwABg2fDqGrfH5z76FSR2gZbpVeThpDSoeb4tfhRqFZrPb47H4AZ",
  "key14": "3c1bzyCwN1vGHjPc9BMhCu8eVGN1GUyiKMfhviGKkrxXBv1fFSpFx6ubGuYcUx8dRke5B5EZiqujPdazQMgiAT7U",
  "key15": "2MAdi3FYFseVrXMUNAQBKC2ZHsHe9Je94PLiAwo41W5Yq3ND46MyianG7sCy1zVWZje3Z6t1S1fYHro7H4tZtXHF",
  "key16": "3KZfwwPFog51kqYeawNQrtiseLmVsUNK2wMK1159eFqGWxTSZHvhPd7xwqEf3JZf6XU2po9Jb5nWzzuV9ymLD5w",
  "key17": "4m2oJyuMgyHXRVRi9Sg7UmXwWAZpypBvRC8syVMNd5P4VvudszJ51LRPhiH6qxKFJH8fVc7YXs9bZAokKoQMcm3K",
  "key18": "8x5fnhWqDPyBeMJj6g8RsWCZ9hTeNRQVVPKHqGQiJKeonc4LcXVd7S3hGtcqLbscpVNEJuM9aVNya9PAhhw7PBR",
  "key19": "5LVaDwq4BbvevecL7V5926UG3y1Zh24wFcxoZvFEXupHw4G6LCa3YNA7aq83M1pU6tCyYYAJ2FS4F4xvVrBS7PTZ",
  "key20": "5DTZHmgHguLgUdXhTEQS67XvaKzDgX27KPD3hHwj7c2qzSZXvf58m4X2dq2Xq6hSDSR3euw1t5M4yocRSBYqPiAA",
  "key21": "3JmysdLeorDSiJFWcMSRptuWPZM8W4rmcZ3cj1L5SZgXr75s2mKPTsw2pvtP8n3RD1SXrMiqQdv5NUxaeExw6vQ9",
  "key22": "4MiL1aqjFCCMx4tmbfLJDFn694EfjvVTdYgRrc5bRJmtsm9ysN6aT3CUF1vjjKGa23wwWULMZSiEZ3y1iYTurETa",
  "key23": "XD3MCarfc8h3AatQeoQhmpdAcBLhBMCHYgoc5MXp2TQacRTVmJ68DhpvLKWEtViKEoQBBqvpX4gwiQXmbUWSGRF",
  "key24": "5fqfa66MjSiti71tnUgEWiJZdcLYv7cVx94vPfBhTX6he7xa3TXRsd388djqTkkaa6LfmWmW28Xi12cjxFNWcGeJ",
  "key25": "4ixEtMAzs2cXsG69hxE9t9vDTnZorZAayniApwEgMxuifncCxWyBU2NnhT5zD1uWvxUaorSNHudw2UkNSd4edpqb",
  "key26": "2hUqmCZzQVv3chehetV8WfLBptHnc5LaCvFXfrw4v5SzZjZoQakyHuG2TJYufsyPxnT8UQYVwZXswNdzCS5w5eYD",
  "key27": "yYwTzBfH9BKcqFzkmdWDZhDqqETjkav7an4scea5Do19MoQRUMQz15uiP9Xc49TV4KRcrU5hkQfXbrf6KRPjhCo",
  "key28": "53ALntiF7e4UebjGMDa1W7R5MqPZxhYDjSZkNjMuwxPDXGmJjL4uHwzekuLN5AqHWcTH36ZEqTt7VQn86mdp2dxr",
  "key29": "2NHaAS4UfNCSUKZ61qf7F3NeDLqy3iNFSEjsBHirdqyRK6RPV8bdG32kb8tQtVaYKFKSW6qpTFDPGq49xCr7FjLp",
  "key30": "4X1zwnrsQif7yyVREWcWL3edEj88HYuKa8PWTxPcZaTgu1g9ohnNYXj7JNBKxcnYvRadf2qS9YztXPXU8xZEG7cv",
  "key31": "2ooVXtetqpMKn5XASoVKutNBBNAmAJgUQKwa4kCkcPaecnCy28kkFdVooc3VFSixbzGWFfcYSpPpyFUVyszyNcD1",
  "key32": "3JWYgY2rEUFbgZ5FQBQScfQzw9jZJezn5gDQSSKCTZfHJe4xYXXXyCpBHwRZNChFykxZDSZNJQsUV8QMA15vN3aA",
  "key33": "KGYkthg8GEmJeWiPeYvLLRoEsURYDWDNNmptBCTHnVytAYTvrLDfYVziPS18KydaQvLrxApLQhtTE67DmXNjAxB"
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
