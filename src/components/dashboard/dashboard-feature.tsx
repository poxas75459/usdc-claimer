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
    "2bpiPYGE5wUSvnJejuHLJXDrkjh8jpqHkdMjTekWcRP9sbkr8EnvMMeq4jwGUZQQPDQgKnaXR4CCMdxthHy75z19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3Fu4USxwxbySfEa4u6avqRt6hFUvL5oFAv49iMZJdbnDfSdjsGh6PJoFnxzn69hXJkDpr7CYjjietEpmVC2Uos",
  "key1": "3D61SmGSBJaPahKVT3XBFVxkV8vsgffhAg55N8w2vCBg3R51JPXFDCAR92X9gZhERKU6CaeCPpCsqFZrpaUVm7w9",
  "key2": "4aiJYPYrAyzxrDdnu14c87ci74RWTLHXzxW1H5r865ct9bcn5AgtiRgTzyoxtdtM2c8PjfT8mNg3hrvb2iAuUKJk",
  "key3": "2KfKLH1BsKhsdDn98oXvd4TMVeDm1KNpoxaKnvMqgpdZJfFiE9mpBRNsgdJ6zQdzeZTcr2niFkr5Mx9rLBgKrPjC",
  "key4": "5jp8LcBDHM7XUBN8MXdiTDPjq2n9FCdqMaySWNmi9d38vJncb5CF65VTfgrAgunxiMUtnKSb8v1NcZjkF6MHXMft",
  "key5": "1UgnrpH2YJtDuDnuobzvAYdE4oBRQQAbbRrz7hj6x8D61u224GCvBjywN9CHBvZzoievsR2pyzpUKF58XhDZBi2",
  "key6": "42h4RCU3xkVRAKe95Pqb9c4vJBNxvfCxpqkndQvBeLyVwpnGGKiWZyphXPbMDXRpZqzZT4SesqAxBP2NtHGX1VGA",
  "key7": "3EFDuWXkw4XqpkFq5e8ue4oPpt1QzJ6nGrDJ4PCNX7h28zuCjNihZctkxa535CRJMzjdRcqZHgkQjjSqEM8CD36F",
  "key8": "4ZEebbJRz6Uupch4aDBkdQRD3Ct4UQ7pETjDhTbE3P8E6NS7JMBh5fLVC9xNzbzWdSfSGGbYqSPq7VxyE7EdSJgc",
  "key9": "5Mbgjrc9WncvveuWENiSQB3mHwtRBKn1QEezdbUiatm32jYBk732QNmZ7UmEjTNczvMXjTgiMMqRp4kCM4kFztmH",
  "key10": "5SoWfRwELgZFRVxkgm8HyW4GnaadDCUcJttUHKtR7XSu4m58kqZQLvoCXeHYM1PeyEuxhFWmZKvc5zPhL8CEc991",
  "key11": "3HmMs2QkcDL9rDBHsNwczDMEkJupYvwCZyuAe5bEJWzErmLu2yn3KfqWTtdwSszR5YyJJtvAQsYW4pwgNPRs3LwF",
  "key12": "4FNSoSYehphdckYze1BiepmN7TyenMmhsoqd64hZJiZampUgEmbt2JJ64skRsdVZQ7WaJWa3np1Tji27bG8s1SzD",
  "key13": "2QRdxgFkrz94gWoTCgogcNVvujQDQronUvxmoRGWYycdudUGewBUoJdqsJzk41qzp1ihRcEeS1JGB4k6MvMSvqCH",
  "key14": "3HK4zJqcFeMN2pryQxjZEr3R3Avk5m8LMWBwNDeVjLvkd3PwCgGkTcJ3SAPtLKKdQaHaMPkCKfCBaB9vSK72EeP2",
  "key15": "3FVb3oyMwZpzLCnGFRYaXA3zBHQ6ey72JNXcVRh823qNsKESJBj5bmtJ8M1PMqFiiqbuDkwc7XRn6wY3GxxwuEGy",
  "key16": "45yx9yHpkDYVzobM9ZHh1vqCX45YXGy8V3Hkwh4qRB2ezhnrBVKRY4jFReSMPDyPvS1ww17QTFeYPniJCFQwizJ5",
  "key17": "44PFgZVnHzAyk5QYGfBKSvLUQwjZDf7TsSJjrRZLW1bMRgsDMKYDmVaKv3mhwGpC47D6pckBXY7EMupmBcFcRUg5",
  "key18": "4Z2ScLVf78TusrfWtEfiSTpkasKuzUoCikhmiju6NDgEcjBtaTBpsziLoWLF3KMvNeBWVbDA9ZnqeMtWsCntikd8",
  "key19": "yhinLRLbvdcrWv84kCKmpoeUaZTwtGwnunhzDsKovi8qht1q6RkJcgWnfmMXL176iUCcPD44jHXhCYiR2zv4DK1",
  "key20": "3RdAVfRR2qcU8nw4uFokauxZ6xFgwrK3q5WnRNQj8P1c2TsYtKyCeUYHsLtXCaKn1pxtxvMDYMXy1rMsRyv7hHe3",
  "key21": "5V9kJysTfyAq7MTw9ChL7xK8hnmypcNddXFSJSMnUMaDxaQWVPC3zLnnMCWpRkekT4GvQd6iTW6vMkRCFgSH2iBW",
  "key22": "2GkuLEwM2ov9E1ci3MChJrGvAcxs9NAotGaPtHGLnDqwxnftnxNs8vmNbCT5bNETCYQvCM7Qanj7RovanbQBFna4",
  "key23": "399akNVGNqjWznf6cPfB4Ah44kQCZ8JdTm8AshpjzUTqz97LCxdQ3amrkHMag4UeyLn4duqXHbygn5NkGY44pd52",
  "key24": "53NE1ccBXXC2WRQJ2xA6Fsao9HNt9i5Co766RFWFa6UNgv1sTvHKhrg4bV7Ze54pGE54bZTzb4kxirDKF3uyv9eX",
  "key25": "52cdL5cQ1ZB2QzYT8P3FgiLMfox4MQvQYR8NFjtSMNFDHNq5uoEcEX3g5tpp2ehzAUA7Q3wP7xsKL7T3G5WdZNve",
  "key26": "5d5wnKp9hhWpDr6BJR8GqigQZLCFcGD2nqWCgeP4jN5kS3em1JdJGXTNnjZv8n1PTN8v5QiN9tQDduLNdyS88jSm",
  "key27": "4rsDEUf9FYhDDTw8rkKUAM6iDXYpetdx4uN3BhPeHxX4A3yGv75Cvuy8tEx6N3AeosoSrjsK9P9DwQuFfEG1Kwdm",
  "key28": "2jxUdEy8ySyvJKdrYQc2kgikE21GuyPzAvG88vzb6YbGPnA1RCZF4y514JWwA8QmBmypfsLrJmp6CnLGNpdMb19D",
  "key29": "3wN26VYgyBJJ8tQJciixPsNtSLPE2QtfUNVGMA7PNajhe797mXmZRxU6kcXiC2Z3sWEp4Ka4sWYpYSvDqBmdNmHa",
  "key30": "6YEuwyukwo4BW3DwcXTb5eGGVX9Ytr14tnWBkZSu9bYWZt9YQ5nDGCxoMM8wrdStLUXHHPUjjxUT16EyN2AhLuy",
  "key31": "25fEM4BLV17EHvzHucedJwmckVddmPBrLgoKcKqpGavvAP5Qys9i1BoLhq2z329Mzzik3zcBjLLa7rmXek3rebbW",
  "key32": "JchJ8xY37fpToW7YCuFBRZepCWEFFWXL1vmoQJVYw7gxnuqMMo7sjsiaMHmTdkoqW94qJN1oYaCAhsLPLJkWxYB"
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
