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
    "3P2zzNnohXgRQsHRKo1yJdH469Us6emxd5uKNmB2SNAF7FKECeHzJoqNXuppBqVqUhmGBFJgyVFmSYsJgDoEuKLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6AK1C5vvt8KYGQbq3Ax1FBfzpvqkrUR5VzPb3MrPVXnzMcwsosZS2JZKpD6PNgkPmPyfce3Cg4nnH3fo8f5QpG",
  "key1": "2TGUnZTJ7rvfhUKDCRBQaRAuYwPMoqQEe3CbAvMzsyDPKeZYHp1md54ESZ9NwsC97wqgH52f8ELgvRVabgG8foCA",
  "key2": "2ZiDeBZTyB5yPoDmpaQ7yrdjLHY3ggsw2w7q3w3yjwZyQi74agq624cYtkfSH6JAC827c8Xe5mcxZCeDzPHb3qeV",
  "key3": "5ypdWgTde4yfhTSLjJbR91KsvPHWJVQBJaFFGBaoriScChQ9a6BL3FnsQBBZdaFWf82nkBSRn6Rzf39s66Uxu9wD",
  "key4": "2NxqDTqxsd5F6JJhVjMa8NrX9NNYoRqXJ8gCE5QVP3VV4pjPUjZv5KS8hY97aUwnBKidAhEy1WyT3SKPYfZpgscZ",
  "key5": "kjxiJ25Y1GFEVJwtwhW9L5kfocWbbstdQ6bgUdB3bN2kMvCY9MQuyMSfUgw4Yus3Wy9R7xEncbEkGp9n2x9WWjC",
  "key6": "4tWDiwzYCG1yYcJKDacVN51zA5qZTzQCxd15U1HXAvWgxsXboiQRRQcGsB4x2R64ienbwjexnRw7FfYDwGZ5Yn5q",
  "key7": "2SJ96DktcL75S6jo62eqxUvjQbMt49rSPPZYHzwJ2zjtsmvyuWYgGnrt9n8Xt4KAHUzkqAk2hqg1rhipX2hPtSme",
  "key8": "2ULjnkQzLeaT8oS92CbBQ53vAxxAtbEKnt719pfDznRukUpAePB5WHhhyAKYb2Dfn1Zcd4tMSVDE7UJEHnMHbFFZ",
  "key9": "2YBqCmrjsXUQiXn6gvAdbm3pdHPSWcG8WbvFT5XoMnobyV6QDUdLtkGdjHfTvnsmjqfSpfXAruE7VqLaLfzTxzPV",
  "key10": "4FKeN3URDRPQ3uKkYPeExwpbwuJa5WPBm7oSJcjrNCV9CaFxq6weZhf8wEp14LBnHnsvWNiHMdEHZEptzYofBhDE",
  "key11": "VHopYvZSy2mn13skBue3VUs7f7fi4NFHGc7PN6LJgTP3mSoYzWpwVWggmdBCvHUwsTjuDD88hPYdWoc4geZTmoj",
  "key12": "46u22NT92bBxW49dmSkYkrvodbGF5PnE1CkEpVeCjeXfNvRFSC2eDEAcYeDcsgRcXbP483TgHZQeMC3AwsnSibai",
  "key13": "3r4NwrwDWJzYm4hwfcaFcqDzbrCLZzaSpbfqJZjKXNa6vc19KDHMM8qXg5s1R6Ws64wpsHeDUeXKRFFtyJkBkRvE",
  "key14": "5DmfZLBrsWJ3eYCoRF595ark4gSuUXnzouPiaNStgKsGnATBVrr1s3sDHqDi6H9NLAgyt3amodYeLVd5SirsntRU",
  "key15": "5DxfBnP3xsgczXrWwNKWHH43guQtNfaYfRAKFp8W8CnoS5Dys416d6XtbF1rymW5ZV8eeZdrXMVXLvsTQDiExHPW",
  "key16": "3Vx76owTJK2xvRxWHwMoiGJfxE3aY66kcZcAV6aPEWc6iQEtmD1wu83L4uzT1QKELMfDnggTJ3mmMfJ7MeEB94c5",
  "key17": "nhCcaKTkoJ6BUFBtY4KTNZZN4vmFwRTbvyFRvbk99dKH1dABLdUzcgY8Tzh85vmZfJa6DSZXbLD8njZn7DnsgUE",
  "key18": "4u2yq7b5QQUKWbf7xZxnjDxPUJvr8TuvLZjMGTcpBmEcrv79Qjj1QCwZxwVBbPKyUkVQXdTMtVQazMUsFyRAdCg2",
  "key19": "5UYzaPoCKCBbjbnP5Ps7spwtJ9XNsb1f1SytEFy5fzPHquvqeynAXz6vn2kb7Zb4xPpH1rSKNDrorvkV67ZVfwsT",
  "key20": "4RHmnFWYn6nRPh5uAQdjzXMHR6C1bCGro69Mc52iKchiPCqWbYiTtFQJ4LEcQB795aQN7xQ5xXQbEfpYAzHDU4cn",
  "key21": "1Nd7LBVv97yPm5h5gY98hGap1mZixsk4NG9m1dn26bbzkvHCm2bmw2fQ2LhzcjVFa1worcB5KWcMHfyNQcEpBzC",
  "key22": "5z8LLRnyFbLrx8cJ7QzSXpUogPcMevkv1rMw5iHDMmWA8uvRabvfrJR1igqKB3piPdBA54mwtiLHa9ezMWBeVThq",
  "key23": "5iRH6T27eGHoeQFy2PnmvEo1WgkLsx5mFEnuub8fuLhrvJmz78p9yotE3V8pQorw8S2tVZL9K7BdLJdvo5Ui2Tb6",
  "key24": "2xhGVbBZwFYncJLAWyQKNTADvd8MuAzHWsNTvB7x7HPGp3rKE2KWHyyJcAXHj4YFtkupAHyR3TPceefiWMkanTwr",
  "key25": "48pSZk6c1b75tCksKkHFi9L9EQF7H7dfUSNznzR7JvdViS5Xcy9EqQDzo5Rb8cbgsDJrGPzTyRcXmWJENS4pXg41",
  "key26": "5iSHzGDQokDqK7raFSyeXWpB1XAXrAJ4WkvydxUQ6R1xDUqGK7SzwXhRdWoENLNL6gnYqFJDptMPrnj4uN1bLWQa",
  "key27": "4ohbYKAByuBZBj9wmF93LdEwTrqLSnNn6s8ECUJs4xa6sCrgyVR47hcs5hDQw3KE8zw83qry29fDq48Y8xHsViq5",
  "key28": "27QiFxxPhavyFPXxfDQsSvwh6e6wt6Wyirn7qpLaz3zEonyLACBw2oVQBrdgAXU9axThXeTKJ5Q7fQrnGuo8eSwY",
  "key29": "619FQZBQejg66fzXGzaX1ZeH83JqcpqVnkMpJTMuLxRf5BqomC6cpciPbaHUWC4p9QMKK8yZf6kVbFU2MvcFL6BZ",
  "key30": "2man79WNHKeQDq8nAEiB8V9vRej3hBeKWZ3YwbqGzkbWH8sJhnQxgSfcqTotV8RAFTLetqoCR12zxD4RD7TSuWjL",
  "key31": "5Zg7gHL8yyEku4B9Xh1vaFi2jcHWpYdQvKTkg3eyM6wvscpAUjMiSLCns24n1uAaptYs7SKWqvH2ZCLhyMo2wWzT",
  "key32": "3f53sf89vSB7tNtcaAmLY8dW6JPh6ZHjt4sSWu53cmjdzh5EhF83pQUW4HkwCb3ZrRyAkHBuyzZ26PqsMh3PUm7H",
  "key33": "41uJbswvuVgFUGzQqarm6yAbjjxTaX2AAuB46y4n4JdTC9TQjLKcj5z5ev7KufsvHSJhUWgT2pux9SAJn7TgJZyB",
  "key34": "UpSdjWd5rs1upC7LXbMZLwACArCGYBc48YC8SfSXafAKRVRtN3joSY3nrxRqjR4pindxYERAeaKESKe7FP9iUwG",
  "key35": "2smibTgBtoSN1yaWYdHzKY1vZtBzPjy1STFboWrbK2ovPxoYAEtK2Dh2EhJTzQYPnz9hSZUtwoTbR7a86P1vKv6y",
  "key36": "5x2B9a8KkjLnD1KLBjj8x14ZrYwd3QHB9cQCK8PckGnceEqB38BMz6tyr5fRzL7SamfP5fnvrLN8qUBR4N5Hi8xN",
  "key37": "2yjH8ZUF39zmLYZZspDR45oKe86rYvZkQqTX4Z2CS36x8QkKLFPbfAsrQpxTogFrGSEYexBoJiihHfdfkzcwzMmj",
  "key38": "64rypTEfDYNy8HnVoXxSbrY8FQykomEbvabSLAHztrfWQ21Y9FgV9o6dpR8TguzPdinpuaQ53JntSsSVtD8ZLHfQ",
  "key39": "3BfDmhaVwHAZ43a2EPWXtsgqKngh3YXJeoXxGXrnnttxudTyGTaHqMbjzSAwxDA1YkLrBYZhzm11i3kM2MuydgAU",
  "key40": "4dViLWhcDTjvMSu8dF67cSgEPF6gSQsUnGSZN1kafqsFWWBwxUPmMhrif5vEUf7AhUFdMmT8HAH4FbPmoJF1bGfH",
  "key41": "2w3ejxKBAsucjJXaafmYQR5g7NVJoUp9Tde9fiPQR37THawfoKHcihZ8kyvQu9SuqyeGwjMnREU48LNmg8QfEG1U",
  "key42": "XqCugDRV1dPqisGpYpL1tcvz47ZDXTMtCpqB6hF8C35FvndeYkyA5L4qauAP59nTarB1YkELo3jE57Ceg2T1TRP",
  "key43": "5qZeUQeC2svdDgPnGY2KWTa6pV5Dt947ipk3AWhAYkbReGaCbx7JBqtvKGrR2g2qkUrhjrdt8Rt8W9r3zjLJkpgn",
  "key44": "QR9UVnR3mo7kyMDdcczK58gYCFtkmm3ZSeH8n9SH25fJeQ7LCAwTMJKYPsxRWDZZJLpaD7uNmukueLWDnhnuJLZ"
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
