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
    "4zRUAmE8UtY9XxJNvFTK5XYGjGDLX7d5J9ohsVr697kMquspwdpczqwSzJbgvWSvipUiBXKZK7WdvwJaDeRAja7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqFZpiTA7k7v4tetkmT9XMyuWWNgvyHKLVvZ71vydfGRC2KK5THkoYGQqeA3MQfZezCxTfXEgKsoDZzcUoGWM1S",
  "key1": "2ALQbb4XYx78dcb3UhE5n2ZPtAvHAtabHSJLwLMNM2DwpBZgUzSarAq7qhPXZS9ocGXuWT1QKM9CEYop7YjpowPg",
  "key2": "3p6gKrWZ7xNSER4qkW9rFqrw8ftPzSuBnNhoe7GgHp8HzkFUcCy6X6nboPEKYVXqdgmsyuxbokHsmnEv3dKKueWi",
  "key3": "2eKRJ8t6kjYWsZ5cDhteitxL78rruemUmbMrefcCvejtqbEpUamG4EvNfNDk3BC2Wqp1vJCAJbmjJ1Z7eqJ5hqJD",
  "key4": "5AEH837E2bqHqgYnMCydg6Skoq5xLyoLULWV7zJ1y7XCQRPkMw1EJZGNLLsAZNmYB9oR3W6UdGiQZc48Nk6EqRSk",
  "key5": "2ozYMdh6LQBgHBs5bN8q1KNd7szTqN7SwxjEqwotmrCJ3B4y8gnVJMaEmiTbMBc4jPwBSZAbKjUAPQKkB4bTdQuS",
  "key6": "5xVRmFM3kTucw6Pd54vTxRXBhf4uFUaQYUL4BKu8X373kqE8CkarpHWm5Uqqd1DnwpkNa7RhXZX26B5XGRCjzSUX",
  "key7": "2imYjpHxTJYjxygbBZd9YE9NJMsJgNqHLeAZVUeUtvMNkkNiB6mFyfm4th8SYAC4kadz1XV6tWiAoxGuaLVgjYv8",
  "key8": "2eBGNVHc1sV4s5kwemZD3jCuo6QPnxvzWY35ax3gxzYWjWzh5BJejtigZguHzAB8tkkAgKhgBcADX5hbCi21xNU3",
  "key9": "P7EMSR5EgTopQ4Sjjsz2Cv4GdKrdENtvSFXaCY9q47m1p3M6NvTx3cDa9Kuzbs7Z3ZTL2Eua6Kx1XCBHvpN9kmf",
  "key10": "4cy2Pn1nGCXwvJqYNei3bHpNKkx5PEBdat6pLixD7mKhY6Z7bAd953vdEmzvKF4F1MS6BNSwiWv5nE8BXT1EnXzM",
  "key11": "oCjUe2zpALwkv6Ta6SnE6WnecpgrUqB7FyztxqKLR8HM8FBSovp5M1he2GV9fvZLhMs3dChFWnknnRMZytNxWST",
  "key12": "2Mg135qV56sBT7L1ePR5TFryjAuk633H6YtJyYaXjqtQHoBgUcmoXpk8kFPdXuaJJX1ELhqgqUceaDwRXYamPqxg",
  "key13": "2ZPnHvxARNutuVCQVBJfcngqcRF5Ld5tKdX8HJdAKLQhF2aoKMzCYGpbuP4VDJa2RK3EGtK39mjusVLe52FNjDSR",
  "key14": "53oVE8xLrCV2qRFUVNShQSyLVuUhfy2LUhGD9Lehfgt24aciqdP4tQkS7k2sQtWEeGE4uxbrFXH8pyjNSwZMkToD",
  "key15": "5DyCv5JkPyVRjM2EtBKtXuTQqtzq3rp4ZAYZjr14AYaK36RnmQvabaXPk7eJAGFMT6T7eoVmuSrG8G7xaqNY71dD",
  "key16": "otws6qT92xcXK3Ew3pZNTEfqSnSpheE68zXj1cRSwUiopZfCnubakYi2i5DUNhw6C7njjQBf5WJtvMZhhytZHBN",
  "key17": "351Ki419WB5qc3rjjQ1HVqDPRp1VQjbYouXMcbo2uMHBtv1bL1724ni9uQXXjhjf1xus2FpuXT3RwKyTbAtSsKwN",
  "key18": "3dL33Ep1tmG2YGc2536JNGobwJTrUJx1atVDqFMznzjd3MPE1eMni51EZ38o56HyP8a18e5ThNnVGE5y7G2WYzfm",
  "key19": "4uJtq7Z9gyX5s6zWYxRzTx29DUTaNgioGyiRri3nE7BbMFihvfsz1X2sypvRjSvnXcoWF6Wdz9HVN9JkWoWiVE8i",
  "key20": "3pqtme7hLBMGK1rVE8f51srPFWu3jy4CEaW3jUx89LFsLBS2nZiZAMu9CShtqdmUoDKM8osWRQLCrZDCa22fQGc3",
  "key21": "2HpsdFiSYxiETbg98KCtnn2rP9QnJSwrHK5MgPWPGP2zHwE2yPxf4QFBhs4xe6tXAJHAU4pkg8PUccKxx9KVurXY",
  "key22": "2vFK6ggojUES3Zku5LoyLCzVMg9c26b94168J1dMeij4v1RsGmgDEM9wFR47aBGqPRKghZyxbTw2CW4xbTifvECX",
  "key23": "5M73RqcL4kTRGwnhwKGewz4buRwkXbrtvajiTEcKiWzQ3iuyh3F4Ws9iWwFqkbBwa5Ebx246xqncGwWyRDPMNiym",
  "key24": "2XibfA6Q4DPDDoDXaVcZscieau6wsKXMtpsMKw4yCKm9k4bJCBEeU7fPKGjAhBGGJE7cmASAqh3LXf4EiYTtQFr",
  "key25": "3GUWNoST2DXvHXFubxvxrGh4jVEwD6fCj1K4oX3aC8nvqWPbj2JJ5tBFKqxrD9NXkRxqrvmp2i9aG3Ec7oU15r1w",
  "key26": "4sSWy1qqYpt87TLsovrNf4bP3ujovf4mQpJ2c7hcM33LPrZXzmqdo1ezk1B2B6Dqr27su8p7ZxJ7ofG4KLbAZMZk",
  "key27": "mrx8TnQesaRGv2ve51NVXvCD9AZxpsF2eajxq1k6zyU22PrY7GEFSqetBCf8uMuiiRrPTBvnoLQ7iUMAwQdrSud",
  "key28": "raydx9zUj1H7Nr2uYwjFpFNJoWUazxHDgksJwuQJCF45gkeiZAz26tFALPb1UiXoLwaD5dC3kSbeMVBLVnNYHTH",
  "key29": "8aa2aPj1TM65PXAzFRF2NeZZDQVB2MaJjsbUAQpDpPL5hkUdssWpdSzgkM2RUnR4z5A3eGtc92zfJvjZohSUCDR",
  "key30": "44Qpy1rbiM8PmHF6JQvA8vQvojFFtidtXhpKDi2qTth8oW3s82TbJRsvFdsHjcKR5vUhVPGBQGPRkRVxKXmJMiqq",
  "key31": "5381AUr7P56DGnQrJysYKehTacHx93aUkBjxVRz9HRcwXe4ZkwVxN1fPe2NRZBiTHUBj9aQQcWbFjzUmHX2hVUxT",
  "key32": "5Pw9LkhDLQCdg68tPAmLQaAaqHCdv89bR6rbhS2XXpSiZGL7qKHKGjjNBHYVixxUJ8VzMzgT4RUuaW4A6aLhUVKr",
  "key33": "34zDPgGMzavC3ztVzCVSZzfVS3VDkFEaUxHTJPh45fUxKLH4YxqUEbZiaGwha6bE9h4E37MXoFuYotU1oZaJJRce",
  "key34": "31eVPwhUGFuYittewRCbNY9egV1TPEmM57As83haKQmpkjjweJBZa478oUEZUjEkuaSB3w2JuerwmcZJ3nSAcmVT"
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
