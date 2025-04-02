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
    "58E4WBXXDWBwP4KXGTwgkPFYuLjNGvo7ahD2iei8PGWqUeQH4qcVEjhDV3akyHpJn3zPDiWw1XBxXtvpvmLotgRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eEPJqSMLQMKwfALVBrYZjmngRZ1zQso2sodhwvP11ZezScc6HzgB6PR7SFCdTHNoRfZYoGs6etRG3XLBfLFYdZJ",
  "key1": "5iFsY7XcKhioUgw1BDwzg4FtWNNqQdx9qkMB4mRJbWMwbbH2qo2M8d8VrMXpMDzvR5A2Vbt6BdR4Z6aW2z79b1By",
  "key2": "3Gpd14TBBDryc6Naoaccz2G5YPkXM13ANg6UXfQstHhUN2o7ULLyY4QdmkQde7bmfkaMFD5hcwe8R6aN3y1hpEq2",
  "key3": "4ZThKhG8ppzDLxmuZ2NdUNAPqxsrb4THVeYannTqUcD5FARRBg3uHv9exA7D9qFKrUXU3s3m3RTBWxQ8Uz6eRDXS",
  "key4": "2NWDpWnwrFk56TQgF8YGva8sdFk1JfNhvsfhr2rGNTEDULjD55QAV2EaXSKeYGdh3KWQ7EgZyUMyAvUuaGyDd8WV",
  "key5": "2K5HEmEreW2Zo4uyfxVvgYQUMABQRdtRaoYjTN1wHgDD2em3Xb9i9wwmwYMYK6xWmLck4gZVy2vw4szwUc1BCyva",
  "key6": "2YrazF29gahkNd1C2ZgXd2US8N5uYDeZB49W62wv1EjJ4Auy9STWwTecdL6okMRX4Kx4SY9JGu8i6y6FL8FEN9Ek",
  "key7": "2S8My3ovFua1EANuU9p1UdL6a5tTnLHkTNbuoDtmPqBpqTonNbe8r7MLyMrZeEWLaShKE1zwkDfhZYSde9hJiWnf",
  "key8": "5zJhfVtVf1PCKyX9dVTQhy9n9zrryXRqvtEtLCTv1eNkea3cxDAd1wDckYxk5LRffmZtp3bd33NMLPrC1rZpYJtZ",
  "key9": "55cU13nojQPUe3bgWdMy7asCCyVfbhMY3jBMrodduRb5eY7nsvW1vZEsQZ7hfmMHPaeBKLVVgLkh43yMVS6vdy8",
  "key10": "532WzkyvzUppRxU4FWzGD4GjzshePwjYpadhyxwia7B7mZ3kXWtLDHBhTZxKwWVtDK4VCm11yRzzEnso4tL89UxN",
  "key11": "5p5uHiNWW1AwR15fed6FPnGDiZ6rgMTdkYYr81pWkSjCb7VSSDgFAUtXy5v41cwtuD5SXhVLpLW8FCoNNeuhvT93",
  "key12": "48a88ZjZNz78hzZpsVKou8mgJ3gGCxggHkVtDDrXLAVeyn16XbELgB26ErQxCagYgDobqfKzJH2dW7XnPxka3rA9",
  "key13": "d7pwXSVJuFkfXfpUpHDTLubkyov29WLaij3cmAytoWDKyrN25iPY7Dky4ENy4iEWu3Jhq4HS8nekWeumqjtseGz",
  "key14": "5RnrkUGhuzU7S96oLF6hwGkiewUrVMRUHThhZSi7TPwauT8qcYiAjiWgYy8C4LZRgUBsSjJxBWMSHQPmeGUc5MAn",
  "key15": "4CFkqcCQpDtSFXg9RXEHrUMm2UKurB5D353DcUMCzRSKfZpgugjuKN3vduZgdMUfoaMKG316wMoaRAHgMLRabCkk",
  "key16": "3V5dqwM4RLRAJF7cctFqtjjtrix6tVf1X62FkrPkaK1UpeZYEMhvnVBPCoYt36aVe1d8YTNvZnGp17WuZm6r4Hda",
  "key17": "5iZPz5cyknKiRp95uwcfGqAyeZmHkd3qkGoqdf9vvSdjPpScW4V3ubWzzSEy3JT6axqxLd2Xg5KS2uNSMFA12jE8",
  "key18": "4TFKSo3weUdSH6vPXbGjNs999EdojoDtjgDvSzG9dQfHUdQF1hr8bjDVMqWnFcTc7CpSDvki8miEHFNvuFRTDqtH",
  "key19": "593DHg6NJp5wNKFcKdYxQs4Hp168ySb7Z3TamjuW4HTY1Rk1NF9KuJJC7LsmMoBDuFcE2MUQM4v5RxcG2GDHi63p",
  "key20": "4dARM5BnR9PJuTSkfFaE8qFz1rhRQPyAFaVqu6TcbqQGj9xMuPtzA8bD8C5GFkMndLy2aeXSKTe9smnkEaizU2rc",
  "key21": "5DqFb9TeY63ZQ25DYGruaNfY1vpdqvVh4KD36cogCH17FMji25hEwc2PZN9keWqDczA3LHx4Ue1Xvfm5QvH8whLZ",
  "key22": "2HyUgG8NNMmr6mXc3RbEvBrSRkxNTGcXrLCBC9cEE6mLVZuupgKcc8AiN696hgV8WgGnp4zFe2gfZR339iS1EdGe",
  "key23": "5wZmNNsp95XDUbgiRhPo6gTrR3A1z9LhPKtNj88yqLsuAqTX4AwL15jp2FWN3qjvZbg6qpeWMiAiYD4473ChGMAs",
  "key24": "2jhRwk3HaVVnKjMCSLM6WS2iRhiP92pigBvrZvULJ6u5HfAB1DG487AYarMkbpbf9k1V54FnbJtY4uQwjv3NRGT5",
  "key25": "bcfnt7vVAwqdGRDoEhbkjrgU6Duz59keGEYP3zJRvT9Z1UHWktAYzRKzUeC1ecxwZn2jxrnJpWzohwD3aG9n4sW",
  "key26": "4b4kzMT6SeeP5NaBk6tFSgJfJRhsUksCZ2Dr1NU58GgruYGG1NFE1XA6BDBs4BViibh4XuuMEw8ZWDYP3fD9kW7C",
  "key27": "8Lf6h71bgBT1Bfwt8hDiAtg4ERBHgz7caQsQsXL8epVUm31MJSHyjQcz7GP5vxbMM223WtFZixXa9etmaJARqoi",
  "key28": "2YNcGEFq5shiW6hPbCDXiKfcnGNXQeuRPB6z2ahQ1oMpLfFm9eJbBGoaPueUQS8dZRQihT2tC32BnXgR4k6AgCi7",
  "key29": "2LirMjnoab5XENjE1EvTeoZkXXi7AcR5dqUR2L2LUwXHLUKmnsRQh7rwgwBgw6PVoz4skXdc6FLj2J1666DtXYug",
  "key30": "dvkGY4B579giZfrnpAsGQzyxZSGechsruuThWSVrnLNBxsSmjeLXpN4eXRzvEMNRbCHk7nPD62LfG1iZvutq9pq",
  "key31": "2DuRv8CA36Wd1ubEjW2AgBMLnphJNeEaxcfpo5ek1iYpq3PAxPWDyz3xKT1vHMeJ1ivcanyHHBPcEkMY4vhNYKLU",
  "key32": "5WJSs3sJxadaB4gD42foe3h68tt5CoiomETHudMXgwBHa7CPjZCbH5xnM7ruWyJetgor1icBVrtzSqvDgjvumFAu",
  "key33": "2PTDtaj3sFdxW7FVKVdyh6S3DhL3ozNNvA5bCiMB9mtJC2aePoYzkGv6UuHh3qjHwQP5tZa8Tec4sevNyPQ7ujqN",
  "key34": "3zdcSxwTeusA9PNar1AnD4s2rdABr1w9XqCsd2Q6dRpPjSNSxvTzcRnFt1AeS3rVvuoPb8hURvkeVgFNFBAQCTj7",
  "key35": "3FHEECMsbPB9bw417dgtiEQezQ6TByfHjhytXnBaTJgU4y4tD3sWcZsmxP75rLZhVLtBH4aLN3TDnB5iAzqd91qm",
  "key36": "3MHUwAkLX16Fsrdx2y54Xo2W6JpnRKHuqSXEqLLm4YsaiBwWxHv8heSzwdx4QhrGYeaLjg82rbjH5GoamcRoSFFG",
  "key37": "KUbLP11kp62QJgX4UDhtAskHAKpQCQ3w3vscRgw8NamzXNjg8nvHcDAdrCdNDUSbLJAPJyX8zUw6nXZciobPeZb",
  "key38": "4Vyyry5tmy6c1q3TTBVLXz4vuBFchFQkeqiw3UZzYmoKmxAawmCyqdUMmprrcKesBw4snS1gWTvznjBTmWafStrn",
  "key39": "AAbw5ReZTdQWQqzMNNGWtiVTkhWL8XvSvxxNKV8333hfqNooPhgTBCQuQf83L7Su2D6Ua6UUBqWPzbBZyfYNC9k",
  "key40": "3JJU32Rm3iZmGqMDeGzBPnww2LsgRLBM8TeUKMFr3zH4DDQcRC9ytJaYmk6213gdUa69xR6hhLdSHexEyn3E2b8j",
  "key41": "41BpDihe8nDTvHH5X8dsVQZ8WgRuw6L431VCdTmnmQ7F8Jtetrx9Vz24p6dfpdoN4HUwpAMDvhEkGwznH6YkSqmg",
  "key42": "5F7vKrgUxqrKLdfcERT2oCcBssiQBJhTgJLMbUBCYXu31dvfUgQ7PbBPZ5ekThumvKncgvD3dD9svG6VZ4fXk1xQ",
  "key43": "4HZknuPx5QidsB4yv4kxEiVJu5MyaSJNkLjwZAfEsfjGVwMf4j43GD9tgWYH1w3vWvRN5NSRLthhrHhpw6vs9WHL",
  "key44": "6799JSuQFYqdBdoq7BBNH4o8Qy4Q4yu1tHKahGho1CTuAfi4af4zvvmumE6a1Qwf8m2NbAzCyjNK9YD1w5gEDAnY",
  "key45": "5nXUoqwkDKD8nPn6tbkVtoSVWYN45UjnBv8QsBAB5DygHRDQJ6P7ky7j8uUFJqjHMjcHbfLPH1ruQbC8AjFeVHp8",
  "key46": "4P8u47k7wkfsWj64UXtGbbmPw4RYusPyLZ5FyMK6bNSF1ye5KWu7ZxYFuroDhkKc4KRjGLigcge5hFHuZmK19KD2",
  "key47": "4xdDMhGozfjaTE4Wedf1VC5dBShmd1AUJSZjcjjcnXWB3MZVk4XPJtrcqzHhEVN2385yZpcQB4jxvxmgWVK4oAHb",
  "key48": "5DoYzmcSfz6qcKWA2PUZyvsyPFZT9NGucoeRkt7UEWkwLNsSTqcTfYoWaa9HQvoywWPHmMM2SxEZ5aCWvJw7uG2E"
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
