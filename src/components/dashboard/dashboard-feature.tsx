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
    "4SWmVV7mNiVJV2QUmCmw17XgvTyi8kiaNeHkjzjphvN3mkFngwfTNU96JxiDm7R9wLDCiz7Gy3XxpRiTvuKQPuch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vUiCoxEx7Sif8jjYawNmhz6btW5cGKaXZdgF8qKHx4F2st5PEWRQE8tKM85Aj8JsZP1vThmTxxcLh3YeGWahUEM",
  "key1": "rMLjhzJchMDEcgf2LJXktz9eCdTTBpPb2NhxGQfzdWoQ5bR4Y7qhXd2SaYU4Mszq6ZY2Ug1zZMKaMsSrZUHkmND",
  "key2": "yfgvTbUDEW7ccBRrz17ost1u6jjkoGtZWT2oGrv4GHKzKyGvC9goqukhVKHEQyFVD2cekaWN2SS2GQn79akGJuV",
  "key3": "4B2o6G4YzaydSNog7JuSXmS6bqEuevPvHpTSL3ZPuWpKPbSkHfumAyudrWssvLfSPsJMAXFKPG8gtMDaKpW4Mhy4",
  "key4": "5xLd1QCrW2iv4nPobhL91QzMUdU89pDV1XYPNo71QMaTT8y2aZXfYdU1yR5Py7wVqK7WZ27xrCScyzEPKdCmYqCR",
  "key5": "2eMpVaqnf7969Tv3m98ixKEDnfe1rjWZ36dThJDcN9LSTHzNGW71WaeQLs3KGUcqzAfNdHHbi8HrmB4Ns545rkbj",
  "key6": "3HLkfdZsLpS1YMFyKu9ktVP65Uzc4UjRxmppV2T4keXZFgn8UPWAkNeqJyCyBonSJ1c7QpJpKfjHvPta5DagaGrM",
  "key7": "5juXF1g89JwDikfM3huEAkiYwyhM53an1otmVW2Vo694BpFe1XGoRrtHT1FRpN7Axnm59rtKrUtQ7a2YoZH45e8c",
  "key8": "2Lq54HekFRYvTquotSmLNnWckmP2cJ2uRLQdAaAqHXrajZKRJ3uiUCVThps7B2GCmetQfbuNW5fGTjkVdU2x7rb6",
  "key9": "5NjyFmxWdRr4S2d5ZsrGC6M6GJiwrjkw4G7gApfJpK1jhtvyvAdfKgShi4hBq2QPvpi2tcKktozGXWkzgdHtwuRF",
  "key10": "2Ks9CQFhxuogqMkb4XodYm1MmrppehGseJ2Usd7xNowdq6MX9dURQC9QfTxh88GkbG3VY8azz8rR3zY7Y3SYqjvv",
  "key11": "4AzsFtphd1mZirdM3yDCpPaN1FQWWhK1ReRBx6gXkyf36bhf5U8XYYBzbtn3xV1KzoBG6svdDw8iJHeeEnjv87k",
  "key12": "4MAgyKTZPU2vfYv6UUeGuz3cvfdtwzDUmh5Wfuq98EiMh7UppaYENxMuirhZgFgjDTkxfCajRKCv8TnSmyjAioyw",
  "key13": "4suuB7sTdeBRCCm29qK7RHtwBQttXfWbC5coRWJpFNXMMWVb2s6NhTL1Jv32AM3jVnDwJpWa1YuA7obAMFDEJsFK",
  "key14": "4yvRNjX3M2KUM3CZ78VoNQtyVNuvQ66i34pmwmxbK6ipPe23AHfQxa2vRoCmkZ83JqU38BRvbtiKQYd5g572d9nd",
  "key15": "1MGMM751X5pyqvdJNTFeKkHU4LH8yE8BVpwCQbQuQbZeTk5nqWe8anPUdkrecEwQPTN6BzQmGcKELy4gqnFcrnu",
  "key16": "4Hqywkgv4KPrx6onN6dMWHx2hnpmuSgMiHZAJeqPdfE8F752mN5XtRPYjxEjhVFzZNpUWiCgVtWRf11NkNaHPnv8",
  "key17": "3Eq2H47UPQ9EwuDvwx4CAbwH6hu2ntRDRNu1ykH2arJfHKHEZcQrHHHZTQJzWSfpzZYt6VcSYmtwguLSXsHVvqiy",
  "key18": "yVbYCEoKvdMMyCBk5d8iYdMahzoAsZoB5jtuEkuiqMJWB7pgkyVZcr4D6KUmZ35xieP16XZiyLXGMcsmMbe2bNg",
  "key19": "6Dj1GYjaRjxNgW678NxjFg2kg8euRmirbjYQhbrQrTPV4DTdHUVrMnNuiLveTD6Dmu8SNWdxxnidTqPKW2jykqc",
  "key20": "2j7VC3z9Z2auTcbBX6FEsntnGVBwwvc5Fj99ahCwJXpgyRoSuTfym6RsVtvQMXZSmMJn5SN6o5B1isQBzidwKdbE",
  "key21": "2ojd6fSk1ZEvCwy2NCrUAa4uUzndYJJsPSo2o7tba57EuydRkUyffSjUFyvZVhGJz4wzFfmP11D9g8x6XeoDqTGc",
  "key22": "cTRe76maSdU8r9oM4M5jvMPHmSB6vHk5VUZ2XtcVf7Jhr6WKznqFy8ukRHvHwwSSDDhQaTD7tc33XL3juMbm5NC",
  "key23": "2KxUAaxUkMCxBHn3H7x8zRCHYvr8AU6egCsdk3huBjz6NkisT1Shp4whrofjGnBGFzUz2sG2sykWqbnt4FtbnwP2",
  "key24": "5hzCsrTvAogxXtsDFfKMGY98avaDfFXnAXKopCzzPcEmbnpYmngCUvsSggjKshwCGqx7kGWWtPzwLGQX9oSppbyF",
  "key25": "4xLXt5ZEEq9MaBxcFJJKpAPG1AiDBwnrZ4gdKAzjqyYjVp8WEGkZBTQ5SMNN5rh4g9gz3Q2J9WmW8f1KExasLDs5",
  "key26": "2tA8yLkcQhiA3AZeN2LJNJqyGJXLxSNoPu9uFcUAev4es5Q6v6xk7AAqPgWx5fV7jeNYDwQCESBE85Fbsm6aLaRb"
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
