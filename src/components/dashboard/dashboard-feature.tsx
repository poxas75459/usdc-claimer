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
    "3U2rqtwyUQ66hVfUGWmFdQTgUBEPxhgkaedTjgkqyb6jSKNxr68aCD7hzq6KFDVYxi5kB63c9RmyynmPCDBaM3aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbuyQoD9HZRPZFAGhWwPjFzfspVyPAeRGCPDJRjRaKeD5tgwv2T6cQ8i8hzmG9UVShnjBz6NxeeJyk5rQLD2WE3",
  "key1": "57E7zNpoSL9QRYVKZKt3BsH6bM8M3o7fGmQF97wYZFwNAT5w2xDHChfpA8bBZuvPWGFm8ib7Rgr2jDL2Qhp3csXg",
  "key2": "2akvHLYv4D5766zTz5vvuCvk1YmSWGAYjJVivtXL7DZHCpvxE9W44sh4tAkzA1vG1P2xwuTsHsRJwK4cei9C6LZf",
  "key3": "FkdUtzawAG7TCJqddcb8s7T9uKT8yvoF7otG3CLK2d197sGqWs9XJnpdRii7wxEVX4Kytt6vvtb82SEqNHP97LX",
  "key4": "4A56um57gL9njfJZM9pyEwvJmCVaFEP8wrVsqjRLsC3Mhdf7Rnrk1eecvz9m2UuRbVh8u16fHUvh5tDhQV474qkv",
  "key5": "5k5NPJK6hd7YcXxEisCXswfBYDfo7Wm48bun5Ytb8rJ7DMZoq7kfoyjQo8oBdyekLjJSMJTxS7NhoF7RLa9r6TRW",
  "key6": "3zoN4G9HLXc7QAoFew1RWT4Ut3nbZegJ8mzxzpzeo1NBJD86XPgwmRjPnSxfYQf4TjeUbPjG1fKf7VC5PB7taSp6",
  "key7": "5mvXQQ1UFpjqVyoSwMFEAyEUrPiBrVGkDm2E1C4HE326eL4tL4UQGHrehh5od7ejCVRYxm5UqXBUQdnrcdAdUgSh",
  "key8": "sJQnWD2tYCA9G6EGj85m2ykckCdfyhVbzamGuWQ2KfZRqqHo68pGER15KTCCktUYnE4QZ3b8aaTbRGFiuEsR1zr",
  "key9": "YBqDaDNoNLk2522H75MMQBphzMM3jMTRscTVyW32wgcF3HZUDM8SkjJsvAYSyRpgCE7gq6cVxxKPgc1NR65JNr4",
  "key10": "2S4Xf1nw5hWv8uekyuLScz4uVtgPZc98ThAVJP2weA3MGTuia1jKVeFmD7awA1uKK9uJyRCHV4i7QYtf1xPvYPtK",
  "key11": "5c1Hhsaa4EovXpY6Mfp89vv3Ju36dzXCnoD2Qjf7rMTuFSd6N5eQy5uhw6RXYEWr2iophKMY4eTVmCQiZjW6nmch",
  "key12": "5zWqiQsSXvmGKNZ5oT9Jk7dAH7SH1z9C6yjsk4VSmFDdvU9hjyv4Vf2ujim15gGiSqqbR6Mr2ZYSEDniGkpUoN4f",
  "key13": "er4TueCEyKzGNDMyfMrYctDduetLHeZpcxrn22iVVRN2TCC7h52dUZ7hyiLVPAjyz12sXococFQ6subeVCbVZBy",
  "key14": "54XYJbdg6epbhPL6mMyLDgVLp4CbSzDBhzYrTm2q4omyV3vD1vn9Lez1BP2pdUXa4jKAkcHDp7zUKKhXCCjs4DnR",
  "key15": "3VBmwY3MQEfhq3LP9t99u3ciLEK3mUEtUq4yN3qAxHReLGq5VxRF2NvWoZzbrfSBLiUm162eBf3MvvChgLamoiFE",
  "key16": "261e9Yu3P7suyufDzwwST1BedGfRsLhNUNp8iA8U67sbh4o4JLFgPYg4LuMaxfCbASPUBG99wpoe9rWbfD6ohSDN",
  "key17": "2C9UUQ59DqPscetUHDHS9H54dPNZT6Emuu9VoR6ccJPd5LLkSrrgraamforEmfzpc9FZweHUMtM4zNp2tscHM9Zo",
  "key18": "5urnr28LBPd7Fd5W1fH4oMDvevYPiDKKpHCBJQN5TA4UuZJcgxeFYFimVnNUeiNX3SBNKymF5VZTXf2McQNXBHwU",
  "key19": "2y41LQ7Cr85PvV7RHnhZnk45btv7RoCYefxburko6LGThCC8dZ1VeM1agxrQEj3hcYyodwE8icgYajWWqWmZByoL",
  "key20": "JkgNLjsAZLF4zBD1591WpttpQxv2fRrN15o78YjurVXVmzR4UeVcDfn8jF25sXZ9tVYvmTZGgfdp9JnNfKwjKL5",
  "key21": "3tUAw1vsyrPwjUJ2rbwuCAAYMTyFFxweagQcktKZpvJzsxiLN3PmAQawLrGRwKg7bdBeH2eUQRMctHR7XGk6KrXg",
  "key22": "3179CsmgnUJeKkeYx9FxScpAwLZDkRanBzzPnCnSHRUT9NqCd8uZMQAr4hcemYP3YL3ipxWZ3DecXWCEDYbq8y9j",
  "key23": "5XvWLr5JnpXb9zEGfnrTWiGpW8dhwnw71RfWHo36qNRwPUoWDqT8KiuEAEDpqZ9X8gczu11jgpjXbkL8P7iEJxE2",
  "key24": "23gBb37bb1yAn6Xc5ioh9ssoVra3CYgbDsJz4CDGpqcY6LSifAvezo5TJnayT71jacFAUdtwxCawtdb7X5qqcEig",
  "key25": "5MY6cqyMixW4Z1R6TLd1uqZxaP7iAYha2XVRtyiJKDiSbX9HUB2x4sA4s1CJ7XACPq1Y8kPewNEjESew9juVsepx",
  "key26": "5Kj9mbbwqHNmkkQTLmmMZ5f7ZqzAQW8YbQgJBAovuF6rxkynqgsnQxGmjcJ1CZHMJDNhkQTtHxaKdzS9vdZCuJf5",
  "key27": "51jeXcvGdpQQr8xYxJjvcikxTvUCCfkT8gKLaWdkFF5NZpoz8iapDsQHo22854tD5BZmHnFCUutDtwt5YyGsJh7d",
  "key28": "5rAf3fxcoQiwhS1yhX3QwxJmF4PhZ9g7U7tGHs9oyrHGEmRFv4xeDx99RqFTjgXSS8MZXXP6w2PPN5vJUD1bdhpp",
  "key29": "3cbfFrFAx34qSEvkBwBye1WPxnEqGfmRVzQ1RG25cZbaZAAiDdQjy54wU7JJTpmdEceAjQgr8z4mkWi6W1uibWEZ",
  "key30": "3CZ4vUX7iwdto6hRbwsP3EorMaEx69gEgrBoYGyHbxZ1BUvPF9fKxhjgQ2i6tTcmVsJ46zXMBWxFco9H7pqC8ty1",
  "key31": "5KcT6A6xfvH5b3pm5aaUUZkb76ADPhcyyjKPfaiRhDGb54jJZTaRWQqWGgKATjGBSb4GMdVyLe2QmAZmbHki1Au9",
  "key32": "5Z6RyWT3rcDE3pQ4PnafigMtenYHK6fRUFDVXLmBNAi12BmQxBASX8rxWDeAkxH1Sh9RPMTXrvkz6ZyL9riJyuLG",
  "key33": "cFS6wqiaFi74dJx7Hgm2XSFg99bVVBC1DMCLJt6mjnZYWEYNyyo9bcH61RfQxpp9ojLbJc5xG6fRECZPwPk4Lhx",
  "key34": "qey2GAh9KEzSNjPgVckzNtk4AAH8Xkah8cHvwyJ29UCz8yDvznV7mWYWvqvsR4CBRvmV2GUrz8mrikQwzfY7wH9",
  "key35": "t6gJp41a7akWHBhF7DxtEizavJKRhhdFyasDw2yMD7D6HSGjyNRQMqwqSMD1jr8BcsKofgovBLrVN79VurZTk7n",
  "key36": "5pNefEGGZS7f1qPsAdqUBfitvojeoooZHjBm45syiDdG2yxJB3P9vDobaskAnBV8SHrTixfqHvKV65jxxUYS1Hvo"
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
