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
    "5MkzzkVYDvUAaR4xoeQFwxrGnC2zMHqKvt3VJ42gxDfLuufiJGKx6L8aF9xsMRpj7WBPbbKgPVT2RxW13v1a4WxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Zs9PN6btJ3fztZZSFfzyNGnKtjQGTG7QjhmzK2bAAMD7nrXkYxEPzkt1zEo3T4pkZkK8w35zzjZu134MzauxMj",
  "key1": "2Jf2wS8a2qTCFmwERWqnJqvhzi4A3gosVgHGXoSZoCKxGVCF322yzCwkinsTCqkX2raVRdxdeE1chBi1WoaFEKmi",
  "key2": "2ph7XdKXzNA9484rT5sUM6DHRR2CQ6SnpuTBMEeWGp2zyfHT9FZXUbnNqqGnXmeLALxh1Ej4fr7NsFmGLcLkL8To",
  "key3": "5D7YPfQz3Cngz4oea8KzBjtUkvVH5JUdGeHPcDr9uVgpHeyRyB7uFc3ANpAD4rkv4xoUNeekNT6gdptzyTnThgRw",
  "key4": "3JM7YFSAJa2NbmyKmtXg4iRmw3E5PfAPK4KBxwPeHkmiydDNwWvGPf3r5d4nrTU1jUVzenZD9REBGLskjEBe5i5u",
  "key5": "2pEFLdfJPnLKrLRKh4SgsgUsENsbQd2jkrtPWn8RrXU3SRFzKXqra3TYWxehqHqoMfALWHQgJgvxPpw1cDuYHXzo",
  "key6": "36d155259Z564RSUwP3z8uLXPR7QYNi8K7zSvWsXpF1w69guorxFYb8hvPGBKMeT7f9Rowz5Vfg8NShgYZRUA2bN",
  "key7": "4AJU4B8472UnQbmeG4EnS5HouGSFM9wXMik1GyBSv31HfnH7KnjuKUNw5amP2ucuSSWdQVgDoppeAeyype2LPH4z",
  "key8": "5jTQndfu62twxSDr5kiGwHfzWEz6DiQ76jH5CQtMbRj4XzRkvsj9EDV2KmvRAybv6f4GTnp36cgzGEzcDw9Mt2o7",
  "key9": "4A6PYqFm8uz2Am4p5sD4TzL3Vm4LL6ALqiJq4o4FiYnZYsnH4GYbwMD92PrUzk6crqNJY2WBRJya8GfD7tToe8bk",
  "key10": "2HhE7WBezszd3pGsVg13S9sHVbaggr1VX34SzmXqyfKMj34Vo1UEz8iry9hn1fTVxC5Jt9ZBk3uUE74S9HpvJJu1",
  "key11": "5ErT1cu8En1ATBdf8fhp511M5nQERDUiFWoZ6vfra9hv9cveKBm5b3c5E8oJwpBy3gYxQNZHeQh5KsX4V1wpr86B",
  "key12": "v8kivtneYZ8tTotBy5TQyFDiZELpd5GgT53RMJQ4gSxwhmJbZ2i4B6JE9fgxKDsRGtZf5kFHcNscnJEvdawEX3K",
  "key13": "2TWhYA1GKgdxhTB2wb2ua4i9FWpMnoSH6jvYLvHyAuyYeZ2SoUTUbjfCHS6fgnkDfgxGKdm1eDRi1tiB7gWPqG7x",
  "key14": "whvqyWqVNsYUaJaps92jKFwYLMSCRgtnsfLAzXDrZ4tCigmCewSZuCAipJJPNoifwJPeU3Q2iyUQDrGXkm8x3M2",
  "key15": "dVPLWTZaLnTYLSGbfUAsqS4VUsmeaKLkUQr9cAUTwx4d3jBs9ZAmAEhYhdeU9wrvfPUp4dZJMKyq5WX1Xd9r1Rr",
  "key16": "57W5fzFGkVUK6bXq2JmYpTjR3BmXuzsXoDgPqkJG2ZWj1nUn2G2wTFmTC2zMwapKDJJehKkwizLrPCK1QLVZT9JT",
  "key17": "2Cm2fEKSFxjdgH1xoBEdDHF35tz5YSGdvCXxQimfz76R5yxGW5MQEmzsEinE3BZfBZPRzRok4DAqMeY9coSsBad1",
  "key18": "3ty7kTaJvXR7oNhKmcXjTi2jvWGGY43EzjDjTs1SXfepvoL8AFXS92XcoNzhzbye2fgFRTgYf44mZLcgLtdUQLXg",
  "key19": "5UdCjwfEPa26qVakyyadqPPVJmWXY9QaaXxPgnoWXJSm692RuE2GYwB2514YgMZ4PLwEPc6S9NgcxKTPPebhBhE4",
  "key20": "3rd47RvtnUeNafb6rnuCxtzPzAySt5QawkTNQe9q3padEZ4M1XVBFEv3bgPrb5TBVEgFdu8EEdLhWUS6YCi7LqU",
  "key21": "4nZeRcorG2CdW3Vq4qsGnSYAykzFeDKQyhEQKAmwJbkq2oDnUa4YQkrNVJ4DAP3YBsML9npgHWssB8A4vGtAVRMn",
  "key22": "4Cc2vnEpfR8XWZPzURTyvFtnRwVMEPRVJsoRGLazPT23EZ2AynHze5WVnAVSBuKa7TqBnrGydZHqjgLgCPE7gM2W",
  "key23": "5gpaosQarS3XFKFiAxzczLnPsNAsCx1SWiYKWz7VkVB8vBCSjU4D7TU2LHj3tzasrjgef6NYCCGYE5sn2xPKczsq",
  "key24": "3UbDVtbSjqS2qhacPvDEZaye3Y2tHPswxWbyYsxUj1UKPEDsDwnNGV3E6imGk27S9xQu4dtM1zWM1yWH4YcqjXov",
  "key25": "2YzuhYPpHoXHpw2jySdiiJcCf4U3V7exNz2uCGUMeaFtoR4xcP5fTMNvDVGJwG1nERrjF3RDdxvJZDZSBoyg7z46",
  "key26": "3Vx1vThEExpy5uVm6xhtBRqYsN1Xz8GbrvJ6EUpuSq3af127o8rvFAPM7WqSE9L9krUy5gqvjJZHbfpFsqX49JiV",
  "key27": "2LxnX7494wWx524R3x81m89Sk5iEmNvbyvNqw4hQpTXWYvAydgfwqPhKd4YxfEhXdyryzFr5MFthQYJzeGfaAtYh",
  "key28": "3H1FFZC6TZSr4jh7rYx7hzfFWxkw3WucbcisNCUFCGvzyVnQALNxzfi4UKafqPezwQDUpxepVf9fmvw5ECm7qhEZ",
  "key29": "2hh8guvvJiP39aXatc58LgLfaGVivxN8xpKUvjFtxzakRLVwwqibb1JiLnLGv3vxZ2MspdKgWgEhdrAviG4r6B5r"
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
