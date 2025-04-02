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
    "sWEd2zr8BroPjWuud6wed5GNLuLSVKjxbxftiiPSYJzV8fN7w1aN7n6xmuyuDGNUn9n1VHqkz2t73W8mbx89as7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUYuTn3jbhxxGWya8HveavVH5einfCjGiem4j2XKPzjkNtaPHAV8CXRyW9NkbXCCVWJekkHWcbk1oFY7ZD4f6x7",
  "key1": "2VmVus978A8NYdGTrbzDzJ6HX8hRhwb6QnmU6G7Mq6fCx8ZaVb8r1cDf6Gm5TEX2uBqsnLKSDKrJKDWtwQGsBorh",
  "key2": "5AobLzbcVr7ZWdwzdH5rvP19Gg2fU2rZugiV6NT3o6j1wLWe8R8prUiPiDhn8ZsfoZUxeyf92CZ4bJmhsu5VQGbF",
  "key3": "3eFVy6GsxhL5XstUYbtgiQMqW1kHKKytbNsL5ssPHvkVGyNx9X7nMJ5kcwDsxDvPu22VszwEcTTTV6CPMAdEANt1",
  "key4": "2eHmxxWaj3ryqv9jkGnQ3xTgvbAMCFhkbsxRY7rKFsuSosvnycrcSEFWohsofswXmvh9R4WGM19H7kZx65bVvb6h",
  "key5": "3LSxLBgBHpTMdcNxsfKPGDPnGHq1jApYVN3F9arNqfE3uN4gBbwAqtSqrCnCJsEo2VEFPg2Ey8Afaz3nFBCaX66d",
  "key6": "fhfnrYbKgUi5sPG9TUj6hTjMH5bQ1kd6JHs2kjEYxFQkb32VKN9FeYmSNQB3vxNhpdhA7CtAZz9AHJHaVqyuqcD",
  "key7": "5Sq4K2m7KHMPB3cLkQbs7PxryjPhmtbmJeiFiCCrL5Xk3E2DYyKNECCj4qoiAL8r6irZrAi8Xyi1kw2mhkcXfHCU",
  "key8": "2wMtR9evRXgDhXQuxyF8AzzZEAsi6CGJkLu3G4196xfi25cwgdqu4XMwX197yFfPuRBG9e5EDoYvbCgrvWFgevDt",
  "key9": "4fZHc6M1YnPHUD22bxpVdahV4rmzSoe3W9r7QXSmMG7bhoXodA6ToJPCXtqKLZ2eZmN9Em9sn4WKLytBnPjByf4o",
  "key10": "2XbxG9S4gda5DwveAXyy1EHvWpNZe12Pm9Kkiuhw4EkDwczfwqFQTRDT7vDyHqa32yoCqiDu1gv1GhM57LGX88c1",
  "key11": "1H2QQzEL8AEBtUSmTWGeUZXA8eTBYhxAE7XXjVUXY7J1VHnp4HfWWBjn9gd6jz2XLzazBoLv6j4zipSeahFZ3Hx",
  "key12": "5yP3k1Ua5cBgEAtDCSXqo6Y1tE4nuwNdcGc6phMSB9KfQJqYrbtQfdnCkrcWSVGAm3n5kDYaEznnppFW5pCd44wV",
  "key13": "5dGzxALCsHx1DSVZhkij6kMYZv77xqJ2b6VGVphswn7R4XBjGT5qtf9QGQAZqyLaqHX3p9FEofw1BkXvF5JENfxr",
  "key14": "4sArVddaynHPCvSo66kVm6GZzbm1DAmAhG8g5UpU9JHbkAkLqvtGo2Rs7EKSRda4uUhsidjfhgYjT6bmYig4rbSV",
  "key15": "5rt8A5haAdqh8BDLdsHNvH6gBUyJM6H7DD3AvcMEdSkjaW2GW5vZDQCV8L1ZZfBSVospyuXNbRmNTF6fRhB9z5r2",
  "key16": "2cNvXKDSveeqCCXno1K4uZBfLy6816tcgGYG2pyw5NxD9uHksNaxjJWxBRKrX6fC514S9GGQnLUuuugqCRF6ZEZ7",
  "key17": "5Nd727MK8zBV5RCX3J9VWeHzFjtb5138ZSo2K243N2pPU9khUqN9oqoqJyPpu8yYDT35gMaZkXpkFTS7JSXkdjNK",
  "key18": "61RKwYRkP8rC2yuWCemayhXX7NVYk6RDZmZ65YEV1F1b4yBx5ooEHmtrBMKY989v1GhjLCJbyyjQjmCo8G5qx1H3",
  "key19": "rw5RZC2bijBk762UyC5t17a5g6EqhrXRd9P2MEofdqdmKTbYJVaU4QJ3yg9HPmWg6nMDx7fea9gbuRohpTT81gV",
  "key20": "2epnrf9vQ4gEUyhyE4WF31Apu9nq4nJMqqMXYw3JaQReFFJRvnh5tNNSoK7CLrpKrcSRwLJ4Wn3ncu2ceF9ivJG4",
  "key21": "2KbkWGZfnPqv8kUySHUKgxMEGZdaRWGPNijsrVZDGnygi8nXAF3SmUhot6cS3eGx4V4HkRDiZd2hbZoDdK3iCJRr",
  "key22": "4C3nxoDbrDqz9Huzfk6G6ms5G2GCQhxo5E4oeMqhyj8bKr4zs213WJXrPpU49rHgSjeDRQh6sFJzNEwnLzh5VMA4",
  "key23": "29WJNXqBbACW5Z49SFsuixF3MyzN3pWXFvJLuxJM5ixMgA9RzYd7kjQMsvtMEzDYWqDAHGH9gzVE3dZpmMKohmZD",
  "key24": "56KpSmFfMzLoWCAyh2TTj2wYTD318Yzee43SUfgS3Rn6QCaMFVwdgjm4CK88os1bfo23ynzzVm64KHddCySyKi3a",
  "key25": "2wcJKMwDswnwuwMB28k1ubLfiQhNQpezeWXWLusiZGhB2FYEt64CaNgUPRoAkhg6UGBS1uy1Zq7KWErFFEsvVk1q",
  "key26": "4J4dB9j7LLbKoVjzfHwdbGp9jeoKgHW7xKFzRcbhaGqhRTMMRLNAXzFEsTtXoUcCoxUWZpY9MgFoXWdNTUsmb3RE",
  "key27": "63UF8xitRnoe4ruKEKSNnw5oB9fREB4KR9ZnULoeMZvvqUECofQRXNeG9b4MbvfhzDoNLwg8eAMdChoHAqGrdX6M",
  "key28": "3RYGx4ogvtKZvvC2rn9kogN6NGrUNtzJb33rm8hTQX3wcatD7KXPPgsi7Yiq9TS5KXoFSYr9GRawPwY53nB8NjWg",
  "key29": "5AkNQeaoW3APqCT7akiceGh5KxsGQJJ8GkYQK5DZuFUkEkG337Cf15ksr5pmkyBz5tXoqeJpdWQPe5FszdB2Jpwo",
  "key30": "5Ewn4sdoMMUsTUH4FVqtKSyTnZdqqFYwUWMChJkvpGvRVmRHVmqfCaGGwd5cp2Nh4efygWyBzjEoHbNnjUDRowdV",
  "key31": "61x2eCwycUS7Gf5bSAGhsU5MW2dqGc63nWA39WBj6xKj3HruQoSYppaBy8j9RBmYGR3PuYgutitz6A6e192VLWh6",
  "key32": "3HR4fqePXLJ4N3cEhfSu2UFD3RZmNdUD59YdguuPU7eNi1VULQ8vMDFctidWimK9MwAXo16bVb5RKiSapzPoQxEH",
  "key33": "1KSnzM9GkaNVtNUw4ef2naNHwfE22DBWP64Z4QqVnGFueJg8k13J5pEFZpc2Mbyg4YTmHh9sNpPd194j9Feuf9i",
  "key34": "4w3qsrdnoZrwBnXirpJRCb9nP8k3pv8jY3nfYpK3YuenJLJRGVWAg9KHJGsDQam2W6zuyafKeFDCBYZYRSvaviSp",
  "key35": "5AaaSvu8xCb2pody3wMuqWAZKtox6vRngNfxEuG1XFrD9cgKsQaf8hH5YEB6T4jcxJrwrFc3khXroCr84oDxZdnK",
  "key36": "dF4CAhUXoZrJk7QcHom7YqTtFGLFU8ay4Q6dqA98KJdkPqsGM5r4UiXuk9JorqTDiq1ncg3J1tet3UEtm6DRRtc"
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
