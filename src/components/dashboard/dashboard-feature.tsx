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
    "dgM2sCi1PaZCAYXrPHWxVCXBfSv2Kti4NuC9Tw1FUxkdqvwPoh6gJ6nkWT8LNGKmkiannsJYFqKH72nSVZMHxXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aiAr7sUrUMZC2t6xdiyvrfcg6iPGqwDhGZYmkjw4qtc6U7xtBiC3jXddESUawEP4maRdvDuyKRD4r3ncNBUhQQ",
  "key1": "YZiLCpjbifkFjWN3yomV5m9oDcmC516o5HQBKLzRa5mDo9WpS1HeHQLqUsfQtANTZVs5KanSgm7DS7ir88ui2Ym",
  "key2": "4Jj3gy1cYgb9FvEiw2LQqNxiksAodw8HPStg2UWfmf5jn4eDECrEJokNbcFxTwTqSRFCG9mejnW65eUZ99CXe9bW",
  "key3": "CXbi1QdLoLgMmuM8xU9EHBAYuMoHGgdjY1cxquoVoPrWY7yZGPLiT8g5JNd1Y9CQVVUciJCrUUsoyjZ5i1Sjakw",
  "key4": "4ibb7XafeA77rqycqKmXQGivK5BK4gYy2SvZSWpwsk7xf511HgmFP3z9TYbAaMmamozF5HdSoztPEYJaArrcSjma",
  "key5": "3m3hidA1LA1LUc1NxD7y44AkKDHdCe7tgVr6trg4i1Jaur8uAyuJXdSfSBwhWHeTbQPjrEg2ERYjx3SLDYBREA5h",
  "key6": "3UdapR1KNZNPCR23QWMHLZSdU2ynG3XhNbiCPrkoyFCxfP34rPnkqHgsmMwSKiNhJUC3rpy6Fr8ca2rpempdFgTh",
  "key7": "5X7RdWB132daDamXh9KuhHxpKfQzniZqzYBURgQtThwvUHv4UdL2TmQ7Axuxi1cCWj6mxXS6qyxe7ps95LTfXMvC",
  "key8": "5E9Ub4wNCrdqp627y773JHqC3oTSkficFttpSVuxyo6NNYVLbzjSXguKmKXEKkCzNxFh1NjYwG8vbKTgH1wZ1cwn",
  "key9": "3FJRrNp2wQdmCUn9vxjGKdSiuCs2HMgvGWDXzZREuU9ErzF9BVLN7cMSSniHn6W24yceXGBZuVLXgWdbqEzGkLDn",
  "key10": "5c5YUJF2F9oJKes5FuE5cHvVywkMuDzWHPyHkATSspWAvr5xujZbjoZy3Gy8KKbMXGye7Q2ZcbVuR83xKX499GKQ",
  "key11": "53TCUKuEgjSMTfBBwzgFkZp7ALdSW9s5F352BtCyYgeY93wLJ1pNG6Sui43T6FTAaFuChsT8reXce7pCyV5vEVKz",
  "key12": "4d1PUkaxTKBMzpSwavuFeYgaiTEnSh5v86XUoHLVpjAhqwCDUqscmw3WD6KRKyBSq4qiLe2Tz5d3JytveaYF2mz5",
  "key13": "4R1QKdzrwATbPoQJzKyo8QogKJRW8dnEsKSrzBkmq7dqAihEUbNibEDgUGxEhFvXXtkfq54bkCYfdo47Ft2AofTH",
  "key14": "U9QVMJzgEEPGZWsbaEhQcDZzgUbdSLCFk5M8CyKNc3zEJFNPLThUE7TEaYpXESfixzXTWPh3f8aJvn7exvPdwbY",
  "key15": "5vbiGoHuhonf5Wa8pF634KdHbjuPLJpSuSZivtRmk2Y4LioYdXk4dpDFkumFuRpb79zLHzjgzUXaF9gwG3eTYx3x",
  "key16": "39LP2KtaVHGPK77Uy96S7sGf1BBJcPuaA1Ec75mxz5xs5qv1Q2XWcjFeLjzfzeHfaaWMe9o4wR8JThwbfDY8FMqr",
  "key17": "2vBpjoQ2EQWmsTNaVnmnCG5AMdPNECqWunMfaHwAQhRkgCtomJax1cm521LpY1PtMtREYYzVuz8pJ8jP1i7SKQiv",
  "key18": "sskwP8ZVYENzpa3hH8C3cJ1Lc5EFhXuKKBmtNTNNdQSd2ujBM5gD55vUKFBbNQSpdbi3xnQYMVZgpPMUbBsiJHs",
  "key19": "5doLw2FsNX1bs1WxsUgsUdy7WYmRKmnN7WEGCYQSXfGhkacSHt7JpaKvmsskuUFetqTXWPZNcfMB6PjEiyaf1QAE",
  "key20": "4DbD7QHHpj1fMSpiEfFezUW3pk2dPRHrVscKyoPFgTBbHnYcGSQZgQ1J6y1cAduEZJTtCo2WjeuU5qmc4MqJr6X9",
  "key21": "2h4brTizimhqT8u5JPh4YhNMqipG1iHVbqpzHV49MZHkEFujTNCcntYcT5uSvNm9WCo3J1NQme4WQQ2Be8fdTWKm",
  "key22": "W8S8AMATsFaEyUD5Uv6Bshjsm2APhvy1D253ViTjGSCVPS2Qe88Gj7ibxFP4DZpwDMY73xfiFi3kgEqu6wpKgJL",
  "key23": "4vNoSnZ9EJ1jPsvsar4oMDaEszxxFTMvzEDf9fB8k4EvTzkM1dZyzE33Hsce4YcwhDdFmf7FmCHjNHpQd7ox8xEw",
  "key24": "5VxJnfQ1aRTSKqAjFy7yYqtQpKbadbMDhBjVhDjcDd2QC2tfxVPsx18TV8QRppHuL28MvHwn2N13kt1MB7NSURzT",
  "key25": "5DNgZ2rUye4wJNTuBdfrYnSDAfRtGL91c5ayfTpzaAbRD4yQCHijTnkCbBpqMoFCGsWTEFX49EVwsiM5qUCFKdga",
  "key26": "3jHhZeTyCBMZS6DAeuCKFJy69CuyxN5RqYyFKcQm72szBDYw9zdYrYQSL7JMm1zjpjs9KcKQDs5YxGUrL2KSQT2o",
  "key27": "5DyqAQgw9uimS19Wcyqiwy6SaWXJmKy6gSeWFjovt67YF9kUzqzqpGZZ5cLJuDDZYbzZnXwoNH9Y1YTquJJEEt1u",
  "key28": "34etpCAcqSvPnWY8dXsdDHhcM7isEoXnVnrNXHDBjxqndkM9bs6NSrv2HE6MXqc2vy62VyEQsR1vpMcDqY2pZU1k",
  "key29": "3ugRU3hQiagaURjeAk7hK2ytuQj39GqgGDB88t3YvotLMS6yZVwu6TSMmZHGsfAycDYv7pw1YsJy7uVGiaWZizmQ",
  "key30": "2ERXcxoTcBayLXsihTKsPnfdQgHSgs3hXMU7MZn5CLeUEDJsmsFXMPMk2Dakpjy4w83daBRHcRJEGCHLh5oBjv4A",
  "key31": "5PEaQm6iHifRkpmy7ebAPo8erKJZwqgnQV2Cc5DF6k4FnD7Pdv3NMAVgPniTCkKcfEd4jfZz7xD16xwcbhpheEo2",
  "key32": "3Cumz72W3DWXD6WhCt4d2kX1spuVqpEnK57mVenN7NZYkqNQh54XWHWjWg77MWQ1WhsTCXHTT3uLXQeqdvRbNJkv",
  "key33": "3PB2zrF1ezpEDJajLFi42HsGfSQ3A1iQQUD4N3AnswuwdoqduJ27g42W6MWy3JrBvsC5JyUt8knHhXdep8wbMnwH",
  "key34": "3u35SLwn5WKaRvRgG3uhzZsi8EEXrEXqeyoFt5dE6LjLQdKxbiyczutrVNZ65qDqUsbTNqTg7UD9L2QTUfoS4No8"
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
