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
    "DQ9KTBDrtFCZv2cpJn59t1ZZS72QR2DwzmTLPaA2mwL8MdWJGAdPpZmeRFHnhL8MzynovVAdisAkKzcAvAH1jrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3AZEWwMtZMFM2PcfESdbb95nxQHPTUHGMaZJrtBxCjdPrF75pnQD75LopQhcGd7oufcFR5AL6FyoiHSvyXpJaH",
  "key1": "3K2oqWMQbGGxAngnqPvzXAr8fjpjnRSn8bWNz7qeYZT6aCVfsVVcdBuVfMban6zjSk8PADXkHYqNpXDxAwBhA459",
  "key2": "55PCJetKETEcoX4Ckobvq6XffioJ3VUXx1mTdiUSKPRX2ZMpeNTG5BL9jAFicpne2Qw3LWehkmqaSvPD6W1dJiVC",
  "key3": "3gMRoUGrEKiRee7CLkpZLQBqfrbNL5WGoBtNjcAFGq4QohLodraHzSgnG78Cqn5sfmMPCLsEh2M9a4FkEqSC5dDp",
  "key4": "345H3fxh2aMCLEQmTeQrxs5oswXM5Axh4PUrdfDe9B9wmnptJ7XpyxkypJBX7dXn79wDZhF9NRyLLLUs2KMVcwtb",
  "key5": "4wsAmLp7gNkaxkhRqJ7QAp3dqHymq9dnEr4XQDHNiFcafebrPYfhof4qNRxJgJFEzpDNWYQCpeAVdph7hQeZRB1C",
  "key6": "3pXprCnRs5YLyU9o9HVEzgdr24NbvHbQdfBN8TrsyKffyAQurdH1HsH9xhxNVtKSwrF1PA7CUDNmDsnf3KhjgRyb",
  "key7": "3zW7yMHgG55DhC87LGQL5WvupeScoMx7H7RwBY9DoXLoFasPNFHb8aWn7MtdwL5r3NW7zUnYuUipSWjTT2MjH5jU",
  "key8": "3fQ5GzDja2NN4JusUqEHGk6cW5PMKXoKTkwytZ56vGExoontTy7GBan9h9zKapWdrKbR7tTXdY9rJ3wRR1Bf6viy",
  "key9": "5G2DbL3rCk6xZhz9dTasYXRuzCDMYzXrMuuBLMaYL8CEKxLZDsKVmJj6KYeuk4JAnsxZ8p8ZfN6cuqkkmXESyX4J",
  "key10": "5bFR9HQWbx3YNrJBBvbCqrSUrRTqRjsyYTEGgjpfLtpRJ6MkwqEGUG9ZJagopXuvjaKp1xnRwKWgQ8k5KmsiWuwr",
  "key11": "654Zn9kBDrp3vaKdHjMVBrNnWytmCFwPWXcV4JrbTEtfLPbjTTefq73ah5wePcJtn8dsfWxrKYHf9puE3Hg6fFmw",
  "key12": "5a8YABXdCtfYkUHZKcTuwXvLVKGUJrXWhRu6qkDNyeRBwrbu9D6rvwferjYfMvjhdR1XUQiEHTgBQNkAC5fQ3grq",
  "key13": "wGekpe7NJsc2JYt6pSF5r1upwzmSnmaY263DPTVqbYbnY7Zk6LWyd7qnKqHgebRjfPugz13FqPD4sZvFoNdjb3U",
  "key14": "ypuwfF4JpqtJLKMBukPxHaJTztFJZ3vxWMLh975m1h2KQW1EuvhHvRAUGU8ffcnxsjmm9woUHV5ZW9HbmEpgN7n",
  "key15": "4avKPx5iL183GpvjRjUdyj8Lh8eg98JbLAhB9fyBA1EWEJoCBUqk1XwcGpTjDnS1dRLgxQ1JUVzrN1ZSfvCPDidr",
  "key16": "8PpUpfTi6Cqc8beQXgP5wKbJrP1hJKP6djJiSTGY4oNTUAeCygdLUos8uYEpwvD3CrXonkSYi7doNzRc6z2hbnj",
  "key17": "vRN8srSBVFS9hqpsUfLJ42hx1N2Z8YVNvgt9rQ1M2s6S4GWiAT7MyncFMa46QAKKJcPj6SjHoPGKRHYHoUn88rj",
  "key18": "5a1JcL8NEWmmchEPeowT99Cb8UnPshknUvhxSmDXEFdNQ4kpiXgeUjcGbg5muZGeSkRMbwWkRmV1dMiHMTGjeuaj",
  "key19": "2bCQ9wweE9HDdJonehxkGSgYHq8BvqtUN4U28FWdfmpd5p43nxopDGadX5af64isgpMT3vAH5oBVLLKnghaqdRko",
  "key20": "2ChUAc8ChS9xkQNKuoskDikNJ2Kee39DzA9vpdw1X3H8DYrKTZ3NNgzN6hsvaV1dcgWfwuapwTJ1AFd8SjqAT12V",
  "key21": "5cYLYMb4oRbpy47qy9mC9UvaUJtK2JSvN1cYtedZc7dWMqbtWGtN98UHtMQDXCVbFxAUmxtW9xGUSc2p7rChcDp8",
  "key22": "3Zpd2W2D1H2adGexkiXJKs2bPdi9bzTNJ4dJWjHNvwFLsaojvy6RvaBYc14z8NF151YWS4BvaVob7kfk9VE9YrLd",
  "key23": "3cnyKUJXR8URmgzH2sRLW3JkuJ9EyN2r8XJBtZwqYzZCqfZHRqRGtDXhcRv6xnMunbwxcD1NCDERFmEVrw9wUqPn",
  "key24": "5A6uN9KejmwEvwEWs5TXGbME9WpVZ7w8SdQwVdbV7qZySgGF2fpGnVkZ3jph1b7JRuEmwFjVZRpoNbFRkoxkeHUP",
  "key25": "2hfK8PCWu8NNPUbQvpZdc9dYRSZ3gAUpQwm1Pw2tsSpwhU7saxQbAV89VxRwTygNyZko2ULH5rqxQZjscDYvv9ir",
  "key26": "49pshWqkdhdzYts2TBxssrnsfwoYeqkbCRxm6DmNgFVvi4LgYs4ZpmbZ8jnMr6TWSSJQYZU3PhG7i2rb5yG8G5xT",
  "key27": "3DfRsHH7d6amGAXZ1s6HeLoi9o4KfgLziefi3B1MoPrHpSvJZvV9tLfvU1g6FCT8EYpw9nwZQzkurm8HQE9p1xDN",
  "key28": "2DCiM7a65u9JC2WFgeP1VWHf3qQkLKxxmRc3jTPLgtuJjk7QcnMGfbPDBoyfuJtwgorv6e818bKJjCbdLGJvZxxT",
  "key29": "4241zmkKteEJuYDJG2DVAafFM2BuWvyA1rNwzXEjnbyhfLenN19YZgfLXjRvUy3aMbnhG9VGoz4T8Z1eEWUTYu4m",
  "key30": "3YXTRS5wYgdLqD44bdmmwdvmQoFqQ7imZtiegSyrMXSr8qag3Db5VrhWJ5Dz4gmGom5wUi3BJBnxfkoMd53jeXpM",
  "key31": "4SezHjT1NoLED2TTNnqCAHA8b29iPwd5vQtYUJoABzopviVtM14EXXcZM9SjTD4qw19oUvPTC5X1MKAkZBZCCniQ"
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
