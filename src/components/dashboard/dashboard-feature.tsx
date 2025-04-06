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
    "3tDD1axiPgx6XatWM4BxTUKjaBnkT4ZDcRTU6cXmMKLQZEy5BfM2KiQYAqnpoot448RxYnwGzXAicMYKd662M3m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTcRKQaGuLAgk1YrCSoKdP3S87Hn8LMZs8tmRNbT76hXAvF9BgQEhfArAwWRnFnRXsik1mLStovp8p1TyHHbRGD",
  "key1": "4t8ooCU1AwJ5yoS6uFafgXr58F2jQEhT5gJksmbhhfhrGHWVnAo2XA5qbrNxAHJpLxVLkC5io1zSGstjRr5NxvVp",
  "key2": "cEyQG4kiaQmWizUBx1HoAKiRAD5zsFPy9evtRehzYxJaPodw6ws8oWWCikdeBKYRZvrM7btDhCoC8YR4TGVZnub",
  "key3": "4Cxp4Cuy8KYrtfnbJjFVfMTtq9xvWVhqEXDRdE6nSaY6BFSJvXb6z9mVNAXJp8yjFbjJ8VBXww1eYrx5YmzWv3ZT",
  "key4": "5cL6RaEe6fAdYX2trypDmSk5kNr7vZ6VQtwKFmMEtq1PVe8xu5KgqUJfjgvUNDFp6k5MV3QNua7wpT14wD296ZTE",
  "key5": "5Pg6mRCZMHARmc5GqRqqjMqsZqJe4gN5fn6iQVjgNV7bKxTHuKVntsXJaA1FEKSXDWiKuTcZTRsPBYvmHpFK3N4F",
  "key6": "2Uq6pHFPmQfZsrSuUPSgaFZrdbrPwCda1yfSDWRaPoZcaYJrjHMpT63PZXmdDZjqzsKdiBbmxxbM8kRgxJysd7e9",
  "key7": "3NfJ52zJeuH1V1iNcVHQqwwcxZHQFHfFJbmNpxDnvti7g3Xedo5VBUCLRteS6z1QsfjZLDwxURxiVHSiM4SabuNn",
  "key8": "5sudTMRVK2m7J4nYMNbyMW6C76wcG18ux4CJ3w2WW9Xrhz3AbNHfDxjgZeJtGnQFrFthig4ZVt4y2kxYL55zCDWr",
  "key9": "4imP733amHrPdNoADTBBCJmcfbby7hAWmpgriuSSMxVRpRNpX2VwSRGLLFr1Qi74rYimmB6tjjPaVwUgWsycgjAu",
  "key10": "Gff2JGbU1CDqPXveJUnyCEyvVb6QihAEzZhjLREWzQBoyxGLnB9bnAZMx7bMSteHiETHVFpVzssWNUh4HLuUd7T",
  "key11": "46PrLNNVqgNBgUcoaAWyTmrwBFSe8MASdKfWDvs1MUr5772fnMH3gojV52RETxGSK3zH8Ce7jw9HvBbauvnouu67",
  "key12": "5yM63dYmW75iaEuKgjTLhc2c8qGDzN47r3QuFFgX7DZeUweeWrstkAzcjs7pTvPKzmL6yfP89G9CGFz3wcdSBxX2",
  "key13": "67cdPosUM1SA3f5gPB6rpKuZ8ifZzeHLhRo8yJ7pmTmjc4jEqx92Jvg6VY2MU2iz3odueReSCbbYjpipLvyPKJ4z",
  "key14": "CJGQxmfmkxuB2GuRHEbAQ9fDjLhcYbYK12ezCJfxBdDjoD7qVRnEmmUqne8qGEubHB5QCETtEVxdzLBDBpLKEDA",
  "key15": "3iR75N5B7Dx2okcgHr3U3r3ggXSbtHaDtVqgL3jiuijDS9HnR6Guu46rG1pQD9ixtqRbj8Vke9XExduFAUvRxwyb",
  "key16": "2PFQfD8vu2L5H7LU1i7NgtWSZ5STB9UXvLc5mmgWDiXjsL8NJe2GHWtFh9RwRw2iZTtx1Adt7XdhAwxGTgngZ6Ab",
  "key17": "5PDV5rGy2nzHt5sv51JhV8wwUmnMzG4fmPnLn7bP5uGQm7hMvimbKngus37rxiFSMgeMzHdTVBijvds8LtrmvvTx",
  "key18": "z3GmoQyz83nAf9VNzNamkSvLsxQ61rfsHyYottVnyjCbRL6do3E3EH3j11sGLEGAfD8MbL5uH3uoVKvr5wgcYdB",
  "key19": "3R28DQMjFdStcaEkuqcb7KAYDuMwjofycygpbqrUWwqKbwi6ZK1po7aPJuQ4f144T75TXRJ3aw6Q8jS4tMRZD3Kf",
  "key20": "3rwNb6nnF8mHiJ7McNfNnVPrz4tb9to8ujtLX2vkoS9tx9ougkPrVHMFSnuAbJkM43bofuQcabxWXJSLLWMBcYDR",
  "key21": "2nF2w29xCs39nBxinTWquZq5AGcKK4wvV5Ruj8BEQhYCT889Dz5WA9d1hwrgn9AXnrAMHR9MBHWqZhcp6wVfApx5",
  "key22": "2GmtcfDYbPUMtk3Xfr6Fd7rMg81h9WY2YbALnCdXZ8C1n2x6mwY58NHt6XvzrkEF1tx9x3PXjPbvmPqRme3p9V7f",
  "key23": "29jFL6Cdmm8KaFh6JgCt1rQMEMgQMwCN28HSSqYH43y6Lumxh2ncc2Agj8FaaEjpss933oMk2xZkzZSvPMh9TecH",
  "key24": "57rWyWzVpw8omKbjvksWcf261gVVgLKtnZazNecgarqxMhs1yLTZ1UvuRGFocdmFCejb3KeTjeo8JRXjfjqa2uSK",
  "key25": "3W9ztRhc637nnvZgLfFquoYzqgQrbrJiDwSzqsEG6UyD1kLG9VFLR5G56GUTHU2NYgXUH2VoM9ahv19AT8p9FnSS",
  "key26": "ZRijUtpVrGfJokTiV77BgqmfxPr13SAba8ZC3YPyyWAwhMDAiNp8WSKhkWvFAnrnkXKw5rafucysYPtCMhF5sTQ",
  "key27": "59RxLceY9KEo5nqRqafzRdStSa5dphw9Lu2xufLF5jYK8ni4C4hkHeKTN8AVRuUqRYfYANci4HDwPfqyg1kW8iJJ",
  "key28": "4V5XgqzJVhJtYpGZNvjNQn8K1LMtmSw6L77PLuSKjEkYfmqRtsBJ8XmwepYVv1Pe1c2B8BS5kzvpo3SC6HY7SNE7",
  "key29": "38EGhvnvARjxNSBoZ2PmFBn7BxcD9Z5YB3myCWDcmFH5FYWHRo78fBdf13Ce3J9eMgk36g9nPwHxzJaCKnome4Gg",
  "key30": "41tRNCJaGUeFoKw8pNvTQJmko2GM4QxsqSNyqmrhUxnZmQNpWJ4kBWzQ24KXBBfHB6JCs1Lrcc4qMhnf69s8L1FE",
  "key31": "25aUkQra72sCKJp1gBZFKArq6W3RZEiAJJZckFQCah4oiPvKNUanttsLz9WJ5BBwZrT5nvqYjMUA1waQkGLh7yPH",
  "key32": "583grgmpQT6yKNAYoG8Rfa4hxRbK6fvog2FiuBrFrB95wep2CJGiXQM3sL9i9D7JGuFwT55aHEhFDieNxCuU8wXR",
  "key33": "uXRUPmFNmWJAkLfEdshcT89sJTWNSiWtfajQmPRLLxxWqfo2XtaLKtmGPXkjkRkhWD9FXj9zkMmYkSa8ZNmi4q4",
  "key34": "5Kp2Ae3mtCx7XTBVvbypQg4KEsQ7qFB9aPXH81B3ekLeCDnu3fFxdghevKfkGNee8ayvRrGRuFrEyaKdbUZvavGH",
  "key35": "gVFYvFREwj2wr7emkZMbNpgSxXn3EWuGkPBUkcaafxAsWE8gLX23F9n4X1wYcpcmqe9cUEYQJPwfB7iTA8TjrAb",
  "key36": "46YQiKdEvfCS6xgWwMWteoPE9p9YxNsxYkbq2HbeptYm3oRiDzDAHNM8qF4k1FtJL2iCJZxtE5vE7QMAgWijXNar",
  "key37": "vvgYYM5YAv6bVS9njD3fb4AjFgTy4uyV7y7nLMQ6kWGHFoWVoXtzizqLJQ7WedbgV5x2HvynVMgQX9SddNE1TXV",
  "key38": "2BewtRU2EDLyszwyfdN7Di2TMZL6PSNR4YkYuRLRBUtS4tyB7dX7ZWCnsqmc7Ur59KXkpxJR1XLWxGQg55oo6cGF",
  "key39": "2fAYZ44ZCVAZNPcvix38tUbieB6P4vvxP1qniQ8U1TRZghjUoCfCR9V3MYt17YvxNx865D18o6EZk3R3wjjZwDtC",
  "key40": "2tgia1ihfRCh2sY61oRMdGtmWqDCgnTZgm9xR5gfuvh7RBToHxG1eAJNUj2G2YHsNdZpRwYJRsqwB6KkebGHshC8",
  "key41": "4fDrXYnK3F4WZSM96zAx5nSrc9UoL2PUWrN2v5hLEx51PEo1qE8ix4TWguYoZJhuzRH5oZJfpG3enM5WkdFMcpD6",
  "key42": "3nZXFgseo6zGKqXxdXdRLvMZB46j7YDg2c1SYDCn6NAEDpCzvKmkzYtsNHY62vgL7GQcV1kxRY8TmRDHKgNmgDCr",
  "key43": "4yKf6N3WzDyqtE45EiwyR4uhceitru8avbkeetyR3EYjAHgjwjqMstYaJj83S5cgMGAi25c3DzbWRDUH5gbpQt9Y",
  "key44": "4bPWcKKWrWfzF76aCc13VeqGXvW8Q7YgsS3RyStkf9Dxhhi8CxdN1RvfNmmJPu9H8B2J65wijcaa591ZxdYuZxY8",
  "key45": "4Tfp6Xdrb8ACdACMQwhbACL9oDmYb9AHaUGufncVD9TUu6bKDXr931ZUHqBwFFz42jTYhPTUFnFuJN5CKyCxXrd7"
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
