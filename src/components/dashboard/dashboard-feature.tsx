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
    "4FLMuhLVNvtwJMEJZuTBfLqdsuQozSNRQtTmVe282RvKawYCXos8JSVbx3SvxxPG5zgNuhu4fySgfWGGrBwqf1cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxnTxwp6UHAFw6jN2XoenxUgwiHSMnLs9GsVQGabWhh7bPrssRBnXrPnTAEmXcJeBwL3dyoESm54AyJdnSz5GA",
  "key1": "NVrNYDHm2usGYE7DTuo7RGFjHuWZJpPZ3JrrTe258u8rYjxAyn4oZAAUFe3aMeW4gmxbm99ZkhKw8nGwVXaDL7g",
  "key2": "4oknpUW7BnhUZ1PZFsVuqqFfJJdrHsL7TGbmpjBhxmN6Zh1phissUWozeVJA6n3zv3TH8C8FTD7RfcJn82hpTQfF",
  "key3": "291jbezN6LFSywgX258LMwwHLbtJWcU9uuCsTX6kzetWYprPLFGGJXUNJVGznUvHRkUaAHmzBfqRGZnkrVEkrbJH",
  "key4": "4JsrQZAX1P4E6mNRSU4HJXS1VBxh8KKJutynz9giVoSqiJY2bRqB2PCjjVSCPBNyyuaybp6JXHNg3rbFoBDaLS5o",
  "key5": "5En3zghfpoM3o3xWnsN6aYjgDc4TFcFkQ7ccytNow1R9w42Xx252qbTFE5QqwDRRveKFuCWPrd7DQXEKQdRL1pEZ",
  "key6": "5BmzXH9p5iXFVMPzZx6XNYzPf4B8U4aU176uL9meWKsK1YC1VemLne8E5z7cKiNQk2Ehjev3q4GCZmAG12N98kRu",
  "key7": "626qVzRSmetN7z2xFtyDpWXxsVH22ZzJDXV2ur6ZeiVJwRFJ4nRyQVYZE5P8cii1VxUXdSkJC6Y8iNkdCzKFfUBN",
  "key8": "2roBgAHDmsK7VjZ2mCebiHf4TSMsbdBQoNN7vsvsA9sQVDABTbpmZduZmtVrqXwdDWKxdL3SFojczgxdL2iMRHrn",
  "key9": "TpkJDVgvQK2uKUboUne2VSwYaSr8gDy4muZ6AZi9wDydFQAS8AYM12GY3pvWJ7XWpHidxt63m9kAJRUUYz3Aznu",
  "key10": "2uwJNfaWPBjYoPNHmxGnWExbWhFUUcwBm7XvWYxp9RCfZXbhQy4DQ4xfML44M3xQSAGqFxmGKk98Yv7NeuXGzFxx",
  "key11": "5A9xgJZGLRK9Uojt3pPrGHCxhxQjRiiNtaa5dMY6D7gyZBMtaWMhdek8pisPp4V1v77QKVA75QoJ9dPtEXDvox6v",
  "key12": "2XHuuGhHEQdJ5k9FeYwzBGbVywbeBHqcM42DSLAdiFAh6NrYdvgupN2tbMoWfNGxpf3jiGpXEqKC1LQWHDRAnkp4",
  "key13": "2WaX1qkzBHiifSBZTwjku3wQ1zUc9cUc3Mo3s6yEfYbh7vmL19LYzJzru83kdah9TaJrFccQciZzKuxkRwFuPjvU",
  "key14": "5F7ub71ZJEp1wzj4bNooAYrpmNB8jeWncGodykKdcLwouukrJja1nipDLRM5ihABsp5fHDwHM8HRCbBCMQUEgWhx",
  "key15": "G86qQbYJG4q9b6fyHBUfnP7kcMyoe1urZ8XBG2xFhFg8tD9BtJfzKkv6k7xNDmXhQCus8XMhFzSsiZGa6dfkU3o",
  "key16": "5JEy7NSCTsQS7AJZNJvv2YRUbCZiMtYY1vtwA5DVRB8KEV2pzGwmwvsMv9DQSUNHaQVoPafJeYv5oQRLhdbWuiQ2",
  "key17": "4vBErdPGEaU9yAWMWz3p8LkYkqroayHmeCPyug3Q5Gi5zUj1jLsMbA6LVWHgx7dXZpvMXy8heU9dXEkhUkKZrHea",
  "key18": "CvNC7YdvpZNQfDkoE5ZbaDh5KNEtJE83enmpK35ugPu9LA3s3tiQfLMLToFFPkapYHJkvgv56Gt362n47e1j5dZ",
  "key19": "2edeDa5HYemLk6vLpcf75SVUKRtqhnWfzDu5MgGw2e7SPSGaDh3XWH26hgJEXV9USZQpwPv1LwFejzeNE67mugXB",
  "key20": "4CKLhfzzRBxHRZXWGFqmY6PbusR86xHRKZ4vPsgoDBswpkNsKdYx9zRriGEXnFnm1yigqWz6MorhBEJS8dmM3Jr7",
  "key21": "66i7Nne4gVcanY6xnAp9YSNSo9CrbgD7fw6i8xiZK8aVjRMrNPigxBgLawwmwUD5sbXkC3Cuyi33uyvNswdp9yeK",
  "key22": "3E67PNJTn2DiEiK2K4zUYSXvhmGiLBEWL6VZF5DXyZXc2raQqsQ7YobZjFREbXaGS9Mcv7ztgo4ke19VRTL7euRF",
  "key23": "4EsY3g5xUbsatUvvMusNopq53zsbsFQh2GVeeH8Grg7P6G6Ru9vo8zMkeoDLAfzCSKdLdWtfCboDMz9cN96QPg2",
  "key24": "2E4n9gfDC3p3qubzpt2TbKBbLfvjQpj5skwNBKETmuHXoDCZwHBTT54jxwhD8eTWMsP9jpJR1jQgbeEUhyivd4vx",
  "key25": "5eGdy46NbNCsfqbfLU8sU68SfuJK8ZtYJVEet7JEwyguhzB5rMJHvePjurQYBnBrtqpHDmqMKXg7EFfFEFsu1n6M",
  "key26": "3bVkwzZPen5WK4tGfq5dzDPPz8XC7Zm2kiLhxCKojMapSkLpBzj73N3g3aAJGZJ3suH9XDBZ2SK5NtF8XhDbr4GC",
  "key27": "23nULZpPCp7fEbTEdK7X9VX469vmRRoovB7WYuKCazL2QXzvAC2BLzopX4s2nWDYq4TpV8YHiepNJPV9zDKdfoQf",
  "key28": "2WftpkxBm7tXk6hKWQakMha61egsepjHHNNELDRgfTTzNKL144gQxjtdrCvCaTiU25EcbW7LFXzWACYG3AtwAcnE",
  "key29": "2tFP3qMBAwqK7jQUXQsakiHJEAvHWsVRtaDkU1DGy6sK2jqbRhoLMiVF7serk3sddnXR5zDr3wFcfviK6m2C9uWm",
  "key30": "5poKAxK57TMbVq2d9ebtqU5x6nCrSvg2XaDkFE9TojBVppYbqFJ7DhmTDHNCtEwdHMuTp1apEpkvHEp4ys4kToC8",
  "key31": "2Dkon5FVCHRM3j4S6q9wiQrwCmdcsPpjszENQDjq8h8cVhP5FYvavCzJeV6jkv9MKeuWZ4KiKDrp5Bt56z6QQzYt",
  "key32": "4eHtbfW4tGJJGgQnuKT8xd9tUHd3v2hY6pbWKkzFJJBweg8k7XaCWfRRtAWvpBijvao1cXwm1eEoHPp83wYpttA",
  "key33": "6xU5311b6tqG5p5HQBGfCa1D9gGUUrA2toxie9Z7hN5ZPVPwYKjMsLDSByHZynq9T2AousRLeSiFTu84rCF31pK"
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
