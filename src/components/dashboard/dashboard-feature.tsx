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
    "5HdW2K4Vyeob49DcjZ1FYwoPpP1kQzzudbjo7Rtkc9SJpNE2tfX8j6J3UJo3kN1zyZ8hcAc7dnRytK8LzWrYJA4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbTNz7qf3ySRNG4bX4cWHGFkKYjQoKGu9oLNzoqE8fKk53sa3scceKnCePCNXJssvxUktVw9r2qDpwPDrqpdjB5",
  "key1": "3nWNeKvrQub8N1TXZbUQEXEXfA4QoFA1MkHL2B5oapgBsRWvvA3f5DU2DwyUYTGKfjaqrkUJJYp3Nho4kFfPKiaq",
  "key2": "2dAbNdiZB52gk4Jckcv931ijqm9L6uWQnmnkECTFwZD4debrKekMGmXkDZ1b3akWdQJJTqNG41V3vifBLuJH8Uvx",
  "key3": "5mB4o5D62XixjYDFPZEsMauzSwRbWbufZ1hjJg4KRxEXaTfvgeM9k7BfcLYcx5Suvnn4eCPmC17ocWr6sBXgUPQJ",
  "key4": "3uekW9agCBD38wYvhBn4xEEGGgXzP1hVoPppB94TJwDg8ddGt89jJbi1Zh8u4pwT42ThgKDZqfnr6VN49fqq7nET",
  "key5": "3cbR38qxx4zkTnZN49xMVFbPZzVG2XtvacM7NaV1SQCviNmQm9GjAKLirvm8PV5FLyeBLh1NbDnDtaVVHuvRsaAS",
  "key6": "428MiriZymutyZu7xDrNEJnuYVJoxKvkGfCvtvWhfx4nfwwB5dLugSEmd1B12Yz1ZXgEaX9adZ3VbEbwhs1Waxpo",
  "key7": "4Vy6YJd1Zu9Rfe3Wn9TEDcPC2riAbHPVqWXSFS998myKEvScKUsA9Ao4VNz9d6mWpCW7QYqXoUvfodnGFt9ej6vN",
  "key8": "25VsSMjC1w3t52d2YJVHjwcm9EXSy2ieBrJU9amqauf9MvfztR4t1Y6fiYTcQEtGKneGgFRadgDmBLLFDKsiULqG",
  "key9": "3Fc38xfVruUj68Ak4Dbj5x4mrPRw7bfcWBKCKcjhzwJDPtvB817zdyxZu9bHJ9Hrj4PWSjSKDDs2PZHziZSXaC4k",
  "key10": "4kUutZm9D85zVyoQNrUMMdv5imraaeVJm6ymAkTvh7Vat6Vax2fVZvbcdcFsXexdsQnZ4va4VzBonCp9gDMDc2B2",
  "key11": "6zrZ7Qm4GV4PeasgZnffbWaqYJdaoVbnqoK5dmEU7voSsgVf57CLwgHDtME4FW87ox7KbsWH6j1WmWEoQNNnczD",
  "key12": "NBuWPPtHHqPcRoMwUMd391KPrcKdczGYgWPBT93b6FeSMn7GfpsH6qtNkMCGt4Zd4qMERrv94A8XEXM94GiW6VG",
  "key13": "61qzesZeZ6B1e3r5qirH7C7pwZX4GQTEKd7bYL6seFQcLfqXJaUSW11mQa42dTdRiB4E4xPtuDd5bFSfiJ6RCwmf",
  "key14": "2P3XUMS1WhtGNDjjZttAScY9b84RG4LHLJgvaViuPMGSom6e6kh93YvMRbt7XeDdn4GaoJzAosCiP52Nc2ndtmys",
  "key15": "4AMa8mduS78tWgEwNcbZVToh2y98jg3oXguvpeB7jZXEy1ojBugZAVYssEo8238LZi6uQ619Ue9oD1r3rUJLpdj3",
  "key16": "Jfft5Lr2bh2Boggx8cuBP8HQxVEogLwnkRj5rG4KiF8J36MG1m6wHA4ZPerzExg1SWyg4MdUscZ14bQ5xKFbuMM",
  "key17": "4h1w3dvqFQjoywEN7bhqhGcB3bkJayXApMNJSeCabHS5Xcf5VDLrCTi2GJuUtDez5c7TwTiEfbmr62X4wJxsaQoE",
  "key18": "46ohZnTGDZ6jdV34Lu8K2bJ3C6UWKNUm6trEDndvZ9pVdCCzTvPR1chf7iGGaUMa8WexVfZRL7qCpew2oGLB961R",
  "key19": "4JMJ1ZEEkAU8bRzZypSL1ZURyMAdFoMa3eVSqS2WWu9FnUqnyJez4bV1jpZ8RyiZW1n32kGgmfbfL5TCHbSYdhuy",
  "key20": "29ZDzVJNVs5fxCbBp1JrijUNJ3nHK4DRjv2AkRfrQ9hqUQDFxgwCjSYSSpdoiRKW9rCzuurxmfLSfudQecFXvSVm",
  "key21": "fkEdhXXkoG5fCfFb1Aw2uokT87AvoWrEtpa38TGaVXQUNy7pJdpxAo6wnc3ZEnzUorVZnoM9phQVZL3RCTiJ7YK",
  "key22": "3j87zWhMoKaKCJm2NSsbcdCUH5N9pChjSv9paeQ5HnpFqTY9P17WS9QbVYYsWYkohYpa9bHVzvkVv3TiapvkBSpb",
  "key23": "5M5V3HBYCcmVfyg3AiUNmyKQG5URW3HHenhzSiC78cMverZP3VsrZQDGFuBnqnQc2eCuYAYD4CKXFUqNq3d6LaJ3",
  "key24": "tzKv5LvES5mCrLaEKDiFh7zDqgdeC1668n476b7YJ6Ag1KFMfDUFW6F5wC5fXY8KC9bcN8a19KUorNq6n1KuJaT",
  "key25": "55YWUboNGYDmUppX2x2D1a5Vfq125SkDXb3YmjYGYQdFU4vawCUcykE6RJPFHmdERuQFcLnQzPbVixZeRhVpjTRD",
  "key26": "65XP5JYrs1VnsTVZ8L25znEEZKDteRKETnXRbAb4ovyAiwdpwzffiN41gGD6hrpqFW863N25g6CsdqHwc7bEZfhi",
  "key27": "2oKj5Bjcp4Ypfe1c3r5ug6MZtaZ7zEQC7XyT6di8e1ybyna7hZYHjP8ZRfzmFan74sx4epycbbY3FibThurXUMxB",
  "key28": "3k4kdRDgc35Gw9xVpmiruz5V1y2PCZ6YxTyHt3MjGZXbK3z4HpSECt1Fg8y1zZLVGBjFcXM5czm5p9pjqjvch8yf",
  "key29": "56r2XTD3VQdyvMGnJGeBAXKRBi2w4X7Hc4m6uGKxqyGes9ttj7Eb8mFv1Vq2K5ZKNRG6nFSoeFN7YrrakbLavRy6",
  "key30": "2swBKcSYf9oUtEDx8gZsSU9Xnwq8QamydEnLpaxc2vPYzuZ7hVxezc38XVcmk3cex5yeUmCPvxEpXaadRsqntZ81",
  "key31": "a1NjdjZivcsFPXqVtTA6Y5CHqzGsemH3rjMqjswkv2smvXmdvH2t9EkRyXsDZ7MGnhbhW4KTj7vz3u8DavPCzUV",
  "key32": "37QZzPhzPwyCtgyxMz6nfPxSWTWy1P4Ya4pta3ZWgiToA2iB92CB25HZtgGH4SEDXNYKdF8vnVWUNsK78Zx3whGT",
  "key33": "rWcPNGC3sPuhvFS8zfCe3ZdmH8adJAktLZkJ6YTERumPr6wSG3RWdtojw8NC7LvvF1B4zeW5WYPS2JdtWHDAYtH",
  "key34": "4C8AiPVnwH1uXksVmWMK3Hu6aojWZdqkoRqKATMZP9JJWeFAAkyYBHkXEXHTvNnFzGHUSZsqdWDwa2hxm2YqYcHq",
  "key35": "5LLVNiZfzuncXz6BrYd2ognuQVS32MZvwcHP5giot27M8So6Z141AhzFd4yWYQLKoxqwRzUwEbCC1Dm8hP7t74jz",
  "key36": "5cp4y9pQ5Zb1MuM6Sd6fJjjm5MtLj7kJ9WHjqEWDxvpsLfPDc8zBtur3CpgDn1bEM9tEARU7dqmswWucezrSqi8t",
  "key37": "orbgrP7Bu7xVDYrh891LfVHZ83FitF3xznQN7Z3UrX4Fca3tbsWQ6UXJiEk626Pysx3rgrew6JZ8CG8qoWfSUf8",
  "key38": "5qznEEerFuXSN7EcobGygorkTaPjD1Mr9te9h4eg34SbF1abicqTd7cLMk6DGpbybZd4mKz9nv189R7FcuFD4RPN",
  "key39": "3zbg8HfdxtmgX5qsV5JGwVpqBPbac4i8ZoGWknALTtHaDwquatWdUU7VmBUwNK7VMShfdt3o1qcwhXUiiEnTg3e5",
  "key40": "2oyST9smXtSP7JjeVc1or8D9ZnF3HT8ZdoD3MxegY4KXnc3hNnFeHwHNNNAXBXpJRW8SuPYo76fhGrxEcySZSR88",
  "key41": "2aDnJwTS3iWRqWDpYzxqsuYhPHpxdhPd4fxQCxzg42VcrUTMy3RytV3u3oP4Jo9ghA3nYXNyK1zEZgRvPWoeKM18",
  "key42": "33fNJ7pVUwBxx1H6L7gTvHwSKrtLRKAWFPmWmMvFLkxBPMtESP1PQM13GvYeJnBxtUbZffx5C7kGKpcrmQo1ghX4",
  "key43": "5RVyiZgXqfCVMexz7qwN4orMwygZQHoB7QnW7nQCFjrxSP5yRwTMoMwTpma4o1tzHMQrhFeqDvfySTwqB143SXda",
  "key44": "4zMczmkFMXvbnRGqdqUmsxVesPdihJCvSXzeboQyosQn31h7qH1XYoJ7w3rSebAXKS8tRmoWL3dXpeiQ9AnpMmPh",
  "key45": "3pBsNFLYZzc6j3RaLwmRqZGMNcNJgsXYggBb1QAZQM7XvaecKLHCMjTiZonqzjvvqgKzG8Z5v21U9Rh7RYS4Jcfz",
  "key46": "3TJpz1BxN2Xd31RoYAe44cehrK2hBcs46vFWM2Jq8TXurCocFpvGzZgiqABtMWAVZc9sXzXxGSajF5KaZ2fwHdrT",
  "key47": "2dBWUiQxdyFBzggbSmgTkWg6Mecu1HMDjUvVGKywG2qztSsK4pfobcpixN1FpxJmWTsgG3nZ9YXUw2fFroR7EGBK"
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
