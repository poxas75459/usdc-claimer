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
    "4966dPMuR2ewaDKroWdApbY93pNio4zmaGmdwbBALuSXrowyTHyvkDJFw9SPgErUENFJTMPxRoL3rktwYLVjokWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkSaS8iR83RJtRVN6fj2N3X8pT3xM6tUZqhKYnNr4ozJvz2xPqHKiAsXC7MLMjFxuXRB6kCU4D5Hze7A6NBQ5m6",
  "key1": "c8F444PnFhqJ5jLyN9wMvN3LmJTdowez5u5fNvp1ZAL9dfL5pJteLZbt9TH5BT1qFC8BALNo8kcAwmDBT81n77N",
  "key2": "2ZBm1GNXSRsWf9eTfZvsgxzhRHbSio6HKGy83A69hvcTMkKZZsw3kLt3AfUr4MnQNaPKCJGvUL5TNhNoHNy7uTc",
  "key3": "2rMzMwFFEnbHXnybD9Dcg7s7UFh56Xu9sW8xqvXfhsAWsXAmuYyx5M8TkE8YVoeXc4ifWQBFxiLgdr97WWbu63GQ",
  "key4": "2ztDMmpZhArAc5E6CNNErKFDYTaQJrFgPu4mQmwcPSuFU28rZYFJBaHQDvxk6r1EZ1LG5eG3dvbfYzVypSgRFekf",
  "key5": "HhKfSFedRsESHUsviwVWBL48gyb8vQxXi2jeJGsJHH3e6mBWkKbJ5jxX99onTAYNwBjMmmmY6qAV7MRwe1e5CRP",
  "key6": "2t6LTM6jBjFsS5Fkyf9qtVcCHYKet865V4F3YNwSarAHXYNJG5zoW5CL9Rdtr5tQFzveYHtYmXJ7QeaBNAZunjyj",
  "key7": "vyCNa1kMBnJ6Uv72cQbRw4gVTiXvSotaGgVN1BaEi3NkCLa9VtZvgEuLZZFEMmn3ywECrgAgYdxtXDWzUJKou55",
  "key8": "2LMpKSKCjnNBdkcy6dMbNJXobDDp4VLZi5WkiVpfxiARWEuWmGGvv8ReZenivJD3Zbg5kiiEAF56yprvN4i1krFK",
  "key9": "4beNL7UP5BooM5P4cPyG679jW7guUPVkhGLsTdYSpmbVsgLBMiSra1KZ67vKyRES7AxD2VD427LAh9okrezG2DyW",
  "key10": "5tQUmhzCgCiC8n3uK3pTWbkU39Yy23MVKkDCTeDBVHk54Mkbj4xctzoqyvJ6W8BnSziicnq6Z5tKAbRWvLvBzbrE",
  "key11": "3ujDaHDz8DMXUTaXPrHBDLgf1r922XBU9VmX4LPe6aVoc7TbqPS4LD56Mr7tGpgKqaHm8Ds8vwdhFBScJJU2HUZ6",
  "key12": "46SxA1FTXRGAu6ympjnZyc9Bj4wkRK2TL1otyjrj2iga9APY5sDr9nbFo5igtvJpKsGs3wBHhRdpnqzfaQMd9yd6",
  "key13": "4xHeMcMbEM7cUgkpkGVpe3AmtDMvFoCB2vG2Pay8rTCeEhMrfrR4RPr2ANV7oKfKA86RkeCmppENrtHFN8Fc9T8D",
  "key14": "5uMHAMJeL37RKZhUiBSUgw6E1GfJSvYqLXhHGPGrTixwebHT6Sayc428QxTArvS6ehNfAEN2JsNRrqxBqXF6bN3Q",
  "key15": "5JqtEfbHt8osYrN76YwEXobKqp7QH1drGHDcnB7xioHRuq2LbqLgwLcCvqge28NeANTRhub1o422ugXgQt6gLVYE",
  "key16": "fBbRjhe8iZMZUreWVR11pzZ1dZrXpczeBfb6pdeETX6SKqC2MRcFnNJMf9kkLcckq9Nk9Bh8pBw6Z1wDPtsn8RN",
  "key17": "3HUZeKUfaSgDiadd8hceGRtQMGq6CvwpoAGDRUR2dbBtyuZt7oGVjaepcNE1HQ6UeWGybJ56oxVfGTAuKyFXfzpU",
  "key18": "nf5bGgvC3MXTUVWRrtkWgiJejqY57YqS4mFHiCpKveNY7Z696K46n36N4GDx8mp425LyQ1XmDCKxKKp3cg6kTEV",
  "key19": "h9D5we5DDRkQt7tz8CwoL4dX511wi47VmuvhgdvPbLEZ6yoco57ko1j5uX94XDABBv1o9fvoae36FriRGwmkg2H",
  "key20": "5NDH7coLxbmSo6eR6c6rpqByM7WQp4tj4dTQ3Cgs7qcsEsNREnFoPrTE357ueHFhSXmr5RtJt9AQCMcgqi8VML9D",
  "key21": "2JZmCWUcJkSFr9k8mLMupwk8ZVzTqewxENHya8uFyFL7cCx2B4B5TZAW5koADP6nxeCBoiT9UpbTeaY7jjQ8KYgT",
  "key22": "43fRaXAUW77MELGngCYru4FdoJK8DeaZ8RPV4gZh47tTBS1us2Bo1jABKrNwmVgaEMP3E9ArxYcZy9dYp97ABoJ9",
  "key23": "5xiCHkuDkqK3gwfsxZAe7o7ENxg3zbRjEfWywKswgWbzDPdPhkfPsxsziAHfzaQxK61N5ZMzMmPK1bodb6kvFCb3",
  "key24": "3fAeZeXRzQJYj6wi3myYuew6buncb3R8qpo4SNdXNh6VcbjQ9tXV275tTd6hNHtDeEwPri3zY3Y2NZr9R9tPSW19",
  "key25": "2LkUw8r9oJcuvDkZXdGCrcjmz5T2AJZjFP1gLUoF4td4G9AbkcnKjd2HEJTbxz7DN7YSVcVzZvWKywSatxcLWjfv",
  "key26": "4ibgU9PpnXQm8LLDHrekMSSXMGXWSE6fSDXUoGLENSp7o5APybHrr2STXjKxddryziMFtegxAjNx47tXkoVngnaL"
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
