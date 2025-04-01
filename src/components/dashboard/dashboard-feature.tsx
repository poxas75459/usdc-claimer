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
    "NgkNWmSeNrcBZDZDnuqLHr6y1eC896m6ir5xR8U6FExmATdmwgsaPhcxi5VRrKyoW6Jie465VPWMM1cfXHiDNy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dC4PEwCMPqiMLu7Wft8zk5roLioYTY5kiQMpCH1Hdno2bXfyMWkdGEtWWFH393yh1XjyVgT45R9Bhpcr6g2tj4J",
  "key1": "43eVnmgVzsaXWQeTy9E6UgfPwxYGwFWeshAH6zAKA3gAbaZMi8TEjDzycHPZMgr4D1QV16J5uWMu3j2GQwMbKpAY",
  "key2": "5CVhAyi6f258EHk95Y9af6SpAorhhKwfgYgE75R1EEr6NhyRLUF8d6mvJZq1EBLUqetGWxQNg8NSejoojq8dKMDW",
  "key3": "iRumbQdw3PpurRYs2fqb7HzXcwsABt4E9ey5GuiWkgv6XLweK39MTNnKzSPDo1cgttpErb3CdsguCD1cWBG3MVi",
  "key4": "5fwEvbJPDJTthD7uGQd2d5EPSfn2ZbU6bYAd7Zu1iLjctHm7p4ETvAarTmz379tUGohFQ7vmxNxPqgqfFYHMTZeH",
  "key5": "5tKFmo63JqGrhw8XDNuGnbzqpXz5yK5GmrgU9tqZ6QWFhg3fAZg7SLCuxjPKHhgNhTmQEZYVp5kGkirtmMuE14Fx",
  "key6": "5kVG4xZDk8gJYGx2xf1a6Da8UvC6kxxcE9rhqu4Ym15H8jVdGqd5ZRQcQbDR9vWoTW2eWkEjkRA2vei3HeQcsjz8",
  "key7": "4bGyef345PQ3yneRMYDNC9PSprSXgF9Mvuttm4gU4qggRdudCDa2VcTwcptXEjJyyTEAT3K6TZxgQGLb1VUfGS7J",
  "key8": "4FnTGTajoUrK9mgznTM9M5pCPUYoRMiPwSPR15wP5dAFUcpfohyxvSkK7kXVs5PW1yN7JyE9pP3cJxQeMyZ2Rejm",
  "key9": "5Bgp87s75PLhLqNk5dUVrvTVcWP8X4uhnod23Jf327PXMG2uxPJhzNeTN4EpXeHzFAHpzY8u9QpJ6AiEcGRttDhu",
  "key10": "4w3hREwd7J5wnFhiJyvhnU314AxGXnHFRGGGVX4osCpFiwgdYD3pcuoJ7AZDZDSFQKyeizHUXkr7wDroSiNYT82d",
  "key11": "4fEEXCDgPVAaV5EwfiWJUquPZFUMZZUNR5No8bAypAUncU7sjEpU7DJQMjtH6L1bLsnGH4ACPwtsuYhLFHH1x6mS",
  "key12": "5Fw3ADmoRmDVZ3uxijrtYyUhpj5BC8sVtTso9fwZtSGMkYjAP4HpPCAbiThacUNYPrJnaFLRAnqHPQgo8LSV3BQx",
  "key13": "36deJ59aDw5j3Mp6tCDnpbKnDox8yk13xRLWZ5RFVBqnW5PvdNYyD9NphU2b8PzCUpWdekJMt1dusMnvAtT3SCV7",
  "key14": "433RTN5Fj41yUXSQRKvry54rHTWUsgd67kEzxnzuT3ebfqhuqiP9WepedcdKkL7QhULDvsotwn1nhszpfaUP1YRh",
  "key15": "5QDSykJeXXQHT5CXx72Pr9YKbvJeX37i2641ALQ6rG71AsVzhombBXV6xfM6BBN2E1NXoyZFPdgWVcZ9A1r5sm33",
  "key16": "3eATDFER8iDX5QjXNpGV1LjtfpPcp44wtyYXqdT3vPJVGkjcd7gaJAqAeKppqPBeqSvEKMVN1rpykBPtxKVr7MhS",
  "key17": "4YVavY4tV1yZjcYsHrwFp2AcnwkdXfLqm2Y9gpHZjxntsDjobmrkYPMx5WGBqZzM6ov27CWPTt8eXKhanxt5GAuB",
  "key18": "4LbsmipAonuXtPbj1nf9EPP2CwzK5YERr3rXruMsHbGcEe1Q97C23YWMt8Ent5xdZepR9yn9jPUUZ775o94ges6G",
  "key19": "5QYMhzk9SHTv8rVRjhL7svQMgCZKuJWhEh1M2gA8AUdUSwacT3XyKqtN67F5S1k8ZbQCZppL4wtHjsNGNprdQmKz",
  "key20": "5mgXAfzQdqMEJyhMStdURWwa5eKtwski82DoNTDWBiW2ptPhRG4tRv4CRFFB1ZbUZz1ohn4pvQ7Capdn2Mm1y3T9",
  "key21": "3zj9EDiQ3CcpNqRb5tD9i7XVrqK66rLHPjVSk3Sng2VufEzBC7eHYyYK7eFDKf9Lgw6p51jKw7xHrFCQVtGC1pX7",
  "key22": "3XtHhBcXu1fPAsu8Qo1cRnswFGA7Xrzvzu6C9UcPj4EAfMz1A9cJ1JFe7b76XirZ5E1duyBzwdgXCMCQ19GKmS5M",
  "key23": "5Xc8z647e2oUfyCbBT92YrPMPw4N1bMUUe4CZ1jcKEN1ofYHNAdShQ4Uvtx6p9tVuap5Ds1rJtNizAbd3kP2inD5",
  "key24": "2NQHK1LfugzQfvvNnbB5UCraoDoytWyDF8tjuLW6Qmz1qyhRehTBRCgKy6gsbG4yp6GaotGYKSuzXbSGnvMF3fBA",
  "key25": "3UYQKMVvLKib6moqapw6ahbGKzQNNYVEExmZFGxc8bPUKWwApAk6RWSgxvsqnkef31qsr8txL72iE4XLv75TTe1X",
  "key26": "4ew6k7KT5ymRjgJxeKcrF9AXAQYjguHp1PB1asfiqmByd2FupjoX7w1jwCnXQonGK3zHSKbV1oqrPkTTuYNc6FHf",
  "key27": "4bi5z6G5QrpangogVyCEiAgKGTnjWPqMDrA2vWmrMFKt3s3fYEb7Pub13Mskzs2VAnMXKb8pAKU2jKVdbpGhR5DA",
  "key28": "5eUygtdpwhsEYeWF2pfuAELfziEnv9UxoVUbkHZbfw3TNdScmht2DaLaBdpCcdo7XYYbUWhPnFfkCtKDqUG5oGV3",
  "key29": "5dgFVsZhhSc2Af6cwBgzVxxVkUeuy9H72oMJuBoZDsHUcozu6Cw6pbTHS8hW3CVWABCsbt78aDJwTAjVEtCJ3f7s"
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
