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
    "2XJinA9jAgZ9A7HzkpdEUvnkE1g5QEzR8MWfCK2wgm7KSwA5NvHX9bofA9KhrySYRXcovhMVBXtwxLZojxAcJXzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nb2aZdfkyLWNQX8jN64qYXn8ztGovd7RPNby51rYZJBX5G1hGXVwno8PeAdV4iwYVwhpZ1hkYsAzLC8ukJ9GWrV",
  "key1": "5PbpenhYgxYd8T4LMtEX7NPdox4UguVJoyzMWSgM2y1z9nMY3YnZ6CmGgtVYfbYmULwiujTPjDRxkYgdrjYavSeM",
  "key2": "3S7e5esHDRv1Er8nvRVdFAYEzyDUNQcsKzcccQjoNWfMp7Us52A7kfV2REQ2N36Yxg93qFK44q52nmDbeFMovRyo",
  "key3": "4VuCej3ogMMHSZouMWooULc1Ujin4BCneQ5KtrMqwuzV3vKhZLVALpmmEVEBF69LBnCuC5uTFiSAb5nq3XHnnobs",
  "key4": "5g2yvrTh1J8qJiuYNtd2ALT7F7qri81QPcnSPCcGqmj5dFq2FwCGeSQiRctAgn1G9ChHK9NqwMm5zntU9e4s2YSH",
  "key5": "Bj1aLjR9QUKakv2x9EkPBndSFktE4fusM8BEhknM1FTAa1ozs6CTT9aciQjFtFbFVG98Z62zYhkRekZYEPvJQTh",
  "key6": "2k8Db819cPx13RGPnfA4uHBgsrvZQaPhG675japPDZ7B9XNwSXxBJrAK7qLVjyoKjJtPW6YERJ8TTLQH7YUymUpD",
  "key7": "uXTR1tDir7g8A4bEc2GyTGcfLSRE1bGt3ABCW21bLavkzZzGFMvSX3yxHhb38ji51PMr1bpkwQ78ZwkeimMp8HU",
  "key8": "JMsm1H1hd3h9wXW1fBfEuCLYcZqrrdddyRGwAUYXasvcFrMLhscVEjMxeqrwVajxaSSe3hzh3VzVtK5nCcLKV7B",
  "key9": "5fgd86ZUVYsNwUKtUd8xrMc5Pr5AMYbgnQxBNFjJa156CcPzftT3ubMtUTCAFdwzRKrVtorGPMs4YUtRqHt5FtgN",
  "key10": "4f48652u6DSSUpATcj2WDjBTyFxPBWFUwaV5h4S7YKggXC88PQ8ALTfVceBLVFuxskhn4acBD1UNzyUoPbsYD7f5",
  "key11": "63waNDDZioY1XeWa7kxpfGuiFtKwspws6fewoiPwoSRsfHMPNyy95qDfHHiNyL9nCSBsr9E2xWyheR5KKEi3vCcQ",
  "key12": "3zjHQV3cBXJ2oD5GMshvedNgJ3ACsJJ8xEq87z6D9Xx4q6bAx5zWShnKdi7LyBLd5rzbcynpnxzHtBqA1LM8nxpH",
  "key13": "64SiS2XaNrPp3mAcu95NPkTH1xtimECLcoW9WeoeXpvx7tB7tdT6DK1rMCFHbQ6ZV1B1jtUuPh47zLDawpaEvCLY",
  "key14": "5F1TkejHEC13YseCmHSv9VSTy6pY5KML6tpQuzSPV9TL8CWxS8QqxueEQuesVcU1U4fdH4c1ZwxvUmjWrWMoLLHD",
  "key15": "5RQ7WJgQ4xpNodvBzzozyNxKgYoyBdBGF8w4HndBiSLCpRn1n3xZ1RwwBcAJuqmMPpdFg9Yb9TGBoVB8B9S76FkB",
  "key16": "4ozaVRAeYQ4jLPD91VLUATLdxKAp5YYXBtkePGoSEMxyQXXPoXLVdieh9iopAgz7S4uEutUrHWbBGSsQe6sewn1w",
  "key17": "5UK5sUJDDramDDwgumcoiEC2VmnTYGzR856dM6qFmEQ8Reqg68ESwUi1NN8Gi4UJrjYrxFwdMxZsiqNNxtwdQwx8",
  "key18": "2xtiAwKVJsGjKitWM1TbKkRaYgQ57sgMTbnSFm46XaroBEPremwnTqe6zFyVMM4WJ8B4Rahz8QRtuWJBJX17Wgdq",
  "key19": "5R6rbhXv56ZgzMwfg9h8xZbMWuErdT4NYub5ocmkDcxJLW3PMdYd1yRRVDL7F59rLwZdWxJpmUPP6sQQZvrnPkML",
  "key20": "2o8M3sLABoG5Mpku2WWNisixa3ZLi2UCF6p1HE15HdyvbLVz2zkKaj1wC6Y9JnGMCGNyhQXcH7GeiyUyPJUFqRb9",
  "key21": "4d9GziPAAkwVMqKt8SFZKr5HsR85iLJRHtH3scJ8tKqF91mbQT3uVoyWXHpUg3rPY6BtyorUticMHSaerdc4pKjw",
  "key22": "4JVtA91rvHVjdGXpPJZMArd4TisRWBd3wxefDSbQoeMACxLaG2q63EJ8Bec4Rx9e6ZCfFzsrYgzy3EfGukWFS29N",
  "key23": "4n7ipEZAHyT6TifmTXE9o9n9FawGwHnzsrk5VqjjCqhcpNLR8kt6tvdrBifTMp8PFeMrWoRS64SHF7tbDgNzU8Zt",
  "key24": "iKFKG6U6gGGdsiV5HDYE8RqVpCb2cXtJdWsgQdF5925sUTiRT2TJwKokTyY2n7TwrPgphDMn5mErFmNc7qhyfAH",
  "key25": "2XUxJ1BvLaV7NRWEX8nQFhtuNP9vAcsPrYppZjHyHn9THq2yEoJFuhXm1QdbK2PnJQ7qHr6R2sziUmicjHUxBFzv",
  "key26": "2c1srp5qJyWNQe8WPzRcbu2K5KVb1papy115KvJhzAsXdWXPBWs2TF6DCzrS1FAnQdEatiV9wxY4Dp2nTDXe33ts",
  "key27": "TN8BNMCNYYJj6wjEG65d7Q4HSxEdjjYfNysxZr9mNa1iudfFCK19eWrR58oB6EXdEHbzk4FbcNBg8xQCvfFUNu3",
  "key28": "YUDEUagf5MKcVKYkhZx4u2gqGNELNjz4VMtGVhV1EXUd4GRHwX6A1DSHt3eqzKmLjC8nm1WDy7Zokc1k4x5fqRD",
  "key29": "2ZrPd9KGCn5ewNnYTeYiWYa4QRqijjLA9Wt9s7fBpDQA2yERmRaWcKUy39njCusXuh9PPRfnBT1T9euekg3T3tJ5",
  "key30": "5tLSKxDwbHvcoJZT542phWGaJJeN9yiuPrJZXWouLNppkRgtyZNgNojF7Y8sGLzUJsgy81RH3U7UDr8r65qEM59E",
  "key31": "3r7du1TyktRtULnKkFwRQtvuRUwMxi82Sdb9TH533f7U5nEfuyW94DMH8mRL9QbfBnF6Czdf3hyobmpGMqzQufWS",
  "key32": "mLRQutPNBSdxcEGkUM9c56AR54oaFNoMisxk4dkEYYXjGvocoRyksFonMisxdYourLiJr4pSvVc1c335rxz4Xww",
  "key33": "5rBLrwALVkeb4oLeNWLMTY5YcpSDB2k5CJnqBsghQyeHg4B2nU8sHPShdKWXRzTHqrTfa7nicGjDX7x1sHYwGkfU",
  "key34": "5Ky4GaHt5ijLVqyCt7QeRNPyziMVZtiL8sHmRsrLwBwfUrfQftqpo1mzcYXAMirotdv3aNNBSu2Nhcj7k2UMvwk9",
  "key35": "3j9fdNSNdXeMqdkV6YvKeeUicSuXFWe6hGy1HcYdPjQFaZM8L3ZyZuVH5oYkQgh2nYbkGDsemXv2AQxmsNsoLomt",
  "key36": "y42d6W58XvPvEte6c7KGUxBqZe9mjtfNSEo3X9p3bEtqmKW7FUJ2NFqFaPwWTz2ysFupk7v42jASTQJRaSEWtUo",
  "key37": "4cr5LYUyypkgSC4DF5QY1v4MCM3xHJJTT1siDTYUARCMtHgF299uPjXNFjNFEGqomt39dYYjHE7jS617tsPJDCPw",
  "key38": "23sWwmipqstbtQCWyYpvoqkHWFqUwfdXahuKk6uPUtfEwwdUHgSdq93T5HAjUJdZwP8srVkfPwEAUzZcfZbc6h9B",
  "key39": "5pGRAA4hDtsrGM4FYd82PaJduJ3SzJzB5Y2DvShVoo3yh4XCEV9e49BgjFLZod21F4JHGr7VFzaRT5pGsTpzJwjo",
  "key40": "5cVxVZ5y9MaYwSnC3E3r6Zg3fCK9E3csqFnoczWKPcnkH1Ksjjcq5Te9ekYpSPxCAGuEzRmBoshbZWYpy36UWAFs",
  "key41": "2TSX9bgMu5XmRRSiT19TaS9bJfSQgzP8BpHqq293sTvjPC2SZ2QfhNAAqXzzkHEAKaPSLZCKCZPb6fA71LR53sHt",
  "key42": "4KQq2TBfz1WbVFNMX3XkDrSVpo6iSfPNh6n535qDy71D1M72wuLRPEZvgSh2VesRnQSx2D9y2ABfynE6BWPgzkGY",
  "key43": "G5L6coqaGbUzVdppYW3tKCVSTxPjYpo9e93LNqqdy4Vg4k9w3ub1Kinvf6ZeiDJGqWB1jGnthhNM4n9sgegAoEv",
  "key44": "5Yx4JrttnyuNbGkN7RjwKkNgFbJhs7WrM9hC6KyqmDBLtYmT68crGqDXfXT4d6JWQ47yuokmusZ6s6zZwSMz3oiR",
  "key45": "7h3fCqnK8AnAVKopHEbNXegUqtb5SdnVKtEQoLtyRvBV6UovJX7m6iYEyAWF7RPMx7XVfBd73waunp46uXm4uJu",
  "key46": "3kfzasMHyAJBn6ES775vhVAAXPAYEheiN7DNJx8tCMRhyCdcsH3qd4YvKysjECos9LNHsiSLLyrK2paPMWkwvFUP",
  "key47": "4YtvazVDCApPZ8htwUgDWSykTQF3wE7yK4dFt1wDhL2YyzbfnF517n7r4wfkUGwcbzqWVeVSDgTus7sKJEwYc3AC"
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
