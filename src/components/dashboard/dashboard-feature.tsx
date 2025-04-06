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
    "2x1mfh4J67XEThXYTtqy1MTCSrpByiX3JTTeyEWGJLBUVEQ8eWDvD8byDB6VFeUh3ZPUtwT4aKUWrSb6soBt5Qij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1WDQjwoPtn1qZrpiB73YCRCzXCZYGoiY1nCrzWRuhun62dEjmpc2d9hDk3q5YxWcycTWEgBcrkzwayEryetHF8",
  "key1": "RwQ6uWC1KBxQ2MVKoLhDhRtaxCj43h8s3qhFtdLkUrd6zLkxNNthd4PGLVDdHMjFXUmhpudhm1cHvXCezzJ6ym9",
  "key2": "24okT1UXQyV6fnsZWT3bR8LoMbhNs81HzfKtaEXo9cZZBvFwTkWuVXCqfHXyrQBjtQc5jc9TYH4d1GdWawhZbWNc",
  "key3": "2BNv619ZENSrX1c9fhaE1QsBBpcycRpUZYWkiv3eG17PVf183Vtjcs9zxWHc5hGG14pwTom97pBKDpKExtxhMHm",
  "key4": "4Xb6WXZT6xBd8EU3hyH3aFG6w79mhrsLhVJRPnR9vuJQRC4gMUv6TmZGK7EqfUFQfJQ6qkjQUj2dPfrk8FGPpbQ",
  "key5": "2b42nCn9wwNR9d7MkDC1WWejvmtSvCSVcneuFweFuX4fYZR6AYEXjRZEVYKWkUBT4Pp9ABwkuLtgBKaXCfWcWWwT",
  "key6": "2dHu9c47rm3e3DGAxd3JJxrtACAndph7dDQrt1eZRtSeZ4XrMeyHicJ1f11Q5ctUrKHJ3k1eUaS7N1QnvDrzT65v",
  "key7": "2ByxDnXF4VrwNmmdHMpaATb3G4E82bohrt1x7bESiRtVLdLecyFced2Edv6YGdPauUcAfyy6RFuBess9byqeRSCK",
  "key8": "5CxLPejwq6xgo9ubzvskCdKcSg6XeQn81tJL75RQtSLDRGFFBWrKVXbfgkqKAyCjLxLovKhusVzGrwNYMMr8NpGC",
  "key9": "3KeknWZb3ZMioLKb1UNP5Nk7e4Ggs2YNVQdZCBwuVtTPhAsMsjTTrGaiEhihbpAS3wTPZSdd5U1X4v9bFXDBSe8D",
  "key10": "kHXLtGMvyB2oESwFy3zBsSYS6HL4EWuoRZVAVaCGzLsUVZBvMcnZo84QQT1ynq6oZeA4YFEdUnbabMWx2S16KPW",
  "key11": "3GJgttPnXX9Aan3p7Bk57Y7rvB7MwqhpimeGqUVHbvwHnMphf97yEMDGEGuBPDvn1EGauyAsVUCNoAK4FrmoNQ5j",
  "key12": "4CQwGSfwRfWvnfnsE8qQbWuUdhBvR1HkpCwUmXm1GR8uBQqStD6UCDSqapLPREfMyC7jZnGhGtwimHWjPUwKtaPh",
  "key13": "22jKsA2KW7dy9N4BytMEwJzcmpiB5MfGmUXQ3pMyEtrGNL8tZaNTALmk1zxT2YJezNNPeahvemxmREkWYPZG4Vac",
  "key14": "2LkFyAUTua2JBPwkhpY3jEsSF7vvARaT4fbnE9FK3yGGeh3XrgLe43hPEsS6QtBasXStKWHCdLgej1BZMpGtxgyw",
  "key15": "65hz8rGiVHxZMvRFeToEWetsGyBBYhdCnbyyunmv6dF7ggXYpfzSR1HMHZFbjUVQGseyLzzGoNaLuaxAHwWhn1wM",
  "key16": "7jDfCXcPVSniBSGfhbtKGLF39tcKpe5oGwqqr8HPP5pXGjU6fFNUzKLqPwcoyht3798ZUBSvs6yW5G9wiPZvnnk",
  "key17": "5KjEa91Q7LPvZ9ibuwzx3ckwkegDc6A87xCLtmMm1NknDxD4YgYHVFSXsFj7TDErk9LRMec8uBeFevi6zcwmAGVS",
  "key18": "54mDZaCbsvsMqhYNGKRBCbohy6eWuNk2fRcwYKG1Z4nLfCMXMQjhEz4xAyaM2kc7M2F3cyXU9iH6sFQomkUyiSt7",
  "key19": "4u2Tn5cEcJbmEFrP9khVbRpo87HwnKfcChbvqQzHJnV7Xt2ypru9qqVnnbwuc1BUfywL87FE4vKS5RPSQFhHWsJM",
  "key20": "5AScktzua4NSke7ySUC1ma1sGZF8Etp76kXyNKLVjNYsims9bYBszoEk2ww7W3N1jwj7EfvQEwGKD27grBmbtFNh",
  "key21": "5S7ufWkMG3c1naEuU5jLnzK8f9umLazVpQR83wov1vA7jzoV5MCffm4JU9g32GvHDYEzSMU6wHXUgJ9zgbbnKZHB",
  "key22": "4abEwZKJXPFxPxbHpZrMAcFdkXxZ9GsWrK7v4qRsT8srbRvYTxVoKnVkNxhEjYhCBaScq4bFXjKCL9sA5tsHfuve",
  "key23": "2UjQ3Kzo25TXUwFceLhT1WRD3XS5wJCexGSpuiK6rghQAsb3nfXYhcrZ9fFPwvhVog2KhjZkD1P1eVuhsa4GCJf8",
  "key24": "2sUBd9KKDTHDsNrdYzL3VU15oiGao8CZJFjH7riDJwHijCoA4F68Sa8tdDRgLqPMBhPfce4QWCxLjA37LHYYfoYS",
  "key25": "3V2tkqgH8ZSk1XXUcjuY6m1WBvMK74EY91PCSM9A64q6CN5rpSPes9doX942nYTjvT7pYPWcEuww6VPvLVWWHQFL",
  "key26": "3F1FAYnFfhUfrMcvuJTzKWaUYSwhpsa9UFgckh4D7gQx4QnWqdGfvdu1aDVwByhaTegst1s2Q4Kyrwtv4xVJkKUE",
  "key27": "2mSqoMY7cxoNZ3nKoXsw7964hNRjFLyicsbuoC6FDqfZwet2iV1LkN6Fa4kdu5KwVbgnaTamxuK6TbpeK2JV7fGR",
  "key28": "44w8wZy9Hur9QE84Lhcdj4Urdoc3bNXoFoxU1NYppk9SdATyxnjcVPAa3SLHvrDKzVupSmdyZRcKKMLsej4h1RzL"
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
