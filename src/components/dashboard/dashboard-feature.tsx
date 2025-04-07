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
    "5hkzeuEcKGtPFJjSsaAGWmP3onzLoK1BQbo5f1hPaRJGyD7gDATNPcHquGzd3w5o5NshyBpGyhxVN6ZB58SiFToS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KoM5sDifxsMjddrWZLcReNBCURGXxhzfczHSBixRLdoseez9cbLCMM7V29Htd3pi75vyMshQTT89WCWydzLndL",
  "key1": "2xQP5AWXcCLDHMfUnJWPs1J2m51AX7Hz7tYmL1KAcmJC7woDytmUhregrkS1v7DrskMwthVz2DPbFbX8wQa2WPhu",
  "key2": "5ussk8Su362VLJba68wJSTmpcNFCncZSkTheo6ApywmF948myhtpkZ2KJsEradKfa4Psv8DvxSdAZUwj2fJo1fj9",
  "key3": "4PEAwdKNF2LAZL2199AromrGUw1UUVZTsZx1QgvrG8g1vc51v4RbymDVKsZbM6dmPtC7iphfyfJpZjR4z6vzRopu",
  "key4": "4nKZcWLVaf6SvVN4MQcLWz8YxFYDGpr572QgqMJyGSBJqJvuhqbysqpNCHS4LNXWBwLhkZbWE9Kc5GzfHHnHJPuE",
  "key5": "2y9kAK3LP2R2H644ZqaNTJC7FmB2pjpGf4v6vjKxGKeT1SVq9HefWNzskuSVaVZAw241wciqT138fRg2LxbZKtzM",
  "key6": "4tWA9bk8pbLMUVLkuAqnHZatye7j8yuwSSmyzVonQpVZX5ZhWVx9NLceesoJjQSwZoKRDS9RyoSHaEgiZT4BWxyR",
  "key7": "5whbo7hctECHgrDTeah9ccDJmTQ9JSVuC8rUeF2TZez5CDLJxY8fmMT2oRwyG9n9Xo9gcGNdcTqoEhLAguSdJAai",
  "key8": "2fBFf4oEZpJ9t5n6iyz3SN1NERuabRoHf7zuq3YUQy7uFqjoMfFz3jTLrsr7nKKbBwStid2MFSzDFupi1R1gTS1L",
  "key9": "2HqQ9DxAUbfJy79hrAmKYCrsvR2hD5iqVcegDdjb9C1nVaGy8bzngSPNXvXdfdiqnDqF3yGqRNztwWPP4R1eJGR8",
  "key10": "3ucxpafQzzkfTpteg9pKaU8Utb6ijtFKvNMJrf7d9wzfpAzauyDuK67DkkJdT8HbxCfjNv1CHDft1zyKYPDUihAi",
  "key11": "57qhmzaWtGsJ4ZfrssMWd4wNGuNmZJpmnymXRg4Mcce7G86g5TM9GG9JiCF8PvJjjV7oHoRkUCHw7wkVhjjwqXD",
  "key12": "54FVHyhoMoiRKxjyA5qVk6RhaZ6nZTNtAjyiN1LNzaFSDLo7wgKZo1nsEkRbHTMVfEvYeisPTctPFm5FsNMah1XM",
  "key13": "2vJ6xnLCroaYw95qnFoDLYnHephxE2KzZrJPbvB1xAHHLMUgPvnrtiuk8JqHfQsXgKH6pV98FzMBKRZ5y67BamsQ",
  "key14": "3rHpv7zSDVBsvuDQP1rBvCLPDtSKbsYzGDeCZsuYcJqng8CaDjbpX6t3cvtKTiLePygmb5vnmWm9mGUsbNz1Rou1",
  "key15": "2uREyGHs9mBVdPmKGfTBr3HE2WyM6LwotJVNbKyNeXaz7BXSvkUKqqcqRLaNvRdAgmpMMmvn7dMxyzMvKXA7371P",
  "key16": "4f2mfSU5CJWJdhgUbgWYKmqL31impTodmfrn2VWDGQEppFNtSrrQaDzq8mk12yXM1XUf7Gc9Nvho32YkUvUERQiV",
  "key17": "4YWSneApJ5vvdutf4v1sTJERgRPTEPm3waoKdymgUoDhRy8NFJWqGMPdXejoktK8uDU88D77d19KQ9Q3X25Xey2e",
  "key18": "5enP9VFTLnJkCLzD6frqsdMxRovuGdjkAD2vTxtRyZAAWoHNU2cAX3Y8s5E6gzqy9kMXwYLNtsMpEyZnCSHdf9yS",
  "key19": "2Djykp7ndTyYxsA3vVTxERBhVf5zDvp8GbtQvwAsqd1NTN72ABkQic7HrSfjFxxNfSR4fAs2tQ7Q5pKM839uvbH6",
  "key20": "4fGqTpZxbk6mj8PftkYpAhU5xY63rB93NrW8Z8BkeVs754KYFHzUKuX6UjuTTgCYqHcQeh57rsXv5P8iUawyYctV",
  "key21": "4fhAS4otZAHbrMi9Evi5uenLRRiR38ieo3HbcSPvxPKynBdBDXrbRrhvxi6E1S7ZB5oJRiAo8REDfA19n8cqVzH8",
  "key22": "3C1t4XQS5EoNdjs6jZq2hd2DYmiWWC417m16u49cXgfNB34HRHiwX4GFFffj6THcnzBPPEd2zYEsTbDefjVjhu8Y",
  "key23": "5jpxV6KUePwSCPNRNKTTSLEcaJiCL7Ae43q9J2EQkjNFVntM9yFuUZrryURPf8Jd4NKom3hUAm3PCFjjzWbf7PQ",
  "key24": "2423AMMN2HjyfP7XZ2ZE1SeJQRFzyBA4Gyf7Qp9hu1fEaL56yxZ5g3NAyKAnsGZ9FcAQpGoY3cewiXoqo9ATLPmr",
  "key25": "4HqN9fhMAV4KAktPjvFH8FdaRZEGz2GYxRZGDdu6bgo1JR6EisKk7M8FuJ5rRBvVQ5j2zKbjRidPjt4FNmDwgzRS",
  "key26": "4xpS1ZhoEyMxo8y6TvEsgqKJEKnXjG5dgYEnXsDuoERa7Lroxjq3Ct2DwXEWax71soek75G6RwNARhLPFSHUQ3Vt",
  "key27": "2tqgXPsggNDr9JxpeG4R5qcj6NEwEApyY1BDb6KgDuufSDT3w7yhqyWFcMphquCazdnTZwrFKFkL8X82RCA3uzRA",
  "key28": "5HmbtoWBr7o9NkkNU6z5D9hMmfoKxHHbevSGTAyQaztCWYsMbazZwGQowXnbxcrMHyrpBBycAfcyjBAr3fDcrry6",
  "key29": "2MaCGKEFyHdpJbV5hqzUYYN5ECM5nseU9za1FhWUWX14aM2uqUEsZd3ReLiyohKppAMeBpwcFyGWNtBdq8FN7YEP",
  "key30": "4f4KTp4u4MLVW8WUQSXXtamHXAiCvaw5vYPqPGGJc1sPA5Dj65uWjQbgkDAPxdqJ4udM8CSAo1Cnz36VTJcP6dCo",
  "key31": "4tkSsrZFYVTobjYCnaZGFZnEsZi2MexdJBeGapDZ5Hndfx4BeDVNYQsZGfBNU1AagKK47shRyi8SGDFYDK6RM6Th",
  "key32": "5QHcUUcVBMpWmHSPkb8wd2pfcYSocJhCxLvQTKJq2G4GhMnTnFHkmn2vqNk2YqMdY2pNy9E4ULSkr3LeHHLq99q2",
  "key33": "3bLqEFJMc2h8jwZotud9qkpidkT5k6TrYYQv37PXxTjJYyntPWxHkALiike3dxZ9xNBcBPtvD2rZ7FEBUkFmv3nz",
  "key34": "25pDTJBM7bpA5Wpg9SSsrC315XtJmWnQJDmB8Yn7gVvL1FnwiQg6DmVRAjLEkKCAbiChpxF9xBrNTJuKVHZi8QeE",
  "key35": "cdJaU5u2qPtuYq52dHD3ZFn7oh7gLNdMg4VNxiVD3eRy4MSmAYa67QXjiWHBxxEGVjp1famkaUWLuzf9XCGKqv5",
  "key36": "51hYA3nUXwMy6L4qtaMABVKcBqLKg5aTrFGWDBbSNSQTMfpqAqk97bjT259iyb1R9Q7MVrDqUeUqXdxUskjK53qZ",
  "key37": "5a95FwYdJoLq4WvwjAurQrNFvFvkt8pLh9N7JHUstq2za1us7GMhEJP7KVRLMarLi7zJzNqZVHX76xy9rqVQPEeJ",
  "key38": "2kckniyJVCANgNS6pPWp6UYeepNd59CnmNGHANfAo2CXye1FEm75YBLWjgZWytCUrR9jKi9jc9NmPrNDMHyFy1pB",
  "key39": "3hqnGdARzKpF1CkDadGfRnfPPE7TK4JRy2rch5UyejmHdXkkuPVHSesaCjmF1vvXTUdSkzPvXVeAfH919DtG1jRk",
  "key40": "fLXRhxBvjZ5HFe7T1rnQdGuPxUva8DGfNZ6BapdEpkvKyLimv96bxxnpcFo6h5m96XQheY542GzJ9sWajJVKzdH",
  "key41": "221VWZK9L3KEVgYniQqZtnrXRuykU259Brby9qqhxEUfifmY3m9s7FaXcVqUemciAhZka9zJsc6KZPFV8WYxQ739"
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
