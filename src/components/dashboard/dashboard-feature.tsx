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
    "WcoHV67Kf91bsVwmSRdwsysRp6yhjZarYccQAGrTJGX5DhvwY4CXMcU6GBYyAxrdds4CiwXKm84D8nh1ULFY6wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LwcAnGHewmkrgjs4QaxYSdhdtzHtQjGUWy3Su52wFziozZ8yajxUtbMA2DRqoe5MN2kQex5CKSWHMLmi1ApgsTi",
  "key1": "47LWL8bokTLPFVt2Bs6C51fGmv992d4VDZmkYCspsNFC2Y19rqGfX578wn5A4Nz7QxdJqcm6bra69bMq7zM6yp5W",
  "key2": "3PW8451TbufNrpftYfFYCusqmyP8eBQSSFqWcTRrs71q1kU7eiXaFqbc8SPDDYaaKJ2kiZNN6qWhQ6sSjCGTgAzk",
  "key3": "3ThMb9SALK1bj5Ba4pEYPPUq2EdMAA4dkC7NK2dYwKhGb2STLc8HZoWUJCqzYpK4PwyiP6F1tHSTUZQRqCMgMf3e",
  "key4": "272zLxWa2QG2SnBiYRRyDiar9GgzsjH2UU7zLoEqENRXfUznJWC9o1vL3LZmQj4qvr8zKnMnKoHVzYATv5dFiAUq",
  "key5": "3JofF3iB4YAx2DaLTaFxVCQcX9w8XkkpjdJM35HioxHMRN9S6FLZQKbm3vv1eESdVm6uSHheMEJH3f76YoPsuYW9",
  "key6": "3ssY4go6ZK2wFM262tUz9ofAKo9gk47E3fHauNgNU96Sr74B8EhzK5MawWXnz1KgWcQCCwtBrp7vmEHC4W8dw8Cr",
  "key7": "4w6J6JZhRsGo7bs6vrmikwyP52PbSj9bsyEnr81TKk8nv2u3cxM6GsRScbpXVAGY7RH6UmzcypkxpddPJnWhiDYM",
  "key8": "rWbvR6oQhUCX9w52CZaHsMpyUH2imk53CiKvtSuUsSpaMJ3k1tnsmmxfQP1Avj5iXt8i8fWN66a1iQ52ov8Z9CQ",
  "key9": "127D1PDtGcxg8ip9ibBR1XqSLEY7kBaTm3RsGxae2EtqCWpSfyg37usngGy9exLk3merJCeVwxDcNRiwvDv4BPYD",
  "key10": "3j6CjymzviD2uTnomQTkit8q7uyR7X24z9HeAZQxPB6cUicW4NcWDTNVwL5NgRM69QFnDRaAguVutmuy4qKdQDzS",
  "key11": "5P6X17ou5rsFTomLSM8cZPkb6JEws1YgkbKdtHGpYVyoespfD1nTwHT2HKj1aLpDGVUznQRMcNK7oDy5jpF2tUKg",
  "key12": "5WoVZCSeDrgpCEe34TxbbbjZ8zzax5pCd7ECqVabLDoy4zFugpLZdajsNkmec8UNfTTbayPc6v2ooZiMcq5aBfGX",
  "key13": "4PsYDcUNsYqouaw1BGTTap4VZMfPj55cDahVBnGqDFSjKq7dbA5gMSpAX3oqFM4DywLDr2aR3CFEwWnCWYSwaxgE",
  "key14": "5ALhCgFmQdyqCqvqULQJiRhYEVJQ4rqBhtprurLPZhGTY15YxqpEhXJMfioNaRxLVLWrH7iQZ2jfT3hq8Z4gRTYj",
  "key15": "4WExXtzuiTurXLUFzGT5RhmLzTKsiC2f5M61qSYpQoBy6B6HsHYPfaLpXSCsJNAoa28B9CjbyBNdkj7iFSgZqcE",
  "key16": "52Wb4f4TXt3FzJAmcPPdTVsPe96drvghu9YY91qBACTuKHSx2YqoTPtmbmvZJYHxVG5DY2i7UADR1xn9wJdqFMCV",
  "key17": "4x4NvCBejCqXkw4SdtYPaBs4TDQBisdYvxyjVcyTzsuff8Rcb3hCjMQEoCogM7dzmn1wrVjsHNV6r7cdkDSQJsz1",
  "key18": "42vEmy8kLbTVMsFcrg18uTv9zTmcZyiCgASBMAAosEniVXwk53jKK7igBPPx5WVJjrxK3574ZuW4fhaSBHt9Goxi",
  "key19": "wHFFu9hUs4fJnZGMTWG3UMUD2d1tMFAnK7U8UKUB79TUEeLRDYa6D8TZamRGaUnCAh2CKQwuR466eppWJTNYQWC",
  "key20": "2opT3FeftbWWv4iosThDkoZ1ztJY3gJBu3wHffrZd8M3XowquXYjgKobUctFTQASBRUP4TwCZddEDmadqTejhYJ",
  "key21": "5yupTdsCetzyj5b7zRaLdkkoSCLG6nianETqPj8SLNFqdYBzZRbdhEtE3ZPRmRvwcdV7xV7QSTp3g8HD91jiCTNu",
  "key22": "3PDA9mzBbc9ABNnmSULbemauFNGDCNrMQnjUYu1DUGHFx1z5qnTqFsqwQg9fsH9Qxtsvczb9oK2HK8BrEJA3aaKw",
  "key23": "3SpGxDDMseS2DJ2qdFPCejuDhqQd89fGyZyxJstzd4y6WHiJdPf2qDDdSu1j7jyNPkKEhvfpRoHwMtUotpBPAdo2",
  "key24": "3op55hGrtex9LJUWspfEs8JHJdaooCa3GzQh3PLz9w4Y9Xu7jXUhDrpdRcMkL9AEKDk4uUpwUB3qXihLEqDVzbca",
  "key25": "gMLMaPoYvbzWzkvoAERoGVUjoHconXBzhpnBw2DjtQ1N6JRjxnDdbhqfeQNiboukZwWk8CXw4bfvewXG1zMLmz6",
  "key26": "2JyBYvQKfTKrjx67K1LFfjWj4XAwkbTxQ1sQr33LMnXm9t3Mkmf16PWCHjPMzbKLLRQNb6J73yrfMxBa9CvEvAUs",
  "key27": "4FTGTQ2djGKCuMNuecQLJoGHwVcWf1s6HiZKpuozRiFab9VWQFRgfSThKfR9d7FuYppoaXLp5qygTZzqZG1jntgS",
  "key28": "5Cppcp677KVUrL77atFP3wMxMyZeeAXPxDGwrMNK1ELiFeasQBn1KXHHhjsodscdY18pWb6F87uaDq3Tovv2ybVC",
  "key29": "5EBFmjVccbWpmwhViecNkK6N9tCAhuvAkWfmz94DvUeqHfYUwLdetbVRbxzdMt1GUMurx6RWkgymJQGbCVGQjCRr",
  "key30": "39A19vBP3KR8LF8Q7gSMaKiGed6kTt3Wvq6HWUAdpju6hVHKM1Zgdz7hZ7pbJHsMTABcc4W3s5ssPtA3Ax1pTPJr",
  "key31": "5igHD1YEhUzKUetc6UGut1y3AL4d3aUBMhRd8bpWBX47ZxwxHY5HLsCAyXDKsviVxw1FSfXkAEztPWdLPfz3uvqf",
  "key32": "pLgsSmJKXBLisN2oVQ9o7VY2CqNQABHhnHU5cJiabegD2xzompCKiQXAWoA2pmQwcTM96snSfhzCehoFbR4bHUK",
  "key33": "57b9Lwbufp5QNXbiJ9F9WuqjdTieSBZpV1bWAYtmrBpzBZzwFWNkiMppk5CyNxvgB5QHG7CkYzcEpMe7B6irnte3",
  "key34": "23sCvhsNwpXbLkadvPTBENNWyuajzao61herhg3LxqHmTvikK5yq7ov3AejMjGFVEK5fvktMw2f3xocVUEhGGV99",
  "key35": "3tGSHnHWRgmdKv6KgH8Tri9XCrttntYEJcAuqvYk4sZ6VcvczKwijdreJ2SEvcR7ZqmzPeQfw4NJQkmnSVJbug3f",
  "key36": "5THf1ReQQmxhMYJAFwqUeJMCC5p7kuzXXWG1BqSmnumSRofDiooQFWeVyBo5Ta5behCNGtLciXyJkz9LNhxmxo5x",
  "key37": "3ggvzeLhtJResF9smiJrU6ocggueyiQAzAJzWZKHy7ZzFPqCJ9UN6yGAE3b9XkpnZ2Yy1UqJZVHLKCYXwBqRkybd",
  "key38": "2ueLZghiZ2mGoEJkK9zFwKoxmYPXHqoutuhCD4YZ3g3BGEzg78KfzucFy2pVr9bKvLUcuKE6UqKJTNCbnzSJxjgo",
  "key39": "5tuUYB42bz4fgvdU6QUGJWuqbFVFgfsXY86Wg5bc9PAhbRiuWCS9JuecUXUjCnLdoHjg34kZPceMxRWaTqRYfigq",
  "key40": "4XsxmUsRqvSBgKkcKFEKiyfqD8LAMECEz7scjMVkmXSVufij67Wt96PCPKnb4HhxLbezwbWUFG7A9XpcYfYHYCGH",
  "key41": "4UMhpeEyrhBeeDUojUSsENvg6mhptdnNfJJAJxefJWtuwmkA5pK3gPKZcAGzskG4r3fVS9V2LSD5ps6mc3j6FSZX",
  "key42": "3AoFkuvvuWRuEDVFRwQMMP5i3Qu7iNWB8Fbd4p8EyPz3PhYhsMGuePeR5fEQ1rUNu89nQgnDdAcSz5m7FMb7RPwn",
  "key43": "2MwMCHsh9hQZibYMHSgzMn9Tmy9UN1HgBjVorCiVNs2THW7KeymUqa68ZobxQHg2r7iuEx6S2KrukF8i4ibW3q3t",
  "key44": "2RXaD4LK17vPRqTvAH4nQe6oCtDiYBYMudvujhw4V2w6t7VpB8A9tdgnajrqgxfUPmR5NqM7oW4PgoxLLUF8Dzwi",
  "key45": "4nW9fX4ehVjjycuofD7SJH87n6vVaBt7crhw8f5abFy7auunHmRTX2uHWHysN1b2HfTEXaHCAJ6Q11aSd9nbcNVQ",
  "key46": "63wu179jRjKMJGXAPEbtbfX4bPFikrjJtZN6dhphwZcUprUXwkt1BabFqyFR8soVKC4mhEQN7X7KkYi88VffVpNs",
  "key47": "GbfE6G2CTWabw3r9AaUV1r5SUR1NbZVBf1gThLhnfxcMt68sxsFyXWEteWPB3dq9o7XQsLSYNrtQs2o5guoEQeN",
  "key48": "2nQFf6Zb8EVxLwUj9dkdTBgxLFqRpdCdwHh1arTwGr5qdvpKiZs754We4EHB7nbAo9mBxLML9mUFk2zHVnpGzNpS"
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
