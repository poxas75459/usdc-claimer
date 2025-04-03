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
    "3CtW5Ab5QUVBApzM9WVoALBEBi9r344kUrt3Pj75HzNtzivNYrDUryF4cCZmHUqo7EmBerimxdR3tez3YV9sKi3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGLjo6jdLUBhJcAkCHHfykcCviC2rV62gKRdngcCjD9dsN1zyyPCBbw6Z4WkrdvhvdybSG9vXM9DHHW6i7VA99f",
  "key1": "4cCqB2JgSo5ebuGahahxxKsHA5tujdpJqSy1dVb3F7J2n8verXL1sM1duuZ9GEpp45SuLhKXXg5VvSUU99k3W15b",
  "key2": "3pXUPKF8ku4hQvujimVp2gjEysZmuDppknngaTcZHhR57gAQNA6e1Gc1b7YsMvrW3FsJVtarUku9Xh2Xr3rcb4Qk",
  "key3": "q3N32K4TeSox1vnCevUp4pUo43fMxyoPKeHVpShDRWT84sQkUpHqmEkFRSmFYRj1LUZtexaCPiLtiFBvPk4dbhS",
  "key4": "4CxG7hayjy5mzULgEpQ5WAdNG4Jn3mFTwWfmwhf6dE5iZZHdSdunnBkxAJcXTAC2m4FXukGuuVN5ZA2MHUBigrZB",
  "key5": "43hq3rqE3bm1JKxMS8N37sHs7gb33BETYnYMGWdceWYdS1GmVL1DSJPbAgPQcXhsqwrjCLdvLoHvtDhHCWannWJF",
  "key6": "4Qd4yEjvGj2Tgrbtuhew2T2RTFo8qTCXAjdfpbyEKhzfELmpTKvx6JneiuBKLUwaQDa6s4syxhxGzCt62JkPWrVr",
  "key7": "5xkVtk7rdx5ZqgExHdVsufcPJDyP4YqYatFH7AXf8GZx81EiaVjLPFBWw7yGD2cvpR1QGNfGhJ4wrAv8mQLF2ond",
  "key8": "RxcvfXRp557S4smQtWRWDPBPMJitkzGV3TSSCKw5xZqJvAedMVNHWCyfeQ1WbCY7bxppkZHg3ajtHwkefNVSPyw",
  "key9": "4PQh74tJn6gW8absSy5fR2GrGUKbvtEfNiXqiRZr18Q148DkY34E3UCwZF6vY88FpmDq7vecgfRQuyvbU5ZePX6G",
  "key10": "VreFT1MaicjpbBs78TSJxsLSQH6p8WkaSbQ7dUSpyRuQ2dEnM2Hte3ZxBWNDna4XgoMDRHkBzxCCrhaaRJcEBEN",
  "key11": "4SMF1Sb2JPWGA8ssEAT5HJebt3Aj5YPoaGkAMCnx44eEc2JTCMnFpFAVVEWgX7X2QF6cK9VXJ3mQVoFyhpzz27Gk",
  "key12": "2jRvsNjfZvuHiZdJQ6y1yXFMw7cMQ6WYoPLaxXg1csApryExjnsJnkyVGRYHuKoskjvxrWUqsDyB9YHULX31oTvu",
  "key13": "74d33rDxU75QoEF9MEWdpvQYBiKndkFGfZXU76Yztb4Nz6tGTNfwCM1mvRdmdtg11QhNHebfdRsWSqoVkbUVvZR",
  "key14": "2CPJTWWbEMmqWg1CgSLERu71cHEn3xqinEWZrr2WD7EBspvczrPTQZn2wMNbgG9ZAhbPR72hpjorzv7xaETs5LY7",
  "key15": "2D8o7wuM4AzKwY26L3KSnSgSSgkjEztAEbMsMfrDh1CU3XbW47Q9F84G8hkzego9yRxionSHfLK28kLFEvLwB3Uc",
  "key16": "2af75Z1qbTz1ejr68o7fDvkn3qL53Gr1a9mjrytzCA7mJf4v8bpmJp51iow9hKUEmHPvEFTrK1yV9ZjzdieeWhY2",
  "key17": "45Ab8w4fWEKkm5NFd7Ynemy5Eh8KehC8Pv6jwbxagVcVaemFFww6jAGsR5XMaxmgXfk7UfhknjJ2zZtAAXPivpZm",
  "key18": "31bDiE8bDhp8NEzvzjXKo7aWRsCTQ4XpgN3qMrpgqrypPMZSRzYAMfTz61pW3K31SWQ9xzccqa56oPiosrG1Rf6n",
  "key19": "2SRBmQJFwxxgqBK3U9mb1zw4YzDR8povEde4Augc5SQuHab3RUtUo5robgsKH4C3RHAGM7jngMS2rGfrhE2AuuTR",
  "key20": "2HiABojpuEPe1WZbR8cN69fsykqPEnedbpsasMXoyCd1RRpjdrqxCACukxEpF2QAYairTVmGmZL9b4eogMg2cqUb",
  "key21": "3rhgLoAU2eWHWdzgfscigqPEdNcUrVk1xSJGPqQ1yZZ8jeyLB5YdNo3b4FVX2demBsqfwNiAzmt22GP1kfyR7SRu",
  "key22": "31PmTe2QVMTZyVfE9j5jjP4DgxfUKQVWQft318tPUZd6dHDM1LsH444RQGgDviBsNCdWuFUioEk8HN3AqQi8rxcx",
  "key23": "29bygf9Swe5Kkd2JgqCRht79xZqWQz5x4Xnk5wiLaGNM8vcgwHXT6q9wb2pfYiLq6dCch2CxVD7pCznC86YSEnWE",
  "key24": "2rUTcW35BokxhMYcn8FhVGMbzNtRzJMHLvVuhcugqzsBx6fwYR6UGRVriZMjb12hGfJDYSkThgW6Wbc4U6tLxLB4",
  "key25": "2g88XwGMiN9MLr7LcvhXRNDYG4DPdEVfuehjfNRMthdGbouEZ3qXzDoKJwhC9zyXrXKa5KBD6bNkSWFGAbQhhMWb",
  "key26": "WpsAY9Gih9yo861XGEpHUSUB8KrzgjH8n9wwDiQiFKAxjCFMTatyHXAX8UmiocbdwCtQ4rQkgY6ry1PRxq7pnJW"
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
