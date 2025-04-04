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
    "3UHnNofEZAFNo7B8VNUS3DnsEBPpUjnh91CAhMJjzs8TqCupyCjuy14Vv8Ne2o9mRJhed91KhHvx2f3Zypk6GLXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWcZktBGrGQdnGvA585Mz3BCQk4jrBjAJgBizPPKtSaPQ4y7aR2YDpr1Cjq7rAsonYZQxG95pdMBCDbCGKgUkYp",
  "key1": "9cqcbXDCPPPjyavgTNpYxtAD3RDY9u1trWuhBsNRQbwtWN6tiD7D4Z41VmqrRQkyNkoD4a6zosCpj5x5sCYiVzt",
  "key2": "4Dy4VmbhwjEGZTrd8eEHYDq69frS3ZtMV61qCQAULBL48stEwtWuRaQG5CE4StHGZAFurTDEHEPKq5dpjx4TcbAa",
  "key3": "5tUzfEfAHbNrgP3mCmR3qT63Z4XS8zKMo2E9LmVDezhMmryLtGDMJKefVEDYKJhSvZztv1vd6YsmD3LuekXDLqhf",
  "key4": "44rRA1TNcD7Gt6NLxgWnHJmhtcWLPUMYZp63YUPVVfFWmhtU8aYZzSHwQyKspiwPY2Fu4WyeYPLeU9WGLYdtECWY",
  "key5": "26fkxVQQNeJSzAayv4vBpkMt9cEg6uzYnt5e5i8fQX2DBX5q7YsiuLVch3Q8Ea6SrtdCwHTjAL1CGstADzhddkjU",
  "key6": "27FqLVoYGVreXH9nNnst7Ui42aPsu7VBCVWcy8uQBUTkHrze8UVaMq7KrXUedazcYEdL7AwfeMR2enXzp4dPqEcn",
  "key7": "53LNiBPy6eKMVDCzTjdSNCTEASeojZtGNYwZQJ5sLmGBNB6StThkQgVPVVBmX2Q7uE4JZ9XiemEhcuLtK5LVAxgT",
  "key8": "2S61wKreovWwfY2pBi6shTPUESpveAZ1wf9X5GE2sE7HRUKiSCLWot4VkHWEWNKTvHYdKShNesVeme2eXEDpwUQ9",
  "key9": "2pofQc15SoFa6ToywzKpg92wH4eM1JkmuM36tS7VG2feh32AFSm8vADnjHQKYJbAJKyzewenAwJchV8khFKHxkZT",
  "key10": "5BKV28gQ6YGzMY5bhoC9N8yNp3yMRKuAXm2wW3niHUHYDv3wWKFa3YuXP9n6zNrEjQeRUcaxaKPUxefXwgMmT9uf",
  "key11": "4sC1oc7PjL9HzPJ6Cq5dSN1saod18uuitaNKxxVqGN9S6yReaT9PTmwYgxb4GmYQ8PERSJJapihMJh9YLU7jJPrS",
  "key12": "2oaKKbq1Ph6mJJ7hhNawBViZsn9utuYm8zVeZsnMh8Qk3rMvQki2dg7pZLAi4KJ4vcMLxes7be6rf8vtQJD4FSmn",
  "key13": "26j7KxNdfC36qJpnkomtYjUhNdrou8qxfxnQtDZH1nY7uRGB6kEqNVi2LRtPHVqZu9eRp5cbfrbAG9bp5vu3HAdN",
  "key14": "2Ev45GTVMNY5sYU8gGc1U9u9wjQEyLTjiqJjUCx8AQCLrSZsQsxX3mEKJwtoKD7vaecKvXiXvCgXCDJ7sF1vNs1r",
  "key15": "35qmpC3huaCp2x5a8mQL9kuKzwDbap8bn825SCptQqsfYxmaNh3MApQ3ETNWgGreSjMSHvBgmfaJ2HPwtCQRgKsy",
  "key16": "5MBFvsD4vhpcUSSDMFG9Vj6DKDmqmAPNy66PCT92soKGF8Pje44uNW2C57j3inLnqKwCuXavUTVoT8dmVpysvh1g",
  "key17": "KRdvt3P1VrmCpNV816W6pMMe5VbsptgaCmRWidrrgKRUEqSWk68YgdPGpYXTfpYHhAVn5FpwGonmCYAG8sS7FLy",
  "key18": "2q1SqGymF6VXjimgE6nAYS2WjGDgEUKKqsioJ7bPKiCgzJpzDcWSKh7iCyGDxewVYHW4oQyjwk9c9NE25RvX1v5z",
  "key19": "3bQKWFgRkaYZLPQJjv6TjSkZiNYbu7k2kN41ud16dkX2ZP58EomnfunbF1ustgYak8kGUJp67AkVGFJMCv6aGWgz",
  "key20": "D77h4LzH1ckutRvG76cXgtVwYdMF6MFMBBmZS1k5CEtm28UXftQhuq5AF8P2dqKFPaintXrP5ATCbLiejKtqUEw",
  "key21": "3h5bTQoAp65LTubfGvCx9ku4FqQ2AdsfRFRo9jBAsFkrcNZ6e3pWXnXg2S4gSrp2narkRQpQsUJpNCvUiSeaR8wM",
  "key22": "54vYJqgJcnqSktRCSboeHexer5rrJNVt4wMqEaJhdxwYqY9w1KWjpoCub7rxeA9yVwUZeFMKdDBtKMw1ZAihmAPk",
  "key23": "2VQ7EYCfzsUjpxj1BmFgYK1ridNfVdsM2J1m8X2tZCYJGH3ZjMSSMzV35hXL6gZePppNUtrWzfmTDc6sF5V5hE2T",
  "key24": "23REH5Xtce1zDWBFfboV4GGWzaMEBa7uXhaJx4FzmHx7skjWdjqPwGdXKTvVy6pyPtmpck6pBxd3qpaoiJPj8ZfS",
  "key25": "3TSCfYMsjkXig5t8E47cu1E2kHQKwgZJVse43eG4iBAsYPzc5io4mo3mxYSj8nbtmce39xvRQtEEmHJ2DUrjMZcH",
  "key26": "431xMkZoRSzGbjWgKFSh7CMjEvUxKtMgDdgvttMX2k26wFDeAesTTe8Jsrq3q5rZK67w5aZxtcc5snrvyL23ZTt2",
  "key27": "4Wp2iqjErH2MYyXapW8wm4gYL5mZMbkakwfGLeWqGz4xJbd3P3mnBP4Ykka22bAjQCTSe1PE9WmKk6YBMaoJvE4v",
  "key28": "BdxYAr6fdycyqGS9MQ1YdezYnRXhtXeRSUkxv2Qjhd6boaxZFr83tciAiAzhponca5awnUFmYPrBXyWcRERU1oN",
  "key29": "rADrg3NwS9PPD7d2ySNoTL6PXq5QpCRaRfw8KedTKR8mm6LBCAn5hH4kqHYUSaA77Jrs3yifDa1NNX8AWV7kuRh",
  "key30": "5xmHuf9ZtbcAykyhcw7HqwTBZ7uiokUxZFxmaTDHuamzT2ZtqbVRPzo3WQEMvyTUNMfF8WNMPcjTgXHevqsfYgSK",
  "key31": "2WciPKtZffBBXCRRMCm9cDTZssdKv2pBiVbKNiHcP6Kbo3e5t5UbzWn7UNWRW7CHxz8K9r77SHgtAuSywCPfigkN",
  "key32": "TKwvcqEPPMgehwBG4jn7ziuS92JDxSYxxytQeLqFr1ieMdKyohhX2jqYjDwH5qRtoNqFqAsbSgCSdN1LFyWGYgu",
  "key33": "3ZmSmDZTEjB67UPgp2nuSKbfkMga538sd6V5FncQroHfG4iyurm6DJHmmtkUqiYLU8oHX2niPrwXCEQ1Yp1DWQkH",
  "key34": "3ACkd4ePgyxwZxEPJa51mSMze61NT9tiHQAEz1AJiiCK6mDiFeKmZTQWjiM4bAXntyRc4FTFjfhDHsPyQQyYPYUw",
  "key35": "hqqx92h8cqP8yP7AAMay4Udi2hPYUXP4GHFspV4X5mNvQUpdkp5Cg1Tepq4S5QfG9yKFGmmmXAQtcvjN7ohhymC",
  "key36": "HExsGDMfa5d4TTsvbREXzgJDAAhXoWbJ24TqzMD78yoxQpRw16zj9xV3QPg7DCmD41fbQMkKRWLrjUEh8o6uxJ3",
  "key37": "5grco3X94aG1DYM786QkKpdoSbmKbrH2nASgkLrGmErr2SCH1aR2ixRni8wf5T6LYAbFQrRr6XebCwbc61TEpdVq",
  "key38": "4dZWjHAnrGG5pzn86Jvk16LhoHDwYr3WKYGHTYbp7UGYCYC4LxeEo8t87ZZsBjWMz9HMqvy1YuPd4DzCs9rX1ZBs",
  "key39": "3iJZeCWmgMHqQiaTfiQ9UDUBkzJw1Ac2GnYQjmjfdfR6e7XhoYTpmX6ntRpzjR7jdaGPX9QJ8KiyuEu5aocZGqQ5"
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
