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
    "3V8qazBBJjUsrFweP6ak7FGL3jkJPkVqZ2ux7p3cRoyzVw9Dn9LVinHsjyhvLcDs9eLZARvSKZauFBJzxCqJNk14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLE64NejfR36LhMkD9SbKoUZdE158fV1zUXcwXUauRb5EMwm8yLn354vYdGoUVA9T18H3pmasUPhrEf51Rqjs7k",
  "key1": "4HCp9ozAR1j4ZZqKY1do95dV5Y3oJw3u6Rhsu3aDWnHS3e5ayng5Fc8wcHmGmPVjK15dwLanEuVDcwFn32Ko2FTg",
  "key2": "2UTgqFdKa82UKXxbs7UYuvbNvsacypHayXP6gtNKTjGbd91G7ResUBZNK5fgB1ZqWtANKLzDSMcnhZ5SmeVhrudc",
  "key3": "3CUPUy1ZGnQ9B1dRisdpTzwgBjSH3A5gm4CmoPdKTwVwpp2Z5heMmtF53DXCQkF76iGWsMgbiAWxSM5Jq9AU7wPw",
  "key4": "Yk7v4Rfud5HRYpTDCe8fo8LNHU59fRWrPB18HLpuXWExU9a6CJh2W9raogoT6AKoFrYjZjGBBXysjHKxKiekkB1",
  "key5": "YtcxFtDteNz8Mht7TZfR9tGRBJRZAY92V1MT5emfR6UYAERaPxoz1siWLCW2RV79diEpCPe8196R2NHkQLYgyvs",
  "key6": "35kfkE5dQ57BioNs3MAV9MSE8xRyPAGzghGD5hhWZAq2X5qVYQo43YKhp1yAjrznhV4ccuEGR564yXJK1UErVb4D",
  "key7": "bFF7mgMg1bPQNaaRLTViXz6VkdQncdSoRue85xCFjyAUEdXkz6dRUTctJmpTGeQ85E1tQJubykpMfeSFh4dZXeZ",
  "key8": "8fqvLnBhok8acxxcPG3gGARP73GsXqqpTEqncuZ1e6T4ZS67RjBbdjzTnPjA2CBUGmk9DzUEeRdXq7gLHQTs3FJ",
  "key9": "XJBnr5GMEW4tAHDErKTmQ8KqfrqBWQvjfoVkLirmu7SsKRnWNANAq28RG46RSXTVBTgpjire4tTi4shzjPbHQXW",
  "key10": "3NtfS8LpRiAXxeRkfdwmcnW2nWMqqZuB2qajefJkAqxhWctQKQUytnRL8xmHzBYivfaVk3iTLbYUxzTt6HT9qFmz",
  "key11": "5rqCU3WQV9QQg3FKWo9ckSeAPTCX1u75hss87WYvyBGYyhq1u678ip4ShCNy96LC5huyBcBW9tfCTJDXJG1hP8Zb",
  "key12": "HZnG6KqZeFePiwGx2dY7h1CX2EMi7TtKsTPVeEwBYUUJbm5pRfFiam9nSFpNSY7Bmwc19VrMZLnyXp9UBbt7cp1",
  "key13": "4UqXYEdpPJ9ApfDj1ai3v1nBjzpLGcqjuxP8yDK6kDmCxs5kHLReQ3FWJhfkarWyxKwbAbSUPzMpjGzWHHGQob4r",
  "key14": "4aiCbqxxpcxvwMD6QDybTyU1KdFYis7hPm2ww4HimP7nLvADn664n8jkS1BxrzicAGA2d93EDy35iqq6mHM2gk2z",
  "key15": "58NSTxs3JREaSgNdgCPZvQ8k6p1cusmSR4tuxW4B8eaKFqWTG8dcNzrfUFyWPCNQTuoU3YXiebNCgSVbzg9gmN9L",
  "key16": "4GtTYr2MMywVS6k2oxFrXT1JKKRxqYhiCERRTh7N3zNfZEjYfir4UzeapAm6p7GSPKCPQHCixvKa7SUGW7EDzBji",
  "key17": "5S5DRpSL21Q9NvSu3zg81CENmRQ9wVNfpkhENr7bAAYpoj8q2JC6kAbL9ep1Ak9Qe4yuuHHLVWQ4cTpfaN3SekQg",
  "key18": "1LVT5X1JwDZCRUdZdd5wq1W1x2AuCUfY3f7ez4vxDHqTzWHmtvnrryvEcv7ARUdXboE2vtE4fxucgdETRaZ5kNC",
  "key19": "4e6HC6Buidg8LtwgQojapfKdEqXpyoQQDptNExWuLYTU5245pmkq4S7eCeWYfUyVpBRb4dJZSwGBphVpq5DkyHEh",
  "key20": "5LWT7P8GLPh94qextzmd3aCusqkPSGev6i5hmoy9A38y2CELo4fk6nMLwMbmG26Cwy7hwyWXHAHk3kRwj63D7Jxy",
  "key21": "5tgn3ZmVULPKqWFJkux5Z6bQRj76oVBSt9KL7jibHwrgr1MAhEE71fTbLdsazEtY4nFwRGrqCK65XS1LUH52wVxU",
  "key22": "fCZRTTbeQ6No5Fhb1LtiSxvumbQkd8sP3z5qREXWKaHiZPzsYeNy9ahG89YvT3oN5kFQofuTwjxXwc3fagLy4Ld",
  "key23": "3T3ksXJtKkWi8Cftsz8BQC8iH5SU5fjYxdpP5aWowHbSuErzdgBncd1CQVVFgByiRDcQ9Ud8eY8dSCQJwGuUT9fB",
  "key24": "5C2ErYGtebkUv45janDNx5J19Wm5qPztJCVDcuHvXtCHmt5ceZprTx2DNbQVcDkMnLabWT5agKxYkNAXcZdGUJUR",
  "key25": "4TFthyjCgzq4QAhSqVjEzxpj2cEypuQfYgm7ssGX8ph1SD2QDzM2BmGWTqSMYs9zxJbkk1B2SkQydF63NkvcgfuQ",
  "key26": "5axVgPS7M16XZvhCNLmfKaWxJ4bGgvUDXhEKKTDQQEsLNsXyJoKcHaGnC9u6FWucKFJSsKU9xQrE51kqsXRhCjGe",
  "key27": "5GwnmLWMX9ztQ7MWSbvV7AWk9cfvcoTPfGiGKs8juurJkwRkh46JvaLum7AEtUVxnXEi7Fw3XNRPuuSZPzuUhoV2",
  "key28": "43fa23EgRW3ZHzoWKeEndR1LZJihPydS8toL4um2XdhCLcu1FrJ9iv1HSa3ZgLHRvcgWb5tCy1ydQmoaRxk9TbRc"
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
