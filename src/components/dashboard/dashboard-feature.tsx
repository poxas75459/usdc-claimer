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
    "3swjBKyjBhAKhMtZEyvyL4k6dJB9WSPpGhFQkizHW3ps7J98oB3tX7i8Tv85CmVH4dbyZksFHDXo9VVzxZg52gtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwwYQkGLMxcnEH8PfoVjk2wH75gMvFHZKV4cFLNo3Bex9JmVePhtAZxhUnxDn9sDkUyaZYqx7dCMwCHELUr2pjB",
  "key1": "2G6dXrksZz3mxwQ4XoKigJZne7uTwaqNRvwgBbgq6i6kS2yrpxgdeqDvPQNts7o336zgp4srvCALA8k261XhbgRa",
  "key2": "3zHLQH59Tfi8kvSNmadESF7ThEhweFnSHsPyFvSG7S6HDHBM1CJ4XoqX4NRSdGdMYdcBGFDmo6AT6LGQUN33UmuB",
  "key3": "2gYCDCAaZkTxbc3F3iaXyD3XBZMudZnj6JmTDek4zJ3Ta3jH9gx2PAez874BA1WFXoQNbt2jHBZ25XUZh7KfS3oM",
  "key4": "5tjg6i7TRDMf4c2eXnQRR1g2oTJ5TiabPyd2oorrxseVsCvBPXtGCYPVC91zJvKazH2NhU2NCNv9NA5BL4fjNGjx",
  "key5": "2kSyaB3QrZ5vQqgP2vV2YXnYNcZsC9BEVJLSYWSCE22tnFAVK3KFB7RjmV8we5svhniLoNoK3v8jLbqHapxHXC4d",
  "key6": "EZeMV5rVroEKFSRF5PQcDEUkY6dXj67qMNc5iNc82WjE4meHfiXCrNPSnbgUKXWqoTmCBbBpi5DKz1QQC6bEsaf",
  "key7": "31EcBD9cW4usg5Ln3GKooYGWSixS1JB3JDDSv52F75T72GpYNynnKbSH4Yyw1Qo6wiBZmQS6dbyM219v6nM1DM7u",
  "key8": "n6MuKiU1Q9CEPkvnenvnquXDEXCmwiCxXDnKKdkmj8NqwRTHnJFv9G2xkAiCriCsYbqTt7fN5B6HA9errewVVSm",
  "key9": "5ovihRC61jscXmVT6cMQmn5Ejrdy63VfGbgiKLV9nzqkkKZrcrK2TVwLxYUkkKG6HrXDc2KScgwL3AZMdhkGPBqC",
  "key10": "3N1Ts9R5DCo548dHs2FHLA9jSjBMC1qxnygbLgxWH14iddQ9SguaBVhhaM2XEzkFyubYJRwedpVqVW7bsAJUUrwz",
  "key11": "4PzPCMLGZ2FsAUwtRBK3VgtGFHv7gLZU2S2SBqDVFVRFSQZhgeVfQSZAMwY2T1E2ji1fzSVrt4YjhKovaM6E14cT",
  "key12": "5xrFMhXPYksHiuHXF4MSTfq9ae3NN5dxxLwit5yrmJRHHr4HJDEuEYPnXqo8oEyGSuH5V1cYhGFJSesw3sbtHEcs",
  "key13": "AAzwyTZcXFCtoprYqBuS136eiyJoKjg7qf64moBgquXgKuhLWjE9N5VYgGiQpnsaJas6tBFctXLcibk8d4tAyhy",
  "key14": "2oLL8eizYzDBwkManbb2EC8EJWUmSdDbG9hmDZFySgT3A7aMH4WyMyDeyNim3GV3RGBBYV8SRLfTo4EKK6KPyZ1f",
  "key15": "zdKKguHBMofpao9GNyqdDvThyJQeDsVdiBqgx426SSF21NSdqAnkngcF3qJit67GF6NmNR2WEHoLSQmdoNPTUYp",
  "key16": "2DedND7885y8GtPGysQNTD3SxnaTqAehyprczSoUUFbr4SjS4LCPZkCSHocifnWCDPEWJQd7UP4DXKDufESTsbT6",
  "key17": "q2rargWP8BcdsXYEnShp32PEdj7NUYRFD3G9tidhCkk357RB84sf97BWLHUiVmHftMe8Uc8kdCZmwKUqGAX9V7R",
  "key18": "2GiyUZh8owNQTqQJURAvQzqMiW9sfVSwy2V89MUbkkwdmRDX6mt7uegeLcFNmMdDWqEtDjTGiHJa1rU6BSsvVjxi",
  "key19": "46pCZWXbtDsMcZzhFqtoF5YoCihoCjPmx1GXpAu6SAs5QGin4LTrGJmTTKWkTDUnU1DEEtKfQSFTxMB2At9dsvFk",
  "key20": "7cvAXarXTqyuNXqxxgpbe9g8dAf3QrpvNBkEKY6wstA9CWN78c2m56HZJgGUmy23NeEvNE71cE3aHbDR2GLoppN",
  "key21": "2uZUqpwjfrLuRkecndFWzvyzUX4Jz4hbL5ZpMf9Cut2CtNEvygDGVWdMgtogZ2f87qcsTzBFg6mT94heQdgwpbXy",
  "key22": "5wVbj82yx8oGuQEQmYzRiVELRjTh8S38AUbbTQf2sVQbe6aCNjxrRZUBKaMK53TAXouVksvTCtKikGQuakzmGmgv",
  "key23": "4WGdSZnqPo3YMTSTHFZWMuN8iQHeqYNES7mXijQBPHpnqvvFkfPwFpkBHaVLtY8ZPANHUpFHdKVpKdoy8SqskPPw",
  "key24": "hWdfvPZhYLUpuCsh19duVK4ajf4MroeshaDhXmB4QAX6Srh4MWNBsTUE8jg7NtXMJuzXBvYuhHNFVwMvhkgBVwJ",
  "key25": "51TjfvaiW72QwUfTN42ghThUazi73hjvLaTkjijMWYwLcDxe2L4qXZzVUqrLzir5xgqZKk1N7o6yQGiw4YZWnwZS",
  "key26": "2HZ7gkrchMZGRAVVMmZAVgWVe6ddFPfvAQ29ZqdEkRJpxspkcBZg19EmZ8tefdyWGwpG3eCECbEpAQSuWKMN8MA4",
  "key27": "5kWGHh6HGZbGpNawZNmrRgcN3RD5A1TLSekRHYwo3Yu735iwMHDG3Tx7qrhi4ZRxYD9rY2crGVeR38ga1uJZTdAd",
  "key28": "3uG7H24zH3hFyQgJjSS2Z2Qz18tuuZU3mnyDgJ3Qvcym2YbDaurjQmJBqW1fweD7ZeX812FxjR8YP5ogafKj5ZGG",
  "key29": "5WTUddrXLUJdPAu6gfPRGQPa9aYoX7MTy6A2XMUUY4jESZmXdtMLRfPBZJYXvdb6MNnXLEuQtj5Kqk1oMUr41vh3",
  "key30": "31jCbdmbpVoS9Sk694bHUsNQoYiZviXz1qYmSXcUomn9QKjDtmZ1QXQCGP2zRRNkHLLhfuV5J1XndTvrQgKrUJMX",
  "key31": "3YuB3AnbqFQW7uWSsBYVbYxfnDotCVH5k1N9xtLnFzBYDKABUMSqgD4kybAng4PGmC8XnzEZvcgv8yN8sQLisBS7",
  "key32": "UcKyGsqyZvGSs3KmsxkcYaM8KqGC9ZxqBy5Qt6Y2BmWCz7RkQZkUvW5p57wUdXGZCtrkv7m6Fb1Pki6RE92SJoD",
  "key33": "2HVG4Jzv4f6s5ShVgrve5kNXjUfTQ5iovtxHTMxTSRgjQKN4hErbV2rLF6CM6vd1or9Gr6GUKnKYTdYYhFh6gcWk",
  "key34": "5jX7wYU6G2RSA7pZ31HBT9JX9dpWCZAAaVT5Y9Adz1FpYbtLNQgLNHSmsMVD6EfYMtkLPn1EPSrCBNT1TdfGb53f",
  "key35": "2wSdDafr29syxNVtVKTCzVhrLwdYgbqL2yCegvAmawk4PAgHVizHbrisuixDgfpAP86SQAa4RaxPYDii2CjYS8q",
  "key36": "4Ve77nfqHPt2R3VPs4acRY4GQJpeFf3UNJjqdBr7mUCDNULzyhvM2uJZvJ2nsnjHakZuiCNXNw7RJuXoCGCYvaVN"
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
