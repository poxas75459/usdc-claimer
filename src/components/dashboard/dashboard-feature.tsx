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
    "4F4ZmvRLWGdGD2m34Y2bbqTM74TvHSZgpiLAn7nDncvBvcTA4YUiY3DsjkawSu1VrArzuvVi63ovfn2MsYKMiT9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWXwjerUUYGDc8YGgRJMAK3T4grGBhpPyyjGz8abwsMzi2fe68vKitkv9gqVnea3VjsQ5wKx336kXMhPpwxiDrh",
  "key1": "5bcDsxeSGhsQ8TcgZW5PDmeX1yJ3Yy7bvSVjzis3SpLBQdtStdkfVQ3UYiFoEZnuu6qRrBCPZ1MCYwPgDT8ShW2N",
  "key2": "rvSNnNBgeWAdTK71kfG6TBwWa9dNE2ErF8NVcM7Xx88cirGzjfrshEcBCytjsMm8V6G7fp6ddaJoiDrGo7py4bQ",
  "key3": "2u1WQyjNYm5xd3Xe6z5nXTgar6nWBZJMSQce2Sc8XadtP3NYxfV6Ufwwa4P9iXYb1KyTH2KXaXWXRfPLaFBbCeD2",
  "key4": "3bYd3Q3wFcekvQnkoBQP3JKhvVypadu5fUEGEb6XoJutAzznx88ExiBRuXPW8v1qGdFpL4a7shP2LbTrCfdbCrF7",
  "key5": "4uEKwJSndJeqwLB63EmCoGpmjRvw79sDEHt5JqxrZ7aTS11xzCfszzR3Z5zT7a11GzQn2Y3h9eKBuVvnw9FTxVSv",
  "key6": "2yoKCKr7EbXCZuKn13spphVbENZwHwhKYLWoJfUJxxSeZ1hWfuy8qJu2J5SdKdbyG5XXNMHdZdANATbA6yeR2Mpc",
  "key7": "4CezvCcrCypmU5Gjj7i6gEzWJVNbCBQKE9autW3r51pCGST1TeHGViGfGRn9smKG7XCuyT4Xnj2hgYMUCaikC3Ex",
  "key8": "5XJ95SoSM7q9tmpfzud6SkvkHAjMxHCw4Vp6qudHTWJW58216QAiAH5VzTHXhz3TkYhKuEP3PhDAQ5iDNJsUProL",
  "key9": "541n6wRAXMzdsnymqYQjnk2Exwvi6FvjuBuQaCJCS3enzDA7oF42Fv7rL8d9PPWzKGZmQPHQ3YexKdpRPNiHj7fK",
  "key10": "21s9LxqnHeEPJPVmD7Bc5ZJYCmKQTnyRjc41E3BCpHYaumuqfESjVLYzqjpB5T8R5juscCJXRoiS5U2MxSS6Buev",
  "key11": "4Utrr1UWKSrJufks4Eu4XUN928aQLneFGGixG9QcgJ4Gjm6q8WWuFDPHCvqWgCjjWfah9dEFgQ1qV6BwpsRkgQgZ",
  "key12": "3bpfKSCTNveH6RquiHLVEp5XL4j5iTQFC8Zm9bcobrQtfg3Bpmm7GiFwhz3EHY6sQ46qbw4ksSQ4WxRUSoUCMfA9",
  "key13": "2CvDAHstyJ6TJZap8HEd4keif17n7BZDjmUjAqEZj1mozxYC6hckVM2vjQUPtbPBgwe2e8TM4au2ZtxvjgNzFWfc",
  "key14": "4HDsq4wY3C7wK9v6wKXYPdxVU63R8u4pWKmEhGPchFwaFPJhhAJsL2599wcYXQpSzHFDeauAey91JVduMKUD2vyX",
  "key15": "JPwwNVSxHNgxvE9e19djfAfEqUjhrt6Me1xkoX28LckKT9rDJDpjbGvjhVkj3xQPCfKpJLCxh1TQpVHQYBhGieT",
  "key16": "41fZFXqu5JRzoVgtYs8Kh3usyB2BEoy2FfRUrWJuYVCzPFtsrYHDVQo5aDacmWUHDsba1goN1A8jmNB25oBBYyCG",
  "key17": "2TuXcka67XK6rwJA1tzUPjurAmwFw7DrsC7sS6AMvjoVAusmZAeQTJv6rqFM6RB65CQitZnuhWEAWY4gpz8tfUbG",
  "key18": "PRPu5h4RE6KqTApMVyMJZzzaNk6vbC7M84mAT6M2E6FpZMoW2syBnGWhf5y1LZLxDdmSU2Mw8oJi6ffvu6w6BT6",
  "key19": "5thWUNQvDRTWrnxetKnxobK7HsDaYWEA4Gn2vZDXo49pEKXoDjXSrGofP45PpMeMR9RmrSjYfbH6mxR3JPAnct9X",
  "key20": "5ZzWs2EuhHPGEzLzNTKyrkXr7SkFMtgCkpAkFurz5KtRxeXcUGTyqXWDdkKFiKBDsijydPtLJG7jT1b91YovZLNN",
  "key21": "3qg8qEtHMM4kZ691Kiqsfoj3D6KQBVNPL8WsGGYoWhNtcK6hECwezGW4cvgMSj3eMDUZtgYccz33zi72jDeX5PbF",
  "key22": "3FHPM9mjXtK4bRHMvTjW7SXUz2TbpRTcph6KAivqwviQE3B9sLYJGqUN359nCuC5aqZwNkJZUPgF9pE8stP48Vi4",
  "key23": "4gtfqEFoB8K5bKjMQxRNG6fyWm8PiQ9Z4fQYqT5tKMAMXWR1zsXnJEZRiB9TZNqYbEwJA2aA3a7wEZoszoRea8mw",
  "key24": "5UxrUJiq3jNqWKHQUCk6LhrrbxptwTEb3rRNr6ks6s4DH2rBKZQRY5Z8NKfHVG6nhkhRLky4pMwrZ3545EqHRQMq",
  "key25": "3ovtxpDLN2jmBqDBpmhVsRd2oy4ce4K2vTuBc1kH4qQBzqyCKqPtbwGTi4q2PwKc4g359mxwrFMtVB8GYmDg7SEC",
  "key26": "3ZoqFjekVqj7zGUjPzKzRuD7puE7BjUx5xEJx7uSvR7rAGGuzWDm3xrb2whCnT23WiY4a6UtAHzuMsRzqzQmQj1z",
  "key27": "5A6SPNxhqwAKWBoxhyzMcxdWR2xeUpzYWw8E1AUiuxXPgb26RCWi6FMKRaCXEVRZXdzVBYtPDhmktRq5VYqay6Vf",
  "key28": "4ATWsBE6ADFpRpyNoWwEYmATfJg6NQeAnortZcrN7kXQ177imbFvv35QLzHyC4WpKRDBQNWnf7BozV6orNiGJzV2"
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
