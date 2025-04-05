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
    "5SkHksRDtEmJWj1fpQT2o3chwFrzbWrFb6Hv8dTSxZS6WfR9HKRLRweKoh5LjMy44mKLvXqsY5H8Fok9Q9nxBH9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58cZR8PTXQ3azCQR1Yom5uijGenfVxMGr5uSwojstKLXaKTLo6vewpYTzvYRDL9XSUXAB3W41y4VePqPZFNqZ4od",
  "key1": "2eRoViuYkpojohrjtXK1hN6wTzcV8RD5njj8aEZqNxJhy4SR5h5hLcmoCc7411P1kYnFMddofhkrHfuUqSpBwtH5",
  "key2": "3QBiVGJC9G3JtDRLnUuZpi2otf8bcWtUGQ2pUiWtWtv3Cfa8Z6c6FbJ8Qesyt1Ft8k3K6beuocDt1H1DdSzzBCHM",
  "key3": "ZCDXdPfVxbu3YDVBnhYKmpHdH6WbanjornfPuydR6dagUJoheFbvYweBBG8gE53zcTcar1ADDdEoJpfqUkG1B26",
  "key4": "5XZkBAZmwDdZjJCdRuW7kBY598pa7QyTESrqqHZhjVvnE5j1mLnEjE1gHCmw9DnM19Zf4eVCCv2Qf2YQypLoSHbx",
  "key5": "1jb8si7CprQMzNKgC1WdAHavwe5aR1uoFFVfUDRDskrx7uS8r2wRXdHVUQTWhgApvY1zNdgNchrRyDa6SHtmhex",
  "key6": "4k5wsY1KnDdf9CphXL62gmfiY4ZezUPGABfAejSeVSyViGMpnXGu3oo9A22eoiCRbKhWhT5WWBY8pvQ1mGuchKM8",
  "key7": "53HnMLTtcepv4Fdx3jiUUCnNioe874LbSxZrMLjm8DoHAzZxcnpT4EkNafse1SVZKLgPcK6MaQeL1mEW9Pqg3Wte",
  "key8": "2DiZDTzoqPhrig8pAJsqmrG5GsGU2d5MnvRoGk5oXbLPCELmwDeLm1ioZwmoqR93uWmBL7mnyFf9QYnx1ho767TC",
  "key9": "2DQA89w8npxWs8Z8HAEoLGahzKZZqmrBnKfLir1DkXo8dwz3x4DH2Ehda8B8iQ9LGkRFXmGuqzMnHqeEtk7HEm7n",
  "key10": "26d9ZDGaRSiJwM9okG12AVtoVgU98tEBeqP8XRcHCZe8zp9tAJsRsYpgWHqRkkCKxtEQTncD5r8NpbU8VxEndjz1",
  "key11": "5LFeeRFzxdMgnRNLd2obfQyHSU1935JQz2Rn3bdZuJoQ3F5hZaAYVkm7iLmh1fUGT2BsfB6vyx7jRmdvTqYeM4bs",
  "key12": "3KBErXajij8BECDCcUk4EH2fZCqyUeZgzgzRTrDaE1dS9h76963rWcbHkYYvtxucoie3GBuEsrp5Dh7CApwRSd2y",
  "key13": "5WC4AnNrZmAsA6CXzebwUQMFxaqjnyiwohtsWvYEJk4hppf3ag75xMXB9MfsynjCVZ4MiBJ7vLytUoE7y5AJA6FE",
  "key14": "42rsnp8ryoZbwCFMjwF5Nrgi4XL36v11TY7okUceH3cxbTUWo4RnrxmGZhiJ3ziHkVpKqNxvG199Nyb6Ano7vErr",
  "key15": "5om3YYeKFPbpVAfonacLwz8zrLs5NNZ4aQ2CYUNjZuJ2okJZu75jGgem4WyRduYApgVTkfjFz3zDE3uF3XdwNHRh",
  "key16": "5xNPrfGfEErTTPXGjiF3PnBRArYckZcMrGPXzYe9me6dTrkZEjgYmPxLY42c1brBwfq8iA2zk8CogS3mts6MmJVX",
  "key17": "5pTw6K3Jk8dLVUwEhS1U1UyyqdPitnbM5UHXJg4UrBb1y9mXAXeHo8xHLL9ybHrRuEn8qaQDdwM8UY6PVV2XGtcT",
  "key18": "3DPDFGFCNzj14KeDyh3riMwnGy1Tb5EYyPdz1AECoNQWE52dPbGuhmsrdDy72JasB2qj2cQFV5Xfa4VNdB4YKZ6L",
  "key19": "26rjoutqGYKhF2yUdBGa7vR15NEEQkjYsqNs2WCk1cNsyJwWUh4hgFzeTAWzAMJ68F1Gw6x3zTW7E45wPEECc5cj",
  "key20": "3hZawhM9nmZL7r4dik5kvVGWoTrfYqiMfWffiTieEXiAzfUAWkXZoouETGeenfSgVmjXKN2kqHcxDtRcaAmvPCjz",
  "key21": "3L3qTMVTw5eJKRDbzxS4sAuTr5u9XwZPsXSfiQLGLCfwrDC6YBZWbH5CmN5krVrYVNA7hfivSDEvbY1gnQwheHBF",
  "key22": "5zr9fYp7o3xKqUNvYGURRfMC5eT3hFxE2W3SESJ4ycALoXvj3b21J82nJ94uuKHRYa935CraXSp2StK4hRX4qCgk",
  "key23": "37VAZvR9GkRrNh1m1ieZreSd78jXYwMMR59CqcVrsvYrpJBrubZoiC51AJrPZfXqcyPrZaFDQXdBtLGm4CTXqV82",
  "key24": "4A8WadbkTreuHcJHG9hxpFTdVCScQaoQtHYasrfvbtWPyHm3Qfa2bSgm3qWgWWeppLYUSkGSQxWemzTvHarWLk8V",
  "key25": "3YXRBvgBtnXFPCVXfG3Nee4NvVRY6w2g2rEyPnrhm96cmzCGyyYm6Sxog15ZWYhcPguq3yNZuWog68bTuxTwfuih",
  "key26": "5yALN2FvJ5KZwZPdj3jJH6hvcWpRtF2gS55gRm2ASboGD4WKTc1WB3XyqBfJWq9aT69wQ2awQfLhHidC7wZJRGsa",
  "key27": "3yaqXHATWzZEixjtEgFkYzp8AgKvt5nzTM8nM3tx6X63QX5oTEHCbfHuNhn9cc8LpLFrZFTncfAaV9m4htmHTCtX",
  "key28": "5aRDzHeBh5eKyL6YnmXtCtyCrT61M49HgWQimwuMXFZcdRPAdjMcf4zz4zrj9S5ixVAycRfGD8ShoDhSYeN9VkTv",
  "key29": "32gUE62wUq5qiweEFwM1THmQAi5ftAwEu9he8mKyxt7FMsTFj3P8hhqXt1BCxa3oDJ6yVxBpAACPK7TidtgPzotL",
  "key30": "5A7YTc8aux4MisrQtZpmsLSrmJzDStbXUMx3Eu5zEEUxiBMrN2oF6vuA9kz2Qtp1GzYyjg7WACQ3ayjV67FBkZfD",
  "key31": "CkW7SWtiu2yVK3cKRhGeoZMsnvoGpeuP8owvoFUkKpwKEhcbo8sbMDkpp2VcXeHBP7qP3JCQVNNzgkeKAp25u2D"
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
