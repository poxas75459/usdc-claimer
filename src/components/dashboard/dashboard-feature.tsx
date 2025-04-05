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
    "62MZhykLJKJ9b8EAUPqevErsS3chAaaZoxbGauXHv6SEVYSn3jwQ9kZsaHC4xfMVgB7NofTQrrhqgikJBrtTqinu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QmTLxZ39pYQB2qg4Cmddmdsbvu2ysT41cBmZH8awAfcsvn5qcpuxHMFNpR4NC2Gic9WQCQbGMKjBLuU6MCsciNc",
  "key1": "2ekWgjfvquu4hSsZG1RNup1sStqgvLnkH3qKYwUL7u7ateapF11LBFH4axWT9FsZt618xeq9nGW55ZExG2paf52e",
  "key2": "27DExYbvYfbyCDvgFk2uqYqCHB4hagTHYs5VNRzvpanDMfRcMk1NdeWAUH4ViHhToxEYqgwgi5vZ2GnogosnmeYo",
  "key3": "3b2sjN5Urs1JNUEAm3k2Xxv334xjLyPsMF1jpDRVJpn7NpecuZ9qRtkXC65P5YsDezCZfAUfQ6dV29FffTpC8tKe",
  "key4": "4yqTdcwKga5fifBdZt7D2pQVL8bTqphWTtUdknnobSzbde1GwVt9PM9e4n8YFV3Dn1r8AhE2aJUAdGStdETsj7KD",
  "key5": "5nRnvi8oay6nzjU18MtuCUw9H9Ua9a3nRWn93vkxB2WtEfz5o29AmvdrRANfE4KyyQQvWx2bhc5mXwxrELZKyb1n",
  "key6": "3zqq4whLjmrbZmmHmCV76Zqd4erd8LK6CiTBmTAvZ8nS4rfzCjBGCccu6bBvaRzY23ViMJeJv7GW4xsZj1nWBTKA",
  "key7": "2XapGfFuSBveYSefAapBUqeeiKwdtruxqSCEdHsNLWU92QzZi1SHVdd2k86epBmY1zHRhxhEesU4Pb2zfJnofhWE",
  "key8": "3FqQVqMz9mfLXfro3Yyd73h16U9c2vPo1Dy72GaW35TGv4FUSDzYfLAccvQ5dwTwdXxFfYRDKhUYvCcgSPapfYB2",
  "key9": "64UNM7qQqSCdbviRsybvA3fu3tQVXvmCoSDfzPta9fzUQANpWEhnYG7X7g2etXvAXoiVo3BCpzJAQGdTSEURBfxq",
  "key10": "4yZvv8Rgi2xm7UZin4nPq46Z6uPhYs6HzHnQsyBJikwMjnRhJPxg2KBAsqrDMGFVz8ccMnkX8uWt3VLkvvXTxBvn",
  "key11": "3GD4vxEuFLEdL6JPnMjNCEkwh6VFJRqco4z7PLNWsSz2Ac5QZHv77nTvto3jPedX6epLP61tfV2F2YfbrEHD3PFh",
  "key12": "4WfAB2id62yaYEaWQ8n8fydU1tredXzbjdUVn6oGfd8NbCSYVfVWFweVixNP34NiPLnQCP59gr54xHPuZNz5y2br",
  "key13": "4EspMNME72c3gs9kb6PNBLvD3wLXtN2rqttt3vC9UH9iW1RQ2s4b15inLyFR7AM3jixWZhYpqbpVqRGFZGbAWF99",
  "key14": "585fyg8e5BFJ4Jt3kCt2ENdfjtfDucjPyJMRcdt1NrrBoCGarHAMhnmj2iL5ShitFCi19YP6KP5rRn5Tdq5aue43",
  "key15": "FqFrpuwpLQm4Jo6j68YtyiKgXrFvdCQ3TMHGCpqutgvzts4PJKyH9PtKJ7XgSUbNApQwd9E1Q82VDSja6nmnSFG",
  "key16": "EmizMA8uoAaU5DodXP3iicaLcQbTKXsgw9LFh8jEGnnJ8Uow59imuUfHPzpdFAYcRihDrh9GWCm4dWp9EHJRFJ7",
  "key17": "2MPWJHdt2i8b8pyRtRGWW8iBxpfUjQu9jMQTKMjX9hcH4qh8FeD3B5gTQHbsBnYwMn7NwMASAa7bosKUQQ4RR2vU",
  "key18": "4mdB4i1CbZdKQwE9BhuvqiTLPVgaqqX5vuf2tD4Wit454oem8NqnLLF9cGGw6dWPf46AkX1zeCjAtbMPzgzgbhpB",
  "key19": "5dHCs5wjHp8t8aZ5FDBMp1b1dRbbXxnq92v1vN9ytuxwa1orw1sQx96uFVXBE5SSHX19Be5gUwmbHxUHHeuCV7vi",
  "key20": "C3pKFXoWMXAKjz4PHccwKDtkrY31JzThKhFBj6uv37nvFri4U2RuRmKmUdF7jqiTZC3aoaGfRkPneegHYxgZFs4",
  "key21": "3cGSNfG4jEMk45k3JRTg8mpuzR2aUdu4Q5eyM1Fzq69h7WF1n1YF5WLx64cAqSKGaq5Hkwe7ZnGwQidNgBWQ73E",
  "key22": "5VQvyf1QU29ime8C5smgspNei2Su7TisGD2bizVCSWvwyB7N43P9Q2fWZS7ZKaeXcsAxP7TgDL88dy8S5BFeCqS9",
  "key23": "44enfxJjrqugJiq4ZDbRfLDhrr2v7yvbtPn2hbdejfEzAL79SrCQXjPsPokezqKU2BHX4JzqCoY2CuEVx4djkkbd",
  "key24": "42GhiYHnoPAheeVdbShkn46hepHGrRBGhKe1JT2A3hbfN3L5eiJS3f6KHf9uTHRg2r8vGd9UxcNK5LzrTqDT1TSF",
  "key25": "4LnSgJP6x7wr3kszYoAzKaqQqq4HUCkREemEuKDYMJSi3stSvke7EEsP99H8h81GoNEqcKnuzwfZhvdAUmEpV1gA",
  "key26": "4MU6NNdTtvZ5btTUZedHQXWFFgeAoJ51RYSRcavLwe7qZimbPTBhmx9cqJhLy5dRd94CfFSJ189AQg5RdQgfkZ84",
  "key27": "3eCknN5xBAqqAUMk3uVxeYAQTqdDh8tZt3qyYbkq8TPvDiED5fH28pdGZ2vnEbbhRQMH6E9tDazkRXuUW81AHE4J",
  "key28": "3u62otwovQJ4466WxHSnuHfQ6G1m4cxcS7jzhyKQxrFpjYZXsxiCrnFn2J6JNABF1ko7fQEB9apBFhoCsZgQVZCG",
  "key29": "3CrpLjK1KyzduSUuR459PU7uh1XyD8B9TncasJRtF3fJjxZJ8jZhRV75LDT8T6T3Hyk9n2hjNM3uTFP1T7kWpRRT",
  "key30": "2VkMKuJVmM5qwLbuCnYY1eDLRRsNWHCKjaTgapT4pSTWrXCFyZ71msugjA64CKHHSoVFaN6PCfnNcYGiW8pSghUM",
  "key31": "5c7LXhC54GCpt59uwmihT1RPmXCo8LcYybRnNZTLnWLx4stSA2u3dJo6EGaot7uwx6XJ2ZxiM8Lv61FcbSTf62T9",
  "key32": "4WiEsNJ7YECEm4RPJigzFsAacsuDabeA4K2SvLdbU1ZXfgg1X7p32dL9P4W8w7yKwVkBF6fYJUB4AUmYqCQHfgL6",
  "key33": "26cXjVpo7fXURFLq1w3Trvk1DiMmkxuP17WbhpMEfa47DoHTkuCVd69aiwdC9YFs62qvhGmdd7ZNLRqw2LLCLmtx",
  "key34": "5ehuBA2FUju6ubmKjvZRJf77i6vhFsGdFBQ1pFAVWh4aJifP923yGio4UkUUx1Fvg4gYP4ySLfDKMkC5QaEtpMnR",
  "key35": "2kt3RUAGeWngXkmDj9X4rYVmnLU7mnU3rSSomFi662MFQWtQnmRRfVaXRMp44inCoCCE5yowiTkWa5oWiCd8LvBg",
  "key36": "44x4rhssrcWWXwhay1VHixDQqTDbfYThQ1C6dSY2ZQ7o7DnXXvU4a3ZM2dad44sUt54wfYfPo7NjfPKSEv69dvvk",
  "key37": "4ZsmyUWcGGW1HsdnRMdHQfnta9j7mLfycb39akzFUuwv8CvPHieeLVcSK7WpcAf8LiDPjD26j1a21DkVCx3xkQ4Q",
  "key38": "HqisDgQR5NAXteoWP8MyYynuqyDmH4JKph2fa4r4RmoYZbq9hjFMuHZSCXg4hbH3N997v3hJ4eLnt9whKdGArEd",
  "key39": "2EUPFjwuNj1y2hVGAuE1qNYyKR3r2RRvxZYvadp7CwBdEKbzpNwiiiAJ3zVn9qw46iWfbXGstdKzcPoY9dzXRkeD",
  "key40": "3w1hqFCueq4z3vMJaUKi2pisPfN68z437U9VDH3Eu8sXn54MexkfnwA36DppfXK1j6UkGWv4FB2KSEapv6EmT75S",
  "key41": "2gbgdU64b62AaAD3naf6fWU3dTLecx9kgCG7YTfDwmMP944nYQUkAdb99WqHU4CH6qz3ch315baaJGCp3JTX1EiX",
  "key42": "2URsC7EEUbDS3h1ExmwKEbpjn1ubY6uBipkqzX5rr4XmpMNTMSxsrFes5DVzKWsfuDa8pXZzvF2M1H9QnJDkfNoy",
  "key43": "3PhyxJ52hXWJV1cJWBdHM9N1hyhgVmXqKMJQZd1RPzch7SbgZHxnqX83sDaC5vgEHjbRpu6kqzjEGTTuY1zhWder",
  "key44": "3G1VyJbUTLViNuYrXKJdFZtntSK8Ri7UzgntKRpcyE4un7pfTEsasEMhrdwurznZwJ9Mqqspz397HxLPpMtCzkgq"
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
