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
    "k9Ypv27Vwbyf83i2h6fzvHRjRjmiXAWwQDhQmfqQW5YP6SRmLDqjz1oPyJh9MXqsKfzyZFotDpxRcDJSknRzb1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2b5GgWCKsmmoDTkB8gD1ES8TTLszYuQwA7DSQDDES3duVV5n3UucbUpfm4p4jbxkpPsc93s6GMxng1TvqfhTtj",
  "key1": "5HeRBwthBRi7r4a9K4ukQdHGuuaFMERhHxAzzmC3TXREJegxe5cs2CByRj8zHdRGcXRa3MozM1f9YC3A6M2L8at3",
  "key2": "4zxzca6QXLhFdSWgPvVFLe1Z16UkAzazjgzNp93rKKCkxLtvNyxSqLgC6oZtjRTSDwGdmkv81A1taTfGfW98hTt",
  "key3": "3CkTfgsoH6JVxry72dCodfuDVPUnWadgP2hkbLq9YWmGSU83Eb42sbzm4rJm9J7TVYo9YxnSamLaQUhyns6958Tw",
  "key4": "3s7cCMLbRLR7WZDmgrNNXjU4gVcBFqWgqcCubDmjpLme1NRAeuXXwEbqzeqxJAzLCp8azFRGVRihvdFjQ35A7dd5",
  "key5": "2VzacmdFKPWpWVdvtDcTDNL17vqQHwn7RcWTraNmSqRMxNCaHesgMHfQgkEdQmuyBbDu5MhwgJzETKE2ZVT5Rr4p",
  "key6": "5TYAY3naHXuUu7CqDs8GFEg3NUQfxBqCXb6G2qWqt5poFcKU7phw9C7eVgp5WCcX6sDo6ryj3Z1MrUXZfZ6CfzwB",
  "key7": "1Bsiox4f5wkqZ4kv7TufUMWxCbH8pjuDZrqmRXSzQKKTGjvcVXxEzkdaF7Soc9US9d11zdezB41QWACMdPp4sdc",
  "key8": "4SqCZEj565u1cL98nspKYnuxYhPhfinwNYHpr6zmYhtYtfyZfEbfNQFYBRkrimsuCC8BXY1gZFr6WqQbtTzrYFpM",
  "key9": "uWFWfW6UcEbqjJXeQy2UgiSiRezfEd2jKNaqTfNogKGjyBdKfTxBgetPu6UXC7QGs78LkRoVVWnRU4Qab4TiE3m",
  "key10": "2UepUfqGR4f9GsA4cM4QReVVtw4yCFXPbUan7gH3V9R6EYFkeyDetoCtpHmHByN1JNwx9heA19kJhHfEW7dUZmVo",
  "key11": "4t4gWrSczDkVDF2SYQcNY1TKTYLRf24HXpZN5TS5sDcncEWNHmuqfnyyetB89U9GVgAq8qYmXyPhxoSXw9L29YSt",
  "key12": "3Vgu7zwzYWVVFS35BHqh62GVniTeKckTE1GtvEiwuwq2UWNJEiWzKcubt57VVqzCg1Qq3TTa1hbmyBMuLxVapge3",
  "key13": "4RTP9wbrTBrtTz3pYY8qZZRMqiAv3nXvMcGz6R8RnwsyzfXnyPaVzPX6Rue69ExpRXAk8gpV9wYrhfBoG3P6wzan",
  "key14": "4N9XhfpDbeZmatfAHPoVD2eBePndc65QArk2bpzmQoKQpKLC9D8NWtaTHo2iqzzoAgu5iv51a7Rk1NDNGikEK9CY",
  "key15": "3CyHFU5vtVGdgW8qSRqVvWDRe1kEbWLc2i8t3cbNgn6vGmQhzcVUkTiakWj7LRrjUqEyobAiuEDCdJSQeTABjbHo",
  "key16": "2tuZDzCp12yCRWMC6y1jqsNwJzvEj5T3RuDAy3qcLYYnUw71kZgV3ocw8LDDo8r8hpMhQmYQVZ4xfwzbThNpeJgG",
  "key17": "3shAsw1F5wvZGQ4gmZ5iAnALapfRydysxwHVKEckVj3zmqjbCMTnfgAgPJwJLuz6sApZV5hjPDWUxFfoHpVDNB9Y",
  "key18": "3pBt2KxzAAvZQxbtPLQHbGJA4iELVTAEScqVPYu86PANPXQG4rz2ekWPemTRWxUhQnFJJhjaJ43XxJEByFq1VWBS",
  "key19": "j1n6dTVa8ojdZLermZLndhXGjJ9eLSwDhr1S51tKhjdVZBvK1NTzgNKqnqkBWiWfPksA6y4hDHmT7bFze3Dexk9",
  "key20": "4rWEGLw8NK8bbAoyxAVtCzzSraREjB9Hr8k2iZ4WWfZ2w677qc2L2F9VsiyFaR1wrag3G4eGbCa4WNz12mvZxQTF",
  "key21": "2bET71cT9bDBqzb2ro8yJJMWzYz2FGZArXLeqyFTTxWK8o8aVhjdE7dNE8iGs8w74rmZepPs3yf9TpRLLg7Aj9PB",
  "key22": "62KCtNRyUsb2vV6VFTunXD55wPbbAjPouCttkx1XZfeCXgD3WATmPKGFv4regQvTzcngaNVGUoUY4KkL4DqdLuit",
  "key23": "3K6nUCcs4qMJVdvHKxVEhTV1H3oQPcVS1ab37yDx6WQtx2VVyo2kqMdtkikxMyoad2hgB5ya7QSWocGnCvHWcBCf",
  "key24": "61FtRGJnrNi5NWt9V9wwDjNqVVmGKcECyTt2AQCBZBKk2nNU1USHvjcvXymzqfKDyd2EXuK7F3hhqtCkkNeYbfkr",
  "key25": "5j2UBymdwWfpSohxR1nJeWp9WKnXBC28KdbJz4UYcC59pPrwzJLGhcbPePQssLXB1anCvzJfd9xZFbtdgtHMgBSj",
  "key26": "5JAmTSoeRBFGvxFDavPWigBq2giZn1SLFq7sPvNRra9DaHkaRqA3KKnN9SdXtB19tsyBe67WitX2ScxagFyJKUTn",
  "key27": "3kvoERy2v8dA4e9mTTkpjaKWDzUb2f9ep2Md7BUXCsqM2m6VT1yjDcACpWxjWZ4na9wK1HtAaZnDfeARSRDrGnVN",
  "key28": "3zHzDgwwbJSkK3Ju2h4LC5hWhTcCtqiX6X14e8uiQ33HuWfvWopDxrpDLqByT77N9ivaCBwBof81ZT5xdAhZGvGm",
  "key29": "YCtimESiLZhYxsZWLT5k399LhidJqDHPnPWNek5zMXhKSA1JdginYGonVJxKHJnYeMn6bv2QX99RXsg6itwi1jG",
  "key30": "4GqzpPaHhBVxi4646gvNgoDAEVtJsGuf6YLVxQSue2csjdGT2euCFyCAgSQkpKwcC6EHVQwycfoKPdzG4voAuecz",
  "key31": "4Hhb5N2MbbM3TUffg8jVpMSXrPRyV17aTD4wQD6hwbo4VZEj1q4Brddn2A2TkPj1TbWN8aweqdAwxPdu23z6HyJm"
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
