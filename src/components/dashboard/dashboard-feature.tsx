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
    "2E9nxxsERVbxvdR5qcvJiufAaHgxxJQNyPLEvPJ7Mv4TzH7D8Wqf3y6r295qmhVi5f4Ye94ztkmkiX1GCUUgkBX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pg5ZZAAMhnew71889UaKZ93t3fUQaRSuTdC6yUi3q8eeWCWNdY5aihvb89WVN45B9DWw8yszcw5YaCo7RDXTZYf",
  "key1": "4Uxz4Fs1i7Ubm6YZb1xbVLZXu3PfqQXzfoBRcHb37urL99VnYDuRtDbLrhgzPouDXGyhBzDu6ZTPTq8HNUGJfXry",
  "key2": "4NXd18QZZhvveDm3NvyvKVaQoEJv3QE1dmov7KDYnbH8Yci5G6YV8XeM4xCNSb3q74zrECSL7qiYvCND5XMtYRP1",
  "key3": "5Xgmfc78sSaNTW2DqragvUfZpUm12CJjzEh1b1cdkqjq7WfEaa1Gx9umDF2ReN8xPB18va7Jn541WLomhFWkbzCD",
  "key4": "2UxrSdMe9GzwBXkE1DUHK7ZUawS8KBn83hGDdERPFg6EErm1FPw6izheeLKZ6UmAXHoCeB3AykzP5LUYrp2zrrZC",
  "key5": "4wfrW5fxe7eS9oLFvtuhkHfkPa8gMyHt1eTgFhrNscqHBqbCBRPB1ZayWTt5F1aspn2nQWggxvnK987ryJhAry2F",
  "key6": "4UqzNATWUBVFSDzeYjk1NwqTX88S5qB3zj7qnBAkQ82YTAjoL5wossWxJckPppggFbSqeHoWmzrbyJErWSw7VMhf",
  "key7": "4B2SvpQhadswJodAL2iz2qhwokEaqM2G4aXknMr87QhCAEogQvBNC9G3hrWeiRBRaQ8MGYt5jiUugPE2y195b1XR",
  "key8": "5BuRcZZ2nAALRhkq5m4XUmoCdNKYsQwQfCNfUku6vHjLrzZJHWA6yexH4LsFoNpq2ga4TABx8dfVXm898hGE2MuC",
  "key9": "5yss4zFNxsg3Q6Wv1VVqQAahztpVrLWDMpwecV2spovLcApbrq3yhL41XQzcLmwuF6Y6G2aematnHiJyMJc8ZDD1",
  "key10": "VNLUEC9GKPwv4cFLVZG3ofhPNUwQXcyjKSoUSTwwi9LrwFZ2X56AmVyLekPHecG3YQXuPPibiSWWd4wWpBrtRVt",
  "key11": "286jxFCgBSUJa7t9n8jm8o5Mw8SH6Wm9kk6pnHs8PgFdhgs78RBg2WBJFe9HpDfRU1K3bcWYf2UDJh1HKLVv2TwS",
  "key12": "2VjGtkGaUWRB6tfHadpLZ9rAdVsACgPsbGNBwZVXnW3vJ8K6cM6xFmHGjQyKgk9awRSb7jqmaknrVU6pQdytEsJw",
  "key13": "eGC2acvhdErAEcFKo2MUVv1W6cNxQ35x5r7UNUyvFC6q7iN2UXYZabbDx2u64zNtCH5f1QCF2DGTuWiVzdmeKXJ",
  "key14": "wJdWinSQpx9zi1ZRqDVCEtwjzo8BunG89opmP36BLkeRMLw5fwb2V7G1U1jzXoYwg7d9b3FoXsB665UqFdQVTng",
  "key15": "3hCAEBpYeA7Cb2gtKhWEcYwqnxq9T6rUT3JPBzw1z8w7gvdEcCf1DaxrawN8hvj6XkKZaFrVogZquPGDpEYnXne3",
  "key16": "5tEvoqdA2BFPdTYvXtkJVn9mNYUuPUo9DHiTHvLBXNErwmZFGcZ81goNkdNnEKQQ25JWswcFsptfMi7YPm3gUvWZ",
  "key17": "4ARnqJeXBnKv6A6AtFz7sMSaDGSGojkqfHezXcsZjcrGdHT7EGmdqFQzvGLEVEayEVLEDbBWiHiZcAJzQkRxn1Zf",
  "key18": "3owxGvFyNQosdsxvdSybMSComBqo4b5m5E6ZXjypvLHwTAW5oewZ7mF67gjaYi3oBjQceeuugVhGjpgMjBy5EJfT",
  "key19": "2jbBS4ojSnhjgZjYeem3zZikry33AKL5Z99JHbkxSANivcy31L5WxunV8PsBEn4vzrcHzjKreG6tuLxtaKHKjTZz",
  "key20": "5sg9fCd4XHCbZ7Mjzrm5c43cqonyZyV1c3r1Ep5TDvZeDruPMYqNx3s7a7gzHWuV3QYcYD8mGVJnEsYrJ482Ze48",
  "key21": "5ZDkvUP5X3YfoBF91gDkSKySWBMjMBbYxe3fR3x7btybgDtNcuKtRABdoqVfjQV2SssTkFvMetKZv8UqdTRztW85",
  "key22": "fwjy64Xt8m5DAWd2vqW9QU3nXM4NZM5k2AowFPgHSNd1YLJYGm1cMbHe2RH7wGy15Z9rvTzdAwVqtnTrG1keK98",
  "key23": "iMALDKppaWJamSZgDSJXH2xxtP8Gd1jBw7Uhon7RJS7FiseLQWgXpwPR9s8RMGeH6jyDPjHknK7YsRmSv26oDGp",
  "key24": "2iY5DqsTgwRgDJZ95LCru8sy8o9AfRbfJag7jTfuKyvy9ML36n7wqMDxPv7cT9w34JV1kGC9FiTLHYdUH7gbyyrd",
  "key25": "4gWbAZd1psfDBKHq4tDmqg6tx6mMNbTkooiu2h6YHFmptWbwYR7zgp6rGttNsG8dotXhVNZHoUnWM3CML7MnV8At",
  "key26": "4qW1Dbm79T6ZqhBg6Jjju85MYNeEB7ZCpd64EGxewaH8nkQoES8M2YA9mpHubyzsqf2sSPctfVbfsfrQ2hR3Ap7U",
  "key27": "5Mb9JSoLcWwSqXEmKyRzs7MVRxy5nZvZ4eCd2X9463Qwyqp3nhW79fk9iwmzDzkr3wuaf9PYi4kfk8WA775HEPtu",
  "key28": "6Ay98hj8L6Tqb4YQn3BrcE7am4iJ5GcGBaAahLybauyMmS5FU8VM9DhjAFXrhx1E5T1Jk8J3UK21d357mbs11vw",
  "key29": "gUVwRkbRktKb2fikG2TVVNjLZ27JL8WviPqxxz3ejL88iVwPFiC1Rj34ohnHX6Ta6xZEuFujpiRTYXN1xBznfxL",
  "key30": "fs4ZP2kCmX1jigUoUSzB3hYwyTi4wW7MSDrARwZB7ADgjEPRwpdd5d8yAADUnxqzfUPDLEBTfNSpev6B97etmZr",
  "key31": "2417RYFZoznjiXVsP4B3jGz3tHy9v5WwH1hqycL6iTaXNFHPeksYwG7Q3wKXoknXDaum6EBrEoAwXZdFbxb1jtqc",
  "key32": "5SHouSUakcRDu3cTeAEMyFsWK3964eQRGmzuxnbB4HHET5nWLqu7knferkMvrRzhDB4uEhKujBPcrUtBMvFLyyLB",
  "key33": "2TgmihRQKLrAWqfmYcTYfS1iMUMKaK2dVKQurtm1tY6ejHeihJotKmZyUYwZUSDNnTuAMxHWr6oQvB2nBxuBX7sx",
  "key34": "TqMbYv7i79hDeFpbSMwrKaMPWioQDdztk7xRnmkimmq7Yd19bLUscdqUfPDGyy7DNWGMkBYVKStnSahw3cBnZ2P",
  "key35": "GonBGvi8zdZYY1wiM7YXr5bhGiJjBqqBbigSWiiy9cTifmHLUcvTzujFaxMiRdDKvvRprYp4ScGAPJPAV9HqMC3",
  "key36": "h8gLiVZM4oT1SKPq99r2PpEUUgxJuc8K72JwtUc5VepTgP5PGWDceffSkX5R9YfGx4x4dGA86jrYZGW48RYu4vH",
  "key37": "65jSWgcsTmJavWwWQhxZ5bX22iPiN5LEKGG8KkzLEaecmbb6FEw1YatupEoFrUeq15Gv4PL3c69Ei8AHd3b9ZAuB",
  "key38": "57cYTXUpJhXwumq6PZfe2SZZcHgk2iysSh92XcTH8fzt61X9bJ3UUWZ541kM3APeewuQDMTgftuy1rref8GHQUtC"
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
