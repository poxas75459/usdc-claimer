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
    "5WzqWXtDtEs51w1FfhX7sLd9A2bJ6R2rrQ2a6DDWScmLi4fAhYk4AwmdK8rdbERDSVfkFhcFAX4AvH8mR1smNpEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCW8qM9wUcS5XXLP5S5ZXqNr1KXpTgC9V5MH7Gv5wSEShAfqLnLZcfSVarFdcN9DZMUaaYFTrXLkbqgNEdfGzRz",
  "key1": "257pzEJ2C95LUfvnB116zPXj2zvDTUEo8bhTPaebCY9fVxjug9ShJnCnCskghKapoqcZ2YHavTY2oaNE25kPfcqp",
  "key2": "5xXrioxsq3Gx5M2wCABcoT2AwJBGmxSmQNM9JiudprV7NnJsQTpqB2rXkd6cir4t7uoeVVuuAgfLwpqNKHbGER6m",
  "key3": "3jkT85jeaSTpe5jT2dP3sDb5vYx2itz8WwpvAy9gdxFJCJ4Rx6XKCzpEErcAmuvJGdXr5WTfqqSmGptCU3ircaWK",
  "key4": "53LcwczDG4sJ6SpkkdtgRVQj1xwazUqg6XwXthB8aS33diN71ZLHBENukdAAbNDbcyYtgpGXtQEjWyB533g6aZ9f",
  "key5": "3HDxtnh73gqWve8PnBZT2qy6JaEgRfya4H8J1voU4NjtNDsMUna9NU4Srfh2Th3gYRn65Mz3c8j1Y6gcBFiPCxpE",
  "key6": "yUUBeHozC48BZzb6fqrZWfVUZPbLy2Ti4y9oCW81iQ566kxrsjBFwTAGLdRfdiacYyzwFeHPx1VycBKHgF5M3Zo",
  "key7": "4JEMCPJbYN4cFXNmpR27n8aXvFAZFnNEieQbtYSrAv3wnpzX1fFjEanCfi4pjthLf6xpr8HRGJvi17QPytrSF41p",
  "key8": "3nDH58fB6d9dZHciGpRLwTkNyVpZUe4eK3irB3eEkqmpUnq4HhXaTitafh64oicuru6N2jNSyJzwxcaqiz6bbwin",
  "key9": "518tViPRjHWvJQKipdyjd9XbXuFQpFBHE8QMJGrr5iKAYMio46D4uXYSpwBKXuWyCXPbCap7cC9pxEZhP82DLwZa",
  "key10": "2zGdiVWvayoPFb8XJ4gRGneAWHBLwEE4M3TcjRs1n2ccvdtgDry1JgaQ6ZX9jcBX3Y2Ysmj1JiC1Kt15pb34ndHs",
  "key11": "2AgbuabBWdRttE1GcRTHWjthn3apRM3PvdxTETpmNuyiZqFVLAcBEE1C38k7jvGwDvsZuiLRTefWEjKnRWTdxesQ",
  "key12": "42GhfXiBRjdsCecSQeAbZiVREkXoENQgVhu4ocQT9pj8LJtGEq98MiF7eUdCK2xdPdxTYt1zGUQ4BHpkzkB81S4T",
  "key13": "SxpcvBR3CsgQKmRLkJCXibsphLdZGqt7DCuMJqW5auevTiynYvmnfi72mU1pRDKf5FtNuVQHTXLjeu8FdzbErsc",
  "key14": "3Yb1nLiH9bYoDL8gWqmcfeN43kQmcaC7b4fs4jPnVppKEX9PGWuudFvQMKdYuqR68nZmuSg5MqXXahTjWSSMr1Vm",
  "key15": "4Wwsmd77psu9HQ6qBDse3BoJ1qhP7Y6Kh2wgJqMTUgJegxxtjrvF2qZQxzs4RS1BtLLVMtZx13Anoxxv9svyNYXC",
  "key16": "5PTWNgHxKGLRHsaMkhceyFfJ4VzrmY7NE3EWdgJYB7WQiDjC6Q9LYV3qfES3F9fMDsLs1mHze7jHgwNKhP8B9fhS",
  "key17": "DsrmgB8EBa3Htpv8QciBMAgxghVR6iPGGrwpiyDrTBH9MaTUovknYuq4mh8E3Y5hAxawsG9WcernmqS5HUrFJRY",
  "key18": "4bfA4aWwH3wkbwhqo2S1de8LCNJmNReS91mFdxkkhVcXHELGraaTbSVWGqTt3uvHkp4vjKsoU9iK98G5wxGxpaE8",
  "key19": "5W4Fr1aFNm2rGiGT1ztpaLkEazyiyQwhSry995KNYWfX7rarfXoTZKHqLAT77KPkDq6oUAzdXgYZjUXuzFjbwmJy",
  "key20": "573EX3kZETzAtZjgJq643xus3HoiHzFfoZNk44DhUwWdGqng1Yd9No8VK93Tfnz8YPsPi8mk3ZaTroyWHTVC1Hy5",
  "key21": "2zhsrFixEQv3riNCpBuRpa1cPGpu6i4yDUrCTLDfkMSPga5Hb6vMgKMCqTNVhew8QCpcRxbBdD6ziCwBoJnAaBtK",
  "key22": "26k7cGfbqEx5UPRrtvfP3BwigQEukgXN6erBgSj4sTE6tuCiBZQp9cRpTmBqc9C8sBy6hb11nrGAzXRA59GpCG6h",
  "key23": "4B85qcf9zop7rsQFMHeB6VmA3XnMqsXwLjLpCdseKn7FRY4g41iL2Lr7smnRpoUaZZAfP2X3PQZDVRrjKJy36xHe",
  "key24": "2f5MjDTr3itYVCVWC1Jch4MenwFDABuGvKHD8GhZ2cXMLjuMMgGLDnGDppqMQBonEUGvvtz6e1AttfC3i1S3X36Z",
  "key25": "518QdAemYDrGYDCKrCYfT2DjsTFRkHeigyfaK6cH9H6fKzW1hrJRRpRF2MnuRRe8r8QR2x3ZeXBejSedRMx353Go",
  "key26": "4CLti8ZdEDzqxbLjSjU714QETJ2EAwBfdVNkeEULZvhP27eZLETXgUTJQugL6NjYpDtLLP6cp3Rwa7aH1K6he7Tq",
  "key27": "43Jaiw7mDSb6nVMYqh3Tg2fnvJCxvV91emHPw8uZcmA5Rf75dVzgsAGgDswRZjuBzff25gjehATeT8EBEucDCYq5",
  "key28": "4eozr3WwpEFxqvytvfthUQxPcLYRjL8Pqzv2g4UDtCNpsr8iMQKe3BKQmqjp5uo778dMqMPSAZGakS2SPrJXPvGj",
  "key29": "5VEpRVvtnPUZbTyJpmuWkXbJvH37ezFQp9AjDGNPm1S5D3KG5AP51RAXaoosT1cVVxzhYWZHeGJg1vDSJNSWin8U",
  "key30": "5aJ5BdRnGpMBrpPdSw2QZjeoDKtRxtKNRkTReEPDBJku87PF245JGH7yfekwBP1WTo9gu1spS7KeSL2cmXfYEYYQ",
  "key31": "NMG4DhZJ8wsr7bQup3CZ214TDNfeKdhuFWJMGccfE2LCRtbayXwU8KKLCbKnD3vmffT2MxjYwPETyxkDVqUKFNT",
  "key32": "eJonKZgTyRKCcsN3HodZu27rkwV8mj9iBoQSgUbnQcYMHL2oyK5wG66XExEBQ32P61LEVj7AFDk3pw9Vwj24RHc",
  "key33": "4PL8WBo67JnhJLsPGXobYNDXS6anC18J8L4Hh4bL2vsvTYzSxRge9796xvv7DerghAegk5xBXCmACYpivPF6q7qe",
  "key34": "41hzdG1qfPSGMFE6vFL8AQjuF5dppN4Mse1WMP9KPUGnVMNo8UXh4YQpBuF64LPjkoU6AVnxmBokHU3nGgLPnDEU",
  "key35": "5xiLFC5frckRpsjVXBYT1gRmgadF3G48oSHqNBeuzqFkHr8e1p7mYeAq3wxTGWT5pQ6rbKE81AmRJszuaHXJvLvf",
  "key36": "ePjoP8bqeTtNTXmW2cbPT3r8uJfMwzgtjSJzCW974nobHVqaFT1PGkuZoDxDWUB1zNReWB4Vm7VTt3rz5ESiCyq",
  "key37": "4UwiovVPgemXhuoiS3yPbBY1usv9KiEK3TXciVTXEXG6KJSV2eyQzUjZ7RKVkM3ianu8JafKL1dgA1mYunDmpcnm",
  "key38": "5d36VHNHcPEue8TwMtfcN3iK4mKJDJNwDEpcRzPZNJXYicYqs6nbnKjmyT6FWTU94to3cdToyrSU6myEJjnVYPVt",
  "key39": "5FwncnJbdVcAt1ZuR3unfM2sWVrSEuAta3veXmu7o2BzZqnTY12bHTTufTiJ2rTAYonmooQQ4enMmJXzD5whdY69",
  "key40": "5Urc5adaJY16xmZrGMw1ANcisMBzxHjjXSaXmMQF8qMewEQEbUvmXR2QGzmczNYD1fV6QuqByxvwptGv81XP9PQG",
  "key41": "21qGqP7qQqu6BkBa2YDMbQbQkrmRr6eL8yRAB7Bvdar1Ko38K9DzgufeKEFxeEF5eWLtNJncikVyrDWaEUVr53zr",
  "key42": "29C9CWsi8itFE82PbKxA6YtKPUnqaK9D5BdPDN7uoMwXGymRiNSyeBW4eLbBSiEggvWZwjU7FKSrhtFeeA1YqLGZ",
  "key43": "2rm2jMPfTtagA5Gc4kFSHtRJeWiDb9hcviXGybb83LsxAQaC3UShz3ZMq3FSysojqzJ4cmLqhiNHNTDDmaEjfiw6"
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
