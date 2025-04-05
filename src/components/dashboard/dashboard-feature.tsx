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
    "gFzMyfQufeshbBB6UiQf6KjXmR6MQk1kXW7g7JjjkggPwqJtFjtKw88Jn5sv96cKmCKwtx3KF5PWL5Mkh5N6USW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anni9WASkRhF5wk91cL8c2LqESnuR1Qe5ngkV5UCGpPxarmycJdDprewuU8T9WV42efTyd1jmwVJeYrGpN6y5Wf",
  "key1": "64yvca4yN7cCRKkhGJ5SnZgEXuKawxxpJ9ZVEnnttYMGyodU9wbJT7GythRFxW1cTkZNuHBKX4nAnnbeNAUCcxP6",
  "key2": "fKswh2zEiUGUW5r7EB7pHJgALGzz5VGwgnVVVGMhB6LQf6UQRGQMixbcanegxH32CWiouVfm4oshvAw5DTmCW9E",
  "key3": "rxqRTAoaNKGywsTfq51CvdRxxmp66VvPNu1jUwhSckWre9B2jmTRZz6RVSm5Ecy5jJ8sY36gVvxDRztoxogcQaY",
  "key4": "XRGUHdv3DpveKWrS5XDMBY9Dr3hDyXZ6ekj65d2xPDc7oWS1iJefnpdgFoPvDbjZ46aWn3jaQJvZqiAjYyQeer5",
  "key5": "32adGhQTLo6j95MqwfUFAENZny2dsUEv1wrGTjWB13HUg8nC3ZsbS3FDsBhNSxKMFhY3jftTXW1qnH9QkVRZLzde",
  "key6": "4wFusUDGCA7Lmc5xQuwvbjwPgrUR87YvvLK643ZY4EgWRdQmBZ8A4Ry99ARYwF3xnvENjSHpXWRfajtXa4dKZQT1",
  "key7": "Y2o8uLaapNfWDUvdFEeQ6jHRY98TDyysUcaPQQRkj6NifGR22W5k41XBydBYwo1UJPzqRNohpwpnW9bBmynsKwU",
  "key8": "iMf1LfVJoVrFGL6hYHDqva19VbAwmAu3Mi5iMtw1eQer1KrHdyDQ6taWs5KYifZrvAPFXU6aYGiLiWjmKZ2ncjK",
  "key9": "5zjvSLxQwDvkgnS18bpCqjTTQ44QtuoEoJuCpvxtBnv1WBuKjYLSXuTP9kWooxzgBrhsn47UZMpB6xxMDjcirgdx",
  "key10": "R8CDPbG7A6BUdnAeeRBAAPz8mPa9enDcogDKy1TLwQ65UZTje2ZToekR8CSFJytRJ46n2Zrq4c8yQpnLoyLYPJg",
  "key11": "48fesrzqxLn2rS188bSAkV2vvEuJ8oD3Qmasu62q2VQ3mbJ2nrHxUVEKxSMjZvdAWqBvWZUeez3UX1EBhyWZabah",
  "key12": "9SSuenoCh2cgdt3qMbM9zwZZEfPf7CX92qCYdmwXjhmjcabZ9BknYycFz5gz21xB3Cc9usJABn6KWKQ2pER4bT9",
  "key13": "4t1fXGFJBbKfaxVTX7YW6qE1LseVd7XUzBxJGTeyjaJyBFwkJv9A7P1UW5r9Hnb39Y2SVb8dPELNTTjLYEqHTjmi",
  "key14": "3ZqFwLuJK9B4AentzDt6Gbn1w9nRKPVHR6yc49sC5Z943X3RzeE1HSF98fn6QU6Y2gE1PAzx9P8bmTHwQV6Fb12t",
  "key15": "3YVq2buk2oX49Wqcvhp4j8iFn8guQS9Ksep5ZVvcaXETcVBD3JVuQqtZVPsKaftXaB9sx8GQhMo2pgTtSdX7M6xQ",
  "key16": "4mzPxQys8JhTEgMYmSUrkJJBoPvXLF8CVAzZW1af46QvJMvC4AJ7MBRJM9umqrkwkUDDsHFTyCQENVScSdSJkh5J",
  "key17": "5yrZi1PavkxEGAgdx7UKd9wYdeHZnKogPU6uQXAEVU4scdGBH15JH2Df1rNC9qUtkTUtEdA1mEVWtziQkZa18TXA",
  "key18": "3KyDYoTSVfwf7692LrUtUvuLv46vCsdJzt3i2w7HWnsdumVUhWbJUF125smXXU2c5wWE615UbLdfK4ozYAxGGVNL",
  "key19": "3GrewDpFiBZZLmhPZXdtuTJmeRnku4oRjiRDcNt6P8eNcQaoV8C1hwbenSN3fFVd5iK6JE8eHGmWGyBQKuDp98nx",
  "key20": "wUrLMF9YguoTkx74kKU6mSH5qjRGhuHNTHugagMHxNTxLLu96VSs7NvXp9YbnJvn7Nt5rpTc4eqs2NK7qdPnkLK",
  "key21": "5qRa1zVJz7aKuYuFATvNHKtKjYMVt8r9KNvS4Mo2fYsWpPaco2AqdHPDVan1xiLWaxnkq9KyDorjkaNV1dNA23mw",
  "key22": "3m3XgJdHUP8psMoXx42uF8nKQ2ZoXDkoL9NmkToM3JGVcu9u5zMdbXDVK8PDy3ZxAYNQadPRcK735ADMGnfNVMCQ",
  "key23": "5fmF4ez4Kc7RNTgwo1m49hdxhKgnx1L18Jdpo6DyS4xm8F77GVP5UiPT1ex2PRYeZvvt2MBSDrTXiMDjZ9EE9E1d",
  "key24": "2ymBGsLwJrVqGDrSHxLh5NB7WBiQaQS7hFUhxi1Kjfr2FTCyxRcenDaBipnj4Y73Rr9vKhGWfBnoX9BGouYHDdkP",
  "key25": "ybCTRGXr4ia6jwpd2BfmKMa8VpNQwGwcMXzBQhg3KpUj6CupfnEQ1QbDpT4vUd4rN19KwG9zqMiqkb3qPNfsJgR",
  "key26": "5ChcaeZso5B49TSrKCXfBZAShDb1vAD1aYHmaWvTJoduUXwQ7obogPsMHyrTbo1iYeAikQFNxcuNQSLPkw2ZsxGf",
  "key27": "5ReRi4Utii7aESqWqx3FVVLmoet4s98ramTDhZpLLYez7ULi69Pr4R6rMDGf6ddxeezoe63eRVEW1TynUBYYVUNn",
  "key28": "V3d1rUgc9dbT1hFGFUW3uu5PwJLcMSFNXX1Ebpz7drUorHPhiYVHaJyc6CQTXm3vmPEMz4ZbsCgaxJ55srDf4wv",
  "key29": "3bvA88ntJMCGZ8efwFaEFUHVhf6kn9dcdngV1Y6v6vKssLsCZT9v3tayvwwi75T9da2PKXfckBRtx8SnRBLrR2kL",
  "key30": "AiQDsNzkJ9LQgXtSBNL8Ff8WCiy86XLAE5TWJ9uarWHWGRf1kpRAS57iYmPun4ZpB9yqtF3jbgMyaFfM5xV9QDm",
  "key31": "5fKwoU6h5Cuh4RaQm3YNcXoL3CdRVL63j9noavdx9P6E1V6XSbT9uiWq8hgawTsqXk6R6yYsoF473K6tGWFCLecS",
  "key32": "4YMK3SmaVcxfu4rQvbVXGS26v9jqiEFfyRMZjCCnS44FCxhc6N6sFja9rs9wox75fBpVxQ3dq2CTnX7EFfmtXkcj"
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
