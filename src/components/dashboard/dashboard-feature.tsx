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
    "5uvanpocZrWLM9H7b1vQPP9itUaUGMAgd7oRW4aNeHnE91uZBAZpEWJsM9ZfSSvVn7ZkzD9v8WrBqMdesVhego99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCZryEsDkz3TYB2L8g5BpKToFtakoyF6R8D9x48NcidmKQ4Tu3svoMGZ3rGg9Vicw3QkMmHA9fgiAFSgrBb7iar",
  "key1": "3tgXGrpLQCfZU5h1UgfXSJpfAqAyaoWzWWVHweG7Layru6bB3ivRiuWWYDxdC5chgvuXWJPkYmX4hGoybk5pCvY9",
  "key2": "2HKaQQs9p1p25iDZzanTP7KmnV7KdDaiV8fPNCpsKvsj6vUZtQdksXsrBHLcuBdx6YNX7Cg5k4tskSMnvHrvGL2E",
  "key3": "uWVuReeBBgozgZeVMeD3obqtsrjdKF98StbGxSxVpzQw1bXYnYEmUQ4vi5Wxy64tHRGq3FyyxnLRcZz5RkUEUW1",
  "key4": "3VUuCBQGk6gZCsB5EypsWmUpEgR6tk35A2bF52PriAXHiYDMN2oHZpSTj2vQQYx5DjDzdAJeZJtnj18FDyos2gFG",
  "key5": "2SCy4ADLAbbsH88dFgmeVNxS3rsQ1J7DapTxPjDdKuFyyiQKsWTtiiZ2bqT96bTgCHYGNpPwa1ruP35vhRucMdR8",
  "key6": "2kHEoWTWWjeXUxK3DiGmm6qnb4mhukgJj78k9vhpdvGFuZZCfMxgCRQodVdWv7JhGrQFpAd6QWqTWJAz1rMi9R9V",
  "key7": "4fvNyHai3WC3h9Arha6WrQk5jMAgjQ7MbzSMQiWJjCxyidK7p2hq998814p1zw9Bh1T6FfeghRJQXGKGZu6NDDCq",
  "key8": "3jKgmCChpRzYVUor4qA2kTz5LHNGQNDauVWLokirFgV2jAeKwd4beBreb7G9ZmAmubCPSLDbCaygFWLqJCD3K9Xh",
  "key9": "2vMGzF4AJx7PCFRFdXSFC3toyKseMNbag8UHzt6MC5PDDkVDnJDcnUxrapF8PFHNLU6gz4ahv7KJ4zTxFRmzkuM8",
  "key10": "5HxHVz6SJsoiiWvnJGYP3wuHqRCByxzG3voe7Amym2cCNq8RL3WdW49tjfCAEjgD3f3wn1PmjfQUsujpD22tYqC8",
  "key11": "38pKchMzGnKmu3eYq39S6duJoMjgeSB6G82wwZyroEd2QobngqrioP9YjFfViwH18hUHnnmkHthzzEDA7mG5UB1Z",
  "key12": "3bQiZnU8Lfa2XamNSsL6vqTFbQuFKN4Bna5r8Qn8zLeszBRv1cjqbaPw9UnW3FfGSPZx6vLqkEQWsEhmmpkHfLLK",
  "key13": "3tbuZxzRVm5s2LvhxB9UjdRCnSormuaiBedrrfbi9Yk8KM8DwZdwmLiL9uGCRPntFaoxFYFwgKLUoqD5vWratgzW",
  "key14": "5FxDqqzoEtAVUrYkaSsFU32gLgFKx71ZZvLVEDRHY97XtWDdQtGfYfuShFh98jd3TznP4628xB5bEeXkBWJo5Ky8",
  "key15": "3oJJqkNf2yux5dh3SbM2ztFiJR6wguGEtWpVcwMa7cAcpKUa6t4EjDq2nUsmeMxmstQSFJM1DFcencLxpXfwEipY",
  "key16": "5d8qWrcDxZ478naARgAkdtEQRWFviXKC256nRfJ6Gjo6LNRstRNvLA7a37tHr896V7PDQj48HxSmVRTMGhsJzAkR",
  "key17": "3uodp5NTKbjHLdHLU6oHJscCDwYkYrRzExZbbJyYyY9sN4H8asJmyaCFBveNnn2zGPdYEXX4R6ZNPUnyoXoot47P",
  "key18": "DUPAfTx5bQzohkw4HNtgPW3E4HzJZvQ8Mvt8Zf81Q8sLCXUYSH4ht47Zcss2CbQHeU7n2fckLgz3MFeErgVZiuG",
  "key19": "3GVYD2E1uBRvQkj7DqX4HCbpenkh5d74wEJUBpXkqHmHQKqKgCi6UjSMLHWoDd3KCsg1gDdBEM3q6xurkgJoL7Yd",
  "key20": "5nAMd8RHTsvddNxwENrKU5KVsaozT8hKTAATs5pkMsoBNJRmPrXXXWDXDrTM9HcwCkNZ8TStWU3if4aeD1D52vrh",
  "key21": "3nzj42S3s5um9o6f1x3CkpECAvjsJzFeyif2VuPfooZFhWbsb9bi2xQ6DEw1n8ELSMLC2DG3XePSeKwbr48psQkJ",
  "key22": "3xRe3313b9RYY1TruLhjbr5Bj7Q8GbC2ZZAq99eAVauxXP7pnoxDhYp5SSbXMhmpkLEmviaiHrSZ7G31jmhvzTPp",
  "key23": "4f2pQJrwhAxwfAGkTHpLqe4CXgcp8p8JKRqm2wj7RfVduPHym8HEu2Df3tkFg7fXf4pVhJTwQgQxRXsguJoMGvSQ",
  "key24": "4Lxt61FLvRmxQ5QLkeXidC28tiuGaHGJnx16Xf3MzKJ4rmaJJdKHSEK2sBsCAGLWfDTdAkeLhwgV1Z6pgZvRsrdR",
  "key25": "4Ej5vgyRnbfxgLjeFDxd7rup5nAWwafLE1J9seN7LcfN7HD8kiwPvE7D2VmF69RMjiyeArSP2w3BmGjbPgqD3gcG",
  "key26": "33e6stwJisPeJ9sSLKZLQiDqwxvDEm5r4jUpj5toqvHaFEn7CHYX3Gw2aWJPnrGwaYS7sBGU22UFxmwh7Dc7jbbq",
  "key27": "4mRijMCqh1ANyo3qCQttdus9pg9YYhZGNzem2ctsx1CJPpJ7awvC6ck7M6RyuCK3Xd1WNJYdvyFoRMiS5kntvGhP",
  "key28": "4BW1L5tRd5r6wKC3hEDc5PLdYaM5bByUqvfrP9kEhqbpTyDkr5Sihs2fUDEe2FKtytwaR1qJP64g8srFs46oMbE1",
  "key29": "66JFi1n3bToZGR45mdtrycNp1jhX6uSgc5pSz9eg7zvL2rqj53E3dE86JJMgpNxGrz2stHWnySeUAYiehvZhxay1",
  "key30": "5JQ2oDwXm24x3eXvkpTMyDn3Tcq3Jtb3FRbtRJswCUWW5wiHUswMZa8epZCU1yz9kjaXvZmJwZGkNSuEHsRgYVBq",
  "key31": "2fF2CSbxjuK5CRLdHcNdqoLStjV3nZ9r89sCboQDgwRqS7D3rm97iACdHvm1zfbnWMz7weBGoPotp4wSWvPKjsb",
  "key32": "eCzY9387KS8ZkrHJQ3YRVq6cXi2Bz563PTykqWQzBDknxVEvmzA21qVAa5MXRzFu4aJG6iSqZiUbAUv77SDrQER",
  "key33": "3YqC8oGbAJqFsJPEK5bFNHnt1LFPuLn2Bj1iSFAcw5sjPr75jdh3m2FA3wp3hg3xPyA7x6v5pVCDsQatnHZGei1u",
  "key34": "5d8vyCP6JkZ8ih9KAwp16A7WYsRPj7XDivakCZm1ApUkWht94egtJ5qKpm1FENHvB2SCvxGspMh4LDKKrK5LdqMQ",
  "key35": "5QPZH3R1tdMJmw2TBdL4nHCX9xAzkbqgiHDg9djTtGz6zsXVqkAWo9Tv1xE7s8aowomjnpDA1DK2dwEDuMUwJk8M",
  "key36": "3kwYRJftSwJMW4dFDEguvV5NBFhtCeWNRrCfsp9Upa3YrcZ72SdEZuEqvHDwtfwm4utK97troT9wPZ653H2Ryn1o",
  "key37": "67mm2pZr6HaW4uAWg1HhmRZsvhMPwy3Abw9ibYHciA26kvpDJVuKzNA5pDZTqgqbiqQTgxFs9jtSL6dvhBkueMzp",
  "key38": "41uH9BuM7mH9gTgcyxa9bRFb8KoXdQn4RrCK3JUCMCqE7B9MR1DYT7r58HdUACK7AP8ewj2GgD94V3jyMb2eYAuz",
  "key39": "3cELVFo6ZJtQkJg1Stbaxg3ajUvnEuQpJ3LKwZsmnaAXPcnk61zTGbCfvbJcPgp4AjvgitjaNQgD2R9RozyUJVPP",
  "key40": "5HkYHxUZDiTgqDyjMRd3JyR3YTdqxmTRJjjmNyH6e6dkG8246ubUTTB8vKxCqYxMihKhMKBaHn8D8LyGn3N3snaB",
  "key41": "EXMgtZtMMnaFjaEQvVQDo6458Rr6kPT3Pz6UyrKpYZ2UD25GKMHTx1vpUKucbskVJhXFwweRyLvChq6cqfhw1bW",
  "key42": "UTWmFMo6dtvZUjXRsXAgu574hctk5PFyTbKi2dZpADN85QjbnP2ATpoaz9JsF4xw8pf4gzcipqT1sk12dWFMfzT",
  "key43": "54z74QKRdm3CqFyKtSnPehijSQvXjHXD1dVpiT4L31TJrT8KRB8UFTJqJTpRDfW7ZZGL432K3pLfPXBnSwADEapN",
  "key44": "2K9UkkgrkyAbvwbGpvuEBBsGoV9dUzNkydv4UwSzaVMJTNHHdtK1iHFXii5opwwMomp4BtDsCJZP7MvHmUZjRoXQ",
  "key45": "BiPxQzexWrEXMDZN3L54BkivauAaMZreSB3E56EjDS36MU2SzeVQNm44Cbupd4dH59eX5sngLzKQVsdhWxqfn5T",
  "key46": "3GbBzncQAU2rN99SBdYBBhSKQyvxouCyAp5XtHfNawbG92Ww3eSsB8tUPeYwN3G8AfPT2HxjzvQBw7MSLftoHi63",
  "key47": "43gsg5VHe9pGkoiZ7mJyAhSY96kr6JSiJWs25cFL5SfP6imvDPFCUDzMJHX9RUm5FsL1aWaRQ1QAssKHpqQ624n",
  "key48": "2CXcCnwKQR9s3sMMHT5wJfc6mFptPvQYSo1LWz24X5TCH9asf3yc35CNxoSEb7yaeVTgJiKRnvGrRBQ5WDzz2pu6",
  "key49": "58eTYwXYc5WLvSyLfh9a9ZwAEmw1MhysMqTLQ4MY9d9gAHAkr2YKKv4hLXxDAed6tstMgqj4iDit5UCHsrkSDq3R"
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
