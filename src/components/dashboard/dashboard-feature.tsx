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
    "4EcPMYat1Pi5jFN8LJ4W5ZjGFQTFAcPxq4PdiuhMv4e1bpq8hmk2F4fvzfheR7sZeDzbr8JSuy4g8qvt4HPKJYTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJYyGiuPjfwrezm29F5oHqjWqNJk9Qs2SVFwibkKHdbxrk1cGRufgyBd4sZMLg6ZpChF7o37S2W8MudJAYbZBjq",
  "key1": "51a1pQt1mxw6k6fRKiANDTZ1TFezo3oFnd9SGibJpKwpy2LGqjWdw1SPc7fbtu56dFz54bMbD1Y957fFMx7T1Yu9",
  "key2": "nVQXKv8hjQpCBns5XafPgvef7HMX1RE1Mbb6uG3pAJRhY71xDLhNW5r9ki4a9NmiDrhPb7XutqWCHCH1EBUagNS",
  "key3": "VNhaAo7vwdnzxqAczV1Htv9fAj773BPXhM564c34rLPto3JEACqBxsJXTM85tLpCRQfahvxm1wp3CUEJZdRqihW",
  "key4": "2aUTQRFX1268jU8AaU6HcEkaAE8eSzdTH93vSftwse9fxkn4A9jZW56eDEVQy8yr8A6tnskGegVds5q3HZBmd8p9",
  "key5": "3vWmU895VCotXmmQq7CDLZ275i4376eaXRuDuVRoKTBk4dAHcqX25j8kKhfNU2QRVdrptNZRkPCwbvLZh9d8wgd",
  "key6": "2eQ35LY16jmFUgHi1xWrK9Wub1tbzcPX2zKZxSYBgGuagkUecthqTR69LXWY44L7svuNZqevcAJGaPHJ6ovMatnQ",
  "key7": "2io4QQKDTUdRXBTKDoDa4oFsWgHq7QeYCRrD5tWErLgKY14nr32oPc5WAHaGbVhGKXKF2xy4W81Swv9UZNdfGXcQ",
  "key8": "46A8a5RyMJbZyiNDasQWCpiNF85zfcQFDvAU8QNGXdxwZibr6ijTiqQ2a8BJ8pMdzHGpsjpqXoAGr2Kz43HNekJ2",
  "key9": "51GwDvXA2FkxPZDbDHXDKQfPEnvA5uKc2AV69RvBmVwJib618k7CcMbifRwMkwYvgavQ52zu8byiDLCB6uo4NvEC",
  "key10": "5izB4hmjSY5xuq2CwTACAjP73F5KGpzWWgJZi8Ya1vvW3WUZAC1SW7qX7UXh7qoN99hd9bgNARFCNkXVCAFAntgt",
  "key11": "63HYU3wVgE7wyLA6n6r272U3zGFmibvoQJTmqyVeZUsmrE6ZXmQaKT5fsiJBFrZo2xDmwEH2WMSx4ahsk8oPJkhJ",
  "key12": "3Z9J5X5LVepmnyTDntXFJLg1kwKQs4oZAK9zCaUjpfs7S7MDp8BQVs84undWkPGC5p5HJARLJGyrziHntjUsUSc2",
  "key13": "57fBWe7yKQe667sSgL3un4ZzXsatGZFPgqbv7Wohj8r2QHcc6GsFGoXv6MWd9th4bnEbpLWZTdjx9SQPQ8HAm6y2",
  "key14": "2BvvHnz6GezH7auSCSVvheKKycDQ2fhPcago3xa4dCzFXE3oBpfd4nbjd7aoSxDsVz9VXE6MmbxGVh2BXyULTf1C",
  "key15": "VWNmodTqbgaPZGEaTskyKLgZRU6nug7tYUerA3wFvbuasxQC4pEkKRvnpDRwW5FG2rT8smQ4HThU5CqRMcmGhSL",
  "key16": "3zWTsq4fzACzFNkx3g6ZKdmC2gukyBARA5tZcrXnPQafa3N7WWBe3oUcx8ErUQFuMt9Ccx2feqbCxtZstNDxgL1p",
  "key17": "5sRezjrRtDpbTa76RRb3tBac5hpgQTwU31bVycj6cTgEP3bDfvKoS1NXDxfuk9GgHAuaSKKG6xJW58HXJwbavdbe",
  "key18": "4otSr3kkMvw9ejVtYxCubh6uds29k1VKNz1HVrc2Wfs1CuupTYfqRVA27VA1bKy3N8PxV5SAL7WsvCkfjj8KNaAL",
  "key19": "24kjbY9rYJzo8f8Cw3EaAQt44xv6QouTWdoRBRcrUpJMayAGGb12sJjTKwzWMyW1Bp48Cz8Zg94RTDm2EuDd2Yjq",
  "key20": "51oeJLM28PgoFN3yu8CtMkXDSet67xK552ioUtw6b5KYWqR5QcX2jWhQc4abBCEiGTYdrFkGNTdi7pCz6CLfzu6H",
  "key21": "5c5sxsQNTk1RiYpSGnstn5krFSN2J3MHgCFoDFgn3gJnVC2VjYPGYKAkRzvuR9a6yt5eESX9d8if1wisjJad1jwr",
  "key22": "4kDu4pzNuPWbbuV1QujxZHPAhYJd2gFMJrReKseB5pqxYt41HiKAdN9XjxKKJPKQ11iTniEEayQxbzxKUG8zGqtK",
  "key23": "4MGCByu3pqt6s8gF2BCWEu2QiqTeNKsFTG3NJU3oeRn7vNKpfJajRiMxbUY4LKK46xVuPvHSeDd25voNeGy8Yqr6",
  "key24": "5hYziShX9oQn6gCZHuozgouGmpCK6yoVLaL6FoWZeag8pQbVpUJmQnDiaQ9mNiyc3kzKK8dNGg5LUXg9BiSusWcE",
  "key25": "5pzkyPikzFpumczuQAwwKHSNn8frZr4o4SmRWCwfhiyfwb9UaKLcL3vBesRGrYVwJD8mzu45P58SZbCSezQk4KG2",
  "key26": "3iYucWJsesABWkAfJLdPsoHxadBFNKTNrWbY6n55LZBuUrZ5cBsMiLcxUB9TMqfCxzVooLYWijUA4Mxqh3qnNxgp",
  "key27": "52ezBz2SGKtbCdXSyz2V6w27eLsCdq3stSSXuPy7kNP2bYxkFxtG5hyrnMbBPP2UTJ3aBUCNmEp9QapufnRCknxR",
  "key28": "2TwMra6FrrxetaU4683We8vbkiDKx8ekp5QFHACUPB5NRx4N5eUGmki1gKcoBqfBiiMrhkogFwzGKCNMVGo89BeV",
  "key29": "5HrFQ3sd37SKVCxi9zBTw1MSagrgXgVYyntehiZTE6mnjfCXLUZ72prbNTofNULqMqDawuwAnh1TfEbQTSnpifFD",
  "key30": "3eWnCBGh2r6ANaUMJ47xJvJbU57W1oMb6VuxHeriiWANbJBUJAzhjJCsaquyYzWAnvRjPkPtASGfexuwedpbpYdE",
  "key31": "EehyotpW9XT5wKMabnjoVN8jZAJLyy3hVkUNoqPFmww8wPEoAwo8iw2rJTyEBLxbGkQprszrNtrN37p63xbb8SW",
  "key32": "52RYt4nQJ8UJ1ShE4hqa2ewLCAsewVev8ya72g2Lho15CbTNXYXgViyVE4qKYQuqBRv3LSM5PyJ8kMDprL6MdBr3",
  "key33": "4fkEd7b4rFrpfipyNvDM9YbTcN3X2hHhk4UqbqnNPvVsW4Tf3K82uryHSXhJ5Lr9r9592qRVCSphLQYsocPok6Am",
  "key34": "15mjo6jTfhxqaanupQjZjifTB6mQYDpLBE2Lkvp2CnorQjFftaoQ9e84B2auWx5w62HXZWKJEi49y1T8DHr1mq4",
  "key35": "5k8w8LeMiu4xBB8bkMVoo4FA93aic2tQyxdHi7fKXWQeCTXGEwmMuDAto2mnykmPhBkatppACQKyHhmL12zFwGzW",
  "key36": "KrfDpubZCnqVXJxWmDLavPonufEqqJESmrz8mTgYVuU1AGH2EFQBJvZeymFb1kmVJWvFvWQdVTbyQYDTEcQP9os",
  "key37": "3iyHHuksQtmDmSMYTY1Z721ijNa8wTkq79Wy4ppaUQbbaTq64Y3ujvM8zeRRCec7DgRUMBHkHjkMvoSxXT5HeTL9",
  "key38": "3yddUMz85gFtSodbPkWGwbnwXjHeHiPzT9awgZh5cRvVd7zcuLA6aB4F94CFkHWhWiSpZaouUs8ndzbgieVjnSdB",
  "key39": "495Kqqyv85j69TKBWEmGvB5rz7NHRUVdY245LSaa68HT6bCwVwjyMzcqusodfS7FgSxNtQrE8ciR4PJGkXFCG7d1",
  "key40": "KugE55dHJC9KFgJfpwhkAhSPMAtxSTM5oPGcdqxFrrRzio3truZJVY42F86vSP2MHB1Q9n7q5PcVPENYK2cpFfc",
  "key41": "3sg7pHxRxrMcBqhSo21L1nKAVkrJ4e3QHrdsyyFWdzeBASp4UdATAUfBycPs3QSRyMqLdPVHv5he33Ztkgh6zsQq",
  "key42": "4LgQRZ7w3PupXyTC9ePSKZ1C8obtLcgRL9JWjtX3UehWNX52LwX8aZ3ghZrFsYn5zohZqPJD2nutcmwVGBjKSfGx",
  "key43": "31PfQRiaiqJgBd8CqYh6ya5iM3iYxRTnYoCk3YUdfM5ToCka3TCDvHD1pyGKDJY39wUFeAn2nvTEnyyBDU5XaxTL",
  "key44": "WhZZ7Z8htwmTB82GuKKWd3TjFK31RKXJzVCyxpRqvnY7UMyURhandWh2i89eaTKgY9qu1vF1MbTqaDUz4TCBiPk"
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
