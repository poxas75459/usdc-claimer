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
    "2a72gXn4NvZSQV26zUDQ8PbaKhsSAeVHezmscgAUvTKJ5o4GnyFSAzCi1z6c8QuafxV84e9PBmNj8X6bAp2E154A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oo7evsLhW9yu4DNcNa2KGLqdE3bgLMvjmSVXuVbJ9EG5EGwTRH6Xhc9cs2PQNwxJTuAfJ94xnSNafg7aeMETHhB",
  "key1": "Jh1juTAv2vSSf3durX9PHqj4t75XWcVWJMZkej4aEzQ8VoambXxYYJU9wJmt44kziMDv8w2e7ABv9MFxiPT1qGb",
  "key2": "27c4dND3hxSJsMTX21qSLqtF4jAFiUSPKctMpksr9AU5Bxmsiga5eFKQATJtqKmYWfp3oTeRG9Fr63VJoKBHQNeX",
  "key3": "3Ms5agcXYeqEo91uFWKstuTHfoPLqLT7c6JBPmaVzHLh7vjNpjoABYHUuvg7345p9YvNNCedZwojCxsvdPM9AXWL",
  "key4": "2NLBxRW9JTyLdHebXq33QGNMiTUHvUw1V7Xhv9GL5NW7yzpmxG36z45MW62Akupn3YSTt2yGduRNxHVWr9n4dP7y",
  "key5": "37PMC1NYrXu2MtaLq8wPgHPnnDVTvm1WaqDxDaywvmN4Sam76tM4FUxtC4hdj5RLRMYri72eNeTFX3nAsZmjWh8F",
  "key6": "5AihntUDbDYyRTwVSj2t71DtAiADCEeMmwySn5aCFzLc4Kpdzbu24LhAu9z1zWWkArwvt44dVsCamnBbJGLK9K8j",
  "key7": "2qZzr8Nihgq7wiSzMiYsiAvqzYFMyZiuQ3n9T4Khhx85pak4X1Mc2bNxbaTdQcUmsLCMujc7SegudT2wJMwSzUJH",
  "key8": "4rqCFpP2a1MXuKwMqgqSGXREMuqEFkVAPJsbT9TGSDG1mjCenvK9h5RbwQojPD6bPMmWxdjLUjSt2Kv46HhGURdB",
  "key9": "tdGu4UShSJiYEafLmdTcRa75xL7tihmEUsF52GerUAHLbG8UK5djHKsj4iC4p6REjGHTL8oZAS7G34DH7HQA6jV",
  "key10": "3GBUCRMGTcS9499V2mQmiSSc4jhWCWDpDTfqfhUahgGnktrDBhLVTRbf7iaSiV6Pdms5QvoUxVU6ifA1HXcL65ZP",
  "key11": "2SAGqjTntewLt5sUtRQZzXoKDEXWaaXz4x39b7xNwQziDzoYonSeDcDXTAZgMsi63L7D6wfekDvovX1MgF8MAmbE",
  "key12": "5Vz3ioizfxvmwnYpW95JdBAh54Sfjy8GTaKfpbTywPUWKnHpXuU8aV1byouDKeDHhgbrVxUMd9BBXanua5G8gGHH",
  "key13": "3mhqGCrkSGDuthinATvFiLe1rX1TwtpGgujEom9EKTooRzN995W3BdKjy4B9deT7qUugqZRm1hmMj8wVohWbDw3S",
  "key14": "4nkV3vt25BZctSiBvEy1G8JfUadoeq12ZAYFLfiHCEeUszBHvthFcnV2ntvs5srk6mKesPGTqGCBjqHo3ktpEHYZ",
  "key15": "4StrJpGuusLQbN7vKvw3S6AURNLGp9gknfFF8LutwaQpKYdfkfQcXhjA1cxSmc6nVvEjJQQgZpCYaxuUw3RKHe94",
  "key16": "4pkDNu672bjskHrtTqMGAhZgnbL4ejCjkjuvwW7pZZ8T8gfhcZop22uQVnPGyuKQgatp5bJUnDTQaadcBAGfC9V9",
  "key17": "4ZRWjdRVyTi6sFyvsw9ayp7t6s4tvKZTBZN86hcqTEceyqFjfaAM6dpSwtQfDC41txD7xpZX7wiwf7uDoBc3h9A9",
  "key18": "3QgXbEuDSaJPENMtMFj1wmhxCDjZpywp1YgWh2jnwTtDb1pth66oK42ks8UcuRqz1tTzwu469EPDCmdaqq87eVLU",
  "key19": "2ukLscBd2cnFK54sFht9qoWkWKVtYvg22GopcRJW2XnMNpaWcSjUFf4v6TNovRxvDxXV13WdtiiyqLWRrMzqxwSs",
  "key20": "2iMyoPm68yugnRU5bNpvBahh1CxRDAXWjrmo4K5Vw8hzaa4PDy3x5DZf3KeTd3TcdPqNJjWVQJQa8VBApoH84SXN",
  "key21": "5WLQXKPmYBCo34t69WpEEiDfuDyKKBWb8gAMB54kv4WNMTrTQ4jm5CMRDndDwov2WLPPvgEYtApmkR7JHcswHDED",
  "key22": "JWDU5Gxv5EkTueZQts7Ybt7mpQbEmXTtYADmmnRYK5R3uv4A1qy9BQ6f1mdiwg7t2DRtTgqpyu5LaEDhGFkGwGK",
  "key23": "wURFczSTF3eAsKUtu2XTBMUxyk1dWXaBryb3DBx1HcoFUMn3cCqtZ3raFcExewJWVLPUfRqTByp3hFDQS7MD1Lx",
  "key24": "5171sNicGHjkfoPTQzVsFJx4BwfDVQxveLoVYX31p1ggSMY84szHbYiiDBFJWQj18zRzYvphwsk7j2YgJBwiFurN",
  "key25": "4XpiA3waJQvfdiaF6NDKbXivB1ALbpkkzSPRijXBcSYMhrK3dQMCG2HrUVkPa8wMpGwR8efW2QPDig2x1oyocPJW",
  "key26": "2dKv2UBkG98L7wjNDK2ahrwQzuaV7c3Cdh7isBjHzNmEcqycmSkFparruihvGRTnBHHt4KjEwmJ4JCPHi2SqcLmD",
  "key27": "51hzvpdhBW7h6JnmyuwzDs6xwkSZtvkzZ1BnyYYGTJpNjtA7BhWGPVfJ95hZGT8jgYK67bWr74f3s3c7t1g4Li4N",
  "key28": "2hwXJhTYUvMTvBDX2NicT6LBxHRXf18UZKTw8HzSkXjVeCv2Mohzp1DArWfeVhbNwsJLQfiiwPcZqdJiUuQKFP9j",
  "key29": "FNFMdKtXYdHNzxd5Ltp4GA2VrYDDgpM6LEDdSNwJR3Au7zyx4sD6sr3qyVJeyUKrvtJ6DkowHCnTZAsGeFxU7FC",
  "key30": "2PjfQj4PRMNTGUxyVXhJezuRt3VrM2cTnzv9d9m2DujB9VZujVHsyvy5fcfDLi7j1mUTXRKVNAmiR2KfjtecgCZu",
  "key31": "4w29cKhnWxEx9U6u1Z6DUvT4e6Us64g1N5wtsfJknT4M7e9pj2s7XKSgyWRBQnKd7HiUG6az5PKQ6ZyyAeuYo2ci",
  "key32": "5iyxwT454R3ZuFCfHJ9QmJjXBK5rfsHcbjqmsGB9zhHJJEUv8vKQLytg3Vc1p92BAkhXmQ1vRTaeTaTsyfEbL6z4",
  "key33": "4G8EUGius9qycxHjRFF266C2eQr8NxrvURu9FAwajRjmfrRzmNS3pPRacNd1JRz1P7g7Wj1zQnVEcRy7imP3cZzw",
  "key34": "AfF2bwD1EHjmj3f1qV8pigxG8exGiGJD6UMu3C2L87oaCJY7bYdqJwW2kivCMihYGxgisgqhsCaGTkm6vEYmGKN",
  "key35": "58TjkVH1Ut2ytr7yBr5Y8ykBaxvFWBJHA4ndNvhXcXxUzLM656bUVLfZXzd9doS77Cu58wbtVEXn2yfYxaJZa3cg",
  "key36": "DwrqRQojabBSeZv3z1k9c8KDXyzsZN2S21LyxzZU2B8Ag9mBEHxHn114417djMhw3pBA1ztK9beRKJnQsy7BqRh",
  "key37": "yQSpQfFmY5WQkWjJzQwDrDVbTME6cr38NVEAvTGuuow2FcuKRxH4Wj1xmaA6FFNs2otnftWvDodkbm1eyajLi7i",
  "key38": "2ogJoxVCfpA2Ga9HbqDZru68YbVX8uT3ukHUvNejcyNJbQADX4ZbVTcwvnAJ8AaP4JyQPw3KJ6YvCDFy7y8TiQKz",
  "key39": "47Nen9vbnhje2T4sdq5ntxxXdCQZjnnJ6QGBqSmNxidRUPottBrTP95cw31Qv8v8iAgpTQABZ4eUVECZSeEYcwJQ",
  "key40": "57eqh9N3qLap24TuyXFv8yAggoYC7QrX8gtwiBtxhCC2XAhMgF23Hcm1WgCSJMbtuvFeAajXkkb5uuLiZKybPcgU",
  "key41": "66ZAp4QpEC96BkbAn7AMaBysy4RZpL18oERDsvtP7487ukUy9kJZLGBAcZor8uWvgtMZwyBAhAfxPBWQBoNr5fqh",
  "key42": "26nWdNjE3hqHLm7t46o2qGfUqPFVc2ENqkRcJSVeFtuVWLXqqfM6RK8sopCvpGYLpSffHfTM1VsjsufXG5A5egG6",
  "key43": "3KLmsFgBPGxMxkjtrK4CwRS3Y2jzQ83YMUCMVogM79k8yFZYDeWGDchGHRHyq86L5vBiKeomoPqEZCHrL6Dz1KgE",
  "key44": "5qzy7Xh9c3AYZeUndzED4vFFeRXKGZH5VFWTmVjHDy34vGB1hw4VmqKz23HoE9iC6BLLaChFfdFsHvANeyVSWzFH",
  "key45": "4M6BbURTUmy6pSmaoK9iLhspUow5T4J9uGmwW9KBn8GJ2p5Midci3qY3xmyBqczUPjt9WN3joTNdtsTrW5DJHMh2",
  "key46": "5JBnwFvpAqpkTTojpwdyjjBZ3DEEB5qmPTGjVodornBzhZm3GT11n8pjGaAPFsSvLUsKMLWTHuPnDWxtLCSzRbnb"
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
