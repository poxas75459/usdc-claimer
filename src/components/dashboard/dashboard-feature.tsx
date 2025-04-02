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
    "5jYkBLjL9EXo6YePKerXRKfHSvxneDtg7S4QH823BEVzUGkcaC4pRcZe7u6K6m34YZbbXpXRAR45FPZGiSX1M9FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zE1XuSy1DwNZcngsVqujVsBzUCB2tRC9SHMCTHo4tiLv52h9miJ6Dw5nACU6dNoVSikvRa9G3fxZjsiEb32g7xe",
  "key1": "3Mvdx7KGu4kJsgsqM1gC9KaYsh43cqrhYaS9YWRZkp3v6mZVrHjoJePiqenygGWzD7nWzYDGMwND9C283CDWNNTX",
  "key2": "5zufB6rsZgTrmd3wpdxGSkBpL6HdkXAoek1KzYrRi2fkKptkj5My8v4s9Gkk6p3AoLoNEEFqSzLUtjCj5n1TeeWj",
  "key3": "2GZVFj9zmrtSjHgjhh57cx5pbvYc2HYGWrigjgJA7bst5UvH7SUG62CREKBATAus81kKQLBW2nYCREPDpKmo7UE2",
  "key4": "2XW62FvB4itLya3VCjduzb55TMeeA1KLsQ5NUyZRRTv41g33ykMWs9MLPN2CEZjnGWgPTog2zZfYVZSro3kJ5kZM",
  "key5": "55c7pqRg1Z4rLBoTtTLxQaRGtqtMEMFrPZNTmYNHon6qApY2nsL7oAhtrDBgxnt7D9JeaGKHK3NbLrFEvUGHLxLW",
  "key6": "2X15YPaZMeLmcHwPCj8tEf3Q9QNgzSYNuDAeTYiVKFh2hfkLdMz1KL6o6t3ESDbXvnWMcnZzgSdTedHpyp29dofR",
  "key7": "LE776uxLKGi5EHangaTk52vQkJX1SC3US2L89bR4UGYi1VmNaMJLUv7QDLFdg7yLGmAUHaTtUHessX9MEgiEvZZ",
  "key8": "3kkRTPwapcDr6ZmAzoyP2ppVBJPKC9j3S1PMtywvCCm8pBoLQiKwcmHKHGQKBbNLbYNrLUBh24FxZJpfwNtRYc4F",
  "key9": "58C9cG8YUwEtrG6zKcueJkX1TrvVM9Z1jmvuv4QgmbVgi3vuiHMDQUvfQ1c7YzDLUdMeNDPWwgFmmBYgbLR4HXv2",
  "key10": "4NCU2Et6DwmqyVrfmS7h73vsSF91TboVSd1QgvWeX6dDVdaVGhXwKPtFbjSS8GsfAbD1Y2ofQmRgoe9TFTVXpUzs",
  "key11": "5ELPQevppHa6iVRtM16yD1QnwnCxqZqLBbS62VPwfzGQKbYwCBqNLc5cTzupjJgcyokRpiftzeewFDmsBKSSvMnn",
  "key12": "oxbrjPVuwuvB8ppH1fBU4CkB3TjDPAARx1dmbuky3EhYoSWhHkVeie2o2DvBju1cVmnFYc7fUzSN8jiKfL2y4Ux",
  "key13": "22b3W4ZtvZboo2Jh1A7pdngP2jKcdRP5JwJU2ZrUoxqm5hh7P3kUhkDyPyz5a37YtSZCSG3PotnohVJQPYVXqPjP",
  "key14": "33QpRmMRdcXa4ejiKwQ42B99WSMkGWStsdVikhG5JbjnXQLLxoSf1skxmQNdvnWM2jjUgpjMgbxKhsUcMCpTWLEG",
  "key15": "5sENdoGPGqrwsdDFs2msLvfo9xbuscGzxynUtDHgc6D2rr3UQV5bZes2ZmBbkp6jeKHgTBEed1KfEdZGmEXt5Hx",
  "key16": "3KZXxSCYjFwHVt4FExyWqxxRkRcAotWZ1KSp4161aCTHtUGHMdWxVWDUUtvBP5TZAzqZTGKAM5gtom1ssND4vZuL",
  "key17": "22irMnKSL6Mnb39hhYHMJdNnAvrBwDSjGqr5jAaYs3JKiUwTKjnVZsLM82AgMX1ZPE76gCvAunDLk5SR1Dw3yq7r",
  "key18": "vEhxPcHbsXGPeH7P4niW9pJVZN6X78i3DSGUS6wAoUq7ivjQ1SdZ4DxfdCtvfhL4edibQXzdrizsxo5oKq6BbSd",
  "key19": "2FkdyUhZjfQNHEjZ814mjHKSSb1wh7rt1CcMzZbdQc3jTNu1SSZ3aBgWuXfjzjePUSPsPxm4UjGiGQVqr2cJN1GR",
  "key20": "4MLoDRAu36odJp46RWALFjVnKPG7pjo85pfisBCz8BMaLmeK7pUTCvyPcnVTxup6Fc5ghTp8VfW2qfDe8tCQhxvt",
  "key21": "4yfyqVbG7TXnHEhWQfxBr6MVNB5jPDFeNbazLMv7yYRWAHMJ5ALxoXRBsnsJ72FHTjdPnZxcZLwnjZWeS3eWrbGJ",
  "key22": "5AT5j44Gi1ZUuv8yuHczkLdhkg4ARCGiw5fXqxNoy3aVx9CniWvkBqW4rzMRCNU1gR4ggodujy34MpJGJvd76Pbw",
  "key23": "4SpyfRkocgfv2HAuxLrmK66D4vE97H6FGhro9HsB43p9w3NhhN8xXSHiSkMwjorrKnNtRaEeSWFyvEKX5UFHnrfj",
  "key24": "3FvNpHdD75HdcwJTUzTeBmuzKzd7shy6mVXP13BB8ASWzQuopAsFmgnySiJ7tSPd67PNathQozshUxGG2Shbewz",
  "key25": "4cS9KSbtPDYP43gig3yMzSLm5rarLSvJZoGaqyiLe8zvRVQMnE3QCT7WqTEEGLbjHHSYmoSwi2gqBg4bjw2FN9j7",
  "key26": "56r3aQqZqY2n793KNYsSGGA77hrCHy9LgCaJ8S3ZRw5yt8FxCzc7q1GRtvkcWJuNM1wVjo28U2uq3rvE2YawVmAS",
  "key27": "4gZnngSubAoi3ZLdeNNQ9ftpCQAx7hVUjgprM3X5PEzPCY4LjT9ej8SMJ6bgpdhh63eqF7M5qCa4NjnrLAgixL1t",
  "key28": "5zDZSJKLavqgJYXAJZ4Fyb4eR557DNyS28W4ZWPCdtTswPmuGK1g6PJFNRGACF7G8b5RT2okH8L8GUsJfZNvHbPw",
  "key29": "4v21RduFYwwWC631ZrYdoFqA1CG7bXAXnAmNPsbvoiWYpfa8ZQ7mz21LMDr7T7TupUSR8mhXSmYK9vDekhw3q3dR",
  "key30": "eMNCpCKxHK2r4Ngdn4oaPzW3syJVPFDquzc2uCZt1drmhboHJbnzv843EKEiPsFKYREaawnNFA8QNFUWkv4Qos7",
  "key31": "5cLMVMAM7ryz3X8pagAzbM7KPKvh4dse1qAHvjaVDaKqJPxZF8hsK6akmT9DzZQz4sA2gDuoH6SWZbVDhbgqNhk7",
  "key32": "5nQ1Yq6cvibQPp3UpsZ2YG9s9ifdGV19FodiuKXGkoPeEAqCPZFMQy3u6VDhaQseXds3kPM689TnaWHpBbUqdMaK",
  "key33": "5YxQ4cqeVSTfDwhMqQ2V2SGNrAtv3vVz7vZhfGHJyTHnBmdpM7WoWkAwLBPK3gZ4g3E2f34LH9Djm7z8j5jWFSZw",
  "key34": "4kSctt655q5fc3yM3cWzRTFqqibdvXpSkYLHmAjmnYtGopnWtBkxzNkFFYK74cCMf3FNicx3UGL1BC6L3muFCfvn",
  "key35": "3dmHaLJ1mFYiR6Jn3F17aS8DzE3pXQwSQLnNWS6kgVy96ihgJvyYPJL2yYkpm2CvjAPYGa5JZxcUt9kadksYuHnu",
  "key36": "2w9Ks7Qx7sw8XFx3wG1g4MDRRfrFUgpyGKYVaUHNAucftoSfd6wJ6XzwgTK8htqcBNyKZRRrQ9RdSV5SpKhQwzeo",
  "key37": "41TVXPam7E6XYKk6Q6CwY3HSAUnYhFEszSnFB3SjjxXW4kEs5T7BF2Sbeaiwhm6N2RTdkd74EpoRbhAF6RvNTJPZ",
  "key38": "2ugQUPm2dDUB2Hou5R5UcwZsd5aHAngMMrvrTcTU7TsAh7kuSM4pSZpC9se12y71ppjj5aZMsr5Jcn2TXtmsuQHR",
  "key39": "2ihcxZnyNK5XxFvm2YJKRT2cZw2c9BxNYnjiAaZ3J3bQZGnWnEe7kgRSaiC9Hx3zVaYXde2NTkdbkyXKQr8Pu7MF",
  "key40": "2bvJ2re86oWMB2d3KJjGCghbqNSHXsaGzTuHJhA5eS3PAKogxC39nnTy5RTUZ8DW96KNz3XaiUpeB7VopkKt3kHg",
  "key41": "3eNMdLXQpkWNuhQanae3nUkVC8GiY6Re7g14kV312beaGcX9nXN5cCqM3aBGnhydYv9PLaZshTV9Q7njkwc4JbN7",
  "key42": "3dLUQ3qxoYBKD71myxWG4YVnKuqB3duHm5zf79ff8xcsXVpkS1B9vYviRuSfDnANgxqzarNEisTxkanqQwd3CxU5",
  "key43": "3DMdtbXFrEyLY6WD3KSDBieiV2o5SM6uEi7CNTbxbdHwnxEuHAH9gD4TPprQzqgZZR91xM1RVhZufWegPvw8D12s",
  "key44": "X71MHeTuHBDcjfaYkHxNnQQXxjPLhcCkQ9cKktU8FZNgeaMgTuEx7Tz4qXnohAioreeJeec6jurSvS5PyRZrPgq"
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
