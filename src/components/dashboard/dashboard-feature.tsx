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
    "4WobikjHyyrDrQbUbXaBkMvda2pc5pJ1aV5FFQrcbomUKRZcoyv1S4bPYz1qb22N47mGeexRDzqKsUBNintUvW7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UEX3MgBmx36m8j6KbnMC7PoYhFRGYBUZH9u9H1vHK44FQEo9ydbfDaB4MDZeG2AT8WMkM8NFdPfBFNatDiQibJ",
  "key1": "5C1CXASENjqdWgTNfBGjrR3zg2svrtUy6WmU29g11gk6z8Qg7XnoCBS4oGZ1nrKa9FBWhpvykspcSdW3H2LzXeij",
  "key2": "3jgQBTHARFtwwKVjCVVjPPEeM6CZBx1spa7gkrhM2qZQv5zxc4oezhJLhV5GToRHYq6uTkxeT4Ymh5L6ixT5f5hJ",
  "key3": "2g88cgaGX8P9snQHJYeFUnSXvDouZXD9QwPjCwdDqTBLs44AwfLeWM5jgu4vwuA27Ca7qXqbjCxLLJ7mxeCWWXax",
  "key4": "45Kr8e1n7PQJmnHdRpT7h5dANF4vHbt7BR9gWijsupfZkS2EbtULF25u9i33TLPmWn319C1T65F3xcHxhJY69P5N",
  "key5": "4R5Y1JYv3CGmPBPZV4VL4xJMae9ESn5btEHkEb7Vd24vLrhgzotUYdqEckDavqUCwaHs1xNhe4tHEz4iETs9qfqQ",
  "key6": "55dkJJ85nUic5h4xddAC8FeGZQ3BisK6KynM3EzmJe1GRagowfnbvAVFdqSVKqWfzq9nwGAkjQQovqnRyMG4eCLS",
  "key7": "5YRdchpuTb8vTsyqXpA1ii9f6F6UyBLHyYvFTURwNhJ698cR6L2xDAmLq8zcz4B2gtJtw2cmAYWnDArSkiAeoKKC",
  "key8": "rb2i6EDc4EFB4P72vWCFJmm3NtSHePQjqTF5USG9VwF7v5uShckYSuw32qrPYzhxKcZcnG6u1owzEHM1vZhr3Gt",
  "key9": "3SshFTNvqd2UKQt1YgVsLdSqUStdzEHaN3Yt6uaw43kvocyFUESneiUL3t15CXgoVVCuf2yzxeKo3SVE4btMLUef",
  "key10": "5FNiX1HNXvymwRKLyhGFRqJ3GPTUtfEfmZszuftRDTmqDoLchPmXAY4Y9A63UGkSpiDHvkAkxVJqvDQzQ2Hgggvg",
  "key11": "3iD8uwH8hBWS2tygwfDwB7i5yjfq37ahgUzS46icTiH46SyQjaVhBQYefDgojUVr5qdKUtfUBHi8cq6NJmLUBzUQ",
  "key12": "2x61MW3Mcq91iEkPXMBtZVitZ5NfXMGXEkWHb4EUkdKA9GYEoSwscEvFgWUNc9NBfTr11CYMQX4zcvKfUxqtAPDy",
  "key13": "hTL6KqF2h6rFwQRQbDPA8yTnSNb3oWiNsSWtEsQy8nLsE3PSb4dU37Fes6a6sB29N9nJJd1VJpCxdUaJRgwTi9h",
  "key14": "5CLnpuGGYA1bNJbJPYi3SQzvU9NNN4CzwP7QEZ21NZjn5s3Qiax14Kq2MP7GrZe2wWLz1TVpDh7xnS7QVhQTTm7B",
  "key15": "274iC3z3Mkgz9EGe6e41Tj4swvbPdRVuTi35trvMKswDp9hK7gnggncpPX3f3e98ZuN1pjyU4irV2u8yhvLqqH7K",
  "key16": "4Kgjexsm2ahD2KwK1Kszgg2xNUXXrSgZThkCrBrWpX2NmmnK12nJs1WnQSe1JiZEN7AMNUNLf2wPy4uGSy8W96WZ",
  "key17": "3xbSEEeQMjrogUp6S4WQHTU5CQEwpAr8uoSx4XZqUd4UAhvpyj1eiTi9siT1sqtxs5kkmXKdviXeiEEWtAh6QBPv",
  "key18": "3HRhDmnSMCiZMsCt4xpCH79VBzkjurFLQ26G48EoKHKVfdMNEBuJAuqXKKGFrBR5Q9PvZvnWk8G6AdobJkvFVjih",
  "key19": "4L5zPEFzWWZYKfGtwnCLoF5rq9ioBvEuLzGxs8E9PT4obWKpiRbH28XUVDWu72w1wvxweuecF2LD6Nuhw7k7Po4L",
  "key20": "67nPYZk7U9S7gKcJ5Tma5LVA7jS2N5TpDJJLz2B7jg3tnG7WUFmMEUH3WswstLCvFLeKueqX8KCAsPnsVcszjd4e",
  "key21": "2L4BNt94TydvLGz6NVehqBqFfKCAbgiGd15jbX94NFRzvV4uCdfKVg3NXRcCDR4rskqDeoFacUpmzrHh1NT9jndH",
  "key22": "2Tt5pAGnpXeLHLXx9qAm4JYdVXR8ccXPvu7iVp87QFAo2c3TQ9rLw3grCmon8gYDR2m9avWLdyAuoVWMfZhmBKjh",
  "key23": "4xEtU57qRQwSnrQMDAwQKvVMjqqgya6PL9dyGXe1sNFYWevPBDSYzRJuPg9JGnH9vkXHQkAsYQ2QZo7XGDah3N8P",
  "key24": "24saEbqKPYQpuMVFNrJbifxnbavwSR8oyr3diVAzVVSchYVktzJw6Ws28wDpozShoAJiXMBEHujczio4VSugvxyT",
  "key25": "34QJzWdXm5owjUgGfMu44SAZoMtU9Dv2BQVJXNY5W4trBhZBavka1JRUvQb5dDPLZD75N9urM2VjxLJ1jq6sCgdY",
  "key26": "3ozqfAS1r8KGgMmsrwxLjBmBVgihuXiGvYMPuKqQq6ZSB8vJYXgzTcEh88jPtmQGsEciS9J7Hm3wc4wiyrjsxYbv",
  "key27": "2a2pTayfL2D1UWKmrNRjPoMwYoDUYtPsTStWH1LsWTTAqSz5eP4T1JPdsgVaag72vbDFK5XsDo1bjWjiu8oBtKng",
  "key28": "4sBZ74khne29k7zn37cYsk8Y9xgJDc8xG3rrHgUTk1yWC7cULqHsEeoVYxEu2SrHXnbAwm9EBbExLiCeRt3hrSc1",
  "key29": "59Nxfusszc4rx3JrF2fPMndazwgv3NFm4GCmpBw9LoUkk5YYkEsCPjdfBh2hmWi2Lvq9SX8gLGqkTSsw7yk6pL5S",
  "key30": "SSj9hz9pUUjeai7XiCCUceMhXnqnyipQMvDeHwweW7qyNoZQop1TLDpB8HqnXwZkMZDMSB9YWWoEvRqmiDtS8uC",
  "key31": "5LvwnqhSJfwTP4QifhgyUajkkGLDW4mT2bfBK3uMRTYJYtMtaq7HnkcuevqWitwY6XR7EvRfZ88RG2gJ7Fdtg55E"
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
