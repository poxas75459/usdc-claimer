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
    "3xA6jjFSthRDtQ14sQ62TfoF6vgcsZg5YGmwNFBhFY5WpghBtQi6iKtemh1nM9J3svtSaqwGN7Yev5FuyqMJyrGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGr6doiNy714kcYwBoTBuyefCWBrdzYukTw4hMdJkw9xtszyw67sNEfP53yifLZ8AtuN9dWMZ5Gak7BbcdnGGQQ",
  "key1": "3fE7C6MwvnpZEa7nvMGbmQSVCWEUtiJ616VfWWdA3g1kGF4A6fq23Cq5LRjkBxfLPcjVNoDx8tFW6qZdydttTnRm",
  "key2": "5mffxjftLkVxTZsXk46gp2nkdsWELvwdLyGEvDGGmaMgnfTnWSBtqDWcSXj62HqGVQNzpQTCaysex5uFSPu4DyN9",
  "key3": "5Bk8vzsu9PrFxx7kYVFD3u7k4W6fNq9Qsyrb5TK83AR2aATwPisgzaSsmeW2K2xjmT4wmM53QcEkx31uqPuLBcja",
  "key4": "3NjuKVzKTqKC7H43VDo74615oPuuyaH8utzYqJosMiGHC87JruTm6cNpQvXvmBxGctRjAVALSVh3PF5vf66TdHe7",
  "key5": "eHN2Bxg2HEq8MvaRtWkrqKUMpAk7oddPiYhVradjbkQcgyEqsDxUZtVUBgdWMHMwYGpZACuY2ZJ8DeXjSX9mdC3",
  "key6": "7Z33uojX8ksDspBdzQUpRwwpk4GrDdHQx777EZDMSuZhwynyZW57Ngzqjn1Uz2MqgKS11mytV4XKP5vW7RcgAhF",
  "key7": "3psqR1ekp1HPSouJJJNb4UszAYgArGcHVyWfaiNZrhvdverFwJZb9KRGSzeBHhgGEmAYsmLbh7caKQnrvCrJv4hE",
  "key8": "2ee1hz8jz9F3eTRXr1V7pVKPoZjGCntYoWYrsDtGxMXef9PyHZMeHBvnsL4WNvMPurxeg1Lh8fzqia3fDCLKegem",
  "key9": "XHVtrM8dsNXpS7siSmQa5z72Ev6aZSe1goJFmG5w1f6S8mkdqX9RYztWfJM1cL9CXk32x6y55gjYrnH8hpK6ajk",
  "key10": "3ZLJ5Wh3N1VG19jgQ6hR1TVRYSavjzM8Vy619jeKCPqi7GskiQZFaYKvEL1b1X1HTur4J6hyDTwdjVNPfFtkxHdE",
  "key11": "2aJiuoDnsAvktS4zD6yR3y7YE7o9t83hHzUc28eyLfXWS1We663bn2fGd2XFRbdHvNCGQmKX9TaZoUsUtLVAaxLw",
  "key12": "2BZzF5qFnDG7KvTryNkUgPaaHXttrjVqYbFa1MrAhzug3k1DjFvovDG8AAjfnVKiiWYsJgqTqyCV14w6Xe1QLRtA",
  "key13": "354K32pSAS7siEd7KUGMtH92vyf9DAjZvXD8MKPT7P2zc6x2yjmwDG1eqKrMdh36BoHUGc39iHmTbah3t3Etrbm1",
  "key14": "29NpQALasgXuE4fSMj8SrCxSV54u5zeYLFWTmzMT4Ubwz4TX6KVVk74sadm7ige9vo8mxuhn1X1mnUmrhvwZXPt5",
  "key15": "BnK66ooddFRN76Ri6ihHY8QGcxrXw9w6xhCfRFsAi6s71SjVqEtpYBRTn289pNS6ZQLMa9zQSoeyedfWpVotNnR",
  "key16": "2wZKHpm8guRojwcT522GpZDkpFS8WHCd47we9y5K3uB9yLNyQfnNofKapgX9K5w6gzyAYpUVQxym42HpseUMQzfH",
  "key17": "5uyWTjnxkifAyUWg71D6oAa2A8EWPC1Ui2iKbJvNLkvcQqNRrcJZfjXopWrH5sG1sr3Su1ibGBCaHbgf6JTHTWDK",
  "key18": "2LaMXPsUkCebMAPPWUcPjwW489L6rR6yDCnnVW1wRXzjubtUTQ364qeXGD5YacSa4y9Hz2Fe8m1YJjjGz3dxepDY",
  "key19": "4UNHno3HuTKQXEbJvUfEXFo9FxUHQpMAAyNLEBuQqWvjjKUiF3aEWtXs1K2pwuZRqXUYNVgiZUAJYta5HM5oF6iL",
  "key20": "35wM9SC6fKQN5CNiwQP1JVDiQMy82vdknimgm4Xxf8Rn7318S9fP5As7rv4UJVLB2kQ2VRF7ioegqnW6HUwqYWHW",
  "key21": "2ZugZoYpuCMtQHx3rN3iaq917QZaSTip1hdCAJKwJMXhcECVXgNsGbvkQqwa2Zrvv4z1oQcTYBApDyWRG5FujTN",
  "key22": "35DMCjK3FppMQvTSSxMzZCvTM2nbiUfMpLRx5CRwdX9RBpKory2A5t64aXZrutmw3QEY9M8D9baQp5bWPYzTVSKy",
  "key23": "48tqBXC4m5mo14yrQkGFDdPmnNa8MxaqMw4S2ueznwPy6bhTGBjmX6QUSqS2ZqFyr68YDQU3LL9Vb7rgV1g7DWi7",
  "key24": "5rLuJpUWwccS8saRcyANZHzXPjZycRKuzbXZWoWssTMikskoKW63hoU1BcPMfqre9MtDRUeJxV5ugsYXNY7XbujE",
  "key25": "5A33TTmVvanGAi94KCYMFyWiwJNP8Vsm4cQLtgSVgeV4sksp3yvHHbQKH5UkrxmsCTwqcaRvkBDAJybXMPRAXfNe",
  "key26": "5xra7KkrehztYcbVUMRKDkMk61cYmyfdbscaWaGYkKjLqXmAsmz4C3p46WU3Tu4P1nLUuw3jr9Bc1BmtnSAhEQ6a",
  "key27": "2iaZ3tQ8PC1R7ChiX1ELAG1ZMofCeWrUnWFV6T9AdewxYJvZWnGdwXiybfP82FYRvs14SFHE3Tw4UY245sFYvuch",
  "key28": "HtY7PcLbqwTaiRZR48cGwzms6994wsT9WyQwvmQvQGiy9E3jzM8CnC7bXeKEiGuyLJyxn7bJXNKYe8GDQS7m9QG",
  "key29": "5ni6zHLPaWthuhkwxEffUt8oVMfYnYhk1BQA7tqmSHu2hj3y1hjd5na8oWinuXZ1TtirSeZspETWpSyDCdU9jenA",
  "key30": "5ybHLRPhhcWeU4yxJicKRnnAf9auN4XpckesKbBZG4y6GAtGJ1aU13Auqoi9hFXYmFadacPujZd1KwvziVQ5RjXZ",
  "key31": "2FhRPN8fVSsY3rLKdyWRnA68vGhuPoWusddkY7kMe8XoLw9BiRAL4BQFY7REXp5dsL349CAVpbzgR33ZGEYZMvkB"
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
