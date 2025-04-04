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
    "4oDaM3BXyxCnXkDhXzXzijYBmAD36RvBJSw3pXSCHa1WGRcCKY3Qsq7hkuAaE7auqrH1ksZkEZf9stDZFqjacGAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MV2m8ibjwy8PPtodjkS9XwmdvGhe8dTLECHebkY2yQUXrQnD6wfsSXJywnR4AEZdntn3P7b4qjQGg8oLXeQfCnX",
  "key1": "3zUZGf4r1wqVQs5RmWcqnWBe8D5C8eRyUDB67gASFaep1SRGWSptjfYVSGCPoSYqh7LFrLuTWRbtH36ioJEAj6Lo",
  "key2": "5PFJhcgxFeQVFgdoXzMgsvyxRscfZsQuUVTNpb1mPV6LxyUKyTv2fwd3jyBQQW8CUQ2rBJD1sqFt5GBLJUegUXAV",
  "key3": "2j2LLjAK6M1ZqXL8mgu4AwbBs1XbJiMXzpxfteBprQjSA29PbKsjkgUMBanFhZ4C2hJUzwBDNdofDMj8YGXnoCa",
  "key4": "5nnvtCcL5s6sepsB5bZvAcvPjQ39mSqUsm7GCB7U8uc6hg1KDSUnUPRxzzkcatFjkEeFiEJ8AQHmiFQCQ9yK2nYa",
  "key5": "4NwvhR3TKNeexNwYT7jvpD6G4MQkqCHj3AAhJRCx5iZXvtS6oKDsC4V7JpsmCjpJZpZDUNdbkjvNvGbwDny7DRom",
  "key6": "611dGHNeVNicsc9oJURqkWJkMcj3EwE2XPsQxC2YJze83WAbgr63m8w37RbNUcoUCeSGjgHA8qfsVV7CcmnvtF9H",
  "key7": "4v74pXiUrEkWHsZRMsNghJccstTd35zwbuVQnNKGMhoYfXuPpehhhshFLPN1pPjb4gFfqwsEHZixE6iKRqcLL4GP",
  "key8": "2MvW9YBR4QJ8rQoPmWfesCJHZUHgXCqg2Nkxi8Fp7wx2xn5BbytMowQENzwJ12ip3X86Dmn7CrAoAqh6pwUjiRXc",
  "key9": "23BNdA9TMxMtGaYHFVuzvRuVTZWGU45DiqJwi1eCczkeneVssWmAPEDz4vvc5EhtuhRUCt71wZY7eT5vYmHZQCxv",
  "key10": "5ELedKese2xiShfudtbnRVATAaoAp9U6QCJnnYzqFEjsrL2ZyT8d1uztmzjSdKRux6TkUhK4CdsWd5GAeyJwxoM7",
  "key11": "RZzGzLTJUNFUMZNNz9AFbuS7srNE1zhRNTH3m5s3e7D4FYCH4YUAb4TtxUdkuS4F1k7GY8Kq27nqJb63poE4rd7",
  "key12": "3jyDtTs1RyPsAHi8bKAASa1aid2Ya3JJWDUbMv937ATLnQ9y9m3DmeAAvHRjHpS23DtMH2dDq7wpcKxr9We7XZmR",
  "key13": "4mzuNSYg9JF6n8pXoKNAiUm8WGue8SdMrm9SHFMgRyE4s7mqrewFcGKN8hah5mELRBmi5ZXu6SgEMFtMbqoVdrEk",
  "key14": "3DFpS2oaMKxRw4Mygw1Pfp49Y2KJakMjd136HTpagL1A5NrGZnYM3y685L4zJU5vxcdhZCanQ5D37YBirv6wSRMd",
  "key15": "2MxgtRhTN7rKW9UKHUZXGZsMU9KoE4eNWDjGZdbPzxgdc2rAU43d4fDuFKjHMtCxfgFYahMTWMYRSWKg4BKhiCx9",
  "key16": "2NamGngS8qKowUBPT7iJFFm3XCXNxnsSx5hqKvBkkUZaK7dgyhz2EuwQqC3Ft3KS3JDHniSnxPxHmfcZmZ5qePjc",
  "key17": "5v14HNE45WdVCQBbRgcdRpAaWHauN1Nxs5LLRH3fFPSfGJz58GCSWhSWmAhbhUg7sScdkCe4WHncDCfR3vyaseVk",
  "key18": "3vo5DaBb2syj2eSPJ9S9fRV5VpRaiCdLc8zSSpAjRsKnAoo8YitdLSC7wfQA6FivKx37iNGMthKFcvboMRuu1hVC",
  "key19": "LNQE7DMokbdEYwUzRdVKqsobVgdz9oaK6hv8ePfFtPzLmoifqMRJQK3CPMmeDgUXoxwe9UWXVVg3Ejm1VMVCfMb",
  "key20": "4vqDtj8m8mX8CjvAoRMopjy2jH3YbHsTnUUCQVQxCumqN3hLiG8K4WaihUMjT3sEP4B7NrMTSJ5fteWTfGLA4vXU",
  "key21": "gVUHkW7Ym29S53pAR7hvnhiMqyU6uvq2XkWgvFGMkig19Y55X6LKLzQiFTLcxj7Wy6WNai8uZLCqzwFj93P9uUB",
  "key22": "5HzdgChPQDyyxeH1KPgVc4dBjD5pG8wYQxCvcAZbQExkqq1jEsWxEDC6r5TZ5q6krJWqbc1VnV2YvXESQT6WyLhy",
  "key23": "476JSvfLznzFCDcJCxs4xg7bthPDXGXtMNckcXPe7cDwaLPCo2tLhSFMJMUajkChjSePCxjTmRCfGE9dobGy9GHQ",
  "key24": "4RramJJPG3dnsZRAvsbSxNoaigHS5f4zK4f6dGFDzrG6SndZFW2D4xpEToc66eD44uHNCePrLfqXBGqMPMqY5mHM",
  "key25": "4wjbDAwFW4aB4gRTa1mcenPCbysmEtNQNxQcgNEpbDRYcKDJUe5jkz41T3GCVqgeij7LoauDyMKU1qT4j8ZzEdoq",
  "key26": "3ameuGfA2ozcErBLHvVNAZwzmuPV8tYp5kydXnMqXfpdeg8pc7LTeJ3xYQ63h6Yj6BgPNjVp8kBhutp51HTMj43u",
  "key27": "56d45yjFzj1pnuJRiMMnKyEJyp2sertPKVHDQ3GiZFFzmJXfGRYwEpbA9Fm1oBtUxFg4guvLBsWUwZHy8u1278B5",
  "key28": "3bdhLXsa5ybV4eTpwShpoxJitMsMe1LaxUpfFR5KvRJAqzAk8fm918XhNHiK4pEwBMvpfpqJVJNG31pNNShFUTUU",
  "key29": "5uKtRF1i6SiXDUfpjWXGSEMJCTKmDeCHmKsE8qRbqtp3dpmjFcD6Bk4U5jkfpJ3fxhsPQKQeYNDWM1cYoJjyCwo3",
  "key30": "nH8UpxWsHLF9L7sMnzZv8NWpYgezTrgrydAm8FjpMFgi6Prg2qZsDPv2TA7byX6Sof9rern6pueox6pxmrYxR5Z",
  "key31": "4YVMdTYqL9rXUdhbp4SM3D2sG3L8YYioKMqWQHNNbw3M1qVof7CQBuGwMWFj3RFi512d59M2uvsuVATJvFz8i34Y"
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
