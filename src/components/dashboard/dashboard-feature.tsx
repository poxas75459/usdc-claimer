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
    "VRvJALKe3X4ShJsj744vpsMm3dfJA88Mn27dqCR94jBRbbWE22gT17m4ZiLttTEmwf3yzR2YhGxHWpxy3pz5RN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bnHDU1hyrZDoiN2LtKjekmFHGad2svXxoT18HjYqpKknwWd5Ej2G2rHMKbj72Lptfg2oPUVbEG6s6Lc8JvJiJT",
  "key1": "2DMi68TFK1DLB2UBDvSxx7udzoikbp88ANVw8t64AxPKghWxCupmuQn9JHXKjhSU91XGtPHGCXp356ErLATR9QBW",
  "key2": "3AkvyE2CciSvsp7VgorJ9MdBQLjRG1mobkNZsA63puxihhafp4uiwXJicwCMGcjArtAA3iScUFhgFgboXTZSgHN9",
  "key3": "2FusLgVYYyxX8ZPBM1g4YxTmjtwU3PTxQgksNSN1jCfFb6eit1yJ7VEbqePjjeZm6sBqi6uLDcAVkMm1CWwTKfoY",
  "key4": "5tz5p3amdmNCtcsZgUjHtQWFtiNui76dA8p8oi4AsvP1YeBAGvhaU9b6sNxHirm5vDcRJhbim521YdEXbpNUvzZ8",
  "key5": "vr7ybDSPeBKJyx2YPdAK8atuiwMKFmbzT6ydaeHZYAmPH4XcR9VHUckKP4Ypx6vxcdNkoHHdGxicQUeoa381iRf",
  "key6": "3gArzPH1BDgnXYgAyndeeNMyTGG2277RSHLh9MExxxhs5qwQFVZCVWwRLMYEbyFWqvqUroXSr6QzR9hzktGiAk8i",
  "key7": "296WGncvL1PHZQQU1TU8zUYfGtD13KSa3fYeyS1mhi1pedaHqZQ7X3FRAbR8VG4yQRoP1mLu8d2VA8uM9vpC7rXW",
  "key8": "41hbiT5P25eAF67m6Mn9jhpo2PaKDN5WqTdX81gE47RZAuPc4ZdfFbi321epuJr42T55Y5fPCt461eA1njEE7NDB",
  "key9": "2DBFT6iZxgMM1fGD2YsDrQ7ABxMqHZwE5ky9Yc6LyGvupTqpD3HNJVJozxPQMoLvG5p843Y7W4ptJZv7EACv9fJg",
  "key10": "3S1F8oWoHV2eTTcaL5g5FUpZJGX3rVQ2Ytpe2irKDZcR4Hwntvr2ztDddCuqKcRpvE7TdZMtNwHq5uqbyyAZDvDi",
  "key11": "2pCQuH9LUV78n3K8J5R6NvHY6Hd5j2L98t5x61fWhsjS5ToKs3cgidz6qyU7d8Ww9WYjv5KYBs9tX2vYY78KR5eb",
  "key12": "DNj4rSQSDFNXWbVDTAmiFiw3Cy555YV6GK66AiZUvwiRX4QVMqc6qSsf99TYxbUVURoHx2qtuMg6L6y9mDeKFWA",
  "key13": "2N96fKRrLeVNMHtU1CnQXP5YMBHSJbVZutosZSb6bRNWrLW8zUfCkuEhR7kC8C8D2ksuQ7RTJjDs6JARUzKwb8fw",
  "key14": "3p6txPQsXNb6qbbDMZcvRFtVtSTmiLcTwk1yHcyJQ8mgEtUruc7YW8hN3EeuuPKj696uVb4MJpqGDMTUuBGk2hw7",
  "key15": "5iGUsZTJUUbL68fX8aN2ty3o441bAGn3kHbEtUoMtJ2zxE8sFXvGLKJmhaQCxufPUFp66hGV6G8ya89TKxjLVbco",
  "key16": "3vDbBUhffsH3sx6VNQqfs5Wjuvhjtk62q5E3HqrH8s67TkJ4JH3HWGe9UTFCKCEiB6AhUXzS8hHwwNpqsEtZKdFm",
  "key17": "4gsCuSWXYvAYMd9ufhBTH4jurGBo8tQzp4mwmtpe7h82BBk9ur2MMR54uMS2JjimaLfjg1NuTcMyCgzPEzawN89P",
  "key18": "2KUihDz7Vii6bLe4gBor3EXAF89GpZwh9JTsPfziRzyMxHu3MDwsDppspY7pQMAFx4dHYypvUZugRpHWXDd9cfia",
  "key19": "5kCwco1B6Teq4pa5qxWe3v7WFzEwemWRY53H7xZDaTGAB2PycMKcMa4JS4FuWi4gKhcSRFDCwMXZ5F24gpdYBt5Q",
  "key20": "3cFbMTtvz2cJ2ZzMRAoAwnLm4ezvLHx7yA6NNzPg8f4RWTEsLJzciiBMpcxzCgkpzB7Tk8b6v9RCZTV5bPPLTyQm",
  "key21": "33QMEi4jwsdrnsxBnzMqnovLu5srrUFZUW5yz7isxRRAF57caWJYEf2BedVfysUg42x8UiaLRdWUNchH5UnQBN3k",
  "key22": "vrDk9TmPPHHxgLcbhW4VxjkUXcyQLAcUo8y4NuY54pyVi4KsyV6X1UREKWpvoNB2r9d8t91jNQa8GaXyuWja96o",
  "key23": "FyLMqUmrJnTKzX1z24aPR5sg5qgSAHrSYS75UtnVzVvZyDJeHkN2ihrsUcZuwvbR5YFxwwk7HxhbcBxeT2dv8DJ",
  "key24": "8whEnKUckJrBE2W6gowT9cQoeco1EQYdgdyKNUzwivPhR6S2nVax1uXdFHMnPNoSsmKaFT1X6q1rf3FBRD1Kfjb",
  "key25": "2qLNPKUCQNd4zya4Vee7D7jBjLojB52dSMCJMVBRWnm5oTWovLw5ytKfwX84JGQ8aFXYJXsqhdkKTgoXGAr2NMCr",
  "key26": "3uBpm23MaAkXydqaVkbWESuWViVy5ssuSaa4tYvDnWiCBR22JA8r1peJ7Hxv8ZY9ubZ75khg115hYxX1S7rwtBsb",
  "key27": "4DegJ1eYCwjSjUFySaaE9mSRr7LZDuWwAKgD8Fonei3DysAyrkcKKhpxiBuV4Buin37qi91qUfFcD8hZJxyEthqn",
  "key28": "5zf8kEC3NLA5TfpbRGCuHcc7ikFLUhVxq1DW8tCyEzXgA6m2KcKRkuMf1z7L6vYUCe7jBUg6tMSpYbF8EExe3Q4M",
  "key29": "NuJGnb6jWdb1SeKWtY4ibErxqGLbs5zNNVVmL3uj11Bb5gnhHg9gkab6E4UNMoFk5iaULNYUc3XvZFHZFwFdYzC",
  "key30": "5FVgH9ouUiPk1TuXGnGUq6kJaYNFYiVSVq7fpLPFCV95w66cKKkkvMwDytVDbNySwVP17CGKNasx55QDDNa3iySR",
  "key31": "Qj1MCN5pNRdeECfnfdkiyoriEeWroJLFLz2uFueoywEW25bdhXJwK2TER8mCzoK66teLJkyE2pv8jzvC5mLodRJ",
  "key32": "2bfBV5qvypmJG75dqn7M9k2XxLyH29qStqAdf5xVfNHV4rPSH2wrZHvNQDxgFVanMtXYARHirEziE4qwDaeMGd8H",
  "key33": "5LfaVw3N5QMJEKsviwDfvCTaZe4qmoLGJXCoy5WKXy8svnmuQMX6y5mEUz5DLQ9JqqrzF2TKCTkm7TXHbAvmhVyi",
  "key34": "2gjGzbTcooACTq1GGbjN7GB6sysZWBLjtv3KdxJkRAyxNK22PsRPDAjyr2CU5UuG3sUwS7CCuwHjQSZQpojtAtZJ",
  "key35": "2pdyM5ZfhVugqydvZmxEfzos3vpVTMM1JRSrfZdbkx7GMZEe239DevfA1yLtzcyoJzoWKLoAZ5FqMJmG5JEJjRhN",
  "key36": "3uEgFicSRgE3MSmUNMWhG9EXh5Xx6Spg23hxRCVUFZq5yATL3Vpbdx1rQ7PXqhueX8CKSRw91SfPrMUEZFHQr6zg",
  "key37": "5JL5kT7Ypev8KReKAGfkPfEzw75ox92GrKsWuZD2N5KErFYeaPUR77D1bBH9vMNykAUG1ivWHkUg367bLZmdCPqT",
  "key38": "AYbqYD6RvaV549co3kzTzNzQGi5Brne8S7yrKfBioikRY9fLN3vaZYuuFk3bekMA9DwHdKpMLN4bmGdE2u6XmKP",
  "key39": "wophj9YNKfbii9novsZGfY4kDWWHhwR1PmvZLh8Gfwk6NHH4XHsxAzxiUjPe6nsEnjCqQQYWBWDVR93bR3jVwaF",
  "key40": "3FA6rEYcGpuYCS37N6fgENu8ipfvjeoibhjmjiY2hYDYNVLd3uGtjAomU2LcXhBaFgh8qzwEVfh8HRyz5Hbs2F6p",
  "key41": "4TsDECjk4vKEQHcZg6ULRCrB34hnm4xByMk7k4MXwFEoTDt8DtKNyzFQvvShFNUWBkEjm7MXydecxZeienPJhMvG",
  "key42": "5werQdtpSEkhmXSw1Aw4hD271cdURSRbEQazwFEL4boLcnK4igAUpfzAqyMThQ5QQ7aSe7pCUXtyGiRZZq683au4",
  "key43": "NmJJ93mGsKxFDvSWhfFNuakAHHHbZL4EnNcrLH15HjFHWGPr2rRr4X4jg9Yhnh1NLrK9vq3D5v4KDdk9YzAe5GB"
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
