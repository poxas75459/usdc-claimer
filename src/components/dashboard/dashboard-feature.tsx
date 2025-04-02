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
    "3Ng71KWVdbEHPGRZUwVsPTQvE5y3JvhoRgeQTCGSxfCKwibzTgSS5b7oh43etvNMJh3i75DqBY6f1eKrE49B48SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sF92LcCFY3bamjTWKyRkD2KCkgBD6pcN6of3N2RxhjfdvAUNTyfQNhmP23FmVHMHn4wLTrNdc6TJfNPZdUfP6i2",
  "key1": "gCW8SJYQCxsyz99qq7GKQ7n5PQ4RZtQzbDD8fW7igBakGrpN4KGxbSnEEweUaKg9bXm3SjZvTMXGqSqWKqCDbNo",
  "key2": "4dA9hejnD6bu2sdihzSkcA3VJhEZrfH16faDDJJwUNYeud8H9Qo5aq28fzEoeGqrjbLziQyA3QubpLZa1fNtRsjv",
  "key3": "5PFZnQkFKsqJ1L45i6Ugv82srUvGJ3MFY7EEzWz5wWjw7JFUFQHF1wNuE32HoxUEQax5SWHFjUxzHzuFcLW6A8J",
  "key4": "4qY9sEsxGD8cLEg7vHGywogKhoZNVC3CL1eWusTqGm2WRxBfzpJECGHeEqJT7QWKHtzzFHS3QMHYGypZmjWTJBE9",
  "key5": "51ZPvXcbiijadmqGwBJirtN6i5MtyYSoBNadVzkAfsM7qUtNoT7orB82bn4f72yNzSr3TPyEg11TX3X5r2bohZA5",
  "key6": "4eB9J3ZFUTY9KvgtDTPjrb25ELp7X8M95tkmSSHPVfzyrRVGhLBd6RiwCXijfDFEBHxKLRhsT5frfNt1NWgkgMwx",
  "key7": "4XvH5jar3fNcniHKfaLvjde2VVasoMBj4Bwv9SKWAypeQjSxk497ohNAqEDaLFDvCApttwUaaEHPFQFriV5VuZK4",
  "key8": "2wY3Fnp6LEeLcGxcFVW1wGgU6YxUniK6cK7RcuC3ajWiLKciwHPDywfaLBc2baYMVcJcG9PHz7gBjdbpL3EFjKPH",
  "key9": "2rDmvbWhkfWPFMjYf2BebzP4RPrHFQ5HfXNkYwqmw8UoBBKSUimRzyTQDaQiWeHbdFMXWNVd5F6YNhqvPBbNduPA",
  "key10": "3y9LQbbC7B7g5kyHXuUixwwjBkDvYBwrq2zw815gcqgzKpagTTGuNvHuPAg2fnYz2sdY1v2JoHseLtcoxAYfZJnV",
  "key11": "2SeL1z7tjPv5fqpDeZF6sSuQrTi4w4EVEkdegQuLaVCDYuLpSRuXk42dkzPSBHeP2XVasD3WA1kKQ8WKrSbuz2Zc",
  "key12": "4Ln6xgEsz9wR5z2zR34xSGMeoD77aea82NfDsZhxJLVaVRSJCyLcWnR7Yo5hw5rcBaXhj7DpDbBetDTPS2T6SQYk",
  "key13": "aEZY9XhKcxWC9Ezzq63jdXwXAgy4EXXDmJ2Q7qGY7HmL95Emcu6A7M5WwyE3HtikMFmLXy6hJz3Rnr85PN3mckQ",
  "key14": "49PbT8WKSmA3YDoH9QwP1jLfKuYwXSfShjVcPZSMJaZX74PhtxrkLim7aidvcABkZm6HsDfBw1qreuP6gCPEbDQ2",
  "key15": "349obksY9WUJjJPJSwu9Q4DqRomJdjuCc6eWj5jBYvYWLz9md8icmSSmNEP8sa5z6fQNW1ZMiJ6erfdEivHj1mt1",
  "key16": "2kCKZgVsqZo532c1sHMdpYaCyAV4yhHHu4YLxeC6U58NtzNMaUF5gDvdu2VytpQB7NocqepgdhYWCZiBmWKss3pF",
  "key17": "WMrTFgguwa4gtXrEoUSX6FbxeTpmqRXqc31i2UHMBKibWRH2iFxCKUon4QxpK6LiftSCLk2h99LNWSsaN76pJR7",
  "key18": "3ifSPd3djELxwNjomLUXEzUwgV6ZiguFYDSvWu1UkGtw4FnvM1j6A8kBi1rkNmNYa1vmtP34vZtuLtgG744gB4Kg",
  "key19": "3kk2bzCd4fYKFkKYPnVKSG9y8D28N1E1ifw9TB3HYcQrRJxWBTAuM1HkUa6kZQbR6TWVL4fKX5GMjjP4a8yVdtWv",
  "key20": "47WASxWUf1fcaDf3uXCaezM9bEAX4WDazmVrUryYETr5NDLvLqYgEGjx4c7cjtJ1BWVvDmNh8XaciRwxAdVtvqXT",
  "key21": "4YxQNZn75uwJh885H6ixpTQeYvcp9mHR2oh5JoZwhxC4e3Q663GGwH3qDH6u7GubiCLLafHVhS2X3bQc55gBfJGy",
  "key22": "2pJT2h6BC3aWdF5TgzpkUpDif35efd93NGwcS64iob3CsYSGkRZVyAMEGpw4wxmMwzUXzwFS82f5bcjfi6AXYCpr",
  "key23": "5kWVGQA5WqFbMaCUyxtPqgWsAtrqMFqkooXqGtR12VNSzifujetwHrjufRtDAt3aUFJ7yoyuGn6aSVFKfd4PdWcm",
  "key24": "2V8iaxD8c6TGb4mQsWusjyAJLHAwoWRTKKASPtgnF6RP3nUhFwgUzw2Kc68PKEGx9SfkbWSr2SGwpDV4vXHWv2fh",
  "key25": "33knBYRXdgXPV2KP8d4XiwFw6w4TfHYzjxxHLMys2nWBFG6zEoQq3snzfQrUy7uevnvnGaofPAYTsJp1LUMXAdbD",
  "key26": "52VzdXmSFfmUossv9cNZXMZUxZWNJB1LeMKDe21WkaxJxEbPftbfbJihsRNTe8D9sr35VwywoVbe6pJs7wXk72VH",
  "key27": "YAUaguU3RkptgT6V5NMbZHUd5PBYpdZqTfwpp8Y8jMwKGTibz1x9NFnzJqBvRTGfQWTf1GLeQXttZQ9pbnWm61F",
  "key28": "61e1wAVPkwBArhk5hHYVvWL3Dm8h5JeCmnkYmYQpXCC3Y5gEE8rjKPP8WWcAZgLfooyVukJPVAFrFXj2wMKPyi7a",
  "key29": "2i8KyNBv5jY7x2mmrbRccQmRsHoaFx1Yw2fVgZiasZbHaaRniLyyXi4G4NZpqAGqNC46ezmVgVqAav97qUx1iX2s"
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
