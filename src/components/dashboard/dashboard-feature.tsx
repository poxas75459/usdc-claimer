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
    "d7CqyNmdgKhesGjz2LzLge4FcgMXmg6kFz9nu8wKdndZTkkWAy5CVLvB67j7pGMcFsKB7eQfnRcf7jBMNqNoFAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AR2RTPvsVnh4GX2LEZdDMEJeBhS5FTxVW61g3LkWna2QG3mCthaMz446TZSGaV3zzRZk1DZaGxEvbqzT4CXhbiK",
  "key1": "jQKjakZTRs1mLy5sj2o7sM9r7zwTgRnQWh3ExdEQyaiF5G5gWVYtpoGihawUgBo9yttm4VsVxKc6JhKMY1SBaXC",
  "key2": "3MwgVeU2EPRFshu5kRJp4inEg7zG4qVTa12JhS1WkS5rLo9Busv48nrDgucWbviNEPm97wjdt8p3LWBJuu31sWw3",
  "key3": "2RjoGMRxrcxgJcFmmXY2fY1Uu3RDyvaNyP3bipMa6bA38ThBqfExsarMxPKhq4QN9caa5Xg8dNBGtWy3N2cT7onn",
  "key4": "3D9T99muBSgpsXfj1ftj2iZQoJi5NaCWuauKzfNPDT3YPEUX5aFKrXMp8ojc3hKwLSPUWz9VqgjNrc6Ct2NEuHFS",
  "key5": "JSZ8tcejm8jHJDQj9BiRKrBKkDaFZGE7DbrUF3nRKPvZvCNCUB6MLw6gijjFEm7jqLCXMhJErBios4W65uaWqx1",
  "key6": "5xvHwMKd78ZZToqMvLEzFY19gsgJEKTgH4mxNwj3gnpiyPQUTjuE7LW1JZcohpzWPRtuTckA37DSkMS3fwKoCbow",
  "key7": "3RuBbesPMdXnSswK622GQuoyjnerA1gB4H98i6P2Uu4GSuG3BM6fFxieocN4LMrNHaP1S2zYdWYejKHEdKMXzFmQ",
  "key8": "4XGuQe9T7Z6umqmmXbUMC9nzPfBD3YJGKRAxmiQRcEM53ZSQSvjo9cM7VCWnAKwuzM8HY4EUVNLASmvq9aGMmDzH",
  "key9": "3vRBtk7VpaCA77DGvQ9RZtYeZxga1jjTFjm6CtLtwcnfKXnsrvQ81VbqjNfuQnim3HCPSbDpyDgYKafTdPkJXUQL",
  "key10": "WJ6LzFEyaqSq1mmXBqNDeBzZb2jag6o1Q7bkgBWSEhnkkXYp4n5N69SNv6Rys5HTsxzhYNDGB8GRxMzcPJw7N3h",
  "key11": "4B6wD4CnLPua7ZujwJgv1D7FCtddHiD213PJ4KoShp7wiUuuFhLh6pHLgWZVP4hWPDLP18h46rbvgkxRGemdBsAe",
  "key12": "4uGAszYByea1KCZX8C7VJE7ezhvjCjSxEUuWqPiWf3iyr9rumoLUqXNE7o24dFFS52PWSBVHamTXqxddsmfFGtvR",
  "key13": "5uh5vWZ4RBcgqhtGWgsB3f8HouPYMSmDVqi1QXh4oc9f97p4FAWNNFkFQKj969cC7NYKBAex9KGnw1B6vDNfi5fv",
  "key14": "4HcZyqtKnCVbPmdantiv4kf2iZHXJfpd4coYVBauLvGcnqVHgafRmkpqQPvFKV2btB98wEiftcZnnk73CauEZ3dW",
  "key15": "3sAZDETRvTteoVywUusMe4BKrPWmMFXGs1Hvtb3ms6gNYvxAg9CGSXgDSNMjWmTa92yvLVZ9bcB7vWxkNz7hyerJ",
  "key16": "4hT6sBPuGukgxaDPmWGJS1858d7q9yi8ZA4kteVvKFHCZ5zbYUWD35ZHnaNJkSwPeSXDFhiUbNpWxZaNwFfoRpyc",
  "key17": "4dzctnK3cFQDRYVz64UpdrNbfXAXcNkg4zxgRDzfCuPtWinfKyqDvwdncTayu4RKPtyhD1AnURgZSoTdqWuuq5yq",
  "key18": "4RqssqARrDkxPUddgvaUUugg5L9Kjebo7xCi4P8ndPKE9Xeuzk8FXWVDNHRy1oFVsrFZQjXFKxm2zLMkjM7qzPz9",
  "key19": "4v8E1w5tFb6YgbroK2LySuGtLmUHLD9XKV1oMjzec6MKYUVVPLqCDvuxY8dwk71DZ52oUkAmgdFpEptTjauiahnD",
  "key20": "RmC9vHeTPUQxMiFT5iVT39ThsYr1fYCSAZkCMQcmwc9uBrWsCryACrubyLCVsHPcnRAAfgh2uR74j7qzSTdQRFJ",
  "key21": "3dT87tQvgaoFcSLkkAURwWGE1iZx2j8ytiBWhC4Wwp1PxZ3FLGixG6fXDGn9HqHSQmTfCbiAdLaJVbDuSLdqV87g",
  "key22": "2718p68EhLqtDqUWN9TYtWcr2WbfnpZKMVuUNKA72BXd9yYzcw5JnUwJyF1vhjqwZ34UsDuE5encCAivgmEnhFZL",
  "key23": "28N9xq1CjotAF8iJ8ELsBUs18wk4WHjyzdgaeB9pkveU2wo7FuR5v8x4WKFuML3AFYvFeFMn7E4UDNoyFViimGX5",
  "key24": "4EPJNg6fNDnbrspnF3tQk6SRtwKQBiPR55j4FGsTuUHzeFx3MDinaaSjB7GgvfhpFmGBzDfJRX8LSGD9JPN1G4pt",
  "key25": "44zHuGCAPCL9n98xkfmsSvYn8jyd6JwLJThjAHvMjDNesFaJKBscWCe7KM4cjpoiNqN5CQWm1yqD6LiN2qKczNqb",
  "key26": "4TBJdkWY2BTSuxdpGuyefSurP773PyedKZpXSfgJLnXNZL2JF8v1MyDYwrCXQFRXob2MdT4sXJMyM17hPTDcDbgQ",
  "key27": "a4NwJAJLTfWCzgS8tYib1ahab8orHSVx921Mzh7X67PKVWRATYfsFwNnroXGYLhPbphtNXYVTKAXWazCNHQqgvf",
  "key28": "cgMXrfY2aL7L8SrkVHGebD5KeapxcaJ894Aj4cCW5PFN6jPDFZrCbjtYN4N1E6pp7LD57UC8N1rPE1rLdus6K3W",
  "key29": "2hfJ7VN4ncLKn6NMxZBtf86nbEt53stVcsybm6GeuNXmC2RiaramYWyNSgsFSPatDZiQLbYfzupqCh81X3QyLRt8",
  "key30": "2x3w1SLC71x3cke9hMGzPcHgXe6r951b3ypiGFMcDkuFcZvnURG752szWspBmcgXrBgbTB3FbZcM4LLEPJngZtS4",
  "key31": "4zSKQME6eAbL8sJaDt1N2AyQi6nDbKmBz1GWL28JFcpGVmHyrwPstE8QmeWcN48LHaTKu4CC1GCApCpc3C4V7rhb",
  "key32": "3QszQTS1poKq6obZiucurVkzx2AbuSM9So2MBGy196GsXn53gRrgB44iWbzCyahBU4t1ihWgxQZzYoi6t6K2Mm3t",
  "key33": "2h7qPEAhBgD8ydYrA2niP4qGkQSSPSm7QXB6J3HdZEbzLHV2c9doFDUod2JwYrzGUXJMHPZqrssEs8Vjm41vRje9",
  "key34": "45S7g8H5wY9x4eAmm9wPGNwZtX1jff8ea9Eq1jj46Tdvt2bC4B72ysddYb7mo5ahfFqEEEVJvPSjLT2hHYfnDmvK",
  "key35": "dcuJsQfSQnSz72MZeLCMG15a6hjXhkj8L3rWKG1AMi83kDEeKtR3E7BQDSk2vtDVSqYUarnb6fEBdzFV9BzReWz",
  "key36": "48XeT48iRnbrwj55csgkQNCxnis4NXtqDui95CRR8peFijgytfgh7549NU1HuDJHXZqK4BeXk8zjiMXxp8mz5zC2",
  "key37": "2aj92nUHfRGbkesgyALCvJANRe5yu62DVH9Py2fRTA3ioK33S45kRxm383CrRbxsG7FzUNAoPZeZ1gHcrXai4XaV",
  "key38": "45KxUnnTnw72foFA4YG7S8ipqR99sfFYfHNBzibcmiHnXHpX1jADeKyLMzpoxaHfpgMGb28Y3Wx3pdNNfj97ACGA",
  "key39": "3G9dQXhHriZWmKRvQrU7fHStQdqzCkz7f4tDpAeedTUtpdUycD4GxHtLebCRyVviqMRj1LHDTvM6q155Nc9XNDLY",
  "key40": "5G3893YEkqZ4ucJiL6DujZ6YBSN6zhaQnGXoSxd5HwXingYNoYMXrYwBCgkPuTC2jDRJiuzDXrBem1paJZRPC3ak",
  "key41": "2TJvMc81N8pHf8qcomoQNX288wMYhojGHuTSpCKnN5GVPQkHYevL4Y2DhmadULyqLDD6nydWTxQUEtCNQ3eZrzbM",
  "key42": "2eQ8YP23DhghB166fHS58iAVZ4WUwB1SRcniCzhNsqL4GSVzG9o1aa2yD4DjDvBq8BfGo32jzh5nrGHNqVMPi9kp",
  "key43": "36d58bnBqymJ5T2U6Ru2XBDUbhHAoa6TuUkGzjhkZ6Yf4Ef1p6MmV98bSpxwKYJgGrMGfyPZDnVNscz2QxAYnCx9",
  "key44": "5uNW1PzcG1XCJN3P18PmX5sQdLivf8kqVbNKF1MDcNNJAwZ3DBBtq1xDRXZCUYARJRqUdpgUL58eCUEvigkzcThK",
  "key45": "61qMJ5eUEiCXU5ZcDrrwJW3bVpbgN3REGaQL75jsHR9fLLwAHNRBYvRYD1PupQCuDfSvUvhgUZN5GvStL3qaxXDy",
  "key46": "WeV82K5NReGCtKzJ1msdctegRXWzyncCPcBgcmCjBMZFWKziMXVA2BXzwcnZdEUvi8bwsBQohZLiGBq8uSnY33N",
  "key47": "rWvp3moDU6shf5gpkLAUtsMqBR5rcsUVfaWPczKRsaaTMnUiAhAibD8XrUT1CpKP13qBfVboK7dNYrVSrgqy1iK"
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
