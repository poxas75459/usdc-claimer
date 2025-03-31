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
    "2x4hZ1vrqqXa2eZ2aMTxAuYRVE227bnuBvTnXaa3cXWkqXR53tv7Yk8nsW7XZ4JA4VTNUWCFqj4e3ERLvUPAFPV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8B5KaC19BNQ6nUy6uHVBDYgmLAFqQVuzxcFobzoWVEtFrjpDMyBwdt4XY7P7zSgo6rzmcPd871pHQdVfBvcboy",
  "key1": "51T6hqJbJDG44Qam5Lvt7XBgGfkFVYsa7m2LgcufYHyLv3PtyuaJbhYx3vqcYsTeeHKY3PHosPUG4cMTuKoN6ENz",
  "key2": "2PkBEmePwLPuTkgNRSvtp2nw3pPDpmP5aMdMgFKaXmWy1rNZmtUG2sKWoF5TpbAuB6gHo7zk4uWnufAhCSsXbp2o",
  "key3": "2L1vPGQ9nAHqPxNk7zDr95en7YgVEoX71QbRSLCYDhjJutFgqeZ9dWMGhq3VW16a2Uh6bXqDmpjcVgRRu4pfJTZZ",
  "key4": "2gAc97XP7QQob6ovdRjM5Ts6n7E5aoeHozVqreU44u8W8kyptfKHemBoH2Aa25NYyW65gy6Yqmp8UEvbn5Npta3q",
  "key5": "5bNhp6CQSj7JC5DvhXFoY7Nrhm6PPgXWfhRVTaKUJd86Nv97G6UUmtRqJfagEdVeVEJrAQcT1UVcRoZStyhX3tL6",
  "key6": "4xSYRdPEFFXYsKvNqB91QaEZqZK9LdZ9SEuDP9DPJRM384FiWdwyARnsyUcf4KK5uBFL3JrtfoFLF1gBRs3s8ujh",
  "key7": "2Pt4JhcHKohnMG2LSQuL55NRx4zb7XmcifkW33K7Sbh3vCUKsk1aB8AFcaZtQmw8zd3zBJ8PzdEFQ19XaXHUb68d",
  "key8": "3X75Zn4QqzZHvhfxarirydKqvm1dviZcRckXZvkbWY27LW4xHtKqtAK48fURbJzKix6SmKrwibDQ3nmiFpapb3wc",
  "key9": "5L9g5jnk1PruCZDQkHdxqVF1gCv2uxLZ1i2KVisVioGr9H5NTXypXhEAEw49q8VWVnkTpRMr5tbLAYTTgz4J2w8d",
  "key10": "3CAMpgbumCSJBn6t5g9WHZe3jkg396sYkq6QAR2qp9aX7fWLCpuNQzcgPLgAPWZ3S7BzaDu7ug8h4m6cEynwFdqo",
  "key11": "2SD21c5Y3yw8hP5U5p1CpU3t4us1kAmze3wbtEVCsiubeuPWAsukBHCjK9YvErjArfrnoSVLdrC8JMwLrLgAwhM2",
  "key12": "2HD3dnswKABfJQCexbJ1aimAhe6GxCnrxiybwvt3qK6aNuk24ijJApLQzSnBrvacVEjQCFYZn6xbbcKLAWm39XCt",
  "key13": "4e9wQfE5Tf8CQut6wDhe8j1bjwqzZrAU3dUEDv9LTc5hovTJcHvfikZrRASG1GZjRUnb4zyQPMJ3XfWHyogJfFuF",
  "key14": "2LEXFHJTnL4iqTV5YnQCe8ScoCnjzAeRisoinGzAU3ySLnzy9bdUnJK5jJfoAcbf4YAAa2fbnu7docriqFyYTNtT",
  "key15": "5TEaUKeiK4g4NUzVGGCUQamNkjWqgRuYzrWhxkDioQQd2PH9cdF4dmSBcvyp2g7wKXay4G7fWt8PWjunuAwng7Jh",
  "key16": "2okat3JYnW2YStJJ2LDnYCJ7aQRUTzU5hQZ5rxUoZg3HviBpCj8bra3Fvg1o977jirRCnouSKLu2g1zUE4tiKPfZ",
  "key17": "34sJPqbMhykfsbxgrhFaJwSf2rw4rKq47ioo2HfZyRS6vmmse6Cc1thibGNdwcHpWoMc9AohrrwMSryYSq5Ksmd3",
  "key18": "3erTDUysrALvp7j8EEZVKr7sMvVWSa3Wt5kEMCjN8mGxmSiafYzG26m88RuFJodoSTzzq9uAL75XQxGuN5ntvvup",
  "key19": "2WGJVoRKjtQUfMS1asrs8JpN3ewxkzC4nVMo3q4UHDG5vSzTVm2mPk8xyPbvqmzgeyPQsuHZ9MU7dA6JQqwyNDZV",
  "key20": "5kse3Xnb4cjrXV5L93ydHQPxAZsGBMFzEE7zazYA3Axyb4oLtKpm87PzxoUkcaGiP8Jp14oqac9FonrWejjhq5dw",
  "key21": "3sZDb82zwsLxrMU1H6D7E9TDxBfZ6A9aZWWH2jnY4BHd4AMfyEKdykEiNsjWCzq2aXS4gw6NSqiwW6rPGdQsDDMq",
  "key22": "41HBraMYmgM4juGcFrKkfhdVHxDGNhNpoar2tGuBW3ABa7gYKKU5nTivpuRn14zvNg2FRTzCxdGem7ThNgPNjWZF",
  "key23": "2BPY3SqFh3ZqFLCnJ1XDTuNmeyWmH6qjKLMt3Zi7y9BofwyVhFCBmc7ehm2athy4dCn8p5SdSRWWqvLVfNrNJLLF",
  "key24": "4oRp9NNVi8Sy1DA491S2uUH4wvPHEHWiivRadzVbjjwXjHU8Z3HYuETZi5rwfQ4uM8RJq2aXn8Z3nt6r2wetv5g3",
  "key25": "yiHQbSQKnEpuui2oNLTMqhLSymVdk7xe8vba8c3EQhqzEuRmk2fENizZSSzs9SoiEWFG6jMndTepkLxvhVjrhp5",
  "key26": "4wrsqTuwpCXRkZ6eHfJvyqQ1wi2cwaLPBpEM2nAEbyzH4vRYo6HkXB9eTD9oCmNiy3ztUVVH7AYwcCyiK5WGaZtH",
  "key27": "3bioazCjqR43u9KxSfPEvJCUdiWeVxZGVzg98McqGyqa8SERVznLAJM6Tgym4FiQivh7jRQdcNriWMXwfN8Rcviz",
  "key28": "4h9VbSfqxPZU9pptLJhPmEt2Ka89o1ZnRwgJACeNHVm8yGhnCp8nyL6x2gnabwprK2436UYfQ4sYPgwRkEVZNfQh",
  "key29": "3v9HfNYdn9jteQq5YrTVNCYhgfmio4NaaaP1zTee5MHVYCZz3kPL5hxmnPpt729deMADUfdk2hXAjpxbSghNaygP",
  "key30": "2QXTahQv3ARLTLiUKfXUizEEeBKn31iAQaSWDA6UShNNQhAjjVXx3icugdfEJDY6bgQhfyZL1sx5tALtVcKYZWgH",
  "key31": "5iujtK55VHGBPczbxgxxKzcMAX9wjMqsgxpbz9EVGSXzaURhn9kEe9PPkT36yv17ViWTKe7GKDjrSLZjAPQNa81a",
  "key32": "375uQLw57i7BFWSVopgmkmbyWUZ8EQYR7ZfGqtk5NWMhEKgrh1c91DptdLQa3SEjGERgeKVQuN5k44GJ7833Pn9r",
  "key33": "5qKDLcZshc4zLqr5yq1kemS64KYZYyDjdcycJzF2iL69Tso2ohrbdhfRyph16nqUttH7p13SvFpQtbwoAY5J4u1M",
  "key34": "2s37z5CJdTY7ff6EEa5fZDxTcTN3N2hEsp9rvGzh3evKRs8ZwfJUU3M3VypDTWhVKMygTo6RA8NHKCJ6pcA9TeXg",
  "key35": "3H3B1jUANBt3zYmJDq2i3dmFr3HFgqKbFPvvz9VLRHUFVHbcVQAQpa8f5tFenka2eF2GQYJTr3AK8qeNrNBkeQCQ",
  "key36": "3tjyoiTJ4Won2Xi1KJM2ofZXtydQN9LgpMprEL4TF25xBtmXdhQEAGf2tLAVzZZN7txGSzC6AmkJ9dKCcYKze3hC",
  "key37": "31z1nFZaaijGAPDWJHfQEpAckYTTFzzKD5iJ89UzvrQkNnWi149xAF5RY1ADeS9mEESwKbSof5cxU4oVz8PHEPFs",
  "key38": "4Q1vYc3L4GYsP82bGwWSNQUEDiTVYR9VenyMvLv9h5cny9UvhkuqnorAXDarQ1Xi1JYdWHrEWCMrYfrFx4LpqSNi",
  "key39": "uqsg1RanysLeZg9Xjv1nadSXDyY5PvJ3RKTwcrc5GTD3MVT5679XBmCEriXZUC3DpCRN1D1HZR4hzEEPRu5E5LL",
  "key40": "3QKk7a39nyWiJn7YPNzfDAsndfNFreQsPLNK9Q7z3WWmRGa6i9xn3f3RPVxJfDPtp2EVJBc4qT6McGFKu9C4B8yM",
  "key41": "5CMLz5QH5jjnyJdiNdkjaxjTpBdeMZAvhYkfLLnG9GaLSsXjUJumZfjZ7YPJa2qojFH675BZgmU1NVercrZUKbLc",
  "key42": "TqtomVGvfngXLwru9V36becMJHAFGTCj1sMZv6eFBKtRckpQaweqk5rbcCfw7x9jsHTd3WjSzwgzzcBCcPjEqAJ",
  "key43": "43WukXQdnCaDFvbAMP6gXcPUzywwCfp3ffcsWhTM9gq8XJvDjxsCzosYHTkuyLX2u1pqpiz4JRjkVML8FTb8U5Ut",
  "key44": "2qsUHUg2V6oj8UiAKmPtHYVZ9dVYihKJUChNMVZes6Zx7gKSs5UCfyxnt9bNacz11kjYAmr6aCFd8Ju4z5CTTpZE",
  "key45": "4yyXWi13qNmjmVp4wUqN3rSC72Q3KRV75AagTTG2nUF7k7qoCmYBMPJ9YwZYtAbB4Tk3LzGVLozCxtTrrBVedR75",
  "key46": "56sXpEniSvMtazUr8RxXFavLYz3coHahA5pmpBbjs3qtgMy59BtU3thV4BimykgQcUSuV6gXH7S7J6WqX5CnzwkV"
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
