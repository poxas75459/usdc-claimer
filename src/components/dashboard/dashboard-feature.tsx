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
    "3HhfiBNVBrYvnnFXdRuFXW1RaoXbz7rxezQNQ3TbNpiw4V1wfW9zXQ4VLcqtd8iH8uYphd9GQgsagiZwhcWS67Ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piiAgkMLZJeKKtEgCELAQbksqM66kJ63jNdak2j2Pfm1qmnm8jhvZYAJNbWU4ycLYRmRUnPGCty1eyBJ4XNkrjo",
  "key1": "5hcPEBiGP6LVhfJQpiKpmh77RdDWZywbRjyFbYetpiNfZ7pg1oY8CqDwLrMonmFXAu3eGbnRDDh9YftWyoMh7ckN",
  "key2": "4QmcVGdgcpt4s2SV4puyeJfv2tjZcTy5wnXwKm5t7RTBRiPqQGGii92CwSDitfn6FPYKUja2vqd6RTEBnHEtmK1r",
  "key3": "5E9Qvav2AyHHEk671sMoCNwb4gtEX657N9HSdzzoxVmMjdUVdxFF7t2zWQ5VYsLZgnDiVQGCMe7D1mc8SEVBk9Vs",
  "key4": "8tsqMdWYZC4Gd5cjgo6nLgRefraF6Rgn8mE9iycyP9JndMRQaZLYuKZiscDwgAzUfkHinruSSYuX7FpsoqAsaQY",
  "key5": "kL5KzfPa4XtTuxbryh4y5XpyfnSYhWe8jqc52QLspVovoeHAAwJ8NRyF2rsqJCEZWkrMuHrheqKwRkizNPGiQRK",
  "key6": "3VECs4JefUoArmGR7Eckjm9XLmBd282CeieGuzr4seb8pH2o7QMV75z4UgzKU3JhwwsU9QM9eKYWTDL4GgaGdXW7",
  "key7": "5qzgojVksraUj1maSV1fEoahhZrkmzqJB6QAajGcKYgPQKg8S6NoUW5eFjgqkm7erZ6T6zdN6XtDcoBV55YUAS55",
  "key8": "9Ca7zqxwGs42bUwu9USSCH1uqZ62UM5DwUnaUby9LWw6iYxA7ju22ntai8kDSQUTjtA2EfJsVfxR19q45dpKywa",
  "key9": "65LvhYJJsGL99KB7uHFoGQiZVXpmxSoDKZehfK7RXHz7RsjFrZvqpVGQFMh7zpGHXFMB5gQMLJLPJBD1HxqgUSjN",
  "key10": "3jzxXatiMm9zc4zfx3CphJJTqUnscoLmwH4yJ1KemFqkw6qozPggtArX2cvnRfXFkHqz5GNzWnsiNYTorqiXCcKd",
  "key11": "2prATMUziGkiVcy2WmPov16KSENSgfEt4q3BqetMZ1baMeaXrjisQv4YzVa2BfPUAgaNfMe4uLaTzRfS7GwQiJqA",
  "key12": "tXxY4rpeLUeuUdZHWeT2NzaicxghhiBYLeggnRXKxBJHyDZPUHBSvNmZ3HJYxsSi3RAo4tbUHvsnZoZvt3YneDL",
  "key13": "3DwYp758LVCjAh2wPTXDcBRDssuLbgozw2msEZMEB8QHyAZnUrDQes6g5gBwqAG3sL17MJWsMt2cibAKpY59hEXF",
  "key14": "iargy1R5jsybyxzaoLMEgW3fMrvUbTsjZswk59tM5DTLdYmRgKaR3d88FsFbvGwd8UQQtH9iHz1Svp3xqUw8ZUC",
  "key15": "5x4JihguPqdFZ71uQGAW4kv6NBJeFty92cNJGx4SPhpJT3puBRx6nEuV5AmLyKp5BJmcnshWizL5secUgM2PCkiL",
  "key16": "5RQJvTAyFrNJQTiANKPaiouWu2W8yutoko9pcQqWj6NKKJ7N4FW3idiQWtwmS6gCGL2JJwiL1evwuBsxBZhhcuuR",
  "key17": "5J7UnTZeaYmT5Yk6YaEV17Mt6PAcCRRKVSjiSC86uieFBBhRa4UpeoKCwkEURYDacytfsLxbooEjwEvnRiavkmgS",
  "key18": "2jbRkMoha5xyVtNFRopHC6MzL5DPyoykpqAJWta7o9phJdy9MvNFGGXscY45ra3Ni7wWMVxoPNSsRjrpMSbHc8d6",
  "key19": "4NQu5rw7prpewtGrNoM4XNCkgKMaVZvsqmnhvJE7qF1QuSiznZxcWLbSRKF5ZVaw7cr6HYDrWozFpkpALBLuX38i",
  "key20": "6v6xiZeeMjZnY674aDhcouxKnkKQmd4BUPHNgsTtHYaPy7Qu5s5fMRXQgXyNwE37rujWmdwg8RYvovd5u34REP5",
  "key21": "4RuRqU1gFJ5wuG7VZWLkprexvQNmK4j9jWQfZwQ26Ke7EvK4WBuF9x1BeLM5CGkpuhDrixjRRf7QXo9QmqbSvoTS",
  "key22": "3HjGmGx2i7dx5NHWncsBofXGhSkwgVghU5cagbYwqkz1KooAG8HxYjPjFs8ATBhPKfmApYm3giryMM1CQoirjrva",
  "key23": "5uBBa9Tz1aSuKaLd7r3SQBvD5fkJ3sHNGG6VtNW4abbyj1Vg3eEYdyeZbbk9LhtTeKCDU6DyWsoibJecpTvefiYd",
  "key24": "33NgXaR7A4pro1ZTnUDPetPbTxMpxMhaN9iL1y6nyUb4vNsqJu42LZDp2btenZ56LMpPguZRUqi7LCVqmjrDxeo2",
  "key25": "4tB9nCR6TU4ZnhMqaESBjka3ajE4KTh61b1LyedJt7MssiketonDQM5qHyo5Cv9oEGoAncQ85BpoutwwzHRskQeV",
  "key26": "67N8rKUWyQJtZ1XNEV8N5LypJGJ9qfnhbN2Vh9Y5BD6EHTdxrDue2fhuhydcKMNhH7tJX3ee8LECkrYCR92BNV64",
  "key27": "2gWq4zEZucPmUFABSGWNbNoMX4cbkAjrLhPnmxNoa3CefoE9WpJ8pvHESo1cwHsTQqdGKDFvQLCCoTpPRN2i7g92",
  "key28": "2RrRpEvrgoNv8wv5S3p5d8tBpLhKx9276dMXhWAKCXwR38X5EbuChWhc876aUY1ufBg95f9iFbZoJKDdQXDbgv5u",
  "key29": "2f4mueWu6xpVNsLoBJdRjYbeRSEZ3vmYTPYbHHhaqSe2GojReZTrNPw2apXVnZCsWB5nrCB5uo7x8K5s4kQHgwWf",
  "key30": "4bzrciD1kgvn1mvK58SBGCSbSP8eg7M8NjKk4zLKagsW4cNDo2NoCUqyP7GnRby1fWSqki4LG1iViBZqNy6zZkSw",
  "key31": "21Ux5JZHkc5atgApJPcgdo34ifPv62MrcPYEC4wYYZuAVs2Kf4bxgoQ7hgvL3UVbmrmqmdpUzjisZDG4bQQrs8CH",
  "key32": "Sho7JnaECVC755PCyL5Atju81b1xR8az2FkGjex8Ym43LxPW6ZbXbRiKJ6kDx14tw6KxECa2YXLGQzgmCahzSQ4",
  "key33": "3EQkjQecjoVcQuMRLrAHJUceoHRKrcWKtgx32C3gB6uykeFeeQpUtDorbuGyk9n3vK4uw87FxasweTLKYkecYmP1",
  "key34": "pm48DUMo2zYBpbB7cChPaXTBgJ6sZ8hTMPhwmx16TrJVbrGQ3UBz3MwdmdwPdXb2JPrubWovQUhjKssWPJNTNTJ",
  "key35": "8zMj776JdZswz2hNvCaiQdfnpb1jNBsbvXFFHY48bDYnmbniBN2HJNbLhWfMJyzmqSZpsWoGujNRUGyCpddyerK",
  "key36": "2Wvgh2NZEXe6HhMdQVVa6nriEGXQ3knX24dtpBMGAwRD22DrhDLhZxRqJmiPXe2g7s55MrXc3mucz1KUkAyFJYBc",
  "key37": "37v34NvSPAXZdmZpVpD2pW7C97DKV1Rfkj8h4sqHbFDh3sRU64LRq5foTv9D8xWxyibmadRgMcrpPpYT7xLDapic",
  "key38": "Mnt1PszgipYjWgJYGWjJDE3cTb8XyZRxichP8URT1gWprpgDMDVYsPejThd5xf45ZA6X6UvKqqN34ehL2aN8Puc",
  "key39": "5suBddkUALQcV4wgrEko2RTr1Leqqfc9dh6yHHSjvZU6vfALRZ2TraVsCmTqVF96zD5Mp8yVvzLam6QPhhH2b6sF",
  "key40": "5XPRLNbivgev7nUEKBd5pXqhKPpvmJAsdTWXmd9EUsnAnKUFo1ikUCeFL8eseFNz7VYMksaauB6Zh7Rp6LGTpAHa",
  "key41": "2XVFvHBoUXHPfuCzVUcY75ghXhQLassBkWMKZif4RiRi8vvFhSuVsEYoqT2gRwWuWByAEKBk4b5JSB3jkNFjioFR",
  "key42": "22TXDc8C6uZpFVzNsJU6En3PWjpLGGFVGQsCo96S7aVbCut54zsEiaDMnHhetz1kL8B4kAf74LATTvEnQchB4TLp",
  "key43": "3xLjJgVXiMiwEY5zVXYtNPi64yPEhNmLn56E2cFPqMyRTqyCLg2GZyJdFv9LdsQsbxQk4qLwpg7WMxfLHyjL6xZ4",
  "key44": "2fKkffdn7MNMaMvocCmEongbtQEGkcqGrgrp5eQ2yPQPuEjQYRH5Hjy7LrW1xYxiXgXyqLbrNgqnLbfy2yXFAivt",
  "key45": "5qfhxjxFGyiYH7d6TeTqthfaQjqtzCashKDBs1DDHUF68XJHPkzQiQRuyHYYa5RNrTiLNg1e6AytTKseoUp1zog6"
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
