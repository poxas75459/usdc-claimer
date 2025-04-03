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
    "3w5ja9dgyKPvgYQhgr94c6uFw2LUPuEXi4oi223ZuU3ZUJFLKjSDmpebNVGQBSjwEQZVLtyx37Yt7iDzXVE1m5AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TmgyW7sbTuDFLjLdci9ZE5YfuwMSy2mpEbdNK8Q1oYkxnkunWzRdHwoeaY7gSLJT6jiutDKuEmsTHNkKGxqJAPE",
  "key1": "4GmKvWGN7A4R5cR7UyvmSRBu1beFx4B6AocNXzKSkacRX8UKfYoZDmmHkazxc1K7SPq1A3Fy7C9U5e4fCb8231se",
  "key2": "5Si8hmYPB6jbjegAYW76PDokPudbksR24GVMc9M21iVLaJcdgfMc9hoCdzzsSWQySjDfhpmB4iN7BRYBLXXjxbrE",
  "key3": "2euQEBSk6y1pcX8xgQetynJozMYTYVPzwUWxYaix7HmTPN3tVJ4pbBsmKpBRSJaNjh65scHyMijRU8KgQhri8uQx",
  "key4": "2ns3oBBhbcpcLV8gErMnL85UvGCjpgjZ5A6WzNN5Y3jY1SVNSA33Mpms3n4AY38rUK9UJcyLxZEy4MehedZTdYZh",
  "key5": "5xSDD4QJ3jc5t25iTLS438pXVHtEKqocjmjiLDujy9Th9RmaiKdApuecktCcxPwfoLTpfVvoNnJ7thFHdp2tj7Co",
  "key6": "28kKNeMq78qkK8VXksBEWAgdTv81rDcAn4TVgAyTzNw72TePwzXAejspLAka2U5Gy3TgfSVSp6nnpyPkkfavFQdc",
  "key7": "4cxC12hkgM3NqxBqYLjRH1y88or4MrJHvE13weGGGnDRKVtu5NffpmCjVrp2XUwRem7q7KGTu3cVqNxiG94YWxrD",
  "key8": "3J72fs7NQYJYh4d7wbkgALtLjZykYs2H7cM3VrJefZhtuTSeew9aFAG6HWsYSyxq3CLKoZYUEMKJXqhKcLBg4Hec",
  "key9": "34eWFxD4Rw2N6GKRSNRsJ1fAbdKfNbs9k4jv89MTZcaoc2CfXwwDiWquy739VnxJsysiHfAhoGxLsfRrFPjuMRK2",
  "key10": "N9oqHdUQSJRTYhx6ARr78f86akL5yCTib9BFTcNK4aFHsQovJhvpRuv8N5Pxhc1xyhwAAcAzRWowQHrA6e2zfhR",
  "key11": "4xrMoNM7MeWMVZMBsWw5kcUzj17UwXiepUs5isY2dM3eTcLXSmN3Fp5WsetwG5ckcs3njgE3tYkyn74nfSz6tQ56",
  "key12": "4YgY6hxKxYVZo9GTV7Gn2zgM1upNzHSvnizTymqVRtTMiJaXUSm4b755hS9zHERbfnAZYRJwgXkr3jZxDq8gAZ7A",
  "key13": "4TyXMwJJx1aqu1TeGmvFuk3mw13kHPfhNJRrMuTiKVpWvWw3PJSHdgx7NzynBjatdutGmQMbscpGa418J3HFBnkr",
  "key14": "4g9xQQcatuk2yRNAsjmEcREZdYf9rE22UxGJZT1uzURehkmiPQNQzGhNu7Ch82SFocMS1QS6Yk3vWQarwfkghuvo",
  "key15": "3ufCnfv6xhT51BuQTPXXiT7Z71uV1Qi9UhntndquouC5w1CaDQL8qivtCKVQBmoUTNhZKGZqFj1oXc8a9KSEZT6E",
  "key16": "5Ze5JNiRTvnizwtavoaFBawdXetYyx2qQRkYut1ZWAgyhuY2FtuA3Rgh1ommSPfz9h2oF24ePU131V3t6M3FPCom",
  "key17": "2VsG4yBxY7wRzxHFXuUJmXiZttrKTa7AbQwJUSssSyYXhHnEpssWNDtmfGVcYJBDp5XZjtMgyzY3V1pauohJXGai",
  "key18": "GcxQUEkKahp8SpuduuT7jreSJJkZmywwuzxvbDfGjSPRr2V7m8RjNiuEAAEGUbXotZUiqvoK65AdWzMxFSUwv1D",
  "key19": "FFm8z1X5KxmYeApqB4JT9dfAYqFphkfa1AVaov7BKmGx1cPvUiKkSYNH1yfnQdoaFPuDzXApVq876ibrZ8sNCgh",
  "key20": "mEGiKn6mka7DypzBy7aoaaTxGpUXNGCF5VsrQ1s7S11JLhvtahKbpqPyBhbatvgWGVaU5uDWcZLJSVXDdpv833v",
  "key21": "4kcDT1U1uMMYAHFJ12qHTPpbyJFR9yeQwrQ5CkBMJUKr3g7icYwWbjb9eFCCaVPFsszLQsbk4R5uMohdspkoKXSq",
  "key22": "2cwHkbCYtLUkxxKUybCQzGEXN27vkN2mAWjz5DfvyJbhXok9uShT3posRmHij3PZyCut7rYvSCHeRZA4EYAmJMyj",
  "key23": "5jdRmDn6e2FE2ZqAihHt3veTUpjv8uMmkNTw1sz5umyWRFZTDjbtLJLAbuz3kuyzpiKHGqFNtpBEd3f7G8vqWWXY",
  "key24": "5eatiZLe6U1AY4euYUiS84KzxrXVyw3ZWKmFS8DcFV3MCpP8GCubz9yYiDgH5aFWqT4Ajo6G3oo1bhLfLYY2ASvi",
  "key25": "4c5n3D6NzGgnX8ERyz1mNa3fkiyknNAdFcByWCJzV56w1JR1QoJUfWpBxzAB6oFsTDcujzW8dvSaTF567nBQgnMd",
  "key26": "4YZuLVPyLXGEE7wXkT1BpAJUaRoEXgqUBtgvwdKe8SCDVHH7MnS4UWxBv8s8p7eLktKwG96joj1Byqqw6ckbZG6R",
  "key27": "LHsrhr47PvZn1FGk8rF2hRZmCrsAmrjTiWg3PVdZzFguS7QLyVzdQCo4Wm4Hgwq4zZrJZGQJw6hCq7rTzNdxWuU",
  "key28": "2fsZL2bgdmVVhtXzEzBAe5rSxxvX1QxLJDycV2LdobYTvHAsrmWQgPkapmERwZNjCCtLaQ1BEi1QB3nAZE6bLKqZ",
  "key29": "QZfDMpkMgX1XJLPEuaeWjjodgp2fugj4Bi2WAacWHnnqc2pTfCqjveSaJZozQ4dQ48ufWftVvKcSZHahNVY9ibt",
  "key30": "NPQznYD8GV9SSKw974DwbUJS4PNgPWAVi7p7jhrZzT1FXzcdULRuBALVbm74T4EYLaGECPX1FJHpMGQ7jZWgCdh",
  "key31": "ctsDpyeE3FnbixXFXMqdzDDM1WTrPXgTct9fbYWFaZv1LuirA4dD7SqzuEyzBTC9hzwErDp8GHfu5jF2RcjkLdp",
  "key32": "4DgnvcJ7NhLiTHqM3g7xVTQUPwa1g2uZNCNMm4gxKBnHGvLYmaVu9m6haCCBRVRjNfiZa32VpEEzeXHn1ysgDnfo",
  "key33": "4bpWxyDorTmnBUwx5DpdWoQQv7hzThHcB6DR4RKczdPKq3V9ekPqJkH4aeXGiE4evMRbrupT65zjp1DmagT42YoH",
  "key34": "3Cam7HBcyfLnGxrQCKAi3uMK2S89keSY3Xf4uLkqMWFdSb3an2hhy2NorERrxwxNZPDrqetuB7NsSLR2g1dvPH1S",
  "key35": "3775oWGTL2acUa8qrKUgFSqnnGfkTN2jSb8MzYDBZhmrzsmYHDmYEAaCir8qYrp6khw96tHpiNz2m7hA5bzx1eFK",
  "key36": "T1SBczoWntWvL4U8QxpoEcqUcBNryzjX3pxdthZ41Yc1aX11ro2eb8V7m1NVHPaxyJtFNeMPB9keNjJKpn2UKLj",
  "key37": "5b746y6hsBe3H3FPZtuE3oLeXtrMP2qdZnXCaWARyouZNfY8wRbLtZHwrVUqWQuhh6JBQr3KzSzrxog6pM36344i",
  "key38": "3qnGXMLAetoNjFTMJUmrBqhuurJdtDH3hqefthkKKU8znp35NWExvqs6otjNYA9PWLwoaCsKpYocMpWqmMH2uKUP",
  "key39": "AdXfXVxntzPnsaty4sdhBtnfxcG6MfmPK8NdSzuZqwzYwq3z8H6sfREaAs1Wdsu7FN86J9tyjQKtgou2pTkcQGS",
  "key40": "oHWojVLeoKpENZDwSGec5a8rjxw5tarzsGDDKrK5CQxmL1FDCGMBfVjxmS1zXMg7Fm32BZh7zaZRgwmTig3aYEQ"
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
