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
    "3wmcU2wi9VW6cV3djTzFF9f9Z6gP7sLHNEQUA64yx8U39Z8smLM1ij31tqfuNBdfFZtqi8v64NYiiJ5AusiYy3EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GwDPDdGScuiw8xpJn3vBcvSviZcAeXWPxBWwdaqVohRJDPqtELvFypqNrFpV72eNTHbxdUg2fUemRkX7btGxPVU",
  "key1": "5MWKwvRsLuUUS3TLcZL31Y1kj7TobRpzYAAAyRkY18Bexw1p3m5DttZEujX4CYJxiQHS9GVXycdbi2cBA1KStb1h",
  "key2": "4DBakrLQTaQ9otqAoWCDQu4M1cVhj3Wa2VGmEPcKjuGb3wQkLtjtAEGb8ANM4hJJEkYpSygp5a6joUmCeyAYhYFf",
  "key3": "f5SUsb4NScCFhLnfWVwqPApphZkSy9LEgpthzK4Sh6biG1ycYA3e2Y25Aqdcv8oaFVpmTZ9pmcrKTLcF82GzMu8",
  "key4": "gfFkUoHEzvsnahq3sSZUwuWutcG8AeBmngHrFEvPkpeRZMJHEftYHcvBxqUWQyDXAz7r5fAqJnJZKT76x1tm7TZ",
  "key5": "2gZ1Mq38xasnXEc15hgyyw5ueAHon7MKfUV2mk1teF5Uv3WwzHC9Xxfyj4TW67AMfWwjqwmesG5dzmeXQuwwxhn9",
  "key6": "7XkVgmxbtCNso2PnchdDf8uVUqnNqpyGp7x6bteSTEzYrsT5yy3LGwyvubYPWLTHpYL8nfufnR2U8Atgkr2DNq4",
  "key7": "4NM5TyVqT7TWpCfNy7XvKWP2VJiWBXvgGaMWwRhN6UsYrVXSoYiFMPJkdCCY5ynYeL55kL3CuLg5RnoEboiDdvBm",
  "key8": "4rU3c1BcfJnJheJBx7cpj9Q1VTrzQNdKFPZxcC2U1hKpw4Vp4Z9iXnZKknkX8Vp27AkbmM5kL2haC5gA1XnAp66Y",
  "key9": "4885kqkYeXEioTPec7TV5kye31uwhPsUHn1v2qFnonZ8UdYALyJQxFy8XEFhjWXJ5RYRebcHrDY29rKMb58Zbad1",
  "key10": "4MVaqrVFkW4d2oA2J9oHaUZ8TtYVzXeFisDqy5cxtoDsDsoyMnWnBgJH8YNAHxVTegWCUdTtu3Dr19m5pyoQduVB",
  "key11": "5PxtpbP8VBu1Eyk9gPyd7ozuTw6UzuwNWcdhSXZhrdNBtwDekSHpqKmfouYgciG5Zj7LdSK7yBpNfZLAiUhkVYTr",
  "key12": "23xuTTT25TcAVGZCKmBpwYGziMopoqsExdrDbXBmKDbcBRSZf7cpBwePTyfUPYr75iF7txhL8QxH3qpayCw2xxEF",
  "key13": "4nUwLMxF5aJEkYzJrmUUpPZU1Rxb5kKW1XLQTYtc3Lw28hAvhTmFz7XfzhQu7GiK1jE6xUcAb3b7qruDrD4qM5Ad",
  "key14": "5yqWudgbux6yskgP6AX8u4DL9PhiMbv3iRrwuQDk3S8T7r1cBVMioe1gJSF8Lw7tq313rxAVuJPN94NZ5Ct3EPub",
  "key15": "3JhENUKCwXaUw2R7DxdgdY68wXJXxPyNNpThKizNqwzmhfJ4xEZM9EMNwwCTi4SWT67uM3gdwYXkn1MhygSViA1d",
  "key16": "47Bt7yPqrS8kNGCu52WCvsLFYMAKFZK3WASdNCSsVLHgXCCu6jKRSsBfMXXWg4X3UdKcxpgjKhm3hbo1w1T2n5T9",
  "key17": "48VPigfPCXDREnsjosi7Vb9H5UK3QM5td6dXQW7VdjxzTz6RwhmMdigrkxYTVjboP9chwGQeAFCMdjqUybkyonV6",
  "key18": "25kLSK5gvew7LJx3viWu36c7P6oRUc5FwRLmx7WjCaQjVDPHUVj5iQevQDN3EigL4XfpiMwGYtE1qxXWHiST5GGX",
  "key19": "2cQo1eNR7p3WpVxYDGrgnvZ1fG6PeSmNqzzZZFbHtBjhhwcLiZAFDosPaLzbgDzQEeDRT1XxhgwUCebALAYTr9vt",
  "key20": "5qmPAqT71bexmBN5tDv5XNnfwrE1hhwETBYoVijGtLt8CUSkToZ2NNZJzbcneNihbboevBWBsd9CXvd4S78aBRMm",
  "key21": "nWgnd6FpgCTUzDWNWWmbV79ijoCEQLwCSXLinaiTZuGxK2oCeMka9hX5cAn8XjkkyqGNaHYAKWt7ZjBS3tgjkBL",
  "key22": "oKBPPJT52zN7bkcbB8a8jEtZfZndnFb6WyGeyabRU7HkcU8w89Q82mqKP3Ch6CtJytRQ6BzKTctDaisZoqqdcnx",
  "key23": "4U1ck1DRq8snWKFDfJ5uPcir2yWwmJpjCEZsDuAmBhHycCaTpjw9zeJEe8m2NVwSkqLMnV1FHcRYXdma1si2b5SP",
  "key24": "5Mk7RRWeGt1Qpp7xrdMTN9sLERrADr9k2mCBG1yuU2x5jvQ2avwEhfLexTNKPwcxDNn6udJnaxUUR5fZwYYdvioH",
  "key25": "2RRzTJdUketuPf11WKVBTKXPRhb5paDQnPokWVKt3TVcGqWUcUjKwYrTBhVgA3R59gMrYn7KYW3fosao4pBTqHtL",
  "key26": "V7EQwDLvzmPsCNqTFJ6hJG1S7rLdCNEJEkqtgs6irLFonWCNHRQtpQAfaJKXiUjTwMBbQHzrSwoKBMREiDpZLVN",
  "key27": "wksP5g6JVXkqa39sqKPXK4cSKuc8WX5gtYzCUEc8kh3a3EsmhumQGxkbeVnqFxYEBshrDWoHtb6UsAKm6hD6QWU",
  "key28": "4khk4dSf8LQLJfD8HFDqiptSFcMaKxKsxbs4QcErsm8aBvP2PG4CbXTSAhMMP79QVeZyyPJMPtbPHwmFKyVBQucP"
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
