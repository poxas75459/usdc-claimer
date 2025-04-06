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
    "4eSiSzUb86KpAxkgGXjovPPymsLAWL3vBMPh3xG9GmTzPq4GFigJy3Eqc9tuT4iJsggmBWky1nUHLMawkP39RWy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVDxVPy5FESWqXQzVBU8a7zyXEGfDvdZGWGT55FvVfvbQtyQvjDCAM13PSXxquuNWMf1TXBFRXChBddR5LyEBfH",
  "key1": "ye66w5goeaZuzt9ABnWLDsSYgoGjfzmKneBo4oUm3a2FESzbNANW513dHK2tDXNxLwyVbxckEmve3rQJJbgY6np",
  "key2": "4XHuMVT78zKaYhYKDQHUZLmG96ui2kNDvy9QEwRDCFXzv7uk5NSALssFZAMRBdfPxBSctRkCFseMWC6aHejEFg6u",
  "key3": "2z5iCz7Vd3Bqz5SYqUGdzd2VnVhHLv4TuiQEqQ4NnXa4JsysYihZbLYJkguzVe6i9qYeJ1Me99aV3CZtUzaJ76SE",
  "key4": "ShqA1uUnyDast3jgdwLzjHA2UdocDcFz4btdvMvymnKYJ27T6w1JmzCkXyAt8BFkqyMyDzroXwh6uaUnBrFr8h7",
  "key5": "3eBfcpx3tPe1nRfoXLyV62SqSKfnKfAPmDjWQVTWN8wGLaHJfDsNDwpw889Q1ueRzY3g8Fj38FYyCsLmh8WiQAte",
  "key6": "2Xy6KCuyAubVJA7KdrSzw7ghgyA7CSfyjjkSMJu8PTQZqvfE6dhNBT6Y9TRWmFLNStJjJZdKk51YP5ypCdRtYGyZ",
  "key7": "5JoemXjH1zizBNSedsDUu7XAUWTCLL6zzUaDm8EYW1bXFgbPBJyRn3JXJCxyAXgTUv6ChrKWou54j6LGC8jK5LmT",
  "key8": "FPtk6LGMK1q57z8JnwfdtJUnM1sKwLsKR15yh4ki3ssKfB3CTEP3U6UEZ1ZF7McSvcGQepiDGp53R8GYjnEiUWz",
  "key9": "4LpNWbYX72jmx4keciGyhof411qdyzxgRKYLAKrVsRdsebw8n192zVovni9i7UKTFEBA4A69krMDi7cC8NzHhsp5",
  "key10": "5xfjWqsFGrzpwRC96XCkxbDU2keenwz4m1nVAfu7k2Qh5MVwfTb9Q4Cfhf5UAsUuw4dtRRcTuGs9GbH4qNSL7ckE",
  "key11": "Gxiy8m36TR3SEMcn5kJLeQXRTK55uxj6dbhZgasEHCfDD1tKA3KASSaikyGdTFmv4UQYAGZRuY7wxjUYP9aqFUc",
  "key12": "37gJ9PJDc5HmrLGMviH5krXyjph2eTyVK8ac9h449x1wykzM2skZe1159CGxxYRopEfkWQ1HwfKegkGUds9Re8gB",
  "key13": "3kNfBYveKRfQbES7HuzLaHN2LDSduuptPynaqL7zBivxMK8iZ2EuvPLMoJxd1o9qJLXCiMTezFBPRU9wj6g6eEQ",
  "key14": "517WsszyfLMuZ5XbjaD1qvBchgeavVc6DuPSLfCw4nMFGXssN3Z4bRau5DYaQJvAAoNjbUJtvwiESKUQsBs8Kz8h",
  "key15": "3X3TPhVAqzz1dFw9y29XmgDiZKCFamZ787rn3btXac3DC6JLBqVnEz7qLL2dPmYVjUBJot97ujwVYtqkt4hRGo8E",
  "key16": "2GS4DQqtdgUgn5Hv7Re3DtcdryrLw8UpfgdMTLuA1cnRqjwhVx36EgEzYoFp2e1xSNDKiKsx6HPxmhLizAy4G9VX",
  "key17": "kJQtPGG94CFczWa2HX78wCsmbLRzsNzDcT41zCPqGKib3X7fPnY2JTVmpf1on4aFZ7fdDCmUpzJy88eGsAmYRk4",
  "key18": "3L9jQ9MSfb85X8sp3hxTTUWvWF7deCVj6a88CSC94kxLh2ffGRpQLRUtXrRZw5TbuKHBXCPd8wWAdfsdmBbwHfDB",
  "key19": "5ZL1FdXXTVAAP6R7mKsw3QodFGxZgHAKBLqx5nSTvQUF7QLWDKZ4UbcC5Tgvk96n6kof9GUfFiruUf4QvsMWoag5",
  "key20": "3Ujk8aBvQn17LYSq6QcUQmhQaNuXNiGPku1PjixtZyMbfqJGPjUqwUXWRg6PHmAAHctS3W6waEv6k9Sy1QfKdMrS",
  "key21": "5FAj6Bm1yPFkw1JshYRVDM37qXHPYRa1314BnftN6EMCNFDwszvRD8biWSH7RkWgaqFbuVM99DuNz5Y3aQfNYRVp",
  "key22": "4CqCPPvYsmaC833XzzzX27Mt7e3YcLV3N7wG5NY72BWZCGCP7tZsmwtp7u476KzywdbVb7aBPxR8DHpHN7HgtKL2",
  "key23": "3naBqkoLNMsVaGF7MvDqL8jrCiZtTzMcFKySocww5h5gC8CvdwUW58AgcNo4S93m8gcyLU5gPsUqMkNXndETXmBS",
  "key24": "qkYdyhwGrkQFDZYU8VbVJcsFUJMBqRdqL7cLLtV4ydcmiZ6XenD4DXc9pD63meJic9UszQFjCsXsJ83bpuLL2wF",
  "key25": "V6Rntffd7KHUiyeYfa7uPWAWvrriMG2wCjzXcEPSK7iygPg5DsWkbnf4obX43ZY73o7yLVMmsEnfQK8wEWwKogn",
  "key26": "2HeTKnYCRkDXGuWY57jb4aKVN6KdE2aBjZTGEkZeCqw45aeanjxBij6XC7XNEQY1gaRymHavSK2KYomsjAYvdHmi",
  "key27": "5UWhktHtpa44eyj4BVL65QQryTSYzb3pGaAtW93nrTF2sH6WCf1zYM9QFB6RPUadwYNHmHmq2m6aRjnwS47Ts9Gv",
  "key28": "2dFPH84HGtdfQv7LCRgEfMD2g3JhnHmuaDUMdqkypien7bPTuS6rk8qSC4iWNyxFGqtJJb4KQpU5Gwf54BuUYjZb",
  "key29": "5Rp6cNxonwmX4w2Uq6KrKqLVPcpQxpCb1o685x2R68kDY3uipSRtKXiUznmz2jD2TMPaDwPmkovCwBs48b92ZnDi",
  "key30": "5HU5YyqsSDkoisoddLUxKHA6PcgmyzJxbbiMMxhbTkEfRQa8a1KtaK8Fh1eYYUfJNgHXQVb1apigwp9RGw6f6pqb",
  "key31": "47SVydfqaAEBEduAD6SmKUhxNjezjKnwUQHWUU8onVuC6fgT3zydgapJKXBvYBee43NnLtE3EwgEkWBZ2Q4TnSpT",
  "key32": "56gkrmcDADXvpDsvkuV21FkHhmzHcjSLaGTk8iouBfDVhMLXaZdc1MxWWScZeEcb55BpkUYPeaqsfKmPxj4AA3Nr",
  "key33": "2KBy53xUwCs8tpZnjRm8Uj935F887kwQ1mQDEGjLJgXq9Fvqngsa938oFLZCeq2yEuDXNTLxANQaqQ3UAdU7AJjo",
  "key34": "7RRAbqA2YZoBYShJhEobYcer7Bz4gLUv4n7VSJT96PNBCAiBmbbJEwwqUt24k1tEKvpU8PfXxsWGrbLXTu2RMa5",
  "key35": "3pYHPyfY6ku7SFtgQU3CSDreJAEEGp1orZdhCc8xMwB8tumVKPTxicbdwKejLPNSWYiPb6ZtNLnwe8AoUzd9rC4a",
  "key36": "3CZazBYEGmnsTbJdkyaMBEuLwK34Wraiga5Hcio5BJ97vEwaHL4Yxe2yqpqZmhZRomCfZMdWDfmX1JLzZ9ewNLw2",
  "key37": "37W5j3mzaRsWYczWAbT1PDLNrhpZiWoekXnGWjUyu5HejeEVduRWHCNJWqpVJaZk3qNQMt4ioLvXvpYR936Ypf48",
  "key38": "Yfyeve6NfqD2UWZuhXd5qLbHoXqjh8dL29JLTNUaQdLsBzoVUZ39Eo2SEtzruQnmpDUFwv2PBzLLoMucmczH4zH",
  "key39": "5K4iign73TFkp5byWpjQBXmvvaC9V1PH5RBF5hu9riWvbCpeN8MrWnSFbkGgsjhWzotjg2hrZav7atuLCj7xb6nL"
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
