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
    "XPy3GmgU74Cxwts1Dw6tcXhF5gSHKQF5fwh4MAkvPf7tPd7xHQFZHfK7pEp1hLVsMLcaBngZdQX2K5PfVD9C1Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAHPv7Lk5Li9bHrcQ5pn9MDf4kTpcJPBmbJiAujcb3ELakxfUutWQSBgSan9sVShPRyU1XKdq9ypiWhrCAGQhhj",
  "key1": "2trjrmAovyn93sUd5ydyF5ZsHFiYeqcvUroPYgCMg2j3PULe6cTvNWE67X1irtNNAdXDSfzhYqXWemhJwztjDKV6",
  "key2": "2jX9ekxdiopXdzY8ncxrRw7MxhCtBScqn4z45P6hgdpR6EGzx8PngDZDdv4pXQWteXVgYXR9bfkdvsaHe4xNaUGS",
  "key3": "59UEjTTch8FbKMXX2SPJAhADdsAHpKDkRvLPihxAiDedZtSMqUN5PxtJ1awrei7o19k6ScoS4PzdgJuxj2MVUE74",
  "key4": "Qga2APTFtos6qnYsauxt7pLPKDr8zUQV8xrBhwBGbo3Le5ysbK3oV8uBEjZuxp3MbUcUy7E29FbrU5NdaAbuThy",
  "key5": "wY873nm4XjT8huaGUhawevw54iH6KySFtTYaTP98MbNCCMGc6v3SSiVAWKA68TcPatPtxUfPaLuSAHYrqxqC6od",
  "key6": "253pyrNj8ffNVkaLuQ1vEfLGMKuCQYHdBxS5EHhZ4MA5NZJj9EJ973QaY2j3GnLzuPCrFaMERUdHK8ntUJSvy4ef",
  "key7": "5wHjW9KKTnWyqLDC6ne3NswKEB1nm3TQdbM6fkMPoeZe31eTDBvDt9HbvpccxRdzc1DwkyGe9vWV4NRbeFmgCv9A",
  "key8": "4RqJ1E4HhJbwVL4RbrUctWjPQKi1BRpcKquYm6NDXqXXoMRJ4x9p7Ddf53EqWCm26t3nM5Czi6R5LqVVg4ZkfXs7",
  "key9": "3emRmn5REE8xSFacNhcU1d3vmxfwJiRwHmbsPty44SP77urR7UtSPceMhutMur3ro4WtYzqaZQprf2jSZUgFqqjd",
  "key10": "Sio5RiRtnj2CaJ7rRVFyHfRTo64BF5zrqoHTfoX4E4wSqR1s5y4MrDpyG7jr9JZ2mgxXQeniS8HV15xKPhkogWw",
  "key11": "2dfdRdjr8Sy7twzkEJEzw4PjscFP1GMj2CocD4ZGfR5W3JUxbu3KUnnuRNHwMqRXzHfh3gTy2zW7hDSsnbw1ioiu",
  "key12": "5tKEFJQqMU3zbrsUfyXEGbPeCMJZ6U6d6h73aG1fKvSCQzwURziNgfxbBYXTy1KsAtFzwZfHSwfnecqMpiLD1mpA",
  "key13": "5eh14WJtkAccamK8vgdkeg9BSS6aEQzqrE74oroQbJU5wi3x8DPyZQv9R4gjh8YRJYERn39oEj4NAhXMHXUxLjLM",
  "key14": "3H1Zy32Dy3cabEwzFzbx4J93Sbf71c2QcmSU7QaUHmD6qrNuCfsatLeaunnrkDpE8TsWtCM3wjHi8mMUHgiwjuxH",
  "key15": "2kRc4BveGRY5CGhRu7HRQS2Y24MHGU8tg56ch7DnikuMZKMEXDzvQv7U9gwZEicf8PFBiAWVnToHs7jwiv3zbYA",
  "key16": "5AiQS53Aiv8PAPE2v9xHLLmvjLm15ZuaKMhAR9aLKkbAvzcFZz2GeJUaGJsb12yRKLAv64kGymRzABmq8kgJgBSz",
  "key17": "5CAjrpTDDCmUzkmBLMg2mbfQNQxpyzPWFaJxQzgtHKQcFYPqfK6kCmN1riYvrRdu9MpkdJzYY9NpF8z5AXfpoh2R",
  "key18": "2nXm3eBtHj9PJUpHdRKqWBrEE4WKDB2ekCziPqgfH2NMzcA1A7a33mcCe9xDN36e1yYysFUSRBR5Xs7PFnYahK9H",
  "key19": "NMNLBSZVjk6YRuBYajiyzCNCkHwXh1L57BZgGN95JLvmiu7BjdhgFtCrLPVzFacFVT7EBtE8pNYVgAzHxnAYY6v",
  "key20": "3bMVVKVpmkvpf43C2xhPWfKnc2iGWGUB9Q3MjcoeNtdUQvY5y3KtpxG39K7dkUVHGxMpcEPLHrcp9uThJf6uQdUi",
  "key21": "2kSaAriAoc1exncJkjXfvQcqmDSLNnez7wJoyFz7UL4evTydctWB4oeHQb8nd1LWrw94zDsSMcsu7iRsSgCQAo76",
  "key22": "4fXMCKEy9zTW5dTb7yWpFU8iBHn8eguYqn7YD1mBX74YftgKUssR5RLvpYrajfg5hHk5VrB7X9sCv6xoCJDrPC46",
  "key23": "51fJNH9myQ12RrUHYYHvhBAD4ifRYrcbrfppUhHMZRiZHxogWgBRJsXB3BrAVSrEp5sp1mqCmKYoenQK2S4fexy9",
  "key24": "v6P5KgCXkF3tJvKymeR851HW6YeeWjenQkiLfhGicpND4HkzvqKto9s21c3HpwTvQnUMiuJkLjAjJSz6WvpDVCE",
  "key25": "3dGVwAknNeuvJe8vMSznUVAdGm1maNTjTsy8aZrgmH7HRiDiMFKPbWmczWJRQ1SrL3aKHV7NceGT42yxbDBR6JX1",
  "key26": "4VXfZQBrPJErTWzhw4ca2PdHma9HM5DdQ9CLargpyPoy556hcwhzGv8re5oUBowdUU9VRzFHFptYzxrDy2nmKTBz",
  "key27": "5n26DD7U1jR96Njr3msxqi24KtXk8S79YSfwyd1Kbi8FnoN7f2sMwqp5sYKD12VBwJgNJ8D1qrb5va9F3vizaHuW",
  "key28": "nqCkMG3Lb4mYFbSyhKgJbf69Vw4geiicSrVytSbYiCdhMKaAvHqjgibCukcZrRrwFCEoP9GnBHcP4wugRF2WaMt",
  "key29": "3NevQ9yF9tkdiFKpAF3N8daYpis918x12JfW18W7K3RqEtFDGuhXrNeossnNBTyPHicUxMqUhn4uKmdJLVuCBsFk",
  "key30": "2mcpsqHtyVz34vzL4ybZ3vXyrcG3tpRJvojh33fKuxvw1fFpRQPa9mAqnBDYkmJRrEGETkerjzVzpPcrbPP9V8Aj",
  "key31": "2zPfQNHiTv9kxnUEpBPTVsEpunFdDS8YswpekYHQyoM4gXWBSwBKFqQjo8DrbUCTGjQ573wDAam4MqLupMKukyhX"
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
