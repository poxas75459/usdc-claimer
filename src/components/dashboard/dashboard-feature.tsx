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
    "4Z5QaffRn1XMhmyxgGTUmZ94gSLGaiUQc9VAtnptccxaqrt4AEo6YLsMHtGCuyBRqXPEi4wLjoSouH4pNNEHtAuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBvzrwNi8U5HmztzEndqfMkNnz9VVUCifNMjKyN4C9i6VntpAHQoj3zgSFXbQm9tJ2FWguxLmfRxUo3rF5GsT7Y",
  "key1": "4gCVjpAWJ8rX34dRdrGAUz3iKUgiid6X3GbyZn3z4jVcKd9czBy7tEp6RXBmcgiXsmegsingomjR6a425Lc1QR4Z",
  "key2": "5w8FTppq5UXhZCDqbt8w3vkt8BMCaVSNrvTtUJJg5WoGpdd5YrDgtNg2hf2mWfZC6zJL3CjCwXPWGcjDmV4KvLDy",
  "key3": "4u38mA9zbW1sNmjqDGFqQkzXXzckpaUk2tMp1Fb2ofjQQ9NRLNnRfGmJmFrqroZ7wKg6VjPDRvz4eiY1GAADdxgT",
  "key4": "5HLAbZAxrXf5yYQf6sA2tVzBbMJQXUFY8RVR959ZPLSt2abmt2Rz95itdTnPXMRyPvEwwtP3SctoJJCaHCTcRqZG",
  "key5": "aMGQRhVNQbLv5HfSoejLchRidsYvDVaB4wdpiSzJN42dFPiMWAuNETPYnRBKoiuGQ2eBzgRoMpvbkRiCQk4NCKb",
  "key6": "dRSxv7esQS4CCwP3yxMQNq5tNv1bAEpyvCs4VE5Bxmdgeka7AJ1XhLDgE1UNtepFdVbEELycfrVpacAeaL1sh3i",
  "key7": "TJyF6aAo98xa9URfUFbRs9DjockABU3SutGCA1oxnAoDPXatH2h2U7Zi6YDxaHvLEfjtKDwZ771icVeECcoZqSP",
  "key8": "BM7qbjeKyb8m85wbGqqpX4EsFSJTB6jQavtcjdm6X2R4ZVZP699J9ySc8Gi77SHfmNkb2KTabwTv64gyJS3efT6",
  "key9": "4dBJHUr9rNRJUqDaSRLGBNh3sXRkLhYsDeeSDKceRPrLYgtriQaSG87wCq3muL7U9xXbELXuhmLGXJoTmx9fQRqB",
  "key10": "3FXQAqioz5RToe2iD6qsbkPu23Pb53nqSLQRJrE2QvWkkTTBiZ8jqkbJezp5jcrUgkupcPAsxpXmCTYYVvw34jC3",
  "key11": "2oaxzRknVngWx8xwPuJyXoG3Sae99my3R1cnTebSfeYTspfhEaGw6aMUdeCH786bX2ioE53cUk6yaSgB1eRU51BJ",
  "key12": "w7UsSwWEJEHQrLgehpKaejBDnHfCK4DHz4g67QvAKkSuavmsm3XWszsd4de2NFbK6QHDdnPZ3KBLhYfjN72rQEE",
  "key13": "2w8tgBA9MAgJZ8VH49hcWiAkHQrzyKfvLLN2aUyPHTg8kpPiaN582tvQQiEfjuLzEStML4J92QUz4nr7CkPW8m6G",
  "key14": "2nMXHGkc29NdTg4JgKPdnSh21whPHT6Bexkc5EEvFcQaWWbb34fmmEq4TzBHqCGsENaBdsCnd2q7hy2oS1Aodjir",
  "key15": "MLTDm5UJjuF3R1mz6XELF2D447yfbWSD3yKsWfEUKTR5n8zudb4tMoFT6s8yxq4rJfXXnVcxiQbh5ty75zsLAdt",
  "key16": "5PBJcWuF4oTLCNKdtLHpBNAyxknm9avea7EMjoCsC7y25TjgF9sAd9qLnEhsw6SARpv4EPh1oUF5JsTtKy21FR3f",
  "key17": "5egBL23UJLimh8wRJMAVPmN5aG6hwouty9seEWFQoAPJUHLXwTiX3hfb5BeaLt8LFwGrSHWLzptMT9SrZZovELYM",
  "key18": "4o374pwZb8M8F8YhE4LVDxFEyUqETZYDRaRayLR7WT5jTHQfS3zX5MtmU7hPLXNZ7Yxp3bTZTrtPdzfzAa7Kr42G",
  "key19": "5HJveJhXM2cVkSA25q6zvtzeyh3FzHYhKiGWGDpvxfd3i2xXTZ7SQ9vCmmsU49XXSqDMXxuTfCeF5ukuDBESDGMv",
  "key20": "3itzkkm7XL83ZbvGkWCvWkBzeQEV7FBy8cFfDgHGKmuD9WGdAgTLGs2beZcmKhTQsGFgoGhG7YLELtbExdvkL9hr",
  "key21": "4AsFuYyCoTG2a8y53YksgffcSeZYBJsKonZH9swBLsh8YHZLk9H8faTjKfD35E5jHBjpuufXpuweWPjs4feAjCfp",
  "key22": "scUuvTtmEF4aT1Jqg4vcKtzZcMLKvp2KYczo7MXoXapwzH7Ej8bXZhUD5oKV7dsoWa2EE9eZJdp83b63Vo51hHY",
  "key23": "5hFBEyDTyHVkQwtxLh3q5dtKcRnCxvSvMdKa9jJ9FAdgMa5TLVsmkBqMemaTXVSu6ypAbgnyaUtXmBs8ZjdND2Pa",
  "key24": "2x3vzqbB12DQpKsMkZN5QKb3g2amAVWhGTXyNTFwrAdv3fXFwuTKtjPArV8zkNRA5BnPugXsC39wfUTqD9bMTmV1",
  "key25": "3DNvNvsD52CP1oCsaHFt7gLcAfMdq945GPjcNRpp1Ki4BAm2wtgs6DGcmt81KTJGYkRCcGhzXp7fw7JgsdTx1VpA",
  "key26": "3QmMEUa8wh3GWZLWkMpKFcYgcR7zk6D818CbNkRQ5bTSyK8gAvA73ZFLSpxbxGsPofBXV2NAKZHs1o6yTnXHHqd7",
  "key27": "5sveJRTjekTny61iaeHystCyubvxxS73HxLBT9srdvrTmnXzHZAfwQc7ixNYxSFJry2H3GzYcrGX4dkKSfq9w9pm",
  "key28": "3DViXHzY7F4YoNMrPPxPDxewtjvYZZ6vtp8QCM9P69oKowgFTiX671ntp97B6Yk4r1Ab6PKedUoTX3Y8mkvyJUh7",
  "key29": "2Gnc5dzCZ9mcCbdw2KMPmo7idrZWSykMz91jwu6ZahTaDswpnmVMvTqj2Gz5c5QGa8tA79ANh83zjZJeQDtuzvzA",
  "key30": "3QkU6SMkGZmkQ4gxsnofiBUrcWqjPdunBRYEokdpkm6LLxDVmCh4o1CYRgj5ZHsTuLnASmVB4g9YYfKtYMBvnn3n",
  "key31": "5yQGgonFEiajX6Lvj281JqDmkWSN5Yk4xsfYE3m7DG2wHXQsRGyqjHM4qCDbGx2zqMrhACJjqJLrXCZuYyRsR8WZ",
  "key32": "3vcoR3J4FEr82cTVGidiXyHF53Wjx8iFTvtrGzcCgAfQHDdwv9dznFygtLXLJt4eMtKX7ZFZF6cnQvBGwkjyCmP",
  "key33": "3fSbxAL9qLyeuymCVLH7Lu7BnN8zxC4K5UFnQRsXo5EtTZcaaEpdrVKRtFUEKhk38Z5Eze3wqFSHVdXeNLtLP95f",
  "key34": "AXVZ37yNhu9EgvomM5KiEBaXnshfHDjDPFyh3SDQZzQMXYoRh14GoDHEMg4oUgvfAL5cZHdK6cPZteNxayARqL9",
  "key35": "4n9ee3iGWE2T1bwESx96R726y9dnjtUod81QkPWXzWEw62NLetYxdNzic6EkE8kRixqKj4FNLBLpQT5jyEsNYzo6",
  "key36": "3nRUTdveCEUWJ1c7vY9c1UQ5Pd6AEyDDyLpjHpFPrzF226Y5UhT9Uh2suNsYuQq1eAE2rtRipPxktz967KQ71GET",
  "key37": "3uKWG5AJzHYiT9yRpNcEQq582CNvA1xsNzi591CtUngHYPdnaMREVsTD6AMfJjxadZ31MkMnmYFNsfYcyEsGQ73s",
  "key38": "5pUmo25dMT3xdDSq7YyZYec7yBgw8KpAF2zwPLGULFn8E2gEASuJ1Vig8exEF4dnGtKaYRFFT8BwdjEMRK4kvBk1",
  "key39": "4zv6DhsTcvuz1EUwx8y76QxfMpxWrbTWnQiKgAt9jqPbizKHzJGa3bgo8MzGXubNadgoSprhYCWw64ctdxB3psNq",
  "key40": "WC6fJREdvtBVWKzvYL9NzRu8rbNN8nE6DBQTzd9f4g6vL4kJ3n59riEDDQ54RG92fZaMWEPhmiF1kkasGaNMg93",
  "key41": "FRpzF81SnSNws55oYB9LrqLXTAyVCwcPAfszV3WXqUrXoDuS9Hy5EDnmA2ZTfCuNf7t5tsJ9KbveHNipf8E6mJJ",
  "key42": "e4GFsUCwYmDCswksxGyAn1ioPGj612jw48RxLdaftdStHRd9Ls7GiAZRTbPJz7wQefB1SbpSz72azpVsuNQUKc2",
  "key43": "63t2mkJsvUhbQWKb3ey4JYmXz6AqWqVMKWNCw2o6ej5ZMb34SdgjNYNogwanrkqiAeMq2AdApCBfXGxQakRMzpY8",
  "key44": "5VwNntHp1p9Sf9n8eGuyy9hmW7VGxGbt7BwH3XBVSVfLiCVSM62qpjMSedL7dzx1J8f55P21fFFXsikPGmKRKAdY",
  "key45": "3Qdv1BJvhrBr2xfu2LHMf52jnxYECcP9SnuieTuhiqVngW9Ka13X1yk69WZLJKcPwRFd64tTWrrj9FUNWQwabZ1t",
  "key46": "4uZhEBaJ1fMCuyJ7p85aQfowR5fNDANywp6x5YQRM2vh5NbJW9whThwZXWZTrYd9FhevX5GZRaG2r9Pc6ZinPzcm"
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
