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
    "4LwDSypB2GFndAuaBPGh2NCamGqvg3wFC7NTTCXqXXdpmH7Z4ghGz5L5fnLBH4BoTYpt8qp8sDbueyaBHyJt66kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQj443ZrmfzG9v5n4g4FJ5grPSSLpDGtyn9VwTHDUJUz3MupFA6wtGYc7Jjwrua628Zx7gcqSNJh6ci8ccqFCkZ",
  "key1": "2Ac7dKvCVDvcQYWRbH9X9p6JYumnEiKvzt4STKcTbZrxqHEoq7KDVowNmKBGFVFZW4fzodicvJDHpJZPfXbfr2fs",
  "key2": "3sRChSevGvsMVAkp8BysDkQUBairW5QETSf4wD3RUEMbPqL3ZHjBdBppKEqvLMU1XVS1xgCACV4TJjuakZjmHDjW",
  "key3": "c2TD3pnq3eD88HB3BbqBegrn1Bxx6CQqJvM6iyfALkCoPqZTASt72bkZstMRNtobwAi8p7isWEnik8qBjD4c5Xa",
  "key4": "2oRoFtKEamy5BBy1PizqgEdqWE7xxvcLSyCSECb4XbFPJfA6jo7RztUPWDkmGd8Wz9r2qkF2wBn6e7GUATZ7Rk7q",
  "key5": "2xvYkMwAzYHsS2AnN1AU6uyPniDqXnAsXs4ZudKafe1vABJTXuMphPHdMsMyRoJDpvAxA7GF6NVpv9ZtsP2EhjQb",
  "key6": "1CSmbcnSbTUXuhbo26PxCt5HnmAJHLFNCjeyo71uaKhDvcWgKZHkcLvZeuAfZ8ntZHQQq1h8HwEoSDBrvqDjCq6",
  "key7": "2SNBP5JrcT1JUoaxAdki9JVgxw1ZYKoqwqKqYxPYowDW1m33PgdriKnkkg92KnB5EwpA9xn4zUtBWtHonb7hrGRL",
  "key8": "3nVx9ZYyhiuksjVPmmjGTvdA5vWBJsDGwr7jr4KFux3sprXQWBoMfsgFVyxUMbriTjZ87mdMtzfaxB8JDQuQnv8q",
  "key9": "3Yx18SKfpdyTeKpvpiE848JzEvFMB57QjBmLQGjtUbwpCT9JW8NLk3LDyW5H5YPiF93vrNMfiaVXffLMYqXTir5z",
  "key10": "24nKMEeu26zaXfGwgyPTgbT3uBJJrUdpsVGxMve5ApjqAcQ1Js9qPfrhWqS53KUzpFRvjWmMJ9f6fTPxSwY7YGue",
  "key11": "4KNXrQiBrQZkLDz1EjzP3fkjRK5MQF4xu76nBmUPj6akpGBeqEBB6YtDqimWYpRDuF53GxgtPBfYaHPxBJHa4LRx",
  "key12": "39kFPkj6MGoBFwC3u7pnofZpqAdxHmTEk9QaYBSkpWGLZtw21GN5TP8NmVg3kMjBmm5M6NodeGoLUppkJxL1bEWq",
  "key13": "3RaRn4uDpKzQbhvbRxP8Puc9kVdF4tEXzWPLnwWnCrXHs7Qroo3vrR9dnRJknjk3iUm1LX2TiwbpFu7FZM9EH53R",
  "key14": "46a7FXZEYtKQptmDbeQnPjsMA4mVT23g45WvFbkBYmxHYCZkteMKq6E7qEsJBqruZchaZu1n8xQ2RmgGx9EvnqCj",
  "key15": "3z8xgDcjGxpCer11J1aBMjUNRRoskbRD8nK9YLevKssuvEkTxgacBV26YkMRfCRsrMGciJV6NxCo7EZChL7QKc96",
  "key16": "sbhhciaWtVKcoMhaHJiyfPVQGDuPHViNDsPzx4fNMAicYnB9n42j98AUFsMDgu8yUGvTUMWrJJf4MwdvLX6jo17",
  "key17": "56DobYeTNB5eUyWYBoNzAhKG2i7uLEp8x9NFskTufsVGLhfN7C2VQgsd85WSd8fnETtd7SV1xNfW367vyqH9BVhv",
  "key18": "42wti9bK9YzLmh9z7zNm8dg3dsScHoAvEqpnrRB5SvJs1bBYYZxYH8stk7jEZe8Uxx6JjL5jbCUka568in64oLnM",
  "key19": "2pQN3FoZDAqoHJtDBzV2tzzKuNVdYA74HW18u5zzAQh7NaRnAdzbMKnpTjzwYXuT41EVFDHgKSXE28QJf2MSJpct",
  "key20": "3XbZAhZBE8ZiYrUEZ7BuBj7NF54gPyyh3TivHLrjqAWMj3zF4Kc8SDgpEbABewLjsqzgzwZPEsKAHpv3xiA87QvT",
  "key21": "5JpLTsYtUeZmh5kfmBUnq4hiaikbZmHz9UfqQVEFxDMetP9xAiNovPwgLF2yUAcjrBxqYWF43uTtubdyi6ve5HCC",
  "key22": "57NrLrTwsunqCqo8jAaBwS1y4PLS7ffcYJFnZxuZyRmHrHrFhQYkHWMoswRg7sSA9d2qpm8T4wTK6RkRZxWZatbw",
  "key23": "3MXF96N2EYqNWyU94vY5F5AMXaiDYF3L5vNfyjjaeg6ZZNX2ADCWCx62RUB3qbPjgXo5B9HS32GeGPFjvP4GVWFJ",
  "key24": "XZcCfJ5L18SCM9KVJUUYLSKatcbA7NspRFeLh2ZsMyRBxqD2xPL1kaBPWNBJETUnwystuyPo4yMRq8gAXQTqwhp",
  "key25": "2rcum4x4rgvhSM35v7iNADM6UHFSLSWkyD837eBDKV3bWBKAerxoyDHtfnca8WVQZkjJr4t7CaQzDW8rjoXb4Q4K",
  "key26": "2BkqLfXCF6HPQz3AiHQJd6iJiry4dtPo8yiJP7Ao3UaFqUfGK9MB6od4nykF4P9hCSjddKqE5bnqgM8vSMugjoku",
  "key27": "66hxZS3dn1PiFxJueoehSjXr6578YQoVMaUpF5VWStqydAHS72UkHU5d9tUUP5kPMGemVd9BYVmAJH4KgYaJnQyH",
  "key28": "2RjzM9fePBdpKevsBxsdXw1jeXK5FECjewAhsBotFRURHUkiHsDy1zj7KKfzZG6wXKEMdBkPz9EaCrGw8jEoqBKR",
  "key29": "4gKwLGBWMN6zFMpoH4c88KmdJM7ogqsf9mPfRTG6LxQJaubWN5Tedr9xXgTzEYAjrKnBL8Mh1uLdEDK3KcfeVK7u",
  "key30": "hN2fHpAAX5nniz5mVRXa2c7bp37xJgnYBnYYod7z2H9iz7XRcFDKdG2YnRgrToAQKpBEjvJddyFDo8ppXwuNPWG",
  "key31": "2U4pZMJqLoRatJbrH5URgG27G33i45jtkvcndwR71dZxreH8E12NSR267VZMp4ySJuA8e8V4Fd6p5iCgv2hNNXZb",
  "key32": "44kTiyctGoAuusFY7BzhbYnCniTBB3BLDsuHct5ZLTrZWQeHxZT5CfHas3Esh4nnJYD27wf273kA2WQu4f2BZ856",
  "key33": "7tv6VR2BxaGrmDKmWuMParkyW8rStZNeVf6FVcieirWU5Jye82YrRGWJeb8ryxfzM6RdPYuwr9mQyjbaMWCwaxS",
  "key34": "64JWMfN9985N1w4Uc9ucgrgAmWwv96dCfTE5wS2bWekUP6hTYsFiAktNZZRojjbEdrg9RRmSjd4Vu9idTQktWYQL",
  "key35": "5pSkDNS3LEUSthN3pRmR5jH6ttkTBWaZ3GeMf7DENC3YYtekAnyGXKHGV2zhmktpoM71LMqa7AVZ45ADN9im3LhC",
  "key36": "3nLYqhTT6ZSaTABxSTgHfJWk6tjtqz3j5AfP5eKy1jo8duA5YhVPzqHdqS4zuomtHULZiLhdKszFcdtZFkqyuLrp",
  "key37": "34Xwhw11fXxVeuCEbJg2TKcez3mTPVUxmkcBKN7F7CRYUYPczbByLUbZhybiaBV1y4bhi2jZiXGmVN4xjKYwamYj",
  "key38": "31qeGVxhAmHRZHuGYfngwcGWN9TnrMgNq2LDVwP1A7zQALmFkKB9cimtZQXrVuQGjtpcxsqneSQAJNam4bjnFJCH",
  "key39": "2QAUWj5bWS83gpfAuGqHQbVxYhRgDjbwCgmfRiQcLYRgc5YU2PBVeTtQiwNVEeFrxmdXpjYoYWRKu1UTN9Rjx1CZ",
  "key40": "AaFobe3GPqaqhsmxDYE2Q17KRkJ7RwUa8su3n25SPA9CHdCZFeX1nnhE6Ce4wyCk9ZKhp8sBDs16CyzYdzhZHjy",
  "key41": "o3SR8aXpiaZAfpydNNmamXvcvyWDPc86Cf1DDgi9vgobBV33M8aJPyhTnpwtqn4NYzfqUkQytjzXfpZmDzfDHc4"
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
