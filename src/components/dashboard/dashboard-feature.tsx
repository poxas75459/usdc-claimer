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
    "3aJXcp8PLyqA9TxaozF4Y2C8BJBaLCLiMLpWGEPGLQff6J3oXEvAKSgGx9P1dpHZVLXUjUbSsB4MXzb6s7EhpMCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfjYEHC66MntqgJnS7kuRebs4VS92wnKsYnZiu5AiYTM1CbBK7da8XLw5UP89Z3M8E6Q6nwVA1juELVzRYGzMjo",
  "key1": "66XiqbjFfB47F3skRKKsnZrqN7ALyhwNBZFXJW8VU4uooYQW67kpURdz1unqoDVwd5xDczXJED4qwNE5ydTEZ8nH",
  "key2": "4gTkHgBKq3cHnm9f6YmbvQwMsQgpzvQhFAzv31jXtnsuJQh9ro7jRmhTuXxAhtMssGtrBxwBuayRq9Qptr64TTXT",
  "key3": "3N5mM7ZgWqSm3jwb9uBYc8hK9qi5idVjLqDwuTNxueByKtQgPuFpRiFYZTTPSHBMufCgm8MzFp5mE1z2SyrkizyV",
  "key4": "4fgsMeg8S89awsza1QJZYyALdjka6EUaaZ7GfWtCmAr4JTtpPCNELoGXWT5u1DQdbyFP9q1TJ8GnftiY5Pd5GKBU",
  "key5": "dKVK6Vc6mv5nHKKx3mT3qy297sRZnWK46ZwKL3CidHvZ3PwoEKFJ8GuL6eyZiQNALrbXmmJsWyQozdEeekAr82S",
  "key6": "5eNg8kJZ4PGL21TRoiMzo6ZFyVtHhS3EY2noKgmWyy4W8xHxyJcefxGwbDVih8vbn3o5KpG9xZWFKDTLFiwqp1Y4",
  "key7": "4eXVsWoAPdsX5NVnhb54tcaZXctBDBGs5BNG4S2hFV1fwHxukdrp2toNUV7i47i5wAcwfvrn6qNixF6hfWF8qhcy",
  "key8": "WKNdkgDA7gp923fkvLDBvNMtxPc4qnhA7N9AFjD6seUW8DtynqMNjwe1v7f3jaCXtu3jgs7xVrvLjebi2aSizCM",
  "key9": "5AtjDF28gy4xryLtjYB7C6sKdqXr5niZfJh9WDLy7v2To3QBUjxPQvGpspjTVWVnCKatFpNmwmVfWe5yQdffBebj",
  "key10": "4uEkHv945MmZ53JkmXGLm2AKThRBWQxAfD9ikgqELq95LpBPHVyJnFN7ZbT7U2Kppbg5WzQKmM7WN29f5sXG637b",
  "key11": "3scJJJ7hh5Z4S5YT25E5acUYL2riGeczJFwPMHf64zdnK2mHLaxceCoQeVPMBcfjPpSB26qofxHvFtykURmewN9Z",
  "key12": "37xZCNgStMbtbLXCN2pDcEnH928aU4T41rVwB8yrxmcRvnJV9rCiqd3KoG7RYAqnjBNk1qfxC21n5hQyZuzdy9gg",
  "key13": "48ChtPiZhUpKXGmmEAxVbAFPsaVUU9EwpBPdDepz6JnGMMGqTyqTdJWBzvUe3vXXGt9Fz46rMLjDxZqFVtFWY4uc",
  "key14": "8BohmsTk9FQBXDj54zEuKqihZ9dyCLBwKviprQWoi8w7Bz8k8Gid45nzcpebnCYa4NFGWmuKRUjFc5WoMPPspd6",
  "key15": "dN2wLu5kuBUY87Z6VjSN2d8GapN1MHv4GeNcLdfvnfQDEzjqPH6EaVa1999RZwwAZ8dDh2dQ7S91S45USpHcehb",
  "key16": "5xAiqCMEBdLzSk4uFDHC3VvCcMizi25aKdvR5pkkwp2T9A9kP3p9PP2dyaxwAWv1212dwLesM7EQGrTWVV5c2J8E",
  "key17": "4i7tAZNP9Z252ar5DG2oBgwahrXFatEUmSAHUaqCvDwZteYEmVZhmqbVAmjVhnEk3w5SgWy8HfFLfvEf31jzGhtn",
  "key18": "EHV5HWP1YxKCqeECWieK4YLWYVbdSdVSoTtRSovSr3r8hNxrmptcf8AcjqioW6aEEQcMR8Ggff8C7fpEVQLFNaN",
  "key19": "2JKjmWAA8YLZHfNYHvrU2Vt6EKxSNQaC73EeLb9nrVKSpqjgXXtpSQvsK4DfFjyGCoFvJpKRZmNM4Np3sTapdUZL",
  "key20": "2kbwtviTiZJqR26S4MF8MZgBuvYghsQgij2W7d8LxWr7xPKskfCN7gZqgz48vFcxBo7TrgYzvw76g6hjsZw85DHe",
  "key21": "26DfXB4sRZWNpGGH83ucwjgu84VpHj5Bb4gfPEJcqSnjZeHFuyBeQmxRRhxCQoYs7ajLXbgEjrrTUAFYRJs6Qcmq",
  "key22": "49iEpFJHohs1VV8DMQcosA4ct2DWBAqUnHubUjU5WJYqNJca8gfaDq5LSnRqXhqfwMy3xwUYwEaUiq8NuSFXeQbC",
  "key23": "32kXeoVQ717LSx2dzvTwQ324Q9TW8e1qbnhv2JWJZh7C8GQhRh41VbbBGEiEqqi2m2eXxsCmz6Pi5WfeWk1iNpnZ",
  "key24": "2TVEgZ1u63aBMatD6hjEErPdqNKj7GRcgauKvjKFDmBP9hptzP4xvYYf9wxEiXeagYHK4Aos7LP3Ek9ufdFTXATE",
  "key25": "4Sb8Fu8s2ffDv6aX6eDpDRwB2e2Me1z3wiLHTp3DuvCfowZbubnCxXJoVJTqb2Wpev377Yj3rjVj2c7BoLMaKxoR",
  "key26": "56KkkiQVNRVZEp5dTcrydVh3NXV8uXrcZpH2QdSkL8tsKiPAgmaSyxgUwYmjqvGApUQKin2HPDPhbfBxx9r25nMR",
  "key27": "2AE24geiyRBWYyRzPWwM4NNs6T6AbtmxGXfDWtZPiuj87vT6smWoDyT6zJoSxJ3fCMD5s8RbN1QADXjDtLnaUvsU"
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
