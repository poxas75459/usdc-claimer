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
    "4QriECGnsYELDynrH6kT8PzsXcg6MjLKgJn3aNTmuEUDhvQ1qoxHfTZSa4vT7wGAN4c3WN8AR3Jq5B7NF6sHTFgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sy4UQMkNfwo2gbKYg5HFNSWowV4vHKMRXTLLMsEKGKDL173W14GWYCeHkZvBhZqXJboqVheehqpUTr7h5smGhFE",
  "key1": "21qzAyNDvQVVcfH5wu7K3YCvpbAv6db5eyPgLLujK9dmKxcNSUFfj2jjQEGC7pc4GFwRVGQeEue6dLLxjDsn4keY",
  "key2": "C955n936qC1xdg6N9nwanosUHcis2yedimKe9Zhkp3HUPjqxD6RiFWzSZ7p83esEZBMdfGXen38t4dfdn2t5NTo",
  "key3": "4eBcXgx51uu1wxf9UgJWxbPc1Y7t1PJ3BMBnJPVXhwuPYeSq9TP7a7xWBvTWKDvSiLXvjP2B3QQV8BUuZfh1SgBx",
  "key4": "4K93i5JN5yQF6bqWCrxMK2tR6WdKiNdcVhPktfVwVPW785ndYVEKyrFDPSG4UA3M8wrQxCYqL2xbRogcYec3zWJN",
  "key5": "5mZGsCSLTvo5wJn33wu5eReAR34dcmTDSY9RDu4PRCRQRhhaLzZx8c7siP4MobxpZdMVwXRRAu17Ks8NRRm9Hvhh",
  "key6": "4mBbCNoLUobppnexzkqVoig9gUU6Rz1gJ99sxXKzQ5ZwyfeDUYRggSni9Tq4Cp48USh8xM6XaZ4r81EhZJCme4FC",
  "key7": "2AZ3NH3A3josyVkpASs4BXuVtJQZGc2rU2jnSU3wBRgdwj3vv99gFgSkLhb35gMyacorNC4hJB1prxGvEPvG18x",
  "key8": "4vEFoGugtnBRZf9gpbzNM1Bu5ESX4sAPSCj3EdXqcaniHY1wEKkm5eCUfFEpqDWzoQBgHiiv5FT8jAWvjQC4XZHS",
  "key9": "GievCMUAbUnM8n3JJ4dRRSbfdAcXE12i6uuwWttdHUt3MZiBYpUHXhhxjMy6uYqXxaKBLu1GtTtLPEr4GKsugiS",
  "key10": "3qbf2EuQTGzmgxkUPuDvZYmtVaUiK3TXhDkgCQVjazoqdTbn9o9tsdc5btwgQ8CxJE6qmbAJc2WFVaY8fom4uYJ",
  "key11": "5Dukk6G8XFn5fi55KWu3n2dMWr29mskLwnrVYWpPAXR5fcakJmaBj6k8E6G4fmaBYEyV5413iC2WsvVeqa5Rz4zX",
  "key12": "58gwCFenw9JKGFrg6o64utUeHha2qBXFQXDhE7Ygb6ewhw1vxwg91W8wSQzA1LQt7ZSM97bFPKWAefatFFhWhiQH",
  "key13": "2tQzHjiJYGmpot799hf3TKmALS3jpAnaBZLSeRnvLJYnaEG7u6Jj7xiZujHAJ6QKYqK3eze46hK6vvo6fFYnbP4H",
  "key14": "2563ZWNwE4Vhp6Ejux43BV4wknxwEmRPpHVAkVLdrNh5tZojHHiV6XgxuGZALEhpoxMHjAP5R59BFTVt22jwTk4o",
  "key15": "Zxr7AmxKcXeNs7JtX3pvuGMv5TZB6qSaDqTEmnHGciEH6wQ3QgeGUKvGtFrd6f5taTENoNKAjzgk4NujQVnGR3J",
  "key16": "5W9yeomB9xr8sNabtgTZ9TANCwTDDXv3vkcLMUxWg1b8mTFTq1Bp5nmcQcv37FyzNh4KBVCQ1QF2x4gX4uHa2Ztc",
  "key17": "5QY1TLuQ9xBvcDnW5EegoA5v1wRAn9oBKqxKA2T6mbGSXaYWt8HHwuqtEXuThCmhm5t8tTx6XjJuSfsxKUuciVjZ",
  "key18": "c9WRgT2BEcw8aJaKLvNomE5wFfUwXz7Lgu1nUvSwFMH56GvC5XVu5Ntd7ZFeJhVUnnd4Wnahq1mBMu9yoW7oSix",
  "key19": "28mK7yqT1M1q3x2HK9p4iJi3vCDarN4jABrY95CaxcVySVrXJsFTvoSBpLhe1JPVwoXzLF4Pw97YDqjCMuZrH9fZ",
  "key20": "21ByANwMbLHC6hCwjmCE553p2R8iCf7uYy2yKyed4uqeHeWB3GiqVps5zTspmB5rDAsLQCvGGnumkRZPYhEzSi7z",
  "key21": "5fAsDdTUa87MBspdL9ieBHSPAu74X8MpXDjtm4QGWbhPeSNB362DaWLsDSJFPP1Vss85jCkC5NJAq27TT4WYj4D1",
  "key22": "2U28XVCNLMzAi3NmcGR5ivardLfnAvgbp9hxEWbiMVdkcorJ6GX4dL8dfHBzxFkLmn11rNWYRFzLLw1TpS74YztP",
  "key23": "5hNtY8exzQFRPfgi5m7FDgXSXBsDiXzFZxeaKsVawQLZASSsNjctWKgdWjAfjUnzPxeB7zHoEuNkeYenXnNPqMs6",
  "key24": "55DeD8K2KG2rKaAJrg1ccGcGVbqU9rtCqVtEShHkB95HuKHHRvjGsiBeChbxvYD9eG6fSbUiMhSw6GYf1EBKZjfp",
  "key25": "3GiWywdV6v2sMqU5VyhqBz9g6xFM119p7EfkSqVk5V6MWXQH6fqE5X3x4jx3Wm1DLb5wic8ZqXkqsvbAK9qbQRxu"
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
