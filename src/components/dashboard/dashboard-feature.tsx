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
    "3e25tKdYGExKLQYyJ4wq7snmKPpeZvRhspKwwwz3yP2APgMDNWfUqsY3LyvMzp49fRiGM9BmRq5B56tgbJUqxXFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZoiXom3o4e28JW3FmJ3v7inBae5go83BAcRD6MXAg5auXapbonwxf55vS6XuSgiQyGKV4P1epEXkeDuNE5SrYqC",
  "key1": "5EekNB7rqfTZWJzsMwzXAgeDoAcaRDN86Pwy6wnGCRv77hq6i3w7QNY92NmxrfWQjRzCueu9uCiPLTkAUivmPayy",
  "key2": "3hNCAZ4BMxZ1U8FfRXmQbko4KWTiA3pUWYD68sFn17hVBct7p99P6GnS8AvMsjzUGYqFLK7yiB4VUrwHP3Tjj8kq",
  "key3": "88isAdCK9DbRnJkWEXoUVQCJ2RMNB6sqX2Ft5fpWrRxiGB6ThAQrVDYHmAuBBuX4maQRtgixGCYPzHNJxATwAF2",
  "key4": "3E9gwDZprD1mPSEkoGR78c6WEKLsVRdAnfFSvLiJkDnZP9HaE9ufWEao7ekg1i4d1nZ8e8TiPfgzdx6gKKWfmfso",
  "key5": "5VP7RCyWUNc6uvGbHqEh3To4GP3DeULEMxC8SbhGPNCXZm2fcYGSV6oWqdJbf4YXPQgvJZqtYJRv9n2AALZbGfwP",
  "key6": "37WXnc3whMc5dJ2tA2cynicGZWmSv7SyTWDhgMh4dqe7KYkdmzbZyM6FHSe4fnepZYfJ69G6gF4ocoavqVCHgqz1",
  "key7": "3CBTdngEsLgkm2fzJ12z2hHhWPhvmSMjVcReWGkShAmpPWndCV7AipWLukFju8BUSfjZT67h2qPJPqyuR1axdkHc",
  "key8": "2WCxp1AvYNonGBYg7kyiBRG3e1YVHgMd28MNiW2o1KvdB9wUEFDFMXaoGgbKcwnoCYNUpiq7R7qEEdXEATHt5p5b",
  "key9": "3T79zyLAq8kTtSSBrj8nXiJkXSudoD7HrzZnZHwFxJx5inLqUTBa8Tzh2iEk36SkKTgdpCgEizcMerdzbggoAaAy",
  "key10": "3TT3qgEKAp4LPRmfAXBSPj74aeqU85EzZc6nzTGdmkXDAbAwmNefkvisGX8WYN56ReUkffmixtyS1khVJ18DG57V",
  "key11": "4kj8XZqwgtLARMZpujjDActBk39AyvR46ScrCh1VJ3pxLrTi2ZNrKvNHoLMtHgkG1G3ZNXgSoigcMShkydMnsgQQ",
  "key12": "3WFPJZpXMSJTw7pZcMje2yyExzjTWN8CBMVEkfuBLgFoZaPfNJJLAsQs8ixjUbLnVuwGhZWnnRNh5ZnwmfZaRAPe",
  "key13": "5LshRdU24fG5MkPatM6VNvPbQFJxvXT4pGKb97codeaTff24YwfYW2QaW2zKdYDLf9gDHfYFXR3fXviRd51V9fjX",
  "key14": "65oatbrv5K81zPLRpz1i3RV6rsVeDmDNxmKaPn7YJvnRdjjumgUHyxcJDVwTVaALHZuPCrUpcCWi2i8YKBwcoRgN",
  "key15": "5fMedqMsGbJaAqgUgsSfftwZwKCcjzvxUuhyPqAtt91jM83r5szJSpbaECxnaMAB2oPLyuANY2DLE1D2GcsikhH5",
  "key16": "2DTpBUwku38nXM9dAwQFkHB63eFPZUZumtseo4SmZNYVgE4jKWSzdSmWf4YhYstYErQamZ5xwprBz3LZaxcRkjPR",
  "key17": "55KCqKv3A6q16xyiTySDsCrLQpwkyWgmPSF5HAoFeWedNjhKyLvmq6ry179WYvriT7UHZDSJs8ryoSksBT31XJgi",
  "key18": "3k7VgDxup36wiWqTXfW9ehEZ17ef5o1BxggQzb22qDzLLGWejsXcpFa9zm9hDAo2un5Y5TzarYqgpQ2jTZsnTJfL",
  "key19": "e812kxQwD1rbFqJXQ99RUZ5eZbanmSA7azeNzMWa5ipjGrTqevinyKLFf9cSro87FQp5igGgyPDTDeGok8iPZZN",
  "key20": "3rJYrXtuMZE4snJNhkBM3NW7VJ3kY5LEMiLNd2RuP1RJucVpicRTDdD3hJyBjXYAx4fDexWpuChjYxVf4cXwLBgt",
  "key21": "4ZwZEjTqbpqdgcFq3LUAiMU9MJJZiafhWSLxrvjE3XRD3ehz97Mc8mjEBi98RkbfNBgkhR14DUG3JAJYo5UeeZ9Q",
  "key22": "bQ5U5F5Lr8qEHZaLT3cgVmgHmgyfKqmet8mHNGbyc6YjCWfxwnnBLj6TDq4sEtdtmaLkLjyGjhnt3LHUGci89UP",
  "key23": "4FR6xHW3qFQhPTot51QFYM5CeLMgXLGbRaBRfimYWY4d6RaZxmXkCzF77PZecc7J88MJVy8P4qs9HQKcwh7cuY1p",
  "key24": "33wvAsHhQHxgGAPgAkCkYCv6HjXbzYkWa24o9Q8jE6an2u65aouTSvR4zntwANGLnBFzj4f8pu3zjMYyXH1xSFbF",
  "key25": "4nBaWvTnrssikymfGoujzTQCJwQbRzRV6vTsK1oG7zgGDgZMwWgad5iGtCaNuKfTMB5avS6UJFGs3AP5uHWhzXrR",
  "key26": "3aYMug6LYSFPaFjmYWn9jMNL4NH9JDd5beUdAMz9UxSG2fKVN92i92SsJsCQTJHL5SRaaMkdGjGmXScqpzdnAUqZ",
  "key27": "5s4kVxc686zydvwHMkFYiyPAQEdL56BpPm2JAKBvqVFeYk1f4Lg9SjxLu5DQapFmfdusRkUyKEJCvW2i8gzVCAN6",
  "key28": "4uMXfHMrNVNgSz5c2QQn7HYWGCG3LqfDNsuBXCRoLMAJMpuocd9SUpAsw4c8djvPiKyotm6wMbdsVdkC5wfT2w1L",
  "key29": "5c3YmR2qYgjxdEHQSFRuXiajDQwXxh6RkRJQtduotGiPJDDwb1kDRm2SXbHcwrC7AdXgfBm1kDqSjYXgbzk4Nxrq",
  "key30": "2Z7Ldi7h4PVAxiJmN21zpMXRgPisTDMVdcBnZTXM7i1zMXTqQVJ4RKZM5skbGK3PFiD4uUNYLgh3s6swzcAJRReD",
  "key31": "5qCN6sPBH4VKMDannJDshpYFCvSD5jJRkiYh7kjwrdd4kdtVwdh9mhdhW9kMwZTiE4C8pwrx9AgitenoBFKVR855",
  "key32": "3Y4XJwvQJ4Pm9PuK2NQroKrPxZuDpS1VAod33A93B2LtSdRVuGqTVirDtWRXHD91j6mYimKWQJfX7pEgFKwxWidb",
  "key33": "3uabcqFZdDp9Xa1t2PdbvP6g3pRfdW9tTdb588m683z5Uqp28eHvURG2YtssgS7ZiC8b4BFjfZAL8AnKsGERxtvf",
  "key34": "5Tkt4BsjhnyKe4fbnFc9gureK2hhe8xbY1PEpEB4oNHDaDgDLKTD2SqtutUoGvHBmgtEuj1gxczEX89nKoLxYcpC",
  "key35": "5jVvTrHDTroenWiAfZL7Tpno9jsXXLmJBGFW4LW7TspBRNH2AA4CoG5ZTN1u9p3PLETfmPb14ye8LdCNitn823Zg"
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
