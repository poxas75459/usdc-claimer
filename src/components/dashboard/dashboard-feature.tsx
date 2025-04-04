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
    "2S4dLEhKWuL3gLf6gpmje8BQpZsyVSBgnRn6Nt38rsZF64zn2CTYTq1KNxX7TkMm6F9pe4RH6gXp2V7G1yjRrDiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjktWck3FEU4oa2PR67uU9kDm6V582Zj8SJFKjbNm7SccD1GWndJXZKWYbyEgafoLTqLhbGs8hZ4b7Wpt8adcWb",
  "key1": "4XN1fGZZ2ziSqnBxK4Vhs97gdttC31adUHhQiFHaniWHuuHa2dC78SBkbeHdyeqH8m5ThozNxRCNqkpXXNdd98N7",
  "key2": "2faNyCg7GwLYhnmv27epq5oLc8XMW8udqZADFBHPnpzKh2Doj2nmAp2fzBnVqJHprBpG8wMj62hNGwA3HXQHY3sS",
  "key3": "3Uu7YyD37zqDsetzJvJ3HBBNWKWDJz7cCYipoftvZiqnp4EPC9Ti1NygFEnWvVFE2Zg9WxSYwpTHmmGai5S7bWdt",
  "key4": "7ARwpA1GR1xKSzMWhZDMmLfLFkerqvext4RvBDBortTd2X9gWiTC5AGF5wFHSXeYvahXYM6SvaQrnTr6xmdZcSg",
  "key5": "5P2tFNZc2aj2TL3DYN8Q1JxPQz7wMouRKxdZ3D2qR4uGu7ytuv8VDfQMBi75xumye9PLYPSaQC5W4TdhoVvqorQi",
  "key6": "6xs5xWnKnbvYTEJQea4y4FPUpF89LxtMKKH6LpcmD2GCE9myfyXp1K5QUud3Ab5QnHUYvoD1ZkA55CN4D76zfvk",
  "key7": "4r1o6q32Ji1xXyCL8dYqutcszT4fWLbUviV9R2M3cZ4RNJFr1QC5XzH7zQTBWL9BKzUDjprhTXAbVeWTc3g8UAG7",
  "key8": "23JBJiUiLjfT6mGVEihri6kXC4W7o9e1TXYjDUJn2PrS83omb56pPwWzRYxy6YshJ6jo5ZruVusg5BadsL8UdMW3",
  "key9": "3kWaBF1qjrF76ZDkwvHwEKQFh7hMBnMQnQDWL2t4UBBod7G8Cwn88Xv9XmjwqPh7K1rTK6DG4eRfKMNrQswiwavF",
  "key10": "A33HLeB42ET47jMt2gwQHhWK3JK3irVUf9pWdDJ5yPV4JodG9eygpiYUXqxLNymp4fuBja8icTGntKEAnCZpSAa",
  "key11": "5Bvszstz3U83CrnZxVyT3ua3cWdy24NyM44afQCLMYfNABr6nNs15m8hBHzYeh3Wj89NEbRwjZgTc5VtnXom8LDu",
  "key12": "4uMuenZWLDFaSuuzyCNXG1hkmp12SpNznczBjvQbLpQNTW61oDUxtkq4d7BYcjtUwRkkQuYJrXLiD9wdtamYFQ8m",
  "key13": "3AQ1hmRGmJYgjJo6QWtcac7QsZFhHipovdRqw9YWcsfvmmqo3bFDJBVA5Z8oiWhQ3TCA4ox2oorRVNUQaye5MEwC",
  "key14": "4Jn9rGLuPcEXobFFJSoSJZdF3Q7JZW6AFBVNCTFc2BHwcgFHZYeThYoXVvTQqtPKJW7mRnUjkXwEBk7nudr7WX7E",
  "key15": "2xsvJ5iA2PaFwQGdCgYuP3mherN5D7XAktufggP6rdZ8VTaqTuP33KDG9FFn3ftiJFJFPMRBsT1ewqXdXJn1fdxc",
  "key16": "5sHb6LWyhq8NtTLLKserx675cqgFe9XX2AReXdcsAEav9njB7pZ4r81VRDkppUmph9gyBBsMmoN5t1MhCyC2V2WZ",
  "key17": "4CFEgPvGk3uqEgnMhmbsLAs83gjJwbECEFbjrxZsDhUf5jwjNW3xnFcrTGTzcFixmVkoq3tt8ttfiYom7QfCAsvV",
  "key18": "JNGHytFsdgCEevBkLetxDWcYx5xpMjLu1HZCnmLzek24qKFp8jZ1dohtAQCouz1wM5mmuJKjjnnLdwAoeFMqRrz",
  "key19": "3gUkVchKL36PLmBani4N5D2wjD1uRTAgYmAyxsxCMwwgVQWd1ocFac8sNFA3sFHQF52ouM5MtzMjtA7Vf8j5mH5Y",
  "key20": "VuVdMcftm6GBfdiUG4doKZ9S2ZdCrNvASkuTTzos7qbQA5bUdFzCjiYYj3TeQDwrKLmdWkhHujP8mKAqju813Bp",
  "key21": "3sEiZDuNLynS3P45ESa82M5negKua4CCVxRpvPxabjvWsQrmoeUd7VzPbdpUYCgK8AaooZNwPcUS9krtVbTFh76f",
  "key22": "3Nfb7Uhhhu9LwS24iGvDagqtwsM83vwkMM1R8Murbrejo4mseMzanHcrkmjmWP2p2PwvwoNzgHh6w1fV39ATw1JN",
  "key23": "5r2LBifivYsnjm8hg3YzyTPHFZ7ohpvG1HjNGXZChXnmWm7hFCicGvy7nbQNyCf1TcSfzSYLXyZfXJ3mwBDHTtXG",
  "key24": "4zA2RmgZKucmf2Z6TFNzFxSCGcNaPhzxMLvcpWjgYc7EeMWoDwQKx9h983Lt1dVEuqzRoV1gXD5QDHKCFMM5B6N5",
  "key25": "61hcSJNf5JXNo4xtJHe93Ui8q6h2RyeDjkkYwziaTtzNFL8ijpBwpQ3MwYQA1ia3kvoskqDUgZJpH6ebyG9Sxsux",
  "key26": "3zSpemDzMkaLyyqa9n9FVERuSvVxkCG8m7synofgNGR8TuV8R1RzNyySptBbfsBs2PEqCyq4qReVLzWCXu8FaLDe",
  "key27": "489mUDAYJws9SxT8qqtipaAyQ72nJ1cGgpsyyvBzixrQPDwL9qoM8SH85sqiNNQe5RhRoS8t9pG1ov5HHjx6CnDv",
  "key28": "3vaUTFpGpBy6wvyteQZQJ4jZbQ7mVDWpU8b8AqHdAwCr77pemU2g8kNBuReYRRnxNZGuoUucT4MBNjhUsNcRh3CS",
  "key29": "4jzemwJY2xm9gwgGPvdW9n8pWSokyJ5u6PcbEsNEqY3PoQrUydMVGhBTavmyK3kWgQ3FYhFTWcwoywYfSQCWmD4x",
  "key30": "52QPu4vzUTwSweHR7iTpMwXtYpK4h437r1RcXSfPsaBitJ8XxvqBiFSP77Bp1RWVpa2FpttaaPgX23cH8rUhy5m6",
  "key31": "r3eEefTjB3G6zJdumEv9DYSm7gujJrAJYFXJaLA9pjrhdCiKC13WATLhkC2r4Pa9bTXomrmm25MtPLyDsyWLEgu",
  "key32": "5AD6yUpvnFW219SdABQs5JFYpL9coLVopamtHSFNhmDPM9DdoJ4vrCXEQRu3uryUW1qk1QvdT5bjtKA1fvmziAs5",
  "key33": "443TSEPF3JkwHgCeBAswGpKUPuyYA82SptLpJThKofg5vmMzeBSrspBBDCJjDJEtkizWtquuX3UfkPywJmZntyJx",
  "key34": "3rUVPDm78rLjyAB7bSgsoGYB9XbghcrUVDx2P8h1Cf8yxzdJs7oFmbSVD9CAqetN69ksGnDEMYvaHroYgT92drxh",
  "key35": "3XVoBU4UMYhRWGUorhNgMAndJp4u7YZy1tfxUZZoCFm5xVQKGHZFduWRCGRHQGzYbH39grgyoVRwTPBvDihV8gcC",
  "key36": "4DWGgDYgo3ZuCzJK2GhfZBewVVc83aQZoUqxRzKEt4kdm1edjS8Ld1nM81hQMKBNBeJRfa6u5R4JzA71qpqvcMgH",
  "key37": "2YyPx3KDbkckfzT46RsMj5xUozj2oiUyY2GPYwatkZLy1BUGyr68RyabXjyqWWqLoGAA3ihsL28paw8tQsHdmr7Q",
  "key38": "9UtqnziWgtEqjXaW5793ydXQqou9RRyhz5ym8oZMSaR7kG1XSbMDkttwXQRp8ii9YBRAEvCurBXyjemo5zSvmju",
  "key39": "5xd6MPzvNpeNCYsS8DVDcjG8cWCbcsV6o6MYxKmurJKVckD2emnxtLTTDzKiQyyjGhus3DSpFHk2qXg9jHwGxzpa",
  "key40": "2GkmiWvytPuEkQokLaQ6qszjY8iYQJC7wSnG8wSLk4pxkuY8zSKnA3zxBWRd6LtFKakSgoe6cTuvgSFYkfG1cYUB",
  "key41": "3ZPXNbonqCivDxFZUvcVbnW6YPTdTgW4aihAkpve7HEawzM8SgJwzxgYGf8ihgQuyQu7yg8MdzFiKEu8skALo3qV",
  "key42": "24pm8yat9npWmLUHuJrzF3J32xAnZBHDjcFWdMfPa2LHJ6avVUSNpiBRiZjqzYCVMQZCHRWoRQZuGJwt2nTXGJcN",
  "key43": "2PJyBne4P2rSewf9WWQ2X4enDpyu7uQkyFhQpy11aDt5qL2oDPwn7fuZGEBnMKJEATzzSGJmHNDrSf1KZs5QHuZU",
  "key44": "37CWY83YNS6s439UB2DeVhc9X9MCP1nZvenvyKk8kEtPyuU59hiyYzUhmPp5qa5YizsDnZHGS6epXfrFsJHJnZXU",
  "key45": "2ozEZtDbeR1o4tcUG8MNU7Zhy43fetuQM5JaHj1hCisTtDFmXJDqcMi5Gwv25fTMthZfeT37poC2kq6M2DW1M5V4",
  "key46": "298TERV4q6NVefMXnYwAYn8tLSKHsMt9tVXMV1vsjS6pBQZsUtVngXnwjWinfJNMAKtv8TF7WW3tonKtFWBcHULS",
  "key47": "43CjWsydTQA9JMd1kFj7ViTuVkBSf7zuCXv28cgbxCcb66JLu92xYedfkRMV9ZyJdYhFAZvaDogadbcbCP4o7izS",
  "key48": "5WENiZRQkJ8L1hMinoWPFtHgHhx8Bg3E3MLpBfU7J3ykRoxfsZa1bd4Ny12JJyceNwLXWcusTGCiEAcixcakudzJ",
  "key49": "2Me1S5nKTcHNJ61i5EpUCrukK1oLqNXqhkLpBcyGd5QYenSyPeCau9m5PbfSzBy4BjdGvntGdfDeS62rrxqiNsXD"
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
