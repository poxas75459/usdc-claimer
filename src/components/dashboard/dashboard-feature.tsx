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
    "3YysBCvctSTQhsiKPLa9YGKmwePJnDpbYaBU8SjBtipdgRVWYDvf48qJFtr3zmdmXQpnj2ntRRxAGpfCJppCG1nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ANQPQFp2hUE2ScwNdtVQyPoLYxA8G2yWhpFRtq4nTRgi3p2KBNuVkHhSEchAaDJn2xgHFEMGZcNV36wP9PkeJx",
  "key1": "4A4axQ3Dnp843QNy2ZViwkNt34BE4od4Y69Tt43rHTbC8x5vU3KQYKZKiBNAb2V2yFWpuPaKuWaNmqpQtAi1Wgr1",
  "key2": "4tk56VRpSPs9pQsCUSKbvDcan8CQYcWYFLSYccjcYtP8ttsPNhJcGhaST2ue66DGP73ARk443kpz7XkoyxsrgEvo",
  "key3": "5X3x7uHrYQtYyKbvcjfNEQujZp6sJW6hMPeZw6xjgMDYzks9j8QdBiKZ5VsGfkbZYByE5mNJR1aPhgBc1t2AymKa",
  "key4": "3LmUqjv1jbS6UUinmTScFgZsCfm6N2UTq7n5VwXyc3b8cuzakS9GiJhVr4nZLCaio5XJ7DqC3RazEnaQQSjmFdgY",
  "key5": "JaGiUo27iNERBUVpvjYDgqmpDVLAKJLZ65b6qaTvHCuPX74bxyGv6KFudQhhbSsxbqRiCHdMK1Umc4NMXz3wpqA",
  "key6": "5dnvJeexS8PYLF3SHGygV3jyBfXignU6k67iF8ReVc5SpKj7WYbDzbn2YYTZ2CaEHkwyEQK3Kd7P7Taaz4LZP5PQ",
  "key7": "3u5YuTB5txsrtXk9Ba5mTUjewBJoro6ruEUkUvAHtJQKUE8mDaVDo3J84iAAfQ52bRHDXnbRaUCGZv9Q14SiyYUk",
  "key8": "4kSTKF98RKccYuPQenxiRYjJPYBA7bUsc1G7PWqQTyP71vc9MzEmxdHuBjz9DxXNGuxJWdW9EZSrffQJhAv8GBV8",
  "key9": "4HLJUsHpGoMT5vrLnxRtnyy1ek4WrXZLoko4E4UL4wsakjMJaMFbxmVDsPWHKGTmBgvFJ94D1zmr6Fv9NySFta1m",
  "key10": "5UYqgWB8bKveNoWSEFTBMPLwzpF4NjvXjHpq9gUwWeEaeqCsbgvPE7Skw39S9bz16CrkvWdiuR7Tb4C3MUny1tp2",
  "key11": "4F5WWh9Bqi5pn5UUUBRBELjcdqsiFVA2a3NST6Q5W9o1n5e68Wq8oWuV5iv4j8eYxaYDgu4nfx8L6UsvbQUP6N33",
  "key12": "VKGEqVqT4UbGggKxc7tvmX8MzZF9GWEG5zhh5B8RxbaAwLqmAVg8Skbu2DorptbG5C1iCUuzmMogjASBKsh4K2p",
  "key13": "4WdXGZy6RUA432UgNzHywxjrrrJgxEi2byh2GKiiL3QWG52d1oadUKGrnJutvz38x7odkS2bcVK6Qp1fK61Ej1WD",
  "key14": "JRR5gkY2C9VHwRLZKBC7tg8HoWXB2JSzRw3bxPNKmHJ8PnhqxcSUMSXf4Sjtjm2X6JyEMVQm26iUa2Xb1u5AEio",
  "key15": "2PJ61nEhsZMXUFnk31cnQfWCgk38UiCpggzTp8L6CQ1BEj6PYb94xu6WyeDGXV9RfwGH4DT1CH6Bb9rNYqLY5X6t",
  "key16": "4519rxxJsWrDT2R71MHdd7Sj4thxwVhpALk1KN53ycX83T2iCyUrZxRZgKbepKpzeUcrAJFoJfzNmT9HN7wYr9aM",
  "key17": "yt3zjKTs1yFx33pRBKgWEKnxkr64UV8dKCAWrNCUPNNTjjQEr3tnKjJrvkXP1vjYnjvYwwShci3dswybZ8FPGUY",
  "key18": "2MzQG3HHQWwTJaut28JHg3XrZ7TwVyNqQDAb2m4uc3YVcdRXLDzopsKnVNU2xWJECa5CrqBctpGELD1HyNbWC7ew",
  "key19": "P4XcBh4wxSywHrxoXsfybfb1v9znmAn2J4sFzTzqK4LMSvuba7dLrbV1V4Td9pHw2atRmqNSdGPNztxB6S2VrdJ",
  "key20": "2B8CB7zuUNboxZoEyBu8P3V2VUhd5iVgdQoFkoKnUvfGgrznJHjz5FY5b5UEx7vafMaB7bbGgn9NgbGo8UdAmj1B",
  "key21": "3BG6ZnsceJx1xCYSY6gFY8ke6FcaqVpAnQZnMSTLTiy1EmpB9M4tAq1kRvNGv8hajaprRs5uhfMaBLvdp689hZty",
  "key22": "63rZtxqBpLifM48GRCWptRrEANpAbUQAm7Gcb4C4mhLwnHoaMHtqD7Vfaee8UWfRhzKNyFRMT8nxgfiWF4nCcYuX",
  "key23": "SAa63By74HThSpNScuAu9YavDid8iDM1uBxJJLfa9aG2rGQRDB97HE6evUHNt6tvDoWA5xb7Df6z56qGZMW7LaU",
  "key24": "m91R9hHxpn6i6vx841xiQ1WkjYvsSE35NyToZfDpbono5i33SEpKSAYmrzvUB4qToVkthFi5XBbiTqBWcCGvtmi",
  "key25": "4TnprTM4obWN3pcDNCbhBeBsj9nXAfdnthZ1JUdytuA44KBSzHJudFUFUAoAcZqsgyHsq9BBB9vLqZdtHFmPodeC",
  "key26": "42vMPhTHhUq3fDTAJFvMcPzws2XfjtkwN97EjMA66hM3awjrU18BvkrTqkQqVEYwxEjJFPBThwLtxX3XdpVVjKR5",
  "key27": "3vBkPwMgK29YRG8im2R8ggcok9eKEZFiXcuzBCLs7kx3nXUZNGivgA2qAUtuvJtupw7XoArdESwJCBy4jkwxg1p6",
  "key28": "2iJvbpbZrYveRyrhDAVJVh5N434cNNntzv8RRWrqJ1NXJGFwZ3B73QxzSr1gT5qZ5sb4ew1dKJW8owzgLLXvirps",
  "key29": "5bCxxjYd5qzNVCuVpqmEX2CbiNgeK7Lv6CakVVf9qiqTUazKr9JkY6Mi2tVsagoFZvipLdoGxZWbosUrBftJSjvg",
  "key30": "5yLawKZMydZKq2c8x5qyhPHx4mxaVQMttYNJLCEwjWySenw9gHB2WPM2JeGYGzmkgqbG2oLuZiYvmRTgvaS9smyt",
  "key31": "2gGp7yJzUwNGt6fnF7kVvbhBybf777MQg2jBYDNaEhsa9rFv47CC2VbemZ66D42yCKbWLBumrNkZr5YNtC9o96n9",
  "key32": "554wZjUFn6qpWeUa6ryY2uQUVphZwMWemY7r8Pz7WVyFMy8wpQjHBAD5yEeyAYhtFgmACfKvTY5Snh8wKBaNKxLb",
  "key33": "4XgA6h3Tz9rJpv16upaN9bP4HVT6TvoMGZgKfKyzQTykaJ5krwshuKB4krUhJ9Ttih7vZZSq2r7AW4Hf5M4gKgY8",
  "key34": "aLmJy1hZmi4Zhc8dqDaJrZWBrPY4rC3Dw3rwtSvVLwz9hScJVbBvh89K9ixo1kVLeMB1VCVutza68z2y5eHgMNK",
  "key35": "2XtqZoHszMSqBYHZ2T92pxruphpQHcmtaEm9qQ39Q5g71LskBrHkUvGeHmKuKs21qC1LYHsjgxS9m7hEpnSZhK23",
  "key36": "2R4AFcEWBqb6LhGVwuEb9W94VfNUoPcUNKHanvYeDTFTrjLVTu47hBWChXjUauWugtpmjkETzPhfiGjmv5LiDH8v",
  "key37": "U9Nz7TjmiabrWqXsxF3KWz9ms8RnLbrjpqQpN7ASrsmkkQNqvK4Cs9JQiP4n9JLyDf76fCQKt7WBXobyB1KfKq2",
  "key38": "3ULH1R4QLJyajfWbczW87okQ5SXx6VrCbLuVELaaSSEQuUiqpB1FSvNGXXCu3CoKT1QpovRkTa3MRmWUgBLJLfa",
  "key39": "2Fy4cEekz127BDEWf2k9qAB7SQbktkgABxLp7vrNexknkSCJXr3w9KBKdiUnrhwZBf24TRHvRaBWLxHYcEuomvb9",
  "key40": "5FdEGJoUZSiMuYyRFZNcLmnT78azR1qLfYMuea1QrzQMy866eE9YkrXab6BgkBdJWsdy7Kem8sjVhNK4rvif1j8H",
  "key41": "xX64zqUDJkEz5tQTtmDGr6FvXZz6bUUet159ddzabSNSyjrkR3THM4ZF6mEGJ8aALMjbAr2HaFXiue18GsadMkz",
  "key42": "24KAgSumQF38GngR24Y3C9wSWCsJMTSwzQVUgRk9iQ6CLiMzKGSD2fXu3eu3HGihSGmm43EJ35UirrkrLtt6bnXQ",
  "key43": "5k73dYyacHvwSdGtUJsK6Fui1drbz6XrymArvE8fHuTKVs9LvWNQSZpv5yYYenEJoKNu7FKuZH9goPeA31rFCsUY",
  "key44": "4tV4AZ6jeESLe2SyrRjkgedkmxugrS2fe2kQpiHSnBD7DdkvjhEGuiU5T7hZDUbjJUMfd75zweEHxHyKiJmKnezN",
  "key45": "5Zts5bbj7Vj5n4D4JydqXEzgQZE1S1XrjyeBAtpeD6VEtXTbaG5aYMP6rzEwHRcx6m2bFzDTUJkwziwjrKqoHPjn",
  "key46": "58ktWhJDq2xJvNua38q5jnTnPiqyqwS7YBTzMXbWvBAzWLQzwNbFweWYqzBxZoPBduiCqjPpKdWy1CsLWNN1jrZ1",
  "key47": "3awfs1iUgBycJueyMux38wrNWeBVVKFFTuPiFAWMJif9rY1taPX4f9pSSj3TrvffZ6Rku5MDeqt5josHHc775jbu"
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
