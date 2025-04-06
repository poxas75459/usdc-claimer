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
    "cmMNfdmye8V9BJr1tAQhUbov11r3mZb6siCyyV6XwCtR5LVUNQBgx7PkVH4khetk9V9JjijcLBnqqmfgVufY4rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8m4q38hBVvfaN7FJZGPafKVcBvk4NzebQWNmKt6Jp1mA2YSUKSePiyZDRPEEwV5p8jKeXs6XYto1mpgg9PH77g",
  "key1": "4WT47ZtxW984f191J316XvrZsZLGctyuaTuPhjZ2qc26FwGrPiK4ATx4DyeueTUWqNpq8NjhLPqZVepJL7tZ9DnS",
  "key2": "2Km4rNCwRQewpmv9ckLUFPM4Cn2S8kRhqo32PD4X9anfFtxSSyeQdnYBUArotU5zmysxGkwu2j4yqBhegqw1F7HM",
  "key3": "Zo51rG7yPdBZnMz8R4hhmFLj2bT4JVa271nemdmWVTAhQqv4qPAWGAffDAmBoakkF7AAbp3ekFd9LChNGe8BZM8",
  "key4": "3WhGr3J8bRj56NCDxkXKoxSXTvC8RmDdFvZ5aTZB5KjSF1HkYk5P4KGcEobVmy2WwmnmRxE4Z7KFFsgzaij3DYjN",
  "key5": "mcWrBYe6YsYYQDitiCNGfgGkVP28gdTF5h2MX5BvSz8kJy4HFeJzBaGrAgYszRrRmKcztgkFm4rknQejKg5bw2Z",
  "key6": "4HLkY19M4RqQzaKwoFcGb72TRroM1yGCqh4tBC7sYmtvXZqrjBWd2Nke8HhUFD48ehGXm6b2ZwiVLzPzhzuXRw4R",
  "key7": "4sizPw1hUuWZtvr4i5TFRVWJfLPjrsN5Bu1JXAyRt2t4Pa9RfuxKAsCDbcwEsEbApzv2PaFQwCPiR15qUdEhjzVK",
  "key8": "2W8KjtQrRk7JkXqPjtWdAuEkMLLNAVxXaXGKMLAJVZ2K6Q256k3DZNB8ubygJ2NTJpengZzhSobZC9isTN5V5Nkp",
  "key9": "2ETM63Bt5rQJFpq1P1XsKHwCdaufziKd2aP1wpka4ipHXGPut47zPtfzzr8dabN23GRsL12aUsP6AGf3wCwYUvHo",
  "key10": "5Ly6osjQoGkoAx19pNuz8j543TzTBBfup7QwCQKFmQyCa7PLSwRHnymsxqUFdSdTRnxyQX3nyCT7eCjPJ4s2rhTX",
  "key11": "5ivBDRH9vfwtLZBus46LuuEXaDjLDkp1TPgoAL85qrZ1DT3hBbKt97D3LNC31MhtbCHntfJXPZajT3xJqWE8JqMn",
  "key12": "2kuE2MRXRvhfd53qftAvFYsjBtZGyKuMQoQXYABNGNMCwXg1msAtPedmFsxAp6FWtkxqmorMYSfPQcab2ro7m55e",
  "key13": "2ugr7zigFAPU4SMxzt1pDTUVA5iKo4gTPbC5ZhXigFLP9nA4jJAo2kwXFepNghkTU4UXi8vUzUNE2HDHCH5uW3hL",
  "key14": "3bC7jYKpHSXCzGrVPKFXvu481AJhxphoHPho3oxW74NmdFGJedHrbbYSEENcdjwBeJg12PeCrSQjRvyzLegv9iq5",
  "key15": "3EKfcmYuFnTtBfRi4SwT56wUuHNmUJsbuyWP3EYUt5F1fdUGmvTaeB6uxaZJMNB1JeH1gvnSSU4FyDvT7vpYvWL6",
  "key16": "EmewDKGSyheuGXMWmHhxAcynLN55JUPxKwtavP9MqLyARoXD6o7WL6huhUf6x6A1aiNrNQPaV9923omFKLCDZq2",
  "key17": "5BL48BiKatoFeZ5NpZxe3qyH6s5FE14AUuK14NW8P21mcP32o73KGk7pGTMxHyXCuCSQx7fuduKVeV9qAYqGkKG2",
  "key18": "XeGEzeV652BMAsZLwuZ3Pd5LWRnuiPG7DR86mdAX7pki3VGHjqjL284QNAsT8RvmLoYMK7rArwYS4aGfdD6HRiU",
  "key19": "zE5C2JgmbqxUi3DCD8fBV2rgid8MkBsyQQaTxUihFAqYh7dtkbCvxBuRBLMj1ybyLZG62CFKt9bnGtbohij7YvM",
  "key20": "2poh6ZxHRWVbKtZten1ezfUtsBrNBnA4owVG33Pah872rzvxpkNN5krSNeJBLuf4SDRL8eVt7fS4Ryxqdt2tgkF6",
  "key21": "5P9QPzRd8ka88Bvdz5EQ7FDGCbe2PAjLQ3vf5NfocRCYuYv9CSD3vSQgTvdd5xng6K1Rvx9ZJc48eBtU5i8fvcF5",
  "key22": "4JC1z7gMz2sZNVQUXtJsJrfpyErCEtLvPuHcGM4HT8JiVogYoFehWiAc4Mk3SPN8zvKUgHFyPRQ4yYAkXCgDrBYA",
  "key23": "5J5MFcaTDWtRm3KiLxKsByvpR5e7gP9pZa3Lufq6qrh1E8kmU4Z3fPU3jvGCDKdiUudyKQrwVzp4xBv9mDcC54S8",
  "key24": "4aWBpvZeWJpKdvtVsnMk3KUrPKXtugbxuBLfaBjHyYm8HSBMU53tNz7NMDvUcFCDwVNcoaNFnkLrX1ba41aKmMwP",
  "key25": "4ApNFRwne3TuYsnaszHqXdkZsiJfMJheb5S6e5u9cPyUqcC9t1hoBAUddH5PXmHKrYN3rDhqtiTvjSj1bGzuwtNc",
  "key26": "3Wu2wGxRbiFm4aN6s7TQgq7iQQLJUygmYVb4C7XWBkRQKSSBbMxXKDrRxDTh38A2xE4cnM7is112PGd3Qj61jWbf",
  "key27": "4Urdt8kxqeT1GhnCqpnFNq5bbGfrfiJGiMaeSCaK3yHVT9KB8nzxgZ1vikzGseeYhGHsbhm2cAsWxNtwCvQQ1nk3",
  "key28": "Mbqfekb3h3UhAGKi7sTFbS8r8co4pnrnuzMUcsE7BmJjTEhRv7aR77GwRc2HMtnaAkPKNKoRMESyEbHSGHhhDUN",
  "key29": "KQuspjrAK6tqXdRRfoBsrGjy2Uh915puRvLjU3xZA9G1YemqLniJ57oSsN671WuTgXfaNVU8dY2Rv33iVKqUGx1",
  "key30": "5C4kWgGeTvYHdSbPuHP4KZ7ip22gQzbMrpibGx2tFuXtYdrqUCJgcv9srHqAgf3mJdECHYRtrpFNXqAde1yqRnhM",
  "key31": "5XGGmt2Aaxs7CSVhGEAQSRj8B5P5CyqGmm6AZ3Z5PALJ2Jf1PqKcGa2x2X9WkTwoJf6sgPhJ3vEfqJkLoK2HS68L",
  "key32": "Zctp2nHrsfAdjUJU9Jykx9H5mZGgFYYFfTwHgxix9FuRisxA2NdyPaGRd71xipnxC2MuPMzTk9fa7aL5ccrSKJn",
  "key33": "65LJ1ijyNuuDiBbjGEfnunVQnfJLQEeqStRE3uP1bpnvLdPh2eStvgE8Ej7Nx8ZtduSbbYAHoFmxwRNe5ChXuj8c",
  "key34": "3AxoXwSGh6B4H3X7dbGVTuK5KC2oUPwtGj2UGDbxAbA8oMRsom8wTMCwuWsw27j2VGRJLNfXVrZXDiY2LRyfgYaS",
  "key35": "4UAussQ1cBPdWvM6BWV9mkyyjcdSMA8krqwqja7ErkPv13g2FyF4yqYAzHYB5fTxCvCgW8Gi4nSDapNXVVQUu4W9",
  "key36": "2SbwR6hb5P1fgwWur1xG1UioDiLv4puXXgAXfYz3C3cgHEAGzEwk6YM5N1ZGsSXaW73e1bZkJUCxPZhCPW7RrcPp",
  "key37": "66owxu4MQp32GjLmJ629UJNuWGuMvBo89iccpdcydQHieEJawvfZSwRWcnuaSij3sSCUpXNeqfAmQNJb3EcCriMN",
  "key38": "5ZWiPnGPiaU98RRQwXMBGWeoncCnVD8htGxZiuZ5WwrZgBSo92U6v6RLK6rsyjXLa7ex7sCcQMMU298cLdxnz58o",
  "key39": "33VnnRTDA4dtNg8xoMSVFVQ1S1ymeknqCponkh6uvjgYsxPtf9MmifSvAVNbrTtPdZbJ56rS7vkJ1BX11d1SqESC",
  "key40": "251AdY8A5WC6Tur7e1aKsJNR7QQ4g689obRAwvX5CYotunV8hSuzPtV9hW6bZY5ngok7MDJnhiGERRHS8qSJHKaE"
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
