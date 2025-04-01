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
    "BuoKjD817EKvv7B899b2MWqjWf9erGQoZRbRyhkGryHaKVojuVA3dTYc6SW7T1pDcAtELJEGPak1DjzwJAKRYFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MeGuAFaQ8s3XucJdkJ1VNV3e9PxHvEjLtFUnPKDgCpCGmj4GtogZ5KeLiBPevrQnnbNqeKWbVwN6y1MZWvnhDtX",
  "key1": "41HPwcURACjAcGYd8FUPWL9owAArAWXy2LhY5yX6Ku4BmXBeWWJFCMN2Rqfdieq23RPX7eyr9uwksZjfcpSkcAuq",
  "key2": "2orhuJw5kitwsdt4Yh5SwiSt13d1sjEPVLnHLs8XDjCyHgUkWgS6vyBvwipimFacjr41qeCACn6tXutpVTibyVWo",
  "key3": "3nhdQF6dgvvkfwLZg5VkHvG45XJu5ptfSqWG83VhnJNdvKi4Tc8NTEnmvmxexmavNEq5udedw6AMsbLUHDasgW25",
  "key4": "4JudCe9sUeP35WhP5WVCskqwhZvKne2akhtatbwJX9p1eYKPnFGfeC3FSV4V5L2QtM1PmTwA16JCm2iYzcmoy1NS",
  "key5": "rTqfD6usgL2yEsChWBJbuM3AMsmQrH32ZRsY1QhprAjbqcmER3DdiJqbXJAuq8rkBv5PwPtWgdHKugppyLcg2DC",
  "key6": "5av5UZua1kQyL2eVVbfDxQhUJNwqrof1F1zbAZfjxS2NNkQzur5Yz3yH45WGKBRKoRm8te6HabQZ4M7iQUEdNThZ",
  "key7": "2ZwZezZ1Ttp89odS3W8bYSai5VA8r5xfb2KGXfinYWVCehQweS1iMqmmUriVkYTz8ZwjrS2ydvwNrpg1rYFShYG",
  "key8": "3oUKgsPyvc1SomNgxJx9fnTxG9Jmo6Jt5JY34SP6YMLrE6ub39kA28FvmfjUKQzZzFk9ivrVzYEGAKeazCWtbWkj",
  "key9": "sdgBN9JsHzrkdsaU4KXgJJMgrnJk6n5iceRfbuu3USDTwVN3Rp3HZ4m6Bkdu8RJyTSPJR8DahBEZF7bDGPZiQcE",
  "key10": "5X4EiRN3M5unPbZUCyAV981qE4Tt36CH7ahdJwqZoPtmeBJtHgHUScT39pWgyNVzrJXurTr9vmDyjYgt6TKNYQED",
  "key11": "4w9HEGpH1j3csy6ef1ddmhFstX8z2g7Bds2n6YGyykkhU1gA4enCFdg2acPsLrTGCzAQ9pgVDWro5PW8vfSubL4g",
  "key12": "3kdCyaMEvfaUDA8s6oFbbtgNJJ4rVxSgpgqsbaNdJF37SBFqbNnPhqik7QcgDuvPLJEiAwdSgiNZh9drtQVFNg8f",
  "key13": "4XZg5gStDHBzVNqoh3eYtnrjSJfzYGJd8Whguk5onnerdEUSgnNAwUZwLaypzCk1q1yoaRnP2A16mXTfy3UQ46ha",
  "key14": "55njoXYZnmEgnGokoQvoWRPeuT2pJnivbYepzhFmwXUeUDawVaYuJ1b9eGKrZ3mwubLTgtQ6A6uEWK7S4jfgBZpW",
  "key15": "5dcoAen3CHb6hhDARBQXxaDVaQ4WJ77PGTvXjzM2MSVkVTNuFyqeaU19qMia2pL48p8q8TxhYHx4pDo6Jqp6Gkdf",
  "key16": "4njAikzG3MV5S6CBC36wPpsXjvjUn5ViQrbtGJCS1vQnkQvdQEywamq7nmF6pozDJMBQPDZp65oBQ8WJz1xhMmRp",
  "key17": "51P98ZJHs5RGFji4WUTDUypEFwPMTKhDkbupkKdhKBtmaywepzT1AxaXuPuW34GbxGzAmASoeJ9zT27SkQXnvSd9",
  "key18": "4MF1YkCdjCMZTxxeHe4kXXsePx5MJCYJjGWP8fDdQfGaY8e9MJ9ks2bKKuEKeM8Hx5mJvXAY5TPYyT9oprnKbPZB",
  "key19": "BYmk76dhTxNBHxN5tN5xRWMrZ23j34b49Upmr4iaaNY9Qz7Hu8tPQyZjT9WkEXwXMzCTvMYvbtJxCM635XJYMk1",
  "key20": "26yeFZ4qETDTQJtXs6Yik3hW9pwLAiMJ86LRLD5v3GxZZTytqq77W2fRHeuS9jKgTqeuq4c39TQmsmKPC2FuLTPn",
  "key21": "47sCeQkTNRoXpt6kXd4CUHNYjGKdqHY9hHpME1SdSBw9dDrdSbHKfNyCzSfytENM8zgrDfKbQ13UxZU4jn1r9qcc",
  "key22": "5MYLpgHbcrUszebHRoewjStb6VHjgDp9LGwz2jZUHRsVVNStLZyeUgUdhiLR7vXHGxV2xie3xPmK3PgTEmjh3Ggk",
  "key23": "3RuzpPx38Xms4HMnCeZ3NhrHWQPLuQyrcCZ5BXCZAqkufhU5Z6XYp45NjZsFqSPYRpXotgo7tyCLEBNRavgYwUkv",
  "key24": "4XQWRvRG7bnDKrLHW4wXYKwhoEpV6N84JMLbAW11LKp4g2cae3yAoepCBKfrqmYzaZm5Khy84Wwm73qizhTiDJTz",
  "key25": "9rmnM8VqVgmZSsMhpD7VMAJRsDGZtdYgdXycNKenoap8BQ6CGNUKJQJbMwuzDzaqjW82DNyoRi24pg6RMgKquC1",
  "key26": "5aEzZ2u23SNGgvn1vjmPzq175gRHUbFsAbKbbewgFY9mHBwaBawuj8U7eeuDF68DYx7WyybGnc9aoZhN9MKroF9N",
  "key27": "67nEv1yxSpZmvmgbEh1weaUzP8aTVW2exdnWVNjouzsaivqGH1MuUR6nY8pV3NT1qWzVCJzwr36vxVbTvH7Xrgiq",
  "key28": "3y1ek2feUkEjAPgXHEJCAE9EmtFB5AhGaRF58hziHbVmk6N1cReXN347aWrPKi377ED8P3Dy9BS5S8PWXqjJHdMh"
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
