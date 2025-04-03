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
    "5URddKtSZVFNQbt13g8mi8WoWqn6iuNr5t7P5RzqKAGAEXbGVJdkjokUfUAKNdBRxcLUbLPNRYYW5RPuQGJVBbtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCtowVxYGv1PTsmzSN2TWAnZS198GaVMof1FdV94m48S7RQT1vznHNssUt4PHLD6HL1jqE7XnCAHAFeyEv33Mva",
  "key1": "5Yhze1k7uENrm5s44hon4ZfufoxLoHiWVpuW5wAfBnJQBwsZLostbPX1mSifPL2Y3LYxXGsPosYNQYekkizxmeEy",
  "key2": "3PofMtWqeUsyMr6t1AmoMaMwiBMXsJV6r7qmwDHrgf77Rs61M36cSQDMotbGdQgAhFYAsxbvgswn8mpLSDgNYFuB",
  "key3": "51v8aWosXU8ippRiK19X1b6G6NYmxqz8S88r8FaZj8NHijAykGVNpuwhqZVsnzAgJF2isQTZJeAX36vcgtJs7yXt",
  "key4": "5sw1uXtvzLbKpSL9FYrD7MArwufv5MaDxdB5JPFw1YU1k6F6XF3tYoQLyrS9PYRw8DYr2uDdSDreGD4zqvUXk1Wy",
  "key5": "4rHAqWaZJHWw6uSDmvxXx8yaDE9dLeeDFZ5yYRS6E7UZ2wcMzDuKjEDmTGPTJzSYckw6E2G8Q7kucY8cWcs7AQ2A",
  "key6": "3uvXfizk6szYFbADpsd7v97KMLKvH7mTrjuCvJwvAj3SmNQCVjp77GLednndxrCTWXBQNN8pPqXfHKZa4CwaC3Wj",
  "key7": "35uWheMqbCbFr4FQUoLXaoTDC5VQV2HuHNRP2BUhnzE9yQEjcAzGqrYnsvKGBKGGbgcsY7pFqBohABCoauipYLmX",
  "key8": "2upv3qtXyHSjGSLRBwnJhj7vnPWYH8aAsMHE4KkBJEXLts4BYwWPwq1sdrSYNiNh7HHgCn79gsN8Tgur7vUsBCzV",
  "key9": "43d3xNWtLaomVyS3n3sbc8usrkmjtz3Y8Q789BZw243kGJ7HA9na3ECXMuoTCsTqy62X6pUdmPJHJEVFjEbVwpSf",
  "key10": "2svR2fUoLNThjsBVCSV2ksRAkaQngrKRqvDnYF7nN54hPS2tNSPV9mR8CvWydRyGHvHXkr6CwJ9ybDJK1Zy3Gqpb",
  "key11": "5gzAHSb34uKRrKB7mRsdU2jFQiNCdSwT4Sro9MbH2Z8FzEdvjcS5eDqvCsn33d6vwRKC8sCFaddEk8NqPLt9mmAC",
  "key12": "3xABc3JSounExhBKFCDm46W2JQBsF2EvW6QWRwyB1NwfzokAAAdGWjVErWjVjAXd2FXVhWXZbMcqUx3m6K7HCahY",
  "key13": "sRDNtHVVrVwFKcBAaLqDbZMvZpkHSDd74bu1ugPqCjwDKLuMLyZ9AEeKC55fJjuuHH3Xrt6YXF92Hwm2D7fE1he",
  "key14": "28XQAafQdELBTFuJzyLwWBvHm7yg559WHaxGHoxtrVXENPsaoUa23u2Jwkp1zwV7wqzvpDJzphNqMPx6j8fqauYy",
  "key15": "2xU1HiJuubzqHFU9iEwnAC4eksWQraFtQMR9AGx3KPNeLc8BLkU8YWLhLpgPPTahwA3gKF75bbdcZnSJYKZaKXrr",
  "key16": "5ATdbWQVG1JcWngEJLe5qgSMpN8enNfmaHBHejN5Cr3d3jjxNNfyNDAEkaX8Tm4Uv2xK8RxXfJHyFLxTJBbVuBfJ",
  "key17": "yqdVPTgWk6fbAgYxLAoawYDopn3M1VVBaySzAJqQaJq8JojucVP5GaQTtSkHt8G2F9Cg9Hsu5tdxZM1D6HasbQF",
  "key18": "m8MgfywVk5mZJH49MFvCNzVLto4stKhTicafkxHqeiguo9qo2XKbCig3JThThWoKanNiHPaCqn9ejJwWaX726U3",
  "key19": "4TEAmwvYwV2HowhqZec4nkWE9XiMMsu81MdyaKpt7qZPuRAKtenkGPfv9MPcTo73Q1LGDnimmYQfxnx2US4ZWimQ",
  "key20": "4f4tdsemKEqrUi3h84Rc2v8ZZReiBQ9YDRZ8pzRXgdHfpJS3QAydh9jv3kHoKWTEJENebpdpqFFWtY65MjRYqBye",
  "key21": "5ixCryEu3TwqP9s1dt9kGTJZikouVUarESebpULkxE7xZb7JVSgi2MibzNkhgkrHng6gcN9mw9jtpyRMmJYLVCsK",
  "key22": "41YnwDZCAR24hxkCCLW43UycaMPZMkhiX7tZPriUeP9cMBrLnu2UJJGY9hWhxuFSRScvocLEx6L31WvmiHDpHoi4",
  "key23": "4qFqdiJwZHwkWKcdoZSWAqpoFqcFFecHv9xE7iBGejVvLrxMuYXnsdXUkbRphF1i3MyTraTAKhqnuEckGRTe9K1a",
  "key24": "52K1rbHqoReYzjMtU8nUAzbyY2YRyAgpZuaWHtu4Xms12Ke3k7jGZFsPLky6ch86ZFLwcP5MMkJCNtkmTdj5ZysJ",
  "key25": "2beWmGVr3VcqdFL8zMksn4YZ9Ebo2xvcKDgJaghyCRZmRG9HPHU1t8KHxurY9QzRG7NqMKEjxZJJh2Ug43YWMUBg",
  "key26": "678vEhrEyQmhoDi2c3HYb93sJLuEK4UQJRANedRC8L8kL6ieAaUHJf2YRCkpscr1GcKUw3JiFDf2mkmintTDdhXX",
  "key27": "2a7Kp3darWhcRRkqdwTJhqvMA7yGx6bvsDxCMmST1Dy3QnVXq5dWxbsTsmNJerLduJgc52rUnx6xDs1ktHizJjUj",
  "key28": "23oLbqga6CZyL2mFhE4Dq2J9uXxaddHXm1ACHauCD6hq3V4ywNjXTyzynGEKC6tw6m6suJkZ8sSC3zVgcxKmXWYY",
  "key29": "2wkUA8HCxZtMuqTmhb1HR5HeoZK5ZuwS8CUt8iS46nb4MDd2QMyx3L8aFBn2HmUK9ZakozvXEVJFh8AW4rSvRRbG",
  "key30": "4oi7oSWMoBSHZBsSjVmB3KGnBhEQg5BhJeNVC6FLYipMcj6kEMQeua6MS5XLNcJ6kkq27UApNxbcc8TD2tnMDKz",
  "key31": "48n1J7jiMFwHDcebUAffPusnGhWQMJik6BsTMMsUr4dtnbsbXhXvFwozX7xzx234grPWDc36Ns7jvfa7WaRcALrk",
  "key32": "4kYNafrCM2NicemsscHmQJ6p4AoJ9gGMrmV7YKBBeeCYuWUdaJe8HbwsWzL86p4myZDthhSLQDymTK4nAzDsShCG",
  "key33": "3i36zeHD65Zx9GQLn9f6u1NT3F9Tm5fCUjU7kaLdoLU8TwnCh1btmHJcpXfK9Vkh7p6HbrbQHUTtEuw75KxGjVHH",
  "key34": "2xroELdWrsdz3rTU2cX4BVmpBLjHuvoBg7fkx8JiYQoyABPtRwEyYQkGdKqDDBEYkHuWmjduGuwpqMX654yToxKS"
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
