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
    "5QbY1khqUXrfi1h43rSVaFwbSznvfdnAFzTwNyh9J87PmeKrGfE8uja1tLMvRLiS9sXGaidLEgxASAKpeXooWwu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wHGyDZmj6hFxTi73e7iUC9EJfDTKB3RAhpcPFf18Fixq6TstY1gYTaAis3PRscYep2n91GuRyerUCj4DZrgDbd",
  "key1": "5gzspENsbpWxTzdjzT3GREHsQd6D2vP3J2CL7VVTkq8LbtfriFzdHnAs8ZBGwK2ixF7sBxKPu5TSGfyomYcd5drD",
  "key2": "3mEh8x69dwvMdkqArnXu7EoRGFCunMZBPqwTCo9L6JYLGa9o6F62XD9PjHRm6Akk5kSGybiwhTBjBcHwYhNwwhQv",
  "key3": "c5iNhcWGPu8Gkei6XaTypERjzTWdBKuedQkBmhqcSGfKQLQniYCLn9iuAfNqhUqs8XwHS28x9S9j8v7E1LT8Q4m",
  "key4": "5eRwqCfJWM7YFuKEPi6mFbySqGxv8Znfhsie7eMdT8TCcX1Xu3iXg3jyuK7yji8J8t2Qrb6j7rwCYrhxoeVA7ctL",
  "key5": "4ZhxbGhCCeGS4NGgMTpAcwKMiRCw6mn2gvaN2tGgcnYMYTUGHStabFyHKssvdruiSvV3Criem9pqWQnG9GQmrCbM",
  "key6": "t6WzxWrduiv4tLxanAb3my6JxKkVFLvKYad5GyZYjw8CDYWJXzWy7u1Rj7fTU7udwjYLoDQLZQUejCYLDKSr8GA",
  "key7": "4JmhCfyt9U2zFu3mmHuqu7GwujighNACZ5nK6J5Nm5Hvq3LGB6Xvey4UJvhijyhKKJGB1ZojRHR8RCZnR54jG8mp",
  "key8": "4accutj6qrFcQU2gMmEL4VN27ngVwh5voP9pisLtzVwWL2sDPNK6FBVLFc1Ma4UKPjmDucuiw1yX2RDC7p4t43vv",
  "key9": "4Ad5xFMqEkAoKPrwsEhcRVcdcEeMWaeLVWSjWqBfZ41mTF7mqKvYanqdrVMKSQKKSjbZpigvwKeMpBnhMaoZvSQr",
  "key10": "57AHR3PsnHyBjV7cSMGgpvTFXcLtbY9xpqR3T2vh4FyLxUd7iX5324Hr7k2Df9DEmxRMHBYiJHvt7gQLNgbK7UQa",
  "key11": "4JuPrW743K8B2Wwpkb52ep5qAnoLvUEsxfNzLNnuheMgUeaBovpQGKjbB277mowfQCsj47jPprjDfBbHz1hZvtvK",
  "key12": "4RRKMoyTeUNUhYbgx33RFW1KSpLZnWMKQsPqNKyCTypHh2i2oJ9W69GYhjmQGvqLRBcG17ieMYysp4yAF3qT3omW",
  "key13": "QcQsNvPLmdfDgsHb3atrBVZcXfB16r7xTLSLcbuB2Wz6G8Jp82U2b8LnaTY8ZreraejExc12hssja3CUdK5iisB",
  "key14": "5zfLooV3yQMk4RAg1DViVqSjgTNiED2P7FvsMbcFfSF5ijdcGLdWMQzeic8ik2ebAtecksHWZjtCTXwE9r7wByWz",
  "key15": "5mArkNNyiobi7AvmeggTBw5RfA2oY5yqRDH5DDQzrFjyei8eX3JNKcKCor1venpxpMdiu96Et2dXXSb3cHuKbfbE",
  "key16": "3yR7BXQNWjMzRd6nxg86HzL7ueQRnY8mwEZi22D2TXofrQZWugFRZcRqW3NPRPM1qZK7Tn8BPDSmkWrmLJWCXD9r",
  "key17": "4CAF75FFpQJx9aFmeknLtn736f92y7vHkwHoLiMBgWQCLEs9MYZRzBcSwZ8x3YV4SE7V6U9AipHj6gqFyU2edaF5",
  "key18": "kuRbs57usnxp9f7dF9n3HFFoZUQzbwZJWWvXgeSTQkSa4hHispvPWVaPyNsTkmHBv8e81pY1oZknRLYGW8QAi4C",
  "key19": "4JGbPJRFrAzjnQJP1Cb9HhWX4AVXDbW8ncSvXp8M4Xqz3NXz1xj2Doxx5mPsp1Et6zwrJGNu52CCmDoQQNf73Q1m",
  "key20": "3QBRkrsmEks5vSXTbGLmwiMdB1nTNDsbJapNfaNWSNLWVCMB2zEA1Ss8U4GCPP3BS4zJeSAfGf2dcn2kFRagL433",
  "key21": "36FyH1Jb7cgDJL8VME4MvjiZZgM91BaGbnWQLng3WbvggsEYbXhCRyjMt3CraNCV7xRytx2Dy1oCDL6QfcryB6gb",
  "key22": "3njvV4r2jXsmvkmrtGtQkyMzuCbZnEMtZhVM8SZigCTTGegdYVLvrikzLzUWqNv5q6hkgXdyaufq82mdCgv6wHqS",
  "key23": "3menbgYGBdtjJwGv1pJVVC9BnDY41pMBNvfYQhVto3URTCaCn5Zi6xYGWpvG2R6cJSsGY5oX5wM3awrtV4Ggz3L2",
  "key24": "3ga4SgG3a1ek1FbrAwvc2b9hUuoSNs1fkMCeJu3uooui9v1aahwXwG6TGcN3yfXrYqiLNTtYWJ3bEQV71aFNUUef",
  "key25": "2MEUCtwgMMFoXGnJBKTm3NKWAgeXDTVQqB5WxPpKhLcTQ5QTkGBbw8vqx1FnTqHKVPtyyACLjRTPKBjCzMhNx8eV",
  "key26": "34mNuXtGgdKPG2tzZDdg4VpQL2qtmdztGGgZurNZdQBkfxt69ubQETPduYkPNWiwTDvuVSBc3uZ5ubZzdGxSvtGN",
  "key27": "4iTQob8KWnQPkkRQBAatP9oP467qiJGRbehWQsAeHvmxGaGgS7FReVQLKaYVcfyBQ6E2Z48vALSq2SgoXxLaGzVy",
  "key28": "36Un9owkQ4SCMoHBmd6pwhjqpRjq7Broc1qgeUL8ravoXqbKtkgyXU9XnP1YawSi7Lc5b8ap7xfXDVLyEQf3Hpq2",
  "key29": "odEmoqJAnbMCJBVTyc67q9B4a1CpV8dHVisvfn7Hm1StoTtpGj9Nh3Z4T95MQkZTvrC3mBQc7Ct2BN4rgMFuRJC",
  "key30": "VPuXEwgLwh9Exgx9dxjKQ2JHzXqaBMV2kCYoviu1dHKmuAGpzrypZiM9ofaoT64Nj2mycqEhxTYccqDBRyonLpR"
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
