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
    "42eCe3giJs66sjBAF7NDANKtXbPc1T8neruuV2KFEw2LbNkEbSLD3f8cdpbXUNfaLSVQhUx8anpWVnksMZAirJK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmmPrDBGXq97bqxxaoSeSKjMi18wgoFQCSB5fyR6eXyf4UdLkRKi17xJxn8Z9n9Z33T2thZyXW2DKa5JdJzNe9U",
  "key1": "4EbViuf9xzxZCJy2XNprwbswvydcsmBZysnXB2hXFQCYHdkVW47uNvhK2YgQUMffH16KfnoT1nwFrYiLHotoUde7",
  "key2": "3L914wUYa5pGqKri5Kd91iRY3PNBw4tSmbwT4pUKoeoUUdrujvBHphgU4D61sfuwsQp4sP6j96ctVbw8opkLLzrd",
  "key3": "2dtz9z6u2zUHXgHZi95qMCkaxRdUP72KxpeigYc5q6ZcJcqE6gavmn7iy8Kvt2tKVF15wZbbtEeARhBMb1xtPjxX",
  "key4": "41wQvBAgCbWm8vBFaHZzVuMZJCoQE1iqJTsgf6tDFEwi4ZUjYDL5gQoMQ3uMBXnogT8yuaswqSz27XDqp6YBpHLw",
  "key5": "4xMQxHhkyx39mDXdjRNNNmBoNAuChu9h3evkhsxeTowWFTqpzo4VCKP92ZhUsvV644DPiM3ereExXh3dzGbRMLXF",
  "key6": "21ik4APDQeUzAACaixNStVaP7jT3rZ24W8t75gwzW4XYXba2HJA6dnue5FqjqGbvpmBt3uaXJ4HLUo81ZXtMfgq7",
  "key7": "3ieKvhDGxPssPRxgrf5SNXpY65qtGY4cPpnRxB826CnAzHESAET2rNGzZGCSaAXKGirVK6NN4WBcHGNzzba4UjLU",
  "key8": "4RnWEXagxq8hL6orNnh4g77tRvyM7jEfeVREyLBGsZf6HkqpTQZqvBqLrZxdXQoWjFGUXvfJuq53wG5aGNcA7WkR",
  "key9": "3YqYTBgxbug8wmQx7CMCPFEKDPiNXrqR5wbUburefH5nJhxXJnNAdnEKmvPmgcq3uVo87ZsX9kLRUKqFyu95jhuH",
  "key10": "39QGAe9hx7jWfZb3uTh2UTZZ3T2NGESAGAC4NGwE4dHM5UVnsz3DLThVG3scAwiGPP4DYSqWF971MSAQYG689gGD",
  "key11": "5yTbWqaZVr7BgTsWBRmUGdntR74srv3EkWPG2b9EToGHV9t1gqxuYEtqv19z6DZEBYJm9M97rT23fy685oiboxNG",
  "key12": "3g6G7Dqd2oYdwxEpReD8gUsX6JcK4YsCf3vazKt5MWrg92cKDGG8AAoVY95z8yMTzfW4e4FFFbMc6XUc5T2G6rVm",
  "key13": "1fTuavUwoiCKBmqqbuFX937aQQt571CVVCEvJuKBAKGZZBz9UXpV1tSpyRBcTimmrM1XN8iGrto448qM3rASPko",
  "key14": "624aWJiQ6xnYuVV2oQHPz8TdxZ4FwedRt2pJUv3B2MDxQp3toafQHmxW6moJ6yro2kHEuop8AEynRK8WG9hFwcuS",
  "key15": "4wNFn51KyYTps3s8wNydtsgU9Ssp2KbL3SJ9w1rPK9oCKavqMAZFBLPPrN1q4KKFvuU9ytQekF7rcgLD4oX6hQpP",
  "key16": "2Gk4goARAF7gyxAHLFPJ2bfneD5qXqemwJuSZW1WWegnpzbfxPgAriUo2DbfeKafXZLFgvA4UAPiPAPZYmVzGewx",
  "key17": "5cTpZEiWhfaWCigKuEV2CdeUEuTaWGm5AgZFhXCDzKM6BvyKXxmKDVzQCG7X7AiW8P7jB4NL2NGNoFxkx9swHnQb",
  "key18": "4QjW3GvLbynWFyGGdyASnvuVLaeu87Ms2bwgmc38NDFMBCm2yv2w4ueDF2KtzQamH6HB5T9xodqiovDiZWUZvXtf",
  "key19": "3yAFPE2K9crwEPJkA4Eho1hh2gAQ1CTmpq93PZ2AzLZDLciZjQawFPztJbmrZ3iCfz2RVg19cVCWRZYwM4Xf82Q6",
  "key20": "oUdZbdE2qXXfPmhWwpUa7EuQCXWxg8dMGqTdmowb5j2AgoFV7QjDP2G1XHg2UduKdci9yMtZ4WWS7CUDHRFd2Ao",
  "key21": "2pJKCGJAGNRgYFqHLkBUV5WJQKZEjkm9kj8gb5fYThgSaxSQyysarn6KomsJpgEfUeAnArPy2kw4MkaADCHnTJ9x",
  "key22": "5rZHWmM3xj1vbHj3J58mUpjbN8LMf28J1CTqEZPEy7nECioihdvzTzpahe8o3TZtrGQQrKVK7Y7dt9vqwC2Yrtsw",
  "key23": "43pYR8DnWePRT47UMUrnC1WHP5hTizwzFfS5v5rT8qgi9pxcK44EidSZtyrsaqVz5q5Xkuk6a67xB2xfbo2iGnKs",
  "key24": "3DmHGSaeD9t4DHms13SkLt7PUD3S17DjhjZTEbQPBcRer3jtycrA8Vv3S6pRLxg15dwHMXa6aeSTHByHsEs6Zcme",
  "key25": "3cAbr8hM4JbGAaikErdxKXWyRackssREYAmXZa55zGYba9wRXKTw1YKuJg7m2eXp4bRBPEjxPiQhJCjiy1ZYBWsz",
  "key26": "5zbzed6tGEe2TRXXKyZEibUdsbjtJHiE4R8Go7TZc9ZYGZBNPfjitxZAgWqjFsKmXghsw4ciQw5kreA4v5sSA3Lz",
  "key27": "215n1ZUukZoeKx5nQE8LQqn8HSbmTNQi6WWvnqn3RSh3C6TJ5sjwdShjKQAyNcTCKnfg7WEavxfyWH51s4rBULxB",
  "key28": "3BiLcSAbsHV87GDTYoGRp7EMj6wPeAPoarmU7BqdS8Tb3dAQtrpK6oRcbxxQrQ3cE2i5YGuj1Sn9KV6W8wjqhv5K",
  "key29": "5pwXoEVMK7dtfQWDVS73yDTHNGUbJ1ufJYvt2s9dfRTAvM8r65d3b2BFUa3xx55fR6c6bkZsefcNxu8SsiSZezjG",
  "key30": "qbhDspvxw8HJsj51jBLBhbsG1qSrQnKQRefEDu5cDvqpcmgKYqcqiYHd4LKZxWSaDRn2eWjTaYtVeva1cHmG3r7",
  "key31": "cuwuMgZfcuRY5iRQLRFacXdeu4NQ3Mxf9ZbkKaAtq2eTnSzgbhgCMh2SDyRUarWgSYdzAH1Sg3E4JzeXYEH2LT7",
  "key32": "4YXUqnoPRnaNwiFCcjiCBwxNkMQtn6bv4cCjF97fnRgG3UCG3jWUrEzz18FzdXvLLH2agVVCbpRSNt6oUDj7Z8oc",
  "key33": "5uxsBFwxLmgw2JipMEZz7r4U8fvup82pjck53YjXeNWvF29vNrCy4G6uTnoHECp8Sn1YvDhvMyHbvWiGLLZLsuKr",
  "key34": "2SKv7wPC75iYoVzamGW7SVN1bqfVgbzzYmsXEXrYo4arRroHQgw8EkyHETaHbbqi9WCkjYMGE89GZwTHDb58YAop",
  "key35": "3ucyRT1htobu3aSBdsFKcZUDbYfe43YZzCVGu23ccoFjDC2o29t5wWSDbT8enE3hsNsXwbSjWUvWzTtD4NnNWHpi",
  "key36": "5agRJjTaHwTz77bWrcP4Tvd4XnK2ejqR7r5qZxFBaXpzYUFcH4i7aUcPRXvCL1EfhUY8RLhLdVs3X7HVBPE8xRzW",
  "key37": "3LAWaY8C5wmCSRvLmw5atxQYfEVJdWoS8kpvsDL2a3xaPdwxiZpT5BZYWDp37Q344JvgnfcZtqaVLjCYH8JT8iGd",
  "key38": "SzvgJYGGX2EQDaVkGhviYrD3Mu9AoAD7Mx2ixSvrXnEwpmm2AY7JMuYGkh7QSDfjzZfMU6dtosmBx8vUMavfidz",
  "key39": "3qxmtcrRz78WuDZp9s3Dp4Js1AjnHceY2Uuv1qs9GmD5M644DJ41FuFn3oXbd78KhpWJNRP4xXAEknuAfZeo9mXw",
  "key40": "582hgsDzcy9dq1foRpvqcH7SuFHeSze94VhrPYpamcfKqMxidotPcT7GbT7QLEJ2rjNkCenYLbU9t3qpUmWSGGSQ"
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
