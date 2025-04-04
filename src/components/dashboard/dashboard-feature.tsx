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
    "57X8pLjyiqZ4sf378zotmGRkkmJq7DvLk2L3zAWtDJyyiupFBSAG9hAzUyAstWbcUj8WXoKbUtMGkWxXpB76BSp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tPo2R6Tw8QJf3SRN5sYW2jgfWQfs9dYYKy9CS6gwNYCGJnLJreMyJEp89U42G1BLJy9PPxGoBx45wZTP1XaosW",
  "key1": "inpvYHzryxMYz12pqBdo6rKXDzqTkRs61g3fP99beZJ2ReY9k55M6FZzfZ9NfL7L6YcpyKKMpkEoRoLsmVSAZQV",
  "key2": "3rQ8ccnFAvFTdRrk3k4DkDRh4XXHWAxe6pbV8btApP3XyMfySPSqBWWEJbYEtVeDHwwYtc4tDXwnYauNjAZCo9Ke",
  "key3": "45KR9YhHiSCcizSQtmRyqH1aKEhWPzGN9tvyqLZsTu3wNJicmBbd6x6n7hQKHTVMCVV1iMZgwsqESHbr1nezBRKM",
  "key4": "5Ju8KiSzAhWxUjo3rPVKzfJJY8AuYwTh7R4ZtFotMnmxMsoCFmvGk3XNRdcfRohTxjfDx2czDe2Lb9RNFY9BeF4L",
  "key5": "3hBmPf9saXFAB5ExzPJRb9FwQd9SQYLcv8UDxciWY1jqVSJ1zoqNTe8E81NtT9bheRc468Cj8JmWSvqSYmmVnH51",
  "key6": "kTDhSy3dq7sFaz3gXe8RqerQEsnLGXajwin8kEJ7xsCkXxoztg87C6RuxrsQ9aNPhm79UcvPzevZ5WvxkxCpp2G",
  "key7": "4ToGEhYrUb6BAxMKRUErRLLoT1rQvQGzcERya8cSd2c6wyX19mbk7YC6UnQJ43BoqQTXa1PL7kmcSKXCdZmLjpT9",
  "key8": "2HHvusBAAQctzUMxzuwtCruteYbo8nDn7PsBypXvzfriihognE2iV1hJQVnHzx3F9532pK3b4s9FVF6dka6Xnbvw",
  "key9": "5KdL41XrgyS7Jumc5SmFQQGDdtdw3LPzQKk4wZGRDCyZQaJVcWTVpQQJcfKXAVCFS9p1xunoQhHLZFU6oUuWdqkz",
  "key10": "2XLtReaELU1S1E6h5Tc9ZDPtYN3CUk2CgQZjxFxb7WU7L8W62xp6z8NYsRqtDfV6f68KqXz7EvQsEvyWJPBSiMi1",
  "key11": "2aQFEegErgYxcTiaYG61L2KQ3t5gUNdmrSA94uzyiJiXvyQ9F6CmfvzgK85evQGjzN7LDcLWg4ZTN7C3MwBsUYxw",
  "key12": "395dZGvWkEzcatWGe1pHemYYW6hdWVbtH3tMcverSRE6MUvXQTFLGDxxs3af1wpqnmCasfD84Nk3kRYoHKNPJf6f",
  "key13": "5Y31LStQ52ZnQtWrXqq2wJZ8furP2ennyGdqHqkBzgvcr9TacvoJgqnVj9cWpWxd914zPATYTwgAfp99FsTr1yUv",
  "key14": "4L2k2iaLC21y3f1JULEmsHTec5WsmvMMSTNoM29qdjTSMhuXfcjsTbVihwuosQ9W6S3KQ6apvQnvrB1b2u9fuMNK",
  "key15": "5t5tYu1qMW3YSCnSC23ykZQ15QRDvcgT2wSF4yf7SXdr14BaFHqH2ZC9SaPGafYXbL2yTrb8erdCBnXNMAYQ8WD7",
  "key16": "mBNLU4nMU8oViLtX8bvqnw26V3Z15Zx2t5FvpxpyjR1s8TdC7bLCnmstfdFrzrfDPGHU3MABtLn7ikh6BCQbAb7",
  "key17": "61551dCo8b6uACbwEGgAyK1mtZec798t9UsihfDdgseWRAw9cmjP936vd7sNd4mBy1SuUyVXaXqnUoyLxvrys7Rr",
  "key18": "4qEdPGroiJrAQQVPsBReGTvj4DRp8dMF3RggmyjWHQR78XAXyLCDSqie39GGDPRefSrNpYQAQdrF57MtxmbTCusn",
  "key19": "2y2uzo1ooc12prxEZnymLy6cgafiD86i4V2iyhnbvLJBaiusZ4wPVLMBmoEk4u9w8MJUmbzksAkLQyMLv7KLMYp8",
  "key20": "4vdoWjwHods4EaRAuHhgZMZ3Th8Q3o26GGkmz8k69iR6PriyTKWVTinfh3GAoSqCvfnS4fSmyEapwYMq6iudXbPS",
  "key21": "25MCZdm9jGTWFmSu3bwZMfZHUFShZVeJDBnnRUj3UxqofhuzRdhHi8s4T1DAh1WFsXNYYPsi276gUStddBKtrtLa",
  "key22": "5RJKRybFLhFJ6PHTSSSeAHTubJFnMP29Uei7AuYffwD63BkpyHE1PMWTj1M5XuCkh2XUNfedGdTVxWgYVNVjfk5n",
  "key23": "3yqX4pJhmQnPLRsHi5yNwRp3F9fQhNrHRUxa5iuzKmGs7CCBWJ6t4jFhXzyFNgHeQ5RZLa8CvyTbjVzFnEpxa4Wr",
  "key24": "4kg9VETXrg31JPzNmZAEakmHCS8viw6GrRsBKQWkZtPNoX8CozdY6E8FiWRj3nm6uhx3gM4AeRpkXxzh4BVPwwQy",
  "key25": "5e1sC8voWquNtR8YwhYabjhGr6tQR28SCvwexySGPAA112iogfVvtmie9S8TjqX5V5LVn8ea9EU1Pn6dh5BVjtnz",
  "key26": "3bZQe7uj5oankEi3tzxv6YpKsnGg4qzRCmds7nU1c6vWKpuPArYX7vdQQskvR5no7wtyvACaFh61UF1hwMjBgvHb",
  "key27": "3ccquMuVLxpX2DN1yNznwkDvMV4xZxFjpUWDJVDJhia8AXrUufiufz3m8B7zfhyRXp9gBeJvDgbgsG8RyrZ2KEQH",
  "key28": "5asMyqCF4u1jv1z75XAeurpGVN7YBhQPgAioj74aoQEv5uQyMmaub3G2XVLkm7QbdgooSrYZqVjCCzXFtNGJksEU",
  "key29": "4QoWRunFZhYV8kTZq2huLxtHkueWvSQRMwQSnJwdv8CNpW8Jotr8ir7vfuhu7LgtpdmHqZoeji7ikapmYDJizPyG",
  "key30": "3izENjBPuNwMVxmnB95QBpfKrg17yTG7LJiEkKLMtdf4aWJVZb2QJP2KsiyyEi9qkyAcJ94ULAVVLQuWR8HyyKKr",
  "key31": "atpfdDvjhzwSrYhkP5mqgPo2UV9Ew9UZQq5HWDVDW7jAGZnHjZTJ9sisTvohxfYA2zLrUX5sUfDrqmGbRopvDZm",
  "key32": "4o4eayWuymboympHSxxkZDJo3emWH1Gqmd2ezwBWsQ3AHBT2As6kLt2P51FZSwisrNxdDcJpL51VQkGWEw4UnCuk",
  "key33": "57dRhAenFGSzCtzDqVRLbpMdVToMXG3sMJhcSvR3PEuW9wWBwvGjFkkBsdxjLCThmdgJZ7SYvWA5thPEjKnx2Fc",
  "key34": "24NZoVALejfW4UpDkA4uBjT1aQuYT4ukd1i3wH7dft1HhNqoFzWW3GGwBaUqi3eU2Y7Lewz1kVQUWZQav5tGfsyP",
  "key35": "3k7X7o3WJTKGVSPqReseBFchwfs7Hog6ZJ76cVJtRbkMrs4xNE45C5BT1yHzaxQ4NTmHPrN7H41FYRkKQCyuggwL",
  "key36": "4cDup8ocpd5bhLjknDRqtujP7wh4yw6V7hnhy4LyTbJy7LqegAcPfC2Xs1a2wPCsBupnNGQDprJfSCc1nPK6eVBq",
  "key37": "4Pmy5VH6ifV1K2Ng2MjiGkEvNmDcUoGqpRpamnBSXZqyEefNevpsFYWhiUZM2iSspLRXc2quDY3iuu7FuGUHxYzv",
  "key38": "5kuG5pTbq2USMG1dFWbeQ6r13ZUKj7dxcjuAkhG7SfZq2RtpyHWqH2n14ptcKHBsoLT2a7KZnXiFfpUsomNsz2xE"
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
