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
    "3j8Zz4tku51y4hzzEmndtV9m2j5t3HQke2HBV4oHp71Zvg1wGwQDStZEf4X7e9qqakjEkCRv6K7SNR4otCn7GaK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XFdMe9VmDGST2DuBqHPyQdb9Yarn8eqSt6Kf8yU8z2XBB51GG2mK6VxRwiPEy1qAdQ6vp4jTLsZ4s3bw9mPuHQi",
  "key1": "KkrNVwsZHWuNfqtQgKHRxwnWjbNYtXGwkGJLkvNE9kYhqLcfwLLEU2UtLuD8yjgzuqSGzpVSn246MVfhPufAd8c",
  "key2": "3jYDLPgvXk1DAtkTu6coRASY9GP1wZKM9xQyusSBkvnt3AdnEZ12GLRGjcaAy2a156eXtX3Tx11nFM8vP5Kqan2B",
  "key3": "3C8NteJchb4w5hVksBisxiCEAZ58oY1MnkbhbS7WwEL7WVgzKzyVgKCqf7v9idEK3Pua6U4hKw1EN2WEU43uSs85",
  "key4": "neCLPfj8N85rWR13XxdWUH51AVLVhpDcuhJjedx3nNP3VZvUbqBKeDhTSXtWdYzkL7W171n5EZGgadxfP9qyR41",
  "key5": "65qsxAfKAHZ8krX2H3vQzGwo8Q4xhp3fpCGfGfiUajCEPUDSkfXP2VhM4i64nh2PfTMHssV1SVuMo8FZNDqn8xjy",
  "key6": "65g5i3yWmEsZRqqPtp1ponYHbqs96G1jMrZnALBtCTUckhzFqRFeqBUkhWcNsNVzQZ9Yq7a5QdJ74tLkLkiphE18",
  "key7": "3Qa6etkj8fssZJsu5v5vUuFA6C4jXUFF61ABLCx35PhBMeUSP8Xmpj1ydKeb88Eores4HbhifzJiAYcRFpjWs6DG",
  "key8": "3yv9fjmXugZno6c3Nw14NvUrSDJezFPHc3zu4iCazuBqLFsLqfwsdfxvLvHxMsXT83Ar4Kf1R5VQWL9VJN9n1VZw",
  "key9": "3jW8D1BNVbHKCcBhDir9dQsTW9Tg1nQQQ2v3Wun1QqBLQdVH3amQuhWTYvexitXQ3ebxRPVPGexBZvi5MQeNdvCJ",
  "key10": "3oW3NvFi26ESgqMvZg6zZjpcxsomTcBiZ6kNcsD8nWoW895HQcMXGJkj6c1ZcAqUkymAENSsS3JY3fQUncwujrZw",
  "key11": "4uTwijgDwXDiSD3ZxVNJYuhfXTKUW2qpm5w2bEEKbChD5gx1L6gcSquyEtCFb4oUTBoGfoLPF56skL4wNBNnwADZ",
  "key12": "c3ADY6nhFDDHrRmgBQZ57Qtj8NR4rCNPLEoGEeqeghNwkC3HRg2Pj3vG4rKk21EWLiK2qBv5Z4sD4rNaEBK68ab",
  "key13": "1ThBbh4dzusjEBnGR7TekX3wtEfQBKDgU2GTkDKmrXAjkwxrVaA63BL21m5E2DjDv65KaDCqD6MWtoy52zFVg5U",
  "key14": "1sjWGsKBJbKX4U5ZJiUkahHrhgkvcuQSyiggKmhwGXBGxVyeatjKLpzaSScSkwZbph85rthtE9YC3o6Y6xJikih",
  "key15": "3WeaufvaGfEJrA29qwujgSWx6tBboeucveMsWEHSnELuRFYtataVChRxWXsxLqhcjeKu7WCaBTcQkpRMFrxdyKXd",
  "key16": "iB6thLzghomjaJUdBmkpWz3ApWyoMqJrRo1obXhg33T83DQ8Xm95rNnZdWWxx6DdBepXuJjnDw2Bwa2nSxFqB4G",
  "key17": "UCHC8GprcNgpCXomrzb2jBRLfeCcJXFA8ZD6EnpTjpRshfW6JZqWHvRqGvVbN86C4UkeifqTAjybNAtDoFNQ8n6",
  "key18": "2wZbfYTSJKT4CwKsWaCsPTm36akwLxRQa3oPREMDh9C8bFnedygmiWMkx3QKkUUZFs5WCRZDv65q5Ho5R6FTVsYA",
  "key19": "2wKYvQuamTDwLkGiC2iNhLfKKBNtzuwCpDwTYv1tACczNu1foEwErfk2gb97oHj1Vnk2kgCk8hb7CoFem1U9m8ko",
  "key20": "3yug1KXV8iNiNXS5xqoxxrRM8wNYmGbbEbVhFkuucGNuz2mSjxoRm5gqDc3TnX1GvgUGiKMSnXkFnw96Shgd63Ed",
  "key21": "AqowVUgxTAbvkoawA1W6EaECr2nK2wc1rYKzVksVGDKRVDhCGM8oPvNw1ormbiXyA2p9w18jzohhGxA6LbU2zCV",
  "key22": "5SHCc5Cn67zpNXXqSyk5QQ4QipAk5BBSw57N4fNAnF4Nn3nPWeeg3tQjRh2a7aFMp6LHCSPgNkz2erdqXrNB7zDo",
  "key23": "468ChK8jrLVyZHG2D1KF89o92hUebgYgES7M9eLpNGaTXPYVNkgkghWGce2k1jcSJL1XCRgXKDx2MXbrHakLSkns",
  "key24": "5bbcrbDXvF8YsHsnT4JcSeocKg4G9hUaupNRTok3u8QXVtWFgahfKxV98Gwij8UQBFCUm3wAv5v8gLSgMVkzAm7j",
  "key25": "pf3JAorxxUqSkF3nxPWBZsthf7de4QBiRjbNgXAMA1hKHzwxXSivRDQwtjCqv9yLumWAbchfxhokEReJfNDuRSi",
  "key26": "4oiXYKGu9LZYmXasJosDiycYzkRHRfC5cms9NyDS8P1dAumTo44XKU4y1msbnJR8ZnQHNgnpgaeJBcmDzm7UnFvF",
  "key27": "nNwsFi1tnYhbUTQhKce1vSbkqyMQki2PVp5PCXi4Sjb5n6P1mkLd246U5FFECrhX6KZG7ZQZu9hREhxdCfhrjR5",
  "key28": "5jxTQLXBA2JGXo5tAGd8PVYMwtRspR6iCWwzTgqktRfKaNfUod3PhSHEFJTi2KNStd7nR9eNqkwr2Lov75X7ncv9",
  "key29": "3xuPHvweVFEitjgkcQG4s8o7XSkPLmQA7pPmsaPTermQNkNfpD14ViJXTKBsCMXxwaXEcEmasmPowg8Mc41G3TG"
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
