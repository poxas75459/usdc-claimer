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
    "31hmjPDbka7MgS7KJZwuwbDNNYDE3gAgDpSVBckRjpmpjA6BypjA55Hyu26XDf83f8UDLmeUekXgTGRy1pJfnJNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvXgU82VBQ5JoYPFiqefGEa7wvHowjDyYcSuE1WiWiuvChu6RiA2CgAL7uor8mRUBLjXhtGxkzcqyx78doYbLSY",
  "key1": "4pGGbWiCGh5fcgP9e75LnpwxcR52rvvGsEA2UfiDazvtuwuf4RCyfE8qn2pqdyFbNcGKwUondfk7fS5QYGCt7BQA",
  "key2": "5XHS9KegnXq7gs2Q8RYNqFB7sEhFLu6n3VktQ1RusYYtwF6oR2hkwrZqZ9UoRBtxBLkmE7YxZoaY2rduqPbxEHPC",
  "key3": "2PUi4yHmS8ZhdqP3RzhbNtaq6tQRTYpcKXL5xU5btc3hRteCrV9ne2K1NXFX15PDTXh5QMK5wULCqvYeVoCLPuoA",
  "key4": "5a2AadtjjZ964qKv5orUbWixbWEWrWhajTq8Kmfh8hDYSN4HN6xEaxkuVNT9UE8VC6LWB5ULy2BCSagY94yVaL1s",
  "key5": "44Gxr8oHdBcYagifpLPPtmGEBd6RXq3DrtBwgY9MD2VyM5zamvdR6s9c33re3xmHR5NG2SBeVJFGwnJNMkEqeyXp",
  "key6": "N3bViqzga2iTcRoc82D8icaLy5c3XaQJFxnrYTNgz3twCRz8oeAhL6TfyckARQXkPCzsYZkj3xeyHQ4Pqkg3yEd",
  "key7": "3SkrLMPErB4UFLFyK1hBgvEwd2MnW6Shyn4K4Pdntey8AhJA5V2o2GouzWoR1HAWD7yMmyVSpnAbuWa8sPPWYMDR",
  "key8": "3HVMBXWKwv6wwGae6KF3TWyVRqoPTxy8j8R4FXz56xBKWK8VtdBLd36oj1SAU68UztCvWp4oK8DLaMBN6LEWZ8Kf",
  "key9": "58MPFi8aSpVch9MGdPudLKqbs5QdHNsxamhHRQBcBJgDWswXkznKVXwmgPcCwCd7BXHcEBPMukJENZyhM9YUR68a",
  "key10": "jyCWtVnXGUSacGzQXXwbfzPMUitjdkSX3Trc9qjvthg9YrAyoQi3FDbWEabbrjtaY7LEXiLnxNj1wRb89ioghFE",
  "key11": "3S9kJF9sUBcgo83xJTAXwdhhPA1ZjtfFTpEEkTB9KbCh4e3kpoa1w6RQZvwvnBP2dNuuUqGrv5ZKyL3eE8MbemdW",
  "key12": "2DzEJfRoj6Dyf2d2iAbeczfyUazJWxHdthp11YmociiYobs6mJDs2GYXf7QUBS4vpdphL1UGBbGeDNJFA9AmTddP",
  "key13": "Ck4ahJcXtcDac2wAtV3N8R5vqvKY3RmGu84QdSmCjPmFAPeuS3F4MhbzABYwmNun5QCJcAY53kgQnonXRRdKWiS",
  "key14": "fJ5Xfqw846994CnyZZapSXrSaM6hW5tJKa4xR9mSaoMo8JSv9S3RyyEcFFqsaJXMeWjoVcRxJqnDEH9PBkcrYgb",
  "key15": "23T2XZgvv1JtrWuDoABHvLVbGWPe1v9HgBCtt49WDYbvEiVqFUhb17iGhGN39MSNP9vMLC5QFApLyrMpn6weji7K",
  "key16": "5cPTGUdmPYo4xDXC9aLJnRsvWExwF1uXs77X4rqbUvWrciz75NZtQ79PWQcAsM92XAVeV6A2CXCSVsCbPNuXqGZs",
  "key17": "3kg59Zbq2RunDBjFBsX9vmP9Z7HsZdtL5AsmQ3WvMQEU81ifK1eS8PMX7Ejtcvn1zY3iDNDhsng39oGWt4ExGBmU",
  "key18": "5VWEKupHnSpazpvymtLgidkWbLNWuDJotBAP5oRXbCQ8XAmU6r5DUku3ZF91vExFLaTLuQWvPrtmxFoYajbXNP4b",
  "key19": "qJxPnVdkvjT3S762SByD6UDBVE9Nnkp6KKLwwhEuQb1GZkoCYKF6cvUUtnqWejTngcJavt2BQ6YVtetGWkk6981",
  "key20": "3oMooXQJouL8m2BMmLui8eH8HsFFePL57VxdVCadeeanREvADt3F9D1oAr4YTE2owToNagaLDkqfhZriYZY7f18V",
  "key21": "3vBZNp4oErGzK3FYkUENeKnXuMc5QgUGNFPKdjyJzDjZ7bjf9iSSRi1cDGpVVo7fhbuokNDvEuEG5qbJDX9harnX",
  "key22": "5SzJHs2pSLBjz5x7aDPFg12NxBKKme7n2Ld1hVyZ8smoCtxd8Np75qzVR3uSmFwL7dUphF5Yx8eBDRUx6Bcmq8R4",
  "key23": "zrYg8jkMPSd2UQEzGBboZoZ3ruhvXGVxxjrmZ5KqnUCLBNU1c5n1hiTs9mrje7Mty9zaRa9d6oeSXq6cprJEPEn",
  "key24": "5W2SecLk7rZvwvfEEnW1U6Dg4zRc9vA1iomLYCRP9wdKKELPXKNjWC7ujmPu8UMKvK8p1u2DaqExUKVDRbxn9fye",
  "key25": "3k98GC9YP1YyY67hY9YbUvMewktvejo2xExiwqCmZfg4kE9bFLG9ihbcAuitKrNcuiAJUNreC8QEZftcabbasiXi",
  "key26": "4xazWwqdxeMHsumYxodu4Snt9142TtCCmhDZ1UKbmNBAjvJcgFoJKDFC8ZPKSyNpZbBAPcBGHXMKopeGLWqxwPaY",
  "key27": "4VhMSVVvTCE5cvVBJREr6Wz698ihapieayeBX5zHqWzdAMtntVEYBNGo8B1sPbfTmypDYtSXrCTqg52WZJvzYGmD",
  "key28": "qjPTJuy2ciCxTvfA93GM1wwi4Cq1vQaEDS3LkXoHqCYLrRDu2MoeGSM2JeSWG9GhPrBQ5jNkWQcHTCquJq1NK6N",
  "key29": "9MFRAEVqRXL9afTZ1b7ifsfjEPhhRu2fJYhQcrpS3oxTmJwhk1LyXAnZouzHCZim4aErzTd3sXLgsVaZE89ajQu",
  "key30": "5WoHrNAKxzViqXKB2J9QcoqExfrCU2k7rpnKX4bYEpuFaJ1iU8oVz6WRkXh5C6znrRNmVox9b16sqtTZ4ZGu321b",
  "key31": "5f9x65QapGtBVHQxTbBmjSK4xpFTZiddWha5MddGsKWHZhcVLZAcuv5CEHrQHwbZToxZZCAUxwkbCEb5udKsWKW5",
  "key32": "5SmUDtVyPy9sjVHc9iSw65CgsMTnx4UQFZkU5k5po6ByWAYFDayfDK42ccPf3wzzghRH1ZaeGuoKiyJjJ7nEMbDE",
  "key33": "5zGSYSki5wz45EMceRdTncLrjx3X1RHqGjVmtFQtVCeoSGHG33FnmkKYtYe3Sm12HPvSV2iRfZGTj9NcbqGDiQkW",
  "key34": "5ihfuPaZhgBuFnpZLyTiuqXpaaw92sfKnwn2L9YCXoeiaQ5XM7nUr3xNZECAPZ2s9s8z7mNujS8zFcxoxZduvRsk",
  "key35": "364i2JPwXarpBV6BTN52xxqdyJvLPMTCnt8ZbTogDc8eYPvqqepU2Z4graPFLwSN2eMyigvZJEEvk3K1guE21WmB",
  "key36": "yYcXpGooC5z9FeFP4jjGc9k59ctvCk9Hq2Lj8eso3kP6UiMU4PdNb7t41mS1iZDMNwL8n1QrTi4vifhvQoxQPEu",
  "key37": "shfzUdM3TqrTXwvB8HEb9HvvdYvvq9fAz6wfJZmHZTkHevPBV4LLJji5VStdWAph2PD89AyvVGKd9i1T7zRf5sh",
  "key38": "5HCKeVJ6qFe3qCPmvTq8a6UiAraBVDBKXeKuyhoFkwyUFPdjWes53Ds3qq1qQs2BdRxYxJcpNcXugGCxavcDiE89",
  "key39": "3dbVGv5PpYBS4NfmUDqH8AFrkoKD6joTUGvfEpF3ycqK3eBWSNunkUMUfisW3uAtTjAr8yZtA9kGnyguGtj81eho"
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
