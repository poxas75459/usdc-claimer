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
    "5dXDp8gRvz7TEBPmNJFpN9WrKLNF87N1PmkDHhszYBwPvB21dYNFVeVj9iDwvZU7n8UmKuBAoXdXzVMC8T7yXmMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uW6Le2RTYQY91BxeBEqMRcvuU7TkK4L2dhAEmULnA24bBXqVpW7wpyVQh3t3hrhhdk1RAs6iMAXvgHH2rPNUc3b",
  "key1": "4mGrmGnWgcB1LPQwYCnAYoFJPaK8dCZw22VMdWvQKVJuL8Qsn8SftJ37crv9ypoSXwy1cA1XuW39kpfYYfE9BZoS",
  "key2": "mAWKJNsXSa78XAWPVNLu5Rg4zQ6fkUj4C2TP1fioxmoeZmhseetStiTrMk23t2T1ztddafzTWyaLijXfFPk2QLt",
  "key3": "3fgyN9qL4msHnG8nqfMkbM2oJZzw5Wwbnnb1JVbUBPjQqgQxXQW4JzSvLWKJkCrAhR7DAunKUEBuMfF8pUSqA37x",
  "key4": "4jbmVD9ZUBEQm1MgegD5k7GbirMqrNibL5RG5xEL7LfRdTBvpCXx8VPCHmjskCezaPdttCf449eczFeahJLivt6b",
  "key5": "5oiup3uBGmwU8z4f549ykDdRPDFArwkjZdxAG3TWkgaFrcEgFphL7H4orWD9JNfrHn7cahTPvfUCwBNhRqv3GcCH",
  "key6": "2YcXSyYPYQ2vDRjW8fBZCaBCsPnVN6brDHoscNzKmKcdvoydkRZAeMfkzmtVnyecXb25WHUTqVoZPKBEQBfLcKGc",
  "key7": "5xkcs3CfkBRhvfi5bNDnBEhoy1qXFf4cjmUjBJiZqwUypqJqppz2b3hRfbcfuqQkRnLevuS3rpXrp1ydKjrFmRhr",
  "key8": "2sU35wyT7s6YZ1wbX5JgRYBCfahnQdJuAJ8CVYb96XP2z9f5dzErpP1DcjGcNNLb1am3Rj8GH1wiBC3n8GjymVtg",
  "key9": "3PnxgqamYysyLZcRit4SgnmYVLrdFQn6nPX5j6n8iqFXPZwdt9Uj6Xny2s77Ccq5JJJuxFMM9WZsVyJcfu8P9DHC",
  "key10": "ZoSUfxBUhhbiyPGGhppYkhQ8REvLnnHRqQtqYSvZjZJeyrS6qcU2NpW9yBXvsRZJDx9PMvUpaMPHFSy3upKFaYu",
  "key11": "2xJnfoykKNqXwCciNMwrS1SxATsbB4CNtCvEK1gNG1kuoEb52it47owwxUFKxmSMC6aho7rJnHKeJ5CpKFZ8MfXw",
  "key12": "3QQViW4ixhFbvT4A8Fa4jawPP9rpUqHTQoudKmZSWYRBGsGqFTYpj1JyzZfBnURgUuUmhhkRe28CeiCisfTerJAL",
  "key13": "3sJyHETNRSLYS117oYZQssokg2PxjPnngwSFFKCKaLTS9vXYUxZqFLPeGQXQHj8HszKT6JYfyBnwZxtDz93LyN98",
  "key14": "5rjVPhpukxJZ8DjHArZfGgS9pGwDWUAHtQ2PotZvtpCEhsmgXVrNzu8NedVAwSBymdyqLHnjb5LLoWgcWfjHpzoZ",
  "key15": "2PupwK9aPFiVto8cGnFozN9mz8jEr79jf3aScrE8zLfkDLmNSKstLxN7NWFdcV6yYDoMFaJsBJz7sLBezRJSWB2K",
  "key16": "5wsPpDHnZG1oqo3KxafCg8sHe8n6LyCghWSNWTK4sg5CZiLpXMHcGvx2TPD4WKnpaam5JnNVYjEexGC2k3v36m9D",
  "key17": "4ntYr7r126Kfy4egd6qZLkGKHDR3Fz93QvpNhGHvwZMSzHWxzmvPLvfLv1GRX1RAxC2uFDnafYxK2iFfqZyRmBFr",
  "key18": "3Fy644PkiY8zdBLS6sm7nDcgC5CHe66kyHRQZo3W8Mo7MJT6oWaqdE92ahgeQukcfNv5KBWzX7mDpQQ1hkDdvxkP",
  "key19": "49YfENH6xYrjGF2psVYX6BQgw283Bg4oyZxBmHv7Dk8U14mMkj3omXGr2VjGSovfXhCdLZR5Sr1H3cACBvV1MxFB",
  "key20": "2RKUuaR6RMDQx8v8wePczD53W4PnppZG3cKRh6ZvrVbo4BprhngaMKzut8jSB9K2KPman8Z92KReeqKpjgUAqiFX",
  "key21": "6jsN7Xxvu4H2412P614y6xCABERqcE75z1K9og88vjMhbyoKyjNjbmAp8pZPYTbd4iR34u2rbRUMwxCVaE7vYQ7",
  "key22": "3yZK94PhQMRg7qTZy1RBX9Gc4WcnXoipeavXvZf8D7xo1KqKHJVURouWe2okUhao1Maqpv18nLs7Yk9FoNtzVbYz",
  "key23": "3iCQEBxGfoRaMHsFAwaVHH8NDk5ourjDnRQvQ59n6CBCjAHcss6fayLmVxq3szt7b11GLEmWUpyBE3WVLG1oRGVA",
  "key24": "4ihTjEW3tVufkJnj8jqmZKKHZdJGKhFXTYkkqd5wiQz5z31hVRPZj7swxr7KBsQALgdqnbTc5TYiaYC23YbtbqHE",
  "key25": "5Zo5B6vyvpSqQWGScdPbVcUsMUphMHHpRdGCaxHP3Ji2iuU1DVfbyM9mRUFJUA5Ni7MpDnHJyYiHfVdb5XBhsCji",
  "key26": "4n1SdLLLxrPyBrvGapCpSZTNsipm9i1Nhkun6tixfasPN6Bqt3sCQv3H6dhaEYroT2M4DE8DX7o7sqiLQkgZ7pF8",
  "key27": "5RPHqDutP4cET6sjqMsLmZpcHyhD5eMWeTwB3agwSyU1FqVoMsJL1P7B96B5WjajKNKQntELVA8Hwg1ZhcVa4xZM",
  "key28": "4tKkr9k3W84ZRNTFgF91bnzEu7tHgxETzhjPArhtttbSy1UXur5sySVE6KQBPomt2C7Q5oXcpDnG8nL5TyhSzA9a",
  "key29": "3fPVS2xF3NRGvAVNCuW8ABDimoGfdtd1tZYGB7nw7SP7J7M3Mn4Sj6hcAT7ywHHDv54baeLnnA5AeHhFWdj458yT",
  "key30": "e4rZZtqWipXrSmspM9DxqJpJUGSUcfCZ6NCFcLVNGfp6HyAoKHNezXHjGuv9Mj72Xe6EY4XXhy57fgfz2kcAJ5K",
  "key31": "2sUuxg3EkR44zqT8P49k7VsGhGDRRfswrRaDG5b26gdac8qvdprTXsLkR1Cz2jjdiodqBYU1GuDv6d7XXEpZ3otb",
  "key32": "4dz4GeRZfpxx3KCx9y1MV7ZJySocvGzt4yUedpTSA5t6cKHT8KcR6ZoiwKTREc3uXpixFmCqxeUj4371hhe4yWbg",
  "key33": "PimQQLorm1wDu2DQmR3KDqpvwJb4C8niwod5ZSs9WVV8ofAmkF8keLtcuoRyvjRTNpJwW2ubqPXQZzSBrwjNBwe",
  "key34": "3P6jeYtUpGAwwbiUeYJy4jMB1jMtGu2vjmyrahZPMHoXXNd9RhwUgmuZ7aM5DhVWycSthzhPvEm5DPVc7oGdH5Be",
  "key35": "zF2ekdByDYqatZAN5ZTjiSatQwLVPksbjACeFdb4RRYD1HbVq2vADebGnsErkschs4n5jgGcWkvZXHzdLceyeUb",
  "key36": "2GHcHPYKJU6SqrQ2GaMNKgm2yFeKQdvPuU5LbdaqsYZoAxRcuHb27rTXs14yp6agusisRgLNMnhgVR8PwfTgKxLz",
  "key37": "656iMLcxCGeCr5Jrvw8CeAaN5si9fyKqa4haui1KjpHKB4dfWVWLjXSF3U2YcdmbArJ6obdhQandcUK6Fu4Zw1Ja",
  "key38": "2EZBH8eBq4doTLE8BDaGhoMvrHtBrD1YkyZvuQgojuKR9VHbNyNEGYPKJxGXG7kN3N8xjY9EbqmN6rt5PzaCkGhr"
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
