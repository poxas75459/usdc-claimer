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
    "5tmzsXiiKeWBh1c9sGYG4mEP4SuMWB7HVs9rqPWH7WpQjy7Z1vftrg1VMNHzreXQ635oRAyrgVq8JtrgoyxuwUEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDpR4tAL3krHDwwbjxKLzrYaVP2FuH9rTnmYyFwd6bPQH6FWb5dPYdCy16zC1cnJ9bHJkJ7PHzLQyD2infHrTJ9",
  "key1": "4xYuAi3QMLqRGMQjNZq9z7KbEydJbk6AXswJv2foGRXWaBuBpXRGrfFX6SeQAxrdpNGQETgYM22TkMNvY27KaMGD",
  "key2": "2eL7sFc8nnKY4Fwk3rAH4MytLAJPH3SvCZGbBZRRe3ZMQPsHGw2v3Pwu8LpmkYUgRnonEdFpjZmX7abh65Z1WRRQ",
  "key3": "517Eaju9qnLaLKJ9ZfKcP6BYRT3V8SsPT1AFTWnNdf3ASZo2Y7gQGbkFucxdyivRXBDjN7YYgmXvJqPuPZ35QwFC",
  "key4": "31DCTvvuZLGsrhbnM51x9o43g4hcKuN45kzG9hfFCG7YLDCfAGkoiRh499ujyHtKZQUZQBY77HFfc857BbJReycq",
  "key5": "3Xez4M5azSvEeHNu7Rhxedn816ePVszqSvw8bcuqpJZWS136ycQQS7hUNgVkfcQ3kLrohHL48B3N7iehqmgHx736",
  "key6": "xQSSvpp4QCxfcB2evFPopAVVboNDBwwSLF3qasmC2SibdohAwctNTg7uVWsMUEJU5bkmXZqe52E7FX2zTXvxE3a",
  "key7": "3E3rd14Lv4vZ8uCauKYM8zah332bQP1G5i4oHdz4hc7PDAthA41vhxF5ABbiD1FqJbMVnFwrQjEuxkd57tYhAafT",
  "key8": "5Ttc7w7WaiUCP3deqkyCYPnTiMwRHERNEmo5bzsGtXV2RfapgsQtgRAV5cMnufc3PZtHma8BEixyqPZgRfa6gKz",
  "key9": "4qw7MQFPgzcKY7vziTn3bJmb7CsfyWY9imYPn9Ko5fJGBKhSrKRJUowLL2wUhC4m77bQ8CFQx41xPGeH235KmENo",
  "key10": "2LbXmRf8L7WAFR3FFyEB5nHXFvuGP8BSpsEMcVPw91KHhCYXMGwXEiVcgxTcgi4PJKKSChMi4LYQ6h3Ua1z5rRdL",
  "key11": "NkKTBeLeJDxBJSzUXvgAKg2YV3Kki3xivKVtWuXhZFwJ3x1CTXNcNMvcFxb8zEHvTt9pDc52ZSfygkLQA7AEHss",
  "key12": "42vR9MjgYq1vLDY3yP5zv5jLdtK9yLDmVQa3Hn4K9RLcUKmxifhDhzRsmk86QdKSvLfG3hkeAMXAxLzJkJtG1z84",
  "key13": "d7z325P3zZoAfe1gAhefC1vv1wFdw8zwaYbd74qgfDWjvbVNXSxLZwHrULoQU7d4jviaMEmySW231gva7gprgeT",
  "key14": "58a4t5qDTf1KzsVewxHNaGbQmAg4tobmjJHsJvRH1rmsjemiKPSwRghg66TktTpzd1framH3CvbRsgnTfWdknnM6",
  "key15": "5hrBzYoHdKAVyoCNTM2n78Dh4HBE8meLCFkXP6i3zMb8AF6Bevws9UXY7XxTdTmX6pER17JrmrTU6wiMXVdunESk",
  "key16": "21Cf4hAvazoEqs6WBGZNZ1bXQUxXMGyqQpHX3C4LBddog7iuj7MbvsH2NbCXAgKUQnMayLx5ewYhsn8nK3R2FfsJ",
  "key17": "RhxpQzoB9vnp5AEtGi6b9rMJD6srJF5JgUwY3Ss61gYHGq9iKxP5oPucNmkPt6hbnAZPi36na4Yn9ABwKsuXiRo",
  "key18": "X6N17SaqH5TKjKv7iMv1ZBxvghpWoamr4jitmDvrELxThwEXuAMbxvbtdYgksSucjFGG2LYmTeS7q8uuBPUMrp1",
  "key19": "TWiGbnR6Bs7jxGNhdpLdBrb3SWG8LEvbHZHtr8k14TrFCqmVL2sK57oHu9ZxX1b1e5QE3xfKRLmP3cZsVKXJfPy",
  "key20": "5zcasQpsRSFD5f4yJrBPphqiuC5X5qHf79GgRHEFB5Szq4GJkUxM5bHvpQn89VVZEbfjZnPZxwsKzkugHLtu45Bb",
  "key21": "4GFJ8ZADBmnHrJjnAVb98VWF4Fn18MYEZhmP58z4VZVkvKHw2WMyYBtLqzmQgJd3G8U6aP5pH61A9vbTirZzFVF2",
  "key22": "5zYc9chHd2fqN8GsMeGXevJ9Z5jKNHiFhgMPTgfkF6KwfxCPN9rFR9KHxZdwMRZEruW5vzGNxK3DFBEjLMVtM2vm",
  "key23": "Gns9dapPouKK5zUiBafeq8do4BZ6in2ygQ1dabK9JumGYjYm3APi96nsCqtYN2Hce1YDX3P3RkTCzJLhr5WgTHW",
  "key24": "2fK99q8qqA1bcxEa4tNTLw8hkQ2DYMG3cbsbAsukMaJfkv58fc2DkWaRdPFbCfGrTJYYKza5WfE9YK5ivi1WNFb9",
  "key25": "5uoffv1XvKRJYkAvVrgHrNugXdxjPregMEdL29emAHXQSg6cz3AP5PrDTBcBb4kqih4gnnZrvEwwdWbjwKbn8LoR",
  "key26": "2MdAUDebUtDUgY5JEgPpafGAzF5idqoS6rqugorT8NGaMF2TUYWAJCoqWmw2cTeFjL4nqHQzY3gmYLN61mutSYqs",
  "key27": "mNuoA6NohYJ9oGhD131peLjTZv6CjC4NWGHbfrQDZdjjPBLTtveGppx4TEZe9kdaETg5EFx3B2o1E7aN8fmqqtB",
  "key28": "5JKjzevkfXHq4BkCyYcTJJkf74jHSdBRnsicSWBq8KXK5is9Fxr6ZuvqBwGE2Jy3hCapoYZJKM3Q9fjsyFXzAFWL",
  "key29": "2wC1XvFJ81L7KKskqQ3Hr4f322WHdvVjPAiDca1jZMjz6pPGCNfxbDQ5SmH7PghE5y5rzkSZgR8BQ3kYUTysS3cZ",
  "key30": "zrAMnxEUxiAEAaA2KiiVdVLcCsVRgK31pmUebwdjZYoKfcurzkU3wZU74atAwqqnvGbfemanZJNhgTsXKheY3Nx",
  "key31": "HqFaN9nXBvr84RDwrMLGo68pHvqg7gkJT7amdhwRwRrrqFouRQVgi1L2aDmtTxcV73ZduWRtYdcPZqkmAc9bXH9",
  "key32": "4Fyevwa4LCEctaAwfN2Qy9muYxitFdjLdXVwof2T3q7N6V8MBDTL7EbUDa2gerww8sqRn4B39Spya13QEfExEDjq",
  "key33": "4TWDQK9a5Zd8R5YSs7G634kFX3iaMAK3BtSTS6KhgHmR7acCsoafGtbHgkbdGprrVNrVooSE2g38fNjK8DqcjjLv",
  "key34": "4uGQn2aY8yt7QBn4bUz38hBN8tGv1Qx5qaKD7CAmc2UjTaNto9bKYvEG6qkpPbszYjVqNeZoXB7VQ7nkTBvmWd2q",
  "key35": "4yeAdCcRXc3YLLEhcNrdpGSMwaBLjrPyZpZbWcy7rAHSJuu1F12x5vqnSGa247Bp1iQK2eDeCYM3xV4NGmdNG8p9"
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
