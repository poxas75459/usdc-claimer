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
    "4Xdt3YzK2qR23CFVjDa39v9QJABCv8r5pWiHemdfXU4HCExfnRWuBra6vUx1DNmqmmyvcHMc52B9TrSNetTrF8qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfJUsU6FByGXmUhQ99KtaLThegRRp3XTYxTBGckuNfuPQfcFwbuP5ZwR3d4SwLMy8J3kvuMWHSqWPbkUPj2BeU3",
  "key1": "3TmR9EknjE55im8fgZoR6jp5zteiE1BNmmyLUs5ZHoZyYBEErgGC1qUwvbrLzQQnGftFmrLp4eiq6hGBPCmZMsKM",
  "key2": "y36nzqy5gF2WgVscZRbDbwfdr7EAzmUpe4z8bE8Ydr5Q7mFzK86j7poTAvmMDkWCPuim3hnw7euZS5aM8xh3iEP",
  "key3": "3aPizr54X1A1NCnWg2z87PdQhiJ3NtJfu2igG5XbG3h8MY5sG1xkhek8vx41VPPuurLEww2bMDzVxGXgS32Z8VDD",
  "key4": "kVnKvigNgy9tm2Sm5vCoHpR9Vv6mJZv9AxXXzRGp6NvxEXhXroQrYzAB87Eq552wa8Z7emyvMoE91Mbc3DAz2dh",
  "key5": "3MACjtDiTv5UaMbe2CNTMe7nTd8v2YYEHroG6SyszUsCc9o58VipY3m6btUFyYPKrFDnAJ1MCMN2wnqohbUDuo7a",
  "key6": "4HfCNNzn4gbaWN4gdpDCjWZNdaMXuRUjLQftHscehDWMRUx6RiiD8HroU3QbNvC4wZ6WCWzMVYd7PVidSRRCYCAs",
  "key7": "2cpjuP2X1ag1gt1BxYjguViXFHeEshiPDrwc4Cnie5MYV33jEJHEnvGrVXTtq5SgUmDZaJo18BayFSEeZkGZo5yj",
  "key8": "b9Bb7dKC9U5ir9y358uWfPLtiy3ERMZtE6Jr7JPHqzf28at4BGU7AZJjCJJqMSt8nFNzmRbcdiqMHkxSKQiV2D6",
  "key9": "5cwJGBthDee6C8EHSVsqyfr5fp2kKwPYvwKV9LTAoqkKVsQnqBYWQXL1aojN6PqBzmS3v5aq2vVkQNff2K3KRdxV",
  "key10": "38YseB7ZdXieM9uYH9oMvUiAWZ1HLAkhEbxzGB28RnZWoS275C1P4qNH9rD3MAFLito7Qy9Rw18DDUYA8Dp56ocV",
  "key11": "NmEVoXA2NaykgmacmZ6DrYaaYPhom8BaeKvSbaDZghaHM8KGcqKkFNSKtphwBosuJRa2yYcdTGaZciy6TLo8pWD",
  "key12": "2CBoUhucCehzdmeQ92WGYW5qUWxL23jBWPQzGQyU2xjHQNMLcqKzbuH1myw3bTHyyKb1LVDZwC8QEmB2Mip4DWGY",
  "key13": "5PGo5zyW5b7YaLEjK7oNbzUrRwfmvvEZHYPpUrMqnrArRXzoGYCh669nncUdjho9rwhsfJFjELsBtguxJEsWVUr9",
  "key14": "36GWS3xyqQ6tMfT1RwZw4T1pDA2CVighHLhLWtrbxGxj8rUgU73AiKrYgAuYt8rgdYfKG4wtat2hhRky3E2B2DTw",
  "key15": "3kZ4rBTVEsvBCs1n6fZWkn3Hie9h4ZV4Rj9EYoBfhxAKL6x8xbFwW55TNs8ykt1N4sK8pKFec4Geiz5tRCW1tbjc",
  "key16": "2X4MRk1A7yhjmnWo6ZiAY6LHtkfsm6pRaYH9v6SxesTEvux8myMXqvavuThVfvM346je8QqVR3VZkb3eL4XJ63Ew",
  "key17": "2iLyHGSQeRk7hiFrW2nXgacvAuEononBYfVLoWY8upNBvqy3YEAxG9g2UsghXPfKf18SLYPLWg5aKiTtmUMYMT1G",
  "key18": "5W7qmxCGhgpjCqtfbzk9MAtqatNQznZFWMzZPkuKHjvHBHv2Q7dWY8SJmrvKdq3BWXDEUinMXnSDnvpmzqtxasTy",
  "key19": "PBXaEU8gwQz3wZNe4CNJr7zK2KFfT6T9deMWq4jH5m8nuYnesRZghPKUX2dJEeFP3XGUwKwNhWfLGWXhchNw6QH",
  "key20": "4fPCzDZjSn2TFcn4X3azZ9xdbEVUCXLmdz7bjuV5ceE4yTPRgVDcKNXEbcUF3PF9tPqK2WTm3R2y8VRTES2j35Cq",
  "key21": "Fj5BaNDDbmdKf8WBktu9ZPMtbVAghjwe8Vk2D1bZymxMFaUQqUBf3qp2fc4mMfPqAXXz8Tbkd77Sien4qfTmxtf",
  "key22": "295Z8gxGJgZM5J8SY8xhSZxaowadgknAboMWHhiGVwvLzGo84oANFzkTG5kv9KHKQB7kXviKx6B5RjNJph2VL3KH",
  "key23": "54UZQcWPT88SVgA555cVaXQqFSDwL6Hq31eVBLUxbe3MBYmiQW2zpG6KJ2yC9XEPT4H39r1dagqNiThntcUzw2ME",
  "key24": "o39eo9DADXkubsHH3RYQN4iktiNGVpyfmwwGLgdCkgZncYUBfHgzymDaPzwjEJSrKivyymEsogydRQ2aoWQEXqn",
  "key25": "2wdhph9HT4Wedct6tsoH5EA4n5W3EeCvcaX8uoG7V4KGhdw6F3J1stNEPVje3nWzy6vWqZVP57v5feiKzWPwwAkq",
  "key26": "5wrtHKpss9tJtsD3fbPH1Bmch6nLUR2n3MtC3XZt6duVWX1MTtDGpnECMxNf58SB9x9b4XgJsNEENemLTBD6NmaL",
  "key27": "4XTYRDmcWvARmd8b4QruUvw2cavFtPm6L7N6MLLd2phBqajgYog7AozzEGwQzKctx9DDt4g6FWPVVbt7LrryqQn1",
  "key28": "3CVbnSq6XkGtgPs2fgXRbzNrwUZWXjKyKScvCdYLe6vbRsXucBfMZVkBkS5kztwRBPkeStPu352x9yALKbgThqSs",
  "key29": "3NTjTPzmJfYx2rpJYwNfMVtyQFKviubWNf7iSgzd5gt44JeiWKehckLgcQgyeNLvNbKKGECQqWfCCtPFEZQyob4o"
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
