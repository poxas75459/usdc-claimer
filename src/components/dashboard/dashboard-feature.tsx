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
    "Ggv2JFHiZHK2ugHvwwZLu1yzo6KAJFyJbtJXmdbqMVpzLrBDxvWPZCPb7DcsyADzxPp7h6EiGAyWYsoaPvs41N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVzWFchHvuDoHgC2XRbbTKGcxzyGi37cPcRmFt1ezRvBjwZzzDaJU1DnYwZKS5necS56u7SXQbEmt5DW3M7Kw5F",
  "key1": "4cXnnHQgjmKxzxYNZWhUdvhktLf4gQB2r466uQTemXJ5M1YZnmsVtE14DcKzkfTyhPT3wkQgSiGdhKBTuSnKGda6",
  "key2": "4cz3cGSXVs83HCWCe9rLAdy56ApM4FTx4GVycnqb6YZpdxGE2naeb935S8XVZVux499v47cCGHc2fnaQGsK7fEsK",
  "key3": "129EyrUTMfMVZgRbGxyAchQ8w8NDCHEzVtmjmmnMKBssHzunZ4eZMtM4N3aocRxm8DmC2qeKqgw9sXhXsyQ7oMsB",
  "key4": "5N4QhT1wPpRvzFuFKC6JVeTF78rMDDkRcwizmx54mkzoxdu8ViTFj5hnkT5xrsPBZAU6XPq1hk6t18JNxF7B25e7",
  "key5": "5PM9uwGFXKf27CDh9CZDqHAuCs62mrRNSc3HKBjGQvwvzq28ZeB9rbjhWLaWpfC5eivpAhHJ315ThKd8uoBoeckU",
  "key6": "34yu29ALAXFmk8bBHk2LKT1XSjChuJ9zUBgnSBSKUFDgv5tz9DWzNmcD3Wdtxrs8DYWpBUzYPEsGZT29CR9fVPBD",
  "key7": "C825YMXmmt2L2dhwtYS5n9fZqv6jnr5iCqqsC2QUoG3cTJUmre58nZpK4t4JPXkkTxLy1KZgb6TChN8tFJf36CM",
  "key8": "22xb64bHZan2k8ZCtKGCmgmDypqjAUh4WoSoqkAQQAcgU1w7sSGk2VN5SHQdun8uMAT8pHR3Bc76ntj82wzKyLbq",
  "key9": "5T58Qje8cTZX42YQqqtuhDk7skBEvuWou6buh2PLqCwuSedh6LTb6VRBccc3s6aVwGMZPwxJ2PFbY8j8navyYeVM",
  "key10": "EPtibbATqfWCE8U73eaPK8adBDxqgtdXiBSpBtXcrYao7Ur8sSdPKkgCr8h5Dp13QrZW8m92UN3BV5R1DpeUojH",
  "key11": "3q6K7LRpbk6bNb1NEZ5AnfnB4x71grZcXnxj5TU19cizd7LWQXBAyYSS9SYdgCkBy2pnvz4AQnxptx2xv2UyokaX",
  "key12": "4cnnWzQXM7zo5XZtpuxYQaDQFwrbp6WA4dR6StgUd3QcNhC5Z1PYYqsu8CV5yoLbdWvijhFp7SwVd3CF1xerDJDG",
  "key13": "6Hr3T1SwQvk71UKYV4DzmjUBKL5LzDR3a5HBSdB2LPvuGTLH1GE3JckjB8sGZ6cC9teYYyxvCE7GSCyR11hMdmR",
  "key14": "4xHAtFpWgzCH3jNn5TbSPKxBti958PAYytJrGsNs9Yjc6vjxmoogf9yUToTcxPHjErhBNV59nz5UHykPc3pcX25D",
  "key15": "3o8AgbFRrmmTWk61pXGETqAvunVm4UVLELhVqmmDhExMM8fJXtattNxwNWqhTDpX5aAMUSGHQygcZtL7W6xFzas8",
  "key16": "4wYsoP4Ztstar2R7MNwo9UugDh5ndhpwQVTjngjpD817bQvioQ4nk9ezF7JgpgtwgZUsPCtrcNj6LLcUfw61ZWfW",
  "key17": "kHxAU2ADpmQFeQ9M1ci34ULuKbbCRnKS5AiG7g4znZDBPTD5ajipugZJbnhrthG28FhFtWo4seAMdtPVJF7kfoC",
  "key18": "3HxTaVHuv9C1jWsZeq85EusSvJueubY6MToad1sTJxq2zYkHP3BDAk7rDDt3NN61kvLYRCytJLFDNWvzh7aUdQ13",
  "key19": "55wE3r7S5hjwiXf23iRwQtetT2YyfVU582FqYiSd31LuvvieFocv6ZeT6wjpiqYb6xi9TDshavykt4ADE2DLiLps",
  "key20": "Hb3ZMauQwcT1aRYU5gFJc4iZJpQcSxpj4o3h6Fi2Z5VcWvzxX4yUgabFqQFGScX3CFPyBqx2UmCkn2tn7bD3STy",
  "key21": "4HX364xbXY6MpbXCyUUMcMoLFYbrYbw9dJffGjXVecK7mxFRcBBWa3raBAST4wzvn6M8TM9VFVuUz8RnrQjqABET",
  "key22": "5qAhtxWmQLMfhJt7BBdyfjSaw6Df19oJGKHQkdFZvDfLG9GDHTDgdondmpyn2R3zak12u18J9ANRB2JF3szNQvnK",
  "key23": "NDnvojCBEuRHTzTT1SscaRDsNeXRCzGi8vnPDfsJ5Z3zmD3jpoxNNqzswfgQGoZSJpxbqC3oPoLrv58w7TkYjm8",
  "key24": "5wg25RP9p1rdxFg8iCTBKj4ShYrk9Rpb8V8gRQVvt7ihdrfgM17eoNKtGfpKCzHp7X213EQrwmBfGTkcA9WxXA28",
  "key25": "3fcD37E6DT4Pks8rv8HRQycdNL9gyVjeEYVtt5gxtAapQ6vAYRZYR5wQg74JmfynpBrEXgf3rS3amRFN4Udfjnen",
  "key26": "4XtBiyGRe4xKyQiEubzhtq7QLwSUAVTQZ8xD3JXdt1ehB4MGeLKJUW5N2WwJVzAN5kgsMbzXvJdhRwT844r37Hoy",
  "key27": "5e8RqB9bBMG187UnfUp7H5mfUsKai88u1KipHnyjp6Qhjx51eXtsHTQPcCbL7BzMVwJFrwg6SSoVCAAsJZ32asbv",
  "key28": "41AgTYxXLLnExryzSjXv4CKerbS2fERPgGXCyn2BysBeLiArZY17DhGJGEyQPYYwLUptBvD1oEArXArAvpvx3TjL",
  "key29": "3F2iG5ME92HsTC5A6hNzqojmbSvBzzAMmkdqCKXxQ9b7TLos6j7BBFiXjAYawSYgsZXkttnJ9BLYfhTu6tkWgxNJ",
  "key30": "Yh63WruzzoJW98oyowDf4w4oSndFsBLTwrJFguNmy4VNbEHkGFwh8NRykUbgktkffkRLKGYx8wDj9fDUMWJHK1y",
  "key31": "4eCQqgJvRqSqTezRRKPH6z51fx592a6h88fMtsPay8E6RfrZDSVBqPo6qjSuiPiQ5qtipGEizLn7ZcX9vYZs6bT5",
  "key32": "4oLky7d9VJ4pFLBVxhtAyBo5the8oMfBNfLiijtkVPSa2ZikSkETEgxZzuJMpoeSjoTdyuXdwtD6bDuU2pHcrQjL",
  "key33": "3SLwo5RAoBA8wyZbAzYyjhb9vqFBPXsUXYo8sgnypouoqJmeykDxqTnGUrH4i31tkDGAcBmW8gkEZt4sjbkCecY9",
  "key34": "4NS2h6mHSQEvBK83UxCvwPDjuCQCGKSNBA1FDWo53p7Nfsktu2yMMFiWysT11wne2BNmZmamCLc7iNQH54G8hRYe",
  "key35": "61gMh5AStppKBVxAsDMSkRdMtCF7C4icvPT1QnAKKaCTRhjTcPtwFGQPB5zg3J9iRb97Esq7jscu8Q8qpsr3k4zJ",
  "key36": "nPPonQYetSXRdUWPpiyeZAwZNJcKU8PvU2a3N9XyuLcMwTvPxieVC5WREZq4vVMK1bMQbVq6a5Q5HYHgo9bMKRx",
  "key37": "4kjLfqpfJXuAhbEgRSgyaNrnn4qs1ifx2ovYo9r2P7bDkt5kZJp2VtpSn7Xm8oLA5QGj1BqJR1YZJ8yYC6DLR6eE",
  "key38": "3otNcw1yxyMMZq3G97Pkt3xvavQYrX37iYUyoh3DY3JbxJjbVzoc3CGrFoiSRAiteDeayDZqAhQTQEBj5WCD9S86"
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
