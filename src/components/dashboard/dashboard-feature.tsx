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
    "1Go78TMVqz83t6DFovUDGjcUw1TZCjxEmwzZofGrsSiEQ6P3G4WEwzDPdswaGgfQ9VLqPFjxV6gkQnCVrJioCiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26p1vsTDVwYRHiLUdXGvGAb9ZAQej3w4catHsn7KXuZm52WZzBc5Jn9hadN6qxPdzTApTv9fXdBF7zLM4KuJoc8H",
  "key1": "3LNJBby4xDQmuKAVQBn5RWqPAGySK3tyiyGe2AsSHvvTu9EoGE9snu2mrsqfPqsAauERFZhuiTajX1gB1yuDSHuo",
  "key2": "MGvnB3fGGvXa5XgVGju3r7YJR1s5kYUqrJvyGqkY1VQUkadj56gQVGQp6Be29wovTADYw3tgxnX8bpdn5vpsh2n",
  "key3": "3fPBiQwf29JirfNfRRoeC4jLNp8zvGWSYBB7GazcPaZvLZ5vA4cfZ1Mu6rXfxTEqecCXqfVndGwZm7bWzijvn684",
  "key4": "2EiadbYE7Sra8pkseVpHPrvvqFvPQUoWVfUCkapheBEbpC9aYmmxYgZ8D28XLSCwQQxZjj7JNuxQMeQnRNUSm73r",
  "key5": "2e6T3FhoKDXrXVnm9gA9sFEoxVyYtAphdxq7TA3v4BJ9vtuezVirc8dbWnH6U2n4TBrDhudc62kYZfbBmF3RqxFo",
  "key6": "5duMhLYrn8eCrH9c33gQjL6xpQV3a33RyF7qkc68GcUga6kf6Xj25PHhN6TYWwUmBvkgQx4KuVTyXscV23eAXgXf",
  "key7": "36PwyU6fFCk4F3Rn9b72Hu6YSTpuPU64QF7h4KhkyH4v99ATpiFBpYMtVRFkjWQPG3P56JJMbod41j3Kn1W1Avtd",
  "key8": "MHunySyyfhxsuPPyZzdMnW3nXSfaDG8VGuqpWHm7NDsX2us3KiwHskdy3x99swuMFGvpAjsTLxGBmsVYnER8ZAr",
  "key9": "3hq1XncyEHBdbtQJmFfgNWG75YvU2h45zn1eVRchqnmxgNP4HXwRemYK3V4ox1AuK1YNYhNLPw4SgVovQotzMaJd",
  "key10": "jUXcCm8jmGDaUpptwj9oTCqmjDLJ9M1rXKpsNEkvZZX8FC74FjXrjXZBEj3LBb6Nkg1SHuTof3SiLPH8H65ZFGU",
  "key11": "2nYjw2hPi3GJigdgAswADdjrM3xxQZTCDD9Ch4Kc1jXMyiuqHV8xBd4EXDtpjkyeNrLgbxhegvSQ6sz2iFYC3giL",
  "key12": "5Un76iiVzBEFd6eHezHXEbtiEYmFgeFs9nUoVeCcvhwg8deWYo8nagRC2TsYwH2LDDFHHnUa8xYrqG2TZEkMe99H",
  "key13": "3C9k8aiAhtwj1HN6W3uWgUr63ukPgqGvQX9LK8bTSsb8VA7bSmcJ5JzZpp966iFPUsLHy68LkXTn9BMG9y7kgiQG",
  "key14": "PXF6x4Wn6CgNDS593MEixX9NodgJYY2JAjR543VS8AYFSQPadWHnkKQ6ekeFWNTWhw5G26mAzSCqUdqUPCfHgdo",
  "key15": "5xe7feuefLe8Sgn6PjYUNiP7zbGpTzJFiKz6EAeA2gckma97NfS5SdXMdKpyyEdDBfP4HgHbvqRpKddBsKoi38ta",
  "key16": "46CuRRwiXhhMYPcjXyE179aER67etJCFKx8MCBkexZr2xu5cWWge2xQXjDgxy5aPi6q7EwEFpC6fKhQVZyD9Vtki",
  "key17": "3vN824TsCrwcP8vgFHSwThEGbxnNjhgLjJyRHLwhLUbSA3jYvowbYPMW7DQQkd3sznw2uCpjvZ823bAdoQ358fms",
  "key18": "2VDbfFq5wxTcK2GJYtu9aFJTLVNpFuoCdZPfvXw5XMNwcY9zvLqqTUUFEfqgy9vMTUiWq66vba92XP96wKCw23LY",
  "key19": "5Tp13up1xycuSbpbm4XSz1Lsot3mEfuocUDSbhNc2CojvE1wibVaGpvprs5mHxMgEhQQJwY2W5iHHz7fEqrVqoJQ",
  "key20": "4KFQtBwJyptJorxU745JZquhJXs3Kz5mZ4vGkV33W2mPYDfAgW64CTJVNNeNaQVbxUZgXsqjNdPfa8Xm4NEnfBhJ",
  "key21": "4a5Q6GU4FpT3Bn2FHy9vjEk53MhCdQZERBKNDzFN7Z9VGHWM3zWA69k3ojQHjMadf2NxSe2eq4U9s4ejrfes5FpA",
  "key22": "2gxXHy6V1QFdiLSgtL1Y1UcEXBPKHZ7VBoUce8Uj5qY9iyq3bVFB9afZQEvfdjeYQhrDsth5Qh2ABwn8w3VupkLE",
  "key23": "iywuSxC8F8xi59XepywVd87iovfWb31nySGs2tPpgjS7xRUMGDfwWVjHbVm6VVocaTKRHHmgjw3LWXiNghnnjjU",
  "key24": "3AXwbQFLQ5abHHG63jausKmceg1YVbk8ViMF6F7sAoirgDD3iGuZAV7ZQBhpn9nHokacnQZ4vjZVEfB1FwdrQXba",
  "key25": "5NsvgmnZCz82SYUChB2x7STxv22wCHwQ1EahDaqrr5ahyRyJW9i79D9hSYNaaxGGMGenr69GuNvBx36nw79hDfHV",
  "key26": "2o64yncvxN6nkNFnxYzTcPxL269puSqjbXa7krGYurH5rX15SJZYGUzcLSbV14H9hkKGyFL8HVM6RH7kw77a5dNS",
  "key27": "4EqxXU1P7uki6Y5udRRqcW2YkyWf7fnpBTn8XmwEiPGrcHLXcKgxeWrCb5Gd3e2cMCXoxQRTs5TmXfCYZLb5hETm",
  "key28": "3pv6q7MU72zhMVqdF9bruZS16vrsfAxFB31y7FrT6vjjxF5zaxxo9ZbcWYbqLgykYWnFQFQk8e57qo2Td9UGncA3",
  "key29": "3xozrAwBu94ixwKnZ3UzfJ3Cvs8cKs5nB4k4mkMUx3KWMw9pKRDTswHUcVe4m5JAuihonbpwSqK8MEZuo5Vzwwaw",
  "key30": "4XzWHfpV8TPfD6nxPs98WNxTGsXAt2kcaH2xmRnHW81NYsVGAB6wBW1fCVWjs2deyQVewZNWwFvmUJjponuooYFm",
  "key31": "4zAfUAqqKWojnuwdar2WtnoQjdRYSgtsaduVrxt8Gz3duyDg1xPbovJvX5x654kFhXAv3rzk2E9i72udPVTn7RVy",
  "key32": "5S1sthb287kuWNQA4Z6kMzAwEfEup3a1ps7hbDiuac3DwWpigVV5XfvMzaC2PfpNmquFEnaQ2kb2okHmekrjK93N"
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
