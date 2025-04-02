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
    "3mwgtHJuF7sxRLyFihzuSA54UBnZAJKqLBmie7fMpipzdwDGUJRTNipFMReSgRC8qY3w1dzbug9TMK8LNShcThaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWDG768fXxZ2g1Fcjnu3KJHtVSEAK9gSR8xrvJ8ZTXWacFajc5HmRYYTawZHfipv1Th8h9hZyg1bpDTwuCUZvwW",
  "key1": "4MvhoQQ5K1xioHEiSMxYZiDJoWFBFo59nRrYJ81sQjhPj4tHWC8db6ydoz9iMGZYxa9j6Fuo6vnAXw4jS6xnHkvL",
  "key2": "nDWShVgKvty2fKGzBkmJPrJdw1ZrXjvRk8FGgZipDcjGSh94b16MxJmKsUEgBzvMaAbuhgwnbJQ8fYWYyK3dFfN",
  "key3": "2M59x48Lw8XU8vfFCPGJ6fFJpCphB3YH9iBt5Nqzb38JpBgYSrAgDgryRCxC4pP2EghaBKK53VpYNG3SKXUxJ638",
  "key4": "3z7JRZc1NgN9V6YR6vWc6m5dE1NEafWSKLWDouNG3Uo6SxyvrJgKpyMM9qGMmCTqDgrxP7k8aBZ5SJ9CnaLdyC7E",
  "key5": "2FHwjQcTwUEUcKfuZw9QpufetdNdW265HW2xmxcRQfyJKjrEr8usu264RUgwwP6HcgczkSjQhTpVN4Kwb7q6cyKE",
  "key6": "3u97DxrQgscMLys1su31vKwkEDDjtTfUre2PPHTnhAxh1oybpuj9cgSipsJhJAUDqQwt889fKm2ogSSqfM8RRmwu",
  "key7": "5kGv9KLagF1cRK255oo8bmJCqXqAeMhe8AZqvwX2PbmUVgN42vdhdrKHMZibNQMGnFAVwmG5z1843cvJ4xw6M75",
  "key8": "5KFesvFzuqQVo6WnE9b2z2qaaaNdJKnRyJNfGkdvMqP3acNXAVzShw5AxFq4Rxc6DLAMxEnawaHdv87dEbMWvDqL",
  "key9": "MJqdQYoyy4XjnziSFajwkhozwbihLeZDnwH9MEif6bUCic36TM3GjdyEcigNA8fhLMdeSSL4Ze9rjNBUYfu6ube",
  "key10": "3MaXRwPagxvBKqKdJcCpuCE585VNwLJpLH5qfLtbAZ9qbf14u5kyNDxayboqsJh8uodUDPi9wTkGWocFrBT4f2T2",
  "key11": "JrrvHSveUCyPRPU6u3qUnXVjoQCyrdY8jGWKDYy6bgiqNTzus4K4hG5puMu8AEzzxZLvSoKYUe3uHPwdgP1453o",
  "key12": "38edAMHBDFHCXGnWBdnbFfJETTkgMdg6bShRzuxJhsyU3ATcsaQYjnPTdvG9t3M3Ym3vp6TpGgCNZ67GAbRD2GDt",
  "key13": "5SKBJrx33GvRZimVahBg8s7DR8tU55Wj6vcPU2Tjue4keP6KEANoGvmKVgVAuM3B7xdEvrRkfGsDfcsbc1s8zTeC",
  "key14": "3f5njHgUvayNBh5XqM1TeDmECzTL7D7CYo8VjE5jyjssThF4hEPUESzYzAFXZBQHxiPHGLJWeBPZpEyASZyrXZXf",
  "key15": "2kccgzmYA6cLDCPydUioYnh3Uy1aVUsquAdSRRMRcDEPnwyUhKzUkft21WNFwRjrMpeWx29XJDVGYFTfRZPaZpSH",
  "key16": "Ksj7RPeHKsn7GEPbPdumvzW1NgkdqV4fZWBBPrX2tD7nBDp2owy9xACnkoYu9wvACmDZdNX74HGskkvN7Jj3UxM",
  "key17": "5dCvqhknPEWTpNiKgxsbbfadurc6gGncKPpTny9cCNBQLuCmN2bTTmuypTpG8Pys1SRHnxQLu7c84KphDhRtrr2H",
  "key18": "49bfkP3yNKjQGJdLfehDdXnCf8avUwYgYhvED5roNJWwamJYeRij1rfdegrZytSgnDbngFyFryPiuT6TweP7tC8U",
  "key19": "23XTRcbR7FLXbLr6RSKZo2jM7EDGU5uCX15ZRPjHorS7HjBLvR5vZcwBURxguwv86BQPP4tc2aEb195XHNYJ2kns",
  "key20": "3dNs21BKskfQkhx2veSMybd4GCPjNhRMdzWmLpJoP4bcuiyXUZ9bFjphvCEkoVu1FR9wvhGAiM25A7eA48cNSj5B",
  "key21": "5t4hwB21x8JrYk7NhK6MxusV9sRKdCGPvRAJp7hhSpdaNatWe8NhXzPVdKvzDF5QL7gdUPsVtuvEKKhQF9wW5pa2",
  "key22": "5EGmqDm2p3LhLuJV5wWhNmADUZnWdXQ1SBUGbXNaNbVAwGe72CqLJHsR5SpifzZq2UJCQCiVs7UihKnytiwnKNrD",
  "key23": "4Z47LPrkhGTM8QAV9GFHt5gjMq7bfAHZnDNpjWTcpJz7cyLTTsHAw4w3oVuFf9roFqHrZC7hsofsjKqiyMRT68yt",
  "key24": "4eeBN2sEC5u9CTVX9kPYf9QY7vPtFkdz2ckCwNSjX5wrzo4zbatBkyUViZq7aeVib8erC87cNgLzNSzk2ZwDwP45",
  "key25": "4AET7fP3q8KyZ6WBkM8aVEUQEEfE4nkJTiCkhpGdpx9RoUpDiCj6MFKpzciiup1Nr9B9K2D49dPjewBUBfo7t2CF",
  "key26": "2Xi5MWHN1mcWwyuGR2nY2D88je2w3x34xTFBTNC1UwepS8qCny95iJzQVVH3U6z2KNRvH1akwUF8FLBhSYkcNxGg",
  "key27": "56AuYfevmq9geVJsGJj1zhxL9TspyhkwTCkcMiLFdLhEU3AAuVtaT6j6QgjkXr8fAetiCcVF3BxY1WAdzH6iQeVw",
  "key28": "35nbMqXBHrcncLYSSppCGmdeHNZ7qxbiaAVYZBYcrh3RYdvsSBavDHvPCJy88Qq31G4xmb3fcC4BpRKSGztaKpRK",
  "key29": "54CF5bJmyJFTcN4i9vwXwhJ4Udc3ugLuUnJRxyLhZvEKrSsQ4U1YG5SFr68E6NCXvDmmrqcuqfe2SiKG43gyH4vD",
  "key30": "5PMXHQ3ut4AZMCj4zikEfcr8SnCSaqHsMMY3oLVqWwygrbGVHRaH2xvecbbejdEde3fEoHZGQtETEyNXc6niG2Px",
  "key31": "4CbnUU4vreovud9TV78yenxcz686KDPnti2wz3p5xPMadTDQ5kv159oPNXLfu2to8zisFcmisazVL3h9uutMyff2",
  "key32": "5Wk38y5y9tGBrtiPEZwfHwnjeevY9KtD31XnGWd88JnpXWyCPnhvatFCKNS1GTGWVYREDE39d38GaSAPRDy28GFG",
  "key33": "5ScPr379ainJdSuVz5KbNHk939iZR1REZihbx4smq3yXgtndDgN671qxcdm85xcUdv3aHmTpCUA7szTYrzm42tUk",
  "key34": "3qLwz7aXUjVw94oaSrUdxSpN2d5egnvU2FNSQdyhABT2KXaLSfbEr6mP5VXMDtdXFhN7RiKgqV3SxcTzF4GWoCVy",
  "key35": "3dkQEiewBzvfWq8gnQLwaoGLNZNZv8AaYZRMFrAw6s65xYcYpvncaj2NbkBxmfuFPdcqBWMLNU8g1XLgJxv8a3aH",
  "key36": "2ZN6xrdJzbjSk9nib6BEQV4UeK4Tg3SagtW6sUFdnwQgyEHcoZfVkBnvLz4bHati13gUVW8qdZL4qN1sjSotyPM9",
  "key37": "4xMpmWjQVAkUeuoRt5ikEVmJxH5eKE7XzjWzUrrmm42KRif3Tp5qnJad8NoLX5a4RxutW594a5uLq16KNUDmKcmo",
  "key38": "64d3MyihzxE1GFfMP5FFh2ZJb4C8CJ1eUb2Ay9rSiB4JJZdnG66gh6RhHhhthASNzDB2wrMrKL6xigm4pBoZZFyD",
  "key39": "3xcpvTftvJ2B5m8bFvgt14FuJFtKx4ihEvYSvbm68qHQaFQd9rsZqiSkpZGyfpCLGQVNLTf5uVayMMWQHDD7MVCD",
  "key40": "4nQ3Ss2Jn4GvZ4sdNhJ9gamFtUxVPtf3dAAq1aq9QNnsFnbhFg4EKWDmyPikAr9TMxitdEKRFsDgS2cxkRGhahmz",
  "key41": "3F47vbFZD3W3BL9i7h6FLhsmTSbjxxZjVZ4pXPSHrFcTpkZV9vg4FtrHqZHBAWGag1w4K799aj7Ab2wAXV53L88n",
  "key42": "31xMkECvEbXUd1bwdyaWhHxnotCW6JjZZtA9iDLvbJN2p8wsQB2kUmzQHUtVRArrQj7vwuRWn7E6FVMFiAM2N4MM",
  "key43": "NWT2f9dQQmS4mXxa2byZ7By9pWrMemjopzDsB3GnTq9Ynmc3TrjxpGLTGq4hgpDxj876LYZLSDHs3aHf74mdxbR",
  "key44": "3iAA7ZaeruRJHFdx1YpZPCiyZ1foPPJaww5VPiKm7Mi8raMwMfj8ucAViGpCvQUMkhMvw7QM2h6MNsDKWU7CVYZp",
  "key45": "M1GX3EduRiz8vHKV5mBKnfb8335JKoBjeyMe5EYaunjdJGQUbxPwPeMgoFYBAZrbMRSXaFJ5kiXUo4RUGcGoS19"
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
