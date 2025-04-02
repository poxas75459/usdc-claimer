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
    "4Qyr7UsJcm6GZt7nDKKoqsRukW7xdEq8f4f1QeZUN7yrFgeFc5QTFUdcUXigUpSK78QLyX2YU1hJiPKxpzTkQ4qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rip3qun1Lr32E4MvFTtigUeXdHWVYTyKPNU5Za5uM2YnFpXuSzWHLdXqbsv8qG1GB4GE7FMRDag7jxTpCQrBgR1",
  "key1": "mDMujmqHFYNtLQNutyZWrPtifsErwHtysmZqCF4BEY9wR9dQqd5nCnWftcvAMBpiVbnDvj5ZKkYdRM21vARPyFL",
  "key2": "4umkjFZBbHYMbaqw43zNknBNuVck1BpUP3AYrTitHb8CZq1vt6MCARGAkAPwGkfFHBWr4d6qTk5to4osYF2EMyLA",
  "key3": "32dXTQpZSkUXRjMKmCZqLDfziW8oiLZnnryG1LbbgDSARsMPS4vtf6omyxLbPtYHVchuwSYjLpUVN2ffDHH5sqXa",
  "key4": "5Z97ypsP9KdE2gZ1bEg3C6FEeNuYsywu2WLzAfW5zYnpep2sVHL9Xe4tF64igHYHrjRyGoCH1oC8xwW5JZ3oW6zi",
  "key5": "H6GeTcZWKCPBoaGzUCSV6k64s7uwTNpvG2FTvB8LXEAYVW6pcCnSzqCtRVdW7F4eTtkJFmFQ4yAWVFQTXhKNX2o",
  "key6": "3YUjbHbcdxT6mSSQvo5Moy6u1XGXfbusnBLd7cFkqHQStfBDhvJoUXFtEfcLFPAaKiDKdkkufMZv1CbA2gwNL2Sr",
  "key7": "2z8HCyVz3mCNnBAaNMXHFAH1VmBtsm2fHAcE8ytdHoXDA5tGFCpHARWpGngGAh3oERjmTuiuorsQ6vWzZd93zCSy",
  "key8": "5kdNaHkrCUERbR2mEhYYtATg88BswxGwbfppscx5QnRVgjUEhJ6jQT9xGx6uW8CDamBfvtFUWHCDhRbuLGagn62z",
  "key9": "5EZ6cj435Aor6Ac5EZGKuCjpEG7mwuAjv9J8CkokN2ggZJVD4jGkSPwnk6wUD9Mv4WCoauc25RDcZUCcXc7bTf7Z",
  "key10": "4RkdFTkXY6EKSbVtSwec5gYLc6bk5s3e3JakykaJYpY28htzVRPGcE8fn1HVVD1KmPp2pGoxYYLgEHo2hqi1qfxD",
  "key11": "3JVA2zQEUTxkL5SU1VBmGKigTJn2APyh7Jamm7Q8RqT2TU7JkfzySjcCdrPffUTzcNni8r59VKffMqTDo2pw8G5f",
  "key12": "5qx1VhTT9PDxo5q7kPJ6m4S42fRTpFjfyCe7jXMZJLSrPgu2VaifSMqfeMQfrbpK2oApsRztK6bXhYhvP63udw9j",
  "key13": "4yGCMPHKCiTbjthH3hHLncZuw4grDaF477mVg7yUWNtNxi741xH7SSEBf2VnwwM2Vjahypm2Ro44Mc5mK1DscYAf",
  "key14": "5SWtrYhV1TnvjZzAr1sq2DChc5swah8K672CD8jgxJq7M26fwcqNAFSadkf37QFupsR7CdXLmcg3weTjAzgDwC8n",
  "key15": "5dWU1scsx4HiSj487DBh2x5rTVCfwS7pnMJTfvHdBnodLN7bVAEW2VcxJWWPb6Qk9wbV1rYjuaovkGGYHgbFfsUG",
  "key16": "5gyUMCphpc78coN5vcYVv9dN3NmAYx91nTbQLsmshe5T8qbuKaE6Uaw9gLgpKozQvGFBy7Q2DsUYzCNbLsEg83gv",
  "key17": "5XVmVroXSrnTQX9cvGA5xRdkFff8HGVRUVWqD4VKyp1RochtmrYDpddfw448ZCYp5weXMtFneTvzhVYhpasPKvQ9",
  "key18": "4FbVHeM4y2SzHpxkMBbwYq3vtxVheoB5qZDdThz3HiEoPbL3t5wYWdEwhtaiC7NCXKEVvCFZKVR6ov83RmYzr4sU",
  "key19": "2xoPTXmnmCCt1Hh6mN2W3HmngrstsD9rLkpWYtWFtiKHyDaya6Lt7dFH3xgraHyzFegd1MW6ZGnuqkyTjZzotEAq",
  "key20": "163xuJCePRT8Ab4xHgnSE1hKdyASc3LM6EYG2EYrvyDjj5SvYMQoQ39f1FiK1ReKHBxMnUA4zQnaxsFqkygsnDt",
  "key21": "4nnCwjUVhCmKuL17MivXSSCqFMVhuGcTV6FPCNwUw6gCoMJngYfm8Ln357ZV2iV8kG1mMuD8Y9ipSgxdowuomZV2",
  "key22": "5iUDsgvgzBpMcYEUKE6fZCK2ZfuDU4ejAPz7nXqoMELkKPBD2iU6U7Y41xwLWXHtnEorFJwBkRrGPAHfgW2KhU2C",
  "key23": "2ssiFKBiNLaPjZhgb6Foi2WagPS9amrgqUMwLk13AvfNLXNNcKSyFNqeL2vWHJ4xj1u4xHQ2yeRoqeWUX6xcnWwP",
  "key24": "3DBUDdDNkca1uxbE1XhUkjCpMzCVC7BcKVXRGYXuhGkjSCdXpS6VWJaTymuKu2SH9tyK7RYKooiT8DA2JbENEczR",
  "key25": "3Ssmo4tmwYrueTHRtxA82UHSCYNKJ9gJSgHmRbRX6eZ5W6wCkDGXemb1P5w2VEr3nzmDCV1r8RQA4AcG6ap7k1YV",
  "key26": "5ckVpYUKs8W7KmqmYrn5Q2NHZok6vwimk3suK5p1xRs3B4TxPjnHrMdAmJNXUUc1Ges3DGGHRKqPw4UnzxPHkiaV",
  "key27": "28fgWhytM6bHJkxLpNTk1tcR2BzzkbWJRVrDgA1WzfrYciZWrJUFJofRq8VMKtBiit39oUnEusSZWauriGDmDj3Z",
  "key28": "U6xfAStMxGSsycM2QLVmgdcVUsf28QXBTjmcaCfy7FedENyRKLuESUZ1UJfmJ4sp2dSQgXWVdM1pwUxVBkr61v3",
  "key29": "5gLWq8sf8M9qZ56MpHMqw13KtB6zZMDnjG6bYNQGwv6qhaK57v7RpjBKKPyoBMFL7mCBddRXdHE5n3oXUssuZT9g",
  "key30": "38P35VDwG2dvJkJjLwJGakKC5m4prkhLA9EBeTvkJib2Va2GFpTwQ3jWhHw33Sri7C97eY1q2t7YyTA3dVncs5Kb",
  "key31": "65mnPfgDG9euAWCxhroB5iYpijiWWEczS8FpM9j7xrykn4SbYPfGAq1pt4Wv1JNKX8R87FTh2CCQiJngFomJadEd",
  "key32": "4Bb9Hm6HX3iQ4Fq8YysRBDZAkq618sute6R8r1utuyLZ8qcKgf3JVWndooRB9z3mDNBXXxUoqJp4eewS4uctgio8",
  "key33": "4YqZX4y4MpKyDs1yFfopSeQ6vHHaesBuHuzPv5a1wFsZcQvESMz98NcfEgs6dYy9KfWdbu8jfZvoL24VB4M4FqDH",
  "key34": "2FMEWCToErFVuRootzFiDqEiDhADAaRgSUNhCHPHsHmR4MSjDLCEpJkP7fGYsaR4UvdpqR1WBnehjxWjT6XW62H9"
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
