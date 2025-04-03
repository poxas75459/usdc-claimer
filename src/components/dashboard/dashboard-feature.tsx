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
    "3fAi5Hp1VQoJDehK9FZXmRZWtKf6fxoVakuQGCH7PMD2TAC4KBzkw7Vs1z3fzMFePCkEYVcUxpw866yMvfv8B4Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQXzTqsfvwiPW6WUNgSpoaFi7GUdq8tcwMygCp4RKT7gESMSTinRDGsBZfs17N6osuQh8Sq3xpscDPBeDTpENXr",
  "key1": "4LhKLp9QuojV8v1mZnKV8eexYAim8JVCPU95Z3BLPy8LyQk35TmxxhHYAjatCk1Sn35FaE2CeeSGCscCigfRu3ze",
  "key2": "a5iFpbm8fyrzyiCq54bh2txfaap7BE4DkNRackHjyXd5RroFrwuyvppByCrz18RejaVyF82E81WqWodh43YUD8D",
  "key3": "2q9uKpBeTMfD1EmASN2kUCJ4g8NRRiSzkJu3fbsEhQ6iWProGNsrpQRVCDFRStVfZ7eMJYt8TqcPYUCwMQQYGUrQ",
  "key4": "53iFLK3NoUjLoZ3WHyFEMXGv1bWFcWWQyWhMHdD3ZCYErAp7jKBLptN8TBsCa8CnNHiRnapupWXq3DXSBKJyuh2L",
  "key5": "36gdkpYfCDUhTmCqsmGhdrYdFX3GZDXbqqtmmYtnq2PS6v4RXvm26VsUF2kcLBBmZYT3ftmmmyyJPX6JcnvwudNn",
  "key6": "4GzTq9EDUZpUDa9W3izShvqmtrTtvsf1uCLTc78Y7qdPmZQcg6U6nkvHyxxgZrJRchiHpNTbu74tJNuGmATsvNU",
  "key7": "4Rwax9gVut8HnfPrxzs3kHfWtnYnmFgMcxsGzAyTk3cWRBwVbv4atNNFrnnPNBSacLs5D4wqviHkbPM6TTWa9qg1",
  "key8": "h1oMNaHoejrUtTJbNoXi8xbsCS2CgZQJMG1PuXHHNpu3G9nKft9hWqB2bv24UHoDiBHnKaRJa8bTSjHfUsmWmST",
  "key9": "5V3vrTmFw4v4CcFChb61MkvvCdZQ4oi7vDtHezK2c1taAj2A4AnzpqrNFcUeRFLK6LmWzudZQy39xyNLTeyRre3h",
  "key10": "2SBo3gW7dMrjDZYqeq4PeQMUzrjo8o9ETb6GhAQ8jUYz8FcP1hEE1V48Ys5pDjV3vRrhKXRL2mGfcqQDNGV6AawJ",
  "key11": "qPt5HCan6jUaQfinvggc9BJofcgBfuVLmd5mqojpWQWMxrTmYmmdZ8hoAjgdAgLUyU3pseFkboqeSs4meeQQUN7",
  "key12": "4QoUagtaT4Ly2vqFbpXnfHoaU3RMFMuVz7Mk2DE1EUmfCL6MKiJHEGC6kVDfvSenR81BkP6vNWdJXh3GX48uwQxZ",
  "key13": "jmLe4HLa3edS2XxJ32kJSpdvxFzhnHEvDVo1M5QeJtHKjTzyYhtV5YKBSPCFwhCD9sogKtJejTiVmLxwoWfpV7D",
  "key14": "umcFy8NLc3RR1k9S6hr3y1qohdswnjxcB79HT6ovnPaeYZufLVyAMDmBJrqP2JXj1FcV611vpHGgH1gdT6EdLJ8",
  "key15": "3RNNTBgyvzcy83DbAWqEeyc5SMtWLFAzY1HNop5ou64ALcQp2gShZmHpLZ17BbaFQ1s9zhSP5dPBD6gbKtBVGDn8",
  "key16": "2FVQ1Bxp4q2Fm7tBzNks2U7deDqd5f38FDgHSs1ZyCJan3fvehqnQjLij2KKNxFfcbMMWLJPQmC8WGjq4idsUkF",
  "key17": "43ZAz2FQfqBNUwTLWbcpHSg6aScBoRJaj4kMsssVJgstKvthqGN2vg5JtXPronEHbYPdg1NDkY4ECB6Fc66Uh8Vm",
  "key18": "33q7oKeyTn9Ly5Rho6TivhBdiTBjAusHnGU793C7xmJgMvmnCiPKyFYNWPPe183rEeTBmKQfZFemVm1RjYzi3sGs",
  "key19": "tChYDKUpr5m4WmUZ9uoGKPQpwio2tLnQgV1EyeBQnfyNpWdRPzsHoGJsxgd876R89f4DUuKbqE8LbM5Tm35YBSp",
  "key20": "41NnHEkivvBLJTLAxdug3z1xwKxWrp1sHU8LgMfjARvQpkScpcgN6LFo9N4HgDAkavFSjqkdrqXu5xLjjaM8rc1n",
  "key21": "5n8mFJ9HCoDA7JjnFLPKHA9Nd3G32jki2KaS8v3CsJiZc6GjwczwBzNWPp5HKPyiyd67F72zjsnJrDA6toXS3UKd",
  "key22": "32DBV3hsLt7FijYAkvPe8E8NCGgZXsQr718f7BGutBUrX1yiUWKoaNkadBppHvBpKK69EshYjRMcMx5okTWCQbYt",
  "key23": "2ttz8TAD5GLvtHipEx4VNL2HEYbN56rZUj2W5oHqWTt5Cm5YVK6Pdcbfu3Nh9kDqBMGYKx7oTRPfhkt9hHdD4aF6",
  "key24": "4FzfAfLACntPx5E8AqaSYXuzRoBEkBDN5CtbSy8YMejf8nKM3DcECV2wLe1L6LyzPNRJM4LQUGibVm7FwmfvpMmb",
  "key25": "qVjLszvqNGAYAx2AiPnG1yJVHLj1moTPwvwjAFrS6GPs7i2Kgwd5zZrkYuvHiTYW9cvBEqR3NyWos7KoJQByhvP",
  "key26": "4hPYdv4fr6bEspa5VBFwBbz1kvMbLnW4hD2hafyLgvQswSAghvwVasjTi5NNBcwgT7TkHzRDxCZxQ6r3qMuz7YdA",
  "key27": "JKMwMjHWVdydBam5Tn3yiFKYh7h6J8PpuZ7QcbYgScuLuYRwwwZqX4Quc1buSDTLx2HYHLhJHB3JXZpyFPVJmJ7",
  "key28": "4ULSNzueFmvQjc7bgG3jARYunVNPJLU2r7Byaqn7FDnJ5vkSrca6x614qucD6qqeYxw6VrNuTpepTAL9uotdftBb",
  "key29": "ceD8uTmGVJ69LNMtf5KVcULE6kbWhP5JR4m3UstsXDDBdnvogNZiW5ugzWbSjA5JPLDyYgh9nUSiCTKYRrwkqoe",
  "key30": "e61nKA8cemkM6N67BMBMmpsvwSGZjCVFMGhvQE5oE5z6878smmzzZsuXY6PK74CdzZCYupPFa45ip6hHs2pv8d6",
  "key31": "5sqKEsg64fSaSUybqx9FStZQiQKDNTgwQzjkqp1bddtoq6RRWwg1XSoPCpgD3JuNPiUqm44iSvZr5LeoiHrCsxfS",
  "key32": "5dwfZabSzfUrDioQdPcmXCUC7NaaKxcAgzxEwS86TbnqZ1iKu9guphNjXTwoKVpZqHqPucAUULmzjXA1d7mze6xb",
  "key33": "25ibnFupL4VuqtmXrpAGZ2YTZeSZcWheEtge8Adpjphd5oDijNPto5CnQoHT9mPJe9JuG7xGFpjSQnbqase4Hajy",
  "key34": "2iNeK4rguucihSpCovWFhh42JrRLci6x4DFAaQCcudgvzwumt6yRQNcrXwXCDK1Nq3Ta5DVW2KqGzpxrX6Z892qr",
  "key35": "5MFxrmEKyKkciGpZBpRUZhLeqxbnbQaswainidhXfLupYhWaQr7iozfLdsJVTD7qhd6ZoFMwtvCswwq4yFSUDYbP",
  "key36": "332kKwxoq45C7sK5PkBry3m4KEauVXuqDKsyegzA962imB3Qq5nwgAFPJYboYPXp4NVU53UZcmMjGjDykq9tNwcf",
  "key37": "4CHtt3odpnpoEttBoPU67Xv79rxSeKGMNBv1a981SjEgKEyZQLoYMxzhuNYpyVJkUvaAbfp39VvAVRnVxxVQTZWh",
  "key38": "3my3RrhV6nCS7qWa2rGv5xw8Nbqsmpq61ZiqQYgydcBqsX9a5WKCATZdPHLWUx26LdKCfrnkjStMxBfaPjf6vHzs"
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
