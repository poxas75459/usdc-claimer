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
    "5B2ak91mfBxHUq5fW7M39FVzd4wG4Ps1XGoVtyDRtLr8FM8vzBnp6RshV9B9B2Zhx9e5LVg6TWyVxfik8zWbsf4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5wquyw3JFxG2J4Vm9aY27fu9crWEzRvxZds2XsWchknFN8X1EzE8TPjGy7La9cfssCStAQKjZuoiuAxV4A1Bbd",
  "key1": "429zbuEvR9tv3XcmvqYResFX8PEmvKGE9o4oEFtwXU2Kmm2LKWUQtf5WBnAFLbS7wcvW3pLHAPsrYFFjv9PF43EF",
  "key2": "5UEvx5egfZkviPRKofiZBv2rebak588dugXZ3H9VynLFBvBbtjJRcJ2DV4UokwRY3PYLrm6BbLQ44zh7mGrQhTA8",
  "key3": "2jYyWo4yHxqu398ujcwSbo3KEuKJDmJDBzZufTxNGmneaXRT8jUJFC3XbZPfKZg8QioB9ryTBuKXVsPkxGhRm8a5",
  "key4": "FA2Vmja2oFKaZDnXb4TpjztJdAxGvnrBfr5CXLmBvD3umGDKDJzV3za8jiDFzMRjD4tyGL4rqJoNiZG1upvWDem",
  "key5": "5Ap6msKMPfDiQvnRjj6adF1kmokxKBhBbgaGcXReZZqwiJcvUgdYdeSDwms1iuUkMNo8kBHiiMTULn8RXrBpt1vB",
  "key6": "2wJrDkSCwgTXGi3G74kpT3KEex2tuXLpbn7TapeearG8K7HpoGK4VSLURNLu8UWbptwM3qeeg1UkhX3W5aVpchs1",
  "key7": "7VCpahURL33y632iJqgHQJ7HogQCw4ZD1AhN8BgMh54kscGo9RbnDebFZM5xECDxiEM1qinkjdwiFK77Tw3t3PV",
  "key8": "5H9veXGNNTXP6WfVrZSwqxUmsJdqXVNeqpA6j1P8kT6BYXDU1PhCGkzcKvhNXxnZtHqoPBdYyTU2Rid1fiEVHVbG",
  "key9": "39Ng5tpbtc2JVTEUsi3oKMMAws4pPoXvn472h2btZmYPvf3XsLMx8psVMMCE1EDsQeSYjXUmrWmdLZVj8BiHrBzy",
  "key10": "2rPowmbdLmhao8QfyP646wbfRoHMYxT5ubnpaKQNoyEHUfmhWoJwvaSuFcKVJzPcuDr2VeQhbkAsU2TqzfS7NZFG",
  "key11": "3fxHuPnQaWxw1wZGG9Lo5ZvfdXb1kXngmBgnooHpxZAypexRZiY3W3PLTxL9iQFjViYEqoXAhBLUFriRKxHkWmzY",
  "key12": "3xK4CzrkpJo7SDuoqCBar6VXdQPEXUT7obsYZwPUGJ9ep3pBfTNNikTZyK5bGCFt7gpcMTzkzXdTJU5Pn6LXzvmq",
  "key13": "59a1mGcDK7Xr7SqL3EF9iYBnugTAcB2soruBoHvcTVUZJWGjuf2wdVTNyHykdYhMMU5u12cnrvEXs6tHKEEtARGA",
  "key14": "4DUGj8M8NsTdxxSxqXt2XP6gMEK4CkhchAZ2srCcg7CinMQ8QSBkbNDMbWGpxubVDNi7euja1F1Gv6Cne2JCbHgr",
  "key15": "3tuPo4rmauTreJrWyZNXZmXFivFvrXKAa4hxrf234BQd3C3SVrc7dsWUkKVU8Nw4KvYTXWgp3jk6FhKUvEZmsQSP",
  "key16": "4EU4fBFgSuZQVodiR3584MuAAeAAzeM67iHqs44yYHzxK5zE3PvuEi5oThJDgQSMpLnBs9Ae9gVWRopjTHXVVRQq",
  "key17": "1yfhh767ttEc7gtonc2yxCL54De9imsUPyYjuBMFqYDNHMf7255EbWUjXLoYwht1eeTEv3QwVjVUL4K9jf1q1bf",
  "key18": "4KxaHZoTM3y3dM7txmRrvTjC1BJxaMdTYQjQ11C2Ei2h3XtRnmKQenWmeqBKA8gooSKCCYLGP8HtuGejCcWFLBtA",
  "key19": "3dMvtw1R92SHTdhDTVn2bRHZu1Z1fomJdMEVfMKk6HLZcoQ9HWqvinRyXBJx1DbEZUG3wbckPmERRt4A3F876jua",
  "key20": "5orUM3fHHuDKphWNCAcGe4LUKUMjscjq7f3QPNwrZouGc7xFvvkkKEgFhGz6QA7NSrJmgKFctmihP4ZQxiWWxgST",
  "key21": "5fYiYmD7mAemxtY7wp2KzaGV59s1Z7BNtNdkRpmZmi1dMXZbdMb3U3145AnzvZ9uC3TgAvXWtwmDrCGTKFKyTnM1",
  "key22": "2NnkG193UuzedcWK7dfGAPuDpBB1sXMbxUMKPq32Xmn8GUXSEzYfcYNFLVXjoaPSJji9bMA9rb12NraBmFfjBoPp",
  "key23": "6BrdduPCxkvSrLpcZXBiLrZMMuUuDGe5UEwYh57ufez3dSKA5AKzkY4S9ESN8poz6QF3UYa1uTyGh5MHnbyZBbv",
  "key24": "25197NP39tchePFdJqUjChHAECEQxHfXy3n3PGtohzWq4YwAmFsUnNarU1vbYtP2mqWZ1Jrxz2Cyh1nB5GLLobKy",
  "key25": "FFuyQP5cJCQiBjQJBP91QHH2qm1DhH6HY81Z24vJGjJNdShfQWUH9QP5s26bafK2qoFr5ybsRLD99zGsxvqX5hJ",
  "key26": "4rmw1zLqeeWFyPMK72HGPW8uDMYiS8Rc77XRsAr3jKotHajzzHZeGWYaMeHj6XvTtgUQK3MVP7dvupH1TPVa5CxC",
  "key27": "2i3VivpGWr9KarRLNM8HnG9qGAnZJ9S9wi56t7CtiveCVhxQ5wNhSe1onhWMTAy722iqDYoEvVZUL2LedftS3Kih",
  "key28": "2FYApn3FPANXqgG8gyt28zNtvwjpnuwynHQ9Ap9C7ksbtEqDbz684yYe8hKtD127aWDEcXGopQX95XPd87jMmpua",
  "key29": "2sM9KdrFqwMdrNbYNDrz8vsVEUqT7uRjGpyfJKDMzqVhDertZCwzjjMg7RGJuV3GRjmLfNZf6bpsoqTaCaEdAyJ5",
  "key30": "5kX5biQV3FKZEM8J3qx6SuSgW6qnKmKPVHeTSTpYCCyqTDbE2HE2L1PyLmjtfLnCW1BMhDm9hBazsuFgT45BaxqZ",
  "key31": "5wCQTyDVeVN4SWAmKTXovhuHtQ2XrJRbzynJQJMAzrQqifUGF4EoaZwGbMMcs1wYS4Dc9UvpMe2LWYKf2rjj7DV2",
  "key32": "2nUi7M2GuuDR3717oe3egyEuTuV451dFYoFwEHhdTSTYHE71j4sgamFwWwLDHEer2oehb49ihMK7ybbfovwLFtv",
  "key33": "p9G7QRqxMGNSk3ip8biiv3m67ENsKJtCQb58Cb4QU2hYXcZJG3YqvDWVn16wMwmXQEjhLqgQoYxXDfs3K4a2wBX",
  "key34": "5CcSmeE7SVUP6ifyJeASRatq6YJxiQXERpJzYhyn1p14Xze7G3LDvMHuTpH6zg3NWafxYnW7SFLB1FgSSt7CaNwv",
  "key35": "2dPGY167fZimZLbYYYCzLV26dmVmZMf4PZa6cQznvn4xPjUWGdRe51ryRhbkogCaMXsyHs96f7BwzFdLafvbZRPf",
  "key36": "2XPHVdAvfjRTNNCXijRFrtLLhe9ZGixzsovTNBtgvWvDfv7fxwge4eXdy692Hik5LdAR1iGigGkGag9Fwh8p3VRT",
  "key37": "3wPqFcoQm7ZxwqaduGpXskvg6kBBa7K5P9GadF1ooh2zPryjaJnfQqKWJQJKbDiB6dhPDrpc4752QgQEqh9RGtGu",
  "key38": "5cDCdkAaCG2mZ7HakqQqbJbWaY4qxPXSXe6AY1uTMGk43xHk5JewEuj3h2sHbF6EpeYZNShzHAdSFbjpGqJ3JNwz",
  "key39": "2JJGHTNUg2UkokmTVUUgS23E4EL9NJT21mwSbMEJXMmMfvJZSGcv79gkkEPYmPBDQJLNfLaEATevV5w5vfvjZNtw",
  "key40": "55qNCazSFmQH65uviT9nFeCkYgY2sV4BZLK39BbrBkpkyNsJLQgcWhjE3JHiCqtnycBsLz8gkpJwxUFiFiSzAuua",
  "key41": "3bHf7DiJzoeW113wZ2uo6HPaydrGQLFDVyNinMrkiPCYJZJTsS2tXiwtZhoNpjUroGpeSofBsawFe41MdsuUv8WF",
  "key42": "uvq5wqeNEqS36hW65KwuFY7y5aotzktX17QjVsTJQ6bNioEMzL91nunk1wPHKB872XS4FHqzH2BqnvUjY6kmbX6",
  "key43": "4xFDSDDywj6vB1hCGs5SGMYgv3dady6e4q6kvvpygjQH15oxqFaxkKZsHP9UptLgh799LsCA6Yn5bHEDkz8TE3C3",
  "key44": "54avngNPsYJCUr4Jmk61rq5DgJJWG4F25B9nKtqSXKNHU7mzPNLvSvS9gjvDpKFVpoy7Mzx9ZqP82dRYZPCocaKA",
  "key45": "4aJqn9df9q9r17prv4np33Dp5EnqrK7wKvZaTEeG97eRTCrWjUmpp8xbaZ6tEdgyVyLj1qztTdwdznCows96MYwD",
  "key46": "5igEuTYCKojWUsvdA47A7dSXesWB2qSfBNudKSxBdGAb5Bdx18jooP5cjvRp1BMLTkXdRABaeDmSwD5cTes9mH5Q"
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
