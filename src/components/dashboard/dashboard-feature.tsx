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
    "5RewA4Mpqu9UeZbcbjrPqGEXWWgYTDJLNePnTTJFpchGmMrehkBNDCNHLcuk3vUk5G1Cpm1pw8Ri1JWPWg6HkiEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8Zf7yrS2UxjBmK5x5oQfduJMWE3szkURVSAhxc9SinTgJ32pzbtiWoVeHLryPAPnnXovsQ5t9zLxY5pcc6o2cs",
  "key1": "4dTRhJD6PfodVvZCsw5pd164x4pfYd3P9ZF93TJV7zvdXSdcNLTM7AsyBA44Fwy76AgdLNoQugryrgBEWMKf3Va2",
  "key2": "oybqf9b58oG7f1kRFB3vLsKWDAwt3r32zxBCKPHYq5WcYTPbzAiKjhdsNqvyqGvN7KdRNS6gQZ4xhpyyiwtovgU",
  "key3": "4D5vn82AGxvyw7Hpx6PUHXbN4HpUTgn54bReZbifa7teDg81EpPxcXkmPHjtd3BDjKKX8pnvVXZZcmEiwsCT4grC",
  "key4": "3CDNSzPBo7yZpj1mJvxqMtojSGJGFEWcDFBCYUZ72MX8KfKBZV6vWzCdp4X58JbgNE1gCVpDt97iBnZf8McWwn45",
  "key5": "2HtftzcyhZ8FnfEGprNhbDa9RugHEQe6nofPaVCrMGoVtV32J49yTxdBsqT6J3F5heitozyD7j4VYkn2atU7P7RB",
  "key6": "2mRtoq45x2XnQB7s1485ct9xFgDvTpED8uEji8pSemY6Wy43hvcrrE3UVgk9FYeofiwiVS8nqFSE9U8J17VKYfyY",
  "key7": "4KXbug28ANfx86D6yZDEe8m8LYxkPX3KBEQiYKtchQBRTmstLTjVnbx5C2ZY2H9sEkY44CUqz8PRR6X735Z1ptzw",
  "key8": "5YJebEvK1fpgKcXxydpMmZVmanGtEpubrkGt3WaEBERY1SZXAiKVdZ5Jgm7qq25ExgaKBNnvMnGGNhwUZCskCVud",
  "key9": "64XkJMsM6Pk3sfkKUpj2JabXymmzP1nYKJg4eWwgLW4zALX7mJFvbKtRJtLaKZ3yKcf4EcwKebAXnZhHWk9RyeAW",
  "key10": "2YqUZ1pu6NWESu5YGotRaKx5EvDLvicGBRg9Yi3sehNPCQyshbqCrxJZwD95uLA5TGDQsswHRXhT79hkpcqoNQiq",
  "key11": "BHYmwLZ4zqCh6RYWCTMwbxbwFdWsk7vu3P6ZPqqL2kZuguV9t2VjDDCDK5AvRLvx5n3KR6B7mamrn2A1EmyRxv1",
  "key12": "Y2jA63U5ggzq7SoqBkU76MPDR2aMDVVbvZpLp8APyyJwFxd4VaPHYVQnyTjYgte49QKYQuSALaJexD1uG67hJAW",
  "key13": "AQ1BxB5BCa7gveZz75P7mkbsJsjgGQzSHQmP1bsJE7dWN18ii8i891zDYy5uYxwDDpmWYXDuR9t7RpSn7VVyphx",
  "key14": "qeZrPrUJzgAtMAX5Egvb9LR47PK1JWMbaU6BE68nC3y6BwNLnfXYs3aUZsh41EfSYeJBPbTNz4DzAZo4bjALMEh",
  "key15": "3V3R274HriZtbL7rv3BCnYneU8MTn47KEjAqphA9MYhyeoBNoUa11u87CY8TbGsXmPNrE66hfhB2XtnmiGhk2dnK",
  "key16": "5fpNk1KBSjzDxQDm8QMnCPc1cwvrheSedFGM1PmhWfmarTCy7eEw81x5HJo528By8TtAXVbrMDf2JkSp5CtrYpEb",
  "key17": "3Mtfmn2269xkeLN2hCEyrkHa7RRP11nHKNaJJFPG5cKTgmNAW1uePse2HE8kRm2Zfd4rfs2A6cqsJRkUrPWyadHB",
  "key18": "4y8ScCDvQbvaWKAtwduDXzNuncPS2UwoZBWceuupZSgs9UWdqtrcWJ7RStjnsP3ouV1PhH5mKNUhc1AZGKyGCZWp",
  "key19": "3URhJYMs7428o54WZ9nxegwgQVu8RZqmVcDbHdH1wRTJiDBgAfmv6a3D9urG5V21dpBLomYnbHM91KSwgdrSkcep",
  "key20": "3NZnNRQB4fTeftBJUzxjRt9XtmDAcEUtJj2M6G74Qt3xPhKvsHDgS4i7B93AQdMJ5jQp5QjPi5aesXT5oyUdGYaB",
  "key21": "5LVqByCvmm7x6SjVgWciWq68vpn8ia2tJk7HDdeQQfFmoMUupoZAF5JD1KC8xiWsQJpuqRPFUC1QWd7dCKg62DHi",
  "key22": "2RAoYEdjkd4Lvf5EJhmibkTyAK1V1B2pig2vhgf6KSS6ZqdcYKfrkb9AJi8E2RMdcGJrMn95gN55Dr1KZoKUcmkY",
  "key23": "2waiXZDyLqyGp4K6WiYGwZKUVpQcSQrM13XRbevRvHLaSoTZsr4GZsqcSZysziBrPcDimhA5TVaqLR3BhWQJv9e2",
  "key24": "4j47iWhgxPQSSCmHvGTyqQoBzJyNQUWbW4ujjoyVhPrGgmp6iWYghzdM1hUeFafFsZyGkESGPHncd5QvyjaykhFM",
  "key25": "2qs61n63cJNH7tpc1S4hg3uVZsxFn478CeBiuZKuZPwnPdJTzCBisLCKzoVS6ZTYXbiafUMmceoueQem6irvvr6u",
  "key26": "2rrK1zTPv6VCYc5XGx2dCVbHxaSobQA6tZG44yWKbDnMQshfciU4uHiKjAh4HosfAaoGSfAZ4Ghr8W42TFrJVETw",
  "key27": "4EoG6TxqhL9vt4MipUaZods4BySzL7WQ5dYLvLC4CbGeBHyqR5cQVXtUpjP3YfQFHcVmUjg38nQmBhFtt3yNqwQd",
  "key28": "4GARtzGJjQdBheWqYf7eDGifmdLp3QKtMhaw7p7E8JAZEBqNQkT39qFi9WuYsgkHXQrF3S67JqjNJ2PMn78BWwQb",
  "key29": "581WZBfHRRsYF1ofpmABVKnDLhe86nXFn5e4HXXgYBjW1fQZbVaXFFmugAvbf31hC3kLxqPbezJUz5D26ZwFWJux",
  "key30": "59incbjxEG2MkqS5mS4L6wga4xANiEw9ALPijQougEcqJ9kkx3gwXAnooNd8LmVSSA3iFzXu2Vz9WyqixwJMJfaV",
  "key31": "tCgmXAHcyNQqhQExmieAepWavscPmNi7ZvkXpufeVcEMR7QNZNjRm4PPhpRodf451H8s2UzQXNdxvf5tYoaD8tR",
  "key32": "4dWyuquGMjP2RffKRT9xvQ1LZNw5qgM6YnFLnejV7fVTaDsNvwwcaAmM4ivC8UkhKNEGaQAmn1byJVDHtypn6Mqh",
  "key33": "4LVuH1SU92kFoLSkdTiGMtbeqEMkBaKNCbw8fppVAZUrfAQERKyBRnEWQdmntJDAHFGr2BvAikQCau8D8p7wvQgs",
  "key34": "4A3yLpdaijrLFV5Q7r8DqmRjq6tbDs6mU6ViouuEFntJzqPnY5TShQAXz8zy8MuQUxMDUoY9uViXHQU5iYAWgT3R",
  "key35": "65wtUVddzEdMgsJQFzdWdibnVgfLaWnoLhGPrb1tf5GqxUEWeiALiLKNpu2QxTakHhV8PcU1QYraWVVknpBQSTE4",
  "key36": "61uRqqBiL57kxZ5sp12ag9EDZSuU1nbnWFotUQduSBTnki1bnfyiREPsK82xcXV9LuSqLadarTkk8N2qrpvbSHPL",
  "key37": "5oZp7MR4Z5WY3ZsZ14BG5hvhwUHoqmcHPaRVs8ybDqgXLFfCKifQ6EwNAxiWJJgRJbZ11jWNVxcuBWep9N6STWLd",
  "key38": "61eBN81gtALQXZS9AzC6acxjahgmrDZyjn7oyXMnscLij3x9FTgbqz3uRbTzM4reb5g6CFyPXKjX2HzCfQdtHXph",
  "key39": "59ZzcFKQV6ymFQS6oSv2oGA4jnmGj5EwsiNVqLbeQwfD4A7fibgNU1tK8EmeYXUPwEpNyDwkFd7dzPCFhRLZLGin",
  "key40": "4P6iymbiwgKaJp2HQStHRhCNkk5pbsuoKg2jZj9pdwaQJgWX3J1wucSApCRJ6pi6JYRu4nmAcVjEKgJo6jnfrXr6",
  "key41": "54CgYt4R1rVFtuxDhSuvfMFzpGAKGQfXjLmtehwfikdokzALZb4CavW3DvPaaATbw7kSPXrviUAQtGe5iVpPmU5b"
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
