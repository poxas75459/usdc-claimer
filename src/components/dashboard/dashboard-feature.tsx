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
    "56Y5ZWFEnXeLjHygDmXS9fu6fVEKoHXXczGxy47orHvTVAwRvUh4ejz9y7pxpbLtEtNf73qRyLanb5tEzxW53u6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhhN7dmGV5waRwSC6LKKWsJut4sQsVokq4y9EjhuvXrJWaFGgPkBDo4cVxjEj6i6u56Gp9WkE1prCU9XMaJA3a4",
  "key1": "3MedWZGesRvJ52eP3vJbFj595vHXJAei9PeZpWSyAxmZQWVtFGfjeqn2EGVzYbTJApPrJB1gRrHnXXTWtxUs336F",
  "key2": "4H9SQewtiPzEVkbmpXchxhZF7arHsRnvCRpEPV9y1dKJHrXJHub8ZYfNSgv7UFeXv959pMuZRtagiAjuu1hnWef9",
  "key3": "2CZsauz7ujetRDAwsSDodUiQXYHoZjjbWMhmq4uWZLkXjMSps2E7pGNF7KLHdeysK5Ydpxpoi3MQUddkKCgnkjca",
  "key4": "5utDyemZ4CqX6WA9auK3aaH9eq9PyqQTsis1K4LdUbmyBbyjR9gZC7HwQW3dtLLacGX5Qc24QhTEkCtKgczrqmN8",
  "key5": "59XmURzs393sq4qpd7FpwzkKYY2fQNDEzoTCNNbj6iiQTQDdHf44CqVtoVs1rN5zFVe4g1JFm35AmgauVpX8aooV",
  "key6": "2iv4XfnQvP3vSXihDKT9NQfzQ2GBbCagE8gvUMUFTHTweS3BatCF9aGzFrrq9TSivAEd1cSKSegdBVwcW6dmHpvi",
  "key7": "2tHd5zqqSSy4RRuW5KbJWjshzJCxTanbHfZnpqXNBJpXD42W8WAXhm1gyi1qBKqr7DsUQUST3tjsNhaciAWiPtN6",
  "key8": "2b3KbQpyYFZTvHFHgXeUquN1qX4BY8RayN8mzbkcCxKAt6UXwSyWqNhe5xtPtRMkkV3qdkqnBxL8H2x2fhWqpPVT",
  "key9": "4LGtpJRuP1y3YP8LXTw1WwVpneFBjnSqNgjcr7xB91utz8nLXQipBjYWYWpuuuGm6TYfD59Ljb7hJ2jWv8ZzFTfk",
  "key10": "YDzVCAEydVDqAmFqeXTARJLyajEafuDAnTasocoqSs89pMjBwdGieh6cpLngqy38E9abspqWRyRmJCrDqx695Qg",
  "key11": "5r6eB3BiRuyzAy7G2inUfDrZMGzkMWyosnW6QQNCsL1QQ7QXzSoD859Uti36c2j5Z3c3gFB3VUCdvckE6RYyoTEo",
  "key12": "4VCRUowpLgAGHy7EkWzB5TG9Kmndh8BriLekTpAMtoBwFRxWxWPv1C2MkaoVTqkkDZCBtSDBGm6iZxPLJj6XL3Et",
  "key13": "5qViBpZdckKYz4hzHEVFrx1jygPvrodC3ckYmuDWnvTh7QkCbXKf4mt5VBgBrZcQjaV39cE7n8vKbFM3CzA6WdND",
  "key14": "3Tg3xvCRPCdbvXaDcMMNu7jjZZXMTYyWaaTVjg1a6ztPz8afrsAe1nBWjewmJSLkaMrXUtG9YAMcpNjhNLjuQHpi",
  "key15": "4K9YfsAEMn1y7KSxqqUdyYffUTdTWrPhuVpmU28AdGh5v6cBEw2zBsWTNt55tnP4Zp7gu2Kz6HxRexM66H9GmVM7",
  "key16": "2tQtGQjG1fMrwYffSZ8e34Tgjf6EwzPZheBSoK98ECXwE9xnp7Rzow2YXVPaXRfP1HRciqVHGW5iMP8bTiKmiuB5",
  "key17": "22yjG7jXJiBfdJ2uGHma9zqeNX5ht4iyUWw82kZboMzxXe8as1ejy23JSGDTLyU57XQjPkEcEdHtZJs1WRdWu1zF",
  "key18": "eEsuuVKSPF2ya2H37bCa4JDHfy13ggajPMXegGYDMedN6HNFmv61P9WAvnYdap6YFdfJnfwchPon11NQmJngtmw",
  "key19": "rD42GKWciLesG5Mixv54i7Gt6vqBFSDMat65Vo5GHrJQkiXrQf4MBMracch9hbPaWVFZha1rGmrBTiqLzHGQoUK",
  "key20": "56dXG4To8G1hSrwuXmfkHhfpGQoJgg9M57ReWPwpQ66ZVnLBBUtfSMm7y1vE9qNGFRtF3iBjYLdPUwdMJu5nDPnA",
  "key21": "4VXWvze9jY5wxGQqL9A62Kd2H651scHLQcf1TVWAhvB3VGsHHu8R3WkrjoabVSHyknJPsUZEMeF8xKDWgvA6uN9t",
  "key22": "2QxPCbP3Ab3T5zsRuj3Zsnc7CAtSfr2Dwe6V3MsZdMnp1biqMXScYyzWdfVCAdTeZMoJuigzJWXiV8srWbf6TK1A",
  "key23": "jQDMZ7HwmFQAFTksEXChXkJDA5eQ7aKjpTwGu2krpyAWyUEbo6TEKpZ3r3DpEc9jjSs5Sr1Kg5FaBGbttrDubeg",
  "key24": "3izZo3iGwtCX8oZVRbNzC41p8P8rr2cqk8BW2GvcufzTohzvLgLwWJ5mutiejqorPjyYW2VBCzpbKtrgGNS7JmTq",
  "key25": "4eSzPCkBDStUugMKBXKn7taes2Fku71YZmjpupNDEZit8xL1sbJZtdr552zJHS9GF5W1jfcj7aJSTbYAtviuyk1J",
  "key26": "PKUhrFPApeQQ3mLTqQN7wK65pf59FnxZ28jBusbwCtVJ8B2iLTLDXZ3vzMjJ7EXy6doCXFDReJxVjjReE2CZ2Wq",
  "key27": "2uvoTg8KRTrAsC1kHx1KDBytNgwdJZ11Q9AWFK2XyYZBtknnAtLyykwEozcXiz9MAJtRmT6x76RTzkPQcMKoH1BJ",
  "key28": "zujbbwjrNbu3pi6kX1kgaJWNhtYFwD6CSMjdvtpxkHsmuPNh3YmZVf2dB5AFATzTUTH22hBm1F8yV8gC5hKrvhb",
  "key29": "4JvuqLg4vSMWt7XMJ8n2c7eAycLqi7s6okTYZ49H8KivANUkqcj1QQA4dv55j41DUy72h5kyG7GQU9Hhamfcs5kV",
  "key30": "4UNZVDsLoJT5XjPGfFTKwvhcDzpuFcMrFbNkaT3EejZZBQ7Mb4ohrx66Qwi62EWPUv9rimCLHL2yDbk5fMnw3Rap",
  "key31": "4R95SS8YecTDH8LEaoHyU43ao9Mmsc3b66x2PjrvA9ZAHS3HCuxEXS6Y4t7XQHzUNPhqLNvD63Jyb9VUCpfyqNuu",
  "key32": "3dPDdAZuD6J1sWJeNk1STCMTfH9aMFVqut4zx3o5HaTKwkxSybziTiV86uASSAd9pN8bpx9JD5oVd8SUQ4bgLPvC",
  "key33": "4bk9tCceHZLRk62di5cZJDWMntPc7DWKVAgNTF6QZyvYGqk3bHxHqTheBPzoU9SMjC2bYn5s8GbqA1Dr8YsJwSp4",
  "key34": "2iAYfnwexwmfQQjmkUQvq8vGhNiYqpFHyVUuDK4eLJnsQFRDTGcBgVrkdLxzeW3tn2PMDx5GscWT8M3eVX4QANyG",
  "key35": "3iNX7DqYedVjqjgighiFKKmj1QyYvDEkFpf7C7i9FbRL4mBnoEHcBbrPy3QFMtaXnAiHn32uH8zGqw5A48pjRoH3"
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
