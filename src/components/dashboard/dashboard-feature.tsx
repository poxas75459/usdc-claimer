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
    "kM2mnLKi5TbXoRZFqmeEaSWjN5H9hNGFtQKRxhivqcPMe4rFMKF7aoqQT9VnhVQM8t5ZGxrfmbyEypf3GRNLKsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tC1X5mJuHKLF6Y912AqT51c4wV7Byt7vvne6mpYX9LqcUXJKWAffeaZinYkvunUTAKn6Tju1zTswt4F7v86cVJ",
  "key1": "3ZQEV3fbQee6wZ2yYnNoMqg4cDVwt9mRtMKayvyKKD8HTVFL956MyfXQ4X4TwJXSGT7uDs8DDAJZVFB647qSKf68",
  "key2": "58RtKVi6JNYNBEarqd4oVPdhcEeLQSJeYbMiXy4kjuC535iRezQHnL1TiSGkRiqVuJPAJoECuYTsYbE6RbZPaEEs",
  "key3": "4iAmJgDn1WghotCQfk78v5xZ8wxRhurkDwS5BnihyYncJD1HymzZ5bARcP7hsMddXaDxAdEHjNR2eo3wUps7F46s",
  "key4": "3fnQRzSmvUqxaKLJqh6wJDYoeYBTfrccw4sapkHTsME6u5fCsYadmovacrprZmo6FkYnXzmDFQhfZpu3uwotDQwi",
  "key5": "2zGf9JPiLuCE4PvNyQW2FfxVQ2QhBCLm1dLa78MAZNXyZkuZXVohjcRkMHRjf84db81ii5NMxPPfRageDCdZ6KeG",
  "key6": "LCjx59PmPqJsXpPSFQZekmfdFniXrBaL8MvVuFmumPAXBpKUDuRwrUeHgBtgzrCPTNh2gEjDTTjXVF15oawJvjF",
  "key7": "4mf524R8t6eRcGosd2kt6z6UojyUBBeVKqAhnzX3wZj3LNBQfZaZrkKMP4dxwZCyXPBTa2CW7j5UkZpe5QNukyZj",
  "key8": "59PQrghoKTtxeXHyoKNGRihErw96iqnawVCMwBUS9j779VCLxGYAnui2YfB7kxvpraDSD2SGfJ2NcePdbX8BVbgP",
  "key9": "31gv6tqKzyYBhHfLruaHZZrQzdDE1HaquVEucgLzrKyHQbGS4FGVh4NT3YVtBHU1kaNfYcQLZ1SRadHyoNxXDiWn",
  "key10": "5wmCWQWjy5J4NuCE6eFTBzmwqxi5hgn9Yr7Y5CXtVqaVxSxjUGRgEap4nMoFmqs9WDGcuDDXrC3VEA8RgRWaCxCF",
  "key11": "4BKBpJmgRG1BkWVUAaw5HFjdWNpCpTWUdNvCcxy43iWhnAaphsgvNkR5QeYxBsTxB1D7YDzFqqwcocZzFXrUsLmo",
  "key12": "3HiFsyq64BGVZzsFXGA1EpQdxiBVuckR9v8hpF6hQhbyXRJQWETMaqXNwcjmeSh33Hy8W6o7KxZgfRyTLz91aKwv",
  "key13": "5CTKUTdTphtSEQZF2Pv7yEraNbfx54JAXXmR4DhR99JDdhyS1E5CqWA4gTEMB1wRFV9i3yVRgstQnzXZW81Eab2D",
  "key14": "4XtmJerG8wfum2MUcdLiVxZaWAf5br8V7hynDRMUYBDpjWybqQ6xPPwDfj9RdBbycFd97w6asZJ1MucUPkNgUSVa",
  "key15": "1LidMED1NU9wCQhbZjFHoXyd2abNR8dJxmTzuNRHwnPXYwyoP2jfKwE7vETZzpA4zVX97JK6oAc3EJnqHvheV5q",
  "key16": "5n4AoEG6ZSufNb4Qh4h3D7rRMi5HcBARePEgxiK9EkkmjeozV3ABJWzHmd3f2F7rEhkmodh7p6dcRU8SfWMVkEZv",
  "key17": "34K1ZvS5dGLGnTaQrgzG4LvbxsYqxQSBv5Sxtzchr1mnp31eXo42Zvh7NRHAfemq6UxGEdJFdMo2Dzwdkf3P3jQV",
  "key18": "5iYsnornFLRqfqPpNicGS5BsqmTozfMPH4KLjpwL9XosXVVLVaCt5wVdTvckWK73k945EUaWWdvpDS6kHotFw6wb",
  "key19": "2YitHtaDBX131sRBt7NxPmccUVsdNdKwHzMaLNSKsBVerogQTmVjmipMRLFbVtucUacDCdzhR9Eb5KLTXWFJ3eX",
  "key20": "4y5TTqQ5obRkTq3M5HGNdCh64KqtToVgXJDNbzgG5SHaPJw8ezj996ux4n6kH1PbLGRaZh9J92Ev8GVdhiT9dPsY",
  "key21": "639Chf7J2hiTCb3DKYRFbs8QSCFj7vAEe3KwcBi8JqT8iESyeT6Dk4DeKPxGtKT4pRgfxzWt6TVZkVUAkuHuzPXj",
  "key22": "258GZBFoYK9TBsKBRz467PPn6RTHxDfx28AYUpcotMBGpQ6tBxoj1eE7bwRNm4QhDNoMtYJ7EK1G3kTVJeCv5d84",
  "key23": "5NMcLqmTHvXWhArKVHJLkLJhyQBvLvTLcMEMdHcbDkNLv5Pnwa6woYrmhHoBGjFHHAoqQ9DW3PXSaTNefKh5nukH",
  "key24": "4pFDNyRcQBjQShEfEk65j4b8ZvRSaaXT3sMBQvSQaAx4kMFwnjZTJbMds9wcfur1QmJHRYWr4xT6zpY9KPKn3v1q",
  "key25": "36uzCMxqLG9mvtV25pSP3RzmMUbZVP5gaoUjma8CUVpY2cMaCoXCqKFhnc9qDKgyWXQGEKCiQEfFuVq3HQjePF7w"
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
