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
    "3ht6fuFZcnWhX3wzMQJDwtdgwC5YZ2STUCTNNZRu7w9X4gwtAz1H11v4rHzEH2eo7XNScFWxJf8ko6EfSUj9NB1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31K7wD5WrTxEVzPc92aqUCRtxtPvnCDHZdRfC37VgYwSj2Xc1B6VF612uidcmz2ufP8gTrkX9BKbFmCQc3MTxB3q",
  "key1": "21kxNzVpnmmtdkMLUJjnFUwUSmZVEryK7mXaGofCyB346sCpvoYq56T6o7xH1HTN7H3GuTMaLXEkFnFzNAh5daCN",
  "key2": "5V5kq3RrDyMPCmsvUD7gwkqW28jBsNhDnn872AGJttbzhsSQeQ7qsAigxFWFpA9VTzLSyoHJ2zYs4hasHV2UDYxp",
  "key3": "4iPcZ4XW5h3QpSkedKCutfiJ8GHLCELawqqAEPUc1DZMC2zaDi63eSCQeKqZzPWD6kDanBYuyj76q9kQq7vuWzBd",
  "key4": "2ZhRv6L42EkdGGGRDuj46shyvkK7Ck5mf1bru7nQcYgaE4wMiRRqHr4sisfWiNT1sj2AJS31mKxnPpakbMVSYAvg",
  "key5": "49LocZ4C6fAa9BHKqxKdTW516xG8P2CEg6qgkcjD2Vb5RQjJxVVVeWVn8pTxNBTbkdpivLybkVfEYwUuV8T39HRp",
  "key6": "23bMVfHJnP65EKE6nz26FAVCaDjyDH2EJwgX9tqWGcunkuG5hsFYvsDbwVvPuMY5tGi7zDNNwJ2R65YjN5rFRBN8",
  "key7": "4Woha2o15CchiG6BbuG3EZP5NyVPac4HN5TVfjFcXhxXi2Ud8QNeSxjYhTNPeApQTW3WCTWiaXby5oGAwnz3wQuZ",
  "key8": "22ANQk7uEZxQChibUvX5mQZnYpKGxxWZqvT9UZ994CTabbA2guQ1WHpHyFoyVfzQKQ9AUHfDFU8AC1iwpEXPZWss",
  "key9": "99TJJNocAR9ngd3Y46B4c1htBgT8DttEFeRL4qqgmejh7WeEeXd9GTCgp2GUwregHw1qVfTfp4WUamVRj9pRd4z",
  "key10": "268Z1geq6Tn1eYLtcTfXzEyQCD6h65nBoYEzGMdp75L3fujCsqpvRov6X1FyT1YFcyKxRDMJ7mbPX9igvtLmjYhu",
  "key11": "29NwokMyWCuSAsvc278rPTgURHwCf2Hh61uVdpf818izidHiQqMKSqi1yF4ihFqxQy48bWpCMScEEj4r1fFZbrCP",
  "key12": "3hycafRtSNdEijbhvdoXebr2zP3PKYHT5LykUb5CGbiDfBZKycL2xRygK6CNAVVm4PNvhQU1ADSG4BAJcTydoyz",
  "key13": "J23duMCqontxNZGeNbrhSWuvgoLgJh37x7ozHKGiqwRnn6AMfntQgmyk5HZDTcJNKxk4Z7XQ3C8DribDJYBKnSy",
  "key14": "2BxGNz9WSxhhh4zJhGrJ9x4xonSUYWSUw6uKyzZ9M7zS9j9BTiLtLnwmXSzPVKN1qukyo6TKa6Bwa7tMTERdfdvY",
  "key15": "2vE4Pw2pG5h9cPNbzDZd2MQwmNK5vYnqjTXp7RFisGxV2dA72524SdSqgtaC35zP6rty4PsCTRWxwND6MF746NEv",
  "key16": "5HF3N5fSndQJrMJz3y2cjEHMrQxrBWJjYbHHGY2nqDqDjngc8Gy6qa1mhawsbjmLiYcK7DLaDW3EmczuiR8t6ZTR",
  "key17": "61bw729tJ5ohX1RXfy9hBcGALaoQtrWe5zKJPnR44cZfsHNNAxzfYtZGmgr2XchimXhx2YxsHvW1C6KbdY6K7epG",
  "key18": "323WvRyvUz5M5swJKXv6QNPbPpKaEzkDruzg7miRP6Ln7ohmUq24DEKfqByZWkZuTuaUsy7YeV25k7uQHMxnYfmY",
  "key19": "5pFP38yaUXFqPzMnNjAYrbMS1bhnGmNnjg1yhxRatgihXMf8DHJgnuSHhDouknp7zEKE94qx1DwinSGGVo65rCrd",
  "key20": "33oxx5ukwwew9GDYnr9EbfzMuGzNX3og1aEcxfLU4AEB6LgfW91mJdVeQRLy9wbpvPreu4NoXLXReH65zWKZWEbB",
  "key21": "cQF49LiS7Atex668dkMyZSx8xUo6NABXVeH2aURzbzoSYeABpK3kwSyEUwykgP7GdqbBdZjemi3iWbYWwLsBzNt",
  "key22": "3pQTvSQuMj83MsUoVb4Axx3rEa49WhVWkqacadf2pFiXD2U2G8U8ayBxvLFFGqnkrZCWh7swv2Wq6YZKrTREp5Aw",
  "key23": "26oA6hrZdSCPbTnnyQUP9BsPFy5rJob6fvPdjkTfes6UX4U4YsZ7EMrhGfqWzEhbA3knLxsXSrjtFAeC45yKtCcx",
  "key24": "42WCFQPCw279ePvN5mi7ghvnGoxDbVSkmNrrgn7bJc3Pefvj694YhbZPLhxFfQR5C9wjxrWTMsHrURNyaaqfZ2xc",
  "key25": "2phs6jwXhjyXHChkeS1DDzBiEq94UxVFZL8femWQP6MxFiSs99y3ywjTnQzpsTawGLJciom8GwBqvMgQYtCo6HXW",
  "key26": "3LKVU14eKPx7Dk4tMt4rY8CdsanSjfRaUiu2NX6ryJbPDin5E88iwUc3QcsuH2jwDKfcSTKBTSkFc9wJoNVDLxqf",
  "key27": "22ypoXruYxkLcMktfmBX7RPYunmCVsg7zXDFx1C3EV2yQvqF4V5vLjoJKCMuXhowQyNUu2DsRKSadY5NvjptCmd9"
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
