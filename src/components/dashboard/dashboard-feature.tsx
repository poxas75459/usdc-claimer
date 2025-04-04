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
    "5pAB2zRJQivtPTQWYjYEtdc9nS63pCMXsNptGsux4kmuQ5oG9H5faFHSQazCV365HZgkcVrT4oXpB5UFY2ahe2Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66n32dTXuiWzkhpcpnkv3aiiRVUSovHwFnbfUMCwk9SRjDBdBNnd4GSQTe11WfFiuMWcuJcsn5HqwD6Cw5ZjcMxH",
  "key1": "5QdQN5zMv63Ep4nnHNobAfY4jeJkxyYxXaqdhTJsdE8Ns9fJzbK9cdYxbcBtPNV9VsjYPmjy5a5Z3EpcKjBeAQZr",
  "key2": "2u1bkfke4CmwKc9hWFtS3wVudhgxL6MFDyS2beSyvrV6qdjoaZQU4K2ei4CvF4auDgU3hyeK6UUUpMaWrwzKXgeX",
  "key3": "3rXswMr23wx48ZbgoYdFJPw5nDZ33BRuQ1JstkdDqes7sGRajFEai2QhJrdWojLPnaVs9bpYRi1XgaCE3mEdGJ6t",
  "key4": "2TvkGxZhyUq3NiJN8kpnMvLpVeM1L6GbZiHxZP41kG922dbU7gdwuY8jLe5zi3ryNYpM957w9puuLfZgipv8A36k",
  "key5": "3EtMbjVBLbrwKe8VJ5VoLV1x3bmVccrpkqFLC16xe5VpGKs3jNerEJf9K3CDsKCaRpwyXtBkAeUs27UztkiNuFHQ",
  "key6": "3f5v8zk3jgJUEAxKXxp4BpMWV3ePRDhAaE25GzdvAb8dZuFzi1RVfVbX6fuFve65U5n4P1AXyTHLEsF5BuV1kQSE",
  "key7": "4mzYSgUkqjcBsueqhxBuo5JUJKqHzxzCoZDYuwALr3CMke23z89X7XAf7iUvKcTqmNxFju6rhqYbUkPgocWcE3oQ",
  "key8": "2W4CQAojY9QaZVgWVyLjofE2zK1NEHy7YZG52V96su2njEbKzdCGhKGunF9jttHxcv6Cp4Ys7aawBUJwJMbowNcZ",
  "key9": "5mjrZFLzV6LzV9nUdVU8ycNhqGQMqWLXhwhGvFvtrgDJfMD9Nx3unA7WpsgpL3H4igBedesiMzZQtuhGjC5WRmLb",
  "key10": "2QtNDkRW6Q2vCEtHbRYKCT5JDYxkxNxUMcNSo2QbawQcBgaoGXYDdooZRwxyowkohxp963YzhWopAVSB46ugH8HP",
  "key11": "3V2EGb68TwhyRg6EEsH5W9HrLsPYrkVNxbuL1VyQM3CrQsNK8dWtL3QhjjmPjWNfXZD1gZWTgH9KgCeCe9uoM4mz",
  "key12": "38biBML6sTGWgTEdmCYo8j5JEkss1fRubgxWB2H3RrthKacVgPY1UtK5Kzygk3JH7H3FbG1Y6wWEPfTfQKhB11LK",
  "key13": "2hNdcq1tPCbDZmH9kmRPnVT9gQoE58AYwJnNFut6A1P5JBTDGd7sghiYgoRH7eEx7p1Rgr7qSSgwZG58aH3b6hJ7",
  "key14": "5GYzcZcVQpGTKT26sLjUFHZDJEE18PJz2phCKoBkrYkW9ykAA3Urucb4RRSB7H4xEQ2MHaPkQns3484JtKiWGZWg",
  "key15": "3z9NWYwZNNC4ZHSmXP6dF9FtSzg4ML1MYWpax3DJa22gYaPRXdV7W3zEfhVJWk2e8hqDaEowibHrjum8kY55Cs8s",
  "key16": "3Mp9PPx8Dk54CoCj67o7hJoqZALKRYsW1EaQtSATjmrF3egrNTe25fjkkMGMg6EdAx7cPiufqsahkuNmDwJBoc1V",
  "key17": "32MEt4ZtnkFB31axqUFxGD93LrnHYgDXVwrsFcSfPU5dr5n8j4jkE4WtKwBEA4XUWSzzHC6RDtGft4LQzj579s1Q",
  "key18": "4WL7g4FxsRjMs4oP4C2QBjVK7kx8qHxjs8XjvYCUb6xApfPNbArAdP5GUtumKUXhhCsRv6Cde4UESojyvLaCH5NC",
  "key19": "2ZVvUZFZkxaTAAYZs4kGgjAdCiUXfAKHtZs4EhQffjSsVkSvDEPZMLMiDLDgqeYPJgZPPF9DBXmLGHAaaeCqyNrP",
  "key20": "5SCsSJATTqiXUmpDKUJ7R4H23VUpHE5oU654cuzQLpwW4FUGErByRNKQz4LpdQzqBH1gRCCetWDZwrfv477eWtsz",
  "key21": "Cc6rcXSRxNxPVMYrrVp2a96PRz2ZRkfKVoTwJGAs8eeTdzUsm8YVzvzFqTRUCdcF7GKXhoDda135UVT7W4zmtEL",
  "key22": "3H1mVfh5VfJRubF7bE6nL5HTvnE3MaWSofaqeKcKyebfa1MQXZr439Zp3QSS3sm82WTqxyzjtuk85kLt1i3R27cM",
  "key23": "D491NeTVadJQAzQGoRnJMCZ3mynmMgGsTTfrQeJPfFHE5UaiTcDtCYYKTzNuUZ9wSfJStGX3wZsqm36PQotmYaB",
  "key24": "5R1zJFBAp33pbLzf57p8rcXUHMnab7zARX5qidXqFCQ1iGhrtR6AwSvLJUFRYzFwkdAdibcqp2Sq546hgHQ6W1Cs",
  "key25": "5Eyryk5t7SuK2AFVfUWyqzcYH9VrndgHbRYg8DzVWcmPEWbiJj6GjRRTpkXJDhcfdBWwVPjjbranJPyQKfjLzvRb",
  "key26": "4N1nYbKES4TdeRN1a3mfTWqtsrvteZ4wXhU8gPxjypxF4DY3jH7X8uHpzV3sctqGQJZ6ow18ZLq5XbP3nPTbbrKL",
  "key27": "4Z83qKQqQuxUpyjPGH4SCczajVWqW2NNyg3rBEn6bxGSchLwRZDgiPnX4RnneWC4JsYd9tVuZKkY3TCwZoEUsYcF",
  "key28": "4Fg41hJYbT9SHPkqmcgoCSuKGms5JEYb3rKz7RVWNo5Mj3QYJRPr3Co2rm3mASwh8GvbG3XDrMiQdUa6sM8TBTYc",
  "key29": "36J1VdYoZrDzqf87L1wFXXTLrjqL6sfoa3f9YAJXF18sgJfZTFcVdCrtobf48BswJzV9VfkuKPhLBeKDP7uGFWxE",
  "key30": "t5n3HE5kGob8ZxohWbGaBLWYuDqW46jQrHnsNwDg5kXAButtHMCMWFAwLPmG7zAhSscvxjeSvjcHjgkUGMNaQEB",
  "key31": "4vALftbtHsxp8hF4GVC4mCxzcyi46dwwhEvt66N9CC4EpydnspGdpKdgTRYT2uufWfuAstf1d9DtpEEeAhsBtg6m",
  "key32": "cG3AJBV5NKRs8EsAPGhpnArX5SuXuZShbsYajrRgGHuP8XrSs6EuLv5s6CMAMsX4fs5qF6ZN2C9Cbv5nCxbLe5Z",
  "key33": "43VugVp2GXcVCJEpYpkhg3EyiLARuDRVWJAdfNDM3tVxBWdgeT7XdF6CGKwCts3crvxDhfbk7mD35t8eGWE8AtSE",
  "key34": "B4oeGYhFvmwKyc3kZ4LAW4zAPAgDtsAU2ZL65K3LUfAHfakJQBicwi5wa9c4s2d2r9DA7uJjNpc2rciiChsF4aA",
  "key35": "5a6b7bXFEdBTBPfnPyVcaLDgaNdrBZiA61Rod4a5gv4kMopBiNJBNRv5k7dMhdf1JePNAUDXbNq9vrdMmvX5gv9C",
  "key36": "2AbrEHLXFQQCrqiAGAQRGAKCmhxarrtveiCayV7UZwi8bX9TxvJuxWxrWx3UAr5HTVmg68wnHhgvdcSVW7t3qHku",
  "key37": "ppoypCgsDwHgSTK8NxokAggtx7dFe5E1ywLxi6gTGomTZartfiDrR8iP3tAVuvUy9s8McwevakA3GCabq3tVrtc"
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
