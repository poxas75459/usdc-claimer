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
    "4Cu5uteF3oTpA4wdYNqWiN4b7T2Aze2o9xA9uGSUsStmdkho4AfVfa1LGiwdP4CEDbewDmkXfjm8FrS2AVLgtVuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D41dQY8F75GQHrCHFaPgFF1jPy4ciHSaRNyEcPanLhm2Y2DS4aq9XwzG2by7aHDXnPASmHEdx4hqNLiMbNnULTt",
  "key1": "3FzRQQYYe6JuTcne3Kav9EGswAZqgrsFf5ynm9qscjF1PrzxTAj43Mnm3qVTkF9AvfstdMsSWZnSed71ffv5XsMt",
  "key2": "3qU6o5a7gw3HBtJuX9WcFzGqD2zaXdvn9YqN6ma1hjZKrCsPDwi7u9T6ZqprVQaU1HnaLRRUosWfNjcwW9AdnoW5",
  "key3": "5Ecng1AmLPS7KpiwjPDJGLT5nPb3VUXfrAUEEtZZZtjEiauGCQwnjoEMqiKTPieCyH6oMv5oU8Wz9oGXJm7XFXz1",
  "key4": "5sPfZxtCk4BShjQY9wtXekhQdVUaWcLtLdHzBTcYprUrbQzCfc5MPNeoLihjjcSJ1vSJiDGPnvbJc4HL4tuhFYx4",
  "key5": "4Ev65R8L1JVhUwHwLJ2fYDWtLb6nnVWkG7RyNz4C5zvJpiXxiuCpNWc8EgD8PXJ89XWNJXSAWuQKDqJSq5npU1Qu",
  "key6": "2AjThrn6tsVHP86ePsaTGHS488q7AAhsor6nicFLSCoMt7QpXtwTgjin6LN98coRbvsFGs2qfBDhYpchjsbK2HRZ",
  "key7": "4Duir5gKWvf9FVaxnWzvR1crNAA9Wdfp4brDWqRfQ3mwNRAMVtDpBJLuY1XhxAY5PqJ24eoizAimT2PfjZVvcp2w",
  "key8": "4VW6YKisLuB5G8VYUK32E2SXD1HFHcoRUqKwvGkXbuHc3QyWMAU82iDKnpo8HAEsDW26ReBQAyRfzidubsZvvLSH",
  "key9": "5Mxjq4HxStJoE5TB2m5MGvEbqWdTWer3Fhpp9ezyLGAy2mFvDUe4Ti61mTYXJ3NKMwC3xixpwrA5zitjh7KyYkGU",
  "key10": "4DCv8mqNDvxTNt3th8hPbnWsAJM8KeSDiHmUbp8CPtWW82UDQHrXNZCiZsrmF2ht7butTtQeEnjKQRkoBSiVRiRC",
  "key11": "5q1vmqv5GRViTVf3jqZJbXmzN9VZzRoiRpBYn3Eot8EuSoKkn487AsQKivZwfcoK4fCaR3PvUt9Tr33spNhi3BwN",
  "key12": "2EVSSgkTfBTMtgmdpPT56HLnRXympGT6xzGjAYuNfV5SpYm3pQ6skk6XogVeatsXwgxJBTLHuiM8vQbPUm8NhFRs",
  "key13": "4VRcHpjLQ8E2TwqAUoZMLtWBc5UWtgwoWTA1jkCCS2cELLqh9s4ozC2y7zt5hmmbjyRojrrXYWKVDBPSjKpXiKDm",
  "key14": "22CvjrJuZwW5sCJWsx3oCvDpk3mYM33xxcyrFsovHNrH4gZCZP9ffBavLYmKMauJM7mnCkqUE9EDVpqxLF6SustV",
  "key15": "3NYQ4QU3cRefgZNN28wuSKNJBUWxnbNDrjpTqQSPzRAzPNQRF7q44ykppiHinagXjMkMUfvd6uycq7gHsmmpq9VZ",
  "key16": "5Lobkf1KH3AEis9z9o7JB4DUsXXi9JoPFf5vkcYvw1i5gMHLZnLkBqSZfBoXYyocqnToT6NptFjLcniFpuSG5ncV",
  "key17": "jxfAhpWjq1sSASLkamJFtqzsTE36LCF1gM88bQvZ3ATe3dz86diNz7ZDPbxncTxsMpjBHzchDNcFdQESiRSYJ1K",
  "key18": "4zSG78VsjT5sT9GJhc5CSUpHdsAfRmYpRkj1EQ9a1AQ7J3gksPSGksVxjXpKrbdRVR2CuzBVTNFWZqNiNBtwFfXz",
  "key19": "3VQxt4H67hNJ6wVJjxzA5Kw1DKTAAGsFWo52fVz9u5Zdk3wer6NShbT3Y8GfodjFWEi576fyWFY9Lz6H29fssu2g",
  "key20": "qoEWE4nZrMbFzJnxGR4BBneeuXY3iim4bviRqjthSry4MWLQKTvypb46MsUW7V4w29TpyXAotGzL3QhHYdkK9vP",
  "key21": "259H8b41HgAY2NtgxSJrztAJAa97oACqBbpi9yW4Ajs9FY5T8sngeraaGgEfEpJwmS83HQj1cEvn3W7EbzQkovT1",
  "key22": "4jGwgVGNHPPTJekY9YBkkx6B4GEULrJGUKWdLaynd4PXLhFzU1g9S6erUPhN1G5QNEdFiL4DvY2mezJxZPsBLiQ1",
  "key23": "4rBstwnmHJUdYoGe2AwA3kefiLs6z4PijUMXotzGwd4nuNnuy9au3qevB2iVwupnkGSCbutDBKahapPc6rqYa343",
  "key24": "2np4G58WR42HyJH9617QfnacMBf5fmUR6oRpdTWpMUTGpPvGmqvVkLRdNawgeEoWJ7YNHPHDUsenFwcHZ6BCj1J8",
  "key25": "FB1o1LYx6SRspjb8SrmuKWvDxr12sr1b5UgfSkaMS6heXozCixKmSMqvF8NgX14PPFNkWzqp3pNojRTmV7wfS54",
  "key26": "2T1rrqfhwuS7DQoKQ5NYiLa2gYijq3X8jwAcANCVx46unrYzo73ruvhRMpWVwuwGeAxCbEkXaogmTyiavV79yZeX",
  "key27": "2WEjUogedTQVWqG7JVS5G1c4GJyB4MVoym4j7k81hy2nF7NKoC8ejCUcH8eNmCLhEYSn6BzPcnYme3R16EAheKoQ",
  "key28": "37ZgRs2aPVwFhrPZqratxWECR8BpaSfka4A7N1WYgJK6Vf5S6y8SzxiiPZiiZtXF24N9AhuMn2jNg3z7q7khAdnL",
  "key29": "3NAaH3R1p5mmhqBZ6eAj7p8VB6G99aJW5kQGXv5jNWQUE7aUFq8ziiYzod8F3ZAhfytrnWs8hBJdQxfQdPnbpEdB",
  "key30": "tMALfSBfJUoReQwNdoRYMT8UMh3A7WNHSd7bnauj7hw6Fc3t6R9LQpxpt6kb175Kianw5VJveMSmumbUuisLkhe",
  "key31": "451hyf72xz1cv8aTSQTgDpQmopSHzwLhqMpEQSC5d5yMcq4CDNCp6JtLkVYZio9RzZFnWxPW3eHed4WGS34hjSAY",
  "key32": "4ictpNQMSbKe9hyzX15CT6i1uBzrSMSji3ZSG9zkYj1eSRBspqJKXwqEcVPfLo7CtgqF7Gu9JfmSfJJPVUjo1i4r",
  "key33": "S8uvWr5gvG95sM2ERsTxE4nKau71yTFUhEaewZPxhSwYu9nT7mrzxMFt328jSN8cGS4w34sNcPEyv9dberLPafb",
  "key34": "3cQD4gmj8iJ62Ux7ayxK8dM1Ej9f3FxN6Y6U3XYhxjJqK6grYMVStTJMKUqyeZPJ1xiyxf2gszEj44wr9FtPuXMD"
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
