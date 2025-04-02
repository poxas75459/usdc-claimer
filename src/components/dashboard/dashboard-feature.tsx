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
    "3D9HqD42K95JvXEqRaDNE2kF9MvfALk45egBhQD9Z54oUUSu3H5d4HYRbywLhvFE5yc1H9obsf6dUqftF8P6dEPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdfWz4retX24y2CX1mhJ87vsQnH8Uh8xWoB8HSCGF1QzR2C3TAFYfSkmsxxJ9y9PyugwSpX8YY4mgibiQS4dXic",
  "key1": "4FZrUBTHm8s2uhEF1nAyzQXAx7K2merm1fZ33aaPTxC1RYmvmAu4XsGDnz9QiSxvZixU3T9ayVfpayN5TaVQgtdq",
  "key2": "sTgZkmpsohtr5zNCPZ1ECk4JFzMc5ASRNoG2sPYMmYtd7tbtihVxEp2rnbAYefuSuiBzqp5LLcvTaipbhr4sSbT",
  "key3": "5A3juLibbnrMo2tWLjVEcq2MnCQhQqgeEpYSGHQTxFgVzHqFYBVxvsFCx1C5fgnvFSTL4WhNFnGiinEgCfgGmpzL",
  "key4": "5mKz1dnNZLn2PjSitSRFm9pWaeXkbDoqHvwzCzNBG4WcekcdpvbUsvEUwTPZZWu4mccafeEctSdMRVPhLJDzsfHm",
  "key5": "42rMdKdDKFi1WNeGudu49dJTT1JmoxDgWD4VqLsYL1rcYwhXjGmpyAkLus6kE8BCBx4p8KRD1K1akq8hCcUE9p1q",
  "key6": "38rEUEMCMv6tLtyn4B1FY4xzvkJLuds48kaQ9Rx97kFSBj9pvuAZJx8yfCHfQ5tJuAJwvkA24xHZFry5MFWycoVG",
  "key7": "2yMYBYCEvKWsVquT2mT5LWaneApmKnYoQEiqY9N7xFTCLfhH5tobUyuvXx9nYsb8sCJJVDHNyjrUuZXvtRzhCHzD",
  "key8": "3jjBi2X24vDHnyYRyyD6icsdNzGmdFjY6KtUnr2FcnHCrQS9ojiGVFX6TmRoukAnYNXsQtV7iBRHUqZMfWaukHDn",
  "key9": "2pKeXL3nTzLx9EZMsdHjpjFezV9hJWYEDRL7Dg3iB9P5cwGAthD2d2zR4bShxRpyowxGswsa1rKbDxtKc1HgBBCz",
  "key10": "4ko9DUungZtsyvPScT1R2tUrtSCyDbPLSdtFMBNefgKPy4iJ7CPgyiVwidu8qjGeK57HvzW6VeRuTS9wp2RYzWyC",
  "key11": "3Dvb4TZZXEUjKBqJKw5bnsxkMxB6YkMs24U1yS2Z5KE8VS8faMju2Ldc2dQL1B3TVJHrUaiAzgmx3UjJJoyEyjvx",
  "key12": "49A1VLr93ppLVn2CE5u3cB7CsmB9Gt7ncLXFQaACpAQmNJcFHCUcSTVytXwUkfG5yVx5XcFVeBWKrgTQLJhdqLNf",
  "key13": "4gGRx9Wx7mk8LpbNi9yC1cy29T1gXjMGpWf7pwAQWPQDi92ChYTzCsHjqvEvfmhRQpHu3VhvkEu67VFSDhhX86sm",
  "key14": "2um7PTqf8ER4ni1kWehLnMhNraMLniqK8WSxoeh3ETkCeoQJMjXjfCwjj3ND7kfuViMc8ZtWt5aqGprVmpKKDhM2",
  "key15": "8z8aHtDHnZZwctGdNyJJFmNQxuTaQ63G9YUkHQCjP9SGmGMjuCKvhBp1pt77yevWaSpR4DxunR2RzQ8cGYnmQW1",
  "key16": "VJj2SNBKQCqR98jFD8gVP6itifUKq5hLK3FaPs1xuUukz9Lr2HzyP4GcwHWtk4KVdGbDUwtGTLxhNo6B29fAv8r",
  "key17": "55s2NaWsspvuc9b7WhL9muPtBaqzU6oCP2yAXNRYuQ6WbNVH6gXnQjy1xTRYowJZUnZ8BrmNAUYf4kvis5eyzEtw",
  "key18": "5qJKw9mZc7PgVzUr9uG6fPr6utDRp1a2LG42ff3mckWL4GrhkFhi4d82tPo7NyMfxA4tZHkqrhntDWvrzLkZuGSP",
  "key19": "29SEbjKEmTSjeC57JhYBnyVvz5tDb9JmPSmpemYoywrk8yHc8hFrNkQp4jj8kc3FQQjPBZaaX427kC74bP4bH9NU",
  "key20": "2mVNCdtEbkKScw3n97CX6HEoS1BvhXKi1fEEtkbkiz9fGConzXLhTKE7KcjacfLsY6nLk6vzhzcsrBpvrqMTJewx",
  "key21": "39yzFbFEAUeGzmsmrDVEtcm46FqdxQhbSuEfQHRvhK7NMPAJQ9Pxc6DKdjLLjJz5f4BDnmMRJA4Uv2LeaidBMuDG",
  "key22": "5bTrcMZarqeB9cDAbW7vHnSq1EZYA335eSXQ9XYkiZrbN2MeRcfhW3FHsigY5NyS7BjmJDjKvcwkkzs2qxSxYA2T",
  "key23": "32aFEwcb1p6bHuNSRjFBPq2CfPtSCktzqXFBy2us93VkGuJoVzKwt7v2ykpr1S3WmvMUgaGCYPiv4Pqnr7m6W3PW",
  "key24": "3YebQ9HykiDkJUyDXLnEvRJnHDskajjP2urKZLDRMd8dormujT1d7BsJWk9SNUUZXc2ghazvD6cnnjx74H81DSJs",
  "key25": "2LMoyKx1runPpUKw2WG2ug3Z54ecHAUg8nLgQjDBq19wSU8ZbbWpFM2ZvTLjHQ398YDmwqFYQn3baEaVtR8VJiQv",
  "key26": "43YBPXDr66VNejZ7zNVVz9DHenn1My4H71EBz3Aet5XrozabLznD73bo7ryeqaghESTNDEN3icaLkJuHjtyX5zwK",
  "key27": "HVa96XNsMQy9HXJH6uC7sBfuABGpVUihTWLu9g3Hj9Lpyet6KQqRncWqxXpXzCDm815fCQPVjKisvYHMdVm48Gy",
  "key28": "92vDfJJ6kRvPXbkUzXv5RKkBiz2QiUjGPgtbb5YFjFeCRU7EDjaPBUie4ZJsAMoVYVjJn7Pz4ejb8r7jkWTH7XJ",
  "key29": "RqNaQERbpcLJWGfrhxA73UtjaBSmj4E4mQbBmL64eq9WSYk63KdYPxzsT9t3HtmUtZsYwm2RvpbynKLbmngaAzM",
  "key30": "5L31YBFo5uRSwvvEKaAxRvHP2JrdK2EEzB384CVS1nSsXDjUihk4WN9witQt7qCMTFaKpmnJv5bmZpHTGBQze41o",
  "key31": "42QWh2V8kAunZ5FnATy5yAJboyaVQqoTy5eVW79rEiMnf43poxLJRrzcRnpWeu4nhDTkXRXct5shpuREHNNPkcjh",
  "key32": "TGNEcKvfZd4DminpvcKEpEHzFeS8oQVgvZErbkDSvN1nxo7tvt89vzKcW1HXT2MYpeeVvwpH8ausB8m7VqHWUsc",
  "key33": "4QDWQbRAAPosSv926FoKEhdUR4ad36HPkGiPpjiSoUrhG7S8z2gA63mQ59kat524hACY8Gyynwwv8aWEABzuRpEJ",
  "key34": "53RcNUV5Amv3pPfm6cNh6GHUKuvRdpBSM6cxKzTGehDd2RaYCSqCAq9oCBYJm7U8xLMohHhvmETgtWXN74Jh76HV",
  "key35": "5Gvdy6sq6q1Pn6bmC967jJ5EqHmpwkWZYTrdCC1cULgoc2VBtQyuxh2h2sB7K4rbgLBidfc5XGpsM9EwVUBASXoe",
  "key36": "4pgP8PfZpGvEVhQiqqFEPKEyt8o697PDVsWU7YAEBteLybdSx3BSbyRqinVF1GctfTqJECr3vU879aUuabqrW47c",
  "key37": "4HGBn1DjEpcn23N9tKEG49P9AFbaUNQ6onyA6MQ9CodPcamSWgfszXg46gYZVJhjqzYY727C9i9LQrAdJt8n5m85",
  "key38": "4aGdCWUgiMhKmgJaUKk5TdoceemunYzopJTBMdXx9W4Uu7h6QmktgBHkB2XfceBUJYQwNbDEcrQztyY8hYXYtynU",
  "key39": "5XC2H5XDtyLRhea9AUkHLoEFyHVnUKTSM8NgJSA3pdDUBsh1tx53Kpppfis4codNKfHkGJcixhLwHXzGMK8iLEVC",
  "key40": "333Lmc9jbwgmvtuV3EEsoCy3QB4k9L8LbL7Qo2JJmjgXDr8sqew2gHL4fwswwFzcauR882YQqKQGXVozrAVFj85q",
  "key41": "mk19b9Kw6V1eYt5E1ptv5JjbGy5PVHdhEyCTC14vTmPhTp2rVTVn3jtQ1YBY9TcCLSQksfbLgpwvJvF393gZhU8",
  "key42": "38C9Dn9phDmdKYGPgf52nLfcBBRxsHC7gGSfJUPdw4ujXfqZDiJXdsGvXA2q4cCHmV3pQrhdnbAUVQEgatTwF3GZ",
  "key43": "5GYAQ2H2NgjastEBoafVir8K3xfjKjCTgThfoGTfLtpv1Nb3pYwkbmNWmvqp7DPZuDAyxBoaoNDK2nSJxg8bU37B",
  "key44": "4v6mC4nq9t1gq3Gfb6EAD4r4K6gGpJ2KY8nPtVDH28t9x4m169KGVT8Xo19w85v5vDN9GtfRmPgtYuTkdYZMf8VC",
  "key45": "2zEBUisGuj2gKdTawn6kqDrhSCwZxmZX1f5F3vwq7sUW126LFV3NubPDdUyVXJoP47CLmnTFYNo1xnTs9cbR5LJc",
  "key46": "4XWHNfgzFy2Npq6jqLmcTcS13qMU2fY2DRSdcTkh4oVBXozBtwmMB5Cb9DKcf4sjsDkGPbXgDdP3Lbpse5NMNJTG"
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
