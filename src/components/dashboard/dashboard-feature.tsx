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
    "2ZMnNCQE79YNDvfV7fNshZRtRCbk7SL6L1hVdbzjEBvKcLfoLBcc4jincXjhuRyYjgZUfcpzYkb7gihkr8tPRHVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVPLyoHWNHmNrRukUZpYv8VmMebvWW7T4tr9S8wkWD5EsasyCTdtdVh6KUs2Z9CEYngcwQKYGqiWtgustd63EG2",
  "key1": "5sBdhQp6BuZzWsU67JeSYoHatyPvoLeixwceDUP41YSHaDBgahTUxZzxv7JcoYggD8kv4A8dysCS6T7tMVgPkXba",
  "key2": "5eqUurvbtNM9YeuuiacFVZ2ECuf2rZ5mjS3oPZbaJXAhKQAQn9hSxBHZpauWM5K7hbMh25sh1ddVoZxQKBPZNgpG",
  "key3": "552eLc13227d79rG41oU8pD2HkGtwRHUZSoxGpUbLSFDApHyMEXTXmVxmdhWiG9zfnuZyFdBJX9cZj4bm63oEKHg",
  "key4": "47qFAQf8wcVoNU7s8XTpfbgpj4KKCDpuBqcfoe4xYFiH6xwDoaDKjc5JkkQNEB4Qf9HK8vrShHF47RF3de1M7Pjt",
  "key5": "RZEFfkCuJVYQAm84DuzikjLeLw9ZoUD9GCJ35ATZyTyUZvCABQDVuHiEez35WiPxu3adGopyT4gAUUH9LWcRfe2",
  "key6": "4xvd9675nKENhf7VhgS25WuwPPKatsDRiBznAR6JkwkbgeSBCgz45YLRVF8mV3gfNpAK3AeLpK5tyu4itfynsAa9",
  "key7": "ZHiJVnibwh6genRkQS7jqZMCxkcjtyCp6eo3xGVYpbPvTGwGCLz6odDq2ji76nQakztEaY1MNbtBWT1fHAcsSEZ",
  "key8": "28GNwKuGgYv15Q7kBNFxhA5tMyE1P7FosngTtnnPZ4SSExErHFBkFqm2o3au1CgANMHYb125MYmqschd6wbpd3vs",
  "key9": "5w61oZYMxyDyZcLNoKcwPys9mJZB2XUUKXBRk1EHMhLQ6Uo9U7fV7qiae1n9pHgEjjAAfmfcqwkSZHzX3qVyEiNP",
  "key10": "X6RKCZB9EED71s8FbnJX2q6Loitnvy9poaia2Rpdm2i8mAJ6nynyjojryeLcjGtQjfbmYdPUc29WRHpP2SFRrJ3",
  "key11": "5PfeG1sbSVYomJGDmhah9aUceFnrkXXbJz7RbcjAppLkkxLPFZUhca6mwja7robAvUDh8N7dCdC2dKeBNVp4PBv7",
  "key12": "2tTaNrfzr8jE3fUaeG6Zxyx7vAehedMwELZ43pp6NngSq1DR97uBzqf7rigNwB9xxxHqtoEdLPu5raA75cRxEMFJ",
  "key13": "5YQNK8FPkqDmkGqbxzGWjWN3r8gL95SikfQDUGLgVhxVN3W1YgFQBaJpsEaxA4oyw1hPTdqFm96W8959JP41dQ9W",
  "key14": "4ddReoZtshGShpvVwDHyUGN5DAAUiCwNTyF77QZ7yq6K2Z46vckJcPvhBthQnPVY2Jpxe3geSx9T2FU5DbbQCHpH",
  "key15": "4YDkm7QZ2x9qMfHLuZP9nRTQAn19vAQqv39E8Zk5n7biBDJuNX1b6VtqqW7KPUh6pf9XFY23r9gYtLtTgoFWwaU7",
  "key16": "KAmWGqjDn5fToD9X7m9uKTj3mWUSd9iDkZRSfKt9yeZ69ofKT1kXYvjEEPs4MLMyyhpH6yvKW7kfr9UWZ4J2b3H",
  "key17": "3nwts3Pmi5qSFFCkHQqZdsDi4KCPr9zbgr3Lk15KDWDucPqJWvSf11UduoUMZj46LcnZYTXwBJx9Wt4MAWn9SCFd",
  "key18": "5CfUL2Dfmh6CqGiLuT5Xtzj7bvKdrifdK9zyHu7NuWwcY3YPHQdQ8Riz4wSDv9EjXhiwHg51BadFUGgC2XbJfQxV",
  "key19": "wUvksTh4V1UL7jemdcBCHyDP3vKF5bonkVjeHKgvpuZffWsCyjytQrtw1kK4QLVpdEDF81NwZpNZgMKCdbjt2TW",
  "key20": "ydvZrPTtpy9e3MuCnzdSReMADMmecnDM3uYrAMbQvZ49om7HoimNmB9aFBVwBN8kFYrFPiQVLGqLEGpTFFFf5HY",
  "key21": "3EDZZMgLxynhPa2UpnQuRwQpqTjj9EMgH6f7BD8iEKVWBSj5a44imLPN4UhNEYqn69GsvNsPCkhtbUYhGPuciLVq",
  "key22": "2NUP8fK8Vrvu2x5fQjN2GWMg8zD8g9wrQ9MHmouajRLh5Cya9HxDSSmnHmifm8GQGXLChtdAEMYeAL7tNUR4YZuD",
  "key23": "3rKhFNBwDik1XJRG9D5z1DTeCRHuHcLDNqkRbSa84Dg8DbQ3G9i5nCDy3Hy95WzAEZ4HC9MQ9eg73APoHm2yDZmG",
  "key24": "4LzbbhRhdFPKSG4og6ZdZxb4nmFFY81GiKvqKSsPbdgCEY45ZKCw5EZymTNznifR3s4diqAUj2At9AqsweQVMizn",
  "key25": "2uvRLRcfeoQeBkxWi2X7U7tmBF4RxTuGSMXfV3KF1FwGS5eLbEESLLckPjNK8ZSNoNThEmgWhFngoTgCs2aQBAoz",
  "key26": "2pewa84KgW6Y2CEi5iWjux9hgL6D8iFizTUTK7MRqqdQ63dpRmh9deYii8Xy7AWF6dYEhALdXkpox5R3AjroaowL",
  "key27": "3YzDWMhnCAbvrFrg3cBT5p7Ec9DeYMg9U3yS9qbPeTCoYFbb6m3pafnHjU5RYwxPMRnzZbFLgms3zSrNQXRZbDDW",
  "key28": "2pmj9S8EGvE556KRFUJudPtjivzxwmNyBrDCEpWX6wTwMLpuch87F3L1t7t5pxwKssacxNSMCptDG5Kse25iuuEw",
  "key29": "5zxmabXy52tyj5qWWLYfy9UhGqHGa7eFXP4NGKMontHSJdtKnPEA3rN7feyNuyUcaE5nVaLW6tmnoWetE8CTnXdK",
  "key30": "3nTPLMEGHWzWwn7sm8bsTo3P2fSs2pHYdGYQsUhyrtR9C2wiBSTTQa9AcMaNAXBGkpHveWDwBaiqeKwWcRJqKmNX",
  "key31": "3bcdz1UZrE2DAAuuVqjCsFKWVarLAdbjpYDnNpqv6LzuN8m5Pn1jWLft5kypeMX81sq8MCmMBTFbWigUiAgKmBV4",
  "key32": "43JhPQEVLNLD2GBk3BhrZrdDtMsBnPK79vmtjs4NEo7motYJknmJguPE276s4kDWqESBKkx56YZLr152EDKNc4x8",
  "key33": "5wb4CS2f9o8QYK1Kf292ecSo3EYuBmN1Tv4ukk5cA13dgh3iCXaJFCyxMbnLdaEGzMe6ua5Pc28fcjjQ43EWjuxP"
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
