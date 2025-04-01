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
    "2FDSYbWC6noVUHH7XHUTVyTgWwhk4q98jKQtMeaE1jg6udAU1sDdoUPKfnLZi6te4cF6u7sWzkkX6nPHWurWsrfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTkmqcMQLCerAD41BxDh4ZqcCL8VdGsDY7xbVsmPv99kupBwR7yPR8vCtqTuEhqF8CQePFS4f5SSYdwbbmainpM",
  "key1": "kftGeyiUeK6vi6QqNFaZ79xD8JifPdm35UeGYiNepVyxuPwD7d5kyfzeoWUJFotCczm5TfNGUh5YrVgfTaZv7gF",
  "key2": "55zKxG7XyPzv778T45bwDDWUMxq7D6ndHpoN1YpQLm7945VgHgo3A9NvtoJ1SK4Q4MpCN2V3MGfWSGtxhW1Cj33t",
  "key3": "4ysGvnKBgmn2RFCwR5jsnfZzwnRnFBSBjU1p1QY2SpoNAJNhtpydqWLZtRgZKBZwrs5GvLKw18zrhNfUefq2ewng",
  "key4": "DCKEiSEMuBBQNuhsKoBVNF3UMR8zj6A4w5LW8q6r8q2gD1DVJi3kC2hjPUWgzRpannv2rTHnhJVB9CW7Uq7Hz8A",
  "key5": "5BPuePvSVjJFUV2tkYQzEJGXK4AqRUv1Q9coj8g4pCz2Cki4JwDUrG7iV4F5nXSRSEra8w3UFzxBKgQFDKpWHryJ",
  "key6": "YyZLjmNBsnQ71YyaYMXiaMZ4qq3yggkcSDF1CapVG78RzCJCV9Vsbe4sBV1zbx3mWkWmUeKJGicnxSazghYViUs",
  "key7": "XQx9mYArrwqenCan6Awr44RbRDWNe6KWGf4SjXcHgTrXzopTi8PzVfvWdZcFYRGbbUrmA91v2U7BdYZCEqfTiZH",
  "key8": "4cDcftaAyCPDESxPxMamGzV782wWNAo245tb5YtjUMHTVK2RAbX23qv4KouWzUJZaSB8QhAsF3L2MbAHmzax8rB7",
  "key9": "2D6RE6uhtJpPRCPcWpmMnHpJgFwzikbkFj9eQ3noxxfAENVUT6Ay4GRmo9T8Py237rkiwYjw6vpVw25ELnwjMmp9",
  "key10": "2mHkWjfSXG9j8eo8DMJjAwRT6LkQBxL8gRwVQX381xW3NNSznkAJapYCx7TCYfSkMJwxtPRfLM8fYJHGJ2yHG1XL",
  "key11": "3ZdcV4GTMLiscU5zj3wEoZ7iQq7rLtgDiGF9KtNtpXZg7YJ7u7vBPn7neVDTuXGDCLBYSzo6M4aiBSc54cr71FSK",
  "key12": "41fMwtKwwR1imjv2b2AkckyGvSGu2GbiR158swc9xVAwdKiffofnnQbpfWs735RjTaea3pq9nvwf4BtgCYVjjNq5",
  "key13": "2VzHY2FMrB1GR5KYpWT13Kw2wwv8iirS25Lai8VNEfC3qiu4CjvnCUUEH6xXirugQtXEkTrjM4mdVWFntsqRdyad",
  "key14": "4QmkTGXQWxNDwEwRMQXCfX6if1h53m4Nf14ycMrzr3gfRLkezf3fGySBys186jW6ZEt1dKp4xA4hZYvL9rgHQTN7",
  "key15": "2G6WWE7dvm5pD4izyiu96xPHZbdQvFyVK4FBtRACPiNCxYemF2uQiUHkQmEbrrH8EZdgWvK7DehwjyNcmMrjuLuB",
  "key16": "vJ2vzTCkP17P1iVJpzrPddGVAcwa3crUbYEZwqQkaQzujxnvZ3aS2kieKCqHKwkSsAtTiBGUGo1XSmTWQWfKT9F",
  "key17": "6AYNtEQkdVSEFhSBQucktRw6MUDcxz9xG2EKzFbNtB2XcxrbPCrZd338JhCkbPDxW4myuNJcJQMNCUJ3dR8eyHR",
  "key18": "5cynBbvjp9L7iCcHZjvipBEFd77yjPLMsbHbASiBS37qy7g7waC3Zq2Hb9WUuXfYR5ziq3edTo4ncRiChqaWeMGq",
  "key19": "5N4zRaBPNWj5NeyMdGsLixbbiLp3fmXLBEadxv6frF48Pr36fFkXFMRtbp9wBUhu5kbu3k4PJTdDDyaCRBYi64MA",
  "key20": "g5BRwsxenPG8Xwd6ti5HhBquDnJHsVUo7UrY1PZQoKVkpyS6EcARWfEcqqW9VtinefSydiewYkMHdyVMewwCs8z",
  "key21": "YoNNy1jJFo3WNZgHMzTkvrcT8AQaZgiaZEX59qhjXYakWMYkdsq8RYMnjtoBeSNNFMDkwe1REciA7APaT8Ni2Fo",
  "key22": "MFTyBaYitFx1HZwiE2RzSQ3bgEBTYSvYsgcFHRjZMFMJmsY3pA2vuAyykVzNGADGVAtbT49jyToJT2AaAJFFfaL",
  "key23": "4KMw1hDJb9xo7zNtJFDQScWDNySZz38fLER1GUiBQBAB82gDdW7kico9o8yRUkda83zH6Ue2SWJKiUYwFoNByz9F",
  "key24": "5GgWxUYR9tj7XQjchvnw2TYWP8ST7FUqxS49PgKomX9bTPAzZ7f2r5GXbcFywNba8aCCVWFnnD3DapuXtKmQLh7h",
  "key25": "3NdjRwTDCsUARXX3RTGoXVbfQPQwqcG3xmZKr5xP3M4JQzar8JU78dwH535Suy1mWyLyQzNvDLEsiHy8Nj4eKDtL",
  "key26": "2eJ6L5oVHcTaz5pyFPcHhek6eanHc399GWwbZfHidGK5czjUE3A2wQc6zrovgG3BVfP8QmsK8uQfhDL1eTLVWK19",
  "key27": "4EEVYNrkDo8dpacXbdG9shUYZw8Hzpc7HAgddeAMBxXfnNqQtYwey46N4T1naAmNXDkjTtAJeKsgKdXCHD7iRLv3",
  "key28": "56m5KTWG7go2qRxf8fiArV3mQyMVex5WBfWxDcWfj8F8cBS3V8ehwXwvu7y1myYeTDA1h1iwbDFGPh5ecywWkNuQ",
  "key29": "5Y8bKoP6zCJpepe6RGA9K2yT7xpABqkaubYRJ86pZfzs4B11QRCQptiaevYnmuRPPrGRacB4DX62Wto4tfo8hGFA",
  "key30": "4mxpye4tHfBx7NYpQq24P3fH1Tn6y51Z4dHMDtxhXMseJJHPMuXaKEySUT1TvgqRYxbRBgHnykQUVmkBhGGe7hzR",
  "key31": "4376VydRMRNwGr3NZSCKfK2iK7fTrxbPfJxgSVLQVjumkfXE624Q6kZqnkKxcuZpzXbKy37ZKxDdjq3813cj4QQS",
  "key32": "4ZtRzZE2BJ4fzMJAz3hN8WjaJ8BtJL5hniwSVy4on4ocUEHh4mXA1zZCHoWtMryiZiW354edDfZ5BCWVRnX2Bex9",
  "key33": "3auMVH1XmifENzuv7yEjYzh3MDKqZqBYWySsQp8tuGbeBsSsP9h6cZEG26VJ57BPYQY8MvciZKs64RczEKur1QW6",
  "key34": "4qYeVbKPztjjNiN9WRaoJFa6kc8cYvhbmN3CViUedw22jPzjgaw59tqhd8ATSd1Vbsn4CYfiJiqHS5DqTAFfL1fQ",
  "key35": "3FRVmXAQ6h6MqpbG7naCAGja8mroGdCozZy6bBKtUQ9F2e9EUgdNhkTtxLrTKLynJKYqtLAQsYDYnFuqwYWDzv1U",
  "key36": "52YFs82KVCKp5zLSos12aWpLkJdpbeaMMBZTqVm2cKcHEYBLKGGwWRQ7H2GuTKhzjWpyPXP5vkjVp5vpckEZNtSs",
  "key37": "5oLdW9qc99bLrU8kigTnTkbUnYgmCrtdEfKzLdgoqcRknwEZroAbXJ9e38h8hfGuy95ZUwm4phExGwdHAzo51a2X",
  "key38": "BKCE5iueYJbPYvHgtT63ZvswErjKSeLrzVtMxjLF8mxxr9fkqwz6dNCdcTx4JT6MiLvZuAtVL3fuvEM9VN6Yhub",
  "key39": "4wQY9QdmvsBUsjo6UFRkLusC3VrZtTPDbDLdbgBFcC27fhU2bnyZr32bD7V8p8zUYTisVtmePRfgb63LmUiLTAtb",
  "key40": "56a9x5zjqKRtYhQQKX72qra6NoFa5CvRJSCVenxExpaTe5M3j77oZETYfCGegDimCMVLxq4rueExq9PRXinkVACx"
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
