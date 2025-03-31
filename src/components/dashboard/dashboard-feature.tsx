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
    "5yGRNocqbhcKZw1KeDENwVKmAXsqda8kYMVuDR9Siy1kHYL6QQHPUHhhhkviE1P1xz7V5hcJ8mQSKP4CqVoxgse3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Wj1wEU84n2R3VA8za1bpSKuFGRxXyukgXiTvTV6BnMFtkf34R7CAdxpbHPa7xWUaxMds2czjUnoybK67XMUFag",
  "key1": "uNujarceUAEQMNundEDwPw9UiyAS7xD2dQeVHcQq37Cvi7xCGUe3HZusRoVhCP8JjNGSoGspRKmcE831FLAsDiD",
  "key2": "4fEwgjitcg9uLzoUFDXHYDQynnmwfpV3phnw9aWpL2tRtmPR83PjMKUc942SnUmF6cqphB8UHbwNXtrNxgVxp3mE",
  "key3": "QF5uBMuzQfNmuqDs9bwGGcridV8gTFQ7CygRPLRTamGweqnkzWDA8sxW9Ku5eVfvAPrtByWHtUa9ryaScJpwe43",
  "key4": "GWTFtAhD8JWgguHqTJ4wLNTDYoUHDzggTMeugBjmD5wuVgCXFJhcfX2hH1uq8sXwY7rR9aaxXybTjwQCYgNumJV",
  "key5": "5EDbvDgg95EbnSzy4ugA8JPnw69WYGfMUcqd2QjzqT8PdbF64SH2WeXpuFVTkrwdMYYwJdngzZAgACN4rvm4ikzT",
  "key6": "3NNgKhWPfEjEUeve4UDWo2auq1eENhhmgwEVW2DTuGx2KsiLoBR4RGbZja5TbjDfe6CQGPPmBAEFtB2KT2Z2DV8q",
  "key7": "3Lao4DR9mGWpPDh9qZ7tq7csFrNdVY7PrNGxfFVQE6FyFGc6UodRBXQuw7b6o2NkX41VfZS5ngA6VbiNX4aEECtS",
  "key8": "42BMamEBpFisRe82gvVYuzM3r5efoxR4fbgptkRiSG9dupPtTMnGf5Ftax8d5xUNrMfKeL85wvVjee5inCy976Fi",
  "key9": "47Lv6Eh64wxofyR3qBZm3RxN2hJK3ZPu8Cy3s6DAbV7GgXASiyr5saEZf8VXhDtnrdKFTkd8Zf9VaKgUDKh4mxRH",
  "key10": "37BBGuNnBovo6T13Msro5ogZATK8tKzscRzDTkSNWZZPX9DWmMpUURWzr6DPHhjE8PqX9gfQYHZZizk4Jcoiy3Rd",
  "key11": "4g42Lqz4wZJeLMeDAzuUAn8NnMiesyjv79eLaYG7aAxcDPHWDmuk5id6WCj9LAvQ6wmMFEp4ybQgFTs8dD4LUq5z",
  "key12": "j9naeEfwT15VM2mZs3sW73CZhWFEqY7JRQynCPL25ukwpXnn5693FDZwdyDtjp5ZwcVQ3yBTbHDJZw3xPQ4wCRW",
  "key13": "4dUWfvkX9ZLd4C8TE1qGSAjMszJPhXMrQJXHXnxxdVEUh1PbmMYY2V3MMDuow21HHY1beB5mTKPQBXARVQeoS8ok",
  "key14": "5UnkoL8ZLFD2zmiVV1AtuuCYQGVsf6tNozCr7L1QYJp4WmSn8MoEp3vWwo7BzmsKoNeh9kKt6bwnMKCgJPBnesyQ",
  "key15": "4ivP94Esx41s7KzXTmLac6YgBqPKha69Jv5H6K7uDd5UX489NRSacnfiFrqrNQ3eyEVAPBmkG3PEasQc8SDgDjk9",
  "key16": "4cSmp7fRvhrowb3xVhssoJTbYngWGCYMsMjHkxCgdoZFwQJatft326FTei4W6P6mjpZ2suJp5iPpV2Jdp7CgGhgF",
  "key17": "2ihrDiG9WNEJx7zkL1Mt3nSZzY7nVTJoSva9naZmZJi9uWbgGybc85caFHWpWfX26CZNPsASZcsdPxwhy3zxjEPD",
  "key18": "hu3BLAT8SSDNFhkQBRe3VXQC7uurT3BWHdqqakqXkJbmg8x4qYTufQ2T3mUEMRS3XNofGL6gHitxd1pJeveQqqT",
  "key19": "2UpNJuuV3J9wbCY2pxkvMib4jwMQxfA6GcjNjFu9hMDsPs22PcjZ1uaaHEEX4wzExgPs4rr6Nu3SyEdM3QKMWq6e",
  "key20": "56mYaY1FAuAjL74vo8z3FXFSi8xB6QnqujnoRPThYD6Kk7AmfS3ePFxFUxVKDuyDAug2w4eaqatQyDbKq9J8BGAS",
  "key21": "3F8b95v4VUpCcoTEXLRLRBp1bksrd6yFr4NcHB6FvFDvqvNQDkUMbLT2DXisJN4sLZn6rbWv2xRFrEJurHMtw7tD",
  "key22": "8Ff9XWT6cxvo4hqZ5XQbkHR8RNwENhAovTAy9Vi86Z2jEHdBASTikJS62JNuJYgVSFFrAyfkK2rAQnEtSocMLmq",
  "key23": "5xMTaV5UdFq7KNL6oxjsZL75chtsfzaETaTMrUtVWH6GDJmyhNn7n11fCgBzi13p1Wh2AEcfgjwgFp29HtybB9t7",
  "key24": "2N9i2Ndgg5Y2YAL1EXKRLd1pvZF3sQKWhcz3E95L99WGhDqqGiBczVTUncKu5EkfNj1jwRy7WGMyvaumXTfvFAms",
  "key25": "aRiUTUZYVC76XZBhMmT4VQQ5gjcWaj3RNt1oy9SStvJifbK6WN93Ab4mQDT7ps4rAN1X2TfkTaYz9QWUNd1kgPa",
  "key26": "hmDHCZXxv5GpgQCDpA3uvVBGDWq1BkjFxA3EPxk5JamjHBJ79uM1dXBXukUM8RaNFx8LqdGJbMEYfqwijhWLcMf",
  "key27": "5NaFv78awmsDAwkpjLXjvkHWhBkJNtnCsysQKSkSQGh7aE2zLwW66P3PdKxxz861pFu99y1EsXrESQs5o1P8Y9pw",
  "key28": "36X8mFpXjPZzNMidow8nBdcbaCEmmrLTw4YAvf3dmkAXnpULEERsXmaxJe9JCnp16SL5Bo3bTCwnbVoSDPFRjdTG",
  "key29": "2rc1xqhyWKEMaSSv3exP3fKjqib9rfkfGcVAvDWe7RoARWLUUFxMuRS9hRkJV8wCNNby9hNM4NpUXR11i4WUfRZ8"
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
