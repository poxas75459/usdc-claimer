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
    "4wzwbQwxRTLi9T596L1RAhqs8Q2wCjTzqr9eUsRSA9CzcsNug79hLMRDveSvocWcSF27ytgffgypsxmoQx1znZXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48yaknQA8SMLXDfn6JEdA6EY8C58H6ZCM5jkqvDVuzWABk4hdRAKHNT1mkaZhCFEPqZS59hae8mA7y36gb7sHFeo",
  "key1": "4zajyepXN5sAnpEp7GJbjY6dsgFG4GKCVnaz5PBEt4Ha7BVXHV6bvdLh7iKdXSrfVetySxwbjoNFnY6CTMj2Fb1N",
  "key2": "ukMwmc7nVZ5R7Bc2QEKBDUFXxgwubt8ULeX4i2roBxHwennQycDuq31DSQNFAQ7fTXPWaiCRnRoBTBWjeHE2YSH",
  "key3": "2ndH1FcE1DoYscidxFjTJW4P9f2xs3Mu8GWzX6eq3wP45qpmnDrrrXW76hDadyHH4gVX3SopHrvoAXfpFzUykJFv",
  "key4": "3Vn1P4E4rhm7oLcB3BiLGdsmaaLPs7xFr1WSk95GxxLjidQSQVL9sT71yvDvehjhspJaGkUfBQ1MrUsHQLnkj2DM",
  "key5": "4gm9VGArBDtWynAxWpLDDWcaMFw8pVSTejfs2jCpjzT2aV2CZZG2LBUYeu9s7KTD9cyyRCPT216R7p4jBM8utE3t",
  "key6": "5GwKyiDTCsA9LQWLgWuPNPkcSyGpuU1K77YDFoU7cQwb5UuRvhWvGzV1tWohNdKFEz5hEcdArwuctCtCk51ukn2Y",
  "key7": "2S8jUF9V8FyiE8jVxJoWy9jFniajorHvZqhY8rzXKGTm25YKBHoVEJaQ85DrvS4iH2sGmsMyfU32Tafk2sugdtvt",
  "key8": "torQZSL8g6vj7WqZoQygKQtvrknxt58FYjVeopwe38pYwABhxpiZC8Qbo3Fs2KqUgSFPbz18FjufYFoUX6Vg7BU",
  "key9": "RgYaaBh5KSxJ5rc26qrnxkW5km8Ujhy1b8mgARtz6UBcvbub8LhUSeRsiG6nYCZfuahfJBWX24FnRpWH1qQw2ki",
  "key10": "4N77aiVTqdHATEG7dAXjbBTwSBoiZtzWMLPjc9BdbtBtZ9rqhW8W8LYZsKgWusTBZQvjcmgrkvU1wSFGLFLPAPFe",
  "key11": "5FR6684n8nDQTsxgPc7rCrauypDFjxymLBku78uRhTQzEU6xgv8Ngi4FUc6UBJrE6e1KZsi95wLDByx87sURxS6L",
  "key12": "43Tda7kVchB141URxq6RzYjTkFJ3Rj2TMd6dhFRkRcw3eaQW6eUpviB9fFagkWoWhe9KDqb5dL2kGwMN38NWWnJP",
  "key13": "2XxfjhERznXsR4Kostz4vyptMHRStd8epChAWWYZK9zcVYTeQ1WRJQMKAQVgPgFnGsdK4ZnRoz5Z43gLcvJyToaY",
  "key14": "4DUdDBo8BU7t9FH1w29GDpJsFJehaC21KtqWqMetq1ceUKgmwQuATqvZB84TtumFtJ9aW7dwwVZdyazUYxD14WJA",
  "key15": "4qeUfBzy8kLjkqBZ83FfpVnBbvdZ4SjbZb2x76vvpH2VXCF6GXNq1eptsLa2MzM3L5oZiEAJPw3diBsU3M8chVqq",
  "key16": "2uzAEV9RF4ZGRF1tBi8C2Tu2ii5nZfxhKmpBobY8h1WWT4Qz58mwmepMtLCDENZrg2n3F8t98Wr2MQjhLJgecqSv",
  "key17": "3ZaPMJ8ZQ9sxMzgYPcvPMRd9DqsJK44UGtWawLN1ssSW2AZDysau3Y3nUVvFd35QEfamsbwTmWtgQvugZfWz5imi",
  "key18": "3iDRLDBAhodFjYM1jxudG99iiiC5X5YtuRnfyvJfJN9CBwAqb9GabQwi6pjx36FmjUqzRyNUt2pwSqvg2ECsWWWq",
  "key19": "FbqMFwdraYvfSK2LSLTrfoNSb6HWMYqrVRKYPP6wmg7mTk1kCz3L9iCqCgFHfQfm1KJ6haX1V2YbnR1aFvoP8fc",
  "key20": "384BFLBrffahK5HYDDaTjaLAvtxoJ5mpMSBXJNcNjf5SvKuiuX2to9jpPfwFf39JV6J7Vm9stuaxZS99CUjRqEFx",
  "key21": "43uccWfgPturjvpkzhVAcrDMdCVckznq5VL4c2SRpPVyWdP7ypd7acFDWnSo8HpF5oY1yrpPBNUa7QuTE91N8cpK",
  "key22": "5Tao71n86WduMovjmSZdWxmweVuMHMHerZzsoCz2yf53J2yhrAkua1m5Eh2P5kGPNvdDrnH3sAWe9dt71eeWcXU",
  "key23": "4u6Efsrb2UDdiE2z8inx6s2vLUt6ZJyuPHccX9JEvx1EXqPvjm71iUMNtBqzv1Ypbq1gWNFHeCCtWs4R7HooQv6T",
  "key24": "vvouEUvPjzQpmt9ndkHxERfSZVRDhNALf2ELfj3JMgrCsq5WXhAKPKDaFwWbxgsLisACprHm6ncGiMKxgNLtHj3",
  "key25": "42JA9GToM4kZrc4pvtqjmiDhRQyWTYMaiKbubNhX3APK5yRSaFFHtNkSfetX2dhJVESStpNVepSNLzTSCD6yka6y",
  "key26": "2R8Vx6tgurfLBewrdeJrBh1kPUPGounrYgxqUB6GVyTjjKrMMVbUsTg9sZUixo91wapt6dhqW1FixcR8eRNMDSCV",
  "key27": "55e9qKupxN1vUvTQ6ydpE9vBrx7pFAJjkyFoLTX3aXGcjeqRaDXz5YEapGgkVFfMWf9XBXUSdHcP5jmEMQtZ3Hyq",
  "key28": "5wJDSnQXgE1hoGv6mSeVu31VwRyCA7gjurpRrMtyAuY15AcGRfYdPsUEPk7yNyhRmgQdEPZVparDryo16TCk7fKG",
  "key29": "51uKpy2DxPymT3PbLHAZVkgj8X3cytjqYW2jSUJobrk2FZ4trz6SGufLuKMJZfaAk4ENa9ohDmpYJg8QU7PUzUbF",
  "key30": "4ZHuRZgrzGTNrQXXCWAQwSaYLjJRUN44wMaiebBGFbiiAo1cmBzcNECaTx23DBuLp2FgWP9ZZSb7B6WtG6d4zLQR",
  "key31": "4utEtYJvGyW9WqEjGjBZ6XyYRXaZxfF8vxa9of6MnamBiMZQnhMnUkLnW9z87ZK6JgPDmWSrc7kQSctw8CCcEg5e",
  "key32": "3CXhS8nwg31b526XBdoTCqNMcmJiFqhqmt9rW1oE8jVn6TUUdwVP6v8o1aT1ph2Rmmrji2cydbULmnnzyt7pg9zX"
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
