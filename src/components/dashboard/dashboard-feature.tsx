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
    "4HB7pEX8ATQkU93Q57HuRSTfiXzt3VVSwHkGF9i5CrBR23qsAKVcUdMKs5edS1uBqJmNXTirktaKJfmQPccUSwkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ko8C9oTcopkb7UpjgfcLRSUbu5wLrS7BEK6Nsn5PPNY71b8Vm5t4dMhRiFKLPW2semPhF1k58HyhBokaLdGF2rq",
  "key1": "5xtuu8Y3VcHp9YgHSD6EgbG3PdAZBD1mxdW31V2Ss5bNCXZjdj412AJyMoDQQWPKKeoaDLALZKZQHtLmA8rjR1iJ",
  "key2": "5izf5Q3VdSL46r7fT2RfbeJDZYiTJchMVVMaEfHEwsNFzHrU1qaphQU4xWM3MFCDYh1QmdaHcqPi5nupGsyrPJpV",
  "key3": "yGoP5L5NUiFRBvoBfbk7uSkBXxGEVRuRwnruZxM8CVYtHZKUQbHc43H6mDyXYuSWyy8S31x26H4m6Mvjqtfc8Ns",
  "key4": "3fX69WDiqLAtKPhLNyABtozx9dhsAaWbWNYJuKnrqUUcDbLm1gX9s845SHruPvUmFpH63KuahNtE6GP7w75qYKFx",
  "key5": "32bMqc65ew8gZZWWmVWUWXmpYxAWmcH64pg5pLmZvrTYQv8GhzRFeTz8Vw3BAbt76RbT9S5Efa4mNbbQNJqTGwxj",
  "key6": "2TpUBfogQGajS4TccnJWw5QcEGYW1bdT24hzsRdD3L1xCqfw973QVyF9GE7oJuhBVsJXjyFhsXMvLyiRebTwDYV1",
  "key7": "5eUjH4wL9TGUBQrppAFxnhR9FH3emERQegnCebew2HLagRLEx9Tuhr5PFfTqTe2LXsGqRQFJrnWSTHDvEzdQwzys",
  "key8": "3gcg7vY36tCVBWXqi2ddFt9jxCQFsyzQvsEhLbVqYzbbHvCQQUsWnMeiaPQopKAxDLoCgAUFe2jn1t6vnJFbP5ab",
  "key9": "NBD9WjjGQuhcLZxDRFxQ2oDeixn5sMEkuiungKfHMhPMmtkbRGxgwXZ8xYAE2PZk4CqM2MFfMVEWJ8mfFEDQLHg",
  "key10": "3gfLLxnB4F3PvdgQ8r9kya7hZP5CKz96t1BBzi42hEDtM9jseChqTGkkbrqZBJR4h7bD7VVx88tL6DC89FcnzkBv",
  "key11": "3ELYci8dybfvCPCtLmK9uaeSqcpQoFyzq5Ed4RpbD1u58H1ryzRwafX7WUuwv4LR4FKxu5h5xL82tfYzatDjQKtA",
  "key12": "45EGFj1ftbcgvSyaZrbyX17hmSvJiqsKkyB1EvBDAdetW6HFqdYx81KhtkP5rhfQnqkXw9xkNTgAakF5JxPtqv46",
  "key13": "e3ciXbgUEMVjsi5zsFwomE8yaCUJ4ac8kxVEyPm99spXSygKmwSGF5e9KmLNgbLYi8bUx5jED5zmav9p2H5pQwx",
  "key14": "2ics7dq9G3uVSxTEneAJqoxYV74Q95vsmDnc37Txvf6p9WkDoeBrmDowtjidcE8J1U5194ytPwSkztbYPN67aPDM",
  "key15": "74ejkKraQ9G7HcbxhUbVfRVvKDYiReUxoirYpQDdX9LpGYTgFtxqApj19vcDr9UQiivtGJAv75k89B3UJ1TiQiX",
  "key16": "28baMtyMZ34YC9cFuY3dbfDHgC4uV9re4nYatofjUXG6XBxCqMLeWN1BLiQhryftR8RP1vQHjPkyChtF4sm5D9Ls",
  "key17": "65CFYdoFEWWmbsAMmgAbUSEyvyJTFFKTSq32z6XvFDqYf25pc7ooNhLdKBAt5BtQ8Lfw5J6fCEXYX3cze5ve5Xk6",
  "key18": "4NWJ1Sf8YYQnvuPFeFBZ7rmiWrjQowBkQfmTxF1pxYAFrkD8p1EettZAtz8gARaCRk9opZJSknoyudNcf3Me2SGr",
  "key19": "2SkALJxAP5CaWYdwtJQS2Jc6PbNG9T5eiUYrrzd2qriGNrLsJksWy1GUiFaQZAnDWQqKqXMDJyCtq7jA8uTydWkq",
  "key20": "3k8NMc6bt4EQUCtS3fYau4XB56GMNxoMfeWNpUM6qMmQ32xcfuaUQFwmrL5LAGXigAi7wZBZX3DCuDadqgDWd74e",
  "key21": "PmdXCYGZR1GeTYPgJUG61ASvNGY7F6XGrHRLmKDMEaWwqekS1uQSkcuUnpVMrJJWPh8oXxhKmWLtUdnDiFeNpJ2",
  "key22": "5eVPKSAZJ89GKwQXRjdRgkYQDr9tmZ9QUvQgk7CdMCFYq6m7cmm9YTsmubSimUfLCDseKgLKBLnsg3DVuYgfkJHT",
  "key23": "4WpzRw8GaGFhdp3XbboPFuRqQ2QgdqArue4WgQB1m6rCG8Timqr5KxHXvDJqffxmp4k1F5ZoQvdybV4upTpVE1DH",
  "key24": "53djNiYcyDxN4EZXu8jXqrLWQST4xtdQwFf8jGxB53YFLSGnBSjYRjQZGykuQsquKJijNjc5qYCSmmJkBRQMv3dL",
  "key25": "5biVZSMZpMJognathNqncyTY739XTo5XGxtNSqakBJ2TxZCdL9pWLPShDPyBbF58yUDuQJnB3GxFz3o5fQ2uZeCX",
  "key26": "5qWdb3m4f1r1BC3Twx2QdGYaVeo7FuJXFksp9JBTY6EszhVVwV3tefWvHgRqCuenQRRSLBYmuaRJFi8F5spp7gYy",
  "key27": "675zUap9Qiy2JVoi9LmE8BHHY5UEoqYDFAWce2Qnufk9mk1dsgkvKfxLh44HmauHkW6HVQFs2ioB8GPwBSQbeYWj",
  "key28": "4b1DVDD7hmBfaZo7xRzMHzoSPnX5GLW5CPhwX6pujVn7vG2EF9PceR5Wu8oPFEQhw3R4itVSCpaS3Qoq19cTMRkp",
  "key29": "2RBikepxkf2FRMd7YwyGgSCcSiYkxoZ8efhvpxUdyQ63moEjCpAf4sYhRMGHrG4qWGCv9hMXdXeGRjcYaUzVjQ1f",
  "key30": "2JWYEQZxCvscUAv5sr4tVVsF39jpMarh5HdFdYLjQZeU3UPMy9Gt55yipLCJGyuzdGizi84SaWvhkV4it1hg2t5s",
  "key31": "2y5VBjSEJCeJLErPEbDKTufattZY343eyng1tHVWzTySUotuKXPWSogmpGyBmQCPZ4E2BkTgmExQqbTcB5QSApfT",
  "key32": "g4ptMY9W1s7NB5SSXD4jPrPd1QzbRaCSJXhnBzD8R9ZidYordfhGUVh7S9Mc5tkqhDm8eXfEHcrT8PbeUArYduU",
  "key33": "4w4LPfC4NQaJPwJY3PVmNLZru9Xnf8hGYMzFJPNPRhK6tQGgFsnFU7eLxRAu18UJ1v1LwYFKMK68QafHezyUkUau",
  "key34": "5LknvXk52RGx2eXGVJNyRqvKvoZyT4sZaJQ861GwHJwdK7B6rASkUueFtPUdiMC6Z9N4PCESsJvDK9xHJMjfWVD4",
  "key35": "2j2Q4ouLbmuNUdWx5oDhgPtMqjxwif6aboMN3WN3hwGMs1RgmcQs8pMAFT6UYYMc2JrJsUmv88KPYAaC1c1LXSA8",
  "key36": "5PDBRJR9amx94J9kmmoRDN7jMUNKVTheBFA9ALnidFFiN9k8HarVYH3QXs7nQvA82zqTNvCKynGe5tWMbnTX2LEj",
  "key37": "3x65KQG7ZJ6oU1SW9eYvmnG8Ff1SWzxsndsZx2JAqxFmjL96w6W1E25D1P4EYr2EYHWDfnpvgRCCEPRJvRukNJ34",
  "key38": "feHKZXWq37aqmHquu1rNaWxmXLy6YeQvbaJVC6H33fUewJxSEmdzeFFCUsw1W4z6biXnFWiPYh8nJ7JqVgaWkoK",
  "key39": "4nPC7FwsudYKxu1KeuW4CpdwMmxGJ1ZPyafZP7emZCViR84dTrjHpkXXmScsMUmVP3kzw7jv6cXbw92vBcAHTyYs"
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
