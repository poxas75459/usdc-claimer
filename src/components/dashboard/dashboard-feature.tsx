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
    "4UH3BGBKLX1tNjh8ybEdJjmRhro8cSdm91dR1cZiYT34hFD72T8rQoeJ7rNP6Ti7VfhsApJfEVRh8NHQi9gHZ3E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBtG842njaVGSeuiTDfYuyBZ3y2y3vFJSv4UagN9HZhXR1g6eFB3nefXspV9bnCAyRHCqxxotZ9jpF83UH6mdDC",
  "key1": "3pCCHvB2fENYn18oomLg1zGLgccsvfPCdmhX4AusxifjBmcmhPj34CM9D7sKUfnvh7fV7Y6fs1NPJUM91LVnC86n",
  "key2": "4GdqCUU9nMnHBq1nciZ1kS5DZ65uwHPdaFbnVmPxHqcAxcLZeh4eXSHkxA4yXs5fQXqz52ELK3re4bFVMK2rXcWA",
  "key3": "qLMJT983MUhYrNMT2EvYnskLBtiXMuzLWT8nTXyxesQ4fgAe9YtesNf29T1VkjhSDXaEmkdkFjruRBmEqyDQU2G",
  "key4": "2nYchmp4g4P7ZnGTLwryBzLVQWEgmohBSXsmoV9uh43M8hVixYok7EtWDCfvWxdV5ijNEFFDojMJ915xRkhGwCDA",
  "key5": "3cRdtPBpP3zukpEXAHDiFbXAzcF2uQexWpSZWECjNjXfZH617GQfRzJPPHreqXaViZjU4jHfQKpVM1xhu3m2kFai",
  "key6": "2BQ1hr7LVAVcKzTnQRruNrvEqwK6SRsS227y2ujoewqMt1NYW4NB7zx7WmWzjfX2eNwUcn7PR4Lk41ntS8JyqGBb",
  "key7": "3kjmWVTjNc5kdZUfofcif9x5EFieYwnBz4t1VUSUEQpyXEAfVZMKo2UP4t4kseiMw1Vj7LHzLxt9H7BCC261jpjG",
  "key8": "4SPGKNLsfpMAy87RibNeJiEZZapZx1ECkM2woQHLF3uyAWp1yFbz1141uVQWgC5KEuXoaWdNvJaeCjDHQBJtVFKK",
  "key9": "5sopdUymWQSr6noJxWFTquUvrAG7ocAuX1HgCbCdm9pK8ojnPaYj4qoKzyYDv4qBzEhn6SgyCtS7pEWuHaxFUBn4",
  "key10": "4repg3rhAGcAdyXaY89xnxhS9d7z14nNrTm38ic4tDdMYAcNfgjn86cSqYKXYXtNCATD4L5odUDh8jCkYS54mh6b",
  "key11": "2Ap5ETRuNmgd8z6pseBdMDqvAYQ5ZC5qub7PL64eP5gjUz1UEX6tQsTW5nawxcWviCHAsM4Lihh6J8JatscgVRez",
  "key12": "QnCo7mkyLi3yzjLtaV3kFX7UAruhVJMQTENmZiH8ztXQFhfqdoYAaNtBbNH3YWywhQBy8qnDfE3qzRvT4BDXZvZ",
  "key13": "4qCUHzUoARTef9pTN1maQq5Q2WXcvmizHV5rPEvRHPo3FyNkDUXeZYVNJhPEqnNWXLLi1iM3m8W4Std3hH4KtGM5",
  "key14": "4fxfbfLooDUzmPwe4ndq28Mbw8eguLFzp1JpLLLDbEmgGmbKKWTNMFLRwDpieNVjKqWZVwd37TeJpasVN1kDktrm",
  "key15": "2fjtTf3Yq7NxuQXY5mUUDbNMs6LhyqKhkFWy45aq3V3gi3oWudzRMguw1rCGRFDUunkV2ctVymmbwcQfCD8Ta8Hj",
  "key16": "4osAQwvUscMDQRW2JBGEY9DFHXtutFBAScHV54a3dDQeVt9Y3pACKYiWb7VxYx7CPQndUqKgLxaxPmVE4HgYSn8",
  "key17": "2EwUac8785unjAGmUN2AM7JUU7kdRPTHfBfFDrFbqMrkFDixS9YoZ6Csm1hobMPSm27DwyWRYWaC4mXZCrnDXUtL",
  "key18": "Aqeu6ER8ZN1uJBYnHJZU2Fh3yy2aaikB275JTT2QboN3qYEdNajYNpn7fSZ8rbFRg2sLCVpAMrNwGgPxFiiD6fc",
  "key19": "ENkUFBipG4Rp64sYrebeDoWHniBKFDrvyAo2a2m9znR4THJdNU5WNnxnpJqmtMhaBWESnX93hmJbsnvvgcDT6Zx",
  "key20": "56i9xPWS3TMxBoiktTFwbhQtceu7Xr3uYaMF9ovg5s6GwWxx8jaoMNrUdBwFRATgZe5y6LauB7L4HKSxqnSckzXE",
  "key21": "5LQVgKPFFjxzJkxXV2DPcNaTZLZR5jG1vAW3wTofgLSNGYyVad7U86xKjWPW3jn1uUQ9GEPikTVx1kncbfYtEJj5",
  "key22": "uNWK1QR65wvQrZ3yxdX8tkXD9CT4Z4Qcmuoe5qK9FZ49UWqxSP6KNM7R8sUKQnDFaBczDqJ5nucxbijMMnuDrxw",
  "key23": "2GPnkq2KPJM8Qow6MbXe2AxL8uXUZResyZwECuBxSexBr3w21E7vqk4mEMUpjAcfxTdA9ufiZRixth2k6yVws9N1",
  "key24": "2BYGTRXzXnvidEMjeAbpTfreV3iD7TYhAqxcHCiTaktDdm3grbxwENyRCsEpQVbGjWT7cK3sNjPkpUxg1wRzX5me",
  "key25": "3nwVhsS448GRgLTH5yHBsefKN5Dm7Unzx5eqTQyqswQVoJkDFnZWDftSpyCx9LLNTf6Pd85vViYk37efM9KtkkNC",
  "key26": "5f1145BVdV5wPDrXtWsPJhotyo4rbjB871b7wY5GCykDponjygdJNfTvGFGwdCUmrgjFAZirQoqHvyZDR9L5LyP7",
  "key27": "3woVjBYcVTnq7ysC8KDqVuneZvinkDtMr1DnZVu7kogYj2ekNPRLNoFNw3NmWAtPtaewuVav6CDDz6QmZVo7oj9o",
  "key28": "hDLnUDfYtPFjJZrZpMNhGrB37EmFFYHhNzoAwMun5PgXHrdLYM6CJ46mHCenP9aGAHpeFtxtANGWxPjk2J14uwd",
  "key29": "5APhssBFbN6RDknhMnkPdTWMMT5ZRoW8pHE2P7N1s7n3FzSPNYVV7gxpNYPswoEFLHMwyYq5CAi8uzchVDXU78Ep",
  "key30": "4sbwNQ4DAXPmdPsRN4fBW5ShEd24Ci6VBCAeFMmN64nHEgT2zNDAZEFRDPTA9uLD2jHR2xmrLH5Nq51idwSiPtsC",
  "key31": "2JqLfPRhK16qm4NqmGgb4cTNLT9CA4943wE3RifY9zBBztTVGZebFSSGtB1dhKsoGpMpYkxng4vNGf4QkL1G2pj7",
  "key32": "4pMJXugwMipLj1sJSqqFvfx1Q5fkFCE1nUC5EGvu1yCbVdp1Kqzf9rvvz18p4RvqfcZ2bZfNecKTHmpP1et1eERV",
  "key33": "4aX5U75XDnqvhQDmHQkBUiEDmwFoFmQ85gSHgom6UgSxZPPSJxERA27XqzzVSX9GebVT11U6iCqGugJXRoRGQGPp",
  "key34": "2Yes3tsX4zNbPWUrtChbrL9YZDw3JMhptUPDUwoLtZNJ9Dxm2QrgGbJfcX5SMxozsgArg3kXzPm445qcKZLZ6umj",
  "key35": "33XXSE5g2wLcz9Uj9VY5L1y2yTC44FZwyCHz5YBtASNccgqLRXpk4uysVTSZVXvMjxeEa6Lzyr34jQ1gPPfW7DBC"
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
