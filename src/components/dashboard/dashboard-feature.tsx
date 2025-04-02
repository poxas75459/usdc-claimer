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
    "44xMP77axGXugfYBRRhbgr6YLHcfYSouZ3qHXaua9yNGCAa1eCBUxi7UvZ2JBoWWcCgZb6hyJjWnSsBtcw5csQzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwEPADNyake1gXXr6G9Z3uZoFJjapLT9NGmbsrHEB5EU1sMJuHtCpr8FPqyRayMnsSa2brdEgaKy8D5fKjbmbTg",
  "key1": "4jhtQEewvPtshbPFsocQR1gRx2G5KZfYV8Xce8vghrAQraiRiFs8aUBKuQmaWhCPF9LveTHY3TiKDoswDukXgTfs",
  "key2": "59rxYaEvun1YN1p9kdFEjDCjQFenv4u72Jf9m58ur4Q5YuXTEDYAsuVB4k2PKCUumj8tZpoKuRvfF6bQeR5PhZTm",
  "key3": "2KtRhcdrqCdsaeNu9Mh4HkXfEk7ZdZk5HKSVUTtFqAjmPsahdF8eu9f2rKhgMvJDmsGcU2vk25L9kzjqtzR2Tds6",
  "key4": "4ZWmGLzfKvZZXgnJaWC2TKeVDQA139jrJJdjLRvkYuByvnSGpbMGPmcmUd83gYGbFx2LHNQjJoDXYRSfh2mraxHp",
  "key5": "2PNJrZSWTQi8b2zBYLYj5gUnwwiwumtdduJ2S1VhVbdGqCiSi4JkhqmSXQ4qdhkZMqed71pF8QYJh2B9s63UBWTa",
  "key6": "2GYmtjUVScNCe6UcdFLbuhtrCCbnkLSbWVxEQZiYh8YvAeC4yYg1BaPLuiQaLGLP4oNGJDH7Kjqte9ms1JCYG1Ng",
  "key7": "3HyXbAAfQ43ABzPYMZuMw7g4nyNTf3J9mkJFwfG953eERtEoC25ZydLojXxfMQYnpetw9b615JVTcGVGmcmEtxYZ",
  "key8": "aSHccoDSozd4UKJvbQ8vr2mKgBfGKMbdQsehNyWGTJXZVTfNKRzj8YoTAAKDVrj4M1ZS9trKwTiarT3Bc6VM6ij",
  "key9": "3rSDfYUoErfGGdm9vejtMoazxQg5P6RX4L1s91gRhPRs7dqKHV5SYkB9AxWYyHJGcYrADwjykFrRkRURxuEYGWCK",
  "key10": "5E1PovNNs2AB7prumJNCTWSfC6tAiXFQnbZNVBGQzLn6Rj2y7EpjcQJvoGnxzg3Fng7Q2fdbcYaqx4dW4hi4gNvQ",
  "key11": "dAU4UG2joV7VDEJzCVu51k3t5eV5NdVqBjepisyGrAqkhDKz3S5x86DdTh4xiE3SFwJ3YGRQ4hkhSzwMqsKpDbB",
  "key12": "3mLrgTx5kLCTgbN8p2PZJkULsNppP6NdyruaWA92j2ackz6xBTJtuVzskkKbauLbTkqYuJNnEq2yyAfu7wEJeN1J",
  "key13": "5NqRvi5U7z4fTteFKSHtKzyu45NPkN23kdWmqA9hDcNrbgtK8jkqpkEFSxGWPPQr5Uh3LXbgZWLmH4UkGcUnQFeo",
  "key14": "31FPty7zU1JuhQsaiFFn6pHkZCPBnfDYwH9uu4pVvQGtZUmEhKqcuUow74xcDN7voLdVbJ6DsZXd3oYLUEnn9Awj",
  "key15": "2dgFkaq7bbwfsu9bsqTSkx3j9hxXyMhx5eieEHyNmMskWk3DU1ox5gTsgend5gw9quQ8rLnRyfcP2X9GxeHDbKHv",
  "key16": "5VX4aDvqF8pueQcxcsEW6A8MzugcgQAiFtFVyNeBJWM8s1VGcBCPwxgAvqVaUrJ98nRtg55UwxW5wT23guEnbHaE",
  "key17": "4bMqM93Mq9k3Nf944hFhjUHs7PkZQzU6yiUensDJANiSD7FYS7BZPh8H6sAekJihJruBeiasmrJhmeJJqDnuy8ve",
  "key18": "sKFTgeiQTe6hrfo1UpqiMiaLvbUSkN23broJfGcV7GZgspwHvgTe9DdYfUy9ZzHGz7MrxJrtSPnvb7tCLuwo8fr",
  "key19": "29Kevp3WRLKjnK8khZoMSA5sZUHWi5XibEaf9TV2KL7M2TUkEPBsWiUQHASJepULBD7bKdt3PSituPGwA281t2ni",
  "key20": "4qdFuF8uuYBQhewFCrZPD5FaoFVRujsrY4nmpmSQUhzxLZ9GBjfe3Di9pPbWpMn9MNrcejsFmtRd46ZEEohcL53F",
  "key21": "3R9kuocUWSMMgBLm75jkRUEvdJvthg23MTWZotZggYdoVpVN2dz7HbrsaE3v6bJMcYvSG6C13MZQDfzoaKey7HkB",
  "key22": "5QVEzddMEZueaqK7PRWepMJ3kctLBmzw24XjKybAoo2hQE9teatrKxYHdS9ky1BHUW9LFm7ZhNCRFsAHqVe4pWcP",
  "key23": "3gjY6w2kHV7HYNB2jYAjKFoQ5HcnDCWYe56phPqYHWjpUEqGQR4Ayw5gUeqc8JTEtG6BHvuFqjhRdAEhra9X898i",
  "key24": "4Pdiqqdj8fHx9qT4Z5UgdUB14Vz7pUqDyUQCiDY4vPwAz1DU65CEUZBTSb1sjBV7pEEkJXqkhrDLcRh8Yib8dauX",
  "key25": "62wzd4SRv6Rijc4DwUcqJLZ1uRhWHTe6hUfrdrtQ1oBqr779vUwZDxVjjbzEZQ21JnMTDpgq7iyus7A1y3XaMc7X",
  "key26": "5MVAjp4eVpN4dV9QjRFvZR8rRzbhKSirbYdbfqBod9bTVsrn96Xbmcr1TvAHHsnGFvS6KAxL6sN69LTD8cB5pQqW",
  "key27": "67L3HsRXv9ZVMFfKd9DTX99uMU1gCik9avKhri7MxLdxJERTwajACcw6Nm4Bifev33tYef5ciGbe39Q2doaG5qad",
  "key28": "3n7YQr7r6n2RAz1cKthh6dH9QR1uGjt2n49LWHwkircizzCYC6KryEYMXf6nBpxN9iRa2C7ZDgj8mJanhPT76NiP",
  "key29": "4A1pi6PykZPGBuCqn45r6kFnMGsaSnMyvo8bih7CFbjXKqJsurK7wFvQBPWtPs4fi2dGkTvyCCAB5u3jgCiCdGSH"
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
