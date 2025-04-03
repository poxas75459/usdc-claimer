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
    "3srKPgTFERsYgPKaX6icYJeqAmxwyvg7NFagKzrRFcfXhWvwETei3kr24aiac7imrhU6d7kHFfmGsMsZtUPGMnTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31E1cQVu9XR9ZcThAJDggnKz1ktNDtw2qYU9kd6PQ5DwdvNB8SqFPiLoYbhVJTLz8KjWydS98y2qvm1ZS4XRm5gK",
  "key1": "3XcSxeBoYvfA1dpmRPJS8oaBguWWMrEGHSBTPJ5vrAW92c7eSFq6G9DGoD6CV4uMExuChLQQxbEmRBVG7ww6DRPD",
  "key2": "5e6GoMNPDpb47YwSQfGywwbpBCCwnpbRCsNwLd1gsb7CVYQeVZWjg4A2t3h7C6YcvVQVVerkYhmE5Dc5Y4Ryc2zX",
  "key3": "4RPgRJJCfNxRyj6JYUZ3NznJLSH5c7oTCMi6M8W64AqmutXPZwmd3L8GAvN8d43r1zftb2ZE8uLNWCBbCpTfPjGp",
  "key4": "65Rn3kMdoPXB8kYbEXatygMSFWxk2CJ43LrTDsgkfoSLXsTat8w4p39LiBxS1WqwKHGEQZMTDj7tSbyHYFB9uvfF",
  "key5": "51x5SDn4myDFFiMBTMyS9fRmgKib76aiKSKEv8UbZsxbYh4Emn7yL1voYv2AWLi19b15ovxPyr98rWcoxXdgxuuQ",
  "key6": "5rqerkukAKGrytbxdJXhKBg6vNaoYbytagG771ubFG6K8yZu56K4nA52GgcABSZYBQgLtyn41cqy17jLCV7YKemV",
  "key7": "5TuvCnzWTCNPNjY3UMcDLRZXqVXP7qjDESCsNQtANbgKUL5LhR3PgpL93AuLgoNSi5gGmqoNsvuRouP2hA42hd2N",
  "key8": "3bxPaLa8x4ioyXKuJ41VCZCBhmCpgdwSZctM485LX3tgvhnsgmQa8tw98BQd2SkN5c4HqSQg5rvoRfsxpLWbbmFG",
  "key9": "v5fzL2Mubmh4BiexdP9hw83M7KBAhrdS7deR5bji2NeEij599XNWjdZD9e3ZuPD3CeNS9YhSbhBvGmKGLNQPf9g",
  "key10": "629YZEyt6qar2PxWmGz8LqT5Jt9ZNQbKtuJBtDSSMQQAWfv465DcTFLHrXPMG1xc1q5GPzTd4PLHWRnn1AN9SbrP",
  "key11": "4b6SHxyJDBqGSM6Qmq7hDacHj2wLqQ6gXAYi7GxD4ncxMi2ZWak2i8TT93hC9JZHAfqLpxmNqa3jsxEHevL7xCZ2",
  "key12": "4E27CF4dCUfnPMEcPwiUw9qo75rTL13Y7jzVbN48LvrFVCU8QReSPKBtLqNF9mmAAc6cuVYoDWswvYciHrQx9RVr",
  "key13": "28EHVGMDjQmQp3duKZjnHnJ2gmjKj5ht5ejCRwTm1sMULpZaq3HJQiC7PmyVGaxy2nqUKcnsMHtnx93r6nLo3Fht",
  "key14": "2XL9hrR5rkseZAQU1wmuFrhW2NrDJNk4vCQd1N6ActxEGKmx1yoyUq7VeNQXZCsjFyxUAkquWgEMgxLkpwtZnS4k",
  "key15": "GBURNVGdaU5MRgZWV89Z7tHayfoXPyXnVnf2yRc7SBTpi9WnXBtAmPqzLmLgFNKPUPrHvDWo4zpmCMDdum5UQP7",
  "key16": "TzQZsWGGtyZBWAbrVZQugZ9bMCA4VndKjWxmqYXtzdgEnBTjwW3rUtQ5rCippNAi8oA6wxJcXCEBRQSJwpA7nDp",
  "key17": "4ASAkXDA3gyi9dhQp1fQmwogwECaf3DYgb1JZsk16tTpdKitz6tYrZ9ddmrauQnb4tRKqZpUXQFTj8ye7pRnXwXE",
  "key18": "37rZoDARy9HQoiKCpPYmLfJN1Svve22FU1xv89fj8fBV5spAXUaRZkr2u5L7wkMCwGwKg59E3DCB54yW1zGvrZt2",
  "key19": "67AgwUXCEvCPrihq4Emy5nwPcbKdE5sKafzQgTRteZ6FnTRHcAPFr6WcRaEh4NWEyqn48JFqur3TEXT5kxKGRzKG",
  "key20": "gmPVXxiAU6dHUM62B6UoyNbo51ak7Euc3UsKCoHCuVX599B6tzsAQiZWVfbKF5uvDHfZTvKG7WgaWsLfEFCtjUn",
  "key21": "3naRjD1rmvDJG6AiV4CGSZ9Zd7jrMLoxVkgm3qnkufpzUcdmkBEVs6LqZE33KNsVr9YtKByJkhC9aSvrSUNpc9Qz",
  "key22": "5qFLc8i768UXdz7NsWkpmX9hdymGjpf3E53HrrZbM852e15KnC551N6d6NmstywS4vQk8bUDpJwBGGjxAD4iDNE3",
  "key23": "4ZSp5jBfX8zoTXsdSi2xiE5NX2LSxX3i1uEuJ6Xkv8rFoQrLMqqxak8Rgh3sKZUJUMsPhWNrnrjoF8P8J4hRx7xM",
  "key24": "5TXmxPiSKWQor3HxaY2eQACqmcjsb9qv7cgsQToy1d6oi3oM23qW65coMtHc5xiaFQj2XxswZoy91wLkDfSDgudv",
  "key25": "5hxXaenXU3vgqh9qwpSLqNrQ2MUk56c8cCx9Y5gA5GkNcqWjRMG2pWdcpywgTKmHNftCDazztNGpiZtoQqrPLRT7",
  "key26": "5cH6Abu42ywPpNUiwSL8VRKhB6jEXEei1DQ77HXVahp8SHDq1D6ohfhQXsvxsYpyGxizRShzg84TEBVZM55Gpw79",
  "key27": "5865PwZY2Qgmr7XR5bMKRGJ3xhU8QXMGhztQXJSbakS3DBG5fffvZJHkZSKcZ56hknE7gmFnJfoWcw7LUFtMyCZm",
  "key28": "5J1bmL37zM7poMwr4KBVipA26NVQEsDJRw2535zVtgfrQCHYjejNNQQthWmtV5mk9jHvjodAk84FXVR29vVA51Am",
  "key29": "47XKod5JsUuiEhjkwfjVJDNFVmJBe4RvoicNcyYHvDxaQnGEYTP2fZr3NZ5NCKaRFg4uVvvK11oAwgiYR1NbRj8D",
  "key30": "2H96enJCXvme5BNXmjSG8XPmWtLTBXYpbvLq1NXWnmSi7gNx3TiCndZsFjHD8nUBgB9p5djh8c13KpaxGJ5Tvs28",
  "key31": "4AMwxKUVC8Fs6JGLU3SitH5XAusWCUsZXFjAd1SfiARiM3nU6icaZnwvAN5aFjVCKAQypiLKKuTgb4dEwsi9heam",
  "key32": "3XgpFchKuY4kB4a9vEMqiEKzB7fjhDCmP9f3bYP7R7bLuktw7yo4QqPbwVtgVYet6nm6RGBiwuLNQco6uK4pZSB4",
  "key33": "3Yvzqf53RPr6u28AZuTgvwp3NqEjLU4wt7wzH7esCs8g2L5D7peXD4fKhaXnNAFKxiDEqXiMFNioyZvPFk3ksqa7",
  "key34": "3EYpmfQ11gQx8bFaurcguaW2Wrn3dECzxsEpSYdjK8FTtc27RK5daNUDjJQEP5pSBRbGsP74eBoFgcxsNJNsBMYa",
  "key35": "5H8hEGefpKCLisGeFKsbMAog4oHHm9p9k26rBsPf2kY47UhTBe37cR3N1EonzmVbn8bnxyA9CNswjpRseuZJd4sD"
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
