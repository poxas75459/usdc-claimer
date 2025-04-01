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
    "2wR4apLJZmFQbx5KHqgiWtrxwXTyQuUR9d8nQv97BgpUzYAehnCmcfjZziH5muP7byesSyjxVY4t8KyauCY9bb7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DsiQBcNKyzrQpzVD16NQ331mam6rcxXfRfwLS3jGEQzjpTxaqVX1edxNpqqJDQ7hKHrgCyrNcfo55Ke8hM6792",
  "key1": "2xbe2iSLa3kZEtD9kvuhwHcpTACLABBx4WViwMS7uL9F9i2WTruc9zQnjfQnpKhUv8AqhYWfdSDwXFcz6UkoSvj2",
  "key2": "4G3ZNPunFuG1ac1GmQkb7mytomN7Yd2y8vQ3th5dAaZ7PdvqMi5axNXiGFfsNDJxQWTdy3bGiMYxSoFJ9QXcoyiS",
  "key3": "2mVHqYR3ywKHppMVjVYWLcvuXz6GpkmUH6HGmJGVxzBmwbZ9Y7azoFqL7X6PCkUdSobWS1pg2iLPQDFjynEZ1BUq",
  "key4": "3XK94qtThyHpGja7wiqQfTkmnskhac8D3HVaAzy5RFmzNPNwfXeq5xyPNLpKM8QENPTx5ojhjPxidFbDNeTwzknw",
  "key5": "2PigjrQyfiDd4EuGzdkhpMAsNK8T5visUW9oaqyTeqVuDRtDCvgyVyR8etTs5PJn52NepgWGZxvVfN83xibMx357",
  "key6": "e8PJwE5WUjsHJCX4i2jdrrmFhpczvUhA7dvZCFriQFqwvvcw7SvHdSCjoV4XQaDekvrnSwUbwYTVMYCTFHUR2Hg",
  "key7": "4PqhvmVxpwr78QAmtAjNzvUtAHpozLsL6sQkuqiVudgGXXDcYh2aGFMYFvPNFUB3TiEMoQHVnfvKhcnnKKYYUe8i",
  "key8": "66DzH5pKwyLYGfUSEoBTCbWAQZJ9kzaz1ijgdq2AgY8ZgazZvZFnx5AUf1UbM8YzGJhmh8EkNzSr9YFeNk82iC1v",
  "key9": "5vKiZHPGokXBeCfmc4Hdgs7ndETBSCTxz8hyVDCegBi3JZ6pHF5M9gD3WpRgwBy6T9FBhT6qnkjAjgTW7bdsb8QV",
  "key10": "4QSJNiRJ5eyLcQ3VRMXGwUu5iVNg9baewj6tPAah4GjnY5ZudDvrG1RdTxrY62Cb1rEctMGngDC9cC8J8UGB95sv",
  "key11": "2kviNeaZoYsogWy3KJ7bUaAmbvx4Z25GyT6tGLRVF2KdAcU3gFCXUvsp3qbVhoJSqLLeqMMp6cfBxCLGd9P4GPXM",
  "key12": "3tG1bycJwGMtNaZ3wVf4zCinaZCe9SKnut3eY52Fh45YENHqcREH9cRF4BFRVXzsY96WSEd1AicKapyTGWMNG65T",
  "key13": "3TVqVV5F5sXQsyxCZYh8UdfanDQKvPkTF5Leirb2XQgiCJmFmA1azdNxxUnCuEG5ftYTRF4xPsKR5yih2GUi5tU7",
  "key14": "4wBH4vfdpSbMuUP9hDVojeUsGoB4bHA989KeyYs3YDnJpNAW7nY8xamGvNE7spX4dMGNajZj7a2QeRNpDTqys5y1",
  "key15": "3mwfxi1r7asxbJ9AyR45Gwf3Wa6hxmafden4hVdpGvcKt1dhmzSDByqU4CwGKPfk9uQPnEdsaCRfNdtzWifEVf5P",
  "key16": "5SQamzE66ToFzxH1WKxESDq98thmrsQTkHwfSq3Ln3u87Ak9Pj3coEbqbCeCr16YjgLd7LnM39SwRsFtobzYaC4F",
  "key17": "2rFyzEMxZfBsPHCyeNLbaZkmUcutnByiyBF3t4pXh8PRwCFLywAiphPd7v11EzzCUGJ31xRbFyxRD5X6ZowUru3G",
  "key18": "3HZUZ97KCeAGEKq3NUFJprkTCVZzxxwUZbnEdF1kHfXq17zFMat4jbFcuA9XXXfnY1raHUvEQyC72YPfrC7cun2K",
  "key19": "5VxL2SEXKM5CGpxE1fNescorLaBokJzb323P9vbb84dxarcpGTKnyGsy1PAzFizzJpBapsZiVDmtrirM9XjdHRbt",
  "key20": "5TiACRqVWoKGz8hAG7nohrcHokPg6N8b8ZeYZ9sHKJouLxQsfmWkwKXxkcJVHce3kHx284JoQ5u7DX28tY4kY2aP",
  "key21": "vY9FKHpozXywdSjATx7f58ryx8nSjZ8rqgdpLzioHxTCmy9oNXHVTcXYd6Zxvg7drBjTtTS74ohs3vvuKG544zZ",
  "key22": "2pWUmEJKWGNbwGHkd5uEz4ingcXPNPTyG5Fo5Y2i79tmvkNAhsjrQau7N2HktLm7RrDi6aiZCCJjXYM4HC1qVDoH",
  "key23": "iMvsSWtWyRNjSPMeT3N6eLqywWy5yTYPcDvAxuWzVuQNN2LoJvqQwi9D9z9YG3jfXog188vMzKvss9JRB5L3ENV",
  "key24": "3yqyZuALS8udE94yKeU92fasnfhi8pDBYGreVgWU2eT9mac55fFkf4QfW5TGJXu2ELCLaD2UhTz8D7LWoubLDxDT",
  "key25": "ffo8L48jzgY8eCeo1gpcP9h9hCnhSpHAyxgkqzHUL6FVLWTEnWANb8mHH3UB3eKf4M9qu33nHdyMQiScoVYJQ9L",
  "key26": "44uXZMiUJjioNc51vFEsa7Z6x3cZSeQPyxCuMJhffHkaR49fPkhEutmD9wV1oKqq12ynrNNDMeg3M1msuAFSWf7J",
  "key27": "UFvYBC38Gy2vXYpssgvbuiW8QkS5xNmSJkg68LwR3v5f1ttrrHSYEbYbN1zWDk4XzSz5LzpgMmCHiSK9Z44MhFZ",
  "key28": "5RhuRXQKqHbjXCNbv9xuYaLejr4nAR6Z2nwgm6epgNCWVzddA9k8nLWPdnw93H42owiQxcmsGXvRwBdRM3QETNaw",
  "key29": "4HyKRGnfKooVk1XhPwt1sVxTTMyjJmczDCh6yZSLAT56qNRNBLcC8TMo1HAbUA54Mq8mdV6DTeiL1QB647FsvK2h",
  "key30": "47MhpUpyP8bC5YzZM27o5UF6JXCMr9uQkQ2gbR4AmSDMkrv6RoYDN9kKQ3BT2HST2oeZiYdCrQPdQb2pFLD17mvL",
  "key31": "pKDEgFHPC7oFtiSKNKx9G5NWArHJ95ddszeeWVn9ht89RYUfLWShSJiKzU6RhQKusPhy7EL96VDCUSnNoMDioQE",
  "key32": "2hwkcco2D6F75V4JpERUHzFrLuTdnktuBSjwUw6hti6bbWqvVoCcyiGbEnmMtLmPUc3M1ApdZ9g4u2QxFfHUWxpc",
  "key33": "5aoLX5NUyfgSVxWdA3uqK8CFhGXHUMrumThxr13KTzxxMXYqJbZzujQ6jo8zNqviyYcCfFWjDbXK3uLuxjCkmZQL",
  "key34": "2GzJScMdu5CZjW8mUrFFf5mwJ66aBrhX6vtZzXQjL5bRhGKe3WcZsRVCBuCbRxDJTNLnyJK6PfDScZGfNR3fu7z8"
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
