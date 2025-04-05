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
    "5tkduUMAtEiXR3tx1MGxH7vCYdz2MfCVWFaBG8Aw94mv5MNNoEhjdoiJy9T8sDz6moPvVqXk1LTu2B1tCpTK1RZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MN8R7HWcfsswq6mmba6kwWhtRNsYAYbH97GuqWssKo6cQopGkapCnjuSY9m6YmveC4WCoUEJwzXbjvRmdenkWWt",
  "key1": "4TSXzZD92o8BDHYZ4qS5NR4nFwcRruxWsJFsYqp8MxFPs5BcEUfRpWwTuYSaTeidm7TjTnkfsBuAphCQX6JGXfJu",
  "key2": "vbGqfYrqZLCoiDiEuZB2EymynmNBocGnbPxRjco9UrnxfZ98VeHWsZtHCjyAwnLM3xokDo3iaM498hpYfmFcxa6",
  "key3": "4hMGkxQ4AMtm3it11uBraoTJRbZWA26tntWZnCFYAH84iLkot9VBJaTTDpG1TMcjAYDf9EisFKrXZ2gF4Tga2a6t",
  "key4": "3nQM1bPuWMzwrHJ1kXRwZ6ebnMKhJd8nSGeFQxNfP14ag45hThfqZQxTCXpAp3QQ4NcZMp9kAa7388XFnBuxrVRv",
  "key5": "TgTuLuo9iuh19riY1h23rGUV4K5hYunnBCj2ZsZvostZRakjboX6DE62qWiogYeiZFai1Y5J1QQLSsd8uCCLGEP",
  "key6": "38UoZ67aTmQZvJ4w6MU6KnefKg2JfXrJYSpvLpZ4SKGSJnddJWTJgKjQ2HvYqgtFom5DvmxudnWp6Mjs6KeyNvcy",
  "key7": "31EYhkQmU5yGQtVVxJ3rhpwUG5UEJ9WiRg6zFccaW9QoTiey1awJdAxsKLsQ27AiqxxtJ2Bu1BuGGt8C58i3uob7",
  "key8": "5T2bmZnWqt8cmAHg4V8aVSkJVfeM378Rg1MdkyEH2aydH1yB9pdqAmHW1qUqUVGaSwscLXCeYW8ZKtVGQFvfnXYm",
  "key9": "onueEGYxrHiyA74xhLoeWztfAzkaFx6aR6cxDPYpCDhNE123KDFFBVGZQggWPdSUNqQCKS7JN2j3v4uuZnZyX4H",
  "key10": "3bHsopC3h9rcbKWomLBKz4cTAVvFVqwFzYRH5pjT1zkUHpUBXk7B1yYtpgWffeadN1EML8MUaYFydk797u1JPfRK",
  "key11": "2of9rjhzKPZSgucGonr9JjxzA5STMLKZNDqXNt4FSBfDbzN2RD6m1PYDZaF7GYKcBfXZ7fwwkHJA6J9r268SAgRc",
  "key12": "4N7ZXwzfsU3pVUPtdmYzCLTVWC2XNvKyNGkjac6w8XE2tMg7Twp5cjy2VrNaVrt3wLYygTR7NV5H5G46ZL3NmRf6",
  "key13": "53GW4NbwDoiq6ny3derkwhiFrrB6gaFZA5VeQYDayZMGmyPAabeTd8qyAtpfMYkCkAtPcXougvKVkVo1UgvtJGrE",
  "key14": "3foqKRwviMdbmehe6yvXKfjKj3W53bp6DQjhZqE3xDos3E6i2FZjaB2QovLi26dRYkQNX2mJnwYKyamKzxdfKQK9",
  "key15": "264d6PHynRMRYkJQDoMD7bxPx8nPuqdpLUJxZz92Wd28pSoqQpBzsx7bBzxm63EK8Mhi1JQLTtA4nnXo3PDebTWe",
  "key16": "47ZccdDUJXNu7vKkHzdDJqNSJaCnyfVKbD4XHCfviNYGAf7JV5JviLXBR2NhJDczh8vmDuC1G9JDEu2cYfkRW593",
  "key17": "4knrG3gZw5jtxf47k5RN3hbtgwCb9SvdAogsuFp33rv8uAz8vxHMgL4qqnnYQSo8j9Jfun9KEu9K6iyZJrSmWn9S",
  "key18": "4uVjQxeTykvVKMuitmJXuqHuTych2gQSppnXRawJZUf54mrP8jkRT5JG7gRUaZ8F7WJPerdhkAymJKmvoWkuZtPu",
  "key19": "28JF1sPkmv5Ay4mVRFGTRBTKD7D6Ufjpm35poBbd2KwH26QvnqynFAsgikFfvgmJCG9jVnDpFscSq4tTYLPFBY3E",
  "key20": "4uDndmYnQ36uNEsu3nLxNcKQJecdh7H4pg57DExxm1YcmQEs4VAMkhCSN61DdZXEENjockhFKRyENYjYMUFwcTsf",
  "key21": "3o6ut6v9Nj8EYLqRVqmASKK54vmoRZyCr4kAM1ddC1hZfkL2W3vVS22juwcD85stjuMBJveHrBtUUQuinFY6vEsm",
  "key22": "5RPiqFFbuMHyyu3NcmUHRNbdJ1U52jTi5LrfsZnwE4sYqFhPdWoUNtwsnm2e62G4ecb3xAwHPUGG7dDMru3pjPw8",
  "key23": "441Ris6TQ3k3i7FaY1hFJbXcx3umYs9STLPCA5QtxAdoLNVN7tPtv9whodpTVdktDpC1Ea6HUw8JwtLvKLGaNLHS",
  "key24": "5jm8Div4mWnLzh3FmStGYXFVV8ngrYF73ttT7b1eaV1Yifki2hwSKWJRUqfr3grtopP8nr9y3GB3WmCGJGDKTZqJ",
  "key25": "f2FTb3ySHc9DChD4HREK6BayR2ZehaLWGjvagx3t7s7bZSy7T7UR799EDqMNnRZqtM92zLXt9Vbr4X5i7EnbjRE",
  "key26": "63XaigTXup5bhU5j98RZjLB2SpYQ8cDJVRp6756njHHEeoGdtqhtkgti8iK3PEFqT2KccTKTD49RTRdBfifAZ2Cq",
  "key27": "5bJBjWLYLUt6topfbRJuBGfiemR2XTA4nAuvGu1VP8JbEtfhjYZ5nd823BVJtz5ffS6mE5FdRQkzThiAJ4ToTk76",
  "key28": "5iULDtQXgTTKhuwtaVKMreFm9h57XLczhH9zysqCjwdnDhdB3nbvaZh1xBG4ir4LQMGKL46WTackG2nacRwzNGWT",
  "key29": "3UbxAB4sbHz1TKE6dWkuUBjHB97x55a2nz3gwFusrbzDoaiYT1qr4MMky7VrpTQGqtko3UA1T66nJgrPEB8q45tm",
  "key30": "5HNvjVYWfScBEVPcPXGnSDcyqoChfdB3H3U5PQPUzusdRHxX99RZb96aaw7C8FANvLNs1vvDCY3upqSx9RtsnqrG",
  "key31": "4hnxx2EHE4UkDtZqjwtWJoNBQX6wgFMryEjRspGQTa5cgFBpfAmaVU6r18hUJo1LdrstPiGiY5AP3TTYcVm3ohf2",
  "key32": "4XZuYEqLkY8PgYVnoJRTXLBrLUjDMAsgw18NyQ3Mqw4xw3KKQ4QB4GxcnVuc3AduSftDnxkVsyxGCANkYxC1AA1N",
  "key33": "39Eq6rbH3fi8CzZ6VUnXsDCRN6s73PY3oSEWVaitPVaskoTmjczVbpWixuE7V3RsWUUcDat5bjfZ5ygdoGvhphgT",
  "key34": "2z1MHBY9qvJSbyECU7kJkVeGTNxbCeCTByrN6wNH3mBpjdTFoA4XSHrfZfWEoVTPwGEAKQ16icR4PNGv51yHKCmi",
  "key35": "3biheRE4zcc97GxbzXbc42DTuexnnF29XxSxoi6cfVhroosvV9NSBn9eN4TBRJoCpacxDhXVFygFP2wq124Wdftm",
  "key36": "42rtfEB8o74RALTNVkeH3GoZeC4K4N26nCgmAmzzGoZCHch6xcsomy9ToVmNizcVkYatRs6SzR2bkA1GcPXqtZVN",
  "key37": "64mbVoBJ7x1fFB4Cp7ehxuVBfmccDxH2N2iQz6pUtr7pD9LvDK49femgyVpyh8xaieppDa6mpci8foRieRmGBA86",
  "key38": "4qDRbGQS5c13ZNtCJF6ETbHhEUHeoWR3Z7MxKbEVXJmZt3CRJZEzdukaRz9Tv34u7tLZnggYcX3TgwQYvbif3kVk",
  "key39": "3jTNzs4ipewp5Ug3duLM9zmhAmBoFp7Aa8y4BukhQuJ6uVCBSrxGBzV6645zggMug87GXu5CMDFLDcnFjKsSi5dv"
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
