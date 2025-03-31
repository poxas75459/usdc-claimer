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
    "4j2ZD9ZWNGr2wtshzSSopiM3Dba4JstJxFFTwuyZ4M9uBkzQYHeJnRASsumXUnAS3wQS7tmhWYedkvUhrRCeV6Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UJXdt86NbmFAiGzxEgahuViw7xYVxXyhANgwE81N5GJaXh4TJygV2Tf2A5syFzW8hxWVdZ2MUWHr3E23hiwuWK",
  "key1": "21NYCbFr5ZCaRQeRzQZkETwDdrws438Zt4r14pAmjvyuybXm2Z3RCqrNQPG2iBaUN4ERTGpzHySJ3n6Rjt1YnZH6",
  "key2": "26M1R6B7koy3CGq2KBvcKzNHA4PRczzJAPsL1YtXsEdQFmG2JX2rKR31ZXGgjs8bfVASLizmtjALgTGPBELbB1pf",
  "key3": "669YExcD8kmyqyRWSpeNZDtBLExxQkvhNuEKpyo6mcvQuJ89Ddtyys4h69mbFhtNRFMyb4brdCeGM5JAfScbkm84",
  "key4": "3hDpLsPELtr6twiRRtQXipUcuwQjwV4fnqDSU2Khs5befniqJx3qYMW7NZ2FZjTv82zqvnPettziP47uBfF8Ekmf",
  "key5": "2gjjm1jGWfFmN22sCNcbakCePLpPkSjzqhWv8fMphTSwUKDPtrdoVhphBLPApxJhSgRr8cXVkPZRYAbtp3TJahMK",
  "key6": "D1zjRCd24ZUqUwK6AVAbCDsHEkbtPX9AnLSbzHXT1E8XNeUs3QrQ7ZKoDUsaMisSGiX5mSxSC4iKhcgF48aE33i",
  "key7": "2hbVEqhVPoHSZpDvhBQwmJgNLmbq9NsE6WUCxY3Uh8utbeZXdj271n7o9V2br6SXVo4SxnRCdvk6ViCJSs7Kbqp1",
  "key8": "8cdVqGJNbxsrV923Y8edvdoZN821Q2kyeuRHkaCG2tssDyxyFbrDDeEp3NXxpeZLdrak2pQoUJhfbZEGhbtT8c3",
  "key9": "2ji2nJFJYt6YAAFrLPHESoTDfLprFukkqKvKrLsFGoVN4MKwLmg8qFbR1mzsT74RWzB6zGFkd65vLHB3r6A8Tv7T",
  "key10": "4STQZezXLegnEmPyKAVN4dM5RE7RsUWryevgJ4wFaiPzY5tTX8UtTCagVgofGRT14Z9vNWKFE3ef679AeHxCBuYr",
  "key11": "SBjJkCCr1Sg3sZUX3QYrEFjcF7o3d9VDvmFYFvCt4rjW2eg6rsqLDSxrbiaXzautUaWHq6ETv1u1FLzRq1C5Eww",
  "key12": "2gkFNe4mtc1uAMA9yEeEEzWz8sqSgRG1ErbwcQU8TSJvTeJtYTmN6jRAr81rQugisxN7AvbwZETpFMtEpor3crNU",
  "key13": "45AXeREXzUP12N2QcWCqnNKY2oFthRtoE1MkrYz92SNjgNXnkiDdUqmSm5i4bwL8m7fh9voAgJzMCwoZizpbhCC8",
  "key14": "3KoXngdztt3suqgG2sqWXeKSmdvCftnqffPYYjiZwURwuS3Npw3Tq25YeGo3XmWkFJQNriAVzhYPrrRwo6jxqscg",
  "key15": "4m2sWCfq3CJ8JoPLRRASZjtxKM1iDRu1bGhoMm9C1d4hBDgDGskKh1CpLQPDzhQ1Mi3irYtB2UFKbhxTYwJbQ18S",
  "key16": "5NeSAbhKeYR5cJwPNcUMqGeTEbNtgbHiqkY2Cd6w9VxQWZiEgqaoPSjTeNF5TfwjvSbFxrmDGXPoiFCFrfou3q3b",
  "key17": "21HC3NZN27UMGfp5JUquEufpUP7t3BVqHQ5MZLvnD42FvdZBtYgZh6sYka2HTuhuZWu6p5DM8wbZcUDPY26j6Ftq",
  "key18": "5qE56mLFArf6GnmtYa7oFi16rMwR3dvZBG8TEjf9Ju2KbieTnwHwf6qHrxpKPH4zEiz2eezd4JvcGo6MNZi24sQc",
  "key19": "4u3uFQoL8HpYuL2qRBDwkL7mFG5SkqXrbdzvBqLMFsKH5axo6RP4iiRkiysgCqQyabpKy2ScbSudzPgGbPvYVhDQ",
  "key20": "2p95CS7av8B9q6QQAZqA3k9bpsdPi9xZ5cF4rMGrGK8uvhQUimAwtyFUESES526QF7sZv2tG59yWBUArP8eButz7",
  "key21": "2dQSbHPCQhAYoCNaw7rCQv8RkYYWuDDTCLrj2Hq98L7VGjFdX1edcVuHC83suVhxfoj4uXNjdi4nwcBff1wcrd7B",
  "key22": "3vrrdaTCoSy92FtPXYs2CvzVMGLcqAKLuUvGDCN44n9ZZxTZ5XkFgXrziBKQsFdqCfQ6wZS1EA8DBknkhyJVUsuc",
  "key23": "2YUZ2NHeAZ699PKYEjpMJ4e9AvkEwg8tiQt1RKppaRWgVtqppYs2LpUj6hf3Urh7KF6jQwKe288zdPW6Ks8LPUDq",
  "key24": "21UFBZmbXn7qPPXCFr4GQp7S2oG9eWXApG3VtyT9G9q5aDcMsbgVY2AUBxTY7FkZi11NbrBdZJeUQHxJs6TB3DTp",
  "key25": "3tau6swMNZADYkYfDz6aY4geEHR6Wp6NQwBnFCev7pwnP1eCnvX9tkoibKJeiG8ZW3173gGwm5zh84yXoKzf8Vkj",
  "key26": "5zyaZ3JSa9obytspVEwmwGsWLTRdwPztvT4JEy1snnxLvoh9khcUS12z6SpvzVJc2kG6gZXw68jALGLzT8BFPiVc",
  "key27": "2PDBKkqqumW6TT7ZYfofnpBZbog6j28Kw468EvJQd6g6Ky5uPvozzDgwXtWSWiJiWtMkxJruRm6djzobzPD6USki",
  "key28": "5kfFNXTm3WAizM4VCUjpWkmewCtjjDcs64taGB6BPEfZ73nbek3VM45QCnBRDh1YK6rASu5cc4N1sRs8xrGQQMsk",
  "key29": "3VvwSKQrSgHiS5GKAr18qRhtZEmwsnaow9jAWfde4G7Tv6xRBUB6WJMBfAWYpmRdCcbE5tm4UNVvqCJ5KS791mFy",
  "key30": "3cC6jdXYgcHZ9ceU2g8WaS6u72qJgMia6FHdLfgUGEpjXTXr1AGQtZN3gSKAkhwTohGc21oVojZC2mLchTcseVhs",
  "key31": "5D9oKpLAmWPnJVR3a1brd4SSEW1LuxF7GkhmueEzW2RQSBxc5vunxZ25WNi71K1BdxT9LUDCbfMUANwLmYmK68hc",
  "key32": "29VoQpnPdr1JoFcryuq22CLEYpSqtGciWhXK497mYLW3QmTavghjfAbvkdezCsSVuZJTtrgNfGcxAUhn3kFNGhkA",
  "key33": "5RtER7NXZaGkzUVHgpaAnEd6KJX1Xxeg46rGYmKXn8D5xC1dB3EUZmgNPDF849qjCwaJVm6zmX5vZ3kyefVKMYdh",
  "key34": "uRBiL1gWzPmAqxqMuCEg5TkU1Btf2mSU2sFV4wMpXCt1muQsFdKTZ6uVanmDqNpdBfcCX9jGDZaWXZdHycm1E5M",
  "key35": "2gcQZxZywgPzL8JWZWqVmmYE7VEAPLQWh2uUjKCAZiYsdMydouaGtna7xJ6iyZugP9gsxBpabGzEEpFUroV9AFiZ",
  "key36": "27fnhpwrvi6ZBJvBX8Su1oFJtoyscosa4CR5B8x3uRn8ZNNsfgJFPnFgyf2jqNBhz5NLoK29NhxCUm4147ugjmeg",
  "key37": "5XprSv2orb6Wa9B2sUqbBi6Xm6e4rbdEdbdiYACoQ65DrCmWYyi8KZYyCsL8PknHUvY38potm9ioYxSePDqVm9PW",
  "key38": "5JtBqfvkVmSgKMBjKpA4jBK9M4DfUAQnQvqi5MnKzALjwWxjNP9A89H6yTMHQ2MEjtnd1vMk4AgLhY1UFjcyTwwZ",
  "key39": "3uiu8QJxEXBq6JMP3gTwvRusKiShU78DNwtKkE3xuBmktFzk8hWSzz3PvFFzeESgnagE4KN5qRZRPVju9cwroa8x",
  "key40": "2kFzQjvJux2FYdykJvLseUN5zF3mdbAs3XUxLx42ECEqit6WhHXL9DJQpvqwBQtoaoCzVjGZmDo26qapPkcHQoZx",
  "key41": "5i7PkXqD6B1s7fG5My4RYRT1AprVWrh8wpSnu7tKF59o3WMutFYQGUxeGBcSHiZckV2YJ3A7cxstkQkUQp3Nherb",
  "key42": "5JMWemU63iq5aviVCDdNehz2eAxfCLteixcxfMH1Hx9bRMjgZCtUH9L99nrcQttunHMuA5YXwFjfYow41BzT8ViN",
  "key43": "4mQzPhhGRpJQH9ym7RUvB2qiQc5bnpHMW5Na5TqBKSZnQpfGqGX2KVueWpn6EDnCm41uAAmmGw8cNjTE1pS6g4Te"
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
