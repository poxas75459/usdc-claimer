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
    "pCxhgt4joa6qw2R1t9unm7xbCrnmmArdgM7wmjimtX9py8AinpppnyjL1uiP6pqGqBq32ZCBdUYG1f3KagHeubN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRoTPQwR2KmVrHCewVSBv8K5ZkQ72F9Kee92f5oKxbZ9GQGFWcE7qCmrkcRQJU8AJ3X6FKxr1XYCTfSyNHwSzt6",
  "key1": "2AdYMy1ZWPbBoiy7YSf3oVi2BpbrMyn1fS7C9sJPiKMwzpzUz9MweBHoC9879t7FxzcVvzEnXYHww2Dstmz1JSup",
  "key2": "TVFgbUtrumNQx7fYaMTHYaE9dsNLzt8DUCYE9SqHaA5vQ8qKxsemkm8m7NLBhwtGT4P3LYcGbqzA8yEMfMPREKV",
  "key3": "3WVeKmzkRWozaUqzJZbzk1z24JjX4nn8UvMScwygmV69Wsuiwh2jrVWDTBzgsL2V5hBR6yTkZhrcvULgKLUYfG3p",
  "key4": "4YyqwpQKuuuWZe7uufbYr7sbhEFZtbB3tcbLCzHoodr7Y7oU8QCzeCPFijkZ2iG8G2fsxkEFRvx7wEeWML3kyyKv",
  "key5": "38Hg5NnYQRB17AXCorCnLvadfgqiDK4PbBh2Go6JxfmmT7yy2YRyTJBRD49qcDCc8ViNeVQ8F1nJa4oUAMTUbPdm",
  "key6": "2Rc9eoRCtpsRZHJkq8Piw6BMQU1HH5yVS2z4TSg9V6KuBcdD64BtPwktgChkWRMPsFgNgpb8DUuX4xWTZAGtRmiP",
  "key7": "61Dbv9Se5ctRNRi5iCfEksA1DU5MDPhEq8zuTGvuajXhvuNmoBwrtkET9exaK9XAuzUVaAuyvkGyJX6PbXyj3yiT",
  "key8": "4zhZCDDjkfJBbGEkadw5YH2HRLHtqYbp9zTa8FQGuBkAzuYh6deRHe18MMLFCGUfJmbL86ezut9bfbTnuD8y8CdM",
  "key9": "2CoWK4wtP12soXbFNWp4vbM1FXK5PkZJ4PtKbsh1vsbsxPTZg9YaAPjbg4ua98GBkSSkV84HUoA7L426JoN1fsCj",
  "key10": "QuJVjmrRmFLJV2MQdZFRMRV9Lt7fgo1YU5BDVgttCxL6uA1KK9gsRXtK1PeJUcYJ5yaU3Vq49C3VL2TNoKLaQVX",
  "key11": "5dHtpeBJsvTcrrBjDH6J9N1iSGz9yfCx4CjokdApobLCZtZspXotWtBetHjyZTdXNxZZWTCfkzrWaE7gLH625t3H",
  "key12": "2DWvn8Dm3Te8dXZPHoFGSwNgoUquLNFnXHnkk3PP5VYXP9jdVtrcFzViWtYGDuaenaDEptsESmC2LwQzgjhwHko6",
  "key13": "2yJzadHkEtTdPDJvwQQEq3Sc6WuXmm26akp6zHWvrjTDNYrph2YXZEGBmdWnAjSCZrhzyFxcsM46uYeksnrP39ET",
  "key14": "2Ro8anCoQwfBJvx1TeeTuiPpxAJbqeG2GLCtq6WZUBRjSVgJxzKnCqcjF9dipL5qe3BcEDB59koJHUnZW11uwwo3",
  "key15": "5ENtidtTAsaKV7anoecxe7MC34s1JcRwx4m98785YYAMrPYYottTKmcTuaYmEJi6Whg1ty4dnFbiZYB1NCw1HofM",
  "key16": "55JfXqcjhYyC8feQcC4roJqtKNvBRFGqaHgMDMvKphMkDmcZmXyPDjh7oNnR463gGrzwbXhUrMTsmV7JrGuf4NXs",
  "key17": "241xJXSCdH4Z83BbYVZthaU9y3QzWJN1z51aNySZ971cRH3x8399xzHSFx7dws79Qc7QUjEH3QtUqFdLwhDTMPrK",
  "key18": "5ttmMqySoeAieec3LCfTw5LC2isxzdb8ViD1EikJngLKzbTyMR4oVN5X2j3VjWUmJUVCZbQaiKwYXvDxu7AJ4tsA",
  "key19": "4gC3P6t5oCdj8pUdYySGCE8RkogsdUVQAKVYMUy3hDtQuuLuJvTVdzttnnz8KqSo35n4ryUGet6rLqxCn9KTqaRi",
  "key20": "2L5SxkEeGgpZ4iCTbHGoUzuwbMeFeWM4LSPPw9wGKxYCEKWJCEZVkDeGHkQkKio4LWVzbnkEZb4u4S6akthqBVJV",
  "key21": "5ZoxHuD3PXQZdpQyhdJrD6AjjSsTsB6UYe4nG3CqYxHpuTEnebAzDJauSTjGZfqzLoyVP2QbqzWLDzVfbnypCFGu",
  "key22": "4KNHZDQC2Kq8mpmTAEDDNikEKz3HqxskDbun2Bs2CEA7GLAiEgLo6sjyTR51XeS1NtkAGFKGAawWKregB58zUB5b",
  "key23": "3GSvw2FxNrktdndwPfVzzDyi6zVnP9ES7czxGDhGgvzTwR8GhoUHFbpUGCNpnhk6g9wdijxxkaVpE5h9X86i2JtC",
  "key24": "452zrQpzba2JGEH38wtw5U656H9zkChYwLirDWhJcDVNzLTjKvt2Rcum5u4335SPJcaLvxhq3Nyhq88KfK1GUfu2",
  "key25": "3tFU7eKCuGWXT9jouHQAb5Bn23UhiAF47cU3MNTjdN5VgzLeRu3NJ5GjH49fKVepXVf7YrNSVmib42JtRrnBGHV3",
  "key26": "n5wSbmrjYFPF9uREhdn2dwxkCZ6f6DzLP2Ps1TRifWaUF3togSapDxLUncvVSzhSF8GrV6sQw9HShi8fezW5yMk",
  "key27": "515GiV9x6RzyeiSQHctBAPcVsdCoFFVVRsvkdLZrrrYbxjGtUFPvdPhoP443QDssXehR6nGEBhYyVvaF2NTY2AHN"
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
