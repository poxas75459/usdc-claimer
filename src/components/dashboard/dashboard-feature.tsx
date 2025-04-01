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
    "3GuBZ36rbvRG6LjA4y8sWzkCeSbDs5kZTHVyXtQZtXYtGFjjxEFKBfSrz2aAgU1vSfR7gxpv2uv1QcUp1wYM7LQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7V8gM1cL4SNVXixRJ2Ue2GR7rd5s3qpUiosoyF22bkF5yNgkM1PBc37z7kp9uagA2ScRBCRBqgH3PKdyCC8Dcz",
  "key1": "FN7a6MM5NTPYKFtC8ddn2H7pJgZxEnvoKSEsCmACtXbF7iNED2pH3q788VF4xSPvQqRJGQV8RW6Zkbh8oDzQjyc",
  "key2": "4QteVqjqXCKbEK8SvR16sY61UHSfa8BXbPdXmMbA6Z6KdrnG1sXmG1u66ATcBXUYDM6X5EQutf6UqHZcF8fRmTie",
  "key3": "2FfAaPgqHzKrycscsCSEFzVamP8k8zcjxXfcdFd5na9DiEgWcm1icQhcH1sPksLogmZFZ8SZVRCqyKCoRZbHEyFk",
  "key4": "2cxHx3mvKfbsQef3rBhDgRGD599gD44ZftmyHVe24wwyStQz7XTYF7gVofmM9Zv4iB9g9FV195JyEzJN1sTAHEG9",
  "key5": "3TEAdfMzQ6xitv6DLC2Tw3sX7rWkFQK5eNLWtFRPq8mFQRMkSWPYx4YNsA8sZenE5cQ1S2ANRUcqcEupLohL6nkK",
  "key6": "2vqKQgvGghQpc8BVYUZ2bZanKpb1VEhgj6gzZBVwTkejpbTV587EQry8UpnrR3FGsrJH7wLhJJMMEUjCDdkAUmXg",
  "key7": "g8updDoyRNmVCFfQcdtuqgSktRXxfrc9djdMehWuE4335v5udkqxVGDVsvcpjwutRQUAfAfF4PbzL6WbRrQApme",
  "key8": "4kAoCVtvaV7stT5NdqP7ofKFAz25GAJ7icZLDzdwRYWN13qWB6MS8Nnt5UGMUiGH1QKX8wAmajeMLCQDmEmGTV8H",
  "key9": "kwfgyB9Bk1anP6fNmksFp8ksmdoXPB9AtBzvCupizGJCD6oha96jx4dDc6jWXsBsFdfZi2WVp6apzaRKt2PNd2p",
  "key10": "5npPv2vSySA19ejpaDmTf7XBEf2FbVPj6FvAvYXjwPsGxmmbRr3tBRXd9uJB85ka2WCUzUiLbys26rUifkZwWmj1",
  "key11": "2gbaiqC2b8TQihR9pjfs8n6FGLSUsjPAmFYyC9hApjs7iZfb9uojoHwB1JUSFrEf4KFTzZFppa7BLDUC14YtpGtX",
  "key12": "5W1BZYrePy6Txq3qs3h2QRH5XgceTxMs5jqmVbM1JfRb1p5k4McabC9QB4MDaLaGbBFDvSBqZaGsXffq8GFgw1d3",
  "key13": "Pk8ts37X2D6W7tAdPSGHnUEsn4vB4ASnwYX2bt2pqxFrvDDDUgcriKzfPHV1bte5eZTp4M3nGD5Vzbz3D9F9jaZ",
  "key14": "4XttzHutYoYETdmyTg2jR9eC8gboXopM8p58Mj5H7iDAGn3u5RMAhwsXhpT6TJ6FnmVmMzPoAPCawK8QKmMXJNib",
  "key15": "67WTshoYKBpxDGGqwHpVMwsfgHKT2Pu5zqMSDewvaDRajinV7Sbz7N3fhb3QikBFgS5Vd9EhxkG1RrTbiVq3NT9U",
  "key16": "3TuoWysfqn8qArbu1mYmB8fmdUtyaAJqVeo6dsnUu18YRZP28Z2VwPUEWXEB6dHh6wStuFj7jswjRxcGZ5eFwnPN",
  "key17": "5KxRTfdsVCW5K5hihg6w5m3uEPTbKjAGoY93mnfdqmFfGtwm5iGJkHkwwf8YUwHBJA2nhWKVnoZDfyDEe2HPFkWE",
  "key18": "pyqidLSjb4UaikiH85Zdv3AqNEuathwHuvnQsbJPKrTsVhWjiQrrbJtdcbEgwdmf2n4jmYdRCUMNff4w2ZWW6VF",
  "key19": "2BmPxpbgeJ4Syv5GeZGQXbyWdLqS1ruBBtdA7vPkZSxZ8D4A65AY3eU8s3aZ7zd5ujZ8eD7x9U6UNPNVgUzif6mx",
  "key20": "2LyUWtbrNqD7RGtq8WjJrK8Wb8kHQJfNvyTTwqeUyeA5VqmZ8DDswbfhxoTF6TX4ni1YjJCSrWheANG2Yr8pgas7",
  "key21": "4rap2QBkxbpJV1sExTsbbMt4g2VER73RchbeCeuAquBXsjmCa6MDwez8LdKfLKk37XbgYMmCWy5LUEDaJq5cEEpR",
  "key22": "2gSLq6U5Y6m7eg3PMcNfRFKWikDJhvXGKjE6H8Ba538Qxe1U5fM32eXeZ4D2cwfbx6wmSbFkkhhNcA2NgxLEUqM1",
  "key23": "5suPuTVbGamHP9pQfpRu9P6KqDTfup7EQLKETVMBmqCF5fxaajqFh2a9hz34M7tKhXztQZ28QaJABw8kmT8kxS5Q",
  "key24": "4GeH4sv2rPLcizfKARexbm6Kd3crWkHhQh2UniG7wuWMGQ17q7y6dyQo43JAt8co2SQa2GEnQN67ckxU3TAELV4q",
  "key25": "2wr5S7NsQfKbhgi7x2g6fKRVAAomu7R8kmkvVFqPAC57qv7FsoRBHhD4ZWXteg86tuPw15aJHL7Xrq3psYv6KYbn",
  "key26": "3ZFV4b1V34adyy1ysUZfMStaLDGECqAp9TW1u5xoghmg53AJbKcH7saC7McQdChAppCTA9cwDVBpQviLmffpdf54",
  "key27": "5B5tVsJFyk4Vgg5MW78nbW5sjxo2NHnYuNB1KKuJgid3dTcdeQNKRjNUArS8VodHKEVN4n6TUhi5sP5zwPjvfyDn",
  "key28": "4M8G2DR6LUf36nthZ1wDsc4TXEihsJcxRf3E24CeoH3JiKAFpE7a6P4vLWaJGqAewmKkqr4NE2nYeA1WiD2ci9A9",
  "key29": "4pBCVsJkQczaakZ7K99nxi1CShjHiZb2A8HgkxR4fxrLfjtCBb52AseQqc4paikakH1rZ7tYzfZYcYjzdQXSFCE2",
  "key30": "56fMLJxsE5HeZh8iyDpBNafpX6oPAHUfL8X4eXmrCtZVrrFCDDW94iHT4wseD69nzArNhxCKw5zfnpLdR689vZQC",
  "key31": "53D5nQGpgNdX8VZskbyojr284f6RsTiYL89ad9PKUR9hqkk9APfuvjnJH4GoMsRy5kwg3wvig8wNX33KLN2DDLTf",
  "key32": "2SEP3QEprkM3UCqoEBKnHfsoqY2Zb8CgB9rMNjacoX78xHNGRpG9yj4MCPsTJMum1FqVRfyX9ZnsdrCacd2KNDGd",
  "key33": "2gBnyLuUp93NRYN815TPcyW54AtttUZEoGHMZFpuRCpz1ZZtCAywq9eGfXc5uH7Ri4a9R5zBWaifAALPZdYncRG1",
  "key34": "cAx3t9DDspwp4ywPnbwX8uJH52KditRC7wHdu1a3MjnZCSCQGqY5oeeykejeujYhncEuJzM3pWDGHskmjZRpX3m",
  "key35": "2a6fuen1HEJ8TU9eEmqyd11Xn3JHwHVDtyNX8St5q9YYmhAGQN756ibcAw11rRqfXdgt8FERWpTbcsR45ZiovLoL",
  "key36": "5HWPdVMXuW3U3G7f3BDsNtVgGCV86qGfQt3iu2pEUKRwwFNY3jXLRNAEz9FXcQ2YEoHP6XViUncZGDxGH2TeNtvV"
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
