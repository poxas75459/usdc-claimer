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
    "5mLf4vRCB7rjcmCwrUzUoxJiEwB4Gg88x6NJh5y5nbWPadUiycZaogxXKNvJubDhZ3K9xixXnovmbziMnBxf6nA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dej6smui2xRrEiah6d4JZadH3r2uBoFF5sHeb6PqHy2gmKs1htTZLH2GP8BwZr29ccxZrwnSDw95snQoZkPYgeE",
  "key1": "3zgpzTNZo69Pb2Rx8ECCb2xJGiC65nZTHf2xke1jToaRkbuGm1RFjQ75T3QJY5d2XUR4vkTKtXHSdvuMn36T98uX",
  "key2": "48mhCm4jRFHBeJKrvqzhUZyg7yr4eWCefgcBuMYwvSPSxcYwLrCLpnjY7xFSJiz9TiBjxLGZWUnGNP65UrehMzEA",
  "key3": "66qx7qanXxwdLtLqsJhTXcwutNz5H3Ry73JeBqD4KapbckgKRXdwBPA55Qwfnq3UxkhaUX8NgKnnsW8kwdbtb7qv",
  "key4": "BpACwPztU4HtjYG8HaqNqR7zFNKCL95q9xGvfrd9FNXAN2gi5YvwoSApkbndVD23MPynQNB4VxbQQCmkr25gyxV",
  "key5": "4a1wWyeooaBRA1wcWSXATgXey1BLGdcMM6f5WPZWDJonuo2RqK9SMRUv1zAvXt9LUdyZGgocamjaTGMs6XrJFoXt",
  "key6": "66i8fPbkk19izy2bbFfcjNmWNPiafP8HD5Zk587VgyoGPNQ33nJ1E6oijjAEt7fqSTrzDSUXERgMvtBDbt1oDiNh",
  "key7": "59DZY4s4rFtbrFv7N2qxkVKDRgusVhV1ZgzDBiLD9nU7Dr1LaytZetVK873yYfTSG2ZfjDkWq752SJb7cMZakBDh",
  "key8": "4LS2JLZ5himBEWxyeiRubTyFQN6we1oUKtAfaYtmq5ZZ8nL6sE6SeB6QSLuhmdsmfVEHFHBSHPTRuoS5AUw5eMGr",
  "key9": "5XDeFve9u3F7jrRKwcmsutAh1FVCUcHDow1GMjjpXVyrwdLXBUBZ8CcShT61TR3JjTW6cTgtaJjwr2Fm8C6LSuPs",
  "key10": "2Bg24oFeTKFUXjDLd6XwBfpkjYbX9GZZoSNhMtYMq6juHDyA9iJpSdZ7rDifCVf2SoaZm2BhdSrbz9Kaq8MJREuR",
  "key11": "gxEYWK8KNH3Etfiuv7yuyixVh1fMRPogVEbvftvnTtd2MSABM8btVg8oooN8qyBwwEvhscfoh6MJeNJH4d5bABU",
  "key12": "crcVPYipd537vhQDt2cRxSqUG4XMu7cwo5eA3g1DWvtSyoLsnAKsyWLVCfu3uGnnYx788X3VR4G45gQdm2Lbuqh",
  "key13": "5mZ6hZ3k2eMB2LyrCwwfE1XYgfhtAUVLZFWbo2UJ5ApftJxECA8m3vuCTaa6DoX5p7D9C7msh56DAQLwHhhctCNr",
  "key14": "53FLRf6fszzxFkmhkDKswPTkMjyhWUP89261p868dqsQu8Jfz7LZuCdGUsxnxQ31H2qohTGCUfdkD4Whap6GZDqx",
  "key15": "4p1o17orJVeVnCNuy3mXLDYPij21ZecPed2d2oZhCfivGfZzGaVVipL4p1AYCvEmUu7Q2E3UC8xFDdWFVaaM3rRD",
  "key16": "5KvJLeZYPd82V2UvjKjfSqY2gaPcBiB5wgS553NoHcdGFHWnXiMGAMXSbBHYp2uRNVTciTHPTmHLMq1Fonqc14QM",
  "key17": "33uSQA9UMjGeTcKjU6rPgkkCYhYLXnU3Xsnd6CDuRQWFXNAkEu6YSme4YcNFi8xXk8BWgBZ6Nd4U1yZ91KbggPQS",
  "key18": "3DMZBc4wSEGRK7RygmPEha9LEMsomEJxgzUVqCC5sRkynhpoEkNnircRQ4Jf4kzP4rfME8f4kCbEugKNnj5HzRvq",
  "key19": "3KYJz8mrPRkFKHvT2j45LkRcHQMgah3kwcw7kuYRsyA2eBPtDgin1t5imMXTkwpSBRLvCmEMwjbct9onX8HnhuUa",
  "key20": "2g92ZxdVBL8xfvp5rN7YoTtvW4o8PrADhW34Ry2egcQqCn4e1FjNxFXa2Qdzk6nRoBoJzgftA6oGGFSZu4BPtRW5",
  "key21": "3EfQZc5zZJF4uTYrqQDvJxc7c2XceZMwToXX8hpryDCdMpXsEjsCU818hr4H8jDTZCcaY6BLELSdQdggTYF1tzFu",
  "key22": "3xQQAp9vttyg2Cd8Pd5NRiDxBMfPnQqhb4oy37UuqdnCTo7cWjZEhZnwu4spMGFi1DH9VGEh44aGZyMrxACJiWU3",
  "key23": "5prNg4EyG9H1L3nYCTB954mAhRSgxqZqk8cqGQVfw81iEx2FN8UdTf29Ek998mkaEevJ2ANw8kmkcCi3Hb3rJFu2",
  "key24": "3uGXCdL3pCockkwhMvV7X479WnR9t2XnQNHf1XiinXYJcdnnRioV9zzX8ai5Xj9wSdsiNAHqny56a3LJWrcH7ejF",
  "key25": "5xLLfDfa79WpRfg7sDYrWEL13EuAG8T4gxYrM74UHNxhLtMNsBBQMaSUwbuEfWxMMcaMwYX2mGq9prRgt4QVeocZ",
  "key26": "4yfH6SJJ21B3jM3UESjCei7CT2ctDd2ZkmvtafYBYeiXaewEVmn9oFiCaThB1b5Ek3Tkh1owg1MavME2GTgz5yAN",
  "key27": "4vRcpW5mWE2YUqD6ocRwdsdpgHR1BAauxvWaYd3FMPh3AY3TipL8hueDavWyD3HS8QNmgGxGSUw7GSm6XJJdhgDi",
  "key28": "5SubzUsG6ATAmR5m3cSi8zgovC3YUmfU69tQM3qNxd1JtxPQjtWfeeeHFf7teosH9geXuGa2Ch4PNY5q6sPsYkS3",
  "key29": "4h5PRL8eUDF7ynmoFeWw56m7H4HK6cvh69wmx8gvsHiqbkqXuGiT7PUHAGM4sWYsKXSwohPwSnomSExVwbZjryWy",
  "key30": "62h46hF95YuCXqLLsLSagKFW2oWSTHPWwKsXv5WRzDYy2CysyVKS4EW7Cks2oyzdKz5KfBBj5zFoCBX1Se78gyks",
  "key31": "2aoqVHozfTwYogkwNRchek3wTDy99ayc4cQSULeGc6ZZPvwv3yjdMu1KiQdwSZkrm72dsCTkah9UJnu5WFyumJuS",
  "key32": "4s9vYFotfKnQLY4YnrJoquyBz6pQ5YBduYxKkjWahwxbjy9aS26smFpCCJ9mBsBDXuFaxMUAzHEoYPXnpp7zyWSU",
  "key33": "4NhpY14suQjjMV89qj9MxPEfZYVzM8bF6PeMvfJga1RyUc1vQbtvaby4D8gj3ReADbH6PD6BWA1JQiswEWEqoM8k"
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
