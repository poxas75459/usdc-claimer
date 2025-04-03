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
    "Leh5ZbM6HEq2AfABU5GjJDguDPc7wayEXtKAZ8hM6YVYMgFwPKY8Tk5A8dQ1w3VPYC24k5vRrTmEbrLvseiNR2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eVzxMDcEjfRbkLit2w6CaieXnrkDhDBKJmEYyXSzyCZjuVZrngPgQoA6NXXyXNzwJh77kMb6Da4Lrgdzidc84rj",
  "key1": "ZHA4HV2NxJBdosFoyCaajzu5WWUkqaLd9AwkX8K79YQ1jNsiupF5iKdhtS4Q2mg1VewKFCCbGKaGanBdAyEK5vy",
  "key2": "5HDyk8ZjnbEmz8qnCnmcUp8WEh9n5msbvGi6mZwizyGzoPogNkuw7FTZEPpZmwNx3BH9T7rNtKoCY4o4fBUAdnB",
  "key3": "2GcjDP8H8jGpnukyJ181ysTPDDP8bTE8DHnFxTxuWfvUT8TM4SBdJ43QEV1gdt7oFPBhgXjc6VYQFLSzqmPkRGLd",
  "key4": "67RmvAeyoHXEpdkxv8hXTujWHhkBzLei75Lke6ASWZw2kFpcNQ3wY7R7R2JpqS8BTVD26kh5ZqjppNTLLz8TCnWz",
  "key5": "38AyKcPWgA556tU674sNsmwB2TWLj4vkAJFxBfWYwLsAac5YUrM4WwYuhFvFq3Ehtm76qVBxDyUcUJVzNTqYHHw9",
  "key6": "4FFNmiJRVXNxEtKtr843uRBkf7sLgxWF7GL67iMwVB6bUE3VuMULPayAAgY4KqiHEHhCEgnXnGgGkvuTxyJrs5WH",
  "key7": "2gUAgqn6UW34p8s7dpB4XroGL69vjL8oy4SftqTkGHwTFbmrjcnfzvVXcuuLpr6rdRnDQWTAmxVUeLBJYNcSKMtY",
  "key8": "iexEKxJtNf7m6PQ4qKNyqxrHGo44NXDvugsVCravdGeidBGWXrNXj9AWg1WXLJG2XQ1gz5AuYBF2u1rQyEG9boh",
  "key9": "7twoCM7Fbuvd3cJygW1ctUQ6kDG1fFZi7q2HJkZ88ehbuBXqe8Vrwf9zfPmCVZ1TAKatNEVb5cN6nYD49yeKcuG",
  "key10": "4ZbwX3V2TG5Y4tBUFvnpaLHsE7KndD4xNbCBewBbHcNVTbmdhbdDAp1CaCup6C4iroVWiRWHtqkLj3xUrWNJRtby",
  "key11": "57jj8Zts376KNh7s6jj5uP6BFqoGNiP8Cjuw9eR2zie5cZzjaxHaPi9qi1Snfuh4m4pn4pUpNioFXhP3Acb4L58U",
  "key12": "2msKAoQHxb7ktdhg9oDCHsQKjB5mca4fcjBYma4cSGqzqq4zHhUW6NP3x8D4kq74KJ19u94ceLBJpyUUqKM34iW6",
  "key13": "5hVbsa4oZ4aqfDpxUoCuQNFWxLuFmkv6DJSqe6LM3caJKFBV6jsUrKpmenjgjhVZx98BpmvfNshY6kmHJmMbdJ8K",
  "key14": "gRy4om1FmSmfab3bqz8V13yQzf2cG26CxhVccMdjSSQjvYJkJvajzeq4SpixkfK6moCtVNDqwykJ4zAUXGWQpC7",
  "key15": "3LE2PbA6A7vk1uUAMbk2EF3jkh7wKLntqhuvTQ4N2VeggJcLAYMw4a5MWPcj3Zatjk5Fqz8middkEcqcMNYpbErG",
  "key16": "aKd4Y5wH6g7wrN3prQcrVahs6y1w5zJw3tU4X2GLJduw8nsWLKRBur2QoLfc77zF1dQypBkb31mSAki7LJRAdbL",
  "key17": "4ismJxzcTG213frXoxdvjDgVBe28iVSwZpGKAHDd6HVNKY4LytkNKtBT6kU2MquFhd2r4EWqXjrR9QxYBYki5m2y",
  "key18": "zwG6ZMnxXWksjuGhjZcjABKAvdea59AQtknVvdWtiCkjDTTceqqBETMZ8dNghJJtDwSi99SwboNJK7on3FwQFDx",
  "key19": "4Kzy3ab9T9uapur5FRXin9m3Jhb4AmgxS5pWdgNqKvsk8N1cEeB4AaahB4FxswUBXjNHnJtYSs4F97eh4qpT6SgY",
  "key20": "3qQT5gp2TuVAgjQ8zt5RyTGAhkgs7WcQBnvwx9CVmRqZJddoCqa2srvA6pbSXVPgxxFrzQDCXZRENMzQiwPnRSgb",
  "key21": "zLo6vY7LYu3Ttx7W8C4nSQhvmuDGQJSFrH7NjXVFvb1S2R4UEo9jmrf5UKSnoAdfUpAW7wqLDfLHhS4rCf5jmyw",
  "key22": "3fASLtiT3hEN7Tw8A3GrEf2XYnBzjgS8cvKmfjFfJesNa5yWmsePr4kCXbHFAoCuX5brHw3ZBQJe91yKetfa7SM4",
  "key23": "5u7SEzn9fjmj5vvjdKAAbfVcDuZpjQRkfuJhdz2DWaFWW63RARtNDvSnFQhPr4EMoE51o4Fbrmkinxs4DwgP64A6",
  "key24": "48SyDiYXMR9nPSKxhUh6a6Sa2aN8fcdUUahgzDHPcFQmYG62Eb57wGJoqnfvT7p4ZNR2TGZwNHMveYgbeTYVfqKq",
  "key25": "PLrMfuNN1NpNX1Rg4hY9NG4vdQVDudpDeotD3A3JV94HxUEEuFAAu3iNNgfNKep1xQhHj5Uox8QFzaMGPwbVpVy",
  "key26": "3wjBtGqsvVr79GRVbktTFhNQ89jwCphAhb6EEPMQ779S3EbLtueMfZnBD5N754R4QiCkZA7WwwqZttGvWyog1WED",
  "key27": "4g6UoDQnjn5SZPNHQz8Ge37uXobwFMbbc28GVxTBxUais2qHNMEkt8ahAAZtsEWYi6RmaDiKQHvD3vVnPDi9HRcj",
  "key28": "3HkA2uQovtuhW29JZv3DGjFX9mzvpv34YLSmSomfSjuiezks322Ai6hovugeh6w3wLDPZRyDzYXQGR1ve13AVMGu",
  "key29": "2HNeXEnoHeq7B6rLgdduxj1GPY22cZe1UCkTERZ2g8m5z8bbrZ4ZUYhb843UTEMwJHrSjYXBfoa5Ty68G8sQDMPQ",
  "key30": "2n3JgoSn35MM8kXT2c2KFFjLARLrh2JzUMc7tfsm9E7zifBRN8KS2DSpPicNAPqqYbFeYUr79srwdPVLz8oLSM9w"
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
