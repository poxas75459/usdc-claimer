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
    "5n4HscJAzNVsuKAYdLiT2q1N1RaKACJA7pTEsy8Nc3SY3r2uUJWizUzT6Em59ogPcbNtJ2cyKhRNxYBnV6zsikrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGe54VPo7HUtAdQ7j5HsV29k8qsXCawSywRD32P4Bm6GidjyxFacKbbtDAeZzeUPHCDQZ8pDFEHqSeW8dwyGkdT",
  "key1": "3NpbuQ5tiEtRjvj31ujaAtfoTVqN9GngdLzYht6o4ZR5Hv3qaHjwd8HM6v1fAmtCPoatdDLJ8GmmYMbpif6zZwqp",
  "key2": "3riYpTeUn4NvL2KbDMGQZasdekS7FfhuY3vhEv2Rq66qRjVrLMTsT1sjeuAyXEFgeiefnaZoPhUnz7gSCeY9xLQv",
  "key3": "3uJW7hzAQygyoF2m4VXmoo8o6y7AZmhvi56fzhYNS5woKRJBBe73DDWdFHLMDVDRMWXoWSVmcTsSeQcpYs6bLJFD",
  "key4": "65ZZrGRhkdNUPDARotybMbb4Ds1MZ4SkehKGcGps64tagm8oPtMpSJpiQR8pzizcKVX4xWkhtNeu9AYa5cZeX1Ym",
  "key5": "5KKGp3JNwSE2io9hV8DmHLWrr4XrxvgFkJ6uqB6VdYQ83hS6yAV7UEXPFu4PVeXJJ9fmERqM99A18VJnZZtUjH7j",
  "key6": "4DZ6s2NCKngdY9tCFQXjcVbtv9k2CYFTneGmsXY4pPh3KiawgFDc39csCG7VWAXXzLRL6hC2ij5KjX4JKr46hNFn",
  "key7": "2U1JWYMaM65v5W4xp25pndHgF2NghJo16RdUoK7NfcpQoQ2nmLEAqAas9Qm1mEY9CKUtsatQARK8PxNwfgzpsZAM",
  "key8": "3WseLPjbvDk4BA8gB9KQu8ZTpoyC77W28YKWTbRLejHzamqrV1cAbx4Ge1TQPRA2U7TusjpjYoBZTc7Ubd4LkTKy",
  "key9": "5Cw7RAwk6CfUyD8QGdN4Qnm3jfhChWEkMX2Skqg1uhxYmYrGVBLhJDDTsYdfJtWbyyQ5oyaHLg4AypQkQr48GThs",
  "key10": "5PUCZ92zMsfKtJG6ZXsEbAswtjod9dis1unMafuwTCcHoAxCXu6cVFj5HM3WxxzciJg7eCN8Pa7AeEPLjhP6qu2P",
  "key11": "5NGtrdByeZ9DNtwkuGcYcSraQzqwpFoSQk9b1CGtTqisVxFDn7mxvcxNXh2DXyuccmpAP9ZKoSeYqwT8RwUeoCdf",
  "key12": "2w4XAiPM3gp1QfsH6ynBdWyrvosiStdmS8JNvkp2GiBXzKGr7XHKgH7q8tzyb3v5PjcuCfnjbFPapJnYcmdhSjB3",
  "key13": "sXA8WNP49eaAZZDVTWuMtec27RGNexk7BHiFMT94wEWH3fasLW8KTMowkYc8vU34SDFb6FHjWi4oukNgnUSdfX8",
  "key14": "5MJaj8g2L1FkeTSu2HTQYHQAVoCHvdSLauPTymVsp1bcUWKTqL71DEEKYTkLhVBtiRkPCwqBRSNxix5DsECUjFf2",
  "key15": "4zYE9qzt7q4bzTubGxXLNNtGQvFtMmNNThkyjqSR4oD1cQwVC6eSB1erQ6bFG1o3VecoNFSrR4wC3t6Qyo9qDYyX",
  "key16": "5CVWXuqPfDrkr2VL8ibywrg5v4ncbJJ98SaoqgJHtQnQeTcpxyEwMSdX2xDj7K4HxP3A4dQXGoxVCvTf4gTR3EqP",
  "key17": "583KQgNStLrK4cUQhjo9ibdDBwYbKoXxDbMVaF2nzoVXfsSHQx2yB2zHbdvF98hhq38rLt61JrmFpWxSsVS3XofM",
  "key18": "5ZHbcC13skC3wxg5dRXbQk23FwPuD6HFHQs33g8zemekMtLbMREM5Hp5dUJpKMLCDmTT4vsdGny3fHcEbY4EfCuw",
  "key19": "65B4ZcdutrVLNq46Cr28Mp5WgxJEBaGCvDHDFCAt5dVZncYCagMJQj9e6dHFay4p6M8dDcymNM5uPkxgTXXbipnV",
  "key20": "2T9DrNRHRr7U7WjQAidLBzRc7AM4HuWvTRP3CTnahBwB9xyNZZquqaHAQBYRwqAa5iNP3D7Zjtiv6bmwJhvG6grq",
  "key21": "2ck6YUmeJtFRWdsg2ZEx97o7bcxb7Je6ttz8A7MxNYewidVUKUyyHoak74PgeaaHmAe2edtgewAki8uxvQR5vtnw",
  "key22": "2Zsh9ZqFYxkcgCjJFkVoRd1naj6UZgbefpic7UyWJGhmVGnB4aYMgqPdkCfy5WSnz1e9Ea2Xcv6eRkxbSf2aKhXv",
  "key23": "4HDmNFma1XS8iQX2mJiJUq3JpRBRZGV1oYTcf8hf65yM7ZiKgBbPYW6Hmun5R195VwoXYoRc1h7bYAPBxWRRBzSh",
  "key24": "5VtNatM7erLt84coXzMvWRkV1DzwXMZHPwS5UDyo54daCqUwT3XAmbbedUb7pkxALNwoS8FV4ZYyKn4Em2XvRXJE",
  "key25": "3ka8gPZq82kEgufm93jqeEXDxefyoS2VfFDAeyXLRZWdLv7HMZ9a8a7J5VHHamMWXdhqGuvfgf1Bj5bPRKyiM7vk",
  "key26": "DRUEFyhmSxzwxp3QZk78HT5UeqDqyDEta5FgAjCSgvg87cAzscUsth7G9c1qh2nqn3epDzht2CZHqcYQ1eB8o4b",
  "key27": "646rUX95HNYxn6NCd7PNLCYnqxiFNEjZKHXPvaJpKU2LBJBY5dikNPmKQxF3GCRzYpoSoa5mUARJCLUEw9QvfKXe",
  "key28": "4ZuQyqW4GxJspxkCAnztACLzhQ7Da8W85gmJmYd9vfSyvPEEjPUt9YsMhmjeqfYPuFiJ27bYKXXvtLgekc5nzYfL",
  "key29": "rgtG1XoKnoDhNFUcRpSxK7iYLcGkxE8iTpp83kPjRNYYpTDZsp1AJxYCiGqRE3gDUBWn6DZSwyd5iNeoMViYT2g",
  "key30": "4yz4n1k7uQqGKBNEJuPdxaXyMx5onNMNGgnQY8FKefQjEbm6egY2V1Z67NhZz73C9MY7jmqtvsbeoLg1Udz9mFWV",
  "key31": "2UhgnRdzgrZBBZdEMSYWHYmLN9d1PbP5TWzDHy19whoRKfA9UbSgapv37tbsZGjaWWNNVxGuzkaXwh9uN6tTBGec",
  "key32": "3smQtwwjMCZ8FKRvT9WTjzH5wsNTbw918mcbzK8ppYRPGTv1R6S9ZbPdjvPxjzxbjyYh7WfnRwsWvgq8t4vfmBij",
  "key33": "4zMBY84ZdWpdmk4YngmBt8zhKhiYLSR8gCQNjWoNiAw5owjrMCDZ5jAS43VzuQrsBGVcyVtbu6G7K9EGmwnCb7Xz",
  "key34": "4E2Ubt5scVBEnin9jUnPexj2qgpwbvZKjhwHyTozHSkyVGywLTJojVZDLPZDorC5HF2shvdzh7FUZqGY3yku8pUw",
  "key35": "4nGfHbtJBttTQ3i1ak9EKDikaZA2xkY3gmz6CGfsb59GRpJwrmxKVuEVe8dhRgFRgMvkzh2yNmznmdLUH4sLT9vV",
  "key36": "39mKFZC8iwnfhgbZWQgaMWukA4xdF8vhsXXRo12o9Tff67qvzjKVM9Qx1CcHQ8isR9JzkZBvzYKQQgFAmBjmJqKH",
  "key37": "5h9QtASBefL3xshD8V2X89UYTkKkWJjsiYqRyt3EpmnAQNzTLLhmjXoGPDKzamNqsYpUQwuX9q2cMLwvNuHvpayd",
  "key38": "3gQnhKfpYN2zxBXnXbntbq3XSu3D9HtHq3n7moQDkJZdXjHzQpPRrhDHZwdmrUcVwJrSk1tJyX2X7dnHN9gUCF2M",
  "key39": "3M25VMjcLUyUYQsaBritY5e74bbNUcapHq9BcNbFVqZ1WdwRdxZtnaCCk6CKoPNm1TtKDzUp12xmtY8gbBezWYDk",
  "key40": "3GS3ZNMHCipQqmkYj1D2355mQ5tmydjNqscAJsdJHvVVYgJLVu3GPHtrnwYAf9XGDgPNjexpA6f4KPmXy5QBFkHN",
  "key41": "3khzd1UmgyGCZ7YfPNrZNAcLonToQGgkXSF1sjXccu7bBKUVmpzKB418xWFE1fyxXYK81LkLLXebMSvgdmZfWrda",
  "key42": "2wERNv69PozKGiK5Jgmqoq3VUuCPkXRkVyXvm2r4gvpjZtff89JNmZQ7jQTutvnG7BCst93FpyET1KhfGE3Lc7nJ",
  "key43": "3uaMJQY5ZFAL8HJkJe2nhoAiFobbbUUMGu5Y4DfyT3dXZCprPCJFuQy1x49DdMY3RAm1Khy4ifC7hPoBdqrH2hi",
  "key44": "62saPB2ZWfYi3aKrXXwr5P2R427xEytFcMkaJY7qgSPMDshWNgY7zKCEL2KAV32uhhhaBtr5GFWytWJ7qGuUt4k6",
  "key45": "4RD52wYzUQPiZZMt48H8ZN4aZ8FSEQJSJrQ4aYHqXw9gE81vwcShqZV8WyeQAo4UmZVSdyYKkKutRvBe6p4SgF1D",
  "key46": "2hSJrxyxMP9AM4xPqea4qs3YXpNdqpvDNC66djiuuT6vusF4jFSJNTvrV6Ub7bHSw4gzpUhY98MVKWAdtAQAgwVy"
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
