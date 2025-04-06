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
    "39xnctZbEYbvcFhEZx1AmrzH52UWaxN6D29EH8T6RuUsPPzFxEPPJcJ1Hbwef9eGZ8qkGjgM3Pw2SCzFaYGftGhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527p139X3DgFrfciiG9MoK4oGiK8g2bGhQ6wDF6hAmRQrFh5HAGN4LNjeQmWWDYqPomWCAJJyyXxy5SnimEggcAx",
  "key1": "5A8MpCZE3vFdEJA4NtM6MovRDbfGnx2EPPLJirv1Tcsb5bSLjvVG2mN9mgi8Nke5itSZxbA3FWMLyLngG98VRWrf",
  "key2": "3zSifHThr9wnXJ8wUqZAzxwpMGpCni7u1HJ7xw7hnRfeUV5zKCteJr1stgCzeWaTYtvMoT8AvF1vJMPyZfJf86g9",
  "key3": "4RT8sjxk6LtA4LhUuuXjmGCc8gLr5HfA3S814HATgdHCvZ3BRWgYa9zUB9mxHWSw6xd1rYpDQQMbgnPH7VtXs8NR",
  "key4": "4kGovtQBfa3ktThVAjg5hLtcCcrPRsCmcMaX14XNVvVqvvjAZuk9VHMbFHjkKJwNCbeA2tMM2jKpdYArUbKeyBy3",
  "key5": "4WiqTKogaa39D5iRRtNHFWca3JTEdhgRgYvcZgYicCk8upzndizYTMKsJQtDBz7joxPU79RJUeqsbnwbbDS2eCcx",
  "key6": "o436fHtNekTWv9GGHcTJnjpE9qAgxQuMN2R7eu7z5iF3knaznSEgpr2NyVete1pmVU5xYGLTQ3P95DcF2ScXY8j",
  "key7": "3mFTrBRdq8KdjQMgnqQsewMLqxei29E97b6MsPxYawLJFH5FdeqtY7MKmwe7jYvAhyqrbyirXQy5A1MDvew9XF2R",
  "key8": "3bWLk3PmwraEfLXbDuvUCfpbxnCnrww1rAXfhMENZ9o3CvCZit6MRCmqcrbyYrptkbwfKbLPh7j5qArfiYAHSkJH",
  "key9": "JJy4UBvKaSFCb6VAfwjMWkFFL2BweSTFkf6r56UiRikfo5ZSS5sf9kpK7St3nDizjyG3Na99twAvJYSuZmocTS3",
  "key10": "37joRgztQPTkKYmdvaEBEjsb8YyzgrJFVRZxpZ4PqM5ivP7vSLTQzMLxUaKNAVNWUa419vrQ4b4bKghzDoCoVyxJ",
  "key11": "3hajKpgiaryuhK9EbFwyMnwwyAGLnLcL3TjGLzu7LhxJbQULicP4e71sHtyBvDZDk4nX43HMzUY8qy5eHYfca9yd",
  "key12": "yuJVicR2SRDtMyAgrRnidryG92emMAA2a89mUdqeMQA8MEVPVbpbatE61uXt7X4scqDoGLcFDK7nSmUyXd56XEg",
  "key13": "3pjooZjgodNgeRbYw4M7jPUrvLasnpUxxg9tPp7kxmN8pooE9sC8qhqC9mms8ALk7jrCUkUHTRb7dxsJQPCXJfQD",
  "key14": "4wJTUC7hWiRtihY5CmQeEAT6GuJxAD3Ut2p6WjE794jG8XVGbjAFrFqasZDZnJNLHpKgdVDUtmsrSGi8idCxgGmv",
  "key15": "4gbKTmHoMXTi1wrRm5AYQPpyCBNH8wmtTQC112tgT57yb9yq9J6XqJfNw1fxyWt1CFCBkyrwkZiTDfZ7MaciUpd2",
  "key16": "316ZnxVf3xx1jkX8YBZbHazdSTW4ZnZwgd39mfYn1shDWYLnwT9sRMDVyU6TDsd5cBTnqwPtATQp9gtUfh559aHg",
  "key17": "4o1Zw3MtdL1RQtVqaMAE18qUL48xubDxqy9xQadC4V9gMvBWYLMcG6zJFKeghCcE7od2cgK9aikZDuH6Ye4payPZ",
  "key18": "3iC6XdiCVh5hbbcyLsokYEmXRPCQNJCYrw8WQm2ca4LFx2A346cJRccnLfHqQPLbCXgaYUbiBCs7hdFdNi4dBBEd",
  "key19": "2hZqADkDNrgTAREY9Y9z1NtqTUJoSZFM3g5b7VV751rtgedDSRKSRcTQ18rHar3iJfEE2X5QjXJZR8cEXBP4E7Az",
  "key20": "oaYasPZxfabu16hzeFrVNogcNoCNt2tmBNXumRwyk6fMaqvhrt3aWZnbqYeUSrj6tC7v4s8XnZWCHhs8dobVEKS",
  "key21": "ub6NptEVd5Pm1YiNDLK7zmqzzPetCPCme47GvtoPrfyuniHpGtbwCz5ubX31hPcVDqLWvzvXmLqj2pNFCX5ghXo",
  "key22": "gNPWARbVcZoAf5prassb2z2mtM9aqCH3fyC7JLbbdhD515bLzAqiVSfEcycKyx77To5C14jdXvobJBJ9zDrcYCx",
  "key23": "5hmRJYSspBJfZdNbYfi44zcJuox2nZDXaxA16PwjrK6LsL1Sz1NU5sLVv1woVVhawTchY1itBYWd1fCXHStGmhbu",
  "key24": "5pEDpDwyDPBPAViBEMGUdepFSTRHEVFFsWAbytX6FKkXXfd5ANVpK2V1k6XZZscTG9MMsDpYs3cYokhNYS1Xne3m",
  "key25": "5Tm1Ma2E9AKLNVV7n8DcDTXTNJtWtTYPy2xHTc4hHkm4vvr7HTeLQ9p7ouWRHcj8nLXQe3oqTJaiL3ms1KrbUTAT",
  "key26": "494RU1uKoo2iuuCNF5H4dvd2KzxbEWCg2Tp2dArBgoSjFjaA6WzKqpRLQXmyuhE7ZHBou4vg4RoJ3YSrm2ir9KPy",
  "key27": "3WSUNqS4npZGZN3GCvvXkCoFqp1RgjND5LU8UzUxFqSCUixxx2A9e4h7HNkYAUnccpUobZxuoqChSjxBX76Zf2yC",
  "key28": "3VabnNsGu1Dvovn4yFCZcUaf3Ta7K74FcjznWr1NpdPbpEX7VMFpcxX7Nt9yEua1ssBh1zwYhkF3VP87mQQwgeA1",
  "key29": "54P2sCHjKWoS6VkijqGyokM2pFrCD21FtJKvqdE9TENokyntqnLrns8RcpKiH44tPnZh7vjjFLAFP6qsDy11FH7q",
  "key30": "5Cj9VRp9fa46mu4VTajxMKiavrMzHiXAnbMi61B3XFTCwJasyDTcPWwybGxM54LaxRET11KeZx5TezHryrQPmfFx",
  "key31": "2SPhM626ASUxAFCtH9RAQufpBzdgK8eu1DTsmVqLASr2D6yzn7fLxYkzjAF3tBXwcJbUtefFZMUiJLxGBysbrHTi",
  "key32": "42zpfLHBe4KBy68ykXnY4nA9zPrMRwBThjU3nppXL6PmLGpPoqxjUueEuhQyDS5og89eiqmTgRudafvwco3WDtKd",
  "key33": "3tNWzVXDChACJivqvrZY85igeBC1yEMyypK8C1tqzfnk7oL2RScK16TyWemWtac9jPc5xfqyEVJPy2oiW1bCcywb",
  "key34": "621bbngWjJbLD5BPifKVc95or67nAdQWDTuAU1axCh8WhM2LViNLRBjoyVXPGjgZpZ6i1taRgHdew7k3DvLdqQw3",
  "key35": "3zm9L4BvihViQkT1SCvUC72JiJePCYNpWuXoJ8tRpzFCLh3QwAYak2EJSqw5SJpwGcNjLNUSj7SvLqTAcjQWk5J",
  "key36": "g2kdgw3sFWQL3m5xuiksnzBheY73NcTd3XFA8AtxzDLMWkyeqYh4Kn5sZWeFbnvEEQPjU1swwtFHkWrL52trBdN",
  "key37": "3JqyuwhWMs7imjWFRFj7ATPDsiStMGAewy8xkDLX3EvwutP59T3G2a8qKCvTKCztdxWmuWB8Mzv5xJC6dVnK7aGQ",
  "key38": "4YmxJSJhAxH99dcpwhQzLELraTXNRprrAjUgGsjkvFLF37nC3tuWfJfxwErGZx6FptWrG4NDLczAmACAt7auQNnw",
  "key39": "4cHHN1csAQBfQVSKdeLUKFv9rU8ZtAA4fAxaF9tb2buh7XpyPt3YG2wChDDhg5kKEvxH65CMRYX5rkaTW6Yxohf4",
  "key40": "5oEzaaAJceUfM2o3H7WeKpuLjnV1axDCA2HtErUUdmPknWYdLLvQMpBZqdw56Xdj3sCak15aH64AFJoq3JdPofPq",
  "key41": "3dJaBgRHbo2cPNxcgWpXnaoyF215jCSGCxTbE1pEhLTra3qXEQkkVREJsy4PkgQtftmY2L5i9x2bpmALC7EFzavs",
  "key42": "5nnc7eVEa4BTFsQfYdWmrBSgvj8mvK6ycANJXkmzM4oYA1eXgfnNUkfL2w5KEPYyrt8xFt1BWBjE3hZjnXGe2ZPB",
  "key43": "5Cq75GpVQLn6pMQHqAEKdR4tWW4p9xWGPkPYrT7jawkQZyJGxewnASDCpRkoT2HyhGDDcRnRBWswkVudNQAdVRhU",
  "key44": "4WorLgpJ8TFF1fiS64ooe9nEee3DVHdqnuRjKUg631QaTJpFmv3AjCX38rau1ZqsnsgjvnFTBX5qMgPvwb2QJyFH"
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
