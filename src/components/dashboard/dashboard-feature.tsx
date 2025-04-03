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
    "5mKhGY35JZ1XNnmr825D5Qf956GWSbBu1kVgSDEq8npjoX8Ga5wCwJt29VGmJfsx7Er6MtjoBaQpzNbae4J6pcap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xV5B7sgKCX7shcpQR4yWYWmBJhH3S8LkZPuy96aYS3Me1qXAca6cQ4HPZR3rTzZ8VjA1118ggU8maVLp9jLJ1si",
  "key1": "d7ncJBVnvfvBtgtgiH72u8RXcfZpyMfVi1mbHHsK2ae5FKxKXuJCm4DEf1VahaY1nv6JZXQG2zRkhcfNopW2g7g",
  "key2": "2H6zYuADYacqvvrDnqkjgQ1LdAA1j1aB91tipytMEwzzFNCqHBUXRkpTdMx4cDTBhsgbijaWpTGappSxZAQW4HcF",
  "key3": "53gces4dYQ54hnebZ8FcHWeA6QzrNCWjehmFL6W2siAT9tybcAq8wxWe5wRbEKuwm9ZSJCQAhh9fk8hZmYgoxdwn",
  "key4": "4xe385YCNBnGNuMpv3kZsrBDHfdBQ8d3ELUxsh9nJUxPSVXTpQQ4vWQ3GqvAkg3cXXtNGGDmxT3sbdEwVWiaG2pG",
  "key5": "26ZLB3njJEKc7p1ES88k1cM1rYTY3Z1eRkwX8iW3e2DWUPTsvuu4GzHtguDhXFx5gbhy3NcZvPLMgXsVYNL49dZr",
  "key6": "4BoQmj8ZNNi7cmkBcqkuSKrZSnZtC4LsMKk5TWVFyrncYA4hZMu4bzhMc4nymJusRmrand5uqkz1MU9nxYZ9sThN",
  "key7": "yfgmUE8Z2wxFynfJxwNf8jyfn84a82Zui311wTEqkEnVgFFjiocuuPwhcrZgTd8gDRiqyJKNiQMdFhVgDNHJCW6",
  "key8": "5rM1Wn6gL7MK29UAaefjnWDrBf8MQDpQzKnuiK45aHerX5jC8vuwH1ZhiZAr7CHFnU8G3gVPqzTwVecgpkphZRuf",
  "key9": "3kMwDyG5yv7Mct3HHSUjJ7ZGVExddzyBvx5JjwWv5SRiAANSsfM1hT1zgTsnpp3GvuqE8qbw69iRJn32cGk88qak",
  "key10": "2ceZN8KsTi4Z8AAV4HQQwyeSDcMRJUVW15yW2eKQ3Rt8N5KBv6snfVZXBC74EnRySNyERuUfrzZLrAbJxaHasKf8",
  "key11": "5bFAKbCFq6rGTLvcy5arGnBseQ3t4TjbVMMDGxUPM5ngaXbJQkzPRgWpgbdhjkQP3JFMZ7H9jbY9FiqunTcBug35",
  "key12": "GqnevuxiNVNUxNhttho7ogWbKd8Bj7xPmGkek3EWuUieivJo9GsxJbrQDxRgLsdycb8rQQRXUUSRk7PJ3saKbR8",
  "key13": "4HVkQCwELTSFHySgdeHBt5SPNRYLLNY5XQCnZUqX2HhXV5xoMi2oeFSWKcvftEzfSS6QKFGVK7m3GZkRYsuLvs2w",
  "key14": "4giUb7aBiZxATB1SJcbZcbziQcdXkvZMe1sZ87PvGxezAwSzHNLSavWC3Qq53ZGvGTHJ815rsmwau3QWh8bY4nvg",
  "key15": "5seisqKvH4WJS1kGr1F85iX4KUmUimK363GaGvEGbYHWR83ADtzzxa27uLSkx4FqoP8gtYeF8juDT1fW5cg1zx29",
  "key16": "ivBofabeKbaiuEJ3vC3vADJ9UpBRpX9NY35AHEXiJHKCH9WSEs9oMPcsUkLihyuiJ9UqJo2DhY19yTvxsE8xYyj",
  "key17": "C1y37RQniJayoF95igKfyvx6vXJHaDJVpj5dc5kgWagpD89uaGMDTuYWCyN9cDfU424y6AvDwAMTvmxT6jJ2Mor",
  "key18": "4dX9PJmJAYg6R8GV6axhAm5G5GiMnsuScZntELy6pkP9BA7NDvxp5cVQerzdfk1m5p7kMW2hey94npzPkaCXAhPr",
  "key19": "di2BADf1qHG6sbFsvdXBukEvXmjCdkEfutDoTFJM4JpEsD8L1TpgbjiDvg3uiyDUZvgZdmmsXzUmzDtGD8zRh8w",
  "key20": "5fdgkydkWxhYeX4j57ncTuxxZdMufNCHx4GPwb8xnMx4K1hDfDZJtDGr9K7gwt9hRpnK4o1zDHCxPEd9kT7Hhexu",
  "key21": "rmvtw9cz3PmT2Et2VbvXh1d4wBnSWpDCynDM3qfNNVtoDcjsRa73qBCoadRQZhg8vPAdmT5wQ2hFabQun6GJ717",
  "key22": "MQR9ZMcVv6Tvseaae2y9YyxGxZjXUBNospaKCVCr85SnvdMyN7f5kjWMffxxnwKSx336JhGbwjpWRPJnpXAqoEm",
  "key23": "2gsDixsz8PGoWrq9Jg7QXE6cvoF8ov2ZmGfqXec34R1j3M2JJwmwGey4xMJALTooPNnUhSaeRQgRvz6vyzxivmyy",
  "key24": "3DeGJFexQCsQJfj53vbTRyft6wXNp8CAvt1Lt1vvhiKTU8y7r6ZR3f7tWjvQ3FiK8FTGuGp7HLHXAXaPV9cXWZPY",
  "key25": "LbrPhk8P6HbabVQwwL87TbcyJCCqiiBMmEncsrq1HRjkC4owEqsAV36rGKm9J5t35aCGNkgzHPRWfgLBkC3F8GJ",
  "key26": "3vu6FYc6rRKUtQdCpv4ZJPJb5je3zCBpHxWuBSxSAMYbCrgnKfH27wM4pHtb9i2tvA8bWHnB4BEtnuUkfiUVvS8t"
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
