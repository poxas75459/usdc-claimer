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
    "3BXkoJdPcBDfkQ5otQfP4LGoGARzWTJh6NkcHJidruRx67A6wUnSwuXFyvQRMKsow2nqivT6WXncjqz9eg9uoGPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3ppoX6mCWLF6Qrg68iioVLsFzZDV6n2Bjb3j4ArpUozyiS2h7KZQjYjkPbsfoJhWYAB4MKSXnufSX4ujU1jWxx",
  "key1": "2ss354FbWgmnc8ZBWSJ3BJTF6strwfLKGSBVZrVgevaFDM9iHXGWtjhKrRokpefQv1TndRfVG4RC8xR15sBRMCor",
  "key2": "kcH6L8F3VMiVVhafedcePM9MAKgv9HN9v65v4BPWYGzjqYg8nvBYpJYekKK6RUQr9QYizGwxbdWTdH5kRy1qUh1",
  "key3": "5DkA1miUCDPyqSYFH6aiAfzpo3ovRXJbiJW36GNWdFEFNMePrm7MpXyjx2FQYKohHxmq9Ugub4EUwj2bhuX3gRMp",
  "key4": "28MtgM9AQ7fP5UimjvTrNVps71CTCAqTaoLkHw5XxJZiPhwzhygcQAWEBV9VTc62EHytZe3GT2MDQoHXhgRqP1YH",
  "key5": "CFrtyQtNEkZtdqhYenCBXS7ouhmrR1FTvJk756RzSVq9pbVmyAX2YUX4XPxV8E56mbj7TjYQN5LvnZYJeznWRst",
  "key6": "mkoqxijbH3ZNkkP17pQ88BZRtaQh6UhZL9PiTQ6JENFX3u1hGDP74hvnDBcFwZr6fdRsf5gcgo5ZJzUsDpr7DRK",
  "key7": "2hAVWEPWatQ57fcW88xbbUcGtagJk1JdMMSSLvGHPjiyvMMPnFrUsdGtqnGKGipm4ZTR1VtfXqA84SFntdKwQjk1",
  "key8": "oazvqRWVgYVVPzTtLfHD4uQ1eg3sxMpK8owjBuLsWp6A8KEP5FWErq4kk5KzdE3WfZPmKNiJ6iTRpYTcKDUbnsF",
  "key9": "2sQBas4iEbdorU6LNdrAjkLfz6qPtrcpEx1fyvxRKERLhRWyBLN2wkmCnpTCGYHiTpRth9zP2ak3gVeBxsSkycCH",
  "key10": "5XzWvGPqZZ9wUpa7tdj1vbW1n8CXB5Hj1XTcyxzAh7fNoMeaax2FVnyDeVxLjyCNSX9g72iPmthf7izBMX6jzJVh",
  "key11": "4QG2tFpye6vX3dMynnLiqXFKWxkUkmtKXDdoDjg8sZi9Tkw6fsvgZrF8FfXLt5uXAWyF54sJQeDsLENTtcbVXEwE",
  "key12": "2ctKefGNjGNzYLcrwyVr6P29W7y4k9uAWJdQUoWXxNgVD2tGw3BS2kj6tfp1nqT3XsDtEiSZ1dTMhPpR1MtjFZ8d",
  "key13": "5ksWuByM3ZzmWdRuGfbb4PJkqX8HxpGmByrgD9q8zJGCra25dRQERn2YArq4QphZqJfCayuckNPs2jyU1jrxR2Xq",
  "key14": "5Qd9c2FetWXDi85X9JSxPn7qgAiPXCAZ72w3fLPStT1LZUuMAvqRBfHenG1KGvBuFb44DG4QtryBR4iwHZqPhywn",
  "key15": "58mH6JcZjrkMUc6izMWRyekvL6R5PtBBbR7XKcYGPmU1Q8d9Xme3SpeJmXUAZ3yZKXoVBSEpTBzTUXJuFEHH7KYg",
  "key16": "57cwajnMDQiMJAJMgbDZVZagxC9hAaxicHGTfoe5uHE97DeJcW3ameNLdgrV56JpG2hRhLpkdcpJ2tzbtaqcYoqt",
  "key17": "8ZAwYyErBFDqyviXbqU67us323ARCkCHSTDA5PXvVekzsn3wxu29yFMmR87p2MVxRitCCNKcz6JwCJHJkncJZ6G",
  "key18": "4a9CMMuph7355Mi5VXqXBDLDc7c1S1JtSRbcavjhepvKkYbgcYCVPoNswqMkZoiG3DgAMMYKERyuCE2hKUeQ7Zgx",
  "key19": "5JTMUPuwprcekoVEvHzFRJTxE7GXsqUd7aa6eocNfMoBaUnsQJF71Bg1ZBaTouNZZJkit6K1UPKxdgkL48jmjRpT",
  "key20": "3V2wuk62CJZoeFizKw4L2y7RqdLQ58Ab2xH9ZdW6tK9QzrVGYisY48s7zccJrAr6JtdSZpndK8WirDR4jEi1mWGm",
  "key21": "4tDRnBJ3w7nH1geWjNfgmQn95rjbaZiacC6kX6NMoVcWSZ98FG6NhNgHZsu9sA5AyMy12KLsT5PYarFYzFVGMeyC",
  "key22": "3Xc3b6QybrUBUG7TqDsdu89gns5bMVvVDG3nCWWLotLaM4jkfDRtnSkhEs7YZxzecqWHQwdsTre2q3VFw8a3VCwp",
  "key23": "3TctaZ41mCHBf4qrWwWaMWMhk6BHcppaH8zMV1UYAwvecELSezjqAunpgFUG3LazjhwewVSJ3Rf1WjU9gPMojcFw",
  "key24": "5PgE49FTktGUNmjgf6ek8kpptKF1yhqYyfBzdAS2ZbM1vy98DFwfPx91ESJKZb7wFJySi9uYCxpeeBQyFUJzLCPg",
  "key25": "akezxirEv5wxPzq3XTmbk9ihqALzD5pzcLxMkScLYcMHkE3WVug2aQdiQbqnysYqTgBWXtwWXPMmCwYeyc7EHnk",
  "key26": "2gm26agTgxZL9XLow3Q49819rAM5T5a4eaMFG6fVqHWMYTaWa9E4u6YimCyjVRi9fhip9HbrrvnLn9DsLJTNmYwx",
  "key27": "3UyBiTBEScjMN1hCfQhmAuFFQAbimvvVgTJWYkTvAkZ83AxVmmK6LSu6qPpm2pvCiSmHGusY4n2N4Gd8f4isuu53",
  "key28": "3ZxVMKwd5vUwSSubx63Am28AkJ5ubPHfgR11ksPkoaZwYerLiGpfVNe2ytHerJpGYHBr2vUC3hJiNuhrMZnAG58T",
  "key29": "2DgcZYeFT6FTsT7raymEV3NVbgiHrX6wLm1e2V2JZVM2D9Tw4TEuSksSqDwdJ2sEfhoUmHv42t9PihoS8PDczAz3",
  "key30": "3E8NnpcakQ1j4S554aCBWJ9J3Pk2PPTo59LgQMurNVy1JSZaB7HvwSFAHrFyw1eUiPkhfCUgfJjKbm6Tw24gSNzm",
  "key31": "5emcRiqeTJ2AhT6PXXhadTeeVeRahtKx2FMHc7J9XyhZo2v6L7ZeRxGJtNaTrku1pHz7snLmSj9BWfGhosJ2H5me",
  "key32": "3QNt8FBBnoU3iGuDRWaEn9HbWMNJgd2mERfLvKkYBAza9jNMai8XZcxN7F159eYbZX5v3MLfMdRu5VAbiR71csBj",
  "key33": "2Sc1fFXNgX5di9RsV9bpW7CvCaBAJRAzmo3wogFTWPuc4wVdPBHj93N34gHZ7FzPwruTBvkeKDmXd8BqT5oRYDTk",
  "key34": "5M7SrCXhUhFNXSUFahabYhVBcKX1pJ3JkZMU6JoZ6Ud7iGw5oA14mKZhhmNscw72Aoqi36ZK8WQMSznwQm76VeU2",
  "key35": "5vq18WYwdVS78HpWfv5Vkv8jVkckZ7tE8ErTxaxYN2yXdZrWA5ZybV4VHaUSMjfTZXQD7DsNDoJk5MhRYBxdoxJg",
  "key36": "33B81gTxPGt9eQb9nSbtqgpRmcewPUV53hBpi9h3KNaAhm2YBD5ALnN2T6GmZvaQDRFAZw9if6rLfsf2gJnJXxzM",
  "key37": "4FSb2SXzEoMdgxMgMqGB1ZrrQgKVSKSKLvCp9vVuqpWuh2KsgTejwR8pQQ9UteexSPPnY6yA4fPdJEwEF19Mxzqv",
  "key38": "64Bc7LAh1xk7pg5thQWBZdZiybjXL45y9oBQpezpJNbg7oQUhpeXHV7HRixHDnBpYRYps4rwL5gNmeUhkWJJCmc"
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
