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
    "5n5ufAD3RoZTPu5nVCgk6UZrXusmfrgXEfGhyZHfLsPhvEhMTV4gV21BgedvGqkotd617dhwgButgVBK2Jr4CDRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bZnn48ufMHXfRF5AN6NEcs2VeEYYkGpxP4G4r4JNkQpyiDNKFcwPh2idXtEWACaBTb42v9SAdDEJV5JGUexYvw",
  "key1": "2i2YSuo5LpkaSgrFMpGBcqVUAgJYDskEDru6xcGcKhYVKFvHjKt6N3L85w1h1tsvoGsqcPaduW49Km1CGRDNC4vF",
  "key2": "U24vNhtVqa6fBQPWA6dNi8FXgEEcpYRXx6umyHPbJyd4DtTZRcuyBoaurKpCUWmc9M6KUbq2JpHPZ67kVzMAQ5S",
  "key3": "49g8RohsHyKCcFJUdYjzVvuUXgWHU9tzoBHtyHv5sAAWiPC9C4EZ5utKVEUEiq6GGFkNGXvEaXLMmdUoYUnUtf9N",
  "key4": "3r9ZVnZ3KHHvRcmvMLRbCpFbNqohkW2qxkdufYNgUckmzAjTnSDEpXSNbjaN3ZXzbAvrBDLLCN6Wr9z43jHwnLBy",
  "key5": "4LB2PZbYmNqh6Xj3JkUxa5W4mt5qQzRfCgzYNYwpXLmQhAaxdgpTWBd7NfwHP7czUu872XSMcDAWi71kQkmpxHTN",
  "key6": "25oNUrdCJiQUmcXmjrmwUWqR4R1ceM7rNbrgqzYx6CBNHwLgDvBQKiyPGGNfN5fj58tahZ2peHNRq3ErjBGMSuUy",
  "key7": "3AkQmaoACCfv8c5mLmPjJKfmQ6PC8QB2AymhcQAxuhdQCSQsiGojDoSPBmrQqaHXw8FKeWkhGGogeTmshJFuuwZ9",
  "key8": "4sBFMjigCB5sZ2zePUtw2Gbyeiyaj79mLNtj5jbyJ1cGWbkf4GgLipp1hrLNBefTzK3reUzh1L1zuesbNMMrNXSe",
  "key9": "3pX2MPoUiw4ZWnk6RX3hPNGoGTXsrGwbxZYWKCjtR2zn7cEKscFCkYLtxSgZbYZvxWQ8kkSTtcx4L8xYKkAy7DgH",
  "key10": "3TQ9qhXmdFyRbXHov64yDRBv7vSX22xMAeQPvw5fTqgyw9zJwXj1CeXdH4XYp6DwbftPwEUURpeey59mx3v5r8HY",
  "key11": "4eFd31xQf4Y3VVpdut4Ht3HnSNVoAfJPU27hJXQj4s8qCJCqXHYs5ZPgguMwJ752SLvqgWz1DbMZnzzXKtcn7er2",
  "key12": "2PEpQyrWtSLaimJ8dZNcNe5Dkj4dLcYAgND7n6s2XVQf6yjY3eCBXhATun54o9hUbYWU5k4okC93o17oAsVC7QyD",
  "key13": "2uZBMpxEjjP3JsrT28hALT9Dyx9nYMzFofS9XnGdE9GDxdwCVqrJPq8ZrZ9aKW1gEw8vVygJSCDhiUvJMYVVMbtJ",
  "key14": "4eQAdBHHu5Ah24Wqh3Zoyi84omQiseHeKmFK1gquQsD4EwbXnCau9RJ2hZ4hwacUjjWeAZqdAGNuPfeV5Dy1cbCC",
  "key15": "47uiwaaeMnmZ3ExzP4Ej15aXWFQZXgTFF1S99hmi8kcnNsEukBSEWTakkdRtTKi2EhbhVniw9ZzDKayvhA6p3rEz",
  "key16": "5eLAGh2usHtFCAFWi3TS2yT7a3CCEs9GNku2rdMYvqNENHj1DHX2yLXET5QRH9RrEUgZbuNyZicNQWvTbsProHM9",
  "key17": "5fxLCSnkYkFXLULBfwVry8m5UU9vy8NhbEmUmckGoAUuM1bofgwNssew8eraQLZxaxnRQkVVqXqnWbsRsrarq5H7",
  "key18": "41H2Am5EdYM8swEfk9ob7VTXWhk4fmG8ZrzzV8qUatUJqXuWbdfQBKzd8pWA3RtKHSHLKHr9FmpZcuR6P3bFt9DZ",
  "key19": "4y1WD4oVRkojMHawDmTYFwERMDiCXVert9UTSvcWk994VmKxsfteZnbuf1xr1v1iwZJnA5BDUU2Vfk4NeghAqpJK",
  "key20": "3t4G34uzrp5tLCzXks51aEKPfA8CDBavd7NjYacaBexMRf76iNxnZeuMTGVnsPzPEaxnv23ckPMk3cS7mjbejWWM",
  "key21": "2Vtj32CgdWnnBxwXeksLhaPuVXLZwDr3Ev23JT1h4q1kXpQyYM2p7L7wCrCneexxf1ZXmCRmGzv5k7GZgS5vVH5Z",
  "key22": "3K27YQrFgF77MVjbAwQARm7ymipkdLDvecEWD8TiDqcachrR6B7NYi4iJA9VdP1fsF932abPioGFFLvYfAyf3jNH",
  "key23": "4oMBwNUnGxoqMxDQMu4rnc6rWRFcSAoU1rZbD1WAEwA5aZMXR8gYY3zqSBG8uU2qFyYGPpJTBN7AYepWC3R6zUsK",
  "key24": "4LuoNPpArXTg7gPzvZkUASZvroBuiU4kUryqkeGrvyfW8SJ6gMFe2a2onZyPsmnmyyYQYesYFA7pX88C5odCg8C",
  "key25": "dmn2EGJGeRgadrAZzBSBjGHz2gJscQDPZQFkf7bdyvoWG8Qmfd3sqtRuBWTXugqXpZvFCw5XtSw18Cfdoo8b5KT",
  "key26": "3UpqMXf6i7BXtUX3E8ad5RNA83VGZ86DgkLFReVyebCFoU1U2wTqsz5ZhYXkEaFWYYjZEUNucpt6qTBRGkgSfqfF",
  "key27": "3s9EkSNjzSEqaZJpQRXufPpzdjRaBuyXqGmNLyrFxqqPhNP5nUxJmaRuZ8M4zvtVSnk7VEDPYyMmkwgGEuSTmcqR",
  "key28": "4BUcYymbVpGUMp6viQNs1ozXUFbVaGdfK6Ku8B9m63MDJDpXKtXR9Wtz5nBBzyygruav1r5cpNQ7sbgK8Hpm4Zk5",
  "key29": "5ZyHxveQxbkesuqWFZ7VAwm1EDVByKBHKbduWy1L9vkycYTuHti8rrsu25omH24uY27gigjJ7mCvSm3oSMTAKus2",
  "key30": "33d4y8HZURZCkdvCK1wUcHF86rujvFRm7TzsKm7Z7hXmKwSn2C5FzP7JZuARmFD4ufiCgJU9kLMy3uGfXCLhEyyZ",
  "key31": "4ZYBxhJt3v2toQszZcrCRmMwyvCho2uiaMVDoVT99XKmvzVeyeg7Qxum5b4BGCG5VHBrX6PLYUg1gT2JqmM9Uc5q",
  "key32": "FB8xPdCfrh1Wth4sw9FCYva3MuwJM2iSzbktb3KWNRsHEQDZe4d5CQRofJFbUwah2xZ7AL2cZNuUGPUumf5oJEQ",
  "key33": "3MBet4EwN26SkV4vmfvedposP6KTTq4fx4CPXb9XQ8fagP2XZXUEWovSTNmXadPGrctjsMcPPEiM2ibXWcZKKjGu",
  "key34": "5LxkriCYWPzq1KLYnCR1KmoDsdqP7nJYvUmUYtHf8HSRH1VC7xQ3peynjt99tpmu3UCzqrAZh3nT1mZVf6mqkWJA",
  "key35": "52UQjNXNEh2wE16WZ8wL578XFzPBgtnp58LyT81Xt4bVHHAxUJ6eMFLTfN2hGy8nDEx3LXyDywymehArX9Sotcf9",
  "key36": "3o48qeNf9edeMFGsU1cUGrLYnd5CChaW2amy9M8eLyjV1kkWC6AzfDUnXvYLQvfdgL4Kp2UAxx4pfSqJ9FVDqbm1",
  "key37": "AZySBnsx2MQ647sPfYRFFTDr3FgFZdGguoFgPWBHcXZzLYphmQdLoYXmUaA8REBE8p7CY5J8eW5fPVk3vchPk9U",
  "key38": "2K959eTBEYaDaWgWauXMaLmJ9YnvKvYcXdRgRqKjuG7Z9HX2Hav53gqgABm1DCf2kk3omjMZKHiGBm2GzhpkujS9",
  "key39": "4FoaHjAQoaq9vu12gQN146LgqYVWxHPosEqSWNnjfVNksjXq8CwkeUAJuCEZEJVn5BHf84LRpVuboZXa3DpakKNx",
  "key40": "5UgZB59ZJkUyZgMQjCHPhBsAA8eBkQ5dD3FLMVtzDfsyGjUWZpjxHtUZ3igHE7CffZYSFWUs8VFBArwzrreweDpr",
  "key41": "43g85J7JkhJZcyBe7GRySQGbdnXjQs5Jw5gPRw72Fd2SS7rkfhYYFXxrPcE1Aga6JEk9zyWqwvLM3tbsAdT1t1qi",
  "key42": "53X8Mc3psUt1HvVnygUkUxeZF6A9Tep79qLyPdTWLmsjpHZ8T9m1SsjxbKJpjYrb2N9WjuLegSLhhevTSFMwA8EV",
  "key43": "2mfcovihaxCunLzEm99HJrAnCGEKnib5Zrvw4K1bAaLA5JNDcKPZiHt5PzP2SEd6EXuv7bc3C9Q33hGRPDhw7jQg",
  "key44": "4KgyPU1r2fS8cQwip2Jmm45DdbQpHMsJbV9Ui4nYTSe38MBWFLGjAcWuecJ8j4drbrq4u7KwecZZJU9nssad5xsk",
  "key45": "5aG7d1B54fZTEq1K6s5NSmeJn5cSWwEa7eXWFBkJ1rPgMRJLKTo4jEBjkxPChdMWd9NwE15jWfmXRA4DAiD7rDqe",
  "key46": "3r9NFGRvtuKseMBpxvQsZRkJTi8uUPLchvXhRvZ9v2TiiDnYSkD4ML41uqf3eHNgECSkDXmHt4VwSQLR6tABaTqg",
  "key47": "4JKHc288VGPxc8h6nTviZyMqR9JhrwkrCMsqn7XhnnCJGhAXG2d7ZeAby1B1pnQms3MUKaqNEUjY3U4WyrzJUPrC"
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
