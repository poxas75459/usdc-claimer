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
    "4EWQFE9jiSto2NTMg72nyZLHofqdCGz5mQcvzdhyPn1zFc1i1az2z7ANCzM1yfZojE1zPb3Hupa8QyQWPTa4ChU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589kGEibW3hwpAvjtGUiub78pVhNjxwaZcu9P5cFUDjfXNMz8f28BiEMa32rvsVEWLBMRBVMt7vBdwdLXDAb2k1t",
  "key1": "i5p38876KA2KqjYq7AKSZbCHramSYhrovDAF4iL3N8ASqPDXZQTga49nMDUeWyR4w6uAbVVKanhb6oPzeYCnwaR",
  "key2": "ZobL8MDD2YHtrxLdoL79dpAKTUcYCmdXXgyYEou3NP2zVX4v8N3kktAZ9ojZgDbBcQG2vW4k6p2BB4ZpqSozL1g",
  "key3": "4GQaNWNvyrBmqyFhwzFfmy3ui91U6ZtJu55zoj1Vhf2HCMtDC1PDXWTUcjTbEHVwFexVjizSvcuv9RNbbMzHKzDH",
  "key4": "2CufFTxyJTVhpkZNUHexRXZYAbg1w6QVpAKbL1ryPmJmSD9TsuB19FwuJGaYy91ceoMLANe16RKjaKni5yhtGJyX",
  "key5": "gZCum5eSamjuDXeS2eNPt94HSPFYTHrqxVWaX75w6sWcwUUoq6HaSiXGy2FsmyMF9TBryEnoHSWux4Uh4JGb8au",
  "key6": "4VTr8ktJHhPDiBeJKwAwKAskvtKembjKPvGpqECvWQNaWbUWto4gaL9pDZquQKcRdTcKTw8kRvmS4pem3ugYQT8x",
  "key7": "3MJGk5v9onGHZKedwNwSoKQHigejr9vganzYSkrdAEcPxGFvypLkZDE3Gyv5Ch5xYYQqmuLmvv8NespbDMJWzKTU",
  "key8": "5vcxjPXLPYJjKK9WecAZVTcowGjzLCM63AHUdVuwF9hCZX7FeaWZYWN3o2Fw39Xd6aRSnDKybtUuGgTxNNoehi9p",
  "key9": "3CDzZL3zTqp5NeMg7C9Lf9PpxBoCDQnatcD9bJbXeiGvG9zp6bybDdKbEjgLKDuLipbwc16VHe1QQEfZDEqpyTYM",
  "key10": "553j95GrqPobDGvU1ZavRWSyrPZtP7xVLyD1fi38nfguvNwzJ6VEhK7bB5UjQ1jvHpfuQJqoHqTBtmYbsWRQEaMs",
  "key11": "4aHvR3cBJUZWkgeZCxwttx6yeYhbrnEWdvs3Tujn5paAXm2tTXDLK26Y5tuExLk2NGUv6rePW5oPFfjw3sZJmJN8",
  "key12": "RQK8RvRSrR9wuAKzKhHg8XkEoXqFLiTWmBDEF6eM7xbwoTAdpQmnA3x8tqjkLXhT9mRCMxw8g3fdgNEzXDqbLrN",
  "key13": "3J44UrDQnWEPkvNhMGZDUzRvvRaKWRtBwPXGiJ6GFuWNZF9bNAqJBAiJs1SWBFBC8C5NenmpygTsDLZSatzGp8h4",
  "key14": "4QgeCfYQvg8PVDFNuJFSnm1WTciZF2uizUReAa9FqvG8GjcQP7CWDXCjP4MoJcRCZngBgHkS4N5naQqBGBCKVEYY",
  "key15": "54WgKXKYZWWEbgHoHKegd54n6ZQu7M2vZKPQTtjGNS5DKzQB5gUyyGhohEVn5HxWSivwhov6fkmbHEeSfCHZU1Qq",
  "key16": "3CGSDiw1bm9SK7G3qkV4eCZABxYvx1TNzk8acjxj678ZtLLCc8aKXZ3kp2PqkesxawyECSG8JnaLeb7pAV3y93Gv",
  "key17": "5n8mDQFP4mjFpNaXk5VFPNDzFLaQbhYEz2VRjD775RL43cfaUgbdJSLRX9XxpdiNjXNYUSXQxKv7m9HWmcbhqEcw",
  "key18": "2pgT1if1wGbJHwuxjdQV4GyaX5AT5qkPBTX1tm5MUbvfKTskcytWhuBAKuxyNpXxVzHW2zAVhxtow2fZCvTQUF2F",
  "key19": "2AcsesBWXkcuYJZMZxUV23qiCVdMDDxY4tyECQYm4G8APs2VMN31q2Swjec1dZqXBYnKiezRpSQR31srMZt5jTQj",
  "key20": "3PskTXNn4ds6cMXpSj4atRW5X8mqcYP1EGCBtjm6jqpZrCj9wtTcuKk1Wifk4jNouEM7d5hwx5ESLnY4swqfoWZb",
  "key21": "4RsYajb1YYUyJYoXm2Pk3nsKN3rDN15D9d6cpkPNnvFVYqL2fRwauBwUEfwtcebUcJAaqpeb7D7aJhRXJ7tvTky5",
  "key22": "2S8pRUKKevTStRAzrCmiy74X8m8QP41ERBHA74GhCkk5QwJp2b68yik37s61V1BmHGPSc45kaLGsR9ZFVhULrgVe",
  "key23": "2zJXWCvjYey16AnWSRFQjSneirRr6vS4HWn9mBNYsgjW6dFhYddEMPkKHtPARd17gJR3AZn9x3i7i97YJhbgAAnC",
  "key24": "2JQAFZJVMnbg9ACFH6gyTjymJDGXFUMr3cHjMThQS7jQPV8KVDd6K22eF1oL94YEsVWzfzYWCWQ13U2dTSazDZRH",
  "key25": "63gThhdBSxizNEqvoWKEqbVSvbioaxUfrf2AjWimc6n2p4ySExXiYv8MEifnXZv9SC7pQoGDtifsJHketWwmVD2M",
  "key26": "3YW4p2CLhZ58uwv1ZyrkVGH3aEuNB3waoF6yQhDrbjVZx5faCjASQLrR9QEF4DQm4bzDYoCM48Fo7NxYawXTQTzs",
  "key27": "3aSZFXQGPb2Koo5WcWpy4jMk95ZrSsTxFUU8ToRebsNgx6UDaJBLGTAXg3PveqPERgF6CPuTkzogFXowvAa3mzFX",
  "key28": "a7ucPsP8uZKBHtBBPSJ9mPpze1eCGa3dwgpBzyAeanBqbbbG7pbr62zbEanvCv1RKwxijW6m8xUbktArwYD6CmM",
  "key29": "o6YoPLtLQLtysgNAkJSxgAK8HvR7PX9StZnzaEs9s3zkCVTfE3HMuxN7t6XiVwbVmmDH9Fu63Q4o5ZqNRWEA4rm",
  "key30": "65oAPzkVStLXJeqL6qkept6JDV1URxPFAK4SWYo4Fku3ZMPdNzstbPMFhqZaw28FRywPVcLJz25kSwqKQv4sgWC",
  "key31": "4z62GveVo4A7xmjmRFf9cNuPgFwSuaho8nRZjoA2d2JMBn16DGpksTkNXeACSmunxGT6kTDUgh7xGmxyZHgkMPLo",
  "key32": "37f5kmUjukQ4s1e15WgUna8fKC3ytMuHP9VmmMkGMBmVqMAwqdh3P7iQij9Z8dCMPS9USPJEuixZFoshwcZm7HWB",
  "key33": "52RRgkyVy2phbkmTsvyJRHcyygXB35Vsq13LEyTT9b71KWvjy8qA4L5i8UmwhtwfsxXPMjMLrmvZqTU8FRjehAay",
  "key34": "31VUJjELT2dNmVEUAX4mf5SWXB1hxymXZjKwDbARf21MxfmAzQsbS3Vf94oFgZmdu4EpdehNoab88j8MEwpZHFXr",
  "key35": "4ez2ZnBjnXUSkA8nqGc7boaY19kRa1TyxgnK77XPYKhX4xoG9uF5i1N95gR4PKqf1qEowF3cXeCMNKD5byq5twhc",
  "key36": "5ECmdZmiUL2cLShtaiBBHbr4p5whkJ551MviPQRhgjTppVHDmewbkXqG5QnYDUqt3cfdeChdmSYasBACwsiEijUe",
  "key37": "3pXCQpjUmLenfk4NoapVU3rnrQnBBmzt91rcHxJvzFMvsHSyFQBhMM4GpjKHXoE8owifboSyjT2CX2jtjy3GMsmA",
  "key38": "xRbjSJ7sLpxSwNYtptsw8oBYxTHsAyJsFDvZM6UhmhRakFbtXL8Z8SJKjjLDjmu2UCspz5ff12N13Z226R8a6MC",
  "key39": "4WBJCjqTPWAfQVbR51fUQma9xrzME3jABsjqoGrR8JLcWdCR6Q1HHr7g1u9tChycdsruKZgD4DZ5pqxqnAqtEhzM",
  "key40": "4YMjL3dzvGuUUyms7CXs1pEDbxsTkB25TwxbykN9ij5NRqNSGv86KrYutF33EhbGutGRV96Q3oYtVpbNfjSmPYa",
  "key41": "2k3oQ89rrZFEkFrPFueEoPUVYRP5aYxWa1Q3DyoDsxhHCb772Wm1HUHbKE4uQoHhXTvKhhX3oDTjtZEqAZ7JDi7a",
  "key42": "crLCxQv9Ek8WAqwsR5SAz6cqoTAheCeuEjm17nvr8XKZvA4uRHARLocrqDrHgD9QYeB7E6qpZycUV2Y19n9bzLs",
  "key43": "3h387ie4spSrPjpmVzUv1J9djACrJfKqEvLGVELChrVJcb6dAHAmRZ1NegRP1UTStWRQBhu4kNszgM5CDW3sUwWG"
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
