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
    "4JtjKUiVwVzH3HsR4L2sqfBUAsgLmkpEnLYH7wZtsfhoG1XKgKEMCJb9AZy2npDYoyvRcBVCgexEBEb2PvnP8SCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QK8vJ2xGtCpjDBaXx5P2BC4RdSbNmmSNySA16qiwUcVSpF8vPkhqHunHjkBHcZehpZTEph4nukqFkFAWRQXFLfY",
  "key1": "4Ho8hKaRRj6FBx5b7X1xjXN1oGULaBPiyrJxwuYteoNDKebUcGohPvNN8LghjHB8ijeh65mcgkmybJUQ2zC9gX3T",
  "key2": "t8bVTDyit2Mov18N6JFqepBfbWG7HzCPYcdy16gWBXwEHhChA7BPPR9y5FKmTRXaqTiL5qepPmSuxEbDCHHsHt6",
  "key3": "3JHK6yp1VKvJDLX22VnPje8rniErFRdDPn7BnENHqyiECMWwe78naV5aX3msCvtrMpVpeGJWvrLLLE9C4QpmL5xH",
  "key4": "WM1vm3jnUyUg9MPwpiEEWTH9hLPJhgzHEvB36uKnTHfjf1JahXB5vSbdShyiCDFxwPnqnwZtmmkD42LF7jHtjVv",
  "key5": "LNgvKgNqbruyVc8NB1LypkvfByXBUZjmkocK16uUYYDN6i73Djm5EyY8SjiR3TVhMrHDmUnRswDwx97gyfiVHiA",
  "key6": "pnrdra5JymZEzoytrFNsD85PJRGWH8bszwdYfC9FUHjPq7SaGqUqXp27nYFUJcmQUJ8zzLj7J9bVzpX6pD1mChT",
  "key7": "2vpfcaBC6wDAta2Mw8Wx6svJiYqUmLkU6PhXGfBy81yt2HHCpsRycsqSKmEDxSFSKtm2u7s4PFxy7LNPhCjYydQ4",
  "key8": "S1mJW7dxJNTGN2PDL9JcchafewHABiFfw3TLr48uMBYiYY2xVnzAgGntkYhmiBev11DgLMJaNcsALsyJqun6jXx",
  "key9": "2ohvekDMQAZNixihGwV9B2tT6yXUJiTzdZoFy7tFp4qUPkG9FwX8VEnFQciveBy4n3hFp9sgU84PquN7uK62QYFe",
  "key10": "5YbYNYVVL9DCCx1xfnoicqo93dNJkgTXVvXfrczo172dypDDV6LTakbr7AoiUV7v1SasKhWVNP4jA96htgYZhJEX",
  "key11": "5y3guTFWDy3pTf13oDRLoZ3qDBiQwYKtEznJBJkUXJtU5YXGUMEjqsdwaq6nQrqDzGxbR1XWeA4nisAyUmXgvAzV",
  "key12": "f1RR8UJyHidWYZDRPCfQDvL3huwmgP2cAaARwiskvvjAw2e2CWt21ZSsNhpca5NK2QjeQoDYe9JPdVfmAMXtzuP",
  "key13": "XQybvP43DAMzb6YPHcHahwWVT7tWs8XyK4nvHEN3wQ4HcyodNFTUH6kFN17Hm6Q1WEQxi1rbD2ipQeyQzy2zaoF",
  "key14": "3URY6gNnojMcCjN5cTkwX3EkNHmeUk1azc7oumskkShS99Bui9rFKLW57R3tLUreasCstbbYHNaPGcuNWjQ6Qw9p",
  "key15": "5cjaqQqDHuRtkemSH2zzodpanYLasKA6viFshiXqQUaj7TH3eqAkQPARzsPtqzxwSkBCEM5pUzw91efgSac1vHXu",
  "key16": "4n2mBovMDLA1b2kTfTK8LeSnVhURcRN16Ga7pjv7MPd7y5ST2BHxNN8ZsfQUNRc7GmT3Dd45kFHMquREcwsTDoEi",
  "key17": "4g1jS6QSRPN7z21nKuPGuTTQbW4uLKQGmNFjT3rVYpE9NjPFfsapU1bhvSEtAVG8azazLcg13k7DedywjP6vsqSH",
  "key18": "gh8mghi2RVg6Avw7Utux5Ksm6kmgH5FLnNs5wMEzFsGJFpYNMmoTdQq8denw57kuK3LVp2FgdcvyiisNsqCG8Z1",
  "key19": "5DxWbPdUYuFXo5vcPTgzqq7JTocji7UBrMGJ6RyZD5UXGTWVU36oph4Ws6HRg7KopNJ9HWfvVFd9MonW52v5xUTH",
  "key20": "5QnA8xkh4LgsKWcVn7dVfNy78c79VzGQxSRvBby7xNoBDvwrYh6yipaz7oWjpBBGtH5ycHtBecwttxNzWZyiNbx7",
  "key21": "5uz91DUYNFj9EN7NXB2Bv389MYdsWFnHJvhTFdyNdjymVnb9vGWx69mXUaNzx1NofwxNfFVUbikHGhHqjLnw75jc",
  "key22": "4eFh4Dd5Lz5bE28CHogtykpFkSFaPFCE3yxiUN1YCiZkJM9FEwJozHqkjua5KPr2LGEBPcD5BdJbSkahuks5aszg",
  "key23": "3k4AxBySE9RP119EheDH7rmq5sAZLoRTwYLiDBcpXmNkTaNa2CwtnpuXyLakmecKi4aMoVVNeH5D6RApF5wxC57P",
  "key24": "32Wpzm3PM94mbA6uqsYZC2AtjTVLqa6GUPwc3w9gUaKxE3ETvhdNSEqHsg5JPirLTsLpUFiPuBPqmQFYHCcxepng",
  "key25": "542EnxEQnRom3aszFBMTktqHVq3nDf5nrkkqQwTQ27kFHg4RP2Gnh2FfLDJMQQdur7F36thqhLdpSBTxzDq2pxgt",
  "key26": "3Q6Jk1cxUF3pXvM7HK1kMgQEJiQSfWWsp6rxcX1DBPWWFhjaeHVoj62yVmq9RyEqrfHKjeTpr3TiDKFoQjGTzjpM",
  "key27": "2GyP22dhCcYjzq41ca5DfH1rbXykF7uWLfA4thW9TrCi4XocrEBbWBfFq5U61u8FzWQ5oiYCjWtXxLN4iVsSqyMr",
  "key28": "3iNgmX1hUkTTAMpeJkd5SoqYQjmVMNaCGTVAMK7fbCprijnUJXhrmPQ7CFDfVLdAoJzDuzRgbTCt6j6L4o72mm4L",
  "key29": "65SaeddhfeaRDqazMV92yRSh9gTyRYLHXSY5hcmpAjkaoh8Y1fQzRiDWC5Dcxku8uWdtSpbqT2YV8kTi69sUxPhd",
  "key30": "392DJphES41eFKgtd7G9S3WvDKKjSSXbjnwWSss3Xi1yLNgC2TH1NRS6ouSseFMJ3PHKYBocnLtSRjq8u9DGchM6",
  "key31": "2wfdjrPEujjgwFBsrA6uESveTUK5KEytRjwmSngEKQ15SAeByfuTW3ZHFJcbSN5D4189KrAtaAGKTvWAAZy7Khud",
  "key32": "3YCHtpetv8PGRmc1MZNowCeiXvPthBxVwmYyo4SaZt5RBFQhgc7WCWTtorG9hHPPSG8Aq16uuiXhPCznpeEyM1ch",
  "key33": "3U8Rh7azNao9cLEf366cq6eHQ73voSsaj8JGjsVRgNMcNiY3uuYLPz6ggdJosG24xGUvdZLEWqsEXrJPCoyA2vKw",
  "key34": "KErYLmBGHcrFJ63y2nG3eipAv978YTYR4Rnbz5YzE58FRrtvsv4EGEu85SxpmZd5rNn8RWU7QzTgJpYyhSgELLW",
  "key35": "2B8G4DBVLtHDGZP94arav3nNb2Y1xVCR87Fe8UjniB8kUnwnLdA6TuSGb8qqRpnXZgQkfpANERxVfSHa2Uc87dwn"
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
