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
    "62pH4n5N3CMCiQPtEYhDeDkjPcAR4CKCJY2AQfm89fYMSLM8ZQ5g14pt2eGRKncZZArkR8vGqHUY3y6e5yTY2QL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i49BetheJRRnPM9TjxRGcfoMQzX7JmVnTAiRjHnmY8aq4iLmvKPbVAUPXwg3JoyU57YPp9wLvoxCmmDgG2UxFKt",
  "key1": "4bCtrU9KckV3oKeAff9JjRvoJbdmiWnBdNfmHeQwh4eByrB8eW3fuiisGtRXYXRmBXGjHw7eYHGyeBbbEVXatyv6",
  "key2": "4FyZFApjLtgDeKwg4ZVwKynqUhRmJ4TJdxzFgztNvqvkue9RYvw4uqNnQGuLrNW9kfT3JBQBTXjEFsLQPrT6rHr8",
  "key3": "4HTF6naNBZe2UmnurH4pra1JaDu4WoBMMyenB2vm2xMiPhN3HBrrTXcXVqDGzAY8oyTe2kLNEifcn8w3AxgkfS3i",
  "key4": "stjSd5mjbJRSiGkv5NqD67QEEFEkcZuznUjSzcPREh2NQNtgz8oXrMniy8GXxexzz67zBXHUPEyaEouNtvoXWWQ",
  "key5": "4cnsshRpL2tzTGxDX6jnugaUTL5jFbFuHJgCKqUUySXTTPe8AyQA7jvSjUTKfiejoKQgLkrQyb7u5LWNjNjpmwn1",
  "key6": "2sX6iVBSTDZWYEbNDVmYecGtCX9QMHUQjexBkTP3ByRQW4hf1kZDfHXKJPDj5vMtnkJeatVnBs6B3w2PcXaemSPx",
  "key7": "3uAP7u7fYKW3aTDfR2pjmZ3gCHzi32WkdnTZkPMWAb1AALvrnCdkNuQoaPhxuRm3c36QqZhZg42VxHSmFmgf1fSB",
  "key8": "2XLbwTZDN6MZn1DzVtecJAgbEtwShBaaYsuMY8aYruQ2Do849KUsR559FE8LcNXePWaA2RoUFBwic9eiw3QVMV55",
  "key9": "5Fir9TVq5KigBnX1WPfXFUkP3cZU3f9ryEpSvR23SvYRd84kV2kusK6U62mk7mxjgvkks6nQmDY59Du65KjnsP57",
  "key10": "3NyFK4YbKq8cq88GWPgmcBsUvaJu4WpgrQqGpspuTSVUTLpjFxzP6duXExSGyPcmw8HFeHzrAHoyzsrVVFY4qhf9",
  "key11": "62yDhfHpc5Uq5v7LUbevjVvedqx4tHv43ApSScfoQKtbVmJV7TSSBix4893tZqYRpJUzLDE45jg37omwp14uXo19",
  "key12": "64KqTB7w2mbWbtgCv2PTdruVcw6UpF1hJ6MWRcSYgMmvUWfqqm5R67ngyiDzTq2NZ2gUfk9f8aERmwBknJwNCTJu",
  "key13": "4KoWaJMHWwqXpYjVzirbjjsYnNiV3Z3tnkVPb65oN1GqGZcRi7XSSoehBhPzSjXkPphtiu3RprhFy22coREgCYSz",
  "key14": "64bx7faUkv2URupcp7hmbXSNCKeAGKMP9LVLxU5oK2eJYR55bZT2wnDtdCXGmNtyK43fCGEBixSddC6DdLjvL5Y3",
  "key15": "3jLiSy8uATxp17WmL1TFv5ruUPr3Mg9bWXf9JYUnLWNPg8Vaat8xFvwMafNLMh6dLsc1NX7sSrWrmPChPCYbCBYD",
  "key16": "4HrnCxaM2SHkSGEv1M32Fw62giCmYdTDwAJNFc3StE2GM1Rawg1sRnDnafHKrUBVvDjt1ja2u6WXiWSEZfUrhrJk",
  "key17": "342jxEBBTUsJBF7N1KUAGgr71Dz1yqYWyDBLpZTof5xFbeZSNX84fzt62upnvn512ER6jRj5vDnZwua44ujSZQZ3",
  "key18": "RdTan4DynsY61ksDw36M9mqV2eBxg6Hcw24peJbJuPqGJAFtpBa5SignYTYbvMTqoJqz2pW7ACpxC3et9Pr2gBJ",
  "key19": "35RsewnYBLBYgfeNWu1UVCP5WTacBMuMpajMbC6eVhT5jWaYQKDezppcpzGH3Q89hac1ZeRF1pVtD7DnznsztGMm",
  "key20": "4UnKvBN56cSRpGb6YqJ9RKvSRiQHiwdevqNxXwHyZjfeG4WgwCx4CFAxKCZR4enaSuZECYjCVb3iYZnhHksqWwny",
  "key21": "4cHEmqfkJKJQ3jH9G1TBq1tYiNRXTEginuhibPvJMtENhWAtGxDtA1ELjYdBxvbpbM5SBRReCquYD4eXdho5eKy",
  "key22": "2XZ49PtcdRB4hBRPszYAa79QXUxdjGVp7Vu2cX62XJptWBKDTwJyAnFa5X8TP37TqT1kCVoYve185sJtXSCwc4mL",
  "key23": "VrNpiutZ1FXxapPFwLr4AxQYe9XAT575ShsnCuWANznXHkMgdRownPB5u6pfyDgjFqHathuzZz5chGgWqmRsjtH",
  "key24": "3dW2snahqihvDLGGsKPdCVz1LQiM95uJytFSiQBAwhHEYGyEoJGfCjFMgsCAe2STc962FXHbdprYhWHP1Nn36QM5",
  "key25": "35tSde3Ay5RNeNvoCAFG3QmjJG6C8Udt75BBXqyFWq9ZYCsPXguMQhFRRyJhFfXqQFsd2pscCNTVQMf9P1j4x9bt",
  "key26": "32uFXtCerjJLnuVjkg7PJtR5r35ennTc1np6JLqJgAF2gYf9LHV7ktk7yPGVHtraq4sFGPLsYMGkR7YYt9dBkP1H",
  "key27": "4ufo8GtA9peGWxSEaoThbspCwBXg7HxNHj1B3X4tofgdhohipCtL85cPKQErAV7DN2tEfpC3LDSPD5DhQR4NWug",
  "key28": "4yQqoQgmETSLNswCQtxyvMtdF6TKceouE3qf6C95UUD9ibzFhoEGeXPjuPCMJTkvhDXpuwecCqWqz4HxEWY4y7YT",
  "key29": "3XHLACnuaMAv8PpLzgobu85mbi83XotboMiJZXED6ju5tqGzrZrjR3Uie4gEyqL72b9kBft5zW25yv5BA3UAWdYA",
  "key30": "3Hi3WoXQfx3JsXWfC2KphKpwdx6LPJHkP84kEqJzh4DXAdWnG1SRUMcumvewJAahuUn6Kk5JaM26jNWUYr7SU74a",
  "key31": "5LQVhY1y2BNW7w1T8U2U5QuxpsQzK3rTtnLHnpr6B7dJxseY6kaZ8NuCgai4dHNDyht2cuhBFNVMueuH7u7HmmAV",
  "key32": "4RbR9zFdN6xCMFtqkJiqVc53QMDb2rNCjLTqswoyrUoYq8V8HrzkxpeJv8fmHg99qx4KSaEszA1CrB4N6BP9qSc9",
  "key33": "4aNHvTTckNrVYZPgCbxXeKbU88VG7ffbkfwKXcs64H29QdNEbY9qpwErncJFzdMR9BLtshSBv46Wxi8dYyQKQnL",
  "key34": "3jdiDJ2yBCbr8MHTeMLNmcRQVHtPj3ajAnKzSJCrGx8hXL5fKXffht7ggmxGucLXYHYUsaNRPFhiAkc28Sm716Qi",
  "key35": "2xACxKoCqeVwvGN31QsvA93meQgR41oSUDSebMWB9yuGWNHwPJ8oWYaw64CS7YbRrjHhyhW8c5MNHutjchW9MBZT",
  "key36": "2yhEvj1HYwsdy4MFR5bYmbobGNE3gjc3Jkn4UGxebUu1SVLXZcAChL9NQqZAMHdyhHUF3vZvUxeEfjnXUWA1aFJ",
  "key37": "5D99zDEPU26SMsCXXTTrLWa7eYNNcX7mKfiwyRXb8JHxjXtEvPXtuZRfimBcrtuaCCLRZyUHi3vw4DMmapEdYB4t",
  "key38": "oqpqwawQtUgNshy9UV27ou2quSfmVvtCToGSxfdfQAMm8BegZfkWTUYFEiwofZfVcWWyNj81Pxi9QQrS7NCqAZZ"
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
