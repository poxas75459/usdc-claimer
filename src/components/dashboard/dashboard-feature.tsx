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
    "4n2WqEEktwLHdyVJbxGAyeQizJX6w7EQDhArqjYXBbNvxTVQpHaSxSxTV4Qk8Rxq5qbaDLZqduRXG7QgmZ8HV4R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RggZSXD5EqVy1rFtfyEeeAq2zXLBuZmkSbg7DkK9xfbmeiQaBCLC9oNq1CpuQsJvgyZWZiwVjYUXqUeKbJD75QL",
  "key1": "YrpEmXptq4fwdWBXQ8JYQQtwchTgQUmWtKMHZnhLZFgh3RapAR422gBfCYKBTbpfmwEq74bkuW74Rx9sBT6Z9JE",
  "key2": "5iuz88v3WBnXuvEUQJ6EXEPVvcaWk4GkESTNBKkWs6bwGjJVeavin8BorPyhTqiU5DNvuZyF14XBmQ525cmrfeBA",
  "key3": "eKFJNwZEoQX97623LZHjwGqMzxTeNdaZfnSkmYRoqv6WUkyDwRUnGAZJXjQe9won1JW8PSxVBgWj7gBta5paf91",
  "key4": "3JEZoPCggHZ4YkfpXz2G9Fr6v2CCjrMuXyd65hvHrEVLLsM7AV98ZYwbTqzaJ4hkHhWAkdEv9EHYReQAaJ2umtUx",
  "key5": "2nuXHzZH9EYAVRrSaztEUraw33R3kteC1AmVfNY1PTvdWnzuyDK2bRFUAZ3uy5pzdbuaDw3BJvBU92X72e6uhgnq",
  "key6": "vcWtoQEKZjUUuQzxwexvnpfhLSHLYxdmGC8NkBMR2tHGWW9JoWoDo4chsUdKzLweMPAnwsPRbFifgMiwKkJaxnb",
  "key7": "66C6h7JQWn3SSjRCavd7Nh3uTbvkT7rK5ZaByKRFHQwJgK9rsgTHULVjwuBwEdkYDJEAw55NNYEKxNvQ8eLtVtma",
  "key8": "KawcsfAazZFUTWjt5VTBuJNvCiBpYM9p889d2tgnyppFLDRU4kTcbBWvR6saecDGCtCMnVC4mp5eDdWpeb1wPr3",
  "key9": "4v2mNZRDqdrMpT6cEVyM8XKo1cYTvKjH657RC7KH4y2P945maevE8utTGSpkq8A95SJ7gyZMssH3a8HjkNmy4U6W",
  "key10": "5Gu7AHRbT5uM2pTRy7YxM8mMVojCgXhpuPYark9B6M8WiaaoUSehmMxSGujBBSeBWaDRGA9XwAVnaqws5Bf8m3G3",
  "key11": "RERM4HVoJjQM8urkmNqC4xacNwXfuzo47UXhV4t6RNhxdZTaJ8FuaU3XJxMjcZiT5xbvTALAKX3BK2U52NYft1G",
  "key12": "2EmqsFeXZjiwh6i8mx7t9VZFtfwTZGe7hwqWt3tEoEDQ51QtJ6qec81fbpbtXQeNq617Azua7DH4mFDL9nac4jkY",
  "key13": "3DtMGNAmm3ixGhc9hpMELY8gprzVnDKGYDBxUiVxVb2vto9eVVzm1pmisrbSg51ANGCxt94KndSzg7NnoQSqeYUp",
  "key14": "2iyMd7ZD2cAkoKue2mgesQn8E3F89WXWhzeBurkxkJabc2SbHoqTdUYtwv1GJDADXT4mmw7pMZuiowWJkiWTB1CR",
  "key15": "2j53QeJsffLDEMiFLb6BPeNwRczd2YgY4aWyu3RG8qaihZfAU6pZ7NcF9VTdk5ne2uVpEdMcEKHJrkBw4d9rWJoF",
  "key16": "4N2KEvUFbMQYV3B1nZNJkqBQevvArYYag6yWGbonGi9UqK66ttFCSSzaQMYEJLQn3v12FKMPbfvwjTczCDEnm2Jc",
  "key17": "5eWTP42cEQDejg5nhGszSDuWx2cXq3EP93pqy6uhgcguo5n4QouwkTG3RFVV9DeyKFvXQ7S9d97g1z2RUJH4MtbM",
  "key18": "25QexvCvyKAe1vuVab7GNPchorPQbRq1xbTcCLcm3tVdrx6kobU2N9pWrRdfqcZK6camU7dK7yyNHBmGjeKVJGZM",
  "key19": "26mZjyLpMBsbcB1NkEt6G4KLst9frPJq9uvihv7rZ79RsU7sNwJLbHEAvy77Lv8jEFoeMTKqxVCPGtyLjEsPsmWY",
  "key20": "5f65WLkfeem2rFL8jjusgdXSZFxDhPoQpAEFLKmvktuQsKoEFS9PmGZLmAfHNy4BP4nN6RxwoBaH52pn7FTPLpFt",
  "key21": "5Tnpe4wcawoAWtfJoi49RyB4csX6NEiFkBy2CsRSA2mKewEKAhkZHYT6Kqyn9VxmxPRSVfTn7VF2JRXEm6Zfeesq",
  "key22": "2gt5MAqqZGqzd8J3SAs5Lrk8TFvvYA5qS87RafWA3mGh3nA3WoC9PHE1DZ3szkqZcjDfep5uXi2Evbk6kA9S5F98",
  "key23": "4BzQxBnXKvtnrLEu3xCgggf6PBQ7Ht8NqJdrwCVj41c5AX47zuhQMAzJ8Rc1vGdk3G2ezKoKvwEgLuNsLvgYgboH",
  "key24": "35ZoLTi2hey2ud2PCsYVMDYNnZ9m4EwQP3vBGE87fAhv3etN5hAk5oyez7utbbqFPZqapR9UemMGXyci1xqKk1Fb",
  "key25": "3WesVJynE8eEShFw4Z5zypHc65xW3yJmkK4oHDCn74XL3zSiESbPmmCpBZjEbGyaYVqhX7UzHhc88nDEScw7dknc",
  "key26": "SeXP4XrypYvp1pvbqhJCc9uvP3E2KTSEuJ38jZ8Af7UYHiCdghVa8sTKK82TLEY6oP8Q5KahiNRi5FPni5aC5QR",
  "key27": "KtmKZ4yM2ZzKdNzfaS3DjPzbWifQFNtvLGG4nbkm2jk6zFvLw2DoBXPmnPZzbAqu6bKhmL1y7q19qUrdnyL6YPi",
  "key28": "3pHsQx1rjBom6kd9N5ceyGyXBwDP3ETsjbSbYarCF7RN81anLMuNhk8r4FQyvsfqjthaFq4HGRXQyRsPyBdfuzt",
  "key29": "5jKFjjY1mebL4GGDjraUSTapvqt3whTouFa95rd1YKsBU5Mf6bBp8io5bs189kUoT3DNZ74P25c1Sj2L2kDCgc5H",
  "key30": "2ownMXSCai3n386MWxf4D6G1YsdL1VtMSYGxAFpfHnccepVrcBFXnXCon9SCEYh1mYaZs1imV75CWBzn86HsCutN",
  "key31": "4V3toqEGdiAmjM4Yd4brFoDEAHYFELUrq4dtXQJLFgDrUW7RhTQTc7wuCpY15WJiAWcmXW5c6nnXiRqpbY9FtAm4",
  "key32": "aRd2J8F8fqiEwoSoru8Ey1V55n1BkTUiW87uhXRGgrvFgJrE2mYskrqtYtSLqqMSjuM46CCn5jA2GUwdJtihqiL",
  "key33": "59xKf2K6FCWNLz3D7pSkj7tfhqDCH4o1y1zmDcTFaD1qNZHEpU5Rw1e1jvir5XnAkkYm7U7vQadzRz4yAxBaytnm",
  "key34": "5yBT5YwbvbaccDMyyEcisPxxjPF6RcxYNA9fTVbEyv4marqSTjpQLBVGY2znYhRCawLu2F2ptmxYUaaaGQ8YRW4",
  "key35": "4VxnM24RegX5g2GMR7njUWaNrmDtHCbFRRvTgQxRtcVmYn98c9a6uREKCHBbUheoCU2gjhJdDjWCvzPyABWBvA1K",
  "key36": "3mxUkXVhnacsqZm1GsaJpe3TVVc7Xagf89bB9ShUfYBYEFw9JjKBBSocxJ3bW66m1gkqH6r3nkrE8S1NtMLWHVQ4",
  "key37": "3yFqMR2Lj186jeymH7t4eBY6jJg5RNc3bTnC93RFxSS7aC9NGS9oLeUfETN99MvWbZkgNRCAY9Mqqbz5519AoDxi",
  "key38": "2sQvHAFtdA7vNMAftBvWxvpfCyhJGAQJzj5m3Tad45xNV5Nrw7XustjgPYBuHTtJgK27FXabKU7mMpYYQhsL2U7D",
  "key39": "TQSJuAjERrPf4d8sHW266BJoseC6qTBWKKit8E9hQfqaHRtfZtZwDxireUcc1nuBMVF1kwxH3qYnopL2PQeVkri",
  "key40": "41RjyNwhA4nAjuyhdzwyWWD9Fj8GoTR2gTrZXokwdLi43Z3ha65cTRkXa8FsqVnmBMxcNeMT9pNFTLjejFXMcq86",
  "key41": "2pY8UN9Eib9kNZL9uwakcV7MQvbGheuAKLc95BMTqTW2TsuX6kSaWF5xuqUy76g7QNnJktnQZApd7WpsnGy9Gi4q",
  "key42": "4V2B7osLR7tBycYZGFp6LtLs9vJSXNAewjgDEJqL4BdVzsPDQ123iXjRPraJhPcyDLd7Ve7GAPYjKv2tHz4oE47X",
  "key43": "VT2M73grUmNhji6VjREpErp61Tq7rTaaJBaT1F8VrLdpJSnsgm5Tv8YwptGXjZe5Jwi8bqjJRyn9eJ7JzhNpumL"
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
