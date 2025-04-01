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
    "38nnJvgJ2p8JSahV9X2BCcNN2yeAwJLhDivionhmjAR8jgdJ5Monh6iGU33Q4eLSWTpWFKyefe9u87L1hfstVFS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27u6hkjY3rCgQgcfveaw4vBrn1KNmaxNdAqbrfK9s8ZhWio62333hnNGDVH6NX3eCke5d4ETXb7BFhC99gfFh4iq",
  "key1": "4wgstfEmLFoqmqQxiog4MJfrC2FftptWiXN2nUxmdcxuYuggZaEkV6Tb5xaFjvciF5tu8ipVAFFjgofiQ7GZfoAJ",
  "key2": "3Kc2c567sPGCu6WioASENhZoYF6tvC5eo3htBgBxEvVx3SacLHKRQorZa8kkNBhrdx8663uJ9A8SaPAXrc6Tkfxc",
  "key3": "2TjrUPHP7juQtMidzKatZbrLUKfNa6VfNovHFZTbGMcPa6pwxWYrRXm5oCAD3ns2sLKUx1fgteSX7paiTuE6fQq3",
  "key4": "2p3faewAQzLgvJjr8vqHb5GgiB73Ej1VnJRHujbxBiBnyqviqSC7U5Z7Vt6G7ckPJNbAUbpfGuC7kr3eSAGoEC5q",
  "key5": "3NCsJQTpGDpcDKj14WMBgnos49b3ncnMbgq3pz7F5DrvWpPMncfAFCW6GxHP19zLg7EoX6fgcGHTEmxfYdHbkAD4",
  "key6": "2fjDiMhvvkY2aF29r8PHsppF1rBJFDNT8RGufrQ7DVgBnSv3gUA66s211SshZtWbi5ugfFGQakpN1UY9zPQKeVLA",
  "key7": "dYpPkfMQeBfmsUVwEsueZGviiB7jUduieYSTDihpMV3jFnSqaCCF3PUtjApQayxcoFT9gmPt6kpVK14t6omzXct",
  "key8": "342urbr42YPSJd81gdUVufucZxjNXg3Dd3THyK9sXdQZXbd595TWmWnQMZkzVpXr7exKnbd2AuHWPMDJtFZTNGpb",
  "key9": "4iihQ1vzFZ2iMAiMzYZ932Z6ASMZcvJ2Sry5eerVYgiwWLneUHiyH4nhATmR59oJeQWaStQqiAFE32YHwjX2fd56",
  "key10": "2gjtQUXdUdq8N2kfSY2sCfV5DGRzRvvHw4m1DPRCJdxgtY3cidnQ7t8duDQR7b5E4Y2FMjA4Ka1iKKE8WSXAU5iR",
  "key11": "ebRqDFdoSctESDpmVq2XXJc2BUNczgyVcdU2JVS7jkwWXicjd1GhiisXBcKYPhUi3ecn9FzZ1VyZtiwEoPzjnbm",
  "key12": "yH41BuZX6jLqCKtWqXmm4mq24V1zfSwLLRJcKkbwQs3aYjfTZhEJHmcWS85bbGQ3e7iTuNYaccbumrE7KswdBLv",
  "key13": "4i9dxeGXPAHWagKyWegD7oib9gocCKAgRL3oFBL84a5KGZEfAvxE2e5xjkBPkga6oZMyXYwLnJkYvVQfckUWbJuk",
  "key14": "hbAturLb8R1f8BqUYgMk67ssrjZ8obryx5WzZ5zdef8du5iT87KxjLcLLQZWxuXkjPnXSEhZbPsAMPs18ASKVqT",
  "key15": "3Jdikev9LTtnn1tKh9NL4LmPRtpJdZ89EC3YiBfZwHwSmiFRQQzWKiPmAKWM1cjXjx5fEPtMY9mya3oycbmUYkWi",
  "key16": "U3VXY6RrUihUomitkkT5LKAJfTADp5wWZwQB892CN35dUQbexntP8WU4Z7qAxf7MyGpsQJ36sk847Z74SzGUVP9",
  "key17": "664qs85fEeQxXSyyxWLWKP5cHWdPWriyGcq48PvMtSRSsRnk6QuiC7sthQ3grZfi7qunF1igK3by7zna1JR1ojBZ",
  "key18": "2ato6cykov5hj1zedYohUYF2hoSb5z1jdSRiB1LuJqpLxbWdE9955HsAuLRJQGJowzYnxzEK8ZwLuSqYMMT3JUm1",
  "key19": "KVLy7JsxMGKBGsbrYBhyfAEF6EpPAw9BLZ5aY2bAct3ygjzfMTGjpA5X75GTX7xSFwC3AYYWE2EzsaxvQSvN7oh",
  "key20": "2o3GwtXFGrYFsZn9RDXGgEQnBJ7twV9U1gNRzGL96JEVgzw6cUpybgB9b746mRV3frBjzt6TDbdxkcCsWZZ7jXkK",
  "key21": "5BnhABA7W9csySob2jEk6UsFWVbyHrvNWbc4Ukx5pUZpJ1LxHHMS6su7LL76QxcrCisQ1i9h7qhLb15b72FHwztK",
  "key22": "5BgZRzptirqx5yQ2MRXwANCG3MDJcMB8CcQSu6jjThGAu97uAyjQpZJpgdVDXbkr8hcXHcEZNiHvgTEvLcKAFESg",
  "key23": "4gFuBu8UZuZuuWoxsMWZ3mogVrzhjTPYJSTAGkoqAr3patPR6CkqyaP9DxAfARSdjbVot462iZL84SyCZTvtXA1H",
  "key24": "3WBbrt7MnYYekwEy3TacB6JySdKmfPFRFJJPF2Mhwvkag7SFWm3jgv2X6vEjC56YK5ncZLh6yUFS2uZB23o59Jo6"
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
