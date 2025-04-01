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
    "2HRWhxd8N5v9fKCfQJwnKwahFAsT3MzZq4CVT9LLVsDgV8b7Xps6iqWY2qnJ7CxXY9tHLmHhKrtRJzGwKPmR4Pym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXgYWQ2fstQgrXwAPwardihiFuptcKxSERKwosDU9HCz3kvWB88amxmuxTu9eGA4YCuhUY68UefZNds1Y3EL4pN",
  "key1": "MKevqBdfvtYKp5EW2hs9vkP5bi4cyTCscFny9XBYmvGQf87FTrKW9VXxo3zGQm6ZhWjrbcGDFDBibseTWSRAsvs",
  "key2": "3syMkNSnFmGSQZYCuARdBJhzZV6sRVsBYuNBQDwc8ssszy6qxoHLWXL9uyE5u4LGqzbgEvkTQex2b28RF16iTNVY",
  "key3": "5ZmvDGMj6uPhJMWDLWiruNyKpfPRuuo9FyqpCz4B4URzQ8iNNmyrv9UsT6G5zeBtKK58qv1f19tyzzDzXhr8WBih",
  "key4": "63XZBzpPs4ojmEz7rfQ3TicVAKFchCnRpRxzKfT3DuCZjFMqz1XkhM4X3K9ybcybuqTdsn38bs7KkbbtDmk2m5ek",
  "key5": "Hvp1zr2MghKseKm9YhkpN6i9h8fCoM8ta8nW8HY4m1JJbkfsN5XEFyFjrdpyqrbNsV9HpLcjLLo2n4ATV1f5St5",
  "key6": "4z7CUivEZB22PKinmrgBmJt78q9mGEssqsqJQB3nXYb1zPRAyQkawAvSaBhC54zc8QQC1BtTt6ZoXwYk8UGrPZ2A",
  "key7": "2wW12GmuSwdUumcEVT5RqWCqstWrFcJqGx9apYZFEszg13uqzWdP2Pewbbuvf1uTpcyHpZSMvdzdxS32jyV55e54",
  "key8": "39GzkdWC7HTtMyvadU7sFNkkQ7xGZDxDbjkGbsVJJErA55aSeq7ffNEXxdU5sKLkefpCP6DzeStAFLDjsLAKvk3R",
  "key9": "5j15cqKdBJzyx4g8SVzn3jwRAsESLPzCrTcFzmG42FxsAnn3EPan6jmESLuBZ3MJgZ7tir5pA3bXf2EdfJuZfvMb",
  "key10": "34XwYxoLXu71P3cgE5z7FMBPvDwj4c66v5YbqqrzobjNriEKGdCkeKbgEcXQkLaNHyv5iqM3cfzx8if2PmwEbiHX",
  "key11": "5hrjKJmjTPXsk1sRF93f3M9gMn4GNTsn5fAQ3Bgy2fgULVygDtbxpc5Cd56wcKNXnkTuhqXRB7VNdyd9WrJ8sZzZ",
  "key12": "4K1VE2FNfUKkaRRZyF86vbAQZiJRTDzhehCUHfmijrHDLA4hhktc7wBaM9sfQZTrvNvCLdtyRdRnPqczvWaNEjx5",
  "key13": "4SwpnbPH54UPkNZHKbSLbF9bPhnZiVA6y6ib8XmosnaH1mMeet5wd58fVR9VYw57FU9dcrP71oXo6mDugLgp2XS6",
  "key14": "5GiCU6xcSSFdvfBtUqxKGtNXVKiCjMdV8c7WX2nqqZ71FZfkoYQQ5dX9G8AU967YoQR4qFxoiQ1iafEzbdKxPZPc",
  "key15": "2e8w1PMuEBFAoXz22Sybyc9UecZdgADB3dRGqbAY6nnUJbFNtK5a9tH1RZ4xxeaKhG6P9PQ2cU4F5ji8FPe77MwY",
  "key16": "5e1WTbm4KDtFDqd36Z4R2QW8VNE1TEUaJzhefNP5ZKw5d9dNLtV9iJ3hcPMTsoQJQ1J4ohtBHaW3F2irqAKEMUmy",
  "key17": "55K83MamBmVZsz2KC7tn2o8r374NfwQTgnngUyHFaKujPaJ6Rgrn9mipW5VFhjiwMxV7TXZKhFf7DGKmLoMx33Cp",
  "key18": "8hecpb6tRQEX4h6PSNp2K7VwF7966UfEYKkTYvFv7scfyXxB4WXLsSFTHHae3YXFzjtYVr3U1SC3dZcuFvJmQLi",
  "key19": "2xHvRRSNa49d8sDQWjqsRWpoEFBKdJF7DcpPPX7y7QXERAJPTuSHtezjUsCkkiKjVLJGJhgKcquyWCWT7nt7df1w",
  "key20": "mfECYdoW53BanZPaWFRsmSKe1i7oZ4Lfg8PYo1Yd3jEWovyXsEfi6qPnJsYi1YgaARfgGfg6Gr3E1B8g4J9QsN7",
  "key21": "UmVNYgKPrEnve5bnqbRf5vxQYzDxL1tSSvi5BSMshcpCgMpRYB6CdnYRyEWXGxzotmMzUTRwAucPnxfZ3Ee2d6n",
  "key22": "4GrKKXkzbpzJucfNmMvNjdPfYNWfnpmuRWRENnoEms2XTWa1udhT9wpBsPUapcGvDhfWvJQJvuB8RRX38bPLYip8",
  "key23": "3JxD4hke3KBcw5desVudvYXfcKbg6TZ6cUBDzrFCCt6AwWu7dk3zpjRvaciYBBkKYqS6PZLZUXSh2bEWjJ4UEJ6d",
  "key24": "cZRThj5CUC8CxJ4MenGSXuezRgpLvk2tbbVw9N4Yp7zNMXaHWReinAstg3jjB84e4o23vh3sKbc5P9KoFjuHg4a",
  "key25": "4sf9DuBfsXgYtfReUVRtk84KrsCngUaaVEhVEWTtEnaTctMYy3BcY7RNy1YbWQqaPtoHcEcMbKJsSg8U9GGxH6ww",
  "key26": "2gRG178mE4tA8wbXXYNq2Exmxss2ip6dVYZuU2QMXZsjjitHK7CEZTjBvN5YG38Du3piPJVDjWkcoiYu9urMCzRp",
  "key27": "A8EsCmqAX62nbBAfaJZjvarLD38R4cQKo88QGBSq5Tism4qXscc6BhnGEhKU7rLFBw5QYPiUjQv1abMRGZR7WES",
  "key28": "4MEBfsqEJL8GjEdbMRKEXs1R4iffPpXeYy5JAtAEpftKBgtLumj2n7prna6DSf5DMiS1kkrfAZAH4Z6x2Jb6SHej",
  "key29": "2EQCpZ7uTVx58NdwBHFwmvFaZ7sLyDByh2fJcRHWVtfSAcuyq73o3qHnoSJzLj2KedBrFqXiu4URRYtDExnwv3um",
  "key30": "2MSYbZN3PU4dyQ378KvwZz8SDx8WM88QWzhx9WFxkQwiXz6ngKL1Eb9bDQnUD2xwL17a6KcQwg7owKi5vmo4hCJ9",
  "key31": "mM8D5fHqG6QbkbAvtUQXnM3ZsYd1bYY83EfEPeJGxfQvacSbwpiW2EQygeyHRFwGR9np3dvhMUS4RGuNgKuiMNN",
  "key32": "Gp2mdB6mMc6mAQFp4g9bR1JwdBFoxuCHSPiRgKyvrsgWHNqAZ8NNBHj7GQDQ9AhNB2S8ekz9frR9ioBfKmbQ9NE",
  "key33": "4bLA2ibXNHrDJLK5DQXV8zLdeEizLmPDUDQwLxPS1LRdFn628zukoVKDKvasB551ooFaxcuLysFvY7AfkBURzar5",
  "key34": "4LazMaRDijKrkzZet4SKkdBNHtuZhgaqpbr88ThXMjAjHesFj3HGQporCBoahF95BRXgHm572mKkUnitTkxx8qQg",
  "key35": "5hmSp11fwNXTVx7nRbg5V1oRhshfbnQiA5TX4P5CUfEwxdMmnDrcbCE9ofjM7gfSUQzZCYkxo1y67t4pUVuSbzzV"
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
