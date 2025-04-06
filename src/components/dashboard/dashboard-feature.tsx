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
    "5mM7LWF82fqggXy8iL7TQXpmSHiSBNavB7wPxYtXpp3HLMkCcVNrnoXoX2x77QnU3xrBm4nkVv4j7ZqTkP5TFSQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwumU4FsidDUNqTTEKotPRrqE7CvQntKaftdh7bjX1UjcmViJW88Ze118LxY7dut9j9czSoe7FFSNLKjdftuK42",
  "key1": "3dpaLnT7QtHVNtz2QU2QuWUNNfha1PQxrWqNAxFVUgHDGdwjXveD3TrKGahYSfVxHH9rJNXBUyUdNMqmvzzjpKyA",
  "key2": "4N8aRqtDtyK1MLV6S6YRKkk2aahpW5WQ4HHZ6JYiXVcB9fQyHCNcfBu2magjsLeSf75DjNTByDfvn9HzYJxBzdMU",
  "key3": "2cyYGpMTQZjf6v8QyF6VEAFKe1fRWfTb5FuvGqeR9rCGSJZvRpgpqJjnRim383fvuoMpcqW1fy4nwAQAfDzerNxm",
  "key4": "5YKEhERmf73SPYnreVpXsDwtxCPByaj9HLD2e8j2KCCvz7Mo5ivc8TZEPrFQ2YMKpVH32JqC47Pwzh7KrgrYdLwz",
  "key5": "5DiMnHDoHUfwyjjQbG9aFoNmVNSPbisieEfdQNsatKBkhXMHGxtD7GYCatXTWkBwpXxpUD3guPJRaKVS9CU7EYTc",
  "key6": "4oJLoQLBq9RZVMLHtPf4AGRXY9uMs8e1fMQCLRCNDWQ3XREJ8vMPWYPrfP5HWFFpyu9JdDRCNqt7kESgJ9fxiyFS",
  "key7": "64DYd5oXuUAQwMMafyxvkW6cj7vc71juwiy3FgaFB631Ta1Xpafhoqr62uj9KoQF7QZH8p9sDFjVomfnnvYt55RU",
  "key8": "AUnVcTZDg8kRniuoG7UWhPi2CLuThXPVAbcLjZAQUdR3uMUHmASNWy7s37KrsDoCXS6bkn9xr2BSQRGzikad5sK",
  "key9": "KawRPTfWSnYAJyym8pJ5AxoYghycT4Q3SGsDMpM2zRECBZ5Eh1QDUWEfFitGunW74k4DMeEMvy6EKwaAkPHeXbp",
  "key10": "65KD8NzMyEdpJEAnNepRfbWjBHXek4oT9FbufVdZj6y2ccZzLHEpJ3DSycajpa2BFSCmpBiVfwXXZdYEReNDvCCg",
  "key11": "tYbqG13oR6FW2FgPHKRbgeaKwXoKpayFgUdeYQSx74zFgpPmGMuKZ6FmswT7qZsE7RH8fgbKUbLb4HQ3P3QQ8f8",
  "key12": "2f2ShRCzthZXM6wnyBD677C5zrxfsFnRgYdg43UeJiqxQwAfjZ9RKFd3oTn3u3rNgU5zE3aUms5GMerrcTHXHZZk",
  "key13": "gWqPUkmqtv7gRtT8rk9T4EYgPPNrQWjdHU5MxrzC5fSVey5Ahhs39J3v63y3VW1Q8cXeF7ohPqYxGGceuvM2kSJ",
  "key14": "EUzRnqu3Fv2mJzKt52JEXMDP5FSMBjGnTnXR3xKzmQMyP66xBw6B1rPKx1xrsRJXrvGuiVmrAoFMMuirGWXzHJh",
  "key15": "2xj5MU2WVSn3Crs5rbadWmJZs8u4njdvboZGHwwTRzy3dZibbrMfRRturDvaZDB7JgegfZfSY8MiacswqsCPj2Xt",
  "key16": "2thsXiu9JJExntwjVABo7k5bGuLKL1dvk8euKcwmo3YDskApFPXQbsMihiKT73zcNc9VMpHwTK6XsQZn9U8ti8p7",
  "key17": "4CSJj4CfqfKswBECw6xmrexYLYmqempn8gLt6YifbBU3JiHU2GLeyBmGWW19HoUGQ2B4begG9D1kCKpUPz69fNk",
  "key18": "5WQViVCQ8Z4af1NYVAcqT1Kr2zCqk7ak8pNoQFswz2UXJXaDRKvUH6gFP8hMTHjZyJqJpuwMx1ZWu58z831mDoqG",
  "key19": "5aJmi16UN6bKDmg46Cu6GGtv9cp64C5pvCWXxogkeXKKgAENZ4vksptgjqNZxtmrzP21wGmC7jNyaEJ4DwhT3vz",
  "key20": "4ZMaXu4KVBKtxATxsaepysyw7PvbyUaEwCztNMeYSd6kyP4PAwC28qbucxSAJ1zW4BoCxMXEevadzGduYCyeSEzx",
  "key21": "2L5Lwm6Q3kLHSo77RoeFSTGEsskyE2cFdKfTzhZcz3DhgP2GWA6i241pkrvGyCPqh9b4TATWD7DEGav8d8rRCVKz",
  "key22": "2qYFWH14naNHi6ziBXMYA6GeXhhCfR4uiocwwyGwdRQHVMsBEru52aZrRnhi36Zxvyo1kxPEkGeSxLFTLuKaEd98",
  "key23": "4j8Ssx6Xfk58V8KhwxBSoGPFRVQ8vvmv3h3S4KnTmAYNPBBnEKZ4QzAmTtMwLyoFcmEHWrFNgchAGqNSDvE4WwNM",
  "key24": "4CU5u9sFVQFt15zqWbvwEyFxUSUeGUmZP9nh4uxEa431NaYCAHU2KcFT4bvjzMjHxS8oN1cxPNY6JjSrsMfYGhVQ",
  "key25": "59ub3VodjccS8TdweGjuVGi4J2z3rAYeMgNBBV36Vek7s18NbjhggUqvkfCHazMLTTSUULPrcdpaMsEt4UUFCTST",
  "key26": "3zjaDc9muJaQesZVEbWx66yTcnHQzFLDUFHNfWZq5r1CygRX9YSHKoKcFA61epmSnhdFktxkvdhVcBNTqLnjyat7",
  "key27": "LXeZCRiRGe8cUjnPSiCq8QXLLGZXtGzjF2xojSnY7WsWFmPCQDMfQhdc8YYVFHZzdFhZxF5qiBs2gfNtCxECa5q",
  "key28": "2CZp5AWaVwNbAoCm8WP9krEh2kfqafkv2Lm6MsBPoirUsriFzxeYxSGmVpkxwuvacxcfMnRxDpvWRfuFvfHfFBt4",
  "key29": "5CPNDBjp3hvRx1Bx2ug9U4RTfffEKKe4RkFwnr5qQCgj8HN92CePmrLQx3Pch5QevFLEjgK8vnRPeKRsokyXPNUn",
  "key30": "3s8YjW6vWpKMMqmmsMWdtpTt9tyozxWx7GVmaMmmYq3bFCT6C4XqGnP9C9J2Yw3EYufwB2DMpjThEVQwLzvYtd6v",
  "key31": "WTaQbzjDPi7WjdkySvMVJ9emYm5qRNPrVCuEhJUQoWCtrA9Wt4LwtQCpwtDerKv7Jzo5fXENEP9yECjH9kNNjwu",
  "key32": "kTVxEuHwPMvZpwJ1jXVkBgWmnVARFYMUrLFjusEhVX5AbqgdgTzDzg1xtBvJCAB1GufZ1zsFy3tGW6FxVi4pXsQ",
  "key33": "kbCycCoRN7aDG1ETBz5C7gVnRrrvLmZeS9QWpZ3fdM7NpLUVEQzE4jwzB8gTsM1ujojBGBe9SbfTSVGwfo9ZKTk",
  "key34": "2iaDWDweRHhdx75FYXKmtSpKYFcTf4WkxYncMDgmW6YQNrvJKzQeJVxC8wKnRsqmSXsmpLzp3c4fU9Eb8WtRYQP4",
  "key35": "5w1rdhAy38X1AfCJeLAvaiMQ9ictKKAHCZtmt12wPJeAknweUM237v3AeiDjg6rKzFHZsti2LzVf7DsbGVGQUvsN",
  "key36": "3LbCR9TRux7dUtENCHBiYJ87PS8wsk7p5eWp78ecU8P67bcaXnm16Bf7CEqweBcAjTTwxsDCL89BUyA5EZiLimWw",
  "key37": "214U3Ha93nzqqZw5DUUKKqbymttfRaDphGDxi4JqFcTxW15hLFQgDbbNC5yThudWUhgCsiFmT4hs5fpfEt7PxCn4",
  "key38": "28odUqVPmtycjQDJJ2UXHNuTk1Py2jXuBYomGojdRj7ZrttehLB5pFsadr6P3FTobXizcTbvNp532WuUrEhGZPbe",
  "key39": "3dHeJo8HuhY6fs8hrrpXDSYyZ3tDUq7pzj4rHhK8uz5ZdPavQeWTz9zzPpJjtWWtSiUkRDWeywbKxRXxm8CY9GWo",
  "key40": "4t61uF2y4LSxZP1CJNT3pLpwsTJqwsYw3nLGMPaa4KYSk4TFNsSNkwg9T3LkWSgmshQ4FxDsM7d6LwEw9nhPy7t9",
  "key41": "4S4jLKcqmZoghx9x1X7dLTWcAs6uAHDJhoEDpWvTULJXXpS79wFjkmkqohNCrLAsw12Q8peSPtqv4SiG2rkF9KWn",
  "key42": "46V7RH3TpPbJBpKpK6ZfnEVpGRySYNvdgf9znJMUZ7S4xKhqAhzv6iDVeQmt64dK5HXV8gGmoYdFjsmKTuK3uLSD",
  "key43": "32UDLqMzHoEcR9USme1HNJQc1zKYmrDPqX34B46hChtUv7jHG41j2Va9AL1ZJ3Zp16ptUPpgX2yPyAJS7jfhys6y",
  "key44": "4wF43eKFMA9cL2GBRxF9s8Mc26rofDLHiS8nad4fPjpMNS2jAQf4kpJWzcQm5VdEF5JDBb8ktsv3uN9dy5CNi7QX",
  "key45": "4bZB7EUDQcKtoBcTHSYKLXzLnWhXCgArLu8oDswz1EBGPR6EFYkDhoqKByGXtuyJS83yZcqqTUGvp8BEoXw7A3j",
  "key46": "nWzAMPXUxXmtSr7ErB7Po3Q6KeubWHxHmeMPUKAENiiAX3CVeFVF83bsEp3oRwwaCpUCXVn7Wxz3uc3ugoinZyq"
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
