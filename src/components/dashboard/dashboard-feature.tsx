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
    "4uBTQPW6ATygwaJXpQyQwh8mY6uNMQxLFLwehoijEovdpfBYVfJQ8n7LDpbZawQwepvepQDyDpGmBNgquvpUfEv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPZ7hNivvgSvfNpgfgKUv6YgM7sbgGJsvfkKRTetYaxZjxqw6juxcwVLcozw89MhGEXrP4S3CAoEh2qyPChqnFs",
  "key1": "29myD5F4cDAzUFjH1XVAUiBRCXfL2e9vW18Eo5ZVqeqKsTKWWxpAb2SaEpd8DZS3h7XcRcndT8Vhhc4CyokymyLD",
  "key2": "4iM83dbS3kFA2FNpSjERcCRRuTTcWnPGb5Vy9d8FxCsRNN7vxv5y8NaB82d7rW8UCkxouXDguBqiZvkAN5h6GKzJ",
  "key3": "5y6fgtAf9K23W5tJJdee9EYCakZgyhGQsWzpCbKWQg2bNWnW5FPQQUMUEF679rp9xYWqS9RbkniC711ETh2Vewdj",
  "key4": "34nARBFmWae3w8i9Efy5KKP7tJgcLPQe4iZmi7tDeiCGDVZbYbkVXmATRyDkrpJmEsy2GUK6cj6og9kmtHosLNnr",
  "key5": "67mEGnKoawPu8vDVeYo33KaWt191VVp4qhcAE6jNzfQEAjEpJ6bhrE6kNCEyPg7S6N7SDVoLEJte2qbsYsJT2qFD",
  "key6": "5nxhTh7aDFQezLVvoABGXmnipiAgsxXQzU1anBthqWbG4HNLrn7AkURAWQtmf8Es5gARB2r4qjHdQ32eGk8oVrd",
  "key7": "67B4ZmPZg612wZKTM535X7TZSk5yLf1ppF53s9xV8igZvvuyAtMipJjAv43TxkaNv8fGU3riKh43oHZXyf71HXcM",
  "key8": "323GqH7A7b32g5D8V2HTEqozqcUcYjZ6VfSPrX22iSq9PzYCd1693QoGb7SVYTWKLT1t7PDxMPm8m1DAeS9y94LT",
  "key9": "hpYoDXLAhtFfizSJjKj3rPjeVCVtj4136sgVz79txeaNuCL48vgBwTgFhRFg87GFkqnBiU4mbZMyDp1k3SJuPiu",
  "key10": "59Vtg8pPp1xKxaYKq6VTDu5LzS2osw5vir9viSCgKERPd1qUAq7JRtYhCR7pKXkK9psBfJ4RwfmWagXsXFSwDYXj",
  "key11": "61td5gtgKetfoEcbGcKEL7qMXcGKpg5hqeAqEGPHXrBS33mbZJ69f9jQyp5RtPRKbKzoDsixZ7biaTaN2yEhGoWt",
  "key12": "61zdZfDrJ2rCQ6mLHK4TQeubUZaBs8mU1ApDtfyEy82jqinXSMYgqgDFx1YhFBBvs3PpmZiUUDq6T3RvJNT1qyF6",
  "key13": "2hZg533RsCSqxeJ1tQ3bVAt8pFqQdML7hpFRiHKWtxSLfSD3JBJKD3PDGEKQ6qf1UKEMfsHjEFTnSyizZq69JGZo",
  "key14": "5pEypfKqCferoF461mEKsA2DKRVjh1FUGUDiDCB1WS9G8f6w9SFU33Lff32ZojVXhVwBh5fdiCejhGdJmMkAyt41",
  "key15": "svFRS5ppAbEE3z26BKuPAgRhx5H4SjBHwRf9E8sFdMcoKGjqAW8xogopPaiuv7ewnr9h8LbHR8T1Yp9ndrQPYJr",
  "key16": "2AaGfQcLH9M6kmd7wjgTDRh8oAaVMqTDLue7V8uDtsdwRv1buZhY6rgN419SUyPUqcHKHTAErQZYKnhUQ6Ri7EoA",
  "key17": "5tm7QZmQe4KjRjMm3CfdHWye9QB5HDS5Vj2Y2N41vhE5wNDDSFLTQkDGKaWHWam5znwgJbG2r1Qaxq9F1f8LpNp2",
  "key18": "3C2AAmrLDHhaqL4rw4jH7XVGTPLQs8s2LzeGXg5t8RY7wKwKs7WTZvunD7BRU2tZ51k8DnhEFP9a9WvDjPDLePej",
  "key19": "4rmrrPhoBPBrNk3x9FuzNRY5idKb3JT8TaPujuRXGPME5VB1QqsEXVURHYXi36Rju2n4Fvx3ykwS7cQB8QAP6ceu",
  "key20": "67JChi5CGyxFccveiHeEDJ395dfr4FbPbhzfeFdaEwmwJXSjXJcLpLXULBvQ19Y7SVhWPqhsqg6sf9jkAGK2m8YK",
  "key21": "4gfH7oryK7aHrJGkK8ZRM7zx3bKmuuJhp9vz9GvAec1qVBMABYxRCu92zbk4WafRRTzqAnH3hetLBqwR74qznBMj",
  "key22": "5YXjT63QkgfZHMp4jf2SezfJw9XTwtFXowUVybR3zZZ5pEAVxxhGmuBrJbLRBHq4apySmgMyi1DGSSwk83HgFauN",
  "key23": "Tm9tquhytTTxc63yCaf8a1jwtQyhNq7hNxR5kpnrsCDG7nf32fPtAUQCxmvHncUNSnPjfQEmrkoL1foGjmNqP43",
  "key24": "25fZhJvE34haejKX6hsMoVnF7AvD6wdQQraGjDhUuspLi1LFQKifo7h613kuZ2xwPhVZhovpAwahyiDCeABcBPfu",
  "key25": "5yxDbEEdvQdfad1XrQCvDazjMwJtc299ZRMLmU2m9hyXnhdeLnT3reueqsCaAKU3CpKRTu1aowidpEhCCjAu9pMR",
  "key26": "VzMfju6pk2o4vjqfAcGJXCuhZ8KV3i7DEuGUHuCrrFgG7SbmShzPdhyW1339V8G7WHHyeChVvzzeH87kuM33mj4"
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
