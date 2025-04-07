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
    "4kA225a4iKcR8mKWeQzvEbcxEb5ViThLQvHvkEc5EWcCWyonBXoTBjhoy9JTeuvWsYGDw816g9Nwe6XgisoDufm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRMhdMWqsvpaTu6qBNn75Nz7AuLRjGBY4ggjnXr3XMsNY2SKBzadXy2tKmwJ3GQZoJ56w9GXzgVATnnz2iqLRnt",
  "key1": "5DX4HPq2p6oaKLfb2xnKNa56vXzNrgKfPur9w1oZHzhFRTdq642ZdprE6TJ2w489LxQLBypZ17EyXeDnCudEsi8m",
  "key2": "5pW4VYRwLhf73unqoGDr6KBKwd8YAoTB4EDsMj7E9nG4emmZJXnREgvVEoiNrygS11UnitMHuUx21wKFGWqktpe1",
  "key3": "KAMYrrQoQpMGPYWVPWKmw1pwiKr9LpVxCc6taJDthVpKhXof4BnszwrNcyHNYgeetbKT1to3FiW1CrJ3XHP9gzs",
  "key4": "4QjDULQRVyK3Lzn1iAqWziMgSVqfG1oC9rLNEu76Cyuy1VbHrRsDNDvKWy7gsWWcmgZwW2Ksamowr6zTk1ogsGyr",
  "key5": "5jgMJdiV2LXufJjnJf7c8jiZgiUY5DN7uHgXBCHCj49jLZAdhysThRUShsD9JvxY3RbjGXpvumPPsd2UVSGDicNM",
  "key6": "4XkucQ3FJDS9nfSmPJmnLgDzWMpM59hwSpbEpSqW623V5yBuA3nc2mt8CKUCUbvAH8EW8Zqa6t462LbNjLaMGedt",
  "key7": "oZ9zXBgcnaWapU7yvok3Sfz5c6S8KfKGN5MxafSkMku9bdtHm55nnTuh7fQTmTyo8sgiUBoEyM39geAfhq5cAg4",
  "key8": "3apyfYYb9mDphDj7wU7q6Tf8kWX9DRgqe1N2D8eKUhrvmP2mveTPn3F2Q1JziMsqhWaXnM9rPfY91WxJD6FvC116",
  "key9": "EEZrpEPc5ZBFwmr3ZB1ScHS55ETArAn2sWupZQXgBjVxhgPUoPJxVjGHb71Vjm4BQknRWxyhTG6dbi9F1xMueD2",
  "key10": "2uhMS4Y2urhmBY53xX5MCdw1gqEoREgj81EHN3kRyNBtGCeXxcchBXq3igtEqEdLK1ZhKmPHTmGVUvT7N4jeZToM",
  "key11": "4gqETQ1TpcAGiSWyEVZAh3ERVmWdxk5nA59NFtWing7EvxtwhMsZRkhMQKjuLgrQFv2QocDcQKSstxfrWzZQFfN2",
  "key12": "4WJjvqyxiQsUuyakEcuguqgBU2yVLLKW9VgKg48p3Xihkw4EoaVCkrLxxp5h3eCGBHjmq8kaJq7aVYsywz2HYkYz",
  "key13": "3EG8cjr5wsYTmgfnvDkpJES5zdgpW4yUukCpEnZWQbxZ4zEraziA58vSC7waDABEEKnBy3uf4gp6PwzXC1YEXjwS",
  "key14": "2TbVjiguPL9nW6JAosCiUeF3PrEoSinnt6i9qnpvRHGH4oT2c4zqFRrzBthmEHJupNHn8BJfJFAXYYL8QQ86kujS",
  "key15": "5nWerda29MCyVWW6oLdgmBX4dKFnqd5vmutJEz7wcw1FzJsyGkt2KtEXsyzwa8hT7sbGbRuZrB73g2AXrwrWSyB6",
  "key16": "2aPb6Em55idyKmZs8D6isib5oVAypf3WtLZ9vWon3KSwArtTkayvbGLfr5ttdvGUmUHcfUvZbP6yNLgHYRf1UA3n",
  "key17": "3V2XT36nJUovz4r4Twsz7P2JqBsM2SXtcDdP2Wuw9RTZtgzvLmksYy9q6ZqWQwPg7zmsig2WoYyKz8Z5AUGHa15F",
  "key18": "5zocGfY9mjvCtSuBcDe8oWWbJpZxGLNU3FBMCWSNSbmiYWvaHfbArC5kkFnujjCdvx1NL72jiQbas7nAXuf6JYhR",
  "key19": "4X7T1kguKPb3ZgvbaUuHAv9oXJzWb52spRzUkr4FqJwjPq342CddDrSgbwJEUamZ6YwRrZq8DRUpFDiR564Cx5D7",
  "key20": "2awhcPNUgG7nJAS3z6J37qj9RspKUvE6T6KkmTtX2bFVe5j3ejHg4jQV13eov9ojb46TYpxv2913AG24yAjSfJxF",
  "key21": "dCFxwYzBhdoXj3MXzQmAV4mZiPbGJpYWCyFBAujiYnWnHommU7QWD1q9yWj72Gqtye6nfwfU2ia2nT7eTzFdwTc",
  "key22": "3oaFv2ewfr6eGwQuWbmgAJTXuHPrTbhrLXnBqdb4C4qe3JRzgSjMDiCVgFWZs5aQ8AF9u7oP87kWi37dhsRQ9mmV",
  "key23": "4sw83AewLUUVcQBFFDx2jFdGbubcerFfJ6Rgn5kDrAk9VytwkYnokKi26T7RtoQerWRCjueBQuDnJX7psPDwB3dq",
  "key24": "ZHwBcDjfmVN3bvMvh97m4hp5R96mPFM6jqqwyv6CuH4n7XWNhjEwZc8Ht1ZRQRYXJZjMszkKZ3AJWpYs2wZjuLN",
  "key25": "MfDaTrPAo7cWY9UYU7252NCpnMpQ1o44Zne1CEdurUEtM9o7NGkNQ88VXrj3kDaJnqJs3vTGNPFLdFv7BPug9ZA",
  "key26": "2NUGhfc43e22wji8DNRbmEW7pW4RKDtfrWvSEyeFqFV99ixk6vL3BWS69X5Hsxh29AtGocqbRSkFzZ56ZJRk75m1",
  "key27": "3wBiKPjgXiMTY51TXKGHwhCFusbmkQ43MddssLg3RBqVe5Kv5KCjoCPsYThRCQWhFLVTp49r4X6oKHQaGy3pX5my",
  "key28": "3W98QUJL8kGzq9EKK2fps2F3AhqDAsjMPEsi9Fde54fkqNhegGSgZrFy2hLgfwiHVUuB9ba2JEDF64LRBjLThcEw",
  "key29": "3cUPtXPxu2jbMmEFNDkSDkVtMi8N9B3J8gHQ7Jtj6gaNR36z43rx7x8UqTjGxBS3NKzkiu92xcrj8T2eEjkLEw4H",
  "key30": "2Ep7gTSpyTj34ACs8Fq8LKcH1d97idxAtWxoYYHSgMvKcr3Ehnj4SVMT28NgVT3aJwd4A8xTL2e298VCKhPhYx3f"
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
