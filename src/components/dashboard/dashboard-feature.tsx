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
    "5jVfSBC9EsQmrxRwWdWje8HPq8skHkpVBstHh1i6graHMsNR5kkhsh2jvQGcjD6GdfoB7p8S7WfdgovmumVP1Xrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCPy5Djb7DxykoESQMkqUmxWhdbcg7aLKgMAxzZMLAmLzPk9Qyz6Vqsk7CCuipMbfgKca7UixhMJbzdY19MnuEg",
  "key1": "3VF5kk9MG9vektZPm6SLb5Qg13t42yrbQpa4n2DdiTPYGvLb3SaWoJHM4gNbtuFbw9E1sB1XEUhJ1f7GWat2G5jB",
  "key2": "ffhy5RHAuDjKazyAxig5rU9obAktiWyhQapc65mmD3D5bthoYBSK2j348Vkpmwgax9SVWsy2EoS3CRoqPENzhMA",
  "key3": "4wz1dkgZuHZV3k83MmAi26TCfD7qezFu49AqgA4Kp7cc54p7qfa9uQHucaMU3YN8eZpN5F98yWepDWm3oVVTN3C4",
  "key4": "4cxf9xLUqP2qkQjAiL2UMWcnNtJxQvtwmbL9xykK6iEHvwnC5nUdexeiJCKjC88VEaNtcndpLYiQf4sZzjc6G6gz",
  "key5": "52jYUdqDGJEBCx5wZEGiJUdz9Zx6xrvZxjaALZQaTj2XE3QFHCZwPF5kjZivsZGAow2VQBvfRQftNfRSxfvmed1w",
  "key6": "2TtMUJU9miZGvvsg6JQPEyaUbRX288dPeG3gxTMc6Rq2VEU42DEwXdbjNpANr2jTYtaSA9GPeSFeC1jrJbczK4Wr",
  "key7": "3JSfSxEBrFL7gpJ3T5zU33qQqqY5ux4ammdvLgqBThAsounG7Yc4Fc6hyi7WtERWUzanfBqYreM8Rw6wN9ZutDmB",
  "key8": "4Lbf2Mau7abaKbP3vLKyCFoyvNop15HfNftGjpmDoyCpmjULtAoz5B71ruobw6rGRYoRXy3fEqg8VFZQFFMj87fK",
  "key9": "5FexARkdEzULYHoZKHQ5kP4fZ35h4mt2Kyb7PL2Sic4KFq2sDr7c8jaUzShka8caBXhnxuMxEPSCpYJddhatxUTo",
  "key10": "499GHLj63WMzEAdsYwC5zRU1sfpKSYKpEJRvyULkVy1CY6JnmLNkC1YKEQrLdLdCdD1Wr1Vih2m6HYhJfkJ4xJPH",
  "key11": "aWqDiuuuFuY9JpAWzqrAwpxKNqBf2YmVRz4JVjrJQeQuzV3t7kninCFQHYZxo1PvmZF27A5CEVipow7CTCQ8dz6",
  "key12": "5Mvf8cpeWdow6ycJEMAiDq6fKCrNgyDMB8Q7u4njyqDax9oXLwVfh561F2Yc28RsCtMMTb1CUP8ykPfLhWS7miur",
  "key13": "3FC5r87phEHEtcoytybq1brr6sDD8hCebN3jHA3uF4ennUrvSsnwJhjAipZHZNJ6JLfpH2kh9j9fYNw45H69dBd8",
  "key14": "oHeNbUMih3ngvjQ5L7KKZ2q5GPRq3FSiUzK55hXHSXYYP1P3Xd9UHqsHfDqcwn5Ft4hVv7wVeSHzNco6FcNa8XL",
  "key15": "3wBsHpA4eFknetSYyaZk4UnwP1ysFYKsgkMwvnAZ5roqxXwn1j6VKtHDLMCNKS2jWhKCbfCz3HDfhDED6nqjALp8",
  "key16": "ntYziaaLTJJZ4BDReGZdKrUkWUY5GDQstzgfMWvhp7KvMVbGLoU2VVTHKUupRwiRYxKyProBpJsKqgWqnect6sR",
  "key17": "2qEfpF5iHrro51LC6ceJGWKuCDbA55ktMSMvW7Rd5bbBSPiuVAnmW9iuoH8A34ccLvmGbPwNLY1Kpuj7dVdcQk9e",
  "key18": "WxZ5TcALvunnKdrKGwotHV1sFnRvG8XrHYqctdkWy29t5vBLnTWegPL2L8rsoF6fhXbbpcL4EA4tBJpCCJwprnD",
  "key19": "4jBKnKVsUybV9kw48LDS4e6sRMycS9T3e2MNCc6EB3QuufZpasgD1DjMs2zzGacWuxMxmgf4AmqvLiK8xYyLHrEh",
  "key20": "5WYcAxLeoE8twmdDZntUD2Do7BxbMxrqcGBdiFgQTPzW7QMmqu7bkqKC7gFUbKcMF5HvQ7fHtReDNVEDVmTuMaFq",
  "key21": "3BTYkErJbzN4YxsweSiQ19jYcqKbWW87QE7rezzvuHNCYrjX1CT5uDdKTbmDoVMGa1q6wYFXPPu4mYWVPKFaKKmx",
  "key22": "5sZNLqGhz4rRRLcuT8ki2cWLhVmAik6VURDJTJqdCuLzdn7KYxXKyxu5gphEjKS5pAcwdLN7wiAPqCJGy2NC8U8k",
  "key23": "2xux5n3z4SXeLjF42yUcp8JUbvotuvnussAjzcGMcbwTfi3Gs1PmFbqn4mAji9YPW3eFjdcsSJWqt8vFiZgTHwVm",
  "key24": "3PpmysXnTWUfSPg2qLoL4eeFopXxSfitMp2hKB8KgLELEq4iEZW6U8i9EtKH9DkwHGfBMTySFzzLuVDid74GQQYy",
  "key25": "2Ntja6jc1YF9dAWYJWH6QmHQw6c5ztDNUZSoqu8CMVEsufbDjaddgQecK6r5QShWtW6fMwiThV8Vp6VBLni6xXjP",
  "key26": "3pdNJFVeujpVh7X1EFhbBr76ypuBRGbVsTPZSfrqRrNWau5QKrq5BWyJddE9qEfMpZkpNsbkZhTWhR8wN6mFy8XG",
  "key27": "mbKHj2fndjpQLEsxACB1XgdamrAvVyZVURGdagGwzLY25MYuhWM7Tw9M4RbEqVkqbMcUaXAudbjg33hcGcXm3ae",
  "key28": "FwBPCftL3j7nmXGUPSHVkcCo35Gw9BwE8jkiiVAnxTMF9efLB6s8AhXmcs4RzaAgPjDE8KgjecbS1XzkgogM8Ea",
  "key29": "4TWsioDrJ3WNrBiZbajXktpLLbKzjMjYJ4yoqKoQRzJX6bH8j1QacYbZ8mvPv7wBR4pLdLF9dcvyvuWxx6dHUPv",
  "key30": "trfCgVDPUfWK5fP5Ut5ESG19G7BSRgxL3fKmfZN5Tc7pJzgNAGVSwgHLuBzAEY4TjBJhSkoJHSjT7LtDkZKwXCh",
  "key31": "2YHfdyLybZzjkkeKQozPLC84KJ4dW9UrSkgGMsPKqWgY8bBQLsSA4KH5tUQSEdqBwNF4N6k2iR37DaJyv2DXhVZD",
  "key32": "GdK7XQrMeENEYwfmJfB4j8P4C95a8HmWKEz22S4KThNotcRKNQnWSn6yUNZGyAV1ari1iYjvZ2ByJY4VNEjP2DN",
  "key33": "4Aym8c1ZNYUYYzmvSS7f9sHFPYqcuoD6pQaEZEvhZqp5u813MFqPF2mwy2u4KN4BCJYoWsADDZaxjnLRJkAMPYfp",
  "key34": "4z4ygRbmwmPUQ2CvzkXb887GVgj6R21o5MgxCBnyB9zybwxCcPvnnocMGiK3bm838A1ypoz2VLjDHgmHEBRgYpd1",
  "key35": "4SHrhsWLnHcp4x3ww8nj9FFXzYYKWbwoBX9Ytr3W87KS2UmQERnx5dUqGQzdQJqw7RXTH4sXkmfpNtND1jRhQRsg",
  "key36": "2gAon1RUSEjD9nGpMDS7EXPDPdv6ez1QqpMnPpDMUmnBDFUwqyANBWtTLZfyuX5NMvBVDYY9ed6H7c2BPEqXx92u",
  "key37": "64yGsqkbw78EkVzcWStYfhDshkMhZLa5113d64LWaGq86GSRFd3Ka2CwCTnoKDaHtfJQbDfRjnT6jH3Wpd6RVbD1",
  "key38": "3NVsoGUWxRUsqZrdHeVzaacfRguvCZ9Tamtesd7KKffGmULVV22np7EkU58zhG5TJUyVgc5oE449qM1S3MUoo1n5",
  "key39": "5wnZbVu7ZVjqwgNLwP9mkD2vWmYm3xMSTDmvXqAFwU46zxSX3HmmFwsYehCC7JPntJ36WuzHu8rUu7ANPS6VkV1N",
  "key40": "5GBt23LQskvDoa4NEGFZzfUiKH6HqhoiZF9WAfqK9VHmy9a3RNqftt1iBkbyVHRvEF5ecAU3dbQ4JsT2rGygfx6d",
  "key41": "5Q4WYrbA9qHrCMfSPQD82RFtQGxsm5oXmyJGGzZSB2GjEBYBD9xYk8wqB5y2ynUso4Yom5VX4Vr1Tw17r35kyCA6",
  "key42": "64DpZGvkM8ytwwo93LNLJprZigmWwi8wuSXrB4PYjCgQnV8UtmGN2GdcW8ZYwoh4WGH6Zrt1TNExP6n4ktsFSZxd",
  "key43": "3Ur1xq1wZpGCcp84ePizksBaipJrJZRTdDfsbNV9KQXZfcEZEbB9QcHzDsgPofLkJhj44DNb4S2ZrUp6Ps6pvzPq"
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
