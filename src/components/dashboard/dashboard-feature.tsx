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
    "5WGrBnCZzLXoopSFKB9SG6jefDmvxd9PGAPm6RbXnSrUELut7ZptpsMxhiQFrHjbDkw7uBaXc4UAE6snRX9po6sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VK3d7DswesxAPF2XfyaC3EbZy1Z4yfLwUoVib7o9hV8YVTT69sFGv9zgT4vJJcspJPtbfSqhmbqVuvGREkwd9iQ",
  "key1": "4Ljw8yBqwuApvEpSLUtpvL58AaKhu1xtvP7GBhmvfNTbbDeB32AD81S9SMn8QwPbc2vShHMf8RNt7DA6CvpFVQNE",
  "key2": "C2Tsnq88kqE8wSpm7ruVb782kHx8PTqEaUJM8ax2wJUkQXHdW5UvebPoQwwDuFS1jJ7y8ikybjVUrqpRoES4dXL",
  "key3": "3aah9x8ysSsgSR77LdqNL99R51q5EA1VrGtA9QqWVAA3ABBhVWN4ihtuKHiXKcna2vJQsUP25X87xrmq58TmC2au",
  "key4": "2U85P3zWTkvtNHTGNmEjiW6toNuQCfFGVGQQ1tQcEpCu19Skh8boQR6G5yDNLEQ69uUiJTVTij26UBC2ntjAgbQd",
  "key5": "3gVjQ4dBmDYat2YC3JHXhb34WysgvxAnak1JySXwTbe6MfVisRBpZN2xEz2ZhXGyggCfcMgEoNhjNtoENiAu8p7d",
  "key6": "2m7Au8fsK4Wr6j1ZgjebzZigaCJ6i6kdgZ5J5Pv9RjbqM1sQVJNWXitnmicfKVjHyruSk9y6pafxen7CUZVbJ53V",
  "key7": "m8sP6DcfoRdxukfLh3Z48C5C3CJC6r6nT87SQbWpPMVS2pcpcRhN58oihAKkJg41nBpkuLEfvMTDUtMdKthDhjn",
  "key8": "5SdFU9fh6kPMr6LUC9cyKKoX6LgCb4NCicdgchQJp17kp4yXhLQRfwFbHo39GmZeZz712YaYbnN5WvGQ118TmX23",
  "key9": "3X3aUt8owegecUeuYSjtHBqTRMUPgv9B27CEUhjQikDcyaMJ4hDRpTEApGq2t1FE8Vh1KJitkyjeQk4bRZV2MyZr",
  "key10": "qr4zyWkAZbh9ZuFP9fWxZzyNnC1kJgmCWMzoE6qsfGSr1XgyJKyGXjAs9LaXee6TABqQ3GTpkyv1QvQBukiT9QP",
  "key11": "3SrGj9cfQTbZY7CcS9NpwHa8zHFyEQkpDL3Ccc2s5cPEipk7nW368DAzNvHtgF5Ddp7Vo2ig3dRsKJTb6cvLxJVg",
  "key12": "2M5FAB46KFp3tZ9qwY7E8iLLrTF3JPGnaYAH2RrfJGUiGWvKPbUeKMKQcB75PoP3By3RtqypMMZJ4QUXFJDyxcx",
  "key13": "35Bs7oNsMDbQDWZ1EDrH1B13arB1jq7EjBoWZ7B7KK4dkxCJU1VvLZdHPA21Fgfxrj1F6UGHETvUN8ypYZgKFskR",
  "key14": "4Nnk6kZxNY4ed5exAeYpkqB8ey7XqSJqR3i96YqYkxZua7ARKb4UxCjKhfPcDEZaKPLDzc7BJCQ9bjCsjXHrw7QR",
  "key15": "4CenSg82ZZjEoT7J9hd44JojTHQU9epBtcgHY4qhLSkWodZa4TsExHKwEPuAnKd4CcwvrT76Z52CiQS6hJrrpWXE",
  "key16": "5GFLFGBySQVrDTbjrRsDy4WZxAsUxzviUJ3ZYE3KyfQ1i9T4ARp4Vn4sP55e6zDYXoN7ms5KRstxYMXygRUdcxK8",
  "key17": "3XqSWr4R3sFtKKEqggUMERpnxCFSZwD9F6D6t3WMdzYAjYRMQ5wiz1bj9rWPDrQp9cQaU4pWyvTbnjynn1TZuv45",
  "key18": "54LJGAKKkeTFPv9tB5uqYbGBGZK9cUXUiaz4hHnGiywgTrUGLsb17Sw468VYE55XCTy9zoTFLC4oCeB4yVqa1wdk",
  "key19": "4U62ERjnwtnXfMf4fTB2addHkYsCKPxnDwKxzmSDSEL1cNWF58vg1wS7WVGxTACVCLvHbxeHPnc2usoVhkPkPRqm",
  "key20": "5RbHJowRUuZiLz5cy2B7UWfBNAeKqeb4fAHGfcczd84QG7SDHaQgWbD53F7eYjoUi2dn8MMgEbZRgzfAne5AD4L",
  "key21": "4bZP2c2wQErnDPFSL25wxTRnPS6hewmsfAF34vdTVCqBD2MHHddGDQrnRfB3SFwjgiiA1wXMrb89zWAXjzYvxvdm",
  "key22": "2S3vnaQCxmFKQHFA2sfn8ctBGKzNBcZyCqqwsbuXpv1vSFvzpsXrTSFfK4uiVdXGwnyWxoQEA83hPzZ7eTFoM1Ly",
  "key23": "5s4vbFfWrpExnPZCGwPhj9gNwnVK4GqbvBJyKmaZrmnbKA3KegssEJPmocHCKLDFyg9rAeQ2hxBvMbKk61yPjfDs",
  "key24": "24VQHrCRQndRyihaJqkUoeAYy9AtdGUgvhvshC8CZB4LJLaLzzs37f9uqDmBtWy4VYDnBWz1zNv5W6QFi1bCr6pD",
  "key25": "3TPh25FuHuKaRp1TWKhAa7a9BHEhm2HXp6Mt7gjqE1axwY5kVHVqMmUM6HzpwgTukB5MPm4mHj4GAQD9hKYDGUoE",
  "key26": "46x6Uq3mjfeknFTp5KRF1Ak3WD2f9LH7YQES23fzcGJuW1pGqFpMYhP6E7L8bcdcuGz4tzujVgbHdCNRJ4vfnarP",
  "key27": "2P1QQhTaPgL8eamW1Af3xWU6BuRdvdqdLUpqmUn1Av6xVZVWbduknQzeNFckqTsr96o3KfE6pazF4632M3pNXrTX",
  "key28": "4rSJe7q2aar6KXbWVLKQftjMUUQjjNPqV1n7D9ajBzv99FWtfmrf7yEeujR25yxqqQ67UNaAugStu553tV8t5Nas",
  "key29": "4EFDbbz5ZACbboP1qucCd6rSjFmd4aNHKLcERhaoUm9F6oZzHQSEbzTbtUbKL9fgnUehEwjKyaxVQyKxWG5sVCxm",
  "key30": "5PuEnrWv7MasZb9ZvwBo9PyaFYEJgmQhVNb7tUTKJTRGE3txRzUHULt3gXYmYBmd6DU2TBdK74KSW6Knr5rPRwyL",
  "key31": "5Mdxknzu9TpnpyzjdSTx4grfk1tUtHar74NhFsdKjZNRbCU5rcScEBCyhXw5kQYzpWaED1HAAc77vkAo4vw1MumR",
  "key32": "2S4fT5eHBizqS8erZ2iA5YfBhZE1J68kc8hd2Vj1FniPkDrhGcKWZG6zfCfGXNatQWx35WZu11idFACPoFnbBKEb",
  "key33": "5YKfFZPMmsGecfK6mHifcwQHxUwPGbixVyFu4wqZLXxDdmewadHj6iXAARKkRjau3cHHh5Y9FH8rVtZZrUfDH48J"
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
