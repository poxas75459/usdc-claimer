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
    "2CWvwMpZa4mBY34cKxy7QJBgFQqrC3dFeig1cKpDgyyYY7rL6fiYvgcSRPRMNW7FZ1c2Z8vtjesk4CuZr6dyPMNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUmkMkW8kL8EBshiUULE7JUJJq75qFFiFGundBnqP8v3QFKYFrVs1NqotvrumRt5HrupdSytiqZ9VoYmvxhxA6P",
  "key1": "26Kkfj3kPoSH6nLRaMSFPtsUYwx5Rn38hY3FCqh1VRwz8Eb5KeYb2v8jKY6St23pfJzggbYP7eEfSWGxYz4PKcwt",
  "key2": "4A3jkJDjBLDpUovUB9N78UdnejRyzLYZ8xjcHvzCRgBEiSrvBg3mzBEcAM2MDdwdvZCqwNrisVbM4c2AJhuqjMJ1",
  "key3": "4dZArVJPuXR9podkm9BV667KYogToJ5mR8jukc8yf7uv2sC31oK4aogYdwva8v8GLSABysuTuoysFP8gsK69w5VY",
  "key4": "58R3ePfVf85JCYTt1ovjrzbrEkXgaQv5mJ1eTK82fcgkaspTdAuaFhns5Gp5k77ibJ5jUQZk29TJ3L8wXuay5rRh",
  "key5": "2hayV1HRcxi1Pz3QfibxDxzumG6uYwvW8oje5eiRq8PQT4umFpx4nY3fnodx366qF6r7K23Cd6VZdmGmw4ciM2H1",
  "key6": "44ntpHrFwLRsdMcM4oYiPYFoGUBAA7Hg2jSvYYgnjGo2gLTpqm7xiQP2DXFswjoeGU1YxgAgk8XvTGeWrDEgZQL1",
  "key7": "5rbVCB3RhuKekWB5DrFMRweDXxXFQZYLt2qRT2kSzirZzLH5nADu4bMdMhwQtaEBkmBy6JLTKker4mD2Be6gEoXK",
  "key8": "41DNxEzLHKPD5GGef8pGzGxhC2aYWcr5Muvi23gy41PRSq8dQmdsHqSctJgjqPaLCVMLQEtqEHj6dHJu9bKygBNj",
  "key9": "2mqF7oyUcc51jFpiUwi4yb4gYg2JXDEaEnwYyQdY8aoRq1st2pquQ3xBySpxPJHVXAcBSjnavUPEiBR1g2vibR3m",
  "key10": "3tKwJNaHp3Yt2qfG5DPJKoLYBHu9CxbN9HfnxQrdba3fZ36aKEeZNBL86si2HwwP1oKnEBpEPkgKxyaYXFzEe5wq",
  "key11": "4WAGpwDPeJx5z47XGiiZZYCeuxm4eGQJTYStuda8Hx9qFfmCjH3Uc27EGVQ5r5i7YvK47JJg1VfxMAkHHQBaqFtQ",
  "key12": "25gK2KA6RZ2psG5p6VeM6jS4gMj21ZfHZ76z5pYBbcYUfiusJtdKtSqYpkBwerXQX1nEPNU96Kyrs9P7vszixSib",
  "key13": "4WaBywyEmb5CMSxTPYftVNSG3LCCUfMpU72D4JWFABJF9F8KNzKu71rBuozzJNoSietjhjWuArF2SoCeMBAaZEKd",
  "key14": "2PYRAPrCsrae5N33UV3vbeg3abKre9fPBTdpABB9xZZCXGgcQf9JTypLJxvicaPhSPjm434wdF5u51vqubBdmt3b",
  "key15": "5wpJAcogTYCLJvnQy4rCpF68YUe9u5tWuUwogRpTrzm8ResfB6nKGawDaiVZiz5NKVgj4HnHeyu2t3XKfwdRBDbP",
  "key16": "64Kz6NCjBtG2T5NHrPh8yqpkgrXz9GaZKSs4tuAMNu2P3SykPpU35GdLpkf5Qh1Q9BRS2ovZQaiCAi76KNov2vkU",
  "key17": "4s5xaNxZkzCoof2D63HykZCcm9pygGEx9dBck8Ez7ymDqqzt9FwzmvDkUj3CdYtPWiPCSh4f13n7fPwZSANeLpyj",
  "key18": "x1cDcotSNH3zWtSgti5zsJM7EHGevP9UrA77NpNnqZDh2inj28z5zHkb8Wtys5hk7eoe3HarpGizFkAqp7ygHpF",
  "key19": "5f2XTCbXcsu2rtCDaKzfpvevKaCSHvPYFdWqfZY8uiW8VQigpS53jBgkY6SkuEEwPNCLpYrgStu22YQBBx9UkDZU",
  "key20": "3TfGZpMXZruvtpph8XW6fJ6Ub6De6LZFgVGKKctedaboPeHRpc6a4X2ypoaQ13t43fo4MfmvL49Epc45w8r7jeEc",
  "key21": "Nt9iYY6oyzwqEcFc7jjjneFfta2Jxi9GKC3K9kHm4s11dim5ZLsLA4YVUmnVV2UuTw93xYi2dqx6MGzYeSM66Ko",
  "key22": "2kTPCymfDf8tmV2z5XhK4BupgQxFWq84LrmtF5Q81r6qf4cV3o7yC39dNuXZ537jmjr2XUCuDsiVxSFqgfEPZmgY",
  "key23": "5hx71ao73dFbD5Xp1N2aPx26GomHNi6CV6vuszLgcY3EKBhHMMfZknqzihp4MYodDFoCmK1LwgyH6UyEmVNbDR4B",
  "key24": "5du3jU3J6HWcFyzTZXZLyovGLRGTcYhKaUkPec6WFNkPgbMzkB9sAC1XRMBC12ve1to1PhuW1PqpZEswAbUHJ6tJ",
  "key25": "2qe4tfDcqazduTTZK6aJfXfCCCMD2XaeCtiH16QxkmgAkkrVBRc8tSXgTHiuyaJgGPanBCGegRgC7tZA4DXvjAqw",
  "key26": "2rn1RnFFUTNvPD8zMXKHFSpqhpvbVrB1p3m2NoJrhWCi95yK6Rjk1627fCCBeVx5ESULA7oDEVhsicyLivdCuJZF",
  "key27": "3B9ugC8TBghGBu3iak1FftYKGpJofR1pfyjt8iZZhwfPJc3pcCY3qXULFAxd4fKwm4o9hZkYS6rgg1Vj2nX2qNYN",
  "key28": "e3f3mCuf2Mx98ojAtNAJZ8b7Tapge4eAxm33pCJqGFxEJBgigEJXzsqQqVjyDqhYsij7H5xZNtffo8zyVuVbs6w",
  "key29": "LzpnVTdt1Fk4C2W9dYxJUajDhq1MRvKaZGP5Qc8orXjovJZf8UXiim1bRvxjqiP6GeMJ1A726ugVhBr4PL6erUP",
  "key30": "2RNTnbNp7bH6vP1UjpwZQUwZS4jVC3uPzGwpK1CqCBKmLoBqhsqdbZQ6WvwiKWNNmfEtGrEdedAyJXUudccdSViZ",
  "key31": "3yqw2j5863tjuY1ExXaSraPEShSBWWXa7ghqCUHyycJeMqoikCSzaAyNVMVo3NT5wCZmZKEvnoQSSJSB8TjmTaqL",
  "key32": "9zhupNdwpDLvZvVt6zj3ASCDXxHFCU8XtM4K6FLv3kKvbZ5RRyAArsvroi2wiKwAV3LJeUpLNUrghVR3ttqAgJW",
  "key33": "4J8mqeKiXHQVQ8JZsUGrXuQy3hVpazjfCMB5uaYikRr5GWA5xgD86pCUjdeqf1zhs88Dcz9cCYQFi7rwTxYpMghi",
  "key34": "2c7V9574mdV2F6kYNB6znVvoimuyy9Z9wBu88htUWxw5BK8f4iJh1pSYAyhQTL4MHbwk4C7eg4o9DSVHYYREUADe",
  "key35": "qkMWJZ2fnVLjEezC8e4bcPksdeFc8CaUe13QqHCR7i6Sxu88e1ywDKhbxHhKCPubmHsVC84Skep5eoRcGCArhQ9",
  "key36": "kyx6QW9Ss4teya1oqpSwUReL98nXZ7zoGQuTdosG5VY3U61yuECs1Lw1fSc1szDC7aMDQTz3qA3V9CVN7o9G8yH",
  "key37": "5cXEvy5zSaSQ9FWerLS5VN5ttWWDHFxX3nDWzDZMzjr1QbSyu1HmJ7Jx9LCvZnnXrPzeQzjxLCfQvJJGCp4VobCn",
  "key38": "3pd54nLXMHs7f7YiZbRsx5zAFff95iudaC96G813KVzhgHPn6ZV46UerkNhw24mi5Zg6gpJVhnr4rkNsctpd1AYN",
  "key39": "2SSobtZUS9UMbLfD67owzNa7dfJgmMCZ53yX6rrZsCfwQj55wY2CGewWxPJuxRCuwxNjLYCxDYyvf1iB3Yy74aCU"
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
