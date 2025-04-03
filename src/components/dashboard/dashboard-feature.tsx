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
    "5HsA1G44L7q2R7c3xGempgtwPbeB4KmrQMrJpnojrpvrRb79zATfoTN1D7zURFB1wsG6oEp8dPNa6cSbYUxUuCL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJZwGPp3qEZjkLJnYdPZwHPnSkxrE8Sa3d8UcC7ic2aAXCysHiYwzvPftuoNyURENgV64gdgn8RAYeDnxyeAhyo",
  "key1": "ReGEpXxkACcDCF7ZzAqyjPwEi4y3L4E6EL49PU2atRWXtQ15QacfCtYTLVuwH3RHKQx68oDTs6ht2hkMTATte8F",
  "key2": "2528YdZ3DECthnpaNjdGKmfv4iSZiTWAYeMwDMRiF8PKqzK4VhsrUqesip6DwU5eiZ5iK5kuQzGPXvyK85KyqELy",
  "key3": "5JF2AqfQuLDwxnpdGF3NiQaitvhaJ1bVH6u4wJK5q38nHR1osik2kVnCLG1XhJFLN6B3VeRZj3UDc8rUX3111BqS",
  "key4": "5KCRKncJ6ZENmWAbiqo3tYwF57SjQodv29hcVGdqzDf5sLGDtsxbuQ4UKXR9Mcz8PsXF2tZsPBS9rZmn7xVNYTvw",
  "key5": "Agj2x8UYzbjAzn7UcThNuY6ukAwjq71wSwXMMpQibKE62ks4XMZntodL4cQX7kE7MoHbexwWiSkgfAjad5RBMXW",
  "key6": "LMzCrBfVyvw74NrgNtRAp41Gp5GDJGjGxr4TJczjB4oeuGhAL367LTbZKrBCb1h3JNvjrR5XcrSkZ23gYiyKg86",
  "key7": "42q9HkKEuDxgGnTe49449LBM8CoLhMz3QPQ64Dwh5ztNHemZbYTRATGAsnHVBpqmes3HEbALaNdvSrmXyMM2BzYS",
  "key8": "3SQabgRrAPU2unPdrqdifwohyYhbLE7e1ZrtaBQowTBQatomrfQBmKLJ3P2qPRjBpRuohZUt8EAiJfuh2wayBaGk",
  "key9": "4aXLi6X47hYdfysPYQRUBv8sh8xcVt516XTKCNnYYQq4kV8Z1CepFHwLkJRCLP7H63p22y3jU4cZ1vNCE6uNz3ou",
  "key10": "Res2fPnZHbjMNGr84vqqabT34nG3kyp7nx7mY8kEKh6r3amrM8Ew7iJua37vsEGsCWqRbw7uxaJa5aksPzELvZu",
  "key11": "3nMtNEaRFnooM2KSQrqmeWszc418AKDJeBfHT52wkcyZyUg4E6PXb1CgdagfmdtEcdUHpxAS1PHBs23i9BjJZUiY",
  "key12": "2TJn5SXZjgKaWznoDAWT2cnr3yFsKfsQv8vvAPUH3souV5dhkEu48p7Td7dxxnjL839yc6vVsAkYFmyRpS8UoH35",
  "key13": "5YbWaWUsJ7kzRcLoTknqCxdWtBchNMs9wc3Te7gyEXxGAv3hpPaJNyymdE6BuaudZHQjNXUsatyw17kkqetDtwjp",
  "key14": "4Y1u3RrDtALi1jAgmFARJNRsFC78DvPn7o3goaBJK4bTzkySyaBZcENBkY66Q5jRx4d2AQaGkg3YPSY8yCTkNSaz",
  "key15": "4EyXy4pJvdSvNresT7GNTMk5xE64Dbh6xhJgohGTC8MMeZx1SAsnov2BS5Vah5LHH4KnWryq3Be2aZtvY7M6HPPu",
  "key16": "3tU9JmRKUFQo47GGnuXafgJWLpZMJbXkvkZTinfCQCCWnFteJRptVNwj97HWBhodD14huhAQLxS4e9rc93bHM4LK",
  "key17": "3VshVyfF8mzju1meSThosyDHkW5PCe55mWWpNGVtsPVSSbJb7T9VdWVQjzoXFZ7FV3p1ThstSPvGJC1MPuFNe6d",
  "key18": "4apoumD1nokevnGckk3RCWV6TR4qtmduXWPDdHaQ8YWLssJwaNSch2xyjCFKv7zRSHpjx7HkBTSAQCqtZyvpRjX7",
  "key19": "sMbCBTxJnFCYasnN7w3YVgAfPN8B5m7JdEYzWkBx5SzhzF4oCm8xos31LcDq5Anx4vFMtFqexRNXmBZPh1sGTGi",
  "key20": "2FBWS5PMxAS5FZFP5CKU5b5m8RV8YTisCgXrPVWdgQrAZXjabuGf8Z6gC99ndBTzVtVhBaWV82UcR84gDgVna8wS",
  "key21": "8MwaTSF7jj6ng879QMYWYp4mcuCqbi6jjFP91tuNfU1YFWvySGchUWW5Ex5tzt45LURFHF1BSXQMXgdbS2tKWpa",
  "key22": "5uUJ8z9xH2Myyp9u22V3JLHFo4zz14TtG6zSBYWoJ6AUJqpgmV8DNJhK8vm2mJDdfqBYUP6W8FscQBbyPnUxy4Qw",
  "key23": "42wsrzNeeHejvfyaxWebRdZzwx416fpU6vFgG92LukxVbjwk3Qw9eoLqvv8ikB82iRoHriHSPrfbS8Y1wS6Sgjf8",
  "key24": "5DDEjmPnSogvYkn1nwsDT7tB8jTMCQ5bEFwm6QTBKvWNAZPfCdg67MASxmstvBFM8cnRTmoFJmqRnYq3Z65tQSqw"
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
