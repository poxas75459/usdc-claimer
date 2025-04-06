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
    "X9sY1nzWEUnbTSV4jejyUuCSKu17kZa1n4Kr1NJRA765LzW7rXQPpBuv4ZQKd3PMHVYkmPMxwDELh3njPRT4Gvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56452D7YDLP8MS5fug2uz5ynJTMiaJhbbaRxaHrzf1upH61wcBLJzi4Gx1h1dQmqkv59nvBGHGSD8ubGaLPcDCeM",
  "key1": "5amnRkWzEdJvHoWKE1wsKH57RH6kNvZmB93WVKSpANQoZYjAbEz3hWzW2RMiLcu4rh2PGVUXnyB4zTCSNFtnc4si",
  "key2": "3pD9jH7bxetCz2i9uWfCyGCG4dmSjyKyK6EsJJ1xjFqBLnBVoew4suZMJs3Ma1cZUjj5RFTuREPDUvXunw3rWnzN",
  "key3": "KHYjJ1XrAtr58h5pbXgmL2aVjRWGhgg56FJ9wjk6NC2VpWi5Uqwe8D5o4DB3te11159oHgP8fmCD2SaTJpzKmAb",
  "key4": "5rkrHxtjMQ6iaLCg5bt9isdtmreo2tUpGWc6CJqERQz3b18r6KfMz1RDX7WWBr5dF7Lvu8ZH44KMWyrxpEP5SiF2",
  "key5": "2NhpUPdf5Y8eTgA2wcMfSdUiaEC97AaZvw95Pr4tSmgTE1N5oYz6WMBc9nrrmtEftH38mbEkxSTzjvgRR5aDA48T",
  "key6": "4NTqAQdmmn6T6ZzJVbMxYU5rhN64inffFj1XRwJybHCCsPoKSjStf2d84mFeVd2UjkGnovia782nLuAe4qtZs7kd",
  "key7": "4i8frqvrsaFnrAEx5KwamQhzyfKxqSkyxPw96ifPgkzT1hpDfNaDUwdjDNDs4kCtN4Yma9u7yGDbqUYAK1wJryK8",
  "key8": "3UEaxJESA3TsiX5UHoE1q4QiDKqpJt78XXkWBuUXCyHMMrjaJ2fCAHc8eNsvgLytqGVezRhvgbMWxghscqtUK7Qy",
  "key9": "4h4yyyMh2fAxJ1A2ooU1CNuw5EBjnpT4Wjv9uJo1vdcBxi3vLBfwefxjZ4VfqD6dh9Zs1FF7QeV94qor4ZztqGp5",
  "key10": "66mCn5ap1JZ9mZHSzYaSyP677KLu6xFsUphUTuFKuGDAHj3BVXAp5PT6xftv9y2YMKhjCkC9CFj4dPzTz77ut9PT",
  "key11": "49ZUdPR1ryMKyVQWh4vBLMbRXrUrRtSa2h1rfjQcAvu8p8BE6o2bNo5Uk2a56tRuV7v2wivH7WVYzZV78a9aXyqp",
  "key12": "2yxjSJMCfSBHGbgPZSHKt73i9tNLUQH324ZG56Kge7fArsTPzdgRTV5b2Sger4HqPvcsCkGtBB5s7D7jSggrM2zb",
  "key13": "48nkzAyJXaRyzHU8U6wL8rL9xtPp2ZrBszyGV2Vo5LB8vCCnKcCrsMvvNK1coPC1ND6Fx5uW1WsdXXzUUn55DqC9",
  "key14": "45Gps2Tiw6WDP49qEoQP6i1Z8mDL5Z5xio12nBcq3ThoHieyX9MiULkPrqGLhgtfSvM6SXNtF9kB13i2WK1Tmy6z",
  "key15": "5ehkCTT1shXHJrQTrA65wkoLuvV1sxRm1JYkXa16AF1sVbSFwZ4yYcgXz8EEJtd8av8oYSWLhxjTMrWVXfxLfscV",
  "key16": "56aWR2Xg2UnNSTzse1xzoUAeA9KhAwgSnVEJifWD5tMFNJsZNvYcirz8Jg52DK32NLmc6zghyUeLxjkBHU9WQbMX",
  "key17": "oBkysXw6CGxYzTV3v2hK3mcuyim5B6NCqXGiyYrnJfF7G9SeGi4nfU26r8xF2q9LC5MjfFaWEMgBp31vdK2GjHo",
  "key18": "64qeAj3Yv1V7ZL5WUgz858M7W3MMtQWhRMC1guCC27NArYmfGXb3VNvp6ZMLXZ74m79avA3ftuf8EfKvZTYtY2Je",
  "key19": "y52YFEA7Mcvkn4qpn9DVmN71DgA2JxCHumao87c1voR6HevJA6nauu723cNxWdQRhP5zkfDa21HP9LMG1mBrsny",
  "key20": "3JhnTLrphe8odEZ4DFmrCkSjdXFSPhdxV4ca7TSzhcmekYwAGnzsziyyV75m1F1b22UAcRTrUooBPBLNiqYf1Xuo",
  "key21": "mAMXMKKziQViJrkbNbwdUtifrb34y3v4Fbh3f7H8epETTLBatoK61NxoYo7XY5VbEA8aZCKKq4NxdAr3g27eBFi",
  "key22": "58Mx1pXE1oTNEBLeF4PSgtGbBTkqKkHM6zRGeAea9KUrkMdo7cZZgwTStSgMFeMfTnLwRHJbsWdp1p99i748jync",
  "key23": "4wxeMckhQAzEopRoPRjfENmHE3n8Z39ZxsWWWQdFZfwdh9yHKbJJN8VtvpWSHqzW599ARQ3ha1U5WQ5GF3aXbGPV",
  "key24": "4exnDJJSenwEEK1eCTrEFkkmxsrUPtEbSxke8WvTsREaSJdiMW6rrNqmBKSepZyBXAmH2dQ3SXSJUet87Gxs6BSA",
  "key25": "DkqWiXcjyhE3bHC28XnTQ6EHppg1Jes4TnfF4NoaqYN2PqtMnnzMbT7fGqppiZyAMbDFCPatu5DL8nkYr9k4NPD",
  "key26": "3fmHQgFB6CHgjRag2c27tGHNyxvzpkEUY8PwUkxTgSnsn79DQticnRVEasbfHg4qTGfbztzpYs17WLWqsq4ZeDoL",
  "key27": "3AMwuBKvssWq2GQxtavKEemmymAHTFukjtv69EXzm9aXuE24DPY2L45tiPaSLxZxbJnZqfwmsMpH8rQff2L7swQt",
  "key28": "3dwNt5QpoF1SJbTLD3YwWPqQUzXwCx26XdfHBkN3Yw9xq9Apw5cYictVQfkeYrmXjUifaSbLX1rdjSnUfX8ntWHT",
  "key29": "4VovtwsVXTWvuZcqS2hhQGSz3XVPKtvLXp4arHGqiHVGMo31bpusozhx9NXmwHX153wJow5u1GdWKeSZPWCu4DkM",
  "key30": "513qWjd9FrrbKVxkVW5SBgbLhHoEJ6AJpiLcyRocnLobYz5t1qVyKPGmgjEiRK2prTEMxiSAGucvfL9SR3T56WAx",
  "key31": "3Y7mGWP82Lce5fPfs53ZnitdwHwejPs6g2p977m23RdiX3iv6cp7YQnYyZ5VeAd4QtCqDmXUv2iraeZfhtSSWr2v"
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
