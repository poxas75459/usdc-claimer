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
    "4g1BXywHYe4dHYMZcg7ZNgyBUyWvnKEUWRJrpSRfiVDhbn4DReLjNgns5jTLCV5yZ7sh5cUsYgm9sVoqzA5H834H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3FygyUSbJCgDd7PrXqp6BuCogPdp43nQmSj7ZsXG8hC1uAmFfnCccumCJhfjcAtiebzfPfm9FU7rqrc5ghWZ6K",
  "key1": "2RchtpmTUdny9DocvjPq1h6uv4RUuvcT7Kj1XJH3AMuyS4C9vsjtWYUTk5CMUbbAQDq9MK6ACNWsakKo1jtfZ8Fi",
  "key2": "5drdGriE5vE6ChGfu9EAnGttRngMRjsc59v219265pdqWXutM8vM7GwbpcDnimjxWMM5Y5WErdKiEJ48dwHLiVFV",
  "key3": "YeUcNLwkGGWkAZMwSNDkHAtykMNiocq9UtDu5sDhedeuLp56FcupHX2vp5jqwSpoDfvMpBYY5tHcQxLpkG6cPe7",
  "key4": "55F23Ve9QfMRj934W3WgikKtYhZuTRDew25vrtPeqKhiReUgHM3nibMMd2rkCGmmYex9NXsA3a6t773trSsrGf3F",
  "key5": "vYk9kyitqxqKExaJPN1LMaNqoaKErYExeigiKHqdJzcVfLjdx7hY8pDs2KyeAnu22aFNuf21bLdLcHdXGPbkaNL",
  "key6": "2e8m6j8QpjuC7hu9bQ9qyf2WiaEL55aqsYicTumNbHbAUUXACfUZh5pNWBjnQXzqkpuj1akL94zWtVqoGGPbC1kV",
  "key7": "4hTC67vbBBjeqpLAzaf2PLQfjhsmiwQqz5WUn8VysX3wMLdK1W6ws9pfFVZzbyB469ZwweVyYcYAXoVAKHHKJejF",
  "key8": "4CdJDUNZZomvvDgneAjVnqVB6wqTPFY9XUCemF3R79EsAhrQnxHZU5Spk4zSYzYHDbdu5DdJy68sCvsD7toutsaK",
  "key9": "2DTkdevoZ6ppSP2piv3MrnVfK8v76CkmdYipLtdLcgey81DBybNzkBUV5ro6wTzWLE9K49h4DybSHFzZWt7qisxm",
  "key10": "4WEb1AmVNVFPiteBkMGiw5kPaZ9Baga8a21aXiooyXzQRXzT9YfzM2rxB7YZApVtsUkVDK9JWf4HN7y1QU7eMWtw",
  "key11": "3KysoJCjsQuSMAz2HyMva6zrpUACdrp2jB3u46362hHLtZr6tDUmkX8HKBdL8sjhgwYuAzeRvyC4o58aFFmrVsy4",
  "key12": "SR781kPEqChTUtn2UBRtPiWgnZsWvgzUNUxAHX5f8Pii6ybsWHMuzx5qy5656jeX1Qjcm2fjdo1VBrfLaqW5m4R",
  "key13": "2x3HfCHGyR35LBLVWZbEMmFfaDkiGPpYGtshZGVE7AY51ddT2z6E3eNxSBA1L9sqsz4L7spSrXLXf447typJhhbK",
  "key14": "3W1bEg7Arr1YTtjNqRqsvzzbqqfPGqXGzijBXpci5Zh1T5Tb1pRpvW4WX1zLefACQzws437355dy8v3yYBw8Hd9d",
  "key15": "67DtWG3fnrvyhr76zKazN9oVjV1KouerWAUJ9jkZ6JJ3evpLqwAkZe2UhxU168tTUhitRpoCH6tAEp9QgxgagTBd",
  "key16": "3ajC4ZkEdFsHQgsoaGrfnZi97x3T19oTjdK8LPymax8SpW7iNXiSBoQ65LgDMHH1QTPmVps6wK5Dr2vJY3aj6z3F",
  "key17": "67r52fan1p8aKfkgDodQLRFi122SHFSbXUTr1QCthVhWdERyTneUVtidEn4dzkFD7uYUAyxyHNVk5XiDr3JHi3BA",
  "key18": "2SFgPp9RFsHhv4LMqiaju2E16FT3cWaUUPa7EFyTyaCu6RaRSApUa53KypiWgDudDUEgzWBrX85vm3DT3XKB4MpS",
  "key19": "43Lzx9jDzxQi8jL8j7EpsnBj7Fxwnj2oNnqdBLzXJL6wiEwDY9YqX5m5r9N6j11fgKhnWNgouvU2WdBZa4FurWWe",
  "key20": "KYmXn2HoV9SHmiaWZWYBK8JxDgLVS4QPJ1ZQWQQRfKgMHnQoBTdQgx6KwaQicaW94p8WKqPT99eENqTuq4dvCie",
  "key21": "VEpDKXjPBJz781kDnmXWx3HSBQgynVUrgC1HK1g7JiAYjgFLrFamuUKvmBDtHCpJ8vTjBZLRnCFbPXFQYBrwqMF",
  "key22": "2oBZKjpe9tvijGGGn3prUCK6fNRChETujb9HKciBctbv3mE9AiNcDdkd11HfvwjdJM2JCmPBPq6y8uS36zfK61Re",
  "key23": "5m9bkhXVF5HbAvwSWXcM27bKXDRer8WCdYYLEXhUnAEVJEECiMAUcx6JCdVEec51wB85T2GyHZ88HXJ1eCxiu9tm",
  "key24": "4sYMLzHKnk3xbf1dUftinJKhSTCWsod4tkNgZTWFbfhCdLkPTaCzWymYDCmowzamiDZsJBX8VydwbLFGRww8dj8g"
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
