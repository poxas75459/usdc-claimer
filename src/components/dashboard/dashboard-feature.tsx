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
    "5XZduSTFxj1L53FSt6mhb5HmCrnTmcRWGBqQheZp8BFcMk1MbEUKw8nXMQj4p2DA4mvt8uMiCdF33TBaNxeEHJWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4ML5aXC5NtB8jhB38PsMxSqdr5qbjHrvPtJAegyk5gXEKegQCssQitK7AVakzgmaB6pT4XkyBnd9x7YLW5Qu9K",
  "key1": "DN9CLZYdMv5VruGM5t48tSgMp9zJ2xXCaAek1mfk7FoMg2Bfy3MkSYUxnBFH8ZQLe2Kgn8s6cvGSWikdyas6GGb",
  "key2": "4SRV9DZYni9MpsnDRFNEWaLW7fWnpWH6iinYrwSrmjbhuk5etPFrHTucQaq2pHLkpdJcVr7fpzUVXMofipBVwBnK",
  "key3": "5x8wAjs3oq636DFHbgm5WxQUNyY29Mid8Sfh9vyyR7DjGUdkvjdq8wddoNynts5dsNnZDkyQv5MaRyjGXKxo3dhQ",
  "key4": "U6s9o7DFE5ZRoxaq2GgmhK6EJp5h7BjxxbTUyVFAGJxSm9vsWYPmMa9vZjzg2wUsvovZoyUbuVxmT4qiJzoGvNr",
  "key5": "2fZFt48ZAPkZ1TknhoRnsXejK5EPKvbdyuBhtZNcZpfudfwUi8YU9PhNn3ELbtdpngk5m2zkwu7L9jdeZzxE6uzE",
  "key6": "4vFRouL1NCywvJnEYqVUABiuNNETZ8apAErobiwsraXYxrKZgbqsYXVGCfdogzxRspQxss2GCZR4bA4WoY2QRR3H",
  "key7": "8QAXfBcomdmnMrSDrpEYQGRdXASgFDk5Rf1dLdyVdjWd4KSBqnjQWouzWNjPdxJHqbv62KoDVqpqMBPS5sx8pz4",
  "key8": "5rRwNNngtJtZUhXdv48tEC32VfZVsJS6s4y4B34cssA4SZQ4Nvy2SQ4UUoTeRZgBRbENoEfwzvZpEDFaFkDon2Yq",
  "key9": "3H3AZn3gYbxLxBH2tkLckdxAz2YqjTPAwk4WxwGTf8vTejhAPkr29NvJdXMdKsspEPBVuawrmaSKPW2k45JdU8zN",
  "key10": "5naxeMiutQXGgazPYJ3gbz6b7QrrZpVgwnwZARQXYh1M1xq2x5bCzkLBFYQyt9XUwBboUM6ZNv9U31418goJesHu",
  "key11": "5StYwqPvvG86Pcr677ahWuzGdKAKJ2doduGu7HL96HewDo5C8qzR9niUy9hFfgnU3JYUdS8yV3iPAhkxvtcVmYtK",
  "key12": "62GWK8z2WuXg8TsC9HESYGRh6uqgS3j9yrzrVTnQFwpeQwiDpYEbqbTkkVcgAxF339EPyeP2G3oYJrLq5PoNcNR1",
  "key13": "3Uh3vB5FUnCoUzQ2xjZ6847XxRqkcxdpdzcMn1Bk2bAz18xU3q5zmtGtoYCjMCmfbniXEaNnZ9zMQNXSS1Wpfmvs",
  "key14": "4zbznN7hdM3Gvw3diMZ9FiNQT7jVhYqLD5v16ied4rjvrf7oX6A5mV1saCW1USvBpmb8woSHXKV7Zn8sRK2EHWQJ",
  "key15": "uDaAVRHaufKoD86FZNgGy1QgHToEcYtsqa1jb579riejFa8ZPd81gLxDJZJP5GJy4vSMsnCt8xHYw9kSXBBUoed",
  "key16": "4GRfY5QiFixQKjQCaRJchbNY5Ah1G8n2SZgH3qCAwWS8bcvQMTCEWvWb1tLNc6W7D8hzasQpsTjHpjf1p2q61woE",
  "key17": "ZVMzrqeX7VYoqr5cgft9DDf9nE2Gn1V8qQNKdpw7KKHm8yWTTWFDWH2tcXGiPncJM4dwuoQVPVa3azRPyAvBZWV",
  "key18": "4psi8b6NGakSCyarcARgL7g2ByTirGoWfuUFXFjTCp2bLG5cCuzm4kv2g5cSSKFtHUNn2dovKJbA9YEtYVeYu5Yp",
  "key19": "3qjmQ1cjpy1K3NopJ4mbKan2k2C67U3ixCN2pm4VDoXtEeV4EfJMaZHa29cPHaf9qKVyvLVQ3enrjU1WKM8C3Ryf",
  "key20": "um8EGoQaKou5rKtwrfBM92i9gqpxTavPKoPGiendg5W4smjhz1t7wdspLa9nz9SPkkKzCWURtDqeNuaWc4Vh9wN",
  "key21": "4JmParchzyepTK8XgzyUQUQEpdykaVFLcuzDfCRbXuC2XjyDMBsECbhzPRVCup8u6gEQ146N7SRK2rcw9A2e9byj",
  "key22": "61rErmHhutiZfPyHmwxwCSpJE4V1ukDETEWd7jsDEFC7ynDXf7jpTNBC6paytx6bshdu597dK4K3UtvqZptxNhFo",
  "key23": "2qmCoavMXuvQusBinLXhW9vvBzrTrKMNDARgPgTYA8EQkpCA84vwoDtAJLsTqkPcivmwSRaJKshMyF6CS4TphnvE",
  "key24": "CnhPLgyG8LBPtxn2TJbVrCnHPLAhHnvG3HfXcHmd5WHkMrmacWGvkYDf7Cm5HC2qro9izky6Ar7T9XVJtrvcQKY",
  "key25": "44PmeAaBdxTGGEtEy8VKCFCE1Viyrv3Qrt9sVdMV2NadWjsaptTZ5zMycz9RKmX4Ba1wNuZHiAE6CrkSSnV5XaTY",
  "key26": "YbnUGfczfFLUuN5YAGbJfFvUDFj4mXne3Y1EkgASbU4YhEcYZkmfSVGcVaYatitJQyPERtwQQUP4hTUy77JkscU",
  "key27": "3iszEfvveJvHnHNxcpmU6KWdzEg9f2NqqoVH7CYLFuqp5a9pHRAAt6VgdUnmJG98sT5naM61bx4qJMXgZYGW5nX7",
  "key28": "32QoM1qQfXPCQPGaPxtL7G3oYjifpwvaazoeNr46367nPohUAPW5VangybyzwV6WSgDy64KXkPQtRvDfwwYdoPeB",
  "key29": "4bBEpkSTpNtbY6Wa8ERfX1GdQPcUKcUEw2HWRs4E9MaMgtoftsRtJkugvZKE7q8hyeq8v1KwUEu6ptXDRTVQR9su",
  "key30": "4chM87Cizv2MohuP8vwcZBVGzdAeJ4GbrEMZLEtt39j48w8eD96ekiXRjYAUx9k2oTYBPnqWGyjtGorEtyPTbkDq",
  "key31": "23f5ReLQJD4SeW8YiJaoq2DQPLmwEXje98XRL6oSJELAoCGUPYxZGPGrv15q7ksVtHnBnkz4vxR9gFLv2XyuVVfP",
  "key32": "3ErZZtLQWnaS5vSW3mojTM14dHnhUkBBPiYHwHJvHhTcXUcRTbxA4g5HvMpe5PiQzagjcztDzryRyi8MhyMb9CdZ",
  "key33": "5mG6qDXtLCsSBhQKgBp98qJ1mDQC9rD9xnu8MBoc6iFxArDeshsPVYRcoNwGt3eiPEYzqF1Ys8p7Jkhey8kssxSu",
  "key34": "2qr7vzKBqCeEwcoRLzTtxWf1vZHmHYYoSriE8dkVFjbLZMqbcYxwuwrbLVCjvW84nyhSRszMTjGRodwLCGFCU2DY",
  "key35": "HRdTahMJDCaWdkiQSJiLSubZMG78nxY3s2DknCUq6bmhHFCFkCyVPjA35gTf1SQBnxueSmBL911PxSVkRqfz2Ac",
  "key36": "3Gbe2m8yBXJJ5d28Cu7yNQBsFmzN8tStk5Xo4tcoSJnS2vezre6vApSofNiz7R9ruuEFAyztxuSk3uFyGvMjqt7n",
  "key37": "5unj62uThfYgsbdhfactStgxSWSExcTazQQFKoAPikvZqz9max8JpYBXAHMsmMSK6JdTsV6QzxG4897wipaT3CH",
  "key38": "24oXJcBQW9e6b2kMG3ahiwpbGkVtvR5a2CxidkiXtNaoNB3SviuBQcNUcAWe6UiMv2m3HjYxUXEZWMnE5zbWXAzR"
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
