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
    "4KwgF3g4gSqnTroHXDJbBfbxyd61Fk2hNQNS19YBNj1v2XnqxMj1YScMyRTBE6iMufq3TtvWxdtRMDKUuGJ7fUyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEPhGNXisX45gybTPSPgzqP9a244cnQDewxUYxHm3DoWX9bwfkBUj1PkNKBaqonJ4mXhhRQYUMDYLzgbAeZNemS",
  "key1": "3qK97A3JqWyuEFv1R7dXRqX6iWSxNhxSmWXL2LEUm5WQndWf8AKSJbsTSSMoN8x8oSbnqTCEajMyMHgmpnHMJVqq",
  "key2": "5WpkE5apdoVthFbTT6Qp8o5ry1QvdjMUMdeA7WZcYh8KB1PJv1XcFrEL1f8hFG6b3QxMBo8DTfc8ndQvCNLxDPuW",
  "key3": "2uL4mwhd4LwJcH7mujXBYxav8mkukw6Db9ooV6jV7aiJZ4X24Sw2FYkJWrHyxGwXSsiAFQ6K9EZ1V3GEGGBPcJdh",
  "key4": "55sqitoK8PWZrMGJefQRrJuvy5YKsjnLqNortcywgUWQ9AX9BgEsKow2SG8D4nJAPr7WXAzQyesWtGTiv3QXTVcN",
  "key5": "53jRi6CAg4JGex973sH9ahL6GdcD2fQvqJnvWx9kK1g4Ewt9CgVBSWLLXdzVPgCDk8HmLWeFehy1ybU9wbpwjxwg",
  "key6": "2NbWhK3oHaArZcf3oBDZYkgh1HxVM2KoJCVQWBeUcamDMdiKN3tuPbgC34dotZqveQseNPkfmAjutSJkS7ekfYdY",
  "key7": "VPaeSb6ivCPKFJJKFcqBvVvWZJggLmySxbACX9dy3ogM2SAujsRMfukCjcttVs6G7siGTn6oG43AnHuXH7gVYGD",
  "key8": "3GG3SbTDpBuh7MVtJnawo8bNEgBr8mEFuW1K5eMLwJt73jassusgP1VgEAAMgFdfR6fND4ZN46kSzsrigvVvkbxt",
  "key9": "3E8tYSejWpEN7e12PTe9g4TovuFs9JuZmigGVVQt6CYmzvTeTKDoJ2Kj8KAJnDucQVzLXFQERkQeZaxKYukTeYAT",
  "key10": "4purqcAEbLHQGUJvzLy6kEKa6AkUJvXKDJntv7EpbXgbWYgMRw5wVipU9nZ2J9nnWMimFfVNmaxQRLtfsmCQybSw",
  "key11": "4REkiKdbrk9YMLbvvFoQvYGDxSd8zYiutHP99rhsi6zdVvwbxPEJipuJbmrEepNnUVnc2E7fTGMvaFJC6A2hCUoa",
  "key12": "38ah38pP958CFVvfJVCN1oZR9JhLbnSw9pNmDtqxsfvsCabECMQijbycKaR6iqyKHW6RYom5mFMhWthgGYKkPC9H",
  "key13": "271C6jDkB2Evh7UTQ5o3kxnXuGLz1pS69aewp7QU6TB9mnTmqGskD4qVSFBVZ1DdAFo8cDTYGQpkT2Y9H9wGHtjU",
  "key14": "3dTB2vcy8MyHMoiG2M9C9E8fnSAncq3143sifmdZvbpJvt9FMMyaov1LegZJhaN5oUHSoY6nbVdWkf78A4gdX1PM",
  "key15": "3sfrFgorQmBarmPBEYyvUFLMq8jqWQuKnZo78DbWfksa5XXocracWLdjkLWrfF1LJ1rHqyVz6YhM8dMjS2QVVCGB",
  "key16": "QsMdbp4ePXG4m7uUvmNSfxWZMFsjotvDvhDATsdX68HW4x3DB8kHrEk3xwxr5sWdDwcSkq8pQfjWudmPEGeoFvZ",
  "key17": "L3nDnwEdfDRuvUhGHQnvuMbUqDmhEdqqJeN9W9XUVBBfUHWhnnvQgFR9G74TCDj6xH33ySahTn7s3s4NzzB3Hmo",
  "key18": "543FSzwJCKJyWHEuqxHfpyDifs4GRYRxvbFQ2KDe8SSwPJYxPEZEpJGWEubNM31NpNx9KCgft31dt9Hwsj19VnpR",
  "key19": "B9QPSQDkk7pEgL2K2sqLjGbTmKAqb96XUecffuQx1MHmNCto4vN97GcCQmQ522dDmSLjGaxbbRT9Db3XGyoLVdy",
  "key20": "4tCrLxZqhFFfCENAKP4QLxrJDAcat95fsUJhhRJo3JGKQutmDQUxLzFRmbdSMJdmabwqFHjf3cEyhPgQQDAaoQH4",
  "key21": "5s4gzFTvM5bqAwfGv3ABrh5CFpnpMHmTnrfCVSxrWukr2ToBKbvWBJgrm1Bh2VXYEuzdwp2Le9TZz1KuLpj2dW1z",
  "key22": "5KeZsubq7sr1d355Wpo971FHMHiupqA6n9Cg15CUksefoixiVyKHTsV7DTwgUQGz6oUfKtxyMCfH6Xw4puvcuunN",
  "key23": "3wvdDZiogdymijHR773smxFZrTqEQyUwrY1XkyFaUnNvo3r6CFWBxsdpCAkwqHBQzpyi8Kb9a5i7XH7fjQxr4Z49",
  "key24": "3rRcZN2b4csiip9NxUBQGwS86z5hVcykNdyBP3BHqR4oahF7m6HWUr3oFvtz7C5izFbdHCNfz5TZuE3maLQpdawL",
  "key25": "6N8LCYPXneGQceKMjxKvsYyvVdmUYZwYQH9CJhoTfGKbHGwYAfDWJPZnXstHh7LN8tfaJF3ZgfiE6QGkPcm9yT6",
  "key26": "35WUwGKbvvnxiVcxfKTYTsVzPiXNRDEdh53kZernLiitzbsZKnRbkeYronzJmE8hCPngMbVdzKZmnYHutNFU6mpF",
  "key27": "5L5ooBjFFgVwAWVAdfoTVvJMJjr4V5hEfxEorhJSdy8ncbcPDev8pjmPa42YmxrHQ1rdpvSxNmtKEH1zPBaqnaQy",
  "key28": "J9a515d2QW9yKpX5gYp83FEDf8Q9QULYjuBGmecNiXTbs7gfxDe4WLoeKMh8RnF8CxUaRwaNDTpvpSzwZzM2L3P",
  "key29": "fcSufYNrZrrbbzjGKDD9f3mxvbPniDmTSnjPgL8TUgFeexe773KMd5sB7udS3RotQKMRWTSh5Nc9426JMkQH6j5",
  "key30": "2CzvofowheYMDPycyDfL1bdJcpiVsz4BgjAAGC4mAnocSritjtjxPb3b16eAGT6sN1s79kwLk58nrkZdnTxEuShU",
  "key31": "48enygQpo9ggqwFYdV8uAU5dphLvZapv89U4rhnswsANxm8dRz4EzMPDzkTSMtn7fMTpaXXUVczmmX44EPdS9ERz",
  "key32": "4ENmqubiUd4okuCpZEXz72tHAPDi7dB1fojbGQZPPCZswp7wdthjuSKSMGH7iXK1gvptUQv37YDAVKMwFLpvgKNs"
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
