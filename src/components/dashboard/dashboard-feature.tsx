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
    "55TbkxhYuqxFbKV5y36DzEkgA8bXVf36CpkiZFJRepDYFgNnBcm6uidQ81YX6JL2UAj8ds5ebWgwYxmr1cng1sfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j49ax7PQAFg1nc9Z1kzTx1a6C5vpFtmzkYwfzh2dbZDY6tsJrEibaYvLtZNNnmeX1wbEUbtZ9UAQ78Ckx2vNaWB",
  "key1": "2ajG8b8Mch8N5aB2GKaNHgosLD4tHrJC8Rfj4rXuo9hrS1wu1575AYkn2SRSUB4Y8Z8UA2SzHZP5BGGDXeShF6ka",
  "key2": "43S8usAWUY9Aqv7diaXFwtZwTeFRdPiWeF3KHaHzJKEiNH85oCdHxnLPKtK8t37E85PSErBUAD5ghCx7m8uNh1Sd",
  "key3": "239h3Dn64d2LLD6NjhrpdUMUwowuH149HD75sTkV2f3QJiVgwp3UVoj8BqbtVN55BsYxPqV3gZV7C6UyWMTJXCah",
  "key4": "5Yr29ppdiEWXDeFSanykBdqf73h141jpxteCR6AsJCLXHH5ywygc15rEqxPfkwinkrpEKCuxMBooHBRu58syvMWP",
  "key5": "64wE49DYPGD4iVd8431yN4RyKG8fgsR4iCYrFKDZ6kwgdJHQyeJo4eG1t6GpvuJPCf5zz5Ck5vb3sSFencFaWBmX",
  "key6": "2e387EK9WgkGVma6YVTyxuZ1cGQbc8ov5wkdrH28X7BP45Q8AHfdbgs8Tj1u3zbtYXnEJ3CbiEfDTYEjb3VbMfRr",
  "key7": "cDLxX8ejs9aoinew71UWKHb7w3BmiCTT4qcoQ7y7canra1Ney4JsJjuXHx4D3QL2xEcCZvhfHKvHsm96MCF8D3r",
  "key8": "3fZGx8F3hcLtSAjWnnSau6EZ748A5YcwdL6raSPx1emafywuZAGCprgM2yEYokC7H6hoVP9RAzkTyRnRwrfE6S8t",
  "key9": "5oCwa38myfry96yfNiC7uPMextkpo7s7DyjMpsBQMsJkzNT7YTJ7od4hUHuwX2bMChfDkfVpdX6vJHMejoqwbukc",
  "key10": "4eaCeQXNCxMwad3GZLiXYQ5HZC7WrhjUKEAYTzE6xjpgkprmWX9tNZ7Siz2Hung5zX3BJj8Zv9NwoKxr4EzmrAAT",
  "key11": "A38EWieAshoMLtL38dPDfxAEqW4ivoCV7TZ7s5y7bakB4A6wqJXgbq3RjZVyTiqeVvcznyRhmaZex8LSJEkU7Jt",
  "key12": "63q4jp5a97LqcYAfCsrjoZYHXDLsF87w85V6XTKVeXVSAWPULMQ6o9JLTcdE9hZqVLj7LmPGU1pJcAQVyNVfJB62",
  "key13": "5Dhrb1w9kkmdpXtzen344t6nNGGLGj6GRd4nf4Wej2c2qJ98WJgPyUaC71ymtvLPDKnfRAMXcJbLB5DKwGjpajwa",
  "key14": "4UHB3toTXzgQRg1mECCQLhv2Yn4H2K8aiLRXhEVKvWBp7R5ZX1rWdaktaDauuto3jGz1b9nkhU4er5e2zQw3Byid",
  "key15": "5JdP5gRD289rzQwTtUK5wC8m7FTz6R8Qbk2HMuSecjut1kaTPpv8sXZZQEpsLxoYchMWCpMbY89WSVQgFxdpsCr6",
  "key16": "sYjggkHEWFg1AwqRv1uUqvXdxvU1C6XmFWXueycf6Aj2CrxzvRowpAJ1nPLVNWPz1RBqhzZagwrVfsixx1sdERg",
  "key17": "518eHjM6yWNHSVnYD9FoeWvjkMsHNNjcvaXp4Tovc7cj64yrsGL6j9ijnxuaSFFgAZC9nuFXYyC9V6TZEVkxmZxm",
  "key18": "42fPMk3VLiEAb99CGhqBTGzM7TCdndk6PqrVN3U9sYNrvNt1ff7jcvAc2VEZbqWEdoAKswB4Z9KVTvkHmVHRMenD",
  "key19": "5RjeT5VWmcDaBHPHhNdM7s5yEFjPd2egCeCJT9S3migoSbTohPrfSpsshUBrT3iG6RANSrnLF9yWQjtkKawM6EUB",
  "key20": "2WiXheBm6nXCtS9foufAYbrbCh7wzuN3f5fodsmRKn1pbEGaxQmAbXChvmsXybNeGfXPwVEBunJcrfC7tiThoNmX",
  "key21": "TCKdma83YNcGU7rn5XPmsa8V9QBDsSev3HfFqKKzwyVSZHxcYSdUKnT8SedgUW55rqVajEZHoZuMHKmpR96iwHf",
  "key22": "pgRnWqchagBWeCAaXcwVLvZ7uE1bXU74a74oHon71mmNbRndXS4ma9dKMviSLsicyZvosqUg8SsdLb4xghkfcHt",
  "key23": "3SCtbtWr7eNEmkgK8DFWcJkUpccXWKwe2Xp8YfysJeF3XK1uWB44ycW9zNoL2vUWePuEwBWv3f8xML7NjFTTy7GQ",
  "key24": "2JzYvgnKLqZ4QNFAR7N7yffemwngmotNBiwfeND7xtya38nsN6kZ5soV7GKLQFcJXLg5fjPd5S2WNbEJuVdRuPEj",
  "key25": "3TbCRuMuKHMBjseCK7hK59TFSWNJT4kvgaF6EUqJNg4cjEzMNA6wu8CKCr11Ax3Ry8pUQ11VXzb7shJvv1FXLjyL",
  "key26": "64HK9BC2YnWh7odHvKwaT7D4DBwV2axupLsu8pM4YbVhxSnE2ZF7a6KpC4hyn5EViDUwKjGrwxZeFDULCs7RvCoo",
  "key27": "4cr5RdEKkLPwuXKzQMtLM1U6W88owrXVMazvtXaFXCQUpdZUP2BGjegjRMWqRqDtcWjSaLGK9f6a4ucLeuh4w4oA",
  "key28": "4rMRacp2oEDzhXv1y1YovmhYQanKAhc29BJ3zM7GhjudBgZJW95h3uJBvAb3oxtakpkE6Ba87SXPbG3sfEjPo32t",
  "key29": "2t9cLeBofGsgkPBvkskMhfSiN6xhbRvjWEFTuzqjSfxKJJczwyMXtyz5Gpyx5M9e7KQCNAKzQMg1g6k3gV2skyhh",
  "key30": "5a29Y5zexmuEUvc2nxKU8QG5PW994XAxhLeXaKUKkGsCf19NV82uJwQaxxcAf1Jmtt25J9p7nfKuLM5bAiCVhLDv",
  "key31": "3DuNmWfMmEMBw4j7ELem9vymzzqMtxgeJWCbNn83PpQVXLWMd87zZAFMhBRNzPymfSEM4TVHz4GrzsuNjU9dUtmD",
  "key32": "3krb5oG9zpihCyqzVFstBWRtU1AggMNSrL8zK5K24vu76o6uQTS7kvCmVziGvwhbpWeQAeAeHbt6uBCsTKB1ptGc",
  "key33": "3ha2u1nZmdiBFvys4B3w6Sq13JBrGCaWLKB7TJm5UpGpdkM32JDkCs4TaiKeYbNexkgjxjUZNUFPEamCBPf8mbdS",
  "key34": "5ZapBVFgA1sHg7Gv5gkJFBHmtRQfaEcVaj32X9TKUjdWoe5ubBepZEjuZzkvP2VAP2h5LL5VE4zbPfTW6hxsJYwi",
  "key35": "3CPqh7sDFuDnbHApyn4bVa1RMnLwhx3T7eNha87RaYbfSVXsQPRHkmYBU4KvpbvUeM8XGpuAMLda1AdEsZ4VW6cM",
  "key36": "21geLN4UaQFEPJTa3AtEgTBYTDAhQMGmndR5Q4CR2f2TUaDUgwBk4sDKcuGZYfQzCPahkvuRAnMiopkZ3D95erR6",
  "key37": "541BPN9ULtGTvFt5kH1AAu96i12fJuYRdJaAXww54AxyCCFvdUR2GA54G4MKJiMZC5cm8vbXRoS8ycioknGD8Rk8",
  "key38": "4twFXtnN67NaKzknSsH1nYrEB7fGPMpjMyYCHnRLo31gcMyo3tuyjnB1KbAbq3bMkC4Dm1UBAE4UzAbPjGGkUoQC",
  "key39": "29B9n6hYofYEJvLx9CBk2GGfoLHBCgRVoHViBmZ6G79XtgD3bHcrpFniPwaXfSiTdACM6rVD33JzsmsxpnEFednW",
  "key40": "SoNDhaU4LMcm26SHWButFUVcL434PecVsptkQQnMKYzyui5NzvZkHrwkXmaeUDGojwponhfQ2ikBKUERymJYYJW",
  "key41": "2ed4eDz79RXtQnSfnwrE8o7saeVqpUsq7c1YyFCeZm4igbyhmP69vgQnPiQcZDeUMBcvPpajQ3trSs7iqiPt5x7C",
  "key42": "4aahPLcsGsuhp9YPDEu4uMo4HZd3KkoYWD4gMazg7ywRREsDiw7yasemWqjAXLEGaWE4rovHSS5Ba2WUEB1fLoFy",
  "key43": "4fvDANaonwo22epUWEcnjDbHnxey6nrS8DAi5KwgKGWpbzubUdJWMtDFJ1Wc7F42219WQZS2QyTRQfkMhbDUuijn",
  "key44": "5neuSDsM1gcjK6fPd643EPDT3FJrxZM1fKNmNhx8JACD78HHsG9vR43D4ASTqSqf33yXa1qM36FfS1syenpvEGYt",
  "key45": "4VeQGCviAwxrMMsNrXth89S9Ka1shC98np72XUfvvNNP5JRULKjeQKRRgtKZwLmjvcGqq5tmUprnm1gRNbWE5xsn",
  "key46": "5Datf6RCdJwMub2EWAskZngLms75sJePdLZr9ygD787Sy5epfpmLTMRXMQcYDPikoKJxrMruo4SGYXmhnMRjZRte",
  "key47": "543ZrsQC7BnMZxH4BJhuywib4FmrNsLR5Ycr3y3J6Jiy4bDfP7nTcK3jmR63122Tjgs5Zh5YEXrcFNqBmLYqzLbn",
  "key48": "2bzsWYWmLmpHzpSC7WLEFz3DpZ8afxc45wK734VjXzU5kJgsjaa346vuPea6BiGNnEV7zc3jav3qUCLtSHcCMDu7"
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
