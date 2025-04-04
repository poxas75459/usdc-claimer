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
    "2PYXSv5FvVwfB7KV64KTApyetmAQsssSiZZZnvvk8et3U8QtdhHS6ZpvTXQa95goMFPCmzojGhwy5YC12WTWpmjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caD6YQX7NZUUj5Ae288p12caACWTQ2cn3MMMG3YYPWggKK77nWjV7tdu4mkKG2wnuLjczJUf13VY9RYZSCPQRgf",
  "key1": "kBwgZE4dvYUgQo6sy5LFsTngrirJJahwZKKRyaVB8P9Vm9c2Ss3V2WXYWXUP3KPuqV9uuWyFVpRBm6poWmUTDmu",
  "key2": "5kzj7kGSzsUZiPBWeBdfamy7MU5nQBtfZbzQGDKpuG1cKxZHm1BwysF3huXthhKeui4hPygHs28sT9yq71VEWrAF",
  "key3": "2Ds3MTYAXfZ2rSRBBJ6QhWe96DoSc3okkpJbt97eHNAb2N46s4Nc61pkkgmeDmJwcvvNFdSsuUr5S4nbZRpJ1Ynv",
  "key4": "22vQtrvSfEFLzLRRtYCGEv7oWGKe2M3FbCfsGkTrfF7ZuYPW1nzHwwnC1jBNKnhtb2ZatBk1vTrSpLmwTgzcKgrz",
  "key5": "5znxpHJ8bWY8JyPsmghs7HKRgVF5dcQ48mzhLLdP1rAh6pyfATpCsHcskjWCQ9xbEbxeFfQR3S6CVxnHJQmn7uUi",
  "key6": "3hmXfdP8qUwt4VTvjL5DGcWQSxxnwxZPExkG9CAbBZdQkuxJtf5xNhqKFMsWpFw6YYP1R8veMtrAGobWAszUAbd",
  "key7": "3UcsPw149YP6VfjXfUhyQrj5e3aJfQbRzCWV5w8wiZjoMMUyZbyGoLRDqAMfzVabKLvGBYzyuUGSTaGRhuPXX3ir",
  "key8": "3g9zzyS3hfaBVyiVx4YD28PDEahP9mCqESwLgRHM47t83yoMmrt1Hq3ra8MALWWpivqX13zDcJLxGVWmW4qXbeT5",
  "key9": "rTGjvFLuVqfbp3Cndnz7QhTnzTjHJn6PyDiF5bW4UsS2NYx3D5zALjJ4wzny2TQLw6JqT7rpbvXVpaieFSiy5We",
  "key10": "3sUSMwyYmTTfRZdetXEwZ7iSdbrjjKQZwYfe9HQDEfLQPcVrsc3tNW9NPtepfktCcMcqPjBhffdZwM31RtQCSyFv",
  "key11": "2NcF4reqVjfyVob4wnmX77b98UcuC2ykSDB2mbhuRfBKeXge98Lt7KwcKquJDWibMGvHj5RoqXDhTxzwcTMo7Drz",
  "key12": "3EHbTr8Wh8JhbxemEHMS9XS2S9wXLZivypp8aM6yfBbGpaeZh5yeCaxm8a7dW1qTuvNLtJNwipVJkVUdNNDiTZPN",
  "key13": "3yWp6vCMSYSS9gPr9GJPas7y72NdGE2km12GxRHvtKa5tVFFyWn4NVkoHVygEoEf3YpAa7botetGRQYnJHjbkNPB",
  "key14": "fJavxbfMkEffBsvmUCzQgoB533fR9CnWZdt4mB34MNG1tYBmZjKQyH1TNBaXWxUroRAQMXi6tdAPkauFA6mEzmn",
  "key15": "4PGgycN7TzxLH3ppvgK411bP9RL3Q7BufBDQ6EQjUuHq1ER3j1G6Uj2CLVPz5wXuEUw3VeFLr9w1DW568ZTzCFMs",
  "key16": "22ehHSLUaoee1XqDpEZrbKCVcuBmCEF9R2ZxG8rJbYz1WfUo3SfzorM1wypYfpmXRL3ZfJsFf8qiW6Aswz6FJL3M",
  "key17": "25mA3h4aM4HcCU2XZWvCJDM9mjTzYkca5XeXcbK5dUH9cGWzPpBf2Z9rRcv9WQ5w8jz3QZa3BrwWfTT4Ah4X4WJn",
  "key18": "atvG8KE3Q9EnBV8MXnFXV99NP5iwhxg31oUKFK4VJ72TYv2vyxpG1hAEtaXAJyLBXcTXbURbsiGRS3X2kE9d6PS",
  "key19": "4QoHf181kWJqY7yC59NtNz3XkirR6SJtxdxZ3Ji8R9iCL4kDjzbcuUwmgRh4GRYCD7oFVFX5RDzjwAGy33P1dy1s",
  "key20": "24dXEi5jF5VxubN4at1AxsW6fofcWvm5jwyk1xGQBQQoYwvtyE4wB9n7vfPJQYRPg1qrZA6f3X8KD3Y4tDrvB77u",
  "key21": "hSs7ULhw4yfKt6KF9sTdCnhB6v3mh77rKnFX7fv9WbuBdw8Wa1ogNP1dL1s2sdVxKemsDZpFYCpY1x59M4PXPji",
  "key22": "3ZMMcg41J3scbK8WVE1o2zxZH8V1BJHsDFTEHPtAbUiobcp8yDYWLF4N3MEX1RcYgZNJXQs6PHTgQsR4eeLeeaEd",
  "key23": "4ZhiEEWoh3k3YQjvF1JAQJ7xAbp8frQRexeENh4NaDjLT4QJ6odNYkLGZYk1ptxAW4mcUCY476TqYbWn7vLzMTtZ",
  "key24": "3c2gv62LSL6hq8QwkigWKdefZEtJyvFt2SSsdq2yS4p4Y6M3MMUkPKPiU2qfV9es6F5eGgp1fM3XKCGyLhY1W4sV",
  "key25": "3QH1vtJKDRY5VbPeZUoMqJCLmikAzrSALHtnYdEiSHwHr7rmmY7AAHtqGryVUe1tHXCLUX2opCNjFooE3hXhWWs3",
  "key26": "5HDgnED26whxsAEdQpBinKvsCTsJ44gi6qSMSQanGSpRmYvWYWwACAQqUQbKFUV3xSAEnxs5aErUVKfzAMj5rsVf",
  "key27": "2qSgrEsJ7vi2a3cJJaW7c3sfYVHnqR2jFtTeQQgkdA5NBo8STN6WhV4WeMV4bhgYs2yB8T58yJdj7trvnYTm4yoF",
  "key28": "3APd9qLxoDuyFtBDcNGPhihZhmwa9bsbaRUUvwAcSd1YV2TtPMi71ArwPnNrrNigMwdo4fjFznS9rZUUbBT68p1F",
  "key29": "2RXD7XXZQYYstL3HnGv7GNe6suNHa3M91fD8ejhD5n3LSSmtq4vyZ62AL1BxkZaLcRa474sWN1bF3rbBdTr3qXKx",
  "key30": "5Vu6S7DsXNsgtLsppKbiZthwooSoSqtFtFZZDARKZLyjxZYgrp4nqcfEYgW9a3w935NGmHiLM1agHViFBJgh26df",
  "key31": "2iixfNeFVGRDN1595Svia6QVgBCrJWcW3QRjPAEwoSH72yYXHfoTWHxS9pwHDGBro79ByWFmCm9KHpPpXbHv4FkY",
  "key32": "35nqKaaUa9esQcHVyPuYSscCF1NiMgLFhp4fSafqNArdSm2PPYxcSChjdtbXMZim6wEMLgsoXyLwNZ7CYn1kcSKQ",
  "key33": "ZUUwMinRXidoZHXGpuxbVUvpe7Fx2cLtK9FCYWSAourU2yLVBSgvwJCF84jR41iLENY26ay1ziuLcDae4eofaRP",
  "key34": "5zcwBqwPXTbpucX4XTKLJ63ig8Gn2ajZdHBayiKGtZpBQGQUC5c5EbQYAnqrebtiLYnDEiMMVcn8c81VuN5PnG17",
  "key35": "3qfigYA6cFUzhyZQJZEshyJZ8wGysnttXyWQSS5RynWjG8kkEAAzaTfC6b4EPoeWgdazFgMYfBy5bqcAikG7Hozb",
  "key36": "2RGQuqNekZLwasyKtikwPmFierNnik53MFMbkcByNxRxABLQEaXYJaYkBCyJoZmfmqikcCsECZaLXKHjZcg9dEMe",
  "key37": "yY73ND3QZzh591AcpWqMheekxfrvWrQdtKpV8ppvmCSAqRUGjQVhGtVbxT1zKqMGvuh4bhWAyySGVMN84w9EkUv",
  "key38": "36w45fHAmTbxE1mpLKXADcjQ4WbqaMY3szbaAcp7Uknkcs5vYi3r6yu5jxeD2E7C5pNdRwjFaY6h93Jqmsp73NS1",
  "key39": "5D6Cz5KGmwV1XSpBgNP6jnrRG6H1JiQWjAst95sF9JcE1h8gHSMDi3bX2ZM1SSsBJoAyQybuLs5RNokYPHuoG6v7",
  "key40": "3THQyUxWjuWr6goFRaRU9Po9cABcWcEJ9F7wsWyZNUGPNdYipp4fVHW4Am3Cce7zGsh6jE4X769UywiAD1AiMXQb",
  "key41": "51snaCwvdqhSzJg7rNWrDNN1bzokWFSXwTnRYgbqSSxdAHFXmxUKYhCLUA4zbvovbS8x2Ao1Q4VWs5yBmWCV3f3e",
  "key42": "53PoSdg8XCXLrWimEpvXxr7CvWde165RjQ5WP6p2xFFL7v3wQrejej2NMK6t3jEaMLJ5be9gvb2doaF4X5WDHjpY",
  "key43": "GiF2WXt4S3FX6WAw7MG2x585M9StBNj3fixRp2EfDhfT5UfpSqaKGxV2w6m18gfhmxgWW11uXBZa1o1So2kfX3X",
  "key44": "3LNyoBBAXcQThmnXsqNRTkWiTbUHFtEEYhTSUgeFcsedsektdgfx5vA6BRqiJyUfBRYyj1w82UXAsEhvdYjbXMZu"
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
