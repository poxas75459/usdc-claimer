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
    "2p5wbi3CZsafH2L5KJnQtcAkaPeJVcqbMoXS7yz4LKrhLhR3EdBcN3TfG9tttgZdFmNmKFxTJJr96guTzoWrmnwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wcXZBeUe8mEmX6s7i1vYZLj9KeFP562trr4fWBuB7ju3FfeCbYEKPG7CjJNz51zYXNBDpMA1yCvRjVFXwWAavXf",
  "key1": "3DwWjjGm9myG3fht8YCSByRyi9JuxdDspQMe5id2ekJU6UzEQ68xfY4Hr6jUu9rvbBvVQ9px3NidGaCgUAMp6TSW",
  "key2": "45YQXp8arSyUAVo8eDQmC6geGmt6uB15y8afdeoPUnbw8XxBw4HdVXA1rTuDYHERnFCFkpq43eN1Q9ber3vj31NP",
  "key3": "5Ghbv1f3kJ5RF8BLfGLwvwc8QZLqLDWxPS1kqmAaVgARoXeYFKxQSpdzrge8pataDigDFw4puGX6rSYa8cSV5a7U",
  "key4": "dZFPCxNypQFPg8i2dfJcGvxa16NPVRmcZfdNdxvvHBWqcqePPfujzDgn4DmwkkWc3w7vV9B82idhzsKyoZavTHC",
  "key5": "5cnZdAZGJcQKWuChr9CyeZVNYNdyFBXeFSX17q2PfaVHtdhi4Mg1MezdNz7oXtJYapmKZAA92xg9Asvj3urjc5Pd",
  "key6": "5Mj7AdmkeKzTTSwQEJZaUzgk3ia6SDT9hTTFcyUQfdGeTTk1yMNkT1343nCkYeeMyS5mdmRrgECN9aJiQq59kwkT",
  "key7": "zzWPMBejeGPbnEQoDwVkkdTC2trMNQGwDrwK59gp85PERTDqiecsKMCLDnYjUMpcVCf6u3T1k2ARzwL8A3S9nXr",
  "key8": "Qfy7bzAZokRnr8FYePGUdzqd8oqHajD1qapmmzeVLoXPPRHRT3xnJiLa4AQkq7252WmhoqTAJARjQPm8CfseBE1",
  "key9": "2fZFSpL64GW63aLbz1XcSyxJgVeo2kq8Cu4qNk2Xo4PinWY8LZq2ARniuYV6ijGq1fkYwFxzoeJsDcoMGuEPXyGY",
  "key10": "2k5pbDRhnp7BbXNMZHCNhRSAvJz6PpmvFWoHZC1CdEV4Pk4RBp1w8wcNksTnAbf2enhXA8x9PFS5pc54H8NNxb2r",
  "key11": "29iM4FGmcf6NeecRWqbkojSv4PnzXYLKxixaSvwJYdRxKrQ6XBEaWcvfocB7ZWkkXfCB3Zi7ana48uvjU1UGcMo4",
  "key12": "MXEzjnmdhUFPF9Rbx7QoCcY4DqtECyXJ7inTCDbJFVbwcJjVaN5NBZGnB6gPNdGesTarv5hDG7TGbPwqrX895K4",
  "key13": "3UCcgH1NkzaGVaLxUwD8GyZP9wZ4LvCpZR6H9keDkSLZw8uG7pgJnemRqS8GzExhidNJbrbYxvuuUSKsXy8NbBHb",
  "key14": "b4vtY6iBPe853AavuGSUUwpcvWLxzMPndJkipE5EgPT86BzwepV7rpm8DKsmAWnSQYUsoqnjue7TgURm4KZ6usL",
  "key15": "548rCWBN2SniaPzJgKxeKV6kr3sdg6ypzuHUpsoaX2iqSKQQ7Fm7ALnDudpVvo7fVXA7QqVL3WA6ZsYP1j5xLNU1",
  "key16": "3yg1cnfKmGc9UsgajayYD5Vic5dBkZJ1au1nJS6ebqATYLHMhHjivrrMf55KkD5vQqcfH5aQqM6WhvaoUwERJ124",
  "key17": "2LPPNwdF67YJFeSAZ3j2mT7usXJowGxiksiG8JfwYLG4BoAecimNjipL965xPt6yPiJRfzP8GJfhm5iFcg85exvY",
  "key18": "2tiLQt5LHyvC3mCm9B1zZc93XhQaSske4JfTffE21ShPATfSjMrvFKNB657deedPTQcN26EJiWmQ7QyTYkPMKMgn",
  "key19": "3JwFuvA4uNMk9JCEK6ZduaVAH93U4ccwiyraFzTAkHNwQJmgByjPUosCbhq5Meqx5GQQVkpD5mhyVfTE1BJgc8A8",
  "key20": "5VQk6tKZjZ81MonirXvKNLP6H2FqSmbNmARyBtmD7Q6ZjPSNURnjWmgzjwhC7tw2Ubpi9GE82nJYhQaysx4egcHw",
  "key21": "NYSoyy2qgjwEuyLaziFHUReUyQ4A615RfiKmYNtcn6x2Jr3SFi63q1HdZSwHzQwJfRheTUAeT3Q8rrMzpcw8T4Z",
  "key22": "3JtSrth5of8fDyCeHaCNPwbKrKsjsMZEXpukMaz53btbPtz5yssKnZh7tjXoky6Fs4weMrG8kgH4B7z8k6peiKjP",
  "key23": "5icnbB6SUyMm7rnbz7v5AmrAH9bs59A9QFVqapgv4g9umMz5ScjPWUYa1cKMaz8TdtUs2F3Zi51eafbycnm7tuek",
  "key24": "5VLoHeZx2TWT3Zrzb3N35rs5KrYb4JEDuz7TPk6Z4PmWUmAecf5n2Tfr9ueeH1Cz46K6CBmZS68GhGW4owoKyqc4",
  "key25": "3s7xxmCHVKkux5TsTtuS8VQB5PkdpGsXPDzCCwnshTpk7oMLE7ridMhr77EX4MTpVCgdosFDbnBhrBNwDXsEDJ9Q",
  "key26": "3S1PBBtk76kV8skHvHkpAwLu1CDmdNKAk1qSACdzw9Kvp9RZk7H62rZjJLF9kWKctUiCTZNaEEiR9bdZc6Ciemat",
  "key27": "3MK85JtXisqgRUXNh1heGu1TuQsGnL9KaHouAEyz4LkH215UjLCUkEhne4bcZ77rGGE9r8ubUJm92rY7PLfZkqST",
  "key28": "3Lvs1gFuyYZ79D1kNjsLB3uZyttUkAehjfgCZrntfSZiqHcjvhFQ3UjEPomQadhCgcrqLAXBDg6RUae9edVC7aMV",
  "key29": "4rCHrWMQbAatJFLSEWGKDMVq3QBbNQtjfjjTJvBa91yEXpeSJQbWfGPZfkWMyF8JskVHDi1D3SUYMnzb5t8f7XGL",
  "key30": "pijwTgKeugjP1CNmCMadbeaU9SW8TgY7og483KRLzFfVuoYZs3nVp2YUgXtpm3UgMJFgnPfVgisBjZmC62JsSdR",
  "key31": "3o3rB85U4oxrzPFoB5waDZMt8g4gQcttKCZ3Biuh8i6AdNLJyyTfDSZmz5ge2kr7wfTMwAfq758J511kCckMSakq",
  "key32": "2efLqregmumpgfx1ueaNF7oNWjCzo5nhWxG9PccDrqbMi4T9XmDGpe5QHxDUrkVqGwpk7iD2xE71BXbzGu2BScHx",
  "key33": "5SFpg7rxTgph9VkskU44Dieuq9jJTyCqksugQTWCFWc2pHgKSomxxXop6LhLzBiK7GEiaDkERzSFbCSQhnGETCCs",
  "key34": "3rmGojwguCPmojzcQBeV8eokfpKJHzF4RVNXYE5kijkdRU8Y3UVLGpkM3RMncRQ5bHM87LyDLDqAme4WgRCjaiHM",
  "key35": "3dXgF1z2j3BUGYZmbCFoWdZ6DgLGvuU7kwu8a7Cxo87c2xL7PPy91UqAMtK9tzbEMk1UGtNbYyotuT4eaYnH7fJ3",
  "key36": "DdYNZ3cmp6FGmoNJcZWKLZa8asvNrduACLSXiKtmtUkwBuQTzEULoWTZisty3Ad6e6mkEy81RaQ7M46YxCLs8PN",
  "key37": "3ohcR7a9WfVCXtXhk5Y3E6AP4F9K81W5Kn7YDKNxZpzXeXa4HxXJwhfHxzmj1FsPke8f1BUrvVSEH5Evreoratyh",
  "key38": "4b3phDvQWHXA4XP2aneo78RHFgp2jk5hWPw3kUvYcCdnDxX5ynoRn71XbpPvNdnosYtkHrJsxf9oug7fd7fB8i1q",
  "key39": "KmW2GwjGiAm1Td5GQbATpz56trnebgiowxN2HJRuhtTpg3F3g9xjemcWtgdn1Te5P72we49QqJT134Uy1Gr3n2c"
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
