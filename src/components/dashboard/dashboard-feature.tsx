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
    "3NXpPdoU9ujdrLQH24xVDC4EjBwxfKhDA4Sk1XhiV9gfqnr7fQuCm4GFYjhCo8W43zwyXngMkENvFVMGFv3VZNio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjeUxfFRcQG3Qaoc15HmgCdf5j3mtdD1swqcRtHzKEvoMLVmS5NjGndte3dpQPnF6h2k17ru5upiGpQzwdwoG9y",
  "key1": "42N6b67fJqb7ZtvM6kWS1YrprHh777EX5YQpqvEKak5ErGJzEEchzZrnuDr4pBZu4Gd2eArkUJBD95FWHQrnmYgo",
  "key2": "4UmzxB8CNFyUb1rEJGuExkhK64cAzfi7pPieSvMUbSiTQPsmeayVNpmbDmDM4DoRLBpoNKcXFmGBGeQEZUkfgXib",
  "key3": "5TJUJ4vFER4WohPcp18xujHAzTkRtAdy789MetSGVbgmFmn8ZesoPivrVLFoDWnwB8c9fngNwBps6pugyzKwR2Fg",
  "key4": "3G9HEDc8XGCzLijvQTRp7sq2x3b2nHy5tiuPYZmUfrM2faNbTm3kY4MdqLAULUu7o7VJVAp1khVyyeKgDMzBtzwc",
  "key5": "3uTbkotaiZ8rqg5DFVTCMbb1LgnnCfiejoikY3bMvLFTmnEsXTDcN23FDmsQoT1QRVa3MjK8PtorLG2VGZ1JCMEA",
  "key6": "29puoMdbv31TX47e42EzPKVwDV5uPqzi2MaUszM5WxNCKnsvA7uEzhYDtZ43fQYn86tzA12a8qqSWPauDr6teZLy",
  "key7": "2rSFj36UdHfcWUYqp9ocZgrqs4fy5nEwRaFKp98duDeaUHtiiop3pQcsirKvDUG7h1h5s8HeXCJqMFeibJR3u6gA",
  "key8": "4srodfKnBWKhU1MS4TXeNSrvZFGrS3MBcx9c9Z4qiLSpNnCEGNgeLq53cz6MU9vy3NLW6jCfdfzyp17PhCFFfWtu",
  "key9": "3hqkhhbJi6yPbZMRKHSuZpGoba81vEfa4wZSNKbUmnXWASW3XDCur4LTLuFR6Wb9E1hnMofpRsyBU9NPi1ZC3fLG",
  "key10": "2mkn7xNuYkygmypAaQqsjJpiJK4M4uaxbThU84oAAqCQrjgJXKNUjVd6RAAHqkxH8sXTyktatWsCHhc2Dypg756b",
  "key11": "jnVMD49dWXfM5btqGhzeDeAumfnC8ag6HdinmRiKSVLDo91hNYAs9RFtuSfVSV55fQFCfptLT7oX1tSL7H4ETDh",
  "key12": "3wpaEThX13J3Nz4oGgdQQReAsda8bGxe8HRA3RUiaQUu3v6FrSUYE1nKyqyQAu4Mrm9zZBszQNiWQvye7btkqDBP",
  "key13": "3W8g3YwoZ4Vi4Dxa7oE6Y674ZjKPfCXGtwPTz9JUTNXoeEDrkqeAr9aCppER5Pj4Hqy1DRAzguhnKepGeWnRsqwP",
  "key14": "2JP2XTxKBkjbzGi3xy6AwPtXK7jv6Ecdob2bqwWw3bdj8pNuFiPmNGYVfXLuMt9rswTWXTca2rS41aw2csdysab7",
  "key15": "4ag1LgqYhnsa96vPZ9j6Nv22WqTqmzTsSJY4msUnPQBkdV24puY5Tuxj2ot9dxUADaskAJvvmyoudcE5Ngd2ZL1L",
  "key16": "2iGcKWuDTrrT6U7fu1YM8BVzByYvimktx1UkA4fNuboaYACrQmbt5X7Z8PDsPQ8W95KwQUXrTibqe5m8vAtSMmXQ",
  "key17": "wM5iaM2aaNiuUMz2R7EAvg9iRLYk6568emQzt6R7HkFj5YmLKBQ2RApJjVyfC2jLTaPvQfkAvaWfUowScYMX99r",
  "key18": "2AYjy7Wew8kygs4szvPnZctM8bLCxgtbqJiohJRFrMs6W9oUqRcCCoHqBKqe49KyUvASTGCfjP73He2KfbSftQto",
  "key19": "CF24E4mSL5bdRopcbreMJ4EZhASQpK9aCjnbJAmkn3JHQs88sJ1KPQkXuQazrieUb7H3ZXKYn638oYzVRw9DVed",
  "key20": "2vUCwSgD9iwg3LH4V44nLRuDXLp4PenD1SQ9Pof85SkCaiFwvfc5DoKzBWo8UjKrfXGphRBqGFRGWXhsdQB4evGo",
  "key21": "3cwtpTrcMZsUyxK3j1UdMTKhQsdBruz7eBo6AEJFrqrqLueExHY1f3FivkZN7Vq1yuZ3FqZrDNGb3HcmTjJA8zdA",
  "key22": "2R4VJ3giEtLJBMxHTm3SNUShpTnbVtSm3Mt1aaKpJJXs1SmPGWVWhyWFWgefkmdjHgQ31Xytz6Yz3NFHe4tPwjcV",
  "key23": "3pckrTPF4ZKppki9zGESMu8B6TfHamTHn157dHXBH2U1GUmrpo4srpvxDFxDS1QBGUmcRC4LuTDFiRqhqo1DcD5z",
  "key24": "5aMMbM89xKp2TSXgYx8bjFikXDoD3abdUMTJiHpDrj55KH8cbXqMKnC8pQWox9aYYue1nJdHKHdqHknx1iFpxDVG",
  "key25": "3ZxQch2YuTV2LoYgXJ9GpZtApDE5kssnD7JzjLYqvjR7SFnGhG1qumYAtpaK31oxDb3PN48kbcLQmkpNGBQ5beG2",
  "key26": "4BZi6kmJDynYbrXrdjJCBX4NZqzYXgWEwHm4wddc6UTz8pbXRF4sEFxLGdNh9udC4XE2v3jCo3RC3T7af2rzVdGy",
  "key27": "5febKdt74aCQEe2jdd6j8hZUtpifBjVB18kzn8wAYzTNCixUEcDbDCbAfqPX1jGvHBmAjrbQtoVny9RrSbjZpCfM",
  "key28": "66rYc8w1JHAHkm6iiA3VYbSwUk9o78nHycsQyDy7ALXRphYsZiXCTKK91RMkKAayK3edp7rDSLTYmZVp4dUGUmrT",
  "key29": "AfdAHyTisQtmKmTy2CQaHZpQvgbB1zRK5biW96GCDFu7h2Cb5ARP4jdZ1fbGwDQYG2dnb8RQHo6xZUeLwvuVGD1",
  "key30": "5EsSBc91gqeavwuK3qAbT2WFv4y3i7eXKKg4WQh5EzYVGtn8dh4tLXEPUsbtABg2SR2TiVG4xL86L4gzBbs96ozm",
  "key31": "KcZVC9FZmaJdZ7v1xAyAbjHg5dFbMx7ZZrRverdr3DQdwsSZSCJiPz6ttfgyUcMTmmtRV7Fjq1GSBnVZnj4cA7j",
  "key32": "4BLX4XxkrVazWWbA3824Hkzhvukj6R7RhP6rLZYjgwAjK1rcQEkPMAuotKvgo57YUSWr8PBGCRuMt3hzoobdJgVW",
  "key33": "2ri5DgKbyWcgM5PPjsXs9JFrVuHwvPYpPk2PKrQTMXWQBASQrsfLcqDSXRW8m2pNHuZy6pCMHxYpdV1vC6tGCfd9",
  "key34": "3e7HXaK4YAAkjQFLcVqoxr5nNacBEwNoY6w2WQ26jB6heYXBqjosyEDdM7FhyjDRMbxGKci1rKcoVHH5yN34vtSR",
  "key35": "4YsBvWDktgdjJ9A2NnTEcHseQBgMiWWryKndrzv5sjWBgdfsshdi8ufJ23xQatsBE5dLWFR5Ar3UvDiX7nFfegC5",
  "key36": "3RZtbbrs15qyT7kZK7XZaUQfpxTJTnYfQG4a9oYNbR99E87NT948dUXNzNjSsXDnwyfjMapnii5jYqBwgndiBdw1",
  "key37": "Ziq14faEPdbZZMF945Bi4QJfpQP82aCoMVVVJykeDfG7oVWsmPhjgZo4zUhWSapC2px2J8BpXdE9XC4nSLNaZoY"
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
