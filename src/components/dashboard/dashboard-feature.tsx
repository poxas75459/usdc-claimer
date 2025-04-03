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
    "2pM8jqL7hW64B3M5ZvT8b1kkiyHKgRwZpMNo1yvQcSw6tnYSPmVZwBG9UAwqZLUkzzMPznKJvP2biejWxSp2RuLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BiwWvK8d8psBUZtZf4tPPdShRxd4axygAj6FyzMx8SeEf7Xveuryo59Zw45VdNnAWpAXPvqnQro7FdZ1QASCPLn",
  "key1": "4QXwWciRFdhGpYmaaM85iDaaQxmBztRJTxQYVCQXEQXZbPjKQmWCZz8BGK1bnk1KtXr3FYPhVFt4CWo5AdWqFcb3",
  "key2": "3ydB5U9zDDyP7RMb7kbrGKemeJQJQczcSdXC7G4iyv5BGqyMk6wG1zMx9Ripb8sS5kBvD1Bjh1xXwF17RVBBWBkL",
  "key3": "ydrneybBS7xWjZCaz1j1tvgyf41ep8kzFeZH9vKPQkJtFYfgy34vp95uithuarNQrjQG8DpE7HmRqiAfERZGU8s",
  "key4": "2jHniBCn3yCySycpacrvs6D4Q4KjYioMeWW4TfsvEnq2mEbSMiH84DEXQcXnNves5p6gTmy4mL4GdcXXNKK9NkLy",
  "key5": "4sLQo9jKF4FErsw4gXDeTg5TmKHySAoiQAUu3qcF5TWv8MA4cySZDqnQLJtytZztkPF6fHd2acxznBHekLvZbZEh",
  "key6": "5yxeaRLWftfoN5S2VjFkCvHKAjEzd1KTn1EqcnuqxrcyF8aWHHWeCT7SSXYtPNjzACkk4EY88EP1jYx6jA6a7v4o",
  "key7": "3qb9YqeVTiFM7yeziHdDT9YCseFjHhWetQuxGqgRAeJMvsyEcXwGkmpKAJgZEoJDfSdh9kyE7tV4pY8gT1dNwTme",
  "key8": "26QY7gCvJbGJvSyK2WFpmz5VdfmLjYSsk9vcToxApbgMoUxC2kWNBNpsmwsKUedzVeSJHz511ewxL77tTQGR63sg",
  "key9": "2nyTYWfCDyYeu6Xe6bMB2iED968yMjDRYoKcCV8ADZYPWCL5tR4CE1FLsSZjW4wc4KXSecy3EXdvGKcgMGjiHK4j",
  "key10": "4DEoftabR7v142tRSXL4vH7LPUeAzWoQUVNHe6y2Ujsui8HRbiPSBciJHsyHQUDjrzsZC1CsUm8nQMCQTFXEUNb3",
  "key11": "5awdpFCN9P439y4hQK7Rx6qGBoXhXSiC1ZXHYbfhe34Lwgcg3Np2rL7C8o5HkgEQmbjW8fzgHKpuctY1ex7qsWtD",
  "key12": "2Hx2qcbBN7EGzVK69igD1s4ZeDJEhuVR9WxcHXaRVKS66kH47yDoQq9ctMYVzJoPXGuvhGqNnsDXoeSnQb7ssnC",
  "key13": "2u6qorrofyoN9g3zHcAuCXSoRxLPtiTj2gNNFXJSXJn9QntjbPMqVFdYEmKbjhDszmhxGocsHHnboXrc98x1DRhk",
  "key14": "JVTUpkLyGxVLQwbDZRiALFmAMC9Z8cYkgzwCixewiDDD6z4rNpph5KGxsPAPPJGDkh1WD6ohPuRqyEAAP13znd3",
  "key15": "647nGfHv8L7DLSpztgNrVKxWDNxqRraD68LjgdHQi4c89fcCMFZdYGqZug7pVSuZKaa9Nt27PbL513X4DF6sLxvj",
  "key16": "3tXG7rxro2GxBaQLKwNygdqkPNw6dgFkHorD3dk8rQEdDw9eZpkgBJUs5pUvdgZXjRSSXYeYJJ8C1L8BkfCVbr7H",
  "key17": "3EU3kCVRQwvvLgZdeeurcyZc3Cf8SsZxqpZ6iZxxRiPrQWXzcCwQg4JBsme3m6j7xVeaWzXzNDGRR8mscAJVwczt",
  "key18": "3heVxBn1ikmyaBfPPtc2DFn4i2kovoWxuZyJTyy2fx8vy26YxxD16T2GHrnn6HGJ3yaxe2FfAw8BX4Bdy1VEeUwS",
  "key19": "2gWgTPZt5UH7pi8EQzRttqLQpKPyhgWCXeny9Twjok5hqnxALBpXV4QtG7CSyJRjRKVhv6WckpdM69ukfE6FWrT2",
  "key20": "UYhTikPN4eCMHqdngnDcu1HMoCdqVqsWrgMgSdA9aUAsF6B5AQ51KGN6z31QK694rdQxphdQwiKgHmF1JaXAsgQ",
  "key21": "3bBNCXq7GJibhQ8wRz5zo18jnGHPgfrJtc9GV67twLvjsT3H3YCSLwQRQYDctUA7sqj8iPb1ebuxzp9UJMCQLgU2",
  "key22": "1c75zAbw1JppuUQ6may6kqTHD1Te9XYRjqDXGdRuKt7sJfNNFT3o5C8bXXkHfNwUmjqBDxq4q6dGU37sysAVBXD",
  "key23": "4YKC6ZLJq15qWQDvk9S1T3ec9o5vJdVbCoQPznJ1AWVSjjubCYuf1kTfKAvCF2D6rvrcooUcY45jooaaFVziJkmD",
  "key24": "3pBopVK2q9Gj7f5KMfSghcvmoAqWZMMWupUMhtaUwyRiEjTPwhnamy7Bm6es5F3qUeLZSakrx4qsu29fkXV13ydL",
  "key25": "4JjeNp8vCe7nhPX47f19ZJCv3y7TxKf5ePQAEDPcvaucZ8n5tB5idBDbwcXG72MU69CYT4TaqWQXzYMrxet8ys2t",
  "key26": "SqvTijdmFx9skhw1pjcJ6HQVyKDghEwNfqc17KiHZ5WCUjThdVjawiP6qFkJbcDBHBPZ7sDHdVXUQwATwgFduxT",
  "key27": "3auwgxvTHU2CSJ9bPcpnQA79qDMeziCqxWPv575qTeF8tFB1mRqSt24DVuSBu8TiFSMB331N4i1ue8N4UiinJZhM",
  "key28": "2HwvPUceYwzdjZkxwKtLjMzbYAYUckkRpMfG7oz4HaTznNZiqTmCpPQfmDombNnPw6saJq5NGXceRHAWyLk7t8s9",
  "key29": "YNrpVgL7JYjuUbpDiqEw8cad4yrNagUT2miRcL1NSeiWe6h8cyxiHqAhRFZ31ZYxsi5ubEz5echsrqtdQ3ojfVt",
  "key30": "9SsNgxX393W2Kv6dyE6QuQPCvop8DiFiCz3hvM3C52MyKmBswCufmHgM8nY3ri6saTiKRaqq4SyhwDmsMiTD4fk",
  "key31": "2Lh4Gi35mLvJUcU45Eum6iUancEAeM1uLXdkWt2eigJdvK6qHhRe6sjoGrct65HuJLyVmnCYST5vDBjRFmcULTjB",
  "key32": "2i418U7L32KiNtqyVhaWyUNV8ea12ebmrAGVUcrgHLUf1WwKVQwZ5Ze6YuFiFfmHsTTzkGYqFoDRaZAyQ3NCgBSi"
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
