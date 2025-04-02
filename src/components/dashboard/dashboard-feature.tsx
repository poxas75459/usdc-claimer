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
    "3VrucxrairdH8QEcbMZsG3af1FqnMnbUEBQGhRqv69U4NNkK4dHTHipuxCRKvaJJn6LWpFS3RGLGnocTMJEWrz68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGUrDjVyBv7bWysj92dXU54dQ7ZYsphXKfKSgEpEV1j4BQRGdZ5XrVAz8pEf2DKpRMc6r3hkPGSr9fucUb3h1jo",
  "key1": "4knJMpgD7EGb7rzwbSaU9CzzJfcCNZfZWk87wzNn9ZScmuFbDSp9m3BGf9PbarxyNH9WREa9sPvwQJDSojtGNuv2",
  "key2": "3BDV7c9JWRqfM4r4v9neFBSfACWx1EyFVnc3RgkoyAsF6x5j27oTjv95aHwBS3NH1vt5z6orjuLnJxhGLbC2WaCn",
  "key3": "5Z8hFReTxuZcEqUrK5ij5MkymVLds4KTtTPxsyGx2veGdQBuApgquPhp8aEG2NmmFv1M1tgFNhoUHYrhWSa8A8HN",
  "key4": "wbqET1TtYEZ3kui7KU95sfBDHxgChYjzxaXWDMyoYW4j7jYVuRNcDYzn1D21Y21teGArG8q2TdbfcgA6GgYJhWn",
  "key5": "B9cPbQWje64HcvyYzpcbrgTntdrp2xzjyxjcCKapTeLyDeSz9vGU6fkK6bX3xqBLAnWS9NhGaudNoVW8xVUwuXV",
  "key6": "3RYXLqpZxzNunp9Y285NxnsVT89JK4vHosj8FG1sJBCwXsyvDPPNaUQ4hJ3jneexD9CcUDxS9y8P7KBama76A8dE",
  "key7": "3HtTQxGUWjhAiaRzkca42EvvU7u5Vj6Q1EAH1iRFvxFNGKiFdTTZdsrfMNYoDBYLqAeWkNGCuPRVVimRWsjK5kEu",
  "key8": "5Esgj3gqsmczYgqCwr2d26zrMp7T87Uacc3wZUNWSj1EiEjNrnfu6CPuDwoGbBx3jYprN3sA39LsyCLoqgP9FJin",
  "key9": "23Z1aek28btshTCo5o1yQ2MoEo1w4pzufRTRGJPXZCeFQ5LTZuJ1dybTPThbp4JFbEJTQNZumBYVKdCWzHFeNv4a",
  "key10": "2BG38kGpX6CZPHqwSNUStqvcaj9wfuNEgJyrLHGkecR8isXGhTbhG13tnRPnWsc3N6CMyksTSAcjyJy5y8fzsYFo",
  "key11": "7PAQugY69Hb3EikwKBoeVA38XS9sgR1QDMgF1BA7JqqkLxMCT5wiZgKohg967v5ojEex6tng8h2EjL5fWYWqWMB",
  "key12": "5AM4bMowAFv5u6zBKCMDZMCp3r7RKTAV7EAxzzemKJC9THuupgckCWf2mU9E781t7xfiTN6kTMuaWAVm9r4N3woe",
  "key13": "3HU9h68mch9MHHEzTX8tQDof8YMS1xwfRK2X2xMqR52JR7qZyUzwroxCBmJehf5fAF1X8CMCLeRC2dHKZG4ThM5A",
  "key14": "5BKKPuSADxciCqK9iW1isZ6WGgmngFxm3zqeyhaTAbZSF2iCHyBMiXqE3vmhVrqetKj68qWrB4GVj8t8PwXMz4qX",
  "key15": "2zxGvCjjfWfLgW88aH8pEViXceHERWfFVtWWTuVF1paf4ejZFNE6yr1q5p8ESkgkeYVEQavCuBLKzHXXvSVNzXbz",
  "key16": "2KtK3eJ8D2YBJUJeoCSTfEiZBzdH9A3mhgN15nmHL93jVofBauH5HrdqQ81y5JRwtCprWQP4XUkSWV4Ub4ZZza4e",
  "key17": "3cKU1LipDumsvGf1dATkpRhpj9uT1ozrxaB1MfCnh6fSeWDpHv1QHnK5jQobGiT7AGsecrHYqattnKNKsEgSfgGa",
  "key18": "38Gahi5GeJq8ucqZuVu1ytmKZJzEYc7hUKuK3oVY3vmw5oRatQVdUcPrEWW186aqUqj13TF9jsdYRN2pgjvyJXL6",
  "key19": "2d8FFVjshxHzewyzUmHxNbzByebnwBD9VXpVkyUeLD5hTGDzT41Vrt9GkQkYykV7JangkHdgv86CRmNi9uw11Brd",
  "key20": "A9A4PLkm2XgeGqFMTqhhLPQrQ1cnxfzX71mQtFYLXQfGRvDw3En9LyNVp7EA1BjfSTEvHJhagReorfu5rtySHZ3",
  "key21": "2pd7EhYcsbVxSmVUM6NYJwbMU2PxX4avgkPRC7xBNvgjLCCJf7cUr3GXwvHaGFJCiifMGuxTTpeNCByfGA15kcZs",
  "key22": "2wHmQZHZcRDDrmKAEaZKaucVJTZtFpSeBjrBPYru22GkfsmUTf874HrgT7TZ2GWuWexLiGZ5dHKB9daV8MFvQQoD",
  "key23": "4zxhFKfyLsmqqGi7BjFewWAQxhjhTUdR9kxiF2pEvBnkkdaUnhuhtvKVL8TY1y1hQHc8UvjYVbBx3W5QyT4qxVo",
  "key24": "2D82uhLjDix4Rpqim2B48NoMB8u6hJ3LcDnAGm285gJcRvNWYowQowZgtTvUt21NBaNqxLaDHcwngJHgaybfHYUZ",
  "key25": "uZtzB8DjyX54aD2oNxqHPnnqoWiD6WAEQdjvJo393x7VDtpNuZ3iFcYkhxB8nSYsHd2rPJGPwwBr7Q4HDUDf3BV",
  "key26": "57knqoLymZvLWa586t9VcXegg8hgAH7YAUz1VaJdX1QN6BP4PHGC8WCzKdR7beaepFXEc7bMivvzqELz7jyyvoPv",
  "key27": "3jHX4CF5TiCC5i6kZ6YZFiYm75Jn4d4ugrDyiKJyyez6XbD5yzWzWCgwWVHDi2xgh1wWpL6ivy5EYixJGBzL8EYy",
  "key28": "yBtrTi7s5sFjSYkMeU3nmaw5D43TWXYhJj6SZWNMwUHQhBUjMP6UrB5XU2b55smQDokJZYHz71QYUCVWMmw8VDM",
  "key29": "36pQgwAGGW6T4rUMtNRMnkcswTKhVJB6QQNbN9SfzLv6iKMqWYkgYtBivnjfF1KmmhjKG4HFJPczAtvdap6q5uQF",
  "key30": "geFeYvYHB2v4r4FKwmZjkufWp3zbjFEufPPTMXate4NMAa7c4oqGAGmxnhSr8pfsmtacAiK6CLHXSyCnofi3nYz",
  "key31": "67RdHDyAwqKhaYRncpJd5Wvrp7AueRdfHpPbmpKueqR4RG4UrsrRz5yVwdwWVbYPyu1FEXWw7qin35QEhS75GyDq",
  "key32": "EJsRxGoTkwt7Ukc1E1aTCa73Z5PheGTG1jjtXqZFXyNtUux494D94GBxFgjtnTtNib6JMNveh6maRwjvGtzTvxw",
  "key33": "3tE2Q4mQTEqtfQ6TaWAGdvVtEqoDpL5DgRDdLJfmgUUuQvGS4Ndq77UaFT4SVHjMr6nABcMVP6TJwa1pMMa2hm6A",
  "key34": "2EF8X6kjbd5timkogTLDLLuEGP629ciAyse5gWmAr1ULw9nWQzLi3PyZVFxJGo5DQPg1kQtn1td1JByjdzYq4ktb",
  "key35": "3cufowSGxHyWykZcmdaJC1Dxu8pQz9iZSVeV26ghPb9n9acSThxuwqScPWUjvBi1xiyMmgCxjdA5WQpFTdCgmZug",
  "key36": "4dX49nk66W88tEtxoBXvtEgGzi72yytdm4c2idtWS94cXzxWr2ZAY2fuQ57VVyxX9tcCATNZJfSfoSz8BEhsuhJf",
  "key37": "jLhPZpm7XmUnCLGi7q5PQtautPaequwinACdi4Gg6n6CehUrR54NneJkLHrcDkzPJtLhBE7E5keNCrEwunXj3CH",
  "key38": "VSmuh2rqSa4Z8L1hmZ5Zd5oiWyNTr5nNkueHn5qVEBLrxYEjXVHDDuAhDcpdRaSJwYMaGSXx3VS4hbJ8df1vXWg",
  "key39": "1MyB8MuTVGm9J3GUs2qEtW5P3wP4EejgfEXxKhPwtH9oMfkmMCarVxcRB34HUWM7EW1cbxug4Zw4HowUnjLEDnc"
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
