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
    "E1ac9GDc4aNfqbSCA9JGixAwyo8ECSJQTzQZKvUNsaXtuweQ9zsMgRXtFLaybV5XsXZhYc3MpL6yUH1vsc5i9kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZtaE4Nx8eNCeqTpfNENMb43RxvSjgZt6zUjPmFfknJ7MhmTnc29z9u5stQnAwySSYtPqyZcxa6dUaWuYmKxZfd",
  "key1": "3gVKkWBxzsDLPR6L7PsxCDQrg9fX3LPyJQVeuMtFbm5ihDgsrEqAB4t9zTid4XVotZ23G2fxVgy4WviCBp3EiCKW",
  "key2": "54oQWVhoeXeiWxNPXw3Ujc8AGSrccuHpWHzg6RHBTqZYMtPwcCGENn1p2Uq2nkoCRpw5bLjJpMgqPasdG9DAMwyM",
  "key3": "5j37mD3uAs7QFqvZLb1vMjFaYHJam2A7xNu8zYXybBxHxJgtGECw88tx18sQQ91PBeDqXKJ47EHJ4vs2NbDMfHnx",
  "key4": "2rm2JeiKrQBGPE4rBnxTHuTdRtN4gspU7SVytuQhutUZZJHxBywjS58B2sWQhVwSgUfSmjGoHMvrh4xmvHqzKje7",
  "key5": "4SPtCQJABcPQVoTuJRMi3bPgGPSw6iHSCy9mu3s1QXW64ZsKVi1GkgAekpJZvEvqp6Vugy9F7Z5KTwWaMSjro8rM",
  "key6": "2qpy8FLY7LJLDPoR8ecf2ZBhPhRZ7oDgfE4z3gqupDhsmMKoxjKqy1ruEwamNRq3guyJ3sj5rnfTU5guAzsNaLo5",
  "key7": "3Uuh2XWmRbprndcdVasXQzJWcfsrwczaVoemkSrCDUmoCRtD2PpHfCVp7NAKBiZDERtgSrupGb3G1UtkAZ3DZXEA",
  "key8": "2zQNoSVfxA6kfzKa8qKSypvTJaKHdMdv4JoVnv2JWcPbas7dyQkQqAPpW5M7Q9ed77Rb1e8iTAEDQS6GBw7AW2q8",
  "key9": "2qmsd9irdoQETazm8MNMC8SWJwQDocchrra4GqU8pwHbAGYTmMxaLTCoFA3sEc9k2xmBWPCTi1P1nApBNy7W4VF1",
  "key10": "7iawuzaDHrUXrZuoX4p3cZ2PeMmzJsmajQs7Vd1jErksdYW1h3h9g1yJvHq29nsMDpG1wDVXsbPjF2gzANCJEyZ",
  "key11": "664i6PRfGs4NH4JnqSzj1sDEkztLnEfraEoRFhWpcXXXB9etBgEq1azke3hL1Juty9z1ptQhD7v42CbMJqYw41RC",
  "key12": "5qHrtdVYG1DimriBX8hXaNxXvXNf3EpAyBmG8AQXSuRuhcYcMSQJXyS1AP97EwTBdT6Xc54VsX9jj19Bo8gFb7yU",
  "key13": "5DB8YjWULBWmZ99ZwCrHBjvkmWLAKSNRYwKk6J3TmdYMykucDjeUaduxB7EE6dTBFiENBugFSzAq2cF874mGoiDx",
  "key14": "3PMYPvPzN6GsQGcdMh6LAKBPxztAPiGybuco8ugguFwJDEQnW4wbBRrmRnKh8F3jZfUNfZguEwtfe7cCdaM5JCTD",
  "key15": "3ZD6Fzaz7WJjQQ6EghTz3HezFxSoQ9bj9hasTV2H4KaBK5kTj6Jz4JPK1xYqrp6ntUmVYdaqigsnNfCc3SR65bcT",
  "key16": "5aj6Mj3K5eys9BxvoiKx5dYAHsppEps98jaEtFzUHBmLhRwd5KFyvCgJ6NFWqoRfiLzEuvCeL4hU5UUvDYZiMHQj",
  "key17": "3qwztZvidysHTZYfSXy7Ze4rB5pmJKQSvg57itkSYwyxYHiBSzkHuX7WRCTzD3sHwjA95y8moeVKZ2hqudJwGPf8",
  "key18": "VuGdnDe7NH3U9pB6ysEbUa9VpF46wDuGuod1jPDspySp17MDVtw4cdWwDyqbQra2LkbFr9Q7ZUBTE516eKiTvT7",
  "key19": "2hK1jkrZFa5KkWUCDrbAgpXGs6ovsEoEzhMDLDBvCq6D46AMEUEamSwe96LZZdrWnQPLx8TuV8inxXZHqvu4gmkt",
  "key20": "2Tvox3iYX8fDN7TcMXss19Bk7HUERj58sdnLkW1xcBp97DSyVjX8drCFfXkUR1W6CfVDn5h6vPkiL9zyg6Eb3ATY",
  "key21": "2TUfLfEEZdq8iNtzZLDKKcGYgpKoAHj36EcAGwX8Xrd984M9dN9oKZxfyuYzSXC3AZSnU5m3AnsDmvCGqJtX8yZN",
  "key22": "4cEsTAwhXWYD8v6YpPniEcUxipo1CX3ovXPe16jay672XAAdoMks9oqnsaEMntggmZGeCUbohpUJnWbCZdEq64y7",
  "key23": "5LS3JprgxdzNBwDjhRp3kb3pZyf2dNzNMW9paBnzyFKx7EC4PMBQUQn4HcEC1iczxm81aATcXXtMTYVBX9UPbQ86",
  "key24": "2TsenAKBk9d6sM5CfGgjrV5CqCWkdx38Hujt2fEmZsCKuenqWFKMxbv3Mgd7ogkiKN1XWj5w5xc9Lvqf291on4r5",
  "key25": "25ReZyWVQHkpasNAGpnkShk1RBWfEktM91gkLi3ngGYWY7T5Q8gJQnt1ytogAc8mjVUJgE2eJo4SHncekxd5hzRA",
  "key26": "8i4g16DdmDSDN1kJZ3CcaQVEbfpcwJ9w9D77L7cumfzzWrA5Ep6D5m4N1yZwooC4MingELaeG2yJJH8qUgSQrwN",
  "key27": "2Qujnch7ff8bMRbyc3LjLK9zjRNTSDoe2YhcmgVTxDdEsNbn8AC7Txnxe3GrTSK96GQPP5K238N3e5K6T8qZmdtr",
  "key28": "5PZMQdweFzy2BoXqVnmXzm5emMam3tS74FLiPJZ7PQW6dDUm6p69C2AaMjRqeenzJECmHDK1gYtVqw9LeczovjCd",
  "key29": "4MSQAz4cqxsn8paHYgVnpLQPBXFRPysRdbE26DY5JgQKLWK4Q3Rb5vY4v73do5KWkGerAeySefJ4E1ceebVBjAk1",
  "key30": "23JgAtBf8U3T3MGyZcaXQyTHG1ecKpSmPs9hbHPobxci6BTq2dg7FovJuy2fMRAcDCA49hHN8Hph1n6AFrvy2nq9",
  "key31": "4unZtGCiE5prRvweuJvE94ujVJ1YbjDpS5ojBy9yvqQRhAc1jncNDsNA2vYgaouFEFDjYjff1sERXm9r4iEm4DJf",
  "key32": "383FaaeoQykSjQFvQLvpsAmG9hwwvQRT4qqTAfX5CHyuxYiVQDnttCvyWd7s3ZmxeUcg5A8tTJk34GgbYeUZeM2K",
  "key33": "3dot562TLV8ooFz2nJgT5YGFaeftsEALFH38erWtsczrVjiR4vC3ZRYGM8G7oMGGxCHBRWeGvgXK4b7Xaow3FHKe",
  "key34": "2amADMbKovu6bJHaGdXubXL4PG2uBiRBMjqM35uvEBDZnSjyRoiJDoyA8PFgeNJpPWGiDwL7PWmWV9BiL2MwRBQz",
  "key35": "2uPf4B5kDKWabVwbdoRAoAEBtphin4ukqVnAn6cRq1KVL89WngZiHpGxuTvujJ5YCTEz9qb1NiiZqnFTLhLv4GiJ",
  "key36": "3UvYb8CbkLka5qaBRhE51n5MFQDyXoKUzT8i9rm1AFyGKVNHQH2Rqjn5EFTAdUriRcHBHQ38weoaDtWyzJRZcpsJ",
  "key37": "gKW8TT2PUZHMej8JEJsr5BiVBTHSxNHWxD87bf9MoBJ1nJsZEQ6ApcebbHKqdaZh9dbqcEsyafetLzWjmu2W86C",
  "key38": "zTpGdkFed9SWvM43EwF8APMvSruhTi7v5mREf1rHNLETjJqPhf5rDcwm2wmqZMMf2kDExwhCBsuY3M6mvFWEf8c",
  "key39": "5Aaowa8SVx6CwdiesBDrGNzBKMvAnrYSRmnwenB6oabTzi6XUXzyVFJd3aN34nMSGSx5L7aJr9jW5wqhdKNAFK69",
  "key40": "33BX3uG7grQVkfAG4XqEECqLgsjQLzc8hWgUQjKfVA1cGvP857ycq2mEu3hmSZKw2R8mLTGnBx2zmcz9kh8t3gWb"
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
