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
    "dV2imLiGkFpjpmdsbfQe5UF857ZKZFDLcD92cwFcbEmZNMrDx2RV4WJiJ1cJKcNZgsmtkJY8NzLGoEyiyMkhTf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGFZUdg2PUU2sCfbxLowJAYavvBwm7cNY16RVGakR34M9RDD9Jik2Cppyxdcssid75T8dsZVRHpaKcbDK1GJvfd",
  "key1": "121Nc2CntDGUPiUdRytefLESpDQwbbgjt4GB3Y6wiw9kUYhR1knKrFnXpCC2rfr2Wcmx8QqdAmjewdNtXyyzXtmZ",
  "key2": "2eUqGvxGnWso5Y31CGFPtzjHmnv3Wsq8b5ggUH9uiMQhsFG83URJX1eypdce7Qi5YLTnEVLyeHNtgDvWENLTJwbH",
  "key3": "3NLX8yy2qfZUsS9iCcy26k5RywDiVzvx8eWUsfdqkZWUk5wFkmhieT7F9WgAy3D2nBz5jaDHxDbgMgfQiUWHe12e",
  "key4": "9jNVq9nMXnEoUSvgGEKT6eVE6KSx32TXtaYNpgvFHfuWyLQtnBoDG7oEZLno5RpYujLCeK4VdBUYHDBjH3t7h91",
  "key5": "2ABhnYUUm6fTMtbMkK9UdYW8q5e5BupuouUExdLCH65ofD7AtvZewFZt1asNLcXZsSJjHApa5Q4kdjyaWwGbvt4Z",
  "key6": "2GgTQt7A5Kf7PAUhx3yB5q8zy1ebHqBKqaYwUJRppS26BGc7HbpvBb8VUgeHGHohN4JL5HceoVNrRfdQH8v7erD1",
  "key7": "3bZVXxYcZ6skBALLzG5KXPX9dYdwYhZLagcJ6gRZDZSkm9VmTdyF6Bgt4edZmDCFH9WHsVEus6NedqwGKpg9joV4",
  "key8": "3AyxHPK6pSp91QT21LZa1zDbDGBH3fqaqEVXVGXzAcLw6mXDH6KwK629ffTrgQJPoo2tfkkmeqZCsV5U7TKeNhe7",
  "key9": "5fp4h68v9kiBKVSTuE1bvcK2JPRdTZ1GAFPRErCM19REgJLauBdc4AXezgm8gzU4jizPhgsuEU6qVqA5aYrSjZX3",
  "key10": "4DVKxpQEaCViPkuCiPoc3ZZi9vs74BbzLPLBhDVWE75UL6eaoTrjB4UBjAdz9Ugt1TSPbGG6CoYKRZiZthftKVfJ",
  "key11": "3o1W6h4gG1HXhez9JE8uUEwmVJV7iCeXmqbjXsQKJw4ZEkUGNKuraRua6ZxKJZ84KXnXLEngJvpb79D3mgLPniQ2",
  "key12": "4gmWiuZtWbdHGf7kwmKv351myqUVZ9LMhuow6zxSKTLh4BmNp5DUaSoBuGgRWCiNAUTiJTm5fsRtte6NtUDejc7A",
  "key13": "iVHAY2dgSr4fQUWANwTPspm2kzuGnBPgZhfx7DmdH3QT4kyfeheiZdEnahYwn934Ri5PgVM6XKTDQrtBNUYUhho",
  "key14": "4zxF3ELk69Rands4QC9tu4moUth5xFfbX42jR9W1RJ1kN34KoADJYdgd7x1zWhXqkaba1gdM3iqebcjQE9FvDvrF",
  "key15": "24kTScuaxZ3gyzHe9t3LVT9kabKY1Fk35dxJWiUZgb2CnqrbTiFqVH7wN7mnnZ7hDvzwf2f1WyYK2hqV4fUotqNV",
  "key16": "xo85HYG9TYrGX34t6TzkGDN9CkKqu5LfivGUGJbYDUJnS8zPmpx1QEK1n95ieKh3hpmePdDJ3oSCV4oFb5yRixd",
  "key17": "2eUEGDYYhgWyBc7PGgWEkpgzEkm8MBWA8GnYSz7petJKf9FPxJ9JNG3Fw3Ut5aNEkx74fY2y9qek1cpx4QdZfonc",
  "key18": "2LmR45bnoLJBt5h4dXM8MoSCGG3x7d9jbK3qqKiKGbZHNQWfUo4uzN987E9Znb8yRs466Htp7gomgbYpCFLR2XYa",
  "key19": "5GqoDMz4eJrbXWNq2bvYcPswWXmvsM5CmRnTSqgHaZfgfG8GbjDq4L5KbhGGHudDfYfwB4o954TxXCs3Qy4Xf5sZ",
  "key20": "3G5jZsg3dsRiDd96W6x4aaP8ACetXc9KAZH4YszEL2e6aZ4sxn36SJ3EBCiSu9WWjG9gZ7mp5UNpzEyMAUw6HpQZ",
  "key21": "3vTLm1d5VnAEjzaqonAd5Gt1QfDVcAXpA1FDcbMGgZPwjGpcnQ1w8VVG9ZrpWtB5Ev4egkxw5a5Hh1zDnsAC3SLq",
  "key22": "4jyVYsnqCAEBSbg3LaVRHsDHgke9PHdxfHaX3nyoncDj9vCq4d4SSpUeDv5cWUBz3dqQs6piCMjJwWe91AJsGuu2",
  "key23": "a1uYBfgPZWrCsqNamHz2vXkvsByL1gyuPjCQP2rVmbAkVpSdjNKxgxBbj7BQPZ3ctiK1mk9uyFURwuuDSKmkDdP",
  "key24": "5qE9NXBQroWC3GqEVHZVvhAwxeXrEYUgnGvw4Ev9zyir7H8GycnTrzTPm5orcZf1gzrKfPB9iJfBQUPz9zagC3so",
  "key25": "2ndJ64jCKZv9ovxDa4qmcfgMmsxpSen2UuGy23UhbM7APpH5yE8C7q32RYRZeQs9wY4HZSdwND56EANBhhyKp44E",
  "key26": "46vAhfSf1npS7zevwN4TEVMsEw2XNVziQ8rBFrH2kgxSq85iJeWdijA3gqrp3yXR5eqkcNAPNk9ieWwELcWwpFMq"
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
