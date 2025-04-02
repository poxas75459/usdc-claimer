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
    "4fSWoAxY1PoMNS8EmjCfoyNLXPhMgEfYJyeyHNxoax85tqZSNU7Bjuxm4ygdtjdAYG4qeMRNSvyfs8CuUsFpGkLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3YBKwVff4yD3ZnszULqDpfAq3Grh97s6PVfyvvK8iyVBk9WSHWpkBkL6r9XocCEa8FYXeUu8xFPcncF7u4TMXd",
  "key1": "3Ei3ARNhHkGYjygv5AfxpaiwVZ5dBLB2vQvHCyhd4zTDPdQuMfPisGNaPaC2BrNMw629jFUUKTCNSooDMaoga7sa",
  "key2": "33yaHpAW4voGcTKjmeSBhVM3E96WHEqbnmgyp11PNk1wvwKREuQBq375sRt9ZJUKy8BKX7qov1ku9DK5GhExY5vz",
  "key3": "4uwonhgvaV8Dpr4AsE8fT7zAAf4bhohkX3n5iGK4TukjQLCSX8tUBy56k7XEHMnTQmyoKinjqSUXawDUAxsUgwGv",
  "key4": "74GPY8KZ37aKqSs7BNMpQPX5cbKi2PGQ5vmNM7qKXaeesT1yZvqYRAC9YCwjRVykrFGNsj97n1U8FkvSYBahXHv",
  "key5": "5ekTmRZrbJNBFyJd2zGRjL29GQbSuxJRYFMTcsYrPWMm9kGs6JML8SfUe4g9gJcAkZy5BddYyN9YxV3wzjVAbavz",
  "key6": "4njpCi79LcFzVjgNawVfc1tUKTX1ZkFXvCvTA6QMzUsxBD2j1dbHYc7CjTU3zWKysygdg66u4ZhRnZSy8Jxyesgp",
  "key7": "U5da8jZXGqGgwiUQrrcegFGUAuF7ioQme4dRzMzskMGGiwHfQjhsZM6uwUs3PghGc1Y1KkFMxPkySBaWTbYWeQi",
  "key8": "3LTnzm5YycVPgsD9BxQFcUWhUsPLf4uRgki4SzqBNckYnA6pb9BXHZsvzH6jiXEfAXiuF7AzbmTuQKntpnvocESS",
  "key9": "3VTqRK46mqCMtHkPqocEFGFAYDg3ZFAkLWFjyGzZmuGEr4Kr7d5zmcT4dayinVbPpi7evXd8u4mfi4AjjLduQxEk",
  "key10": "4JuyC2ruvJ1wS3ZE2KGk5v8JZ6yvQoBk66D86BoBFXA6zhVrwY7gSpu8QauGwSQbaT15THisY59RBq1JCKuDaopc",
  "key11": "5nXyjTsKYKRkiHMV4uA5rBaj5JK3cTUMgrS6k43R6FCHGMCkC4cYSujMPTi5dP37MYH17JJoiSXEHFCC8yMYkhFB",
  "key12": "2WqS8we12gbqpdVcpqougSpSGejP7w9tEvAEYomTNy2QZpc5eYYwvEw49DM6gK1P1xhsPRYyRDbAizgsgac5bbwQ",
  "key13": "3enmHUVbtzj5vJyQwEsSqFTv6qKEX5nNaHdxiTCkkGtW5tcr9DtyG83CDiDkoVJzHojMFHaCZeAcbS3VqbJkfEbL",
  "key14": "4nH11pbLC5ZobfJ5sQd5xGcbfNaWiPFPnHocbwnWTXoEeUi1wLc9EGwo65WFxTuprScEvXSzzAUaJBxu9MwATMvi",
  "key15": "zt745YRMkA51TTooL8tJviWmqQfwBhrDnfAh8DAdh9BSdTdU2YhZPvSjPznmwyah1jZy14VLUQd4h9a2XQhjRs9",
  "key16": "2icKtWMcc1dUVwnzc4DfvNJiG8S3az7vtbpxPWvQxAvSMaW6d5op3EVq97VxzXBUTMwqZuWwaiQ3ACc8tNGzWSwt",
  "key17": "2xeuynRLV74iyQcSH5Z2P44HQpEMCL1gu41NyqrUryM53cRrWNhRSjwQLiiPyBf5Yo1STqTN1RK6YAwrgiHAj7xE",
  "key18": "3JaBD35w9Zj8XBXsvDFYxMmv27ALvjXbevChAQWNV1U9aTFXsDiWSwQvM39Yw58YBGY6fRzLAfcD6MesskcfHWAu",
  "key19": "4ddNm4oMJcSxcYivLvAU8tJLShmkRvBVJjbiemz5RuqASHgD9XFeZoA4YsH2m3KS48UpsG2PDUYcgpFrWDuVyyFq",
  "key20": "SmoS5oCJgdfPzBNBmWVfzyHSmkuqfSBLk2cUjdMCXhM7wxcwQkkZxpeNVnYvnGMtaaHNni4y8NkM417QvTPDM8f",
  "key21": "3dvzZpnMKpT3V2aQ3WGhVYYHY5dyuQucUsLNbYeHZ2HhEFGnaNaQzy1Cc5gENRiHG6UwXGdxzmc4iJNNCaL4AoZc",
  "key22": "5QLXhyiErVrsDHrgEJkCwsvet937V6iK9if77aXVLCfgyEt9bfBW2cd6nXwAoQKEVZVGcQahbxNxw2cJMxasduBe",
  "key23": "3bzbU26vUrGF2PTVNWiZMGesbs5uxVad2XuqDTpdDgCHCWCci27bqBAuBRrNrDqjXzrMBS9Lr3vA6RadMY9V8Abz",
  "key24": "4mEB4DUjRNYK9cmHyt9WignKmF4ZKss8FqwBe8XZD9crMcJATDQHEdiBXcYuXH3ADqx5nxWuUonjYdjTeet4dL33",
  "key25": "xqhin6FijhdUWkHUxp9BZsQUR9idjGSBXsSt2hMkjpL1eMnnRuQfCeqdGVGmubkhCuZLJEeCk2pyctYoz8sTWM3",
  "key26": "4cR64GFaXeEqu9wUu64PjDSNfCf9Lgxy5JfQZv4wswt7iAiqLc5yMycGQDaR4B3j4LQXNNvmrZZXEsX1Sr2kHD5X",
  "key27": "pNBRLiZxshYCt4v1c5CRZBPsaepsgxux4AB6wQoNsUc4fc9wWmj9zReC2G94P2V75ZobDAcNavRocRewNmBFyaZ",
  "key28": "4WS2Hjn5XJFBJqKcmSS9tJUnEksuhXj3VLpQjhJyA2uf1eu2YwWmoHnxEAQ7FAZ1K1CYZ6MfoLVJQE5Qb2WjhNaj",
  "key29": "5eFp7rDz8u4EYLDSgXG5TgtirKUq7ZMmZ88e8MK58KW3ddG73mN5dcXCpbhxRfPesRqehhQTuPuUnyGwPvyXd3kM",
  "key30": "2oePmhtdkLPSQuovmBQ1YUzTMNrc8yZqS9waJHTjRdPzdEzr8R7V31T18Cv8x9V1NjLW7C8fUam1vY5SQBzW45CQ",
  "key31": "3yHB5seoD7UBp3B7jtBrztACuyrL5Bo1exNw9dT8H4geEX7hgb2ULQbfvZnxSEtnHwVw3PX8jGnHDegZqL6TmpF1",
  "key32": "3HE7KxE61B6K6CpnjuAN9zYRNCSJ1mJYSkhpV7Qz2bDgk4N7WDqyKBLsS87bWrQ4St5e6MMuPUvG6yPpaYnchZcV",
  "key33": "3jZHmN4skLqFTEEUtj7f7szRWENFAm1RjDSJPzQCweZK7wsRRaCpzstw6P4H75hXYc4gMfCmFKLaWNqjmuMvbF2c",
  "key34": "5ATcmpk5mHQVHnrHU62HrfB62wnuRCb2uzXUw23n1Qv6LktHJMmwgxQg19a3T7WMkhezjfbbnYjgsp2XLTE36DcB",
  "key35": "3MMzP4LELRxwpsZtXte4geXHrFjYDXWCku7yALPnHpi4qFFCcs6VB5pjBgLbmpF1DgtTPrJnMJNJazjLcrURwVYX",
  "key36": "yA3mbRFyrTTUYVERiZuGcKUS7K4HRfxpoJTK7xUMsw4KAKFJYAUMeAswB8rAPj4NfQCrmAfJZihkunTWMkvvzu1",
  "key37": "2TARyrR8FzM955GccEjgSm8mK32ZMZMAdzPeSzwro2UBUFVPVZSe71wG4hyhQdiJr3hU4hf1HqMZjmYoyNMfG5uz",
  "key38": "3hQzq1t9T7Gv54EZyYajLL7iLnA9PU8ujK4vpD1ydNhuRDMRFdihHoKKghY6Y2MjPamqbUFLDd6rtfV7pMtzrkEs",
  "key39": "3qeP6Cq1RsVYT4icGB7oKnSAenk1CMAgaW2rLfVxnKFcXMzbgHptqwE9FWGSRHqgLvt1ARgCV8EZ6QTBhUddREK2"
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
