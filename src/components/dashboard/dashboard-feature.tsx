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
    "4kLyX8m5Bt8PB3unZKEfLaAHkZgfFCmHAfMLCDJ4MgWaenTU2Kz1C26KLXGqFnnuGciTnYRKpgMXGj4nsTpAWx4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBaq92yu87RErUdr1nAJboWXVKyebtPXuG6CX41RXxg468NuUm4NkHob2im33izYN8cwRSE4mTsf76uSt8LPK7Y",
  "key1": "YHzcL2iFtDPFcYNcqCFtmcvyotZ4iJHnBnRL5jKUHr3Cu5GurVWy4TuPt7ZMSDwstXVxxdaHaxJSgCRaB3dP7Xd",
  "key2": "5gjFJDGoxVgUkhctGoEDwxxdkRGcK8MagfKVGYaeVqF7Y2bw5uW8a9EuKvodBqMmR2qzsV6scBC4BCKypagw1nLo",
  "key3": "Mmss5cEEg8iRRe45KLwfK2FJ2QzcBMJRyFdtL5nK5ZMfEi4kNMNF8jzU5Bvqm4P6bVyet2hDLHgcWUV9WJVv4o6",
  "key4": "3i2ZPjTAuqGfwMX39dfmG25kYARNdBuJnRRktRp8ncCTR9LSSaSe35J4tRQNPYjw78JNH2vwctwoYhSbBzRRkYrN",
  "key5": "4kdDcBi5g3kVRitzTrWthhieaq3PSkYzDX3bKHJDHutb5DB9QH2BkdoQMHawCLi6rz9zd59hKbtnRgji6tTggujw",
  "key6": "4r6GcdVfNvQnKLFt5p3e6uHUydYUnEABng91zxm2xWnMLLJbbwjdGru4n9LL2d6x3tVukzvA8euc7rvH7Dwv927D",
  "key7": "5RLTTgATkzA9Sd4L3VNnVGH5CUcqnABgdXNRcas5KUUPV1SbYp4Gqza1t4684gMTssBvSLDDXfYY52iUix7KUjUu",
  "key8": "RtAynh3yj6dp6y7uDoQZoqttJhdW1PdZEbJbdRkBbU5eDMeC7wpYz5v96N1SqkkJKnKKb6LptVo6aypPax4eRa7",
  "key9": "4FLXBRzZrzDHM3yvSfdmHnaMUkPZToYwT56bc91o275qhX7LTKgwpevXqTK3SiMkcmgtRUKGJxKEHQuqfzsvUQ1o",
  "key10": "8tymhzELKFhH2YMa7bLQqte1G8ToqqKWR2Fz5gRib2EdpvcuAJKQVqo5UbxhjgscTekLChHoakPQRfso63AUJBz",
  "key11": "n1q59xcjUdsu31hyGocerWbCLXhQE76oJR7MN9LkPgmL8xCUQL4Yre9rM9YqqQZ4s3iMgT1VYZemhXaeBcmEMUF",
  "key12": "oZbenFVk8zaSa38VnJh54ac3KGioyWpXJEtPuSS3nLNvn3VugAc9r242UExzBrx7cbLv1o912vuoT2MBofaGTTp",
  "key13": "suPmQGcDtKEAddtEaDc96ASahPSd2JvfuiNzxU6NzjWcvkvuuwfDryYrWcFvCJ8jCtrbnwbxBhg4Et2oAVcR6mg",
  "key14": "4SaGYKZs9GcGN3ANxXYpHfvsWtqY4DHjpTfJLm9GT7FmtYGUg9iNatdRdVuDuya8cHerRe3u24XuPUwom3brZtCG",
  "key15": "5ApBAgUtmzCqVpe95QBkXrNoKhoyBfHN3M37KHfxFXmYikc7qBJKrJNhJJd3dmX2VgzmJ1Ape23uQp2x8myyk8Nj",
  "key16": "2ksYYfbJ3cdnZxJSpi8xBaa8inv7dwpzP3fXLG35BVop3Kied1hVXzhqvRnga8sMWGX2zL8opR661eL5SoiqoMFy",
  "key17": "5CkN94HxbXfPcTAcWhpp2TLcgRFMrG3WQN29Sgm7D7taqVJ5H8Dukyu1rHfFAr2RMTkM3mYNnJzzNvK7m9vSEaLj",
  "key18": "3rgLFXeWBf6DCu5QMrsH2yZ7S4zYnoJ6e1WEHCdLWrNrJrkR1ceFWRHVCeSXPDZMUbnKZB23tQPLtTtU9cU33T6i",
  "key19": "373fvA9eYvcy8uNWZoYYsXCvdEghaEZ8JuEKbs7A8nfEejGdf1nZVG9piDQeQryfxWjBhV1Z7qT8JdWv5Bez6RrB",
  "key20": "54Df53pkvw72LfVMqkBuh1cLszrxT9jxf4kes7AEsnDmf1Feiuf8sWZFEoXfogooVvVwcYb8JqTfwdJ3QD2Goihy",
  "key21": "28nBNVDCGACCFAV8gqnjfJyA3GC3vEh7Lxkmi6rmiqaeWwrgFWviu9mTo4gfjnNHqr7abQHs7XgP2D3BbD941Dn9",
  "key22": "4esmzG9WZRt4sseQxc7wBKiJqUmJ8qZWRZ19qiHzViVZhYEttXtrt2btrxy3hpETbwvg8ho2h8vpKWqps91NU6tW",
  "key23": "2nFMNQjKRvJZx9u34esSRXAaKtkzWcTs5c8a6PvWb765xTanhk8yR2asdSyphayi2VaWuQ8TMrb6HWyuSD2SXg6F",
  "key24": "3hL3jaaShx5mhdjYaYap5ftJRWaKoutHg9wqpaUYgqn7tF5Vdoaj9xTTDPWA8YLSNz8xkDozsPaEKejjrFD7PPm6",
  "key25": "383fuSArrM6ypGmrxahJJ5BEzhrvKdWeJaPV575Gu1XivzBetW5mUcPFf91WbPBHFNNMqVWvDEoqBFuxSFrmaUkP",
  "key26": "3HmxWbMPnG9WkQ7TYRgaaEEhF6B4FWsZayqUapCM7jWJasShKZmyhuxiqJwzDYCjGTPaGaExpj8QPSxYvwP7G2HC",
  "key27": "KyzpTEg8zhRBRskK6fMyVgYpz1NvPyRFCHnrJo1f3XxGzXdrSaaAmxCUBt8ZFj1mt47Mw66nBathKzK5oGrwNFa",
  "key28": "5YVWTA2QNa4EsGS9VTsSP2FyEgnPXj1daKiMQU1QWc35QqWBmASeGCBdNuiNRMwSxgFD7jbJaqbf6fHkXcnSmzs6",
  "key29": "NN6ocbzqEE4ueXEWDisamjMYfbHGpSAGMKWNNsXzsD94SQ9hViX4w3sUghA7Qd73DNeXTenhABqPniCwCidqxoM",
  "key30": "5GyJEPeNGe9smiFY6mv76bbSgCRSh6G8EW36BXMPqcgGtUZceC2NMFEK67rq5RNZJzte1G7mnnAT7V2Hwwv4bchj",
  "key31": "5raPGgbynDgkLiZJqwY753Cy5ELqGjDCeRZUGs1UGj8RsXRmHPxXSGrkUC8h41gGiMPx8VAHKhXvnNUS1Njhksqh",
  "key32": "58gAmyeJqVUyho8Boe3Diwmy5H9x8qqDit3VQGcuMim5QVL5UTnptjUFhL8PpnkT4cvFAzd3FpYSBjCFz7FzgLBf",
  "key33": "4bD4TyikahojdNZQfpYfjELRem4YA2Xj3LWCgxCdJXj51N5Uh5wzbWEokfSTNHVUSBbX4CJci8DKtZFaere5DNFY",
  "key34": "4CmyntXNL51BRQt3NpzQTbbyo4c5bMW4fuJmAHMwNHXGjfjUC5E9nUDLnd4Gf6xHcgGNg1pU6eaKkqphKcHCmz48",
  "key35": "4D2VP9hyXL4pCEib7YqeiPLYgTwKT4p8GZTYWM3v83jCUP5ZegsoBUp1baS7rvVY5Hr3YdhKMd1eDc939D8pX1A9",
  "key36": "WKqdDgi9KLp4hnLu46Yys3jsYiq1pYysUgJJU3eVUssQU4wSbZigSDgcDFZrxYehkr52JxhH1fdFCL4tyCrVGdT",
  "key37": "vVNAXs4Nsm65hPtcAAkRm4K4JoerW2x5jwKrk7FmgDRCxVzjF2ZUYh7HJ1oPBHjV5juJz96kLX3SXb8JKCkiPr8",
  "key38": "3fWacSsxEK7NjMqkoQB4gNjoki6sEQ6QXzNK92iZ77p8Fp9SCMDG2NWoPhiKHrLKJZz3ybqsfH8DWhKAS8GRRzHa",
  "key39": "5TU6PomnbMfChj45gMAwp9aqYPN3e4EdxLJWyoX1aEQJ4uJxSDAGGUg6r19iPkshpWXkSwjDAeuBZE7wN7tMqgnU",
  "key40": "XNUc9RTHq7QYDpGC1KsemVCo5cZzfsKgmWxJc3pRNByPHsUcrghve2mWYodEg1kp34qLUNiHvTLwzsnZVimM4sU",
  "key41": "5BmVK3KMRejZmpoB3wu3AWMatUaKcgm7qZaiU7EHVpFU6jz4pcHr89sBsxfx1b4Nz4jF4URwhtXdeVhP88CGVKS7",
  "key42": "5zYNgABjUXkdRdnDVHjaeAA9nmrttCTEvJQkh3jjktzLbPqtSWWyzhdch4153EVucjg6euoLsjwgso77mL5rTPRZ",
  "key43": "4cqaMYALhqA68XsvL78kzc9tdN8Cpp2w2enmh9LivcKrqbsjmESmNu86X5R3NwLz24Pk63EoZqi9JzxCcR8UpjZE"
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
