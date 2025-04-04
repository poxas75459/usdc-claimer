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
    "CJzgeG2Ahou7hvTyj4ZuW7vJ6WedRitEUxcZV56aijAqPmnXMPdJnrHH8FLzknHLXML2a39g6ajyxN2EoJcmBZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCk2vVvsNRte1DgkSQ2nuov8C1mvKaBdmJgcBp6MVXjxRrcr42CGw6tjgW2yxVauR9mx4ug96uX6KJcY6rQPwef",
  "key1": "4CFt8ZSSTnAx4FZ5iAsGVJv1kKAD5DPXC5HHS1j2kEA4TR4LFrvwuGRmPKPvmQeEQuJG1MmG3cwqR4aphMYB5u7t",
  "key2": "5sn3Kg76KekvMawY4iUjtZs7axW1oP3S9xBbt7ARtXJHz2ngEerPXoBvwYRahscqwpLEi334s3xDeJNRyHjGDJm5",
  "key3": "36JPCd4Yf3wRgGC6C8Jr54X3K7jMMkJXRUrapYb2kWxtyY7VHQrHuvJNhVJAt83xcRWM4RFnsrNQqDd2wj1hjhqh",
  "key4": "4BpPx6V5pm2U8iHX2ya8sgFRnvJb6R6vmytsMGAS748TUi8UsmJ4DfjdkVYJK7rcqWbj8Dc2eLfJhH4QjCtjxiXm",
  "key5": "62G5F6io6ctTVPSNJdMDHqspa6TJ9o8KdcVCw3b6ywGcofzC5QoSMDXXtcN2onhC2EUfdQAdHYw3CCacAGQAuTMT",
  "key6": "4QwGoXk39h7aGPxqkEPiTKnxPDisdFqZagspccRw9BdXmHUu6iBoH6MBgHDdixFPcLPZrt9kEmsnGybKvbDkNzJj",
  "key7": "3QQxG3LX3QvkpzoN2tBEynpFA3Qp9qhRHGTVEcLiEiYkXzfWt9h1oZTbsYQXbqDPTnhjLdd74UE3vQTX29M4c374",
  "key8": "5jFgTMahD8tY4SZx6N7h7R3t8fg3aJsYK2EgCRwzqqaFjVv6Sqxwwvi4ALxD6e6r4gSkQDyp3KhZLjDganqTy2JR",
  "key9": "49pWgV2nrzU94G3rNQwfFfzMeF82RjEeLtR9wCqeM2aqeS2SqX95tF6RGtkwHKuMGHFVd41hd6GjTk2Axco5JeJC",
  "key10": "3eYRWEM6WkTjK2GuW335tdc5rjooq82SV4Sw45yoT7bgASSWdx6jEbsr5MhtD9k1SL7Q6edHNknPBjq3wZ7yV5ZK",
  "key11": "Aqq6cqTASuCPpQfebDkumM1xUpGyv9bqiZdoyGkp2LS2qzwzgsgzoiNqhd8wBHMiCwrqzrsY1UAhCh43S4XdrQs",
  "key12": "5quQpzc8oKb2beqqrFoCqdT7a54zBeMxhSSAbUJL28gqYZJ1iwfNbqMTXR6mVXTk21U1KbkmLe85EsVNfkbLgL1e",
  "key13": "5SoHc1JVTjMPqkdmMpVcDxfPxHRB8ijvpeQkcRsXhWBDw5E7oyK5qjRrLVtCpcYXUP3LCir5VtxjUPm2q62jVhn7",
  "key14": "4W1117nhQFyWxyKZtPvGQjqoRoPVT16HhgAA4YourrNpjxy9dehXCupiasGJ3RnuFzjv9boWnAxHLJKAkNwiVvt8",
  "key15": "4nUcccP6eLXwAP3nc7pmtau46fRCWCnfpvEgaZBgAyGSTTjwH75kgSJccVjrLGa5rgr5d96coWscKr224enEm9Xb",
  "key16": "5z453Fv9gPhCfkmLf5rAZMNwtWghJkk6sQE5gur4JvQjdF1qAREfRjyyDxvkAj8g5FenYFfG4XLnZndAnpPwe6pX",
  "key17": "44qJnwwSRLFt8bV52BzbqgyWHZpBS3tmz9VzK9eR11hAtEYq336NX8oxL81wpr2ErMqxtzV3qab5zaMTRbHRGwBn",
  "key18": "khk5iCRxuLvsKVns8C56oy9Ew5vaMAY8F2J8y7UG2x5x2tYHDBc44vFa8YV2j9vrin7UK8pvjpkKsGod32sKqn6",
  "key19": "JM3DXrjo87TbCp6wxmj147bog3sSzvCGouWTqQ4nJM8ATgRLpPi6jmbgEajCcmRMbWAvGyy6LKWq5VLWCkoxjgv",
  "key20": "25jvhEpiMFNJnswCiB1LjFoTSmZPwieh98dXK4SN14c41Gun5aX3zgEbq9v5Qypszc32WWX8b4PFD9seAQvjvKH1",
  "key21": "5LwW4Gbn69rMm15cLTBK2YD6Grj8Hr2QeKFJPMR9T2YsqxXgoAhkHRpAUEUTSd3PsKs2m7SKy1sZM3v3gmDtYRtQ",
  "key22": "5vKobrRaiBLVXYEpPFWFLbNFFJxE2RwwRUEmxBZT7dDg1FdjkfNDcECo1ocff8yruBSbGxuTSknpsKo57VaN9L1m",
  "key23": "vPFGtscLv6VvWvuf6DYAtPLUzoVizhCkv7nUWKoFDtMSoN77Srkw7HSEukthkW7AMeeSPpEMcn4qph9a4vaNjfC",
  "key24": "34wvzpSUo4TZnRhqPTRNrzgEEWj3cEwMXcJVgzCRKgjkDrcmb8D4nVqJTjsUbbb7Ki67NNWo1hEv7UkxAaVMpvhK",
  "key25": "djMkMGWnEsVfX5oDzKWtyvrQhLeCtE32jZnWjgwETbVSVZjcwmfWxqjDJpig2tddJkNPHMNYd71wca7AZ1Rxito",
  "key26": "3ZW4gayk2cJG4HgvJMhiaznXnDS2PLxNhkHGLSHnVN2itTg8LaEacy3nWAVBHV39sCjGZbMcTADAHyvocUcHBsqd",
  "key27": "3Gb2cRrA6BnEE3XHpeAmRtUZLeNWSPcQeCxnmc8JJ1xxZx3cFLF3XCfWWK1ntKmRfDtEZC8oHnT6wKQyMjak3n7u",
  "key28": "3hj9yGme5iwEaDChquitJfzovS4YiJftpoegf4hxjzAFP6xBKkfzxsHFqStnsRgdFC5EGzM6eytFFSi9FH8SJSWF",
  "key29": "5bmq7cE4PhuAYMBrgnqm1T6T9g4zzLKD4CWPHaCddoxcdZA3KcinwWLHsSQcQZCRedkh9sa3eiEgWrwkh7MwtZYy",
  "key30": "2QDEqoJAiRjmgea3ffF31p4Au1qyZYs2pPDKuKNNCpXV6npZosaRvksrVd9tnQbc5x5bZ4SRwsJjGgJYaaUJKvYt",
  "key31": "5Ckk9h8D64JgHiXVVWUQ3Z6mUQhDye7kDMsajhLdXndqZRTZMczb4Am2K8KsW8gCgyk5bBjwELmsWoTqt92LQCFK",
  "key32": "4tAp9kE77LpoxmbhjMGoNsRYEXm3MGHGNjV7UMihChQe8KBJzBbm3XeWVVLHdN7QSh4shj548PjEctqcN8qMpepe",
  "key33": "257gzEZw3L3dkAbTKXeRFPYpxswtVnDaTcnVTDKDrzvUTX1sC6wBUEq4HCsi1zuSq5UpwKvFCQmZ7b9B7Yzquh3c"
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
