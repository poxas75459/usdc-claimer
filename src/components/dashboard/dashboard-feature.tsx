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
    "4ucBfzDFeEymEMk2FELFWhXADtRLy4jAqnwDVuTumkugeTqDMJpx8XuLpeFGGgaxvttYWVUsmLiNjNtbCw9Xr5Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cYrpbStd77hBxTJybPDfu7ssnBfpcjssCXnvMFwYKgsrWa52Y1zmF1Pr2G4YxXwZa5u2T8PeeQqJUbCCrZXZEp",
  "key1": "cwggWwHrA1tZ4bGRjoQYnzq15ADfKwwdcP5x3RRmnMyBrHRsAaBKxWQy5hFQDeBHXkG8UrUTAKEvPwNyzfEjY9y",
  "key2": "4RLg7ZBWNd2GZYTNHcjUjE5KSREUpkZufz4MBkC2diWfjqXzNn6Zr5hPjz2nunQasizSyTUHV748A3markLsfxgt",
  "key3": "4WXwk4qqqa6Nf5jbbzwHxyLqBCWmqqQTzT9QNUp8uUiNHRozRasGvLv2dNjdRBU4Pnta9t2FNhdQJTaH5qfEQ9gZ",
  "key4": "64vSPoh5TUwWmPqmRSvXymxjAKuxHfBkJdbgUKmeddYq2nbu7GNDdHZenAEG2nF3c1HKFViNw1CPm3zRvVyZe5KM",
  "key5": "B6X1bi7QtwX3ZW1WYeeaDR2XEQYHoRnAjZEHyuXSBdTdXo2YzH1xTYXg3PmFaeRKsSsZodrrGdyWh9kRZi5iXzi",
  "key6": "6SdWtTL1Cjwhoznv1sRuptDsVvozxfMEnncudr3xb4kFibuWVzWherMLtAtPeArpzTBtU1CNxHRAtd4GGsSyxC9",
  "key7": "5Hhga7yq94HmE9cSZkJ8nGPy6aWatNJv87qbHP3KfLRxLSRniCuWtEiDDRQovx9hLDYgAubW9tQ6BNJ5VAzskpvi",
  "key8": "3ZZKZ82o3bYnW8U5U7PX28WDGYtCyFAhAbttsEPjVPxSDhhQoNaSztcoWwx4dhbEJvBURDDSL48vvRrGSWTFoxC6",
  "key9": "4zfTbkZAR5n42nJuchhz4AFsy6JLfSf3FD2AjhmCWG3sEExuSxtNNmD7G5KSJJjBdbBQzymH9bCvCA9M88p2PLic",
  "key10": "2anPS3ZmiFLUAQ786EdNXEhsW8NKarvDQtpjtZV8ScgXEAJbGSLrXQyNo9WRayfoqMq7hnxV5BhunGH5LTSVfjV6",
  "key11": "pgQKKWPo2StaZCGSjeTg2CGbcK5ymBSSPviXJpBL6AaC6eXCrekKzxXqGmxMEj4dMpD54oPZyvrW7SoJmeMc5m8",
  "key12": "4Q4Yaub6aXcCmu9VnaVu7eambkCmV4ywWMULqnUMiEArMaDYdtJkpDuEgNrgu8mVWnRzrfR3mVKL4idqUCdjyMF2",
  "key13": "2ofjwhA49Z6UUzRrtDSGhCydRLDvmpbM2jMmJjaCwWYCivycpo4zMBLY4yfUtXY3UoiBZGhJoRS91Bv453KdWr8N",
  "key14": "48aQFXfWJMYXdM4xULasGThQonhVyRfc3q2sGQRpVV945tikoDio5SfY1igqu8u7U3ek35FwXk1dfsg9zg9Kz6gH",
  "key15": "4yg7vyNhFh6ei7rYmN1MqYw7J4G2bJtQenDuBjpyvXdRS32eQPWSTFZrXUS1octmDTAH1MFkWgJBGX3wUcX3gG6x",
  "key16": "3NHrYLoxGdauPxa71J3W7LcYVxsqHayFikB47bsJRcL9WUGsP2KocKUPysH2Vn6mALbXd3twJD86i7jB7NtmLm77",
  "key17": "4ioaDoj9j6VeWtzNTcc8BfUTqGEiJh4hkYE6F55sS6nLKVKGr8LLFtsztDfh6YV5tFm1RqYWGTVQQBGtsEQDrrBh",
  "key18": "5BP9aagmxaeNAfFZKXZxhBhwUfMdRsDKAhKcxM3p5vckgZ6X7yY4rwnVL7rxAcKZWRWtYb4ceTEwUsVy2Fhbrwt1",
  "key19": "2S6uqg2JFV6rpqwgoXpkJPqgG3UZSjVD7QaVhfWd2TPVkGSjwAazhuh5sWSguJphX1Yx2z6B3RoF84zNDzqPJVRt",
  "key20": "5MH4Uedh4aw28gWWStrNBMQJJr54LudA2UE33GS4jE6oWmQ8u6AqpyaNrJQpJuH2odcUYMhQmjrj2uuQgpNzdxho",
  "key21": "2py2qZJkqUi12tU3won3WcjxXXnT43nEyiDJbDDhKxXxiYjg3qjY4vCYyNqVuTdzqfDqDygR9azzc8jrrAhohtGC",
  "key22": "5DsZxwXc8jARjDT43gGHX1RTE7zBdfZ8HFvWGSnnV4B3VESLvWFtoi7VR4QmXCTD2ofQM7sADqdBWHhAeNm9f1Cu",
  "key23": "5RVxdqgQh5prEznxhb2Wvdb58UVTrEDfWHEjHkmaCSPScYATSaPurb9pLKX93YKFhvzMJEHpen2vBw5SrdW9Ep88",
  "key24": "64u8cYVTjtEk4doEFEa6zZcHhm8VgajYnEL92r7zuGSF4pfjwLW4suNh2u3kTcmXuo8BDUtSFvmgXxRSfbxtiWZ2",
  "key25": "3gcZN4s7EEV3NUZgtv9HcWvuqWEX3nGjD2BqL1cVmNB8myRwuMEan5oDoQUoGLXfRT9dJEAqpQ45TsmEFkQLRgUE",
  "key26": "FFiRQZQWX38YXFxbJdSg8VzH6GQVfpAjpH4iEbbjPszVHaTvucirSdMPqDATp3bmhUsdj62fQiduCBcbce2Skp4",
  "key27": "4ZkEAuREoXLsdU4d4RNdhEx5vNVBjvYb77sBX9oLuwAmrxPZ4CBsbL9hC699zMFg9oxvEzz3Yhoa3EqFKUuSMPCC",
  "key28": "zQR7zBqd5KkxNjPgDysBTQ46DzohEpbq2dv28Eq3PJ7wD92KKpx6zfo3z3NcgrtFwdyQvLdzoN1abtTkuSRArdJ",
  "key29": "4oLjXQ2i1QR9SdQptphV17nRKEBgQwdZkJnmi5zzupVu8q4Bzieyhwrf12F8FZUpbzLPcrF9jgkmZb4sNs8sE1pz",
  "key30": "2CgpcLc2gpAGho7ZhYfnBEGFPmE2cChjMShnT9QUxLRyXHZqgaMjgedcQV16vYyBM8VKY6wVtWrfBsEVYDfgnEH9",
  "key31": "5kqMMrC8Bpfwj7GxHQnVcAGmYDDmYjrcsitubuUmsE2HoV1RMc88TGo8BFG3QycY2Ga2uDEZG161TUuesDxaSNTw"
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
