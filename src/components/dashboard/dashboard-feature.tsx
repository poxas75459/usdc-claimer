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
    "5Erjb5WCAdDwaH1JaBG7Lhp1isHT55p3JaH1E6vMwCXU3W55zvHMaXLYMxLs5FGYu5FgMQqYEGmL9FKJZKL4NthM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLkAPPkV5BLSnrf5yVeRmvcZqJV8uzbzTYnXW2WX3zNCL6F8eYQmTGCKauPPCtvzKZC3as2nKkwjaut1EYdeve2",
  "key1": "5YnfqJdvihwyt4Pp6aYMGusUntvs8bdXuEemSMjBq29yo3yFoagkhRRG42rkhY7ruEVCSmeF73neLaREQZXNxfLT",
  "key2": "kPux2VzGo4Rz5NstbiVP4VWCQ6Cqj1uWZd811TbMEbqghqoaShP9DzEBVERgmbxAEWzrqDGSJMG4XfGwnreiV8b",
  "key3": "4gcoPXKL8ZnQuDkZ9vFvTSs9FUCRncg1p67y3EhcYArV6bMA4n9bo7aEg3vBhsYuLCFB4dNQVxfND6ynCtSCFyUG",
  "key4": "4WBXtau1N8Ld4fSfZZUZtUNCNbrCp8PtxzF44UzZGTvMzaZbKMYMfg8ssHvLe9YoZdJFJu1CGgpB5g1fhnNTPDZQ",
  "key5": "3KSqZMpyet4mJ8mx5X7epTYzkXmkRobcrZmt2aCFafi2axieDx6eCLFKqtgP4R9hgBHFV5pGviVWZiFEJVRVL3JG",
  "key6": "4kHFB6RW9sYZfycET44tzaQL7xDfkTkWScFskjNwrCwjpqf5k7kit39S4xme3rgz9axpYhoLuciL91VKWEUSZRw1",
  "key7": "5Qdg6aLkjnY3oWZWNp3unCGXzUy6PSFGykZ7GENVMAzgUL9icp9LjPQZEDgJGLwWK385oigP6si5uZ24tyUtGiuE",
  "key8": "24dP1SNSktpEm5fYQMK3C8XnNcnHXj7KKQrmF9rr9KhgnHVsa5RAjMrJyERpoR4ynMvtsCgmCFhUZ36u76LZ9Kx1",
  "key9": "5FYSPbrpJC5AiQajkQitmTk6YPyDdUpFvhgzYPS4M5fydfpBj6vmMw2MmQmDvhrvfgP6FtvMCq6EQr3oM6zPPAh",
  "key10": "jaoPGcnhKrDkH9V9mr7bZo5GQwkcyonoEiGwDai5HLyDU6YmaKWTmtpoXZC6N37apZP8FEvokVTfzBeL1HaP4Jv",
  "key11": "gQnYwLoJzXtzeCbC4QBrFyoRWYK1DBdRGb1HWSTchE2vfyJhwnkWHQnfZD99k6Htn6asFeM3LCkGdKC9doxi3c5",
  "key12": "2Rasz8ZLVSWDgsq5DN8waC66C98D8D4omViHfBiHoZUHJBzEePRcxRbXkrBCMBqEX181rKzkqrBtm95MJdWKE5FQ",
  "key13": "77oPZP7zwAWeMs88ggwYafzEd5ug1DGw6xFGjKybR4K5bDGz6vVxTAUNK9oiZdPmPG3X31yHYZwPtSuBqF4BYvM",
  "key14": "4Paiz7pTwbnoZxpw9Tm4LsU6xs9YMJcLySbjWPbpHkaKhUdKFW7msupuqHtXDZeikmN9ABRdZznySuyYR2wEAf1",
  "key15": "5tFrbJa1yYmgRRY5SNGrfNNKNBZ2xiaCoZyf4jXrDcDySBP4dAiKP1oMhDWiG6nC2pgNFLgQEr9VmqEdFqkXFJaf",
  "key16": "51a6s8Yi3J9TQZWNaAPnuZGL88PRVuTNYr6HdHny9FTTBYBsLYVJ3PAjeLP37z1a6TMEDtPuvK3mMtvao2ieHvMB",
  "key17": "2dGcycZgWX9Pj4S3pvEdCRw9VS9aQmKfoX2YNBJXTVu4hXHWWVNKngb5H9rjs923mZH2qFD7tYnj2FMMLvjBVJWa",
  "key18": "44kXuLZVK1ASPX5CzPckJXjMqQLHENAJ3zA8G91CYyVuv4z8xUHncsTS9A6AWB5priHKze5aoxxfrpj8uELuEgR9",
  "key19": "6HveC3raHaDChKT4vNdJzv9vu27g8X2SqQA58R8b7LmYUuGUCY9yvFoxcUeGJwBFutrY5QFUVuVSVVQXss6DFAJ",
  "key20": "5ovLq7cUKYJJPVcjSYyBh7tN3gfWzRe1NQ6m4V639r6Jzf5KBEYdt5v8uAcxoUDpfnRS9v63SwQzRjEtyWWTz5o4",
  "key21": "4odSiouFBg4MhqSaaD5LenYXPouXCzkNU77PeRPjxw3hkEsZH8spP39zpJ2dZPcDgAht4ABAeqzksVpeQGMnCukH",
  "key22": "Xb8ZtfA6uknQpVpNbKhXYnqMu4D8mFx4KgmMQfyEWkedZYTnUDA4jJVUwzfAZiXcReACPESeRDr8znzrPuYMeFS",
  "key23": "3WziTWQGyp4o3Fad2eQyGycNbzQ4QtVsmTdZc97Q15DH8RFPkSNbSo5m5x5CdRmFGbV3eUSdVpz34qQCLAjY8K7C",
  "key24": "5A8wTvaPYVL4PeWPdqN4X5cQaMmj6eEFmyUHZA4jKpgyBJ45dkir86D6AsmsxHfj6nG1WZkuJgXkyDXfjLBksLZz",
  "key25": "iyzNxpgRCU47n48sUY3CZF4hh2ZB5Ts3gTZvutc1VwdVKBo9B5PB61ubxVMEsK3K1WABFaFPDPW3kEeM5g6VQFL",
  "key26": "2s2CKi3Wv38vdnHogmDGyjgboZRTKCnVQFF6nFYW7MYoddkjoLcE2nGL8KhCrDwTUcdW6qqBUt8WC2UtiQPxi7cs",
  "key27": "43qcc1vtkEyXkeFftUnQLYewENoYXq2GDMA5ddN6w91ayGZL81ji8QzmZ5bctqzCcjufpWq492oTQbrTUViFuwRK",
  "key28": "2zV4FqQtmqQUhH53Fp6UUDannpQzSgjuR3bLbMzF5ePEym6vXjfBBCd2hmaDADHwmXpBviuvXb6aZCgVhBJEcbGN",
  "key29": "3zYxNpP7nuDA5adKR5mvucwDNtLsC28GUNjAvN9HUz4GwYMAtdnZmHwaFPU98Pak78fiGSWxFGDytRbWMgugZm7j",
  "key30": "4L5HZxhNaWqs4N9WEueHRfTSk9AAaKQYUw9NU5yyaox6etNbPpbbjJ8PHTfxkhLnLXvCfmG9QoHbcuVRUMtZAn2e",
  "key31": "3dn3Q1xQu9Ch1hxGSbFYT7Lj3FfHfb2FoZmgF7QaHTUumzTY3BGPGwCBiXycDCr87Zki1YKhnJSyupF6okki3H7",
  "key32": "6mSB5BmsNKVWz4BMHd3RydwZZSkhKne5Ydk57MVmeJBfEtSSDoY1zGC3k9gkSbgLFTHUtstTZteRmHxF4PqRrQC",
  "key33": "57X1RMgz2dNoAJM2EbDMHCnN8hmXZv1TgjFw4tESq8Q5cHpmJNBi193koH9TLEs1fv18Wog27DetHKdWPer3RDZD",
  "key34": "2RTq7vwouKXsVMV8eGCgkxWowLrZj1rnwNnVCrRSJGS8PPnbj2npZxXu7QYEMw8ABbEcKmzFtQDAA26qeBHu5Pq1",
  "key35": "2dmAy4apFrQ9UugnnddCH7uKe3qgKUvwMcE6VLRVAH2uX3BKigQWpPXWceSxk7FNdF1Rxfbg9hi2MDi31S5XWRMg",
  "key36": "4BHVTD91NpYUFSY7DF3t4ywp59LThRpbkRS74yf1m7WY6gpGt4V88pok1DmpoMHBgskb8a1EsJf5TcyGHfbXrm3g",
  "key37": "61wbiyV4RgQKodMiedt5QGKZyrveSGGNywp1XgPvPSVinbbqVk6EGPjN2ZCAD2SZC2a5JR42QfAbWhbGA4NGndYE"
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
