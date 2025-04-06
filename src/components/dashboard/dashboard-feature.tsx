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
    "5RMdXPkg2ZmCQ9oZagmd72K1sk6PuLjhWriyGEW9J5ratgA1EavdTHoyJKWKbavzRoRSMqPoB6S1Yv9pk5xrzJ43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUUPLVZUgG4N2WUsHf3b1aqB1GY7nW22yq5EX41sphuWpo4SHzQFbooHazEgoRJAeyaPKEE1uHVN9JeReV1tPQb",
  "key1": "2LUNc7wpheETwuveYVhxaMDL6QqGzV9hSpJjHqmjaHKGoynvXEoGphhLPgTe4Rw8MxkYY8F2RgjpDBSAWg7duowC",
  "key2": "4hEaU95SJTm5wH1HPjEVMWut99vuRdDvPCXacnfBRJzyGhthPA9wnA8tCad9vomcG8asrDM3EJnqjuKatEZhCo3",
  "key3": "3XVgGSEc3q9qKeDzGGPxmrrkxkTsL3wKxKsQFwzJthMDoWj4Xt5CGoW62dPuUYToreVCj7jGpRk3MtEjRKJK5U9R",
  "key4": "8CKKmC1yaSpXiQAo5NH1zXqua9gxDJponsC3aFHP3hxGpdNLGBbFudj2zHBxLE3cDfr9w3Voy1fwU8aKbqNkH3e",
  "key5": "2n2naK1FMyXrp1R9raT8wzxYzrhNf7kh119sU7vgVVPkhQzbGTUaz8r1mYB9YwSEmzX6anTsb5GbX9ZmN9EkAvYC",
  "key6": "pWu4C7A3Hft1GLx9NAJj8T4YFmminqfNVaXMEcMcnBtkEJeYQqhU9Cg9dab5C1kYLh3WqriamWZWhzUb2uws6tk",
  "key7": "2eLixTf299sYUrKDajSYwYqn77tRG6yvsdkiYStcLBLLj1tgjZnWjP1nsmiobDmfdtfKmTKy8aWs8wrjuhaC9uac",
  "key8": "2gMzX9KeuXaJ926XbiDWQM3c3iAz2GFuh2C9BPHiQpRg1rj6hAojPEG1uknio29WcbyiwicudV1eMmEfj2H2DtBv",
  "key9": "5ayz7TxGV5aLy9wVTZHQoaZMy2yjgqAjTaN1oz7XS1bNWtBzRP9UPQfnKzwMPmytu5uxEmn9XDAMhZtFvv2QxoE3",
  "key10": "4TZ51zkyzUuBF54fH3qQbWhtWh5DcJkyPEKfdU2DWogFiQq7Y1tsidT5wTVR9b1QMtRFXiWXiiU8HbxBKKa7cpqT",
  "key11": "5R7UvUkNYWHTtNEAevxGLwfxA763eoeEvDRNvAZ7vRveTnxrZGy6WW7oYEfEMtMHu8pMeqkzcCrhCcwv5jePZsxq",
  "key12": "2i3zoJkBryyicyguubNnjwrXEJJdALH1LPaVQiNDHybxNghFMqCkPfx9wm2WUATAif5Hnbs13Wk9ipNryM7fxAWx",
  "key13": "3bwwkNn6rL6rM3UnV5eq3c6D9AFoXkZikGBvPLSvnbuTCw4pmZBMVFFxYeWoBYjn7dQCpvCYxPY9UZdxMLdfinQV",
  "key14": "VFTEX5Naf6mXt718UCxNTbJf9MWXqb7iau55bMmkZ5Z3NCsZYeg8DefY9zzzvCiXtgNtdg8L8zVtykV9NCizHyr",
  "key15": "3aVaB3XrSGGMtDXcYgWqwV5joqcezxb9h7RpUce97xurNq6A3S3zJ5VAmer7LrsdErwM7KgEhtaSrjuBBr73JE9P",
  "key16": "66zt3aRY5wmtnb6ei8vof46KeQitDNX8vpLi9TYMeLSYsyVPFKRq7U1ZsDZ6xL2AoL7dKTB1vUyAkHCic3Z4th7Z",
  "key17": "2Sv5FYzEcKNPbVPozEMMBqAPBYizcpLxx67KC7AFUgYQgJiYnAt8McGPVcS5TZPsjcJQ5Jjkzhh4hvbpujsdNWeu",
  "key18": "5uYGrnuNmAEfwPpEAY9i8gBLKnCYa4zx46YVvvWrvd7jiNr5LyMURabqxjahFK2BgFhzFvtgr5a6UeVSDQmyLzVh",
  "key19": "xkb6YcZy3nWNuzgKZzZ49wQcBkzXipvUdFKTcYW5htyym4jZcUH3CzACMz7Z5Aeqz35Nou25Q19HypPxBio9S9R",
  "key20": "4ZNP9RC5gVUHSC82Fsb3Xna6qi9csN9ggjhGw2QnDkzaMs1UUpJRm9qzMHdeZtY7iy66duNFGZppMyusBaLzeQMs",
  "key21": "VaNoormn43JbzzyDFZTKwnwFsyUjqd6LfpuUAmXXa9noTidXBL9paNmH7sVTd8w4rWNKehe9Yc9yaU3p8wTa1K5",
  "key22": "2otAjy7fALL74Aaq8VpNsvxpsoF9i6ATs65T311aL8KHaf4FbA4qK5xii3F9GTZgrDQ2AVToGCKe3sc1vukLauA8",
  "key23": "3jr2oDwQLp4RGT7WrT3fV2GPjppuZogJg5BwBuQv9QEJG8ymopGzNfeTXivb7jVjh6q53QRvZ1BKGPyjPbqb7gy1",
  "key24": "55BFPK7espyHhNb6Ed7T6424aoW5Wnhc1ERnLX4C9cxXCAReT2MjKcijfhCHHBuEAm1ib74fRRWHX773Ct83hfeU",
  "key25": "4dshaGT58gcR6Yei7Pz13EWH9MUiDKLJmZxqn6m56yGDnASYHFDv8yxkq8FhYLkpsU9yKcpcSkMYhczvJRhUMfic",
  "key26": "R3wXvJqzF3QXcm5XYBqdeXY3BQy8tf81oKdhXY5LnJCEpAKe83fS3avkKRJDaF9csALRrYMk4pcmootTzdYQPW1",
  "key27": "butYtSdiGsTi6NN3vPsQHAEPthdBp9T1xdh2mGDifmtMeFhwtDGTSVzGMptrjcGrXGuR599EG9RYczbhdtvnYGG",
  "key28": "2Fu52HUpXvaofqVmYByh8qs2SSeB5G8ie9eMhSBZfBvwtKbmLGSC765m8wU5wwZ9RyTmd7H7Qc1u6Xe6Jfp6uAPB",
  "key29": "268FiaceRcpdEjjpzKGyd9SebJRCKPTKjh12fb2UVfgSNW6kvf1ZogTCgbKBFziy6pUHF51HRKoyuPgwN5evTHm6",
  "key30": "5XwsWNc77Lk8GHZvrLrMR5hdHg372hv62mcH5iAbw6JxKke7PdJdZUW6zGFNVPcco47pFXGEcEuDm8E7EheeXeDf"
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
