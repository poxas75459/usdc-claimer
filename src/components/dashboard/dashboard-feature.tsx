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
    "5m2EioePv6TVbUnfBExCaHmjXT94cpqNsREiGgP7cXQHwpr1vawnBP4af5fccSrBJkAR7Cwb1roy6LwUqzCUuyD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fJu98iWtBd5Z9kDcM2BVa3UbHSucwhj5f8yjUrkEGn25xHwGkeXxSETKxY9KZTpHGF4bBXSNBc4VR4HBCWrNmz",
  "key1": "25p8rEWTA5366ubyEbw3zFqtfnUiafVzZCXKYKnxZbxKBtyNPZwovJDdxbhJn2fMjEQM658N1JFEC76aw7rTkvnx",
  "key2": "5iSx2Gexa2MeV8jC4miHVDojWZJZSaWb7KxdgQhgfAwwtD732pbbMw1hH6ZjrNRmGiBUQNgwvewtnTiEFtAqoBPp",
  "key3": "4pAuWNvUpP9Ff5N9BQT4ainm9AcBLKySNe4YzHK8DoSqSort8Tj9SswutJiLSSFXGnUiaqssgK7fYdX6KT1Anxko",
  "key4": "3uuWACpZm4wP69wToHj9CLmy564PdwM8BEQUbT1z1Z4xFpNiESTKLvejrNtjKgg5vUpgMwkayTRL3cEajR4gz4Zu",
  "key5": "3PVsdoCH2veSBtWHLr9j5jUJeEYGVgVGGa5D4miHx4NP7rpDuiFnTrbZHKNU5RR6GyTL6sNdUbx6ZN5dR9BAvjPw",
  "key6": "34XbLqtwEVAhtUsk7EU2hucgu3hS3uyR4XhHSG7MzDvgi8w8QeeRXPXrcX3nBLRQpVKZyZmdc7BvzaK6EsgMU9Hy",
  "key7": "uu21SWe4494zXDvT3DsDcTatKX7L1dVmhrgHCteDXQQnx7CS2eSNzkwvRPSYgcrjFnrUb3z1PUpbS3ETB6owkkP",
  "key8": "BRLAWwEnmc3xKtkWGAmyuZAsgAvffzE1jirAVjxaV5De6eazzuphKTqGABFwDZMJFmKwXvbQJbjWUUkATyEK2n2",
  "key9": "5m4f14q5NytoYdvoYZTbsQk3G8ksr4dd2BcT54pCdELvqk2UrWNaKcmyBCcSg9YF2VUW56139ho8j9YKDWncwWsP",
  "key10": "4cg5pke2SvAN5GiXTgtAuF5Twp8XAkRx5BGgK6LvsZFhPG1Jh7T1YTJcmDZDHhFdSZvFXL3fYB1QSayWwi9Fb3M3",
  "key11": "P1KwvKWc5PVnZgsXYACEC4imHXj7E1pinS8aosFG5YiRvjjoRuHJmLYJQUPhfS87wMX2YP8hSoBSacpWLThHPZH",
  "key12": "c6UgZEZohAPzyYEooxWXAuWpRRe1kpM439XgL3tpoztDT2csVaMCbLdEC6Rs1ubDiMq7iZZqp3XXvob1SAFKMNX",
  "key13": "4ZEg6JKLoMoAjMwBUrkeQerY5kE4bCfqzt9VfBJaNWfeg99Mz2Bo5u1UgiKm6KA3d9djnNmYiYLG4C9SY9fc7RNC",
  "key14": "2YG4V8JhdsoSFuc3FPzSNZmbTj5HdHq6WiwnaNVtREVZPiWRsTTfx4e82122kghSHo2yfTWJatwAS82BHfFmL4XZ",
  "key15": "2T41rBFz6QUMd3jJH8cWVqwjeSXohUo5kwmCzcPHc3i53Q4JDkwXvyWQt81xn56246M5udbkToYHVY6uvF73X75a",
  "key16": "48WcRCZHgvc4pH7UAFEAfn4q6itG4S9afmNdtG1vtjeVRb6rJ5wgi9aWQysEJdjWsC6isZfqHJKRJ9bojzWYKK2B",
  "key17": "3xpzXETRtoB2nTGLjV2VW5TsZ5wAKk77KqEdqVH5afD2mNRUubesAQRkfbBfxkQyzxVnemUam7R9woqAa7kNzJqc",
  "key18": "5qHJoTcw5Nz8RyJMYRgYeqgBBH3F3CZtSZBagjKtPS5u68y2cL5KhBEBtnh1ymDWvrtHBYVmVnoSC21X7WKy7UZP",
  "key19": "5a81MbNcV5x1J3mDRrDMPdqZqNBibCvup7hGu8Zx3Na5YqNExkgyg51fim5AaWtzrLoxSV94ptiju6CxEDRfHrBQ",
  "key20": "2KUnU8TXgjKAtCMYemsr9dBWHwWxNA2JPVYfJuVkGxSdEJ5MpLLQUU4TWY8qCM7DuP5McjMajwrhSeEvaA1n9udg",
  "key21": "5YD333ETe1MTgR9rsyL6LsU6ArE5NNPwpe7k5tGBhQwNNm8HF3GKYXetBvzf52CAnDAPQyqwuPv44YEgNbqJaWQH",
  "key22": "5RfaKEJUzJonSkxZTXWXJmruirhdG7UAmchhG2jiwcpvdZZqrjcsi7yutiScUGouiZZmMwCbZd5g32XNj2Uw3qgm",
  "key23": "2QB3FGKrrf1nmrnTr8U44ZoPoo66DGgBd44MsV7z8fDLsBkid1e74pBpAK6gmQEL2MTBZu9XmqqadCaPDBmUJ2nv",
  "key24": "vBeKbMMn39fE193oH7YNSWDPgW2aZkyGvd2RFWuJ1fb8h6dLuqQ7LMknZBC23tgX3C6sZ4vDEEiNvaQ9an9dhTa",
  "key25": "2bxwqSwgkmDfdQYsfjmpkPjVKD52j8FAdQfwEgxghVtpMYYEAbnpNmNzrx2uKd21oHJhwMHXgECfAStBoWh59SnG",
  "key26": "5Z3dSMLo5N6Z4Dmpn2KTGgFEUSFdjkj1Cm8KnY9F3UYxXSBMa61oaiJQNG17ZxQr9sPWJ6LXHuouiquWmhgbG1o",
  "key27": "4CCfa68YAiJu6ftpj9LzZxbGoE2uupjPjYsL4HZYWFL6TFxNNy4Hq4CvukHDf9iG5NkbjCk5AefGFK587dtrPZJt",
  "key28": "dLz97jTyU5tXaRYGZQwDa9zLJnDcTbEfvoT63MM4BaYUvTokhnVs2cZpCfpJK1CpYGaT21eHwxHpYWRQbVYXEM6",
  "key29": "45NPSP9WFm7aJRsvwwcqnocmhhdCfpdCT8ZALWjUXMMcvi5g12p1g5NnY6awkVcP9rRweon9LNxtzq2wbz9kJW3r",
  "key30": "5soZpgh6sjaHAEFL36Qsq6okVfws2WymKCxgvjiyFEgsTUf2yNvXWLnWFGX6rZbmD1UCZC6UgnWbg1d8QF2zb67n"
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
