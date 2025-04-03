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
    "7dmvb8e25bRiHBqbnK7QFveddXdD8wsxRJY4GVvMLaAM5F1nFwUuUp2HwYng3brjaBHE7ACph5aFLXFHTnnu2Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JohN4DYbQQTAhYU8soWrnkjAMBoAwT4Zq1W91WBuS9CCZPpPp4qZwqhSjxu3Row89Sj9XAwAuBefYw4DXWAgcP",
  "key1": "3pmo9hVhrAacnyufcpWwbQHPR6M237mtMjAnec4g3QBxUPcLLtbYAGBsyi8g8zTD8ykQn7huqFXKDNw9jPb1ZF5t",
  "key2": "4XSddGJz2sDShn2tK9w9nngxqvMACkpCbEi2A2KkPK87QFckvK2w5jXSePkVGkNmJd4gwBm5wvsiLtemFeqrWGnv",
  "key3": "4tokkceZMacSRFTvdFUdQpofoDVueHLiqccqP2UCCTsnkX5U7YvcbQNpjUtwWd92NvmUUpg5VHqp12BP6EZ2qUzG",
  "key4": "YFBUBReYXRWSrKvjQiHovELFBWfbCaYxuvv1UDVZRubAmNeErQVrq2KUCVDXsjbRjHrN8avSVQBMi9eqUP1hsyX",
  "key5": "4rjkb7BPnX1zB6WeyKo8dJK88nYwHC1VfUsWdfxfWtpgyrLhSwFCPbWJprJstKpFT56SGudCkQUkYQgcp7B96d9Y",
  "key6": "NG2uqMhtf3HvvCfQX7RKpoL52kijRmfSff1ZN7Z89SKcPdiXX8uk3p3TygG27z1ZL7VEJeAS8HfZpzz9TNLmGpQ",
  "key7": "5MQAXayc6Bgg6aqsyoV4ZwnVFuVCy6vfECJUGCvgDMmEHKwKYWnGMFzt9BYgm5z5RDNezENH1TvxXTkLs3uuFkbw",
  "key8": "5McfnrzzivcgyeVvi7BTydrECMjy24RdaBiXsGanR2wSq6XUfUwvNRs6Whtk1RNkGPyr5KtD7nSX25Svbz7bTSwm",
  "key9": "24sBRxiToTdKU23QN6rSCpXvQ1mvHubDorfmrbPk7tBokxCzNrfCRXanHRuwCBoKVCNFStpDX3kvyXGZuegfp1Qg",
  "key10": "3mtnUqqK71eSfWn9p497MHVsifsvXKjKn9joFkcCvCU2npRrFY1oFug3cFZkDx33PbS9BVPxLJ554aFWfjNXM6Z1",
  "key11": "4kVVSgCtebcYj3f3G9MyxagB9oA8cERrrogqPtKJM2piSXrHhpVqK8jc3amHaYGeAKQgZ9v7v46RcUKxgMxY7LAw",
  "key12": "63ES2BqguSAn1sRN8v12cm2CUhFCPWA9Ny4QSDh3wYa3KG3kMbG6vn9ThG33LmcQ7jY9fpkXthBT28DNXo3dGvmu",
  "key13": "3dqrioe7HLsWFsLg1rxvhffoH6bYfXj7QJqBi5M9ootPofxiLPSWqkXRW3YZPGfkLkeeGjmT9H6y99KQhPT7VaTJ",
  "key14": "2WjtTWaVV8DcwTnJcDijvbX1TECVa1FXv7GnaxXtLdKr7DXfegvTcBHCMUyNRCPtoAvj9G83fzYpumeGYENntRqi",
  "key15": "BsEcDQVsS2oswsMbqi9tsrRPNs3zdhTbQCrNQ7hRF7nmsYKsnxQLteeRUBH2LzvLfSfCHhYP51Th1uA3u3Snqru",
  "key16": "5L9CyRo6ndtZpybULM1uUJgMqSz9GFPsrSFtRr2AumWdVAzvZU2BLjauSkiBT7QqJJM2N9gMpjbyDTjFqLK2dkF1",
  "key17": "V7k5ERwdcnbszmNzxVdSpoWn8Suwz4sKfHrik2w8u98dRdzkHzo7DeFJ3u57o2i7dzyUbyA78JpKctbjAENAyXh",
  "key18": "2hkXvgERduQ1UZXQCyz3WLBYLz9DGXLVXrTBHkJ4LFP9HTb9NJWEoKKCXtvKkRBNneVzrHpeZk4uGbTXqufEcWwN",
  "key19": "3r48SKrkGEFizs8ZyHYfuhkvWfnjq5XoDCN7j6JwYXDFcXgKfaigBefismiu4kwoPFkbMRjiw6EBArnJYvtcH9Ht",
  "key20": "kqCuiZa3RA3R7nzofHhk2znpKnYm96bKgj7a6XbPkt2YSvoiLBQddjgyh8wJ6dnotnxkgsbhZH9e4UHKBFpwVRa",
  "key21": "4SVeAAnzviEvnnThcRgaqm2tqYH5wF4L6MYYRbQ3f9PfNym4r8nCwa8jZD8EDKLQ9VXadrgWTfkc9duwgoJdFP6M",
  "key22": "4R9sk6yP7XHowy7XGYDvSGJ569SLoKKdFSXg3RaEqoBeV7KfSSarhr9z8nEs8aPc8K81uBzgdnTVBPvmcJSFfeyj",
  "key23": "4aCAZBfBizbciPxxJq4LDsUbcygzNB7Tau7FoNCm5h8QBRMbKrFvNxiEXbabnHTfyZuS1cZK5RPrSTMN9v1ropfe",
  "key24": "242gnsE6NZYtXJymgVssZhLywFSVxuW7rqPicQFXt3Kt9v1WgiiBW2qfHRCibKFMnzNVWaGaseFt1XZV4SMUxU6h",
  "key25": "9Dmi2GFWCy7tFAc4aJrREmcLBwhM1Lnt8X92W5KZRg2hkhC92HTCWTCCjq3JtDdK4YLPqnHZxzwpKF15YLFCrop",
  "key26": "MxhW346nBfcNvwV8xFrTYEUoVVyS7yfDm84ZraBQ2BuyJn29igRKsByz6vC6mv4uiuZtrAkoRZHzLiWvh533fjX",
  "key27": "5sAJJ8Kc8xNbUoXmxygEtGTQa6v1zUfSWdmi92TFqG6zCKpLhxzmw1aSUE4fPZFT1Znomf4eNSkBdHTY11Vjkpdz",
  "key28": "3o63UJfWmXZPbksf9P95SDksZ1RwgTrHLcZ5rQk5GPmN1v7snBA8xmMnqX2xe5zgvfGPKemFSW7i1ZfNekvCjyie",
  "key29": "4hehdTLSdbvNUzK317ZyaGa6o1TJu3mgVGR36pWuVAvU4WJSZev9oj5AsPPcu8mqe9bWkjzA2XaB1NCiGP6qykbG",
  "key30": "64MogqN7u9tP4pkZPD2m4MheLVnFhbRkJx1YMRbuv9hJxx4bt3L42aRmGYKzJxt8fdzTic5CQtEDGWR1dxwe3FtB",
  "key31": "2Ywu4ZzqwfcZxBen64CUuGtpVcBkiD4nHsan65gkkLY9UzowwPDsAKREeaRKAHext6dEcQhpChussz6iYKVBZtJm",
  "key32": "2g2Lisqm23P7J6rrpQfUEEPruFaaZfHrNDnaLGw7xB7DSUUpbyVRqqGxzAWoUYnQmewA7B99M5UHwar1G2kvTvEP",
  "key33": "2qv1QgvC2CuKV3i69nd6ovNmWuh6SyW3kUZpcwAFTNzYp8HEasfusW19Jp6zk5YoNEhpUTmg6MNU61a5TWEWibBN",
  "key34": "42qkT7k9VfFL6iqPrmNXzBSKwiNy87qNEqtq3xs3GwJ3ZiPjURWhaeUb7NKfLS9wrN4KYnF4R5GsnM1c4Qd8B8KR",
  "key35": "33mBPFjmVfQ1vTgDZPb1EcdGxMmNoNsgqUYKJTkCQqfQWHW8UPnu5xRri7D3f8vK4zvKmsEQA2LRDsWxBYiG7oGe",
  "key36": "3LFmswCt6Ciew6EPFbq4ZucUgWWtoeyzKNKWgBBM74Jz3dhR29QttD9V4oLHoQmE7XJJFGGZGe3zSNA5UkhgBRG",
  "key37": "5kpRYDXSuanaxoZVakgcuCpsKLBLhEo5JjFQNqDqbVkVZcuLnkf9RGk6LLSLspzhoHP2SYBfXSRfrrSH5BD8Shmz"
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
