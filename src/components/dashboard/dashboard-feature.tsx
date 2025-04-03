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
    "5nvs8QBpzAVbBri4LhKY1A1jCYvpj9rL2pTdzLbcnE299s74NCoqt9doupMiAFWiBBPjEgyHKZmETX7JaUgVoyu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVvLvTcQvRTQE8UsckKnJQCg6GUopsXHU5vVa6vyVYDR9w73NrJqjWmoKhp6KKvmEgroHbdir8tXCFWMQ2u4qMP",
  "key1": "5gHdpAc5MtcPQ2arwQ8FiSwfAFhDLFECcPLB9c9TpETGFwPf61ZVuHdfAcy46WxJenwubLqR5k4FqAfRyCkevVvQ",
  "key2": "5M3Uo8cRFHXFR1hGgxqLnw1uHGzFLqsHSfZWiE6NXGS39FssWoHAGACbRgf48JSCyiKFh67Zhcw789bLoiG1x1FK",
  "key3": "3sjpAh4tooibTLBMXXtCVExCCGUquNXs2qZU4nyPs4ReezfuQyHUq8DyEFqT11RmyVs6Pw7YdwDiGr3hGHveSPXp",
  "key4": "3H2WYCzreaSJbEmmvkpbvm87K2SjA2FqeQ6YGCJ7akm5P1ncD4tX97mpR8ToF6BhBGS2nXFjkuDTWmHkvXrAT7gz",
  "key5": "5ErjszpkE7xuZKon1Wkh97y45aFg2tXXsA4ApyFvc7YDaGRvDhfPAuGBTEmtYXmG8FathwCzEnMfKFBHDkm7rX5P",
  "key6": "2RyHQDpNBoTp2LDp1hJJjLw2G2PgTVjsUjBJn6j5ZnCERRCE5aKvpcuq3dwohCWvK3Qeq3zHetdLfbqnoR5hLpRc",
  "key7": "fk6zhFWGNCMFJ9FhWt77EJdeWDaFdcnb2sHsh4VuboNCP9q3jYTRhExFNyZikhcQUkrKz6WNGbBaT7LNEyv35E7",
  "key8": "5gFvjP1yZhMgSK61iLXyEZoBmu85piv5yGz4piHgvUbkrHtHFZXK7owVR9bAt3RrE4PzyC1446E8DhUQBV1nBfCd",
  "key9": "22XckjeGZnjaQguKNQHBJ6UfbauMk8P66At2znskTofKNXSfsf4pMyYVxqzsYuPxSj9rbqikkxqa8tSKiu2Ep1xL",
  "key10": "5QiMftRrpEUidXfpHSVyBjSxvM775R8yX8XgVRYbz9kK2nXFa31GBQiM6LjrzzLS3Jhg6GiGFvq5UspJw1DM9zPi",
  "key11": "4uCBfGRJdZXA21hhPBoSjBMeYTW6A68dwaTvuy8TgBQ8FpiKSJr17vRbZXie2m8LQeRAmWeirrR3ozsT9adtQXC2",
  "key12": "4yrbGh1wFhiyRZ9ADz7ikzDG3wjs2WJDBmN35VPBbAmfGT3MBFGspJJ9mXp1zGAYP6phsd5XxeHAzzYSsxkUHy18",
  "key13": "3sZ9BYjizUaguiVXDfMfGAWRxXSyQwW88PYZhQhgU4ZhrpfzbNe2LDUPZKt1iDjExjZmci4NiM1xpCNCCUrNC6VF",
  "key14": "33g9NvxX7t2KopjBvMM6Be2rJZmDGsxc5g9g9foSsn5mBmuYp4Dzj86SpJB573wr85ezXMdcMbwP7Wq4rEEDjsUQ",
  "key15": "4PVsrQ61Hkq6hsFqavjqPP1hVvC24W8gPp9sD8i8Ft1VVwCoCFWL9XzbEgvS5DHaYETxtiHEqfFoPzk6621wNFuP",
  "key16": "5tKz1uFCjEuJU1AJFiWe3exEStRaUBV5eKCBySgiG4A8aEp39B9TKngK75iLSKmv82U3hZdfenE5DY332Lujwte",
  "key17": "D1Mj71EDQ1QVmgZACm1dAoCGnxWxFjPdG7G5G7eJLPb51MB6gqCVwCnNhYmgUp9bNtGmrA3tkmws7AcJdmxKPmv",
  "key18": "NSB8xMhvvopBiZAYFUHmrrGp1U2qw1D8a6ZchXMos9DUBD2ZYqMYNUrWvwFRnHzZkK1CnrDRUFdefD11z9CRxoN",
  "key19": "4aM2p98VKHYvAvceTjDgLM3q55UMYbf8eLY5Cz8aPTk2nWnG3GNicAEguSKCndwMwGJdfuMrBbaXPefMiribM2jn",
  "key20": "2uYfkFaqTTgWs58kTPVgKUGskpCjeitjBBtUSN45ywSXWqDBregomnGybbC96pJaYLGDKxC2onibjinsy2TtTVAq",
  "key21": "DCDzBsa1quc3p1Q2hEtehwpSFj6DSo2VbrL8gEHGpm9xMZr9fF2WiY97rgrrZpgaCyh3b5JPJB2GXCfDGE6W4Df",
  "key22": "3smNRaTNe8VC8MWbAvQrfWRuotWRbDHhajTY68PyYWjqMCY39wRaDdgaWzgpLiyAsCVXfb1mZPMyKYkqa2i5Zi3U",
  "key23": "q1xwkkBLnaPXTMHHBtTL2viBDKwbbDsd7cQXBZRAGdMZbz7VTPgg2piSHSfipyDvonjEvzNZTiaGitZf8YsPGHH",
  "key24": "3R4iBzWvroU6nwebEXuRBHWKcMAuKwJUoezfnAnUmqiGNmpmmQi67L4mMrqboeLD3MMz9rgtEwA9WwXkxtMgj5np",
  "key25": "2ajjdJXm7TPB9j3b4dfu4h1h7zT1BxZTQ34RoMnYsTAXfEUVA1h73ad5mZhWUDFyeLKQkNFAX4zpzPQByQNKd4Vj",
  "key26": "5aQUu6mHRTy5B4GrfcbGGbKRUJV7unGvcMdF861mMa9GpkKtTojqZ1nsyXBsgVFj36m45Dd3UZ5ztddTxUp9Z6Dd"
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
