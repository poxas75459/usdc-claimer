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
    "4FtkgFjQd1pmdm86UyieHZU21EA4fncbxhWXcKMeHedPQJS9wFdzpWbb8j63HK5NjxNP89p4pK4jcDRPCRch9VLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7MGsUSAtc3FeTGkmBAvZ1tPQDKU8xyiuwQBkqxFSjS3HTb9XPxmsAMVz2TeHiEjUX1H1eeegvmv8T3x7gYT2kN",
  "key1": "2JDDCqKQ7HAXwT1Drm7Lgq8DiJ5hSnCqRLMmLBAA6SzSs7xkNeqU6fwh5B4imBvaCgdofUY7otCro5Zrat175cPD",
  "key2": "3kwKxPWYNM6NVrJyWiajrUTjZ9GaTYQrTH8M184XSW4dvyYRtMZi8jwXa863DfZD8nQ8fC782cHfJH9rt2sZcqVT",
  "key3": "ErVajJiDj4qs5jWKD2dJekZZmYeseXkAswwzDAWWDrrpzwZ5kQ1pHup6ruqE38cWw98xhhbVBu9EuiC6VNMeXTU",
  "key4": "4k2X98biBWB5mKH9Ajm2mtsFn4AVoSQBh54w7PxMZWZCzepEpxmCJ55t43MHCLToZSeUsrpes6GiCa8DtyL9mHer",
  "key5": "3rD59U9psDr4pnvAenE5gghDej54LV4SKUDcDiZbAKKs3FGZFqSd7A7tyHK1ygbfyzBkTy95PpkhxmrBfa8vrpzD",
  "key6": "2T6GSy2HSTEz4UPrPgLvVpr74hb93j679wExQrb6pwoBHFyWGcShShvcpabpW7R2QSmp1c6uRTZZixEYhwp1B7Cj",
  "key7": "4Zy7eUpr6D5xjkP7jLdkbzMZU6RQCEWeR6fvnQpwaftZ6B66zWSRyfRxBYiKGTnAf7GfaqK3oCQin7GmE5FPDb3v",
  "key8": "4GaUvNN5a4JVQMFcP2boM1FJcZB9vHJfcKSeVz5ADGjqtsDm6nEb8Yi3WygqcMAqD86YGmhYvjJv1TxyjVB9X3vM",
  "key9": "2YtFUqskCx8DVfQWBAbdB9f8dwNTUdGCKDHBTPyZhFbCtz4DkbVhGgx9BpZoynXEPbyXRHYAVuw6CPupwGmRtJnv",
  "key10": "5ubAXbYsCSssR5N4QqeZ6dxa5P3JnT8hFWKGpRBJ5H6z3WEYhv4C39ooBD9KidJNgC9PAQ7JuhZRa83fQrFsHcLY",
  "key11": "3XE2JrRApSs69TxLkL6bVadGiivs6d3tXjE4YJqzgfZxQMZoQejGuzLvKGYndVH4kfJ6GERJ2omJ42suecwEmPzo",
  "key12": "63HEHxJgJx55BbT5DFSC49efvqKweGa9xFWT3wKZnCc4xvs15XbzjjMvtgcQ2UVaXfNSDoL78Jht5SEhG6Gn7KW6",
  "key13": "4QQN97jzFrLR5kBE5wwxzmrtqpHbyETLVVbjB44kXXiCX9THnXCpSWhN1Fw7xcjHQmFV2wSxDVnXpz6W92F9SAPc",
  "key14": "2ivFQSHwx5qMPh7uB6CRtLDogjgwWzCnnhPZtxy2qTb14WrCbiE1DKLEGfvnD4N3xJVNZ2dp5sigsatbx8iTkLYM",
  "key15": "3J77G3uZyCmb6hH48nwhQRqDHQ97DmbHeuf3nrMkDwwkyKJB1oupyCbe3gcb3B5FWcfPJBKNPuJfj1TNijwkrB8",
  "key16": "4XtL1CKbvLghzjNJadry3UtwmK9PTBNU6FWJvEi8QEMsXFv6iq1Tpsv7eB6krWenjU8CuVhts6gE4AX9Hu6x8j9N",
  "key17": "42QC5HfKZA6zVnRXJ1x8hQm2DJfTmPFMrfGqqGjekW4mEuiAC6rn22KHXipr7SfqpE9munaJwNxmE6RyRyPmQci",
  "key18": "27PXMqAdBXW1Zb4JPjsQ3yQdvNzyCtRaDihTUAWNE4xaoYNPn2bbavfz9yeGz6ggQp3THKohbYUXJKhZkpMGAaZY",
  "key19": "H63XGBPgZWjFQhXVP2PWuTj91f3eUVGxePih97VNjZcy9vJHpUypA4EmhFC5dEXESxpHYMDuwcH9kj5M86Treka",
  "key20": "3N8YJCdwcYiuzVaf9UjLkz2BNLhuZYHGTe2j884Ju2wDCFwpHR8eMkHkRaX4iKwMZ2qvHfY8eq1KdRLWuvAC1Uuy",
  "key21": "2jBi9z47i1PJ4ooYYgajnJ5DecyVWfMuAkTbtuSkP671T4hR9p77hgupLhxnf5ot29xCeYfPyC9KPLQRqvymPHVy",
  "key22": "4xScJVc5hWvMZkHgGuJDfNFdHiqAah6uimohYqjAE8BDHxF7nkskRaCL6ggok3tGCHo2pH1TcnjFWm4ZaRGaZBG5",
  "key23": "2QTkG4QMqxs9i8m3zJySJTG8UJCnFvbwZ5sSQLz9me9jBumC73r3btBazqbtGCumKUkWi4ukETyJV9C6vnbgZk4U",
  "key24": "2htsmziZBhwyho37esuAvfqSTSQXFW5ScJtJgX9vUwsxk7fvXJyotBj7NSQEviGNNS39Wq8L6HgDLdTEFRZm7Mbe",
  "key25": "3WhNYKznCcnrK7T1D6QKBJ6SkmJQb2ro1cZMyeq793KwMqVmV8tYe2AfNrSm31cZh5dQqUc4dWj5iyE3zfNPhy9B",
  "key26": "5mz4e47WxBxv7DDpe6zF4byn7ersKu1PQzzSEMfWnpfc43cuNNVDA2zRUJiKKs9vtsHihPaKaE2x9UEboyveS8zd",
  "key27": "2YentozocY4d3TCXHq9bPMDUPAf1smdeKaCCTidjqno5UpF8Mcwk1ahAEdT8mZsfrxg9pWQLZ99nHkt9GrQGZYZx",
  "key28": "tk62ckB8RE2Lu3fu2VKuxBWspxxLMbWgy5i1rbSox9MDKo5cPVRAymPqKkXqEm2tGJDTh2K6xRSGGtrz1Q2BSsR",
  "key29": "5K3SMWsnhQbfDJ9kKXhTS1HTwcW6oMpKh9aAGXNJTgsm9RvTTnTZAgZ2ZdPEFsq53uWaeqZA8QMzpUajVy1shZoA",
  "key30": "NQUS73ZDdBYo4mVg6cnbAomjrWRYFM3AizA4pKDKtf4jLDE69EQm4xPBdN7K2eBvBBMeeyamJ35Syfr7oSZaFon",
  "key31": "54hbPwbKsUgXb4VuDd7NQqbhB3tf7AjHNQTGa2wv5eAk6JZmYcCidXmp3VHfa5AnPEzThD8yLne2yp9iAWTDx5XQ",
  "key32": "552qiBCAK4MHDvmQPinr8A8v9SNTQfdtva3bZwpg7npVfCjDfvksrmHkFhBZsGp3UuSYY6FPAr3kNLhuUEDnLGNL",
  "key33": "5u5wCBtV4oRHd49YxuEs67jSfuY49GVFgqduNe45exBnhzzHeYmqTfSbom42HTGatsqbY3LZjFFqa6heRoaJC9uR",
  "key34": "64E4TLLriF1a22MWohHQDaXJSTKNetRBeuDzLtH1VXsejhces9HTtePsz2VD71w3K3XFao6meYQz8y6sXe8UStb9",
  "key35": "4ENjs6sQ6cTURHFcmJaovcMH1TqTwJAKChyTnzPBSK1SDEj3kZpNC7uNxdGKrrAWBEshMSRoNhnEPPrFATgcYi2y",
  "key36": "6e3Gsw8XKWU7mYHkJLFMRaimFXMCdRbw8qjYQs4GWnCMAaTXhfJwxVeDSn9UdgCAj5RbfezcFphbZ63emJEsxay",
  "key37": "5QeUVtobodHAWdFtskFN3pj7CxVJkjbJ8iTWNqufEcSixV8eDpjZ7nYy47gfRYPBn6mcb1XFqbPbnPLCkg74rka",
  "key38": "2biyNyECjnbpmvmaUhQ3PrGobubFbeSFcVAcZNLniecH8nVwfcLmqQR2u8qScbBS27cbXCw54soZXd67daYQXZ65",
  "key39": "5nKr3pMvmeCw5JcbgJkugLTc2uFEBnmYFC2cGe3rot6k18yJXQTtuPVzx5VZ2i12i8mv2MDej7Vf3yiXFcND8Xf",
  "key40": "34Mr4Wo2d5vDQEv77Te1vF1vtmq6zdxVMBCCp6oB5QGNzL3N99JXP3JARYiwSVs44fCNrbS9PKtZ5tBWUGrrrGTK"
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
