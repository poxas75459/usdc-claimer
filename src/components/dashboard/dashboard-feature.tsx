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
    "4yLMptqeqDFri9LehhmQHbz3r7LYTxHRrdRfb7tNY5ubg6G5eh5yRfq9qFxGNxhgNKHYA23V8asZy9z95AfKKdLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AF7dXmodQzZbi3N7kZnPyaUb89W4KDu1VyyyC8KdDUwQUBBKF28SBBd86iT6dQpaLMmCgWSHChF1t99HpcyK2BN",
  "key1": "5MiZEDAvgXiYG1FawixAM5tpmTiBoGPUWwG5a4uCwykXvgcEXC9v3McjjqxaSdmhfknzKjKe1fBomqBxtt7NyVML",
  "key2": "4yRspNzAAVRVKLDayVbNpdfHchXDj96hpW1egYt2TzQWn8zF3fHTfL2PtB7MV6ztgXPhsJPXasP9E9prR8Bx57y5",
  "key3": "54oCi2nuJosqnnciGVSgQLko7JDeJGGgbnxEwwyNGq5ctX7fx3JMsGcfqBr9x3Bg48SDWRrdJvYjsanqoCnn9MVK",
  "key4": "3J9wsV2JENWdm8X4nHWUSFoDFQpZvATs2Z4FkJnwMRZhD6P6zUTeJeT1A4btmsJ9Jm2y826B6nURvFPuaNmNot9h",
  "key5": "22aYB8uL2chpeTfDFk5xf4NBCY1KzYfG1B6smZs1iYgvLz4GnYpFcxrp8a4PBryXSTZ8wzVWcAuxgDkCr71KyXNW",
  "key6": "2GkqxwqDep2J5pBzzKKzJFzXyjbJGtWbi8tVLjFAUCV6fNzDnR2KQvoGyQ33szsSJqhG1FkfP9bAwCQUAq1L3GbY",
  "key7": "DphhV71YsGywDyyJ8bfEbFEC3oAkcepgqg8Fq7TJEva6WwHVf18vzMpAJ7PxiW6q2ky1zJPpy9P6qwpenucmPHb",
  "key8": "2AwhdTuo26wkP4QK3VSBVdgKUokNfubye2S1RouUpMZAZgD4WERZAQU52NRJURvAuNayKc4mTNLLhT14Y93Rptwe",
  "key9": "4pfZHgZyj2KjmCXQ11BKFis7q5Q9iEQ8wGGJXkRUPXQdEMnB1dCV3E8niaHdVhst7mUhNapbH5yHy2Wt7to9S6Se",
  "key10": "29cArRFZ12tnQb42SU3v2w6qejDyx2XzYDUgdzZynQyAkVdgZZoHdy9tfph1XSagkRjmSrnkSJ4Yj1tzrGBFT5tw",
  "key11": "29DFcKTBtmeP3soFGMD25rD3WuUuMd7Gn2y98yuAPMtZAQ1bcCmdyTjdsU8iA8LyfPcrCjhJ79x5hjo9hxa9Z12D",
  "key12": "3prTQxkHrcehXw8JzwYkkBSpzFbP2YyzXZBxA3perFN6NfxtgpEMWBDMCMi7v652ixipuBsb6AXh8fTiAL1ZiYLr",
  "key13": "33oZxed8SYSDQsQKw1UgxuseiDRewtnrQUbaP8FACkZjU3J6RNfWdiQzauZNUtTmUgpVGYJNn9yhFgAjS83XKMQK",
  "key14": "5MGNQ8QJsGZLyNGUZA578kuGtJSFwzqAQvQR9xLvtnEPeEho3uU49jtdCHEwXdeMkMf3GrHDUzgZVrwp2fk7TzrV",
  "key15": "567zEeyrLMpjxxaoaweHQcJrpL5JhbeREv2W3VA5x2nJGLJxCyPgsZungS9eX6ZYTn1tWmidpZecV9TwSuG919kY",
  "key16": "shq9SGq3Lpb2V57P2bv9joxkVKZwQd52LSV9jq1wnqSK5h2oqccWXehrQd7PJkRbCBY1CUcFHMufS56HpkzJerQ",
  "key17": "4zuARSAUMpU8wvRcKaAJ73gjfkeYcacXoGUjJtsyDXDuigdK99p8Nc2noHyfL72ejgKYXUS4yFazd3SVf4BBrKiq",
  "key18": "5zmDU25XvDQ8chmRaW7FJT2jr8bb22jYsKJRcm1d295pYgd14cbme9bziLQZSqzGZzycUBxaaVVBi6eYZUXJc3jt",
  "key19": "3c9zdr5uEQp9QtNdwBj3F7MkfyV1U6qjEmGjx351QwUd7L9fvBKukCxwkFo83ktNhfd8gUu2JmCVSfHt4TknuEcq",
  "key20": "2scWsdCH778q4jbUuRfep9vFxbFzck3GxPYAsPHvtWvH3LHfTHueMHfDRScExELQaSbuUuWgzEdBEXe4m2ZeHqWM",
  "key21": "5s3NqfhF1rzs1iwEeRf4gjS9yMSmXrtTAiLR6uB1ZBiVkLGAJ6LRcu21ADmZqCURni4FyG4ocP8FJipEyxzeq1MK",
  "key22": "4ZXrWXg6X4uM6y9YZYdZEd8VjzLdnCvnZ7jXkAy7jUd3Z9urCfTP8JXqXCKbQJZatmFKQ8jyc1cLMJKwaH4sPhQ8",
  "key23": "3txjjihLi8us4Co7YqreTDGvWx5tU9WyCnySK1iHiPSTwA8n2grNSj3DsdA9ASZ6fiNWqERLfjqJmAiDSocULxFv",
  "key24": "NEbSsUbSHXFsqy5RVchxoS3qHcTpwvMcPCfkKzD2xmekscKdVzEkr8Re15V2LoLtjsk2T9gfr78C8GE3TkwrewS",
  "key25": "4dT1d9MfQmsgUfCia5ZLsP1ET4gWVohw7aaXbKkcqKgCdzTdrDUR2ckgtnWkfb2fcVcZSNLt9fHSWtHUAVvW32HT",
  "key26": "28QHsaSMEiRmSg2SiXES6tX6i1qj7WhHXdaThox6zc2bHdXgXv2nLCW1HuRpRfCVmqzDqduDP52TsViiyyQu62A8",
  "key27": "2eiZWhPZ8gMYAuUkc2g77BGVMMPa4xhJwuo8MkhL1Gzhbd1bTGahhDmMwKBG7tiVVt9Ej3iXmtZPvg11QzpWMXZC",
  "key28": "58Wn9WQ8QDgsesBPwNyaY2Z5qVgbEKG38aBvHkn8wrVqfLSV6MoyqGL2rhx8TYzZFtrREAC2zhHizNWKpmTygT1d",
  "key29": "5gF4vJd5PhCqSms79jzZWVCH1d9eMh2e7rUaCnmDhCtJwTsfdosmQx8xKvmEDnfbgECuGvJNdZmMfwhQ2Y119Bdi",
  "key30": "5EY7RwNreLtsgFJS2ezfM6a1qUZKxmYnT652JKfRHFpHjYifPkw1ZfLBM9kqVsxvnxkfXks4b64CPNkJibHvJ3Ph",
  "key31": "5nQUT3Bg1V1288mqSd2ZdDCeideQv8pmaZnN9uiZKiUTxZbBDSJHGFhFET5VXSkvBmyfGr9EuurjoUZ3vgP6kWpe",
  "key32": "3gog88a8bzrY1PdmpeTEswDzxcbmmfoSjemjJYD4qp4GqjLjGsYaSMXbhB7Mjv4SVvCHaoE3vjTSfpqpycmQxoGY",
  "key33": "25uiPYY232ZRYbhMt6TQaArQ4PYe8zM9vyD4HTrszsa6jYyr9Pb619SQosMeC5tSnVPwH4hSzGFoz4ybHccqUpgW",
  "key34": "2RKs8R46xNJekhbKAgb7utiXb78ynW6JVDaWb8QcQvVEj4CDvCuEnX4x2fjqQar5XpQZ7tHggKDpjjxoT1TKA4qE",
  "key35": "347LMMCiH2L7N7LDMe3qGPBiStUA92sMjb4wfuba6i8WPStUKobdqezFAbUzEpwWRcWBZrYjWHmqMZBMks8yAzee",
  "key36": "BwcF3bzyQ645aHFTZLEV4qekyKQgwLbuqe6Js5N6bvgXKjUV2VzFom6AkoXbfLVYFt9P6nfqm8FTf7LQWv7tf4b",
  "key37": "3Zf2zPb3rY72CRKpRFnS1NmZYgQ8wWXGV5YfSqouGgjmg98RyDNwt7mR1aYMo6bNy8hrcBhcGTLfzvShGJnXHraU",
  "key38": "5RGAEqRKp5GsvLZnc8kzGQVLp4nK35xfeU4N3njRX2tbjenGCSaZTyxYKFg9Xh5xNjwxhoqhnZb6JJah5RYgzUMy",
  "key39": "2nCDD3wdxYX8aQjz665UTu1Qe9BCzptdjas8Z45DL9sdDaT4bcYX1b6JZe8BLyGh7xU9YzVhuFuNeebqCY8fTBfc",
  "key40": "2y5zXtChv5ifKEmzv3xsW9YrEWuB3mqYT8VQcs3qPitvm9br2JQV53T6hT3rkDs2vGxX91jPBDBndKUmPrRjM6LV",
  "key41": "2c2WLNFX27oC3Lr6tMH7C9Vzpm1X6Ly6pZJJZcD562ydvmYNCZ49MXip9qt2FjApoCnySUU2wb66XToFnHh42DNh",
  "key42": "2tKTmTYsiAMe2p1iwctSCEFrn2mK18riCDtBTpBrS2bqByJ6PxZDDBDjw5ieQfPJvRoZA22QQNyJsMC3jyBfkzU8",
  "key43": "gJa9nks8M3c6286cAdH5EM19fwCSr4U9Z95Ak4JrA6yp3EHmxT1AfisHyVTKcr76PTGHdrFdWeroRmtz5qGo7sV",
  "key44": "sye6qJCgCqc1AVurTAZbwU81kTi9Y8hAwggTLtjjya442HuFqfG3Zm4UNJwRRm5KTh29iuaMRm4kuGpG5mZE9KN",
  "key45": "2V8iyCAGrDdRNEPRFBPVNtKRptvdcEt7EPavUgM1UsPgwAS5UF5FT24PEZp7H5Ke3bwWAywePXSCuGZZSdPwnoTn"
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
