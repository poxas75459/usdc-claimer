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
    "5FmrRvN2cVCmXD7Y33NYzQpNpVUf65avRAJudc3ujqEB3rJ3aveRtzLaP4SmjB46JZ1fBkFqWzoarL6NA5JhapPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqiYnWyf3QJM9Buj9FyxcC7gecczauGkghabGnNdJjMeAmpi5eeLb1M9FfRNJBN1vJxzSbYm7HcrEDXFz1M3saJ",
  "key1": "2cbX2tdoHLAGupq1fJropMv5iQ6QSYV3DY873Stqwum1GsdqP4TbBiSHzYPorGKFoLRcNkF2V1Vw3mxS3tymgiYs",
  "key2": "5LyReeUimtY2tLYoFtH4eoeP8zNPPyE2K33DxpHa6MAggkQipZg2FDGRkLLs3seiUkVTtpC9T4PBDmiLPPk2vr7u",
  "key3": "4NFrS7ae8BzDHYNn7Kyw6BP2VqKvA7VhhY8v1wQfKyfsiaRrZPCHaxBuho1haznhZS4AP77WShaCLEqi6ihtrXzJ",
  "key4": "LSAcqoPuR495yDrbxUMWjZvuaXnZQLPQZpNQctFLxxGpxXwSJvb8FbscWPTwW9XucgbCP8zgsdqB9V7engsYbKg",
  "key5": "3mS1vTFPbnrG4WACRQfq3WiQX1FFveYtW2KNFtNjDm9Jy8RZKcVgxQud9XEf4yahYcQ6RtXHUVaMmknsxW1Adsbb",
  "key6": "4FdNN49Xvn4BXRrPykw4SQ4K41oiVvHWp2RGYUG7M3mfNAzMovaQCV9NHkGzCWmytdvhQNL3Rvj1a5WgSTxoQREU",
  "key7": "hDJd3mH9CZbrPG8ZexmBzrEkBERfir3A5ps11BRQecjvdMDfemcBG3JGVVzFQ6vdM3n9Mc1bGeqqexzMYuvAQac",
  "key8": "zqG1Nh93DVonM9KF8fdz2oAvVeAFmfeo6QtvDsJiS4mByBrz3tfrjbKMnodVsbVp2cx2rwqN71UdvKuafpi6h6s",
  "key9": "2pwMtEf7MP5e95Gijwfhp4cjMcQuZwDd59NombUquV3ZSJ6QWaYweGAXbcHVv5z9kULXrZKHFfEzfVvTPDfB4hiP",
  "key10": "2rY742k1eKJXGRqXXtDViU5GbVowptpwfgM9oMkEUo3ZFYC7uwvjtRxJqsHYKWY3PeQq4GjBQYcQQjc6y3q9kRdT",
  "key11": "2FXwQ3N1uaJu5TYR2DjwqpHwFouBH4ThsayQzV2oNBFiJu6vGAgbX777fPDrysaqhmTt1GXDQo68LWxrhZotgdzZ",
  "key12": "2aeEwHMdisT7MwMikpuqW8ouRwq4qebsx5eKqvPJnMDmuYESoVTGap2HRqD3kqFPPwYfCFxN2ZQGnbXNVM8bRqHY",
  "key13": "5kh8u7JcMaoDaLcH5JhJUkbPqWEdiRXD27irL8MSwAnXvDeB2CPoA9pmMkt9acpaP56DJ9THVnjrng3XMS8Zk6vg",
  "key14": "26mG3Q5WaYGFnMMccBP1a9NmZLRgMEkhzwsj5VXNi2uxU2YBTaXyEjSTDuiMZKCtvEhs3oK4K7AjFrZeQnHY3Yu2",
  "key15": "46zs6QUS2iUjDhCnE5Pa59Tfq8Yz2Q9XxQa5fhYwSvcDHLJmJERKxPSobZMwSsZqFBaNn53HCg5zurreCyq16nra",
  "key16": "2iCS6UzJnwJqzrS1TePwxDVppWqZUH7er5eWRKnL8sfEu81tb1tEq3sNQ2rDdN8PCBxxZQhWKNYfkEec83SVKe1o",
  "key17": "3DA8MwVheDb7VzZRGvj74WLQBwKTAxDZ4HM8H2iKQR5PCPWNJhoJm5EteM4sFd2sSZxbr3MTEZ5pLuEjSQkBj5PD",
  "key18": "27Za9C1nmig5vC28BXgb8fD3WhCLqwdiMsGpCBcReRYUa9yxJVi8dNk7YHKAbx1VYeNzVfhdj6qDsMgfG8sKCLHb",
  "key19": "4o5YR4pXe5VFMFsdgBTtSgPNu42PpPPJ5DYwSuw9PsBtXscKZgeKG1g51LMQbkx14s6v98ibbuYpx9Ejp1vmo7we",
  "key20": "7syN8AvmTCx32p3zQMndbratJ9nzNSTW5efmzFyLCSfqc221NyjcqZeEzv5mGsv2TUrceQVKMCdh9M9FbxxoJ4g",
  "key21": "4sB3YBG6vGdFEou49NGyomp1TbTJ8xNDWKHRaGXpZyCR5hJGLHzqsVYucZfqzgqDa3MGdcrkmLJbQB5PS9LJJ285",
  "key22": "2AuWDcjuAbUkZTdoRXUWXHDunbYWxYae7j3futbzw9CRbp4smTY8Zh4Q83CZPXi9FFBJT4ATuv1irdXXesrrNR7j",
  "key23": "BaX8ScDk3s8UJ3UYJgtH4t7sVa5Xi89Ys2dpdQHj83hvDrR9sUnA3f8ZWDyvkvs6j5b4R7JwXkFvzsihfFU5Mhv",
  "key24": "tZxZVdpTJYU8YVZn1KLU5Tx5QVJR2Ly8uNL65SZjXejyPaomKD4TrW3Jo5htnxwuoUUiF3gpuQ92T4dfTx2zSsW",
  "key25": "44Qr5XcpN93zJfDha2hYHGvfm1DMtfVm1VSJXgfTxQq52FKLLDpCKaQr6kWL5scrPCjV2zBftGewhqTV2SYtwnwp",
  "key26": "2mfuWb8U5LqZcbvDmETUUazZFJ8HNWfSsxV7xmMr4PSaqEGmkPvHg8vquWK4i53JgGw4bkmAH3ECt8kSrEF2QEMo",
  "key27": "48dW9PU7aDz2CCiyqEfMZkfW3QMNy14rvsi15i7ZzZ2rinAUtoaeyHF3XpC7PY4LsFkmr3inSQxM644xwuXd6uQZ",
  "key28": "4XhMb1huwDx7YDQ6Xv4DgqBHm7ckedDrntNv6YUYNA44FN9n7gKMAAREmhLPXS3RHzGmGm64At9WbtSksX7poWGi",
  "key29": "5E5wkQyjxVxEsnjzYXaxC8p4XGj9jCvPpz7kSYBCA8bsuq9TNPpjtLUzU3MGoGcZhYjirWHb6QA4H8yRhRmw8Xi5",
  "key30": "sQhg6sTpwFBMk7HAkkcFwAN724DjLnky5YSoraADquVMiUap7G2wRsP1XEvxmFuTg86yvDFM5m6wkwBppDjc6qy",
  "key31": "4qWEdcMyFrpFaZekvkEhKhdSzEgPDMthcACYYiyPJhqspS4PotJr4oTXJZ5kFpYR8MfvG59mAhTyW6JZdCPV7PZP",
  "key32": "36SRghbXyiH1KssYcZjWpJWtK4XZsugjBzpyambGa9LJ6segbMYgATZDiK8vpJJ91X9atv6nZeQrxYPUhMWhEjUj",
  "key33": "4vC4FGxfsccSErrg24U1jBdfA46RsBUes8DMtTthYTqakzKiCfScBLS7nH8YHbQGPGiWbY65GdGs5YBDeTRG3yNt",
  "key34": "4Tzn2RZeUjKMHnHzrFRdbwkimydtUmDUJjkA1w9EPn5RS4e2YXtiT9uGzf1NceTEHmxryDsR7eTNKj9oW1YDM7Jm",
  "key35": "3zfYUfTwQ9hjYRDo4EoPf39pNA9ABgy7mGcCXeSdoy56im5Rucp46T5gFKm4Dw8ekdvL8rhAbvSButsjvXheNTtc",
  "key36": "KbLSZmZHNodd5zkZ8tzUcdg9xNUccFZae3aUBEqcqHz8h4yKCwYBTG9VnrFignu6Pe9eS2e5MCtEm6WT1QHozLP",
  "key37": "65gWz5sGyLpSyBNwERf5ZngdVkbJ5nRwVroK6EFy6swKF2wQvP3xRW6VJ31BNjpfveP3k5yM4nRGX29PymmZHwyM"
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
