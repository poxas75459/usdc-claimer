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
    "2VmBiPWzpg3yjbv6TFisvHrtJjqb3Jdpmi1LNG7ChoFBikUdiLom3GSoERMoEbkRHkm67UQwqfaiRT3fBM7pH9Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gL45xyqMtfTsV8jX52KHggD1c83JwMkpwFJYJj6qyLgE7Py6HLbCak5haD84VBymdyfrrtoZQufHerKfUAYvf1o",
  "key1": "43c1EhgF2WFjWgL9gmRBXg8Mnx3ax3hB2HV5hwVKYDZuXTEE3PrNfnrCfd75h93AtrGubU89ubc56Kv1KpvdfZRu",
  "key2": "4vWRrjZmLdre29XCT6YwU1yPddrKmqEzeKczjpGRvuu86LtZFn9c3RjHVzhn5A7jmHhK2VuNhqC5ShpatjivaePL",
  "key3": "4GMYw1WGMSHb8wB3oByofPe4sRDfDV5xsn15enbuFVFjcxMQqfKfSm7FbNtw9iPFX6meVpNPcKqPxe2fFATU8g4n",
  "key4": "2vKar6rzrj3bmwqoKr4WrnS3nzAEV4TCg94ozq7s4zRehEAAe4W7VFtF89Kcu5CJe9QEHVHShyUBhsJ11fZLHpDW",
  "key5": "6SspYsMfckGiGgKpUZXWNgaZC3TAwoyMH6UKZQFv9PvDSSFvvZX2XYtjVccPcaLJseqeBo2QabGmYcVYq3C6hAk",
  "key6": "3iZoUFT658nteuNV5RGZteWZHJwzJasddUizjYZnWNRGCu8eweaM75zVdWrpu7KPcn2E3MhKqn6VgqgL4xHEtiGn",
  "key7": "5shZGv4JGRRWTCBWRwYCSbNvvqdRzFfAEPPHPrEzGYKUz3GBM2h2br7EYh2yaoN4eEgUCp7AYYUFoKioNsBSJrue",
  "key8": "4TRqcBMaRe5g9FTGQrM81qUcK4tdfDxQUPdNm6cp7JjN4zQ2xtmsogopxcAfddkp2jugzmqYHQWqA44TtvUzijab",
  "key9": "29jEnepqCAafVXcHRZ5MiWGkfDm6JCML1WZo8oTAWWbx4WPFGQwCZTzRqNMCnEwmFjvkbuQoQJMVKcje7eApJi3M",
  "key10": "2quiVVrHrX6TEAvF9yevLcy4XWaKQhH8L9rQhyGxPEEXH1utGAcnQ17P15f4FpmmjHpfrk7Gg789UvaiyyhSnyKU",
  "key11": "5Rxs1yApty15gcSbG8hyJHd4Mbp2mghSvMrmov5UvUJ7SrLxEgDdNNGCNySTfHVKYgKZtyzCwU3cnEdoTvimWvTx",
  "key12": "27AzjSJxMnWKW7mQEFNTSjy1DW5KijoaBHvTz2Bn2NSGD1iz1wLoxY8rTgsFfkVdE8y4XFkMEgPgDbND7XtYGY7n",
  "key13": "2woRoEUKKmKHnRCL3JHrUoWBXT2xbAKTqBatbV5LzWwTa8Wt8JGwHQpU8CnwkCc4TkWRoK7EgvddbxVzvbDLGmKL",
  "key14": "5emMfy3BftEDJp6TJXpTErxqfEMogZ6Ta6kNYApcS3ghfqTGMTsnJrf5wG5QadUHoDZEqNvTE8qG2xf1CoDL3Huz",
  "key15": "2sj1aQcQk6CFuQGhJgUe5xa5YD8MNkB47tYrAfjwnPTJaKRuWX9pt8cGnSWXTNQn5cMmfXzA6tCXYyvcGyN3Wwej",
  "key16": "4gz7PMbM6ZzHRgwCaVqFGEfDtRxNKY3hrMSshoN5FUydH2f6GuzNSVLskG4wbSZx8RTv1vv3vcq14vJuS6UyNReA",
  "key17": "2SeGCm4S8sPNo74nyUZFoq8oNjE5dNUvp8fyqtPmADqm65VFPqf75uHyUeBTqKQKjRq4yUNT8f6ZmBvj5obCWapG",
  "key18": "4duf4GGRfw3SMbr7HAJwCfpb9w7qGYfnL8oPcnkoxRKEYszhjKeuCHvTRsj82Yo5Caz5fbWzFLVa8awfXhiaBtSk",
  "key19": "5mYanoUDffVkcerMa5F5xUhnWY9MJW3aUYg5qrVEUYNF9LcTyjzPd5h9uyU61ZCt1cYAXicM6xyi419npzg7QrRb",
  "key20": "4WEaKPpdwQMzxG2m6avP3Lp7vnKTNkdv1259iBnmm5tMVNneAHkH4L2gAvoh9jaZuRvEKmjkjQdL3C5pBDjpJ9yy",
  "key21": "5HLVV4mf8X2Vj8GxWtEZ9WJpzmsyrDVdQMQLGRZcx1zxQt8d1weqLmtWpYDD6Du9XaZzWRVoFtH5rMFzLcaafQ2c",
  "key22": "2MQzyjKiUc7MpWfEV98zFzCj7VL6eYgvef9SgwqwmLQwxzNUDCA8512wJHewvn9WRa5r641VZ3bBZAhpieBpm4TX",
  "key23": "M6eyCECx5eB8qSChLq62V8iux2ZE1rWSFxJBLHsLs8fNpNVS1EtewpcEsFxdLFiQP7ktMTS5WX5b9SLw2Q2gKAb",
  "key24": "3WbBmdaULfyzRsf4UDhxTkGqKot1R6YdnhkAxcZWkf14BrZopkphtJuv6ZdxSCA4neQZAkCFS9sJvdhjajFdeH9S",
  "key25": "pka3jzhhCFBXqW8eM7KeunfSiE29k7JyUZRMbMxom6xsfRs9yFtEqWqjRZbtEGbF5jwXi1oQc9gHUVso1iaoymb",
  "key26": "5ZnJvyF2d3s6FkfGXdCU7sn13ryZowRyCLNeZvxpL6oTkCwdZhKJbtmU9w7HDFuizLs9s45RwF1vwGwqquVRWHc6",
  "key27": "5nShWPBuqwn9oECtqs2S2fzLvi8YPXo87qPGyGyEM2eZd3KhmMCeB8hBLWF9hGesp92x2egiNJLqoweJnUbsvXCm",
  "key28": "zDJRWDG1c7DBsXfxuWiEiWDHunnrkoeXdoZPNmyYE8MLWofJUwuuK8bsWtZdC77yDYE8zHkfUpXQ4VHq8CzsHwk",
  "key29": "4uetutTGFgXtSSXxsgbMsp6E5aEuBVTnxB4xnyxA7auUGsasXyQsQkD66AkxyaB4WTbvRXJgy6UZin2woFUn2fE3",
  "key30": "qiPmtVdgfyRKn5Qdh7oUtkPXQUaUSf3hTt4cG5ZA94Nqoyu76PUzJgndqhQ7FFi3DWvdGR2sL48Ddgh66D2bZ7P",
  "key31": "2wkcZd4VNHXDYh9bCfFJbqweAFbXsfQ8K3qCHVXEgFJaK8kHB2T9fwaC1F9r3EmoCj49KzEkSfYwEp5FWZXg3B8H",
  "key32": "4bph8wHEcH1XMVph8euXYNZRjYvt9XsbEDFTjKwpwX5Fx1f6QKdMUVLAiVERiSQGfCnAFEuUzvWri9TAmNNxQEtd",
  "key33": "49wg14yw6UQNDKyVQu3mLYa2zNtcamPB6D32BGXB3eHDthtanXDFFDpCSqw2wmS8fFbX2jzvoV6cJSxBjgvBkQE9",
  "key34": "65A8yR6tPQdBr2gJmoDzjN8tzNJyjB2MAxi6h8Am9kXDV8XdjdXy65u8MrKdRBArmdrGoE3K3ahPRU6fEauzjS1S",
  "key35": "63Bz7DucRM88aPHx7ToxvjPXG1NuYqXPXqPw62Z3cAtfYbbz77sDYd1kx5qk3H78YT4zvX1dJUSGgm3rG9teTNdQ",
  "key36": "44WHmb6iJMAjkZW2tSrxmN7iVdEyQ37qYen7mnDrKhYSoVA32hrz8pQsP1KgBtefivzAk65RsVtEUGjkk3Ej3yvu",
  "key37": "4zgdqHykz8QvTnby5fzqdDjDPg7tE7CzWsMWYnX4nTXoEa9ocKHtKRo41PJDsNF2RkWHNHdPwN3hzfLMjohpd6gw",
  "key38": "3wxEpH6Vi2BUH3zxQUTN29HujrwiRYXz6RQxZkYtMR1zxtMzkrgehqYDDbPf2J3Vo4rDhZuXmhAGEFbqqa6TQgVD",
  "key39": "21mixHBfjmEB3K1PcLhYbD8bNVVwykuskResJAm89MJgN4YjEV9Meb5RwApe6Ypd6Fgegp897u1YijjB8gK5gmwj",
  "key40": "5oxFy8QzAgsm8sKW55VNwWfC2JmJ9Lea7b2bS156XKnBPbTVwnymZsXSAUPL7DHtEvEoXJutkH1q2Hv5ATTJfABB",
  "key41": "3UKLsMehXLA9UNKKB646NHhCf7qnnufDQJ7bESZgLkj5WUtfq2Roxe43ynxjQKCaKLiduezhwQP8P8vjMmHw8TwQ"
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
