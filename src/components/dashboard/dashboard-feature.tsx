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
    "5CjaoyG8XPYLP6kBSZnd5gptYg51rdtuyAyy3ye3cbNJJAu8bzhKDnbZ5cA7tYBjkY9ydqLH987MTeMtWs5WAQUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDxBwVSNDYXSGmdqj53oYLuPSMRNqqsUdWNhFTPCKKBUV7vN4ibCAFFD7h952Vf4oN4JnmgfTwshMs3Dy76oWFk",
  "key1": "3s3C3DprZ8tzUqoGkjrFeAyKa5byTZuGoZsNG2BcU85gVwdpqnUkR7AtipJbxrimXS8DagqWNkCGxzdk4d62tuww",
  "key2": "5wdjQQWDCEfdJNG1uruFSv7g28nqk8Nx53vNmcPTPaV46iAT4FYLo13ftG9bAMyQopMBHjPL2Sf7qhJ9M6oXPCGK",
  "key3": "38JG6wH8WRQW5dfidUA3UoVPqULT5yXdPZzwgh4W2PWAuyx7kKhE8C4BQTiZw2k1c6BFRMTV7GA2yXnzCvN6DCyS",
  "key4": "p7aantQfkfcMkSkEd1wJhydbBZ5SfUqudWyqXFJEQnnJyxUXG6dChZvX8d5kCmjzmru6cDA2i3Why6sBn5cucQU",
  "key5": "3Mx42eb8gSQgCgWQP8zRBmj5upB5Fb5GcffrUGfY9m1KuyXoQyLd2U7PXC8xuTQ3SMvVnzYELzftdrrFE7ANwpLg",
  "key6": "56FRdqWXPz9Bxty4XATZr4vTN3WsTDCWyTBrXGpMVCQ77AgKJhw78j1zbr1MLoGn9exsBZVAGVtkmLkDHULiVEzw",
  "key7": "2SCgQcTqJTFYQY9uCHBMpLgCTVnn4AUCEaLzt2ETvqbLRPJgRzDTPx3Jo8e9FzoNnLRDYrJuZMSud4KZA9pC5rED",
  "key8": "5Rh5z1Fk3jrBetuZDmrnJvP6nuxMKNhAHu8KCb7u6E9nnuU7f4EG5K6uUJ17hi9b5YMtHQ7wML68KBJXY7qJsBk8",
  "key9": "1w2NdPAVSye5Cu3Dvrxd96sZMAPX1TCd8gPq4CRS5KaiZ9sffbW7g4MvGPC6B3bbgeYFYdfGcBgyLYJ2mp321sh",
  "key10": "ZQJjUnKHAtNWMPpYMgef3eCXMXY43FzSmNCAQCmdPXPGPMcctbd4sez8LzCPCDG2H237NnXgUEj2YZ1PyPMdav5",
  "key11": "4XRdANeTzk47iQAVY1mKMnrccDGfv82R5Bnb5Nq8kSXHLefZvXCLavEEWX8Mv2gP2vD2WnFTSA7HkZsj34if5K9N",
  "key12": "5Tznng9VnDFfXwfWLEJed3DNRdaRhQGfHDk1QfhxYPphfaxEXEEPmf4Kdr4jf3ZWypyoT6NYXVQAzd9JKtTjP2Xw",
  "key13": "3nxycr1mUTQ24BiqfLjMrwZwG6nq3ZZLFfiLRGir8X4aM61T8zr63zcoTckmdimuG8FFRjv9GtkGQKwZ5iqHimNu",
  "key14": "5FQuLjf67KfSHvpzGnBCUpjm4Wp8wQ1bkc6keoS2mK7MB2sXAhJvUzDkF6cvexcucEjgntsuvRHNksBGSsra1oc7",
  "key15": "5m5Mfxhv8i8TTTYBpsYxWWQFh18JrLYbvwUbpDYAQTpmARgePZAJxTi5DDd6BLtRRg5NaJLoLovJyUHFVyJBrypS",
  "key16": "4Gpffse4kckT9AecsSEUhcT9sUhGLmwfyMsidu66LUSGm9MeJKxBpcSsYxew4NxXKhgAhAfE4DhZdg6E2aFQPFQ7",
  "key17": "2fYhmEeLPpcab3Uw6fv4Rb5LFUQeQ5G3ZNMToXdM8QYisSQ2B7SuaW6pg4UHM9u8MUUy4GNs5XAFRVGkXznHpzjY",
  "key18": "2PvcBXu8UuzpwGybyMB6S922TEGuJK1FsCGw3ByJrEimXqzmethJwynnQMfFQ2tncjDPfooLahNNeF7vZDEf1Zsf",
  "key19": "wqGHQXnN4M7fLn2NZZ85t4Anihiz2n7LZjWfTB2mCAri3DtEVENaBmiPoomPLqJfBymcNgXsw39fJDMjnN9xHaU",
  "key20": "oUWc1xcJdPkxPyuVyNckqUwRdegLfAXfv1wUAA3qsRUuTpJpKVVV8izukatqvusgY411vsMXTQixYaPQwGVNjiZ",
  "key21": "4KLnLqHfqSBhA936m9uZb9sA9fqb3L4mRzrsCbZxdD3BWN4qigygW3JUHo5Gds99zeXKNgyzPrQqxsoigDWrx455",
  "key22": "5qcp6XhufJa5g4KESpmiwYLPLsPVgC9hC9bf684DUL5eiND7BHyPWwULZJjn7J66rfShx9oGphMX4i5yDETBKkVz",
  "key23": "2MLEUooRkrmkhve9imcbyPAL74eSDrQxgM7f58uAcbkw8wNC35q5ng2pDGoZHgBdJJVnHYDmFv2YoD9HMPDxirJ7",
  "key24": "2hTmWgcfNMsiBwnvhNHoyNU8vf9qwBUdeQkVzhSv3KUTY1Podu59SXJwLsphv2W123GJQhS1TDQpkf5ZVjpKCwJp",
  "key25": "32TCtkPzTAX7nJF6vvdoqGcgtirMyhFCDarrVUafoWfyGzGofQP83n6VHCNPKBrSR7TDTbRAw94TsCnr9mCBoKfM",
  "key26": "5REsKMa87zTzHtk8mPU32gHaM4FSyjbC6VSsPh843igPbQQ1RYbCT2Y5Ptg3Y4rUWSjdduHEySYdNFpmeR5mmtwN",
  "key27": "28zERtstuU8UF6HSpkxbLaXgdMYJy6LuYyePauqHkBK4LpXGAHqQNPK5Rjyjzi3GPrNMDfagpuBTz5U4S4HNAVw5",
  "key28": "wJptJrLsXQ8uzavRd3nLoeSbybEN9vzsLLqnj1vkUeytsWBZyTfMDmk2LLnmAB18YZ9YpBHLWjnYuyaXSb2Xv5W",
  "key29": "3oJcUkQBdhHe5ZnXpm8c9bDR5iNt8bkBb6kpNBZMG1b98wyTKvEWSh91G5kFFaHZZboaQYPnWmHuJLzC5e5WWAx7",
  "key30": "5Y2ddRB6gohuwKJ1mu28CfgYDuE5zMA1CKnae79F1tgH3UzfDu3635xKTTJfEHMYPTvBxJ3xJ6SwJsvVd8q5Q5Yy",
  "key31": "2oHgGvoSKNRy3YuKWDFVTns9KApCCzrYVvZPjWsM6FCRjVC1Tbe6REuzMv2eQrAkahFrsA92hRPbftWJacwYMDrD",
  "key32": "MskKXMqDeF315qCbHHf3xCqKP6UEmE2Ya3QsSEJKAcuzMNrZ3VUgDPcvxk5Y5s61Bvr6M5EX8FCjBCF3Vi8SGiJ",
  "key33": "45FQdVknxWBNaLhzFvYQeC3W7XJcvsp88ZqLuZDVJdxQqjbkpEi2q3ZazjpgUNKLN4DDkiXNnbUgrWVj3h6LmBbQ",
  "key34": "2sgz8GHBvedG1ZCWdfGT6uhiJgycP8MgQEFeyNLnianiaAYnG7xwHpFiqezas544v188uGgXRZqjzYRKexySaKAz",
  "key35": "5gYHaP53igmhWuAUUmMky9LmdYp5TVkniQTRwAmbraCFxoN8MUuuhN3tTbAwuwgEj6GitkpJjicfmefMkhV76Kd2",
  "key36": "4u7ye7kGuw9Nk3CDbeBAVDaLb5g1c4TcDXPCQbuXTf5oMG6wrFesP2Ue7PETZGoMox9xS4qJvAvDnPfe3urcgA1",
  "key37": "j85HK4Lo2xgnnuN8y7FQqk7idxAp81MZdEdRNRi7FvBBfpKEuyAYFZsmTmCuNsKJpF3FE7Hi9ABCoZnaXA7NXQE",
  "key38": "3FYxbY1RzhsPiviqsKd2iceTGTr1yvrMEL57pU9QkG8j65Jx9Ce1nw7na7k6LuejfGFLL5i6cWFm3uBvnoMBgAge",
  "key39": "4erTP6rDQzDQ5vLjV4vnn3BbErX7y1XgvVhX64zrRoTauN2UhoXn5RdJRyNs5nmoNrX8peSj5zTo6sFpnV3HYQ3P",
  "key40": "62EQw9Y7fAEQvdxLWMnKZb7DciKn1o1fGbd9BqntsZNgNgPgB52fektnngLXNCMuWTwRAQGgcV4eSudUhSo7WPLE"
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
