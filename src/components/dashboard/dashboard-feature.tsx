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
    "5cz1FNhwN9CknXTpcsP2aGEAAsWgHX6mga5fRHt7pCc8ASxQpKBzRgnN13A94U1DxcTV4oLaueK2xB4LRvi9HjWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjTVLuVQUXP5BmLq6NT59mjwWX7UB8ugB9oryk3VYMkSLxX1WuWSZ6AL59xBFzPArSLUomghxGXbJoamNbs5a3W",
  "key1": "3jbvuJRJGg3i9uDsRDyWrvJjhguzMcBvefY7qfgLFTC8wpcnRQ8LNGh3ot1cqPAFQ36PbNxcGJ36fNxfunWvXuMf",
  "key2": "29nmuXB6SZtV36dWCorznXJeXF9JKW7ZsMffiKJYmAHxBYcdrEEYdf15MuVv9xQAge3iy7pqVg4WnPSRM7JH5CfB",
  "key3": "5h2gZk4vmiZ1fvKhMwdu4NcnX19wWjo4TjtsmvbESt576L5aamEtM9a1LThnLzHGUTiKchBjHgScuKMnUQEdttKc",
  "key4": "3ST8VLFspa5G4iBPDmvcBehb1ZgxSkXPMStMqCQm38SsE4Yj8XZWfCqvuKE3rVadBGFcJ4HNSCBQDxNCWQ8672k2",
  "key5": "2WJ8qjgS9c3BoHgZprR9ZtxegB7kfr7H53xCAzbtaHJ7vgWnLEf5uXY3U7GVGP3tMWQVXDFZupQ46ij6UqPHsW7",
  "key6": "3tVWwnbAzk1esYVMCYKS95xT57VMbdUumAmmrL8wH21NupNvgunzeZTdpFmj9bUnHnyz3VwQotUSWUfYEqZxBKfV",
  "key7": "4SkFq2jtqmyjQY9cNBEL1K23WiUkmGiLXMZXaE87mSvw6P1oJU85G6CbDzHdLy3mvXwEtMyHt31VQWsnXZGG3sqM",
  "key8": "21KUMnDfXbLWPQWhAQwjnFzqY2qAJePbzU33Em8W1wrK6Vv3QBSuXMzP5xhdKDhsujMbCHaUf1PKzEXwMeYJV1Dr",
  "key9": "2rxPeQMyGSUo7R8C1hLYFrxnYXT84pQrViMGc6mYMfGFdLwztcsJ35kuSyn8J3bhzgi1uSVqVvQsgoYhHGffqLZ5",
  "key10": "d8KraYroYysDiA8XLQPexzHLZvH113hGAXUe7XkWzU4Xep2RGyA6PeRy337AabCmZF98s1bUxHNX262sycqE2nm",
  "key11": "2zwXJDZX7KDChBryYeHQkoQA2LYTTSRUHxbKaBg92Ehza1wrACNA6ph7Qf1uc8kVuXNHeVA7hi6AdY37Ve57QEuj",
  "key12": "wMeK5dKeJSX2uqJ9J6fvqYFyfXD4DEwf1856BM9rcyamdjbWc6R4voTUMsSVeHeSmGa6pLwhZYMJZd6fTxHKBUM",
  "key13": "65ZPhykLtxphrw7FTrYCaQXcLpWF748kiZqzYxz4j9D3WALNgQf1aqrPq6yTz6hWUx1Nzwsv2ZUsxDcFpwPhye5g",
  "key14": "49ociKeC4RQyooqMiHPgQiiujba5k4P94LxLZTjM9hbXTe1qz5QBKDX994y4FsKTT8AXda7gb2eJroUE5j6i2ukV",
  "key15": "36GfWN1SSV51XehzZKhQcVaXvZb7Ez3aFKTyJtySTuZdsrVKP4zrg5HX7ngscpi2giWCsxwatbSTbpVtbodR9sUu",
  "key16": "4V8bijuVVknYxxTRXbDLCsv8iGp7mVGcs62N77eyFsceEsT3rNWo1Mg3u4fAaPVTW4Zs2bBUUukjtJMnLnT1Viu1",
  "key17": "32iacqWoLD6xrMZTpdBWRF3dyCGTtvCzBPwzNapg1CjRwbfNnYSDvjCXCPYjvZbZ1C693Hi1WgxAZVdh7g3pumFs",
  "key18": "5syEK2ZnLn5sjarxSAujPXiLLeJDYQEpuga5TFyyfH3AmL2drauQxQzYTRCdigjbK1GLXwCTyQH94AMCehASnD16",
  "key19": "3thvjL2cFmCSSoUeNfP8wg9KYdfygareMK3uYQaV8NL77VYxHUWTnz1yAfogH6TMjqQMGeAm1S9paLFF9GaycNCj",
  "key20": "4uPyP3UTJDoHb3Do7y1Qm64VgqD5xHKqMeq7UwXt1xLKx5ZBxg7PchNgzErUK655sZwdRFDZtisiETRSTJNwHSfm",
  "key21": "5zvoumEPMvdCcxoNxHRZz8LSRWK9e6mhdKBgd5aPyKq4VNFr25Caqjo2SuczEkVfM13iXqJu1QCkyr3yAwxyGkhf",
  "key22": "45iE8VMzfHU6iUY37KCyvpSfGFoqeMj5M261PqAw7NrNQjCmLnTrfTvGUmLnC6h6KaQ9AhcfP8xxy5qwxGovdrrj",
  "key23": "2crkUZ8Q7d3YnNMMXkMmAjv3XCwbkvFKeQPRRNsqChKNdQn7VJo64kGy7p2prmxVfmuocrJBqgHasXMM2PxFmwzj",
  "key24": "3gEovyi68dgL1vQh718ehV8qLYbGPGBF6qFNfSzEyNzDBcY1cT7JHmzTsfwTVZcbo1DnGNSUYyKVUhxJwBiL2j1H",
  "key25": "36GhZZkQiFSM36mzjh4rftGD9zKD2Dr3hSw4iLbAG5wHsmAg8QP5Jromg6S8cApP2gtVBECsWCVgi8xqyAHa6ssM",
  "key26": "3ZjMZLcyTWikXqwUN7hGhwfk5ZxP7BkQHuGCK8VT11GE3ouEQABcgDTEkK2ADnqFnedkhqqHqx1sbnvZa5E28KMQ"
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
