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
    "5hjwX4aT7chUaZFRZNFGoC3VwdFmy4eeDz6gH5MFsCxteWZKcR3tQLeAADhxFVxAyxrCHdM8B7bBRBSKeMabQJ1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ai1GVbC7Y35Gd7y2jm82P7eW1vCKVDqAhEtCnbdngy6W3gbhNpKpZsHFQoG1fFkcQy5oCaiv5Zpt7ZYuKWbUDp",
  "key1": "62rAumMmU5hmE6RfN1G22835i61fsdb45kFfF4Dhj3xSXRKCpE1h5x8uQmnc3Wx7t7vgYnvzm4WfuMakMsUWi4nH",
  "key2": "4qGHTE5vdTE6u4X3ZuSnS5QB7aCN2PKyibAnEhNUBiPrHoZf3KStBaDoUgTtJLsxzkXxvoLPKtAGsZsQQL1yYDZH",
  "key3": "2xN9yLy9beuCtmYzE9wFp4UUw5BNmm8X5fa8iFR1SLvRpZrpPUo1EeWf8Noq3VBNQjaDmNHrsoXaBSNTdm5P2BN8",
  "key4": "3TDA9gnEqBr56YoWj85Mfw8a9JR8WA4ry5AFayn4TfHQza2VHHsB8xJeJEAyL7R4ixc4NnWMTEYN5jxRUwLcGny8",
  "key5": "62B1yh6wpyAHK7H2NiyL9ouW9gCZ6CtGV9NLxHWLxRUcKC2uMmBUPDbLJNVFmtZA1ShXF2cJ2RdgTroL3XxVkeEj",
  "key6": "2eNj91STZP6JHT7om6Qq2dawAzfwNCs815mWiZoWtVaW5o1ZAXhAdoZXCZyKah7JaeRxjByPFjXJa5V8AfE6z6zY",
  "key7": "46ksXKTBQiTJY37FEzAHvNx5HT8E1k8RnHX94F8gRaghUzckFT8GnoLQEb3fhGyTPj8wKMC311duWweXVsRaYHGZ",
  "key8": "3SDA6foK5Ez5f2r4H8U23dutMU52eXE8MNaUFnGdnD9QDeAmFYGnEN8fAooofULeMqhMv1iWeNRd3bzNbnYVLz83",
  "key9": "5q8qJ8vwRUqXKTbZt9vgKGqo1YhE2Fw5RD6PuNLJbUprR8H6VjgHoTHyhK9EaDWroCWdhx1nerj2hwdmpD8Gmrgp",
  "key10": "5wgV8nZWjd72GQbcbpPymUBuzPGkkoJuri4FrroLVSWxWubb8EPBrtkk8jxtMR4HSEZ5KhuerPedMmATCGi784RG",
  "key11": "2swRWN9UDJhkEDCoCCYVhXdWwi8YccCbVihic5kVbcmCVDgkJs866cHFX9DLvcgndSQXeRCRmM6afppuii1M6oF4",
  "key12": "4Hpjm8EHRbVDpckPKQMeCrtFtU5G7ij6ed7ZiT1XTa5MG6jdJ5ckDZFyGhKg3Ys8TUKpn1WVidqNqX42RvQoBgqc",
  "key13": "2bTtheaxkcDjUH7DBixzt87nqJjVURyvtMqFwnakz6Jb2dPtxComQeBFC9KxcvSmad75j7wJ9AEP7nTdPDqq5AY5",
  "key14": "33jMCvB1imiSXX8ScEgfZHd2JdgH2KRNMeUTh5VU8k2kK1bK765ZwYdrYC4bupCpp2DMafKmQR7aEZrnTVrF3hp1",
  "key15": "2FzhY58jjrBfA4hmkbzmoLyX8b2JKPZp36TpS62VrX5jUjWhXYtNz4i6DapS3dhtmRTpuYVWWA2yUopU2V79Zy1D",
  "key16": "5LZecj42ggmfaL2VF1rHvykujcDCqCM1P6bq1j5yhJ8aDUgbNvwEzAcEA8Xm7dndQzDgruhsCgaBeebBwFDXSF7Q",
  "key17": "GKjQyDomEH9uBXE8AgfS7QhgJTmDsRMo99puhQScZHiMU5iUgaE2PUTVH5zApQPxnPN7QUsbM3SJHkH4LLzM1hv",
  "key18": "2J6S1FARdZ9uXK6T6ETP79fu4CufaHJX1EbBqcQzGLKp3fKsv1fM8N2P5Xfdqb11GfrgwbAhw7gWSYYKFvRvmoqs",
  "key19": "SKNsEBB76wTofTitwWGwkhQe1XfBRhBVfq5CnKhxDmMyk6kmzPVEu8wp9EhN8aw6KujV7bx2UkDePTqtAHGyfBJ",
  "key20": "5aToRjMCJ14UTunmyirrFLud5fKQyckngPgJGBiyyooNCx9CQWQ7hMJi9rEcXfyj9mPdQN3tj3qN6b1XrMTWT9WT",
  "key21": "4bErVNAKpGECArkgKriHkATXedGBTpS4b4p1NMbkvDQgTzx3GkDR58CUWQ7Tefp1hnReDEN9rj7uHXRNUZfxwVU1",
  "key22": "414Bj2ZWeVVpNcLAxX7gGYKwZdMxejxUhjp9AxGxr89Jrzknn5N8LbcbiVabTTWhD3YeGpLeybavCnFggv1nGAJx",
  "key23": "rVZmpSskJ9QbAUrHEhEkyYS7rckuTpc8RZSxAvxLU7GArU4P4HTAsZYc2fiWikkoQxnxMG5XqJxR4QSZTuA9BfW",
  "key24": "55NmvUD3UTRY1eKVj3W9NcAcBXFDJg1mxhBy23Y8wvQX98Q2w6QWZVijP6xeLV2kcZ5hpTdreYtGCDVcN45bQ3Ks",
  "key25": "4wkq25sqajyg7CCRN3DkauM8cVx6x1PmemuJxKZucrF9Y14Z6PYkxdCgrWNc1ckmgSwPzLGH4uwdtTrZVjY5WXhN",
  "key26": "5r1ES9FYhU15qGKG3qNi8x99v2d627v3VAu2rKe5Hnivqx937avWdZswzQ96pTSXkmZSFB6RvepB7FVkcaw8QDGP",
  "key27": "54CVevHS7z8XStbUUYzgYer2AnapszT1Rett5FgUcV25UfPLtzoG5rZ6TLC19ZAEg5WiVEmLqiJWiZ2y2BvYi1jV",
  "key28": "5Kcgvnf4F7TQmxkg57ixcTgGzjMZcN9xi2XNRnHggLr37puRzKQW3TPzVDeNjbNc2JrUAf8DSBAS4pnauHasU7ag",
  "key29": "2vyywMcWospkZWTRsXSWUJLKv7ua78QnMfwkbqvLgQueM8dctouvGyjtnbndqRZTpNA5gweydZ9wDGFUFUYPpjJ8",
  "key30": "3z11c39NaJ2afAMehBwha3vBgWdBP1aTgYURLBv5WrjU63FtXE1rfJucDQrs4ariUagpG4gaGRSK7aeDjwCwHpWS",
  "key31": "2Rbkxdo8fJTJjEED8WqvKmhjzDfSkn1w5E9HVySr1QsLWabYr4KxbDkvyaTTquoVE21ayS76d49BA3N6T5YKKqXF",
  "key32": "5pR4GQiThStJGTvxE5eQhsomFmZZXKZxthrZ4MbYm2GidbhHW41YeTz64DXFBhT22F9v1Y4Q8yXa5roqpCCKSoZZ",
  "key33": "29aivxLjKJkmEvuTapVfTwm5isRoxnPXaLCoqQf6DHNoSDCL1qAfow4G6Ux1CVHvHESDUDRYukWNT7TKjZntUqnL",
  "key34": "3FwzxhE5vnrjw6jfrYmWjuyLAVE191gzP3Wv1LdRg1bjFbEToHnATyxaW7imo5CcMryBcwznKCjhXQhLq5VPkMUy",
  "key35": "2THZAW52C9c6y2wjAJoT8UfobcYyXQ4MkKVTYxW14S4NDEScKJVWu8YqBQLEVHqMsAgrnV2nXuPSowWr2Ff5sKZ8",
  "key36": "4DDmKGh6YwTvPQo1LzH7fLEtEBxW313SzbK1tWM4W8ammA5WghsaqSi9gzUcAekeD8LLYKNf4uiZN3x29yhDQ9Y5"
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
