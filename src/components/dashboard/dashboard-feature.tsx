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
    "k5NyrVBmRmKK2kVbHU7R52e75cAJzAFYXuuW4EcEeDiu4yzjEXbJBHwb6o4QcoHuiKWEj4dWAFne13MRAoW8MF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Agk5Q7TDZgy1EyEPJFh8yU2cNtn14iYQn7QZAmTWejBK9J4rbDph7uc3h7UGcVR7xzv5vW4sk9RaREdPrHZ3F6",
  "key1": "56fb6QcUkWSFP18BKTCgNeZGW6JLTsX3x8QQkJT3MWBJqAYeUdkYp29hirjqKsGuWSoc2Sq11re3qLFA1rxj1nAD",
  "key2": "dgFt64dndvdyhu4SZVASVoUoPcB3dnfJGsQ6m8yPKiTak35Sc8KxAfGrL3fAQ6mmexzzGRH7bY2TAtJBcY3ivwU",
  "key3": "4vzXpSRaoNitGGKtmLL4Z2KBE2gxSYkSF81HbnhPwQhsNn4krEq7spUQRMmtNUi37THdsCduX4b4Ltd99WNxSKAX",
  "key4": "5ehfS6JGihtdt391RnJ6ebrvcx3EuQPUVucL1LhSQWtSeLLgYPddys9vXWoNAhA7jLpG3ZBFpXHDdX1hT72dnodQ",
  "key5": "65co4EqmR9sYTxSUyJYsCAi2c9sTxY7Qx3WUm1VNuwKohR8VgkcWMAkjyTpNXXyrcwcb4m29CGJkt1BDKdd7srk5",
  "key6": "2JTkEWnt69Fwu58QjAGJ3GMHTCsczoB7Hra8XRSLCeSSLWYHfm1WXQXU3ptCFNfHLaQkN5Epzf5yX2pxwLHmqu77",
  "key7": "3aJZFibRwwNVHtAehsiBq1nQpwSc8nxKZbNJMknoej9CPUL6SrXYoYcqP8ySULgqSq3gkHMTkEgR4rYxZ7yd4yJu",
  "key8": "L85kNoVrayywZmd52PYmxfCMTWGfwfwPLHTCtMYt6ZGbeXhDPScrGLqm6ShW851buqm2QAWrr5j3xYogD4v4yBe",
  "key9": "3Dfjb55wNkFurF6NB1jB8tdyQaAtRW6WwKPqJRWkqNv3PC4q8t1nd4XUYuRFHdKdQzn1Gg9a1drxSwFfyN5ETGGs",
  "key10": "3DAJijPpoSc6RgAtinidQ9hu9Dxnd45yRBC66628GLgHxbbQht3jz25CYGMJHzmENtdGbmm4T9D4m6RTSyUsds9T",
  "key11": "4HhDiD7jpyGW7VL4cosc8wWg8RenU8b2fTbLPk8rMGBs2Mxz61sn6RfeJGz4X3W8Pgk3E7VbSdKRf9CKH7RJCheH",
  "key12": "5F8BHBfEVdAn4dygBCq9R7oFU3FgLEZhMVswrN5K8VWcjB7u4Stxm6PqhJCFq4NtGzQY8QmWQCqj8g753Y7tc7M2",
  "key13": "3AXyTux9aTCCCtrt77RcxP4xjaMLiTrZSuNRFwxLkD4E7kPTEL4PDfSALQpeeovz3qBSucQhzv5FrxGc35K97mcq",
  "key14": "FQbWVx5V8bPFXbAtyFigZhNdN2qFCXV8taCjrUsnh2TpQ59rnZYY77qURZRm1SPu4ZD7Ggzu4j2ZNi4vrKSov3w",
  "key15": "4j7ApxHJkNFq1abH1VxFZQaNaJXTVaqgzfLxGTjdqZBCdwttNSMv1GgeLMU48etvuga2x7ZJ1GaY1R4Vg7oC2mp5",
  "key16": "5s287LeeN9eQzojKkZQBhyHKYfP4DMZdU5d7xvgHpRqFowrGfLoUXnyR8U7fTqiqsy5mKT9EFWE59Q2jJQXPtwmj",
  "key17": "2rDmix5zgeqS8Vhk8iwnvU6rLbWJhzUJuKk92f1PerCmFdmd1zwA9BBqr4PuBXvcthYCFdz7FRbf7Q3HLsrw2itH",
  "key18": "2w3Ru2Dwh1nZs9dNsQhP4srikhiFvJrhevMKgrs88YFcxbv7KpVuEJg82CdsczjAakxCY1YsqLYjCt43ZBNMRXBf",
  "key19": "33RP8MswgGhXiEys4JjRBA5KrBTXCdzVGZJ8HRdfjkowEwL7B8EPtbvqvLqusXwPvBt2di5xMKPjZARh9FRkfvCQ",
  "key20": "3B46atEo92k5o22RzF5PEemCLKdX914hGMFvCGdp4YNrM4R7JDhQ73Byy5ntCymf8eT4G7Qh19Tu5cfLEFtbKfKP",
  "key21": "anxusgs5izkoEn99e1oDpjHfj1ENdyibWkFvDrq2A7Q43R2oK9akjaMrbBBmXzfkbrvp5F6XWQADRwjZmesod8o",
  "key22": "3iDQPAgSjqdDR5rKPiXETNSiACG9PEUTrgdkpu554Bh9TegF84KTqVv9XgmDSoJApgne824mfd9MzLUGBahVrfY6",
  "key23": "3W7FoDsycR2PiBLYWR751LZgUKf4b9Dqhx4E1XDCZGZfkCy5j14pbk2ExpHK75ZMdB6eXuJPgHTbem7h6au1XyD5",
  "key24": "5CzbbGYsrb3owwYyNp2QQW9E3LmHJmqiMYb1FFRnTRind3zXnAs5CesdwbLdrbxjGEdxsuaxfyys73wGmfUf7Aew"
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
