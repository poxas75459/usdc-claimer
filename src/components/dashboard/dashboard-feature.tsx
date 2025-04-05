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
    "4xHJXmGBgsTWbBqiJNRR8bksFmbAw3MPGk6dFknATAZZZsuzkda7ptXeZych9wEUjVpfHWZ9kY4WFiDjzKjU8FFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iygha1CBH6scWwBaYuw4CjqPecKzw5Jt9Un5rf9c7jLb9Y4SLL3ABZGgpymDn6c9c8z6u5UEBJKARy2WHXudhc8",
  "key1": "5QVWvoUB5kzVQozT1W4veumduwjXSaBJtHwq31p7zwQFzStD39HBh15M4Hxxhfh1Yjyv1wurGVRuQZfmBsB9kde5",
  "key2": "5QKpaUei1iuQcsyVAKCS2hqh64snqXxF5wdzTJDVzQ51HrzKTNXRe4vukKVxDYbPDxDQ4mEXvXwbADJ85HdSBnFp",
  "key3": "2ojhMH2dGiLcK9Pi1m58UjwGDV9RUxsZuksnUYjmNP2RmctxNc4NnB7YwJuBvcdT4MKeC3SKy4XH5bjybpwBQmNc",
  "key4": "2g7FDPBmU6CUQrRPVMXmUK49CWgjMVAuaGE5aPWvfeKkZ9A6AtW8YprXwvugSFT9xxE5KqR8gxwYxb4a9fnnRAmc",
  "key5": "wnSwYvPXrRE3airm92wTVXUMYspwVQXQtx4R6hnRz37XidX8pNW9NksUJ38ziEDKq8LuwtPv6mZp4cT66GCU7tv",
  "key6": "33surguyqMg5VtRtUQGAigvvqL3AcgNCFuvsSCJ14MMKuqQmiEY6Tzsmx5kgdF6vrHe6MgfQeFZ1uxyviQBTDKJx",
  "key7": "37GLuRx45rhs5roB142KUmRiZmG6KCS3sU8aWwNySpkYBXoVeErb1MSEn5uifdeTkPfJDookNdVokHPRQH2BhJYx",
  "key8": "5SY26Fgrdw8rbQ2BTne1nWrgZyWxhnnveuMWsFQEZsyZJyTzjkcZWf4JeDbfvv4JYUDq97Krpgc83qohoj7PktGJ",
  "key9": "5PfPbZyTSkUpmNANeTNUf5YCtjrMeNKUiM21t3Cpb3QQxomNVJSucDrhFdjtMnrHHknY1edb14sym7NZdtdGHrow",
  "key10": "2hqvuudufxh5Uz7fETRX5AfXqc1ZhMdybuyvLWLZYotz3iCbiXermFJjzritoYbCxofUEbChn8DjvTcU8nxYA9HZ",
  "key11": "5HJ5PoC3BJJK91yNUDmYgnZbfNyxC6nobBzVWvfCKFjMjJeGG1Z1JTNLqsd4bSmuvGiG5reqz7ZECKTocovhhgz1",
  "key12": "3oG2Fzfvas2pmN6aVDmGwX3q6YDTfTXFWGDUjwt1YSywhdy4JPZpY5AXG7LnwaczRwMLJt7MiKCSfdwMeorPtF7Q",
  "key13": "5E9EtqtiFE5adZkRVuLLfXoTp8tDXtirkYZ3z1uQbjGjXETjw4NpdAfpt535Tuz2FqgaRBk5VEc6Bxe3M53obUpU",
  "key14": "eMoh6rYm1QEjWLLYRZ6JwZ1JKpiWXUtFE9xVW5ouPg1xWd9XHhVSdroBGj79VVsdtuqUPXg1CfR3pFQKYnREh4A",
  "key15": "3PGScsyFDTRnzRQ5MLx7b4QxZgS3d2G4eUPjrdNt6oNmc9aUkheoNVRBzmLbrtoykkA7ZeM261TLjPHuDHqdXNzk",
  "key16": "2mKAWjc5Azkp368DT8EU2D2qXEDeDFCfovaF2cjwqesBCachiwbCrraKQHJ1Y8mBXXmgE2o5SYusWXLYSkRuwH9m",
  "key17": "9aXBd5SUmY8aGsUu8MFfAFDmCDd8jjj1iHaA6p5DMjczs62Dntw4Cwfjj7Y6UJZsN724ifgGP5yjC8AyD1pwrGV",
  "key18": "4d58rjh6bjapKF2Dtgd2mUdbeFnVPTn2PYt8Xhtr5vJksLdnyztzdqZ4rvKM9CHE8SFkRQf18M9RhVePjPiSs9VZ",
  "key19": "3sYG81QzcfqRtUHPcMUjNRXxizRPvrB1wkvCF7iF1pztTBgZWDVHA8DFewZ75Xrk411a7WMbuxAJqusjkeWL5rNY",
  "key20": "3YFKr24N8DiNpSqUyaQHW9WbG39Wiv2UByKMJyppCJRCGrUKKjcdnie2WKv1tEt3RLhXf6QR688jwKwgXKfr9rfp",
  "key21": "2dhi4e9NZGwbsGDr4CyTuGN1VVCfs8Xfo9jKuAdrpJWGznwXd27XwPDyN2VQQyC5d7yzwJbGP4WRxpgDtuS1r9Eq",
  "key22": "3KxKoFurVT51vQawWGnbXWsWLHaJqKdJbcp3mBKu7vtpU62C8YkTJUuyKPiEcN2A8yFdP7kijehB9nC7YrmBmAeC",
  "key23": "b7CCfgE82eywnT7tUPBNDXkAWubeooLfBaPhGi36Wy9EBb3p2bg5nATK9w1mAgTvCwMy7mCrPUDSx8AwY2TLNQ5",
  "key24": "5gAxGXAXjWAcVqY2qSXap5khqvMNxgw6NUCxFtKBNTbZxqf67rzanGfZZPVX8A4H5TtA7ohNW5ZW9bcLFGSt2ndU",
  "key25": "2JGv6Fe4S127JufqKHhGWCyjXmJao8KvKpHuv7YMRJ24zSzqxVtCA6wAqxFHnXfxAH3wi2MgaR3xCgtZZqN59th",
  "key26": "3vruXAP4ewe7i8yowyYERv4iTuqSWPVnC6nshQbBuRVRHTrLYX4xkEEHkacmRNL5e2CGJLvnFT2RAhWYCVihwRkA",
  "key27": "655GTJmboT3LsUMr7yucv7g9YSbbkGjpz94bRmiQux1myhgAfreTzy6dLVTgKoRtWeDtJf2cxVhKfJiNTrZ9HvUX",
  "key28": "67NrLKbJUKip1uaoHzHD8p5mMmsfizoAPnpMDhAgd5jQ1p1LVoGcf9tz4rDrLbp3NcDuD5b9f2HoMfq6PKynqSqM",
  "key29": "4d3f5BqezwhviUk1LKoBwZtDeEFhrvaTYseszTXFi6yX5MU9hZXcLkjhXuxnq5CfeBD4vRLJy4fJ3CxW7nLh5D5Q",
  "key30": "C8AtT83omscJiVeTY2r4n8KjCYorVWEDiofS18B2rkWsF33zL6hgY7vbkDEo83To8fQF1qPxVk1ThecK369xZLi",
  "key31": "2XjxWhrdSKtKuKEXs8hLa9WFPU2C2pseSyHHfanCPbyU64yqux2yt5zV2MaT3wm6Wmby3LAxukfhZPbim5NbSVsQ",
  "key32": "dgosmFCwsHqfbpJ2ajUG5Sp4smY22VEPcA6ZwKieKkbhsE91bpXmTxdLtgRR42gzTrpk5DXfKyBbYokds4wQ4kN",
  "key33": "4MoLjoBdfNxnPcYWzK38AUnBjGprJ57obhCAogvYdfkQt98D44Hwd3CwHAkgy3tBKCgfT5MSHFHWez72Vvin2Qqt",
  "key34": "d9AyG52PiU4mYPTqkq4K6bXVgYf9kAyaCvpBYzvPpEHfGqTdXMm1vvixZ3NWQVtzKZeNbDChfnvXjCfRZ8C2MFu",
  "key35": "4sGFJMvxMLCjQDha545QBUZLMKPjcXgCXVrk94HK1hVByzBBaXCPjmVCpxpgbYan45DD9ykYpciZDb5QAMZon9kz",
  "key36": "2Ra8yD1kJnGAG4YZk2cJh7Dekn684y7e3AvCqbuDPFRrubQjXSq18btxmFHhzYp51AwuWCNDEHRiKgBr9sXUH7D3",
  "key37": "57YSLUgaZZh1f2AKyMpormoE73nSGMBmUfL8oBJiYhopzJhp3xQqPSgZL8s7svjsB5LNaQziCxMtF2Y4jXA5Ht6Q",
  "key38": "2osLMAxSurst8nZYYFTxTrw8MGjakYd6ZYjDv2rFHLomMNQiMNxxf1Dhe2v7oS1kbySDfjuxMbe1KbHc5ED2Yjga",
  "key39": "3QudHFW16WwSaHbRLXH5bZDGnSp2WFxy3RfxPedN33h7WQgjpngdyZjkk6a3AXpVj2BMDGWbAqTKNGsbuRia9Bnq",
  "key40": "23LAHXjGbkBk3yjeW8NpLAEbzj9jETo7CYmPJUVkuLFY32356nRVWnJZTwUazGrMa337pLQddGxPewZmagJH9VjA",
  "key41": "1RsvCpKYQfTCdYgHbGKQuMSRjrZYMAS7afX6748u6eVSAu73HujWd4HYcWhX5eHXHvctVc8rENCF27oJ8jRTugZ",
  "key42": "44V2F4JpVf4v2rVjs2V9nMZCxtBihSm4RLjZYUXb1HEC5kHUKQbDtExV88TDhLWseopiEbKaRdcCR54wM4BzA33"
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
