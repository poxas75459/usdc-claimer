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
    "43s2r9tBpkMtazFw1Sa64hzZf9Qoevt1dSaoc42SdYbyRtJEQMDg9T7eTCWobb9PFEmr1omRJZk5DW8JrxMGNMmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDDsJkhDJAzyfiFMJtKYGdBGVGFYE8GZsowzAm4eL3yMYeKT8jvF1ZB2TrFddqixKztqG9p98TH2Abv38CH2Mby",
  "key1": "4eWMaxrgaq8AmdDwXQa9FbcKefauGLrp7mAdwZoqjQ72b7wii6i11dD4dFnxWHicGKNVr52KMmErc7WcAp8kqYXw",
  "key2": "5KDpg4S3t3g2YpE4mTFbFG8TEKQtyfcwNJyj2VjaihvATYqxFrTxXufMhKypJZAp2kZRJW31Hoed4rporkvnE4Mr",
  "key3": "52u3z6NwjWp66wyWVS5cuD5SV1UD2vd9X83hWPVv4GQhKXUuPHXmifTAVyqm63y6Hsy4GvksTTC5KAJYw5QgEebb",
  "key4": "2uk7Q5n88VxqHZFcXaZg32hGbrGfvSrQ9gNmVARhxnBqJkssk2uYHjKebTJdmZ3yp8BdggnuCFMfXLX2C2NcUqcc",
  "key5": "2LJej6yd5fxbynfUcA4MYPwSyDPtAFR7FBKiZ8uBk2uBV92e8mhU65nyYj6xNMLyeUAwUCqtNU74uZtxFqE29BdA",
  "key6": "5N1afVN8yxcCAmJ2b12KezM9DAhuLXvkHETxZKiJ5SmoDqTBxsHoo6vpHiYwwyCzy52MYr9m1Xtg37evR4Pf1CFo",
  "key7": "3ijV4NqBSqG9dVxHyZSxUUZbdSQRTT1bCQKbPHhmG2cwr7SyjvBJQFcyUZu5CquV7RsHbD7yeGPvWYSSsuVqdzsb",
  "key8": "3g5iyvvXfCh3RKgyg4vBcMpt6rNGgwyHKXEWTmvZdLefS7iZRuxHTmsnw8pT9dQvBfsmPGr7wMoq4fYXgT3gqLnk",
  "key9": "5wVuc1ZdwHPWAGY4PGr2iVyeHRanr4TkBbF7ooxDtSjfnHzit9pNVghNdQY5ZuxdG1GcZHGbFEMjr8Krt4e6v9Jn",
  "key10": "2gF83zSHaw5Lc4aewFFTL9zJjorsFSXo8pLbr86zSMSm6GzYhqoh1SBTePqPYUMLsNbL4tVsghmDeZMN66ecdBv7",
  "key11": "36oTd8dDBvth5ni3aFuQWsPG7vjDmWDjNGqtMtwL74efgFsrGAYVPNfxNMzqipT9mYKWAx9CLgpgvnY5hnwaM1Rg",
  "key12": "3U4ZMiQyyKryV3ABgexUHPGKKuYT8TAMT65WAKohZzqiVGyUbd1KmDRgwGqcuR3p17eZjdLQsUPqnrna4YEfpMDS",
  "key13": "qiBGmyLGkhmAHCeRxmEnPEwxqmDA9xYacMiQiHFMP3DvsfLeEXnVKatwpT5UZ5fbq9hwArQUnv1SvmtNeGMEmhs",
  "key14": "65LM8A1sgPgicQKMHYuGRM8MMcu2V39LRr3KNo6Jf4dmRnoRvV5hajtUHNRQU1ZNcAt8QuKeFViJF1dNXwLtjoGp",
  "key15": "3RYFtBcJCgKdNA8Eo7jV4eS5iiCQSixnWPsTFanurBRYpu2B5RHUheuZfqq6ZRbQA8mV4jsSsBCsy934g1P8hpY9",
  "key16": "PVNAYRDkQF9CB7NkyAeHk2R8x5krsbmjjGAMBy5y2vupDWrFKkX2Yd6CRZjx3GHG8p5e7Hmg5PtceFCN5jM3Gr8",
  "key17": "SAy4YXKs5LTS5JR3kwDwPNnZRPRvh3e67G3ZWVwqDPeY5oqAm3uxFhUTNWtgZdh22hm5bTt7qNeMwK8Xyhbejep",
  "key18": "4WpPSg3kLhoWJ8FSHAmaGtGoQYvTRTELV6oSWXqsfvHhp45hiKVBStgtJwP6S9UJzeoy9qcJ9JEU3H1Q5ZdTkzh7",
  "key19": "4fa96zo3DzKmGWvmHPiBfcE5P1juwxDBXG43mtM1cWNXYQRgxMh1gRN4qvb1wN846XvTuWpBS1UwRV4HceyPktM1",
  "key20": "515U84Syn8aAmdRruRyE2JFLY75tmwCLb8sAp1A32Dsi1gyrqWYN1GG5T7TmRop3cE3yz28sc3UVT6LGfij8cKDh",
  "key21": "46UJb4gem5wq8nwGmZwZ9TU2Vzg3GXAoRPuunADG3Tw4RQ57ArzgwiLiTH1JJLbjHWm9teA47gUqydmaBhwjo7ir",
  "key22": "49xBt3vfKoVr9nCwphZtZM5fEiy8pbCKLmhWUUM58e1CM5LWWbFFxT7X35g1tzCkJBSMotAFtez8YsiVJkG9x5yp",
  "key23": "4NowmXcqoJQAV7GkuSackFZ5Gok8N3Qb8Mv6GfX9XNTxLsLFhJptcqB3pqW7kGMXNkAWYJhPasmEq93KVF2yd9sF",
  "key24": "4EoYHDUhgZsYZ7aBVzU3vMzyqp6yxSRidfk7uBmetL81m5fDS1MFrN3ebT7RXDxw8bJ9H9VSNkNcg5KePWLVtoBZ",
  "key25": "41YXNjsgNEiz1qU61D4M9syDJewGr6YCGPMni9ux4DCKn3rDwdnnRK1jMjhSZUbUZjDuT5eC8gXxXbwA6kq3KgdD",
  "key26": "4KftaED2mUHRBBjxEMgBM5ZScH8kY4D9o93tJV3sgxkHKFSz8Kge2toPSKfBLDepjb2rBzrUmP4jUijKqdb5x5hZ"
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
