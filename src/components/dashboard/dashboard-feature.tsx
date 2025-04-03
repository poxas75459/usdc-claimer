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
    "65fDYAUQEv1k9PWtZsJv2r6KQZk57fqm1RBH4Wn1XkjSFRjzqDWiYojAYwAiNL3HfWa5RJ1kpQ1HQSmS1P3enALp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADN8C7BtVsoTymNWUQmc3g7koQvffhpcNJWqq6VCaRHfCxPaHV51JvghvDK5R4kzNzACJVy3vMMkSHXMGXE2kip",
  "key1": "2MzxVBCN7aM8MPpkxhgJdxG3yj9Urb8gvZgsPLnE4RXBsXPmueG8nRA9rd35vAPEYhkpUUzEfESNbpFY4wQgZFhR",
  "key2": "4eoxaYXzRFxkDCR9amgXYMrzUhjkXEnXvYJiKHNHHg1Zbz22NXMo34EudNQ2vBqtn7Q1PQqY96HuM9vv2nfVNeSb",
  "key3": "4DSDHixk7ycYndy9PRgksZ2LAJ7QEZ9MqTMjq8Tgw2uxF6G4rTwBjJ5ntgtXzVJEfYg3CH27zu1RoQXSa9XNhDRu",
  "key4": "49UrrUsVdNBW8CH4djuDpC4eSB1r2MX4VSuMzPzN6iQauztPY81qrcgqZChwG2ueR6SCuvMj6P9A9fFe3ZDPQgDE",
  "key5": "5NJ1jD3zLpK8benkRaqNjUUZLXUZhXMChnayYqbojATAwYkDzBDrpXpuYjQ2xHsscaC9igEoj9Hw3qTkqSE5dspq",
  "key6": "5aD8cZuspDmZdsGZEzJ9bxwBQkBV2Ycbagd4gMAxjsUcww9p8dJ88NTWrrvTZypecnrn4FU6gQBqHBsuEmcb3ZNe",
  "key7": "3jw6twkEDV5K8UuVWueHspKPQonVyEw2rbuKWJfNG468jEfKChZkaktn7sMS4RmBvh7ps41ey4ChDSd9hjRgej69",
  "key8": "2C2sd5HqsnLCJdF1wx7Js5A1ewcqbwGY9ffUzzzPhp9f3gRAmEYhmknS7U4TAokVWZRu4xK6hpLUVoYwBwsuJCUX",
  "key9": "65Sr92GWdC8VZM4ikTqwGH2ojABonV9QXarfEbpohn3GPTdy8e6K8RkeiWpVavn9ZMo3pidPWCiQudsKs8YxpFZu",
  "key10": "5QFo2NrxH1Fv6gX5Yk1S3yKoAfJJASBi2ivxapnwUmEDXRLu67MpXdSXfxQi7L3ftrDW3zrgcwJaLcsBMExep8We",
  "key11": "2rMYNCq8YmsmBXPvAAQ5UXT6kMWbZjJR2cojfidR349Tvk746WJXjB7higuFK7Cok2RiRvgTaUyhAWiBokbHmjQM",
  "key12": "2bu8MScSwgB1DUbdALhW9gB6FnKJ7tRXazKNH86FVXCnFyUntcrcezcEPLWqC6z93UURjDtR66KRyG8UaNBa82XK",
  "key13": "4JY9puNCgUwPZtP9NwVG2zHwfbS3rUuNCAi4WZtHH8ugtgqBYdCkDZ7DN1YvAHhGvhEjDbMyMBjDcio2Y5W5FbPN",
  "key14": "2vTRWDr5CbnxUn662ksuHMZ8HqKvrp2duA1eannmGjwmQC7LfSZiNivcGhZRe73CQ3k5uL8rCq7V38shsAjuGid",
  "key15": "4H6Jbr16FjBPHXqYMJatWLfyJg2nLb2bUYT6tWaCb3c3wAkyj6mfLicMz7gSh1GT9pyEMCtYPYJnWddHp5X36t6A",
  "key16": "N9eeD6dz3jHTNk27dPZ6365d6NSsW4ieDHVvrbhQmhxwqiBc1BjtnWvgdqjmWs66puMxAC8Hy5VQs8poqdvoyke",
  "key17": "3eCnkf3d81dBi3kLe7z8nMyMLfTrbi8C7hDacQ1522vV5Wwa57YTdcyfS7S7JiS54TrrBZRqAMv1GrYa7njNSxrt",
  "key18": "4pFadKrz8eoowtjg9Vzm5bV2mAzfEsk3CSphLFLHDZ1T6f6Yw159AEixeZsBPKZQ5u2hG92zFEjCNNq8FWyodZbc",
  "key19": "2scgTu3jENAuGNT3a3sfHaA9NTYJFYhsZWcy3CdrrK6JDeR1AdD5Qg1X2TCavUFmZXwURTb7yiNGiovrw7UkRaba",
  "key20": "2a5JQTi7oqCkX5Aiod4S223FSpD4w1K1dpFjZXx8kV3vwRUdEYWMG3iBhWq2rVwDxvQe8UBnuTPMz7USaNiCYcC8",
  "key21": "2X6Q4EM6sr6cTmeeZm9J2rKTmdCMscc4PrDoZFiWNPeJndXAkYQJL4PTJwWWGn38NssEdsGpytdEafL2ctMATYUT",
  "key22": "5NdJMyYH7BF2V3BvrZCbj8TfNK6NHKKJEJbj61oSTThu1QQfVFAHjZT8sCLTKfjcW2pX3ezUSyvKS6b12yPfeS1E",
  "key23": "7bSNqb1p9yXEHuSQhGdM9RvLJPKPXmwYBfKKt6qAgdrCKUVtFdYNdueySQVv8PhvjQsy69xAZYcY3HmTf8pouv8",
  "key24": "3Pp8nArdSKEP5MpZgosYyDRgF7WXTDzJnzDkz1GHdrQjzSgGhfPTPzCtB1CYunYSBcwKEvkGx9WnqSpVkPNToLwJ",
  "key25": "4gY6JXxVpY24K3fLkpb5UrxWX2CcBiSQxA2Boy3NJXxzzubw2isoGXqRsGKWyxF1waPaD3hmhY6U1y3rjGFzVXeo",
  "key26": "EexvQCgwhqR8BQWcteCknRcA8hgWSf4N8kBxVuxjUTPdTZjc4qvaWxjgvF67RrJVE9waYZPQotp3Z3bSjJm55Nh",
  "key27": "2kiAg5jFyTZH4TgSe1tcPGYHmAFp46CyzqHMTbygKiVqZi2VtsRTQDhCyRWdVAuVXmqVMtPqc8uCM7zrzfZdyfbW",
  "key28": "2yqezZzCKvm6qmc7wSiiryjBbDBTFxRchp9ygyD8YNPGkar24Ag3ceQTQ29euUD4uPgV9L9vZf2TZgxkhKCDvT8x",
  "key29": "3okzc6fYu5Wy9ddjLTgdbou86z67EAm39fUvmSa9dLe38zNNoByRDZwL1ipa5iJwYuuDEzBUc7Dej1Zwuk1VQvUe",
  "key30": "g5XHtQaLeqadE1b1ukXD1zQJZDzmaXJWc4vCADb9q5kTBevkZK2D452DTi56THF7RucWDxJRb3ffoeFSwKYbigZ",
  "key31": "5h1iiwyRAsyw2b4dhwoRzea6vtRADHsanw49VjkrKDfdzC9hUoqcEn9dq8SAfYH5ccEWJcHCXqcHrUxuLUMty6zG",
  "key32": "5uRy6yzUZmiLmBPoyyQ7KWHrKNK8EuCUPbnc7qbBhu9KiBCuQ1XYPV9bpNfb95EQGRbxLf981uXucudHEEFM3vQg",
  "key33": "5nGWLtCEoSunhzpM22ZBAusVfWtbPbWNkZGgRF7thMcgb4kjHaDPJ5temahgfFimBv2mfvntTbws9bfWDUtD4BbU",
  "key34": "2xC6qB315fsgybijX8FurBBnmsutwEPk5STb9hUV2qKhL2AcQALBAZmBWMeJAewC6tgsvQsLvCHiCKepSTcLgXhK",
  "key35": "214g6brRppbGRohBEsZnR5hd6cSgVtL3tEL7otEvuRsyd1wXLCGbdJuYPgq3KFCLpCqa1Kc4PbqW8cygMeXVHZC8",
  "key36": "5CfXoY1DghUB7HocQ7th1MHh5Y6NvkVQzYG5SuoBCgxUhjsQeYpNAzBb3z4oZ6oqteVNQBGUUnsLv5K1Dpe5Bx2e",
  "key37": "2c8MhxSxTzFmvrsoXMxMaK9zXNSypvdqd8nqMV5EPSGA88oo7Coy3dEEH5nQZR5kS6JSg7sQt7LdG8n1tjCkybf1",
  "key38": "45ardG7PstNcCKoBJpChi3dVnRvg6Vcnh9E8TEdQuMLcJsnYoknzzFqwf6NZi3tQZ9iWJPJK4ahBDWQJrZpdevCB",
  "key39": "5jjR2bDPzFPc8SW7AHDMUra6cS8EKth1yamZqg5tYh3vPi1tEX4xReSMUTcUwDJ5uZSBhkqTtTJDbC5DXfnriB3E",
  "key40": "3nCJA4PTr8hXT4JVmgomMVHZmnES5nu4nTT3rVBfNYKVDHf5vMh2hT8fG21TqUZzdk4nFqBH6ovgfgqyKES3etRB",
  "key41": "28gQ9MUncT5chg3Hgt1vf9Jvej8XDi7i2EL8Z6g1BmYyrUiWgi8ntxSs3TEnDYwzZTFmpwUYxfBaq3GYms8AuHL6",
  "key42": "2ofr2BdhXyYWvJVePMDnSVXhWQmK94BzWiXmA6wfJmyrJPsekbVXEujTRHBW2nh2CopjLMA9HvCwKUsn4eRgMooJ",
  "key43": "43nC7UTZ9xwx3VitFnJzsr7cQGWhD2ZBqZx5g1wAXCBbXTzoPbmA1LNAUAe8QQeoRxp7GDZ2oEmQUyE8LzNZjSTu",
  "key44": "ZySNrJ7fULUYSLW9Wb6KXEw4YhtAhod3WYDwZrQrTt2WUvKbSgu2wfQhsoa2ZJJ5KRUTifStYBeLxqC4A8NBfNX",
  "key45": "6498SPQbgzDqFx5FRWv7YAuR3DrpD8YmY41hbc1t7scFxKjf5S6arnAyWXw1wcJndeghzV4Py2BxxuaERYNHFSMz",
  "key46": "36xk9VthomF1m3sBeYi6gyssw3hMJ9Sah57aRXxxa4nPdTRcmzxicLzJYPuLZ452KtfeVnJSNdmR73AFmLNUB18D"
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
