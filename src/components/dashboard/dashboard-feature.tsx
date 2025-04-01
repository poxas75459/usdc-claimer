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
    "4WKkart7xCrVLXXEpzky7mW9y24iCgVPeosxZMTFy6mQYdULQdnw83HCMpzMtZQsS6ZtEpTn7tG8LPvxKZGeQswk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QV6tKzvz9Yt1PfkoTJ9io6gtpTCyChKgHmTGbhMryzu2BkZ1op8V9phy48bz6q3LzYaGpoNNBZwuZJPomacWiNT",
  "key1": "pf5yhKQ4fCFrmh2ux5jkY5i6Nk8YrjTmPwjw7KFtA9V5LeFZDKd3tHJSAd4NdZSVdXWSDrHAeb6Y8MFLozgDCFx",
  "key2": "4EcK9BLuiJhJtoLZ8n9wrwNiQHf3svrujJvuNvGNkm6Cff3aipYdjR1USGPXjrGaYZaMKqPYtSnxoLL7q7jTvnoJ",
  "key3": "3e8ePPhdBZmztssarmFKCmGzgcEYXky7WrfQGg7W2GVmp3zoAFSwVJT4Fb2yqPzWdygoprtotXweYW332GKDGCKb",
  "key4": "t4ytuQU4y4DefK9ooYruWgEiRHS9kmbnX7sLmmXUdntEJ18fvYH3zVvMHic5y2ETQQgGwzcGqquKe3vCp5yq7Cq",
  "key5": "2TXE5qm5j51E65gsiVmxhWeD6J6sma4aJWkdBthz2FDHdeTrYKo246RFLMZKnDuuLcKq8sV8EH4hYSws9RACdEmD",
  "key6": "39mETZHK5LuDPwbMUCDgwVT3VjDrxdTVcThaCjL7vwEMkcKuMwL3nmPGkCLN8jfw2h96qc6t45ipg2oKDd4FD8Rz",
  "key7": "21WisWkgPqrbez3CU1e11Qh5mxfAaPSVq6Rtv2gQfggwhJdiE8nP8wHLtuY9aVgjpFeMBL8hrAWX5MoSSwvbvw7Z",
  "key8": "MVcWpvqB5K8z6DDP2LrQugzqqtUGURo6mA5ynCQFuDL8V78upzR3cztPLgr3NfH4FhAS1gU1diJjDnzvM1BUKCh",
  "key9": "29RAzkGHVV9L4X5P9uwrrWFACBDXaHkGJtL2VAAPuTC6Hg99o99EgTEmpBqmkPnbhPMBaNPE15jhKASQEVs932kK",
  "key10": "5SbQN57Lk2Z32d2rwPZgX1hMqdSeAe56kFKiaoKTAsoAdHoBbs2GuvkqLDaGLUHWbmR3eoLi9a2igPw1xdiqXmeJ",
  "key11": "36G3kqB7fDTWmFhfjcZaSRY7yKcR8p1ReQFm9pmaij9KDoXMDvyiqvUJWeZwthJ1JitRna86RwDoGKcAp2o9e4KX",
  "key12": "FAX2BainsWmyu43ZCjMDugChw8WA2Q96apFSPJqwnFRDbRLiBwDkM6Ei4zmfuYL4trg3Vb8WcVYsqBPRWw7jDrw",
  "key13": "5VsACAAKrtfSwhmYWXEijEKX5eYKSRJyypbC14Ji5UtNWXtkCCNVYfnuLALbx1KLtVKx2JzCx6bnta9yFwcSTcdY",
  "key14": "4Uoy8s1EdBkzNMjgvFcY1S9LaxE82AuWWVTodD24Z4Ukbe2Bg2eGndUu2C5xovAyUfZcxFJEHSxsVVcSzi5WsuG7",
  "key15": "2wkYWKtkaZWM73YUv272jXbDsHYQrMeZ4WY4KVSDyGVDxaSSCeRZ1yde1BiRcrzyv3bxV4d4sEDTt6ZGa3rYndJk",
  "key16": "2sB7kVcAekgZJFsDsFDoi5FE9eadNyFvdyN9zeWvDroPSFj3pGYtH1kRb4LzxYtw5t8VK7FJwu7iqqAh9vjfgJQ5",
  "key17": "4KE37joyeSSF9ow4YvHUeapaznboGD2B7GW7t2e19xMgPiXdKRdQRLdUqP7VmUwE77mbHtEMrVh3aRYnZ6WBEHA8",
  "key18": "4B9dPuUSvZtyN57JyFvhrMxV8WwhqAZR94DeWgo9iiNwTYwwyAvPDJ4NJiDabFiBhTgVkcxGCvV8N49GjY7wZ1N7",
  "key19": "3HzMvJPpBcVoWz9d4esmuM6S95d63SapnGnNhNqPUkNAGxc4XnzFpVP25Ue3Dg88i4xH613jS3i6LkPFnVKD11p4",
  "key20": "tp1aCzVhrGxwvCBAsTMG4Knj7JDERTB8SLyXy4iw1tFEjtdaZ25S3QuSdSSZh4XKkD5eAuFfhWikVmQdHCbtV8x",
  "key21": "4UPA8m35MdXQbfDMYuEtkc5v2vAJ8RQS5FgP4fvFeiUXvCn47kAbhKAPQzPcsWYwcmSqKa9z3CT6gummqtmvYvNJ",
  "key22": "3tP273DebSknkKP3aMQgHKEPLM9iLpHvtRSKghK25HrhZr36eErMWif2vRysCMBXMimM3eUupAaDMizDorhLDZB",
  "key23": "2fw7v1tthAY2rqSTPiJ6kypLdYM89GmfiJ5qYKdbHfSjK6TNN9x3dR8SrHoDD6tyL9HCys35ZMccqDf8ms6BckK1",
  "key24": "3fdwuJ9z7DWZf7VZsAnkB8eTpkszV9PDQMaGHV776qNEU29STPs2LwwqaLk6b6LgXUfe3GsNQiNyFDhNhhVrjfGW",
  "key25": "53xSDKZa3nw3TUb3WZzzbwtKuQvNqFYu21yb691EVd1XXptCqQsxAqMwKXRzqwbE9Tjy1VJeFRCn5NFkqSshMcyr",
  "key26": "3PSR3EoZqXN9dwp7muPnrT9YNdUkNjJn6PaemZJkL87WJnRDutYM1TrysPYadUF31W2cXMpQc8HkT9fdTesxawGy",
  "key27": "BvzcfLSmvedemfvYtv4x7LDPJ81B3gXsfAYbq1V1J7aebKFX6vAAk4iyLyHEhtsuzt2oQyv3AbSiRw9ynriU8iw",
  "key28": "2GDodWs9AU5Dnh992CBs58CHjPH7fuMgUCGVehTqD77MQTu87fozU1d8j51r5jsWS815nzk3R87c9RkDvQbg3zuT",
  "key29": "2MSqSuQLLLpxxLJV2CToQuP8RbspLWaJ7qXgecCCGxUX6iMtiEwNhxkgGSqrDnR7nhipndEeP8vHnXg3muqFzJMt",
  "key30": "42jpEFLsRHrqKk5Vps6bTc3AjSeQCcUa82pLf1hbHPXE1J9D7wWVXXgHVfswzWqAVrnxzfDWGSECwoPfcqd5swFx",
  "key31": "4EzAmfYD1ETqut6eHi3wbcTK6PuWtmaGcM6PNcRhDEstZWfxswGEtMoAfwxnK9s7tJGrVgfZQF3byyPKuVX2MRtR",
  "key32": "5J3yqYV4EHBbEvKsF8JMFAwFrvWnEmLboxBM1b95iADzkfbuTtoDEsGja7SPq2JDipsHzdSNDZMMXacdFd4EJ8re",
  "key33": "3fC2MZfJgevuCqJjbFMF5ka5oc3MXZb5f1SUpn4tMVETMJ7sqwYohJ7V4LGydKYRKHaWE1daJNNfTTzMT3wxcEax",
  "key34": "4yHPLYpKhqi8MJMN7w8rZda8U8rTyag2E5FUdaNDXaYoxnXevGN2hDYCNvUctFgQP8xQHzcRHvrK6rxiVKytarEs",
  "key35": "2M2cJV7oPEsnTrTJMS8MD83GTo4CAfTyfJyhsFEhJENcjeR6ap3ic3htHkrJ655wDb6mxvQjUkVb2ZpkAxeECCu6",
  "key36": "4ySuUe7bDzSFFM31pyXQgVm4JVFN1vdDe58Lt6ndG4FZEB5g14vWeEnjwzTp15wuk5K5mFTjmNHEWBTVmpSDDcZW",
  "key37": "ipeoD454nGKnWgfT6BZzu3S4QE9XEFoPsA3pVm2M6XApeC79WQzY33FbHnN1sz7LGdopGrVm1b4A7JJtC2qX5q8",
  "key38": "3eVnUkGzw5rV934zKbX6LsRHTPgJKydHxw1qs8MFYTRVgiAKYvdU4AY7sixrqEwuhA6hrnppJZsyewDfQ6Yv5BQW",
  "key39": "HTcXxL4sDP2bwJDyVeyNh1zVVQctDFfxUYLKrQni8JrpWPk3QjkaqcQKgW1asP3Xz9zbx1EjSnvNfhvx1eLumvr"
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
