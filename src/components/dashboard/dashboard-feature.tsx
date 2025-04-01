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
    "3eeqxw7UWTFvHVmeiKXqCcWUorFryiA6VZRZn4CCvVpHXr4uPCTDVgGhvRzdkqXxe85qB8KT7Bs47oJ8smHPU4dF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tp8eaT7n4wVknGSuGAwrE6ZJ8pKn5gt9giZaxFxTq4eChKB2BQpiGFdPq4vGTPPRuZwtHnRjP9jya7NVdL1rHL5",
  "key1": "3R2bo6Ht9PPN4f34zdQ1MmxWigGScrZEVG829kVRXC6upagHQLpXorcS49A364YnmNeZR5xxTGQcwNv2YuMTKsU",
  "key2": "2eoihH4yhVVkGDCsCJUX8PVW4VFidz5Zi7r8UpF15c9QwXLeKTyVKBDqwoLwH8fq2zrfdRGzixjHcu4jh73nYvx8",
  "key3": "67ce4CGqqRjhXcqTbnn156oy7bAAfMYh7QyXnpkZhJZ3QorjsMsPCduGnUmf5tnMkHdBciVxavei9yQ6MMkxe2v4",
  "key4": "2M4prW3Mhp4bJLjdsbfpc3aTJxPyo5WRrkzxuQ2U7ie7ttDoTwSbRNG38Uojc5UBmviprmNgUZfGxgcLhua9Cvii",
  "key5": "4NowZc4kHQmEm4tJz9YuS79qGNay4c4NsWE9Yx4xFaRocoAys5onsiT88mfWrBohKSryDE4vkHNsnmNjGncLQ5UL",
  "key6": "67HMwn3CQzFyWVvH71QVR2tdEE1eyzWcT81Sufy9pxEdtHvganV7mtZFDNznBEa9xUj8MfkD1fq13sts59K9UUn3",
  "key7": "5hDLQQ1thAyZDEy6VbTGTgjp1KMWHBLLHvL2dn8V77ApvMkFz5rwiVG1SbvJ2v3cKSUN721SUS3cPWfsrSQX7HYZ",
  "key8": "4xZ786ZszRbHFCDF12rkJjWazU9RH1eqFfTMmfiAgWkFCDTtzGuriSjoBr7UFbwuKYiCSpRhEx6TkjmcPnyGMFso",
  "key9": "MDA9RtdSFL2P3QM3Wiyu8r6A8Jv47EfWQ4r5GBNtdBNngHQGuYjXesbJeeRU31SBThrU5d4shiUfsfqCerj9g9v",
  "key10": "gcPcmuzfevKJbzXV1bHudzB2NqtnoHK4HTBmocsEkohSq4tsWJ2kNddYucLSG5z2i2Vf1ivoPqhvT8rL7DaYDN7",
  "key11": "4s7iFdFJQKvv589U1FMxbWSYNyf68WqgnxqH1DCFdaioLJ8uXJd9y3DYAWpfxC2TmVoUfnrBfsoByCRAcgFp454g",
  "key12": "4KcM2KogUsEpmyP9QG63D13UPizpfamJgNT6CrbCazpdbZL2etA8W7bTidWjyB998eGEatJw8mLtABzX3F4BqGFD",
  "key13": "2nWvRNmJ6t9WdP5q3V7497UMARtwAR8XJPmRBqpaPpXqcPFFkHqw7j54gHLjPdfDfAqc8tZd5nNewQvomq3RTXz3",
  "key14": "2rqnDLieSsMW8RT28nfwNeQSy4aUZhKuB2bG6WR6zNVBXN8h4zjfbNZsgtPsxavFJfrKCmGwWqt5yEG9pRjoiR4g",
  "key15": "4KyA3LUbCfe63WHkhyWTmRGXt6jg7Y3b2rprqButeJN7f5KgqK4mJTb4wKng7xf2RoVzUNfv8ddhzkRHAuU1orn2",
  "key16": "5B5wNhKxETULKc9rMKuATuisWEWXBcHCBjkvvwp37hucp5teFRj1vukdf9gC33EgXExEStcK93feQTdmYBWdSntR",
  "key17": "4zrAqeZUsvRARXLS4mHBH5iyytB6a9Mq7YzN2hC7eUjvv7T162G1S4M1Rh1vfr1qgApY6PrGC3Xr26c14MFuXu73",
  "key18": "5P6t3sndhN8mWRYxN2HGP2ypndVivpocnWiD55x64N7usANCowHYjLHBVYZf1KsKukL3Vjh5h4hk8sgBpNbwbzNN",
  "key19": "5apVnEK2y3JKKuXtHHYziCx8PmKTaDErUAXh2on5483XmZ4hUKrn8NnKPT9H4DpU7HQR6F5psDqybBTVJbrtt26s",
  "key20": "39J7Bx8i3WEBk6CT7qNB4c1ttx25J9fFEkKfzDLNJvMQyrp54HyEDsQmtwxz82GTgNozkroxkXCquCvorKAiXsB1",
  "key21": "2da1LRvayZX8LsPNHPC3AhJ9BHmg8B8Uje5g4iH4Nbv3zSh99CTSB2RyRKM3G4efgkxhwY1rV3ZabMihBe3gYE8Y",
  "key22": "3pE1t3pkeZmp5sAqtwc7NBmR73ks1F4q2Wzb2AhHyg8Muwaje5TDv8gaFiWX4obiDUMfSx8cNUaF8izdeotTF9j7",
  "key23": "4t2DEZqSp4YdBV5ya6RF7sfxoXFxKudDQ4JFuBnP3SuivkirLmRpcyyx5ipDctqEHr4pr5LvmRUYmnCrhDaT5ypA",
  "key24": "3etkN7nsihGNgWkNZv6izdr1sp3nFqjiCiPkRnnUMycEox26cBm7x62qLhVJoMoihoWjmr8kSRyV4rGwysw6a1ph",
  "key25": "2ecXALEdbuT8FDZ4tFsgAKy95N3qTkg7coRXrYWBE2FaMqkVAxnAMB8nQ7Khvuvnz6TEfPBu4bDnXYxuofTXeuQ3",
  "key26": "4S64gB4Fgc7AUUGarpZqHNkjMmAwQXeAjkJe4BR21fKL759E2QPKmuZxnum4cr64f7RuXKDpzZgTCmsPsAJ4hq3Q",
  "key27": "2PRW8CTveAyVfGeEsop6BEcjKeye6322H6Ae28Wh8y5AjhVK6hczSHJcJKppmP7bNkURyeLTiWKzaX292RjH8M1h",
  "key28": "arjW4TPocFoNWBYoXAxpBXQEmN9DMNtDwqBaVmjkfsXL12pN46ALbkQLPdaZZPfiCVgUduGSkNdge4Zjcoqy7WR",
  "key29": "2yb3UeymxpUrR9GDTiJpBtk2eC8vsUT3yhjGMXrSiynxZ3viSzPJNLNE4HytEssWWrJ3KPuppG6chPWsHQqPXCaV",
  "key30": "eZNQExom7uW5Z2fTyTzb9UvXKBctT1zrzJDSt3UBxWmd1ctQhxHHS4BPKSy2MrU3G4hb5bVUSmwyZpnryXPsss6",
  "key31": "23KVbs1ppfNwKeNFkJJvCLQYmZbCKNQUtLYoLpfWwTztgsDErBseafVCnusmGPQTbxmoX4CTwpBaZ2Ftebnfi9or",
  "key32": "5wR8v6ap3c43HZKV6ZMNbcQ7DH7aPyRsP5ZUhvAtZxE2TAw3RWGLQunLCGU5grxKrPRX5y8RHs7es1C78JNKziEv",
  "key33": "4e8u8QpkfSHgkdrxfc51rBw44AvrnmtBLrQb7zshb8ppuSLqQ5xVsgBcnsm41Sqi7xEcynwRputKabPzvqS1XLDB",
  "key34": "2kYbJrP8QLYfwZcd4MS8SioRcLxSpRpK4hvdxYQfatKV8iC399Zdc2fm5yGH6WWgs2mD9SjQnq1fDEPjK8CTG4Bs",
  "key35": "2JwyRbaPWK4s8piBSY39bFmoMeDZsfNUVLtB3oxs5tMD9ohfXTaYp6jt5XgWpY84cgtEYDVNYzrWyuRNQcLnTfjJ",
  "key36": "5bEjnVdGqomda9d3gv8AbE93pqFMn9V3rpBr2wcfz2SgyJVuFiam1DeHwiRGC9KtiFCcXM91S297xsW2dGuciDPx",
  "key37": "4HC2kiXPW4A8gpzzrTArqhcBruRQrQJ3pQ8CBQAvATZwZiEbXBZvRiQLYFWaWqahqDbdPmGMDnK3pwDgbBuWm9oa",
  "key38": "5zeRqwuDczxWqD4LvfdCDnqryfVMCGiTwSHymRXS8FBDUo535i7X4tcuZVHtGxceuEgv72kXbUyJk8cwX81ShWjJ",
  "key39": "w7q5huec5U1TSn5e8NEMN4yNmFxEjr3SKmgJibTe7SCkzjpsREFm9KFVD6A7bfwZeKG3i2dzNy1ST5nMohCdo2L",
  "key40": "2RrDqGiHtn5DAUiNKgWTiGdmc6JPejecDHLou6w1CuB2TUt4mzvUjgMWN5HrJqcFbdkdGZBqj5ra5jdsYTNPLLUA",
  "key41": "dmddUH4g9TBH9GdSXrf7kJ9kCXCCF9u5kWrwkCoR7dMDNBJe5F67PXeBKpgMsu3dozjDjGzLT7xFJ6bsjR7m3ZP",
  "key42": "3yxtE9DCpfLoB53oJxx7PX2ac2Dyyjdck3im6QHZq1DthRW3y1Bgp6RnQ5GP2h8hfiKtc6PAbfHTp7pg3Tv9dyxc",
  "key43": "Yc9Ugv1KfG9L2nVZgMyY4668XNTwsmtUP5L6jYD3P1RQzpmBfU5VJQsgLcVtF4yf7RtyeScPyYJKZ9QZzeUFiVk",
  "key44": "64PvCojUhQE25yDTMMwE54MPBrtKXSqFCDfVG35mRVbkYQ29xahpNvtUM4zxfyKo1nY99CZm7yv2EjmRHtMVe2ru",
  "key45": "2C9SCQH2wsrnvRwEsWra9uXkLmu2j1LJa5dbHNtPhxS4Pngh3TUn6wzLveeKEEyeJ19L3H615oWoW3T3s9vyzcZ6"
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
