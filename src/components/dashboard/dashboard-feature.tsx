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
    "dkiWbQGcScZRhNwbdZKJVM2GcRysPhKU1jnmZNbYrzfptn7FH9K7W9Es1G31L4hfc8NXebVSWMLNpSiswoXXWZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RB77ALrxuuEKq92TwpPjxCVG9aMhoEkbxycJ4YBfTSGHSy5JFakBeLd6bspaUk1zfW6cFg6UFStSRARyFuQ8ggr",
  "key1": "63pkcxaJaoAbLYnaRwZtfD91pQvLjwQFJN8V5PVekKabbkBkrXYTAc41KhKrfiZq5VPkrNhL6oMyJuKYSjdTJvLF",
  "key2": "cB34k7t7a4e3z2TdmJSauuKkyHfdzjK8hCs8yJxLxQ5aroWJBJwpzP2tdbyZMCxVAxxMZo497ZvmELNB8MKsdDw",
  "key3": "4zVtcVzxFAoaSD2fN7LZZy5ZHAmXzW29RJ54bd4HVTWxPb38z5jw6pecAhRMsrMrjxtWUsvMmqzqLJMra9yRbbGZ",
  "key4": "S2RR6gkpfmp25LWgXvp6sycNCHqfuvsHWxcPNAHDnEVq9zDivMAwXdJy29qqToHFbsEbeY2LhFFFV2VEEZuGjxU",
  "key5": "3HgQdEjTarbmsU7SdQnosZ3tgJ4VdTmf8pqHbM2reRdsNqoLy6i3Q3V9fBJmMTnaaUBU5sJvhMYDAewFn4NKmb6B",
  "key6": "41gFDWSgBXtY9o5Drhj9LHDJas8gN1XZnwdZma4zEQRNvzEyxYSntzUMPZnMtYDMWvk542dNL9wjMJKkWPt9HnXd",
  "key7": "25fawBhCqM6gsiu4dUiQAG3petE2U5RJkSaiCJhFVkCfH9jweYr2cTmXxjYEdmLKxwqEgwURubZ9tFm58GQaZ5Db",
  "key8": "42rvLKG5EfZiZSL8WURmPeae5NwhoNNHDM69ENXHJfVE5692GJhpG4ykFAVoxQWDMn6MFkr3hQcSwmJ6gyX8tzHb",
  "key9": "3NXzGaUNKJLK6LnAXicAESzAwGcgDvz5ns4d9CwD5APTJixJbpnKRmGZxkaJb3Z3FUHVRpKq8MqLvHTQQXyKfjMV",
  "key10": "4mR9r23CjmekTzhA7muTGZUFLtT7pDyrGVGMZWN6ZrPFGjWuxrzBBUHw2P6GbZAGyod4JEfhaQFCUP1UNDLqSoWE",
  "key11": "5X4poum7Y8uaLMP5s7oiaiGqBR8S5NAZZTFVTZy45t4cK2XYX37bReWUbnXJQYJ7WJCbnuXuZwrka2CXzVuHEZxy",
  "key12": "DK4bFrjToQNWjHm1eAiifWPw3ywsbNxmS3BupjUiXMyhLrfNm4BXXnRzQc3hEQjr6EGhXUPydoHmv4Zt9ps26Zv",
  "key13": "4Bg44wRmhL6zVBPGpDqK9bgomcmnqHtZhyvpmQzSfNnyQTfD7D5VjMj4y2ESLiVM7toqrPEaqfkk6WvrVYNjUxvW",
  "key14": "34xjSp1Q8DjuNeNFySVR4uSM4rU3qHtBEY3NU5P3kHzggQdGAnQD6zxBPbkbspjnjk9Su2g3UJMQVPtWwS9THGAm",
  "key15": "3Ywi5uaPcL3ZGiztrRRU55zoUSwQ3mQmTXNrpNfizdbxfqHiZh4GcFr9j4v3U2fMQoviRihJtfM31LgnF4eoUSeA",
  "key16": "2KYZ3CqdbyV48AxZbECojKMjCdRuu4PY17K36KMvPkhFoG4kwhree1wyKLa5PMXbQNgWjcbt8955KEFvXFftd6MX",
  "key17": "3RXzBaMAtzJQthbf2BRoFHKYnt1FyjxnajdDyXvgCpHunsDxKZWSgaJo3rdsE4K9xnPqRGfxNAVoKaiXyysmKkUt",
  "key18": "2JuAu59711LKmrEq9f73Fn3gwMgtg3E43S7fm4sHPdn2LVcehD3nfwYqMGemVz5MfB3efRrVsAQfGGNAqKJH9AeZ",
  "key19": "2em1zoVU2abLHyyEdCZkgUmaAVp7GskQFpuY9FS1jjvTdhYAEbts9yfNY1dKFZpihjNMyuuawFQQYbBQ6ghcTuAD",
  "key20": "2AwHGd3nic5aadPgc9wYA9ZXfa798VG2ByeYRsnA9RW4xFBmhdWSL9pyc5RJpQ9cRRbxeAN5NUfSG9oSNyQLgrTJ",
  "key21": "66yUzJERuPjExpoSus4LragN81vmTCeFA7ERZwVvSknoWZWoH5u8UUKyia7QEe2fRkKaypEsp18ufYNDx79MrjS9",
  "key22": "5JKx6xgPvEpcxxqHC2imPbN1bLKgGxhPWDQ7iKiC63s51PxhJegHxxMNnYkfC2CbH24HvgosTjhYu1TKJbggvLGL",
  "key23": "27dXEh1axCLb8nLeofSs2PPmeovHhpwfT6bSd2KQ63e5mt1x96NcAFCptriQAKL3SWDLbM4PqQBrJW5pGh3TegH6",
  "key24": "3PJm8KyBK59x3uZ3Po6SUETTFf62H7eZ9QLiAQgzBPcfdheGRV6dU4QvrxiVWRzMLnRnHjVYsqr8nvBneenQcD2G",
  "key25": "2jAoUoMZRQTKpBu5EWMftUtjCJHLjbJgZZzzoZy7SfQgJZV6sd6TquuDCeiARezCgFdL5zxdouAbXrrKdJnCfQeR",
  "key26": "4nTw6bLaPZC5HpwkjyKhrGxCL1eStyjtygMFMMudauBWSe8YzBEh5iKwHy6nwxFVCdvNV5Aso9gfAwxrpvZwx5PT",
  "key27": "5nwxyrqJ7zPgJbRr5cGeCb2gLRAFcuaKxxM746nxYb91Gegzd8SEmhejU4uhpRQTPgBbRty58VU5AKYkxLDz73V6",
  "key28": "62BJN9Nw5dQWNSwNhfKyxKMw7h1SnXuacSJY5HWpPoZs83JRWp9z5Ra5w8UxhyHXyz5FaEc5BtHi2oeRDFdbAY6z",
  "key29": "4ZZ95k39S27sh4PXqdgdTNMFNfyCpfRayc3gsJp8ynY8w2GHbrECVG3eb9SktiwHwRuyfuLVAZTNLJXszmbvT6yf",
  "key30": "4U8E5W3jgMV9Rc75ev8mSyWdekYvxR6zDnGKGAfSoysYQfDN4FRWf3x5Gu1bBufWaSmoAXxYT2n2ZqkR23gs77TH",
  "key31": "5Qmtcp3nXBM2nn5U4inRRky84HULEWXSVjGkPitH6rybyRfehb7jPB4pGY1xEsDCJf5jedWiCJWss1pKZjHu7QFU",
  "key32": "52RMjLSXpfkusrz5AB7VKzeUKCdC3pEAsq9TUy688GMr2tJm2fkb3s7uGwSL2aDuzPrrF7FfcMdPyTVDWdHajBfo"
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
