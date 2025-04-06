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
    "V8HyJrCKiQcsymuLYx3krRd9PxH8MzhfK9YWkTKQQ4ZHwb77htnJjJDbohJnu3fScrNW2xniv3G28mK71ygLTiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xnm96Gms13DPo1FuvNZtuzJ5n431FBcxL8pzPfihqTdZRy2dpzDv1AV6iTvL37NKmuZUiyVWf7P6iZv6iPZhcW4",
  "key1": "cA88A3eKC6ukQUSjBfLbeoNAA32c23eG3nRPvYZeSBDbYgmvPTjZjn9WKNg2WLyGLPPtn5Lz4xu6U4kvYS2Sg4H",
  "key2": "4zeXYZ5kRvpzBPPFGNtzeegGYoBjhv2BzjiSzs7dA8TJ8DjzpUV6goNGK7xjWcyufVfuYSyxzZ3y6cLzZ3r61j38",
  "key3": "KhbKJTgNM8mLELuywa3tHYBKddZPwjjTfVUr3spYgJoV4wY3mWdTntyuLuBs2f3MjEXtEwkzua4oKVboreUBVJg",
  "key4": "5bGeDWMKsjwAVXCypNLGq4swk25J8MjDSuPjtTRbYdKgwfrU3C4SnkJDcfKVyoVJRRYdAynhQkmqL88HojZc4Jjx",
  "key5": "2hRdmdfKHQe4e571BVyjSCj2LMiQave9xCzLJnGctCiXnWtD1VX77iMwYStmNkvsR9nAdieTgiFPwsWJuKS6YixC",
  "key6": "3hANFGVV1qbNWyfDtTFwNZ1KcH1UdUsS3jKkivHSqb5qPq92T6TRAajMageS2rUsBANq1zevx63op977vFfmxqg8",
  "key7": "27m34yjr8uwQ5pTAVYQZnorDs9EqN2F8rFkdhREnVw2w8ra7sXyUMLqXhssVKSEgHKsbXKkSqhrafpZCgnKfq8mH",
  "key8": "2qmiERTVykcCB379TbgcC4ws9TwPmW85Q7CthSnPw4Ho6AbrztkHWyGyJ5BtxDaD87URiMAN2HXUWbi6J3redSmu",
  "key9": "eJddFmFTMGozpBWGaZBmUxVmY2fN5zfdE9LZDF9pPogKh87U6DCn7fKNZrzZmoWhpPLPtsR4Mpq4LKUeygXWS8p",
  "key10": "3D8ozHWAhqMfz9m6E2cvCproiP8SMa1wM4tEcrL2rt5tCkp6Ak2F6Jkh7DdquVX8YBc8qKvH2ks5RRV7j57jEhGc",
  "key11": "4QEQ3Ug1Vroc6MDma1NV4zXcnzmBN9Q3J6V4SCj894Ufu912cXJYWmRjT8Zfem7Rnkxyuqy33TJF5o1ZrAXMnwfN",
  "key12": "9nHSp32qnxnqhC1XXW2RGyKWUVaBQSp77LhsxUdxHJsEDMo489uwYPWXE9rj1ahnU8vC4tq768sT4GnScZNKLXr",
  "key13": "5oXCuDhEnxWe8qZJsuguKegEAdy5mkLdBLR4ezG8Nez5RV5D9m61t96Xd2AWEz5kJdjVBPDgE6FYCZoDZRYNCFcZ",
  "key14": "4gmkwDDTqjTAdDppKunfYMi41oLKBFSDxi6Ruw8HhWrkhxHno5FhSU4sjLMCJfNGAm2Tdkx9A4f4yfK1tqDZuh5",
  "key15": "416R6d9rfKwgTcxxLSWsCVt1M6Rd71iyiqdhvAJ1DPdkFKSAjo2cm2mPTL4iBfLbHfxiAnv7zi2mQhZe4kwgoeUG",
  "key16": "2hRHYv9tt6a9yuCXNAboYgbrABiodN1vhtk3dEi1ThwC6RzY6EGDHURrJwURuxxum9itRJhsy9AQHb7oU2fJXvvh",
  "key17": "5Jk6GxzagbtDKQaYMCdzLTbdRTykECjXui7cBw3oTn84rFyjHxWbuwzmn7cT1euabBkqQX73jyd1dRpReN99fZyS",
  "key18": "2CVbLPSKK92GkxqsQXoqFHcnuSdeDePAbcTsedgrP2o9PuVDHP4etvSihXvZdT1v1TdYvZKskwXi62HLmkyjxgKy",
  "key19": "1MgaPnq98aWENw8kqjwqufEhWsfpsPLM2iByuL5EhXvRUwXZQ4ffkCVjLakhpu3hfQF4QXnNmwjtNqjV271pfdB",
  "key20": "2QXfXd1gciNzPjDfxKB6ZGrHyeQYhRs8GWZzXeVopaxQfEvnt9sDxsSh687ekTPRikSnWsMYJY1LMgBxYsfCj6Pu",
  "key21": "4ot8k53Xvec37XPSQJyTdBfgC5CMukLEEKrJrtqf4DVYTqxmXCrihQAsGPTHgWfPerCDTZ8NzmKphHwEdgt3EbNJ",
  "key22": "52fYDkRBJi3nibMapqoF1mn1QXGDUi9JWEePZHtXhDEY33aVGtUMTxrmbdRem7SYCpZTYhM7KT6kdn1q55Cz3ijD",
  "key23": "9ToJWKp4dqSvbNUuT42VLGoRNsrbcngqKGuumwwtyJzZCKTAAEWFVPoAkjJxQ487kx9bCYkqKHpa9g8skRRz2xP",
  "key24": "4BgebCTuj8bJ9vtgvUpvqAoD1R52dexV8Dfa7CpWbjjY3TBAffE7zgBh3r6M3avnMx25thnxGPjS9yCoJvESgyxB",
  "key25": "FRUvCJgzw662y5vw3gpcMX1dqHuDq3L9vvsU9CSMJD6d4dRAm2NeY4X7uNZ9DV1mBoo95c3Bb5K6Bk2AowGseZP",
  "key26": "2nSSN33treifxCghJVxLT7vJJ5xc4gUu7H68vzWiBZJpZjg7238ML3dVNY31KTxeCzUsAxw6HMbxak3QZfoDNsjr",
  "key27": "5v2eF5Hw8bxn3ukzdZxJHCV8qu9XEaAz3Y1mFbtjaT4263gdwx6zrx8e7MmewwkgP76XN4xD5e45HWXex5mv4wge",
  "key28": "5cvpRiP8aFPgmeyrww4t2qgWj7x53UAbBc9KLfhFoLhkBvL43VrSj1YkUn6z8XZ2q6BUBBNNiykcsn668AdEQUD3",
  "key29": "3zKMK7eGn22fVWRyLWFd4Z61U9kw2JDpzqF81TGRXrcppRG4Mm1W95syC29obWc6Nn8Se5icvWJ2PpVejh4ZyA2M",
  "key30": "3y2ZAdAqKKKck25A3FGBK9VSzgLijawNYQ2aDr8k1pHiv8CvT5Qmu9cucn72VUYPKkkECuFt7eq2CwsXZMVbNUch",
  "key31": "3SDzP6eWZiCJU8oPP2LGgGCiW3xa4Zu34JrrrxJYNhBZtBwrCRnAmhTk2rEt6wLxPXyyMShjtXzS1tG8878pqSUh",
  "key32": "Gy2Extr8YN4t8g3G78LR8MxqTLiy1BtzpbQUnC4Z6RK26FvW3Yt396KknzbYKsHaYovNRTSXEzDZK4ePFd2mpL2",
  "key33": "5o8FcA2jWspz85xakXibdXh1h4QUqYUULVuZNjAuNfbrgMijkpm1wqNk9AhvQZK5Se7GpJA4heLg9gmobWMaTzsQ",
  "key34": "4EBRDuoZdBthKCMQiCEuUKLgFbnmM7gkUUfTR59GEGcKW5TJJEGa1DwjQ9A18kbegNuE8MhxTNQJvTw4PT4fUBtr",
  "key35": "42ttC3iYsozMuF9kR3cyfohx2VPZSCgrvaujhbRnHJ9J4guxPxCPgG6qNiwNbwyNHJajWvXJF5pV3A3wBXryqq6d",
  "key36": "4zYKDamXBjBqdJxhaJmvYusa7Di4qHBE9sxCJpQL54TnTMFgUWE94AJd48J13jJzXRMGRspRzWURuxqXdSbEoYM9",
  "key37": "a9FZgqmSxS8RVHY8BygCZbYCwZFrQkkG7jaLanpZcaDtPCRPHMXWX8Mes6kFwDFw4F7rtD2Z2isuhPU7byQBK7Z",
  "key38": "3WSHgWjzzXGLxfMBwT1PqEFcmQ9xHG4tBKfRNnEppJuVzn5LBom89inCim2xmMtjkKLfinedZskxqNq9gvAHx112",
  "key39": "DHBhwBaqhrtwKcc3XovnpqvhVsMeGyy2jstAgBd83YUx8k7cXPnjDjA4ykBPa4o97yNwWPMveuMvdUK9oRdSZgo",
  "key40": "5cdWnNgV5eCnrckfKMqsw9LUoefXwxsX2PMDPfeHRt52zAS8VWbHordJ3EPfUWNNUQ5uCPKz9bM8zkMNcssqd7RY",
  "key41": "411stJyjBM6adTxjhFzanBgL2XDBwXf2FfmuoiKQP8GZ5MdBwRSXTiCbQR1QYhi9CLQ28kvzJTQrQDEDa3JaSJt7",
  "key42": "331J7nFiQhoThmGA2Tkxy7VyTZxz2enSmSYyTcW9PD2WR6VFrTMSyGHUcZFdaFCvim8jQhV7MKTAgirVa1tnANoz",
  "key43": "5FeHnpeMU73vRAh7Fo9xJfmj6LpHCGPY8uW6z9yK5u41SfLSDhptWrudFxMmVrWnyqfQJnrj2RqFvdKDSXB7PqJL",
  "key44": "4Ka2aCNLm5CJwtec2qxTSnZiU9wUg4MiaJ6go8s5J3oFjEBw4YSpYWDvAmecGBRXca1qVdCCSdc3qGnANhp2DXCp"
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
