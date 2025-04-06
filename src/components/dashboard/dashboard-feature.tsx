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
    "5LCsjZjqkDSMj7QmZ38VuR5JJDvTJJfiTq7xMWr3Pii5TeNtGqAQAKpk7EcMEK1KZYedWMNcJ21ukVq6yih4vZZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u32DtaEgmAz6qXem4LGpLwLCFXFJCZSRDuirDUeMszZiHeVcs8x8CZehqu4cR4vKvK9As4SrXtrMExrfqb2JziT",
  "key1": "dP5AWrC5Dy59iHVRJMGwYa4EpBVAYoUTLhwYyfJcYDSgERWJfMjnBaLaG9GnDE7ahvk4jgXwehJapcftpfgHbjn",
  "key2": "4wSFzDdtrfc5noHYXcP6yRqTyzgWuwUjj8aGxZYxi1t5MXUmVAtwwLdDPzZT1QT7vSJPv2hQGaArK3xfUkAG7rkC",
  "key3": "62fASNHQrKddaTsZLbusXkFS34qLzuc9GfaRhRTwnDZiGsjMQ8hx92i6dzZcVtBCtkbbG1CxHNmZNjVKMZFcbFqG",
  "key4": "2E6qx1uVFqw5dqaHrFb9hUycSPW4U5eY5fnUvYRrme5kRNRWPp5JvxdbxaX5vaRH7yVK97as4rr5YPBjUm14pkCn",
  "key5": "3Z8xdBytsM2agNuTvmxEWZCZkVJXiUn8TeHZQpa99tMAufHVdPGCCtYZwbsfXXSZMmsaHk5n23oKbfa93GMrM6Va",
  "key6": "4nU12Ukd8EDKHzVj6qHe8b7PSoCZXdpYc7rhwiw33sWQXVAg5GLgpqt2CVNrRCXHnj6WXvBmtzeboFEhpfwKcVQX",
  "key7": "31Tru66LTvJ231nvM9GoPZjPvmAjyZTAjr9EK22WTbtwXHK6QdYXKjmzsHLYHWwWr9whpkiwyqPZJi4DocZqJRt8",
  "key8": "UkyBb9usyLCfZAhJV6pNtUuLASs1skqR3ttUFmqT6aD2Gmx7a7QzZ2kMCZ1MmTGQ6nsDdvygSEL88J3iAswBCU7",
  "key9": "5Fi4QWs2GKGLc57L7V9DAmZFaP9BXcAcioiJq8rW8czL5rcwxHx8nNocQPUKtUf8MSTwBNzgfBNN1n8f9xFScGBm",
  "key10": "tivaz2ZWG563K5s5L2cesNoohQ3NBvLzre5tSrhJPL9oMYqbr1q2Heoqe1ugj3RbZiz6W85HAfZ5FzKx3Uvuby1",
  "key11": "ZGP8zCMVcAcRzuiJcYL27TB5VFsHVCcNWtt7MkT8ZP6ZNdbjn9eUASFw7i8TVnHwLCKytGs29rfWqkCdgUZyytX",
  "key12": "2PXf2N2riYTYAZg9FpVpyYU8xRgi7KZJvvTDEW7Gxzh95V2A1qXULffo9cvwDiDDxVG3cNQxs5YVkJc1L6g2Nmw",
  "key13": "5ML1NU5s6GKmgX7f6z3UFC2Sr2ymndw8HWkWHbKYb228BfYq92wKYZrpcrGqiizXpqWwU362mxcjZEFuEpq8rHKa",
  "key14": "1QFZPeYiq8NdhU4c5QjS2JUFXQdtWe8hYZttTF9mDMAPhg8EJZeMzriuHwGPN8Dq1w8auHJSfj3ApL4SUNXJQw8",
  "key15": "5FHf7v81u1wUBdY5B9nEfF8NH8s3fYsAgiX2AEqowy8mM99pRUUDRiufVyXBPMQD16mN3BT9DU6tzPJDqtBbVMty",
  "key16": "2FxW5LHGLG9osTvzixvMgXQyHhJeXMhxQRvPSHSXTtCypjUDodtFXZuY4qs5g4YxBJ85GLUyHMoW4BZiSW6hyMX5",
  "key17": "4qgYb7JMVojKMmsgVyFa6HPqrKA4rVSpJkfzHNSkYGig9SUzEYSjyKzhG4JX1MfMhAN3byo12Z7vMHAPbehYxFtV",
  "key18": "GXSAUxbGTuwbAYz82hFfNqs2UZnTZu2TcgvTLp72jbxRfHCJQGgooUUpJE3ZQeVuWhLB5KFGFmrwKv6w3Kq85BT",
  "key19": "2wxwwHH31aGfS5j5sWw1Sgnhkb3cefhchqFzG1qfte8xmcqiPVv63M15ECWpuw2DnfX4KCUtjr1z4BdJrc6KZXbX",
  "key20": "7BCeSnh2w1oKJnV7wcPo46o6pSHfuy5adCqiNTmchxgcNTZRdtiBSoNk765F29kzPzthmqr9Mr6qE6KxoXi5CUf",
  "key21": "5s191Tyembt1jD5RZvCiTZfobDdypvkepnuJoGFdTHDEsFRvXnsp6LArrdN1zwr6RxkNb85XpNexJDNfBUnsfc8Y",
  "key22": "5tz9VmA8kp7dYR8mWDJFGM7YABLmkvunrzt73xTi3ciY8qLVZrqCkmi7kNnYYg32GhWQsu8sVvCJhPmvEVaJRVxo",
  "key23": "inRqjxQayJYBnJdr7rPjytwgeaL598XDSGsmZmYTC4MidNXpyWoT2ZChanAJJqS2RYkBi6KWSJXvY9vPzzkwjLh",
  "key24": "2ardQmBL6L3yh4dJo7wgUPDGKDshbh6TM6ecyEmw2H9g7gnpHSw5DcYD7QKjSC14o9PL4StJqip3URxT5TQ2KGwD",
  "key25": "2qNeazLJkyVc6Et5yLLAC9uvRums2BpPF1uwK7Pcg5h6F1JNA7JN4z3XpwrpDEtykhJ9HfSJp6v5VpMah8kNaAq9",
  "key26": "fn885uQAY4XNPHzfmnQwpGpsv9iw8aXmwVK7tPq1ax3VsZG7cBR7s3SVRNXzn8PgagxZSDqLkr37hWw2ktjFQcN",
  "key27": "HhXwhM9ettezX8WWW6e2WnaWrLMdPWHbziqQVqk1kGG2E3X8vfSxTCkzrm4ZrjUXtxA5EkWALTERWZoPFszJS1B",
  "key28": "2QhPqta6YGCfiJUB1uMUwQG9DrSMmL1JZXsRpWaqwdDBfX955QZBSLjQ9iKgG1w1CQdcXKfvXpB41N2oRmPagbwU",
  "key29": "51HwtEjf7TC3iDePWK7p8oAQKTH9fTsUoEbXSKTcXaLcSWfo5kK4Fu2tNKjjBUF4KWKb5UxgJepTYgbbsaALNrAJ",
  "key30": "sa1XCKiaHFzkFDPMpRzEWpgTQhx8Bff1TnnGJgYwF3r3fsAtGzdPp3YMAQuupcBbcJF55QkYfqrVseDS2JUCbF2",
  "key31": "2pKZvWA2q3tFSS1NKUXrGmmjgbh9ZwHK3Ep22rqVHsxGsZppRa6jAXLxNcgmLD7pAoGfR2UJeTakiyJiP7m1cCgf",
  "key32": "4P4CKfU1kEYrtqw69qbxVGnZpJSZyRLbB2BhUdhjbJ7MifjQnnyMJXRK1mmGDEF89QcL3wHUWr5sgZN1PSfXyHrF",
  "key33": "2wu57fJCBeAnQ8v7ZJ3crQfbJ2EJmCeuY85WXT957tsrGvJGgHXM8MZM5DTci6NwGFkZgxyh5PPRMkTqbA7mLkfe",
  "key34": "DcWK6T5WzbK8LH6kYbMeWGNPDGW9mAfFf3CkiKvDoviQHUhcFcdpabvPf1M443Aq55sPGphA1GHTAFrWaWW67UD",
  "key35": "4S2dvYe6Nj393FuCxgwCnhjbA7vsnmgEB19wgEMJMubjJGLCUVcnc1LGMk9cXi8UcEcqMHCunR6btCRrq8b1Mvmx",
  "key36": "5DEVSAk39qgUKJh6x6wA3Re3a3nDQf6T7tpAjFQzZs7kpVRVQTpwqvsPAESySbek67t2tFCADxG5hdsdN2LZ16Bx",
  "key37": "2MEg8aYqBRr9qQXueZVJhuiBb92Ht9Wc36CJcNkvswDxvc6Vbz8JtBMXm6XSyytRMP3VEXMMjsutKryTaZ4shWA3"
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
