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
    "3Qc6NVXRNjoiTeUkdSnFRHMboKGdUcKMtuimuCBiMUnDwtZzhheNWzvpBMg1st3HmyT1JjFix5fTa6Z71BBE4P2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q76KGTNAtSLrE9hgdexvL6N5SBbpVJQeVzgnhqGinA9fVX9hvUuk6DUjpe9XbE5fsyq1gJyKYMqrxcwvPZ9Ysk1",
  "key1": "2DRi5YQ3Lun6CAqUTriVLsMyRChAsbdiLNHHGFfYwo2GUZXGAqam5ReVf457FcV14VZruoGh8NEF9cYzxhe5wTcL",
  "key2": "554t4EcfntUpWTnyakXywTJQncHV7By1BVfV2DpcReGzpS8umaiknP6jrcb6yE6T8V3qsWAJ2Qe5AVGG63toxCgG",
  "key3": "3PSREKQee5FBtU7sDH4kZvs7FWmmocNuf4bQjDWXoVAuFFdBT7c8wGRSDhWfoeFX1cLwZTgWDhgH3Sqfd8JboXur",
  "key4": "3HVTJ8wHaTYuxyD4JnxPEk4x81Q2tRwV5X45Pc7hVwDXk69eQDzePMB3DCH2ECwUbpe3YH65FLp7JU6w18q1X2iS",
  "key5": "GgNt3e3XxXzpQwcWRT2zcBh3Hy7GaNnNF6fk4aL5jk8dNqZztGCg2ks9rGreKKER8ppHnnbiyrd1CAFgYHLHNjH",
  "key6": "Zr7e6DjG7B8mndw2He3hH2RDyaUNLJrp2dwwRDrGKxVWLFEhHvQzY2YWQZjZ9zzbj2RgyY78J5VpDScN2by62gr",
  "key7": "5fwVY2AaZA1gpJt2PsLCePWQ6mjDNjwfaSEz2WiLNLY8g7UbZ3VGUitRpQB2yz8Kdtcvanau8jhwsWz2zUqBj2Xy",
  "key8": "3BFVkf2hfuTySENnSv5gkdxv7tKrpFV1ZBntyMEuhqrcHTKtF1g5jrMz6xvtUkUmvsbv9bcWutcCDs71bGK7EZH",
  "key9": "oYXoiMtKHTxJ7WKaLw4h4wk5Kb1KZJWJvYcgaDrucUXadaiYej8wuSWQWZQS21xoEMX5SrqVso6FvbwmwYhdBqA",
  "key10": "2ZUaB8V5xwFiMvtBBCD7WE9e7EduKcXWpowwW2cDX3KoZwx9C1fxnm63X15rxGgsyyxfqdoksKumgNsDmPo5hQvs",
  "key11": "5UP5K4JgrYvL5j5ZDH9LpMyVFWx9mcF2fnr6GB2Ue4WoVoEFVM5ohRTchMeVDzGrZWiku1dS8Gbr8a6cZrcAgccE",
  "key12": "63HMSMsmMfSr7TSYCotUdNgskVhpdHyPpemJdGF2xFNhFidMSw9zjUK63xm9orJMhmFTPYfBSahXw7jxhnU1cD1x",
  "key13": "5jmPWqbeyvB2zQeb61W3a8VBLfVLqNjCMArQy6iN11HaBY9QskfEUe7g7hcdVVuYKvTnZKvc3xEkhJsmy48aWQMw",
  "key14": "4NpUeUZSi9GdetHCXVvz6ZUUKcid6a1mRGh741iz5Hf5E9JnoxwrjXc2ywaKzoxQz2T9UoBLozUBDa9xTMrmoScJ",
  "key15": "3wx4tEaFPo2WBtT3cBJ1N6MAXCugb87rEZeuJAQGzpRupunbx7jDkJv4LRAjzypGv9KeJjSJXom5Ggi1totCJ9WS",
  "key16": "67TRvjUGc81XLUeBCnT3hoCD1njHhsfX8aSLzh5FZGfixyDdGSWVLU8giBvFZzhsevzxLzoEenjJbY4zx8rMRq3r",
  "key17": "628GRf5xkBrwhmCQCmLFkuG3CNuAAhQonqshYbo3GTgChvbVw6TyXMAxcSKRDE1HSi7jGgMUdG6FWC8Lvc4aZXia",
  "key18": "58KT7yDsnkW5R5rYbvzVbcXsb5vL1TAs693DZgNj81qa1XYQeyTVDH1n9WKN8UoKT1RQBFuVTG7zHNm4b15k739N",
  "key19": "3c5JLegvbtVGb3A2HQ5hK3feWdJGgvzNVYSdb5N7GgRtzgs9Bh64By2BadfX3Qx26HcmVMyTRz19L24z9wnbsaaW",
  "key20": "2sKMfFpkd8oZHjA1dcgD3V2UovPYZNPnKn82t4httGz2hhMj9UZ2wZ7NQgUj4dAWBNwhCL8RbUYvj9vEuHnmUVZX",
  "key21": "4rTxKyqoBg5Dta7TTkpYg1yDgf4pZYw4aDUgBC1WaqyLKC7MrmpTqUsSYo5CBLsRvu5iRGBsnTjtBBnKdLh3MUqs",
  "key22": "5MnYj2dJkZsa7rRGLHPFXKrv8Cd4ArnnndjvJhu2djzAFmLFBcSDN5zQGNcC52Kcs4VT4EZB6bzjmTqK3Xg8ZmyL",
  "key23": "4qhdy76CxEWG5EaJ6FPqQuPqCAPmg3MYWcUiUtoRmpbpyjEDXi2bHHYXyN4aDphay98yQiAM3KEgdtgzkD1VQNkt",
  "key24": "4NfWuS885Wprx58YHt8WeDr9DUC6WAdxrnuyzVsQAPHSSrnxqNQrvA7AadzadwbnDW5rZMqCNjWheP6FiCHUSWK4",
  "key25": "5V2oXcpJrYzBAD2TBegjFQyaUPYkQdxpyexHzbLxC3x7TkXTdL9ZHbU4sJnoX7QjKEXrUpure34j2p4vbJUcmhVk",
  "key26": "25A7iUmvVQxUDxFFgSsmTwvRiQ7hdAX29xbWBrdRJ347hgATgJhkhm8aGybGwpek7jn6PXQXZYU1L6RHjSwULexD",
  "key27": "5j5pVnb1yygXMXKTaLop1aJ7VuentEf3eANyRYVJcnVYtpFakacP8kn6QGz4H1cBLLYW8QAm5to1eCUZkerCerM5",
  "key28": "6uQtsZ7R4DSKDYAqycKR7QneVyF4PzctGBAUzMhz6a3WzUYPnkHpioMBc8gTxVudjhDAftb8AkqaQEzv6MfiRqt",
  "key29": "3PVJsmxjeBHD1JDaXEseQYeHCo2NocLCmHyy1kw1qQaajM6mNaiyJyPYe2RNWidpH1coFH867GwWrurcMb31JvL5",
  "key30": "FXBXCWkASeneoDzr6nHjVEPuUE28piArHMw33yxHeLi3UmXV2g5VtLFhg3vEdVWrbPB2GEtoTVv64rWQDEyvxNc",
  "key31": "3tsN2ckWu9fqcNL8w6FQP86Ysd8VNkRyWEgMN1hj5o1FcF7mq9KJNxUe71EdzXkAYqhH4U2CJGdTs2bBAMvArPux",
  "key32": "BMEB3SauCnckQ4aqbkLhdG1LdZu63BocRcy7BJbkgGe8n95Z1LczPY2jJwWDeZLntpCL3fRNoKHmPngw5XSjDMa"
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
