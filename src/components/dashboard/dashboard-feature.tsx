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
    "JEyUqoT3tHzDTHBj5jrRMsqZqhn6TXsFTWPAShXEKfUfQkYs1f79PQrY8jVC8BGARDczx55vDtjt7WFWdwKZBAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vU9DYYcXYNnegtcgo6jrEBepyTztDi3q7o1onEG1eQQYPf3mAX2UCa9eP7gZSz6nm9ZSB7xyvsrupjqBcXWexqB",
  "key1": "3q8JXnsqfHpB8N2MyhPD4Qu9CDpx1JKooiFPM9VsQQXGXxLiqgXj39pJi4EDRNzC9xk76om8doykUGery6ZDE7pV",
  "key2": "5q2EoxU6fes4yNoe418oJgU8evpVoqGAFAbGYHy9QP6Szpxrtv3VpZJSF1mui6sHKnVZBHD2zD2Z235FBiaJbPy1",
  "key3": "3gBcmLHaRxbu2BeyfYxYnK5fu2BMr1rKjxcMjvE5bs5du3rTJi7TFWp1Xz7w4Lds932NidMKpGRf3e8CjF4QokS6",
  "key4": "51nyGAkUJ2TRoHNkFUJquzT1LgmywmYTUTfV6Gx9rLwJ7zBREYREPPnCCkL7Yh7t7dsyiN9SQ1JSFgDy98HyR8vB",
  "key5": "49TQepxooFzqiuvqxW6w3jgMfvMD4ves2Mc8AXNLjjmUwjgUjFXK3Y1K1ANNaounBxsKqaZspmBuj8izQ14Y649f",
  "key6": "ennk4NWHrbggB3eSW8NZCFS14r7rYhNbbHbeg4ZTjgZj12R4C4MFdELuk7ynHgQjqasSiscvMHrTAWYwWZJedP6",
  "key7": "f57JyZspsEgdCkhJYSvHecih5xDUq5JVSxh8TxvsUY7N92F1vPUC1wEKNMZuGftuMn4ozRuc3Dfp2yZW4nu1Kap",
  "key8": "2yYDVx58R8KnPftZPZVFhNCd5y6ziPmKQ1aJpmSSfG1CL5e8gJtu1h5CmrgJaWJbJmd9Fn7Cwbpect6aVuf5tJ9j",
  "key9": "5xn9e95LmmyTQEQLzKjGKnNyVpoJdm4jTEuUvaAJt5pGH6iRTTsfbqN6kgJQ19gnrrmWpeThMfpBY8g4kXG1h6Kc",
  "key10": "8EXRAfmoRfRn3La9MSGnm2xi1V7MG1n8wad7w7t7fYeCqnaRc9RGSU2gRGqQDrBdr5Ypv4yniYCU9AGawyTxZRT",
  "key11": "2qZSgFnetsHqRqa4kZPPtyeBRw2difsNejmcmUExeHpyohvSknRyGj5kSojX5Lefsib8ChPxZeQWoR5N4VwZDSqr",
  "key12": "3j8GGV3z42Kp6ndSYUSGPweEa5oCCL1uUieT2i8Kud9dAFSAxdgjDRC7XxMpULHcGcLkrSxwDcrxSLpdiy3voc3q",
  "key13": "2quntuQYpUVR1wVH4QCd4UCmxGGki1LKBRdoxxYTREJdk3sayZqsUQ2tkuGajPUrjzJ9RUPsRATLE2rjgfGwn2or",
  "key14": "5bHgb88VcKz9HNuhimnSyXfxjmSGGF57DeTz3CCm2nBdoTs5xFMUEDwvQkPnHCVFEKdsXCRg4QcVmXDyQ73F3TmX",
  "key15": "42E8JtXZzUmpBKJRs76y8X79mta172EAyL48Btppsf2XPVu9KU9fUFVJ5A3VxtAPjmD4BwAf3DZXKawQAFA7Frh9",
  "key16": "4YYJyK9qBHHVTKuStxsea9vPcBTaLkDbSuC1w7b2Dxy2mG2sK1finxZPGhit5i4wCSSnrEFnbLKWhws8Kpierpmv",
  "key17": "3z6er9Af4YzDWp95RS6uRxEE8db3dtuSN3qn5b1BwKGD5ocC6qowU2VANEhCT2L2mrSQLNR1QStQxtMqwtmiubYo",
  "key18": "3BkgxLK4YcyDVdQKLsAuDPYjDoUcm14ZDnBxmuFf2efGkdGkZkmqvbDGJDW4TofbE9ydcLKTsUUCcmDv4CEtGRJm",
  "key19": "3BrpuydHWoBANSnHQiYj8yQGK2d6Gb4GYKn9JDvnCboJYC9Joqun1z2tMZ24b2edaTMMqteZNeJGpgBSJWQ6qVoK",
  "key20": "2ZK944jbJo8GHaLaLApJ62xH6dCUz3z2MqE4SzNjphMUWVQL8pxoJqfzm4CxVVQjw4v4kR3DfgKUHzB2cTCgQ7eP",
  "key21": "4NGajciV4Ebvah3twWbHzQye2SqEkXuzkMf2b5vBLYo6VGwZ1sWzNkXgwk3h4Px9w5mmn9FGprMmLpD1WMxiHePS",
  "key22": "dFEmigrnvyx16uB5Lh16gGLHAS3p8EX3GGFmn86sW6ZxXbjk17HsLrPh4KUFssDkaf5U9XqwqYpmmzswHafib8r",
  "key23": "3Rj4YuoXDbLwPgT4TujLEoorku4z4RUTJqC9U2F5mAKppnoLTEfx7fiyWaA8PtJQjeCggpJKjLWXSG4Wh4qpcmip",
  "key24": "3A6s6akWZzLPJWpP29HJgRonKGPyEjoG7B67nQS5EEpqg2urUGv8FhUhQG7c6roQi2T5ys7Xs2r8ed8W6bBEtian",
  "key25": "39McybEofQjgNjuGPvEVvDSXRaJ8Emkezwo1rgaCGLp7YYHKPHYMJPxRfFJHKrvfVYJDzsfK6tZNPPxt8baucgxm",
  "key26": "31mPyMUki8Ck1D8skwCxNgQEMs2FUMitbsDPY2bE4t4xyuPCwVj2mFEi1Df4khkMgu43d5SbydQFzoWVAd9QRfbi",
  "key27": "5PrAggUsBo2EGPRJJDnMbjn6WDcjN42LvDFa3FqbWiKkbAbjEv72fPzvu9eRmXfctsUNQ1J9H91eEFq1ZygaxCDF",
  "key28": "3m3wQJpDr4cDnccmsWfYtzBTUs7SJuNZeftCg2w98Pjd81ZGVC81pyYWTupybkgioEp85Sr5MtVvyXmQD1sUZHuR"
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
