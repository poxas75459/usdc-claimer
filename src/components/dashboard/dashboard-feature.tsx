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
    "528ddA5y9LXoTqyor4nroGT7Hwb7FAXZN8jNGHNyi5FbenkFf6fvdeqPbuXSQuJLNf1cQpMiZ4SRpdqZu37iEtrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FykbqkkS2JDk5dpeTagDs4gyREELzCuRaazfTGbAwSRL2Ph5RpfeN6GRkLcWyEtiFSU6JuRAtyE7yTmKydEgh3g",
  "key1": "2THgbMQho3U4zBwCyg25TYqYaFGsYcj2Cw1a7e1YANGH3sHndqGkhuxeCcDBjJ9yHo2Q9UgFnsggrfchEeggkWRz",
  "key2": "5id4dF6NKEyHFWtzzurGrx8Wn51zg7UhMKfw7jGQ2JcRP9QVCXzN9cGnH5DCVTFNHWn6J47LLisP2LEH5kMnVNKE",
  "key3": "5GDrgPV2jpVwFC1Vn33qdSGbiy1caLzn69dCJkTFiezmGbgucZUpF73E5evwuMvYpRhiam3YgxRptN183fzqSxpG",
  "key4": "39sztejobx1Xy2giNA4QV14JoZLMkwjpr5P1NYjojWdTra6wQekryAHVJqd6szCXbZ6Ad1AotZ48CBxrwcZmGeSg",
  "key5": "4HsYgFwNNkJGxU6xCHtG8pZ62W6mqosb5YCg8efeUwACG7NscJT4c5rYQPfpekudBdjkvt9jk6jQJzzADGN4fkwZ",
  "key6": "3PcJzLMVpzAAkjkBhaMigkAht6qmnYbTBDMdsgiSaKd8UAhbyvoBtA2xKLySzQ5AuDDuX24UnsxL4ipHvju78PJY",
  "key7": "27EHE9vYLkUmPq8dp5bYorZzVrJTMHLZmMzAKk6FdNmkeckf1VKZFpS3vZ7m3LCqXMT2eo7FoDcCvWeXD7LHcSpb",
  "key8": "43T6TNz3MpQRpSqH5yZuWzdvLvDLaWTRzLM4wbxEvzswsVS1TER5Bxm4ZqQhBfriPi5yc2XshHpo7BcWupkp79mn",
  "key9": "2S1Y8FtUwx3EYrMh91TDzEvxSfqqkpMLuYr8Npy87pwYpPAzozXUkgrH5st6R6L6uSp9XetQZWBz6gcbcYnBhbd6",
  "key10": "5sBTfMT23U6Rqy4Ud5CxQUwpoZarcPsKD7z54TstmfY8nc72JPe7jKDrDnkMQRChrzzBoPgEXaKEdqaUebjYqKQJ",
  "key11": "5675eWhuRKCB5pRb8LK2LDYKsR3q9dSLHDFFAec9kAkLUt4npWYpx2NfKmREhuQbsWv8tdeso3FtDtgGBi8Zqsqa",
  "key12": "62qy7SjNDJ8TigyZYoxnXVRqGrNDSWomN1gf6b3atCjNnpPKtE2DFU5LtyFntxE78cEZ3TNKouoMhP9fczLDw6Es",
  "key13": "25XuFifYRj4pFdPwHhZCLNoTM5xGZB9e2djpNGCNCDJmpJpgmW4iDXkPmDu4uBNzTUKLUo6xefeEwhRzHoTGXSgB",
  "key14": "hoX9XCLXyAD3kMLa2LyDU7fZRuhS5A1JYUAKDg8vNgfceX3e8Txx66ATprrRub5wyYu3ZXdumJwEaceRgKxyXyu",
  "key15": "4gX2uQEw8PEEtKywyyRGn9kPSf71Bi37nepzwhDNGvLBh95xZyjHpiemxSP8HJNDSUryFi633GyLMdA5XVng6NoZ",
  "key16": "2wXQpVHUc9rntTE2Aip1vSTNx3LRetgc8KN8FKgHQYdeDZBcUxJeNVf2xyAw4CcKEhZxHqwZ1kxgdLMm2Uf7Wufz",
  "key17": "5oGMzaSLdRjEpV8mszApgc8Kh9PNrUBRzTReFR8wPt4njPaNbndKFK1muKyKDtxfZac64HA5PAqpXXXBSDNA89AM",
  "key18": "4CeuNC8FS1DUMFYdhcAQYsdks3nCWcGDSt3NYSERzTkNNhSU48jRYkVMq7sYmZBuJ5b5LxgzpbKwnztGVJirp6yT",
  "key19": "4bMFxdF7LAghAJ4Q24etX3YR1vmkvK55gwooCFDGjCSD8jPwGGvLrwjp3Gwbs2N55hnTGQcmR3MmzAMfd1reKzqL",
  "key20": "3pZcwiNAzk2xtFCY7u6pHncaVZ29H1BY55RT1HKfFyU9doabiXp1Q4ymorpdwr8eY4y9oNKjzR8cEp8wQ2mioQ1b",
  "key21": "VLFSfjJsmeLSv99uQAbxkVCbeDYqsg4KZpqsG4Xs1Zd15o7jjEuzNxdUL2rZhBpTVfyjeoqAgy3HXK1sxCLiVa3",
  "key22": "123Bc2NbtiBwY92Cou7oZFKVpTMoFYrDgFu5qg1h9Q1tG5pkV9uRtdF3vCMT154mgzF1u4M75AqDAoc2G4CzwP5x",
  "key23": "3qyM9e8NhPxQ9tTcb1fd6xqF7TLq3j4J5JeNXE1561eETk6NpFkWp6pUSfUHCzQQvqvGD94u1MNHFa1yduCMNVY1",
  "key24": "3n78TkMNuEvgZ2qeHAdWsdeii6PEwfv7cjBmE3hEHk14tj81tv47qmMK7mWGqNPSGwRTVGySRSy1oYypvLAokjiV",
  "key25": "ua9ZycTxN72e2FhMvkynMv3c1YVmG5b344XgXYT3tgizA6h1LBtBBuGfHaXYsmHk5U8wjtteBV6zJdLg915e72t",
  "key26": "4n1tQ57JNbuJKf39eZN5GhQLhTu9GmNc8idAjDRLc3gn5AXGc8PcskyLX4iRU7jwyYFsnxiTvLGwck8xCzXyU6EG",
  "key27": "3SPcaDMg7hwN8x1JH9YAGbQXR3ZyLcYh2oXF3YWun25pnkqZGuH3g62YsPoYWhMjSxbWTge2Za43ZkCHADAN1SuF",
  "key28": "Es6sKep72L7LDKuRcV8QTfouHmy81NLuM7c9hKvvei3c8RXK8hY2FhRdZQHmUjkgLPvhqzX2pUGxiB5UAre3uf9",
  "key29": "5iki17XxsBFDazYLKTjn72CcFa5wT1a9rdf9K8wMQ1HDCV2QRiud5ypWYYHc39BKfdGbE3K82crsg9LJaDzt8eRy",
  "key30": "4y1kKqKeMva3o3rEmuHmkQ5hHUELqXczqY51VNegYMTeANW6BpkMRpxe3WiobfWyGKiVW4kZ42iYZmC5cGEitPTX",
  "key31": "24UJFUmTrGfv9dJnmo88sMZn4kGrWE5o1CVukpzvUnEMbGFcbsP1QHYdt2qGDhe4jkZDGa5aT1FbBnitoARpsYK9",
  "key32": "2bpVmikCwDshpncpfvVSmbh9JFk6mjhi2G7jJEaEmdzb3X7hV3JQsn3aBh39XfMqBKaiUseeW4APH5bos5txqouj",
  "key33": "4XJMh6bBKJEDZrsy2VxLmeADpVxtAGo71VuGJEKCGoiiDVYsoKzJj3g1UY99dqFHHqyUXgT4qvKet85dEM6ArrxF",
  "key34": "4gN9QTyRQPYi7iQQ4ZQYL11SvCjJfkLFpF9VgmoHTS1qAHXwEwF5zKrWScXqZz3WiFYa67HVDMvtKZDkujaBEY8f",
  "key35": "2mBP4YJSMT4XyRYSaGmaXAvSSy53KUwqSj7RZiB67AwbztiUkXerNjdtzDTcbZGByH9wTjCtLY9TR5vFKSinVXDp",
  "key36": "5H7rdipmocwVwoPisCKRTa5PV4NBNXpvcYXZZmzukYzJ35L4FPptS1RBcxffqGs3TqF2k813fBzdzwiwF78n3WoK",
  "key37": "4S8dNzmNAWAJ8ttULEzHrxQS8PPy1QXj9arDEFts1TTiP9YaXMfQELYk32ZPvsVUDsFwWwZK3NC5v9mbE6fnM72T",
  "key38": "2CUerz9YjF7AExdJuYwUDN1bu1VAkd6qZGLQuCN8drXHHbn93Qo8gNqiiuhgt11CekdYsvgY6hwuRoZ8RTrbbCZF",
  "key39": "5mYvPeVCEhPgvy7VyJaCpPkNfJrgGPycLnpMgLyzZ3zsoJvnHep7My7jqpW6Y1xBHCmRXrcJtm1zD7vwbX6Puw3U",
  "key40": "2x4m4qn2oBmRmsmoE968Bxh9sk74LbWhRwL8EXnvciQTVR4WSHgPCxyJTY5fKK6B7FADeaQbzFKUnvB6khNQ8xoE",
  "key41": "Rk5SVNQmaph97ckG45WLZibdzv95V252FjdL1XuBvh7NcWhBr9kbD1iaNhWG6fzV4tQHFREDELRnUnbaipUj8mu",
  "key42": "4qYgTWSt9xmsB5Z3ckyLgA6jJ7MbuU7YMP5yhcNpZ2WuYmJoLaryMVxhPGHahLbiRmLGe9Wp3yvfx7Fgn8Bu5bg4",
  "key43": "5wE2wv4thHJggu8NoppShVfTtpo5xau1VbofBHv5LiTaRW7GGE6V8S5o4AoGWRSXatUhfwHHxNKEg1VJNSw2mVBT",
  "key44": "5kKJKpRV5toMauQmC6kf94NLD7GE4LbF3jM24hUxB2bTVZTzadBHB38M9GgKvfrgoHU6uSCEWaiwHcXSRGRAAMyC",
  "key45": "4dzszsqM3nWxjWh8FpbhsJtBWE4PVUemsHGBPgEutHkRcRccN7w8ziurM8fRHG1mD7cT89gYKD4GnwmszmngwFDd",
  "key46": "RvBkDyXugb1ihuNwhrfLAC1MnXyhF9R4tp3KomiZubd9JiajcF6gZByCvRKmJeGi8NbwgbAX7vVnJewAfbW7FWp",
  "key47": "4pWutS7viH4vFvi3TBNBLpSvv8xmtW3ufgHkKH8U4ESY8c1nDMBrbuzchhoj2Yr58pYaitu6bC7XbozLvGtuGezz"
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
