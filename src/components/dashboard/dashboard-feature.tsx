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
    "Z6skpfpikHFs13TTS4YKWNvhZhfaGpNQCLT3FW5gP9ZmUKjWAwogxRDWwwSBVP3gtrc7n6EXBY4rkXRE35wKGwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcXvvZ91eLQDQAjEhHZBQuxA14XAhLtEEcAjsznXP263SjW5grHjbCAjCEfDC6xSR7XbSznYQ1sDaqKtvtPeQM",
  "key1": "3FNgL9hq7QaeNbufvva5K9wB1x4GbitVAwGc9EdLLvGkfqHEAzL3UHfMvb89eUvQ1Wmr9WreMLCQ5JBmCec2Gxmm",
  "key2": "3nfCQ4dWr6h91QPvxF29MDdGEqbitfdHjU8fCw7ZUNF2NhSwnXuVyz3eR8SU1uAyZPqwyd5DiaLdS1K91weq2Z5B",
  "key3": "4e32yVMtFj1TMs8bGbuhpmwweNjiPsef6hEfE3hnkk3dysDnXhNW7s6AP97wtHuq6J1wCiu2kkTB4TAd6ZUHm7e6",
  "key4": "rVXYEbBHG3jgAhoAVaJtEJhjvzLXUCF8PJKVMEWpSvb8PxioMjtEST16G7Z5uWZk1WPot45u8GfYUDKw6g9hfsr",
  "key5": "3k2JwgC6zuVWQszzuq5zwcSj6t5pLE59GEHeXyVPapVTjXbUXmVrJPpgTimkrYupa7M93PWLTrxDCDtSRxjCpYDH",
  "key6": "4EWHZWsU5kyqEHoRdvs2BtCoLXepqypzxhJFRyjnVgEenVQgrzo38ePzm8ZeGiffV48tJBaJy7cFkFJ6fzCjMYhT",
  "key7": "NBXqhUJe2TBiiuBhx3wjcodNeemFwKJM6863c3bBZnAjuLUzeS7Gy3iWV4W2uKjeue3sm99ArMwmGqzs7Gkq8CT",
  "key8": "9wPBXRzZn233pC5BWizoudRHQiLCCeNrgf8XibCgRZqfFcHXtkLvw6pLqyJQXd54icNVJiczGG5RH6UQ8poJUdh",
  "key9": "tb6ExmzYV5rniH7o4dSov3prNDN9CPUbzHTV1Qxn8kh1Z88sSnP8273DTd4En8djXhY3N4Ahd6Z516xnskVyn67",
  "key10": "2JuHHjvYdQao7iVJbRGcfc7E45msrYEEAaYTxNDAoMmqhE3paUZfhRdcNQ7v6S3G5hv4VHu8NFhFTRyrE6s6EDZg",
  "key11": "DkKP9xPMvDtmBTsV5e4ecnttU6TuiJXZBJJKRPxeGoB6mrpY8ghmNMHT2DiKPNvxjCrdkvFchv47F119tWVfe1o",
  "key12": "43ySekmv9Y4D8Rb1z6R4rPSXA8u8pmujyXvHPKxwh98ezMDFdrvNdMN3cviqJU2rM5wcHQ2gwAdLzxkviEJniHeG",
  "key13": "KgWNuvWpkrM3gkTwpJP3QkqU99QuEnqMq1usFVTJYHVAnLHQn5YNK5iu7btnmgGWKnnmJ3bYRiBzKknGzSiQTNV",
  "key14": "3G4in6PN5273dTon86N7iPouee5ToF1KJqWjcYT3gwg7Fimstd8DcPgfK47dSSecSty4f6UJ6iEqJb9iLZsVCiVV",
  "key15": "2RvyoVVUK9kwatxJEdNvXVb9Lx9LxzgBCNyJCkMpHuMX1JiWSj9U3ZYWDLFCfq3tTkJ1tTf1PnvfH9J11Te3KKvW",
  "key16": "52bAAN4xm5gd1H9HGqv8w4aqxfsCXzZeVJxon8991CgxyS9y2n6tj54btshSAGPC7XoTQYyRSQpns8A3NPsbuEPg",
  "key17": "2Pjb7aaxmLqmRWeszWTxqgMdCNdPqLpksmjuxXdNjNBMWpbGGt5YDNAsxqpPvQZipqgyDV59DbPq7WFrA2vKcaZi",
  "key18": "4os4CxvnvTPNFXzf4SqhXTqCGKBoQNY33SPsUp3VqRa6zHULrMHLmyZXWBoYh37DDD64WnsB3szKiLdTxtviCgxG",
  "key19": "5Sqk5BqULqsNguQzzDuW744UwtgHn8EbehVyNj551aURtzq1TFF33e94VFmJmqGVD7AEke38AcaMu5HGFChbp5tV",
  "key20": "3VXR416bFemQEWbgqJ1LowFcHRmHTSaKjpv3qGXziNKvvjw4rCW6xDLjGg5PE3pXDzjiX1LFC7ZwXa7pD1X9wczg",
  "key21": "K3QT9nq6GT6oRSWaPdapgidwUgSLc5QWgaG279eCYr5YsMRexLM1Vbm1rZg8AE2REyE9mCtDJHiMer3rUe86xs8",
  "key22": "Ai2m6hfHwaPRrtAzSGSPWPgnxn1DT9HqWHZ2Jhy9Rm4VdBkuJKzLjFccKVdKqna8PMJsorXKdw9mpuZ9RhKWzuJ",
  "key23": "5YufZuirQHVms8w64V6T4LEQqeYTJQxhxF6EAa7Rr9YRPNp1scGdthvN5ijCCSkcjfsFJ28cJWYQ8Doe8njBKzyG",
  "key24": "nVkQecg6L6y5MZXNDBUCJJNZMeNNHSJoi5Ubnz1KUVMQPtp3W5PoBWJyTjRDiYZmMaiSj8cb3AeTWkRWxakmJka",
  "key25": "2KNPUb4jwJjRZiAZPFVnH4yNExdytdyDBBdETHQRsJ2vLJSkUm8Z2Pbv3sDvZL2nLpXe4XM7Dzz8wUsF8KU42YmR",
  "key26": "5Ufxqft43fhhUp4xbobhrL9U62v9cKBTnSp1jZGJZ8ZGy24KtyGM7G7vmcGBWCTjVruQMiz5qjUBX19JE4yESes5",
  "key27": "5b6XxyHKuiZ2fQAZSuGnB5Ut4VTGVEBLXRaMp2DGXFh4KK9QgWP6bvjWN2XxE5mZyebHBAMYdJs5ehDVgLuVfjr6",
  "key28": "59RKfeUeBGrdLG1ENfcCrQC7uHacq5sjxjmhoP2W8scNEHh3CpGauetHrxxwmhQPiaFjgTPpvDYk4pfqkjxYJRFP",
  "key29": "5njbmGFdmJs7Tuntgw7TfL3RC3hxQ8nDH1J2hq9zhNK8usfA21V1f8z66uapmZ6bQCFbURMjvoLdHn54Wj95sb6M",
  "key30": "Fb23odrSWx9FAqjivzcncc7C15sG23MyNL4HWZVNtZYur25iDX6yxg9Ma4egrNGohrHeN7Mb9Rwt9o8RnPBM4s3",
  "key31": "RwGMfM11yUHAKtbmEzp3rVqis67sPdniykg3Y6WxqgQyiA1QgN4mNAvgNLKfwx3dV1qeJCzkUNj1AV6xh9b2mTv",
  "key32": "cu8dpUArPhPSi8DzhjeXfAWXpTUxsU4FLKa4yVSVjPmaH5fawGFswgZ55EKKXRx3a25awrse9JH2oLvcFBW8kpj",
  "key33": "4uSR4TezdvK21LJ4BiUos6dKhrDecdWakWcEJhEtHZ4SHjxyuGZ51WJsT8uWCDJogqBsZpivvvgbiTwKjLSxsxXa"
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
