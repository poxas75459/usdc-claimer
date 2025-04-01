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
    "3JzkyevjE1hbkxepAxinva8wgPL1EPqDpSAYjHBSndkNNzFTtRnENtbX2LntizG48Q9XJ255JqNJgUZEjmH6vArk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBgQsEhaJq93Mj2Z2QuJdbV5svFgVhYde9NuPYyzrMdgsyzh7iQBi8ndhkZ4hf8iekDKzhHdRDQ7v9tB7SbAC9D",
  "key1": "2uQkeZhaS9mCFwoewAvZfPrTAGoLqZzkzy3tA9x2HCYM2eQGQwgkEXrez3K49hopFfRcTW6v2u5pi86ACyrKGG7S",
  "key2": "4wa3y1adijVeRY4KjWGvswsDTK9AWHZL3bWbCtmg5EveRXgm6tMWHiYRC4eNRioqB4db1g7qbJYiHLrSMgMYEVFr",
  "key3": "3LUGb9UrEQxk7PZET1AxCNXQ4Au5Ejb5oURVnod9J6pcWtSGZ9fBNdQGVJKENJoj3orgyZtwjt18H8oF7CaMbAHN",
  "key4": "ctsWs36DTFKwEz14JWpUskobuNs2K7Cub8up6podfuiveL2JYLevpB7FKDuxsH2dz5Nc54tE8Cobtq5mAvUskmA",
  "key5": "5iCfDjtDFdNdfa1AGyy7XkuxVjpDxTJ8dSCnAtGd9TZKd7iF7PjYV3pU9HReTALSo2VZySwpoHMn37hN5aBg8RzR",
  "key6": "52yd5vWF1LLsKXAbZEbWhTU6ZX822i1Jzc2v61S68A4GYjRnUfgLGiZv2HEhiu9qJw5HJYdzRcdJG3VD7X3zzL1E",
  "key7": "45c7RzdyLd3xPFsETtvrNitcohwbbw2ux2YU85gNmsyuXn8NjGWbWosj8MpAJb1FbCFEon97gsuYQsrVjGMvKNDL",
  "key8": "5vjvBmDm5sW9PqXq2jeswCZHdvgSdPn4GHodXxUCvRNWwSS4ZfZk2goasHs8x8Rcb7mRCSDi5MJAFJSrgmBoY4qi",
  "key9": "2HVNLvbYDTFzHa4934Sz82zhBRkoea6sM1JGyBDoTWXFTgk8Yvu2jMqR42Y1UQZLaCeuH4ogBgLd1t3dmimHzSLy",
  "key10": "4xYKd46SXciYCVg5dit5nDn9iF1AHVPEytCeQw7YGMpp7tmp2GWw78uLLqnas4ygPgRi5PoSSMvBBQ4scXxfL6g2",
  "key11": "3zR8Cd62vYeu2CBzULii334xzVtw5exGRbUv7hdR42YTYEwwi4oup1RxVRjTbnvYmAbft5bKrF7MpxpiLvQAGaQo",
  "key12": "4yAjnKwpJDgFGSc8TuKJrCc69seE3DqEvv6P1EobgTVUjdLoeVrzCskmTqa9ryfuxqbrth4XDuxXMQhYB37VyntF",
  "key13": "2bphBshMyemfVRwXKdnx3KexubRj4AikBxzeWuMUNgzit77viDhE9XbPPagDdjgWLPgYKtEr7f1TDRHH3GYVB5Dp",
  "key14": "49DRo9URGuv4nyH4ikQoAiPuKTS8un1E9jg2gxijqvwzUJYjMTrWP2BbhZcF3e4mQ3h6FxyHLZEtBeE8fJgf8FSi",
  "key15": "ciXvEAJHt7CJeBska2W4ussB7aCyxyDkHtFttMbZnc1qtYV1zGevbikz7J2PZTweVLVr3owPaJ9quL1WedaUTKw",
  "key16": "4wSgaVx6538fg9VGjFKzQ3xwKWWhNsAU9xsamyXMnC17eNVUb2ZRgYzrshayG96y1AAkoccgS1kfVp7kMjzBCibd",
  "key17": "2DMmxAWewVeVvZuagGr64nxHWgY87SrsK6LJwzXE96GAWx2dgDegv5sHzG68kktJ36nTYKd7858Jjr2QQjTVMuVn",
  "key18": "455cFpfa9FUpCDxZrVX3ZmcdWK2uZJeU3yP4Q7yabXL7su6BkDKx8MajrVADi4vMusfDPTuCYRFVnZbG5fnJPArL",
  "key19": "XqXW5LtU2D1AuRD3kdcC5v2GYP1KTMtZa2ngPhb6Z5jcbmRs1NphqycaAcshd8UBFcj1kU9wJmNNiKELSPC8YgN",
  "key20": "un43YNULHNQYPpY7cQ1XwBZjPkP1bg61i7Us8D7AhM5vH2HPDX9aJDrtwhKCgV7RwVLbmZtytDgytc9TnVZM3z4",
  "key21": "3WyRdjyzvyKNP2GeKyXm78kzsXFNnxhNaUQ1dR2kS2ZZfNwpmmGi7VmTb3cb4aZW1jWER2b1YnoisXSC9erKxJZL",
  "key22": "64QNj7VMjDqoiWuSw4V4CQbW6q4ksFScbzs9P8R4bkefvuMdvP2rnoLLr2SB8AkoNbws93CzSCXbF45xeZZmkbk8",
  "key23": "5R4AJGayc1c8pqPYq6Jjd3a8Cry66B1iYbxWfRe4oNCGtCPaDAY63nb3dY88BMkB7MeEA8Ss8KheuTKgsUgAThkT",
  "key24": "KzKbwrTaadrCKDr4shvHyAqoo6HyLXjHFjm9gxPRFANX3NUC9HWdeVwxcXFpqGzSDDPLbKfyrUae1iBEG4NusP5",
  "key25": "Tbm2X94yJGCYWLjfgPaqbCXLWSGw3UVserGxEjQ2kL4mRijawn9onF3KUAoMbXZwnAsYy23d113wS4ic5qAwL7p",
  "key26": "332v8W3QZAEy52jPxRmnPQDn1BH7SDy6Ave8ZFAooRyA2WDvJHdz69rRBwuFTyVmtc8h1ar3qnggxEwPVukjbVm6",
  "key27": "UbcBmXjgNtiYmxjyxe2Epo7QEy8mXPFdwaymoszHD74jobfCBAx1mYpaUEzvcVaXVYiQ7CeGhQMr23ZHauvMUJh",
  "key28": "5Q6i9sit2pJn3kYFY1Try2aGaX1NJBMxkLnAQbkTUEUjgeWFd7AriVEEGNbew3oWYfwZ6TQJkjiSRzmdr4ARWmB2",
  "key29": "7GoQAuaAzcNhUvvKdj4zqRRyPstacZuDWYViPgozh6CpeWjp617jiv6e6sfyi16g49nKkKYCnfpgNXmimqG7bsD",
  "key30": "4tmciUjevJsiz7wfUfoFpooRK2fCx9FdP8qLz8ZxoeB8BJ64EN5RyJyMxiNBYLZbgFYrvFquMV6qctw5fkYD33eN",
  "key31": "YpxDJskwhvjZN71BxPgSHdvV21MjP8Pfj37womwUHoNGgyN7BtsRaNDkd8svrCCKZegaw7dRTz1T1Ywv4XxxWhf",
  "key32": "VaCX99dvREG3X1bcU8yUWs2hc24FXmuFKUohNZcgBqnjEQ9tG9WSHmHA2kac3PyHKT2pUuPn4ZjHDw8JZKf7SyB",
  "key33": "3cJ8brFMAp447ktgPP22gMVebQK1oqqnw5i9fxJUksrdg3wxdvTsroPLb9w77ud858YgW279iZ9E3Z7dr3hyZHmq",
  "key34": "4G8oXERRfM4vuWJpGG2vwuZf2fZQFtYYaB3bLeX9EPcXFLgw3z45FVHrM9DH99RGZYtJBBKc8bx8va2QkVzik964",
  "key35": "4hDCXPha5RJC4FkYnCL59sJcfkeeeN5Wi2MQvAwc3dzmpDGKq8nt37K4ucTU2FLMH5uDYL3fokTZ1UNdJoRCsv9n",
  "key36": "5VTzLkGThgHfXXBxKj8afB2jeFQzUvd1JFmpNTmQiYgScqRCp5fbAX1UzP2U17ZVawPPATJNQHtuwFvmQwVBsbPQ",
  "key37": "4HsjF4FRKho11mFtf9NgELa5BCnwAXSuRE9wifLd8TjvGuTBhEyE7KddkCpGabhUuuJGrK9vjeHQbSMk4BJPjw26"
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
