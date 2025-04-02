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
    "4N4K6aLemF4KBJ4RcvxPhgRAhZ19d8u4MicSKvi6J3wKWoZAuPMUbjvgaeM9FMLQ2cEsRhwTLEKBTA6SYbQzB9k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgeAHtavo5Ej2SEQnpRBTqKYKipj5BP6tLpek7bw3YUzoXLofe5oMeYX5PUKHr71ksSs4uiagHweGNk74g5UdCP",
  "key1": "3CmkgtJzH73tcquD8GzBp6YuHiSgjgbukUgmYWyCAC6x26ptneXWjydkWgkDhCUaTUuT59MZJcrV4XzKtveFpKgW",
  "key2": "3b5TZwh4Cm7DezQ8yXdmB2UY9iL8gbJJXvbY4rWBf7PMcvn6DAQHKR1bPBfsMyH5WPTW8KJTbXPxydMxWBK8bmAD",
  "key3": "54f2Q3GoFhJjoiG48NUAw4eX9MbqufaBEqRWCNGp3fLm5RPECTX6E6YxtkZzupDBuWFpfber1UMx8L6jA9pDVPVj",
  "key4": "1UMez5c1bYTDLrbiWDER4QuCE6bgqsW4rnYGwg7ByopxjTCEC3SU3SMceusDHi6UxfCkjXh1cuqqbUA6kWYXYZr",
  "key5": "4p9dFeNqFkoB5AoanMfeHsbsFDJHQDfAJL3NU7QeLFL3qDkE4KNFSbGJ8pbPcSqvsQPLPpFRZuKLAHWLdEL7dxLw",
  "key6": "3XFKBr7cQ2du5uWDNVtf7Q1UCUMaTDrAhqMGLL9pLeC2UvenBq8tGwRvMUpnkSaJ4ivb5HXWKi5Ze3wVxiQg6FEv",
  "key7": "4fR3HZmySrUJwgy4Evyensu3nUBZp8h2Za4HbJC9W1oufhfpchxEejkZ9PFnRy7sz3nxucbtyy1gKLRyb28P1oMW",
  "key8": "3DxLGq1LyGEcxjrQtHY63SaoknWSJn3NAdCbB77gupV91r8betbbk5tm34GLAxgyhwrqZUcHx5Hq3CfFWWYKqJAt",
  "key9": "3cnuhVVxozaLGDZFm5MEQ9y8cn2jhdcBuMwaP9fj2Vxw8ukvACErVrEmUL5LawYhJ61WvoDa9sYpbik2jAc4wsjv",
  "key10": "5HAKYBcFqkPjboXgtxQkxxqzVXMqZ2exAWrbTNuGB8uzcELSf5Vwyg7SEZLZc7VGb47r3gfALoybraSg4QHCcLDe",
  "key11": "2Dzdk43shAgh9hPMhFWF8qZQFKj8JKa7oFHJh9tnMPW6TbpxGVHLFEyncBwwbHidMc2ecdfVjavyWVfkwvp6PY7S",
  "key12": "58xTLirsWgo39kw7QjMtxfdKVyZH86RqjuZ488jxevcGGwf2ebda6GFXVvhCvS6e2Ba4dSfeo97C9SQTsDPA1bAY",
  "key13": "4SMzSQ9u6my75uy84msSwv1R2KnkhSCbpvmU2Fr9k92BtfHSAwZ5ju52aUKvMMru9678PUhvjMJqmk5YpxFPhg7b",
  "key14": "3iKovikocniWTCi5bBFJa1dZNXjsQ4eFWi3wM1cTy8FTUeMkuePjRKxrjtAaJnv7db9iDrmoRG2G6qNtJiVJWNXC",
  "key15": "52ScgeuF8whUwX2CJ2dTEt4y9XL3kuWyqgcQYsfGkZBJ45PXrWc34RTR1sR2DWogbh297TLVTBLUqiWrrQbpjhhL",
  "key16": "568AsbYWNvFghJmL6Ynqj7JfBrBavT4unBckbfpLCF6gpqaW6Aahn5vZUQkmtvSA5gKmBoLv97Ssr9gChrPyw4XJ",
  "key17": "2A6MEgaDLVhbAhcfM2sgnBa6vRxZU92ZGDSNE4jigpBhqSrXsdnKMzzx5Z5VxvrFKjuv88ekVghhGW8njnKKLMfk",
  "key18": "2iYJH9U54sDkjUQFVCRnFGxnKs4Ywk6rmDWN91AvdF6XpKbN7m5CrXPyR96DK49LigQWDxbZBdzyedDWGBCCR4Pq",
  "key19": "5FiUD5vqx52fqwCUGGcqNQFkE8yM6eCdD8kKMCHCSjvB5MU6mQXTeEHBbHY9qQGyupfQaxEbQ8MQZ6Zphk2ydp7A",
  "key20": "t8YNF5N3prTD2Hg7h55y5TiF2dbtmNaQpwPYu49LbF4BhrB848WnbWNkvR5Zrncc1Fpq7xSivy5J48sFKxb3sZq",
  "key21": "3aSBcbcP4NQrxcjLi9LUJbncjMAzLS8xfzW8cEtWg728JWmv2kxJj66wcoHQXQKz6n7zXt989q1wt3TuFCiWbpZh",
  "key22": "3ehEx3pqMwpPKRogy5EAnr6wj7xzExywwBZSMjro3U3krrLb2CySVgBYHqHnL4WG9eA1BkjSkLykqv5JmUHD2qCc",
  "key23": "3EDuos1A6JUkWASERhVgDXber7r5f6A9grC8vtQP11o7Kbh7cqUGrPsXc461JHtASECEPTCGygQnjEwuV1qJVvuN",
  "key24": "66q8YJUc5mPKuRqatUw2p6UFiGkPrvDLVoPxhZXhKKEyG8SUvosxkbPc4GtpGztm7RYBb7XQtAHmN3uTtNR6Guu5",
  "key25": "58ZdH2PUtekiQ7aFWhSA9Tx3bEr1KHA1M8e4on5aMNjWPEyuAbsxSdHGiPmX8vEG5Pt8eLDURHNsgzMqtYgimVbe",
  "key26": "5bqTsGYy4WVNqtjCWhvcDwhWMPTu6h9qR4WxzggzCNFhmfLLTGPY3R8Cwek2cbUiujx6NfWPQNDrLRrkEDyvVgr5"
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
