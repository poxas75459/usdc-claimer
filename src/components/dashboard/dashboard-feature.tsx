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
    "4hz7RS9N779UwpTn4F5peLSdSDi4nVcaSxpcrs5Fj9ZSsLJPjGGshmz8KZkwSe3Xztft1akqTjNoatcV8naueSjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9JKmVKzCczyky3AEsErWt47SL9gMstUQJW3WGHdKE8qEEqxes1KDCf15igYziWC6crwrGdABDoHX4LpdSjsje9",
  "key1": "4YpB799yecBZ5LaB3eHT8NETGqKZyExzxYYp8As42yCSScEeBqiRHk3eh1LgiytVQQjfRZnhbgwwfa8rZu8xaRo5",
  "key2": "4UkwxAcqNdhASAgzUoZityL2U14v71na5SSH91qQFyw6y1pKWEazX9pfF8Rjg4c25bubZpwHUxJfPXnsQf2vhuWJ",
  "key3": "9taDeS7RBhXF25FzW8fNXDT6vks451vvrGwWFdYHYuV7FZGNobcJjoxZw3mxErYQMHhksVA4gPeDsazGCxYhuSL",
  "key4": "52Xt1ggXH9da3hWaVr6sCR5cwcSwLWVjX6rNJCsaFQu7oWMgNyBzJoX3b8e878TWogPX8fF8xdEgPXZ9Ea7Ndeyc",
  "key5": "2UBVbdMix8dK2oqWcynnSUyVb2S3HGfDYnEW2hu2MXD7soaTZrm2apTPmkZKh8Uzd8hKwESYhQfsZJzmpzxuAn2k",
  "key6": "4udZ1qDWfojn5jqdkTz1sDpqqEFXu7nMnpuUHmyCmoJ6qtSKoEBCVjeqA1QNieVTR3xfeC3cQQtgZgrtEvnezi9j",
  "key7": "1doViw4XoTG8ZTANNpnpSbKJ7YVDGQB7N6VcaXsYe7gteksZUSXyY9FCyKUXmUBGb5uHbRJa1h6jVTrVrz4wwBk",
  "key8": "5ktHx9yz4PHwSpz7sVY2mPw3uaMn89sRZDDgP7o3gENJgSH9MA2tpNNm8t9EMsxNwmbnatpwooLRoMSsN8FAMNzb",
  "key9": "8T7ANCz6btanz5FnTnhiaLq8e6kCpQ2ZUhsp1ZyL1XCEtxn9nWweDRkpsL5sAmhLkqzVyDHBGZHADPUmftvfPPX",
  "key10": "3ZypCvFWhvuJVTMFenD94PtHQQFUj1HDy5e9mUcW4CPXBVUoNUbfY49V9gLNMsnNzs5Lo7WhrQjZNiwa6bX83o5V",
  "key11": "4BZy1MmoJYFGjz5q3hXJDcezwyibRVWEzqWkb4BLk5ZUiyBdHPxeTgUFMVxqZ5hXaW5ULxTcps8SrCJVDVvB78dZ",
  "key12": "3MW7r5AWUG8uQqLcR1KETaH3xyG5XPzyGqdiBLgLDsMM1s9KueB8mUXseTuyad1mG1cj9PEpALrcaHRjkgVLXe11",
  "key13": "q8wKNQWTVDZKqwNoNFQYZfc1EoWWVojNvhtBxHeRTYfFA1ueUJd5ZUwHnkxK5GpkEREhkcRZ1CrmzHpJWp17k1Q",
  "key14": "6CKs9Y13Nyr1k8SKaDZaDhpaycr9dN6udY6V1hcbfPwEAfC4XaSBgaBhxEcYQeNMeHfMzVPUhcsftXiWU1F8AsL",
  "key15": "58hPvspmgKrNnVM4EfL5HFLgN97xHwGLUWTwFu2Sog5UA5YLoHAypk43LVU6KV3vwHZ3CNkVq7B21NRFsDHjMfiJ",
  "key16": "4WxwpS1DRDrHvcmBAEpdxn1Znb1JbdnHdv6bJHNEgVkPApcR2mvCZXFvVME5iY26juiFBcnEYGngccHYDGp1L4Mm",
  "key17": "26Cw4WqX1pm5qmmLi2sRSkSJCmFKM6fJAvsY2dyDG1KdL2o1Bz8yQU9pHRhkn2m1JKLjaWWxiLqghUVzhipdSAKX",
  "key18": "5HDP1jAWunf5QiK2mY3PPiRGv8miVR3w9NLVddwdbcCiHCNknC8KAwcRwdZqyJVWWBxquUuU4EuePzMaegcvndEz",
  "key19": "4Nz9rhddGgaWsbthyDnqLYFbden4sz7A5Vpyq31EFnMuTo4PZE2T2TsQLzsdwwJz7t7PEuhDWZ1EWCGBhN6SpR9C",
  "key20": "5JsUZdgKPWz8xFb2ut3AbDXpHJpA5fhC9piVK3xAc8oNntQ6QgLjoaGf3m3FDfS4gJrAMoPLnLmAvBAZXR8VFxdB",
  "key21": "25KsVa2kNL39NLoxs6p6NXE9VJtGmSG1h3ZX6porjfco1KN7HqbNoVHpuen67vjokmx46NUZjwCWmbG2voX4H27L",
  "key22": "5FSganRrAbonrVVsRHQgNFAuPRx3dhA3fNstQAqwd2fMoZsAxujw5gsoENmhSBzxWqDiWBNLwTg1Mt4HPQueMyHn",
  "key23": "3cLiTtpDEcL8oUsyQa479y5VK7Paajws9Vn5s3qCSWuceSdKufjGWfcqbRQ2kduzFs5HKwBxrxiStAz2qnNECWe6",
  "key24": "4Q6Y2bpfKzw3DmC1UcNLdA8rUtAC1SvbrmiyhN18jkipAXhDpDDK8yM5qu6DHBKv16k2ymS13thByxbcD8wT3DeK",
  "key25": "654tsECyBg9FGmqNbyYJcyAoDMnuqTB1cQkzHgB89bKosVMKN9AmicEYv7Vv2EKobaSkdhYxhBWPmfaW27g8UGDK",
  "key26": "4GbXPBwL3z8NV7UQep1h3H2HS8PsRF3m8U51LrihWRU6S71UiAR428DPADBg8yDQnj9AfSDyYJNAuadxjcX78Vha",
  "key27": "3Uu47RRbmbksnVu8QnX2tZtCesdESh8tcjSrjYvVkc1tRiD4XRioVo4GitBJYVti7rD6Ry4v4cSCUx8USJdBTyHU",
  "key28": "58qULGfds6zJ6sdvH3dqhgvvmbNvMxV67C8ivrsCTpUruXHd3nnamTDuYb9ZtsMgZhVJrQHf3cmJf3wmCcw1V4aN",
  "key29": "tzESW6XCpE2BRoSf8VqYzD9JCAQhyGmztq3sYWFCwxojtiFra8h49W6p9Jry9BKrZCMKM8KBJHKmkCrUjA17KQQ",
  "key30": "33Jsm7tL8viGiq97ZPCvmg2FB8S1LghXRhtWCv7YZ84ChQe8nwYKTKwMppTQ3ZDY789JXPwERko1jESbqUCX1QAk",
  "key31": "4SCdY9SjEkLkcvWuqXGeB38AxaSFLkyDGnzgd5aMKVJqb7i9RVPn8i5xH5Y2ja72SUZahmts3Z6x7yMZeMrxyV4a",
  "key32": "3QgaWqk9Ah566GGFxfwWeNP4QtmzHi1ZnREifpLxqnmLUGBcWx1dZrggmC3npCD9J1FRzWCB82n31fyHYhQVSPuV",
  "key33": "qoZ8QJ7fLFaUb6cJt5EQQnGk3rjaQs3rrRzMkkpuQ4pSEzYRXzZxQKbR9WXNcnEfg9V7JbzoK9eeFwkyRhAuAn2",
  "key34": "5dvMaEiJyG3SW43YGMak7oUagPtAN439gmE8FxH4GUbZ7jr2kTFRC7npSNCcvHtotW5QkhsPuYZk8vt8LEokhyss",
  "key35": "5QCaNx2Gmkce3Qtnvu8etehjXtBCGFzAjEGvSD35HT2ModPngYqiYxZotGByFBSBqGUr5B9NfxdnYhbrLVkxeBNk",
  "key36": "pzNj31sqX24xDWGiSzESVAYuwrXaita2JiMF3nytEGehKdJVgvqSZQjxH8fLucdtRWvwfSGiNRL3H1oyrZudPVE",
  "key37": "GW2yacZfeZbkkRXh6w4SPPXJgS76z1ThKkf7bvZizC7meoLfHEvYDSosYK6owZnaEMk8eZVvALxhdnqR1zbbs45",
  "key38": "4df1hWo3BbxxSbj7A3RXbHqJGUrEpegtv5LBVC1xvtuQYRfDZm9Edfydbx7DgVHvpkJMnyZ8FVWLoQ7AZhJ72t3D"
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
