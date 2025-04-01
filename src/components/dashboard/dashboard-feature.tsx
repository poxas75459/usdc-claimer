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
    "3PWwVcDhjwqYYfKnWjFbtJ9Bh83SeCfmjEmFiFuqmLfovcJz4mt2M75BpfSvrRssDmTGJM8hAcN9zgQgdq14oVm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7JMEVhPLZswWi8iHXv8qFfN9NY7uoe31fx55K23ChP3q8ASsfoUv7pveCoML8PkLeW1LWe9fdUxuaPddHupwUq",
  "key1": "2mv8DzvunMfowzA4QVtTXAnUjtkCK924KyCdzyP1ymmarmDkrctLXoYKPG6dVnkPLTJWEqZWi3Y7skgfCVuZgLq",
  "key2": "4UjEpx4qx6rJRzBWd4s66pqcFgbgFZki74cG2futTRdhg4iLsjZCcV9xfXahQeFbcm9LF8A2QYbkRvyGz1VUuxE",
  "key3": "4k4FWt69bfh2Y2r2vfozdRRy2YwrEqyGZZEacndoS6tNepKcZm9eVv9KtqmaYL3VXy3Xc2FXckyETiiFoVe3Pz4v",
  "key4": "4cp3cARNeRiwTp8kjFU7uhgtY9PzeyczAXXHHPueihy9gCxFyDUALDvApMnHUwk3iy5jSrwKU2QGRQKswJeukj38",
  "key5": "3qLFgVqVK8XFfKxnNyjCsYjHBd7KZWEqHKk2b1oqCaaTKYzQcrakA8dXhi95w4EZALfJczkETP5EfR13x5miEZjf",
  "key6": "4v9Ku5MeM2fTrJsSwV5mVVYm9krqbjhNJVEtvTvX97fTHwjA6VdS5rxRCN3y6Bm6TKKRtYKxowncYBWzCh6kCtTr",
  "key7": "4fXtfmQuU6SNWW3rSLwT3Lu5L4a6NkTPLJvV8MqGxZxxLqMbgQ5iLf67JbGaAxp6ed717DTCGh7Y7mSigvjZ5Mf8",
  "key8": "5nSejFUJFmy6Xo7oKVtTnCKnGaDxmuY1QUqL153pGjujU7wHGVhm3QUze3AyjqLD8FFdKkQp7Ao5mmQ2Egv55S7q",
  "key9": "4d2deG5tPogRgWK8b3xhTS5RChtNJN2e4f9MLDpb4FapSvVzJQ71ouhN6D3VQtefi5mgB6YT3ECnPqmgCYik89mR",
  "key10": "2FPLbTQ3GS2UgZuvnk1djFEgLRmPPpXrmZ71F8j2vrfsjrSTjoLB4CDg83brG7o3ipRiXWfn1rSVaFTdLjGrcYKF",
  "key11": "V9biXKHCA3bwznr9MW7vvkzv2D5X9WBnsNWDrsZs88MpDjN5Sk73snF59utzemuMxR5M5mLZom6RaUTc8GRTU7H",
  "key12": "2SjmjmbNhYRZaTYzia4W66g5xqhcRZPBpXvEwm4ijBuuy4nognkfu1Ubyxv5NJtSkvbjkkxkK9ygfYTknzNKToYQ",
  "key13": "4sJrYVU5mpxVXFXEqrJtezdPLc87mzhbKPAta8s3TSjQTabPbPMNEskNS1v4UKvQwFaWdi1iKw67iBGkUVVzZo4t",
  "key14": "5q9MkwUkSZmz6gaPWAUrFoNnoUHV97P7SaTecsQ9ZP2qve4DdJshmHZJn3ZUjPqrKafFepEaLWqdbMWLVWJKBeDz",
  "key15": "4CEjzKfk7qX2aJXKM7hvgLgnkYChUKxhR178rWpUaadU6Dqb1GpaXkqfJPASU5xxRS8K7vXw6LmAP2waZJDPBzA8",
  "key16": "2vRPFvA1TsRZqNZaBtJrYwgBqb7cX5HuzFv6bsrUG2eqrnoPAf7VaugexTFA38TCFunM7XoqXHGrNFK9BnX5pZ3N",
  "key17": "41tGztZywp6RKS4Cb2p9qJu3yxUuZkCRLLdmutHqt7RYVEudLUr3L8ut5567HgweMpNPQgZ9RVD1tEQ4DeVSeQVC",
  "key18": "sSBzCymp9pStBbMBX8HG6xEdQjJpBXNxWeESP67vW7cufrQ3FGK6frhDWSUd1USGsKbo9pZsocwAMKb5GFgya81",
  "key19": "29jLwxJiBVQqrJH3yG9NQCohbQSg3ezxRCiXoK6Vc1xvEWu3PfLuBbP7sUaYDLkZNmfiZRNyaRhmeAEL8q4akjeV",
  "key20": "33oEfJJME3dsHVvcWxtSwMARABGSJ7fjDTpYcqDWWMjKmd5KtFRx5gvWrs5sBKLnF55YXdZ66cJ3LLKsHwEmhnGf",
  "key21": "66GNSg425gcevhVaArTRmkLDwtvWqPvS14VCNEuwd89oSh52eYkBd7s4GJBhxvtduJ6fgFwb5zVSBdh1RQnr1AX2",
  "key22": "5MPzGurZcX19Vut8enHLZDgYaCUmNGjshVjCiejoV6VofEXWsYzf4vbsoceGb2cR6azviFLcDu836okuKwJT9QqD",
  "key23": "4MGmt7UCCpHTm5iegMFNHnZ6QuyyCDcv4GYj8wrhTeTT97AkGwwsoFCnax9MB2q92QFJurodfwtvNuE8o4RG2RmD",
  "key24": "47Gr7c1XRWnsJFGpxHHaoFe9M8YK8dx8M7bVTZxW8e9Rw13UBEAhaDTHWA6QgntuSZ7ctoL1LRt7DsZToSswtYHC",
  "key25": "5jWgE8h4mabUy1GcRb77gSDLgeBJo2iX5So7PwDfjNYyttHLLxpRDVmYv5v5WccCRbrERTn1FWCDefwX9ceEUa1y",
  "key26": "3qmnCKzSXPmpLg5u4Co9E2HJNfHAnmZX9Fp6k8HVanh5TF6Grv2hVi36bi8PiuHVCt6wEbdHA1y6xTww8HkFhnTr",
  "key27": "2jdpuPV3meUHoaW7yGHfqZmBZh92CAgyCFd4LvBMGbyJqXwPipdFzAzc4d5s6xDEYbcabLpquDenebWYioNej8Vu",
  "key28": "3XbN2JhZqitRjUCZieRQt159pyuuSh47U3WcFnLwmTg5nvdGx5VEKidsCFy94hqK65WBYC2PyAHbsaT4D3xFtW3Z",
  "key29": "4ViU8EjSr3DV8niFWzTaukeXU9uJXbyku6eam7YToak3NcXmEt6VuC7tqKt3fWpzJob9dgzkBUsrb6vHD8swJCEX",
  "key30": "4PLawuw2rgF6fDgH9h8BGQyBkGJAXTDAzD4irPuvwGx9bSYzjHaQX8xuykMKufBK9pMN3EqL4P1wjADunoDBNVPr",
  "key31": "5MGitwJGbmnsg6gSUoKPkTbuZLyjw91qXa14RZMLWsAaDmGE4JBqmUzXqB6g1XtFQjR1josMCovCFWxhqMTBSxJP",
  "key32": "ryYKtz1tgJoK53pA881GG1Dt7ZyMMk3atmkyJ4FxpiPn8dMbkvvi2iakZEdmR2ce2hpPtoz4ghsLwuEUPxw6jdA",
  "key33": "2DnagvnN3XMhtgS1CGKyn4zpzJFVgeeyKfxkgG8NjGrzwQauGTTccicH6ntvFA8Y7RBtqMgUgmohzyKXpzd2jRxg",
  "key34": "2a3wtg8NtPfdKEN5xNk78rCEKzkkU2d8L3ULxByucWypnFvMzxjDGALC1yK3rBzTm44iivPRLkyD1iYnukNXeDKN",
  "key35": "5BUywqprPCEhNtpY7bMkp7pAp4aQ6X9WzrE3b2b9VSAgkrwotArNAjbbVpbKnQR5FxjsKwroeeTyAzicFRKwHY3B",
  "key36": "2dLFt856zQLWCVsDeyyPTUw1QMWy9bLkYTENZQeAgguqU374Nvr34m6tQqR62A7JkWzVZNpKB2YLeXoC8ijHmrqa",
  "key37": "PoXmKnkawsBpSBJfRsAwrRUEAheEL5uyY24CRSLQPFWDETFeHuzbVq8PiTNCDCH9kqaX26C4oXxVxpWyTnWrkoL"
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
