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
    "36Z87Vw5n8yjAYBHphbFrwt4XuXxnW2kjyG25bGoh9QXzSGs7uxDG7UGrD9qRiHWFqJQShgpGs6a7365nfbtRVBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PrE44PQsbUu9E6ZnUVYGaf461kWx5fwpDQKvRTnzokbgdjQHxNgt9w7Xu8krtoo8McoNEnvqApWikUK4miu2mt",
  "key1": "3wCXVK9V8Z7iA61P3EFkwdFY2Xong1qHPmw75j18LWi1jenqaP8AjGF5JTAGxkXyCMB5aFZ5y6meNVP8hZTVCHBv",
  "key2": "v4b6jQrUw7NufYSY66XuxYrzS94uUzxkNTi4MtKrNh3AjLetfDck8qfXz7Z2CnQpBYUYphCSmQjVCLD54zohexM",
  "key3": "2JhWSthSKXpqSFRju4UPL9W5V8ZtFXtTuyeCkoLU9xZrSLvaiWxGbF3foQes5wx9nf3V2pcZtT66y4MtvFdhqpBm",
  "key4": "5dMtuzfBoszRoSKTDrfyT4yGBHYCg9CQeXGGgS2VgnhwX2MpuEwPaxCN6spsyWB6AVsGiU87XJaQajYb28jg3VHv",
  "key5": "3rxaoxhX88kKPadKKFM1ovL6BLGxJdmsjqB5y1jLji5pG63B6z1ZEyKnpk67cQexYRQ1ziEUJPFoQhZ6M7BDPr2M",
  "key6": "UfyAjRWeiiPYZ2phX4zzzpcwuxRSoWDjnRL6nrVypAJmBHy55Hfy2zQhVmbQiuqYAbMgYVCRNPVM1gep2qAuWzv",
  "key7": "4XVMzmNhw265CnogdPUrUVbJEe5K1sE5o3LqazGToN11k6CMwf4k4oU9gcL97swkwHwM8tWBRzpKDWV2grDTFmfF",
  "key8": "5KYt6tTc4iZRnwqVk6JW1nzVzZwT9Gi4egL2F6YJF62NFbGAFzwuCt4ka5NB62bG2kh26f84qmTw6jp8uZo2upwe",
  "key9": "8JkN271NJk51xh57wAKyytJJt4QvUbK6Lktf5849d3uBbvpVJcmwMAqyDmVBfLTGSBCZTALehinkhwMxJJuGPnq",
  "key10": "43wV7g3yZY585VHYN3dUMDcEuSt6FsSEhq3HaeNshx3HN8orLVRanF4h2AV1nDVwhGqRfHkMJgHVv6eHW81dC15t",
  "key11": "6ZBrwzSidxvXgmvLfo8ntvd8VgQ641Q9G95NqUZhprtn4NeBxhhjAEwL1kADJ2uSiE2euGgjGHzNNV6Ht3A9NV9",
  "key12": "5sjU7TVMJBKJSAXMDocEvRNvaZLEAKg2pMbErSsqpzHij8hVoZDWkdyHjkzw4tdzC3G2YGHZyKt5iNuQwz2LHxSG",
  "key13": "5r24QMrb2Gh3Z5PzWfS6Xotjy66tbdR2jXU1GsbCbe1NCuFMZhXqH9JW5jVkYy2444bCZ12xFUxwkJn8xJZpwsfj",
  "key14": "4c5tzeEummuHw5xokTW32B4YQgpMVjuzvvDvUiy8wvqQD2unZmKevxijUQp5KdEnqi72fsryvugfhk8kptULH6MA",
  "key15": "4N62zys4WgVWswxjyjDVa8fyEzanKJyvnvLK5Af5mLsJqUEDiudTFqaWdQcDvbERDg2G5g4gqMrAUevtSfnQ9rK4",
  "key16": "4m9Lf9KvpM6TH9cX9BJ5nyvZtmjwzdt1nzSYK7vadGtm8hFF6XigKhJPPYAxT76hY3yT8PKY51p94xgoPsybt6Lg",
  "key17": "3TA8gbfyN4Ms8YYyNc89kYrMUk7SZv3qtQYXSMpFWjD34BZAHFYSsuFRcbBSbPJtqFbUARS6vJFvSDtLmGuCmhLV",
  "key18": "5LeJiecxbeJntj66JXvu6kTTyBdotG6EPZiPEsuPrYWUpEyGQHQwzgk9emn1EuxG9DRpPhpNayKCLpZ9qCd6cYus",
  "key19": "5ELRkc5ZR6z7qrYuxs1ZY1r2bZHnKr7M9brgxvGSRkMx5Y2jfLJsMWsMw11tpKVhTSWxgLH4Z1dCUMvYbgvLbj9r",
  "key20": "oStJzJp2AoeA1Lyx9tdEjNtfKtP3gXRLKyGqzphmqrh5D3pefas3PjAMRP9Mgkq5Q9khFqQvfyMjgttS1A1PMAr",
  "key21": "3NqakSfsET5ucMHeY32nUGdZ3s8ZYi2auDkqTc9trc1RZxQL1Sk8DDhA1QKBwfGZ9g9GdeLXHcLXpLWPcHGKSw7Y",
  "key22": "4Fymzz8yPHFozSBKXwT6GANuZ41QoZdoPJzVBGPGT8CTbWCDzNTzQzqLLjyfsPvr9wGmwH5FSg1XwjHDyoTsMoqX",
  "key23": "4ihNRQtFswy163ciXyoANGGDD9pHwzkeDTQfeReLNi6mNcvQAgjaRnhED5QPyr37TKDBYEw9D255FNzTo2b2po2S",
  "key24": "4Lan68Znrf2jGWQAJr9Xf178un5mZDCYcBBgVtdFeTqFHucaaCyNvCm5RqFNxT2mfogSK7Xm5GXapQcKA28DbkN8",
  "key25": "5JtbToTv4CJ8vhTk7ebmCPppRorQw3YcxE3e6pWrGEUKwpFc4kWApnHhrsa9PaySqrCkkG822yRR5QTzz7CR6EJz",
  "key26": "3PkothWSLbLSx5joMJDp6U2WZsgMaGqX4V2X2HEXWBexKokcihGuAnTBjxthCuVs9choqGdpw3VaLJ1odwmn2mxw",
  "key27": "cKofwTrmwa1QUqh3yZVRKABngKmazydQx2nd6rD8bYb4YnvVT9Z2461ZKx9FXJhYXERB8vVjpP4g24SPjFsPZpn",
  "key28": "4u9kmPvbVbTMejQGfUsTWopKTCfzGimyPYQY3wZUv4sQZZ8YzX7CYFWVhviTsGWWWX2FqH3aWNTHsCKS1uBMMitZ",
  "key29": "4Vq1LUvmoGUE2XNrg1oAFo2MpjRM5o8MUcVdd6bhgU5uwy9xqESFJ4a5dbPA1h98c3HjFL6Gq5MtC2CvWUDto9JQ",
  "key30": "2Rur4MBPf4iszi2fM5NnsiST6ngsXZ8AASTP1HPim469AXJmKu8V5oqnmS8huEAj8PcAgJ786gmpxQPrTZsGLBUw",
  "key31": "5b26FJQevW3aBvbX5ZQv18zMdxAwDE4F6mL1e8srDJ52u5ekRSt33wFgpUtGWpind4JgqHt17dmkZDzN1QMi8iNw",
  "key32": "2bfJNQGnG51L3TDyQhMxaCUV9L7C4woLBqNx1UV9ydW4V8TrhNp6HQ7DhMw5k2a4CyywkG9Z6XQtxcuvUcB3CbrY",
  "key33": "2QcvbSJE4SiSviPArSWu1o5nd3Av9WHuVCB5TmEHkY745ALKibpyRF6vFi5Ki1LnCPriwrSCvaMaFh5q8ErvJLy9",
  "key34": "2sLTCtbhDrDPpwQBRMYd72aoPmQzUiKok2HHgRM1bXRq9qCX4QyQB5kXeU7hvV6z8FKZuzoDykkqKZ5s2sKXtKgS",
  "key35": "28LT4vTLazjFQW9vLMLCE6Hdz3Y9SgtrxCPoj73dCSgCgqrXUXFXQowTmAkvaC1zaBZ1K2TLvNYpXkWSjkJULewp",
  "key36": "5rx4MpsiiNfWKtsnctbuMbLcctt8ibWpk3UvarUTYHN1cRa6bUdxe7zGb4G7AW8Jb1AYz8useA7JCQjxp8d9inZw",
  "key37": "R4EaF265zcGXAaCqqrLwJ4sWqdGHRueSNB6xAGa8dWk8pVn5MajyJVH5zEsyvg6Y7kY7g5dnECrU8Y8eSqpMnzi",
  "key38": "4J5DNf3PMuXYvxS127mgJ5w5CYytBtcAw18uqyx6oNA7VKEThFreBdbQmzksjVuXPpJhmTER23hyRW2hxuJyFWYY",
  "key39": "5D7ckxm3qxtqVmBJet8pMiMSvXxqYcqKet95pSaDB8Vmk9ogTXVhNMBzbhERmkZ1x6oDgWbb6qhQM5s6K74GzzPY",
  "key40": "VE236UYmrXrmmd5Cs4LNnR9DizLgMZtmtSxrqCCZroWQKFogeh5iDDYnNc2k94wrpEaGahsyWDc49WyZDJZZzYK",
  "key41": "3KUpaANb8L5H8kQb7gnJkfnhxXvVkz2sittdtCB14Zof1JRTxH4NNhboaHhowUNLJv39b3iYj4whHaouTUvocqYK",
  "key42": "52RVVmfgqLYUMFmKSoHZcQSMR2ZomjChNisp3iGNjvKhVLKihLxaKPJemeE5RNhztkHDvKKN24Q3D7Hxg3jZDAzt",
  "key43": "636Viz4n7RSWL8QzAYa3NsuJ2iWo6WJngwa3NW1rhMYcJZWp7ZMBp4EkuEi1pzUFHCfYT5HBXui7PG4sVJrE42xw",
  "key44": "4WeXoJuoDNeEgnrMgUDX46o3mr6n1MAAhZtC4n9EypsYkW2vyC8PFfRGGhx2pjFVnDv4F6HaSMexWa7qpEwUVMCP",
  "key45": "5Dn6eR4k3u2n1Ctk3KbevNZHNZmbN8ThxqpywJfGpsGdf2BsVd1wj4A81VsS6UAFrA362vm6dLTfNXRwtBBveNGd",
  "key46": "5an7eUMaB7gtRpjzFcM8K5MpsqbUB2P9nd29Gzvsr65b2kYWQ4ohKpiwWWx4fj9MFpLg8Ww8NsdPY7cdWxzzN2qm"
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
