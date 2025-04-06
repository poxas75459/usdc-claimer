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
    "3eJfoF42CjpjYoZXTQfBvorxiA2j25b3jdTrVpsSSxBB2ypifLgoVSck7v3s61Jt6NRaDxukeBq1DgALJHJGSA1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbcRSdxk21sdKaxPGgEE3DsWiogWqVVwKG1xzUVXPHD7aqU9tCuKeJwdceDAzEwUPdhgny299w9RAtkmvJS2gLm",
  "key1": "3BUWEb3oQqo6m5D7W6icuz6xt1P5McP5YMRWjzvD4DCFBsjQzdFpKoVpoSqG43enfKTLPvN7HJ8jEXotVEhfcmbf",
  "key2": "2Y5jhswCVmT6JXPGht3mHzUgH2JsfHBsShxsDxrQGbdprQZJkKid5DV1qmNGCsfH47pTD4NQ9WfHaWpVeKQ8aZuh",
  "key3": "2GmMRS8WkEggG2ducZ4drUkoN3F5tdags7sdje2Mx6M7MNmjGTqgSFNxMoQTRygFqpvKVfCSq7xzEdy5jXAxrYXm",
  "key4": "3YUZDWgRF6vNdt7yo5shNu5R5VqngFXJomYC1CR6YA4b5zTjA3c3dfoRrfidGxWMF2y7ivntYyuChxoyuowuKikm",
  "key5": "34Gc9byyh7De2vsD5xa7VSBjziKM28SZiYM3EtLrRGPHKefMBFfJyPywBZAPaSmSQYpvqr8cARpR7DpqRefzZtY",
  "key6": "38Cho5j4vE8SCgpgpiEuAHYE1CVFVKtpPzkDxfxojSuTDbadGGXVYLKnwjHLT1Ps12d9rdJ2siwZhCJ57MSDVhek",
  "key7": "bgcBEAeF7stF7fp6GvR1qWY6DqtsS5i9L5CgqkSanjMbfcLynQkPWYxAoK23hWrAky9qW515KdsCYL7n89zRe5C",
  "key8": "2bV7J76n6Bj341VwoQT8EDGL5bqeXLPPqYtNt7r936eE654MCPmqsjnTwAJftR6Y9ByodWFPzfhNfVGsCfZ7Z7Kr",
  "key9": "fsqtssDmTbXYdURqYVX1CwQjtWDK1WS7EfCvZZPwraaVvh2kfuGEr1t3V9q52w1kv4qs4G3uiDsbeJu8dhnZKFe",
  "key10": "3kMTjvugFiWUYu647xD4KczBo7cPGNFXqVj1EWPrVPAAcAFAAyZYxsqDAFc9Sm5a59JExLCTdE383r4QzxwDe9px",
  "key11": "2qNF7aMkWASDUrP6QPkXTsduBbEjyVYSwjYz7Cy8ueJWMvHU9DGBgye2HzQGLvNM7x5C1Rbexj8DEUX1XjmaSE7",
  "key12": "7hoYjh6skWhp6L4DZNVLW4Kwia8QZQW44mHa1eWVMWhtGgigtxZcQ2xA9BjVC1wAq1Eo9P8xzvtGJbY4rYCKwXQ",
  "key13": "4vUtd9CAyzCa5ifMbx5brxERjyUSwYfu2x72PxoswfdiCMHrQuoAc2KThJRh2EYZF42PDPnSWY5JZGmQUjxKroht",
  "key14": "62YhG4USq1o53aqBNqgUzGyG1od99Ecxk5xTHNEvpTtimXczi4LMQBRhfc4pABFwDJE7cBsfD4Kt3KRe6qJF8Q1f",
  "key15": "5jmwGqRTvSnsGptk94BWaVGzuwQQx4kSZD4NXQrSQHYrQnzVbjKfzjujBUTnZfGovhKYiyDxQKWi1iTTRKFSk9gT",
  "key16": "2a3ZBao3iS7MMQG7QyuwTSDwwDzekLop199UqHdRPhUVc1xKwVcQF3SATSGJzTGmUmHj6Nv6VRRw65msSt42AgSC",
  "key17": "5GXoysA6BfwFhxVR62eTaSn6dFfEacDpLaxePrvHSebn45H9dJodGfNMUb64gbtVbdhP59paAa8PnjejgepiseGP",
  "key18": "5CvLY2hpHDwW9U41JyMaX9b2w9hXXgH4NkjzMd5iixvU7FMTjJ5Nv1utuoYg7awimehofVjk1vSyjCoamUoG9Wn8",
  "key19": "2pmZXtbH6KfKXdH9U34XhEFg2wSjVjbMeKhoYdWqoZMYCABBAMPp92ZsSGkawxgGmQGfQxh2vkhe4hCJViJkVzfk",
  "key20": "4w3w3wdB4X1wR7n8Kr9hqFGBECosSm4ur91d4nHriBnz9feuL9Z9AEGneopYg74aZrN8qWg9FNQhv9w63Tc9zTBD",
  "key21": "2HdhszrxE1NsLkPXz63zKWwetmbYpSStUbHSfM8v5VaFho1JsbQL3GaaidHSR424oUXjdcHRSdWdjfFaJURniASm",
  "key22": "3tDVFjXJM4qeuNnPVD6VeXdkUUFgTthEuht313MsSyBonQG1ab2E1hubbvDz8HHRjrotyt8T8pfwprUyTYfiQkbS",
  "key23": "3iTqfdTbPBUGZgdnnxhemRczva1udHsZ64YfUaBknsx38RYX9Mr4tksgWSutpbEnx4vZZ8QqDC5zPBp2oAvGaxDg",
  "key24": "3gGxNomxhPCQirrTWs4EHeMJtGTp9WCyk5GcsJVSH2HLcTKFteJ5czweetYgMmoTcRTXeanAoELoniwP6Zfd8uEj",
  "key25": "3dxpSXMnAajeVycDh1F5TdLWZq578kMShs3SXGWss7ecMfksKC5LbsTU7uzNLatnuq62ZcVX8o1NqQtAyvHRHJYP",
  "key26": "5vLhHRmXeC736Znx9g8hPZ2yDKFot5cP3xjC2V5NhKRoDuW4zHGVKS1LsQYzCTwHqzWsURTfFKtrAEKdZqAUtHae",
  "key27": "48zcFyWcCEKBDyxF76YcjdCBj6ThDuS8rwXW2qcUZQpsmXMaqY3XPCTdUvmW9D5d7nzyXanHjiUFWQ8LuYpZRQHt"
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
