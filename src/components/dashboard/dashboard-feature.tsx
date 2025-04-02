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
    "5djjpik7KQAvV6nxPVCTXL1UnnEsPMdvx7iH7C28VyNjkGXd22rh4Witgp2p77Kt8U2CPjVtDhoK8DRkfQmfVbP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MFiey68pqv7njQHKwqhdMaHmgUGtFwxa11fepQ1AQk5hpRviSoXFcY4xgWkRCsn6HRKNsgs2o887pKcsE3ZQNV",
  "key1": "YkHtKRc7zv6nDtgCSpKbV3xoq2HSLRfRceYkzPFmrk6uNSmkoPaK3aduQQu8Vtrzk1chwhBeAGvPrehX9U5NG3Y",
  "key2": "4jFxTiavmuiuZ6j16ogjefsTMP8fomQa4fKKDTiUaChWTbbGstU2HJPuTmWdLEa8NYuvaUKyR1kxNsqir8QqRjnW",
  "key3": "2JzeoesjF731YfpMtMyeKWBPbGow5dsW8XhF6VAfHHPkm6pMkkf24GmA9376fbpKVYZa5xrXyQmZXSJwS2MExWmR",
  "key4": "4E85BpGsXVDtc5qakRMxRBnoq8E3gU9NUoAp2RcoaR8eiPf2JagPQsSimKohdrdW7RkDK47RnPc81hiSurPe5ru5",
  "key5": "5hyqo98EuzVrLRZ7C2XKXx7D6c6Jeade6BQdS5tdVemSybW22kjdTf33DWsGAaQKfJngq8gdupexksPacTHQWQXJ",
  "key6": "r66vKs55yFdoHh6tzbxZx6ux2B4SHYbRt1H65wgxk9nViJGEv6SmxATuFaMLuMCUZBnNeFtReEgrJ3VpvFP1J2g",
  "key7": "55DTrzxAydiJ6fqEe45W5idhLwXJQbt7yUUw6UnfNF35CKEa4Dp6tpRsy9Fdf49e3jxK5kYpP1rZt3Ms4gei4HNH",
  "key8": "4oVkZCxT9rBjeKDqmknzJAaZD6Hs56TzjsDeagr2nJmzqRP6ZYppTxw41ZnTK3ENVG6nFM3qjvRqobj1abGrKnkM",
  "key9": "hLN9XyS3Ac74GsgCkMWeRWgf35ew5E6jwU3w9atz26Zsivr1NXwjEWks8XwTckBqfXaiy7fA2szeFRJyT7duQ33",
  "key10": "4L3zuCwBJVteJsKudwjtTB5GEmU4o5zWVQyZU7xnVMGDAMYmyqh7Watv32FCqrRa9FUDqqMWjmS31rrcUx4nLdwy",
  "key11": "2PTTn4qGgTNpGLiH3G8YwLpGJKrz43JKbkfJ5nZN8g29xRXSbgBDEkFJC1VM25qRFnNnajLJPJ8KDXYPDTdWja1",
  "key12": "K7MS9xqXzC7AMDwMcqZtPxmQ23Hdsttdw9dA1DiAZEUcWpdAhB97jbHUGNRfdXaBieMYqGBNzsSnC5eubXLNeqJ",
  "key13": "5WYQ3mHF3m2caWTY1Bk7zVPYBpUsYpxkZZjVPTiVgwjxsn79GRiDQJfXy1z6WLe4LJBSokHyuopvigxBANfENpmj",
  "key14": "3Vo2nTrXWdf1HHwTEoJaeJwMoGxzBGJNdyHZYqjmGDBE3WMTWryZ5feJ9UeRmtsFRyfQu9yTKsDekRPNybXDfANr",
  "key15": "5yK8u6AcWaw7eSqpA2oFq9E8dZwpLpCwNhsTRWNT8SEqWmtn7sYN7VzwAD496JTSJRtSjAhwAVEL4HPsp5seYBrW",
  "key16": "5W7Sq9XpzxNyddoxa1iHqbLDrJmApaeTyCyXiqusZbDd1NXYBdt1nkK6G8cuVAWZTaXtxd2YS2cNTUrrHVXHNpZY",
  "key17": "4ibAbT9oiWAdnNeBQrbTL3cJp8GGoA1unkMQgiQK5v5Vha96vjjUxSwbsAaywz6tXcLv5xNhDFfRrv2v4PwC1VUf",
  "key18": "47uyc4LB4uZ2aimtCjARBxGtzZcPnYgEJhfC63wbeGnXsamg6iMJrY5z1ziiFHVd83DsjcSUCXaVEmSxGsoFbg6x",
  "key19": "2kYixeosQxCA4SSU5HivehZLxuGZF5kqcyMMnx2rbrwi6XBE8crCKFwo4hcoE8wrHxBgjp1cwDkYfh9gDg6ZfnYm",
  "key20": "2Qm8Wf69nfwHcmYjFbJkn529Xv5eS1AceCDX3wXXseS9cZQyXruJAJwxaJQQtgpzvddphZc3ZHeF2q52yPAvxvUP",
  "key21": "2JYd7egFKcywTgSPmANLcvZZQTuFAKdif5jFH2dGhS9sTN5gYsAr4U8VwNVgQDXwvwfzH2kxKWtZ2XRGpjV7GaA4",
  "key22": "Hik9bdY2Ha36Rdrwh4nGyPxNoxUUyE9PKR1Cwd7BbfxPUVzQTfJ2LBG74DKMxDCww72yUv1pLDbdBsBPDkhi3kM",
  "key23": "NCo7ydaTfLkiRrNqksVkv9m66ez7qBDMuy6rY8GzuV9ugvd7T9NtpPFDEjfYA6CJSnnKokkurEtSVF1iVL4ddF3",
  "key24": "3XLzVepCW5MEhkEeXPJkw6CkkTcAgRd2Q5DY3Y3B7bV3NULirsGMnyvnZqEZTmJW2fPWXDWm22P8YzvWvdDrFjPx",
  "key25": "aJBgW9TwStriqv2bbuPvBqmGtE13QZLD3GXxSkF1QSRe21mJnGnuZuy1RnU2Dcxp9Vik1BbVhwJnLcT3LkvMMcN",
  "key26": "5MM5tPAsAwVQyyKqvtcPkQjrc8fQCWZp6h2PFiUEbJ3aKrxBsDEgvwqgaJZQMeEm7CAXn6sekR6jD3FZkdeVp2us",
  "key27": "4NkGdDsREybVwv9AC7uX1VkuJ1r7rDwUCWAas4Vj6jPhZSVVw6mqQShmP5dVkUVisGSm29eQUkgzXjHU6CDY8pSq",
  "key28": "5aq6VbM15gJSq9wr3ZGXPTmRFnHUBBwr9SbJv7dkF4aQsgNNQqcVv4aL6Se8ojnW6Emj3uX5PQ4Zjy8P4EX9WLKp",
  "key29": "4zTsXrNBHixmKWgSpzs4Hk8WxV2LhD2GGd5dJJ8sbedbDdR6VmUPzRsrNWxwMrrzhnxk2BAyKCZDqpW4j5345HAG",
  "key30": "3C4QwGqZE7fRK7MSw11HDcvcz4fLnFyiE8nSgXXrxaA9UVHYdq5bt9xPhqaYQ1gkWaASBFJAVDyqXddSaavnHS7",
  "key31": "3Apks9p8NM1W1WSn2fMAfy2mT471RqAXpPJSph559FYZ21y7W8PR2J4uySRbhcATJws6ZJ5XovDzUVCiazMbkxLX",
  "key32": "2qW9Zy8y8YuNVj3Hnhrpy4TQHKDhhBnBtg2mWs5ed4eza6BUtiVmAMSpCcbMpcny6u34jmR77PPenjnPaYCTrNCq",
  "key33": "pPSnBL12XFWxWFtYk2E1tNyaaeymeeBArv3VewhAccrcUigVpg8twosEAfzVuf2wxv1YSJnPtCWQohxDSK4Vucf",
  "key34": "bXrcQWhavDLvfxEADeiqUnt6mDWxiSunrE4yX3Bum2bU138W91NRu3QyX1LQamaT9RkU98SfAYMTAXUp5nQnAW4",
  "key35": "hus9t4DZ5xC9vg8WJKMU18dK6QFCRjHtowBL2obhwRH5xmvu2orTudhEe5CQioQ41yM4aW6NyBKjnvae3FALu45",
  "key36": "2Jf3mmYHAHm831gvcUvt4gLYJ15Chdq7CfKaz6vzKqTb1pMua9zjZc9aX1uEAuccqYZjFP3y83usvYUWmTxGFqtV",
  "key37": "4NhDbvMF5DhJUS1zM5RzAxe9qTbaJ7pD1hVaX8MqMRVyAxuwkeARHgCRzpXKUQWPdn2TdTdXrwaJrMKMsa3GMTkG",
  "key38": "XAUSdGwjAuHZmUmoL52BahrnYnX2p66aYSXSDwffYM8FoHiKnYHkjjq6DRJqy68EutEMXn5wAg62uLNK3HJRAo3",
  "key39": "56vBkUfxXGFXiZtc5RoqAWPJmf15smZhznvDDhYc2Rb9fdRjVvX5XJpKJeYfgH9a97MFrCN1bHForY8j7S4bip6p",
  "key40": "3g7Mz4bCxaC1kkPFzT1TYe5x82e1K8Jrg93iPtGfKcnHJYFnqfTLqNKNCLL1wSNNUmXqKcfsYy9Q41sGocSumcQz",
  "key41": "3ejM5bD2pMkSK1EZEW5Dga2NBr7RsY4VCH5rNVpbd97afGkV2YPz9mz2DmDPpJj6ryEyS3hfBY6qSWJ9tejAYhvS"
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
