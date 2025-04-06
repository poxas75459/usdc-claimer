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
    "4S2tsqMYkGTZkMZvtaofqh2FywWLMmmE5xfoJ5kqRA5fQz5XJvUDgvZM3TWkVq829Bi7a8f4WgC5F7Fuz3TUt9hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQ4FAafwUt7NNTxHj8He6g5eCcusHAAdB2KBMDwn7gQHDQrg6kadnYKZnRaab3SXr1ibYuF3dpNT82xpaNZCvDf",
  "key1": "U9pgGrbPR6QmYGKQ4AffHobvyhXJT67sXQLaTm4j3i1ZfuybeyXvRw2WfcfMp4jJDJdnVkv9VJJz1kuek9qvpU4",
  "key2": "2y3nhCTaQLtZPQcuaoVLs9YQwWRjNxmajefx5E6iehp8aB6pvmYBnzM3Q16P8jeUE1eb5PMgEHXkNJSvNg1AKqZF",
  "key3": "4CNgisqzh9TL3fCaW2uQXnTpdnbnqnEPzGAQihR9J9U7MWS2jtrdW25EXyd8jHF5WotwQSJVaerQ9S7BgEVCsLWv",
  "key4": "41rFT94vHXmdiDCjLYmJrnntWNu7FybsCJqFCsc5xDSToMXmgSVvCk7nfAUpdebX4GN5xLiTDgCzsBhrSd2aY4Wz",
  "key5": "59cyG8SyCnLyx8ZyQv5kWqheUdYstj9uceydN5ydx1GsugeLQUE8q6gnaT7hLdktH1AVJLmFsqgTRbZbTcB6EHkG",
  "key6": "4qckHCXhBL6jTfut3LZoBFWZtGm3aE3WQr5U7v4WJHf56yuofrR5wJT9jTZhKMyUqDFMtAt96z447RxsFyamryr7",
  "key7": "2HeoC3usNf8iLjDjN3iPiNY7jgW8MpTKx2xTqe5X3CUC6vXpGyLuzumfFW3wrZvuR9nNpz2eogKBLMpYhLdJqMtv",
  "key8": "3LA5w5kdPNAW1Pzc7x5WAewcZyiBtQrKZQaCBug1f9tAuJTqtrWyhkwPD13uZaZWKnRw3JuSKYx7c4SJwKpEFcMo",
  "key9": "3FhD8M4wQZkR1BMVpZ8hxuG7vHoGZAePAFgMsAHnViqXwgjYqo7RxAVNsXqpnuj8NAt8RFWedXDfU8evX5mLxETk",
  "key10": "2fTD97R7G5E1Ud8t6gi1KdRYg3ojodAQV5RtQfxMprZMwoY84TKeZz79TowywcHQ4byS1LimAmvo287NkZccikyk",
  "key11": "cZms1kK1oj6ZdLXGuhiPurECuqYMaYWTHQuNCVixT2AVytDvwGZ6S1ZZ6RPn4XYpW2hkDhWrvBXtApdAeNAk1pe",
  "key12": "aBXbmGEKJDcGmRASMjMRaoK4n7HcQZqF4enYQSm2SUDmG1TZj7ABgSv7EXQ4p4PQWE7zEgso4ye2vH1785a91F3",
  "key13": "3YPUp5SYagyBAnYjG2erwoRnDugmqmwfc3FaRWzwpfJCuzY9Ff6aLSwvJbnY339jCTqaSeciDKBjdreqrQ9DMX7z",
  "key14": "3jEnLsDATkwXHH6BPCCDkVhc4x5qZckSsFB98Lg1ByoUTchrSUD4Ch121yLfo4QScwKj49KVDjV7nDSQP5n367ty",
  "key15": "2LLMAtWgSEX4ouNWCULmWTh6GZz7Bt12KZVnBZERTMnwwV1YndkYq2tfRX5DWkqUXtx9AwQdbP3ZL4qt9Eeztjfx",
  "key16": "5mccztE6V6UxuRojRhedmsMZEeorBNpMfJFjJWPsWLWsh7AZ92dVMvPnw427BiBBPVxc2yF77Z5nTPXdtpyKb8Fm",
  "key17": "5Jza8YSaJfkvstFwNciWADBExP38fKVeMYMEhNyfCjTJefzaL6Sr6ykKdED8gHea6dCdVNE4pYnhcZRDaBg3n8LC",
  "key18": "3tGLvBrnXk8RvLVPiqp1bAVt7AyiULnzcnxtjXT8zoiLJfvrkJyS69y4iPHSMTU3jrMcnRj65RHpkC9wVkw4ssg6",
  "key19": "4uNH429MSuQJnE6xKe1keFqypfNvKByNFYrwfYrFL8sEgPkJ95fseZn6pKvUDG3GVJKhExmm9rVQVaAqhTACDGVg",
  "key20": "2ZdwtUUEbHUQsncHMy23iV5MWHxKF3wZQy4DCqEbWeaXeQ9dscjrYUQTkPNyUJ1U1Qu3Q2Emy9rNqueVtZUrmBum",
  "key21": "36v9V1aYv2HAGPJFoKb1xXEhdq3QVmkFUoXUv1ao9yXipadUdgqvh9FaYxvCghxVVCNFkTWrTMFyPRX27G8JVsTA",
  "key22": "5yfHsksoZ46F64zLqp9m5PwWvQgDPSbxSjxyteHZX2NkDqzv3BxXC7Q96uwmyFX5WdAPsBoiU1tvJHUGWV7p9HQh",
  "key23": "5q2cmXyjBtA4sczXuf7jfXgye2WhzJcSrDJRsGWZk6QGUXpixfZRtmGm7iAj923ZEFSaBTSA8kqTKQccFTURNeJZ",
  "key24": "5os7WAajnhuTNBPwmaYaj5pxMzghMT82rUeUeTEAKYFNACMooKd7K2zS7MMezKMxkF3mq8Wm6z3LLrTNebHNLPvq",
  "key25": "4C9wWUap4kpzKsznrZXAi21w7XxHfBqpzRSAMFXiVxTVRERLxh2pv5K28F3fnb9RkrkpkTkHhohNmXHumWssc44W",
  "key26": "2uCf4nw2hLTaJyk8p4C8KfELPboH3YisUx42BUtei9EtTnCovernxeDDPSjvBjaaXbff935R6UfABv5Rt2kHmRnj",
  "key27": "2hEPMggvmef6AR7qWmzm9Yz5M5bDrEBG7AvNAjDGign8x3ynEA5DpbD7YBtGXc2dGBwTNQ41gqJsjspTQadp4ptu",
  "key28": "3ynLpLqdyyEs4batKfyExcstASWzuxtqqdiqZoK2vEZ2N6WA9Jo7Qhw68xXjG5LrZRftjqgRdXTrdiT7ETZRUip",
  "key29": "28ha5P6qGmXnWAE3PqEUzUBJHq5hUoi5raGrjRP1Az48wLbaUvJBP1s7Qv3CrAGEYkE9zV9MpKwWjhimFwDy26Vm",
  "key30": "Wb8ifCTQXYq5xfPTpHHxw7ZpKr4W6xQJLzxCYibUVM3NyBqWubCfKi2RtuccGMy38Rnys1xLHBpaEP1AZZtUN27",
  "key31": "37PU6An6bniptqpyRdydCXxuoZQzgGDcsWz6FDqsr612N1qoToTovSzAFAeCKc8ykXE21ie6scTewd61PKPRRyeY",
  "key32": "3cuXfunVa6z7iqjbnCX1HGF5gDWcoiCGb1e7htwUKHmMMwARXf6gDLswCYZACgTgmtjBmngThsDasHMg4gXiAzq",
  "key33": "2yUeK5MaMkdkZWoeFC2TmN1PXHKGFeDh79ad3NMLtBumw2eB56aZVivmyewc2HSNt8XpC5QjZM8EfoT3BXtgpqjd",
  "key34": "2q8DoDTAHbvoNk7JzCM54xvohfAjTJ8XfGrPTyN5JrzyfYFP2NyRAruhKhRCf5TQVXJCFna3hxsqhjaetP6YT41Q",
  "key35": "ZqE1fPRPAfq2P7DWjwTMThya7Ca1y5q8eaVJnmLTuBCTM7Z8ndQujsDtwtPE1Hf5R6KxcffHV6ptgCtD37ZFkcx"
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
