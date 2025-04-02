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
    "2UtJS876LE6ayLMuzZSPZL1wkFcRtigRuUCQKt6M5i8aKeTyHt1ffVV8mNLEAParwL4A32Dv1NuvT6xP2MiNMpHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMV5vwhu1QQbAXzEKUAKgukbhVhsmY7cA35a2ZV7UbfAaoCKbSVyShZ1cc9gRcwnJEsVuSC42aRZy8kuZNuU7h2",
  "key1": "42qvTQ3LW54tWx4rwHVVCTnBeLRa3TJWuRoLZkFFiEfxFGzviSycWm17fHMfmkQYtJf8fT24gPzWZNj9R4Uo4vhp",
  "key2": "3xkKfvKC45ZQygNoh5cN7Rqq1R4aSzJJWrmsQ5txfKDZpEPLaemAU5w5i317qhqcmV2afU4kHhBvdXiYuZteCEwZ",
  "key3": "2D1ZdqCC1TRmqD8oaDYFV9FTsVMVTVAkFzt3UHUXxwHbfwMTKcHH43LygL1yf68yT7QgXeKEeLzJ6K9a6Hd9mPg7",
  "key4": "FxjQW5fXuf6yPoPwVzNMGiczQ4Za6NmVZ4qAeo37oHGXEMKKmgvcm75jzDDNzEkLS34mivsPEsynivTKb48Gde4",
  "key5": "4pBjGgLPueGSNiCpBtwzVGeRPgn3cHfFVtiMVUumFEoDtqs3V47BvwnmJR8KYy1QjREZo5L27ZF5SFKSb9SKUhvG",
  "key6": "61iXZHM2zABpQBhrEZoBz9YYgDKWyZDaEpH8tMunfGFiWfU6kQfiHZL9cT26yJh5NFtLpr6eZ4JS4nCMPbaxe5BK",
  "key7": "4QxdUN8D6iZ4zox3ZNP7eQ7AhRnrLNyijbVjnJAKBXzsrPyJf1x7xoK1Vrxp9HfqX1AWzP1SNMsSgfVEYkAi4b7x",
  "key8": "3UhBabcLqpbgNauD9jRTsFBx3F6B15o3jZMzHzgMZPAxeC5QXVL8Y2fKod7j5bDnQKNeH4wHPKPkQvmXSATTm4kn",
  "key9": "4f6kvnByikhHhVYpK1fAcBAMjAoVk9CFnsE64hRZKCimVZk9SB3TJkLaq5v12BTH38NK6TSV1B22Aqm8XcT4SoyE",
  "key10": "UcfHf4tGYakUjCk9BuRxCCnXE7r4VPsoMu6XhYSpccRmjvehEHfagxDnuJ6QgP3Cb4aUsiqc9TLRfS8gzLZHeSC",
  "key11": "3FBevwZRBKo7Jgvc1gBQYByMAbxfeyo7uh3MvdZd8wvEdU6D7q8SvLo2ZTY44KAzGWzUGDw8yphh4kChdKyTKLu2",
  "key12": "4XGunWYk9BuUBXKgduuoJphKUAa6qQcBe8SPYEhZwzuLxQKqWjGSwMeMR9grJMRrFqENY4Xt8ekTbNLyRLC5jRdM",
  "key13": "4fSoURCnpoNbe5rxp8y7pxUz2X3ixqj4x31QDta1f1PBzMDSEnDB7H9vEfVPsk4q9rKjQLdAJD4W1eKbvj4J6WVP",
  "key14": "4u8LA1PdKaeNLVHsuVToEy4E3sW7fzwLcKe9zckbtuZckhDzC2rQ9ERKxoqssR2aJfSH72ykLpu6jrAWwGQpHPUz",
  "key15": "5m7wtvpMiAVPdMsmtXGhBfEQqwT1YMHkUrGearjft549MbcYB1SDpLpsJtPE9nEAeGHc2xNdbkaJQAiYCFDMpAom",
  "key16": "2BPZemY9LPkrYNwLEdPwSTKd1uYyXxpD4ekH7fNjKwSf7ui6FXnw4TcuJ6ZkkB3LerTJFchoXzmFoN5x5RPe54V1",
  "key17": "3KNpKCs8NGNiFmq64dYmSBW8WfePiomadD6UfrkniVDLX5yZsZcMDaKwuXd8WopoG8fY6duxNfrhAaKpFN13YH9J",
  "key18": "5X54LEjL7kReStRhPeei2V3GUBd8wacbawzpUNM9wKsvyqysbxDuhtoToZyfNpTC5MVMku78mCF1c6jr4Gv9BrFA",
  "key19": "36CBNagkQk9s53qDQafHDtxphZSP14f7s1WHGbw1jfKTmW7ZEfZPbWEhU6SZew22ACbTswqMpihMELraEW1EZYGV",
  "key20": "VpLSziip6DgCjaivaQxnKrJ1mFKVCnVsBvc8GWJijKcYjfdMkvjbtpNUcJfkTDS7vfGr63JD52zHn8d5hzG6HTP",
  "key21": "49z4NwHDk65E7MVkLx2bBiLkMQYT42ueCpFovVuocpCdwbucQWwuCRQ9FdQ7vVvWyHuvZp5acdvDEnHyTMvAGzXs",
  "key22": "3w9FL83oYb79ptz17igSdhTeNSwwvhuEZ44Y8sbNXRx7LKL79GFuJuM6x9qHuUkgWGPcv6MXeXbQCmoitvakTU4A",
  "key23": "5uVN6nXhbvDgoqdYXKxCajMZGvmKqpPmXsmDj89VWGqBgiARdoGY6g58m6bi15pumGUAZ8RJAbnbg34KBc7u6vkS",
  "key24": "M3wSCEWbhdwT5G91JrtH3HanuPsBVHuJCsezFu3VAif8QEaep3ebnCJ3kExS1ofXud8tyGxJgns2k2ZvVN4p8jG",
  "key25": "3f17BNeVFvUNDLevCEzvGPXpszNAvHTnxY7jcoYKcSTaMVLSeJxrdPbw7Dar6vyHEdyC2WaRHRMKLKiDjUaJ6CVD",
  "key26": "3qCjuY89vKBghYH5aD4FUtqoTvJo9Q1RdpwimgCZmLVPDG8scyma5tgvfG3h6yKmQwtbvgJTEUBcPfdPh6KjHpJ8",
  "key27": "sxb5KofnAgAU38qjuSyb8LMmNhcN3mv2AgJHmJzR9KCgvGLqz7KbwZJNeodpRC323mKV1U4Pz1uZdrrRm98mAD5",
  "key28": "RDwUu6hLTzLpf6hWBqFb26FczrQCBgUGVwDNJjPsDTV8e6rwUQrZJVRw3sis1pKs6wNoeevJNv5LCpn1yjR8KdV",
  "key29": "2LqGLwMHSBEdxGe8HSFB78i9CiUNvQU8zZt5EiAoPiF4au5rAKEcaypE9ymvMwWh9cJaQUJ6ioBTEq9hSD3pQSCZ",
  "key30": "4ymZsSQKz7n56HvXQMg7uZzPsCzEi6ycpU3fvvYhdny43TRzLHbcRJgad1dmtsVA7RUZfdwAWRbqbuY5ropCDJmF",
  "key31": "4QtPzD5sWwTmZuXowc1KZBHaL8bHg2do2waRyDcdjY6L6cTc87trWwg3iHqage4uYNuR7Dab3gnouitTq9nehZb",
  "key32": "aaTqRGMYARNSxahSG1evHPGaMR2Ba5uUSvKH1HJ6XhhZCv2xo7ECjgJ2JzP6zqCFFHeJhsK7HsattZDhWZtU4MR",
  "key33": "3FnndcXp9KEXGp8NMghCRXvQBk1GGSSdAe4uJFwJj7mkdw3vdv3XQkHFSssPQvyhFQLfbKWgFhuu2HoYLnWztKyn",
  "key34": "CA7EU66YgM4Qhh6jdS6diUV8MXtNagREXFu4vykFwVmtVP8qPitbtkT5jzdmnVf6ZWG4HWpR9gd6JgKw81HzjAB",
  "key35": "3Q3aB72kup2ZYabC6BBPhAbNM2ZxbERR6cwaJTKgCShJfyo7nsu3njo8CgiY4xihSi66iw8PS9yXsR1GqW9T9Rmb",
  "key36": "4x2PehuqSXCKMJjGLw3pS8FcVTpc8vUSjub15yrsJ464Ut8KuiXfbosqDaBmUncdzSFmEhiwoVg1G78RKwNVVBqT",
  "key37": "K5UMdjybP3yYzD3z963fHZx9fazXHGPBzZXoSUP5a2DuAq17LQfcyyU1qd83er5mrGZM3ky5o2mAPQ8fh82VK3j"
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
