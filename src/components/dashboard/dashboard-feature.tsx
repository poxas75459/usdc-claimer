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
    "2XesJ9LMaW6HJwL7u7pk8Rg5nroG27rJDHPneXsEPhdBaQvnui8r1HSAhXF9VpCrwuRBu6NMqVFqqiJG7Fr3VQYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oXRH8PwMvpHXR2vKaS9mSkmhnEmob36KPhoffLoef8XoKzaLCxoW2jrGymGA9QNuo5hqLbjL9dJngzw5Fd3zsse",
  "key1": "5CPJXzkquzSxQYJk3tAEGETzZn8d2TVrwCRTHAG53ez98SNT3o4w8Bx6i4e15B7ubLTBtaBktWHRtvMs4u2woFpu",
  "key2": "2JFKvopLSYKmRUdZFQ9XfNAG2xU7WB5LAHVeugTP5tLBs5inyvJanebtpmFNng44CiCNqwDhjrt7RKeN8kajgDLi",
  "key3": "5wZELS8Zbx8GrHngub9dTsMKow3Cx8mKNSEpBJhwxT9sqj7yCA5iiZ97AcmHAqLtGMDkDE1vt3HeNjUwj7BSyanH",
  "key4": "jfVTd8oqx9S2sELGewcHWqPKyGQhV8ihxWwNmoDzwNcwr6byjJrKyTigTAet43XQTiaBgyxWvnvMSNMZGvJxGtw",
  "key5": "2wi4zqkW4mUEjapoL9beD8YU4g8FsETgBzd5rfQ8QgB215GrD7FPQ6wjrGUFiNUNX5uuczx4rEBCV8HitFymM6vz",
  "key6": "rwjRei5dM6m88Gk3isCegkj14W9vmiDT2SyyW8XpjJbv2vddB3vCxp2EvC8VxheC4a84pM7Jbvdkp3Ae2o2Zrix",
  "key7": "4iATpkqBMtKevMekPLhk6tBN96Ss9fTRyaiF5HxEvsm4WtmQbVNxXokkLGb35sk3m6xGtGtQqfwCFn3fRZvqPx9",
  "key8": "3UwGyPExQnDAwXjGpB9GwbuNKdJRjJqwPbwLo873pc9bcQUk6tKp6jUX9PrL86byNAsWdyWfsqNco1ZWo8NaLRsV",
  "key9": "2NWaNBz3tEMb8FLvVCkDygts43azsaPwYVDWahTSuBKjgD7wmJLq88PLNNtXaoL3wQgfnhfEERuJhGoE31Cfy54X",
  "key10": "s8BPWEpgbSnjfq5YpiuRKWwQm6JvB5KtBxF7iwM73ddN3cKdZVpB9g575GFo8rKws1XKoD4jA1F91V5PvLPLHGw",
  "key11": "4YzM7rk1GqGQcL44Tz7CQiR7tBZcexgLZ2s9vs3PdWiNLnQCMiovPW8nCkNKhGeoh6H2XjnYH8azKvbW9gFn63xU",
  "key12": "2huKPJEtu1XfGPf9KFWYo3LEdAQDUTqQ8a9sUZZyDkGv4on9FLACDvjizVikkUriQNicXAvQ1G9osoQ2PfviEGkd",
  "key13": "339eWZfsjYsWQhfu8oGnqHtvE8pB9iQ8VMTeKFhT2wUTkUW1ntbcPtouj3j3sZwnQf6UKHzCtDkXZLfdz2vxEEHp",
  "key14": "2FSGef9EXvF8N3dkDTSS8373kRhTySnuLXYhGysfCFkxhT2twEtAxuUdSVD6hoqAaCzhiuq8aynqVRa7EeajfXEh",
  "key15": "Hv3TzHevXghEByRUygfunNPm4meRXVhNSgd6eTHxpEHEPmyAxMuNJ262QpX4aVrmSjczhER5WxEG841YDxoeTKX",
  "key16": "GTNVoeqKi44S1Cp51rXAWc9wq67ZWumLRHsJQCZ4sfKoHFJT3VqiszSNenADJRGN1q3isAGE2xQsPorBbqikpB8",
  "key17": "RyMS9XGSdV7eGWWqWzZjPBZUcbcTUYygcVrWgZvmyAofcmBLyerzHKXMsZQiFnWUoaef326h3hbpqdgK82pho9d",
  "key18": "2wQFg4xcHg5BvcWFcbab8VnF4kef6vEgW9c14kYGFCbFP9usT18khqb8BopoXjTeHukD19GtATweK9sfsYTUhX5",
  "key19": "55nF8r9j829PhroJG4HtpA3TRSUn3n1TRdi865ijqBjMBbt59sZDiJKiwag5J8gxyNVYpcttEgVFjfyscBWh1Rho",
  "key20": "3oiNr2avgenxRZdV5GdEyK5Grk6xmM13VeCMj5V1FYSNg87Gb4WvaE9rjFB4q7LsK7pZG7F2c2toy1ok7ADzaphg",
  "key21": "4uAF3nVH3xQi7QofSXDmMd9kvis2ZDbnQ89YvbTkM4mxKYNdoymPk1eDkKFcik3EwHnu5xs1VYMKs4ekZHiEmt5K",
  "key22": "3BaJ6a9kPwNF8BLtJqEz8KwAyF2ybkD1DYBFijgrrddxsPWpitsEwfciAoCLVeGozJSNWug3eA4aGCXBKtLSjsks",
  "key23": "5uzbraJA8oBh91fd3sKf1hP6fGdeuvXGXdJMYAgdqsfw7P8CgyyFK4BXZkBkoByu3qW56uhQoXZc7uZyuzfAKmyA",
  "key24": "4XsSMrLBEpc3usuJ6VETbhGAarpPos2qM5x6iX7Qk9SFm9zGtc5UAhmnjg2b1VyYPRNBA24yyrswxseqAyn1yaaj",
  "key25": "e1xhSC4rEtpKgL3qgDUkcnggnSnTKiHisbr23KssVvXPZhoig6otdG2h5AUvk2Scs4NSYx3HSdUvPSYPqCmoZYq",
  "key26": "3C8BgiuhDZkbQwmoRfhzWLDsajSdvsJ52Fmvpf2Xj52XnjVwXiY3WUsy4pQUAArLNRcppbMadK7AzPoKddNWqGCA",
  "key27": "4x4ZnKHpqfR1YLp1w5uNDh2b8HUFXmRKmxfq32wHjPnv3nbdp7Br6ngqFeZdFhwnFsmu28PhDXeJ75XK7nTmRuCF",
  "key28": "3BfPp93PoQ1isN8LGGWWxbX9QXEDcDvWncRin5WEGH9ySWjFr4vghyGx7C242mK7LSqd4yJHk8RUvVZkacPRZEtX",
  "key29": "2YWYQ6i6JgG38m5Drj9oc9fXrE4cWrtv3fEcx7CMzVN5ZNWiX43e1mNay7Gkx4ax2DSnQAUbzyCEQnQE8LmgSPX1",
  "key30": "26oQAXkR7DFUfuEd1jWmyiAjQiACmP7NVaTkDBfo6cSpq9dc4rTEXuhyELXPY1jboGGrKDQH2TnV8s3diw1LgAAv",
  "key31": "53h7F9Q6ExAoM9s11FRfnFtRY8rRpuSjKJ4uB8Aj2AbFyvbN4tzEkUWpqkDSvmVXRNW7yZk62xFwZFrmMtJKmGEv",
  "key32": "45ZuELJw9kZNszSGdWmib3JB8MBGFQxJf7PJ5qCRFGEtf1e58Zn55gQAnQarJKAJtHho2EWJK1Wer91FgkEL3XBe",
  "key33": "55M9hfwUQFvArspjYbraLxCqL9QqEC4b99mJdYgz4s6vFJiXPW3owiiGLgACdBYPUM2RqxxvHxtugRfgz95x3bk7",
  "key34": "HwyRCTHxMKRiPNd3hj8w9xSqgRTU3oVkBn6XXgziHAxNqGVVXCoBbf8vhsjpe5HyThinKc213iaBao6royPHunH",
  "key35": "5E97T4tTebxnpRo3LN2kD9dfG1HDRyt1NxKDQS475VqvgPdqLAMSyqU7VgKvUJdV84LGfcm9c8waHJ53BRzRy8dR",
  "key36": "9Dstz1u4SekGMVMwAeWUaxbhUs2hc7etRhFSqmv7tqYVWh3Q8wbW13hE86pwStW2Q9EswBDhfC43xkMsdZ26ZJh",
  "key37": "32aQBLaQJvRPHq9yLXcQDYW81VhBwnh9QcdAczKNXfYnV1ixkG7G435FDCs8AXWcViUhCznSCHnKfAYLYFpngroW",
  "key38": "2XMyK6VULBdbPEAwNSzBYPDL6bYZM8Rkhacd4ubhbmy1UmV3KvGfThhND2f7bJyLbVZ7ghWMsZHwhBeBJMrdar3Q",
  "key39": "5RakyFtaNqFEcFenhKEXhjH1dKtBSfJ1wVVTeudVDaLt3a1NSw39XPfY7bkj7BgVTNBvBGE5hEEM7kULnsvGca4z"
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
