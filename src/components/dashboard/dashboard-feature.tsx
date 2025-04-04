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
    "3UQhoE7ukU66t8Tau9GsjWv65BoT5dTSNDqPNiLvX8iyjmMZtg9YjnEtRGPAwUErinLzZAR7fc7YZE2wGCG78Zrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tF6WzMWANzXcaaidopSmrnfJkd8af2UPbiPuoqJRrzpJPCxRcC7PUVMny7QrrEkosfcSxj43SmoNBh5YHk48UXm",
  "key1": "515zT9fjiyuuDupBicwomHA916qXQAzZs6c8HgvZqxi4kteZxqyFxPQkNJJvDcEJV1uiEZxxYGFyX3AJv9dQuh8R",
  "key2": "3z2DZprc67w8qsXehKG6F8msDMBpznbM7BFU7iYJT3zbFVhUpNR1fMtnehURSFsbxLSqNv8Hu5uUZJkLJcfvG4fR",
  "key3": "4oHVqnqBMrWUfQ6JNiWFf32gRRMXesgVhH7UvNJtv9XezSuFt9tbrvi5wcHAJRU4vqgrYWSiUf81cib9zv1QTa3V",
  "key4": "5aBrSQR52hKJodW98mYioGpwhuFqrzMetBMUSPWhNAhUKJP1tjjMZxBPGn3X4CfGhyoLaVTng9DPjjtimTjyqAzv",
  "key5": "5LDsXgwKwjUSrDyULa218gUzeuQxLDFJFGiT7dnQsa9oh4AZgVfhWVdCqVawJqcBVDDSdKz89Px3nM5iw8HmFyKE",
  "key6": "7HVby8yT3jK7Ae7M4xXNuT73JtSCy8oT9RGi2v8q375mWuuYRdmLFCdn4cJnLFkxTehQro9ZURYoC2TFaCwYYYQ",
  "key7": "3r1QvgLUo3DJZiG4twFErcG6hovpSsUzNxjUEfWqEcASLf1FgrVonawXUo8ZeMRAKaRCVepPEPrGjuKXFJr9DDvE",
  "key8": "E9YesWeBmFnqXtsiv3DHbKe5emNXZsD3t9QYaE52UFD2L2kg3GvRCS5grc9odgLHgrtrf1GB5sye4FvA6TyL6sM",
  "key9": "3ZjV5E6Q6GRs6eUxcvDGVo4BrzAy4NidUfeNL5EVJeVQraHMCEFzSA339rbd2crHM7tMLYxEMegy1WBdcZ2jJgri",
  "key10": "J7vdk6938aFKyV1SrDQSktVnP1cUyjiXkHDV2qTMsJhbzPTT5Uxt7ZqsMxp13U44x5G3QUzfPRtit99nQrExJym",
  "key11": "3HfszPe4Tw2aE5jitoQPzgUGvFAv7uLcrcmpunj4gHsx9tUUzSmsQwMjHZ29imyjiKa19iN3FAtS2VH1p12hU59Y",
  "key12": "3cBqUTqqGvbsm5vZVJCtwEbbnGWRcrK9cySDDreFqTmnJt72unE9xhXJqsiDXAGFJmDz35ehNPDjyKdvtgJZJyaH",
  "key13": "pEanSn7eGW4CPfA6s9hpnPT4GxYbh5yKDB4Le6QVSrg9uDraCzxh2TrhNNZ3pLgqFfbT9GPvq3bKPevdeHAFrRa",
  "key14": "HAYk2dBmLVD9MDMYUJv2afE9QxpthQ4FrFU1YoaxNMdAUut3hJoTChwRTToLB6cdjhYzkTFL2xfubpfNycubgBe",
  "key15": "szSWqpp4x53h2hDAS9k1BVppAVgUNTzBVy58FW3ibhiQ5vZgPXbX6U3eozZFBmk2KfC7gfCr68jgqFDWSn5jBk6",
  "key16": "bgx7ZqPi5bpLtaToY9ABvbeZMPt9z4afQV6XBRHRqf2ShMh6x1XQ8JzrQptX2T8mNUsDMwQp2miJZBLhddZcvN4",
  "key17": "5i29U15GWqQirRW4q9pd6zMbqpK2Us8QCUsRvGSWdYKYetUyyJyKm4vB9Yvg4uAshBEtnYcSK7MobA3LA7LApAZY",
  "key18": "3BUPRT2WAv5W7KRDP8oCTTgHTJaJUPmaEajC6JddCHYB8Uebvjooz4pmpDZ1HFkyAjRvbLnG4DzWSXCCPUDsGQnq",
  "key19": "JYpBZqxG7U2yHxbgkJFjachHRjz4AjG8fLGnLcZ1tJkSP5wRo3eY7Ap4LE6dKb1LztCQHhkMSRr1bi5cAsfvPYo",
  "key20": "47jx6r6VsAmbkZfokXH9EmGvRWNnYRXD6mJjmzCG1xqSe8gZxzZJGFvQk5rqxE1AGw2DCNSFMSFgZsmtqsCD3QkW",
  "key21": "5CXn9pwgoYejJ6ubV1h3MpGLpfqJjUVdv61GYgRS7UbzYYLAdhpbtduAcW5Hs61hrhM22kJQT86Rzhipz1By8o5e",
  "key22": "2WjJUyi764R3Nj8H2FPhpbJLJS47nn4qB26n7ZxygY7ajLJKeoXv4tWMjLNszd9wDP5wAm7DNNSn5jycwv5Mtafy",
  "key23": "zWWPderGKJtY2yfEjf8hCBWfn653vMyAJ8QtruHzMza41idKcADWvLtgyBaC9xs9d5w4Mmd7uNo4RzY55634Mhq",
  "key24": "2yi6kdJe8v89uz14EoYPEMpHnYkVGjsMcdYPRk2VwJGshLZF2iZCWSFPZWeDyYjA7XbZvr9FbtMw7BL18vV99K8M",
  "key25": "4xFmNpBvLCwTiKTriGVX4y2rYqfm68v29vkEyzcECKeuyqZh8rWhsT7BzK8QdNQFc7bYNgwgmNCTtKRazvzh5bi5",
  "key26": "5ojpS1jJxhKNhdggecuPNWZN8BpQy4dAGZkaZuLYnj13deSciEn3mEbMRvKQkapHxmgyUFJ3FfW3ycyL9HszCDJB",
  "key27": "B5JBCrGfdAorndRQSx7e4LmeN5KFaHHJKf1gDBjA6BAgPGqnVVjNqviJbrBenxFs13uDZ1gr6H9fm2NB9w7VgEc",
  "key28": "4LdyCvzTkXDWH9e8UhLGUH6ij5Lqg5mEKvNNPqXnc6zAh9g2TB9yPSZExiUsu9QpRQWksJDGE9e3pHjcChTBpaxz",
  "key29": "4D68666maUtYU7gVac1PzpXiKpuaabAXnTgv6BvfxV9EkfVLXJoQ1k4uYhgf1a8LX9HGhJXVWQUoan3htLmzaw2B",
  "key30": "yfEv6bge8x6HwYByfv3fj9T6YsxALqyNcGKSgKwKZu5Fpj4ffLAJBcHn28GiRJuTCMjJ38Gy2VcXfSPWCLZbuBb",
  "key31": "3dT7CtUXd35x3bBw2uHCLUQgZtBWqwbQGexBBy8Sk1rWy5ZFKoco1iDXt49Vub2mZSzMrk8MAHzsN62HwDF2bdqF",
  "key32": "veBvJdkwbAJXHGRreNHmvWfEbe2VkxPhJ1GaqVd1nw93EvZjDi7JS2KTirpXDGPQNst7BrwGhshKSCtmigVTT64",
  "key33": "5KHymyfPftkR3AtM689fDn9DsWn6eGJnxaJcDRTnKUxtoMRsH9V9YhYR1vjswiJTmngvGARe5fbgtZvtZKs8Hxp9",
  "key34": "2bXNfF7Yb5G8YUeWrXUByn4TNLDSLvbb1Rvwd9PbWmVC2MjqWGxzafRz2k6niwJjwueGfgBnEuC5uFL5Hk2FMsQo",
  "key35": "5qfENSz9TLBDCqS4JUjqK8n9j17HaA7Adzx3PjzYr6tZuPgMcRu7f3m5PJ6XHUQkY4othyqQiZ7SXM5D8aDWjWdM"
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
