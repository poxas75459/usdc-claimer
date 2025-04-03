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
    "5jjNwVFFzv3pruMjpjHpxePh9qDpR52MJSrVm8gsDuBNwCBsQzNAodQoCcNiFxk9bwEDmbWZzkXfwUhZBWo9MDiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eNCwxzRnonJ53C5WTPJAKxyXBcSDNYWDr6GdQoFMYZgZ3m7J3RdKRn1Txd271cKptjnKESQ4GNNEDuhRsK8ALD",
  "key1": "4jFvjTzEFDoBwhAasrYYbByMJcASLG8EK1RSJ8KVhpd6YPYX1TRJbyLkUk9f4FP3B8iKnK5wX113jCaefWVE9e9R",
  "key2": "32LV3vUUUsYdWDiRADHyDiNCnn36q5rmP6P83PZsEUvvG46tSNUh9Hf5bDtULojoDwtKDwoJ6yYpK26JpfB5XWmk",
  "key3": "4sAM7o6uuump5E3JQYk37JA7JRed9Msy87AWnKxQGB48ipCx5DNN54GjrxL3GP68pxowxQ5bUFFbM6hvp3psdBPF",
  "key4": "34nnAmfnoKoEhz8dB2urbURvBmQziF2WjSVFT7hUnnPw2ucgKSSvsib9C896kaJqpQJG3FjEM84DjHT2vhc8hFJj",
  "key5": "63XGi2fRYTDqsa5iBVqUxUvPTtp91Q1bGSQnNmP7Hd9th6uCQuQ8JEzXEnreWkgGu5n6okR5HZStqNPgipN7C1pA",
  "key6": "3wXcWSurr5U2hRm3hVkfP5N5zk4vpk8B5fxGMqQUkieXrUg8ZBE9dwRjUV21KwiTcfHm3kfeNPts1Vhv8ZR4nUeM",
  "key7": "2y41XtgzqCfApVYKLyQsDGaVG5H624cqUqhGmdkCKEzcn4NQza53q2MevJiw6sXoz3dHc5BVi6KSgWSkdvTCW9Km",
  "key8": "4ubU6JXiBmpcNojmnNUkEYn3N221ybiGWhqRHPRc2Edam4vp4UdWMBPGd4c4DynaT5EWCJiz3DuLp1SK1Toonjcm",
  "key9": "47426VGkgU7pTESV4Sc6kJtxvnFdyq4nfJbgaFnKbjwNSQjFXLnBvdYF3yeD5vdbj48KAoPYQMxe8mRBSqCiJZWx",
  "key10": "Y2nCUkCWWJPpZTBKzehNGpmwFJoGVJ33SjMvaBfhb7L4kKHMbBj58X5A1nMZCu5PkYE456UNBwuSYnaxaSTnJHB",
  "key11": "48hofFWibR5Bp2X1URVb6iHWKnxriPjqxXLWV4uqf78vvFC3bfQZYRruNhYKL5BLa6g8XCX2eNzqxuQncYTr6Kpm",
  "key12": "4kdpUvwgWRwwRUhLp8R8LeEFFP8Xrh1UVZKmECdRdqWvK8NifYX67LrEwGDnuahmMvx4KaU2fW9QQ72CuKMPd1n3",
  "key13": "2ouMF71uXjtabw8WMpW2HbPdRNbaHL1SGk11Fu1tLNKtbYWux6RWtdyWRnLhbo2xs8TXVkDydGqFDCJetcEBi7ma",
  "key14": "G2qwnnwQwg7KoYuUW5xPzXwLJEhbVjdS18LFnv2MHW49Yf1GyzZiJWtTdeWNcieqYHJKFTsdnScZV1bX3xBRhB4",
  "key15": "rAZtNA1R7bVHPsafjG4wCcp2KAWGd2fUB2oKqNNhrhXfcS1MNVnroHQhiq2NLUmhYxWQEaXLQ4dPkBDp3iPWj5A",
  "key16": "2t5Mm1gQVspUQQAsMnQJvB8xZxnzn3MCxW5uPr1DxBpupFWNFvduZiAZ6VMRjAoff6r6izCiX1iusxvd5pdQZCtz",
  "key17": "4BQbENYRLf2Mzz3ftjpxw1eSbi2meWYy6y9RVZswqsaNwzuvKx89GxUg9dk1aouM58QxeqGfq6FpQSG9zmbc9Q69",
  "key18": "4CVRfvFBK3R4jQrWCLoeW9BsHN6fhQCCV8Cya2kTUrj9cZ5MAXXk4D3pKLSnoUqbZkKfKUR4Z6hj7zX3adXgQsNV",
  "key19": "35CjDDQobeMYVDhsig1pjP2a2RoKWzaxab9JgNWYVCEfxvnfZJnP99LExzc2uxcz6nGxUDQFaUyzn6w8mAggPkNX",
  "key20": "64JXd1fd9xMYNjX7RuG1oeRwrJvCZTgrGAHXEPRTGL28HN2xVnkfmri7Co931L73kNkiYWUHticqZySwQUwd4gdo",
  "key21": "4uKTDr1fdce5m3GBjvUoNvWt3MpeGy7Ha69ASfAwDF7MtNSDzdYssuU1PRbtgvPq2pxRVh6zhN9Ay2dDQ3bqGjXW",
  "key22": "5oYgm3UDks5D9wtsSmMrc5dZoAMkwSR9cynnQw61sTvBs5TVN5nJP6jLiU7fqhoHwfmsEKh1s9JfT8wcuqB4234e",
  "key23": "3BHX36RnnLriatkJtY72X2vFXtUrg9tYSSGcuAz7sm3DZ8sgy6sKkjNjLeX39EWdzkgQ7jW6NcdJbfoJ8Rj7E1Az",
  "key24": "5EYptvyqaCVvy5iAhAPUe9yydeNTxzEe3N4dPwbn4Wg74uMBRv6oWLPxWWQ7ppZEpXGMm5Sbgi7betcb6Vc8oZN1",
  "key25": "3N5X4uNPEpvpBnHg7KG2PNZtyTBrZXgnKx7SmQCDLU8UUwjwm4VYvfsLb7enwv6Fkg4cypL1Gf6fmKcvsQEJqoXy",
  "key26": "3B9fSbyuRxKCNioAiDfAih1DpyAgDAvB6eQDrrvi5gGJA79nszpo8f6yhRXPwinzXDcdu2rqPAXEFZAfqqYnCnGX",
  "key27": "adPJdDv2giY22ZMxdHjmBu9hyhyfxnwjyGtCj2UdDzU1RAfwFvJykzsoeqUEEXfQEhnUVQ8DH34iQExpzYosqZS",
  "key28": "4eDWdsUVwb8Dq7NAgAo8mQmwLdAbHCv7fJnkiac6vYsWMraykKfkCbYDMwdG1HsMfhS5DMgcpoZiGxKUtGxbM2qV",
  "key29": "4mvwNzu1C7eMbGcduwvLCkBzovWX7NWGtxE958ofuAUdNJreypCJu6E1eQ22P2itt3axotJVfjqusynCfdbgjqau"
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
