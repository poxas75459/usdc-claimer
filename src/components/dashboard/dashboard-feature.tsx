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
    "2Mks22Any7zwmSWNp6BHpep63jjPR2TLeFK2FHbQWXgsGnjHhvSjYWkBXdYoTpnscPJLisJtXA6b5Pa6bKtuyUPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hAscUB8BorbFVwi72kZuryzamu2YQngYvMj6qD1C1UhCyRCVAURZNcn13nSMry7EFHs1kBuRTfPFrkGFmJ2dYiT",
  "key1": "bzMsWCbKAKaAmgdCHrRbM9R4VS68NTPZP2iZbRKpYveG6vEr6rxdpf13Dp6YiygFjFkTkfwc6RAgekfz613fJ4n",
  "key2": "4qcPFVZhXcHxrasgLHT5vD2ZRuYEUjy16CcmwJMAs8RCcG3hPrXussrvXZdD4jZvo4MTqQKGVEbPCLDvpDjpLWDW",
  "key3": "5qN7r51hjzedhgwfgyDc69pHtvmNrkvFEMy5GF6458XZ7HHnuxwiLZQ5YnXXmQi4Zroy9rdsMz17eapCDfzH5GaT",
  "key4": "2JkZFcjSYctdx9bvtq91a28A979PwCjKRztF9s8o8Z5LP2WTGcweVN51hKhno7bHXt1mrNfhozNAk8pxUT3crviP",
  "key5": "3GXd8xUBQQM7QdMShm1YVq6GcGxPpBrDKGyAhWf9vNT89pKYX8oN64hVZpoS3KLj8tqrP1RkM2BbkhTatD56BPri",
  "key6": "f9SL4qBW3E4178uLd7QuftGfhignhz5ChhwGKkGaYKV3mGYcdessM69np7aoW6cyAJhtzVJJz7Pnb7bA7MJkkHx",
  "key7": "4iwS3mSbR68pX9TvC2BR1NgCk6xiXH6sYRzvHdwTu6itiwb7wJeGLptJtFyjAnawT7QLXZqn8Y8WxWXSputir4yi",
  "key8": "4aCiuiYnwcXF3DZLMJcgtNsW65V2YbFzWRN9P5zHU4fqb3LJwPDU5cX5e6181Hy1D4om42J7nkobuGyf5jApTDYX",
  "key9": "2q3UFG7a6sckNFQ1WaZG2W8wdcGoy51L9U6d9ktTXNGpbH1GpiqQrj6tRzESsuvthkMwG63vzW2o4h3HatxKdXYj",
  "key10": "5ehDcFytxD6RCbjtDGtt3zp85obexTk2ui5RxPioreeMrX4FYteso2EwLGyw6PRTksCXSJgXdWqohNEw3VH6ZBQE",
  "key11": "5X6wSBRGqxCpuMynk5eaxwY2Z6ZgyvT6tovCem5U6tAtjVkPT4EERYSRwHnBraQVGS3gAtTgHDckRojNNEcKWyCz",
  "key12": "5jwJrRXMMGg6ZQ577JHNemnKQDiWBn5XM3XzzScxVoLbpvppS5p4Xbfxeh6ro8S3Kuez2S72zvLNWFT1jF5uoGtx",
  "key13": "2qWn7Sb6ZKE2vSwHnKRnriPJRDpcnUvfmQHGwj32f6qJhrFQR3AmRmuJnNfqNJkuFYvtJAkR4undL1gPgCp8TdPz",
  "key14": "ijxXfNDARJbpzCiyRy8q19HwW2P4tjVe96ieC2NUkB6U4PUwVjRVHJ574h6RmTni2bP4ysdAk2Gj4Xa1DLL1LtL",
  "key15": "3zCSb2aaQ3nhW2HWa5xfBzmT2y3pZWjzvaaY93jqqHE9xf6SENqrfEzwwaZBqKGSe6wGiH9uFHj4qoM8VorbvZzu",
  "key16": "3TG1UPJu92UyZywK1usVUw1GXJddzvjC1NNvifdsG5yLrBBEWDnD662zVi9Wj7uYjkXWmcSPPLbmUSByxA7rW2ag",
  "key17": "4gJTzPEccBLEX9mKaYWVJSLohPXRpm6GYg3sgoAoWkX1hnZS7F8JKQ4YTAcMmQJmyoSS1nSz7C6eP9p89Nt2maYK",
  "key18": "3T663vzCDSYE9GdR1bLPusd1gjFLCsZBs7G5F5PX9Nh9VTSdwnzvMYDGX2nuiXaZxuEnxKcjjdw4ikR1a1AhCFzR",
  "key19": "2nYdfRKVvZSTMoH4zur5YhQsuccj7TJteDPrhcqGWQzaezaDq5FJH6RKxsotEsfDU7DjiBfFGfzP7tLm2eEjF3UR",
  "key20": "342kC78wyHNhEfJHbq9LanLkeCHeQRNVTxo57idAxFBJkR3tTeBNndbYkLvYhGCxrigUV6hiUGCSzXEiLjLbnu54",
  "key21": "Lo61PWGyqcKiDXhDRovvDiZgHEyP3JsTRyeS2opYNVjomgDpqeRvUsm978rK39jjHLaoP5pLfYJwFtdXBTu2ehw",
  "key22": "3bW4TDj43TYnhoEXiL7TDsxm3ZQfK24K7XJpvz92D46ppt7EpxgQA4mshSiZ6bMz4to7pY8BtS752kDRqo5oGiHL",
  "key23": "2dYhMfZGptTeRg11UbkiNYnqayY1J5UPVLrPTD4GkRoQx1ZpJWUw2ujwXBoHX89QNuJ4LQjJ6KfTZM3NQZuwsSqR",
  "key24": "3A2jvbZz2xxVPDnMFPc4CWotAhLvxYAfFEe3NhjWQRPhBr2szjKj7yczZLh4LTeowTHUb4iS1UAWzC5JJgf1KVcY",
  "key25": "37engTUD6z37yDgDMf9sdtcf99Ykhs4uuZyXFAmFLKHBHA816r8jL2E1ppzoYSCNXbizNwauSurJCj3jA1646vLg",
  "key26": "52Jfcsar83A5XHttGytq1jepfA3u1WXfbgq4GasvoMejfnE4Gr1pwgeEVbVPgRmSqwwk92e8ryARCdn2PX8m5M6V",
  "key27": "2wqxeTca7g3HpWm7ogTSYzxy1n3kYn7rMACk4LVUAC3RHNog29DaR1y2CcYtNbvs1PayJxwbH6TYxGYg5HVGcAhR",
  "key28": "59AnPmJtrSsaK5P3qeYfvxG6UtR3FMexLPtSptyBMYyfKGwAPzqQUgeqj5zFLXCZJekkvQYx1RB9KkNpRs8aU59v",
  "key29": "4hCDLU3CivMzbGMYKRm69ChHMPLKGPfQZmLycacoAqWfmxuJXSnoWEJLpzy8GUs5eerHADPoPevjUti84cCEzUUd",
  "key30": "3jwAbhoCk43ZD7hLQqXeEtEuA7HAAns9GNENPvPp68W8cFB4LHxhuJW4Db1Pj33SQxsKBLPCbpCYjK3dmbkD3nu7"
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
