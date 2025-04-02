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
    "5rtF8LW9FWdw6k2KqhpzPFt1JRBFTWDfDpKfVN8WNeKdLT4Qe8w7npihu3ZDKa3tRNRzNyDg6HTst5ABrs8C1XNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHS7LfBMWGaGw39ii3AAnDpR3DyThpByL3Qw7C1Y75pR9nqivVo6jk2A3XjpchgkYocaVFWKKZC22Ad1U8q6Zdi",
  "key1": "2yVrNVBk1SV8sFodKFh8Kemfj1zTpLKFvEDgrsew1twAPDT1XTjRVMX1dbnsFea5wnjHfMWXDzxGAHVfvNRUhmXc",
  "key2": "3qGS5rEW5FBDsZirzEkH7dmybSowi4cne7sTyJ3wZj7Z59GY1xXV8cnuh2QT3WJpKEpw1iYZntKENtCeeyRiAx6X",
  "key3": "3HgphFxK1Q2mdtxurH3CRApi2WeMRyuEPryZEEvNW25sa96ZymxYyqj7BgX2Tnjoybj2K9VY61h1LezwbMUrqWqa",
  "key4": "2jzNzRTzXzN2R5wv6uhUPgTvqXLmpSFsypEtZW5DTTGgQKNxZQjkM5LHAk1tXqbqggp7QQwbnWh27WV7ULfgXeQ4",
  "key5": "HWXNZ7r7aUybn9BSZSwQYiokbWuXor9z9n7DhbwS4JJe2RP7KTPErEsmtyk6mkLP9yY3456s4G6wMTyhT2aQki3",
  "key6": "3HwwxeUBmqAh7LG5bRnHyd4g8UUSrPCg2HgnJ9CvVCWCxWxm7RwJGfDBSVfv2gCtiaiZbhcJbXAbNfeDCp5CpEnX",
  "key7": "61irZK5oLq1VEzBnueuMUCP5QJw5JxtwGfrArywBTamRSsRL667QLH3v9CRELGo6VnXDrWPRaa6Lu8KNcRpETf6B",
  "key8": "5RwJswJ8JCnMdesrJteMd1oWQV4RpfZdoQjhKVovsRSnfbjP7ZJZAVzZuoRxbpHQ6W6YDwiLgQzpSLrNznaRm8BW",
  "key9": "3jpfWYQKLQaCVWvvhV9auGWqAo6MmBpTTRMJ5eVXaunhLq19WcpAfmU8SgD7VjPCu3z1aFDYEuHoberuUPBqQ75C",
  "key10": "3YsoTgFHSMHEh1ETpYbD5E1QStPeCs9ttcfDy6NooukzeUUb8NgM7uo12HiWRfN6Tjkow2h3xHzigZ9yYqqw3FqA",
  "key11": "2Np9VYwPAVZz7vq5tAPr7goxgAdKjZ1hDf55kVKXB2CMnkSCXwwCVPf9rnxboijENvTUyE3HUCbGnbxfZWywYc6z",
  "key12": "5cLHwrQvDdVpcXSAGgpg8eoTMDd4AmgxgEiqMvB9psvCu8TUffW59jeA7gKDL9BcTWxMeNzBtADqBnaQ4eg2ZuZK",
  "key13": "5aFzaXE92f77BpKJED38xodTqCSfkDVgk6GYh5cQ4ozNwMA59gasuZ4d8jRKEhjaEDJYtShZVX2z8hva7z8vF4bR",
  "key14": "EfVw2gXy8reJaZQNNytP9w3c8aifN7HttBrEQunGz3LDhYQLHzG4o9jsoe6g6tLfF5W7WVDPa3X2V31G3rARJse",
  "key15": "kr6bxZJtd8gPfC9cQh8LtyvauE8ayA1gGLxiC63zFX2GSsJtVZcLhJgMe5TNS2jncqepPmJTT9Txk92Wt9k6uvD",
  "key16": "16CBztydL1ctfoNneXXegqUxWWAHAXwivzwduPyga8HjHeNKt7ZXqiMMUqodegwuQtpsuJ21mT92JrQw6Gv7yp1",
  "key17": "5BYoCPnvUxo6qteP9NciRG2RjsrfaBnMKZKgeZi9erg9RxfWmtYXqRX1zST8PAdTM1LBz8xEQVq9Vbh3ohioXnbG",
  "key18": "4RnjbdsmZNVNQXnjPazEURr43dm6DCLDTjZyjaxGuLznetPTwoyRV1am2ojicr6YVowpFTSgnqmbGp8rMY4HTo48",
  "key19": "2nTzF1TGMP9h5Ax5JTht6ESBw1hLg76GKfdQMP4WuW9VzrYb7ved5VjbESwoTm4bcD6t7DEybsF3wsoufaxipMbN",
  "key20": "3thmsVwNDejh75PHdFo9Y2tRPRreQxqMZzVZmUJPVDYaAWAoxxJ5eoXuoRSi4AQBqTpFJWseq1kKHBzSVtBvtbhC",
  "key21": "5uqKH2cNAJMHDKXqTcE121vG1QK8EggULE3JAcuqgB8PMfrfXn7AmgzwSwqAKKEANyivM4i67ios5Cd6GHbjSFJv",
  "key22": "5HGbuEC6rr1vvF2DxrL9wVJL3w9BzGcM2MqNUvnVy8CUrUrZq6uNWFJrszNqWCaEkqFZAzGdbP4r8H4NAM1PQxBs",
  "key23": "66LPZtrWtwijDm2qbHWXr1o1HD8xWm2rMgpnGMHV8TvTuptjNVnYw4jMubBMh9gv5YivhyYHpaAYJCUp67P8iqex",
  "key24": "4MKi6DfB1zWbXNE7kWPwYSyp34cTMhayBD7MjnrwUWfvPRVa9Ws3JnpKsgU2aC3TbaDorm3EmuGsaJi2rsCA4YkB"
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
