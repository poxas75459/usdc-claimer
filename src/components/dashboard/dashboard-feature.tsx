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
    "5e2TF6L8ECBUHFjpDyR9vu36KSfgjwUh69NQELsWPLA8fWfxFqnAACeMkCmqKkFYQWG7LPzi5vPkNdKvGFxD2ToW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVdTdBJ5P3hXmJxfnCmQHeaE96wMeeKDV6ag173KfDYdK26Bp9akGSPV2vdaJYHPHF33vF4VvdMNooYxrhUmXnx",
  "key1": "2hdcVsmXNPLJgHXgq89W15B1LftEoK3PFz1NvRU2vhYorp7iyGwdmq4RUHhs5HWDTp7Z27XMJ4XjYEYAby7wMSUE",
  "key2": "2uYYqq5fu9ssc8sxAAhuZ9n3ZzZ4KaXWBZo1WHkZFYKhtYa4YEJ96MV9ExBBbU5ptPuJRFJtWYf8c81h6whtaBCJ",
  "key3": "61q4KnnGBBNP1g7zXgvCsktnbNdMwKQkdnsmcdWxkgEUgs4e192KRFARLpBj9HviGaXkb2yktfJq1sM5PRidduce",
  "key4": "3m2rLbipvZJ14EXHmKAkS3aiRudxp1XNsLTtMupk7tAWD5vyLZYABL9HqYBdRUeqoufPoY5tvWdpW9DHJW7rVPJg",
  "key5": "5ZepuTdViEswp7pRJ1sK8isYgVWofgrQBJTww81AiecRaPZBxAKaVucoPkopMSUeMWE4Q6rj8UNZef82vth3Juut",
  "key6": "5gfmerdb9D9JE9LhaBKmg2iXqVf7kduBH2YtBX6Ze1ohtLZ9WWzZYHdo1ey8uPfNjEqrwipgoGRkQUcQaE3W1aKn",
  "key7": "28SCgxgFJS9WnjxsXTuxjbAHjQhefTmysa4JBLeRY4tYPb1SFTCVdcyvf9Zw1r48VgkGRT69jzrPPrjtQ6tJYmwR",
  "key8": "3tTfDEGLCgijFwMWSqLVZRCartJVAGJC1mNDDPrKMWMNfVaJuBvLXqECW6uEpsZWKY8XxACbYbrxpvsktrG5hnSc",
  "key9": "J9U5CD93FuK6x77XsSkw8bnUjEWCdD7zWpyY8UoutVa81p6AyhXeE6edTuq9wkkqYj8YhKR6k3NgVCbFGLdgi2w",
  "key10": "3Me5Ng7bXEtEq36nxGY7Y6AyhXNxd5QNcjjzrb5kfMZYXw9k2K5omBMLPa6ZD7nLxvDv4qwpnHHZ9WtajnANygy1",
  "key11": "4yCWJJcG8mGFwCMDyyAKKvfyi9U4H6i9ejpBriCRSkmzSRr4BkZJeN91EytRSbdtu8HW8VBLNGzh7abiL5o8wRhW",
  "key12": "4JgiGaLNtCE2jbneEh5GHwV7v4Yk3dvbhjHgUjS5xcLZjTdeV1sYCVhQFuwQEJyLQtbKsFeYNvKj9vGbZdGXH1gN",
  "key13": "4DMaaiqUHsHUyxCVWwFWZde6jePFVQiMBWyhYgLW4EhyPQXEwgtribkVH2HNxauZN6gmzh5G7u5wdsKYT22vh9k9",
  "key14": "4vQFdF35xBHks3pE3cCw2R2X2XhPoeiBn3LsuMu2rQAnwqFg1KQW9rWVpvWU5jcWr9rR4S7bLH6PhVYTaKQSCyrk",
  "key15": "34WwRpgwkHguR4nZbWU3VdLi6RyVNUm9USyo8zAiovuLbUyCU1VF8tQA5V3dx1grawNmjD7Nf876m3fLzyFQKpXD",
  "key16": "5Qsem3wEKLp2HXgxgpJUuuonWvuKCqFH9BjfQNCvjyRMMSsYPKtDwenWyCaH32QpXWGpfXUUPAr7K83DzkQ3TNek",
  "key17": "292Bf1mgYJwLhhv14TREH62PBxSrvyx1gjNQGkgzDtRfqkYKCTwpHZbEgDzucC1Cq8gdGhobV4XPtkVzbnyEmpHJ",
  "key18": "5DUxUUEmcNBMjEse2XcchFw3wf516nUPj3JShEuSCuEkxvJBkuBDNHR5YfbK2wGscWYyy9JzmfDWcMR1KazbMfoA",
  "key19": "WVpw9JxPHfcy2xeEXXbpU4DY3Vj7ACbmcuKeMSfSEhCoKhgueLembJyMwJX9BJkJZFcmgmDgErPU4f5Hu2k6vZU",
  "key20": "3Y3bgx4TXAaJggnsLgfQShHjUNPq2bAzmYkmn7msJ37EVH9dmsJJ3qxuwXKZs71xmHvZ9aFAix4Kh3qioh6uUR1A",
  "key21": "216UBdUihBSnAuJhPG7A6NX789A4gaCXbHPheys8NbwEZZjDbUkq1Pbbfc9YemTXG7xMZew7ZcZQ7ENGN38e8H4i",
  "key22": "51kimHZQjazMM5TQpa9g4vN4k4P3gsvX9HJmUknMhS1vXm1nHAivqncGLyxNRnGmfgBNhb1epSNevjUUNBCdJavu",
  "key23": "5XkEQuzbXiNvfB2Z2KnMGvazr19Tiefaq8TeA1wHzrQSNNoqYcqEEyQeSL2YUJTaCcNoTiUYpRNgzeYwSmRF645N",
  "key24": "3PdtgpvfCjUowyWojWMbCYDqCXrZNVbznwqK9b7FABngZkfznm6BLkHf1pRmy6stJQG6C9CuunNeRpbSmaxyDedt",
  "key25": "5eLDLnsVu6c5nEDXgYfoaoWWkaUeDgNCebCg8T2kobDDND7qWQf9pQeYVwkWEB3Wa3H7GiP8J6mCQDyp7pc7TwWD",
  "key26": "3dz2AvNv9zUhQfQaSvDvpr3u5DHHawESTbh8TqL5vFsNhTA2J9ysot2NSGgbCge2hzbVbh8jxdt6RLtXKEhVfvsK",
  "key27": "5KXXZpKmseXdPSmAHm4Rc5q6mMYaGSDfJbUFu15UF7SWobZhfoWoX26qftaa28eDMQ2kvyrQ7HLghWtSVh8YkE8a",
  "key28": "2xw54TQGYpZkHvbTRAwx7JfrJmjRMpGajsWy2c17U3bGPHBsVpKVZqumE9Mr33FTTTBx2XdpCWTMVqDhfQi4Qr6d",
  "key29": "3nrK4TxAq3Ppp53WTEyRKwW2P5EqqWZYUjyLsniNqhMNkhbVgYGYpKsuSQG9QADjpacGdrcpaa4HzfYZcxh3cskG",
  "key30": "46f4taHrU6oQfB6Bf7Y9pt4SXh6N6k8G1ryz9bLFyMf8NU1cjwCTrG3UUMBADF8i2jCj2aS6k5622BiGXnJYozuW"
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
