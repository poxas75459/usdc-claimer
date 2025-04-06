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
    "4t3KtYP1hq93MMyvKiszqUD7UkytaYFcm5WbZWsFjHefvWCmns644FHi5UDhQF6TnKhg3s4iia9Y2EFmokYL6784"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5do18b6iyeGwraVfCATeSdDM786nDDxA1dBQu7hRtbi8o1uoukUGL528xmwQg1hQFycRyzxHtZ18ETu8mTdrbt8w",
  "key1": "2a3CN1BK4cwaPmhRrMHn3Ys3Kx22q2y3431QXFcEbgFz6epNkgwfgVUi4EMKXxiFbazDS1LvHBDNQTEamMLkWrSH",
  "key2": "5immuNXjjjGvd3MetGuA55bZAogShfy4cCHHdmytZsk3RqYUsDhBDxxQ6QRZD9QFtNXkjALQGrmEHCPEqpJZzkxq",
  "key3": "VnoUGHn8RQsr6Bm7YvGKreyY5EKv52A9ywdy3brBn95nNHVDUy9mN86bqSNAjDhVCoByVfffosKqPnpNPdexkcY",
  "key4": "4WC5tASn1VPWFa9G1rty4smrC9Eosok9m85GT2zw2EHY8L1BNqjzes5rUTZzSacm3sZgekqH8qLSytZVvJdFE63V",
  "key5": "23WeqUTwSqHr57WPUHAu1tFaWenX2ZEQZncgEo4g1hZGJkKzyyW5pmYhYbTN86oMs2fxyMN7W3om1Ac8k4L5WmKu",
  "key6": "3TNjkooXn4UfahQzrp87amXZWCAeKFK79SKZ1wXQupXJVWY7v2Mw8CfFRapzPxZW26t8JiWhFwQV5EBj1rVmiFVz",
  "key7": "4KYt8DbYsTKDs5dzwvkBFSE56Cuuo5EGCkihXB98hvBDuVnhnJxJhfxw9TzWVfmJpRsqPMAffsUokXxQaMdm5sfu",
  "key8": "HNouGzCKyNuiBLiRwnVYT3WP13sbXEXvPHNSdr6QTxYaGqY2wmvVvqW27cxrmuDeV3F1nDDvojVQJo1cHLfgR19",
  "key9": "4n5zwJ5yHWH5yrstB5TqdM9tP4aXmnepwHYukFDpjHTvhXdt3nBYq7oyWqL8AGw71p8Ks2JEktDpbFvYLBJEpjom",
  "key10": "4YuMbFCmCUxy8RNqvM1kLZdt5uUjRgqpb4KLBJyx5raFbNNrGQaEeC1N6iVdv6y3qtw3xNrHgr4tDqXSm1Pd5zBQ",
  "key11": "Czyv8oMpvzLxNSbi5CXxm7WjfLo3FTxjKUBXjNxcvQTxkM7fmZt8GAny1ctrDtoUz5TCPh1s1fns1QdE7b3run5",
  "key12": "v41oQHV2KoFScu5wFoPgkkTfMg3kqvKWzZdj676Y8HJxFpSYfCgeaboPh8hpRmkYWcCbUob4Q7NYvmvGaLmFgFD",
  "key13": "3nKJ4NFKxyWRkhXHi29Jiv7PVgd7nRd6TacbLdPm2j79N8TcTLL1ig9tqgSYL1seoEA9EshvcLiKFeWct19gH54i",
  "key14": "4nQVx5Y3gdz9sY7muBHkLxveJiMtvFcBTfzikZb5DgUVFT4xpM9ajn743E7HE2tysD4jhWxmm9fiE7i6Lqf8Ev6E",
  "key15": "596iXKcStscdTobU7YV2GpoQRUtvLwxrpGk2efB4PSZ5WqPcG6R2jMYtALEq21feo5fPiQx6JdJfRv8VLs7DAEBj",
  "key16": "3h5Mp3NiQX3Rr2bHEERVqJhsP9ZCxZb6YATV4VKJm88znfRc4WL3A4UMS4KkjGVss8VNxJ2imh4kXd3N12wne3UC",
  "key17": "4mgXAMJViwDbR3b9Ciz52fTCTjQgt57sEfPgWukUb2NpMXWDZRo3AVKFHCpYP5xPrhiJQ46i6K9541MeLPSTcAcf",
  "key18": "28bpC8ax21fgeYsM78tZa2Qoby4jWCkV8z1juYWLLT39D6CGUPUZFayYbsiEUxN4V6nFZRBgrG1UEz5r3z4PEhGo",
  "key19": "5zMGcfmWoLS58fwTsTiTpdQC5FAqVZL8gs8QFodxaqmiTNR5Lsv57orJCKT6pNB9cRrDqkjr9j4WZTA6V8dPpJFz",
  "key20": "3JonyGsPcs7inYMFmTHX2cMtmkwuF99G3KjV5NUh9oBhgPn2UfqfwefPjCkYoQ1yr7xYQyeKBHZNMFcqx9HaBpRm",
  "key21": "qeV5E929xhZyyPak2NxawunqnCqyh1mybJLWcBZas3oBGevw34Wardxf5wCw6DsapXWQJ7yJqZDLXg2VUBZk6fC",
  "key22": "2p5XEfnrT4TzUZ1YuDHqMqortXQ4xWvRJnUqFSqroUfoddDuFVUb2NYtA4cY5D7aRumb9XCJaKs5VcUPFAxsKd5s",
  "key23": "Mj9EZgd6E6YpEJVjt2akEBxAmvPdoh5BjHiufVXZnotfcirZsp3RLzXi8SPJ47py9wGVJZMzYtjPgBTHw4ps59v",
  "key24": "w3z8Sdi79y8FfJBqQJjiEWGxB4cWB6nVePeza57ofSG8KiAmfNzxGrQX6t9gSXB7WqZ2Rv2wfp6x5uYbCnKmxPG",
  "key25": "3XGpDGkm8cg6LgDwqNJPUL7iZkJFAnc1kCe3p9FKKv8gJTNcD5VM1k8bZxFKdW9eqbpCSJBK5hPAtfjyNcyUiVrv",
  "key26": "2xPUX1KfXWNnK8539YKMNJxJS7KpDr2XPUriZHQu9ZJJseyLHXuFdYpnvoTqrEfPGY4co8t8TQCjnnaSc49stLXX",
  "key27": "5mW4oX4Zo7YQhNNYT3F6JBxkGZNSE3oPrvBKzGCXmMa88S3XfvN4yyk8nUsf2yJ93u8JYHyVEbyySBDGYxhkywvE",
  "key28": "puFx79iVJXJEtcod4JZApe8TezVAqLBiaT5bnXzvJPeso1KsLVDNAL3JWi9AMgDT55sQmsqY5sEeRFwD4nEeWJp",
  "key29": "4qm4QvBAGeXLJyZp7Nqt9TPqm7nwLjH6u1LMDkQbYyR39Lsi2YY5sZe9eGWmMZsdvyntNDB1FkeU1Us23gmaYnZe",
  "key30": "3DoCFezAkjGrbQrGP7yuX525pyLuPm582CrzRUZFBWKnHhxyuaRp48azq83je5yvEs9SMv1KaWBM4fpx4NGx5e7s",
  "key31": "GHiUe25zq11HspjpGduCFpSLwQ91KZsS5zJiDh5S8JxKhEd3dbTGtJB7oDNCTqvwcm3JcPBb93RZ1h6rZG7ERne",
  "key32": "2RM4ykJiVRm3ymd3GjT7ghbMKhcpAoEYKzhgjBuFvoEN4kFPzmaZpK4oX8oYhRVJEdXuUtawNX8rRZNrivbkBdJv",
  "key33": "3HXaBBaGkRhTqqxQ5djf6qmxLkW5hz2t2ms8pXhxSqBm2vYUEgt8pijZEsUKPWjfiR4ivnd8PPvaeavK8htTNGcq",
  "key34": "5P1eravgA7k6QferFVCvZQU2GTyHRAtniEvL24G593potDxbStTZa2BfyykFN3d3ihWNDEtPQKabuDYJuQf4EsH3",
  "key35": "21JhMyvQ34ap8PtfCgr485UchNL7E6URfjxwmrKzbj96PA4Nh2xAksiKKqzi21hxjQq7GD4RJqBEkGWyydSRYAZH",
  "key36": "5vyTF7TrgDJA9JUK6rnEJz7NZT54NXtS5yRtfSLviapgsdavyiTwpcdH2aHrudRdHWAnksohZPvfk6sY5LdyG3oz",
  "key37": "4rjnoRR1XPdrTHcrHMD7gMKHQ3xMTQCY11TqYWaZKUynmQfwytjKAYH2LGLCAkQm9ssxiVmQShbXquUf4k7WEH8z",
  "key38": "5zSo2WvwbbBCVPj274NF8ujk1dkpjF8bq2nu2zAtif1Dt3r6wRpHPLRYHLg4X4ULMYbe69WiTrZ5zcahBrrTbv27"
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
