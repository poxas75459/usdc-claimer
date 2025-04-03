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
    "fTS5yvbqhjJSoBov3YfDwWfWu3QgoZm3JgmAZRv1ZxJczj3uvYeP7aChZsemjqdsoEkZscmFZrBbFkH368iqdWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Edoice8Qh2jP9i3HbudD36dhQfSCx75fGMXWHbwwgaKmbQUNz24W5Tc8YXQt4sPFNc1RZqAFuCj8ZgMacZNRCk",
  "key1": "3SxMXwpdTyJtXEqZUTAwCJUh5w8MjkWvAXeSnt9HaqvbPC4qZ6cvJwuM6tV7esZMCr6LYe9ndwtrtpaB4G2ibC2Y",
  "key2": "4JVgbzSANEqVGkj6MCkpnFcakYhvwocc4R5AUfK5V7RFvmfVq4N5V5dRBefpEmB6f4bBdiQ6sigaMsYaGA7H2rFa",
  "key3": "3huAMsXGcXcGhToqe743ZcEvWFaCnzSs34pJhvSWbRUcCeB6YvHUPFXGXdgNiJ2wexEygG1ogGz6RpoTDQCrwkUg",
  "key4": "3yAVP4pG8V9rBYNiDVLWvfSWZeHVys26MNRCBv2DJt4dRxi6pizfRFWFMCYtmS8j2qJXtM8uR7EWUuDU3vzMpj3V",
  "key5": "5tWSecSp5SyYUsr4Ge6hb8CC7C1NvnoAatbUvDPVtrJa8VXpeMEGWafEDSP8batSY1gLhYbRFAfPP14zFML2JyHk",
  "key6": "28gSRvL8GfGNC5MAUQN6KZKLrJgi3fUUjtRrEs2NezRL89MNCKyZ46kBdzTV2we4uoTrnvX8HYNrJaM3HpW1qEgB",
  "key7": "5k9KYMtFXJfjvALGPm8A9V347uFQwN9m4Jd5nQ5SW3E4f3vihm374paYaqeSY79Q9AFUeZtBcvrY6QaW7GCtEqyu",
  "key8": "4CEpmxJwym4iusHvDoeDCDc5hxH3wvcwD7A8Tr9bCf79suRzZo3cjGavUdFsdrf9FVBxn6tfqhhNcXkQwZQuhLfi",
  "key9": "4U2RWoY1ZBMxWE1AqZjjGo4bGMtFs8PCS7aKK13mgfGMNRxzZGQXvgGHcsUT1CuVk2X2aLFahdipx3DMhjWvagpU",
  "key10": "4iXcz63uDfiN7ENGqUHPDo4iufYGdEb9ajx9zkf4Ndi4veyQHZNA4EARwh7GA1FZ9PwX2WE6UdPHckdn7uGE5EHE",
  "key11": "4ArKdcNuetyiSbJj4GxDqG3g4C2RgqK71Zw5EemZ5kFD8ETr1Vnokd3dXWVURyKPLPnshXtQjMMqUEuXpsSmXBHi",
  "key12": "52TS3Ci3cRjPg9R9ds6jwxvFoKSEqjNtgfQsHFTBdNEJGXMrFHYArji7xwWXbwGW4V7fmNa7MNKbB1j86euL81a5",
  "key13": "DTPcoNVDxyY2KhAHhLZbiAKb5v1fdJMBKgJTqD7J9Yhn9dTAbevXTCRUHJyRw2vQRAbyMQpkWgPHdtxnfhykU6L",
  "key14": "d5k7AtaWF4hWoCCRe6PNNeTr3Fp45oyF8MbYSgNjwNmcfWj6xJbSoSzAKpvupBcTSVuKL4oDfEzmkzAVYhqD12o",
  "key15": "5nrGBJNRvx33DcLjPu1SJhWfgP7wPCM8R4wJSfjMbCipXrttvkGyccgd5SGgFxyLXpDCMBHmYET1KH1791qMDyak",
  "key16": "4DqMtAm6mXjSYNvN1rerreefdDwtfdccfFcN8nDvqTL1VnNsCCPQGcSinakW1RRkLxYXTR7HwTG4YattGb3rEkJy",
  "key17": "29msaD9vUNE5schTHuZ3Ked8a1SFE2sN17gBsPAhAXu2kBNj2DViWofWKdSfn3pWedex13ZCdwYEQ9ibcWiyJckY",
  "key18": "5M219K3sW5dGDT5jWyVxUVuw7ShqJqLsgBYntTQ7kPY1z9Ra83RGtny7dCVLonHyqNAVUp2wa7bxwFVjXvfaGpde",
  "key19": "4ARYFCVr2k1Ez2GFXdWDXxnd3fPJBT7fT9iBNS1DvNpGzk3d4cuD4Zs357BqHnQJWnhmeWXUWSKPrdL2t5tF1keH",
  "key20": "3GgNKri9bVjBUR2xDDbcmwn47mcAJ8PSjeefZ98jrVsfc5RU4QVPRDNuRWZ6K7dXBB1ci2hZn8hoGGz2V4jFCohX",
  "key21": "4S4MAWXJfcd2KFEx7SUKXJFY2JMthG3YMC3G1mevYhn5Z691FqNTbFbDHNDByNGrjnVgLkzUTQpE7jxNgc3QKzKB",
  "key22": "4pypYDWBFkH93TfUnWUvmj26cN9cf8A99Yy5Vqi9coue3nRsao7mLhEJoeK4evunVE3G5YbUhkLJJ4wc1zu53UHj",
  "key23": "YigWFpRp35nC5cFUj8w3fyPYM9YM8nWDMnnaKWkv81fQMAJEmfRcJLPTTW3Cb8226C6zVHPrZAg9xPqKEjPCjp7",
  "key24": "FFvm44C2UvN9BN8rq4B5qVvxEYqmjaZUSsU6NSXshFU4Gx8MbCmYKv69XeBKGsAUFh3iHidAGQVDnrSXXhfw62k",
  "key25": "5e5j92594tNznh2JQgiWVkUuYxYFMz6aAC1QkmMtYiSJV4JmfVz6zAUw1Ghc7vRXbX11r46RfSdBwLthV7Yc3wjW",
  "key26": "mcoiPannwCKg91ssDqgvan9fL3zZ6Ycb8EWX1obKt1zCWUPY1iiPiqiZVCBRgTAPqGXSQaPSoREJgDHfrZBqzed",
  "key27": "2pcQooW9BWShypUnLHJXuGvcwEHfkHit6fdnopXHFKLrAuxpnbj7LtZH8NPkokxjwMzPgaqWKNa9BSNr12n4241e",
  "key28": "MJcYgjGU77MsL75UUHRFgLQfrBaU6kXgVR5zAadZ9YZdxsekHCbLpwXB8HzwuB2kBohMbQmPyqhnpE1wzdb5LKd",
  "key29": "3AVot6JggnajfgeEueNg1JohvtAe68MXjTuMFFpKqfX2Y79LMSCWAaiNo3sjPbxxfBg5qXV1KuhZyRBhFy4cJMrJ",
  "key30": "2zNgYoBtPMbWKoFsN54uT3SksVCGK4qe1czTLK8mZ3D5jfXaR6ZnK3BhuxirFfrPFxpNPJdeKXhECJm4ew1Epsoe",
  "key31": "3NvntpLwgJUvVd7QHgPh9SUazTqy2bxRm1qT2Q1xaP25XivKjZpMXdAc1WnK7SwiZZX5uqRJ88FaQCkDV7KWq5D9"
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
