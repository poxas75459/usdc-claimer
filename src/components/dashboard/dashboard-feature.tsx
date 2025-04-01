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
    "4mEmo3VAVzfLhL4zaw2UAa4NZtNb31y2Q8kvWPWFtttovwqnvDqrH1VChCHBg3AXRyLUvZLZShfj2WCZQgAZpW6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUrXLTfXi7JATvitSEKJ2rYrkC6mEG8RxosgZLKxqSP18CUsq91aXWwnMptWoV31hureSCALAhu2kU1sENuZNdu",
  "key1": "4qG7bi1odRigZdd7TEk6x5cVqavgQ9upbwf5yhgmoCehPMBHdqjjhMd8Ax1u8MjzN4uCg9jyCeK7C9fyQE1fRNDw",
  "key2": "3KEpehDY2UxZKQr8NTodwZvaW2pufMmd73GntKJtR3WbCkVMxCWjjbwdfv3ncTx2CpQWHL3wm4NFXb7KxgJZ7y9h",
  "key3": "frHNo7BpADmZcjtA17TJpMSXgTrRCtEREx8g7Yw47xbHJgkaCS7BzBwayq3K7aHaM4s5sdfzzc9KfjwqVSfaX4o",
  "key4": "2tRewVFNtUsp96kJxSiSci2qcKvKMsT783Uk8LG127U6HXJvUw9Rof4YUu3XnF7tgxL5YeJvndAT4VL4WWneka2",
  "key5": "4T9BLkQu8T33tJUmzRLbjCZheMM4k3zjZcxrDxMapLvfWG5WPT4BSzAae63uVyKMchnX9ZhsT239KitNr8U2u27D",
  "key6": "47RmA1Weg128YFJAFmWfmSJ6CxwXNB3sJyUJ8t3ksYg9qsCddSm3t4diQ5SNdCixzsnZSqnMPP7ikMYJzNEgtNe8",
  "key7": "4ZaiDNkj8MbrBxsY1exaQXfWHsuWrQYttBsAEnsu1PEvkpnpDriX4Uqr2x3CA9J33gMjr6U1mnB9r7RAZJMHZFBs",
  "key8": "TwhLAFbeQ5H5oCa7ubEQUUEiXzN9A15hJsEZBrhSZUkP9anKiVG9SzbfyoQkd8Y53CwuV9rwiPrSwQUUS75J22Z",
  "key9": "3e2CVZamt9ZuHr13mwEGbns5nGgNLtkN2wxyinPovtyuHWvbxirV3vLJSMvEkezm9wkUyMRkzYtk8rRQypJRSxmj",
  "key10": "5nAqWsM6mmkUAN39FZk54przAvnfVkJELjCPePuxLLw3mHQWLrcLwCA3DxhPyDVBLa4h3vb6pZvY89dh1DicTQoX",
  "key11": "4qyc2NUzgpzpfmLnTa2CAF2FjDV22jLt172JW7sn41yeAnaFJrpkMg3qVshT4USz4AXWtjGgHajGzW3Ny9dULo5v",
  "key12": "3Xpjmn2HhiyMPMXm4QQwcyNtyY7arqeTqkNC7ggM2a1hm2A44UVYypBnNnMgXvGy56mFbYnUE2XHb9FQoTdJd3rQ",
  "key13": "5ix2joAYkosv8Ema6PtHCyk4eni6G1g6YXm6Z9bS3UoRfPaWWwVZed9C6NhM5GKCo3ssHSxnkm7DkB8WAePUXfbB",
  "key14": "2hRh6Ce1s5Cqexmnsq3wVstU7Jm5wLyoFBL6LeLoF726FKQGWXpK7rh5Q4huwbpzyrceDwmKiHDG1oBTqYr81b7d",
  "key15": "67PqamxhbRSbRqBjZiEp4sKi4pNjvZbj6XYBm5n2k2X9Npu1CmyCVqU3zrX6vvfEVngDWTWDmf3KjYYLbGZqqwfG",
  "key16": "3DjqkHuqv1ujchQ7nVu7RF2mciDGktLYBhspAchCny4tr1ZUzjAbcWB7VmueYvnwEwZzG7jEQkXt7NmHH13ZsqBg",
  "key17": "ava93RMakb8E7TdRo1Rc6EeaDUfZgw3rLeHLsyTx1f8QxrboNg7P5k7FcvT9ZPgRMwXRoKUGK5iJgedmkfoSJLh",
  "key18": "65qbCZwAzAP9FdazA2tNHEPzFRHCJajewuGSV9Nrq5ikotALqNK7GhbM1KBFDvdjzEx93b48pBWq32HxpvMKvErM",
  "key19": "4xmZKGHPTLt7GcYKLVTcMLfadH5C6utJWniNBUjGn1jRR4byZSi2n5nRj2agApc8z4Q6HqwupkxFWvFbLv1AvUR7",
  "key20": "aHYfgrcn5TY2feL7issLLTVzthQe6cSMJYZCfDv2tvqmMgkT6aTVqCF32TVZgrX5vBeTc4WpojoaKZ85ovfpz8s",
  "key21": "5Ta6zfvPH519sayypXJpNfXXTgKLnPQmx88tSqU4t43XfquEAq9AQXj2otHhwqGdPqs8hbsgWSWZzX2WnE5CFDk9",
  "key22": "2ZZBMgB56uShDCeHRcMpDFgaBbnfTd1K1L2AW8RqNfHn1mp3hx145sucjMRRA4FYYbZgSZak1U7m9WxxnxbgGR2L",
  "key23": "3K5cFMZyoxw9xpZ7HMKLn7BSBEJx7X1zRnobp4Fuoy2859mGGCpyeEghW2oAPbWRk3Z85q8GZ6aUR6WHExrq1Qfz",
  "key24": "2eQ4GBqKe7ic66cc7hrxJ7XEgPbCLvwF2pLcZGthMw3XivuvLBeuJFsh2ZrYw4ZRddY2JyVPiPLJESmQoys2aDbo"
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
