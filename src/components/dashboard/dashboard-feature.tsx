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
    "BZyaJjUTWS4DaE7z7vzHTJzE5gegfca3W4evn3zvYjCXQxFbt1isotvK73K3w9W6jXwGR8NHjpsoYUb9tcawNB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woCUuZYjjaEbrMvckTbnuGonhkUZLNYLJFYh2RDVPs4yCY9CqcuRGhf82QeSWXtCr8KGBopv3XFs328bMUsRRzB",
  "key1": "3mizRsiG3rAKBTVsjEteDYHxq1XjTJGCEqRDjWAJcGfVkGQWyMMw6rRUTZmZrcVEA9WfLcBgvsxS4wuXYAKjVPmQ",
  "key2": "7vrqi8Mo9S7qFPLsyoj2mHH34ECztrUJV7A3bhwukcKR8E6EpWme6BTKNpQ5j2cV4W97pp3o85kjJhgbs8dqTbf",
  "key3": "3PCdyQUsk8EP3ivV94gNqTZWjXENHWgjgDAGaz4fwj3g9GVomyQfgBFkrcYPCbSVQG7v1YGf4VvoBx5DnsrZkqwR",
  "key4": "2EoiQNCYkCwuiAGzEpXVeyXtzGzoveU3boaJuY3uss4nWJ5vPEdQ9KLPdEcabZZQHkFWJVxr61dpQPPpwRxgMTqu",
  "key5": "aqnVfMhRUGPeVv9Hs85L7afKshkwi8LQ1ydQfyjuowQ9WcBz7rVeriGL2dX3JxScT4tMBe8Xh5AGrudi2wZvj8Z",
  "key6": "4vEmyPyBnvaFFx5SorktjiSoU1s3Y46xHxQ8B4pLbafCCRZPLgPMBGctdbUR62QnKw91uG345L9vM4ATddUarLq5",
  "key7": "5LvHGY11gpFoa2dAtaKQ25E4pWR8u6Ay4GHZQMsQbngb6yWuadPJb14jLEKNmpJmkSA44waiLYJ4pGQvmETCgT7A",
  "key8": "3Y5RkPwukufTRozDwXr13Cdum1uRDQ1DoA5BGsiZMQHR2pBzw4ttMsM42U4DC6p6By1HwVTDguknSBdzARisGv97",
  "key9": "2Jfw53cg1oDkjuEVfnR1wrrtyybqSaurnseqPE4se4wruiuivZNHr7HeoAXDbjMy8qdBL9q2rnEjqYFr72vytaPX",
  "key10": "366NsMcRdSjkPLHaYLBQkv5wzXUEumwHQWnR7xW6vh7fAA3yS6XdDy44AgbXabq4YWPrvTT2gzS8uo7Ji8VsawY2",
  "key11": "jXL8HeG7unphGh3NoU4KMdsvhhHSgx6DiHNsJtYvWwE7Ey9vyhZkpgHtsFi4bcMdKgXgr7Mnq7Ymh9oER3dPjYi",
  "key12": "3hHtnKjWvbbSV11WbeQ86p4Z27gkCGK9rF3rBWkyMPKqf6ixx9tFjBtsPB6nyg1oqkASpVmtzGPWoA9cuZUk8avM",
  "key13": "4XFS2GymbviC3TRKEoQQ2EK9TRszja8gKtUfZoXBm9o8fqkcdyCNP1mefiF8vnx8fyHeLnS6dKiZpH2gXAuQPz36",
  "key14": "NEzGCWoJdgSinUxkEBy311urHXeTzPgu83srLwwFh1vrugtRiMHdkz55JuPaHwEkS2kXJbM6TXv8MRhoTUZrFhD",
  "key15": "3xbUQ7n6Nb5WtMjH18ibJoUvfPsSZEQPm8SC1MDm7V1Jbz4ihLeJv3vKT8YgJfFPTpGCBQDwUYe9ac5FfnWCvTt",
  "key16": "92apf3poivV51nJ7GUonLX78iGSjM7wL1q2oxtURQdzJZ6uASkZB3KQFdfKPdRpLL9w2fsCQ77JZ28xVCRoz4a5",
  "key17": "4s3YoFtB6k23GVvYZ4yaPqmvNJo2nc92K3E7kC5wyFd72Zs5xcT1FXaMPdFspkcAorY9kWE7FtGXQB8aUKdCx62X",
  "key18": "4mvRnnJM7Afhp4HSHwkt5mkhTGiof9vsWkTLt5vPY14NAhTuX8tJKxSDV3ErYrHqmKxCrLNEfCT9Vc4GcXEu5ydM",
  "key19": "52H5nwaK5kQRDki3JSnqob76UeV5ukTMnpivwKskMFyaaANUkEyU8jvVfQvC4eehMH8Te2brEMPfXCW1ZhEtZFvr",
  "key20": "49xVSGEFweF5AqkgfdC9wc6CXcGH3BVNJz2YLG8PumYdngUnWY1AddvcSHc6CPPQDc8fgZcShWU8RnYUr55Mb7Y4",
  "key21": "4po7MLyhVv6bkshuP5p1kTUhC5Gro8tjF5qu6FRSmZF3YvmyXTqb5dgJFuFYZ1Zub7jiAESbW7yRAHMvrESpin5Y",
  "key22": "5PveJ3gYeWiT9YedpDBp2UQpNx3qje9f5a5Ckk3nw4PbgrBScHDKf4PYyM5eaWuurVt1GcZ7Y9NEGG6qCXUR9osH",
  "key23": "5we8jWAy6gPNF3SkAsVPNAnXLH3sTqcrWkGiYugkrhG7jqrAgagkfj8C29ezQzbsjFfGdPQo2BstwJ2gLVyoDVJM",
  "key24": "5L5ESQTMHfqhkd21X3qZrbVTgvXEsM9W7HLJM4GHA2jv3KfESGvDKEei1TDXfR1nYMjELW1oVXPkBaBL41HCM4vu",
  "key25": "3J8ZaXwqSUoe8TbocLrCTjtmZqaFkE3XEGSCAUoyfJRoFeBFKvA9nvKXFhR9Ya2PFB89AT4nDdoJ5nfcTYXusA4g",
  "key26": "47xTECEaaLiE6nF4eXHDjRHdzuFdVEsKEhJqtGvE1f75nGtxbSFfY2x63PgPE7cwaNAr7hv7tcKNproNDoXxtwyr",
  "key27": "5dkbrN1UXvt7nwAWFfXLeBzYrdJkBaJyuAcKaZz32gmNAiWXrfZX2TiBzLMXgr7tq6QVyGCtSBXSq3Ap3EPfL9zC",
  "key28": "5iFZwWjxBvEN1Xf2hxLRMQjX1q37M8X35ZUv8TyjZUYEUNEdgFj9Z3WUA9WW17CKnKHQ54UkRxV8hShRrnomNGnU",
  "key29": "2NqgGyyg3Rad5gMtudLF7fauP6bLhHTKQUBkUKdVkRJCMQpLyjPHcFTi7vNJA6jTXfzmSiB3ThzzUyHVxnQqd1r",
  "key30": "27fhe3Bfq9SBJHG6dYkvdY5RVFpZ81RND815BrjW8PXt1XBR5CLxXcmeshR2ZCPGndWeshHh2G7mLsXpkSc3NrfB"
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
