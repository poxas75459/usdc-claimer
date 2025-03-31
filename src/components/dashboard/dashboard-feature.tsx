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
    "5XMboayDkT4hTouN3XChZMtpuFQcqyjkU15kgur9L1FkQgKH665gAhJEh5b5hHnZFYD2BYHDA3mWgp4jjcZhdgBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDEC2o2LmxJ2fSvsVuCM4FApNE3FfD5n7bgscXnKy5N3nzvaudNtqvTDWqos2mECEM6wzMu6hjqNY8vRz4WvbYa",
  "key1": "4HAe7Gv8w4KjixUwfJobq2KDtgtHhxWvAiK73GDZsugtbS4BWwpAUXaaSRmbrDUVUF7UMmKe7CTgt5edQSp7qdEh",
  "key2": "3upeoMzTJQw962bqc1du5zesjDF1zjhKeBCcvhNTCBcwUuVN3TDwEP3jazNCTpV53F7oHWNuebGfub6oPPvKQQp4",
  "key3": "3j6NHo27TDkiPjd9KPyPqTpPMF3Nt8YcSwso4vfb6CLbtpesazGh7REgwv7HmjvuGNtMa7ASeAr41rAESU1fkpp8",
  "key4": "5SknaAbLVtd6oaUyPdEuonnTXcM19HaBQH4YLJBRKUx7V3bzZ96zop3jSjGNcoWbo4wSP7eSZ96u6nucErfb5oh",
  "key5": "4s86ifxwxYKRtBpFv1ymM8RTtf51nwxQycHZ9MibSfh3yuoc2iVQXoMFvkezDfx4CtDtiY3dsWjpRew8ds1E1mEV",
  "key6": "FahFy81uoMv8UJsrr1ByYAxqfXs4AwsVJ1M2nqciQiW6LTqRH5wf3anjPY8rVLmmt2hgNEKQ8kQyRkTHvDiUrRo",
  "key7": "3seFfUBL3HUqEtVpYooeuSjTsgE7rQeDfvncxfxoBoZHSn2AywfY8kjZZhWVwLETvNa4o1VU1pE4LzjY3Z8d7zQy",
  "key8": "3i9krjmvAvbr8cucUd8JVEPM9GHBjibLJa6C3ri1zzDQ8aXtEF5ixWe6QYs7179bVaiq8czX3w9Yscfkendhunvn",
  "key9": "28QYshEf5gx8JjVuBtUoNqzSVnKD59bEyD7JxufieM49CJ9R38osgScWPQApdM6LDGxWrLW5ZHrALBbBwGmnQH2Q",
  "key10": "46EX9tgJGZ4zYezYiCF6BNU9xrCn1F4iUH2YpMPRf2kfWquPRLPYx4PJkpiv6ZLtgR3TBQ47KeAf394twxPVH5Yz",
  "key11": "3xSWTK5HvfGb7XwKm6UF8wmhqwTtpzAQ8KSCw2T4yc2STYArtDnPkvmUD3W4d8PWh7H5utN423pdyQBoHi2kw6Ns",
  "key12": "4GU5G11i2bXCcJ6Enb7MuxvpA9ojz8azdqjU67U2VBh4BW5AkCtFUWXmQP9tMYqQkpDXRCAwJue21iQbg6RqKuBy",
  "key13": "4zngHKavrQwFrmuE6CbM2MVbrVKZjuPhJfNgEiG4MUVubX86LjArqfqUzDZ8SN5mVcwrTbiNmGyXSfTqYMXieHTR",
  "key14": "2h9x8qzqUtZtV1pKwKSB9KpiaT8MLwgHuekyYWzqiG1WHeHr329YvBCG3timxo85rs55Jaa1kVrZuYVJjWzaivix",
  "key15": "4jijytci8PjhdCDd9VZSNyjLRs9U5UmcQUNbjnoRDUB1w84YW5gtJZbMhVdu7ZcK3bLFmKf3RYyuNSTZ12S2zF2G",
  "key16": "azLaLTnXCziNqfD9xG9ZouxBtwbYtNbKPFZMsZMCNCb78jUFdVXNazkGgM3yn3eccQyGrJvAT1P71TEykaabHbH",
  "key17": "31fzBo1A2qwLbvGL9wMZLvoP66CkEdjkcEDgHFxxoKeD13pdZzr375Zs765G7ogxnYK389nHmrh1Qi8Gsj6peDZD",
  "key18": "3Um6Ehz8i3P5cmrKK7w3tk5bcHv9UasFRY8Cwj16dkdMWMfeUB5XMJmzrB7S7w5XBEVHZd2b6z2rm6nv2baXLmr9",
  "key19": "4xKe3XMfcyabFHUPeJTKJuiaMFpjs2KoHmayBotEtzdyxhvtBZAdaegmfMnHA8G1hUaDJ63mnY2vi9raCy9o4eLA",
  "key20": "4NfHt9mGbvfdcDd7fET4jkJuezBCXWKskYe5AWNvV6QXPZcjWgVHUbdtA9vhyvJEJVy7tCVhmig11tGKx6hTNd3b",
  "key21": "27EzmQUUCNkz5jxuqgpeEpfWFxQXjAbmQvfhibuXwtWWGMKHAoXZk8qLiuns41cE7TbFZbiaQJcDAhn74ssiupSt",
  "key22": "3YxmzRd1pRjiaeeKgsoRwzVucBrbHqRs2GvX7WKyU2MQpgyoN9M3LNzKnma4QcAQw6fD73dQeXo9uTCEsxyByE8W",
  "key23": "5A5g5zJAnXjhc1Mjs4ivFTRk9dfKHPTtQ5M1ahhPbErE9jiDb6DFwkCH2wxT7jsfkFXWe2vTbxCspj7G1iRSAov1",
  "key24": "62gEYp1qPvNjEt7gRLu2MaRhW45KYbryQwpQmacXMgAK5AXhVencCXLBb79TfahjDMT6exujpXqCYVLJVhwAFesj",
  "key25": "3Hxem7QvKbpX6RBr4EqKBjU6mAVVuw7snd5pbPFbDkR5cEKNYU8udy2Q6aR5L9ihjyLcbVY3D49F2psE6oLAUtj9",
  "key26": "4RV4imG5JLjMERfhAjuvYCRbp8EXLLnrd7FiD9aP9nPaGwLC2wHms3wuH4Ex6fBrkjQE5DueTMNPYvjuFkfbYkFK",
  "key27": "Mt1NCdwynhKiqCn1sc7cx1AoMWGRQ5KPf3o9N2fs7f5uEa76hKxviymXygGmWwS6FFC1mfKpeJPFDMttNUcP5rE",
  "key28": "5kZDhvNBmGWuAhLeicfKMrxJNWiozq8Jy9fcMLkDesituUF5PYKwPysawjSTRKN4S6QCR47Tjc3wKARTHZE4k873",
  "key29": "3B6rL1YRZ6BjBqwFGRkCoZWwDJCCjQcpiqA7WGb1E4wwFF6d9LnWNzkXhQ17rMr6ZWaS6vBHethLbVXjtiDxdQSg",
  "key30": "3KBJPqGUaKiSAfGdy8P3vkiUuM9miMbwoQKUoma6kRADtKBQKdEx8SPYsRvJc3ShCzSJc5vrMVc6iXjCEr1fAHSv",
  "key31": "2f14Te49e1wHuj6QKYoRQmbKANxMJ4vNK4f8TqcTHGGyQrWs7h28w4kHiUJkCy16U2rHNR4LE6qkXS6M2oZKuLzT",
  "key32": "3KPRd1dTYi3qH2jpU98KDoxzecrU6p9SKLir1EHfChDyAw4srm8nAVTFgqHHGBpEuRRct8vdwQeGJ27AQU2a81xr"
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
