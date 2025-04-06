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
    "32e8t5gg4UEFtWasoMA9wXY4dkgBrNHGXyoc2v96Z35dyfgxu3n8Q8zU4ZzGbo7RTqtAmBYuKjDi2NTsySMiDHRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492XnYbM17i8pWYC2GN1NkT1CJpSB11juLkWDUpsUy1e6gbbvchw9c6qtARbc6PXbRq97fD2H8x6h1o2VTMufviA",
  "key1": "52a6GsemQKWjqLx65xKvajPncG4GKeUuRa9j8f3zaeqa4E2LvGd3K9XJatp1LmYbvjMqwrzRy85CEdE2gsR9Xxm2",
  "key2": "2R2Q2ds9gg97aDcrGtpm3c1XbnAFsMvce6mQVerhTJm9LLjG27QY9zMeemWjNk7XTxQM1m3T8UZVKyhnDPp6y37o",
  "key3": "ZS2RXWQDBCGkQhfhSWFQ2wZkeorq5f19uofBmNuVvuk7qXBkWuaXM8wxxAyjZzahtYzT9pKWksRrYjg4m5HzSrH",
  "key4": "4aeKMHaoE2FRcBHofeoLFwc5dDsNxyw2U6yKCwmKNmRh4skobKMUuF3G2nMvifbjeAhdjCz5nk3A4ms62eRDDrvB",
  "key5": "3TkzWEdYWocwq1qnn4eJgs7ovQcJFoBS9xtvHfohBod2tGZpSyfjqZM8KuNXeTeA65F9tw9UBoLpuCaon6AXsrdm",
  "key6": "MSCG9orsPW5EBgJ85Qhjm7tkYXs8VgvR86fkv1dWkWLbcEUucijx2WHB6AiN4r4Ji5upRHQh4SAzWRPUwFWii8u",
  "key7": "58f5prtJqYTcaJe9uLjBn35bsoWMJ8gzpSthPcYrKEyybYfyDY1ytnu87tsDt79dd8accbq3yNzyKSqtEmRciGL",
  "key8": "3PnH5bt4dgqb4XDMeVTXnhVoCqVLwu5oYGFpMcF1fZyxtkTSyfHtEzGWVXCksPLahNN15Jd6wnnJiG7TV33TNhoa",
  "key9": "qdKuiPi1aWaGURwvAtSD98NkTneAqARcLXD4WFw7WiUjHb6wbkCmGP2RCCoBQzvZedcaDU2r3YrbSLt6u4MUXiw",
  "key10": "57uJ4zkU5tqBX9oRxwtJaDZqk17qhJGbdewhvmWcihKZNfgKyXdLntESoN4TuqYujHTbRtrtGxBoCwyqf73CiHcW",
  "key11": "5KTiDosm7R36xtL14qmHYUVUFYWRce4KZbegJ77CdboQg5j3RciC8k13cU3CZSDxpca6UKEDrmkeZ9mSaWZ6DBfq",
  "key12": "3u5dZbxcPnrTzvQ29UMUR5YPVcUCcwyPH6LfYsupxXkKDHXg39AVLDHTxGgfWasTpaNL4vX6cTHzja5WvesN97io",
  "key13": "3o7xvvzaVPTY3B8JdoHGuVyoPMBQAQrgA39sprKwCQFAHD5vZ6dBi95xBrUEK7C8qPVYfiALn4rXxuyMFTPLoQDh",
  "key14": "tmEPH1JvPwKynoygVmx5nC39kkFBqqwtKPSufjA4dtheYSDqyEEHvRVWCvMCJP6BRRS5qUN77d6dpHaWDY2uXX8",
  "key15": "2qFKUSpwyXUvq8Q3v1LPJZ2aecpgVz4enxCrb1meV2uMmawZJqk8rGgAKS9wQy2KPyugyUWpT5RHaGrbgkQX6hXB",
  "key16": "2v9GPd3djxAydNLMiD3GiZBXymAyi21tjxTQGeyea78f7Yd94esvGMqoSg61Amrji7oya5mBWyMr2BiGVjCFCqv6",
  "key17": "3rL8TdMsiSBBYtSBc3vDuUf6sWpHtbNPrKRjT2kgTyiGdcrCHEbH55afJknPk72Fhe1gSPCz3Qyv7CqkA5ocKjzx",
  "key18": "VD8pf9SAToEqYkCTnCjuSW8wSCuxLprRtaT5gpNpdLLygj1yrzC5YLUEBUCBMZqxN36597YWPQru7UZnXn51RZU",
  "key19": "4JTQrbfK89kTbip39dQEDVvLf3fKqA316QoWWJQ2cjvLLsRkrUNc1x5fjDJyx5qGzqQ9wZJFktDbvsVcYCW1rpci",
  "key20": "2UnC4LWNY8x5jmYPMFbMxCXHV5PDGTrjQjR4eHqzYUS3KqKx1PS7qBnfSP83LngeRhTUtSHg7xSnrdWvncJ7MiYG",
  "key21": "3r7u4yebeXJ3WypBUJVBZtsS3CaUKr3LaZdK65As7ePoenasCQwi69pGZUpM1iA9Dup6rg9NVHzgbbjDQoTYFh1A",
  "key22": "3ZnpChq8yPMsUdXswuwCxgGW4ZmrNj3v1t2r6fb7mhT3ykx3EbFdFRyhf7qbT6NBiGQ1Ah5W8eCBPxMdGAkm4EWm",
  "key23": "2Qw3WFW8TZy8XhYvu8Ubt1K3pK7iJMkDqh1cQaaBAdDQhdXUXM74vVXkdXaB2SKwEKyHMVu5edLsfnU6SHqVsbmG",
  "key24": "3q1xCA1eZBm2HzwFL5Z9ThigpDqfjRc7uHh4sBmHxa1EHpunx2jb6tj6X3YNkvPYAeD3BC6TSzt11ZvjMZ5pVRTS",
  "key25": "2LHDhTPXY4Bp18h2rrLA4ZYiUyjnxpySVzenvrdjSjCojSDedZ9ShSghr4TmWu2sgj6qsdyNEWjhAD91AaHjzxpW",
  "key26": "2P6xdtHseUgvzYRsWKVaqMBQHyQxHJEoYgJ1QyEy17tyoEJcumAMGNkE1Vr3GuC5KbVBzbEUaJQPUmw5gMKeq4g2",
  "key27": "2fwLNdbugERXUqDnys5bUmTuWw4krg1GEbVYpq7FkePzMoFJM2UEHBrhERqnVddCPbhM4vK6CNJeejYYre19fuDE",
  "key28": "aKSqJ9pkZqH4i69T4jjq16g2KZJwZaco1KzPCeKPcEDEMQ8d4VUha29BdmFktyKQhBiJSQdt8VbD7k3uAPGpTrW",
  "key29": "596KDrtSsXnKdYT7DKUzP6M8uXLFjyMTVUcD9XWCk8jCHrq6WUeCEU9qTY7eKAewuZRxkidUxAqAKgKku7DXXcsV",
  "key30": "4C4vUY1bXH53z1wKULC9tnKac4BKwjwExFdUoz8q4GLZqj1Au6x9Z31b6ApW5EdEL9Tz87LQ3NkxfEuybD3vEVdU",
  "key31": "3ACSXMVhZ1sqWVyxcYS4HETLZSZfQCvknoWNJi9142zLwLhEBQnHFoTCp9hz3vkqQWvyx28qwrtbheP7abR2BckR",
  "key32": "4L2MeYHFCr71s66D92yi39ettaX5XRSCNRS3EV5nfnctwqKGppd8wGAr79mytZwruSY4KyNJ84MNZCCSJAW5uBxA",
  "key33": "2bTJ2FAFXSjMAednDJFaE2JNc3FCC5h3ATRx8gDTRUYE4FJogkV5yv6CU8bgoe97NHUtGyQAdUNaP41b3NyLa2zU",
  "key34": "2iSQeCcJVkm28bdyzHN9LwN37nFZGmGLL11miJ3jwCkFCcSX8P6dSkqxEde5EQhGunKoMdtf5S7sQjst1fjigDZw",
  "key35": "5UYx5MWwm2vWumD22xzeZsdX2juWU4M3F1MjKPf9MhMVojmXYX1U1xjry9sAvyDjWt5J7PnEVft4RwV7PQHapqWw"
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
