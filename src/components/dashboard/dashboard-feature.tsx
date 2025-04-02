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
    "7Y5iS5acVC4q16ajJshM2jD4f91hXW6uEZYsYMscqRRpSZb99Uay1uYpg1WB3zjtMA3izSyvAnfN8fMq3xbXcHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Micw6tRFvSVBq1XNwERSmugFMfmogF8MhVUBHVyuyXbuMnvHiu8kvqTCamtxCCW2TUoT3jVRG3WLDYz5vjhHdx5",
  "key1": "34KTi3XyM83Yd4oBPQZKXD49eB6VVfHTCtxgs8uGPrAm6CgoET7K5xNneUifbyTrUFZphW4nTZjaMAoGhkvTgyUq",
  "key2": "3UPVvbE7chMxxUDRtpLzJBqhd72mDPYCgsh9SYa53LSLAddXuQG2Q47snPrdK71NkXRnN8C1jiqVNqU4bgM9Uu5s",
  "key3": "1FgDASSdUS4RftsGA8QSFd21AU9ULTwGJ8XnfUWtsWeJPxAH1RmZihepuPdCSC98ULKsmKHeYezeT4PrD4YJfbm",
  "key4": "3p5tvJ9GDRHJwvBNXb9uX7xvVDEtRRwm1moSsA6CGBnGfme1Jy9L8JfSbVWX7URDkB4zfnR13v6xdQvcrHjQbCuh",
  "key5": "2L3a5nftxPHP4WycduhT64vdxLKiAPRFGksrmJErQJ5V3CZXbrtJ9xrDSukeqWMVs7s1nZ23kdJG2rf45wGttNZQ",
  "key6": "47taaDxhkPDSqDdJqt4CJenkGKyAFbG1cg4XpGCNEBaWe3xCog2ivw9zrnjuD4KmxTyDsZ7KbiTc3VqJfw9i8jf3",
  "key7": "4jw6Cz6dnH6gMBv5VKroa2RUWzKCXub6sU6uKFbpgzhNUV8h4yJtMK5xCjqVVZZLaNWrMJ1zUHsMDGAN24UX4Kij",
  "key8": "3iwAk7PCWVzUQa81zUoBqQEfFqq8ZJqvTJ5mN4yicDgCrYYzr2HHvYiWeX8AVtdzjdktR2LKrNtSWocj3iLVcq4h",
  "key9": "3iH5Qvuf1FF6g1G3GCLDfioVmzJtL4caCRGaaopwxmnASc7mGL7Ggha9w9GXcFXkgTqy6yk43d2mpjFmEfSBpnRX",
  "key10": "hYcSdh45ACTCcBQHHQ7bgutpVq1jhbQFXdooPtUK3prcPK9UwzbqGzJ9Wn7NLZYVKXX7RpoAzJkwqEUMsnrsKt6",
  "key11": "kMoPk5MVU7nDET5ZYNcqe2tL3EFvCLFxGtZR1K6DGW3JHC3rtQ9asu7fhhhK9L7LhWvuAV5PW3Da1jXEL8bFMD9",
  "key12": "59McuJssdoMyaCd8dVc1gDuwcTaUzrXKDUJKEFNhAcWexUqwrDbqBBCp9tsbBJENyQJXhdNW9UE2UTYJe1jESq2V",
  "key13": "5VjEJxeiGK5mbNwYXV6WDPXPoZMWNiJmh9jZNhL2jBSQ1uk2NbcjJytiJBQs7RUwVDXaQWm9XqDTze3i1eearqPV",
  "key14": "2wFv3w3nafbo51yJZhpU1uA5knPKvDEfHCNomMrJaWx6VrN1ydyicwTcjgDYNQ1fW3rexBZ3eMvEGAA9D9puxRBv",
  "key15": "4wLf3mmVrcHQqZaDM5g3stApPq4fxfD85HEYHAA7ybbgvQGYKXk1k5vksMPdKoe2Dx4oF7SHCTjrhiPPc8qswDp8",
  "key16": "3Av3fmGsffQFFwdo8XwuCpU1pLGmSohXGKT7sLqs3kHhqLJUEKAGE9KA8qk6qnzvN3aQ24KssEhYeoGyTTJVAGoK",
  "key17": "5GWYtgsmBqU57Xh34hBusQ1YuZywVX1WaJntxze167XUecnL8zcGzD2KGCA2tnnMAJ1GzzaNBPmeLE9F2udV78fZ",
  "key18": "2Fc8wcGfi4EQqtYMK4wKGDeiAV48Qasoj7mrjKgANG2odQg8N6HEjmsRcRDDQoxSLqyqA4HoetBFr3me65vnMVrC",
  "key19": "2ML42mHJqkXYB3z162YxpxpzCT2kz9fpa8R8yBuTgM6eDGrqcibakoPG4cRF3tatspEy23QKpwpxuWZxPYUizT9b",
  "key20": "XMiWc3x7osx7DjXJccVL3XjUsGtmGx6bpSBSg9PvehFSmjJM8JYCwEwKEZQ6Mn6twG9CKdWbC6x6T4v6DhgWWHS",
  "key21": "YoJiaCTPqNp2SqjmichztkmmofQbsMLUR3Hhd77ZTQTTcijHPNphjKWzuyrmAEm9bPAec1tZRgV7sQCWf5i7b8w",
  "key22": "3bx2Sa81fqB73HWekj4w4g5nWgGZf54tW51NLfgxV6WsBySws62LcTtTcWBrS1F5ggh5mUtW41CdbphJwd2fygdr",
  "key23": "sdwnVN5jYKoddKsjgmM3D4aZwpYEbpcNcd79zkS9GxLhshQFo4bX6hQqH4dbeeNF3tU7WqNDbvRxenM4PVoRju9",
  "key24": "2MjDfE6YhZazowvXjXN2Ba1tnsv7YWBTpNXYY6VCntqX7cW79HqNVW9ux9y4Y8dRPX6UwM2YWxsycLBJENQrChfH",
  "key25": "3vJpPo5f5pqPiKkvcQnoFsXcTjk8BSV2HUgXFweNXnUP7cGbusytyJ4miEssQsmebijUPckdnyjnxTbr7icG8rcv",
  "key26": "3wbbYSJuhVRpJtJCm26MMKJNwK3SHE3Nrp9h3gw2bBQJhE98z2ho8Kz6cGq9yMrYGKLUU7UNpZPoCfoM6qFScv7Y",
  "key27": "22njqrsR6QiY8uMAr2NLs9qVcpMNsfZZwgwd4EZGUKBiv5M28HStcHp9b3wAC7m4nDDbpaJcoNoeMHUdauaNXUxJ",
  "key28": "58PV1icjLdg6ifAU4sNQw6iVkaaoxcp79M9AHbfq66xVRvehDpioyi1CsCVihD5jsUAav94ELViyqm2xFKj5N9A7",
  "key29": "3LnQfJzgBe9sFpY23X5LEW9g111DsVo7g6sMiPW7L9S8j8C72YGmyNmb8fmcNrPV5rs7S6ufxmAHAnBg7uJURaHL",
  "key30": "3k8yr83s91Zce6cafwx2NcswaX8pZ4ep2T5FYXv5ybKDmfbFQWwyQv7Y1EPsrvCCwwpoqkfNpUT1rmkSpD9DApc3",
  "key31": "3ESypdFSrBQ5FyMziGXCvCsdEWTjTo7Gp9U9vtqcswdA5ViXiMgkngweGqyPSKmLVwNdx5Jo8up9BwAq3YotRSUd",
  "key32": "5MBrgPnkzTbziWVM2GDsVHWNETXPzQwwaEzYV4aQ1fanQu9v2KPgLsczXdYtzH4DxHsuhPHxsfUECSydkeQspg2y",
  "key33": "4ar4QagVmXEAU1pHqqDo9s7NRBM3ejfhL4ZFyu3wwL1CC9FpZ5THoy5HHhyw4HWjGTixukKXrSoSDA9xrTTfjTNP",
  "key34": "g1fb9aW4gfqQu9K12yh4kuPinEchwQvwgEY176MBeR2DNo5eDAFDeuuUDSc2tyrmizDvTcriaJQyUH4nphhN8rx",
  "key35": "4bzWLKJ6qFyMju1gh3b3TADgYjQ1FUnjFSB58hBf15MTSQCUYbNZZf2AXzj2F2DHMyFwmha54hXnofgZFz9VUVyB",
  "key36": "3rFTginqniybECWU7EACk1ahENVFUqyrUjtjBYz58vDoES5dQPKo4XMhD45rQzmPmhLBYLcUWCXUaGz1d3CkezQ8",
  "key37": "25YCfX4t87v95efoUFXKXnm3rD3496b6JVbqn6bPaiiLzEzt8v5ztEipCYw79mo8ao4uF1t8SYphNWmQoL7pUyPi",
  "key38": "5DzT7WXBa77eaCkNoKrC6ckjCpzRQm5WCg8jPHbg7UDdX51Vuy3haqUgXaL73T15VdSAKv2PhkbLqRAkDgHKrnpc",
  "key39": "2pNfDXXwePm2LkE4McW1CzVN355hwrKLA6HTk1rMtDDMfFPMXx7yffWDcKg6UyLM7oJDRYw1x4yii2C9p2K6qqZt",
  "key40": "3TJVmtiHheagd8rWWu528q59JM8NLni2D1fBBde8WdTmLpprKo1Bwu56ps1FV7kkaYc7bvKwQNWJiwdnT7gvzW6W",
  "key41": "2pwToXgzWSAfuacpnpTu3kVxzP2kSDxJCrGocuajMVVy3sEEo3Kff2Pqu6k7C6AVJkHUhieYDt6knA8vaHxcFHo4",
  "key42": "4E7FRKHWjVwqgSGc9QPmXNw4xoMQDGVRVboSZAVWUPxnd3ZtyMRvDVAm65khFbbsJkmrd7LkZaet8tWCEJJTBNrr",
  "key43": "5aD25onzV9AbUdxWffytYS6Mm9thhicr13UfhJDExei8K1RNKwUnPcBM3YNBcU1jA52tjH6KvRzCpNLx7btYhqWh"
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
