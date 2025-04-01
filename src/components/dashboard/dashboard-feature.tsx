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
    "AQTG8HCBzzZqAH1k1mDgqo9mXkN3VqXQRGpM3sAs168g67a26mmev1s24JZ8u9M48Nagi7uCXEDHuiPW9xeWMy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xb6D6K6C6HCCq525q8oQuhzTzRu3HmJjfKRoti2L4659x6544yMTZbeEgLd1gkRqadxSRvwEfbj26YekpSczmvS",
  "key1": "D8ex3yioqUoBXuMhd7iN8Ts4GPgDr926vtVM32SRiJH7WVAN6uvUZfXUqK5e4aUVF8KmyLZfCsSkBFGjLDfLQhb",
  "key2": "dzvRT2xpiwYzfJbruf55Cr7B2eYEMKL4319RrGnGxbgtKuDsghEd1gizrwnXdCHNWqMFqy5quYrSnfaENerbVfb",
  "key3": "XkAb3oif88fnaD5oY5KWHXyxUbmgiHcdwyLfTNnNSGqrPKiGtcVeepkxBmjUh7JYjeACv874oncKp6nEWQgjPTK",
  "key4": "3pf1u17eniNy9dxPrWha9Dgj9sKHEY32kAxwLddMuY22PoRFwW4cUVztc4SRXbPiBVdds56rPmcoCa8objzbnG2T",
  "key5": "5xRpsD24jqMC6RfkppZP9HiqnPXTaMJZ6WX1LkmeTnPi6a2BqSxjwpEEmSixrtTcnK149VDwVkQm1MG4qx8syVnF",
  "key6": "zkFfmnDVFEg9PyxB5CtGFepystekwdmgWp5mHRpYmQ6oziE1o3NS6dDvWxoUbsmNLfdMEUJLwfryFkhrRTSFy36",
  "key7": "53NN9uz2Sn6XKpbuv8kaP4xBHCaywbotCqnDTapEG8QYNf1Mc5gUGN4hKNpRb3EPBya5kyhuaJtXFHUjTBtJLSGb",
  "key8": "4QaT1oU7rtqcpVqyvjFFXXW1nNGwX3Ek2pfbpN1BYQsGnsVoWhxCRNSiJoHnGdG41iavvw4RgxDos8ZUNMdyjHhr",
  "key9": "3iNXLmsNLuAFwi8B3CHXg6txT3Ab1hpZxBPtABmsYi6bjN7xZB25ZLjKPPtFpbWgRyDaq7gUkpY58Sui67WYsGdz",
  "key10": "53xXNqJipQL1RkerqaHZgJMvUeAcmH7V4BNnKiXqpXWWoXrGTNzWsaN5KzTxReopHr6HoEB6hXHH2w3orXVMztY4",
  "key11": "59UUb14MJmfgPAduGFDaWgbnLLNPz7AKg6K21wcY9TCmKw7Qg4Nae4FB6Tsb7dbTQrZC6rHysBDdUgH6H6Udeqgz",
  "key12": "N2LuZ7GbqHefWTMbVDDxHfXvSPGfryZVEs9pire1sVt7s1wTZnFX2MF6MZkrjWgH9giu2JyRNP3hrMWF3pU2ZL1",
  "key13": "XFBJ8Fs7zWD6c8wJZ6Mj2TE1b3MHjCDLUi2qetY6yvWN4JoFdHg5uxXgzdFeuyY2PY1MQGqszsgKJvFyVZriUVk",
  "key14": "4jsf4GBUYKyqAKnnTCLNGwP3fi85iFzaaRVtGvsw8m3o2kE6QZqLKJrFpxiUGFGE5hfWYqRK7yKQLPMgymUzT93r",
  "key15": "3bR5V5QGFWti5aAxJG1U2yCP2sFP6YYREWs3qtcABboBsjvsS675qCcJsJw1k6dc8GemqW4k2HkQ6c4KjwLp3Fj1",
  "key16": "5qmwrZ6vGrLprBLn4oUtaroZDmSACn2gL23H8ssNUW9hVW6eg9cC4vRPqe3HFzunRNQXpmp3VyVtoPzx1ZGFXEBM",
  "key17": "zPceq9A9sySjRoy1vUL2Mr4xBsAmx22JgT4uBuLp9FCUZYK45xCj9QZbG6S3ny7LVBTbpv2yRA268Wy6tJX2uU4",
  "key18": "3ikbmkQrDCosdMMLY4Prg9mSkboHpqi1TMNrweSfMeJd47NMCDtYKzG2dLfQo4ayYzBokswSoUQbSBYX64bLEgW9",
  "key19": "5tjRwqLNPCpt1oKMLynufb18utZi8StjNwM1h3BRgV7uoTqQfsEKrejSLhmQCqUAwE3TxE1jKFVEgv2a7YUNtU3t",
  "key20": "2XfXsqjnuXYbUcN3Qg2uXFJN3VeHRRPdt7mRyFSxCLPsdhG8jNsfndiJNeXQUZ16xq8TJ9ndnSf3i4mUawmauGjv",
  "key21": "5t2Nyc7JZkwta7Scz4viSLv1P8cGKsor4fTVcs9pTtWDToTWQqNYjZZ7heCSfpM2XQm4fQtiUoPjCM8H8EqmHkWG",
  "key22": "2DQCeWPE9knXesMLc9XrcmnzBniyg1BJay56GRTaK61tDUyt81NqvJMyQ9FYj1gLmNchxsXi7c2tw2H978zEbX79",
  "key23": "5tsvuXL7hiKeZuhMmRTrfCht2mTxLodQwSrhAC6ontLffBCnovQy4po9WQi7SPt2zeDEd39sm3xNd9t8XUA8Ec4p",
  "key24": "4nMEkv1RFT3MggZBVLwzJj4Th2aoWhAFuQnbzPe8Q6LWkKZuiMQRPPm3sQsZdrzh8SxkAawJBmVqCWZQWe1KkXnA",
  "key25": "5K6rmDXkozuSPJaSdhKQweSWnpJujZ7v1t6QfbrSZNBnFf63va6DyM7nsa35ttMV8J1MWSzpg22MeLW4WoKiAgwn",
  "key26": "36sVEbrvMbo3g9f7LMX14KwFiuTem5D538PxnjwJ8hXEagxJx4QdmPUK7wAT2sZpN9g8Z4Ef8Fq7fobNFPFAncuA",
  "key27": "5XBc2EDioRzBbquqZAcSKFEekSzY5RdzuUbHEuYU7K1toCU82QRw7AoNy5hkALgBa7ziJhaHiKER2KHUSkthfhhQ",
  "key28": "sJcNoDczEch3PzAQRE9si2F7K4WWvojrEYmBJDvbuCkXxaguH9VW6sTG9cGpHH5W3oRCmBFjFvbk2XK9qEZFoZG",
  "key29": "3ugmhFNhLuWjV4SNrY8y2EKxG8Rvk2Nfhvd7HDKHZi6RnFiHftEhhcjuf2ZkjmRLwvawqtMML8TQNqrC558UG8gj",
  "key30": "h7HKjBYpdRLQX9r5BnX4Kphh1G2kw8dyM4YLcfLqCKTo9Vt5REif9FBK7kVTM9KeSTxtqKcryCcBeqxYqJE6HF9",
  "key31": "4zTJJDMD5Xq86KwxkpTxem1oPvpzBJ6W7DXxh7uob6mzfFvuytnLGeSBELLXMsenqTt1Tf8xCx1C3cZFBAmpgCPz",
  "key32": "cBgRRw5Vzq69o8LajR9cixD8snbvJyzCVRPFoZQFvPL2DcYjQZA6Y7w3kLbW1epjSH2Kk1Bt2Zewb99NSveMLhV",
  "key33": "4ca1FuwhPBKk5BGFq9pKQFBXctSuHDbFofzmzJnAjttd42oUAmCSiSrXrMh3o3qLTBuooPjyGsT153cyXAgvtw7A",
  "key34": "5M6mUehkaY9pwtW5jNcuV233YDXGe8NxYKEEXVK95gqSoy5G2pvxQ4eR82nHJaiW89fLcWAnsQRjdgZxSECsH1rd",
  "key35": "5XQXNGNW42bWyfBxc8crx4iDehcEJ35VZ7JoPebKS4ULdvwXCYmFEz74oBeCYebz7wVJjZRyN6r75kGEH3xDK7Wr",
  "key36": "64Tq2aJRMewpHVF8Xf98mRvLhhSxtedkyBSyXjzPc9HR3kQdc5HpcpD6hsk5oir8jj3hDGnRcgTTSzY6U6qt3DM4",
  "key37": "4pw3EEyGQxseN5XuF9wZd9oQ5MiYweB8VmCnwgjiZ2qkdaTy1rC4G2VYCA3W1RL7NqPHpBjt5PyAu2rDTjF2eF9t",
  "key38": "4Gr3wkdKMXK9oBC9kuL4B8iGWiwQRbZNWMuVftNwK3LqnhJ4xYNUTZ4BkSwJ8exezBTNCV55WVH3q3D5WvBYCT8W",
  "key39": "5ELTaQb55un41r4ezWecEk9FjCyBCVy3fx1um3Yco8eY859DB3DAfBHquq6Ujc9MuwLDDZG1N6HJuPb8cbgcPNKq",
  "key40": "3eKhKEF7FHKYjLX7mGa9edDhxhwg33TJFWFDcNrdLAKrLBpXCFkP96RmgdwQmWUEmKdudhGEbFZy98hbwiq8Hn6a"
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
