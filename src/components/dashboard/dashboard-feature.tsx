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
    "2h4kTUDNfi44zhMrkczQcX8bPjDhc4NitzJ9NhEDZZSyS7mAo93BsPsG2wUoA9bb7JFJbjgXCtKDrdDMqbpzKP9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8NsRGtqiR1mT6ZLxFw18i9nJ7XFqKEeChN1b7QVvBkKu4WecNAg3z7wfH8cZUHJ8fpyPw7sn6a3HCgXffeD9Ce",
  "key1": "UuDmb8VB9iXbhUgiHCFRvLkLCYQMhMMf6wSULD7zN3j2yoTH5YMKPHQ1nfL1FqVYGgSMsz1fUATkk9yGDfuhiRH",
  "key2": "HaVhKfbx9DwtE7WJyBcFzUwBJUSDUJKaWvhPxeSbCYY5x56DEyF2xcMu9iUgYAms9NpbywRJXr63iTxVoheZLno",
  "key3": "2N41fqyrkpzqP25HiKPVDQEMsr4dZJyFddEjUvUiGZuubhLKzdjBG3Sf17w68qdr2b1Qb3xnuJ9H4GG54QEtNt5n",
  "key4": "55bhTv5eiKj5nFTpUkNsK9tvvhwRAkMEFK5GoyWWaducfjJqgqM1Cdp5q8yPnSRwrcZ2YJnJiHgN5uqX7vq3EtCC",
  "key5": "5MXUUdcv5vcR8aggbwh2NkyWMYHgfB5S3Wkgx8pQcuRkpdna5zC9Tdvm1wEp6wfkaPZsfH2f51csHBtqK3nfD8zX",
  "key6": "5W5R3CgUAt8pX33YUhEnVmYoGPXcZGQqHeYDb4feof14uxgdrJ7jDSRtn8L64kZXinqrUYwqKLE57YYJFX7Dq7Z7",
  "key7": "4LTBgrbnLkVJNNNpYfKdF3421BP9Ub9kjg4SdHpxP7x5opeUWJepjhfZeWebWam7iHAbz9zwf5rkrFtrSiAH929N",
  "key8": "42Pnyd8guRyCmxT2VBggYRjg3Nb2PjV6FyTheSUKjm7fDquFFz1rEEPfPafeta8RJHPebDxu7WLfEX2unbwq5h4c",
  "key9": "CP3RJtXg7VnbaSAuZw4DSq1V6k88pfpmWnnKfAWGSSa3yVRosqZPsMwxV2N5A1iydogt6g8xQVyM5VrQ8eJpzAQ",
  "key10": "2pmB1Crpb6KeD8JKZdj2V1apPk6ZLSdsexYXq5NTRk2uCxFH7LfRuM3TP7jEzbL2qoK1dMfaQBkNxcpSXcyDRsLu",
  "key11": "K9xV9G9RWZQtBGUejEaCGFgMfqRXG2d9ZGsVSeXHnUJpHN6FzcK4bvRVAx537q9ENMcomkkQsZiRL9dtwGqTUyG",
  "key12": "xP5SYENHNAQ2Xfno3u1Jxi9bjZ5tZvXjSGgeJNUxJZr5GPAG2grLGrPoh8fCeBbEvZsG9aJ8gc9ScsWLncrhGKL",
  "key13": "636Vx9EPF7D6GfrfjXndc5Yeth4PsuUJ5CSG1kszcUozQtY3XATgGEfXKb8ScGim8VDZNW6T55ZGQfETJ2zhfUjs",
  "key14": "5Sh8hs1Ue24Xfq15BvhWtk9tWgQcysUigPGR48i6W42pWC4hmrVQHH64X7nDaXqBqrKywxx7vUD9w9Dntk7sPkXa",
  "key15": "2WsVyzKN2VoBsmoB4FLdKCWVkUZb9jDKEhXJ4ZaVN8ncyoGSr3D4tXH7d2UTLSYLvwQCiESosy2JgvWtiiQ7Fusw",
  "key16": "VS7cGYRPEoDL9q5GSWxhLJ8JmswuC68eP5sGT7BsAk1HYoUn1bPTfaZY4m9Qai5wHxTTwykk9pCFBb4QAX3tjYT",
  "key17": "52nVF1JqAUi5FET7qj7tw8BXNhtZ67Eebcxh6jwKBhihzNCpPCReDwR26Hg9xLKvqRFcDrWzuUWR6XWjSwjEjt2P",
  "key18": "qywpQqtRAwxqBrfYARxsGG5xQypqGY5hj2kwCpaXzhfb8o17K4Nfd3QpBUUTFMhkA5r7UXNune6VQuvsApKamMx",
  "key19": "3WX57FHWX5ahLnTVwWbHdJKhiWLX1xF31X2J6LG2shn1Y9vRGiiAgeq3CsCoKU6Bh94opRVHDozJBwmGv7zNcXuU",
  "key20": "zmE327xAWSzSzMfStimv9rDPLo7MJ7orRYzNP9vtDyLYkY4Nqx3hHKXkZhbYAD5nMnhTdAaecHao5ALbnVav1dp",
  "key21": "5PCDkcXMXpDNXiBTVaSVBuiwJSngiQJh3c2WGzcAF4c7go2h5aS964Uytqi8wXZz7wa3uhwM5t8pjsgmCvfxqQDg",
  "key22": "4Np8RebsoF9Af9R1eQKaXo959TJnUnBWguhBZFwTz2gMqTycpq8UrYAJz4xo2sN58VkWVouMCMzdXDtjsM5XiVBa",
  "key23": "2zgKKcmSEp1Fo8H5qM9qrGFmA2S183TpYyAsBd5FANsMDwMdyqyqCf6yKZPp5dFHp5s3s9cMGw3JUxT7pfQuVR61",
  "key24": "3HWjLszWVZ4TKyWjvEo7V522NS5P4Kx4VuiPXKCqRibXoma5Hckz7LidWHrv4Mq6sA9rXJQ16RvHqx9VPMZNxRhH",
  "key25": "5Kdrybr1oM45Hyi65WJ2kvptX2B8WfqnAFWaV2qdKiku5FTz5CEUgHayhTyiqSKReoJDSPh8Jc1nX4ee3ELd2GFL"
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
