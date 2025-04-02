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
    "F2UcKo2aBzixcRoKTm1AjEHrcHjKePkt28ycgBqnnvism9goJ1AdX5jqjt72k1hvVWWedZRQbboaLx7Ug49wBTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47G7u8CvhYi5jiYjmxL9qh6nkhCM1btS3MWwQrB58Bgt9ZstqXhxPgJBTAmJ7AHybHAcunDgqFUo9v58ehg8Tewe",
  "key1": "oFQtyqk6t6umBoDbaiaZHhKL5FWTmvq8YwZhih5BddtxjSm9iXXp3StDkUiH2qrhrWdgEfKgdmiXyvPuCkKQBCR",
  "key2": "3pob8eBGgvSjfDR7Cd8vYhkjgBYCwXryyvV9oKDYQQ3RvpiGATyh9ERrx4aMXNtpo6LhSbtrDgazA8vbsysjY3KH",
  "key3": "4dWSYk1NtdBiHmhg4bWShYDYduoFM8XLjArP8qPe1eiTbadY2HdZ1J43VcG5RcvU4b3U74e6uy39aFJZv7gPTAVD",
  "key4": "3eM1vxFRVtnYk7fPWUAQAg2fCwBPqVG6DTXZ2jRvu997XhqQW13DrHEoPDYUdRgsJ1pGmywVkdCkLC8vS8us2hQU",
  "key5": "42ifpdQ5nQ9FRMxcjDTLKfQG3EUQZTc5omKr7iZQmydg3kBaarBRwkZPUMMqkkVASiJsvZ4XcEQopWLsHAubxgbE",
  "key6": "65kiNFzTdBKaGyjUcVx1XZGwkBubw3kEUWD8Vz1nku7WUKypK2XhVuekzoLVrrrvvdQMWis2Drr4U9tVzRRHv9Vv",
  "key7": "rFqeTk9dLNQuZYUXg4qy3uoUJxLR56FEzQshbjRdoPYxDxqPgfitsDaHTdVTszdZDr1GepzcaTDR7VFnruPxnaB",
  "key8": "UPBi8UC3KgZGMA1whkrxtfdBkfnfR5rbmYd78qfBFS4nNuNFRVn2ShSYcgGiGz4WhzNMbdKZnBPnEXV86q5K1G6",
  "key9": "4enLEVWx66vmR9Gux8GoLnYNThhA2havM2YTczveUxqyKGy3qRzwdyPno4xQn3F53HApYmU2ioU62d2STMfhiLd8",
  "key10": "5xt6K5YoN3qSty9ocZkNxu1EUCZDSiTvTkntYpDGkM3QAsBkN7v4aASTRcVk6TJw3sMotaLkSyXTUN9MyPP3cfvW",
  "key11": "4P3FmuHq1H1NFtm5WWFWyATPFEQwGiYF3p6SdwRDCai2W32NZFDhsNAusekcfouqfK6fXM76iR5fQM3pukEAH6Ff",
  "key12": "nAS3hnFRR5bwWhBzFFMSqy7GTfeT15yNeiUPQSBb1fyFcnF1yXPPCV34VhozXJDk9esmCN26ZoGLi3HkM1J9nyH",
  "key13": "5PJFtHAoNpEMzNWYPNZZJdR187vMR8yvZAoGZd1V6ZzMyG9CCCQ7yJyWGJJTYThB59Gu1gNy53UzTA9snH1MyT1s",
  "key14": "3cym13i5ece2VfnWtQg1TwrpTbcWiqL5EogJccZUpjAvZ59tqY4YfQ3KpbMuGyrLhMTmJeFZ2H2757Lf3ya6nzBd",
  "key15": "3UHgxyjA18V5xkFP48mRDsi793oMSd9hFvHb6zFbY9ipYdaToAuFhJcfbf79bU5qDwoLo6joZf4uMrSnoWMNTZmH",
  "key16": "5xPgNjMy6PMo8AKmYJ7avLyC6uzYTNkX46tEbNcT7sU6PYaptjDZsjHNaYsRkSHzVa9xxq3TJj9RhTGhBgWCB3yM",
  "key17": "5WT44WKW3dpScS6n7AoxbRqGZULow8zukH3BFSKaQSvXqpK3Va1XTxjuGpUAvScWqqDraGS5JecQJR1rZ9q2pgDu",
  "key18": "4gHLNcLDbaC8agbeRk7o78eAWdzDz2DgkCZcCeF8wa2b1JGJfhKZBbETAyeWiXkeB7Lf35FAFSps8k7SMo5NjbFr",
  "key19": "HMF46MbxVcA5FEYBkv1TCTRFAgvQtFqN6LCJvuYBrsi3VCXuWuAXhekssD1KkUkRMEuHDP6HiRTpST6gVwU8SNS",
  "key20": "3CxmXBHr3tkWYr26iRB7XJppqiHez9syrTdtHBcS1pety4PRJt7WvRQqhTKnBtsUPYfqfVKBvm9Rp7ShEtxZmT2R",
  "key21": "64VaUmFW2t3xCGXzBeVLZ9AAoQHKPAaxkZUrB3pV34cKKX8WuFAxWwuM2YnRU1VMoXcGpDtZFWzCYfA78e414tWb",
  "key22": "2RPgpPPE3cHHcwUXgcC6K3fFcTGrKRk9eTQC5msnXrTYNKFCJTKw592gXBcjocadkDeHqKgi2jUnY6KTxXbgrAzv",
  "key23": "3g4AteJa9LkEx3vNVAsE9DQgk75jGKAXwwvhmTHXQXUekbvctWwnp9NFQDhR9msffoBk7m8RH5ptsGcFTEgpGS4U",
  "key24": "34Sh8qkpeptaaqB7vsg3s1r5S42neP7KD95udhLtYZWhXfKKZ4rzwx1Ect5mk1h5oWuhGj7iNWvUwpCPNdhT4xCt",
  "key25": "5J6RbVMFBeJjq2RXvcatvVfLa8FkZwtz8FCuFDEggh7cgUWdRZZwhSq5JMzMK6Q515MWr7bF4e8rdTfscQx5BrAD",
  "key26": "2oYHXbWiPswNEzdadBo2v4VDHttFuXvEa9iCFg5RMm8uvCs3CPDKRfwj27z3RD1oNN1vQKVtCtTjFH11sVM43A5K",
  "key27": "59BdsRuGvSt2Q932LJ2VUfbQfsFscuirsz26s1uUHh7SAxUYbvqyqFunXGUzY1NpH2agojcKsTD7bBHu1fmuJ5Kr",
  "key28": "2hAjvqQdL1zmaBdEfKhcwNQfyY4kBz6sYBbk4uZ9m3djA8x1vFe2NNTosPYfbyUA44oNEKUnwrbnEaAzg3mR17hz",
  "key29": "229ouXN8anNLcMBfG5AmPLXCvR32wxvYo9xJWv51T5SXxezxafgH2GUTiURprFBL3c1s4TKcpEmo5YNHNmG3ASeU",
  "key30": "5MJQ6p5x71qtcHfvX3Eh61xUfR9ghCxj8E8cjYWceTJxv9udmjNqTV3vGiSjb1s6jxJtAi1JZ4vLnKTDDXM8DCte",
  "key31": "3vWmK5aQdRdDxrb8BXfB99SW1BTo6teWSoK6FE55ZMabPB8E1kUAWDpQBEjB16UrkjWQPdJPMrD6S8uxScQgAFKL",
  "key32": "4WLTHkhymZbv2h8F4C84vTLoN62MTE3ZKzCd27gUtMbixaeKg6VWy5snffzRBNvBMXUzHyogoPpymj6nKbdB4Cqh",
  "key33": "3JuwR2QDxn1ZUz6SmjKsX8WfTkiKk5TaoWQtinW5XyjDqPmoA9qCiKAqwjPiyvAmYfAeTatYiGxmJfWcXnKJhyma",
  "key34": "2q2ZjvXibDGBR85XL3vsZ8EeUaxH14zFdbhmjjjgtmXDpRTKgHe5a6M8baCekA9pbmoRx4uJRDv9iVd2gwWcqRwt"
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
