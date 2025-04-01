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
    "5btZrge5B71vXzQdu5PnfKdVdpkUekzC4FcLyMVkReXmSLSAHp7riVHnrH7p7AZQP4T22xcNH9j8tFn7AjuRMmPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQDmSHZHn5XgTMe8iUaaxtPbKEew8w2RvHNW5hqhQw95j6RXjWAPTC89UBEMd3KS9CNJ89mBuT3etEziEVTzaF2",
  "key1": "2Rs8ZZTBvThk7WPu9q42y9oUtzQbvQds13NPohfS9yDNUyZrPa4vfsvGRD37vow1zueuTYpkcuJfht8gyoVh9AoV",
  "key2": "3ybvFtS1BXq1Q7YHhdDBkZeBQogwgVmjBCtpfr7XmygE9utFXnSE7BEwarfoRv5nbaRWTnUgHFeoGGazjsTTumMY",
  "key3": "JHmyzwkzs61vTvf2QkqL1GvmyYfKSXsZfQrdcPNEJJooT7PPutSLUyiYLPVbsAx2JwjGozuVnE3MBEFmWmJyi2L",
  "key4": "3JVZEJeNQa23JGnsJUKUxKcKb5YvaLqXi7o2aeaVdB4QpKHJnguJg1Q7R9NqrbmbS78hTYPk1SaMAYg9tcwCbDcU",
  "key5": "X6UtkCaqjjSpkpaZGxPZyiUaZpFdDVkoLgivmsKeCAodho9uznVXvsfELsC8PEpe3C8SayQZeJMszwv83QWVKvp",
  "key6": "qy4CEeKKZQ6bFpaYASHjAwmsZgfxLFHcMYr8KUsYacp7sgZYhabDUQPGLhT9ZAkvfB37qMZWSddZsEXCAeiASfK",
  "key7": "619v59Q88Booh3akg3UrNc38PgNfGUiJboUGZLLYUwDKVHBfUksNdScGykHP9mytfLRJgQk6ZRVsoBcNecHDk3Bi",
  "key8": "516gKgQuZxQxd8zrLFdjhrSFVJsYgXqSoQB8BgzRWm9maxtBiqwcKfHKEiwcynPB6F2ksdocEgZxkvFd7n1h7wYz",
  "key9": "2RhM65E3s8UhR2m53NeHRZcnyocMz3FTeLg4VvWt9A1sECuf7cPaKqmZWpnkqhBrFxgRRC8Z4Abk9HibiX9DDmH4",
  "key10": "5BePUZYpJPkqnpE9VCc1iHcm1uDiY3SqyQNveAWuuohyAvCaFftMCB7EoKNpyHYne8c5JRJfT9rTjTsxYZtaJeGT",
  "key11": "27p4WmmwY9M5DyR26WrbxHbEdTDrxqZdacMfEV9jF3RfVKpMadyJxcyXJAjtW6PF9fXPkhmUGSephyMV96e7S2Mv",
  "key12": "42TGPRrQoXqJ8s8wxHVmudGSqS7Nk7toJ9jBJHDfwTJQ3xg9iQ6iDzFPJJqrrxUz5WXgRputF1svdwai1Nrw2S2W",
  "key13": "4FgZUoY5BjS13w7pjkKBkJQL2VMyzD89CWSsrsnxsxrAKPVyN6optwQVxyhtWzmGW55UdVXhdZcsVJGsEAmmBxLS",
  "key14": "2erthCdLK5XWQoWuz7URoSQtG9WTW2BA7dXxbCzEGXQtM79Beduu8z5gBmS8gqPEfPYLt2DCxK3ivVQKjk2EcKUG",
  "key15": "2sYtAt5RRMpaEJ8oW885u81vAvfSKiZZ2B1gVg6G38wheqay1hwjbSsP8ho7YK6kddbTLPJkcmPNQNzqV6fZhg7J",
  "key16": "3ZqAhZbKWwmcweRN27dCieHDaaDquPzBxfi5fGHjQTVqK8fS2NtDQfUePTawt95yin3E3wqT2Wog8w1NRBKvRt3d",
  "key17": "4w2dks9yMsNGLt8fZQBqcYkqpc2Q91X2ZoG3HmqSeP4SsYMkxaXRHzq2TQNTSyBzuVnxqPT8q438gs8QQJdr7zVJ",
  "key18": "39ffAq1yd6aUJW74ZKvi9ArbnH1woMtpHPRhB5J2hzx2vUuk4XXkg1eZZDLfYNoaDCMynvPpp519m53oTxLgogs",
  "key19": "31NE4WMupGcoZ7SUurbb6yoN7HU2XEGH3vLQyHT48kVncLvWncjtY3ptnoEibBdxj6Aev7CsS5CvMeEjEjfKzeMU",
  "key20": "2yLXnTuVAwcvSp3JQoKrMHeHFYPqFfrofnB319GWMWPnNBpcB82SkgrEDXqNxbP6JCZ4GauviuC6zD7KPDwqtFfH",
  "key21": "2PRLpiQ9qeLx3VHcEnQ9J8nR3YQkb1xeJgxmD3Kj4qMVa4eSnm9FDMEUMjVrhr5SmYW4zscojMMiitLN6ue5dBZR",
  "key22": "UfAXqwvNKuxUogpUYwhHNKLJDHLhEDCaqM6uJo3iLtVFHefkvm1u4b1hwLnMDQiPbqtBaJ2gX612giun4TaEst2",
  "key23": "2vduxqKuDgZUKSJ2T5rshzZT9BSK1UwssA7Kq6GQAraG3AKhdfWc46vHVEzshyBQWjiGp2zx5NvyAFXndsxot2uL",
  "key24": "5maQKizZpJUhhRgJ5PHGL8xnAPfNZ1uof4amL4E9Nn3h3jtmSmLQLJfckahmFx8QbuYbsPiz5ZfpNmvFkCBn1Dfi",
  "key25": "27NoKek9oyKksMedMZ72qZRqpDihZNKGgVZBd2DWKyX3p2JXmRmiLC6enq8xUNCTYKqDXh5ErNcrQ41fXUEobajz",
  "key26": "5yUXkca8WdycVdq9R4R4ArXqVcYouYZFYtd2zspRE2qPQWWxwaJopsYXfrG4uEi6ztkAELtFwS3nrgRCbT4VouWG",
  "key27": "We8USaDZB4gKuTL8cp5nxAisPzBT7vnYFeheNuqBgwzfA3Kt55Hvk5RRrogaP9tDQDen4JeEuuU8M6bGg6jA5pg",
  "key28": "kpGrGY3qvRSvz5eNZ3mkH92LXrQxvLtAN9bnwobLsggeMffuGJw8B4NqXfV1Cme9joZsGKXZCL17ShPR2azVh9F",
  "key29": "23NfzYmM9fGUzmMfm9AZ36ajynYUBa6PtvWrKV4kh2Fx24Li994oSwNMxnj4TdKyjJwRiV5ot39QSj2iN2hzg8Eg",
  "key30": "wPpBtuMPbJWp5q6yQHSa5BX9avupgM8xrbNXF4q1UBiu3rjcoMtrB7LeuWvWXikKKQEJC6QCeV7MaXcJdZ55Pbb",
  "key31": "4Q11yN1FShcz6CaMPocmSvmmJwBDvyJ73GArdHjgQjHyFpc4NJqj8kdEC2NJQk6Rda9ttVs8UT5xE9rudxaKRiu5",
  "key32": "2abSEE3bqMz4ycePYfNzFwb3P2aJ3ktbtGjxmGsJG1yvmaULmiXSVoDJyHEW3hyV2RFSdBWrC54FASJbG3DVokeR",
  "key33": "4BbB7HePxidgKhYL17MAh4RUPgih4SPXn35vCPSMsvAcEaFdkTAQEBvmrsF4eAtgcBo8SRG9XeajfYTunn94AsVU",
  "key34": "2LXvkhHjbSfgLbyt1uBRRZh8bDqGsDJCAoiXpDUdc7R88WE11NdXyHr8KDhso9zKXHu7sfLHe4Yv8D5aNEvMrFW9",
  "key35": "uxSKHWRXk1QP2rV7F1EFdhM58i4gcPwN4k3u57KDiJzbNhv9g5byWDR5Lfa7YzoPo9UCnFkAtqi5wBwvX18y1rP"
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
