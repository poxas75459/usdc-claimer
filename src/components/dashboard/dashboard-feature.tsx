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
    "5cG1v6rwpGiJXYErVJAHChBKaggpSif93npC9BtcZ1HYuFY32Wc1bAods5STVjEPyzKHd6JcW8dw7K9eAFoXEwXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7iNfQDg6Shv4Vw3R5CQW8CT9ctsBKCXSADxGUpDEvpA8Y1xUhbXWfnJ6hqcNzHezLP3NhicWirQYPowNLKHUuw",
  "key1": "u1HFozbwGun6FoccTybD5TPuYbkYcHXTbB4XTKonLFoK9sYFGP819Gynqa6gGwa2EgGR5yhw76vXBw2DkrpeNUc",
  "key2": "5vC9buTtUWML9m6SE8FrdkyVkwok9f4kLEZ71nTfLQikDW4MLzSDJukz4LBrkuBoZfCBVHJp4caD81uJbMZjckw4",
  "key3": "55rxYQcHa7C2aCpx39wUNLK1d2woqADzZbibuSYvs1D9xM62ESPRrzudZpgD3DxGfbkarmKBsbGZYZNUFETqDR7J",
  "key4": "Vo5hJptxMQdZHXfdgy6fLME2akN63UvdwfQb6cKRJKnSPHR4CzEx9pnLCyDAsSWSYVx4LYXRECsP39XAJSywoqe",
  "key5": "4eV6gcFc1nDW5AVYsPiYuJc2FRyJfdBFy4Z2oHmQoYSWCXjeJXKejVxFcV6gWDdw5EUCuiLe4oKWDvP8uL7Cvdsg",
  "key6": "4BS5U1p28Y8zNDmqYVW8Cjja7uaTYcfguf6Ph5LhcM3gnddJMfuFcZyVT8XBE1gaELgokid3yKwZYEdopA8hizzp",
  "key7": "35599s6MouF8d1AdA2BqBAkRNznQjUZ5y12ZpGbocMn6Vgym7qBbsec565pqPMBrnwJWHsPjQF7NFZn5vmtVzZ1v",
  "key8": "58CSdaE2GTc1RWFNJqCrs1dUue9nQG4cwH87mXbBwtzzTBFbxzmcWf6ckGYSFSLXemodVh1qd9AvYfoR6Nk6ycdJ",
  "key9": "doKmCH78VjnBUejNUMa4sTYdpWPUn4DFpGscyB8Mowb6Qk5uBmKaAizsgB9u6pLV6KUQreHGCQYfAHpqsuAEtpM",
  "key10": "4hRJdL7Lbv6nFnXjCNrbAkKhWXMpz2vVPjntz1kiK4WoNBsgyYgozdbh9etRmzZE2TnJnzggvFBzsRKPK6DWEjhk",
  "key11": "551r4X4Sy9hhMX3Bcgm4BpR3aUFkhLnT4Dhgsk2pFxsnt8KUTtVW38kXLECePrR7TYvz7Rj5DgxURzGvXtkTtVCw",
  "key12": "4o94bkQo1rm2FaknHwLUkLGasC3GzxCP9MSTrja7Y8cUHwbVJwCyczEUY59TLVbEfyuzn8MfBSV31UCUf9evGVvM",
  "key13": "5DcDztdi3sKY1YDA7BcY6bC3uUEjQ7cEyC8s5a7hvopcRgM3PkD8CCSoiW12uhxCKo1X8w5jaKhm5fetpWvsZPR6",
  "key14": "4D8RnkS6h6iypNZoYvMKotnJ1NDdsYSKCp3xVrkDScNDX1jQtEFtCkQongeutRe56qWrDptVTU9NRQmgsZ6ypeCq",
  "key15": "5GjBbv7HoQnKQd3yZrSVwA2Ez1jrKFP2dF5VdH5iiUb4D8orHuNSqMqvYshytgKF1Puuz4urnJ86DHm8scP35D1q",
  "key16": "3CrtLheL8dtJuHCpdN3Vr917wbPsUnqg5fKzo7KDvW3AypyGXRSHH6poRVF9R1VLwvKWKZFFJJbGfw9Bmny9MdDk",
  "key17": "2QpEJZUuB3Vt3X76rYbZCd6NgGwJ7v55SC2pysdEa3U9S4KvWf29dm2Ne9QTyCz1chQbg2jpZ3kCVfv9C5y97xUM",
  "key18": "45k7DV5x9seJvdZgxnuczuuFvmjcR2WJeUcc5N1NuUrGXuGoeFhmMxvoERyvHr41DSNAKTeuXdtp4auX2F2DjZy7",
  "key19": "uRf6wXtmuzcThen4B3L1NGCinERmbK3yP75gchG9ufZQsSqRyaK1KdUyAbhgx11v5YkvMSh8syGuvH6U9jA2R3R",
  "key20": "4rdJbbB8wKcupaGTp3DZqYYAhwvPvDmAdbWkrAs6WRyLwLeUWMdwWpS2hgrPGcwNQ3XPZquokSC3m8PVu12uzsmn",
  "key21": "3b8bLm9FU8MNWjj1N7gYs1Pa4Kqm4V1UT4ZumEip2G5AezSvAgB1EP2T1seWS3gvVRvnM21qN175vPXqWvGxn9J3",
  "key22": "3Ndkj5e6Fc1zJdVYgCYvJ4X55THQNdqtJwvDTrNjVisNWLsWxYuMS8YLDsZNCtMdrMN6vDM5dTifXbLfZ9P7eKRJ",
  "key23": "39rfNdJwxuerh9wkt8VyQSEZVbti4MtBUoTaY8FrgEgdcBmgoiXNPXTcfQxRWkVHPpHVeZcSqySLLys3iUAmrUKm",
  "key24": "4k1DejEvZrqzFcsAU8aCtXC2AYS9FkAYH4WgY5j12FNEyoaSJMddYcjgw6EqUJNaFsjxRHwGjyi5pvE3adBeMwyR",
  "key25": "4mMhQdRqdVt2B6VvsHZdP3wW4j8wBYyz63faMfT94yPEgafMCCbkNWTYUCV5zBYWe6b3wLEPrVzWx4R7SWvWCJoE",
  "key26": "3A2NdXNQiUkXGu3hVAwhsTQRC9XqzUckPHMmR2QwKrmVnidixf9iGmBVh59yQc2BySUsTfA7iE1rzR52TmQtmXLJ",
  "key27": "3JLKWBCNiw26Y39wavX8q3UkBEYsn5Q1DiUEY9QM61hWrX4ATa5niD1ZBPxMv2mSQwmzDSpE335uqTMDfZURWzeu",
  "key28": "4cr4z6goiNb4Ev34888vDJagxecWgDEujHUdV6DP9ccRA7p5VFQCV2W8sou9SQ2w9Kr68GxjoYyBdEpzNxdDjEM1",
  "key29": "5ag4PDGakwYveNEGnZKoPUvDRxS1HLmwDx57gf1nPZFQybtqHEvWBtXrxA6d5sXu42puWArBHo1A2T5VmvsU9jtJ",
  "key30": "4CdHWrvS1wijiVk3qnBcQn3PiFCEs2FCYAhULKMBJConh4QKZfxSjExK67hScx884WvpbbEKFK9xbKqPaeouqNf1",
  "key31": "3MPKv4rUFxhrLvYFfkLZRZw6RtZxNDZJV7RZ7P5q16FDzARm2eprysk6TNb2AMtuwThFwh9uj8tdvCe4H9y7jZa",
  "key32": "2cpvV2B7t6iZGKUC6iGBVB2f1WBkUuJqNNXACQRJZZSKW6HraxHgdGA1jV1gzEdg9Am1L14i3s1L224HQdRRFLGw",
  "key33": "47FoGM5PGhBvfpbD84EEs9BsM6xKgAPpGshERnK7UZqMVCXRe5yDLfcX1vj47MTrkE2D3FYLXLowmr7cp9v6CLye",
  "key34": "4cRbhHFACZzfHtqXNUvTSDyRbhrze9y9dP4ZJTNczgtZbxmbKLtVfqSDu9ZwC2EkSo5HxGT38yDeVTVNYMKZNfnC",
  "key35": "3EVboWfeQGGB8DqqQEVtciU21M9199ASodT8Cfrpc5dDvSpE1efCCbVGYSiWFTG94S4mb98s2pGaon37FWv2LwGR"
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
