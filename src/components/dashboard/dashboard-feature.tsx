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
    "32hYcWBdqrGexay66Zs4XD4akQ3Atzg9SEk3Ws1EXGRQVw8yBK7GCuE7srRfkDxrTivnM32pnt5gLTYXpAfg6UiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EPAnw31ZQ8m54s1aVeKywc33zuvBMKvzRTS5HjBDvm8NogovKdfvSEqR7ESzvPyetWhFn7wq2YV4sojTunhPCWD",
  "key1": "5dN9Efd6AEZ7Lz5DHTxo33CMAcDF7DFDfRTVntQ2XvGmZDXXZSKh5Mgm2UYCy638B12XodugUSUNwFSvUGSuSoQj",
  "key2": "5Rw8GrYQ8kZWpeBtw4iumnGoARMtPx6YgEYuwRMcH1ofdPYzeZ7f9uqjfddxokMghAeqarxtQ17haZBbkptzKbyU",
  "key3": "2JtmNQV94mNm1kkNY3jrKxkDokwbirMx7yRwdcUoFz4gXAkLV6rBZszZckZ3xFQeWMuzWu1VKoGyWDrJx6C4gbrL",
  "key4": "KHY5eHTKbuU1eXaeZaPBF39pwApxKdW7ssNspenzLd4W37thpwJKAwbJHqGkjCdZ9Leny2zeohf8mtRsn58biiw",
  "key5": "2yPJQcAZAZQeEF6CkpAnv68cRWmwYAVb9Ywipbn1buLFZPE6PPCpstGs2s3AE1mUn4u4MeQ7dBkQ5t3Xmdv5VdCs",
  "key6": "5Xb18yNHNed2pn8k1mv77RNtxcYLWEYxUk16iG6o4AbjRGGxTb5VrmStuqakmQ4qLQnsAcx2WGU79Zq9z4F5dRK4",
  "key7": "QrGSdLKbfusam5aUdBVaSDntpR75iawYk6yk8ZirGLuPQ3UvnVdD3HgcX696MFuiugdLinPEzihUr5DaQf3x5ey",
  "key8": "3AxqXTtnsPVEW27EkgtNs7J6F2t7rLPmmJd2255wpmqbFP7cuz41yTyk9rLXHDoxpiwe53gXgZEGDjA9p68z3cgY",
  "key9": "4hphytEKpPVapCBLYtZsD99WDwpnQxudbRXQUR1BbdWVNGG6ZG4mBk3ribjxeSKXnv3FA7CKp2an8j8aUcyTMMQ6",
  "key10": "a39BGLSqk57xpDFR9EHB3osTF2JKWwdxw3iwUtYey88RWBPFsdiedDCh3TDDpqwSKn1t8HQ2jc7BvwzqCByi2pb",
  "key11": "5M9AtqTUS2Y9htdkCgheNHhgHaB2GAt2gNX6uN3LkcNXLHcupr6jT4rttz5LGjVzLFgceyxsvWboubY8Z1fxR4zC",
  "key12": "RieA6fchMgWPZ1MNyhig3zeqRh1xompNjt6EdSjoySJi1eXTHrrZj7QhEZfy4NkTbhQ3oceGcS6i1EN25EnoZCU",
  "key13": "4CjJ9TCUGfJyDrVECS3RLvGnvmuVM5BkGRdxrXJfosuBkF4cJiG2m3KQVU6zAzMRM3eUYw8b1C1EkSro3zwPv67G",
  "key14": "vMYAes2TMass2x7qDHq3Jo7wgXadc2MS9HygAgGjciYKNCPPzduYMqvEoo9uD1WcGR1uf8KcQydzy8d8QysNQox",
  "key15": "5irqrL6326wHF8RF29WJg6NxQcntnodqhGCP5eTnqRBNJDCgG1JhTBaDEpXLzMGXkWhQ1SsA4iEfuuH9nXLxa9fz",
  "key16": "5kwBHHbNSSsNhT9Xo9oMQG5CegGCftFi3AMRnUTxUsYNweps5F85xZfdFrtqhGEv6EnnwZXQ4VChtaGNkKsFVvSA",
  "key17": "JdHGkEHnBvSZrVTqoX9fyUqpUDRsUK2KQwz6MUGHfLCZh7YahuUVdnoLdm1x2n4CMS274P7hEqq9fzXivJDdzGg",
  "key18": "3YhRaGpStyerNMnFL2fZWdBYfUac3JLhgVxNMSmseDrH5V7EpLTAjBWy84E69uz3Z4q9vg4KXr2u7wxVtBCoEiUk",
  "key19": "42EqGu4Btt5g9FUYSPvbskUQ32XT28emS7DBsN1v2UaZWpA8DpFtoG6HVddKCQrKMjwh3QGQx4HsNMNFjK1fRnni",
  "key20": "4iZPTAD9mjRMRPko6JzBJbG7FZ5Ar3vQs3XKGzTHXQLQcWcKVcVo3nPn4yPLn2RJKq7vS82xUowWodBAiiPJY9A1",
  "key21": "3mjtPMEbnUmpLW83PYjLoL8VVXjAfFJm66jNvkzNr26QqYpcByyabe4KMMVJrnZQuK2zCo8NPsFw59qiixzGncMi",
  "key22": "38ErLpVtwthMqfd7re7wLFipkLAiy3i7FNA7VTt543ggBPxiTprFrpPct1h9vwkwoXq6oc3ypmLc4FzBG4KhH6JQ",
  "key23": "5dE3U5mAiFbZ8C77kNPDwhxfMTwSbKufAJzb7rokZDRszyHDcZTznF4zy2VZ2HHTCTZozr9h5EctxDAsCRDsLU5a",
  "key24": "43mKCodrbwT5PzBiRmpXcWwjEGTCukHKX79wqQk8w7ys3Va3YRFgssp8pjvGAn922ei29t2NZSwNMkKJdGqAuhet",
  "key25": "5eCpz8e4tArs5pLmvCKM77dCwFGzHF7Zxk16zYRth8bFnqZfjmscezbaTfCw4xYax1fRC47MQzSdcAcbeRpdT1cN",
  "key26": "5TijD4P3VmGMKy8UQT3rrdpzK6wQ8NHDWyQ91BhsqVekiD5Kb8DXdmZ3BQjc1rssFCNb5uKRnQcBXoSZr7DTtHsx",
  "key27": "4ZF9UYZeRQQHMBLeu83uiBaoMQHTxaCA8pWwVR9amLWgmLciSZWL8WkpDV446MpDeUaqMwhqXSgC9RuZQUk2F65D",
  "key28": "5AAekzANt5YMpYVbyMRyXRxnQ4rCYnnKvxbe6Jd8roSZa6CFuSM8wyvtEzVaEaCBr98Z9m83WYaPGrH3JJZF3p2p",
  "key29": "ULmwHSGZi61Ytp9YP7TufmgAHmRDCSjmaoEZQdGLbmQcypkbcTHeiUTtJKaVkicgrb3dbpUjL83W8v1gyUCdW4b",
  "key30": "2n4r36kjoEq388bcwprB5AzJJLBX1RYWx9QT65gNBD8o2gTG7fVE5fFyFLGFvWhgU7PC1ZMgs3yZfGTtaysKPszk",
  "key31": "5itbwuYuFUUZyyWj4eyy1QiDsioG7Twq437bte4Ws7JU6KBS3LfB7rtn99y6mX7NtGpnFQxLzkMcny6odADtmjgU",
  "key32": "2duqwsCGuZNmqwfm9ugb7zKzmdxziLa2r7rFey5tF4AGRmwqE71E63xrtPCR58rXBzipVRvN4ta4CpvfPyQ773Ao",
  "key33": "AJcnfmG6Ng6MQFGRxFJjNqfNyMViqqpxXuAE9CFC4kpKFi66fUU1nE2JSf3fqSchqwn8mf5GNEGFx9Yrf2s6cGk",
  "key34": "S3oiPxkxhy8RjkqSz7RWxSkRog37TiETkuhSDzrpFfi3fDjEamThH8QQmM1Y6UzskueMHo2Qi3FESNV1LbeWA3L",
  "key35": "4akFxsJWi1YUHXiWpDAmRRQsM9b9miE6a33owkTTdkzW4LiHWWntC6ZU7yGDi76j8VdTuA6Jr1jWoJ6uGhJpYTWp"
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
