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
    "9rmRsP9d6keCSb8bkdqa2ow7PrUbsQtLKZfgY5w5yxW3g1j69d5A6ak81yJHQN8zC63YaxrHXneThTV6eZqUX5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enPkHUwgSnEXEe6ZdL7A1LU8CXF7sbTkfYLNZvqiJyJNBCgnFRJrXxMgfsBJE2KyCUiU7ba7uQmZ6wT7FZF1A9N",
  "key1": "Lfce1FoLxfVqsokZb4inn9SmYKdN1CVRs5aTiFF4VYUtjboVAGCFquLKByWUydxfbMMeVZ1gTY5jgKJmkAxRza5",
  "key2": "EcxyXZ7y5mRNWQ8j5seZbQaNbGZ1VR5JDrBv31mcn9wGvkVUKJJajxfQexqu6gJJGzy6EqG9n7RGbkvzjpUupsd",
  "key3": "daJiUKnvt7dKxGscwgA6h5if8DhSTnjGcxpftv5seT86Y4qi8p7rCy5boULqNqvV1LLjKJeGPGsWm3WMHsnCvQe",
  "key4": "33XCiwS8Tcf8by4wVxaytPoakTxkLAnMNXR1yev18TgZTsXdHHpRfiAQ4maGjx38yoQZKPbcKBRQHpyMR691BQPv",
  "key5": "5wNqa6Jvex9LL2PCix3DhScaz1GyE4FmzbkNkp8Y4gSFWLeVQbEhjUdrp2iiQYzj5vJvMWY4acQa8fqyBMssKa4b",
  "key6": "DnbjyK5zkFgGPFKrrYGaL3sL8CPc7HWRHNd4XpZpzzhdkQB4j2phnQySbby6zpwQm9E25m1mBNjrPocYKc9BoMW",
  "key7": "4WozqN8HR5zTw1B7FZuafFPoJqFcc1t8ZQtQJhrbd22j1g3QDMtYXPwV89Zp4fJ1vHxxuqUwHpfk5KRvf9jZ53pb",
  "key8": "4hnu28Npi6SRTGUnV1HMCMknXk2HAWgsAT8KDQyowhpTjm5K6jieEfQJULqXJWW6VfX4CPKsQLTEZDDAJrAMYxkP",
  "key9": "5EhYCivhaFSJHBujKXM4P47JGWLWHkVPjixH9qEkHgdur2AcKb2ECt8JD2egpknFeX1pDS3aStEodEsRbQBEKZD3",
  "key10": "Fgv4JoWwzyateAC4khEnqtxgzKAJ6zaGusAQ812vpjeDKBXaTB1H4osL9dEKQ8MHRRD8Uq4FXKctYNtPjFMmQLg",
  "key11": "4iDM1Tgy7J8iGJXWMsucKLpRJxD2qNqAUoU3j2YDzzThmHXYBndFBkYMazS8YAGqk3Ttuf3HZTMVx4qKyEmrqPaj",
  "key12": "5MUu3YYmM6qFs59vBDgHV9JPnbCgy95TwXEcFE5Qyg2jSNicXJg9NXdqD6vXeq8qi5nyeFvpLKGg8x8e2WMCEBjK",
  "key13": "2NV8yGgZMVqbh8JWWJF8ycMC83s7z8k4rcadSjSdY3YMLzPpA2YDqHZFGVJuA81VQcgDNzbVvrGupHXjmSrwLJzy",
  "key14": "5wHjMwGm7EyYiqyvTkc4MFQBh1iMFMr3uGVmQVEesjFYxKNzkhevDuYvqkvpVMw851b1Fq15aaREHf1L9KxmV7fB",
  "key15": "ZfUGjhDeUuCTpscZ8QKJZk8zKtRuT5VUkUnwdnMGy3zd1YWSsp1EesNN7qhdQPeysYvW59BSswHaB6qvsoYPZcE",
  "key16": "62MJtnMBZhcMMjHDm96EtToNxLRZU6H2VT2HLoj4HF24dj62ntvTSy9qr5VWKf1j4o5Q12bR3gVaas676iUbz8GR",
  "key17": "WQjVjJsUDQXnEY3VyB3TuZFK288jFUAs4fnoW4exSh7uV4jKpaVNdCT1xq4b2Kf5RBv12c32hp9d812shgv75md",
  "key18": "5jtLbCXaR6zLgNUSXVnHz2cGD8K4dyyadCMqb6HpR7UHsgnoT5KXWnRPTgq5VDrCVcvRJ82VGQyLsFCYbXJRczjf",
  "key19": "29PTcBgsZUc63VgfpYmZS9BTRwS5vmfKBs1exjqCcd4mwHcTTo4rAUd146kBSzNaLeUUtVs5qutu9H858Meb2u1h",
  "key20": "zqRjyqza658bNDAVyqa9JJbWLso8EWi5sVWdAKserubs8vLf1KkEa7ykXUEPEzEawCkWuhQz3XWgENqB2mvPvWB",
  "key21": "2hwBXDCVczboh4CS78H54Ciik1x6gFNUCujXnACXPoaz3WDGrfsG63MD985k5QXBw31LAvyLWwoy5TAND3hHLDtH",
  "key22": "nyqNqMjgJioXJbJAM4kd9i1K6V9z3Pb2reU7VozXrdoAvLZEhyTrZwX3vwQjhyKKDakQhFq9aoALPJN8BLiNGHg",
  "key23": "4ZDfPBjRRvfPugGUvs9ikjVhxZTna13nxDGqXFcvXUGpHDsayHkJKercQHsKYW96Cp3XKXUEtLwyaPR34JRN2Wr1",
  "key24": "4Qi7bF9CSfRKC5jayqVZdKM8zYfcbaEuPTJpUwFqqQCnARi2Cfa8xdJeodqF77R96phawwTRhdcRtcj9DyzgJHYy",
  "key25": "3cLLFFxuoifqHoFRyrXLvGDPXsntdr7yXgipTgXqkcnkZNdwpfSuJKJPJDjMHZ3F9uNVhrQjzBg82L4chCPAaijU",
  "key26": "4Sfyj4oRDesRBLtxNhRurGY7LuUanfxcuskiJmq6oreLVyHSvXb6J51ujxnVp5NWepSoxrrivZ76Vbs2HXzVzfcA",
  "key27": "3j5aNuLppiTppUtGW8Nt5UMqKpNS5sSHTgR7iTpxXBcboxzBp8YGeQGph29rnXEwwTixwKrHVbH7ESionPc8zes7",
  "key28": "3JkEHnyFQabYLVLnBmkfQntMj17MffBGE4B6vfFnuZCCXthiqSZGJua2xaMshQpdUjA2farEmjTNNQDqvW5uanN4",
  "key29": "4SWAHmm8ciFEDips1Gy9NxqEAH9vrRQ7GPtUcTePT5oyxvYL9ijytCzAd16jhui95AYfrDcth9KZLbLF5ohhghJJ",
  "key30": "2yTdMkAtG74Jvtn41zar61RG9iyxQqo5rzSvLCe5tNNcqqBjrnPAotagcBWUhUK9uGncSPqmXFiooPh11EXog78e",
  "key31": "3WCNQYaBT96JyXJQDsCMQXkZenkV32kUR1HmF3xKuUzEvDGSqykkxmCSrGf7iMz8UPUjAHJ693wxSJvAUJ5gBuFF",
  "key32": "SkmqHXQCZdo6k34NcYf3FrkqyxTc8s8oEwYvdgvHCqFUxRJQr4YTxK3w9nJVh6yDLSwcfkB4YQhcVRWJtTEZJRo",
  "key33": "51uUdSeuvg9bvaBcEDUYVdwKgMu34AEnsz5HNXgywiwZfc4tK5CyPnd62sPwdFv8BfR1rtJtu2SQJ36q2FnjbKs6",
  "key34": "2a5tvBfwSnGY8NPzBaEore7ctZptrBnZMGCT9JvwcBJZamxVV9bkZE8y8GQjrQVQXka9iKNj5vKdaMuam6PZcqRs"
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
