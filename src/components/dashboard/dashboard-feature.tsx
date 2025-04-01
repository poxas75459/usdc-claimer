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
    "ExVAJ5XQ84LmMLGsUS6aa7MERGUHQgcZzHLcAxrgUbngk2ERCuz3xVJjPTrAq8ZM1zeCDiLhrcSz2HydQYdic9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r7H2Hevy8vGBnaHbnQ4t3ZVTqyPSrGfmXEbAHPszE5GBtqkNa7TtjQMxVF49mivQ98r6thWC6EMn5n5ueiLJGYC",
  "key1": "6uTa5shJ8PsE9RsVPS6v46GjjmRGCKqcnZqcyRUaMgX2ouXpDR4XJkddt1mfdoejaSznq6VicpMK1ZXdp8v8EuY",
  "key2": "MdMuARhMmoUuyZMfi1f8nHv1s4edFPenFsTZD3x1658yJjEewCUbJGYhF8xEn7YLsEDbKDpxKq3g18AMqB8JjKq",
  "key3": "5DHBykGZQr3n8XgXSqUVF3pxgw75b9JZXufqa2EyLniUvmncSeg7cvmRH4ewK5MSpv9pxPoXP3pHsNVtKEctfpFd",
  "key4": "2dqo7ysiedAwhhrLjVicFNiiyDdPzqdHNsMn45HiRaMjswemK5YgiNYhn1DAr1W2YH8wWwaUUJUaLPasxvDnDtEs",
  "key5": "oHRLTujDEZB9n6jtrGdEQE18i29VkAY8h4B7HUkoCatEx48hSqD3VjMHw3K6wTLshqXw2aFG4CcgBWnSUE4s58r",
  "key6": "4qqv2499NHaVjU466gg81wHF38EGLUpa8sEyEv18GtsEZMDdiLH8u2eXEFDePxXo5bHu51nRyxgWmaZT2G1NuYuF",
  "key7": "5VR5TLGSB94nnNWTJzzCt5MdbwGSbzLF8bskh2dbs6hSxqXjaEcRZqUNtEsJxpWcwUwYtC1L9WfyousqGH3SDbfj",
  "key8": "42k4ci1BPSrkSRYjs575VzdckUDPVTKorVBEXgHqqQ9uK3h5emnq3Uj1NmGdsJKFaw73mZ9o1UGN41WTa8KFRfkQ",
  "key9": "2SrmczgKsao9oLTwtY7RrTisXsAvQzVGuUUKpqDVbKb8fSfSFjtfRcezQZG4xRCaYrJjbe4TDh2N2BnuXJVmBZYB",
  "key10": "43Z68Bo89ugzKoqD6cDRnrm4guUKGL65hij1jKboAbVUAuDABg2QHzb4RGkrQyg6B4H5FW5rVgZGpZAfkD4RcGRC",
  "key11": "rrzoP3LBu8riVu6fUPqC9sN5JF67DVoyGt7PUX9RiZYJ6janaioUufZ2q76X9PAoeZ2VzYmeh8xNjz6ig7dF6Pc",
  "key12": "BtmNZZZEApLFeWkXUwsRmUy9TKgKvr6VvdxwGozBwSrD7uBUx3ZFnvUP7gVVayoZ9rtNqiGsVNEonAb6PMdksrh",
  "key13": "faGq4BHaN1TUYFfgiVyESa3EXHnZYJiqBZcqRtrLT2zgCdGVSzVjEGna9G2W3GRHcyCvoz8uvvmZnX5o8h9HsJT",
  "key14": "5A5o4fHuYsNjQbUKdEzkfMq9MuKSpYfo7PohGSEvBtPXZAi9DhTebCEDz6bKmnPcDYBAmqcLC7NZwgvANhEryUx4",
  "key15": "4qWmNZHNm981NBD9Y5fZWTev1ATuJ69wHtfuXNGxMnfaE151MJ4KJ9g8rNNJLd6UXWisQzLTJtSC4Mf6covK53jp",
  "key16": "5EjoD7sFv2tZFpeSWB4SMB5QxP7eoaqmZTgTFnCfwRoJjdSaKf5DAqdaHi1Cu3q9Uc9BSVfMoj9R8xZ7BSD8eLz7",
  "key17": "25S8K8Jt7bcguyq4hS9ZXCsCTxCwmujvLBRw2XJN32sFqt8iZq96J7s8k5w5Uqh886HpauvK4qbBRdF7jfqiYHtA",
  "key18": "jeM98tU1F8UfZMgiEoBy82xtQ2Na5n2oZcaEBuPUfBDRSJCF3Q8ByfNYLeJaBr1L3KyYmoDMfEZywJrBojVTEJa",
  "key19": "gAqbENnZZbzWy45gr1Ygc7a1XUmyce8RUN5GcCpLKHs23dtWpyVRpC6wfR67sJg7zr1F82sCVEr5aqkn3gmPogk",
  "key20": "25wqU8X3NSiEmV9dwoxNZ5KWhh21sAT52MPbNqCfJUxBH1UyDvvLAiyEKb68NxroxNonoQf9f752bG5K55s4PZLp",
  "key21": "4RFFyoohNoryEz9d2fpNW277Cr864sUQ9or4UXxWnN9BKy9gPnuE3vgFmkgt4SJsoke5U54D9FNE2GjPWsD9iqa3",
  "key22": "4hBqfSkQxJ3rj8PVjYbz1aW5HvadUbWwAAcNyrcvk8eeUyrvhWynagAcqsV4n49v3J9UKuSqQv3kiTNCYvqfWyV7",
  "key23": "4zSofncWxQ4FFV6UjeCoud75dDyNxY2MFzH44mMqNqDguqrZDTv4yodFM3bookbEP3s361ymyqoevqmUYhwt8xX7",
  "key24": "xEgVLhETaKVyTPJVGcmWTjqJnSAySoKmbucFKzDA2fLU7kJKxEkYJRo3kc5prS8fD6hykG4aaYbWJic6nAaKpDX",
  "key25": "5iWxvjSatPGehQBkaMdNGZiWAraLfcQcrBpjMqrPRp1hLYnGXGvytMsJcAEgtuMDmmGkr2P6iAjpLW8sbzUbTtuG",
  "key26": "4RV25EjFsH49xe467Xeuj5KTY8nso6vKW3sj8uVxvEnp3yD26sJkvgcchvjTHJY5ENCiqUCipVpiGLViu4nqLTp9",
  "key27": "2TfSphVPKmM3Edmep1CKGZ7nfzuMTMo3aNkAyV7iTU1yJkZ9KQquMved1Rk4nqJAfJK84ayAqoU2y9V7YFzTqtbP",
  "key28": "399huyx2bNn9Xj92imjGqaDVzy5QUYhFBXp3N2P6d3QnTYXPB5qM4o13BFVgzgaNrP2sJBj6jn9DqV7DeMR5mCHK",
  "key29": "3tXkfKnUCHqFRrmT4CVfNxuX4TRUkvTcpdkPrzAxPGpnmcCGDAZAgvMPk6dqFLZmnL1m6CSGbx3hWvU5QQuffiHA",
  "key30": "5SSfsab7i7fskiM8LpUWuMnUHQCKFGiGkxqRF153aruMCRuGQ5bzCVuRNHx5ZQVTkWesQRDjSsx8pL7Xq1CFhy9P",
  "key31": "2UUpK1MpsHkQB2NKZHig7tZFTbDdJSSUJY3fkmBCGuwCcTfCSPgdP6EbJAwaghYT9S4Snmb4jdD25ZoPqSxRpcU5",
  "key32": "3HbCNzrmnQCMnLqFzcotpS6AjzwAMMzTUZxoqErwyf5Ry2kEaeokaQU9DAxBtRGr7oJJNmWRq4CsAE8dVwF5YboK",
  "key33": "2htGgLEJoRcGQ2hLMzJADug1VPkR1NuheC6Lxk89o4XRL7hjNnwGD4V9gDN9mgRAA4S7DKn2CPNfNe8x5kLmTMVG",
  "key34": "rrn55E1KWNusJXrfaVzhUA2LKGYev7pQnhaDh4bG52sufpFwdFmqLwzhC8G93GEkS1WVUoBMPUSUKGHicbWFxN1",
  "key35": "44Xeoke4XyNMGVSnBbHE8aAreas6VQ6NcUrANXzJB5yByr14z1WFHqF63Cn2oj8mWfTaydjfDPwbSP9Ze61tsTGv",
  "key36": "3x8WTcs5Fwxs2QCr8Ga2duHrRafzcsQG1tWH5sj1Pme2dZpcZdMv97QRwpBgGSosGNg11aTNb8mfu2Vhk6eJtbjg",
  "key37": "2GuH33tD84pD12qt4i1VgeV8thoBfR62S5fgyxwd39i4RrPCiRd74BuU28z6W7ZveEVVVqEfaCvpJsxMu4MNus5A",
  "key38": "4tFDhRSfZqzbXYsojV3oru1aiL99JGmfzxZudPHutoJC1XcqAU8MJoitbGsAKypjyP4tLqsx89fbdYwSSoekzzXS",
  "key39": "5gyCYC5JHhSHui5SthzxcCEBxvkm5WY77pXjtyyGgHe9mitVaEgLSjbcDUS6FTXeEZNbqA76a4oBTrkVQLxTr8ST",
  "key40": "3McoZeoWr5SMrCQuVTjvt4rWMqLarWQU7iohYp99ym5sMxM3zyWsfvJXJ8vpTFu1M9FFbd8k4Q8bVHc45dYZnrjK",
  "key41": "3BSHdRUN2R9s8JCrYfuGsGvuRdp4THWCN4e1vuWrb6PoC1E7YdJR19ZvCRhoo7YMwbrd5uJwjg8dain7ZYb9ssUP",
  "key42": "2kRofx7cBNdYXyqP3vWm9L7fcoRG7GM7tYZnsDHr5YA3cvmFDgTfUvPeawD8vcYvmFVcRquZdiw13D7qoZvUaUNP",
  "key43": "2jCQE1GbvDf8i1fZk4S9ktRyi6tUjzWd8UuT7SvdchGGqR2mpR2QzUKXjBgamtyoPgmn3t68TgFz2qeqME52XwLb",
  "key44": "3uLBqCkfXMMa8ZzHA7N399vZBppSP6TCamF5MHhhCn3nzmQkk1me8ivr7tiNbLRN7AcjDb1JCM3BEy8UDUHJoLRd",
  "key45": "4HuhVSsvtmBdHZ1LgXT3gTZ2WKUsY2NrSWJTpBCk5HmFtRhTQGUSc1vTK7f8LzzapVjFRJtqhED1qkBM9icb8NwA",
  "key46": "wVF4BkV57kckbYGvNoKQeQ9j4CM1QDhG8KzEGKdmQLE3fGfoLDfonYABfheHdFvat3mWqJsSSyN2cm8CwEA7ER9"
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
