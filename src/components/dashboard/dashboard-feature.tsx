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
    "3vTUMur3tEjYidFjTvWXnqTY91oXP2cQD1tK7DUoYXNfw8EKeMd8sZbtTBJ8CnL63LK3xGVaLLRVKpQkZEMHSzH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2uac38cgyeyo6vK1ri1gFWg2KBUdMsiCKVxv9iVaMeAXhHoVLj8xMWQF9WSXGj7PswSrZFnoCvQaun8p1dCG65",
  "key1": "5sjA6ftvkW26Y3n7mYV8NngPaYnrTKvRWLUBzLUuKwBwJ1DkJQsLA1PkwTtPYArAC2uTbadSgYG5dnK9FWh5Vxxh",
  "key2": "5qvpWWXS6zoMYaN1vEgpnUuM1ZDb4QjweTj2GoySgYqr37VzYS3k9nbjpajbUyMMWvyH42Ab2L37x7baLTfq5tjb",
  "key3": "43JgF2HvFwSbncoakLVWEowzZ69sf6nA8yPV76RytiTALkACF2h8XzXRz5tRyxyZjnzP53tZBbm8eQ9w1zVk4PbV",
  "key4": "3QWQFx7tN4XCaoZn9TB2oNKuMioyP3yoYZmnEHVYTAdqt1M4dCtKXzYYK4yB16rdYdYgHADncf4Jk1PBXrRDyDcE",
  "key5": "4NPBEc81Q1dchTdvzvdgN7hx3GNtLF2RFe9wt8CrYjnCsXFobWWjKcrwQ6iyz5TJK9N2Kkq4diCkkgB6vJgrrEB3",
  "key6": "5i4wmdBp7drztY4KvQv1M689vMpCNeStzF68WW3AqhhhYa2YCb1tuDmHKjpPJqwyyzQu9ENFcGB2JQvSXHJehjqh",
  "key7": "2SX7ie6W6ovaz8CVd3ZAAqcgNja9C6wK82ZeteDYV7kyjwzSQHit72ozGMDHsyx2gCdd7ScmCgcHwcZQbRaiRMH4",
  "key8": "57Dse6DSnikmb821ytTDxBNAMDVbHQsJgY5RAhfhuQ8NfZuY4seJPcWcy4mGMC5maLX8DnowE8PUD34aRCUu4o5L",
  "key9": "4AuMVg5VCAcFgFaCDmBeuGGb64hQg1MuECYRyP9zQCUMQ47zwNzSHfnTFH53HrcggVtZ18HNZjZSrEUdz2zyDx8k",
  "key10": "4yEo1JsNmJ2KjvZWXYsWajRPtK91gmS5WNeRR4HcQ1ZZbDR9boLCP6vR714i2gcWvpX1VVtopoBJPBCMmoZCnNBm",
  "key11": "4hnSu1RP487Y5tXwktXxJEGmhtTN92aM9ZmoZ8BEiU7jNYtfX1gHeAiRFLknxkZ9EHf48G8oPwovey4nZUHo7uJt",
  "key12": "3XZ3LuxonwW8g3fM5Y11tkGxpMFUnGAtUgW5mrPa6BDUBaiFoBd9wCdXi4BvaybmG6xs8SoAz3bgdVXiv3PAFcRG",
  "key13": "5bNCFjAnFwVUNmeodVWM8vJWGgsHYv78LdH7TFUzx6SSe7t5twAdx8RicuS1Lf9D3Bi3s5x3Jh1zwVxU3u4zzZv9",
  "key14": "2CVMCTWnzqLWVFXiY89msyYR7JZFuNi2m9fkyqh6uwctR8queCkYPbEqKzUM9cxvhucRJaWNen8xMTuu5GZfTGnZ",
  "key15": "GuPckb5pamZnPXXrUdhmwvuD46zfx9Tqs1hGxw1J4aHydeD6iLs1noLLCEut9hBnfRu6daXMumLE2nG5mTyEmtq",
  "key16": "4Th9NML7xMiDkLANqdApPkPDqA7ECYWv9y5ALkARCV4kF3vkdkeyYKfaZqcKDC1QiqJhdSY8VBUXpoGCuabVr8o8",
  "key17": "4gHEjBH3Ti12xEq3Ef2ivBLjNZrx3GJwaL37VXcuCtGZq9Cnd7yp3kHxCL49RKt4JuzMC8x5CvjCk8dK3v7wHfs3",
  "key18": "2ZzMDCxXrg5oXrL2ERmi17ifQWJgPwHKHPNPz1yoiz2PLTLmkNUQyyPMY2Wrh1cxhis1kycgK2NjpuzzyAwBpjE6",
  "key19": "5ro1qVbUVNCgRYwoEzKJeWkLs5YbaLcPRgcvKtxN37qCQGzvVfJL6StUTJVu9bvQNaua7p2irFWetfjW9RQpLHsa",
  "key20": "5rV14WFsUTsK7aBSnAsWXFo2pTcweEhzrbWqERjtNxndRj4SVWvgqFBnVymWjh5w7mugJijsjYo35AjGxqdU3sxY",
  "key21": "4mQQQLo4f1k2oz1pdYAe7jSWofRHDobUNzuDubR56espSZy2gTX1nHyDbAkscrrC7yb3fJJ69KHZvwQ2wK6txWkw",
  "key22": "4ftLt2zTHMnz3cCFQwdXeMR5HeHdi3N1rvDToC2LM3YJdJ4ox1t6c4XDzhzfnHJ9nFEfsJZJEbeJbVzumMJJLyv5",
  "key23": "4xY6d2wJiagjpWqEipHTytC6mwkeojt7b8MPqfkPDFUrd6qNWk1oiGvLGPQYYBiRfUFj4f7uLmCHeAgQxUKnu4wb",
  "key24": "5R6kqNiM7JnZ82RPhpvqkmNxquuci6z8iC3jzWDFUMBqkYcG9SsyexpJgzsysZmvNhxrUgrDSwaHA2GThyftFKje",
  "key25": "PXqhstybXK2UxeSeM87tk6JrZBmtj4R7AALasEy85dNSHFZS9Zi7XknywmCZPL99UtRCdC7YejdH88Qsr9fKgVy",
  "key26": "5RLi28eStiAiH7biQckimxjB37iQKLSVSrwBFJdDZueJva1cMp5AGkjCyd8NxPKRboH86dStmqHqzKXzVpu7pkkW",
  "key27": "8h6XGFcvQcDNQfoaknm1t2euyrmpG5v2LCfNAy2an49rvRo9T9P7Ti5Udd6vmePPgXt8AWTvM7K137Fm63XU2Ra"
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
