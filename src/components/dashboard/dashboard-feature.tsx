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
    "2nBwFrU22MLNQ5ACBc6RAgTiQwZkfnDAZxFqHm6AjXdhktRT6eikJpbx72WFKR39KtwNwWriGga2NEiCfUDfkc7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REd9x56QMUA6u5LLHkfMRqKsj6WzWNkoGhBaGGUgYtr4uaWoUC7LeJMyqKbYu8it3b6HfLJZqdPPVMq5J358Lav",
  "key1": "58tLqzvCnpM7QqKsJDJ3GYYqkmvjk6fegKZUnEbTnLwrDUhgbu8SafjvBCs4iGCCRHYJxHndrKwbgSxNJwwSYWyY",
  "key2": "5hajFynFC9Y6s1eHcVNjcUKhYm5cz7Fg4FnQK1KPQRC61bhthvBYzy91nPmi2ARbKSzm64FnfzR2GjnyX4xx7zeu",
  "key3": "4DVXzfK5nmCUvejyygL7GFaDtjTJRYtUCipgpHEfvxsHWnPhxuksknKRVxBUPsoatoCq6ibzoXwrxtUfHH5zRx7q",
  "key4": "2SYMA657Dcs7jtdeY7bJm6jWisHmyeoQ9VSp2dmNo5MEo2iSzHo5BfJ1vBmg3Dkuj4H99Pv8xH9TEwiCBD6A1bzq",
  "key5": "3syAtGPZnu2rMZidZ4yrpuiRV1VyKp8g9ZzbLCqL1H1F2QczwokvAiYdu97wAoAnKyALodCFgQ9zx2LYSBSPob5a",
  "key6": "2kSvNPN5j8RsqBrn2wZHhbk2tC5pRVMyzAwxUfSpFEegY41uFxR3dHvu5j9KAT4tFFixVZZBjVJzqrUx7acUYVKt",
  "key7": "2ZnS3MffDk6iRqVWX3DYzE2WkmRFKKyeRM4dwpGBwgP13QY19UR9RdqjjvavWqwXQAc9Zxkyq57h19YHmwSYThBE",
  "key8": "4GajZESLoLwDYLkCDLveGuxsX4XKsZ5z5PT1tc8eHHFPmuqXNwGu2uNr6ot4A3jMHCoABQz42MsFFwNViVNXmT29",
  "key9": "2ZKELjZa2GhnQEZBG7kmQ4JM6W4zYTFqvde9q1YWxkApCKSzqfgHS17tum8CBFfqMFnrZbYrWWsQ7GRtd9Qbhamh",
  "key10": "Q9W3rVpMacY6v2mmoWMY5JcXT5DLKnHhfcmCGyorzjZuTb7AEPDPGfgLo1w5NhwzcCkSiSsuj5SgMyZjeQd8r6U",
  "key11": "euGJodQxs2pf5NyHnAg4Vm34yRAWM8vpEBCmsLc7R3fXWzaxUTptkDreMgdCvTvHyRDFRKVV4LkELaeH8sNocM6",
  "key12": "4DFRrrezciwdhe6xGYAUkBhnRMvozv4QrpMKAmTJFRnbidAfhLsEeNtosRihUhmcx76M5eeL1LvrUcuTG8CgdL3k",
  "key13": "kfdUBUExBDhyVHYq5e6JWeawhE6uJPxzNeHR8S7XviJJYPRNZzw24b3NnkqnUwhNdT6UCEkeXhJ8dVQL1KsDFNY",
  "key14": "4nPHwsnxXjimVDw5BvrmbyZpEgqWPK8jdEctNNMvmJpoqmp9xS7xCeUkSgt5oYgGf2nQCBXfznkrB3H5H24hxBnp",
  "key15": "39djuCjX9cKqDkFZFwtjYqibk63CXRt7A4WbrmANebsxXBFD7eAGvMCp5PfADvRAMn5VqP7n9z6PvT8ih3ZNkJPu",
  "key16": "2HuW5hU9QHcb3C27QysiFsLj7WQR164JrmdfSkpG3VgDsmpurh7YQFT7A6ibGt9mzSW18ptDTYNNXcraHYWUJkZi",
  "key17": "3ph3J1ssXPwnoc3pgeiE2weYcxn9vk7bV6dTpez9pbjMQ8D91kqMbdjurwfhfEHciNSFQf3hZmxtLXc1XZeA55hX",
  "key18": "4PJtqTKzSDJjVee26Si2ni15387sUxfPia3YBDxUdUypUGEVzRLGXvEZFN3PPwobzgru4wRdG7CvHnaGQHmPdvUA",
  "key19": "5MPyrcAjBXiehBBpwNbAQCCnvz38kXuDhqnX4LCBx2AfM2RhqWY2ZWX6upbD8Gwzc3nKnojA1k2y5RWhBTxkEjZZ",
  "key20": "Lc3fnjscaYTqwdXbXZgfRKQGmjKFLBxR7n81ceQ3z3ZenXdnmhJsQjisu1irUp1uictswvMazoswP7rfNSdJ7KB",
  "key21": "4cWUD5tsovSFQkF8ujPkP8p6vkNk1NP5tsUnEg3iRNEkFDPVnNhqJdwtv4xwpF3mwphkhL2PJJXZ1XXE1E5QfmGD",
  "key22": "5Ri3gHaD11w7jDFgMsJKj3FpLDo7v1NQ9E1NpbvkSaYD2dzPBTKWiB6rC5ZmuW62LH943AYSNRfXsanLX9njon6P",
  "key23": "5AJeR5PPtKm6J2DaWMr2PqT8nT5qYpkgb2kSFn7LLFP4nG8UeyA9Jcdy59G6JjuPd1kkgRLGX4PmESGxAUcXPHQb",
  "key24": "5iVPQcXch5S4oUMy6Ax625b1NEjrsjHHwqsNVRq3c3WMtAdSKuW3ycB9Tg4yMBUqayxzgdDSKZBVydGt7MQ9vox1"
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
