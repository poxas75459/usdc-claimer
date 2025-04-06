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
    "4XH9kCJJVTzciF7QqhqEFzWGT4eYMyz7BT9nDqnhbwooEcVAH4XvvCMchSHScwVd44XrmMLAtR3rA2p7PZWjg9Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gz7FLPtc53czMtyccRHt9fLMrVTm6WtYD63aWCGFxUAdYPcjjHbDUZMCBMCcmWFugjbtTcKDxHEg79UKAnaFzGS",
  "key1": "4WyBYHGwB4GxYPhYzzGgErWUT1EgcpXfbzo8dPXaEgLe5svKCfJFW2aa7CttNdDvdzrrxHLYQwk5WN3JNqK1wrth",
  "key2": "2DD3dk6PAi5wmvjF5YbVGZ7YPsEVudupitxFnmdBxvwfSaMh6iacP4dP1M8aGMPpcfUFu8BFdPw9yqV1mvyrPr3C",
  "key3": "53ewDpH7nQEqTakYrNENoMNJWckxeZCuBzTGtVvF4GZ2bdcWmDvimiRcnx4Bi7XcRMBAz3pULPALoVE8RxyugaZF",
  "key4": "3RsFajWC15HcKD4iGwgwd4Sa4dmgK3TanUQH15Mc3sg6MZCEtLoiDBWoYQhhyXM9ig957NZQi8TESG3e5Baq2Ui3",
  "key5": "29eHQie991N6M5m31KaLnjscc3U8gdm3u1V6GnDVipEPWsQWZC1UTpVrAgmn3nzqRgabmW8oHBggkJUeJqwANRJn",
  "key6": "2pL1BrjVGZqYHzyrYW4LgvpHFygNQuUUj2ojGacnwuoE1HbPbsErssUMMCQJoKuDVWyoisQGZ72iVznKAYfYBgSH",
  "key7": "5LU9VPoV4CL66DLK7GezsKddqy5f8bPxou3yDFN7uifhi7LmkFj1VZZAKj2X6P8W2Y8dZF5NJFKPdthvPm5fJQC3",
  "key8": "5J1dwSAd18YNGhbrTmfk2NtknNK7gYkMGoq35Zjd6RWSFi992nbCVzfSm38v6f1otqnQhV6vZT38T2FNCZLNp1iv",
  "key9": "RVBMPwD4bhyNuSHQHiqU1n1r37wevjaHrAuiQ6WCcKmMH1JkwYcpGMu2BQzp4KPV2k7byhE47Axa7FUfk2TkRNX",
  "key10": "cuEfzExtpfjifRZafJ5WjLNhAd1xeXzC3fvJYxdsi5N5D3fzDnx8UXAtfdqxpYkxuKQSb2kberyMjms9jB7JMXi",
  "key11": "4Vkbxx9TDdkTA14GYf23cSMNE6DskpvWHskehBpUbkGTFbaswWViqeXs4zPNZB8zQZrXZwqmKQuijgBPRhjG3dHP",
  "key12": "so6Z4P8PywTSoNHVSiY8q3iFRYez2mCmcrersoFWMrvtg5p6NuHTqXaZX4KUmcysZTrXVbiR1NQmF1PhhoHu4FP",
  "key13": "51B432W7bkezpGnX7SddSbxxdSMbUZTfnUTPcjHkKaGnViXdMN4ve4sjF2PkEbPMx4KRDzxuK5kp9AaV5ATQNutp",
  "key14": "xMuJf1CpPYvgb18unLsYa4w9TAL5V1dhwr48mDdCTzpzRfuYPEtTdLXnPzfqziYoXS4Gnj2h9aN8e5CXkNokSBt",
  "key15": "3t7EbcJTnZn7YBETVQRhpzHdPN87j6gKrPXaLfbGfZc44CQ4UEwxPdE6SjZdnJJf2bpm5psMZMpd5cX8o4At3j5u",
  "key16": "3pevynwYsYHpoD4o1fGQcfHHBJdS8J2mu1nsp6hLjCwxTpUdHqDNfaQtT5EEumMQ7EJp8mNKTFUVj9V3vrY8RS3c",
  "key17": "62zg3BNNdUt8vUbh5Uw9tAouANBEWNL11VVpUWCbF81ZtUETG9a6GxzhLR8hiiGqtraDYTsqnN6oafVqGRT686q1",
  "key18": "WQn86VNoqfpyAx78qz7QMMZxHh6gQiFVp9XfYiQCFyksLwSSGE2jwvA6fy73NB9iqqEMKs4Tu6Tu6tKCsqgXR4V",
  "key19": "5fUPjptU1CM5zNJUiDZBW447Jjw9CPnkJmnAUdNNbmiV9i1w89LJ6sWZwTZyC1sW8CtZSvzXF6682fxS4P9D5hVn",
  "key20": "4avj9KR8XRjcQyiz2BtVVifPoPBdYfnxBqZLQeiJoDvVaQi9WhARNaifHJskVs9SNMzkYL6m5ya2ni9BfZ8gcNaG",
  "key21": "4u5xbXu5bSRjEj2ES1qSrdbc9HASgBvwbMaQEXsdCKoLkirHYKh9XT5NGEFmPXqTf4fEV3b57dQ4jgGVRyFF24Yq",
  "key22": "55zjfKdUaqWYHYqs4bA5KLrWz6bD7KaJ4MKqa51xpeyeL7eNQ7mEFob1YjNyg2uf2cL59E988AdErm9Kqhh2mjU2",
  "key23": "23SvkntxtmjBaXTXmqMHWm4V7sy9sCiTNjXiMKbuqYpC7FzeRwCcKZocLbMxZmTu7NCQFZzsgQLHdVJDP35D6Ei9",
  "key24": "5cT4SVibk6nqpF4M2Wz3xEsyDEgX6b8EUWvg6k7NpDLMctPhdAxLyxu2Upxjk23WFSqA6VcyjtaqowoUr3KN6FvE",
  "key25": "2PEHi6TZo32HSroohyCeJ4oDaSHE5eB1iAM7r6EWyuhe4v5y434TZ9oUvihRJZNzT5pwjFSPxqn5mjLjMTr1xkNd",
  "key26": "5jSmbB4eZHUbG3eCEkZ2XuBn2wvEsoroaYyPk23tMvvToSEJMrqkJkH13nUeEwHD7r9o6RG7JQho2pDXiwvgHyVn",
  "key27": "52tAoy888G6VwTqZVH6ek51bieN8BBkjxPue9nqDK8gUzuDgn4pMp91PEx7bXbHaDXaGKRazNbT3DoWm6X8Jq9k8",
  "key28": "61dtEkM3T4sbotNGregEzzLZVCXKH9sKmYoe9VadqwpRYL5LwbjhWhZoeWC9yYFUA7QVykSKjiHvLDxSQbBfgtJ",
  "key29": "5BveMZmktFqePH76N8ovPLN6j4TQYaiF6sWJeMHj71bVTc7foFWd1iaZBgVuUgbNhwfJP2rBXXaVRTgzCRHC6hXq",
  "key30": "23j42SHRrrJQp9iSiWdLk65hTM2Rksppwh1xoTve9Zsc4sFrJf1t8nMGRMGinbHpwrqeFZ6CCJXaVQ6j6wH2E6Qn"
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
