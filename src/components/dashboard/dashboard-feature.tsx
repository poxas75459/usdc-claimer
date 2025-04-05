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
    "5GepbSUCBuuMxzUKfGPhim6n4a26hCXATDzXD9H5qahMGouRxLTpBD77qyt2SrFeqZj1HrQbF83yi17mN3Ghxz2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gebickUr2BS4jKMKJxwyxfkcjn8oj9fgwBuFDmWa8w9aRxgpLRUjHhhQe2sPUUiXCzfGPwLrsNfi2MixuoSzg8x",
  "key1": "5iQdiyvAGD11xAqtsUA7gar8cEbPtgtFXvA6EwvrkEFF1jwPzxXesja4wRJDbNxaXphryUtmYHUcb7s6mR6Hs43X",
  "key2": "36ogugi3m2USTfkejmmoPbKuKHJfdiuJehjGnXCPbgZCvnMoqd3aAuT4BZcSCr3r4sTiZaSnFcw6eRRu7XJVjBwK",
  "key3": "4ADFnHzfLZYmUFGK23cjWxuyJhbWCNawkBsDC5ZEz2n6VV3n7JGScQGbajYViok4cGZCqp6udYCFypqgnXooqGju",
  "key4": "3JnHZqcrHFcL774ZSNP9Ro4K1VcL2JTwSgFGzjJEmbNsThPFCAYj1tUkgqLNvHi359Lfc9RE2ZD84JjSdMtNBqeo",
  "key5": "3sgQMHQzxN9GsKZBrgPvmQ8ZXMLoJEPMS3aLnD3rkZM5BfdiH2EMBENFjKEKUX4aub3QywkfBVGjYX5xipsRhRaC",
  "key6": "2iLoVjh7b6HzTof5Vas7TY2muiwWuYdfR9iWUet5GD3L9nZooaugwDQ3hhrwUYhwJkMXsQ4kqSxRLGtb4wKMrmzS",
  "key7": "54QqJeinePaKAreH3RswMXS4mhygE5ZcWyQ1LKmqWtgRjDCRH18y64UFcL4tZ2fM5M2e991rEM6fBdke6o4YziF5",
  "key8": "4Sid4kXrme4vLJXaXzbPN7Psc5m5a3gtTNDseiSPtb9bKrM1gmo47fsw2Nzm9htA4jPdVdQombs8bcfzjDHbtePD",
  "key9": "3dLcoXy68CLWYR433UsPnkBNpaGkr5UCRK49PmCffZcs889bUmpPKgxxQh9wsQ1oFXam9PMscUbxdnFEj3eZwfPZ",
  "key10": "3WQy9xuMwRDdzRvqxjGVgNfGRWHp6gDPkaowytWmJdSQV3UjeHHfjm3Ga3XUeyx8k7ZpwXW3ruVHNBVjt92PGW4J",
  "key11": "5Pr9AkDsTq4xGBxQRXQhj59NuKTey66zkcMZjCoHE3VQZBDnFmDGLLdGF357bzFdHD2ULa68Uj1i6jr5ByAW3VZs",
  "key12": "4qnCLaCopMxD3Q6Cq3w7NpJdKig3HEUhxcmDPA6sQDZWtYsxR8RpX6nNEW4yU1xpAdiAztkz6eqqrBS2iiGofBpn",
  "key13": "34fPpxdTWfisLYAf1at2kw5XNPyLxQ6RkjAM2WBSfTVcvGu7KK56JoWqCzUSZdHkXtD9TAs4eH2tB3vb9jqN6m7p",
  "key14": "5sT2L3SYA8Hc7KehQpiJQq7QW9NiPZjQyfXkiYs6PNQ614PfWx77u4Sr59Q5VPz5nQmW2QqKTWV5RAT2jLbs67Qy",
  "key15": "43cURvqQexH8R3KGN3MDKjTFXsbcEiok5GDuzAa9yNeBLQiya1sJhvXSWpTMexFqR6PML1ssQQQobBSpHdiDwLCH",
  "key16": "3DP9rqzJGevA6JcX3v3PQYvEYWAZJc63YoKnLg9pHY48itaKYzRJLCFLFTREJNTQDkHcEGzeHSxMdLVu8t3gXnzo",
  "key17": "tGkDvuYyQwGjwbPr9xzkSt9K6qBeX3mKUPEAULkXhSHckddY952TuW564UcCfHgMxjRhSQPncQjcG6vwwM2tE2A",
  "key18": "3fbrkSNXp7UrptePR22KkRT9UKwnnr9etVPiLh7EpCDvmyZwmU1L4nfM9oFsPsvSxTdtXrZudXGBnbCVwcNuJdmD",
  "key19": "H1bFwaeUd9Ed9nRgHGSZnvniV1ZAR2J6R3f2TG1tWxhymmN7NApJappttTTahYm6Ku1ifw89Vv99KKPVfo6tn1A",
  "key20": "5MpZ6MjTg6g5pz3Za4WyYssb1A5xXrNUZB4hmpPojhaNVAik2r4sYb3BqtyHQ4Q1DZgSjeE2cL7uzmL3Rr3feztX",
  "key21": "2hKpUtUbnmABH3UGNro7asJHzF6Wqok3tNHa4RNN5TPLM9GV6rYiLwMMom1nbM7RUT9g9TS9bTFdUuwKVL3j3opm",
  "key22": "st3uV6kBkzSkWxYZf3Bbg3AXqb7mMG8xTC5Uw9z2CK7KHnWTriUcPdBm3Qbq25RXEE6dqER9UVdcJ5A1wXj1PqW",
  "key23": "5MBSUTzZmcXQakoFPQaCKVkDQMyqyY37X5FHUWy6CzVBWNQ7GVrt7BtrM2bBrNTefhz13dwx53dcBWsMWjFYgEdc",
  "key24": "53HMuDEwawpMzPzZCvjAuEVisLsPR363RtdjXa7WFaWaso1cVqXJ2bGi7bg1KudcPVPy7PLgGpfE2sZPbFVqpq6y",
  "key25": "2gXnA61kFUtvRZtFp71XU2VZvHSjKYCG5WJXhzUsGasvLaZGLShSKJ9fZzFTMmwRz5eVsqGWDSbirQQpykgfvLty",
  "key26": "2QXZRrdhHvKdnJEPw48RW4fFVy5ifhJU649ecRrsT9DUhc85Fi2tTAXSyfumoZJwQcL6JtCSpyv3KE88xgogMAg6",
  "key27": "3Uyga7yephbxZRGP9KgqKoanBVtnHhrLFPFRKJ5jiJz7Mh8xiXJ9vyS5qTsUSnb5yjs28Wa3Kd4FjxRxPuyhjxzH",
  "key28": "2QKcfcz2UC5PYnYBLLSXVHT2LGXviQtG6bAVvTyNzDJgBbjKUDqRaYpvk25qbFqvdDMkRt2ZqqYSJk5g9fXtHTMo",
  "key29": "nogVATNykyzzZ6o1fMjLYaLSHMSnpoxTpT6BwJFGoHJHE1yKvS24A21sZF2VHct7Q6JHXaHadYwSizZCW9JQ1Vo"
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
