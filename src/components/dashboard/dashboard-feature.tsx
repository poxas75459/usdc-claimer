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
    "652JoYE49ZjPMGeryeqVK4xQGXuQGV4iQ8WqcFMJv4zDaSKXTiUxXeeiGq5aWHpoFc8jiLHVh4wBMiXdp2FKEQG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2di8KjGdwTa7YcsAxKvszAAUuqhKk3tNsk7WQsdHghc2sHYE8GktkZLtkRnfHTMeQDsK9Wh1XAfzdEnNi94LrzNy",
  "key1": "66uF22DsrTLhZa4CgcZ3skNY6YtsrS8kGTQFLcGeCF1aLUUDGLqQtYFYhiHjXWNmzaQCSvSzzd2PgFUaWJyRxhLD",
  "key2": "52NE3b5SaMTjmDWt7FZuUZ6zakqugavGVArEAH3Jzfx5ayHE7eZfE5Zga3mvTAjQHrgH8zMcZvHYBToV6Fz4cH3P",
  "key3": "JXT5SEwxi9nFVaQynJMWxhtN7SmRn7veyYL5AwUb9iPBj3UkiRdm646VtuN78UZiaTRtdVBrek7t8pYdprvwkBZ",
  "key4": "2ANjH4aGgvUdGib2UZRYsYcjwkoLBKM4LDBCSmtFU46URekR494VnDuqyzWBHAQ45BuymqW1QQHoFkece3Zq2C5A",
  "key5": "5zx6WcaEo7V87qtg69F5RCRBrkR9fmGt7U11W1hzTtjdU9tukFdsgocEm3WSNmd2mfYH6GNS6CeeX7gsQVcK2htm",
  "key6": "2XBgsDhQ1A4sVotshXQDA9Q13cZhQGLRx7ZkZBy17XfM8rtimyHdPpdVCygjdSWfBFARQPeRMdwH2EaUWc7JnTpH",
  "key7": "5aFgJpMABpECpQar9hH3FgL8X5NY9BiXFzrWpiFMkgWWr5Cf98rSTNr7FVzSSk1W97xvdcoWou4Mw9FLoi8cHeJg",
  "key8": "2GNNSokoLDUXuR1a1wKb3ScNwmWDAUEnb2EG1jzuQhUYBgK3t7Y1xVKcXqqoKk6MdSZTWELyJi81DGaCq8tE3P2g",
  "key9": "4yktcgM8w8pJFLmy5CXvn6wbMsAkfP6Z5Ee3jriusskGVTCmJs4o2zsypZHusrXtGUmytFA6yYnZnN2pjTcoAfwp",
  "key10": "5yYHpCL2jwMbQPgBryjkVsxgRa4bmHTEykYcb52uWVhcX6TySBe1wnWo43z6iFXgBnsV6VwxGhoEDMq9WzTznwGf",
  "key11": "4s3dcL4BA19DdvfKkMbSAGpYe2Rk5MkNb3zseq2FtomL1WbrRBMWvLCE2KhfR2FdwFh4imjxQkoEAfc9snMw45cZ",
  "key12": "4hkuNxwQonk8sx93FbxeX4HfLcTMd6YXEWcHxxhUevCwAbjWnPuHSfeLiBKgEG3nRTD97F5pgzxBhQKf8N2kKjnC",
  "key13": "3Pm1HA1gsAUbznirJTY7QK13Jy5W1z8KknKjNsugnAmc9Amc7KnDPngjBw2bmTsiMjn9nhqDzgX5JzCbHVwxFK6j",
  "key14": "3GKCFb39mZEodiTyXH3x2YwC33LQdrUcsdZFKns672MWswaNsokARNj9C8rTvfZNpfajfTm3m6ejZYnkFv3CBUgx",
  "key15": "3sD2ZtGKTGhJBh45WEgy75DvLP6RqBbPHSDRZ9m6rmNAqSkRnBaEHyednS7aSLiS4LTvHQzAkduakT55c8L5NsVE",
  "key16": "5C9ihrZUFEnSyfN2uxqJANXFZ4cT9DkHMcGsLWrYZZ6HcQk1cRz9Qx5pF1vRmA33hgPTuJCy7KwZeh3zLbbZVA9F",
  "key17": "FK9V5kM54qwzSPTgkEU6BadMxpVneo6o7LknoQs1CGheTpiJK3Pquqekf7YsUCBuixnbnAQtsJwgJZLJ5wHCRtU",
  "key18": "3yhLDe3mQq7ThHBiurGoEEUhpNSAwGvP2C9gZMbwd1cDyDbhrar9pPj7fHXCWicaJmV8um1W5GybDUTxTnJ5SKUo",
  "key19": "2mT6Sc4F8QiikChCFhEYKTwAo7vd5mVVtLqDy1fdenMuYxfBysuzkiwtT6toJJS5KYMffAqFWxLdKtRj8uNd2ZYm",
  "key20": "5Vabjq16Hz2WudgGCWsieG4ca7S8h5NvE7iS1UreCZLTHqqTCZKvGkYDzBVruee9tvqRyLENezcdjx8qHdew123C",
  "key21": "xuMwEHFLfodVaQHZeRrABJtxBbZwAidfxd9f7uuisYPSJi5M8ds6zMPUtij8kefTdtEVdgEg9u28uTFJpHhgxB8",
  "key22": "2wFReS2HUcyLUsFaBenD1oR7RnMZh9yM2sWLzmCLuzjx1ocQTMdogNzkvfSDCVt6eY712tEq86LHn395Rog4r8Cw",
  "key23": "25NMrHrNLSX87sLhFkRmHcpd7bWzFjzii1RmcMYcrdHurEb5j9gp7HFxojbf65nYthqnSp6vrqHEnVnnagU9Yrud",
  "key24": "5Khz229C7hm8Hrc8mrBVrMeXBKXYVzQLRE1fPkmGm1C6owdmJs5r8e2VUWBFBHvYjePuWkFKjt57aEWceDc3VKHo",
  "key25": "wzkQUMynpAZt3fQ574jb16MFnePw9JzH6V2xhA4Z68u6tBcCPhDBitJ5jQqZRRvUi5HkDwZiay2tJqZTnWUDoKv",
  "key26": "4QSGHzvpcgaRdE3RUmDGcCcz1gEGJVG7H6K6AUipwopfbnT8wR4Si115Qv2RAZGkP5kUmcmC4XfXB1GYyhxecjWh",
  "key27": "3jazJJkFZXEWYRSzdhAk2fnNpB298ZCGWXCdBhyABcXGuV9HMHGXksuKE7fLGQ3adE3qUEwxxVS32c8XEzrbVQ7c",
  "key28": "2ZGcCCUEDPudysF5dS6m2ZdUETuHSoXfTNESExujd7TPfqupYgGj6yemQrz2MRouB3mwhfaZoQoSQfi4AhR4v8aR",
  "key29": "4DZydQZBk11Qw6ZYVWDQd26dPd3RXMghbsREXdytpvMv5JMrYfEzAZWp3aD3dudRbMUrAesKnYGzTX4JYXopZATM",
  "key30": "5BLEiZfJz2TnB9BCveuSpyKHLc8kqUirTQyMmv1cHGKmFMcfTLvdWK1g4NuP7pN8wWFoZK6swRKRGZCJ2Ui7thKP",
  "key31": "3xzkugTzht7BEj2tGPkS3pGg1GXhMRmbJz2YRFHUtM3jsynLLpQsLunSziLoKSNfok6w4gi2P863NYoPFtKJQxqe"
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
