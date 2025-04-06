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
    "5cqeV3JmUzf8GGdpsadwxZyT81xHpDKcretprZ6M8JLCh2DaJJEUexV6tYZ5LEDuarsx8ompD4P1UVeVumDZQ7tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZKxCQ7oNgY52tmdh4XQzLHLqnnsJMu4w6M6KBr3Dz3NyEWuxJnEcVnC1gNtUYLxvR8z1kQ6r3akL85FE7FCt1B",
  "key1": "2NuCQisPRCCefKpyuvDCwZqydtQ54o17Y8D46oY3piLFrKw3KgnxJ1JPFRkKaH6scv79wdALKkYdrEjmzmUAPDry",
  "key2": "2a55VrWx3dgRn9j2cpRM1XmruAMupoo8GDN59wijXD6SZ4WnuaFaUp5JsKF3ZGbffroRsBR4mEt44BaG5gCLBnhn",
  "key3": "2ZavJPtmJ3rtR84MFFUgYyLr9Lgu74ZyhDyxwLA3pmBwCkiQZNd8U3NGqNCHiXK7sfzAGYKiMDHE6Yrpwbd7RH7f",
  "key4": "4KgbzfZ5pzgGvCXJHtALc8YQ13H3gJ5sDWrJBGfvwHhXggcA1m2TNH5Y5NY4cuFRFnYPT13kEYhkVuHDcjPgh77G",
  "key5": "2PSQQYZddwfXr7edTtZwmJZHzV1RgbB6MmrwY1NFCzvvLFEppBhQ2uXPT7hTE16aXoveEbHpn57Z6dVgH3JUYwsU",
  "key6": "4gBd6iubVZJ69cS2GUgSJFuhkMt5ip3CLmu9ahSZ1GpiV3chBNbD6aswdHsuJco17Vcrbrwh8inFkcAn44UrRTdg",
  "key7": "TAAxdyfkH8gVFaTqZU33i9Zy3o8DACryVyy3p7sHB8qpbxKgT4K1wmKQS5WosHsBUFwUr5Noxdg4CkLXWhAMqNS",
  "key8": "536NuFnJSh6r8TwpnJz5nbgptb4j6FqqD3Ts4rRjnWgNjAgwyY3QeKv8M3CgV7Fwqjex4o6XcuvitqqsDdPnDPWU",
  "key9": "5CD1rGgMJG1om8yZD9sanvg4massfVPyfoVLZD79dPftp3xWh6ZxQFGxwLxvtDhfvsKYBnrA6nEfyn1gp6k9w9or",
  "key10": "5adVdkHE55ChHQ5S3goYTmSYX5HsHucMv4ZUZ9RPqF3uB4QZuvss1EhA1qfSuhUcWXm91X9atm1KZZKZGWhpELgu",
  "key11": "2uf25o1aPUco9PQQzbqpPaELg8a1qv36GZJbuv8uWytKnbVwaq9NDbtyx5sgYaQQct9zLUyWm3LZC7xibcMQV8Ze",
  "key12": "38UQxio5JgDpMdEdahMBAcHTfXKiUd5GohjiGAzsHT6TMULKAF6dN4isy4w1e4zaC8z4X3igXKBMgZuSDqYwUtEJ",
  "key13": "JT3x6Sa6ALXWz5dq73YMBj3WFSovXpgcS73qPMUmjN37V4VXXWYnSKB6DSrohvzDDL4NKeNuFgMTcovtiMrrGRC",
  "key14": "4nYocFKp4FWCw3D9ZG2FCBnjTfNmMWta95YG4vhC8bm5e7X1f4mcxkbQa8JSeAep96jZSrK69MoewkUcv1o6TAAD",
  "key15": "4yRh2Rp8ANmHU8fXbAR5yTg8KTPYyfYpRsuPGLEZbxYDDar1UEFuF7GVJTavF2jP6qQfRPtAFU8ynbvxMh9Gc6pd",
  "key16": "4JnYEWrfBpMpryAMvDjzYAQKdR1sAGK38jkbA6cVQCEHgEEakXQWBPDLw2bxMBjf5go7dzJCv1KbaNskLAxDwNVs",
  "key17": "ufqLYcXPChR4HLn8WRecRjM1tf9FcfRAzKeZqzbKpqSGzcbzsc6iFbkhjBnzjKhpkwLeWNrFQJeja8PcdL5JseQ",
  "key18": "4o5V9FCbYTyxPBbVzSnnv5bReKokWBsuA6wrc9jfwkNVzyz1M6vh2HcbmvrdkQwtqXSgqSdcXtgXvsWgpTwqxEK7",
  "key19": "4o8i1npyviCd17KyqzMsk9o4K71uLBcHYYJiBGMrkt4fDPPsRofDPkXtX1AXm5yN8HCreNjf3E3pDGfm8hBJ6joJ",
  "key20": "4SuBfTyRnt4Yyfgo3D32DPLEasR44FCUJygxgUc4JRPRPe4ca7ScYYCc7x3BJPd3va6277CKCNzdAvdxspCmy5Ed",
  "key21": "2hmhaDyBTeY2ngPxgXvMeSMZt24LfcVpxNVc1E7ki2ycN7XjgFKnuv1v2C8kCKqt97nJv9kB6CfpXgA8yy9sbKCC",
  "key22": "PeJeGPLFXkts7QGvBqU7z9shvhs85MpnBfyz1FkjrvG6dhJTWJZq1nj4qqAMLvWSP3QESM8pKN74iMVtskbEhkz",
  "key23": "tuJssAYJ3FceKJxy3qmfnDXwZ7rkcZDcVWQRFPsXKiWGbighNHgq2VJxEGBj8eeepygbYS2CRxZvqUW2cmvqZev",
  "key24": "3GS93eekyCF7DaChh5ND1Dd7kLYnK4P2jDzomEWmRPjzbBCHw6w8PALxd3A6Ux3oEhj5YgEztbVaQQwGAjheFaUE",
  "key25": "3am9tkudThSeWUj3mUNpqGAP6XuxnixTpjBjTqqbatZkK6sot9obPDpJrULrLRuutpV1no7wyLSK2TicEKAHmfAk",
  "key26": "4M8VVJfLexyicFWLjputhwYNM48AurKmp61JtvpZgAhnreV3281z5gwMrbRZ7qwQPCwxkpRmC31HrSc1miWJETzh",
  "key27": "3yVCBehByceFq3vTVc6E7QEP8uWDjV2c8c8jNGbDFvS7ZgFpxqbazpWCQTMqdeTQLcWh4jRJXkoUWMjGJwFNsN78",
  "key28": "2pDiExhc8fZV84bCdyupdMNu5ogxFX5qZh8KKezxzxmftyimzvxz3rg8gBK9bEQnnqDCWeJfKBChw8BYDbeHqMGg",
  "key29": "cLQYq8j1edcWtKi5Lmy7F2N7hSbGscYeiWizq5Nwn1dJH3FPgTnsrvZdhtBYF9eMiLiyh6aGexobduYLcjL8gm9",
  "key30": "5PcUEEW2CQdvvAjmrg3pm2yF3xvgM3ZUXGFhrgQGFciLvz5TdC3twa7WKSgk9S2KNRz4oBqTjgqonM7pa3DT5zBm",
  "key31": "3C5zzgK1DGaSSDBp1T6PCaXM4mqZ6Tbrbpee1qQRLjoUQfNUMcBym5QYwbh4PMYVasQy9Na1dwWeEAq6ffWJUNTj"
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
