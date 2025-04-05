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
    "2TZtKHC4rH8XQoxeKdRpES1oh4bu9K2ks4ywuoDnN6dfvFvTgPrhRJ5sQ9cbek8RjdY7sMLJmhLPAGFvwLJZ4ayn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ko9GFYEeueCMthb7zoUjMJkACNgjaxNw4WEu9zNJrnqhMT1hHD3YcX48qTV9du2sBWCHzmjfrFXYRu3URwPGd8u",
  "key1": "2NtNffQP1C2tyX4WhuCrwBhiUpnyRFFVq3tETGRJsYptErgoVCBuvhfNnLQvgBmbQX8ZdTaU2g835PxoziJMbKbL",
  "key2": "2AuFWJ1Qs5JAezc9wj3jA6tsehLDXTmMWn11ngYYGmjB9cDjPC1BX5st59is1qD4nP1jb6PuNAZwGYBCUW17Kdp6",
  "key3": "5SLqzZqu8eTFU1PM1EFjSbd22c1FMZ3gsDzuTk4RVatN8G36hBb5VABttCBRFjLfYv4iRMnhd9x2kNyUz44JUJWB",
  "key4": "49aHySEJafCqigVST9B9Yp2LdKcasky9Q8VfanirAWmqkRgSBzm5jYB6uadJj2dC8d3T3HWbx4R4o9ueDXHqNMLW",
  "key5": "2Ue9mq2TR1gffp7ggQMYKHsJ1xhVXgvunUq3Q3tx3qtxCqaKXkQHh9n5Kd76H7fy9xETpmg4DzhXvjgdYDQRmACF",
  "key6": "57e9Gm1HrXAmjiCY1WrYz6zVCHVecfzutSiKUSQd9MKbNMxnHfUkju1nYVZLTiUTghh2gvpRNKXTskSjdnJ7Ku6r",
  "key7": "2YK8q9WY2doKiST2eVUvchpUq53qTPtm4P7vWrEXpTaqvnHn3CrhmEWLotXCZMgjMd3PsfFkPK5bn1gju7bH35Z",
  "key8": "2y8Uk1jicFQ6kTHw5yJCizb2dVJa7hMxtWrhQMXkEmUZU1mKx1b9e37spw1Jv5u3T5XZq5MTGAsWz6kThtZx6X9f",
  "key9": "XqLyFpevT44H65ziR7yWCQ7DfF8kixgogbM9PzT6gbP99R6hh3dGNZihhTdDVyLrVbxUcAqtvYJrbMefMrkBy5h",
  "key10": "4HMzm3J5w15P1BBRvCBhnDskTEPYT6iG1xNaDkei2uLXCZYYpi278E7pG4k9YqzcKwtuWQo63rrAKdjJrY4Z9WXZ",
  "key11": "63AGbAGcY3VbCAromr8snT2RcP5oYGpFYYaseX5mPJrZUYAYEM6iShp5WsJJuoULqmKygu79CPz5v51h2892BLgM",
  "key12": "4g1jpTmHkWZkCGEWmKJb9typPEaPUBiJUACKVAq8xfffYdnAfg4QFAQukxmndHA1atVPvKFQKf3APWpnKr1kbueN",
  "key13": "3wKianG5UUcNMd9pDLvyvgCKbnBP7q6vVFS3m2kFdvworpQwfnEcFd1WvkCVYe1FGq9EjCtWvSKRrfWhKYThbatd",
  "key14": "5AnZUTepBn4qoM97HSeohBEA7W8Xj3XjhrQvvxkBWFuujxd5sxCKeWP8X2hkNrBHKHPubWnfceua9m6Kj4h67AMN",
  "key15": "2rWtUKg1sQi7kC6LBtauuMftHydLWsVShEEQM1Wruycfc63DC79ifZHBgHx4w5VStudQUpbmz96z4ejVstCii6wk",
  "key16": "58kRRT7k1rUYv2zmZS1hGqvCxRPG5sXoEDomvukdR7KVacLcmXRC24orJuegYxkURyzw7Dra8snRYjnJA6t7HkxE",
  "key17": "2vsidYDhdSkANkKfKTqVksUi3z5CjrntMUnUezyHYTN15n7yhzjJK9hudnff5poGSBtnewJmSJX1GoLNjVhtiCV9",
  "key18": "5ABJ9Z9Vpj4Ged1XM2tnfDzSppLx95tpREGVrPn7hbFzXyRuT81g6pFsevdEwy87mEqhQSggpznfp6TmJ9M81Ctu",
  "key19": "5R7UBsHZc99GvE4zTochNtTWSNb5x4eL1acWBKJp8SSUDyPyrtcbZENaAcnY3JT4r1oztQUTwfLR6V9bWr4pFiS2",
  "key20": "4UTDxsQq5fuj8DKTVdPfvDJmxRoSWXpxrbprmfzUb9vZ3gvqYvpa7hUH1oa1WqurwEyxSTo6t1k8HEqGYVjdk4SE",
  "key21": "Evv1nzrZjMHRVpMFvj5w7MX9DxQdUaTsDRcxJrR7pChcPFXXmDVjMM3SygzwQsmmWviEYcBvnSAjo3PxoxQSXPP",
  "key22": "5usajNmQ72gtcWegJ1dgHxz3o1x1fcdJhKgDNkNj4oEpzhZPxng9zY3Dpx2fa4uNp58crybyDpGaFERYbCW2oQR7",
  "key23": "3QUKPPayKMwE9hiPeSRA5NHv3rfQHQaKgX4roDsMGjyvmnVFtCG2bozDkwV63Ck6jjQXFW4sQ2c6PDt2x8GyKUai",
  "key24": "65RuVdnC2kg1FbgtBCCFYa65PU1EaTFApBz5zqUUfR33dA75fPm1mR2DhZ5epzATY5VnNSSAsFJmvhMFdTxKgyNS",
  "key25": "5DHfWyy2LreVotGwtDX9Mw5F9nH4BdpXaNE4Mn1ihu7qwHeSh8B2A6jXfUQM8cGWhuPpJvYtPzRXmsqSyLaeEjgz",
  "key26": "2LmG7SCGcL2x3iDufyCgBbgFszuTh6mcnyNDPFuc3qxFpch949vY2Uq1bgZrmkpCYZw8GT4DDtWDgPtjuNXEQgjQ",
  "key27": "3XKGhrZatVGd7LbFdzwc1R4J9o22QTp3yLXxZqDXEndSFpa8fGohMjnNksuxeb29uaT1ubFgjgBdcqa2VZQQWHaH",
  "key28": "2SdG4HkCkqb4h1UWDnhz2aBt9B5CsP1PKdHp4u4J9grX4i1yxtRpkHHHJFohtEAP43ADrNX49P3TRoGqkgcGxqer",
  "key29": "356pVKyygiFJQse9aDWsUNuYD6CTM5i533397LYrFSDywyTSUcF83cA4SuwJKXHq3FjuAfT9yXxeiQVcK7EPQyCi",
  "key30": "APwPyPedzif7JTdj2NEj3hEFdSCUjK9yET39HWzqjtVAZYdZv31kVkGUNZUr6TmZw6aKQYk5jhBePFomyv5DRzF",
  "key31": "2CLtokEh9f3AiEamGzcYvjL5hES2FE435UjvVay3KHUXQuqjR7zecZbVv1JKkxrnUTmApVhpEmSs4DAx3hjjsp7a",
  "key32": "ut76Z4hUTh2Z64Cj7q3A6W7RuVMbhm7UaKzW5Y2KE1Z1XZAGPjjsiBUHb1UJ8vxzP4yLpjT3fLmPeStSGEzShzx",
  "key33": "TZ5KK92ZaiZB5fPvH9XyjfdTbxCbEN6tMy1YLqnxPmPkEPKUPzEYe7cXpenNdfjBxmxrgBPDdqVoipr8u3JPjBi",
  "key34": "67Je4u8C5FrGy4WuYLua6FnSNtRjxJMcexSomcAAJ32383EdfQb6SB2sqmGksLjwkTiJuWFsypYywnokvPpyvRZz",
  "key35": "BRhLt8YsaipfFcR6svwz7SxPXNU6ULJ5w9Jz3GxZEUDw2XiVvsqfaR6d5fSNAfaJxvGYTbR2JcN5LrfTtSCUooX",
  "key36": "5c6vcLV5qQddw3ZN8zwoX6AnZHz2RQgkxGCFC33bbrn2yhqWkVUC76ADqUtrRAuXiK2asm6S7b7ej7295WdGaFuK",
  "key37": "3FU6bq2epFUF3ws7JiKAUEy6LCttVk5e3Jt93kkh2FFEvzgrXTw2ahszQR8FRKYjxv26LwMAvihBSMtJdLEzVVUR",
  "key38": "3itecGm5DfupX4swT2yqrynfxVQbRQ55AckF58TVFwoUw4Ci6QqnQUJMvYueSwZmyDbt6jfThj3NsiT6zyfXWX3a",
  "key39": "vopE6HpvPB1xZC5i2KPNLJKSsT4mjprcLbEYXd8EgAweQegqWUgjWFPwLQU4sbBpTsxFfUJcnQbEWZzc8DaGcPb",
  "key40": "5Jm1g2VRhpWbNx8er1DJGypuxZHHE1nb78Ngak7FwY4mx66eGTJDnAxVne1931UFTvBdhCL6AeMQXC6q9JE3Z5ib",
  "key41": "5E6Cviba8xUFLWSFCRjyN2TfNwnFFrujqjCR84f4qXZht1pEM2isjxKfJDDZPuFrTq53QJMUyXgk2vx1zrHDqZUY"
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
