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
    "5pW7dgJidX3ndKkqDgziJ6GAY9b1NGUaSV9xzbWyC9R2L2wix3bik6ae26a9JwC1xPLZnctkjNxSPYW9zYLxaeSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v7Lk7jqyv4W2qGAvTzZwMhi4ZYNY9ETpbtiLi1uqf2XeLKjMbhNbvtVUYbgyS4KaGjpvknfBityBbFGaVoLuJKe",
  "key1": "4ezE3LnftpE7uNx5tLhzu6KzH6MbFftgfJstfrE7GbDTohRCDfzgbndBRDwMg21coEB9LKaAADp4xcGngv63hpjF",
  "key2": "4W37JuMqLhnLZgyHCspoira2oyxeeasuaXc7aRfKwumPN4YMp9kkmmB4pdrUx2J9CyJGX1JWtXRKstNUkessqHM1",
  "key3": "4Jc7tDZnAa6Do2x1JK66bpHRJFtrFcLBAC7Exa4vVNjx6i3LdiEhwExmtNP1ZvJcuCzBzWEzSssUKvnLLSmxxuBd",
  "key4": "RcC5mM5hAy4UxxLt17M4qoDmZrTrcFL2n1fg7QNDxFdnDD2jMU2DCsTaVCDnsWNFT5FcguPmEQTQcjMNkPTdUsP",
  "key5": "4erVehkbFCejSkucHGN6MF7FbkArQVW68SSpJAzyFMHc33Qv2seMVtKxB3Z5iMuUgUA9UYCrFcQmNNj8DcJ4c98",
  "key6": "2Nq3282RV1t817HktfiaaeYmhp2XbrcbXvZaMymhwnUqGjbjd4UtDSA4ZomG6YZrdkcRYEa3HBunHN616wT2cR3B",
  "key7": "nxVe85nHZXTuUpTXUSiMitg3roLAMah1q3NNELiCrHVbgd9A7HjhKMEgzrSiv9mXvFogDriPwMEwzZgzMu6AjU5",
  "key8": "66gRw2iAFGDSTJgoHzx9rmAJdLEqpFFdNk7LS8fVquLAsHdbDxcXzJaQ8reez1SFVRrbJ1theHsbSuQMQw3zmwLX",
  "key9": "2RrFPKsSGbSMFLAEpUyzHGUtaNw8g3JorPh7ZcpBVAgT7ffaS21VEnNyq6kSP9PECnHLPB57aWnrsPGkCKTKxNun",
  "key10": "4vYS9tcjC2s2mECqc3vK3GjwuNpME5oMThtZ5RA9PQyc1hAyw5hNJi69SJoZUgL49A9CNEmJxs9GGxwmrQnxBA5N",
  "key11": "4cnS7sCSXzxpAxG7KUi2GUtT5krZLkodm9VaPKENyhATK9bkZMsRuPhJWAM34bxwSdvNsqrbpn5HtbqVSRcXNNHC",
  "key12": "3xLyvWdh6wkY6yaCzMsuyVut5hM1nNj7gJkPXtRo5947tm5Kxj2mz8y1sVgvye5D1ZCiNyNQvB5QDpPqu8inSgte",
  "key13": "aRWfq6nwDJLgiZvGGEjq4n3hJk6CquD6oAafwPeEdsmFkv2iguotvC6BtpXpaBJPxi5XVGfuqapFN8QofWtgFFN",
  "key14": "4v2J2WrBpuULZg1kZ9Czg262doUtWTn4JD4wBStD5UHUTGsB8yQ6YmX74AxMjzcUu8Fhyz6Zq5fYMrfZw57fP62S",
  "key15": "4XMqaH5TpGyWEJVxEtiPFA3b1LJVDY9UmhMZe3G7QcKNVzX65PrsFqTUoagcEUyTJBeYJ9jhgjYdh3FFSafN4gnT",
  "key16": "2KNCoCvjiLM8o4BHwBhVrUYpEj9nk1YGvJ3XKBYjGWn8xaQHQ812x61q8zaay3UyRP6tXK9XJwvLwJQMjsMEE3zJ",
  "key17": "3FYhjvqzQwCmPFDBsMWjzBpZ9c16P7G6arRLfqo2bcBfAjKVvtqgHry3652gKDKurMqRqzzDFPbgcpTibZhtYXno",
  "key18": "4Yq1BGqN12CP6mJXqCqUdNKpAxNSGXdEEEaz4XGBWipNGHGciZrmRCCJs7AHwLkCXoGpKAv2nuoS1wezjQwBM4Lr",
  "key19": "vtMX7i27VLjTAXTRorKWDor4ocMiwYc6dZk67GoiXXYYH3kJf1Tcv81PRVDXagWWLGrCbkbNrhkAg1Feu8vto85",
  "key20": "4hKbhPs5hMGmatbwqVk2DoLoyPNbSFMmXSdhJgDLpz1khPWjwidrVfT7sL28hrqaHSqdA364FT26ouRyKuS4ifxg",
  "key21": "5bYQXQYktFpZL7vpqVJYbZBzZhmGs9CJVRWzKrgjEggL3ozPga7Zk5jKF1LmnchkJ1G2RKrE7kFruhYbVW46ZeKL",
  "key22": "4rgfAdJPrzQ6QCbvEwFGnTudTCyszxW4sUgUCMpJKF7n9rLfULX7H5EMAD7TqcX73mPdemGQcn3L9MkyWga8nbKz",
  "key23": "32v3YTEo57rZc888XtaYHAfXGJhFmJPPB5Tub5qfEnKsRLYATdhdjLwhsXeMi9EniUCykoK5YRi7nc2dArM3KVGj",
  "key24": "4JKdLWPrKNgnHrbLp4RfAPLNw4N27GaEchLj9xzXy27MRwpx5bt9LGmoXCf8fP8XEzVcoot74EDTrpodqHfLg13J",
  "key25": "3kZ65WPZCjscJtxytzXUSjNficxX7jcfWrpNpA6SNekUoCjG1FDWmUP6cFbR7TT1ZCsNHYepQ6jkeZT5dFyNxQ7q",
  "key26": "3Go41jSuKZQ8iu9KM6fkwPEQG23ctkWsW5d2jhp4LAUyE1rkB6QuTuLWJhSDNgZk2eDhCuYzmu5P4MPBpxJP1F6r",
  "key27": "2g7W7WYCQyu17ysbMCioStptyhkmvn4gDBFcvN5LrgvjaKED62FWUdHBvRgeGaVMbnjyh8b2w3SeehAwJARhun6W",
  "key28": "32M8b7Kf9JoA5SQ22W2isNP7AYXdB6fcqLRdKKfLU87EozwGR6Bi8iRvSgL38D5vkJa8PruSpdP93HrUMP8xhbA1",
  "key29": "3d8jM8UjWwzbWeQtMLLt6qwT6H31sAUtbSYnMWXbF54ysAvhMnf3AfiRfmEFQmLekms9R9oNB6uCqiMs2EQ6EuZq",
  "key30": "2oABUk2gHE9RnAxyM8ErhDEsemEYLMfFPvaMEWEgSr5xZPdfL7iaKiFMQXT8nv664ygKXGA5vhCHEuTKvaKXZLFq",
  "key31": "Tm5R8F3ARKeabLqjGdgaGNQocEGXRrguwuTb7V9EaK8oqcMpYW6JKQq3HJ6qx8GcQf9Ru2c98YJ4gXyQ1Fn8KoU",
  "key32": "462DBsbjcWYcCag2D1nG2ZsAkxd35T9RABiCwtFXSoW1dC143DLTdppxwGXCgrPbTzQ9MFyy8hhuHZvwfbBd2HNg",
  "key33": "5iRUz67PL5JfJheNCH5qYnzj9qFuJUUZRn9LHu1siBFJLka29vc4vaaPyh5sDaFoYmrcqRmp7hPGHrtWE5sPY6uQ",
  "key34": "51YmQYsrGzEjxkmjE5EwvigdhVudLarQ2KvbrayujqKezdjyHZn3KYN67rDWUqQUDc55cH5i8j9wC18a9JAyqpqK"
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
