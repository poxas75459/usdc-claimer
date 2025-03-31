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
    "569RDKK1xf2VjJUXT7KitrKtzGCzrW76vz5mjfzM7wYJDDYn1TjNVd5eWJMLQnD6VxvE2QJDxH2TUyteXpPkU4Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JvynyBgQYbo2RqRGeZgYKa6gxoUfzZCGAVLBXqmaqkpyc34YXYPMSuu3CnXjgcCj7dPJPAEhBiYknGMyzBhs53",
  "key1": "239vLyoFQCg8mUzanCRYMJnnGz1T61Kc7V5uLyCpGAExEKZoTrL9ajp6BvmnEjcy6TxMCLQmdLQVJbLcA8CQUeHY",
  "key2": "5pPXDVZH1V6Q5JSeFifWNUdDscQKZVCA2VDTKG4yFkgEy1bUXnLiCUMYZqaPwdmPhzXdQeUgS2Sgdz25WVSfkUoF",
  "key3": "2jhYxfHjmUVwQCUbvJacvu5qdtByPVFkwh76JV2FcuVBT9rbkD1ouVwUDHNqujyg8hiQanGyf1ZKhLZCzmVioydP",
  "key4": "KFisqp2JwiyVjR1PLVy3wgFXc42mn1k1c9ANiXKKLsodJbS6xQvLMyyk1SMyq4CWiyLFRVNCFuLYpcQuebGdX8M",
  "key5": "45yjU2YKYUwLDFr6v3BD4W6LC4jcV5XAtgUbdTdcaFUBvSrP13k7yNnLioUYCo7DvPpf1YukkrQuHhxTtKPXSkrL",
  "key6": "3sbWoR8tvVVbgyjBWT8AmZXyR1seCFBUqSE4CUxxwbKJ6qVvmebF1ThxDcmcCh8xYTS4nmec6QRhzLu5ejSggoZ",
  "key7": "28isMCddjAPmxQgneTvMQk6gjAHxbVaPBtUCN7ZLBwj93XZwsjyfdzknCMut5XdAvP1khFERVA6GrkvEJcxquxgh",
  "key8": "58LL4PYqndvsKo6tEvdh71GtBxRiu8Xgf9Vhafszw9omtRqkzR5sTPJs2nGrq59afnTgbW8SWZ2QsSTdZPSsWLrq",
  "key9": "4ALvLb6mveYbRifQWDQTLHGrjy6R2WyFCPPDavCfWKEHobKuvGDNeG1riecpG2oHrqG84n7fucERUs3dwibBo8NT",
  "key10": "4ER1WVjPwveTDsBNgTaq276xRmdDpcgCDGdTqSAUzL7cSUYGzkEP8FUm8un9fhAAU8ESvsuWv813FktqTuhTP5Kk",
  "key11": "2iLeJAKX3ax3FDmAnpP1yMdufzy1uNePACdFcrLqMRR3sXFpbrxTHTtnD4qETWK3AgRwcn2KzgJEUkozrtQ8me41",
  "key12": "wEHUq5gEXdrQxUJ12FN9EDMQLfe6jSh8oXuqg2MVG5VxaSoJ8QaHPTPG5y99BnTXhPDiS9bKmz4iL8BbVZzzMaS",
  "key13": "B7bjKu4eUhZ3xd6CjwThLDpk6ZfYYzhUXRKRsEYC2VUDwB3ZQq2QCeFBYtkdnUB5km5Zo7gwcsLjZgeoQyhtARv",
  "key14": "tQUjBvixh3QNXH4JghBQS8XHt1Er2ebfHei432VUio6XHpRYuVhEo5y9s4w26jM6jTh2vVw5z8aY6G2TAbSN4TM",
  "key15": "2V9jUiT6KpCrCwBeffLbbKyMBHH1X2Rk9gnkEBsPgfTdEu9o2XkyaHrJYbrbRHoeDZDUSKpfcKfJU5QLiTw6ueS3",
  "key16": "3o4LYuPomZiPDAGMzpySVYu9zYsLfY5ADejkPtK1fKfQ6yxgGE1zFWr1y3UXiT4928kiZHGKCJa9soHoaXj8efx6",
  "key17": "Qxch3jUqFyh7dSuUdMJ214dHpR7PDVyGKULxKytemHC4jraLEarMkxoz5yHpySMoo5h31o1PPp1Y88pct6FsjzJ",
  "key18": "3Lqr1JHFihV5MqorEc2XsKbUV65sf3D7BN1joVpB4BC5hHu5q7xXqrtGksFiKaYVxc6u6JJT8GRfR1oi3SxX45o1",
  "key19": "29A4Fi7DV34jha33exXKNZCRL99Vz2w8DQDcfBXdtDnGi6c3VDFcAGGd4iaV2a43RErPtdaWjJ3uC6abuEbAijgW",
  "key20": "411u68YJwUM9LyTTzcMvowJo9JM1BbDuBfsYmF8io97Cskbaby8DrXbrNZWrET7M8iXeFCJaYXKz4tMqRQ6QGcbE",
  "key21": "4Y1mXKkezYGSJkZeydVw4MUEpEEfUJw5DApGJJBiHE1bpRDuuHtjchnn7tQV6sBf64DoR82oUQ4VpQCvPdhpJXeb",
  "key22": "42cULuRW42BQNJKSkz9UXHQnib75W2Z76FvkxuogoGJP4qhTtnt2MAszx9HYUCZTk7W9dGKsd6mvwtw32oiDittf",
  "key23": "5RVjDer1Hg8oT4HqjzboiSuXjWAR3Q1anNNnmQtvNhWeqpbLa96Na37RfHpbC12xxrKDRqmF6RjXUHVzmFE9aLFL",
  "key24": "4sSzyeRvvWAzsDVYAtYUUKhKSxgcyLAR8VQJutAH4QZwJzqF8oQBdV6V2rQvLFEpE2AFQFpffBoEdM9PwubHENXG",
  "key25": "2YnwK32vbMH8iTLhDSrSfTh73vThE5NrTDDfw9ifTuroKirCKYAKgr4Q1fA5Rj3X4a2y11Kn1cjB64TFWEEWWfrs",
  "key26": "586DJWAWTtQT5XFdKuLDeqAanXma6tYXEUXd6gzK8dUmDqj6tiCWYqzRoT2MD8FwRTHK5CTx7YaKMkJa6tEkWqbk",
  "key27": "63icJpacAUvcCW9ig7AtxqaJVLCsiBiKoQrFNJTxGBL4sLRLZvBnpj4w38fiFv3AZZWosjH7NDft6qVK3FLQL1y3",
  "key28": "sgCDi1ysKnheJSjBdgN1htipT4A2Y1mb8fHcSBK52dJpUYUiW9FyffjevNvdqWHtSvbSFAAUev1qrggWr7Vs6Aq",
  "key29": "3t98CkofLubnREZSTD4tBoEHoehfe4LfptizB4RN6W5XLew2xB25heiMs2U2Eca5RnDy877U57zhdBFcp18f51BC",
  "key30": "2XfAhbWdsYaV9ce3hsCkuQAfyhPaKFy3AehmGV1A6NfP7L21DzL5eipm21kwpFHj7ir5ofzNZQbh9HXGn4dZ6Utj",
  "key31": "2JmAtS5JvmVzfaKL3YX4vEaZVUo8AsdsVVLg4AKv2AFFJNSxiJ97XMJGqNV6WbsQRKw4fuSq9JqLQiJe3R8NwzNb",
  "key32": "5eyBDHpHJhAioadV7eJSeFuaGFKYBrq74LrVYQf5M9w68adbJnP5M8vhXEdpqAvS9HkTBJYgKWKaGfVqWTBZhagj",
  "key33": "3PtPKRv5cwvR4KHZv1i2kcTp2nHoa9exMkpZrB1RgqmyjNTNiiUiHsepnARbMQaEA4AbbtFfdhC5a63J5uFpfRfM",
  "key34": "3XdKwUpSUq6S8AY6B4YncLhfEiXbybvQEGVE53jQbBXVr57MzmzrmydTwQd2SmQJJMoGu4cB5oDaExkEC5bhWm1m"
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
