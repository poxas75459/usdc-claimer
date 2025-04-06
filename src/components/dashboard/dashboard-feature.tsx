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
    "38HVqg3UN46XWc6m6umg1SPVrU6zpXRefw8HDHxzt1w3bSjAgaS8rWSJEnjxKVsFjLwXAD3re9a3ekAuNJGGmyfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsYP6PVahpitUM72b1kw2Lf8BbhYzsMWy4NWPPcCDhK1ZX8rZtcHeYopYvMJmvRi94WnjkeHy2AYziDgJiH6o1v",
  "key1": "23VbTsdeBj7QrdLuFEDcpKhZdN6aUCN6czSizgGazeargtJvpqRGLBYsPGLpPoahLGE59DFqGkSveH4b2tRCQHoq",
  "key2": "5w1BNLhGhy1EuufJ8q6upBZ3bXfYEHikzN1hVQQ4ukuVc3f3qUuW6FBYX8Lg1aeUyZcvbagw6ZoDVhTJwezprt5a",
  "key3": "2WHaYCsGXhjxnyycuDPDboBFW9TSwQqu9Khi6jU2M8atqj918EiKsjCUb9b7GqGDZ6JEgR51v6ivZchoybQgxcYf",
  "key4": "5Kuvn5kx2ZzshMy8BaNxskMTqhHzuCu4YnKxec2MZUpiuAqRqtCP9sCDamLYVM9WxZEjc5Rce57o1mPVPrTKn29s",
  "key5": "5HbfSHfQnmsbcHFGnPGaH2ZzN2uvXKJSzrC36b7Ryx4hghrJqAGuLmo5P9qsntfmmaPcJBVWLmDPKWxRq7y69RDw",
  "key6": "3ezYRCtfDduMnJe9n6xBTJT6NuTcBbpKc5hw74FTr5Ckq1thMv5Qvp2rbTMJg4DhSxLvnu1YeP7mxr1FRocJPg5n",
  "key7": "3f9whpGzPDLeTHmx1j6xBdUfQPtUDkCP9zTqHq8DzCQjnaHTaDRP7J8c7nFK7n8X3x1SKrt11FKWvU2yxZWiXtx7",
  "key8": "5FJdQbQbYooLRr7UqnpiFpS8XKoi4KjvszqReGizBUrXYgqW5q6aC6AqhszXpPT2iVCfYtVduyhN77BtbcHS1DM6",
  "key9": "zWo5RhRZjuyTxHoN8B5L2SjSYpTARd1ZaAq8JjHPoFE2SnBiSzZEtmpqrPGGqfr2LD7R8mKY9RX2NTz6arm3cQj",
  "key10": "23NNz8MvrU26haY2XtfQMz7qSt5RGJawVnQZiNBECi4YGq2HD4CBQJvhpcYuwQiv13R7hgDeuEwUEee9gPXrynig",
  "key11": "2Cq5bBU8Fo83k47kuWy9wj2XBEfL9A9aJSSkXvQeeubhW96gNSBBRtNEx3guDumnqyk3yGK6fGBjNMFWgcs6GhYS",
  "key12": "5JiaV1h32SBoys5eN7bSSc7PVuc3ue4JsqZfprVquGrZWasNMTUW1ckoJpNacDjkkAHBGMNpuJo7tDkrKaj3rDAJ",
  "key13": "39zVhK8wwjhYVCeuXWfDXvJ5QDeec2ozHp653uuALiV2ymyzhaTgi2a9fsi6WtnqCLqgbfaAjdeXwZGmaF2ZdfQF",
  "key14": "35Rn8BbYszEG8671YupPdUPkignu1Vh6nd9dcxs4UrHuxzYaLTa6osmuX1rPezw2PakLMeERJkR8tkkZteBDmqud",
  "key15": "32TsRSEReAjUB5n1bAXiMQBzzQxaL5f3JQMDD7pfhgsDmPat6GcdAHantqQa1xdQ1GAHNDDxeGDTbzMAzANwDSr",
  "key16": "3RFNF7ziqqSxkv6u4PuaKuRmG39QLgDu7cwak9a7y9SHsoFFYDWPayiKfomh2ZQtzGCjyb1gZFWp2vfm5z6Lt2wB",
  "key17": "3hEGgMDvLVHZ6CxwtnxLPU3RKNDwZi5U97KXiQ6ULqmvsKgJ8d7odUo5hTsMAbeU5bnBiewZkRgUjnFrFkaruyw2",
  "key18": "4DNsR6enAT68vdUCyqELXTjzM6K8Q9Cg4cUxBUHdBW8aAYBSZoftPrYZB7JZNwK5jj3MqQQUoZ4HKYthzj5mxiJ9",
  "key19": "3TveAC8zEkBrRvgBiSTWXbFcC1Q17UWakSTTfRoZ7UmvwyUmY3VRbRtCApiPUFj3eMorKRKpU1NjLgF7uxhRAttC",
  "key20": "3GxNuNYCszf9MCmw37jHtsebuF6dWq2kK2P3H4KHTcjJGghmUo2axHPN2y6aNysrpZgZNHzjKRyumWqTo2fbxwjC",
  "key21": "2rZ2KhWcJXnTyaPwABesaQGA17XPMTHE1hcBta5b5Zezzp4FT9dZo6jtePJCFb6rR9iCx7Fng2CNnLyMm9VDc8v7",
  "key22": "3HJbzAhWQxDGJgMxJszmYD6VkywH4MLmUFvVhWQFXWapHZF8bYeXULjWE7aBWjbErVzcvKifzac5p2YcRJyTegCr",
  "key23": "2qzM6QbYZaWxMkBhsYd4dwe7Hez5TpJrGfQdNPKfGA6E1ohjGvbm431CiwMAmNxghBR9dy92wtDoz8wh3RxUCkS9",
  "key24": "2z2hLtpi2iVfRUT8mQAjNuPpVs6zEpsk7JPNwZV6uTY3z49jtusaaEtzfoSJ7eWQXBCiMqXX8ouiGWEntjrTMzNz",
  "key25": "628bE2u2ELXVDKjwBMMKUi9G9cJF6DWtE6RepVNKN71EWrJU2wGqe963rjmPMGhvppWph6p1N2A6DU8SPB4LHNo8",
  "key26": "5uRzxQnWEFDzhEs3o9an8KqURgBj4KtpfvhVVu2HUGhi99rQxtCZEa6Avt8Py1vjVnPkr5MEPYVVocBTvPXDPJ4c",
  "key27": "29mpacLW924xtfPU14RtHVaRqeP97aiqoZbgh8eqahZyTgRbdwureR42Gd4XF9DkWzdoVzx7rpmj4tJKwBFXRuUo",
  "key28": "gjreft1PnvmVUnhVhATfD1UnV8dvLUwVq2wmt6JwPVSEHqpjD2NPgc8syJEzjyqCVvzuEBRPMXJTQvJpy2HyLQz",
  "key29": "5muHZzzDnJjKYVtoMvcnrhs6GAAh19reWynZFpcRDgmgHamppVxtE6TnypNdyjQS4dUvouJ17mgkErZjzHCDccLQ",
  "key30": "2Yne9bTSCpPGVzmZgfZB5omF6LyhnbctLnxyMzF7US1erm1SHEGyGR5XYhGRQtqA8AZTrsURTEhi9Npn4WWXT4kz",
  "key31": "ao2eMFY3uYDpJhUCZ6LYQUbG5GUrBP2Fe6uvPWd4xkr1ZRr1HZDqLwcNpGnS9xC7LVZzqVTw768a7qnJ6oYTKvN"
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
