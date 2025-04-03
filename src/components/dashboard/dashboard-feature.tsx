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
    "4Y2sVx43mQvmwaqAeiGPYxQnUYCLCiPKm8m8pkmoPdzPwD28ZVjbN5GCBrHBjih2GuayfptqLqSyxHbfaHZRbBHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55853a8EKtPa2yVwyKNaFuGkbwzk4ZY6TypoqiSVTsQC7yTevuVP3XY7UaKNQ3JJD772sewENAFUgVmxNe6wjFjy",
  "key1": "4TWwkCpDLJXvquCo9bRV2Fx8Dj5d1k7tw2iwZRVnoWYZBV25fy3w4SGnUeN7LKLucD2Fw8QTPzvQsjhXDF3R17h3",
  "key2": "eTePsCrA8dT8nGEsxgWumYJKrHU5WVpNy6CuZk5sKQwpS9SeweFFWBxGdBub8njQAZiJNHREK37FfHi9sXFSfCd",
  "key3": "dsUm3c7q1hLYoYsYUG1CDhe8LWmdzCzvFabUuMiPCje9BqDmeTDwKeAQ5qJAA9ZKszJa9FLLf9hMSgFBdQjEu1D",
  "key4": "2QQhpaA8ZFAgTaHVL6eEaoxHWhHi3ochy5vNmYJ2Yy33Tu2Y1WMcahcEpCWH5zvH8MCZse2tdHfsH8UGY8gc8LKC",
  "key5": "3YbVWDeLis4hauxDJzFFQGaRiUXAzwpcG9oaKdoyXtxLLLNub2rwW8UZEczMQVCjmNcg8BiuiVRvZu78QSZ4QPdC",
  "key6": "3JcV8rX8eAGDwZcQVUU66k3RdVTfaYf5BasSVySegdfT8ESJXiQWXU64kFKFYkwcf9VvNLisDqrcaX2vRLvAmcZz",
  "key7": "bMAETisrqFy8kspXvXU9rYv3PFAH1eCc5XNn6UDs5w6BUN3fnnc88gBnJNxWMT5WN2rkQ8dK4k9VqBXqXf9m3ym",
  "key8": "5NmZh3NvGzbQqYHng1F4duAd1nGDmR1GsRSTqjvGDe3vFC7eVodTmWdh7hp4ca7NuzF8A6KWn7hQiNeL6APLKBxs",
  "key9": "2VXBci2zEWkqFMBgn3T2QqJC2TDKnz3DWu35M4WkXYo2PM8iyTMXZz2ZpJRrczUaksj2KqRDJxa2KpPBgFmzmxjC",
  "key10": "2GkUGSXRS2pPpwXVbwQrUh251YY8Ehsmb6Ho9FVfDXZVx9fo8AgkBwNV5D7oZMoMyqqGwAtrgrR3kUshhrr2j6Z6",
  "key11": "5LALUShAVgYqz6iACvncafNr5QjrrLDJHAeQGH6wr51BbCF3AM3mLRxYp5dXeUzKcT134R5gRX85Uj9UwHoMnLo8",
  "key12": "3vEbSkkKmrxoGckUswLXGJ29mAf882ekjmELqb4J22dRetAjeLu8yejTP8HH9ax3WqxzKDXDgbPqcDWVwRGnWR5d",
  "key13": "3RafqVq7W7eoWhtvzc5SUAcAoS8h7w6sWM5WP1HXkhPmZdXEyLrgSNf7dQyR2TYo158f18mM4xKVMZzgsRwetqzi",
  "key14": "4cje4nxtP9Kc3qNnLn4MSu4bTpCijW3RdwUrskzVXfiAQKkVjA8RaXz29yKHh4J4KgRGNZHHnHLyxpn5kKVq8yhf",
  "key15": "4ybhdj8Gw24ULPJ7cgqzwnxnoFYixcXDdnWj6ecrXTesequnqRWXzdTqWYrE1cxXTqnZwppx2zLc2nSrfkRZKXSy",
  "key16": "5WWny6j1k8Xd3mgahQpBiJwPefFsGrYZF6F1F7A6xu1gCvutVbanSH6xZS5BCxdVHSB934d68USgMXFuHRxurba4",
  "key17": "3apdE6au54r8EHNsNUzd97xcRbwKGDhYNF3J1PD84vcChUmrfbJeyYwodLUdPhLdpAq1qf7ew6jqvN8YqcHASVhN",
  "key18": "3NFgSTBVapf3Hxq5EsEFoGRGwzfiQk8NeatKGUZuRnYZvQeHrVKGTAXEcgZyw19w1G8bvrdA3SWuvRVPyJkQ7uzQ",
  "key19": "5pCMaNToK2opa4WzcgBnDjyxFbjNTfKSmeAvSP4JNcEvxGD19kJqN4J6RnXUNir8wjrk82RRAjr7w9JFw5AH3cjC",
  "key20": "kzrns5Ppom7schKENCVPEfQDHKK61bm3KzfkcNM14vnTWrYQmexqNoSwr4uz9UCuAfA7JoCCkEicRWTo4jwWd42",
  "key21": "5xDvCT41rv1kmvc7VMcumkmakcnJ9kqFKe9pBC8iAgETCsEDxLph75fWk7sf6MerhARekog5MzjUY1xr7Mo9WZFw",
  "key22": "59Tqo4xZhxmqgZFrZ6SFsqeCF4WqtznA27995RGMKQ4VacRgmH78LCtUxSUoJdB63vYKjkwsNWhYT8uJuBmDom2A",
  "key23": "4i5X7LrHg7KwyTHZZFv1oiJSauF3T2bwohvM7otWKHGAkVKX5SFapFLsUwwuPd1iHtVgEho5hNNyorEV6SQt4gRb",
  "key24": "4wTJGGt5XzHn8Hg2kXST6c9ty3nXmdWEQo5DD7uowW5KovofAB27P2kavvmcx6uTLyhAX86vdxskS1DvghNA5tip",
  "key25": "2baRgB7fXyCjT4YNKFNqASXmJDxe7Hbrfe1HSzkYxwKWL5pMxPfBNxbeHFQsX7ofCGNMmnG25jXkCPAsrwWvRKzv",
  "key26": "aCEiyTkEDTmCbd7K9odta8BC2CiZcs31traDamuCR9ddY9dq1ZMJVimTY8aWmHKpfDWugui8krBVdTNU5Xtavhr",
  "key27": "4rdnLJ3oyd5zULT2fgmVxmfTQrZamc8N5wDEWEwNit9S9PKNCj8z8MEKS2uiAAG8aGATe9ThwVNwyX9idmvm7yGd",
  "key28": "VcYk3Y5nsjWaj7rh1wNc73MxWEepY4aFm5Lz1UA9LBAZPKQWhn7nbH396MmWXL1dLoZ2prndVQaoy7zKUpRz6zT",
  "key29": "jSTcuqeQjfjjYafX7FbWyoxsmHnfAae2USGGMj2CriS7LXNpBxL23i4JFy5CqNVnHuKFnV3Sy51nZSeHfWE6fgD",
  "key30": "39Jk4qWAcWkdtBdYsQpE7y9Zv8B9g8Gy1L85SsvLdSgLrpCAoMxfVAi4StR2nP1ojaMTBRTWDZFPboN5vNsiQ6BC",
  "key31": "4uAf3yN3b4RtzEPemH6E3okkJhSAFoGj3z2R6C3Z42MnhXt1V99eun3NznY3Snoy2nsTXF2Bm1wsRTGApgshy58E",
  "key32": "3eoG8ZihREwASjv5757ncy2yaspS91We9gGmYdTSEhamNnBnBLucom2Ln4299a2bU9cm4fDMBcGSVsN2jb1WgGyx",
  "key33": "2ZnNnhkeXsH7R1B76mRXDbNi15YVHVssiAGAhWDnqmoJkwV2TwSvW9c2uB687rTePhsSzMC5raWJjQCpoFUgtjMJ",
  "key34": "33XdNsfqvxmC7HQY1ZpWviR1iqtHdtz1NQoJWvy7HYx94SuzPafHeV9pc8YfzuPTczSdYhX6dd1o1HQm3RF136Mw"
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
