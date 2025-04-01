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
    "3o1HpSYs3jE9i4WyNEgUGzajADVBRqf7GhZxmbzmNGxhnkrFsTm5dgs88r6oHmbkC31c7Cb7MeJkbhUWuFbpqgGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LLzgDP7tmEvhzugfLX8sukcFD2RqxVqFA4h4gBixTAtTPvT29KBRofz3KzJpjMHwsR3tkqKjpcVRPhYq1vqUdK",
  "key1": "4EcVsmn7xPFvQi9RhSZ7fpzQgz9WykkgCiHNnMk114Bpj86VmTAfGwNiYimKNxxxiomfDhxw7Vjnvg5GRa9veZP4",
  "key2": "5Y1zsMPfo88xKMrJQaAXsky8E5xVb5SwA1AEGkY59CWDMkRPS9NBcofx5ZjyaQ8Ey7kMQLXpLPuwkmGA2znYpeft",
  "key3": "4Z1DkPezDbA9W76i2obQp1a6SRuXMokXWs9P1sXp8MH5o6hu3DH7t9ghyb1ZeAhXQr1GYu21DyPi3WR2R2bswjgY",
  "key4": "CGmpZUWAx2vVHoTxDcGXD3B7uuXPeo4vXLT6yJujyRgSfXNsAZLtMMT4kehuDvpVKBtSBf665LPpjkqqdnqhqDa",
  "key5": "4k3Y7vGaRDFYFPV2nkaAmGUCk6cWvLEWiMXXBW7wh4UXcchEHJWVcYoZkHer7XaUdSH7sZ6fnkbvbGFacZQSrQBU",
  "key6": "2XfVG2uGQBQxxyXWE4BBYedvJEWaXhxQi93TTdGfZEBtqy62yfNaFmosrgrBD3ry3bLVM9ntoJcTFgZooKK3Kpjq",
  "key7": "N9bRWvQq46F9gM7t5jjmxbTi7HejMNfBSc4LQ8fhHhvNXeU77j7jGVPku6UeqHfA3JfgQhh7RSdQwpDftsK2YSd",
  "key8": "4uc1Ub4AWyhzbbnhuhR8kXRgoy8qGTZ2BNrbDjFhjNfpMVXJmLsvyuvSRvgSnnoa5nKZaqF2qwuJnbWpstJfjAgG",
  "key9": "2WuuvUw7fjQy7rZBMF27F3p8ykDKNx4WKR8J23Voop9GWFCad6QMSEHsQkCqy9LHZNoz9WKsnuvSkqxi2y8ZHH85",
  "key10": "4rfiPrwE2A4UVwrYf3D17YcsKHGbmMpwW4ytQasciSBboEyzQ3mD1XTWQfZ4GNmFNs2G1Gh6cbvhU7a3yLSoHqZT",
  "key11": "23TLRJNroP93B8Pc8o661JCvbgDZQu8g8RoXDUr2iWiXC7Kic8bSubrmduhZ7R67YuQ1Rrc1bAcZGeGqnPukCnJ3",
  "key12": "hj8a7qqqvV8pSMPW4Qtf1TB6LiWzv1niUr1BaymxzyoCK2ZnpnrKCVdEEpuwvnL1TdaeSUhXSjGue2QQ5E7J6zG",
  "key13": "25z6Q6Te962M4rd9Lvue7qw2Qtm2XdADjwQsUHvpntHHckb6BzEMoETK4HTSbhmavQNcHmaY5qyQiU6zbiTdCv2b",
  "key14": "5SzjVcVax7fS1SZdsGgQwHwHeqAexkzuopWKn5FywRZzmYCWUFdfPbFTan5u6WohFgLhAHt1VLvmKWJHbcam1wmM",
  "key15": "3fgNMDHt9RDAj5sjjXys6kjeDiaFQvHK96rfzKaBF9NViPTchCgjdFnfwzSCbE4RbczEp6WwQparqU3a13yjg9pD",
  "key16": "2bLQWa2xfQJuyke75i3KwjSzAYGyxfkSBffSs6AZPLteMXk6vd1hGqkGbA41nGB8pDeaTjx52W8gQX9YKafNLHqz",
  "key17": "3cd9QbEbn4gJxJ8kfzD9dpLZB8VYQVu3CGsXvRuVGy7WDNJ6GEn4EtDY4bZZbPzfERpGuo5gDhoAFZjCjkins25z",
  "key18": "4qXbcHW58av6g4UnRV5AWZNqYTM8J8XezwwQBDwDUoCAhLPLjpV2WGHmLRnfTmTizCXec1H1SwbVaJ7oTjxWf8tX",
  "key19": "34CKg3os6AcUYH2o552aWuKNLpGqu6UF8efJ6KB9odAgY4hCUt5Vdkk6fCNxTPaNL5pUT6BWbPUXmjqyZb9Dbkmy",
  "key20": "2askgysjc29DmCt6btduXZhZpkJk65ovdg6d3WSn9UhPTWBbSxrx6LKdmA3mT7BbtL479pHkLZCNhqihyNCgXvuH",
  "key21": "654ZH7wWuEyGhH7su3TFX9yuDpRiG6BTy1qxK3KT8S7zt1ajzqtzNaA8PHmxkomkj6KrdJvxSoATwTXsJ8MEUkp",
  "key22": "26LooxbMusF6psZjscaFZF77u8H8SLCJtxE4wGcBkJprGTBy81DfmyLyZSBL63u6DSE3Rb6YWvizUzZtXUdA9Kgv",
  "key23": "2qYLkoau8kBJ1HxdTDgJVRjAfj73i2M3yoBy1MNULvcbEeJj9j2T81ohM1wtsZJUwYMQtYs111DregW6J35wB3W5",
  "key24": "5AoC4dcmgSDUYgAq5zFkUFngm7S4ZjRPtKqmoCgKyJnzWKUHKkaK6NDzJoiDfi6o2g8hDNbC8GqJyiZJ1r69KxeY",
  "key25": "dskS4L32g7kK46zpaN9XkDXgL9hQq8Njije5pXpomspCN6WmePKDnVHcbXR8uZU77vvd4VumjktYaX3Rg9qXiQu",
  "key26": "5bUtSB21VXAfXhh1u6wXYVPrP22d9oqe46SDncxUZM8J7txdQA3GcT7kMxDJG3fypPtzayfkczGdD75BqBWDBwKE",
  "key27": "2aA1qPwmXeGcTLwx7apWVN9i7wKVe5Ua6thEWR64nTnDGEHrq3Q2sUW5qt8DRKqSbrCPos8E5woZpeRodSP15je5",
  "key28": "zA3YoVjzzfc7obvnRjToEpVHnmDT8xooXyH8jz4dJLfzhDMQv38eSo55wzLjECmCAgtWUnfsxK9cuaELg5qSrmo",
  "key29": "3yzcJXTUHLPWdG7ipe4JKxVyNxHXeoYyaNCGypZ4zx6ogGeojStgdCx5vT9ZPDQ1tbRsC1EkPpZgJWrftGtGqvxG",
  "key30": "5PvrH2YNjMWFGLT7SGVerUM4BuXvognL7UqpHptVNwnjRoh3kK5BowockkvEbSqRoAJ2tG7eUzsEZdKDVvCdFbph",
  "key31": "2ezRuuGPvNYrTmd47G7hv8tDfi89km5cKNL6d7NxpoMNeJiSrvS3qUEb3xp9mbyNBE9kNA4XKDos7rHLVGAgW1XA",
  "key32": "5dziZn8WNJK1DejFmv3qt28gXe73J5FtuA1YWkQsXiXqUQpGNGnA3mdu5JK4qwe411EF8L647PYmHn5eL9VSVCsc",
  "key33": "43F2oPrXc7ABu6XdS4vAtvzvdJZteoXQgxi7AfzoNFRozwkgV6ivjR5RzQTZwkuzpU9V17qNvrw4PBriFMfPxTWX",
  "key34": "2KoVE5UcVuv539Wars43wJ5xVvMmXAaPV3uXrVdYAXvFGZfZNe4sarpSLnGF4ABUBxLUZxguZB7BbuxwZpXZHLyi",
  "key35": "2Az4ohwWjzsr9enBCmHnCpauDCLx1dmYrAQfnCfGfeB9WXM9r7ekQRrdrXQkoMBV2RisqbaNqTBP5XZxTLSBVHgb",
  "key36": "Nt31P5nHX15N2aEnxQJGJayKSAPaR2nteyyKNYu3HATteDRZuBr33C1BLAaJtjd2WFUyDjA3t4b2Q754FU4dAnj"
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
