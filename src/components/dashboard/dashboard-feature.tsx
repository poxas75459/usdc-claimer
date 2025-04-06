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
    "4kFaowc4hKtv3KjUem9QjsyjaNdWNWz4z8pGAuQiznxncZ4R4EzoGKFyTPoY3VPzvMHZ6trfFuZCWrWa85ymzL1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4MtNWaNn6zE5gLwR587Df1kEC7eecnmWqUcTP1ut3zFoapHqWdr1RtqyWSshe9ui1WYWPhMBvJuHCoSpoaRDwT",
  "key1": "45RLntpw5cEj4nTLmrzk4jk1CPZbm1GTu8UzqK3duAbE2YuFS4X49YL9X812Fw24i1uUTfCpCfhanjHPNZJqZdgY",
  "key2": "3WNqUJ15hNUFzefTFXPkC8zvT8Daeby3CtCxDKEXczxfEpd6zTuHFY7aoUv59Mib4N4p2HpK95xvkaN8HZBkPMAo",
  "key3": "2rzk5VLBFyEpNfxrCwqcqpjHew34fVrXEfnAhYMkrXzHYP13PaExtdtUuHjY7JqnDRJKVJhJPmTujHQR5Rr7oM3P",
  "key4": "5y2y7WuvMWnPUGoemxZiCjMghmE2oCufUsRuJQ4vfeCPevfSEEaioTM2SAcdPuxEVMspxvFnhhArPAZeFnyB1u4",
  "key5": "2xLWC1JNyKWkZPY29CMotLhM57ZXCXLnvsXTg4UnjmdAMWWysF8WojznDUBe7yRp3GwikyU7tinTNpMhpTTYgyhB",
  "key6": "5uEkLQn6Z6HhYpu8RyzyHyEP8g9f88Me29akx4x5NnTEvjUnmMHnnU4tRrmU9AVujqYFENxATDoitcXLAfvi4uAh",
  "key7": "42Uk77hzvSoUf4wb74qsiAyBZj16WCgfwWQcX29Q23S6gCAiX7nk8LMKR8S6mKTjFhp5SjU4LqMP8aUzjYYcDwk8",
  "key8": "i4p6zZNBaRoGYaj3DP3UHPAa1k5F4y4YrU6yvhikmgj9ggY2RVk8wrj9rrjmBxh2eXqoaLJg8Bj8iuBxEym4umK",
  "key9": "5bv5q6XN9sH6j316LYt9CB3jTbtFSfYj3iEfMHGFrTK5uyBDwsy4dfFZi2rkocEjJGRRqf8R5jT49pSp7YKV3jMy",
  "key10": "5q8VhSsXLYYrdaYecZJeNvFBvTRjVc92KrF2X1ejspAtWpYexGgtU1GUndHyjoJMnZ6Cgm5623QUwGd7xc2bovXa",
  "key11": "65YpTHfufTWgUtAHRooCvFt3eUxyv3g7d1q136nNz6isD3nnHciVMc15FJoxZBbfUXyJNocnMA9Z1LvTPzZ8Ekd",
  "key12": "ssoLDfQKTMyB82vf44DPLqtFbpN2rWY8md4Mpjj9MKHvz2iaVDrG7QaVvTRx8aQo6PZCocJN8mT6UDHJGfu4jUX",
  "key13": "3DTFpvFCojdjq8NqEg4W3MjEfYNZA9aGfrzJiZQqNm7xbzZa3KrjAJAayzbsUBh3oB8p9K1F7QA1QsmM69qqt1Cc",
  "key14": "YCFnYWy6Q7W4Cxr8iB67ruSuynaVLprF5ZnMmtnEVE1ZBN2T6bJksX3qeA3oZreQuL6DWpLTGCHhUBFnUG3yZnT",
  "key15": "4tX1wag31ZANfFn6bKhGmgEZGaK33HQdbe1KnoJYmNYyufTGxkL5VGWHuR1ynYsn74kXv83MSdE9hvNc3ndReEiX",
  "key16": "4V4xd5ThgRL4nQABgqqAupCgMeAq5gRcjSYrF8fsZ6UViVPe6qE3EWRD4F8PaZwUJwgZy5owCuxtfG2oh5rHkqjC",
  "key17": "4ZGng76GrVBAT2qAJHaejYnHyPzLsbJib4kcSL32Gd7bGwGiLfqZTHKWwz85eE9bwL9SpKGmVFWe4oDou6vB4ruy",
  "key18": "5YkzRq591Hrxg3br6JEAgYaHEr2YeAU9oRCRxUAJU2FSZP5dkztCdbBkt55HAjJwYrq8WG39M2PnjCy6ppbe72o8",
  "key19": "4ctmyZriomBTEXVeWbnFpHfaBwCMWsGdrhWGZabrWWabCEwqza8V7vD6Dga5WneCuWmXUEkbrUBNNjEHjxGF3gfm",
  "key20": "4G8AFz45eoiS4gSMzXexx6NkGoCFgr1rU3enQCfM7DQ6j1QfNG82kHfRdvsw3TkHuKdg5wjCCrTDG5dJhqGiM5CC",
  "key21": "4rQmuYNUY9E9dKoXWkaTdhB9doK3CH2EofqnkcMQ75erxkBZQYge6uCkfiNpQaiXGbG9GUwyJZw4hs3EG64xkCaT",
  "key22": "DKyg5fKeHtqtdJFiSAvwJG1zjcMtMgRPoWFgWHvDvqRcBDD723iRN18xoB7PdKejgjYfquadeZwYoiaV8T1dgxL",
  "key23": "45GEdmEzT5UgrH1n66q8RRybAHEFGBATL7ueQHvtpiT7BBt6NGMauuUipijBAZ4Mx5pLa2wR7xyRaZTrQPQ6xSgS",
  "key24": "5TzvXsib62yLhasG8M7VhYxw67KEvh3HvD9VJ5Pw8dLjCtHyb7yo9LG6NCG3sRBwZ3saFJAjuFQh3Kgag9GrFd45",
  "key25": "4gWGooYq2qfC2vcxA6Ggsiq5f6Bk4UPCDABgVJoJY5YGAgRA1anyB831z9kwVHuEhGH4Ct2asbmSocQWTeDHqjmV",
  "key26": "59egQqPEz4nkbcnHCFz8PhEWRWozkjQJnvrKjkVoa1vEbdahJGYaDiAncLZNJUL8G3bFwQ1148FNR6XZ744Ldmf7",
  "key27": "24GjKhLt2wnNZ66aQwPqpzgwn27oFfZnDyRQ6KQDfGK7UJJbEgtASTJHZrqDiHVsvofxk93SvHVNYehqJNv8Dan1",
  "key28": "5G3vD7F1wxz1bFSe6dXU5WEuTRtfcJ9vD5ZGpUz6LspNX4frNky5TrXaMwswxnKzY8NxjGahNtHbo3MTJjWTdtJZ",
  "key29": "5CiwFDmDk4EUTRbp9Z3drLcJACq3eF8A4bYAg74TqsAdtiPYEZzokG6Yv78imfXfQQtvuMNPdY9LdgBctgiBwi3g",
  "key30": "MLfdiRvpHM3AcG4Mp5PxiwASMxdrUfydNv6AXRFm8RtjRBTXL7u9xavjnRHnuSpYnzPdrKskaLMfX6SQmeF3ytb",
  "key31": "58ocLHp2tjRoW3MQv8CG3kG8rmz4ondDzYShDsjPtMVStqxtd5P1Yb15YUXUMaLGQ3xv5d5SxdxNTe53inYvcQmp",
  "key32": "4QvxHZ6jB6A2ScGdx4LxMBndzZofTT2AqYbsFsk9yBWe6PshekcbDD1hvAFv6SWTRVA5HeuZVKSVJSVr6QyvwdNe",
  "key33": "455tUCi8SP9GxFcRy3diL1uWikDxBMm6KaQQYCucYYrgACvD4DBujcLvnvCWKtCf3HUotMPanE2EvHU1u824TY1Y",
  "key34": "2L7Ctbr7B6y89w2RQqffaEJmrcJYFa4fAKL8PDpQbH4X3GrqAVL2FQpQxhbcRwGBu15yHLQCfQdXeoG7rfGKL5nc",
  "key35": "2k4ogkcywuZZ9NSghjhgS8RjhU8cCEJoqC28RPCFczNq5zBYdngSgM9RwDjfFawpFWD4wrpREBuRDopjAdAEnCSL",
  "key36": "4nMLasCwsSNJwVTRdq5AK6j1gWYUEBNGMqZiSSJrJizqTu3DDWNQUr4mgX9n8bBBsm9nppiioSG78wtEqyTNEytd",
  "key37": "24wUYCKJioYJGPGNxdv7cvQWAhLRGhywCQphuQecSCBsCYgDY7L6NNYFg2wmRmcDGgYWEZtb51bFciCyesxvesDU",
  "key38": "tUACSZZ3shqXCgXB6rUbqNTctQGgJdncysTvYYcZUqKfYiEEpA2tt8Ak82uqQ97TjRRz7PP6ELpDHAXPycBLYuE",
  "key39": "2DxntHyB9DN2W5zgDLGokNsWNXtXo5TDsMJnQf2txiMQsQCuGLof5uDqziXppnBH76Hj9yjw9kspGJ7gSXNnAChd",
  "key40": "2HwJJHFrktczQmxvtBxm9pTWGb57ebL23eZL7VbNHLRkgdEigKNcEuWrpLVK1ZDkfbPEXRXtnEKgkJ3KNEphWnyy"
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
