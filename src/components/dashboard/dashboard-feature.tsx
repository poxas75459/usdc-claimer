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
    "3ZV8zQK4xfqTwYTDkdYY8WZKn7JawYLx2mRLRbD5Psicn6sXnqkTdwUvABq5EU65oPjBHUUquxPZGWnFWBcAZDvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8Zovg6JAdbD3mk9EBZX378ANFaWRKS99GSwnYShrhShAR4DWyxH68864Gkc2KcpcxcAupdEdNzd1JeCjkXWLxE",
  "key1": "2MAZNTt1uLq2qfcgFcYHkV46VRVx4u6sfb2xDCoV3J87C2b2gFo1Nf3VmhHxyHZEyAfzzwMQHgxpzRu51fCBhHnQ",
  "key2": "4QTawk5VmhGU4PkGp9NggEbYGPNTBGiwXhWwVbJTK4W46SFyuD357TK1eRyvgXqLVFPYHrY8xo25p6ou5TJwUFpa",
  "key3": "3tC91HRf4PwSGXSmuGTPxJJdhF1jNiTdcy9vxar1xobiaQNsYDTusSJt95HVo2CYMBPEPu8LSJeTdnEk4UV4ZY4i",
  "key4": "39zrinAUn6AAgYVs1psC7cFUNn1Y1gGs5CWE8tbe4P7xcHtW3MBDfv5tHh6aRF4m7K3t51FDboC3j7AZcCQapyrJ",
  "key5": "ViNnWYdQRJzHcemtNyyRuAQc4UMdjcNu6HpMJvMmYRNtf514MW2bnTBvmqaRdCQiJ4fDm6DDTYQnWCuBoBQfF4b",
  "key6": "2tjNMkAgCgzysco1oV8uZHSCz498WxenHNhopwiTg5WWXFP9iF3uaaz52a86pwUtb4MY3ghYqVoaZCQuxym5LqE7",
  "key7": "BG6Dc8et2e84rfX24xVRYNByR5t5q966kNsprwQpwQ2tbqrNhnCokY1a5NeAgzVbf15Vn6pR6bfq6HMBCub5D8Q",
  "key8": "2NVaxsvhWCfNcVAieM1HTNfEdCQDHngUZikzAwwZjhAPafM7KA4bXSXWLK3ojpnPLRXrQP2FtWbtno1atjHMbRfV",
  "key9": "3L5AAUqahxAzbK27kxjswd4CyHtwjRUvmS2Dtbu4CUWapM9sTtHnzTZwwc41F4mUn7sUQuPDg3fKxWCigCMx1juk",
  "key10": "s3pAMFRfhmWxgKYREFdWMs4A21kqAsu7WWB3C3wLbq7F7RMogWSNbQSAzb9Fu5Z9TDrhkC8HdHZDsUsZT3VHUQG",
  "key11": "2cBbziGMLdyn48FDSzXzs7JRU32xK4FAptxi6CCiA3R5VkMrvptZTQzR9eqoDX4QdYrZctbFwP5ePd7hZcZVZ77G",
  "key12": "5qmxz4wpTUKGjssL6p9Qf55rSUL2JyQXx9ZY1kvjpp4mLG5ZxZrtHNvhnAzeut1HbFQJAnoYUXnNreZb34u6a7sG",
  "key13": "5kZTu5aHAgCadcM7vAUfNzkgt8mzZ8yhFqv1r1FFNCJBtivkmWvxRzcM4rgqiteZCehhmEVnLz8w5kYmjtxiFt6y",
  "key14": "391LwYUqtzUQDdTqH5FSnm81s1cPz8CThCNZtq1BKVBrbMgfaoRV3cBjnDaFwabqxTwjNjh9bJ2gs5Wr3xeGia8x",
  "key15": "437c7n7QyxPAKxJZvqi2V9sxvmz3vGmzDx3DCzKCmGqpTB8YsLDnDMqQtN5U7nsdXwLvtZwH4zRw2RLJGjMDVcvE",
  "key16": "iN3FGBvjNenYP4tiVLBs6Qrkcg1RY44TnrhLrjaBWksVDLB8RzE2J9fgLCH48YWJrzrEBDpfwjPdJdtZZsyJqUe",
  "key17": "5eiyigVjKszU4WcGvVpvc5KdpBkfiUUAcqNVBdCcHPiCJ73s8uzaM88ndoXwZs9Csw3sr5woyEx9imEsUrubkELb",
  "key18": "2Cd2Tdn5MfFyEGoXPmW1SpSGF1JpPvWptCte6zLvUxbrFVZamBnMhNYr4nLb3e1hCZfMCCcV4Zg4GZCFQLakZm6q",
  "key19": "4jhzse1E2Qu9VmC3wtHUG4bYgCEe1tejhfj4rcmWMMY4dZeDB4wjCYvtNiie5yvA8PjvixLirQA1Vnv51E2Kk6qq",
  "key20": "3sBGrUBUkpa1F4x7LWj2fGZS42VbhtsrmQZyP2piQAQge32G1VBp1ry3qM7m3hQS3nfHEwmDxREpibDKwLHYQcro",
  "key21": "52F3LiUgPvgKnsX5hEfMKJQpEJ99s4H8cyx5MnTmHardFAdxDQk12fRVVYK3YH3JshGe4RFz6Nxjf9xE1fftNQwB",
  "key22": "4sNTTdaNTXiqN1fuYrLJTAWw8nW1wJF1EoG5iGcqV3SgpjeyXiSZCoVE3cb2gaakkDRxqq9p8AsNmWrF8yDSarDP",
  "key23": "2tVeqZ1K3vB9pUUEJs4jHXq4m6zHzDEeTpuViEp8k1yoeKDbFP9wYntRv4cEDAqztnmLxdRJyAy9djhvo2thaNyQ",
  "key24": "KnSwdZv1mPxP3FF9aMJBHtUPtRQf7G2EL3cb3nJsMszmZkN5mWWEwZT8AixBgxWPkQ3TwgGu5qP5LZvePhy1M4i",
  "key25": "vvaRtRsS9EgERhtSbdvaY3fCzWm87eYG1Np9XN9g3UhjR51AE3HY6mt9LwLqQS4pa6nhhWhm5pFQnKFheQqfVtN",
  "key26": "9PpnPJww2QSeNRon8ruf7JCNJno7fKMgcFmFF5V4psCAUwgG6rAXH9rdotUNZk4aJVSonYKD1hFksFZc4wcxCA9"
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
