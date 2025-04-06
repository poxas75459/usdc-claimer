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
    "2H5ESgjRoje2B2sX2hfsAPDj8aWYAMaPKSJRiLgP7vUARgQoUGChnC7wR7Ai5h6qmFGG7pZK82t28bqTcy5wJ7Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KyBiBouovUEjDrDbr13eZL4qnM1qWUrsVTbp1WjT2wzJ35m1u5vR74e4Fh1Y6TuzMMJysMtW7AfNDT1YMU1VFB",
  "key1": "5Y1Knyk2gxgut95sinjbzBd9X8eyYtpcKsQXqg1FaYGH97K2sBisHa5YUhLEDNzhiD2o8qA6YUFKhx3SfzLGGYT5",
  "key2": "3QF5HoKQWuq9scXPCbrXBVXSb46dkF7j4aP6KZ8vrZph67uRubA8dFX8zuYACt5qZ1nbM5HfJgnF7adnLG5vgAri",
  "key3": "2p2UL5hMt9pZXS3XQcRfstWXXt8pDLf6qQNiperA9R46qhtKeeZXgS6wLhEeZNjrW8ZZygCC3KWmQdNzEMWwPfzN",
  "key4": "4AQcZwH2Wcsi6x1NuSnoqq8XBVzVfDGwkxNijcVjwCHSNQ6Wxbpwninhq1CfYEqmf27XNMYFETf89mviG73TjZaN",
  "key5": "CtqvapeMbLbGdhBNSRiKi7op9oHPowJRyyDEZMq25QA4UZcE7SQFcCyNfJbG7yXPzWEE8SUYR5VxgPRPt9snHHL",
  "key6": "29gwEsUa9wWeu5XtSqEphMwowvQLdHd5Rac1ctxLafgzgYJGrZ1NgJvpLeDSnqs8oGJEMzsz9RWgSKTYimSsfZe9",
  "key7": "2eNeZ16ntXfxGLoR8nSukCSDED8aXQ4kBVRtBLAZTBTngGnSVVgksMRDNe92dAfbzNjo2mEVhW5fyCX9dTBoyfcE",
  "key8": "kmAvznevicLgT9f3n8QGxdPHG5Etj8bV42k4VkaSnLCxNg5EMimz4cx42vDoqfFVpAmnckr4LZyrvswhBWTuZ6D",
  "key9": "25ZYcWh7mrkfDuhThbvzZFENeAoe8iwBm9iFjyyPmJ8i4JnPKrpeH7x9jRHjjLQepJna8aDrMeCwrvm5ZYh6D2xE",
  "key10": "2qLDXcLmngsjiV7kjAhKWs563XE7LRWgjzYRwDoq81GwxcfjFdojjLCDUuZhDZmapBqzA3j7KEqXBBChfKoWVftN",
  "key11": "5tNwQCCPGJZ7BTmnSB9zbwNXMRuQeBjvLUFQvFho9aMyofZCFgnr3wSLXZ8LXevVfkFQjtHt26uQbCkFd35PGTwQ",
  "key12": "63SpSrmq5ybRTC8BzcGtRP6Q7ZztytfeX9TJcgogmrBwGkhhyTpAbDJpANb8f3QWMEFh8PC4tMi6z1o8r17tX3ZN",
  "key13": "4X6xqyhCKbcu84wP4BMAGbrRV8489LFGU1eYqAEpM6tuheBJHP5Qd2AbaQDrkDMuxDDcNJxfxq4aDyVwRcoJ9qWW",
  "key14": "56kdKNA9WevUXSnJaakL7B9CM1qDYRG22ST3WXVXKYSqz8okrRzjGwH5KKBu8Sek6eitZQ3vftpBTrN72METHjzK",
  "key15": "48o4qVpYqREdERof1qHeAGkeBvmSrk2c4fkPvn36WLmaTfjXQbmTynD32m8tjvUNSgfNwahhTjxAabDc3rd97Wgv",
  "key16": "2vvLWQFBs54K6zFGgeMGPUyvZrF7Y8JTyxA22gCdspkxwEHrKeuNgtirbnrDDwokauAQMpa3NpBd8FVWNpZj4etC",
  "key17": "47TJBEvHuQJRhmPKfqqXPjZUzNt2jrH28RdjDU6Xr8A8ntfv5HuvWkcvL1wB7MHVW7gQgp13rdEKPTsiivdUmE5D",
  "key18": "3bW3Q3xLvjnE3nNJ7vdZRASUj4TM1SVpRuEftr5kqysLUVDvNM57rmhq4DcLu2AdqjutYY2KC63rvc1Zi6syYka4",
  "key19": "5pNd38Yu4oGTh4aCo7oyyjHCZUSf2chmKxV5KeuRDse7EzZKk2MwSvfuSa7kQW2Wo8CcGFGSsAWd7kFvv2ZyAWoS",
  "key20": "AgSkWH7HCE8KRUhSudp6VL5qrzajvVGcRWtu9Ma2hpFSXYgs7PJim5vTcQ2mT8z9mFfTU75sXSjVsiaXKRtTtEe",
  "key21": "4JnSTUR5xRXmtoyUBaZXpUzwehrJx2aFUtAB5PDpDsZCHtPu4ka73Zi4DJjnFZ3WS656q1NsnvPWrUm7VNwg5Fch",
  "key22": "4bLBZ6JmK8httjz65AW59qmRPF4LeDYtWS8MN1TfX5SHEMzwaoE3vphPHdWvWvJ7Ag5yJGXcpiEkMMQaLimjqVSU",
  "key23": "3oqBQ1bSu4QRZ6B8TiCTsgjuZ9aDqHbjD1ykZJZ2y8XXXkGeVrPuZjSHSvHE4YenWw6ZzHyVrzS7twgCie3MVUUZ",
  "key24": "xeDnNGjgoUtzrN2XmZbryxerQk21WzNpeKakmKPCt17KmnPzpJBjLezU8LZ2bRMXVVDskTyVfcteSH1tpjMFxP6",
  "key25": "5HDnCsZjR4WA1FRdJuKUGZ7jtQaAeHP7RS1UQX8Vw9CwbD8ozneaiQRY1jW5H8ADkbhcesK8y8MQvR9YArgyR4RU",
  "key26": "3W2EK3uinHNdyTx4sV7x5aESmchaw1QLAhHzCnbrCSQLVUfZwtVE3HHbDEqGpUDUsjFQyQLSZApMgN8r73msdJ6D",
  "key27": "4CJgnsy6xEHRDGSD5ymQpsQNHz859cB4qUhnctaJzXDzoRaBFEh4EnsZeURkWe49oHmEqKAew9TEnFUQxkhxbBTu",
  "key28": "3b9Wme5ZShmTEpLyGTq8g5YefDSqUCreerGWc4NBcDE2Xt9zVbr8xXxLCryWmAbYD7pzymgFE9qCSSL1Zfs6JGSL",
  "key29": "up2HSLuBxyFHTFTv3Qiovj3qauACemnP8zsKw1Upj9S5g2Mgfa9f9ykxAENqkHiE5oTfuXR8rmjuUAbSMQFey2q",
  "key30": "2qUhiCFnrdAJpYtrePFM5hTazgzgMSEd1FHUoHiqRLd9NuPpvGNaxGUPDwN7PfQwvggn9Tnk3UwF4RtQRJudjgaA",
  "key31": "22UpReCwQGUk4HAUYPzjzyNDU9NwMzcEhd3drcvwhqYHgrwFjgWe8E2Mqxn6m4iB96zqLMYJL9Lz62D3LGZzkJwV",
  "key32": "2wKdtfBAMaQhcwWmtexqfsyxE9Qq1SrnV731L7Cf15HRLM2sQzw6uDSdy9b9VZMyQDrm8yZP5Lq5SFVPW7U7jM6A",
  "key33": "kQQu3F2vrSrvZmxFDS35SBHDFyc43FKVR7RLZLQJP9cT5yPAWX829h9jcG9AKVPbEu4EdguTU7tcgrSm18pWKJR",
  "key34": "2X57jgsQMvk8ZP8TUWBRk6Qy4UPvidcxsvZ6GdCTB4FYGp9WTdSAVk6ZLRDriRAu74Uggv7dQs7pn3RLAVkMuTXk",
  "key35": "2yVNdt1Z4m3LRThNZQcCep9vkfQL4kr6DWGgTbf96cmFiocKto9eCb8qVZpGoiTZpoiTjup4astsydmJa5HWUnoF",
  "key36": "3jKfnkBdEJAPDW92jcX3AdaZrgjKB1Mn9KauJgsu3prREc6LuoBF7Ei3umvrEH9YnjyxHy24Ah22GcmUG1tZoNtC",
  "key37": "62S5SdCttPEMEi7zV5ptKUseR8edN2D1D6BW848e6gqCXidXqcbHvHrZB3pyVKoZRwmBHHp21J461m8MQPVTAC6M",
  "key38": "5xSufrFyfuFXxFPiZtZiYQGawz8Dadh4rvmKHxP9NNF4aoJjG49d1tjz9pWhzRSjDQNvs5ewP4aCrY1ASc35VfbZ",
  "key39": "3gewuWaBoM4f4kC4rLXBSQXwe9zzV8JFUbwnsMSYvmxhSNKYri8wNR3pA5DYJRTikEjvXNiGLwXZFcYQx9Ax1mz",
  "key40": "672eYukEJdFVuavJLreQ4NZd5egw767T27TVjMtcc2iVbbZ88PEaQr8wWi8bHPwvmsEjnNa9boiE2SawJWSRVbk1",
  "key41": "5h4ai5zg1kMYq1PQs7T6mkhXcgp8QVMFLyqvx4vPqtArJEtvt5GuFkJtsQeUa5k1q8nADcvHRrKmmEGcqF6kW9T1",
  "key42": "3Auqb1eyTC4P88JCcbGMyszKD6YhnwnhK5QFgzSp9vTHwzDFciLpDfS5DZWGa3AnZ5gxUWZ9DaTDtC4bGmUnV1GD",
  "key43": "twsYLiQ7VB1nkMXJHTqjibNiuXXx6Vzwk6vMsvgpiD55vSAhBGCD1Z2SSFVYxbxqnXmGQxDvwz7sSh2X2WyT5Us",
  "key44": "5WLz5rYM8aAkQumSdKT7xHaC5VQpVcVy9wf1razrJcxbFXryNCWjFzNN6zxhMB77gEKdZATYZUiuFHcYUcszVMnZ",
  "key45": "3rQ5HVjxPW81CwBqtDcEZEcxpSgzRQtwQmHKdJBrZtheb4GyoXst6TmLZaqGfsYmQBa9Xn2J83e5ZmG55Qmq1ruS",
  "key46": "4wvPK8VMkRDwjEqapmhBkFaZkECa6eWPTAaS1q2LKQ95WkutSyYRf5kpXMy9Geqk71C1kaabFUPef4SfmG7LfSmw",
  "key47": "4A4Ri9gYBLEVxKHjyV5ZFAvdQYTaygbfdoBqKJuuuJzu6hucUHzuPWYYBm2Be71nZq6xpTMNH5shfM1ub2z93PCM"
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
