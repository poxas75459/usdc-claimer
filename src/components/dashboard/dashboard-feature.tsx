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
    "5wyXjqAFCjK8nBQSArCrccVbSAuXoLjMzsuafjXDruTLJ5rCY4WRUhwbUP7gtoqHG9eKNNm3tATH3LBsqoxoeVGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwitHCx2C6gfSGhYFmpVEEzE8Un4NAaAnnTS2yGgQ5R2HCQJ3AacF31dpY8Mz3cHgWRSXXe8EeStovm1Fcy9nAw",
  "key1": "2zzyEG4VPbRU5pzp93veZSs2SLLNSps5WkRY3VR83ka3NZ4eDWVFnKekvXBw28ZiRriWbdQCUuNBnxeYd6PAcQgD",
  "key2": "4Dpj6fE3LMvRMB4YeyFRAPc74N4w1Xq855S9N3Fg9tsHqoZnopToHp5s9WJdfgVbD4UTyEAvwcQenKVKnDCMb6Wp",
  "key3": "5NBZ7zBYNEM4h62eXbYZTozAF6YJF2gYMCfvfsS6wmL267q2UgfYCJLxRatunnD6e6gDCFUthPG1mnb3R64ydm82",
  "key4": "HdUvt4USocAc3W89imbLmXruGbee7THudjxpTPTibDGPQqZHUZtxfo7JpxbhRhdVYV58kNqmGn5EgfL8z8x9MSq",
  "key5": "5YC8PceB5zkobesYgxRhwK5BPTzxTp559XiuKyNbbgjK49fL5fkvwxwHB2osXfNNo5L9XcNQeJbDF7CkJSVFFpxg",
  "key6": "8kHAkdCat8MmzfhbC9X1zHHSC34Rr6S8bxyCHareptXxLJfkQL7a7PdAQgNdWPgMZtFh4Lg7vFgcFGGnS195goP",
  "key7": "p9WF85j9ipQm8GhGKAsV8bYajYXK2NizgaBrpqdG9Sv5PTYBVQQiUknYuQ7zH1qaLUVwPFg8VFR1hAkmoyoH6FQ",
  "key8": "ymY8hUCEUbgH8HesQo3hDwCijVb6KxSdSUc2Nk8tCadFiiJ79UpLfWA1XSTrcwFJ9d855jfDtofdzZL3gHwoPBb",
  "key9": "P1KYmxyhrv1ZvDX3dhS9SiBp9Kn9bVhpbgttSfob3NaBoD9wCW5WXrLKYKBWY7gys2ELnnfuDL8JcL8HMGB81tZ",
  "key10": "3wnQL7evRzVVrvUCAZLiDPRmiphZmuJ49BViJisCMsVdHmBjqQ5Myg91RYN1szW2DAVwRTUdvJ9UasJ1nVLrLRiM",
  "key11": "5BbuYxfaVkiDERoDRXZKiVgv5kH7t2pC6xrCT3AuNaFJrBo1SudWCu2tG4jX3B44TLgVyQ6pmmj1yrdEd48j8tho",
  "key12": "3vX42d7YzgY4JomFYS38e58WYAvLgHTeAaTu27REEKZD7CrPTjtgrRwSCoWcG4LqGaLH8RZjQsRijUQqT9mENamw",
  "key13": "2iwUMDFTkk22bhh8oecLQFxTk6eN5BHteapfAWegtae11jvWAxRZZMaKic4VTtLBkCA7rfiXAuZHK5eDG7kCzg7s",
  "key14": "hvQq9tvRogdqAXLcwW53fJkbkGfvmmjpK46YmLWvd8WQbcnj8QjM4vVNMrHvSpHjg7YA3tjNALnSMg7miKfMzSJ",
  "key15": "vBFgfow1q136Wwqh9ShmufFjGXStUVfQJQkBiWyCSEEFNCz33JfUiSdwsUtEnSe9st8bLDuKqxR55y8kRqokqbk",
  "key16": "2f9dTJoxXongx4pJ9sm8BAymBmBSpAbu7MEJnHbndoeD88Myoa4apf28adAxncP6R43YNdDZoaSYTP1PDtUapZJb",
  "key17": "5t7ACqmVfUdWytyMmw9MiCaqdhWdYG738vviSJriJGrWDNEvMeKUcFa1i7gKH5UCXvv1eKeQaL1FDVbadfpddMYx",
  "key18": "GXicgPst62ad9WmkKHjUNR7bwsN5Bduyt1rTRU44oBQJ6esLqNQSYjPwqVeiy49oETWKjQrCHuYLzrD7WD6uXaM",
  "key19": "52LPKQdihJGrVsDRhsQu8GGFXwcgvXgH2N7Afb1tVMJEc7ewADsybNWtQeeFrvpk1rBo9de5Nd1T27T8L9zDvxMo",
  "key20": "3to1FAy8pvWZjyQH5X6YwDXKWdHNWPyF8m9JzCcNHn37VoxsE1FzdoK8bEg1b7Wk8dhuFF3W4T7qCeqQpmJuqA1o",
  "key21": "5b1ycf1hmQ7S4TD9HEcXUGgY7qbEsZML3qHcGSBXgxkxPNcfFmS42zjqtdJmH2Z8hBMkRkdAuVE3LLPFweekssmo",
  "key22": "2gm5kR4YWnDHpmuhH1WumKGBANpNw8T4XSuXvymy1hAGosvsVUsXUZ4GzrCdgDHUNqRSEeGy3B5kvj3FARZLQWkZ",
  "key23": "hwFiT6krU4tGqPEdXuQkhTL5t3ajSTGT1ixj8bvfU8NGz3jiozTDxRvNGZeNHvYhon8YkqjowLwUD2hmwAD5xLP",
  "key24": "h1LYRx1Ay9La1MgRkeNVTdfdwiChCf5xCKGxu26z7FVx7HfZByUFdwtA5qKk2cdVdJYHQggAaJ8nNtDmmpWq4Zv"
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
