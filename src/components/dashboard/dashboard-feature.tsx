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
    "2DRwnYz9xHLezaMfdWLz23QjeaDcUc9ev6PTqKDs4h8PPyQQYewmAJbw6YRRwgLZve8Uyk96D8WrCRYwYr3RZY9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MXuBMbBKmkmCPt7ZyBpYxe3r8L3xnim3X96GeeY9TDjfTVbz1Ec6ZE6sbZVtaQZZhuUvc7x1QRjX43qNdR8CxkP",
  "key1": "2QMbhTg3oqH2vVrr1rD9u87QBGbpurzQ5rAyziPUmv4qsPUfmdZSw7W5xJP7or8M9wDSTbgUF9JnNvfri7DFg1Rh",
  "key2": "4mCM9NfUnWdXxxkTKhHQaJAJNKtXw7xGrb3umKfgNzehVD8DTBGQKx9vKDbfbYtmdbCB5yxwX1Phx2vhC1LZTQCQ",
  "key3": "2fM7q8Rqz6AjQyha6Pch6EULX2dqvdMGLigFDNUNUumuFqUaEerGKJcjiFJWTD9rXFaocQ32WhtmBVpDwRFScm1e",
  "key4": "41VULUFDfXYM2BRnPAU4QegH4n3Kug7tDaGn12SsxMvobJ5ipkDAvmmBXGBQbZLtg98VgvbB51KuPqLpjLGKHkqM",
  "key5": "hBeBmHoiBqh2D5p4DQZJARa9g7tVpDmYUst9YqRa7VvHmo8WTJ4MnAzUcraeRzvkWXoy32b7sJgeid6BaQq8xU6",
  "key6": "5v5uFeFftQi2Rh1sqh2sf3Ep2yZCgDDKvX6BguJh22JNMuCgTH8YWvCZLSqz6xTmedxTrgHrpXnBEADw3NiFXGF8",
  "key7": "UDVBc2K9vgeiRPxsjG9sj4sUtVFeXp26KjmqqBNeSsnyQ46P3LyuoXZhpwdQ4AdVuoskYjDGYysVZuPcSFZHp4w",
  "key8": "4emCYrCUXcKxh3VKrchJu8V9GmUukiYk8FzpQyAJ2khWQjgzwsyAmH3nmespCyEVH7tQxSiLo3E2Z4j71gxgiWsR",
  "key9": "2PWvPkMZFe3ZtF6auonWjNusjAaKG9VDi8Gc9nkxfTVnz9xRNB7cvVcThi39nPhAnjTE8uDppxL6Rbj7rkdWcBGQ",
  "key10": "4Wxee6TxtUet7vHCbFRByobP8GWqyALJHMgNJtu4VNbbfFz6qjbRYKoH6PkrW3kbe7nN8bpfdiaPxGsxL2x3Z9VK",
  "key11": "22njwYs8FQd8H4Ck8JYP6GeNnvvSM4AVUPuYhSHMx9dNbZEh456AP2wzqmhAnBY8n5YGyuWXEacnTU6zrrLSp1Zk",
  "key12": "44Y3U55fqTJyJoTSAcmFRtLyvtSuzzxATeAUJfGAGwfrYxDBTpx2KLTMdeGHY2ipm88nXKNoox3SDTWdGDk13bLd",
  "key13": "aiq169ncHkWFUgNzUVbqAP3xNu16hTmUyLvSdh624CSs5F9d4F6zBVmMd9D9oPpjtHrKp9pYDoJZEgnW7KWCRVA",
  "key14": "5Pi6FRsC3DvP5zzAAbodRWE7JVpJRyywp7VCyit172g2uuM7goj96JB5vsw17WJ6aJ8ZSdm6yXupKut4D4YLkFbj",
  "key15": "53m7BwvhoDDUBsqv5trCMyK5DSKtgSAuhmbMpSKm6rdBtekpnprcUvazdjLdjBPZasFZtaUtSQS3Q9oY1CBDKb2W",
  "key16": "39yB8S3SmX1wyVSpoVtyG7TV99oWdvKKH1s3wQPj2EqfLXqCitVMJ7EaevZft4DVpLLXa7r6bfjmRHzNJpBbmMRC",
  "key17": "YdYZJ9K6R5JBRmkwDnNMcfJS8uYzdrXehp6eff1SqK71igkJRmwoz8rTHstxLZRpKqP8Lh84WksBd7hrVacmG3u",
  "key18": "N5NiQ7HumWLsVHAtZGaTQ9h7QgX1Ef8Nqjaek2wSBTYoeBJbKvjRFM74yzPLMCwSSH3wne7mJVHZsFadxxLffDF",
  "key19": "dJXco3BqzvgLtdzwdmUhWbDFn96souuHfmqY8PTj5w8wb78FaZeYup4ZU5UHXt5zm85i3ZEFUuxsNGDs7SeNw38",
  "key20": "4UvKePR9ZMrBUntJC5MRnf7bcZUXfXeZuKStPQGjLadnA1h7B34d73XU5tecoES2UL9GiiFXZUJfcUf3ZPThiZi3",
  "key21": "31Dp37aANWXUvrCLLGx4Ka3UxSKAdWTjUnabFRNafSyvXqKBFZrxcERevCvZ2oP3bJGzv2Ym5k1XwtGfQRCW13mT",
  "key22": "1opKMnQMtc7gKoZgKnEyfRvYpQWAhuxhGQZn5TL1kYjSbiMPYM7syCYQkgvrvGeSGyhDdYs9tgc9retYikKSpWL",
  "key23": "oDNhsxbGfrKQ6P5JWhMY8aJfmjahTKFLyhzmSqTnMbJrvnKRFtSEN1kZiYPjiKcaZLyfrgyV1DV4aquFGntMb9F",
  "key24": "3AqgmuugvPHn86qhUTbt4EoUeWVv41HBZfoqEFFTwro2rqVEJQxrQ92fT3HW8pmg3WhkecBx1RERF9D7THy8TKcR",
  "key25": "4xZnHFj8UPM6L4v5Tvk9yce1xDAPJVGBXVMFBD3uQ79mDvnFgxRvWGT8xvEYJkoLsRWsqcfHJUp7P6V6N5eSAGEY",
  "key26": "62c4r5NrzKWmy7dAayPpq8FuURoZDo1ja7k8rUrbvaZNUhbaSPYL5WRnoLCau2LJSFPqk4JghxDRfeUoapm36YDr",
  "key27": "3jWJJ86FNB6sHBR6ZKFnPafa4MUwkgfBJFnfuC556SuBm9FkkEwttAvZMjY48KBWMdM7oCaMvvuYFiw2Sxk5gyQE",
  "key28": "35CMwL3utKdYjuy7mBuQuE9wuLPGgvCStqLQcSrmd3SrHGKST4BNWPw1W25Y9nNE5HBYE2TCNKTsm9mQPLxhAQX6",
  "key29": "XcbdJxNuTuH3DEX41bfFgqDXwHKDLT75doM8QMvaAR8SEjfY9oC848zD6PnJHHL67bH4kb1esFwmdL83vbo1hDC",
  "key30": "5EpkjdjqCa5gruSQysMSvEWVCDuMo6icMojYbMSUXSaeUgHtKkkU1sj9djLEX753oD79eE1UzSjfE6JG8igHaGka",
  "key31": "5sfeiakNAz8RoZ4cvj2r1ZJZC4dcKcshepw2GyCCju6woA8kBDJ8bQYVxzZGZ6xUHtWNBaicUvqd8r3139idVs1k",
  "key32": "3Xj6ayt3Dh5WkkgX2oY1qvSMmjfFmHYiumANU2tHhg6YMpYfdfPYbsrjUnpjvBhAvUv3sScygfXQpPeiR8sXw6Bv",
  "key33": "62qbBguZzbdym7DwwjQBkWnS8p9WnQSKqAnfkUEB7nR31iVvmzDpJ9MQvZdUnLK8q1VyLH5M7MZbkY63qQQdp33Z",
  "key34": "4E2QaNv4awPFZJkNTZBLMMR8AuB2P1APY5nD5wR13uy4JK5T9zTkeM4pRgUJH5qYif9mTrynCKKfiAAmAEQcjF2y",
  "key35": "2i1pp5Hy9by7wWXSKScQiw622VT5Eb7HwsF2TkdkEV9LVjY78jYmgsDetKS2BhnjdL4w5Phg4hdpLx53ahHZwwW6",
  "key36": "57WhT88Ng7SptiK4ckDre2P91bKQhchFhzjhaqa7o4QNCaMAo7q1int7KzyXrStzZ6kv8EGyt75WbwpKU38thmgP",
  "key37": "599v9HNCZUvaSvjy176FfDiJ4Wvsk6SYNZ1Fe4tFwKfpHmZYFwb4yqyBoghsoXTNv3LFGKFaPCd44qZqWdV4Fogu",
  "key38": "2kvVTd5Xe1Ufeve5m6PUr3oA4ZFPXcCkrv485VLwHxkrNPxcNQib7tPqJc79zDFzdbneU92WB2Uxvt4823qEoS1d"
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
