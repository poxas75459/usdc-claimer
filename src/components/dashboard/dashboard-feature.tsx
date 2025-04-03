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
    "63HYvEoaSZFwhAnR6uMruT2iBhJtsN9hQ7dVsJyTfqGePSkvzZeaWyNpocUpofHeMm8Nbv4LmxFFeQjUWPPZamWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eh8wdGzUumaGLNaQqnensUWsupW15GzRCaWhYpF2n72QixryjWMAtHQSCr65baiujECxDPEEwqt5etQg1yazmv",
  "key1": "5dYhDhycGGbEqbwA4TF9tqotxac3fvP1As2YzEiNss2GWkK3m7SkUCUgayQJEKFHDBC2HMLiXxehSSBm8ucvuLG7",
  "key2": "3qdENLGm3oCyJQEWJFexsBUe9yxZF1z9ifMLsJPbn8svRAoyfzkDTyrnUy9xtKMmYiMi9kKHmqQ4RUg5NP7fyHwa",
  "key3": "PvycGsCrDEduRAqXGtQEVK3dTDBpi3Zi5Q5sQY8xiLbQs5bpQ4vfCw5sKLJZbG9mQrJqqsVMzUiQLB71Khb2vjS",
  "key4": "2cBzdkgMKzjXLwpZpZo4uZ8xVu8vJtdD6SDuYKnQLURqQubWmPHjWAxNyMe6z9CwHX5GoemPcHPgfnwWPhDauqqX",
  "key5": "663zEmCgA2h4viXLAwwHTwaSzKcjyojivy7ca18fR2Z4ZgHcxPLv3912bFAJPy6pJJxqzdZ4QMhKraBc7AXwB61y",
  "key6": "65LVjbrk3mRosLmaCZKw1Q2wTPNbkfcEiXoQ4pF5MwuKtG212MboJ5bFzQJhr4LhWuSDeDgcbGC5JywrUDK5vpsY",
  "key7": "2RbDXwpnfGTVWM5PfJdqv8rtriVL7fkYgPtuVR41ikX7tAQ5VEGkbeao9JAcwCFbwwkp9eJics4CabSbX8gdV2wM",
  "key8": "4WRkV1qUimADJBnY39UKXm6nsNJ2BNbxr18rPmz95vq631cuLN82yFVwegj8BmLgGm6RvB5qzAjmynqcb3LPN9JF",
  "key9": "2WTgbb6K7VDJYPMQoFBJxkekLAaCpmgW5AAPXzmwzb9MHwbfk9TE6nYtg4DXbvEfVio3keaE55FGGK9KNzctq5SN",
  "key10": "5TrwTuaNmXtbBtnDzZtgW3yFkmrzkq2JoFrmNzCzVA6UBPfspgAjDaKekHgS6ptSQh7w3TCbXz5pVhJYp6Yvs2Aq",
  "key11": "3Fusy8zkn5fGNa6EjoMM5ECxe9vBURSAdsxdSUUX14VYPau9cGXMDfH9QrrQ4tvo14Jz1pn1s7RSqj8EQXmqFgY1",
  "key12": "52D8rZTosQqeMnDyebbfT8khV5tbjKLX7WjgQ5RdA56w8yeKX3ydkFPheNUDo5uu4iY2Fc3D3NooNLURqPhezdEu",
  "key13": "5PKj8FqhDkrb8jhhgyHpmusLUmak9GhjoQLCCAKk1zVPKdBETi8FJFhVzwwYiaThVvNeRvgCS86BJxiKW9YffpZn",
  "key14": "2r55Py7UiUs6LJDK5FUekaobqMTTdaH52LP8mKPyue9q28zJvHwWWf8fvnr17mWuCpbkSm5DtKpEEWStrZwrrbFK",
  "key15": "3hWFSfhctKzwRW8g8xP1SFFcYYoZz2nV29z1ZMgbjG6XgnbYtmHZfXKNYHSvq62yNWyu4uPiPqkYw6yZ6zokeE24",
  "key16": "2xWDEqCC81kBwc9ub3RYNKW3ewZfiowvNLaJYtCy2zS6cXXwzJ8JWH1trsTFVZKg5fQpwmGzBZviX2v2z9raqhfJ",
  "key17": "4XdxZoerGaw7ekmC8oMWK42jo8rdf68Gt6z9wL6yUCTP2WaG7iZkd5mZfdSwo8Utow5KJo2PkTo3636Z6t87X3CN",
  "key18": "5CeALer1xGo43ADPg8vgrhaGQQsoYvzU6UXAc94a7ghfVNNo99A8RxVWUUvSpcYwUVNYphzRdeZHzVABPc4UdBBd",
  "key19": "awMN48BbeJXkJpYV6wkAKF9ABEfqDGawk3xUGX5JstEozKSyA2o5u2HgcwdFzZrTH6P2SqzLVBm1byQxooYmVZX",
  "key20": "bXfe78F3UtcWAYSyoktcZfZVhvUgrDPVC9nJZ3fDnXBvjBB7JLRHQXYSPZMriX74VkR2qax7mAWBvB5pfebDTvb",
  "key21": "4UjeWdcptxkkuxmZJ7fwb64wdfybkpG3Wv7CcpmLyMLcB5qSzM9Ge2Brr4kZxGCJC43UN1C6PP9KVb31AB4L7cpL",
  "key22": "5CohM8XwLs9QeNEnNy6ar3BT6ck7aU6vxgxztvP41A4mbtkbGS98RKHrHRHH2oYY4cXFmMH78HTwF52Y6yLLSxAn",
  "key23": "3XqAF1hPigtZM1LApKX7rMTzu8V5qmMVeG5aZEnDiWnUuvMB1TNkDhE4aofrxmJszidsCJv4CRQBuyqzA7Kihiiq",
  "key24": "39cAEDXAnxJtLE7W4bWsYsYxN7v134ENbNYZKgbmseKdSbuKWgMFjGvfRcCqM7aBvDgdLxBteEKf14Cnk5VDGB5C",
  "key25": "4Y1o9aWQvjCZJofHBFSy9CJbSFDD8rdrULkEB9Z4N6ATVe55xpZYt7MbEC9MsJUGtpfBegUMoG5foXWDBhoq7xT5",
  "key26": "5mEJkv7JBGKqZnZSqo2PHiT9Dg6fhVKzkkmjvejoZfi5VumTjsneqNmXB94E4gH61uEyZqMtwtcvyYjx5rqfNfaQ",
  "key27": "42s22Wdn1CBUaHjRwexvRR19rYQrn7Dc42gLbEnXWUYsDCyrf18eCWAFkdCZe9anTfMJqPxpF2G1KxHGoLynchiL",
  "key28": "AeCpnxF98L7DSfxc9KLyjVCnLZZ2Tfis7ZjJ1EounLDUa2sMTZarYNv2r7ptPcKYDohbr2MLyqSzQpuvYqdGWpA",
  "key29": "5xhqjrnK7AKgbLE45TUe3hjiJLGs21wFsiNBqFDWaSQAuWjzY4YxiYD8T8nCHwin6A8xnFqsb6vH56Htm86hKyrh",
  "key30": "3zUuHQTE2bU7NReLp4sX5S9uR1Qqtz1hNeMv1ufKLv2wz6GFmp4nLsEHyqvNhRnQgX1JSqk3QNzbn49WXoPqC4qN",
  "key31": "2zkZ62oX3jcYQ8QqGBGnE6U3bnJRwwsm8ucbetWk6Qg9Qh3YvYst1A2tmybqaeZVN3jqipdwVTzAurmdtHjMv9yT"
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
