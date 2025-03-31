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
    "22zKbdKsXvRdjC3boYayAE9R6uSibpogbyVCNjK1CVFtK1SEX9GN72UUNY3KHYYWN7m8yAwAtr68nWkACEHAoh96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34VoFZE4vKvZLGvFie5V3MSEbWRZAK5UKFikjcZ9ZeU5QzHWPqnKJZ1pU4kCKt5rDSBJ4f3S7PhRAGumouh9dYga",
  "key1": "c1QMLw8zJWaEKEifSRWifYsk4xxnUXkKmnzG2LThLvdEF9JW6hCGaazhfewepvYp1afjiCpimnCM2w3bU5Y5vut",
  "key2": "2dAmbayUTsSrKWoNjdLYCa64ZFBHQGCUEqZX7HLxaQaXrvrDWX1GGto2K6raEREvo2dv8A2cbJ6jwwrWaEpNY3Zc",
  "key3": "3N3ozD9mviZ54AQZHvUSdbtHrj9C5ywnkj9PeudMwjcS9FzjJW1CQ8cu4J1TDeBM3FTgXvvwaGcacGdSLHfoVdjd",
  "key4": "LEqLKfLHWBGtDTwVSXrWKUaHSqgELwoutb1zdU2Azv49i7VxtecSYF1Xb5VuyHbsiJvg3mBB4RvSmmVSk16BgJj",
  "key5": "4M1qcUQ6coqn6qGUN1zMQV9EPKfACinvUHnn8zsxkHyZov7mqaEDCWPStQvGWm4GuoqS94rCxoYbUxBWqV4SFDgF",
  "key6": "4x7u9YWfTer5mKpcRRdiBNJAtCPzRFG1JbrZ2exuHBz4bqWT3hJfeagb6iNyQj8oNxw3GcqtZvENjHXgSqdLKtqh",
  "key7": "3PQZdEtGx385NUBrJ2J9TgJ6oR1puCACPR2r1E8AGVbAqY8eKnMi4hQ1zuyNKyXNeyfs5cboiQtduYFthA2XcH9t",
  "key8": "26X5HSv1rjiCyCfwAoVyGUQY4uiPaSpBsvpaUybANz2p2aw3zbPDaB7yjNGg5K11QxcmysDCPbm7iNZCusm483fC",
  "key9": "38qigDW2cycs5k6qJXZWVocycbbH6U2G26TZaAVNriNgVx4fJ4HoU2TPmDxy8ucLXBDdeh14sYETNu7DcnQm5yHb",
  "key10": "2KGPN7RBMueqDE8CjwLuggLg7rXydmKo7bbHGgckqccrszvGijB2XjJ5sFzWzHBkFQtAWXpWeZiSfHdkKj72uDne",
  "key11": "2cxQQ1e7LTKfbTGwj611i7uVm58FbNf52qnrWDuc9Rx4fjvdKF7PdGPjt9piyuxMXhjTv1pse81v8CvMUVZmQEz4",
  "key12": "2e6w763rThD8Pb8ijL9MGdWuUUBDvh9Hxc52nuMnYxUHVehz7aXb2WEDHTixA2XPZJfoQ36efn59eaYigGXQvFt5",
  "key13": "2biDFmPeoGocF1Rmw2aeeKR8rKsDqrpu6jv9EiWk76gz5XyNSukoedNvXTAGmpPwAPSPuSuakdvHon3psUNMmsXX",
  "key14": "3S81CAGQhHLFqUNNoT7f2sGbs8TkhN7cbBK6UALVCNZesRdwEJDKfQw9UuY1euZ5hcFL6B714hBBwckT45Lcba1t",
  "key15": "RGCN5CMvcwK4uCeDS4Jnvfp4kbrzFE3a8itngsYfRmhBxtnBBJRHWR2bLVjAnJDWA8mRvLFtRGp9ffXfYEspV99",
  "key16": "rs4x8m4BknzvAxzEVJrX6wBuZbdihofVXHMPdQ8LUjo5zSXzQMwWXRqQb81nPeZGtWCaxt4BSdGS1C5wWjjngaS",
  "key17": "4FUGAn13pYoHQeLXzeZcn1ukcHSLxvhwiTvK3UVL8wWTrBGKHbBDMbcTVWKsZEMTKLFZsCDGSxkr7bwKQ4bYXqrn",
  "key18": "kBpcFjsb6rQn7WQuV3oZBiimhLgWoySUd4zadznQtcAGcGusBevW9rgk9AfDhvHbkPTi17hUoDaKUiNGnx1Y899",
  "key19": "2dcQndJoWUdB8asox1XyAhroBctEdZKnLUGKdocUMea7qCQT3E2XiXqYGUxztBX7RSiZoRMA3uvheR3XbSkKiRb3",
  "key20": "4VZwMEWA5BMthVTFNQB2aDksMgtcWMrQ2cLVncKYLyHMd3qquRJiQG35bChsyEEP3fQWapN727e7hfoiHZaMYMUV",
  "key21": "cRKV2sWSfRYEqhi5PatmWcTH3idecsDM5VED8b1CvPZeeXb18tjWzMDrqhJpPyH5fZ4ep6H9CPwdwVMz18rPAMr",
  "key22": "quLcXf82YFcTAfLCw55iqQTbwzrYcnZ4hA3TGWVSCwoXJAxmpZQKL93cwN1HudjJZn8smLTi76dwCMUNZ1shfUt",
  "key23": "51iwFHxYtokkLxEnJdM4ZjokwH88xp5zaSk8UjRKgQRp77tyRSC3ULkQq51bT3E9N1sAYVTdkgtgspZrB5rETZHR",
  "key24": "5UFgerYU8kPwedicCqJ4oSCMSk3Dmci6xzzPjX6Q84rNFSbAUmCY4QuEw16H4twjpu3vf9BSmTNZxQ3yfvxgcLKT",
  "key25": "5P9uYAhLGcQhR1g9q9jp8W2p3PPjws1pe3BNyZJqSJZ6CkisEC5vqyBU4e2hyUBPGFYZxuXf8orSeeVWdSQLvQ9d",
  "key26": "SndtjXA9mbgdb7r5eNpWh8kTytYNnieFERr5qB4E65r3P81vsBBTnX5FFWo1SqY1W74KNCeEJ51AMSnXX8W8yHW",
  "key27": "WZXjUSGTkLHvbBJ6AbHA4qWdkUD8aTnrGv7ALCkr2og41ZaoSB8RajrqKeFnWUgdyXGFz6QegtTiQcU9XApBnRS",
  "key28": "35txbmPNdv5dFPxAqWNS1oDXovXxjCs1Cb4GtDwsbPYV55EUy2Ca8EXR6ecXj3vvo1rThyYAtzJvVmFKgSe7x4tK",
  "key29": "2H9T7N6KjuxL1qkKyyFiMGdmekv6Le6VsnFcCTvTo252dtsJ1cxcg2GiPaBUyjZZPrKT1jAHZag9gY21nDzaqvQE",
  "key30": "QYmUR93L2pvXr25SyYP3qHsaQMvto9BHZ4qdnAAtWfd7gzmWwbnFz3aP2Rb7kjecX9HPgo7u8WBUroeoZZqFqok",
  "key31": "44u62YkW6Z8i2nULUFeCTSAkfhEcPccwJ2RjfQGXXsWCkHKt1sZ8zDYNKx2tPfJeWqjncGN24jZxe6N8mCL4q8pU",
  "key32": "5wx6VymK5NFd1aDURHt5o9Q6nC92bSCDyd9BXaSXFRis2R3YbuYtCXAdhbBuNKj3WZWCiAdxxXGs4sM469R9ancu",
  "key33": "3BbkASpndikB9wR9XWeERdLkhMwhUYB9454Y2GDSoc3iPCfpX5JVV9d7SawvTMzWorCsmXbXRejsgBjqoibqawTi",
  "key34": "2A6wWDSpEYEY7aAV8otWUySpaubvX4vV6HtodypziMr6TqJm1yRVozBkACheTAFG2CRdobq8zqBiL7BfCzsjFthR",
  "key35": "3zYV73tE7YYPNBipnhdaaUzosPGNFEJz8UFDWtYZCNkryEwtwZUetpyDz6nQEyMxnBJaRec47Ux1NaePhEU9e5Ye",
  "key36": "573v5oxZ7VuEkKzx2xCMTJRMyrCdBv3xdjn5cwctQqL9QkZT7VqXui7KM7npZa2vkDXwWRogDxn8Ye1dURjy5xnn",
  "key37": "2uUFYtR43ub7vNa3NTZBesNxXURbZE2WtwFwizRjy8YKzaGefp6nUchmnDALAokPME9N6cGWQ5bd8bysSxjZFvH9",
  "key38": "SkJC7LLyU9n81kqpJbuvriVQCx5UVk9gGz1FMxRX9GAkVfr2TYSrAZ2En18Gu1n74tDSpc7UNJsLEBuiuTiia56",
  "key39": "3vWAGZ9MhvijnWUfYwAsAvckTC9FvWryhUbP7KdevkyoKL88hJAFxudiKkTA5Gw8J2Zd3q83NX1PEGC8k6s3Q4rb",
  "key40": "2ynkLNmANMn79CLsuGtUKCWrhKPWkFbRtNSjY7FAqNJ47YwgxxEUNibRdb3jGVFVr1zTjFJfmc1DTuzPJd6tnpVX",
  "key41": "3rPxWh4pVtg7hUZaEkN6mbMscBqarSqP5mif8k4bisFGZqJKQKxciNqPsDJDh9s9AYnBiY3Gifye1fYN6eW1kqBB"
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
