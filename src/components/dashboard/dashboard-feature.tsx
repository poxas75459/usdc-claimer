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
    "5jbCdecWJUDJueV5XtDVm4pVTUv6GgYXpVQN1zGySFgg1YhFXT18tMPx4EPDHARNqJASt4S4j4VKYhQBKYVHqae5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeD8rH4tKpJ31AT34DGQynXGGF15iKz1oTXbeBN9dT22pGoDkh13M1PBJ1UubR9KsffbSurrzR8ndB4ge2BJ7Yp",
  "key1": "4Cy9Zuoji4LAt6kogP2yjACL9hFM3uUte5m2bestfEq6XGgqTtbTuRHTnTNHd8z5apvcxLf136QNgPEYG5qHuq3Q",
  "key2": "25geH7mZmeMxPzLy7oGnkS3S1Tfd3zCz3H3NUwUXjGf1NTyCfycqaDtvJtgMLAchnSufoZvpVAeA1dTNA9UVrSTa",
  "key3": "5aoevGd83SzvWV55aN5bcD5VLSZHkUSZdPsPuv9RaG3K4SGyjFSconTokssCJM98n7qceNy5x6nXd9Z2No4dasub",
  "key4": "2G2jDJGDdWPE82DJemsfTZGgGD1dMLsuWZU8QgjVqiqAT1Jj3Zrp3VVEEjNHEPNxjYbHiUA7VtD5mEv16KgPCuGw",
  "key5": "3dHEsRvokRAB7S2nFNUriuuZcbQ9GHDir9zRCh3SzKbBumPBxLyxXa7Y4vZ7RjdzzugUj83NtDjcAsuMkv8kejU7",
  "key6": "3kTFMJQTYf8YaTaWT41BfquwAzZCHfKYoqX5e95b2GPYEhs9was3g1wnkodJ1DGjMe3tLpapextreyi7qbZFqEx8",
  "key7": "J71j7S2PoQZVC5RprKYVTkX2UWCoHwaPM6fy1A2XKgciaGaZeBN2LkoVsqZoDbzsP4W7AagnZVWsHK3BK6yZB3Z",
  "key8": "2k9ZWTNRpFj5VfR9AnP7rF33n17CQ3844qGoutUfZjJN1YCz5NKfS4aws6QBtChLQQLx8pZb1pfzFF7d1xUtkdta",
  "key9": "3xWV1yxe1ZFV9f2uWoggoSUeVTiw97dVLwLcwkxRY8bjT7NdE245kRtTHcTdpHwybVmGJPLoRqwbfv8Jkt7GJt5E",
  "key10": "3JSe9AaizVDX137CGBbWtrcjFrezm3gJrT3wLZTiodXPMAVxTFr79b5uMmrFrNTJuBUr7mwTtKWvCWrHNPHLcW5J",
  "key11": "62jkeGSjP8mKYJxYtoDMFLDsfJQHKLYuf3bFpJdQG5euGK8CjGkqddaREqDjGGadXwKYESriHfKcJCvqpqr2Ywwb",
  "key12": "64wJbqwimnQpcSgrhaA6fNoPkgQwkoYDdvAF9Z8skmgh31yvGCjDGsYXW5emMhvGGcw32PaxTjzfBELncgjzBZGG",
  "key13": "5oc9ojA79jYUcW8CXf4U2p9yNrVQenf88EUReugVPbFobpPoAub9Nv1Ks77p7JroeQYF3j44eq6ttYZA5HTL4Raa",
  "key14": "ozt2tmZK9NL249GQmVyr6t4R1ikRw9SR58swSyLJkZXuMjnfdMcbTGD9bJDsV6iCbRguxTpW5nURWuuCpsHcEkC",
  "key15": "4rHcX9VHay5SW3UVBPhEMyJYLvBQNzPTuXE7ChHHCDpvuXCoW4F5S4w37RrGg7zW3y89ikwEhBcPFLZTBPmXe449",
  "key16": "44oesb43hTYBwucZd6uWn4cos3FMH5DkJ3QzPawf6tzjn1eWRfDTG6KgiFJ1GT3AuN2kQuWdgZFLSXQ9vTUWqACc",
  "key17": "4u3BCVQm6HyB8iUzFDbjNJeac97P5DhLzq4fcWDoRqn1F6ywB64EsuAZb7ZjytmhTPPuX36F5dP5XpjmJ7aFmjCJ",
  "key18": "2nRihouK8DBwGFFrwHKuci4V6KEuixDjXkCAP4Vjz5pRMNcAYmCh1YpABwktEFLz3GH8iAy46wPqQDgAd9Vem2Ma",
  "key19": "4kKfNisLmuqg4sFMCM2dMqZdeL594TAuJHWCC5chPNvtMFkK9hMaShYeqRAakAqRBVHF5rpC7FNmsQeLxhLATZiA",
  "key20": "41qBNCupQthcMhdjQpoLWWCwzMtpJ7pTpoLv4wBKjAjYMxh4v5dC5winRsyVJsXWwxMnQZU96fGE4VjxoTZwuJLs",
  "key21": "5aCKjHCjorr27Wb9ojFDkkaFJyrSi3ajqE5mv7v83HBCEuGpWnbCpVbUwKx44uRFGoxj1phFDDZ15seS71fDJLvp",
  "key22": "CipiKHXZffFvCvkdnZ2aUMSbcgX9TpeH8aQ5r4gs684NAJQgaaCCriA3S2XiswEbXQQdg8CLnzKre4ArKY3N7Yu",
  "key23": "433QSHLc38dbSZ5ytZwLGny4LsfevKst1uAY8B7u5AbpEe1ez9UeHmUpNdQ2FyTwXM6kdnZxSfQUsFo6WJa4UJ3r",
  "key24": "61PZka9ynSDS9pYZ76q1AW5zK9UY6fCbRLakhL4ajx17z11iFgEF8X3BV24S6DpgpNswJnYLjoWBAswvuyXThpcp",
  "key25": "3K6jRUfxSQtftWnXhTW57g9UqmTiQ4vGjEwjJEpw2ZMaK1nnSWTDU4hkdtzmKk8od5Ct8zqycXQFZeofGQMFWi6n",
  "key26": "4ysXnzQCvWKzm3LpHVUdHBhGn12z69W8TNxzi7s2cqxaioPhUpzydDHWFjqZrkWaWyozcCjeGFbiNQfHu5LZMX2n",
  "key27": "3G67ZkUy2FHRtWtBfb5wU7yDcYt1Y4EyGqbPvdhBv5CzyVme6G2pF4Xb8frsS9Mdzrhrf61YdcmEazJXPFQrA64Q",
  "key28": "58AL28XXmaQx1SyRrV8ozKpY3eDvVEp4LZg8BkGSFm1ZVLrGR6AcnWszTdcc3MfUrgdPNC6PD7dzAz2DUkVJ6z6s",
  "key29": "46FVYVfHurYj9mvTNQ7hAUVERA5hmrQBNhjQx6vAHYFFm1ta3Ur39rmpCE9D8eHSgpVurZfZd5Xfha6qHWR7H9ZE",
  "key30": "3w6WVQs3PL41nDXEqF1DhpwjmiWGaFYFEZGsVMPta3K7z5b7hcXeSZptHJn7zaWMj2pkU6ks3qhWqpXqpNcyPLW9",
  "key31": "2g2LWj7W1TiQP7iyU5ynjGFbgeWvk4XqtFvhWWZMy5Nhp3jwSW8Jsr2TB6zgXkXHEX839zQbocbgK2vqHXgPU683",
  "key32": "4vTvGSvg3qMacGw2rMARzD5SJuxwk4oxingBqk2zs2yzi9g6zHbsXcSCQ44T5MNbtrfxJ2oARvmHWBUcT1kUSp78",
  "key33": "5wUZWAPyp9Qjhbb7uKHHomYHypYchKBCHZ1v7D1MVM3zFLNNRBZ34Kww7jC21PFdXreQcU4CRxePRVktbZo5ANLP",
  "key34": "4RDY8v2oEL6GzoErhPYbpv2gN4zDohFtLRyQjj3Qz28kubjYjiitBrwkukt792CA69GzFN1Tr3BQZ7yHWh2CYNbJ",
  "key35": "27zHx4b2aVfQUGHpbwdACyPjBXWCEdnmK4rXEYzsk5EB6g4sJ4QS7X5YWZsxr4onijnFTkLbWBvXdKxgC6Swm8wR",
  "key36": "4ibnqMwzaP3tRSykt5iwhjNe31myzHshvrRsNu1ncgF7M4V9mEH8v6wXakR5XPfnQFaMKtE8grDNWzbjcoWbTmLS",
  "key37": "3fA6P2cPHFRZWdNUT9Ue4UAjnK2Bd5dDa5o73JChojm9dMLwBXcF75GiRrPiDmhB3yra3zocYk9XU4UjDGjLwKjD",
  "key38": "5SE8rPy7uAE6KmBs1sHNocUPfGEVLPdSLngXT4PU976DufthrUhKL8rX28R42uETjxKmuvBhFq1WMMsQFAKoLsgy",
  "key39": "4gLyLtnPkJPEWn6nhSsHr4mEVSnaAFz27EghD3wFVjphX9dEjhQr6xccRTAs9VvNq6v4gdN8qsA6vb7PqLP61Szo",
  "key40": "364tvrk1bwuz36V7bS34EjaJp9QiSLbJ4NM8sREUnKHTHYANuuMCsmWz5sGFpRRPubiWUFmp87SPQdXaK9h3nrYt",
  "key41": "3sHXW8dPFcBsUyHzWRk23u1vP5XWbGm4gqBzExnsv9pFABWLsvUwVwfp24SpYbvbV56qSzo6g8f1HM4pRpB581FW",
  "key42": "6NxkJxhiRNJffrai9Xeui6Nmemgv7hRYHnfe66MPUKgtShuH6cSFvvFC5ENpmfEmbZTNha1URHFNkJ866eoJ6EH",
  "key43": "56n3bz6FZMCf1GPEjeUk3LRhqKuwqThv3DVNaqSkbAUSHeTKdMJtGkb7anjnq3kWcwhwjf7cmKCzoM41VE631U1F",
  "key44": "rW2L2MTzLyuZzW1qkXkZnYm5du1PU3mHpYATmS895E2KRzzhQxYfmqzUaWbhSaiH44wKAMd9RmBKNA4waTsPP9t",
  "key45": "3fgY6or5gKFqRg4XvE5hJbG7pe7KdMG3dAzJ81HA3nQiRBDNRZsi3X1X6Lmmd9aNg6jWL8cNzAGCdqbbHECWs8EF",
  "key46": "65wEjLY4HcPoLUEpqbdQjDg9otgHoED9Sok79vVj9su8gHZvpCcQDyiXo9gke12CYvmoH5aRstczkU7MczPze5tW"
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
