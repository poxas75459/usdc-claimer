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
    "3f1bYvhc4NuKacaoQSAeGAGA1N3BB4VnsPsGNRiWV6S1FuyWWYa3iMzzSsfkC2eVPPJBy9FZ78mkKiXh3N4GNfPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3794uzZCS2zWsCNVhd4TmBDzvEXjivRcize2Xxq1ZDJuPT5XeFRnfKtXdrVXZVqDn2JNp8pt12c5itATh8oJyP",
  "key1": "52HkA7ao3BFsrbpffkRkKa44X3z4QMKXVNbya38eZFQwDtvqSM7aYcGvDphT1BRUoHfzhXWLCGukgnbyiYbEW57H",
  "key2": "2oZyCm6FiSgCkFES1FBE3swDnQ7FfuS6YnPyQChRcagLX1WSxBNogWBycxYzE7xNPhPThGTPSC5n7DGDAzzATfJQ",
  "key3": "5Y7YxMUPHw4UrUggC9RpndqDua3beBCHVj5JcAsP58AVvKpAatKLxNd6dWUDhqW5EYZmA1xpf4smXfDQMpE5vyfU",
  "key4": "qHqjoJknQqPkFwbYn67a92yJhQNm254YCccG7zky9HqLnTMnpfe83wYCM3WdxE9tSDLEbT51hwGtxTuZ3CeALK9",
  "key5": "2tnUQJbSuKxrQs8tRLGijY3jJLmrkPH88KweCF51RJJmda6m1hegz69sWBe1oDuvwkySKyuFiBTqDP3BKNfsQ7tD",
  "key6": "5WcApiLkwsMGpCa7v8CjunwbC1MCFo21nTUXrfhLZodS7Ca4m65tJXuo8g7KE3rXjsuQFNyGxc4ioZHk3EFfQ49M",
  "key7": "bakVu4vxViY4c2hndGdkZEh8iaa8tPJVqBMQWakE7oB8EK3VD3wN5SfU7hEwhyNJwysdJxXP2aA28cyoMh9SopQ",
  "key8": "4peKERAndpXZs6xSFkhBAqb2TjZdRBnT4NQZveBP3Dfv6NKvTwpedioKHtbfFSi45E11xqhYWMcMxP4ibjVrRiio",
  "key9": "3D9NnqGoSMMjUNLPLNcaF5gnKCEisDDtxKZmCTNwYW5k5zSHNCxztGwAnKEU2sQFoVBzTPwqsjF3ZYeGvj2cGaMW",
  "key10": "SMkUdNrWJHz1p3ZWvo1V3EubhYZTYWbjcVJWip78u2qBzfMtuVRa7BjeiC5ecQ3mcktnheVsvdg8nvFrMAEwLwW",
  "key11": "5y4sTdVHmUh4az1D94mvT1tSWx2QWdziSqUs76AGaHjR8V5L4axoo9xpLXgoH3KWkCSMSZZpLePPpFpAWqt5XYY8",
  "key12": "3rt8BMbaWAAxuQ2q6TA5k133vGnxJkt1Xtke5z9zx9uwjyiH1Xv6ZYUF3KzMWLPrZj46Tc2TMBsH9Ny8rEZXDLEB",
  "key13": "5n9651k6R1WzwhqDct9NkjAcgytuXs1kf3Ua4HEVeMy4jGn5Ghsamh6GhWUsSnnPaSACCfwNRkSJMmCLYgZsM4Qr",
  "key14": "5xg92zpT2xL9VCcj366JsU1XKy2xw4bD3Ssh1PwUc5szd2LKScL6tBVoVUfm65Kg8diDv9h98wU87xy7Gb5TSgtP",
  "key15": "3N6zBSUJfjcqT7BCocVgynPneErbDAFHbTQqeUQdMxyeVbAi7KdY4bHX6wZyfwPGf7bchLKCAP1Wa1zpDBUwGUJj",
  "key16": "2pppWNmMQCGwrcoKbpCexwKPZzyySJZv8FTx5q2ye7mucJQqgrqeSw7Mzxf9A1irbfD6Zbbdefk7tHVCuZehMVQq",
  "key17": "4hu1HfmE1Pc9Sqmk8bw9kJDmYY4WWrRPs6QAp1eHZyKh1timLHWPfEQRf9RUvxreKFucGaYVbD94SMD2NPUhcsMF",
  "key18": "aUFUxvkE853itxXFqSKXB24nmnAF8oyR2RSdP3w7kNgYEukXDBvPSLtgqQ1vKap7Cuz3bg3wzUZ3noWqVWETTTd",
  "key19": "2eW1F6w8gx2bikL5HxyabnrqsfB69nZtGtdGJyxBS4hRUYed5ZsGAssxFC3NUzrc9ATcbGE6GNbGFEc5pxxuUp9n",
  "key20": "5Xy2UHfGUceFUcJkBjxTE3LnZrebcTU6f1MxUfQMESREaCKeB7iv6TMExEgJBVvHX5zh9qS7SXxmXgwHB1XF4hHq",
  "key21": "4p3khBRnKM1s4KXsHd7q97MTpA2dCV4EG3wRNH3yotynwyniZG1MTFJB4rD2GiZNpGjEW6SPNN9JhvSidFP84umN",
  "key22": "F3bFQzCj1rjLHufvP9mF7vsVtSZs5RhSYP5VBM8RXXBY3TqC7vDXjgfdPEnG1YqY9dnai7P3guAKBNeXt4yz5bs",
  "key23": "4wHknKp3FSh8YkboTXNkJYB7sedMg6yAGxmaP2rzbkq27ZnYm1znh6Z9faoQwYEbomWR7MWeMExM6RTjqLnqvzhi",
  "key24": "Qd7S2jNPgSYps7Bbo7WH96RT5HrzDcCBr8L6VkjzZK7YCmaLWDese4VxAkQ23VDVg6L3USG5EWMWavCpYksaKsa",
  "key25": "2Vh1pe8CUkiyffCyW1pHTDnDQCXB3u66AnXf2hqa4HxErGiLZRjMbK8QJBNWivb6gm7WXS6Y952xaMMVe6WTxsxM",
  "key26": "4TeW2dvGxQdUuTr4rSUvAs1psu5xQgcwaPV9NQkCeSLvo758ahAkcWbWBpiLM1b3PiKJEtGysQ9FDPKNeKCCN2HL",
  "key27": "41AtT7x9y4m1enCRxxB69CJ5KAker1FbZ8mjT1cWYwCaLDKA4t34vbRDytRdCF4wkcTDeBWsyzXRu6D5Wn5cARWh",
  "key28": "4Qw71kM4afT2vHrkQE7Bx5EHCDDQVaL8AWTMBn176iHvxztFnLa3Z1B8nLcxdbeQ9gtdZuQx4ngYohj9FLRDH7ts",
  "key29": "2uKKpRXyFKq5zX6vFBKQy4am6kvTAM2TReBvWAVK6x4XCdAqiYCcnN5tULcrHwW2wEgwqAzEz9XyLArKLfAa4uJM",
  "key30": "3H7avQVJRdimENwdCLfo1XGmRxcBgKgAKuSPV9QjbMkkYkqwQV1rDhCMsgzmmSsSpb6DDUDt9UeK3GBuDvDtajjk",
  "key31": "5sGeG8YquUMhhpyHWbL4vJ5hgEh5RFvQ42A1YUcdioyN1DbYx1Gpheq6mJfnye3JcNBMrQDb1WX86BQz1zz8Y6TP",
  "key32": "Za3kSDagFQXMPUfx1FE4qT5jFNHVb12AcxjopgxdcCcbm87L4b3kGR981BSmFRAEjtCUoMUC9qcfwLZYYZ69wTS",
  "key33": "4JyZtHQJjp81jg7zbo3eCKCCuLLgBBEbEEa1TpWUpoEwTGSzsdjz2EnJBApXqUv6AUVP1QauEikkEjs4gThNKgN8",
  "key34": "5NcSpF6fK4ns8ALqyz7G5SghAB1T6zy4BPAVjishx8ZuMX76rBJFyW9zGp7XT2tV5AEDCMmQWC6fCZcBrxhDtGSJ",
  "key35": "22EJ9BdKuqjxpJi68M3XbimDxznPm4vTdGsvJGiYoqNHw82C8jmanri5E3bWtembrhKL7M8s15yCcxjxQZJAavVj",
  "key36": "hs483A9LZxuxE39eppRwLFVnrWM9eMP6MzitHiKDRe5dX6SFa21PGxUnQfGnuVYPZMNPwMLyRh4TJTN7WoFLfaL",
  "key37": "5hSb6ozbvCPftiQK9ZG7aymBukGsssynQsjgcDWdn8EtYGoKfob5TLwke2Cs4y6V7Ua9fZgDmYQsYTWLzxEFyAGY",
  "key38": "brnucTWwetc2ar86nJ3BEE36KnmygZGeGhjWiyC9gs4PQ94s6GaKzysdfTti1SkWuEznMnWVpq9CxoSxgECxdjZ",
  "key39": "2jEf5TVJZZj8HJozBE36e9DhiX8AtLrB2KmEyiv4fM2Dn57aLRtkgvBg8yEU5ronh6HvLwePHkvAThW6DXoUCFAV",
  "key40": "5weUamdhvRciRsAyQNdgyJ1kyCa2aFPrf6zY3odBbDNc5gBaTZ5pPUhapH5vBbyw55p5Yxhc5R6zWrEgq51YVQ6n",
  "key41": "fQ284cxQfuHSecMuMUqgN7jMy6nx25rUnNY4c4ARxctRKYZEAz5Q8RNYoBguJe53TzBwQswxVXaj6HJucbkvkCX",
  "key42": "TiKjUs74VYp35Rr4zpo924t358KP182z8c7eYh2nTYKCMoE663SdodpmEHm8fmf4pwJaep9FADSpcEq9zxA7p7Q"
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
