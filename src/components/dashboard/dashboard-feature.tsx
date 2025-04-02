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
    "3aYNffmuRzJtjqkajkQU83JKnGjvbByX8TYkYMNQwfmwzfWuPAdw5DcUBxWS76UAySKZPrALeFqFJP49adapTv4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JNBVm5U69dfqzfNeDgi3nZjKdNyyXt22gR8E7p4QnX91LgvrETyk39QkSvLWtiB9ySJBvWC3A8GNNJHyRR3EgM",
  "key1": "4QYqMuN2ydaZouH1ZrAUY8DeuGEfsLkMr9RXko8BFA3bEuaBJg5BNwfY9RK8muvF5eMpzd3KRDgnXuiKDRGyWyp9",
  "key2": "wayFuBX2XrhDP8PkrECj41yJzzXcrwkYMM8ZJPb3MtnPRbYCaMNkU4i2XzTviV8bgmaTkTbL9Aj3VjfUsxDm8u2",
  "key3": "4n1TkscYsHQugRs33sdnQshyFtbgaHye8qaBgTE8JrLgNbKZiXQjndFe2HvjK2Uuq87LyVMApJLdmafqqSPvNP9Z",
  "key4": "38WDskWStzpVikKiz98xA6YmttbziwH3eYUxfSY6Bd3PbtKiMMgUYVFDyHXtnShPT3VNSjU8yrpcenQh9ik6FG3T",
  "key5": "48zEa7AQJvMpxtHJ9QzzjqqJnhJZBSC89W4CRMTBYsU3Cf4Mpqqv5ZBpcdhKrjvfTuyzmzXY1VALqexHeiAeD5PJ",
  "key6": "5TtA9BkSqQyXfy8eDUekqvb4DnP7qMVUsReRyBHaFniZATv5Z29aqYGf7t8bt7ormpX5hqVtRVYCNSwKoGQL3ZaP",
  "key7": "5Wz4XwdkZwnP47cpHhBg81oHoTd7KzuUBtgg8TTYhRuvYueymuFFxNcvhCo5n5nR8MnQ1LWMK6pxqSGgcZnrb4YQ",
  "key8": "3YVm5rMgBh7RzzwWJYXGfgLxgChHw7RWnZcwJP5X9xaj22RnVi8h6APASAbuYZxBDeJNuwMnZdMniGb5a6RQ5DY8",
  "key9": "5oC1nmBZDUfUHBgdv8GpgS7vBk9zyGx8J28Rv8KS8cDuJcu6edKrtjhZm5No4cvaJZcFcHxDLTTCFmwa2mzmWy4Y",
  "key10": "4xQ2wS3uRTLAaNqh48y5nP3LXYXtuCNT7Go7hsJdi2xqpXtnwWQ4BhM4AtP5voKHxU5HcuS1hKJVbcmcxdcALBzw",
  "key11": "4YGr85CYiQGEjwi4Kjv5XkDzSGs37ZkbxEushYswWcic28Y3iBiuTeQ1Gf4rboV9A4kVa7QZX3cox9AcugN8hGKf",
  "key12": "dW8B9u8rdH4WY7Unctwahvwq2erACpB6JLZ9bXPZRfcW245WgCiMMGuGEd468NgwVvFqVuqMQ4bS33imQ1PjuCt",
  "key13": "56XiwSdXNUvrXEoZcGnzi3KVTDfLiDx7hKNYw9n9CibEtgXPpuBH1UPkJVAJy6XnZ9rwzmXN4vn9SvS65JNbGoQ9",
  "key14": "8bCqZhJxb5GYgZ4SA9baS8h7u7reKcGYvpPB4VKvkPXvvPkK7qt2ozisC2TuzQg1Wvped4dPGEXFxRHpfrAhtoh",
  "key15": "2W4jePpcZw5tUquj8nK5a22cNkZuLJfa1h734bx4zzPTPdqJ1EMz3D8H8512agKinc4an5QtdeRyfMi5x2zCWqs6",
  "key16": "5gtmvd3VPt3S6Ms4ZVuoHh1MSnzmq7eUML4NpXdWSyJXVZMXNn4TYbpBLYFrPSy9GJRya2XjXPqYZyuiewR1sNZc",
  "key17": "28JNRUsX5gxJecKRxsHZFcnJ9ZD9YvKV7BorZF6GMBxrMecmkPq8rzJvmPoBddUaLMpDgojTKU7tt2GUzuXTyaVY",
  "key18": "4xUbLUde7m7F84FPcFVav3hKc65yk1RmXS2QGx9rAVA5Yt89msjAYT8VDyvs4fN2Wk1NCZCaUUJbEhGEh11cN5Xz",
  "key19": "58JH2J11eodf2SWF57eJ7EmQUA7sJDXCd6YSjTUwm2ZHVSGYTugPvJnY8XqXnivJRHakZFiAoPLgvvL8YNoQMYMF",
  "key20": "ywPb1usMfy4eG3RKoNmu8dp1oeAZgMuZQzvfqExagoN5k68SynSMao2yggfznzwjEACqHUXKmdwSJh2FnDkxG1b",
  "key21": "2ccvRufUvujuzpfA54WWUKoeW826pj8AN2pP93RiMnFK9A6WbQiS2zUFCBTGsQmHKu8KwEbTjNbRPPjaJXKYg7Uu",
  "key22": "31yB1Nb1wQZbxThZWi2KX8wS6nVVR9hurG4S7szfQQzsqSe4wTKGP69V8j8LH4ewYyb83gxHEp6QCEqDQtpjhuzy",
  "key23": "5FkNSS42FrsHeDtiDtGnfVcMU5mCUgetGaQJs4UrP58k5MrdGB4psfK1PXEwxeZSLZiMhv2kR7ndgu75qcT7n5zW",
  "key24": "5jhck5TBBGCR4mVongW4SAYf5jveGVXryiDFeaiL97tA7gjRGYwN2a3kLoDm8YseMC3aqunvc9aQVyK6PXmQa73x",
  "key25": "2BiW8EuKvhBt4uN6r6nJTztdxeskTMhFt18sJbYyHyAYVG1zi4627RNmSpYxRuWp1wN11FigYrpfezugWbAJmqY8",
  "key26": "XDAiinbrtdXmpAjB2KPmtToyKVaJS8y1WLrr1XN9KFovnnKuCbmAjtg1Va5muF9w2shyLAqaTzoe3Jh2hYv4oB2",
  "key27": "24pcmKnr2xMDZaatjDSJpUKqStaQnYJGp38FfYW5MwSMZEP6jdPotuL5tRTHfKpCxyV16LGPRnqBiSfcBQUvp7jn"
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
