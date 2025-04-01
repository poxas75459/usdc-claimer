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
    "4QQdFPv7L2scJMPa9U3L9nqDV8Nid5TNPDE2EgA1ed9jh9oCSQyaF2GSowysYvH3zGTYfeBY7p7uRbugcqD6Dd6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwS7yGfmqV4G4eBZsibaTYMRwC3U41UHAA4cGNqJHb5a1Rq28BUhhXaec6VguN4XUpaM8WeNzTiCb4Xick7xwpL",
  "key1": "4Y2CkozJvbs3JYypHHZs4GgVSFdfzEef9zwcCLWFWj1xFEeqDPqBzoDz7pPBZ7vaPCzEBHfctMEeq4kYY2EUFmzg",
  "key2": "2wiucwXycifmMPvyLPGHDcpQ4aNyVjVeaPzm99rFFWyfmQPZcmthgqDaLRbMnXGUKpXyUAPhjSbfpbAAW72CCyjw",
  "key3": "3w14NBvMJr8DEiRVeTb9RcLrpKaTN8XzMzrvWuvJ1y7DitPZ6HwtzjvND91Yv4S7CHskqQAik6AqUMbvmeLkiV18",
  "key4": "3TQYQc2Pm51p7XPUTgzBpaj4wobMJvN12dcAFwixHHEBHs74uaGj94e7S4ScLYaoVk2wvxApbyqLFYYSxL7ogxJP",
  "key5": "7A3Q6PKprRsqWkQNxjSnPXZ9eetB43LLpVdq9eHUvW3Yjy3WqfD6itPjVrA8NaqNJ63F1asQyhoz6LJ4w6m8JE8",
  "key6": "3ugvA64QwXLwg324TTKrp6Z1Sp3bi5xTfG32xXT21nxKVHmW5AJTBHYpVN7kHnfa2W5Ff4LXm4cm5cKTzBePdM9M",
  "key7": "3cAnMAgLzoBWUufEJhoFyw9YJGE4isURKT95utRRksvynt96z7A6NRd45ndmiabo4Q7hBs5gb2xbko2XZKijErM3",
  "key8": "4G6qaPYXEcTAfmxZWaW7Mvha8hFznPGQVce3JHGKzmJ7wh7xaY3gVDiRd6JiZAwasdYeDii2GpRx4YkVepgn2iVG",
  "key9": "4etw5ccvowbQP9TwwndjJuAHefgtbbiKP1n4uwuncttHWg4m7tSubgGVTwcWZ6Hf1vJq9UMxiQGcVFTU8q6dHYFT",
  "key10": "3zzgTzmrWDCCpz8fmd3Y16pNGqemZ84SBKVZrq1dq9qNVwpW2ZNAfsYzewCTrQxh7CYztfZNm4NqtBwhg54164jL",
  "key11": "4zY1EdC94egf9BawqkU6Ais3E5o3ptjnxDL9KzsmqcgetYudWjbtuHg65cMTCK2VnXyS5YGEXquY5we3u7w2HHmM",
  "key12": "5iRvhLagQJebutHfNbFjjkzMPygHmCJN59T5nxVazaJeQXXBjK2TqhRRm9n1wZkXe3cQLtRQLbbpdR5DFDnPHATW",
  "key13": "5PJrdQDuvhqngLfGjQqPbySMAEDfBy3wuqjZKdtkU2nAzVe5wM6UoFnqHRpky66Jg5fkY39miNZY4iQz6bA246mm",
  "key14": "5qdDYdKt681chZgfBfGDMERpq7tQ9FxfJXCTSCzb9P5irWD4VPaBizG821C5xDmHzPc5NFv6GYtTKb16eWKuG19V",
  "key15": "3zFKmZZY7E1vzd2eiJAyetCsF8fcDFEhWpFCdojLYyfh43o9yXzhgA6Cqxzk45wFuFztr6tjnPupz5nEaBnkkKNQ",
  "key16": "58exD4ZYDfzebjHMYo2Bn2nD4D7h8MSADdW7cd9XrWYcn1qeJK5MSy7ZM5AJpeffCixZ6j96Z82EiAnbeJb7hvYR",
  "key17": "5vyDRwFMJn8EZLtMbJPvUrimM2JEd5GH5tR5ryK9hRE913QPMy6tdBJ1AwsV4Sb9f5eQBwwYywdNTKQtdSYNSmxp",
  "key18": "3yYR9KGgVsqSy6rLrkuFtZ55e88izVQk9MVazBGR4rhx3njzyimYhcE4QT8waBtAyf2cDMVZDbLVwPtMEJHjEmGz",
  "key19": "2tXWfWax63AYQRDUpFcVeSuQJv1Sba46EGstk2tpC9YtatjmjmhjHhs3CsE4wuNTyyWyxvdKNgoendkB2LEWCgBd",
  "key20": "4YGKpRWpgsiyah4RRkoHwF7CNaLZ9Nb3mHkBcDb5wz2GBtyw6N7gPtp6LmMDeVqfeMPXcvAsaSZNJvrDQSrQykwV",
  "key21": "2kc8M16aPmcP7nFAhXbuxxpXM4MtvCAUo3D5xL4kJ1WvW2YkF2uaSEKLMXMZdPYJYYfeENf4FWeMDRKH3bFPuQQ5",
  "key22": "LvPpmFKNxwe1E2J7YKkAaxK4fdkFkYXXdVwh2bG58hduoMw4SFuAQqEdgPMhwvBJTqsLScPktNjCJK1p3iPH6hf",
  "key23": "ecR2UdRqb1KcqJANafpVVsgcmqHSpqxxWaMcqSJXe1eAtesyE81XTDJd1cMt5r2VTrXHDreRkZHNhCzqmR7f83E",
  "key24": "3bXY7qFEg7CuB3g5TJKAXdhDD2oQWXugbhE4Usc9U1WiFpH963XCafa2tgjBKtR2r6ixHeoDJYRC1ApEHCfeVsnS",
  "key25": "4KikgLamTrwyeTHKHv8uHhsHxiHVirZQCoXdQ14uUUXSQpBn1VeAJDnj7oqY4PWoFnQQjmQqcakbp12QsHYupmFB"
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
