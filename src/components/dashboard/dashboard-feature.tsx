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
    "23AQuBCaTbbZBwWMk43a3J4pPq4U9e3S2hqQc6k1qe9taXHPN8xQuXT4PifJZT8CipbjEyrfrpufv4qMhWxB9vPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyAtY9BtF9xzwpsgL51gi9jWj9vmswZp1keThNUxDB6ozdqLMfBabvqkomdDEzQjR9QYmToB6SrebSFYH8f2Uz8",
  "key1": "An2xH1y7kDSquSwJ7kvVHQ19YGAXwG2WcchreDHkZBr5aQrp632QXyHQQAdvzXSQfawTotLzUx5Eqd5xVmAVHA9",
  "key2": "5iw2cPWR16TMHCsn2gq5UBRynpM7BZNmRVzQne4hXTH2c79vGCBjW89wDA83kBQyGtBKjAPfwohb8pUw7WWmrczw",
  "key3": "4XnH29D4CHxVL4oFrNPz59rAWMb5VSHyQeePdNEMPqvdC5RFwUfZzgB1TYjAGJtEgobJXpBfZExwRzds2nY8i5e5",
  "key4": "43R2JfAKhyCwJxvcG3RjqXvRAKVFSnQvoUHtErPUjCfKAa7c3rsjJbk3Fh4et81fxvDDRDhi3UeBAY6QhoD1SxYb",
  "key5": "4ZSswGLHtk3FoQL9BRraTZPaAR7T2p12Srd7g9Xc1bmUymWCsdXVaHePXbi7Sc2mvoxyogZ416gCZi4sYarHAe9S",
  "key6": "2otrEhAaJC4ux9DyhVPZsaR4nRKtjnyEsSzxGmgGWNnxCaMQi6Y9pHXGGDwfG9jTaiaqVBrD1MJR8AzdQMRexmrd",
  "key7": "Y1gyVRHft5fVtSngGDZRHC9oszb1U8FHXjTdTpCSn4gNViRtro1yphEhQ3EuyuT2hNVaH1LeLgEwTMZWg3sjfuL",
  "key8": "2i7UEiGbyjvq5oCkbihMQgrdkGZKUkHcTzSHJBvTsJs8t3TkdwHRq7ZJJ4AdTfKLFteYb8gPzEAn3DcEtkZM6c7w",
  "key9": "2JH8AvrdJCWd6jty4JbD4PFuVtpDT9WanfixnfzpKtRtDcmNGVSFzZwExs7CBXbnuehQ6jMQa6LqQ53jkGoJMNgR",
  "key10": "4XzNfshjZw1WZs1bPeZoT4yenaQFuU4gR7nMeZqTeKijYt59dZEEJZSJnyCRipWx1MmLZjBT1K7HmAVjH4AX4x8C",
  "key11": "3qNZtpJEBNtLgX23YXusbVgMysZ1k8MruW6S4nv258yXrdmZ7fxfDYJbETt8g7ShUt5fvszX7xMPopDfZtKJ9JoD",
  "key12": "2bq6poWD6wuUmFjDteJH2hj2hgMzbe38UYiXKHSyMa18rTMsUYbk3PPetEBzWQE3LuM7cZJac8YXHgfYNUxHUP6A",
  "key13": "wVfiDZW1QxznMYJHdk9dtmv52Jnag7M7PDEuNFeF4EEQtR66fssZcLJR1DZtEzmZFVY1C93NcJE3383gsTUZCem",
  "key14": "5BegZpB7ycDsPShmQUkGKcrWka3wDdLP184LVGNeLgq4FmuRTg8XAJdNjmHN4umanVaf6Zyy7juKvneyAXdLvaCb",
  "key15": "5MGyCpZzh75kTxAtXwSo358ZkZ5rzMdD5smjLwEYhLYF6Gvdt4zTYQZmn29XL9Cyf6nfEUB7yZyGJHg1wVbH5SEq",
  "key16": "3bkS6PknTAYKn4X6LicBBEvrDhdV5NHEkkJEbk3xoXigiiXkwirCHoef4BTPT4aQFM4pQAHiDZ44k1Ez3q6Pbjeb",
  "key17": "2rExChqtdZ2e2VXhPVobuJ2TeLFpc8ijccZHaX4w7phre3KUuwZv1J1qj1ALupSPJKbZ3fP69XnVQLHe2YhQaWQH",
  "key18": "4zVhNGKsJFJjuZCrM3ChmuT5WcX8gpaVkg4UaTQRhnCH1GBYgFC9bLmAZbc3wwvCfK6Um9n2xMte9guWVs69X5Z8",
  "key19": "64tniUKVR7ZMv1SQS1LueBoU8CmyD8P4Y4wE635JqmAfb8xat2ja7g1crzo3hL4tTLMUdt32RQKknkXBHiAYT27G",
  "key20": "5W8tDjwmAcwCjkEzTw7poUtxWidUZj7ZN1V2AtvExevVbJmGHFqYz4hxNVkNxYbnaihshExhZ8VFEY9aCzYqmapn",
  "key21": "5Vyi66n7jY3H1sGMwqBtLjp5CdiZYt19XyKFnMEK7Kh1UndpCDPKVsn1ee4dN2RXMBz28qHYX1sJWB2WrwEiz2wd",
  "key22": "2S8a25R4XDyBQzwx7W6DMdU7fhhZeHa6JgkPr8pTnH8Ko9XAxF43mLi9dAHrwqZJQSJEF1LiK2NEqAwQtXtcwfdU",
  "key23": "3cNZYk4xCVnM5LMfG4ioMgJG6udZudWdbdVdr3DXzuMpsEWuBDeNAmbQcogxDUVQwfqAs7FfkhZwfY5TZp1yCbqH",
  "key24": "4p1W87BKb9K7EaoWrhFBNA5a9ViMSWDHUmJVr9Cdw7JXa1ZM7m7325J8MRrwzvKvzeUZqnvv2g5xQrBSNTwQMoYZ",
  "key25": "3zWRbRDAV2W48485kPvcGEB8VLyxDuBAESEpHWmQzn8YNYA8UTDEcENbQ2wSx3J4NAq46ifA2HbWFHmovxsiYmST",
  "key26": "5fe6W8MyXs7tZ3hToq8SzdeLr81a3n99fV4pTbNwgJuWtJbcqj3XP7sUepdV2UV5Guiyd27u3LbGc5zBu3rhgmUc"
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
