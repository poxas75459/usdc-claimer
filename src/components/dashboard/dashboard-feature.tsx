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
    "2MTAVTo9BWmBeTB7DRhyPDxPWqnBWGEXXBadoXEqiAgWbXZ7zx9EXmawmUgmPp54KCqv8Wbz72CSSXVWtQboWCrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eoKdHgajaG5uVqCkvtirXPtYPBg4D8wTHE6QCeRx3nyVASySHypMTZVBfXRGPnAm9voL4HNf86bPztBjxkupWcH",
  "key1": "2ciPRWNQqH7Y6jCiCVSPNnigTrzF7zBdXXpGDynxfsydXnZFTyshcKYmKenPP9tjXdckD5NQDcwzpDrcXYa6onBw",
  "key2": "5pFotk7hFtAmyj85AM11n3MpWb6kHLuGpEFKF1VWDEALYyMfsR5KG71FCEgmdXNiMR3Qz9niBqtfwyGTsZhV5pVM",
  "key3": "4nWgLRARmv872QZYNyJP5WwSpgpWktAMrge9w1BVvXghZpxUoZBGeqwzp2BYwjaUxYisfevRZU2kCVQkNc4ukodD",
  "key4": "aTtBtnLzCNopHXPvghxzH1Ju46cow8z5ECMxmjHUCnnDtD9mG5jevVNYksxD1mRjSrBxSGinuq9BATGktmDAMTB",
  "key5": "3qQrQv65pPUQtDtjo8GwFqqK8aUygnKNUGC86EZUC3gtbpGFQKEjZWsHQ4JWq4TUJTMJYjWAvAf4Yqb8tkXp82pm",
  "key6": "2fTuPsDGXYQKVWJ2Lbh6Kz7V2C8ScbaKAfQGYRjrKckgmcrBQzeHESgLvkFJXmbpqn8VxgGiWF6ZF8Q34PN1kuYh",
  "key7": "2cgh6RrxKb1HaNYCuxSaiSSzjeFbkP5MJxzxPzLjZ4QpL4pix8m2yzbEG69ZyXwZbPbmTvJMLBZ9f9s3dz6kdWmL",
  "key8": "3GkwYfWugYy6sqVNabLYGwzRRCVBo3K4XqfJFSAWPLk824TRG8jA7m7K44DK4TV8ARKHB4m1ioks4YpNr3GEx2bm",
  "key9": "5wdUW7FBTmbGHnsjribNb9XHi49mf14aGMARdc8reFk3RdRbPxojETgxiAyJ7PkyafRHBY2GRzLy3NXt8LDpRfyt",
  "key10": "5ZkPAQvK6DRvRmDFFi36rHb44aayzeSnVJcPYwboK5kQ6s5YSKEQabaufrrcRXwDkSuA7N3Gr7j58WiPkoXqoiN5",
  "key11": "2Jo24t7xvd9sr6u7M1PqovkxRTD3KbY5pRrwtTavjTnAoVQhJSHUr7xBDZduhdfcipuq7bbWiGLByxHsZg5n3Gi6",
  "key12": "Fomysxbr79mSRjmF33XzyFpCaKVt8vMmuitdLiHCEedso49HDo8Pz2yb45rgN4TBs5SUQzEH5vdfXBPKws4U5Uo",
  "key13": "2snuor5BjUx2ej8TNJ8f8Yy2LBjskyMa2FXq7JiEtg88JvkhhgQsiDAq8ByKSTdavjv3g4tBrs8uN8fvW9BrRiuc",
  "key14": "37j6Bw2eZ6uL5gk6xw6Urd9spH6VcPoXLxkmuspen2TyarZANjVrCP5B3yvgtrL1fzi8sDhbvtUCj6YarU6NmdQS",
  "key15": "4rcBYgtkHUvMwv7eV82zL2W31D6H4f5AcwQTNe7Kr1sJ6jHvEZe5QqKdcQQspKU7ud7nr59KhiDKxTu8oP8ucoTq",
  "key16": "23PWVD6x4rsgCJdKWRjA18yERAhWivtGPEmP3bZ9dBhGTpWSyBnEaADqCnRc2E9P68AW8T2i1KihdtyZGQNwy2h1",
  "key17": "W4htou6FBgVq1dtd8MmnSK4wz3xLExF2fcU3nHo358TxAGhH6NLYJqqW7JTeA8Gju2suuMSwnB6wcZ74x7n556G",
  "key18": "2uovjaygQ1XeziYtySjsa7L1DF9nya95tYXY3rS6zY6Qc8i8jWq4228vbQWFoYou4GSNvAA22QB2LxMfuU9Wj8f5",
  "key19": "5kznG3atgiSqej3i9rmJNZpnrTzmFxBT6AnDgJfveYh5ZSp3RYbHaHtDzwS8GAm6XmrYPRVHfXfnRoHax8qK8m4f",
  "key20": "4qXxe5NWK7rm4h9yGgzXkaYQbPrAT3us3FXU3yJqFUg8HXzXTRhxGJDUyf8U7gC6Ckvg4SPGf7wVwRSWSuGFPG5u",
  "key21": "2gc7LT1bHY7jaiVt5Ag9p5hd9aU9ocW9k21X6KbHGZWG74JmCi1xW9qpxr8SCC2jpEuTVLsxseUvbiDd5ZU3PgWc",
  "key22": "48bVsLfw1fTzJpmYqhnauLc8WLkqoxfVoeAM2BZJuZy1rGURd8tiCw8w1p7VvAwYrdjXX76DMUH6gKvmJPKTKkgU",
  "key23": "3uUjYvCGecGT7wu6bgpC7sLVcv5Ft8emZ3ivoKFPnqEBJTUnwA7VjxRG5StFattMRGDSv1BCGpFxX7usSvRgXMhW",
  "key24": "64ooWZUbdEvxsGQvdusxjMLoV7HRrHcJ13JVi6mWcyGt5rgZqc8STajAnxNVniYfRbsCZdG5np9cjWJXx9dtNsBL",
  "key25": "3tWpqhjhhcoyXmnEqpuWLGLdx9eC3aDYgKyPt3n2FAb1YvwPV28RpWc5VVMVQQUzQKed87tVtL5NAZryAMVAf2oN",
  "key26": "5xSdArZASTJwwKcGvKkgmHPd2vv9h7W9yFGYk3kTMpUPwDd3KtqG3NNQSTuDCVTEUJN8h1bLjhGj9RXLbkVWQKGz",
  "key27": "53C7uqnJGLDeh9Dsa8sNJgibgbcXK1kFbtcj2AfZrJJmir3DiFN68qdcCgpL8A2XL8bQ8FFdiUKaz3anxmhJ4nGG",
  "key28": "2KG55VrmYAbAoMUggvZsEAyLU13wduY7sHGFhERuYQ9Pa4u255kgXEyZPHZx2w57J5c8LEBTLjUfw3cufKKB6Xq3",
  "key29": "2QePAFnghvCGWM15WtyCXTxbadrjSh7PRnzrJprmRegXBr47N4PPw7GsetJpLMc25iN1hgd8qTz7ti2sbEHyLJC9",
  "key30": "AGvEQ76m2ca48av3aNhTYnL5R3yL1AC7KhgfucCz4sydSxy2iMmE8nKQyqCuELqBCQjweycngq3Xf7A6acC7gYp",
  "key31": "3tpVf2AZWmwVroM2fFrzKNFYGf25Dz2DbY7yCQcvs4X9yhVTF4WiREBPD96ZJ3DXURj7YWtTJNZBtHWEZwZmCbvY",
  "key32": "5xwK9jkeXxoFVqBXWwNwncqnyiKDNySPJjEfDNitRbDnqTy6Tt111tb5Ba8PRzbn4Y3JbqC6RSR2weLpza8XZKhv",
  "key33": "5CTgyRJoZGhHMLYdKdmm2oGYPyeGoWJ8xXjVzr7gXiAARdjw1W8WYTuMfar4bxYJDeVFfaQSz6SzkKjgaCELTRQw",
  "key34": "2hdpYhGyV5jaWKB7ndirNnd71uXk2tbCZz2tHGPx2YqNVA9iXXRsGtkkQETq1cgxXuEhfGERhhAcvpwZZjGBwwQy",
  "key35": "26NRnptyob25ynr3wmaj7awMc3YTjX767vdfAScrYQ4KaTQA7Fzn1Ef6dJ6YVcN3XHWu3RS4gqSsmZw1BtFQ2ay9",
  "key36": "2fkCX5E5cKFoSeGbiEft72WuhZ2LTkmDu9Zt1rDnaSmYZycAGKmFGdEYbrGExiKEpkDxmVCdLHZDyUpDGuebpTvi",
  "key37": "JnUN5XWHDAycixCXUEPrFkfP3uD2pXXGzL8bnAWgAZnovg7pnP12CvEL6d9V16WgM7WG2ADM6x8gzVZcnzztmve",
  "key38": "29QH53xAdQaEt3z6uExX5Ge6MeFdhhofrn8gsDnfSoJXJuG2jszKk1ZGowqRooj9Bn2HH8ykhHLc1RtFTBn76a9v",
  "key39": "3UN3Jwv7RhivSsyRF1xPG9Vbx21KHgzT3Pyx7HZFjjuJCkdZNggAhrgodQkibC2WugSsH2J9ggftMq2N2sv8V39p",
  "key40": "4SLrfFPD5fkrw6YuhyXD7CetRs6k5jcGDeFnnD6b2NxAsm8sPQRoet54URrrduG4Ldpbb1wzuS1p48rA4WyNGYVr",
  "key41": "5LUzN3qEz9bdgNbwdA2yXyU5LJN23e41L3H5SmAzx1uNoWkzgUSMketyxQtMiwAQ1WJV5iX4wygrQNC3swbmFC31"
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
