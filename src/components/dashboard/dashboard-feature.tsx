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
    "dBY81fHNfkpkWQjbacqwwTUTSF9TghLDkKMFng4Bgr5srPwzxzXT29cL5gjtcKrZxVTpsCjxSmC1APMfnyaBVxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25VY92o4RxArhnhuCoQMkRaVnSgSUkxFtTvrN6fHe4QTCkFHD1zDwbgPBtvXVpoNrfBrgD3xkjxvmHySiTfJdyVG",
  "key1": "3voKcZY6Ku1uEwbwYw3gVEYDaNWH1YgwGPmmFq2sCpssvftLAmx4BYT8qQVGTxpG5jsTjhgEz5KtxA8odMqkh6j8",
  "key2": "2PMe8g57m1KkHZrdrM48fEN4TTrz7qjqSLETnGfNSNk6NzoppEXQNhkbJuHcAMeML3PVerKEPtGdvPLygbGk7gUs",
  "key3": "25MLAyB9tZ94udyjKZWZCAYWnARu6qQQxvsh86dF4U8A1QWfGfb7DRuXzybAzGnPDZgBqssHqh2QFfpe2TgVsenb",
  "key4": "bnJ3vNAqcFXx7UjVB7M8sHzgmT57yBBLovtT9BrLZYmjiajMZFR7EvwJk8FzJbXmibitU9j8TRvfMPyvUBLiTMi",
  "key5": "4JgheuiGYngWCcRDSiVo5wfSYFTRqV5Q3UnBP2MXpsp12xYWeXrzHstpBv8pYzHZh6X2VRC4zMnKW8n9hCKPF77v",
  "key6": "2z1XsdXKJBmNJTx67cyJW2ZTyvTZjZDSrhMZmnN9YKE4in1JTc31SRjXEQQuG6BjXQn1g8h1rCNLjB8zHBqY27ur",
  "key7": "8uovHN7ZJvJUnzBi5zMSr5W95TJYTuPQGYjLKp6aBrdBs598SghYxeHYsTpaUaiuKfWuSc4o69qntWzKuRRfGmX",
  "key8": "4MPfmRHQbV97NQc3jWc2XyL38V543VLbgzNTHysMoY4DVCbC71TDpY7TsKZPWAPzBgAirvyeh6vLNjXoxi95k6EB",
  "key9": "prpssTRMjFxkVucR5N9kapSMgYXZy6wjErqJsBSDnmwZBR7X9LNFpooMPTN32So5a2E6a9bDBJt7TPSqhY86znC",
  "key10": "4LsX8LvGf9KRiDa5QPnFRWGzRAPTmT1DJk2WZvRJa1VfYpZ8PL4bWqzoLJ56K2W1VRHW3AvgHs3K4dPiJERBQDY",
  "key11": "4xKGYyxPMk8wBbwMxfNmwEbPrgZ3NrNi8ir9RCqTY45ZDeq5Rs5XVJKG6UPQi3u5vu2H6C1sAdWANGMD2REFHvM8",
  "key12": "4MtcdPhg9YWsNL5uDYCUBynB6eNDuxc56GGEuW68vd42eCe6j3hMMrW3WubpBzfycvDnSyqmGTavcGrcnB38cghp",
  "key13": "4it1WsRz1ibLbrMqVKwfs7nKKwwfEVkSTjEroARUjXiAojeB271aMMX3wE65hvdrviTiuqh7LjgNMbuLnrgTzFHW",
  "key14": "fnghqqGN6YZCTVNV7JSbQKJjPfmcmreK8jn9zJggc1mkj8k5BUMNscZmUdVmb8mAN7ghwP2kmquybMAknkPwqBd",
  "key15": "2W1PxguoznJkiJg5oYZDrN53EiJVzrQM8zs5yfPdPVFUvXgpWdPkTuPp3GFEV3bLneK7B6SnjTeeu8yidTrXxmqY",
  "key16": "4QJDrBwckwYeMCmRGtrWz2h9g25LVQ8q991LsVWd6bxS5nj4N4BGzo5arvzxFvMitLwtRD8VJUPhmwyuCak5aJPv",
  "key17": "4rwqoqAUGSqwSqd5CS1nWiGndRLPXC1W4wCrYi1C5MxJugC1GyXVNvYaG9B1gKXxq3oBDK7cDXyMVc5W4DiAbvWL",
  "key18": "jgdJ3LBJpQL9ufJSa46o5Xv9rKq13YKkJ7H9tFQtcYcGG9YUUeBbM7xjT31kJZ4riUpgK6grFztYyKcUv7amAQ9",
  "key19": "3USUyQegCzPvmaWCLyMExfPCvfhG6RqU89wEco8rs3dNenKPdv14MSKRi4Cx1G9LvxuBeqSUUP2hErbPQAdSNAwR",
  "key20": "4ZLBH2xxjtoepsYFkfZ5n6rRvdmneWj66bi8o4aLST9xDr5ZrkA5GMN36goZHxTkoM8R5qT57R8gHs764rNNMkMe",
  "key21": "5CEyPtc5KFCPd4wA4YKf51CqAir7aFZfut7Z5Uu6TRFvqYus4DRNiLvWUbWQjkR2Wb24qKbd32ngizQ4v3CHBYa1",
  "key22": "3H6q3jwvGYugtPrcN1v3SLHnkJP4QKj5dbhsPgsKDtjp1tSPsB2Wvp7YSHGHb5bQxxsoXShhfTwwmF2gW6htFGC4",
  "key23": "3eNbKimMzeejxzGjipX6soa94yN8V7Ex8sVpT864rAFS6AGZpvB4krRPw9uHcBD4tdbjQwSHkxuTUAFww8sPBzjk",
  "key24": "5Gbenniciaohw1oSAUdSYRy7udjBT9mzz1hXmY7iNpHyHwi5WAxsEaKZ6ztdUpMTdQSzvqpn2N2XpDKVjTiUfe34"
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
