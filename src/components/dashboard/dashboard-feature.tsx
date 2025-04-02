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
    "3RfxrXRxHAad6sicHLiHysHApjVdBAVWDqjQihABxMjxz6dLoM9RwY89ubH9ZvaKfxwHtEeMKabagB4LbrYfUG2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBTz5VAs7BQe1g2bwZCEJq9CMzG46UWGgLGDcTHCVMd5SYnyEu63CFGQKa1T5jFCGn6XatSZrurWCyjdKwn31Tu",
  "key1": "3QztYcw2X8zF2vQDnWjuLJkTutaTjnjKdggygac9ucPwU3GHiFBXdojBsaiPczWDjfZdYracTL24RmnT1d82MC85",
  "key2": "44anFQXubTvAGAC1M9RNrrTT3mDEXm5oF3wSmfduEVSRBFcmNmxaBoCc5CdkKkX9vJ6JX2nPiWKKVjYGCk6RKs9h",
  "key3": "411JU5kxDxQ5Bb1v95crFpoA79RxDCYrsUZhPzMXSWAPFeNuVWdT6MmeBSo82NMoZjnGpngoGv7gV2cG6j1TENuu",
  "key4": "5Vu62GfCbWdtz71FTFVhHTV6d8Lye6NXpNQpTqaHQCiYgSNtPu9TACCdBMEjLWKhpLAtMj8xGF4Qx1hxeJ2j7QxA",
  "key5": "y9yGGbQSmziVtXig8hTWQRbCidfcjAKU3LZT59oGrPuEKvwxjmABicz4bRy8KaZNwdVHygDPt4rZmQU1wvbZVxb",
  "key6": "387pjho1pJVao5o2zsMstsbz7SmkSaSAuKAprCRY7fjW9bWhGVTsAVSwGc71wTTNCFQ9tKts9SxPSGJw74C6ysno",
  "key7": "2jfZBoMmtGi5DMZ1Us1gKsSUiY6wG7gJ2G2nVZEKvNCgQVB1Luu1k96LUmYdYiWiQHiq5gje6nYvw7ui9MTELBQe",
  "key8": "1LbozxgvkETkSUjZmxycEJu1pqn42A4QyubARo251KPGSrZnY3wEwy6uZVSb2BB8eiTSvnoFArzpkjqWr68t5kY",
  "key9": "2L6UWKPrc8GexwVttV7Uqj2DbJwMKf1wMsVLtqSU4dEhBbugB4NNmFM5R5NLueizXjR7Ljrgz89Jxpc7p2Ai3UiE",
  "key10": "3gjK8mUhFoAPNZthYZ2qv7JwB8qPLc2ZHefTkwyrgZnkkUyQxJGprLaBb9anx7P4AuZJWpBuLQ1G6UNSWBE37ty7",
  "key11": "cge4LDTr2fJTCC1BdkjNXzFCNNGEmF6Lor9q61yso6qKQCpioqrp2sjNfvypYghSC4LqK2B1e9Bt6L8DscnmHXo",
  "key12": "Z5XaEW1uLs65WRaXkUbSfmKweD9fVSh93PUg6cku8ioMPMcSHtmfXoUjtb29naCv4GeZLgS4cV1miAxyVWx7nmg",
  "key13": "2XSoGCdDbfFEtskCX8gXKmMcDHA8FPp94TnfRxkoqinzFW9aaH7LgdAv8tNaZRXYSkK5jzeFiLznxjZv3FbskiL9",
  "key14": "2CUYN4FP2qAbwPntBAvkhdafaSCNwVntEJdYrarsVHH1n5AFv8A97euSKmgLqtwZ33qJGnJQ8Li49gJX5oKCRP8X",
  "key15": "5UQZKBpLDTg1C5AVS9R6cg6qAhmJvG9sP9YQoWbeM4ffmjboy8LQY9HWmSNJP48hPsyNcMCD5PTwjAnYdUeEPNud",
  "key16": "3XeA25wNzbfAHEBtdyQ3ZHtQvnFJVHWBvBguK3EDkQA4b3AzVSY4jLJRB2BfSEMGwc2t3pHbFuezae9APXM6Jdga",
  "key17": "qKpvDhwRNZAeC3CARPDkPKpBnSEvajnbrAYrW72UPuuwAwgF3pErGMqhj6jJjuM5aWgJwmuhAVrzYd3uusNideL",
  "key18": "2peMnHhabdpSxudzdQNcx4MSCrmGdU7p48BNsTQXCnhZunVjcgsPopbfLGEANcvo3wME7Y1JWhjhAcJghVzSzV4t",
  "key19": "488LKuTyxg2V2fem6oax2QCvD6vRviEc6FTmbi8Q9VSqPQTB2kNMGuEad2Mq7GDx1pTmdpBxCBaeadiFBxsv9dwR",
  "key20": "Fi5PVbNth89fvfd2r7UY1RSAEo536HMiZEnPKaR8SfMK4xpLJzt1rJAfHhrfBSnGQShECcTQ7u3JdCpWwAyHFaY",
  "key21": "3JLpkyyGb2ruJfNWomYonGKsmbwbTygb21rxJWRQuKQPL1Zf9FFMZfufZHK955NDh5hjMn2ifnQ9ZFdgBhEewMts",
  "key22": "r8hqbbpSJXtvxBuPP1iyyeoFuQsyGkZphhGWtPvb5S1W32gn2yahztBeCoxzca8goaoiGSBdjLsGyCkw43PP1MU",
  "key23": "w2tjkVMUFA2bS5rb58bjt33orNRRXWyHNFXtAZZSRJUnxhrDHCEeWNZnVET3yyha3mk5ndH6AzE1VHAuXEtKQ7h",
  "key24": "3fvnZUHxjaUiR4VVnJz1YmVf5jVtw6EF2VzWy7mgfkcbuudeLXDYaDf9pmct5p2vcyWngDfSvAHqSbigrpF84Sbj",
  "key25": "39B8HETofpqox3zEJLbQmstdmjPQ5U7JXWrJ9h3eRZRHD2E26AKjVneLhLjTrkvsGs2JXieXSjgHDTZkvYHhUAV2",
  "key26": "4yUUE1qjjwT2GVkt1qBc8JcDCL5Hquij6N3cGXvpwhqtU66CQrGNZMZdWk6YsPtcS83JSEXBJWBvE3baMxDdaGCk"
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
