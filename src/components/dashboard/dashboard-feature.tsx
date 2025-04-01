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
    "2Ymz3w48ZygMo8YpypHyyup3n8hK29q5ezLUwixgSrnYARbwJSQG4BUPptesPv9FTnevN54gRDgaYroKWgnZJ87s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSxjPYnfdgNpbdDsN55NmLbumWrL6W3X4gppMQPpAy9eQ1HLx2j3kiLqg2t2T6oxuUEwfLX9gwvTsnS6hyyfPAD",
  "key1": "28TMJmxdbAPjpw1DM4JkmQoPvZrnjztyJZsCwACGk4s9pciM19wQBfTtT2QppGbfmYeCppearajQdqiKPuT3mwdD",
  "key2": "5v1CXR61CPQwQvZMEoaFZE6ZPbWrLHTqkkYEE4EjybH3X88PTbxY5zr211Z4WzyDABp2r7ScBhh36AoPsLbbnj5K",
  "key3": "3Ne9CJ1cLn9nBCuxqSuRLguiVpGgd1wLRHw1JPdWxVYFFKDEcKr5dAbSEP4xquv5t7ZjhmEN24FGYkyUek7i6XdV",
  "key4": "2puDhkydMoinMuBokmCjkRKPYokxb4AhZerdnbPXugEMEZmBiz9kWyJzMDvAxn7ZskA7Aq8aFjre1pP3s6Dx2kVg",
  "key5": "Z3MSZtt4UJtMir8e8tVQeufEVkbAmFUr5puDWCN3B5C2JETEacZX9e9pcwSDVKYqbkd3cb133a41Bi1rTgWzNkE",
  "key6": "679wtRjhgbfkhfHiTbM8GyfLb8MACzqhBtAqeD6jt2KEmHmTzkxyBhqnwLhqVHfPgXgXhePZYYbSZkebrgLRUwXd",
  "key7": "2GSfpcvQUPcRLxd7UefCaKLeHJjKRFPVNQcFQeqXDbr3nMtCReNjERCHSQnkYusP1n2KZu8torVrajtp1sqWLiEn",
  "key8": "4x4JbCC46xxsjXWeREBdhkuChxkCXN1uZsnNvfeyK5iefZAr1zvGyW7PyuNTfoHjZvAafGwNVxSy1VcNqVNwzDTb",
  "key9": "2WL7rdZ6vJ36xo8p8iQHwDeHtmXBd925HntcaXZnHreRpDV6tjwvBbCV1KTU4KMb1vXyHzri8bqHEn6SrTZUY9KB",
  "key10": "4BHKdvZr2fj5nryEd9ZQaDb5BabNFVUij8qUrdmeEs8rT8CXKy97GsL5UhdP5piwkfKcPvEk1J25PM5W419mQMUM",
  "key11": "5RUAZH7MM5CcaezFNR3AqhfW5AT6WS35cim9rsr5jPixVrxPztFYV8yUq2UTFK6tLqaC37H6bAoqPgatmSzqJS7B",
  "key12": "HjHarPG98rEAWbPphVYLe5zhGJaA2rmUd6FfU34bYQ58TTDtd7AsLU7waYy8FwSrnVd8XcMKqyVbu6JpjmRKs9A",
  "key13": "xjvjF8PZrPgav98nm2fka5mJTMeihTgfE5tuqxFaCu7ab8rJhUGXNa8PGx4FDK6xGdPrbfhYyRVeE9dnsHGp3Tb",
  "key14": "4rXYCGswhJRMEBeGZEFhA9qTyCJBDBUL5SCmmxxUSLkCZ1eUtACq4PzCzmXm9pZfMVrawVfacyUMr52AmsyaLFVG",
  "key15": "54xgfK3112HFW5XH1dT6LyAL5tHtwtVSQ8qFy2S2C1mrjWvcoFdWPg1ZB9xwgTXqfivcSQbRY8kmoQqKa8Ej6Spo",
  "key16": "3mXwatFqrJpbT6F1dEARBk6UbmRMqcVpGJtK7WEHuEXWa7hWnM29zbdU2dMaMsi8qkoe6Z4JEPEGd6U2wJeKcpD8",
  "key17": "5wAfdKqVfcJE3YywEuF1z3vgYLA2Zb1wrEKVVKVJXMj1tWvp42bywvYamhuNbS3RWyU9PGFoYi25Z23EvHqJWmQH",
  "key18": "21vsyjeZgkgjBHuUhJk4F94N5biN5TmiG4wyKzpoaq69caFHPNSAHwSKsBQ5DLRMVenngm9UhYkMHitCWG98S8E6",
  "key19": "2Kq9eLugaGwzsSc9U7LbZQWiSemGNc7TKW2oXEhc7LhfZVDqFH7K4714ZENw5bqoiti3L3m6dVHxf45UaLkyA9JY",
  "key20": "4cTc4N22DFLEUzwNkgR747Tj7TADRzm3dJAXA5PsoL9GmvozprozwYgnEWBfwLi3Ldr5MpuawRyXYPDz7AQSAC6t",
  "key21": "4wdwAVfsx5h1aTHo4AqnkMnbaMpCX3rTFghT3A7Mw8mAQ8XUaXqLr5Y1iZSEGaTmeF3hMTaowYRzV9BrciNrrqjw",
  "key22": "5Kn7ooYEXyZNJY2nmrSM1577UKtX9AfN89Kd9S74ErJZ1seDjD1rvfMnaybH1yUVu4vQrDkTaDvkAnUDem8wYbUA",
  "key23": "Jh38NDcCXSeJpMSntktA7qqiQZnBSVx8YKZneYX4wWNmMbBEHYHapncefkT8XR1L9Aiz1t21G8NXddUJZxLeC19",
  "key24": "59XZt7n4DcaBdTfZXPUnzSUxBJg8kZcXcgFC89HrZWQaN1uzKBdx5Tff1C7BhzKZ17AXZ4rv8FSPhjFoMdSuSojA",
  "key25": "5YCnDE65GFHggSmZRuwHLiWNHeGUZb3Ye3EdZFvzvt4y78qc42sCbXnJZU8VNcHujkydj8uwHmt9uufVnzLXG7eF",
  "key26": "pV9ssz2oH8o6VwUQfeG6oq398QtWBCEznRMeJ4YYKWgQqKcgYKJYanPtrvmfYDUzdVs99koD5Cwy8iTuxZAgqYj",
  "key27": "4ijCh16NZPgWvmn479ckZQrAF2ZZ3mqumwT9aqXwjeH6px3YKUpcrp5n2mjZXMuwmCGjR36yFzjPT8icsMp1YCXE",
  "key28": "3mfB6PNyEjWjev6agvNmqi1xL42nBcKjUMfezeU2XeG3YsoHpy49ruBn6kj8qR7oFXRsHZKCHjoq2rLA1R7kNXij",
  "key29": "2FTtM8mFRtGPfzkUCVUiYGp5UBKZPZ6oCzKF3m46LULYbPASJ3NQM9iRRuAGi5wf8GBVe2v2bUYLa7ENh8995w7Z",
  "key30": "3ifBcf59JHNK2UumLeCyNWoJU6ZztmSqQ1hRN3KJ95ecVzskPvRM3RcvmAv7LZpJxzcpnYRUEjemdApNcJE2k7Ak",
  "key31": "2YiR9v3vPXF3zaTLk1VWQHTYqzNp6nrhhzGjZG1tR6moJy2dhhtNUQwFJq17daFX4XauzmRWx3HLkZNeL8R8E3QZ",
  "key32": "4zCtrApwLVzMNZSAXUjFb8XNahPrdnMRxAhz3EPtckxwiRD5rmTUiBDXexgBHxQHrvfU8jQfN22RBst9SrFEUgLw"
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
