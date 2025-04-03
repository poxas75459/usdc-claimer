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
    "5N2Z4qVpEqLGK9P3fTMpRjHMqXz5g4tcozAHGPhKLSMKto5vwRFD4iCpyMgAWntt4cUmsL46B4jjR8bt4v77f9wY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GbLqhrFdSRQaMPNmUGYWbeTFjARJbv2nFEgpH9STLysDGoEs2SchVBtrBiL9dH46yCT6aSGaCdrPWf8iTFP5nZR",
  "key1": "5w6y9buoPsbdBJBULFEqhLhZd7ABeS2cf6pw9wre4REhSrSNtGDTundyPohYuAboVR49UPQJvoEeKgjypaTfUghV",
  "key2": "2fLJzUfTkstUfhqE6tTMY9JEdmXpTuscgKwU5haeVVZguphdq7hYV2vMBbsSsqD2CLFHq785DB7jyEGPh1uGiitj",
  "key3": "cHoZa44ahHgLqLuPnPMQJ7yBFN246j7j1WrJkaigjF4mbQBcgJ4wKGSeMdz8WqAa4aaHbj6TPy2TaJvLHcE4amg",
  "key4": "4m9gaDHf1DVTXf1YtSAD4LGXkd7oVWrGL9oJ4ECXEx7J3pukpY7PNPESZMMAkomZrUc6ecBnfftCw38Es5apSegT",
  "key5": "55PgZtq77od6SoWXR6ebwyMVY3Cnsd9nu3bHNek3QymbjZqmjByo6XFVjH3o8y3JpBomaDobZQ7hQg7Gx461XeuS",
  "key6": "5mGMYem8WBDNsSjRtYBX15VUJrF8t9XezqPhXM51s5sgXLGTZ62u5kpH5ex1JfR5xaynCRefXEX4rVRVK2bLYcu6",
  "key7": "2ukebt8MLmgKAsC6vookBjdw2iTZ6w8DzhFbRdtDojymPD37uzGWWS6VYjjQnSyW7utxTN6yNwx73ybYDUvhGTT7",
  "key8": "2HQqUXNdJCgpS4cXMcZdoNDzCXPbudcyqyHKHYkZvhLzjcoyrk1v51vdTG3UicbicQmQP3zkomHftM4JG1ZVdHZV",
  "key9": "2jYzvHZ6hFw3ggfLoBJCYTDVVTL8V3tpGwpSMo5Sw8YWedDio2E3JnjigsfvyNJcFe4ikJc7HHeSDHRGVYPqLGX7",
  "key10": "5H1JK5uv1Tx3uFB4QZ52UC14tmj47R2g2Z5QuA3BLQGm19AkqtK46EeVyWDkZ1n68b3h7ydDfUL1Hoz2F3VakdbK",
  "key11": "37ugW5HEsxPXCtWLyScSMLKpbXK28TV1nKE4T96fda4rnjbMT7AP17eoW8McmybZDr5uv7LCWzf8NecUjKnWgpV1",
  "key12": "5NdyBQqjN7RhhdxXYFfM5PKocPjGF5jkLohvZbvgxJyBYAsSyeqQjSFC7F4Yuj1Foh26QdhUuoxewL7Q4fGSXNaN",
  "key13": "4RzvsovvVKHRb48aYwT648v4KUTkbTLaDxKtZwUGY4PVVr6Aoew1LmyMdNt23RspYh7pWEEzqWyFZ3gV4WApNV1K",
  "key14": "2VWgR5NRJMzvqPpjk9MCWodkiEpsKqqpoujYS9HGz8dpB6VLFo3s2mS5j5vPkGAk8rS8DNWLaCTTTnQ2UdYn4rZU",
  "key15": "5DE6WNPjqesNzLhmtDDr5Rmw9s59d2JdVDvRsvQdyQcBG7VFaqJJSbMSYNwKY9XsM8ELppyBk69i3AYLkRF1PiRw",
  "key16": "3UEu7Z6knD24phs5V9wtraVSbSQ6sWyEo17ZH7BBkciydLam19kKvgB39dhwAhQW5VkzYvqr6UDb3vmcixyMdoHw",
  "key17": "qUnxdZ3YJpeVjUsXMGhBtv14otCgiUDKWeHjJjPioA2YwB2WvLBShXyK9fPBTWEeQP2bosVTwFNutwNwK4EitnL",
  "key18": "2Qz2LBRF4RUgkVQLFJHaueXmArkJMZBzzg6EedCRNLqCXNCfqkoVSVmLKzPqkx7nomdAKdLwNw3j9iqQntiiBSbd",
  "key19": "3epeZTDwnC4FKB2VdwzB2mN3MEM8xCnk6ZDTvqHjEKMQfgVgH29EgFGDMWWCxficm3sVoAf8exSbtyt6nDEvmX72",
  "key20": "X83EVryeqYy367StW9jLCgdJm97kLPCDF9QqdHWDtRZaGi6tCY9G3aTRTZZR3c5nvG1LQUFu6Tzg48B6j5YdQHC",
  "key21": "5Ud3bbb57xnonUt6SZjLTVob84YheVEYSrTCb3EWsC91sLRbFxCdcLjGaVQ4kL2ke5QFFxjzw25CoEvbctBz2Ncn",
  "key22": "4v8G38vQcVMkA893HP2JbF3tJg1VYYeyiwxtFgfeCQHMiEEcjXZB9g6HT8S9XtrGV5PoL8whAwaWGM8KSaQhHv52",
  "key23": "gtyH4n2S8H41z8xJLR77AtytEdaH9xLY87Shg48rLL8ZNgN8HLbd2XVUBKdJgSVP4gvHLvukGvmk1GQWdv7nq9N",
  "key24": "2KR2ZD6uP6891WG699me9kqvKEfgmKKgz5fTz46jwEqWeAjHqbJhKNirm8fvLpL7GRqckSSh2XxnRXr69xixzzTf",
  "key25": "2DxeoDatZtSiTM7EQNaw1YBY9DqDEici7jv6TeDh9Zpjz8DqPBthzFx8SXquKUtAeQGGA5LFEwAEZbKoukk7vefo",
  "key26": "5Ed2Gc9g1RQTMB1SxhLmePZMNZc1ysbNDq1Y3G2VbHxW7Kgb7QL1VLHHXFywF5vzNmfZtPiNiW1BpAKM6113cDwQ",
  "key27": "4eK9WaAoxafzsSB8f21RAwa6qBxA41fuJYDWivnzJr4jNvB8zJ7RwZs1pYXjQzuQyHBGMp4GFnKR1HGjBukGSLLu",
  "key28": "25rwFtvn1XMKBtdRdAWNuFvTTju788QFAfGaHgh6g5iyp83QwXo9C2rx6Fx7h5bjYvPcdcy7JfouLKR8agXB4p3b",
  "key29": "3UXx2haP131jf2PMxtxNVbgAt9tQzwNGExsC5gDFvov4KZ9dh731mkovArXAGf4pe9AYEQwvG3ozZx1zKZpDEwQw",
  "key30": "2bhdaYrTopz2ghDzh7KRjcnjJu6yA3SX3md8vhNhNc2f6kSrcz2rejRvjwTggtvqwRrt2qxL5BA3ptrMKCqtgX9S",
  "key31": "5baYR2Ldo2Ryhk2cNoBAjTLPfzMdv759724rR6kw4JcmWofe1SnU3iryXx36ohxsHVrJcTGkYHYXYCguMN8xvib4",
  "key32": "ap78jqwfrwghZ5E2hmz8aGzyepLLKaMJzKWranF79CXH8hid8nm4fSeP5KRXw4cmWmi4wGKX7SWSVCnfJaYZKJ8",
  "key33": "2QrYLjB3gqj7KW8U7WvxDnUwaRTzdHeFWaJBDVgg2Ep8MgUtpKYRiKwyhHfojoC4cEkPKUkExZ3TnEnjBUHyHFbF",
  "key34": "3hLJ6hzhHAQqpg8tpfvh9irLdA9bsjPbBFChd6uGvyR1NQ8gCnTbhhMXEwQGcaBN2pQz1VJM65aFLbF1ogMtPZcj",
  "key35": "24K4byrBidxUtk11SiuzSxtgTM5bnNAwHbv7yeTEmvVkvUrbGkikE3ahLYLpWSm735nns15NFhFG8dTbEW42brN7",
  "key36": "5NswgtGkt4FKHjGiyYXTsSjzjF8k2jhbHeQp5eEns9P5y3EGKxriSz3B47zncrygYW1Wjyeryw1LwEx1fXy1re3j",
  "key37": "PEgmgyCxFBT4fWjYWYpHXdzw5emDJkC9993gXWi3MwiRKSdxhnzqSnxg67W47RRWVuZG4JXWbHeXcCk7DzFPndP",
  "key38": "3znsCUvqvvqyfu2BY7fG4pitUgvxGTJ1UFcw1gFgjBycY4i8wxvT3VVZvkHATMqQ91C5pjDVr9YoJXoFnveF5E5r",
  "key39": "3THMqH2T1FNvk9V6WzhaZZ5fg7SGo9MsBAgN83QMr4kXND8LpAD32WVKFbrEvE9cjiEdz2we8YboVoZvxgVfxy53",
  "key40": "2K2LH7ry8t9UBGYoLBxBTXJbt1rWZKFrfVricKotbMoDec5bpKHxMd7QYLBRbqFHdAPF3ejKdDARXUaVMpVCe7nh",
  "key41": "2AZ3pM4cH2RuRnNkdPsPcvXTyskA46YwbwPgrKJ8W3gUZMYDDBPbUyWrW7LL2e6aas8fkoFGFUxekm75KazaVmm",
  "key42": "59qAMjktEi7mhi4a6GeUgxgc3ihAY8BfuJZ2qxF7jDNYmjsgmKBUNRAsjHzHb256XFRdwi75jnoioaKPDyuWffar",
  "key43": "4H5BPG3eBgF21qgX4ns1fszS9PAUAQXEBUNjnt5GGXWUW3HvReoLNL5vSJGRUbty38EUcn6Xarw3yJAGgTmNPkFk"
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
