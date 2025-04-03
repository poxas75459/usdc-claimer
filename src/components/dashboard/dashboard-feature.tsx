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
    "3JVG53f8CXKowPcSpfYLHcqmcLTb9JrmLFqfjomD58zyzs3pYBvurGN6zAGpFG9nkdowKLJYR7XeF6hCXWvFGLA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBjDhVtAyEX7MdpK1bgb711Ndqeo3D27vp1BkB5GGhuxbea9ukLJ714R55fN6vuSAmgAwkLqqMSZgVHAtcC1z6c",
  "key1": "2qvsGUxaFEiXhXVVfEupx2Y11BgXUSzc1FBmpK6TBs4GFkyYmJ6dF6YivCxDjrNhReswZU9544Ws82qDVc5JcGNZ",
  "key2": "2Achi1EcVtAghuT9u194VtHgu77TD9Z1DCsppERf1xYHywUgpJD8nyhq9z6rLUUjX6eKgt8MEu5wm2hMvC4MRaJ9",
  "key3": "2RjLjEybxFqpTXtzg7BKMDfnLZSc6evcnvZKoEhr56GTX3PKKfsneh7PuAqiQMczVcXSxxxbSn1PC1MNdqYFr6Gs",
  "key4": "4F9nT6XUL2RCuDjkBr35PgSedqgcy3j8uuEzeyxHqrndeGS34Y4SuaYpLgFnRBDtqnHWdLvvgDDi3WBJxbmV2sif",
  "key5": "2XpWaVvcd6yq2dVV6JXnYPVnwtZ5grAA1sEPAEvZN8BaBmphqQGEdYc1Eoiv6hSixmtTYPQLas7JfEK5fkFTHW1W",
  "key6": "4WdHcfRxREDGpM2ZfsTXBpF8XT8MH4196Y4fBtJGMEYebczPyd3CYNRjKSRt6dJUR7aMm1TEPcPqtd6CMKhdbHk4",
  "key7": "2SxUJf5Awa7UeZxLkTiY8wLQvqZjJC7TkALrGkL6y92Y8pi9NtGhDFKBRbLkk7yVY7H8TPQXSkgnVkJfUXozXpX8",
  "key8": "4qvxhGjL24veJXHNDQX25hrz8inPwsDHpXon4v3HsNnqSwtgQDJtT7vBiSxer838u6wUL8qzNX9p76oXtNyvqZQq",
  "key9": "6aasA5ZFMzWf2sx8fQSYpePF3BUisW5uUpNfGBsyS1evddPbeA1RnV31xEzH1hJFUDHz6RB3gEE7MY26hbKKm29",
  "key10": "5TFz4RA6pJRXYN28yZxLm5zzdF1LGdcZyLVCbjL2wKvrMXgzMYRkmGVzUqxj1MdN14xup9H2FUes3Q4RsJVG69KT",
  "key11": "43Qi36x3DjYLidWAZuQBUox2FJLChgE7zvpoPGyXaeBWatVEMYQWzavu6uYmripmyRy6LY6wBmfaMoLFY4DHS5B2",
  "key12": "5sJziDEdksb49fGSMr4rTbMSyFn5HB9rLcvm1WruyDS4t8opXe91DzR2Mn1gvCrSXrq22XM3e9uaviEUzNa7CtdW",
  "key13": "yZrfgxZXipR4gtpJTsyFDZ1MoLLE9vazSN6JRPjyNpBsfohdyeKg47pvGsRyGVW2cXTZ18h8bSuVxxCt47MjNRp",
  "key14": "2wKoSQVTMBtrFnzWNcrDH42oVWRN3wxHDgoeNXE5DBYfBRmzS6S5r4yiGBuez4YeWZ7Ez5keCZHyiKMUWgM9Etdz",
  "key15": "2gF1tNGLyHRoQ5Q9q3inN8gxcWzkChrXJsfRDU6VJiNy9Eu4XwXNnRfYzAqUtyWobG8W4tWNvBcFTg45vLqbNYKL",
  "key16": "48BfKs7frk8noAAaVuTbZquQjxrQJbpF7EcmSs9Vim2RVxFX8gpmPMYEnXb25z5gzC3invUCBPfNjiXmxJZMgA3e",
  "key17": "5mfK5RMRUxNyF7XSEftuKUKfAHEe6vRscM4puj5EX6b5Lf46HxV2gABxLNc1i3VfhHtfKZGEZSdk3HTL4raBV49V",
  "key18": "2FQQJ3avQASkQgycXLcTRfLDsFQGDRUvf842dunX1Csg2B89aQmhRCyPFf6WG3WaZjvbPsNaDNkiuPihBsmJnKku",
  "key19": "4S2tDBfAV5VyrjWaH4Vmp9XbSAKZm3ZewyjyRqsBiyg9i3cQRQGJFqnnnndx5NKpYju7g1PxRcFkRr6VJSiGKb9u",
  "key20": "5zjLJGfzS29VLFLXEfBnh5XxAboyhtj3Dgz5b3W1HvMcU7qoKqUVPYPsHsQVfVDj2HWEsRzGyNfWn34yJEeizXDz",
  "key21": "WKoYgzBKV8JbPtb4kwFxjZFEubyvEgzzSb1BPutBakLpa8CZAp3SGWxxsMP32nY5czfVcccw92wbvjhBytZ3DJY",
  "key22": "2f4QibHPZi8JskRNo1WxfyScJojqZXrg1jnNV1QgSHnubiAu1SaVSN4vh9ThyBCuoTDo3DqdEzLBL2KT7eNGBo6R",
  "key23": "5mS2zmQrRqPzE4LmbUrWbDkGFWVqHuWeS7ShsVkpBbN7th3s2bFi5Yxpwe8FzzbmtCSt9f2t2itNonKTYYbm1Wtf",
  "key24": "5QTTnFxhV8ZRVwounkK7hc6qjmUcPQPbQQcq9vQrosdHiqsYGYg8M5aePhcQXF8ExxsJV5bFAxeG4ktiwMt279qr",
  "key25": "2fe3HokimUSYUdWHwZwRJP3hqXtJBAQTwKH6Guuo5mWMkNAuvxqsTAdBibLWDPSDURuunvXo4a3JqzWaXv7ZQMvz",
  "key26": "5PhXjTSZdhd7j98RYe9qMr2gwjcrRVcVHC5XeS491c8na6DDggJ3s2hd78uLPx8JtgTp1dffsJEZRboRxWNtP11Q",
  "key27": "4N71v1o3Lp38qrf1Fq7EDQ8qGD4v6DHXQwoYDTf6WZhAA1GpZFJuCehjbXcxCMe5T9pFD3U1TbMtEz4ZsPvNKUUS",
  "key28": "5nrCHx98upptRXEdhP6frTaGZLjcybWWPNXd282YpUrhkjs3NnWArV1jzsLXqz3LiYjjo8k4gnYPyq3SoLddJdce",
  "key29": "3MRkcWw7gJKZRHjjAPbuUWaw42NXNHF3btL5TVyCxVYiS2NEFo1wjsmximhsQXEWYnLnBXtTNwfWkgXg78PS6DcY",
  "key30": "7mnnsAhmYaPXzCHLPg4L1LbguWpVPZqTMb3gTTKErcHvZYfmLeDU953efZFX7MZyXkfYDNXmb93BbnVehz563f1",
  "key31": "5hud7BKe8zgLKUmyQVx6SYKEXPQks5XywAmX7ZSvUjb7oRPNcYuTmbvELuELPE8pMNRdGMvrjVfPNvKciPKU5ves",
  "key32": "5pnc7JUCLxDyrsCU7Mqn4vZ4fxnDeUoJ1i6mGeANPRhqji4byRC7d3B4TApMamUKSYd3SfCGrxeSD3t1pY8CNVgC",
  "key33": "bB8bcbmxwVH2uHCdUuLNYgPcVioeqV5UjNok4VaeSLgtbHWPoSjgzCZTGHFeRxhtQ19huL3zhGSuE7vr6LkxMcp",
  "key34": "4b1zZST7BP2ppJDMDn38o6krKFSZCzALqTG6LtvMXrP5WZAbSAH12ZqADntbVg2bdhc8PV7SPpTUwqd2msqYRgNK",
  "key35": "EtZboigrhEx768yoY5EuPmsSs8a57Dc9yn6gFmx8MokW1MdR1MYKn2v66ACaFEfUsyubUD7PmqPzHwejigKPGFX",
  "key36": "2qshJ3WBqYqkdBzxs7zZPxLCEAeQmTLKmCGRcS4XGJNeKBbNsVxbDdEJgGJRQTG7nE8aBR5PBnywXZbrsfgnA3Cs",
  "key37": "4uHmP61NBuMzvcM5rasxo52QgecAbb17Trzf2nmKWdZZpH1dwvodEhKoWWyes1ynmXmdaDBGrMYdMWXSiKoLTqFt"
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
