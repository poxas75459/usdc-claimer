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
    "5CK3qSdkD63d5M86uKSqDh2t6ZSFWwKs5kE9iEqiwbmPvdzR9wGgQyJKsXnPz5BCY2jhFGJDEPKwxsmL7jqDpp5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgmppzNoZVKgnyoU2tLn58bLnxazH3fVmFSv6zktXhCGnuNgS1cUkAPeuB5Y3SmNsJbtixYpK4GsnFueetmoW58",
  "key1": "4vPBopj2xLsZU11G3DdRo5Dzg8QCbxDgYQY2VEB3twRXNnRXv4Gjs7i3tWJn7G7D1sMcCqjXQ7V53ARkzZnkLT8e",
  "key2": "4iJ6Bd8bnjfPbTixR2kY8hY2R8XoZh7cNgPHG3csXsEwDN2BT1heFitjSk5GAavnbgcyVyAfq9vC6weYMZrdHvLq",
  "key3": "5m7TvEZQHAFy3SdsuFGSRjK9uD8kVB8BAa8BSrTxFCYVMT8RnViYFNB2F8iybjFNyvXtfzGWwAq1QDmLrnhbayC5",
  "key4": "3dD7iXzpXkQa97GMK7dN1U7ioGACQKtpVztnYcXbDypV5X32d8Us6un2xdVk4eva1ofRRcZfMR8fFxZkSGbsiwhc",
  "key5": "q6os4TrwBMZCoB1StnnBNkFRWrDC8jVkKWMMpJQvqb1BR4PEavdRdVBVZQyGNoiuxyp2L24svbiRbgCLMuSUFbq",
  "key6": "5LjE5nWSDnubvFeV8k9LZjE69M2SNqFMCi1RVVC2i9nszFmXdzJv2KGdEs777s97EdnwrjKxGkibcviVtYnnQ4W8",
  "key7": "76NSuPH4sppfGYXjJvrjVQQXFwFAeYHnZgLbv3341MTWJSWgcTmqmjBMNPfL2QPQE4XfLQG3b7sTSWp4qFH38XR",
  "key8": "3JEUz6T95GJt17yJDcv2qCgDWB57chZEDEy8XqQh8gzNzmu6FrZ8on9RxUt9SHFJ8T8G66gyVc7J1Vp7rC9yZdhb",
  "key9": "3Ardtkh6PpizBNwpZQmuEViDKUE5LpdTa1ZxHbDgcvqvhsCxQSnnGvWHSKyieCbcUmU7by7zY7BrPLNjgKDYVDbg",
  "key10": "29yi7xCaJ4sz5ByBu2kGPNLAyUK8hE9V41a4hzYzM9tevFaKkpreLgT1tyVrrV2Y4y4hbHS6c1FyQneXm8CyqVYj",
  "key11": "2atXAxSdJFm9o2WVv59cKhNe6iDNRU7TorD8gjP8azsSRZgaBNyfTfB7t1bCLAPJxRf7VnF86NEMhQYqUseHLwec",
  "key12": "2jaq21kNS1LcVGsYAtBmPHFbnNNt24gHaykynRkXEykSkaHEUvgft66aGg4vTSp1Bw8tXT5c8bgvnzJ81SXo83Xr",
  "key13": "52TrvLGNF51K6TJXnKZGmyXnsgMDzTBiKdGRg27Usrmj26KYKoKjBC13QakD8UXbAuY6zgkLsMS6GM61AweRN1bk",
  "key14": "53BcAK5odJXSFfiHDSgNBU2p5DCFU27cfnLSNr6oAqPbN5arqEjyftQ4QEaeqXNR1bbccs84NmWb9i2PzCyavFTY",
  "key15": "4SY8zhRSYwi624Gvd7EmgKpkFKDzMdEEcaXRZpeunPqZHHw13oVfcBxZytfHgP7fDAPbZVEmNwdRoTt8wAYVxfbS",
  "key16": "3hoHtpPwuuj9eaGv31HV5xR7RfwdBtmsbGuKuSXxvrb5gE2GGPzzaHawknAzjQNRMMZwQQRsUtq8v2q3bbrdnJKg",
  "key17": "2XVT4vhRQ9Dr4CotH3LdZZN1rtzDxqtyKyjyCKayHHoRtYDLF4PdpUPSJVLVpmx1stWpH1AmUduor4zuuhWdpDcC",
  "key18": "2Fxf6GjqhUNS79RwTSFmbq2QkK2vHiV8JarzkNvVidsWSn7CDKFCT56JsBMX8CcFCRxjpJXoo2EYjdbgQqZt9TrF",
  "key19": "5gNJLY5cUn987LT8Cp8bL6kYLzhFu5hX84WPTW9iD24JfgNbR9e5PMieNJGkHo2vVwMTBZxgab7d4nV6VYAXUVpd",
  "key20": "3SYfeGERccm8y37yEU1tCWgmKAQgSGenLYx7xzoA2YZ8BtpZdheSQXf7PjYMFnos6c4fVwrRQeqVatR9vuyP2TDj",
  "key21": "4cNT6XyaxzDkjy7hN55WVnDFxajB9b14SLSaBJf9E4tt5ZuqfJ1dFhq2KMqXebq3vLyUQMD1nq2PZ7P91MwzmAGs",
  "key22": "4nQHp3F4oCchVLw85sHAMvquoZNm4pygcqn7LveWNjyjLV3ziE8jwae166WCsBoRzZiyVaF53ov6K2KhK3kbakXj",
  "key23": "PvbLdUBCyEfzifgt8nzWsdPPGErFTJ3xJDGLmADGfECPctJ4rvps2ytjtp8GKXWFQiWBmqEHgXqfXWhA3rkZSrG",
  "key24": "3M1PxwLBqHhHmS3GXjJz5Cc2xPi1x7LH6Q7xAv4CJ9Ak4KCNUxmUPbSyuRdv3hodJYfACZeTUDt8BnyutLeyGCuz",
  "key25": "4RdSf5wh2bUzecdJm18QLb4RY5GhrXskhmpUAck37dJXyxbUfE8NPxCfwPTYZiQDKRskSJanEbWrsEXuirBxRBBe",
  "key26": "48hc8KBBt9FDVyLyyxxstV3PNNvKLDA3oQMJgJ3DShSiPQ9pMUbiANSAPyVC3eTvRc1LNnSjmKvVfPAg7NsXuK8Y",
  "key27": "5ovBT3C8izMFyVqZFVcFMQy54U4AFhJKGWhjruCFuewSXkbDx2tJjgcXMkuV9mHnY1pARByx2YH1wD61rJw8hJan",
  "key28": "VJCcdtVfdCkCdyCtPnVozKcqrtZ38vydq3C1sZ4r824567TpGnKkT1hJP18vZ5S5AMJHRtQv65S7Gax7N3wjwvy",
  "key29": "4CNXHNGUWHqs8TnAYszGEzBMDep1McqRZKcvGWvCWQgGtZwwvefwcoNP2kB35JkMCEwddCL53VfWwpQQtVyD1cZf",
  "key30": "3gnvwonE4AhDgWjUJ7yZUA9V7E7w3WUnz5SX4dLcvWqL3dvQT4k9uLV6ACf34WVJhHtDbsduhGniUMZMBnUMv5YF",
  "key31": "36CoEfYSn6WxL8StnREZeXHe2cDVhG34rcrmQiGc5ZNG8vxEGDJoiBAucQ5XGWt3gTFJu6889zuqbJcPhx6a4ds9",
  "key32": "2TB3xpW5ffbzb4UjMSMhGasB8xsVMp7Tuey4CsHun8XMXidJH9Zwc4rNRzPxNp4L5HakEw2ZvMmCTEhZ6jS2Lv8W",
  "key33": "m1iDoYfaLNCG2LYUXXyv7y5ifhXH79eqkDpxA64zR9Diy1G6dUzoCkXNV3GbxpzMsdxexrX1ir2vhyeyFjaAyPU",
  "key34": "3vmARbZFb7cZpcxfvxvHuyLdYhthbrBRkpggpphtQSKtJED91gVYvkDoNQ842DMwFnyg7boHdrdbukdgaQ7LECLq",
  "key35": "5pKQFWoyHJCxj6u4SDS7yUqo3k3P48jHS3vuEyyfmsM9FcJJVeCdaw8sonTieyqJ5MXzAxpMRG1NoS2kL8k2HjFs",
  "key36": "2zh1aKXMf7FG1vo48vyhBjuVFz2gVEXQthzGhqf8HdscrheRQ4wyjErTkwNVjL4DUhc2YGp12odsFx6YYZZCVs1U",
  "key37": "27xCL6B3A6oS2Cj53FMCx8tP156N4QptUMzRwsmTUcUUW7csiBNKXSokFAKrTigBbgKDLpds7WwKMHvVbcSFkKeP",
  "key38": "5bo1FVWV9t89Q1k789XFTHNny4j1zVgnLQNr3fvxTVhT3qRjVu7yeZhMEy9BW7qcpQ13WVpPbir7jXMPiLD3dMmF",
  "key39": "YCfR7Ru5E3QnxbSb5iqjXqhj25SNAbkAuerxbmofcTQ2B2PCb1LyazLjDe549V8FjcMMQUCphZx961yomfTQpnv",
  "key40": "5Hi4DB1nGy8xzf97ArM4Ka2H1So6X3n9rcMKgPaKNV7Voip56uTBHkqDzkzu3Xt4m7qePDnd8Bu538hWDViEEe1Z",
  "key41": "4gmPh77mxZuzo9CDjK2sE38EF29tfdxFmBbKpj7vAw9LEtGDBUx5Fu9eC8FCH5VxPhNerL8JMix3WoobHFuLHjCX",
  "key42": "4sa4UoizMPmSuiqdikZySL2iiSwZ2ut7epwUfArrZbDUgqBpbU9uFBN3xXenBxwErKYY5W5aAMq7yXzkiBbDfqzP",
  "key43": "GMw2F9ajDCWLNC514VmiwN31x3tqHRWW9Y3NLJL2S3tcabiSWgcWdwBkXDjXbbZPc5uYvHCEWtGr9CzQyZvn9nR",
  "key44": "5xRzgfkXkKzfxjVcDkxYSpKQihepBMHkeAHrhHWYmtCvgnbL6AdSre8d4fnApmAvtucLMxXYJMJo4dq3gqhZy4NC",
  "key45": "4VMsPNbUy3D87LyS9wzVFNbKQvdvyyXqsid7qnU5sfisFaLvxfuHNoWGMrGKgPPL36kihnHvh6MKgZ5Zug4U8gT9"
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
