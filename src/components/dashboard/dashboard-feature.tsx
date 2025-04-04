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
    "2gPMk5mc52VuYQbMpt6W8P9EZxp8TJw9o9dGi78amkx2o6VH4aiWhd8Y2KRHWDdKLnMkdESMVEKHyaMzDB1BnoaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44L2tAjirrRkm3GNJnB4Urmp5NxMobSGGC35KeNuCcrPeYCboWwptnXrt34RFahjk2e1adB2N38Pt2KAgMWjbakK",
  "key1": "4G7pcjU9DhTxJpZ7X3fmkkGxEi7NdU2Vx4aQdeQGEFgLNWK4o6N2zTZzJP6Tm9Ffe295imYAQxgPZtE8qVuARLym",
  "key2": "3S7J2Y2K9eLgAW2ofEGN3CnnBSxkBHa7jG8K22UWY3nyGoJWmwTLsupyyRK7S2QvrHtV1pfFEuEcm9K1wJrRZExR",
  "key3": "2FwXyGtd5Zz4Ddd4gUkX77ayEj5cEezth32xf9Uo6CYZ5jxWkBFeSFE1YD2Hd69AGbeJVsHWLtRnBsCVQ6z6DGRc",
  "key4": "22ARu5YdsN8SsPgoMTtC5GsgYtrgGsGPkX9PsfakkEz5YiqzaBv4zQ3GWgKn5cnX32ui1jWxApttYkovJRFjpZy7",
  "key5": "KRhaaoqXn3kZo3WuYcNq1Exk2AkDJNMmiHXykpz3g8KNsTS3tkbVvjtmUHqvNNUnhMDgacUJKJ86VvXLtGfpBRA",
  "key6": "4oWsRWgpTYMaieWfbaLCUoc5iSzoPYwXguoGodCVZQM3i1MANGjSTC2xKSrS1pmhKfSahzgBQbzRoZcUczL2sf4U",
  "key7": "3FDd63wPkTcpn4nzer4RHSPjeUnraUbMEVDh7QTszYsPdZoAnriG4HQreCehuw2sZNagu6V7Eq7prcyFPRFTqZk1",
  "key8": "4KaGmZ7vdHEK2zFDumRut5bcpiw4yVnuYkQjfi7trdU616hbCiFWpPvGRaVbtxWRbAeMNksjAqAex4QMVRFd8wcB",
  "key9": "3y9EDFPbqJWUQt23ZH2udavyqQarvxtu3k2qUVq4qCAvxnSD1BfN3NPckZQjmd5cZXEWmAz5N6LRRQ4vvjkt8D7Y",
  "key10": "2h95yYej9EDxeg2MLKuPrWmA3TVoqwH3wuvMZbs9sT2ufVsuFKfLc7oGVhmSw8YWZBUz8DwA2RQGqPQ4xYNJyWnC",
  "key11": "5HqEkL54se6bjUS4pGj8UHWwdbeZpgNPRSz63LLnNqPpMamJ4xBmG5azXiKvP3cDja5TBLBFvWihjuGHoaNVb7T3",
  "key12": "65Fhp9sAC18VAEzpGJdkpncXLXTb6aLmju4XGfcJfDMzSdX5Xa4z9JpKfedDYd1eWwCqtVghNu7o6neqUSXZoPMP",
  "key13": "2hfusmNLo1gQTp5ytVx8UnYJpawQQfVCXX2JAuTbHsJaNriCgpqE1EEqtSf1Awb1CsucCvJPa2uCn97uaEjffsrq",
  "key14": "4s8CEp2QbfRWs4uyov9gNm1Roz2T35q6vqtA5D45PoSCxUEDmSsxWJzLUQtjjkLLFaTXTuNDX5qSZfY1d5HzBJfe",
  "key15": "3EJXQR4cC4V1WXw9Ew7ijZuK3SfwhoxfLAASPEJk6m5kVGbq9Lt5znRFLLWbZLoAs6xD9A5ahRuPPqf6M1Ryieqx",
  "key16": "MPuqAbgp7kp3X7oAF9jg6R2DaFsKb3EU9rytfiMLrLfeiZeyvoTrgrG71KJ4VyQq3bCYjBFMky16SfGqSwdx4UA",
  "key17": "2L1RHCdQ6vq3jhvKi1qcraN4q4sVh2thXL8u63Cui9m4KVTFY6wWT8Qo53QJUKUMZypGC6QcNQviUiDbo7Rx54kK",
  "key18": "5u3LcCLuyJ7WFifiJBoEJFjgEXrPLtWesP5Dm2G7rpEYrQ3j1meb8t79xQeSCwxt1SuSZ6G4QebG59NarJ4WGSV9",
  "key19": "3x3msjBCgf1YHQq4G4MfjenW28sNGVTq3XcoCAmyqfnod914RkdYc1pkwtkK5owFG1z1jQ5ixdCKjKYX1k6GopU3",
  "key20": "3drM4YjmWwy4LgSKGWywsNDHXQES8bzu2LoxYst2v1yjh6TyqLSc7QNCw8AAybtGdugXWvrA6Z9HgjehxX73ck6Z",
  "key21": "5LjGaXHSHMyo9NUgvdqKz2STQUXN2WWjKeXkb3uqpim1QzJS48SQnMs3Xk9tNzE7x2jjLFKRLAvU99knBepum82a",
  "key22": "5aUozAtceRh28eaQ2MuNoKrF5mTgJza7qiiYixzLHYZW4gRJkJGUiwfL65uR8qErsfytWN8fxrxEegS7XXWhsAZk",
  "key23": "3NVhqshb94eYZqw5uxEedbHD5FxsLBcipEgCzbZUSJ7amCjtKPS2we54u8bKzBEVFSsUapCKyc4rHA7fYPgTdvjW",
  "key24": "2fW1JQDimMJ7hySGgbeFvFPx6F4DDtQpfiR2HQzYeYLpS2HVDxuvKbmWuWPiyCrDyV7Mr8eBvg3DmPhHri9rwNDo",
  "key25": "33PApPmZLwzJoJig4a1tvg9xNMqhebyvpSNvjLMHWHTmmvCBEUDU8to1ctDMAFd6tZS1rum2BuphYqrqd7w8buih",
  "key26": "5dZWJYYjqm4EgUcMjojRS2udVidg1hhoJprGeW84oWHcmvaY26a591Ht9UjDF19kj2YCTVMoiD5mpiHya5QTEf48"
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
