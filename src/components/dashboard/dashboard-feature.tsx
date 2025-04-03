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
    "3sUfFfX7EEbkLrd6H3RxBxMqnH5UKNtfdXu4CSpGxqpdXQeshkussbRY5bqnwHkiVQXQa91unhBArV1hHAvt3jRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yei2CuYVAUZgFssSCYP9KUVQU8XsYWN7GyPtHJwVGQvJ5X3bMeSvjwEwGoUpF9QaddVLKCNehiw43xfACHjyHG",
  "key1": "NsW8YGv6sHCiUCyXBVS9ys2kACeAoVNknHC8tqNkJpPKYmHW7nV7H5Agew2SQWjUDfivUozXQENxdnAX9YqJhnC",
  "key2": "2Y8rYhHKTy5ztv2CJ8WAv4yZjnZPiTQVaK4g7M7bh8Ew79i2oSvSsyNsZpEn7LWTZLSU9quwptYma4A4yx5bTsZJ",
  "key3": "3MzUakWuVTTBPcZCb2A4ZszZTHnfvnUXHC3Pn3BYAKP1iVBA1VyAVydrJVcuqZ3WHGxp7x2a4fdLByL2RFgMeTkG",
  "key4": "3q7vmKSYD4K7CZ81Tk5Zcma4NepddHo2wzHS7CRoiVw6St5E5fBnas7jqPWkpPidTosgsCaMtfRj6qAzdocsms7F",
  "key5": "3qsiJGHyeJZxuh6xE3PkW5TFXSdhm4uuixhqWx34BivpobxbqKmzpMuDcqLvM179Q7AT1D29jzNMBGP3kiyR636P",
  "key6": "2dZvBLLwfX8WQBQV8AxDx2HPdw8FGfhJmrVGyS12uuowPxxteVqDfpb3rrXvRbHMsork7hogNH3NByer7XeK6sXy",
  "key7": "3XXyhYoQeLR4cnSCKpXUYFHpr2KSADTXx2bEc9UXUSBojGuW5moywPuzsAYJYBSFEX17YNeskBrUBHDgxkgtV4P9",
  "key8": "2SNZTPpBZKWCb6SToY2oj36HyZ5LMjEg3UkLea53rxHpgkC4NuEDB4AmZX2BWozr8akHfZDGzfPLVbR9FCgGHQqt",
  "key9": "2NcxriHnmQfAbTeqyVmwPax7JkW4V43Kz9jJoy8sAiz18HcxxLzygHiExNGDLKWSYa7xEGDnJfhwijm52NzyHZi7",
  "key10": "L5pWFhBq1BgyEi3by7yWnsnjsi6oBweQPB6QRU7oLnDcfcpGefLpUpRkTAXRnxzgLRixRJtgFrAJ5v8NbfDFXTr",
  "key11": "4eTkp7mmjf7f1af7kCrWX7J7BjWh1YMzYbQxu1dWNBEwPGmNhVLiKHvVaoffDQ7Mh9wAzdnjVG8BwnLvkMaWYAGp",
  "key12": "2i4vWerphq4uwKHMox1CwB771BSur7FCVDpYQfvMwj4Q9JcX1ZfvzUUXxmsFGz5gtAvDQL1TAXEpZ3wX49XEGgCs",
  "key13": "25T4G2mKHx2vdHv61oSy7XmYgP266owpNVtWdjAH6nJQFYZrG94L38hs6xKjbhjjZHvmJynTnEadp4tiWJk8ZU3n",
  "key14": "3S3jUCeYabUfu1es2PHbrZNN7ZUgJKzR5TqGsib6vF1qicbWCrm1dbpFjED1knsjrfAGCMCqwLx2e8mYaK6qL6iv",
  "key15": "vwJQ5vmtPbuBsUVahM87cQw8Nau3FKQ3mj9gpuhNBJzKwo8ZkC5stXB1UhKtunM3Q16pmi9YHUuBzgPefsBXBjs",
  "key16": "MZLY2wBbUge7xL8pc2BZ9Z7CKBm25WAPgxDY8WooCA2LuKhnd3AvP5JZ63kousokfptjRauTyCNazv1M8Ed3u5k",
  "key17": "FTLSo2RztXCNgJPzg9ungcLCSaL4AAku1U4sVDfZ1nJjtPgJ7G64GuF7vS9yfeqaFzv3joMjKz5ixqws19aR8oD",
  "key18": "4DBuPXHQVgtNLoVU7x9cmotAZoCVCyUAFDWRxBr7qwxoheVT1DzfZmEdXcDFaWdVaNCkDmx2kQjWZEgGCHhE9cuv",
  "key19": "gRykraR4RHoBASmvT7XWPjW6doxVUeYF2NUnLfUd25d7nAXkBp16SFo5purTrwKnBLtqmmDErboiR8TmhehUT4K",
  "key20": "4pdq21yg1JzpPkcGBXF9xrLMHKP6Uoj6drR9Z61hnyVxD7Hnz5GUpvEPG6oZnQcy7eYggK1MBPtDvKqA7nqEghFE",
  "key21": "4U6VK9i3HoHyorg83QuFGQSnXqB4fZ8wEcGhy14JwBHRnvv7kE1NvRCWMX8GYneJEtQnqHrG6W1LF3aoNfu8pZEK",
  "key22": "4NNBZmDe2JsXUytr7tRqNoBt6pehBJ8pTipHxUGegjvFbhH32xyjEVfw9NuKqym4NxwbMH1xmcXFnoCE87m9AmEq",
  "key23": "5tizbSpPeXmSr8Ks3Qx8e4C8B1spYVuvDTtN6XLVVY3ZktfkycDsd2h4nBXjxn4QiGKr1xBkfQgnYPJEy14GM26f",
  "key24": "5xKBgcmUhszsU7X4hTrrhNGkZiVZgR4sohPbw1xMZeJ5dLBHsJ3GemAMQqmYnNbwELj9aL1E1HVbNLJHCKFcMnSi",
  "key25": "5JiKuguymFPkWFzNxaQ2Aa565Hgb6kJcXgFQaMAjuLZ8tntbQyr3zdsiWS33fA5Uq4tWiTxgNWM8cAabZzNDhBpo",
  "key26": "4QSV7sk8XHwu9fHVFKzANKZqviseBdQfaWujrnAt7UAkwsNerXcxuLZbHet13Ue7G2SrKTKF7MuzgcKHfTYR4KWN",
  "key27": "VKK1vzt25HifXz5dCai4uU7zabCn7fk8k1637sMfZoBuJwLBJsA5YxrCKvGJXG5xGhoLbJajJAXfDPmQAbhF9q5",
  "key28": "35pu3RzhVUaqMQmjV3T9ecWkXN3anmy6bwdx5FXSttnQcxxfkc2cJS6gpph7s8A1xmqqn9tkj8fEukKqugTMFGn7",
  "key29": "37YeTt3KzmUHXQSoKBMss1nejhB7ovaeJ1xxMSg4eDsmedRYkvQndZwhkYeWfUr549YpJ25SD6hAdTqkBtgZc97",
  "key30": "2JxDwMGHzzqDBxUpmm5Jhk3sek2mzrtfpS2c3pfS6UKp16uBEUfYvRkmP3NPhZZ9DuUViRR3KYywdfUjFEj6oUnv",
  "key31": "5VQ8Jdmj47MmpH78mBJJ9oJKqzVcd2QyjdphTguBJpzajd9tqHkwUtcayTkiBQyFgVQi2x9XB7BmoQC7muEfC7CB",
  "key32": "2NB2SraaSCAuwgskVCJnuk5DoHDU4njovNEJCZoMKdG1cDA2N5hyQPDwRpE32F8u8cphZ12dkRQhATRjoGxXFW5P",
  "key33": "dt1NaZVxiASq2BzoGQZ5scrGhXLYCJyk2hFnJamcHj9GawTqhwLKxreqAaZNuXBVzDstwXg3GDN4xGe9NrrDNtf",
  "key34": "4kYBszca6x7Nf6RJDxVzFs7jMgHZdhKMbGXzuoy7ES3AyJ1cWtkDTVjxJceP1ds5tAexLkd8qQzAXhAYwxrmtzzq",
  "key35": "2xyydEBReLaQh3WAczaqE2HVpqCfhaFkR9uuajFAkuL9UCvqQkrjVRZvghLp7aF2vVepGXcSjxrXZfHuVokwngUs",
  "key36": "4eKz3n26xfAgJ4zFXkV24QyMJwP4UEwHRiJFgDhTuekmGjwyZQkMkpRU6wWnyUaei3g2DzPKsY9eP58RyizswxAz",
  "key37": "5Fph7reQTpyFWyJ7VQoj1xPeFwXk1oxAg2PC2rYm4VfJL69nsff4vUWZWfuGA51pmayyYQe2JWnmmKxXaKaRFGhH",
  "key38": "4MnYqPZN1Z4FtdNMN55PDaxLpndbzkguJRG27Wh86twoLqxs9d9DozLjCt4xLWDQjiDxKLkSspF6ViMTHaVDZCXF"
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
