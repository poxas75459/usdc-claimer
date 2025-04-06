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
    "AnTczA6ZYGQmo3aJsZaRKQfnhabXkdrPEoJWerJG36Wj6S9pqyXrropVyDYnSrm7tV9eLh3T7sWhgqDCFQ3GhTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7r2m2gBCq9aCoXaJT5sBGEvB6B3kreSA3tbKjuFL6EdFqoyBqmXE5rfUVoBjNyXK3RBZAqtC8kz3rfrhxUYaph4",
  "key1": "oiwpTkpoVk5cTBbgNhZd3vt16QqWrc3PWmb5Xcv4peUGBnUg8GzHe9uj1z58DY6C4RmLEnA8J3UWgawfbfRXAMX",
  "key2": "3ngL3jtw1xMhNMvUpNMQ9ehaTA1twwz4kQ2uHeUYJ42XH7BcZAjd2KRhpviDjiQdA8R32qUeZV9CumtG49KLx9GR",
  "key3": "5JryxJ1RnY6ucL4HKTn8TEV7YtcFQH13R3dDqpDrzjnNzuf2fceCRZKsyUJC3jEXBepEfEDjTVrjyUZPbKSvx6Vz",
  "key4": "2UfnGhvbaY6yRPt9DyJSw2ohY6bUTyJ63PTaFCnKxAWhXysERpALcbKaXAfD7ENNmyPu5cEgxGRgwt5NVFkX2Ss5",
  "key5": "u1qER32yaV31cUFknwggx2JKU52gZJTP8oiSrmE6xw3ZdrxUQhzR7zfn2LhwgHv8kziEyPmsBd5sN5vxGBSDWz3",
  "key6": "4w98oaEd5UdNkDVSzgrNeEZ6nPSWS19hrUXxrL9RRZopssVgRjsW33B2nqZadsLH5LJNGddMHLGbyzE9kqLGJA5C",
  "key7": "3zQrsPZWZ2YBFk1bN57XUkbmYy7f7fmzE2rkvLqCtKsYLXXDkLjrEWbcEB4Qt3jTTFYAxfthMzPXbuFxoPVA5MXd",
  "key8": "4AJqQPXa4M4iEddkX7G7etGPx7RVoVwgyYabamYoCXtDqgu58Rfjbd7iRR3QKJw4ar3VfxqypD8Dqm5NM4JaDsgy",
  "key9": "2Q63PM83DsgHpTny3Vsn3vrCNRkG7wB26oXYpC3Fcbt8QWvyFkYGwBDsrkJjg59wYhCQK4H4FA2Dk4npKTH3SwSs",
  "key10": "iMbuMzf6FJLiTTDfGxACxH5NVsnw5syHS1cu63KxmpBhkgvaKBkKYZBAtpFJiaxX2FX2wHE4a5H9UFsTZA6bWse",
  "key11": "2ftXaZdkxK2jBkNYHqdoZbfcEveeLSixLtKvFCwXtEnt5byRaP8Esn8ner6FTmHnC3JVZHwugCtn85eSCDLzLxkB",
  "key12": "TYDbFhVz9HrG4sCRXvPQu6aNE2aeRGMVNPtrWdG6UbQiBPYqqdQsZGKkRW5owACDVWfyYB76yJBSjmMwRd3j8hD",
  "key13": "3Z377NA2zdr3AMSNQ4f3a11A1mb6PLiq44GwjMrGgE1cQgrRDZ2azXWsaHiLkvozY2GE8JgSyxhnaG2Hy3v2c4ZF",
  "key14": "2iBHaBujHSHuBGKrRSyhd4XheK2h82P6zw89b6BcsGi7ncmsTf9sPS8AYidRVwh1q2oKVPDr1wt7SmX85ebyP2yb",
  "key15": "4xpQfwu2t2S8fUKJQqbpx8APHg7W2UjM5DSBhvYVWmzxuygtsquN1StH5baQCdHPMBFQNprSHRLjXXcADaNM6wMq",
  "key16": "uW7jJ8WCN5N7fAbi5nccd7xhTo1svnoF24hCW8mwi9TgwXq5QWgGHiAkXYBXDrFbPvRubYMh1yc3jfFgBGjsmFR",
  "key17": "5LHeUqqVremymQtd1uHJxeg7on4fX4DPxaunF6sf4VuxVD3gDVVYUN2UVuRQ1F4545dZJCgQoDfzi1MmxSK32xC2",
  "key18": "4a3FoUz4ER4JDT3mHtqFc5c9zJkth5zDfEvwuovcPN9JS3tdCqETqhtxfQB7vBQnW32h2F4yPN2JDsTda4vrp73A",
  "key19": "2s4VcGL4GLBscenEeW1eXnGcvzQVv11nM25cLdYZeohGXsH4uxLgk6SUo91u71VoiJM8wxgsuk9AMWY1mhSdWTgk",
  "key20": "4KTNUZUyMBRcEFKgAKSrx5fK5iAy42MFPYa6KDyzSdwPH8v5gtxMfLmDgePNmFXiGMcrpcVtM19tBySVJ6uZeBnu",
  "key21": "4Z4VwgEWomHUBabBRD2LEweApxdyLJYR9AK2LGm97KTK9NinP2pibY5FV3MJ1oEh5JeVFo4StmhD3EfizYqX8FWr",
  "key22": "W6rbZYjMxL6uRBTZmgNRZL9QHGcb4uqEDpLxRMydE4vFsxBmBpXiDxjgDm531B9ZohPPFynKaNwRiZPSZPyCJHS",
  "key23": "4v7kkvrDTz8HsNFZSXJpoezFzJiVoVobh7hzX5RBz5TsmpL99hzpHJC2mc3S5sFXLWYNacHFM58ZvXCkePnEPSWF",
  "key24": "qdZuVRnC4WHqgMv8MCeV7qB8ufLdmuJwZdYQicMHDNGxSuo1mD7KQMtF8imjGKHi2UQBXRRZhGoNZhMti2h3GQt",
  "key25": "4pwnUm18sp1KiutuLd27s86mkhkdukfV24QH1LVhwpj2cukYjfJPn6k2y1qd7AszggNAPN3P3Gfbj3rJZwajbGXB",
  "key26": "pkSfUKEaVmQFCCEVigy5uQqSZfqFMoPtAdcuoPTyz22TV6wt7CRt8DYawrLrAWxMgtEBSTykKHJDXvA8nNX3HkF",
  "key27": "FZ1dogogAdV2n6MSWwNCabrcVf4YwK6BsVwCPkv4Fx2UABXRDdzg9iVZvjHoiF84xKqqj3yGgTAZdG5Hb2AZZS9",
  "key28": "4CVHzzkSmj6kcKhncXgVKipkhUpWkkr4DCVpMgcBf8Vs7krxxr43TNniTmtPRNwfNmGcVht6zGGCX133kgFsKCcP",
  "key29": "WquqqYEKu5gWn6WVQkCfPyAn23SYtTETVAN6N6mowbmNctAw5kGGCMCmnL5jMvetpYWYCSsALYnrZWjW2fJ853H",
  "key30": "3ZKJFWSRxGjK33XUShcmjgpB8pQaJ4Yx4D4bgh2wpG1j7rteRUYtcUnkjrZNBaP839BRuzvbyJws8ZU7SHfKKy2Y",
  "key31": "3YNXfou59sGqbE33CSThWh6yPjN8RwVEuyFzr7FaexPNX9htUwnC23LV2hgphB52TgcJ5dEH1ba3MzxZxXrrdYUL",
  "key32": "2jAPdHqYuzBdn4Yk6YtAuLueY9K4Gva2FvTwKZm5ZXZjq4a56GqTMhoxZqzKdPvLBZ4r3xHZnFWtR5QJEz5FcpPY"
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
