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
    "28VT6R9FkDw4ztG3tkv2C7hYMAoPb7MASUEpwWza4BTmP3UPvAV3st9TFameMijcn8YvrxtgTUNSvjwkfcc1HbkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22i27YV5GUU7J2deMC8FQDBZzHTnxh8Jq4Lh9ko9f4Arf5rzrwdmq7d8acpFzZTR8UmUQzdKcJq64T78sjFqKBbH",
  "key1": "5pQ4NirpZQ3kPCfKj19eRW2x1zuwPEDNdwHUN3gRQUNDgSiaf9qz8AJGg1GsyQcPwroWjocpscMZFiXGXY311eSr",
  "key2": "2EevcAo11H9sWbzeT7UJczBa7uFcbsk6yKX72dMNSKXN7iPe1i1zXAQPDuQXw8U6s7ng7xHQ7cdwAxFSXYn1mofH",
  "key3": "2gpyj29xrwZ8bvtoWMBGX1BwcxW5BqtT81xrthwa9PdDziGbdELT791uFQ9Dzh5sbWMduxQ9pqYi2PzqFdG3u3mX",
  "key4": "2xS2C7bG7RFVT6EsTEu9jVfRrc2Pvchprd8bdfYt2JYHDyTgtNuGGLDcyWktrRGpycmfRBLqaXe56M9gL42vaout",
  "key5": "4sYXi7eUDhbpuHxoMSohQU6rhMHxDezNTNCju6S3wHZDp3dXc3qukQZUFZTjApfuXwXSb6VQXeLma8iZhzn3zxEG",
  "key6": "4WFnFRkjworfzk71196JQSi1cgoeS6ts4NQ256NKdMSWQ9n9qa4TJ5vhbcBYc6mqw5FPeqEhe1aduKWGu3cm8mHS",
  "key7": "7PmfhNLvhKqfzDVb4BakZzp9EQ29QoUAC96BmFmshNDuY469rN4mDkzFifKQKpUiFk77CQUYtzKwvGh8S2YSk67",
  "key8": "3WqTePKfTcwgoGtnwkhsgMadCBkdGYt3Fzz8MsREj3qD2zYAFWoJmxsq9zwDtZk3eV7exYhqaWYXM8gF1RB7RAd9",
  "key9": "w6zSfwurUUjouAAExdE2NbtspcMQXSV4SgyZh7b4u2V5LaUsh2KNM9MaZsgPTz9k4KmzG8HFZ2udVkTyrwD5xgA",
  "key10": "4xo8iPLehUXraVAGfxeziYjidkFPdMT7ujc26JzMw6s8nxvXqnZJq6WUMzcoRCAwa7H39cpFy2wAjymDJGmf469e",
  "key11": "3259rtuKkMGH4raifhnHGHrUTCjj3WLtRUWkRM4SXF8i76YzKEnRfm8nigYvvoqdrGbggLG4JDiFojJmdPHRXhuz",
  "key12": "JsPHqqtiVPD1qSz4tf1dumMbKzxxHnzWFTFAd8iqgoTdsfFAGESfv3BNuNgc1HgCtU8S839gpbP4gctSYRbXB12",
  "key13": "3Cu55B6CVhY6zYHrjfKXLxEd5APxGnbZMz5aeiw5FwDg489oaTcefV7LnsviUkMM9KLEHvm1b1a433n2d6ddX244",
  "key14": "2TNWE1n6REBS7sKCAEN9rPZwH8uzEZNuQWdkp5Gn6L5mGGW8GdG7FfrpkFkeYknWMr5GdQvYN6yMDHd97gv1bkvA",
  "key15": "4F2Avm6yFzyUhC2aaodT895iS7zttBaw19vZHY7zEpXMcCMHeFxNFajuZ9AKJdSFHqfzBcNLQtZiMcycYhDqPJm1",
  "key16": "2jRDU6aX2k2HUPzoYr66u7vqiMWSANjaS7iuMihooaqNsHPL5JGxocrMKkUHY5bPoGhpZAKhoMi4EeF49Pb3vUPo",
  "key17": "64pkDPce6AHzCpYVZ4kYiZx92qUFW4CGnMqLQFTMmXphY7V24yBcqauM82ecN8ftesz6FVw94YRin1BHkue18Vpj",
  "key18": "JxstXNsm64rYwjKVMbeTW1TUNao6Y7RNut7cfb7weTNpbGAVjfcYbCLhysjo8zy6eVieJN2LxDtutyGAgVJUyBg",
  "key19": "tv148Ls71noqqQ3WBHzBZ6Ah9a1HML4DyYDpRrRoAY2TDs3mPKiVG5daraipiXeNcPgRYLLpQiWQevBCXoH7wmj",
  "key20": "2efTCxV1SwfctYCQ5ZvrCNQA4k4z4dxXFJtVtvHHGWXYdBAwAKyTwqAnBqaJnC6iC1jih5NLoRBfQPqvxRrkcqy8",
  "key21": "52Nwfh4qiAMzE9YQKTJAzxLGVdT9vret3sBSCMA8tGXPs6DvxL946aLbt9E8NH3QLV1nML1oZXZFWdJoXLSt4hW1",
  "key22": "2spr7wthmpGbwEhDZHBDqE3NMhdBy8Y2PMraKcFZTdMUkgyvG9YsZGQHVGFEQvpYhgwMxM8hAtQTfur3GHrgQnBH",
  "key23": "5ch8ecMg4UE5f4HmQSSYHFZ77W9zdPacrzC1yaaUJwGYsYkw8yBmQVBrfgNEoSzE2VMK7igUWtVs4FB3BghxmDyP",
  "key24": "2j83XyLGMvTFiARwpSeek86YiJmq26XhbWFdKADTpa6fWffbhTULpa2Kt1966TFn1mXYPVyKXm4otc6tuhDGDZp1",
  "key25": "5duaDvB3fvoUnQwqojqe4GvsP7xQybf5qciwtEWW7UtMLkSU6ZLtSEBm7kmyK76HiCU41oyUzoAxjd8YDhMfVA9N",
  "key26": "VUxQA5v6ZnLMcHTh2DHRdqzvfDy8xL47cw2MshG133PM3UyiN5qLEod3J4wQA5hGeNACE7mbVQwFqgLbYoooijP",
  "key27": "2FiTWSmRCSA9JpGU1pGeF9acZPQGqAyoJdsZKn5vQLnLCkpxa3YTsX6iJ1QCrBUaWt1tTnSKPJGWeoRi12Qb36zT",
  "key28": "r3DN2J5tZ1ZmwAoBkuHVMTobUbtSbEL4TiTiyajq1RCy3ksrBVZYuojVcXdrk7u1L9ZEj8jCrg3jY81KaBfCDQn",
  "key29": "55fxmtbtdsDHwePkdYUvtxJ5nb7byWSoDbP6CGn9oVfbhRP26a7KMoYcNzvLhsn4DsddrNqR3hNoVR8knCprNBRq",
  "key30": "4D1wfNGSjKL3p2orkdvqwyqNe8AXdvyoi5Y8ByQzU8xMbjgjbj7bBvQJ9dPz1SPNtPWSoMJ9DnqEeLiC4udZSiv4"
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
