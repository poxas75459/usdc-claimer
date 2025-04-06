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
    "4xUkTLSbmS7A4tLcmAtEsBa8jYGEjeiYPp2Yu3gHUKAF1aFhbkZrGu3YqYEbwoKoVtaSAmkydtBFtqp9cfU2SQqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKyppNoUkRaRThsWkN2VFa5ktxjXwAEAEBaS8aDzKu3pzLfHtQu7HKfpeo55xjZYYEABrMMvYA7fZVN499SWG17",
  "key1": "32ibV1SP3cQi1ZbqD8PEAz8ZZzrdj2MU3ditkNsgnze88UB7CJsVcaDftYGnLJ4n3y7jjXUePz7T97tYUqn2G3fg",
  "key2": "3bK1xQjZjx1MqcxYb2UXXMrdKxjZ5MGXeVADBjc7mvKPpzPDiZsCeZoCzwya2KWTDFvKxX2XJ71XTKPcfrsjeEBG",
  "key3": "ofXsrBxLgSGCUzanNMQJ738aBM4PfhCTbpSvNTVaAg2Gt1diYTf5jpzoqQekhoeXbie5Z4M76r2V6v7NaD7ek4M",
  "key4": "263hitpqhXNCmA9tDsAUywTqoCQveJFedByS7wr9iDFwTabtv3rsDKVSnWMzZCPStY8GVQfDPsDeDBxZyCx4rRRm",
  "key5": "2gzBQQHg7MgogWvXe416U5vnThmsHXHJTrnSii75ZYnXorcsqEnGEe4a3aUcoSvv9EtDMfFUm4mh84nnn3zc7ntu",
  "key6": "3UnhaR8Vwssg5TnUmwjKJQg47UJKbHFgAkWVpo7XqRJ6HE9bDpDoXNiHEUxhFoeTvon6wDbbmgNmeN9CYtH53pDB",
  "key7": "4vUcs6FqyUZF1pg6ztJJTgztzSL1GDjFyvL6fNunzkRLNJCsierC2JiFwBZD5vzbaPLsFDpzhA5mJhgQ61w749wx",
  "key8": "3GKueYBTEHm6V6uhT9uzb5JRxWsbcAMtMgvs4dCFfZunpQ2Mae9PPajXZFJLNHaySpY1g7Un8po5J34aCMX4ELos",
  "key9": "22CUoSSpWFc1UYWEHQQ3BFH4TixBhihU8CwKyQoTJgH8sAcGEETD4UEKyAwZvr6aZtURWcep1FeWNzqLzSkEFSNa",
  "key10": "3MSqQqMYoYE4NzKzevpVzob4wfxcotHNhHmRCz5K33EYZ7VGVXNUyG3MYHKWoQK3gbJNSNVdn12rr9mkth7sDRrb",
  "key11": "2kL3uTyvc7NrjVCHwCGZQ9QJUSEvFvWtX46mn4QYexazHme93i1FaZCsg49Zxv5RUk474P8xe5JBsR4dTkHeDkQo",
  "key12": "VLXk7VYAm9rMVdLT16SKPHsNjwASzmisvxt58K5Pp2yRPYuFt2yvJkPx5TsNbpNeT7byeYdcfzQ6Lb1w7wAcVA6",
  "key13": "42Cz8fyet4WyYTUJaEL6wEfFB57BvNENj19xfSGdPbpXyBwZLHL8CoFcfK8aybyw5kmksrWuJ7og4itAtnHxBTcu",
  "key14": "3x1p9GKBWxpp2QiHbbXJnJZ7r2eK9knByZGAEYBRUpk4dv1tgUGDBpmodKqVfQhB7KJTJbmo4pHD3ZPaHBZgq8Pe",
  "key15": "2FhKxDoYTvextnx8AvuHanmwwoEA82BY4a2b126qDeiTen8bwkFC8eCbnoAcMYS9Z42gbTsMzXrntYQ3qWXAGNoM",
  "key16": "3dYC8RaRRftsbd7DG1hK3rhCc2x7PxihzBwnXpJyewMTUCu9JQDPVNtBNacN5oE1yyzsgRXfBgKDH1kZrv8TSGd9",
  "key17": "3DV3H2azQed9wTNYeJnM7t2TxGYgrTWBbAYz5ejfHUUk6P4cQMhTgFhZs5P9DS1T4bza4TTZwMeZRNpLsc5G5ckG",
  "key18": "3JXJgfeKmf1WuyL465jXTPXrwkMLZ2MueNm76Lp7Gi1fKzt7GHnFZWQZr17aCEgy29g1gT2xwbJddKUa1DWHDNRa",
  "key19": "4PSmKxJvHVwh5uBgC7zWdYKoSS1j8z63RLqgSgt8RscbM4dQ2B1V6jhFi7TLbxf5fFAv2SBihCPVdiwmJ1rPzxRE",
  "key20": "5jsLnmBXTxJfazzHa9abBXLnHtQTk2yaj1hJZ3VBHCwkdJc7sRo3J12X3U5stRrj8PiAZAZCWg4nkpWcV7QdcYMy",
  "key21": "21PNuzFRstwn8uii9u72DpXXtbMDBt1iuG7KGXNdPwDjLCoYE9H37cA8MZdtupS88dEcsyZVnLDYZ5G7SZ7efT59",
  "key22": "3ixgSz2cv3wkqMPDH6omNDNVbWGJHkWKgThzCF5uRNsVtKjL4aeF4Usqh2gk8GwQFopdmr9Gh4YwbNV84UoMXPED",
  "key23": "5VX4t18yYg24qTHT48rUJVTC9zhQQ2QxthVdRRRRtZsqZitNk4yMeMR1i78J38yCyp6rsVfjFkjNukom7ZvKBDjp",
  "key24": "4LW3CsHQ98KBkyFdYvs7piakw5ihRpbSvQXKLDgjEvfcCP2a8VC164KghyAnAyneZ5PnsfKy6Nvn4TireWn4EQA8",
  "key25": "67M13X52KJatAsNJCJiWNjh8YjdPFShUrSp8QeK7u684QEcfX8nhp9rkTNDh5udf1sePD5jNWX5pmBiNFHKwoVBU",
  "key26": "345h3tzziPrkykcM7TyeKN6Tn34vBwvqQDM5RBFhnmAJ3957pYVxE8F3AejZpQks8cSWTyZ5spByBEsCdTGRSHA6",
  "key27": "4bdZ3DkU6bqiaMcewETc9Xv8ixQsADWNGrhrFGMZvrNGBTtLc1iw3NNSwDsHmTsSom6gMHgy5aZrUhqpXVcdDzLN",
  "key28": "3Na4wvhVqML7RDpofQLiQUvHX8RK59a8EvKMz1J46AcUYAzFt7xJaZ7cFQNtTWgk7ijM9UVGpMFyn5thDS2YAwX8",
  "key29": "3soGtwG7m5u2FFiuW6iDr14ZtYt6RkH7rHgEKLw6w847onaiRp5Bs5m75FjaSHP1YgcT6r8WcnxAarpkXUDMMcwC",
  "key30": "66QUbRQ4etXgDef6reihXh6sxjuWdyD9vdm7WwXsmrB65GWq3nSBkJXs7wZgKVQxwZixBu27kgemDkAsaULtj6hV"
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
