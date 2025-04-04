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
    "3TymjeCuEyZN2vJTc3ghyb6Co8hWXK69BCuZYNqBxF2AWuFrW8DeqyGarHAXycAcdjfyQicxpMiZJyyG2DTzjsiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2yRfV3t9pg7PV5ccqYqnGaE6TyodEyDbq5CtJJSdqhEeHjU7jv4AtbVuYuxoCgNfgF1aExh4VYzpt7Ph5SQKcc",
  "key1": "3tTez3bvEQtLRU8Pn2jzqPsDB2fU4ewoP3pdMnn9LPNzMXBa4kucGkHZ7xWaraRRCPb7L7DvkcrrzuE6CrWny8gn",
  "key2": "63UL6nEWy13owkn6JmZYNPg4K7cgh74nEwgjSsgBc3PTNQP82aqNgD3ZATtgdKMGHzTJ1FiGh29Nar1GoPv7xCZ3",
  "key3": "4bCz9Vha41E5yQ9PArXavaWBxptKKuNyKFHdaeo9idEbs34FSgK5TUE99uMMvqCRd7rFQhdkT3TpZxX7iPTrLbAG",
  "key4": "5DQmfM6fx9Rk7EonBn5fbrhD1U9dHCoA112HvU9ftQAFWGxBJohkgQH4BrvqjPZ2HKSfw41AZd2tmb4ZhczY2h7T",
  "key5": "2oei7V34Y2bW4XGLB6puJ5938zhXDDJEX48kZtnDoiHAZXwpvVaY7VRvFchZSHmBwekTk4NsMYWbAdepJxR7Qh91",
  "key6": "5CbekjALPnvwiaQJEeuYCm4Ju7oXHsJ8ugC1hM6LRPungMgn1ZFaaUhCMaP9W93NK1TbLoMaWSMuWEgQYTn1Sjaq",
  "key7": "3otD2ncPPxbcoBxmoXdZoRYw99GdMwRPaDaTPerCKmnW7T4upC8HyBbYKfk4gamedr1h1DTzuaiQk9i4y9k6DCSM",
  "key8": "58UMV55GkhwLGberV86oSi2LP7U6ho48y6cMZ7bvNHVuBYLgVky4WBnBmTohpfwSZ7LmKwwvFL7cL8wrPSUMTGHD",
  "key9": "3ExYQRytXeEicCuMBeU36n9d9bX6Y8LaDxftch9YWJioaQ9Xaqmn8oiwjCB1nSPk75SD1jtdCgoYFPVujdsrkBY1",
  "key10": "V5AXUVz4GTTG7q67xfEAuLcuLbEq7gvBC9ybWWYx7kgVuyrx6CDgDUnf39Cfw2LXnUu5ZgzvH4FrBDgmKKuUTfB",
  "key11": "5CKzFvdVEXK5KqrHmW65qMqEuecGZzwcuvmroq9CvHi4ES4yNHTAhGBdv9ohGt46kBzFqeQ1ZreG5jsgdVpanoUC",
  "key12": "EFpZaKGdtqPXBgXX7nVP8v1vfFpQrx27VK71UD6NonCNCirieiEBiCXqG6NGWPrA4o5B6vc96UTKwqquSuqUa7f",
  "key13": "4Sc3gwCaYwPULvprxhsE55ZALzn14fdmJntchkS4uLv12KaveAdTG1a8gb9aUtXn1HRcFXVa86Z6FnJx7bkeCATp",
  "key14": "2daGqApgU6B6WLH6HDHT4n82iPSjjc2uKC5Nb8w19ode4tkbUVPvc9E9Rp87GSNPk7q78WKg8q8swpEurj9mg7Yk",
  "key15": "3SUJBnXR59Hfj2q4nWUW4a6EnQJuQttuJbyaEZJewGZ1RDxMxTYdJWbmfqEt8xPtkLwFwKxnPs4JsJkXEXZcyg22",
  "key16": "b2CDwsDPS4VFZBxZQDGoYaZyq3SKdxpdm5Covzz1cQw6XLLbowxiYuS8E4fTdtgxpKCd8DiE4XZ3nzfsm8jtWke",
  "key17": "4pDkXgPEFwrYtq264zpNLzLPeHoksbktxvLRwc3e1Q7UqUdEAuaubocf1S2ddVdWJRLfvQtdiDCuKbHa9hXBcn2x",
  "key18": "NrELN9njNCC9N9mFU43yLcPNeiCHps9GMjo3Q2iTwJ36usV56NV2ccmia3sTc3QuX32xNeerpScUPiN5UrpBSof",
  "key19": "64mMCc6pXF1gp4NuvJXapAWwTA8uNdgYTMXfZGNcT7qPZzRyMmVsnrAJ7D1oqk4uR6bD1gctaauiZhtH1rDcL8SC",
  "key20": "F8Bw2oJRtnxvPdHJQ7Eg8DcxyQpqoAjzaPEMP8bVFKbWpoJ37vdkmGEtunXPQu77FHkESh15PQUVY9kkPKyA8vA",
  "key21": "akU97hMMfQX436JQqcpvgXgkkgHVASSVqgP6mmmw2uUPyoE1ergZ9mAwZ3SpcCG2kfNGjo9XPoQ57H611qwt89p",
  "key22": "4gZspYNhksXaUyqozmRCWUuCuqf6jXvJsGfuBVdKkBkNeJ9WmX4xrYh7SF2z258xLJdc12aTnRsCxBCKLQYRuZvt",
  "key23": "2hDMDAswk4TwTnhR2xQPvYVX5DacSww2X2DQ29HmUyYdGQCGEXxtp815yovvky1KpnHHeNHTKoNRMWSytotY4MjA",
  "key24": "YwYWXpA3tXb2hAEZruqXaGgaAJemUd7DpsmR3DThsVdgstseGZdxEe5SjkmuGerJy2r4yRLLDPEZgafRd6APScN",
  "key25": "4HJZDR4HwyKG6rw5rSGw4c46jhKd3BF513yK3tcXNtPUAyxuFq3MTSdGN3uEbdQkxMmtkiJs6s47hGPgjphby1Kg",
  "key26": "nRhUxw6pGazde1zZUCJ51tYmmvKAWgiuBLLZvcEPPr9LQ8FWDp16NLxMPR6t9ywW5mVS6m4fMhJtppipZ8sV5AR",
  "key27": "3noGXWLTzoD5BYmW3FQbnQRLj7mKwVv4Zi1Prg6jzPgyDjjuG3QNKgShvEGvcT8kKUw7t8agbuBYTBTjDV5TLonG",
  "key28": "4ZPar9364GSvYqbgxkyEhfQ9vMGYRrxgkZMZ8jdLsuy2wV9TBA2oyZBUjEdPCne3wr5X8rgjwFRet6ZX9mxrTvSa",
  "key29": "5qx6HQDZG6uimPV79iLyRKrq2fKBc73SvhC29KNZTjvcxzq5W9JMEErQDwAyMwNNbzFa77d3fcggTeEvr1LkYKJE",
  "key30": "58PmGTNHTK4eDaGLcdeiAdBnpTqb93F9jVuPmeQUTp7jzbAhRofUiDTvfKQkeVk7E3aQtrQrFKW4mdPixwUw7SsD",
  "key31": "sPqZYybvWez1WM8MCJCFkRUL9W347psG1VApefD4Hz3SKEWsjTrChxW3mnfNJqtnHUmYcCAMCz3Sy8FUNKLtBD2",
  "key32": "2A6uLK4ziek7LzkLci4SRR77jpVXXspeyy2VqWuNmG1KH4LkCWpaBMXHzPiejw6H1V8ygF3WudAvY32SGBVyiquf",
  "key33": "4fgExdfTtQGCrqXBP8Mz7C5n7wYSuTHDCYm5dqmpeQvxduvqew7BS1KvJeVSGsGVEczepfWdV5uPNZNJN299UurY",
  "key34": "3jpjmnHyoqBZPM69uSfQBSer9WRL9N5qZA1Np8iTaMpG7MhyBumYevPikqWywhFJ2mhq1iAPjz7Bsc5wtJkhwv6Z",
  "key35": "2opGH3BQ2aZNBfAHNMUpdUaHBNmXdGJnRY1W9cMXAidbw7CXNq5yE3xJPFp4ozJAWEtk1kq7Cqagz29jDXrQPNNW",
  "key36": "39VkCwNGx5dSkrCuD11YBmFyMGBxGCcd8cXHHiSCiMjozah4yu4vD5kmuBmEPKAQzg3MVVHcGVSFCCPuyfUq58jc",
  "key37": "5m1WyeKRB4dxFFEs87QnM2Htmj8My2RWTxqJkh9EtMDUfYu6cSpdBZcavcyP9qvJuPbGDN2oxfBzUGMXQvZFndV5",
  "key38": "4x462NwUmknh4iCrFBzWJTySGm4eXPmBWJoZA7zqaubyedyVFNnheiaZ1ZsuuPTmHX3ckFJsSvpNSHsMxaoh6yPy",
  "key39": "4Dk3u5fVVa5wSHVkoQHSYkB74fqd2pr9fAH8Xc16dGvvdJhLGWkpwqEUbFK4QBYGE3QXs6KAdQ5uhAPP7GspWh91",
  "key40": "cpH9QVGh1VrA79QqV26W9Sg5eaRpbfobdhhMLtzc5bLo82pttn9Mf2C5v9Vgato4ZmiJTHZRA8vE2nPSu13FuAW",
  "key41": "2CFf7Y5PBy46aCdBJXMzi3FyvrjXNkhacVEv6vybeS3P4uTCaAymEt1ufZeBLiQiMtmCTptfWZjsxN3scoAZkdSU",
  "key42": "YDEWc9es6b9exQoujVV5z9DG2GvvphThrNvcbBnBFhL4MLESwb1bpvzYgjQDupUi1kz62W52rGXC7LnE4EitTga",
  "key43": "64BCXR8QQkSF4zLEK4gYuDQZZkbJswFwsmfYfoVVgpDcTT4ZCtGtMnww6T64aXkX3M9DdcC63zoT3dsWKXnKCLvR",
  "key44": "3k7Q8V3XYy2uknMvGigU55w2io8NUpDyn6vKYkf6oJZb5J2cW8tcNDwSd8t8S1ESqfi92Sk45T1EFg3muhxS5n6p",
  "key45": "5u1gVjzMkWqEzU1umEkJc3WfuAiDpoeto6mvG8SXTti5v2di2jxWcdJ9tpm6MTEZqVDxfSKT5M8yGZpKvPwcVhpk"
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
