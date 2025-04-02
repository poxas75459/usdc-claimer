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
    "67cP3sf6VEdHV53NhrTRaFnHiEJzy28tu8ojzjs9PZJh3eYFJSgg3c2hKxsjzWbP7RMbb2TKKqX86oNLRcHtvS2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LbWo7WtkoGCZ1kH3qqvDaCp74jVXebrQdjyMidnydZhSNjBv18curWw4Hmb4ghtZATyS4yDDtojMjcj7yctNusv",
  "key1": "2CZQbh2oqbV9tToK8XEqxYvqhiNWhnnSk7yqavhQcUcgM3PL5JyeptMkqLQXD3XT5FMBtYgABS9jdwfVrRJkCedq",
  "key2": "3UMt6AfiaorYmPciouuDPaPLUG1e2FQK1h5p9CNmc85xjHdhxhixsrtY5bzaNAWrP8a8qSME6pSKpxnUSRhaDgdv",
  "key3": "gfavztvsN7ZhHxixamWaLGFnaWqor84GEePvZn8fmL584KZzqUEZNrj3zPMZXivcqa6NYoWMegwzXvdRqC5Dois",
  "key4": "2fgnb8Fbo7jCNV4QqVjCwjhSzaG7qXKJBCbXaPvgc4gowEKePvHJZCpDn1oVdAGcaSt33tkCQLaX9GGgK1ujUj1i",
  "key5": "3RgXMaiYqZPinDDvCGD2dcirr6yNY9zjEtyNnNTw1toKkEuiigcpUYwTKa8PaMPsiSJZa8PeKWMj1RG2zs9XwMpN",
  "key6": "YgUSDxwZ6o4HEC1vwKzpncS237U34siJBS7865QLZ3vNHEVYS7zyLJyjiGxSk2Y4oab4b3b62nv37gbMM78SY3S",
  "key7": "2ikBNS9tHUT4hkYzKEtXgwpZVKAq7NBFjUcv7vGYFtjGFsscL8kixU7dumWbcVcD7Z1B9AbdWtaFRRTEzuAygpkp",
  "key8": "5zwMuPPZuT3NKSKo31Tegkfu6AcBS2nwXwhPRwy7hKvB3ERmAsSrBf68pcw9h9dTvYdjgAQcAdGvxYFtt2huR6Wz",
  "key9": "35NzbGxDxSFFKpV8ra5wzgZKrucp28fWpEG8Nqhmfupr11ayJ14TUVbNxBu9j7b4XDyGTRW87W3hkJddeksDfRqS",
  "key10": "J7oUHX9VCvKju1b6Tiq9byyWZGa3FHqTuqEssTLYEC69vN38z7mJKbzZjxXCDDLuAaaQdVsQPpKrqYMywKJHxsx",
  "key11": "3gqcqr5HK7p5GAgSvpKVQwhzv8kAiUjKrSMELS4kLo9YhQ963AwXBD4SgSZhhRYcG3xFQ4646udURyU94oA1KX9u",
  "key12": "5uQ6LpskHPnRGfkzaw4F8YSJrWMUioE5yGyedBwSg4D2TYtbELKsoiSh6RAeSc7i1spWraDLuMc8vTTZMDdXiHfm",
  "key13": "EQT832QXK1DXpqunC2kihzE42BYYKEGfY5AyE3b327mB4sdfKoM54tQ81xRaHasDPdvfSb4XaA5ih5Q7g28C6X3",
  "key14": "2gMwJtudLzG6Ez26iQxqdgcTtfgdmA6cZ2HngRrBgfQ99BZPYb3Gi21G39fyYrSU73bqPcELwrkS4LjAu2dsEVNU",
  "key15": "2bGgqkg4ydBpBqygj3uWhGynscRxBSfQP5Mtcn7EEkqMos3t86RuiK9aFdbk6MDZNGCwaRFk3LQor7MEnPQvcRoJ",
  "key16": "472rkKzfg7AeLrVoSkse2U6ihTmwtW5LAQJj32jLQgS8rUB8zuFUe5jWqHqip6svxotzmZDbscF8HAsJdYjL9dDg",
  "key17": "4ZSf4VxLrKDz1YNUAayCaSR9nUEwP2waqkNzyHkawG36HKy7SGd6G8uFHadQvpCk2JfGb5KaLZo97t6NR25NrRc1",
  "key18": "5oRNtBNyk9AGaBRTdW9rixtq6LCEiSeoaBWu8pzqsWzZusCFCYXMcCcF3vfi6ibfenDHVir3sUE2LYdoq8RQ98ww",
  "key19": "5NPCwXXedKJQoGzn7QvvikHTzcRtqp6k8DdK3RWLdzCGSkbX8JjRWP7gU4xuorhSLjmXQttbJ2du9TK5mipzDZuj",
  "key20": "29868TNysW1uDcZWBD3oowQxKbQByKziVbC1xvG5MmqzzAjK8x5dLStuUW6tzz1Y7sLuJSD6ZyKD9Q1yYLRSdh6E",
  "key21": "5ik4T64tnoCU1oiGL3GEBRc2ctkzpoD7ueUouvJrXjjTdvvwhRUCEd5Hb4SDRiPfwoabfkGPpEAoPXuZvq6bvh9e",
  "key22": "xf3p4uS6MGD41By5GYQzte7xjEy2Csku247ZYU6TYgcfGr2GbQ6evFqR3nR1pp2U7nNFNDEimHuxohD19TuBQAN",
  "key23": "44WyDtV6k5JZ2k2782yN99F4o7R1D9WbYVd37nnMfUd8S4jTD9fyJGVe3meyvjTKwuVm9xMVGyJThzLoa41QmDhD",
  "key24": "2HW8vBDi9MHDFh7dMc6ad9JakE3QnezBdw8PpviXCj5tsrTAg3ZkezEok29K4JxPLJbnu3U68kD8QVbZhCvndJUA",
  "key25": "2K8bwU226B9nXuKehtSHKc8kuDbLsZDBub8VNRE1KK3QkkSZ8JzHPAid4zMRtYjriASr48bGPt2kU1iwPhpphCFh",
  "key26": "66gAvnvqyiDvYyy4sFEDTSa28syG145K6VS1DTPGMQiD15vBjnt83pyHj7uSo6Hy6E2T1SWqwzYM4SWcKN5yutWf",
  "key27": "u1nXouZ9iff7DhcugTAs51LkhLP4qp3Cr8Rmd2YqT7gkzYJxKFYQQz1ecggY1unT32ZKjmuAJurtu9sW82nERRd",
  "key28": "3XA6XkfM8MN1gUYpWhAXkcjqi5t2fTvCTXBiVnYRDoyJyQJw7G24sHRfkuhXu9sfDpsQtjZedKVT6TdiDZ1e9FRP"
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
