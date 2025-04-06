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
    "4nZQTK3riF2CLUAqKddGVjfEs9E6JPHZmzkSRvpLCdYfMyqWsuNhG9uvzDv7XjQKpcxhQA3g3zjugNEghUQCfvkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkQwiwaXAneVp36AmVgzxdo1B6cs5nbBigidNM4zC3ZdPdeFe1S6QQrpQc4XUyYeMzi8JocMeoBpCY4UqvJWuWA",
  "key1": "627ekEaApmi1oPtgHKxM4e5uHCZuRYMw7VP9kcMX3dpfcwTZ2sxmDVq7842WTBk16jcYU8hdx1ABPkV7hWvLRzL",
  "key2": "mwedwaECpUvnUU2DF7pvZojrg99kYz4ZxDALRi5i4FxW9DVSuuQxc8n78aXnkRd4iN4yAFZsronDPAfh9pkU2cH",
  "key3": "5TKkwaisgGqtBrzR8qzZdGLcvPRNib8NHfctkZ1EQStLbiEYbYnrWya1DUbb44uD1FQioXxDYKG68K1B31h3XBXE",
  "key4": "KuFBpYV9HhkbQehKjfVAqjazdsjHZv7KiqcRWygMDgQt9imeFf7nhQpr2SGnXZbYA7yzhPAtvEaDzTKwWU1JQXF",
  "key5": "4RWysERS7miMgZTSbcSGGHhGCArsuThZzNSqDnESTXvRkmAk8srGsrZj1sNJbKdMgtHLGe3uit2jyhLthJZVY7rA",
  "key6": "651MjvR5pf4dyNWNXfZRpbMwUj4vMf7tv53KF4BYiBP7McPrccHHBeWsfDLoAiSeQMeCKsaH86Usb6XwrnjFKBVj",
  "key7": "2BPgWGD6VztEpGNohoMuP3kn77xvr5oyuiNXMfDgfkiXdPBjooDRFTbgDF2PZMKdM8ciJdEWRnPnxiWx76qf3SqQ",
  "key8": "45WQpzMmyw1h9FcRyq69vrrn2GpEC28co8cwMxGuRExNwKQsxqscwonBhPAGN3uzHFUvDk3K1c1aPMRVbrnUhm1C",
  "key9": "4fcfixB3fSzbFKK8XmsKv4eBqHPWJV6GXUZiXUtzQB7Wdp2cW4QChHwNodz3UCRfX38EnLZbDgWABq6mutSW21LG",
  "key10": "57hJGhD1H4TWdrMxFAPihaVUJMJQK1ZenuhKaGd69hu38CCAoXj3XBMeJQfpfZUw8Lxi4u8DE3dBUv3n9pf8weyc",
  "key11": "4nSoimu8vkUbCu41pH7EfjsNoyruot3uJjUx3J1vZvv6wMGK96KymJt2bQF51zfnxmPjdDNzLauSkowSwVYV2Xfk",
  "key12": "4fV2NKaVe3LpKjPNq5Mwee3G8vybAQ7qvR8Pi4hdjV5GVJ714K3fzTkFCQBm9kDUVB1XTbYCv4BuhU3DZcJaKD4h",
  "key13": "2hGjQEmCaA52jZkL3Cuuu6yLbbam5ESY2LmTGkVCtpDZZrfNC2zwS17hCcz4HB8MZYdXrr9XD4qsF3iBjzguiSrt",
  "key14": "62DfqkQDs4FLiQzt4KxgvgAGSDSW7Yp3N5MBNbHM1NenkmEY7urhyUGRY1LMEvhUBpQLpvu4MNRUXQJhLssgQJ9t",
  "key15": "5JfUNGdicGGc2wEBFPBzatWN1qZfP2X5jqWXEq4mNihCgTrtDR8RmX8zzBs3QrgsptAPu7PkSsiaEA9Dzowo6fZ2",
  "key16": "3BYfRVFdUSr3TdwRo2gpmmx57peqjjpq6AyVnyrYFwC48uC241AEcVCTbEE6waWWYdia1G6dfh6MHVu9K3b9YDGZ",
  "key17": "YXjcCnGKL52KfqepwVnCPVUrM898puQ18CqbHfpARwiE4EmiBBauKfY87MoeCeCbtPvSXrkT44xVmETKLNMoVS9",
  "key18": "4FSinDfWCF3ST4vehx8ZBof51HguoFtu4K8HuToWZLn8wTkZHoFSuMng2Cdt5FjGB56APi1DaZgWUhWsA29SwEuU",
  "key19": "v5Q99kL1sUmjCTjFucLddftuhhQtStpWKtKTtByszB4fCLQJeMKEVU6cAV53pEzLgbxwRYyAJwxTybYxckNQg6j",
  "key20": "41GzGXo6thx1hRmHurSSKo8XM21WFTBwESkWtbaUQUv6SLdXJfBqMD9a8defUtkEi26YRuWoYS4dyMcKF7ZXkWBh",
  "key21": "48JawbBNyMJ2TYq1zHj38UQ8Bbkh6dRx3XSY7HeEF8SVZD3x9BssKEK3gEEBA6io3atFi1Dkdx9Jv9wK7zV59jeC",
  "key22": "2sGTo9sM8TC8KALoctnBFfGSuRx96YVqSEMm7MBjoYNa2gVHG3jUUdorFhoWPnKW1J6sGThEYzf6yPdVcHV1pEgQ",
  "key23": "3YPXrDnPnPVHwut7694RATZXnCxeCPFT8aLbmH4wfX5caeKZMGCiavzZuR1EaW3cihMNnHaf6iNmvoiJ6ijbVqWC",
  "key24": "WKhbSGKZZC44VEUx8myLxQhKVLhN49LbMAgHH6THprvRB5gEtvMhUXFDadTtnvS77mYQKyLo9yMhnB6rxUpWNdR",
  "key25": "4DiY5MXGeRCVM6A8aBK4d7y9o9L9EJvBNp7JzpbVdPvQA1nbwrtgt3YPd6ZNXBmzShD9DczdmeTVTPutLMbxaqLe",
  "key26": "67ED8PoR6mEWzuudBc1FK9jRsTNna5eRFdq2FCzzrm96KUMUSu3L1zsjARHKmSvmj3kBkKzEgtNpRXF24hHWicBy",
  "key27": "3wQFcZEot53DCbKf1xnzyAto9P7mAC2Y2Bq7Hb53SvS3qtd4Qbe2LNQgEieSJMQ7pPHxpxz1HD6apR4eRp9BfirD",
  "key28": "5scycXbXDFcuhQgPJk9tCCPJpNaLWEQswttnAfv4BVJmZ9iXs2ZwegrthG7oiYdYxvdpVVvqThR9WWzwXbpyMwzw",
  "key29": "2kw2Rhx8pmEVG8MBHZf49c9wKxHSjGaAArTaKMsh9ARvRVRLxHLfq2mBWEXweEMxYuyuBipbzKrm5j4DbZv2LefD",
  "key30": "EwXy7SGWYe87LzcPuTkEDJyE5nmysxmW7pSaTR2W2QVayKsRMFGMbXVZrDkAf1C1XeWHWgaTmoRJGYpSyXedhU4",
  "key31": "5kS8F76S8GAyc7s2pwWFi5mTonVdvNsgRcW5bY4ahxFkykTF3QQGNAFacokj1uRmKFcA4zt37di3yGj1Kcby6qd9"
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
