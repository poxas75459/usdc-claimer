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
    "yKmeX5dzaxvJZGrLQpXK7JQ6nmYk2HsAEFmV6TSPXyk1Jr44G5fKBCnKm1yVRmZeGP56VL3Xmd6UAA9vBUQBQzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9VKda4EJBn77Nu5qoqgFarNy3eLEhMQZ3pjKBTRG8HGtQT63u4AnBitExmX5BoRig8T45NnxWXXK45M4uCLMs",
  "key1": "5ZKAJTowaLq78dcuKFxAN2QwR2sgEBapKf2M314zPXcu7Ut5LwGLSFrp2ag95eXBGJq5uJUXSP3PX4ELEzJrNcHy",
  "key2": "4yCw7HmfCUfV1D9Ty9vypvBtrfMdQGgPJrsGNa6Yfvkx3UZjXc4zZ6o9iuzMntkMmaaAmZwUDhSiXyRNTxfkLN5m",
  "key3": "4Uck3LyFTyvxFtcct6gpK4kEy5xYxs58Dp5AJwWa4vrfUHxNudGPp31axYDobF187M6psTtDjMKgGojomphJQBqA",
  "key4": "faa7SqGgRUWhwHCfcjnC6N9nqZfEZHDV9EeKPMLjGBnmDUbXMStTrEjHTDufB8tSmD6XG8NxixjHgbEcqRaZbaS",
  "key5": "24QVwTiSEMNw8t3E76jdWQ12CiEVzZW5Pb2vPj7gSmaB7GKuUQY3xAM93pYAfvgrLVJhF7KJ7EgXJgvftjz8nZ2n",
  "key6": "5s1K35t4Swxy2dZSzQ3sqgAAiLWWzaUcgVgbfzzVf1dPfeu5knY3dp4CNnk473oyH6cZeWWcYF1mna8LxSAehuLr",
  "key7": "V41PyFuEF4cKnf6ovtdxdd9qjECNczjFdiQwAEH7SVjunYE2eVugFnqcafqErAwpPFGfvptEz6nCo4z1RuECByZ",
  "key8": "WNoS1GKsz15nFF3m9atRhXAwgENYEiWeX77yJrsNZUH7qugncB1Q61HwVKfBs2xbYTZxrovxKERmYZH9bF8qznR",
  "key9": "Pe9Pod4swnx5eKWXsXkpzcSeYxN36qaxyxDfxVAajED6HksURUxLgKxuY4Fy3BmDWHdiU8Q6iMcXCLcYcZAbeo2",
  "key10": "r7TzPqywXcQio6xPuiBqfAY6XDytc8soohY1Gk9ZuDNvryXuVkzeGgd9KdZDCu5WDcbqPod1xYc3PcjxSCAG2KH",
  "key11": "2F16gPsoEgALmwUoVNUuRy561VMMDkHwJLBrS85tij8PgrcBKLVrzTd4RyiLeynuP4iTypFUhnf7CEHjEuUZRWCV",
  "key12": "2YtCNM52BzpdrsNirfm28cvdLn8EscttLM23NVMYrR5hKCbWcR28KPFMi9ZvbZtkd47HMCWJR8Y4yWA5X8BpUTCr",
  "key13": "4sdtAmViUhArwN1TtMxuHRMEuWFmYLMUHiDFqCpVRC4vt7TooY2rjxCBGrCLoqjtJReyTAbHXesgwTpQtfewXj7b",
  "key14": "uqWudqotBJafqyFVWRU5iiBzoXwFES3CgLiRNCmfphWfr8B6ya21MSjVc3NNFjY1dv44qgVs72ug2aqCmSbDcuJ",
  "key15": "5MsRw71bxZ8sms3AzNKCpFgpmi1LTVFVutsXvxQRdmmVJJ947m79SYvfUeVqZ3PCPhKfYsqUs1M5ZDuCSF2ZjEaZ",
  "key16": "3YJshUW7ZPoJgC37ADLfH5QtPKDvjoKMZG2dL6m4iNZVKvcN597H1LVSeZgBuVUHvYpZ956e7eNbJPYQVH4dV9Be",
  "key17": "2nqiWuKXq9mm9wnBTQwjbbeXnqaLzk2vv1fTYxi7HzPen6dF37f7UQgkA7yDnNL2coVam7gZQHFc6Ga6nJGjJAk9",
  "key18": "4mjKUKQcwSbkZQ8F7MgTWtcqg464rynUsXBqwePw4UT7iJGmpMZSvLQkW11jgYa28zaY4LK2uBqQjJ5fEJGY3rhe",
  "key19": "4toXpUZGgi2v4t91XSFWXrU2MGfnC2ehP7eGiGKyVpJX6Ew2h1QMgLULuzYQVE2vFrE7xehnhZGgKxdD5rY9JFPf",
  "key20": "5FgZodaW49PJVoBcjKJAtf4pPCtMvaHHkzEMX3tgruqE3wL4MqsMsnAT8ajLzWFYnGBVfqXWPnfinNKgQK2GL5CC",
  "key21": "4AKa5NZmjCJZ9ydFxiUbg4FFLBdeoBFyaRF2hiWaniRa8TiVeR6q5EZAYLuG2H2Gb5Y8uMfh42XzwPnYYvuX9pMH",
  "key22": "4kaAq61fU6shJVAZAGB4ZnUcGgP3vZ8qLzeSHWpgn2LXYKrAV5dCz4PDaT1gAyped5fNjfR6KFM43BpCJyNKZ5Gt",
  "key23": "2ZqHCYKxqqSkPetRv6foa1Dcife4D3mxTDSwHN7DUhGx57MBXCNBHKkLaJ5RMGzzm2pE7eYQmZdFUd2ipY8Fdn1",
  "key24": "2UXZ2vdnWfsodyMjBM1SdFDNEgP6hVP66q9aov9C1bWVmQKFTB3kU7YAtx6s3su3X3xbkpXzSmR4wxEp8kZYynfp",
  "key25": "x3F63FXm4ANF5WiQ95tS2UYL2ZVVPZsmpWd2DCFu4MqLCJDP9hNw44Z43E131Arh8aJnKgNTuzJK5bzBHLRDeBa",
  "key26": "5qjGmc4m7UgJDEcfrGeHqSyz2Yb9of2eeuPCxxJZZpLx2w4HPoo8xYbJcVFR3ScQe4HsuyLZ5wCrp4pnvEf82qGk"
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
