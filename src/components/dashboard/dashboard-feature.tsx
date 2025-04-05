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
    "3s7KCrwrtCjSwnVPiCJmmWyQzYkg9oqWpaqLCAQWZAr5uWKSkKYJ3i7ca5iSVsQ1cvyxYhtvwXYYjpTYaW9z8Ccw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lo39wkyxiQBK8kjZCyC93T2qcDqZe9MhdiXxqx9spuVGzhePLijtjJe4crCPMFKpvJVn2e3EMkqnzgMbPd5EDdG",
  "key1": "xDsdSahQH7X2kaLeVDKJsXevR8Ya1niQNKQEZVjc2YMGTT3Fpg8WqA8y8Tbb9MEJcYZoWUgYFMy8nKyhpg77Wgr",
  "key2": "4AsVS5cmHnZjpCV4Cu4LYwvYkuQEdDoTK8mx5wf2RvZStfLYcrzz8GGXfn2LiKmv9QBbomMeKkSHiWk4V13Z2JKh",
  "key3": "5X91eVyfpscor8To1uzi64QHYELejh5TxAA9m6UNRS8iBat7PYq3nWQsPU1zEe3ZREnnvQd3YQfLhtF3iv7xyEoa",
  "key4": "2ro8wo3vTGZT1xq2CHvonVQxrhvtm2QGyV5yXkjjy7E1EUHY4wsQKW2H33Wqoh9n5hC8o1DzgZt3VcVAjoDkCggf",
  "key5": "skVCE4Kz1UDLyrZJSpYTAXRjNVi3jgcY3HYPmtGU2nH9xPHfJAEk1si9U3NHD6QbnKmwvgiBoj8vPvCz9P26YjS",
  "key6": "DpKMpN42dAcVPKeiJEtaQFBDzxT8iBpgis2LnUU1h7ektBZcQxyNGqq5kRpggqd694rWvpdjrKxTb3Y6fNZtGyR",
  "key7": "55XX92Z2Cm1UANNXqDLaDBRAyceNLBsEvEoWFXaLKST3KLkbZjRt29zSLtVGkyZsVHnPDJNbXM5Ji6W8FYKgCFQe",
  "key8": "5gUb967YnagpQCwcEnjijxp2VQygG9ss2yDTk5C7stbME1hRmvjdLKCmKW2eWdrH6DEeLPbv5ip7kYiawXWndSR8",
  "key9": "4ySMV96qNyQDdU6Egbcp14FjdQ4zhHYypuPNVjZePtxegG6a1oEohitKos43krwbTVin5MjX2Wf3cgsaePHuXqd6",
  "key10": "3o4LcVssk62V5HsRJxQaC5pDSevT7aB1jyziKbSZiogawexJptNYcBJgkVGWz4LGLSkmbwFJdnwNScCCdRMQ8Xss",
  "key11": "HQrJB3ahNgAVz9xxQ5DvhEX4gKL7AAS7q7djxcgUDT2ZQyMR9upEjVV2vRHYjpGRuGPrCT1VmpdmEHVtkRLrbPg",
  "key12": "3LVwBwSfnrZUdT3GJuR1XiEaBVmFzzQZAai9ZrhijLLLiv8rWdAMeF4DvDrA2d3p52wvECsTYT4TBDxaV9tGSXVX",
  "key13": "5CsDvGoaq3J5FEMEsAPHN437oyZ4SQ3xFioPtnxbkTBFLNxdxMS8yvPHX632Gf52KRRKzkFnSyjfBtzNgNgxJR3Y",
  "key14": "5qtvE1mVnMzoieePy2mcps7esCnutnVWyG23QBtgepb7hXWseysxiRfrr7qeXoJwwPGCZ7yq9bCR8ap7fCQ1wKkP",
  "key15": "3DzaZJLCMHZQqEVZGvekz5XASZFPy7DPMQbVRnDmHtd82vBVLYKLsJeQHMinPbnPFXb7PyGW3LJNtBokGPy5WnVh",
  "key16": "3CtCD89ZWCcxPcUBkfHJur9HNoBF5SYDJtJT9FZXTo6XvyjyssJ1KPgpaZM62ibdHC4D9WoaqyBVShyB9AE36Gct",
  "key17": "5n1QFYwh82FZUSisix7Z9tuGmjrhuQoHmmE1Bfr5LQf3sF1saetvHeTJ4dJB4KhK4PBr4MrCiwVRG8koibnjdGiq",
  "key18": "5iB6zWo6AtgES6wpXqvjjJ4V6zUv2mGkWPm7N1XRQnbn9TXXQ52ZdCebbetAzTaZS2H4y8w3LzHVanv8mVcsXw2q",
  "key19": "5DxhuCQ6TxaxRSbA4pk3HvZMJNSYhNBB82rmZ3Y5wFkUAYCGQYGdyRRcGkBFj4dAzpgLhaj6KFY9cMxYwuWVwQiJ",
  "key20": "3r8pRtp7MFjvXHauqMqTxDaRTFhR1uFFgN22e5Yy3ovydwQSCbTD7rh1LPf4HbppELniFw87HtNGBrp7AS4eYxuq",
  "key21": "YBbzTqVVamGRSNev9TetzVJZ1wzd2puJ2XWipvJNWLuCSCxET3ZPT7WFsZE1GbndtifDcKqYSmZkdQrohLYkiF8",
  "key22": "2T6nZ9S2qNjbJumpBdLH1x4wfNNKa42Z38zuZcW1WGyxUn6jdVLzJCMGemei2qarKKaXDdMiWB7tezjNDNKFmAvy",
  "key23": "y6AGB6QTXFi3LrBSfTrbWrpVkjN7G5Y7h4zA1PrDxGogna2eYY48JtEjAFtpgPJmXZNt5qnBrdFsfEnBX3q8ufU",
  "key24": "4oEaET6CTG3qnWgTqp6UnvphgUXocLabv3RYN8dWogV2dSch4sbTjRtpiq8AS648MFoFWqvHaDn6rBEfv5GZyPBP",
  "key25": "2H6yE4suy9grJgGoVCAcw2ussTZrojjEVUjnhNZWJCAKqf3ANem7SP4BS91KekiijnkefVRZFg1VLFQ8cF9HJ1vf",
  "key26": "428ofzim4yEbjm848Amni1rC8z5BH3ckQAGAWMvANxqnr9deuxfrPR9h6hKmLgWokHhvJ5Gz46MT4ALrZFcKTM3W",
  "key27": "5HW6FpG9rb7TCHWPfjFRLWsBfHVcEaKZ5rvmJgCvjb1hjoxjmFpa2iw3jdUWVhp16b47VT2LwywAqoM385zkouPL",
  "key28": "vBugoWHMk1W2GrMQumXDeSBgE7Yjsv1U9Au35xHjHYCJ7QsXkMTqntfZgDCzGSf5LUDf5fzZoK7PYQJadLmPChg",
  "key29": "eWZJP2kQufgG5GZFUAJYGRNy11TdR2qJCEbDnDVnDNxzzcarBRbTjAoovdm7y1gAx64qMLhuXJbJkWBDBQt6DsF",
  "key30": "4S9nFss99RdCaDHYtqraVED77UpsbjrY1MaRnspft2SZnYDXs1nExYmZ7aY8FkHey35TwoC6pvCEx4znodeyWP9m",
  "key31": "3HL8WNvj6uHTWM13iwyuEYRuXpfrpHQ1e18QyacoVD4J9zCUEsqyUKybyzcoqihxzm2RQVioaYXcv5HH1UyGMuut",
  "key32": "5TMVqpL679irBfwc3bpdTZaJkkitJv3NJCetU4LVTU9HJcohMNsb1KmBKZH3KNCQzY8S7S9CbwBrCx1VYodS8TPh"
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
