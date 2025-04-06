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
    "4mFRJGsKYBKV842HfQC6hBxtuRyRizZUjGLWMZxnbgdQvNDcqzRj5QKYSJboPjnwWZXcaqx79H6dMcVcHw1N6bHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MW8Ndjd5x2MJV29SiZy66UhfQEEVFEvnsqmbdNjpPiy477nZvZPqtf62Xb9fVWUVqgyMZPz74n9btXSEhHSJtkc",
  "key1": "4ybDmpdpzBAAhaYdcAGZ5rWVSKvx7SF9brqTMoTh46SrKqV2L6tVWfiiUi5foGALaaREJGT9MMSDwHoTNAGscLKL",
  "key2": "3bGW7Lyjs5p4YWQUmZdhcmcYyEf6BxmtiTttyLHwYtU7Up3u4vTcefSLpjRyn3qGn1yadV2rB5hooagpbo13aUjf",
  "key3": "339ufVsKGKwJby6hv6ddJHhSjsCSmnVNqdocM8NtELNeh8oeoLKKq8DaVDmLcwuGUuvt23qdmotLVaijgLxSaftK",
  "key4": "4eBrZuXj3YsGNWEXLumyuuFVEYuyaAmcj3m2j415fsDhpsg5zf4AxbA41XCf8ztURTRJ1PtCuRCEtfYtieTsocjP",
  "key5": "5wN6tgaej23fZMEvgBTLWGvR78PQ2BnUfaxBAn5qjH8G1n7MowUJdaq5ChsKstnjBkTehhA8WaEgdu8vBGepVJbu",
  "key6": "3qAf9okMRTq6DUwXBYUU18jCbiBda1UMSR8ypXR9rRkHtpStceeDhvLvkm2kpScM4rkGtfV7vb99XTQrHMH5aPzG",
  "key7": "6NqLo4xxdJmXLdmWRsrq5scm3MNBT8AFvHhujaFC3Pv6XLshAjYvWru214KEBm85v3hcrEajYAgWfqjZZD9DSWW",
  "key8": "6YzYbS6kRC2YVfXt1xrtSxcnKvG49nK6uiHnsJPpVevKx3H6mYgcAa1t7CGCyKiKvtJ9fWyhCnS6o6vEfheJGMB",
  "key9": "HUyCQLhS61Ht2JkV1dcYndueaRc7AxFR9dr2rtg1kaNttq7xBi7F3j9jCARn8mmGseZtA1NiZxkc1rP5HSazznC",
  "key10": "gpXtpDAxo12NNSM5EqaVJGvMmw9AUQXULQ66q2p57EQpCmZNZonQiSVt8foQkp1WoXLxZsrAWniphZEHq1EEGYX",
  "key11": "tGEAQne1JfGaTWhcNX9PLQN8K4yQjhUExdCgT17oGAJTuFS32765Y4ChGjnLj68CYrPYWnay7RzDESRXfgZMEFm",
  "key12": "443JPLLuNqkhhyw9wVusxs4H54DAE1D4opSV1f6RfuKMKJzRwEa4vZafq3AU2KKbeYtRQiNzBwszx95xWKtMzjxJ",
  "key13": "WApWvYToV7iS7kaYUKkK5aXPkhFZ7RUFAdxct3VMkmW9VyWdZDzuVSAap7B5MCoz8NxaXYyeae9f5GefYXLHN8u",
  "key14": "2QcwUJUdGrv87ixSyFCEEQnwgqpY8yvQEnBF1Q4oVkEW5AKD1f3LnwaYsm2z1RCUmmiWvqyuDuWFiKNzqT5ceYVC",
  "key15": "FL3s5w9LVACvxDFuSB8HdmYRKhDUkaGnoXuVgaim76nC6MXHbwYdfnPmpg44JGWPMtvQugjVCWV1vf7CcjwgNP1",
  "key16": "412kC4qmis9p92m1zEpkuZe4wpToM9Lrr5QuvTqyvriZ5BYRrYxNix1txRjHyQwYVoA6FFwNyeKWvYuUvePacRpF",
  "key17": "273yKsftbhBzfGYhzoHydT6fC4aeqs12VfTxn9PeEN3LxCDvsbyg3f6EXhYJYWwYE2qxwvXN2se8ct7YorztogoP",
  "key18": "2QZoXxSKZtKYoeh3EX7G9r4riczXnBp4M6jnUgrkRpKekrdJ1kdtPqm4fiDtYAc5Q7fcaPwhTJN41YwCN2f7x8XC",
  "key19": "4kqZZ1pGXiVHLQgQ6c6okPJUyqc7wooByGYxM7FLP9513Qng3X6jmLX7FMGajehuo9RRrAHeZQw6s6bSVVn1iwaz",
  "key20": "5oef1HzjXY4EeuqERGi2DtYBHmajWhp1t5SPdMsLyavRfs111QEajGCpx4kVCp4oTxMYrdPhjUc6EY1qP2w9EA2U",
  "key21": "XYRGh5gXSDL9ekWDeUcFcBrq74BtY2B8JHU9CuHH8739vCS77QWL9B8Bg7LRk3n1mtGoQK3LskXK9LDH97gjHkt",
  "key22": "2Yi9LBxjfj7fBjVFT6AyLCKCz177pC473j19tQhZ2xHKtqfTEo1ePY4BRBYvAAC3yVABkU3fA1MT3qDn7bFWRdo6",
  "key23": "652gPpsn8wyUo82spdmaCHFKfv8DAxt8WRpNBMgEMBipQSK6Gj14bbyWK2D2hnYq4ApTke3cmZeVMqhKiSDBZqjz",
  "key24": "2E3QwskE9fyKAuGFKZhL4YT5Kp9UcPgHYG1mb4pm7hb9LJXXeGafXEg9rLG8kN2Ch7KTMQ2tFLXYvqaD5GB6vk4e",
  "key25": "npYkfoCv3rENUKuf1ycT58kMrc9x7fzxWeChqAx7aaTqiLJ8MyBpvAzBXWkdY1Ch6xAEuUqJUg1G51o824oVzLd",
  "key26": "4rKKZJiAB2vNuZVnM37rZRzgqVbHstQWLqEuDtDFu6EcWaLwU4WqiALwHnXoYEo1bSYp54bBiKAaEaKWmmBK2ngr",
  "key27": "4Uhbvc6pLxoHxFNu8Xp2t7ndhYwEvmhxFyUD27aDnD1tJ21yxRoZYxbP9i4Fr8o1zJN9yRoR1jRsYRVc69sGcbxw",
  "key28": "518ircLYvNK1GYBNRQomTow2JKRkh6z1WjFxFk7QBgjbfG4MZcNgd4Kr1art4b9pd634tUa2zEuoZ5ACGyX1GqjK",
  "key29": "635mhdaeqg3ZQdnEohQvs1juEhbp9c5xT2txVENEFPhqNCBDh2M2Pqm7qLX5kPpcQjJLLxvVzCgfVLRfnhPghdGm",
  "key30": "nxEDpnDNZaEtxmeKrJZNYfC1qmEmzjfgziF515p5BCm5Q9utoZv3qQgmp2gfHWem33MkvbU9iCNZEsLDsUgxgzN",
  "key31": "4DpEhVputCpwYBHYvy5rn6Fhqg5D3kNEawMUA1ENgDTfAnFDRW7Bf4EGg2yirxM8xKmDuonmNwpa2armY3SF4Tim",
  "key32": "46uHgs1ahDup979BYZ99FybiZmbNZnyyqgHpPGh29q2iHfPVgG4xDCvDhf4QuswcLnecXNQjSv9WvVvjqsCE4CFf",
  "key33": "4bCgPitUePzm3bJvuMKvxzogPP63rkfEv1g1Bq71fNCGwrZXNLsYeYDSww3JyFL4wEq9pM4fQ7rooFaDTkeEKs8D",
  "key34": "3QikhG6mw38x7JjmQAggn8GHChAAKJVBx61U8pSgmjwV427dadAY4diNEzVDmkLx8s5UbKQJZxK2x1xez3Yte2XA",
  "key35": "54B78LFUXHGndQNVJFNYSCjrXQ41dcjt9ToUSnwRcngWF5sgeks71hZi4AnWruY7bBzXoddfmLNXs7CaNQMDBKkG",
  "key36": "azNCshN2FprL6KKcpnAe4dzA7sHBRs7bXWB36MusWRUd5VgBLt3Z8xZW4BuAdVjWd7A59x1rvm46PUfBjBRepwH",
  "key37": "2dcHMpKsAbtmau5CMK6rxGbPbQr9M4gZgshDoirVPyafiA632QBSTPNrN5TQ1W8zFbXDTZGkbhrzbmnFV69CMi28",
  "key38": "2u2b2re5y3hLhJYb7fttAhbEfCSAoo2MxuV7PiRWr7knaauPHEjXZoDyCmAuuitadPy5EaZvoFV22ZqLHvPRofyU",
  "key39": "4KsFfUYEByNaJivMsvG21eSstLmcbxqW2d1gqSqav24mmXucaomCkfHcxVftejW3XzMRDPS3j3TubyTHDGzZ6VTN",
  "key40": "4KM6jHtqRkGTmGnbT8Kp1aJcPyGps3t5W3zSF4yoNRJUdUVwPFJW9sqhy35oQuE9QE964vkCyvfAppZBdda1epba",
  "key41": "5KAtXVNQFnFvfL5ptkHH9CNkxPocGwX1mXCvfjGk4GuSzrrQMNQQ1cvmK2XThXutwMFZt7Z2si2f3CBi9LHRHesS",
  "key42": "5WkWBA2KCmw5GVHdQddmhssqbXuLP99QVmvrmFqFG11NXHPpTyJbkKS1R125C2wY6dBTxAmvVSnCszhwN4PuvVpZ"
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
