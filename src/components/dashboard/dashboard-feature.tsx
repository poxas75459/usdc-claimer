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
    "2EYnasbLY4zHdyX4JFwLwSxCsiWXxN6ZzJ55S1TBcpHeBtg5QMu3T46L9tovyagaURngbeEjh6GU8PEVHuEsByCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4563MiQpFU4wUPeHGBEyZPz4T86XEx8TgnvUYDWnkWHtuvPYUZxFbB3Nwn2SirayJdkaH4VgckFP8JyHDNrCnccy",
  "key1": "4yaHHg3wDQAf96wcuBcLQ77bAYuLdmxmThhsrBdrtNfo7mDayPLD3VgM73BYDKgKEvHMPFoWWfRqamrWdHxSxJ9Y",
  "key2": "4Ytjd7U4F8FPwYVaLd62ydUVfUs4V8tPYTQD7p1pkVLDnNvrT1bDQSTYa2LHoSDF2S1c7uevCFQ2Hbh6WtcZFPQ2",
  "key3": "3tggYSqV61MVYj83H4qviomhiXBQDanLNNorJk1tNdbNaLBtVBdmkK6CpjPwnkFtbFeu5HJzHQNRJvX78CwgytTY",
  "key4": "3shBaHi8MUbMRFmXQ3Eety1bH4MTrF7zAkcWDPynzFEsUVR5GjQwaLhdaJqRBtURCVg8t1dBXRywu19x41WkEsg4",
  "key5": "4iLN92yHuLfkNdkof7uLeSTgU2azGUR7tiWnyXPfhuCzYRscXPqWFLYsLdi83JHbmFpZkMNAaAMgbx2Wh9azUEgD",
  "key6": "2vWCPz74Zees2oWVtnVGcuUZWWkBZbebvk9h8YofsdvBEjRyRHGENJf31K9XkpXokALVVfo2ZtFuT8d5CFQ7Nn6i",
  "key7": "3NDVyzbKtPH7kPyLmbWoX8K3ZhDe34mbzEJ5CFyqFB3QrvQQNAJwt1BLstibVac3ZyL1XcmbDmExfa58ZN3pB7PR",
  "key8": "3wMqqEap7D1swgFbw6dYRPH2LRTosuWvEM5HcQLFmirrSfvEqBNDAgc1YkqFoxpaLUyaMvLszvQWWJ3Vva8DKBza",
  "key9": "5vNXv45oVHBNMPZr5XnwLc1SaagPA4BAt8qVeKtsVv1Db3mwybG6WKbbaKHGAiuNBBbeiTzY3VjRhKyJXmcLrf18",
  "key10": "SUVfK5rq9QC2DAtW5D38LSe2hMUJNwbppvJVFcBm5BhupBtkNVmq5hPKn1eQmsjvcVgr7iFuAbqrSUEesv8Th4M",
  "key11": "4911tvWUjw3fDEg2FxXgDrf8pxtzysMfsVCdqPUh8o56ZDJbD3PiHrt6RZ5qgbgZ54tC5VDUKNu9B2jz7tSCJP1L",
  "key12": "3uLMTacETH3gJz9pMgPG6k9u3epY8TuwwuHa25M2N13hajenvdz66aTZQSHoWyfSvk81DXjjDsD9KktGim3HowPR",
  "key13": "GFReNfVxvJSUE2nbUb64VPZVWLqeNBrsKNYK4dciYvVcx4wyTWjXHgNjR9fNXEWG1brxDbDRdb3HFeqRt7p5PgN",
  "key14": "2tjesjsE4PvK7cTSiexrSmVxkrhu78f4q6fkY2LPkHV4idAKLUMoea8RwyEkNT3bgS77J5XjuR31CTf5jyWnbQjv",
  "key15": "5SbfWhKEmaP9jyCdBwrhaZGnENiJ7ywm8Q1Sdzwvh3rUdTfvSdvZp3oaqavhvc19RSkPSJw1XQWX5CMm679SNqv9",
  "key16": "rwRTnMnHbWbdyxnh8eA4snPgZFHgAXjFPT8LxTWgyPTUq3N8kvq8KRhPfAKYK8TZSN1cVm79wH9aN4Nu7F6iE6k",
  "key17": "4YHEjmYSKDajPNouZSkgp91qkoRs4xVdjAr8it3dwodeG5mEhr2LMVByQrY7wT91icVMnAsogTKCDPGWZr9FphWK",
  "key18": "3ubHhiAmmbXfNjBZV8yt91rnHskKkfrqVzjDMbKvmUSaE4BzfedwzuHaSiogNXgFG6eKExfH6KLKCkzZYji3hBov",
  "key19": "4aZfQs54yzC8obZJLNqSBhC7oNUESnrYZjuHSNQhcg2miZz9JUJ2dJQ4a1y3twUiUgSicL56d3GAei17UYUmppUh",
  "key20": "5auuZ4uWDkS8ZnpvkW4F9te1MTDSCCXsn8T31UposZfdzBTkjBkpyBSMYABm17EEnDnMEQSdbg6ZCUFBGm89ThPa",
  "key21": "56oVYdYu5pU5prt798z8mnkATqRSdk2nmLt6No8jZL17wqxnivJbxCt6VTMM5MeBAXPJWv4eDKZgCEDDhTAVpkCV",
  "key22": "5CQ85vbRyrUZqt69ntRmSkf2QT85gxpzpJ8apz6qLSRpR6oBsoB4w8XTqrjcJHYmYF5Zs2F2NAWw8JXVAmxaJfCs",
  "key23": "3PBLUVoijDzuNzZSQbMN5TNrZR8NX32CC9BS4KhUsusszESsbGXFK2sy8nLjBwag66gWonrtGvrX6DSv45nVyFB4",
  "key24": "5r44aq3puQRXP1nNmmqNgJzpZRouXqzrJjJNycgqnHqzWZNyaX9xcFQtCEPbAxKZ1u9yurwzHCuHz38eu1AXnbm7",
  "key25": "5tjd9eUawexwHW8rAPaW6oEtQsePGEckEoVfjPbdnijNdnx9e4dxa8T8udxsHTEyNZRu2M31WVSkKa3wGD7d9tHA",
  "key26": "23dY6kLNC1G8BCX1dBAC8uaQ3u3t7aLzRdxRBkCLn17GvrbDLLJjRebPgnrp8GjFz2Ugy1dX5GjNL5P8E8v3xNhn",
  "key27": "WzJyrYbRViwvwNNMCUsyeq3AwVwoRobCjmYB4Xpk9moz4WnD1hkzbkMu7gzLihncyzqcBDqFuujt3Bzz6VQ9Njg",
  "key28": "5JAw3DLHD4yxBJp27FadDVxs3wGHNzV9HRsSW6ek5cm7gjgZYtPy93igt53JJSWHaxB9b2FkptKJRxtPxt4wzzMC",
  "key29": "3JbheiDdrt5WngwnetfT5rSp5LAwN7gJk2ybYnmVdEWu2Y7SSki4SypaMsbAcxAXxb1fposS4U85KEghXqMCnRnm",
  "key30": "3dth5e4Tt6zxXuzhr5tPhxBPkjAdeM1czEzt9EkD33UsA3VfZzKCfuCvEnvtkBJRryGi5xy4pioNifQb4fxiaBjr",
  "key31": "2rYmqKPZpXysfAqLRcxDN587uwyEQejAcserGHyzGFD1bET1YQZuf26RwxZhBuyUpufiWKaxFqDXYbWoyKHc6UU",
  "key32": "2SjFip4LGsG66Q1BGcCsWK6KJF5J7oh65pa7AQSWeN1qtWYYWwjtLtr2AEza5kUyhNvEXfMw6cHK7XWugXxmnVnV",
  "key33": "3WtTb3V6Yk9Q3oSqJrMgFoHHQDFXP63NaqsCkjbzSYAJLw2q9D3pL3fsMfLbWF9ooRx7btLioXoamf78hM1BhE3U",
  "key34": "1ZS5acfeH29gDiM3Cd3h3U7LKKNjuvw9vrGvEmXZXxQUnMMkfRAyhoqMDUeVLKGDESan785GKLo3FSvVbLQJik9",
  "key35": "4Eu2uJpQAB3xN5jaUon3jkYaH2Zfg4AmiJfZCv5dy3dczoPYXMywxQv5KmKJ3XsUPP1KePFkkhKHNvNMMwz2ug5u",
  "key36": "BZL6vXKriRjs6zgYyHjdmvU9sPRqXzS5L3JKt4v2DAKmysFR5ZKpLXXJYkMaAsCdE4N3D1LGT6oxyz87dGbrCdT",
  "key37": "532B9fRUdpcg4cqW8szpSoiYxKnTzpDc4fkhfy8anAqdbJgBCH5fgKXsP4K7L914TzwxiJN8Uw9AJZhP6kFwEJvQ",
  "key38": "2YjMhEdRsW7uMbY7fw3meVmNRFgfUChjrU6znRkpkD2JCga26VFE5YVqMfq92QToWWPtC9NFXuRCs1p1TWeQkAsF",
  "key39": "2n4WeYhUv1q2cW8VWaSM54bMVdURgFrSFPH7WGEmTN2CAUJTChV1xdXVxtEeqEa8JTewUcM3VQVSGakstBo8bCWA",
  "key40": "3JXhQTjjMRD7dcdpJMmqt6pNoEuWQRg7wqRLfnctWk4svMMqjvYKxQJu4phchsRZ4h1rKbeAZ2cwGrk2g2TMpACp",
  "key41": "642Eaugwopo4DaAAMqYH8oJD9vd6VFB3oXGFptmQCmjfeC2HZWsPQEp5maZ6prpJcvwX5W1hgD1hmKvSRncU7CTa",
  "key42": "4AtTvGnjLnDQAkpmDTqr4hUeyB6Fa6k5Q2iWqW1eVhTuZ55cVx6E5UaUpyDu4CgcEbCWSWwMJcKBiQzCM1Ba2mLU",
  "key43": "4ZK7AzJyKL3bzeVWw6fuRJnFBm1XqGnafVyw219jXNcgXKjbbRnm8tvzqumU92X1ygeHPoA8JzjW5Sjor8PK1uiy",
  "key44": "3q5GioteibhNmL5NkX2mxmMU3F6Xu3FyTcXbocGQLPoZ62RheeTVe69sLZBxocjV8mch7xKR2hefacfezKmDM6ML"
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
