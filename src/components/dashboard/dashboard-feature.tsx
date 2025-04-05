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
    "3DWcfos8dQQE5LQ5eomB9i2y8TJy1rJzLKuFJCtcTmbCprtCtnb9tdLavKmxsB1EEmcXzjNpYxUtU8gEsRB4hfvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmWARzPGUipy3WqBxBdWgQbMMfnV6Azb2pM5NcJcZZuNqMUWZ6uWaHFkN15br6L9Ea7YbPcpTqi5NccMDduCkBH",
  "key1": "5hTBwWGeBg4MtjKobU4eGvRvMr1HjxqrHYmvYJDHWR7pYeQtpdWmgN5fjwqFD6S49rfDHNnTrJ165qsEsYKFq1VS",
  "key2": "2J7rRq2T5iNneaFdJNABSyT4aGUAVUbzECMVsigcJ72WRzR7bBvWaZfsyEsezhgntCnj4JodhVG3LTRSAQ5YPQXF",
  "key3": "sV8fA94FqnejActrsxANbXfm2ToYf19KmNV2sTCq9cGVMdJiMBXDpejKEyQBJc7hGVXSXZt5FEKSSkFCuA1LURi",
  "key4": "5WorzYwFNcwspeRsPx9RHF44yRRmWqqMEdrUbNHNA71wxnxNHThrB7C59pLCLL1K79GZmHpZEUHdfHSeemwARYG6",
  "key5": "4AiS1HNM9QtNuCgUK7KfPhw5Fh3BB766a6646WkfQoz3fKEL8rq9Cv3jiZeHRGL34VZW429je2oe5VuVjaSCEzTh",
  "key6": "3VzS9vV2RxVDHfkrFneNxbwQrqc4B2SHXXDbZXrukr8FDJJyTMNnrEBmQ4UUeAkVnDpdLtVHfLezMBE16q1DNEzF",
  "key7": "5xePZQc1wS6TK8fRab9ZbA5uCcM6VHk9AHcARdPo8SRxSExeeQ8S3exFgYvcp3WM5E5SpzmAtxsB1qVk4vRz85yT",
  "key8": "5bhHAh5KKm5ryimZgS8CDu1RnwjVedqpnUESsgXrriugzp2riK7Yqgr3dL8mNMi4Kt6QtBbKHhLgEkCiUfWM24Wj",
  "key9": "s9UL8W7pzGttMcvCw39RF7Tdo6Ew6BEpNQdHLWL9mDspUj25xbUymxn6Ce3799s5wac2BP1F9Su6DmvAhM3LYtR",
  "key10": "2cgGAwLe7E7rfHURADXq12kfyvpybsGeAxYDgxJvXP65e3dD9CLXdygi5CM2q9grNoosjxdWuohCa3EuARt4bSRX",
  "key11": "251nWRqxb1xwCdHT8GnWB1JBWhPRoT9K7omwrUWDa8AN3VPruBVKsNTXEt5TmGvCiYrkDNeowveyLwViQj6y11fq",
  "key12": "43osuG7NvZfW2JyrQruFS6vnPnf7MxrCVC9M58mFvA4kenWBdMZ2N9X39X317q19PMa93cSTqzkbrUEFoapCY4Z",
  "key13": "3P9nVN3DiMmTvLUDjrq2WK7tsVg1s5pNzcvzPjVXHv8UB39NrdZgVFkGBNAruDZoE9Q5Z7qmHNK1hTbqikvnDC3b",
  "key14": "5gEXrbb9FLdBTDkcNYRgHGrNf9w7JfTvA73GLFmjtvq4QajsgazWbXfQfEp4cxJekLSNSX3YnJjjwQ9sP1RZRqow",
  "key15": "3oy8JE6fJAsBwstGgN3fau4LhQqP3hoUYraH69j8mngbLJt1ivZub9VR116JBc6Wtu5MJPQotYmYNZp15SG3zNoY",
  "key16": "4WHTedTDvTH6gvxETEv1NpRHwG6Q4AhASDaBL7hRBg4SsShUMVeSCNXQFg7tcydUXLcFWznJ2fWenb9RQwtsqQ9s",
  "key17": "5ni9L8rzcR3TgecrW15H7PvT2HnGDEKqXZkbmb5B5UeeQSSQ1FZGQ9zAuHkAqXutBZAXZJ3isGcPeGrS4QBKvKLY",
  "key18": "4CzErkZxorUQSwudVK9kG3V52zVs4PYk2Sw8RmQWMUMCgvvqBjgUejRf1wSrpbKLokb6Z8i36BiZ2tjisj4cMfuN",
  "key19": "dhrEzLRPADxx3yVosKqsHSaSgAsMFRE8LBhifuBT7R7PXjnLUArMjG2G94zQekiscARWnMouKrr56xr81YDKJX8",
  "key20": "Dy2ebfBAUPuJCUcARaMuRGq6GCD9e6PoFVo7iZM2ArGXPSGFgP3KysX9eWz9ZYD2Amza2CL2YfUHNLahtuDtNbb",
  "key21": "5KKXjvN5JfLTbAVvrahSBR2dzxK51rz5XnArdrpiHjBUAYv8Hxmu1iJV5NiBaQL83deMAnDeGB1kn2gb54bYq7bJ",
  "key22": "4CzEnfmT3g6R4nz68xZ8FkafKHbX2Yw6mfqnwazxeyJbNx3TP9qDE8n1y1fpkYWsV88zt5PK6t5ggbkWCZsomLZh",
  "key23": "geQpnRDUkru3UTjjcgaWKst3fUjvtXH3dXogchvw1P4zVNQWpVwicbWQVEa33BhX4mtisV63RkEU6kZbeKZ5A9V",
  "key24": "5TX2ZuBjJTv75reXT7pRCmNfREuLWhjcKxYS5iTk3F3KwFHZQF4wQYNzMuLS2YjSmknmMujNgUuCRku9eSXY1A7o",
  "key25": "AMgHkrumSGfXvbidxjZUC7gS6QC8fwfFp96f6WgnMA5xdKRKCPV6e9aK8pw9fLPXao2ChfgeShKB4vpffes1xek",
  "key26": "4t8ynuzysGhb3vNWVMqPP1sXUyMmUdSCgoEZ5sApf9e7ZULDcV23E8uRZ3JA4LjbxCZP7yM4iqkMoDE35oQEYSXe",
  "key27": "S2f5bKp7B4GHGVtNFgiBwD9xzoEfTz2dsXceyYKi4eQ4A4d9Rc24NommBskW3ZbDS1Hdqoz3w5pgEk5NFPbqUPw",
  "key28": "5ZSULuXWyyETSctWsx5fUbLdC6C2CuwsP1DJsGsqMs5U7iPDJHJkjDHJ5U3DyLo5nMgZtK9ccxTSD6AzseN3jaou"
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
