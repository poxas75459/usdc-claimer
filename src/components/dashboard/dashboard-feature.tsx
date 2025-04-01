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
    "RRK9xoZvitwT8HvS5433DVj5WjGtPZUtFLQMSniRB2ttWUfNrw9FZEfFjuCBiFsGk93t92F38t1jHertv5NeAo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wxYjj1aYa87xjNuZ31urHtUkwMo8y621itAVjt1cLdATEqbdr758HftruDr2vZdwYq5hKfSSFjr4DcjkRMmTiTm",
  "key1": "5eZrTx8C4Znh3jrWB7EQYb31G9VYrz6vs2EQPvBRSrEoxfKjZ9i3HygTTL4Ts7yjCSkYuD6J3yLfW8GmuX3JXyWp",
  "key2": "64vdqw3hDXXNpAN86BV4gPdFNPPbgM5Xj1SywA8fwVsN5PGswTT8yC2veVH6JQcdg9RyfrBqJiA7CPGSNT1XrkfD",
  "key3": "s4PyLBZQaSGL9q9ZJyrYmKwjv95LmTcQisFFiLnHvUdYPXvbsEHZeSa9sVbLDuLjpJxNBUnStcLs8p8teFzSgZW",
  "key4": "5NvkqqkBLedK1xyp92Qw9A3GhpzgJoRwvj4jHi37XEs6NpsZ3rM3orYntdtNgHVWByfrtR1V93nwqn5uEDzdr7hd",
  "key5": "5LzP6QyFNXB5VhX3Lr5j8cJqzxyKAn6CynEcJ5sjm8Jvkke2ZEvcf8P2YGgEoyqY8EKCTNYn9MAuR7BfE2MfkWVc",
  "key6": "2vCEZ4fwN2vehMf9DfnZtX5Uo4zj8j2egxmyC7zxVXwPFb9kNAVGGWqXsc9U9GSn3yLTBcrG24yThjD5qgpDKbua",
  "key7": "kJ12gnoCc7JDii5pHA2weieyRbJKMYCyTGq66TyyPHPPhBqTf486T76ZM58HFsRCJ8HZsn4rsWVgXKCBAwGdEVc",
  "key8": "3wyMLJvdju9RaMRc6ukGubijfcdwhVQVesmsPHEBrJLj17GZHETtWgGXinF9smnDuoCWkyx9qjctahGNndDBuunJ",
  "key9": "3VVSQmSqzkouRdKAtTTDtsLV22AGo5eVgoTqvFgEGddbfEeMxNTKTmt2ZvPqeFrTjvqZXXAvjrPU57JVgw61mXAV",
  "key10": "353FgePk7YoawBFRaUTYV2TwZrvawbYDqJ8p13cECH6U41SzY7KF6trWi3agKNwYa6My1QfygsrUXMVn6dBcQ8Gu",
  "key11": "2RBzsPwUn3wnMaHZTc3dS58Fje7TG5zPKHiK4zkK3Lisd1GntWWrVggkoVqbyk1SNMLSkWFRV3MV7mXxXLM9FBFT",
  "key12": "HGzm3u5RstPoiMgkDB6n7J72VGtzoQB2VZ2A6fyzmBKYCbt1jti7NYz4d8FypgxgYRqEmRxpWC3wckzRUbc16zB",
  "key13": "3aWXemCAYmzZhBkYVJ6tF6x3GybJKLTa34cSuoqjrtLR2k5Gt7Ntr6kHFa6DFLAWSiw4tStmaES6jzQQ7FzZ9YxS",
  "key14": "216ZgSGuRQn32EwFKprKnYwhgK3nZx2Yx4X3URGQZqrZS91DYtcZCHGQ5Mb2NBidHhhvDvWxMDhWTxYsmLtxtxfM",
  "key15": "bXBdDAFKmh6irfHLNiPs75skj3i78R5SNXtRHgSCqfBxtjtLWzF96u8ydjoomqr9aKm2vLFRbVdsjgsGH4HpcKn",
  "key16": "5AacagXEzwZC9w9ZiieaZNJhJSsusAFoDkPjSfKYKXTS1CKVDm9UnFwtgSEcfrm6mzMHNUV3DYEfmmKEbypYcWPj",
  "key17": "4xnKL6nbGt9FhKhVQxmEc6NYmu8C4XhdPFeaiRzWDtetiGyBuYhRZhniMAsAKmsoga8ncBqfewEDr3azM8T1u2f3",
  "key18": "2GqfXwZwdHX1HmLcECSydWxNUdDsKX6ZrTvC2dVVz14gxF8xVgRM7rYhG8UrynyqyfRrNiUv3mUAdDdWaxzrSwAP",
  "key19": "5N4JHD28iWpQmsGHhe5gUNd3YA8sx7tUvjas8jiL3A2ohJMazyMWb4RUnLnkts2JuaKVSQaQ23AmJUVDD2wgtFDH",
  "key20": "2FPwuRpYHimp7CmWRQiHMAdqS9EWJY4czdNvJpLD8uCghHY8bvi4E8roPRYDMs1wmgCf2wJQ3uozS7Zgqt6ATyRF",
  "key21": "2SwcMCEfGpqV1AsWEJyJMZjKT3YjLJot4dPYXQgAfT6Xsvu4eEjCYKkrtiYtm3pkCcjt8AvBawMDbfivyv591FjE",
  "key22": "2iSVbH5VKk3FfUNP84yQCrnnRg9M5gJJNnRHbAfoA7pYC8EbkWd4Pm3Ruvh26mxcbrNaSLFmyKLeTGFTcDsXrCVt",
  "key23": "5hN2z52nGcwu4h61hjYAvW2AKHvKk4aKd1Na9LgTY3eGtQbJu83Dc4RRC89t7x9a9hjGitYYUirqcurn2WbVmexW",
  "key24": "4whx46zPPwHrkwzDhi84uA6J1pjgxK5K1FaZr3rzMULcqw5Gujevu1cHzy7GNVmCuwZ2dAwF2RwUhYcPW85rCk62",
  "key25": "VTvxYs3UnUfUtoUjNG3rMPCZ9UQtPz1nvoydjjBjNwURpyM1t9e7TzGzrtgXEbY23D25AmLVG1gHRx5fVQD1bh3",
  "key26": "5G6d14BdkS95muGU8Tm1YfjhPnBDqHQNqpQGRr7xVuddLiVinrmhj8ks9oZGvQwqVU9BjqRaoCPFbNXtjjLka1gL",
  "key27": "pmr3SQfEteHFyBeNPrXNAKpLsBjo3wP1uZmRffYAKJRdNpcxNa8P7f7ZUkSJPsxHPG61amax3L1kAJC486iKJbD"
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
