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
    "5PUYr26cch37vq671sCRv5tRYKwdgDFtVzfCTFKAEdWruDfyo3ff4VNtgxwFMZDRf7wtNw16Hz86XCLaU3JHmLgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51P7PrVEZcCuPgJNSxLad5qi4YZGXpPNzNakksgoXM9x6aKoAJydWs1LzV9D6ZCi8zRbPkNmiQjZpq4TdYwhgUu9",
  "key1": "3Ly1PTg2dLJHSUd9grYzTEbgM6xvXNATm99Z2ZdRNabbZCE7Pvp4rJNL3wG7iBhdUNn8R3MQXJczeNb2xbbjtmf2",
  "key2": "48xAqgY35wu9gVBSDFTM1YcaVjqCL2vUqJAJFcGHjS87eYNerLoPyLyc2HnfqJHGkCRnMb2SSDfdZWJSYFQqmSw7",
  "key3": "5YwiWSyxFW35Rcig5x2uwsEa8VuPBXqj9iNbYJUSL9ZotWT6hs5fRyn2vfNiyXseonWDEujKCwiM6yJhYVxQktL9",
  "key4": "3LqkrW6GtaRbMtE8uophszfdzjHMRAi1tgSZBbYQjGoHwjpS2VWUhbdsxtPWCJqrGLpXRmsgQQ1GKGXbvJfSnuzy",
  "key5": "HEBPbzswjVXW5x4a89qL4FA7q5tHXMWaStUJMxTmsmHirVRBhaZim8J9DoH7dpa1EJ3rjZXkpkkoZpJFmUxuNkA",
  "key6": "4roJLQ5bDZgoeVqqoFB86uCpb7EgoEw3G7ntPSQ49jfu9QLBdDeQBMBR64qzkhKAnj1jC4o2vRk8BvSD29YqvRcv",
  "key7": "3bCtHxWsTpMkm2fqomU3NsGmhDtCA5mCqXLxHt7QvCpZyZdFbU3TFbpvFqJ4Dshgfz6D6EnYDrar2ydTigoKckgv",
  "key8": "2KV4g79pjmj3T4fJM44Ts5nV4sUSG4xgdQtxvVC9dQtb7XuEHwkxaNRi7NMKyCvSK1o45fAnMYFfV6sCDkhjkyEi",
  "key9": "5khRj1LG4Np3PkvqjSdcCUbjJvXc2NrY5A8aBT9CjPFdYLGVP7Q4siea2LvKH4orTmLDTpR5vo9ktFuU7zWbQ6Ye",
  "key10": "37MGQ55tn5SwoPTNTCbRXZztLcxWatVxg4iUPSU8T3YRaqGpG1zj1UMopNiMpxUSmpWCtdGmGSXcLjxyEgMCcKen",
  "key11": "2PnAJkJz3jWqUyixEFs3tsHqVhtdS1QeVmXFgP4fLi3KFmHqqYhYwauJTabRm1cotn9L2DpyvGBChHqfY2pm5JPp",
  "key12": "4zYGMNqaMq6NHvcXBUWR4YQd9au4DBjiMbyM3fZYfbshLTg87XgDMByXx82ajJyQRKWYqkYmL3oKfXZg2zaAihvc",
  "key13": "2d9VuGCGnWJx8FJoqbp93G5p1vdZCqHwqCaM9FAFW6AFLJscWfaJL1DVN3UjrXt9RPmf99xfsYphgWvy9R6tv15o",
  "key14": "4gp61CSfoybVUvV9H7ZowD9FT54nRg5uLj5Zd2BEjij7UySb7GQuYixsLghGeYnmPP4JSztzv3HP9xDSQcdaDee5",
  "key15": "2kcswvcc5r73LKZcUaPWHuMWgNadT8LRsXdMNi6HYsyKVUxCQZNHw2T9wP1mFqPQPWce4LSLqNgR99xyJURHdPQW",
  "key16": "Y6HSdJNkkJwQMVpjvyfSA1hbb1okbj7wfuLCV3A9T8mhAEXcCUfRYUrS6ceo2cbNZD9WNJSHDrKtm2C2f9NnDZP",
  "key17": "2ZSaY9B69nfxpiEdTh66LkRy94cvcuGhZajiX7f8WQUeG9HbgQHPLNRhHdnX4SHKRB7bbCRazWdBPJUU4VgtbzVt",
  "key18": "5NotJJtTu2FCaZspWmjNm2Tw1xZKVD1UcRKucuQpu8v8dUbP2WWNSS35h5jikmLgjbLDMCtrBLQdzhjA6XBJQfxz",
  "key19": "53hs1JENSRQxoAgS4sNPaLnXAz21DsEq8vs1mAFouPjs9Fpr2LMtKiCQpizXDcTMwMGkU1KXuHbwvDTjxrkcZjg5",
  "key20": "kpXypAHyk8PZheSG47i5XS4MobPtJ8DcibGvzoDgubfE3uixbtiVGTdYeSKJ2qYb53eyym1RgCwDoc9bQhNntAV",
  "key21": "puaSnNpTuUzvzEsmkH9pPwa1Lio7pMWuLAraLfuKy4yjctRG1Yg394MXaboc8QHJqjxhHBmrXxba3cbWXfy3Z4G",
  "key22": "3vxJbzmbvdLAHhGNEkZn3tNWupKNWLKD6dFvQHVHW2R98tYQvcjH5Vtsqzcuq6EhyN8iB6HUu8XdDtp4KJpjvunP",
  "key23": "raSCAmdimp8DbQQwcdHbd8o4zg5bHZELDZN8VQPsUkXuw7UkAJKdXYjUKqa2F2t6FJM3g9pDezhvtEzBtQRrE2G",
  "key24": "5sDqrjXRsaqwGAYMa9uFnScJW7HpRiubCocNh2J2fVxFwUpq4wQCPXUNHiptUZC8zXLdwRhD4szy1jx5zkufKxqa",
  "key25": "h3pqtjavBLkV12QVjjxi6Da1msdqL3NHqNJWYhtES5HzAz3cSXdTRJtw6kt7NmRsGSG2SXkcSEhRMSeMPVDrkjj",
  "key26": "5nHEEGUCY83xzPAbK2kaoQigBkCmNvRfDrUhEKGdKsFadaqtb7GgVehAZRV3RFQ3Su8hbPvhFVMvamCMMXki3Ygv",
  "key27": "4QzLRL8Kt557QpyhMZ8ZrA2qHkGqcEsVNyRT3KH2vkddkcKbyRqWVdZ7rQ9ySJZbVezerk9P7DkXPP1xF6PcRDzY",
  "key28": "2XTFCFUzCEP6SxCz4a3jRUE2dm4gaseiLroiNUHC2YFRKPQ8DMbgG7Py4wWKD2Rj6jeFspomoPtKfVr58y5DQzGN",
  "key29": "3mrkCHTy8E7kyT9C9XFeiwjJDSrdZcLL4CyWoUfdQerTUjfdTvTd9vQyRUYDQ8qj7WHqFtBLgTUsHJJY6TuqDTqB",
  "key30": "5brLD2EmiYEto1xMc6FuXpYMkoZXgjvyyQvwfMeyijLGS7SBiXNiHNB53ir9GdKxhcVmU6y4pKVi2bD6qMdLFJRL",
  "key31": "4JRk7Zxmq3SsAboyAaNbsMv5MPtt68WaxGGHinEsuJAv8xNJ7wXC1hqE6h89NeW7rezs6e4oCCZWSYxTLS9qo36p",
  "key32": "67gcbARk7fjqyiaSZY3KK3AiSPfEMp19o1pkmJiB8DvaCzWMm8yxzdVGhmZujNcAAAnbhbB9fLom5YrsK51qmtys",
  "key33": "2vttwGzqX51rHVAJjegDgUGpMVvF1ESLoKKEvUhTZNHVtrAEJ6Xn6MBYPKqAr8RM19z2HtEQ8CdJiFKybba1ZBhM",
  "key34": "4abMXKrhpGxpHWXeeHvtGzvCruzS4w5JV6a5ytCk6mPbZxYW167c1PYzXkHYErE1y7vVuAXgTjWQVvrmfJyKMVaE",
  "key35": "2BRVoNtQiafQ91C2bjMmnHWAuynBCh6sF9nnLsZRKECRYQqdSS6LrjPFnaZnYdkubZ4DhLWS4gZuurU24PUCsJsS",
  "key36": "uBtPZkGXPrQteL7SgNriRoFoRBrw5yRt13AYsFLnJ8tSUDyKrsDH9v3242KT1f6sriDtiPpNz3fA5HAZByRDUaX"
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
