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
    "4WWaJftkMzwGTRwsr6td2FLZBLBnWmChsJ7V6yt1pcbwiPefW44vZACpi1EUZQpcKGVdMyv41kUUVigD7CfiWm32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvTrLRscFSKaN6XVqjWR1anQT5XfqPSVn7Gu7QbGTCQGGJ1N7ia32vnEaHCtSRRpKLrvBBvdxHteC3HVUHWJ7pc",
  "key1": "5PqZCGXqRnqME9KHa7C3wmZH4oKRqYdwUZkb8se6JAxXtn346zm2iw3hATHEaAbuZGwKpZbe9Dj2BPSRwDKq3LLX",
  "key2": "3gtJZyMJuHzExfD7Lisra8HkFh2Xq4M1P1h3V3pnsvFPs7m45N8V2Dkx4GoKkurWHtwh5s6M8gJc62PSbvBR3BEr",
  "key3": "4fg4bctQg8XP2wVyP5jSabWpUEiHy89SxQUuyTqoQjta9k954kkWjGj3VMBynYWWy4DKLm9haModmyaFnAazt1iN",
  "key4": "rp6cnA7b8Z9b2nKqXWshJ5jwcrH2rqZNguB5ps3nGWbRtzQA4KovPF9NPawB3pwLzBEznaC83MPLKabdFaY2ycT",
  "key5": "2KEP316VJ2mkYdTdA3Udc5CBJoi78AcAeiHjBtBo6rxn6W9ERX3QnzEfWs1oWXC1Ut6LAa5h3pV73P49x1MiihVs",
  "key6": "5qGP7pg7XZ1uHsWSGXpHDM3ZGx4iHL85E4xgeMyScggJ2PHhystXDprvEmTAY6JTCJFkdQxmQFrBBSgJqEW2qv6Q",
  "key7": "5VSQ2rFhiTHaYyjXi7dD26T44pTUvwibGhaAFer7NbbKTkDhw5JnTo37CXfD5ipRy4oqW9VSjSC4qYtnn73dtec5",
  "key8": "3wZfPrzQVW5C5VTuEsaFMZ5CxfrW63ZK7snncAijtueDjzRXxWY5DAzHDZwtRfJDRULRBQCbHiXKyb9ZdYKV75JG",
  "key9": "2wSiNZ7bs5GsnGa2jb4YL4ugHcxubPjaQtSyw75jvhJrxrFqV67WKWRud3nZvdzXu3Pix37CDoVmavgWh7k8Hffn",
  "key10": "mbafdZwTtUokBjvvH21qjuJSY1yuivkdZ8Lxx7yM9UVqkKuD7m1SnaqnZxZri7FaUo7grd8oBZgMEjU32GrNFzN",
  "key11": "3YqYPyoWbNsvUVmpnGHJfbmEPNC2XfmrxJrrD4RpyGeQbjNmaJ31JymoRQV123MTmmRxQ18kLujdARAXfH6PdMNs",
  "key12": "2KGMK8bE9r9Y7hhj4uUkBB2k28K3KS9FZrUvbJ5u1qSTWBi23pgtNtTM1rK6tNyWe8jJmGTYQbtrYNdzqHgKgBzQ",
  "key13": "MfEVQ4jWGbBwYqo7aqgRdDNx5f7bRGcv9VoHQmbLHynrfjMRwr8JPzEmau6wHLXhkvh5qQuf2whEh9tPYLqwT7k",
  "key14": "2KVREcAue5YC4TDRpiKCufR5FsygBwx8Lo4x5WRpxTupWXdYMB8y2pmMusCTuRLBRDMNFK82vX8J65Ys7PNH2V22",
  "key15": "3wVjzrWZb2QkLEcyvnERkWWzyTaozY6cbJGJoao7z66YJv7AgWR7WbG7Po4wALWYWMWRP269eb4qNU6jbMirNSWv",
  "key16": "5HfXYPrPQbFJ3FWpiQWfx3dDvF656rEU4sE8VHyJGPfEYwmP7xRAL8CWJ9ncx2PeQLn6GWjRg2QaX4gxgBUtGwUC",
  "key17": "3ZwYwn3J5iEBiADGjA4F3qJHnFvFLqNhmRSzbSsqxw2nd9YfjnkeXSiBrFbk614eupoDh3DSqopycqvHsF3TpdWE",
  "key18": "53WfZ17vmMCahLG4ZMAh1TBn1pVRaDQvaE7eEL286MHCevwDWWRm3srZVzWj5DyRWjUVQUBcLtTwrxiUWt8TnPSA",
  "key19": "LxMwkT97KRftawtMDcDX9KG4uMZ71TQToCFpWUQTGycrwufThkEM9f7RGWUhL4NqzbEiQrbByXpjGDrHckxAejP",
  "key20": "21RTjZ5urkFNmyk7KxMYavLKC3RaAaWfqJNVyWPzcFSYa1CmvaAFLUBX6MuQCigr4Em8JzSJNKpG5yCDYWa3mAxp",
  "key21": "2tA3tfwYVS5PKCKTUbrPHFC2beTDU1UXJtrofpcLA8AMCAf72BrGQgAkbuCo6QfRQWtEpPyE38Bi8CvZowtHyam1",
  "key22": "4dJ3gxHZj4BrmWTSbLA1fBGA1wox3Jf1w7tMFunQEV2b6cbKoNyHysnp4hj1PpyKL21PktQoLj1wtSNJbPxAFNqy",
  "key23": "4vZfUJtLYAtP8LweaVHb2FZ9ZSAaQ37xNo5fHHEYDASUPbpEEQ6oca5e5z3UF2JDmwPBWbvULqacqyTXEgm6xFBj",
  "key24": "2kfSKWiqNYkouffDGtG4VydngCaTzNvQk8DgfgdtYxDmxShgH5ji3gy2yZnWr6vGfqTAZzmPkybFFeHq26YVZQe4",
  "key25": "3U5R2S6ckhckt8LcWVybSaSJarVzNKCMixcxPzgtXrE7P4g1Y3gu4vVdmUYKk8otPDypjGvDau5b8aScEtoQbPnA",
  "key26": "5Rrq34wR9Z5xMD4z5nnyt2vcjE7DtUHtsoUqFawoDiyJiaf5nXD6QfUwMUpsWrbhaE1gJoyFw4RXGhTr8pBEsQ5q",
  "key27": "5fa2faE1eVBbBpwER9HNit8TEHn96R5EZVqPs4hJuanTPK9Cs3KkjUUhrRv2BSaQhnXAbedVREGm3SPgq9ZXHCvN",
  "key28": "pFsRK1UXQLQSRX1Q4fxgsDF59WGsAkZoDLyybTbrAeuujNLY3PfK9EFSYYUUnaciWjTSHYtmPPJcXtepDFJ4gf7",
  "key29": "Tu4wCHhuiqxCFKLwrU9S7C66cNH527hwrT7pPjn7sMsbxmYs7M5rUGcmXeeGjZxeVwmKd7bXaxj5uziguhJ4kAz",
  "key30": "37q43uKGaU66dPtdMXqHrcpJSfXQ88w2b2MFn125gfVKDQAYhgnnEhYCtRqdcYMpczQHAnS7hCxyU1F9LM23yexL",
  "key31": "5BMyFoThBCZKTtdYgMk19DA1kMaYWz7mhhKAVmdWJvPMKc7yz2CMmRX91VSyRqc5RgLXomT27z2dWRZDtfwefDUR",
  "key32": "4qCj5GbRbjoZnMBmo781HDmNR9hbCvb8TBsgyVikX2o2GGMxiVyUDGAxoZJczhqnWfN48jtBKeFYms93fBLEAFgh",
  "key33": "5dsDowunD4u1ZMzSiURQtsdaW5QVsXkguwnZMJ3pHWRLkZkLCrd2LQoqdXMQhZ5YM4bb4cjKgHm711BviegHAwUr",
  "key34": "VFCGyjUUSPyTVrecXzXzequdnxmxsGq3voq3v362FwdXxjXBr5Fc61gBjsju51qbELCqwGMEVYyytqhKghnj4Ue",
  "key35": "2SWDAvmqB8CfwPLriLYJr6h4ezCXUX8NyxoKw93aUMmRVfsjFPvJ8n2Jb7A2XreaApiw7ptxJpAcqF83pTugHUQo",
  "key36": "3aE4UVntWvaHuLM8L9b2oMKZ1zggqAUzxCAbddpV6RSyax1iEyUawFfd4XRBXKXoA2Q5yjHm91PAFYVamBqdhKDT",
  "key37": "V7EFo7eakBuQHy9BTfeCYaV9tasyXhgFg4mD8GRzpy3KYWiQmGQC5eMUhHceNSMzbKKa6iwRHAsQsXFMcsp8b3M",
  "key38": "25qATp2iLkXHNnwB1mAVQFzaEWmN18fjLrSvgYzmC1dWjbH5X9iUYfKhqmTDf8TuW6KGCMMe9QMiy1v3PGphx1MF",
  "key39": "2ZgwoD9Y7WBj7ALGWBsWXBothWoA9FLcUu9X4x19Sc71FU6cJV9qmDZPxtsoYrmK5LEDyMaMQ4N8NBHM6xaZbpxH",
  "key40": "W2rYqvj5aWNrweSh4G75scwBiYqypcgPjXG5rw92qXKnyHUJn9wGh2Y7mVHybiQwjfSokivnzHGf3ELc3qFGa7o",
  "key41": "3C6hyEmXFpsE2wZAfbWnfVWrNKVWXtG3Z5jYT6AUEoWhDoP5rNjoSuhdW7FyF9xV5ZiVP5WSeQcp5k6TTWf9CDWR",
  "key42": "446jbW6AF8VSwW8uNvtPBUPiftevHADV5tKTrTajGy4TXY7CroA498e64DJnWE6Vcf8kYdu6U9CBApbeFTariGxC",
  "key43": "3hPogGFqSqtmuhUR94B1mQBaPSQ724AGg51rgKgrCAXq5UXjZe2fuDidp8x2meqJh5bLTMt74FZgAYTRzpbGZzGz",
  "key44": "4RqMksZToMzbvjfamRLe5nB3GVjz6uWftjavk8k3ZMmXgz2sxHrF2kXeE5gBjGqVDUgw5uxneFeNeY6KZkwwA8VG",
  "key45": "4YKQqJ11gzVQFgJRha5zkMnn85HnjECS3bmZJs3J3Cwe1nPX98SwiAmqCsxwjo3RcwDovtFBNLtchy3BA9cSVLjs",
  "key46": "2WiXYgBpoUtYRbFr1H7ME1YKJiwKVyvfbNKnoBaEAithpRMd3v2LzdKD2VHvHoV169uZVBtyEgL2a7JgMqBtV5V4",
  "key47": "5dBZYbw2FTBAd9AmKy53i2yhhw9uyG7dJbaQm11WfBJZUvZWx7BnxYQGibjqbrrMDax9f5Xoe59BQJFLskDKL3be",
  "key48": "HwDj2MowtWG5YGUfDqvACJemRr6xzo3KZrjpvNS7wDrPn2rPFFa2ZCwrRe193kGcojAEwUSS1d7ntHrbgfK13Wj"
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
