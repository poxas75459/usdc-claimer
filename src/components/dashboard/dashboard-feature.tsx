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
    "51MskomewdwcDsDtikNQchDCJQuV3pqguwwKpPJKLdMiWfQJXVzxCLBdffijo3BnUmxm4JPZmq3suBiMn5YB4Q4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtZWdPG2PKfY9SHEx6szjjkYSoF1AyafAz9kSCXrfHDhkK6h8JTxUvRiJd4H2rhRcxpDhhy415LXYRX2aoRGwET",
  "key1": "wmVTcX7w2nfMVhUj3XBJPHXTm58k33HFjVNBfaTdBSBxSTtcnP9mcg6Dkm7q7CW8KH6C384heH4T2nXoSVSKzW1",
  "key2": "5emP27RyUnjkNGRXHVF2qpMPepVSgyawctrehLET21ELGij14NXhZsw2EcRHz7QihKYMi3pn6sjSFrqYj6fjQnS",
  "key3": "CwRCydQ6Bm7JfLKPJs1Snmw5yVFj6uFGr6CavbApTJ8w6bXrSr3ekJK8nBD2SvHWuWDjQN14Loz8uPLbSHv9Mif",
  "key4": "3A2WfM1rmDA8fmqpnz9zA3BeNy1fZJYUJExuLZgjwEE9kUx7QHKouoPf6QbjboGu2czbMiDufNTo21Pu9q1HBMgv",
  "key5": "35ZG9iBHX9Y4PUuiJ7ZzoyEe96r64THB7Q5M5i1yHaLe4RqwbEc5GYhRjHKihzW5e9mWRo9qVJgX7Rmi4vKkCEAc",
  "key6": "4QKVu1g8i6WGGksHGM6FXqxZhmSf8MXcmygZNhMTrP2px2v4ZkHkxbJXDm1gyxU1eW5MQHm3s6RaH29ZWDRR3iBw",
  "key7": "4uMeMCnPH4Xmou3eoMdjKGh9cmHxM5c8oi5VRsBPyBLeYYXGMXrLEDt9AkvcSQ9BJMC5T6wCK4u5vfqTNVthraEV",
  "key8": "48sZhzTsdzv1CHqtSE8SXfYPE1Co4CGbGJdhtHXtr9tSxX2v73bdPcrVNVGMaiDDd2nesGFDM62LesEH7vqiWAMY",
  "key9": "3bD4ZM9Emw2JjgG1uUmP4XBYML18htimQdz6Zw8JAzqNf9gyVxFbX81XmhnppkVTzau9Req6gyGJQ6waZT1ja6Dh",
  "key10": "6MgqSFJrs2NSrXqTeeKZdFe1AE6Cmg8jPPN5FnGvEqsb3aSiYHSi5sNptD2e6VFTpHEuAwSPaCGFjNKPs9JKz4o",
  "key11": "5a1rRdob36CJDYi5bwztVS7ZWDBGFHLCY85n494WnScx59CVnTptCiD2L5B5osbm73SVuV8CYVLfreAgswikHW7U",
  "key12": "4DrrrdvWZQcCJNe6UqmcGndsWphG9Nk8Zxvx7YeZduF3mFfP1dWErV1e15pT7e5a7oNsGS1ewa5biGqQwhkwG6Dm",
  "key13": "4kuwPwrinpBbMezbjyQzAkTYMx7wt8SwLWZPTpmxLfAqgUuSHaQraopDXB1LNXKzJW1L1pc1oFDJwptfWrbPVcvQ",
  "key14": "5QZcL2x4T7W7TZLXpyz8MFcnejYzHvahst1Z5bHdZY6W72AWqcjrk5u1qgRVJJ5rnCVKTTkNMJeNZzj1E9qXMSRz",
  "key15": "2U9KmW5hT6y5LpE7bU5L2MzTo34pCQ8E1WrprerSbENXGU4vq2BbYQHuoJTcCQyJCiHAcT4mWjNwnfVR6Z31yY2R",
  "key16": "W6YEQttYaPBuDPJ5Qc42ccTrDs5zcXdEgCjdXAu2397zJJGFkrzCWdnpwjZHLganTjXF9fv8EsnGHNWhcXsMTWC",
  "key17": "2yRZZB1Lv41HjfHhCepHt8tX9GtgVuDykYLFZKU2yAVzTCCswt92JYEo6R1JpzqbdzTdEFnZYzVkRy3L3BHYhCp9",
  "key18": "5aHH5ecHrWgi3RA3AUauYy9ziV7N7uhDa4a5tpxRHndvcgvAex2xuYVut36jpEsAJVK7HXh56TW2iEDjxSfHHu55",
  "key19": "JuT1v8GVarbrGBLoV84HJHo9x3KjfXognxA5pGwu15YuyxtUxbRFhxVWQqvsAow6s4xwJTtZscHso272uWtNjsy",
  "key20": "5Bdpd2r7pvThE856rFTjK1bvu2oj9FGEqa2MfkLZmPLvBhax9nWsBCoFQDg9rA4ayUeRE3dC9avAgzePJfpNE8bM",
  "key21": "yeNPaozPdUtRFDdE2zS2zeLphXzZYFgC8fE6c51Cdv44XdfQLmS57g3P1fVgkeExDhKra1achsWrvDES4pGiJEZ",
  "key22": "2xqNy4UktQTv9unkehunEnRQUkK8pLdds518yHDzxXxvCM2beoyUqRYdm1V75zang9pvsYPXogQ3a5x84CwPufUG",
  "key23": "3Ya173DdD4YiDEciCEPbCKUtBoTr7TEdvy5oQJLHAAzJm3zfpWDoaGFbbNXzpD6EmNnG1dDzL4xXV59mUB4yiEag",
  "key24": "4TN6GBj6apobQWx5cyfpD1q5v8moQvK1GbiTiwAKbVCGnjUqpz7bNMiaEeLYExbZbD3S69yz3jxUprSFXQTPCmC5",
  "key25": "3suJz7MLWQF3fMhqHQTwRFeZ1wMjwboCR2ePdQTqaG1MaEkGN7bg6Xurh2AM3gAibEU3sVrBtLZDazXEV5YiRxWU",
  "key26": "3SNnoKWcak7wvGSiA32Hf54Mzx9o6fGdJ1ATkxy6BqM1CA7xtLpcuNFjXnmZEymCjRmrpmF3FoW8JcRVMD4y6wCK",
  "key27": "5vUBCZirLEZoxoHo724DT9Nb4MFFH24MbrCmaW6nEWTAhZGZAaccn6ydc1sd4Z9UBnw9tzcwhyGZJDXa1w3ckowZ",
  "key28": "5uHr3EqYSHA6zNhMLQAhXXSExGSdXBeQveXeBUcpPKKb2Pgu8HfSHZbD8DP3XvpmqccRsVDiWAsQ4wN5m76LdgfH",
  "key29": "4yScdX7zSLtJCYr22utXZsYEhGjC7KXYjb4aajBtxz8joNnuFUq8zxonQksnXFTyY1xC3eMdaZvMfc1gzhPnTdNH",
  "key30": "2x1CP9ow7fZEk7NUzSpGJf4mMT4iMFfEjkJL43PsdXwoUZhMDfupd9yshwFCfhcKeRezxYB7HXUjC59Hr4RnDXwP",
  "key31": "3q12SGLZiwJ14AxuJJf4hp5RmjeWFbzcPmHxHN36QKQTXqmx6iJyTJFL8XimKHPCH4pYxtKeqYheu6zP834bawuY",
  "key32": "5HzApiJc2TC6Pde8DVrk2RxCDjprQ6QcSMJbHsPtdabkpHgr7n5FshtpXxzaeWLsaHthNmttKdURBTivNrCm4hMp",
  "key33": "2cYoVqbB5vvaXmx3NPwAi5oyk2xPaRxnZEW2bycfzCsdPbeUhoe78jQn1GicGc1BHnvTPavRxKXnrp9E7aBkKa7i",
  "key34": "5M1UVvEL41pGmFMqTbHv5HjoYHusCzK9htYUw2v4XWERabXn7ypxwYPwQxjnjAxTMtWpbLSYkUQAy9CyMiSohdzC",
  "key35": "4unQA9iRDWRr7PWHoEJNJo4kWXxzqf4EnCRJoKLV1RSWQaeE2eBAf33vFXTeE9rbcyiP89GUyN9hSVVh9mmfYKCF",
  "key36": "uQUxh4FHZtDQWUpP8xcEvN8j8ekAWLTiZU2wm9kvEfEjXYRYzPbXQKAJR4wAKYhBED5udjvkrMny8QFfvZMayTM",
  "key37": "5t9qzJjP7Qrhu7n2nTVo4CrdyoUws2435DnFqrwsYBHiA3S1MX9TBk8emBwVAfuBvChTE6BE6PcUYQvSxGL5iN1h",
  "key38": "59iQcJpEvN5DYV5fNj5PCZF99s7GfTVZbRqTzcTPw7XDjoS1MtDsxsQ4K2wkfgTBzh5zs1kPaX8ZqrKjm44CGDdC",
  "key39": "42WmPhziLMi1PL7zihVrAmN858wrZF52che4dCdu4qb7VSeJJHgcqR4kzbccagK4bATzkQiDxaYrJSbGYWm91wpB",
  "key40": "4meZ8SR2berZi586VPqyGGcwYvSbMuzLUhZXpsn9XaTppaFNAijEyCt7ixnimGwDCLEtXErLUrqiCmTjDVeT4PWX",
  "key41": "3tKn4usQNCwzdCJewe7WHut1D56vUVjfUv8PiKYNvmMVaJ5G68dX1HrUuLEHpkKCW6vyPThWDzmpJ7JR5RxKbgwn",
  "key42": "2HykBJH3XahP1Nj7ry3b51GWNAxUNUrWXB3qEyJaLMJTPZtGPxpMZMinv4kXDQP82CeaYnXHPTebDjE4TSozidVT",
  "key43": "3SrJmvGq63oefUajQtcf9Jwa5gk1VQX9eVZGpzNh3FKgbCgVkH2zptu38HM3d8jXs7KKPAf4zZ21zVQVYSQjKuyw",
  "key44": "4YZhJK5CdxPwccqYLdpi2nALkXJdi2N8Ag8Uqgcws2aUzdyi4ByY8Df4XroMQ9nuxRAMMHFsZZz2MPdJTfvKFD18",
  "key45": "PNbNru4ALofP7YTSfUztzXYVder9GQoV4VSS2S38CsMjvTY46NBGysRTAbww357AZQCDffuHzcV8ZdNUy6nVa2h",
  "key46": "3oJRX9H2PoiWo9o7FRwZJhWcAArZULg47QnJpAVMqgod9oBbg1AdMgByqTUmaV6FPNqMHgqYs1zeRg39Y9kTdhgP",
  "key47": "2ngf1PwW34JgA2eCamvE55f4hyHPo4gRn99Cfyrhc5XPckefqJDBCPdEYiJsxAiu8BtbCzitjHzHZcwjVDYhHBv"
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
