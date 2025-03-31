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
    "3EiGXq6PWnxyP4z2TCG48XrA38AYxSd3xuNBgdd17Hw1iiw898ot5MZdgym11RGBtfDeUUAcgZCTTpvCRmH2q413"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEuKjguWEfuVSGnyfH3RHrkG3wXmyqxBXsMJtj6yjWdNFHKkQZq3AjU2M5A3538qfB5UbHfkKX8ivnXNjsMyFLk",
  "key1": "5KHsKv7q3qZoR8ZBhLDn67KLAb8jT1MoeppY9XHPS4W2WrDU3toDJw2mocgSVkRMT3GLkbVJqctxYJ5b8E9prVZo",
  "key2": "4uRjA5zEo4KFzCepbqohWe4pXpZjXnSZE3in3HY7ruTw7UrtDVSvV3M4qnwgQXxmRgCHoitwyyET7bSQ7KG2EBsS",
  "key3": "aupBS6xVzQSxrMqyBuZRyLTDoXAu7wPJZkGW3VPdizRjKCCY6GFsrcRzCvqLysyfXohfJGqgAKRY6GorMapXSAa",
  "key4": "25BSr2b69jNsfthJJXGtuHkuza2XhbkpDQA1SXqD4BNF6NQpw3ihXhJtbwpWz2cgjxHkxwUA8SbLBwekMbmdZJJf",
  "key5": "4B2atyaKhNN11qvxvypGsXq2FbFHwUusywUStdgphaWMnogTEgiXb7jtvUTrP1mrrq9pdx5K9u3sJ6AiyiGCZquM",
  "key6": "3df52TWGgL47z4cvUYuMrPnDA2kzx15id5GUjZPp1j4GcCBUcbNWQNw7ASpa3aqEaHnP6AiDyYB6mayuRxTdVH6B",
  "key7": "3G1KjWJb6QwPF4ez2FGm4Uw43PTnts673rMSPzucFyvaWTQyknxuVhuNtVrsHR3hw3rmskAQrJ11ko4hnY5RT6Dc",
  "key8": "5ZXgXgSnXNST5hqDcEoFaBWNSbfbn97VbbNQQug4ti2mfnpm5TWKH6inQbsRLx6TBT9tgyeNqFnSqWMHnTt9dMh2",
  "key9": "4D7eKhuVHAxD9UmGzMKbWDjxqMvG8kozHW7DauxTQw7BgLUznxGRWeWwP9ozxpbgpdKPd3oqm9uZfFoDWtw8Sb8S",
  "key10": "5nSg1Cqyph45TC9zBFqmusUiLhDpFEN5Xs8e7og5UYQyxYtRAiHRi3B5LMLgwSk5x3Q9F72sHF19PUQCxjUd6Rpq",
  "key11": "3TxxA6DF9qKD8G2pk8csFFQ4Md1mZ3VqWtzk987GGZtbm5HbB2vjmFDUrBEmJujGCuBiLfcJeMQpHpm2DGC35Xzb",
  "key12": "4DFCtnKaqyjWrBz6EhyVd4zkL1udDBPqtSioh6ukKCR6SwLiQZ8tjvKuiQjvdSwpL4pVazBfnVt3U94Gih5QwHif",
  "key13": "61wswLTgjGrH6jf4a3FN2qQcB2CVondE93PXt3mmenjrh981AK5mmVigcEejTnSzYep3D5dy81WHNYsdfVqrByQ2",
  "key14": "3etDYPBcpa4BKJRr1PVNdcq5NW89scuKSB5Q4W63qH2fHDpjGJuebzm1guFLditBtbGFhRSefcnGU2xzTbAvpBX3",
  "key15": "5RFhMwAZbDA38XxMiZBPwXmkW9pK72gbHyVWGpCD5ffd9aqKyfnucq2FG5MsQpdtKEmFekeyXqwkYKGhW4tt9kuv",
  "key16": "56h4NkK6hhC8Ay98gSoQfhpFZbA2LSavTFPJY7zzW6uLoeWwXY7u9tBLe2vj25gfPLKGqmMsv248zgumdpqrjXjs",
  "key17": "VyPgAFpJKDhBMLm1K7miPKeZEXMzZtnwFX4EnajuWJQTKrUj1hH5ir5Dktc9MDBh8tVbRApLUQFHwYuTMjGqwR1",
  "key18": "3bbSesev1UKgB2hoguQuyrnExp9kW1my39JzV6mzsjHZ4kypSHiwZDMD7CX2UvZ4ZYjQQuc34RCkwdqEs1X1Zxf6",
  "key19": "2fboh19TQwkaVvnjNk1g9mMZKHMS51e2JEsccxDu1F9DLbuvQoZM1he4RT6jZWSNZFj98WVJW6N3nKtEvnhqKn2L",
  "key20": "5t1FWHgtmsUfgHT2jtCEts6RqAyZpzw4DtAgebhkVkLg5gn2ctbP8gjzAFXzAvrBdF1vYGnGXBxzynDQpZKTkf8W",
  "key21": "5akFmrdo4VPJfxhnE1sVcnx6pP97CqPGhS11bZ64MDX7K1D6qQUeLdBWoRn5kwJBJrGijM9GifMBukPxfM2VY2XK",
  "key22": "22TUNXqw6uL8dQWcYiSz5NPRY2KdAqTnXrE49U1SVBeZqb1yVj88BkQKgJ8TLcgH5A1JYXCcRoUNTwd2U3kRVBVB",
  "key23": "5voPMaRour8i1PUYJ5oqGzi9w1tGjBEReat5HHUfEymiNaD1cdx7DennrhQhaBM3EE5QEUjGiTWer56SWK5cuawN",
  "key24": "4vY8AeRSrgjvjerN7E22FyBGhd37LwMC2CBqWh5hrt3PAh644g7wL5Kehmt8Udd3dyBpWVNLkE5RRfEakgqT7nQ3",
  "key25": "p11iX6WXHF81vn7G93VCstHJmzo2JYrSp9qHyTBJr1hAf5ussS2dAdDGS8KdT9By82ouG7XdjAZZgSrsnNTWAeJ",
  "key26": "sumgdRYDqniwBEQ8Cd1xYWQamEzEGjh6tPUDnd4w6SLUwrSV9uhV3a1yKe3iKAJkAieAbgt2eQ9ZpDwf7t7RnM7",
  "key27": "4vfFUWvm3vVnt26yDep9yzbvwVbGi8xm7jbs3LbRkSMSMbaFTD9C5jLdnRWYzmEBqrzt2kH4LucPrkEKT2cQscZf",
  "key28": "X9X8VMJaASRnyxA2uw2os8uATkXmft1vd1W3hMWXUFUvbNMWwyQf8J1cS3YwhapP2sJRXZ858Cd3DTkmfyEYxck",
  "key29": "5LHsM45XKhPYP7Qir8bx4oEYJFs1vJVwT4FfDfAbKpFx1Mhr2BtnMSKSG4yqLGdVYq4YFwmw7yFcCpJjX3GnY6gZ",
  "key30": "2k2SVKDhKRa4hfynKXVi8ojXRkYCpW3ka9xK8Tt16rAqR6ppmoMpJFa9AHLTyy95AhCeTpJ4S31LEjzTJD9XeMUN",
  "key31": "2mYu6Q5fq1ftVELhU9fdHUG2S3X78BtPZg1jvEhEJzmgYc8ksrHr15yj7ihrMcUXQuYZTVJu7cA214DjwzZYBvct",
  "key32": "3rNv86JwLehioRi3ASQZyoRjNKL3A8XbxUybU1XsKWRc91shesK2jn1eweDfxpLL8Ayw2SLLMiRa8BZcw75d646h",
  "key33": "5YNaURTGHyUJRBuKeTYrTE6BW4maBxhm6BqfjEFiDxCTVKyDx7gWwjmJDC53dLBXHxMfWZaJEFbvsir7SXxbT46Q",
  "key34": "6BfPF4XdKcZXs8jE5DSXFBpaiu3XBBjU6RNZwaptxExE7cnKDmdZEAZ6H9xii6T7Ez73kv6voM1Catjd6jhATRn",
  "key35": "4bG4z9MCrXRwa76SpWLokQQqAeVaJTZh9EYUCUqCx8g4A1cpbZcT28Jghy7CagkqZpFmYpsRnxgC1m2nWZMKFyuH",
  "key36": "57V5PXo8jLptg7x7Unrx3ubSX9PBZqzyFMDYdky1UJ6kFKCozbe9VAmxk8rry44m2iXo6wy63kwAdZH7qpsDbTXo",
  "key37": "cud4xCsqCj6aAgapKAnEVN27K6wCF88JWEJVKokvZF4UzPZ8wdHZnLC6q17m27vefbFmNk4nfSWka78QQmc6Sx1",
  "key38": "3z1HEe9DxRzQYXk2UnkzotNJPeU2dQiD3Sw4q1miA5Q4uS9eS91gvzmz3SqcUk9MbtP8wmnGcNbVPe5ttBd9N3eU",
  "key39": "3Dzqn7DgPre6c6XezQaDaeygfv6HUkP5CiebiJapbaxUZdZj9vhFk2zfdExBKwZzf3qXLnyz4bEj8DiGTniBzpiD",
  "key40": "3f55EaMnRi8Nqau61ULYivgiccJusW3pqba29WeEDgSdWCUPgZLVZYPRixyZA5sH8bdkVh9QjKLMXfsEzz4TwfZQ",
  "key41": "nRjq7ePLg9wBseRa1em6sFFkADrrfffbgtBnvaEHsN1c6etxFHj1Sjvb151G78kjEBZnkzUK9vvYo8S5dbb8p35",
  "key42": "5u17ArtG9HBz3MHGkGVneTTAMpqQ869RT4UDEc88FE4iCmDcnQjJLJXVcKUeKqwk4j5bdHnAULQmjJ6eC5DEeKLS",
  "key43": "5aN6YNsdZHmDfkycNLbThjAiXiL7qN6Vp5MkwvcqcSdcobe9u3eY3XLghxohQPoLnZzFzGquQD1y5tsns5LSBReN",
  "key44": "H8CoxXAuye8bnUKHtzK2HPy1RSbGipYiq8aDJYYTL9T2mGXXs8P1qJTZeBXkJzgz1uixaGtdRuwb19eriw4QEJs",
  "key45": "2TYrotuh5mTVtESyMb3sKFitFuZYqeV6oNiiAJSqtbpL7bu66Mo8NM5rSZ29agT5VgkgTnqU2C7Bh49T9hvUzibk"
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
