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
    "5HdFzDocS1PecRPxPGz4N5mcmX8EhabA8SJrBbLsTnMbThHx3kjKetcWRBNnRX13r86BSQvf8PGUUgf7CsLhDDSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HsZxFnEBuAni1mQ6jhVSFqTXapUyBMoLq8z7hReU3BLDSgx1aiawHE1oN5KLxCt8tTwgABd5qrViekrxKz7KqRM",
  "key1": "4QcY9Fp9hPk2kK6zu5RP8bao4DKkxL6YCCrkop3EFDZC9wYKBoA1YMUzTa2vzMrKDXvuMY2guoHEpnihUVYSH6tp",
  "key2": "4CojxKTFncjVUN3CP6hewdnPxXG84tY2sLRN2tLrckABRBATZ2UDrzFu4LUDk1rLEoiKzZwEtSFSrpvqPoSxCeUa",
  "key3": "1deDmMZD9MrGK8cW3svfyacCRDWgUQbyRDp7qABgUzScqnr2poXAYtsoSYMEBVMW8cPFXL27No2bBkbZi5NWPzX",
  "key4": "2BSFqPPFz928Y7WeW8xtJARXxnjpVd3CDgC6pkcXKx3JDNdFwXTwee1Yw9FQxcLADMDGs4ViUo3MY1tdCEpin3ak",
  "key5": "QkwcnD7kwhApqVZk3z5CEcrsgNzDfjSzCVH9bwMiyd9Zc7zLcBN2X74d6zPhQuY9HBTZLwyjF3HXtnQCqfyHenR",
  "key6": "TMAbTmbQYr9zWPzNvXfwv67ws9e6rz3N1u4g5z23mKqiX87RS4kpTwjvsMCKJMGSpn8h5ysZpmLWFiFGMaj6hai",
  "key7": "61Nrnprx2xELwTa68g52UJBY5fBkVNaRaJbQYdczJrDNEyRWNMmV6EuCmGJeQB6oRWQkRYMcMRC6ZcD59q1p2iZ1",
  "key8": "4NS4UdAAEHdR22HKL7psRTmMQz6pVDwq2rEYpFYF7nXfx24gYGHmawE7pzQ9HzN2ZRUgzoy4mVCmPQXijPKrPa9z",
  "key9": "54wBP2mxtjsRftAQ1ft4GHVzM2JBYbddvHKg7EijkX6kAZDixSbkVe5qYTEbMTAhp6BwmLcKqyirCUnoD2iUd98F",
  "key10": "3QyLpaCTN4EDVgF4tRAuGkLi3LCLK3z87ZxqD8YpTDGogA4wvedSBqnLSJ4ve4ZzB1JNFSQDqpQqHyKHCMBNhoeM",
  "key11": "4YpFmjU8Dz2HQdoA4HrQmPT7jAJvNC6KMetbkqzaQW4fvFRRnfLBrcbHte39TUDeBsd6VdRGyD4XwXzyybFdrT2g",
  "key12": "5LMug9uTEJGrvCyD7rnTWkZWV8chdzFNiL5JJjhjiJx1Xtzs6VSgdsN1Q8FxbDbrFCgQxFwpnptfiRmgPGP1So69",
  "key13": "mkLnYaaD9setYcze1wHZhn8mMTAHG7bqHSnFkUD71Lzyh7kUU7rKyEKArbqrSrFTq2fCMsRDwZiYfpTDhGZb31d",
  "key14": "4Cxy8ufEuVdPdPW5VZMyD6jT2yJRtno4dfw6pqMMBnXLZ6ytpFZp6woF3sJHtYPpfswnBvHFx8uRWbRUjuwCjZ8Y",
  "key15": "4xXCH31pp8Ebcm37msXP9AgLEeEGyS7pJsUwaRjKdoZAkt5swhThr2f4AoNHzNPhvrc89PX1LjxdjdHmzmZS7wv9",
  "key16": "4zUJ8eKEjqu7rw4HMLNG5aoSN3CtgwGJKAB79MvFoKboQ2jh9La5LTiSNyga99rDpqfRqvJ7fqXWH15wZjXbx9Jv",
  "key17": "4sJDjmUaozLkLrddrwky5w7sbGyPaQiDthTNtQv6xFJZqeFSrgW65iYqdYbivQSXPhcPgdAHMNkwtZ74rCwDwaNb",
  "key18": "66xbpMA5zMYCwtvsJ764jpa76H6TNaGGeTqTLPqoQHBehFX3XW28nPQh1gqHZUUNJ7Nfo335ZQmivpP86GydFUVK",
  "key19": "sFPZMjiUUV9tZwiqsRkM3RFHPdbHVMx3w9MnMEKpVqQ5U2rTCWDiPtubNgUmZ1RFP2kpQwJMNNDzkMAsEUo4z1R",
  "key20": "4jVrFwmwXu31DUsv5vZMXFdkXpDJVVZdCtSqe64UJ1LZPvJrWKNovyLibSD3nRhRZ63eE6TuABoEd4YP4wqCMW7m",
  "key21": "29ZjuijEZtFzP4axqaDWzYxBD5SKpieJeSQUZeob8XPyjJZeMNyX9a1aHPrz92YNyYzWVHoc9vjvvyvypvBaY1tE",
  "key22": "34BAERCYXEBkVjLgVcJFtfLv1g8F1mi5Y7MR7pZzxNC2vPT5Z2W6xMMVAMyWNWXa4NJALBZa5HHWrogx6T4MDDDk",
  "key23": "2Hbiq5VgrCy89Z9nWywuukQJDY3GvKY3c2osUSz2Jps3iUC7tRYANvkQCVA4TTs1SKPAc61MiSbidSmZwdYr83Q8",
  "key24": "57NC7PVB8dSgiFKqB7nnBMreA2LwMHJ1cis8vFSmxDHecBHCcJ8ScgxyS7VxevK2fRgAAjcY2wFJgk4GPD1dNboJ",
  "key25": "gn4AS7kyXQu5Yi5TtwTFoTJtDUXRvxUKueG7bTk5LWqaqLXWoUxVhsRRALTRaqyoAZE9wiMrVrpL9yB4xpw1fcR",
  "key26": "4XBuMvRh3eEsi3faZnsAxSBfLjP8vDGqfbs1EFXtDQvBsGn4LmNccWcL8FHy8tFYh468F6kNQnC1BnLEUd5FWWzg",
  "key27": "3UEzLMr417HQJLsDWeNqoXpY1DppWogQY7sY42iYaEJ6pbDt555337352zyjnuVMbdCaXWWffXRhVkopVAysxyqF",
  "key28": "2gbP2W7b1eiAdpZkxafMyJZAjdJBiAX8KVzabKSHi76URWaFfZFowbb1tyUCjhWWJBG5Agtki9FZD5wibmKnnZCZ",
  "key29": "wJanEbwXwMLrCTn8vDwNW1dAi7wWqRzLoncS6dwWmMsYuhWZkQa3EJ4LUSreF3tggju8h7Ejv6bsmgSxLJjhNRx",
  "key30": "eGd6hN3yQ4S7r9AmZnv2ZtdhdJagEeVA641x19VJBHizRDhTuynQ57GrRP9WgVeq369orVegsZsDwaS2qsqnGxa",
  "key31": "3ZcCirykK1aUodRoL5pDg8zJqBc1kj132DEY3Z9UTHkTMeJfiVPCQsefs8WJjywFygvxF1mU4e1HYxJfDSx5d3tM",
  "key32": "38uaSbCKtntaLtmnUjxr4hwQMQ89554vjUeGweM7He4gboyMMWH3KTyQAH3H94C4f97pMveDKTu7uKwoLzpqsytg",
  "key33": "3k1vu8nQgHnRwbfNhqgRP7tG5Zqyuzb2DpkBoH9hpPqy4rZpxPEePLGPmC1SpV9WQfRsZ8igbPsLgks3xPPdsr1W",
  "key34": "u1uEzW8tDHbz78KkvMJ1EX86F2Sv5FiL6D53cpvoVBqVBZxjSssZT9CpbZQZFvQAj6gkVacVVEodkCingWFmobY",
  "key35": "3RiEqyyBtp6VSJW9DNcG8CWpZ7TYLHoqFmD7cKFCAJ68vU4dHz3R1uKJ3fubPQpMH3kKTR77hD3rPeZyb7HJq98t",
  "key36": "4wraqE34HjrFvrP7jJZLNbvMHMg4hNw48PweUU2iUnmpyRCNZzmUfUDmkMvGynqUjNw5Nb7vkrY3WW9PY49Chk9u",
  "key37": "3wBYYLVzGFbLHK8KHYcUVaGaxg8Qy43bXaDsRgMgt54hygCTHRCoKbRe1oYksqrwVxDTsw1GGSnGLTYccZBhWbrN"
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
