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
    "3TCzDr6ifHLAStPgsiMa5gGYaK19M5cZhV6ZkDtBWyyezBmZGipe5nZb1xbyLXqFarDZDN9S1VFNSxPaPD7bomSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d36eD94vwhsFQ4Puezk8q3bCMH8FJXe4PEZYikLjVJVkPRFcKdZbhmTKJpXWGFCWKtfavshJ2zvrTS7ec9bN94L",
  "key1": "i83oHgjRbQ54MKFqYqJFPW3V7QNh26cxXV7mjPksEgn753c2tXk12sMhQ78WNHcwj2ZJdEoeDEhggHNUynyZF3j",
  "key2": "4f84Q76Ho8CoCc53mVTK2QzCxEm8jZMDHWd1g3MLdkWoFXnrdBPT4AYszpSy8AJrGoKQazfQb1AWtHWpSkCxnNMY",
  "key3": "62XcU5zJwPF2Y2A7KCiTgieW1hbqq3XytqKGm2eVkJXpcW99b6ayoAoc9VzfwnYWDN8tA2AYd483yuuXUDBhMswZ",
  "key4": "4yAS4K4SDyW5UfrhNW3EoDtoBcfjEkE4xK7yKpDUzYWdHoj5AqABpmJugznRPtQPXN9a1GYb1nvjzTvJZJ2YVaHJ",
  "key5": "5hWhX4KqwTvEgyMXMNtxBCNASnbj1GzvWScrX2iBd54qSbFRjfNVAM5qpHeTjHBW339zMLCr5jY2zua7y8rfYnJ5",
  "key6": "3isdEsvF1YU4VmArmhAZc4Sox1855NmbYnsHSMrAXcaiN1hT23xkZYBzAiETJawh2as9qTXF4gBgdBgjXedCS17B",
  "key7": "4RhaXu4St9gEagfUmDyyohtPjUxqqwSUpun5v7owLvqK8f9JnyxUq6qKK955SqRtPmUefzUdMCHvkP5SvLTTssqQ",
  "key8": "3B7qK7grftGuhUD3BtHxFTfpA9iPDNNxDpa43dyx72oMbPm1hQDXeV4HMDdRWfgc6VMZF7dhEEkCfqHRa2xwHDuB",
  "key9": "3GdMJiaxYzu1BYnKUBbCQVaprGmW8gQatZfXpnhhbWSesjFD5z7G32iwrz3defSKgLmQsYHDyDeePZNkwbT3wA44",
  "key10": "5Bc1LDomhMZSeCddP1B2ycuSRH9DPEG2GWt5LY9mP6UNSca17Zj5Qz8oVubH3j6omvcUf8CtApF3wbGcrEFzhpcm",
  "key11": "42bwqrBwmCkEGRKy8HZbzbWFSzSTASpnpDWuNCu7sbKbQuZ3JvuqwoadhLVcrYSCra1trJH1nWeDBD1zYBX5f89z",
  "key12": "yxbg38WpbSeCYoRvE75ieW3fwigfZz6zFp5QN5iCADmJNDriFJpVSAS6KUjb29AmsaPzaXdqoUESaeikDaVMwjA",
  "key13": "39FCysQXyKthHdkgWehLdq7WgBqbY3uEoLa2iBKn3r9cfLdrRKe8LsZ5vpDXEEW8kMKXHgpoErEEBhr6Brzy9irW",
  "key14": "3gWcXhKes8zD1Fpq5s6295kNiMw7emKfuFwS688g6DaNmBnHMKG4NaHfRT8PkjpQdeHS8qQoJJewG68KZ75aNwvG",
  "key15": "3eQEi22KzXwKjLjUMg1bj7gV98wt6R1ztY7yMFRCQBnzMzvEFhuHGnhgd4LWqncrRSm7Du7k2WgRZA1VyU4zbuKn",
  "key16": "jveqYHWh5V6uCB37681fMGo2PTT8YJirEhA4n6Buyj4SW2wHTFaZTfN16zEzVFWRyajLsfvELtvvt78foFXeCGy",
  "key17": "MXchWEc8nrhBuidquFhxLMQMC4QEQBKb6Ptk9FZwHJLmM5UwrXgMCZMTL28CR3Jn4VYYhn5yjer6hR9rvQj7Jzi",
  "key18": "22vyfowzpbUTm6jScxJH9t4ZkniVVBo5u3sj2yTmkj8KZUy2qFpCjnEYv9AsT3TwwJJb7hnRwijPkpH8x844geiZ",
  "key19": "5sosxyH8fGL4GdpPR6ccwp3xcxfaDy9QGZNRxCbGgjNrTr6VE4JrBihsBkSdyMJvR4Q9wJFCV2fd3nwybtq23vwP",
  "key20": "3HWDJAUPEEar93WdxNBu5FYgUCreu1bge7bk4oDrxLCw839xXfaZrDVJKSPczanvLDVuYsScU7sraAmD9hTb5NzR",
  "key21": "2LcJg6nMJffNa3svp1TxRGpejvQiVH1Y9GLU1BtVa2ogB4TmeVa4hTW1259EAfN8XgdtefoVPgTDQUnL7DRkNLrr",
  "key22": "DT7jXxSGNwcpfS1z9jhygnfr29dtrTgdTFKVjfyf2n4AYUzppoci78PveaPyUFcYo6uq8rMRGTxpfBcme1gBKAV",
  "key23": "2fajxxJ9cYjKsnhiLnt79ocNhHJvSRkbxaEi1UZKeHwir17SBeNo1v5p9bRfsB29Hu5Nukuc79S3MMpNYrcPRkPy",
  "key24": "4K5BaQgX4BPSi9NeFxY7rTjt64CQMftUWsjA6hYixP5osLwPYYS9q6UVSAJkKuprxC9mXfcrX4FvwXzeytQAFB3r",
  "key25": "611nyPo2y9UCEcbksEdaWaMvG2H6LbU7WN9PC15mMZsG8YoPNUoRFm1rYest7L4Pjr37zNVMuzqDqofSJcwex6Xg",
  "key26": "AwoH2XG3tFjM9GUGxy3EENuEuNg1p5h3EtdvwyBZCdcQ4xPCffN4cam7g1uNALDrkTNh9mjehu4NLTz2EK4qyuk",
  "key27": "3eyPegEyX1zKGqh1ES41my7Z1grk1KF318hHrMsHpJx5ARiHiiUrxbYgnncoikP2EQtreKD3yDiYDCXdeSu4A4qe",
  "key28": "52jWab2dZcpJ3yeoKcd89PbHujzyGxipwNNrYprq4Rdf35xNk1M7vnBBwREsF6FsfUzUMyG3ofYe1TeckhXL73X2",
  "key29": "3EaHd1ZTLHmpMcgidMFAUMMvc6theUFM9PrjUbwUC5UjGKTnvbqhd1gkFFnhSYyu2RjULNF3DHjVTdzSupL2S7cr",
  "key30": "3QEq49jwiXNbTydPVoKkwjSs8WyaQ6LjkGVWFbsnAAv8JCs7kaehvKCF26RstmKryQScjw2wbfNMtZXu6LuEMYWo",
  "key31": "28Y4Y6KzpgvD79nWzhwwcJ9TYP2mKTtSN5V98W9odKGFZMHPWmcyLuj5t6oPeD3dH7a9ncMWU9WGowLdbijLQZFq",
  "key32": "3usu1QhkpuK4cuzUCrrwHX748JMgFCqLEpAv3hBcG3UZHtnNjqruQyZPH3WEV8yCyzVnMZG4SNLun6ovbBkmdTKA",
  "key33": "4qtvGZWff6UfZ4RaxMc42E1kjnnwz3iLKQ294oy3PckzHr2HBwpYD4pAZjpiTKMmA4gbrL6ZMnqkUJNfzcu3xjmH",
  "key34": "3kU7As5J8g79i8xn7hx6ExHJbsiKBtX7EUJYqXsv7dbn7TRsmfGv2NZ56HcrUhz8SmGST3Tpjn4bcbz9ZeUft551",
  "key35": "3PevLwcN2W6V2afPc8jXTDgzcYwQ4Wp4kQBUaSFc9mKeskMajQabokxvXFQAaKGLjvd1rG8WK1akZnhgfBhXSKnY",
  "key36": "3U1QW3cAH1yGHCLFtmzZNLWS3qcZh48gy7FnnXiA7tAbD966LfUsvA6pnvs9XgA6WYnkbapztATNaXk69Y4Mhguw",
  "key37": "3h1HUYh5kosVzKkDTbY6ZBQojCS2iiNcq4Y1faxpPzEqanEEmVtGEgDAD6WRtFRmyYquc17VYrvU646Kd79zu2bA",
  "key38": "5g1hKsJ3EsxFpaqFUf9kPe2p2FtLXLMEtEBJXufLTXcZ9ebqy6xQZr9paTTphJ63GRnsJrdTcEpevrjYjTnQAeGp",
  "key39": "2mdNsrDE3ESGzuQ9oyCMHTWC2kdTtLgng6dJU1XRqxDh2yU9R6uy6teG7vrnJW8y4ieomSWWzVEwQkM3RRimqfWK",
  "key40": "56QpgxSbHZwL27FUpjnMhKSGwdc6d3q7vu31VbNLgZtQbRccsKsmwquBfy84AX2rDrfwWDrgryRaA5GdPqdC3Yak",
  "key41": "4kVA5n9CiLteFbojdBQRjQdguwUCK6Bj77F1p5xhW5vBYzGVj3RBzWLDgoUmETL453oASiRHRZx81Ey6AYo1H5sC",
  "key42": "3GpmUuW7XtdzP4hMFetz4VNP8LVE4gvkw9RAeLYMJ5TpaforBR2p1YN31KLmqDogrLAB6LctgTAgQioo7chN57tC",
  "key43": "2ph2hKyfgetviqqwGkMyitKQHeR3gyhwoeC4xn4tG6jLTeq8vVnCBjaVQ2qLpv27WcgGackPp5TShPjYAC2yijUB",
  "key44": "4qnK174DM3Uk6dhKDqMMvswRuWA5QXEFs52xfVDccRvBxcyijodeZqaTzLkXDgt3bxCdoJCcXN4mYj1QxGkFag1z",
  "key45": "nAqjwakrL77z4qtahVk36u127ym8iZG8kWDNiABp5pToQZrAYynCmhrnBHps3jPcpy7giZ5xoPDDWLbUanzrywG",
  "key46": "5Hf6cFJwYxBxpEefTpqMCCYaUVn3ZQVW3mrPpgzWXZw4bMs8iB58LXA2uEqTRx7nXgJaq2sJzfdRNa5CcHXbRj4a",
  "key47": "2VrGfi97JDGHaUdgwmLNgSSK4pFj5QuN6mow2S7gCqC38QpTYQkZg1Q3EtgN88mRrNvLZWnEnGxw22uibpSvkcwy",
  "key48": "3HSuA2EG2WvpbhmLoGSDXFVKBapoztTZBvV98jszgLfbKGeyZThFAggUtjMgF8DqidWUucrVNYbpFvjL8LoEuzhK",
  "key49": "3JcP818fvbJUeN5XVi8yRjEKYYXua4uXr5NkMKU6SjHdHQdPd9qMpFmX1JbKMJ9poP6fkAyX1AbRzQ4fZaTDVQT"
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
