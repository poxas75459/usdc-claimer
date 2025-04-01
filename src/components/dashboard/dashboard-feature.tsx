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
    "5ipQYfrzgEzqiW1EBK2kFL63o7EVuCkjtVb6APSMWUwmv5VLkNBXhGTP78evr2i8pYu74tPUCcmKD4vki1akCqZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oP2ukM7KQPRJ9o3bvADiddVkEyBXzhzLR8kTh46QHa6RwFAEED45jfwfvBT4HwhuSyBSBhFYisurobL6jLTyvKt",
  "key1": "3C1dwKcumBZ7UkxhV3eSaX6TfCcYY4PaeFZyq5DoSp8HagiGjNJuTEY2PLseAJJfCEA8EjG6EKvon9ruSTUukChc",
  "key2": "4pA58v1hUp4NDfLDu9UxiNc2pWFc79gfoFYS59b5N9Dg31D9tFdw2RTx3TsLHjb3qmUkyzr19dWAXgqB9EouKaiN",
  "key3": "4LgbexetsP2zTpRHKC2Q5ZQB1cLnLy76ZeWGPFvmwXgUpd6bpAMjLagpi5xq3Pn3HJM8UbqXewffGnJzT9xe4Bpe",
  "key4": "5t3ftfU5W3NCTWvNV6xiyUxnf1akoyVmk6m1XqPjXS72qD5FS6n7AQZRizxgbJe593chNK4KjsDs9HNaH6N7QFFF",
  "key5": "5nACVePSVgwW7nHKzNCLAftzbED7d2Vha1CSH4qRgar6W9Ap8c6j7pUEpNmgZiJ5QR8whs6kg78E2QduGXCSP1eg",
  "key6": "4AFqaqyADsqTgn5jZWHPJeuAjPfSphwQHfWieUxSjTzHPW9xqxmap1ow4VxwFfH83pQ3ahEghW4yGhQQ7mBsJHcT",
  "key7": "4caL89EuakN1vTUPjx8mZK6vuuArn73xc2RLebUMqSbyyt9xdhcySm5eKa6Rb3G6uprUcLSD2qwEKX6MeBqAZDCX",
  "key8": "5XywQDAoEq9TuyJuTdwgD8yeCqQ2Bb3cnrhuQDuswrHcjMEXY6wgMAPSQJHgRqYVyLZtrxTSf4qPixhgmNBeBvti",
  "key9": "5XfCwbSGPQTRbmyDbERd19eArhp5ZiLUweYUJ6FDvJ4rMxSNP79jQjTHRGhSts4odZtogEVwWnnguoqTC1z61UQf",
  "key10": "2a3mdR6SPizB1DgKoDE76ySNZEzCprGnY3RQYCqKraiYQJBRwFnh4S4VyXa8i7qCUuqnwzUJatePVXDkzcQZtXhP",
  "key11": "kGQGziP2bBoM9NbrDciyignTua2kKrSosdRGmYBswdfwCPF83wZ71iFisfd3gm3gM1j9sQPL8h3UvcPUdFHdyXi",
  "key12": "UVcNHNBcgAs441GcDWvun5PvkjBYSevfij8zaHpjC7S45ZkAYT91X83er8CDM5jm81KNyhf7KvdzfNwb4Ro6NhD",
  "key13": "enTYAyfk6TqayUT1xjaubuTvHmwjGc1h9eU6JvNahxuPCDLgT4wstj2DizcCKc3VsisjG6zW5bCXojifU3bEfvn",
  "key14": "48J3FBXYufWZVVkAbXwR7uchMg2aNWYEBcVURC6JBXeU5wCXVNU2adU8v9ez9RtHMMwjhw1rLYEWVR53YH38RV9S",
  "key15": "4nM3o6b1LPha5juNrjEBde9vfpxhYwGbpN8kChRrbw1WL8DK5DzwWyGe6BcnpkBorAj2V1611RUNitjSQ8cWzLL2",
  "key16": "5yLwnhky4Jp23G2PhikKmtKu6NvCH2wHHj9G7sQLiEC5YfTCGpBGkC2QZ5QVQWtTN2XGcg2C934zseqiUa2ykNy4",
  "key17": "5aqHVkcmBLy9Cf1eHr7BPZaqE5QS3iJGG93pTZqMDEXLTe3yAqNZKnsRAJsCaKnbusurnD4svfAs8P1HLbNSpAXN",
  "key18": "4xhw1znQoWowWu8MJ3gJs8rh46kJ5ucjB7shUsvXHizbsiFVuJpr6RKR7oozQhpDUaMCRK6aX2V7LvwY2HgpzPhL",
  "key19": "355Nt4zeG62UAGYT8bfMFSbPQzLVXU1YWnfMR7t9NbYkrXcsNjYSHD9kerqt4ULk2PasfXG3kmbdJCfB8ussheW3",
  "key20": "4ek3N2CFxdVxzUWpKiTo3kgkXKQtD3nMdUBKEGYNZTNvxs1VxgzrFQZCHUTiaNZa7E7WqN6Fh6Uc6H9PGzZjn92k",
  "key21": "5wbyLxqXQpjtaQFR96qoYWNhiHdu36W1WXE5zfH1X4ETmbVHDdbJsFt28ZF1uSpyXmvit3aVf3LGA4bQFcDhVN9B",
  "key22": "4pbBwZbDkjy2hqBnHdvp26kLQ2wMrAvRsiMpAEo7NmqH71x25akHWRwYKrKysPjv2jL187bsztpKRfKbDt9uKVT7",
  "key23": "4gzZXCXJ7fmetnT85Hd5p8d61U6Jti6AvQFjFuKMuoEB8iHKGM2tggR6L395KKftyw1uBWUEgBbEFGKfc5P9Mnt2",
  "key24": "4SadHifGXfBbMCc2bjDuwDtyLhFQ4yyhAdu5nVqriLqemwB3M9zN49iBA4Eqq6Hjjmtpo5GY3dyrZ95XL8NfXgUd",
  "key25": "3Mt36JP8aczkeru2cDKE5uHqJkzCqWiFgL7RnSLwj9V3fp5b8fzBdqkTcFJGySsSpp9jnm5FtMsDyXzGdAZLTHT9",
  "key26": "znZXeqwf9fTMCeQwJvBXwDZvtLngYiChmL4acBbvpiwCAFDtZ9Q78NV2tSCDx8fdbM9ErMJZxgctznmf2cW79Mn",
  "key27": "3pyz7D8X16tHoj8ZMGF8UCHcXNTwdArGfv2tDZnmqBDc18BheDTN26WrG8BjSjz3PNhMHV3GiZagUKGTzaDExEqE",
  "key28": "ATkhbj6brcuMhPMSJvnPE7vnkt9ciDsExNKKfx2iG2VHsZAzSCHoNVUwJ87LtqoDcJKhJwruyvMWRsncRaj1eLs",
  "key29": "4aKG4zkjYgk7M1SpNyChcxpPuq1VaEJ1ZPp8x7cU4w1tuyh3NF374ntndafATFdruy75ncd7MfqaFWHAXLQbcAoq"
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
