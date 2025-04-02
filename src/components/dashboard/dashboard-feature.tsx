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
    "rN87AsjsBKqqN2BG7y16j9SgN8JB8XLTNL4y5xySY7oZa4t4Jnct6NAUTUwHZXcAQvrtG5h21DPkDjeay7F79rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSK1NnD7xeEUdwNe6y1ArEDLLFBRoCewvTT6r8CXAbiM159KoUN7ZGEEyvnmNK6ASKPPCS9iY8xcBUx3p3SR1zy",
  "key1": "T59GNdPgUXxiqEMNegaqzdYVNbAsy4LmMwXGRjvTCz49APVTCC468cHqXLcNJWQAFqjJ8g3ojft4WRoqq3Giqzj",
  "key2": "3iZqQjaRuX78XJuGXqpVxmWWAzfZfy7U37kSbhL1Nyv2KgaMnDicMqyaVxXqa6YPmyikWmwMpaexgvKY2TuUpN3P",
  "key3": "3NJjiTcgn9n81sA9itph1Vna8BonoY8nZ1PG5p7BTS3ryP2SKZr9aJCm27rLz6PHaNDCWAX94pCooeFZr81zEoUY",
  "key4": "3mRrQzVV65g1AHkSez73b5hcvuEPKWzju1rXb5h4C4MDa5ic9f9hrMC1YDnLvgacnkPfEaJ3ooH3d69or7srH2Hx",
  "key5": "2YCRNQUH8c3cdFWoAMbPLGMeDqLFzXxW13M9sfYZWGKSyMk7qDtdfF4J8TVwWxQsZJTXuAewfuqCzLxp9GQP7j9X",
  "key6": "3kKzpotsQu5WBvNkD4scLbaFEzjhUFnmR2CEseT2vLxB1TB7xdWYq68h59CtG821fdpbXUJZQG9FPdYCuZSz2w7i",
  "key7": "tgE3T72GicQnFvr1STRDvTA4D5a8yv9DVofcYogS4t98MB7MY8isx3EG7YbkQceSZfqSWMnEYuQA7htReshDv86",
  "key8": "3r5WUiRCWuRp5PpSo1QKoEkvtXwftJzPAq8bBRg1UunK4ArmkbyFvAQ7FVQyHuj7qfobxyrAGTcrvsWn6H24hYac",
  "key9": "5AcYT792foi7kCWoMiuMNmDtxYv5YrVXNyJWZw6dG7QCUiAjVxKxtmpcrSMXPFfjT3XmZb5Lgcw4k1Dp8pbzucsy",
  "key10": "uBmoKVmqw9GrqtRfTVAPtcArjLp81VwszSPmLAyZTxcfkZoDCMAitRUsUdwHLc7GgMiez4nNi91AwybA8f8uDEm",
  "key11": "5NepojxSTKYWSnJLyWNybp9oBJrV3Zhm3YorJDrVpDSoxLqf346121hY1RNU5HT12cKtcSh1ycd8LUD3A6YPkiUH",
  "key12": "4B9d3TPKi6JRbV476YDusmDSwjJimgG5ZBYHFWEhzVvu2UwnknyYSA8VJ3WboM1tLipkQGbpGHo2KrTDyuoZ8D1P",
  "key13": "Po2jQhB1EX61QXuSwC9JSrrhvBRsn59S4VZtVeLj5WViCBygiq7BW5tRFt66c44nYiVj2kbCquTEDnbZwixMaS7",
  "key14": "bRLREotMQh17Cd6jXd9aCYVDn6kBVhixTRhykmD1E7veAtzoQ1pLPVNSGyes6w5AxXivfGfbgEvzbJHd5rF4zUH",
  "key15": "LCthhtDEiJ6AnaLCHJMy9Ux2QNGJaRif1iGN8fApWsSceptCL99Yb6Mc4gHwpjasBQyNdWtXmTWh7n9ACRQGpaw",
  "key16": "3ykZUZgNcfVFPU78RQ6x9tdsNAkYexcdevHXwHasj7kJUVdnk1UkvgSU4MdF8Fk5CYQXhNjcmpbWF6vJEKp1Ct7z",
  "key17": "3NsL9xiu6LYMhRR3Z2Yag1neESt8kFesSVdBA9LqM8DpLwHyx1NYhr8pmqoi9rRTmQM9L5j9LqQwsvAo4E58X5GR",
  "key18": "4WUVfpxeKc7KqWNV3spPgwXgUk6JT2WoiLHR4vTCf1uVS2sonntbP13DYRgwkiFnmdV2FTVymZkbST9mGnpWK6gy",
  "key19": "3r6ghUeTaCvqA18WrRmLzB9dGwzrJnp6wdTjz7QjM3NHWYDq17Fn6CidCTvAhw7Eh8PhFtHPt8zgHJXBtbzA7Gjt",
  "key20": "4Vszp9JjDXSVRkM6PC8k9pQvGYuL6yvQUAaF1jtfzRfguy2DWJSb8yS6CEUHknS1pgCurUvKsVhptmvVqEH8pcHD",
  "key21": "296jZLXiQkRz4GymmzctfyQy33k6MBT2hd43xadow8sVcmJvCqQLtya7wqJX2GYsJnVbWKe4AAtgY4Z6y1okrXBe",
  "key22": "2bViMdHnjnAT5aGaRCtvK1JhKqfM9MRxABR4PJjPNavHWBm6X5AkSKWoAthBccuNiHTLoTuy61P4g95ZKDahwqw7",
  "key23": "4ZRTTbz8pKC8pVvaY6Q8hxFBw2VQKn8CKhvCzsChHcVCdiZau5m6QQHahe4AvFDEyEQxetKciBtZcKU7w3aRodmt",
  "key24": "MDpmcAzwHkZ81wRcb8vQGPf7dzUu16j8exPGz3wEE5MEDJXjDCRvc8myHWyTdUwezPfjz24gBfX2X5nQEVNVdYV",
  "key25": "66dLBCuqtSdux2R7JJzHFGycy9n4izH7uEfCrd9B3XYsdSNnQVvFqnNBZ6kuk9ff5fg6C4KtWZX8PS2agZYGCch5"
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
