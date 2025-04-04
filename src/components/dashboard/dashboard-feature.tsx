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
    "5PvPY2SwU16R2mJofSRTgB4VuAz4kWRkvffjUvEaYT6DDfacFmeQDFuoz8duCeASwwyxyGFYaGA4FoFhxYN5ujxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWngFGHmnjUMt4Q9XVyT4nU9ko3JMwenuh2EgB51gVUz9FitVuPYfh5YTpo8vEcGmUbSiV3umjmdTZiEkUmGwpQ",
  "key1": "2A899Tu7iPifzNAn8P24Ccw6RXcKWzN6SdX7wH5H1iQo4pfbwkw2VaFV152Rr9rNqCJLDScPys8y1tofcUyubVWh",
  "key2": "5Lr7s325qHs1hmRwirNSSvQsZC3cWhJDwe6ps5m7Rrgs3z8TFj7AESv1PUqdy9buBHDcA5WfULrjhxAPtQ3cxBMR",
  "key3": "3NZvBCZuhN5FbySmnkwJULK3c3aqVRsP4dNXE5JypcPHGHE39qs3P5845Tu1TGyGNm8r46myvJeJKKJVaqayV7gc",
  "key4": "2mNYv143PnMWtWVVvCMrH7yb1zsHFaah8h2Mm34sraZ68Z2H7oySRkG3QiiSjG4BugyBTf9tG3wPxbt1EtNeQjch",
  "key5": "eiZBVnqLDT48w3fo3aFsfPYXiJXLayYBeDsxxMBw8bFT7WSqFzKUqcZvqqRRLwjLMRfkHdSGp7k4uHs5STshdeB",
  "key6": "5B3GP6EY1dbEPnKnPe73uZurKErXZ32vLeD74BamDeQaWmFu97D3kRphQ5ZdvVUGZLJF6Sqc73MoBMs5XcvWnj2J",
  "key7": "4NVM2UpjGBSXjSyaKawWnVMgpkaKCeawWvvXacFoipNPheJmsTe8WgA6g8oX8ZAjohKA4naZuNQgBoeqr7ASsQCG",
  "key8": "5whC69nqz39hgrismFjfv8ML7rYrZVrszPANimv4x4QXnJmm8tVMEGWzygo1V9xEJmCcDs2npwPo4f47t5RS9kjd",
  "key9": "RcS6WZx5RmjquA3HkWYcsF9VdnLCAF2SbvQG6YT1rFfbTX95enbjBKzaucFLEbn8Q96MnHwXBsZFPrfackEU7R3",
  "key10": "5Wp1RwEpwEASBJj831XeJ9XRdGmkDkafPim3nVuRmZNemA9P6DrBDJSMhCyDmPL7891HjSKrBkQoaxgQdLkyWWVv",
  "key11": "5obu13Bivqsc8qHvwxSGM9wS1mt5iCqWzGAsFCZ4dL8SWsNpH6RvAGiGFZAZyATCWD1PpjGbA3qSN7LUYxoSBPnk",
  "key12": "4dkvbgbdAcsRa7RMi8d3DikBEVJwMdfuTLdTvA8VneZxSqmsaKtx56ZS7QnJ1NivDnGh3B6PbgaLKeb5M1cFCHmS",
  "key13": "3ybYtKrhwgbyM84WKQBcFfmo3R95z8HWVcJouhjJfHfkVSshR167hc4H35BUoy5iX8wAbZ5KhbDzCjNL8gUgQaPD",
  "key14": "DyW6rwTv4umb3eVjs8fKCtFLfq1UiSeVPPoxw7bdBuCU8zEmMomhMZyHab28185widftmSNSV8anjiXyPARgyWz",
  "key15": "7sz2W2YwFn1puG4apEv64qFRxmR2yRymdjwErUbBCuYsaHuRkNZbUuhBRkha2fKXuME6jG4XsSfM7dourmdQHyW",
  "key16": "XLmfiS5E1Rrp3EuFSURTnqukx4DrGDp2TupjTB9PkCM7ALG2KRFVrJnuVEwP8pygMeLBbe3WEErbic9dCV4Pr7W",
  "key17": "5ka3qeTvGdPzZp5tUm6mEHtGbjTh8nWXjrrNu3osqFfpkHN4a4CdrMxFSdzu28F2ypMgA2mVD9m8uoxMqWCYSniL",
  "key18": "RPoLW325TtRU3RXSvuEC7rbqDDyzYjVtyFyV3gCRBNcdyEPiGXN1sd8XwAPc3TmQpHMtknTNPsdR1dQFG54hfpH",
  "key19": "4sXq4FnHCyqLXFkpuRHXsQTeg8NKpa7DBfnaL4CvafWfqxYE77Eyae4Y8KZzNLLMxgNL5bMAyMQkGZ25kqysikCu",
  "key20": "4Zrf7Y3dP2ijLRAnoDPNatFfybrX1CjHXUXfVk68qiGPirDv3wmPeseg1xTpn2k9vUAcgMkT9uAHnqsZU2E2hLjW",
  "key21": "3b3gWZx9rSz8fzvhRbX5ka3ttcNSzWTw4YafownLyjgM8VhjcxecDSkEHqDffi5iX2okkhwdiYsBZH7M9GgH8iok",
  "key22": "25zFF8BFtdzKy82sQoiT4o8uVnXeTYTvJzSTjaUtoVZP8vGqChCCQjxShSPQLaSvvhgzkzn4ZACCyZ8EX8igoWqp",
  "key23": "jmJEMaGwa5xnmTqGZPp5JH2bJP1LUYjBB5Vz1mUZjQEs6M5L9UJsphSfeDSbCJfhUegLAiC5URcbjcq78SZXCyB",
  "key24": "hXmPRofUtdz1QV6vWPyfWDT2jcit71L4Z8CLEZmtju5v5CJg4pRWghXXnWcC88CmhcuwD9MJQzrDevM3npTHLaQ",
  "key25": "3XLdM9648Sq9f9A9TNvuLVhygUiMMp2EqT76dPoz52UDFYmfYN4Ya85Kwce87kT3eWUE8zvPNTG1KfFH4Fxfv1ud",
  "key26": "61xrNJLgH16TQdYwmEidPqhFnigfn7guFEsxuGv7jE59icpz5oMkJ3pHEhmCv7oGuXoVjYzPdGLcUps4KHrh7sAq",
  "key27": "33oqh6QP7pEU69QP5FTeQTqd4nkFpkEUdaBGW6jaHjg6SyGfYV2ZmgPxSsXA1ZtgbkhZqR6TAz6A56xZRA5aFZjw",
  "key28": "49xze6UnyeyTMLnQSL2mxDVxGHfBSMPaicHfwSQ6h5Y2WyhavsopkjxDGmKTJg4NPUi6oQgB1kDVa8cW1fSxN9Wx",
  "key29": "3HMaf1DyQc2QAiFzTizQvzcGTLVieAciKdodjzD3SMYxwijEKYC3J7ZDpT6srNaGRwzA24ahZLnP3vJaG5TmJEv2",
  "key30": "3obuZhXeM6r7Ej2w6XK3U9F4WdCCzP2rpNQYuwDnviEKLTY1531ouZEMGGz5N9iVewVJRbCSZqYCV3ab2rkfs7XP"
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
