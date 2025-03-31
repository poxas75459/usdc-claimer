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
    "2hYgUEhLP9bRmYTjZJ1eEsmGpr3WBc8FPmBQSu1aW4KcQvUECF5DLieDX4kjBcN8bP33QHcuor9JM9Kwpgp9KrSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1HMKxnqpNgux5QmHgpkCNahr39S5MXbPf3zyvHszG1hdse2hz2M7aXkEUdVrNNzDRGGN3mm5nhqJFy1ejEmCj3",
  "key1": "52ChDUmeypkAbpjqvzf6K9Fzb5ZTXJvR9oeWckxMANiJv3GDraSswmhYY495ZddUCpfia8n3q7MUAnFPC9s664Jn",
  "key2": "3RKexpAzTmTb8xFiWJ7Z98o3bMCpAioa8NtBgZML7RhSqWfoXnzuf1kiBP1rS2z3rLNsKwqJUkcj3s7BN6DRn5iN",
  "key3": "25mwueuG3atQpeEcfCYhkaR9mJXmBabT2meiVyV4j3Qs7Z8BJkG4tCvu2fZuGKHbaPBbMSt9DtPokRBNtqLR97wA",
  "key4": "BmrefK4C1CvBeShThFipPBkibh4UdAdxq7gBbSR41dCS63upfuL251YXABGyzJ3h7wiQ1qws53TMjKshJAzhmur",
  "key5": "49ceVJTF1dY3JohxdpjVK9tFeG2Wf15THA72qAAyx6oHjh9etfzNNMgDeySKsawUewKzL1gg97163zkynF7Khmwz",
  "key6": "E3o9X3sqcgdqVhjuwJ2aKJm4ymWrKPyhVAN5XWR9JfKAfqXvRCqbKTq3YR6PYH4VM4T7mkrHwGQapedQkZB7WsU",
  "key7": "5EUz7VSMRckUCXT8XcGjJZHfSvF18vQ6LCZgmLEBJ1n4VUXQxPLmKYfUHfoZKxaEbzBeXhqtaYDF9n5aJ8iaEWz7",
  "key8": "48vFf54oxoxiWoiNQyXJVNBjgRHPsEQUkKmC3qAXiWfhvCJj8oMUHuWzZKXuJWFnPEyLZwS8tPeN5xchmEoCeADc",
  "key9": "2p6R4RAzXmXe9BitThRHyWhYgSd1RQgxhH6n5x8Q6rmUFetR2MSwN9g8iLGr5DYJ4Xm2EV4RqmkLMaPyqNQ4QC6E",
  "key10": "5F4FTW6fM31ji5d3dPGAaQuCmpgkNo4tFRXDxDCnaJaFcWNuAS6qdEJXnTydvv8vnBsVfmbtyAa2sdm22HjKyw4t",
  "key11": "4qMewBep2RGgkWkhYooTKXqKt6ERe6Dbuvuh8ViMkEb1fqc3AcMxi3dhf8tdou5TKWxsQ9MATRqNdaUqgCW8uX2D",
  "key12": "3X2Ha9UiS9CaLf2uScZeeYV9aeqBYPR41zpUCVtLgcwmRn5r3HbgjV6N1ccRxoZ4V1vtszRecpz7dUnzzGDNBdak",
  "key13": "3bQfizhCYocnbCe1tVA3Q2sGeUhuUtgGknqh6SCxVZmeohkuLT3kRnRjGrDkwTvieExnp8e4RwUFTV6k6UyLfH1V",
  "key14": "w7LMFvgKwtEnRVikj9wGfvWFWUQmqr18Wxva51oUJLkMy8nxDPpKhQ8w7XipE4T8oCHvwNjE37jWt9DnmnQMomj",
  "key15": "4TVHZUgQFcRJdpVVmV4nNZxQbyc2Fne4Wag9AGV2XgDGVmB8arFwgQLVx4kXh3a4sipKVmT89KV7bqGxhWM6pMcd",
  "key16": "4cTR1DgcJ5SySqwwgyrpxpXxYstB72xVvd3M5HF1EZsqzD8TZHdPxL9CpGZs8wtcq7apwRLstsGmncanGzuk1qUA",
  "key17": "53wXLW3HE4GsVkp9TWgMjBsgNauCouekSqdWVtoMqDWxikNpaf4JmRWE7mgqRCiHXgwqr7s2824vqB25AHdywvQ6",
  "key18": "5GHTA7S1Lw8eHkqaT3GhkxUDBxMNVHRES4nZyuwLDbS8CKCGKzPRP3eyaKNVv29KUbmk6uweEvyjPmPUyavyRXux",
  "key19": "XFjc3EkzwBLKtEuta3RqwhZQkCQyG9fr48muTRL8TkyBavAemRAhjuQFX4m7yi5ddTH9ZfZVXomfPWbnkn15t76",
  "key20": "bxL5zYjRcLaDwnfr1RwbadP3jNkMiLGEhvNMWfdvXDfvaqFfPRCThLGVxurqZFVB6beqz7WzqNK7DRJsJ1y7b1n",
  "key21": "2mjmgJPPXUbwHcid7RQ7TYKT7wDY6p7C8oVUvEJ4NXEzEG26NxCn9a47eocK9ErxCU8XWSKDRCwjVuFm4e9afTmg",
  "key22": "4mseKzv9SmCafYWyVhCdhhaetNY5PncUXPT7KkkTDo8XMgvh8kHFgEwhhWFT6ro3JAvqV7TQtYJ3AyPz3nRxYEBt",
  "key23": "4WM85HkTfzqfNGY1gnXSEq3XYDkwyQacPkZFmY3v89iTdTYiGPvnnNnSSGdKATdAUCG7PMTtVFy4LsVJTguFoiBb",
  "key24": "ZpGpTCpEH5YtSpzEyXyw26eJxh9SsL1jPPP8ngoggYAhfP6hh29uJs21YLviMSNidjMvBPb6qiV7CvGTQt8TWeJ",
  "key25": "Yeit8bLKRUiptdwAXdr4zPYWb875t8V9H9rhB9cY75AMXbFwnEPYwL4wwUy9edjk4ttRUXEB5vKERHXofi5pzt7",
  "key26": "3h6x5rXekVwLSifVb83JKaTRSAi7ToEH5dgE6A7sL4YVvFxmncgDow5j8GVETHWsZbSM3zz9HizGseeVBSz2iHMJ",
  "key27": "5jQr94kucyS4GdaBeH6uW5ZDo5dR6fJ7e4BTwJks9QRncJbb4QWpMedT2vVq34qNPxbPiEt5CXWfFohqeQsAERee",
  "key28": "332tFn5JJrKkhqubzMaHyYb4PeKnsRjc7ZmXbSvBVaT6jXvNEPNTWoeeV7M7mkSyfxTHQNCdvWAEENqFjxpUSdof",
  "key29": "2gmEzi22nH2UkocHYRkE4Kkhe2MkjT8ZgQ9Cf7VP8EMr2hCKi4oEjAL3oYytNWmcbDhq44kmm4vTeZw6jvxMUGs7",
  "key30": "2Md4i5yzaoN6wL6Py8BNF7o5tYNy7MkW1SBEQEjSnaM9ymw6QRnNPAkZFSUjWwvi3SuTo4ViZ5bZZ5tnGm37G7NX",
  "key31": "2hayitk9hedQRwhj8csN4789yGuqBz3SZ8tuWW8HrGGG7zmaaQMifr3rNZiDJuz7Ma7cAjG4k2tDmb8Q23j6LAAV",
  "key32": "DjHc9djqKzHHDB1pdGiXw6DNxH8fXxKfSptPf8DEVUhB8on2N9vhJRu9sMuFmnBmgC54jZjRGJmqCipfLSHfyFh"
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
