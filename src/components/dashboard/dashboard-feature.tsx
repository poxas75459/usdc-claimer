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
    "2u6hvdstoFLRLTefbX2DtME58BcUA8FgVm9dGiYD3wxMskRSiR9KTJzdrooecLc5dyeQjfz6C83YPmPginmzVrJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fs1PgiFancLGvicVHoDJWSdQynyRKqbKMWivGTMBMst8AXPH81R6wfMHDhaiMaaHTSPa5tdnshdWzbbhEqsNx5x",
  "key1": "2bPyLUXz1AFkRyn4qPseFQf692HGyvRUpVU1jdGumTu923iU6BuBnr7kuc61qPvFj4jCfu5rxsuNHvGYo1fuZXD5",
  "key2": "2WpKsgcGxHEYcadmWhYzrpeWKntfNwy3ryPsy5jaEraRPqvQDifL7SmEK7baqsYGL5Yt88YmTfAi5RC7fYBGPSyD",
  "key3": "5Emn6rbvkMnaX7SadrbVg25Ch74JEDifD4sXoU6hrrDGbhD3tvgWPfBWpLVPboSMZ4PAKtowCaA3ZYqvtZ9Tf3bi",
  "key4": "2BWJ9qzQVNYmw3mnU1uicwRARdPyQDKKn1iwzdiZRrEAKjciSB2XyTHjZFf9Shqv7vywdKPoeeAmnfeREbtwFHWq",
  "key5": "4dqz7c92TbRdJHxsHtmjU2oppHpZ3FiKCp4MJKCQoN1qDzWpFSwhF2Wy64TqoaSAukdo47TViLLcQngmPeEgpHmz",
  "key6": "2wKbhcKZrFmkuH6MAwFN369dkx64kZAwRZhtpFLWmUotUwVuC5BkVPoDZ81ZbBnxDSKkAsns8dEKggkw4yM44Pr9",
  "key7": "61eHQPFKixbRqTyM78FV4Au2aS3EMXrwf56mT3o5tdNfMYxNJB35nqKMfqpGAHTvNfdsRLxpLSC8MSmuQEgDqSYr",
  "key8": "4jE4WR5nJqn4awPcVUsT8ouZTBLY22qVVPouGiiNo66yT6p7YabBRmyspzJAuNuApMaWgRjYvkXDEdqwiVXTYT4",
  "key9": "5CMXwStuYPiTkPWw7kcnm47sNwh7HFtFT6EYANGEfLL5ooTutCerx9x61Gy52XYyQeSfXiWP8fNHAXob1cDnZvQw",
  "key10": "2DvaRVDR9gVGsnXNe7yBrMg3r1dyqpkyFpXpLZJ4B4YkU7xy1eoorVHkNoGZvQ3ycBvkC1SqsQ6aJs15mTqWQJZ9",
  "key11": "5z4dEWYva6zvawEj5jJvQRzWpoLj1xhJni4atpFwWD3uxe8VupaXoxWevSPupfVYeYMXfZLMMQSyH5LnvGvpPWp5",
  "key12": "38bSL3d6nDq78zgT4K7BhbjtVTxFfrqDP2pY3hepbPG5r5Vs2DdwcW11cH3Aimog5TS55g35dX9d3WfPr4pDkgTf",
  "key13": "32anVwH3CgyHZEAgSD63rfA2vgi9R4R4mwMJ6FrMYSr5qupKAUDbi8cprjVRq31Crf9KPhcQu54MuxNqjSKN69uK",
  "key14": "5NY1rqNPD8dqmkQA6yEuxd1PKS9FyBNhtm9uWPH9nd6htwCrcnm7voZp376SFWtqvvK2eUV9TjbRh1Hwt727kf5G",
  "key15": "27xUMmbC2omNBtP1tYH9fdovVm7eakzJGVsJdgiV9NmnbSJyeKJZGGNZuRbvoqx9aauRJKuXHYftE3WBiz1cspLe",
  "key16": "mKbVvcTToE19UnqUEMZHRtEvms79xvC6pbc92Qs5Z7pEvhcjxEUfuv4xUsrgMi9oqwCMif6p6DeXCHFPZoAVSko",
  "key17": "3Ndd9q8oRFv2wh4WXLx4DR6Tzth44ay733TaevMpAPXopLR3ufgWEYCoXDzm1kaajaEkDqFubshiw695nAGfjQdM",
  "key18": "4hLBH47vRECQfonRW7Ugrz4xKZsa9jAfTXoPKs3pt4E72CP43MU2t116niFF8WKAYgYaVPsoKsVzjdTKaXHDTpVe",
  "key19": "26q9nQ5465UxwphDkLMXEB4wWyF688WBLC8WNgdrEyci5G73TtS6xsUCi2CvUGMkwc6RJkF7gHzQsFnnbivpwbUY",
  "key20": "5hHYqbtRruzzdyAhFL22rD9kMT5Ywh3zrLo7YsGw2SYyenY3oy4HVsFvdPsFr1W6MBwNdga8VFnzbFGKnXGcDZSY",
  "key21": "3kAegSKhiib7hVpZsvhFXBmniMyMyP8iR4K68fZGCjQe1AYqA2XofmEgquZz6xwU4zZd9v3X6qAeMccutqddzzBh",
  "key22": "4fDA7dpb4EUtfmzN1NMEZQPK33WBsY2oXGj3xo1qM7FXgbHQjkQQwLoTy6rdYAAG1H2EFgPPgaP1vPHA7oUtmLDc",
  "key23": "3xRfuFuCpGHBvqSF7Wxyr1yJRnfc9uG1SYL97tUzGx3KJcw45xNygVRgjVF1g9kqGjbVyp8dUhr5oBxfoa3Rhmhj",
  "key24": "PEqtsaH4oTZDUC485zcqPTvnwo3jChB1mKTb4DM1MA7ZSchgxtd48sUBWDAWLhCxUoKjnRme9ngR2wY3GZee1cS",
  "key25": "2oRmrAg7GUQsmnCW6YWNkFvGyjpNGddYkdcmnhwJrpAYJjNtMtdRMVfEv1hovNLaEXdghJcogR6SpQXpmKAAE8f4",
  "key26": "3sVz5qAXbjkExd9G4G3JtsY9o6HK5Hz1AaLcbbS2CyEbidfD2zBCi1oWshMtJerFR2iDeZB7ornj15cHXpyXcSZa",
  "key27": "5e82PtNcWUGXt1zFU3anc7RDagWd21MjA5ve5EKN4VV9mcTc8YVjGbwcoPjwvt5k3qKCZeYFeqBAqz6k1UTnNGYh",
  "key28": "2LWCNxNc71ddf1MWybecPSPGpH5GQHaEdovketiGrjMGV8ys2oPKiYC8oCq5HPrBuYZg7wUsim3akmQGRkcQtdYa",
  "key29": "5e5eti6s411gCFvptvozBHbCLJDQ8T7p8C7JJ6BpWsxye6ZyX29d89XSvD4TafYnW68jTjP64sfkMT1QP4nwK3wH",
  "key30": "4T6HManM8wZ1PU7Eg9ZQ3YvfxuSteSmdD4VTdZ4eoACTNHtKT7Qa2EQeT6U62d5XU9jsqnUjuM9DYHBHwtPKQpg1",
  "key31": "5xDtyUNHSW4jPQoeyJDczhhbPvs2ALxvhxW7Y82vm8oKk1pSMPyrMK1EjunLowZa9c7cBaNYc2sBrL2c9XJoHrMU",
  "key32": "UL9h6g8C2nqoeNYjMZpkr3Mcj2Ng3bTSsoCzDGZp4e6egtpim4NzzFi1bCYAWjV51i9UiKC6jJFFqr7BVT9pEam",
  "key33": "2Ug5hTSZdMHQswrUpnEkK8bEwhnLbA6xbiy78UcsmgGg6t7gDc61iL7pU2osXMtGni55x64sk2VLQ7q8UVHYSw9c",
  "key34": "5ASH4P31ax4Ytqv43HGZwUSNDQVndAu6643xKGgCrcBpAYJYPtMbetQD5njkn18HZBDinR79FjwZJfSJwgUTQoH1",
  "key35": "5BnwndYNs8EHpGbyXP6LssKiFUNvcEd3Ft4phEkvurKGEJjYrwW8gy1NShYSRctcftfGVgQ64yA5Ktwf1iZdNd5C",
  "key36": "35b79Z9u89NzU6KecKKBrG6CVUJ5P5BJGzgDnPx6g9rCkEi5xrGBeyX6ahcNbSogtN4qamUoseQxyG3WR3eJzfRa",
  "key37": "4rYgX1zzfrUoX1eHdUmJwgXSAYWvyactEfJAmqzhs9r9BDtEYUNABhGCjinLhK7ywkBKWjdhTKm4RfiYnFWFbVuQ",
  "key38": "58JiCbkbcuVv9r5WPzk9yaHVxByo4fVUB8zXHchyEqpUnXEEZ1AFUamGjYUT8KocSt9NJwL5GbCAfaj5PhAx4TyA",
  "key39": "2xEmQ6PHY5Gg2vEGSfB7Mf3BFna9Kp1UTW6aniZkFviDzVaBgEatLHPFNfkhCdbkQhUx2DtBtZn9q619ZdSmyy1L",
  "key40": "2mCiroiNuwv2kSF7JJU4jgDgH3L915gPJ7EQVCDHpFUEC3Z3U9B8jQDLzDDg684pBc6foFGw95hpbSgzteae5QEu",
  "key41": "Kj6PkiCwD8Z2qSox9BXHckbSPQsNhxSRt6SkpJQQQGWv1Rm5g18iebXL9ZUdJNA1o625go4TRY5oC65St8qA8XT",
  "key42": "3499bPafM5Pe2rxeP3td2kAnCWP1XnMQMZ4ddc6ynmZryq1kUpHG2JRqZLtsm3M3eceiyKVFX3g45nZL2FQDfYaE",
  "key43": "5JfzrX5DchrfRRsCMNXuLi2Cao8Uz9bCTBC5tkY4Z6mCrnfs253ofU9eu8Xt8dBYNWiHCi7xLor1eBRuX9zwSJRS",
  "key44": "54D96Gdz6oaNs1nPg627zNsUCM5mkXhniMUYSvpnUo5y3gBx7mzkK39WhWu6fwQNy2A4UMwmgXdHwyMrDMi8eG41",
  "key45": "4uVVHtm9JzF39XMjdLYCDWnZZ6qLj3xycdjGNqH2P3J4XkqyAfdK34D1ddNdU4VXv1gLjjiHaM61UPYzaPQCht5a",
  "key46": "4CfsUR2TYTyg8yAB9m4bgYPhpT8DxDWHf2XTwZCAfpDCxh7STvNzfNeDn3WuhDrVSEi6q4AJufjNcLVTaSjpk6mH"
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
