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
    "XQGBTMVWxRU2ha8cqC5r4H9SvkbNGXXLrgFLEfXxJm1H4yLnVY6X9RAEbsF5jWJNZTbwgvJ3zbdsrCN6u6mjCGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQrhoLo7wpweLK4ZhNkAYVVGfF9Gx3NQZg6yFTgKJ5MC97QRy1erruQ9Bk9oD79vvvLR6xhVwqpscwVamquMsCD",
  "key1": "2NX2nMFB91TxGAFHhprVzFMbFY3wW5J9ue41HkwJTTTVjiDzdVThuWKYdyjpdiJi1fEnfmG57Ls679X5cgktd18u",
  "key2": "43kujf9AfBsxmd7y3EteJWQGeuEaxdJhhAb82UNMTcGY7wYZYG6JpreHwTuNHwoWbWTRgAsffyqumDxMewZoBDXS",
  "key3": "R3m8sV8EoMFzFsrC8gFLmnZyxJQTa3md31GJfsjztPe1n6LNv8Jjy3KbqiXvyUtXZoPwywCSyCdmevNJ37faHeR",
  "key4": "4AB7nbsnRcszfTivZk8ngvvEr7QpdkUcbm7j86tXFyeJs9yBEreHvgRuyeVT1Wp3EPYbnHNMAVGSRxciVxoZxa8H",
  "key5": "2U8f2ccxSgnzeTV7ZXmFTT4ESSxU85VBfigb2s2ntpg7NKiHWtnEdUVmVzBKi8L3cVaDy23pyHygBVJYcVXuPZZd",
  "key6": "4jvo1XZm49MM2xpNyL2LvLQhMtZcTTXXtDQKeJfunwpQyzE4RtdDumHmog4uXm9uWTmzEE6QYpxLpZHeGsT4nu7T",
  "key7": "32x84fvNR6EdEpVjg7PVmmvdE4ZutV55NbbSnAaDqt49AaF5dzYZEdYfXoutUPnVkhu7PRQQNUbSBvsM6Cc1wV3w",
  "key8": "3j48uSowniDXYa5r49TxjZ3LDwqQNvjeR6QUU4xhjZkpQhoasxnmxFtxujPU29Htn7ediLeaE6mL6rECiUW33Lk2",
  "key9": "CPeeteA5CzEMF8YfECWb7P3DLMscQ21DcUFmNGF8T4VQyGQDnhWUa9zh9NipeoS8KP5j3YJ6T9WmvWteRgXWNBD",
  "key10": "47xdw1JPReSumPTcgGYpkdDbbJwB9W5antGgAhX5R9L2jL2mCGgMinUQRLBi9rZPfGuy91QN4XGcLZW9ThdxvMdg",
  "key11": "5cuAPMn8QMsJWsjQW7u3esAsohpEbgeEK8gmBRPjAHHiz6wmkaLXetbAZ2ss1t2TgjLaxo8bceCFX4WLFg25rNsj",
  "key12": "5p7FhcX26yhpYaHzEoF3dgwLayyPfM3EzTyK8t5CPoULGbWDLvgWL6qpWK59dopTPQub7X8WK4zR2kdYvnPtpYHH",
  "key13": "23wKZvDBwdycBRgXAYpMSUxWm5KNnfoJ5t57ghm1nLLGGseNjY7qdZnPD8bqw8SicnLrNGfHUEsoYTVuu64RPmw5",
  "key14": "LBz1UbeQoK7k9iS93RLhzWhkyL5ocGUrGACbZAcUdgwTLEYBhsUbPonEmFqGJUvHbndaDkEVa9a3yQMU5CynwUc",
  "key15": "3nohAHuPeJSMgBjpUFq9D5Wj5A4TFLCaLcHD3xrGzDasMRX8ESZC1HkhupkZwtAZsbWNAz8B1RQZpZqovjHPJtVL",
  "key16": "4Pug7gqkwSsk87EnprjdxTLqcGGg4ob6BuTDwyDxG9AEEtYfjcdYmeTjc444QJiixhUVYAQQNRBMzvWrRbnoF6iP",
  "key17": "22Fo4KqcGsRhHET61TDAUv9w24geHRbHbYa3yQme4A2JwssLT9JxEAyaqyTnP12PhADD8u5hrzEw8BfsveaTEPrN",
  "key18": "3vwGxfvk1RfQCakMwY7XJH3yKtmLp1dSCZgSQAheYVPhgbDgcjScvY7xtBXX7XwfRyQFnzVBr4JTDpjBBhhhmYHi",
  "key19": "51EypVY5JY6YzVRyshyBwq2Q6ixvVUhxXX9oGiZBviy3Fqj2p8qM31CgKrntpG3YAXTywrYJmfUmxQ2HYwh8vMTB",
  "key20": "4MTuWuMPpudaAtrzgSA1rNYEnxEZgC868UAM7Qtv5k57vzjhCfVQbtbqKkTic3GRkQvZUH3MMw9NMjAQ8e6ZYf75",
  "key21": "bfBN2GhTG3YecxeoEQWwQoqUfrquc6WxnGz7QTMsnchDeepPNuvBKHGUEg8XMMZNbeTZCNokG1UxEkg3UmHJqqc",
  "key22": "4LYZR974dMCXUMy4ukhMKRk2XbJNyUixiospUySbLSRMFXNpcqCcX9hQbAQA1HARZ1HzqyTTJ7uKoByUyGgy2Mcw",
  "key23": "3yGwmhR8qJKgFme1Rkn2voR2bNh3KZsY3s3EPMCQY5v9e4ZTVW9ghA9GFdkySPYXKUSaxAnpQjwReBhVmjYWFe8K",
  "key24": "5qaRrHaQmTftSoNA54min1K71JsadtQ9QtfDbTN7tB1PL2ewmz7Q68MvkqoGCutUAJ8S9D8gjuMobxYJ9kQw9dUr",
  "key25": "5DEDBaf8DqSb5AU8KeCT8ixVrL8hku52qXvZVHiakhLyqmvbQW8CrJbru6zCWTTNNyodqGavgWctMnuKawQLEYmY",
  "key26": "2Pm5Fe58Mx9gRMo6DB77gf5v3GtP96ev6pSPD6qZF9WPhMkfpxsBc3RsQbjVugB2JJB35VyR8VvgNWxBz3EbfwaP",
  "key27": "5g23Bhrzexs6rDkqXwD7xdFQfieR9GEbSbTcM1aFgKwdXmyo4DuthgM3CjdXB1ioqb8SmgfDpcULDgus5z8eNpyP",
  "key28": "4Pq6eLewAESdk138EV57sfKdUuSatHADBavgoBQNghYSoZA5xxtbR4pmje3B92BQmXkDnNmEwhnF2bBRVWTdzdA2",
  "key29": "4WFTAkzT4isFbz7L2SDfQ6gHJ5RpgMidJKs2k8u5xrvWNFcWegTc4n5E4hAk8nF6pJuXjFBSqtuznV2D4XpMdGzt",
  "key30": "4NYFFCCHAdZV2CcJ74tB8WLxfc7aoxsj1NT7C5h39FRfg9Pd76c6cAFGFCwNWugfiigqP8vSLQGpf14SK1AqNkft",
  "key31": "487U41nHxkHyBtVMFv1kaTvCxR5gdmD3rbGaHeaQ4RYkxPUqGYampprg36unKXgFUHbrhiShBY2wJ96e8RxSovk",
  "key32": "2MJdxMc3HSqtb6ds3TQaRhoQcmgnQY3mEEcKP4PyMX8bQYFQADFPobgvYCGUMD6g4L9zffzaFY2qbyW83SXHADg9",
  "key33": "3J5jG9hDZCWY3F1XFLTuC7qvfBHnWMC61sxEj2mikR6mTUqhjsmLmzWit6TJpe5X54jNUbFypDTNfhw3UeQFfmnn",
  "key34": "2BFp5cm9MXmkf1VcuXBebduRYeQk9Um2m6BVyRRpoGeyGDV2yE3EoFhR5fpaJdEFyAzcMUKXuyucwZPZJKwAWjMT",
  "key35": "2KKEa7mFfjoYR6h3AVy9L8F9xw9TEBaUAhJWDdc6okGfk9UWMCsPjppysDPhiEscSBeSNuGid1oEGi8SXxmwPjGG",
  "key36": "n7mvMfuh7sYLvwfzXr8MbkqM6TpRcmsVfCNTp39jUdJG1GckWYjBCidh23BFCpGwY3XkfmrMGkEMoRmi9Ax8rTu",
  "key37": "53vsuxTSeFvhqh9FKyKskwDAHZ7wu3d5kNZmXvbkikKFSZLPgtZ1jBywUeY836r16aVCAU1YKd7FLUSstsZeR8Kq",
  "key38": "5tTrGnrq9ViMgTEYuEWrnRnLFcR8rf5a12JuXY3f4jWjfTSstr9zbmJ9YWvcmv6w5ooXCie2EhiBc8bxBFH5qpDN"
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
