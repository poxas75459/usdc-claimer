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
    "46rjHNeHECvej5VFcvbqXFKtnoVpFzdmjSvdbJwANmA6D2rQ7V4mFB5xkiYttNUvp33N2Kan687yFq3LyvW9Ba5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aH3rowr4X5q8a4JiPJv5o3d1JMSV61JeXWT4BpDwG7Fd4c4VWFzMZTp5kYyf1ENMMAvoz1A5sMy4DExWwYhArsS",
  "key1": "5ioGP8Ctza9BDaqpjUTgvgd1DFdvx9PTek7KZCYdbYF34t1uUC7rj9fWiYdqEmq5hzk82ALZUCPEiSVRjD1U3nfw",
  "key2": "6rZXZ2c1iCK8ngtbHa9YVXAVhYqmuvk1mtmEVF71WqkXz3gQDwvyFAxb2nVG3vRraebgW7gxLyU8kEDGxYE17Ev",
  "key3": "4SmGU2SQx9d4hoshe9W7rWYfQoFEbs8e76imqSvJYsk7N9gfRsDBcZHctmGdvSZp7qCo2oeK6Y8CRJ9RR4CNzMBK",
  "key4": "XqfAkrKXf2Y5WJd4KpsTSEWyz9PivAPfWCuPQ768PA5au2mKGHm2ZLZau58b3RLmVhy2TgCPemkKvm574tx2SWy",
  "key5": "2CTpRyHkbq4VFtb4eeFisy1DfvYmnd2iJDrANYdsPTvRahZN8yzn1VaB87JH3AoNVhgXK3R6kZt2ZHj6peQ6NbMa",
  "key6": "3WCYPfQqP2jMQYuPheKF6YrTMA7n4MdgtM62iVGcqMxjdbEuhMsL3E3NS6CD8FD1QjJSJBzGBmipJP5QjJjSegb6",
  "key7": "2tVe3QNwhCJm8W4bU1rvzAEPWTAeFPM7GA3tNa8pkvMNAM3paV7uegpN1vgsCAhz1aXuEwYWT4jnFcUqi5gXLFsu",
  "key8": "36XwHPLdaWMdWze8Kws1U8WAgndALJrRbCYQAfDbRtcUh7cxsbBfj2VhrMYRyfdX4ftFHG6WEPcbKF7z4VWizJ2B",
  "key9": "2pU63DfYM96aEnzbddDv7qqLncmEua3nHEjDJErGArowQ6kFTgWEdteh27oXBigwiqJFefeDxBwL698nT2PiZdzw",
  "key10": "LFHyFxZ3TF5SCw9mJuwafKu2r2LbvRvjkFVhmKhmHsCbP6f49GNUUXnvWfFBxGM2DQCpcsFMiCja38rHmZj8Bbn",
  "key11": "2t8q7En7yJQT4CD7Pafm31BE6YpnfxNBHmUGGYuDpBWRmWLyqZPoNR7GmawiHS4vmiskmpRSv43i9gpKh9U3K99B",
  "key12": "2U4T1sPhJfU7RzwutoKALC2Wi2PKV9ZhsawWe5zSum3pEG24mvrgFf1KhGhJZfeP9MtTakKF8QWxMM3AMcwtYRzy",
  "key13": "332zrcpaYNi4wYL9TELnAtK8S3tmWqArogzATVomfVZSrRsgtTqxBMo4THYUE2xsuTErinsGdkEubxTseF92z8GG",
  "key14": "5kgDvKV22Ad95hafccr1ceoUAdTF6mnbjoJ7fvCMiB6FfHp3JB8p18usYNpY84YC2nboupUcfVgQFv4pt81Vy7D",
  "key15": "2m9k3UXUSfq4s3Epm8n8BsNKuigcgH1BFba6EDoRtuvukiS9uAKEbTU3Rnn4QCP9rBXdPHgNRpusUYbs3UEtFGbB",
  "key16": "KMA4TeejjKDciX5uEJ7kSkWhsCjY7K6qVABQ66qjLxRnnkG3q7NJXTkBZtnAQoHeNV5aUobZfjTUawSdsktd4Et",
  "key17": "4H9YbQDBXCRn434FpZtZpwGZugE8FXyH586enazRmQLuBB92fiKCEcb5CjDsuuJFPAeLLhTtPQ9KH481r1UUhgra",
  "key18": "2Qco78D3bG7UYhLESnsiFMBfWtU4vYAzMPfxi3JX3QEShbryXNR8hV4cV4XXkdy3qvNSRXHvudruXuRSTbMAzdRX",
  "key19": "2JxnKUUnwEyEmtiiC62dHnYMMRUeubpEX2bAzcmd5zZGfHdmpqCF1jDdL2ikzWnto9fu4sQiifAj2zPMYh6GkeLL",
  "key20": "o3gzMZpbYoLaN6TYRr9zLEDkN3xyo1HKEDrnvGxytNH8PmaVvyUbDB1r6S5jEGhXC84nrmUatv2Ku4SGjJtEvix",
  "key21": "5CrV5q2FcPn1sytsEEnWYAzbuAoSL1DrYdb8msYARk3ZyWAB6yXs5LRzv4wmYnqNrBTxaotqtzwswkWS982agr3S",
  "key22": "2ySLDvjSEzVo5GCsCpgYNowk4nsDicLByEZbr4dprGYNk6MDicShbKQoKkajBJQmx41UWAumVDmMh4pafqA8xqQY",
  "key23": "mWY5Z5WYmK96RtZ87JwrvFYZU9unEbMTvrZDcByZJ6KowmQffvrPdCguDFAdVemkBwB9N2YAWVckXmTiBL3LzCb",
  "key24": "4Hh93Prnnr15BRSLUqLTgmzjX4ywmqrJr7jzqb1oFC7abRPTCuW3o1GT66T599PqjF5QxiSKNP3zz94ibioRTRkF",
  "key25": "3CR6ZaFT3Sw58fGjQviVYF6uC9JPBqtruShnEQocc5TgeJRQB5HybkamRuLb4rFNsyrQQRCqCUEZjKqbg3pohTAn",
  "key26": "3fkdjNEtH5rAwBWf45jWLToX6U9KRLS7U2wGZEDzGnX8spSrPnR4EpbEwzELZuUGswPjM83K5qaijNyA42o2RJdT",
  "key27": "5vfuUCoeveVHTkSt53v6R2a98EfTPxJUfNRvwAdg762M1vVzwz72KQaLLBWXWfPjpFBZcyWkyhFNmwuL15GzJCYA",
  "key28": "3rhCLMNrPRxApss9CsEnKJgJSWdftEGqWt3nnMgtwHNM8GMbTEfLUVKGeALwrtqk3JMAZ6kWLfk9HxtUGjjFXmAk",
  "key29": "8a1FQnG55r2ZTBRcU9XAPNLvCUGW6YepA6d9tQv3vYXVqDHvF31fLbzBA3dNRnYuRQmyx4pqknVJd99TVZnNspQ",
  "key30": "ZQMFQAsdaT3bKAJWEcLZ3rPHDRhfEyDD1qF2GVdGroWX2LVSXtNddtkoeqQu4B3KuaQe3HNVo8usqAuvjSV2Bvy",
  "key31": "33QNwae3UhjeDWHq6y3egLnv3oFGPTUGe9VaAJgbPRBc45ikqv3CNhFDHhvF4zTTxQfdDfJqX3BNiV5re6ZJE6A",
  "key32": "5ZDt1bFXtGcnGGHHa5oNwVGmvpPecuRW8qsEDDBeGvxenC5MNPA8n6ND24DFtgXzsaNzVaCk9R4c4stBWXrwUAp4",
  "key33": "2T8qM9kt4MNC8dwtcxSEaLysu79aW8DNC6N5jPDnB3gV4mh8mNhBLa4RErnQu93hcWBmtGkLXDRTc99oThfA4WK9",
  "key34": "N2PFJUbVA6i49geMKfz94sWvuQedkBdRfKVdEURgUJ5QVpYtzbs2HsaDGRnYsRzbskh8oH1oe38P8aiif1H8bgS",
  "key35": "3ht1CfE71PTi6uSm4dGa9CTckhjBGhfsqAysajwDDVs3Vnq3J8PyA82je8kBFmw4y4AfdDuYZjggpngrED8QejAn",
  "key36": "5j3fJPt4iBXwemzu63iJdfWxFscp6rvEmu3AKwBmJFLiMcqBi3hTnw6YreMaXrHqaow4hHDM7iGFVNJRrLT4yHni",
  "key37": "5ugNGngNaHhJfnJHnsH2XFxANrf8NesUyx8sZ1UqV2w8JNsrnFnkVaL9GDt5sFfC6sUfzuXnq22Ji4jbGtERUmQ8",
  "key38": "5UadGdWPkiTGPG5yt3u54vy8iRE2fdyfKkwPfkSPtjQbnoyNJx4QkdhW4GRjEJwTX5SSLcqPR424mvX8Ud1aGwF6",
  "key39": "2jKmdwu1qUceZmgku4fSescSjdCpG3F9Bdc9FpRTbh5ZQ4TchLC2gBogQj86nBSmJUobrMmvABXsE1K1nf4ensHq",
  "key40": "6mvANGB5Ho8S2btcYxcnmkFy486gtSFw3XxsVEforfKHAXrXXrkCmnPZvHG3XandfesySrJ4EaLA73m266rxKKC"
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
