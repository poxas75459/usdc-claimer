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
    "5LPRRhqqeEsdabMgZmhUwf9svB18Hu4ScaErWvPtGLCNtRs5gqof5xVamoFvRqiFf7Ygx555JxoNHFMFiXReJJVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVarRcyV4Q9ra622EZQKrE8sLC2LFJQRsxUZ8pnYJiku6zW1nfwjSB9c2ohWSmtbmPhnHEcF7vjMJyw71uSuTSB",
  "key1": "4P9SgPxHY7xeD3qH6e4wX8bFLMQsSB4LjHZpUmihfhzgfWuHrtBnDWRNog9k2jPWBGpqn6ihppJwSfReXRLZPQoL",
  "key2": "2ZMkSP1Km7wHW7A1nRhxKGWVQzgQxgT7zMun8ST9Ax3rspCCB7B4cFBdeKSL6Njw7uB2CTRaWLgPpTzYFHFRkoJL",
  "key3": "5YSJ7xBtZu9tpojqyqWjG9UxfjhoYzycN15hj1yy3TpPtci3W4F4178rQtNmenaJfrngQXZiRJubvPYWhvPuTrXo",
  "key4": "2EjpFGZAVBGVKvycaQhJTddjyvAbWu6kdUjsTSy6eZcyTdnT624mMVdBeyAjfrReyZ3HgubMBsqQisTok7HG76wR",
  "key5": "5PaYYnG99rFyWx2mCenMtbq9AqqfixNsEsHW9EArWWYBARgaa1Y8k9x6p4MnXP7HNkz3GcN6PiYdCdkYzit5PYXr",
  "key6": "XnYLUd3rNC7zmN5xh1G1N14tSpwbFYuomeyZnAQVwwrpAnxhAwCcuwhgHesnbhqJDWtFhxqSS7t7HGamTG3xsby",
  "key7": "413EaETVSU1R7WT3MG69ktnChke4S9kjirwv937m6zTJqpmZxtF4iDateKneBY32C5W9sAs56m9KQuBgJSRrVps7",
  "key8": "5dEphPT2ZMDjLx3jcbKND72hfhwQqWrQ1W8vv3itmAQPuRCVrBkaLtiwM5u86VYKv33hjKGJKGuggizbaJZY4JnU",
  "key9": "2LkXBYfp8ehzw8Rzmi54nwJsgbdfNA6HhGM1RjmvUUWqSdJf97QfU13H99hJjSZCMQBxzKTxUd3Nsh7kViP2DoC1",
  "key10": "4DRSpkJqSzaUVFcqcwyG7zBpPaigTY2K8K6dLoJfoKZ4qf8Ynca9Pfd2VCVDZpLizqLpikXj7MNHJFQxBTD67Ay5",
  "key11": "5Hia9FnfU2BR8iUACTNDtANfLMoACs951WhtL9uMfPyXSuRie2p8PiemuVMPQQq4ak2Roxox5VM1bEspvDUVmVZ7",
  "key12": "5H8LKgbA7uvQA8oLRU6paQ181QDngnePvzMt7JrncWXfAnSWgoyaEXQtpMdD7QXo1sUR1FXXr8kajXyQS1KrqHrV",
  "key13": "Jw37YdqLMAN3y5m33WGSKaNhCHS9UfJgmKJLzXa3xkAWMG5Fvg7DR5pPTa46ZgMXjiPB3i8Jaw2LJDCUkouta3X",
  "key14": "3T9y1S1ep5NSMFtdmv4ADaYwuoZXdHGFMCvZc1xzH3Qwxig1cv9Z7Mrn2j8m8ZizArximhcaZpbJMsqdimo8t7dw",
  "key15": "65gGVJF3nDfyqf2W4bVQJop4wAPCdLqgD49xobrbCyAt1Fj3w2JpeGQuL14Bj82bYjNSmHtnj7F1b7Wfvc682Qqs",
  "key16": "24ACtDVNyAPrMw8ZsG5vQhV8WbJV9iwrXs3i2Pdb7xqrDxM2FL7V1EbedJwzFMgnMJqRDQsxgicATxNVjyDP33Mg",
  "key17": "3DzRZMJ8sDF61eX1TZ76a57r9xQHxbzFAhJsKkT1bxy5mWBr4ESv9H9z99TCtiQrPzddttJ9sbV718ZsppiozPN5",
  "key18": "5ma9WZSrc5Z43tXgaMPHnL7T3JXUhHWWQTScWUGJwJ7kVSowqYDx1zwFDssvuvxG6EBTBT88Ua4aV6LcPtbkWiEW",
  "key19": "3pubSFVivQwFbVt7pLPVULjax97QyCRQ4iss9BM65Krt2pYSyH4fEs3iUV7LE9vhxnuJ1hvG5hF4NeQy9kqTyP66",
  "key20": "2gtCYnG853xRdArZhktrRweVLQagcnKftrhufSKmgKBwSn6SyAbsuhyFaWRDrZHKkw67eVXBLpayyp9vdwEHVT7p",
  "key21": "4WSr8bX9XUG7L5ihmYSBJcxgoqJrMbkB7PMMw791EYz63ABH5ZJ4Fs4ump39uV5DYuLwfVSWZFuehPqbQ2FtmuWD",
  "key22": "he1GenZWc7oiNQ5zzF3VUvj4wyo3KbRUc858Kz3Z1qWhmAMVJ6WJcCgjMoYS4moKNAZtGxaNEY8iQvQyhAA9XT8",
  "key23": "4XqhXnWP59xVgfj6uKDjXKjw3zkgHgMJHJuGtavHQVLHADDT3eWJtq29p7AB2uFTncccroUe25Rk4mm1ePUfJsnQ",
  "key24": "3v45YXBnwVCSFtGi4e5Y2pgytVDmZsaM5TUfcFomo6jm2eHSRif6s3e5d7nh5djb74xFAZkrY1w7XuJRecrRcajK",
  "key25": "2dkLWHf56t5z6Wgx74Trm96i3yTgtwdmKvdBUhP8EkMpnfMUM3tfpJiwnLjneHU11EQsuXanK937sn8J7hwZvMNW",
  "key26": "2Rzmqsidn7Vj6mjYE2HpCb3Ww7FMK8vHjPqELv4V7W5DqWdC6GQshGzViwCsNCWD3TsPhRYMk8gAndeCQUvPj81C",
  "key27": "5p49BmNAaGbuY4r53GyDScwF3SC8BFE7GNUFif58vBrEyfCqTD83AiM5tEVsCXsoCy6sHJUYajhUCVU3F3m2EcTj",
  "key28": "5w3wUQVdFVcB7iKu6Hw59z2FhqWEE9S5HrtBmY774jWEaZUXjSApN7dA8pSdnBiizk46CTrzZ4PZpCiqLAN6U4Wu",
  "key29": "4qk8JguYaZ9XDjExRRARAqPXHsByQD19YPuXTC47sG1rFXCp5M2fKZmQ3WDcGkDj2nA7zirVTrxbLEjxjhzdgFBx",
  "key30": "27wdNiXDoSmH1hTVQb9R3L4JAbpb8vZksgugjh72PrHfr1WkfxZkgniiRAwcvMuwy6b2ETKrMcEsDxk3nTaF2xQk",
  "key31": "3vXMYUnGVBu842uo351NSsbVLq5CUD4SzTGfWaasH1QuLVjAx1ASq3Fz4SE1PRDeaUdH1Yh4NzqHpUiHbyxuXo3D",
  "key32": "2mS3cFg5663b1WhunTdv7KQLBJuMuVpHfBQD1uF9VHCqbYBQd4AbevJYxQFe7j8NBmUgb4ZCFyxGgsitoXELkhPf",
  "key33": "MTrCipLGWy2UNYqMC3AUENddtfZELp3yfVQoo1FUbWjsUb7EYsyMF9Mmtc6bu9nnh5dppdkpH9t9GhfMzA2ksjt",
  "key34": "4PoYz9bXpoz6y2DsWB6UYdC13Jnr5hiiMYUYyRokKHyASw52RnK3VLoJMjLTtuxkgYkjzNgavhcgaa5xeTCVcm4G",
  "key35": "4X5DkYTHRVhouMHMWBFYfdKBUhLarC76SfrEdBUZgPnw2CEEAoLjdDwZRxdziLNe8Nf8yW61uvEB9kCt4gwqsVRn",
  "key36": "4o9ckSjxRt6aAP75Uxt4NPNHaq4SEEmc5DVNxupdSnqYCs7AE5PuV62PfEYtgHNpX3u1e3acFCkbuDs2x16jMY4B",
  "key37": "XxDfjdvwJ6tKFGPnuJHDComGijRgMHcez5v2CtgxnuCJoAnbC9ucRe3Mtxj99CVEjpVuWv5D7hkQPKQQ2i39T2Q",
  "key38": "5HuwP1GXifRz8ZNcuFBAWc7sd6CAc9CRiQSBjv4BZQgdeQap1x6Wci3f7zMs4NfiqZ2UFvc5LQsnpp3p8cZhNauQ",
  "key39": "5cWMpgzkcT25Tw6xzmhfS9AEzcumzs8RyWifGULmEn6gctfKyMBJ1Fa6jyX9rTPFoVcXGyNnx3sCXhA9rBnYtorV",
  "key40": "5kd4QCsqQXvWCtzg7Qaut6CoHPisg7sJbt8E4SzjG1dX7cHwRzqk1dKjYaoUmrJbZxL6MZ4d1pGLC8Fq8NQMPae8",
  "key41": "5gsEP75pgMCukCDoWGb7yj6Drcizo5mXk834mttnz7sXcHmLFY6bey8KpLPgP4rmXpiPV4mRqm1mQqcCywuzUJQP",
  "key42": "K92xyCkWQaZwLT234pT1qWZno2GKMWfrwDFbpMwk3XNaNkyMv2aXZVbVTXzowgsRGcJNb7TY5PR5ivdN3cucrjK",
  "key43": "61k26yXDACKKviHTY8nBu2KjXy1495B9cDLUmu8i7AK6sKQLbwvDTYMV3cqWKu6maahVahuzXbyNkrqduoMpc8ke",
  "key44": "27BBHET4wMUFVfH2RzEzoGyDML4jrT9erXfnN6WAtSGPKELNZAXmv6W7yUEYSduiYi9g8pkNpvitM9nqDEmCYKHe",
  "key45": "4dXtNGck35QeB3JDsKub8JHcFFFDabqRrktDFi91d9JFXBd2zE4i5dKsqQ3d5UYCpq41ph6reKnK9t369f2kKZ5u",
  "key46": "3mp6BeZY1zpgZ2QbbdB3kkPWCe9Fj8Lt91PWDZ1AqnyXxNGdBtZeK6Bj6AuHMj2orC7qShc5QgGGhu8gATKpwVUb",
  "key47": "GKFB4uoPjeEn2YGYE7MD6tFenx9ZAbtQdYu5dPL7TQcPBP6RjL6VHbg8AALKUyxjSAW5qKDJPrjgRW45MBa2dyX",
  "key48": "2MPiimuRx1Pom4FbYWjTUgKZKhdZxEzF6FXHDzJxf4ZqcDfWC4jsCgk87Exj1utusnz6nc735uxrgqUnSoRvDNUK"
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
