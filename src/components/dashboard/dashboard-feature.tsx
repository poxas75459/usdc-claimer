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
    "wkrdko2yd2etEsHPyoLUDdWcuZ2abBD1YKxPmjcJTDEN3Wakfhcb4qj7Vfh2sApPmFbMBZqH17txU1AvKe21vF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mL5AkE7dYtcY545Ja8UGfBnBsSjYPqyNHNzDgLNsjhqb4JZwDREyfRM83dpwkJNFSz6jDRfTfa7CS7RpHNQUkXw",
  "key1": "c2ivMV57kq4wfySg6jRCCe7Mn89jz2dNWLD2rd5gJx14rbMjDjQ38UpkRY5N2aNM83c2godJvhga1yMPRgxXD7Q",
  "key2": "3G4fR4kNnUA22aBTKzuETGYjKPMacaB7WPrf16bUBBJUqKseTE47quKXyNWFQzpVXQ3Jr8CQ9xUMUYexmDxG5uVd",
  "key3": "5VGEUE7DiTUahVwL4jYx2nTWa275XY2gypgCbqjRvP23VvBbSPWPmRFS1e8rzQgJYuCf2R7xPBJS5LF2btLFxY8t",
  "key4": "36x4DjUJMrKmQxDHE7SodXaAVrCJskDvmw3LvdRR3U82vEue4WZ4kPDrT88fTpVPCFcvGPnwE7H8nhMGQBJ6pP31",
  "key5": "3FESigkq3FKVnkY6tuW6A35r97XzQae3Fiu1mEb6xPeM59o7qHnKPKiFgQDC9WdsJDknTZcDEQ7hRV29uSt8W1jF",
  "key6": "27G92WFWJi38UiZfzPuectikK6NbYnmcitmK1r71DT53A1MhgisxprVgmMSZejYnQR4v9T7J2NKSBNKLj5JmNRKJ",
  "key7": "5vmQ4RbaWVyas2TRSguU4YwUhjCMngztQjhQm9ucMatrNzx3jCAEqdHVykHMa7LevpKsuqXE7s2LRpaaCJR9K9Tr",
  "key8": "4mKw4dZUuwMAP6tjABsWKaNr1UDtxrYLrhuRiU1yEnvRqiTjxptUnRtkRFGxRDKUPWoYrihdkPhi3VSZANYE22ze",
  "key9": "9HuFrPZWKEwNoW3uh1Zk6p3YCowmcozNnZTs3xwmeUJTgNaVCwSByuSRRSpA2iW7x5UULBSb9SNv5iPpnV8eVq9",
  "key10": "4uHcQx7hbtBqBgdm5uB761Jn7N1k3u2kxaFVfTQH7SM6NGvfZ2TP5MF4gEEnhZbu2m1eGRd1SuVxvhHFac3L6LxB",
  "key11": "5CZBCknVbywjnf7fQKHYa3h77fv8SDkkg8Dy4c5jPid3JEAwQu76qpdmj75Gfzip7VSN3CMFVJGsYUs1vxQUAoKA",
  "key12": "58txWRTV7hBqY1kHXyeNz8bFU8qCvjaNNjQ4aY5Rjv7R8tVN8n9MmqJZZV5dhA6SBEdxGRxd86cDSYTkhh3nd7nq",
  "key13": "VrSkp4ddNWQKhApkUdAyU2w9WX9fZCcEwGs2Te7CyX3MTje4HxX3VxczRJghFh5GkPtAWNRccjBGMkaFymqibzc",
  "key14": "32BVNiLkJuZy7ikJ4mwJTYjGeMBNqYzY8L1FqMNkW5rNuJHQW44EXJN5gzFRy2be215QRM3uUvNngFs6kkBbmM78",
  "key15": "3HTusNSJDZKzawNjx1R5F6BUkRpKJchD2xnkHcEJfAThXi3YWe8Ezdq2YrBw38Vmngc1okCM4dEdXPCSgfYDf4jM",
  "key16": "2EV1SAtTQrPRMBBCGvyyKkBhATR29UA9G73WoxT8dtfjbEzGGZFAodEfvXEJx5ELU8y3dzeY2mmxLrsvkt5yGekF",
  "key17": "64oGki6WG5H5G1CrTCtsyVBYnTBeBXPiwPaJPtDjTQ3hzfNzu26NfLR1YHbevn64nY3XJa3u2WV5BfVbhccFTrCu",
  "key18": "5q4PrPFNXNemHNNN3pYo3n6hmuT8LKGC54Ds2qULrqGbQJ8PDLoNt64XZEi1rzyvGu6jsy4gYb2i22LWdzKpfQCR",
  "key19": "AMQ4BVmD8z16WJJFyfKchiqA9ftPvwxR6iknz4HbyWmPPwEjZfM6XaUb4nRMXXu9NPD6LhpB61SkqnGtY6E7cSs",
  "key20": "21KSx27YyMYgHCA2m8xLuTv6viXY4uAwCjqu5nt3iEEKXes1qhTGsxEjJXMFYq658raY13s4Nj6pMfBLCR48GdUq",
  "key21": "3V4SvDXaCRXv6qN999hxJ9WgQxNoe1dSE2YPebZfqYjwMro6AjTiEmwGM2LnEBJz8T44UtayKVEc2MfBFAn6vQUu",
  "key22": "5Ru2FKVebfbEfepXUMdUCSxJL7hoa7ycTqGb9fLvQPod5vZhKd5KhEnJ6X4TJE6MaDytpwuf3LT4HNnCJxJmwh3Z",
  "key23": "4CarzNygLWjxq47sqXZU3wympWBjsB7cAiQUieNCWrJmmzr3A6qc5qstTRCwvYgHgXY2SFET1neZ88v73tSjnqtR",
  "key24": "5cDvM3u6B2F6UgHVyWysdKGDv4hRjf4J5tywikEy394cCb4bn7QyYfDooEyicdvALqo3FJqne7BYJLTwrwAMdLN5",
  "key25": "NuBEztdJDaTbPrBmJbhkfoo9HUKS2rw7LEi3eiwgGHvyqgjV4KLd3y5d9FTMhi9trr14oTVGxX16Ynm7swAN6iu",
  "key26": "62TJfKpJux85LYiYqeWpfyJnEUkFtJZzqT62FTY3Wzo2nJhhGZkxcCfPc1BfAbydr4ARA7dFeT87dbkqwauZqmyB",
  "key27": "4SbAwLrojrqoZNMyoW88iBHjLbsKnPoCe8w38zeHzDSs3kE9f4pNjBtp8gsL8nswtbe8VBibW7j5kuTp4QWpZhks",
  "key28": "2h316d35mUYxndXHvdE9ZsKNRXBFzgbJCWz2rYHJHwnEifEMnMzuaUV3fPYuLGrtnM7sXZYWtLwLD9Ez9bFLgEj",
  "key29": "5ab7KDnSvhHLs33qpFiYBgsy1dBdyN3DTunBCQTd9VzRT1yLidga7mByixF4WNeVeagaZ2pRJuWjwmBdB9BWo7qk",
  "key30": "3kmXdNALaZCDipTeoQZbtfunQp63cmKYepWyfCFU6SW647LdNvBiDaft3J1A8cejDHYZ2EMrbDAwTFJSv7TSJwax",
  "key31": "2JUN2v5kdmiei2M5GoVARtpqqTzZtzWFL2ys3P65QmvMQDCcQTX6eLzYowr43kUBG1hKJeK1rEGTDfXdiwsSaWKY",
  "key32": "4o7yNqaKMVGPo7nUD3eXQnPsiy6X3RKztmNKXwgVtWJjq9Erqp2yZ62G3FX6QbSTdRcg5waQmByKLyL7SKMGR4LR",
  "key33": "3eJhez5QJrSuHzp8FKc2ZnKfZ6JExZHPSxukQPwN6uks66Q2qR4sm76RuZrwMWMhLDfqtLNbJjyaYpjrmPg1RFMA",
  "key34": "2dC5Bx8Tdt9fziacbAtTVvNc4zHFuNphw2ML5hWZ2TaMK7Wic7agUSdzMkLVNqvMV3bcC2QLhrKfT9b4VwhA5SXb",
  "key35": "2CcB2Tihp19KBu4jWUH2YdRD5rYVvYqvd97rj6ycJTh7KUZdQ5nh81DBy9X2TgpJqBkGfTfSW5i3ES6MEDWqxKAz",
  "key36": "2Jh5eYDsFY1bLLYQjr4exdNr99K6PuybbF9LqND1Gd5F7nN97TEiruqA99RMDXtiS4AR1o8X9s6jDyJgqTw57LqS",
  "key37": "63kr1APEi944wyBXK1HrJHR24dCSaKywbrTpcK33BhuFSVXxxxLLZ4mP71qFe8s2KnAkTbm4J9q2d6Ff8uc2qS37",
  "key38": "2zUGSNh7ww5pXF5bykk2SPXDcbDbWLpbTABP6SEMKEVcMsdoPuihBtY9M5KRTaRXi6JCywW5mEu2wR4KnLvkBnWy",
  "key39": "2QGxpT7SNc5VWanbm1Net4yAsnMGshfxGaPjE8sn8mLGJUQWC3qAcn7WWTqUqj4a45yVkymanqtHh1MfNG5aZcqp",
  "key40": "246w4EDSvy8pWb1eYMDurmTessCQw7DcHEyKCuUC2JghFcfhCU5HGbFwHg83CuABDXktTjtKYsUB3K9kdwe26nXF"
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
