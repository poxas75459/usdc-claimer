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
    "5J87k2nWhom3x2mKxS92g9YASZVLAE8MDDSUsGARAEeY7QqjcvJTWNM9PhbpUeSLehgVYhPjGGrH4j4wuL2Uo91p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktUSv3N5o2iy4VXa7mKtpXytXZJU2mrpJ4f4AEUoHBA6g5kxLyDZk8YVyZmHP3WwrDnGUREwE1cshHHDiwphZMm",
  "key1": "34GgM6aPshtL9dCMx7foAY3MubEESzLBmVmPijF5jXKrpMJ1fy4r9zkpUE2eAwymqjr6PLmMsnfPzuczgRyZcr8Q",
  "key2": "jbGhrFTFK9bEaEArt8C668P51VLamsgAK9CAE2pvzVP2joo9maGcduujbRBMduQmdPtsEhmFS5a32ib2kM5YniU",
  "key3": "3Z94EQck9dn4bJZLuyKyXY37Npz8Za95nkCCMLMzZjgDn3fPuugRVtjDZzoV1cT3EAYA77dgN7uDBWXUShVTVvff",
  "key4": "2Au1ULM7jyYxphox9PGfMPXxqohcubwR1E5uY8TKrrezJjyXu9pbXWvPKKaPF1jfP1LoePcuvbfkzsyJAtnk452x",
  "key5": "xtni7uTph48XZCzTMpk3dxMKZ1XQcqZK2Mty1ZaqNfaTnC5N8vq2ShD3EQWEHuSTPqQHZUFYjjLEkGJGbymaekz",
  "key6": "5dqo1kLsQZKEQ3Sj9HVxVM3rzgc8V41UQSX4GcsTLzomtFgwXDiFbQsehAQLeJZEddRKpnQ1VHfPpdLMkYPQSm8v",
  "key7": "3XSVLceaDkmZzKmS2m6HQ7zjTHKKoMBPLPDqqXsiAt71rBhZxMR5mSWpNGMZVrSXbjimYrBYM1pujouyBuysQ5Js",
  "key8": "5ZXMUzMTV3DRwTTNkm3ZzQbPY7N6LeqV3wR8ruhCdAn6k1Bq7mHxzyEDxnQKQDXgt6qr5nhZcySrzfQGSQcNRQXK",
  "key9": "2ZSZZupsPp1XCKR7BKV1sYHDcxV8XrbqjGBojrRL52gSVfgEHtqGWUtJoaQy9vKD5oTSpapHsTakduwN3RNokozA",
  "key10": "4Lm6dNmj7oH4va4oYezXsDzkLryPnbPJgsZtQ9sqdNBQfJgej4qrj2P3QD5GssQisDqD9aexWtXtyEGEfQSpQEXg",
  "key11": "dvv5LBUfq6Az5oU3S6vruiUBh6WuM9BZGw3nHXQCh8uNy9mY1v159QnMopK973jnHkTpFW9bHtpj4dFigwrsiKU",
  "key12": "55wnUZ7E1tvwfjApMSKc646XVpxq7uTCysm1tfwzmuAFmUgpiVQppDqeXJPJ2r1EmwKCXvJjrkwU8RTr7QhNwG2",
  "key13": "5sLFENsSSDDXZBWZs3Ttxj8xCEMvQJ25QxsZMjgTR5XStPDpdtjiwA6ZZV1QfAYRCTHdnYkJTm2QKshJgy71dg98",
  "key14": "5x8r2a4bfxzVjBbgwrPw2MyRvXhPbvmtkkwCg8Tp9c1g4teEJTUHmhjhYC6icSuFL1uTNUu13Mar4NBGf64ihW6z",
  "key15": "22M6CYPHmPyFvMdEc5z8kuqGagwz83vcRrj2ArqFW66UdXTzUti8J6Ynv6DRkNA6fkh1Hq7nq7qZ1AeMGLKAyg77",
  "key16": "26rM1Nc3WxhQC8KEeRqLtxgMjVVacMCw3jd539XiHPC4CWEMmPwMG5Yatbih9uE1mMAVH3QigtBMTojrB4xTS3dV",
  "key17": "4EvPMGDpdBoKf3W8mhqa4Fva5YFXJGgBLNf8hHqUkjCG375QJffgQfAXbMZ26Xp8nEgq2aEr1y9i5MegEAuqmDZ4",
  "key18": "5Gucctgi8SSyjrsJFY21hvynGci3dbHCmQm3GdjCtaHL11iGbMgBb5MyESADqUL2xdXmgS9YTRGBUYKCYZveH1vA",
  "key19": "rR1uNXLp8p1z23zyg4jtLPbLCF7yZf2ZBPS8aqu2Hma595X9LsKnh62uJVnVt1XsBNJn9pehLDSUxyCEf1akbpX",
  "key20": "4bmEJKaJpJMbXtwg8oVvYzE4dvLEXprCGqKvL2gehgBYAUqRqciQqvyw3QTFQ65L2PSZomBRJjhbw7mxL3PqQcC2",
  "key21": "4rJwojuC8sVyWL6Q3TGH1zPPEJqRyqHgExRaRvveBvt1gceTv2Jrk2iYrypzY99EbR5KvPPo6Xa19VQLBbcvK4nG",
  "key22": "66AuWeEY85oo5utT9Y5zBejvN7dbagzKrgwLaCrnfPuSRT2CqMmcQeBp82wscE8bG5mg7ZbvvfVPA2s3CmfeaBqN",
  "key23": "3BpENdRMisqSobrvE3BbC4v7DBHgE1cQmPdjzDt1CtENDNHf1E4Musz2eSLvEo6ua1k22g7QJwRKi6XQF9sSa4oc",
  "key24": "YmjnQqJo4mRGLbtsmhWe5uYf5HoVBNjr9WeuA15HBn8hKahA4VqoxQZz9iD3gVz4p91dWWxV4AFcpYH8vxrHkcW",
  "key25": "2nF2qtDNGh1Q8PrTs461kBvxzwcQD9R5gvCSDFf8rYR8ZzG8ZUz3VT17BLzJqwCMMw2hQZcBhRotZBTWgiKu5voo",
  "key26": "3BfTKSt2nt9byyxK9LryFWfSuhsJsVWnCaL36p5BobTmhsQW2WMwg7HXpjJsUySn4yS5orwognTzCPPh8bhdZxUS",
  "key27": "K7dwR1tBDDskHRirqEMxcanhTkZjExPLsCQ2J8W1ByC7HuvTSPx3HxQqsHJ1HsFc8gDeRhq5S8NuN2aUr8X24xs",
  "key28": "4EoEMeCzUSwnxqbM29QoLRen1ogHWrkzhdsBMnfZCCgdkLsCYYmrHKAGRTx9rjKNJGHuSMRHiHB5ppepzQTRimhD",
  "key29": "374mt9ezjsXNpvTPrRv1T7mK5Vybfx1A42ij3718f9zkrmokAV2Dj5CkxvUha8oc3rdUZqWDmkFCBFQE3gQAX1qi",
  "key30": "3uh78MtcnSJci59tDWonpzVxd2BUy8YswGsDssWE2zmDH6FPgBFAxejcFCteSKD4GappwK2QxN2anPRy4mgHhHrb",
  "key31": "vnKmZaiTUXwn4jFearM261qcuUFTuimRuLzDCfq3rNgWsUF56MbZKywz7MhJwPqcsjn79rSvVWxXAMrFGoyG1CW",
  "key32": "5JLAAi7vLuEfLmdU2QafkMQgTKAs7se6Ces7DnE2XyoyDYJF4mHQdoucgpKtuxkJ6yZb12ZEmVD5pU8w44BFv1cV",
  "key33": "25ZX5tqxpJTdKp6a6ZdarGaVjE72xLqwbzM2cMhScaEFarNaHCjjvH7Xstvnr8JUHQDARk1gGoqSz6NyxqGTBbCK",
  "key34": "3z7chKwNjeDyni88T8kDFN8v8BMTt9qqGngbdTT7NKq34RGLx5YhyYRr2qc7kXvKMAxLrNACKf7yTQoP9HoVAQnb",
  "key35": "3dQ65oAvvqmy41ZtGdS17Rg1wWkCX3da3NHG5vv3TcY5E8KXVS3BoV3if76PFc22KqowzgUsF3XX8AoUoNWLNTjd",
  "key36": "NLu8a7sRWqpjpGkbyaiyfu59h1ok2ziaoEV6ogW5BRUWx4QLXpRU5Jc2ZEZL7mGgsF8bPSQVp3A9ncBat9D3vLQ",
  "key37": "41oqUR7mNJEFJCGegnZfyFZh3cgg8JVEoW7PprKKFGLNk9SA8csCH5XQKmtuj3XHUNzNcDpyZo9AdeSmsvD324Vk",
  "key38": "4tQrTijvwGWwvTPeGqqfh486EM7xJaW5Cyfod86vRLeVQG1sUrvg2oCwFsdyXpBin72e9BCKD4JX1HWmLjHkFbyC",
  "key39": "35yxWXADi4SuuG7uGTaJfXXLvGfP1PvLeti6A5RkhgouwvH474hXkx1S6R1VrGv3Dbz3hhC8pq4fei3P4B3cfiwP",
  "key40": "2GyyvvLNx9rYUgwAe5k9sDbpYbsYJvhCJ9VZBrZYUhdVoFbXCab3zRAHWdhA2bna32JYAFYHoxob1CzWWMZJK856",
  "key41": "57wpKSaX3vGRVFrn9QW3rCSGrKMuuwSZ1BJ1X3GW37t6qrFu3f3zWpKKmq9EUjKpcNkigqHmuD1nd15hwXrWjxR6"
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
