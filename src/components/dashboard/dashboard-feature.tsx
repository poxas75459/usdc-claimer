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
    "4urXA1NhAZ3b2rCDBCUCPXYQ7p3pf8CwZaneEYUeemUe3c59Syzkt1QMV48rY42oq4JWk1FdNErfrMVAMwwqJaJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bngzGPzK1BEHyG5PNqwfv8XgBf4fYwTPTYefYMiNbm6NkovhjNgMUs9RCquvwXbMYVLzepe1Z6bHXPvGECyZPmn",
  "key1": "mEVwWfVemX6WsqXjfUyr9FxRCLuBGw3cmAhqJQvp6hi9D1bXwDe5Gk46MAGbyMhTJXaLQziDYhqMgoy9M7S4KFF",
  "key2": "3SwBzPvrHRZ6f9qdrVoPqS8drJH1EYzwMeAPk7yKKW65bysToByRGSnzaPhuWe2kLNuEPWzNZpSMqEXiSMzPKKSZ",
  "key3": "4fuTpLFQ1T4TU3bLkXW68eBQvVkRmWhnx7YmA1S7PNM2T9L1MswExwwz2xoJ1ujWDnLTF1u3EJnefu6m4mLdh7ZM",
  "key4": "5SaxzrEJrCPjAEfzydWYe7wxgnUsCCVmMUtxtPYKmoQFm3X465hfctoeKVKv6xVuBqKGvA4QLvnetXne9vsTMwnu",
  "key5": "tEN27b24YKNwzqgTvVFvQvSZsvbQmiMjqxZzUDHH5j29AiuE9qZVewbxTejtWgAoLsjwJ9HEMjcDcx9GdvQZM87",
  "key6": "5hnBRC8Q9e4S3BydRvip4nREa3vGsSor59YSJLyEGkv4GMqi3YZccZPgpMuGbhmMiQArH1FcDi8qMkNjdMnRyvmu",
  "key7": "3nbfY3bdyyBuofkawsaffaFcBYaX3EPoZchN7qTAGg5ap7iYzdVcn2VaX2EXYG4qHM8mp5BjcySspN8ix7rFEJ3U",
  "key8": "4EswDo3qFZTaNnamKHgXbAY1WGDaNrp88MvU54ruoD3sQcrEgxWAA1kPEHcUSn3xjwVtVpZFD7hujuqiUpZxKzxS",
  "key9": "5p19cuunGCi7Cky6Nn8SbddjUxhvZa9vUGoisndGhftCbNBYA2JgeEXGcWjUhVdSitnPePmuZ9KUUJsfdYJA4Htd",
  "key10": "4c4usr1uJkQCFpk8pn2Ajds3v26NWkTHoFTMbJPksadZQtHcZhbKEgSNPg6nUb37kq8jzLNGS67va7X8SwA8NwXw",
  "key11": "4SWpsQWU5BNcc6FusimbGjLwE3AjYRv3auBZ9zjfVVvzt5Yz9EVFakkTxqLGuG6yXWMs5nJfe3kCw2x29iWXJVzH",
  "key12": "4dctgLvLuPFiTEuFT2B3q7qM7UY55jzw4s76pNWUNna3UrauSBVGdVs9SveQbM8yhmM6G7FV1W88uHgy3zwFqoCi",
  "key13": "29q2VJG1o3qgqzTR6p9FwjkXijaxzUPjQMmATBfPvVrw4kaTvJFA8mECLSNztoQFJRUc47mgE9QvrDsrAbWMa22m",
  "key14": "5a8qT9eV838c1FHWahVohYscuNra5mWSBXb8xFJcLxXCwKiYrrk26UNw39fYG3gRms6Fd6h3QQCuef5uX2cMdUtP",
  "key15": "2jY6ee2ABKH9Bpj7S1589iGGuVmRiRrPDh23tefxm1Hy9UHtnPHpq2DWEUPuE5kWE5nqRWsDcZU1ERsL3AKpvNmv",
  "key16": "2TqATo2ADY7FAxVJaxc3G7rJnktjJgSao4ottKQ9Zo6JejdGU9KSY9djTAoHwckYRVUZKF6CGpAiJSxrWvGjPEiw",
  "key17": "4SqxLiXKQw4kdJ5yQfvTbg9P5CX3Stzgv9pwvV5rtaZnJGQGkcSDG9ia5YZLnoYM9Do3cwhSk8PtZ3J8ZHGQRBoC",
  "key18": "5uPV49Ja75fUyExW1Wj546eYVtEz2RdbU7sV6JTss3oxzgsZSA3GQXMZwAPVoLwRhap1r2DZuqyPLVBWMMVLhvR3",
  "key19": "4dQ1gis1R9FEwZDYhGNzKH7g2ScvQp93DxPHrEZQ2meQZzCURxGLtn5EgmtQ8BXwxTuLQ2f8Pwe6fLKSECdadaq6",
  "key20": "46D2SQ7g9khb5zmW7gEs7c9GZzfyNWdtZXDzR6ZxGsZd52dU7SgjdbML5stubzKXgebAeERTNdqkXj3EnTx1AKXD",
  "key21": "4amN7w1JGavbAqq7CGgDGy1R2mKasEf3B2mT7cngVCSkK2fGHHAs4V6K2gUQM256mM88irw5cT2kZp3mWqG8gHb5",
  "key22": "2Z4UdtYbAvPG5C1RUUeTbWXW37oumxgUP8AgtDSpGyZb5Z5CgS9NGk1UhVfs4HaLupmgGPno3Qrq1GvxvJeTH5GR",
  "key23": "rjbkd2Xm7auBKXGqeoa3CZU3faoPQ4wd8G5aYiCx8rtWUK2KpAmq58hYbdk1XcQ2g1bQ86WQfoe5tCh34Ys1xnV",
  "key24": "4Gfkr82kGpU2u4eHhvNt7whcwBQCjjrTVWWFh1JCGsuqQXxfVFA43osjFPSad3zWEf87Bjh1YUbc1S2wG2sTNjU8",
  "key25": "4GDwqzz3ZTrwHLYSkNfTigmfc6tqaJNVh2HpieFQ2kGFEJUdG6Fi2rNtuivHGFE8SJEyqxcZFLnU3yCS3RqJqWFh",
  "key26": "H7PivaV2Ggc691HKn7fK553QD2Y4URhaCgUWoMSRwC2tm4TAuoenYMPAeUxUxQuJtUxhbZyTfsjWtwvdkzYVmBX",
  "key27": "42XMhjYSNxR3WdBwZsdrgFVLC8A7mt8hdCpnAdyTbSPz76ufFNNPuT2bfq2gjSgXTBZ92FwWXgHe7j9xDBpXwRf3",
  "key28": "3anePaED2U9iNKsXy6w2Uh9Nz1rc7qK4AoTFi6Lrtuxh5MLr3cFJZh2gDYrWfMCukcHmfRt5nAe5f6mraEVJgfuW",
  "key29": "3HyyN4JBmDRP4JWE3Lpi5QtrsxEjCZGovFCXpiq5T4xhRpnQBkwFg6Jvd6ESuDiESFZrdacVStRNbNVrCqWX3Y8C"
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
