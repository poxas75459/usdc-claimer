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
    "kXXxS6gp3jCLbDjYuexaJxcpy2boBUfEcv1F9C59vc5eWmJK4mqUpFM67DDDmJBeNXqbLigAi3CT3S1TYHtd9KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h22k2egHCxLDH6LNnNsxH565rP58p5xeLpuUBSBRnordxeHdhMXDecXG5JBj64nZ4GVNwhESLmktJWvTq7Nusui",
  "key1": "qzvpzw5feFHLQX6EXtoLE1WXeToHyrERv4hVqcmkJXaetfGUF5UDi2uRM2Hga19odzYgfWmfFr3CAmWNeJSLrZS",
  "key2": "YuZ6vpzH1Y31nx6mgSZ5UUPJYcggeppdxEbsGYxsaHYr2csWvfvt2eXufkjVikosjDEEzQEyfznCUCd7PU8ViwE",
  "key3": "45GWJGUkNaRbrpJEq5PRbiXvhanZ9H6aPYc7fzDM4wWbYkS7p97BiQwYPjJPfapDrznoeZQcgbbbkcpQDD2R36zK",
  "key4": "38zVooZ4UB9BkJdPMw2a36BEdhSv6Fb1JDgXbXPQHuBGuiqf6vBfL4jnmWWhC3Us8BKMxzw4rpwiq5p3Eghu9b9F",
  "key5": "4SkKQpRFW8UjotmWWo29SUi5HCP7GYZcv172gwcQnPKvrydJrnBNQ26oPbS2BDAQU7JZ2KGZGzP28G6hfiHRAUBi",
  "key6": "yPf3jehiVKSeonu2MTP2EN3s69ZBdgLFrJuZaVrTZCk5a1944Fj9AaCHhkcwzitZTzTj1E2HM3ce3BuSyL9XNSs",
  "key7": "2aZFFWtJhX3ZWBMTTu6RmvYn4qya2AHPKu2Tuh71gsbz27nfshM1gMYtnjtrcHxPQMiKgENvpi3yUChaJt77cyDc",
  "key8": "9NAoaGtVvrN8L4UK1aGyurXbGC6PNfDDosLgQxFxWxi7g7PEvy3fGXohWFsxCPJ1W9FpKFE6rMohHhDr43hgF89",
  "key9": "5Avj26PHnVu1DYsib2Cez5DDu35RqUhEjDqGQ6qis56aF4JZ5FXM6GtLBSoZ4xzMMQi1Qf8dy4Exk95Kkqc9CQzf",
  "key10": "223ioMV5qywEn2bSdxPp9T78hzeEQQC63HJRZb56UEwXDbndJtEyUv9ts332Ercr9SEgx1EvaBMfJDVPY5emPcVQ",
  "key11": "671NtTbAgsbVnss2exRCmufFkPax6epWe6qjD33VNgw4H14DnDrqUuJcuHo8v23uTanp4QfNyNCDQTxw8D6qvBL9",
  "key12": "2FvZMapQziPZ9mEQTuVGHmKZkLzzSRFa8BNFRnAxPki2WpcpuzSqn3fa9fDBjveXFo64ccaYbhMBXL3XhAbVMRGJ",
  "key13": "2qAAG8xYQGKMusZaX41Zvi3NmLsqqus2iE5VANwtfUgK4bT1KZD1b3hFSmz6ooXmKVVr9JL5iAt6ETwNcSYjEJnw",
  "key14": "Zv8d4YMMFcLYuys4wvXaQSQnd4945h3fgLVYRPfh8GNfend7qyytwPVmqPgNGqHFif8kTznnBMdebFuos3MWJka",
  "key15": "4eHZUyNaHcSvEyRj25gkFCRTBytocTMsRTa3iqyicR5uv5iabrQpR9tLUywb1rRXMwu2imsVT2Cr2EqGj3CS1797",
  "key16": "578Awu5hJQCKowik4QvTX8qz81C6fUNRxgdsxZtpgpNxk5Gs2QAfVDEqRYW1J45u7rJdH5VKD7LCmwpr5qu66jDf",
  "key17": "3reCbxTxfR74tfZLbRj2APyE5LTsm9Zgy8BCap3oFjHEHeGjGx2xFisWEw3giDeuzovijNuUjP3mBCeRTYwtwYHm",
  "key18": "5ahvkyUY7si7gqGE3der9DooFcsv2dLcE5ffPch8ENRSFcREounQTeFA1k2ABNwuB8KYeFCP8x1GEgNvNJR9skmQ",
  "key19": "2k4adFiRmtLmxpNiqvFKB3debHfZRtxmbuPyESkakrPmao7GZoWn726Mq77SCQros7H63BCuvwDmJ3LTJqU6ohG7",
  "key20": "5JS7G5tUPT64GaYERLxQQeLJZc8N6Hvxz1KXTEULch5GF29gx6Vyf7AJnHLnAEqP7QADiELL5C6jN9XQut4yx4kG",
  "key21": "5HR2rSQSSQEfTmMTUXq5GSCwS61Zah2oQCrSD3HjwdfM2ehb8zHkKQ1XDS6LkPU4wyiEgxuaCiJw64bDvW6VSiEV",
  "key22": "2amRQFmKB33HU3VqhxU5QUJ6u2XLYu2pChofo3LLwCJ7GY1Y8rQq3Hxdc5fSDbqAqWmZcTDVuGp9tFSzYjUkQsEM",
  "key23": "5D9N87AodxrmjXLvhZUhbfSP72pBFdn7Jdc431qKhaw1Uu5rFtAG3wNEStY8irx3a5XQMi8qpsQpU85cW8jeFvqR",
  "key24": "4Mfs6ZH7s18WRr1Hk38CDUgKH8MfWKhzQuAqgWNK1dw59bMb7oMwDGrY3RxCKcPchscXfR5wg9P8qohtgZU1ueKT",
  "key25": "5cXQoENT6RTaYhQ1dCsDWjxDSv938BtE8dxJoJXLyFKN9hqvtcd2j5WhL6p9LYsWcFt85WM2pXUarAAsMiLty5ad",
  "key26": "3yzCRSZSgPrFBQagSusqC3t3d1aEdGUceZQHuFPm38ugEF4r5NuzR3TkawuTw6Bb8Bd6d4Muhq6MWvEf6VLYWxky",
  "key27": "3o73S8pVTZgNBZ9QLsc4yVNNiwEuJTHNLBBk1zD9DuKSaX6JJUgoMFxXeAgxwXYqzbdmayQdB1SKtpCNDQWUuTZU",
  "key28": "oQRfDeaL37fScvFdJZ6xH36nHVwixdZr9SwxQyFucyd8xvVmDgZ6A6jcCek2V3f5NbYCEUCQAkKvtbaACfPSaAd",
  "key29": "p7tCTWpTFz99c3PEZtu4BrrYpBKse67beaStN3XrPD8d8onodUUKepg8HGP8tjtKmrQxAY858Dv7oTP7zb9zBow",
  "key30": "5rhrgbKteZVAcT4zDnbs51WyxmQPbGBX8TAbTxNyGYMjMCD19vdj1yVbEs2PqCq4WeKxJkauEhyUD2XqoP1yNLoo",
  "key31": "2kbbsic1CKYiKXTnnLzYtxfuoFou22XYaDGVBkdwHdMUqKa1Cw2Y1HKHj7soztFYqzaYj1n9dTbQjp1mQVpSA7JG",
  "key32": "66xV1fFB64383FrcUg8FyUjLxPsb9f692tkt36reFK3kAx54RzDrvv3r2LvSanULAf7LiY4RSDwgzxYjLxPtDrEe",
  "key33": "2w5jdDvqLxgcfDYycZLCQMq8FA4bLT2iZyUsdVUniSkNYGwM3ooYnspBU9kFPzdTqkKJvGX31RiaGCtYoYtynFVV",
  "key34": "3Ptvta2bwxurvaPRLDMzDZrix5MCnBtdqFY25mhPe7BuGU2k3bRdkuYyyvVTxxDg3ikgs6EYm3QYo4okKcMV3Xe1",
  "key35": "2EDXFSB8rvCfgVJJaRyZbQkkkrrvXR5rRWu4w6ywp3vCfU3afgLBv4EMEvyH4g2KcgrmXyhwgwHPAppfaAdo9uER",
  "key36": "5UR62BvG8m3tYUjPgyXU9TiHatXgaLsYa3XrsDycKthq5xJeaE6AhXtuWGx1iJXdpxpwfHearDAYrttbTthPw2UH"
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
