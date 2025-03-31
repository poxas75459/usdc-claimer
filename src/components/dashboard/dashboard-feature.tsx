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
    "T7sQXdvfo9ZMT1Ju583r9AP5zmqTWGc4U4krSBR9x9S8djfTLnCwRHqwxrVjngmBzVRemX3QsKXEEvVguPouhJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZqqDufRM31dL684UHCnZkFoF41CDMVjBiveT4a6XUJyL462t6EEQ2wS6mNwqDLkp4Bj8voqBCVK3HcJTV8Yh67",
  "key1": "aCYqWt4hxB1zZSoRVtnVn6P7D7Mt6gzhaeVy2RLqhCzX5tqttnGi6WaB3jseNuWT4qeQ2cYKLfGfpa48gzddpF6",
  "key2": "5EAa49kceFGvY4P3eWq2PWTjDYFNP6z35tdqyfA6BrxEVHy5513VBvraUMLysk4VNBfS5P7y9Hgb9sbzM5ay8FWD",
  "key3": "4GAveaRLSjg5PHqpvUJNus9zZCGuDqbwXgtW4QM4DhniWs3ysy5u5GSZee8dpnuJvQZYazvM4UR264hnCkXJ4oYu",
  "key4": "5kRUaEkQWwnck4amZ7bd6u6F98NEUDMnJBU25ErNpzYN1YLXr4kHUpM6Uj2stYnr9YrCEm9PjrtRxEvGivm1y5Xd",
  "key5": "3CQ6MvdiW1BPzbP1T6hWWLnJExUieLzGbvJCAWH21yYRUv6irghxR7y7WXmb1RAxff2pDQV26kaKQiAdum3kzP6r",
  "key6": "4Z3UzgeowKycJk7jDE28euqus3ytCJUQmme2q1RFwJo3XfmRLTBfj9hzVXxRWUTgzcQQMdC4KVfMJxFjEAZ8745R",
  "key7": "2AW2jc4TcVqDvWEnZdcaA8MRTASuxaYYBEuXmNDiCynqnkYHB1VSiSeWeYEePNwyCgdJPwcCokjxf7trJEfecE37",
  "key8": "3fzscpko6Y5fU9tcGPRaMs8xQFqDUcemrTY8nDb6RYMAs1sqXHDQs8YmPkegpG5dCnEZKhvvhSYJdpp1ayM5xWq8",
  "key9": "5BYW91Ww4LfkB8VnrADZw4WodqwmxrbJ2wHY764548ec3QSb5nQwTALFWk63kZDLjErk8UhrHYQvj9R6zb9ixSDG",
  "key10": "4vdUoePkVntaCPZT31PL5SCugb3tp22iCLKkti7mr3wsjVb2vzfgJMBaimzWeexZHgWkzowZmZP8ZWbx82WywPhm",
  "key11": "2fL5YsudPbtEusJA1EAsMVDWZmQvXw1TQuczRxcYQPW5D6J3n5FYH8UpAHJyhLL5VcMwf5kNvQvES2qL9D3zQ3DB",
  "key12": "4ZfCVs7KHbYvE5XS9EZPcFQecnwKRme1WrikAtYLWdcccGnaAhoUzTDPASDU4eFdYei16aGmQEto79DdXFmrXPUz",
  "key13": "2CuEFn1AperLHUHQ6AbruCJUb6UDJ6dDZPqTK47BXxySLs9m57JYHPprkPdrmsDop4EW9yBccA3tVg6HVNEJQFnQ",
  "key14": "38t3HCBwMPLhJ78mH58LdweSRRtABrtxDze5XpzYVegmPfRLbHkkxZAextm7LpjybbwYJ9rthP4TgEEGwW13qGMa",
  "key15": "3teyqN1UgL8uXwGsY5c98A5X4gdXfHPPhS9c6sN2gF2Sm1fiTXwc39KfTTF7q9hLM8YXtXCQwxjabHtSLiyYoyEt",
  "key16": "2NmS9a8dYFrhDbCtnWHSpafwTvs9yTVBvLFjKafFkeVKJFzEMSYVPW4F2CbVCxQU5Ms9A21dc3tnspzwReEyK1jj",
  "key17": "3E8nByeS9xNXwozczf6JxGM2KoBLa5EUX3H1LAfrHD2RZJTf8EE9aBTbwbwUHq5FpDvGaXWpmQNbab4RBerzT4ay",
  "key18": "3fiBK3QbW8Ms6Ww7t92gQF48wyXV8bgNt4mpvV2zqYWtPeJpcTyGTVFY4mcgYWsDKHMFYgQjhypeceJjiQzC8bic",
  "key19": "2dhKdBSHgZeGcNmJLNcH883rTCaLVkdfMWYg9iDPnjvnCaaJLfua7AKvZ1Yhk3PDGwaAw8DWDu5pjuNKm7JSoEKA",
  "key20": "265oYH33hhyJS9ca7QCGNyxZaUWzhSvzY6WQ7JHf4iwGgpitEHXheyNMiTiLHH2oee5Pdqo5HWpAir7ed4nHTDGe",
  "key21": "AmM3ePtESUv5QnRYFWqJV7G8hx5hNCspVA97YiNae6qq78bARLeLU392n2An6aTRhfsWm72Z4oYznhzhwAo8949",
  "key22": "33QQ6wPrR7DPBQ8C4wwCSwM8HEUay8MVT6RzJfiojpHkcv1RU3n8ubRWfvhwfd5RVmxXebi6Dnf6Dn2684vgKtcq",
  "key23": "5VaHZaXDGKRz2QoMLUENAiVPPSWe8JiNvX8y3BPjGLXEZ4TiwcNWTbScfp8JiGnTwb2zAZw1W2R5frTNtWhnedjg",
  "key24": "5sZ6juvfMX44362Y3fEBmKCxVPPpbcdd5peyfn84sJJkgvDHmxD6FLNXCJieNS7auE3TYBuwRsrGrytTk1nWbNB3",
  "key25": "515spqYQXMFBNWqDG1pUrLNW1WY7FqtKLvnKcFhB2xeTRmzoE51uxPEmf44JG6k2sFu57ogBw881mtmD3UsQeLRc",
  "key26": "23HvZRkqb6ePZYyYXAPF8Yy67CuuT5SKhHYe7Stgu7nBN6jgwsScEvh1S19bX4rspb53nPigVaaSqizXHgkSNShd"
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
