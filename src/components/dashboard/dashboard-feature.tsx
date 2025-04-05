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
    "4iEnJ9AwkrfPm9mBVvkfv1xHbY4czk7uMScKwzjzq6Y8PLhQsJSoLEfQHY5PidNk1DARLuXhb3VEign6MMcx19mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWxgawd7KJiUXrKfcshUVMbczxkovc6a4J47E4Uk51qr3118tJEbPtdHgJugVjNc5QFQK86iAGzCXKgwKwkmNw6",
  "key1": "2gPFesXeFKq1JhXCSXrBq9mzZ358rYLXrAxfBNAfPjuTXRa9k49gdgGDuK4yER58LxxPqPahzYBawprCHmWmnHr1",
  "key2": "4UihtQiqyRchjxSVyAUU4Jpr3utyATRcXgYnfZV2SxuKbJ9AvSGXRM7XFpFUoPEh4wLPHUBCCgpsDzRC37sS6Wcz",
  "key3": "2mbfvD7rSvJtG9c5TkxCU3DPn9n8JxpkVkxYdjrTZuxDzLCrppj5ubWxJn1aS4sCZcVTNzUVtBE5uzuXJ2dA7TCa",
  "key4": "4VFgNtpy69Zgobs9wqr7gdRBYWyeia85dYj1AHLQ1MDikPBrGEhkZ82jmnsvqjXXh7pd2bzMeFS1eJMLF2T9Uw8g",
  "key5": "HC5Aqz49bjAUcUyjcdUUkjAejJQ8sbNwZZaPSM8wDxZdeDvNCGj49BafYucXPFuQvGdUwfU4LFNJJZ8D278DkVk",
  "key6": "3KjMVrHmaE5RGU2kKvjYZbsCDXgtcfaGRM8YC4JiyxuPfXooESj8K1jjwAoGTqYNj3EehuBEWRWDhLwgF7VLTXhT",
  "key7": "qMz81MRCPiSBDwzNmKkJJjJBLhHd4z2W8RJKP3rsb2zAR4M1tkfRqQkeZhNpb1B7GC7acGEJZaDGVuGeoV3h5Ah",
  "key8": "46jA6oeNawtjTLT2murYdiKeM5NkzBJk4KZpjpijjoAJssVQrwUs77Vjg8dffQe5fBFwQu1qDHbcDDf2K1fHEnKw",
  "key9": "42grSUmeGLBy25fXse3rpRF8Vi4Zgd3Q94NLhpPbuTtbXbggfvwpVEkEkUxpunrBqrMqYLRQpC1tU18AihMjY88R",
  "key10": "4mMAmt6eNKPFEdr1f6QgwfNByXdJaDH2jnp81TxcXef6q71RM1bsaN83dbVesD54CssYFeM4gHYo8PU9MDgyvJVB",
  "key11": "3g8EZDKs6dNguGSE85mVou7hsugcv31x3h7y7x6sPR3Fa7xAHNjkEz4quBXrC9dSEU65aaKFshX3ZHUCeRsk1UsG",
  "key12": "4QaaULVgH8mL9mnjjh6s2w9m8G3zLffAKfdT3DbjPJYDKRANm3dkDuZsC4CKbJUjAyFgXwyS71t6d37eNSkNTN3H",
  "key13": "QhnrcfCLdxvJTqdETzLBv5ryAJP7nmiG5QJSzYSivA1pS5asaaQUzBAokgftea4g4HBTGQRDRyWMHzWdmPN4MUA",
  "key14": "27bzzNx9v8L8yHHnh9kaSq2zsMAZgNv5KaqV2vgahy7enESVKUWxZUWVoSELhzmZwo2QNqBNhuHe6cwDx7eBEGLo",
  "key15": "62oYdSkXe6pu6NGYYDBYJPfBpef1wtGZcXNuhigdvELp6Vx9ekshB3rXCt23rtW2DEFpHdPWcrQsYD25xRp4ck8H",
  "key16": "3e9hFTMmfq34NA4JhSWKuzNHCi7mwhorxyS3eFLnpHy45et65yic8U1XXv7mxihmuzWij5vXdRBdHge8mE3g1fce",
  "key17": "4Q6STmVueyQUMC7ggZBbRV7aXQXFsaJkrGA6bmLEaxBFyCbRXDar1k96xvDcJ65Msbiro6nX26UVSNBRmJ9kYXAP",
  "key18": "5EWW9RPQowzczMWcj8BHj79qDwCSkJTzXXF9tsKWKp9Ghz82WQwrbRj4hubUzPHf8G25fiekRkGywzwzfLBUbSbY",
  "key19": "4JgXq9tHh4TBaswk3KE96iiBsgr5By2SZGS5LzWd5eYutaBGKDWDMW14NJzZTDkET1xhMeB8MhcChWmVykCMPd8",
  "key20": "33bidhFnjuiahFfgpTsS1aWA2ENoUHBmDb7Drr77PfZFiEQrM2cWPCMfxXGoZfxLbFHQRMyqHQjvcD4wVksdvpx6",
  "key21": "4nZUDa9M8QSPhNFuTcpSZeL39vL8EDcxHNgGVPscsNBv3xdTJzvbN2NpGUS4Wsu8p9e7vaZAzZCBDfZZdE2TfnVv",
  "key22": "5hAyUBDF8HjhPVCbRDhhqqREUmxPUKqGAazBvpopyfAjMve6hPrpmZrQputJ9Z1dsUK75XD1oa25SbJk1MancybU",
  "key23": "35jVgpm3cN7VkgwPRBCwnkaadosDzXfJPcJ41W65iBmMVjD12wRVKgirdcqCcWcUNBdr3sjxLU9Cweq84ddLaxVR",
  "key24": "5snVfd82mrhv4LQdtWcXZ9KcrrQ3nDfErnKcTNzxmRRRfPBkppmsAEVRHbLVQsixWSvhMCr5ckiqUtSWLbnwXugy",
  "key25": "4erhy4R7feG3bhgLyobJxtC5Zoxtrh54mpVdzicVk25XUfKZQAqX9eGpzV6tCmcTxpRgNUX4V7Th1Chziujx6W5W"
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
