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
    "3qvhJtVXryMHjG1bGKbEpfexJMm7yHFviQTouSs4AkARYboLFK6EZjGXoT6uT67SXqDUx6bLmLHqEnKSS2kQ39k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vQowQzoDZjAMyC33rNc2A93mfJirs9yXU1FjLehCXtZkPvmUoFZg7DZ44AxU2mn6k1QcuEuSquBe5bSpdQZ7T3",
  "key1": "4NjFFFuXqqnf3pFQWNAR872xvpn97JadJgKp1waG5qPnFHcr3pfCStUFvTci7qRERSWUtNhZuysC6GYCnDk6JZQc",
  "key2": "2zMxEaRbzPQBKFuoneTnJqT8Yh9cVkR2eoeVqtjnGNbLTw4zo3rxS7HuS4FRjZnCxnhj4EuuDFHKaws1ZfSdqdtv",
  "key3": "2uMogaMtBavg3VkEkbBLdNFL1WMeDDzE4xG1uypNomYrhwtusmurPye451Ye1mgfE2fEANRdJ7pqxcha66H6xxdz",
  "key4": "2oYgEnwT63erPCAfuh1S1H6YUt19RGqT2paJAxhYnYFghArjZDx9XqVTJVxg5583K8z7u3wMr7BGhvGPaCXV63KM",
  "key5": "3dSdwDjeTvUQuYRCr1rr2ef31BFF5hVcTxoKsua4rFSv2CC9TBGZ6NbY4FYSPG68gcAWa95yzUbxRBxKv9erHTxf",
  "key6": "4Fr3MGftN4uwsKEguJb4SYKVjJqhBcBmMFerMdamCMwGrXm58Mnsh5ug4QqRUg2yuZ8fbUFrVMQBK8qk7fR4ePrA",
  "key7": "4MYewNYW3y8CqBageAqKu8Gt6e33KrhaCHWCuHuLRwKA5bRWXB4B6Z9FsqAjJKgQx7iEnjtfN1df4oYsyCAchQcL",
  "key8": "44qMMgj7au1D21uq1d81mJXwbWG2aQdaBMgdXNuDW91NBaVEyPa5HZjZGttJcnQCi3uizcuRgXiqM625oe2sQWnC",
  "key9": "2LjHdC6bsY8hU95TLGnSV4sRHNWfXkGiLJCogRBhhJ6rFB9ZKZ5tQXAZz7VFqMZDxNhLyQUz2qtkPFH1zVxAcsSC",
  "key10": "34rmWqPt6fxLKxwVFufo8H8USnxvAd6GW76ihrsqefBJk19Xn9nHzQRjcuRjUzfVmPmED5MZCkpWaQkfbpUjiMr4",
  "key11": "4yw2pRaH7MZKWqsarRKBuQoyZt5yWqRPonAz3w5jqFbwX1id5bZsh9KLgSDmEHtdksocRLrYj6XLVqvSPPECYf1H",
  "key12": "HAnZqes44tWNfjJHHd8qradUtVZsQ8Pb3F8BGuVWCukPoYkUCiB7AgLwFwYB3ZL3x4cmoCKoh7LK1SRVSu8RPWR",
  "key13": "4bZ9KvrsSmcCKp8EzotvkPHMeXUKEUhhx2AxihSMNdjBJpHKYUxmTxLvhxbC8P2RM3TdXTNUEir5fWduZUCvRYYU",
  "key14": "3Bfjjq1ENFifNiqjL45XsqncoLZqq3jW8MtYHH1HQ6JoTnp3fmkW5DYJTdG1FPhk2oJK88SWvmvB8mcsLmyv19TJ",
  "key15": "56oqNg8FtJwkx1XBvfpsn8GBMXu6FgVMZXEacZrp9WmMf9jxEEoVhj1cRt6LQHkVnVDsyhCX2Lunwp6Rm6gvxGB9",
  "key16": "4Gpa4PHpLeYMPMoY1VyX5MwvKZTZg1n78oUYavEhyXisQmiGETRU17fXhaDrRMSoF4KQ5PZKhy3ZSrAnNZcEJKCv",
  "key17": "2hKoyjzNWH9pxiykUcKDo6SgArRABDboYz4ZPd3CvxfiYYTRxHXUsC7pAtAU7H3xFi3MjWW7j28PJg5JuDeSQxUt",
  "key18": "2n9eNBDoFgi3o3N6asJhnLcJqDn4xaBFW5HtxBqbccfYvL7D7uvmTVa6V5TXM7b2MWnkCoThBqD2TYgGrHi48Yin",
  "key19": "kTYQLVLxBpdK546t8TUsxqKV3drfBCHcdhnRjDDTAoLfyXt8D688iPtSZAbZNraKVaDNTuC99CosQgDMbjy5L3Y",
  "key20": "49RFZAsCRb97R8N7hWPz6oSMCJMYiE5gTSGuZh82uoL37FqdaYj2A4paHBtLAaQepNM9AX81pDtMUTZEs7y88Rh3",
  "key21": "5VM61v1ip2yd3MA2dgc6mmCe7nUThJ1PcPzAMabezPEaJy2QDGkq8d6CTwkwk2QwH5QsAk816JEKYTXfe4yi8F5X",
  "key22": "56wu9yZtM1RdcYxQE8ikWGyCWAADL9QKmPPh6EFKSiT38CUXTkm9FEbQr6SnGwiQ2aHmCenMCcE41rCAVxo57KMQ",
  "key23": "22x8pCv2njTPAgD4LNGjzVtgLA2Cdwq9cG8CtqSrkUjnnQaMje66GN5tuGy6TRFStLdF2xgzpj7HLknhqfLGgcNK",
  "key24": "2MjhCwUCbbf3kdg7z1oNRPe2gxSb3eMVe8C5Vxu4v78ukXHJppzcJGJd6uqaGsgAhc9KhZkv3E8uAj5SrBgWpcuL",
  "key25": "5xNrXkMKFXm41EiC69X8bL47C6tetjeD8D66h2XCiN1dPeZdsw9soLJ5etvD8bJz7PekgyVBUvrFdi5mcSYCWtNB",
  "key26": "2LYsQxhPijky5djsCj9PXX7caRg5f1kDnRNH87oXS6mwPCwEhVHSXw1EkN7TL96A2RFWCUKdf9SVvPpW3AnNxnYK",
  "key27": "WQWQLt2MRaNdM87CMgpQoA16PhEFwX8guii7MWg3CBhSfCzMXrwdWM2C7Mqbb76wnF13TbNeY7Lf3QdFVd8pjhu",
  "key28": "3Jji3jwP1LhEPjevFZuHXmg9AkyackuPVBBmboaomzcbkeVkhV5Tv6WaadCURvmpnKgyHpmUB2BsziRBr8jcFPCb",
  "key29": "4jQXJTmtdh4HHGxGs63Cvixup3VnZadY1FdTwXMRUKA9LQgFtYF8wngKfpCbLfbUjobdgSzLoZtc4vdhzzVFnrS7",
  "key30": "RS6FnWxTqHRuQRWXqPdUQpqu7JycXPLZFyU2QKSkJKesAQe4eemxxHkGMSZ1Db89Y3fc3bM4GDdsHvQbejhsX9s",
  "key31": "2Wth5eAhNAnvifMAdwvyiKEJhv8qCi1bXEUqpBoMtx72H5E6tERp2rvDUWXMiFWNJsM1SfbQbctdHecKvqVPhrez"
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
