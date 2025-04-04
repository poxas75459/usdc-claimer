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
    "bmn2U4sfqGHP6XhmcYPYvdvNwWLw9NTgbTdbrFBrdfYkYBnbDWHGxrabus3KhUjgYtK5hXSbwUg4ruc75F92zCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbRab8G9MeL5hSr1YvgcvV1Ya7rLYNAyvPJbNDSy86mvXDPRkYKhwUNbGqnLtvtfoTkofJZDQb8nFPCYscDf6Fp",
  "key1": "3xZLRvDwLMUyUay9h9jyoqiVRNjULxYRjUe1GNcB6tMZK3d7MYKE8Pgk5Hbj2CH2TyutF1iD1gkCg3fk8CoC4R2w",
  "key2": "31t8L8WH2JLvuR97NXFeZuakQDLNttUkNLQKqhmbkfKWoEsVwTekN2CFZf9aVYmmyJ2CPJaxV6CqUefPTeUzSFJW",
  "key3": "4koxwZnLhzr9JK3rJ8GqzxffqD2TdkqMn9nv4qEmHcMF7DRMAZK6NBBW8XVDoMJ5wp7WFXHap51ubPU2wgKmW1FZ",
  "key4": "4bdyMtcjxyrLrtDpFxBGc2oKcF7Y2HngaV5c6zF8c1F6PHovXSr2ZoDnnW1VbQPGpiizragEU5FuAWZmfX5sWUVX",
  "key5": "5KQ7xxZDJXmZyvxetJeMdXuBHwBe1jj5ow4DeJThwyf1oVyk6wBVwHbHcoN4tpLiXPYt5uUgTtDKpSw2Pxgibv2H",
  "key6": "3Rx2KGBqmZ54vmm15HxMXdS7e5A86pESdW5VkjMU3KnRxSHeocqmGG5hYAsw1d2ESewno7V77H1hu8DWvS5Jbd1m",
  "key7": "4Q7uaWrsqNGff8cqUoifn4CqvKrs9f41pNeUb6kcmjKcEzUGYWKGBBFXbsps7er86wpV7xU1bZdWMvYycEyAxPRD",
  "key8": "26JwDtrkurQG67PRduHDDiMLH3vpMBf8Necz6bPdCquEC3omskxvWy2XXVXYX7ThDuQvJRR7mP8v27Gd691DccxE",
  "key9": "5y5EACeggpiZ8cWyFuNcyt7mHWt1McsE8itt4xcdbr5eubogy67eJX1g1UorQddip1iW67LaFxRGs8Ka35sZr2AZ",
  "key10": "23gqzB28xT2jLN4qr4MRnhamiWy7Y2tiLDvBVEYT2XBZRHyMyWcd6KK3pTYwn5aVBSsZwSjyEPWFk5g6KCcWLWWN",
  "key11": "i7DcCkiP6L3DvyQpXcXoVtUaBsJUtqtUSDEieRkSHp1JftEdCRmxwx2so4DqMR9TUESdvy8kJCT781izi9RPDZf",
  "key12": "3jb5ET5EHQtZF5ZdjEXSP4tKqfEB2ZeUZUEzbN2jEEzqZSyQH9zggGE5XdtHm2Xgcg4SiyRwGdbmVyYmLtdxFqvQ",
  "key13": "3jWpG3urdPmgCa4wgeARQaWYPun59HBq5nJpgatfLeNTtreWStqA9UKu5FS6CtoJu5Kr2jCM4isaX4aJLP3chfUv",
  "key14": "3uCxYnC96PadFYSQStc5dJNbbESpqs2Sw6ZZthkApykJkx2scSPYsyhjtkaPqQNXnV31nyGtJWLLnZCu2riScHLd",
  "key15": "3v8sSUc5EdG5noQXvZna6jqseCCw8SnAnyqjXPxb7tUbyMMBH1kfVBsJVrLm5jwPvJEkQkhKSmHCj7fxeqZT7F5b",
  "key16": "2dn2HnvU1wNhC8jGzfMxrwxXnH1iiT3rNzaTP5bvDrhJoknEEj7HLgEHRDPAjEB8wN2a5p13MmQNkKDbdQzbBm8Q",
  "key17": "2VJoezffGhFxZmAG1aRXuzzgDTYY3re8zSkywyQNv1Jb89yZQNxd6aBJC9YM4D1zmqYJRvRNLZZ73n22PmtQLZCa",
  "key18": "xSbC37WNYathfBzaU2mBzVPD8txG5Cy6CxzqJq3Qht4rTv82tYh5FgDYwK297neNmq6uqNjuiWoLPbyjagiLYzS",
  "key19": "3LLD8vR4VSJghMLmGwzpDGeMC1MvSuCR3fBQwvfEsgWC6Ed6R6v2QNNgdJQ3SgfBDgjjtG4EabZbgkyzZCrZi5rZ",
  "key20": "3vJ3PDcQhaA3VkUHWgEzhBHSKdFiuqTeRXwzhRpQoSKMfCxYgLGsf9hS9T7Vyt8oZXqweMsCWw9hjfdgdg3Wir4T",
  "key21": "iX1ec3ufCkUCohNNKg3jRUcBAQnEP6tjTFyYS59SbUXYaoVTYri5ckiBUeqCK94XTzKmGQzWrxAZXUQbaz11Kd6",
  "key22": "2YUs8Cn5EVSVVD7dq3gNwzAZwYEd6nrThPkEKe11QTj1pHj2BCKoGfEHhXoy6Kbypz262pxQ9p9afeGT77KezdqJ",
  "key23": "3H6afBEv2mqQqRvTVJ4wir5NCi4oQizyYfKtWUjTAdW9kHANoscDCsNqkVFsHfbp3y9GHgg6F67s523jucY5EM7i",
  "key24": "P6tQ4Lnkw9VLq4zpH3WVAowH3n1nKzYfm5zCbLgTUiduLUE7Ec5FJPE5wGvppUGYnubpQ8am8htZwQM1335RVDM",
  "key25": "57EftD4wLXnvHb8kpJE85MaVvk7KNUANVWzvYa3CsCzaE5y94p5Ep6GYWskGayAsrRpRzynBiZ7ksQdcvddXdEz8",
  "key26": "4C4dCnXHBHGMojyTnwAwkTkEN7c7f4m7e5jmPyxy8huknSRZGhxqZywf2EiCnY7jkmcfvu3YTuPWahEgEDWYhn7z",
  "key27": "32AtSPKPkq29iAZF2osQrfyoi5WvgGHU1KQzkuiVKMmmog5eJS2aDq4w71CZL6MFr99AoKzMRgdzWeyohDpPR3oW",
  "key28": "32e1HF4RZtLyQckk98qiw81TQgNs8dNndbppZxUgBw9Dr1AQFKrL2Qysw3PuGGA49YH2Q4rUjjqruJUCvztP8E38",
  "key29": "w9FkjoDMPZ93jK2YbbtW6JAawsXY7ZttPZxztAxztqBmrk1669BEZo4Ew2F4ucfvzNCESE7bQzEeneK9WD9stvu",
  "key30": "KuX7i2rsCsZfa5fadBC7m1JCjSiCfv11o9ThTeHVL3YY8YhWF5MtxEdWqMHC5kNqMmeXogyXgAD18ww16QmPsVu",
  "key31": "5gJDoAoXFdgC1aeNvsPgpNZZdNrvzzhW6v3J8t5P2aBi85doskYSATrHEjX189iUV3KyEQZpjTdP64R6ogww3wff",
  "key32": "7faCcoTY7MdtFzRtWRRxYbfGCVczm4pUPyRLQkWRkWGYM6prp1CZJkLCuWmV4PVasfVbVfEi5btwQ5CXbjBHoZQ",
  "key33": "xoqxaHhJMU6AVuw15ooSyqJB2BR7BQ44t5j7VtpEyBYUJVkhuxN5UvTshCRRguBMraUDJYmKDE6BTY8HccQ7oGH",
  "key34": "5TdQwoMwkYY7nBoN4ZqrCTBjqK2RcFBiKtHymVuQx2EDC6mrHDk5TYosm2FbAk9dohpXRXoxaKEfUNeMHDWiTXQL",
  "key35": "sTza9mq9LDnKd5iRssCpQAikQJdd5aF5zTTTGxWDEPDKyx2GUQuJgBupEGiv66DuXaYHLckS3794go3Mr5JgtwK",
  "key36": "3VFriKzxtfHTAnisPqoTSYAnGg17GZBpxCgX4Da9iYnApggTBYD9ZQXKg8osTMNLosYCgDf8dCQnHFiGnjvi269",
  "key37": "65ufZJmZLTxwEN95c9vaqLvsrQfZnJZCoyALKTG23uQXMS8Zqzjy2j4vFvqTamY1imbJoQPKFHxB4tPCy8nhry9q",
  "key38": "3WFatznzQFsnWXGsS2GwCQDjTkam9YRvceMW3r8BZw1jRuVFskk9LqfYLVBRk58B4ixFuMGgqnYBow33Eb3Arsx7",
  "key39": "5JJqFeFEpvWXtSAubmDLpqy5ssM6PtrV34gNmPmKs2NNrJxXeFVXZymQMqeVSr9PxUybsPiK2F4xMPSkVv5ARWCY",
  "key40": "RSp1fCH7zRY2EHjkFmBEbpp8Hu8RoAtTQUkNZgNsWM6wGeRh75x6Ri1MhMrZv5hB5pNuAaLDhbQRizmfA7mSesE",
  "key41": "3V6aL8rwXojXyhU6CrYxfp4hCLTyFnptcqbBbvQDPfaWnhE8HG8K8YCtuRLp3gNKrvo6E4oN9S7z55rivgmj4xbz",
  "key42": "kgieUBvU5L1xKNuZZL9QHWksp6G446BzMYekyZdCyUihj6NYx2MtqRWmZK5YWWUpf1H9VLzAjMtpkvwBqXLu1CK",
  "key43": "2ppJZt8tCoc94g1yXpVgxYPf3dHnu7fi8hmYYBdkGFXcN1cQo5stLeojV3u2E9FPvkd3PhyoxDYqnxM1mtLMB6gz",
  "key44": "fLc7kfLGvQyqY8LYX1fbQk8nNUDjxQSXq4qwvBqDvB8Bz4naqJHdqBpzLbbmmNyerFAjUjNJRkAeEEnjJsmVuek",
  "key45": "VQEEn5omE77DXvuCJ4dMjJY9N3js6fRqwLDb8Ks1MrBrooafA3hkENNcPzaXaqE6xytZFkJuZ3KXG2MbbixAMxc",
  "key46": "Y4b8VPrriRVTserwRhQDHgXvUYcfa6CCB78gzrpnTyWF1UMq98QPVCzBuBzJ5aNLpQERrs6L1kiGQEGfSxw8Ab3"
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
