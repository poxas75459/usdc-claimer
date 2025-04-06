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
    "Bv86uspFrjV4y76JyyK7KEXg5QdJsQY6ZGFi2u6ieJ4SnxYns7EBELTC1j6A1NfcqEw9b2soWkP3Z5sFTAQGmCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZzFBercoZ8LzxEDJFAsQ2zD1TgiA9eUuwdTt5LqRUPusUhfZFtLPC7uT2Vo37HLxBzD6MpSvGiWxiez1Q1W5oh",
  "key1": "3W8fjsTA42qFn19JiJs52J3jrU8cUUFZdLS81mMvmfhW8YV9JdQ7qa6xPiEEroNBCZqFUhEe3a7Y8C84NXKeEama",
  "key2": "2W1WDXrnBprUbx5yWLm8JeBR8V3nD2B7RuuQ1EHjLFHEhVKLgg8rmka4FfMgudhub4GYCkH5RPHTULzcBz2CwAv4",
  "key3": "5879G9hrUZtrJnScgb4e88uRtA72CjeWsjGZ9xB6DwT1uYrDpTWZS72fJkU3HbJqea4VxoJQfZXVx513Ay9EqsrY",
  "key4": "3FsGmkh7pekPrmDPNkCgmQ6UdgkDm8woLWt8zt7vahU5iqfet1yeDeG5zHoweYrJ36BjQFUyh4zTbeDoNSW3Apyc",
  "key5": "2ssNeFHQRsit4H55QAv4VRZLpXjzKPkrnHVdXcj4vvdRr7DRsAnbxWfHvfGaAmgFB6SgwcizMiHkv9V1QjfBL2Ee",
  "key6": "46mihWgCGQvWFMmeWo4nzHwGhwvQP9fY3BUn9cicc4E2NLVDMpxB2niVJ7d1EKte6FMT53Mn9qQhz371upSha17u",
  "key7": "57QgHcBkvX8no8HTGKKXv4v9wb7qQT2S4BuP6chdJFBVz3P8ax8wEJNGiCH1Bbp1MgKQtgKAu6VbgPyxtpHs6ZhX",
  "key8": "5jexdGuLN5qVdJrpPHxJxyh8MvL3oQ5EVNGQ6b5dedcW33TtB6tP3WuA7Fzr4ZK6P8PDBBap1ePr7BnaxGdKF8QR",
  "key9": "3CJMzvTVuDogbc4shM619xXNr9cqBeSox2wWcXomSaHsny8ezqv8bNws14GwxnP9J1exDA6uuARSPbuvGVAtYHJL",
  "key10": "2rX6eSiYRgs99JwxnajhjwHFk7pegR28uhqaShSYfx58nEy42rg7pu2knbyJJfWuTez6hd4NYu4vmb3Tm2ugsEeD",
  "key11": "4Q9ZGBYsUkqxSmAPh7wVedX1vsCHDKF45cehPu54ZFQouE6LpZpz9H5SdRp5afBwzojHvv1LvH3u5iNCAMK2UtyG",
  "key12": "5LJ9oceuhaj5Gca1e2ZCZx9LcQvjCZgUWhWQP5X6zYWiEuXnVigdQ7KvD9BkwTyEabCr55cSemnwFqZNEwmVzW2r",
  "key13": "qMxNyYMDkfyhpfJeBEnpakkuNpGdEhzDGZpbzh7XbpB5Aps5fZRfK7rVQY6bYz6Mm3Bw5sY2GHGEu3PVeCdVgPf",
  "key14": "57TMHAx8HjDNpEYbnoJm5zgmaNTCDygPA2w16RGkpa6rVEmsgycto3vdXhQ13wfa18ZHDM3QtYs3q6vjMxAz71ZH",
  "key15": "3YWPzRJow1HAtaz76dAVwt8iQQ2XA6XxqNjBVEzAAyMrqiVb9kzxjvqVFizDEmyx4rG8eDP5jL5kyDbMafwmfK4J",
  "key16": "4yVUthf7NuhP1wjD9a4mixNnxCZhyeoVvWu1RUoAdbDvi8TtD4tdFdyKLU9L4c2abXJTtghzGJaburhN9C5ETyr3",
  "key17": "4NZy4i7Tb5hhdKxNy23u8DpLys7TMYPDp5o2wAxF7cwupCBF8hHhUgpdr4M3cxxARYuyDjzBoSxaaLVMDsiTNeKu",
  "key18": "5XV2m3TGdDLt5mRxGEjiptqRUdFhSfYamq4yePniWp3DEjNccnD8Fn15f1XJdxDyAJzXBt3kLduCvaWFKqEp5ApN",
  "key19": "CTikcfvJvfMRL1tDGFczMcAmBYbF65H52nJXX3p65ZALzSk2XmSJJCkHL59WycCM7J7ZYFzmvXQXGFyBsVjsWaj",
  "key20": "Zkyn5m8EVzeF1XDXvDj2WhbSFnKkrQwsKqzpYS2tu9CwiwZgsJDoCj3dXVpLWuQp11xUQXjKDZ4Mvvm58LwmJax",
  "key21": "iaz4tTtNwHfFfQnfFQTNLSMb548jndNWwG5vtwYRqLUAFTMj6hJPvY8bKaM1XqBWzJRL3YqTi2Xzoty5DdywEAN",
  "key22": "5LSkJV2PFqY8fVYGqYQUesELfs8iUKbMBvJqApdiS3qS44nEVAqSpnPSoEypVJWCoJ9VpXryX8EYnWa5YqStayoi",
  "key23": "tHnyqYrma4Aezb5m6PaPvZd2EX9TcwaVEa7cmJNARWGQVzB7aP39FVWaDFSMWndpH1cwRrWvvqkJo6Uf5MXgTmC",
  "key24": "UemeW1dhGbKdyKssN6wbvHMkjfBa33DYAhNUksU7Wm9p1vHu5Bmqs28YGvSbjtN9VeJu2gyELvbUC9GfXsPtfMM",
  "key25": "5r6XjAhSifJpnsVwsChJxnLmYwMuQzjirPTLd6XWmgXtASfrKvbjsvF9FaGaLKqcNbXM7z4GxvN4Aosqx79uqSeZ",
  "key26": "4C8FAKzwf9ULHRmatTJRYrNzMcKoJoBXuic26GMYtzbqVP2xKqWSt9N2yViV4Gazbx3GX1SHKQqEfyBqxyw9fbHp",
  "key27": "rpjPPZRXN7KKStkefgQPBDG9ybCbp8bAYZZoAVHBZotsvcHks1n9T8EB6t116BuuCoCbCZxFdFx5buT8B5eSXAB",
  "key28": "4S8oa5gKhji5DMLMKbSqQHGFdSg8aaQqVCcseMZdX9RmX98PBwwPF5KNRitx1nkWtBJR8jcbfZeXLvHPcU4DtGck",
  "key29": "1A6aGfgF7jV5TPXudZpA1c8zU8hAMvxmEELGyFoDWs8t7UsZ9tVck7rqU3eoZYG5hDZ7FbX6yrPkfZyXVTfS8ry",
  "key30": "4nKe1Qmdhmf2E5gEaqE9pQ4sx6iFGVQyLsc9AqAR233RJe5Sr9sH4zFbHGpbrKFZZKKRGCbii68hJcPkkPg5PTKM",
  "key31": "3sh7maRjB7hGWECFMcjfiAqjLZ3KSuandLWPgcXdBz73DZ87sZmU7zfwRGekGuhZKPiZ4Pb1eqpyv3HyJ3dtjtm1",
  "key32": "q2SiucDYN1PihGyYVKgoV3AarM5GpUuckvAAoMgyprfRpfrPV7Mcw4JVPtK5TWjafrDTyk3dNv6W7AFyjiMJXpi",
  "key33": "64J6W4mGgN7wRgSi8zcAhvVaCS2qh2wgbqnzGgXgefmnsGRTUVLHS1Nt42iUgpYin15jFtLxcvXAo3F2k91KPv5o",
  "key34": "29wniZ59vLZqGEiVZUjqtCZAVxqgvtcsP1D2RmhFqjjLN2CezbWg8v9MRVH6t42NTLbTLwW13jgXPWYMt1KvyE55",
  "key35": "25Mg2D5QfNPtf6YniRSt9VESm27E4Bh3Mia2WxwLHJz99UWfJBHLUhz4rF1Jg1FjL5nr4uRDnEvr8dWwsxtQZSVN",
  "key36": "5yzQubaqmwsn2yCk8hYntJU3X3RnzYjutpnV4aVS9TXuCwbgDVprSp6PzK8LdJkcAHxAZzhFoDxprsQtp4TJxgY",
  "key37": "43r2DdyqbtFxWMwdbCU17Ec2HHd6SMbnoMMxShubG5WhuTwCoLh7k5pb6V87CjEgcdzNaJPaps95hNgGb2rSpxeV",
  "key38": "4ViyyJDVkjMYT4z8nRgKKeSBNTGLtrnKgGF4ybDUoNcqSiceAsqDzW8b7A59QeBuWWPdkNzCiCMX8xmnHhvBZp5s"
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
