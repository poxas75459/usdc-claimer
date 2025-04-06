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
    "YWPBCyYyQqoGoM2XqusFrgJu2tVYPtEV6RoBaSm6jfHXkcU61pJmmwUSLadJVaw4ZMR6pbWsFUuqVzMDZDwpEVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioiUJpRJG1nAnE8YqmdDr7Kht2oH7hpAvjD8a4rZUSkZtEp4hWg6j1cCbhHemwYowLqRcsUdfBBRSPjGMGyjBpa",
  "key1": "5fHoAAMcReN4ESTUEGmKFhjSXtaUq6muyEFjbBT3vpgoyCrGo5hfXL1StFJDZdXUC52Ah6GXkxMz4mFLGpi4vcMn",
  "key2": "48zmYgcBZSyucHcXr2Tmjvd1evCwAYYQwSgf9Qq3Swg3A1VPg4VsRrond85YNSNk1BZNffzaXyWWvBBvQHDderiV",
  "key3": "3NVtfp8fj7hsrF4Sn3MGMeuUH7GytrrAPPqULrugTrUAp3Dxdw1AxMP7EaHB9C3QbxeqD6Hr5Q9o4w2E9MkRuPk6",
  "key4": "4XUzobRbXD1PpQwvyh5p6ANDEBV5uxsPAGQwYcqZiX2G8WEb43DGQUez7nyS2EoiyRL93SkqUh4vvkE6JNq6URTU",
  "key5": "3cRkg8ZEfyVRVdAXB7gE3FudYUSQhuovZDUzYUsdm3ebaF4MhB6bGME3fCe71mGPdiAUqzbrhaJoprojdnq31iFu",
  "key6": "51KEGvu68KscveNFaMH2R5wbc44R4sYsTvtqQURGHGxWZCZ9u4YnjFVtHcjo2m9fyMXKyHSZxjnZFNXyXdGZS5EU",
  "key7": "2cPGHp7d2aeJ52KSxUXR334scYzER93cGQqtLfRNBEKP8dcVkQDHueabvjPBJ1saAussjFGgCis9wY2PN3xM7zqj",
  "key8": "2FKX171KkxACbTYEgSepgitnKWRZyZwn5h8LaLj2rNQ7ycbsXfihtbqE2tPsP27cFrhpTpR3gkVHbwjkyXiFPKQ7",
  "key9": "39orw2bZcd3oe2hghSQbokP5r1XvprXp8VEJjGDYff1cP7oC6aCwd8B2EaZeSJy9UjGnT2keuKq9gnkueuetzD9r",
  "key10": "4sT6tg4jBkE3WhJWjvcPqXXXVmMCT8R3sQ1GrXJwekET6Le5o9QThcLWniuA89YKjfUzZdz1VnpJ9uy4V8DDf9MJ",
  "key11": "4u7KEtKXGfwrKaBJ5pipyyyEyLg9smsPWcd88JSCxGtErkyGBUrefZpzCDrLnuZafh72BXtm5QDkL1WSuobNSdCR",
  "key12": "2CwqkgD5dMTkRxA5Ph3KCnxKoG2gFbaTmcSSVVRSF7GYheZsbE1YB1aJkAksPV8s6fHqJGyE771cRZvAy1nomGL2",
  "key13": "5WxEnV21kjZ3XGjCtd7uxv8kGKBp2BjrVtYcxfknvcfS5fiV1rPoPDidgfAKvgutcyuKcCvCcgoTC8refp7ofs8E",
  "key14": "47pLPzaKmZYhzjuJen7z2UNairhWhxpFmcy8LYk3kLYcCXFZz6kUHqkPaMLGoXFkNejNgRvgMH9d6E1TDxxUAe8W",
  "key15": "3rU3cKDu5ahhSiSLaaZeHFuJouPz7zVCKjboM6JfSiNC4rVPpRF1SVyXdDaU5LmgqFhbf1Q98xYMFMEe7zKQGEX7",
  "key16": "2xk4JmNNP3MJiZhjKZr6tFUMhhYcKvb97wVSb4Gxo5kyN2VwwwEZAXYZSsK5QJdJiPqRi426LWpVPuPDjaaHzByV",
  "key17": "4bkWKjhSpeBChLiqpBEdKdVr3agon6aMmADERKVsLCohGD8QTxykiuNtgJn4HKnwVjEikDTALxyNmKoASdwdqWyH",
  "key18": "UNCJjAYfV38VUPSjrSa2NebFwzehhTLVMbYMs3qTpmPQvyjqsBWPqKrAtThECgSGaRrjdXRVLQoQC6rpC7Jp3ud",
  "key19": "5n4H7Vi7r3EstDkmw4gTezkuUXY8Mp4PwgoT3srVvJ6xPnCn43A5XeNULAjK9n6QQqecEjsGtPeVV7jy1oMcvM78",
  "key20": "5HxUxzR9RMhjczv3wkbu7e6h8Hoc9ztPRT1JVS3pw1t6b5p9hQ1UYKPzteHh3c6kreNp3qpMTbta5Ca13Ezx1YKZ",
  "key21": "44Ges982gXvHYcRpyxtB4TCrbjaLEGWDHM85pGNcXb6X2GVkUzbcBf4td8SQZZ1DqxxcDUyAkoWdu9hybDyNru7L",
  "key22": "gHMhzaXhc9ikJ9AiMxHiqUZnRRBENyn9MWWdHWyMEjQfpZfnwUi3iQyic1ykb7J9hVHFdbpbdmdzsBQ3Nk3qX1J",
  "key23": "fAwUkDPVXTSFqRWtxUxng9XLpWRUaVKAV2ZiZzooKSuJ1mtLxSS8pcxMsatBoWGJQqWib6vNBoFjz6wqjAUHoyF",
  "key24": "2QUGtmqrLts5qxFPLJH9ACqwqVdsfHW4RnNDN2n2DphfjZZ9w55pvD4vTYVaisbaJRwxzGFKu57HCCwESk8H5VRk",
  "key25": "4rYPyP26JTocuyZQhM49CCTy2N4JaXEF43SoiyesygquwfExDZVdn4sNviuLqTvpL7iYFiGZ9U8uLLcgeejKzS3d",
  "key26": "6bqqaZvAuS5GXmk7W93YYbLt38EGEpu1j4vF1yL3R3oxs2oh6VZGjhQHF6j9ZVhJS7qgMqo2XnQdz3haKygrr49"
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
