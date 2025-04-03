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
    "13BhZbN9K4nFVoKoNDK8CwtRUhyyXd9dAJPvACtZXGm46tWeBgQEVvCj53bjHfAJmcSS6kx4kN6v45QHfXBd9ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgxW44F5Pd1ajuSrzbPD3Cx555c3nVj7gDXxVG5GuV2vtFR3sdasyBiunSyKPnCDpDsxRt2D1UWGjXLRu5DuucK",
  "key1": "2RgRzVVpnqCcuGe8NtzC8kTMcxQzyn4PtP7LSzwfukTyL6DuS6wYLCS8fyUJTBxirVE38uxt6begXJ6WMMTXk2VK",
  "key2": "FkDUz9XFmra7J4hNpYbsLumbpsQqcRVNgRH5LphVMCQVpfhAU81q8sTJMUQTfC1Kc51JMfi61F73jJLgeEB682k",
  "key3": "xmYo7b7eh9D4LfCDeiHTkVdT1T1xcnKgjmyJMRERf3Wn7LWrfHtrkgvzPuNdW36gHYqqTtjGNTJRTzzrPnJ9NnV",
  "key4": "FZQaxZfwHYcQXwqiBKzig5qTC5FppvpqjbZi6aWfxnTDVMBVTPatXv8M9SWDT5iabUWSnwfZtE9maurvSZ9w41e",
  "key5": "8CxZBMX4wyBkaCAZTBemRWEKDpvRvxbsQjgSEYyzbhULmpCN7SGkb7TxvdvLJaD8fzcLcNw6dmZyvYLqM2ggiF9",
  "key6": "aD7397shFmgnB7ZcxwLMpZvB4nWWEzBR3HVLciNcoUrK5q7GcTBtn8mH4a31eAsms6bMMXP2Df5mGPndjwLbe7w",
  "key7": "coewH3emmQfk1EgPkiQze5gBTnQas2J2qG6XgBYCegfqyej4wC8nSobiJE6iTniVpPvQ1pkD4yVbU8nTwK7CWSh",
  "key8": "38WhYbjHuS3kb94TQDpkRQabG5hSLJ9cg1BTjaWB33B2ty1x4BhCUi9nNq7xFTwzF25iyhxVrBeQBivJ89ZQjz54",
  "key9": "4UNkvUz4tkEqCo4QHkcF1Xznpm1cHGSSYzoy5ua8w3h1ebp3mNgEq4UMqEtGLFiQn3gW6f2CJ8Svh4ceSL4kDMoV",
  "key10": "5kjMxNZGZLXNE3kGf1ej7uduHi2hCLmGVSNEN3WAB6AZ2kQYer75NA1qx8DsJLcQFoKdXvtGvJKaKzAW4uFFG2d6",
  "key11": "3qsftveKLim4oFoiupMt3E9Mtne39ETEen8BrqWqrUAQUozEJe7RaseRw2v6kRV2msYL8aVonryZr1xG6ZKoAMiJ",
  "key12": "36GTjkDWwKSv35g5vD391G4ktmjWpua81UknN577gguP413tFEs5fpbpBaPhNSU82dykSuXtpr7B8wAYsf9Jkboo",
  "key13": "4BDCNnh37bJT6UpWmbo7ewRq93ZguNjSDcoRHsTRbwP2eu29CRyxJzArRgCdq6ksavzxLoZxTtYBYrpf1dKtSPbC",
  "key14": "5N5mPcwYLDCxZaCPSoWMYKRJAZDfQ5yrPYNnSM6B8DdWcyMwhYsY1bpmR2xKD4MCr6TWmNUytUJP9oShFQQ1hx35",
  "key15": "5RTZKjym58mRqX6ZGag8Vhm5CvUuCWmU1C68X1eEBAS51LB15jxDbfHBqtmURmq8BkihJyLL1tG2VsnnTMer4NDh",
  "key16": "5DHmCMThXhpPJt99WmcciJRT3Mm8XzKHDc3N9ycZu3Sc1JZAjxu6zpjMxLSidShXhYU7PFwJds9zqZAioJuWsBcq",
  "key17": "2825RvijrxitXeRxBDmm3FEZyW9R4Ymkb9fwv2hWaHjKkL4u7J2ZFkhUhtfGAoATQu1G3H8eit2uroKb1DWops66",
  "key18": "3FPJFGvk2KdKLsmqoz3PuEdjg7Fdp2AN5JcHk21xGFk46eYSZKDAky7ZJpLCCCsodzNTTkgZjzxgbteX96ysYyNm",
  "key19": "3bQamzD4LdASms27eHttWou8iD5E8R7K7QiUyjsdrb1tkByFHGkPtL4L1kXAqt7jp3WpbUWLgXY7rA5F1JN4Mhkp",
  "key20": "21c1whta1nVohtsSkWdUuJSKW42MTkRM8rWPbCeg8nq82E8LdnMk1Diw9SZg9TR9eNzNguWM2wJjrJgyDP459SMi",
  "key21": "4of3xMvTNiCwNyotBU1u8btaXmaubVjrKbRDEcQd9SyKsuZP21afF8mibRBvx8wypKK6GuriCK8TopDbxKeuNQC8",
  "key22": "4KjMVPXt8XTckWMkZUDakJioHzpyLnPRjLQAtL2215SKdE2my6eFQ9m6vEwQB2LBWLxSsE73ACKtJ3yLWvTEwpmS",
  "key23": "57nzUo3sji4aF3TycoYacUeFGjAeA4zgcSVxhGbFRUnYY2U5g247ySnB7uAmgpKy5PBFqq9R7eDyKn7NRp2ax9bx",
  "key24": "2KvHUKoCB1kfBhpR4r13Bmn7V1x3FHc1qFnoCx3MEuty4z4eJkk2Kt6gVd6SnuNKiw4zyABMhdNkissDajt8AS4h",
  "key25": "5qM7aae2Rb8fbAgRq7e2A8a83NDFyHXzW1ovBdu6v25drwu9uxLyUc8AAKhpBqw16az8dcGGCmrKL21mwYoc37v3",
  "key26": "22c7YjE2GpFALUHqqN6CBycQvY4C4dP5pC7p68ZXrRTyce8gxzTjGy4MnheaUV61EUKHMerDeX2dRpPQvJJn3K8v"
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
