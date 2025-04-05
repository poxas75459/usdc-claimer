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
    "2anJreq1xRu8rhZLCRtufUmWU6aFr8dLVPF3DTNeUc9WphNtSaWn6frQc1wvugg8d4TF7S9tbget9rcAGMCrdPT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tn31QxJu1b7iRSPPEmPhMDRq9ofiZWMNG91VtUWPBWYQsBzGrTKtzya56Z92dFBZnyoozHgqmw98uiaWexNVpz2",
  "key1": "4QSSSu5kesHuiBzXYYa3nZnG5EYBQznHcBsVtCL5inZYLC4Q82bVWMrrGrkZbub8M2UDLXCXm42axUGmGkZDRBZf",
  "key2": "5Yu7Ys7TS2sFGrEQkY4gAnMtp1W3UsRS7S5sxhG2C5ej2cyVY9U5oHrjTSx8B3KuJywMDbijZdJrXPyeP8D14HKv",
  "key3": "2iRikMJy3R91Z7LfCkpeQU6ucKK6Bur518CcxCyuxQR9eD2qJp1h4NQ1mNMF65vkChXTiuBbtJGhoauigzbQSiSG",
  "key4": "5bzRbzDBNZo9FGAaGLzf8ULxQqmTtJJrt6eYmPQsSm2gTDkh49nwaDh4Y7nTSu2Sa3M4eZdtXUryRHyqYSwPBo7T",
  "key5": "sJtuz3bf6wdc7sDvSjDZn8hygjWKf3M11ExDukXsAMindzTpcQWgAg4fKUirMhxc1VKyQVYMHiLSteW1CGP98Sg",
  "key6": "2DN9rnGT6qBVsnqbAwELWmGbTN7UFmM47KqxRkfsx3b5YaGE3GXkFozYN8rHUbywRiDb3ER3FR4sMrShJ9DKStTa",
  "key7": "2kjQUY2GjtKwtgZ8yq9JbaAiJWcYg84ZNboNjbcSYSJk45J8CdBA6rwpeyGyh1QVLQHyzubYXPwSjwVF5PJ98YQh",
  "key8": "WKPExGgk3WT4pVFjDiTgyivfDhHBiLdMM3FPnLED4YgpavMESht8YYYoU4Aez8Nme7h8tquJa4Q2dxYdbnrPFry",
  "key9": "5N6AUNbgf5teZ9cZm4hftYMoggWNRExxK2etFp3AajDBbWd2oKJEKiFAgrYju8xxnmp6goA6gx45N6BNDcXcczJk",
  "key10": "2oWTAFE2ZbhpCTK3bqqLfecGzurMFrrDVNjqhcdDTPePtZooNpmDhmAZxKz6yBb2yuFefGwE6Uy5BFREQoZrWPA4",
  "key11": "3y8qD4ufa3FUoiCGvmZfgSFd3JkoUj2GBEtf1dEtRKQthosgr8EjY9woaezWHrzLfVMip2ae2PNy3f6gwkdon5Yp",
  "key12": "4JVVyu4ps32fKBYY6ohXK63fQyKEsSCdEp1qmoPGBbNhCAJsokHtmnXE4M2tXs9QRnnDpN8JBoSjdmgBbfNucAxS",
  "key13": "3AXt85KrNFRQVKZDpXVJ8eazjXpEWwSE3AiXU4Gm2L5fSWQAzo5ao2GcX1gJ3Z5V7fEzR4zJUjMZuJFNFGtj3jqv",
  "key14": "4V7Q5wTKqA4zc27VqUsUEsaJ8wDau1o4p4pjbQih4gcEztQGrKbQrRYUAwc5enAV5tZ1yetJkM85xcgK7JN1JvdB",
  "key15": "2AXapVm261AYCiwbYyCV7xVQxWAPZZi4m9sJRtRPZpYsxFDoLdcdFWgeJSqgqLGDkwt7jmswssBcZcvsVxw4fihj",
  "key16": "5AXMdAFjzDN7rn8rvqdAkLBJFvAqPkTqcmLWDJMP8o1gm9s4nh6mFxiZ5GMWGRCWCt969tD1YPiJMD1mkZk1j4YS",
  "key17": "5RmVuJQguFyJcBm8ED8Rys3CYpgFokWeSGTDPpF67cyE3YLTmhjBAsMVYNghazC6WqtvHPxzVYcpuoEBjHj74GZh",
  "key18": "3o9rwigRaLqP9WpgjSbhSGvpSQXyWLer8yHWH494TdR3WnEeFu23aWr8E4VRKbBXhDb1tgwpMRRe7sFMebhV2Yim",
  "key19": "3uyQcpNyTxvkxfj6zyyYvAQy8rA5BkyRpsutgDXLvCTAyMnCFQH5afPwe8NbwgdtR5Pwf7w8hCUiLhfJni8nZYtx",
  "key20": "2PFGEBaQ2HbgXgZWnAV5ZzfP1T7fAK5U7XE9jVJ7ZVfjYqgWV7qNV8JTtLhA4XEQtDGtj2kusszu8YeKxpyUGmGr",
  "key21": "4ma2PSHSF3PUA7NXeRDEdNW2K1UeC7hvW3vpVXo8bbTjouxySK33qneHXw8je1gPi4WWfWDpkVQdnqJgpdiMQUeS",
  "key22": "265FGsS1SWMDWpbHufzyLNmWxJwyMZ9bUBo1yZTFLBbYGQrqZjDxVcu6yehYRSygn9cpqs222p8iMH5HARJGvaz8",
  "key23": "5kid87qCgBNWTG2ZHEzA2MHSHXkbwh7rHPViNRZYvExhPC7tr4NLJDp6Lhd34gYpF4m1ehDdyV9gELjh2bMEhm3v",
  "key24": "39wP92NpQUBh4BGp1WhkWBkUhChsSrLGyiXeu74GTEaHCNzGAx9kEBTJnJAZAjj59FGdKnrC1D9CxT32YqB1zUCf",
  "key25": "42WxCawVJWrdTX7nQNs3KLnaVzEQhUcSKpYmdxgS31gprfF3K6gXiBj1EjHxk39mCirEDasKVd3x4UA27MgPeuU5",
  "key26": "2h4ZFYUS4AFQR9WHYG4DfUUqr6GWUc5YMVS9UBKz55WjXZWzKtzkDnUNUJ2S8A3Po1AgkoPz6DCFo1rbyRAv1k4T",
  "key27": "46hudYEAATLe8qjBvhQf1sE8R4NupH6mgqZjNZeApcXrLisp68dCP9FyWq1w1LHnPzJA9sGVDXtmAmH2nATtLn6J",
  "key28": "BfEuBQrTa1Z5QL3CtMwmbAQjH9x3b9EiGQ3XzEBWR1ma9bPBszVgAuCYULKG67j9JjMqbJkmKA9Am3u9843x73Y",
  "key29": "5fJrdcEHDgYyqSadMrkGn5Gwk7TgxnKMmniHW9VD3f5Su14kU4VQR4PYkfvppBPmdUEUCbsWg37iqGkPGCGd6obe",
  "key30": "3AFBhCwKTm9jSqcJN3VJoVmCRQSozt5UBTLJcs7BkD6hjdR1eyCMvNHR182muUBzqazbxJzuovSF8Kx9YPDGJKGn",
  "key31": "4o9ERqRJ8VEq4ZSGXmPcGPQseKZuRhjYYjgvofrB4VW3B4yKvg4UzCXDyGVFfMiTL64p6mawTDDGgZLj1JDfrtvD",
  "key32": "3oTyipDPjY7xuxdmuYHTLkfDV2xHFY6hsPY1R4CFdU6miSdTgBhhV71GwZJyAQpUL6dy4bB6d44n9LWHSLYYuR48",
  "key33": "3KzqxN5bTtCuMxuTcC7ta49Pe6bk5XV5RRqgqeKVkaE8vxudpEB1gEevoCaHGeJf1PKE3hR29nPnDcFJN8BjhKeH",
  "key34": "5ydKS4pgjReT6cYyReVYsWQLGgYUKiaCk69LjHfA6dbJw36opfYikocXYP9JniorP1Sa4KMtNDCBuug8sMwkp715",
  "key35": "5HyPQqu8RQPTmT2AiV9h4tkYgzbSyThhqMowgxBNcaUVRVFwWBSyjH9EVfTP2sUXX3ystXupqYBPPyHfVF2U7bby",
  "key36": "2p1swXS9snxdPfEeAAXvUarBYfm319aduSPVwF1xDiLg94d4FDFH8HvBQa9z3tpUUUnFppHadjxDCajdPTBNMhzA",
  "key37": "hF5o4rLKxSn8epqY7GWq9mXBVhry7GyrR51FQN7ZwWfAns4fxifsSAvXf9rJ8M7vvC2GmDoDY3pRxFkrXBiSTX2",
  "key38": "2CfvTgCHT61BnTwKNBrSZDW73wm3XjrQvBUkbgjwraWbGDrX1iwa8H7C2UoRzFZVquxzg6L7iuZUoiU9Xs68QupW",
  "key39": "28U5vfjS6TvWfdBEWMmM4rtxuwunKH3rt5EPmrb6dyzA2goFRxmGRApdw2GWHTtC2FAJMLhdgVpVvUZ5tjoyz6Rx"
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
