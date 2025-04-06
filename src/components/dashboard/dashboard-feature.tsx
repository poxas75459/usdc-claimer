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
    "wTtWtXctAP1VprEi4M4NGMHxctj4bn4zQ7CJymSBBu2ktbf62EzY8WpyyZWw7e8C5rJDKW67BZzFCcYsMXJTmQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxbKMQMSvomxK6urE74MLqFr5nWU8HQVCNceVoVhdW4EHuq4zMdUvKzmBSkWoVcCKyKWygxyBiKwDut4Vyf4EDY",
  "key1": "2vR4xeTkoXJarUxjXcyHMADkUYzn3KJ4XBRV7DqnvVwD3Xj8dazD7anehsMMyECKnq49gUFefKZyxNUAFiCv8mJ",
  "key2": "2UDQ8zJrdYniUgVzWhLw8GLosdodJbNC8VFU2MyvqH37cLiSKiCbzqdhZUWnCrsh4XhuypNLCEMMjzF14Vh9uBFo",
  "key3": "5vcJ6QhMbGnGvESQF6UThqGfuwKqrwtxiPoGhWYAoc4ecmPXhyHkvkXsYuwXLhhDbp11crUXhEp3Q346XBFiWCHx",
  "key4": "5wwLurs476m4iJ7CDrqoQWfsBGcWQz17ZjPNA7aqEUj5x81rUiadB5J4krtDwM4K2NrQwdhDL7QDmNTuwaF2nGB7",
  "key5": "L3UKSryyGykKdGdsV7mC6UgEs4yrDniMvC7WKNtcBk1rWKUkd73LLkZLuwD6BB8SpDoqf9upwN8pZBMSWNyoqQi",
  "key6": "2NhfMUNgjKXbPH3XoEcK64Pt6dRjznHf33xJoNkYt5BPS7yX9unXDHSEab2ztkVKajRkmkYKPfTJqVuxzqJ14VjW",
  "key7": "3Wc3pPZ9shTkxRKJ8wUAvkYjF2Xp6pujz4CoRtCto1QMvyix3wBkrdscRnW9VEfKaWAaQ6QbYw9BkdTfLncwmFkP",
  "key8": "2ajNkWwhZDHLai4WAGqvexFBaH6pYR6UaKsK9qUxirS6VdXvDiaw7Gbs4oWSCow85hXr5ZYFLysgeADrGQjJ4nzX",
  "key9": "2XRdpuBMuwTBBJQrPsVUM6ZwhnsSHJ55W8Yi9mCkrV1K57jw7xqDKh1g7bLagcMHiRhHNd6kRy5Hkom1qySq9MhA",
  "key10": "4hsZc8KcmNgJVA67tgXgCCdMdQyupCiByEytPztQ7AHFc5qBMrE2CRZ2pnsuygNw6DYLXYNreAHGhCTvGQjd59aA",
  "key11": "31SqTkxgYswcMbVqB9Nv41aGv5HHejFEZUSkzJ1TH6QiUTZgHFT8v6VUPRjskftnYhg6egcfaK5iFrHqGna9qrA3",
  "key12": "5NKUhA1gG49uou7RdZxN6wLstJFs6uYeBsNDTbTkXEBPuWtUcq3ajgdRaZnNxb6viDLGKETeUDB3HUM9R8sfatXQ",
  "key13": "C97NfSVZc1d91My4eJwBNzsbX2vnYURjVQ9Cq7qctkKRigEzaE9ibGRUNMywsZnwQe2pU4ZVZPeLzHxM4hGf8Uq",
  "key14": "5fj55ES6XUm2AMST5g8YPh8qHvqCtM95oy4HvCYoMuZEPAik6P3xSiXeo92Uy69jbRFKzkBwd57Fq19MpDGX2oSs",
  "key15": "5SkgMjkksP2WbRwSvESstsej3WBrtqeTy9LnaXPuZ1CXjBZ2gvZxmtthQaoASa7EKt7jpwhiEDLP4Eimgu2QutM9",
  "key16": "3mziBiY9wY1pSW8neFe4FP6mLdddeeLP4psENJhCXqJYorj5dWqjom7GrUEV9bTyUxkijF2EAh7w5Qy7XdjbRfn2",
  "key17": "4YvyhS1wFrxvFVD8assRPth1GnodA5RLm9k6KVNV1R8hna7U3pUrWb6jN2BRQh9hjRdKqeWa1WH5J7M8ytWBq6uM",
  "key18": "4eNxr7j3BK5vu8gG1sRe5eAQ3B7ogqezdpGdt4LJj6SD5BZ6waVkRfUn3Hup2NJxiBMu4VupYcevgSodTrwT1WfH",
  "key19": "3eZDCN5c3a9XALYuZMSwvxCg3G46ZS7suUHrLqH1gmeWiaMEMBdingLyvm22BXbdu1bTQTioifcz8R7v6WVM5cky",
  "key20": "2rJKtQ2hVnSx9w6BXsmyDZLFuFEK8ZifnWgVpfxMEhjAKUiQbnmp1mwYoT8bSEA8VV75XeYYZ8yuGuunM7gSaM4A",
  "key21": "5vH5EDCptAPJwnDgNB8LRQpmfanNYsdaP92uaJanWUaU7a3CiW6M95RdZ6xENoFyT6Gs5iVEJ8nJg9Si28m4wGCR",
  "key22": "3UNEFBDzCz1TtrP8UDLpkv3TwLsBWgcKj62S9EV9yaH6hpunCWUzZBDBuscsLHVvzZuW3fCHVVFCppn5y9vGjZ46",
  "key23": "3vuatM6NhgcRF2CGqiyU5xq6CbNL4XqFssoaKLMafosMic3gKxi3w7pLyGA5qajNw5MLuMyYeRAYRfnZfNazb3fu",
  "key24": "259CAQxXyAxfsYvgaoecr9hnwVLoTX7JtSymzLSA6qHcQuwshd8xcWBXwiJ2gPYoetTiZXN5ZxzCLjnryk6fXWJT",
  "key25": "3xN2nZgR4pv7oh6XFbWKXpQ8rsAHk2zrZfZnqrsR9nYHaB5exUeGzLRdyANXSffjPVAK5kqupXXifwmLSgG7fMJY"
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
