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
    "5YdvaNFkzQQqLJib5dBRCazpBzYU3eYWbvQ6JG8DfrTJiXWtQjpiFnmBTXPCjyv9BEmREmFoiE4xirPZFvFLSw6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EzQY1JzUNG4nKnsFMQRTCXqMoZj1YLfxq7V9a35p8Lo7KhZMssWaFSJjEWBUnWBQC6bjGSGdcN5PaaKhCq2W8N",
  "key1": "3uTdY3uSimiuFrgKRJVkg1pTsecjnSmk33yivoVRQjUZoNGqi6U3tvFo4oHjKgxvAZUzF8b3TGdPrGpttPAdjR5W",
  "key2": "4X4xTLToNdLWFqCoeQNikVm3499kbtL1v1e3ZYihV6WpEwX7GPcYWTMhCBqtK1Y74GAtbnEk8CVGD3JQDUsCm8Pv",
  "key3": "LgvkKiCm6K7xMCh3jVbxpQ2pEr39A2zeFmpSA814E42Pv7DxnDQMFQ18SQSzctsfUPZNrTJPKATuz4ataSZkSQe",
  "key4": "3ekPzjCsGTyW2rMo1UgCurfHJNYFqBNJs6mvcNzC51FX3dn3A4cvzS1gMsxee9tBfH8BGHcxbqqy1zBt49mTZGWe",
  "key5": "4FdQdTTMH9x6WFVnjUi7YMZidxsD5HDq193FsJd1n2j2A7BJAteQBfWbTQvGu4qfMorbNyuBZAtnBJvGqBFBNpJS",
  "key6": "37ge9x2g4xZZo5VRti7oJmsaffgqh1wEABjEGBroDMnz9QSMhKMuL7c7VzvzkiUZnPkb37c48555EpKRe4mKLsYg",
  "key7": "55awmJ9kaFbHCPkaAfSvhUXEZV2Abn5Jdcmz3VLM71oYcSjnN9eyjcBK2FH4uMzx8hFZe5Zw7R4FQnJ8JmWMALf2",
  "key8": "3ZPTDkSukDcFZBg2H4pFYFHMaDwr3AaA4w9gvLSqeFT6xkeSQymomkNKoKhPm7CotftL9gRREq3DK12jwbCRneuU",
  "key9": "3q7VwSTS8udgGhdry6Co1pyGosSuTtN5SzZGiBJPdDDyQHnLVStt5GkbfyjfhJ8eAQZUZcVz43eUuf38bPpvsFCB",
  "key10": "2Mxomb5XZEW6o27jjSAHx1LUqKZ4w7b9mMhM6HibufjjFzrrETWUL2uCbWjXsrpbdRaTbJZb43ZBNH7PqhcCcwEq",
  "key11": "4axZ8JqJdbSSdMJrmopi85y8nnxVRononkBPECD9BtETGxrh2EncmS3tadYGXeL2r6DbHB195A2MxJE24r8xZCkc",
  "key12": "25MbJYuoisAPs7zydFP7F7Z3fi25DcKeJ9UQppByxmpmagg5kMuKgmHVrvKUcoHzMQrNFEsELXMSqvDcunYTtMzm",
  "key13": "4EGaVyUNbK9jthehWyDYrGGh9jVYBMX6PGX67RXzikiB2e4i8x4bdirqhFgymfUuU1hC5UTUzB77eaosjmfFHeDq",
  "key14": "3WS27MsJYszxaJQS1xR4wLcBceURE59GR88Q7sCqH78Cv3kzNqvBhZEp12XmLmZTmYn9bgX1VT2FaogZLcr2QM5n",
  "key15": "kPqj38pHbUnv4YLMqQzHWN8NwvG5DuAoadSjBSoXr8dympHq7RixDCEPxaZ9yhTjbXySozKyWokdsGExNA3mGd6",
  "key16": "2ZyzqVm48ARhWZSaicuTUZjQmxTddavvQx13bHVQoCdhZBoH7KcDqNfroAuHJWzJ6gNu9J8iMq11GzLuCiTLMZE4",
  "key17": "67S8coeYLh39EJd7bA5VwbZnESXLFUqZAjZDM5RkXpxvqjHt2VfKQ44BzfKT8uBhPL8ep1t5dsRXjW12bi9TiJSD",
  "key18": "4rQsNbuzKhkkSfkC48bazREQWnzH5WPt7jkF2N9KXs3mrQSFozs8VBRbqsd6cHdBhENoXabp2TptbzFq7b1EREED",
  "key19": "1UrdxkaKM1f3k5E3dSyfyeoBJgQPTrnhQVvxnvrUTVaw4WMV99PpvxhN2Z52rSUW7fyjvVdcrPXi6Ga9t1kgzbc",
  "key20": "4jcJ9KzvEtUAfaV445p9Bgyj6hAtAqWHaKdsb6v23QCtcQjsHHAp3Smoarf2diSGGKAShjzYjFH4hGARodkVyfLu",
  "key21": "4PkwXQDHU4bYXYT5LYxahas32PQDspxcAALQNCDKvvARnUer63uGyw1B5rRRjxRpVotSFEmiit1WyETd2bjfiB9E",
  "key22": "2btWrnp95tCdjxd3E7jYAAkdB679NB9gZsFkcCpsqbr5h7bwrCBfmRr5sCromdZNWyQDqkcd5w4Aiwzgkc1So1AK",
  "key23": "B7EQftVh3tM66VHFVfKpXFv2yNeJBAGm2ka2qrupo8QpsPnPcMSp4LBeCEGcDNNAQ1wbvjKRF17MQiMV9V6WVcn",
  "key24": "2zd3AKzoV2vEg7DYxLJQQKuy6mZeKxiefHdkFzsB1Wd3xMCvAz9btKDtXpSbpx8rVHDzFG63yhWpqcGb5ZUcW9d",
  "key25": "4bosfiyk6axAhesLrJXcNmv2cxxEFcqzUs2HMc2RimuyuKLLbG1ztRjAkmC8h2XhVY6wuGV27kxD4GfDDGrMnpnx",
  "key26": "nXQ3qyMeX5oADF2tFnYhJXeT2Tqij4DcX4LofyESa9QvgnbqYyNpsbwqjNdNDYEUBpHw81nMF6q6sbeApKUKkBE",
  "key27": "XM7cdX91dcTRV2v1cd1dDvafkGnnEpPu7AbjQsW9FWiHSUfrZSXmp6tSvrDjySD9AyaTXUayvnzvvvFs8RodgQu",
  "key28": "28WMC6A1xbghX6RF33yQBkij3nd2Z2MtfkSVaFbWKy8BvkZsxaaqZ7TKt2qqRSSbb4RqHF2WqGmfmdG47q6FrPDc",
  "key29": "2zuVHaynjCAHfQqV9Ka7hdNXyrRuPTCSWwDMJJxzgfr6KUvsWZSbYyq9iUbJDC7Twx1GxHMcFxzn5gAXsxR3e2Za",
  "key30": "5gStztrTEm1zU2yuJSE3sohe4C7TUap3f1UFUMGWW3GPyNbaxGNTkRtyptKjvoWjoraqfxcViRrNcDaXgwSWszdu",
  "key31": "4tRGLv1hNG6VtjULDRQkXd7yST42AM3dTtWnLeFWjNRwLiZiy7cmr4JdRUsL3py2sxbHk41R8EfjmELS4ZrgarfC",
  "key32": "3Yrc1c6QRfMWv1bApEaD73hcaf6MP1WhfrCMu1QqVexar1Fb72Fs1nuuLhLDnTaMypojb1h3sZRJHyX73Q4859Ma",
  "key33": "N4g1NUKYnpCtKnZ3sWbVNrAZ1rHFcjg1rzV42J1hoxDL1xPJUoHjPk1ajmjMmjtKw7Q6GH16yxBZHfJhLfP5q3N",
  "key34": "4XUuHuGxRX9n1B8e5aF6fhLTv2833zCzHHeo8312SfqZfDp4ShQaz7heuaAJmCcQGwqcPu58nt5UkQzkfrL3ZUXP"
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
