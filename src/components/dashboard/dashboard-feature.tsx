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
    "2yoYMiBra8tunJdFMQCqkJWFdN13dx2APmuK68iUNXcUw6kQzeQkC9i4VJZhgmRiaHQcCMYCX2tnQ5gyrQ68X2D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3URn2YUtV9J1Pbe5xsJue4eQMvyNA92FKs93YeNqESifg2w74DmCx6C3r8eCsoXWi8mKJf6MMpH4c4ZRdvvgYAxa",
  "key1": "2nMG14L4AHJQQX6G7Zohd4FTAY7bzd1FC12cE53WkkpCBs1KKCJF3iwYUUXEox13ykNiTiPNB124d8VwMSnru4an",
  "key2": "cErdFCmjEgdxBsjPZBum1epyiAubQZbEk3c6h57tNdzedoagJPunEWExN9gCYnazxCSqKXpdob9rXzMq3Zq6MfV",
  "key3": "3WKqoMW3nW2qbjeQFvTr7cwtK7cv6jj5MfGzHLQwq7jfRdfzRtMdWSHFhYNeSF1J52fTxESrEVdMH3CKgo9vPWmY",
  "key4": "PNn44U6oeej1QHwJzLs5a1mNrtSRRXKNqXppi2L12BgzgjX8HDGFeWZj9FNyckqmupCaiKre8zxosruPMaGVCxD",
  "key5": "2Rfh3GTM7KEKta9nD4CRX2kqSeEr5zFRJp4zux9q4KtCk2RFcnNSg5AvtcFQkArAxZZdxFcDyf8Kvhkn5bT6z2rB",
  "key6": "36qbstpwF3Eu5F29yiT8smaTZYvEPcjg45jQ1zKiGqXPcSQUkdWbzPU5hzb3Hd7aFSTpL22xQFYjVEyyJZ9vqjda",
  "key7": "4nawq7J5d6ph7e8yP7MLGdQK8ZySYpjY4x1MgWPKWEpvBDdzaP5PPL2KgARkEJ3h8UAoby4GgNGCxpJ2FRsHZ9qX",
  "key8": "2vdXaguGgRbhX6cvzVkS3wPdHWwMSAnaWjd5MNEBSDWyotnik6eSxAbej9W1Mo6HGBHRbNovYbxrP7i1WdWauscM",
  "key9": "2xwXDPioLY9yD1R4RkjMetScqAstnVFLPWvzEojDuHuVWhZ1DEQCqDyUAv8ffGsBawgr3QsPGgTZPG8mUcfButob",
  "key10": "2FVx2mK6eDVmHhf5de63W5Hqjj6EjL5u6pwuc8gZaSeTLBgEbQgsEqzWUBDXG4wrBTFdGPVofiaHroXRr8NLcdBS",
  "key11": "5wwAsvK6GkVi5KhvibNrGDhT552z5tzSw3HjRShsdHCBqVqTF79S5NKgFB9n85Kq3fKdpeZ5A2Kys5BNPwGNnwPs",
  "key12": "3mEKJ1Nz7AoSpdXUmQYb5ZtzrQPjAFccyMgiaawNa6PdEeqZovjdWz62S3JwPLVFZ8KbgXZbmkRP1vvTppC2aKZs",
  "key13": "63riWVVGdxWLEGbJqmyeLq8sx7hduL9Stb1y7RkWSBRuWvPzW8ujbeoFeqa2cBWw1Bsuc1MD6gWTVKTPZsyqmHJ2",
  "key14": "4ejJnFKXYUeugywxwHq43ER3E6SdBAMvzsczRssy9U9uFksWkYeZptLUtToUVJoYZY3sM3HHsMquKB3ovoqfYU1T",
  "key15": "2nb5U8zZXvXmC5P5dGZbqBt2AEUoWphCkdXuZrDPXjqNvkcTKTw8DSK63i5noKTkxhGYWYEJtr5ZW1E4LBZsvfdL",
  "key16": "4MWcWFpHX4gWTFkxUz3bvvfb7oxJKCGUEByc4hUwYeTPo8p6rUWXbY95c7zBB99af6uuqfiXsDLfqiEgGNVY354z",
  "key17": "44ym6LUSjyuEGXoZeg84t8f8Js2K3UENhYqKMxpXhgJSSiuoy5i4yapNRoeM6TPw2tqKUpYDBgNesqxtKUT6tb1n",
  "key18": "5tWqSPc93CXwMhbWXscHudZQBHLaiUAD5AYaYPUuygARgQYQNM2yK3pSWUgayfXCe7hrWWHtkveJ7pwDj3x1tCF6",
  "key19": "ZJRDGNsabV5wg7Z8hfp3gLhj7i3iDdvQbYN29qg9TYUA9G2jZLkyAT1W7skpBQwi8tHgkaXSU4qJHdZYe7d3ohv",
  "key20": "2SKDK5u32ACAQZiE8xFrz2hC5VjzccHSQYQXpBE8CQfKJ92TFkFrJK7QXPDWeCkxR5p4iaff3FxaiCQ3rWd44oTV",
  "key21": "3vUnxP1ATFCpsBW68NQEMhbAbqZTa69XzJg5Xi4aPBoZF5TwFJMK3UgFKiJLP64afqsdtmUvjDbbX1CE3WLd8S9h",
  "key22": "3p8qRHJWqg4UmUkMazi7ytJnoEzVdGKtrenrn7JSZmWb8MTNp3mkbVvu6XAvfx1NyrTGtMhi8xqeTPmTNVoohVnX",
  "key23": "2rNeTxjrUnA57BwPnM3dmkRXyEHQHVoR9i6NPWCkGjju74zWT9xUcFy8SHwZ37ihU8BZ9HP2odzvQo9MZA7x1kda",
  "key24": "2B3vTR1WUv6gW3Q89ZzaJbGuDW1iQKpsrfnda8zBvqSWFFBhfnBGK3t7X2ZTJJUHh13DmsfcfajstcaaUX54HtE2",
  "key25": "3AE6UPEx5PGuyehXWdoAKxYbhLsZ5DTzgcK1Ymv4Sauo7ChpWfmdhCx9nkUqMyHGcK8JrCgmwD6kpc8ZmX4ybiWN",
  "key26": "5JHr3oxsi2RYJitCcasNX2sEBbVgfaBtHkJr2YF8LopvNPA5rGMyxtpa7wDD43NA3iL8npQF4sCKt4b1tAKEexWW",
  "key27": "4vVobmzoNrAEhqMm9oqPsWXNPKdTHLw2S7qj6kp8NzWFoBJ1iLFVhpNFXrgmPmEUBRDatvsUSqPdUutQnJTg7GFD",
  "key28": "52K2UYm1p8nZCQFi65hYrCwkdrckPpq9YFmpaRVbn3xq1FrmMvYYRj64faPbmt7AcTauNxWN8dD9i5A9UY7rj7A4",
  "key29": "aWnCkze4yhBBcj9HA2cB2txkDNjCMAZyJ2Xxjpvggx9uJ9KFB2eWQ7iVqzejQcqr4PibpnBUs43QxPFfkpMKLYp"
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
