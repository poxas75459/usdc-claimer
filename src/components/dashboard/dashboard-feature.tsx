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
    "3vEaGNoYBosTVztActSRQZG8DYEKeQoU95bMUGosFEnwaEApvJuKh9SEAc1U9dbhCj9tbkyGAovzgWbTXGCG1Nqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7hGooMpwnjHdy8pj3n76D8AeH1NJSxYxeL3DAvG9PAkhaZMk3udyjmdj9PNmEhPB5pM4ivA3ZGcKwgg9UUeiT8",
  "key1": "3v2DNGiN3Ct1G8QTNJGBDLRvZL1TQEjdz5pkaikkzCSYAEG1iVrJW4BWuonynsAmir6qsXpgNd5iGawjx2HtBSTo",
  "key2": "2e9WxXRx8chMxH4uwWs3kNqTfP4fzh6EixCmnuyh88WfiooppWQSmwfagjkhjZyzBPU98znL3bxUTHRUd1kpHCB8",
  "key3": "5pxRwbMxepV5emDzTVUFJFKt7GDtzcvcjL6AozZSQcQ3PkF4kwZvw5z3dgz3Um4m2gMezGxCdCMGJqy7Xhqr9i3R",
  "key4": "4BYNKWin7AN46Gokhy9BBNwZg4hCgdhhXb3bBBFySBihEqwoZrXmx5AaGnThQioT8wCEMxaZdSHW2n7NJADjqL28",
  "key5": "5y69Awj6gqfyYJrvSwpcJbbBVhkA2Z4Q8aADh7bwApAKXrpHaz3xzKjS6oUb7BXcjgjrMsrC53EAtD7xrwjPqo1Q",
  "key6": "23ytwAVg9Gm6oj8no5ucdpM9o4tTALKXi26BihcFxWU1x6G6ypSV14yhZtzfPfybgpYk4q5p6LpQ4y8V1zXTfoBh",
  "key7": "4BFBceBuxSZUXQwJTfSLmCCmdpuqjHuwXqtT7RzwV4isZfeymbpLRreTdpFdzoWpSqubQGew5RUzYMPxUaGTrLU9",
  "key8": "2TivdLA1DvEW1BSxWcxPPc4X9gKLih1jmYoVjgqryenqitRVkcQhgYhvR7C23izpwoxrByjMUtpd5rxcATMFjEnr",
  "key9": "2pm1K3is8EmD2BHju7MYRz4YTjvNcxuCXa5CwpkmzSuC1NG26fTxUKpx1R6VHrQX94Diu2XcVatPerVqTPTA4gmF",
  "key10": "2jPaHHcBfmwtmBY6mniSs6Ppv6u84mtQhGEwbMiUF3bpLWYVvds2ydC7CitX6QxwdgVpsDatAA223fsiLhknNpyT",
  "key11": "yFietu2VAxG64rEfUyniUAPPARs9Ndpaj5h3mK6WrBTDpzwBgEiBZ6ZimyN414qof2vXE2C5ApPSLF36GMbSTwv",
  "key12": "4rn81YTRtBofd9AEqdceiNrEMBufafVNV7VYZCiukedjyDufJGiSejFvf3CzVN7xmNrKnxZQn195beoM8ttopnxL",
  "key13": "5Cxpeu38GGEb1UmD1EayZR2An417GBeGDjf4tugPUzKthRu6ZC6eq94BFEQHgXEPuT9UTz7w9eAP73QfLDC6pi4b",
  "key14": "24RdjKdSZgSWJuzg4Gh7ABTPYhb1xgGv9jQX8qnYFHQVCsoE6Q89R7CS4YKBWfAR6NkRNcxUtRwXxiWJLVn7aRTu",
  "key15": "5MxVyUb1ZoZ6SA9Ynbmk8q5vm2u2G6goo48NRSU7mC4c7dWPXBJn9MzWL2XUrksmyWELtwkbtTUp6XZG13NSyqC9",
  "key16": "5pcP2KVyf92jj3jfX1rNPerxyACCFsub7ccUgkQrn9j4M9trHb8M8XPoXZT8rBWJRRDJ2Mg1ML5ofXmbdbfaVXFk",
  "key17": "635atHXQsk2kU9v5c7ETCgN6mEisX9cas4nmrZbnePGVB1uiRswL6yGUoJEtd8Q2ExoUJoMW7LNgDpBA8LNvLKvS",
  "key18": "5W5ZpoSCo4bUiewdaUdzm7bQVnLA7XDcL1CwDERdGRFCEPCxHGr52SuXQVDDbHQgxePwDDPwHADprqjQK6vrR5cS",
  "key19": "28oQCFZHGxny9XHzkjH5iLhy9J5CqFDFEKrev3dN4QRnDTPTuV3ChS4Pg14oH4bbfR89jaWfLUaDAMSEHUNdSuBB",
  "key20": "2XuuPHyp6f42h6T4ybSVbfm5JCgD3bG2Go2VEiHdEQct1QbeaKVP5JPssbdnHmRxqUnjCC4g13W58DLGLQhGe7o6",
  "key21": "wRWa7x2RhJpM14bTroxLGwUiWQTAubactWtgeBrW6hgRNEovV7R6nMdBsebF1GHks96zvMG97ntv9DdeA9yECWD",
  "key22": "Y5HHmaEggnUv2MhmH5BcrsczXoJaTnTjhUNQoRPgQfvfD6T3Veo6HWcJssReJmghQ1DDRg8qKb7JUBrvhQUVsiG",
  "key23": "2z7x8A3tPBwTWCPr7VGJtzWm6WFy762Q7kTfBHy6Lx5CmB4Ffyx8Y2RC7MsEtjVbMi1tB6xjSHuSFEJD3YMdd9oM",
  "key24": "2iXLcucjZyDBG8wd6Xt17Kpwvu8F6GnJ6e2Lmp1T9vVKf5XvyADMTYhWv5HBBm4cGc52L7GPAkUHodgU4kZp4ptv",
  "key25": "2G9KA3KMjxrXsA9WNBUQHZbVmkGMsvhkJyuSjsxEvr1XESXn36jagiKKpEViuPWxV6TdUxbRZG1ztkHXyjbc43eN",
  "key26": "3xdFyvzxV2Gbz9dpt5uzj9AKaTtw6vBKcetGLF48QioJuunCPT39uf4j38JWoizQA79yPXeb3LGvxEphgu3zWCrb",
  "key27": "WoxQiUigkGKrA6Aj9GSeVKiKhTVs42ktWP2QHKzVh1w5cHuGFiXyNejD46U9chUreCZR1wSkcUXgHrViwc34VQC",
  "key28": "2mkgSQS5sG52AS3T48etg8j38dEKi4SVAx1Hg5oGdy236FAF5u39YXBLAY942C51vzGHbwRqd8XxHf7oxKnfiXRA",
  "key29": "4jspurihg4hRMzZyJgoGVaz2wkFdtWQ7R4vG23V1sUchGnyYstDkcFcq7kqFDyAKhjkwgW3S3sN7yn8VkftQmoAm",
  "key30": "wM1qn1D2JdyD5DFaXjAR56aft8nXQZNJhorStAzicskSTVDiM6RqdcDfWT5H5FMjuHLkRr5ULaHvjKQxApx1F2Z",
  "key31": "5e2vZMSYMid8pU8YDsjaHPa7qCk2HLj9UkwgqmcVtQuQFWeuV943BPq2V9TjWN1Q5cCZ8bWxPFu6XXmbGYG6XPxq"
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
