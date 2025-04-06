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
    "3u95fUtkD7sqWpkhA8Wh5Sj722So7mr5E1JhhdcxrEgngZfsLrLXeShjboz8BfPhUmYXZUTsxcKShMUYW8KcQY2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3vJJf6idCBoMZtJRxdHgdpXjtpCK9WppSB6voEK5ivq96Xw8K5w2iHgGWjxYsZup8oGXnNXvYvHEDeJU5Z7MJW",
  "key1": "34Hk3dNoL17NA8GN2J4HwomZXFjJF9DEDQYUfyeQwE6kLwDF5zzEQ1bj4L4j8oZ9K3fvXR9xowuGLbjGXD8U8axv",
  "key2": "5zzG9xd7HhNJPCHHpMYCESF4qrALLcbWTQNvQd27xAw7kXoTUNEYycjC4nz8rPy28cpgLtqAukcQqpo3CTFvw6g4",
  "key3": "32pa3Xwbw5KfFzyG6YucenujmwanA38z5zhWXES6FHzM8B4EjjWZqJzbLVhbya5X7wPq4m3wxYKZkBkgPrdaqYoo",
  "key4": "4RgK6UhCcj4uNeCujej4pqUnXeFHuENpexSxrZwLvDbG9y6Y5133UgAwXm46upAkwukBqYt7iCpeMFa3s2ZXSVy9",
  "key5": "sgaCR68KUhUjjCg68jMt3UnV9i6C1gHWBmL35nwUMXafMx1xVJT3va98F7TMHd52NaMFQGiz9hesy5erhSXEEX4",
  "key6": "27zzJvhKzB9Gwef7kVkRKWCzvXWrUA9sQd8quhwkBCHLSScd8H8Nqx6Lrn38k92Bdsjh6eFavjfgztQZ8vVkF9u7",
  "key7": "f2G84XiJQ86EG76mNDNA4LWXXN2sXdC7S7UMsKXP82p6KTkHVjq9iJggcFHxfHbxbEbFZAS49tnh2Xso45ZPJcX",
  "key8": "646BBKhAV4n8VypmYmzexKuH1f6xAU44AwGiGJhBkzMFCMGgs8gABiH5Pd2DLFHTiW1AAgmsZ18myQY6atHLbmHB",
  "key9": "3KqSEujpoU1nXbxhLzmUbALNo86o1XoFtqTxYfoh6F9z8n3LHarVbpdognhPfS5UBJghmfurkFCwiTrLXgKeA2Hw",
  "key10": "D5EMTYV4woreu9YeuouMiMYtNjQbG1LACMUry1JVCwaR8i7SCw63ii2CjdENReHXZ5vwo9EQ5jhLD2RRZpCFrFL",
  "key11": "2JWNhqJjTnoJqgBj4acUMzL1ZSqeceU7HCm8Bu4a2EpzMuVMtTArQPdCpAoLrB3RX5q8WfZsKSf6j4g5pf5W8CGm",
  "key12": "58ZeNMNS5zGnKeg9Yi6P6KPn12UWENUuRqEF5voCtL59zcQ7vXhk6yn3M1MaAcwU1ByTadmgexa35SMaF68VH9He",
  "key13": "43XALrHd4xW1ScFmvQ39V3Nrw76VmtgyHD9Kqbzwf4kxSbaKjUSDyYyQXhpcMQUxMU2kkvbJdHeNgUvP8cYm8Yjf",
  "key14": "4C4RH4Bp2RMoLLutJarrVLQ6RP8Nx5Gyw3U4fU1QTNAXxZHMdEKymrwMETsxNvhX8mLRVU58K7RcGpXE4dTNPPqP",
  "key15": "3j14w1o2HLNVAEP5FgYDSZnDW6ra2xZeuroZVrBLmuLHyphyHwuUJgW5RDcm4J9gmG8r5mjZiYGga5tkPgJFmVBk",
  "key16": "4Q3CazReEB4x4AE45F3zUWqvABVHbWJQtvEXpfZ4oa9Ddx6Z6YZFLXM5qmE7VdMXVo8LUMVLh6V2DY3qjW1MDhuh",
  "key17": "4JtGNq7Un5ctMefCNEvAp7XYJTfHQXr22C12MpQYZifPQa9BtrfQo4p3bkiwvqTigCcueUXiXFJKcnmg67NmhN9f",
  "key18": "4JTV7j44jCqaKtaeEeQr13aSPtidTwLrqFfjsWd4wpYxxorDBuCcmr2s6tsiJmUynah3XvXebSGoZY5MaaU5seho",
  "key19": "2jjMcKWMuZVNNnNd3Jr1THETsubRVDuRpW3mHbbCJQhprLyy9TZXtgDUgzepfyrv2D5SjAwY3K132ZR22wL4Jo72",
  "key20": "57ho6LrvettZJ451PsWvncJsfPzaa8URqRdASkAvpoqMjiRtK6kuNX8FoXgdDXS11PTXkGWA91TwaBzVEvcToKiL",
  "key21": "2XbdHwuhQUeCTmDegpNE3d45B76f1SQSrYYbZQSSRTFxLj9CELFtKRhwtqB9RvcW6PoJKzVjmwpQ9a6YgF4iBnEz",
  "key22": "pGTDgZhWupetFfkoKWMx79XkBnwzwSetKQb7Fn9KmGeqW4dKii6zmSC82T7axhYWE87JR4xToxprxTgTcU5vmTf",
  "key23": "9edpVG9wVer9SNKYtBqKihum2ZWjr46S9WTJwHvPCxwe1PzmqeJ2PgvfBeHGGqxFpHhhAwyxDekQ32Jz5U3LDHA",
  "key24": "4AZpoSxL7fgNP3T9MsgnxcaDdcQ1PtRbyRGXfuaBbFvV7vATs8yfX3Z37wLPj3krzbQtms35Ro6mFhXGtXXRvcTn",
  "key25": "625CJDw9gvX5nf1Y7z52ZVe78jcDjv1322YuAACSZkqBkFRie7rSxJV1xSvhnXc24zmc8SbWaYgto2b6jHFmkdha",
  "key26": "3L8kUtD2v7qfiJyZ4Anq7skygELx9gt7s8PiGAb9MqcW8JZgit5jBZxiM1mvScWBW2cwRUPpU1PUo5Hom7tLPxmH",
  "key27": "ceCxZLn5iimZtZ3hVAnUtUUFTJCqK4UMcrgk2rZQjq81FdqtnY74WeB88YSJYRvVUcoKJAFgiYZq3BtH8VQkvBB",
  "key28": "5DJxMiPNox6TPp3JbkAumJktAVWY8nFKvZbmrmKnpqULiQndLY7QvcsWSfm4xvSd75KC8CZiiQWptPh6Lswqqo3L",
  "key29": "4f2TcMjz7b9HZGrVmVRRwvtybAgCJ5xFXJo6kQ4J7G7SuP9rfKN2nxsdbXa17nvd7yfDdWxyZAawtjjwBaExbpMG",
  "key30": "3B3cStVDk9HJRgoM73V2tWHCVza9DRVvcJx4mDoBhkRfd7SMzfyaeZdWimZ3Vy1MYMox1UA9ak4EobMAnBQesC4t",
  "key31": "GdU9iardTVfap13ViU9LufmTRsp1rFcVD9YtisqySjfLGKZMzHnsCrQQjZ9vDS2my6RdYF6Jo1U3L5SLxSNJm4W",
  "key32": "LgmaPT8rUKTtj572Fb5KbvGK7GFBRq9HNjwRZQVdDvAeXzFGSod1WYRsCFyqjpKFwtyMRwZSk78ZWjoes9zUfQ2",
  "key33": "2SMU5tjVkPKtubPSvsaru4DGF4rNFGB4UvPfmftxjAYo7Ltke6bMdVCQBKhSMug6Ua5yUtGZbsAuEPoyr2z8ZStG",
  "key34": "2yHxS8zga6xVBycyg9iCgqhZKfJPWAq3RsAWV242YeEvmAsRsg846RuxnN87gKPGdNB1VSoDoQJM4QqZjesScCYL",
  "key35": "5fFYhW6cgx8ykaa6U4YAps67wHxBLB5aCUUZ3V2oahdn76zc2kLhEPn42JnLC8nyUSA6cMbKCCFi6Y1fCUvFjSg1",
  "key36": "2yfwLQK5Xc2vMBFUee5W1AZzb2F8BhwdffHsjf7Tueeq3CWRijQyifEiGFqYTzyZwdunquNKCWy7PRrvZ9Haiwr7"
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
