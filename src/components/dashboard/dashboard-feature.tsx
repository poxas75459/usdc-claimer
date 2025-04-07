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
    "TkuizmUsogLYVD5UsY5PugYHdSTTvb4GLnPAhiH6og3TzCkua3cpGSd3GcEP1dCZFXVeJ5ucK3MAkegFr8D3yNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jkqs7YhEQS6huQGwJMyRzWL3a8rmyTzEK1ixvYxtLJhLZCF29eFrCs5s6jpMfxTbNdBYTsdjovBTW77X9tUJm6",
  "key1": "61G4xP4iE9GRuqnLRjqSGPw4UJFEbbxsYTUBSdb9NWr7YCTciCHcPewSnBLTgXvPuF7DrJhrk7m6kgTixPB7kLZo",
  "key2": "g8moeyVKUYhRh7iuNXbrxyyXKUAFVoFKPdXKL9NuYgaqMEGbuYMHcuAAmsBFLcovuafyAvFn3gT5XPFWsmcdYNU",
  "key3": "4aUy7CVyKV96BiaS5MQFpTecmCG2noBmUC93WvC1LTbCFcdNiGCVSQKQ8rrAwzdpiAMoZwBm5hnGkB9zzCASgD6p",
  "key4": "5cAnu8dTFoZs2oBTj8psgvNjxTgsn1WtQpy5K17ss3ofCqHyN3euCnPkRor4hfFgTpbKbteSVLzHyMKkz6ZwQc7A",
  "key5": "25AXsPVCbjwCUttUYRnEjQQifTbS2Mh3qKVgQ8M9UTvxKXMk9kqwA4Es9f9rVapHK1aqjxHtwcexhFhgmqwSxiQc",
  "key6": "4VA8FzkvanT81q1MCaSr4ouwTSikQERkQCVccLcpcsCQX25fEsGJWDw4ZAUgLwq9seRw3me3KdKgWFM9C1dGuuGn",
  "key7": "4ovUZ8usub8kMRhkQGE3kbinrMMbWeCsyf5aUVcxhMf1K9r5Gy1ifC2CjRuKBe82UbDZBxmHrQ9dPhdjdBTsoaJB",
  "key8": "tpTeC3WK37DpMtqK9wFvKuWzJALSZ2ZXXccmYCcwwg9Rok2x11uir4RK1thKRHFNyB97ejxYr63tYGYHqYmWNzE",
  "key9": "NDM4daj58JCgnhgvhPZUqewYwTFJ9kyNrBgsdrZ1zsCPPoVFPq6y7CwUrxdMJ1wXFDfUSP21Zgt5uwv1wSCbcEL",
  "key10": "rFmyEtV4m15JRKZdcTDBwpqDywxwVDMcbzntqg2jcBowiVY3DUk5ygBiNFGTijHXW434XJwapeN6n6YHdwJfngo",
  "key11": "5wjQ4DMJjknNmrfM2oeR1J8s64ToMn2ZqSdomnDhiBWsyn9kFHmYFiVWN17UpL95YUyn6phM1MmDGwyDiy3m25na",
  "key12": "5DoxetHSNiN11Scj6vAZm9zYxW8MtP3TBcMYhAxnPa8fMrXS2293KU4Q9cwqX2wXjcjs62V9DgTWa1Y1D8mUgrVf",
  "key13": "59D24eKG3ndXgtSbs7Zoe6xvVsdqEiPcddE5aGsAPLH6rWcDjcoCbA4AyZtRSHjUZrqD7Y4VX5zaDMx1kgQN2uDR",
  "key14": "2PZs8xs3PKcWWXhVg34E3ZniUvr6xUXTteFSEpv9eWEmgp21ipUD7qTJS2hVsg13Fi35SeDLKr2D1jfQz7sjHdWM",
  "key15": "3PYZ5DqiE2d3WTg3rKxUYnUAmeDzgWefhnGo8fdawFZk9916zo9HpAu4EMfkaeDUQCQ1nZ7A9D5FSoECBRMaCzfE",
  "key16": "5N6xPh5FBXfogCQHX9pC9ZYQHtCKiwQguK7vfLpqSWZJHKz7g8CsxmdmRo2TgkAdrmqSdw8sRBjVTB42dECW2LrZ",
  "key17": "UTPcyKChB2bxCiL4hcMJX7qXNDUrEsQxTMZGGxRcDCnQAjGh9mYCxj7vSoWywsLQC7AKFNZJE5JE9Nj5J4tAtBJ",
  "key18": "2cXXaSmXDiCon8UehMJgY6Q2EHFMmNHV4H8ofr7Bp8HrHJ8RoEkSHyk4Bw6FQqXtaRa4dtLdqmCUazivt35LQUjX",
  "key19": "4BqMPABtA9ADh7X19XWi6XisnYj1MP5gR9UYfkT8bq2prZPprWh76ntR1iVyPksL2NHsaGjGKK12z4fpGbtWpWmx",
  "key20": "4S8HcsHgaoJ3QJh59VmaP9Zcy5dmeBcSA8H8uMwMnm48F2VcouAA9GLKwXRsCGdpzw4xEXJu2W7izP3TTxBgYh5X",
  "key21": "4q2NwizBreuYpRAmTiA8CZLKMQKNr1mYDtMFPqhyXzMsxZggtCFQRoGRxTPyQAw3KZgP6sQqHRdVVTczneQo5jSC",
  "key22": "63ZaYCSqJvMjuxSF6B9qoyX92deCPGFmEhB5KLPKqi57m2cLRaNLNCNni57w4qs729qzxdRnhmxHdKzrPdrtFL5R",
  "key23": "uEM6SG5oktRiV1WaNZQGs5e9y8yCPVxsMy1bZSuhjmU3ouhJ7vDkGdbV5wQjfLL261qiXBHa6oQb2EYgZGCVZiH",
  "key24": "4gC9RMNwxPXGMT3fpsbWqKabGLLAUi4gCvVy61dM5NHUJEsguxHDEjLVMENEHUuVo7Qdd25HRaHPFeJegyjokUHW",
  "key25": "SVKvF2A1D7fNbUXfKZQhEWiv11Y9MDf7nEaPSrt82JNutXzHPoV7ktnthEFfsuEuqJGPUzuSvreVyf7XoydLV4p",
  "key26": "5dKeJ8J6o99nuyUV7a6P1MDc4Mb18qRPbaEXzrgaG83GLdUxf5YWDwgYYKZm8JT1KKBjNvKMtJMhjZpzQ5VE7CyE",
  "key27": "2Br6b656sHxvmXCT8ZH9wB9dnDSeTVJm9oHYEkjEvWzKZGtYRQNgRvtRtu3quotDbPBruk3PXGCfyxkfmTy34x9q",
  "key28": "4KKs1im5mb3G7MkdtLCYrdnE1M9FSmYViHJQiKpfHtdMXDghDNTY41Jo1YZu9kQDiZRK4n2V2B94HfE9NepYnkR",
  "key29": "4qotyFDF7n2o9pDf42gTk2Sz9JNZiVbkvh9V1t23NhZJoEVARqwnpVmfrDEw1YpQobv2NojzWDV7mvpaYhfdcTcu",
  "key30": "gQNA7SwyQCY2D7ibBd3Zd9vRRBK4VnaFTJkrrZNP7m4rHhgXZt4px3tQHeZcDyhGpke569bCA4rVL3BP8zn4D7C",
  "key31": "62ijPCm3fV15br4LvpuFEVZixzn9ejUsCo4nT4DpJ95JrTji39PJRc7C2Cx8fEpEG28VQ1emvSVZZEFJgdnonqAR"
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
