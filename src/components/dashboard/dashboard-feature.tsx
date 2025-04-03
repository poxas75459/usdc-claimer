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
    "4HEzEVCb9zjJwYwUuB6QE8M9kRTFCvfJiYsJYDaGtxmHF2nz4r2BHRmkTTKNqMVweobYDkSEb4tXMkbYzsaDzfZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcTLRT3wjviQhaHHF3wNnetMDDKJsYkyD9zQug9nmafpnvLyaVpw4va5ra1793gLcc3QeZxJ2Ptaf4NycbXRTB4",
  "key1": "35m5aRgKjpcr5VrmSkod8RjaFCvLY2uFt6UiehbXRHsqR9UNQnzTmC5GxGToeW2TpVPPXfhJRRxTLQmejG1vG97e",
  "key2": "5vz41d8huJ2U2siVUHLPzUXsq91drB9QrdyNdW3WBbhhnKkTiGKWaKckCEJD7rSN68zSk8JpHmVDLMNSjHMPNcQi",
  "key3": "2uS5XSZtnwnXEBLrrwbNEwQ6bUusRpZUfXUd2tzm1yk7mzjdpCxnbm2dAkc4r7JzWgQWGXqm5sekq1ZaSW2aLMC6",
  "key4": "LSZqVyfYAbjf3ER1cSrrRf2zUULNzmvyroH8xkPG6aVcPnnxzH8ZHB414nk938vAh97ZtaYFNm7X8p4oUD9Nguq",
  "key5": "3Y9zhiJN4GaMLJy7RGGqCeyiYyfEPuvUhhjKZDXXjXKgQnd3ovUNo9uGCCDusuYbcLQBBHgcfwNWqJfCToXWvZN7",
  "key6": "32BXRjrE6szNqZBJFgYzfLVjc5KT78yw4T59D7q2vRJCiM8Yc21WspmnBtFMu7s1eTRsAwWMjmS51tTRMAX222BG",
  "key7": "4WzJEVaNKthxBHLUxEsTcgUwKiCBHEbKPVoweMUZro5pmpwYjCbyiMzuc8hXnwbkgjaLLtutwxsqsDAPEuWD3MrD",
  "key8": "334iZyFJqAFFLCNBmD3dtaC6xsRJ3Xjj21nvNKUuQbXmg2UxWdP6Vmcg7ZS8H6xDKiM13z3n4NjJDmSVjM97snYT",
  "key9": "5keUcu7LRgFAkJJXxh6FbWtEqcajWdGB8BNX1ZFnDPKPvgZiwsx8dYYwtNkQoF5n2perYWE2zb7b1rKnXpciYMLv",
  "key10": "FqGDCCypK7jGXS33nerfTa7p8EUhuPFvrpNLSmPbCkTkMAL4hY1rAkRA3Hdojt4SKfqysHBXUD4Gtg8K2kGS4Ta",
  "key11": "3hc4UeaENR4dxMhTViP1Yg64FGqdkiBtnho9dJCbUA1rcGHm6KVF9x7AcLeDKWpWhbwr9wmRsUwZFhjpprDQrTKe",
  "key12": "3MUC9XUrzoCiKVUztDH8ixxmvApfBCRoHt71RmPyGgozMfDSmEdc6PQFQUBZBLbYAVyCKVyH7SNXAtFJANM5d61E",
  "key13": "3kRsSJf5Y8SLG8dsAgNXsG8MY5KyvV9nk6dAZ465kE4PA6R3dwa5mGkJyF8KyNCAiHo5YNggfdT3XP4wmhcDTde9",
  "key14": "5sQG785UHsPTcRVYYjH8T23Qva1M7on3zsw1MCbiyyFGQNiL9R4Qb3wyo1NYddnxaBaMuQuyJYqM9VWWbEd8CkaE",
  "key15": "E14LPbxdLvHYiXPi68emfXEqLHvr9HDtsTUKhUZgadXKthTCQkh9Z5RS8yWjQaY6L8861D8BXq4nchJuoWeYGri",
  "key16": "4EHCBVKztu9BgtgmFvFngL3B3SUdytdUfKnb3Qr7Ep4xo8UMqbnHGALd6gUseKvLqy3HP3uDcRtdNGmoEHBsgdG8",
  "key17": "2MTmLNzfUmua7P1HrEDo6WEkQCHaWypGUBVtNvg62Db3gm2vCQjwULAtUtbZTdZEMMBFyxfxZ7fYgR9t9CJx9bxY",
  "key18": "3PZAqxv3mFKbMKE3nqdE5oFFwBSQUYQTaLyP3mAMYaRCGZj6QBAPrtmDxenTvVaffnhoS1sjJXzQwzZBWkPwQwFi",
  "key19": "4Nv9is9XADr9yFAKv9wBDRD7WojvktKz7ynDybck8cUgm2wMKK6Ydzpr1AT5suud3ThkSyKdvr6fv9um3ssGp3cU",
  "key20": "iwkkmfvdqQ9S1RoMFMuM7Nh9ZxgYMgddCjjXvmKcMsvy1PeJz7DKeh3xWcyvbsRaqK1LCUNhhJXwrNJENTc1Spt",
  "key21": "27WPDyvupt7bCRbLQfZd1K2unwAk1jJo7dDkkcfGSfDurENAjnEVrSq6v9V5bnnLaDubnLSWusp1DqKZBaU32AsR",
  "key22": "3fonfBjBTSpzatZxMbNxBopXpcxfqgq1zGwM3EdV6YmaohhaBV3mtzjwgya9SjXhnsTGemdNEVJSN8UYrdVLKi6g",
  "key23": "4kHL6tFFCS74dh4wfZrRYireYVvHNGTtKSzQjAyC6RQb2aCq6e6W1woLFxNY914F1p9YkKRXKewGcgACQJeguhQX",
  "key24": "od439c5VRL9SQ5GiC2Vt4GUicg8NfH9385snccGvJkXsA2cta6yZQE9VQudTjFH7rUz5TbU8YYLbMVd8aqpFWEb",
  "key25": "2vB92AF89uHQeWCo9JnsYJQUR5vbmerjKygGgL51hBUZ7jNfifw1s1Qg5dgRCafUqrL4NhRfGfgVzF2kccH1e2kf",
  "key26": "677qrjZCZXa7uUmkgRnpmnyimSnRwUADxS5AAZuGE2FXqRTMFssm63Mx6B8Y2R7mxcp41ffUNcTQoCDhwp1PZwhN",
  "key27": "3fJHrx5BjApLGDiTU5vkV7emZp9AaAcw89CeK8KS5yZWFchoVNcKnFtdTnmfciaSBreNBrA736DVeRzrisyXyLff",
  "key28": "2viRULbUxJPF1beyhWwKqMnp6P78sUPhtCeForRG5ENgpgXW3BcAzsdd8jmZMPyAFQLFRLxkNtAEJG1TirVAytde",
  "key29": "2pW1tTySvrBr3A3NGLGrr3FJkSF3Gg8VJeQFjtoipfkoueWKeibSBowMxqahP3kCsFV8qqzSyyqcGGJMmhZgm2uL",
  "key30": "3J4cidhmUtYX63pdEZitQD1fnLhpbYgbpAT23xiS5FGhSDYzT9Xbw6Ud4CRebxqHqZKaUkWjw2P93bAn6UEcKpYK",
  "key31": "4xQYuFuFkUTiAJ3sDcEusUnkNY7LmpBm7to18ZvYR1X2VKuwz2wTYRZibCGtBwiLuzSeD7uBvn1HSHNqpkK9kwhF",
  "key32": "5ysvYQABLQqS9zVzCu6gsRADxD3MoWTaCjh8yPaG2TivZtKnEAm3eJwXyE82ipHyPwQfd8RyuSXuFjnPEiUyhtup",
  "key33": "2PhYcPiazxMo4QJ4zPiubA4r7tkDfeMhM732bH1kLWmJCcCCytAF5FNxbgutrp7vmUbdC5XSvDqncWwXAwXbqu7d",
  "key34": "8y23eysC9u6U6rP6CwAteHLRyBt7eEZF68vDM3fAE3pHWrQ9qPzjnr9wki1y7rr3i7TyYLGNyDKdG1k1tBciLJU",
  "key35": "3nbQgWfDZZWazRsayFFrp3yNKmVgAdNo7JTUKxmDrLi5FgYRnxhXJYz3BPm49UnPVYwJXBp3vu6W4gKVPUAC8vTr",
  "key36": "5adndgqatkG3mEJg91FHFQMDxse1aiLx1UaUPz9yd5XKsii53YMiEpA5X65uCiFjVuFt2WJqzSnopnoN3ArFDZWd",
  "key37": "4ZUkx1Z55SYNTTjorBD7YSzAgQ7tk3VToFKopyya2DGcfYda8x79yCqy5bU9jPYkFhfx33RMWZtmmQJdTJUsaUyR",
  "key38": "57Yy3aZe4dwY7fZ6aB7auRiUvrPU9ZBDH3SLU82GXR9mDwrMCtpxEdd1iiJEhUUuPybVuQWk7gkLkx1jgZURnJ2n",
  "key39": "63eUFx9CDDJz7KD8bocajT1rmqHSiZwVGByCksATjCrj6uiLvBV5wWgqHmegzUR1rVPgfm17ssCykeuLqTH6xTTM",
  "key40": "21uiQHnnEB4jfdgNQs8H4okRz1U9iS7hLQyX7siFk1cWtL9PLZxkXdQUzRn53KVf9oghibxhMKB1RTps2XqkiQvm",
  "key41": "55u1obfFDqmoFNp6MngubxurZBsfWWDxgbxZQjVHAhn8AswdKQMbdtEzWqXfjBcz47xMg7RgwNHRtNh2TRJg9voe"
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
