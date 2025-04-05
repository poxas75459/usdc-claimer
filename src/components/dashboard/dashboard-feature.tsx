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
    "4NmzFMGYFWmcLFWZZBX4aaXJrexnfAqVFvwgNY1RbSnC7T4AW5Eth9iC2aJmd4gReiLhLULopoxgqxK8iL5VvfQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuABL3AkXzdw4ytopgoSKWUWHzHeg56C6bCjc8kswm86gkqQbay3EAHzePx44XxFCniUFMYyWc7mtahmWF8iDF2",
  "key1": "ChrHqrtkxFvRXfEtDj5jqNG8nMPS3c7chtY7UspNvZfM1ENS4wV8A6GBh9sgXPq3iHrsHayMrvFFLhVJeXF5gHW",
  "key2": "zANTzta4hDsD1t5geYu7RbMFVvRSd4c9bo1Xc8jbDBmPsEMneGN9Q4iCgnHDUEhQtCS9Enm3HV3M8KACQdoPNLi",
  "key3": "52bKWYm4cMndnietjYXKQxbiE5gPe1ToJQSqwXnTcbhJkQx4x87NDHQK8DGK2aUheokKebaz3my5LsNcTKJcidrY",
  "key4": "cnhnCoDQoUNcdhsZFRZPunypi2Y1HaWF7zm3BRMMgMViimBcWmUDeERzCaSm3de8J4q3hyGqnD1PgpZGfwBCYEb",
  "key5": "Wn5fjtKLEBEQyXrsm2m5qcnti9BaWJ5Bbf3gHoivL5gj7JGC6SSka3819HRvYvwUYyuzdgNLjdbmiCZX2DzQaot",
  "key6": "32adzEbvFpjeLnifYyRTQB3nh4dDdUEak68Zs6N412nTFBcTg39pfT7HYj25gQKYej4n4oUxA9M9zXBjWxYsN1x5",
  "key7": "2R9GVx7gD2Vc929LRhSj4nUPgYzXGc2VpK3kdPQASpaMSCtFGHfqE6vfNSPyLE44Wy5UDTVhFUo1bJEFM9xKQHyK",
  "key8": "5hrVv42PPZp9FJnWQQPxd49Vejc7M2EkPyrW4zwg3ZsrRqq4ZzCAef2AxZqfGs9b1hU8EVt768JDbPR8N45RtDGt",
  "key9": "mBVo4Swnxt9CtoiqtpoUtULkCTHK9RMHNJeqTadrnCPJmKJVNLeBods2a2RUTk8CmSHFexw5haxYJvaFkhPEBTy",
  "key10": "ovsJQYAzJVnoXeaK6bSJaHnFiejhC4zjS8uu1pYHQfYRob1YsRme1Jd69bfeGato49oEx2v4iFsNT7osNmWiuoN",
  "key11": "LdksjQNL57rW8oS9dzVGPiBrCyWHnLEzpphQxrE38AAPcr6wuEet1DtKPNDhChgnjwrNZxAgwGb3pc5X6VauNGA",
  "key12": "2vgjcR93L7sGn5g2cLfKEXxEJHWsizfZAwcqg8hR9HtKoWAxT99Siej8k82orrPuHriwZoSKydsX428CivhjeaDq",
  "key13": "4pEmhRWN3GfinJcQ3PBN3zgGRoM2R1n476mVqHd4pJF5vATyD2155RD1hiBYup7mFHSFUAUDfJDbeJsMMQiPnqVk",
  "key14": "4k3b4CrNr1xTvcdzzzQP8yC4ZH3RcNmWnTLz9EQQ8wUbbRWQf95otENCWgCqgX6yeVJ7x9aCBLH9YpXcYTQ9waq2",
  "key15": "5DzPmagNepjHP2GiwBGJeeNMrRhsURfcpQqqouLdoyqEnRi3QN1cryvFZb69Jadt5SNL1Zc7oWR3VhbK85MjqNHw",
  "key16": "zWkBQ4Zw73u43jPRkrtuwbrKanqLj4GsWGuTYve2LGest7pGZSQBoeMNjaASB3m1owhqodKjTxWghNY1UtNL8AK",
  "key17": "2WVkckLH9k2YrETUsEsgAEmaMFz6pPDxzH4MaSZxRzaQuqFgC4cMDJU9uoV3HkmipgJTEncHnFuEJFUTfv9XTTCR",
  "key18": "2mgMrVSQz466vw6Csi75Nq7LMn6BcEV6MuuCMQVejtHHTHDdBAVo4qjV7hogZxMpifiGwSkkhr5qaBi9E3KwxpmT",
  "key19": "6UZQHaDXBV5F81NoPgtTxZp7zM5MiwbkgJKcboui6haMTMZepu8WHxcnhFJFwtbcwu67mMrs7gXfnRGcPDQ4WsH",
  "key20": "4BpF7ZsoE7q1JgKCNUSVW1FATbjtEPgMSkg2cSrWg3M19toLZdfVAxHqCrPayARiubS4FPVcg6VEdCmGxYpXNnZ6",
  "key21": "28AjPv9fFSD2F4pRgJY8ruLJccAqLi4nbHXAs3tBeDf3tkSrFYCbUT1AXyTqFfDxFSj5yShNeEfmAqexTiBk8S3o",
  "key22": "47DhBknE61Kj7Ed28Vnt9F9BLwrXcA6f9ZPgskrrLyLGYLnmsUmF9wsLNpWqkQPs6yW4ojD1u6AHSFRz113vMmAW",
  "key23": "2vs7g3fXJGbsrCrnKCdwFyfeQhJCavpTVqTMe8h9C2YMZamizaUxkDwAKcXAbFEGceQbmZpjnDYwaYjAV4v4c82L",
  "key24": "h77jG84eoeN82if1XM4834u6osAU1oap8f9q4FS3xMe4yHy5xuaWTDYsgvcLCzCZpW1LYoiofKTaRJhypD7TSMB",
  "key25": "4BaLDxg1TBJEtyha7RQddyNAPd6YFNGd7eVa9e8BPNKorYu3Vpr2QyXBcHGCLLQoKJgeGkbnnhJy7fNznjwksLYi",
  "key26": "33yzVv7r3MLjTBQQd3LyuqEWtSTX3JU7DMHiZ6MUVd7HAyxciJRA8GFMaTT3pxivUzxeMXoSjgUDXevu8ASeCk9H",
  "key27": "2UvBUJfEjDsEMfeHcqjR83oxTbbdry64LCrNVYxGVMmyGaWWakajzb1nWpQys4csQk5N5raxFpPZ4frxcYyshvj4",
  "key28": "5LusLnF8jD8oUzQefb4imQBzxPBercY1LrqibNTTnfe3EQRVZiofteDwQdiGoMZVBPMd3FSTMi5Yma6FwCST1tgR",
  "key29": "3GkCfrNPXdtFYpTN5yuovM7A6d3xpxAu2CKVS2k3LQ7U2XLqDUaNG6d17wN2yaixwy2Bgb2v7dAY8K1ocWeDuGrN",
  "key30": "3pdK6Lu6ibgRcjZ1yAARK1xJSxTKYaH2T48ugWTgvt8qf85wmo3uqmqRSkEGHyy6Y36pwhoZ3RcwTZ6qJbyadUdJ",
  "key31": "3QMnSw3kC4NZJyvD5mMWztDgKgybB2MrBomjyXSyuRxbTLZWfsFiqfqLEgpRBXe4AHu92jZUoKNEvLm3ikZLaafr",
  "key32": "4YoQkyzR6Z9JHZnoxPuMTYoCiNQwFevKDvow2j2n52NbmQZzkBVedb3rotHF7cmQPXzkdzvEpHKN7o5P1h4EfE3E",
  "key33": "22cMUZMh9SMfwEPBJJZWKKjHeHxRAQTPmsgBzEGPv8mT4dVAeWtQmrLuZyiQeiD2CwmnotWu7FLaw78TjrvtwsMA",
  "key34": "35MkzvgLLDYs9fduF31wqcs1LmJPVWmFba8LmjXsNgPD5oM8cMnGKHCfYtrve2nq1PW29rWub4eRkXtKzSkr5SpP",
  "key35": "5LYqYKu3gN6GCYXi9yRc7Vrpepg1jdfwci9X7BPB1A3yXLiw9Qha5GiPAzeb2KSqnRPTFceQDDomJ2Hpp6jxmHDa"
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
