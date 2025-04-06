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
    "mSjGME5RmucySjNFrr3bBDbGjkzc9G292bd5HdwAUdZh3t4qgicDa7KiQsSaYYiKhvGjXMBUN27f6B7WAc8KD3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UNaSCi1oNtcvNN3vnVSdY8g3PCa3GGYfCxfCuK6mjunSAETBuzeSAJ4UNEfXa7jXGueSE32Z7zjqWXTcXMUdLbd",
  "key1": "4hq4S1Cs3CFurhzMKzYqtZXmpsnStjXeJ6m6CVBqJsA2SBgDJg9xhGhpvs5AefVdjTGuTef8aJKUBeFUJL6Z67E6",
  "key2": "DR26MrrzWUKGMsf7cTAXpEvHPFpAAPKx9RuR967kWDYrkuM2deHyWQcS5SVSGwKVPauzkG7G2dUrrc5isizBzTN",
  "key3": "3dntnfgd1Hb52jMBtM9A8X6RNNxn72EYZV2VnEgke7TqLNXV4uuo3THtcvnRDpGMZrjYrtdJ9KXAAf6X4E12Fdbx",
  "key4": "4jveYVBrNMysyzJmHQMgqXHHYDvSbbttFZ56vzDBmkfMKeTL6eY7XhQBysVAo5RbvCxeXuXPs2q4HKwUANsjgHdN",
  "key5": "5huoVqxqum4NgdqQcSE76YqV5sjU9b2vz5c1sF19eqaXPqa3xgDtdwtda6Uq4qAiiGWmufFkbBmR6dVQWxuVbDjP",
  "key6": "2K35ai6fzX1ArfYQihHDPTQKaFQMFRW4CjQD7Sb2csWoQuSjeBXi1erHCAXaFMDKKZcWeUkU8GAm6kL1CPXaqthX",
  "key7": "2NkniZVm3Ym2FYkLgjJ98CPLhv1o8PzszHKLUnHaHuZ8HtexuE9Hg2JwUQeq8Vc5xKycf3DUDFnBD65Va8dp5swa",
  "key8": "5yQMDCHAJjLjAdeHBXKHugN3K6ziSboyHN7XvgkaVwFWKL4C7qku3VbAvDPBB41bzjz4zUGbiFmyRqatxLLXuaTD",
  "key9": "KNwmbogWuLpWQ9CMLgutVhW8vJPq2tPWr5JN9Y43kz5AQoPdC3R9b4QPdeFLm6nipt9LStyu9XNhUZdrwuftC2o",
  "key10": "rvccnm7NCRKSt4mrLSQd2SKasiB53m3MjiV4eu7tjMqiXG73yMD9vRHHRJnxBQaSz96mVftJzvUNxmvqxCFTgy4",
  "key11": "2HqDbgNUarudh1UBDD7WFvvLTLyK69fviA1yM5Va2VfBhMR5CbnMzJ9ByeNHdrwKiQL2UkBjD6rwTZGRoygrrsKo",
  "key12": "3JjTqkTwyo5TqhQqhmFV8XKK9h1kdwSnZrT9mYznCtT3nqtYsNSvBPpJdeQY1Q8Rc3CJPQddeoMTijSVHj7jQnCn",
  "key13": "3v9ggFRtRHEfJTd3sLrrx4GBRZ9c6BJkJWt2ps72VyhBkzR2nR3bsma7jfhDvtE3WFgCVe5TTEFG9jW5Xq8LhP5q",
  "key14": "24CpLyTRC1bPrR6mmace359kFNSjAJL6GjBEXpzLJWATtMzCZoAKk8MpfiK6WzifxwUPvVq8gr5X8VKqQmEDdsdr",
  "key15": "2ePj1aSBcGos5km713H3ngeT2y8BgiDfjZisQUbNNGjT9tenJiCoeVcmrtVYBktEJ3vVLPyekUuJXrfUMUwf5Fo4",
  "key16": "2K4a85PrxYrubxrQkDDdjH63z88VRYsD19B8EHkkVw196XEeAgEtRq77Saab8WYs2iHCFp391cqTfLyNqTMpv5F6",
  "key17": "5yBaDCjJLgs6NvQb5i2dmYkS6nmDSNhpuB9qa4StHPUaavpRBbcinK39f5AsBiWb7N8PQYKgg4n5faLzx86gYqPr",
  "key18": "3Sfmh4tyoK1W9VKafwsh41rVnitykZj4txihLF4PVN7oKUVe2C5P55QQj9TLwN4QaNopxx1dMDa76JZ8dWYxMnj3",
  "key19": "4X9WqoWk7HoLZFCvRnKyGnzuWywBkKpiKmUYXdCnqc316Hu3bxkafXkomTUASE3zPkAbzNEFhUBH3TNTsu23KSfA",
  "key20": "2nrGS7hBWKvoWRE9Jp5qr8PM1nJqGqWouSHXin6xEHgvqgdGQhGMfa6iEBbhEFhm8WEoAvGpHfeVQV5isRAAGXZE",
  "key21": "2ghzNbwgUurt84v9YFdtwyXBdHj7dViUZasnGjWqT2mgsaQ4MJjfP2BfsidkXHAwxjhqxc3tSLF8impS2Rhxuxe4",
  "key22": "5CCnsvPMuxdrnggFgUySgag6buX7YNdWCXBZUZwYGUhPkxPFvC2h69PEmeYggLsXXMzN8kTEypLz36mFsLkHLD8t",
  "key23": "3Tcmb3oKGhVAhoZB94PgSEW7QZUs1e6LDGDgvPz2mfoSMoZPQrSDfVnG6xbWxSoENbuc72pJD3cNQbZ2ZYvqKsVG",
  "key24": "5iSBgrLyPPENvTzsh8E4vpZ89wbLCajWPFPnXcxUNuzD8UEYD6nEBMVZjf6okHYr5EZ3MLBC7VT7Gnjc7wtAs4WA",
  "key25": "2nH3eUH17NyWsNiXEgse3TSwzryLRgFwdGjkPJjTzzZTicRHKPBEbKLxsiVGhv8745n31tMHmeNpHNjbgi9fEWN9",
  "key26": "5E8fdM4kxoXWoSkwCNpQM7AsNcXufT4ihuYqNQaHNDfCoKRBhEa6QB6LeMMmnZ4a3J8UKH5gBpjyvFudkjPyWH85",
  "key27": "5pfB7rtmTwrGfSP8sP1vCMXNWKXiv9e8USZxdSeFSp8GiWn5NqHANxuyequxYjH74WE71HPGcxpdpiJbwdLHUMG6",
  "key28": "2hyk9Hs1osCGzRweQndRMGG7i2YF25n8BiboUq2X8TFDYLHnfVSCiuAtvX1AbCtRrQpvYZVw7eykscnEE8Z5QAVq",
  "key29": "21TtBDP9LuQXhm4m3rL4SrZA6qX5xUb1a3r6DPR7UKx7ToxFwbcQgqLtvbNxGPHSkrDyaeXk4bdZKTDxoEwrMSMj",
  "key30": "5ScU6ZdCFEioRZXS5g2FqvaBVbW46bCRRupKPVxsy1FMmx4mUew822EzZB4vPUVJ5VrbwyAKvvDU7r5eKDU8cyp2",
  "key31": "2PpQo2qd5hDMoNowaKzrLZ2279yFsw8YPRrtmX5crX652vKwSNmAUjqA88h5MA5rJNFAsKqG7ntQTdTAUU6Hb9qj",
  "key32": "rsZNiQ3bKPAMWHUJGsc316D18n778G8W97kMEadYiWuGeDPXXYXfb48uMJh2c9ffM8U8V987nHWPvR6A1dNP5Gk",
  "key33": "3xN3fQcXbeuiWtc4MjcNsHQUqUHTwLdpG8JQN8nzSYrGH22YMGwfxWDwRBNSBvxdWX6kSM8KGHLAokzQ5bJWdJjy",
  "key34": "3KBuu8bAGSJXG9HYEwQsruMAhsUzijyJHTQMSxQikUKjdETrUmsbjfaQ5JzL9BjL2ocVNiYyCoGjdNV2f18bb4HK",
  "key35": "4PaWJxm9PNfeicqpHEs9RqQfj8KpanzPPAfXjtU7EAuwhEXg7oyoj7XbNgAQHNGKDPDVyjnqxeN3nsZM5wtgT8vM",
  "key36": "2ymNrBsqngMDcmNSwoRq4QHmVybnSk2kGTw9tNEzbo1iRWM1vZtVktFULPenoWkxSxUNMchjAwkXuzN9tPy61nLC",
  "key37": "5r7wBtvMy8NjGJczwyD1GcqxpRApnem2vXKh3R1uCR7YC1JN5CPZwCykf8S8m1rfeqdvsX39cxSQzV7tnPLSBdfm",
  "key38": "4dLPhYBQefcvT6xvu4sERvVV387bp2jVqymShJ7pjXkfr1m5X9ALxTrrZFx2t1izo6eycXeJao7iqb675j657Mg4",
  "key39": "4rpX5TvDo7KzLdBcK5RHcEuKxkPhL8VQDuWFhZ9hsqxTNAjeevHV9eAqF3Xp85ATwNdaZXNo6YdiqDyTJakiEujH",
  "key40": "38kS51JC6gKmJbJmBEGhgMqYgYqemrgPzzY8mkJDaL1MZVRewsVJkvwgJ7r19Vo8few1U8TUAB7sY8BvFJNPgsrF",
  "key41": "3SReRr9aXXERQY2AMZJfScbnvdUU6G4bktcVYWk4v3ZNwZZV5f1s4VLk1o9e1DnfmGXPGNNxLZ1BHPrXLP3iDEFw",
  "key42": "62vvU5eS1XX8eAZfJuUYCYv4UrWEKBW4DQ6niScortwuexEcndCjsEe1m96FRh2WvFEpRmN6w6L3CyVmDQo3kxCb",
  "key43": "3S9ELb5h7FrM4WxzjKFbaDZpMedsN5A56TMyBn2BtH7HWUQXUcFxbXTvW4iN5uRX68MKkpPCVRDJp5T74wJUMgGg",
  "key44": "3wHvfFMS3Vp2DQdB24xMLghk1q2bsT2X5Ya5V2a7kkyirVNCTudfPLyq5sJ6iU2brUMmjvF919VzEFDkR931qbqb"
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
