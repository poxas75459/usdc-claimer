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
    "28ag6SGDLfK1z4vQFYH25M6rxFPhU7VYjeXo4nju7Pa8S5CgzJeEQKsTVRNu6b6NSk2BhsEHTud2tYk7nbJaNRVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWV9bw1rNacqChZWHzLKQuLTFqodZB5zbEBu41x3orvmzkWMHJRMejRjqr4ALLRPGQkSaqCVZbsn1UVgVwEtMD7",
  "key1": "2t74ZKS7occabc2mdEYdHdJ14DkisAtSoMrqsKC2Q74kikbH7Kebc1WBwE8ZfFDk1aXV4VL5uKdYX6XtEhjCxFcF",
  "key2": "5WfstFC323wnSodDWftsjER9zkdczwAvgG6TPp8kABfbjHQgqu9AzkpkEHTFouY9KyvTNqQeSkWj2BRfbRhE52mc",
  "key3": "3r5XpXUexXrm4AnfVj6zpuCym6QwV9dVxxpeERsphayQ4eDe4Em5z3n9ahSVXBH5evUEAhRc8ZTUi7q46q2FxRgr",
  "key4": "3tRAjRkPhQBk5ipZQfU3BSX9XXu37daE8SzrLVqQDghhzQuAdjctp7uiEnK55aopcL92Xkr6d1Z4E1zvC4aaNyP8",
  "key5": "etktcgzC51kVmzyQw9P2V3TEintug3HK9dq8kPP97rN5YkXXmbZqJPB3SEGELjqy598aakuFnWkzGuYH5A1oshZ",
  "key6": "k1JdicfvCUtGWjhQDxfugx4Wks4xxmpVFeK6TtFPUqfDVALuP61Gb25HPT8xmoG2ByiDnB5FeVXZpizkGMKxUZZ",
  "key7": "3KtmcX2QvfqAqo7U76KxUL1qJNJ3yy38Tmhrb14pFXiHEMtt8VoQvCXe4jZNMSTLPdEg6cQgZStz4vfPFSX1YCrD",
  "key8": "2uPJtNgE4JhSnmnzT9n14zn3ReCWkjpL9Kso66pjid8MSXu4fQCo4BfRKoy22tjh478aeRRqCBTffHRrkghm4qyj",
  "key9": "67Y2Rs2J1Xyg57oqjekY1cvfE9uHedhpRnH93SgBWmsoqze78HX33dnE9m6K9ZA3RADzdYm8PtQEKb1M6HUVomZr",
  "key10": "2nkxaofrTXRbd5FmmUmpAWczrbsGZcpw6tAs1JyqZEvzs4vhEJyWHg3qJyc93us6PtAfYtzLN8YaLMD842Bqk1Uv",
  "key11": "45W5M4CDFBhk2W4GP6H8r7Qv2Yh5gQRWf3PyaDDsQ47PutyX6Jptn48db1dvyp9VNqPdJXKUP5wwfXJQDYWw8eAL",
  "key12": "3fRsHoEnwUbEvguLGCpjShcTmEybJktVVspwE6BS1oMK9VwL9rLCy7fGEPXVbau3pmWxAYD73V9fDEfuZSh5pRV9",
  "key13": "GDRZiYr5faBzXm6tZxaeVn9G39JXJ7gvj9krVMCXHMk7pKoRxkYmpPdPm3MAPkyYTqwmCtKfB164Wfug9NVNDZF",
  "key14": "4qx8B8FFjNd87XcWE2T1o6NJTQN4j1S1KzPRtfd7EGNP7z5Zhg8Z9mpoqExLLGP8eVHi1H1G88jGkf1whuKUzs3y",
  "key15": "f6P9ucTFueg4QtAAQQsnUng76U51FCfW7bizKXm5hp7RddxDLRQ4ufqTcEhgH9gZrRPnxaHC4V85jhdfynAN7Ye",
  "key16": "k35Mp5rbu1ScuBFKMZC8n2t8TaotiwPGWZ3bUC5uGXUYisjMfQqJh9X6BCqcMTNGR5Wp1upxEP25z9arrS8tDgj",
  "key17": "5mE9CUHuuM5triNTMCJNRVWMqkkJx2tz91KVkB1c7nkiQZStbKCx9nFGUAVkop39gsJ8zgxaEKWdB7fkzWdhWSnK",
  "key18": "d2pESLsiuX7pHAmR7ZX2nkJszwxaCVuHorWXcnVYH8itcc1nPrqgZcy2a9aXQvCKxQ9U9NgDGmC64vE5Nrie1ao",
  "key19": "2kBpjrmQFh5pfi6R41qZvvkKLZrmZVNctwjaVpjYALtUoEXFnLpXMZ1BqPqwtdtG2Vg5YuypHGHZ7Qu6mb4EK3Sn",
  "key20": "28TYKccEZHxA4psBdkbZEnR8QTZta9L7WarkKARb8t7yMenvRH9fdAibwnJv8s7pfLrttQKPKXRpXZ3mVgH4KpTh",
  "key21": "2WPEDbcTmpPM3mtiYb2sMUimuYf7gCWrhSQz3GGQAj4GzyRCJLkupgppLCjCF96ja6ELfHquPKtvJ4PfAmYsYgNo",
  "key22": "4ttTxxt4L59vU2axQef5zQvJwi1WtZ5ZfKGyb77wiCC8Hud4qHr2SzMDsbreW8GvMQC3WgJ2uFNSVGSEKtr3ye6U",
  "key23": "63FdcBnPrmpkthTScARhcK4P5kSCeNVDFHvF2J9ejP2pYm9rzPAenJXrHKAGQs5eihjMvFXf9RrG5jxyTHG3gzGy",
  "key24": "cDFdrzYH4hE1ZxVJ9iNdbjAMNHrPcGmcte2oSwkNHMmmNTo9ijsMJUm1ggepkVuLxPyA6pUDLccCLuJWFyb79To",
  "key25": "2UqL9kSYdrZLbS3UQC9hiVL6R7zF6EVX1bwDoZefA9JTnTYTQ4UTSM9bM8YqQeAcaUjXE94ikuuP43tNGWah7NL2",
  "key26": "ywrRqjEzmUQ7jsZ1Wys1dcjB3GCvrL8ysuGpvyNfhF8QjsjPiY8hpcmS4vey5qVyyydxYGtqzM6Jp8EqygRoEdJ",
  "key27": "4niWbBHSBDZWjW75PhNd5v3z7DywvMLgVweK2pe8fv21kr1UME2iDPee6NVoFMxzwya3H86KQcM3kYmsJypYjwmq",
  "key28": "yGxpfAnRpvzM7xwhU5NGmYZWghveWGkf4tRZwnw9V4Kv1W3tQbMnhAGrqEpA2aCpZXHRSLfoNHbynnuW7K45xp7",
  "key29": "3AFo9L5Yir8oMH9UwWY6kZxYrDZUsaKkMLZvMNvgMFZHxQ2kLKJXEQxpnUsBYGrjgY26KxQQzcQqLNRox9d1kEpr",
  "key30": "22o5o5pkK35ML5Qatp2Lhrn31TaX8k1nzqCXRsbZd37PQVMN2WBr7kfUo1F5SqE2aqdb71hHe5zXNBwqZfHUA97r",
  "key31": "3xWNTrYjpq4i4UYCVVjEsgxwRCdAZtbtVRgKpG6gpxVj9kJ7ryxPEXfvrWSSYb3DMXFtf4xQ1dZnf9PQMhHm6tCx",
  "key32": "2gKLUGB16UUKiZ9ZVh63uYaSdT22DSH4dNkFbgoo77EjG4fy536W3p3TLvTu6xv8W8Ygtbx79RrJT5zuU4XQ3Js3",
  "key33": "3hWYurX6Thj7GLZZxY5MzKzR75M35TrRxcTV4mdcApRshoh8tXvvdTUf6Ba4GmkkaV7ggmfm2CAxrFogLAzmZ3C7",
  "key34": "25obvmotJj2FqHftxK2xczb7gFZxidsiiwW59Jnjjtu6qaH61FEU65MoM85PdKzToqjzKZnUaCJjH235M4LaRZRq",
  "key35": "4rDSeLo5oejMfhJjoHYCPytGSdm4DwktGED1RfPQMM7gzpwGSUkaoNubvwR6brHUJVTrXPmemgUzY7hGQweReSVS"
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
