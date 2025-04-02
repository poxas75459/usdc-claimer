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
    "48bsy2XZ3SDYsep669L19nT1vdqMM7qamNuA59PCFaRycdsxnF9ynhYvowkZeVhQbxCdLViDrpNAEz2gRuNsN89D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PP27YaHQe59BTL6kgcZ6E3vsPX9Q4KkiFGVSwNgpEz44HU5SPcXWjjJebgCFAURREb1fuyEJctLZYSyuLgjJoCT",
  "key1": "hyDeVc8D5FKnyzUvK3ZWeipiiXrEAVnb67Pqtq6UQ39UDT54fNxDM39ws5xKeiUz7MdoyycLUwTi6t9kqFsk14a",
  "key2": "4eo6h6QvFrAzscuEZU8mWxBYJxXmPwiLraAVvVccxf55iCKkdCF1ujxrd4V3boX52PG64Ap9GrbwmbdMwqXBfN4",
  "key3": "3DhKZk1z3rBAb1Hxp7hNFKzgQV1FJUGARz1hC2mmRJGvo5ZqwcQ7pSiin3H2tJcB378ojWGbV2fupyr4fM8gcY37",
  "key4": "64zkyswpKJ3F45zkR4JzPGC53TS6hmr44jre7H6F7aGNDne7xRnngJVWq5U2vgBz7gp3hXTdfQNz17cDaxT5j3zm",
  "key5": "4GFwwLRq9ytjGood5ffeHx5w5mHxawjt4Gsf21aM4Y11aR2jfyRrW3d8x9AXJws3wKx1on7du3QncQrAjYyeFGnr",
  "key6": "4KG3LPLGPVLKXYQJWxPHpbdkDJSbLyJEmRYhZr6AUHXUUBJWr8CSRX2gjP3ZC69xPbCLwV17F9xrEYofv6MtPszs",
  "key7": "5LqFYDHQ6rECKmjWYbLYyAEpG6KFoiTFYSeCffvVoFCgjwEBuZXRxRLovE1sgwv2xtnmaDD3ztgtAcLijVHYiXrB",
  "key8": "4ZAa7fWNroFfvQjX51xnKguBUCH8yL8SbJbE25QA1bd9LQEaisxbkbqVbv9XvDg9R1RRUHDvMEVDjK1iTRrvKtyM",
  "key9": "5oBarAWevMESvc8wCHoUWaMR95AvyrHU2PAjudLQPWDUAsFQ16itFHKJHYjJ5qw8WC86WsDNakchzfP1SXtcDFzL",
  "key10": "4No2mdpHhnqLsaJNkiVxyajVAV5Z44wRtxUr5KmyWLKq5xy3LF1yLLPUWTRCFfTnoeHKrvx2UBFNBxBjD2deaDzE",
  "key11": "3T8o3m6hw2XFwa7QK9UNoL3F82DxjhU8WoH2Hxwuma8zTyxnA2VGysAQHJYiZ9y7uBxBtBLmt6ir1kNfriwdSSGr",
  "key12": "54333bmw1ATePL8AySRezvrjrVJd3zTraTjWJM7fDSHTFpn42zFxgCHxPLcmvoBeF43oJxf2K42fN2qacjUNQPG3",
  "key13": "3iQ1GKfcs9Jtdhk1ZJrm4FUvf6opX3hQH66pQWoyP2r3zhuKhUcGFR37bhDCzeg6uwTwx8M2A7Casf8hXdNHbzk2",
  "key14": "2X2FkEyiNy5F9gGv3AuXx3nqH7YiNKaqYTH96df8rtawEyPLwERuitApJiGk7NNXJMviDnQZRVTyGKicnSpUHv5q",
  "key15": "32ww7UHX7ZaNgW6uzswopogTvvotKJjGRGNtcwiufZ6ep8gtPw316mmsABEQqwip1QpNVn9BZWZEDKBP8yYUEMH8",
  "key16": "3Aq5QBkS7niZ1nbncv5DUN71a2xjBdLaHUehWGbVe34qwGGTk5b464d6dbY2o3uzFn2VGrfkkZ3oSwZtHxNEy9jk",
  "key17": "3wffW2FQzW4tMoJmZGByJPztcqF6hSJvABEvEibsZ5J7B7jnvzSe2EWGBm8bJvuanAUNrbueKMTw2Z71WkfudQJu",
  "key18": "NNmvnavHMSabv8s2ukizC3r4bGmHCRaFMdB8NnqkjEKyE65HthbiRroUc8AriB92qFsjPw7bMx7MUePvS5DncX5",
  "key19": "7xsDa28Y3YdPTysW4D8EYPvt8pnSsDAguUkzP3q6ifR1cDEGFXWRj7VZ1b2GUbdsknrF8niYPfXWNk44bUqmWAj",
  "key20": "5JNobv8iqyTqjKW8ankFDpSAaTM2EirZESjxws5ykv3mz1VWSATRfnQtMrgGkYHB1xQVxefDTA5NdbX1JFco22nE",
  "key21": "5fZys9fnqf8Dv4nLKP4bc7VcEkKcsbSfPrDAsJVzLTgyY86toNT2thakDQMferCzXfgjaP1F9P13nSLPa3J873Lz",
  "key22": "4DKmbqVuDwMYZ2Z4cyaBLkd9NNe9ryVFBZ6n1X5z6q7LGmHaQ8fV2vscjrdaD9LAK8URDcEenwHdSykW7jT4CiV5",
  "key23": "2Qvp1awcDLmL3EPaYSLTDPxmQWKMwnhmmRM6d6T5PvXE1BYwWVxmTePt3bcnEjVhTF5yRCzAui1P86fPoZwaLNHa",
  "key24": "guZrEeZGWGnTtacs9YX9zoKet8ckPjGNmF7fDxNBq2K6pwC1oH6L7v9v4FbY8etHGfURjXoKSjhz4vvdBtpc7bU",
  "key25": "4qBbEr2Qj8nMraBaD8pidGjJiWkJVYZXiWfb8XpTtmdZbAB9TuZJEfi63R8EUxviC7hC7MtdgNZqKTqLrU19Bd2R",
  "key26": "vX2iDBauQRbaKmUc7uPaTfwzyKhHYPEB9MAnDHcDftaFNEAybEiWVixkvfEduBoAYauFHvEVNEEJaT5VHYVqDRA",
  "key27": "GtKPVqfJjyVuB9eTXwbgMQvqV2QyKoWKJB6n1QSCa1vkCpVpABPNtvbGLJUTGETjF5zDnyiU98D9Ut73vPmvZY1",
  "key28": "2cwnMJcr7x3jkZKgcwf5YGAd7v1twU4jsRNvjhBmc2NNtmuBfPa2u5L8CToAqFV1Qo1h3iH4CYNkD4Qjy2ggoBsZ",
  "key29": "JJEx91KKW3uCYptsWcZJyJRQ8JUsMgerycGQQR8P4NUqJhp2PgqWYrho3NzswF3832iBkn5S9aNGBTJvzFfhTXE",
  "key30": "3VuDMy76ExvD7m5jUKMxDhEGHTT9GtdvkbbfUhjJm3oi1e9o4VGBVQFjy7jZECYVxrTdJTW5mBkem2dWyRuuXNqH",
  "key31": "2AqpssUvnYraP7wAZrNXrb4HP483oCTcTM8RH3zNPyxaEtvUAhpum1tvcJPFnr1MGewgb999yZRyDMgJ3T2RdiL2",
  "key32": "5D88ASCLsnvr98EhFVT5hP6iF7rSaF9HTMCXCUXqDf5wF1QLB4kDCeZVvcsmaZb9vKE28rpFBPgsLKWafxUickd8",
  "key33": "5FFksaRYcPZARTScMMENqvUWB7sdo5Dc3Y8xPMtjHRHqxBmabTK38LFUXkfVVm5PGkqaffCSVfaQAFuDeCvtsLfp",
  "key34": "2BbHxTDDNExbTRNfMvPzUAyYbpVH5g6feDweH8VDw9AycvF1C3FTX1b6dycXsPzcKrnEmP3J18vAyNWwrW744aT4",
  "key35": "yz7hmYchFF7P6Ep5k5uYJrTvuiZJHDJYbHadpHaSA5HiNEbisJMm6zfugXshEZ4kLBofV7hbhDvgCvNK1cSaSpF",
  "key36": "qWWCRXD91g8ZGFsbhDzpuJH3M5m96991goE7YppzCXbouD4uyUMW3sg4qQYzBYuQhsJTqdLTut55B8gaEwQ3f4p",
  "key37": "4ebDsPPjvNgPZpxqTEj3BqpbjJgncaRbNLZVqcthkRghnd4cPspEGYWjsNMhEyt88uBjXmqdxTV3kmYXJizPrKTF",
  "key38": "3c1tPuWDhS2JYXfvHTkoG2vExugCGKYMa5EUCNMFgbQyUsabH9owPpEMi2yqBFoSV16RyAE9jNAZ3r5PMmSe5bQ7",
  "key39": "47CQDp23HXMPtj7aa2bR89fB9GnVWdUjC7QCPgAS8YWgS3APQd1sQ1F8BWn4RLW49FgStut3pc9NSNmRKkjrfDfa",
  "key40": "2HZiKh6tRjiA8u3MJ9dTxoTys75WjeK41knmdjdy6Xo1UuyPkMbrdX1hthwRKm7DTJJYCAYKDveHbMockS7UcbNr",
  "key41": "3282YxeK7V6YxY7XWFsq3Fe8TQgAfgz9HpETp8xA2Vw6LSzG9iDVo3nfyLqtnsDkKXztJ9a24Xfuh5Dw7f5Kb8ST",
  "key42": "2BGXz3ijsyTJDdGpfB7vZ7nsRbTNxkHQFakc2fGdgUEjsGChP28jJLjEEKYZqeFpD2e9y5u7dXyzCvpEZ98UMCcB",
  "key43": "4nMwndWT1mgWQgZWyULBqc7YqSd2hKYwfRqbh9kUHxAGjpxecEUGPz8UpFawsyi11jWy8jcsYFpXXrqweGi9f7JE",
  "key44": "4r8GxycjGn4K1RbwpKvBqjLWFme2qsCcqQFGnWPkjdwh1iR6WLDmTsRGcSRySMVNvGiPVboPmRSmZKjaM7zufBDS",
  "key45": "U352eDSHsQbivGUeEHZJKpoZ1ue4E2k7SEfvNsuMGRZjZnDRsWzLr3pxhcsb9ULHYaow9vU8ZoMUXnwaq5vbnFr",
  "key46": "C3zEetCPjtcETJozLUxPjF581q2HkvwAbUyRPnzLXKgEW2jhTKHDX4gU1AraP46u5Wn5nw7aj3izXMT1Fhpt7Tv",
  "key47": "EGHop8xkn7WA24U26cQvtNxVAZowNc4Fn4RUE8joDmUR7iJxJGjYTNgLoAZuEwk43uGtmEqwCksWdivMP5HzmpM"
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
