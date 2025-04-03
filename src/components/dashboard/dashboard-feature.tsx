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
    "4x47xs3ysGrfMSwy5cSDXKNLvpYyRdbr6VwNBkEUjuN993oj2ux4Tiqpeh2cyvgea4c1M3u5dec5nj7rKBeD1TF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrwWiV1ktVig9LxdQJYCrLoVQ4NR1KN6CJeQCM7VQUbMQcVjZ9dLh1wbe1RaYFaFD9bXuKRLhAgSYY1fY9DQney",
  "key1": "RvYpduA1ZsdtcnWMSSFx42zqxfp7SXTnncn7jPKBZpytaztECNhiRWZcQwZaUHFKE3ysbX6W8zXzq7fuuGvb5Rk",
  "key2": "mBGxiyEnYvqTK8c2fdEnm2jM7BzRUH28VEMASphduuoxYWnujFbPVK49jtPs2NN38BsoZHdeuKpJWat8AsqBETv",
  "key3": "55M6hQECjJTo48t5TcAqSU2SDeniqRHQzZ6MoFsQxaMfSSBQJ58SRUioMuYnE8K2cEN7Pb74czk1yMZx2pLAqJ6y",
  "key4": "55oCeNgPeDcJAd5i8cB1aNyAgauPMYfmc1Hman1dRGStK7rEUgyvrpzMn8RVnVhZhnSteNFVjesV686RJ2h5LatC",
  "key5": "5KwL7CecR3Kk9KpWi1QAmaNLuhQCdFm1ANEGE6t94Xq3Vzeqwa71tZonCBRKvHEjHexT1ydnz8gM38zLz6VSt4H",
  "key6": "5GYSEQFE2wXnm3sBX4CRJNLs4YiYzen2jiGK5FWQcd5AGkgtFjCSUnrvpJrBnrv2abtNL5rRtvveJZjCqP3E2RBV",
  "key7": "4xbaD28jFVe355B4GWJi7GXKPdDWymKDhqLXuA1AtDZ7S7ya8vgU6JHA6Qf8iFdrptZmC1cmtsoTjbgTNApqGEYS",
  "key8": "6mnVpyihnSqSe8yt9WzSqLkUKgLdPhcLkZgwjm4gbEpYcUcxM6MKdGDnhKs6rWmobBtbPzEgD8v5DrmsCXrEzSx",
  "key9": "22fjxvBJuk2jt2fyfcM18QbXUJXsUnLrN8uDEKHFeJVpSt4zFw7rXXbtU1JpmxMetX4Z1ro9iBWPfKxRUs3sfNGi",
  "key10": "3XdmSc32oEzwSSgeyRgfzix7G9xk5p1eZ1W9NTFtQTwaKDxaj9pyonX6DjzsK7wGC313S4pinPToGSDQSAGZRLSQ",
  "key11": "5QGt2kcxUs68GQwfpQ6XnMNswmd5xF974rXsUnkh3SrRFtP9f3CaSeBk7C5U6QrjgJWAginCq6RZr41WeUKipjcV",
  "key12": "4xbRXyVKLJLWzBd2FtgGfcFKQ8wNxtWib94VNXX3Kr8ViFXmYyGrYj5CM2YYCgPEZEZLJPQBUWJ4BxD4UTvgJ7gy",
  "key13": "2J8LpYhVHS9H5kvy1QKhQjC2zjF27389w7oiFXF8DJfeZiUuMRtQE6tzGuHm1qjGS6gDHeASQDmXqqJ2w7KSbMgG",
  "key14": "3gA5xdq5ypimHMYNCkMVrjzTFRkBLxjMAd4TN55V3uXsUN6EuJru27iLVLsJnvTBYk7ND1LyuQ112S4LDKMC9DqA",
  "key15": "N4RhoQjmEsuGdGUFCrZjHX3SyoAaohV7X9HZb5biGKEiLNpnsiKoAdQ5iUztgjZQ4uQ4nbaDDi83Lyy8rVYycxz",
  "key16": "oycGr4azgTvQEo8rGT9Z3NhoPyii2yQ7db4GCz9WEQgpbbERv2JiWPLgbuGpzEaRCzfjCzxHVvG694duBN8vdrS",
  "key17": "vEqsRvGtajDAsMLaW7xeDUk3VRKSjpSfS5r1eoNxy7K5m17Kk8SC3xv5qDLRDWQykPasJzVdD7Q7PTr1R5XoUwB",
  "key18": "GqFmPDMbUySW3ZkfaBwu1WR9KZU3sismVaHEtG2PNm8f9d79KwWVhYBKU3Nyawfyxt8KKeJg5WxcZojbGnuYEWC",
  "key19": "2NeiQtgytmV4tTWmmPgGgriSveYUQ62z41J6nwuWASDf2z8YR1dgHmrFSC3c5CPLBtKSBhSzp68V5uxH1qz4dRfG",
  "key20": "2oppVs4xMPWcm1Tx2a8uQ3Pyq3xrWTosvwxQXtToiicRBi4CZmL7VkmRkQBsqAbYFcaEMk3tArXtznQVWeEECqvX",
  "key21": "3He6WqsuK2EZeMMdd5E6fKfLeR71eXDP1T5jqavZabKhGrpQghaKtk8xMgaozKA5T1qrkQniE4NnK6hPX7XHTVVL",
  "key22": "nP2So19km2UJSg2WVCpyHb2mVpYwaYqzw6vxbPxhQxsCmZpkremdK6FGt5E1AVsXYnE7h4hM3UwVkzD1T6r38Mr",
  "key23": "4bFXzs957B4XscBiRDihJ5gd1t16J7PMaZEZPdMkagSBnD3VnDUWuWi48KaxkEEzp9F2Nfpt13s38MqoE3wd96Ux",
  "key24": "3Qkg9b6hREgwj16yF7w8fB4oPkdoQP1xiVzUjXA9S7kKb6QmDg42TaTbwak7yxmi65spKHvTY6xZPzmZnF6DaNQs",
  "key25": "2wW7WKz8Mn5Up5uodEyUB5TxAuft7yNEnN7QiGZA4qbx6UDu4L2trUW1cJennWBpmAmoaV2dpFBrSiSZ9fgbkJe6",
  "key26": "2ueQ26ijw6eWK4fqoZ21w87zc3kG1u6sC53otzgx6sa9JXkN4KxZrzxUyj2JUwaPSAJtnjD6pdTXqgXadcfMqg6k",
  "key27": "5sjnZLyLKkiiUF7cozBn1tFkL4btVe51joVMFpLa5uP81ckw1ShrZfREenanWAYNKzyTvWgAtemxz8SoDENAWDas",
  "key28": "3zfXrAqnVK7XPqY59ECqBBFS4khPTyTeGuYW46z6VgV1sXYDEx6HzXbUzUnUbbV4DkWPwRXqwL469x1qDA6fkvM3",
  "key29": "3RyWr47M6uAeDaEHht5XdxUYCAXPEFN9vwDS2X7G7s7tQxEcSnM7bT9LV3ygwRd8AdMhMpP3AW5v8Q1LBwgshyub",
  "key30": "4iDVcA9cnW6u1b7rjiDSZVxdfk5QN9ZWx8LhKyFF1qiH6Q3v6qfwM6Nfd7STJ7jyv9XUyijkP6pHG3cQdUMVbY9B",
  "key31": "128W1f65tnbMeJRbhqXcwGqKBXSfXePXJQ33r3SYKiKoWwpD8NEtkT9hA3aHcoaMHZAEiSBFMsae79RdT4SK41mB",
  "key32": "5sFJVm4rHp9exoQMHUuSLcceq3euKJ26U4M12uY5q9YL8RdZyaiCPJkScBor6pYzzWBtcbyiX12AaHSzDhdrByaP",
  "key33": "2u4Mmtk9L7hkdxndxRjEBzrzfundFVXvD44kXP8pWHbG8SUnNVuz4T2tNAjH94zEmXYHcTJrRR4nTmoZcMDiG7BR",
  "key34": "4ui1NTrckS7k6e7xRRCHXVuudKqCn5idbWHnXWETnMueQrL85EUP8nk9h4GAbky4wjkQUBavYm3ngpwophcQRU6T",
  "key35": "2vJ6RyKaPBzCiggiRpXKEMZy2Dwv4YQeziiuFpBs4wJrD4FoiD4i3nHcib7TeBBraqKzgfMwXK2ERzML5w1J9UsX",
  "key36": "4uwyNTSd4oSXCt7VJ5Z5bm6QNV5wjkHZPEQiS9Veq5HjbuPXxie2VwUkBergFQG3Yy9u82K9SmFSk8yYUgUXbpH3",
  "key37": "4ytEamxnmwQauxVL6S3tS9wnyVWEg6rL62v4dBd3u2McHkAMtL5ytvjXBqGBfHe2VPSKcoNTrHD55EfxVxS64sTy",
  "key38": "2rPYpKNDtsWo4pQBztgxKvRc4FuxqxakbS5mdfbDYz7GDNWAr587T7hztVSaTpCxccbDF4P75JoTV6C7G9y7NJLE",
  "key39": "4BpN9J3hfRWcKYLMcJXfSTd7nwQ6irNQFLHMyFREV2WPE8MPLKeEjyYp5R1T2iu923oKRjUrFw1aUntx4k3n7jkZ",
  "key40": "3YFvwm8qUQNqPjx3Jta3bLU8M7zTnrXNoH8ifXiiCbgcksoZfjDapcYY6RV3m7QUCZDWu8abVpjbnTCcUVykGKNX",
  "key41": "55E1TCjvyH77HYS6c9BXaf2XeZC28jkavCet6fDucxd4M5Gsyu7ioEwf2cJCHWt4kedKNAUtFM3S7PTxRTLETser"
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
