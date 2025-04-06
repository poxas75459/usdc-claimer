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
    "3HR3yxu9gjiEFzS76TJUWaKnB9qnBYnrBdHXL6nX676FsZn5LfFq7dxnPChHSoY6ffqhokh2BxjHDo2bd8djkqyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9AbYA3H7KiUB9fagu8ucvp1YN7TNAfSbgQ1xbBxgBugo5zgf1G24Vt9um6AR3mLJzk1ZaXBBMQtH8HA6UpdiKe",
  "key1": "2zL2ZokiA8jwzbwBssw6kqvjxY4kYU58f7XYEiRVo4VA51fRmnmXSa5oDYrHUXkBFx323JyJBMPB9vuRaWicKxxt",
  "key2": "58Ge2AYdpWkAV19Xu6aBfdvdmTsV83t3xjsEtQxZbYn6FpUzyoS8ee48uYQxbrRg82wUc7ap6eur3t9ADAVzfefe",
  "key3": "eoZoFxRAzoX7xex6yVxzNERKxwRpqmrQzcswhQADXC8rMonZByiz6PiKb5T527enCF9LefQgmBnoTZm7xeWvwKk",
  "key4": "4bSu3VZyH89biE4iBiLhXhXiGUpNddsArNb9ycVHW4ZHvyhEn33Xk6cHBZuhsXjV6wLCfoSByexL2B2RqgdLiigK",
  "key5": "474GS77F9spLaAa67eoCoXPVxTsvsj9jteQRJH6N34MR6dLgeejnv3Q9z22CVfDPJGeYSvoUDX5mbiaYhMDLpBCj",
  "key6": "5DcLgdbnpudD5WLkqaHH98QoBC6d4HqHmKc8BBfkVRVPfgN2BRBJ8teWSiecaYSpvhdCETmpJdxCeXJ7KePuxSZt",
  "key7": "5vKRrJ1m6gGgXPQ2Asrxfmg3VWxkXiMr47nHriPfCYyTy9qBzDf5N7WNAur9iwMSf3KKkEiKQQQPMdRafT8eBVjS",
  "key8": "6hammh9oeNNcMxM5wdprBC8aYWVxvQ8Qoyf8E2gzteAh5rDu9WxnBss7ySimMWAKb1bKZDnGxwot4yJ2uMDtPQ7",
  "key9": "5QDY5oR57ZBJvBgeL4zJ9TaatwUB7Nupus4NZNRUARAmPPdGFCw35dKVs6X8h5s5WmxhuYWZMNSJSaLmGwdK2C7X",
  "key10": "YA2sTvx9QDqyxZ3TzG4bGzoYzGLtjb78tJTnJ3xQwmitMJJjamubpswuSWX6mY4EuCZa5LfM6WHK4e71pwDf86D",
  "key11": "5Su2GGuq4npu2NKAYFy6XkngJKFF16sXTqGdXZXSrRq2F6A5sbg7toNS3CrKi9MQgapvHpeXE1jBuFojpiQCv9ZH",
  "key12": "36We3YWa1NF1cJozH5BN57GXFyaVcvhG7B8mUz9hGP6UAsvSMqDgzywoLHqok4iBUzpqwScrsKHA1kf7rjXz6VNv",
  "key13": "642wmZd5yC8yNxMkorbpEegNJkC46CNsHLjsCavuZzUazrJD2mVf2amuvMRvAFQD5Wi9P1HtMjM5ZW4XHgm3y6XS",
  "key14": "3FJSKYioynCL4bZgbhEC1MUQJ1yUbXyjNh25zrX6k6a3P24zNnHfcEgsmayr8TnbBSorpUXyHXac2vesHxuZQJoK",
  "key15": "66vMpBdTjBmKV82194trwLPvDYUMHrshgDRcb8RfmyxqRBwy7DEBXN6pg5iPRDRGm5fDZopLDcNPt5oqNGnJYGbN",
  "key16": "5jGa838hXkNDz8qhj1nd4YxMqA6Hr5YU7mtwPAJs59KuUrzCFhnV9EFCd8B52P9bF9o3XCBVneXb2RxmWJjFSdez",
  "key17": "3jixecmzLHQuMddP6N1MryaW6NZXUoTWMQiz9JA3FUXhjmiQNfp2nUTpPMwxkW4fLa2yBs2Y7c259XLWpU3Q1sW4",
  "key18": "r669VWQzeMi59HAiHqWt9yR3rHUmD4H7ZCX4NRbZ8ZqL8BBrfBnAnARd2aG58NHUUdWRJbFYW5Fepjk6a2Na1AE",
  "key19": "2U27H79cxnE7yz9AVV75BkXECoE1yrGkbu3p7Hhq1TwSUqB81vDrbnPiP3Ds8rpFgKhDYJpBdWZ76pk5S7voNsny",
  "key20": "o8KPkjS2x5TB48j32U5PNUM4xXyVawo4NFKdoR6LkJpZMXjAmHMEQq36EqdY9LdpmPeSZS5HurX1p7xz3PkNX5q",
  "key21": "2BVguEfNRy2m18xkiQaLjvoGpKZCYe6JTJ6ADaALGY2xzYBnMqkLrE8ybjhjM33EeoWvHFHqEFVJETV8GVWA4uwT",
  "key22": "4uAsVB3iEiDV7Ucc1PGLGX5uYiP8m4Dp7t2F5sKbiTBxdD84EhfFAn7fMMBq4j6XHG8M7bbP5xXRC1VhP5Ka13qo",
  "key23": "29PGp5A2xUkBJ8KJBC2if2N1A1JmJ4Mkcy7X4gYbx68FhkHQWMfzDouBUS7by1BkCY9jAEcawHVM26husT4QCY6u",
  "key24": "3WdDHGTEgkk7r5g6WJPp79RdeCQZBfRXPikKVBRJDHsc6TUMy9kaPskTmEhJJAYb9JNRjueN35QootUMfV1xJmf2",
  "key25": "5wS7939B2KCXGDoupvD3vJ9952buo4XyDY5TUBvmFs3K2aDY5TZH82jT99CNZZiGcpoBM8SfytgUcLnEoJoEPMeD",
  "key26": "3VS2x9WWKhwqGhT1kTVW1KQ1JuEY58HbMj6QxaCLs331NEGTcd5fUFy4vsFcAPML5Xw3g6NMtaQNbeeP4hbta1jb",
  "key27": "2dE99fU7u6MrHLHRwnsP1dC8iAvkNjnaHwKVxy96BCJCAFUy2WeHzNAcqBfL34zYt4LQabzGuEUw5SspxZTEFKNf",
  "key28": "56GF44TMmW9EJqAEMh3wiAMchyC1nDGr29maxxwtq4gKJfSV7JnyVFbLQcAK4GXYJE3iuDb2h7rBooDydMJGhyBy",
  "key29": "AH3TSYWAYjxHPPnaJQzZg117XFBNwXKNG53dPFetHLgJMRkFztXKuzTaXbnXaU3EdSPibFQB9QxBJkpQmvAteDa",
  "key30": "KV4Nv1hk7p5JyWFaHwdLqriRoqo5X6wv89rkyohXZQcj4oicdCwysFrJX12nrdxew42yTaXhqY2ccJfjTD5rGvM",
  "key31": "4sYE9UG2x3XDgXepZnnXb2Appb3PZbfeyyrvNf9X1Cb4mEVtbPFWmAHs6eB4mXrieQfEMPj2HJKErv56THmVX6Vz",
  "key32": "Nrkzxp564h5DzHyLqCSdScpc1XpEmSAJ4PyTTxzG4UE6ozucy6oGLxya3uoW6aq4BH48GDR3fjKfuDeeSFNADmS",
  "key33": "2YdfTZpPhCATThRBKTK4g2acVBmc1rYaVe1ejiZizRCsVrNTH7ezeRugQ4EEynmMv9PZF9s2amGHPcwjP2QhtFBv",
  "key34": "5ZXAoX2Z8aMtgRXVMPSBJHRR2tqvSMAjAAp8goiwPGZRu7oT9U3JDAa3U4YU1Bgt1jyRuXC3Zt2jaVnneVktiXed",
  "key35": "4QgpcdWy9CMzuZuW31tmB9p25hrFV7VFNQNh5NR479pU8fi25SQ5FdAP4A6RcLBKnjqHnphUKzcmz8YgG8ydmi2z",
  "key36": "54AeLNyQbzYV64VQsLSpY44akcTjbS9qEidZuUjSEwpbRmVsZfmaARdN5Ab59utsRNevZc9MWLL7pe2vm2yeVYug",
  "key37": "2aGdvkSh4fQSDszid5YsDWNwvWbZCy287b344CZCCQSUKHDdZ265KWUX7ZK13ZeWcon7bVB2gGiyR8s9oryBcW1i",
  "key38": "MvcLL5g8uhDuGcYMFGFW23FbME7KzabJKPaZ3d7dgmzvwMrHcKiqgcHGzgaZFjcmbpmp7werqqpomzpSTrPHxPT",
  "key39": "3zSB7AoT9cSqrL7CEo4Nsvma4RrHsU6yCuhsyQCbxwtuDJ6iS2PFvKTtf1hb2wpnMNZdDcra3iuYqLWEBSJxVRpf"
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
