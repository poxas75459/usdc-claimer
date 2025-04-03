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
    "365Y11BvPeCB8DzN5rXkSrt2CoMm9DmoNugcKs3orz41eBnRiRYJ4WBAmzckxHwTiYqjeybRVn9VZXx8sV1ApHcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HuYAhP2bqig9YfdJmdb5T3r5KiKCmqU19b8DNiUYBfTKTF24G81eDGBtksa8hdMgw5wkmg7fqBjBxtR3Ci76sXf",
  "key1": "5cojzVjJz9uHPYne9MfnNrgjjfp1LspcqrRVy2jLWM2cK8ripBHE66TLLHXT5DuDbc6xB9bk6g7jquZpzzmZqFnq",
  "key2": "2SpeMC1hueCbcAKHpCgQ5MTAm4YJBpW5B6jDPm96taurbP5T4k7iCqDufJ1u4hnewrdv7omib4GdQtkVpvGG9Wxz",
  "key3": "5EVii97MCipZFPntYrMdd1yNXgsKSwk8izP8C7XR9jnkx7NZe96w4qkfGjbYPT2c9wMiQRcZdtibz6reDPspHywB",
  "key4": "5651AncSVcZdgj4rhVbXm1TWodhjRJBLWVWt6aTqhCsBBmVgKLMQZepy5Jc4MFzViHoajzkau7fsUnf6hAFQJ8NA",
  "key5": "2mVMWysCGwtRT5ZxLEqv6svvjFBKU3quNufgrX35d9RSYVLxnKagVcd4rQRaEnhxPFMrv5H8FALJqco353g6oRbD",
  "key6": "5GkWG1ackkNUwwBH6KEyd4Gbsda9PH7ZMsU6wCMMxDr3BrCwWCDbCCbdL9c4WcJ3R3kGyoHh8q89VyjUPFzu4m8y",
  "key7": "5vh4xZCJiLDhom9JaP8XCRgbaPV7nviLbpH9eQVVwHQkF5LunF2RiuhkmaZrZxunVHAKcP9RsYsbZG7Jiy4vNan4",
  "key8": "4dZeNJGRXzsr7MjNmCQpjtaWkg7JZeeYm1vao2Spq8xeYi1h3oh2ZZMMZZTs2JVD1Umv38nmEpSzFWS354mm61M8",
  "key9": "27kAzPumdQUpUe9v7Jh85x6rSB1iatU4DXXk15jPxdADp7Cpv6JUxN7JgcKBadLfQQZQDnfqsutqeZwgGkPgc3aj",
  "key10": "2p9z5GhmLQzEVgrMwB956m5SSpVNzi12eBzPeZUURQPEKDP9xkryNEZDZCwpEcrZkB3NVSWjKU1mQdVyaw2kiUxn",
  "key11": "3xpRwcu7cNozSKQspcxQ5amRPGa34ZMMCWPAHS9DPHKkLsMcSwatdQ2sZzZYb7nJbZSMJjm2tms3T1Vbs4EkJEJ5",
  "key12": "hoGJmoh6Bz2aM1QuieTV8nj63xUJvWBhwietkGj5ZMKUFa8dG9gMkw2ie2HseUBRUjqvauvjXVyVp7MjYXNSM4K",
  "key13": "3FRJLxSZaKkSGrztAFub6iKcA6B4wLTXRbfVWer7SnArMBDs2HrbYBbEwZe5PfJjEFrepgPbwThVcuRWd3vzMc39",
  "key14": "J9ywh2LGKrtaRm9BEtLXwGbsSL8j8Z2wYL4epcRLfeRfm1Tw6pzzWuvH56q7viRP8XCfy22FaDfGh1fc7Cp3VLH",
  "key15": "2FbZiY1XVY2UqTBpYpDMMQbzNQCGiipgMPTEiM4qygXvmcuYskdrePAnuoGU8DjP3aQcZ2bzqX9SJrYQL11MxQ82",
  "key16": "3yauoAiiSMMr9AUJomzax7oTGhjqaPGorSNzFyPHXzw1cWQ9LHzK5Lhz6wtWMSrzTyvZbr35sVyxN5UFQZ7mnWS6",
  "key17": "3hE2HGnLU2bj2DpKxA7TEZEs6qMtqibLQhUmnXxU4iVYVPU8dYZAkwuGMJbPnxcwSmMWe4FuaJakV3v9ibcTx7u2",
  "key18": "2pNFfLkDmaqsBgE3MJ1uMQxCBCeNCfu1NHeJBxi8f58Ppzx5JdtRMcG1C8kLfSQJAHybxPsZwcBgLSsioijAJZgf",
  "key19": "57rDmrVpApH76FX4nDjCZm5XWGjdzXgNrQ6y9iascZFXiyPrugAsUW6N8duu7VikjSL8gx6k4KHrWjr2JX6YgGQ9",
  "key20": "4JJowpbCsgRtcuu5bcpTLyrYZqpCLsofZvqYL1BUpy8Dy5JwdYdq5rGfTg39KCYUFDjVybsAozDkLvFfPUqbdHYG",
  "key21": "2yq6zMt6VYNHv9hMq6FG6RJyEuqnqZ2CEXg1v7TZ3y5HqjL2pWNhiMkwdr5r6748pAF5NhCMaFsbpKGa2WBdsWMe",
  "key22": "5Mc5mdLUMj9xRLRsFXcs9c5YaZdXjViJsaNjmagifL9x7PNmotUcxLyoH5PhSC7XpU6zXTrHeTVB7hMSwKpEGz8B",
  "key23": "3DpvR8997q4TSHYtu7dx1Cw7QhtNEgzuzDL46r6SModfhFSY5sGRaQWQT6Tmv2GoFkjHK4zjt7cAMcSrJATLH5UJ",
  "key24": "2UioM3VVQjokpFWdfPebh3UaKds1WrFBDdCS2VaXZk3g1EUZmGSVEQ8SL5NoAmswMQBq5GoDtsqvt2qRrGbNuf5R",
  "key25": "2TGQ27xAMRiQRR6euVR81wumnKoeqcQ6T2UDfNzSsPGD6SAAvciQ8gwZz9NoLMx17nmqJMzBkfdzvQxHyEBntBLT",
  "key26": "5Gwo2ScjqjJysrb31uLoBW5Dz87cutHsVXkcUGgBGBAiS9yHUyGKkcdd5zv7AYeVW317oDLogzBuGNT1T3Ss3xjV",
  "key27": "ymujZ3CzeRGJL7QZf2z6WKybS7CteDgPdYWdYC64rrHiCGMFSfFQhnWNP64wvBfxqC5Z9My448mTyWXAefD1U64",
  "key28": "29TYfSpk8Lmm4BwwY53twjWhMhyU6mSFvQh8sd6rydTmJbBWxc58xyLbL9zts3RXGjsEkPaVu6CBFYUYVFzjpygs",
  "key29": "53W53TWGtnKMVddi1VLyjn7KXnYpDFaa5gDBGkK2hfviNFeyQP3ahYDyNih1EQ7hYRof7hrfrdDtUnMvTZ5M4fLC",
  "key30": "5ZTqXhyPivD99SVmhTjt7biwuWQS3aCRg7HSvaAqiMgWc6i4SDHcZ2sy4woP6sDH8biRSXKGZfYMjAdGLjYiaAam",
  "key31": "3BRxQviPw4QQix4UmToRZSxfgg7fxy79ckbhWhw24sdUEKURyP8fmnLhfurynThAJBKoms6vi43sk6XPyx3nSXCM",
  "key32": "5rjiJt3e5Es92EbDxXXoRCPwH7nUeBmu364HkQ8TPzcNsKbqLp1XbQf8vVceEQRn93j5HCbpkbSgsiRU7CxGRs4u",
  "key33": "2wBLESnoW6oitB9hiybSAGLLqPnQyoWRrxXSjXKP9g95GLRbFU7u34f6GGuDa3FuxQYVdFFyv6KWdcHPgt57fEy5",
  "key34": "2VYPqUr74zQBfde9wcCzurux3WZePopXW6zpVsHN61faRB2QwVEzuUgyvvzwQhfycS8gq4inUgangqWdWDGap9aJ",
  "key35": "4L81XMkkLrgTFTnT8EfzMiowo1YRX36nkpjK43wbkrDGKpBiiZmpDWkMLbeK693xQHkjX746TJmZxPjuQL4hFVsU",
  "key36": "3kebTcRKL8zYwnyJiMEY3g78cVoR3EFWeeoY4XpjHkHUoHkGsNwxxcSBbqYg7isZMi8fkGD6WQ9EmR3faedV9GSS",
  "key37": "iimKAFUu2TkpBHZ2jspbgr4xSyvcpeZ69J1HEPxVzVePxdE34gMJu2GETfMFuSaMRdsKM6sMa3s6d6Do4cVRVHE",
  "key38": "3GLW9pcPA3EWiQCYubK3DCqcJuF29q8SD3ruANnxu1EEzSzoutybWxPVHeUePWQdC3pprFnLDRt3PKL9itQL9Dnm"
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
