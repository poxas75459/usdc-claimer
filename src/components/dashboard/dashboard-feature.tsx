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
    "5qBRHFviKkeUaaseFwDdsaufkYCSM1p6c556VZuCsTkTrWbvZZLDnHyQNY7EkaHtguzZLeGAbMerjs1NqUp9QLvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMLvTu5B5CYKqhXCEQemkwMK9B9fCiboxg1ugfHau3LJr437LCR6qa4dQmPSVunFYR5SwvTRsK9YwDSPLViatev",
  "key1": "5v6TYmNPrMmGvWbJjHkjgeN316hchXmyj24r5MJNrbe6aVPPrHZSvhx1aPbEAoNVm196Atk8PPkgeW5AFtpRakAU",
  "key2": "28uGSs3kVSFRGX94RLAktpuSv6oVyhNMYbZDMqHvVCqXVpZYMCf21oz5MT3az8PsCsB2XaiB5QdG9zSZfBoM32wf",
  "key3": "JVoct1aSth7rBcMWT3QDaBfgWtzYaxSpPv6qfQKoft1z5xYvcMy47kZbF9SYmj5MM6NBfLHrMzkthufwsm1K9Fg",
  "key4": "4C1vWhBfaN9TKcB72LLDa8XwoxpEhQQaBRhMv4S4EppXpnqG5zGu7qbXvnzJtt2EhJzKpxLMkD3W3qdSNdN54USb",
  "key5": "2XyFb49kz3geFDDwUH3xtdY6MC7HUX6pWQ3r7aR36ezpELoy3Gzger5hZQJrk1HPZoBSfUtoYbGCJ5b9BfdVooo1",
  "key6": "5fH26BxwsQ43md8UAbWojDxm8uuAgNM9sgY5H7TrSdaiPWDvgAYE4XyxzwTAyjHhBaussvmo2zzdqsJFuFE9wwse",
  "key7": "7FQzKoSqXvVmAe7EtFDSBVARKzT2pqudQVCo2KCku3o95BdtEV6NpfiM25SDBXyhP6PqXDkehR9fdXz4yqEPpv4",
  "key8": "myiMTuPZWAzgCwykjMFpU47sg7UXpnYX6wA53boXbBEB3wmznFK2TZxUZ6o5BU7jQLz61ncMw4Photpm1BqoQsq",
  "key9": "3madmzeg9EnuMraroLj5rvJQjH1PpPJWrr3K1n9GTXECi7E7Wr5JCUa9CbQKFgwFiqsWD7Q5eZSaDdK6gnqsoddJ",
  "key10": "3sQGNmSQi8bwjYKpQfuJVznxtCZXxEiLRi6jqMH1Gi4f9ns6FTHNrBXRviomN1nYPniwWCdYzCPQUa1CFFLh7GM5",
  "key11": "2FCiihSKM9nkxfnj6BB8r9UJNTFhXk49EfUHUGeh8WKx4x6Hmtihj7UDLftVDZQW1r3uBNXFLEv5KHWy3k78qs5b",
  "key12": "3Ry21CU14DHsDY4S1jy9UkcbeYXiS4ctBEwd5NqSHusrMthL5mPyjTJ8wvuVvTCkUZEWvYAXu7vgT7371Xz17HDB",
  "key13": "2RKnqLY3CqSUo5jRrm6zFe2mq2aU9SYiXkShCWmn8NXxRTGJQVNstdmCWFThwz9xM1tnQTp5QzarYL8Kf7wYKrGZ",
  "key14": "4qkEWvNdchtzehLsfBTB3yS7dVcKSHRfpVEjUV97qM7zBnMRZGKuAcetFc6HNPgGj3geikx2tHd3vANfkxfeh9PG",
  "key15": "5wenZTobyN7RgRahRxCLnVmVXn5rHt2Yi6AGCzux3Wo8LC3At8obsVdv9xeAfmivVqM3XejbE7bx8TkPMVb7BAZ4",
  "key16": "59XvfNjjKUehynfc5jaQCbzGA6ynBi4s2chENijKnN4phBALUTRs8uj1Sojfd9Sn7gDwfiALiNeqoym2HGV81PGm",
  "key17": "27ZxsHWmygaWwsThsS6DVL1gX1NorSa79vKJX4tDt2ndc1z9mQ9jyQNwChdtqMK6NoxAMhT3XLzAR1Ry7LFH7kxF",
  "key18": "2kmqwoPQWF3LrxjWnWqWYewmQwafgViPFxmbFZpEUVYdFCR98Wbxbt2q9RKcmGZCo4JcqHgFYuVexhVbS1K2CiBb",
  "key19": "3ToyHsJukrQNkgJw8KVoL4kMJ1fqVZdGM6Di4wWuDaj3Wg6GH7aRbo1CgsqkHURN4Rh947DdwRnhU9eHZmxAeX4G",
  "key20": "5161u7m5TtCm7gehxqkjVdPewREXiG2XX2aAjg2NLiqXRatgAtd9BawePFniU5XQZagiLQfbjFWyy9GT4LuoxGPL",
  "key21": "4P1S1oP1UBBobhHCd2QSqfWF3Kn3hJ1fQRYMsdUVwHjzVezcoB6sA6rnyFQi5z9ZQSEp9Q4eyQvADAN8HidD7WBr",
  "key22": "4tTK7yib6vihVG522Eb8DQtZRuv5g9ZofLKg8RS3YKVgCZKUgH3pSLt3cz52kYdezG8bqZZ2r9CjqnU4UpKsWwzn",
  "key23": "2N9uD3RH19FNS1tnduUJ4NJTX6MuiWuPPUyMZYKGU1XvzXFFrCnUZB3nbwLPUdwAsfWt8P37BKUB3kA8Y3K7cQHY",
  "key24": "3XTYtxzZNzxXfXxk1yGNtqyyfbGdTU1YEDH2pG4eB8EXRLBaK7ptUZCfUmbhWBvhXgjmwqQ3GoZcV7k19gp3AtRB",
  "key25": "21vo63W2e15q5PRkcMfpG71QmNJqY1z5ckmcRF91GGrDqRVBbMJLgZmmw1Wmvyb1hfJ5tg9WtE8QoYBuSVb47MBX",
  "key26": "3SP3abYErSvUnF6um8kTj9PegwthfMrRMZbcdK5rtnrek2CxF3EACxeCjVDwYzp9QvxGrhmApa54GiRHBdz8S8Bf",
  "key27": "4EmWLZnBP6tojMozSFGY9TxHTPfNXJVZyAW5RdaXKGP6g717J6XiQGW7vARDGH4vP6vrLbYssWAYjtSax1evx2Zd",
  "key28": "32G4gTTgUTKrD4y4RDquxceEZfp6sxUMhYCbgsev5NWcvxzrrbbDXiyXDyPqsNHvU25nwXYB3CyfhaH6Ff4w7x1S",
  "key29": "461HaXCJPWDXnD5jmJvenVvhjGMab7XR6SBuyLQUx2bSHdjTnL8QxjWaNWLRg6hd5DVjREP14SAWHKZiGfNxTGdd",
  "key30": "3x6iGmCbLD3rcf4gCKK178equEmvRT6rqpeuTHBSfSZFy14CYQjxyZjBsxwT41isfqMT6he9ZacMzY9PTa9zWfk1",
  "key31": "56YMXGpXMmYvX5BUBQ7b1aYDTsq7kKj9WERvupQnAytw3mphdrC1am9fqCFZjS5nBuXViXvcdWPwPfsdhm7hJsJH",
  "key32": "3pbHLpEsNxTwP1uZ4cnMZgtEGC8hJ6Yg1B8CC6ZSFytgmQiAvGyHTFhSQuYG63dT4GBZEcfYa3oQTtdnm24R9RW7",
  "key33": "aybnA3dAW9r2MRam4bX6Ufbafe9NaB2CiDPYEKXRVmPVyzoYfJx714VEbtyaFokSchj9Rxo2txcKkkP1oAkoD4s",
  "key34": "5DC9SHmwM98ERq8WYsVDGsN4xV7vbKiod7up5k4ww8YAoWKSZUbCDJdmyrRYf2wEmWpsvVFoTgGUUWiAP4SdY648",
  "key35": "6W2BPD6aBNUaNdZssmzMHUmYRwbJsL3BrykQq2M8QaMrocuiVXxtKw76RQvV65Qn6meeDjSVQQ8U3Y4DNPv1WVE",
  "key36": "3B9nLnCG55ctFZsnQx2qzVYjZXwaCgStAz6MgZut8rm4M9UEXZ5aMZyCkK9Nh4Usyifyo1HnigmPPx9JKweiXzx8",
  "key37": "LnTFfMMQqnHjSpYCymCaD7YSzHqNoYhCwpW1owdQCt7QcexQHWfMSKWchMa3uZi6EH3hRNE8BXd7iZZAFdXPQ5b",
  "key38": "5cJkuaSH2844Jpi2TjuYgZLXMSi8sVurtjwQgs2UBj7iVYDZUd5jKLJ4xgJC8iGFWBbxCnm6SQ265hwnta7gULcE",
  "key39": "58XARErSP4C3SCxhBGzQ6egcotKmLW5DZskGxQSAUayyWvuNhbTpMLQFcW3b3MgH5NiQqQixrVNCUHxGyJcw2yiu",
  "key40": "xc2CGZRvtA9S4bRdnBXh2iuHd6upaDothaqBTeV24rWziKbCR7Z1eBr4D1DKfJBpL2KH9iNvZuyJGmTQC3FUiUT",
  "key41": "3AzmPFE5t2PGsH9Jj9nJGc4vjiSkA4X5p1EXwEDDGTeaacsHuAdrNz7Q9gtzdBWAx5RUsQJ5QZ2QfYRAdBxu2Bdf"
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
