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
    "2vggdakMNrg7S2c5Jv8vF7e45XCp9wiookwRpRZATL6k9FAULZFiEx2nrui2i82sxHkt5ebnhWECWbLUDRMovDCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFKJhUpV19XEh5c9RYF1MQmsGr6dQXF4QsVZDHiwskEySEFrnFPKLqhD3dxbDXoMY9agS3XZAWiVSB8oAgFH7f1",
  "key1": "5k2zuBtBgo1mcaC6gbFbTfKDiu4Ck1Q7cFBaXncZJtwVV9GKmUy2hU8Eu3fXC5gtYYe77Wv1dNDSxZXNPshmXFkY",
  "key2": "4m567e8AVXVqJgQYu6r9BF1nVXJtxmv2YGNX27AmNWjotWhGBZkKCSAmd78BTb3WJPyaWbcShuh2hk3Jn2BCFX8x",
  "key3": "pXyREPYLrP9qQ5kUiRDgU2enZ8nie61fMBRtGfkmHvhfHsZhmDxDFHT48VeDC3UhGhF6hAkpoWoo9X7DGKLR7xZ",
  "key4": "3LcnW2Wf4auTD2KDuKD8J6rGgMinMW1Hx57FDpnhYCxQy3Y3FwWri9CYQYy9dKsTZY6wAvU6UwKLJGaKEtuhYrRk",
  "key5": "33cTW1BLeCBH5SqU2e8KSK3kY2XLdpBi6iQw5xoyPH7Ain824othDxFhsT731KjAbiRiiPTsVQGNcR6edyWmL1Xy",
  "key6": "3hqSSNyKpcVv4z8xfPm2k3r2ZZpeWuqa2TcF3VgRzusheZ6Jq9z6uXtyR4SnSFeQcptGat5DudqonG6JMAxVhzpR",
  "key7": "63J4LmxERz3MCLJ4nsSssZRjezoTTRk6jh2Tahvmb2pznuAGieFBKeC9fBbyysZKhqVarxqwB94NMhUeDrhQP1fk",
  "key8": "2o2f7SXcxKo7SUnEAc2R4FNEudGsN7PWMpRvotKqqbPdtUNbypeTiagevDYDBPAjThw6yQ3Vnuaa5hBafmcrKbgE",
  "key9": "gvaGuDCdQsAxCwjEnwY5DtnqMHxk8rDxAq4XLZMBnAfbQe9fZQaenzDbbTYDMQkBmR3KE9NqNbazYXZWPQkKmqP",
  "key10": "3yYear11WQRwJ9cRuiusrwpWxbbBNPoTBCVZNs64kKs39ApyqbUW2jFiz3fRkkLuiCUSDTZUhYzTxsy9wZp6F9ns",
  "key11": "Dp8rPas4hitk9pfs2zzerBenKAxtroH5pfA8jhhU6hXHr6EFshi87mLUUCPmUdRCNH7KkfiFnxoiVE2ERF98nnZ",
  "key12": "2KAhf4JSypeJD9cWo1gf4PVJh4s2jHh8rDVQr4XKhGwPK3dvYULq1ZsxNX2L8UUtmfvk9EB5aLnnzBv3UZHqdZrB",
  "key13": "5d83BmXGqrj3HGvgUDRLP8yYqxy84XiKS39NpBcdDUb9NSm9htGNDBke7eUPJMFMQpgGZDARMizETbvaTCL4xPbV",
  "key14": "5BdhHQRvh2aUVRScwrCmZ5ABQuWZzyuTPNYhcM8iiAhEZiw7A7vixacgBSpTSciprMYeRLV3Nnw8QAZFLeYC1q68",
  "key15": "5DuqBy3yJMqkg7cCnNU3j9mV6e1BUSUS1RS2LHcMieqoscNzAwLjUr6R95rWVfVEztbA2yrz3RArYym82LAppzvM",
  "key16": "CgSErapfSaYj8XgUF4BixBnJRQfnEsTuav5icm8XTiifMUhASqP1Pww2BdhRFLZmhQWj5D62WVBruYDssbkEXY6",
  "key17": "3jJ1Cqn8m6B69ojWw54uHD8cWTGqxsiqBxXSjouv5ZeipZvrsuxgUkAj7wqDhyazuCKEpyn9nDQZPCAihj1zbtug",
  "key18": "7UqFjQ28ZTfVaqDvZrcdxjdUtzQkhjt5xQqTYz1nDiScqMV6t5xqkcBhZpJzfAipQsSaBYTQfqcdNPVUL8SzYSt",
  "key19": "32PuMaKqajHwoGj4HgcPXVUbhPyaZhQGTBGNs3bu6ZWmBiAVfg39Zbg4Jc7M4xrZ4sdnmT4CC9RK1ZcHfeEp9HJF",
  "key20": "HCtN1pxgCcowvb91KFp5FXxEDNFFxUcaXc2uX4Eedje5J8pNgBXUPz49oxASddbjPCQgS8FJ8Vb26xzutL5WTSi",
  "key21": "5VLDHVnUkQgtvWQoE6UmjcB6ssqiyfofPqDeiuuoPW9ZXNTcDyLuP1HRBStAhc46d2kgLtReu6Q9GXUMj4e1JnA4",
  "key22": "3zC16KGDbEDttreZnvxDMHscvpHBQxSRxgu95ybt8YwBqhdTYSL9SRggatkMNqVqE94F7fv3T7ejgBpjvrHsbmsM",
  "key23": "3UDTd7aeHGZnxhTC2ff1XLQPvNBXiv5msWD5wAHG96LCqxTkSEGXaXfzNUN57v8GskrLr5ZPMUbRbYtPsH4Avps9",
  "key24": "392prcTF2tk8XhpTB8UPuMX1LBdeaWLTnnnskuT9ij5oPMCduyKNpCysiZW2hRvTwWTAvTjF3C7ACvph5rXUH7Lh",
  "key25": "DRDezronc1i4JwADzNNmFhncM8ThuTg2KTxrbntxrkH3KPRGt1FsACg3xMtLFN4XXy3qqi2QAnXJZ2VEUtLMRAu",
  "key26": "3sU4hyJK3ex96RSDYkr3UABNLuLeTLpN4BNxqpzNzWKzkPaYR7YGLLWye9YcDqbvZrMXKmin7x6b6oCVCzKYcuFT",
  "key27": "64WjXmyTrSZvmCrjKPowzGFvjx76xur6ziP4fzKHRcH1Mt5nHjf43jRTpcgRKaQQTBFpu82mDwRNnZifZM7JjuH9",
  "key28": "BeTNCv1mRzhCmDCFpPoM1oNmCPBwL7WiyabN7qWafuR8mGXBm7NvztCskApXiMn5E2XU4ZNuqYPT4Uk32SYRJ1a",
  "key29": "226Mm44SiddK9B4QhZqWXWJ4h2sg2iidZL62LqdjshrMCk53GmogjhH7is2TrKrUseGeLGzuGxCdmmUvhRV5aHQp",
  "key30": "mmnKD2KK5vXMBmPybZrS52rAhzWHsWrL5BqELhL1pc3ptNyWwtxoALq5Xz6t7SYkvKSNhrzXoGzdFesZMeKNSwT",
  "key31": "2E2S1Vfhhr38v3TGN9fscxZc3K9VFY9J9qwLo16mm78Hccws69V3HZFBnu4JX9W9Q49Mh9r7ESwv7Smyo3FfZUiC",
  "key32": "5dzkjW5iGjiXgEwwcWkv6bDKtCTBJ7YDxAxtYc6K3V3jx73jAW91GZanKJbb4d8nmHcs8X3xPMvHyL9w1qAN83na",
  "key33": "2hKaM7q11YRW7Ho78WveKNJbmmp3BLoeQpMFaEvbH2SU763cPDa4FF3ZtufvhnDrDwcbKirEpQqa8KEbZ3Mws2DC",
  "key34": "5jrg4zJk13E5vf4WAAQkSs8WPasEMEaDdDtTe7mzojxh3hqfwez4senkvZCUTZi3FHWp9ZoFx83Zn7UEvyXXzhL1",
  "key35": "4EBaZZ5NKoDbbxBmGtyGjefo2cb3qnSsinuGs8QNMEsZ6dsaKEvkfNzssbc1Zdw7Hoq7fPY8y4eW49t9vVZAvHgS",
  "key36": "67FZLcLi4Xgf8B6zJkGYD4PP5dAroW6r7pJg2f9iqBF1d4XhZdDLxg5UBZhLaQW4WZsuXx3eBC25c5WGVrJFznyc",
  "key37": "4FivK22vfdxowuk1VRJwzG1AqjBXU1amMVfVCGE3huk9uz7r5SnC4gPuu5CdVuF4AESk8eqpCAu2oxjgoGxgYNED",
  "key38": "2fatz5ZvkSK9zzzjNPXEkvgjPrMMdqpBtKPf77EaE93sGSfjaCvS5nCRfMJcyHADonaoPjLvzKk9PMJ8v8QbAQk4",
  "key39": "5Y1yRvh6wwX5g6y7WCrEnrPnvQpyhdKWPH2bUNm8QGnTBPseoUedz8ujdx7fBz5LEzwEjAcFk9RtPvGzTfEUShcB",
  "key40": "5WMC3S9pvXTBYTBMiFAeMycjTDg419w83cfbsUgE4Y2GBSkttkADrV8kf8LPyHcjM8zC57kzKr25a2Tdg1o7khv7",
  "key41": "4Ew653TqQBWR73HXTPWWS9WH1jPu3AmbsFQuEzVLNNdGBsxQC4GEhAr3rnBBWKTNbtErqp5R5ii6j5fnfqrJ4Vqx",
  "key42": "2nYi6hmAHEpSVPBLdpjDehMnn23D8ey126M9RMGwUUdJU4MTFuxMTTRuwsexfdn3uNzvoJfdfuNxZeFHZu7Ra5Vj",
  "key43": "JE5rBXaPKtq15yEFEBQsT23K7b5QRTV8ND22Z7nDnVzjnQdCDvgrpofLJnJ3ZhTrFZmfiNJqztaz6vGHFhZ21Tt",
  "key44": "2hTgXfHSfTvhY83dpB2rEEM8W9rMQm9yLRUoP1KGsRtWLeRS9GnDKwajqbPvbLwxhoQwFoPmfKTgo8Fx2uFZuQdW",
  "key45": "3QzYv9xDPPPuDF8N67SR8AYzKrw2CyVyzKZfAg9sthfSwYwXP9huDvfjFsiAzwnFBa58fjvLHMZg1Pb8KyBzEHFh",
  "key46": "2Eg2rtNkZT2PuPCTE7TPiAnKPzV4j3mRzVL1i5AmuXbEwDXi2bei2Yh5sCt7fkwvcxA58U9z4EKu8xuNB1rXka4i"
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
