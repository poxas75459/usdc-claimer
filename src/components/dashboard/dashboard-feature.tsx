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
    "5PQ833882E7JfNxSEeraVZnxbCG4tR9tiygbhBEAnRygKPpY6pjXpFy4uwr9TBoL4mweda9VgkSEMTqaf6oKGxyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDVYB2AipdXvpRqveUfP9CAsF5Eep94Rn3XzA9zHwWbngzggbG14noG3MRLprhngnY8WZnbptLKgC4ehjEpHULA",
  "key1": "2e7av1DfVoTqCqZvxFZkdv4ue1uYAG1VPYDHpEwzvGGqdhB9khWnR76jadktZ7CubZCSq1hz1LMsaG6QbhQN956M",
  "key2": "24Q1qePudmi5FvdZ4GcpWG9uV3zVuVPvMYVHEqZingbtpnGWZ9cRC8eoa9mmBbC2uWEdF4YyYBRCPKJCZeUMrGyM",
  "key3": "3V7hDj3jpefB24W7KQZdZYGan8cKDos348kxax7p4QbVjNqys6o6P5cUjGFgiLHaddAcJEQRp3qc2rZASufxNcXV",
  "key4": "2vQbyM5r1SC3UwoqH6PcuAfM8MdfTGrVfE2DquDn3hjQk29QVVnVBLfJv6tvoNnwSwjai4FBJbkod5WztXaVUT62",
  "key5": "ww1MquwxxA2ecubPgEgg3RJT6WLCd5qZwAP1zhj7zmRaL7Cb1734mSWkvnbwGuY13XCWi3iL7uJQF4FN8rhX8nm",
  "key6": "xTxi1WMfWVu7JCsBhYNd4QSRpyESvHAXGzk6dUYQeQtQ9qpynRLMdUpA8mA87am1KbPRy26DQCVn61q6vrnkxnT",
  "key7": "3R5gaTeBYjF8AqAD6hwqJhsWshBsiDYLmQGSPJt69CFavsbu3srLDABkF5GW6s1mDtzsYxZDE6Xg7jMX2Kki9aqZ",
  "key8": "GptphETw6usf4q5WC7dFAByGDbGqy3B6eSc2nG3zoxGPD77d5zneJxirMWvREePYVRizJqy5FCFWWJ1TiUngHyt",
  "key9": "65s3d4HitJXEvS89PgWekxxd1A5gzZgdV8FnqtbhNUh5FmwVNbhHNG4ZWb9j3oULnHha51Pw6gtbk5C8Hh7s3iVE",
  "key10": "4uYx4SETJcgqWRNWwkqxZFnqzFqCP92ZD1GLhYt5SyTBbSiJje6KLb3Qu6Jy8wVfUjK957Rcn9ZCAhzx14SBMecu",
  "key11": "5rDTL7h5ubZyaQcfM2rV4TdgkGE5VSj8R3uAxKAUPBDfK36gsKG854qxFYBruanY6L5AAoGchvLAB2Je7bT2eRGW",
  "key12": "2emh8sTX4KofdUGQRCk3DguZ5r53U6H4pvinVzatjHDCS664QPNwXjJntFUA6MtBJ99xvnAuNfbQyDbcfUAAwh1P",
  "key13": "4NvXmK2T559wcEpmhJZyP4YraJtXcL5gzkT1LepYJ76sJAAnWZ1Zwgak1vtcohj4maZiUzca3jackbgnwHj1mScU",
  "key14": "394pNAbWGZy5w8mWczjTex6dmdEGUcTZH7BL88EWoPtwUZK1ov9QkqpyrEm28ovGk4Sj7nFB2Hi86iaLT1ciSqbw",
  "key15": "3kyy4d3AojNZioxsoMozNEGfp6ibcyrLLzoCXunJNx2jAcPitX54oUCF9jJ2aYGra5rHLzra9VxGuoKopxZReMPN",
  "key16": "2ZLbFV5AQuxeHMfCbxtFjhSKzi2LuZxXdNCBRrSsSNbwb94VyX4JbcqVk8nhpcxrKfxK6t3yAB447Qt3RvFE4Jd8",
  "key17": "63wANTdzSJZCtipsB4zto2vwEvQ5QMERo5LRPJKic61LgUU9Tn8kS1o526yxJxME7RWpAGRuPrtrXEbZmCPRL79j",
  "key18": "4sEEJBoZZfxHN2J4zEXvPk65zfUrK2sLDsGAtu1wH523868VPwgvaUjjTyWTzUnTSj3KRvfLnXduWr5f9rNtY7Q3",
  "key19": "4gRBDnJUHXa2cjNhovNLowsi6pRwSW9HY616fz6F8NzEYro8N7m1SJbsNWXPBQxqWHxRtVho3H4GVR7rgUBNU8RT",
  "key20": "35oKDkDqV46FdKQFTay2pSPNaVBwsGLwn1sviXZe2eLk4FL7GmPUpdmMZ1ebLCqmCX1zmDJwzHoKDmJatfbLABid",
  "key21": "S9HQSa2GjJgqiQFMNwPiXSTNp1S7htNU5BwS9Hgudq2BcmPRLF3SYvQpi6HG465vvoS9VvDHjHLwdrBkGWT3Cst",
  "key22": "hKEUFpniLAD5xq6yHDeQEniN1BFXW24KnsM8ov8d1eGpfWuFGGqcNGnE13yBLaukpXawZ68gKHdZaJnRwCntMBv",
  "key23": "DMQ9s9Sg5ZKJ3mwsYWtpaCRz2yfUn2erfKihDtXdHYNFMsgXvhnTDCC1XAyQFLMNgd8P4MKgt9kp5CmDjKQDjt7",
  "key24": "5mw9kvBMum9B6T2iUZwy4hcXjFWS5Hr2VhvR8ZPprtkXLjrqdD2iiwr1uW2mtSvvEqXR1NJBba9xYdeFTQNpQUP5",
  "key25": "2zyBKkLxbZN3HtTpmMx754TZM9Q9qdaiGVhnC6cBjBbH8zWSJKY9GEgL2ktHSpKRXFFpm8W8SFBJY5AStxSp75rY",
  "key26": "4EscMTHKeF1Sm4sdV1QT78iDd6CwuGE7AHYWSNS5NzRgys9Q6bsdzZjprEDdeY2rjBqoar6Ea1KbNCRM8E3PJ9gw",
  "key27": "UmEDZvzFn2vt9R6whBVgS3bq3614mZbnKq4m1zaMumADonWonKqNywJHsmCyzPjxxgh9QVi3Gun42E2jWbdjv5N",
  "key28": "4VfdCq7V1gTSiMs5HbNHdNMnGhXJNR3zfuDaFJ4MeNn3VM5nA12siwwEnf674pACeJDg3Pe4F64261r3hnExoBan",
  "key29": "4ttVGs1v4KgudvqZCeAiESdUURZ7hKFw6nNdciWCsrRXZDt9xVm2w7wWQFJzjcF7SdYaHSA1oZXWmUUnANJn5y1A",
  "key30": "3p4f3pTbLkwHR3d2spbJAKQ1PKaZkGQzDqMeXRwPqK9gh8KwS6sf5UUmBVxU7Dckc6PFrS7WzdaQkXQWzHLYgz3i",
  "key31": "kHpaNnMJgkeSiBeqrcKFADVWs4Z6w4Ar5yCfcuopCTyYrMqwLBQgjtC7fPqfVQE2sn9CUnSk1HMaBVKPaq4w53r",
  "key32": "5Zk2WRjxP5PQi3DEWC3UEgAPaKtRFgirKcp8nBjGKiuU784j13SkhARjhiuJ18ajbxfMrsdeeCtDZ8rhn1791rAN",
  "key33": "3rW9stCQBdhLvf6c5CAAH8Nmz7122xQEKs3ddco7QvfPJ2y1wEz2eoWMGFJzqLpPU98LSVTGuA4mXdgy4b7NqJka",
  "key34": "2RZG26qPu88dK4iGn3gZ4RRKGvMGc6P2THZDkSHo8byzzevNz8kpEsVheumApWk6Q7XWdHShLsLSZRbuiikrXimK",
  "key35": "5TrxHie66XLu5MvuKcsXELa5tmpB2kHtMhtuzoqcugf2mn4FVN8EZhzY1ziAFhGtULPTTRcUePSNNyXHhDP3AVmM",
  "key36": "23Ks7JhE1avfQqLthWD2JYENU3p4BCY7ZAWLbhuppSuSwCtPRcDFwfhbxJWXH2F1pEb631L4yygDnYzPYBZ6KHSM"
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
