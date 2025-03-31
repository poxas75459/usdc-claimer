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
    "dyLFgcQLQVP5A7qVZmfbxRL6KL1BkqVzx98KXQfp5bwjMwe2RzrSaNjhEQbjBVQNjijHgnrLoCaYoy4uuC2oUjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qt62e8XveyGiaZa8Ankrou8dNumzzWLxzjadarNExfmAVdiknEjw3gddNnRusDyphtFt1jiiFJ315cjeYtELt1b",
  "key1": "5AFVFJHVfRCmdnk6PK9qwxdt71YvWeL4ifH1yRX4VxuP9QXfWvJtKrAPmFatzeWZLc7DxuRyN1wHXHBZhewhHXsM",
  "key2": "3FJVWownQRuUbYJCRZFyHY4aysXTqmPHM9CyBSKFvJcTcabJEfGNzuTPBKd7FPD6sKPW6bb63hU95HFjMhM4nWBT",
  "key3": "5Pxxu14iwe5syQbcZdycejsQLohLUYSwYKUw4Yy2gzsuEk7GUFWW3S3NoAPrTxpkNBSCtvcBBndpYcjMivPjFrjz",
  "key4": "5XJixSMCzCer4ohZEBuyVNeiit8pcqsFoA2va938JSAW5otT5szybNk7MpJfwhMJS4sWVqCi9Kd9Lh8YwAg65Utb",
  "key5": "pFdoxj2QXsaYBjsPBeV71sW5n1WCjzEvEPPXxhnHe5XorzXGdKRH4B6fEFwgaSL5CVaypvJpXV3fCxH4pgfELpM",
  "key6": "2MonGi9H9HsDPikpJLZZ94HULN8NhNk6CicavVYt6q2uJ3d6d7jeWVAFMG7iqnmqeR9vDh6ffaLHj8ctkLMnp4X9",
  "key7": "511SeffCbb5NrQsrAoWp4UQuLkxUwYSpq3nHC1XzTc2JiF644JX8KBto7DGErWLNhqGFPsSiyjaymv6zqUUT6NLs",
  "key8": "593D5KvmTBKs7bh4mWiu9FRzz1edeFMzCnxnaPDs7DkKxbJSVYvtJVfp3Y6LvS6PZtTwzGtELQEifwwp8tS9xXQc",
  "key9": "tTHqZqsnqMXf8HuYGLNTMJVCYxvrJMHag9yBsRF9Be8sSNECXFkvPPRkF3NbzxG7hA7FiRp1omFmA4YvRvxsnpx",
  "key10": "5GygVtnik7iiC7LY9EfwGBYoXn3hfoRe8TuZexeD1HRuts7a2DjLR5hx6Vi1Kbfqh8KDaeeJ8hGLPNwyPHbgCvh4",
  "key11": "2KCv28CDLDP74ALPR446uSJo5sJfTRxZuPcHZkSv9qb3RzbEXg158ab7f1bzmU5ZUNm97cahof3WpAZ7pgxdrcUW",
  "key12": "4NrDjymFZdfaNDjvnUmwdEVxTR1s55rP9GkTyM2S4hk2eusrvMij4MCXRTMQihhSzdTkPXcfTC2gQioR3BidZrJK",
  "key13": "2xzyNpsqWTzFq7LqsSCkLAqY3LfndtLmGq5LHiRnZ7N6EvwpFRDYXoUotQxQY3H59pDBRGKSV2pCLEwm9AiWWkfk",
  "key14": "2BoLNdsw1Uhz82HfUMP6ZxvS3H76eryoNXhvw1d2vRk9sq9fgtDaiLuGoDAdbSKLHJnDJD9pSuY4ByBbPhYZ9nFJ",
  "key15": "3ZHsC6FWSma4D9vmPKDWx22wpphHjkcUjnR31e6dq6KzV4di1DPdz8Fq3zGoaMEGsPLtPEzjdTuZigS9MyqX3K75",
  "key16": "2Dmz9PAJzZzB27UYwsmLU4xqE3qkHo5TQvjyxiV3D95mgvNFVTm6rQr5AnJvPwTbXoEmPt6u1eWFi7Q8rEsYhyHt",
  "key17": "4fwiYmwrtwDJzmeAvQWxKrXJEW9Q97ttHTtzN1rKRXzEQkidWuRkyEibaGcWLfHgNSFDf9SzUo9S3QQH3Ej6GaMy",
  "key18": "46Se1ga3RS3GoPa3gYCrKXp35XAehWKUjCrNh4w3B8j68SU42zkBcV8wT9amBixxLGyRtt34DmsKoZmv9AYaYV5",
  "key19": "61kAXCQ1eCmpXR8wRfZjsdfdL4EVbbbuqFEjkmXKeyLSCwxoCT9VjqHzzNmD2nBVwVdrmwXeVzg9VWA5YCT13ak7",
  "key20": "3MsD3safeQ5FzVx8k6XJuaTf2p1GGey16WQS8NAyCfG7taR9mZEFp8MCP7DbMfSdoevTa7kmR8UjZAPgKsTW7ss6",
  "key21": "5NGswhAbvCR28Bm6h5bKfUUAEpddNJu9n6tnCdiu8Gn9dcHHwrjyZj1WVa2Q8X3n3d8dZ12A2Nx1FzKWikoc26Hf",
  "key22": "5NcQv3n6GyZwjY2Y6gCwuXWCpUBnWCjM9tpdkguS543oPKDskd9srPESLbUxRu2zLFFv4zsM1BRWXtZQwhCfx5n2",
  "key23": "bXhibuLyAuKoURFuWpaXj2sVmEEwpRgDRLZnSf3tJCedKaMdLD4ZD3SkzayzriBHjxmjJXGaGgmHD3Fqr2oisbS",
  "key24": "4AwUdtJbftY8sk6Hh5Ni2CepAo9ZaN7K5My4S642r1VdUTFtzp4MgsKefY9qn11VmLxBmyDm3vKYuH6WWX2mtAUw",
  "key25": "3thrXTcdTbckdDuShyDFRr1NguW7WBCJPiDUg2r3YsvruSQrjaraXu2tbVpPrqQU22iMjE1JobTJkXdutEJXgcPv",
  "key26": "x2JQcwTQGtaZ2bPwoCozoaz9gisuDfbunX6UHV9VQNudH6UqcQobKHb7WW1pjFFKPkckvSLBkRUkoGoyd9KbZra",
  "key27": "4XZVNxXx2BLGM6K5efLCDi2exc17txxs8MVt7ZocP44v3D9YzkZLxyLzKxJmqdAu7EXQMBsLSnyT7hfmU6vdgEXN"
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
