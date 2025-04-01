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
    "7hVcm6Vf9DNWLcTKVbr7W4qUnPvY4nfDgofKwijrdTWK3wmDQbdRu2qcxJjuCQwr3H1tjU4QmMFvJvD6ztzkBfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W9vYr6EFdMh3U9qoHARX7uyFhaM71AXtyZv8doM5SSsqpENkBocBUTdRTPACcg9Zgg4Rm697QSaFvj363R8VjKq",
  "key1": "3esadwTLhZvBPWb8UJxMTj6Ru53BcMSVqDMTZs1Mc9513LWjGxkiCdMoWF1ACbgNoxkGXKZ4tPVQhRnHq9gU6dJM",
  "key2": "4YY4pnQpQYJVjQAUKis7Y5AgeGiiSAT1EyyF5wqZeCzK4vDsV9s9hjE5MnjLE3bMKD5bDYq23WDhaTjqmu5Q1x4",
  "key3": "2SiySYJtHjai4Nn3iv8CbFxKw2y2MqtKDXwdN577hrv11izc8tBjyFpp1B31GHxhkYQpf7UxaKJm5HAKVk78cmcJ",
  "key4": "4JUc7q9f9iFcHnMwibXyP3Yrqd5gQt5M9khCiTf9F2gSQ1BsjHNThXz38F8mR6dBTFLmVP6aDAsJ8LkUsBD3zruG",
  "key5": "4DUmPFz9rYB3m4ECo1wzKGC599StwySsq1VDB6shTJGuZ4xbUqLjpr3TJLjjkEyQcjn1gwNX55sraLFVVazeU52S",
  "key6": "snLYjL5gFRu6t5BFP56jNobph5onDGv2noWW2rUbYyDP3zCCuaqwqKR668Lf285rDSMw27kS96wBb7cKtQV6PRH",
  "key7": "AdZ3jcHgrbCBvKJ5WmfD8JLGvG6sLKWBAfeHVgushD7XFyG7PebHJeJxiHSpUaRBcA2omc7h7AgHYe3cZ2QrFTC",
  "key8": "3EXxmYRSR4tjygXPG6pFjgzUaSRDdmGhNoYQscQrtmh8KB713i292svumKdVH21bYg746gtANRxuAE2efdwGQC1D",
  "key9": "5ekckbpj69x1G1d1unb5e6nmGhbbEgMSCKCMy1wLviug5JF8nZSq4KVz2KBWY4gkbWjPFkiAQtjDoFPznFtELQ2k",
  "key10": "4yHeUPCZ4RumcqwXEggnpi8eBoS23kKQ1XYnBQNR6noXqAVpSMcoUWGCTqPDAYPd9jqtoucoW1XQ1hFq7y7BFSLF",
  "key11": "4KezJahVYoDe2kNyanJhbvn6dUk5BPsfhpJLVocWqUsWecXLCMJtCZzfQiR6inRVqZo3BLEeaiz6upsWZSrtTENT",
  "key12": "2k2b7nW23z4rSoTmFyusdHNfhCkXZmF3iEMiCrSBymLRNVU5VAQp6pshJUtkC2Lkw1csbw4ErDQdsbUrtJdKQMm7",
  "key13": "41RA1hV5T6BGJTmxLGrZf8xci61HjVtAZ22GkUbvSBb3rcptgCe7iAQeeKoiRUirvJ7vQ6YjKtSFUFJEVBxZDojX",
  "key14": "2GDRjQgHQ7t6YdH3kHJA1SUQoCQh6dN8h8Ss3EaBJqyPVVzyNTxyo8EedqdqjxToVeTP3huSoxS8husZF2hEs7hp",
  "key15": "PuL6JdZXKXyNyxVDVaoxR7ThQBeN1H1VoqVwSVK5GFkCBiNKLBMaWUdkoJB4DfCSUa7wzj4J7pkUNzfvcwutiQk",
  "key16": "rC9qLBViyJouqdh9KyaQe8sTaNpxYsMU6wobetdGB35MHrgdjCdnsATceE2ebXoBH3P6Zgosir6HGHhEU36MzUz",
  "key17": "3aDPRupLy8rmR9DDRxtTHkvHJis9PZVt4NzMEmA7X5AEH1rgjWEB2FjPnz8g8asNyBk6kYLdiUNXovdR6PmLK9uu",
  "key18": "52LH4d5YqxfeNZz3nqsmqWp2qsufobidHdhinw4CW41TmejKN5g74bTyw16r2kyEc5NTbnRJAsQNigKQNcfG8hEL",
  "key19": "5xwsSYtu1Ba4e67bCUkueqt6WF73gJV3H9S76jfwZLEHdWLxajZgK91ZoG9FNLYN4WHCMQqzsRW9MhFAs67fFtvf",
  "key20": "23yihZGbqUbaEK1yBx8E1jT8qHNNTw6DMyYxuvXCmajWTaqEk7qZ8ivYKqeLFCi1WCJ7qa5XB7xya3ZVddsYFjmP",
  "key21": "4pFw93VKPrxmrm94dk16eRP66HUWy7r3T76i9U8DMArmUa5HTquNR1ymmbU4P3XmHGSwqQKri2Hzdv1swpF2u9Kt",
  "key22": "YB8i22jrAX9RBMVGYz574ghTWqzHGwC9AwF56FtKmXauUd7BNXS94BaNQwmB8ZE5KF7QFDAwg7iaqeSasnSXFKY",
  "key23": "4KjooTCrM6jeZfwFDfsYFRrVXCUDoi2iH9WbgJZCKJUYVvdaYqjBx4Abd7R6XrhmtySHGY7ZCjrvtAm8T22afgzB",
  "key24": "VAbCFMcRevEuQz13DcnQpZ93DP65Tam9LZo5uWhK7CRRn1oXTu9yBGoikkKEKigGWeA2Pxpz3UhXWnFiAawXyy2",
  "key25": "59oumxs91Apotwgkux4N75WUresWe5viBZoDCxJYpcNzzM1rdECAeve8KWS4cHhdv6vM99WFR8kA4ypiKhXVoa5m"
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
