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
    "3ovR5fNtLznMt3668uusfq5S1XoBhxLhMntk6Zye8mZao5SXJj1Y8sqiQBB8XQwPn686mPnA1JUWYmketgk6YRQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rPDrEUQGKopWuTwiGqQC1kqJ74NoismzGWTV65QsWZiQeo3D7zkb5gfSqKGgaeGiu8nCLdiaPWAxNrAwBM25rv",
  "key1": "w632zEuFK5RJryJijPD5XVWmXoWjMQ9NFmTGVgSdRXYChznyssGWB3H1skEF4zcnaQmYsjTpQzpkJdw5ALxFdBx",
  "key2": "Y7MU6H8gHC8z4EsuzDpT7v1YEVTG3DfKvd5DEKshVkdYHFFAiR7Qof3nnSQAtNSqGgpSXBUUiJN7xLbaCQA3v9f",
  "key3": "5rHKsXRo9psR9fNkUudakhf4TLxnj7ZvVD7V77B1MdkvaLWjydLGYxwabZk69MSXQZqCLe8RUw8w43jgtzeM91eC",
  "key4": "2zSbAfwhikhrzQjgHG9Tt288qa3HEdhcNXAgprwyNkePo6D4A35jKoLLPmRirPhEvWz78avc7zFwqXVpxMBbXjgm",
  "key5": "2MuFWzTjfHozy24PRqAthh9fDfymEzddwGE6WhTRFzHD552cXcLr3iF5tD3jBfNpBiDpfWpYPZeLix7gbAdpYWrx",
  "key6": "rYtY2MnmhhZQgChwyMEwHppT9sjDQC3h8MKsqT6ME17LBNac7WW4QT52CYgaSFC5Wvrt3iPqTZRz93mLT1gnXNH",
  "key7": "3GJEDJxQTDTpZdKmHkcTWtQfKdVksjxGv1voUtNznN5dtacA1JonBzi4GE8VFcrSJ8KNtw5xppB9yXnijKN9Zbat",
  "key8": "4PJ8jpTVVQw95nu9vTxzXjcW3SKpuZ4AvQ4gqieT1BQ4nQG6LkQck1LpKcjRBhYVdhqQxM6CPh66Exaa9gUxoa38",
  "key9": "5Lxq5qJH4x6YMUioWQptERp4UJE7vUYHxqFeZ8HXc6VaY7C3KX3Dih7By5DBJT8oUmvV1jn1P9QmL6A92D57pCoS",
  "key10": "5tP4JfYGyb7PehGNH6VBp71541NdH3KVyySBcoUT6iKk8AoWnpdSMtpDJ7WYyfGi4QNz5MywG1t1NjN88GBX2CtC",
  "key11": "2b4jXnLVQTJQaUGi3LUxaaczze1qvtf498gVZsNYurE4kTSvypy59iaFTPLVxK6MksU24CnNTGtjaL1wUXCGL8MS",
  "key12": "3zCyrKuikcY8uR53JboxZeZmymXAWr2JfrNkd61jggWf227bgsFgjaAF8QrHeGd7BVb15mWxSSGPAUHi1xz15XMw",
  "key13": "4cqvevqTyrFHbnpG14DAPYNVV7yoVScqafHFe874fPMMmpYSxZnbrdbR71YfiSrmXV16pKEEFWVFAthzGHThd9pQ",
  "key14": "5fLLztoSBJntPfvZbDS73hyx9igDEDM3cZSy2E3Q16VffMCt7T7AefcnTp9W9gJNxWi3X17Mzqf8VTcxws4ViMjt",
  "key15": "51gAPCqLBAiKS1ptTF8nk6cgiTgXEBfKC8b5K4HfhEk2HZoEVWTnNt2vAraavTzpW3X7hqGDr9PFcsFGFoUzzEaE",
  "key16": "3C71p9ExQba91UYrQWsd94ZRwq7Gtdscu1qG66oQ6m21S4w9AmWDEgctTFXp285RpUmu1BEhWDV4Lm95HtA2yHg3",
  "key17": "3pkFuqPeUdGXsRigKXHPtzFxkCYzjanURv6KSiNVeGhXpE1cYXzqKrwhjALKwHaDisSXMACH8Xe9HjmaCsx4Zt7e",
  "key18": "msPX3MfZwWXpTnvXGb139xjagp5bY9vn5gtyUbdgDmLqWd1YUdBNwhhrUaTPsVygZ8Rp497VSAbUgq68BgdRGXB",
  "key19": "EvXMAJj2oMzXyQ4jBiuNsj7D9LzT9T7T2VnrucgBRCccC9VaHuqXKS4NesEGnhv95XgQuNqmkfkbA6mW6H65YqZ",
  "key20": "5CQxA3Wsxy5HhsiZ7nByNcWXrwN4789zGgA8njX3vaTX7s3NKKGgUAMUio6DHXxut4zvxyJCCF7kki5UDzhLfb9p",
  "key21": "2UW4LJUK3TpJfubAD6qc7SnisnKQdAXisxDsCWDGtsyBiuCAitTP7558vG4wHzxmbykxgRNVxgpruerHrv5CQqZf",
  "key22": "4sfTmrMdWDTnyi3krGHBiYe6UTMfGjBsgsoEbcfuZviT56gowgQAnaoDeRmaqm3ZvKrHCBkB6V3uUu9GbLgQUDoo",
  "key23": "2wqZtTK9HC4Usc9t1otAyUBf2PVhzvC4k4fPFBzYrihY8Qe5i5mkhTQXT4hyjuSC11LM3BUF9u9U3gDCzQo49Awg",
  "key24": "2LyxmMsHKBriGHZQLpbmaHmSy1gbCmRwLCZN4bG2bgHB4rmwEfQMBeS6VWAzw91JhVB3UEPQEJx5B16Trh3pLhMP"
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
