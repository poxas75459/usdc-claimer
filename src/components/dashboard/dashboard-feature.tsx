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
    "5mTAoBzW3zqNtwfmnFJymVWudxQAgoPfaRieVVqKj6Wg7dAJYHVHmfWRL6NJgD7BJTRBDiNreEPLhJw9BEzs3BGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYFuHWVp5VAYhjEJUSUjeTVNmhDL5Nobpt52Yyap8PBNm2QvGpSbXHQFkncKqGGNvaLSABKhM5HEkd65c7qArjd",
  "key1": "3qNkQXCJKCi6vgMEfi4nBbZjXQ7kW3mCMuKM7RSP1LNnKTvngj4bnWPZroWnyzYE7wweMP7wrLYKNG7mx1fke3NC",
  "key2": "2rfoeURNMJvCGxGEwU8vgF2jChtRrsjfbrtkUSMAGuwMbt1VzsBtD8UbzQKJXCp4byTQzgkzpFXJMCLtAALbrsag",
  "key3": "4ENpbjtXuwHrjoRutWFzE6M61fvuCpFs3Sbx2ezJDjFuuPx3oXfShGjFKwQSBa915vmnU7Enji961CxScdC8pvaM",
  "key4": "5qvZsBJq7hFm7aZ4uTE1k8mUHqL9eKhLBTjfU9BdFc2Q4anm46K7yBd2cmQSHJzVUjtxDGdA7yFqKAb5xLunibcB",
  "key5": "4Zi4URg7T3uaKiKJD7hn165K8Fg4tHLjhhd6XpvhbPBKayofYYSPuEAqh3CYeidmQoeUaVUUmakin4hEag1tit27",
  "key6": "Jjk2o5jZ4y4EKH3TbHNzUzPW7xTVdMhgW3N2K2W5ZC4ooRTQTiseS3YFRNS4x5w3ttqg6bJNa6oZaGk1m6K6riv",
  "key7": "2WHeVxciJaYjfrj6FU4hXsCPo1nBTtxLzrWwN1S6zsYuokxDjFiKeUSMxEZ3oSzfNuxydPfMt92mveyrr9t6wkR7",
  "key8": "2HWqhLfg5Gr295EPNga3X7MTiDPWhGcjP5msduyUM7SY4TY2AYxeSdPGiX7ec9zTXpDm3DNurXk27rtKJnQBVor3",
  "key9": "426wD5VNh9S7u9iByegsseStSwXY4yx23yLDhoHb8hCBV2pkBFHGVFHroYhfXroKNMfjgPCHS553vwKv2Tzpp3xi",
  "key10": "3vtnB2CFByWZK2yA2xwdHAtgee9SJjwdw3JvURCgHBrrhKRT7NpaHV8tvKwUAFEd5Mw55ouLxeguPE6NB7RWt8vW",
  "key11": "2oLbpNfTMRiPDSzzU4vx7c7r89XBY65C48Mas63qiqkBwsvNhgpp8sTfK22A5sPJRTRpX7KdgVXqaVDTFoNsaQ7v",
  "key12": "2BH5TFrxJKdUs6sQQX9zKwUXnPyKFz5RKM2UdMNKSYXZSfdsNmNETSgp3oPVgy9HRPqyX9s3M4mnPY9ahdgAgd6V",
  "key13": "BH5kXsg1EH8T5FUEU6NzY9AWYhaCyho5wgPnZRUtXQ95Wg5JTiYsJqANY1eJfadi3gvyLjh1VMV1demqfqqosww",
  "key14": "2q1RgxfPyiqJPX4xP4w32Tw8QwR7zAr2SnVuBwG9g9z8MQRpvS9HohXUdnD143ZL6q8af8YUBiXzwJRE3rGqESEe",
  "key15": "3vNm7CVvDFFbG9wdYMqMxcucTXLn5ZDQPvjTWGZojocuBUrKVKoKetojk1K3jnHnN8m7vR7kRSXsksqDSiWw7id5",
  "key16": "4n8UmfxViS2mQwQFNtGPmVB6M1FzLRPe3Jfmb2tSd8udNam2M5Pxtcw3tLf4xyWkKqJBU4bGGWwVKEGeub7JUAj2",
  "key17": "7w4CdZs1pkkAvLZMnHFNQHS3AkdmtPae9Dm2XY4eq7H9eSyjGEiodxPDXQygs8bm2Lttfag8tCeo56w1eUT4fZg",
  "key18": "2wSpF5amYwuX4krGBE62jEAR259gNCkfVE6VqToiJVNGxHuyQEdZmtAik6CMoJrFzx5d7apbMmPDG8jSScTgxBQs",
  "key19": "3gZ5gddqzDXrCbpWgAERasdCr65H8VP8CUhVkbKbk1jZhsoWeHK7WsGkHGK1rA31PcbWxoe2RAiMaphTWyTuenkf",
  "key20": "REMzZJ8psDYQhJJxvaAykhjvHWjYDnxjqLsZ2qoXcDoUBiiAdiyYg489hgmUeDMA9UEbsBsQs5sYdDoof615oRC",
  "key21": "QxbHox3rHNg7wp8t11QKEQGUFwXyp3ySAKChH1QAKnaHSurTUsyKYzYxqpNjvduCYwukc8FrdQ8qPu1erQQbHfG",
  "key22": "362LSFzN96x4uXzLmg5QR9o3VYj3zN5nFX1V2rPJU6mY9szuJwP815orFpbD2iCEh4mqBQNa2Fqp9AcpcyBVgbPe",
  "key23": "3gkFmmPPUbnCSQkbE1bxAbHDJCcGh6EgM8Zu12b6sSGc4Y2UHzefAtEstduxgqFhrFrUjR2hHSifxcBLNCawykqm",
  "key24": "3ZqWqUvGiy6isdsbiFYhTb1mB427dPEKwqEbFYSWxGNdFw5ohmaAD5e3CVTVvZEkY4Zq4HugV3ZUGYziUh9G8nKS",
  "key25": "56eZ7EsVGyCJwxDobWXUb9FwRjm8xc24BbJKJgbgtSscJJFkwXktEYJPTbhCGRMUJ8kkk2mRpeVAzb1GS1AHHwrX",
  "key26": "9Buce5hnNYuRDtswHEzgJd8sziSi8GbZZNVwpMy1Q8HJxfTQxLduLFhoxxXoVdRYFD99XxK92vT4my2t34HdHK1",
  "key27": "4Z4RYU16DuDkpVACsE3gWfPT22wfzGJtJo5UNyVk6DbeXEkX6P44hjzKwEEsY1RcTXpBZGEn6fcw6v9uh22P57sH",
  "key28": "QHQxbHF8k6obP1MZC1irsegW8teNZcWnJVgpPhC4xpbv66AAH1twyfr1ppso6Qn2Aqy6CReHc1kpozM6pUdCAAL",
  "key29": "2ZdYKwixQiQWk9TQ9knEYYdD5VK1k52eDpqVX4dUhqZL916bEyVgcfDaRkwQnNLffAVLU6hhSVhSYirpUoA9tBHL"
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
