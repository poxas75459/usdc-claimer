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
    "3G7eKWR28hfA8zBeENn24QGqmnSBrSSCPT1DEZLU1KM2onc9Hm8AYYuRaaXg92aFR6EiydERNcWk8FRuYCE47X4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzZDPu1idiXE1KqTQUjfDxtE4DnVREL7oKUpiHxACSjTE8K9vv4dLPtN3Yd6JK1MByF9CyB4N1KMmBZ1F4jkfFy",
  "key1": "RF1VCkxSt4cPAco6Ebi2fuwzkH1mYZtdrC2UshQefsphUVsfLGRHi6481tupLR7HBLRPpizLGEm9cJ2CCqvrKez",
  "key2": "WoXqngq1DZGpnjHp17QTaqiHyUUcbt4dLCsUVawehBavhLRFGbzHuUMAiX12y4wdfuaey5bBPHDAozHtjwp1C4M",
  "key3": "54nJjFwAxejAAJ3WbCMgfa1Dfn5pRKdimhejtsZST2kJF8FR9pgQzDteVbFhabxB3s5MV3arC2uQmpbrqvj9kKsP",
  "key4": "ecQh6nGjKPYx1PT9UkwFRYLSnfGaVwiGu7U9YSkgdq4irg95QDEk5RrUibJBcXom57YjNJ96qZs6Ek854AZhvVg",
  "key5": "4SZnk5SGu8AfQMEaC7RDCXqehUYqfdC2fQ5Ds3rDmmR87tEwMzNDERCV7de3fXVPLRkzaVmZAZPiPP8SvVsx7evp",
  "key6": "Fx9bxjunnK4D9wFXj3yWnd3XVvFDdLRKWfqJ5J35BxRCuCEM7KZCGTeJGH6LaJFyfDjymq9z3aoYBuZvfkZXezt",
  "key7": "3Xni3aVkaBdcXq82PEEJHdKp9jqDvrHgRtHb26FqgaAsTuxgjL7tXJcwfqVPPpYWp9GFScXDA2V6pywu3qj3eA4p",
  "key8": "2y1NAoyp1QejHssMr3Ka9w4URpGakSJ3Pgq3uRtNo65LzhQaCpsSuQW8cZgvAwFGFsAgwjJWmyxzya4ErcY8vHt8",
  "key9": "58c4xq7uzxMqdydCVFji8iaUxF5PbKKcoDAxiHJEXwhYCRQCpDHDvyr9N47Vr4MJ93hN9yUynYgyCtwnxkL275xZ",
  "key10": "2GHMtJFuSzfhD7gLwPftcebgeiGvAjePauTmsntKVSK4K6fBL4c2MkWxQ3kAQx23hdnMbPvLTeF73Z2dFzj3g37z",
  "key11": "5E7jnFvGcRgV5qXaqs1gciXBBEpiEwjT1uoNXm62eaVFyzM5o9Lgam5iVxovnhwVzVMcAtqtHrS9DFf1Jeg5KLyU",
  "key12": "47Z73cMp8FzHoygGqB1gWsPiNtA4PnEWEz5chodTu6dXdjxxy8dAKKbNAXyU6C5iS9QfxAC9X8otnQvpXLDphrQ8",
  "key13": "DuyB5ng6vHC6x3VN87q6z4nCsPsDBrZz4f9Q5Q3zLeM6nZ6XNXed7ei4H5kDPtvzwVo4KjbnjZGRNEZhhdDMcNY",
  "key14": "V7f55qQmGte4u9aae6S4tHbxNGbkb4VYYpLsxy4AzWpXCRQTP7puwCnEM5dWRbcAJrE6qBMkwYrvoBecQbLgj4P",
  "key15": "raTC8SatJkYZHYUF3pD6C6QVoxKJS3SethHXvWuQ3aFv6Rb48wLS4Ks1F4hZkW99ppnb8Bqd61j3HusimuKLnav",
  "key16": "5HHdQrZB7ocXuLrN6Ek9bdPYpRgKCckJqHyw5zn6Z1d6vGwVrgGeKy6FWsAow2P7hVK643JmYrwTQRtnPNDVvYPS",
  "key17": "25dvJ5SixnUcogvDqi4YYMAqv3kJNbW9j7EobqySWS1VZ2tFffRQEZExii8G31p99g7ChULAXX1PZN1xvyF33Gqp",
  "key18": "3d64D1CWhhtCDaotLRNK71hD8wcFka1ZqRe2jB1wkAPrjtvAV59BFsWi5gRDkf2FqhpaZmDW5aYeaZio8VYSoKhv",
  "key19": "2cNRhUBv5krUfeMtC3hXtcAab8cLEsHjB37TyMWGbkfgh3P9CEZyow7JynhQV7zNG2tYR76HsUKZ9hn6JqvYrH4g",
  "key20": "vsKJedcf3B55bVcDAitDR1deZza3TYPcRL7fuyBhGQaYoJQ8mD5JAgi8i267bGC2whc9Pr1gFwQDmY83k8oK8ru",
  "key21": "4j7LnCjgCaKaWjohW4J34o4Lkms5cygk2Lu2S3s5ZvUvZzJoiV7AnEJM1AD7h57u3vRDnYcZsTh8bQotF1LNvCh",
  "key22": "YEcBk8QkCWv5WwCb3mrMd52vEcFqgxwwKeLQSxgxkg1vatGW41rkPTEVe56jQXKF577tgkL4Z54KkfGMBUxPx7E",
  "key23": "5PfjcUuBjnVnhhRQbx25o8BkR4zqdkrVrmYfnmWGYULY8S5v7EzZKzyx33X7UTshvtRdSXF1G9A5M8SkNuWaUX61",
  "key24": "uMXTuA3o7CooCHeMP3JjhHRGtBH5guAXEWVjYXG2jc1z7ATZ79ChNQS1z9X1rkJR3bbkCQXgeuPL8exPsRFKHsR",
  "key25": "54HpQHkS2NYAV2d4BewHySvuF3Z27SLPyHnXfeWvwXbC9pQj9pHRB1ARFPjqN14fE56p5PQQWTUHbYYE2DSU4rfZ",
  "key26": "3GkvXk9uDDv48zBwC94ZRHyoXVz352RmFLHKUM9AiUWUopa8p451SqhTwEeJSa665xYGvYLtz7vXNCLHsMeTebPy",
  "key27": "5HAg77CqybQLCrh5iXdAGtxRGX2SnYtWQhnGwf1x2ME2QuLbUzEGkXgNH4ZQR9jp3Mdtin4vDDaEkZphJto9VCnj",
  "key28": "2qcDheCrmbrAByQ2f3HqYX379H73EAtWjniBsmNjheCBKeFCD4CStZWq3ivAtQEKqUHnXw6ozF5vHK4KuarXsZzY",
  "key29": "3j85V3XxqmLvj7eufK1tub2EWZ2r24dYEwENHZCVLaQLeiKGR2a7QopGMxrmfyw9osxAhjBZreNK3ioYLz3dERMd",
  "key30": "4V9HSqJAp9vX5RduDXiSD53JaV6QokqHpZohBsCSDqHEoucjYJWGDAKK1Fr5gNDPc27LK2gbCL5bLg37kaGdCftL",
  "key31": "4zikPg5PqUbWvj7x5XParSdrFWWTuq2RM6NhQMQoMPLPYno72gQsaJVhSn3LdYdHjEKPoANxHS1AkDJqCUW2LU95",
  "key32": "E5jMEMU2KuThMGNy9Kwa9cWx8zwE2up4AXjytRRrHs2BKvHPsBVXLzPye258gge8J87DkwrBRjdmHLfydMmXV9U",
  "key33": "2sLa1P9iep3MRajPZvqdmHaiWMcoUret4BSjHtq1oGgdcgEPkRiLMR1dZMFb3hcgEiFeLhuz6XTWaoJBtr3Wb8yj",
  "key34": "2hwvkuNZBnE117Bi6kSUvXfzq4x13GTyWaXtEyP9n7gBW1ZdMRwk6fwhejAsJDbmz8gtLtEoANxe4eDJDhmb76xb",
  "key35": "65MMAg18pBno7bYkpCw2gyJt4b9YAh87LNFyFJ8CPdN6gabKN3DJV93kF46LFur2UCX8iCpfYYrWFYUktvg1uUxD",
  "key36": "2hQCTwtaeSLvJCwHKW57VFPPfV6KFbwRbznK67D26vH7vTJJoaS5xXXLGgpRFey5p3e83QxZc6zshjnguNWPqA1g",
  "key37": "iYo3tjq84iuP282zWtAUme8nhRmCwLhn8qoecFmetMzCMC61kH78b5TZT77DgsZY5wewSDAGDBiJ91f3NfKH7Kn",
  "key38": "5qFH3AeFGNnQ2LF8cCPAzr5jqH4y4QMFraL2wZjMBSvmy4YrDsDty7zojv9r7Jsob6xhHUUYHMy6oqEDeNz5HX1g",
  "key39": "JDct6En3BiejXp3X6YG6v3eM2ZykQ1vabQg5GCxnzfLJtJYwKx1my5zy6DgEkknQB7sCyt99K2Ye43PMUxX73Kg",
  "key40": "5dhqTBY4b3sLPFRF5vmuaMgdbSZPxAQeToTkVcstNR2JBeqX2xAuq4yfxfzAWewDnjmDnHE8nx8Gr6DpMqpyTb7P",
  "key41": "5HXcQPVwyrDg4b4E5oR33tkbJcUpd2PuxEPyebZUsEdSCSJEWJiiJ4KZeFKH42SkiYe9mnMHPeEMgW3kam16ogji",
  "key42": "4cg4oi6q8Mk5FV3geVr1NZKSJWJFERrSDFi4ZKeg7PscjFWjv4BUEos9bU9vCMWeknr3wMMyaYqKJ9ECv6PpoFua",
  "key43": "4fq9NgjmNRafGLjDwPx3NiAssm24uBd48PbeM9rWhV4jzXtncXucMSrr6bs56GSC29QyXVWnCPC2Rfpctn43R35R",
  "key44": "5JxdRxTAxAbM6ta7ATGwNfvUmLPeRXpJWnGvnDHmuvXGqrRdMs8MRNVZZpi4TDS1aioS7jWEidwnEGq8rNbG1tWm",
  "key45": "ekvMPshSE7wbGyswgVcCyojAR3GGAKvMo5F4sGWhCcypiH63iRKeQa4j2jwAsEYc9Y5MuLbumkieWD4CSYc9xQs",
  "key46": "4iyqidnitiQYp7B1JE2chLiumrhfEU5WJU4yF6xptBvYtFSztf5MAVh26nguJX6J4S3hqqS3WnRavYnZC33xsyFK",
  "key47": "4r4o73VR1QcwAU2vdehVr9T7oEfUutSxs5wyggQw4eN2RMP7wjhg92p54f8zUDtAU9cuTbnQWEZbupDoej74Mjuy",
  "key48": "4vCMWQtXxaBYFduTRKgsLk77fzCca5gnJnE5EVELACxC2ztpKnn78wBznMRrL9zNnSFHq9bMz5cNC7bcKfsyffRn"
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
