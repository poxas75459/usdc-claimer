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
    "4dJP2ajqF7DJRdtfJ6k7jTkaDrNWSG8v2FbiZMSyyPrJAiWDHXfDRo9cWHJ7UJU83iLemcy6f8pEkJowez8FE7d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KpV7fTZxqT8LWvWXUY6bFZ9gqC2Sb866Hf1u8XscHSWU88t8YaRvMRWbL8XJmYsp7wP2255Lknp2cJxULwBwssg",
  "key1": "4wtmjECCz2nAusKQQbfC13uQPGPhSbagmgfSDAGy7q9Pyrwn3Fig7UY9fDBTQVGmq3rCx3ayVK4s7yfubzfqitQR",
  "key2": "2vLLKg1S3uhpZWTfyxWednVhkaTinFU16dYxTaeZndWrzGzTk3DEGtN1kXyZkAqqXZy65FzEM5apm9wV11rhjnHe",
  "key3": "4ort1tGuLChxnpg9k4PFRqbzndhrP2njeiJwJWFsDotddPGZK8fHhEQ4PkfJBEiMvQnGR75x4crh2owt1EQtweWw",
  "key4": "3yyybBSwE3UTeo7CCPCW3ZoqmHwCzT8xBN2busSXUqzLUVyEoyRcTB8t4HaapfUzfVHExZovZV7RVhtwhBtWe2c5",
  "key5": "N1r3CEUtAvsrUXG7hyHD2nG3zCLvvtqufCBoug9jZZ58NPKe29aqDpDx5FHE633qJv5dQS7Mdf2zD8ugqhQsRth",
  "key6": "5JMKJP2e1aS2jG4rUZu984Chz8HZLjGKC1rjTWsD4aB9L3W5o8n1Hi6XSNTBCGJtLtfXYoVKgCGSQTAgDZGo8UpR",
  "key7": "4CFxPNKFQux7qNVqjM1jh5HLQd4MjbjMKmgyo5KJkcLGiD8JQ1TbwoKv8fYoRGSYZK8SvFjtxmFg4BRS9FY57eoy",
  "key8": "5XV1mUUa1p9WwvJdEdfKwe6CxRz8TFp1nAXgBEAgYizPdheJrYgfZjQgJu4sP4fFagyrtQ5oLp68q3astwQv2jGc",
  "key9": "5buMPTXKjk4D2sDzD6arWNzKLebMwuuAS9QHbSrCXsJxGQTezcDjWikMTYvgBJP3J6aj5weZ2dMLbSDp4fgJYGpS",
  "key10": "5tWJsb8XGgCDpxjQbo2V7irXVoo6un32cSxGK261k7nRhoa7P3431uAk1d8tbzzC6t4wxyydNASb26RUxwrFpH5h",
  "key11": "5rqsV1xy1AZSCrzGnKcoL5nC5L21MhES1Fro3AkwxquZqwbLEjifxMHYxRfkgDnD27mcWJJcvzaKXwNi33aPu3ix",
  "key12": "WcYgNZDp6LjWdsf3eNqfbYtVN3HmxNHkScPVQZsA4ZLctJg8NAyMLqEbgyfgj8neBnyEtgGTnyCkDWfMjotJEDA",
  "key13": "5knE8NQdfiu2WGxaddTEn4yPDTQ1pKauZYgq2c9Eh4T8ykMpbzoD9ERm9XL5X9P942NAe1kpeyE8phco2V8B6QfC",
  "key14": "49JnBYkNtiC4wWMK1doEChYqu5gyhKexd2Bz8ahmcnqefxBCVzauZs3hqvo4DohrqKRYAGhJg6YgYcV3fRUhjzKZ",
  "key15": "5wXwytsVXREDtPriHDELFFdvLVr53BTGdN9QkAivxGrvrjpXqFxmq9D5HK9uBqHNPga5cv1vsCuX5hP6b7nnnh3P",
  "key16": "57vUrF7M42EWJYsPN4smHy6DdvxgGCNhb8NCy8CXmtKxgetYsem6G2GQzuXGLAaQL2WwkTHthWvky3mH4fJZKri5",
  "key17": "yabzShkL6nm6gSba94iq425ChYhy3SeqaVbcJpyv7C2VXKMvHpF9TtJtxHDzHVaY8Z1YRhMysC7wsVt2PiyhFnn",
  "key18": "4kdKtAfwHYvtCp8G65oJjHVFpKy6RVQ5mYr8tRpDZnwmVGdcMfMCp9KpMhNTYG7TePqr9y9iHzt44zwSXEgfNx6A",
  "key19": "2pfSpVXaTajRm6B99RaLdDPXw9ptS28EAk8dpSbohy51wKVLUgDCqsQPiuGyNs46nuiKCbrWV98NAMgB4WE5nyJe",
  "key20": "vDei35vQYMgNKKdLrTcojskMrQ3C1VWhn12FVqqAiTpYJKcEa19tpZijhdTVH8dCvp6weDNfWYCqtWCWGKhcn65",
  "key21": "3B6Pjf51tEGkKyXBKKVuMZT2RtQVp6yjH9gSnMW3RA8BNuo5Wc185bTDYoq3B6xJymTQXCCySyRvAg7e5fGYErTD",
  "key22": "35bGAAgo3WFV6xibAtiLH9CsjjYo6iTVjCpRf8ARhg31xXKL9vCbRp8NYubWjqptpxZAuMMu9rHpvdroqEn37KGb",
  "key23": "4ZEftAJGDtdKch5Srw2zh5QJjXinxhhGgugvCZt24ALnpYh7KinqShdTH7ddo88zPRSP8QqAyNfrzBqwtfZykHyJ",
  "key24": "2BaowdxTz1vBHm8jibg9cT4YawXyYd74oHN7vkSogf6Dba65cjSBzpNvYRCtr6ArHyD7xxYdthoQEefSP2zHyvM5",
  "key25": "5agH15JcDBfEMNh59Uiox5sK3j9igAoPmfeFkHL9pGhDRTnKVP3usv95dj4NU7Ey2jb53M1wh6cC56dxJoezPmuy",
  "key26": "42KN7jcNezfu5evbSdbRQb5SGj8JEpjmXh4zio42diWfVzv2c8DDQwabUNsbKEV1KkWqNrbmxqMsRADzASeEbLQU",
  "key27": "3QCNd4gpeeJ2AJCDxodMd3BRF5PAxR4hgjinvUocJeigz7EPoG7KCtKgGb2B9ZhTZkhQZt2cXeMfaNiuBcaYhSzw",
  "key28": "67eqzEm86ojopDiC5kcQCqnxQkJtpVnTkaEhFegjSJssiSF2TgmF1QBJZxZzqjgeknJGAyk2jNMUmjTSePnfDt2J",
  "key29": "4dw23RZ3VQS2XUywCfCWQRVXVab5to2c5LbzLNRPJuC3LtKXqWiCryAmoFoGcrDDakchm7kLmPqy9VvToawNCdnh",
  "key30": "ZBxF1ve74x12SL73JmAq1DJz5ARSfydNeCT56wj2Lwivmh1HwrfLbAanEV5xXdihyakWnHshopJXfGqG5NKCzdF",
  "key31": "5EJX4Ayjx1CSb6o2LvFmQYajy8rXg13tFUFqC1mfVZr8CuBuXco1vLmrWqDHQhegF6ywUDrL7fgGpRbqcrsDbEmr",
  "key32": "y52WMPvHFGWb51i3B8Ajk5Aq1aS5Ct5UGgn7XWw2ozKasZFrNwQBoFzNEjVFeThnXeJwtg6Q72VWbXv2r4AL9Q8",
  "key33": "3PGBd48ew2PDREQquNpFkKabxWxZFY6sWxz2YJgJLdht9KYzhNKGSpUcBjkR52294r4TNL7eEf8e3iHUBDSSwhvt",
  "key34": "3UQmt74WU2osLC8NU8ovxz6Q9ZR1s9YqKqYVnJbFRSavTgcUs2o5T37CJ8MFxCFTMn6n8md98N9BEq178xniRgsY",
  "key35": "23hZxt2ex8RVfhYLFUQRHvvqojDHG6YaD78f9nA4Yut4aNWGT5VQd7wWpcf8y18o1gePr63SjqfN4Ydnpann6xpE",
  "key36": "5KTohd7jp5RNKzopnF9Cg7ZSXLhbTGMGNj2vxtHUbBGkZ7YuPAr5ryDUPVazWERtuSJVht9gy4ZzBzp9AFej5HgH"
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
