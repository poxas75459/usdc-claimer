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
    "2mNjiETcQw1LShSH5Zs7k8XRw9mm3Gb88JBKDW2qdLCTXQEW5HcQuhRrrqep8S2TRo8RhGEgoKi5vR1xmAPgZokD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFJrTbwAzNDTsRJv1XtiWFefajgWuqhTrw55er3v5zN2NvhWutMSpDNQ3UDst8o62njComPkCmb7zogaNq3ChYM",
  "key1": "3LWQVa8A8pbJhBSHraMpTFfYqbbZmMk9Rmu1oFvryPenQq13vbxvYWrojpNoDPtBuYYcbsZEJDbpvLAQzbP551vH",
  "key2": "3oT8neucEnNHaRHTvJHB23aX43TYR9BTrK79yG28gSet4QXPQdNyXWEXDeHTDM2R2J5x9isbw8HZcCBRgGBekf6h",
  "key3": "5w7AKeisKejcr1G5zytXvbsbCEY5zRRvhPeV2142qcLGpvoQAusr6bbHk2BWMMfYVcGjFjUHEMBLhfw8n6cmVzHy",
  "key4": "wTmLhgktyVMnSYZEpBG5WyjVRMf8VJYh9g7GeiCgF3ijqkRCotHDfRGDSsEsHN2kKQCtvxnK8SCUWbqu2C6k5N7",
  "key5": "2jAwdZBbSq6quqSRkj1YX9s99PdWnd9EuTJTUSawKs96xJPJW25gf5EYPrAzYsKCT8rXhTTNjKvvgtrgCpuoYzAF",
  "key6": "3vuXWqa15R9CNonC5zK26k43yxEpFY7qjcCPwkwSL7GCG5rXBthjyaMRu3a4GwcgWaY5VhPzDSpYGePU4G3UA9zy",
  "key7": "4amgrfonZHhp6v2vTDEiS5qskYP6CjYTS1pgurS6CbznFERNhnU3M6hHYjXbC7KhpDzqRN787W4t1GmyJixTi4c5",
  "key8": "5dp93kqB3fUnzy9sZ8nxsFiUpmcNkn6R6WBhc9g8KenUiZ5kzb6B5saJGbCCvwLAFvCVyK4HWqxRpbPy5ZvPMYgm",
  "key9": "2KaCFDx96Cbc37pHYzfSSfsdus15iDgXRZrsJ4Lv6EMNqqgmGwAbGMe9ncPFLDAnwYT3UwetTWDKZ68P3xTLoPow",
  "key10": "G4UrKhQXKa83v8XACp5YP94p1x8VSC27SEBhaWNoYDzkhQ3k2ub2C6g7cHXxTALT2LnSaRkLDZqFmzzLntmNoA2",
  "key11": "MBuk6NGoLXo66MEpGMeGYACGk7zVNcHKb1Xa766TZrC6rExamgGxd4WWEgmHxG3hu3VfHYPctTfvjpoMbGgqKou",
  "key12": "4nxZpeW6AGZ9bLqKwS6CVo6yspUXBy9EnDHT5DciRmfAEPo1GBeNdXXA3xMepvBLwGbEx7GsRZKHp18GcK44dyMS",
  "key13": "NDYkksmiTLazdw6z9353XBDgQFj2GuczYSq12qkM19Znbf7unjVS2MUns3x55W49JL85WzeuJ1FKC7177XQVCU7",
  "key14": "2eYmiV8xuqcePJUJ12bKrqAG46PqZxQXKxZFYGHbwD9cbDeVGQ27jDFR6e1oTWVvDH31fRhMvKR9nCDQmmKJdned",
  "key15": "3WmJJAHKSheXZt8X1J8kGdwsZgJzvPWBLrQp8B9Y8TSgms7EqyoDVAF8d4nbtDjQXCSuiDMcgJB8yakvkrxtSNKW",
  "key16": "37w47nS7MBxqBytXsFYFrBA9DTdHMG4okygyKK97CM2pJhxU6EvWFt8NtvtySkqCynvAtS46z95YVy4wPCpssTaG",
  "key17": "3tHa6PTmqUcX56b72q9JyUhgRTAjjghk8BJfRJhL5b7dpaz6sjMpbn99X7i9MPijjxfT6vsxSVPMHQdbxqnMeVic",
  "key18": "3DRLz1ZwXQoo4QoR9hn63V996PrVG4XKTt4YAttijsAc2iLETocD68SCWXXrY8woWLvk3XMQyFxPnCVJZpdbkBiy",
  "key19": "5fx17Z9UJhqvB227PCSCKVCzisuzL5PK6eUXxzfsQ8kJTJZVtx72g4KDCsb5qqtRHrH4URrnyGUnrGgtq7z7gfP4",
  "key20": "5hmrhmcZAcdz2HTXq27h5KtLmwDgjzcaPzjTg9Wngob7ZskXbH6jXQS1jxGBVdKMAWAAcGwgPDbfLK2Vdy435kut",
  "key21": "4e5e9s7tzt2MV58nRYGEnLRuN5UWg26YpestGNTWZv3R73j73PsShJBMFTPkZbtWrUqQmPdJzRioUdiP5FbhvWJZ",
  "key22": "4ufquAGybnywjA8VvSaHWPFSu3Vk8wvyBudJrGUqGGMBd6U4rTRwD6xcNsVpw1yrWZkPvTSzMg23hxLs8atAKpLb",
  "key23": "2SYdxrsLi1HFZQ3efazQinfeVv13yNGeinAFeD7vG6ToK6teygf2fHKFrCdDriWLfr8Gdk9iT41rtMKPtH2x6RMc",
  "key24": "4aA43iiyBa7LHTTasCkuvYSHXZAWN6MechnmHVSttzfq89jRSnxRPmQ5Rq5TjqTbyzSX8FCAMTWeDN7AaS5CwRWD",
  "key25": "iWhnbYRH8kHqU3v3qjubpEcH1uyQnhdpanrf5U7La5xAbtU1jrzCCe6LVtmvMueduA84uBhs7FK8ZBZpsYATF61",
  "key26": "n1uJEGt79jQaYWTGsGKcwLkJgWR3Hn9bdsKorRZNEk1bKUAnLiLdeTP6pCasLxYRWab4hBWBbRuxYKjixT2hTMA",
  "key27": "474Z3zZbX1UVt18ijuXyREXyYoPdq4wJALZtcf56XtG5gfeUWvuuFkAUFnBfPtYZQJrdE1n6R36W8RXurAGE91tK"
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
