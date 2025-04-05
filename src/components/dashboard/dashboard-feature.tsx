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
    "BAsXtsUiiD3ZZcnxwaDPg1vW6o9TGec3LGf3ZsSujzwQhGboe2b7Bdsedj5D8AZMcReZt25S2UFabq4AFEa7XgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bH9dRc7tnd4BYaL7mE1UrhsGZwsxCfXaVo5Ctm5CPZxG242hcLWibgV2LiYWBbHdvSHc3PqueR8w9Xfw8tnZLt3",
  "key1": "4mzutLzMdSaNkshWdr6WTTVGUMhv4vjxpgo5qTxpDyvLYjW1QmqKzpTWQA9JT8iHSJtrwRxga4MZc9UkMPd5bsmk",
  "key2": "4BoQ8A6R7ckpB1ZC9KYXTrLCe3F88oGBemSvrPXJWBGrL98z8gqstwZs45YmtgeHZAGXBznw82kGwSu2ZdPRwfBW",
  "key3": "5DeW3m6GKvMMFMybPPTuhD7QgqKdNSqh4V8YMTGZ3wwgznSzD83dzkQXWZb5fCzBazomahA5XYCaaJXktgHiHxvB",
  "key4": "42NmVp6ox5BVeqnuWRjkYBwFWk858LSc97dqknKxzJRCJjnDy3Q1YcqhDhUFnbAx4zAxygfNVJmNisPo9q44N1mh",
  "key5": "4TKiuPjyudBUa6hMjGPMbs2aFm54g8SxfbnJZNNTzadAfF3ASMi1DV79VYKix1imQTPJFyidsV3jDEppWGQT8eDm",
  "key6": "5q3QH5khz1HHwfPr8GXf7weqEVhsPWm8JpHSXDsLozAjkHW3mYnMVkxiSUvwNaZWveNwws8jhYRhJnWC3hw6UUpA",
  "key7": "3AddqHJy3nmQkb2PWN1k3HTYgCf5Xgs4G6PpBg8p9U27v7FsHXBAUWdKkPWoWMPFvHnCm58Vc2SkKXbWNjEFqw9e",
  "key8": "4aKRU6CuTW2GzJoHSqM4H9JsKoRcJ9cYFULRHr4CYmF53f3i1mbeUwAg4CLba3uXMGzgFjThdTF2RfdgvzgHHGe",
  "key9": "CApuqofaJshLpjkGXZqhMjYGbCD71eWdmR78yuwhzrfHwB5aUMpQpt35hRxYqRntmv2SWzu65vePbrmhTrDToFh",
  "key10": "48ig4xtw4qRCsWkASBRbTxYqWY2WjCrgZqwnQkBbSoqcyg7R9sj92zoVh5EQc9i3x1546sG2K6qsFGARgqfFTm1E",
  "key11": "4f3AmEz6VDgGnKHnNYTTiXJ7FF1nkXNdEaRTcQtqEp3fGGi94jTR1BKwfYwh93Ae29vy32rt7AocsXANCHxacyhs",
  "key12": "2U1fFe7vGWzPxeHtA4Dw9RqcZDXrDg4r9Y9EgmoS8FCs29qFXdKdMFKdmTMsNHgM5TE7HcpcfUVyATAm2hsRRPSZ",
  "key13": "U89otZLVqjsa62TitBWhm6wNaSxCwKo9zRfmYx3fL4NXhCjrUTskdT1894Qtsky4uWCRNb2k4wBfzHKm6rQDfXc",
  "key14": "2UcYaiTRtFS4RZytgZ1dTCAAcc65Lsrkp3oXB6RihWZurm47DP4WsRtXhiMYP4AcrZaqfo5JPgp8ibevC2V3QNwQ",
  "key15": "57fVaqFtLJSXaiEYmDfgw9aXEMhcAf5wm3LfriRSJ5JDF7CMW8a9o5TWVPqFNZ9uksB7ZNAPriQnbmarqUDvHzF4",
  "key16": "2uqA2y1hVMvdppqdApSVfceVcHynreTjwjYLMsEYybD5mDrmjHu36Cst9GyUyLd1EmaoATWMSjb61g5obnF6Nm1w",
  "key17": "4vasWcUgzxrEaqzgfJgCkLJ6uk3e22535oQegVE7yJ2Zj7jPUb1SFwWUvgvRSthoSrZ9jwTxkN9vzmUPaKiijrBK",
  "key18": "5dUxFKPjsBFxkFMpSbVTyHB7nks7ifSq8mfXuMmuNk4h2TsF2U495E1X1tDCLHkooxNitnwUzuyGBarez6Jp1U6B",
  "key19": "2LHeoViwVXBKrgrhQJbV4ezoDJ7uUvyweVD4KrK2a7ePujNfBGs5D4vD49rmUEkYFfAaGE7TM2iH8KnwQreznTgp",
  "key20": "6HSXRBVWgBdD9NV1Z7zEzU2zJYS5GSBkjQ6DzPxRjK6LioxUcZsENYXwyhiGdQSXqNNbws11gxq496tUaBkDuKJ",
  "key21": "HxQQ3GPveEqra9LbkJqLvzJDNJP8H6xjWhktoi9kjR5KVaQYhZzjUT7gRfJyhrUbTATNQq6nEJqCWMyPz1J47Y7",
  "key22": "2GuFi2AKoue82zPpzSiNsBMBN4uAd8pGhBa4V3FaaZmdhZW9835g6AxBFymQS6RbmNvK3KaCTq69tVEq8rtdekEH",
  "key23": "oNzxf9Mz6aYHmEMLHourD5HujtvWTYPyWaTDYCy8HzbtH9cM9TfsdFBiMai5fsgxuepgnXAeKMNyNB8A2HAzDXh",
  "key24": "5FxBG2uoiV42Yio54S3gPeSZBvBTQx8MzgNrGiuPTKXj3JtJPEH6FNFdPyqyVmjLdYAXuzAoS3zigHjHQSBs3qg",
  "key25": "UNdAC5bsDwsGpPb1qnUi12pJy71TN8NVrBmfwbXaBodZNA29FKNswWF4sRd8r6fSDkWTZ7j8vPek4mrowQsvyh7",
  "key26": "4REWp7ZkK88nGHxFeP7p5jq8qigHU5RDqKTzsW7TZ3eQ6Xm3P2C9rbpBEcmrKbGxxp5b8y2burFPXUPrg1JHMPX6",
  "key27": "5MH2EsM6bi7RgsHSEPs7TQT637uGdKDWmYYo6PHRHABH4DVbUtnenwUuRPYKB3mE4vPJokPsqSBD29dVoqmgJ7V3",
  "key28": "3M4JHCJEZUfeQrcxbxNauFycuxQn7WxW68X7rSSgELK3eTzBQo5fXu7JDSgpC2C2QfNCieQMvBBMXKbP5mxWjdYK",
  "key29": "5FHmQQACp94FUzUYKtWudk6c4b9ckfeD9Cq48rwok44cfDn3VJDAzH1yqFeXDzbcYksHoNsSbH4GHRMrz38MbRNZ",
  "key30": "26fXgWWBcsTe1nMkRp8vgCS8LcC9W99BwwAj17oVJKJdxGEg9EkLG543iYxW6o5tGkHpYUJSmkhKBUCWVUqZWnKT",
  "key31": "4jRa555H3oiudc72nXrcYciz64C2K9tvDKGs1t9CPK2UFn5SZA1VQMPHQvNL9Bf4pU5eKwgyYJNKx1obdHHTnZ5a",
  "key32": "5nxCSWk6k3jAyJTS8ycDqN9g3pCDvpR3cppdmnHAVvNZg2hyssEpFoVcik44F23NTiDngk9xLM7oY72bUTZCQcAX"
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
