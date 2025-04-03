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
    "5QvPfBjqwaSLKE9szBkbBjZN7eQvCazTEC7CFiwV5jZKnAjfoooHcyi8QRA4v6F55o6phbQxKUtJD8Et65bafQg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PspVxgW4H2Rd3SzbF28irSBgiw4mB3Qf29xcvzoFS3wk3o9mHZVAd8DLVefjQawrzUcueyZmGabKudfMdAHg9KC",
  "key1": "3s9SqBE1SfcSut83Sq3bgm4dHSo9G8HrGjWycpNYt2yWCen1M1uus9LnNHa22UmSUyfaoexCk48nuxpu9aEb3ULQ",
  "key2": "2RMtcTMTvnMC5KZ2HccyH2QkpRbLL6yUgc8kJrMicAYLX8VbfEdUa5ZBv7ZmpqpPCCoAzgRtbRY9Wir1P61UVeUr",
  "key3": "3JSrx2NHZ5EUzMsyiwvJaMUhBh797AYCS4J1uifd5k1ZHthLKihqRPYJi7xeQBASLFFg4ehs7ntrp4DknBT4FugL",
  "key4": "34PpJoXH76J5BF5YBfZuZ2kXQugwDQ1KyibURgpAcK83s1KkeGzeX48NfSK6Q7P6hxXoiZBypRsYrD1FdqzAVhWq",
  "key5": "5hyfUKNLUCgR3UzykptZvFa3Cw6FMBuUb3Qaz4uv4L1cNECPZPcqNQAFScjPc8FYTGDz2XH9JF6ZJ91An9Hb1adf",
  "key6": "51PyP18EErr4JPcmHnpZwShfDmc55Mso5g6PGVLUp3BQx4BrKZ2kNqjx45GXbBwYUswG787S8cgQQ2rmB6KnsmRb",
  "key7": "45dWamUBYTpgHLHBAQb16XJVt6YtLVek2j49Lgdeip8ffbkXcdkFJXdW88EUeu1cMiggYGDotXWZfkpYbkGHLkK",
  "key8": "5VSkx61hNbxBDivWJF9KD2NvDakPTncTPXwaFyFyfRN8xkd4NCxCgyo6XkQQ8BhcZHnc12qmoYeJiHjryoUYwkS6",
  "key9": "3h9UgEP3BwvRmKmbeaHmdSdjg4Kmg6imTeW8jszvF7y7K947QrV7XagThTPNNLAwUR4AB9GJNi3tnZd3zuwCx7wk",
  "key10": "tYZVoyEHrEHtHRXPhB441rEq2VM3w1J9riJf7dLqexzp6LBvpgBuhYEnU1CiS1KF8hHYsx3ehPUafs6Y1NzNYPy",
  "key11": "4rdRD3gVVBoiVfcvW9pi7cLX8YdnSJK7Ak5NXxLm9oJx2E8nLwErEHpLfuQwPcTMdLidChZ9gyTvcnXEtzPcdqMi",
  "key12": "5u58U4xht9o3JgGSU5aUrkNBAgkn7jD1iP9dYeRatpUk14vRv8Fzb1qU8GupNkDJq5GzvqRpcph5ks9pXwQ9iyrg",
  "key13": "5CBnEw2Fv7d9d7cnNguHrRzZMArrsHxH3vUgmqiwcM8bL2b3BRj83cvgJdcum1UW79fPRpwrmqiKvVv4dv6b8Zaq",
  "key14": "59xUTbQ613hGx6PnAE6sQuKxdynCZhgq5uz33YdDRyJPMwBD3MDeNs1x568tCxZHqYg5RT67XH2KVZWuKa5ifvVR",
  "key15": "3u6biCzyp9pKECpdADeB2cDfe57Eg3u1bEE9bEGkVrzPzUwDSxhaKzQnGzawBh7FpV7UadmQY1zC7yETrRJSfApE",
  "key16": "VLokfnRWFjGEz2YZhFoL1EWA1JYiAK4JVYpCcQJfAj2kqqWuZCs7UG2iteM8UTFN8prGcsb5FNW2reQKBd1Cvr5",
  "key17": "2FQtx8UehQDfruTZrJ6vMTRV6GAdoKEBycmP5ieZSa45nBpDctQwZAX8HZS9Eyg8pdm6kmTaVHmVcAvS6ijw73nC",
  "key18": "2xNmBJBMti4RexUMedrSSYSKd5hbCL87nWrrjJR3y72gVMUvEhmmgMM5FZqYi8rLyUEmZbB6UP2oLBTuBJhj877e",
  "key19": "3A2dXYA6WYqaPUQRYF9kop4hPMXNDvcuERx7zugUfen1wKVnk1fuPmUkWfYVaU6tTQD8WJbwsnjiR2z7jB4LebiL",
  "key20": "5LZhfJi34vozULQk9mvJk71NfevrJuzvrzpvjYTDpDL6jw8VVeLqxQZxwTFejEa2s3STifhGRjbYy2btTXWqYeFb",
  "key21": "uVGg4NLdKaCtNToGkTRqtiDS3H6GWUWqWoWbHxADHjr17qMya8jGkUSATFpZTw3tM747JoeihvFpHqJSCgRBJqU",
  "key22": "3xWyxuE481w1ni3VYkdC7DTPVXbFyN8ReX6ZUKHnQsiGUbVtXHy1o7HDuWH5G3Zc2kaVQTg6tWhdeKypn2SyogHV",
  "key23": "G7tjZJpxbwnVr2rwbaQeJ3Gpw36NA6qwFCZeX4Z9Rt5ozV54wZjnWKkT9H26HJEJw9M3b8tS7GUkat1aW2kNVkM",
  "key24": "3tudKmoK9mmrtQreSYvS87Bbfdqd982LuNoi9HDbgLnM4F9T9HKSpwteWo7Dr5f2TFaXzrJ3Y35kVknc5skv4igd",
  "key25": "2YRg5sRnTcNAYhJrY243czZZYrUXfwzXEAzoNiu4ybBFnTRETLu4QW33MSeEjgxmTKKiHnJF5CMr7SjnuKhodrjQ",
  "key26": "2U5objpRb6q5VLGNQ6FwEDWMxE5xxWCccB34X36KoK4ZF9Zw7r6QcNXp7jf3aoWMYfvAx2skLbULSuSAYUgZ4RKZ",
  "key27": "5tK121vKZqSBu9eVstSvi8B2rqEPk8s5pawe9iQHPaSWsRZVbsy2EDBRdH8GjHWY72e15jMMK4KkPwGkYWrvUATk",
  "key28": "2fWgqWJsGJ39vxVaPnok1kHo1MpuUkGzrjxnyo6epdti5Di978qmCtbMsQcdZkvx15mJWXDJLaiPXanGxQKVBMWX",
  "key29": "oBoUAHeXSeAz33apdCPQ11XXGmfU9HvUJDpoeSXZy1NWKZf93rFLkJMcMNffiy4ZzCsq6AYqG3tgt9V4df4fFgY",
  "key30": "45jyYhwPw8xsYJetFod7d6Tu9rqXBv8hTwgUqjGqJkyxkLLa1EHo2n9q3M5wft1ASWK2mKeUhRsTQbmMuUSK8jfq",
  "key31": "3h69ZEGNcp1zzBrxaaTNM49fXn5tyVEc1pUyZHu8U7sKUkP7hXco1Ckdr1gGVUZ1xc46fVPPevdQNJ5NEg9LZJ9z",
  "key32": "25mJAGw4RScoSq1Sb4RHDN5LTngJjenhSKieh8bor1Yg4pSHD5yUdcyAvDXirNJVGasaqNePAfE9d7pFVzkShCWe",
  "key33": "39fTVtMLodS97yCyjWtvJiGwNK1hpZmM5HwvLiZmH4rvFtSrEDBfhoxNxNY5QEhCWgvUoid2WYu2CFtG685XKYab",
  "key34": "5N9QV4SQA9PKi95vnvkVtXz9bt8nmyBPm44pWFqNW2eKK6kXUhBidQ19fonJFWG6UoXqu2ePtDWvnuMQuCC59PXg",
  "key35": "33cyAVrXLHUwi4K4qmWDgEJCvb4RdMArUFDSSZspDdoqRbdikzfLcqTiUcykRzkf89hXdRqJcRwWLT4QdnJjwBBm",
  "key36": "532hz1yywfC79PM557iAaXo1YEJDAkMfdLyFiymUKsrqc36FbgXizC6unSWJgaW9M8N17bTKG9vcxfLmepGSEMBa",
  "key37": "2smmh3yibcKJatQxSv5RA4VEiepT6spPsT3nGUivgHf4dNgFveQNZG5SKp1oRCK2dQT2xkepqvmjUhhaxEwCnAcL",
  "key38": "5CkqbWRPVTtcrKmEcEAfkW5AoTtNbg2d4mpHEdhnZcFnoMdCrMfcqAxHp78vETuu5GaTcGRFnNCD8iDb78HnK1Xg",
  "key39": "3mcR8ywpJChaZW8kUbRqRgitDPw5BmPZm57XAWSyVSdUKb8XGHJtDgu4NdZyBoMBjLejGw1S9uZWj6q1ZU88FBDp",
  "key40": "5Vaec1XTruCti3wwbzg67j9vTJqtTVJGbHDcSaqwhuuV1gxkLAkzegCcqcyZLsKsyWAhaRnhXX3sKh7tLsErbwwT",
  "key41": "2uutM45D7XtKtht62DpyowN6TqfvY5Ga7vZmyGGcC7dKb26vme9znU5ySQ7zCr26N8ammEgaiHwHTZfVyHL9prwC",
  "key42": "2j1J3hYtZE9JeeA89SkfK57XLMLU5JQdCGW8ePpfgNiihtsoPv5g82B3ggZRmg9Mvu1P9u59CBoZsN8KmfhDZtB4",
  "key43": "4DUAJJwcxsVpTiAAZ4vRsQYfSJfmf5nqhu3ytRvqcJU9docsX9gRkfmJvCfNZxz57LPGke6mRAoVNZdjwCbiXWrM",
  "key44": "281wBou6e7Lj7fgohknqXBkGFCXEtKbxUu4vsWT9jAg1S4GjNwfqpPFGhnBhGedvkkjprRTmiHqxYijaQrgW8HdW",
  "key45": "2qvmoNLXELbaLPkLTZVrKsV5dJUmbA7vGMyAX4mgcCRxguWtL5TUizjWghpMYRRwiNtbAr219ivEgG6zfJdQP2P7",
  "key46": "4vVSGK5UqNW1hkTBtw2e6DYN3K72izAsWTCoZrDh5G7DmAw2sSjyPy8JyZtQxMkN7eSEB8p2nFfU3quPBS9KjZHq"
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
