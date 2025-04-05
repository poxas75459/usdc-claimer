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
    "2SGxewe8XL4AkmMhaQqNjSKpecPHuQ8Ub8h43vZzemx4FD5hYZYUgnfHzMVzM2ygsbfu3sgTrwqT6bbeVWibYwir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivFsrbVu7uVo2kmab1HqRdwrvNfVGJ7twKUUASYTidGSQahwgZ67QV7Gx7gDHS3tP4vVw8paq9nquV28zhsEfUs",
  "key1": "2Zw8eXYrtHcNrjJ8oW3wERgNEDcrcm9g7TJqtRXCfFHZuL5pvgxzWTcp2gmEX4e1fGac3K26P4vC2Y1CYkWKbYVv",
  "key2": "4BdtVcJTRXycTrPC1EvtonbtrE74QWyA91tp5Qh58DFJbKGK74SEqqTU35358RjE8s7kmDGNCWiQM9Mocs4NEcyw",
  "key3": "44fGR6wn6vD96eAeHDar4uRoDvdZ1n4hhGX26Hwqq6Uu4BgK2uEzMV5EuxFtUdV9sZvmaAL66Re2vzPqfz8X3uRT",
  "key4": "2vAJo3yecNnWe1sjMJQET3BtvPsd57HhQLgks7cAxskChBVnB6Buf2GfVksToKRsVHBqbG5NpWzJLwifCriMXPfL",
  "key5": "mBkGx5YS3ZKXxRFoYzencggyawfDXGEkt2acgCEmBwu8fydS9vmWUXnbtJDn5gSAfi8oDiQN7QNWidFXPM2Fe1L",
  "key6": "5eHFVCfuebK5qcNtvKHCt779fdhPXwP2nZ4JjKkHjCktyBwkmYeohMiP7t6uxcp78AaLDgnwpQkmwyJq4HFcs6fE",
  "key7": "3brz52BoKfaXazTnn8i34bFJopiZFdS4wrXrPsWXfa2AYXqnZyT7eCoSRJ1yx8WcqcLSgoUVmpc7eDJoxKXzFgvU",
  "key8": "33iKyhu18rt28BjJzLcxzsaHuR9a1cCV4dzVdPZ9oc24K4cWkPMSqPCyNL25wzVaV2Mqb2chcRB3s2RyK1izDXP9",
  "key9": "nTff5ep56kQjET3ySRV4gnwmVJVu2NcNgooLyTtHc6hhVoDsx2mhtv1wywHA51G1ZhpYCJTmaiuKwnX69Lb3T6X",
  "key10": "53odcqRnnUYpEpd1He29PfAFHvTQ1LQgR1CXBH1N78GH8KzJ6rF4qnJS7W9faJjW7Lq6TusnuViNzjncKEyxc5bu",
  "key11": "29ey5Np9WGRgWbytopKhRerNbBEXCnyoPHo65zM5JuLmquL7rM3oo3Qo2Lom57w987aWr4ghyB9TJQY4u6rTTdWS",
  "key12": "52hEGWVXx8eyQYghnAcXUfeCn7ZjoLDmsbHetWDwZ6PWGEgYPq4HdF2GGLC69CruNe9YCt6A6fTsvm6JUm292qr1",
  "key13": "2pzgYPcsWrD5TeNqQnk9ayPJyuKTxtmcVShd2zX9BtCFmNb1SMpEHJLqEgHvfVTMikyZ4Cbq2Ac8UwcpT7wLj6LJ",
  "key14": "4d6xvUrzPSBYHNWve5GhHdGEvdfDCMzLoLTcQuFJcRHXnzjGkMDRj7tcL59Rc2GEBPnZ3Gex8gkiXtBuje6i5s6J",
  "key15": "2XJFo6xxVaEoBd6sQAbkFswZDhekxvhu8uKTXM2Pm3gGDYFDvmgVZGUicMnXGaHfhg6NYdfZntnKmmuWnirEu7Ph",
  "key16": "5V1wcYQbMLNXMju91QjQ5PQJw99c6LGyakqhiFssuk1MpWaG75e7b6JRhQYF9gwp1VXe33jpnrufUQdxyAKUKAUA",
  "key17": "t6LHdtweLhDjTDf6UdosmwdW771Hj9r4BnQryq9xA88NnuMteNNgbf8CW3YMMMzMUPqa2Q7UkBGzQQXdPpKUMTV",
  "key18": "4D3PHrYeRsfUhuJQjeqdG9tQrfznnigFBGSaz4h68v1mUyNy3S8q7m7aKZLfFeuE2Dp85UVueS9XAYy2Fiz4rsZB",
  "key19": "2bHc1xhXhmriAp8bLUL3Y1VMxhfQL9gTSfK32tXvqSngKBN9EmF79KsKHgR9ng5CqBcWSJAQWAzXMfJisg48VAC6",
  "key20": "3jckvovYL1tWjh7TvkmWnSVTfsQ4MTr5DeaSpviFemsZitphdWaTgZ1fP9UobyeEAg5VdSPADK1HtN7fEnwAv646",
  "key21": "DaXEwJp79EghDbjM8NdWz8y3SzmDwiRQf7PVYacuFbD2pUwJ7vA7gEzfkKS1BkahNGyqHFEpCZe7bSFULkacdbw",
  "key22": "9bNHi1BwfPLfjotQsRV3xwgrjY4hJKaZavmc39W5FB58Ko24Fb19uwQRUjdCC3gPsgBoj5obfQpVWeajoAid3sq",
  "key23": "3kwjCQYUXLeCy8agmrUuDepaq74jLDKp2zgYPZLRuEAbBkN7daJrmZb9tkhfvk1zBUWUPmfGiFjycwF9Tn38sLWG",
  "key24": "2ASpscD1z22ZTr5t2eGyDQ9XVZeHnv2yR7ptFe2Vuc4XYku9BsrubqgnGMkm78mGNjvH6XDNTFWZ3aZg73DJ2MfK",
  "key25": "5YAwVySSGg48MWjbDAKVeGpbnyGCTApekBqqTPXn29AKiAH72QpKFN77jcEVhQSByVnQGDRpJZ5KPRkvY6oH11Br",
  "key26": "3MHB1A8A3qGQaoXcJ3W4TutXYX6CKpihK6qkETUt25rxBodAKFwkSZj3X8e5x4mpcc65ZDDZSB8zF4F8gE2xwNTF",
  "key27": "3aKu3Wxb1CQBssCtP4wMSDes3i8CJADfrGyxbGkHoey9SYdQpuC9EZYUg2ez9Gg635SAWbRrwW184u55sEwysV3r",
  "key28": "VoMvVQge6ffHx9Gi1tH5Rdxy4HcBgfNjzvRiDaeEMkwLVwz6wdX49QdFJBdQzCo6LxJc7a1wrDLPQb5CXR4FX2K",
  "key29": "5YEJT56ewarVUX8AkDBTMpbbHm8XHTHPgcFEPJ2XCcJnQDxbvzPWXe81AFuJ4QyPQarj2fUy877hssdedknh62Eo",
  "key30": "3U1RVGcpfqV6peiiPFrwV3NREgfZzp8WyQLno3SdnFG5wctWLZLggJkjArSebpTjcnq9a9n3xvY6eGv5muYunR5x",
  "key31": "5CuhrvR56MssYaE2M2pxNegEro96Tz4L7KLiM5gu7kTtcfZC7tb7xDLDhsUJNoZz4vse5cryaTuzsNhSFC6UptjC",
  "key32": "3j2zVv3y19fXk3cBg2ytn8bbvQ3uPcDs4sQqpfbHvvsKiB5PXCcwuE7KWkPfvZi9NgyHpQPrRWxpEuxzuFPk6b3Q",
  "key33": "64r56B6XLmgoNq7rudNoD3xbUNcKiqCEn15mCaYR5CiPECrDQT3DV97C68xY3hDy9BwfMJ6SFFRhtrC3QpgH7SQH",
  "key34": "5ECLrNtqDrVrCmuAJqbmyy3e9tqSARm2kzkEj6aqEQ58NbNSuTQ89hHdnzVJDgvY6gNMmC55xT8VJMSSWyKuugLb",
  "key35": "4FFMZKoadChHfHnDtKDxu99DbmnusZNPfn86AqV42pzdUWvsmGbJfajP3oMfj7v5Pw991KSi5xy97ETJupv3GowY",
  "key36": "3hP5eW96mQgccBNmdLe3kyJt9Eon4tkd3kE2BDijDrz1FEmSmSwL1H4STm15Tma3BVhj7QbQyHgs8hwE8R489mv2",
  "key37": "5FqQNqptEdbkpMNxZAdZcsaLq6JY4jgQACBW3J8uokAG1BiHfePqdg2cCApFXQeTGbyYU2XZ73mBsNRS5M1P3gNX",
  "key38": "3aTjDgcXatPJQzkUY6U2ofCrTbFeouDbkMoaYGmX61y8gu3EAqcUgNtmXUB7V3yK6ZdzNhM3JsEW2WoBv3XLcnQe",
  "key39": "66Ji1qeDBScsyJG578VegihFErEL2zWqWU3FbfKfwJgLNLEu2U63CrwYRKHX2ngViUG7GjqbESLRMzqhCXUm6z3b",
  "key40": "2nzMSccyvBAhUgyPqPoyJGpaugfQZNy5BjELzqp1hkgaiXm4nbpoAPGRPepbdygNh3cLxP9nHyGViT1n3igZuLTv",
  "key41": "3oDPejy5N5ngCREUqkk7u941ndHeQm39MimzoFK5LgyzhMy8StsRSAVz5oUWfuNg5UbJtP26hNSRrNMnTi6t9rBV"
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
