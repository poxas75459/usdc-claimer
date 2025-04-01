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
    "JUbTwUefftHw5TmZ7MSmGj3q6iz5wMKoGuQeE9i71F4FqvyW1xCVF9k9J3u3xMFq7UCn12rTKxTY1zHtmPF4ykz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeWMp3mmJngKAG14herxhyPDHMH98hRXYic6nX7w5u5bBCPNgWBEmcVHKqgB6P8wTUURg77uGpKP15jip6hwd9b",
  "key1": "5NCN5GMmDWYV6GzDdfkbfwCktxJA43gzRJabfVn7JREMtBKVwR3Gndv4LCJK1i6zNkrCQph9oBEA6acnygNKCmoG",
  "key2": "5YNu22VnBnDefK5CQ3dydN32CgLJQtXwADUkqPgjrfy18d2258ykKwAFR6vVzemnZpy15ZHt1me8vhiUT9pDMDSz",
  "key3": "5kViko9P15beUHzcmMCwYhsdwjPAn1LwgxTUpxJiaoQSDQc7F3JdHfZmaq6w3ynBvvUpx5mqqoz6MAonhSsRm1SN",
  "key4": "47uwMQ6EECb8itu9ZwzjCRGWExMH8e9XBhS3bXeS6amrHuajq4mGJwkv62ecAWBdZYhews3JXQ1EJdNHv3PMiNX5",
  "key5": "myU57GNcdwvnqRcEgnwcsNWQdNLVDaPFtobr6WSs2bhNDYQHED4Q485BQLnoRx2iNTuiNM4NtX761P2fiuwCjid",
  "key6": "GLENxXVgaNpZL6QPcuH8jryA64yBdxPeHiQzB5xH4gvq4cjp7A6c9UddPRfvkWdQmpyDoxK8nxhNunC42P3YNPQ",
  "key7": "7MVBWmzi9LJLYLSjGBe7MbRjemMFWHnBHFZ2FtgqmxLrocSBmb9zHYx6XFPHPWTZhtE4xczzW3jcZAGkXpQsJ4U",
  "key8": "4JJLw2WQqycpDv4ZS28uRj7nVhDvcSpHdgKwqKe9JvYkEd5TNVxbTZxxwtVcmQiCKx93jQv4CeLr2UV2nJsrgutg",
  "key9": "4as5Y6wGx91yv86cCVChJvoy2L6QPN3ycLPCqiVojcUx6fHJhbQoF3JWmjYLFrhQfDci4AzM3CJDi1oTnpuUYEcR",
  "key10": "61cEK4wnXkMzf9HXKBjioskFqJYkCmDw9dzguuG79LTevHj6pUcyxM99npPSFzEQYBcSUvy25VHtWMUgoDafPTyW",
  "key11": "45pSSEr6DFgu4mTC7cPYembk9mSXW4hR2uHkGLiwKFqdGLfFpYKM2bWy6PmgeFeo5BgHfdoB5QjuuQhfMuDDfriH",
  "key12": "4WpiMJrusUdPa9mJmMUabiwtcmXtC4JrVPeW9wFaj3KFN169dmEMKkjRuMznYYQKqPNU7vno7MR4nf5wqL2dqgyd",
  "key13": "325bH88RQHVfDDheYACZncqSFPwKNZcZspSS64DAFU3nqDDMvqWD4LdXzs2GSgLmNEjRE1rmJ6ieVCtRwikQzobK",
  "key14": "2Jsru5PBzk9ocbi61K16GbVMDA3jcKK7b2F9mYXm53Rkcejjea7DBMrgieoeAuQAQvodmmgd1gKAjqZXLsEdJEFa",
  "key15": "xjzz4W34mLnMDdWfWTZ4p5p2zSyMZw1HDBTKsPriuftm9pC4Ciqc63desp1wtBQpbM77F33oidV2gpy3XasKBkM",
  "key16": "HY4iSqSNeqvvkKu1WA43EAUt5pd87v8GH4wLTYHR6C5RKpJRG62Amu66Gw7dcDjgFn8wFvSR1HLzp8Jvxswc3hz",
  "key17": "4WPvCq5q44EXb8K4yJyLNbT9F2ZPh6uhLPjtgteEwuRgv9Pm89siTdK14k3dhzwjmUua29J28U1mEob1fsfhHeyh",
  "key18": "RsvDc8Z6anvdNyAEBbhfNNV7MC1bcPosDYSfGMuXD9x48RkgxoXVz53mD5H8tzd4qfbGg6ysXh9DWVdjEz1z36r",
  "key19": "2ybsrgcAzfuS2cJrkcWP8JBym7V88gkWk6u2ekv7D6jVLF9CVDouncDYVvFzxmA1xL8vWNyn7WkERnWpPj9bno9w",
  "key20": "3dDd4yzuuzyenqtQ7ZKxDM9jFnHSvqBk5m6Fdk1PugBDMEfWCbYdSDnJQsTyRmmN2125gabRsKhmHjZJRKu3evUH",
  "key21": "3UnJ5Xt6BQRGqSUioWzUM6CL67Y3Pg4d2RJFox4ek4dLMiZhDyLHQB72Ps9tEHaZNgaG1zAjA3XT5WhiwAfwyw8e",
  "key22": "6K7k5TsrhLQCER3eZJULfBANVr3u5CHCP8qfoRTHc3KgAPwCn6BVDU4XZLUV8DWAjPfG4vqJDiXVynr7vNS5Mdd",
  "key23": "52162zRfTbnhZuWu5nQ5dfTyG9VSEKzUXvV8UMgxtd7Xz4ubUCVXJvn6FefjTy4Xp41tLkUKm5mSnuX62nFEGj24",
  "key24": "5VEWnkiC9gSYnPjaHwsqVtbtQpAytHFDmwXubrSHw3E1TePHHbf4B6gBZ8aAPhykxXBY3zb8RLk7RNUkfGVEGBdP",
  "key25": "5MtgoHEzfjwpdurkG6bDFRVdi7VS7StNWuEhQxrdTYafHT2BswTxw8en5kan3SZQGjAL4c2V5KGWb3p3ib28Qjkg",
  "key26": "3S15W232kyc6QT98F5Sdt6hqvdCyFH7Zh4JXzLeVY8V5F95pUQGDx49WhYxQ5d5iXbNN3ewMPdW2iVXkZVjz1tKA",
  "key27": "4mircUeYYdfShwZBSWfuEBJAhCwZgY8JDUFxRX7MRuHRW6UYt8N712yhTP9Tw1K1imAyq8DRUjNZEbnpLjtDrqud",
  "key28": "58MQmAqBWCNMXshKnFzFJ8H6UHGYjkbEkU9Ns5VzYpQrhDiFcRUK9f3S3wdyYLimU6dpj4H37CS4L8uvVa25iQ4H",
  "key29": "4EKYPEEwgXKU1fKN75pda2Sj2zaTCg3nvPmqusDigTxTYZogzGCvPiAwNXwbq4myiW7o67rJ6AM1sTAtRuYvPTDy",
  "key30": "wT887Y54m7gzWttcC6i8NCaixp9B57drKFHf8iGFe7toK28LZrN1ndWb3Hjfrv1WvKMD1Qpb3U7HxEGzYyEXRgy",
  "key31": "2ouoZKFiLChiXS1d5ZeKB3dkEfGXAiRfyG2tCMb96x8BJ4QEQZec7nvi2H3Mhcxa3d3TfudoP9MSHgxg7obW9Gqi",
  "key32": "4xc8x8hnH71zKyTwjKwrzPULh8Jyqze22dvdS3oZERUDqb4xnN81N5zvqeqwZkojZ1HZ93HRzUvb4Qc2btR2hwcD",
  "key33": "4K6JiVAfDUvfBy2JwmGp23GtWw61QQiy9aAyB6RTcfvAV952DSHDkgvacKXStLc4mMaKiV7DHtR3j94cfPeSshRs",
  "key34": "tUXY9AsuuWkRu1TkcW8Qunu5UurzU4WSR6KrkDQ84ehFfCC3GBYbGvxDWoMSRnHLjo4tv2SW5dEHe75xBYvVhVw",
  "key35": "2rhtNAHZcpYiAykxF9V3pLjUResoP2Zxr1nRteg6krtg5UE1v1cXfjQotZoJqv9byqxkBCrHd48LSArTd3k5XFh4",
  "key36": "3hpN4pKhumYSsepZM2Q6JyDqdSuETafmcjxd6um1gpKYX78CgqpreTjzyXnC4CTfDG9nnW7UdQU7wMC8dpkQwDsg",
  "key37": "5AVcNvnQKQTYAxSHBbRDw6nwtcEGJNrm4gnqEPR9YNHM423tBsp46AVvkSGv88rLy9yLojcSwb9EcVpvZeXFSRaZ",
  "key38": "475gf7ToLftmNLmuNwmj4TekXKETrJiMebaSNckNQ9okG56xrtM23XMQi5V99J5kwCE7jGzQ7o1dnx3Z9xAS2stY",
  "key39": "4au2xaRtdQkqut6cDHSTNfURMwtfLgNh7ZvjBcnfCQB8zUqW8XdES3TK4iPYM4fDfGY7htvSTSim657qTcqVi3io",
  "key40": "5VsXHYjuzUmaEL6RbFRuHwHvUMsTyHhct81Z31jGVMdhpUaEeJc74gvgMg9SQL51vJAjChFwwP7RhtmsLcxfrvFe",
  "key41": "3k7DyrKe2kmkaQ7wSeMK7J12XKDifBY8rwY9Mhd93wX34ogYndqmVGcyMkbYv7pGAPRLVdB6fsRwwABsMVKSitZx",
  "key42": "48JDaSArNv9zi4VuAEM1GBSgQA9QznnjKnoZzen6poBSWApbodJdk5P2C8fcqcPFGrppxJ8toASnYaPdLukwDHAA",
  "key43": "2G29aUVTD7Rb5FTEMXpz3vcxn7UAqTXfcJTHKBSVMTrYBeCg4agN8249NXVP7MsRJb3nCLKsHgJ5gogzW5TKMMyE",
  "key44": "5bJoumwJjhvnoUyjCFocyqrhSQEqYc7iW1r66M3PUFcm9L2TbHayWhVMoW3pnYkLWcu3pyKcyas71ekYtjHrCPUZ",
  "key45": "KiuEyhhJcFVcs38ALsPweMvwuESSgKyb1qyC5ksptBUWNSMQxLJjciM2VgDPzg5UzGcgA1i9i8gs9XKzNvZd7ip",
  "key46": "GgKRWiohRAi85bLEVjZxXdD7k7EcRBeRL8wUFghh1ZMyLLAv4fRxnw8oD5evjFi1ovQAQ39A6SNRKEre3i9Uc2Q"
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
