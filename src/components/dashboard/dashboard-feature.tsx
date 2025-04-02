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
    "4GjfWo14KurxNeuuc5dpthf1xz7qWqwRaUxM2UgRo6ZgZDHDC2ee2mWyeZXcVLKWGr72N7yjg4me4o5Ag22Tivkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whUvnetvLPhZHvCXN4LJJvbquSgVeDr6JNA3wpYobPVEkqwrR3gdXFYYopcE9Ba9rLckU4MyrZDWZxyp1y7mZZt",
  "key1": "4PEwg8vGiXi8gnnRmvzm7BHA9kw188JrwTMAaKmqCgAkQXJsjkbnq9gaKZr7j2HCFwysKehEg4a58mD4NdBcPajm",
  "key2": "EFwmdNrUcnR7uWzdfKnHdHsfWMDQSvjBYeKE3yucrv37wVH6UgAQBrWGe3E95Esg11BCRCHMvqoifYb9kyYvs9L",
  "key3": "3DPT5ro54H2JmgSSQXsfKRFT1ABZ2FV23DWnZHGAnJmbTgdX7oSZsHULUVmYYNDwscp6WFqe5Z8EEKbiBZpnifbS",
  "key4": "64vcmSJAcEeQvhSiCBD42Y4zuEyYymgVTfNVXrt3KK3FWUKguMQ9c9jmEUAGQ3WGHCF9z7vjfSwvfJtSM32MnjYd",
  "key5": "5CTN7RvXi8Nektdu1ARKdYxtRbm5Upt7J46oMZN7cUXRPRDcQNC3BCcQMucKk6EGnG8CWRS3MhzyiG46jkkibixF",
  "key6": "4ksaXv5FvmjX1jYdAgeCTGX7j5HvPsxzvtyCGV3iwFpNc1SVyxmMzrF7yA7HXPyxEHebL6UFxJYJUbfWZWRGYaE5",
  "key7": "67amZKyJtoV21cSWgvNBEKHq78DPrVqh4H6bv3zyV5XaXG75cPzqWtCM8t6rSt4TrsUMcpe566YVNCqjADGJ6mUy",
  "key8": "5uPm4zJwM1rmY1U4ETNRKnNhFEbs2AY1zan4FhzjE3QxxBDSsogqMwwzXYHcawcUXhNFWkwQEq5amn9KD3SmXJs9",
  "key9": "3QdZU62swQQScPhaTDYLAF9iDJPSguEs15tQ3sGRkuPec8gSUfRQN4euy4WTYNrY5fg6ufVkBuHhwFhPVMBHrvEJ",
  "key10": "3TTsqNvihVuTu8aCTt3Dy5JLSnPjSh54HiCjK247E7h8ain9qH4GVuMtoY4hz6Ke5vm4sVJZb71spmRG7nYsmoAy",
  "key11": "4PjcAZ6errLS8KYCiaXtvLCTKHDDxLMh4BNHq2PvCNrSuCHt4MiYL1nimziuVzzZp5ZmicKzQh9tvs2WXt99CA7R",
  "key12": "5EoyVJSdoLrWKvKRgwX9JYK7vZBgw4DbgpYzSr48NssQdG8jESy88xHCr3QyUuYmp12eNtqizXVvP23h6yA1B8fo",
  "key13": "5GznhRasxrURJctfHwSZrEMsyEZgJnNnY6F2rwWT9X531XhQFL14LpA8duTJMyFNefzndz2TNwKEwuio3vjfWjUX",
  "key14": "2WiibdPMRfgY2Uhz7xG4t32xyKZCKgG5nko3TQTfb1n7i2kBYFfxGRdwft1PgKTZyRqjcnbp7a8RpVgZFYYggjtm",
  "key15": "3GjmdNuSpvhywaRx7JFTeY5gZJt43zYAt6Py5v5unW9aYtEgdJZ9Z3GPf5XYYanfMJjYN9XkCsnRrmrhZWpFQz9o",
  "key16": "3LvJ9Cn247YdSDyHwwpFdtojCLnjA3tagxmpLTS3qYK9aRkW7j3GZofvSE39W7ubhJaSFRug9GQ4pBgYNdWjLTHA",
  "key17": "3PSUGvVL9bBhxQEwVUTgJFhDS8uzbp9bBrT34KG9fFrTdKUeqveAYNrLjX8VPxgQYQvfyB9xfX7QsZPgxtdkZ2wR",
  "key18": "2XsW86W2GDWq3hNgpsGgBJrhaR3mMeqc9RcPEYsoHpACn7uNUokJ1HRC85Rt4B9AHCZvYUm21r84FZEih7cEyLHV",
  "key19": "3AiTeP8k6R34bxzjbHoc1u2HSJnTZ7jAWGo8iWFf3iHHbNx6JNxJP6PX79WEEfDQvdv7TMr5Vh2a75hKvDp8MmMA",
  "key20": "jhcRnFSgXL3kcMuvoqEtr6WFAbhkGDL6oixwnqJdEZbbRRa7tWCb87LX3moWsyu7Vj8H8ait4iFs6akwZiNSX8A",
  "key21": "Q3vBRG1a2FSFcpHgtVpMuRQNMyb9kNNRaaDbxGUkVLmCVmjhpPg8kras29KE7VrzmZtCw3oUmKRwyhZ4Q3r3sMT",
  "key22": "3BYYK6yjh4v5jjM28nfvB9kcbu6pvXAb6d1ABMCeN8PPnVf34SUDyT72refgYd4XYtLWDyaUDQZ7LDeVZmJjVwme",
  "key23": "55fAUEVnhwq21BZFiM7z1JQqHUsGkabY7wjZqFrNdT8GMZGioosED4uTBWjPxo9GuqYW7AweMw4Y4QRmwiDkiDz1",
  "key24": "21PVkdYPpwhS7zmPmZr3Lkd2p73sSL6kDh9y5yLcBFU7dXCskc9T2NoBHau7Yh8y4XXrb62NEjP2xJoWQmSxoYhq",
  "key25": "6wScXYXoGoTiXjrFpLx9SmEpDwwJ2eQScVP12W15K4enx5yqRmnjZM3rU6UEmJfK7BSpcjSpYKfzNyWTytJ1rsz",
  "key26": "3ryZHWahQSexpq3iXss42HYNqyKFJ38wLfFskbMUJQd6iiC5F4phdtrYRPjG163ifeEP8bQJfjdLcnzVidaCQKSf",
  "key27": "2PJwo7LP6rXdpZ3YwZfoY7S5c6vc4uiQc1R2JPLTAh1pvzyaWvh6jxZsKjQ13gEc8uwemEgFeGmhs6qm7rreg7cy",
  "key28": "AkcU1ByazryXyuWSkCppGq9EUGgbegd9KLogXFaSHH5pdUCHM5jESn1NZhNS27VWz8V6uHfhcz8JXxhenrLEPj6",
  "key29": "14uceEr2bXzoPTgKgLzvP5o7UEFVcvdeBwyX7kGmN3Whn1SqrZ9eijzBuYfjUcWbWzp8cHjHWXuBLicoWhiBHRw",
  "key30": "5Drj58Um7rzVyXcXDuu4hMGPdCmoKi5TtHPg4zxj5KKrqF7cJQVaZiZL9ymTHnWtMUTAcArF3NeTGP7DfoYxqCf4",
  "key31": "5tvdJuWgZ1YjPWGALK7a8NmUt1TZUgU9E8Qsb5SLtMf3KwSZNnmQXmN5WgDm7eT2fceiWWwGGowzEjfxkLgfWik2",
  "key32": "NJCFvS8cnwEjmrscDHsTjKQxHAYDVb1i6nhZmAqWqt6SgvWMSAaeYCz4WnjuH5BwGFDvBb9ku5cmvtN6wWJZm5n",
  "key33": "3GUfmRGqDWthGETb4jnmomn1VXx65XLbknA9fGqCrLKToT6LM25VNuNA9d6URjKUsUaLDQ3Ry881WZLihjwNSAJZ",
  "key34": "NYH3Uw3xm2j5zznRRdpGcuUd12HJXALth4RNdjSjWTELCga55mqZ2JDnuVQnPA9wfrqLNSPRoGMyum5SRuXdEbg",
  "key35": "JTW4oTwqkxam6qTjjWPXwrohuLBQsAkHBhCaY8xS4fg1ZqyJ78fxBNpEnTLko6p7aNjtE7T8PTUKJJxA1HEXaTv"
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
