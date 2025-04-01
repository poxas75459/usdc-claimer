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
    "25kwcft2beuJTx9CKnEP3YBZvP6DHsYa6He72xqdz1Vsnq7AYHxu1XzYLWa5ieD4rwHTGpcVgMSqwnnENZxKXUNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6LPM1M4Dc752TvY7iagXrsxXQgnbxMVNE8PduWLAduavMgD1E8PMK5Xrpxvu2bLwmjbB5zCt1i6VQrcQwk2s9K",
  "key1": "QhZgNFknQaFAnRRwu8Qf59jjEtvSiYYJkUZYiPW9KEFY4ugvbsuRBhRppFTxyHqTZGS6y1Qx4aJfCMgNmgCpt5b",
  "key2": "5q3vb5XX4SKYRM4ZeUsZ8yxEGLu5dMX4Zz983twy1TVSxCusLsrrrwXeL77Nbumbjh2zQnhRJrUhhCEsmk7sMp9m",
  "key3": "5QVhbW8tVKxfHdafPzwboPZYxHzxySAGg85sTr3iDVZhqU5Q6vgLb93CNhSnBbKJZLeHUoQpFEsvbHzdS7BkXRkk",
  "key4": "3mmz3NmdarwN58aqKP6Mxgmg6S9X8h7UJCpyr61JVKYjbzVNbL8EgbfC5TghjYj1TYqnfXVeRarKW3EqP5DuyDvF",
  "key5": "4zqRxeNXp91iDbDUept55byPrmiE14gbTsEUxLXELSubq2nbrhfpP5pakTFeqaoLj2Wzb1nRzEmpqFz8t3UrYkDe",
  "key6": "3LV8teVs2gp86tvzWjSrb9GXo8yTpmQN36ecrhieXWfrLJcDoA57JsSniGH9jszF337GvB3533GZg8wzt5LRu6xo",
  "key7": "2YNndtY3zdDorcduPx1vSCHfWanWhBKaiYwLfsJ1ZCnxTqrzy4KzBZfu8GwvYif4Dx58MNxwzg4syW8RZGseoA25",
  "key8": "BoKeyJGGPTMABJYahap1C99rt5MtDonKCrDa1SZ2NoScmoMWPUTf5evzzDkRFWDjVBRs2ARF64xhbMi2PFcptka",
  "key9": "5T7MLNW3CcS1ro9kSJcnLqVrPrkDGGZaUPbfmjxD8CRX48WDfHQA8TtFEnZAyWdNu3LVmyjaVwJGQpT6rtNjqdH3",
  "key10": "kEehtNc1eBrXDB5S7B9nM9hDDrVAbMhijRVKnvu1BHuxyMdxcqWTv61pbtbRgFzZTbKYtm9tBFdiR7WsAfFTWYJ",
  "key11": "4HH1rDMBSmzPLucErcVTgaCEhxZg6xyeuoBLy2kGx1RG3MSjAn1yqvNV7BmDRiKGgokxYZMJw5xy3qx54zqEKqnm",
  "key12": "4CGgPsbcJuAPneHkXkGQaTQTN4FTDrqA7CsarkQLQzshv5SpB3U1iDTzVVWKc8rGRv815DY76ss37RRg47sZLFem",
  "key13": "2tWb7pkG8hMFq7QfJAQArdq6nf2e46Rvwb6JsW3f1PSH3eCidc28cAbbNWUkBgvQ2d6DCRrLuCko7dNBTwHurvAU",
  "key14": "5dk147cmwxJ2okWuX75SGkUUqU8LXpMuJyUy231wsgRpaGy2ekTD75gTsAQXwDqHkYYKkgHZ8DpqkPXeztNkcyF8",
  "key15": "2JL1211vnctRPanJPA3RgYGZgYbxbzsRCPmLxULncM23zyjyCEky4EctPhMPzA9GPcrb16HnRWwLKiDHDdEh7EKj",
  "key16": "4Mro5RLWkd6uuRewEHZE98UEGJxNTRRxN6keq6x148he1fKvkitC8v8VeP3raGYzcjCKL1AyjHwDqy4pvqEQkszr",
  "key17": "35JsFqspxFR37JQbCVfKAuXjScjRiyJX9Z8geAL58Hb1Lx78iCFTcmPNCcN7ArukBEWV4AfqokfCuZVVu2Hw9bf2",
  "key18": "5ZudWTh3Todw25KDDapnxzVZ4sxuPfynUQgXdo4jgJMv1ZNBm6j6jtaha7cN2Lmp9py7eM7K7TugLJNvkE7hVJEN",
  "key19": "45CBqCH81MmqSLR8jteLiYtz8eCoAtmdJwiwBRx8QBW2aZKtktvgZfz8MdE78ZS2teyHXM5xJGnWCE5ybWzEaKq6",
  "key20": "38suSrQL2NPPefK1s65P3cm4fDdkHWHwGLvC1Cckz4FybAK8peK9E9t7WhSyYtaZZ53SoP64zF6vAs26Nj8QaLMj",
  "key21": "48ZMXvJri64xmwEY6ci5H9CurtuhBeNyYHZHJG3upfuTF6fv3evio6n5gZuCM13URKCASfWwjCLkoBvxhrFGVs24",
  "key22": "UwFQRRC8irU2vzJZC9kFRqFD372iVvjDZqvEBZAKNQkroApXR1mh7uFR1sSdG4E6Rq1T5xgMMiXWUH74TuXjfmp",
  "key23": "go18tAWFBLd88AoAw7fJyji2XsQekJonBNvdtNeXZ46YC8zqvkzyYpPvX7FsBZRk25brxyNZBC97zUA2TnwtAza",
  "key24": "3atYPY2G8STFkK5Qjhf3TGzbrdLsHVuUthrZ63D8uL7ccMdwL2pyL1NunmAeEE4tZY1dUcri75Zg99XZYwftziz",
  "key25": "4usuPVxeaY8EkxNzkh4unvVD8sWYAZrA7qtnNXLyF1FXa4B2KcXm8DEPVyJEckTX3egKG4qZRA2dfjZJM5RHHvWn",
  "key26": "2wrLKrJh7KbBaGRYPBA58KyhCF75uTLekvME9AemKncFTcYJKatWYagYatRuEwTeJpRYHK2NEm7823hqVjtN91Ev",
  "key27": "54wzGTrXpBbDXp2cuQoHSJpRr1uKtuhrXMJFcvrBYtvv3zj9nx6EFioRBULcaUzq4ifYdScNhEeqrcq9ToAUtah6",
  "key28": "51uKUMZp2PSRVHQZJYENLzANfFhKQDLf8aweVEUQQGMtSew9rMBRoP2RNBetdUmYhbT18qrXXAchRpQ1NSS71pTn"
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
