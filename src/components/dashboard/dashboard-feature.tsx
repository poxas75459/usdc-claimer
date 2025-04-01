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
    "3iv3xMjDerWzVRqVFwXgEyiBoxdYyioWL6jk81qzXDM7nbURXutep63mJUYfTZd8a7xnvYfndBHN22wGF3yZZp7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5gYTX2By7bae9U6WhPhnophz8ZVdPxSsLCxdqkvnd1At3S7H8RhG2Gx2U1VebwgQ2kivKRqrhcntgN1fX15uWj",
  "key1": "4bXH1MV1GxWxuMMmaZUqLhWS9sJL2Cc88gnywrc8KwpEYCzojSwC5jwSq4zXzPH2MSxbvLfXWTm5Y23ayQbaUGsi",
  "key2": "TiMxig8APb519JYLSNyGyuFQx8fxmRVuwJj2yeVqyRmbJP6bxn2gmVDgxzWTiKdErgDZdjbuErJswtM6VXPUCjR",
  "key3": "45FS6MScfqQ2awL5V8QHNqmLa9CGn5HknGzVSRFatuygQZgLreq1xqXQv9dD8eWssU2grMpjPuntFbebpdw8rcMv",
  "key4": "2vJWU6t7VHftXQhhVYJEjLhhtTiPw5fjDjDQJcY96CbBuuZiexnR5EVTTkyb9fgqKV6iTzv6sZYxMhxmNK8tYS9w",
  "key5": "4kCHSXXJp6JSgyQkM9bTH1soD9ioeMHvYqZpyDqcwEPFVDTQhKj7menVPg6LL3h6nHeVngAPq5syDCohnYKMdaEQ",
  "key6": "5XPMX7Zv5JgyL5hNZWmGiR1pTpw3AYTe8H39GrCqhccPLKL6crNRzU3a3tYc2JhEdbTGUTXWRypv9roT1NiSWbiD",
  "key7": "4xPce5Rpcz9aCqcQqNdGe7aod7bssiyypF7whzrRCb3WhkEpTaZtEVNwrksMFnPsgMKwFW2vceHNGgFgFrmgSVJk",
  "key8": "2BZtW6SRZpPz1pk9JTv6S8TeBx3ug4aHk6373hThMYaKsoXiGkzGS1qjDLcLwrfufnLUYgRV7s5bTQmU2kkmVgCf",
  "key9": "2crmNhvwebMK1Mc2dnCA9bpFjJXph1BCgyNc7FwuVW19qabFsMJ97FDGu214w5mTh5uh6iyP7csoKT1WuoSBYHjV",
  "key10": "yY95ysUaHVn6hsUdMiraMwY3go9qg2AGKBkd5jcmTNonNkHTuWWiCyU3QhzeFtcWatZG3yuE5ceREzPK4QQLdWg",
  "key11": "4MLEn9TX9LSiUaTqGo7PkGCFn74UDgKHbpHXMA4Tsok5A7R6ZGhWqdBa2iWhEw6HfwSVvKK8bP77qJXEu2tbedP",
  "key12": "P5XSG5ekeg6Wu2gXRQB89BsDQr3H6rpazbsLc5Y9VMU4bZbLgt2nyDj84bM6hC5wRzFMzjmazBuGyAPKnFER5jV",
  "key13": "5mdUyVPDgEvnbUbxga3KmETR8xXpF5gBivigVm292eThNPGZMZSbmDHiYu3vjhbhUmVL2jbWFU4i9aMjj8pGT4b1",
  "key14": "3sL6VNRcTvL251bGxFkduAncwdsKPm69uVUjuDV5BmeRgKeuAbDisy8HNPWbphd5Miee57ede7aGr2oefxe7Zq4a",
  "key15": "2BajuECJYcg7Ru85KCQn3gMPtMdEMJEM1GcQRSjFmWsBvJ74qtwW4mYWFfpu9edjfRkLXZukWmtBqb15P9VH8BEv",
  "key16": "4n3quLwLQgfAt7rsyL6jMYNqFkG7Uwt9UmVV2ofvFqaE1anXZZW9Zf7zYJQsBbax1xCCvHMzUW17ZA3aZzP5hRzA",
  "key17": "5FULyFs6aJagaBd84eXuXDYL77zSEcmfR1g3GrqiREK3MfKi1nSGEvNCWSc3sncnVAWM5fLJ9zcWJ5UuTnwLrYJj",
  "key18": "2QMXiZA2axTvg12iVv8CHme1ycubhG7QzYBrPLfn9Sdt1YvkSt7o1RvxbhLuvJ5NhtGXXLBYegGeHiescz63UJsu",
  "key19": "4svk13fA3eSxJUBrF6R7TbehMgCjd7yyMDPF8penhk8Luc6sWPopSKPBLqZu8WApDbjkSNLL5FwNoKDWYxemf6k9",
  "key20": "2CyrkcNWXEYp5dPxAdMxWhALrKoYowNk9HzoxTP28m3y88HdALkroY4ykkz2Ed2MptpykgXM2ixmmyC3aVq3aq29",
  "key21": "3FFLvNH3vjDUq5uXG5vtDVBtqAKc1e3KRWYYjXkUJimHaJUcsyL7mm8LGP9PHW3BApb2s8yr8nK9wnAeFAeAnkFr",
  "key22": "3givF8tuvrgQQdVzZCDN7XLRdsPg5CwTNTMSFA3gJCcNrssFmzxbMt9agf1keGjVXCUFU7tnLhQurySRzBZHHyuN",
  "key23": "XjUyxFbtuFAJEiKXkQAsTkzZw4ZBxU1HLbb3ggxEdxdgSiLRkMiox87TaDiEQLSwxi4Bz4qL2CfcPDAUEE73e5w",
  "key24": "43BiCcsAxmk6En1mxwYuTUjHRzmSQWvzUqE7NFGcGfXDQwyiNhWaZwCspnGjcTEd6BVfyLbDH26W1izT9Mdcwh8A",
  "key25": "2W4JcGPjd1LYDJvTgkWRiU8dpdYy4gwENwuJ34Mf3DWLvmAM1ZCAjf5oQ6FKM8XSLN8vA6wXgmuXJwhXfMBaP2M3",
  "key26": "54dwSqXXNBk1zep4rFwVbbT58o1oStZMiQxkycaBDjXSDNM6W8fPQg8Mbjp4Bcsu7EeBajd2rg5Yu6cRbW2GpdWw",
  "key27": "3v9794DEPmfT3JTgeQmenLCS5jrLefSNytaidNtJhJUjv4f1Bg52ZnUrTMAkwBPjryKogpuHDwyc1TEYGmiv8g2D",
  "key28": "9QoEEgKxq2BC84v6zUnyPpYAh4GC89fQwmnR9g9LyC8XxMtjweZjCjf1RP966CrWoRT6CfVY4VvbuNmiQiz2GKU",
  "key29": "Zu52L535xVBYZeLMZMBmf38KDb1wYXyWz8Jdj6qnm6k9YP62rVhy8mb1gbLUu6TcQowifrFBWHx52VFU33qks4E",
  "key30": "5AXBarKJSZSz6iM3dhDSkV245naj3ZamngcUR2mNG219n5LzmakyPbngNnMYS1uPbL7c32ARwvCuQ841bK9Zvkoo",
  "key31": "2ZRdLT6ndEMctTYNzosH569RRyvUYdTuzqWdhcnxDXKwAFCmtc4UKGvJ1zHcCtG1Fg1Zu42t69Bd8uWCCxqLnHVt",
  "key32": "56LuY1q6m4BaJJZseyxdaEATNnU6udPAS2aF5hVSSEUJLH7Z4H2EjvnzMTzJCPNNTCCZm8wZWfZSEGXhV5yNJ6CA",
  "key33": "99UzCtbUybdFQTBugZG8hVbwtjkHaejQ9PH8brieE3HSssqt8cWX6owER7nSaVDiGqA6KE2SDqmCUb9WBQgvzUU",
  "key34": "5rDxDnow6YSActrp4oB1LYT9Hwa8BD5Y1yEijBZEV1X5Kt7X3hubT2BgchswodsBTfXV7F8k5zoBHzDJ6ukGCF3",
  "key35": "7NkYYJbnNegNyojmHmska1TjhGbsgFW7Jxp4o6jGJUELv9JEaT3mL1XsSTjSGzh7cXs5qH37aagwACgMRDrsQUC",
  "key36": "o4E75bhpVDowhQx8tXSXjW8qbJ1wM8dsRhsCzxghHVhZaiA757UfmKhKyTpfhxNCxUZxQ14w6t5q9MNJuT7yK2J"
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
