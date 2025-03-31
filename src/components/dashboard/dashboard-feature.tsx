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
    "43sRKJvGh2chYq8gYsd5zb7WJYez2hZnsPY83RS772WaN1DntgNJJhLDUANQHX67mpKPHofnppYuXeRww336zBgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNCDsEv2HT37BwvR5xKDRu3c185LVwznEvckuyhmTBiqWw74ZKZo6zWU6FsjQbzRvWZKHhqomq8yYunHVhJ55bp",
  "key1": "4BzVUA5xjK53V5hfE9m4iqQ3ENQtLkoFkQHLhxL5VMWPLBzeXQ8g8YmdN7NZLMFWBMfhqRg6E4bhBGSGtXr5fMdH",
  "key2": "2JZBhbuQ9ioQTGmPbJyB5HPpruVEJxaUE95eyBqdKCXSPWhJQuQY57anRMsd6UMRRxZEaKUU8ip2UojxrpDz6FEJ",
  "key3": "3ERnsx1zV84j9U4Tw9i9t89E1cjxUPB6RQZFbSPydmJwenThygAPyhCgMRPT39WoNsa2upvuS3AjXHAVw5HCvvNa",
  "key4": "4SoGokvjwfP2gZE9di8kkGeRucbDRjmv7haDatvQkpmoyxyLbpeFkT2m5rDKkYXvsFAMTPEiJ5CBJbH5kC195Xd3",
  "key5": "5XeLviCntyK14dCbcebuiEwAFsbbsTu2AVKoZcTQjDdhP2uPor85neqeELv6jkcNvMRQF4iZ2sjwAAouKAcN8LBU",
  "key6": "3JjViazYM2LvmLRXJ5zZYx9xr2WdD8Pc3kBnDhiNspvmGJAxHAxsW3eQYFQCMCBzSPELxtAmnXMgFtfZ9W5DujRD",
  "key7": "2Yd3a4LgdhKhACvwmWrq2qVJWRUjLCczTHEk6QDMQ7rTt9T6A2pVm5C73ApJCuf6WVFoywLHKRCwdBbHCKV2bBRg",
  "key8": "heBLQRCDTu3nU7xCunA4NJLMsCpn7k9BjinS11gyenLMqo7Z34C9RhCypWxsQvZSuGN8kHZS1EHUY9kmuyZ7vec",
  "key9": "4C1byvsU1Mu9Z5Zt28be12CLMrptcWpahLeJ8KJiSwrfDn8W36tPuCxkan1h862d94Df1jpAwCRhK24gzdc1iqi1",
  "key10": "PzNA3vGsFDCWfQipFfpy4TyFr2ApoeDS517jtBUwiXeJTnykXypNBdPrdeWRRjXzFC3V4vkZ7BhucEizzdYMLpK",
  "key11": "4bwMzbsjCSL6DQEat1zqEBtyK7rU6QfCGP6ZbfRJcUonckxSAY1ysb9QDK1gWHR7q6KaAwksXojpRGQDwbW2NRcs",
  "key12": "59BunnDASKpy69HikoPLUXemz9MQqrU1rnB1NFJX1uRSadAb5GEQ7Aw4NfsPtZF8qahWhTaGL89kpmSpCPHtnnij",
  "key13": "2677Ujmm3hsvHg8HgrQM9p3EPVNrePifc22UtSvvAmR2QP3baeAbNou9u6zD2TTH6GJqcJrUPStP9b1fJsdR3fxR",
  "key14": "hSbutaDYdxDA2mdWsgFG5gt6615yMxwMaVyNuRcbbfm7tnimS8dK1FVseD42uxZ2yQJVryZ9kHgTEcGvusKmHLE",
  "key15": "5Xd1p1mhNcjDkpC5HvHaHDWvBJsTyEvfTRXyEopEFxy9JoRyCNY1oDtG6jZXZKKqySRzUcz8WvAZB6QmkrS5NrjT",
  "key16": "5SpQ9X1k7CtVhnijAiBUvCqGrsAoSWhXnr5JQaxaFqrmuxssLLVXMb6tiuJXt6UQHpYFmCavRaxGpKSLod7amH58",
  "key17": "Vpe8rNwEjiLaX3kNe5dHXrYUribMUEgG6LSHzPXtpToTc4AqspDX9doMYBE5okxSWnUnsj84zZcQ36XRrNVWtdA",
  "key18": "4aNiXfyTnsfBrYucoLdJNd4UUx2gBast2RJwed77DyX64UgWohnaDKuDwudPT5RTJe4fQTcp7psCvX4vyqPVwMTy",
  "key19": "DjnmN6K9A3AoQPvVqTnwVYLKvNYZy6LV2xxQe2tyjLr8VGjVhL2JT1PPAy9YK8yMXFwKd6xBomkKfmj7DCSjSvi",
  "key20": "4msGcL3R7cp7LPQNbqkYWCTf5pTM5qbZiYfBEpsj7u5MksQy9eCacnh7cWWbPx8aQ5Z9iQRvYJbd6vNsR3Tjsedw",
  "key21": "5kgM4ACQnLUw88psyqYTiBwJ7GK7SmibeYhLPCV2iJuZq2JsQdi7SuJiYjhvtX9Bg93qmrVutfxRHzhuuevsq5HP",
  "key22": "39qL6nuVutxxB3NYcUB5Gx3kvQHqkZMQpPkoesFP1NxrvHhaTERGR5BbM8i7dDNS81FPeCqsUC9TCG9gqDzsUKvT",
  "key23": "GBXGDvbxAX8TF1jFzysiKdUmF1BcGuZBv218C7gfp5McgtAHPqzPbxZkb2NYfkUZje2tDYLAqkoqj5QH9nUQjrv",
  "key24": "z1UC5TDzVc7jCC2p9faExYnBeRRvw9EiXG2LNU5fV5hV3te12ErkeXfu7zXfPQN32RoBVNwq2WRwoNGHyjhUKL4",
  "key25": "52rugNrad7d2jtNGQdSs6N9mLRHE9xFK8dByxJAg7x5eYna5euCddSP7W9Z4xmzpF7rKmyMXrxdeWvtZucYWZc1a",
  "key26": "RybiTkLzp2LMi3FbP9EMLKu7zUu9dmK3HwcroTsyRJx38P4vDPe5ffLLsmhwfR8vR8LvvFeyMytVHgm7RTc4Fpi",
  "key27": "2hDhd7jVSkkXFNhNvoD8jyQgzWJ9fCLefwREMEw3QqsaiQ9GT81WQ4LZ7JZgjNBjPD8VPEPhPYkto284F3by4H3r",
  "key28": "xs3itNA8aNanebeCQ5ZoWpCacmky2KPFrngjibHr4VJPKS8dG5g9dW5L2NMC1dyawngDXSXBXhRmLwFbWoXMoQ7",
  "key29": "3DdFZCnNzmjcnUBDSQwFA9jgLtmk24893M9NQ78wj9KAdGebAyxva2xwmDarz1fBG8bx7ntTqatQNNuxSTVtW42H"
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
