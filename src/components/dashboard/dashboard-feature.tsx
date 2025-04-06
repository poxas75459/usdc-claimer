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
    "4aXupUPVB2CsXXAg1xtYxj1sD7KfxQTe6GhqUNBbpHN4diQrW9jLFhZVMupxvQf8MbR3GgWFVdPS9ecgFpcmmGuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kjFW3jj726bF7cWRjuQmXB5HkN7Gce9KTLcV9Zvxo3emB7LueHrbAkkU1rqPJzv9BXHHEQeX7W95dEtPYu9L4f",
  "key1": "4Nx9S1hLEE592fAbwDBGGUUoJTuCoug4UYPPaUsoDQtaJs3gDUEJGWasZWcpAuaTxw7U5yFBLbXy9f2R89LpWD6i",
  "key2": "iHepVtgZakTsAmKAr2FYUGckV4JTupARt1hpoEN5Qu8CSyJstBPv3mdbgvXft8MsnPFNTcGGU6aqUT4E2mh7Xz6",
  "key3": "7xxN1A7qwZJojZ5UpfRzGZXA982haRXPMojHQE2gktegpnYgmqsXhTbCs6MAbtnUBAECg674KHCAM69jmCG6TnP",
  "key4": "wotiaxrp3j4xn5SmTZAT5ZBpnjcQ35BJ1Fn5cnhdJ42zH7KK8nwRX3Yuhu6SmPmBL6FYA5vuXtrf3HjugTiMN3f",
  "key5": "5H8AvAVZ5uuQ5noYSoAdzvtGDnG8rtV1mUTKvCf41RE3vu3Q695K2FTH6mb1u2cU6dwjYc7mMYFnjXBoMZL14zAo",
  "key6": "3S5UHwQ4Ph4koKwa6XRvYSPdaiiS4gu5KsTs7StW7mAKy7Wr24ydWySr7agWmsXyhtQ1pfgfdw4JXuwA4oEjfVBr",
  "key7": "3exgMTWC8sHXdbsvryWqkdiFzVTRcQqq26uUhemftLXW3famNmPUj1aeWJ2g2BotWXRs1tDXckJgEDd8M9HMqfVQ",
  "key8": "2vaxCSRRhh2yprJeGSD8YjACaqYDgK6kdoB1A4thNkRePe3WZLsKfVxLcZTkdXmnNmQaWfV9CHdkQQWfQP3VCEnq",
  "key9": "25KkY2KBT5VDPC4waR8tyUKWSu7ZoYMigP12FdKJmxyGcdro79rw6BWL7VQTnT6RyBMPeAnpPPEbpPfgDuATCcBn",
  "key10": "kRhSp6jbmsgNgkp9ZxUUjpmTEfFGnq9JyUjEYNHJu13AWUFSmjhhYhZ36zheZhnNN1JkiwXrJaTMGBYGyztk51e",
  "key11": "2ohpzeCcxtDVwJvFZj6n4cDkuFNN3LfKrHCPWLNjcDKE78RZfyJHsc5Sc9khCvdgnhfcdhqdGrDuL4wfdH1A9yEu",
  "key12": "4kbgbHBmQynpGFzGPmzMPi3XeEfH6ejschW9MCM592bvWGjfcHZwHc8vS1wgtqaBwEkcrQfKzsXiAdWSJi8SQAeV",
  "key13": "58oTjVkpuR5vF4bCCZhoF44D1R9HUUru7Z8cUv1mrCfroDkPcphbtxx6uGQwSuo5V7sf4LipKc8DN7YTuHm2QS8S",
  "key14": "5J2fb1aFfqVCofrnQZ6vnw27G2R7WKfsAj2R4HN3yUNXG8EidiMxCNn7tVz2cXq3NAKAeUWeEs6eRkU5JuTmFhry",
  "key15": "4uCk8sXEAnVLFn19rqVdyYkWXP3Ctub9ihNqaqgAtPpCfx5YGuetEQZS6SfnsVN8w5qGHQhCvGETLwcgVpFjffpb",
  "key16": "5A6P2HCrB5UnUPoDXMfBKoTkDEvnnZJ6dFZ3QEQmLoeW5wGmThNTM48krHQN94GpqEy5iYjSUiV5BgPEATYiP4CE",
  "key17": "3h8i4zeMJn4JBHG2ztKkCb3LUtZwyiEdwSmN2gejGASqp6pV8TFN4tCLYwuWyPZX64yMCaXgRYVC2YrTMaLT8y4Y",
  "key18": "4uqiJRTR8d6i72hioNZzguk4bF1iVD7MjEeKKGYxJeGd4Q7MVJiwARuxA4UTYgpkQrnHtnVKr7HxoKRqFjjEA4YS",
  "key19": "2WT7kX6dJ97STJDudVF9woEzVG1zjsv83WmbMpanaJnkyX8yNCeddDnZYZiopt1GppfJEVdwL7YFK34gZXLAudyw",
  "key20": "3L7aoLd7Ua1otSriph8P7f4fDsE7wcJaY2zBTMH1TfboFCG1o56xMmVFvE8bykCiQeCP3iQbzHmp8PyVdPfNKRM7",
  "key21": "5yrpJf6JC67d72P5grx3oAhRZQCVxexhKuEj35hzcs4fex4qBdJZFnwXSjYVARjC7JQP8EPq27A4E8ehwPoUGJKW",
  "key22": "2r92M7Si3PzN5rWFpVqFZXNMdp2YZyAneyxYpepPuVU9WuKLDApAx7kB7JpHJPsp4vtv4n5pT57jKpHEWTsxTy2d",
  "key23": "5DWHx2jZ4orNfGLRgBW3P3vhpPqcfEzQzEmz16mrPoHUA5mvEuyDcaqv6KiJrQ8NTU71QP8KSxbZ2Cb6CM1ogWQb",
  "key24": "3nhDrnFPxihVjQ16fV85YjyQFdBQ3Kw2aLvH93HZ3Wo2T9u93xdHzJFHWCr5Y6fTQw8kgLWED8oTamjyteTCQfRa",
  "key25": "42pqVCjNLTRadofnS53iXRysm3eaWK2vDXTw6PrPhbjHoB7FK9MJheRmQYw9bMMo9f6u1yWjyN2z8WwrvGPsjZu9",
  "key26": "D3RCKLr5u7HFrXZaqrEoLgQTFWoRFde1k22MS5WerQhx5LKh2kVqn3ZrXQVkUavZHspCW2Co51hBjqD249dzna3",
  "key27": "52rWXQmcsgjhyvXwjvjUDTeSdqpkePydJA84t2npAXp6Vc8KfGVvRhmzkoKkTgJ1Wp3MCv6M8ZFi9Gduxb9kANXo",
  "key28": "5R12FYbty8MoA9BuS61bmzzh6yd6VK77vSVsqizgbZ86aWraG9YUwpa4rhLwn5Ar9JKwXR1mfp8GSoS7tBhrQ7AC",
  "key29": "474TWSdadB3nkfbnuK7YoYDs9ddBSLxAT8ft6Gqgu7rpK9sQo45ks4ALAL31E3qbSwdDp2YZTwXaZqaB6qEE525t",
  "key30": "3zViRY7ReYNRAAE15F3RXpw1CwBmm1Hv4qUYrT4uUNic9cB5RpbQPuFMNbwGhg6wzHB7iU4FHnKPR5kZFhZgYiFi",
  "key31": "TVoshKuXiHPV7D9JjbLN7YzS77NHK5fnS21rKSmaieMEqfFbyKRdFJRnr8f2EgsZSKQDpoyDKAYnCsEHeMiHTrB",
  "key32": "31Tmdhz86z1vWBVexTGv8QU88i2F23vkp832uRFZ4SYWPoBjXG1VGVfLGret3h9MSBZJpRv7PHDUwvSqPeGq3SyN",
  "key33": "3amLgFTzwaySRNG5MiEUszMNeF98Ni5Ca8omEs8TV7J5RwASPC7oaPDmib88MkhdJcW1nR43tdNJcz5X7xNH9Mh9",
  "key34": "3La6vwptarSJ9R3zAah9arF1MzXJVt214uMsKwxiAjin71LXhGewGRYCPJvgxZmYitAaXLz6pydfjjyZvuhFkiYq",
  "key35": "2Jo2peY2hchxmcSscck1F5rjXhCZ5AdGQYPGd587XNUbdw6Ya777CHGoPncu7HSuoSahzKtvMq6JR3AR9zvrPXxH",
  "key36": "2wDWJpUWVSYnWgqfJqmUhG5MUbQfXdazvBLWiQ1xjpKpRoaJBL5yWUKgKaXj3xedeMP7tjijj2Xzpu5LF74HE8xS",
  "key37": "4E64fpmBxAJjWMJLRzqScVKgU8YxNhYqVafFzLK1PC14HSPr2zsVGcvUkdh2C6MAQkAptJJb8AVt8rf3sdi6vsvc",
  "key38": "3WNmHcjoYtYy4rFQjJ6z8WsVgntBGFnPiSQWTRzTDURLzNyJSutcv7frVf3qB61xcSyKtQXNhB7Mt57gYZiHNE5W",
  "key39": "bfBK5teveAaLLsrVH63MeEJmfVQoCRd4tRxXjaSE2fzKU2srvkbZwVJyF4wPgA4TJ3ECnTX1Yp932hq4vdkvCEw",
  "key40": "uzcTfdEwkpHWGPsQiRy5FvP4dqqkCRS6S1NbtCjAMcA43kE2uqkjwYZGRXxbarVB31n5fxSKM5dzMK1XvagFMad",
  "key41": "4ezw886pBWcDmkFsiSq3AbYtDxG7ynUCFGgbprRePSu44AF6XdzKPhChX4qku3TiyQJCbQAe3CdGPvFwF58uHx1x",
  "key42": "39S8nR9Pgpe2kJ6teg7h4XHREcmpCFPFjY6dHzWn5KcsDeeKPwequd16RKxYMrXBYfgFqiU7RnnutRuR1NgkSoXh",
  "key43": "g9VumEFXRec3P1s2dVFGK7G3eEtT8qg9TrGgY9EqSMaDXb7iTie6XVfB8weUjWNX8NybETgqSoRDyHApVxavhtg",
  "key44": "3c2VE7zZjGxMbvNqsziPfvbJTDnwmbL3P9sEdeguZ3JhK96S1pMJf9sf21PxKMGS1ZmY2n3FQfjtTX1qDmEYk7Vj",
  "key45": "2m1hWrrYCH8pDdRBe2aHSB72ZZXozzMP2apVFnH44xZ8g4EwRqbiEGm61ysqLWLN2NvxTPL3yxNpHsNKskngNDP2",
  "key46": "4gsdTAt95ZAane5eh6rUqRFcKLCXUwiPNZfnmaeAKy9vDCf4zckhsw3QkCFn4r7EMZURtV37EmvLw6YMy611FEi7",
  "key47": "2AoAjBq1K2rj2SkxXLQBMC85Ac7e3DeJN9AxGQmSsYtKJkU9JCGwj8imYEHHC5zmyzFMyDGgEpEvdQJ6q7bu7N34",
  "key48": "3MJsKshCcrmKuUyvYC4KSCrZWX9ZK9a52kt1yoZgqhHtjwjTSgewjcDYWN9jiAhNyTwUj3rkZDLZwfX75fNn2eX",
  "key49": "DK2hxdVuRR8mKjgvGPP9b8dVSugcdQwxQsqrnd8w5gtzLD83GMcs4isUwj8EQMovb23Q1A5TtoMZJPzEYaZJbJM"
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
