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
    "2jWYDHWdXiAho8MZhGVpaFXAWtmwawtczLpQxajoWkooTaWW5Y9goWQ9BHTd4GYNUydnEFkXeme7ZykcpFFgn9e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxLLX5C1GZDvdbLyxm3g8hjaKWTm5uSypt3Q8oEFK7SZ9sZe6B379XST5YXr1Nj77zCt7h95rYCYM6xL5Y6CmMy",
  "key1": "2KprLDccCGAQ6BQmDuZGD26p9qYp1iWyV5owz6JzhZXoqAacQxGeax9i5kGaSwgpSCtCw7fGv2r1VRBNQUt7m2F",
  "key2": "2BvgSaNuAzPFsfRBqnfbrwP3ubY2AoU6dmGiN8SSETKq1hA4F73umWhxbyjqRCJqweDGZxMUrSxELvZgcFrXMEsu",
  "key3": "4B3brWqzL2wuCijskKud5Rdy6wAJ5Q5rk7dqorUK2jZYfnUnUxmtv66cAehvYP1ZDjJBCPuAomc4KKpCVrFNHGvv",
  "key4": "2ti585MqZqR7UMYiPFmLHhjYoYTvox9WzgKG2vpYQskdzGj2SWBDXie3y9KJqtLtPxpNcvkVEDAojsN4bCgnPnTf",
  "key5": "2eP9TZoGQDVB1uibtb8Me67727XxykSwryfge6u4o8WVUxaruP3AUZQgHNbFEDGXLyJxDpjpeq5eSvkGDHySYoes",
  "key6": "2yA5BtTakP1RMgZFCQ9rMNHC8eqE7wbpSg4jGg2mgDirQpQA9fhnWVL2HvoxPt6eNGmfHAmH52DtLAJLPRuMrioq",
  "key7": "2rePc7kN5sR3rHTZq4YdxdG1oEEGuFLDpxe2CZZB9JQwfqd8K8RGtTnCGurhJE46bSFdMpon9UbxTSLpY7wsb1Ev",
  "key8": "4u8hMg6uSSxRGJsoWzJCcKRqSfgNDRJnmVompGSn8VaGHELx9rA9cFZarScciHfvG2Zb6p7yVnqmVo2y1PTGppM1",
  "key9": "4Uci5j9WPni3mPeDmvV9vkWdCow8ezi93nHPPzNZ6HZWhaSv331oT7tqgn4nxbyepiDuBkEz25iRoBMepy1qWBLP",
  "key10": "4pYsEm9ULdUWupkd4HuEn8Jy51Qg7oCzRaw7gscrsHMZbusr9cbCRLjB5cNhgmTJjk1gV9KN6e6uKxYtUYCURBQX",
  "key11": "4AivcFpWGKps8hzoLYDv2rMwuTsohnNtoPadS3oUBAiZvLRiHn6qD4ydkseAD3LZpHd2JKt1e1cxUumGXj2jk6Hn",
  "key12": "47eqCei8M82oztt5qaR4msi7dMGko8d275gSn4ihJ4XbqcrvXDzB8futiqiYXvozKQg2ZjQnPhSx82p8KpBJGjXi",
  "key13": "5DKqiTnywZzUfxa2PizA2sozTHb2C4w9ubKVwwDHG2QQeYeUZXqFNSN7fdfuqeePLebucbU9pZznwsWqb5fa5GTC",
  "key14": "4JNXztUXi1uYWDXn5HAHcXYWJtFwiWTSjnCmiAux9q6b6Wuyt9VrXjkDxAKMc4xXRUAWEvMtmZct6VbSooRmwfsZ",
  "key15": "2Gt9LyN4bcwDQjdG2RJbrbFUtDu4v5xFz2rkJexAFxUZSb1q8nEefZkNZeEiQ8n3eaHrZjrB2nZRtChUUV7HsQAb",
  "key16": "3nXjenUvWe5gk1BYtyqEe2xcqj2WxKS18weB1yTuEVidWkM95gm9SMd86zP4KnDi1MGEUs1paYGcKjdq6iCw3eL9",
  "key17": "3eqt7xhzGbiVb4EzNtoWWiBtdAr1Cb7PpidoL266RJKA9sEnsqVLopRKTNSsv3UKZr3Cvv9fYF5LeAg8afiLGr3m",
  "key18": "55xJKhwFVKUUy5UsUJV7wFFz5qSb5cnqP8ADDYwfiP2ztwu1rBP6MNov4j8ty3HaAEAgRixe4xSUD6V3T9zfUKHP",
  "key19": "3y1o6JD6aNunJRfcj5mRSo3BFaknF4fRcgC9bBESrj6Lhfq1LrLFSUDgMkMwYXoTwvEw9SDVF1YgqQcTmMkFhPV5",
  "key20": "2iX8Ps8k7RxgaEMMALu3xyzfoaFeSzFpdWE9mKqHqx6AXcEUszdh8HbPf39qpCNpJ1M1v1tDGFZwLpoubytPiSEA",
  "key21": "njBBpTydVbYyut8YfX82z2yjbTV5bMyN3TBah1eaqGzV3SBVK8QP22KTHjWC4v1CYjrd4himuRkGNGKVfNtKwSf",
  "key22": "4woFPT6Pc6ZesiEmbUW863Nnmt6iDrfcJ99ah2Eo925DpArBSctJ2VN8K9Ja1PHtiDiUKVY2s46o4enUfyBUdf1i",
  "key23": "31X3YKydELGBd5qaBe9giUKiu9jsTt1ygzsZeLvZWtCj4KM3LeNzAboco2svMSzEcdNas2CiUhZJMM9Fzk9zRMYZ",
  "key24": "2GibYUXaXS2p2ZGdmgSbYPR5YEPNinMvnnzcEupQHDEAzSnKhusGbppDp4YnjxxVAz45yYWZ3DW8xQxfnD33HdP7",
  "key25": "MQfLXYJhwHLXEmznAAXix3v9SRA9A78Cw1jGMHG3JPHKyXBGErnThvvMDrHDYj5dsimstPcwpnBftxBTHEq3nfB",
  "key26": "JAbtqMJ8zJHfPc7a1s69CR9pU2g8Gq2UFS9kiwZHgk5EgYgVHpoUAW4CvZwn7WJSkR8nPWE142gf1MTRHfQG2pZ",
  "key27": "3TUweJQik7Y6hTzpf3sWvXf8diZXAutvSGJWv8rDSk4mupkGS1mz5mZkVsx1LqCpvUEv4N1oonmSLQzTea2QaDnj",
  "key28": "3n9882fcw114fZoVb4VfcLpNNKoyGGe1H4NgjH47fs2jGg9RyLc6JfkBdvSPgAkQ8fyQpZ7ZthFcdeS6eGh4cKZk",
  "key29": "3LRBHBLyNChYG6J5si7xxn7jKxXn13hWuYQyYQGiRYWAXjnK7nkynETDh4eJ5rNA969yLoEB2opDC5wty5D244Bp",
  "key30": "3QD37Dn9LDBgrERtgcFVomGfCSrXEVxEg3aimVGQuuhHn359oy1TFoKFuqbVQnSg8nNC1tQcWCNKFgch3JDMJveQ",
  "key31": "4B5a3Dbu4H8hH6AHXH4PGQjTGngi6oQcWjUNobUWFBLRwkw5yxFUJvn2GscimxNUvwUtBF4aoRtvQ2RenFx1u6p",
  "key32": "AoKYdzSa6BwdjKqzXQ4R3CSbM9rGuM3BhWSKwYMi9J4b6sDTNtfw95q81xmN8ypC75JuHDtxxQnhFV2dXCnkKZT",
  "key33": "4vj181fanAwLuik8kUxuWUrBXJtNH3hXg1kcbB3HLV7zcNNedFo6bewJnWH8dxuaHG5p4ByrgvMeYNn4mFwQGrzn",
  "key34": "5c8ayDUYzcKcvccoPtsZqAiNWcMnFy6HRFiCAn7Z3PXdWEwHhgqbGCwnfHzUy85JFknMAvDVbaJ9Z9VaG3km8ama",
  "key35": "aRcaimVoFpFrzS9k6WGc3naSiW78uNaTtWrZodYKphDVv669FmC5NURBbYgJNKXfqxd71iYoZCigPK9yNUyx3rM",
  "key36": "4i2F6b6KiT4YtknPXyrbkMmyeqPSwsY2WxLJJgmwaUyPHxSCci4B1Yt1wzKtY388P5prmqXd4n21Yxetyo1TNvzR",
  "key37": "6NRSFqYzYJyCL1P2X5JQDBvqp6EiW8WQSB1epoFj614YY3btQNkAHMYmcsHqdhvDgZAzRdRfWGqh9M6syhtJsa6",
  "key38": "5eVnktk3mcC29Bk2VTd7dMqx48dMBRQSkQNvvHguMBnVyrYmQFpdQAn5GQn5XpJtQKkmczddX5HjdiVuCMm6nZUc",
  "key39": "4R5cFZ1pWRGuouDTrjXm66QDF7nsYAjx1NhEqxptRRq7b4EsRqLGmyBXVS7sVkc5AYKHsQ7eAMwuKdhcg8EdQfhZ",
  "key40": "4ubaikCxFGbUWVJBL5GvS2L4YyLYRyNqJLvPe6qFpx5tPZaP32t3He6cHtY1h1RP2JpxC7c26zbssAhH42PXyMGG",
  "key41": "2Uka78j5qJqxZ5dg23EpSRMn9SCfzufQmxSZPABzVrg7Kv1BPR2k3A9hMqLNg5a7T7xurQwEFqb71ueNWjEBdgVL",
  "key42": "5TthrK8S6vf4GXJTMZjHq4vDPNtRRFhY97yQFyZqnx9yJ4jwPdLvRKyaUSZDHmjp6tufytJ6HSpKPRnToMChxY5J",
  "key43": "3vwnT1RpmZ7LFeSgrGAi4RNz3jbSXQ7xrVPnqjyBXVC2qjwvfYx8K6gjMqoVAEHzZStXwGrqDkg4XvXYuLC7X9qE",
  "key44": "5hB1v2oqsiP5XC7TN5t77eTj4QtAicRWzy6efnxdQL8ENaAUk66CujSY3LWfDhLVYVHa8Mz8Y1KobWQQv3FkSXDd",
  "key45": "5v7CTRBgVH4H4d5mAsJj3iJTmEEBSoweUZsnSMKT8BU2W2eKDB2eD7VDeeq3o6TWK9LeFosG7iGUuon3RDfFUPxq",
  "key46": "4RTWnXroXq1mwaTyfGYuvu71A3xFaCHuuay4HWPCE53qdseTxS5nnfjg2hDaSYs4chwbC284xnWGbJtHQgH4zRgQ",
  "key47": "2LHZjzDD7EwHaDkTg6FyPVPR4WfCg6KwLC9u6CSM86yKAGUFMpFTnCkDjsdQB5VhFkgBExqnJBHdke4Pn65ixGNZ"
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
