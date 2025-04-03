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
    "4yBg6CfUpy2VPQuaDmPEXkSAxBm3BZL42g5h2JWUozdNXuety4xxiNK1UuW4KgRwqdsFB2ep8yiAvAdA9CdRuQun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avH8T41BhLHMkFLf94oysSkE2XtkZKSGvAuXBbjgDjS6nBw7Lbn2EVxxNax8ry3YnSPoy8AFuxKYenjJCzSHXp8",
  "key1": "2EudwLrmDZZVtXoVn5rx36iVKPd4vNqRSNER65uCui8D6p8NP1Yc2yWqbizzbfFHYb3eyk2ZNpFan86zGimvVErF",
  "key2": "KgkhDt1wnXMmobz2hS9GnwSShRdijAVNouPi9ztUU5YAuTVPsuvGCtGAL4F5sK5VpLnCR6RAUGNFRb7GcdpuN1S",
  "key3": "4xfRumjvrykC18zLodS4JmEeD5FBZTp3aiYhFAo2kHpT4pfMyMvMs8GDb7RU3uUYTE4GVCnnuxmdH2NXLcT9S9GQ",
  "key4": "tA2BF5P2AVkowS2bCDmVqxCaee3t7Zw9ikyQ3cmPW8qYeXqJMFQZqSQXeQzkCtcoGNgA76iQ3Jr2zzQjEsFZCN7",
  "key5": "3xBLp9sVDGAKJ1BPpfu4aFQCbfc1rLdrFefo3tJUmh69LiRvYFQuAGK64h1Q9dusacd1m8hx6w1f6QXwcBxFv19m",
  "key6": "2cBtR9qRU1h4NWkkBYQ537haVhbvdiuWtg1hY9cUeHSeFDXQvu5PfnPVceyfEwFrPNKb6vVmBfBSLQL7QktPsbrp",
  "key7": "24wMcYZHTcVBVkHJRuBUWJR2yZPCWqUDZF7nvxYkynR9W7JYHt2TFE2U32r5Tie7ZyWGjKzvAMqSnDEJUDaFGCNz",
  "key8": "5KDxYufKgKptCPczsBHfEwUCmLAYaSbXrE9Jmd56aGTssx495KgQycQdQNu81MRKRnPVbutasJfomRmqj8pefATW",
  "key9": "3LhujhtWLuUCSkc24tAqb34A5ji3LriTxSnRDN6Y29ZURdqzyhpaLoCzut211aEW1nu3LbLuncZzQF8T4msYJHv8",
  "key10": "26qH86ZDGpUY5rJdW1xeavakeqo3v1KT4CS5xMBXSPUd9s7MwASxjijonjoWk4D8TLzcD7poqhezPFqcfAu2cFVK",
  "key11": "56XJgALYAAj34DeyrxXjSh7TFnVba45RAYDPdzgUHVQDhoNLDJzdtsf5VLj2QLYFXbvvGsViN4EJSQwgun3chFqo",
  "key12": "38H7AbDQdNQ8jtk8r9iyaqtxeDYah9d7Tnw6oMWLEMTTLuQ65T7aLwHXUVxTjUTvVXnSLj9865Vz71LJh3DsGzHU",
  "key13": "4ebCh5huEcBHtpR4YBRnYYmZ5JC2EK7zX4tC3gDR2zmcbbrWV22TdfwqMbBYSjdCFTwDchQihRwrposUELcmNP7G",
  "key14": "4HXxbDMpJ5cPFvEYwTByCM9rX3LLatqPQrJ4g8S5Xt2YMes7Prf2aYKyLZhv1zbi3SmJMYowVYBBBAQteWeHdi92",
  "key15": "2XnKxPoDnHBRJL4tiuTcp3L8viNZzhhWbsSbeFzToCGafdAgDnUAukXFsSyAwAzhZZtpiNyo7gBYfc8cecMhmjAf",
  "key16": "3w975ErG7sWqKK271T6tu1VzQFZVKohQBadkznn6Pe9eCTjNUztwEA5RdAfg87u6TfX1AT1suCDSXgY3QTz1jBFs",
  "key17": "2TYVZ4QzNzWV3BJid7pc3f4j6h5gMraj5S1u6eMUQxcpor8ZscBAqwdWUZCoLkWvTmnXawsCSzaqohNKb8p64AeM",
  "key18": "5zEXGdWNKX7WihpryLc2fvai1C98pg6EZnAAxAehQQv5V8De9q84u9mAUQNpeYnVKhXb345H7MPNEYKFR2FNWAtz",
  "key19": "3XMP5ccLHiXLpSFD7dW4eKZMGy9vtY1TBM72V85Fy7Lb2dT9jkxxu8T4YcyBxcwZ6YuwK44mav5Sn7zcryNYpbrc",
  "key20": "4tLMFRbJWrpaCH27gfZu2vtteTachokdhAbaLXmkaNke15BvrJ45Tj6HYQUADuuuPpjqQWw5aRidKE2YUC3KP5aV",
  "key21": "3wsM7Rhg2RytgPcybeaeFdsNLcseiCJNRndT5ccoL83C1JzztedjfyAAmTn1zBgXLDZj9GBrYZqAukBXyGyYwp8r",
  "key22": "47FT5wdiSQrFXr8xXeHyikj3Kpx2a7hqFVaJexiFsFAmu822aBRNV3gYvcCV9PkGeoY7uVJhXuAby9KJb7Y1ARaS",
  "key23": "2gK93DfsaprMEGYEpyzSQFmmTxMAua1FPQD288MuF2bbeP9NrRFmTSAMNE1Qh931KQKD7WngwqFpbTHuq4bu6tmu",
  "key24": "4XDoYYHu5VPkrVCRpVPLyL7Xoat4ZMmeY711v2aEH6Dg85F5Av63m1sPWQxMY5NtLEAmJsWRFdLS6RTY5ocZA6xN",
  "key25": "2kqmX8SiStNS5uP63QP8WrixaZVPJevXK73eYh9ZtFiSFoCiErRKghNc2gU9rVyDKMaz2r3ezoPWx3qNe6wnHzqb",
  "key26": "5uUY14AsmSodrbtzwFVkJJU7Qp5zwBaE1KHdadTQif7ZcqaXhWmBSSsRN8im6SD9J3Hs2YyaLqzHv9KKUS3Z5Sqk",
  "key27": "4eujPeQZuKSDzd7JZvvekEhDifNvQawJ7DDrfuzTPjREe1rYj1S62xxbudXK1NWBxnE7KP9q4XdLU1VRsNKAUXTY",
  "key28": "3u3WPgmjCrpa11uSkHWEdhCu8fuhjXbw7grSmVPtuqVAVo97TxEWpwfYEuMRnbdUjp19oKBEX5r9tbFKrY3ZrYQy",
  "key29": "32tz87i6aQX6U8NgcT7UFovVBSVLFC8RZGmJNRXAcNBu8pu2VSWfUuSsbnjfLWTBvoLD66yxuWaijFVzaKZ5KVAk",
  "key30": "3fEZHdZF61Pu3ykySrzr5SdWxUgWLtdsfJkt5T1H7pWBg3S4ngZGqfFtVht29i682HT7Y4qFPybSFigRowxLuD3R",
  "key31": "3qFMKDwuFDjuv4qxNec8Y84BkV7k2QCkvLEcS4WhNcTVx9pP2jzTDH37d1TEufkAwxvkEdmf4tQygjKe6P9Lh7zV",
  "key32": "jtYkMDTmseu691iR69qVVUSmDNkERWu6BU6rvG6Te2Ethynxgd5y6bBbVjtv6Ab248xXRbfvv4chck51rJpQ6bJ",
  "key33": "48NzvA6rCFym9FkSrBeY1Vk9AJSzuBFZ3ob3K61ycCDbGZ6hYtsPRC8R5Dhv4QYdAScdccdcUDExSerFvPrGbzM2",
  "key34": "5CTPHHYPpvxALTe7nsMdtRmsXTDETARNwk3L9cEk7KPT5xeqjxFh8EbuYAzUMtSbX4nKbfa881ypxPafAmP2yobc",
  "key35": "5JkeACSvE4oGgJvF97ERaLrkGWF3Q8snJJz2UhFhzdPfgpztXoTqnm2BPFdJg8iCg6XBMEpcDGaMC9RoUisXu8af",
  "key36": "3MBd5Eg7W8d4evkZ1LQRQJD27N9C4BJHA3dYQLaMWQcwMahSHUcTJxpQqFXcXEyovPJDEt2dgtW7WnH9TwPrhWWW",
  "key37": "551cRmdj5RppNEh2MWG1gyqb5CidVZtQKN6gePXtCTSqjDGyXVqvm3Ws3qorQBTe2WAaJVi3iTjZuWbvG3eSdRuQ",
  "key38": "7N3EkEdtUYmAgx2ZdmkfFA5vNT7A3RC6AsJuvG7zTgS45MwAhgp1DMX6uVwuyJNYihmafmHGk4sKpLVLgM72sdR"
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
