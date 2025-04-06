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
    "yNR9cyyDcWrGzgHqt7YJwGaNMY5sq1FYaBPvmyrSThFfFth9yVff7ydx7QUqpCCXENjmfGSNTaFdwfyc1HTUbFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCCg7GA99kNRkr7d488q7kKojRvcND3qeXqqkfakJyKMbykN37pJ86sYYRERfH7uyq5hp32tnMLWziAdrFynoBz",
  "key1": "3ECt4TmhjJCUxdMu1XFsiqRzsHA1UkVAZkHXZnPm4AwCAXdeb89aPXcpBivtaC8rRHXm4vrypQhQhY1P9B9q4qB4",
  "key2": "GrG4uGKhDxU3rJdDWWLjBDR6WMhwceS4fNSmY4p5ueR44i8E7Azup71qpnecVCqw8tJAv7rqEwHGzhZuwDpE7sX",
  "key3": "3L7rdTdJNDRx7JMwVGkDK3YfsRRKEhx221SJ4oQ27TabMP6CQ85BitKdf6V3qn11JCcbfesK6azZR9iJBPiurDEm",
  "key4": "3SY2RQ2KfzsuPEvhTd8GSkgkfWbPj6NMFJQLxo8NWeLUXPgZMrQswg3dC5r13Bt28oh71SRPzgrG81D41TirfWoi",
  "key5": "2LP1xuBvqVaZehfzwPcUZqM9vnGiQr5eWPy198M6ZVLdC9KPyMWwg53nVKhhv5rLedFhTNWnxWV4HgaXx3YYEbKw",
  "key6": "3g4vZSg6HpVHso6cmTM4Vcc6JDnrgEwPKoCZ972CGuuacJZr5FgCgPuoDZPF9tKhQ7cnvxkfJ26W3VyyoZ37XtdP",
  "key7": "2TTCZt4NsXq7pxnmrEuo9Koxbh1knomSz7nXzm9CNFW7iZmRQ8XJ7ZA6doKQDiX4G4hmy6ipUxLyABL2mjp9AaXt",
  "key8": "5g9UsS7Jb5VzW8wiSLpyH55egCEr2McTANXYypLzn4zdhEuAvNkH9zcjffsns6gDeKZ513XFnVJbUpdxqSb28hvf",
  "key9": "uShvN4odQrRDx6eS4oJMs1tznhfaUoENbiH6RBA5oUKupw7Z5evyJdCbLkqfgC98wxHYj22Xq6MTu8974aU2xHi",
  "key10": "G6gCopRMK6eb7uoMTsi784XNbwBTpSAvKq1ri74VpaAaV8UgeATQ58uDtH3SpqsMxvU1GQ3su1LwvhJDnRTgdWT",
  "key11": "4zxhY1NreqbEdMrbhgAbaW9Z4WCmTZP46dMRfaNjHwAYwAjb71XXAj9XB5TcMW2JxEGgD7uxgyWjgPY5RYzWL93h",
  "key12": "2ViQedKAZH2SP4bFXsvosfbPnWmpAnJ55SKKMPsp6we96tMU1AdeJwGumwh4Q7LS8ZodaR2ZMFvfJPWu16m1urCh",
  "key13": "4sFsyMLqM2QjodDCn6RWad2TEpFbZ8FmSKsKzJ91teEocpCqP8Q5gjquBPsJQXfVv8sHMoEZ8S3Jvz633eed981L",
  "key14": "2n6tWqWfAyYjke2fYR1WdQVP1kPfhAVYU1Mm5idE8nhig3E2cBh4krqsrbV4tjWadvdPsMNo5GgRutHF8kJ15sXf",
  "key15": "4VyLbSR2wkDjTvHV8THaJYk2MLkL6xwV5o4nYBkduksFaQzttVKy7EX1Zn4sR2UV7wrj1Vs4qECrKXx1P5pbmAJc",
  "key16": "5HVtrQv3BajAXdnXvRXM6WBHw5MSpLHBc2TM9pqYvD3eRRfuhSEMm8YFiUXPE4nXNcJcX2DdfHXUfdTB47Nn7Z82",
  "key17": "21rCDzo1bwBz7xoMT6ZQaGsxqQmP9LSfVZ7gCsX4Cn6WYpT6Zctn9QrLQQopM1otK4NhfkdFpLtoaE9xAA25wU4o",
  "key18": "2FMgZUGPqsJbeMSyPWP7VyXmnWKfYNtWDp2HTCo9LKtbh3ma8VwsaKPy9fCy42kGM8XMEQSQmaEhruuLDMGVmfsP",
  "key19": "4m8aDK1EchCShRSYFkancmpj8FQnBrqtAos6L79HBg6HFVvLMDn2sZKYxm87p76zBTjQ77oP2rxpN44qf6Ckq5Y1",
  "key20": "3RgA7MTLp9oti7DQQVqaZbseHMXvib4vgwM2XEwTLTxy6AiKQi9XqsWjPZsnscjLi6fPUCA8NVNT1hykX7BiDN67",
  "key21": "5BVG7EzT4UusYeQph53P38gTLNwLCoECqqQQbLyZuErnF1fSw3ArLtmgG8pDsVHnTYyPJCvnHcCLZCgbdaDbFLkQ",
  "key22": "3T9cdg7RGS4ChBhsEfE95hYVPnymf6dJDt93CMw8ChmgJsaS3rS5VwtscZK5RZ85tuNKAfjs4ZfkRzRgK7irC47s",
  "key23": "56fCBbLGBL5xqzDpy2B2M5yYNq1pChH3D3F8WeJ8Xz1WhzEiX6bvGp4LVcxPLTvz4BSzSQtBtMSNE8Nh2YRiVatC",
  "key24": "KEZKvYC45HH6wYByK7FP8QviBFarZj8xGw3DEtZDTXo1WCjTcW3sLtPsWWYZt3jiwjsj5UKthfXaouQsHnbHpr8",
  "key25": "3F9YrAU5vDU8H1ybPkm764MmWLMDXFfWoVee5UBuSDcZ17FTgUjh3HZhPUjQR8xcb4JdFc6pyvbCjon18NkzbLYH",
  "key26": "qFPFhGgvuYkNNcgmyA5y7QSyRJqg4XTfgoxhyGHss5VXtZZwkNFwx2iZR2eZt2oaCHrnywgnpG8t7TqAZLu4DQ4",
  "key27": "2eMZhVZe2piABz1LBoXCSFVvsrfhETbDJ5Zu5hJuepMboHAZijrDBAN6vCmJjdYeGdTAnQHe8e1uD5a1R2nyLPMC",
  "key28": "4pwbPmR4zKa6ChJHgaSXqVuJn1BkHftCFcbq4XpUqY3GXmWGc9LN8eLf3utY8VorACDHaqKGiVShDUEPLzBA8GDS",
  "key29": "HgiFXEH7TQuoUBk5L6cXjtXwzxGZFGB9bDKAyEvQU5Kk1sLmhqYF4Fweu2nNaLgj96E2kfhBhKPDUXvtiKtbpEc",
  "key30": "23gsQNaNv72UPrHxNeqor3fE7vrGN4KnU1PWD4PZs5hyvaVoLxGnDEu5vpgUAov1YpChiN5Y1678w3jNXqYCwvno",
  "key31": "3WFUkoWjytQR9eZJPTyWw32ZG38F8coG42nMn3CipzQ8JXXrAP8EMWjPbqGoZw65jKPGPqJUZ6L9YWncTsjV1YFK",
  "key32": "4yv1rn6z7FdnEppLhXkBuVZjjtmgJChs4EK4g1g8guGbB2YyTRqf4PPrJ6tCA3HDiWPbu9yGpCABjwynbbxDHxWY",
  "key33": "3vxHHXn8yeYaWhMWzLirXkxHxQWNNbNLG3dpVzD51CXb1ze8q2RgcAC2zRoTVHp2YUHvTPdGkJNFj8js5eXs7y8h",
  "key34": "33rcA1yGvTkYehWCHrvWEm88JGv5JjL4xU3cRM3DTnRnZcQHGijRLv5N8r9GANxnRiLpx77ryhBURGuGLf4Drokf",
  "key35": "5BUT4QVp2THX1CwUVWFUm3G46XMXXrz1m36HfLgVMkUtH5ZcjpUdpFKcPn3umNPSE46RtsxrdgfyzmT7AFt3TTUz"
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
