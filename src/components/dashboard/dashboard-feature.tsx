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
    "4qRxbHTYNEZH8TGX2fpfNLUdqYpQzCK6pzoKBmaF2DPobR5jMZmr4ZgVAD7Puyfa1RQ5nYSeMth1bj3CMbK3U4Ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55uPXLGEnHR6QZ9HyEHaQj4FndAfoxkhiL9r7PejRrWJZvsoMHLHq6QpdAaGuE3JNUqVukKHv2G2PgPEJ7ndFGES",
  "key1": "5SE7K8JHE1dTrWfFVFoinZE2RPfT3S3b8ES1QpUnSYQog6mTtT2MzNdg9KStTAbtvzAvfk7A2HxENSHQH4GqHHoy",
  "key2": "9A9MCmnjcfTuoWeyYS6MY4rRhQ5n1yamvMa5Rbs9ZLWGB2EQyK5dU1BsvVn7Q7FWnEvFfc2WMQgzpmLsvaHn2yT",
  "key3": "4okD2UBq5VeLjbpdMng2Vt4ppvMNL2NyTmXfVpuY5hJRdnicBNRApGuxLRus1pP6B3rgJZErWfMML8BzVVbhLn5T",
  "key4": "2vNRbKnUzYXMGhmEia6psAk92rWYLtMPBwAgSCjZbGA1wyShDgiRhLjJyopHD2vJNWKEcWQYq7gXDj4d3vTVWZwK",
  "key5": "48v141iUS68D2RapjEV4RUcPfvpmSgLwRUMAxFrCah3ff8ak5ZqpcCCXQSHQtESs2gMkUaRnGwgfKBZcySQ1w1r6",
  "key6": "46nc74wzWq6XWngvKb1ZJyDudE8kwWE2JrZcNgCz7tCnsS7wwkNQwgJFRKop4Kzpf7PTZRbVJwY6cnLG8vV41G3H",
  "key7": "21MKYZeEkwdTj6aXPK7hfdwT1Wa4pcdXxg8UihhhtUq9scuhPV2jPXHKaWAHJXma5i5sWAA3Utz68jMyWWbeRgmZ",
  "key8": "5k5frmx9EPunuqAHdrMJszpiCFdwM99DkPb8FFuBT7vEX87th8guTSyGmuS5iVLUd8PKo5UFCMmTaFuwiohRC8Z7",
  "key9": "239GKEfpiWqEVPhgLbtGagQvJhUJFpFQmv6gzkxhFcQqkKQb6ZnJwDQatW2GwNP1RVrsDdjJBpzBTBBFN4ZSbrqE",
  "key10": "dyDuUgnSiumBxvUs3DpFGMV31kZsqeg7RZTU1A23Tf18aabUtQCFAiHRY2hr2vfcb3J26ET2o7rPfCjw776ouxe",
  "key11": "49Za1rdi2aEhUTqHAbNrTsurRXtLNgoGyEp4p4omeX8P3ohcuBftVtscHadNrHXvgdo3GgW8k2WkrP5tWeu1Hzn9",
  "key12": "4yngoKBLCcEFv91q26jhkFVR32smQdZnVSB4n1t5bdpwN8hwvQgWBgYVJD6JQxCtFYHKXD6cQekp1fSX5arATwFe",
  "key13": "3L635jURgCmCRbSzoBEbW4XvsTQEzigQjP4bZ1zSufopDymCoGVyV4XTRYArpGSQXqe8V7AVHb8wceReu6HXkyfs",
  "key14": "52m4frHjKpSe3BRejhP27VVwkuhQr2WZuiq7G3y5ALkf7FP6jE2Mzb3Hv9UcWLcjAz6WBNExVd1RoCix375HLudo",
  "key15": "b4wqTZa7Nh1Wr2hnYpa2oZqkJYP9mnqf7BvqZzWH3QBuxxFBboMnwCL4xBARhXByS5Ny8ojN12Zkft58yCqy6So",
  "key16": "4d9NF7H3AyHRGYCHUq2StCmvc9XaegCAxmE8ouf73juoJRZ9qkHZMJSoey2YJGFExE4bUYwbLkqgbPkwPCTDS1Zn",
  "key17": "61hAB4yWyNQAZcNpptHpexxjYEcEXw7rctsRuMmqeaoEg4TT8fd7JkLTrdhmFkKq7TP3hcSLWrVrzXy5KvwY1ZWm",
  "key18": "4k3vpisF7gkWaZmChfjoWdpxM12NKp7GrNtXjKZZYjGXsxpP81tkGxQs12pS3yMTG3rUQmnP4sCM26T9MQx44jz9",
  "key19": "2MY7bYy2dBRJTX243PVuFkUiW85ZjLeXsd5wctKT2fXdPj5vdEWvVWqsJNEvTzDU5gzJ1jeh3hiXG3PBb34FAhxp",
  "key20": "2F3YUbt43wFnoE9T5AZkxZNXTFMhm9KaQKgqrSyWX99owCavfjuXNQ7SFhr5fHg5KB5eC4dv9Qvwvw61i4EnUiRF",
  "key21": "wVg3niCUVfdgGSJ8mZ3VqXFcosDT39sqn5PBFo7CWDnWGTJCwmqcfkd2DkhouPNz4xS9t2XhJ3nDTuyrYqZVF5r",
  "key22": "BBkUiKxpG22WzrJVPrWoA1QVhTyJD3pgY14kjHycdMbrsg3MT3o3NLD6wZATs6TQtog5dep4g6Pcb17vsu23e6N",
  "key23": "3zCXw8yc2droGMBNVrhBGKZD6isJ9hrHPD9Qu8BznoGDBbjibQdLPZ5ZtDmTPWYXqDwiGv6QT5NZyiFLhcF7wn3y",
  "key24": "3mRDJRhQWjNyPJUhRFDjxebQjvXWamupeNJQHqyTCs8n4W63mWcjcUjmNUEi9s6h16q7ei5Q16C6PyRXBZPhk3Zr",
  "key25": "4fRe1ekkGpa5e3XYCBZCL6mP7xh7sXCN7ptx99ow9wGsDERZ1BPNwYgFFLjvF6CqD6zyNRdGDwDWPbuXhj1g1sqP",
  "key26": "2WCihoJCGwnCnEbM5KfzbUrFhwsA2dgGJeRQQ8xbMtHxskjWNTJTFBHtGLBuvrL2yUxWyztdoVETF2QEC8oGTPE8",
  "key27": "4B1Gh72Zagy4pe4Fyvija3o1QHcCCXn6Tbve42nzdNUX4Ev8osRHL2dajaLfFHWT1GkMumZanonZv1Fcm8xT28gv",
  "key28": "3mhA8qVJVTanADkoBrs1cANzdxpRN45zNQEP9HFKnZYGqogWsKQg2j7XjpeLbH3drHToGEZ8L2yq1GoDTF4KbRUR",
  "key29": "XZ1JkGkmF2Y3DZmxuctbJEMNN9A6cLtWEPxn5fUEbN7UPqKB5rzWazjP7aSZMMkjspN9RJaJmc6LqrTccGXd59r"
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
