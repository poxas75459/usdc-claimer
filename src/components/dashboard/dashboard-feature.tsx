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
    "myNr89Kd5KQzbsoWhdfa6QSeHvMmxnDWuT5VtEkDji5HnnuGqcvMJ3E5qbo1Xm4avDT9reD5WmBWxdXuzm2ofN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHLuQWzPL32qpCYwgqvNawN2uxPjMNzWUtoPBmNvGqJ1kas4BFFbwCSKucH13GQdTeNuo3NKTfXYhDAja51Bdzw",
  "key1": "3mPHSBFfkZXGY8hmLnqqonEqxpZ8J9AKQBeJyGKPPZZ75zXmDBQnN4fRZMpybMerEYU9EcALzmMgrJvteotmohfe",
  "key2": "4HpjUNAhDfuQv7HdprkQGvZnUvcEGHnFfP6Uu3GitaGfXieeoescb133rFsjgtdYpWaPhgArCiffGSYqPvd4rtGm",
  "key3": "2yr6ppvpTpm2eQJtKWCU7rY16Fp9QS8qfZUSkpFYHbXbkBShJhiKxB5iSC9c9HiEPsr4QGr97eqnnvjHT5285DvD",
  "key4": "3ZacvihZqbQJc53zsmPikpRmbs2pzKwwUyX4trisrdyAppYnEgLhALfLDsM9iER5PPuLfV2aPeBTnLP8xFaTGAr6",
  "key5": "djFwRSqD1BZdPrA1hR5SqAkU9JCn1P3TTJJnp6KrbMcKL4ju8hLnsGetdqQpFssevuAaa1tKoatmAKUEaiBQBuu",
  "key6": "5HP1cikGpVNwbci6sQruofGuKhqfEZjNnm1C7HdvV6y9C9bNhuoqVJnX5ELjBJ3Ci4Bcg3FC3GLz3SM7E9k5NLSd",
  "key7": "3QajEGxhuteVCHqVspdUY44RZJfgaBJ84tY4VR3jVeBC6ENAeEBbn9zGRijnJmPDwNynsyLWuGs4wYRkzC6deX8n",
  "key8": "3JpqDR3NwwoJn23QPmt4DAaBXE7UNNcURxCeYC47AhycV8p7qsYdJsLB5r6T2s4SKCQxKXkswi5ocYeYn1cL2z3b",
  "key9": "5c8RXLpwTaHS13fNBsPmYkXNyR3GCfhSyJ6P3GQCQCW9z6UE7rr4utQeeaaG52RHQvSCSVV2n18CyuVRQu6yVqdp",
  "key10": "k4SeUF3iPhhgEFsmEYTojK2PXz5CDbuVu1b9oopo5aoCnLXigbLpWGNR7j287i2cMWcnXY5oPGMySTnoX1ryYaz",
  "key11": "2cJKm4fWQL41JT8pNsybu8caKc87SR5HHNLRa2QXGTZXkiTRPd64vzMqzws1YdgQDivn2s8hVMdps2WSgSowqwjS",
  "key12": "8vqxc3E68HtJQFBQFL4B3QfHyA8WHiLX6R9SK3N5RiHcJrvkgNztPq6CpBK3xrigJbHiUsDMKupbbNSnR2fSX2p",
  "key13": "4S2b4FjS2nfRFMQEGxbdCdipTnWeS25JYxyebw7YmeJfmQfedXCEBTgKjZvgVLi2d2fuLnX5qodxbePqkuswMsw6",
  "key14": "41M7WaKWdMDrnXQx7KhqAhQC3VAMKWCwb1bELURQBAo1cm7KteP81wbpheNbkGL5tKeiyo3Lnd3jAgqd9jbVdFiF",
  "key15": "4GikYfPkgRCLkWV7nZ4nJEcSHJ7djHQV1exeycR4o6xQBnZd2QPjsQGYt2CceE7RjUekmS9tgeobBgzQd8XvQPFp",
  "key16": "od2oYotqCq75Eyvnooj3k2TdpXPbx1TY3ppUqCxu3bMHUp7d5Ahg9hjmsMEGoYEPzV7LK5doTYfmRGoy6G2yvXf",
  "key17": "3Ktc6uuFRbxuiE7qZQxCETvUd47Yu8KBfsUnnyYnDfjaAX2erbGKqyKN3dpRBchFMix5LUjndJyRs8vQ8qzwEKsk",
  "key18": "3d9qp6RTvc4uPTXzsyaktCFs3asjcvQZRtc5dCMLiVghK8JGUwMiZkNhD1WCJk12JCkJnxqBpeQDfdLF4rVPgeqd",
  "key19": "4mEf8H9nMixUayJ2kvKQAjhfr9iDbS5Ltjm1fVLee1imF4BkfRDo4bLkS4VcEcNzVkfEVPRsqZVzWjMgV3U1rrR8",
  "key20": "EoSG64vApwoaZUs273GsMVR8dtFsQSk4n7oUeH6ebKztT62fYsFSLzBo9HYzXhVkQ1X6jin242gG8SonHUcxBKA",
  "key21": "5bLJM2dG8zqyKKWNeGMXHzU2upexK9LjEuy1kQXB2JuZoeW81gqZSQ3b6rSBUNUTfe7C8Ey7xDvhKoCaqVDb46TN",
  "key22": "4mkJAVN3FcC5LarjGxGNkh2JB1EhUUxi23M1K1EMSfp1hjW5Efr59qAHGGMYfiqe9HLnKinfLPPrcrGv6qYX9mL3",
  "key23": "3doPEnWPUGMDCpKfcFVLDXc6rfYtVsxa3QZJL5X8aNRbm5xfbtgA4B7nZVXGiS2dngon6tY1yhtwxEfuUPp9RuFd",
  "key24": "cbAfL8ssvN1puFDtm8zMxzUFLYK5emwCKR8duYhN3ohjcqBaAUFYx8pqWkqYjLM1SwxWzwY14nHPgacupQ3EXJD",
  "key25": "3qd4Cv6YKp7UxcBUW6v8j957LgGLjXYTHHsM6cwNAMH3z795Re9Uuo5e7dwfWuX8h841n71Qb42wGPQvWTcHjmuS",
  "key26": "2k6BbaMgTb9cpmAZEVDY1ujKKStZSFYawRYd9Rwoemm13J9Y2jnsBJS1JhvAtFz4pUurmAnMuRL3JsC4ZUSXmF2n",
  "key27": "4LSDdEkYNKBwrchYQzxxF5ny6sEhh1z1DkaTLY1e8DAEk55THCYBUygL3uVtWAUKYQUYqsWH4dBWgdZT2gP8HoCC",
  "key28": "4vMp7t1iGfEjxvmM1ydY2tHTxosoQDX4D6hP9L9F7SMH58UeRFiaTJ4RJZUCJRMJ2AarZHK3BsysowKxiKycMBW8",
  "key29": "65nrewQTZBZyrQeeFdACWr6WCoVK8kM2dD2jpPRkTcuuAxdDXY8vvG5YtkomYxfNdvZhjLaGz4YCSYXdpZsrgbWZ",
  "key30": "28cPCKTCjddTSeQikhsvrfA3iGE73eCMfYirh57RFPZzzkC8RthVUBBHeoqxFZsPpqgcbnHGcwhS3QP8h1GTyEBX",
  "key31": "un7ZQLpavzGkPsLrruWTxynxYmjCVyp7PShUg8iTK13Z2XKbhihd7sF3GrSJmBKxSY2aDyAPBREJcGgwqeTdHQZ",
  "key32": "4drzMC3jqDeR2g2GLMyojpmBLjVkyf5b5MxMtTzS4tpyF9EmYYuq31UbHv4WjMPyEJWx555vVAgep6nAUiY1Xb4L",
  "key33": "3hgaTXgeJqAHryeXPSRxiVeVoLSwrVt1j3SbRuLqwBNRxsXXry2isqaUn9fJoz26ux2788cAmtSKkrmUqoPSCv6N",
  "key34": "236VwcYkF9UwvbMHtNb2umr3mvNgwrdjtwMwGRF3wmrKXjdHM8ijD2cfwuH7U4fkQAyMXRVjcP2cCoX6b5tqgQub",
  "key35": "2HXxQdntdmKd2wiLWJZvT2rw9r2T4f9PLskWPgFfFGzWEEimBWVc7Q6buPg2AMReaUBVebCK4ZqVzkru4Yi45Zg4",
  "key36": "3oJTzocKUkVxBYstrH3nRLSJUHQoZ22wACUm2d6GC9joUH57KLNYbRFCmbSmS1qAtxBDWv2fwg5efAfKmzDhWnB1",
  "key37": "3V4sYmH7YvpaKnu7Cyrz5nxrMPRxLkLV2FwAaytjd7DC6QS6XWm8UmEyjyBw4YGqNxjaWX1jAsCiDTBPUv3HbdUG",
  "key38": "6jJbcopfpGzTASmeTUYpykxa9n7NQ6GeFvj9CQJ4LQrnsS4Gt8QrWxJz95CjqifLBd1HFeX98BnZ6zcpVDPGxyo",
  "key39": "2ybdMJU9CmpRytoiBePB196fgf5aCHgVCDD4MeYunWHmVRE7GxotpHrcVYL2AYRLQnrEfPbEymcLvFL2DFhMEgH",
  "key40": "5BHj4tftKEUFyfCQcccxqW6b3WGAPuomp6wFB41F5ZefoZLbtZZpL55JbeqNSFiGwgxca5sCvfL7NxjEW8ZcdDNd",
  "key41": "5PzFcc4dymd8PiGJegwDonmZ7r2PCfsNYvdBtMQKWZ5GoeEf4DYN8nbXGeRbzx3NMeiPkMFck8P28CCTMf6yfd2j",
  "key42": "3fVkYMJHJdaJwA1sHJdCxDDZqJzQecNCfVTHAxZBU1sdktBu6kve1pu6qeZGKgbS4jZxUZLqQ8V2h8SboYUtW14G",
  "key43": "26oyQ73DzzUQ1jWhXgG9na1hzUGvppvD2zEcxEPpdHYEm9KqwnERzsajcbJeG7sP1gjuLg156s6nLewfizQAxJVo",
  "key44": "5NNZNNdNGCgE5jU1Yqva56n1agFSr91vEopSLh8F7NSsPapnqXdTy1W298rAiTN4XReo2Aqg5BUVJmdJNkYYddeP",
  "key45": "jcjmmZfLQU1tP1viYAFTfUdz9ZdowyjiLskan69mZqcBjDsbVSxZTP9aZkXEJdH1KxNpk81k9QycL4wNYbgcxSA",
  "key46": "36CS7PorRBjwfthQkRb9HnZiiQPwQZQJoZ5JepHQyYKXsKE5iuLeed5TwuAoEdkVbSad8fJPxAfhVCPg1NvoHbBX"
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
