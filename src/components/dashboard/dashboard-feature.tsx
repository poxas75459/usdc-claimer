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
    "34ZfHJMhEbenqZ1awEgfrKGYgDA42jzeppqGzmdwMte5VWnzn8LyJv9oLUyMtE3b8JXHoHqq8n3Tgv2cCZJZdb6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cmuk8ory5R2tRC9xoCLTwMaNKmB8ZWhY7CA7ZqJh85U8Auxe9RQasM79Hri14nekkgy2tQ37rjecJ6nASBdPTG5",
  "key1": "2LLFNsZsUyhgeeaT33cTshf1EviTZ2ybrkLf6EGvK17QnuWG4f22dMJUcHBwPzu7N6byC5eGtKNDMsLEDFoxZHTj",
  "key2": "3h87YAYmxLnfRF2pw3uY6CKrMfN7kE4WaqnGLviUzZHsfRqJhgi8WxSiFdFTWxbYcwYC9Vo8pQZmJR9ModgXW536",
  "key3": "5g3MNjwtWbBj6E2HrD75B53gNApG9kfSJTugmrdg62X2zW8VC6CKSMv8tWHPHqtMYwzX89u12QhsiGRoypsMjsZK",
  "key4": "3QPbCFexCWpz9yhFHkwF1h8QRAEko54o81b61PCqPtjH8aqYdB4DyAgy63h5AmcC8kDTTunjDk2B55C1rqn6EPGR",
  "key5": "4dk43MDCWeeQUqkPjNygQM5KSNZN3RkvSBUg3Ls9hfwM5f3yJgGfKT8ZcCfJmFzNbseX4g4QBprgZ6i6XVqxHJmx",
  "key6": "3V82gyxWC48ACG46jXf3KpYqSfZ698Xwm7DcDVq6h6E6by7MCeMPegvgJXa7ssZppEfE6EFYdfp53ymXNyry3pfj",
  "key7": "2Hx97Th5XUupPESEiptdDE9nWxXz4wvDvbarLYPMRZrXu1A4QsCMymdGSNbi7Lr9pKzwPniPMSMfHRZTjL54mpWL",
  "key8": "3Fnx2SFXK1ThXtb1bqcHswX6aK3EBkDB1zwtVkcikjdAPrfJpSwfePfqek4CeqNycxqwD6dwjMYYTHMucRtB2A8b",
  "key9": "2aC9yp6A1ri9cH5AEqWkHdPt4z1rRzMKiDgRR3kBs7F9BQrmaDieyMiqAQkDT2kgZrCEv2dpRdGBvGJNKiy9gsxp",
  "key10": "QwAE6sb2WvUy2X54fuoc3dfGVQExMPY1vDMeuoeR5zF2PKB1GChvDUZzXLCSnuHoSsyShXasM4fDMAoHojK5PiM",
  "key11": "2SugpQSxsu4zfVGMExcxzje15qkb9AxBhSdwpVFDg3AxWAiqQENgbKPTcdmXc83Xkvc4MWydL9FDvBh6jsbmB2WN",
  "key12": "5u1q3F84Cm4tVVPRv8JHDdKaKsNCXwUkzhttECdk9h5HoFo2ZLVMrSseTwA5soQMa4TxJgUGRQMnGYvkeZvAPv4P",
  "key13": "7oBLBmk8nNcS3SZ13JVSsRYczLFq3dMZEVBEJd6oSyMwx4XDqcRuLd6RCt8NXYaKb8qa8cKR1fffVnAus5kgnNj",
  "key14": "3LrrXqqsNxXE9PvGG96fX5fDsvyHZnx3J1Tapgce7TXsKoodC2eRsWLGdyEVMtsuknhiwK8bzS1mQPfY42xuyWGa",
  "key15": "2DUedfV7gsrR8dtCfvEpisb2PfccQH8rSM6Hh1MQ1BMxV9edj7LT1p3Hff26z85V1rzsb15CYCcBKinrbSmRwnHt",
  "key16": "1225DfBLCDFrHnLy81TaPSK6dfVVit7LQa8fPdWECVTiPc3MCVMc4XbM6YLE8cVsWyW1X6o9TmUnQotZcGTsdhkS",
  "key17": "2yMrzZTzVMrbjorCHA4Se6izUy5D8yCsZPMZdDFBjtFSF6vGpwWgVnhs5wWRQ5kU2Woe7nTDGKW67gp9HYD5uqjr",
  "key18": "5nrkGdmw8JGEQLBV9BxanrStph1Yid1GpE6UmNeyrVU1veKVvqzHDKZUqypycr7tVfVijjBFzqcGqiYQBJbc3cG9",
  "key19": "39sMTM7t4RqcAHMdCc4U5gTTHTB7AycEJD5yFonY4pQwzJq4Fbk7MFDVsm8FZb2j3MszNQoDuWJAPjU3yuwWGeCa",
  "key20": "412TTRkNPt5BWwzti4EPfhkhBw9557mFxnweKoLqpGj2C5nkyywrmWspR4pM2xgcuib399Sp5AjT7RdASKeMenwu",
  "key21": "29dasCxYZDoYnsEpgP1jARKJSeR96J1tr5ReT7Y8iR4Vyg4jWGe1v5gRSkVdCAeD1VKCaBAXqHPTmYajfDqzEaRH",
  "key22": "4GHFPPYjiDx2FoU6JmJWriYLvZjJMBjp3ctJ193X5sciPku4bNf8YSHX6NaXUBVMepMMrkwyvfc6qHXmLtSzVDAY",
  "key23": "Xu58nhroF9QekfRHFCqjEZHiKuQFMkRYkpB2w6t7y7mWfKSe6fyhgxeT33AgQhM8xcGjFHWfCfaLpE8tC89Bs3g",
  "key24": "ufNKLY1jSPncmL22g5zrgTYVMMewmfDS5vaxSvuWBgWw6iHBszZAFAF9bSEDjpwN8JvJ7DjCt5ATwU8wEi7xq8P",
  "key25": "4y1MbA1AHMPtF6A2YJnqNq1VmLQ5vZV4WeSEH3y4RxredLseoVEVUTr6mv76STRN7Vq7BHQYs9kV14vzv1W6M1NJ",
  "key26": "23GqqaZQ8uqbHbZriYh9VeppuMS68PrMekAvDQNsBu4gPsFbGr4cYi8b3kXDvPmqU17JjZSEjrY4Nmpg7LVQhZGj",
  "key27": "4RhABe4JYPnxj42SMzG7g8UfpfcyhcFAsD6TKpVH7NmKan59QcJU48onuZ8tPXCsAXfa9Wr11hNLneMHWVosee29",
  "key28": "4LFaddKFPPL8VG1gEf9z7eGJxSVusWhSNVEpwVgj9nQDBFR4QVixboBzVoa4K5APd5ecFLLTDQm7sBTNx7ei7dv9",
  "key29": "2pRZAyHMVvwoiHg1o2VGpiqgkcdg7HEuJGuyhw3fLnjWhpYs8NMourTEheNdvUaNXUFzvTk9Pfd1YvNyZ9PMjHe3",
  "key30": "4jyyZryErjrBAyCvhHopx6DVovSuryqpiMfRtK7Rf3wqMKxVFnuNUVB7hua5ryGPJPZizkecUSubjk6VTZ9zWJwU",
  "key31": "3nymsjL3p7BZcVvAnTCcLR1sV5WqncyiAShhjd8UtXtDeNpMg7h8AVty1L9Hw2SvXiLavThaEb57vKTeJdipbydX",
  "key32": "51j76PD9NW4KfiWE1gp1CYtmxfeGUo134J1n5H46JHGWxdDKuboL2YfH8ehGmLFRCPhPiTPcAb76BaN3bG92qw6r",
  "key33": "4GFzbvZwTagMXoxzeXArvtJABtKYumDvQR8jii3Wt1RjmLTMC3WtvHtBaap6udm4De4KwAtEMoko2Bf9GHRwtSFP",
  "key34": "bqLcGDM1X5FYifvphZbgnSPbEwE2VF8u8zwFDu1WruGeSn8BnGwFE2Q5a6FNY1hyAemsqBwVysXA3BCiLHucfqp",
  "key35": "2z25qgKqfTC9xPXLVAoC7JEHq1Pz8CT2ZeuYS7izYoXr1fv9WxP155xiNq9eVAxmjMxqKsi8PAfQcqU98or6Y1BK",
  "key36": "5bcgMeoRcpsDuyTyzTSh83fvfmsa2BnEtNRqeFcmiZ6p5HdEdeD4vh9XYbEUDeNqGL7PhDA8zB31DrzuoJCrmHpg",
  "key37": "33ducoeQPtNmvPVfqghE781C24fRq4AtfimVjkPy3GcgixgcKfAxmGoV5arsMLv9yiLpEPxtkJfMPugMeUeN8S88",
  "key38": "damPJmirAKpRvupaN7v7TjpySP4XDUsyJfcyKqw3ozqJWoxgUYyZQg7Gu76oLnrXaPxpAVNM2wATdQyK1ka4upW",
  "key39": "3e61Uqe6rJ4nEteEsYSyTAikuHJySNTF8XJ7YWur1eL5VoPwRWXvttkGR36NRiMaqpfYFfreNYSDkyvSzEGNHVfB",
  "key40": "2shYM2AKx7rvQVoJAbnicq3RX7hPkz6gho3gVXTsaWmPnEae97vv5rnxQMDuwxq2m3rB38qEh6MnzNQdYRVPnNRS",
  "key41": "5TFTC6Tw2tuG7uoe5QtAky5sFQUiGXPLxvrxZN7EjagWnLrP2tXALhBgBvnxKWr5u4WqSpJbbUfNwE7DWGrHj4KQ",
  "key42": "4KWCXRYEkcYWK6DqTuVoyomnfCw2EFQdGioFZmqd3n1goc7M11cAx6kugdY9eBAuhQuS5qNy5Ahvd2jHnue12WgA",
  "key43": "idqqLmHaWWMiqV2GuMrAsTRG2rhvYYw8zCWm6F5X3756eJzVfAojWRpJE9joz4r6ex9HZkNHERzP6cjf7UQ4rc1",
  "key44": "oNze9Y52YBST4GnP1XEFeTnnTC4vAyLkeVgWfGGxYHmhdu2FBq5TB7s28rrAS9Dx3eyx3xDwmWDMVQr2bHwsBa3",
  "key45": "r1CRtCpiFqmqhbLGL8mQ78g4QWDLZnvXGdF9XJWZJqk3ZFrPYS2cWvEgkA2rqojnvjFus7e9oWsdUVvUEZryMd7",
  "key46": "2SGPigRSKvis7rYKofgVVdynkSgksPojtcMZ3QiHJkqJy5kMcpfUieXMgUZfkGoyz2f9QGrxSVq3oPwwnRe6Gb8z",
  "key47": "5qRQfFFv8rLYc2dK17Vy8MzK5KbXXyEgyb7GX6WqyFVzNqXuEzYKqHAwvyhct5dgiEVLaHBniLZnuRjgrfpFqn8T",
  "key48": "2wDPoJ8WX1zF6AXrWdeKBM6KNCqg2vVY71Vcnu9s35JVNBDUs19FCSS591v7LXYGqLHHa7oVUHhJeH4sWkiwpvSd"
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
