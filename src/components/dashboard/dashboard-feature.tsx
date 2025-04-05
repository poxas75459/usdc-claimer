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
    "4ugQq52f7Y2orVJJ8EpCmMkZzSWuQUJhthGCuTcXWQCxGqiy14hiFLLT2WUcx6L3voD53opVckB7fSHPsfu2RLXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ausfsj6WBCGEY7aEiuGcb113cRMfh1RmC3w4P7UNNLkdt1y8gZ66PgLjsmCReFZBnJjR5A2autJguxHeR24VPjC",
  "key1": "23V2kuNX16YPwRrgsPRk1vyczaVkfu9U8KnQqeeDFt7QnmNtndh9sKW9wDy9HFPgeb49feHCgvaBUW2LEgk7vbyJ",
  "key2": "5aBdmbZeErcuppthS2GaqLf3Mr2t2eq8AqYZ5hn3hpZSfnHy33DSokswkc8xa1DCK4zM1rfj8GpvFXFDXj4KJCwh",
  "key3": "2Dzp4g6dNBHrFJCA9mME7haGJMNFq6Zb2v8rgy5YgzitHG5yfNxrVisKm5CvF4R3YRJMphyyRAaSNSmJFbnGcqiy",
  "key4": "5tJR2oX45rYwo8cf8VWmCKSiUhnUuZMGN2zPgUHPaKNnRHekvfce98yXwAjTtpadJTN8ZgAM47g3nJHanghF2Et4",
  "key5": "3Nr7ddZ88SWQw83pDMZPoAhjNJSD53i61Tsz5ig3s8n8s8RmLL2WiwP2GT7jKnwKozYq8DAgL3m1djhigHZTMBgY",
  "key6": "xqZxa2jxM4EfhskokF1nCF7PnJyQ8MYhmPG6eN2TG1ufkJ1u92hhrfk6MD7tWn6wiqwynSg6op9ZHCqsMtxQvrL",
  "key7": "2KwJrxBHrg2yWJEAzE6tfPECWvH4yv5DE8KtWTgqJzHkxuPagSdD9ANuDHxpo6sxk357M8EMZ88P12J95HqNi9Mt",
  "key8": "5Shtnpar4kBYVmcFXFmtbYLKxSmw5kXSBTHFNQHLJNE6F7t5SsfHuo7t7kgmkfBTofs1BEQ3L71bQzxJs1jwVcsG",
  "key9": "5RQybKtMoh4Px3QhwYJvywcW7dHvkSpCNBr6ettErRtfJ6omEtnQxRrpvpzPC28fTs642iukGjbfUA2ve3Zu2hCi",
  "key10": "52TmKDcNGdURBxEBgXT9bYWMf1mJh55tZrLWZCck141NhFaBcP3VjMgFGSMJ4g2GXYjVZXBgZ28BxUEhMYAATHfW",
  "key11": "2NgcHogYA9etfGxsp5NC6SYabbwG95DGAVfpobqfNfnZ8U16daNwiPQm3hX8iaf7jgTcN2jHAEEy9jmQLfKRF9hX",
  "key12": "mbz9TCd7d9ZX13yi7PsMQCLyHUtnbWzV2Dkepz6TLVP48b4i1in4hVU2PC7SZacyhCGRucQuVhLerw5hcGE1iRx",
  "key13": "2Mg76Qj9GiTG8N8S8KMFxnc1XBKoCwLYYnrSS9KoecQdp2gRiyz3GcvXjoVMrYoPJMQSTm142B7VUwQBq95BQDqJ",
  "key14": "4nhNHjE85fmtSUxiQ5RS25eCyze1Ht9KFeJbVNEE5hXcUULzSqqZsczDrDNLheAvYipcgsMVV2GYpckJredfF8zQ",
  "key15": "2kcw2P1BkfQJ7jB1BnAZASrH3n2ucMx3hTCY1kcqQYLSk92Bt7ehjWnmrRP4CN1YMGCY2fM12wKjcKioy8UA1Nf6",
  "key16": "5f6UsVmWpBvFEMphyUoCrw9osMsFmEr1msrq81y4wbXKNt2QzZ4Zvu2uKboZuyFLSDADCEyuPKZupU58aFbifzSx",
  "key17": "33c6R6PFZ22V9Ynm5X4E269CUVjQKAtyCYugyge8vyKHvwb3EVXa1tEXMKjXyicRsN9vKU9HdXvcPspfzbSgcF5c",
  "key18": "3NeNXNzHwqSWLURAaaN7iEzXmCEzmEooHPpqWHmiMtptvUhfrA21RvniTsQQUKWE8B3cf5yC2TQA8CVASD4oWvig",
  "key19": "2NtnH8SjSmJNMxFhZ5LNykcJg29KHFLcmntEJoA1fvBncgbTZQk4Pw65G5L4A2noSrZ4GchGJke9NFnfPKjfu7wU",
  "key20": "39QShxEm4CymvdPWhtaYP5PpERRB6UwCf3KwAfqnFoPLNY1BnDc3ZDxrJUKH6njzefd1eh64EtWXozeBa5NEQzra",
  "key21": "pMUuno8NRWGyyZKr1gRFqbhMiRDwXbw6jSUzvEq7ssT2ZssL6CtWu7uSxTVoVwbv4BDzTpeYBmzFmBgSANHjbqn",
  "key22": "5X6iR3RJs2u6ecoS2S324A9D9dJ7Qj7RcZ1hfQMpH79R2vCrEMwGF2U8ytMZ9Gye2wtGdyez5aAfzUERXLgNcE2v",
  "key23": "2qCKzcEy3jHBvVr2pYTQx7z6dhcA9QnK9YPXvZkYu5MFaMitPRT9DJJhfH4hbvaWt7tcDjcBSc4U6d1ueSaRRqZ5",
  "key24": "4B2VDVPBSw6hRBRyPLUhBqNtKC9shPXpCXfMLwtMVRNqRoEmUMvTeRZMDUDP6X1yd1GELiohMbBC1mwZ5f8WYv7h",
  "key25": "3Bmx7jd5LioiJHkT1L9nH8oxgHPXggMxkJUi4oHw41xegmheyrQqijUdVvFsaxiqg9aBmpg4SAmZKx7ewc77t2o5",
  "key26": "3VY5g3udvx7U55BTFyMaHy7M8FQ5KRkvUr3XaDqY42rnHh8fK5Y1H165iyXvbt9U4xYFL3josWAfSXqjKpFkPiK1",
  "key27": "276f8o84oUphkvbcbYajSTv9jjCmzwnFbximrKYBTxTwomw28Bo8ErpRajixFpYBUY5ggjr6T2e4BWR2dTZSFM87",
  "key28": "3VDQzZuv2aAnRz3R1ecZ95ZN6KG9zesMt9dRFaABTBsDEF3kfSHbZApqHruCj6s3jeJeKvqjrnyGGe51VSatMMHE",
  "key29": "4JPtmfWrQWmTuhsJaNJQTrNrXeRxCFBnSnK57wNRuSwfcmcHy1MEmEf51nietJWyALH1PAh9q65NQxzAuXemrNCr",
  "key30": "4c1kxXyG7WJcxHeHwaVzbHWnT3JPaf9xp1KTY92FfMLnmqRu81QApRVxySM38ZCHdj6xYkpTjGD3F3Tmyb16B2sr",
  "key31": "3rSr5JXi76hWTupZjjpEfFavo4D6YNjheWCKdh3xfp4JjPZsE2rtqPLfHtPdzKhQdK9yD4K2myiHP6aRs8GHDHL5",
  "key32": "kfpa7Nky5iboHmNACRcxkXy8BvzfHbxw7vhZatFHQwUP1tq7qQzYB4AH2BR7G1HE8FAVnm8hWD6MjGfCDCg97Vg",
  "key33": "2v9f1cvFms5je3tN4uEVP6n5m8Xi9VF7XWpsfKAajRFdAQKWv8dLhiEKH2GppL7Dv6DUgrkfcvKLrBsFeRfZhDvt",
  "key34": "5xj42MJhWdVYbtuL9qn9Mq5WwNnqyb5Mt7v9ioSqFHYvMnJ28kqQoJ2W5k7ok4HY9VtezVxSaC74JBpn4GZj3qpY",
  "key35": "42VUUSF6eWJGMGSmHyqguMQu744zsjRgqVxjHmb7otvbrkXJN51wV59j8WqGgyGZwBrfjo5HiZkVmu9sjRsXFhgj",
  "key36": "4aWC3EoFDwmdCncuYNFPiMKaC3VzAKA53cBpMf5mX1PDvKw4Nko9SiwgqMTUa3GsYCq5NBiikZprqFiMc8UrwJpJ",
  "key37": "2tzy6jqknN1tFhL1QbYo8PRhKafWCfMaFuWah8H6QHctGu1Qbc4mqZg8wMQZF7abgPrws94Nd3oUoBkJGtmMqahH",
  "key38": "tDKmqnN9tWFi6nYv8RW8N8dds6Byur8rTAxStY3FCTAFrnWGuqSbarPqHv32e1VWziZNo9EYkhU5bfrfs25zVte"
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
