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
    "5V6GkcdDENwjgxYLoyS1WmWCYjXJBMyvHJFQKr1iaWyHW3xdSKECnV94tEH1xSqCuhj6jmSuwN2V9jBhFdrL1pTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSfn6H95e4zR9LJNS9cj5hsiZy6cuWQ1iD91VHWarch6BHuYNDXYDzFMcmrCn5st2XMq7Ze9KaCeucPv3iz3EvY",
  "key1": "3WeACu8FQEAnVFugvQanJqzBojt8gAh4BRb9wYatE22osQ6wmeZXn18nKvpC24swTkQ58CMbpby5fHq9exG9sZn7",
  "key2": "2JavsjcP2ycUqvHkzD3yvDrs1AK3Qh2igXk16hdLpfuPvRrjGZyr66s68j2v4MdTbkmWcEfZsdYdTSBVmYy7kZjA",
  "key3": "57bprG1XwivBwv3jaFFHyKk8pBgMNMXxnWMUn39XpSASuhtHzhLkSpswWnRCuajoNqZY43YcMS5aV8xie44AKZEE",
  "key4": "3zvi2BQK8XkEnfSwRBC2wYktLjqsAuEKscBQDgFEgiacA6SVfhsCGdEYuafAiG7iEz3qDFRSbxTQ9wRQMQ8s6y6b",
  "key5": "GQd14o4zHQDB8z7EzxLXTNCfC9ZCUBXj97xx3rFThMXUf4BtiQsDxLz2zfTBZPCfpc9btHXYRZS4TF34PSoDoHF",
  "key6": "58QZMDydrmNEkh52tJmUjnYepsRhH6oiSSdASfrMEhyQcyJYUfTPLoKJi2ZkG7m8RiAuA8jwMhsLcmG7B2x8WJuA",
  "key7": "kcZHMVws4ZadbnLQNtM6wxun4fbZuSXchGVKUEZeyiSV2Tditb1JuHTEiTH3igxxaR1Aw9GqrYXN6zn9nV7aRMQ",
  "key8": "3mo5oJiz8jBjGL3bS4RqqiNfVuoySJedLKmwHXH9XPFtZgkcATf5QTSMVih32nBkErskdGtyUDimPbNk9qC8VYyP",
  "key9": "2BAzUeMW5drZXGqqWpbZKoF3koDSfpovrVyLThamhEh1q6VRVScWBa74k6Y57KF3MLY2mzt54VVZ6Lj6UmpYMrnb",
  "key10": "3zi1WY8kpm2vQmYeWYQGLSYftjF5H3BqkxpQqikFoTjmZ5g53soY1LTaCwNmDSxeCxuBYjYQf5erfutemWGrvzpF",
  "key11": "5YnPb23CzHCAR9jrNhA3a3LWYUvEMLd5ixSXKsuHkJbSoDqWGucj3uEEgwUdL6JS23R7bS3FbY5bN7Ztcp2hKbr7",
  "key12": "4KC2d2UzGomYdC4xd65AiNurkKWqiEebyJUn2DMyaioSBJZmtxdCnEjAq8wmwYeB7B9YF6veJsdr7CXB6nygEaCS",
  "key13": "3XCRYYAGHZva3X95ZbuuzQQBGUoZrQbymtFp1nxvHfWzYmLbPkLX1LdD2MidhnQ4KFs4NfuRznm1p3J3P9tCkzzg",
  "key14": "4URzUvtQmUcXWwnKEBF2CTihNEe6BV6MhTzvKFpqmh1QxxxY3kEC5RjbFjLRMLm5zizw24HnLCgdUrf6a33hsjSQ",
  "key15": "5UvA8XFegpJeM7gGin2SE9y3zj4kCkEUqZNcn1VprERVPZuyu9YwwDfckqovhUQSeRxws1MhMqFcnKKHp9SByiSp",
  "key16": "5ekEqCKahk2EkGUwfsAxjHasGeGGF5qTLnjLCYYSteWGzsMswGVVRvxjL7tLbwtcb8tovY6Qw1kfRHaM3gj4X2rZ",
  "key17": "dBCD8mZ1nAtvXBBRme4xBgo8ccaEHzGUg8Lrb5LT8bN6qZnqWyYYFUFSN6HiqZb3GxMQ8Z1tvVcsPjGtHhjwRn7",
  "key18": "4BkMkMTw8QbENZSLt3WYqwnBRvjjzPG5fYYDs7iTJxh8y9DU8Ajp8AeKQ7WsWHPxjuyHiKsHGKXJQSaE6kbd22oi",
  "key19": "59K35y5TK1RDsZdiaedwxEJVvCNvSCK4PwFAk6FHXFLaoxXFpTvJFhNWK2V9wmvqRrMuodT7L1Xf2V3PnnF5egim",
  "key20": "2RQorx17HHpr7iXUyu9c2NsJhhmhe2wCjQwvTD1qemZiQuf4Zi31wLVXRh4mZ4HCv1FYoFFTwAUrV6Cnhjwfh4tj",
  "key21": "3keXhMWF2ojmgbRpKcEtQPS9fPiVQAP9u2DZY1f2V1j5U6iRhZ4V3QUkjoJL5WJbxDZE6WoAY2sxjXXHk4dzXfzo",
  "key22": "5yBCg7ciwDEnxUkmUD5js35TX98V36VZtCEQB7xqJsWD3Yd812gAyhQCHV4iR2qySfodtc78SuoiSrn88DNvaixv",
  "key23": "DLz8EWHMu29L5DHAoLDEZHZrDv48wEJ3Zkz2wQdyyU5SYbhj8nXPzVfAFY5pnGddoDr4mH9SteSLNuNHNc1NY9J",
  "key24": "32TFagqxuDR4o8bfXFCujMc2NGPE1SFrVrHHPwGDwk82xjzWsxRetszL5GVzmnNadkSHAxUWMa7qH9Lfzr7wioAn",
  "key25": "JB7dQm1N1QuYEjy7t5KMPnCKcnn2C5MdKJQ7rqoXweoECfQKiazmgQiQQRmeEuioA4VaZKKAxvieTVRYvYcFyge",
  "key26": "eTDKntKwWfgD76ee1w4Jr5BKS7MMB8FH4nkX6CGnCF4RsRWwN3Bx5McSZDcgYzEi1YEH1kKVxY2y3TfAy2LQi2f",
  "key27": "2kntJSFGmf3AQrimyLpbXUqnVJzdceJ8FBFdeKppvguGzRxszEkzCzxVdhQkuoquLv2qaPqcxSk8qf1hS6YPkD1",
  "key28": "2ofxBhvPxUbhM4DZ8uQwJWd82Fg5oFVme3DiDeTLxfkMLFjqFNUWsytXfAb1RJG2cFw5o6NpWBXgeGszqCEjBRqq",
  "key29": "3foXdyU6s1RMEcQj4oRce7HSVexyCRwt8xN3sskjvo7d1xahvc8N8b1E819YoqYApJKcf35PBNv5PbSkftRMvcKP",
  "key30": "3TLZoCKAHMU1Etw3GE1fm5tjfNuEA1yuSbrjAfAbV2FV6jy5S3zQx2oCDZJkDqahxWRKHgSQNtLRJKpXtzxmK8eV",
  "key31": "3GZCawtC86qeB2ph5tqvSPyZJ5FPwdChWPK2pQhABHDTGrBouEZUfjnxYopAswCsHhfa884gRis1Bpivt97pJkKu",
  "key32": "34FuAAvHiYxa3RN2eLDy1oKcDQjxuDrg8pJAgsQv8KmDmAcfvJoNMYrn6cBTJmi1fyqConqGH1mhshZz125qbibG",
  "key33": "VeCmgnwpugMfgqfRbqcNKaokQwWYZTW9VVcb7WJPMHVwbJzPWduaaeN1Vy8JC4qK3MdbyumPo6GFHP8oiSfCGED",
  "key34": "2WfmWaKJjx4E4Zd9h3eMtPTPB1FWdqAGPvURV5qu2P4V6aSqn4ckkjFnBpqy4XTBNnoULRYBEZKvpv3ZGSS6HAEW",
  "key35": "54C3iJ8RV6Qqv9zv3Qf39pTFc3DkKpDaKMwC6Vp1NrDB3M1P6aSQr3oZpXPRbmjNXJFJaEdZhoQ8GZYBS32GnNWM"
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
