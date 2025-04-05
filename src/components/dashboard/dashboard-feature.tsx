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
    "3hrW8zBHaozgETX4CBNnZUds3fzPka7WdcfR9FKeNV5oSvWPwGNxrMLCJj3qqwJMCZ5yKBfBZtKpFGTAY7bVhpp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XuXQaRpVojx89XyiA9LHYxxcgoziE1PTZj1XUPz6svChPhEtrGjbprcb372dxMhEYfy7pG1Cxb9T4MDpbWWgjAW",
  "key1": "3ncfpxDMaMDWV6Kd9ByBdxRKv8RCoAMaMZrdyd7zmovAG1627zapUdkTaPbgxhSeKuU8qMvfEFC6kL6afqTp3LvB",
  "key2": "KKaMzbqoFpbzhXkruLmtvR7fpmFZJr9en4fgX3w4gKTNRF66jZrY1T5EFKEPVsQpqfmZDKNKDxRn3UiWRvHHbBC",
  "key3": "3jGbHgpLkgpKwguJAm2BAWjoJPgZLF4Mzz9bQBY95zjW2J5GNCVkjJvhJRg3zLawWns2Bj1P1Fk8FBbnqGaVEoU6",
  "key4": "8p98evZNCVv21xSyd8xh2X4YPmwqGZMUa6syKxp7Kg6DRAuM5LtrZdsp6UuBiEnmsfnvkVr4ToHQYjM6YfAEgCX",
  "key5": "2Gr2FaawGCW8rRNs2QQ538sv4y9eEztKUbkZpFKakfEzG9xuJmTQdwjsJpbELjky3D7YV2kkZztkBZ9kZznHXGWM",
  "key6": "ciUzCsgRHSKdcAr7TdHAttSP7CTCaeS8LJGyDkgn6kasbwaFrmeeVyHs2HfYkNNPDS4W7PRPqY5BuhRog1DcJLL",
  "key7": "h5kF77r9u4w6RadiBwRRxH6esUhpzxAvT3aUptSUh9yxp413EtoKXPHfy3enV4rEPqHXGw9jcRw6f17XnTK8G1g",
  "key8": "rTUfNFR28VXd9wL4RimKuoZcnRJpaAQoCfRtUGMV28Q1bUyMuEsGAQETdcx3YauonDYBCnjQtzvstByBZQWnrmD",
  "key9": "34cdUgEGx4vdgBM586qWVTBULjVNRzTvj6pheV2AwW9zeT6gS4wrQevptwnZFcny9H9r7jy4oR5bCPNAXjFqgy9h",
  "key10": "679V6HN3NcMZKkqxLeP9qnPQZMfHuoFoWSr48ayedQMS9PjR5uBnoGUt3dGXMrTGpcSHFvDZMkDK3Qp2TRsiqoAL",
  "key11": "3Tj8Nm7Zpw2TBgpX1wUTY37A8vkVqHG5gAT7LknpzXvWcDXTTtGoiggs6bHpUwEa8j6PJJi2WrNDf5iBiZdjRX87",
  "key12": "3Wtj2YmcpJJ7AWYjGyceH8bXHMGyf5LjvuAqhgtDbV9eQC3JUPkC32QyQdRqVvLTZvVTCzmNifDTjFbxbMyFjHqe",
  "key13": "FdqH3pc9GU8Vw1YA9Rywc6hNnieoc2ERWYu4wmsehaAh3PWh4pSqhjkQH8xRXGX1rwokDHkC94wtoA9XYUqs9os",
  "key14": "4huaJkyiFYULU6viqUuJ1T98q5GQgV9wfgun5R76QaPcdStStMhVBvTV3uxRXx868TdqMAjR7C81PgM2htEBFRok",
  "key15": "CdVS8W4qH8t4RjZA9BeJ55v56Jo8CNvF9yyMinXFMEpkcJAukLoxKFdxb2MNBxVKefJxmfmFoA7hq5r7BV4XJrc",
  "key16": "2jWr2AEynL3Q4JDGHzGCgUa9TKJ7stQaXHP22f9WQxw6vKFAyL391KGbyzcmf85J58MPWidxXPyWXsQwPPFLrsdA",
  "key17": "27QhJXfM8NDd12XKhRWrcJaJfvuSNrXKbQ4sdEfHRUwVekCCPPC9Y8J2wkC88zCwb7UNquJQ8Qv325wECVva9Y5j",
  "key18": "6dMhw8Xs1u3HwENsb442V6UgjyviioTAgaqyatNWnfBr97VnbqsEy7oEg9BqfDJpK4K79v1sbAzbRYjERCrC7qP",
  "key19": "3pL7MQpiPySbzgNuxpzgHUsb9dgJnGpQAu8rpRdfJucTK2ndjCHhLd1FKC2xooPJxpyS9pWfjeSGGgeZMdfERyKJ",
  "key20": "LnLFWHvCa3xEry1ePdpBEa7zoXtTAD7gWngX84E78pCnyCngh2fWfYgwR6HH8EqcuCMzrT4SfHSMdAn8YNRoHBP",
  "key21": "25VyeZmCrT4xe5N2q7TPQA7a16F2br3DhZyp6feDY4WbG228WJ7sjdEPwN5BZ5SJCvttQ5CzE8C5JBMVzNJ1q4EA",
  "key22": "Y4iQWTXWUUbejkCERh7bAeeyCzLQhU6dTRcHg7wQLuoLse4m8Qq8STygPeQgotfQ79ENjKZWJGgmCuRnFx4mEdH",
  "key23": "34XDvVhcUBjwaJeXPskVLpqCiof3tVzcMCS5aRYpbUpomMLwGaFkLD4PU6yiBSptsPkEBHsTGHLz94s524h9arnu",
  "key24": "3SjitrBYqgLZaEdL4e9riVd5edkeQN7eYNB69j52KfMe5CtVtxaNUmwFvdYGHhtiNLiS2dFG3MhuffitiHSTyKK1",
  "key25": "4r9XcNvLcdWQakVGyBv1f2oC6MwKYaJPktZqNU9jesvW4zJwUgVQCbZc8MLbJdKkQ87JfVospNGVWq35MLpFzVKy",
  "key26": "3wSbHNKftCPakM6hv8LKTRpwJPC6nX4ooEyg1ZBULjbhYre9PaAf4a58LckHQ2Jt341fTZBtZAiWX9F9Bfn9kXxE",
  "key27": "3RT8LL9FAyK5mQ4iZAqm78XnQ7ER3U2bpSU6sma3tB3ogafisdoD4otjP3iSpVrtaEqDNtKyrzV8bVgsJYfHGtGE",
  "key28": "5dFxrnx87Arv1qVD7myDqmRVATgq4of79WjefdkRRX5hF79K4Ffr7EYdvJoKx1YsVKDomF4GuGWz22C3MWRNKc25",
  "key29": "5ChquuTfeE8tUG8HCmW8h6KCoMjmQB9afmPns7v3KcZftUsugyPpR6A32nWxAeEhcpKxcHS6KDbjaxffNHEJeAyD",
  "key30": "3JjUQ4oyDF8vZHPZnGB6eCQwCFMPwNtbVr4HAXgTJuTt6JsBNA6h2mh9BRFEHwumX4S7JnaBzVVZufKtP3XNdPXW",
  "key31": "3WTM5PGkPAiQiKQbLGBqonVUMx6G4fPQUKzwoZsi1V3VYzN1a89Ko3aZH3nkwyLuSn8FshBRUTq5zQKTwakgjSQD",
  "key32": "3E7vTo4rcNN7YeTh7EF6CViaSt1MQ63Zm2AdEJkL1sSsQdaaXn7t8hLuGBKt57XnMEBgR1bUrWcT8DXjbY8jiR6R",
  "key33": "2f7pnjfdz5pcmR9TwNVpLHP47CQqovsuWk6MHWTr721LoPBg1DdAfw4F2gEx8YC6LxitNFre2oDs9mbSBM64JJA4",
  "key34": "4v3b6SU1r1BwoHzcdZoDCfwB4aXKVanVHrAAQyBR8nkf9YuEW8gjBJ9SWNZqLumwu9FBxthiVysP1rFLCiXSRg8j",
  "key35": "53cpxbvYEjiCQrBT2XBtewcw5x63ovLEwdHAZ4f3kJtkrREbGmcKV2WjzU4YcVzU1ttBBNXBAsDMZz1N7xN2xbau",
  "key36": "8ynetFhFetLdVyexXfqCWUJsEBr1qX1Vb4XFryx5MNfMCGfeNixEQogm9xsrHCNSYrDB29AGKKxChMsbMUFdMUQ"
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
