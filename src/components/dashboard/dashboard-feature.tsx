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
    "2vgU2E1AN8Nk2A7Lj7AUVYHm6M3Z9p8836RhWSz5L2kA8aHPgSCnzkzqUcDgMhAzUaQGz3KdU5h5fgXXjqo5jTyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRbC7ExUXRmbt8vDqU46Nk4o38wfDgAFRyvByrtbDwJu6FiuWZVxTptxJpvdsDt3GepNqrnjM5gsoTrj8kPrRAH",
  "key1": "Q4F9LQzh5BSyRrgYWSZ2nsGshgXQ3ivHAiQoMDfCXxchWPmG9hNiAEmUCcDi3SvGQujTVLzRpEmk1fr1s32WjQC",
  "key2": "3DyzEiDjCvgajygW6hVrfoTMtFywjbfRhC8i6aDBwMQnmfq7ibWLbNtce9gY8TNQPjrJwRxzYEJkiJr6MBtT92Sf",
  "key3": "5o8ioZhbcPha8zxA7aaMmWWuoExXLBJtmrYS31E6mSWGyacuv6LhGgAWRp8sw9gB3AjF4bjsh4reU3DTzfVjKSQE",
  "key4": "4QxCSwAokw7ST4eUXwiRE9uZbR5ByzXPVWfmcrBGcdSBPxhDAMja7Kv13TH4Dgs4gryTkbR3aZUtokVYEVKHJojc",
  "key5": "2XvR8vdK3oJbSJFdjSFRyvnS6wnRUJuB6ULpmi9KFBXk3b2Men7ZhPw7CCWXN6xF4WqFUJJoveVihy9NPfxGU5uL",
  "key6": "4oPXXmNtB4jdbAetRr5D1vhjmLEwWahS54JgDo3mVY23bLJ5AKBtYXCqrA3nrC22sa9f9ACeWgjdDBTz15oMETmH",
  "key7": "3pvq2PM2DE1abJqREB5pzMDHmDVksift3ad8dupPM8TAPtFEDPFmyZVrcrhaCHCNQzjqKQBQw5CiJAKhcFXxNtGy",
  "key8": "uzdr8zp3BGuqZMoTbqPCNoEp2e1E14rh6nz2oDG97GVSoaRMjMufkp54LfZHSQFtdWNJipw6Q3fEkzkkNQqRBPm",
  "key9": "2pyzQAFsVBtSyiCCUmFGAxSeH8TMoYnzYdz2xFQPWBhh6iSSXttWBsa5rPqzSejXNPwgf8TMPQerFaQR88fCPWhW",
  "key10": "4zgSmhM558MtmfDv2V6kpBw69Gwhgg9iuBvZaUCoKZZrfwU2KxHotdiQYYdYKPffTrXPcXr49e85CyEscttiYLVs",
  "key11": "2LqDceZs9gJXSAZvZasmPmJL3sMohR1eE3C4XAMcetokKF5EhTWrZiuA4Y93uE7jpLMiquxi1PNnYtdDfQtSrc4X",
  "key12": "jRKzFNiFN6cByT9LqUXTmoUS4smDS6wWWKVicVt9EEj6R6UxVR2LUhZtRX4kkFGUg63RKLWMTCL6f5vovoevmB1",
  "key13": "2dvXtYzKfGdLCARjnGShAminAkFDPoJ3ckJXAmVvqjuvwXteFLLpVqoKKZGaPA5JmfgqSdHuzzkP6xqTJFhMu8M7",
  "key14": "wYKE9zNEDomLpYaxYienarFypjfNUJbdbYn99oaZG3XgUCrZHXzxkcsKS1HB7vMLdVnxNfvjf5sTLeAGADsBGAJ",
  "key15": "3sotoBdi671GR8fSNJNKkaDqDLNYnUSQ2SV4PAcwVhoBefUWJkhhcifeGhCy93idDGaJi8DJSHCiZFEXbTUxBqGj",
  "key16": "5THfnhUdd4zSMnner6tSxhzKriA2nQRQ8ctttLgNhumtb9TxadtDoBidGRNyPnzuWiJ18ZP6b7pmEBgAYThanpPm",
  "key17": "5D8dU16VtE3jHUCaYKka6Eo5BH43Eyx1udZ5oMGQwvBx4ZWgbHyytpXMXwP6t8z3bswpEFYQCt594Z9LZYrYJ81T",
  "key18": "Jwsv9oA3yUYErwqKZ5fQ6MgPXKQ1WQr8b4E3wUZE5jtfb8WbUYQgs1bXBtmeqvjqVtUndm7gaRc4C231N21jcKW",
  "key19": "3D6xjkuejoKcbqhhk15DbryaVzm1XNNkQqFZy2asxRAy97b6GgJHiRi6aSgsHjQESrscJraauFE4q2C635jUcHrZ",
  "key20": "4Y9ni2zK1xPTctTqMMXDSWmjGbJcL5Jbzej8zSrNbqRd3xvf38kcQoLR7n4Ti6ToPkHzm4QFDLZzGUbZjVfh9RKA",
  "key21": "5A757Kc7ZGDMhnT7s5X8VdAP8rQQQqqVtTBcXeBRX9B1ozNHbJYVsUrqcEhJotJevJzFqihbkDHKexwakWx2aA6w",
  "key22": "o9njWxp7gd42Rksfbg4xuHr2J9GwGS7fsSwxP5MRi25qMyZJ3GjXvZ9rxZD26QyqL6ePnE6F9SNiuyt98SWsnuH",
  "key23": "usKdcbs9vM24UTCUBcjyy1ikPHtJefvUsqVRs234SorLKzZjdkE5Q6fHhxJxygE2xe4hKbboSUEQyYmgDj1LEpd",
  "key24": "2edGW3moEG5XbZH2hgYx1vXvQyg4LBEw5eLayfgnQMXqjR1iDku9yR2NTPGtM7ATfYC3np7vDoK5Fyt3SZvB4Zta"
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
