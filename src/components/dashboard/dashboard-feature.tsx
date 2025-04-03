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
    "3qKzDaXkvdzDMX32t49rV33DqAi91wrMX2yMm7KegHDWiRceFZfmeuqHdRLsEGGqCY9t58kE5ACkV5q64N441U4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Xz2MQmaUdWBbmPENGpdBhLJRgAVxfesR5fU8ZdtxMop8Ebu6Cycc7bcYypjwo3zCjGwd95dvrJvNmj8bkfG5yr",
  "key1": "4Dz4gN734razQ2eJaZguyUmR9YxcCMbXwpmHE9Y96mvj74kSBXzjpWNud4PwWxuFDw2zirToL1PAfGDbLgBEeN34",
  "key2": "5Ejpa4RRHfvTKxepnP1QFoAHikL6nP5K47dv8DQwSWfbFxkn3mj1Ziyfnb4Jc9gQCaTmMsS3TvnubLhoNkdmXVUP",
  "key3": "5fq8Mwa89wNVKDfoA2HajknxdeWL5Bu5J3mDgUgtF3NDyDVHAJWKT9SVfJuZXF41RfwQLoRKxM8Fmit1nHY22eZa",
  "key4": "JptS7oXw5cfDYnj3eeZRZh615UqZsdjonNAa7Fsd5HoSEdimj6iMkbjNdiymm9iCj5w4daH63qXEgX2m7uCVxLb",
  "key5": "5zu3eSj26yirPFV4tJbt3MCUcn5JaU25BkSTRL76GVreEoXFWGefcGEPpeYbyqonJ6d85a9zDTmXrkxqpD8GEC8H",
  "key6": "5uvhGqmpZYSBqft8mjyvzaQcWDYonjTW57HF3oAtbEX5UWXnGxvjhLctqyBpLDgoPhjL8xE4g1dsteYAcJVsSTLT",
  "key7": "2eMJEiqvv7Pr4FWm8WoUdpRQPN82Wr2PTLseAPPEwDg44W5oJM7mBsXD5QnYkrSyRpt6v3D72TCyv8e1D9uSgo7y",
  "key8": "3Utg4tsfhPvqRJvJmjTa98PJA1p6gdKwH1ezmHPhSA4j9Nbwqvko2tN9GTSxYkMn7C6mNrgXNtHEkAq7QoJg1Py7",
  "key9": "5pRGM14fXQc8nQUGejk9mrmZmodGkV1G7GbKmuxd1BmFuPKDKyBKd8AmQRu1d4UGUpipPZMJAdQP2VmoXsf9onkX",
  "key10": "32UBeZ3Bd6fNzcm2Ut9mfxLeHmP1qPoaCNPeWbdnBinZmaSndzL68RTLxKvaYAsUEcf3rSfuTWLBeZMbAjD4Vxbw",
  "key11": "2P7arkVDTNVPAZ9t67ZZHTTwJXp7EQYNAvZo44gwz1CeeUSH78zenYS3JNGt2qVpdLeGmEGg1RRibRerpqinEnrh",
  "key12": "5Xab21fgQr2KMMNbL6gK5BGUJLG3rqrHnupv1Zot1UHPLNeJ5uuPPy9hFrpyQZDCHzmqsDeVt8JTXjH6QBjPQZeR",
  "key13": "4BVPVyspLZHSKJ62YzDfgMhLvm6kEfas3tkyK4mrXPSQK1WBRV1XxVXn41aiuXxzjJoVbrFizY8qqqsLEXp5KKwG",
  "key14": "5uXiEDxvdc5rUbQZJaF8USUgS3qtEmvnXaKpctEQs3Kgy9jhjZP79gfYngjEvL9i5d8mQ5f1CdbXJFYZB6pHo9bt",
  "key15": "5kiDx67d2Trt1PQq24fkkt1CAHvrQ17qNAQW4QNU9Dnd8hdk3iszp7J2rZQaDonfXjw7K8BtwrWKFoHxyu8MJoct",
  "key16": "3AMTnhuMGzoWzi5Yj1BiK9g6g2e7byW9kVSPVHQvbj4w61rd8LZGEa3kHBtB4dFm9LcH4B1RoKftJHPWWBeD3Rji",
  "key17": "nmeA68oaEqfjZ7oR5FBva2EzsNxu25jqUMo4WBoxA4FdMkTgpxF9k87UwarMjyPiSUhQbD1d4XkDSsn1vmRceAD",
  "key18": "uR57X76pdNgm8jqLCTj7aFNrQXVUfSo6nmERT2UFRd6dHzyQVk7YYzuCBjcKik7j9ZT3vXZRRezrRX5DVMNbAfx",
  "key19": "54xNstTpAoKU5s1Fthf2yDmqUYCMDaxDvZQCWDwahTGSCiUMHJ1VDh72DQNxnwwz5fkCjRdWRgRdpkKggtmKs6KZ",
  "key20": "45UQuNyDwNJjbb2EmfYdiDkeQbqcn4budrbUAJh8cC9KqGGBokzivrgJBsXhQ4JjhWzu7yQGi9K5Yaz1zwUErwkm",
  "key21": "39MEUMYqi6gPFGWo9RPGut1psxHV4qatzH1eNp4RFouRbUNJgutUzcSc8Zu6cabtu2kS6VS3XxsxVP6oZrcBmgNT",
  "key22": "2jhQwjmBvMmME4j4qWj3RYEd14oR2MZRqAMNzWhMqmJqMxUX1WanpeXqsN8DMhDAUn2tfn5RM43pR2NeKjdRQDp8",
  "key23": "KAWbAtjK8ouFxKdTLDrWGStn33dAsZ81255QaDRYBkmce1gxsZMuqJ9iPFrcWssazu9CFbPnyzonDMWWN4ZERS5",
  "key24": "2kD1gDa2fqrYMKtMhaTRRW4xhKsfDVaNEyUkqucSKEuPBqizvNNFKdKZhJfA4mYmpnfg6x54tats7bdKARGuG59f",
  "key25": "nypiYZKUH5ezjKY4nNGvFnkh9P7CsYKxGSMFghd5nS5MhkgTSoL8ChhmmMyXexpayKEnHqoxRVWMsF6sNLzADLY",
  "key26": "ZWmha6jc7Cs2c6wSLbWqwWvtQLLKUbW5cZEefQx6NpB7ahTb5CuowRWUmFxwT8y3nREzVm34DRYEBPU5yXYwkBK",
  "key27": "225x6QcMzc2SmsZedW1R5zonVJSn21bi2a1n2MVY2GjzYJhxFmzfmpkZZzbTrwmYgrWbjvz6pTAB4f2pPwf1kzpc",
  "key28": "2o6jkpbg9iQBAropEiCh6nUiF7T4e5Fby7FpnSP6ngZfC9arTRVBweBbnPy6Jv2uPxEMQjAvafxnJxqrXe6UmVvx",
  "key29": "4WNh6AsV964XrZz2gis8qHNtR5dEbz7m9TMunyx3ESWnqNzsVPpyQtfs874xEyiN7cERPHxkckjh7JKdGwLbuyBY",
  "key30": "4P15a2QAuujEQpBeSrnySYr92AgUjSCfiwKati2ZZNFG1uV41SttMC1GxyAhP9ub7X6iZdNAmUJ6HQJkiYiwtaeA",
  "key31": "3hi1RvzfM7NYSEgp4gCZtynFfDW8NS3ADyn6Gwo8tkYmnMtmhVnqcTXvYUXa3WoH62MiTWHsMXsiDmA526vL8zwt",
  "key32": "272x3ZmvjMnFgXFfTJt69T1hLsCmdoEVpa32YEgbZDNQLfUJ3HcmFPiX6fEamHNoED27fGdtrViqRyc6CVYJZMnH",
  "key33": "3H6mt81MsDhfr5YBnSugYE2hkGi2oANt5DgG5Gma82dnjb6Q8uPvcYHVJW75frgDHGjbD7AhsaLKRXkotNYcpUA",
  "key34": "37XStboMbexKYiBqUEgh6D3imE9bvMc97YqberdtTvZ3LZpZevjnq7SpcVvLAXB1kLLa82qYdycoy1UCRTDdWyGH",
  "key35": "2yDUC5crREV93o3Z2SmUmLCt45BKYTxvxh3zZiAr2dX7Tg4Hep5vV2QdC9GAsX8k71S2FcPDyqMn625tMJbkQiBZ",
  "key36": "4392ApYXpk6jpJyCEHuUtDMUi62VswKpb64oQFrNy9zfT59hsWT5zGyjLMFnuHHhZby45qYEDq7EqKRysLiAR3Bv",
  "key37": "3rwUKBu9qthb9CMAjEEEdNFHHAZHQvUx3wBir9tQ3mTCi7uEW66Lt5jXivz4ECJj8EToQZxaoxyNaUkg6PLZRG7A",
  "key38": "4uzGNWjsfB8N9By6JUjP1ZsJW3VnYEjvH5132orhVsC53JihxupuBpMUNruBSP2nMcgdpVqEo2tfi2uhJBdGU9KF",
  "key39": "2mpWtVo6xHEZ7GHkx7M1wnAUAKtzuC7vzqNiXa7ogji3oXFkpb4EJK1K3w3mwY1fYQ67gG5LWAEs6gZsbdiDgbE2",
  "key40": "5eiKtDDw54LLhzHgDEwm8DeVbseJx9XkFUSavBHw1aVHWmbAEfW9QqKxPMvDqHNjP9t2d1T1yo1ETATR7kfcfv85",
  "key41": "4mb2CYBX5UHmAPHmpDzqUSzLNdL7XpdgWBqSxPw57SDH2bojpZLvxw7p3odf2hT6Uy8YxSweuVyCQQtMgDFRbxhz",
  "key42": "4mGNBPrcx78xHRJkQUsxicgLL9V1UtScias7Gh4ZMp1yDJXfFPNJVGgn8D4MoJ6pEpazQudpxrA9ad2SN1i4Mh3E",
  "key43": "5Luh6pYH4tWxrmgfRoZ7b343afGMLhrxFwhGh5SD9BsGX1WJEkQemyhbjocNkYiEoto2GWaoJcYuo24eA8u8p21Q",
  "key44": "63kW7zRzKRpbLoNYhPD8m3TyVSavV9zKGA5Ai68Pao9RCEAp2GJrhXnULALqHidsQio6QTHdA9FiG4TRsSkAKaHw",
  "key45": "2kYPfLkbmwUhy2Z8Bdd9Ly2TXAnpr941a4teBfYtQRcfu5jU25BMd7pjeNbBBZfvgbU3yAKxgaSfwiQsTqxuKud2",
  "key46": "3x6KsrWC5hJiSE4t8aJUVw6Rp2zeqe6L12cTM7gHdA65MEJFUy312991Zg1TpzPB3iv9GkHqKM2opoS59dgAaqmG",
  "key47": "3TZLZBS842vmnBujB7dszdGqoqonXKxyfecE3rXSNquRMtBaYY9Tj51FchXEDezbA2d7nsWHLk5SzJ12uRToyDFb",
  "key48": "2r6dn71oXbXzZyDYyA14F3iQoS1qb1Ee9v23ZdmVSPmBC7Wi8JDK6kxQgNgyCY6QuUjPc9MTa5MAP35Z8Y2hzRPN",
  "key49": "3H88hYYMmg1G8KvUqB2q3gGRnWm62N3zcx1vxbnF6zJVR4AupPXmVqJpYSu6bsjQxiwASHNNRPxFBtCVjfPExdUD"
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
