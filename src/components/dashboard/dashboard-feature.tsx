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
    "J13jYScKrtzHcCusDnZmC9JfWNoVPS93E7AMsTkJMESTQfDCZkTGpKiDDavQdJp6NUCs3cyhrcTChbB7vanwuY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFZc6vwHGTcrhNDLvZHWadLZX1ge2vTKdbvaagev36m7i9cP5XMKcygAHWDm8KotSZHX3rozLWuMun4oaukHjaK",
  "key1": "wPFeLAL5Qo8UR3Mn28ebQuo5nG1BZAWNJKnzjUQ7bjGCvT6fKHTQnbzHtSZE9usiJiqC9Ludbak3ynwTuJTWvvt",
  "key2": "zbGzhepp8kuLJ4TfpEjGWka1dEJaBjZiMJyCzMpip3LVwWwop734sutpHUejXx3w8JKxqVkirQDK9jv9s34tfST",
  "key3": "4ieRYe7VQS5Uqp7cJ1sYJ3vUW3GfVtZii1CkMZnbT2dwZcAMCawUMSDikjrEJ3FKb65U2kzJvsM27upXxpZpHvCH",
  "key4": "37UU7zLEhdC1LhKNWu23YYdGvq4JdEDbgNwbVbET3FJvkk4DgQbYhPg4uw5PkhQkNorte5zsLsGEVEEdSysCSVL4",
  "key5": "2SwcqpywhrAaLFUazKSnBwiRaFzCmoNVaZUVdQLSYx4ZDyt9w6yC2UhBd6jT6gXrSYG5ji6WQdonw3EbXaBQsEqR",
  "key6": "5DaS3qCNTFqPLYTNPi1Kzkd6YM81z1SwDEmTfSrr2M18WZKTfh5iD2gVyLrFBb6geQyLzbgZZXiBruaBXQSn9kxC",
  "key7": "58fETEThZobmmLNuotzVQodJuoHcuUrY5rEhaxXjL4N3bCdmqBeUgnHDLyva9XYEkQqwUtyTYdpSQRKdoKAZUvMM",
  "key8": "bfTXxHqaKWRJ9849gT4iCS4pdzEuNiSWgoVLaGNQYGsCEMvnQofKYPiEAixaKfj7gBcjwpEM5DdLyuQLxKSq2kK",
  "key9": "4mbpyMmQkXgbeuHpJ41GSeeNSjM2XkFCjKcv9ayiykTAr1exy5nTxNwy23SL3a4DaCTew7b8nsQGaxMJsoj1p5ab",
  "key10": "wfCvN3wHru4hkLSqksVh1PbusAvQmi1EowHq6K53bx9MW3Msff58Rxp2q1Va7338JkY3KhAkFXY4nSHZkubxs8b",
  "key11": "5gqLz52gBFrBQrEodGhkHz8UNmYPCLAfFMfjadCwNYB4VDrMyB8iKwnvXnnWrT6Xn9fcbbMTU1D189R5tXbPtkTL",
  "key12": "4kmvVsGRDr2fUSMeDd5wBUt6HYr3i1NfqL5sXcnonGdt5UFbkRozY3TgKrGQXECHjiVLpNRw3c8KkTxmgetXyZgr",
  "key13": "3VKNXdoQQ155BNowa34pPNrgxUX5NQbumekXrd6EsNPedPPBXbHtEN9VrPHm1dAS7iniUPzTUCUzDXGjgovyneDV",
  "key14": "4SZhPdqP5UNQCVdQeG1NsEztJmVcjfjpr88Kv7K5EEgJd2rm8SbVc1meZ8ubUAa4TUrx8d1ZxpPMCkZmG2Vk85DZ",
  "key15": "Drz3ChLUp9AEi8c718vYBWbd9GAEB1Xwmi359iggSordhuLvm9wkPzAfNZn9MafnNgWRYUn67SC1DyycvT7EmCY",
  "key16": "51gxprYcKjfAae4tUcjsdQzcXk857Qr23bKrfqW7U5PUZAUApnniKkgfiG7KKR1yeBbeFQBppmeW4UwHPN6WYzdk",
  "key17": "4BRF4Xxdrso6tZC8tRSXmQsRpiad3eRKSkg9v6QCdKdUhpC9mS55tzHmRjrEcgkyLhaKwcFiCVUfd8d8SM8GoW2x",
  "key18": "3Kvm1jdrxVGKtV3nG1GkkA7ckzFoiL45uroPeFCv4SqM2D41KPVSR1QqcGGyFjebtygPTuHGU7NTXL8wDsMmReNR",
  "key19": "3wGijewcVATrZEAxXJazRm4CAwkvCDaXZdtV4JmhJUvwDstuQ4roAPLPpF7eJB8ZKsaE5GVf82Ptwmv1XmnrR9VX",
  "key20": "2Aw1anUwF2jYhKkBvEtemBsvboVc42gX4WrdxwQvjrGdWbmrJA6pQPc5SU5wX6MHTFsCMCBCEQ5UeoTbQAa9bqL9",
  "key21": "4yJbFtjthtZPCFTNdeZAopTrmBEEcQBUfkdLiBVNELsmYz22sQA331KhDxJ5KyQYJqiAhaQ3DFbCEDxtmQUHd6Ra",
  "key22": "53DpGytBzhF5fMVHdTDBp2rps8p9CFn5yWfLqR4oKp85ijLWPEgvEU8g8hK6usKgWCEVTDw3ouUwkxhkH3Ubi3iu",
  "key23": "2TeYrFhxFnYknBrxKw3S8Bi1xxRcUaLr3zGhfoHoL1XgxB8vvzoc8Z6bCjHm8DWAVgXDEMK4shZcRYAwVZiQ1Lsx",
  "key24": "5y3opapVvWAtYra5E8UB5HjXbEAidiR1xDKg2kAba7dsopL9Z9GExWvKQK2WRgwJzRkgSWVjmwy5tMBt1Lv2sMbp",
  "key25": "55pxuCkgiVqPmoPo7qdLmNRZaD2C7d6nXFiAJPNyszEhm5A1EKzF5CKrUbkdDEK4eNdtXDnwb6gUMhgctCb5DQCr",
  "key26": "4xg6qpgXK61U5BGFmJvzTS8ZDobCz5tWPt8H91AYVdnSG3GLBRMGYrvqmJ1XpajQcEfd5qYQy72BDShoNwyVLE9u",
  "key27": "5nyn4FbogzPZxXAAttHZGV68xz77NThfdzLJM1eaG53qr4Fn3uMip729Wf5yLP452d7azkiTDFX3V7iwZTpsqx11",
  "key28": "59cSha6LfuH3xZkULN9pM1bobRLiy7hgvk1GigQ9rESALMDQKd5AeHXYz3xA3Jumt5w4f8oJ3snPqHyz6LAxthmM",
  "key29": "4Y8VvfhhDSvfdrwMFC3FYDVSBKgG7DeagkJxmrVGuyCacxL339eKdgQq6EckvEe29k4649GLuV6gVSMW2dR824ip"
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
