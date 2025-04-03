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
    "5UdH54VngpoebPYT2U72MMEWTMPMW8RKV7p4wVWg69UMSMfQ5KPfLeUV9mTbm7mc2V8RRzwxZvVrBKeNJ6VwxHdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ef8ANyPLXBF3zvtZza88FnNrLXZSAaijytEAM6EjtV5HbhPCKU7m6TCqvCwad83WXh61Q6iMEXsLrDawFzoL5o6",
  "key1": "5bt32YT1ep4aBnJo7nDGNZfuJEhMzwADgMLVbzRCQFacTqFAA4wA7S8ruWJgcR2KxkCZGsF5ipHxaCr3HMNxTmof",
  "key2": "4Z7REyDJgeTAdanPHCz3rW2izoLL2Bihtxb5y2Vs7aGaMWgxywe74SyeigRvhhfX4FFpRJarvvqwKowB1RzhE5T6",
  "key3": "2SWbAiy7J87pqqKybpmztVtrHMqBLzBCzGhbLc3tDUMB854YXLPDMEA4GQdNC81v8GzR1yAyu96R2zQzhkf2p4q2",
  "key4": "2WRbfuYxRwpBUtqY2QcgfhpeqyEF5QqCfKgtSt2rFX7orkZGYow6tv2kefUsZETs59d8M2aeBC8omVX2m7yhoYaf",
  "key5": "4yATb7hYCbHfkLnSLVd89VeGtVN1USyyb3HxW2Ju6Q2aSDubkWYTESRCYpsZe1A4DSQ9UYsSLNKcPUGXsPMtLRM1",
  "key6": "5smBhManTGL4EcwD8hENCejs9VTHgUe9vXnmjXJFtjgME2nnNQPZog9ACjAtEGMjm87qeeDdd7s22L5VMLxELHZd",
  "key7": "5RPo4AHmtYVvC38jnbW6kwrzfDAjGQQfRjzrB6LZoDkTQQZP3iDGEoVHHiGhf5cEkw7mf5MYT43mriJRrX4UVZfu",
  "key8": "KjkJd8L5M376qbkCNPvRhkf9qavdQjHDwd1H3Ee4hCtCTyGDVqd8LeSGvxmvU82JpSzEaBpDKt5msRBZ3yCFLui",
  "key9": "SiaYPA13ahhXCMB4oTGvQe2THZQdXAhyM9JGXhd4noSaVKymzoB7CSTcnmkrTmVZMdAvVy6eFwEc6nUAJRj8dKM",
  "key10": "2ZP1X4wEz9bQArMvZ9N77s1amWYqTbDAuGC4NRTJxGJwH8VdEBKKX7kTAeBRjfpHuseWnPwpaMvvdMUTAoV1XGRE",
  "key11": "2wqLXuVc7QHwM1WZaXiEcPPrFiJWBdTgjhnVvZ4uuJEaqSZ6igT1xodqSyHsC7rVd6sEc6nkzL1raYT2cNQkwPT7",
  "key12": "5ek2LY8ZNx6PksrqazA8tipkD2N7nD5jSygvQPZ6yBb6s8hDYaWV6DZKov6oWjNjzoUTQigVSsHzLvnDuGan3JTn",
  "key13": "64YjsEmPbrmw1ZLzSkA3Z4wY1ha1ZU1ncLM3iCVvqSHxHoBRY2s9W5ir1EvBR9CRNiL86AF1EkyvELXjcrb63r8W",
  "key14": "2gxXjqwJAKgGP33hXVGwxAe5YvxR1TbhjJeSURPukai3ZTHgaXf7vxLvjSsbi12JLdhMcXVH5kkGkkh1MmzG7QNo",
  "key15": "4wHZqvA4MyMRNjMX8KfVJsPcoQ7GZMgQdm1nTgPvxaLmUCsgCq3Lupc8SAKUkTfDMzHNk2Ao2kVbhRXDqgtUkt2X",
  "key16": "22mAmAUjfQRhZUC3FSkFPyTZm3DKf4FdQatiJdroqSwbrhPXSYGyXbXmVPXiThvnAqWaKJWX6pkDJUh4f2yY3rDy",
  "key17": "51BCSBVS1WCRms8b66p3eqoB1mFSwwNVqYxtJyCcLxGBQLvrBwwp26j3aCDMHGSQQSHBVGQeLGH8m9nTrKHZoyQM",
  "key18": "2JE46xdJpwwE6zmPAXshKBhvfoz9diTpxaEuJffMefxAyErwsW1FZPTVSwvMdvzFhwD9S3RkBjmu21ANsj7Qeeq",
  "key19": "33BFSgthkgamuuZkEg18esYbzLrXzJtMRC3MQHkXwrTAoYUPm1fFJEMEWiBmJ1hcPmAv6qU1r7amo6oScFfyPQoa",
  "key20": "52HGoeYysgrBwpqSFkFVfCcDJ6wptKfAZQq5bWnVrFksWMjNkCvh5KpY3H1sJu2xCyiQvMsR8XouSKNZ2WsyxivP",
  "key21": "2RN1MKU9kiWjjSPNCug96fHCbVoGm8h1Zy4FjzLXhorW1pe9RE2qAzNZ6C5uZRCyR7BHHmsqUj3G8MNJ1H3sWymb",
  "key22": "29sHQv1Ek7o9zWkCAixywNAoEG3BZoVWRFR3wuWPggQPEKZQpwHME33o57qjzJtYJAh7WButG8sViGCU9BnjXL35",
  "key23": "3sSJ2u2FmFeWkX9duBbQVHVdCsuF1VpbhPzdjFfStGwvsX7QMXsgEJdfNB2RsG1BAaqU96rSdaR3PQe43xjwqo7v",
  "key24": "2YsVKbrsuAC6XfUrCgQwASqJoiQaJXJzb2XaUXajo9DCi3XKtFWGP9ZeMMaEEvDRiAkvxxpY6PWbAj7GZwTYq8Pv",
  "key25": "2pBmD8RxThG5vCEuGE5eFjNgXdSxpRLSRjHDqxkB2apKjmvJgVPzu4Fjddnca727AGknHhQ4VEpQgvEa6acR8fAP",
  "key26": "2K7jNgZpc3FB9h5yqxhQXzc9tZepgfCBTrrsCevgWrfbQo3rfLK1vgrnXXDrbFdwScebFTjjWYrqqQPHJvKpUYdQ",
  "key27": "2u6oqiRNL49rSfNLjRwJ7YS6CtG1oYWtcsekz1ogVpYCrKHo3majuvyGzgCJtrN5BEHK2daCVpdV4CALqhHcB6Ua",
  "key28": "39ZCrTbD9uowRmtj9mv18eXYjznkYtEsXu4fxwEDwoWPWA8cXTq2JYhyNW4mK964gt8LanhfBAz5TUQzfRbkM5j8",
  "key29": "wXiUZgxifJSqfixs5Mn7pbBvB9XgiQywiAG5pBqgkeWGBDkYddzxD7n5hx6Ge1QPnHkjSMA5jg58TAhKE8GaAFa",
  "key30": "yB5wJr4Pr13M3kbySZxtowkv6hqU5adDEJNQYw7dTzqD8Nt78q5w9UEdpd37suY5BP24CxHh42PT42qgAmDe7TQ",
  "key31": "5R89fw4iegXoP6JFCj7r5rZD3DwvUXZ7WCuEiU7XASNbEXEjLoBZqXoah2d9LqNj6YM9iW2sJS4JZLapdGbEa3hz"
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
