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
    "5EkkYhgCT6UAgAvNDfvdXTGJHMd843wb2r7T2Y8VwtD885ZdpHk1Lrh92bdM2c2PjdocCAhb2Jbs3pPUpg7gSZDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhWUo2z3ZXDzkxP6RzbVJ8UjLzDGXeeAioepfpbXA9RSMWkhGrPHZwiXf5XpjXXymuRaf9uUWy3NdRSGc5eSP6a",
  "key1": "XKgB65ovSTp1BCpPaHhroNGmV71wEP47qA8T2wSaV2yWN4x5Q3HdW44ZHjj6eBqncwr1GAohP8C6ryuEGeDTfaa",
  "key2": "BqTVagURdABFe5eEbX6TKN7NtagVkJhyxmfU5YwFxdkW8ecRTDToiRXgfxMu7ERxXUrVMWFuFUp8cevGZ3gTtoL",
  "key3": "38YfqVjCCn3dfsckvHHW3k35AWZWBwB7GAX8dBCGfDM7J74QsvwLeSM8MybceNdgkkSZECJYpvFYXh4u2qBKFgw8",
  "key4": "3VL4y6bpub6h7rocUhRFu69k6c1WdaAF9vh7EicAZJVyQQUDeipsr224bYMfLhRmaz5nvTNGePeZicSkCGf3kgEP",
  "key5": "4ndow9Yid4yAM6XWYxaWqhxXmsG3nzzoSG3jjW5diMWnCRdvDGjYeWuDxNwSneRQromCNgTmeyeTMkgFKspXS9Zt",
  "key6": "4BYJ53GF7oKDSDhbihJdAnC9L6E5JUDmHzLDreVTwKsg4P3bnuxmWvwpnVaYrTUKsQHHfYagp9rk6P8zqQTvXo3j",
  "key7": "5KjzTEZ8BQf7cbf8XQKGHvqF38xDqzZ6pGeTJQdXRiCfcV51mvRvgEMg1xxRsrDBD5w9VKcYTndNY2ixtkDeMiaA",
  "key8": "4noqVQ5XaRC8MEBd8dKEGn1rnjAqSX2GEERqArzjv3TihHNy74jD1v2zxHxeDXPa9Wah3KQFQSvGJX7xM3kriF3j",
  "key9": "KuP7EiowaYPuVzbFRrLQNMz38mRZY5jTDbtxiMesh9bh6AhmWzBKTLUv8y7urAeuEfVd8cby6Wkz7nUHcwSmn35",
  "key10": "b5MtaBZ4MFCgHbfPL2AJLD2iRxBepj8KkWQhzaaZbVx4u3z8Y8i2wmqrDtuTSxjaLdWecXwEcaNdo2AiJtZ2JHW",
  "key11": "51bk6kwtrJtnvuJT3EBaWRR5h5ZgD86QyZG24cae7j73NByZJm1eLhX8e7HPBLeheafaTmRZJSGn4WgUv6m9jEY6",
  "key12": "4RL15qnMX3PH473qWAGrPCph3Xcx5d95Vo83Zciau8oaHWopQYsfziN766kDzZh7vNQ9aWWQSjKn6vrTuyC6qgZh",
  "key13": "2mo5kSaYjE63rgYYcXWPHUuto7EQs2BGDLpLNLU2Qw2xqeRX9gsh97pTdRsr45fcoxCsgvCNDyDsHZ4jbvq9uYYs",
  "key14": "4Ux5muAEn3JozoTjyrztKqcAdxkC75RWWwHj9uXcc7SYNb7naAEFZSkA2ZptYz8QRszahjY1mJ9uNFY2chB74Nvj",
  "key15": "3XrHUKEuXbjUNUPxJ4fQgBs97t3wuGMinLiBtE1Snq8gkrTahkKgyj3b1ZScpbtp4UWBkMjRatybwycxukqgydCs",
  "key16": "4X6uEVP5XPxAkpD2uzGY66uzgLnceujJCkVRPMvr7H8iwr7wZQcucKb5wD4d9dfUa4KHx6WdbYez31T4UQMnmWWC",
  "key17": "5BSJayFsfdrH2sdGMLjE1RFkT4QpgQDD77igq44L7KBnP5Rt6kTdXS43rR7JqJyTkVVuP8k2zjDPc3vpCP9SfXMt",
  "key18": "3txjZB2Ck8M9gtsHoqNQrXQssuLnRZA9683tPXaNKwJVLSwZYbS2jNsXjaVDc3NqG6nnWpk26A2Ms5PpQRqUjyjg",
  "key19": "3vcHb2NuGHqiyhhdV3xjDVwRwQjYYC6giobt5Yv2oEuZiacfhE1SD24j4v33jASnmPrxYpmLsLAe7Y3iCKZ45De7",
  "key20": "SR1SKBodZU2EACJZ4jT1f9XY7FtTmKubTtR2BbfWZfXAUjR8gF5VURE6u6kYWnygGDw5ZT8ezGmntbEP986dnPq",
  "key21": "3PDNTQe1EY2QgMikGK9i6aBchdZU2bn9YEKaRpMr6Zj6AYSQwmMhw26Fq3DMbaQUrBb8BLpahLm5gjQZZMTpYuMk",
  "key22": "3BazDYVBu1XvFCgjp6QmDzm8KFREt3ZNCLBq4i2QnbA6VtVqqYa1c5rKSFgMUKxcJBgMqQAqHeiQJ4t5X1rVQk5g",
  "key23": "4jYsXKgsLqPc8L2kwQTSWkZ8QrkHRqx9oAYVwZ9ZJRsvnHJcUvbTxJXo7bmNqGWzeMwYw2qtTNNnH5eiG6A3uJei",
  "key24": "3RD7BnKwzatNXUkWrRKKMWeNp7Z75bzVv1Sw49EaE9ad21gsZKKZ1yrnk65a954GapTfs5nfs6x6T11G1yTpvcbj",
  "key25": "2hDVeRTA6tmey2qeBAvT4KyXQGyAW3ZtMBSSHcWEauE6e1k5CUz53DFJmeq3sxpvE8ucvGqxQZBL4BJALs41qK4Z",
  "key26": "5XZC4YQ7gHfeUrLrQ3d12wpgbJCfMywi1e8JnaNMppjVuPafTLg7yU3afAe3zPsjfYBmN96995FGpm7YuWEePjpe",
  "key27": "8NqKKYrDvYNvhCkjHXNs2yDswLgVBW2KnFhnSd3H95A4sE4CpJMtTg8P5GwJVD4DwhcJWVfHcYe2Ss3TbogwxCf",
  "key28": "9WYoLZ2WwbGoWGPv2hMAa7Gmd5RaAMT5M38awPprZz5an3rCGGYQ7tRUtbTTx2FgqYE7TFqk5r7ka1g9g9YqL96",
  "key29": "4YugcHnAfu8t6mwcVo45n6BaVUSLoyJy3JWQ44TiQCdXrJJpj64pZwys5a8jmYHQ6DgH4Rc869bxy1QDCCHpgJwX",
  "key30": "2rqiyQQoNSXVrkuY8iCANn8WAQtCALQEPzqZpLUNmBfUYA4VUt1HCkW3VNPwctLKoR9P7Cu1pDqjrvUHdoWAKQrp",
  "key31": "21fZpA38CtzUWS5JEazJ94YzGXzDDNkNEpYEYK4zwCZwo6VMjGKqZiknKq8d6Msa2SVTTtQNU6Uec6oDKznuPTQz",
  "key32": "5hWN4S3X5pEoRvYWqmgVapw4ufFjPy5GJawNYTk1S5DNCZvv1jdC1X9egrUeodcankMDGhPjd8iuMjmRYS7Z9vRM",
  "key33": "3FLmshEoN7zSw2Cbe6egyGSkiC3EmwyphvMRTSgTgfmbnMY7YFc4Aa96abj8NoJ3U7C2bgUEmVGt9WrK7DZu98sE",
  "key34": "2C2HNQcSr4Nr8QEej7uS1zJtKCsmpQgYXWYrwtYARPv32A5FGRkK8EmHAtSufa2LoMTJdmYgMcgh547cjHvKnNZ1",
  "key35": "ne8JyWAZpp6nvfRaeEyBBtid9WxNK3zV1BAo2376PmCfqgk6cYzAhB9PkUwosLuC2t5UUMexKzcWKqV5QGsgDCo"
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
