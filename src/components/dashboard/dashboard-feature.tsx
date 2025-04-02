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
    "4ApDTGDXRofAscsBakVPuTasEeFt5TJHB76VPqW7GFwFeUnDwdgXH71CJoyRTmpvgpeLyhe9bNYLP1STdVa4MTeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDbSPE4r4sevD8ZmCu77S6Fmg8MG3mzGoQY7XvMVVda13uqRDbmtoCQTCZiKayV8ssFaqpqaExxYzrGPaYYUjZN",
  "key1": "53FdZ2JfjqKHeV4BrENKnotni2Xq3DbX9LmX9L7hoJtkQwxbZZB5AXAGiJpnv9Ap2Am31cGjKmzrAGyZNQziA84D",
  "key2": "59Aq4d21rFezmXx7zPokUERWevnBDJ1XQ3tkY7K82tSx6yMQ2ZpWxMMofDVoQPYKhfJaXtFw6yHzHYEQ4Wm3LDNU",
  "key3": "26mzKcW5GwrouAZFHAFUrnH35dP7bTD33sx8YuwiDMhZfqddo3eXbrv6o2ruNThaFFCuzwtMjD83u7hjMLNNc3mf",
  "key4": "4krXpu7k5mv3cA5pGwTs129xmDT7q17D91UHy6D1GRLxWX8E6zwUk9hqYD2VfoEgcAP5vmhKxtGpStBpiKMwvVpR",
  "key5": "fiF44gJbN16QD4dE7qnyJouA2oJxoj8Nea6D8RUNFKnVrTwFcCwqen5pHYJvPFsoA4AKGrUUQoDB6ET5WQpwiRv",
  "key6": "3Q3MmGuA1E5X5HmEvnRUqfxAjQRinMLTFUQrSpuyqb5S4JqgjFwKrn7ZfxinJveP3UXzm2GtQdUsi6SwsPNgMc7Q",
  "key7": "4k3cUSk3AN9famyyZLqjr966EMb348P5mJJ6HT3BDb4SZo1izLsxPWBP7XLjaGaEe9Qn31VV7bS1AQadti9aCLKn",
  "key8": "486JKjnxiC3kHEWo7Ej8azQTPWL47ScVCyfBPPkYxzucqNi8bHGzNtWk6PPEFgghfPsipK8yB5JKZvumqTfkNXes",
  "key9": "5axFZDAVibHXtfFsUsdRHJATRXpq73KbBwZqjHuG95xq3WKd2NuE4DXMhZTtHzB44jkgvgnzLJ5UencZHrUbtoMu",
  "key10": "LNsjDhyfVVM44mXvfuQ1tRrh32NeD2UNW1magseHfQSyyQVTFT4Ni2sCna97ZhcgD56yUDcZU9EAi199HhLYxM4",
  "key11": "49v6FrqZUBynM2UqNBBDtmcdCZW4RoRXefMkBs2w6e78nCbc8Z2XwCv4Qm8JaKkp11PaVZpgGijspAMQh7LLqHXs",
  "key12": "33uwa2K4g5aXkkh5hSoTC7XPEgkK9jm2vz2cGEE4nvunXMT1ctprZSaEWoBz3NnExeXdiQUUBkRFHMM3EbFyx8Xu",
  "key13": "3Lm45NSELRYNmmY1XVxvu8GepnD2PckProbaH8h4eJRiFLsTjYJo35F7b8SrSLAJuPpyzGfD5wHj9Xg7CYzXssnC",
  "key14": "5fWnt184hD67tbDxvA3VuoY9y1cpe8yDEfuJ4UmbpRLuHFXSzocLsgu4NtPkjpC6Tgy93kt7NKXXc6zfEpEf95fk",
  "key15": "4asJ5RvM6P3DpYuirSFVHLsjXaD2u4c1yqk2X1AHqx8S9jULtd25W1bBtdXfyfxDehkYQbytfAAC7tXMv5Ua5xwU",
  "key16": "5bCGMQettkQgLiAxCR9deSdtARzCX8dEy1vrBcD8n8prGiS2VF2deUx5U5T7iCAb45Q4gtXF7ebYqLDJxaYWyKHq",
  "key17": "f2jEJJWWG2pJFasKmeXt4cPvfYFrkbRQVwFVgi7Hz1hwbiUsjPs4DaNeqskRM2ZnoWDXVokHfpwkh7ZvzxW3cBJ",
  "key18": "3STEVKsULGPzf5WfvQdN9rM79QnZTF9wMZTjvGy3rogvkbdF3MRkD8FW5nN9xuJd5yTn9SzdDWVnzLRoUBeuqQsf",
  "key19": "3mRL7MDwWWa6wtZ7B5F11JyUeMgy7ALSfAxGRoUtSVVHfUdxxk2ctryoY8cnDpTfLXy4QCuSqydM5Hk3B3DnVNQH",
  "key20": "3vgTfUynTnELTkVXkxEp3E2MXQeHSpPZk2L3bpp29nNaq4zwzk1A3Wab2gjbMKiT1KHkzd2Jh8iJbqM3A9DDmo6P",
  "key21": "iSeCe2BdFVV1WMMkkaTxntJU1N1DqUspRxeQ1CboggjLxW1FmBS5acGJxm87A7641mQr8mQnHKeUxUmK4fMAX75",
  "key22": "21U4YeFScdFspswSPoa5cFQqZHvoUTEhEcRjYdMyEZ1NnzvRFsT51JKEjmjxB5cZfk6WtTuRdyiikJ9nudZy6A6S",
  "key23": "KoA6sAFcyRVxbQSkWNCaL2MN1WF38vEjFZ6swSj2kNuenn3K4vdVdNhfauta5ALVArWxYGQD165wWzgNtVzirez",
  "key24": "3LngWktN7twhxZkyJEud2SzZhHSUYMreWiQ6iQBzUcWJt19NGQ8EcoULmEDgrWAEdVzL6tWvtt8m7auXbnntu3Lc",
  "key25": "4d8djcRkYf5Dgt8sksjfTVoouUw1Q2qn2jaDucv3yyKqAhiv44AU6s6JU7YWruR41DwHuTMnT6MCYS8jdeejCXUQ"
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
