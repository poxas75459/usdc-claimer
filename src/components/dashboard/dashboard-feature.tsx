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
    "oTY3sRGBcXrnvjyKx8E5JbYtgeg59qsNpC84Cy5HWkj7vyWkZMWXTszJ4BQVK1PFJgG7EN1GyUWAeVcoLNBKiHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ALvb9U9Lc1wGw3ucEfApgbgnKpXs2HcpkDpHWRCFwWwxntXuvxhuu29cjU8VDJNfvQXn31hC3TXxoeeBj3LhjP2",
  "key1": "3HXobWF17cLEkMQv27jhSgXgNCREZ4bGCwgzPy4QEiM1ivDqAbAXiF66faVcKaqNnfdZjPkkKC5cnA3yhX3FmGCJ",
  "key2": "494M37z57A1ns5rQfKwzZSdqt4SmwUk8Yo8o9Nne6yWRnX8JuV4aa53GMuLXryA8yammDreWiNDMd8SZio1ReZi5",
  "key3": "2opjxcHbVt4Qq8RD5FSeaK5PZHM5mu8X6aF7xJtWBpdVpRdaVKAb4dFuGwWQcFYjETsBo8LBQEJ9Smw5msGNseLb",
  "key4": "3xdi3ksGXjc9Xa8cmojnMSGWKkTkujHo71tmoejMECift9XAjAKTUG3iqNCcQLd9HKcMYBp98wo5hyC4gF9z3yi5",
  "key5": "4dvTtSCyubFxQcqvhSYHbouSt4sCjuLTt1zzD8ttnyNTJYj3NE2snN4ce7ZSpXqWiRuVSYJmG552U2sXaeh7gwnB",
  "key6": "2FCr75sRLmEtgRJxoR1FvqopxTet5m8ZNzmUYnab9S3kwkaUM4SLq9NB8qg11NFyiubUF6qoRReBMpeLw1D8wids",
  "key7": "2SBFA6mCxsKcgKLEtyxtpjAeaNcC3HUbhoJHA8xdNztHaUMnyQac9GftyR2mbnKymgdnA1ZfJEdhDmnLBJigk5N5",
  "key8": "39nyQStEHab7Kj4nxSGPkgRiBLfSp3hcKVEnTTZS34G5coHWQcy7YC6g4WFsiSbyT7xUZzg8yAtzokGHKS14Y8rq",
  "key9": "52362V5zN7XbrAeaguFE1LbCNVXDpCPufH7uv57egFBhdZx6C4pQJCTtbjZ9rdGcgGPY3adfmyWnFHdciESMeywf",
  "key10": "5DTJ8pUZWc8KrdFFXJNhCzK4JPcB1b6pCpCsh55jUnH6uLgqxh1HHDvphHT6nvRbn8PxPT85Z7MFFdgdMMkTTDYU",
  "key11": "4PgN6PxDsu4MpYy4oVjxVpibSLeoDuCGWXG5snwwt44ZAJEN1v1Am8J1VGhKeye2zrubUJM66Z9VcEnHetD7faAM",
  "key12": "3xnQxTfoQfCBtp5LTXLXTGVns4nQnAXaB6krk9SncjxejF4KQ8QPvYaB5gLMMfrbMdFPMyFs79TwqnkR4jKHUF4R",
  "key13": "34GghAMFGhzsV3PXNPxg6pc4VNPdWCZJqgYEUoCP2HZsq9qS6ZoYsDsU3Mu5DGE6onnfPHCPYEMErtSrcYoW7fpt",
  "key14": "3P6aF2iHEb4ktPZTqiPkssBzKM7rchsPRuhTADvTjTkvoCWpPzy3WndMzjq8qMJ43eUAFB5EPYVv2hCZmk2c1Deh",
  "key15": "4FF9YDyaUkKRhG6AFnWaLnJdPRDYzFecMbLWQSj4MPrQmWCzGKVV4cPstRvtEFHCj8j7bU1be8BgKaoht1jWxWtH",
  "key16": "2F2ppFcmb9H8A5ZkV7HtA96PrXBNKrYKe2psgCcxMzVaREgE3xRw5B2t3A4VfuKRmGc8LvN2oFzGgegak4NhT83y",
  "key17": "4WdxWdMQhyPP3PfCqMfLr38buZEg5QiiZJaKftTvVKBzj5BPYYJ75gAQwTMsbW5cSVuySsqCRejthiQEbfrRPS17",
  "key18": "b7RZams7ZrFBXSobqeH3cMwbTZbF2utFws4MZPxtZy8jVkxdipDjCVR6KC8dDkHE7uBT9V7zft2kdTz2m7kXbEF",
  "key19": "416B2Cn1QPHef65nqcx9aHB12628fgaBoqovXNB7W2FZA3GaZrwjRW8yMKD4dKwDwsZw3TFjcjHY9KC7MxLL4HeE",
  "key20": "3B818r4aWLadA4AtzGPx7acN3rdFqF6qg8fgsHScoKrdJcm55WXHz8rE8HCRZLwAbPpLFe2LBow9nkduwaK9HHYy",
  "key21": "3DTTWtb6okoMJmMRUnLchYBjAByBbqXo2FhMEEbmgwA8c6KdUTcasgW7hTEzmzhkTUCg3PwJrTrmGPX5HKXnmKB",
  "key22": "2VWqj8JhUze5ZtLiiyNKqGZNvFuQgC1RTxU3GjWXiwjrJyLRZMCzDtSnPbDBBBAEKTAkYZ6C89qReoK4KDZ1FK4m",
  "key23": "48kddsudmYA25u2TS9qVr2D5KkMf5qoKLtKF7xYcV3skvBvw1Fd3zqMngHm9NyYeBRNqMNYZadqho6QyrnriwQDC",
  "key24": "2fqj1q5cFfKMAfzsjVapzjdSzJmx4aiUr16KjtQ6dcJhogbF8uSAz3itn5aTCrZwnD6Atg16uJ9FTT6sCWQHKp4B",
  "key25": "61bGz8FfRBF6RrEPipd9BHNGiDdrfYrWBR9r9RdvLWYbKGcnnJjQsJxYjYps6PeuZSwymvvCBNSgDwFqcxfJExHE",
  "key26": "4BPY9sRukbjphYga6L2uYG1baRrYutkGqWsCtcZyjWgLZosGvbWiSwop9WFWxxdmTqN1HZ9qSh4AgezcdiB5dcok",
  "key27": "5hyydYX8jdH7Qg2o4ZhKVcZwnsTXw9MfeYHNx5b33b2WUxbfrDFqdD3B4QokX9yJcDQWkumgc3i3JgDnkUo6xtqw",
  "key28": "5aYUtViDc17bsXjVaXdf9H3TnFRFKzrSrGg9KoLFfcaQrYcXqdLxtn7HfBHEvritxZn6dK6W4QNtsuYTs3masR8J",
  "key29": "2jQ1KRP5oKQTuYKhnytn4wELZPP1cJR7nWHXPaRwQ6BhLt2FFBZAuz731qJbTDESQ9e1TCgh73bppCwDnHP54eQq",
  "key30": "3StQ3kLgNuYncNWw2fhutJQZnp9CLGA9sMVq9RsF4MymhUdZUqd9wap4D4uvr8kZjPZFMFrWXZXqbvhjdSHh8F6c",
  "key31": "2BdPbCQWvL6z9TUm8ogZMcfFTWpwqYw7zyNFKMC2DMZ6cN4TvgL4rDjKCJsshpRB1TzCQoqQuq29yrZ1FSXEaPo6",
  "key32": "5YxHHqD2bsdDZ7zqJQw461eHeaQR7Ck6c6jQNcXvXMj65Ef2jgrYTPDDKu1CW4wjWhbPEyCjUxd2JFtYQS1aFXaH",
  "key33": "2HMQEbhFLWpoqMk7ZddnEYwqPD8wQgz15FHEA9SvKWugoYQtgSeSJDGKqDtB9vzUoynQVogyVGn7e6XpCMg8NrPN",
  "key34": "3KBzY3wPCQjGQsXPRMatr5MYEisjyh5wRyUKwSZXFp1rrxwqFUkyM5hJMryzpSfwdTBacj7k45tpVpMQm9tGS4st",
  "key35": "2HDXMVbyVNk2SRdZ8W2gPFPE81YJwN9Aaha7rZwzkd5QixfFaqTgo2qZSrcCkvwuJ77miaCmfRcyGSjRKbM5NTuh",
  "key36": "3ebA2utxgBdEfjomZ3orVSh5qw918v2zvdX9mjfSNJ5hBLprfzFGwcTi5uHknwPsVKHktRKaJ6ym8GRrrTa6wpw1",
  "key37": "3aB7YqHh1qQcU1yAwi9s3NB72TZoZRwn6RN2w9Vxubx8LMRvs1F2NMRGFvSWPEqcSEkzoXtnB5CVa3BxrcZVp4Sx",
  "key38": "4WCnv4LpGoZoZdwwrQTjx1HX3xm33gUWJCTvYpwLBpnGtzNiLUNKv8Fs7iqbXzkfGaPcooR3p16UoqQTFWMXn6is",
  "key39": "57Qwyszk9kKTZ86THdarvi19BDpt8Pju2T7vsBVYC54WQNhKUydzCir3HdHNKHrTLrsjQDZ9yjR9vkoaZ8EdSDVQ",
  "key40": "5fo64HTativ6pziqPZn36ZbYL2aJdJhXneoyM6VgfMDQFvDQnFspDJyphjrn9XjoWYV6KGhgomKSPiyQk9g5eeSB"
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
