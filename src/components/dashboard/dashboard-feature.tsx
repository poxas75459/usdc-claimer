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
    "5VPFBhU6vw17LcJQDii4T1Vu5TkSFy45dQ5nB4hAKKX5jviMDnpmeP99eb1rqKTNiufzfZKaDijU7cWhvMZsz6xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxEi3DtnWabVMbEm83U3cWKg599yuZVmdhxhYeTprpAk8MXYsQa9S2wVRJB5BxZwhhd8mMQYvvgkLAQuccvVCHx",
  "key1": "2FtZ8sQ8NxGieSs8GRBcdwDcPqvUTQyUkgSJnYqMKBrZTfgYVDCHYPq4D35UsgQVMugRMScG34cceRQ4UwanEBBQ",
  "key2": "2ZQZQfRKEyv2Zcge2AVbVpvp7uBTvK5guTvAHYbj62uoHNNg3r1dvTyVJgbuHKgj4V9Ug4vJPxmidxuhWKix1bdq",
  "key3": "54YDCKbGJa1M9ZQLaBE7CGQNE4Gh2U2RkeqAyEBMze7hML9JXDKu35F3fK5mJ6sDoyWwyU8u4nncmsgxiYiz1f96",
  "key4": "2gpNnjgwGhtBHT2n14caMJgBNpmx3yhQujAmroYGD2BR9shqiQ3FuUhbY9wYW3xgpKQj721zgr9MrLFUfk6ZKN2r",
  "key5": "3bhQMN2ASSGWZyKfpjxwHkAydxUKoQ9daFoJabUqkhTaecigd4jjNW3HZopg8k9Q3gN4aGmVZ1LZFXGoboTy8hiV",
  "key6": "5ZBx1cbeULKSALKJNnJ1w5mDUCDNmJe275sqxXGLrs6eyx9nVqznuHcFRTkpomdKALi1urWokcA9YjdWB4Nud3Ey",
  "key7": "uhtTwopt8cCA4umjbvqd635s3USkKg5CdnCJvo5NsmkXVYvaH3qGuquLgqT75C75i57PCh52P3gex4N3RnqW4HW",
  "key8": "541PENrmkcqDQEYf2ScLo5PaSFgkrA1hSymWWrgDTWteUxKATwPtCZW9WtrkTA7u7xQVhfrcWuBcbiqSVtrdrT17",
  "key9": "4Jr3p4ZABrpiKVJjyCqhqVbptqdzjuEjqPTLLkCwNcfoy4Z39WfUjjJYzz4pGvBFMd4rSPj7r35zoeLU3PvzSLGX",
  "key10": "5zNbWckYZmRXJpVukf9CfYWZkXyBuPmhhcZUCnJJQYgcCDAtqWYaj4JweyyCtgDHdtvdEFSsJ3Cvfi6UHV1vrEw6",
  "key11": "3hTCR9MBqthVJbY5AuH6HWe9z2ucuf2FtvksTa3RGjiznS59V4R4AKL5AREqVADoWdz5sELvqRg3RGgj4M7aCDGd",
  "key12": "44N3KnrheieCUTq5TSk95MFC22gJJbcxakmjXyscRgSct3d1fDGwBmcATiu2XzNtFK9HF8tir67S5nKvC6SYHX48",
  "key13": "5JC9BdtmKbwg44J6A4xQJ3Lmo4DdpVWF62oQ4dz8Bq6yQ2UJkCHdfZ1SjKdEiRDndsXdeTGpgLx3JX9rv7JJeim8",
  "key14": "61vukobDjvxp8xBzGRRwzAyzvz2oo2LyuQWQuohEAY5qJW1cwXd9NVrqSWbEZxtimoaa1umA1nQYEcqefHzU167J",
  "key15": "48j3jU89qpeeLTFGkVS47ukQyFTL4SRcjCQmCk9Cs3CF5a6iY3EPEy9UGotXz1re7GZMjZRQXQPxSSCNcAtiUhY8",
  "key16": "2Q1pndVE26posbwyNzrn5sU7cKYAwghJJdDjgJS19PLjjaaSL9uFMVrt59EMkriDnzRWBS9zvJi8q7daeEQXXtsY",
  "key17": "2LUqRovnM89VYo2j81VwBKGXdC3bfU9gjQUJdSy62gp7FJC7fJyRpZbj1cgW7CxEPNmFCjaC3YQ4M4R5dogbrWF4",
  "key18": "5KBmwy6cYk4V5swRBQm1Rkv34NMrKdLPvfgG8zRXV8TchsTep8FkSjoL3ysUx7QaDKrmJpa2suiWNVpgGKCLyRWs",
  "key19": "3VsucaQv2SedarpgW8dbvzegBvm8Nu9TQQiRazkJRwSF4swDkWZfccqptuNi6fUe9k38DoxZtoS6sh9b3coSahMK",
  "key20": "5KiNSfcULsCspZZnmmwZZfEH67iqBhiEAiiyqYBSCsfk6U9vac9y9T2rFcgW6YrV38iPoLxkLWKZxsu7UYuAxBCY",
  "key21": "zrcvNYfjCsr9UMVn6W2uyrhdzudSB1fGeV6V8zYjnwyCYdd6K5CTkQuUcJ2Z6U1fr6cxYpgyje9PJtxPpD3WwUJ",
  "key22": "2MxRWz7vbMzqabA4vBv4A4yKWoPAfytR8q4FxX34hw9cCEa2DRxiEWVQTNw9wGdYmkUrgnE7ai5kzcHYPGVSeEMh",
  "key23": "35CkxgasArsqXELVz89eoKyT2pqDYH4FvoJ6iFD3zFkd4PDmuAyML1AGL5tboomZQKmeSVufD44EEQpLAFsF1HRK",
  "key24": "5mJ1VeFzXVUffWkwdxp986LT4DfFr6jZWL482WQzwtbYpganVEwCTwn57p5KZHsq8roVmJc3fYCkpgefqFGLHDhG",
  "key25": "2NnpPQnaviGfpFPkRKy63F3rYqxhddFrPYWDtL9Xg2pus9f7aMdpJxPKD6VT6cfhYXQbb4isYoyQEMrCFFjzZZrZ",
  "key26": "4A4AxUqSzYZvo7PKvMDqbPr3uC7m5WdsJ9p8r5TnDfbmjwSWuq4JX2XqW8VH5X46qRDyGFK4Da8pJDgJB2FCK9Ne",
  "key27": "crv8QwgYnNe1tKXe1pQnVGa48v9S7BYfQZdhdJxPfrpcffC8x5p4y8Ewi4LP7m2c7Tm59FJ1ejXbxyMaBN7MEwq",
  "key28": "3yq4UTLhg3bhUY5z7bozBBggr1YkzDwNWFShXkHbsZFvWamMDpvbagM2gjGpKwwp9rJe72XkV1xqAk75i15g6qVi",
  "key29": "23wStYXfSJ8yKCyqfqhAMAHcZhDVhvyuCzL9RminJnqnTib1zDq729fbaxq11KnxewNLKiuY4Lb7wkMifTicPfFx",
  "key30": "2ALhEqyt5iN9Fc5xqJyrtyP66wra4DEnhT6YB8ufzNX9ph3FmuuPbC4vdEnk1QUm7YzqYt5LbXdkWJNArbo8CkUE",
  "key31": "4xAE9m3ixi3san9EqYRT1rJNpoNRgdhwLi9XYcoWKe4PyfmgWkuXrMmVgbHMW8tyDgtsd8JbpYjZwrQdjjrDkrxF",
  "key32": "5si5pMxTHwXVXxQ3Wi4bD7Cmo4qBQhBagDqXyZXX2aJ8V38Jp4R94JuYTwvbgNuxpvgooJPe7JhqRP2rvBrETBFR",
  "key33": "3AfcJeT5jUzV2cYZ65URbbcDZRQCtkT3MzjqLdYcN8xLvtHey2GybziWH3jomje5WyXPnP5xthgTp46vgJgtk1kd",
  "key34": "fybFp1j9H5AuehmKBtBkwpkst4mbqeQvtsH9ZqPDJQABAf58CqGRLZMF9QEkicAT871ZPM1ujEis7itR4Xw4w63",
  "key35": "1VWaxMtYt61GZ5vKsMWHYgs7voyFbXPV6bVhj3xwLsaJ41tDWuNC3UE8PAr741CbHk387S89zg9UuzkejMrALwQ",
  "key36": "4MeBFouZA6tdw71foP98FCxMTtYcgU1r7Hhwszfw4UVGXwGbxeu1NuQcXEAeiua486j5vQjmf7RRKS83uXVzZPWS",
  "key37": "2KWDWQ7KW3Kj5EariwtUwCE63LXRNXZD6d4eBTtPTB8TswdXhPMQXJmxgjr9vQUpmjZmhNzMwsTLSkjvzEoMTiDn",
  "key38": "3hxXtZT7VwqKBE6cBsjSDtegmyRan3FTT4se7G2LMNNeogAq1mgsNtp9Z4q8hrVTMVuzCvm5NdLvjo2jrpgxYSGt",
  "key39": "5jZMswR2jj2unM65qSNomo7gyUjD6wHEdeKiswFuH3Ue28UnB7wg5hRuVmPwkTBVekSJeytAZGcC6tcGbQwxiAED",
  "key40": "74wg8CWEG8LHuNF66CMgMhLrn7geabnq3hjkWmKncy4Jxh4LLTDiWqrSZdh2H8b9GEBxaLQK1rF2XbKZdmujXeH",
  "key41": "HkKNHPMMziMf6b5AXthVrMdyX6mwVTesQev5Uk4D6FeTGHd1dFVQdpWnmaALK28jbDL1TRvNjAGT3iQjANk9Bbt",
  "key42": "3JrxxyoXqM8ygpZ9tS3Zum1hc8DkQsZWKA3H55X1s5riD6u1XsQk6HESvxds22XvfLU5SeRRA1JMK5rEYVAFFPLi",
  "key43": "GCCiPWG6SHiSKUVQX6Y3F1KGKQdVEyW3SwjfynMQb7Mr6Z78ynf639Fictx6zjZsHkBShWiRBiG8uAc4afeT2m4",
  "key44": "3VHn8b237dFacwNUcynCwBJ51yYv4f2JNmDaxtGcrDe3jMuU6iZC2MMLuBEpSPgajbFKADBgZTDqcYtcF64KSjs8",
  "key45": "26UoGLTCm37eJx7GvUgRQ4sW6cgqmndZhFj19rMHofCy3A1EuNZbSruw5oKGzponASp6vLB1vRCQWNFvPSfc2t4q",
  "key46": "59poj1MPH3jRYq8Pv6126kjQ2PVLPHKmfkA2eHZbxSB9bzKqJ7F2iQaSqTr95fCr62tDicQD3MCWh5YtJ5k61QpD",
  "key47": "2Aw7LWsyyNFLrpGfLEPVnR1RvMC1K9Wy274aSzZ1tnq4FsEed2kyKwRoEeQq3CGYJW3Ld9hUCwWEdThBM3nXZ2a5",
  "key48": "3DrWoUT7d2zKAYKYaqMdUtykvN1cvqvudF9UFa1QRxeKYwHfBJxDu66PgcC8n4qGz4qzbrQoRrFstXF7dXUJVmK"
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
