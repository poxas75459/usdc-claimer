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
    "4PYxntWShuvVXbPR8uqESfFZnNeirbrXV6HxTnJryaHJp4kihY9s9CKmPLV5waogJQVU6hZGCnF7PyTkNhVKMSBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pq48k11AX5tuDwmHbp72rPcZv3K1dkXXuKHfur5QGFnbpyGFHDfsA28AYgknF3DwaLkmpDHNRohLEdT9TG3Yi1K",
  "key1": "5of8mCM98JQuAcPPNCmPHajQJtdzdNv48C5KghsJG4BWm3CBTFzXGWY5Zku1GZ7nTNw6NsFjSaNs7sDJZQbzkW4e",
  "key2": "3o57jtQ9kwZu24XejPyN1Zg9j7FHVhEEzL1FsDHL1DnD8e6DSrwD91by95QKYtG91NJZqQLr3Esh6MXtX9hvnNqP",
  "key3": "22pjPFQUA1XK2QU7LYr4BtsqgDkf2pirsZX8W7RVBva1X2FtTjWzC3jUSfu4FWX2RSPtqnD796p6GhzpbJzQP52b",
  "key4": "4ZAALLJJfjGvZ6iEmR7xZctZdzvnLhNSdc4to42epFTePDMURSJvkKHYunBBgzpBD6AgaKUgaRZVYS6bemBNfie1",
  "key5": "4Cft267v3hbN9rbNY7GBZsAgsSur4ayDqKXPH11Py2D1dTvEAkYXiCzAq2niCD2dSyYMZAJKwe1Avz5nBU4CiGtp",
  "key6": "3ADzFcqma4gyAZEsBWeU18TngSCkH7K7Uo7aBqc5A1oyi3iMhqnnJ41aa79pUFHvQ46rafoh6QtQHtGTfojYPbN2",
  "key7": "52hHvNvfv3eVu6cbEx8Wayv6v3Aa6edjR517b1SvX2npbjCRDvJsUpyud74U3iBmsNFxThHe1jkHSoMpujFKVkGi",
  "key8": "7qKcX21jZRhzbGXN2wmS6a89JLC4zmcaaRrNiiBZiKCHqNzZkENvqKwdRy1nj52qzdznxNzVhuttaA6tUdpM37s",
  "key9": "4NAS79cZBcckgfzRoUN7XbMAKjnBuQWNvnP5nz36SrnrLtLDPaNG4yRzcV55uQ4BLBiW7YMZjjHSRvhaBZ5U3eqp",
  "key10": "4fnkttEKyH5A9jLK1TCAtEtoFoHw3vykDFDEkibwC23AJANqGNYsBNusFe2xPFXzYeTBHzyvn2mQg8kuzvyH5ani",
  "key11": "prS3uCc1XCM9re56KQq6qcGMR1F8WPEHBvVKLKY9Ea4c9L7QJyn9HfD6CcaFpYNxFYWUSB7wMV8fDfXakWjdN1A",
  "key12": "4dgKVEMHXF7oS4M2ejN36FW8Vhuj1i8FpQvn7qE52cf8WZgwFxrP2dp1BLZP9mGx5AcG9MGiJJJ2ypimzU1w1M7d",
  "key13": "4wT8VTRK9o6g1tJrKzubu593bQFR4ZoGk5AjBQ9cbHgJAFaFqKdDeQVc3mY8zreQ7645Si8ea9HMicgN3bJ1QLT6",
  "key14": "4QiujuAedxdJVimerHQUrmPzp9KQm2RWZbt7hqXbLA8Q6pRWt3YDbnf3C4GaHT4XSEFTJeCfUEqbyc7zYzrmY5Tn",
  "key15": "5SaiCXg9nJRJk3TUe8t1dkqHhaTJf7qKw6ke4b5FZd7Sh3KcgLHAnuA5VD8bphXYwVUmLy2Ykch5cpxPwehXvYLD",
  "key16": "4cKGjir8Vc75AyVn3f9sFgxf5gQLiZ11scZsw2xXqwMQNxjjqfHw8gkbUERhezXpgseJaWbQ62JfF5fjGUv88eoJ",
  "key17": "huCT93NQCSF4sjPVcAhooESnzv8uXTf7mqsVGubQF11hCedar4AKPtP2xW3NHqxt4bdVWf8kxJcDNY3nHbhwKco",
  "key18": "5PQMDfXCxRbNDd7gZDGeEKWeokoHoqCpMnDVmER69qkVtWKLcoXQXseYu7kNtRB1UemvjrJwALRLem1TwgQkrztR",
  "key19": "5n6Uq9stUoQ4z3yfc4aEAtK6LqhmR5tZydSokwictMEGzx74EdZK3PerLU5qZExCHh2P7M2bSVLuB15UUgAukKB3",
  "key20": "32bzRxVArmSPYRP16d3bwQ1rcEc3uHT7rExBvC2MzncNAPsob3deEtWdg2mAbqhb3djKikrJRxnAi5Rg1hGxrJYJ",
  "key21": "2tgYczYKkuPNZKU9wRWeEGYTnQjQ8TcG4cwkgab81SKn9RjuSX2S5PJ8tQ1QS8VBEksDLJBwwn8KHjtGavBNVKEp",
  "key22": "nEf8StPwHobeMmpAsDpS5d93M543NZjtE6ABXoWEQxWNzKGW1a8Dc7wpannxqACpcXcsRp8nzyfneqoqTHtWkEa",
  "key23": "4hhDC54h22YzjbFxWZeMQCTqnp6xNtUCFpHqhGBBktvZQu2wwt75PgmchSXrnwe7koN1jxry5NDoDnM1RLzgRVrH",
  "key24": "YqNZj7CSBQZ3MUYsbrpeLDBdUpESM9i1UiLjoks6UzDJbw7Hdtt32GUZwgFQdqyH9wECXUmABSYjMZY2qDs1wHB",
  "key25": "4zsEHP4QBDUQ5ubRNZXbVVvp9H8wSSA74yYm7LjWvx5H9xybPad4dZhjSWkCSFCzzYJgjYQeWCLFfpDN2CNcQptU",
  "key26": "5XKiRPLtoXWgqsKeZyiMFzFjPQoanyF6Vn658WtcPjYPMuEEyJA1wBXBCGzg3bGWWWKnNtxUzfJERbeYKr4pGU3p",
  "key27": "3RZsaMXe995QsAjCJo7XWV5NqK6XVAZfwBxG4eGPqtonbscdQPj6tX4wyhQf4Zm7wXEj3VPunA4CqQH4QfGihCAd",
  "key28": "3eZ7ud9veLnzQYgYfC3FVffHgVGnrfoeVnXcJoNuLnzv4Ynfq13SKKYWgpykssWaHqfmT417681NqiwynDWT5HaL",
  "key29": "3SVFtXEq9LNiWWAJ5nBTTRCkB5L2ekyDiSdrH4apRhMy5QgUvr4ECPw6CmWAFqh2N2XBEzNq8dFW3ckFpwdMgfXq",
  "key30": "aeXDSwMYFHicw9mMwc1pRh27nLt4eytXpBeUzeJUT2kR4U5pKdRbcBwMQ8cRovnt6wRhnkzgViQWPFGL7kECLck",
  "key31": "3a4672PMZweCDDvLvAmbwverpZdDc3cDfbgEq4MTuJrUb3zqtCE5qyeFmYcHEV8WUjpH463U3kPPv2gjiVnoPqkW",
  "key32": "1iVgA6EH9ZfAog5tRofU9gnmLyYgJNKKRPKgAv9yYtxFkpBmgm2npSppwBvamYgubCCFSBqteC3hcmEC8CaF4o2",
  "key33": "2gDm4YEs1fBCNmyMrC1uEWjDubMf353j4Hn8f67fkujamaiRDUEPeRx9CjURAazmJvMLrCHyBWZpNDueNBtRuXig"
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
