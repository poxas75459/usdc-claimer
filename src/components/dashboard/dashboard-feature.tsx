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
    "4t2AVXx3kJPkJ4fCGnpKxTfrcxzgEC1mmsiu9UpxuonQZDd7gtXRAg353zGjSx5PvkVhJhA4883wZq9zF561S1XE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SeBJeKhc5UuiHbGbBM6qAxbuUpHmdZCYKCoLoG9ZdRp4xgsnfqkxLKcyARNfQsnvxZQVN4jsxXgKeS3odkPPBcx",
  "key1": "5BbVk5H4yLGj41RJSHKnivjwJkuhba4ViQP7bHidwvWpcB2sAfaLBQ5GqgAznMZGZQHQk1jf2V3qDnAxNeSRLCdE",
  "key2": "4tbzMqfricheRcdAY6gZHpmBDxKMxr2roBkqkL5XpdruocT7y5MQQmz3cgpQQyy8Bi11erfX7YwX4iHqDWH2XKqV",
  "key3": "479NFBDm8zUdAgy7Yrjf5DPup4K2bB1KAMUbeR4uC2q3mDjsUFbiEgeNszYHxhLQhNUtH7Q32aKUpr5vA2GcqbFE",
  "key4": "ffpL1BXery5qyewhZhZSwVtbKA21pKEA3Fb7G1qZ3FH8SfhCBAjgfKSDFi9bLeuYabj7myzLSsS4NHzJAmKcq3p",
  "key5": "5WYXRcq1ATNk1WEhKamjGGFnN8hwy3UdMuSkiAJrnfP6rDVH57npR22CF646c7fazhrPPmM8ABHec8uZBst5Yn4A",
  "key6": "LwWWNPz5qoLhsPR6dJZvJPr68XoVpk6pbp2poDUo3f63RobDNSgumgWTMQuvyXnkR3wXXX4qEwob5GwnzC9da3b",
  "key7": "27G2W2i1Z55u5EJ5kMieJ76qhn9zDfbvBBxhzDo3sZ8AET1egrr2svSgaupt3oybCWJeHV9dJtz9d5R2wkAbBRXw",
  "key8": "25ig1mnzMmYYxXxHu2G3XTMWwUECqasYhgTtHAptuKR2wd1iwShWsVyYFckYXRYk2AfpwriTf13nN7zuVSAA2UV3",
  "key9": "5EspfLTBG2Jf1HyWH9KXmit4XnEcdyv1oFUPKjMjLKSXxxsfgUSFh6eicaMgkJdHbBCCbVAQgXmUFHZsTQuQs1tb",
  "key10": "5LxcNHQ13jHM1W8WPEMGQ2arteDafEK8X3duks6tKwMUPtAQ3fi9SaPBEFY47eqgNyBTA3HDA2tNpoMrbULpzhbf",
  "key11": "36ALQbd9a1EZfTH2iCR9Z2FEjULgJFhb2iSWK3yCFdaHhSa52bDJHFssLNUdqBJrmcvBctLWRwxCdE5Bedgg1ZNU",
  "key12": "GCkW9extQS8XNZH6K3nTWxmef6qWUL6xecxQfud7XFQNpbRhapp4fZfty6SAkaiMh5KbpozqL3Ew3qQG53WTSvi",
  "key13": "2W2qRRPpvHtjiin1ZntsUYQQEXxDHeL3TBobNAg8TkSGYXGv4AYkxFcJ6EyuQhEBtVvoDhrabsCEL6aQh4exMawq",
  "key14": "5wKWRDz4rSH6r5DLxdsREKdjN3s3hD3rkpPmFWHLuuV9if4sTcLskHEwCoGvMubWrzfbEi3yBzNkdchCA8URYnFR",
  "key15": "H98G1DM9NJrDSgxRVnHjN5gtdL8kw4Q2vvpP2bZZ3nqTpDeN6FRxLbjNx5tCy8k2xbmeAiUNV3WpSiKcywFYd1q",
  "key16": "3xu5qSEcUrbfEsgBvhNK4Y443td9uRuUxsXADPRk6bJiFifrmZctP4QGUJKtF9WT8e8fpuo19b4nwojJfXnJv4z6",
  "key17": "2qGCmuBf7aYFHM1hL7kKVK1Wj83AzuChcPax5pmcTQCMe5iQVXn2iAi7wYSKPwZVuVXU4dnmjPf9CgQZbAxPosSk",
  "key18": "Ra97r57wVTVUZCqCAR9F1XE3w9Xy4H1WAYhr247cGtJvLuuCVnzwgdvemVpbNBbrEaGfVKfAMmBCv5oX6TEtYYr",
  "key19": "523Gfov1ZQkVMCmmj5NXZqMXzF35Zxgt11GAUfXHN6L2f3nthwEczdxAWMvHZ9VFBm5X1TTZZfJNG2D9pAbeniVN",
  "key20": "3ZnJo9Na1tujxkMdptFHTR1Zfn4VuYLbws7aFzhH3H66UdpcEKFwok3Pc8vVY7ddkVVUddBcTY4M89Cagwt4qrws",
  "key21": "VznKjaVFDEZVUu3711k9sZ28sE3pHhKmzicUS7gG2TLbyAu6GxbxFgv5sXE9wav7q47gb46ssPLw9w21Ktqs5uN",
  "key22": "nph9irwUuVuCu5J8VyQsovE2YJkqP9gDaKqhPtiqJVnXXjpw3YyXF6grX1GKB2Jeo6DrGFwp9Vwv8DWysgxEcvQ",
  "key23": "3bsp2mNcuzZeZVp7WE3Auy7rtofzgVmAzNABqobHs1pqu36rkDZr43Sh7bv79Q8hXzCN6pxTeCgprjmTh3uZ8P9Q",
  "key24": "4CyjK5iGiRHYTXN84kctWUEsBQ4FV1c8wYo41UWyF1EqR61oAj7X3sf4HWydwZtM7DmB56dXudEi1bxMCQGsWMkQ",
  "key25": "3PnuZjHaVawPfJK2KiRn7FuWMLGk2rgQ8Nj1rmrFnJDXeJnZnhbPwoDz5VFiDmyE7j1cWcGXVgDsL8xcexFaunWT",
  "key26": "63tWDfX2LLGTcGkCu3suJAc64pa93XLzTkAkEWM9sYpF1w1RTfA7AagzQxN3Q3kuMGF9YHgZwCDRLoBCKUVMqbJS",
  "key27": "2Lfyr8nRf2ZZszXcTZuG3Z8RPQBJ2BUWkrHQWvymsLrNQiqBVd85Fate9BtQhUGsKPcAWV6jP18BtNTSTbYAyep9",
  "key28": "LpRd58dUUF1d4tEfVBJd1goknx7CBDtQ2Gvpe6vEH29vyWkbELZiMgde5c7q2PS72ts2T6oRT6rvHSKq9H39M6W",
  "key29": "4zRYnt4F657tsEwwutkJNzxD1hS1JDewFzAzfEG9vNRNCsPvm2vBK296tBCGSEaAtx1YVL847vjqUTx7HW6JRgbo",
  "key30": "31M8JsAw48zxwx1oNpY3QpV2TvdSnxzuwdCpBDTcpgn45DJht3C2JZjkaFGSPLSFFmQLx5x4eBzgu6iz234PEi3e",
  "key31": "2SaYvfHQd4kY39zegqWj8EGxxy9DG9Dfe1HdwthPNdtaqVckXMtDoLx9gRPgsxRV4xBMZjDfwSHBLybqyKWcVwLd",
  "key32": "5i5EtZXH6TAmBYuwqQDbay3bW7wFbP31SjQnQqqgjocyyUfM56CpFRjKb2CYHp67eabTvydvyPASU6afLC8A7SXY",
  "key33": "5eGMncgiXBvFwaWvBUT61T8icBkisy7PDVTB2EHtWLeAtow54LqSNeeB7aiFcFYvtaagcSy4FFPYQ211Crp8pnFG",
  "key34": "5k734hsdBC9ux63cG21XgPoGtG9gGVVnePAiRmHkpCFBpLptUP9zGU4cHXFpsWuxnJci6jYi3VAX2E3MonXy7NUt",
  "key35": "2cDJNa3cdVFbCz5t2WHUZGvRg3ouwXGkPANSt5hz6tnb8nw27yd6yVe2s3zJL64FY4Dx3FHU6AdYz4oTPQAP5SwM",
  "key36": "4JF8N6kuqAWqRAtTMGt8nGBuGHUXjoq46vvfoTMUaXrNTfhd2Zw3gVFJBJ8UCHChN99rpummtjJeXijrdS7vRvZA",
  "key37": "2vVPJNLz3hveZXQ4xbTchY7mn44KcHTHZng1VDvWNbAZ97juYWJ7bLXBqqHumLpXMQ8qoJvZqhE8qayEps3pGahh",
  "key38": "3dPgcAaft45cPWX4Sq2wxBboT5NgjJtjxWvDiZwU666CMYptJfxC1ncxbg7bReZHvFqGAPZEqCTy2LuEVhiKZC6Q",
  "key39": "4FhAuY79sJ4CLUDvsa7DkizAsjcwA3r9WDpFBrC112Sj8UfcywxGDdVJSQ6M279jhRgXAAzGbmDVUqvNXVQLjoJL",
  "key40": "3KSAWZVoxpGtrUyv7kjgjzN159wsgNx9hQqcq11Tr51te6ZyLHC5ougayB6jNSGVcMuhT3vcbgM5zbY9vSqHe5sx",
  "key41": "5qWwdDYgXggQyK6iuzviut9MgjsS4528tUP3Ch1uSsaZjFnRNyFWS1rNFKB2RWiT2TDcQvF1H4vG6ipHtu9zpocL",
  "key42": "WpXNfK1D9yxaDAr7vVG6D6S34WLtxPwQk4Bicsw6MiGBCjzYyXTSBybSo7F3b88FcpTw3XaAdMgQ83W9HSbvLSQ",
  "key43": "3yxN5FRnMNT7WVRmh5tjDoyx95yWQM9wodaYu6iC43aVHgS7keoc9p3X7gNvmhZ8t8QSyZNLJsrKtRs1iBL7R63F",
  "key44": "M8rw5kZwgb3WrVr7CGL6Ascwdv1i9vP2tVoYXvHobP5ru2rMBap67LxtrgjHifKKqp6Qs5MJfcZQcYP6a3URQp3",
  "key45": "2Bzp4K64692jEx9MR84DzfKwAfjWdF3uiZcdPUuUz1qNcMXKDcHMmfUkGpNwEFJNVbkb3HCg7wApZpDnfsBfdqWU",
  "key46": "5GXEZjceTcCHcJQHvhmkKAqphdfGFGxWJahWTNfV5Kg5EtyfHxum1DZ5XVMTbKLjDmcAKf15GWTJQYiF9T76qBzf",
  "key47": "59QFFixEGBvD2BsKx2zYqk9dRHE3FLKKrpsF7JN4s9edoGR9bR4p1XZUqYetAC8WiRrGt5HfhDSa1fdapVmD88Hq"
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
