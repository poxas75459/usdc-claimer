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
    "4z9eaeETzygh9LUauGrUPiZnujVMGaZ8TU49fVw1eKTCGREhWHBiCx1pb8aFRLB9xGJSgonzy86yJy7KPiRbD9k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFE8etpTJASjRNADxFVzp4YoBhJCMTAoMCSD1JcJSSmLpTLFpkGYEBUB2okS79es2x39GSmLs4xjozoRQHqvT5q",
  "key1": "2dZtLzkzPf4RHvmQbsctJQXChzySAGBGsdZ4HRu8uwX9BJy9pxfvj99wSf8nwmcCGUKv55J3roRtEz9HtjU4UE5G",
  "key2": "3TXV7QEoqnhH9LoTihJSsxCN8H3xGwVkJpFv4HuDysEA1PWzv7LauH6TR7z6Rq7zWHSLmCNjueef46WutaPBaTW6",
  "key3": "3ouLTs4uPrp2SEdiycz7YkFtiqgoZTMuyJaVb5SfGLmEs91BQjc7G8LrSsGmEqFbwusSpdSPsqLPa4dGkE4TmefB",
  "key4": "QpmjSgXfdQ8kp9PvmT7jG5QrssoypeZZnWNjxgSW5jKfsjzKJ9siACnimRk825aR3h22mgjLNz66KSu7AVC1oqx",
  "key5": "HeU17tbeWPRL1W9ePgHTG2KDukFsAuZBS2vehGKVr1JcEhQ8xXcYL4e8b6YCKfTDKHxVp7ZsEePmCC9AWCgvMgR",
  "key6": "4JqXbdVpCryoM7a88ouT1zddFRWcoDmGHbn5B5fCZzofjmLWqeWo8qNeKNHSbyFWzSdFZZgc76i1x3pgAtBENw3X",
  "key7": "34Nf4eGYKXCpKNBN34vPRKUEtmqHwuRmzzSfNuG2dfmpNeEqJSWs1x5mHiaiTuBZiABHA31bWgin77Gh1h96gWiG",
  "key8": "3YKNoQy1JKSnGqoDuzwmqKeg8v1C65csoh3MGDeoPk9nxPcvadoLFRYKJqkQDT4VbavQFhQtygRK1izDxNpB2j5j",
  "key9": "3sXDYuAhW2AB5bqgNVA1bwD5qcUGHFtKxSnEgFhEBccAsESGiebRFUauLUQsWBwbC49Qufj9ysy11SAuatuLR21P",
  "key10": "2hDHAT71g2V9zvDP6h19BKmJfAZRNQDcmyJmHRGC6u5AatPKpDQ6XayyzQEuZLNmrSySgNLv8Xb9GzDTMEvuthtm",
  "key11": "2cWvNLRzLY5PTtDmz55VA4XBL468c8NbyvTFrFx4vUWM5zvD3L1mBBcsKxcfMfxZGXiM7SSAwTuQvbiHfiAcRFym",
  "key12": "21mouFDS2epS9YEXAvW8t42CHeU8xkxirzRPHBv2BSwNEgzoVopFHb6CtkLDqtqnFByWsas8mjar3297TGHWnCFj",
  "key13": "4T6EZrwnMaDzdUGWuZV8KHv5htydCkt5QEJ6y9g3EvNboeDpyRub8Ydn3GwYGCKSv8wE64bfAvonDDT16x7FFkbj",
  "key14": "4G8RTywZUJ9pxfVFfrubTkdZGvKukVqi6ikLyQLp32YhQJMVtwvBYgygKcKYnRqyQyQy7mGikvowbHNRHFhzp98o",
  "key15": "3B6kcYWUw3M4iFXRhgjJb2tmgroyeRgCDMgg3xdRw1vwK66PHvdqVe7uerjRwmRu2szp7BhRko2Sf7V3nZVwEuBB",
  "key16": "2L4a56TyCGRHfDnL1GoY78vCEfDjffHNVr9YovyTbYUT5ri6ec6hDe9VtnnGefWqhBC5KSWh6Jr4t7Bdo2Qfj2uj",
  "key17": "3cHDJbRcDgqYTHchM43kR9M2YkYA7DwvBjW8u6bnQYPXy87LRZh7QTx8adeZkoNNrzr6jvb1CQ7zJzpe32vJrtXJ",
  "key18": "2NvvuXQ9HmAkYTTFAYBAVuogSqzYLDTgXNkTcHSrUo9yWesPzdkvwTQUqqkTb5vqU3DvfWerhzhSXir49BiBtoYP",
  "key19": "581onLzkPdjCdKpG4KisxR9jHYr9pPfjzNARYCRrfezkJavC9Bn4wneTh8uNHkztvMPZ6ao7ZGnyxqDF7VfYhAs3",
  "key20": "54G8zvGjmo9MQRTmvCAnqHeb2XceiGP65zn4BikeNBJBrNQJg46gFuUK32CvLoxPPsRbhQbXve9u7Ye2c2PCsrvq",
  "key21": "3vvyGekxDduU4vZ2U8bq9STN1CeiE9i4C1softwkZcjKRJHK4kVrrPb6MTVCooHSLkmUSNscXgKaNA9nAZiCaYp9",
  "key22": "47XPydBXH9AR1gyofhtgYbyidY4qqWKCtjVFsNDobAYJQGiNMkSZ6jvGiBAJumBNe5dsJ2pe9FX5Kf7CzXGiAGDw",
  "key23": "5gfvnSGe3wWvsqAZmoVTzPni48ogDPDsK5S3WURkpPVRAw76uhpzQBKrnTAtNiP5R3eHMmNDoKxnSwXNnEsUf6dX",
  "key24": "5c5owS1wAAz4ALknBPmKuZCkYCZrTkqanGUpJAgeHLaGUpj4pHNB3427j5iBY5okNZsz4wuGrWcT3z3izE6kpDNQ",
  "key25": "623otZWoHQkkia147p3vgfsUBrMENYWhreFnXtnjT68ergiHqWC92fQa8kWDgRjA2uF2p7kP7YDDeJoT8SWEfAoX",
  "key26": "kN9qcDK4Fbrpx73mwqwzNVkdzswcEy1EvFeNX89w38UbkUDkBscEAaJjgh3P2Ngt7x7qcme4epdrFX9oXaocKe6",
  "key27": "BT5dU7y1nv7QBqBtWQZaK8PEmmKAx1cQYC7FJwCgk3HCk8axkF1Mx9MJzWP5CJyKcbCehtaPrM54QuMYF367EyT"
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
