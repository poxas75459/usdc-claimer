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
    "3Wf7wz6Mxdo3umkUFqQLRZTcsuH9UVMvEK5xqCV33JUBUBFJjso6mbmVVUWMFRyWYW75fXx96VGVqPHp953wJmDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGxTieVeLBcpXC5Uq8sHpz67ZefgvsDerj7q9Duz2DWmzQaBLJLB34Uygn1n1himLhPxpJ84RpwigCJipiXEwxt",
  "key1": "2zUEWLTLdZ4qE2cpyBtmxnMsLFS84iP6HMd9BT9bEeL2tBmJd4R375M3PnvGqgT9HUwJBT5pMqzWdgSiCmML11NM",
  "key2": "5GM8A9pna2C11bciCiLuszhgyK8Kb6mzi1pcKV1RaHZydin2Jh5i2uviGWvnkNPBtEx7Lg32sxNKLbM83yqa1ZtY",
  "key3": "2BFqB5T7k6nguAcsUsZoH9FGPFJsaVDoHATyVUjWBqLmEca2YFB541hz7ZNRjN2u1kAU7LnsqxAuHTqaE8NRgfwi",
  "key4": "ryFYjRgRWJejP8otn6Wgrdrf6XXuS38Egf3KKCWkRNQJe7QDvH5XreNirqhLWrW8cWFJPvwcWL5D2DzWoYK3JJx",
  "key5": "5N4TRnLDVQFvx8JnXBYUfZB2F4EV2pfzimNUXga9xguZh1HzivchLZVuTFrpQ2AHDjCb831krFvuLauK8DaoDWcn",
  "key6": "rzd2czD1pEhXboioLU2kRNxYqZUYEBDHDbJhE1ntoU8F6FAT6cZFkWGnBKwKmZgeTYw9TAYB3epD1FzKj1MnYzW",
  "key7": "4uFW7JpsjyMJ6JhCXnJN9sgzooeMhmbXp2mK5kFsyEmf1wUkBGhrhs2KpJ53XvjwXDjHiTm6g2DVwHHRG3xEe69D",
  "key8": "4jRBzHF175LUJRAAkoUsTs74RDhu3bGFUEerkDawK738oUYyr1r3MqSxqCbs9kiJ9D9TY9GQbTVFerw8rZTQm7nx",
  "key9": "2tQoDsWm8e9rcX6gYZZCgX9qkL8Hk8KqLPDyDR67UMgM5QUdntXeQBhsoSozUsyxbUDRQLxdWobCkTyacfAjZ6vU",
  "key10": "XBLsub4K2bMEnDqbv1Ff8DPxMfmgmHKy3o9iEj2vfLmgJHiFF1WfHcLMPxh1uQfnTvZTonNbbJDHejs8aD82k5a",
  "key11": "3cWwH6CPejPSqJDFMteJgUuRVcptKpfpydQcVMjrvpEiqGM3w7w3BcWQYEhJ2w6T3aVkwd221TDFX8VSSzLNU26M",
  "key12": "cW4KRfMbxg2QRszykU6LSL4oQJPaQkMRYYviBU5LM5zqWk4oFiWUgrvRvH37eSDuNBjKVDroD8461w4mHAD1Qui",
  "key13": "mT1VJa2YHkHHZzZwHV8xTR7KRtRi1HBY9eNoBBv1DLNfr6aCsohRk1tdzaU4Eyp3vUJkihZ65Qo53fmxsgptoTS",
  "key14": "4Eh2PgkETGbcfcGhfmByJy7uFsKMWhCnWR5p8g8XC2Zb7k9mA6QWmapt8vwa4bFn33458WaqZz3wfjss8PfnkPNL",
  "key15": "4cJ6a5Y8uPZZdDebNASe4voC3WKMXKkAaAibJhsms9pRjoPn55keUejDD2cwctvp4JKXi6UrgaRDEqErzKrcpddH",
  "key16": "28Q4P4zktm5HiHREZqSXuQAytfPZAjLfiWmkTyZGNLAapYNVCfnLLAJiPqQx7tbUXCRTUVpRSxoDceDcs29NZWLP",
  "key17": "BxSrsHHJmzFKc2f4JLQbxFYmQqvpKZGjx9uoa3A2HwdUBUWLgJFfjGkX5XSfCy9iRz6PZ3Fr38s7VjC7GudvpWr",
  "key18": "2qtWS7dreFKHpjnTYuxhUtggi9mbs4cZ9xAP2w8gS8FoWr24PjUhboUSQK7DJN4BjbVAEqQiK6GoesokDyqGRpoE",
  "key19": "2CkGRSuUYekqA75Y7xU1ygNvuKP8eGRkr6u76TgLZ2b7KtGcqCjKspFaKowuQaxRoKmiodEGrdqJFD3YphoYNYKg",
  "key20": "3GZxZtp6TEuA6ozDPVC55RxKnLfVqQVPxRuRGLoTGNjSZW4aqGU8a2PBxsJUJ9atq3qaooTD2u9joqNaG7axTjvH",
  "key21": "3N2ePPFjoyA3NuA7nNnxcENCBVAW163iLmkuHSTELAofuT2fqmzTBeKGz7kRorpAkSkZ9RLxQaXQuipZjcrrcGKC",
  "key22": "uw2kHP3LBJvt3xnQuCc8ufSwwz5yCXi5cmnrgKt1uZHaN9sD5VBqdxdkNfhoniaU9tDGFn4gimUBjqyDGoktJYW",
  "key23": "32GYJY7aazMyfcK81TzrRt3eRP4xnjy8ry6jYYa8VFfyoo1nn3duu3ikLNhdAoqCk7TAw5i1u4ccbV7RwGm4wBk",
  "key24": "4fNSocwQ71xMZqqwQuB67hUvio6mLj9necFovjTDLHwrbR2XT5qU3d4SBioJSN24tLjTRbh9tkJfMDJauuq4cfaN",
  "key25": "qJsb3pemTYY2Z8eUBMwYwC3WHXboNBW3ERVuLaAkuzxh4H6fTUzkAZoVVB9vmzkFe32NsJa4AW345GMYsqxdnAq",
  "key26": "2eSh8E4yQc8fmpSZ8y4cogpnzJ4snTn4B7Gp6QpzXJjgrDFLJPejrXEbejmMDHH1Q98oi7Yh9WZd2gmj3FE6PH28",
  "key27": "4fXhcYaBP7zGzxF93BbgnMbW51CiX2PFGRsHcEHJ4cufPPDXWArochBv7FW642MZ2gktT3LxZjLTmHZ46W8uZVG5",
  "key28": "krmz58TWndqaeg5ANf9E2DU6HqoNoGvk19Ytqdi5YVxLjVZ2hgNUp1FNSPWDQs5Vn9sTfeCi9uyLuXTgEtiHyQg"
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
