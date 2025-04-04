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
    "3QLvspmr7SxsVUT1s8jzJYEXBaA1BdkXQj6q3dJmcSZGch23uLZyYYJm6Fij2ncPqc839MbGXZK6PnJkwumQ8EbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7DEk9z1k7Gc6C69nzcguMgPZpxJbzzYxSbi24WeF42eoYyBp6MpAM8aApxjLqJKBdLKqY6ihFULnoQM8vHAKij",
  "key1": "4Uk4Shs2gjgbxjSaWQ7557Bz6jb8ELWtbEuh5ojtXwUyvbzpscKjRuPyT8g9Uc2qUtBnhy5rVoT8ypS7zTXzFKx4",
  "key2": "3kxVsEWNA3yZBsUSQtRPdrXmSiWVCrsAxqGHwmXohcVFptHme3Ycigzrck2VEpf8uogAvU2Snybo6o18pLLfVWjU",
  "key3": "2eKCRsREGbBzT3UcXjEuvtKGsqeu2274u7xLrebWFq87aTi3hewyU9NiGtMy4FchfssVPGTnZGzd1sXB5nG9zXwm",
  "key4": "3GyQ82m89i3XWvctVf5qvhiC4GjvnMaEAvTsmeeToSyhbnu1TQjrE4E9jbPAqeU1P6KpJZh8G2GPdVFUGPgRvoaq",
  "key5": "2CfVfEMDwLY7QCcQqFvcuGNDoBjxDYUfngTpQsQzm8YbtuzDAX2AkrU6tCyZd7mnRny4oruLZFUU5ZptqxqvgznC",
  "key6": "5to8X7oiEcPwMpMEvs8HoD18FS7qXTufGxKR75EbPzWyFgBr5buUUeZisdZoSpnSD8YqR8EG5fe6enmnaYnu3t6C",
  "key7": "43Q218bsWnHsriffGD37PTkfUCpHd2KWiFu6xAcnAMaHFAC3kSp1GvrWh9CfyceKyjegesYzjDgH3Y9BQuxgPZ1Y",
  "key8": "2af61StvK9xa2qJJWa4iD7gLMjG9wGPDNv9wcS7DBL16m8U4HSvG4nHHnupaf6bt4bejgz1Q7ojKmRidgjnj7P7y",
  "key9": "4joJpF4EBsRXuR5r3h5YYaT3CvyXvPRRw3eaLnS9cB3DoEHbtSpv2KhV5JntLVJeW1vwyJPrwaXAjMsSNKzu5MTZ",
  "key10": "2uG4W4WUUFpz4iZxM6a5S43FR6pcAaCgtYZiPei9oXRw933m1aCtuNXardHiRwWsFYKsuYG8j5cySkmg2Q1HznNt",
  "key11": "EeAYpMvRWpznPkKfLeToyfwLuwK4qKqAkUC4NjK5GqZ92GnerP8ZNkCPdpg3jPK3gG4rGC6PwT7x93pwyGhYfKu",
  "key12": "3b8S92Yu1aYuChbi6VceurdcZsZqLhp3b9zoqqb6wyyQNjDQtjQj4PkxH2oaAzV2kjDLE921edXTuq8mhZFDvEXa",
  "key13": "5gwy4LMwhbbTjV97cYiJRxgrKh1xF1M9xb1EodZB5DhP27hAhAgoJLu8MboDHY4fyHsRgghmcyARBAjurxKEkhUu",
  "key14": "4LjS3UP6XuTkDvazkBpn8cSHKXUhUq1QyMohhgY98MrvjbWqTYMEz72kTfhpBDcuCMX8KMNnjwkFq8evdzMs9PgY",
  "key15": "2rFo9CtZaWWk4he2JKZX51qx6241zRZVbqi6gx3BAEdRyez5ebwtbx3ZPgmRnUZnpWeAkJWePL26cqQmAb3mJgKp",
  "key16": "3ENqscjj65qvzNj2FgvqabR9NrAJLhksij5mHWTBEvbFDsoxHeAugffJeVQQS5ZssbDDkdfmh3sQ4VJc3JSBMJSD",
  "key17": "g49C8ZVuKJsLbxe927g6pFBMFwu5AiJeFWMLmj3JRBieDnJ7L55KRkBPwQCiTsFAZwzVtRJk3CBWo7Qiq4NQC6Q",
  "key18": "npsYxXcbB8tvwkPTSGZ813EZganHzqMZNwPLZQZX1dekFnBqBQk1UvLoUMVN9oK7NcB5BtieYz26aYkCN7sy7yN",
  "key19": "4qfa7PFyNDkR3c6wpcss48uqvKGHM3zWvjojCFgyi1Qb84LQDiWfGjdLMC7hkUFTqmX1Gi9VCxd8g3pcYd3ptYfi",
  "key20": "46kdju8Qch1Mx7igd7DCAJwDYr6XgmxY8qJrmqpPEG5qLggJbjuawYfd2RQPjU2uesrL7dXnmQe5AiJE2i65DoQ6",
  "key21": "3H1FZWUyidXnCVDP6CeTqrgKpbMWsheDte1i7mQdvt4seSrjPtKxiCyh5MWcsHTRJvYD8LpD7nY15fqf3RYU3aPQ",
  "key22": "5qDFkmnw5PG3mmoTqEFMX7PytYFteD9qF8qQ4D9RMwMzZknBdDoiFuhCe97DCUcBP3YRWLZvgftMzvkzX5gmvUmy",
  "key23": "3ZfTCX6ur3Ce4FF5JoYb6SMvDLzsDqA39wX5d5P3ckhp1zy7CAWy7PDanV9PpiNW12M2gvj1A6nZTdnuyDXn42cf",
  "key24": "5JEMwRx5NckhAHcNBLahdK8SZZtoS9Ac6ZfXkYaXfZ13BEBmxtCzQGdAsFy2gqqw7UChykyUUBepuf6JtcfRngje",
  "key25": "2pGq8mpKKtfJY1Zg4fvizJFqmDFjNkTnnpbjxKX7guhRFQBxg3domWru9TYtFLkChcBr5MEvKfjNx1vyHDBghqNK",
  "key26": "3gguGuGXcjjUHiVYAW8FNP7RmrB66a7AqNq7jRr1CtueQv6vYEpQCS4GS5TvxdUbEc5kFk6HxnTmvU28iFcsp6h1",
  "key27": "42DfYfYz45DTg9YSzNYwJAjz3gG828VwSYZ42aqeKvJeqSh7ExwHZCNUcaBsqoAAPoTQj3hhtiD21t1rSpEz4i53",
  "key28": "i7SdrrdcEiDsokF1w2eLEg1iReWXxRez8sbXtbjpTNHbTEtK4Fhh6US8TfSDDZxyLc4iuzu3duR32GJELmoJ7zm",
  "key29": "2hdu3HukVQLFvYzeAppCnihL1Rk1XZomG6E3w1usBk4wk4iZZHxLiWVEBfiHVdhafG2wS3gJ1LHA7yz7JgmnCpSJ",
  "key30": "27UzXTEypBCn4fgpqpnnsjx29dXuSJT1JQHWSRWrapeGn2RH27Zfy3vLf9wkpchZvtKxKaWBEAdyc6GyiUrNBLAz",
  "key31": "4vNC9chy7pywo9qs76JvpKzychHRBpX6ARBP6tVtWqrkrnau2wR7xbmkmmWsWzor3groeRP83qyQMXdUn6af73nh",
  "key32": "49X1DUxMb2QYoJgf7ckbwV5zbxYje1PpiFZWjUzGRPrHVmUz5pC6pcLAzjFhgyiTEcgtGbpK6sdvQHqgofNGQfwS"
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
