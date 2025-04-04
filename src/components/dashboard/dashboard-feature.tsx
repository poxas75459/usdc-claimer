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
    "vPrAi1qKxVpQFWXndVo4kLDH8XFtXjtVXB6bZU2FuQrJ9rs2XyyFgWwbH5fDowUPf3zBcBjGpZddUB7rbX9rYva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGCZdgu5adRJHfMbr1HTKvP6fxy4kpQFmS4kkBiEt2ySww8dFuEcTqwxxB1gf5eSfjVQ1vbqAh7Mo6zro5Ex8La",
  "key1": "ECk7X5Cie5nqy7C9UNDNkCGeWecDwPbbEY4guMqqX8KY4wvY2qXoMKYbdtMUNXBxBJiP4zgAxPhJY1SV58W5sR7",
  "key2": "8QbtvDNau5QUG1uMMKkqGPb6nc5r4oicpoFgFk2ddbdGqXRyNfuX5BwKDMoYPVnsFBBAujzCQiNXbrwmsozsELf",
  "key3": "3qbft86zpJ8Syf4D3N2GPkBhzRNkQHCjA983AWustKQ5yRgf9yJxMia8yXCn8bmr426KQVz7xDCGBpTzqsUhEk8v",
  "key4": "5SQbMbmZEGxWietCi5jgihnXvPt3rgggzULKCGurYvksTRACYJ7WZ5epfRbusEYfr1ops5nNY5bR33mFAwz8rPw1",
  "key5": "LK4YSPeRBhXWAi8kq6qxvSXZagHAcZR6tt3dLwudV5wSqY6184FecwGddbd7UcmJe2c98PTaRp3MjmbEag5n7BJ",
  "key6": "3xTyuqTcSsT1gMo6eZvHMS5wU4WcWUtHzCbJXj45isSrKHqCM8LCX3FtY1ncScJYVkaYXE3iWch7gMfGSpBGMkDr",
  "key7": "5syZCtwKqZS1U4ZB7HRdRiVWWWYE1PoRKqYsBL63cDbwH457AjTe1hG1wsRQP2XALXx6nVD5Y1tjG5RGrD8rLSGx",
  "key8": "222Wmsj1oL47177jG6ypY2HUJ1GGdxuwf2VPfLftEJKLKMUS2ksaYXe6LbRYTk6VukzeunjMVJM3sGkVBdv1RBtr",
  "key9": "3f87y6NEXQf1BQTq93rUUowoAydAmPyJjEBSXWsqdiQKwSRA3cbQVETn48CQU3KHCQqDS6ksaBzkjpUTR9W1JWoE",
  "key10": "5o7uCVsXYx51PyCSm179DRnfKZpV1tC1NexEQAmJW2iJfJpVKmPnpSnmvoQ4UvwtWsqEdicSeKkmmeJyFqx8NUqc",
  "key11": "VZ8ukEDWuvvck96qCqVS9UVfmvbp7FFUdUtHxivZDAgDj9kfSB3SdqNaZU6wqcxwf3wVgZFj5pyrK9VPqEchHjm",
  "key12": "38VTbzo2mbtWzvbARw2NLu1ekh5NYqnmJr2E2WGLzBshCxXRGc1VFLyypx6zTkftHHjUvEN1KaaKUHVRAm9aARw3",
  "key13": "nwkHKHTSNRj56hBgWiSftCUAu5eZnUzRqQx4h5BF1Y7cfVwfb3ba98syzDkaReUZ9c1zrtLftbYDZeZd6BKPNRA",
  "key14": "3v6BxDLHmnD8zbpGoGnJ47zXnV3horgbG8t1bACQxUzmVJhkwGgK2fWQivyeT24U4xgGmKmmNqNZ65zcEKcvpNqR",
  "key15": "31JzM1bj28AgoJnFrTxRg86MxyyvLiyPCa33jYgeK62NfCLH3TsrNaErv4h8inp3gozUecA4bjY91HjtqL5bQf2n",
  "key16": "22DAid6v8XTQ7y3Vs6gmuatAxi14T1bd7gfDgto3YuqxSh2dVnxsS9L8zKyPnfYdNdRedKs71Ydwvk8cWNCFGv31",
  "key17": "3JstxeBRLo2PpSU9Qohyp9NxFbtMcCDLhA26dngjW9qmMuMP9Xw4kkH1reo5AGxkx6h1Mn4X4bhumABWdK6vNhNJ",
  "key18": "3W6S8vurHGaWbN2Upqj14DXHpockurJyrs5V8QdYaZoDVrvQfHbvGeizewmxTq6w1jWmLQXCNYcEZ6SLe2dvyRwc",
  "key19": "5vxE1hbjT1Vo7t9gSqez7EQiJdsRvAKbtvC3FU2U5gaekKGY7jHRr4Jwu5FmjoJLu7Py1iSx5w2nNWyKTJCzGwh",
  "key20": "4PLYLD6S1YZEaRCVNmiUXqEdGHzL2Fpgc6f2ufGfhjT93HS1iPeAW8kkvktTvUpL2raBws4mhZke8PSBDu7ysU4r",
  "key21": "3wCWCk9cik3vytcPR9agHECCp3Q7wU7DDLujcTF92Ar3juvD6sw8eqy2oK2iPbeVBM6hqbQqHfHNetWPN9zm1zwN",
  "key22": "4mQUAWRiuKBQKchjQHekQRNHurp3FRgN9UBqvL38c7V5qp2H6AJ2ccwpkNHBcUkvPHUkTv1AK8RezPrz4pceRtyU",
  "key23": "5EBu5uXu1KdcaWkqEmPDs1MmiUi2a8CLLRZd3KLQDU2w4QizFxVSpi2kWfXF5huQVp81iE8ZpkWEPreJtsu3AwWW",
  "key24": "2b2Zhekths1kesJzeR16AnEZS5NJfWMJHwTRNBVtpZSvsEebaiKJQycvyswHCQz9Fc5bt2LNTxgyCAqbhTz3UA11",
  "key25": "3RDsBTKgZFCYWFfh494XffebKAiPZ9Z9tZ9fzPoKq8i8AVN5h7eZmAXLNxYuEY1sqH32g2sFhuwNwB2mACjtxAqa",
  "key26": "3cqwHMwfAMC6vt4qY4pxb96eq1qLYR9tp3o7JtXZtytNh8YeRwPaoujQcvHHUjfdUC8kGxcv3vuidPTnwdPrVfSz",
  "key27": "4VcibgrS2Hs7XZccvLgm7US8YAy74MkzdpvhnpVmoFSYtN18L7sE38MhjRHjKWRx3jWG3cduJ5v6iSUpFPJni5ye",
  "key28": "2zDjZwj1N8XpQcF5d95uCLUjLcPSLD8ZAJygf4nSWvEsvPr6WSMxK1jvfE2nMk7Z7NaXXSUXGjg9gYidCP8HastP",
  "key29": "3C2pEBM3ZVRFhVQtzJAhW86D6mHjarn3mYSedDq1J5BfkLK34sNc9iyHWiqAWpBjh1yQiM3vDAt1UszzfpMDSizp",
  "key30": "3Z8CzJNS2Et3HAzCeJ9J9rDRGhrFL8ZDdgxrqWzqB8m4KBbAR92YKvkC1AFMNnZJ8F5zVHYQsWbbzdyvd2H2YJDk",
  "key31": "2VY4TP4iUnJRQK3nm71BJQvi7DVbsBzj5qx6eJQx166XCDj1BftPir6qrZ9mF1fn3bg8S6RKwzGHTLQZNXJ2kUKH",
  "key32": "65KvQYoPuVGsHqUVEWJKV3uQxrWgGvvrEwru4xdsj94XaFz5V1pd2FbodTdJKeZjvB6FZdqpjWJFTpAK6dwREyZy",
  "key33": "gFqGqmJUEZgMC3wNTGfJAGtu5qjj6kaK9yx6GirPeqZzsH4iWc1aML1ir9Gc6XLc22gBYSdqkVekRX7VfujbhCg"
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
