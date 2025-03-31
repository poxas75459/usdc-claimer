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
    "24J7x3vwGR2fGCmFVWRsf6svcY2z2egEj2kcyrqH3jMfEHgapSAW7z4uhoVnXicH9mtED7SSDP5pKHNuXn8YLSib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaB6psYQSTh78d8pDpa7KZP8iSBeaBAraS8x9TZ4xVw2bcFhBCDKQuxCKhwrsZaqYnCdve6JDythkdvvP7GEapc",
  "key1": "KDGAFBRDDgzgBQCDWKMNy3CM1gNhmvGkyKZj9MvLyYr8n5hb6u1T3pPdgCkF5DG7z3A3isqbWmmi28ufE18XDvn",
  "key2": "BkXebWJdWZUzrhKsjFd9PAwhHBrVwXbcddipNDJywSVGkjTe6LAqk7CuTMtpSiDfK8vn4nXb9K4MrcyacboeUUy",
  "key3": "61me1hvPMqcNiiLopb28VDaNpDeK6zDYKCugsV9ZE8ac7BLokrtyKWS5rqPEMTHjEGNFRhaPyh3iotWtLbta1jRQ",
  "key4": "2ogpcKXvSyw5P5QpHskRArZoppUSSUo4rzCnmWamHadxPpe6bYAYPcLNmLgLT9vp32NUQkSiDeczFa7z3MWRphvB",
  "key5": "Vq4hYS86G1MJf4r2kdv5A7ipd6GHxVEqJf8nnnZKGs5rZQNDuqj4iSeaZCNMKbXRjJPBuHoNMv6CiFjCK7SgoRD",
  "key6": "37odbsdBFLqVis8W6rbKwQzWUD2mdN83XFMQhFDcxLqhiday7AsHda4nYVbi2kJwBrR4Jk863mZ8BaRkX5s11SZp",
  "key7": "3DHZegwLPy2BWjGmU5jD7PeY5Dd4dURWvQD9fA6oTgiLBPKjFRPVPPhvNmnU6TtiZ1ougJVpRDCppyeDWwejEVD9",
  "key8": "5zUyDWo9E1RKvCQ5TyKaeJJ11LdmAor7rDeWBoFytwWGbNCvoe2BGqa9BW2ntfZDhTuvJspXQpYQFe1rTKmi4TLr",
  "key9": "4ew57LGVFgQKyFNECoEnghGKTu8mJm9DmVic8fXzrFU5Uq6HYbBEGAS8sJaLxQCST7FL34esVy2ZRUKw6NS8ghw2",
  "key10": "2CM2vhoSYxaen81JhU1mcNbEYf4jEfMXUZoiMHVXTvd9vooSaEikt3sRsgkFQgMQs5YbVvhmFbScbFDVap3jhYNE",
  "key11": "4V6PPSSTrQ71T22D1fNZmnbQ2R7nL3ePVQHisT4uZgnzjRWC6jzCK2d9YJRPTt3Ef5YRwheGL3ju2qZdCWa8ddBG",
  "key12": "4v6nrxB4SvjY6TAHJNhv346EPKGHXjSZ6ktrzU4kxZUNpGjjsawSU7YzSAW43L8e2fbiaDSkEJXU5CRshx1zqtcq",
  "key13": "2iuihWqDnx76d4tnJ4DmkSRSr7kv2wpUrZZhxSz5r6wCZZvTvBSFGUQgGcdMN85LVu8UcEb88KdX5YfJZ52pEamR",
  "key14": "2xKA6ZYEf3Xk7zGs4whTxZfJYL9U92yvsRUKzftkSmyFhU7PYeJoD9HqoFwz6TjEzgoN8cHvxgrou714Cuzrp3uT",
  "key15": "3A89o79HAcGzp87FauQyrDqE3wNkMnYMF2GL9V4Z17k4PU1xZk41QGKqHcc9PLkaWQ8TDoTyLxn5TChzwLbETi7J",
  "key16": "5G3YSxoiM9otxcELDwRzPmjJv3eXBEzobUikL5UxGmF1dotZXGaWfXKMgFRw297c4z4ymTEgU93D8xDWKhZJEE3Z",
  "key17": "3z1PiirfFzeAe3B95ReNfJ9zCxFCVAiYLhJpr6qVffVcmozUhq2DRCwMiYp9FdX3fhgePx8MvNgjEpvJ2ovcqo29",
  "key18": "4VtvzbNDTxZGg7qM5ddFvqWg1NFYiehBJEBgE5geaZqPjJQog3GuduEj17DxRy3f6E6gTkYSit6T6Kfzj9oYAJRc",
  "key19": "5CS3DSFVKvQ1Hb9JCjf4JMX91gZaaAoukENRxDFVkq4HN4XPLmRDQTSrwhXH5wEyGcgZ4gUvMjbnvjyst39ymRgZ",
  "key20": "5HmqhyoKcEWdPTA8UussFUqYxFVnKrKWik6q54NY1bt3gRKadw9tr21wv5N3YLSjSmz48Re6WoRHT65zwYmtUQfN",
  "key21": "zXTCWTzUEUMCX2HC9szBAJ2cs7eVFuhPS8QUTpJqyNGoXxhTyaQwvt16W3EaUvhHXTSySZnGBJScbYNNjzDf3qk",
  "key22": "215GYRWaeRJAZq8iuZy9JTVgsfmJBe23a5RzkTczN6AWEYbi8Jzp81DKXuiZSPU86FiSrmwbzs8u18c2JwCNJDcZ",
  "key23": "2Q1E9G9B5LESLfTwBxkXzfqX2bBLaYvEJc4swsPwV2tN9aCs5CxJzZewkuDBLBBJNTCkmrtbgPpg44ndit2bQY3g",
  "key24": "swDScXFW27pAD4aJGBUF4Lb2x7CaHuqq4FjrSprHrJNxwruLNqZu74vEjH3yYC2YP8zUYLgesLTLm6Vm16C8vmY",
  "key25": "4rsjnEX3jj8MZ1TQ8PCwTfxZH9sN9JaFYxW1puVrsYANcLMsHpvPGHdZaofWH9qYJqcVsaTnrbJiwgxxMY3dvaBu"
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
