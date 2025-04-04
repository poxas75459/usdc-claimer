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
    "hRvVCwSSCrtHUX3vTSyQ6cwPY8waThjt9GH64nsKJJfimyh8r9aQnd8DjXEVqkdkYhQQJVkEfSWczEQchZEYAfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbZnnnhzm9LZNdv8yC6dSJcAB1tEndZDaEdXEjXndSRVEVQ57FbHmq1As4u1gAoVfz94AVg6Yq6UAJaGSjRsXaC",
  "key1": "2mj6vwXqZM1z5CXFyf5E3dfRMqwVf3cYAnZjfGEeN3e7rPgjgzYybC2wA5pw7v28ybL9DdpnRYbGnJsX1V5ZHev9",
  "key2": "2Jsb9v7xfrmWt27qEoDQSpFhcyhjXA357CLfAzjomjqNR363jRcQSxv9aNx5LHpv2LoNU8ceUVKtf6RzB2ZFSbH7",
  "key3": "SypkGmvTejKUq2AG1CvYTMEH3uzCXdqC9ngCrugcP41m4wP6owjTv868nqXDJPA91R49BeP5T1LcYjFfxAWggcL",
  "key4": "4rhnjxjwN23UfcJdXiSH7q2gvZQXL2H3aNro8eQEm6vmacwvEkoMy9NotHhL43SuEv57DtS15U3dMSjAxNnjatA9",
  "key5": "3CU5bGwAqpu7CFHSbwuqFUAoFqv2MbcTPLuZDpQdRMfKF6xLAYDyNekr5woDAMds8xe9zjj8Eza85x3RFiFxu457",
  "key6": "45Fjc2kV8RNA5XicMjuXKPgnXobwZAtNAAQG1LqbuSDeUFHnQAi4mY1XS8c22omfnqQ8fYDxBLMC2dziKnnfEGFU",
  "key7": "3bB8xUSw5x3mzQxJyjwxbzCkSgTks5cxDarAFhXLhHeeKwRRg8z27aZgWKrmWbYSbhpYEVNBFL1r6J5QWUUDphZu",
  "key8": "2q2uybY1YZqYibiuzVNkvwzRzJJuDDJL3GtMgGE1uxP2cE4RJnWEb7NbnkYntGw11WhF1HntcHVgkQMDD9VGLb3k",
  "key9": "58qDHtTUqsM1uCDEmGUeftbAs6FSrTFxr64akBjEpcE1NwVazqRFXnoyNbEMJVRbu3X3mCkEf4HUFnWKMm6Q1pQ8",
  "key10": "33swUb5BFeazU5yzTAQb9drQzcSnNA19mhT8cCTzRXKqCtkkt4sgPWbYqBfxpCy7TMPuiGH6SkEMKHpq9A8gzneP",
  "key11": "5TtdmZXzTvrMu4TLVQ8Ls2GbfgK3GUPwoeapDRskirsX9okFHVBs38hEAkQmgyFV7LCJanzZCCPy3hd7BnbmzWoZ",
  "key12": "YCH3fLMBggRSeYPVbX6w3YE9fXnuei7p1Xv2tH6aszSjDXyQHrgt1eAKgiKL6T5rFV9gLVSRTsVXk6X9BiVAw1u",
  "key13": "5a39K22Lx3GGVzMiLQPBjFJ5dTB2KY6xEan4YaZD8VDmunf3CND3ySWxqi5inRyBFBL65CALp8oDpDgUdDEQtmxR",
  "key14": "3baxesPFwWMMemNKdVA9rDXJHdpsWUuV4H9q9VVjmE1PhQ3vrG4oonV79MDBjZrh5jC2gUp9zGeNggAeKisjHZAj",
  "key15": "5K74j4qh6W8RsM48nhJoWtjqWRoucxAfPrdnY8WrYfRtEPWHTJ2rUoKP8VH4Ehm7z35JXNNh8XPrAZZQcD8TsucN",
  "key16": "3XL3YnAc37x9dynrc5EgHYDjp4UWhs8sQTWFdRAd8Y9TRH5YTdsHx5b9WfpKQ8EUp8rev8Y49ALEBJ5yqZCFb27F",
  "key17": "aStpH99de5QoaSNePg4w6RxsXgrh4qwT8SAGvWq2ZaTj674dg5JHgAKpdyjTo4xeYpzRFJeLxLTV5PzmPkc25NH",
  "key18": "5mtX2MVQ2jJf3RUxC7vzmvG8TuG9kvy3VFgMn9RdvjKjHMNBr2TcsAFYfGGzmmdUBr2VZ2pMKdJNkzHpDQdH3Se",
  "key19": "3Aep66jrCMJqADd5u8T4mcU7Q2JiqybiZE42mvD6gU4m9CokVf6ptPsZeuWXBLv9HGr49PvPP5bmpEHkKwE9PZwZ",
  "key20": "5iJ7uJ4St5oSJs8pex14iBqwy1T24vq34NNjph2PKdrsmok4KhjgwiYCXqRCmsQmabr3UdC21gjFX73Fq2XYBwLs",
  "key21": "5K7hZhpmTyoXmk7rSsFTBpa2aXzokHtyxCfeRdC98j9yu1LEzGkiyp1naQHF5XTFKEHyA3ixV6bJFsPiTndPCzDK",
  "key22": "2irTCsAf2cTdYZTGQc3UfVv7GfCRoE5QPCFLcQCdu1VMEGdEJAPtJ3wpTiXGdNAW1t9fofdqAW6KCB6MmhrPrwV3",
  "key23": "9YK6XATpN9wrpRnn1QtCZ17mo4bbfdVB4ZZWdYi6WQJ1P8UdpmAb73sdTQZNXuFr8SVcFw4uXKFDjHLknxnoWit",
  "key24": "4HJrwmiiQgsWYc3e7FFsK1TSdwzcwnW1Rc14SF6JEUrbMftfakT5mJrf1Yw9MU6mmk3WuYS7Pj5qGzYEY2GXvURP",
  "key25": "3H64YLVFikTechPBFtuTWqVYQUeSZGwkyprFLFU44aHuqj5K43iPKpW8WFe4VKVRBZNoPRbAWJAfHxiEPWv4PHSt",
  "key26": "3wPuPjYwRK94K2vuN4njQ8itP9PemLFydkoHs1iPfk2aGSiWjaenxXXqij8XdjDoNGkwC6siwfY4keDWcvkfbY8D",
  "key27": "QjFFE9PTSCUnVHHMPaaKcQMgHMoAYQp4KAdu1ii3BxJwEgcWiLMcaN7RUneTpN3w27CxBDgxo3WRqDNDG4tDiHk",
  "key28": "TXLnDdiuqTk56h9HBgfqWfmx9zBDgJY7wbVJUhL4BLaGmY2QKrqTjP91rVrxLHg9JKiQUeCmJndrqFG2DrPj4io",
  "key29": "2qGVfpkdkEM3KDUo9LaefoxHRzpVzGf8TYwXEUGMBhTgLMwQY7abeXGBhGsLpkeUk1KjZsxLE3vu3rhS5RmF9Kqv",
  "key30": "4uESdsyoCQ9m5VGo1zZyov8ZMXkKKVfrukyeLDBNp2kMbzXN7Cj6PZ1NAEKckzAgaeVsPFcJdJ56xP41AXfxcZEc",
  "key31": "4a42Futxo3dQJoeqeQNmN8pGPBDEDBkAVYR3bJFpeTF2eVoQ5PHPo5pVUrkjUQBz14CXSKNabW54SJrbCqeDLG2S",
  "key32": "51sNTwZgMbAwx3fnK8C2WqBREaEbxxCw3NUKbWR5Q1Dc5xdn3Z3zZwD7GgzXsMjVo4xTCz51w8tQ4niG5TttRzEx",
  "key33": "3URzSAyBWwjLJmjLm4zTiN7o9U6sF34G2frAnrSWXMWLagX9PDgLkGRnYKsfn79xg75rUGGMnDDCGDN1HiNGUfwc",
  "key34": "3qbbEEwRH4B7sPQHRTRHqEtfFdxKB9nYshY9ea3MdX9G4kWZmPCtrXATrnfnYdcfqKyUCw9qvASeRLVkk8gJuHc3",
  "key35": "MWSSXS5A3Lurdx9cLwEUbVtWjXVqm9HhYqXgwctc4z5WGE3v1ejjhwfnauTuZbMQyAq59rcAvQNTwNgz8Z4MBwV",
  "key36": "4cPwesDYfBCF2YzuytAzNb899AKynNuyRdtbBp9qZKj5UxvQaA33mybq9EF5pkkVkiJnv4yaoSkC6N2XB38iyGAY",
  "key37": "o1z1F4Fpg9A41UTiF2KzUYG4aEEtpy4vvBGtfqdLpsDK9FmBWjo8WBNFDLBdeffDExF3R7povtUDLEF2C2HtikT"
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
