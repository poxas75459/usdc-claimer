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
    "47KxikLRCa7UNBTUsqLZawH3RciJroaX9usUb6yHhyYp3wHNad5GpLMQsbADd8ZuYm1UdwNoitT89KPXt5SmJcMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w986tJ9yE8SbgSLK6PLZk3x4rAQ6MKCEPeQngArbUn4bZxKndGHYcAuexLSMn1mpEjRJ9YSEewepPKHZmLoobab",
  "key1": "2SEdZEfS4EUfq4bGGpn2fbjXx8uXBVf43beJJFhjrUG8d4ivcfMwEaQQfWHDGVngXAm3mJT9sNGPZwoFBuuTkBSH",
  "key2": "2Ks3twUTPZqNN5LNAz8rkrbBdq7SRBWAHjRnQyHsWtMmzkuWniV8RmsJTusY7QptfsbPRohPFM61xDR79Upsqski",
  "key3": "AuiNZTxnmGg42yGMwT7DEbVpJMqsXuz68G2zMgk2LJXYKAXr1NUgpH2VweQU51m1A36S2VxtRDk9wWksjMzCfFs",
  "key4": "63pH57qy28ZvSekWk32gjN91LwtWfE22fc8rwFnXfKqKo3FGf6VHRparP6k1sje7pUuvJJMU4erZ37QZbc3yNx9x",
  "key5": "4KCdaG2xwoJiNAqyfUZ4hGxQdNRaQdk35Lugp7jVi4inLUDFpBRTkrgNerxQjDfbYgLHvPMcS8cJpurgJhkpAv22",
  "key6": "5E81ovmiSGWRqemsXoZNvPnkoygD5sTxFb4vTgwGg9XCnv8AWEL5o2L9nzNVeKQvvyPUm6KuzAWkNLw7T2BCTDqz",
  "key7": "2cgoACWSFrBDn1UddDbgiRmQapgFdeNg4JeArvwE7UxajfU6e4arpwNa1qoprLD6K596YN3U9Td91Wa8JVDHehU6",
  "key8": "QcnZr4HiuabZnkHWW321ixe3BxEbvqpYwFNpxErmSy3QmeCW6RWcj2DkRa8iWXMWURW2wyKcyZCeW1zBvdL1YVB",
  "key9": "jTvyFHdLDbm5j5KdThsaqbXJnS6qECzGQg1zpMNmkheY1r3aYMqcfs7MdTMnNUmpumuL8Q6cC69jtCgQgjSDnsM",
  "key10": "4cu1QQQhT6qCPwTCQwqUHmZ7EWupN7ayE1dzYUqnznwP1RhUcMyPH1dgxqtSuNbMhGi6tgNXaAaBYGGHxBj6vn6V",
  "key11": "2tfyvf3YbNbBmhKuNmNAcig9BKgUe7kpEVLYZx1HinBtDCR76tQKbnNLyK6dkHexYBUWG4bAvN1KeGCzKhHq2udp",
  "key12": "kUULP12JPYkbmMhZn27n7cMW1JCxvzNCU3NwknyHbN52Wm47TrEtmVQGo4nXHRH1cu1fHHDmWvMiwKuLSWZkQXd",
  "key13": "3zFtD5h5FqSddW1LmJ4Q6ixazGLStMXz65Qgp5b4CaPVDUBptC1VpLB74RtmD4PSCya2FtxU2zz49XHFH2T49yMx",
  "key14": "5A9UdGUh9cbLUshqPU43PjEoRiddrQ8q9GynqzfP2o8gCT5Pk1FcTfdHH6EWmFmbSZoHwNy4SXqQMNf5Ah112Lv9",
  "key15": "2tH8ba6b27nwCSTQXV4mtG5sN5oMjmPpbRsykk2e91BwQ58TUAZJeRn9y25h98cJBaTwMTVyAzT3ZG4uVBKMLXrV",
  "key16": "4wZpYMdVUSUDnWYnFSePf4Hr3ohqaHfo5L47Z3J3fwYMeQhjMSUsJo8No3EowiTCyJM2wLu9i95y9iph67d533pv",
  "key17": "581EowmYKsVHt165tYaRCNbssiidQPkm4Y8TVGLrn65BhFivCrJp2t9gx56a8o17XEf2QqxeVf2ZGGT5dBk5gNZP",
  "key18": "4oVj1PnvPiFs1uzRVseBJTkfUr8Qwo2BLJXVFJM6xXuh8BdX9p83mF9PKvR5AdHmfStuowsf4YVnFyAnYyAMiQDf",
  "key19": "35SrZL8uPHeoLZmayDJFPH4AHnQJQnbKporcSYdgGEqT6sYuepUNfWqZdt6m4NdeUKCee6ie13UNVGgBJrkdd4qh",
  "key20": "62aMEFdPgmuyZMy2LUXHK5gN1Fu9iGk9LpcoRAP6SkTrGfWxDXd9sG1Ke4azj16aR6kyiJbmp3a6DAqtvRaCfis7",
  "key21": "4oR1RnCbRbzbxYybxMm3JNFpZ9r79qmDofhaXpKXVXoP2ZLSvvdABveCY67ec4vPyVMZ6qTHh6EsEbKQg9GGwrsQ",
  "key22": "24dLzGK1PtDQV2DsP5mAQSjCuzTptLuBzBjbYaUtWo527rMPMxwv2VDtZvpP3BssYFcMyuhWZt6wbbiLbuuZYGh6",
  "key23": "4sHULZQ37F3r4whn7qzS1tC5j15L1z4y3ey7zEfdijxC5hsHR1wGMpfipLUQ2c9TVByXRrt2V5wi3Hg7K7h9wE29",
  "key24": "2dp2v1c3u16AcZ2CF7gHqJgZJknSkmBfgYtS7GoVk6VeMYo1uNTSBkfFGF6Hr537C4XanmErc8eDiMhnxSfnj9qM",
  "key25": "39uL4CfdaVVe56KxBsrgLNZXL4bCbivrLNeA7T72xcA9Adr5BoUWZhuHhDe4hp7y2YzS7gh4QA5vSe5AShv8sY4y",
  "key26": "32tcgU82eB7pj9PjjTe4oxsfuCzS479hWk3G24QvbApzbMMGfYsE5j27nL8C6kQ4dbpwajaVd1KFcbaMsFjXtYRg",
  "key27": "ecPD6esp4FjjJB7Wwtnb2djJshqRpXzbj6FhytcZRyHryo4EyNNBbkgXEkCGikSeKTkJ29dF1B2K9mLPdomGmT6",
  "key28": "msNnqicBcgY3rdNJAj6cAx7K1ok25RCVRAX4komnat58D1f6XoGKz88o8kzzjrpkCMcrquxHBetQdZistLjTWkv",
  "key29": "669KkKPq4wsiCXnmyvNiFq1B4uMLpNi334aKYw7UcL2pAKn8zbFTdXPTsacjsqRXTynStFVpGoMfQwMyVY9dbs4J",
  "key30": "g4AZXdYeEZm1B2cz3mBmGCXjb9VrWi42u6V4irQzCLaJ4NdoaWA2mr9PLhMUibCi9ZxQAkbMnvSFMBU6Q7SrQkm",
  "key31": "3GV964YqzMvzCha1ptfVMBdUg2yZuo997UeopoM4kNSSdndN1337VUmaL73nmSSRuccPT5UAH4KJ7FLkciWsoCgc",
  "key32": "5n1p2C1by87w3pSsDr6144U9j9m5KxB3QQH9jyEKfrb4Rfujcmjufcno2EKB3fuFVBDbppYGrZCzFqZ4A3CuPwcD",
  "key33": "2TijXogP6y2ZTVQXAuUJfTZS8UJEbxDRuxD919tq9vJLRfhnneotAG9jySBvbn9gS3QAZZ9WLKqkf8R4MSmy7JH8",
  "key34": "5maMmZhgGM8SL4mmEf21VDrh2U6FM4EMGv2r1X6cW3WyVkmVxT9us65J122uxFrpi62gYVkP4B7Zgq3rJ3QpRWXE",
  "key35": "4vUHChWK3JHS5X3bBZTPCWmr7gb4jccwe6SoFsMYSVHv4yKzycFnfW5sjBnWmVbXWLeew1gnd6RKMucpF4vmM72",
  "key36": "34DSjVWfE8ZoCkCuUeVVZ8BJ2Vn7sndqCK8hj3RcuWVfyjBGWC7vQ7KkgbgyAZAREETu6Vnsb75o4RkGqT3Bv2bb",
  "key37": "2xtagYpxxUfWLnk3416TPKRUPEWUtV1mcTejgfzSFcz8TSw1qZUoXQaJ1gE3iwvcq22fTxgvU7gVGwGt1o8vopPE",
  "key38": "3rVDmijvqmidiD63McWtThY2ZMF4SPC2H12toE6RJrXGQv5fka1dqeiNj6RYbq63DmgJisAJugdmW7Ma1gknrFPR",
  "key39": "2JBQBFdfrZYghfst2vrDYSKmMdq3DQfaxUZTKXAaFHPJbXqiWhqaHXGKfRxbBVNNfSKz1bcUVK8mW5j9pdCDiVCK",
  "key40": "4imwBawsvsP3Tfn6rMQHNhi7JcdHUX1qvMtyH53Pe54WnJR36uQFXJcdoeReBUer5QJ2veE7J2GxnoZCT4GDkdui"
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
