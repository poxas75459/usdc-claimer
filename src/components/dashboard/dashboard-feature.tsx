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
    "3enYC7fFKKfCMWFJDneUokHz7TwuMccNhWqpGZkqsAAwL4r9VjDZDqAV2r1mkp4CZvwoMo5wcfh1im3pyyYibGbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUucKx5fQCMt731ZZgTS9TNrHFEUJ2KMj858pX93RdumvZDWE72ioSpyMc6YDohp6VY4Ea2wjU1gLr2fdRkqRJj",
  "key1": "RC2Q9zCLKpsWiGnMXXznZKfPbLzGyHKKzFyDUw5WL2EvbDYXZsp5KkYEbbvFpHtMi8kmNiLztQxNr7cBuG3WA2p",
  "key2": "2JaqzY56a38APPRsoBabm8vt4kiAGTQVK7Dp6Uo8dEA2sCdRzetUjPVkD28VgfYjMv8uTzTrKLEVTNMJFjjgkWzF",
  "key3": "Re2TCUUXMLgjwCguS7QNvC3g6rB42rMpVUV3mjYfoZvkbBGb6Vh8fF23iUGKYdqfQXjdVuybSFeKScqv4VwTif3",
  "key4": "5McCCpz2M4oydPNP2RQsjWUnNpQNGH9PaTQwj5NC4CoJbPYYnBU3cqEer9wqmXwf6mzzy3beqdYNr2qt9n1XxaHM",
  "key5": "4zExZ5AXCPhHetkUpwWKa44KHM9gdeuem8Tp5qLB9cxCHCiSwbXhWoYuMco3GDcuCwEjJcpGyePLBxSpH1Q7vrHK",
  "key6": "aD9nUHtWqVfQuxD1RkRTpiK7RavdWjMjaaXsFLvXSSpAnnFbRBVHwqrNuvDbVPdwvTidCDr4n7iozzPLt3NZKJk",
  "key7": "4ophHK2G7FbvSnyLzNfnGy85QbSXi9tHXBLRfgr1FnRTP7fFkXQMkDj1BU8PsA3LnDRcgiap3CbWdhY4LbM2Vcku",
  "key8": "2Jsk6tKY5gyDp3ELHKUKKR16a2xXVq6uarZc5t2dd1QnjVktDXMSio7RZkJgzGECRpNwbYQ58FpnbtgQamKQC3Hy",
  "key9": "2CVGE5yKCEQVbnxz3UgKWUQ4Np1dkyabGKnqU16B37MfCtvckwB1ZZrzxd2P4pw4x1na994nXcaGaVjA5GeCteAB",
  "key10": "53U6gnAb7T8VQf8B4a1Uvsf1UGALtkzqNH43dGmbXHs6Nb3MCpxyPQThZyo7kFya8hnTg4kc2R5Qfs28YfnPSSjj",
  "key11": "42J5bavLe1Qi2mPS43kfRvc6eJBab1TjMG7U8fpnQhR3iRUbVX99EjXXvcoT8qe5B6JAzQPomtnKULdeFGQhFZXQ",
  "key12": "4k3B9gQsaa2gD1bU3YxRzW85mUUKtjTpVeK1LN4UKpJYYUwDunzwD3M3kH1PmhVVU2qASC3dV9oJauMk5dddKEG7",
  "key13": "Yh487JP3nmacWmyMYEC633z2TAzCunSkwz8BAztQK941JnC5ZxtWwmosSrJF7mpawjhyrz5gZ4EsyPT6vccmTaL",
  "key14": "4RJ5KGdswPT9JMvgHpxzQwM1cb6DpRrMH8T3qNd4KpNSySGqg1GY9BonvYSJag6mYGuA6BsM5vZPrx6Ka1h46q5B",
  "key15": "5ZzJFWNADChwucyAf7P8XDRLVftLUK4ucUJUirkF5k2m9x79rpYQfXMaZWriwNH269rsvyTuY8Fox57wYKohpcxk",
  "key16": "3yB3HCPkvMr9Pc1wsbhzpgypKF1snkWLEvaaHbTtrnN47i3cgh47AaaCBewsgqZvzwXSYHFBfDhR2FY7FYbbM3Wy",
  "key17": "5kLLZUtH2c1NbkpVdox9dcMHtL4J8p8MJEhYecRBGSXyWgvS62rvxhxahevHfQfAngn2geXp8ymR4HKuMpqSEBv4",
  "key18": "SKnJ8CTW5PqSEDA8u2E7CfREHLXsaWPXGUcCXnV71m7eKpBs8zVPYjtDJvS7DTQjNbTvH6iGC9d7SZTJZMKPCe6",
  "key19": "M7gQPCFKCGYPfAXBpTAiAqxu5UGeYNdFLhQBfT1oaZhcTLo2xGuHr4RBSU3AGCP4uFteToToW243C7iERC3G9Dg",
  "key20": "61X6hX1UVUxxZ7JiCjDsdj2Ponzne8doi67qTNq5mKBJTQdNPfv6bEWFFxQuskU5XLTtt7q7EmJXQfawg9GZn1Jc",
  "key21": "5EPHNXBRBGqyJWWFU8HQ2Xpmxme7r7sT9bk2UQUaBPdKA53jstTnmB51eSwb8ZJ2efThuRkQNVzTpAsucHLaUVnp",
  "key22": "5orYdM4RyBEFpTC6CeV2WCTbcnGubU8b4LWVT19xeF64VHurnBw5N32BnCLnDV1w6heftJ9TZybqpL4fSM29TzEx",
  "key23": "3PieeLPqn8z3brGv1ggbfxztaaxKJ5gvjRxaRjXgt5zX9HjZd8H4wyroHAPz4i4urfMS7MRoKgqaKXbAgDbdY4e2",
  "key24": "2q1LBdBPSzQZq5dPeVU3Yk6tAaekb4b9qkD5UXnApe7JdH2sgubDCeQtFf1RpBbeTQGwwd73DzzPHbZVofDERnN9",
  "key25": "43zABRLRsrG4cpRBCTAnXypQ3gX62bqbXyiRGPcr1ShtEHi4yM4nxiCr29BuXyRs7xX8wXgQTT997i8orviCMR2T",
  "key26": "4oD2RvLEP9MRKCeoKTcbBDYk9aYq5rmTiwN6oAD89NP6cQo5NQsecQkswxhX7eiRH9yo7BJiNzahF17qfmizLbZ8"
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
