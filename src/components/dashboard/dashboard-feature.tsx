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
    "26bN67B4kTo3VXD12tcP8p4fVXCCTtFpnSVomUNPF2SHk87Ekv7x6fSDp66viGE5JTUeyHqhWHZms8VhjbMoB4uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DbjaBWtHP8SfZMNQvPQJVW3m6NAjTHFsz7LJQhzsAYs9rHhC8xzvFjSpawTvBePoFKwc5GgdLXdjnSFw9EXNMf",
  "key1": "35yXMyZU5SHNJbbp4LCao4FqiL67Stwutm3ZjdkMauGfJW23Q8yWBZnmLq5YBwLEgwvmWjoNCU7mC6jmtQmsW1CS",
  "key2": "3Yto57UjsvwYV5Ku8cnBkbMAKg2mZjc1NznjwvHUFFcWry48ZdhLbgLhw8wR8Q6MGPcX9Trqh8pPTmE4d39r8Ef",
  "key3": "4iRZmsZ9urRogt4rMDAnJ6dXejAUW7cJ8jtzkggchzFPJ8Yz5ehvTTfo5yowXjYVLVodzs6HumanZkJ8pxSn5KxB",
  "key4": "3p5AthFH8zqQNWo34FYdW898ynR479ZPEEWmJmDtXra2DBER99ECdi6dUyuepoVsjnfk1LWLRoAw7txRpPXDdMT4",
  "key5": "31iT6ym2dxryYiAWrBARHrQznRFNPdAQDgjqcvmicSgLEwoJxgZvPnKZCTSdgv4KpnzBxNAzJMAyEddXe3zZupbS",
  "key6": "36k7kP36nFW6WATcPxCUKpf9hXJdh9kkbAbUWakheJDNH3M3ZcXtwvDRU2aTvLdBM8yubHr7gTsiCHbtntvpmkQM",
  "key7": "yZixUouZmxEUdmeLs8MDjbSjYHA7ewEAW8Wo15yhgmHstrNPKhKfjztgkiCHVrimRHY7gmLybcQido13F3Pa14S",
  "key8": "eVpheiNChHFpbhyz3GvxbCB3pQJ6ckXgE7A6mZYAy2fZXb2PLqtSL5VxttCsJ6bW1Fbqydw363nFZPUvR3LmCj8",
  "key9": "59sEzhdsQVtNx2tapSxvg4oWQMZSk9t4HTvMiMrEwbnfFYN9ZTNEE23EvDdbLaqHvb1dbtN273MRUtwxZvrF7Sff",
  "key10": "2VW6Q2G6zef3yHr9VzNKyQvwvaxSUvKCJHdxnMiAVJGwyAAK1tAUhpWJTtmP7W1rDo728Jjrd82zAZc9M7qTbCPd",
  "key11": "3nH3p6T2RAXxokgQUVf8rwFsvdsiTUWqadHXf1frgV3KdbQqFKJGz7SaQYWZ41M1HacWAoDpVGAV2WXG6udRoWYx",
  "key12": "3mkbiuK49zSywRXmAyCJZcvVq1eB45q6V9soqi8ZpDtVVqDJGmZ1UKvEQiBSejepk4iZQ96L7MUwpXyr8ML7dbz",
  "key13": "7EDowTBKeh8zbDX7wuoUTL9AxSEqBUKWKZxx8i3M5BXqV2eb7QKw3TLtWe5Gt2KT7KvwGSJbA2fxUTyb5Ha84Qm",
  "key14": "EoF5fy6yoSesXSy6A3QVejTwL3EiaVTgHrvdTNGQFXeBjyACT33RozBdYVx9jtP2rHCKe8qkqXSBF2fNbgGXrxa",
  "key15": "3qRDL7eC7Aq7RCRct9gqB1wLpsWnEd6VndafekZtHfw8hpLg5PWcEuCgRT6ww5bjRkEW3iyuF8FqyPLMFgdN93LX",
  "key16": "c1FBJ4ZmzDktrd76NUyHjSYqHqNXgCByAFvnbmRuY5REgtf1k25WHyvzY8jhc9UQwsRTtre1PpTDXQ17Mp7498u",
  "key17": "4hc44eKDtnohbdZrmcFKf3mR8oSe5hqD7w3bDfswYy256zx4UAj7jJ2QF8J6Nvm2bocdf2Gpgtqt4LeySXvJRy9j",
  "key18": "3sYpPma9Yap59wt1uSqok4xF4CPPLNoSPLQszi9d5bGJXzWs45W2MgV2FDVxzwgzKrJLuaesof6Rts92b4qrvTnr",
  "key19": "4HkRXYK8SXvz9trK9DUe8ovrqhGV4QxHGzidansr3697kff58MGJs9yPsoxZSZZXanooHZstUV8cNizGPcnqTC2d",
  "key20": "mE2jpmYMcWygLPQFpM6Mnv9vFc5WLL1r4NLfLYqLYh2ymHLCbfmjvsniQk1iYoKW3v5i63Rp8hT4uckBMmqbYch",
  "key21": "3YPKZ7THEv4JcWnjZwXTzgQk2xbfQekRdfx7oCjXDbb1oNbZejMv2U2XRyi2BVHCP52H1eRb3oBZyJ8v9FFeu9AC",
  "key22": "5Rzotn157y465c6LE1KgCVie9FoZ2VaJVTaX2KdjmqqMF1L5j2Q7GfTTYbZm3xeXSKKRC2oihU8GBg7cKzXV6GTr",
  "key23": "5QtfHBWEDbqKE9jpMwW29K3sbstxstnGrfTLk6TRHcYkLpo1jxuRanXrecN8nqqLR93urrBDbmsy18TxzSxTHMqw",
  "key24": "3si2nhhY6QSyaQdmNCr3sa5z8YMg5qiRrqJhxTAUoL2hY75wY8vxpPhGRVMPGYy7Q39MVjbmWLUcszpCqngRvPvw",
  "key25": "5kXhBj3RpcAFvqxwoQewVYKezP5NoePtAgNGTjFeeVAzSa9mXL8Bn8QmM65qfc5AMF1uU6GU8fNPCFJuDeMx47VA",
  "key26": "34kEGotAaf2TwVZwg7nGYtmvx1a9wXUrQWjH3K6kpTUwsL2fQyidfSDzKVW5HSfGxRCuHKbF5RbF6qTW4kurQwTT"
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
