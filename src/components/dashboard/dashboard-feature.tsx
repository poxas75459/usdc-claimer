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
    "4hggcKLJmfrjTyrKAt1JrXazFPSeyDhMCYyBzfKrsZWRGBPs1gfshZF1LoTByDNjEdMD5bph5LpCzLhaqRatdDDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yu1zPtc9bR79wZHemUmobnsXG2s3XmGbfHhNJTu3gnqHAoCCrewWAW9LqgMiqNjLprwuuyMRKo1tsKb2Pmsx2Vb",
  "key1": "5DwiY47aVsuWSY1qMpFWKSFHCQhUoavKJmUSFKymLbK7wod598DpH4kKskeV5Tqf17bex2a7SJQp3ePX4N5bVLTq",
  "key2": "iHuK7xfnW3iY2okeq3pWJRDNBkjLrkAHcPodpd7yKNQKkA5ctWuF2rryPzQz82gU54AjNKRLBeohD4eEhQjjFXY",
  "key3": "5DLFXmusDJ3spYmEVB469uPAz2ZXkKyKrjFMZKeDRAsEPoJEJ7nZC5GbSY8z5rxKDsFvKh15nzWSMxL485ixrEBe",
  "key4": "2xrc9EL9RiRLiznKZCN2bx9WMh8Don5p3X6i2TfgUBukskSuVUsXx7ejUfm8s7mrLriR4rnXpyCf6Cn4Kp78j2LJ",
  "key5": "4stAVVsjKGvQhmcnDa61iNMZnME2BLWhqyA3MNb7oqWUNkaPQrfghbotTek6FjF4oXWm1S3QprKvbDxm86L2HnYz",
  "key6": "52yzuPnqUiN6jmCxFQFGL1Qyp3woajemVShfmgkmDeUZgZDmjr3ZhyUUeXJYNJH6i3RmzQCPBVqim6igQCymWp2Z",
  "key7": "2FBMUkp8TcZsQUvafySifdHydeM1vRwPqYWeauZ5drj8umDph5bLjFnGjmR35KGGvGnk2ytwKCEYydwiDw6JCA9G",
  "key8": "VbDyczMaeNz6yxghqjU1rTmLL6nCFSFs22whnnDUN1qXSkyY4j5AQsDmhrfyUjo281MMFZuV6qsqJ7G56MyC9eB",
  "key9": "4DBqYuKnNeXULpNj81EpJDE65xMpLMgyApoVLoAEPnEWmTuCc2tQCrAw4s54yTwbuTp3R9nNbhq84rTgYxBFqoB4",
  "key10": "3WMgp915cnd28Rd5CfyDY3S2LJzTHUm9Mgq1sDng2JjoRH3VAPXy7XZsqmGjDTJbDpdAXQ3v3ZyepTcFZKZCQm8g",
  "key11": "2SZXswxJDzw45evDVJCneHoJaCCeESGkFCmyFdRRYVNsf2DHYkHmEwcPDDjNukwJu1dWmcE5jZmdTBmKVz1hy6fF",
  "key12": "sNovPPbab94Ly6DZwFCiz7FzftGpFZGh5HnRcfsDzRp181KNdUbPhjejExFJVKZV2iinpwuB1mRgvcywQ7xLgF1",
  "key13": "vZVS8vjAMHtPjdXp72L47whA2N41TkWCq6jUN1wJBRb2xRHmageJv3fHk6xBUHca7tQ5Uy2yiJcArG1vPuCGytb",
  "key14": "5VQsZvhJPmxJ6xDuWCaKF25x8kHnXfT3kaZrUk8k9PYDh43x8k84EjWV4mKphsoJC2f1wGbR8RxmSVRVooptyBcC",
  "key15": "5jbVGYxxxDLFCbCf1NC7beNUPcT26y4CGrhy6NCGuvRjqWhuQw8RcLbic8gY9gKv2PU2oeccXHDi5z3Z7teF4RGY",
  "key16": "5LEtahv89KjvDbD99i1FhyuKZFX5bC9aUyB2qR29FUk9MwVuMHuJD13sjzVDWCSMgDxFk6TEzkhj4VmdVMXvxyLn",
  "key17": "3ijMuMz3GN9se78KJXZQxN524vByKpCzmHvbrHKQ5UFvrQM7FJ9utu5WeCRM7RcURVsfraWFkoyvJqSvSjUEcoT2",
  "key18": "54E5rBDViLwawBkz6UTDDc9tQqkGSUts2xiNXuo2rpQ4gbDjaSeRiQKhMBVRxYM1NdPGXxmioy3n9xCG6BLygyKM",
  "key19": "4XADUtz1bqgw4NZZvGNpG8knLjXEkN6WH8CF9XF1ZsgpQ1mb3aJQhmMKAn4dmoRc7rDJdBTXNBVNJkwnpaZ5dTXw",
  "key20": "3BiG4GBWtkTjmr6RSPWntW8PvHRhTSeWEQ4bd5C2AiDUifze6CzTt6N9ZCLbXuteMrnNMphEj7Equ7XiSNBkDQp9",
  "key21": "5QD2DLU8JeDxbA32R4Pbtc1VmMiF87VkGw584gVHogCKUv9vrWRu2NHLiEwivdxkCTbkoXkkcHWEy8Y1kraqwMtG",
  "key22": "2J1KQE4aQhQ2sbUJj3d8ePNDouJXmFDhGg3HThEHfUjEyeWTpme5BAPM5wARNc18PbAFDkkPv2DgkDz9Dc7t9h98",
  "key23": "4TKLtZhLDjqHymy6rpP5viwdaW3PuyqxPs99zdVHBFoJDVEUL37zx4QPpXzpiKFAUiGKa3KwgtQNycLouqQgHWxz",
  "key24": "8s1nDGfivf1edpyfCfgZ1PbRe3fVj5CJVkNyi1iPLArUPQnMJX59F4MoN8ygse7JHFuZn82badEu9WAnNBdyymd",
  "key25": "4PpwuL1aAKdFeFd8XXdQkzeghiiBM1Y2KUGh4zLTTqJqwz9VkWtnagRx8RCFHXy8NjPWQ8MFedmoYo6nKQnmdDa9",
  "key26": "4AAnVccnhxg2LdqdCb6mbbLKWmtdHE3rCRQNPqSUWx9fsLGKaGprghc4ut7yoBTx4CTc83LQm1jHBZUvqW7XvmVq",
  "key27": "3KHj3Eo6XjByWNsvGgsJnj7VHvV1HMo7jQjZ5wARPvf85diffkY1ojKAmSKGMBZxZXjftjqD7dm5y44JRdJofbjS",
  "key28": "EZdridPmsEJdVRUQcgaS9w4QaAphQhJ7eJCKXmMiYeiqUSNne748VZ34XgHmvYaWudk6EHyNzKQXpGMf1KHRDpK",
  "key29": "4mHWAKCpcuPt2HcjAh6Fdbd6y6uxtsraQgSkNx6KhN91qtEpku3sTaF6m2ceQ5KsNGBxRyN4Su2xsdQm2zGhKH8U",
  "key30": "3zrvNwNCo8vz63aevLyiRcPzqTELB5crq1CrWQ2U3FfrRqTqMuwHcNM7rGYPfP5cfwLX3wS3o5AQyK9M43m6cTbC",
  "key31": "38DGyVshwVFr7Er5BWNk1AY9orK7CFdVvjvpEHvSr7TJF89GbJtYTZSMDFDXmE3iPg81TRExLbg6RUmZKTGWUwPL",
  "key32": "AXDdR3nx3gE1ihywtC3V6Toj2Npp4JQCn7qRZngV5D4bg5Y77WHNp21nzhvJCPyhJ9obRQosgr4eRKcK14MVeQi"
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
