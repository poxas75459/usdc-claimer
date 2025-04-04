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
    "54CVugEMF52vZ7NrNkKXfyguUN1ugNekLtbLqZeogjGRtiCVDdAeApCfR3bKUaqywzSvZVXMhhaYsMBR1goyZUAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHJPXjyzi9oEAWjD2Rk1rWxzkGBWWjLN44Uoq8SejrgA62QbgswbsxZ1yzmLtZcU5NZTcT2vrwPovFfpYHjqz4G",
  "key1": "66QdMVaFt4Lvg21ceMFDzdh9vC8DRExCZ6MVFfd34cbcQhVxthRuXvbzLMFAHXkfx9eMSLXA1Cq6EctmV9gij6sv",
  "key2": "4XUodnnaUz5HgSuhScNrPNvJnwGoivmcpjuoA6wFXByBsbzMfpkZVCL8aQz8ZZZFoobnaDtcn6tA49h4UkV1kYxQ",
  "key3": "5QLXdWRBn38avBWXgWAfYrRB4YAbqDMVR2tRE3rtAR4Pr3q9cqZ47cJEaPWMeqmuxWULpzjaNbnMzZWbGFrpxkfU",
  "key4": "5fMG8DPYmvDaa89ZPWdszQkUSmr3YtnqjW4EZB8PmNPQTbzD5XEmNbbTUMoU3V1w7dyos1rNYZhqqdXkiThoyveL",
  "key5": "64F1ZA2xyJhKkcKchsj7iAL4ZhZLyKtV19GQ8cbKsbKKVZ25DwqPeThA3AQpg9PUoTrq7SQnhhXFgYunnmAuoFDb",
  "key6": "yw9pdnfJFgPMQD1KAk412TiyDEMaTiKyAbUN1Y5pFeFtNR9cPhmk7H3otYBiLfVR3Jsef7cub6iTQfDTxfmTVUi",
  "key7": "4GSvjtXxgTvgvDE29PrcCQkf27eSygR6u6shMTeJ9dgGvSF7obWv8hEEaAcjsLBNjHJuiLinqd1Sdin1EmLVAbnJ",
  "key8": "2jgP7Et56JHHQwfkNSvA73r9fqwd5YkRuA6X4w648WrT8ACV3EiyKQTMDepuQ8mf2wdjrskn7hEi4wfQQ6DfA9Ve",
  "key9": "5TQV6TFBdveRTTcSvBDmL5jSvugVYVTaS7NSGcTGuSQ8SSftrqxkCqod4n7126AGPq3ExieDR6JB3RuNdbVen3a9",
  "key10": "2asGU6TBWDadcdSLfjHzXWsA5rnmoLT4stG7LSGmgyeZngiAZAYAtBCctHeqNhuAB7AKQhbKXhuH6BzhxW15GgYq",
  "key11": "5p38PdbKRH9kdgTmV6uRVTizPCN7B9FhngdZB3BDwUtxfHyZuWejoe9tLvT7gMDRVZaFra23GfJqyZ1H7pgdcGGE",
  "key12": "5CYG4gt2uY89Z7X3CT3wDozQ587qDkLqjCSd45HWbXhcKr6ucx4NxiaN2RaoCQEHGS85XTYj9W5vKxzaN1nmWXm2",
  "key13": "3Ev4J41yc6X4TeyALx2FK6kZmGzrpzwRp2CMVpnakjxNja6aXNycPqxHxS3fyn3K6eUmRh3fXF8uFDAUmeyZmk7x",
  "key14": "R9LpUBsMNXSPhxqfPDFEe7y8mqEYHgj6DYUvS5vzdycAvabBZP5jUroQfdbmip33v5PoVBy2oLZX5Gm8KiNGAmi",
  "key15": "4kmjoMSoAu7qRXZBnTKjVPuUbR3iC35dUnXe17WdTgdqytNqyTtY729ZQr7yNcBiAZSLy5gHhD6eJu6wfCkbe8f8",
  "key16": "xhz94QhuKB8YagHjh44PFWaTwqzZwDzwXwMhW5VuG3xUJmYkujpWz1Uun7otTijdRZrfrLmUAsWMHsfAVpwnjuT",
  "key17": "aSDxpMQAe1ApU1vhE7NTXG4k14hpzFitEcdmnoZE2MATw4gnxWyjorUuY7TeQGsHNdGfneSpeFeLCjKa97h6dco",
  "key18": "4nkGMeup7dq8C2Dfxx5LWY5bvVKuyEUugjd5gEEgKisit13rzptPFH4ZKAc34RUkUaEBbzSM9NEihXbxAt9CttRJ",
  "key19": "48qfeWezfexVqmCCAeoVcUtEKTAZZzaVUkSgigFq4jicABtr6Uc4k1BUuK3iJ7WCroqgA5xJEQSmG6vumjKtAQXi",
  "key20": "4aLaCoPfK7JxVMREDA7toEviYSf6gPGv6EzPvPAixPri7hKn2fHVHvCFtS51Cf8K4cRswKsh7i82Ujm7s8vLdro9",
  "key21": "rMXfpnPNTqGLWMnWaTT1APnWrX1N9oTwnmsC6tgn2jnm1fAeLvS7qnL6tQd2o5mjzLcopwZaCFfrFMBFQkaecWo",
  "key22": "42R7UHCAS3JcqGAewfd3Aad79W3dKnw3AgWaytNUVLe2K1WBFrDVAGMTcm1r3UTonzUbb6SGZPnundo5V962yonm",
  "key23": "Ex9G64PQPUgtDg9fv1tfr58SaXTgpGn92ufsfKiDSiEoaktr3iem4xgN5xJ9eyGKd9EEPYdCCChaVs177uPM2QT",
  "key24": "5nDMFCToJ4mFZoMW5BxARpagw1WVhB5BAm8yFYzgcDeJV2iMFkUNQkyXJduiMGatS25uPztH5ZrTFkoHqVgk1GjV",
  "key25": "5HhicydzDTZo8jYqBXJtFsy3nBkLD8ApoXjicpx6dBbytWGf7efxDfKMDbrFRPJfF7wfACrZnKk7N42wq6kATEn8",
  "key26": "2ofA8oZED8BpaxDATht85swNHWkuXdDU4XLb6rb35xWp9UEgRDFyRdjTw1d7tzRqBhCsnFB5BxGAMuigKwLkV5hJ",
  "key27": "29vtcgE7xpeTXYGm3CdU5EMQs38FYFkPoGfNx4WKFmp9qAy8wr1fiVRper8GjpaQQteGwK5N9CUZihtBJtAtvYLj",
  "key28": "5AJ9iCRv26rWJbtyyrDPt3PeqmEuH1zP5UX5kjQ6uRocmF9p8iYwizWqLCedgi8JSFy2ohWRCtdaWh7U44joubzZ",
  "key29": "3U942d3Zu9SN4nWuGRAqJ4EffDmnWTeRdc4PFLNRCUpyL9ngWka8bFJJphUhijhKqf1BKbiQrjAYFC2aoRP5hukd",
  "key30": "2hfmBViNNp8e57zwtyDJKr6NW87xVJqy21Q5BtXrCRWWaJM1cdstFh8a7i5KksSXnz3PWjyoZbUenDYa7JpgZiRr",
  "key31": "uZghEd9CfAcdoRsZkELoA99vX6ca2iYohPC79KadiaeYgaW1eg7MutSFXEgp8QKJKRCfmG8VZpQYTxtsKZfcwf6",
  "key32": "3wqGyonchgqMpiYVVPJRpMzvqWmXGxheJF25dkLmRgvKvj85CLJhaSYqzG3StsZ16Gm2bhkrT3WtyjK25bTXqbYv",
  "key33": "5ZXCFWNjdfkoYJ8GiEKBSQADCmZjV9HTPmVKLG4LRo4tYuCMgURngTq9LKLEzi7CdVCMFwXE1TAGGZJSocHTGUgP",
  "key34": "3AasifFnY6MrFMyACxVVS2iaceyuSYn79chGRyrVqoLwPNUqyBQuxGJa35RjvgYJN8eT2aqJTaE4iYSdqmf5Lvrm",
  "key35": "4CmAoFpSd3VHRq1feb2XRvfisfpCz86x2ryqZM2Vv65BAHn313ziDJYJW5ginbV4PuE85PgZJG3vNJSAms8256MD",
  "key36": "4kbAXL1sgczSv1ReUd15QWSrWaEMJ3qkcpdYRqwR3ngBbrmLZcvuKZtP2qLdmkign9yVUKMVZS8Xm7CUieAQfjTT"
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
