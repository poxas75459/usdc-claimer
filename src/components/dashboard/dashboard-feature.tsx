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
    "3yT7y97YeqWe2vo1QSgbzduQzpyvX4vpAdY68YxfgTvqrNRFMBMnddDy7Vp1Qcxj5hdHsKm3spFt7c5YLRp2PDvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siFspZmyQVEKiVi9aTxDL54ya7KR964QdvyuYh1UDab9vKz6uekxqMJ9vcvsDtDHjbytKLKBczEJCbNWyjTSC3w",
  "key1": "2woLkBdmhmVX5zNZY7gMxAzDBRA4mkCCiFMprccHbJKwiwftKkrj5aKfw9e31BYgxGVXdGcEcmH8USAScU6kRk8r",
  "key2": "3Wd93i95RGx6B62JAWwRArkSidyUo82KK7vsd3oitFfg8Tg9k9BqQCw8svdQYofPYXmtVE2t3XHN7SGfmshJJyoA",
  "key3": "Y6g1Wqndigaqz27p3AR3WUnG3dwbeGemeVtcCU1GzVYGmY9hPBpB1ZuDkCCc3YDRMDtXCcgFeovxu6dby9cEtWH",
  "key4": "3b34hKK38Lro5BTw6KXU7DNDA6uuvD7dfMMv6mrkUwXUFHKZsQhmzoVjBuZs5dzuAv9vx69UEBPM8cNSKCfE3uVD",
  "key5": "4iVd848QKysRHuyRJNajB7KhfamBRu3Wr6MfPG21z71ujq9h8UJCSJHzPQQiW8BkY3uUFX9FpUvwQWvZ8ujSnu6o",
  "key6": "3paBGqYS3Hg6YP72cW3wpj8evE3Rw6YKYB3Wts8sUPhxhtiqg5M56mWu8nCxDKoequ9BisvNMBSo3SMVWskrZv3Q",
  "key7": "5gKyn75c1FZ15ktydw63sThZirVDTWKcMUeAEW5bH2TdPtgb6VLA8WnygppQvQExdQm9vqnraX9NeLm9e66UwpHi",
  "key8": "38DX9jmUeH7p5DptbHjtLE6oBCsp6yW8eQhDeW4y1gSkLRVHHqHr1WZwUMKju2mGian1DFbbRPoh3BUzmwZYi6U1",
  "key9": "4CERPf8m5bcHAp5ct1AVxiL4E52gFw86t3XtnUSYfpqvuCJ2XwceL77PB2ZYUDS7WZurouJqnx49doCorGjcJc44",
  "key10": "3Sd69LLwBxuLhr7pBUPQuTqfQZoA64sLBcRi1Zmp478FsB1BB9VcxuGSG95htRpUX4byE3tSzsHS5enJjF5QRyVR",
  "key11": "4tCtXNWwf372PfzuWPu5CSVJsTdjNKHsca4xfJQgAh6i1DivCi8WG5NPTnog5eHYSr1vzTRNZMfw7VGTbthtAMpC",
  "key12": "2PGfjcgP6KLv6GntkDGAiv6ZaGqM2Sh3ZNP9v1rEzyYZ7VAoWpUMsf1yDSpRSZSS2LyKKRdoJpXWwMDtX4SbCpXS",
  "key13": "67NjUzjYpqeHrtkvbD6pV1wPFDNrLiVqrTeReD4ArcKsMYuugTgRkoxQGgvTrH2sVqQSAeAmWXvLquwLCCyme4Yp",
  "key14": "2dWSQ1BrCugKkGVqn6YvytVD12xE6hsHYucDPQTK6UErJ739MmnDQr7sbmDUZV5EFryDw4CymJvcxyoFbugRVJ4u",
  "key15": "BmE13PzH985xAwFLLU9x5Rvtpterq2iQnJxQHG836rRB9Ak9MUHcuoKcXKTYmopBSWAPyWiM8MEkVDZ4NqnRDUn",
  "key16": "2s4CTLQBb3z1x3XAtdubwfknDzY4D1T6FrHv9TJhszqbZwn8DeqhQ7LYZCGho5UY2i7nwRrvcC8v5LDSArLVqHgG",
  "key17": "3VuQ1GKeeUTeNz1yebxSHt7GXs4uDE1wndxz2eBSdkit7jjKChm5YBfKs7giSq6iCeA6oxD1vPvpEEP3ADtBqqoL",
  "key18": "398TJ7sY95cGCDSmbZJm2EoWC8KXQ2HnCMJjzZPUK1JfCAfocq2265q97bhzpCsABMNDahohvrnfdsof5ehixRQ",
  "key19": "2crfQgDZSzPU9ToPs5kygR7bnzvVTt3xkstsuh6kebk8G2du8CA3vp1pgvDb8J4yjWyoQcwQWcpQ4RkL2zuATg8u",
  "key20": "2oket1yJ6xUBS76Q5goC88YLuwVuy5JwaBBZLbNw438ugrMP1yfN6mHKp8PiMurdvPMtj5wtMWTg87sNppEqMCV4",
  "key21": "3ebEpWjBL6yrAdcZfVvMX3JGsy3Vg7Xov2yCsJfm9TbL894VVmUhpi22HUy9ph2uPbxCB2wXSDYd4xJSrWevbbF5",
  "key22": "5NUrfH7h4WpvBjf5qtTV6dKBsBWRRukiT7MuzgqpRb9uMvTi382Xn7sHp6NkZiERjRpAbdxrFYXMupiUtyw7SwC",
  "key23": "4cuCEPYF7bjsLbPwhcbSKBtYjT5eUey46Hx7Qe7KfD3hQv65ZvN1E3ZoSu3hsh9GTm1Ba39Kmupv6LYQQkj8ajVb",
  "key24": "2JsZbf67Ea3Yh9iyeP2knPSN2k8ReT2ddcowx5BkJvTV6oa73t3eWxG5iwYsNun4JHmDoQPAGSRwNtcq2VcwgGYJ",
  "key25": "4PTdFTPcjN33JVitniPFoSWNicEjo4iEcMc8zsG8YhN4WfCe9dgjohiHVvm6u4yzGJRqDd9ipt9FcUHuhu1jhL5L",
  "key26": "2KuxYqjLqnoFN2zmtAzBLQ47twDjHS2JyTfjhceoiVVCY88wqoorSuzPhZbNfrosh7UhLmZFM2P6ZkvpyTJDHLpX",
  "key27": "5p5HyEDnkDzE8EybjwpCoBrzpAkCgNYatVKRRi25HLB43q5GMFaHvcCfbXEMknR2RoG4aTA1HK6zZZiyqTPkM9kY",
  "key28": "3L3SeknzhNZLEfQYt1YHXwWjvN2ZUqLb84vS2VkGaJTkxfStRmhSMbVHpVqeSvLpJCVrY36iRmm27HZf4z8XULZn",
  "key29": "39e5iEXzFftyStDuFGgrkS7iXi1qcr2jdLgZco5nVsMEQf7uvVkTKrn4dJ43wNn5VLma2D6QFkCekfabWVG9pLF5",
  "key30": "M45DCfa5WM5yx1MBvjrgs5UJwoGX7Z2Y8NbeB9PPXy2sLKRbC4rGiKac3VKNghP6JZdCXMtDZqtoez4EYTNfgy7",
  "key31": "3Cc2rY3a8JWKBYoyaGihNWN2Nu4MAxnwAowAjQR8pcZYCESDA5XKMR92J9YtwYyviamqaCuVqsjnFmHWvA5KC2BS",
  "key32": "4c1w5rqkDpBrxRkM8yfzzhkk2xEYDi68fnQt3o9TcWqzYUSL5jWhydpc61Hya43WHsfv86MFvT4yQ68htoqHfsx6",
  "key33": "3ywCyUkEmWcAZmgGeGeFGuGBgnxJkVMY1wuLmfAoSA5YReD1L9j8uT8EMvZfnyyurVi95j8LyFoZftb7KPYkh1c4",
  "key34": "2EBijACUxfw7RisUMHzBCCTSnun3r2dWwNV7YYWGhu9tgVk1nw8d3MMz8JD4KnDNzWDAcGXvzA95SPnM3gDw1pdu",
  "key35": "5VQiE4KG3iv61s7yj4Q5yQw7L7iUNvzsz13TZic5xzXzq2F5eZWnN9d9PnARdi6VhSejt9YC7WPFVPmYESGjhasY",
  "key36": "8M2hWGNsP5rEipXuY26u1YfbPoXcnwFWy43GUcTVLM2jrZYGxwDw73Vnge2L5yp4hd5Jo8idWsNUh7F3QzjYkGE",
  "key37": "3rpeUQoEcRoys78agwncLLBPbKo6dx3uExvLA1H7VwUWooa5cXnCK7gCfudH4y1y6VGQm4ThMdbTbNMinUvk4STc",
  "key38": "63KioEZ45stdKvGVsBrZERQFSzdkznULdwCgDgEtiRBoxZJgeVLLVvBgUDUigq1M7FATYcCMM9nQhNhHxAwKuGe5",
  "key39": "3ab5bbFpGdqJZfsDguaiYrLjc6QLJWBy8Wucikp4xP3aTPM1mq2pd5xmAn1ZtKdifGH1M4k1x58uTjMdY2pHDMDS",
  "key40": "ZsLvTujDbevAbFU3VeQaL3GKwCLYMRLMeb7aBQogd5oYKCPWFWFBqgBGDWLbBRCcN93aHfSRkVYnSNCqrCgMeV4",
  "key41": "3LEJfpaXVJrWhpPf32AD5xBJCnPhTdN2PLidL5xNzRiDAk9EpHKcyap5iSVah7NiJ8wKbDb5uniuu4ZQxRepXjdj",
  "key42": "5YgT2YuUiY9z97DSqbjuotpoiFTHq9kipZLCx9UXi9dSEuFtLHGqE1mm8fBu4HrxNWtWBzKARYrpJSP2BtT9sbLA",
  "key43": "26qmGEKft9xRfPRK9JdzH7DZzY6enVm9nLj2MNb1AuoUmDs9e44HJGcuj1oP7qkkHWm5Xv3LscMAaZUvi3RJLmXX",
  "key44": "49bzKuqXQzLcQUisiWt3X6D9JT56iEKyCCPdU3ctdXCJvryhxmy42MJodhg99imFKgWTzScaXuQmPgP7t7KLh1Zx",
  "key45": "5yQacPnX2u3cBJ81t4rPv7SC4ycFRgFCQeSY6HDoStThSbNwdSoCnunaAEgtD4CUTiMU3rgXdkBQsykadaa7EyeS"
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
