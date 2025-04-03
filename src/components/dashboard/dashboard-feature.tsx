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
    "Mb8s5esxGvAXJsfUZ2Qe9aMzcAAEJkMhyyqh8NstD6GjGk8tXexQfjUxHb7hjwbSAYHj3627GRWA1SmJDhMJci8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCuA1KVbTAC2qUjhEmiyxos4STPqpjUFtQjs7AS1XMDULzj2zehM1soJzYGRwhdarSaBtvqDq2EE9xYVwgRLG9H",
  "key1": "5LHK1PbuxtbVnuH9GvmX8WC2JUGLzBJt6mPrXTYuSn9N61WcP2fc1rCUYfMNTL4K5XPmXFJ8aMkPz7abSmhE5biY",
  "key2": "5SHSv8oXfuVHoKB1dv8eyy2uBJZb7kkb5fh4Ng1f4ggXb5ja2vRPDQuvwFT5eegkX2BTvFrtQeZSBHo828aTfmqs",
  "key3": "5MvFjjy84d6DnYMYFKYjpAuHAY9xX63NP7ts5hR2g2iAfRikkG4SiNaYXYekzZ3dYZyKsSRN4VaEvSDPgXTFyC48",
  "key4": "27WJPZ7yeeD8eNwGqLCSHP4EGwJ7N9zoRhVRHQ7QoBKvXmQpzA9gbXiMY287ZgumJ9s55KEYA3NLvee2qy8H27Tw",
  "key5": "24G5XGJJbfWTfc3nBh1VnEgNS1TbM9XtRrHmsXpYb3UF6gtaaZb9Xyve5nYFNs5C6m6ggrxrC6crcMHm35WFZxhD",
  "key6": "5u2JZUtix6QVZs5YNHnWRKk5jfsBUiC5NhdqBYT5Bnr2jGgvATZcBatDK5ir8tKof6gUwvnRZCADvkJjDfx6G5Ej",
  "key7": "bfMc8di2QuLBKxgYjQxVqt7VgyoikAGrqmmT5qTXS34zfoCyAc3EJ7UKi6qtVqDdJAnmq7LhNXRNSZbVUhnvxRo",
  "key8": "68mAapxsbf6u8gfYu59GfMdwS7FQVvSkHe5TSG7gCGSpDpHt3ukckULDoJMdGp7nB6Bzm4xzciydDoEPqf5fCc7",
  "key9": "7e8fKUebPbFXEHncQDqtAcg22Z17UNi84hdxN3v4JBWAVkDkbmnsxY2u1XNUB8vehxfZ1i3FZeb8qL7uy3Yh3cS",
  "key10": "2ufPnPvZYgMhBfrCKcfjruZjUCtuHD4smGSeT6nw7AGopkkzqshbMpbx12E8PHtFzyXAzVCw94N8XXm4K1Hh2nca",
  "key11": "2tTDS5CtjKRzhpQQ7yCpVuQHAcenNqZPJbdJtKGtkWCvmPk7WuK8JLqTfNwFjVy29vDdxFkL7uCL6tAxJYyNiasu",
  "key12": "65QizRoQ7rbpqFHKwBMk2JNzjMvwmu8qdFc6W8ECtTzuKKehUcLq4kznUhVaMgyTedbksQ2g5hU4tkFhaDdyUYFW",
  "key13": "4WukD8GuTXbFoxdnp1JHmVyhn7h8qNARGQTHyy24qBzQQj48AbwcQBY6sXXLDMjerxgNSKtBf7CWgdkv5Hshn7KF",
  "key14": "2ZCyCZWxjqCz3e7z4N87wXssqLk3G9gduQi2wh8ixDLrs7D8D8jPbirLNGrHsDR6xVLaFSjHfRd132w7LtHmgBFW",
  "key15": "5f4jEuQGLMByhYuiGfrPno1m8QRgYA4MtfvZJwvrZdn9GLidDENfU769s7XitGDSMbvn15wQzp7TViTko3jVbVYP",
  "key16": "5bX1KnWPCYt6ACA5Gf8aYbhP5Xvnj76Wo7VZcWyekNdStueiiRHT7HpEzh5sdwd7TT84cRpgooeZ5xpUTgAfBY7j",
  "key17": "4DFoqhjhgsAU6Kb38z3c1g2AGhTCo6vNmNbZ9tjjVHtcpaieL7gsypQ95uYUwbKdv1y6pVNXzUidqLztuCCfvWSA",
  "key18": "4yHcCdkNtzxNy8dZRgnwqzNxuY4wteSWGLi3akoyi8d915AoZkxcAQxirHPzT4LdwJjm7AY9YcKBih4feJ9KfSqa",
  "key19": "29h5dxnFXe78EBSzo1iwfZzXmixPb4LGHjMfxRH6pmTGrTtzCcdV6hYReNXEutweR7ksfGk55ZbMnLRbQ1fEUuwF",
  "key20": "iSLSwjrkpExc2ei1C5GcNPtmJudFBJT3sAip2mBiXb6TSKg8GWmPREfuQgoyT8Ykj4k6W9MbKnQUDTaPBiPqT89",
  "key21": "R9dWHGmarb1GRRUBcooi7noLG45Lb6ZG1mSHkExna7V3HjNhiLE7PJmhHP5F1d3JCFk4R9wtguLMtK7MDvKWeSN",
  "key22": "4Rb4aBvXrFy8mg8De1sWnAEcLnbqbGKb8WMautoeB3mbrttT113dsdpaQHtkXFruMRehbGZ6FxYbjvYiCSyGQ884",
  "key23": "3tYj3NzKvnYRnfrTbvqRjVNmpe9XBJLVtZe7dvWeaxSqKRbpRhx2aT2MTH2AsMh5s7Lcw4ZSAdZgkqXv9YC4hxuK",
  "key24": "4bhvvhfXhU4mnyDT56wY9vTHifR6mTJk3qmt3wtfMwShCExSDsssmjMHBnPatfXSJDsXGtnWmSMCL5wMQ4kHHeK5",
  "key25": "zETZLnxXJ3uLfH6YpR9ZvC1eEbg7zq45qV3BSmAPzpRE6pd9gEXDF2cnp5zGL9gbhqKgc7pqAtxq3fNu1UtR5AY",
  "key26": "uGRmMCpPkVExJYMqeNTUBoWgZKE4yCYRombS2heNc14tMGpmTr1fEJAj5KTjKpekJbNa9Tk2UUJseWQ7uYKVJkc",
  "key27": "38TDd2bMjoAy3dQt6WBpSigmfAn1SqQvDeSdrMv7zZ6U5o4pMViGrev18wWLcdLgQBT3npdfquDkWjyYWudnew8j",
  "key28": "TLaVygtVxK6e3764cSNyM2FWJEYYHpBMFEZAyJa2wVJYbdMCZkA3QMXMon47goRnC9Jq5CNkJefYJGvChnoAiH3",
  "key29": "53Vq7EfzZ4yrHdTQFxXZJY1Abx3CuH9m2gfxx1msukVUhzjQCE7h1KVyUXxED5U2qogHxVk76qVhmQT59raUiTXA",
  "key30": "269rmkucW2cq5WZvjMVVembmsEMyHvtKNjYAY1opQP7yvjpx1tkTZcRbfaif9suuLGJYugeZjJxu7sjH5fjJHeun",
  "key31": "3LxmZssWFxMpjxHVLLFKEkhdWsXAD8gidazKfKp35sMgYEHN4gPdLbsvPfK82hHyySJiEuVP1pdKofey3kFTsWt9",
  "key32": "pGRJpCRkTffsd1yUUBNF1c2uByX9hPZUR9p4F1D5Kt7bGYdX5HZnE8zcZKwwB9NYoeZERfz9YBYC8bc3Yf4R2NR",
  "key33": "KZxAa1Jj13oKio4cFAUXtewBsoN2MMYtMYx27X651xo1HqqWimA1VwMBBgLXYGYDH8N5zs2uKNjHdTc2GDv3L3Z",
  "key34": "2nRKjAG2cCnzYS4rhvcj7ck3w3599QqCwiVW1cJPLSUNnZsB48Tjxa2j6zSh7TeAiNBT9f2Yd1hKDKQXBtw4A4Q8",
  "key35": "2ZQFHqRVNAzMocou5WPXx9xZtVH2evBAVwcNFg74Xkocq6vuJ1supuMbW8QF1bZ86Aom8Ym13VDhNsBJ9Cx1Ss8w",
  "key36": "3uzgyE7bDUrMms7X1ZPLcmwrAWU3Mi42wTSLRg3sFX5NoeJzoFj6yyPciuaoJXSbMzhJNoN8U7R742BUzrs2yek8",
  "key37": "58MBFBDNiSdCcfe1DD7HzuEVu7MQxBGAiXqg6dbnZBagu2rFUD8WpaCTBs3dWWKJtEou8kyDBbnU2XfWKQek3NCT",
  "key38": "D5RRFR6g2qCAsnDPnDLnKecYKXiuFaZ3yRAmyjibPnsXphyYy8ukfQtdgJPyyxPmrK7Z6QovTHFwxQ5Lzf6X9zR",
  "key39": "2SC7zVfhJuszqgjk11kjDA753kwGbTYrPHQjENuzEck4SUXwKemU7MYuCJ9tfDgBaSgmjZDwszD5DwY3CWocZNEN"
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
