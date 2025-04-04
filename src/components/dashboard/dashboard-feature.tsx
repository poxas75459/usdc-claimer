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
    "2L3AKLDxUNxdvcRm8uRGMXFMNdj7vXYizwWrTDrYhr22fb2hc6dCvWyU512gmArb9p2GnstnEbvqydBT4puL8rxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfVYp1mZMLciURwc4q7ttwY8xYym6cN5jPdTMFQN7JmDU6jpEPPEwDCpV8MbXPcPn4Gg1t6G3zuFmQMGLArvg8J",
  "key1": "5N8NtxybQKiiQAg5QBrPtFJAzNWyXEAGNAbXeei7p2cN9mUL2pQqiR1URZLUR5sMsie29zsSJQgXUynC7T3256db",
  "key2": "aFovJfu4nUQJHCmHM8yXs7t7airqUtP7e5avAGi1DW7daTFJGqva7LGc89FjAsKX6x4RjfQqp14C5PfT8LaoWhx",
  "key3": "KBZXeM5tbgQ4nZNELfg6bFNB4qi2LmS2UjwwdBLy5oyPXKvvp5fwgammEuAi5nudriJeCajhY4BTwZ1g32T3y8r",
  "key4": "3MpbCMM1LD2gUH8ZAdQwFVxEH58hWDY7vpCYsVzcvGieYgfHssz6B2PA3F9XLxMjVsjfQu287gdftkw83mfsPn6N",
  "key5": "hebuinipbvXBLkhfcYCKLgJdrDVG9cjim2uiim2rJ8yPgnKjQYMHgEkFCfkWn4cBGASSuwkbmnHbkmmzEEnJGWz",
  "key6": "4NsjQXuwuekcXmUkr5gKcR3h58hvzuscQpiuXusvhJ4aB8kp3DnR9oKXSVDjrXEcAhYUCqZrV8ujAq4pQPaGANHC",
  "key7": "4A3MUgVev3QVDN8PXVHk6nY6YDCjJ9Ved9pvm629PagQ1QDsEieVMki77J7vuGjKPA7tBAzpMku3bc694kXKxHvE",
  "key8": "4kus5EcnKCZFhfmb17pbnRMqD5TebvmhKT2NrjcJzMSCZtnwtbUaqUvLvbhSM1WESeHf1ryxyFsoAiRmYSvNC7k5",
  "key9": "3ZZyRMjxBkGbhLFt8cJcFdcS9LvFnawwNiFsMoDLpSghRJCRRkwbRGKkgV4oFZN4VUQV3Th7mRHUFtoGsgHPAV3X",
  "key10": "3vYSgLXFkKQZ3oy9zZbC894hHKGrsbyRpZFfWUbJqKnQGTPNoG4xCCHoj7uwW1yJhM3pcxSHMGjG2rqQTRY5G4V1",
  "key11": "4a5mZE6EooSDtzaWxE349SoKA8UiawXcL1bzfyp1wEGAjfT9wABGF6osQkCHv8kSJyCf8Rr9oV6gUMtmnjEHVo65",
  "key12": "4StqQnX9cLCw2vHbr2eYWd9P8MSMTbXufxNMCavNsjehNVF13WmeD98BuLjFS5uFPGboNvAH9mLH6ZrNSewHTcr",
  "key13": "2DaHgtUkL2V43Rcf9H3RwfVedEC6nzxLAEuLjw83RdnKAYTr8Hq2qJAyGEnU8GLxKsHHYwZ19rHgqtX6DDHp8iRt",
  "key14": "4DBSoYqWfkyqn9SMePRJLEq6bLh9uprynzMXE13BzS9xANXvALs2x67P3bGhp58vLDC7Liwvc5kJ4TWzfCP9z87A",
  "key15": "5kYpdrijM53z3Te8cJVZwokoABJ9aJSRVgRx8jGeLDG2Sg2tcgLAPat6R6zhCNmpfBjiBrr8ahn4P5sSAwz8CfoE",
  "key16": "shqdBmAnjQsF4pew74L83SG3yPbNm4guSFEs4dYRQsGCnwqqnDB8ynwR4Px7SMBZfUMgWk29VqMDKeF8BNwX2Gn",
  "key17": "tcNfs9TxT38HM3eULeKvnMXZpc4YdhFFoH9gYtbh3GqfV2NWyVJcK34tJtzTy2pBareVbxN9v4yjVLQNPHg2ga8",
  "key18": "2Z7YruQHTDiQfj1GQgT2XiZErbcoSoQXJ6odkPzQKQaTV2E2XG3JwPyJBNjE3fwRJ9dE7ti9pd74FpD2i3W8SP4n",
  "key19": "4cBthbz8Q1aqYLeNDWiwQX8NMB6Yz16tj3mrr7sd3zhmGbjji5gGN519iMYKiEZdAPchTWXhLfkfJ7UAbdyNM2BG",
  "key20": "2y4kjnam6VZuWGocb1pVv59ApiY4zwzwy5UhjGAbriBAmEiqcpvyU2aFrysKs3CJWpnybFJYMfpgCsWQ8ZJCy1vE",
  "key21": "4huAcV1hY947NXtr8vY9pTfSRzSrhSaG192NGyRK4eNj2uqzTNm58CwBhB3KDzrEeh3VEMnWDEg7R8vCchifZsXF",
  "key22": "CZeF6U47hr1YVoyvtdQh6xAeq4wKwVc4c8aoqDjnR5q6UnT8KqxMV955jAJ4xjBYhwbopdWSnXDU6AdxYa6eHAU",
  "key23": "4YchLZMF2g562fkrX9KCykQzMp8o3AX9yJHGFpxoX4vCX7qsGeNMxESfVSYwFx9usBTTwz2m3i45EKWfmU7gZWAR",
  "key24": "ZMSyprzaySUAPnUDpCWGshDeiLTmar3daaoFrr6GGNTBTaWDQDgaKn2ZZQGq4CFgLLkXgVRqHcqXDMtXURM6F5h",
  "key25": "4HWabA1osGkLdPdtMc6xQ7Yp2FXKQFxgxJ9JwQ1D7bG5FeLHJff3HPzVWSJ5SjK4CT4kWo2T9nQpw4hFMS7g5A9s",
  "key26": "2JMeuJcFsfEcUDkw4vUSVqf3Acmzt9Tj9vPhmwo3zmnLYMFMSvis1iCGcUjdcDmxz7CAyoZ62j7siKsNH1V52qsV",
  "key27": "4CoJLGkQcCptZz7aVt2JoC7KraeSvjTSb2rcNXEN52JiGEoEWYZnpqKQnMMehYw3Du7Nq4BHvBkSCb5TnmcAGBbG",
  "key28": "5duD8auYygdUa78bmcTcqDMWiev2vetoN3Tn3APcn1Ar8xDi7CFDBBCwKex8zwe5kiSDnsr3wFb7zWfTYTEsURR4",
  "key29": "3afynUdQERRh5fAPVuaDcU9gAgDgtpDEN7rTCZK7xV1JXAJZJvCJ3bagDn5SEATdx92cdtWi4cMc6oYVgNRW7RVS",
  "key30": "MrE9QAsiPgEP8sJFEdHX4DeSgq5McsJsf7uRFPJt2As7ibvZK1MeNRVeRttHMgW2madA8hDCp7t2U9JGDedYgcB",
  "key31": "4v4AAXijcsWNNfqxV4ho2Wu8m15CRbrzjdXdxhQ3AQkP5UJrzv19Nii2BggBC5PGaURamEJ6wbFuFASMhys7FueA",
  "key32": "5NBQMcZhnqMubbQf9GoSXkXoR1R8F55Rh6kpShDWq357pxBW7DvM4g2vtKzUVTsL3NF4WfdopKQLnCXJTtjn5hna",
  "key33": "2wuXHz1y1ebYHhUKXkbLpRBeyFiGsHDn5xFABS5LqgxXgjWbPvrkTBJUgDCRfyNScQGW6aMgQndgBtSuKVNfYFE6",
  "key34": "Hyg7soGRUpsziDWJejx3BqJAcq6j5BJ736TFtrHLhtn4eznjARdirMZpy7Mb69kYago7ctkZHpUxrdShfCsj2NL",
  "key35": "5jZbeJjXDEDYBjEPkHyTepsUztmFxusCFS6DTMStxXkCW67NuAhpKRSqAwHZWomNaf4WrhX628WTBY5FNhEaYfVs",
  "key36": "5bUBnjRapVXi53QMSmciQHE7zaGCkxkikiHZbP3cs2sMs2kWAicmrh3R3qxK9Ze1mfpoy4FCTWSLw2J25YG6qSTQ",
  "key37": "3rQPMww2dymeELcq6eqCEBdQuFqUTAshtevmbfVm9VZzF6fZRmgWJFZY9b7UkvM4JgXNWfNH6GUeGDoFb9N4DQhP",
  "key38": "4JwSCkTkjSKEoFWQk5a2V8jdpZHpgUPsRJGKULBXz9zgEu1ixAZLrJQx8j9GvtbnyVszUcYeEd1B7MGQfCdwkKuU",
  "key39": "39GmqM3taH9a79fGi6mxpPMq6ZDAuKcDKAeiXvC9KLLiJoe3rBMQsuyKDrtXNCDg8PKpWR7QG6H5DWYhEnvgQjf4",
  "key40": "345KFSDuf6TvG4SBWJfcGpLsn19KcLLiwHnFq3UR8DrnqousV9CPuh8qcjK4hzUUGq32cWK6XeTYVpnj8sybrA46"
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
