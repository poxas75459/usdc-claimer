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
    "C5xitXSwYws4AxWXje37xUGCWwnU19aQjPPctFnGB98aC8infkpLFsxuA418xtqSVWS6R6nzuZBJLyP5ZJ8iYzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58duxKFjDjX38F1Rqtk4f3qp993Uu1mRMmj1QxSrSagas2zuMe8MHvAa3pq2DkxAJhN4JwMAJPAhYbtQqH9zGW5g",
  "key1": "5NG3GLnu4q6HT8RSuWkyJbU4r4PSEcnWT21Bz8p2X8Bj2Arc3Rdkyas1uecsajiyhfmWzXJyaLYSVkhx83pqUgng",
  "key2": "27UdD1MexgadDCxDyrwWbrptxVSBYrEiyzRkwtwm9ajvcg6W7KRaPGx8jbguSvQUik1wBo9i67B9zN2DRwPDpc1R",
  "key3": "3bK7ni7pKm6okETatppiwTcb7tX4M11Mn4fkL1tv6Jzcbjs3ZXjKJ1fniRLtSqTkc28VTdgPzR3UooD2SEgo48PA",
  "key4": "653jGBArRhoWV5yoeHqRR7pZ6AMQbi2Uxss6m4ogiR3mnXDRTUjyGPDrcGQZik63jXwyCQUg71VvMH2mMTwEq2MX",
  "key5": "5SdKZee5QHeU4K44vsh9556cdb5c9G9uPeXAkVoFREDRnPT39T8NCeJNmVAtS6YNn6u4hE3Hfawi7fG5VM4cCY4S",
  "key6": "3bAtr6994YF7UtVG6LjnXdkwmGui7fAaqzM6FJE4tphht1oWLCJVhe2SULeHZ3yeXmnK1ii8QdNEaD55mq8JaJ6q",
  "key7": "2wj7digm221VpKDQPwZLPRBCzt9tFFVaYrqNXEMuyMyptqDPQdozaxfNMeMeESQPvhZGUzLGin6LFTAvGftfJxTm",
  "key8": "5Tzkuy4kK3975P4qM7RWu8JDFyzZ3CmWeuec52H2PGLoaQjdpYvPyWwAV2K6fvYi3XGCf4K1wFpCUE9cGViMy12K",
  "key9": "66jX8tDMJbgtQQpN9o237m3tsTuBRjQSLrj1DktSqevhX6L3dauGK64btSwYFxaTdunKZm6e71WFsVBhXpc8NWGL",
  "key10": "46eZoveH8MMRJbLNrdqJ1H8NwnGyhrAfq8tbLbd6qfZkbrmSsGP6h4JV2cqJEXBbRCXGuGaC1cXy3MNWziiFDhjK",
  "key11": "3x6rt9TytK1RAxfVx8hqBjbnTk9vUPPxgX69dsoqUkQuPqVXaT3HyBcUNtRHm3yZFiLYZQbQdRGwuaYKAVoiGmL1",
  "key12": "59YSsLWd6631gomBT5aDqzcCkeHuXbun66mh3EsKvvCTJzLjzBQqhrqRFs25L8cTV4L8YXyBGG7zyK3bo9pKEzQm",
  "key13": "2CbtLA4ziWbRVaTrEqfAHShjwdR5LiuLLLA6NMDRZ7FW5aTnJmRGzxyNM56p1xyZzcq7WrGCyuogFNucjqnJhtPf",
  "key14": "2hk1cenMcFQxUnjto9Myfr7tqpHi3xGgaMMMpV6qCgGBAo2zq2w1SA3xLNNzyyQRtnxr99iNSBjZUMj2SjGJN99X",
  "key15": "qKp8aNVMsTQpnF3rzFY9Pjo1KHRBi32uKrASrsNW93hv1ZaQku9Fwk2wqjgAe2Y8hsyCGT2vZcR17sEq3yWad2b",
  "key16": "46RCujNpgMwakMZbKrBrBySuWXuxb81H4rytZwj3wmxKtC1vjQunWQAyheCuDiui3Grmyx1keg4Etz8R8r14HFke",
  "key17": "2StQ5Y9dCQFmk6GucpzptXYemdMyAJgjPQbEiLu1Yt6Q7Q4MNuNnygTDndgp7e1gm16tjaMUFhWahHs1F5NkhBrp",
  "key18": "4WWT1FmEog7DDBRskpn12TEUcpQr6zpJtf6hbm3numvoFk2J1mXhvamZaVForQmYzDHA6Ef3e6wUhdTTm486uwya",
  "key19": "5z1mFGPz4gcbEkZD1ckNsPYvFsNT97qs4Xm9msUFuZ5NDTmLDgsjCaFmbPGXBA1qTq7XwSkWExUDaEsRjU1ZXY9Y",
  "key20": "58tQyizSa8SVFmppbB9xHFuhiJV3YpvqpRF84423fKpRBySMJH9kdAUGJRCYjU8tcVA4u36cRhzBrrNgcAuPEVKB",
  "key21": "33BdxPcPtExfX73L9Y6UqrxD84VNCammUWra6deQDZmeTx8pRsKbcSonNFK6rXFPuU1D1RyoE241x3FLhbsDuyj8",
  "key22": "2bfaCeyvxCNrtABkmKjxaeSaTdNgCXP9vR3x2oo2wNt7jcKzNwEg1BDuvxtSToPXoRkwxTTLH1Y8vHiSwqkp8FH6",
  "key23": "PcH71jz1hoJXR6EQK6q6tsyvnYcCexHCzzX7fSs2V6Ai4GzJyGV829BMPc5qMZ44p4CHLSiSWGZnCdZQvretRXQ",
  "key24": "36VLkShNNBJxk4u4FDCbnvx839Zhbfb38pLcCusnCCosun4ksmR9cEWv1sNQ1gNw7MdcBDQhB3mECeH78qKbB7Tv",
  "key25": "2msWH3tod698hEQRSa5WJvDz1FVodtppufqn5u8FjUhmUcwFdeQTsTpSSQ9rCiBFjQC1xhQ1aCQ26C27eFE6UYto",
  "key26": "GQLPdY3w67wJKP33spC5RxDzAtLUnEA7KtpuukTGbR5Xn7FVMPjFobtYDscaCYHXT5tAbun1Pi4XqJMyrB6seV3",
  "key27": "5xvdxe3jhek4TpNj8BoAUMVjVTdH9Ruv5fMdHoKh2qKVZEJfipgTHBKUdzAwYybX3oP9kVHezceZdTvEx3Qx8hHw",
  "key28": "4npdRSsXn3YsGKU33YFXkZtA13DE8dnVu24ZU178ezCSmdvPhXbstD2CTjKMZQrD4Lh3mSHRA3d6qeHwc9eBuuvF",
  "key29": "CQvJ5ba1qtcKN9XNd5seJzLCXttUDEiSWNtNtNLXRyRbZ1v3UPRBsG2T9VqbsbfVdcDUrQszvLLyFsSQyaNL6u4",
  "key30": "nrecimLPAJf1MsVPxMbxmD1ocxmy36rJrSzDMbxTpaSEJYZEPWdYF84qAYBR5q3gaKSwK3rUG1MNw62mUjhfiUF",
  "key31": "erFKjYDCa8CrHuucKDasii8T2ZZpSsoV6PJrDeuT6NM7P76i5BGToosQ6U4EVQZ66QekD48KVS7BggcFi6VofY4",
  "key32": "5bntVXNBqCCU6nHc5WwU8VBG6fiMknPFEM1Hx8rWx9tDTaKJjNRrQz2urtqaaTBaTKVwp9pTGZprBrdqHEKuotvH",
  "key33": "4hq6ocyyBd5Hck7QLYUBiViDyRpU8phCnjisqGe7x3pwBWLNKxcmPHteut4Zvv6iYYtwoWRB1o2UsghAM85qBXCY",
  "key34": "63PUDq3wr5uXU6XoDL8gPR7QgbDBUfWUP5QKTAGMaFoDDNWx9tZQwAqhmaJeewrCdeQJrgiUEXGNMFhC5jn72pV6",
  "key35": "5ZT43st1b4cby5C89DMmKZLjFoTtzcX9FiSsQPqsEfqjubVM1KpD1yHuRpK53ARvE53jMQfxYv92Uhxp7ALBJLDt",
  "key36": "2VPEvsRukAhYKEcRvkF3tgU3fmhPCy47tqdY6CZa2f6LxJeQRa3ob5DLDyFZ69XFXXSFN3TgMoPg4W673j3jceL7",
  "key37": "3ttmgK98NExyGMZgvWviDXnRRTheNLNADgdaCrziadK9RKpdvv2kmmrfDEK6bsEAhHV4dBdT3Vf4UXvvAur4MZNZ",
  "key38": "5eYAtv2mRTbFSe4C9Az5o5ReatAAuYXC9Fk9xgHozM2ojRnqoDHiSjegge9sqNPyQ2FDRN2TaXWysSGTAX1fha29",
  "key39": "4AWBoYt4DBnXbcMRsx6aaVhwhLDmi5NCfFLcrHkqJNPHngcECJcX9z9RPZmiQzgeR4Fa7h5FxxE7ZTbwPCfgN3b6"
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
