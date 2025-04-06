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
    "3gCNuNbPJprM4yCsrjQKqadw8gRNK2NpNHredUZa1bmj8R9K8VCGq4tqPnJhq7p1S6sKmMXMqvXM934PCM5cy4sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htGaj3aM7YT5C2gudn5ESmvKueKwyaz2dcgU1Qdg3vTzfHfjsWW5vTEkSPQQVd5HYe5v35hkA3WkN8qAENDt7g7",
  "key1": "5gcKQhYBgRcfsXAjmfBfTvsndwi5Z62hPxD26wtd7TV8BidoJYVBw8MoDUo3NyoVVVUw4bwXHLb4BHRfKTPmGYFQ",
  "key2": "4faiinLP5nGD3PQ2YyeHxyUGAwPzarWRedchAj4tk7fnqQSxQ6f49MXR62Piku2B7BLM8DNhYmfozvCqghk3FDnU",
  "key3": "4Zoet6MA3R5183YS67iWTvjMTzQpFA9vrExnxpCCtckPaN1KY4anqNeVxWc1jAZo5jDhjvaqCoj2ZXkUevXzejKJ",
  "key4": "37c4CUr9wQ77mZK6n1qKhYBhNSPSJUsS5qLix8aBF3Tz4pjVL5fvWc3ScmmeAp4SYVpDMgn61crV1Xg4yskn7yWX",
  "key5": "GE5peey46Z1rV8Eia2BY1pSWvEYQsYUYRuNmHg7vCnvgkUQPvtHiS56UButXRKsW4M3kMPVUpNg4n8gRe9qd4s3",
  "key6": "5VZGknt81z4ruE9sZcPHyHpdZqGzw6mANxQzghpZG7aPxr4JbV81PAN3LbSzSvbLEAu5xsdKM1uKFxrzqr66AUuw",
  "key7": "4wFySwwGz3uu9ZNCdi9atqT1mhkYtDsTAXf5R9eKDA1hy4QsPDrRAqgzvkqCJ1ibKeVSS2jPcVQiCgKXd2fiK8RP",
  "key8": "4C5fGL9jf4v9wWzveGb4WbuNHGQWQS6UYddgKz3q48Lz5UWn1GuGhooueLCn7t4VdexPyCs7ao3NY86jZjwax7Km",
  "key9": "37JQrcMKnuwoEtYoTNotwtLmX6qYp8VecKm3oda8cYJARekxrm8PL7pY2JskEohJMe1e7dpRciBAKhcPs9M3Qpx7",
  "key10": "5EDQCPGp9BhMXsTPUnCmepvfnR6owwxW48zKnD3VAVgGEmBQWrQqP9VPrGsPHjv5Bythrooxr2Sq69MKe8a8Kyoh",
  "key11": "4DrADW6CPPuHRP5XiPyZjdAMKdN8epKhcLLFFFeBRQ63zQWDm4Ydm2x9GD7hV5MB7wDCguCfMgyZWoMKJwvjx8s",
  "key12": "2BtZozxiywGZy68HeWg93pMHKkSmNcPJ3seHfr3PxuEUBN6ikhVSaE68nHzbDrRDDRYxWzbFQSxW69gvKdk79TGZ",
  "key13": "2hBxit6XcRG6vmGstgn3HnucR2N3K4inawV8zUgMT5NsCz7HrYgFT4YNckXki567e5APyna4DhecEeGWP7QrKxRZ",
  "key14": "5AT6AzTpJ8tdYhfFUBtQAANd9New4WwVpJamtSqr8sMjmJ5zWfqv24ZJYeG8CSAMsoeBLetdVTV2ZSKGPdETGfwY",
  "key15": "2N3Btf88DodDDLPJPfctienPEZxiKF32rbRLLW3pSZtQi8fk7crFSRG5Txh6cR9gY1NDvLi7oNt2MVUKP5mjQwc9",
  "key16": "BBCSsU6rMqRBc9sNjpUfnDVmHr5jvU7NCQPstc2EujnrUJJSJDia5ae8YeTVYRorSVKn9cLig1quqUNJn5tJFXi",
  "key17": "38M4bhKRzhbyLU6we3Eey1Eu831AVRuxLFMCDxyVbj2VgvZD4uaBzeBA12MNbVx3pcYuP6HCBSmN4SEi41nZo3iw",
  "key18": "2nqvXAmWeVtRmTn81VsUs49YM6MpbMn6j7mrS3yTQ39aZA1nEh4cuFXYNrdQDW73nowyUGpbxUtuJtQABdB4dhco",
  "key19": "9WoSFsuiY7MCQmNARNViMzMJT2qPAWp4kpCbcs2Nw4YScX4f9DXummGPMWJNNg3znoguyLHokAzRqnb4aV7sYqG",
  "key20": "2A3yvsR9xir3J22yb9m6RuCsDpxHfHPh33hBLfveV4cWVWyfPoYEnYeSvCVjESZXpzXbDsqu4SJcVPzKss7M5PtM",
  "key21": "3AnAe29s7666RAAbAEjVwahZFJREvXhWrwprdMTnNZeRKkEvc2t3G2V4a1s2Uy1w6NXKtcXCsoSWZSUwYTtNkCqv",
  "key22": "46DRefsnUymsSFzS8GDXbmDw2WrKRWba2qCoKzvMxAvuqbe81fQGvNwD4Pgj667wTX4Lk22PA7u1AbnsTb8i5B7a",
  "key23": "5zm4YiMpUzaC8YG8VowAKdAej4MxSarhYCpF8SfzcKS6q5a5XzmB9RLGhT5qUr3yGjEpr9CxhQGSr5Gx5eo7K9oD",
  "key24": "3yvY2qGrdJmeevCCNUpxDmkRXf5dwdXmWPVFuNLv8GUwDPKX7igedeT71ncbGZ8atJmjScaHBg2DqHZccAf94gow",
  "key25": "4WTPFcVTjsMvkmxRQLhXDqHWZE6L71r5EzErncL1rfipZNr6k5Ap3ZGABo69Jpebg8fi2tyPVWTG3YAv8Tu6dzri",
  "key26": "3bga3zoDWczNHqjTFMyVmhhmSZSMmTbnHn5Buex78R8iLA99DSTqkvzxZWkzbhkZqbwbzem5MMYHFGYPdNvEGmf9",
  "key27": "3LBhnCk1uW2vqxK48xbuzsYNAMimuoEdDhE9s92RCqBnCXGeKwWoSi9N4TAELQuXpiXM92fNKo7vJ4nEmbk8KSTx",
  "key28": "4Mon9GNxxVStGUKgasGj6kPjzcVc3pm31spa7BP5ukjyVMg6Ya4Y6WRsXVeYHPBhmP1rgzG4DTWxFUXnBU2vjx5T",
  "key29": "33LmY5ZGBUuNiGRgoxY2a1smjnsoNb6aGHtM6ePopb2MBS6KBjNRaXspGC3vXarvBzZptN8kG8mAgdc15Sqzphic",
  "key30": "65tG3i2WsBZ2bdE7vnTR3Q4QdgTQ33Dq5Fg6t1xU8osj6Gy9a1cwuFFiWQRVE74gQ6K9USwt8G8dZ22vWSZPTeAa",
  "key31": "2spQkZn8eTu1q5EU79cSgaQNvAjidxV27eEo2KqSY6MWvRW2hcCPSKBMH66TMxeeCoQxTH8cwGhdHmziXFhjUy3d",
  "key32": "3Hc2ExFry4q4UmEziGyvW3KUkK8EdPyuvKyURDB2M7aCwgkDYcpr7tVYKrv583SQ7khBx7QHQkujVAwUo8UnxBm5",
  "key33": "2JmTDPJ9jkrdca7zaF5iUyQ5PDhBtqzAZkvsF1uba1VSUfnpbSb9bxUPdBo1zdAnXTYirjJ43zCZVb4rK4ccPB2r",
  "key34": "5pg7WEVotaB5v1GC7uSX5sQk4rnbEnad8VMvXPo4WoMprbRd68xd7KAun6HuUUmUDUxYKTf98Eebk9RNcG6Df1mB",
  "key35": "5Y3R6o6paPCou3Zjn93nfQnChSUwcQA9F99bPNmeWhXYUhvfHGG9MUebd3eAdK7CkEejGr2daP3LmnTPz7Zj28o8",
  "key36": "48HD1zTvWjnQLPQJkDAc8JpuVv3bxaCPsB5H5CN7VvU4o17cYHa1gD41XqVhrYPvesGAE5HXmqaCJwWCnwL7C61R",
  "key37": "4d4axUDymHmiTRor7zFM4AJcfbnFYVqFmfYvgoHv7jX3QELRuJsVC7Zf6utUquYrPDrnhfXNeY5X2ktBbM8MuhcE",
  "key38": "2PyFzBkg1SJuUu6EzAKv5j6YhANTv4TvATiGN7L9aEbsz1c2554N5gGzut35JLcjj326R6mBuqxtETUfGtWrayqv",
  "key39": "2WLcwyg8NQRa3TZZp5oRvRhAcpf6nwLo9RfVuZR4Hhk7vnHc63KD91twVvBdGJCTj5ScRAQvyxhXTBmWEGtAHpRs",
  "key40": "3NemRWk9HzYj51QfmDizrzt31cRQfBQiKQokAnLz26fQxMQNJjdYxW5WryqERY3NtAsdbVocGJr6eCFfd6MELobz"
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
