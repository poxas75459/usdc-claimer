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
    "5htrEzwNdSRx5kr5xhqXZdwp3b98QCToV3fJai6WubcRiKqEqJqACkSz7FgjmV7b5knBGZG9CDCTW8nD2wcFh8bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uW7n5j5f93fj8RLbubXa144oFqb5XeUeDMgLjedLVJV63y6C63GjcaaJCuPzWzfvtm1t57iLWHQZwrqZGdYjsdv",
  "key1": "PgbCQqrpdnUZB5aCQZhyGZmLLw9DwfktUy7uKDhv5xjezrsQGA29jjysKnV8kvq6sBQfHYrjk8Hyi8N73fjGDhH",
  "key2": "4rYm576cJbkvxkuPAHhDVq4P8kRDcVK7D7psbtVT1SPX3dTVVeALhMZ2TEEj9RqTDoMU7DTvcMvzmHnBorF1LGRk",
  "key3": "3dAagezpQx5Jd6LEbBjvMPkwnNLe44JEuMoErdd4EZoDfsut19gxRiRnkJb5Q62j43LEzC3ywXBJkZRgYhT8wCw1",
  "key4": "5SA9emPum9ULX7ZM5DCGtzSQGvmKumFs57SkX4ASgVQzViYm1zbxQNJjby5P3CW7ZLPWKZdH4QhXEVW6jPWDpVht",
  "key5": "5Kzv7XEBmjkgy4xZPBbk5CNh8NUMPzvP2soH4kBJRtVQonSkj8b2kuVLsBU72r4DoU1FAvCL3HXxNh9faEREKFdp",
  "key6": "4kHbQYRoDxLBKkdZfXCBXCWZcZkMTpqk7dX49E52NdWo9c9rDm9t37urm4aVkdMfRKVGCuaVgTBqNGSckut6eBJY",
  "key7": "5Pp1BHSaHrSUStv2JV4FrzJTZe3oujVikCRZztNZJpCd6nfBdjDk8rrc77UxBHNVRHh6z9di1srWy8aGhptvjriR",
  "key8": "3Xzesg1fnkXgZfxW5ZWRzRNZDXiG2fQk2BW3aABhyYcSSphcarf4bSQtgWb4W119H4vg374e7jc5DcMBKBePfoFK",
  "key9": "2umVWWYPDrXsKQHDoL4UYVcn3fvgeVQQDN9XvNEAbGmqTKeMApKNYfPz9WMeFs128v14AgggjzHQt36ADZ2gobex",
  "key10": "4iGAdLijkoFU3CfUeKns2BtGJs6HvimB6umQYvfqdvHfmZ82BgDmx6KwdNip325LL8Bfcty5wpgFvvMCDu7uKHxh",
  "key11": "3kQWP2V9q7ZsMaB12jT7WxErgpavHWJtMACmG51JL5GWCz6hDwQpB4kuSBUX3sTL8m5A5dxZNHbfUVQopxp3ayJ2",
  "key12": "ZNuEt1EtXZayAcQQGDRUsd2stxeZ52FqHsr9PZRvyvPUwgSz5sBChDoqKA2EmNiVcappPeDsJURu5iiQ1rVHHix",
  "key13": "2sBd6kTbVG9nbECcuhvN5zxoFB2nyEKM12kFbzkH1BGTj3Ys4W9FFgkS6y4n5tYvQnTvXm2jN1BGP3iWPmrD8LKp",
  "key14": "65WKPw45rmnU4QJ8wSKHnCQ6bZRJkUDB6biyjGTMQKVsE2Tc7MFBe2GKMnSrCk61c8DMqb2QdA6uyqUSJcGxQtpT",
  "key15": "BLjb6px5i6s2JZcviKtxbPt1X1De9XANk3qwEQutWY1KnPHXoKEkw5ES1gowWu9BRJwrdBkXSiAv7aD7NRBZxNN",
  "key16": "45egL8vRkSzWm4ueeB8ug6g9BLynFFKurgyspJaXsuTafrsmFy9d2Z38btEg5NSzdQ8UHyiJ253Bd7ptQUe33xYb",
  "key17": "46XwsqE9jW19Xmn2YiDzM8grCghAtaSKFmUjxnmutcCiMrzK9g99TNyAzuQmkknEs6Wejam1ncQFbodAs6K45vJp",
  "key18": "MV2RSEG9Gac2ZDDZMj567qxPGDiATfPeYswdwf1QqfWBmUDhboWy4rJVJzfHHJxdchkBs4JVudrS3XghHbVSY6z",
  "key19": "WuFGPcuQ1wv1beUSVn95hc915x9zc7mf5PJCTdECmpuSpwSLAhqHsBYMf1RqLeurUAKt9yH6YfwrFUur7rBtKEg",
  "key20": "3CQcgmPGu8TNa4Gk9N1HAZdh3GHfWYHSVdfSVQrjDXuKRTTVwKhh92DEJ6N3FjKagSSUTk72A1Gtebi7iyAvZQtT",
  "key21": "3P4GChd2xVw1D96ijAtQTDZZUYyMyHCsKoMpAN8jQxuZMZeYe7mLCjSoEWtH1vQXz2yND33fybRvR5mY8LidmvQS",
  "key22": "22QH1VxZYPvc2azfJMzWZCyGncJydARfvPPNh52Nxgq5ug2mCKbhdoNAvUiaKsXimUCQqXiZNAdmLNseodLvnBAw",
  "key23": "2XrmWMLMRQPm8jLCf4FCTVggQhW63Sshj3Z2sGEzeaMHU2kxJGnSFP5EncXmSw5TxQtpDTeLYk5SALKdLye9mT2h",
  "key24": "DK8YBahNWv5Pe7z25evcSSCuuiurc6T4oR6kqEZ86kBPKHcEgr1MVtC6DQBXoFgAyHBfohamH6SexqpjBFEWsCp",
  "key25": "66rmnUSjzXqRpfEB9k1159sFVUkbETXRBwFq4B955Mkb7VaZBnF5QqZrsCERZYTq8LA89RvLG4F5ibwwEnKta7P",
  "key26": "4aDwNBiz8doZTtuk3aLq2EfmP1rU7VwbuUhofoG6P2GrFC2728F3dSrJR5mCN9XfCG99n4jJmguugDuhTKGo1Ug5",
  "key27": "3FpYAo68uv2nbU94Z43Vaq85nkS7Kt82DvQJcESkEaKpJ3i4HQMUCcf56aHyYGFpJyML6MP1UXTgpLm5YoWe3WDQ",
  "key28": "4oyzJk2Y5w5YSchcy8XqJ6syWsCYpBxmR5VR3mzQQaB1wVecjmSPmsRkSKV5iGAYsvuHLgBTEX39mmJHruMVwuUd",
  "key29": "4w8EUqkj61JojQVYrMiFHYFvSpePx1MXGtXrvWiWFefu2syXQmPNSPxDPAbaTKfS2jtXFU4LTxTwiah6xPGByneZ",
  "key30": "KQhkbtAVnGGRHWxd45FpJcA3egRTo8tnfxU6sYj9N71Fmbzfw8L5hYBksN1MooikBQZgVgTmDpVRWZ2qxubQJSQ",
  "key31": "5JhtKffZpQQ2aBdK9yjhcCH25uJRvPRW2JFHoMbb6mh4Kp7Tkn8qC9qzxJGY9ZMXJdabfA8Ek7aKfEia92cQHMM6",
  "key32": "4DDjduLXMzbvyWnARancg8e7rZV2TVmQc7vWqZ72EagNGC5vST5aW29Lgt6zQT9WuhRNWBTQjH6Z8dULw4KRbwcQ",
  "key33": "5Afis59rCBuhRgDMZUXt6AoAo83AqtGaZnNCzKm98Q61WbsTbh4b4heUehab3PvakmLrqzcVLisjt1LjYu8kuver",
  "key34": "3Xu4LFGsgHXSsCizcudhvDXt1N2SqL58tTmXqxqUwRwfsA11h1UEPP8a3w8eBcwC2sqB2cBBuK8NCF4c6FrAEmwr",
  "key35": "568gW1Nn2vQDpxZFyyrq1RbkzGE94dLRJntpxR7GDfJepnbzSpRku4f7M2UoSTkUrhFcVmkjrFvYk7QT3jQ8o2Er",
  "key36": "seYsbhV2uXLXQ83yTJoazJMtTFjKNWs9mfuMHwtDwefixzE3kGtzVR9czU7u8YaRnTmkUUQqanvssm9uFqPMvWH",
  "key37": "4e35J3be9TAYUu2nGvK3FbCgHbQ86VYwU6ifgHUH8txqAT7qY9ZVtGh5kX4NCZN9LuchRAejW1hLgwS2Ryc5xQZk",
  "key38": "5gUqGruRXTDk9h4LYwLFPSPSdY9sMsxF1sbsQuTJXNATTTbGSLsoBfXsVBJzhWXshDRq1Wi4csghSFuw88QgTVQs",
  "key39": "5k9Yf15dtV3x33zxBmih5ThpXom5aLUmvngwaEQu9qbxVRR1iRBTpL2vopdnZhzLECThGqyAsJSQCfL3p76C1EWN",
  "key40": "2NGxyy2fJ3CfttGUUh5J7SHTAxo5AjFStwSk2Vim4w4ng7cx3VCCUjoiWBMAZ6xN4U8ZZ6UPc3oK7zxMngxw8Zcx"
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
