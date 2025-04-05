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
    "2S4Z4KoSKu3MZjecvxCkgrDaTRBBP3an6QDBZjGs5s3M3uMg1MN4jPMKMirDNaxz9pbTWrvnsFnu6AmaLzDZkMK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYVUmSsE6RCBLXTrg4gtse74M3jwcBaaPwDDWWs21xzKSH9Lcp2T6Eu3qzYcNCmjotrmdt43kjGvUr78HAnHa3E",
  "key1": "66M6P5k8mLx8NXkTTtLXR8BvGX2ixCFNACbkxA7XkqZBMLoQTwg4evoRdVrCrUD3m8qKbTWmQspXGEtRKAsz2pbH",
  "key2": "HNU1f4ui8r3hDChsKRy7m9D4FBELNhVXnX5bW1SFBvGZntaYt3AUbBUv2QDCJtqmRu2zxHpuAejaLekpnXZf8pX",
  "key3": "5CwFjVTKraeQuLL1Xi5wzBW7Tjz1jLs1VqnjzfRiJLHy2YQsnN7fxHAwgxXheTVwjk8vwzqf7w19efvuewYDFUKp",
  "key4": "5VvxTaHKFd9PW7DApHtcTfow8NfBvynFzitDJ7KkKkMsg7S1shgzH9yo8emur4Uh7dxddSP1Dxxp66LgvM38sSdK",
  "key5": "Uisv8G7dfTsageKw3yHgHkwRr3ChEhZ2VT9Q8GHQ9bqd4RmCYcQj47MeFnwmTL68UCr8Mp6ZgVBQqvGTW93bD6k",
  "key6": "5Wqpq1ZbWmpFem2mu8NtRkW7yj8EUNiDFp4n2S2atSag3HYEKoQVfGY9aHmwXFr15AXVYqUgy6Re2AHnrbeiYvPL",
  "key7": "3B7Hf8WobF2JDvAkmeLaY6bivE8AN9in7aiDWTUcr9qdY3PYLZSDn5uDCpGi2n9w8SdxiKJaAfGy4jGZJxVPS2jq",
  "key8": "4KgXbrSKULbfYHAgk2RdTFWqpgLMFFXzE3Wpt1TQsatdujGG8d69g2oDQpBzHJhuLuUDRsWFX2QhvUabAkDfCxA5",
  "key9": "7dptDxtYkaMjASoHecr2t13XXjX7FngGY2fNxnvX4u32hyTLfRBWnqx2rTUzb1gJCcXdChqG7aNwfKTcGPmB4fP",
  "key10": "2y6fXfsFqqdJc8r8NSUg3a1oaJujGSBzuN8m64M6t7VK9cRFdNThrgWje2PKJ2NSpGxoJDZKLA8BwxgVbFghFnAK",
  "key11": "9GusUno2kGoAcA8SLFaqfMR2AHZ7Cd5qHTYsKBGfa51xvRaQPaa7tnGmYNojiCV9e3WCojTv5VpN63WC8hKSJVx",
  "key12": "5MvEquyXi3pw7md8Y5VKMshHAVXK83mTETqB195rQmZfZoJpom8HSQM87beTgqnC69Wi6kgUdSG9arSYoevPFHjd",
  "key13": "5epCrDJbk319pdahQYNMgaXvUgs8U4b1aGdpUcqiP8D1VLE38SVZCDT9juAs3eR2X5jDzoS4kM8vt6a3jvjKqjsc",
  "key14": "597a1ZLm1ThKLbvpZdyFG9Jwb75snecsNDFTD2PNC6pv7mK2jptg1BWpdxzEiHdf18zggj3Jtdbtj4YsLVEcwg1g",
  "key15": "3dQLGsgMBv3VXxiXJz9zRWfaSRur82eJMpjJNj6jhCiV5TTh4ptxpUyYaB4fG9uShGEzkLK8zpdxyApbAbphVk4p",
  "key16": "4BCPFhjPsLT37Zwts5ATtXUuvN4956JRY2hZFwivLBG5pYS3RmeCVguU5G5iog6nz8QDK1KMdXXe6Yz4Ab63fJyH",
  "key17": "2BbuQgZAMan7TQEXk4GnpGRLbMXMCLA5C7eqwuSWcdVxANpVV3reb38YKRFh5my1qV18Eq817CtihiNitP4tGmWZ",
  "key18": "62afvSGVBYozfJpqbugFqj6EPA5Nv9jF4QTkzgradvC4e67hj4wN1SLkTPFCmb8dCymeA6u1hEVgx6Q4j8xnfksL",
  "key19": "44wqGs7r4zaDKVJKTiKJ6Pqp2S5rduxfJZBo7GSVAmSMrqYwSm5QSwSNXyGbA1GTbUp2GhFcQCHaiC9rTBBjbsJY",
  "key20": "2PtZMLeyf3Rsi9vWJfVb1iLZ5VU7gjZYBxfL724HmFaAXhPRCwWe2opzfjUsxFZKywvkKRj2h1JXUGbW2NNX2oA6",
  "key21": "4sW4nV1mVff35QeUuqsn435KQdLxPvVBSedaiJd84jBc5UhB7w6gb7HZXf1Pv7xL45DArBugsVbcunbqWoXWz6A8",
  "key22": "4C5mkFHkBLArMmsVnDEBgp3f2m5CaqghyBBBWxGRV7udndnK9NmBoXopgWUeLZrJGok7wQ63qfmNvHmQZcFBS72X",
  "key23": "3eXR2kG9otnfXj1ikvHnxo29mjZV5pSUPnSCkANKV8cUMSbpuS8yW6HmFMwz8GLXpJQs7AH8pqLWYgETmpfYj5yh",
  "key24": "5cX6NfJnsxFPG3S9bcBZRc4eG1UPye3KDr9L4tAdGQQzGwrsxBW7XUBB4jZRN3wqoqx51n3es6yhtffdt8D8bWQE",
  "key25": "3ArcMWgBWDwSZbd5bo2nPgmrHA9awiPRKPviguVyj53JRZPZBi1DZYAbFesnWxeZMuPpHaNVhdAQTdoVpccSciM6",
  "key26": "42y5V1q2Vui7DK56xJQAakfXLvcrH6KRPWzrr6LTYczZ3VhxodVbLsyhmXBu1prLcaQKM7AcuCfSRComCaxEc77B",
  "key27": "Z9D5iZvDqhhjcD1PcJSG9J54AXCoEzF1v3ffAxxtE6SyHfRZhZJVcvhacdGoXY7cpbEoYqQzZtL1DE6bbgVDX3T",
  "key28": "JRCMq8sMecuoQDosxJg9hL7ZG7NoNdLpovRSgryjoegqaDpWYbGo1WnG9d7RnBjVJytTvAQkvxGGJYgBrswYuMU",
  "key29": "2h4Vetx6Me99SD6N3yVa3oNLd6wCxYJJeGTrzbHiivrYqSpnHVEfoHFCttc8BVpYxwfk3YV1yVTmsBZRf6Hnjfx4",
  "key30": "X1TUzqtxgYwX1oaFpMcV1eH8BHKC37hJPa1W7ayhqNtsDq7rkWEt8qDfdKLJizSjd2fGe3zYd14hVgjtCyAugD1",
  "key31": "2zdN5Hy3P6zyBvT8GB2QubMrPbQYa7RFzRCan3JYRCrucfVfJ1TMZMkyR6Yj7BwfeGuESH3h19uQkEL5dSLk41b8",
  "key32": "4UJ2YMr7aV7eHtmfkBqQ8NhQJ1oUVkbpwcHfffmxW1kPvZcFcuGvdZP7x7FZFMKCF9KwfQjzJ1LiNHCZDYgC3CQD",
  "key33": "2tsq3UagXkVyS41i8WLwp8AKRwUyQjYzDcLs16FRwJxJQwFadkX4XfWAz7xQf5VDzaz4UeGy3zwUxbLYoz6JhseG",
  "key34": "52jrhuLLiNeyPKNsCUovpMUfqGm6CBkD5L3gjYYwW4bHmb55LPCEiTw4sYH2TcnYXxvYqkYmU751fTzTJoyWY4Ra",
  "key35": "5N6ZB4ikQuMmtUVPQGvWEwxyLGhgTMGKJUKGeDLUJUhYfMw35LSvHn8hVsrH2QuAhrrHEw9crxDgEVuJRPnvRQvr",
  "key36": "3yWnia3vsfviSikes1kXLCcbMvRc4M8LyKYpohGFX3WRfS3ht6nPp46kPUaAqsdLT6mqRWcBHbMhkB6n5TDXZ2qE",
  "key37": "28rpuwjPT7d4kggZGAEg1aECvR25bJpNPfZRyBgK9b7r57Du4fmZ5qLxfRJgodRiCphNikKTNLSwTkiMVTLc88g8",
  "key38": "2uq1J9BqdwE8h7MN7JZ4UJtGep4NYAwCffi9vZS3yGLQVaScaqaTC4zhpoNx8TTeuMqPsQmTDZNUogcX3xzVbNRU",
  "key39": "4g4rKNWka84nFmyndNkELzReV3hu6QUr7M9QRCmJKPEtF6v19FQ6DMgAHmnmkoZt4H96LPt9hWeGPzZcn8qfAqZk",
  "key40": "2TaUZCXFQFUSJuWDapgSAkF7e28fM6MMbiboL2pUeHievbvxCprW2cQjD7zvkbmxdCXZXcpyoUhSKLW6jtS8mcnB",
  "key41": "2Ue9kdHWkUZW3FxzU3AdXqvocyvHL2yFyK7SZ7VFLAYww1LNLjPkZhysncJht88BEmBWZzNHGVX4tgKtvafq4H4z",
  "key42": "1XkKZqN7hwuZXVEvmerS4m5KhEt6c7hAvhiteMiFPhUBeX1aEmewjodiKizCfJNM2fJzELV5ikPnmNHVnBBoX1",
  "key43": "5rrbty9uMZTaZphfnNCZop1Xt2ZV3VKv1Migi2BsS95ffg3S7xCSE8rKw8kzWB39qjcHxTP6wrkJTwCujMXnYUrq",
  "key44": "5M4VT62aJnzvGDoAQjBByN8fjWb2vjiCTzWMVCzUtJ1x2d8vNd1egofecm7ZoA9QA7JTtVXRM4n1VdeBMihGmJW7",
  "key45": "5fJVqfeV4Bi9pGzfWR8M8tMfv46nwg2agDTbHhdgecBG7Ch9XAS7nSdRMx3xkcscmpzuDhEF5ABnSv1U45tpi2QX"
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
