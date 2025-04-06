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
    "3Dzd7EzCpmpw8u6DPGobVyFQnuaPmmK9jPhAsveUaG837qGYwZ4QzZgyFFx6kVhohWNtdjPUm19pTGpX8foyU6Vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569VyuP6DCcyP1WxYmnBaeqe2kQmNyWTUT9Xx2UXLUozscJMQXvormoVRRrHFjhZ2DGs97xokab6qPrAoYNJicJm",
  "key1": "2wtBiVNMmTAuEBYEjuNdcJXxUwkn5d5ANvSUS6HLpUwz3wjNDCKRHYGMaA56xBCgnotFiskiMTP3b45YQcLvAqaM",
  "key2": "3fP1eC6axHEXfg1SXBbBD1SnsJk61LbQsm6knL1SQRHa7BXFj4E1YLq8SiHSWyML1ZZ5qwJcqVYgeuBjCgZfkAH",
  "key3": "3xNDfXDME7Xq8vzRcvzLuUTwVDxaZdrPdndvzHRgB1LrU7a7tCS7Yf8rwpsr2s278yfjywra4awvtZinzkK6fktX",
  "key4": "3xFLvmrJ5PBxjjsmTGex8wGMQR176aBMHnhbpSnzrsb9kmK3H2aaVwMri583BwTwS4nwMHUiAbNCjRi7FwoqfoiE",
  "key5": "q6NYUnKLRa7KcQjmzz3JZrnixnHBNnDRdqgCkmJPxkRk4GSTupWm2metbYvpCAZzBT1a74JyU2KbPY9pXLNjas7",
  "key6": "3WfeGj2xxk6bZkF7zfpEv2nmGFBFELDx7gDbabEJ28yUw7eMSUFTMbfzovUU2VitF5HN7Fykyjb8kd3tp7uHdYgW",
  "key7": "2xz136hzxGTpXWpBgsn4JesTbzqURWrx3gKBzAs9JFfqpt4JKjsJij4ykvUYLXm34xLvo4Bs4CMFiCAcmufmsRSm",
  "key8": "2J8FcUARLQAwcppUAPamCTX34asNiFABs8BTcKKLPgRhsqKTpqhZVodMCKYQCajTrRJ5HZysnAYWJrg6S7YNT6WD",
  "key9": "2M8CfGePrKmdsnprKgvooPsPkcyr55pdQsJ6SWftqfFXpYgrZmawkcdW7S1Yt4WN7eSN388Ekpj3vKDaem5QNmgg",
  "key10": "DcEZeRVqU8NDnxcn36f9Ds1AKyKvWZ9SHtjN413JA88GcDjNEsR3QL22Kb6e6g5YsEU4xnzeLPZrvNibBYaAkkA",
  "key11": "5tnRPbCy4ny5pvcTWSaT9XnDKrcjr38G2HvjK75RbDfBP2gmdvKh6nvLdHyBoPV7zLXcAu4gSqLCbmHzQnGtNYpD",
  "key12": "4EpyyYHDq3tgrV9zvW533JJmUzWYo3XfoBqVQ4hm9nq7D58LZbo5oVkm2FDDbUVvfFB8kthpPPv6G9kFRVNSm2ft",
  "key13": "3kGMJBLdfZF2hz9PDU4xNJLedEByD2NqhjYCer94RL3a8JC6rVWkRowFKBuQDnizcJBPjveFkzvnyXZL7zWFtkar",
  "key14": "4exY34McCBmr7fovWxjNbTbYwwcUMM9yr3YazMhrdavqnuoV7TDuWZQ8UXj8Dm6jC6x3Jm7wcKPAtbLAacJ5hBuL",
  "key15": "3LsBFUq7BGcb25PgpXGDmNL9HEQwPjSAGn6MJtviVskNJQh1oVUi27g5vknZD3xuW6AULmLNwswETMaj8aqWEyYV",
  "key16": "4VFjDDYMU6P117qhX16kNfs9rheavNGJRMbEKmRQGtR168UgTaQJmiB4Uvg2vre47Si3NcrGHPWqWXGVSe9BK6Z2",
  "key17": "4Q5VN8ZHgoVZiEKDLJ82xRfLsDQ4wpCgPR1H93qX2RDNGFHTV1jv95Snjw9KufV6dgHXamrPHouR7HCBw55o36Sp",
  "key18": "4kjXHekXYpmZejH7W9Lmb8Pc93YoxaUSTrFaZZ8Da1MDN6xSiRYj24vEine327paE6tQ4rtmdqQsMjV7p63eoVLm",
  "key19": "3qJAPD8qD9ieuzzcApVf9GGmL3J8nVtEetR8JXyQz9fS7Ntn15c9PyUf1TWUxdhMr7My4LVw5YqKQCXjDoLr1kqs",
  "key20": "4tJCot8qR5wH7LsAMkk7v7nT4wuJLP9FK7ArQR4MEroZFYqCR3C6Di3HGocUFjV3ENzwpfPUSRwtktxL354Ts7q8",
  "key21": "35qLs3ctxjRLNKvqtdQmZHCKbRy8ucXXDgfSpcB4sJnB9be319QhaYrnh7bWpZVugxthpqPXMthxMErtEK8RPDoa",
  "key22": "3nPZPdfKsAsoNk6zTK1bLoPqUxKw3BC6uGGQUBy4eoJPBZ1xaHV8JKq9ZseTmL95ZUFJPYL3diRE8yXyDQ97CXh8",
  "key23": "X9sP2eDe3f1K8m58aiA5cjRfPF6mr5uGC13Kw7fcC46MNwJLqzYBQUPDCyLdq1GSLTpGYoti21BHHN5djsin5C2",
  "key24": "59XJeb13cEBy2C29QAT1ciBCjD9ebActh3CvDSLR89URYEYtHgMkyxWnyNiuNSbwXGfWiKY2xnbjaCXGKMoX8jfL",
  "key25": "2hNkjHQzKxTM3D63aDvdP5RaKuKeBkjQxADp5cZM5pSgZYBSZWPqn2SRCBGcP2EVbQfuZq7YTugNpzSjQ3AvN5c2",
  "key26": "4vpF2U2eZasUTWizi8LEM2kfHeMKTgzMqMoG5KhhWbPe8gt153xtPEDoLbR3GdjmbYrcwvQxycCRCLj5S11pD5KK",
  "key27": "3QoTiArJguD66hRfLozDuHCJLtyzKsTjmweJJpyyaX1ZU3hbXh3EkkokHubFgWCLrF843VrMjUyY9Yr4cxgLRRQh",
  "key28": "3btUgabJ1DZDHKLaCQab9e9DxucHor1vtBJkTEMS8SmVGBqDnMVogqybNnPxCdyNysShNPpLAb6dmBZHXrYhJAto",
  "key29": "3FYdZYBejdPUY9HeT2seRS1Bga3TyoqV8uCYiWimJuN7wqc77DyRQZv4PZ5ZuXt3Ng5SR2WvEg4jtZiPPGG273p9",
  "key30": "2L1rqGmpEQ6F6i3Rm55jivF3DCfxyxPQW6wFAp77Ujzxk2ficUaSAb2UwMnHTBxnUxEG2rYxtyELQmGpwkTGC9Kz",
  "key31": "2chkLoGcxMkghT3mMCswikp3ZJRafBjsirECNiAHzBU2NBbhvgnV2KjoHRT4XYrQncXCgbgpF9R3LxZ5xzrca55z",
  "key32": "3YeFx7EoMKJo3PUGPEZmaM4NekC3XHzK8zyYdedM13dV6B5Tkuyr96FcTvVGjxCeU9VH4sgHHK32JFnkqTksEBW7",
  "key33": "2g2mjPKWcN8AcGnMoZtC9kAnBmMrqm4mKvPSiiYCjYQj6wXsEsoE81MT5GmJ4re1oRGd7fSufm592p9Pv4Y5NbpT",
  "key34": "4fKXKbPbCLWSoSfis1YCMPrVseUk2AgsE21XoVcLTz4hBFJFFn6LHXQ3o8dW3MvT2trnEgLQeTD9XuxPEx2JHavd",
  "key35": "FNKENWtbtXKdZ2p7uvkhSbRY6DkoFb7oW9AbWT8WEBTSHDwZZKifoLkUZmbKEBXXuFa4w3Q1GfGm5x66z2WHE9o",
  "key36": "12A9Ktat3UJoxmKTEf7ovvM4GEJEpPLE2XgB1RExFiUsDoNgD7SJDhgXoZPCScWcA9BgMHnZmGt1phDN8JnUgpqx",
  "key37": "49ykygHK84wms8KXkrc2exPbiGpjTomrpXvgVNzBG75KA1gL24f6567GHPbF8ZTjuv1hR4V92jaEhciALv6hJhTN",
  "key38": "2kGaggibzx6xoTXZ98WD7vRsUN6G3keSfCKwhn5A2pYrHeRhoQbPx68Gfnt276XZzmVG8BtHhhoLxztJfAE487GH",
  "key39": "2xZKFbGfKUvbhiCVbNJpMYfnjPsjSPj9GJFgHYwXeTdVNrKMq8oLRwniBhBmf9LPEND3LEwavYHCABPWDAnYRYEx",
  "key40": "4CQfXYoU7UwhkVFB4qitjUCriEzS8Xw1RqMgc1qFsShzvLons5yqGLgyfDXCeGJrybvSbU6oyyfsVSTyQMGwH1LX"
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
