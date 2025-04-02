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
    "63AdTsPrvGY5b8YWfude99Ja1pan2Ytzzby72qokw6SpHhZCvUv2XPWk5SHmq7UjZKXXZT7CjX6sfUoWTJTNk1VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gd27J4UEoTLEPNRVLmAVR1Bk7R1qKdEtSJseHaDVXjUVoq55FrZX82HZhxevcqKYUZJ57driu57p7TE2j1qZ6LR",
  "key1": "2pSXTRhESYTse2DDENb2CBvkQdRogz5YoLkLgog2YgY2VZVHDPoWRGr4JDTnf6ZpZotMCvcVT4D3pFQBo9ZGUdW8",
  "key2": "4zZ84XJVvfDjfY6V7xFnyR1qr8CPVaVHFb4sjDN5BoNaAoDF4RW7U5SvX6rrfJ5gNuHEepdB4rapQtDmN5jAREZc",
  "key3": "Cj5XRzbS6xRzJru7dxzjiFkkWuVEjeqMJ5CPe1v13yPjtW4EHobu8UZpL5Hd8eQzdYv1zwTYZELjs5DBawP7iAQ",
  "key4": "2XAYnBpAe4uwUcfcM3ZkynmVsfMoBqLjYwnRMAhNBoF9GaBhypnR6cQ3DVCCG8ywvCko24Q52BzGhmiRz4pm2MwN",
  "key5": "2EQjqzWyV98Hv9G3vV6xreNg7guU2yrkV2xARN9YYtXSwu4Zvh13QxA8c9WDVnQSji8WrkpEwdcHLb9DQgAQgmkK",
  "key6": "64SAkm4jaBwM7FRrdUAsRtm2FLFfKj8TZPZGqJ18tGETo1wXvxgRtk1L3ALhWAFkS31tLVqMhXBHBy6Z1nmMxcNa",
  "key7": "44F2QrZAugyGJLCDxhV47GrwH3nt4GKLAGf3YPZZ6rdVRDy7auvtisiu6nSamthqrUutXLXvsRBfRdgwRCH5yx1V",
  "key8": "WEtvZgJr2q3W6uEaBANYoFyzs5NYVAspBwdyU3rNggg86tZPR1TCfRFRca3m5CTQ84bgy1FosmLSsENQCUqeZ3B",
  "key9": "5KzfyJoeG4UGHh4nVaYxk6gAMaTG5TkrLD5qwWqv4vbWQR9CDQAChyL2arZAdpmoZ6rTqHaGTqLDAQhz4grftG8c",
  "key10": "3iWh64DyPmutEirjj4gpbCA5L3uCvTgjbYzs64BE9AgH1ar1xriryrSnoiavjdQV2SgSiZgPhGUbYGVMUKtU8yiE",
  "key11": "5kcrZryPU9QSj4Svmu4j2zjJPVL5LT6qFATN5hHyRpSN89PasPWDkHkvtgZNC5D8VgU9wf7NSgAYPTKUFooixH6D",
  "key12": "5gu5iqwyocNCGqpnUt9KHqpScfw2FjGDbrn7wLRx4BvEdik3pA6eDW1AfpApsoHT6w244fYaSJMTASTgpuVWGbLq",
  "key13": "4NajRQFAc77CFJcVyshrNkuFTJfFwCuEQk8T8YtFuHj2UDGUGS7KuBGUo145vDLBqVrNb7cRXd2dyRmkbdtu1a3r",
  "key14": "5XjW5yp9RQiRTNXP7i9gfYMNzn4NWSWUxYWZWcHYRb6H8hWg4YQFsA35J97CWqyrvD3XRVh9PMa2Tu1hpVboPS4M",
  "key15": "2or214pEGSqGBxkWLQovrzwi1vsPknv1SpcLaDdsfAbNF458Gc5zLSSUgaNzWKG4SV2dquJwRrPqdsR4mXkiwmKa",
  "key16": "4Tg9Yq6bfEQwrTmouVfXL6NpJFt6NFr8684bJopzdK6gpKqhrA1Rc7iEFCYWBPf8n1sDyhZjehHwF47peCKed173",
  "key17": "53FaTpRJF3imt6V3faBd4tmw8BTcjbEgkCqc5G2RjFJDDL8EWwXHj4E5wTH3xXYBWvocLvpzW9nzFZxNkbEYahcs",
  "key18": "5EPAZAto34B5RnWV3sVLSGqMfvvC6LVqWCErNYy4RmwpRtpjf6dAJfdXqRewBMxVszQ23uqY4a8xSzumjr9EpNrw",
  "key19": "3NjCMVWFFgZHu94ahiJrmNdZ8ySCXamUCQhXFGfMcebHMAcVWEy53WmAc51aV9E1cNENBuLtuUs83tupUTqcMkm1",
  "key20": "XZh8iY64X9kBvJmgBhJ9qoT47svTqejULaCD3vug7qEbanrQqUNhnw1S7N33hmaXSvHXxjKrCKh5RJqQ9jLDCiL",
  "key21": "FEgxFQx9srTheFJy6EfsrXkLwN8uSZhhS66tTj6c33WD2A7zYKguCrQKZsaxdXVrNKbqNNTvdgkuFuMUYW2mKhr",
  "key22": "4SrmySEBC5TMB93jQMJSfPgewB86Cy4nrJFnm4sQvz3ZXcixgUGgZzbojsgx3srHvDGx4o8BPdoUJXnXhUm5aCpz",
  "key23": "4UR2s47NPyxjsqe94xEHsHcthR8zNJrmAwJE52gnHbmCLo37V21bcVZffvweyo5ctx9Zww6v5PsQF86kNkPR8f1Z",
  "key24": "27s4TqgkVVUAsKX34oNgzDVJMcf1pSvuVZE3hmUBJ4guuAzm5xZN33F9ndjFxbj6PrJQ9UV6KCGegn9xwYssbZeK",
  "key25": "2VmPMRSH875kfvBBFDoypMhYCdJ47SemeQCDVU2Qmu3rBAKNUz9xLECa4M7gCX7onKTcwCy98mDtdL1SNxVKS6ac",
  "key26": "2223DAVgvHCjvu7svQM58BJvTofoxhB2g1akCLKZvLdwvrYQvEsqNWtgffevYJJ9gRr7Dv8VqaRAjs3vAEjNZcV4",
  "key27": "KNgGjFf5v24NhnBDhWsqPeH8oMS51rrpXEMHshW884ZPjShHLyXEcstTe9UhErCKctMJ9H2oQyDcKnzJ3rxwGiK",
  "key28": "BSopQdErjmB6fi4u9xgc2RbyLubKzjKPXfiYJMoiZXc3yPMBpoqSb8ctDL8wox3n1x5BqjLkN9HQx5tqkmaVPMA",
  "key29": "4EH85QnDy86f4JdMNymRqZZq285fdWBFkWpG7tysPVaTx5t11RUgtj5FS3koaS7AYm81YCW11sX8Qa4REAtqNyiA"
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
