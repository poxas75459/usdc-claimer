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
    "31rjTkkWM4q34Qu9PDdAbLkp4ur68TAoPkvbmSaLpjhGzRu9AzhttVphC7u9wrJ5Vx8b6RxCDq5GEvC7ftLAH34X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tP64fzb6cre18ntvonyvQ32HghH7RyzbsQoyjKH6QxnbJtS727epPKSC9JWrgd3D3o7NFiAeoVrmMm8XEXpTm3G",
  "key1": "5zqcAxgYKzWmeXGvZcxqaeYyh1TQBdRH7Nz3a68xexczfGWnhLgzgHjeZu2Zy6Hsgngw8m1pp65gBMj9ShZ24y9b",
  "key2": "3j5KcDn8yrogATAik1c2hLyRAWH4wF3gbDwVEuLhweSzczpi9698QfnJ85jLQDbaesndemE1SoshRFVNKSNVff4x",
  "key3": "2EM2Jfsjjd4hZZRyDP1tzDY4RdPusc4psSFktnFsoyFPkxpQ5QWvshkrBL6yAfkuf2cH99Kxs6tnc6GQGnkTG9LC",
  "key4": "FBni5M1oxiwKDmLwGppogcfaViD3YSiBeB8r4ere9y2DoMnjXX9hYQoGy2ych8nKXiBE1TBXgA6AGER1s2WPud1",
  "key5": "61WpuoGV1Qr52oQLAvrJDmBnahaqW2U6KHV5vqDjGwHdEkurAihpDj8AkuqPNxtV9w7qUaiXez81d8MChK2WgCJo",
  "key6": "4vZVeMMvDqdc9AZYD9RGMUv4UPWujLy2RfMQ4RWNjDvbVaypwX8MqKNGgu9a1JYucqhQmictBcLQDjLHwyCCGMj9",
  "key7": "3D4ii1WBt7QvdiPzVYjnuiVG8u44pxSJARqXzcuwjQ5WTngqd4TRVahtdvUeHSk88bxKrCFzbvApGdAKFMD9L9xf",
  "key8": "4h63pnv4Zu1Na65xaVtUyR46QtVHSSynHrHxSZ9dCSifUy7iSBGh7dcAkQvg4DGgct1QtbugudoY3XJfRf3MXfww",
  "key9": "5xqL1KBQ8WTvVmJCzZK1SdHVAiWe5aJf8XEEN47hSvBvh1o9ubRvk6YnAk1ruLUAynfmxAZzPn48xuBBQoENzVEJ",
  "key10": "3K8keEhtc7WR7Qsuu1oizx8o8iT2VpGnC6CYnqc2NgdKSjfRGoKNig1P5vNDLehZ13WSbAmoEpXT7zrjk4Kw6TKZ",
  "key11": "2ya85u7fic2eoKNnML2r4RXgAQ4hCwwyMALeEETTq4xovaMTRiNiTQuEBvYf9RQgZPBNdbkiAUDjPyJz16ZCmfvX",
  "key12": "5tg4NCwt6jkbgDRVegJFAGnoEF5smpiQ75YcMSTMbAYjtCMLy7Cy1cZuwERrSksVkKfMN8zuZKAq7hWryysNSyr4",
  "key13": "2a4ycTSAfohG4WNqgMeDZ1jWZTzT7S67CVRfLsDLwQ5vkFm6A7ePv2wi1wuJ1W3NuJ3NedX7k4j8B9DrUFcjoCGL",
  "key14": "29iEW3EmyfQyuS8nwuYPBUuexbFNxtgRzrd4fnrZoDKJsStNG4jV3FVuxa9gAiYbWcrvcb5Lag9ija7PFbgfdTg2",
  "key15": "4YGVqamQ3WfcCv1XzjUXVDj1zDK1b6B5NrQhrotFMFyB84eX8FfrTibP5M1ZZByfEHYhT7Heszj94veuT42CumaX",
  "key16": "5jNqabLSrfZtFpuT68fNEVg4otzSV96t5z7GuF3ekgnWKrvbeUSmJNZMsDuPHwYXnSoQWFwJwxoP69x99juJDAw4",
  "key17": "47ugJMkQNZupwufdAPfiTUJZdALcWhHF8NURzjUWmYFXpVy5whajSkQ9uxnXXrHZgZCKDp6uu7Rg4jHGaYF1tahz",
  "key18": "4FHSbuiay2LFjgcKhUW7U9Vu8NiVbiJErjFohG3pd31ewsX6ZbfH58ZYAEQKxQmh3tn6pbWNDfEGRQzzbG89RRaj",
  "key19": "2J98Q4RXAAo9Ey8dFi36UnpoEMSq7iMBPojZix4TBfPnsXrThmSpcrHobndzkjw1yTjs1DgwqaLKi85mYvNRSU75",
  "key20": "5et2EkCiUEYVngojfeQ8WXnVrQpPjigBykNLWvKNCszikdhhGE67VW1LEKugW3WWPGeCdJsuJBun7BhxuexPzLUp",
  "key21": "4HzxK9GzWMLK33A5SYqjsPeNL9eRczgVqjybMNhDyXkSzAfy5xG1FbyVZB41c2eWfCbEyn7jvC6Bc78nbQPxJTdt",
  "key22": "4aSZimG3NQFr1o8KmPUoYRRVa51E586RDzSt5y685H5NpQS7aCm7UcnwTGgJVzxMFUH8HSL5Ju15VpvmaqntzkZj",
  "key23": "eZLWeutJ5CiXBYUg4ETUqjdfyEbu7e1ecmCZXP81FY4kQvdF7d2BrHxigrXz8oduwJNmH7ebGYbo5QXD2RthTev",
  "key24": "2cukM5gRgvxnw9boFV3HGJjvbadYpfvBHsigRPKFYNQXZhkvZTQtpD6mNL53wKZtbr2z5WZQMufesJkRMiGHk45w",
  "key25": "ZFwkWNb1rC8F5i94uXiRLZ7LerUVNYF8CmeMvrZQYii7p18h9jS5axBVAhtDfimrffzpBwbKHXpdUE8mUkWcPxM",
  "key26": "3zSXzHU8EocLUgKx9fKQA13q2o6swu7c8wNn7KihndBJymQWCANDKMKYWi9NGmBCrnQqPe2yYnKV4vJwn6BgsKN6",
  "key27": "2XYxAi4hmDY3AB7E6ezWq6AVeab9BuVVCPaqMZSzdcdXnxFQLgotbiFqY7DAfhB8XJHSHLAGkNZu9561kePrRAPo",
  "key28": "4Ntp5H5ZgY9AT3kCFacyX6fGzCAWY4zbyiQXyoUK9nKafasDd3yXeuvEVoPetqaXKfdkAb1zwbkUzZ1iXzBpLd58",
  "key29": "5imhpKA6UsPZorpDT6QMKaenvGth2M9ePuY1vKdeojaE6YnJFdyrCYzRqF95nxLicb9NbsAiS4Pu9kWF1Q1p7Eyb",
  "key30": "23vgwrosgq8AwNRrFSNYEFRjzD45375Q8mGwBpGn8EMRKDo6iyiGyDua2hiukThhvEv6tt4maUerhJRVSPJZoHor",
  "key31": "62DARZ9B318Nr9EBKECMCM13A4KrAehpoAnfYBJ4RAicE6dhJGZCgciHqG34iD8hNUofgHU87kam1R25CZ56ZEL4",
  "key32": "4VveccMjjR7r2yHAp2Kq3n6v4wUKRkdDZEE829fvdsqTCN9ogrXYLCEnrMbDbgZo1ZpKxngjALpAX1U2HDMH2jBn",
  "key33": "39qXbHDGgSiMpWowzeJGPWGThAK1iVZAvjANj57ZChDG7qQpkBibSKCZBeyH3fPMdwmBzxmrCbUeyUKeUx4yHMci",
  "key34": "3YmLtL3uWGz4teMs6xJsLAiNwiTso9yinQT4P3gCYGpQ6Fog933tRCTPnoAYJfiw1DjEC52Qf7JQWTMXWBgggEVn",
  "key35": "5qt6iejLV1FbLVQJU2hpMRQMiytYNfBgCRHHiFwLSWqRTGMGoiJtHdwNxP7yDWgkpLqcQ7MTtYGdV5xSAVvT25FU",
  "key36": "2qPhzpz9TwcEtNHrKe15EWcuFSEXtQhfFosSAzzZCQY5qZproieL2zCnNaY79TJmCavQEdSTkTXG4DMaY8D1q294",
  "key37": "5czxh76xGGCK5MV5ftoFJ3GSvtaybj3FG6kodzJJoNbg3X45iR2H6cLtCPYfaRbcmmCKRn5Tva8N46RgenEVmBbR",
  "key38": "3WE1vibVTNYdVBnT538RdURHEWd3KmQ5hmpofR88ENBXFAt4qHaov8gXQbFwE2tkwSeeXhnEd6tTzi5Bik9Vf773",
  "key39": "3HupzPJv6jXbZSuho2QPXNfoetGyTd1eeU1dfCWmByyXTJxNdu4NszsmiDbUwrwqN8qw2Tx4wQX1fvrhi3cy1woc",
  "key40": "5UqsbZAHEjv7Y7v8Fkx86Tx7Wm2QMZ3URHVS1C6deQeb2LRd72jd4en8q1PU5LQVx2Q5LwZXrxUmMr7qJHjEYZr2",
  "key41": "pgkq8a5umMKryUhKpKDtrYBebRHPfaHJ3ZSmqs1aJLwB5R7WXDzirzGpEcM68CF4LyKspbbL2LkGvbXMrp2x8y4",
  "key42": "37ZJKTxL1jLYVRSFXmXW6jdsSrrpENq12q79w645fh9H6x3PMFDvVBPhNwxFuV93YUenx3RkYGvGporrmFWu5APY",
  "key43": "3nuwCbgSf3K7RWG8ASSYBTMwnL2u1WUmPfbKPbZbcTh6ikgtYsEXv1oZeGRHkimQJdPGJ3VXJ3yzpiqvf15zCACA",
  "key44": "5Z61kf4yXfm2nWaLbAFDsJAwQsw3dYUd3owTiJWKmTScM3fwRXnesxW9useWVNo3AcN29BfUDNW4SFoGBdHuH5Re",
  "key45": "41NR2js2uNAZSnZF9gHZ5ERAKPjrGMZp7p6Kq5zVH5MHtyYu4PpgYikYDPJLRkYCRX65i54YoXWJeNdsNjeHs5ee",
  "key46": "3qhRtWCeJhtsNqRWG2ZL9FGaL74k9L7FJqt6Vpnhyvpz6AZZ7XyDiXK9XPEct6NANkP3eroEGBJWefYpGJhbd7ri",
  "key47": "2Z3NPHYSnfgKrwibxTp62E6Wf85PY6ceHNaiLqpbweMMjJkJxnC8q4TLRrK9T4fEiFxFLHyykRP52LgLQ5iX73an",
  "key48": "5zNsKHyvDRGqgDT1ANmnsUDRSa8Q4Z4oF8AAHAVSJhpfQ9B6JVorVTNurvjGDzx6vLuoofS4tHLB412x6jZgr4EV",
  "key49": "4Jj1VpwGt41jokSYwtEzEe1G9qtWdGc4yMkh3EEXR5kD24MkZ8H8ULBys4MhKnVD8eqdXHC7pwJ3pxJz5AandkAm"
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
