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
    "3vM1icDUv78CdWT322xnjzyuK5pEBd1XEczRWsgo7NHa8ewBQ986f4ejkcpyRjexKsM993HqERzXEnwd418LW1ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56McsusDa88vSgwotJRz4JKxb58mMYqbboee2Ym6UMuchpFHzW4Ni8Q2ux5PrXZxo6ErVgaazxAtdwtXeyP6tvY3",
  "key1": "4VFofbyCjAJTkjCm5hfCKRh3vSytMPT76Ubq2yBn4hGQsyhQp2uuiLE6Z4gaFtZDRoopS5fU4b6ziwVtywzjxKg9",
  "key2": "42Na9Fh6NvG5CzgZCvU8b7VJuH8VbaefTBpgeVH8DoYUPyVJ41MMGP5RSPovE7vvVv2GB5oHsbT62D4rnKsGXmK1",
  "key3": "43N6AhhuiZerpbwAJNbw69c43XNyPPxJCTWLMEpB4aD34eBu1zR6x8NNHDaw13mQhMHvFWr53z4PgyV6o1WBF3Lh",
  "key4": "zgKWw8TsF7xonsjREcNB7bvt5YdkBkuE1KFEdVoQ7rCJNuWTsyB7EndoHD4Y9XvP4xEGkWQBJ5jGjUih9r3AQgk",
  "key5": "2x9tvNBtUG5aJkHon3cBrajam5oAawTvnXH68YEpWzz4vA5hpmQ1UnbDSjT21SY6pFxEonB15NdntwpSgYXkGtBP",
  "key6": "5dpTHQXa1ZADY94ncJygZNskZxhGVpaPkeaKRqRY2dxQkHhfwgx9WoUjGv6x3N7bjUrs8pT5UYMKtPZHGcMu95cj",
  "key7": "Sr4GQtVc3WPZmeFErMYsjqFcPDUqw9ZofyLJVZqkzMHCNC2aU3gKnSCCyKQzCNMfYKv24EjgsDXhJ1xArknDTV2",
  "key8": "2Nt4186rcEeK4sPphKM8kGBJA1JhYQrpMKoyeAPsEgAuUmQuFhjJeNPEcVZezeWP4uQiPgKevEUuPYn2YRLbQBda",
  "key9": "5zx1NYPz6DN3t3S8yas5AUxThYJPBk5DAE3vyXfzUbrd6gYnMHSbtUUgTQzGvsFHHSiRSzcs48wpfJBNFXaGtzfh",
  "key10": "43TmDAAint9Lti2Ma5iPB1M2wS8WDzEpo6LvekTcErWbQ8ks4W5A5BQp8MQ7kNVAwQhm5hX94HjpgUFbXCt5qWsn",
  "key11": "5UAYthVMp5s4Mnd3Yt71dwNXNkC3J8drATLjpQXfL6yo2NJd1EFjLP8aZjyCNhDa5K8bAi3cJ8wtRDfGvHFbYnn3",
  "key12": "hfrhiXLvzDsPiuPUBCEqGpK19evEo2ogYapM2mDNCdHjy8Zzcy9UfMa6X4WScK28ysoVy8T8cS7nAJyrQMoytEq",
  "key13": "5HaYmzmNH2WiXUyEukPYHRX4KvDCS2sqnZSCasqfu8UAFirS22QGegkUJjimBYz7nrYmdx1krfE3nhTzEKx5ixfj",
  "key14": "5D44dRh4t7e5NCFwWyUea2tyjQPQSi74LvVxXGWEucEuyyVzdfS71Jv6qkk2tRmyJ45iYhLVeSwa4j3Fs7s4XzdZ",
  "key15": "61Aj8UQ12JNv7myXaPHJ6Zu9S7dvuxXHrH7roZRfeHCHHXYyWwf3K6XSVs4UYB74Y7XvUAtDGrAeJgYqkZgeSp4g",
  "key16": "3vTe9iyod2CuBtasXwMj2ZRhVKfNbnfER49rbvqRTjdmt7ctHVrouwAPCHc63HNCUn5qF5kkvvTJurtjLtyhyJgV",
  "key17": "5aJNzEGwV2b7DDhUbWCDTcxGL8EYNrBniDGUDYoCjB33tmbtPwBkwWU9mWdGDPctucMf4j2phKgkAgkK19LbdunB",
  "key18": "2fM7F7GS2XqC4M51XBuf32HRjYpU7eT2gGZfwtzVHcro8zarGjriBsuKQhqxxJYeMqZ2YAQHJD1JjBpCR52DRNR1",
  "key19": "4viVDHoKwbFGzvGkyWLKwdwxq3664qKT7vcWn5WPNvCVdr88Kjy6aNThZcCnsSHNiJMCVtoGqY5JMjvCoXgkZUqf",
  "key20": "4eJE8nKej7RHubSzf1E67PGLHEhc6W2UFgYsRc5WVeLyDj4vZPd8ojmXJWVzDa18xvxcm5p5utsyRW9BWw2qBrTe",
  "key21": "5RTCy2AYiKjr5WvqBw7g5f2mpGAaXB7qou6RjYUKCJytzKQCrrjnPfgcTAcvjoWVCPVEjJ5wxf57NNyPjpASraNM",
  "key22": "kvXiX3WWuNNy6HCNhYRN5eURj2P3C5bnFv4rVZTJKwCQJ5MNTXuunEbP2kp5CMdPA6XGypXyLjPTsWCNP1U79mq",
  "key23": "ZrnDNsMZkJzmmLxbK6auSgvbg4MJ8ZK1mmG8dTk3nB1sepGr7EUQ9ZJanouAR9RSytG5bea2zVEhJJXgDjP2Gao",
  "key24": "5wtBvCSxG6Xqbk4heQu5gieFY6vX9QL5a3Fjpm5oe5159bokViAanPY26u9Q5t7WkzMv9vQYSahDtasSht6Zvsrr",
  "key25": "4MxiQADB8tHmeYXmDcZKRqmZpQ1NAVeeQoEFZNnfoiqT9wPZGkQU8xxAkGioK2hmYxs7ps3spYLXxkKGsTFJ46uN",
  "key26": "4CMxFpqzs7oqDi9K48MJ7gQHzoCNvycsDBJqMpZyxKxg3JqwjpSTe8pXeBropb13yqjdbnmgf43zbvC68dV3JmUg",
  "key27": "3H8DBsvyJUDFDsXisjpQszKzApNc6C5qFRAZgodDpQUcUf1imtvabrEqCYqRxyHsSohHajRrAGwrzc5hcmK8wcom",
  "key28": "AkcNoUj8Fy4sESuuSb6cPDXv5w1zNTSDDR4pXRhLqDCuTmASZttbtPXCzW4W6ukDei9v3Unwkm4hqNNatCMURLS",
  "key29": "5XKmi8Vt1Q5ZcGtu3yrDDCLSanBcx7jQJu6NHXQruysnUmbLShS1r6vrHY7zx4fASoz15s94TANSbiqtER4iv3TP",
  "key30": "2oPZx7LbToBbXYrCHTd16P8jXLBGVtizBHVUmaXqt3uk7bH68cJniayxmCQzv2BiupFLJJAi3SX2VtRZg5Xf3P8G",
  "key31": "G8xfS5QP3GtjyhKRRVQX9Kuy9NTmwb7bu45CnZxRA6am5JoXCoHnXyMhxUR8vkf8ADv82v1gLXQLFZmtErM4Yyk",
  "key32": "uavLdCKN9WKjZwaUnQxn3DYniimHfDFkug353wZiNkbUqhEMbF7qV5WUZwGYmbfxjAZzPwnVkoeeNcpyHM14okX",
  "key33": "4cvpkgL5U3jgRy65Sybc8zn6Bn89vRMcL8F4yeT11NB8v4dbB1UwTP9arkE1sBtWi1QqykhaUuiEPqtVzR6ayjbm"
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
