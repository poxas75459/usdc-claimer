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
    "g1dRqS81FVTfjdaq4MHCCdpU9ttd9ZFrgnXyyi4QJ7H64rtVZk6WtKF88bDpVwZbkL2TDey8AfCRuQi5WdkzYvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6DsGhQr2xBWxwRXaZwX3KvAYS4S25jFUiPxtSBGxEMhZhRpDztjnVLJx7dTkUrZpxmctS7jFga8HYWDb4CKyNp",
  "key1": "2AbpdwtktdvWtXZB855eAChfWiHsDBXQNscXJpsAyGfSkp8uvaF4dGtNt3sgiWRGuNuKSXtaam2sARgmkeDMBUoz",
  "key2": "4zVp7yWhjmDQm9FsPHTacXh9GbnE9pA1KhTbGNkp2PPUqX9GvcC74mF5zpsNNv2AbWwM2WpwMt5sgqwjt2x9AQNc",
  "key3": "3d9SsNayjSCVc3oFvbpP9pzCf3DrKCPS2Xah9JogLm9PFuJv9YdwjxjpzpLE4Xd5yk7AEqpcXsdKg9AtTGbRD4md",
  "key4": "465t4VFgZiJXbrEixWVXVGfwkEqWpEA7WBFdHBrAoBAPWVKFWYApfZ9Y64QUYa2MWvSiCg77SCEsQ5wh8BZqW4jJ",
  "key5": "2ZcFCmGh3g4iCui8WwYdxMxeDMUQAQiarBECzyeuNEH1zq4UoN9kmSHjMBss8iPCCXwZFCSppmBvM6rX67GxPa5N",
  "key6": "DNgoLXo1uG9PGMG9wRDsoRXGjEMhuKyQGsaSXBZnT4XehttBGF4MUUfret2HTQGYSfJeFZ3eCPBSmzyuSY5w7NL",
  "key7": "TKGobaWQsECWD8v2YJCMy6WuZbqGbq7TfaD8NepEZdSfW5f66iNKbQwtGjqf352aB5NGdNoUzQiTTevQvvyZiF9",
  "key8": "3qgpGEo1PimJEeBS16eurSrjz4xkBwacVYhekaaZbcpSeyTCdx1aznrsDvZB9FNJngXcEZ46LseS2TBfGrCFDVyj",
  "key9": "45pENSPtkcHmiKgDoWJmQAqYAgNkzLZXtH6j9jSEjrGCPQ38xNU3EX7RSNAGDh4gB4coAPBhGnipjvTB4wJyi6XF",
  "key10": "4HB6aR52DdmYSmRGTUPv9J8R8R6yEauVpagA3HuqiuGm1kBBbxYN6AjAtVH6GePm6sxN9EEahoxtxZU3jugc86Z5",
  "key11": "2ehmsuXtwzA2DVTukkHnk4feGgyuzAPxGigvnciHYz7yhFiMBCZSb4K9dhtv7ZkhQb5Uv4GEdyD7JSFsSTGSzDxG",
  "key12": "3fXVwDxC16nZxPEhUpuieu48BPWFfa7JU5pe7Bkb1TAg2ctqQ7vKhBTTUFSBV6WYTFBQnsn2dRiHCA4NrPtmUppv",
  "key13": "2QZy56VCv5q3HPsvXXERW6THiAjdyz4V5s9q1nihnpQbhbBC6EFSnQKmQB9cix9U3yEBY8QGxus16PZTWQ9w6G5M",
  "key14": "58GL9LMUp6vXGYcW54qCwN53DBHYFpC5RbV5kDHcY98MpevY4yz8oARgT1BDTQgtBEcBJabcJubyDEL6RpnFFin4",
  "key15": "2mkTq4MPtgMpiCVCa6sk2idvA473iAn76xPvo77Dx8wEJuZfP8WvKtJGCrgwaVr1aLNG8eKZs9bnhJsrKHJhMpEK",
  "key16": "XtVDkLEzkCcSMWDH292pe762sak4925ZSkQCd2RDDFT9mog8XBXSXN3V5KWg7223V4PZXmZV3CAADxrYDzdAcsg",
  "key17": "2Psw1hKzHGHdEWdRVB8nSWvUVHaD5m9LatJL4y2frdgGdwq1W1A6TtRNvnsSexw1AfCtvkanpna6eDxGvwRcy9uC",
  "key18": "4EbE2Xz84qpDWYdMihyn3djEy8nj9zcStLmAy3PRjws44yqf9hnAuPz6uwhMfWkKYVpq6D57Jjtr2G4SjaH3A4Kq",
  "key19": "2hXM5uApFeQLXpTUvVeiwVXEktL4zupEjHZxv6knoXJNDNYNmRUpn6BRcD284YvuRUFv3K1iUw9TXZauwu3W7Le6",
  "key20": "3qsSJuxcG5f7qQATdS93xcAHPq5KiZdkGMJMxGtPkq8Aoq2DX2BjYTEwotbQigSrPVRwSW3nsvmNKUZU6KD75NbC",
  "key21": "5umA4JbkR11YMTChNorfDWZq6xUFt4WxBM8PGyc3kRBGRSZxsgkkF9WMX4chqDswDweLWUJZHEHLLoLoNNMpqK5V",
  "key22": "4CUbvqS38zGfRf135ZYfQoZFChYm8ju5bEh7gZPuEWXFqyirtxnns2m2yNY7HwRMbWbCbS6guCGV9A2EdUU5Bmqa",
  "key23": "4XLDPcdBgQHoyZ1XKs1qJ8n6iLrFfoYR8uKRCrqyrMQkqHoqaHdmUyNUx2Uqic8SEmqDtc5gMhJgoK5hD5X2ijpB",
  "key24": "47ezXEzbTjHbKdAQPCKSFZdKxhBd6vamAqbMkkKPgKpF1r67xWG9haUCireQF2E8QDFVVBHguCKyzUnbaLzeeupX",
  "key25": "3SxmbaVuJYK5H4aFEWE9WZHaAYDCwtXVn1CXccgsGF3L15gVsBt2TnV8g5euxvRdfqiDyBnWXPRgEw9AxwFYwJrn",
  "key26": "2XS9DECsW7JHam2X9k3Q4sbt3jfeP9n9SfThZJpqd2wYzeuFPLruYBsmhgx1FWkqA2EY6dkoFFphVdJRX8UyBx9T",
  "key27": "2Tqq6dUcjwGW31unCFFPX3mK1z2TaTmh37hC35cmvVopog8js4FSboTay534GLd7pdz3gwxtEMdqXwTfi99P24tg",
  "key28": "35AaBgYH7Cu838N3rxHwgCaBxhmzQNYS9X9hPq38jhkjHLDmG5aNcUpDTCUE8BZFUJcF6W2NKVSrZjWyKhcvjMqH",
  "key29": "3vVB2JBHrrLNgLRhMctUfUp6yKNbQABPPohMGHiDLGqqvH1WQ9t89N5HZG4uhRq7WRr3dew7Mcht1jGMrfCGxCqQ",
  "key30": "YhVGTR1z3W4kQwce9q8Ymk4x17KK296ETQx5LTrejF59iHuCpYC6QC52qi4dEusyr3M9yHrbfMs66K8JKSHykMz",
  "key31": "3dHi3Afb5DCz7vZYDLFbLwG19Pic1TQtGLAJxkF8NZQd2vCnuvuh3yPCiQfWZFujSXfPsoSkZpFxVfN6P3qnr91r",
  "key32": "2kNZ19HnaxhfNCjG5eYtuhNNv9PWrFNGdc8XaDmDXKZrEfbnYBLbiVF6TNT4EfJyfDPdnWgA7JbghbYFUeiYhajf",
  "key33": "3jvE3MiXKZDXk6s17bMLtsnL3ZsNFfNK5TpcJsZXZh3v5omXTwYWG4wkpnrkaZCWqLh1gyd8TnekEg8APohPMvYP",
  "key34": "5wt5dUEwscngW5wTsb7uYXsU7nRRfkj6mX77vmzt4qjCpQ9befaUMBKwiCMhG1yBtLcfffyJWi5Ny6HcsWYw6982",
  "key35": "FAkxjR1QbjLAg9kcjpeZ7fDkp6jet1K5rF11HFv2rF3VEeNu83yfytLYFPuybh7jPgN8MCjPZF4va43hsa3jNZR",
  "key36": "3Tx5cgGdoL4yzBJmakZrzw45zRxf33eJfFEzWV8bKPNKrTfkNeEFVgmMycEbkKH3wgXnGWmHJs8Bj9gvrkdnQRaL",
  "key37": "Js7Tb8DYGdxSSbctVaAcmwtTzVQrJ1h8D1d3Leurnx6Zot7apDEKbWbqde8xMv6dvHgvU14hhZkajYZZ6TRH2uK",
  "key38": "Sefmjzd1bna1o6o3ZmpTm1Y88XAuoScpVYrraANZH7MPidSJTNs2pTTQUefPaFjc9pWGRQydzTpEpSWV3PYmQCS"
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
