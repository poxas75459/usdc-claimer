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
    "u3RdTELiDgh8g5KsDtMvT8NKYTPhuAVzhf5JoZesmPVJVXNjXgCoFZmnFq2fiTCNhNEnY5eSjmLrRwjfe4VYZEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9fG5TSBQf5nhgsMnPy7HP5hnhwouCa4XCGmS6xCP3PipYEoURh3FNvXT6ivm5fsnmB3bQN99Y4rqDNn48eE5D4",
  "key1": "CEPrbGZLJVwnTV9AkJxHBg557G3tFW5vgDuj4RYjCfodqP3M6cf4LgUNYUFpPrN8xNKyhNAgV6Apo3wQmcDLDfB",
  "key2": "4wv8mmqwbykqSVoCPUsTVrp25vDjcbnrpQKBd4dRrkGRQjvuGRjcLBENfDUoBFnxxdefCPQJWiaiMqAvVBwvznNy",
  "key3": "2i2UF8gfurTWAC6DkHFAFTF9ZajTJEb4MQ47aYu3XNzPqoN38ABa8auhZhSmhWW3HQ8Qq8RTukFSNu2CAW3TyCXy",
  "key4": "4F7r6Jd8PTWBN8tbfkzHMstUK919ZMCu7sfUU9VyCYzy3Ea9gfo9bV4vyL4CeGcAezVtygYyF44NFsqsW1DvgDzJ",
  "key5": "3AmifMDPuaUrgjAC6GcPLdkrJMsooQbEoVGC3GsTmCCvm3Sarq6iBPqxEDSFqfcuQiXvdHQfvxWw781Wo9cX6Lx9",
  "key6": "66SBpopzSxD3FG7TP3pY5wWSWEvcyFHDtpcdFn1ZfzCMAoSuqcFgxe7L6hapYvbzNEidYhiv4hK1hFHoJzt6uA69",
  "key7": "3GgVQCUzkZtG8VCTPQkLVgQrAJvjGSr4QJkYyCvBLEmBttWmqfKTz2c9TmoiLAeBWqBHMBcZJi5HbkFFpmZcVAVn",
  "key8": "33RUZ1FhkNqVWnbUWrMKPqNA2H1XyXXMY365HxuFV6QDHf2ZyHRSorfQMu57KSCW46taUXccdk6aRzL7CfUM8E4d",
  "key9": "4eKpm2xUXRnc8dQCYciW1wmkdYuiQ9bCTA5rdEzr9G9fk5k6xZKgR6FXfpgTAxqkLTFFeyucGUhNXh5wY2XNTaE6",
  "key10": "r2JXZc8GbU2PgNDrterCoB5kAjucAAPDyv4EjZfJbA7xSTneFPEVcNuQC4b9Y65D5KAcX7kpMcjL3sbmoJ6eBfL",
  "key11": "gjScoKv34LGV3rN6bWNF4FqgLG2xtqvSunZeLF5Uu4BXN4SDtiM2fw2yosMSos86UDkM9ZXQM72XbgSPzzTMtuN",
  "key12": "3WyM7nps7RFsC4WDqnoKGYHFZhXPyo75zajF2shDyEEigg1odZWfc7S93jQKbrGfDbri4AGUJ8dbtH3JswyGxJwp",
  "key13": "5yoRPnGyDBnF7fh7XzjmRudVKtVsYRFsyrjou8EUSHBsXZUbhRVGCPgWYFbn5cwbwWrC4Pd2UW9VDeiMV8RTbY1H",
  "key14": "3USgBk7aLho9vpvWtrsUKrYfZx9gz769CrzUr7fNjVpkH79kTvXR3kWCsyY11zmpTgEGYpNEA29Uvv7N82MVeScA",
  "key15": "3CpwFGxy2AVtkXJt7w9v8xF4Q6BXsH83iJCtT4uepSsWAJ2Q6nHWf2NiqEvQQUT52jmybhBCN6dWMFNzY3ePsNzz",
  "key16": "2gGay1fJqrecewgN9yYkLqqVHwjqSdQZU5CRSxKC1whMC12Xs79Dw9UeggvYoyY9oKbt5kVbypDtP1hxhVkYkMfB",
  "key17": "5hkHw8zt3tDUTxXw6WkGoJLz6bNbeMNh8P632m6fGx7dzvfFd5S3aLze4Ri8mgxPSTzeSatULjhVnyvBc96NoZBe",
  "key18": "5H5YQT7sRZSAvNh79tiCeXCf5JNyeifTy1iwNGxHZaCPRqisY12HUqB6fDFeAG1dZ7BfESxPU7RnsnAb4o8t5QzK",
  "key19": "2DeTnZ6UEufKi2d91d3FeDH2Ta4gBwfmjMyjsf7fzzrXHxCrfyruwxKzSFRey16hzCpQiNmpbuPKMies7w5n85jj",
  "key20": "3jtCUq6MffHRHcjcCJz3o2GjVyme5Dmn4jdhSAM5y1fYvZ2ji4GNCAYgcDCSa2XVSJz23XJjsyjPxwjHVpqbYXik",
  "key21": "43JSc9SJx1hhH5ohqmHd4eQen1usxvZQgux31WKdpL8xy61Hn6Mo9d7fP5oQeVbP93TJ3uVgDScXN5PQarXNHEvB",
  "key22": "3sAEWGDR6du9V7SpgkM5MFVZt9nGjy5cTRBkaCsA4yegM7d4RjSjKgAZHbPc2hYaX6e35jBUif1oE5L5dyfGhMDj",
  "key23": "5bNEtDP6cQD9z3Fu3HyLNyeJAWJdhazB8mcoaeXN1nVYxwwTwRRvkkuq8pm2E8iKQRgaBv9b6ZEoXMRnWwjsmwYL",
  "key24": "5iuZ4LioB8fw6XtCTSnLwAHHCkh7o2hsasA5Ve4AicR89ZmpQm5iCh55pqFmzhYBqCmMs9j3wat4DKEtkm1iPQqG",
  "key25": "47VhLigZRFmFBSsTi9vehT1rTBWq5sA3SNehJ4F3zSEYvd14ZMcURReydaTUjqGDzuksJ8HrxJNca8Lx3eze8qXQ",
  "key26": "4buFNaXxMT4b4smqxNWoVMXRALXSxQaewRgu2E8FFSNBy4Gvezzz8ZteTsEx2q1uUJSPVzqCfY7tZyC5RLhy2rTV",
  "key27": "jt382VTKzXB8TfAP1Hjhostdw3s2JT4HDwVEs2mEYiLgNnrJiCdTFaKV2x5URSDB7Nceg85L7SY8SpCP3xTutgm",
  "key28": "41MwaeeF4HxkUstLfZKypo9xKz4ie875zK3skLf3csVD3s7KnTuZ8dhwTRHj6CDebzC2hnJv8UEqVr48CrQZg4DX",
  "key29": "3YYXo5QQABoe1M9hpDZeGQDKusptpddYSXaRHzjki1CqpMLH9se6JkmLwEmXiFgWUP6Xva4TvYFFa4NoHdbJazgd",
  "key30": "3buJvkQJyziQm2swV9FYc6WCXZCssNZNwjB4wWN5V1XRvdaD7SuhTPakGaUkMfvYiN8udsU7zK2kNWe9ZrUdeJm4",
  "key31": "2sFfPr9D1z4SFKiz28h8aVNECoPKBH5LAm4DWmxqxSSFBj3TvRFzWkzpMm3teKw5PBcQfjCsSEgBiTiNRFaqM2GT",
  "key32": "5u2DiLUJMYt3ebp5RLQbbSQ3JuBJHjbo4xoLUYg2ySL98T9MGFLHh6AKabLJ5VxfbeF1iz7Bi5GpyBEXUpPMAUM2"
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
