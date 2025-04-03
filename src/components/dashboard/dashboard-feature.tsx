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
    "3Axo19JX6gZrZxZF3uZwWqHSMR6aJyqVte6Lmn7hhVbJWbtZHWShqyoy8xoTh4xKYzNrtRSRJ7CP5YQVe1Y4A6Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ekGVyLKFdrAEDu4bn8viy4SKtdcXzJcHFdQ9dMFv6JwacqFJa2zCJvAniXo1ooWhenPJ8kK7ZPyLDWKhf6gWSY",
  "key1": "7d4w9tgNiSdRLM7WqVNxdx6URKVYEAPfLiySbhXrYzJrWX43DdWGgGhmcQsJ7S9tbPBS23VufacZnAfsASrKZPr",
  "key2": "2SRFHC84GncfNZbe39EJTkQU9K6VR5xTSW4KpCQCfdXucY1Cwjy7TYkrcMH3oDVHjj3fcQWbQyKJ5Ev7TZ35KE9G",
  "key3": "BF5D42a7uAvYxeKtUHqbNnYWskXDQUV9c4pv4HxZeuxTbdWcTPfanw5dDfKGzwDwipchZ3gwUpSFkiYSfYHks87",
  "key4": "3EgmoTyVwF5e3nkmW62ECr8Jkimyf54LhoeGrq4gKJaxxojUG73PaYzgsAx9w7xqsvhk6TRTfnfVXAyJAsgdBbce",
  "key5": "5Xk2cNXz5ouQLrGd11EY7yJbgSa86vcsXghLD3GZtjBBdpFQ5JRwfGgatjUageT1VhbLFXt19RH9n6ETdDfuBU4q",
  "key6": "2SFJf6sMk8gFNPbW4CNsRZH2Zev73oNHoNz2EzadM46s6TzNES1gDCuf8ncxmA7onw6J5uw4ZwphWCtpT4xSocc3",
  "key7": "5uWsAYcKFkEK3vMkn5nfKzQWWdR5uNWrnUXnXKhXKefNxmrMPYScus7VxYCmWUeLN1vPuGsGm3Rg7mA1tzaR4uEr",
  "key8": "57QCYYZyjUoUdEKT1VQjcB5V2Vpuyc9fjVyka5FTdeQzyGReTp5nQ2Nc1VVNrxStBxC1cNkPekMtxuZrXWppFc6A",
  "key9": "5EsUoH1mkZdfCfvzUsVYJLLJgMQqCqkodZW3Xw1gAM2ZQnCvzdcP3kTJPkcaZyJgnNA4JYjBLbCp4cVTRe4Wy2pp",
  "key10": "4Ju2yjHAjeyuwuQwyFNm46hpsDz5yb2oAPcC2aQ2Q484FYcAz16URHM2jB71HR7wNewXEURzN4x9J6tkT6NDAa2X",
  "key11": "35wmr4deiWtbDrpSPbd9UZ5XuJivVjdtSuCRoWQD8yaVhmTbt15HbgrxwXZj6yRJfLkXHYESAookPppi7iZP9b5e",
  "key12": "4hMG3cHxh1XQWbeZGo5AkmAySvUSJjnE8iCmqyX4TaUeEHe9f2AGZDdg3sF9AUuBkmmQ3Ld3fhjNKWUCCu45UsL5",
  "key13": "3RrnWvziuSZGgUtJCPvrpWyiM9ATeCgoVe8yuqtaE1byeT5cKiNLRVB6UwojzmhF1aFDHfJy2vXkD3e3gKkqs1Sy",
  "key14": "Qu4snTGboTYopg53nbcYr5gsNuc854u82BcXqcM3PRqrBfTfdJR2S8HKDhuXYPHXt9mytbqiUoBBZ37qm4eC3zm",
  "key15": "1HRrboFweHKNP41CNJrTXdtb4Fd46CJ8ab1RMZ44DbTFR9jvr4Bn6iuTMSKdJbVgEhPt5FR8wQWsDXqJLBjpwuH",
  "key16": "5s5fY3q7UwRxBo3t8cQKJ8TT3Kemg2DmttZmn43WYhgfqyYCUPnW6LWVih3vTQBat3j7FV5GDWpRMzSZV2TcHhVw",
  "key17": "4bUix3jfZwFqL85Bpp6ZDcosKMnSH6JmkV1UZRvdCDu6nUw8uHZE1qs7KwTbKqFZxtUNcP41zTFuA6dq4ST9CVgr",
  "key18": "3GACTRaPL28V4QBnqCGLQrue8u512deruciUUq565LrhpqBZsdd31Ph9gpmae1iGghXJqMw8VnL3Rscc1NwPC2tx",
  "key19": "5WLKPfJxNNyPQJHwGmXnKhQEpcDYMDFfCBobsZKCVdGwzxZ7ZoKb5uBzJ1EfQbmwzovUF3pqewyxb2Bhu1dpKpU9",
  "key20": "2DbYHFYdnjs7GGsWqxyEpAHhySz7Cs3NNjVXsgkPGAH7tggJUPdy22J1p4S2Ta9e8c73jpY2n6SZKsCbAEah4MSr",
  "key21": "2Sh5u6ZuRiqJsNkoxXPxuFomfLtsYH4oCHCDjuziS38CAN94GqQBD8RD6xN5atLSnpDmvdWGjFjzES2AnGLs3aFp",
  "key22": "4JXxuxVVd1dv9kk7gPBRFQA3heRs7PmiHZsHL6BYN8Wda8E4nY1NkkwqTioCXEd7fMQWoJf9uEtcmkuVe8G2dBsm",
  "key23": "4t7RYVCYZYXeyi2cb2Rs6M94rDPBJXEfgTpxuTNFGza7XNCmsr746VknAJzBKCCjRH1gK99WxSCc8kfVg684Jpw9",
  "key24": "4QCWcYmTHCK1wTRcXz2jC262co16B9yzckJ6mmn4B1SHdTm97NJU58vBFSWpf67Ztt4oVT1tfLRJjS5Bv9cyx7jU",
  "key25": "594UwL3fynPmtmguTzBY3DQfUh9jj2f2ZnoQdt91nYyd5dT2nKRp3sAA6buMu7fgEzjE22VyA1pSEzW2MkyDvDC",
  "key26": "AtCBfePvmKXyVoPHGQJenuS56c3pFoNYJGwX7Lzz1eNcRMt534Ls3dRhjERK1PfspugkmgDqWCozPRWvTctWmsg",
  "key27": "2r1bwNKqrA3hRKJPXjgNaXBkYApy5RmR4YdEBtbiewD6WoRxEPxYr4Br3J6CdPAjBGqcpFcKmMQ9tFXcY8JcHqhH",
  "key28": "4yWZhrZ8Nrqgb57VjYzVqjvtesjMZJMXNa2JUNUbie8nfHoCfakzGSfucVqLGPEVxXUj6BBFh8wH92weVaoYF6Lo",
  "key29": "2r3QPduXZSR6BMZ7US9cfdrWMVmNiaAFrDu3E95jCC55dHE4fhAbVsdGmPCE6XPBn8zT3nv18icCUh2Wa6x5gCm1",
  "key30": "45dxqJqPtHybmKYwwVRuGYhEpNxpfR6c6Kv3dGZdcYCsD2gcEDxPYnngHbYNuLcogvy6kVqwGRwLFV98UNA9Ue6d",
  "key31": "4bbUm74gGRg7t4HRVtxsLPyTvtNedKeBciK1mi76avgdioTPPboTw4Nu4iipg9k8WGQmjk9GBubCicaYFpxEWYTN",
  "key32": "3SLxzMYY4vqMWfzAM5kMK3djh48ikLoTdPuuG11JaBuLaaf17rjfqdjBckWQvigpEy5VnwxNkPHYHNcSfSCz1H3U",
  "key33": "2nkipG6yHDqp7p5DxkkH5waqWpM1szFKXopJQPDYURpLZMsj15a2DXpM9f4nXX88xNQdSZzYxDvT6ARnELFDT4H6"
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
