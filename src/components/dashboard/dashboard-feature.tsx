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
    "4o6QjFgyk44hHiVDKh5jLFZGNcEXUfXLbXYpNd2vf1wVz1JGBogieF6pZfUKTRDzUR9QFyizeHSYoXT5AiwN2CVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xd4PezwxgLcycjMsRaigyHuFBEnSey5JnnpJpKBGR8manGnv44prmuMNmaQ5A1breZ8cNo8QgJnYHE9oUSYtuDK",
  "key1": "3BrDdwGtZhZ1m8D7RhZs6PGcmRhFy2tf6LMujVvjcs8foNcF4uz3vt3KNUxoWr6SAjC4qbQ8ifx5yfsKWradkiKx",
  "key2": "5D3FeEd8ABvdqgkwvSLzqrVMRRMrcVQND3JaGVUpNysUpkEJH7X5upMjkX7neyx3Q1fWGwS9vSiLij3hRwzoSrwx",
  "key3": "43FyayfWsgNnRWHQ8eZrFsx2EWxwVWhRvM2tyevFWC8v13nddCE1KYyJo5as9WxpWKzewcMEJXgih47vTobyNGS4",
  "key4": "61bxyaLZ468ZAF2p1L6frAk8ZRYpYovyBbjLAHQ2hUeu54dwfYRdJh8T5Gcn6W2uiTV2FtmPRXRoGpYp1Kz8atLS",
  "key5": "4jqSKqMajaqMWBsHg8cQM7LnKQxDPjiWQ5ugGbTf1F4DEKLUy6WUNJZ1abn5mNjxjC2nwTFCDwSrbmgfbu4Ykk6d",
  "key6": "2LiuLYMEDb4sMJAREDJV28SuEMX3H3967V5Ef9LsivoXVKczPav9Zf43TYmnqYAYq5CMzts1tRkjf4uSJ8w8VLzX",
  "key7": "3WyGERPJXaAJSy8AZXE4MHMAyKSyLWYGKQ3Z7CMurA8X81BzjoC1WtyoKCfeecH98eFEyu5aAbpeq4cqAJgKNEXb",
  "key8": "5M5cRoqBEtoZDuptR88bsvkG1XYmgtArrwNgXnZ66LNLuECupByg2EWucmqTW8k7cCVH4a88F9z4dZuUCiiwaKc",
  "key9": "3kjeZTLUpgoPSDxFnaiCuaqyQ6itZMcMqcsKVtcLdztHw67KeDAn1154HXi2HxuaLLEiDGgA5g781BQiw4LketXy",
  "key10": "C5thCAxDkLdwyXGffnUAJSZGpLPo36KsHGLZjjHvHqLfUUgz92ZfvNcfeVt2TtX3cTzJG2rfssBjnF1VyrY13Pa",
  "key11": "u81WDEXfLk2dHS5ceUB32jd1xeyNwWMrun2aN9gkqe9qznwRBZB4S4UdeeSrsNV7DWM6pMoggvcoyqdq2ZmMyeJ",
  "key12": "62cihyXKDssWqbHEVdXBz4MH2wLSrWonVB3mRwnt2LKDvb4fUjEnRXH7VsFg17biyGyYu8n5ntR3AfaYRkQoXqSk",
  "key13": "46dp7w4QVhHKaVJGu5fg8gJrhLmsy5wVE6p44wtFFVntesuSWo1YTGjnC3VbUQPcXvMRUtip3XPSNE54bVA4554K",
  "key14": "2Nu7tUyuNG1GquhhdYnyb6vLrgo5xPes9uAeWUmYVDn93VPPznSYmJ5rqLw33tvXaBprminf4qbaKPMuNn8BcK9A",
  "key15": "3nDyL4119Cu22TdxshLyuBUq2BHUWL6N1gergZsDC3Y5kJKHufTCA2zkKeg7PF1EQoojY9GYahZUUKBycwdiXb7X",
  "key16": "3KWQebJ9x1wgiRaE6jZDUbqzvomqAPygH7rvWSDKm2FNz5qNqWo2zw4PAH6LutSHTxjxpk8x23DDMMJdSD6owa4B",
  "key17": "2DiRcioibWGxWNaCFuVrB4uF36593rFRtGXRvpSWjfUddMuB5n4dnM9wvabKtJ6inGCyzX2x4cqjMEXKphmn4yMm",
  "key18": "4v7ViFes25DJQcUTFDujW2amBMnszgWRxeMvfWWXVi8tSf6riWhQzXMo9gRL9LfY4qyHMioW8xgWLP7unzUZiha5",
  "key19": "4ZC7oRY927jioQyXqXV2RcksUFLCmJPQBEvV5mhnP1oSmrd1bn1KdvQMmo4k4PKEoKofEKt51pnr3AbGKpGeaqw1",
  "key20": "difAaV2Yv3YmuUaSt1CT9jEjKSR7k6ugLusLohVsBbjbCgGhkzC3iHHcaESNsUc5pag7rhFpg82hbK6qTxKNJMv",
  "key21": "367RpVKtPz8XP5unzy9yWtLoiBMGhTFXxPuAioP5FNaJBGXBZL9cfo8JWhmBAQ2ZArNyrvkznmAgAJ9yKLWL6PQK",
  "key22": "4XFSkenTftogCz7rwb8ayEfxVsng1n223afMVE55QpTQUsAr6K9s6Jaac9KHY7md7uEHexjEkW56UohExBSUct3D",
  "key23": "5csh25PWCj7mP2N1QuLhX1uzF9AZaJPpcfH9ZpTkeQrZrmUsbm3dHeH6VkE9Xiss2H4n8DKEve9otxZhNGzZdoff",
  "key24": "4KyTNZKKNTN1F53unvyriqoKLEiL4iwQPt93dbHXjx2M2iST7n24eMZhd9PpHMmMj1QNGt5Uk3LgrEawU2gq9pgc",
  "key25": "3mpRnbLKbwKLknh2zdiCYfzVFfMi42pQgXZQmvfRQuVWNnucGdNqAMgXamURkeV6md165VhZ7XuLNDitPh5eNJDP",
  "key26": "2xFWJyb8ThTshCykEhHF4W4anb5meGxNRxwpbvRim8mhsjbvsongJxtzC8G8jUzRw96KJG75NmdFjtWrCZRr2NTj",
  "key27": "53h7KPqTA7YohPv6o5MXUDcErd7zHpDp1ZHLYgDk5zJpeCBypyQuDKwDTxmhDAd7B2Vas6ahzZXjBKyE1freNYfo",
  "key28": "296ojknw7upekHxWqD6XnscocV3hUmSmtEn1FRKjJicDnEyckT1CuiAsNX5j1XCyMCLnnF8NZ29oajThbr81Q9nN",
  "key29": "gLdzRrpjce77AsVPKJJUT6Jr7CWC8MiAPcM9jZpCmKAooJGd2wLVqwpwm4YQjfEkNxD5ftxhqE4qLyZ2jD5ggXG",
  "key30": "3wi479uh2Yd7cTomqvPsWGroA1oHR5m6ozk7tqhF6SXucP7myfgrxuRTGZBdX18zix6nSpcS264XQz3shxHckLoJ",
  "key31": "4En8i3knPNTkSCwLUu5Q82cy3Qxmgx6aBY5v66o3EoDjAsSuZGNtPP3EXJv4Du3UaayXVemooaGjY3d7LuFKbi9M",
  "key32": "5tb8bVjfYrHzfhDG4yKhwuNScVxJSsByxfXXVrzADSyWvEuAAXFPoRyiRyim6tkZUU67T7p6fCNMeb4CEyhWDjup",
  "key33": "5h8YPvvN1nfxTwmVU3gTQPwwAjjRPZfniSPZteysSFu4rFBkPDbrzYU7Ruk9NCp8Li78KyGzzE2HxSUGkxL6wBWy",
  "key34": "2LbU7dDzBx1UnvvXYiYQPeSaV1z3ktyQoYi8rUAMM3pA7eSswPehD3eVW1tBdrf7zHDrnqp5ceFRrZg1cPaWYPxa",
  "key35": "5kQ9sR1AJKphE2XCtNSKWP83iGZsvjVT8X53kpUkZZ4xPfa6ycMo3TtPCpKr6edZ4joEVhnmGW5CEDoF2d6232ob",
  "key36": "2kbNxZsvfZdLZtHzBofkFvWnsZnRaNYPQTSdp8ZpexA63kUpErBVsorFVW5WPJtSUCSauhPhetbxrRAK9yCmwM6w",
  "key37": "4g7jxvdwAgkDPqw1rKMywuaqCad4WBdta8G6rUPgtvWSgRbKpaLMKSGsyzwhb8TbiLSbVQKifFRw8vVPi9jKK5EK"
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
