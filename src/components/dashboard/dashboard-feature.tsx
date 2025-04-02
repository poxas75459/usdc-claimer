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
    "FyKA764Ra1jVbz4Pc1y47xU86mVteAWyWz649EvXmHMa8mJ9sVAjkYXJrj8vgstBr6x5gjvpdCszoDCPTJJFVtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZabPv6vruTWeNMvUWdgX9HUvUsG8Hzxfttn67CdFaoLu2bdk5eBsFd2RaQXBVuNPfVrF6ZTnPXb19J6vhRF1dgB",
  "key1": "byiLxzznvTVQcapf3b6du3j7zqPR1rKpyUL2DuEq3guWrgRKbjdkvmyc91oEme561BAgKs15UEsyFfGsKiEZyGC",
  "key2": "4HvtnimgpQEwpomZN7Qt8NNBAM893FuDA74yrQEYEMrkysSR7mTodH6tLud2PxNeNzRdnjU3dkDcPxPHeRFfUaA",
  "key3": "4qrzrQejA3A19xwGCn5epn1QeqAYd6VaF1KDksC9XhqjFjMzmZoAaa12km6U6D8LvhMPFPa7xtP34K4qsV1ngCWm",
  "key4": "5NWZWzS7DwFz154CsiqH6xaSXGZcGM7hWPL6GKQhF1PGEzLrJ7necHfWSEMFm1VBkw6FvPJXywY4dNaVYorNqteT",
  "key5": "2tW7xmw5Be4y2nH4ooD2QejjHJR1gtVxfnEgcSygixn8yjA5fiM6K5CrrhuCS2kryNvJYSKYYcczdFLcKkpdW4th",
  "key6": "2741ZEeyWB4La6S3ZirdB9amgHcU7hsatfGokkSJBwsGZg4DA47kD33uSVPKW9jRMP7uDGMb5m8NMCukDbhgm588",
  "key7": "4KSfkBj3fZnVBBqgHKpw5yiTuE1pxkvSmHMLhAGMtkSoB5YSM57UJ8EnHttGXZtwMk7RTN8EejJdKqx7ENt5wEef",
  "key8": "4SnS5dMr5s2ZSsJfuAZhY3ZTzv5tvyGBZ4FrPjoy8ZMpdeuS6KQQ8RfWHTt1YAi1mLZvMBU5nuJs3bWfkCKM9xYf",
  "key9": "513FsXX4Cxz5EGBSuKvr1MjDNsSS7cjjYNHetx1zxLesfZXiXknHmDpLJUZuordyimqRLfM6CUCgpFjZkoStB4ze",
  "key10": "243Mq1sHc96LfpMvRS5spdd4xrTmCip7hehWGKKjEZJBk22sB42BuKLFCBct6HY1j2WzjqnWG4ozfVD8LjsdkrJe",
  "key11": "5bEdLLVfJKeD5yjGX3YwXwC6iZbft9dqKGvVt6NXSWQCLty9htZKFnSeZtH6sgTeHqDa5JBC8H4BeptNTfLN6hGK",
  "key12": "ezXeFwkRgk3zsFurF9iwiGgCaT2DUyhm9qpx5ApqTFu6ovLYDLWCJR4wCDttcsTZQUzHShaLyFeQpf1QefPjVvj",
  "key13": "44xV42QdtcNPDsrSbFYXNzdyid5yN2mwjc1Yh9p71SpMQpnjDPzgk5gEHEyAyvMJfL2ojwHiTm8C8Hib8Wrh5ar7",
  "key14": "HcKiqjhUSkca1wQxwfFrYfREX3HdanRdJDGezcwRru9y3f4xo5RYPTsds2ebrWKsH9Hk1osohW68WRZQkhPbJSG",
  "key15": "bWe7rhpq6AXq517SRbYPxqSEPSMeoMcFYPRgQvabXGsJYUk2ydNivCqioetQPqYQBwTLsQpqtLWJi2hPStznPGe",
  "key16": "3oHE8ZWCu1ESU5tJzSWwVoQAxMWToKNnuEmRynvpFN5d5fG9EEConSiWp4h2W3QHARGMyeHQP8eY2uBcshxwyLPm",
  "key17": "3p35YKBt89yyaJaBxcDGhyqTn7iTeFporoFobRaEpEhzQRTtCkneDhyjpR8DhEJJBueJ5JWV1fWZYMZ43ZjcYrJg",
  "key18": "2sM3YV6wwJSYFjBiPmuxuqxK6KdeSzXNS8ou6CuKY7uXQwPCm825ZvyVmGrTGSRQxDkmYm9AbuCcNL44JcfJ8d5s",
  "key19": "57YpqzrWUqSGWJYvBPkhn7TZasGPTHNJ5k7wNx51gHPt6aBApMmnwnyJouh1arsyya9dHDXJ46WFP9kDFdGQR5RX",
  "key20": "3zQmTiETJxxzSrAruWsTCouNguPyAGjyiVExM1i3hLXsPRBAbebLGSngw42bjUh1ZyKqmC4qQSvUwMdQkkLF4sSh",
  "key21": "2UavvGPCTvciWiGhhzzg5RwrQmsA3zM1QjiFhRDgesZFeXb7fheUKGopPGhDERW8FpwpyTAsCPdWfHEjgZjSAZxo",
  "key22": "49z2gT1mE7L6GdutgwTKwXDxD7abQLhQBJLU52QX4fpmKWqW5GiXcCxwTGT7KH4htLaa7ZBJcubaGSSXMNaRmCFk",
  "key23": "2y2nnr5hesjco8E3Qr35U7ApkZAEKbfkNvWaAy8c3ocY2ZzfihbU2e4WamcKF5hpAEggy5Ziu4heqxpZ8tDHNQV4",
  "key24": "5yjEqe183ExZcMnA6fJnRf8fzviafJMg8WyzUtC9LcxqNW4TAQURtea8sL2AuwSKNy7RyFqFPTor1oj21Jw4r2Dy",
  "key25": "3Mj7VywkdDSBjNHnjyTE92EkS9GCWvWMYNTL6kZPanntizkGiCKBqH4E4Fs2RDjcUdLJuyLPmzNLhTzRirMsUoh4",
  "key26": "3XG7XJ7jH5ZSTQUbtRjBae7iNgJaZNoUefWpN3qgie5NDj1ypdjjwtf4nR5xP9FwinP5WAc4hW48W3bU3SX965P1",
  "key27": "2u9WTUXchkYo5bkYeVPysYfxukutXhKZTfFmquaMAcqtRLDr3PmyF3KHzA4AM352PatXV3gSfWqT2bvTEvmqUiL4",
  "key28": "3Sdes7txdFkdrk8JGaEtMXcHb8VKk2gMo3J9zZ1dPoJ6gmWPXxdJYVXtELmRaSLJtQUPm1FKUuj9gnUpQym5UFGQ",
  "key29": "pp1KrNF6zepHRKv2gLt18drtLS484u4tBrhC4QJCU1pG8eh8HzMk9w8raYx1mGnwTJgqnG5jsBHBUoBx8uxP9uT"
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
