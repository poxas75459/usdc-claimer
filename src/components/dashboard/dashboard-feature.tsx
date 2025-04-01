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
    "34oPJJLZz6J1BJUbwvKqrRSwZuBHAxWunu2V7nVaG6KB6cFhu95dLn9SJHLikWoFa5gAiXge8BVuBw8sHPCMJvvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVCvixbo92WCs3VuDATfNBiCDjc9t5ASCTheTkhUWYSG43bMgRWQfNmeAZ5jjEyhXLDw9NMrEsqt3dQEEUTwQWJ",
  "key1": "Hvv8JxSUEz7MmRNquskKcMQsFJJUrtFNdu3WQZRuxrubLKAkapSuQ5roqeC8N4ScgvnWXTaCJhWTCt4DFdcTt2Q",
  "key2": "5FVN2SJxFwN3qyZmoeDteXtgVsBgNnjtiZigY3WrNhgYCq6dFKJrrcYA8TBjcnQxau3ch2RmbrYgx6CS8VcoF7ZS",
  "key3": "3YcS7LMzxB88K4wA9iNBeisSwBrKsqEgNbdvBtzZB8ZBPAX6FSyuwuwYmaMUVogDDdTdcBt16VxcjpnFyHa8WQvH",
  "key4": "5qFyu5VwSM3JUbFpnHibmkg9M3Ke6PKch5HrUQDpbkdDdkTbjmQDpKnd7VCHAhVCxhJuopjg9ubbnBkaM8Xggo9K",
  "key5": "gWZ6MjEbDVJWVEWScuRmMVt4AWo8vzbM7xFCuX25bJDaAynquY7qnnVSd9khHWrJSU6WnTjvTtDU2itdipyzE6M",
  "key6": "2FuNAgrbEBTiRTKPAjea7waZLawxom15LLP1PAJN3XQFkLcGmnBtmuE5QoufWJGs5exAB8MarMvetaaryY8wmEGt",
  "key7": "2VGJcbpGEE4bnaum8LNqsVZYrded15HZALzwtCTVRUJ92y9cjHMaYrGELE9YuybFMxx4JbQe1bKYdXJbt4YDsiFr",
  "key8": "3Cjy3vqxK4y1M7HLsJk4ij5Na3TuDWoeBUDeKdJtxPccYrnDdXoNttnCtEb8WabSoCnkiSFGWPVG6wT4BBA9iW2P",
  "key9": "VMaLT1LUTEdN7x6ktEeGnFQLDkCYhUWQGR1H8JHNn3oWsCS6449uguwQsofUYakUR3CD2fbJLgDVEq3KARGVfRk",
  "key10": "2Q58kP1V4CwWee49ACKteSpcR1Mr7nkYkF8wsPAzQWioFndTTCiUxpGfg7ziqyC7ZHZLpu6Qg1FjKgmJezZgxeVx",
  "key11": "4JiL4p6wKdNXW7ex6AJkth82DvketJt9foH1GeD97kZT8Gr2uRDjfyK39vSEbrvQTnK8FqYVhHcXnD7JVTR5An6S",
  "key12": "keRJj4LdJqE4rhy9SpvysnMBjmkTPiTfrLuzqEkFhGMNfZc1uWegQCSv4mktx8Rrkqtc8Zbx7gjBzneQvcmHJ4z",
  "key13": "2gDNDMkoCxkhvnjGE5u7iUq8HJfFnx78mgsyTRYY5hwCr2p91pjNzoh5QJj4DhCvg5Knj8Z1WmPHU9ayFWTpnFJk",
  "key14": "3Fum9zwzmwDccHzbJSBgWJC6JwH2HA2eLdze9EQemU8jURXE4cCiso6LhSm6ZnXdpkZYijXv7Czmyzpmy5mXfxVt",
  "key15": "5nJWY7UvdbpEPWj5JPsxkPSGpjzJRGcFxPsNVP2VzwgohgaoEd57PChgyaZQwvPXKdonf7ZRKrbmGSPjjYkvoCCQ",
  "key16": "41aG7NAhA9avKCb55Ajieb2uTyubnvQSSWLj1wY9hYKivzbDxmsDfXmDecdm6vVPDHtCT1wXDPuLvG4GRfXs2BLc",
  "key17": "2JYPQvznSwZNHyE81W934dtDXsyN8rV9sLvg8SXBPq19aZU5PD4iJHidxQJVTmzDWEpZBRk8PHmBsi9ipH6a8AAF",
  "key18": "2FeePzHbrhbRzWer6k7Uwu9CF3JxKjUpkgQyudXr3TSHqFcEMs7ZDLLBpLf7HKdyeF1zrMZSWj86quGXR8q71Z9k",
  "key19": "vNPQanPGKjLnCDpnAnyUMZnHfN1UkXhFbmQ6or7Cn9EYLyA2vzY3zajH3Cy1eUmGDmrwrJgEFt1eJuhcx2uCgCF",
  "key20": "3bQTS5ieD4HrLMNe8sKaxkiTKyVui3E1jU9McZFgyaHPLsZgmg2392aZ9nxLc7571HiGgjXCmr9PwZcL3J3va2yU",
  "key21": "2YkLWMTeJRQScJGqb8DUMf7PNhSv6nQ4c235aZneso9mf8nYbjmv3sdViUoizmvAbweWyDdjPEVFDvQnjh3FL5h",
  "key22": "2HVBVtAfEJmHgQyqBSKCWTPJnBEREk6d6oQEZy7geowh9ykcjV79ETSVS74ybqPnDEWXqwXYU9varLSQaq348vpY",
  "key23": "kxTjXH9fzXBDYmuxAQP2cw4etJzuqPKkk9fQWHkRsPH1f2ZYEH6b12HqgsfLAM9tLDib8v2m65bPMcwPcpHNim6",
  "key24": "4aRaa23qx27Rn9r8gr9vGKogXU2kwvYNEdcyUUYb9BWtH1dpD48NTJ8vF4KRdEMnSxEbFLEC6JQtpz4XF28o3jE9",
  "key25": "oLLBDazpQZiLtuiWfwij6ShXfoDBSWkhS8gEvnux3P27zWLapq3oL9kFBjxKuDyPE1tTw9jo6s5SrNDp8WXpjaq",
  "key26": "61EsrAnFzGwC1PzPFqvvDr7EF3HFj8migV4qWYjYP2wxTN8qjSYTDJ863ViU7DpSFztcnDuPk9Gx3XBRe72hnHpK",
  "key27": "26fAL8hQVUKxkiEgWQ1xqGjENWoHyJ256bncdsPSUYBKQxfKS5z6TmdaAoJQ8JMZz4k4VpbpU7xA7Em7tTaVSU3s",
  "key28": "3vC79BVm3PffXhHr91u9wp9ZDb16NUus3Z9m6283nh97GzzDf2XdW9wdyWgSSXzAMP16TzsPnLTkhKX7x7ECd7Sg"
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
