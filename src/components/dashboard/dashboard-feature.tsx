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
    "29TBgABfw5KGdH2cSMRqFeXeoqzT6V9sQobBwx6i7mpiJSWXEWufNK13QpVs7VXVGTMSx3K74Rj1wDNd2FuYMPND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMP5ULs7TGu9xkHeBAL1Np4j928XMphcgQr7rrbKY8mEqeUAxRgwxVAd1nJ6CPduAuXHTz66Hb7DiHq5Qe6Ua2c",
  "key1": "qiSiLfDJKsPkgrCJhYjDPRBtWGzm3gsmZEhqgt2pyNDXcPizEUjUnGFtHxFApC6LQvNbf3vJS5drpkvyhbfzAiL",
  "key2": "4pWfMaZUgk2WJyMoZD5haSJXqLTNgNqQH6Tj5SscDF96pjvWk6ViF3x5Nr3J2tAqkUzQq87ottxfB9PSDgJUYpkj",
  "key3": "RuzpGjhDiEqKwnizdymLPZd8nDbuGuwtgZXtkXu7aAsHKPphrgf4F2y881CGtDmkn367n8tHEAbdbRXJ16r5o7J",
  "key4": "44eriw3TmdKbpVgB3s5GVDnxSJBtGeKrCmaHBn1CLMcR6UKLkMraCp4aNFoxzrwjLcFyWGxhBPePk288PAtMNRmp",
  "key5": "4hgcrshgYSkEUwDgsNii2TehxNbMsWFG76j6EbTGh8UmpsCdD49Jpr8QtDnZYQvBYKMwxsmTDoBG1XsH2rvUjFgP",
  "key6": "5hh2pphXD1AyjZZzGcZgnxVi9jSkWTTm5WhR7fFfaFzpqHPjmjBhjFJCV15SfubtVnEqW1VR32ZJzkEpNJbZZ9bP",
  "key7": "vQjjJbxVxomvErAM7eNrPev5GFQLYjxE8o7UxF8F2d9Wwuw4hYHAe1w4vmPi9nmyqFHqHQvELqNTEr5e5Yz9emJ",
  "key8": "5ATctakHtGRUmuwzoKvB6Hv5UkByr2erQnonMnehaGXsbKfwU1jKpd5o17EsmxHmtCth7cCQpVw6wmdHGbti8QUy",
  "key9": "24bjVaDKJds5qBXMSoeG7ZLKTgp5GJ99wyEFvSvd7tyLJsVVS6ECXV23Puh8VLkWUiJrNZhzGeCLMVTtL5ADH3vh",
  "key10": "3D4hYd9oeCNLL9ok3Mv4HQrgSt8PKPGDeprF1mGcmLFfzFR3DxWaZwzaQyxg9Tsh6kC9FgncppfyuZzQVsRbVH7b",
  "key11": "etLMyVsX1sjxMZfTcLgn9WHQGK96oBth4b9nrvUxXznVC44TqAWs7Bp1vdMFAV4gyFd8RuH6SQkf2fgYCv4fv1q",
  "key12": "4ZiYA1G4NZqpXgC8YFFqKc2R3LxAGuhhPzCzf7TjoB5xuoWREoEnaGcmEcmDqJ33NuE41WQiC96XrmV5VHNexZvK",
  "key13": "2VRTPGVnsxrGqQzNXdvn7FpMBtmJNKxYSbmT6wn5wpDZrNR8C9QnjVpr9NR7pkYKbH2NMktdQcMbS2gfHnUM9p4U",
  "key14": "4L33BWd6VzVawcZdt51C9oxiNrnySmFWaBQTf4LrqSqM5yLyAVbLGjqVjozSDSG8ani8LGrgCvrBBTAmUWgyGyB5",
  "key15": "4Z8bpgQQ417EnWtRpbGA3w1LaadZBjomWHkC4rwgUPsdyyJzJyijH8pY5RHGDzCfjvhxDDcG1Y4yDEMWbxxXESRs",
  "key16": "5mqeWt5TtpdnX9qziibYSaBpDW7dSTvwMiL1zsitZjFZaEodkEZCZwF4zUs4a4tT8Fu3bjhatfgoxUGLAyyxveg9",
  "key17": "4ArV3hNZi3XMsaBnZ77V8oMWa17VU1wb1ZF3EJ7Jj57WMMbq5ReWppHct9gHctJ7HGt2mZpR64VvzanNcARt9u4Y",
  "key18": "HEw3UWwtoUS6bp2ZAP2pVCcJ9iV2t4g6oZ1w8PSp6W2x8z7tszxxiPfVrjqAiCqG8fG2sAarE4tpDv1pZa3Jrjr",
  "key19": "2g3gPmaktbWvsPqBC8bXvKUw7ndmXYDNCs5BvkLebP4JGGgCwR91scyrHvSc8gJBK3wfLfsZ8aSWPz9bpQFZNZYr",
  "key20": "9R35C1Ceb9sCN8AE38ikVoUzdFm2VFNSxQRzp4qosgmhuxMk2x8rNuWKF2zkYG4kivPFbvcPxXBAeHsCKjR161x",
  "key21": "4RXqy7GgznPJCz5x1GpfUCuuH96yLJHA3ad8goEdmMzRbYYirUekrWd2aEiGaR4e96oYjdjzKax79DtzuJ5vd3Mg",
  "key22": "34jSt8kzKW5Ck3cExACXfudF424sv5Ek1WFy2UF3SNkCffHP417sS9eGnHrn9jZMQHmJoiThFur6RW1qNWM3YTKy",
  "key23": "3PSKp5tCFKRnAuu6q8itm4ZQ2PAE6pngqU86wrQDS5xQfnhQiCfRKaMnnEeNsPuhhCeeFWqJtuyA1zgMp6cUYKMq",
  "key24": "3wyK4Dz6gMRPdPP5iiKNd5WCMXwguFLdD1PJiS3VmiRc8otAw3vDV6E4hbbiNHcfbS1A56hwuB4wynsyzLDQ2hrB",
  "key25": "2RCJTEQsFtxcGtWHHVozprF1cPoLUJpX8fuGnpmStTi9gqbrTRU3uifSe6GTGwtL4Mk9Gp3UC8NRi4qiwkYaj6DK",
  "key26": "2GMMgxxiSxrfvAzUsrxGcqN1uNMvsfBTfstRpi46irfw6G39FETyBQiB53tbXUrpQNBi2aZ2Jvkn2o1nZpEpDGAe",
  "key27": "sbWAJz6huQvJ7TTKAZiZqZnc7Kze9SYUwaS9nAyWC9eq42rqQ5XKJHqxf9g3YMNA2LWvomJQkgJcjDRv9BWpAAX",
  "key28": "hSzCGNTMYDu94ZwLk8rieEuo3P49W531c9PeGg9dPYgAL3iasEF2dh7SoZgyRFxNTvDHbQ39Paog8NRvkWoxYuX",
  "key29": "4HurUBj29AsNiEBkGKMtFiYZSoQuC3c9Fg7NkAXWPwW1YhBpMAWCUWb7eW9PasZiKuuhsY91HtMyfe8yGyvvqs18",
  "key30": "4sV7wzwfNhse5DmY6db73WgXhEC3FXww92R1ZnJBqfeZcpThHR8CGeLhoaueAudNHGC85dDsxke7V8CaiaVZYmHh",
  "key31": "45B1S8iH2qnzgV2qDpLttzfQHjiojRcncpB5C1kfuT2brxiKabXe4mm7BCxiisw9j6mhXPMN3mLCFmNhc7yP5JdE",
  "key32": "2GvvHfAoNSKypnxMsdZGNmHWpVuA22T4Qj79gCSFRHr6iBzT2hkHkP6T14dDrrWBg7k76ZNRCscibfajTXJDQfnr",
  "key33": "3w94dGpnzQiGGRM5eUC2yEpGZUmjVkeq1HPTyRNes9tfkamVsG53Xv4oji8hoAuTDrjH6R6oL3VwdmzffvPs86um",
  "key34": "5HWL7VowjkP1ipzLvX6VQGeqxHuYFUtdjE8xza2vtFsYEaF2h35GQX1Rea95bBTNGo66Ka1k8v1RxRM3K2FYDt8w",
  "key35": "26zEYEQkdvJxzoJkrDpnUg4ubXsf7StnnUrVtHsBQCTHiZTEpLRPzh7Z1buYgK925A1b4pmh1b4e1HLVWXLgKs4v"
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
