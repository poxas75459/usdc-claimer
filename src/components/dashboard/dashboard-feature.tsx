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
    "4eBsoJk2BX3BMW3uRNcjdYdwaE8pF7h4cS5N8US95W7VpdewWoZMTr6CLE4jaapHmjf9W7BoFftrFjx5zWTh9V5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pm7cN7o2cmZUDNSjJkbaErszBSpxru1AtNxuiPD1nS6G2jL749dNDGuksRcbhCcXrtwxmEM9C3zTh4vsViRJZQK",
  "key1": "3atWAjy5XjrV2wtzbiw3FVAYy6vLvb1PZxEdQy2Njf9xz5KkZn6ahWqgD7SApGNnpYvNyqWFrtQ7G5G3x79sWQp8",
  "key2": "3bMdzemnbk9r164znjcJdVRUSNaV1EPy32RsQNziTbH1eTMPgsucKH3fHLT3Lpz8M5Xig39ignmN6A3qExNT6GaB",
  "key3": "ACRDEe4msoVh7fT92bPaMVXbzVQ934gNvYiM6i87bBZuXw8YSMmczST9kmohfUqbDZxPt7QEzvuPEuXWTm6VZhi",
  "key4": "5y5v2omoRfTM223CLZeAHvVLAS5H3yTmVexXy7R1LQLisFFUAhGa6wMxcy5eo5ZNbpYc8ERD11r1fxXWZLypMzrg",
  "key5": "5dTUi4sMVcpSTEkVMhhdVhG9CPLuwsdH8qoE55XUMAEGsMPHWe73f7rQFzEvJMtMSWvSDPRrTdYfjQpwC4NLV8qz",
  "key6": "5uq8mFGavoLoSc48qUDzqstRNNwaUmpjRp7TZYLtqCVEzipZx9eioiGjeaCgmhe8TY3AA9cBGNLYRvYatNy3QjjD",
  "key7": "413k2s7Uwj873dhqqauK5kgDXsMmNgyMnxrXwd17ers6RLvcWD9wZqq2evafQZkVEtdXDXDsxNQPh3WybM5n3dpq",
  "key8": "3VCs9yixYr6t9rwkX1aw9aQdmE8t4eQsSTECHhKaQ5CSTE9dkDTWYhfabnmJL4jvf8M2k4ScUDFeEnossAfNdwDs",
  "key9": "3q2Be5mgT4AGm6AWBTykwNoBUrLUn3RkPJBjdNSuJ7ZVxTzok2oicfRJtJMrsYSpULpbqEEzHwR3VA45fFnogZbU",
  "key10": "2qVThoe4qzJku4QMusZr4JHX3t8UxkWwZxACXQc5WwpiSruos4b8j76HJmfWUxhYYCVDk7FqCUp636QB16oJmsMM",
  "key11": "37sHCFFUvK1G9Vb9GZJaTLM2nvsyqYHee2wPtK4b3nwSR51J3sAPcByPxQaL14Zj8A11NLxZVv761xKny3PDvm35",
  "key12": "4AjnTd18KVyKEdiuFaCAokRacccvkUYA3Xz7DpUiAEEedxfJ2aJ1K55EB9wt9MTGDHdtbWNHk5Kp9u6QGHNAWx7v",
  "key13": "4NhB8dsnpq5Lo3B6CRG1MNBJTnLCniPEy6zvLcMinHuMCiPqM86s2Zt7ZX3Q9YHT45wrhguwxgksUNiB2j9UpLoU",
  "key14": "4DDskk8umDb1g7jJvxn3unbZhGcYfVNgJm6SCHLx4Uu7YzPPCpc52NGsWDFRQWFF5U2wNvUukZ5KLTjwq5PvBRjQ",
  "key15": "PJNH1TKnsKcn1SQKYt13hVHXEnT6wAQje5roBbcp8CxdpNgNAW2wc1dfPPVNnGcxC5zbR4LcGnrkjcox1rX4EiR",
  "key16": "oaaF8XcVcD2LULCWQZAKggg7yy4ot7envGCLmMoCumKHgdn9iVtmi1EfQn5ZZ79AfYtawynMMWdULcFP3QbET7v",
  "key17": "3b8Z41hUYz17ScZN62sXAnAbzHjjnW1xfbniNztDUuvZ5DckgVcCYe59qFFDSi7ZYi9uMJQvJHeeAd9vdHtaUS4u",
  "key18": "EtMC2NCc93LG8whDii4ZoLws1nCWoH2pQMh3dnXeTGZCm2T38P1nsv1SRFiXudRDUcDnPSi7vifNi9fDm3cXPPF",
  "key19": "3YKbPAKUUa791YG5ypAaLXvmfswpb7zDQUwC4ot891FoeWsXAkMQmyEufugTdfVPC1jHgUY48tCqrPy8KeFkn1fh",
  "key20": "U2G7o8y8raiKufXzheAuSwSWnqm8bgSe8N6rowNicCL7aUz5jWQWUY153rAJz8rgXxRBgVXdxY1v6KrButiVify",
  "key21": "4gg1yWbMJrNW3PAbWAqt3wuc7UE1Lv3DX7iAfVoRUeGkaLGJFiwK62qHnZeRLgRuCcuPtDZHt4vJtaghGoGcyrdF",
  "key22": "1Fn3E7Jz9rLbHyBwFbhGcKqb8eUjsWJ41X87V35MK7ahVqKTYwrvjQGEGaRji5L5D4xGXYSHiwCt9zUngXYka1Z",
  "key23": "4xcGJbNGUx9hnvFoGvFdeFg934H8FbLyBWoMiHPugToeDjstd5T7tiGZwDDcPYm1BpGaZ5LJasy2Uh2y3eoJGiki",
  "key24": "5tACvmABSYJ5PxebNDzsWSkwuUtTnUMuWV1HouHeY4BsWEEqch2xZgDkjCoNfxJNRwdfnzzze8qBeCjSZuVaAzgn",
  "key25": "4wqGZJuTRe6P7p98FRqzoycSNageP4GgTagrPNfyGCR8hqYTjXuFVoH2YzGJkbYafpsuBdp8sUvrCjy41u4cK7jJ",
  "key26": "XuQQWtx9EetYxEHE6HGG7UH1mbrZTECg47yTeMQZv9E4XQKhkeEFAqQZyPoLhG3aZcWfr7kZrds51vDxTN6Fp4o",
  "key27": "4hCk4yKupA1WhmptVwDAWZFfjCxPg2JeXNZGuD3BjCyHkxFrxjQ6tyGhb9LpmhTkeuYaRQPs6AEnqdLjtQRbr5TE",
  "key28": "5wcoQ7nkyjoPRcezkHM7xrUWdM6gMAHVMtqzjUWMWjUdLLj92MqPufANX4d3xjjTeoWv9o9pHRZY6KrvCrAkq4Mp",
  "key29": "4ZRr7cxj7SiVXApnxjZu962A3ovVJeVdLjzCfpn8S86ATVQt12CNgJXfUvMsvWnU5NuRsmaDAUqwqPQHQykU6riK",
  "key30": "2y9mfXDkDkURiqU3WwcPEcnYjWvyPfc5998FzCgCivXQAP1KrMR2ntYuttx7hYR5rn8QT4NEiyKWArsivP5SVQB3",
  "key31": "5WKwTjmTk18zj81QqvSp4ncAE9tqnm2o26VuaVh7unRPoj91GXi4P3G4NArPrMqrBwvvZzt7iBhevQUNv4Qw1Nki",
  "key32": "3c2kWjsVpzJtwYhLU434drq3cSb2osYZjLMR4TBGF5Gt8fGmiEna6E9sb7T8PBPLTuGX8oKd5CaeFDqfWw236zX5",
  "key33": "2iwXKC13v2ozenYae1mRkpVqjjgCLYpgcTNkapT6VEkx7ntYYdBmWkCX1yR3ApZauwaz29K6T2QidF1uEC8X6K1N",
  "key34": "62T1yDfGMeW2dBznjqbKTBgeznrJHyCDBjNBjHWq9xTj7KPhtQwWpLq6W9biMDPmPQoFPhr6EpUNXE4jS9oXYq8q",
  "key35": "3iR4abBoHVce4qb2bnpyDTJCFY4MNUsaToRZwkPveuAD5jmaqzFYjWTaKCBL5zwxrhgL2Tg1Dci6gbPP2oMv54h5",
  "key36": "5mcWFn1gusZ3m41DtwJWhxfTSVfa5yEH6z7DpsyaiqvmWYFg3jD8WqrZpnjKDqgN44WpNVQke2Y37G4BUsi9bwBj",
  "key37": "6fp94aFhgKYpGG6nwt5PzYrTyCUBPazqsi8Bj3wezgFrwVtt8ACpBmRpEdV4SxBkqVJNA8AxuSKCsaGXHoM1kqe",
  "key38": "5TVQMxFgv4dCE3NZKq224imqcv2PjGxZav1xnqsaaaxg4BWTBxTxyMkN3C38tM36oiygYAryK4myakjG3QZYHR1R",
  "key39": "4odr4BKJ8UZ2NrZAH9dYPimcctD8me4gqBqUqBUmCU7ef13rNFoFLWcE28LVRe31Vm44ecrZ2nqG5q5kj2N89LkA",
  "key40": "26L9X9WKRWvXSwD42JiYV12bbyu5gT72fx7JGxJ9NNyjfMoAUTRKTQGey3eBk3F1dUuekZ4QF5khhWjMdmRmYekS",
  "key41": "4N2ipEs4i8JFYjqwoUoPfhdVC3X2JCWmUpkhMmzPsizXwi1CpdVh6FzH89htvwZ6F2xZ6NsoweYrChcjSvYkwBLx",
  "key42": "7G8vtYpni8jZzNj2p8FEpzhaedkDMruS1TD5vnxDHdM1noUG2tVvoC5igESw8XRjY372YPG31vGo6yCiQdoEwFS",
  "key43": "W9ZtrtLWj12TwXoX7oh8LReGZNk2TgEyH61Qpu8yqVis3Lea8gjGnuAGDn8zTWFHxqvw7aXgLTtFzj7fNa3rqjk",
  "key44": "3rqXWetUaT681cRrsMmXeVpHvc61TotDvmvmhwtMYGfFdkJwygA6BS65Bm41Tve4dcpehauyxi4QXydgN49C62Uq",
  "key45": "3owXaLdNaVaSG2Xu7w9BcSEwQ9Ze1hQcJh8Y7qXBoRm5SfE3hHFQxuztaBU7ZzUNZnj7ZZqXcu133hGkYr5E78J"
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
