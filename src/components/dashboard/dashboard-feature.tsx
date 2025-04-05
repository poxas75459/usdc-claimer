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
    "4XMveoPPyZqRdUUh7opUK5ACQuBCLLvq531qjmUzpf4nSuQ7fuGqhd9rcPMyMTamwhTzTJ7QdN9Y6UQSkdUWA9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuBVDr8onyYCQuNfswqGWtUV3FL9woGY16Lxt7uRrzxu1ngWkipfLxewKt9QHWGRzxeM5HSpZgFBv1RfiC5iSfv",
  "key1": "5sA9yNXReoYsd9X2uYBdWfPv5PmMWyvyXfG2sr1UC2fq4bFtWFEn6nrnDXkcrg665zYEGaqHzZB63GxzyfHxJcLQ",
  "key2": "63QqCVMKULU3VycU1ViV9fwc2N4qyWxEStdNcVRkKwxoNt5pWSpvK8wbkBYCqjH4eLHPdVoPWH7oFMnuqLNxszQv",
  "key3": "2LzNMxsGVFUo3oJTRdqG3Srr6F9DJBttiNXLEjqPX5pTC3XeidkhjRd7ApTrqLsoyDPAhq7UMPbuTiDqxZ8ZWVCH",
  "key4": "5zEiTvrYBVi1SdxP2iCefBwU2ANPayiRrGYJtS3EmwPaX9JviozRwjSRTtnKSqJRtLjXqRUUseMeBFHNSByTJ1zi",
  "key5": "4rNm9uZe7TLzrBbaFe4Mc5HcAk1vHp9vqLgxfhKiNRhRKYCgwauoVbxaRmfPkw8FZnE5s9w2STxuWZRzNYjugtf1",
  "key6": "35CnbXeN8QVkABHfvt8NGkXGFHJrBc9XzhnMBJ3xEeDbuFvvfyXboHA6Pzvm5Xs2tbybrV28pogTGR2WUKaha3VA",
  "key7": "4cAwcm6xZ3eBQYbycYrHZSd2NsfBgJ1wqG2HjPgpBVDYy5iGde6V3ZeDftf9C4rEjstPAga3DvpG2QschGhEa2nL",
  "key8": "21th7FFbeqYvJg3c3pZbTiuwjeeJU6ftKhrN1rTWHau5bD7bu7vAq8Zw1FVgHyyMjPkzTfvoS7rPmWwEeNakC3XM",
  "key9": "2iR4SAzvr1LWEYbz14BZ12AS2cJPehzyXE884Kqmb16GyL8t2wxFws7UZTZp9whXgJrKtFdadVthLNbkg7Bu321j",
  "key10": "4odwvQWaRhhnNG84xo2eRMMJmCuPskFw1JukoCASCWChZ5CQgGB1HtKjcyZ9uHyNB3Vdec1icEtdKNFaEjS8a7VU",
  "key11": "61i1hrm4o8iuZdSEw3RQsuRrDirsm68RbdjCKjYaX5ZccQtUVNnAevsN2NcUFSzmAcTnHr1nFtxz5mp9sy1jDrDJ",
  "key12": "4CEmvjqcErZ7gs9SEczjk2g4dSYJ6tBB3jig3rSXx9NFiz7ALheKYs2vtfMzNU4R4yhVRbwpoXopHi9C4sXpUGJT",
  "key13": "5jgAdPDoFnTcNeWhYi8d4oLNH3LL3crvMKMZ2X2hADJcayxf3HhgkWaGYAS9LqT7AsRWnjq2jgae1K5giP8QU8XY",
  "key14": "2AJik8CAMZnjWympGx2FbyLqarb29kkqnX3DsNUM67viazcuNJaKWe9EGuTNh8opFvvpMRNk1Ui3grNAaXyxhpaB",
  "key15": "2PC4u2hRD5kSwrxo9sxyGCBPB8ofViPWe2ZxJ7mdrnBTjk63eZm9J2hJh8yK3ULTLmMmcnsqh5CLBSGBb8AiTtro",
  "key16": "2D1M3HNuD2D3giNXRW7E9q7yDL8ejHjMexrZv2ikjdju8mjxAEexc7ag2kZD7Mj3NkFnVBLzuPq615sAx6HPcGWU",
  "key17": "5r7atNmm1gdsetCivcZdtkWmt5dnG1vHGFCHAfTBytDGSwMo4XRx6TgbcvoEMpQqZaod5GW2KcKEpmaneUpRkRPT",
  "key18": "2u76fNfzRUcXcSz3mR3d9FTE2kmW1Kvij8uqXc4sDP9jxJXHUab6nnCgXoVuhgwwoEUjKCBxsLnue497fewazyDf",
  "key19": "3tCsU1herCDQ48dXC6yUn291YAaTgXydtyAbH2kiwmq9RmTFq4RwXuxFZotnkkUM65KQMAd4uPQiovQPPdpVE58Y",
  "key20": "3CQEiRExM8fpndvmg5MpaeAGWRqnwMJc6ZoBKsSfe5wyGRehoHbbXL1HteoWP3mrT29Zih6DkbnoM36ki5D2Q8p5",
  "key21": "2ZeXQfkFaSccLVh2CufrGFLgJmnZL3GXEk1NsN7fpjQ1JmCXc9KDpZPocnNRsbFrC6gL4Hk9Xp4G4i7o65NuiJFr",
  "key22": "55wre5sq3UemETcG9deFGMGFKzn5PKwRiBdxQJLLMLuRd21sijPAs1MMPyFpn9YHexuNi7STsddcrDJqSDofucVr",
  "key23": "2kjgeKRRtjF4HhDxYg2RkyWPLkwFMnms52AU1ZApSR51aJt3GREWmVK8oZnXcL7PmnAFnW9BgDrtubVVn1aBg3WP",
  "key24": "3qPasHcDCqcSodsJ6GJRivLDcTAqxPn63AJ8v4FbC3snvx4XuW5ftfE7bARciFwMpJUEpPMUqP3S5oz5rjU62JTD",
  "key25": "jMWJEKqZYziNRtKkexE89LF5h4abi8QYC7i3yLXhyC8UvNq3tNQyYm6PsR1d92kDSfFn9cojzYx3oD62qQJ4Rv2",
  "key26": "64g69YthR8Vh5RD5QVJB1MQapuBRo9RfeysHGKF4b4enwJbUscRtfNH5UQNeh6NoFxZUmoJ8f6NumyskvK6RL5FK",
  "key27": "4b68ay5zDhfy8nUysniY7sSBpcu4k6gNGbMCRTWw41X2U9Gufh9dbdLjJXVP26XSmdKeVGn5adF9P3HF89FDpdkN",
  "key28": "45ACY8EmAXuUzssV8BoFSDJbJvwVZcq1hj46j4a4qyXCST8R3j5SMWZe3WTDXDkADMxJuSk8yoATr1yJPPEAmbj5",
  "key29": "4aU2EZ92J8qDsLadZc4ND15M7HwpRFkx8en9GWNuKuTSguB7z4umpKs2F1d2vwyFRcybtHa1e8gv9fmFhth5vhi7",
  "key30": "4AfTTdwGZ2sFp5PMPmAL1Y6tbxZn5yk18qJVoPp1o3URobkjBkmxcR4WXqWbWf2RL5ghg7fC3tWKEwpy6t3Wtiuw",
  "key31": "35ShWptfDensy39R2YrQVsb7nkM3CVB52ijCYwSVpRWDofUZFgLogcnqg6ap7sgxRV92dLgFThG46y1dv4a3FoLx",
  "key32": "5ZzFtwB5p8hmGcS1X8ewCDeGnbefdxSsP2JBCXumbLUbxzMSvARa7Gh4QS4UZa3Z786iyvc3GZBMEqLezLf9xZAz",
  "key33": "2VKx4f1EokLtdayrTeZjVrg7gmNfoyH6G4GhBEAx2DYXd1RJ4rSNYwUhuLRmHLAgiirmMY5L6z3DYzKntVWQk9Ds",
  "key34": "ttYiVUwg5RGEBJt72ELqK3XgMTjCYTkvQH5gPQNgBnUVFruVbgTdq2A9j4MMYC7L6YbrZzNQerEcTZXnwQ18Su3",
  "key35": "5Z1QXQecPvksnbBrUHtkH5zjF8k8YceYs69EYz4i6WEoK8xyuJsxvtxzMuJpkPLMbiXNtX4G2466ZCP34zifGHWa",
  "key36": "CjtA3m18K7U5igCtGHvftyYc8HpoZzBCQBWFo6AaREXPxTeJy4qdewspFidbL9qT9BWq3bHFk49iocJDXfazjUe",
  "key37": "32EaDnnXicfaZZh9sMzs374vk87u5Rxoqzt5HkmZPiXhnvJSv6Pk2wSQgzwZko9W7gd61DEDKtVtVSnzNiQdhYhQ",
  "key38": "3JLT1yCKPaKdMbsGLM9H9YMTJtkpJsQjg5LTtMKj2JZhTAroQKsdZBEvB9TCTs3YNgfm7g8bPmT5VTmNncU5bmEg",
  "key39": "2AYVoAtLANFxD6YSFqbaj7bTUT1WxY1Z1wLaFC1x9KiJm6jyjq2NrzfxyCijm4zKB9Xf6atsg1VBviMCv8ErpAPk",
  "key40": "3XdaStS2bRW8zGqen7sHmxRyMSxu2UpEqrFzTZYzwH3vFqLo9g267JMxTohdTxKh6posx6QVJVMYgW3aT1TRC8Qb",
  "key41": "y5JD4FukfMfb4aXRAZWrLoDL9yLkBVrK3fbYyKo6HQpaV23FLX8epAc7FLP3cWWFaQwKuoYHPCtitMeb6rwUwoW",
  "key42": "kCGkqnruoEEt46yoSfpPxqVCkj8RnLPGoJMyx5Cu4CSgCzf4374t7zemVhmymjakHbjtXz9C2e8BAeqh6acsqEm",
  "key43": "2dJe4eABjJVZ9F9aQtpF7ZQXUDgqsUQETzNmSkmXhaubbqQkqp3EQTHwhwLZgjrVJqMisF1J3DAZfefAZ8xmxjbF"
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
