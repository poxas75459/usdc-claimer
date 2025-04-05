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
    "2ncv6MAdM6mQ72FF1441o4aLorDZZRK4YhXjBKsUvL5S5pinDj2rJRBzoobjSp1dyWMcaHiqc7NNU4cgsj1rH8h8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaPMVhyu8N46KLXZcoqAAqGoQcEsSyYkkcEuuCcdeit5radXcznmMMsqDw4ptagCZL9QkYJXmVpmeT6uJf1KWCa",
  "key1": "4uAMCYuSydWMkrmDNujQQdcgDrfLB2m8MQvpPKx6NxyH9Vat3NHa3FPteKrr1voiKbr37fNn1FggS5FsGgpfkXyA",
  "key2": "454swJyAbUoB6hg5YeVWVut2TJXobjYifgyP8MZQib6RzoXXmpgHXTGpKzdyRQrRfviEYUSqwCVUa2b6h1pS84j4",
  "key3": "2UfPWNksYgW2KhBwLKGkUb3bq4WtirQ7VyM2xXp843TrzxnCDzwDJtcqTN4TsJmGJVyqy6rcNBiePexUv8D7nALq",
  "key4": "5SW4KxV1vzp6qjVovi2Z6NUPi8iLg1RbYLo4tcdsDWDUtirM54HQQHErN6EMQEzBRWmrRSixamstGnupKrYafrfB",
  "key5": "3kZiWz2743raPuEhdrbrSzc7hF5MGgZMzuj9UuUXvSs8qnBxNkEiF2TCvKzuoP5g6BcJmYovZKHN7xa7RErYLxej",
  "key6": "5gz4TVPn6Ly23JGHR1eDkHruaVe6rqdXvATg3AP9c9JwALXZ84xNPUfvRxzggFSY7dMy5Ba36KYLWHxF2sXSU6Cf",
  "key7": "5gkQfeSgY6hrusrDcHiHZYLfZkpk8CEisvvTjZcR93PMGTP4FuiHGd2LsyZCHmLZki4jsJnrkaENiXwzJrQhf4Ge",
  "key8": "gnUSV8mcBMytEFBSGcqeNBD1DrScPq9Xmn2b4KG6MMg6DFAc15ja5APa83KJa8j1vyZafCwPeKcx2MdHrPKAA4t",
  "key9": "4ihfAkwwfUpAHDqNdyQ1FJHPPcsBusJvtsBUNear1fUa3R2WU935Sy6tonB9e9NK4sVUhTZFyTuqkXN3aJAM6RXB",
  "key10": "3NKBupLSHoA8vndPxXiwvWHVKtv2HT63vsPfr7gHUYdKB1ts5FFQuAERtK3sruMJasqtJXTTwVx9BFddXm5ZLY63",
  "key11": "3bc3GNjNjsByemXRiUza33NUQXPUw3j8vi39rzyNdwR6H7YTj4pg2zkNwEWCZsqBPQf9r2v2vkykc7GBNTqDK6g3",
  "key12": "2yZ9S2Ns9VtNbStufmwvhpnitPqfH746aMCYyTn4hzCR6HNu1QHPNx7Q8iahCGjwgDVdg8A5Av6mbi7V92KRtSJD",
  "key13": "2FZMC7XdADtHRzFQLGHLuXXnjTKgwxwaLP5Zpwj76pVAQqz77kk513drgKCFgSD9ZdCyFs1mbgHW6E8kifGTjiSf",
  "key14": "fEd5QFFyLRdXDf6YYb5GiiSvTG1yVeWQGh2LGykT5CvdcxkNXLen1rXZaSjZXcApdHkswbpMUAhWjoLMtoCzTiP",
  "key15": "67aeUTJY63xf8hroH7KeabG265CpDZNRz9wArtf6APvo3RLWavt1AUyiHaKtb7brFbsEuTZ3im3DBxezGXdebYpz",
  "key16": "4eRQ1EGkNAnZnoDXnvRUrXSUq5aFEcBGZcCeERFF8xeTYsF5kpf8owdyeJtCZWwr2WPwt9vvoAyxyyR9QZ2nvDSd",
  "key17": "24AfmWQPRMrU7ktor1xtNCZvyaZdNXPmV32h9jASurCxzVrGdF9tKGthCu8WZocLuCK5mBpe5UxUF24SwhgiTnuj",
  "key18": "52T7ryB5wDhd831Ba9RL5PYzyPJHemYpGrceMqvtbe326FYfeoDAtgeZkb4KzQbyHKS75HHBMGr3AE7tgVv5tazQ",
  "key19": "1Z69ZTuDHnU38wM9JUqTPZ9azYMX2wFQXYTjij2HMgpYFiNQfKaUTMz7vtb8P2qYHzKi3TtHDSuTyeKTeQgVk8w",
  "key20": "4bsdXuuHohmj2jcCa5PBxvNNABHTgH79RRCEmHbJdJz3R24ukmgRRgtrNsMz13bneGfjRm5L2zys1wPefddBULt6",
  "key21": "SiSC7bAXHYavwDMEHRPjRpbL1exRekJuG3uucvxxsbw3mJnvdW3tRmMWxWpZJ8vDRwN8pmxrsWmKLbtw7WAD7Kc",
  "key22": "2NPLBaJi85GJuuyPfJjVCQJg43uA2nopv4h7JtXaPHMAkbiuREmL5yuq6XJQqNKUz6NJJrWd3gZwXbCnhd3rjLMz",
  "key23": "2UiCPHoCUcZMmbeBr5WNDLnRB8fSd52FKSMqNGpgeF7LUuCjyEhm41iTLjc6AHzFPnkQAYyPraiyBWoV2RxCZW4t",
  "key24": "441taBV1oUYTwn7v2UKJ5GntLXsgyACbUJhaywLvVkFXanzLuopKDA9bgvEGP9ivgbD2Dt5Ve7WYGXdBCGuyDZhx",
  "key25": "2cSpKX1AMPbNBG7HsxsXPE7TTDBqj5mUUw88LqyQSAqYVSq6zXP6x6rqMPG8bue9ceSJF4Q1RPnrnx4RaDWgzbAW",
  "key26": "2dchgVyTBGJLsonCVYmW7KS4u6fADsUigbbyXdHR9gu3am1jwAsgBz7rmtxuuSVKii69d7baMHwe1dQwjuaQ3c3B",
  "key27": "2CbuLukbpdEDEdE1Gu1a4i5erehgYZDs2hztSwqzwa4TWc7X8xnXW8QrpAGzTSGgcVNHv4HzutmR5xAbraMovvSB",
  "key28": "5dUdQJ3PgB1b9riVto7a9ewUYgn4RnQH1EmeGW1dQPGVTMrMFpB2in72hTNsfYAsuY4YqrYvZka3715o1ooYUmDq",
  "key29": "353Cnwvt3cdmEmgGsigGzYCiX6S7XkekYNLvg1uig2SvYT2fC2WKbdT9FFqvnBYM38mVcjAW5eDpX8RLXqks2HbZ",
  "key30": "2EPcrQmNpyNeg6bzh33ZW1NbNZbSwEZ3f2cNLo5QNVbUAxhwZaS2J9TYeESpMADqAXpxkB58vT5TbSg3ZF9UXfCB",
  "key31": "4h1ACA1fSGsgMoUaDNSHbA9Gmtc85x8m6pMDhBvzyN85RUZFSMKHeKGC6qfwW4NSfm3k9Fqc4CerFiyKTS6r4xPE",
  "key32": "3Bzs4LF2FNVMEBvGu9N5eLhQ7jL5Rp5wF43Kv9nKBxStdJ7RJ6K6NSXkfVUfL4n8eyMobvcvi4BfexwV8upN7WeL",
  "key33": "2afnGhcFb3HBYhXUn8HyorfKZRzmkF8Qd3BDAsSXPr91jpCBnuKXnLDkQhU4RjC7cw1tFSLxWpTCArJ57MpyGaHM",
  "key34": "t6TJSKm6FAGqnrdn9LLZWGZZtFpGEhWQZHhgBhCZSkHZxUqSA4mTM4pPXgTqaasHiHfa6THwBtteCaxiW2LoUSj",
  "key35": "57b48d9NdSZQqmNw4eU93oRccjFTcfCqJjK1qqYNeNRsZaNfBQc3NZt9navFGhQGSENDSkrTf7eBZd262afsGLQb",
  "key36": "2yVac6hunYrn88WfoQHnjAyz4KoxhJ1C9YVuTwFQRYY7kqCbyFbPbSHzwCBH364nFu2nzb6byVQTDeyb29oRmjsQ",
  "key37": "2iA5z2tgq5DFyxNvehh9pP2232CFdexDpTc6dmgdDRxGs6USipVqNsEgkVTDFVCCutFXRxLR3dNRvwRtrmocpQQf"
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
