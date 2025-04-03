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
    "51exT6i6NZiKCE9pfdv1BLoiC672VdtEcVDhiW3bMV6SuNXirJCMkJsyw9QcwRNmxEPGbTtquWknZx72yqA5EDj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXuc8W93HWkuGEmF6G1p38RWzjgJD2iKXJtJFHdv2uMbdgiGmbm1YLYjNcMWVLg9nyTqYe87wSVmZos5xTb7cLn",
  "key1": "5x6FETzcQsmCRT2NTa4jzuW6nYdHu1EpSnE5Pn8jxqLnyqQHe3EiEQjLYLcQ31pHhtve4wR6GLiGFyxQHfCEEyNA",
  "key2": "4uJWtQZES23JRD36DPcruWkJ8qgWpsAFPTZEwMmZaySYX28bjZN13xoaJrKVwqnmdgSaG5Ey3TCeWSWb4gt6bZqL",
  "key3": "5Msu5D7Svo84hhiLEsFeP61rFPUXNi9orCcZfX7QWEDX9nsG74FDqvsrZCJN89LzraDJtUWRRSiGjKY9WFUcoxuo",
  "key4": "5sv7QeYCkg2L7pWveAJyKHZyPDw9JzxtyfBoiWr2nvuXYYVuGVoquxjHXoZNCLW8wr81i4GovHHw2J9KuVMEqapM",
  "key5": "3rKZHNZMdfmgzmssmca2UzUfKKatDN8D5MxZmGYWNXJqQ2BKwg6ENLy23RY1BbbtJzbHaDnWJdVmv75qgcTbbn61",
  "key6": "4wVfczrL3KbEpTmmWQmiXgFJYCfFAbJwuBEJoNWMrVmnc8AzDthG9unry44eF4Y7rdfZVpeW8Rg6ZPGq9ea2jyqM",
  "key7": "4AxW1vtUVtaiNGcxLmJvpsxHvXzWbXepED6QtHkeFwTZ5khoGmYBrZu7JuCTkQd6oWn6Aj9JHY31MzPRxHhnjZWZ",
  "key8": "2J5RRgoiNy5CzTcbjCR77EndMmpv8uDq48Bb1EpTDiYQ5TM46eY3if7b98ntAUKy3QWEPWxUC727wC2BqEi321qS",
  "key9": "3Wovf51tTtow621Ra7jc2uq9emGkhy1rzDutdSQwvimpsfrNEUwFRmkbKFfg5y8BWmr9kFtN3orabKRnoNe3tSuh",
  "key10": "4ZVgokeyNfhdFq4yjAcfAzDeP9p9EYFS9UoSXQhHHES1fbjn2gE38AXuecSELNrtmSC7JnGP2NaYSC6sWEotYJUz",
  "key11": "4CUkvFUDgreK2CeNck6Hjme8bTFiWci5ifXKrXDGeefWEFmJyLxiJ9XVXLK9WFbG7xdbv34zgzHamJiZYrxWBNe8",
  "key12": "4TH7QZGjpZJ2N4TGGJpeMr8EZ7N2dn1KXpxdzzNbMrpqZUXDVhpUrJy6Y4oGwNkahJEmFTandrN6VbnYVXTfnwyy",
  "key13": "nyEbShy1dbk6uVutKcitZjP5Jft3MgNP6bfXJXqG2qWEcBymGa9CWSsbKVAUVFRdcimSqMRB1MF1VDPdFDy8x5s",
  "key14": "57BYCAsEghuYxUdELK2A2p66VsYhrWDRAz9w6pfi4WEAtmdKHRkuGYNXNfXNeuacjWZ6iZLBcoPq2zcrTXEtxgnS",
  "key15": "2JoLWxcUoEnQ4LvCEEbXa5qkLrhqavvE9sLAitWfSmAMRmKx9XKQNnrayERvppfdJWM6LVjDpaeUjuCFA7DzyJoN",
  "key16": "4kNviVwu3MyzFERjrTy6Bc9G9CP4dwNYibHtRmoQGTCsmHypeHPhD5hqpSDjSUjK9DRzgiqZt9Nth7m2GudbTArn",
  "key17": "7D4KaYUgmNMeU5USMVxrXaKN9MG8pU5So9TMKkMJcxvbYib4vpQ7TPBSE2qGnSagVSficyeuCHhAq9WHuwG8Dth",
  "key18": "2RY8DTMeuL9toav5o1cWqYNBqKkUpdzGsBe4EDYiixyPywztu6QDmVQ7QzKx3QL8ER25ngHbC52sYxziyit3wGA6",
  "key19": "3FJFUG6HUuwHkK64rLXKtWeDZVv1KJG3oV7xoANFG5JWpcpypNe9GkuYctrdJiVgsJcmpN2Q2PBAYsBu2MAHaJ5k",
  "key20": "38bUeYRxwEWRxsvNJqt7kntEtzXhMyj6KLjVzMYw4ZwNPFfzjNbFR1w3bzbv7UKPncc6qp79zxeyFhFymbAX4VCE",
  "key21": "4apYMAYC8N9Gyko6M7z9oUx5ZWauaE2v6Fuuq4ZvkzKGzzCp2PScfwPYzjSXRJzwWjD6XVTFSYRttYEMtyi3sYfS",
  "key22": "3o51191KTfjqeToAJmdz1dk6ryhnbfAoGbwiQHp8zhH832xgk24Dhf3aVPYvUChfRUdLAngCAeVmXR4E1xenCuqQ",
  "key23": "3WZsBAgopUdpW7THtiGNii96Np4wnfEAXY4ZCsqxeCGhKaFSGd5z2UrCHRKtgdUAjNG59zt7zueJJYWB6spQTQ1e",
  "key24": "44ScAXRTtmewPHxh2MAipUxnaBMi8UzLU13BPXqhezZRLyLcazxadqba6fYawd39oEkdT5m4z2ZgSEVqHNvQVgfm",
  "key25": "5zxyaqBH7UsxaNyP7HYXY5RpzHMVvuwvvhbqvvhfDhj4kLAdUM4Jqad7dCModF1VXqZcr9jmhwSRK3B1yfDrCdU2",
  "key26": "333x3fe1Mxao7R2atnYrTfoJfo3DsWKhVYygVBR8zvzg7NKLNWvyRTCgSLY94QC4z65W8GLre7uB7iRpMQEXR5Xp",
  "key27": "668bF9kPgNArTmpUX9KNTkgXS3JXGYCd2Q1pc3onDSJXwwiEtSdj6Tn5tTtUakULEnYCW3yZf69vUutGdUvhRohG",
  "key28": "4wFRcPTNQQ1rKJn4EahzuU227JcfrKfFZMGi7DjuugMKjsEe54WnNUG1HhaToLiLkGkfBenkacKhPizcX7nocucd",
  "key29": "3jVzW3V1jYWvWBhaPwsF3o1RM6daziKeHpaoockjqnqMwUDfr3YK6sd5MzKnkZvp9HT44vhEEUPXAXEA48AezEYs",
  "key30": "3heQn6fWb12cpzSigSTwR6KExbqcdXTJY3KUmEH6EUNh3sYcMjJSE8SQDF6PtgLECAm21BRat4Qz3Jg7rmikZbfD",
  "key31": "55LrNgWQJCSw9CHUvd8ZDYVggYnNJk6SqRm3BBbL1KxTZ3VdNYdmMuV9PtCL5o9o7UzRhxHxpkF7BJEFuDEFFLa5",
  "key32": "2zExYytkvwjiESMGuuBDgYT1CfLeV887c8EggzPCJKPphSFjRwG9EBShypXAhmREUWwtJ3afMowssHXxVH1Gd5m7",
  "key33": "4vu2ZFPieswAsJAAWBPiu9LrNSrCSwQVcLfwUW4GGJNFbPDxpRAiBLtU6GbMmmjW3RC4GsJPWhrQfgT78gJU86t8",
  "key34": "3b2V8nSWT834rSXQmPaLWFow5B1zKuqwntVn1ULZhs2fJaisX2mSHQEeKNNmSVJHMvJGAJQxwUA1GUUtkoBpLECG",
  "key35": "5xNrti17Z5PPZGWVedPnP54Z6KKJUrddTn85sv3oDNsnZ5z7K5eujTCT6K4NEftJbSkYLiXtULxRgE2zrgHTnRJv",
  "key36": "5YpdzKa2DtnZGH6VhroqaQCFFY8DArYGnDBsRPuoFQGN46TxSeSogDHzTFyuEPyUJP7e9D1hbDBaF4t9L4VhcqPH",
  "key37": "36J9pkuPFu7fxQait2EVnAZ2EB7tpJ7q4WVxavenTtmjFcn59bjN5cvFvgRNGLetE75LCc9WPsaMgsdSSdv5xRz4",
  "key38": "5bf8i2ayazVWQoCRfqSHVhqaCxjtMFZ6kQ2hxvajsUwhGdzWmfYw3Psiei42d7onFTQjS1cjeTNbs56Frs2NYjFP",
  "key39": "33ChinL4wmn82VdwEtRoMCwFyiD145ahM31sCnf7uCfU9S14RYACZzXgtRCGZzxLdLZ51WKrR9pX1ei4xfY6dQXM",
  "key40": "5TWvcd5YQMZD2VxYaCz2PXFzUvte2tmM8xCetJEsUKoiceqyUZZMmVbF6t4K7zUzhoei1Z2W9ZzfibFEGgX3DCgY",
  "key41": "5CAH7mT3vHSarkcvky29ufjpUQPtSe59VQBsJAfx4pU6cN82iyt4Y91x8dqzU5x35q2Pajt6D9cdmLC4sZzZv66i",
  "key42": "UdVwLytYw2t6x7tbxPeVAdM8FQatERz631QNJ4PqQgMFW1GEyN4a8As7ENGRuEmvr9A4UCUTMvFZQGvsyafwZom",
  "key43": "3vgCUDWSVNCFEdWqekhHDLEVjYV5h3f7af7pgVsSsETJsVChEyyCnUYEA2L3cxzH2sFWUjPxY6PmmeacUoc8J8sf",
  "key44": "4DA7XM1vDopAkda1fgTJLcFuUQjuadcWFUbMAZtrkHtDqbcBDkuq8GUdgeeFKjMDjYBrNY61mPGBk8NEFVxRk42y",
  "key45": "4NtCzWJmAb6fei8GTcjfXTdMESW1hvgxnWvbuZJeuoiWfmE9eB56Ehwj7phC3E3ZjmLbpMZFscSE6VX9ux6Bf6Zt"
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
