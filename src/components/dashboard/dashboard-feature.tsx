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
    "2ffamKi8a9kZRnnbrwocsfwEmEQhwPDcwQ1GMCnLh6ouy9NzCfUVbbDosbJb1h2zfsSLVSsHLm6jh2cVdC7ES8Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ph41hsPLN1C4CyQYzY2ishfwFUTJFdoVkdbfgxB1DSp41GF6FuG2FGV3JwPXvrevTMjNtayKYTtCLGCkwQGFzdW",
  "key1": "3Nk4BuPiL83XTptdXiqnSH8KupVQVzEv8ZugfRZtzq3vzeiRCL7VCr1zGFwf3UHR7E1uCQMQwZY7AGZfJP8H4fUp",
  "key2": "2qBN2xbRDB1HKZGMf5KxWUz5XHVAJBSCw8eSppKkgdJr5QBXC7UndbFBgar3NWbYfDdvGsyyEopwUaxbUujDsmVi",
  "key3": "5zUcNH61yxCo5Fe2xXZfyGLJ8M73W93QCjWNA7z9qX9ZafmHYJv98FokrNF8fJ7ANWJVdv1pDPk7q4L7bsWpLKi5",
  "key4": "2eGgbx8ZEbKEDBMoFLsPScZAeXMmq3oCeizAVNDZdQd6M3i4jqyT7PvRptdKhkd7hAVBmTCc6tBpBXcc7sKYa1U8",
  "key5": "5rCnzuPp3HMj4amBoK566qA4JDmSwaiyJLUZJ9SdLEQarsZH7nGsxnAKYp5Pu6oPXNwKs1KduLzLgkpw1hCY6gk3",
  "key6": "4DNNjbhZTSAtWrHzPF6h8WMWdpQRvsWHT7foUhmbxJHF5U2AUUxe438rupAaUXwpu3wtNjA2UjZEjWiaSWER7My4",
  "key7": "KPPYbFUU7neyMv1eD9iihFbgJzCTy1V26m2Gm1nti97jwBkff4wFNTgeqyhXstfkbZBG6tUS4K8nz9xUwXz6jhj",
  "key8": "4JsoHDpyWhYcTnmUk5jFbqDBUaRY7Zx3sxQ7BhMUhpukFfN5MD489kMGTfCiGVMmw2JXY3fhqZdjM9WAYgp6mVk1",
  "key9": "4QgeJ4gGAYh1cQ8uCESj5eRD3BggKEgm4SBGnpgXmwiWyNKdbvwiNyysfekEg7EzYKHvRN7XM4ZiFgmGMnXHBFNz",
  "key10": "5EdCp5o8FVrSwbrnPj5kgeyKFD6BRdnvYUxnqshyCdN76WEHHrbc4iEtMyRs9fc3ZGKFb65YdEUQjgPu9BzkbezW",
  "key11": "3c3GpGYWETU9wqqxDzNF5eNuwUNG5ag7LJdJddLPCETE4J3hKjy5zLGbsZT4sJ6E2Gw3oGoxXPXQTCaBfwWq5gN1",
  "key12": "5Dg7S8AaqvA2KfYRk2gJC3zh1CkvEwFcNFP19zGH8fTZenZFduE4sWtRXsHsC7qgj328JsZuKpjfw2UAJKms3Sm",
  "key13": "3JnhAtcEMmrrR7wE1bJ5pcgDhonrEDi3bfeJijxsUA4V7fwRN9L74ncrrn19CQv3bghi2utAixisGfnBhR3FmLTF",
  "key14": "3S2zafDDa94HvtPKE62vnyTZcdZb6oWCBPZ4AkL46CFNwAimujsimYfW9wj3jb2QncJvX7CKmyP7jjdv8bmsj5X2",
  "key15": "2P75p8NaTvvgLCGbd2F8qMyCeqTmUBZzvijyhG8Tzigxuwtrw7wyzPDhTxVPjztRrVASB8hQksg6cku4BZUkEtrZ",
  "key16": "HPJ6fZixCtkjWkczAxMwaKZZyxR4miSuh93uNt1GSyE8yZGAaZ4zVHXNgox7uQXdQJLLoJASdAYCaTWTVZZrkP9",
  "key17": "5yF4QLHEQMkXgM7gfUqWpfNp5WzzDnjMVrbtf8Gkwy3kADehCWL7rhRuJLMS2HajxYu87mft44bvWD9za63saAVW",
  "key18": "5ZhAuyTzX2xbRZoWpctQCy378pKqeFpJqahyLWEoTDXUfGwDaCBd3hdFBn3hLZp3Y648SizqCYNdRzWNNhGCe99K",
  "key19": "5hJhVTaiguMmwLy2dA1cxKH83FbAJTe2yjG6DvZpSqxd9BfdRnrvuQAzWYPm2rKnDmo5pJYKtswmrTRpCgj9WeV9",
  "key20": "4cejhrSDfK5xx6SBajRbspeVCMEZktCBPy68EFSg6MeNjcZGikAZEctZABoKMMy6HAJsHvH4pBcTDTYire5GLi1M",
  "key21": "55ftr6WBD2grybdWj7RiPCxHAAjXFKXtai5ZzbV4sPv88W9JcpChLVuk94bcMP5Tb6qMuWGL8YQ9uN7sjbS827Xg",
  "key22": "3KWLKn5GXsFQ7V16HBLsY1n56rTnUHAvUEZXNBRM8uYYngdmGE4tWiWLSrFpWFw3DF12aZRqhzg5BH1e5Lbr5saP",
  "key23": "61d69A1jQEaoZQgQP119N3C4whNU4eyuYP9SB1QpUkh1zXLS4VCWDUDiUaXWJNSqWtSMBc6gmMaFQ1HSB5mB5L5s",
  "key24": "fZyh7H3xSpq2DTVNMa2Njade7T3frWYT8YR2aerpZSC8WXz4hS3LHhoTKnqCkUZvYmhPC31EzL1MgngV5zeTSdy",
  "key25": "3tJPkU64ca7YMW7zL8TvDT4G76UnRPPpJQd556DMYNfAXH8gDSAWCCbhToYK7F1tPXuGdv7kZbExe2KjUbD1kUZa",
  "key26": "3vZYe3RQ44bthsPWRqspD1axYBVtcegi6PaQJCKu5TSJHGcygmxQ17CMEkTr17MGNgMPWcXpVPXdtUhXwcV5sS3H",
  "key27": "5B9bKukcR2ZaQHg8aTiAYNi5LsyGuqEACLSdqSG4yADgL2mCrNnBBYBVrEFUbmaz1kq3XeWUovTXZVQEVRQiFSrQ",
  "key28": "3oATJ86nY6MG4JHqm4bZGaEyb3yhwQZmWWCmRpHsTZErQcMa23ZE1QahYdG75ThSEYkZiR8Bh88mk7iZxb7NKZcC",
  "key29": "5YzsSf2LLc46NgxH7jWUfCnmuwF6bFidU92xntUntxv2PswCexQpWM44Hu2BFg8YtRtQSRUndLccYo4MM5YDqebR",
  "key30": "5tDVymey4SiqTD4UickJNC9ubBPTCcygU2J6a1smQRPqMtCCfbkwWZRWVebbiBKuuMgaBcxvtSnWBmfr34B5zxcK",
  "key31": "2rQjD4WpcdZEUN5iHirqSzuRJ65Qa33CF5hFDyoJ6FHHtsr2eBZn6SWRYi9dkA1nvhsThytsX8FHuKazgYeg978b",
  "key32": "2k461ckcBNLJDzQihLuh85BxhqRzCLeTXupDcp2bA9ATd8xFeFAr8VVsWY5uyoE9iUsSk2uEUcqGVatMbLyyXvaW",
  "key33": "2ZqLvwNRewfgvU29MeQqHzrpCJrkPnqW4uyVBay1SPReCPyKjTRwPfMfz7EkdD6maaV6JwaSvXUwnBqdmNsjUNyq",
  "key34": "2ZR5AWrFn8uJJwe9oVgrLHzCMeXZApAr85nzSh6haCcDtw1VweTNasHcTpFNjac3QfvzYpxwHKpWRnohH5Tp9FHP",
  "key35": "4KbWfffcwxKaPHFTyCysdTfzZ4NJ4TEu8AeTq8BFbPqzSUkPXT6PzM1orXCHExkzhZojLVLoqTPdjWUuREsVkMSv",
  "key36": "4wMzYGtx7e5HycZJk2UADfn1GatjoxKfpBL6EQG7ontDbCBWZRojdJHmBvvsYB4a12swxu3gVG9esHosZjdKhWb5",
  "key37": "49az72r87YMxRDw1y4Ht6Ce6RFyifTc4rY4gmnu2GxMaxeM6yBQr58Y97L3YRVPt8PBdPzumR7BfjGrt4LRefeX3",
  "key38": "2Vyt6njr5uYoD5mo3CNsQRyma9uHNMw4Pgxrsy1DfsGwty3x8B4QKc1csuc9MohsWu4GF4Y1UackHdqH5xHkh532",
  "key39": "4p7eEDrG1xQTFAxzdtK2JBtiiELTH45TtTpFAZDeCt83CFs3Zv4QxfytV1m8ievCeB88mTNnreYkiqKjAXj7Vkn2"
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
