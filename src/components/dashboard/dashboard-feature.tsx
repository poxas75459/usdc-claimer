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
    "2kQgiYN4vKUeHVnAXJg4WJkQjShGk1ti3L5qTqtNMDzLRnfTtYHbVuCdrmMYpamTJjHYCXtiZKS5GWAs1mp2xUsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPSL2HiULyTHbu5t6FEQPvtzHTu1vAMZFMy918H8LHF5EVAewJxniHTugNQp8VPCHmpw72iZPzuyTGAbNLgPw5N",
  "key1": "4PqzPS9Xu3XaHUprxygmttXqWA5PZhVaQYSoKgqsSppqdczkDL2yJDCiUneWmtKc4f64uFxURqf5aHmio4NNLis8",
  "key2": "2voHiGriRM3jv6ysYfas72xHRq4XRPBuWDhFLSgzg6NYbzW59GwThk1t14WSzBzkR7arGU7zSFzMyvv5t2k12trK",
  "key3": "46K21W7Y3Sogn3W4QH1nL3GhbzVSA3fsPXzpB9D5Q39tYKUk8NPeYevy4SgQ5fRrQmnxm4CiuBSezYKemGuCfRxP",
  "key4": "5EKvxn8CEuMz31XYpFmrZEmMtHnbgMGMXHSiccyzxw1Sh1Ceni1Tw3ATzUeGS3pZp8jFC2vCe1Q9ThnMS4jEfpbH",
  "key5": "3FoCbV5QjZv21SAY6ZygRvreR3nzLCBVYPWJ1LTor4UZk5AyBQUuvdE9qYtVi2ZEepts5MPKfHB2ZtT1v2T7Lc4e",
  "key6": "2pMt3JcBRDoY4aDCxeHC6JL2P7N5dhhA7RDUHRE3y1cGGMP4BcBXa7dpG3bFTYxk34ETGM4MCBYh5DSU9sKMtePT",
  "key7": "5F8TPmeG2DVsgrzAZEU7y17wm1axeDec2nApRrsftU9jo3M9GUGjz9szPRBYeR6jvaKWQV4TbJfToxGfcHzcMvG1",
  "key8": "129Z8hNjXLmvoXBT6PH3mEpypchjWcXLyxVDZv2RboZArrEyFNsJPo1rFoCpbf9HJWiedjuDMx4hNTC5wACeDhZS",
  "key9": "5Yr79pBBpSDUS8AcjmLKuqwMT3yoMST9rzJpivtwAtZMzQA5Nv9cDnnnHHz6k4x5xbsVQUofseggHRp14ZqiLo2C",
  "key10": "2DCV4G5tbDR3DVKAfRsc9o3CbwueDTfab5aG5Lbw4KZK1kfiCh2LgXuEkroVBs11Mcwv1MsL7TgF9JVYWKgWW3oJ",
  "key11": "4X6Dx58DtQHkudkz7FpvkYs8HDQdtiaBKdvHQ4WTeyebq6JNBUW7TmmYuLsHENb4mrRotTQqmGCLpx5yshmcfk3g",
  "key12": "NTRkiquVNNiCjLiYARTSi8QENvVhAwp2cWbHyrfcm6aNz4gbRh9c5GuM3jruFgXNRtLuD6wEhBZwmja8BCyaGTG",
  "key13": "2JkThKjnVew8JgHv58Za9DLJHVAdUXTNfUhdxZQNXLk9d87cQ46nedTig3y3o6VnLdbJS1tL5GTJfACLvCWrmkyk",
  "key14": "MKvGN7t8X6ZbxURZEL1UMEDC4PFRNjbkqUK4nU6K7yf5Hpm1sGVm5hrPgzKhNC2U7UVkfm24a3Zr3P3NiyCFLMu",
  "key15": "5zwJovYm1rca86qspWvqWRqy7iAG8SVAN1U5c217fSKTBvsJd9w9JpTXfhd9VRV6gn5maR6cXbUsEK3fhS7poDEa",
  "key16": "2mmNdgiTYisax9Zmz6YvZwk6T53fVYQYeWJFsJa2HrnwiJnMpwo1DE9k7TKojajG2Sw3TJfNv7dp7jvijKJyb6dp",
  "key17": "3fnqhBtH31nkdEaT3MLUCadFm91F823bc3rLZKUSHG14BS3hK8RVXTU48og3sXB4yJoqmK6PVzJNJUx9CwYRSAD4",
  "key18": "4iioHVSSrywvi9RAcNTGXPoiwKt4ZL7hjrqtxEg4aQV1BTjQnhopDXMoM3mhDoBqJmk8JJYn8umUAxNPFErwUHXc",
  "key19": "3moBJ4RUiwDf5imG3C9g48fSGCwLjdMEsxpfsxX7PS6y18cP6pvtPZXQ42E4nQe72o9aRhTUEsKEX5UV9fdhxVQd",
  "key20": "2LrPQLWdoqL6WcUFmXvReqVDn2WrWuJ29ug9Qvq5p8eqXLcbYTMGtfsQG38FiMRaVDobqd3YaYyNSovaFS6bkzF3",
  "key21": "42k5MBJMAbG6CuPePkYuTdm8tBFkDZuaehvk8XGgM3tPaZDxgcNubG2wByAAvQSMXshUorRgsNraZkW4gdT5esJp",
  "key22": "5M55uop1KjpoR3351KR4WZfnviTn6ZTrkEyRv7K9fPMVSK3LWvGtRAsyqP6Rc7HJanmrGMuvAFFBzRg46rhhxRyw",
  "key23": "4fBeUqWMf7YFLqp9qCWkw4F34pr7DoqxLKgCTz7mzs1yhNyiWpnqu7aLXXicQyibV6om1ycLqNzN3UrxM6Zdoub3",
  "key24": "aX48p9VTwNs8icDyWy1xPrTu23vD2WAjjfZGUJYvmHAgznMisB8ZQSUH7eCUzt8W5Nhz9D79vvtEmq6ojzS7CSF",
  "key25": "2sah494fKTZpwsL1C6vMq2K4iMNykPZxDjm7u6GXaZhZvEfNZFysbdTy5dZPmmP1zLARNwxL8cAP1CJ8YaFGmawg",
  "key26": "66B9XgUDP9PW25Nz372F3m7wyJhyuBVTrPwcS3kGqfWDEP9NMqfU7mqZqnQLJmbCxULvHHxmPghBUuBQe8dVgpqX",
  "key27": "2RAfTxqB36c8xLcJgCSbHCZgM7Yn7LZ9SVtsyjZV2pWqPhjkP3fdPAg6u9a9HRKXaWBMG9VD4zRLk8gwr1b7wBwj",
  "key28": "5rW9U9AfrohXK7rpHiwKYnfDeRXuHXc6k1xxuHUKBToH4G1DDWYQzmGwfgnQjr5dEpeCzeZFr8wVRe33XTumtTus",
  "key29": "4kCTmMxWxutxdD6UmqQbVG3b9DMWMNaGuFadRADtGdfVvBCPWgHihcs4xbtWXcSo1LJ17GTAwV6FE4oBT8aYxhfv",
  "key30": "631ACsPb4bX6M5GECbjTRBGWiFidfAi8duHB2c274GciLmHd2n2tHfBmjwpEnk7L2gzV791BEkKzVP3Lb8h9bK3n",
  "key31": "Kn1R6HzRX1WHQNciiHSs8mnj5CeUqHzYHZKxfMaArvde8S6cGGUVSLm8FXVy8tRShs7Z3ovgJZy3TmrURMzS4Gw",
  "key32": "2xWuAWLyKj6oVzHeMAfTcRJDCFxhD3hZSdEik83NKu8aUvPfiq7i4swrt3ujBUSgrciQUj4Q8EcBufaU7AsVHZRG"
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
