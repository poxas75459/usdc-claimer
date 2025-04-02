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
    "3Mtu5x6X5vfoPcTw8NeoB27RGorCdBEXV7MNJRNMhWwVrPSYjn6Bn8tmxNF3L9NWnXbHQvq5gSVcEZk3bXhYBVMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQFuXUAqKLhtKCCUf2raxiXHVLZcmavCjih4jog76YrupMja8z6Arw7JPPv1hUgeM1DumQTNjGCmpAEt7oCXzrZ",
  "key1": "6Ns1FuYYMXDu9c5sV1Gaxz2b2JKJPD5MrQdoRicqJHWJzmu87jw8E57o2JbSho8b9RFQQcBqxpwhMUkUAmW4Frn",
  "key2": "25yQLzEV6dk73paveUsxnC78trbqvBVmmtW3PenN9PqQ4SrVVYyQxGS9iVTVYvHSoi32zgvruaqfGBHAWAeUhs9X",
  "key3": "42akd4canHv24S9RJbtBNusVF2yF6vLvgQJNWbRmqrYPvYEWrx8jURye5TaY2ETydgATzSVd8uCNC9F6siq11zRG",
  "key4": "41wa5ZUbiPsr8n6an9vDAXMxPTkWp639aTMTygkfkR3XgWb5c1XYRUuJ8kYwKr9Kp96JKFKX67o4XQUo1SyRnuFy",
  "key5": "2xbGBCPz7RN5ca6V7cp78wHK8mcWn75PwJwctnWTKmKkU2Lkw7g6PZSAY9tF54XQC952B2ro2LSsdLmxa7R3nvCm",
  "key6": "4oMzaojy3JNwjadB3NiW1mrfuUfXuEUnNjh1WyPAioC1cKDmFEg3ctA6rgFTSQGm9pDifgNPGks8D6ohDh5dBrvd",
  "key7": "3MUfJCZbNxkEmKxZ5ENr8FB7Z9EMv5yrCzw9v4SjYPVZviC7mHJhWDrBiHLeS7vRGGdqfX9oRY4jpdwA7gymhZha",
  "key8": "2HELjXfTNXFd5AEMSCwFrNVFt562LbhGRsCc6qJbi1F8TMuASNrvYoWqTU1LAQrCkCwAgf4Fgg2rWdXfyrK5QQR9",
  "key9": "MTPdbggN9FkbfAF7ZcFcDYWjYzLivXKXxY6WYYH9c9Ycei2cu8ZSjhTJBDygNM4BTEJ21Nuu8wPY9hUtimyGUp6",
  "key10": "2JvjcwHgzPHv4fRy2QxBJ2NgYWSxQ6i26uMC58yV4SUwQ1gbzunLoydQ9Cb9gnYhjUux5G49k43ZcQPfqVqQRiAf",
  "key11": "4SPrqaphoYmVfiJa1YSwyJfqgeiUehFx2uyhHXb3VAjJqxwBQX3pihwq1oH5ALYBYMii1Vk1AhX2KQZWSHLtSm8S",
  "key12": "2tKxdP9XART61Zyk7x8LR5sJR18W47cFuWk2UjiHmDroJ9JHQ3Wyz51dSkoE4LYcZ2BAgQdEEs2327LpkPSNNdRX",
  "key13": "4D4PLXqZLQYjoXgan2avHvfP13YzrasgGvmdb3JsnmmHhoQ1P46gpDadBtSCyqacU2XbTq1z2dLcBP63sDG5m6Ah",
  "key14": "3MCH8nkAr2PhfjHPv6aoiArHY5DBPNLaTLzk1R4nM1yASh6NRNjBxLsi1gbat5nhCyt2jzFGan8RiEv5gpcrDEBZ",
  "key15": "2PBsB2ZFmiz2VzADtHD4U4W5wUaqezMhhYLCFf3oqAZpS2HjbhPyBUr1TdMJcvKq8S68j5DHxYsG6ZSE1thA46Fy",
  "key16": "3yAgZwtmTBx9oATjeJFGefCRQRHE1fW9YRwmDUe154EB9SfEcx9TsTiiXPzvfHheoAuWqRwy8A2PabNomt3taBjq",
  "key17": "66UYDqpryerGv3HPhMidvtdzttZbceTuS7vkd8jLiU3J98Demh2aTtJXUKAKfsbGj11X3zqDaqNp3ongNTumSeVS",
  "key18": "KX2AvK9KwiujXteYYQkpdFVAbLDqHgXgAKhPMsjJiYjFeQHKsxu8rM9XvxXZERnoWWudQQtFMTodJgECV74dtN5",
  "key19": "5CjDUJqJxqhbWENVmRir1DDQqZBtysCApd72MBppjGb1CXdvhUft1g9Jh1z7pB8ATSKnWnfddrXHe4tfuzdqUwTV",
  "key20": "46TN1DTk2v66qRMaUBReaZZN646xEor4C9tNojsMdJnSUyZe1jUCpVSiPRmLYDfxJ81RoZLm8j6MdLb1SJXq8QzL",
  "key21": "35bgGo3SVbqPM935QBXN6qmZxnAui8JaDHrnY2sZQG8ei7gRh4qVGSTuoVQF98hTr39yztYBJLU9oSNBydw7NbE7",
  "key22": "2mpwuhJSYKrykehadZxWV5TW5eEyMeVRJdpkerWmvd5eEcA8vznXLz8fcSPimsQaZhufDrrs8MHxcENmcYBPucjy",
  "key23": "3WxQFM2UVS9fnQqFFDZ86DkMBhfCasevihXyQEECPi1NCJd43sxpKYm9E5q9RgWfznuntA3DEJrBEFvudtHCfcbr",
  "key24": "5WapJqZoTtWsccFhbmsNEpre1XibiJVZ1u7zXURUGGiA4i2Wk6snJaLfqj4HoW4jNYTpw454KKiRjuQhTP7FCMQF",
  "key25": "5pm1fyuvbvpMQe8fq6wvJs326ALxBpATjdr22ziKd6PzpSCv5MxyuSM7H634hpmvoaakZN9DABnnUJhsrapVS26e",
  "key26": "45EiRnCmzbPF87AsvzhRrKPZyK4d8MTMLXw8MgJvHY4tAohmqadVPZ1buspE8TX159VBHNn1TRFpykuamVj8B2ES",
  "key27": "2mphgSZzXptCyjMwFGJ5oCKTcpMxWccnxanUUqaoDmm5VV7uri8Rbqg3vyy8sS25iJV26zkyPsVwY6bBw7y3Z6be",
  "key28": "3C2o7wXCyzFJSWJ6qxQeFEkEuCJfMjKdUvqSskCw8h8PY8mYx4iTQnx33UYHDjzKVaXiseUoNVcyX5o2B3qwV7Uw",
  "key29": "62SGW6r7KXZ64gputEMbzsoNYuEzRjZpgs2xZLodYUnGF9S1uwFeUpwatPEf3ZP1MCFg6jPXWmA5jZ7TUoLfSnGz",
  "key30": "67UVehGodZZ4vff7XxXFHy5srK1ToGpGX3crUTibzWU9gc9GvknRPmab9KEPyj9KbjouiK1THRAjTPsVomm4WjtT",
  "key31": "2kxKa9BBxHhCnPDG3LR4ofo5gZ9NhBfbXq77jtRNrxQofyLgAdcWc8kgXeLu4Z9eUh8rzbPLAkzMCzdhc3QDPe9N",
  "key32": "2FEVBG1Kv8MccqxJUz3Vt9D8SxJpQqAS4dHR97DbnF5v8gLdFx52zF8VV1hGamy3rLDTFHfyrEdMveA6T3rNntYR"
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
