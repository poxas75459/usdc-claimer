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
    "Li8vDEijsBXgQHRhJ5fj1uTs1JKyZ72PS5LRdgJ6iMN7VSMHqZq4kg1HQrL7hsVWaeus66Mf4WbmmUV3gDVGgNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJLwGWKBpa45qGYpUPo4iWLNkKvZcVmH7vaq5dyjYUm13UJzmTnN4igs72a4etm9JFbtTG9YUruTVwiWPfgoi1",
  "key1": "5dX9i2Xh1jbxgYD1vwiWLu6J4MnhGp1rk3GSnBAQwqAt5pN3wBwUNqMV1ABZUDbKZhgwFN21d6AR4MRqPbGnDpac",
  "key2": "4Yo3Nq1ysdKzDMxa6bLzd8WADK9QWfcEj9QeLGc74aviSeQLw9eEPzckZKwak7u77ndBAJFcV4DdN1NhbhbuSe6E",
  "key3": "5GJjJkdFLg8U48B4krPo5n2rK9JQHj6v7V8zx89KHQ7PKTKF665iF8pMKTGKHSvpud9yAr4arYMj8XnCmtCgnBVo",
  "key4": "1KEtvFrk3Fk6hhsZnqKkhfaaxw7QS51RE5en9hTqAQHY4SGKpZ8umFPbRMdwcuaYPpM6Wjxy9t4t5haTKjtV3Uy",
  "key5": "N8rMB1Wwx6rUpJ2tqHzMEm2epom4WeePht7ShiT6hMkWCssHvhJBRW4Jgh998Qe8mFe8ombw5amPgYPpzVza42J",
  "key6": "3ioTHBDEc6nvZsWwuQchp5jBAjQ87y5XQSwW7iwqLw2nre5vQDLbuaniMEV57PUmUdLD71zJFvT5ey6DxgKSrGjJ",
  "key7": "5dZmCH21M4nhPMK1eVctEwUZDNFikkq2bU1Cc6Fvy8kngxVb36C1XqhJzsKVciX5Hsrr3kBbSjTS2q1XNrTDZWQY",
  "key8": "2RgRuivJWauH4ubnbXmAN41rVGSF9Nud9dgrrcakXKr8KHxgp9e15Xb3SwMfAedajV8a92czuRWi6JdZbTCnHXxL",
  "key9": "3uwAGNTKdmx4ZsZh4UCjTYGa8DEjohXXr63GJneSUG1AwBFoLjewuzB5ujro3Y1RFEGNt37NaMd6bt37tPz8UxUw",
  "key10": "55XdZWFs4PTprqDL31nLHYHcjnHQukzDozuYLrRujSXURnoN4dUiMCFYjRudxG5XeFtyb3wFncbdPwLYXaC3U8Vk",
  "key11": "aMBpc3XNW43rUrYL4htFCMUDSTHnMV7j1o283Zev44hAmNHjEs1vWCx85C4oQxTNxZSYRtj7EQtE1mujZXCuwgv",
  "key12": "2Xst2r5BAfa5DpeJCMCNcbmpKpw88tLHRXDujcDEpvCAUmjRLtgwC3tjMEkkPvFdgWe6K1nos5kizLfn8LJg9L6b",
  "key13": "49q8XWbsiujVb3sZRykscHABJMo7aitMPMnMAaSPgjwrSPQ2zGYaCFGmFqg8RryJqh4Xp952EznCeqLKNp5BHgNn",
  "key14": "5xvE5umNnAV87hrdfd8B8aBfubfZyqqvkwdnZsDZSLh3deuq8gLeoNTcHLSXnzcA5qLEYA3qAwsobBLS1GDspgVb",
  "key15": "3brG3zsMGsd9SJyCvq5T1ySPuaEdjz4iNtETdpyEKCcN5T1DdK7xi8mGCBd1aiStfftkTNTN2WJdiMzwcaLy5WDB",
  "key16": "5ZxEobyVSUHLMA48YaKemm31SmNTqnQAeJKyUXcP3k7kbPGEQKhuVER7kbZej3csWnbL3yBrCH9vegQB5EhPYX7J",
  "key17": "5zr6KWwu4QW5NoLkqS2q7z9XEQcRSSR4ZA9MZauWCpf9W7SPJK9PavBJBUXuyMTTEZtKs8mR2J5ME3doMYvRpiZT",
  "key18": "2DmjJvfpSbeYKzYWxM2rSniknREqUcXCZToPFNNsGazCiZz1FyE5YLqF7jDKaEshuBg5LtGzYbzgUdXmRnYdBAt9",
  "key19": "3dtEjoR8wz4sBuMv44MQPLA7SnZcScutcY5fX5xvxqY9p8MEt1HtJBBZk5A2v16bFpdXXqcDpTG3n1yP8kANtZb7",
  "key20": "5t3a2M9AWjUb8XPTm6ihAX9Ak2j4nGbRhBUVLsF7CfVZnSzL4eka87c9K665Xigu1RVgaEnFQYRBojaTSH5d3ypp",
  "key21": "3U3Kob79esTMukAYTtET985RqNtZpVDX4EXPaKyfYaSZjuoDMSTa38oQVJui45JYPtxus3j8igTt97fL8rbGkCAc",
  "key22": "3HdiSavE8UtRA2XiPbv5WC7yb1DkssMw93J5jr8NDHBeGtcbsZGoy1c6TmGPArFYR5KRQezoXp1qoWA2AvZ9XvvM",
  "key23": "3P3MkFa5TCEutXeYww1GAps2Dook8eddndSAgZcPQEjy6jP7Jnn77H9vqCwzw2m6QbN9wbUJMmymWR8gJMG8qjsx",
  "key24": "49N6fwpMvE1MtXfWkU4oU1SREjesnDCMqSXZgQFvUFjVLtfUGDfc4TgZWCLyXyvZG12CD7vzRRzUeAczesgwQnVM",
  "key25": "G2sQ4ATJGvsf83E3hRFkSDGqPvyVuN8MLaooyxVdaiiXRixaibNe9afT7DtvxyvBrXm6YuLHxn35zSi9q6frdSY",
  "key26": "5jeP9QWZQ5JCzkssh1X1uprK3Yhhtqbyq36CGLCkjBoYHgNYhitntXw4nUqxoCxKX7XAmBSbmSxJH4QBuCiUveAB",
  "key27": "7kULp3EqBBPFFQawJXg6FqBL7tqxzz1ErfYgxQHhKeN4CZBdQhkrkcnvyLHkp48Qps9fevyMruM7xSLdf2aa35i",
  "key28": "3E1uGC3bekjmMNeBb469tfRMdydFJzCVahBJCsbi1Etoj5XBAsWFwU62y1qFaej7VVKND6JwwZv8L1TGyrVxoLjv",
  "key29": "5PPiMNdKRv62CHaEoUXAKpcrCMkWvGKVZBVRfC5Ejg5WnET9GYUm78WGQCMwpJLoewgGHXMxvze1gjs7vdB2GxHx",
  "key30": "3E2pq9D6dyPjcvyBctdhA4MYVgxkhNtKNAGnDPptmKr7vGMrC8J9LMbfkmUj6cMU1U3A1cu2Gz6Cok63cpFhy6uL",
  "key31": "2GEdZwY2kumLgw24tcYFc7rDcNxRh8AnGNhypuvxEfnq8s6gRCsrVqUmMHAXaNTLW6XHYkGzPsg4qdNU8JXyTfWX"
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
