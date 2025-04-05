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
    "bKpz8T5QMcH1eSGLYX5WHZ3UbypmMUFUDe2eYuk3diVSsGU6WrFw3uxLLXkR3TzY532om6nv738yeE3njAz149m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cr7V3awVFb4uGtGpCPVPRAfNPSaCETnfoiXZuzU56FaagBKVqnUFX7ZDvoRJ62kC9rK7AysNXYVewDA1XaHm16e",
  "key1": "3heUe6hBvdwM5kzdsuXeiDq2w4r8ikLdNAxkkqyXsTceZZmsEd8UAGT7WkCowpHfK4Tat4WVYKCe9zhn7ztFxNib",
  "key2": "5sZJEZkU6GUdrntitx2szVQmpE1RsyvhuQRj41b2DqSmg9CHkMX7XUgNsXNpbKYKae2oNeeFZpVjhde6BHBLMWX8",
  "key3": "SbvkF7N6zmJNoTgT93DoF2hWVvNAoFyHSqEMJCvnMoJDV6GmHHDzURgmLSGxPNLfG4nbMuXP7kbjEp7yRH2eokW",
  "key4": "4A2hbSRBxKvJvwJucduQzveBTTmMHDBAiFK9FDEwzHMHZfExPPQ9mn5EyTPV8LSEmByybiPX8wuXj3ewHvcoHgG1",
  "key5": "Hzu1c75HWctCJ3WYFptcxfWquqzdAuJXR73dQ5XmYp79oyMtCYzU15K4AT2xLYFQB3gycYy8xymXjA99mUHuTjc",
  "key6": "Y7bYumVcmhmJNN5DJ8UgQBFPLhY2Qi1uWMTsJ71NbDqnsLRuEDQ6xdRxgTQ4sm18shJWU68ZJAwcitF1hV6pzSz",
  "key7": "2WcZtd1tBeQNbHF1o2QMVR99qGTk8639goMSmMR7ocrofiahAQLAFdd8pYqgPUymV7EHZr48gwJEUNm5BBBjXWt9",
  "key8": "2fEDJnpwwfXAaDDmtXNjhUyvHrEQJJsktfskWgQQBj4FTCaFdDoVSe4PQwNjUp8UPyfZBH7wdgJUujFXJh8668DD",
  "key9": "36E7NH7rw9QLW9thafQ37oMgxunHXmswJcJLNYv646EBirdUJErzVfzvbzY169xSHGKCUXZWQjhXLJjkNa6qmtsZ",
  "key10": "2Q11d8nbP2yLx6QiZ1d2D6wmRas14sVhmzmT7SUroMomUVgE8pornoNM54gooFimSqCyCuPCK1UrsbHySdTaDptp",
  "key11": "5gGaC5vy9Kt2uSyQNcyBZQRpHGgBrgA29SYGUgFDQq6WD6ht4BcrcQkGmxdZBiP8DCM7KuZbAZois8vGpUYb5cYB",
  "key12": "2RsqAL8QgtJELv9V3yh7gqibZUgdr5KieuewWZJZHef9JECLijXebfNpAaxrjmj9CQkAMjwS2caRCmMrdGa16M93",
  "key13": "LvQVCtL23Q6Zpp8CuWbapZg7BJvJKFF4k9bpN4kMEeDyV98r9y8HKskaFmf4pkMTegc8zpCh5hWGtLLg2zMCYS8",
  "key14": "e1jgFxdhQxFmkAAibvDB1ndei1n4DCZSnAHSWPHs6jxCGn4oEasPSUicjcMNuXvXrvG7weSM6j7ACUWBApS449x",
  "key15": "5sZxbULQH3kW9QZEq5ajYPxp3adooDbkEvunNcFNg8TTS7BB7ECaeKkSfAkaon4TD7B5oFSFPLBShpooSRsYcdMQ",
  "key16": "g4F4CCbxyYSyLx8RwbFPSYziftwz7LGVa99FU8HBV6WV6gHzhYv6EqGe7YGTZTw2aEgXNLKuLudQNvUmCuroEEU",
  "key17": "fWsXyMFXyuikMLjZ4zpMWaW3ksBpFjAzrpXzy5haPGwN8QRoc2yc5YwJNAwk1XLJGaK1Nj1UjnagtAKFwTodqRW",
  "key18": "3zAbMWjZJRLBDdcTx5XWvgaQaTNWpoZS1y6RAoDbkXuZ98gKad87LKNDB97bUnpUsM6DPtp2dTuNdFRQhDEYGtcV",
  "key19": "2V7psVYKk8uZd4ERYrjzeLMwaKFa49GWeV58SPENmS6djb2kwMmuMaw4Awe13tTAsqPBuuMe8MnQ9VXxgKqUmYge",
  "key20": "2oeGPQXu5jXiAtmfKvukNzFaPSF5D4uhcc9efVMrdxjnYww8sLdPzDKd7vWyB2ZYiw3eHq31d7Tw9wxjJimfqQwv",
  "key21": "58JZagnQwzrSoTiV9KfT3ic2vQsXCr5GdwUZs439rgKwdQyrJwicueWLFYJgE3mqkArCdWziPw64Y9sZE4YvdJpN",
  "key22": "2XLNmPMYZfaWqAz8U8msHRXZ7ZCRN6FvBFDASbLNDiNuxyGBaYdjgdzxUuRuxVzGXevhyZaMu143peoEkcCPiNDN",
  "key23": "yGJM3bhEp6SoorKkQhzEhe9csECWEKepJedjvR6qJ1jMPfvjKdsyCyG6mk7mkYrf1An3oiTjkGXzsFAhaRZTVB1",
  "key24": "iWuCGmF765XXLv8ougnsFXoK3bWSp8nWe9dNYFp9L5KaNdgTzp7yTZ6nVAsg9GDff5TZkdH5EXVAVwJHQ5MQVLr",
  "key25": "4mEZxtQgc4Lzf5oWo6vqQnuxg4sQDSzPEAhpasfEWt9QU6QwrHDpN5Si6TZF8cPnPTku8nZ9KhjhnJq3k3KyUc4J",
  "key26": "3LmbjZ8Sra48CahfyD6j4ZpQ6FjGYb5DjWu5oZDxgzwzvoAjdZoWHMSCivdgXExqJeUD81rNrAaLdH9k3zx7EYyD",
  "key27": "4DuLHHABcHy4aYFfZcn3vBZTRegy9BgQu51eudWAaANiG1iUhwkMWBgwcXbychHPMQYoWao35YFQjTMjAEpAeaho",
  "key28": "4SMvZeFAaGp9RbcQoQ2XVR2uRQgX9AxvKzP3SLjn494dGQCDt2GTdgrDe4NitNwnuQmekYTSwDnbu3rycoqKJe3P",
  "key29": "2V9MZDuwbpvF5RZLYdtZeNqSrFw6tAK1dYpZouAk4JCn2FAEhVBhZnyNhRDP3CWBjvxpsexJjT4pDcbJmnA3Uaqx",
  "key30": "2keYjsNuJ4swQUCkNVvFcGgNH6ykXPERCaK6DNKknT7JteVyJP8XzXE3g84Q6w6kD7qzm4Y3HZ5SeqSkseYwCxaM",
  "key31": "Sw9i5YkMm7a19WnKSDtNumRp4e1x29adGyeTrBttCCBgzUCJBycsqkg4LGKpxZgef66NFfbyNofrV2fYSCHzGkQ",
  "key32": "23VdRMYXPa2cgZ1B1oJjfh3QdqETvX21EDKttrWFtKmLEL2QThfmyFtereTPwLbE51KvjxgbWK425C33sSsH8xF4",
  "key33": "3mfkLabkqBpmhY6je97YRyHruA8UeCsRFMKeiDgX8WyTZdfLxdRMrGtTiuSDdNnKzigEDnNdWDTPmJbUfguLCH2S",
  "key34": "64pJEH44hyEUriChohYmfEa5skvE59AFoD6ct5TSt61YbVCBfE7xTmV8Mp1begLynKFtqQDGUsnVakzvyzouRHQA",
  "key35": "3VLBaaDt6iXe5M6EJ9qAX6jujzpTzG8rzJ6C9wyXzUz4Hx6cbqkV3wcvCTN13QoT9Ae9WDWobd1zTs11Nwow9cE1",
  "key36": "4x7mMtEuuRwwBtMGzpvPgXCQRwCQinAqGLAM2jEBJf4s62YjKRnLVDqhBECeQ7a6tz5gDqy6FKRU3km7ps5ycNfT",
  "key37": "S7kEAVJnkU3JByusYwP8qNEmcTNpS43YHW17pmRnhj37M2Y43CGHxCiRMdzxoFtmFYX7DFJL2o13sjrXX7Xnwdu",
  "key38": "3G9xNLgoH9832hh4GJKPNuk1tC7jHj61Jd5a6UQZb7ovgXesEnSNrhSotkcA5d9QT9154NevqDviPpijftbjSUym",
  "key39": "3KzgpYoC44CmayjSG6cNsUd9kNExC1WUAKAfPy2SKR5hUNxAiL4y63gF4idknqvRAXpwu3McPKUD6dMzb1Y8o2pi",
  "key40": "5t62BKQPt4VtS35tFmAHAmujuZiuCojdUnzERyaHdtrqdDVruA9ot7rRSRYCLhp4stTkAX8EL2Tin3aA9c4SVtAY",
  "key41": "5HN4cmTx3rhCX6dkTk1L9VLDg31bmUKVGRYnX6t77op3iL2bKwWdubLvuFUTss6pMjMPXHL2UYAFT9ttXa7WKcEE",
  "key42": "43D44SDuQ41jHS2HB7xCdJWJafBi3HXFkGeWZfFNs65ChRemrVusd3U91SbKmj7Fzfh9TzH2AsiqPbeNQZKvhVHJ"
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
