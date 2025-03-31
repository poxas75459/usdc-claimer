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
    "4paeP2PXayZyupqMaBVzG9e7nwQDNUR6wcnmxrjrpFEkLBLa5KzZwkgMgFTrjRuAyp6am4NzfKkgBHTV6xTmTGfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpVvpDnP5apJDnh2sx2DJ7WSHhrU7p8FX8om35QVnNkyrJmkZCwczvdQe69vW8jRz1fKSMdf7sdnK4Xn2VLFrRq",
  "key1": "2BxMvPnoaB3Bonic7To547T4EDmfksdeE9SJdY2T6vxLeuFMjRhaUqsLoaJzGVaXk5sQ8Hay4iF4NMSYxsHFhGvb",
  "key2": "zXcpY5iiBcQryx4H3C5XMsco8RCG7TD9eupgjXZ1fG7jM9H7g1m3fnZpA6vUqNmacPXnL1LxmnUnT6VZt2q32Vi",
  "key3": "vpndSUh5uvwuM8QFZxorueYCc4ArZtDhT7mZRaaC2NPhsVsWTjPRjByZccswQ1VfmjBwnfNjusjWRsAoc2h4uET",
  "key4": "3372BRWf4UZYfPC5AKfb97w735gRoxSNjr9SZPHM56Ks2t74wNqvwpEBQ7us3f9Eoc9ruxWESghF9YeciccH8hXR",
  "key5": "1yf8Cv2hMYgABzLgrbK9ojQdihW34hSuiyz7XiLtXHAWziDnJZWxBZsAhMuu4s3PkYAGaraNB3aRgdBCPZ5k9cs",
  "key6": "3e82fsWN5v1nuDTv4EDuYoafjpbrcddZ2DALeAhdN3N6nQFhxsJpht7ZnzYMP31NTpZZcwcW5LMkHJBDh5CSt8kf",
  "key7": "4EmMAMu7c8cSG8CFwND4qUUBBZpYzniAVFKXm6FPPHGZ9oHCAQBNSAxpEnJdfosvuba8jF5b87yHj8bjymVCrCoL",
  "key8": "5Cd8Liy4yMRhSYcL2sedMZtGiL3zNSaxdCiBN6aXGecS77ES5rmFUYBTDXBKjFiY5Gs3UpDF7iEMLAAY4v3ikLZq",
  "key9": "vDkVhtYuAmwtKgQtDbj1PGAst8yR3HmtzFqh7XMa7LAMyfALUg2LmdjSQ8shQ45CM24vNEoS4UTYDN1H353MzAz",
  "key10": "2M3A8SZo8xaaRtqRcYjC9Mm5Zsq8C1Ekfejek8UQLyW4KnovJTtgu4BGFCohAoN9WFeq3RhvKuz2PHEGEXBj5aR",
  "key11": "5pPvxnfEMDt9bGRzSySxGtxt6PWYZ7PNG1VopvKEK7Bqyw4bafDA4AqChM9t2UEjQUCYGWpcuH3eWeoHMgLgwkR9",
  "key12": "4ZaorrqLgMUdVphcXxN4DaWqNXoXY6tBPtZPLwh9Cuq5Ffz5dn46X3i2TnnSi5HZWX31hmjXMqWLGCwmScnNrEbU",
  "key13": "22QyYyvpJJKUSzgGn34p3n4KdjxooxR2q5ctYNUvvPQiesPLeUuGqaaHAXBTJi5c4kri5N2BtdCCYoQsXHwSsddS",
  "key14": "446QrTwz6toJK7mVqUpY5CfpMuofxhyRHeitkoqN2i83Z3Pw2JJZw1Mux5uA6yoJBD1AUMSyjcUhNgRTMbd4qtSK",
  "key15": "c22TiTEuTizPe78bETDGTsfKMqrWxE6GMr3G2HxYiwYSvDBmUT2kFBVLc3tatAAtDs15PqfmgA7UkyMh9R1mpVG",
  "key16": "5RiQRNU6RVcY6nUzAhvZykjkisFY9HqSfnqpgFfKrGK5shTL3gWpsShDrwt5sxUi5xQysv1bkrY3v1Q22ee7qroF",
  "key17": "2N5mNSm1UG3NCazwFuRBFrdpEyGVn7BfzxbWbGSWxBeRFJ7n54gQPio586PsRVGnfxWuJkEBqbh4Uxfx2SsnnMYt",
  "key18": "nyBNup1uNMSNtTxhCTfubHJGTHRRqNV82NUobB2UpSgfM5tafzY481Ug6FWXBzVB3tsxY2gfCKxv4gLrMYhfadA",
  "key19": "2huDstizL2oh6dSMQ6xyLhPq7Y5dvZaUc7s6uuLqtGESir8QJV21C361jFPa7Ji3ifF6jaAsotMmn7ebWogZTEu",
  "key20": "QjdwPYrocD62jrqdNwRq8X8wsC34hp9w1bo1UUCKvD5m8KBBNB7mqG3q7XFmLLh3JTq6gNFUSDYuZVtqYduobS3",
  "key21": "BC1mxPXJhbWZ7a9g1UGbbDTTBarL4kmFhcuRv4xUWgZwrmpvkCrDkydTKxXZHFfBmh7iRi8noBxKqitGC7eoU6g",
  "key22": "4sFkEKPY28BT5iWsX1PaHq9g9Jit1CsMD129neRU4dHgidaYJ6iuXrBLvhRTrCbDzHzzHMLB1JCyNLFrDhTge1A3",
  "key23": "2JVYkSo6nHkptz3iUp1K8Yh6nrjXR3LWYtKBB6SBWy3dgLZzUqiM7BYew5QoK8bg1JvxTjPcBTAnzPN16qiDzjDZ",
  "key24": "3QHzch9ctVib9x2vtraZ5v8485cXFZSJ2yZWPSLPJHt1zwMHWv2n9i6xZeV8ubyWp35QEcn4q2dFqeXJQWVkUPsC",
  "key25": "9wG4KESAouQzEAZyKKHnd9GM8WVXYMVmefpvddwpHunmgiFoVipPE5wVQzoxTeQLm4abpok5nJFYWkJvVkEad1g",
  "key26": "5PtfA1jrbhu96QYGRHWdYJs5B9T1siG4z5Yhi8j6sraCc2KLu67GHUyLUJ6ffwR5x9rrZYQib5u5U1YjafdSgr5z",
  "key27": "S3DsM3AyTzE2PtX8RurwJjXh4xz54o8U7coS6q7riM457mciezvnZNpiJ8gVxF28ycG8JVZgh5LfcjqiEShHMJ1",
  "key28": "3CpvpYHodezovj9b67zAbRWRpvSyA3RKihKrQ9EDJVZn3Ry9tLMiZcjw8pehTpGTgWYMynCEqVi9wut4yZwwTPMp",
  "key29": "65QekqrJxz3aH3UtQLw4CVTeJsojezaoegTteKtsFvAc559hiy9wt4G1XSsCLPyqGLmgsKwktjReUrdy3gTCf6eC",
  "key30": "3jRyeY1Gwuzd9P2y7mz1J9XVyPsVzbPHh4VjzC2f929ahJq2aMgxDdVCi3GyXrqrbR2p2Pp3YXExvrNxCSDtKJe5",
  "key31": "whZysQ6ngG27KKbLBY9FN75n3V57Ui2Em18dWTRooApNy6Na7DTs5B4HoxzHRbqmVivvECjqv2fnyh2RvTXPHAv",
  "key32": "7R5167K3KVmm2pVQ9RP5EJioL7TetagJDnvKhZviEmRFwLNgm3KSbXqF488P5f8sjv8v3JrG9UtSouGiwnAQFva",
  "key33": "46R9AZ6w7ZpA9CmHpuaB61mkkZWKGTuceKcYAQLAyhLaoa4h5aR1Z19P2jBhvjWkkyoe1o1JAX6CwkisZye3FRWJ",
  "key34": "2H6a3zPgz5ZBWSsiyb24KMY1zAFemn6GkoQQtbHzGx5ikfUasujQ5StLN5XMBEYFitVRsSTARoSYf29uuFXKub2E",
  "key35": "2E56fo168Z468UQxk944d8snJUgQSBbKWn6zokU8M1izR1XtnXERiJeCpfxTh2jiBMSJpVzz4emYPjvsoit9ZdPm",
  "key36": "2XXxpk9oC3vVetZsWvQHdFhWPhHDqwsZsJftNxq8wuFM8e8qDR9i8p2Y8Lu5gCPMrCQK4NeryegF72HxxaYg9YSm",
  "key37": "5cbTaTdWc8uxXDFhRs6f9pUmxDW7UqwDdL8dm54idyF4M3CnRyNWEpx9BLcssx5G7msPuTGQXcWHxMpGqGKtTwLv",
  "key38": "4FWftTML6rwvu1QD5XSKzEFUyoGdEYKoSUDTWmYA9PNxSq83fBmYYLjKMLBWVvektsqha2ipYDs3pajTq7MfFSoM"
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
