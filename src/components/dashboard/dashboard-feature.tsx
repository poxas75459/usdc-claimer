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
    "czPT4oNSZYG157RuceRzJpNAudWQXkHpLQ82SLq76hZfrMnLgy3SECCdWHtY5PfQtuNrzPeQGtMAmXfp9o2hD6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSyJ46JFSNU3vEzvaTYckCTdUfyTGE4ULTmsYguMcpANL1yE53WKqmPSspHPvbDQXGkrvBciwiwM6AiRsLWtZLE",
  "key1": "2xJQgAmpyXSNtAciPqmCcPctisvAfCC5KU5eaSxAhwtxhh7uVLkGU13oPfyAkvxpLCJsLX2YQchdLmNDopu1mVvx",
  "key2": "2L9tu2YKdfaCak56LJB7Y68rDv2jzvGko7ZHTUKtomm6iiEXDJnXGWdz15pfQPtB81cap52Rj8TpiZMoLSV8znn7",
  "key3": "4jAbgSJSYySZusXi9ntchMwoH3RMUMX5hgak2w17vf42LgAjuwePxcYJdcVHHNXDweFoLMGjMPY4XT2Zed2AfWbz",
  "key4": "4GDmEVXrFdW4mptS11tAamtvN8VTDVeWBHD3iCcoDfo5EpSdJKtuALk9bGkPrp7uN3MXxidj1CeTFh5jAjT9512n",
  "key5": "4RMXBZXEAAhooYZkLTsngxDBZRPbMyrdBXiZ3dyBQBspvQfSyzuHDntsM9B6ENAcfWV3CCkqUkZ25nMfAavGRPo9",
  "key6": "5kcJtD1TKQGJUVZL9Xtzwbe9UtrXhEpnwSBoUVhkEFFPtCwh1LHcQtYV2EcxUqigGvmPfN7hq42TPumQtmV3mYc7",
  "key7": "5Es57jdNeDdQnn4YDKpCEeYQVcMhqqYEJUeZgxUoWt7d9AHFbE4zcqXfcJXCaKVpgVFXifFntGbvhsM1kvvLb5ZE",
  "key8": "9kuDMTS9LBTQb5GHnj25MMp9WBjsL5pTgXaCViyZcKDZ2poFFNgqkqwWee2Q1Ee34wYpA56txu2XDAuzKuQufJJ",
  "key9": "2VhGho6XCjKATCPbjNpMXDAUsvf75gZnmAJ7Ja8V4VFkCVNiK4hEAbfBSMR4jFzRpAWdgZhLmBAcRdnEtesdq9Fq",
  "key10": "2X6XHXYEZETA2mjLSmFjbLjNRHpyaJrsh8ns4xpUKCDNJ4d4SLqKDEQuHGok8ZqDUNJZXr9xYHRotn8UgzZtLmrU",
  "key11": "2nU6PMWCqM7C8TifiLgv8CHJHmkJX5o2ASnjhs9ki2HvAzLKEHPKEGi41hsgM4x6gbUQ9j6j9uihs1Ruj3o37KPa",
  "key12": "5G3iZz9oL33pCgqav9zqZeLEUrfoWqdbavEwY4pBMoREXm6PYoXE1jrDtzUoABtrJqQ2vyngci97J52Za9B6bYHw",
  "key13": "5J5rnFgbQqWCVRvWiMjrUwykbSP8TUTFTr12UtVGi9tjwxyPm7kM8qmq512yf7xyJPCw93LxRSwoRxvvxWdavQ6D",
  "key14": "5rfUiRZ2BiVNBeiujufp1PVMiqoWXKvR6A586UgvKQW5kkDiocgKXicuBJPkNSzzjNpsHgwa5tQDAEPf7crHUp2p",
  "key15": "4kqSANye6iBYUWNwf5gB5cmmQm7YVLPfe8n4WTPqWqYVuibg43JMeukb97Y6neXWc4hdM1KezPM9EFUrCtPebLWQ",
  "key16": "cFJ1ZiRP5oWHAjm3BtmXEdLmVvQV7ARWQEYco1VbFeTXqoh5dvtKude2tqxw4aSDJLo1EQfScivxYxzsmr79a81",
  "key17": "5XGbNBW26DodGcFttfwL6FtvHdymZUvh5q4FDLBNcDs38B2Pa7VBjPZR6t2rAAtXEcLepaYEBtw1Rn4NoQUsX4JH",
  "key18": "k2jisY5tHz9UFxSkcyGeoLo6LpxigJTD3o3fDMxaFTcTLFJD4Guhmi88i3wfomBgaorw76zGfe1qwzVKmyivGVK",
  "key19": "xk2vRcxfWUrHfePdZN2nfdpqTstLDCTYn3KDbp9usoo1pVdLCvDrnmVEQfe7zG6ub4uUbwKpWmNXFYLFTioD9oh",
  "key20": "47eTrCxYgS7sKUo6E78T8C1knfAsrpCBf8rp6Jzwf1nb5nAM9cDovQqyri1J3gak3MfZ3gm7bvENuDw6UgeKbX6c",
  "key21": "25bcn81uDKHz3csGGk3kJQbG9wFZ7Bq285xriJpMXBypwpyUwELsdc7CLEyVciaxUNa9sCiXJp5H5urASeGQDiPh",
  "key22": "2RPrQaZUGvF24oWNvUA8HuibxzWBn5qW6yUX2MwCRdHn1Y1nnfk4aqdHDcx6JzGwW2RD7WFbEoHNbUAgBWEUTsNW",
  "key23": "3eqtHAqwyZmitCD5Ti5sJwxFW88xd372NqP51h62JCtxqcLq9hq8qAyin8vUyavKEFg6XX4gdgoRobqdPbNSSCyt",
  "key24": "5hkLfeyrmgmsVJj6FXSCevVy83f4aikbuHobVQhsrREVN5L55CfLqwzBw8fAh2bSu2VTGznrm7tPM9wkDKjBekcd",
  "key25": "224aqqowT4SGr6tygTX9mxR3VLoAGRHwwkJ2zAL5h2mg4Zigdup2aNxr7aDwtDKQURGPkJtDZudYeWiJivx1hRxS",
  "key26": "38WihLS7R7S539XZNWGVKmBqYfCBQnqZTW7LgPybRUTRs4uPn71RJ8PkbGpHjC2GEd2Q5UsmfV6GCCekZPRpVb2R",
  "key27": "3JGHQdHHJ8BGH29RmRyFmBg9dXYjxH4MGf5LrycsGMkXLyrbg1qMABh7QekRcytbKkYxb1w696q1sfa9JmwjJKMh",
  "key28": "67AmN7pEvMtGsYHfBmDdM8ZKavcGzNJzQdJgPogpKeTaUgQy4dhXhTmYXABXCorG9YC9hXdQ5kzAQY6s1D2eDL2r",
  "key29": "2rGC8WqV4ZT8YZ6XQ2wNhbfQoGRjsuwakjTu7yTxWQoESA9Bny6jrQ8e75FKnfrj7tWwddDNc7wTfkvUwgYTS3w8",
  "key30": "ej9PVakNUqYAyVg1AE9HUFZzSu8yAQgV9iu9PrQBLTEyXShuoTGyo5TMmUqyTM4hKzES3LECdjhVYsDXx2NcrgT",
  "key31": "3FgMF6WddXBKX1ibGx6abnzPgRvU3ACqTTsV6VYMVKj6cZQVGuiTLwSo8hiZzWgADwtiYbnZbKTDgUkemHeAVaMG",
  "key32": "4oTJJWAqwKyGgPmByAtuPdp34bXhEruaGyLhuYLicWA6k2cFA5xKCpJW87D8KjT24RDvGt6ST3c9unrDTyNSYxZ8",
  "key33": "2J1iud8kKt3T9WLFR43G11dqrRkqmAv4HxjDH6Jiyv9k7bdujnPxGT8kcpVk9Zo6jUbTX7fEN3C8EwqESRucbS3x",
  "key34": "55fA2KFwyxGjibaph4YxcYE3mbTve5APofvY1nRHqNwpvYwVyF72Dj7tSeSKA7hN6qP2GVerXY8vDUPHjNerave6",
  "key35": "upNPyNUDzCWTryNskAMcvfwoUir8q3ZFNh1romA5DfMEEzJJZzrptGVA1wt35UGK5york2U19Vc86X9oBfuCq2q",
  "key36": "4HCyBUGzWGMozdp93W8w2D4tZ5SyFs8DkCkRWrJVSxZ8NFgqD3HVH6bebFh2ZDmL9qtYtgnX6NGWHapga1wjYZPa",
  "key37": "2QXz56WkRMTAQH8dZnoCTgZVLCQEwRePR4b8n6qkZMj36mwmTTLqkXMXWBLazKFhZoaiccgAfj7SWEZsBW2eUv5A",
  "key38": "35GPk3DEjzugUxfFE1rXfzEtaFpZeW1tD5bNM3fTGozbtACsuoJkuNTK9jFh9bkdFmPsiafFZ1s9JK9oK3TtPTSH",
  "key39": "63tXi1tfiGRQx4Fy4yHVEfeEzGLnZci8EkGPcTtRqnW7fCaUXbhMccADHsKoMzKWGrLD5n3Z2N448z29Wxzerspk",
  "key40": "3YwGAFakanC1DErsFxwZGLhXZd6ayTBMoioXe5qTZQ9pKS3DEb7wZaizDfQLgzUzPcMxfDHt2RBqbWZtfjhhNHBA",
  "key41": "vwbDHE5DGZKymwxomDvS8VXRnhffu4uq3UgimRoaBEf3v2eyKegZhYgqDbxjPuga5AswaTZi6bKDpnRWCPtLC8S",
  "key42": "47qLvWUvevmLyRj8CmoqjX5SbQn7AbQYmF5ybQSTXY1LyoGG4fFMggwFoq52A2tsStZTcywmUfSEovd6eKG1R2Fj",
  "key43": "4tg8H2BtgoERiHNXdsDXfeeiF41HL3ZtnE3vvfWZTDp8CrjKaxoMR713bmpY3qMRDats6Q6wpYmJu4eQmSqCqFdd",
  "key44": "38CwZFfcdCBd962uwHB3Tja3Qij53PY5eJdRuFJB2yZxEuTMneTikzdkpefH9Lvo3jYRs36NYL41wjEcjq7TMVWQ",
  "key45": "4wgn7zQndi1x1MNR3QTFJFNg97AoiW8jj1CQ2zJzMfkjGxCcExEgfDmCkkcwiGfgpiUfCpNBV7TH8CWs3HJtHLfZ",
  "key46": "2HQ7R2VmgVLHAZ8kq6YPgRbv75us6DHrFZBWCUF7L7Xn2WZJBP3WuvYcejTNqRFCjS8qntmQLN6gaoup5hX8vCPV"
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
