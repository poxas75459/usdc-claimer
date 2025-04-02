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
    "pYrxBhnzBFq5kDMc8uKPf9u5TXZGVgyGXa3ouUVWWmQwhEcZsZwmDhBwZ5UQtbUtUfQoacfSFePjBXSsik5cad8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJDz4z8oL5zKrdcPytauD3EprykGhhn8of8nW65SktoUfwdjK8V4MaRCSBN7vg2T6FcmRUC3Zwap1KiLQBGGW5v",
  "key1": "2a6LcEbApejsmwRsqrUuxEfqAWXkpGRa4nrbjJdYGScwqRf6JEsEswbTy2KiVkhZhCHMiocXSTVJCJzd4PeuJJvG",
  "key2": "2kV4LxihFKWQChepq9LxZtQSJp2fWTmrW7v9BZ2bEKZFyKL1PxUMQPjGshLqn3Q9XgiY6p9w1UAF5kSnwFrgQGVV",
  "key3": "3X16QZv4sF69PL3PqooHWjWSvFzYv95sjJC18rCqRpApsqnfgSWaX4TR48ENiyT3ZTBESrZu55tyubgJpYKhKinb",
  "key4": "584zYaHEdf35EiHRCwfZcKX3RbmjN419RmwusVeYEWukhdtcA1RyNmxPnsesuMS3iwvARiXfpe9SQJEeCsVfhwee",
  "key5": "TRkfvQ2xKfbh9nEGNVjD9tFZFBsXQSth1FJLwRYJ5QYLmPxaaMgSAycMUuhNBKhmno7G8ZQVx8Vu7dwhcBBjeD8",
  "key6": "41kiszmq5DCFv5Hq6ER3kGpB73uiZLKXyrScaDjRTmUTijycYwBmwT6dLDkDbuV5FWHd25eUQHBckBZLpFc6VuSk",
  "key7": "T3jA8xgLLNiXjGGeNPE7Rr1QbVSVXp27GWNcvwzf5k7e8GEzYShAPcVDESryW6QYc2d9vnmZjiuUJwGtQF41LAc",
  "key8": "61AyR5pWyD7hQyif916CfBGMnW1BTQqMtokNHMw2zXmWbxwoE6dEuxTqLeJKNSTxBmnr4PMTeWMuQLcowCUKuRHK",
  "key9": "47o4NRxVeqkeByZFQmpvTJCamJvMPzSmSJNTgT5pwyjjoJdmHxw1Mgt4VoLGRWjPA8dcK73XqQWcN2Bh1c4np1er",
  "key10": "3Hw2s96kjBotvPHTeMaygSGznCRvZupsAg29mcE8Nkwn2sdioXUaPvgMY8uneGQXmCpF6fAmfB7VvsmKaBbBQG4t",
  "key11": "2ban8BrRwG5KdRChvhqB8MyADz7iE9d6DzyoVdTUVjwMPcXtnRFQbEtjDyZh2zELJSCbGjAWFEe3LcCKwNYzU6xF",
  "key12": "iYfZEGfujtStcQtqtWcxyAt553V1nW5jABx4VVmutpAfQ59ZSnAmijrgFfs5MXuJ11XYhghoSj765U1Q6N5Y21w",
  "key13": "c69yTHCNAXMQMM8Eg9qApiDFaE3WsSvPenjc9u5ESfGHreKVC5DLZ8wBKJBa4r2EGyWfSZ1zNgpSJNg4WsrQ3sk",
  "key14": "2EMU2JsEtSzj5mqp5UMDUbmwogoJibFzBsNCkyajLXxFi2kxjiurehAn8LLjAQmAD4aZ6RbdFxhJgEJtmaKuV1V3",
  "key15": "4GQrso2Xbwk4oSQyMexZHxrzkGikQmBEYMw1Ft2Hc67c8qN9eFiL15kbsACWgPwFf1mUPJWQFCsAcKusCQPrtdr7",
  "key16": "edtGr7iYiX7nLxxfouPwT6kfD7gNHmWxeYZQ1x6yJqPsUCwqzFPKje4GBMAo7guMaxSpoktzFPAdF6xYDGicfaq",
  "key17": "5oFsoUihmGnBL8GYz2dwVxadnYS7Jri676SJCov4UJ1qk1xBiY7yK5PTpixCJRrKuXBn6Wyhtt1cySMqR3CUCbnR",
  "key18": "5CGygJfHJe3L12GYgJjxPhrAJwS3Fy5pzD2u5U6PtFE7nBjQbt7uJJ4PH5SbrbB4SodDTDgA9TMx3fExJqjgVQwK",
  "key19": "49ySX6QAEV8YfNDWe1yaSkFcrugV5oGBqwzXiJ2aADHrHwBGHHd4o7NdcrEdnxBqPWfauu3HHJWr7ntKk233EQmn",
  "key20": "2f1eCeUcz94UfkJatCCtPX7wd988gMLWcAzyX5LjZiSgsWpFPMMfCHfUMq1Ap9Sqbm4tZLHirysgeatb88smjPUF",
  "key21": "5ipSB99NUEhPgHh4XC9vRQyY9921TG6KFT1Mj2SsExsMuCS5siNRQNdvdk5whLKoTMvzkYStxa6r9hLEWnMrKXmy",
  "key22": "4bSFhvvWJHimLhYjtHJyjA51cJNp5dMzzf7hnXSYZUUvkNNP14hX7vPKcP8ySHT6nrYCy7gEJFBPz2CMDmrxWAq",
  "key23": "BzShKSGzofBmmmjNRgLv4qPeatKNMAdo4p8qC7A2zfmKq3ocdnBY74PbWwcxx3mHRWpA8qnpBrebsXCr8hpPqcT",
  "key24": "4JdQs3u1XB4RPYpZwXwhpC4E7AhDvEi5uygzqugiC2re16izG2TdLoUGQDyWrP7qeD2oNxhFuaYRsxxL5FtB2Frg",
  "key25": "4AzdddGeHptmBhFa2UyfcWkoLKzYKtFu9vnvwenkb6n7vk962XJEarnQgDLWfeoDAcURF4YBoq96WGZQ7t65KENw"
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
