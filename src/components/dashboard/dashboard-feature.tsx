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
    "3b5NgzVmZ7H7xE5py2zecKdhjT1Xr6sVT85D7cRjYYxi3RcgsZe2S2roz275MRKFte8AgQZrM5vcx96kMN17FDPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpVFHfRTLMFYbpuEU8wjhggsrh6bdY2j7qTNwsHtrCkehH9WiAGVPDJg5C9hKqHnaTvGHsbiL2B8aV3rHdtgdG4",
  "key1": "Lp6AnVdNCXLaWwNDn7BohNZwa2Wcw6Qh2pksz9bs9ozpXf4RSeJBdMpfUbZkY74gcJY8NVuUh1Q4xX2d65RoxcW",
  "key2": "3Up6C5oJDLhPnurKzyPyMNUD8wUhjAZzW4sKSs668cqJtipFRcaCZAwABHFfyZBaiYdpUJJhxMi4aK6J6fcTrkfz",
  "key3": "r5ounmspYPVJKfYz8VSoFTmWKGT8KC8iJt3pFVQTEjy4bSM4K37k4VqdAahh2vR7K8hMajK2YNFLdbzhr2w2cJe",
  "key4": "4TYwHWLCdwXSzMsCFwAPACcYxGV3ibapmsDi44P98BUsUYSw1pDVuQzzVXFEUW2VBTefTRYCNftrup3c5dawSvHS",
  "key5": "2uyLRidMya7rx3YGPqh9L6ZNXdVV7EBQWZwk9DanEW6a2ZAzPt3MHHrZT5UBifFnWMonEno2HmhB5YN3F6tHyCZC",
  "key6": "427ATUH4NPrEa4zazsQXgCn9JRrMSvo5tmobrXHzX1Z2rMnzbT2DSd84x4nKzhtX1YEPpPussDQoLFaLmVUDuTE8",
  "key7": "2d8y5waCf91J2vXKyuzB5GjQ3gR73o7GyQxR61ZGaeZbmeN6mWeFEpsMd7VazhtpuPKo8oDA1UNV342HXixC55Bs",
  "key8": "2d6vXc3AJzHxo7nG7eUYT81expPVsMwFXja62unVSvFu6cUAqpNwRgE9NkZ3DYkRLmRfJiDVHobWerBqWuPHQ5wA",
  "key9": "4D2QYEC2xs5AU7KqBMHzj5Hqd5ewgjiNm2TvJA6ZNZU3WgvVRJCHUEvpsefs9JqwKgQBcqfHTNfk1pVN8BmAGBP",
  "key10": "4dcU7sTwfXoCuENaK9vjoFKy6HnxkDECurU6Wm2jmrgUhWoRyKCVDcEkVfKvZq3aVehxQq3rwg1c1CSfhAgiws6U",
  "key11": "iHmyjgxgG2oQsDq4mtK4NkwUs7wzyqSoENXb97THRaCSRpD6uz8kbQHxqAUnYVfb6KrabdnvUjPfxJFDXcjcocv",
  "key12": "S5rk7kruzswMXKFh1LisExfe2SjZKJHwnZRt7vxncS8u1G5y9qviDad3FBQjoTYCKcHRwYh6PGYuGZ2GZaqqY6U",
  "key13": "5ruebu4YSbot3GXSHFpvg8dvg3WzqYsKqFhAV5ZSzkcwtbGk4QNsSDDAeaTNM1mDavwMfuJEsWu986JxGzuXuHUc",
  "key14": "5AjdQrWx1aR3fzGMetEoh7DtUU7NQ3Wd7KCpZmJRHmb5LGaBWriG4X27MxDbgVBA9VmA5zMAEUc3hJg2csUuNPco",
  "key15": "55SmZLvJBw7gnghwwqy4zP4Eh1v7pGSXHTaYJJDUaR25GXWso8cqSzSQrdjBEa82m1DR37geJovz6JsDuAB6wNdf",
  "key16": "3fKSzQjyqDpnTBC2FhjYoJpLkV8LYeeeCgWYTBeuxcSA1NQj9jvzASBNhjQS3BXbSp1yiso7tT8h6qNeNeNh4DDt",
  "key17": "3MxSL1aZPNzbAgEogA6Ec36XQbcKDXavmDhiZ94sMtyqPAnTfFvYjcCFUSdeAZRNwgWR6Qy82Bap5koQUPVbNpNv",
  "key18": "4KSRn75wkQTctLLWC9nsCcGt1vFVqoHCb7PnnGgfLebPWJ6VXP3KL7EZiTCy2AFKuB2waDLLAaRDDDZyaHDHuUPg",
  "key19": "5LJU9pqyaBZV26ctbEWcFd8dJsgkSRa3KVn6PADDa2LSbbVqvFrBdoYF1XQvr1s2WHCNd9ZobK334nTQtT319qFx",
  "key20": "3t5quWFKLvPQUFVE9EUDW8XxBXKc87XyHPJUMLNkDZS76yZT3XfMUiT2484BBn6JrkMX69uadc87gfySeh8AcT3u",
  "key21": "2GtpojfQ5x57Zg8cSHZbHuZE4eRd6v8MaWLiLdccc4rhS3fV5Yh5orgnLnoPeA5rMeQH2U2YCpW2fcJk6QW3dHcQ",
  "key22": "29PCT4LRqnoQsAzUVL46JfZz8gibitPJmyFeYCpYdR8LmgiPZ5gYjcdk92Lqdmeg7uAAsMCrykue4NGfRqVWZmNR",
  "key23": "2mmpicDcrLU65BppeoG8RaXUvfv5Xc99vKoR6YgNvnN9NHB2XgzJGY5oHdSzWVJptpUx5YK2gN2dHnuvL8hBnVxy",
  "key24": "4uEnPATcGbvLNaBqocKtx7nuDknyiAyzCjb3nLhgJHW2pcLt28LWTHWNFC56sbQRVobSs4Cqmownjjn4wt4C9wUu",
  "key25": "4De3JiLWaXYPoTZVHCNgs99AdQKmtCxCyvMPKoPpKY5hjyenhqBmyqMinPdPBT5CcrYfor9J7oFeTZbnr5SsCYHe",
  "key26": "2WfYbPjPtGWLqi1nrciNN5tMDfAL4nAx9dyn7js3ZWEijmrmLNgSZRGeST6m19DMLeaTZPCS7zqUu8ejGD8TtxJ8",
  "key27": "27FhvKXVAjkb4SPzoqZ9sFTeBJPYEHidFySEauX1XuD3uTW4XUvJ4j8bWFBkApHZiunGFwPWmecYo8QnXG4GHyAm",
  "key28": "4E11kgPvV2Pq3PpAfMB3wYRrfkcbGMQ6SEJ8wqsUuyPx6YFKHyKgEfXu9GStNiLPbkw9VJzSVvt7buNxWHJUZXsj",
  "key29": "5h1gxeUzP3LWxJSbHkxdhCXNxAQjFuPgMSmZNX1uo18hampS7PvxHxmqq2F7n4XCVsEyFVEMx8Mx94c3cpnJjq1i",
  "key30": "zxLfv9f85KLfwTb4uRG23TuYE1teer3kxm4dq7h64yFFa2DagexVM7f5WDGmzg4QSbbgmGHe4Wt2Djx752ENT42",
  "key31": "3TUKPdnW9fLfaDejYSSFbeBkPtcMJbNrRCYurSmMDcZEYHNhK1uaQkXTXBfd6QBb97uTpDyB2PUuiRrqFeRqxWnb",
  "key32": "64AuPDVATmfjdMw4ngx2iWNDP76DYyztE9vY1hdcaEH8qGbWxRFCWgPNhXSV4aJhzRUypUKcEK2gUjahR4wQkAw7",
  "key33": "47DCrrkrjXcyJJw3Ync2ZK6tpgNALKJ7jFA4hSYZRU6tSjmVYyvf1SWtAyF4hKjU9y3Xme7DYtGNoD3YqftktkER",
  "key34": "2ftzGaa1aF1A8yDfUGySYY7Bj22Z7pW9sjQuV4y8uGybBVnWnJ8wX3ho23uzsMEVmYR5eUowf5H86Y1auEvWuCxp"
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
