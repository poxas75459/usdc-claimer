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
    "5A1cR4JtRDzsfJUBhJEQ9ksvoriXvn5zJn2kMxNHU9xA9irxdUxbcxawkShztkpimDpo69db4gkdZoq16eQC9vky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLnuTtLkMF2MhHRMdmgoYCB6nb52UtLfDD8TWZaEWN2nJca6XKVUxgvUV7hBMajQCHpUXTmX3k6nMhmuPRmdiX6",
  "key1": "3W5NGS7SNmWygKnRLGTMupBnpFztwNp1QQAX6NhGcb8SANACSZzaMkK2jpDX5bUKDbEzv56L5jc73J2SweEeJZVS",
  "key2": "48DXKcAJ72XEeiJZCTRbruGGHUykKrmA7Bu2jfNBj472DwPRyijr5e9ajWeEVRMekaAs9f7YwXNdb9wjJbXgEG8Z",
  "key3": "gT8gJmpetDQEyARF7SnGNpCMo4JT7isfsCKwcuGgNW1pXChB3eZUEDzC7ZxeKecz9qfwUqkM5BXypQrCdbrxcyC",
  "key4": "4GbmMoneTSjMwgtjP8E9VtH4TxFKAXwBoCDVtHgD5RD3C46Fzyeq4Fp1FGZGhyLVqBukG5aMsNv7sthP9vudyusM",
  "key5": "5RxMP5BQ7UhyrD51LiSXfCBkAz71pZ3zivoPNrjsEAmSt4rFCYN7ULN7WQ29NY6dmy1W3N9xnAr9NMfh8QMKjJha",
  "key6": "2wagg4qtRqbNDxEG5bEbcXtwPXhjhUrqp38ytsiyd33VC2RBrpdtDbon6N1JRu9dijdmvQgi8NVVpE1JFAzQjhzj",
  "key7": "3iEPYWhitruubj19bh62UtxhprsGBJL1s64Vc3VsPP3HP1d6JHN5PJAkjUHPgy2Mj5yTxektHYFPrGVqvtN9GpA",
  "key8": "3Ze5hVb86jEg4mouBh7KfTGY8FnTkJuPUfFzoG5Lp4Ns1bygsA3ADQAxmhj9rPufRHYutk5ai474Md7fbqJ78DPe",
  "key9": "5HbW8yXMFSw9pouk7mXGuW4r3ASAUyJJEH4mpLA69tH7Z6ykPQVsmoyqcFQxHVLtj538v64iSiE3YR6ULDnootni",
  "key10": "bkcS5qosHRsC9cxUasYL5VgNgFJ8fpio6wm2B111qncPaPCSkATr4kREAXrsrFsuiqQQZQaR9B5r1EFcNvTgd3n",
  "key11": "4LVuU8oKXktvfbduLbr5afoN7MrxJsvUjTSQaCaVX5xCoPQTCbKJXMH2AAs1xU5QyfqNpcLcQoqXaBJvui3UnYMB",
  "key12": "1qcewCSmpiutPKdcBeM3siYeLZhA6mjDrSJRDHVYqTkNNbioR4ncAhuVhFE9nsHbcdwGyJFiiXL8eQPj7Z8MbKj",
  "key13": "5U9HjFpaYKBmEPahsnzPzGsq3q5HToy7TukXmZGCgrXEynZATMNzUVmhtYFeCW9u51nyFqcDb7ZYrRth1QY6d3Uo",
  "key14": "FPaKmxki6pBw1FMPp1jfUSgNaustG6thx6x8P1DRN8RgYjwt6mzwDk7C1us5jQ8MXLgSyxGoNGFteyJ47QNur6g",
  "key15": "3BjzpGv8s9tEmg1KHg29C1r5pioU6sTVR3xaJpzsj7tfSM4gey3Xg7kjy3XmUhsRrU6UMbMSYokjCwXnjzfrwgW1",
  "key16": "4zkPDtfPTZZuLhFLrb8J7FfyMwtguLdbjqBK9EdjF5DtwGW1B4dhzsPvWN5ZPanYUTWYgctRVFSqAsMfLLzQWUVd",
  "key17": "jSBxsSVQBo5M2CQbXGCzE99uARniTXgjNNjGySfVhH7ZGLkXCKchSyaFSaxbkh5SZz13yXnBJ52jeL4qxhLubud",
  "key18": "1KFth8gLSNHdT1TDySJm5DDokUiwPD96PXTNFmwhfuYSQed71wVbzL4ubNm1sL2jk3CpBUo4ufcipvvpMJCyxh3",
  "key19": "5BXgFzTzXu31BkqNVsY5PxsJkheRGSxxX7qzYe3wWzhkP83vuzLVwrtEvRfVRHrCRQpYqNwmq3jQdS8DqzUpjEQR",
  "key20": "2AtMmCEYKaim1Rwq3V2k4rri3UC6jSSsGZagqPqhMKYa1opcSLzRxrGobhgt4DUrv4tv192p6Tjd6RUUHAW2KhXi",
  "key21": "3NMA78nBSt5BFYpeADctTDHep2y82raVhsCMPkHm6stWfQSaxAvFJxD73qd6Nm72e3Q31BW2uSS5mVG9n9s62Paf",
  "key22": "5diF5RxuJ8T8nnaL8TFh3Xt8neVQY96wBmH353LEr2hY9UpVShQc2A1b5QLRB1tA1gbn9gUWVz1rPbe1JYy2h9Vz",
  "key23": "4wPAhcdKFJKpSWiR1cZZL4EXGfsmbKXs7aQ1dc2a2YWCXHZ8tVF14doiQHwuGUf3wFysXg7KptjNj8hJf719JM9d",
  "key24": "4pTK2d2L5goEtAxt1BefGHiB8aMMUF1Q1fUsEdowhDftCustgp8Jxs2UEnXEyYY9FHuMM3bkabXZqXhXQApkg5s8",
  "key25": "5LNn68SVfANgB2M41ZysQKsS9hijyKjoaLt92oixXYnGYAXmgTARgHbkPjXkaXkzFDkrURzbnEgWAHtgjKV373go",
  "key26": "5ncFqPoF7QkiBfNrWo7M65VXmRVN7boCELc4V3NrdgZttdepiaX3uPJkRvBz2s7Mp2iHTBKsjKEZruRX5Z6HgmSo",
  "key27": "pKQJMBjUsfdJBvXwnoYamKy7KB2xE6mv1RoNAmLia2QYaEWgZ23ZSjaRXbc2emst8y253JC5EsUfjY1Euq8E4Hq",
  "key28": "z6SDzmiPq9p8SstZRAJ9BCezWVx6QSgFNujGK64rLGTyatK48UPgg12cwbPaDmQckoUM8i7YjsqahFUCLLnQFEV",
  "key29": "4ELPqLGg58VNxgNXtBToikGPyUYA3ma8HBHnbHyYbuEiKzHVAWQwWW1mQzMrbnjcWkj1oEqfDhGp8V8JxehSjbBo"
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
