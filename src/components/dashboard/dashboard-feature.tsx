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
    "2AUDFcjZNKLjaQP5DXyLC3DFAJaYkqxvqss61EGUX5vPGintCxHBinjcVjDUCULpdserSxCi1nwo9A5vAhsvwoSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQB1ZgAvHZoPEzdxnBfx2a65abe4uZBFQtskCkxZ2dAcLxV3uR3Zwvdkt6Xcd1JNhKUBcQ59PBMstgZzTK3auoP",
  "key1": "435iyHqGZwqQ6sEsSiJoSLjxAE1bQLxRo8VgqNKTeffZpXHXCg611udwTs4Tjbc3v7zKk5mfyfqLcpmAy61EEmhK",
  "key2": "4yv12786wi3e1tSbfbweNgfjzhy3wEx2HxWP3VhZnR5R1ZRbakrU2bmuJumZA9r2SYuueVZRHxW7qDzUrVYjorQi",
  "key3": "GKsfQNtx4uU3iYQUDTvsW2nxbRCvrcfm4ZUk695CAPUHDStoDsSbbfPVLyyRgdTh4DNdwsTCNh4cGMrSYjQhZsZ",
  "key4": "jEvwUfYx2ChJxH836XpucS6Z1gdA8o9aJN7CTZwojFJBCMb419ETmPUuJxNr65NzmLKMoR22PHhSY92ahe22fgi",
  "key5": "4QYmmsvRzEhktBSbHivb3MXogJLdaKvDE8DUrdtcGTSbnkUnkuTVC65bYAoRJsUPNcA4LjedygST9ZLXr2hu6scq",
  "key6": "272NBNF3rysFFpEsxqf15uJwYAmXoCJH5z3HY8yY3ftWteA2rujZS4MbtBpqZVqQNDT937xjVLddMYJrgaeLRTbK",
  "key7": "3TenUGYw5rD2tQL1oB2doV2iKeDaaUuHxo1q8MvvcEoNbi8Sf5Du6LK1D2Aexj6pxiAAmLEEKfkUGDQvx2xa8vjE",
  "key8": "4p1TEyntrbE3aghZbdKZq8Kh125JjQbVUeV4Sb3tgJFbPF8PewuNDXCifXaNd55qnvi1vZX7MyxeEnmfkfLQFGwu",
  "key9": "25W7MftfHj1jz7mChyYa78SKdLdnTBfKd2oFtPUmqfk8CP4TU18sPBELEpR7qr816E2xnLi4991Yg9tLiSyyJzSt",
  "key10": "yJgVsFpE7hAQcFxrVvAHnBiwECJFwnCLWv3Udh7okSvCZaTPnPrd693oNAoSyxzc62iGxa9ALgGAfsQrbuQZWJW",
  "key11": "LBp3NhjZjKmBWQHhdHAXTNCkTN2Zm3k5chYZRMe1ACgCWPa3HTJ2N14WWMmKUn9RMvYsu9dKD1jTbQFYC2MkAfD",
  "key12": "4gUSm2aPvND7hwm8FT1yjeHPuhEibHNyHyMUCfvrM4upXhwKiitNXjxiYpt6983PhWuPQ3fdGn4h8ov7jPzbTf4d",
  "key13": "2q3mK4Dy8hh5NcXJR2MBjkupn2xnspdcpNwojMdiGq4fCZid8D13op7UNrgXQfp8dQFKmVWwJWp1asAonA1XGoQ3",
  "key14": "LeBk3DzK1DKUzYwZMhJuxYaDK9JYSLNbCDcjuLUDsS41jNNxQMJLs4YPkWxxakDsHFMGCqinsCAQR7sjbx89usc",
  "key15": "266Pr61C8zsg8KLpTQKGE27VxB9wwrejTeyWHjjt8Hy2zojLxQ6dFcV1T3o1HmHN6avcTbjdP2G2xWHUArNZJKYg",
  "key16": "2VDD7R1dJZKyfAKFfiSTNHh2gyECp1g2ctqZtGmj7dKgdZJSaRphjPxARmgxdHydW6x3k7s6bMBmhNVj9sR7wM5a",
  "key17": "4GkuJJbKV6o6u13CrDqoAZNPXZ7Zzjmp4xaGy4pkKgjY5zJ6XNBNnqQTPuRXSG6NLNW5fw4MNURpjUyMJwDg77Sq",
  "key18": "4YqSXsZS9ideEBRcRorT24dbbopVpGHrMfkCRxAfg9mBfXs7woC1eXZpeu3L5wrBaqwz8AvQAk2ppV9Uyp6aCdYM",
  "key19": "2BYnJBw72Vt7NKo3mHHzsa28cvFtUJ1tKZ5fGofg92NCN3pnedvdrM7svbLGD8DvWj4GsJZJm1Kjkc7HJznHxfiF",
  "key20": "4QB2sbgK6uYEpnVLGSxuzoYeTkqV7XAnUSPD5c4EGBJ6iwvAJkZqVQtQKnejGcUnJ5DFD7RRWpzkVs24XiGqHKZc",
  "key21": "5SPkZKXP5Yw3pZxSkznic2RnngN9nuBa6q2Q97FAMxFENzKqnaQVjriRkm5bdgVHNikiPimb6hcn7cCw26g6MqyG",
  "key22": "47RuEi9hs3PZj81nTbZZb2cSoeYiez3tEf7zHhANEh9QoeQ9Z1sJ6WeZDmqzsidJVKSu49wuxHssvQ5J6sEcWg9T",
  "key23": "4huEwV7WZzi7LX1aHEueymBB34kKgPiEFTsL5f7XSNiteYgabiZscAUUbLiAcEmDxr7aXgiej9ANsqj5V7y9SUKp",
  "key24": "2AVH1MvpywrQqxRY9YFn2fmdWJgjz2DQEWpwxHff8wYz81Dv1pG33yZfUi3KR7KjdaewAqwvroiPQpbudNoFYL5f",
  "key25": "NKXyBNTuWUxwEXXCY2jEwgAGCgubfw33cnengss5YNMJzHntVuD24vtdvZAk4HjawFqe5r6tPis9KAtmi1WetWp",
  "key26": "2sSygNkRLLWWH8Vg8npfzrymTfnf3o2ETdfpgfUk4U9PqE2myXLQuiryJgJC3yQRsgDDKEbcgtxsHVj6k1quaG5Y",
  "key27": "3hbpyvRBQSNw9cvSUYVZ8Bmpb4qgZRv6KkwmYQHdePugSR4BjJdgQJShypw3NqRMLEYKzpy3HHATdZw5XBqC312g",
  "key28": "2Ys8tb1LUQKfZmRVzhyYJis7NS3BGumdxTRNjUC35mBvTdUaQxnY7kPfDLQeYtFeoADEzit5d2B96pib9GRBK63c",
  "key29": "48PWfFfkHd2HqYx7uF56AKWu2QZewyC2rMJWzxdLYx2JFcFBtAJaFqNe3tKgP2JHxU3uAnFoDyQgHp7BJvZNwrgn",
  "key30": "fXYC89c1HJ3cFXtaGgXdVHYLrBtKCTdNyCLvJEW8LMUMx8RMLQptZwuPTZXnCJnBZtkkhSLmM91j5JiTu2sXeQd",
  "key31": "4vrXdDRHU7cY98z756J8Mo2z3R2gLcSh9tmjeQnchWRCKtpQHLncawcgzZYvzyUjiXjve2FzkynZtHScK5efwRAP",
  "key32": "4yQ1kRzHeJHcm1SFNfnvxdqAWijR9mccSVWPY3pDrtDUytb8ZtzE3ZEye8y8QYLrYCxCbEJaxFViAiDXZLEMDStR",
  "key33": "52ACn1jn1Y7s7r7VfKCrkNWZFWMaW1X1rg9ZX6wSWz59LiyhNePBhEKFx7BD317aUkcSXWToxLx97gkccPg42XQ9",
  "key34": "4k1rYSeEvSm5mKTxs6jWvQkM6mxBWXEHYUToQ2jCMzZDhUEynnePzehAekWkuPwzQAwvSScY99jMrvg7TUPQYtT",
  "key35": "5JEjttQm5Xqu9R3Ybv5tgGaphj83rpmxMVjjU14vVCPmJus5SuDUNejuxRAGyTRicrUjBo9cCduZPXDiaKZVcvX3"
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
