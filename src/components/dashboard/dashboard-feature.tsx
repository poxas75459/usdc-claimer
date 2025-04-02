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
    "2cDmQc9o6XVXzKoR76YuZC5d7TjRM6wyerbyZtvLHYAEVAo8p6ir8q7tLcmvyyPsjitvirHuHzwDxPrjfSFMLCFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVGqUvP6gDLHEmg6G2uWPBSJb15QsrV2kweicGqU5iD5LZ9m1j8cAZYhBp2sDnaYwhBNEjL4YPqfqHnN53dQkG7",
  "key1": "45Jm1S8MK5kZJ3zDzNEEenSA7uTkpx8kt7q68ZhpjFeQVv2vNYBNWf4T6PEgLvnahP6oKJp9y5xLQyRLyMrcivY3",
  "key2": "3xZti9b52ztj8qk5viYKTwNfcXGNmQRHRQg5g6JfuC4trayh9BWNA1mAwxUaLFmVmj2MjqbccvwdBjRZ7jKeCk4s",
  "key3": "4PULPFhC2aLoDFVfd1qnTsSFBHLnyvF4wAP6YoykdgDs1nMCa78EKjDiQVTMEkzBdcGzQstrCMHTdF2p7w85oehr",
  "key4": "2w1yhj3y7VkPc7d3vaYhecnmL5WdUK4kmgFBwEpbJA7Ss633EDcTSYwmGMDanqAdvnLYjRbmWNqMwHMXJpM47PAZ",
  "key5": "2qvz7XPsL4ZcK7UWoFLWV1sqaA49mmMk6vNKc18MBQaxvZxbnoubq8yUYQDFssiyVnHSP15Suna2ptU7vsjo5EsR",
  "key6": "XpAZz1HUyFYW8tHX7FouptRAUhZqQt4REQtZAq542ua4kbTWqkLkESCBKs1s2xb2x7Fg6wPLgbgsMyRg81fFBJn",
  "key7": "58VqHir75zUMfdEfSR6A4v2jdPVWHACRcBuRfiVP5AcVyDcszxb8mRC6NKhPoz2AA7mFSycnRW6TjqjU7mDZ6R5V",
  "key8": "XhHsSNHZ3BEsmp6eE8ofZbatDUxpFmDYVvWtWpNFzsYbtJizFaCmEq8iC8o4RCXKSBw7pHwHeDV9agN153rZsop",
  "key9": "j5PqEiszFaT8b5pLqFQb6yivs1P9d2eHBroTcahyasGyaBYj2RYS9tBKcJquD1T2u2u86gDSm8V3JP4CkZ95isQ",
  "key10": "2jfvar49Ds6ZkNLs93bJ8C8YDAf4KVsE2pFZ1r8MxpZrsP163Wd1awyrJguiEipGku8g4B5zrGeVom533YSg5emL",
  "key11": "4DEX6EGiKUH3DzwBzjsbuGkz2fZmDySD61rVSDQf82jxTugWa5Sz4bcQTd8at7SitqxjMMmWDW2cJe5pSViq3WEC",
  "key12": "5WhcodsWuzHVnZRjLGzSJhQ3x4ZVPntRDqsZsQiyuiNikjX7s5TzfNEsLvJtmQBgUsGD1hVvh5wQdCXBpYUw7tud",
  "key13": "gzzH4Mf8xVqFF2Wyp85FNATaiKC8EC3izKKqkbt77ryfd2zpLBUWBUJgTdFwiUZTaybqkWqicov6AVXqk6VNzoe",
  "key14": "4BBbe7DJv7VZdcN3Z3LtqPpmXmR8Jv8esmA2HJcKBW4eBcYC3LmYwFkjA1xjzhZ3eX2rqvsYtBwyy4aq3Ru5ucc9",
  "key15": "2Es9ZqLGvJpkXsewAC4u7ixYFStruRCQ2d5WAhMbHC8Nyx1tSy4qf1QHUtpUMJFBtERZdrA9LgXrzMu6vuJMCE5v",
  "key16": "2f5py62F5Pg6GETzv9C8r1oU49oMy1EEJ9T55kexado7CVQswDVTjei96YcvYPGND5DstxuFb2TuMfHVREqcKLmP",
  "key17": "5wZR2cbuCtukV9usBQpGQJAkQfSPbPkBS5xpw19JMXjawBDqEnv24sxqp5YdKE1Axy8AwDEQnJR8Fk628AabjB5t",
  "key18": "66T9CUcgtLwrn1pUohvP4z5xBgsJABNt19Jin8gY3KAvMKYR1Aqka3HxSEhTqkXfkdHbbkenaxjrtssGdGkTQVPW",
  "key19": "2FKgMVg9mh587THai1JRgoDeyhCzSbDn1zy8RxBzU1UEtTAhGYtZAKoXjAjcgMivfA5dYWAC7j88Zqzu4jXrzEs7",
  "key20": "PCzwp42feDUn7M4Q4eTtLCWYqDQveLyR336PanvYvDRoYSpUcUDFB5LUQL8UdaiEG8S5PMsXe5SzeM5mxF5esei",
  "key21": "4Y7PZ3JqBemZx3tD3RsKFH67Mh6pjbDUTQuVqUfyNoVQwGEjc6itXgKLs39NQHpqtCv9B9gShXHrGrMQyH9yN1Gm",
  "key22": "3nttTSt1wREj9tgwwEAwoFwkdNhAatznCjqD4vmA1J7B4fcEGx6kz1wdKL1PvEYEMGRB68ktNdtXAa7STpNwDQ8p",
  "key23": "5Mid5XSSS8CNw6fUgpKLXCpP4pmMKLH1tySBHQKk3296UUJNPPMdsQD6irWgEcChJML1VrXBA9KHYbWovd8D243V",
  "key24": "mmvwfBHymUnm3bMm4iahENH36FJK8kxajtFBZrLtisL3rYj4eS37Hf4sfGtwertAYCikcj18RnQUhwvLUEH9mkC"
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
