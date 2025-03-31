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
    "2rr1PQhGRbV2ewucHeFjSHJCnmay7eWmDoyXBjhov6xkWfgdWrxeXrzRx1nfDDggmpjok5RLzotkCpULzs3rGh1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9UiXpGYmYGHPvKVLGbWgNrkcArwrM2aCB5roUXe1ZSNG7Utg1RkNmx3EtNZHeNpJ3FUBELjEKN969gPvKpMCif",
  "key1": "3hhxdfAcMVT2kCxWzg1fufK1ZYYGFr4Z6Mq12dKxSddw3BXBYhuRhdEVvoppkTSHeVMQeG7SjVijzzXTqPQHCwZX",
  "key2": "2PgBPfDAhMvH9yZnu97e5VhMu2Y7VWDr3qDwxo6Wk3yBpfurL5YrSBFykdkJ6LckbGit53bPjbhdkkaEjWPdawPV",
  "key3": "3FAeYeaaedZEzP8vktn3GJd5nqDAt1KzLixqSoAJ1QXStZmTFdamvmoUquGKZ85YggJav5p3UgRRShcRSzv927iv",
  "key4": "3tGxaaoT61DgqcdSto1zkGYHHJ6FRNiJJuLHYoZjvuoi5vSUrXrYbwWMnrj3wy9bv3w4cyBt9EnxmrdVpNh1rNKE",
  "key5": "3TFwLK7F5N7wY1RGm8N8V1EHGdosc2Ye3K163EzCiTcnasN1dQaG29biG6viP5WpXAHwhDioy4CmS5yAyVfrUpaA",
  "key6": "5Ssj3kdgWRhzCSnaRwEaVR8BD8b2t7Q3myZydrzuKG224mDaY7pWnNzgSosRDYDRQV5GwcxxQoo28MCgLR5kkvgX",
  "key7": "4wWANGJqxWcZ4oTJHmBmHxGBa4eiZVCL63LMnRAZorMfJNQFaRt1oJQMtoFE9cUDwSLTYTcxc2yYfU9HHmxJgdJ7",
  "key8": "59vWBoMPZmASr97XuLc732D5hqYwLfEGc79SaoNWAtkoVwkuPPpobpr5zGeHj6xEkXLkXfz3BWzhoAsktqU3kyxE",
  "key9": "4mHa1nu1YVJfwTirqC9ZSiox7BUysNQRzh415RKwYVir3aHbytmqVFREq34kvZKv4Rf98LU6Da6Nja7RPWjdhui2",
  "key10": "2h6wxSU8gjKtCeKVRWiveLwppws75i286uQpBYrvArWpHBxGV5QSzBA5RVtYjGzspufCkbRkWdoX6HfFpZFkvfpt",
  "key11": "5NTL92VD2Nt3xaz4wAmzjphTwiaubNBW8EExJaLSdToxMSX6u8Gp2tYPC1W7gNvhexx6d5MGCfVfNg5qRneqAddV",
  "key12": "56auBou5y2svscoZyDqPwTqgnXHPjsCHM15Cz1DHTV6ER5GqikN2DDMdDhCLWtHazuv2QHdRdWhQg1LkBUw5gVRw",
  "key13": "9JPC9oFoEwJTqCc3gKXanT4ZvMk5GuLw2RpXTiGCNTxqY2Q7cnhm1SEJyWRXfnkY8PjGyubf9TJyKuomh1ASMJR",
  "key14": "aXuRrh1Ts32nnddxXudSPmAXTr2vFzJJFviVy5kkciDcT1crmJxfeykfVnMVyFwxLN996eDCfSPbXNQ51aQjJtF",
  "key15": "hnVaZELqxVzWamszaGqs4tdqhEAmEmsFME35MybDkoY2ThgRJ77CaEF7pTmuJaZCVBknT1HCgrW5gYoeobMgigf",
  "key16": "4Z7fz9ZhMHNSRnVuAXAMqX9JUectgknSqT5w5TCRzWxwea9MfRszLa76vUYKbq75mQEemna9HaqsL3rtSjrbVmPk",
  "key17": "39fMd9tmL1bxno8YjTAz3yAQA65U2CqfMCCxGG8w8GrVN28Jb8R5GZGWCh2hSFLTvzr1AN2ZtDWodCHTCY2KA2cD",
  "key18": "4GJahHX5n5BLZPCZMMURtyRzKjsySwckzbLXHuJqkDPwvM5KMgs13FBnxfRS9DH2WYmDKEbjGcaHuZrmxNjroDHv",
  "key19": "4KPYCKoCvDjXszNHqDchS6qnhMugCCPwMnM8z3nJmYvnCaQbV32y1RuLZTDboMM6P3QQeVAVeWT5hMTJHUMnYzKU",
  "key20": "3Coo9KSVTcjkUcvXzYhcv5SKd97dfLF2bcv2xnbNCSasqZXLoXFayzuxoG8MipYqD6SuRNPJPy3cV63cPhibPRDu",
  "key21": "QJ3z7R5Ez9oq9GJHN9HFr34ev7QFJcKXuJ9FCW5yNyCaaxeVj7HQoGEVWASj3JF9tHtsVAhSbrUFxHpTDy7v3W1",
  "key22": "2VduQybAiPr4redrVQFvzSYPvVDcErqYpKhh3LQ8cd8XePYpmdXJzmnWTtDhEDeG7i8AqLGXozoYr826wCVANmMn",
  "key23": "2C2HSecGagqwWzZwrsPke1yipUu17AGKgqSDwDpePZYi4939UqkQfSncEUqpYsu5nLFP2tDkhCmq5Y8d9hqMUNPQ",
  "key24": "59zd2iKhR71SmtRiRfZTFcdt1pcgun9kvBUB77QWESAyCGP398s43jZvwJu9PnCZHKMEXP8uFLHfMuMc49hwEXfb",
  "key25": "33Qwku5SjJDMQYUMEfEngurjKthMJFo13wNZWMYxVGjXPZMxgdEP8BFTVAx1taQyAiEqsFZaJCva6oi5zh9dDCyd",
  "key26": "5NUA5uMzMHzkQKBgaYMim1jhBj4LpWLueawAMYXNWfavzdzXveuAVRvS483ZgBFkU7M8sbpghLsRtMbyqc1NFr5Q",
  "key27": "2oi5kWcatZf7Xyex97fziC5iQfazesJueCmibhr3BcsKnw7a9g8s4MeNFf1UrLsnnuhvBWrtejYk4XRSSBYzdG9m",
  "key28": "2Ahu5o1Rbu2HFiCCsMq65JBewU5UUM5FiMrrLZSAAM1L7DSRa7wxzBMAxHzAMqoqPfLYWg6wXdvuXRSWWTr3AjrG",
  "key29": "4aPYmaTaLpLmrWazMh5BjbJLTuDZ4UN6KQXrWDtEsUz5htPscJcCGvyEafRFZtYD3GMNjvhCxkps8B4gjfnKikZq",
  "key30": "4r9eWDh5qUPad2Ut5v7LnbaLwJowkT2uGtrAYJCewwXYR6WY1Xh9QexpDdbmG8Rp5CTW1M9boHQN3pRx4U4DJBp6",
  "key31": "5TmxqQmS4orZzy5zikULqCNbsXnCAdwJ4sxbptqbjH5r726aXGaTwaf4nfU353RaBcBds4EiCjrGriX98CqjceVE",
  "key32": "af37Qg6s3tQTXKKqKEkyfTqryvXgcWUP92Y5VZxqhsHGKBFaj8b8c6XoAcwALggcDZZtFbRF7szCfSo3d7pRToD",
  "key33": "H1oeJoQU2AJpxUPoi1gVLJhXu5gitUde2VTV5saUBeWBigaCnG6b2F4E3RN7Qbt4oohQdzJK3jSZZ6wJcYRKVUn",
  "key34": "5Vgcsff5tpYo1wxZm2yRpvyhcEKCrtJ41Sp7qaX8NScH3hibqoZC3yVLWUkD9Q4u1bxgFe2o4aEup5c96z8JzFLm",
  "key35": "5tTAHne21PjfYBFKqK21fwAgSX8b5E4AAqanmzNB8WHZoTBx4tTPSXi5uHgWSYSbv8hhNBGakJia9zUepVzaKTc6",
  "key36": "5fQSspkhgkLJMvVtUvGernS8xoiPHPgJjKsBRGqmufGSFbg4vas47dpT18ekQKbjUigU2Vfi7L5tcJhbmfpkxepf",
  "key37": "4h8qsnSo3gzmVmvNk3PESqpfrZhfYvEfuDiqRRrni3xySaFDhtBPSgdcm7ywCi6fqgjQoTQpf6EDngxp6Q4h9j8U",
  "key38": "5StUk42gFAosXQjyUTezizktTGJQwfQARQiupdaUaqNSbh8BssVe8Yix4MWp6TUDQ3mYSMXUkLL9WdCMXZrv61eH",
  "key39": "2qH9hsRUhdRUUcrLejBne9gLFLhc4QPdDH2GE87RHvNBmnguTcRzjSKboHRUohwi5qd1E7pXEvxMALFCQUow9EYw",
  "key40": "2FVo9RfztMgkAyhWu1THW6eRGi2BSoGTmc7cLGZn14xGXGkAU1ugdQ7LCfHX6Q8j4h41qvs8HRWQeR723iqQdagf",
  "key41": "2K174aK82Yqo829BFWU8iospA2PCKK94sAMqCLq1mpngXBzhsRkQTr1bKHtADagk6sfdF7Aqv39RoSdKCyDVzGWR",
  "key42": "4F4Lt99QfFLLQxNWWaSkiAgDcsNsBai8TFiKkqHRoQxDgTfDQWGErFBTfPi4CfdaMr6G9PeoSmUFcVdtRAbJJhJz",
  "key43": "ZhDD5Q4VmiyzoEMPCCmAvBPgpSrW9UXnf8zK37x994QcobjFugFkWxf3s8Xh1Xq1GdWLEThwAzVDW8x8utaqS2v"
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
