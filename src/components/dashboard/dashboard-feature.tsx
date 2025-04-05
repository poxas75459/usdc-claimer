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
    "3W5NxPyMDdtPsedAjgBi42JhkHEwbnjrx6J5LmXtSEHt2RsrcgTS54Xo7SQw9PShNs8m5rMx1uxUn1uBPwmYY7DE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLm7sFM3dKwdxik7FgafZLYKDjLtNXhzxPJqjZayidsM4PoxUJ2uubZH4fWxLEcU49pZztLtptAFSdoCcyYSfF1",
  "key1": "2CfSUdLuTv5Xpa8e3Ah8XqyJsf9LCz87MJTLJ7wjiaquED4GMbirTk2SBevmUGmvVFz1TmMpgFdDaz3WX6smQwR",
  "key2": "3GSE97h9jUd1Z8JFM7PTmPtSBKQcm3vStXUdJ8Rm9o5fsJjbfEV1g4ad7QcH968gyib9LFsseBiPYnxZBchkFQoM",
  "key3": "4MgxoVvmQDNPSRSLZZFRYVDbwrmbMnquYg3s1kLHyewacMBwB2XbPenBarx75NFhsckg3Yp8Af68utDYLrVkGE4j",
  "key4": "5nzzjFi3So5NrNQtp6A5UqQNKHXarxDRv74NbgpGgEdZkpwVwKVJYBaaESr3oDDgcqBMo3QQit7et9ojVbPezhkp",
  "key5": "3MUxLwzVgYEHkPaScgLKnwVDx6hLYiFwhS3xnQjSCbeHPxySDxMzEy1Fjar3RyHxvGnoUvtDmYf1UQNRAJbf7vcQ",
  "key6": "5h8R75oJxr3kM1tKjcU3sWhcevGNPM1dejSfmSa6aitnJLnMUBJhPRSpje7JYg9TNmmf4EEzt8eHGvpCLnBmWnYT",
  "key7": "59t2YssED3KP9Yi4HPKWd1JXNtLKnKuCskBwrkpLo75oiJM2dhg9ZUqfLLALQmGp8MeDZbwRBd3QEk7GfRFTEN6e",
  "key8": "5TdU93HhpbrkNH9SvS2hBw5SKUn2pXJFnrUdC2Szf9jaHEqUR4BNRWUDDxuuDB6GuS3spUY8pjctqZa1NVTtj8DZ",
  "key9": "2boqqF3x2jyKEbNXdhiuqbtudvb7jqnorM8rSb1KsmsevQVnGbPtncFMQMkGbwRDE1d8TueDEC8JgqNj1EWBKzee",
  "key10": "BAQyAYTPjp9E9pbi7NWUjr98BfRg9orCahzPqBR6SPXhwms5R9poLN8mgzVmS5dzNWUAp5YyJ9VMHGXQhD3XAr8",
  "key11": "CoYBYztJ1pxvoB9T2ey8SPLXBrPYoNox1SD3MWwi7S5Lk9jmX9US2RwMLo9CNLd6wdjKvMxLhdEWDT4DrBNUiWj",
  "key12": "4H5P2xQ17wvwbFvoB4m5rKgpR3EpgPyRvSaRnK1DWQ1hqtqRaCorUhdgkqmiGxUMpU3xyBYxQ3ZjPvDeshhrAyJV",
  "key13": "55u9ppc2Zjby84Mt5P1Zp6whRXhRkQvLkw7419syKWVZ6oUywMFvp6DGJKXZ6VmqTY5j472qtfyBkkwrHzGExV9D",
  "key14": "4GS7FX8HPwMExftHjLP7Kb5YvG3tDYfMUKxc9EbvHA8PV6swfogKZK5SVJJSHjgBbvdtgFzaY5HdymFvEyG57qxW",
  "key15": "3Vnvxx3FRrFfeytz4oRz1FHwnpK1ubyE8d2d1Dsa1H5yrL7c4PjyJb1H8LADoafuzhtFdgGkfpHy8HFKqAvNnezk",
  "key16": "5rHLGjNWsK2xPFz7hYKdtjF7nQhPtgXDhntF4hp1GYyVgpVTkUQ1mFNk5bjaHAvT7YMmxHzsdgHNdDLV2uoLsivB",
  "key17": "3WkoTAkLPN59id5ZXZntPzG79hV7zsNUm2qsnd1yv2qNBrFUfpRmM9AyReXVpVaSUjNMZUgiciJSBrLJH5dPJ9D6",
  "key18": "5MeQoJJfEqtGsNtzK2FwR3oCc6FxULxSPaDks71aDpANHJRueJwR3d3FNuPxzeqCdyjzZGwviCsE76RkZAktWk1o",
  "key19": "5VJ53Ea1HKXcZVQrKLfvZtriuWLoDnrUKQMn8r9AtgpEjYXPcF66rKJm5QacBpgMes5w8mWnfk3ZFqTgBYsDMCX5",
  "key20": "jiUdx5TYDdZ7kJPNL7TpdDRZVUFZAFG6t6LF9mwPLtmAR96XyY4UgusWdWax3mCbcy3mb9RBPAbFhJ8uMCWCy8g",
  "key21": "2Q98aTcCGzNJ32dRzJ4dQSERC9L1yiZ39yUUCSSLKRRPD3EgdagB37T6XWJ4W26ciAqQWtzVJbh6L4PwBjb7EZ7o",
  "key22": "1q9ruEn3LEx4EajXVzHHjvFxvSrpZipFHHcg4ZrFFGUTHygdSEhkRDwEeWbAGqFyXmdgGtNKedmfrNFVS44McoN",
  "key23": "uVWwQcBy1EtodS4zftdukXqFr7SUUiBuPrHzq5rVMXmpHmZWRbjTUqscUNN61jWRDkXBnsy6Pwwr8STsg9KUNZm",
  "key24": "5xpfKoLR1yoFqL3RA9K5k1tgUrgGd1THhgdSHrc7Dgn8kxbUSw9KPFE7SySZokXrEihtD44R62Uwsome6zubhg7P",
  "key25": "4TBqtXnZphf8t9CLmrioNmT4bLe4YtEHfqRLipNezgXeES7RhLv1mBTigoMxBx1M4CQkKiDie36ToNp1puEmWNWB",
  "key26": "3XutyLsdXsnj3hmb1Q7V6arhn2M2nSsUA4z1tW4tHEXXpv8VfcUjTPHQ6C4gkqQkF3fi3fG3CatK7BvFZSTNbCNc",
  "key27": "2NS7cahBpCsw53wftsz6twpAkDjga7N4s9US8qPi4DshZ8VudFSfDQSq5dXHRR2fs6HgEKvAsHFAb6oWbqeFyTMZ",
  "key28": "2pUCGsAZLhJKfKuo46qPvLg6H49sp9Vd8U5d6t9iJ2eg743ycaqUtu5wLhcJzX2xMjeCrFRNdbtZjvXceMB2pAHL",
  "key29": "4qQBm3zWbTunk7SL3QviFnRytY64GMsnYme2ME44NLShUrYrR3QoBNRhgcsM4qrN6d7eDVnx4MunYkcd7QHFxAG9",
  "key30": "2UZxc2Z65BNEPDaMXbrmLFZa6WUY7WpjAj9wvNcAVTPzTcq41eQURhfkLq8uh7w27gUxMworJRNrAME8vrig149G",
  "key31": "SgjSfnRyUbfgd95PfnNVi3Zsr5N3xdh6rtteTAm2QYou5xBshygVDMQFyRwpy79JE1bKKNzECWgLRBadiEvKJ83",
  "key32": "W864qU86Qwufn16bNDJaQYDuBh6JnYaeQ3hiVX5nWMRKaDBLq1A4vNoAXkHoZVfchG8tSfJg8ttwfGNkMTa7Az7",
  "key33": "57V3651fSZM2vzx2UwXiHaretRR9qsMNjUntdoTRFijnpDNpMNPg9vTXYGn79WjhMoZvwXeyH2Y9HQnP6LYgBVSM",
  "key34": "37Y4CvuowtP3FVieKuYgAA9P3HAeg2qfhjAgw32EKqVMHAc5Y9WhnTKwX68HZz8PYuAxrHHefgv1zvFZFA7qRaKo",
  "key35": "65kBjwKdsCgvmVWgX1yxQ2cxq68kgdZosuJftASmunTf1kG4ecQd5bc3M4LrwAuShxEq2SKETcJ7HKkwwpQd43Rt",
  "key36": "3GSG9Sqbd2pcRqPxpprTLfKT96t6SQNSeaCRs6RWJ6XEwa7W97kfUaBooTeQrAyVg1s2vm7kLCeH3DaY3mnGb4eo",
  "key37": "2BU6xi1MEtQYxt3YNV27J3hQtgZtaWhixG8Wohx9JFTkVa1NC5DbiBWbpmPAUAqy1i2wTxpRxLhgwwRqZpZF2eQK",
  "key38": "4uXzMkWVDpDach9GurzvGJ2Le3mdXHbTuqhrRbajR1EwmuhEicQzwpwk6TbNfLWFNd6xxVB7tVnyVzjGMvLSrpva",
  "key39": "32MUyZRnJKiMvAU8WVeHUfVjz3TPEedYxP5WHPEjUCWcpo1Sgfv4fns4aUp4rhXU6ancbYxvTsPjaPGHmBuSX28d"
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
