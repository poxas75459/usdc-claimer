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
    "5rrfiAoqzjt6aF8BtrZSEZAA8tyH66RSiCqGpKfSzSrqaHEKVoppvz3a7MneGo6Tcqwk4S9bcRZxJYDAott1fi26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hB6T9DTdVBaNhmD6eXHwjnpv9PrwoznD5vcBs9Gd6ZDRYpREWThoj2EspFFcrqZ371fim7LcYhisrMruGda5Uvo",
  "key1": "52auu5LHcVQLYBY71GaYvBL7KNSZyzce74MGB7pY525oVpJCxAX8HdBP4zz3A4DCoCJLdKRoBtRU4apm8eh47owv",
  "key2": "3UDffK1QucTcEvSHbjxwmixpugRyHZ4XcrAx9dTr5LPP4Nzz4f4M8emnNyq6WD1nAnYXwhJP3LQtR5aSeFPuFPQn",
  "key3": "2LvHkqp2h3cnX6C2AS7BoefVmKLz4oD2kGFhr6zN27c3kDyHWY7LE2s17R35NLzxwiiFVPBE2WzH31zevSjxUn85",
  "key4": "5SQX33y6NsXvyBn55BtGD39xYNgnhRdD5w2mPnUpXBUfBdk7vR2MX3QvGhBrVwZC8sFbk2VTGum1Gdq58pzdxb1M",
  "key5": "5ZYXe6f83wP8wCFky9tZRps6tV3njL9ndZq66QDeTRroaptQrZ3b3zcJ97YcE7zn2DB29w3CEWSMwNmy9vU74uWm",
  "key6": "4K71odueoqZSJN2Ru5jczcE43qG89MjWUqB6BJhERA56TBPRnVm1oMB3QYRB6Vs9CE7Cg8EBE7isrZLJ1J5apXe",
  "key7": "4Cw9hxxczFdCRYiKmL2UodPam3J7CYjGGnhnu76pmTiT2xnkUDJ9Ef6gqEEjReAaHQDkeHUEnVkCJEydghp2R2Q6",
  "key8": "aoLJWzSVMxZKGmpcGSJJFzFPDQCrgAAfhgdLXtTqDQ5iadgV6QP8vvxN6w27kA6tPKw6gvqXkNUdJvp81HjesWd",
  "key9": "58tAPPfbQyRhrsr1wNLPfbH456S2pHQyMpgz7sLdSUUetGMwYiyhCCnXVTLZYN7zN2wew9PNfUrQd6f6WvaNwvMy",
  "key10": "7UDzdFgZ56CDH5itCKUUarNitMFtxR5kb3N92QMHaCuZf91aBp2Kj1ECZ76bsskZNWjZY2nRpf5Sfg5c5qsDVBM",
  "key11": "2k5UeMsBJ664jJkZdzknQu29joHskzewkzwC7pkW6CoG19KKe2g24zYBMo8vTHboqJt5N6gj2F14TJat8EVfG6Qc",
  "key12": "5XgkR7UJG6WKRzFCH7FXTauZTjEvW35WCaaJuTSidqkgXYiAAL3KNP6mXjS2Dv9RWHAXg8tVvzSttxzfXWogYKGE",
  "key13": "2txEYvHqu4gXki1KvCSvVvC1QAgQck95s3P5Wc9RjovA2FAJin2M9knpJXn2QMYLkSR3CCE1p3DstkawBhhAeGDq",
  "key14": "3vryeE9nhqufQGWhDsWUeVrJjM8AzkC3uH4vpfTBpdA1Ue5rR9N9EKxfarBcLjnMHxtUTvLFMYrQEb42SABG75r5",
  "key15": "5UJFFYsXAB9563r1e2fXVzuZmeRhNkNMDiwWqWDnG3gn2abMwq58DDZNT3x1gMQF3PUozEQRuc8qeW6DqVVBVQsv",
  "key16": "43mcyAn5FzAmRnYeaBBrGksDbJSzJm7dZXz7vcVYM129XQpnq1p4Cy7r7ndVGwAz2EdSkYkLPjAkUUeD9J8pG7Nn",
  "key17": "4vUpF2MZ2zV1VwtnJ1wVgik5vnxZ8aNdVjG6DpfZ52Yuryq1DcfGaLmBbtZUi7rGWAm6vdDPG1YVFBB9FkRfMMtQ",
  "key18": "goJxY237GLrKQEvKAJWkzr8ehf5VpGkorKAUtjAnEEYdbidjxrsVd6whkzwer4kJNXUaxyRXfMENVHuVHJs1nQw",
  "key19": "5XZHGi4Fx7dPLNvdsZw5eMna9AV2FhkkDYNijB1qsdX5meCUu5EVgbRvSzUuUBtcZ4EYjcgEkmMTgpquBaKSfd8a",
  "key20": "3wFVcoPYKfYaHhGftNG3VFie2DqSo26Dmh1EdxjrnunrvNozKnP69eR8AL2ENQkJcngF9HnvcXBXyJaoWobnM5Sg",
  "key21": "2NbpyBXPigxsCGi1AHx2TGmUAgXcR6Fuz5KsKEVGccj9NDfgLeicvK7qdtfH43A69fnETzRv8wvGi1e7NobZpRya",
  "key22": "ACepCcRNbC852ruEZQ8BgZRGYGXxesZKXMUrk5BFA6ByD1HubVdCRP4w2uE8yPrv81a8Y34RMqqXTYZzBzyvNEm",
  "key23": "5meRw7J4AnNjXEs4X4N6wcd7JvMZx9EC8uanSicX7JFTCWnYCg9gTMHaPc76NukDqNzbvAjpgAYzGvxhopkbeFir",
  "key24": "3bf9t1WdVd9cYM2Lo3aQ8tsSPxZmJmas3rBqT6RBqzwxoMKw7Fc1qHtQwEKmjoXUHNCf7v6uxP6afjWDb6ihLtw9",
  "key25": "3sue4AV8q58a2pbvsKBym3MTi9f762nCYJ9P1ofThSkq12vdYgcLZTKnjnR5drhYn6GLd8u6FCU7nq2PknePzjsg",
  "key26": "5VKuEYi3QQu8z3W2VCScx8CqrNHyA37f19Ew6H9GBYet4iRknAUsTyU2DdPhQZGRhxqhHn2LisvdZV6LQfPDTuGW",
  "key27": "4pTZ1hhHmd1miypBq4cs7vXxdh8TTgMWbMJboWQkrF99RAkNVLxDwXB1f8zCdiSKibyhU2mku7grYqHcmCRi1ABi",
  "key28": "48n9ET9YaoNvdfNv2Hfa4nCyCXyrxspPvFchUJq9XJ665kEiQRXZ3vAu43XkZtbmGJwRuws5sd9g1zrHsraUcZj7",
  "key29": "5kV3biuvvQetz9FRKM5sVxGenzpvsvDdq5jXZhxkCJrRAhZdvNPDMeRMytEcBBA96WdZzbesd2axVD8c5FZPV3MX",
  "key30": "DvFNQipcJAM3m8pc47Zj6we7iwWAvwL5cpgBsDNGzm4rnKr9cEYdk3UCRbJSFRvWd11X9RRPLYKB9eeYuZnpeK5",
  "key31": "4jSYfR1JDH38geHmBdh9cZEePiQd2ErkfwsyXe8k6zcMrs7taq5mxfmNYva4eq5QHcuSnKKXe5FHKKSAAKoy9F5U",
  "key32": "582Ku5PXMugyrzbwQUc4F29ZF6CmgHdb5JHsXkJKefLEFUoEB5nj387qt5tSFqbc8dK84FzoWZPvNt8rRMYYiVBs"
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
