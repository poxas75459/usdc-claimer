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
    "Aw2Af6HM4LWVHGMbhRmku5uWCdtPKVyntjoNyuS49M4rw5dxP8pnB3yWNzXqjnb7y5q6VLcb8BdMHM9Ef9mNRn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSkKsFYrpGy11Xjcm3bUyhSgr7jY9iBwkhUyLM62cadbCcXJ7m4E9oS8Bph3thmEMvJ2uggY9KMPGx4sekUgDML",
  "key1": "XRKLFaPur86ySimPBdNd3LQkXUXaJJCz9enUyhJXqURJZPoQxmMeAf8kRBZgLQekwCE6aQ9xREFF4Wq1tPLai89",
  "key2": "56rh8TYzsNDgFxN9Li7BovdHnFf8meMnewB9HiDc1WdSuLNJxjxMme9Ga8j5pAwA5CbekwTTgPf15zZVBZ5HK4D3",
  "key3": "5HeH9e3pprugBVE5FydGDuXMEC6jH9ZDHidGcrHqmV4hUigBtfTsDiWLiXJEP6GUAD5aUQd1TqYknegbsXmKNJ8j",
  "key4": "3E96CFSVHRvUxwoqtyDNzbYmoxFwp7dNXwKqPQBcbH9Sd8JfqLLrkr63C5mZw4wMaT68eDNKSf1sMq6B2FxRw7pr",
  "key5": "3zfSExnAEtfENccpLS64AMLxJSZquACt9Ep42Sx3Q1jJyP1cFmBcUyVtD7Xqr9gARvyfRaBm3ePPGGfscws11Uw6",
  "key6": "2SianjnNYhVpXmkPSaM7KphYRfFmUbNHL6C31cMBbS1Hd1PbdqjjHog5F8Ny9y4ahUw83oj99kuUf7Uc8Ee1w9Ev",
  "key7": "5ESibNTH3HLW37NzMQR859TaaPsqZHHdLAo9fTA68HCL1v4X2hraWRxQKoNRnSHqnemLHTzH56ZKL9Di6p6FnCu5",
  "key8": "3Ut6YaioWqoTAy1pn8e2GxQEx7aY8JJB36iqSb8569HnuB3tw5EyKB4ZL7dSDzCbBruaAD22V116FjgMBYq1L3T2",
  "key9": "5gREkr7SQSQyAtucWfEBJ1BVxajLv6ig9ZaUEpGMdCstxx4jECzEY6hehYcaPQ9iFJZe64tRTLLzcmJzfawv9Dhm",
  "key10": "5P2dUT9cuzBX8s945xFk4kWP3e7FVszSkij4oJyu93auzrpdvhxH9KkL8NXUcVRSTPCBkKX5AECBB53KbyZwEQiu",
  "key11": "3HtPrD7hx2ZunLmBdE3QhL4zFzYg7J6gGHsjt2y5nnK27Zdvi3mKZbdJZYoCYEteo5TMtLVn8Ho7rPrZq3F1xh4Q",
  "key12": "2F3NJS8qMv8qiFE8eAMBKWH5H6C1YRYvxwMfBDeKEB8VRWqM8PGaJxHCdnswtdBtYaXXesvXdPX2cmEzcN9WfiFB",
  "key13": "8VM3tCVCwxrNrMSGURKzQxscXVTUvJB7AyYQLKP152zhfcFVjWji9Py2Ceqw9osvA5sck5g6QX1oDHgPZRFHHZ4",
  "key14": "vnkSRPcCsYbr9u531pGAojezwSZUq9w889RQZhZqvKBeJC2z7M3jR6aj9A8g1Psi6ASaisBoh1EZTwbwh5eWGGM",
  "key15": "56PkctPCK4RyLzA1KHTotfPoHB7Yzq4S8GgwPEBJ5YhwsqcWdVQbvQMe5pfbwKcUUnxJj6fLLnyURhrt7hcXjgP4",
  "key16": "2nZW7L6BbaZC7s9BMyn15wPosksf2iqecFvaDQs6RHxw7u29xNnPAn8cKFargbJ2E85a7Tz9m1Jt7Py34Bk4Pfuq",
  "key17": "2XRAAAY6kJ8UH8BuAsg9b9yL5PRo7qrtRkAzX2TgJT8WLiW7mmkgQC4EAah2HBoKLQ3ggZBAfNquRxNniN8kYsxx",
  "key18": "M75zzxjRoV6XNv7kyD9meQHPMZBRFd1LKh7YjFMBfewHFodcSgZ5DDEZk1AFREjDquErKgKYncz5dXx37wjAKVm",
  "key19": "3b11sJq1UuuQaA7TVa62znM7LuetKtEc1XzASZ7iP1udVJ7vWW3Pf2scQetk2GQWAqZXpr4dLU2zcjSDLQ7yXYQ5",
  "key20": "GC4FX4ap2yqSDqCYrwk7BRGmC7FpWTtyFsRBy42wRu1Pqy4WRuugpmcBoyxEWh3xU2haW8cCC29p5PNy6NokJsu",
  "key21": "5c9v57HTBUv75RwxHt6U313fdTDSjQmhs9nz6C3sm8twTQStP47DjLVeEqJGDRL4MDXEdhkTX9uLV8ZWgUmj2hCb",
  "key22": "64FNqNQQj81aUmHHZtoLc5LSB6AhAvMBecRjqpkgxgzaYJMM7ngFev9Ww3eaGrL7asTqRVTsgpLnPV1RzfTJhAPj",
  "key23": "dTZwbtkboeSd87inKBM1uq2DLGX3oLBZ9NSGmDB8rJcdCC1Bw7MndAHc8YSBSpZWoH5gqDsrgM7BqApD62EGjnb",
  "key24": "2w71FTwsSLTyvFhpsjuAunSQvBLZ824Z8hMP6VWSEM1gA4ZpTCq5fYWD1r6wKb5qSuBwBZPMoLuiYX74fiEgpvmK",
  "key25": "32HJJiYSopAAjFxJtdvkh6gMn3sYzgCkxZNovhoTp6AYxaUagdeok9xkMXU7TL5XEsiDq7jrEHhnmSyZvVMdr1qa",
  "key26": "5AdwQEzw224LL2MUMz65UJCWE74X9g2bd6uVKdhkvNgqfbzkwGJmzzDP72jEvHDf4dV6GbZLv9kgQe47ES7be3NJ",
  "key27": "4nq37v2tWG6JBHqxWek54nGMYwvgepjUYQpKjHA8creSzXxG3mRB46TsU1QoBNxMELaRTEgQKA5yFk5e13jkdrcB",
  "key28": "3i2mjjEuB5FGCmDQN7uVRJzFFJmKJbTs5rmCAyMjqb2nDrTvbb4sBYJ8E69udW5mNFDmkeaur59hhp8xhMxqvnKX",
  "key29": "FKPh6nLdivVdFy7q5thtajCq8Mg7G3yyryRws96AsZ6gPjvTPBb6W53qeqjMY9feR774XSZE99f9ZGuD4ME8iF1",
  "key30": "4sE7cWQR7HzBtCh2LNeB7AUwcbd1Gd7mDf8jQj2zyEMwJMQeJDGDpYwkP1z6uQqjD4oXiottU1XfcbXwfwHWBNkJ",
  "key31": "4yXojmtiUDt9xauTnyDRwQyTk36UiqTYqPqWespZvzNkPeNmAshQmBdpTTA4tqczs3bNnYMPpXcaDSuJ8kZ9cs5n",
  "key32": "3CGJGStBQn7Np8r8cDpPSqyxvF6gUeSFiGp6jgzdmNhN4uo7VeJY2NJuMBdMQiYV7UHkCgqnnTJAFYesJRs8uYUz",
  "key33": "2UzdGY5kbRGGMRJpPgQyPD95pky48fxVT2KrAZHdmEV4uCy4nAgd3e66KSViBjG5upg11dsMuW49BZLVqusipTLu",
  "key34": "4eABeVuXiyf3Y9Rwb7AFMxCorPw2WTtminJFch21nV7Eu5ZTTG7vDDoJDQPoKHAyn3jKYYq8rDHBJxKoE4gKGChM",
  "key35": "25oz1948vZfFjJ7LvfVxuhX7m497n2GRUMLku4Le564iqgWD9oMPT6eey8ps81KX9Vdcs2c7kXNRT45W5uZcoMNw",
  "key36": "XgKHzTWWkwETJ6vvtJkyGMeAEc8VruePsujPMoYXQtsSPTCk3oQXwCoxwMeZ6a3hnE53y7Qf5VgYzh72mF7YbeG",
  "key37": "4QLeZhX9FAYCCe5L2XXWG8cgsWBF43mt33MsKGHs3z1GzcVG2ZvUpon5AdRie4Duu79wtPc3ikvhRMTQj4Ag5SnX",
  "key38": "ZiSox14eYzHSVAkb3jsp4C5LGooyVXwTCmZdpRdrh4KrwE1dgsjXuffZq84oAJefypUoAXgg4VzuyFVhevmSxLJ",
  "key39": "6MHsUN1UgD4zSw4ibDh2K2FDV2JccrM4f2k6w7E2RY3bosDQr6KPqAB1zq51k5a6motkzrVD3jXwZBVMhw6DN9P",
  "key40": "5mjxCgAZTvX3pMSRASc1zAsFPyhnJpR8mdV58RdZsBXbxgHTCsdWkHnRC5rkCSTpzRQGMRwx3Tq3AyW9iU6Hvsr1",
  "key41": "5WC6CeJqLdcjJT71Q4RJRXB3CbfzSA7qdBmmGG1pgkDw18Wj39WpoWtQsBePf2WvoPMaEQjgkpHsXBL4TXnwLhcE",
  "key42": "5df98kGyFpP87Sm1xi2q8PakMzpj8ubpBwmFUzJBQmmsYWfx9S9KssVKtircuzhNiU6h86sB7RWBNX7dWwZQXNWB",
  "key43": "5rLYFc4fPFShN2PyNEj6gTgsFrgjMCgPjtNnnyBM25v4v2qiMLKAxURw4eYRsX3pytS2VaSDygw43LM9ouPw9BYi",
  "key44": "5NsgzA6HswyBa1tpxAvj9nzmPEtYWcuPdvNPpiiyRK69MT8okkuT5EGQpjEytKtiJGyMpRQ81dtASa4SgddAAsgS",
  "key45": "3eN9MZ2hTmqHSFdWqTXXh8yovuhTrxhAGsL4iJP2KYn5t2XcioMCynA5BFVHYGYj1Hdf1ceHeYzUp2p1uS8Qz3dm",
  "key46": "1KpHK8Y5MHCXfhPyQ6CFxJfbkTbpfgEX52V3QpKmSmAWk4cC2Na31ew4GtFR9xs6CahwC3SjG2CowC8kVuK8yBL"
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
