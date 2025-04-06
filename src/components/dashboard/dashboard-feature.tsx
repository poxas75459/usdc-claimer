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
    "hgtAqVx644nyyPvfmYvkAi1gLCuhUQJy8EWhDqSa8ME7jfhQRk4mwSBpoqsi5zBoRswbP2s7cXGDTzvWWh2MtLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MEDfgcBpZoSJaENFjAh4v5f9aJtaNQngTm7LfhmfBH8vo9VVvQ18uzx3jmm9ok9hcVvnjZsCvmDHnviMmyFP6w",
  "key1": "VYENe5pAxiMjUHbTGdp7L9rGaPZoooyfKZX4KSFXWwa5FwpaPCf38341dtMXZfKmu9NoAk5FG5rjLH3jk6sqUb1",
  "key2": "3dyi56CbLpTnpNLT42sh6XWGewMgcrw9mTgtr46WYda7ujUxwRoPr5ndbrPw4CDLWsraLiLWDJi4ahb6BsUHAKLm",
  "key3": "45oYA2D1gjnvRRifX8PBQ7rd2eYX5Cetpo8iFYQrviXcYqAJPK9kw5eRriKYXfaQaHoKMouaXoyPUETtwzR8iWiq",
  "key4": "63Uf6A8X7dfVdfP3CDux4GktDXJ1nBLKig7BgwUE41KCDnikxC4V21Q1DS3DS5EQBbdpFYbbj2y2NEYpnu38YGta",
  "key5": "3dikRiDFRs2rsErXpWEmYW7C5mCZbWroNxjMswogU79QPxxZpEcPeYEpg7WiYx6DiJsayBzf72sLFGnb9cSsbLbM",
  "key6": "2YFEf9rXBYSMaeoyX2e9DrgkD27Pr5FvAXs1YSCL3fZ4bJMvATUEuEbfaTeAVjZckFuSM9kT4Sh472TyKot4djDW",
  "key7": "4tD5EVHcMjcXisXswMR8LrYMEF4N1X7PHdCNMt1R7F8ijVFFCbqKWLRcYKAWPQL8fK7XrrHNhi2jKZN2YnsDjbqg",
  "key8": "2S5hgf7DYA6ve8sGEyyrRBxuotoC8VEWPpVgg4KwJb1NGeYcSD74PxmGCeZqfzn5WEEFQTfCc2rge1CQV6CLoHKr",
  "key9": "5g3fGJdMP5EG54KQMAc1QyHnWkZMRuff7Yjr2B3LeW7xsxpHGyeFoXWbVFk5KJTdCJc91fgYApkCWj9c5NHEVh6q",
  "key10": "56u2Sirowdt9ykV99qmwA5Ty7KmPnwQjFK12JAxiZcMAqMPpo8swnqLdvuXkVqck4BHSQdUYoT7SJHDZhaXuamDm",
  "key11": "3LJHff94VGT9ZavsQAuwcjbgdEPNYe6VnQxzW89757WxLD8PxF2AYsp5q8e7AS5h6KyVpaHeRALxej7fSJXYwz82",
  "key12": "4DXo1ku35aDHEKnfjcwP5YX6vHHW7XDWYzY3se7agKBCSwCDC9zdV93TfCHWsvvQfzv3T6ePsrSE2s8gD5jx3mt9",
  "key13": "2GwYgn5t56y7Lhwh1aBaAHppDzQ1J7ha3WBZPRiy4CcKK7vjiUKVk4TfWqyYcEP2zL2QSyKVYWVWz9bFB4ALqQEA",
  "key14": "2UX6waRKqUbE3GjCPPma1sbXPtsnypW9kTvYpkiG59k3eAg5wYXXrGEJJtBgKCHBRgmvVSTrGx4kHuPrwa5raF64",
  "key15": "2bA2jYvwVmqw1XzKMABZ7eQDVry6qb9H66Mkb8UPRLq3xW66Tkt1Q4P86ivjt19N5pLsKSmRgM3jvpRwzKGLjBAY",
  "key16": "oErrqRbiRMYnk8LQsuhk2t7cgWnnvqCzC4qzmbvjDSmAVKvkNF6MKDUj6YJW2B1romDkw6VMc2mGfDBn8sx4RL9",
  "key17": "5a4Aw2TkeG2qniRw4t9p41GUZf571DmXzuWHes8JCE1uJ32mH6YXfjV2e2rPfvoqfHDqmGLN6i4gHtMGxZPe5Kre",
  "key18": "ficp6kLTNULYAUk9szmVSUDUZMN6FmPKHZ6BTLtUMxxwvdGFwTfYpgdTpjLur3jBJ6dUrQZTXLgUXwBExPwjXdy",
  "key19": "5Qrrj6sDi4cex4Doui4JUeiXGfe83uTveQyGqTEeMhjTT5zE7v7Pn5LiJSu8UfugS1VEk5BL9ymzQC9iPxzvEW2w",
  "key20": "63z9ti2GbPTYkNKZB8Hhsq5ECQJHSi2povj1HSFBKqzPxQPwnS2LiwRxbnTzt9x9cM6kfm3AGYXqNYKqZidZnJqD",
  "key21": "84kHJKiTHiD8Q6vKEeriigLAJBUoWBkrBoNwNwM21YWprPycXHLetpg4JVvZDxPDFZx29tPePxLJpXgchXa4ZTs",
  "key22": "975VJqXL7timBfwwk3KH9W8rKSjDtmXh9zJhDXzBGv5hXzHGv7SASZo1GGh9dm4tkbTgZW4Vanh7wztswe9mFmK",
  "key23": "2HQRGzkfb6hzmsxuENX7rzehzVe5b8AeEDvLaKTorcNWatdQsSdKSNYX9EAVTrCLW3bLrEgvnZud9NVSNwFJasQy",
  "key24": "3Qdwgdgoiu2S8ScHD1u37xMNccHk9vPKwEWce91E4SVF7yYX7aGir5QZQgZTBJwDGq4Ykpu2AfgpehtD7RD3JEY5",
  "key25": "2NzWAt4UcnD3TcDsWRFG8NGViv6uwKYPZnosSrcTvLymLPjcVcwJ9fz9SKxJYQkFMUWSpkLdCPwtecLCoqc64RBU",
  "key26": "4tSs5s2jTxrkt1Le2H9jHaxyXicqpGLqdoL2z7aSpsX3ZwtvkSiyHab4rXyqVfNvNLUFP227yZCaoqtZia6KiSCT",
  "key27": "418SPXp8ap4NQeJJSgfwqGjqMwYf22ZcRFTEzJjF3E9YrSCmvDBdaZ1AEEYZeTSme4bcovEG3HvsKk2Wskb7rd89",
  "key28": "6369M4aXNLAuaMRc6nZ6HgkZGEFsnuEGXZYbZePcsUaYKRWTMaeB5nMxmJ7v7WUUTQkn8fMN8fpVYR8PEbE2z7qV",
  "key29": "58pMB7Usbzvdpb1ye7zsqLungyANcAsnXQMkE9uKMYtwpeQyusf4XrH2gJPspZJk9N4y561mzTmg2kHQUgcYfXPb",
  "key30": "5m6E9Tbb9zqVYWnrnN6vgMeTGAY8ozpe1jDJvJCgLCiifwJfs1gmWZsD8Y2iMFVEj7ycNfAkEj6nrYpbHmieCrDx",
  "key31": "65tfUE5W1L2EZs9wYMsx4HMjBWZv7Jo39xxsHGjFgHQan4o3uc7d3JbNNas7yo3bzEHgQy8Y4GZRiofbSBfnYpTE"
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
