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
    "3YAAdBpf7CdQQU2Z3yaSJaY34PxrvCjW7E2YJBvtw5q4bSW99rod3HJusPsaJaJJMR81kM3kNFWJBfgzjBzTqNci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXFkVVT731vHrLUbwpKAooqXoqJnDSvs76AonjrzFkQzc9TVKiifdKJuzhRmPCvEapqC5Et6ZvoS54grEYHsadq",
  "key1": "5snpM8Sz5agxxX35Sz6YDw1tphQyiHJAhMWLDqRJZ1Lop3RQEppQp8yWhfuDHsTFk9gNyUU2dUTD8z78MZfH3CpW",
  "key2": "4JhwCctUGX6kAuXhRRbPa9HRBMGLkWhBvQ61T5pzpLurxyTwBhbUemcnaZ1f1NVswHdwo3dvhDULRSrMAaZmZnQL",
  "key3": "7yiUMaxfAv88aZrBNdDVqN1stkW4FzHA5CDAoLidWo2PBVVi7XteDrkLJ1SdDAZhUyAWTXLBs3tEtDTaVWxzyBv",
  "key4": "pFDSwdzLSq6r7iMgK3aXJC12HkHaoZ78rGUjZwiCUp4NvgvmaE2p2z2UAQa5BnswCeNGtMBaJ5UpqS2kg9VqvCu",
  "key5": "3VEixk2xGN5aT2pGcCNMypJd2s29pirNVQPzyr2EjGEmkzy1psFEATgytrWhdonSgCTNf4zhM4FZvjoQnS3PijZF",
  "key6": "2KAjqG2DT3jBMCBdYDZFKFj6S4CgCHKASeghN74VbXW6t792NgJ7KC4t3saZt4Cj9wjgirLa8nZFtPgCetawHdbR",
  "key7": "vQZCBAPZANPPfEZKkxL9Unmas1ECGPoD19GokBJfkG6nQx8kRoxo5Xa5FzfxnCPHzQTFnRPF1Z4bbGN3r73YTcB",
  "key8": "9xFVr8fRbvoyZ8c96ieNjrWtZE1x6Dc3KwjSECAUbAL3J6ntm2iw2HWeLEgdEmw3YBd6dxpNqNNJiTbjArr2UDV",
  "key9": "4KremZ8gcAgRvhSNNkHGPXDXW7gVXJLcMxFH99Jj5w17C3QCPmaikVyDRxB9aZJoa8hRDs8axo6hrDQbK7kQCTd5",
  "key10": "3iHdYpiiRgrWY1oX5e7ghCnASfwi44DCHYdCgJyKiByLXCbS73rbMnY7fRBSizp9Pk6nq9zVooHrHPPLpbtTPDfe",
  "key11": "5DreWXLEVsZyf4jSuYvVwrHWXHgu8yfJ5EKAMvu4QmbXkZgMxKx3QjgErfNCjPkzy8W1TiKjJRL25qp5rbAXSvCA",
  "key12": "RgvFcewVWKzVDi24wsHAYXZX5K853nvkfKBkFTcfohiy6kqMG3m5SKQMyDz44QvJHk3cBazBV1RtbH7AUDfC5KE",
  "key13": "2fgwvzUya5K4dP2X326u7CezXRWkr12LprFDd6kPV8DWXPDmkF7x867mvcbAkYHMqwE6MX7YuzCveDrkYEW6e8yo",
  "key14": "3wurnxCB9rhQWQF7MehT4CL76h3Th4SD5NWhj5hREz41zzu3AQKAUTRZgkkLDCaUKFWpKUXmV2zb9jz3R4vdoLAF",
  "key15": "3KhrHNM5WJYoUW9Hna74i54B5wNrH1m34EnkSmHeT7qD4KLouVtQ8ggT5E62XfEXPnAFrv7aNeJz3mcfxmvBXfrM",
  "key16": "5JoQcxbFMo1R3VKVKtzy3ZnXBsSwH2vLmKR46KyV141xYtX1b3MkN5M7ZZYgtdrRbHGm3iWpZQUpZs8grqaF1F1x",
  "key17": "5L6XrNQNVVfcofJ2Egr1yxgHRaLD7VuWZDaVvUQdqbM19EUg2AwkCvwm9CozjvYgVmuLZjZCeMGtcgFyTZ7MFped",
  "key18": "49SNgSbQf89bggMLLfPQWPmsxzga4FgbHKTPpXBmCeoPrvfj3mgmLCjPbDvTzfGJx4iSHM1tswDo9X1VunHo6vrz",
  "key19": "41VKEknQqkFW2jHA7oXXuyWPUELMtqwNtnj2MEvSrCbRHzBWrb7FEokMAp4BeKahF6Snnf69ZjFDBthwZmfzz9zG",
  "key20": "3pAbafwKNM8q1LFJAYGmAJDQMgEKNA9pcNH9rJzgFqyPAo9NPv6oiNdvwcaogX1EEgZXLMf49a66svzwvq5qoyVo",
  "key21": "25GgVfA7XSqAZmbxezbxQV1B4pZ7BAHpx9Y5TbaAVzmx8yBdrQrR7UWnxr75KCx7LC7PTsxxgK8fa49UJMBhUZhg",
  "key22": "5QA4UJN7jQN6XZpNv7Jy73eUDLVLjSQPVfemV5AV86Sd1ezFPMbeoSkYsAaVFh8V2ij9J4iW5dCNHDjy3mu392Gt",
  "key23": "4M3mP8G2DQemWYx5W5YHJCfjzQLb6phrtkWayju6p6K2vhPGTXCZvq3W8jxYnreR3qSmttufrEyXErcfvwMN3iGt",
  "key24": "4SvzZBKtCyPxxeRqryvyb78djdVVrnVXAahCekYjzCFtgnNC6wYSE7X2MH7UCDLY4QJTAbtqgcMo149cEbUPawAq",
  "key25": "z6pxaBqCUpihovZ4i52jgRHYDZGZfDDAzYt1arffzqHAVEua9C5gG8S5DqXuhbDLjYgTrN3YXp8kcgv6VnUsWw4",
  "key26": "a5Ln3LQNhKyxP48Q5GTnU6nZZVG5g443qW5cP7zDKy2vFDEGfiSmiq5mJRScoMmDPZMKFSVdgQmkbD6tMhfFiTj",
  "key27": "KPqnqeasoYvU82QQJD6VepgN61CLKZMi8M9wCjFN6bm3e7hNUccwsvrXRrnXXmCufvGn9XstvavVAe9MgpugKnq",
  "key28": "2mnyw7LTX7uLbsRMqveZpQCkpQ2VCRbeyR4Sn2aBPhGyusncT4u6gz7rVjAKMMh9pb9Vy68tiJmJAqQAwCr8ezsL",
  "key29": "5xPN4ySb6tF1qcc182p5fiK333Vc26rSa3LLive9GYMhDrbLUx43R5UPsbXD6ccTVCfUCoL2bMCcTvF8KjNaFoFS",
  "key30": "4EEGAjMhabtFDWQptXTLPVqnMcJuE4cMYHrJDyGZN5cKB5s45Z7joqDrtxH5cYsWLbRgSfFWDVn2TMEhipfJT6tB",
  "key31": "4pwJNbAjwfuXBbJrK4g4wwjS9EuN8pwzuYKo1BD37wUJHb2HvnGha9fQMKgNST6PSq7pbrs3bykdNf3ZYy6E55Pd",
  "key32": "4MJcAjJiqfjcU2Z9Tp9ptAKLKjwZLUy3cqjZs5bDjMAzwdui9uXYFTgNC3HAnniigBrN8MzuQay2LTKdsx8G4VaA",
  "key33": "3LaywEDYcq3S9TRZsbLWt9o5DPh6gX7MpYtrJtLqJnz45cLhHUW4NZeoqMF9vsxCpTy3cdNchxZhVuBVcpNg8UBX",
  "key34": "2irFiMm3pwzLceHEUw48gCZKj4KwTywyt46kZqrUKdV49Vpz65DyfKbGfvZiHcSD7j8Cj6Vruynz39RLxMk3gda",
  "key35": "5fSxjmyiS5Cf1qqdiakeDvwKkfD4U6oBKRza5BEhyM6iTwGaEQo8ZUwHHdKuEYEPJKeyfPD82Y7P1HA6puqZpz8",
  "key36": "67XyVWzZycvFyofcvqHpjEkqTpcCwqH2bpz2YRRQK8oAqydThBZbZjTrRRedmR3MYWkMiaGwb3TXv5N3jTW68Hqk",
  "key37": "4gq5varTBujURKZG91MPDUeNYMs6YjRGkZzF5gZCZ6V7GZpviHXtUVQ9PmyeQyehnCbadPafFdYKWyGyebEaeYoy",
  "key38": "35UgGyibgshtbmdBtX8bKcD8XxMBjhb5rSDb1dREYGXStqT11sCavBGJ6siJTSy3jZg6QvvwN5MMr8mKAi9qgMqj",
  "key39": "4dzzDpps5MKpjxHWdetiZagN3hwSkUAhkYkDwSQojUFnBKEyDJ2C3DfQthLcKopJRTQf4EqbfD8vrfdBu3ZpUeGB",
  "key40": "2pqBbr87eJfdEPR9V7eEfJYs6UFifbDaCFcsruC1qkSoWSCxkWxmCPowaAonhYxmo52gk8DUtJ9tafJn92rBaHQX",
  "key41": "NEXuUnRDhvbaw9LHTbSkBCicpz1VRc3c1tJ8aJt5R1jYmrZPiBtms3zHtykBJuexKerJe2wHxMhhsebZy1F1P4E",
  "key42": "45aDXKJPW9r8Q3ntVoUYzTyYgBDqTfSNVxAgApYyCJrmxWKnt1gsR6ToxC9RvH59uEJYpsh62akR5QQuuyBcuu3x",
  "key43": "64Y5g4JTGPZexrPxjVvETpHkSxBa2u8SMTMLy1RMMRSH5edWNbiiPbWeFkqTxKUfanB2QJM14MBsjB6cRQUmii5C"
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
