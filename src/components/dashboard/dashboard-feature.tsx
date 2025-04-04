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
    "239qAFeU25wUchjQAGGEisP4GaGsJEtCLqYXKepEmREYF2BipD4KkmFudTQoMAkxVhCBEqTnUfGt7J7j6R9PyGoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RE2Dk9J3mxyJQp7Z5UMeAyJFb5paR3pNxyRaoE9eG9xEzddbJQr8KGLwPac1cga6MsskGGyRec1b1xbKGSZuFze",
  "key1": "2B49f1PUGPZXCCEphZki7HHpeJQU1yiZacTwAQX1FasqHeKMZspQq9PgMU6NDRQAhtXVc648AVazkFz2GLyCur1U",
  "key2": "2zVxwchCHKzqBXDxUcicrE4YVFSzATEbmiQXnJkBho88vCnm1ST67zjqocsd9F8UKNVJQyvAccHtoMCpiLr2d95J",
  "key3": "3u8LZrZyBsVERbujYNK4iSTrySiAsUHu2UU5waTf6wdFtCk6hUzQLHPYkkXd6XXPtkRaQdJzxKdedUKkJBgnCuCQ",
  "key4": "Lx92kg9uaFtAAAzFLwTm5f6Y2jUnP92czQeW6jcRdSnekrDi8P6VPrHgot146WwJfYZccxN8D2Boqp5GJcHqPmG",
  "key5": "YoTLxqu3NyxetaXr6PR9BxeLwWHRcwvahWKD1FovQ9XMEWwQR4FBxzC2ALRRvjhKpa9XbNVR6n7ghpYwg6TjWzg",
  "key6": "2sj6ovQYwKLNGsk8h6VuBXibjfxX78CPLac4Eo4UGjQeh6cVaqS2ZF99piBCSn6pbu95qEWAxd23VcsJYWwzf9eb",
  "key7": "66rvUSNrJj7FLsS4qCgnrzANjSJBVUZSW3NmYx59LoGiUUBbXygwz39doDKDk3GmH1eq8MNi5qWDDxruGhNXbV7n",
  "key8": "5iexb7QvCQsc3rAsyRXoB2SS3MrN5rMTahzXQCRmjibi7SoUNnSUAXvtvmJdpY43V26kDQNarjbtXrYVQjPdGEpk",
  "key9": "4YG35KrNUnhaSn3PkAji4NXyTYRZaa4Djvdxxi48pxSUUjCXmGcdywvSAiXJN4ngkqf335CrXc2f1W5CrG4QnwsP",
  "key10": "48z3yfUAXzfn3eS3HERcmYag8CDRKcrDDHFRXJeJoHFCGYNwgceaYbJsV8Kh6H5oNMcNfM7k7ArTbY2ur9vXL5cM",
  "key11": "39dHugK5i8tjSFEpybZMtK99PJXAUooPgUNdmdiiJgP29hxxTbDthc4yjiZvGYd9G72tkw4udH2i5LoqpmMbXrVF",
  "key12": "2V6V4aW8gWPAx7qDf6GWgrXPAhi2B1CXkfL8mM7oN8mdAyk2jkhhihAmKyJ6gkBAdSnDdWbrzX2xDgS3xPxD5nJV",
  "key13": "apEbdxpYxLN9aubeLDCsrKYNj3TV5yy752eSdcov5W9AZvjqhjbTv79igLfCjUyqppd2zEnjLNhuxoc46Z7Tiye",
  "key14": "49ZkCaoTMEVhMG1vUxDsGUnSxEXmTMaygXHVmF7p2mfwoJkw924w22EjqpFpgWHoAdZ3KpVatnZ3ibdKTut8t9FE",
  "key15": "4FbDQmaG82AG2V48dzGmsZkaHpTNDocJp1tfkAVzTW12VQE64ygLKFen24LTd8mdg3Tg781R2Ytk1YL5pqFEdK44",
  "key16": "67ZNfkKVe2Cd9yHZVSf9phkfGVdg3taSs4unk3zXZ1Egh1nQcqHY5bsNMJm6uLR5FZEitRQuwbL79ZUfTxhMq4Fp",
  "key17": "4DZSafo9pchtqkZgB4RcVEwodW2UqmCp698Rux3dkEM63TaLR4WsgkYfBDxLZonhsNonfyUytaxcx24yVGt7pK3T",
  "key18": "4RzCacouRV9SmFmZ15aX2DS3KyKivTYbXTt9vkoSUHqt7ZtTRx8UYD1kjjctuXBFSnjqhXFr8YuWjFhMc3UerJKU",
  "key19": "4KJnjcEt9JGrYbvdEJVBdx7Ziv3TggxounAT6N1G5KuqGC44R12dXycQZ3kQrEx9RieyYoiF3Rkhw2YeeuSxqyTL",
  "key20": "gh2fNr9ykUtE8RB2JBDHZ4AVf9PYXXfiVapPYAyJ1zjHajg5TNhFMxLw7TiqYi1rTv5MWhMMcCq2iiqVpuhAFCk",
  "key21": "3sQZqh1tz5m4L1ipywzMhDk4tpJzLxe9bbw57m2xejJhcaZPtREnY282JmMe7gjU1ZJWwkxC4bP8UQz4uZYYWDP2",
  "key22": "2zirsNZ6r3exjHeKQrD56EJ3QfkXJ5vh4mv8qeFZ3FEjKyaMGmVqwxKR6Xy957BGYPMhnFxC75VMCAz3C2VSS3G3",
  "key23": "4HoHbjmq1jvvf2amggP76kaHCm4VhGgt8nS9D6XshQf9hkQuemkmgFYBX2cZCCREdAWqgYqpB9fmdgBsGoxug9oM",
  "key24": "6Xyo4jRhHJR6rEPhF5EdHiJrh72Gf6q8hgp89kC73YP3G2whrjcnHNj6pUxBvhzw4uZRJPjLjdShF17iMZnmyHP",
  "key25": "3vhAf64ABM75A5ZgrH9c7Q4daSicT4dG1rbmcQpVwoFm6gKgbSUjF2y47332EGBRgNHP66oYmfQrGjEncEMG6H9A",
  "key26": "3GpEns6tS2rmjrgUwUKVbxtmKBp5quceAdpX3xiYi19BNbzzQSFyRiU9ESpguVVEBsCjXrKSDW7wAdoLN6v3wp26",
  "key27": "4SEpcVTwKV8jhC5yq6uuSpji6wuJzjtKBZkvw2aXCnxmd65W9aQz2rTEeKv7RB588cauH2Y77QMNbNixcnRFeAD9",
  "key28": "4ffDDF9GdAJCeV3KLhYGtxh1RCWhwpcuNgoJqa2MSGBuak7Yr5zk46voGep612TGXoGwnobWewXEAEvCoXVZ7RuN",
  "key29": "5CAoGoF3At2ymuyfJPjyLA53zpT5wNHMtXm89MLrWpvxP1F9c6CrYkqsfgTse5mooKTvAqVtv2DFh26tYo9CB3fv",
  "key30": "4PPBnrmc2hqDq42Dg76Xu2xn1nUpA2sVaeQM6wocEBMWg22A6zn2Qu5JWGgn3jGVyKqgEvmDVdxgrf2TmBYYXAVS",
  "key31": "VDQPVA7S9hhbsqqEps8CrTScR7wq51pWpADNXFfBrJ8YUaRQXbPwHGbdhJQ3rCbsxMnixMZcirghhCQi1k8FUDk",
  "key32": "4C1YnXV1oCW7wudW4aNgyPtzuYjrcT9JuaRPRufvvS5bsWSHXeH4qhjdrpaSJfCa5q9Zrss7PbSN37R4hz3BcFVL",
  "key33": "YkwEEXwYyP4cpD3ov65wWbc2ksPUfByBGXodf6suhqsdFmjRZGCa4wuumktNWrU6K9BNqwqHsebCNDcMiafJ8xQ",
  "key34": "5utLRBAhBj281uNX59D4dTRns9NExzznZoRbhhSg99fRsAG6fwdk3aK8DoZ2b6QTVX1ibVkrLsMswzvXHWEiBewd",
  "key35": "22k9stEuHquP1hLcieY5dwxSG7qsxTNRtkD6TxHqcvvYHc3qn9EC9oGZwRAst7Tvwg5mgNo2LEqqVCDzkX8Hz9b8",
  "key36": "2TQuEv99Q9vj1zDDqzzfeGJLsqHqBwvRV5BnKmKRyT7eg1qDryi1iwBvpy7RorWp1oF9pUguSixQdXTGchHkUfzV",
  "key37": "2UCDB88pmvikuVxnb2QdotDc4X6ky3BHC8eoWZQgxAXD2st1g6MFpy6qy4qtNKxZrRCMpqywAr9KVorS3xArGekP",
  "key38": "45XTzk3CKGygNvpwaFoUJXkcyECDzVhBHKzSEiit7pBitZdakr73AP8TM7D14XY1m2kKYBvyVUMWjekFaqvTc2vp",
  "key39": "5YRQ1jThWFxiz1cyuojktDEVsdUqQLcWU8faJ3697QV43nMTHMGzcizkAb7G6ZWPVniJQCeAJE68Wkqgrajf8CVj",
  "key40": "4Gx4rkJ92pReEs2ac1jKFYN224jVkJxx2eKmDYP15WM6FVYAGj5PThUQhwzJAVFj4iRuLgArhwNQdSYjy8RSYGf3",
  "key41": "29cRQsVE8nJUquQBY33g7HckCSjJGFWSyqLzR4RxwgPe13u6mrHmsvVDToBxK1SHxzhh7y8sNvEW6n3SKxrxkaXe",
  "key42": "4s39xB5a2drxj5xM81CqpZ2ShLv1xEfBckKFAaei8cg2sJ22hUZTaK6tQt6t1i34xPVNBxo7qKNoCbpf7rCim7Xa",
  "key43": "6utDngiuBf972oEh5k64UooxMDXcpyCVdcS2SvVdgbzjSFDE2r72f6XDNmpSuW9amQHFvJuMCeX1gj9a8WjoiJd"
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
