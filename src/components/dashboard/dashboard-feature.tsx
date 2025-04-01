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
    "34HWdzt5GZ1c8ymcFKg84mNQFWAzjmEQ6x2xBwyiBi62pEkuzhc4WgCvcWyH5DjhdeBds4iX9CCprSggfv7Vfh9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATG3WX465VgTPtpgp8P9EaJDC8G1FfwZdgNxhjmxZpz8A8S7p89ZLjxaXW1gFq5gdxLomMwQL9KfjwEjSa1XyWS",
  "key1": "3cqLVNCQaGMAdYqYa5cdDDvsYkp2iTTyiuspEap58HMtzwsZCAbhv1KWN5xPeCJYdxfiSTsdjNoZtxAzYXrtNBm9",
  "key2": "2Dvsc3Lrni6PEndqYuf3Fmd4wFrbtNZAhhUF7zw9NVhCZi6SZAgvghE1MRNpsy7hFu95FoSr8NvKVRKq277ZwC2d",
  "key3": "5hAEtXvfwETkqEttGkJreK62BcP4x67qDxfyWfCgnAjhxmoGNaXSw2Nc6reEom25VGDEmUpHXuPM6fj37Sa5NQTX",
  "key4": "5DqEXDePSbMHr9pucN16AQXYEfkgzKDcdeTrPMFr8rzt8ZV9yFLA3etpZytxXDxgKEfWd3W7Q9xsUeAKW4xrTjWS",
  "key5": "jrV71YMjM2NEBRiHi8GBoGJzh97LoWbGKQxzmkVaJciQ3ZZi17GD3nHbK2c38s9VkUoGtzZJpeBNpwb2nKbjVRV",
  "key6": "uRfqQJz3mpg1GU88xuJdEkKm7xf8k7UqUzrTPgCSjEzAqqkDW4yV4hq5oQsQKCr5P4VD5WMy5sPyynMyc11SxZR",
  "key7": "4BubxvwLpDZUdzb1WRNykUCniHoLRMiEnnRBHQnWGYbGP4xeV58wuT64LbmFAK1RcooSUkK3rQtnbpfnzRUJDDTc",
  "key8": "2Lckrx8PTViV2TSDooiLLJWeVPK5ZraC3qKJJT2JtUoyvxS1qjvMK98DZjQNCNLRLFrGuzMHssgyxK2fvfeUkzAa",
  "key9": "5DKGNQ9F8QxwdThnYMsmDf12snk1ab8pKNWksduPwmxNmJeRDWFWDLSJVr2EJ63AA1eSPuF2fgMfhoDziwzubSXu",
  "key10": "376ZvFZS26rTY9u6iadGh1r5sP8hwBVTDwUXQajvR1tZ6R22DZm7feJnwhwxdRbBbZN4vPqDCfQmptLuvbHT12h1",
  "key11": "8cAZJD3SaZQ3cW7kjN1sziQzA12Qp9C5iRaf2Dw3tJikrbmmWxeKByQteyBEskBEm1NqRSRvXiFj1G8rkGH5dvy",
  "key12": "3sdxo3KxAQK4n2wkwXRmwrrFKpVTLGmxnE7Y9mopTuDpvvNWFGQpuvZf8CbvuSXrgST2KSk1rwR6SuTJmudqp7bx",
  "key13": "3xt2Sadkx87Rq2Q4NmqoCDoXAKipEcRZiioyY9fnB6TPUU2MPwdax55QhtMp2fZWmZ9pjRgLJcENLNkBwqBRNEQb",
  "key14": "3k6Efs1znGbNHsPFZfyRBxfMghf1ocBtvNappg2CRPbvvRQbLuJEUgn4L2CBPFn8fQFEhZKGeSobphAPazF85vxi",
  "key15": "675o3m4aVFeeM8dTz6U9rqfmXS5uJj4eWrbSufJ9HZjyDZZEcYDCA8v8ZgowVwaq5Rg48LsVBwvnz5tmdzBx8kWg",
  "key16": "46rq8MBhJAoTnYgHMaR3R9Xt4nm4YiwPEbZDYXqBH9MCQ1WP4KqgqxwaJD8ZAEzG2Ld7MQY255PqNU6SAyTAK5YC",
  "key17": "292GYpBrd5STrQ4cdXwVCX3x472V3jQwzLQHWHBxjmzqdBcQxfMt2Gd8fdtFC8CYD5M9UQbTRzQ75avApUNUHiHP",
  "key18": "4EGypKFKxJ2BRovbXCD9q5vGFsfPHr3w5yQ8SdssL9Fm7Fw9xr7T2UDzyGfuyKiGMdzEeRgQcdXs4zuWqJm4kveZ",
  "key19": "64CGNQLULfFVnZoaSXbDQKpWtC8snLY3AEnD7Hzddg46DCKtyhap1Hj3W2uM7DTAg182hus3YTu6fntE7APNJovD",
  "key20": "2ejjE9j4RCbYrh6AFtxKszCWT4TUBBfPsFTFBXSNBC1TMWDAHtuezcVeZj3GnAiM4UW7wx53LtWeT1t6sPLEapE4",
  "key21": "39cj7EvBDLi8pJPak1UUS24b4bwAhbTKXk5ExHc676meoyLF9fA41bjFqJ12ChAydnFAzm3EppH5cxDRgHracize",
  "key22": "292xnf7T4HW2cs3eHs3h2vJVaCr6ERTbfnEayCNTkEwVj9r4yYPTRuxfZ5dj1tBFKatEgcWM3XbgyGehxvQRiW6y",
  "key23": "g6B3ZTZRU5CgSYSdw4CGMVq6Sw8VcQym4hKkrmNsDnjieVBw6gZ2726SSyRd6cUuPvfLTLnk3wczPLcp8sn7UP5",
  "key24": "7EdKsyAEBf1RiV93ZkzXx8V9axaQnMdeWQziYMgYgJ8H3BUXARf2FBASXfQs1xXHjgaKzk6CGdusNV7V9nYH6py",
  "key25": "3jddeeSKp5uoXzy4Me8B5KY39sNFMenQH3YEVidBzAU6KnAqWtnR9nBgy5QKRwAUXEX3oVnHb3KWCAAmtg9ftwSQ",
  "key26": "4kLdUN9ci2dFmGUdL1Ff7TYqwD2xQz2U6RZibSLAPFsJGioL8y7vwTu45SSMxZ5DGK8BSA7YuRULoev2AM4Efm6Z",
  "key27": "2o3uJY83Yq3eLmzHhXUpzGwfdC8gtVfTNLuKerneBgjzeQmYSGWE6kQ9jcSceZoBxab9wvfDsu85KEK1YGaTmsUU"
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
