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
    "3ryhbmXoHDbZ6wkpDPc8EeWno14K43Jmg6DwCj3vBjJox9ijU4ESx3GPSJEby3AfwwQs3ftYY2QDriXqxyhCjb3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWT4AYwg6CqdccFCCAmttxtFJcDUGvSyL93kozkTkk2HkL3DzpSReXQZ5KPGqs8h3rE7eXd3goQJ9yxZpHM7z2p",
  "key1": "3MVX8Q24wdBq4gpv1wW5cR1aVbno9zFgUT1fATbw1kZ33z6ZNWg3C2TNFoHt2brcGchCHHcL8WjLnyzvENx6p519",
  "key2": "45ySwnrc3L4f7BDV6aQpCDUHv1sUf5QzC87MSg2BvgQSZUqqCixqzqcn9aGwvTWDjFNoPbng46A33MHfKqQerEUC",
  "key3": "QExuGet4HdWj9DTggePZGeYZyNJW19f2Jp3YDuvRAxnXwCBop24vtusDWYbaA5F9NFG4kBAgVXmfHcUi53ue9Dp",
  "key4": "49UGLYj3YoZkDw6Rbv8fQ5ZjbwCHk9DQKdfyyAq1EJymx488Hd2vrCP13BRJifg6jPEx335ku41CYeqezh3ALXN9",
  "key5": "5SLAZcmm1EtjGmsV6WDvEYBqMP9rnAbM9s7MDdmNUGfwXY2rcSr6p8PMYkiYbvoZn3wCR7PtsPtySicWmv8uYMiT",
  "key6": "5ReMpxWcgASyiT2aoRKtcsTwrwMtmzqzK5qnZqtEis1tZ3BDvB8G98LfZJxzbYe5DqsMKo8NqF4h2QTZ6fnc6Mep",
  "key7": "21QESMZuw6aiZj8vsz2VUHVFxmhLeYC4J9BN3GUUR6xutiFT5rRL7VUapeq1GJZkJWqaw7Rv4MmaAtrEWjH4pUpS",
  "key8": "126MzDSwbA7rE988Uz4Lowey9UiHRRXJGhwH2prJ3PBdQ6RKSzqHSK6wopaH1yWCvXg6v5XdEMN4gpp1m91YQiep",
  "key9": "3thg1d78z7wXyZKzJ7F1a9qQtMfNvSn9nMvuPz8pRh1Q1s5CFFKWzpiUN7UWxnhmuRcN8gRsv93SJdXw3uzqfQNP",
  "key10": "n5LKG5y3DrcXoiFojNHec8D2rFeSKF8wJYzQR5CZXE1BCR2B8x9CVM3KQSGkD3X61TBH8KJan5jcnVKrJh2SJvH",
  "key11": "cmn5tc74QQfyHtXNyKLRTRTYdU7EnkBBfmhNrtgTUyyjJ5M2Cuv369oHAEqHpp2sTa5DatbQQSow8nt3QJACX7T",
  "key12": "4NK8j1Wy7Y6JL8oUEoWsyqaA6t4SFphPn5qnC39rksscPg7eHsAM5E27SydAPLJEwNtgS7wuidSWMnnZ7vQrD5vr",
  "key13": "2eKLduzgV4r3usrcvWL4p1GVdPztsVkwT7kirAgVHWmvtvdf7z9oMit9de9DyQJYq7Y5JNX1ELoTXvMxJyzkyCAi",
  "key14": "2yYxgii8AvaxZWoLWP8hfWPvKdnFM3v4KfGdXrkJjXz5U8QpKsZwT4bMk7okN5TGhCT5eBR1nms4Rih6E3xvKh6J",
  "key15": "2Z8zgsKAW97D123yJeYLCwKzr7vuCPt1rqSKiNH63x1DCEYGMnqr8croRPrLZegAKdLhHZvG5FzmAqBAx7wG7bDP",
  "key16": "58GcnTtd4KdUCF98DVBmvTV7o5pKfr5DMDYUYmvv9XKyaqxiSgVNcPTPMMxh9zDrFJyhEDmcpVu8KYULi2tzVbSG",
  "key17": "3RMRkN4mdgiaYijsZ5npfp9JjctPxym6AZnZYd9UauE84myfwz8VJ5NwXmPhtv3FiAhFp5EQCwawPc7ZDrNYL4UG",
  "key18": "2T6JFhJFgd55HWgYKfyJYm9g7QB8QEHSLo7W3cXpqZS1cKhiMrdd8ZZpKU8GSRfKA6CkLoAbwq3uY1W23bxPSQjj",
  "key19": "DzosuPyNjoLf5KrjDEaAtWHZ1GsH6H5cSv2J3FbENSr16ctsn1Sncc91xiMW6DWbtCp7io9QDtBuRHueVQ53rVC",
  "key20": "3zm2CNAin7VPqyEEjxX8NUQWzEgmbWaKWMxBQfu8KHLR3jdPJcoBE3tNe69GyWZW2XTxdvJSGFjFtgxWbfpL9P2t",
  "key21": "2HHnrWHUmFWsq7VYud7Z2J83JS2gFf9HKmEKqR9fhecviHJs7fKLEGuc4DKDap1NYXf58TgAhHNCgh3K4pPAGdAK",
  "key22": "54mbnbU1AKM2QRo6mcTUTkMh3gtgSC8hU366E2Ep55EeESvaqYyAsmTxLUYSE8MhAe2ea1tTi7CQ831bo4yvUDCN",
  "key23": "5pcE8aedSwE3Lb9rt9BncKQtFqbpGfYUqBk7wUu7fTnv5UQHjc2j87rk3KHVYc8Z8R6HppP3RKvEpgqWMAqN1rB9",
  "key24": "3xyJVeXAwRSzKh2dKq359DNBeQhCknPpdzCNWD1gejQj8Skk7UF9Jp78trHFrsEwmAtrFmvhaqAEQC8asinG56no",
  "key25": "5bvGGkYdGPofTCoLjrX4u9BPR9S6B58PDrUaYMXNoC8NCKsfrApprjYWDnba5m5NzcW11ckqvWgdvCUbQm8mYp4E",
  "key26": "5uttTz79AfjTbVWhP1UZcwCFQYTrS97nF5Q5ScRDUjJciav9wMQdqurNcmVgVtp66BCby4CeBJ4kfaqYgYzXzaJz",
  "key27": "2d3XAzYLMgQ3gca8fvZxhfuyiMVZDviXQzo3q7GW2YJbM5irAiwHs2A6tXFtrqGWp7EAv2te7YZQ4oxAhr2JG7mH",
  "key28": "4j71Mv991r6HWAP12Nk6cWR9NxsgwKySbighaCm969r19XspEaZgK6qMbgqYmqAVPCXJsGzk3nt7dXWr7xFGMLB4",
  "key29": "3e2aLV5wdENLbShRtgou7aWK6CyRBEN7FCQUMcYAfYogxB5F42pGKs87rxUFmAZMzDHCHwd5xNByAFPKpHofQoBD",
  "key30": "3q1auBZafUrwVNFfAgGdJ3D6kMMHPnHH8w44UDirbfGkGkjc3yx6SwA76kaTAoqySK2zg2Ju3uSDnrhMuAN3b4Z3",
  "key31": "3DpycnTovxGPEg4Ge7aNGyLcPu4zKwCdZyHpJDUc2ck8r4ciFG2DnnYDCvkDmMeKye8RSEgTtsQhzUKFfkumCaDM",
  "key32": "5jsdAyrYJ44yGSys8DZkqzrR7uX2v6V2nqLp5w6EeU6vJrTuJ3HmRbXimreQv2v1twWD55WDwv2jnYeVt1VSisJ1",
  "key33": "49koo17bNUhN45UTR84VTJyEoPSPLFrrQCXNErhpgYo8uJhWdNhPtc3eG8J8M2HQCCRf5MfgeBeMp2283ufTH7ZD",
  "key34": "3kFR2w9jCysNyk7F4YUg11jEx9SwS8EWVtbZJwkDsz9jKT5HSqiVQXZ4gzGA4L7f1oYFbce6mnodbs9DxChzYXMm",
  "key35": "4dW4jcBeKYQ7pTqNtwWxgcP2PeQmUfbXSyXaUa7qhKAhDTrQiRaNZfzUp1a2tAx789eYQrUUn14Sr2xmyQWfhFts",
  "key36": "3htdJhnmuJQTgpa3UVMCLL35e75kwMsAkPLPKXwRRJj2ApW3nJGUPRAEaiAQnEPtsFrhhApp1SubmyxGADoAmu7K",
  "key37": "3mc4S1wYtYuF9sAMSL7DiziNx2gW2FYKJ8gdPPbu9AudHjEV5SheHQHf6qLFPBsvS4vpncaLUf6rryAm89swpRmW",
  "key38": "52TaaJyPLyxXyTS6xCEYZcvbuVtMy8Fe9ALHD2JwkvLtcFs5krkqkqZ5yHr3hhC4X453sGpVp4wQ6ZBiyk91uNNh",
  "key39": "B2aZy7wDCktjqxqxuyDtznZNbdjWvCEQT9ruhGBBtGU3tuqjmsn1SoMDeKYepGvpDZk2bMyfXbWXJu2Xq7Fje9V"
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
