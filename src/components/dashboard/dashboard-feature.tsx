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
    "tFSZ9tfsHxCE7yiK2Q29FphFo3iA2mpAno1cHKqZ8ux9zf2KebMugTyr1vxV1Q7wiyUkFUkLYwKrA7JLerad2Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdKzxxTzEpcm8GsYZuLPagNmh4sYcxnmsoCXZPiaSMiLpEWYQriZFRH85zHKq8ddywchCGVKcedursJb8ysrxV9",
  "key1": "4tvmhQUYuaY3JTaJiSPK4bBzdk4v8jHXgowBcSf8sBKbgHa1onfVcJhkCXhQB8Dty17B7L8dmGhUpwje3vpkeJAZ",
  "key2": "S51b9P3pGHhJtEGfQjER4v8ufdgMYmUcgpKBPabWNZzp5zBbeA58MPdkBRFoASD9mJwk6ysHefPF4CNuqttcTTg",
  "key3": "4MJH5Ep1tdTQagQvfivk3LBN1bvNoVNMxv8fbzLvHRbucT6ctHPjY7FKZBKeRZdNfReLUvWp8W9fqSJyJMBKcwZP",
  "key4": "24EHpYT2bh7CTi6DRpbaPRdxfoxLyRscmatW7EVMN4zAQYpFXRnoUqicMfmqDg428hXbSXNisQRLzsbXUXvwVns1",
  "key5": "4dc3Av3Ek7PQcarXzyTUf2fb76cVeMZZu3UxJTe9oaf6pr4Na31ciCeXgf24XFJsUd42WwgsXhjh2NNTAPAPtPAf",
  "key6": "5H2ANGpS3TEK88np9MMf1QEwso5EYYvfM4Ss2QdVTzQkFq6ZL7tZ2YT1knR3oDZwW25E3z69f2mPEdKFBZsrTNaj",
  "key7": "5SJUgyzJbDfPH7s54WRSqb9yaV5N1grnbprWswoAZRd41brcKWwGoqNqVXMsNsJ6opTQRkLsenjwdQhoa58YPuVZ",
  "key8": "2dYxZH8pXsWzPGtMHBXE5WTyzfDzVqeNajv3tdcPWnguw9a7Bezu4JipddpmfwRQGSXnzSjjPoXDgvYrHBJftPZ",
  "key9": "2Pni2bzYRT3CPJmBCGNud8uGusnX793AfQUCP767ZSGd1FVh7mFdjkBpPBxDMNf6sjgvim6E3RMvsspxULSYY9Z4",
  "key10": "4FduFX5vgZE98BczYy588YyiWcQHFQZ4GtB4vvNdpRPPKaJGLj2aUCyrwHfJF4n1SEvgJm65oFTHpe1cb7FPg1bJ",
  "key11": "4sbW5gt14voJWoAQjnd64yPCjefcsHuswWZrG7rzZcUXBnz9krd7PxH2zQ8iFZXohayMJrkuLpWuNvTkPDrGLesU",
  "key12": "65Xb6cjhUJhJEMJZD6VqbAAnVEXqu3JMFrSszrjDdxbAgxknPf1jDw3SFe67763KDWU4awMTpu5fPafrtL5PyT7U",
  "key13": "TBnrgghw5xAN3ZdPyHex6t7p6vDXqTWoNR3Frg4CTZdmdQAvsydNMA8QnwFGJMZYLFweEaNkyHKJUcU7eWrYx3d",
  "key14": "3YP5Ete4GKBzq3QEpsiXteUFaXozo62j61MjNnKArMk3TECog1aC4PMSdtrW67R9UGKhytkPzT3FgdX4HJ5s1Zoy",
  "key15": "5v1aH5xKm23y1LU9JpY7jhoaCh4asPm7qg7KRQztckHKx6KGGzDyNcpZmEzc3j7KP5kUaaQbzXkA3mB7rRpshucA",
  "key16": "4DdiWtA9Y9vzKnmnyPGnDETK9FvTsnxWEduQfUghJBoPm6VPKVxPdQd3QgMsjsFYL5hPYWuFKt33CWLY5Ahkb6hW",
  "key17": "4ehHyo9CBcT6jea7FeSsPjhTLrzTb2qYPWUWELDmUHCv2RLEwApW684QJJcwNuUN3NdAsPrU3EwZJh3bhgAYEuYQ",
  "key18": "3KGRCiHKAeEkVBw3H4sd6SiACVVZduxAZwPoGvgq7o5LnpNwsmRLe1vvTKsReok7CTmH7AsYwq23a8WBptu99sJ4",
  "key19": "2MN5P2q5S6mCyXfu69K8Dypg5eQWk7AoiXJHJ3gTGXjKzmtTqgYHgByuKUyRoaPQ3SoQSzUALQemvk6e8xG8hocr",
  "key20": "2RvceB4kFUbHsTVHQBim76GwPUEpy2uPTNEtQezDsnNZ2wDEufmUhsRDBD3pFqvJSinbyBxmuvbkmJwCMzFMcpkw",
  "key21": "66oztpjhzoDJVAwqfrDkg6bGKFsWvqLo2fxF6RyqUWz6GS8716yEL4XmtANHC1ueyWAi9JpUqGCLQQYG5NWbPyo7",
  "key22": "p5cxZyqTfcxvGPrSQfJYdXUqRgcLpevHvhkkn82rSQEG4Mqu25ZTWt5dBasEXNyuBwnhCXwvcQUH7ADDRU512ks",
  "key23": "3uMLFrUuFT7aBYymBXVNiLJUPERSE9Rwvm3jFVr8291hwiT4PAFx425K43ZNjr3exPGH8y6xAp5MSVtRd4W5AwyU",
  "key24": "4oPZRqUybFQhFGhX4GSRVkeYAjYddBFe7n7vWTWX6SGHNnVHBzDbKB1nJoJ8He81wTmyWR7ARevCMu3adri3EiQH",
  "key25": "5JQqaiTBKHTk4QmUMeop13Vrj9pMsbb24WHwAYVECjDmsqwdPkj3A7e5ahuk2nJxCNGCM2NmxanKcwH6CtQiLRBc",
  "key26": "4SxtBWW8m2TKT1GU5uG3rKjFJQhvWs9kNmoETTqbTwz9XKXTHPsPwrWic3dDhY1nbc16Qtww2t3HpML9xxGSTeSp",
  "key27": "5WB5cadTSZZnXBXr3QooawgC4bPLut5pntseeHcv12dq4BCc3pijZ6Ny4LFCnRK76GszPkmkKt8whHn7gb1qSkvm",
  "key28": "tjY2UgHQHJz7xhoFScqmSKo7r6GGg4UoUn3xZAKd8qrFLgQoJVTnEbmddFK4U7uv4ZcRpiHneEwnWYGmKup3XJb",
  "key29": "4Paz9rVEJqTkquHRPQSE1TYL8UyZQhGDUemg7Vg3CPWRcQZNN7mD4nAhCyeXKqAT2sj9mdysZsyqUvbEMiL7qpzC",
  "key30": "4c7yCdAPyQcUuxKKPsnKx2QyFMK1UaijbSN1Ge5jS2RzfMz3xziDv3F9ySkRJaEkwMnvcQcLj5wh2BAaC4VhX4oT",
  "key31": "5jU27mJbGsPr8MVus4ytZGSq1C5Rcp9uwPkqdpawVzfqM419SXmBGqaPxNvfpinVpXy9F4JMJduCtu2jP3Sevjzz",
  "key32": "GexfnFF6b3LmnKuDxAMNdyGir73NMhXViiZGDKDfNjQuV3Qio4HnSS95fqkQS1oBWUFidfH6Tzr6f5LAR89LgLj",
  "key33": "8mtGyFRjmpDojijYs9v3iyavomFX4P8zyZrSh44itDDFNARM52zUTipVBEyUZxXFjBL4o2fuor2ck3YhLxuK7td",
  "key34": "DMh2JyRRXnKNfXzpFK5GSP19kYuznNW6HJmYAHZ1FpKduHPTUpLjpQo7zK7epLRvAWaWTAZ2EYKKGaGux7CdRHm",
  "key35": "5qXqVkdrZLdx7hD2PBNwrcp3B99MuJ6BrBYpj14NR6zUGdexmpy1WmTRznjeZg2mWyd1yA5jcLxKKjYZZbLTqdME",
  "key36": "3JWteJv3SbLrDbUeuJY8DJjggaRTXA1Rx65ff3vzj8MDi2CWL9biRHNXepjVGpzjRngjmf1Dc2ZMa6xmDWo6ej9C",
  "key37": "szkE1gda5x4eAWPbkniroRkoJALdo7jQFNfWyRisrJFBdzMZuXZhfKdu1pxhEqcGqFYEA4aby4MXTnvqXnCWpL5",
  "key38": "5whsicGKQctFBsAH18KuKDaD8s336wJ5X8zNJqWZtowDWw3gd45vkfoYDjSGU1cen3JhT2zhm7J5XhC7teQ53Jx7",
  "key39": "4XX6Q3A8CWUH35JP8SqwPUsbFrWBKvH6RfrS9yMMY4Ri8M3zzvjjF1MEGYDLu88CQQV64z5qEpyKdizWMr4RpjZn",
  "key40": "4UBeGA3eqVJKZkcwwEuVSGg1Xv7P6f3RMJFRJeV4gvGG3kdf37dSu96kjXPwpxRxdUekNtRsyjuAeU4hYiqnGXc4",
  "key41": "kKQ95gy8bRXyEnCQy8ur53ZEWSj6gNSf3XN254mVuU8zxfdUEkNs1nTo3FRz1pcb7tWcAfLjzrT7gvSm5RfDqnh",
  "key42": "3cve8WmvQkdVxqhSVQdkAxN8U3tRgcxhAVmyF3jKUGyHWRrkiGnkAF4hpWBDUAqvxLaBHC3QXCh53Z3YS5Dppkoa",
  "key43": "3fvWKVmhFVoysLNdCYFUEF9BA55CpGhDHnBPSFNVYRXRH4VECTWWhTyjTPDu51BCpTNeLSikLKToPrZyh1nbH7X2"
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
