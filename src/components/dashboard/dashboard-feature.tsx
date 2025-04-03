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
    "2DEAL5kPPv2eQikuTPARrLCi13Q8UHQede3H2m5zcWmrz64Mv7BkxQ8zskwo6MQmDbZmCojzGJohorzCsEwtomSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J7biSWz5SaQEnpGsHMgpakGa71SjytAktG5G7UVH27cUyD3hRVZNa7ZUczjR578hvj71aXPu81sPMUASYUnzynn",
  "key1": "2RpYWuC59b82QdqBbHDuCKoYL1QEAESmCLuufZynhmsZt9ZNWmtmbv1KuM1cgWF9eNhDhZRCNbHLFCSq1y5UrMaN",
  "key2": "5ae5tPBji33D7foaPcVa6QaoWeQnmYbUwCExoJK6a1V4nbq7FfYVDfoPXTecbn2QD1AvRUqVHH2MyRvRGfUwHB5R",
  "key3": "5rDu6zthNADYiHkGaJK1fSkVmCPYxYGCMFpvUrBUCDxL6o5HmEXjgTkkrsQSAYSsWKYswFNvLuqBbxfKfVggCaki",
  "key4": "61LTofcqmEkm2h2CSx2sfreF63jc6t3UgovtxQJPnG2D5x3SgZ5BqABZEyf3HiJ4X3WFJD7zfdUddnrJa3fsMdSX",
  "key5": "2Gd1krew8Y6Ff46ydJmzRsfhQqsRyDVYrS9hJffLQkpwWZBURke1nXVSFVyjFrxH83yiAh36DUEF7HKAuodE1xnm",
  "key6": "3wPC6sp81gLbTMWKhoVHaKKFcYEVaWsCb2uVsno9VMndpkEbQo82PY5eXRgw6M5HeaCkhKLJHaqNow7of95wgJFT",
  "key7": "2KWQdJQ1TQP99eANWp2C41h9YN3YbXLcX6ufAWGUYo9t68dHWSAQ4y1URDzY96iLWua8yt37JeE62M71yD3e7TCq",
  "key8": "4JPR5h8krm5u7u8fYh24qkx45jH8uqPEyGf3otHWAe3zKWgNie81rBprSz6FCzyL8XbHJC2QrTpPP9Bk6D54mwbC",
  "key9": "3owmD8yzaRbYSPr67TfVecirao9QHg6TYZx1KfBG6NVG7VFvEnBuK6A3zyw3kYmmxUCp8G5M67yH234ZmXMhC9KM",
  "key10": "5bWRUkdCpywxbtXBdHwcJV51vzKab5iEwR3K3dr8TXhzHqCXWBAUFBqiKRu9iw44CWhh3ajRqiiJyFghTfGb3RYz",
  "key11": "cAciCE8qqPAJGd9vmCyAVDZzGB1hsPFUDrpJNnxUvtvQypwG6R3knp6NEsxG5aBAsd4SF53BM9n1EWosaVVid92",
  "key12": "qZxzgmLcAiT4hcHQ36Pbeajd8ZrqEHkHPKs8Z2Z7bYbg1r7kSCFAMPXz8BHTLMVVnufLn3vWBpic2wqJUv37ctV",
  "key13": "2YqdRThSXFFSWjHNvUjJH7Rm1PipYdQiLVwGYMLAhzuDJXSrNxkcES1QBowiW7dVX4U4r7UXUkZ19r4HMBHvM1PP",
  "key14": "4P54nuvdiSMyPP79kxdWkNkLMNqEtHjfY5ShMFLKcsEJEwPxV4t35GDDPRYwRe2y1qMiRPKoGV9Gxj27JBmZ6Vp4",
  "key15": "3DwMHTvNZHpAywaZiMc2iuSrzdcm9nWbBLC6YzBdSrHehj6173CDzxi97Ww8tZTso5Zw8oPPrbQBUPgrBQCUAk3Q",
  "key16": "VFbHUcM67VD4KmtWJxgnf78fpociKZ38VCCLbWNmpmP3J64H3EmNex1HaNKScY273fHNigCsQhvYDedTgpYYZYQ",
  "key17": "2tqY8eBBrSMmfbCfe5SPcCZgjhNTLUytwRLr9uCPqSVA9MJjdrKp7423yJvU8Gx6mw8d35yxDB5ZZMeEeDfR5wN3",
  "key18": "3AQZBFdRUUWgoavuAzvsJiZ4m1DYS7spDaqYRG7qT4GpJndoPEb5F7mRWEbZDenktLGdxGoeHpxuT6C232AYS8kL",
  "key19": "35jBsf5Wsz3NMEDdz3K7k6FD3K2EsTPNMGRpZjC925vkxaoLoBRQmZARR8pcxA9QnK3bYLkre2VjsUonScjBECFs",
  "key20": "4bj3jPAhGTdhWqqYVMZhTzM4RKZBgE423cwLWceZcLPZ2rakKwQC7qDANaCHhWyodWj9fZs2wYSw2RUM7W1dC2cV",
  "key21": "GxowtkMuiqvjVBGNJA7r3JeNSSW3ekeEEMHdCD4DEe6X5D939FakvDR6Rz3KzYefZYX1VzZHr9T4tXRCST62quu",
  "key22": "56E4nr6hZjZKwArELLZ4yfgJVS6L3cFEnqahUvVcSAyNGtykbETFBQm49Dq1qjCyJB711gcBr2BnTbeFFMztRQVf",
  "key23": "5y9914yQiMkGARGgZADUVgNmmZdiY2BbuCsLbQ5knJMkyYZrugTmm4sczCiFdSnfUptgVaoy9LaZn2fd96im1RU8",
  "key24": "2nVDWx4R2BbGPTn9pyKXbkHv72i53aaLHEhegTWgRxWtVWZvjRgYse59vEBzeggRp4DQbbTu5Kk6btsueKYRddBn",
  "key25": "27x3GzsH5iP5YszxShqjMvbP7u4qpjgTHsskmkjyUU2kyqyw2JGKpH3aEisi8QoZLhqf8jzr8Tb1wugBs7VwGgKw",
  "key26": "3tCLHhbEhu18ssMGw3UYAit2QxEnRSVqaugQksgfVDnMYy7uDHYPFtWTUyToAVixChvLes1S9RNazoxYh6mJE96v",
  "key27": "2HVLc3fB9xaUnW7DoFERAfVozKK7iGFve3jFRQQS6tesLxksUcpkHYcX8fJ1DadY3oL2vfYs4z8oSgNfWi5oe7sG",
  "key28": "2bLuQkpupqE9d6a9hQuUzKZQevR8haKjDtYj8KkJmTnSafTS6HZ7fpUK2VRkwkS33WhU7Uapj14X7GnqBr8DDXti",
  "key29": "5UyuEYHdrYucFXa84SLdRjHYwRbUUpHAbzRmAXscHwzkTER1XMgzorzWXiHgZTJsRxTw245yCVAQBZSF7ztggFRZ",
  "key30": "4EnMf4arWUE7ibEq7LhCdec4UpzG6a7CkMLC2d9kaEekuguczhncdpKz2DKsEZRCzRrGKpbJJjuEWKzLP1ysWcHV",
  "key31": "67MsoSX1Mz1CzS8Xm2AqQ6m8LeaAPGDBCrboduqprCRFaD74ykqSn9HnG2tzCNJFaVp8TpWwe6XR8cCjemc5JeMU",
  "key32": "2HxMMayp6d1B2WSGEVwBQVhXZ5iHXeKbtW51N4KjfwatSPH4aozZyP7PgSDin7MFvda1omkiUJks8rthSw5dw2jK",
  "key33": "3QYeEG3X3dyRmkzWSN5Sdb5gB94LPTn3VZAvudZirY7oDPBMj3F3bAHjYZVWqmyF8wx7zSUdzYZA1NQJEVijKiGK",
  "key34": "4muArqqDKAmd8BXDHGrvRPAcuNrzhoRqvLKMKwxzBe6AvhPzTvBm64PNCEmEhMZnK2kqCGHFjnomjg8QVNx73rVx",
  "key35": "3PVYVHopBKgzgPGZfLq1ttkyiJUSBkcLnvkpvEQpQTENYBPHrAUyVcAvzJcBtVecVGMv95xRsWk9NFyVu4o1nrEv",
  "key36": "2TBkbww2qr3ngkzBPB3xeoTTFThztrLHzgGsWvS5Xmvi8hGAhqD8Ua1Hk9gtZVKnSx8cppG7q7TWysvodRzxSym9",
  "key37": "3YJ4kz5YVRpDwTtNiYjXM8PC9BRshULKfQaPMGFxZDkE2LpzHP3eMpT8bRyBj3FcUMD1hi8myGggF3waCuHiYyWM",
  "key38": "29DrAHMKU34aRH2v61Sf513s6c5nemPUCcqtwCitvvwXcRjvYNddE2NsiYS6exq4qyvesJp6mwqP6bGTSFH7EyGR",
  "key39": "g73jTUQV58pLtgKBMYJtv4i7DX23QfZ2vCX2LB6vWCVcQ4vPXfFmxabNrcLoe1Je1tbS4RDqGvXHyBvwdCz28mv",
  "key40": "2dhqg3rmKPRSZyV5pJPw5Y5YJTb2Ch9t6oMXoGa4YVUgdk4jVVk6pxo63kobdY2ewehSp1GRvNacQcQ8mgpVGrdT",
  "key41": "2UXV9goZpDZht5hf4xWuRx3FNWW6ZWDreYRePjVbWadcd7czR7Q3dRUQeF5maCLSgLmFDGADUXHZzjggVMx3ZX8h",
  "key42": "tGg9eGGBdTBNveTqz7hz1Rc49t3QvMzxA8AgF6znnMbEqEhkm1sHweVNAzCESqVc58BdY9bkGB1VofexBsBnESp",
  "key43": "3r6WFF4JLqnUnEHwJuo47WtD4Zbg1jq4qmsUppuHS3peBmx6unKB5WcBx8Ct3u74j3LevdfBrWga85md24tJ2BfE",
  "key44": "4ToHznzspVKJM6j67QMNnVW8qQTGCK1AM1oVUc1vjLFEuitWkymHF4XaqhdnAu9NuSK3hdHQMNk1WUVVcjrhnKB2"
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
