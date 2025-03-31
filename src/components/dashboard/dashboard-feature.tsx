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
    "CtbsRr2R6u1E56XeLR8aL9p1jeCuBw5TB2FEYA74BmVh9YVqjZo2qTWxdcQK49SpbiTphb9MescbFqfM76Hma6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSrqfJgHPA9ipXbQRoqnSkDtmTmHNbJPhu35opf93QyeJzTqwNTumcAg97kw4AxUUUrSaejYWjpR2QN77t3J18Q",
  "key1": "4UaXyZEKVjg4fRzojWLa8iUJEtFTh7XjsbeHkGegRn7fy4HJipDbARTLK64i5AdPHa8j85dHV5E2P8S1oTENCvNL",
  "key2": "4NLiUkzETZbZiXcJmqhGnC72GiGSXixAeNuuF6g4f5ipkppm4Pn6NJ8j1pst8Gw9YQFqWjZkqzRRoEs4sWVet8Ly",
  "key3": "25BA3Gj19YVnUCbSRW66jtAtRqe5Mo6UXpePHg6JJWG1cLJNkyrYCidqxHmGxN69LXPMxzEW6YqHDu2ytqJk4VVS",
  "key4": "2GabYaz8kmxUnF7rU1XmFjLPM4owcf8Jgj2UzWxBC3DnPc2DSysnRHT9g2p3Cgkjt8hd5QWSrADbv6Dsi3fPBNUH",
  "key5": "5L2cXHVmhznEXjhnDWjiJbJ6Z2JA7VEg58MjdvHgFHqZ4NY1zJ53g5CA6JTNnm5jpn6tXkTrU8ZzZtVGd2hoE8ML",
  "key6": "37VH8tPTmwU47XHMchiiGVihBsV6DyfC4CJPVA1i3sgLmMESz2AAykZVAFtJuyEk4MNUZfyYVvFyM7y2xHmjeEHw",
  "key7": "5wDiuCwWkYnvnz5s9MoGF3d1sddksXXsMhpZxStrvd3bduyXntQ3QUNrXLu71fiswH9UxU4jnMQ5FwojNWqeP7nB",
  "key8": "5fzAGYevLuAb9d11TB6PqHe9twk9GGbp24hT9EPV2BrSiUezpayjwNAasNX6zDkoTJwjGvoFSyLCVShinb7qHNcf",
  "key9": "4aDkEKNG8JMhwuowfgwxFvun4Eq5aviERZucdM7fMyfhBkFNc4FujFy3UTDX77M6tkGANd1MwuBiRW9Bu2N5r1xZ",
  "key10": "4JxLSfN27gDaf4qk1xNimMrz5V8MTdLEKm28SZdskV2ux7koMcc2Bt1EADX39UpPvDpQGPqJZrsaECgqzkv29cAp",
  "key11": "2mjJU8Fgyv5vemAndxkQkbc2QDcpJQRHxrUrouHaZuu6GHXkMLWFHfFrhMNN1GqB9p9Mu9WJ1D44vRSZbiymypHw",
  "key12": "wYsotyp24mGx5H2bCeFu6ifs2EcvXGLPTtP71ykGeG3N5TqW7RJoabFbgq2BjXDtFW2m5JCtXf1GRriddhLDLDr",
  "key13": "6guB1Xk28SUqaKDDXfyMA4xdUwW1hH1p8RwxYRJ24d3sQ5j4VsgbR76T6sTTUQQ5ZXaQh92cRe4qGQVQUZeqv1Y",
  "key14": "2BEQY23gbi2EYuhqvtikQdWNND1N2GWBt41VzUJp3eEQLjT8Mxhb919TsNmp7VPqvUaYDTkzdcEbPQVJvHnYLbQH",
  "key15": "3wPZhtze7xVAqSkcLXqyxRg8gsHam9P9deARvnMnt96AwHtGJoos8uegziobfJZgCLNXXX1XiS7Ge3GAVUKn4E38",
  "key16": "3wpRfUnug4tAz9b6dTJYKJCdwLQK3SY5j1SYUrPJFBqqgr8toURU6LzWkhHw3uChs7n47cvQyiTx5MruZbUyY7F9",
  "key17": "yYbYxG6V4JUt4WVAuWVy3DshDzuTFCR51tfV1Z3Q2Uu8mrLYpp9oL42GRjd1CQjAWRnjWtR8t7aC9px8NqpgrR7",
  "key18": "2Hfy4Luan9ZB1GfmqadS6vvThBM2SC9uB4c7xJZFWZVJpV4RziDDvGRHbMDUei4enRWwSgLn7oPU53b6sWiC5zcT",
  "key19": "3N5y8dwhuFroiruX4JNt4fQ5ibhtpazHn7WYy8MZcQBnGnyNh6P4ruBR335APnv9cgrUzaocTxpjKZyo9LV5pcYM",
  "key20": "2weNjmJLjuvxJRwCAnboSErBbnQygSbfH96dcgfSQaQ11Y6DbbevnxL6u9FqTomxgK8QeWqTt5UKFAWYbeyWH4bk",
  "key21": "31BdMv5VJ7tA17mCMMt7ebtmH8jVyrWQnR14iNWtbyZHgWLvqa6fravrwTztcpn1eX91Ru4MheXeeLkFMp2m3hfu",
  "key22": "Hi1wVV3NvHHKTo6En2CgwGbgp16kduJvN1cSF8iALEkk3XgARFmWtuKWqsqNbtNWzz9groQ8V4itcmhK4iFNkAJ",
  "key23": "63gdLR2y4QoPYZhkqniyNKoqKdFRWYsfqHADby9dk28f4dRQEBV3WhMBXeGzWDa2587y3Pw5vDeDdKdB1mkRjjq",
  "key24": "MMd5WrjQDUsZPdYsBPX81SnkWYwu5JbRkw8GPm5SwdC7N2M8T5sFnEdWfJ4RzeJyxFrBxAyQunV4xDzGoQwJNHn",
  "key25": "2tBGPFpmEg23kfxRnXZM1NgHuKBtU5Cs6gDHZ33A5SrzdQLgKnJBcgBLrhgwAKCDoYGuPMnBDWJtoFy3jZo7c1dm",
  "key26": "3myRE4vBJDffr6h7c5XeYT2iJpvqX91MSx7z7gqNwH52pG8seW1EPykjiB2F7kqnP6gpzxb4WXwQhV6BcsKacZhF",
  "key27": "4gEgJcSUdX8zSTJ71UdfDgBJsVHC4v4hNxV85G66fTpPtfXrBHxHDmfh9NAWXU53LoF3PuwF6tbQgwLhSzgNserF",
  "key28": "36eDLvwcR9DnMcAaMA9cAkAkqFRxhmZDm4QgitjUk42NKf8GMSpCkMaVjbLXy2XuC5S3vZnbCWiEPnuMWgpVoZLJ",
  "key29": "2z1H3CXfNCEBhpChF5W9xysTuRbh3n675P7d39ZZXrPaZuqKBhauXq8dBpfjxepBSTZidNSvVkkqFkUjc2uvveEX",
  "key30": "3v2fCpJmYQ8EmzRjcMtyvPEPp41Y14Es3VAHU7F5QtabxxReXfxhRjJ4JD3jZMJpMMU1b9sa57nFpG4EiQMCLtfr",
  "key31": "4JQJ45rZrVemwoPr5qr63LsFCdRPJHtyNidxrhyWJtHk863aRjo2wfVY33WfC82vmhir395mp5JmLqtRac53noBz",
  "key32": "5k9DnteDbYq2FYotpF4skTi1zRM3iSzxVRkEhbVkzykXadsbsAbVF8TjoGTDso7wPQgfQw7GpzN2PsT6cQ9XbYWd",
  "key33": "ixgYUaH81kEMMGqYfE4f4UwA2Wm1MPhjWWMnQWPnut6YN4wkMb8cscUQRyGfqWr1CuCzywG4AGYBagSK88xNsG8",
  "key34": "5QXxvypfqhdybnaP6crmfWnbdtnSLxiQqGMiojy4QedbCj2EhEZWav4muuz5Pr1ezYGaeN6BCF2mBher5nVfnmF6",
  "key35": "2P3t8buckhbeWPrqrHeeixMhzWkH4AME32WKNvcmPw6m8RkwfJgVdjTp7g8nN6DXD1mosm2NFHVFcMrS6KNv2X5a",
  "key36": "22jdX8EnGQz5STK8EHDkhZCiytJWoL8881ynbsYY66idpnLEoJP5VfDzRqfMaw7fdh7tMj4i6mgegt4Xyj6pNwdS",
  "key37": "2zHshAYKPHNvieThdc2Ctg7yzvXqmmnJirSwMhVpDtCokobdmigJgkWuo4LujkteKaxCm7hTDEqVLXrKdXvy5Co2",
  "key38": "64yB5swei9aS5PcF87wrXWQ5LBbddGaPYvWhmvZSw2kMauedBE8j769i6VqEzK4govsoZRyomiJvjrVRhm7qsCko",
  "key39": "qUGownuhE7gMkgaEcaVkbGDFsri6WtaNjxkpNB4Cjn3z5spEpXCDny5V7Dg1a8a7sP8j5vLk5zWEtLw5xp6fNiw",
  "key40": "h9Gwu5DdKADARBgWQS3WPrfqiP56Ps81S7WeAYwL2wTsHYsCek9qvPEzcdBYaPTtji4v1iPsrP6QaP8dGuEFiAc",
  "key41": "2B5p1jpAjG4Vey9ae99nNVR1Gz94dvhoxxPLpV9jKeY1JgLjP49Qjwyg8bqZCLNnJsDqseoXP2G94635VCd6riuv",
  "key42": "59bFs7VKqq4oenULLoH5ZsZs3EURzUgCy7DZsZYnTrdozaPGcVnUbNsMRoaunk1C9m3KowbzM1LxCWM5U4Pvg2m9",
  "key43": "3yDXTDByBPtLQyUo9Pu5KGCG63ZuvPEcJudd96DrRfHju7hKxKE4cwwWUxZWJgJGLSRxiZ9J9gKybYzXAchsiLA5"
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
