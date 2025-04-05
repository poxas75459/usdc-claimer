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
    "5Fcww4BQe6VC9EPALTALFg2ZqimT2rrgKi4hWeenzRkTvGV37FwvnqAEwz3fhv5FYDB6iDNsq7vSe8tB7MMk2Hch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NojZ6thmBDVM4Hb856tUSEhYQjaJGJRzKPv5AtyGfyp5okjcnina8dimURAEh1yZkzffs4EQdSiZJ6xEGSZePyF",
  "key1": "3CocejQuX4AQFZUMGAHN4xmXpDGEiAWr6FzsjYiWqKcpGut81FuVbzpo75xcf8V72rMf5T5j8qK3Bp8QDoUuC4jQ",
  "key2": "GD2PUqkYxhe7LEZJhFuAouUaxrH8qAVUyXwDyPVpmaYMoUHdpdLLqYFDhqPeYNYbBKPnArPx2ko2B3WGr16yzAx",
  "key3": "63Wu3t5KBohLxFcFCTR6Js4vVdQ6gHZ62k9QTR2DWAg94rdLsPfe7bMER4SqbaZ7pLHrrNtgLSGUThM2hBvXhhzx",
  "key4": "4k6pQx27k6SDwmjrFn9JoAQn98TbkgoEMBrBgYFgBH6tBo1Ufbagqg141SdxpY3mdGsnumcvexEjfVJrxSJxR464",
  "key5": "2WwfAkPcEfMrvbthPkBsnJTkfqPSiVUQcqJUE3JsV8fkSMF4mGFXTiFSGdZwN2p1ydJoRW9xu7HBBmc1D1TuMFL3",
  "key6": "37Zz4S14LBp4c4KMaypW84e92bHo7tSMVbEdi9hRLoMBeYTLzQ7j8eLyqyMZYn48WatVzziLRH1KV3YrTuX74qrE",
  "key7": "3f49Xg4gnoNfor8zwjQHVoGVYneQb1EVF9JpuhjngqqNtCcBdWh639dvKhvpHVPJrzhCA1v8SWtHCkfUw1K6tFYD",
  "key8": "66rP3a8zoXdiQGDMJqR6aBsdi4eEaXqTNXqzcVdBRGXTxQTnSKKsSVHzQ16eVnKgzfVkKm2CAZCQ6U18hhu6Cq7b",
  "key9": "5L7bHbXaM3iHAaSeZu27FPqbUXRXVZC7QCsxzxdi4XcDk3HsvB1kE1aC7Zjaf8mJDRG6cMBCximj7esHgnpfnqDC",
  "key10": "5Fy74ReebVPqSynhtdE5hXdceAMNkVpB3hPgJ7VPiAm6bxqSafmagXjjK49GLDwc2iohFsyMnjfAicQTaXRmviUj",
  "key11": "5i2BXAET9mwLUAktHmE2mErFGTm4NkxVFmu69EbGd6PwvPWoequ6FBEotf2n2TkDZDiVAu95KmJAKFqRtm5DUxbz",
  "key12": "3CazCg8exX8n4tLt6cn6nGjAdZRJ5UeCtteC1ebDG6vEc4Rgh7Nd5MgLwX8RGPT1MWyWqNPTWx72CYVM6xKs6MCe",
  "key13": "4YEs2F86dzFwTksxvDRLcyy5cPj41Ub4yNqf3ysD8fjoYXbT3uyQ1AwTBtuczhoruqkay5baAwoWz5BFhLfbB9SQ",
  "key14": "4AUXchSTjVGfGxov4LUj919feZS87wmh8yGUP4dohvp6V7Z4cK3YBnTHt3WS2sz8KAVCk57XjVKxGp9E2pfShh2J",
  "key15": "37ndvKRYkMcBRUexNtRfGR2YnTvRuxudzBUbEapUhS2MTNbLk9sH9encCBT5mNSadjt4rStiP4qsesb87iBjRUwm",
  "key16": "4KHzfq2qLCuGrUQiDaf6cHQtxgzwUR6bQ72koTmf8qEJmjz1PpX2CX9TS6rL2G6ejuWHi3EwsHQUasgonrtQbyqd",
  "key17": "pU6VfdbzPyr7jnqw56TEBxxegiUfgc1fMpf9GvUfJFAXMprQX3fDM5DYpfExhjjTBTcvjg6aThsSr3XMXAnTmEE",
  "key18": "37NSiVozUq4FpjgWcZP2TuS8j8NDx3zpNRzVqj3BAR6FXnfVAeJqKSc3KzgQEpBwaoA27Fui94C6vPsWo95tg9Gv",
  "key19": "24q94tN3mUTLptx1ydTxCc3gYcKSmpkgf4aeb1nLGHCM7XUSw7WZjGFss5wu4xz2eoQ72fxcMLypxu8GUmBAuHZW",
  "key20": "3U9GccfQ8HEHXRUg8k5zKbnFQW48r17e5sND9PfxnwGcg7uHnCC4kFhir48dyYS2wgkiiKQEwS6rg1iXPUYmvLFt",
  "key21": "4AmvKyMFmjr5jAGXq5wa8RxwpjbJau7kUpE3WH5Cg1VZAP5MQEUbwoiP9o855M2sg5AFb7WavRn9zmrQJPTECugD",
  "key22": "3DGShJp8Z2ZgZPZdwLYVHbh513rD6zbNKrVx7sh7crADc2dVhWHFznxHYmWpJAJ9PQqM4RAdB6BfFKxP43jHXSjs",
  "key23": "5HJJKq7MHu7u6jzEppCnS4rmxnPFE5YaqQ6WTK4u3Dp7DqUDd2DN1iDeSnpyHM4mYUBKo226V9gfuEWrDsup6kWo",
  "key24": "2vDtULYp5F6xE3FE9bbhKMNF1hWrxws2tN6u2s3JKnMdAKcqStT8JBGYoYs66Tfjzfka9g6e7T5xgnSEmCtyJWfv",
  "key25": "3BrxReBV2EC6bMbrca4K2ByWqV2xa4pfgTYVX7gtHswbEdJthTuxYZrhTXgcyhPmwjX2VU8KZyoGvoLgVtpK3vW9",
  "key26": "5YrRrnkr8A7PcBztLaGowyMkt9dTJ1cVfYKiUzyD4A4vcjNSxZcHgP6DRNcxKVEjWq1FpiDAYKwKyjHkcAXtGkJp",
  "key27": "3iS8qFcfDmuWQBmN3gWgcMnswgs25DnmZUR7ZGWrR9gf35nK9C9JM6pk8wgx74RHSYpBaYosBCKCsnGpQR4xSKg1",
  "key28": "4PBgYf4buVm1F8xBoMYNHnZDen17V3tEqAFsvxzYCwVdm7c3uG2g5Q6Qzps2HVAMzKfV9dZHrsQrABq65i1kDPXu",
  "key29": "5pjGadhTCs5y6JjzsffKhD64YqmsHzpTwuDvLS93WWSkC9ModLwT8awCVDDGVhFsNvHteZDYYUXGRVNgAtFau2vz",
  "key30": "4tpvfQrN9zfitvBMKAFdac9c5UWaeokUeXG2Qbs1PHYGvdXGH1sCzseUrU3x4Kumv4EeVpx6tSVgb4g5oJRKwXrn",
  "key31": "5ZjF8X4GfCh9xUmi5K2MAHkbE1nvJPMMqsVGbwzEKNQi5uTGfzh1dUtuyZCTiuhH8BW5TCKEMtMuTaFWyo2KgtJ9",
  "key32": "3kS3XFqNYywrXE6P1y9FKdr8i2KAztcHNwzSTYZ3bmdoFAJVPUhdgN47MTKCZctCLc9tTo4dDpP51dnHbNUwtJE2",
  "key33": "44feFj2KTUNt5EuNn45b6FcFKA3rsWZRvm3UFbSz8kxeLW4zzYtfwT9kRVEFEGgmXBA9q3G1bSbFRUBhk6jfvprB",
  "key34": "3sDvrmvGbpJRooTkrf79TfGJkqN68s2roC6j3x73BQQ3zBdq8TM2uUJ7FxgMd6s69n9f8YPfuv5VghLMSYHN7fb6",
  "key35": "kJpEog3MsYcSi4pvWwDuhwLG4jKQS4563Q18Pj39oXCMSXEBeWFi8VzAVb2ijNQcsPmmLcBA21N4apj79WBMhs8",
  "key36": "WE8DxAa5vEpbXjRiKQfiHum4ByP3tFnZa2FoXEcsuGbw2swa13GDMp72gbs2C4fGxMvrooBaXw9TZyxqVrYALfs",
  "key37": "3FJV9SL3niECXghoD974jeRukWMSkHQdWWbhj2BCQBRLfHY7WS3czhE58CaDR6oonHcAn1NVkxeevC57P5jbET1T"
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
