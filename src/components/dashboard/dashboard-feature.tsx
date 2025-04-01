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
    "2qfrQawZWTmiv8q5Xa6mRNFzPU1WCtodZZ64wCmYGoroQsKSQUjnYrfNdTGKfWYpmPpMLupHpjTxbZ6n5YTaV6Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23srVnXCMwhVhxusUbsKbPvRboDMk8YDzB7E4UzFBTZN1KVK1niSKN8sSdUeerwqh3zZAXfMYrqpcxGo87aLHBub",
  "key1": "3ZU6sPJCcTA493PX6XPUHEx4mvqwVtf8qdNTPTDgFK4HmtyVSSEPn8xToFez4AADHqXoVPBq5T1ZmjFLKkW2F6QB",
  "key2": "3vWenTEFAXgqAgyDDcR7z2rEAsWUjjatVdRadYZpCYWAgkHs82KdpwbBmqbLdy94GH8kzSEU2qr2GJHzCg2yMgYf",
  "key3": "3s625Kc1SL4qQ9oGCZXHCUUYeAFoXgccd3UyffMDUqvx7bg2Rse2sXXrkfH4j8Lz1JMeNiiD1YwbbXLdjQWFae1n",
  "key4": "4bppcVLg31tvg5gXTuWNwgduau3hYzaDmwGxFkzZnQgX5CeMWAxXh18ETxRmmwZnKCaE55Mmycg5hF6HNkz7oia1",
  "key5": "3CpLeCME28H9FVQfECFW6gnywZ3mq4r5KnVR58iSZFtrBVEpa5AVGaFxL6dikW8R28ikxsPGvmmieyX9ZHomgE39",
  "key6": "bPyoUW5aNNpZ1oe3owTRdSPEv2GVB9ty9Gzh6BuSLJB6AAddXLp7hvC1Wtk3K3RBaTdQWaMy2uKUQ4WbJe2MYzF",
  "key7": "2X3LWk4xWiPYWEGgLQ4uJUB8gs5sp2WQ8QuFCiTPW4gW7tcypbaUnVYP43YFfjNiALwaQXVeAhxSiqHk3SSpYLX3",
  "key8": "8ZvSeGfZAfhvYTXZFuBSDh4mpfyYYLxNuPLqPoQYtQQvSydvsRq3Batex8dRczh2DytXtQQj8KkntAjQeFA96mN",
  "key9": "2JETpbCrAuPSrEimGEbPCAaEZ9e6ZNo9Pyq2sMDmKaewoDJMTuienBNguwV1Ju1sALoyjpoJYe13rPkvz4KLbYKt",
  "key10": "5FPCU7P9NdGxsJM88QYNaE1tSp9ZqKZHVC17UFJyLbtaKhfs8AUJhXh1oktTH4MahiAo2qxPWQ3RV5NS915qYuna",
  "key11": "3BKExKGwhEPDbAVJEEoSDhLxNyieLH3NT8WxkdP7rRHQMLWwuPYGEmeioSD8ebnL3RuyAPKggJknek9Fu9zGzLvY",
  "key12": "2WB1FNsw9NivY3CJF5nSUwo1RUHg6cc4ER8RHBgax98J1cq74tzkSrrzWXDwZ9ZGXB3k98SqrPPdZxJzBQuuoXUs",
  "key13": "24DhakZVkST8oTnyGgmdyKAiZSeskhemENc59hCWowAUZG6UhyQzpYkaHJgNn6KUjBYyS9RrJC5MVMavCzpSEzph",
  "key14": "3sCcziCGgh8jqYs6bQkgTSMCjw2XstAfkhn4ApWFgBt1Fzx1s2ERkobEqKTHw6qz6DSpKptfHaBT5uwsAwL2FPm1",
  "key15": "3mgZ2ZB1ogdiJrWzwjvBSgbLitHunWCJF3wi9Gu1AYkzfo92FqzBXZxKtPha92wWVR6aBTop4BvT35FGjpHtQ53k",
  "key16": "1oBfWkiqpbPXs8fgdNN7qU9wTwPwFzekNP6iV9AzrMMWyp75jhPoXJsxxUun1oeLhBu5sPdi7npiU46WZdkR5LG",
  "key17": "dmy6PYAm4yJiVEot1LcsegmiizYHKec8QtkheMKEbtSrnbyddNzqhoVE9Xe3L21E2detaEEzjFQxAWUhD7gvbXE",
  "key18": "2qM5U1bFDMY5K18U5weDtmNNrnut7jgGMpSTkq2BdN7iU3aDZEgYz3GUzHSYpHEsBF7g6ewqLXb7XT5a5mpxLmtY",
  "key19": "XkzLMjiSgk6FEWTcSQ2V5m4qWVLJaKys4z2nFFuNBYHibQhjFL4WccagyG2FGR5wP8c6ECGW86Q9AzgPj2Yu58u",
  "key20": "2bg3jGm5E9rj76zGk7qX5y6zd4sVCVoosKreKWVJvC9gcbs6fZn5zakpvM2QjUvrCFkaDzyccK5oKqk8yBkiscoE",
  "key21": "4TqRC679BqHw7SxcJ52cyaufhUxq4viqHs8LCaw1GaMXCDUtWdRFXxdrvAqy9TUApbsbCtQhLJsgzDEWNfU3cuUZ",
  "key22": "4uzbGNh2HevgZCLZPMqe2pGtbUBMBqy5Zr9VohjtgWTDWn6NXnMF2zEit6hMD6eejGJxiK5yRaareBWo9y4E7Umr",
  "key23": "2Auipczm7XKTRHXxNcYp5A3c6d8oGZivjorBbULejUh1Z1K2aTbzPuvynqFkSBKoXAPSoSKaQP4cH2QhWP6HtEwb",
  "key24": "3nbuhL4E8Tx7xVpoSVMN7RkegLAGHfcnzQMeeN6kRHTFRHMLzeMMFH2RWNZc1J9Lvf3sc8ZrtapMrvXMiXzDt1tD",
  "key25": "2Wz6LeZXTT6zn5qnjubm4EjEPAqhvDGUDoWZ2e8QFDSCYDfiSme9QQi1bFD4qZXwVLmqyVhjWkTKUEh9UQjJ1DfX",
  "key26": "4hnioWveJRASwGooSTFfUjJUTQDvzUMGsGRfJEoMdtep3rkayda51nuiMypgQx5ctzKqHxYELdWp7LfLiTNzosCh",
  "key27": "3eM7WEcScLBRLbNhVbZZsezwwrD2aTwPtV1xjYAMBHaFP3PWCWdM6tjiaFnh16hDyvBR7X5YykzxT1pyDZJ1KBmD",
  "key28": "2fyaXMpPmANVzdF7EEYsQJRSaC4Ec83pzqi1Z4ap27J2PbwMMBBLs4X3r7NL2FtPN6cjEac7Cf6ZVSwcKtBU4cjx",
  "key29": "5q8NBkmFMXPjFNsxXrs6Ca2WowPcya3ETQUfUetQ8qKbkAqUEWtDvnnqgh1byq5dU5pqkCEedED8m3dwbQvz6fCa",
  "key30": "2rypQLv2QqXmnDzyq4wbeRWJEU7CoQmaBTTph13NXSStgxUjbAWBmEKhSs6gZ4aQCCEFf518nA7BZCyJpd5X24dt",
  "key31": "3fSCNZD4jBfEnd5XsizBTa8uFUazpSu5aoYbdbmmjWjF3whZvANeTp1eB758kF5bazYuZM1rZMmjewHsR9VnBWrv",
  "key32": "3fKnC2w3fce6aqhzZ7xRFEY7FWuwdna1ZKaYdTVrEkD8RpGghjPxbtau4d2VWiynvTLsAWwaPNvHCxTtvGZ2bBu9",
  "key33": "3kFKrA65G59FFZcZHzXkk26CwxLTgPue4mH37h6y7uxm5EXUrPHjTF13KfhPcq1m5bTYrzZYjz6kxWgbRzCikhXB",
  "key34": "23USiWPjPwMYTwZez3EGM1yszuX4iqSSzrnq2T6AnVKztvrcYNP4Bwq84gL4SL2a71DW4JXgDc3GiUd4hu9X8d5U",
  "key35": "5919NeAqxJxEUH5pcEidptD2ju7xYr4wbgXd77jqTP9FMJpG1xdHEaA4yAcwLXepaTFmuYxjkUiTVmUedtRA4ExL",
  "key36": "4G6ca9swKcVd4NqdTE8UeM4UJDt5G2jsC891ruYLyQLks6HUFvQqHbUX4GJX7YytjoGNmkYKADUWDHwvdRTyssA4",
  "key37": "4oush76JmKmc1ABiYRYF8GNayg5RaetsdkfLTVEv2P9go7S7R1qmvbvuzxZoiMr2ARmyxgG9fYFhy2BBkNTcBja7",
  "key38": "2X3qENB3M9TDQtpYGnuL4B3pcBGNWyqhzG6T28ELYupo9KJm8PTM43F1js3iZDGaYiRSx9gtVj7D4fAmkxJoWCr9",
  "key39": "5Vzare4aSUBnHxMKYQmW2srisUQAhvvUfL96uPMpRzPMVNyg7ddfJKT43mHQj41wMxAE5uMaaGbxFm7rzcvgpCNh",
  "key40": "5HKnbDQCuBKWxwv3n9urDvbS74E9F7zp35AhJCgeK35ggsYibmyDpyUmDURxBSu924GqHABsjiTZRepv4VvWhSBy",
  "key41": "3acnCsrZFkFiei1T118yBeCFfPBnrptRpfds1hYzoD6A5TtSqxSP1DFqvfb4778Ugq8TJgADxvaXXwewA6CuoWam",
  "key42": "a6ccAXXqqTEGtegb4u7DyiMyXWp5jhpL7Xr8xNA8f2ZCtwkMwQ86NGkEtyAr69wKpgWzwfxVLSPLTpY6KyQQ2rf",
  "key43": "5wNpKrX6V7BPdkSf3Jq3Zi7xAJEHJJRj7851nvPtvJHYSbHxM7ffd1MVkhBaWZiQBmb3eyu959vd69ycD3REHJH5",
  "key44": "4xjSrbUo31QeHiSTQ4zLaAs739EZ7HQMADpRtUkwcAmMspELmWQDD4DRFoQy6MVuQ9WdPFqt1E5L8EuF1rHu3aYS"
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
