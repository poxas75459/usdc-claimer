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
    "uEGXpPLrchaqY6ZGsB5mCmnShtmaxFpegbQYUm5w1a21ERDjVTVeTDPFbtEub8QNsZJCjQD3BvhQ989KMSwvJsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwCQnY6yCGKmwqLCazKXkeT6jTivXSBxTa4EJTBSaWg8GNwKELVbUWm3MyzXY1ptRQVrBTrecKau9FW6ajTU1wT",
  "key1": "CHnKLDRcSdD7VRazg71oc4U1freNXFddnVKw8mSQnSAVnjrP2iSeaJ8n5EWCp8oCcW9Vu2U3fxF5EqAD3Yp5bHE",
  "key2": "2KbTLvLiTmLBXrVXpU2H6hWquejzLBJ87PnUgtDzWE2o82kWEtA2J9s85wxJzRDqcD6jvdrvbPevpc6BfdABWygC",
  "key3": "7CuXYrifixUNHs2GhzmZCv8SpP1jMu8PFX3CmWAWRLf694SrEarfZ3qUoZeKiH2kaZdKG3QgJJeDGa9MUPPWXPZ",
  "key4": "DQ6yB6PBVBNxpQF4JGiaPAP8VvmhQh7MbZEhnThkZu5keNREetYZFQHD47BFnHA7rW7j2R8eUHQNRMyvtTDymzu",
  "key5": "3kysVwtFeUsia8wD2bLPLuvqK9QcYgHNvBaEg6R2qquQ9tpkzGPkpMs8EvbQP6BnyUjhC1mX6JuYdvAEDhbvvyu8",
  "key6": "5kYVkVTJcoNcKRJM74CiLAgjjWhUmjkZJemGpjeot2AgsiyZaN7X3ozzKtwPagkL4xC1zW7vhftCVGjiQCKdJJXz",
  "key7": "HPhCWp5tCG3bAnyUG664XEvmiDZ2qhSnfu9afe7juTd9cX9wUUN3gUTMsJK3riCE8jotUEzgEdCjMB7kPDZnrs4",
  "key8": "56Fht42ciCharZ6WbAP27QfcMATRkw95tH69n6oEpW1fNNAVhVt73EakAwTEpzKZigbSdiTbyiwdtPpnPaPDCprS",
  "key9": "3x3ArmPn8pJTpu8ZXrXaYqNETdGcpNMv4iBJuVhadiTerNPE33vgXwxPyfkWcUZVjo92dTxyXPaY9HnEcjYWnWZ9",
  "key10": "2nUKW8KakhqbQutqV7qzS5KxCvXY6uoQ7R6nycfuicaWoPtw5f8LDPvwkCs1VMpWbHAAb2ma9DCScaVDgHgj2cdG",
  "key11": "3Pjt8qnRyaSKWcLJ7w1iQNeXvcBKNbCcKexjoiY9gfiqgQdf1a5Ns52z3sXYXUB2tBhDgo6bMtazhSFxRAAaqtHc",
  "key12": "21Bvoz7vEoEDj5ibCTLocdbfQGLMrL69Vr1YkqLL4Dfs2QRXfRbqC1FSYm73Gx27yVmEmWbpcWa9GXcJTTi2RJnr",
  "key13": "3erbBJQDTQ7uQxkv4Zfr1n9x8BsnoUanihHDLi1h75WQ9yQTtANQk7jkukFnnHaxFmuNnK16Sjq2oxZTbTaw26rJ",
  "key14": "3TPaBavsvPLGgvoEsdmzbxVvu95dsB5i1c2Gzh3EYmkbXRdsWsDEezgMqqW68bRBPzPD9qkAgdyZwfzZ4mUPvPPs",
  "key15": "2gBjfLSjY2hsErL23PZMwgM7niBvPo1rqQCTzDHEB7AGxje5kPin7cS18mYgrwCZcq8Uhr61adLCPtp8tTVd4v72",
  "key16": "4rTsn6JZHWsaJN5L6zojVZf1aPGDVNk52mcgi6HFRnGTVpEJ5586sqejLqan8Dq4KwXWBm8SUfHdnUrAUTnS3eo4",
  "key17": "63mtAk16WHDKJw6vKV3Tk2GNzwpT5jVfBF8UdpN4vryvaWRZBapzqkSLqY3wQAXtCTDpsNuPehNxqwRcLBUNyVMc",
  "key18": "5ib1Q5kwhEEgqVrRuumy899YzyMuwTcRvyaqT6W1xiDJ8qdyM2LaeijvoAG7L7ME5FJQ7TKLhxRcCHdD9F95Crmj",
  "key19": "bgW1EpQBLGgKHo2rAd64Lmeenhb4uojNJHdEtwqCcHpLnXM5iNnQ6hTR26VjSwVCXN35ojgP4cMBxAvgrmXHpu8",
  "key20": "3S4BVryDqQATZVw7GqtdHTL15BTa4NoPNBWts6JoRYn9biyFfYWgjdVmDq4aoS4jBucVuXWKaMKPcYtFtRHXkaj5",
  "key21": "4WJbYTy5uwNEFccoMEHMAS4tbpHc7LhCFYnx7K17JDkbNv41pt8LiHFLERnTkXiJNTSutTptDCUmZkqn1jgnd1Ep",
  "key22": "2nWghahyL8rtsd9GzQC9HvNhHJ29WFsin7m7xjzTKQ2cpZ9yLq6azJn46jr61eut49132ZQXicmwbz4CLUgTncCo",
  "key23": "5hgdsHHpx5Xf3ZMeeYXLv3dy3LHYnbg9LvQbe64t6qK7R4FyuYF1pUXJmbdkXDq4aLWFKcat5u3kUt92a4WMoBLh",
  "key24": "5ZNPkxYsuNSeao8dUXAtKXjUTptLicqoXiG29krR1HnkBwqzpDzT8Z5FcnniiNToCiZKD51Cysjz2G3KG8i6duzq",
  "key25": "5VMwN8FoxB5PR3j6G3Ae6CWfdE6njJZXvnGFRwpsKshrb4vRjLtrscMZ88QzqGwtffXs6rKZBpL35QX4rBrh14Mq",
  "key26": "2P1x6xrV37a4ndmDQ4TXBbLzTXvANaKbYTFzWrcoVM9xCQmwQ1ntUzRZHzrv8xkWLGTuWCejCyQ3jvaNXvj81UWz",
  "key27": "3TWA9Mtg5PtWfwHxr1QYSfcj4TGgDmpw72F8pFbjJdcXFcYKe4qDzFHPMt3BUvKR8Xjvjm2pBStfWJXcumqY5JgC",
  "key28": "5hK8PUhKMs63MPUhqQ7WfAihJMYdik8FbfKSLUWPv4PaKpAFTw5v2eXoMs1ouRy3Z3dCnB7Np836Fm2KW7dD1rj9",
  "key29": "25R7CtHQvFVAHRbRXbnx1FbyUQnFw5Pyk4fkA9bFh2u39FhZQxoYLbuAZPYSQxKruMvfg1QbkmqLwtYf6dneF9zn",
  "key30": "35NmwzompKKTousG3ZdNxbJmamnxKNyNrsWhiZEzdWYwBS8ig2djDY8FM68daGAW3uPhD8i4ec7cZFzskp62bozd",
  "key31": "SDaSEhQL85fEAJDvC8MhTREyhUVowNwE6YiW4dGAahmdCL5tfqkxqZdVY7TdyBtGAmHCdvajvfUUr9wGmUwDsjv",
  "key32": "4z14TiLFXkHUFLsnqVbZJYvrpyc9SVQaUHNTNuUmwYJcEyeH24uWEmFSgpzDgDpvW9jSmP63uZoFBcfyWWXjUYzp",
  "key33": "jBuzPiHSdrVYH2RTB5ByfcS6q7fpTN1JYaARJd28ZBHVWS59bQWV4i9BqVvKgpsEkmi1aPnfko46DuuCHhGKfF5",
  "key34": "4SKkMRWEJKSh5eYLquLf5VVKCMvvdDfzWx4hEXerEq3BJsqDxRGDXWvFirowPPWHDzyBKJTxtv99hpu8cYtanyzB",
  "key35": "3k19LboCFtFVeydq7WQhZp5FFyBnbSrDw9kwjhR1gvVcK3AiFtHeHmWKv6BiPdtPg5AwV8LEGXdsbZeUvx2gVQuC",
  "key36": "3VwmwaP4Re5qotZX1EcNcEx9j5HfuwdJZFZecJT3bQeYG92pUyv2V63jd52yiEJrFtBrigJeZWqt8weKbga5CbqW",
  "key37": "i5dw6CJ5nfEvyxu72MframfiVsFkBEu2mZDSm4ic7P6VNtghX2shoikDA3FCHWpS3CDzvXvPA2g8strRcjUu7AZ",
  "key38": "3WfQ1woHnYL4WRgSngHWGHmAY1AJJGR5bdJzCXrGrXyjHEFCuqRJ9zscUh7YLogDWD7cSRKVJb78hA3aMF4faWEv",
  "key39": "4QxRvyTQ3sHLs57xiPmnrCfnX59CALKjWLT1857AbLfY7CSWj12pZH741XcSsyQYCqbgJZfqpfNfAWq12XVeoqro",
  "key40": "5w6g3SCrpo6hCHbcqmv6z6E8wh9iukhSLHe6o1gRQH5uDxrsktUSkM7atSam58hFXXFHfr3JVy8wL4RAcX5EGLMN",
  "key41": "63bVAQviu3DMUHzZ12HvL8gdsJjWig5szJuzpcKKD2zLfpRyQyumaMRyaGYhnzqnbHxCzj7YtpNtFikkR5KSwpda",
  "key42": "B6RNSgWWJQxktsPkADYzTrwpgZUoazMvZXv288bFqbxrn2YDAw3XqLJahw9N2242i6GLKqRxVemTAoViXUGcuuF"
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
