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
    "53unTfPmwYc7zwG5C6GmatuNaFCJVMcpASmq8piHCZVwYMn4cFPZm6Q6w64EuBS85h2AyLM8WWZ6h4cYWa5UMBaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkYtvg1xfufx7SGuUTLA6qiQNC7vXUukYFn8Sf5eskzp1qGcksq1NwYexwv9Gn8wtgLZLMdYN2XurukLSmGHPQ8",
  "key1": "3aNHYXh4HUamAas8aqL9i2Jaw6nQghQN3oip6RbkkbT2WsS6nBd1DeAidscn4bqk8K1c1E3oBdtKstyLTq9J5hyU",
  "key2": "4Tn7PUDuZNug6JRmt3Yv9BFDh46BNMMGJpSpw4CNjx2hfTnoWNLA4ZTRHEAuXAnfu9kmb3Ax4xqR12NfSqpxk9jV",
  "key3": "HrKskmweyjVRktR4Y3iAyt1Xup7iMuMmUtoZPEXpiMeCSo7neh1TfLdnWMb5FWkLYDKhB33xHU1q9rToRA8EqyY",
  "key4": "4Yg7ph6napcZdsq2SzRjJnzVWCVaQLm4aJnF7YH675suph7nsQkKPWqfcwwxdU1YeYpu6CfKJNLZeJ74W5FqQdjP",
  "key5": "J7vLD41nxHTyQE7xc8mkpwBgeAnEbhwLcYGFKCPYxu52keBggmMHDV99CMUVpswGxTcN3H6rBNuf5VXwCtKf1hh",
  "key6": "24Ej2sKuuNUiRapSsMH398mQMmHL3mD3c2PUcV65v7TuvujaASqk5LTzq7kE6MPbJdHXVsVkGzC6o1CEhruCoQaC",
  "key7": "3j2UZSLp6JmxynR1TffsUBzRP1WJg8H5nWQnk4EPzfi5RPstsiXpSqQxX2dSjaMf7q6PHCYxA1Xs33i8239GGJTk",
  "key8": "TMibmcEDRsp7SZrVG8QJXFj5Dd51FdkerLfPbuXqKvsUi4giHEVSXwm7UJqTbuTN1ukrAoBeCUbgXuqBxVGvUrJ",
  "key9": "u2bWWMTcgXJu4f4eLCGcDCMucp8m2CJJNCC4pDTwp8ZSbNfuokSyz3oE6fjmgZeEMSDAmGhTZToirih2wRjbWBH",
  "key10": "ZMfD2krCmMJeAv6oKDucNjbcrQE5HLKoXMK1wjQ5TsgoeLeGRiToAZX1DfMBRHCqfDzDrPsjXx2WNEHq76qasMD",
  "key11": "3qnqFxfaVP6vAfSxSjYTsh7TaBkp66a6YTyxWjiuZhhfu2SH4a5vgpFTnmfWzr6Wg7VXs6zxEbSJcsTYisZtm2kw",
  "key12": "5idGCobvwaR4LE9q76g2YRvWsJbEDTFMXgvesa9TpUTD2i6WX6SMGbZxk1CGYjztSyfdnHB7cixRRPuu8CpAeNLN",
  "key13": "4ZdhmZHzRSUDsikvs3M5qzxLihP1qcXaw7wfaJ3kqrmCVfwti5sbvrH8mmGHTXY5SKYbx5SYpUG2Te98e8QMSCP",
  "key14": "x2sguyRTqjpbNZLDMubaaKfH7jz4t9h5wf2G4YadcUGhMWV9iM8nqXpH5g3xygrQkhmUEgDAcEwTxcyHTo53YGW",
  "key15": "w1u83o4AJmy8uPsb9YxiE2YpvGqZBDZqzJhK4GWVEUMtzpqp24763yzsxCPKQU1ZhFkWXFBpCSWV3EfthV7WLoU",
  "key16": "YC6Fqfidfj41KbAu7tAPUwhoJMW89Ci4BAHBow5t2pdJRsbaziBbcm8y3qRsu7M3kwN7Z8aLpkxFXDrTmcEpzhd",
  "key17": "3xb95tibF86AfVk4JbFuYBPYCqRbxi2pY6EoU7XBvURBEgmC33TyUHhcE8DYMvfcmaPDQwrCDVmj91b7iprMUZy9",
  "key18": "4fccsokByX3WiU7jwXpR7GrCHV3YZm8NWuTdosRbAXJgzrUFZShKg4SxEMScNd138k6ijHB1uyD3bBrSwKuGdta8",
  "key19": "inBrUbZgM3HgZwqFFPV6mF6xjqiFX8Nb2c9FseeEu36HBNpAMJgjuLxEjk1bGqN6cRaSAdKpf6V4vooQ68nZ8dF",
  "key20": "UMY8tvHey9Ud3gew3qfCbvLmCF3xsaz4BdJL9r3674SAWDoPBr4HBB3yTbbT2Uq5Ukq2LTMHC3FV7usgCh33UF8",
  "key21": "4orNJPCDtZDsTbc4WtrZkLZm7gWG7uZS4gCpLXc4fYVf6pxHYN9sFyucNJTReSedZgCG1Pt2EqxC8eFqwFTD1q5A",
  "key22": "wN63tk2SQW7vUAS5uhH6RxnLNU1WN7dKFQstFhPy8UezXWMRg6RYPE4fjpifRnYtU8DWHhbTQtoPbWpY5EhbP8a",
  "key23": "4zuMq7RUgeWEYLNvUGUxFdBDwQ7mkApAdPV62FuiUYQ7BZioGErfQMr5tmytQyHevKuRwgBvX5dYS7yTiQqvNc2S",
  "key24": "4r8nwzVQADuGjpoyFsMbKrYoGSKXWnwFWFB4WcKpkkjMMFFsHhtTjqPbkPVm8rzn14f8gKuyMe4vGbfZzYY4KXDN",
  "key25": "5Cn3XDNwy3HPKNcm9Hi5R8V4SmYUUCeweDmYRikwm5AT2Jirnw4iHiiRJmuhEgL2UWbHEFwJcQK2S4EFfbAyR8JC",
  "key26": "5scNV2Xuo4pmZku2Leab56GEYCr6DBkNWLZai3gBG2ZTXCmWD3W7YvthWQam88chCBnfQnDn2MYCdudM3zE2oXxe",
  "key27": "NZ6ZrhDkAZKWTBRjcaddLbT9Qx9zZTarDiqB1NEr7t8JWSFSAw6kQxeEKqVG7MF31qLnnvF8AD53WS9UiUjbu17",
  "key28": "2hj1PHLbKdd49SNc1xBY2xTRa2xyoScEZ5kXoh4SAqhEUxBkCah5CjkV5U6qXoNVE6MfwbWzhBAuN8Jz3HbrmupC",
  "key29": "5nxtYQGYx3rjMabtSNMc7KGtX85RuYYJqUAwhP2FjQ91ehfuPtQc8JoLvFBfPDEsc489UdAyHR4V3xCLKZiqBsUz",
  "key30": "4gtyAf2pbjzHUy6RZgtx8DRVYYLVSF3VQ9fhn8gbHieFXrjivep6Hh53YKqUZBQ8JugEACkhuNMTp6iBxK3SGa6x",
  "key31": "5uvArafMVMogZ57buTuRmJatkpoS5KiMjHZi3U6aVs9Y83LQ18hmNePompchAXjKNncpsWBBwtBcgtSUroqBzinZ",
  "key32": "4k1wzRBeUQtPowLWpfkhYcUPSo17X4B1hcKbZbUATG76PJMo1Asjqt51MXCxyxUVAW4vNcKKgiHhaCAMzKkyboQ",
  "key33": "5v6zShXWDToVcSsDhHqb3LqidSKLspYkSjYGxMb6dGXDQ2XxuJqNx2pjTFGvbzs8j4yyJbf3ZurBDWEmor5oT6NK"
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
