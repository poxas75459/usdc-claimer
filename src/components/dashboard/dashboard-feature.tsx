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
    "3mH1ZLn9tWrGah9jpj2Pvj4W4i1qGmCwpmKoKcmt5CzDjC9jM9VMG89j4n5Ezw4G6RdmYcVm3CuiJvst6LZR9Xy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJukH1gXTV6LWNQjfrppAqvXKSVDNfEFwEgRAXipGWPFxgGhwCFDQNxTAF9MLiDgDrzXZbtg4LQVgxePDyi7LdQ",
  "key1": "5u6Gu4AbjHndibasE85bErgbznApHGUsSaTcA4RLfPA5HbXz1FX7NdECDRFiy1vd144WLnsStKAEyKJDmo3ggaah",
  "key2": "3uMqMQhdQtaHJpfr7XjKiZhUDdBMpHqtzRsS2t5ehnTVW6VNxS7ae3nrEs7Hb6WoQVoU7RM3rEuGCshqvuqSGmGq",
  "key3": "UootRfm8f8HsGPTXQDoQWCpydxwKCTNi3A6CTLKXaauzmnmMfUr1enZAr31sFTXV5Dmb9DWybYZw6s74UtfA4gd",
  "key4": "3LcMDwKPoVny5Y2zG1SqSuwYEgUPcmqQ88ThGcaBzuAQZnwMVQiG1Yg5JbneuDMA85X18N5PGm3ZnWZj1zBNrXXx",
  "key5": "2u7Wx9Xx3BiUXVNk7aAdcC3JY7UkP1nX1PvNnawEWxpq1swsLAk4z1rCTeHLBhFy7VWgjBSEG7NXe2CbwrzEzYTr",
  "key6": "4DtBHQ3PwixaCPrG8wF82ZvA1WrvxuD5uwJLnw5brWssz9Uzhv62k4aSrxyPLBRY2kt1fEhDjiJR99jbd5LfC8EK",
  "key7": "yBWwzeTJt9gGmEXZv1bohcN7ES2gGidrJ4ybQbDJCDpoGe83Am32aw6cQwPusF5Ao4pP6X4fY4iNjkxeQSKyAor",
  "key8": "5FTDsRTwGtvpEyGdgHz9PGFjbNGvdm9hsHRNxjX5Guk87EYaGchiBA9SFNTM2QvfSGvsjHPm5Xkk2qkjY31ZvJzY",
  "key9": "5fB48VdWg6PW2rMow1GLKMB3h22NNJpS278J4TKYUXbvYvh8Byoqaho3TNwD9vTVfaiLMA3YcvyBQrcfX5j8pBAT",
  "key10": "2t9W8rvSdpTozCdk6CiNgph6CD99HdTgS54YWofk5gLikcChocCfD3rGGzvrwBPgcge6RfcBVJmb8qNbLTjnub3N",
  "key11": "2ssjZ2PSPrew3hxnmfyN22C8gPJPtAokP3t8RLgP1PYV5GNqaKfGQXFXLULbftvKgteyaRegYz5Rjh8AhGwgdcvu",
  "key12": "5o4asM6hbiQPyk8FmBfaTWg8R57Tsh3hGu8LG53hCjDQtjfqZNdYoJ6SynWWzLS64Ck5zkHRTphiG4gffgBQSXY9",
  "key13": "4s1ZkEtufasbVPhgQisk5gJBP9947HkytVrPtpaVqt8fHHvvgNyeoFy7aTm9RQikHuX29XLgYUbj96xPAarvJVKU",
  "key14": "21rNTozeDSnjXjAftdoqC1dxptJB3cRoeoUYci9tSBz5nZ2P5Drrb82mHf86zS6TNLGUCKJ3Rz8KoGQwpx6YL1bt",
  "key15": "4PVUxwAkdNNKC1h5pyvwcZxVMoLkaT6Banp6TnV8rtsW22NF6Ljd9jEexMyMu8cuvtw4MU7mWvn59CNQZtAoVq9K",
  "key16": "3tE7opeJe9QU5wG7Q28jxpCi6fkd4pnF7R3M5GM8nE7q89BQVyKvrDJhm5GVJu8Cx3RmT6QC7SB3RwgMb1Kbs7kb",
  "key17": "4RUpWhSvdReZ5mWfrfBwqvZSQgaPf1M5Ptj7pHscGBxfKh8Xq95jNmUjpUeN4sqf2mZrGFjfSa9STiZQ5tnnpthb",
  "key18": "4WdHFYaPBNF4bVah977s4f3544rxpu8ESRh7Xvyhry7YduHL331GYoBLAEacmiTVwpZtpc7cRHJg5NhNwjEan8zv",
  "key19": "4LVe9aFECCf1fZKFCPJ2UJ8EZ9zxsFkNqj1EYv6WgAFGLzSaM3nqZAh44Ms6GfJ4bzjSEZV54TVo6SMWQrfkogRp",
  "key20": "2hDDh1gWdj55EN24wCsbgrKHbBGt8Pgce1y4jB1MVU8dC38r11omHh2Mbv2Wp4vyGW8pSojK1iobjNtZM2eRFUBy",
  "key21": "542R7wGZfGdZdcocLSVhL8aufRMjDQUzCAFfewtCZx2HYzqwja2m115ULpE7uDH13xNAJsSME9MaghEPEpuMHJSN",
  "key22": "5S8zH1pfRD9ct6Smsx2Ps3eZtwLkF3SYLBRW4W8e4SE4fWcmfLMjVtvXdjFiqSX4vSMuva1ErEn7tk2EACDfX4uD",
  "key23": "4eazLKveT7twyarLHHW8vPa1zicXpGxp4MQsVBcYcNWoNSHGs8UcTPKcJ5z1C7tuNnMUMxHLwhJcTkyewVkqTkFn",
  "key24": "t7rBgti9Z6aHoP7fZ2851m5Qu9uTFW3Yk93AvvHcmxXRt25rGmgJKS7NFCS16DiGJWdtKnDzX5BqniXnMAAjfEn",
  "key25": "AqotLKXaEfnKcGb92T1Tqfi1BKApNyuwoGve3sawKPzJXvBj2fBQKZyaA3bH6QhQZkaVHV3f88QTd2tjkamfLZ7",
  "key26": "61v3qPzbYmfZMruBBAZWdyMsFJTsjRS5fYpRZkaLD1yNrGovrTFn1cqheM3Jyih5aJTiKRGTazMqZhKhRXA2ijbn",
  "key27": "5RkLJvSmgdjpNjYybUY4xdBv7XU3rFrmz4YrcoqR6eDLGLRVBfxgosZBhQwgD64QJt8tzTaWf7dEAvTi528NN8rF",
  "key28": "2mZcNipi3uKUwaWSvpQRzRs59qcM5gXJ1MqRPvwrLBTQRNfyE7x4QqUNndD6rswHAb27BowNFKtBfg8ih6ozHQMc",
  "key29": "54iVtg4yC3n8K5GoZ3uQqAtJ3rVAJbBkAp6wSXX92MnqGnpUJL6QdKytq7AVyjGLks5XHHviGN1fSqffiTJZYrbc",
  "key30": "4VM7XTnJ9pRbFyYim3iLuezytnYwz6HaE1NRdq4tT16rrAprDyhc9D1z1xkpUhAgcAksgbwACNyn7GH2LebnmhJX",
  "key31": "4tvjBGBNCsJMbdx3MsXmg8dT6qAnSL5p6mumHk8wk4C2TjjsnLNgVT98PZis6Ms7gKk4vNeKn2QbKK5yeUCePJsS"
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
