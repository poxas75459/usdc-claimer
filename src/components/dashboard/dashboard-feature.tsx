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
    "Z8nSdmBUK24p3sRuurJLRrb2Cy96ETnjAdMsmyRyGZysuFjevfCJGCaXmdqTECmzWQDaXj45AqFvRVV6xq5UNZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdoQojafehv1J7qz5TT3fU4vX21bsDUKtwRVU9mKEj9Q9enZoXCWUEpA6KGYdgXphecJw4JMaympa8PUWHyXFqH",
  "key1": "VCwHt2E74Wt6Ny2BqR5vGKuRYYT7LiCKpsVAAirzj1ntKj2xWkh1KVPtrbWB6onfYr7TViEwseg3MspSkUeiBCX",
  "key2": "JqhF1rzSQMJgikojJbjq8ETM6irxmTsFAFY67p432Mr5H2iwGQqm5jQ7bQjuVSzx686JLmkz1XsTAB8QX5Ejz8A",
  "key3": "4kNMoTsVc47Y54gHsuzn6p9pnYzhVj43Dm2wsfvvwukDa4ZnGEz9vTjMCMT6oVeqYM1EWzoAHiDW2ipQE8nVJCAd",
  "key4": "4n1nnhe4V5beXRgfCe55PanYKBYhd5suQQziFLc65VqPhfNq5pXoSW79J34vbdgiwitJCAbra9WCfK2GyiH37vVs",
  "key5": "4sBpme6Xpq6e75bVqeuSNW4pSgJVyafGDnMcEB5Du5cEquBQTPeDofg7YWpPB7ieruY4LxhtMwxBTC795f9qE4E2",
  "key6": "29nvREoVNUGNWa6CbqejihmZMi6iLFaBu8iKt8zYfneUWvtNXkynRboaFhDA8KUpP1VUzMZxFcRMFF9gpf5WoPi6",
  "key7": "67KvQNfH22yBxaYWiHyd17RW2YUyuTa3LcD5hRsoe5VB3iPVp6yxS61asNoTwWyvp1DAPRHi1Bioc2PbzXJyj3jF",
  "key8": "3WUJnzgWzD9nsAFdznHcTKyLi3EWkUj3LZZzriNQMafff3bwwC4vZ6EBGHRe2JdPHhxF7KpWW5et6KuiB1A77KzS",
  "key9": "4jTtR9mgbqqgz2e7Gs1yBVJ4y9bFqs4N8ShCZnAtgacuNkGpfdBxpGwSiNiogvzEyXcRM5qQmNF5sX3UULc14qXo",
  "key10": "3igjQsxcVBYuBzgD5Q3mDYFqvaB3JNxbyPffsj3zQrXiyhW3JuxxFEkps2qpK9ohFGsUNNpsxpzdGSop3c6Do8qX",
  "key11": "4GabJWX297Q4ZGwaBKiLAvc9CFMXBuwhHuQyfrd4YCTzHThmZHPQMWrVBKWeTQVt5at7rL43Xw68wXLk2jA3Cnd5",
  "key12": "3Pu4U4QeajKezkQB4WEuwuWYYCUeHc6ZE6pMjqUukPMgAKnVxUd3UfKNNyPHzWbaro1mX8mggnxfrDPYxKGocyRp",
  "key13": "5a2TDzj5RrsoCGqugSeZ6v6aQXZfyzkBJmrsTJ8uvjbgG41cnkAjbQkogWVraenXUrHpR9aNWSKLrwqnQG6WJVJC",
  "key14": "5Cxw8Qy7pMwThEHNyuHkhJcbXNQtjVDz8feGuGBHTYDYbRkSXC3oJ52kb6K4s4bxAA3nQod8tpBZVB6VR4cByp6o",
  "key15": "qT6CE7HvD9Ln2bA1imLxQiRiovrZUJmEN9z5WKDHNmguX2WYugactiqTmuHWv6agVk6LVsPKCEqDdYMPusMxUE6",
  "key16": "4BU9m7bmMVPvmNJ2c7tm1cREML1CDYLysvTYSHBA3s7yWinCekycoKwSQPZsVSeRjy8zdAazi2RJuqUwGTDTnsEx",
  "key17": "Y8tdpgVBH8udb1JPAT8UhpJwMj1ZVedFSzbZQbhksBV1PUNWbAvvGVmdVuAF2cpnRQGuUCXD3duhghCqqzVe5V2",
  "key18": "5dGzH6rUGXPjFEKx3RjwTCzcEbS7u61UV77E8vKt7dDwv1WHkWFAZBuWuo4qUAQhYag4h93B5j8bhCmXjzQx2Y97",
  "key19": "3zc1weT5g3e2n57UBD3fJ7Huzwy1tjVsQCM7JeiCmznH64v4kmVu9oGhRpzAe5UxTmSEgGtC7PRNBD1MiLnjLjyh",
  "key20": "676jiiaVrGPvWJnzy5fVDgsdAPHLcaDc9cb4EaJUMiykhfcj9hwYQm4YPKDZjbw6NmuViEDSXMomHAuz4kkk4amS",
  "key21": "gDcGhAB822f7PEfv3z1irrWjy1BwUsi8BUqNqckRfRaaB9opH6Dxkp9hEL5E8ZgwLAWMEbJC5thr4cEg22ezbz2",
  "key22": "28uqpai3muyYGAL7RKe1QRfVkdd3GMywyd41CVTsFDP7NgNhFxCndXRoYDaVttzMMgJ3TEVnxLJHjUGRYYcdD8Mp",
  "key23": "3ZRpLNwRTgwZ3ha4VmEYqHKXXBofyzYBx2nrsWG1X99SEZH5SQZY6812YGsbDcQDHYJatcJAUg193XiLGtZJRY3Y",
  "key24": "48qsLZqaYjdgRty4U8oLFGCaVZH8tX8sWHyaepNLrzisF59uFkJ6YUJkC2nSy9Ha2U5qLFYGKmqjFPuk9otVSJ1R",
  "key25": "5sDSBKA3BGsb3WZfzduGJvoJLWby6QrZwSfgB4LWi9L6sSAjyqHu1991j1QSs8HzbWY3njjtAzh6ioXrczqyWmvh",
  "key26": "2jeACL7QFRDDRGusyCReyZ5XFWgmMet4MqsEBscWLEDL5J4dVmThaafp6jaMzPYHn1yTQQDxCsxk7x2Awn1MuiKz",
  "key27": "5NojmGh4ddz4NaXPx5YPULAJ3QixaP798yU2TLKbh1KA61cNiZUP2J9KWuj9qVPQdarU6ZXiUzTMXpkd1BKUYGgh",
  "key28": "53BXRn7g8hka43t9s3MpfoG49ESaShkwytSs71fZMjfvhQwo2ymfpQ2moZCjPqEWGEJwo7mT5WW8EZVtLJNNGTiB",
  "key29": "3xSamZHe2AJQJNHcjapABTXW2GhbS7USTEUML41HvWeKMGTQB844Nbt2o2jfYy1qiqtDg8RK8LAybmob7e2jYQ7k",
  "key30": "o6NBKmyGrq82ziazfytvkAuyWWnxTWz2fy2zg7cW9tQAgNmbX5whUrYVc84yyZALSPgDLvb6pCSHWfoHz75nq4Z",
  "key31": "4eBFzga61qT9uDr2thJftKfaEmYqgJguJu8ZJoKn5nPpxnUQfH8zovDtxB8xfayhgTJQE1RqaAo7FgmXXcbjykMd",
  "key32": "bQV4dsVFpzyu2zVRTK1Lk34fVf5dRKUR6ixvv61zXyN4iPjWMdiAi2cp9pH1DDtBpVKFTGFuhJ2JGBCKChxGMeC",
  "key33": "5sT7fgAtfd8ebzH1X6Gi9Eq9CbdkniMH8xfq3si2SC22g1h4dRyrnyNfPiGgfTRguwFVSnPUFjRkamMDEK1tUhek",
  "key34": "47JLR8qcFneeESFoK4S8htVd457KCSehExHHEUUvdRWDa9LyavxWFoVn8dTJ7c2jAWWHu9esME98czwtyyPjQ1wF",
  "key35": "r3Y6FAUXZzVTvLdMixYD4tdb5Ewc1jyd9EZfo9zEms388yzW19oMmjpaJ2amEtQuXQBzw81fvCPiFACD3XTzwQr",
  "key36": "3bwT4Ubm7ysV5JF8j7JH4DbKyhUUdUgxfWyFu8oSMSvQANpPXFSDPboFaWyCdYJ3jgTSUKhpMyQjSjacrEk365e7"
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
