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
    "3UP1KY4F87Bzmd4r7inzYKrzEmvXR1UtrXdB5Evs89jr57FuT7bKNsChUoeAdsayXyEz3F8zxN5YxZqKAVEF7Cvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X51iP5N9uWZtoxQMDmP7BYpdTsADFU8j1ApNWABnFgcF2vMj1TdYaobG2vK8eDKeof4d1TSGopWcX4Zcp7qTaTy",
  "key1": "2TnEv9YgG7QVkg1S6phUffQBFDo6GaaJ34E82qWnRM3UqBxiNEk6QsNWFUbwZgDp3Sf9hHJjsEAReWkpwN4DTLni",
  "key2": "4zU31rt6tKHAVcBMaxZX2eW9NQmrcGLpdAsEQ35HzvbuFRe8ZadP81zGn8nsyCg4aGSX1LiJ9iDvSb38hnQBzSCX",
  "key3": "4ygZW5b2ork29bxmZHMayqjtybHY9V1XjuU3oVBjt4v66UhswydWyFxYRHAXHxtVjo8SUmtGJyHRLanG5z82cYU8",
  "key4": "2MnFUrm7x23bwqmXXzet3GpnapGwbMpc6egyMk5FonA6By9zZMCzrasz6BdAQ9yFbm8TnpZ6j9EfZ1EkJ53aXw1D",
  "key5": "2xDFgsGqn2wx2tNpSkkjvVodgsf63yAskLUTjBsqdvcJbmETfuPpSpnmnrPRS2yWyLC6vQq5HmJ8QEou1Wgj8f4s",
  "key6": "5uMiVE7E3EUznYJM6ydWymizC7ek7978NBS1taDByki8iGpCWZeW3Kkk9hZRDFy942HmQUU8ZXvWTcUG3NMEVEA1",
  "key7": "Q6sv88MSbVPtCvXKpSUe1rZEHNYgR4s8MKZDrhYxuzKQp438hTePd9ejmQJp4dYPxzLCbQT8NUErcH9G3JWEnmP",
  "key8": "27eiXbysjs1Xi9ox6HtMUjkjCKCf62H5jYwUP1CU5UATZG8wEPz6JpmczmnpZyBpKGgVHK8wyhPgiM2XSkn2kSBs",
  "key9": "4EXqYKvLsELSoxUNXCjCPzKfwB9xeVNHoVCyGQC2WY6t878f8FaArhuakZuKkQHg4DBLHamcxT1FDHpHArtrDT5B",
  "key10": "4puVv7QCEvPR9UJ5Gu6XK3jShtHtCrRL9CwBfYwmjhLeawJPuAaJV1gfshKWztCVbEWCPX3Ns2ysZTQ62JjdmUcp",
  "key11": "fnt4WUDrVw6WJbfphfV1PDcstmSTTiDLpK2MQno9Xt5gw81ibbeK83FUk7uAome54qRHUxFhkgTebnHhRJGTjvB",
  "key12": "4MJLYUxiLQ41npDgqbe7UgSb34qpLrhixYoajrjboXMLcsa9tPecTgaW8gWHjK8i4pgjrjLpsixX2MgEJA74mFwN",
  "key13": "2AgQP2AZmpbBMpuNLQz326jpKijyKxVJYZrV2LxfucSR5ShKxQx3PYxB3HR8eoQULXchtFeZyWPAt8cyzAgYFj9J",
  "key14": "2MM4bW9CTp7psRurPpd69DjuXbrB8dsUSBEuMZ2mB9EG5psZE6jnxk1GuuNkxBwjUbxurTfmTHRmxkkHbKAMcDp4",
  "key15": "4v1sZWrwEFnyMwoDJtopJ8WbCWS8fjuYAaemZ1aYv9wr5Px8Km85yNGobA8n4xB8RaVK3LMFzqZ8kh8SQjfswjpq",
  "key16": "2YaUKdgYXVRcgfetiH1p1QhXz6USzCYns7JFDYKPpAD8iyJefnEzFysVNRD7ixtCXeS2xNP6v8USyvZgDEdBqUxi",
  "key17": "5vFbXYWpxW3Zug8PgvoihQ9dsCiq7uaR7uGUTjdCqJwRE6Vm5JTkdJDS2JSQ1yDqbaStpsEJK7V9KEoBgEbjmEf9",
  "key18": "pvqvuaCNWo4S3WTmoRYJ2a7ngwFk5eeizgUPr5tbwTzvFWvLhRV7Gay53jEs4pF9nfK18rqzw3wtErwd65MEy1f",
  "key19": "3MYCbBMC91uPCU9PKMBEgsQxwX8LnvtYGhbF65d8P4NL3RrkEPgQsf8XAKTe1MAMVaR4hE842u7MZD9sw5yL7Ax4",
  "key20": "9T767PfL61n8ybZZRUj1wfpuqJnHHTJnthrvAyDzMT3srjmVwGYr1oaqxLSYHPAK4knr5jLWiTYkCufrFVwRSSz",
  "key21": "575udqyH6ayq1HotEKMcZsDB2EF57oDPGuzoKEWN8axeSvux82uZzauh89Gb3gwRxYuVvBDgiYzubgdis9Nwy8tS",
  "key22": "yGMNJSCZU47Yt4RXWvAS2whppozSV18SojfkpL3bE1x39mDMWdBgQswbarGYgghSRuUasavTbzLWZAgh2gPXoLr",
  "key23": "35D5nidHdVuJaKa8fPDUSTwjyWociqS77uzCUC4hrdFyWcY9N3Xw4dQjYXhF8daCpBj13FuUpVp9BstHDkxWtxt6",
  "key24": "vbEVZmHoxUSyq2oX2C35R8wXkQcDLdA3utFMFgRGxCWUcKdEKFq2G2XmT3jdFAKvLeGwYaDh86ermqPndXuQKHL",
  "key25": "3dgRWAZPDWv2wfg3DJ2wut5BLqyPXAj788FzmvfsnEgyTSwp7px9UXyodT5UpkbuBQ1AmZ4w5kR7xqiPcC2oa9Qa",
  "key26": "oNaJ4xADCMCCzcYktitaA7PjEqL53fphgD8nzrZka6mnD78KtcNWVuy44zRpZbrV48djdKS6TmuxvexSKUYvgep",
  "key27": "54BXMLaxLqAXDzDas6ocWTMDwMQ58suEZDmf3MAKG3NihULdcWqG1omuwkV5s5bbHfYqprxs7hrZdv1nE4mogu4W",
  "key28": "X5AUMTaGqSN76jPgP1NbpnnmQwfc8RERPfw352tfLWEcTFbaHhPyoDAXTzHPVdCuCEGCNL9KZjdgV5ViSuRkoQv",
  "key29": "24gbgYmyHjK3eE1GXCLb3swD46dDxYnK4KthwoemZrfuhKiPCdMb2DLH1wzeRpXDUf7Hq22hygTPiXTUChRAPXAF",
  "key30": "4eRykbgBtMwKPbRgH5iymu3qwrGRyqbuNbLUjhXyNfshQMvm9rcU3RrGwELheyUrrfH7Nh727iCW3uxX5n6Wbfc1",
  "key31": "4p1PBw9MPgnhexzDcv1HCeV18Ru389xncQwJY8xpDEzFAbMx1GGebVhzGCh7F6gbLc2A3VgCfrBDLry9WxFUbdyw",
  "key32": "1mZb2bowDSSe3gpLgMLfuYzGPfHFKsKbbAz7CHCBsuSQ3YgTmKeFMWintMKq2NMmwUyuKcRWuL3wg66PUzJpTnj",
  "key33": "216e4GgeDVxu8HvswWi9WuNUocrxNr6DrFdeAYbC1zEdsuNSJ2q2GSnN6sbcyNcMssG66UsKoEigVkURMP1VFWSd"
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
