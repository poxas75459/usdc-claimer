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
    "2npdtNucikYFihJBTjREuCDAhWdJVnXNdwk2JhGjwCvctSKc7i5ckoGKWAtM3WZireRqXnQ2o5Mi4os7ir1cL9qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vo5mrT6J6DV7tNQFzxPwdEbefkL3JqougeRzMHDLPcQBs6BGJuSffLErfBMo5FJKgn9gZHePZe4V4mQQHCWU4ya",
  "key1": "5RtFNr8qR9wK8t1tqYnGYS8EW1pKPnmk1UhMN84iaVmattxGat3qagvmq3koU6KjusAWaJX25iEsM9rkR5cw7o8y",
  "key2": "9ARgYi9b5HNKYedh6MjdF3J3eJQ7P2SBBsjzfxaoTndBMRJagBzLCygxTMzPp2Jdg4qbxRrJXc8vCkwFR9QvKoj",
  "key3": "4kQRLB3aQnxYPZseHcojUYrkeMH5h1HbiQDaEYtyNPNN8LMrM2jLeUgB53vQBVVAZ4dHa4uuANhEE8ej5R99pL9x",
  "key4": "2aRGD5SScXFzEd7eiPkLkiFhz3d3NMTn38nXRwC3mGgZr55A226JWqRGfSVQ3befwDZ7xT5R11oD7uZhBKNHZbuK",
  "key5": "2MzTin4DuqYtjFUdZ8gvSHZiHwbYCNiYk3eBH9hyVp3pptg6dd15eNoiz8TCTZ8Z6EG89e8bU3ez69k4KUhUzdxv",
  "key6": "4br6G9oZbAsFUb5uLXKaRtuwbi72krqjuQroBf451YavEXavYeaP81Tj7KU3ftDYXnKW7BESBf6cZtkjuaoWj7rV",
  "key7": "5sWguETtWh93rvN7N3oPWyTjBneS1wAjcykQGWzQB2NVJQPG7Dt2LzSqBw8V7ZPQve8uWTgaCogsFk5LBbnNzNYr",
  "key8": "4E6CUxy9WAJcaw1CGa72U6Dt6toTCqocoWS2mcAVBuqC5efNa8baRbDreDNtCoJWRhy2nusYQfpbwMSJzZ7UVReL",
  "key9": "cWDS6gA1pr5BtxexBg2r521PYL5snjAqFApUCy4B7cdaAAiHecViKDKEZMziVng7CPAEY5PPmDHsb4C9aWHSE9x",
  "key10": "4z2GzT4BZdhCa1y76tVjhVvmdWcuGnCNJh2q5ptnEB2RApLhdMqN8uGXQUPy5Tf8aG5dUbUK3X8gBpAucR6Eiq5n",
  "key11": "25Cj22B9urnmws8K84Rt3gTSv9WBtpDgaKRzdGCJiFvWNp5r11y8Pbn9Y4RPSP4BL5CuKGy7ssPDRtXk4zdqsxZp",
  "key12": "3hVswoQ1QKhVMXhs5Ajnq9hbGMGv6PJbmJkajTQPaZzP6jQo9Hmu4psoux6PasQqiK1jtAP7VTot9JqHnL2tcbAS",
  "key13": "634b2HbkVagg856Uuvj6Ty5c1at7ghEbyPiQEbLUjEqfGViV8cMYbEv8BHvMdrq3d7kwN99byJTND3bRaSfg2bBW",
  "key14": "34DP5iY41NiEKL32vPTFf7RgDXrrrjoxVoPGvLmq7KGkxP1rwdSELfPKUc2QyXuYaHMxqGC8XKerZuqwBZgedEj9",
  "key15": "Gd4XdXB6372WhvJjaast16TLUyRKzeWYKqmCeYKCdirNVv8rDMhvqzGnUfMyXW6niX9fvmqbd6z7AEqRhUH4idz",
  "key16": "KwqtQ8CAgUdhqwQ493QENN4EmdviQHxido8bUEaWvmABuchwuTctDprSUqs3eD7xqhF5YjnydgVaUBH2bWdj231",
  "key17": "4qWVmaEtfcapGHbZkkSK2BLwe3yuPCs8bT7s5pi9f8SpZ4XtBsEhtGQtSFdQr3w5DXAgjg4YajXU89RmSV5MVdaP",
  "key18": "5ssLHYNX9qx7zZgsU84v9Qq4dqEKafpHwrFEGUxQJdVGYcVbdjaCJg6dmCrMBWeyBpxefhm86RuQjcSTFdXNS2tU",
  "key19": "2v6K4Jz4DtQytGRMaZAJKhLZWHEP3r2zdc2vrgxC6GYwc3Jp7Udj2BDL6N8LQF9SqFrsx8ZaTow5U8wH4UVMNbzu",
  "key20": "4Qwykxkyg29hwbCUf8jTwd3vBxeXuxHcc4moyLw66DkVsiT8UtsVfTsKUqs19JCTiZaAcGeeTjZ3GfY8n8M7EWb9",
  "key21": "3LGgiAqhVr4hQZJ8pGSifR2uYyBy73rVCBG9DS28j9gEoHKPmDVCUDCjxbMMvFuUPUQPebXtYkTjTkXxBRpEoJsC",
  "key22": "dFYrChJqhHumMXKkqcNGFYpbcsiudyoKQ3vQAZ3k7yaajEHXx7uA3Bc7boySV3KPTsgdGxhJfrj97G21SGTZLk2",
  "key23": "2skocMA7qsJu2T66138a2LJgiZMsnRidhtQkEM62LjtNr15cA9yf9QWb7ENWoqwY6EBotkmZHLVVpHADk16ekewg",
  "key24": "2Kis32wK56y2fAmH9AVRmbVxR11aM3JvtfwnrfWHUYT9kRfmHuRystJKPvbueWjNt4J9FFN24kZWvDso2EVNVwvn",
  "key25": "5CyApwiAPhFRmid87SVb2sQxjAGdEZNNwgB5wginUgVaYLmQYrzLPpxRVxVhXdCHFkTrLDKWhHJAu5numE5HhmSL",
  "key26": "4V8GNAqfDtgkF3ZUfoH5sTBX7FV9KFuiVmzA8kDQVHYK2yFwCGVxHGmJ5vZXYD8xaAiFPZnip4D3aFrUGSuUMAsm",
  "key27": "38hDkbmajndamaC8bgj3MexqMuVJwq6994Rp8n8vT8H6oa6YhYUer5x3v3KZwwu1T1LhSv2TEfzfCCaQLGbvXo7a",
  "key28": "2Nu2sMxpxGK6GGuiDq9cWCMvj6xieUWtRAQfe7vCtVP3JBjPVh4k6B1JCBo5cYt8137BiABbs1XmWdwgXs5Mvs9P",
  "key29": "59ExgEGRUFq5zmJ8wJ9rcPhfUEw7jF7w6FhywcFukmwZLT1JMJU7yBDHtN4MbnMdvqqFjew4HeMqtgW3oEGRRjfX",
  "key30": "2syYeoLRG43d29UPtrEbzEkb2hyGWFu5rMXQqRLeQnmgQVy6c2KVfbjsfPBu5QKBswuAJ1eMqViAyAGcsD1QJuwZ",
  "key31": "jhvnbZ8vccrLSnx5oraDCK6ahrGiqVXcTeR7ng9zt7VoJp6yobMpu7gMtXWVukxj4MdCwKLb3Mtv9KDehhUxrsw",
  "key32": "5GCtF7CSxLDgkERSg2b1BxKm7X8ACHUtHtJiP88kj8E8kj2zQ6maNGXFaVLWNNCdj2vHnqmhGoyJ7dqmmfDhxy9K",
  "key33": "3M39HCXRDTEdvRJRYLPwW47ku3NPRySVnsrjk6VJLeYQpaaxZ9Um1BHe3guMLuuArncPw7K1wLHvWKZW3BpRkgFF",
  "key34": "58idnWkvzMEtQeZATBGrn8AdK7S1z1vhC3r7gTmCgHfXYtLw3EZ4nEtqtEaZU2dTppKKJcVw6RHQ17644wwSusMD"
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
