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
    "ihj5UtCm2hpyfJo8jpycQDfWsMmf7m2CCvniDVxNUu1VdCStGCbDaYus6QLqsbA5XNpwdCkniGi94aThD85f8Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHtfzvzTY1BFhugPe153oJzKEySqndzLXe2f2oaULmJSs14PsqgFVccZgseLG6RVtC8ZohbCFnaW3mnh3DXvEjK",
  "key1": "2khaR2syKZgsNc6omuniHJcwu9mgYeC1PyA25VkuCQ7v9YZUJf3PqYKAsfETNDVcF1QRfzdEPUXD7gUEAqQDyWAs",
  "key2": "4JRx1EwF1wVqiJhcD5HMFaK51ZZCoNfAtBYCGkw1fKbemR6ZVXsR4vZiAHxukDUuCGqVA8WMCHZfQTNCRVtmJE9G",
  "key3": "4TdazWbW9GqifYBdeZgkS5qi24pUf6W87oezYYF36wgm1hUh7qwuzjcJYKTv4V8D7eavu6QACGmhJG9uohitWWyV",
  "key4": "2MQKWgjyitX3fYT4BCX5oY3Z9jo4tNEFYCKjQdspMxhmS7ex2REf22hWub4gBxd5K7G34BLKpz5vtV2mj8nmQY3X",
  "key5": "dt1i5u6SFyK657Fri8JNHx2EQKbUQ3ydbZqh3mtrTE6FcAkMEY9YpRKhTpQk6bEmgs8A2K9G9xK6fCUWt5kz9FQ",
  "key6": "4GGJUgYq1zH9umyZ1qJcFLyfZGRVSJwuTqvBffF2wd5cQ65Ff4KnYY7qUWNvar9UcKNW1iWjDhkyf8qJzenBJ1V4",
  "key7": "JV5U3fkBEfPQ2snrzENy8W46ydVVb5xfSwbaw8bCM3fHFLn9n1CwpDAWqvYa3ZXZtdXzLLRsXyX1p9E2kzJQSf5",
  "key8": "5hdKfwfis7eYpQkHQ5dqdWZbdrnST1Du9YjXAk2xMdrL9dhLyLeai3qhdndaTjAMWRoW9HQaKMiAVqzV8WadT3ST",
  "key9": "2NzKZH9Coz4djdyJk3Mw1n5DerswjamTPjmsRCuL7co1aKKD81ws1ziHQ79VsbANVH6X6o8HzTnmmmiFaWGzr99g",
  "key10": "4MUoy6CWDY2Nv4yPeZ6kgTofDVvekzPDcYRkdazujZt4tsAxJJCZmxnusAm1znSnNk977gFQsePhfCUejR7uUPmu",
  "key11": "5pSxwe2X2kQA59T9ZLzkhwy1d1eqrb2LtkG3U2hrurUtTaP58HYs9fGHvW5YsuovsXm6xPHU7gEq4omZGSE1f6Xd",
  "key12": "65fezWbr5Fxca1r56fZmeYnpy74mE5n1DYGevDJ2dwj2ZRzPGH2T8rcnQkk7e7wt32pT5rimCedCn7DX3Sq4wuxM",
  "key13": "5gJDDnQA6jKCbLpnKrLc9HWT4vEMxzH4KD874XRJaszpqwKgAy1BtPt4dAAcBmJYKiXQasgwArNYUroeHZq8kWUW",
  "key14": "2z5spg2yDoTJz1sFTVoRaE5aG4ScRP8j8Nu8YRa5KLDNRb4TMMui8jty38UgfsHZGxPEG7hL5NZboJps9Q4zyvZg",
  "key15": "5g4Yv19H23eBShDux6VkNF1w9FPAuypszGdkXCw5ErSeTJCke18CQWa9xywjojGeE4Cim7pCgUCHpxozLcj65bzF",
  "key16": "PtX3rfrmhX8qGFEBeonqApfARQzNZ6HdXPpowzjdJyM2U3ZNxMemsXSHWHBmkVHcpU8hHLANFwWEWGjxtiWQKEP",
  "key17": "3iahCXZw2tDy8kXrL1MV3q67zVnUeEJtSWzUNRuPnmTvvJnmR43inDTk4PVrx85HtzyhqjKDTFy1d8XxkbBbF126",
  "key18": "Q4LUPP79fnF8GpaejHpxnLprPzxsqEGjDB9zro4seN2PUUpKawVLbVWNzDbxF5EQ89UjbndQwasBSJpXPapZFHA",
  "key19": "5nH87qBv1utL1xx1Hs42zcYMa1nyXCtW6Yb7q8shYturSa4kfkaj3hKaX5ecbbCFPcs4UDKvom1mv9TtezwCMa6Y",
  "key20": "3kocaoeUouM7YTReTmfSRDPQjU7VkDpCyZMBy152p5x8ZeM1p1MY6thzfM5FWVVG7RNznDNzBDLNGLDn7Ay3cmMN",
  "key21": "4Cc9x6LxnegaJKzLDWAE8utP7jjyzbP1LPTYbDwnqXoDBkXLEwF7XYNrNWLCJ47nZzassvfHjbuuuxDWMd6N2RAD",
  "key22": "3iMnjyLRn42F46e3cRpJMySKpkdWhtddpLo2REDitTDazJxbBXJYbMdbVW5qkKTAfEf2QYzL8A8xceP1bBAvipzD",
  "key23": "2ao3xHg8CSDKbYtMj9ekrsVnKjGVw4je9WXdUCWuht7pi9aoDUWmtzQyHESobEgb4P4f3dd4UW3BE49mKGN1XXY8",
  "key24": "3qFXyiny4nnk4NoLPo9yQimGC5T19Ak6c3HNv6XrbTrbiDs4RTHDj9h2BnUghqJvKYrH5Ri3hJELE6DUqaMURyy6",
  "key25": "5j1JZXyp54R9izroWTXwMZfZT8SywAvpu15GUcX3fqcUJw69ZAZusgimLprb7AQgHP9KGtmHthGCV14shknMPyqf",
  "key26": "N1BwhxALaFLY6uMTqmzvteRUMqDoxHpc9jo8mYacd4TL43wJaLLDaubLerjQRU8txwmXCrizyexJju4HN7b5J4X",
  "key27": "KJSNHpzcjXABSrccUApPDJbVdeatnBuTtNKBhtv97Jbgkrd9f6GnwXhnRbqNn96nCd6b633zZXpTM8JkWcZzVHE",
  "key28": "42prLsv6ifhj9nA8BmwjRmM1KCBB3K1PZBAv18Pb75KJsj2qqeoLqU3W8CX2u2Nzo654wpqBU7XXiqT7Xsb6mEFp",
  "key29": "hWVTkESP6de8MDjM5UtYm81ZALNTHEu9pZnuWNCDGheD2GHgVgSFDFoGvVUUf1VYjDHR54EoDp42mPkRSSUbiuk",
  "key30": "43juvpztX3EhjoXUg8QN8dYn9odJaPquU91A8KcfX5pqFFNqW8Rx6kRj9Phmqacx2vKCQs9M44fqEo78x8wnzxAE",
  "key31": "2hHGMAjnM8et9wKqXFSqnuFeQsDz5TGngyxBqqfnYgXWm3y3oHQmSfpVd35b34n1tndYvyktiTCpmCQbfEUQYDkq",
  "key32": "3ZMFVScxptYSCegzDbQuUb1bccfiXiSeZ2eQNRgpi6yNY1rwuCsgPZAGVHCzVBfqcX4ScnKemwdySdFxFA9ZHcfc",
  "key33": "3shSDwvEdgdhkMViDq3pYuwtQcjyG9x7jVBSwWhuZ2X3JUr6QwgvZTQP72difeLcjzVdnV51pNaudM94tCB4tE3d",
  "key34": "5LwzzLB4A277Wx4AQ7kgAJLmwrRmCjfEtahHpKMkwPbfnYTWjFEnzayfNrseJeVjFhmxXEGNEMhjiUHHqU3dkXLq",
  "key35": "4ZR19DtEDwzBfGzbE4GAd1vG3KWxxXkWtruHf4Y5mzGYozHCfhuWEY4oV9jCR3KujeHfgVcRBK6gBjQwnRPTHoZ2",
  "key36": "5ovJq9TZBZgCvmGXQ86zmNnhX2A7wEp5MSUbUsCK54Ez82vciBF5vP5u4UxcYaWwMWiNknXeFyowHmTR4pDs8YUo",
  "key37": "2d8rvDhQrGcXgYvbsrZEMhbuWQSiHHcHCkevXhCobbScDDXGebMKdBt7YnoLXWemFJi2E4GDoLGtoJJp9JcLF4wh",
  "key38": "44SMTazjYk4neoo3oTqKaFnd3m6XhipB54Hkp26expLG9MoFQkkGdQWhgCyrS5jDmseH1eAie9wSQSPAAUP271S3",
  "key39": "3XQXuQVsBRmtUoPjR8BiuL8JU2gZomhC4fKPAk8An31CYyYktYFrAgh7T3NQeNK8knaPM1gW6AMB1PB3GjBRSYA6",
  "key40": "2tmUhjiBSCnW7vfgW8JG4uBBe9D3fKJGpvcP4rRLg7ohqfYqjnzzhevgaYWYqxR6zBUms77iX9v7psAThjebBJCx"
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
