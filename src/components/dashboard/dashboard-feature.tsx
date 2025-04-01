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
    "3o9tmJN8WY6Q8Xy5jaRGVXWjDxrUhgh4FQAMkxb1frB8wQA3aWNGdqtknFKXwLgHCdVRjn5LHYLds78B58rL3DEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ktukztgXcKjkwEVBqPsBqsrgqAvpv5fjNAEhofwzrTAZCGA3u93KZ3K5trcTAGfk3HX52pEJ63d4xTs9CabFsg",
  "key1": "2ZdNf7w3VG1HcTRsqrfQcnW35AtNHtRRfAaPJXysiUgSPDn2MJipqaKJH2JsBEV5Sec66wzdx3hYK65cxfY6SYcT",
  "key2": "AeeSymkGeY6P9RFB63Q7zJeet8DXjvf5NMxR6XAPpB8Tcju5UDCcVJ18nRveXSJnrpKRQ9f6XaRNDRyjg2ovuj6",
  "key3": "2j41LVwt5Rdfoiv62GiABCvFy3NZhZbYNYnXzMHYoUfo4HXgYAJacR2gRTjCpJrAwMdnTWcfSFMu2xiAvGxsiFzx",
  "key4": "YE36K42KNLiT4aPNNMSvQHyFiuHU7wUoodJc4VHA9X2DJv3meAMZREpeu1ifNPLV9KUiy3nTrTtckZWypFcDf3c",
  "key5": "mkQcZNERKMxJbGFvG1pCP9o7HM2EoWDFsiQMNfcunp4PohiQuK6yGj31XeGWFsFrgGRDZQC1ejYPhFuDyffFdRe",
  "key6": "5Fc97m6vqt6DPQ1aQ582ZWGVULkpdZ8tgDfbYhkw5GZMtWgfcH2782BYEgAXbDyY19q9iF7KRRQ4W1bC9979XzM8",
  "key7": "2oBPZQJ53xWKZbkZvqGDxAe6dNNtPvT6D1JJA5eLzwFsnUw7LvXuLz2FZCiDUoLNG8Mm3JP8tdjw6nW3pDSSbfWt",
  "key8": "2zyuUYuGvbL9fQ4syyjUPKXgB36NVTrZFcWyArBczioEC9GaiUoERCKivoQEcfMhCLQf6wrYUtz48V8CDssLS7uA",
  "key9": "TFFVWdhXfrvhwSCRWzPprJEi5Vu72SoLgSeZgNcgKhPq13gjABBF9XPBNmtnYeHBYdyQ7pYv7Zs2S4gaYBmwR4f",
  "key10": "4kXy2zgWDZEx1Robrzc4fTLvdQrrU4FZJaWiUvoq8aDsNZdrCTkp1HvBKnY23eyERp6SgEWgxzAKXaqHu1jDre6w",
  "key11": "4DfwgVrkR9zfcsAKdMikE4FDy1KqzbJRRF5j3nxZ31V2KPAGbZjW4Gdmr8oWFaWWCWmWyBpFmsmMnzmquNY82bwa",
  "key12": "61LWzA9gSaGXvRqbpC4CbApyKk9paeZ6iGueZqpwRwVVJq6ewD5YgrUmnxAFuJvu9qJM2eDinvy6fQJKPK5N9d9g",
  "key13": "5A2nvczf3aZF8iVeDcffghBeUxzb6HaPFHJMphy2z9y8HB9Ls2nu9UW2g4D7UGVTPBS2TF3zEnqn1yPd3Un2yAcB",
  "key14": "4efAGsK9pNku6YBghg4UrnLFvLAbZeTqCu69DLocaboe26GCnK2399Zf71qQCoprPpZxVZZqwKUWm4HmE7wGcFVU",
  "key15": "23pz1gt1frBcUPLyjR4FvZXmgaWL1GVhjdakwByMebAXnpLY3sybiATj77T4t2oc8Rmgid6sNECD5vM7tdomq7Qx",
  "key16": "3NdovEe46aFbwsTVz4BXoNw6g5ppxDVFcbzYoYfPwZPovx6zezTmoDbR7iAay8jzhZHv2Sh7kEHs5xtYdg1idNBy",
  "key17": "3GbTCiZoyULwQwziLNhfCpCuxvymi8p4qY6bWyRLDbBv4SPaWiUgi2dXAVSRw9YJhk2cmavw6EvhJuYDRQWBMG8B",
  "key18": "4bzTvP5iqsFcztU57EsUAb97aW8MshquB7cNnRs9nZ4jNXKCwLUhu8e2yJkEUjVhZmc6sGWqgCDxB4EERbknRVCs",
  "key19": "4KnJhJ2tcUUCBFyTMdWe29XBzoML9pfug2HAS1sCvLJRv7jCpqrMpkL1P52PXNJZJNkcPrAeFZ2qLLwFWKPyBUB2",
  "key20": "5Zk2PXatVVn4tBe1aw1fACpwJg6eWm2M5EDEYJUXKQcpwbPmrPFartHMsVQvSypqFMXiwZcW1HQKs9kNzFzYX3qB",
  "key21": "1D9v1m6aeE81ARiVtuhfCqrCvzkUovhE3yDeqEeaz56EiL2V9Ew4NhcVYtRrXkVypjmihuBH9Nw4n9kM9kYjNyA",
  "key22": "57rnzFuLEXN7XGq2vwFidBmiHBQf98FH4uKRWfSu9EeWBmSCZRwk6R4E53qB52YNVtykcomwoA6NHEvtsPPxKZoG",
  "key23": "5dHKYQ3tsW3qqLoo5nUrbAzMwYmdJRXn19VoFMga9XyUWe3ESC9UrYndkks7wMCjRcjb6sDJaZhTR86wBfWDqPvh",
  "key24": "4ogEKuGYAwmJxn8rTQesGLm72UmCMe7XjSsEhCUyt4zuXC2GWBbgpXoFbNdKPdX54drc77eywMBFW2opp6HMzYBR",
  "key25": "5AcPeN3VA1ULPjbxgW41pVgRd5G5DVmAdijCx32CRUbFUxyP8Q2YfVeNqKLGrp57nmoupgjqHzbjzqstDy9MHw8c",
  "key26": "Gn12xrapLNiMzWN6D7WF7X14wHgrtCeG7KAhEqCcpo5EUKtDaQbJ4vy8RHcJLj2rwiLpcnW6Vifg5PqCpSZxcWU",
  "key27": "3xmt6cn3fLTnuyBG6YCnx5ey9GVYM2NYCF7vKeK5nNSHDJGaNLZsQebA9m13ef1e41H5KHDxAo5r47gxTUWxko9E",
  "key28": "4gKKRz4YXNb5Gn395YKfGmMDdyWU9bQEW21L5HzK9EbpsmaeovD3NfTSkziMPxyaxkZ6fWfVF94M9HhSgGieitrU",
  "key29": "6ayTdzKhkFPoZ3Vs6KxYCN2DRTtWCLNiCKMpfGNUF5egt4QCBCejGJZBZP3sDosnjgYCxaxZKqXY85SGwmPLouG",
  "key30": "2VaJcHrvwo71skQKMZzxZCCrwBW5BfSWqXLaFpQwoRYkFKgkFBF3AKBjkRMxm2Wv4YCbUKhMiEjtBqfo8sT7LCkY",
  "key31": "48vPqrXRecGr7AucyQr2UWVxtT1VRQ6ppo3rH9KVAn9WS8ep38n2QpeVuQfds4M2wjAyGWKfCDBeeEMojvXdCZiV",
  "key32": "4veS39ZrEBvL2kZF6HRJztneGUvzo41fBfWdmCPU8q3CRQYWn6JvrPWGVsUbyoP5qoDUG81MaZqFEaxpy2JYu1iA",
  "key33": "2wszDiUzkUSitndsucMLKavpZwSyshLxNqrB7P82fsVjbteit9jEY9NTaiZ9sJRZc5CJE1Vos6Zzg7MsVkgusdco",
  "key34": "5srKKJmJ5FAWZpdPSuoZFyv1zMc3w4gkY22zsCPNwWusN44A7hS12Bx25EBhXRGJKfr97GmzuX68NVZBKyYp7Tvu",
  "key35": "4QTmqSqrzPRbUrbkvUCAwZk97quiDmZN6dfHyds6utAwcFGSVpxB5SGoLygcaaFWgisxTqj8pG1LNnVUE9ySWFWu",
  "key36": "MGZZKNs6YjuUpQQWCYbfz38ThFJjKKEgbUiWBcruwsccsCt1CgUDvYukw3RHuvGGfXDoBzbuhunwPP5E2mKkrTR",
  "key37": "tSxKrp5Nv26QC2nTQhNeuXqtswX24mVu29Dk7wVmVxJjDwgM1WHT5cDsFoTVpAt1incHziEQQFbpD4P1WTRWrbM",
  "key38": "41Rceztp4gcMwnyhdoEYZEGxVWUDCbE6CeHXXHLyeNWrFdbyKYFBRp97uRHfRvFUkPCdNbHo3i4vK44dfzcYi8ko",
  "key39": "4JkBiho8qvW71PknQLjojjVoDMHM82YW5xHVyvqbmzMyrKbEmFUS756gv1PDoiAXrvhLaD3uWv9cJMeVHdyBLTDp",
  "key40": "yCv15Zzyt2YGDQJaavLaS4WU1yMZsNpFZ47MZT4ETEDuJYpAnwwiCcpZ1wnakMU6yYMzGgFicGVi81iPomgdkiX"
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
