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
    "4CowznVwr1SY2EwDFE18sAgW7zxt8snV8u7cbUKHRMmvaZGojKHD6RZoAyeCZo866FuixfBUu2ogRkJPvd2yMb4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQbgvPRr6CnLpWhZCojC1NhjRAfVoyLytxyHPRz9hFJr2K4WAZFjHe7SZv77XsSqcZxPvChRpRxFKn9CV5SFShs",
  "key1": "4XuophJvMCwWXdTEwkUJBARuwzizaneJF8TmJPRkab5TDbyYoVXUMEf3dPPLGdMMdt5HjDTMJqGxHtF1rvQdQmuU",
  "key2": "2zK2Az5YNd1ocKcMw41UJkZv74Kx7m7Dvotg5BTWo9FCof1dpnuPFhLse8EKtQBDn8AMq9YZzgGPUYPkStZuzNyb",
  "key3": "2vaZFohGT1cQ5vUnGx9h2E1wUgFHYWuWUkVR2fBCcJJa1tygSfRTGJtWkNkHCp23JT4cgjVmBf6tvgjdFUtwdFPq",
  "key4": "58rSbLHgpktv8uL1prVwsFuF1FRufXTkiPt7GNpMDRCFCGRK63Gv3UwACdKeDdJNdk1kk7BziBjoQE4hrx55WasW",
  "key5": "3zMqHup3gMojQqttpz9dD3fVqFaFypi3fgmRi935HYHgu4j4kFLbZJZbc66AA2oW64zPt5U68FAy9sSm9ZRei65u",
  "key6": "4JC13zSL2zPB61GoYa8TPBwcGYhsSRcRHxW34wy81WzrWSi5cPMWHuBG9bvp4GnoSHaURjLGKchB22aRbvyiNvDG",
  "key7": "2NE2fKBXaMumSZQguGKxM6sZvPLzWjKXy2ybG9UYin19h5kHjWy4JFkRJk6zsrKudNrijU5VhFBPfBA4Jba9SiK5",
  "key8": "2jbsGYWxxZNT7wn9bVuajA743WxmjrFX6eJXJ1UvAgs8FHDhXoVVW41gjZ6dDSPSFxyvCpozaEEUJABffp8wh2QV",
  "key9": "4AZ8UDWTREiJi7PV9RebajXZjM2JzSPiPKwFxiJXj32CkREHro3VMfoFMdGpWujdSWZq9wZJBYK3e1knLPmefG74",
  "key10": "5q5haDHD8ctMiY4BatQ4JtRCmX3mAU7TAD7xh8tVLv3mC5r8bPhmj6fFwzsMT21x6XhkRZtBDwwmpuHpZep1a9Er",
  "key11": "4FHaQj15w4a37cFd8ciijuYRRTKjnahmgqyjnU3atwK5GHz87Lv2Vr5k4RgLFqZH5zerccnU2fsKiRNyViKCPX1V",
  "key12": "4K1m8kwLmCSDJTS9Ujc5PacQiHNTThBHueQqzvBs5ydf2DhsYt8VanYro6aQYMDY7wMBu3McHmGy4y62o8ufy758",
  "key13": "3PWYLkzZWnU9n3bBKRnDJpkoiv36poxcGFvSz5k3VzgfEkZcPWhrawQ19gjfMuBu6LMRdbGUUPLbTbZ1YYdmpvgx",
  "key14": "2pdz2XYpNzQHB5pwbafhv77y7CrTCiizREjiqGzG1oimkbGMotYEUrSNVj2MCaATg5cE5dmVDR9odr5QjrH8gLV8",
  "key15": "59GhqNiXMGqntViQBFcuYVgzKRiPQSwWLeq4xWCj8CyKn1xhKF9nG1rLdVLzPJu838tCBnFHdhNsiuDLxqHG75xb",
  "key16": "641kbMjbvsadH1qPB96LL6VT3tMvd7dxDtGVb7fFTXwinWW4VGuY3pZZiUCu2hZN66AmmQuk3W5kcJeBsuZhGDrC",
  "key17": "3MgUnUQYPqw4LVuktnwv4iqXkadmeFgE247z9qJf5fDorqpyTZiqx3rvD93stpKopc6y4PwjeRqRxEwG2qFZhvmG",
  "key18": "3UYQuJmcnvBrQ71NqVf1ssdP4cnmuDLP4g3VzFymYASPEGJSmjYEXYGhZDBcdWc8oqd8dihdyGyCEiixfo3jcTrf",
  "key19": "32CJfLvEMuqbijqaoyvgMRGv6Six44f8M4L1xt5Kn6Zxz2mjGe5FnHhiufdWj7BFZ9d9W5BqS9UPDo51iJhidm4",
  "key20": "4ahJuBjNA2NvE4oXbffjjcirVG5xRfSkVgfhKgH5e25ZW94Vzjq5mm6CsG3Z3gSrKswJxMZD9oB8Um62nPBPURXV",
  "key21": "i7zp8tLAMCKio3Q9V3fe626SUCdKLaDUjjeTMxfaCvXceofALSMwZtgURQziLrQNBVs17XRAhF3ski3Sk16ggFG",
  "key22": "3HKh4cnixKmt441f1wAG9ANvCJeCKtnEKnWNkZBMN9ViHAGsvUAz42PVrmQMuN2UZufsSmiPdwPsCyEDMMhJLkzS",
  "key23": "d9hDTk38wD7ZQcv2nytRNneRjqEgK1KsZSwQjKUEV7832NEbqs2ZUmYT4z7zXLHWEhcLxk6cLFn3fiTSkjcx6HD",
  "key24": "XNYGuP7fePkDdhu812A3o3CSMhvVMwqVZujtpDRdE57SWUXUp9WXDcr3Le1hNy6FaLkw9MRTMwZ8U1oFsLfyyFM",
  "key25": "4rSH7Z4Uhcd8vqNE7osQmbQjCWW16e2GSxzqELEj4GYEW9AFfGEd5rNnqH93sMB2sDBFaWQctPRpstZWfckNEbH2",
  "key26": "26PTpNeWgz9nLk3MwEHpgmygZG4Rg54uNhqedsq3hW1Uf3wVrQp91gKTdgex1fFFxq9tEfs4HmHdYK9hAUc5eyAc",
  "key27": "jHvpY8ur3vbGkt8Z6WyReo2QuHyycbfFLTMiftgyn3tsTtz6QwJqg9hA5skmwVs8Y1QRRVKuh3GJJAoyFywcmY2",
  "key28": "4dauZNDc3LMcBCQDL5sfBMqokTCJbQqcomiCdRcCNHtjji5dWT7XaP9DM8UNAoBLK8EWegiEnXidz2ePJrQK7UBh",
  "key29": "CoLYxfD283uuveQSLnbWfdaYPWZjrVRX51AetFtvBgq6a6T9rk4TcXEUBcwq7YLhbmT1UtM42iEfPbdQYGG4uxz",
  "key30": "2H7ZVrkNifySnWiPUBFUK6bZ3W3iEboJCrV7j8HZzaBgTsPSfsyNAWQn5T8PsZqBGcUFZR7LPPHBJTNhj6sz3A2G",
  "key31": "2TWPcMPZPxgF3JqdGMbbnCxoPYf9Dc2T7k8cLVKKZrJT4wjLL18DkKt932raj6zZrcGba249pcKrkEWsb5PXDP8C",
  "key32": "swEpf9ktjPRoC68Y78AzRmsue5hWY2H9tASdrQyveD7MfFTLJQbDj4MziBDxERXKcGtt24hv4JvwjAFjXMRdVPh",
  "key33": "gzdAMF6dQgfWtnBZngo2VreXE8hF3qE8TKWB2GSrqD1KE2Ux9oaWLGcnaKGpMVSLALXG8YZ2KWGqtq83wrkqHnY",
  "key34": "3qR4mam4XFJuWEqJGtZku5KPf6nczcvzeYibtzmdNs41XjkkeRXMQ9RWYyjGKH25eUyx7QuanfTfgEDpQuW8hBhi",
  "key35": "2Lh2MpVa2DDFRUQSWkj7daiFJGFAkSgBdCA5UP271SctaF2n5QXeVfBPWNsGQjqXgjYfBdEmG5y25EcqAjUWVubX",
  "key36": "531UxdmxevewSmD3bsLADj3WHEvPQtfieS5HixuiMTGrGB4kPwVngSN3TZYf3YwCJu8Y9d9m4ju1DHQex5X1e6ng",
  "key37": "2gcXfZieEDpHJbGrDMHYtN2QiumrxzLdS4UBb4GaWcBzi6aVbTUbNjs3XK2RWD56FXE7kXP1uVofPDGQBf1RHpFZ",
  "key38": "5mED9LhLskpNU672VfQdVk8KaLMCnWEVVHiKVAWJJ2Q46N7LfNRkDso9gjEgDQxw5uYVXrb22YYpWcMDn6ZAVTBZ",
  "key39": "4pyTgK3j7mnZxfZEHBSAVWKbbNCZWDnVZacGsJvVYTq9cafoYYXUdmhfhwJxhayh3MRdV2XwHmahbZ8AXdHLMLe7"
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
