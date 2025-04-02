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
    "5gqEjbiu4dWsfLBpxserLTAuGxuQuYH7Ebbdk1QXymN9Vfiwb4BVTT6xpqeEghRA5MbLnuLsQBBqKqKcnGQt54KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwtMRnWTMQHcbWfDSvbDSL1qU2wQKDz846rj5HNCiNy5ZuaeT751uPA9FTiCZCht6BcsN5dPZnEW5AiiibSBPcL",
  "key1": "4X9HinGQBP71PoJ6gPW743cYEtms2hguUsmMRtCirVfpM2FLDznFzrgyhCX1ik6pncftP3txGjp8i6TNp1xno8p4",
  "key2": "49WbiSepBekLJHP433QsFHuDFsiyCN3ydVqGNAMuTjYRBUaWgXHF684gVkn2bpy3eVxx92cFBxk5PS9mTmSJMrbm",
  "key3": "2kJ7BYBQ1aZ5tFuKK3bP6jhnkritWqcL4TZydAvBYC5u1A4TTZ8aowfBKcLFxZvpTfScBTUHDX5GfoyqYXPFz83y",
  "key4": "5B7BBBMFW3YcpMUYJKxjezSxopB8BDQeLtvYxfj84ReXLVjTwuNuar9i86sJvDQsUhgEa3WEKRcaVokr24vkKuro",
  "key5": "2WnJgShH8DY2E6CAEuKJ4ZDMuFUV3EXY18xBx45umDzUdhrz1chuoZQvq2P3caVmsPo6epzPPG6GQU2S5JVFDGTS",
  "key6": "2d6VWG667ETmaVotasLjCzbwjfwW5HYiwF2tFsx1trJz4SQkXiDYYHsCpoDtYLbM7XRePkfvdEb5TurVrNUtXb79",
  "key7": "34r1rztbqBk3add4RLmyRFhp4zqn33icukr4FJqYm3dU2sfgfuhf3Da4GLhC2BoZsHLNs1L6TorNjscvDMZNmtxQ",
  "key8": "5iJwErRgRqmMaSduTg7pfWECwWAwRzAAR5Ap7i7bx8fnDEwbmifQ5YrG1cicbkeC5aT6Xtxnp226ksBturecJ7J2",
  "key9": "2YfPszGPSFXmS9415x7RPWnGu7NHcHkgrFZkthbDUGWkray4wthBvVgQDgiQbUYryjn1oQgppKBvUsNtxg8rvcTj",
  "key10": "5rGjsYoKk7TLAiM5pYKm9vcRpUgh9LQUcxvSyBhvE9uJU8KwJtjnaFbsjcvNoBC4bpxoUwZi8U2uhjdGjEpozvmP",
  "key11": "3p82rQtYXzuafi4kcY5pmLNqb1A1C6MYEb8NgWTMP65mwsCheGgsNsmaioGXhYsHnhE3Z89cetxZfMkooCH52b3C",
  "key12": "3bJ7FfY3W1MrgHNBxZLVm2vY5Z4guUuzpCHGmDdLZUCzZgVCS5EjdDqvwFpphNNufaT5FgFxFbSGcEzRTVYc5tiw",
  "key13": "447edqk6ASqb8VyzTDuhZdwCNjGEB5EtEJARM31G4erZ2R51YKYw3XTnYt1H663jDrPGMBZvcDL9aiYq8oFEezcS",
  "key14": "5USaMkoct9wci2apEyQLnd5an9ieMm7MUz5zTTtzX7egxxVzNqhswcXcoK79njfYn48ypcZXKBmX819d1L5DrJ2m",
  "key15": "4jMK1tXi29RfRZUbS2pFtPFc626XjQrhjwhxEzrEqmJA2BbxL2zWD8UWKsvX32xGTxS8o6nxjZ8vjCQA7qJr1LwR",
  "key16": "3ZQ9iNsvQHKLfxVN8jRHSACWGe8uH3tnytN8Sbz8wE2PEKRPaYR6sc42ESX3nHFCVffGrmxgSXtwVTEi3JMGeRu",
  "key17": "2Ea5asXrHPLSuw6LhBQfshgBcgwk2Td9oLq9mrAbXkdCWoB5Vq2RGXQTiW3hXpzmgRnz2ypk66u2z3qsYTCVfYqx",
  "key18": "2Pedji7SQyAmxU3UYJbgBWeNhu1t21evEYkBtASvFnT4RPot7gZMpAHyYaKTqsKbLFmFpPYNX3W4rv1dTsoqub2K",
  "key19": "52nVkEijnUidJuAP9xxkzZanxT2WTWwoAz4s5un7pLbfvVWCuLdSNuQGhoatZPLvuqyfegedA7vQcMSFc8T6JCDo",
  "key20": "28Vp8DWsXd5vs3VfKzcFsTiMtHzBdio6fhmKako9Ldwq2DnrGrwETyaLCmCXH9uby13iCRV5EMG7YumySXY8jHUG",
  "key21": "4eUVjsLjPpssRMFC1UMbNPD5Rrp4vrSkq5HbNquJMv9bBvHe4kx1Mawy82GpCm89YcgUVfSFstjV6CMFrG3WjRkm",
  "key22": "7WHnBoJovL5fGXMviQHoAkCNEhvooRrXMNzWAQczkgoq7k1n4jcCWafyfYcy6UHXNa1qb6ZdRBPCCo8pmbY2uxG",
  "key23": "33Z2Ju467ASHtKmSbZCSoM3aAPnXzhwp2YKMTooorjG6P48LQpcam3jAqdgZg8Ctus6bupDG4rEoufauVPawyofj",
  "key24": "yxQpXKTqECPiegAPSV3HyVc7qRC1e3JQR2cjouY39g5UXbxqKrhGNPkBAVakir69kpTvu66TwnJC82Stvr8Y11q",
  "key25": "24rEXPFhuwFxczEk5m5GoXr1yKL9E9FqDA6dGjKxasTzS2fsSkmanznaPYr1rbGBFG1yNTEEmuhv6QbHEh4bUzYh",
  "key26": "2nDhBRDDpo8K2DGicvPRUNdh2UeaiPsXSGDn2yMWQWa2CVogxuiYLaKjiFBQfE1UupBhPKvzv9FEu3qRreyynBWX",
  "key27": "5JtNHARux5kThLAySffQvQbLZLU3xUv2i23RgPftGL7ycbR2QEFZsjp4E6MLwe6XLMGwAQjbbySFyMwXw3YscXdw",
  "key28": "DPe1f87v9LRnDg3kGqnmzXFCxcgoiw8nPqh6xVe72jSMGCBgymd1SV2VguxSYWwf7WFYKmCRTzcJWvzXcbj4ctY",
  "key29": "59Z2GQ8s9ByhhadnrMDsvHUKhFi8Nh1MNcxUivgQ5PtVMoip7ytuBq6BEq84JrN9LDq1puB2hcemnJr6XUjbVZaQ",
  "key30": "4aq1URz8Tgxwq5YdMhCk9jJ1N2XtFcV3ZkEe26Y5zsM97wJ9XsqKrDTpMjhadqxxCtujK2RChu7L7jxU4YZGFq8Q",
  "key31": "NKj52boshFCJvKT5e9VjWY3dhBfuYETtBFFtsTocywWtvj5ou8xpsRTWwWPbFFARDTankn4H6dkDtUPaKyXjzob"
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
