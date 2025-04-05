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
    "46iEhkEF7eL2Y5yrZuFPe37teBGGanksmqmbcE2P2zG37LaaPHU2Qui744qs41jjsvfq3wbCyRCU3RH2VGCx3jSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQhrZ3tX5DBHwgEZ8tUmyC5nw6brZo3gL1pQwEF1QBujJ8Gz91pvXi2Zq8Gkmytgd13pcGvE2ZtQ7JBcgcVrbac",
  "key1": "341hE1yRtWaMZpz4K3mYE96D5jZmxcym21VowYMLTEU5Pg6rzjBpVN3NfrVeowGTx24p2RUiVpMMcToKCj4HChX8",
  "key2": "5b95XDJW4W7gbv8ks5r887C6fXisFSrYnMB1vwSjNV3oFRk8o17uAd3HsE7xrzukqTXFFojq7GmKsLjdTEYaukfV",
  "key3": "cqkT24SizYqMCfcDzLDTfaDTVVHPgFHmDSx9EpcCt31cqdw6uHq6C6Q7AKfi87MtSjstjuoD8VsXfPZaoznrnss",
  "key4": "42NFV5mvQooK9Sr37DmcLqakBLTe3N5Gz5tpY2ck1dcwew1kEM8yRAoSoNptviad7SgSyJgr3dmcPRZYRAehRQCP",
  "key5": "vb5KkrbUe82XHjt5FckN46EVG7uQemRzJ7bvzh6TapAeqMTT1E3WCuff8DoPCfsKibXAJusvu1dDoU9ZbKsFXW5",
  "key6": "3Jjo1xW8U8X1ZGoJfNxpc6ThJYDzvqdzzgEXiu25YjbymF4ZrgsVFhwmvsHApwVXFXuUDSMBgDyETz8YRUx2ivM2",
  "key7": "5ArgtahcEY6SomahWweNeCGu8PP7VN5hCatpdMqJ7veYyjf2SUxiSsKGaFk98pqqWnCgZKaXDBEmitu6pRNJCJCC",
  "key8": "5SXn2mMKqH4tFAjrX51gRMRZa1eKGobbX26paA1CAgkvioUxxaXPhbRsoaWi6aTj8jsmBAn1bsjNFeH3ZoWFvURV",
  "key9": "4Rbb9jNR9CP438ZeBTwgQjHGFbcchmBZ7sCxQfaWAuywS8QVMXWbe6FxBDGP8QGdq2CadHwH6KbVvKqj5QuhwfdZ",
  "key10": "5o4ss1MeXBzBuVuQBVMWa5Law8GssTfBHNFPn5RgitJTtZZisK9B9BmjqU7om7AWFkc2XbdTmKnzPyBuJxP6c9JD",
  "key11": "3YriaGraKoTmyfHBxSvxr3eCDedKJ4p3sQS9zYAMDuFBjaa9DyuJ6mWJRQXRtJjizvAT6akz8HuBBsHMqNGhxP3Y",
  "key12": "36u3bw8RmiMUCPbVi9f4hFp5Mddg7DroTy3KQmwyBGY3R4PFtn9DxEzcJPNQRzvSED6aHFQkatGaovsCsM1E1VWb",
  "key13": "3SdCkHEaG9dRoHCGFkPdxwSSgJLTtid3KmG2fETpA8d8yJLafzDwdrBhytVwGo1RPD4Wo1JugCRaXcp9YTQsaqpr",
  "key14": "5BygcirJNFM9tsaPBQUYKpTypBt32z8YBgZvY5FPYgYNPQ6VbEBJmCmAKGsqfk3zA8HstVAzH2n5SPVZjvLq3Maz",
  "key15": "2UPPJHY9NVvUPW32AAohNDDiUMQqvBHVJzVura5qsQ9iZ728DK9ukvRw7pRNqZTQVkYBMC5uEJjmWKF7i9Kd1EuK",
  "key16": "4229C1XSYyLXCDGJpWxKDSEJmhLHq7fVogypEaY7rQEVrraLh6mwbHDQRHnQQFMGuCf2i7czX9Z7ouoTxCGuEiRK",
  "key17": "2qPDeVnTybQUppdg9aghv92KWM6SnVt4WmNjGmppjXSQo3h5WrjgHEPePYYjNaNcQfHHDdKMnxvhgAC7EkNhyq8o",
  "key18": "3ecdu5C2xezcB8YhPJgAAruQjSNG3WxQtFvdVTrcf1VvHNRU8Jhmv1cV8pXYPvjx7BDqCboCgYjpfiWzXwxbWF7g",
  "key19": "TgcV3Dn5GYoWCiuWH76j7Koh8LmeQ8PoKXCVqpqxwqDrbTpXERrkYiHMDdaMAgYxKi5VVNwHPyagAtCwqzW1ECD",
  "key20": "4PYNxJeb9rG7vwVCcm5mG3uos8cptaRAANqCkDXRDN69qUWkw5zdbyx1725dX4PYMFGDbc8KYR4bx6uUZbBTabZT",
  "key21": "5ZzM3SjtMkpqAnPjZWf6qDjgcDNj9iygCZSWD9MKitcRzdhg2gAMFrorypPk4FuYBcD2F7Qav9V978qBi3UFwQaE",
  "key22": "4c7iAZYsUmxmR3aooFm76zyuqEHsigKXH6x3SivDswTSKK8n8Sxvkv6kDqvmMVSdqUZNmhf6YYuc1djucJf1izgu",
  "key23": "5nB6bmAhfQSDeaFWGM7hPv3Z6EFk5iXqhmLWAJb1MBLFnmspWpwQp1MKpm9uegVvLrrGkGHE3RxEWeqpN23JgbU5",
  "key24": "4L5g3aQQFZzCa2UB9PqCoAF4weGQSAfkJZrzijfRT3M2514vhUsr6joihuHXSgeN63Ljnrjg5cZWYJD4fkKkqKTE",
  "key25": "3UmMuCnyjmPfboV1cWTAdHvYQnjsju3bViAbjxMPiZAoqTWhbLEwRAuCzhFHSVEU4pnPnTCCJYQd61DioqhsxKfv",
  "key26": "3tac64yfRVqQbTfNqU1hYtaSWELRCuVkCejBd1XGB7qty1Z5PnsRWuLpgpXvxpVGNtiPcxoiVUbYorF49zFSt4u5",
  "key27": "bqwAfZVTVpo6mf4cpWryyD1owewFf8ehsGBZba2orjGTehc1th535WzWn6pfo8SC3Jq3kyRy4VSCM2qtwQqidXA",
  "key28": "5XyxADmQnVPpA7LVhTX7xdwX48hmFE4aLE4zHXytZt5NXxC4ajwepmofHp4ZoVQMZAVMYBZKFQnjSxTSzjivpxzg",
  "key29": "c2kSXoxVNt7BXzTovmmyncvfGBusdK8qxUaFCGyucH5g2u9U2YPxY6kcrwThVkSBnH4PHPbSUHNU6jvmsw4fN3g",
  "key30": "4VPkBsPXYPVXLGaWNjULzwC8aXUKyyZP4mNQabTwP1Z1pi1Wx169JMEkd4im2C6BrqVE151DcwVDv9qWrM2X3qbN",
  "key31": "2FVhEfPaUhRPDmvRVYs7EhnhqNC5vQsJpeenZTWgNR6q2u7PoxcYUbsmVH5nJjkWsXx35RMtaxAmQErNhAMAianr",
  "key32": "5eCHe7BojgHAxjcnbdmg9TcRvSVjTUa82r3PSprpNKTgUXZ7wpAXmejmj3Xf988DmuwLoCv8s8rH4HiGwWZxmmQm",
  "key33": "2DhZUVdmUQXfeA1KnGs8Z4deQtEzn6BVZPK2ArvXx3ZYF4G4U73jZ4kYXAkLVvdBJNWDKxHzVSLb7sLz1kZk2LNp",
  "key34": "5vLGneD7r5B2HKDS2EEDk9XYGEB31haDKfL1yqoHB8UyNh1zH7eNmM63owidoWu7dFRceMh3Pir2ZXtUTZMbf5WF",
  "key35": "5toH74Xm5jU5ADKNS9i23HSuGBG6nW3FAB4hdBTP2aqAU4Wx1f6FsiX8g2xjgzwS75kaMHE43xwbNPMe4BJ5iYTf",
  "key36": "22o3ySw5b5StB5tdReJUaegVdadwU4P18xG9V5mmEHrWp8Tkr1XLCXADFa1y81eeEHcwLZQUhzUryxtCadsDZmi4"
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
