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
    "4meGLM7mXzbSAUCQnmpuoJhtJjLRRGoPKBCijwmWVDXXdD69aeD8zLABcKqPiawzf2pyzNErgkWawa4XKDYBNN3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zH8WbN3xuaPAw9z4ioS6WBWSaN6QPzei63PVb78DW6i84eJDMyZWNj3sqTvTitD8pEBQb6hPWH4f7yJRF7e4S4w",
  "key1": "3tio7oRWsPfhjAd4s5dmCvQ7kXQ1j32QgNBF1jfDfyQsAuHW1ebNTTGZaLDWeY3i3WsCkbd4jZawHsfHVpm86NiS",
  "key2": "2RoBo5uEw4cynHSHJq6HdKaZJhtHMEC3Ue3LvzdfniPK4iTtkFsKvN41SA15JZikbA7xbLGQwoHwpMyzHDRJCmLp",
  "key3": "2dmkFxukWvgpVZipbrngaP62TD67vAKUEGJ7MyLC9WnguhsYvKxJb2uj8pfzvmGbmkQBGHLf9erRTsBvWd5D3B2",
  "key4": "4ZvoePYwDdH4w4RLcZLTPjUjV77zY3yEbfagQEmjD6mkKEcy52DJh9Wnpu5ckgfZn8ELEf7QqZ1yqYcjynqaHD5N",
  "key5": "5T9VHvxZRBreUQ6XCAsb4sM9YCaqScJ6ABscmabjqBatGm1UnZ9qXEc5jsUyNzHWJhfJqELgdDgTqMDQsX88jhXd",
  "key6": "DiWsTUnZAhEL4sw6yHVF8DqMbQKJr2eopEiE69MHdxcX2jiyYPBKi6uDRi6zEWeejEKBCtd4QrLzdgVDAS9kpFT",
  "key7": "wRjQfif2zPfjkAdMo6wxNRDgKAcGZLt4pii7em7nNFmz2rNVLqZTs4HHmuXbsXjWf4f18Kb922GxPJx1R8M9GAp",
  "key8": "2KvvwU3tqfLx5ZBJwjV3idxa9oKzoDzbFwGgDNU4owbKPmiCH2XW71qpswGHg7oxdKzpANfwgjx1wT2G1bKJQmMs",
  "key9": "2EzsqmdrkWCVYfCEAmRoBJKeZh3wfrDncwXAdK2qFGh2qLMimzTSkrKkedAzAi15RPiWVVatbau9qxuBNVo8ow4v",
  "key10": "y71ZpNEZAz8x7cRdcBbmpTg8sqipUccTuCjTtSZjUfQSz7Nj53JZic8dSCzhMK9WTcJaxiZj8DRtvsCPK5KHZZi",
  "key11": "oPrkgWgsf7j5nnxCjbrNRyDUrL1zWFbueQ8k56yiY9S4YatmG4F8dKoNsknctvYpYJnMXx8QKwcguz4tFWDB466",
  "key12": "3mDF7vj4thZ2yKmTmpzpuhAxoJGBWWEGNTu77uM8Er31FdEiD5U7R5jTndzBC9a7gLREdgmJczQWWJqVmmeH8cRc",
  "key13": "3EenLLpxUujHeKYFLGuRjCx92H1jaJ3cQZHbwZwWfmBCRcpprCHeMt1esuSB55feTE8ttF2dDpQS8TnLXuy2Vp3n",
  "key14": "66MBFaDnJEABPXXjFUMYK2hwybk1Kv4t6xAcdwLoSxRU1SEy7vykdBQHfxGkQJtN7TzyMf5J4sP6VGN1JPRk8Rcv",
  "key15": "52GbwbJ2J9WVrAKyrwPxv9Mw81mTtCUYAmJdAQHsQaz5vymazPjj68FPz8Dq7YFBh6VuRQCaiEDQ6x1EKiUFmGTw",
  "key16": "2PZTLH4cJg1Wmd6HJwBMU3JQPYiWLqztW6XsQTvP9nNRsTB6hEMW58UchXyvyibHP9hTRiqF2Q4xtSyshJzAVjhF",
  "key17": "2FMxnazTVkwP3RGu4cELcvzsQpK5c9L5Acz29SdDNdFTHhoTu7kRE4oQJCdSipuypyM3rRx36wS9RrTt45wtM32U",
  "key18": "SDsLCSApv6ZWPz93YVFdhKLDfLZFhhvzGppuLz1fkB1E1HpnCPJFktXwLgR45Zr2kW5WHfGdXmqTuHBZLZCE3af",
  "key19": "2LXEkbpo7v2QKC3v8XviMwofSQ71bTwZAQAu8srhb7dEHtYSTuZj1AYP9U7RE2heqB9QrQWhvrsuLY67oGaXGzWn",
  "key20": "ViRz7qqZRHbfvDjAup44JQAneZ6jUTopE1GLzvgU1oGvyL6ZMmYCeQkxRo7bq7TAk89UWHj6T2HMU7jiNjZG3Cb",
  "key21": "4fTKfctrHpQg7qwpTy8yFooBj3962wFTm76VaCY8EZnaqkxbDMpNkfr3T6XD9vyCgKXeKhPxzawrYEzP2EpHQ2iN",
  "key22": "29oYp1vBGY1zUDbg95hsF8yxBRaMQxvxctwfm2Yt29cFLxeWXUtpx8RDqXJRbe23dtboiU2E2bnQmnCGBPUZUTSY",
  "key23": "3wR5oVQL8SeiWppsqQyk2ftfykAi4qQgMm46pVu4hxn5cpBecfcHqeqVqbJCHbmJeTZQDgc5qqkjPcWyG5YBkMte",
  "key24": "4yn8xjnWPyCdoGqXpa1sA3oN3Xv3vuKhF2eCutc53oRWqthsBHuCV9GGmDXwUTitCdWCcAFucJkmnPAWy8sFq41s",
  "key25": "2PecLSevLyr1p8w7tzb1uNdhfB3QkKfeZAbsSNnzofhgEGan3rb3aBV8356BC4kzb9SqDpZqtxoAbKzYniupN2u9",
  "key26": "5M624JEvUm15Y1AF3hf9VTCSQtbtHqg7rjSLvFMgVF6gKqH526cdAjPCXUE9HwEvosFBnzzdFZpnfKX4zSWAtMsG"
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
