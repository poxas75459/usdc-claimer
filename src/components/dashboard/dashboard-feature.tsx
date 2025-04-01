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
    "3oXP1vZMheUdJhaTct1GgNJc2189V4EDidofAofpt3w7FZX6gS6YXiuQh2i5hVYBaCjPw2DrmyrZwQjVg2cDuCQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VRKo8hgg8ePAgUe3zDQ2K688gT8J8wpBkfFRRCiAYHixzsCqjqh6QAG1cUZ9EFY9xdCGv7DLMhd29duLywJdK6G",
  "key1": "26y4ojZKwxYFKMTRP4rP2FeKQDApofiFTkeM7hYqfs4RbHZGQ7SPv4bi67eVdDNyJLxKw3YZMNXJi3i89iT7VDhx",
  "key2": "xu8bLf8CXej4fPb2YHiPvgFCYBAXDUpBWWn3wfsnBnvb8MwGz2mo7uyS36ZMYfFNoNXSVnazBiXjq7h7hyY41tX",
  "key3": "3pYcPaN1LKK6WzChBjka7NW56RB5L2wSPsbxS9NUtGDpFViF7C8PFNXP9wLbsUwha8u9Y32SDT1Cc3UR7ZMjGsmg",
  "key4": "4Wz6PcSFC3aSjm55PuvMaqrjsJxkuvqCAMxciRs6WRAHsFPriQLqEZhaYjbQMniLgMj7B91kRZzUQX1NxWLYoVPM",
  "key5": "57gSf3yScJ1PkknokL8i7AqhkrEMGJwC8sACqnQ38HDGsmumFLoD4BnXYH7PCBso4CEyYD71i78skAnr8oQK8sCz",
  "key6": "4fEmCQwGRx1K7FjdfHELbXVNtPfdNA5r2BXtkBn59v8XztTN97CJEEV88qZFK5wJBQRstc28w4Yrh6HzTDVL6TEG",
  "key7": "2aRiz5XJ2aNMcUDisSRkBLpjxwGETYGFNBsx9YKfZUkwxhJTiE5QyoRzWnCCyX6Z8FSJwSRSJsh7CrsKtZRUnL2d",
  "key8": "5Jo4EWqZz8LAj46FucGTrhFS9nCmihTwYjyQDW8tbyPTjnMLmkwRSsLJazKSkJK4F9wNAJVrsSgG7Nydg2NdZ5qb",
  "key9": "4h2KfhJVe2fukjDSGqTJNkhQGNZh1sbQM4LTK8hqSZFLdCZPRg1Pf57TYF7A9qvfvLezu3qd8Lwrw481AQ9QRTfn",
  "key10": "4Djf2WPdx7WYCbXyRSau9f6Tri6WHsLXveSwuAg21W7M6vDggEsDRRQ42dvvB5SrbHibHkuoE7LcUw1C77PkYCai",
  "key11": "4cGRku4e2FwHpfQ2uGJUjeqvMUD2dDGCjUAf3V692rjAaK5u9YeJgxHd2YfPsRMtLKU1op8mQJfa9jqdqW1vwBYP",
  "key12": "N7ogQ2pXWZhZLqCXekStGziJPE7Um7xNUV3gXA6iLjrVzobCNoaXYjaiu5KAR52uMnNZnjMiBfDLfEUV3T3Dmqd",
  "key13": "3fpTnJRNjM6qAmwRTn1zSezqn1jN8Xhqdfg83DQXNmiqPFP2tFk5e9hVHNRxJ1YHztwmqsrSQhshLd4VKP7CKXUa",
  "key14": "5ZtagnnfNg6Dp2SQ1bSagMEwoMwJiq2ymHU336kaPftN5cc16iYS6sQ4LFPZt5z7HBbUnh9qdewQggk2SynxJo5C",
  "key15": "3gJKybCET2C4sAxJUGTNmUxRoHPZEYqMWgDSASMSZjpRU6rG3twR6dVGJKYiWoKxuKYWX6KW9cDUzJc8th45oRRj",
  "key16": "2Wf4cSqfJhixUCVHNp1ARhK79fYaU9SgrFxgfWyZiB4rhyqqUM7gQfEHseZeAwtNoJsjboiW6mJhVH6LcRp78u8U",
  "key17": "52ZYP4dnFP7BAmVFMtpSkEDZQAJ3anNyU4fMurK8joaKBTnbeFBuBEsYfAqgp33bisXRnZisHUSCX9ERWumw3TXd",
  "key18": "mKKDU3s6fzkWsPRt1gcD816wZHUmZsUAKDwod7YjdWsrPZqdhVE4eJF8K2bYHdSrpjn3xpevSasEBKSU827oZba",
  "key19": "eHcEztK7q1mt55HKeb5YNerMoqQRwBtuJCRvUp3ikehnJ1cETwLDCZFah3gKmmuKP9ksD2fGe1NQdfYTRoG1q16",
  "key20": "bJ9goG4tG5jNjejDnjZTebjYhJKqVoHVFXZw7dpfcTVfiKzyRYafkPV1sQSRjsqaJb255zpddACrWoxThthVgUH",
  "key21": "4nMdbqjfZKHAYgP2fcNVJMPXyai3Fpu1PHRBcaUHUp5t1ukQ2UVMQk2YUsrk7mBMyBD7pK4qHDBX1zqxoKq5SYGQ",
  "key22": "5uLTrTpoutcUcPbDK23ZhDCnxaZArpBpT8vW8bGozygyUq24P2FvDeXCQRg4nY8dyVbXNFWfu1Sck5trKNuK26NV",
  "key23": "4HJaYbby2CNpfMStPbNxx9hUHu9Zb8cjDbN6Keo8HcBvESYYx5MjRTwXNuWECCbKgKc34csfobYroQYdeV6EZfoT",
  "key24": "E1tvbVxZU8C8fEHh2vCqULvHVQ1VqaMbJ7CTGT2DEzcHcN4thM9SsYHzLY8HQS2BbEP66DYMuzfAgqpoHCxoVWU"
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
