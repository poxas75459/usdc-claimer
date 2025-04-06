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
    "4DMdusa1DREmJJXZUkvhXcqHcG67q7NcQCdbdeznDswMbyy1QHTtojkNW4iAKnyddoWwN214oZNr9uw6QTtTKFmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Mk6MvVd1EzWRDB5KK5qPvRgVfX6hwKDrb9kYmoJXsEZ15UmDkupUUdgLcCB5DcbpQRvAYZ9ikgRHqdZEigwXLE",
  "key1": "3MU3acaUkxc46YnrDqu8icU3uFSwxFkaeCF5jUMPjXtyVjEXUiQevsUsiLLYEQfCfvez2Zhu4Z5v5LuNqTKyeQER",
  "key2": "3GVQabQKxTk6jFoYxr2EzNFFLswapWcQdkumbjD2V9P1HLQSavfbx6rDXNeo5KAm7P2LWoKUGCSEq9hDa5ZTxS8F",
  "key3": "42Jgje3Zsq9UF2QEF4wh8gqHZMUSJASkcN6x4kbG4iSja1KEEERz6p7GUHmQHi67N27C1DY4yJMAR6eghkR1umoe",
  "key4": "2HCCk4d3Fd7CPgnusUjTJk5JXW3CASxWnnYu8UajqAEPT1HLves3rt9uLSERgqYbWLjJuQPVif22gTAvdSx5dQ6W",
  "key5": "2AyWHHwD8yAaNtMhD8aShWJwC2ZwMMjFjnUTeVsogsnxYdhGxfPmqHrSxTcyyZGbnWLsh76euCR1pkmdKUkPNsZf",
  "key6": "4Kv6DfH9Kc19q6y89pULjqqCNZgwqYhmzfkWfuaQAEEqvCBujrhRt8AHsAXjAwuDRHse3CJhV3oDscmsgL1r1oE4",
  "key7": "26eBmCqjZjxu63Z8fj4rgFqMtXi9j9LdhejwyKyJLfKU97ybrqbmqk7aiH1VbvMbbKFoxsoaABQUuGMCKuMToVNf",
  "key8": "3JwyCoArvvpm1j7psg3pZ36QLUKPCigx9jmwhaRtJqjpRoVsHpgjcViGdTvCyKb9yGKzfJfvdSUV3QK8Saz3LJVK",
  "key9": "2VRj3K1cidPYY2mFf5JSnWvpjSuLcoaCzrRWZpKMigAUH5424RKEiTEAgNkRSDLccQpyyzhmQfVZ8XbzrFAJXYEX",
  "key10": "5Ft9rPqKcLZgp7wv46E4EXRwhP1R1Pgnh5dSjooMwwm3q4ch1dYHuhAb3n2neJm8LV6ZtvGDs5DaQY3m9rVaE4az",
  "key11": "637HP8g1WiCPMKLmGheAfNFstQBEhNpcgvisgreVGkBeHaf36e4W2tVtBsugAxtYnAoSmwzaLe3w5shVjpzJnJAe",
  "key12": "3g4BSLDhpK8j3C2yScnW6aqnWsNv5W8SzT6ZtRoPVKTTE3b72MnEhktm3i7FiN3xapmLhYUEgXW3PdnU1EbFzEks",
  "key13": "38CukTPfoUJpQXGCVJAQsKFKZgq9G6xfLpk579AfRNhGRy2ccr7VerhBtav5uhHUqdbpFUrocPbPrD9gaA6LnEgp",
  "key14": "5o8t8YvGoctjievZjCbgioadKWXS2XPvDMBjBxDYMd2CsUTrZXmv2tAgQ9qDMk6xmBkKr65RUurtrV2eMzXT91hs",
  "key15": "2h9j3pd4S8HWDPTmdhbuUsMJZfiRx4HUvn9Nsr4z5LaPEJjKdkiDoSr5PzxaLEWcC6tN6UxGarMPJ6odbv6xPqFT",
  "key16": "2eTgUVyrmxw7cjtFEhSruDbQUHMYi95Yeceo6y7LfhrKx8dppDmTn59S1qBcJkCYrvQ6cGNTUjR6XSqnXPMvMfSV",
  "key17": "5Bz6nMDTkh8LPk97UU1fx7GUbkzvCs8q7ZqfRv1nQxaXeUHQsUZi1HvXwdXS3mgM83jqMSJxu7JBW9uiiXP1EZUq",
  "key18": "55o1S7EQxZrAiTN6Aokyx7M61iknX8g39UfBora7pvGLHuST1QhJMCtHfdFCt27bPDHkJycRE1rof22uMPFEuGZk",
  "key19": "HoL4916stLnwXCMUz6jkECVgtVQMRkFEHLoBgLp1sf5FXVR1zkP1kr8hu7SUbwGUNVTzLspzaqqmqmvLhWZ6ERY",
  "key20": "5HWwU3Ug22zCSozD7N9B9LZKwvgxZcV5VyXPJx3gHay5aJVyGVJ5oUceVx7TNUggYGejL1J76RkGoPCcV4GX1wn5",
  "key21": "32vrTrYNLXDy5L3uaXKKN4J81cAJBqDUoecyHon1KjTvEG1zTdvo6gg6hN72KHvCKeFaVpaYqHHLC4qG8Ucjso8D",
  "key22": "5iXAG7regE7J9cec77Mn3BptsMTadmEeF4rJrKuY4KPxwwKfLMPfUZ6L1wEhZYXk4RA3wXLu6u24o6sGhWPJcSqv",
  "key23": "4cCuf3MVPAw9qUVayniwy4NuiyVQd2jSKZTXUXiFePzZ5hcpZedZNgRoFB4LWS9Y6C4e6UqHmeLTm5zdvdUJLLiL",
  "key24": "4hs2iq525DCmJmEPmUyn3eLHjaPKD2aFeRRSS4ofMZSD65xFQq8eTSD1MsfkX935QPTEi31K3ESkFtYXCEgPF8Qb",
  "key25": "5NduwN8rrUCt4S4jFJF3ydy13MRgiTYZ1gdVPEqeC6hqhY6e45299yzDkkTMhuDjkH3TsdvW1DfoAUsuii2GrBee",
  "key26": "7cKkTd2587qob8qSjYyCBVXQcb24m886d2v7cpcZjoZHCavdeGo9uKGwLXzFq8SBPNdxoDm4zjHgXGDS2YDsKb9",
  "key27": "2pUhd8n6hqQdRC31Xn3PL1k3sE9fh5Hz2sPextBLRLaHmjwghoQhheLxMkpAdZjzEhqHiLHAoUDyw7brjf5cM78s",
  "key28": "gk2FjPjXm43EQCzhpg2dQkeHqtKReW9FPA73GcxAYasoVHXLMSwGaV4FDJWiLsrLAi96wCYNR4YVi9zvhoneSMq",
  "key29": "5ugM1YDr6QuRBtbSyErk2xt1h3BV5Ga5p69gtCg7qNqFb6LzZCZoSPxbZoYEvesoyb9Vc2C8eUjbBWo7FHtSe9aS",
  "key30": "2YULF3rLGgTcU3W5rxY7pGKyG1p8GNF56yTabFz4Tkd5uJnkAGSe8oDT9PqwhU6qGQZJ8Cs8SkwVAxMKtSkt9jZC",
  "key31": "DNF8QxGmwBhTpwrdQ6DnqUpJPiRRt93SQdja8uSRK6bPudYEsjMwN65tbpVuGTqgVZ2ErkVF3wW6Fa4sB3ff5aq",
  "key32": "PEAKiDbv2gCMGsRredwmuqiyhkea2sDkSR1wzXU5uPJqNNe1NEhhSc59hAxEXAy9CTLhHjQm4xxJweMfCjNzCp5",
  "key33": "p2ptRvrymQ1eMdG62Be8E5rGsokboeT2VCAF3GNd1RM2jUFJ3bQgQuNB9h8AyTeyyhaKUPfZvbrnVtKZSdos2j8",
  "key34": "2hV5kAmgHT26GKsaBuAAyyMfKbXhGpmTcrfVhFzc1YUSbHRAoVtGsPzu3asgKCAALAYCpTUn4qUhwQ7zWQTYqUbf",
  "key35": "5o2vMdN9N1CjPeHVZfk2EanGbYjkz3JbUWMfTpCum4qDA8BjxAqR1Xk47aUpT1MRAjZYfbjBZrU1vcbDwKT7WpNb",
  "key36": "LFb2xEUDpXi5HAjzRVDavrZGmHArwL9bSV2VGDLqqSpw4CpctvnscrjmsYHnLNnNYQHDz8aJdDYYXUM4VAxHqPD",
  "key37": "64cqziEfe7M7ZQAGoHcruCuJtfPKbfKQ8VXrNMTpYw757ft2MK2bvZYA3Hwj2sfdzhCE4kHbaLYpYWv9UpoScSJL",
  "key38": "F9JqqqfhkAvkFTXDpAjoLbt28Bzx6bdxumPdgFFT1yDtjRhDNpE2ohYH3vVmWdr8Mh5SU7mQxuKYuCP4D41zF6B",
  "key39": "3BtAsNzP8DpvYaPCsbSd6iWyXxjWhEwpKcuiep9gyHSzdnMc2ZUjJU5V4UVtvKNsw6kZaiwv8CW1gbdBcCtFipwG",
  "key40": "52poz2RpTymiGvrWyFmRu78rMtrqqrXHDC9YVHhSTa4KN9Upoh6uCZBFcR6rtT8Q4vege88BMe4vtJ4g1by9WEPU",
  "key41": "PexXD5UXbZKicJQYD81s6ANzkCWhWhvdLNmgTogpK5tiayz3e3hnuPXVqB3xBbr2E5hS4Bw6fntZa5VDF1pJzGd",
  "key42": "8e3gHzGsXvJHQ5zTCVkQWnKQ88Ft2cEpLnRdnosSXcUdZGeHyxVEYY2RcY6V4cdDSmaD2PRRNbURYPTKcufv2eD",
  "key43": "4tRGJ3XvrAAP1fzZuVAuVbXiWYRzKjLoM5K7nMtNeF9tWAPkgmnF6LWxtsW2Eqc5CSjZBxgwQD5mC8ZE62e8UHcP"
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
