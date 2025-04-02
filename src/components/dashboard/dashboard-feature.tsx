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
    "4n6xLXSrWxKEctuq9Cdcap9wkKnH51M8J3f97gG17tPRnCR44794LFBMnmML6Nu2srccx8aAmPnbRKTxaxYtdZwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMHdbXFtmGymJJGFuKR876sCm7DHUrviEz1vzKXGtt9XEWMbt2EoKqMSgrZXX68uaBYomyeiZbd6USytD8wuCXQ",
  "key1": "2MyPP9wba9h3ix8VwmdFu11Aijm82iFhQwJ66ZhpRRy45fSH28CC5RK88EEUuq32AHoxmpYBWh5WR4fK16sU8APV",
  "key2": "37vxwow8KFehrQ5nj6XasALXmJpvTg17Bu6q41J9AzNv9Dp7CTScJdCyaiEvnxkFNKh1erfSd9ewsPq2PzJPqab7",
  "key3": "44dqbjw7BfgXvcwv1MsfyHqnvrHpoaDjizK6hES1fhvkzLtqBhzc7fqahie6N3ozUReXsstYT7raerrEaZPTscRb",
  "key4": "4oykW66Xi6jDuVxYcez8qZXEYzQnVcD7udtjUEXsvyXwcoC4k5hyezQcKHPRvcY8Cx7spjjMaKYuyo1y5RH9DYZD",
  "key5": "7rTXLLW5jkWUXrjgK2iUH3pY8HiuSC75t5G1RJ5DGrqLQZ77DViMMnoGfvYmyxMAXc5TEuAt2t2wZMscVm64Fyt",
  "key6": "2pC367C6NzfirSMnbWuT6Zf9yq5RDMSkiAMvFDE7b2EBefB2kydXBEju2oBYxHCcchBfG6oB5u2UE1fA67PigCV",
  "key7": "iMo2LufZ65s5yegKPbC3CfgMX964hVaXNAjggkF1F6vJMYVAtCjU3mMxN2DqbC2wbx5rVKR5H4Fv5S1CJLyr9yX",
  "key8": "59miwjECTkUK6trtQQYVNXECGzeS1hRJSZSfhm86xiAs1mjc1ewS9UxKV9oPYPzYhbG7Q7Nibw7YWrAoKePCLzFL",
  "key9": "5KAPQ1f1ZR9uaZ3YqRprqqDbxDWnGVcvMrFaw1xf7L5GhSrrmGGjAhfKJHHfXP7pW7BuhsbjSjpj4QgbcfQdrZWV",
  "key10": "4g17WsQ1NsAkoQnwZsMKjoaZKoywXjFkm72CJhrxQQN3sdYaGmFgVfrwJLzePeN9g8tY1DA6HwaFWt4QQyaqH1q2",
  "key11": "3G1t33Jys9icRV3WdLRsNPhWUDBnqyvXYZ9MeXFSaaYjdbYBkZW1xd77HAaX4pcwiJwgEe1jt38npkNQvEeYXjBD",
  "key12": "466NCr4ZLjhkULPyhFxpmLofEEj76m6fEiSZNTorwp25qupuwZ8Myd2mGzdT4R5LahHG9iEj1WdmDeyBaHr2Kpo8",
  "key13": "5TcJvr59jSJcimkBTzVfdifmtb56koc9HmQYKea9XsbPwM2HGtVRPfc3WiWsWkNzfQRW5e6dp7budirWSnaaVRun",
  "key14": "5vvXR9r9vVSqFhSspTgc8AySpgRe8HFzK6ubDQmKjdricG5HiktK9J9tSzsbXEAAMbnE9eyEYWf3p9PKTdS9RAxe",
  "key15": "4Zr8DtLhFDBSUJ21Kdju2dt3dDnttQZqMhJbzfS5dJVUGYrAX2gn2WmGZJ1SEHvUbwm7f9Cjw2frEX7vAsfw5Ddw",
  "key16": "4vj48H8JZSfwz3fiHHwFRGkbvKzpTPwTznjE35oj9fYbn2Hiujy5EP9nUUU7pDimr7EvdyWzCydoYjJ2WL7Egrrg",
  "key17": "3xSwBNqMsH3jGmhe3cAkVcf3iieeYFsYJ8drSRGFyzcNxvFb4BVBThNX4ozWzZDqJp5kc64V5q2bQZ7uwPacbEuc",
  "key18": "irWeufUtWPRKkGgbXwVK7aJSkVsgkBMgqBKBCRq779KGA7hVnsttP25WF72rMEx43JNiBK1gqhCbbq9ina43oRa",
  "key19": "4ZsSU9iSLWaUMVMXQwD7mJANsf59ucijxZSoaAVkV9nvtX3XDXnmoqSgV7oCP6P5bzRJLn9YmZ35FZNoqs9LZEEL",
  "key20": "5DXw3C3ZKnisNb5q7m9VeSqbeA1pg28kzkmDGdMBHrUn6ZwjMCSKusNGjHX2Pa9FGmqoKdwnFavfLo8J2SGwEjw5",
  "key21": "5Ei3Kf6zWezrYTFABxjQcEm3qNm7FooyBDywzb1argreJ9MZvSagXWWdJBVqqBKrYFWMD1rQDobCTrDECKRqEi8u",
  "key22": "ddqkcpJ85iageKR3SVviN9SmRexbVpUbXBdf9Sb6CPdRopjLfLvMZ1bztCwXNSiX88tQXcaZpLBz2XTKGMRz81w",
  "key23": "268pgys2pjGsVDR2kC7PGXcNG8FCaqzW4QZpHo1tn3nUCjQtX1rvT9JXniioLUBUh1ZpKHZyohRANCJek5qckaw7",
  "key24": "25pX6oXH5CgNx1VtKXEcteVFELhugNd33j9FDnaVd5uj8dZjMbaShVzqpR1RUq1ubpqZnAiRSuVpN4cutCcsSM3H",
  "key25": "2E28KRE3FAmQAq7HQtGPezCCuVhooFeEsQrjAFeiaNrf9DroX5bFMCGap6B6eaTtKbLcJoCSsixzvhpBC4iFApAS",
  "key26": "27HFqNb5EAyWmkQwB457RYtMb9jjr9JeVCpJGpPgzF2RtFM4qzpaz6htQ36q9ewkm1xdy8ps68ADi6A3RyqApV3N",
  "key27": "5iNLFWvt7kPN2RHWVb8AEvNYGefeV3gDE8gDGKsi5hr2nMb3EBUL4ysoRUNoJnp7Qcb4CQuqzN6sYiYqRUZE1bQD",
  "key28": "5JFM9AbaGDWKbVXqRXE7hyzCZLMpN4Rm2JeceGhWkAQYYmvxVpN2ozFdze1hsFr9WTihTo3rELta1c6ugHa9tvwS",
  "key29": "3ZNYEBq3eXa36uU8qXxNkB7XMYp18LHzhJf4PeedBhowmqYoKRYY5jW6Km67r7X4Au5XiN3a9BKzH1zCxobaVcf1",
  "key30": "3XNvEZyCDskBSpjLHmiKP3ZUTt77ZNTgyjVumNFdVCubSMV3AZMXBKep6G2WeD3k6Bhv4yPxD2KsaWueAjgbLyRv",
  "key31": "egv2RY2VYWuYGZWMp3HqDswSXSRT3JdbxQZBuLT9gXiSxs8y5xfUy2ySRcmiA4YHiE6ECnHGrisUQTrWeFyVSYR"
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
