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
    "jx9QtarJRXeYLzqmbJ5hDRSWvpVGJhGAJiXC23ppSjgVa74YjttTfjEkY8ahkQEHAkPvqL6B99DviUeEMnd7tLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yn5aYJWXUjrjGgZpNjomtabA65FFAegm4XeLHcHSs4tJx8k2dGr3fHBGDwbCRHQUMJ9zByJZVKuC87kYwNNgd4a",
  "key1": "2TgEJ1pzsn6qWF9URPbCWFQiCzt6Jz5btZfbjYagdEXhon2jvGi1STS2mNYq3RfUEnxxWt2etKATQGmTnphQe2GB",
  "key2": "4UV3myGKPuWy1uBqy9uWUz9pufRmvMvE3nmWrmSXsoyw28CQYVQ2KY77xcXwcWaP7xLUU2sbv119suvZNS5v7g78",
  "key3": "4gNbT22GAMUKch4pXbKj6KNJu6B3ruxvRvVFTvBR4F4GyPknwyhGRVkX1aa7QH7ab6Vymn8UfX8Ke6UGNj88yuZ3",
  "key4": "C7n7iRB8LXMnDaYhvG7jkfCbbV9NpPQEMwUythtFRUcX3YHAuSgcom7ky4Ei9UJkuHpkSsxxZVLoGZkyyr1kggQ",
  "key5": "GyEPzX3bsZLdiDyoLcdc4RtnfEvjnxS6GKofPMKFZVTav7EHvphuVmE5gGn6ZQJvgBzKZc33LCYw474zZDDV4Bi",
  "key6": "3c274xCEWaF9WruQawq2KKAcLJLssmriodKP9hxxS5yb4k1Xn3y913xnyd79mSDJhYgrYkeipqqbPqbdXzXsGFZg",
  "key7": "35TqMugeuCdsGjHF1DKZvbCpvn9pEa6LSkYvnCYr4FaXrAWjpM7GYJUZtM3XhqabGHAfJi3JxBPLbQJuPHT2iyds",
  "key8": "548ND1EzQ7BxxABFSh6HLBngAtGcPzYPcfTwFiQafNy5wJDTEkk4tHPuQEiWKDL2M2KtJ8MgsHfG2oUy2SZDNhXh",
  "key9": "3k4xcFhUyR4LJeYvnbSyLRfR3THpc79JxFD7cEcK5D4brQRpyk5nSarAZwK1XwjgXNHVczCkLGAdLodU6gnfS7od",
  "key10": "5jrzLR7i2btQw97oxAdJAARzaCFKiEGupbUPg5YrKknbkMpZ67mziwBTUPAyrrMESFQPzJG7L9W2fAVRmi58Qois",
  "key11": "2YxBv2ysoPFgnH7B8L1j7oTjDNkoQEEvhucNacFYctr8Ri8DrXebfZoVzup3dmtRdrxrygZMRDnb12GfHch1f2t9",
  "key12": "2njpwC3MtVzdGqJKB2avgozpxhMSW5nRfjKqJFCGsAgfZoeznGqyM9vaMtqnQTSJVMjnBEkUjicgvRrmQ9AtqcCY",
  "key13": "3YroMFHt3Pd2UXe31xMXQdjcabLNaR61Y4CvuGDXT5mFGB9L8v8dwWbLfoTH7YgMdLuSv4xAmtNTzVKQWPMeywBg",
  "key14": "2hAUZYA3uevy16a9MZ28a1bdFAMattGcBtYJQt8qaj3cNSbmLJma8Jgro46v1iF2r23JwUoywfhH8XndSAWiY181",
  "key15": "5geg2iQiFnLuCiENeVFArRDKrwhrEsdgKHv8yBZAXcSW3hCuo66vs6VsQVwxedYnH6NC6oNZY2jqDYS95Gft2Swg",
  "key16": "6qVd72knvuXpEeeK6VCUe5nh61SYcGNbwN81aLB9n2U9YvNcUxiR4AgDrCGw59NYfscsp4YDgEiaxUEDB5NnJPG",
  "key17": "5cYSGNVrd2MGPJHMhn2n2cEKS4Q3Wn7cAHqArdhoHgvTv9Q4P67KEkYkMsq2ggwNSzexpuKT1nHNrHMFgy54RbUB",
  "key18": "iUDhJD3jRPKpuVbDY7UmeCweJZguhyzTwm9S1dt2EUhMXpihTNnARh577HkseNrCjmLUnqnAjVjNkifiDathAoK",
  "key19": "3P7gwd662Fv1aPSGUdrJT4Nk3V89NKwWQ3naHn1N3iZxTJCakN68KxyL7aE77kRwc9B4ngc8XeMvDjabitwwPrjn",
  "key20": "3a3Sat5kGaYCw8EGzjTc7MyFQPWhAJY7NG9LZ8PL3nG5s22KXccbjmkxPxuFj219ZGnCkF64pLB6B4zpXh98CEfP",
  "key21": "yw3RP2AtGJWDyRaRud9myFtwLAGkq9RQVDjyLzbXDejvg2Kn5kUMNCEw6xwgULaFA3HxpF8cqy48tVt2Z7vXU7U",
  "key22": "2srCABm9P7VNx22SsKqbcqfL4EJerKLLuoQ1jWkhACCt1aptX5EvadhJ9DWHHHWhDu6HuMs4K62JcL7jH1tj4UAg",
  "key23": "sUYGzaU9VQS5nRk8BDAqG93GPExsBDaje5Y9CyodXqi5cXf9oKmL91imhwkSVwkp7bLBvHG2ScdE1QqM5cJXVU6",
  "key24": "4BgompXoTgAaH3BnWZB776DCQFUxefrVT5xrYSpy9KSXWFwHE7NK9DjX4gvRVTSRXABcxdNihbxYMZ7cwuFPbkac",
  "key25": "2eaWHD71BzpGzYZrkv2GnrqtQveNkTZACFxazK4voEGMMCmyZdmsSSktbQVrEx8Vvac3VKEkWBBq9iPBRmt2EgYv",
  "key26": "46MYBmqMSsXNJC1B7sYLXMY2V63KDbE8rk6WmLCL8Xx4X9NVHisLJRvTEgeKCi19o5z6EF5MSjYvLP11hrLp5TtQ",
  "key27": "4ESF5LX2DpPa6srw9iCaKS4SW3PWv1MKi4NnkKMhxDBvjvjcfaWx3ShQjecYEvUtWDfiwajaMoMHA3fNtvUxymT7",
  "key28": "3FuveRsmydwz7f22TD8RPB9kYeN1A8BVTLqnRY3pfQG4GC9JzWrAm3PiffJ4ZSAtUBEm68qaon1ahCsyb268HJgZ",
  "key29": "39m7xwWerzGwxFpTJUeHX9kd4k6rPGSn1bE4uEdMoRpNB8JjvSoet767LRj8dGkWYiLx24GpwJnLBGWsLAyMb6PN",
  "key30": "Pk9mCmzBstcvxFsyEZtMHipHne6xk14XPDx2KaUYcfL5mYM5qNG2d3xak4WaPuaYU44gbnY5NcGXvuih9Vd2ojt",
  "key31": "2TdmDLWCtz3y4124Ak83y4sodYBTFsRGBvm5QGLppxFQEf6mA4FLPYwqETpB2DvaaJD6fUSimyAHh5LvUrki6LSG",
  "key32": "216HBGT5rJvx1GGg3s7uSxk3UCtbSdiwWMde5wKuhvFNFUHpy5qvmrP3rP5vvg9vUYjGncr1Mc6UgmBnQEPsJYso"
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
