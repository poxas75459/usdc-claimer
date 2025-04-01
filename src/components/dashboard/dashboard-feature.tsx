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
    "99dqJ9QATKEFzjsFADFJc5K3tK3fsRAMhN7C5TQ5jjc4nFBJWaUrSPcugHSs7f72TCoK2oViFjRvnmg6tQzRAkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pUJ7MDZQrYxzSGH1JA7QCihJ9NwqDpCB49ohxjCi6v7jABjJWPydZFp7sYGxq34JowARx25Qt3icQ1y8hmVaLW",
  "key1": "5tC581fjpV5fcojNzS71oLDFk3AtMDGqvWjYVgErA886KyqL3fwE7LCzkQF6DcEkEEcEaKVvVjiTvMQQ4of2cmaj",
  "key2": "zVtHz7Rj2J8HBjQdoPpSnaRpLY9fMUiY2dcreCKJm2YisVwJBhy1M1H5Wn7fEukf6JZRrNwFmExxeTifCiebGCF",
  "key3": "4mU4F5sHdztMNFzSnbTUEyeQzjXm1tb584QAzHrQ7fPmhAq6pR4KwEQjeit2k3WwHU83coH1oGx32DUHPE6PB3xb",
  "key4": "5kQCExLn89mF9hxeiYzgAKHfG1qdk8JtHJz2RkHdUVSuBwwB62uJmwjbA8ShEXtBFimv81qFDJQ8hbTUpPC4xqG",
  "key5": "5zdH29Lp27zEsbGc519f5a3MmJTgpPxXVY3vQwFDHLfQFv94o8s227S11vgiAYjvb6ha13ckGQE1hrM4etpZehEw",
  "key6": "3WozGRsoF1TaeSzchkAbwu96hkAQkveJMJMVz95CSwamtt9cLh7vzf2XRDEkBFzhQkv3CL19J2mmWPuNYXgncwaA",
  "key7": "3wv78LwaxmuxiqKN57LXEw2GVW5VKSTPcNTxNii9N2hhCtTgKFe7VYgzfaqk4G5VLveZQQ7ZT2AFcMXuEUF7MrSh",
  "key8": "4YFZtMoWVinp4cZzrLTzpqB3EEsj24nUi6QT3AAWhbyZAxbEStpVxWFHBBYMNbkqXadE8yeFsTULgFDo14rxx6Q",
  "key9": "5bj35UZn4idDRFXce9yTs7AD7ZHdKCggSZNVNxGMAf63hfUHeQB38R51S5978L2BHS93BHtVE87XDXGJ7Xv53hHG",
  "key10": "5CgZpQauxGhZHgX2r5Tw3aXmS7fzhFifP7RhbAr7pm99GkxRQbH5LXhc8DjyFv6siEvWgqybCwLmsFehP8S2nfWj",
  "key11": "ykyaB1cQdTBCesF4SzmvR6bG4ijqESZgk55rcbz6RthPkmZdR2g95kMmUc1JDzDqAdk86XvkzyXPbWdWbMuynMH",
  "key12": "5Cw6DXjsv8AkUp1h1g2dHD166cueRB4Kfto15Rp3AVJECrAqgKXMDHGkUprdKhDdTogq5m1tz2Sq7PmFKka7WxWe",
  "key13": "5nGXgFVUe8sv9pAK8hD8CtpqfvnamfnxwcscNenhTyPR8a7jTMovn8unSoqjcYYTxG8rEV2KdaojkY8bMQR8WRtP",
  "key14": "Sxh2DYN2vfE7x86R7Fqe196cM9wBTPCVFJNxw1His5SRybHj6SLWdE5erSwRJSM3J2sEXnbSHBsqScuuEvjz13T",
  "key15": "2LskPjeh8BwfDCRHNMiFk2DNcmBaX6zYDVVMzxConxgSatqEMNnqKf9pMS6JkeqMLhRJ21BwVB2YxEbpiGKiyHDQ",
  "key16": "3j5iPTyYy8MigdDpu7mRQkZi3uFQ13XDcGW9N9T6vRk4EDhdi7ZyyvyEWXb88rfo2ZrcD1cCK5DyJcKbAWmdKD4z",
  "key17": "3uM8hKxgN9EdGMZhFGv9mzr58XkjHvbKV4pWS3hFVHv15geqbFjKcF6ZqZ4tUye7cDRMr1dCByDx2fe5CJWybqdW",
  "key18": "5D1CWzDFZ6voLXo4RxVD2Bh47S6F2NJoXM1GuFzEEhW4u1aYW2gXQfGVbiNRXWTVdzzvk7NMXnHJGTG7fKCTeNeK",
  "key19": "2x4FtMeHpMuTQ5frmsenwcnbCHaT3ABFfutWBAiKHEeNnRGkyS6pw4otPWNkXZCCzEDxkzerebhjqzsT7wmJk3aZ",
  "key20": "2ARCmggU34y2jz1pt96aXW8PfGkPQx6o1t38zR3GRKELYktnL1hU36pjmEkTRBbQZ5PdEpig2DcueQ512omjiHy1",
  "key21": "AsEF9YiV6Jfy2YWhUAArVvBAtvyHvgpMgpzgMMt7reQ4GjMxDWfFoHrwUdX1sdvDTXELSTpCwB59ZxcrmgGvCat",
  "key22": "3Z1Xm6Ayn9E724AkomZWPGHMyqi1tbp9bwZdguUCvJ5Hi6PdWSpErR6SUheFpuBpC2kjonC1PYVgFCqLYrS6gsnm",
  "key23": "5vtHrBn2JeVji8pUYLsHCncvc5BM6irzR2aMY4LFHE8ka7byHAXYwbnvyqpCgHjJpSpfnKkQJFYysnDNML1cJ63Q",
  "key24": "3AXARgUJ4qGzW9AY7emHsmxxCTimSFoGevdeS3dyNWtoqENuoidkKGLSVQQSnfC8dASWFisGontXEsy7qUEaZ9P",
  "key25": "4zE4rHh4R3BkvtbFpraVRjUUJedPKKj7EbPaTyxZm3G3fTTJHMi87Y3bmPCJBWZwY8bSRFCmnt5qweBhZnaCqwPd",
  "key26": "5KEoUgzDnkJyGtv54CFCPrRRLdc6YiCiini5M6jHaBfZQJ5mT9ihwRvWsE1T1pDwnqqpAzVVRePS3B74aneD98ws",
  "key27": "4ej6aEYXirauSAs74MW9jQigQih794pZKeetS2DfrixNtemSYfYMKSDQYCFiLEUVUYdpXnjAVqE42rnCtbZdsT5c",
  "key28": "4bcrUeWKgCHGMtmD77smxwNxUCbXJEy1cweShvxvK9v8hPvRtTMaJuW465wyy6znnF8Tv95CxYKPaV1HNUypBUzw",
  "key29": "Q7pn248Aw7hHFc2fWPSTfS57FvieMmx6AjZ2WuV4fCk2iQbWWFXqYHFekKVZHUJBuVxpuZD5XZU9LCrsFNEs7uT",
  "key30": "5AsqvC2ahZdY2XhN25WDt4KXyivExuMeq6zg2HwP9rNLzycLxRDeTSNz84UFPGsE9y93NQN2JCrFqDLbTTiH8726",
  "key31": "4tZa54jrBn6D4wDmiAEj3CxrSMY9MoeHEGHbtLadsnhvBGjj3eAP68FzfXuPd8n2NeoBSXoDhh8Nc66J9ZavwyZM",
  "key32": "63ABnNX4gvSW9qDeA6n8U1qLxeNCCr9xchhWgTbqVBGro444gXYXzSb4Jwcuh4meowhh9szQaV9fuAVs2jo9YfjL",
  "key33": "3rb7iUT3FU4ZjUvB6J81XvN82sdsJmVA9bobwX8a8HTU9XbtbipbcFZnGTDuVpqNUQumqcWWozSHNGSjf3S6HLrf",
  "key34": "64gvSxE3PMFx9uwXUqiPSH3e3VRaySoYPKTGy3hRQCDZguKwejgSLeGGbRHyCykifM8UynMwYswRo2TYLXPbsAAF",
  "key35": "3BwAJJQ7QVdSLPgCjG5sdF3oqAthbqWXNFd3EhorZMeZEnQoX7s13xRjUbiGfBgcfM2rPbVgpvVwksEbPEYbRfVu"
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
