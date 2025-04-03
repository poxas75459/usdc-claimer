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
    "CEwGG3CoC4XjtvoLbtJdjcUz5MRCB5ysdbSbB9RNzur8V5apcCePcnaW6TjcaFDHtcdcKAhT3h1KJ3V9S2u2kxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiubLoLRJKCowPoPvtTegp6XuXYueMhiYh7Lp49VuvhD7xN8ecgdx2znK6jT2o9hiyMoa8JCVyF8aVfp1s9tjpM",
  "key1": "5XWbZqm8K9T83S64ALFy2eGwvgDvqL58HPFG7JLk9t3X9r2UsyNHN4xvasS1hgGBUEM9CcCRMpbAqB1Chg7u7KFT",
  "key2": "9D4phNLu44eFh5b3n5pbBBfocoJKPjWEuxyyW4vrLsfBe8bWzcU1fYzg1zMY5WXL6Jt1KV3NXB8BtuvFTmgeycW",
  "key3": "4BecXhyrDvA814hgt13UmF6CU61RSyPSBymTQTK1QZFn4CXu1uv4LV8FhTifkh1hg9eD3vMARzYZqkbdSVhhp23a",
  "key4": "4zcGPJHQnNEKZiqGGoRAMa24Wk153GYVfzvUWSacuz4UDPQD51d5m6Gc8BmDWRmjPV5yWgJ9rTBJAcWB1DrLJ3Tx",
  "key5": "5Cokv6D6NVYtXVQFMyM4cy4QkZMJ3TqHoAxDicFiAhZ8BjKUts8bJ3EWpz2skB4TZPDhmw6yHtLR75RzssiSxei9",
  "key6": "128KUJfGMdPjMuDM2bzoYv5ENKVwCv1hKmsJi8qPL4G1qTqEigF4qBwpEVYmcc9bMppm4qv53W9BS51MKX1F6spH",
  "key7": "2UHT3eSDjaXMgwbwRnSCxRcewYHBCRpcgcxR64yNy8X967romo48g8Z6xpPuL7gfQvGGBwd1yRkicXmKaSoDWNdd",
  "key8": "2S5yzfKYb6ieTaZdHrznsyU8fVVadfzhLnbQ76y9jkmdB36wS7qgpt2ijsy95pyyChpmQWBwxeRTM3hFWWJfEMX8",
  "key9": "fAX24QLAEbRkCgkXdKcu4CMZCxvKz8KLo9HFW8dPDmYc4X7jr9BuPRS3anZZkzosZ2RLCi9youb4gbksnAFp5Bc",
  "key10": "2fkv8jMe3wK6cRnDnrcT17aJvNC1v8cgDD44ZzsBsQqUCgRwKYAaKpcj4ptfDHN9U3TzaopqkAy7cwFgG29QVexS",
  "key11": "3JbzpcL4oEXTTGCBAciRBtBnHz7mEwDz6ygL7t9cjkibm3SW3KVfQyD2xZ9fBMzEq9X78vGDj6cy1dr4G6urqi92",
  "key12": "f2gjRxgXJzj8yzXzcSWgDNgvkg9JKVDqsAVLYGAyAj46WVeSvD73zQE4j3AaSZZQ6QNzbGJiZ8QPG8C3r9NhR43",
  "key13": "abF5ukdzcJicAa5hH8tGM2hdUA8DNjVpyidu9fh4XPkmN9RiJZRrazF5bVkKdoPxCHBBb4oSzfnSp5vhic8NdFY",
  "key14": "2SYqnrgVETSrGSRYQ7AoLPUN499HKEdnDr3wGVu2EXNno4hMnedLvMfVDcFSDCGYx15nnbRxtPWy4Kmg8Ctd8FSA",
  "key15": "4zQAN4iuChhYNuY4hNZqFCP1nMrkgrdU4xafzBwAfF1Xo7aJGe2EXqNGVWHGhEhv3F1zH1ADdDV4htUcGLnonXiq",
  "key16": "5KAZyQfJf3MTHBiriT2yZk7ULdA6osmxsGu96hysaVVJNyWEwrhgHXdmNwhbGQPMPBoCdx6BW3MnwmXyGGUxS7ey",
  "key17": "45KPAUdX3Pjp39i1bV7w5SJatLDcmw8sq2R8b57WCftMdtaGfEc3yRtvJC5cwmkduV8PyPJEaW6xJB5zDDnFN4ou",
  "key18": "2Mudtx8Un4GGrhcqbXyRscvvhJ1bymFQbYjZvDdMSfUJKtHhqgq3PGagJpQnSSDfGVeBphZgGvs64U4enuEhivFe",
  "key19": "xWEhTgmi811uK53K4paAQjNFKdMzddeUx2cwyEvsm4DBjdg7qXwrQwxeyYWeFBLFoydmSKe8xaDC8nm9jxjBXoY",
  "key20": "5jjWwPK5HQGM9h7yTMq6ZXiFusnVfGSJajMBkDBak4kijyXu5ity4qEhtEGsYb4uh6vMruMxwcCBWrQYZrYDWr3V",
  "key21": "2Vh8w4Htz88b78BJk7P5fGsUT8c3mB4nZsZRNHWVMCqpx98AAvmoU3ErbvHgKB3WbHPnhYYuekjU7Rq5PoHmJRNH",
  "key22": "36YtwFRhYv1BJkBxusdA9UTYPwgQM6p112L8rdrDdjdKePZe45DCNb1XzpSgy4THkz9g2snTYSFem3mzR61UTJu",
  "key23": "3NuDqQQ8bGemwG6xe3KZ4b96YagEPzcYJpHYCdQba4MUUixw4ZCHEqFGZYJ16owpmxahjnkepQJY8oH3Qih56tMY",
  "key24": "si35scDypyhQkRxig94jWp2CV1E9qbS9ShmSzazPAxP3bVv7KCTiuhe87JzpQnD3AZbva2YRqfknA388ZSqteJU",
  "key25": "4vNetLcqhD5jRJzKr2HJLrJp6AAub7okLZcRtfFSAEuMfNCV15FXhyfctCL33mTz8QGGiU9zLyvvdg6a5JNFt38j",
  "key26": "2NSb4MXNNGpBL83VuXrV8xGJpy5rWtYA2Fhiv97aYVsT5Qge2UhR8Mq2yPVgg21ASER3jC2D7qe4kn8M2imX9LDc",
  "key27": "2Hfi14zwBQLx5nCi9PzXoLAKQaohxAZGbLKFEqWektvfMfuJCBgmE2jFXXRs3LKCkK4G8pRnGD8mMtsxNTGGcFwC",
  "key28": "VRgGj9UL45gLRFC5aZWoGnDi5fE58xcqdLqAyC26cTKjnvrZZHUzdXMJov7R97zJDwLH45cXfadM4k1mEiCUird",
  "key29": "4ZNobhpheog8L74iNXctrvGt3Mt2NSB7W2EjjDtCbJWFBM6qk88GJtrVzDejjc6uDrhdvozCikzSCa2rf44RMHgx",
  "key30": "2Ke8Fp8HjcooqQJsU97feTC12zE9u7oZtZiwkdnZTbWHFSGSfpkRPmMxXrd1gD9nYdXVyjQhp2tr6ic6axJNFc1N"
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
