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
    "36s8hz6RYsRkoX8hhrDWXSwXFmLV9q5DW92CmAYFoBiqxfGQrTioDNMoS7gw3xLYjASafZ45naE8bwua3yiFyRKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8DmhVn4CQzTgBtj2LLL8vMQUhcPTp7o7Fr2H4F6Snwx1r5DybMjsCjtUX8ZKAwmGu3eNweEBDSw6bVKcfE6Cdo",
  "key1": "5BKT2gNQhRDCNfJrF4AwaeVqiDzYsjHnjguruAuQCLXPLJkhd5aCKPkrDnXSF1tUXjTiaNzgQpUPJkcw4pNBZkLb",
  "key2": "5VQMZw2C4dXd5z3ZN1NBbscDNz9FFe29VuX5vrHQHcihnqQ7g3uNorgBHFGsRFgpuU38mWSoMbagzLzeMFiEyVQa",
  "key3": "4EiHuGeMhr7TRXsMEYN2zC8h6EBvv7AgxZLBJu5qZyu1JY9hrnQMi6VY6gZQh14LX7pvttTQQitJe11K11gKqfQd",
  "key4": "mueB2dQFgcQAPNcvkxHE6hCGqSK4c8UkQXiyFoiYaiYFwMsRnW2hjwcEdTeXuLTpCn7UpaooR5MZaK6WDmhcYNo",
  "key5": "4uUZht138Ej9hUgh4hfcLnupJCVVPgCCrM9wfJWqwgCZxYiYV6mHXXTMNzVSkbxTkKaZ2dQYCEyk11BNMJFgJkVu",
  "key6": "5MhpaH82wkgBAMcSMXCYXgsmGnqHXBmS4sFg1dX2ewrGo9xAxijNkYAopbaVxvi7Z4V5Ac4DadUAByoSG8HTbq1S",
  "key7": "4qgend9fTk4c8CAUXNCMrYKqR1BKvhVA5tLrbANLmLQtDwFi6ZMhArZaprpEQG7UCkNo2WUgxAvjg9s7kAUiSFRU",
  "key8": "g8CSfztGEKkqVhycgKPbpQSqAMNN6BgHH4suvQs25X1sQyJfEVYfgGbEP5gSJ21efiyVSdUnPUg9dNLVtrw4RKv",
  "key9": "do6BLZ99nS6b1wHAWu1tUHjMBCThrLbae24nZSmuHuSpMkinZfcXBzHC7XQbsyYqVXLuit7a7umEvPJRxpSPv3b",
  "key10": "5xB27Saw1KHPw7E7STuW5NHBUSDYpyuJawAh228mNL6bESkW4pzUoFzf46Z73kp58V8ukuJ1AUNTbFPTF4Sq3ZYj",
  "key11": "qYu6QzLJ5GXrSjmciBhBPEoguF8sFiazvNxnEACYXWrnntK54584ysvfxgPi8ukS3Pnf2qUhV9sbFs4deiNz28S",
  "key12": "5DqxUyb2ZNBWmt2uxUw5s9QEE5LrQUL8gGr9B5CsRoXUYpDouPrW4rop3UdccNesz7CZy6GpyxBTfoFxZLCdDpqg",
  "key13": "531MENFLAvUo8Rn5pBYdo1EoqHPc7Lx39sMtpVF8YWawWpUtgJCGYFQbDnYegWwrmEixWKWVDdRYg3ccRRinKFde",
  "key14": "7FkGaQYqoZvyp9vi6NNi6KVdL6aaRhqv5GPoNB8yenYbTxkSK7iUAWVf2DsAChxHw5wUzV23CoFcQtWgAdhY8QB",
  "key15": "3hiYULNsaqB5k2M5zLDdk3ir6kJHqP6pRwo9qzTsrovXCFSdScGfaTgL7oSuZiyQANgcfm2nr3nwSWz1SXo7yXar",
  "key16": "2MQ8FAPyKATmZuWHnxs64Q7hkP9UkHSt9nofqnTwqwpftWfGsiK74gVScLt5zp7r7dE28JcA7EX5vbci36tYrmqV",
  "key17": "5nztRnSWZEcn8x1LDuDP7eZsSNR4R8odZk448v3GFvG7eU4aCicyioYq5VqUUMXceW8ohbAEkRv9BmBRDvNzoHmE",
  "key18": "5wogoxqWX8Hd958sPPPxrjx6aNdhrmpKgMerjJ3TPrYkRGA8u23dLGwKAzPrrt7xL5ot6NPt4dJ79k4H8AQwMfGM",
  "key19": "3Y6FqnXJGYyRdMW9N53yBwkvaGE6aoeEAtB2W4S5f9xRchedNe1uaQX2jYp2ay4kGudn5767VPhbFnqUQYC5MVh3",
  "key20": "UqFirokZvQnVkhK6CEQQuasPGrzA5oTGvB3VmCKkcY9VxcP2z3D9LHS4ngP1p5Qmj4V4b3Y9UCHWqyaR29nzHrT",
  "key21": "4d5hPGX5YjPfR3f1mpik2LiTDexRdB4e9AtXkfs4a4c8aTJx8TtvJy83Kv89MBhc7zCTDxAXbgfaqkuVsrjdnQWd",
  "key22": "3WcKwqPWbUoHUtu9P2iQp6Sr8of8zy6Zqz4pSXwm7UjUD1So5zF7rWNmfbWA1195joX2eMcfwZekF7kxXqGKHCmn",
  "key23": "5HnafJdYsnrfFszDKVtpbYtjH8KwRvSoq8LUoZQquHfmk5gS7KkwCSJVbvyTifHS2gM6vx4ZQMZh2oBxtzijtnTM",
  "key24": "5Yay1vFfaMPg5z2SGiquX2bTpStvmgiuGk827z2ETXdJUm5MBcZtr2QQF56A5QZyFA41HJZytCfWgCYBsUxEsDrS",
  "key25": "4XCvwvw3QTmLF5zpYkEYxR3HpGUxcq96pdBT5TaNtoT2bf1vuvzGbTbn4nNXzpQVRMxaLHUtyzvXsz4Zz2fygPH4",
  "key26": "27a2wa6DtKqPVdbVCgiZv3ibtnBU4FdrHGHTrzJNNXNhB4HdHHTegpikNriWY6ZhbXs3VCYpB4tMZhSGWFQXsjqZ",
  "key27": "4govS13LMejjjzkXyke7jBx1aoAXS9LJJgV5dB96JZNAU1bKq1gpLfY3xzbmcfLtDPpTmQaazB7fv3tzDHWL38hV",
  "key28": "4RL4pZJ2EufvVjWnPjNg3nX2UWtBGcqyuiZZgERzM5yusNsYpCrqRwFPB97iePwLv1sNxJxqBH6CAvCfk8vGgeo6",
  "key29": "3attyaxBJ6GWeCPNEd3KqknvLneZuXVqG2NJGyFNcct5xaVfipYDqFtxGXVDXmxPbqj23p1sE5mYqa2HkLuG8UYp",
  "key30": "3aRtDWxQ5Y7V4FK9aGMBwVUuTQLDd3HkgEBLmkdGytyGY9tAM5AzXebzDDxpbLw1i1eQxoJtjjLu7UnjrKTf9zUb",
  "key31": "5ETH3r5c9aQnN5QNCY9ikbGYqsGgEkL4ZmXNGVMQACQBCGi9tQE27rjQWbg6GknW3nrFrEqmu57yaDjp7RMdThwn"
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
