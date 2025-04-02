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
    "4crtfzqHCqvwjf1RzdGegzqaEHnvsBKkpoC5GMVirzj2gtErYXvFMcwn95T9cN7oee5xcLukV6DoaCoLR1pqJd24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjyssbtmQogyCaSHrajHuc4YGJ9KPV7QvNEYH51YzSz6iX5UDGGWQRz9tqiVkhGwH5FnRvXRxQ4xTSMd5poRQMd",
  "key1": "5Y8dXc7o5pDDnvBvrQmQ6u3239hkhbwsqqFykVeNs8j9XQntvoJZsiWU1YK5PPQW4imzbH646ju3HFNsutkuEha8",
  "key2": "3k5hHCMh1NrXUDMAKuwQr6DDYbBEZuMiNNPeEE8LSMbK5jUzWUzz8GE4ycTJPozeeczmSVXvLWNk5Fscs6J8yA81",
  "key3": "3dcx4N9NpoZFWuoxjrGaqdGqA7Ve6exUq28cFMdruke9kNwskzGZCsfSwd488UrqCuXjk51zJkqRKGdoswj8EgVX",
  "key4": "2nXQHHHegLwHX9c6devRfwGvBzoxB8UfZ7ijZZZEnX6XFaXXXQSHZYhH9t3u6kZPgFd5odzZXXvQMhhvbfw4mXEK",
  "key5": "3pN3tCu4dog3jn34vNHmwSrkz6eEcYamu7fCdNZo9X8bxgX2qhEXkzRfGcN1V4gbAyyAF715AxvQvkTne5oHupQD",
  "key6": "4MsHzv9JC5DVcrQWKu5myLPbYzebe9rYfxhWaM1g4g3ByCA5okZXoajcJ9ubLLKfhjYFqjnxak4UJJKdRwrytcjF",
  "key7": "28d1ZWRD4P2GgJcUdUxqC2HiDn2hCQPFVMLu14jcFxsY2SwQiLPtQnyfD5zw7LwZvRygAKLBSzchoydrU2Qk6isV",
  "key8": "644i9KZM6oWJUDbd2mDaJ3KwFw2NdLNtbw1weCJgeKR1ntPYCsqWQZ5iZ1sbxAZcz8WzfVp5oDRsxfU3qYTpMSsh",
  "key9": "3WZ5xo84zDatFsb3sx8iDPaZvZBYHtieVnWuHC3QgYrxh3meAU9AySPBYkdjdQccetCfcjmTNcNZy9fiyDjuCsZ3",
  "key10": "3wVNUSeseVRUaGcitwbbFVeXDXqqytgBZf9mAnos3xeu4EiHiErbtboJ3cuCAF4AvW8e8CzBjaQoWJr6bpk1ytYL",
  "key11": "43JK5UrikpUQtfLbXHPPZQ71rjTDmHHdAFeb4r4i8dLM3NzTjR6kmjqoksGtiwkS8LN61pYtfJhdMu2Pv2EXuDTs",
  "key12": "2k9AbQWm2YJY2T6UoddxqgnDc2GGZsW3kc44GoeCNcqL56ZZUKaGXTogQiVPYMGyutGyKtnJbBjWi24TwEHnnnhg",
  "key13": "5ZCaLwsWD7GvS3LNGK34dhm6oerJUg78HNdCCEyZaLT5wT3ZzkTAVa5AcKAckbLpkggJGP7ASxU3DCF6q7YRdMCJ",
  "key14": "2QpYMbmCGMBcHedQHdcMgpMdjCHPgi8PHBtdx1AGVD6xPAL779tXLjQ7b9Jcs1ztAjiTTthZK9cAX59bV41iaHcb",
  "key15": "33wHz7JvtvsmusDtZQBUv95sbR368hN16Lp9xJqSa9Gu32gNGvGygY45Gof1VGi1bPoJkxTr7wZDrViGNjb5ShKs",
  "key16": "5QbLn3XKroPcADCYR98DTnc11SLeuW35UnSyvqSMtsv1boP3kiWvUQgPA3VhmkaqRpeQCFmbNjNs4yXChMcy8ERP",
  "key17": "kBt93SuERno7buuL33ZZYse2ewc1nhUZ863x3H9sUnxVr6q6wq7LwVdaU9Juo7PfFS6KJspESFi37hncUTNDQks",
  "key18": "2Va5Mg1z5V9w6KzUJCZZM1gri86Pu7LbJyrp4eyhP9AcGniqbw4NjtKvN2HKPcxALP6NQ6GvSemuRRhzwhcrQsYt",
  "key19": "3X4qMzL8u9MrjvcWyyRdteKPHRDgqiCvhtFguokE4NWp35d2BpMt1gjXbjDu8xGFCdbJvVbQLMf5Mbwe53xJ8Vt1",
  "key20": "2M3XGV5BFDpQF52vkBoQyb4ThVfNR1RWKY1HmcCRhJuxBZbamEoWoo6a2DykDk7nxegiS8FNXTSm26AvCRi3nSnQ",
  "key21": "5a6RYDYBCRJZM9UPYeB6W7fsurmtnJmJ5cueXuD6iyV1ZrMCeg6Txt9UcjEq4DJ9QdVcPfAyKJKjALogpBSz6GZv",
  "key22": "4Rz8xNuEFUAVUjeSyxutgMMpgUrFJy3Y9bNZqQKyb4s7HYh97z7pcTgVECMwnhnpyYJS2SQCiMH8xqFaiqY7xgy6",
  "key23": "FpMTH98kSxwNZ1UsXhaFftnAZqdphA6yMwzCqAcAoSSosHPKWzwUPLnXkDkSwBUYS8PrU1HcUkgEwNo8SK8gy1q",
  "key24": "3MFw2iQD9TsdcBqk5PzJMhus25hBegD8r1ecUy4hiya9d2iX4PobyCxCEEwJsndHek6DwnrLCZUKZMtsmDmLmWL9",
  "key25": "3MmvWzKu5y4NYMQzh9uu23dFb4J3br1V6V1s3Bza97fmozQ3Dx17HfU2PNqEsfpACXj33KEBRRXNJfcxb2MwTR9P",
  "key26": "5vpuDcCzvsRhMuosJg2mJSjQvBvr2qhPfWk5jZxNkzMCRLiupUUUZ2JoKEfSnwBnGwhafGwaENQW9xhJBm3cZrsM",
  "key27": "UuZLhG4KZ1xT7kNiAGa8S7ybgAjfTZ3hGqKLa8PiAAGNTPNjC5B2W3tZzw1sN34zoHGfAJVzEgKG1RHKvX6HLDy",
  "key28": "4sJkTZWgFqEKwA9S3TdW2E1igF2YSPELboevMcN76QXHSXLhwWUfAtm43cQMXZDZAs7qbJS9qRLYMzVuqiaG65ad",
  "key29": "44WLp9BqoSiA6H8mcZR5BCxRj1r76vYziR68KvgfKXeshHcGgykFzzhSt4kucMjieziBZPFHBQNnuZ9nNEb5pP8R",
  "key30": "2yW7dMdtaDGhBxH1qfu39da21Lmdj1X41GVt1bCy3ubqiMwQVEanj5pqjvbnSbrdDAQ5Ys8v6LZhPosThtSxb85A",
  "key31": "2Upgm3FkEsXWSqu5ByXk8D7XBZZjVY4Xh7VCzWVVX6CtZ7xTd1YV8Kuxth8t1peCgrZEF2Zp5EnVWa8jJBPEZNtm",
  "key32": "284eTMudTFnVH8bau3U8STx3ZTXJbhcaAvw9hwM53Z5RkHzjpiHx8thz8FdnXxuetVvNu2qJssxVfgJfbJEdqABr",
  "key33": "4MNxKVkWRg9pPHanhnqYbNevhvw8j3aehdtRLMwdJzrqF4b5SaJeSeLoZ7dDR8WjxJ6mq5TQ6RCXTZV93suZkJzF",
  "key34": "61yPt4LX3ti1g9u3zHjWNpSbKr89itx4VstgXa28oU1YkPjsw4hYHtaj8iSXDvE6DfFxe5MWPmkNMBUbUHzbwWdT",
  "key35": "61PFRQQbwgW6gVwkRx4RwR5EQcoHhZwhCZ6ZVa48vQCiHvnmVUbhpnjmy1qdVw4MmFWanvdroASATFxRixRD7SAM",
  "key36": "5D3FeRij1mKMyEgRiiwfznPYKySNoAgJgsdbafnHYHR3z21gdKfhTL8GBLTXTfkheycyKtjVcmYQBJWmZ2PhfDDg",
  "key37": "iMk8Us3sqCtnoofAbWc3jsSdNmG6r5mnfihFdqyMVtLFhhAxaPkojLCE8wGNYWjsMyiVu2ubyroSfD7Z5L13N22",
  "key38": "4HB71JTrPiDfHeYQthHvXyXQrLLaUr9C7CbDZtKQ42BcnFBYBzNRngUtEoeZGtzLN1mJXvVDhDDfYxTXngD61MuV",
  "key39": "3r5FXKqUsY3jvSijyMRNWx62s4vkKzU2W13kQFdMG1wWdmAd4aBRxr3y73ApNzHXRncZRfGsXrXRYPsBiXBukKQm",
  "key40": "4vALE9x9vUtUBzvCqAyZG5mZRT6JSdxQXENQ7UAAibSrQPUoEoEK2CPGztimqzdt58FqSqr8EmZpdYCbt7UC3iCn",
  "key41": "4vuqjCqobybENQorgpRyyv8SARrbid2nrnKxadirLLqoPWetixPDQTm4ySdm37KK1bcJ1K4PYqTgUi6sqwAows4u",
  "key42": "kURpRGfa4f3SzfD3Yv54J7Em5np9an5tbEpXGpgiJZDM8kVT9Df7EniHtiosu3jLVnj2asuPjDxBzi8gucZ4jTB",
  "key43": "21k2Mv9QYQ5T6fobHdRwCHDZHs7bF4nMuaoWWUshM8VcLuY5PusnXtdxGiPaeBuLuBEqPKQrUyBX9wxaVd4Vy6xg",
  "key44": "55ttyk3RMhJ9zmq4MLZBrWsBPGBvtmQFtaGpWBBHjXDtXSCMnDFkanXs5nZeWi5iwgRWfqbthVwsfA7dx31PBw5h"
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
