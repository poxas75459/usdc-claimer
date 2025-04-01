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
    "5SePKP1seVTQbaC4p13wxhEFbzMDCnnUU7S92Fuqzg6XCCgNByWrAPzADy2VDVzSfEWr1hAPjGiRmXRYXgSNLTEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i5SC89RKNoHrL14oqNid43NuDDBjZBCaRNchoT2sqGXsoGg259hhdE2v6SvY5SqLQy1qKXJRyv6TXumwfCZTneS",
  "key1": "4fxFQivnHb532vGnCwHQjfzV8bKwNY2JQZtir4YKQkceZqp3SVqmfmEUwwNoApP69BRCdTT53N77fpdGHYKFg8DG",
  "key2": "4bAfjyaDRUkXxeD9uGFGa8u5pcArAoKhywzBYhXAijHvyTFhMio27uAxGkzXawXZpk6znY5hT1TsV2tg9sC3oTWg",
  "key3": "2GQv7UrC48We1kFN5MFCG2X3Tt4Q95umDaFFniHGF7w1S43JkPnnRXq3ZnnLukVJh2Hz1BGB8cUxWesNcXfFPMVY",
  "key4": "4Zo2h29xPPFZwQ4HLebXejDReXzMcTD8kSUfnS2BiEATibAjVwyx1XRQw2RGPKfcju8C39vozpE8LiTJyWs8JQxn",
  "key5": "5g3pfNCeLVPgtztG1ofBWgwRCvVp8z6kZGAZ26zntn3USw8nMHTkcdtYnh2SZ6rSMJU34vH9VobVToFQfZuiLAsP",
  "key6": "2YZSs15vAJaZuRp5qdGRD2uYT7Vbx7f8iBzHcFomph6cPsaiB3YnnfJj4g6id8TmpwjovN8itzmMoGKymPNoUxBK",
  "key7": "29SRCxr9sBytv4xCoivpJQ2Vjn1VhbMjqccRLw7d7piasV8xem6UGuZqzfYnhta7QnW6RVhU2GHDgFMLDFNrwUXY",
  "key8": "3YPoHnXXKYRikc3danRxYsDcANP4UmEMJWq4QRLBGTGfMXxbAUmQPhwTVsagRfFFiyngNMPyGmsHqNZj5VpJXwcd",
  "key9": "4zjRttQDmK14PBcoGdWg3RMfxFT6mXwTuR5iuRHQV8Q2Aq7K2GoZzxBrKqPCJbc1LtqN2AxkYci3weGR1o6pcQHX",
  "key10": "5TVwKpBM722DjnpNts8vB5XAgLZr6T5EhdWLXDGYZ1t5EfHcLqZDWdC5mJNzYYp55AhmRXzo2jvWrmxJK5jcSh8q",
  "key11": "D3hH34zrsWweVGrAbHighqzVB4mGHUhQJVTgr46CqwN5YDUavCwXcSGvqiArXmT4jVcmSuCMyrW3N1qFquB9NJD",
  "key12": "2cmKkChLsgEjM2XYRyV8Jr54WS7dVqDfYoGaxbXPaSHvk2X9CLs7h8mwRuhGBmHopi7Gw3fTgWQiS9TVdMYxHC63",
  "key13": "5vBye8qRzTqLwaK58jC2Wepyt59UWifQ7NwyJtXzwgghSJePiA4u4nYWiiNNLDkQFg9uevd1QTq5hoYkWKLvyFGM",
  "key14": "5MazqDLe7PNAnNXBQnpSuUgUdmUswyGs2eXGSDH3nuHbbxrurdZfNAzZRgxntbh7nxhqKXL8TF5Rj8WScMcNfRWf",
  "key15": "2wCa2THv5A8sNoExFnw4u3pQFSDB5Bu5CHiTDYmdCj8HTSnuuUB973pT5r7zSQC6gwFZ5ojAPpc39BQDST538MxC",
  "key16": "38z8GrQpegZQPyUKRpuNia4ZdY3bAm3SN5edAwKKjD9CAVMTwTZ1EoFwvkLtfiieN9Tz98q8jowFyDkhQQtVViTp",
  "key17": "65PbDUKsqMwGnfepqXQ2V1Dieu8QZc25rrNtacrM2qXh4La6hoiKjcrA8Zt2osQdeK1G2oF5dsMpCATGe44Ebd1L",
  "key18": "5EexCZxxcNoQbLTmgDcmokCvtEJCTbrTr6Rsd3UsubUjMcjuar3BesNhXpTXyftDYN2A6abGuGF9EJQmS4yCjvns",
  "key19": "5xzsGR7GCuf2MDHkQW34JttbSbQPBnexwT8BRtm8ayj1ANN6xxYXZ8hDAbPk2CmfKtQ91XJ3ALBZA7kkTovPAxCb",
  "key20": "phTrHgQupafzt5Q1LAKgqA1gWsgBFAJWvYaNcpzGYodSrxyCXAJsiG5LhLLpoYshiZkQw3Wo9k6YQqXeheiubRE",
  "key21": "467PBcVhN7AYG8DTkTSg4j3ifpzHJJX2A1ma19akKSY9fNFtBCwF1bD8MostmPwZc8E6FEPvn43Mpd7NiZKmx8D3",
  "key22": "BiwaCouFM4RNRsnPH7TuT65D2UT1n3BTTap1XTWq35qhcsD7tdBkU4NMBVs2kfYLUXVu2vtRXb7hUVyevJmP6Z5",
  "key23": "5J2GWw4YR1Y72VjarupHq5jHcMH5AhbpmrztQgLMLbJ2KnvC7KEsbxjfLbUz6wMU57Msv1EvufNbeaedfpdAf8WF",
  "key24": "4vSvU26WG95T7azzKBtEhrCskhBC67qKRT7afdyVggVneuHhUN5bCJephWjS4foQhk7sAaNZpFVgkqMKRkuzcPcD",
  "key25": "3FiJLjG5btASELm8GQvZ7XuzPpekEgsoPGWguWqWNZ2SnwARbampiEjtpazd6BuKvZfyoVXoemWbBzHC2apxE8b8",
  "key26": "ykZsQTEigtQRUAadjYmDixvLFEXrgadcRp2WFUtQ5z6wi5UnCvJr8bU1CQ7FEr58L4URpjdRfE6cRq45mDP197n",
  "key27": "22bMfYZbqDebxY3edtDEfi7NDfS98R1aU7PyQUUuWMpom9vriXrTcs7Srupcn5jsv74Thz1Cgr98WakRam64RDGs",
  "key28": "54BNaK1PxoDRXxUiHBTHrNrWP2pbxQ2mjmS8Zh3CFhJTmvTbRLc4znMhYN8GDYxTUVSjk2VNbBhWGyDq87KdLWnH",
  "key29": "4E2C7UFJKXwidHqvLLCtsqASYFCo8PWA7unT34qqvATUWnjnUv5Az5bYLZNNYzcuTZdah3y6Q9CeEMmp21y6f73K",
  "key30": "2yR6jBFhqjVPciTYVedP1eNPtkrUsgPCEzjKZBeiJAGPAm75g5oZJf7YwyjAo2WyPP5Q1iRnuPCKS71LLPBQLf7Z",
  "key31": "3jREFepQXHVj4X68B1HQr2dx7fMr61f1cG3pe6YuMdDqonb35wBZ5YkWF2WXLWiyQkJR1kn2ymY3upH97orHUcTM",
  "key32": "3fTfru5pNwrZ2GWuk92rYvZHhsMEiScpbsSJitKBQ4NvVaMPUcJooWmkzZ5krGMReg9jU9yG3Egoa7ptCxSLAaYX",
  "key33": "5Kft5vF7tPY3ZjdWkH1eQ7jQCzTa5Z4DzWcNxYoo7VmCDC5dYi8ZGeGva25JvbhW8XhManZKaSM58UHE3oUEuKJq",
  "key34": "5fb6DhJ96fXS3Rwp9eF1H1KioBbvfi3Mmu8d9J8Ze2G71C4TBsympF4d9F5eR1XGRBSqQzpXhnKbbCwc53E8a8w8",
  "key35": "hggxyRkr7nLQQxmQB5P3gP87amCc6by9Lm44JwsSKip4yQsTXdedZBH6KZNcW4CLJvTk83N5dQv5QGEvECqfXVW",
  "key36": "4Bj7HcDGFSSabKHsJTBDFzjuu9wSfJYv3EJpGMF6xaZvK3No9vXdvnnwBrFRMtzNG2N4QcqVb2EJwGRWHNNeoQ2A",
  "key37": "jjK7Mp59YAHedgcrHcebqG2jZyLeThTPTji5GJHQEuYwSFZHFmXeWPi1cJdLQrbyBzUnRmcg55mrqWgevpmnbvk",
  "key38": "3VN5YkyT4RmRrLEMLeSdmmaF9ChCGzh4FwqhdWCdnDicmsWWLdCLr9Woh2rcvbshbtPn3ZM4MiyVZswzRjdqURVu",
  "key39": "4MStuJKxCqQbdaCaH8J4JgkMrH2DjfaNKujuT5tutLmBqyShbDLAkdL2CnhHR8GcLFLXFrYUPZFLkm5RezfUFAWg",
  "key40": "2FWCv5XBN5ZM9e88fBfG8ztcfm8L8fxruFgB794a68dqNM9NuUxcyGK6YnrniCmABkUxC7nseQ25xCk5Y7Kxx5zj",
  "key41": "5J3tHU2yDjmVVZT2ne9LuRR7eLecmCo6wr6BtzTBhjyavdubRFyb2ZySuQyiXbaN3vzAH2W3PKy1ddXVYzAsBk3i",
  "key42": "2S9gK4XQC2bK9Jkzkm4VpdSAiA8BdJKKfBvpYk55xo3NPHNBgzNJrWRJdjwLfK1iSyuXgsg8BLwLrH2UYjyBZrXY",
  "key43": "3CoEozoQLWQhm5ud9kLcsFHo8XwBG9sJK5JjVajutqGFjqprdSPqR8Gcywob7tgQkKwvk1ngEUL4giF5C1pN62W9",
  "key44": "2uLMJRqsxdDuKA9eXRzxTXGUYMfRuG2DYULXmSb13k9KPYruHPvFShmQD29yeV6fycvb5q4ziazDEmJHPgNHvBMn",
  "key45": "2hiZd1bs6WYTJjfr2gwdspLndgbMP3Pp4paj7ssg1pKrY8dyKFWEiZ7J841qc3v7Y5Jq9SQxNRooGCfnKTMHR6Yv",
  "key46": "3SBicGw2rJvc4YDcNaxJV6hRrdZJVNncqZzkUAyRAw6kckYxrLAMnveU6g9cEiNxk5x4vFgeF6DEjKfxq8vEMUhE"
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
