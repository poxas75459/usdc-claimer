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
    "3uyGpTawGBysepPGWWDbM7knCio1ZE7z1FmMXcNb3a9pf1BUa3gNh5VCxPf3vRHRguxhJ75EGxJ6LxMD9KTxQsQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFtWcXgcUpUuVvEJbg9HA5UYompgK3D3EErtfCwa1mGrwMAiwdJH55yg3bjr3ioCxe8HVG8H1sswQFEpLbQ74ZS",
  "key1": "34JcTnnkjPmRQv5Tnypj9zcZ1cFbjLE3qKeDG1uMMkxDQEuwjhYNKPa2N28UCjxW5Ub8te9CXA3fMHUoPPYLjKA1",
  "key2": "5AvUuc8LRMtMv3Q7gDDzFon5ifWWfCGQzpDQxqTJNAxxA74ikmR1LqKHcq2cYuECysbLvRe2xiKofJehxoRhMSqT",
  "key3": "2paW7LUwjhLxqFdGqfpBEz7vdikHJrFMthM56NhD9fsZvz9Lfj9B1cZzXYViMfrYJuFyb92zREwscZhqbeb6RzNH",
  "key4": "amhW5FGp2psgGbs2PVwbv2r2nSW75bbB1qC3fJ2fTofVwfV3MnzeifSjiU4GBxYX5E5ZvD36A4uYtjm8yNv2Y3x",
  "key5": "4KcmmnGgoLQ74ooUt9grpLGNjb4uMnRa4SmYibMsV9T5SQ6zamcdWewWy3i4UTbJ5E8VV1Z3n56aQzMgGvFXk59z",
  "key6": "vUYF6MohuxPTKbFfWdt5sK114Z7MtKgEKsd538BTBaFMRoo6oqqNHiecd1v4YnTnJjB47eFLLQfPcx1A74oi5jN",
  "key7": "46WWLSXoRgJpN1AkNjRvrAoXiEA4xmjMpwV2WEm7fz6HnGww6qia2VxdFRLk43EcJG6MhY9ndpC2ZBshMgzX9cYb",
  "key8": "3z5YLErhq22YrWJfE3pniG7HDJZSmxJZmBck8HzXPd8kNvFKn6bZJf9BixtfbWD7d9fNZPhHKAr71XBoHaZkAPvk",
  "key9": "2UR73sRX9oN2kN4VEFosHbcpZKvKVQ3sXD36gE6PidZei57AiFf9gLfpF9ZdWeRadC9rStPEyqYvBNjM8MJ29Xcc",
  "key10": "2WQ66xoYF63ncvzgBJQ4zrtmnfBfz3xUpwqMtXf4fUbqymCq1w6Zf4EB47jyMQSpGd4dtrL1ANPLG8bAQ4JiZRFC",
  "key11": "5xSXfRkYGL6dbTt3EBFKbTHfM78g3r2j5XpATYyLsXySHZ2ZyCrFG6WUnAFv2MiX8CxLd9kN1AQw7pM6QnmPkLfr",
  "key12": "uyQvZkUU8m96J6P8rqJrawQi8sDzq7CZjEA67xZzkJRSfGPoMYV9Qyk7FPk3jEhqCWNJSEwXKT2PS1a5R7UPDmF",
  "key13": "4LY8t6vHUgdnjMxRuwhwvnrivkpTGTt43fifCGnN9V7Hth9EntXuYvVWU8nBwcgMRZW3LZCFPZm1Jpu5BZ7WXTMs",
  "key14": "5DJfT1WbxDV1Yiiwz7vSyHxpgdKdGdPd4GPU2jHp87ud9hDHzh5TByGyVhXKGw23nw5Za9WssMprSEv54eJrAib3",
  "key15": "2Ao4fXiKHLGvvCDVminfUHzeyn46hP4troKQKe77ByCBD4d6jD6nXUWAsZcC6BiuPFz9qbpxzTT4Bc96cnXQTo24",
  "key16": "4hnJiEFYnJQZDxKPWHDM3QSxuvowsuB3Ys5VXLTDK29SbnYrj6mU6ABpnZTZ8kED8Einn3KZPgVNByG76AMLyjRH",
  "key17": "4Sa6EUBXub7EFYS5PAsAxgWGNYcWwNS53bPn3sF9nPGMmrP5uzMt3jW7ZhXrPbeo7bKnXdTg5Pc1f4MuqcTHn5vu",
  "key18": "oQigG9i1N1WWQNH8vGaw5dsCUPc7T6UnY2eKfEqzn1EJ8S49a2AUgc3TFXfnYuxFMKpRyxm26mEEoAXyH1ZRKLZ",
  "key19": "nUZDeM18ynkHncoGw7h6zfTLf63UEHj6mNDuvCN7Kg7CK6vV7kgCcyXTfQEhPMVTJ15No5ZaYH9rW8XSXUwiYZZ",
  "key20": "4wZVDoPfX8L4yvUeeWtNLnN34bf1ZVExhgtwHy9y9VyftuHWHs6R7ePHtaDttj2R4pmHUQnkcZpLssmRsDQpMob2",
  "key21": "aauw6FwuJFksoRmqxyNPGQXdf4YXaGhWfZHy9iQ5NN3k8kgipB3baB1eRwTaHfgbQrGqJwzBZrXk3kbRa7yquU8",
  "key22": "t81dgWDmwj1oLb9ZFjTR9Rq2yteXMHMUEYadDV3b6V1FrMdKyy9fpFW2TWJkCNcPcXu9YDTpRLQ7BMst84gGW8g",
  "key23": "3KFJ25BkiKheaxnyopYwFUo6xtcCivQiDXD9UoCGdAAcreXKCioDReEas8ymAgKwVdKpMZtsGRfePXE57zDaunPh",
  "key24": "5qvUoLbsvdgvzkA93vWdio62Vh2VgjB88MJJ8keSETuC863gyCRoyf1RLgLKQnn9VYyfeYsQyA9Ujpq4Cmbk6UEb",
  "key25": "en1omJTzGDCiyGk5uGPTkd9cNT7LAhKWYaWByT5ZUugMeWZuHDW3oMaR9gboiciJ3oeCPUttQxyeLJoKeCQhQ65",
  "key26": "6mzvZjVy2DoCp8rj89A5RQp3XNH4itvTmaxobQioYxTTg6Guy5Jk3KfqztAVabjugnsmwNpb1tLukh1bx6nh8ZG",
  "key27": "4ZQmnrHFPxkiNDXHjr2Ur7skm7u1HfrJEJnNr7qbU2m2cD1u58EBCzf96kXDtBxJZRJpQ31zKSQFdcrin1CoWiLJ",
  "key28": "5W3xCdnvBzM3EajVpieVtJmSNpM1DQ1EGPFaa9JeQ6995XkBKFdZkjjAzN37T5oM2hkVcDD6XcknBTUJfjXSvbsJ",
  "key29": "5gZrz8D9TVYBFaW5YtUt3HKLRnQ7jr6XqB73SgoMDFwNx3gCmFZy1aWuG3D56QnhVifQGVnmewgr81Rcpqo7i3zc",
  "key30": "2B6K1qjdEdAwJBDjkUakusLs6WbgDunRCZ8JmCzGaTnSDfsy1r5uoGWqFexA8QUmvntJRfn7gQgPEncNYeCVCWSj",
  "key31": "Zyb7DKWGv4p1T4f23oy5K5NySo156Fr2pG1EixY5ANqPgkshzvq8LZ8wxf9qF1QGQR3wCCDudkQwogihcvwXzct",
  "key32": "3Si3eo73PobCBK1jqEdxcEYYxsE4TS1oeuxvDXPpSbyJyYExdco15UdTzkSTDgGZEGFVv3Y2FNaMbU9yP1kHk2h",
  "key33": "4FHSq8rxpjSVVurXRhmoudjazGPKEASajLStfndMFupjFNQqqvGTt3anPJqs4KsyYirTbsAmiLchbH17sc6txKyB",
  "key34": "29Up8SkiRLpy8QBfVejnkRXczKFeNS5n9SVJosBffftG1BHr5U4VarYMxyw9c5S8wae3CGJ15Uwa7348P2rBkHh7",
  "key35": "4yv7Yn5q37MQP24jyt4tRwRtqcyCS7qs7Ljfkf5gzg5LX8KAwFG5RbAPtqHgZ76tYbir3yMRMB4pJpyZ1T7GoMW1",
  "key36": "nZCXxjDFUMtTMvV2aHET7PPBA3xmHkzPJx4xcCg32CBS7MYvnZXrDC4YKEayqUQYhJekSMDCrGSGPkqtadjpzzm",
  "key37": "3PYjoQcGn8pdeTw1ZzvyqF12js7k7P6RQ9QQUmTDxUGkBUDuUheYpboyvCkj3eWPzRsad8x6J5qLkrQ1gLKSAznz",
  "key38": "2VDZyKr1XH9EFJhiX3JrQTPsNVhhYMcpFfie5cnoV7UZWkhmfNWD2d79j7ZfpfQRNq3wEqmVuxh6f61bM2Q47fwb",
  "key39": "DscJWDPKKBqJpfw21c1jDzC2WUCHVKsvgYozgbCxtZGe2wsEuZbNBBcvDKjAzSFXgg228wqKtpRaaJ1mseCpae8",
  "key40": "2MLxTQq8j5aP2ZBezGye8ZckuoiqsA72gvWWA4RQbanBpJxgVpMqjZdF5Am8NmyDxL1oLDj9MuGN9dVjBG7RzmqZ",
  "key41": "22AuNgwRCSTz8KsP7CMp9UjEn9RmBti6mEbdnanhf8QEGTt3Z955yAyuBsDBaD1g7JJ2XqkctvtUt1AyC2vjsL89",
  "key42": "4n93zrNzmr5ursARXcc5jjYYo1eSdCuK4SUiNf8zGZzRRtDNYE5MpfEHnAj8cMKupuipVq2Er6w6izuoftb5Bqy9",
  "key43": "66b5BU9P625DVn4xURN8fUq4zxhDDM3UaxRXgYKSsAg7wkNJrNutdQQSekxdxzJyN1fwJA9eTHHPHNF3LF5ujMaA",
  "key44": "36mR7imRq6mQfkeo7JAkWhnRqpEbdLo3qmNASL94ZqwYTmMukCYBaJHu7kqBqT27ZjNTQPoh6F9K2ygBwPEh1BA1",
  "key45": "4tcFra6zKQWdKVLywKJMGzZXHs3e3FwAp5QzQ7MrN65Dzov2Xn2p5AhfkTVxyHnVsBkWTmhEdFRMc9EZL9ahYC4Y",
  "key46": "3xtqmTW9qNyLPruf923NG29jVrwGsq78mZGikkqh7WzKVoXVzR33B9BS4LYGvpkV4atzkRiGyTLnqDih9EZxUKo3",
  "key47": "e3rEvyUUWZUwsGFyi1VBdh4o51LhbT3rWcegkV48Fb5tMMFpNdfGPgHVtiFbzfSK1yFiKtbCib4oWHC2uStonNC",
  "key48": "5s8n65nCx5awEf5EgEcA53ocbPJ9hnX5McTRdsP1fV6Ji4C6nYv3HsXvXuQhw8zHtJuvMQniy1aEhv4sm8rd5zXf"
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
