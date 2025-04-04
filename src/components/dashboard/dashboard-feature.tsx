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
    "4Q9r3nu3nEEBjYt28nj1cfCw9RegFNEfpQSh8ZV9GURwNG3byBHudzajpeN9VDBcQgZQC4fdWynot17LHste4xUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtGcWWqUiCV5w3XufStkbtdQh36H9VVT8cAB74JpCQmjzDjYmFJfD2kGn3eqqaBZi3NULJkfq2JzycAjnDaqrdJ",
  "key1": "4RjLxi9HHjnRf4b9XtDjTLTC6bwYdHryyRU4LFcRZ66hobMgh8NvcWCYtyEYtTPiivC8WZGZgvN5xdW9fimJDHVU",
  "key2": "5BiiJQoofJGKwco4EJDUS4VtidEYCMYSm95T4BNKZvsF86tWoEsMEAc3Uv3i631iKR2JJ8vkCLPFv5Ls8WPiP5uU",
  "key3": "i9xfXM4dx436uRhZfFQnnWXpuVHfLpiLdJqDas9pFizxpaH2qfhyBpXMjgt4NX5otN4DQMZhrkiJwCFGfqovF2w",
  "key4": "maX8DgazVMMKXsN3Peemyu3S1J2XVqbBYQDyTFnCgRg786r1QDhh8nePC8X2MMnqSzYiAMqsFv2c8WMnqTaa3K1",
  "key5": "5ukxAfwSc34UWkBn69axYnHyKurFTBvYK3yE1kCbD8ZMGMGF44Ld4jq9xWhV5kuJZew3gJ8Zp9FE93tTf9yWUGDi",
  "key6": "5SzoQj9Wdg7iySEVSBYRXmD3oiL8sy6E8z27cyskeaSDqqJQY29gASfn2U1DGXb15rx5b5yVqnZCazMtbwpWgPzC",
  "key7": "2eqYrj8h8C1bjZ8j1YtHryrKRUK732bS72LgmUukwEwqkJKpHYHLCkDg6YdjLSJKAZ58kt2fD23BmSKLcobXvMBv",
  "key8": "vXKB3mfJjcUqzELEWkhVcstRG9zNvmRLBDRRMmk9RaVabj5cVA8ddKS1RyyvcDpG55bPdYTQKqQVtMjJCzufCyW",
  "key9": "3zeFEP9gY1VVDbCVjuhJX8MWQMSvsgp5An5vgVGJLPea57FB6MpUkzLVmGoZ878mNi9oXekT7YVtxv691kRC2LMW",
  "key10": "2B3JiBssLaqs4ii4FatGzaQTvBh3A2DwjKx9vFjUFvkaHtuWJXtvgWtaWTk99HfJvDRYvvqEPg2grPf2rG7yLYSG",
  "key11": "4JEcmnxNkTc2VLrgJRiYWBnPe3wVPNct93qZ8kn1dEjLPN2eQTnJAqRiX7gUGfokQto7aBjebUtGEDFNCotvKaqv",
  "key12": "5oYWSJdwzjwbDh6wxwDevnRkwQDE47bYFWn41K8cb4BZY1ft8RrshuqBh71JwRad6TaQ3EhEuSzMnAUFKi6HBhLu",
  "key13": "2Zecursq4wrwbqE38EKBj8F2r8dfLTqzfuWF1k4rH5d21jAYfASTNuMxyw56t8Lpqjd4M6eiDx9p3b7G7eMiczvX",
  "key14": "2HyKNVdEzmMMu1Uqz74d1CozFiidRDJDwh42NPuq7bvg4d9PmazqPLGg5TRoUF3U6smByaEwgNuK8jMYs3ETGgyB",
  "key15": "2jADEYCsPFLFM6WqcXrguVT23bCxm3S3DjuLkb6ysc4bvucbrj19KzCVH8BCAUceCbN5FG2ZGUxugQnsbrVTxDKB",
  "key16": "YwqqQ8dhbNdNvNKK9qignjcAjv9rk6rzbViZaEkEkupAWMN1yKyDcQrNQjZ9RZybFoCUFh4AyK86opEZZZvw28C",
  "key17": "3BvTCSoNJ4MSQEWQtw5Dw9jf54MEyGXB1SGnpATK7QFBFq4cyPN5faWb4T9oPS9fgKDnJpuKavVgd8sDJFwpvJh8",
  "key18": "3CgC2dRf7AkFUQKQLUwYveLPvVLaBBgKRYuHKxrgEf9nAfy3189yonhQHqzRJ8F5nYavnwCwUy7ZcjSNsZwmsE4S",
  "key19": "XynV1fzqhcuCCUs4hdtQzG4XAii7bs6UDzzXfGEJMm8BLBieFKwnKknBauo1bjZZSx41jwihwbPUfTEqmvneyLa",
  "key20": "39n7u2Th5Bc7Aszact6rQqvqTtt9yD3FXfM5U9YwdG6At1Q7JeyB8g4S3nrQXDFT5yiTF3E7pxqJt2D1XYvrqqmK",
  "key21": "3LZ19rc94JemMMA61eCXKaJ44HAXYJa9nv5EMmdyPFAXJHFAzawQQGaXxmDfpBNeD8mbu2DK9JbyK3nASahyHA2y",
  "key22": "4TC1cZ4ZDkzkQLS8jZescXiGT3f7DcL1UkNR3hrewc44v9bdLnEQ1tzeKsN8zFyFXveGjMnxXuN4cf3ckBB5nYWg",
  "key23": "5h4zfcLr2CTLbVQDedYH5Zv5JqqQ4DBNZAXBBxLqXU1aekV7RVtxdcYBfHGdcxRnzRYo1VNj7wqDVEnkzMmg7cad",
  "key24": "3Drn57MMnhu6MLv5kGd4cEA8QrT5RzHxEiPipewteKFaCPLuAXMka9LKuY6Q8vBDp3bQM4smbHNCsDBfEmhsE2Bp",
  "key25": "4TZcQvh1f8jwtptKJL64fuh8a9hRSnHHVLz9nRWu5VHULfgiWMzbQJxMFRFULKujgKheQKuvRDsEVXd3JpECqrzb",
  "key26": "45rCwPgCf5F2NRm6qxLHYaQCdWdPFovARSB1HqzTqxEGP1CUxYpBoYKp28Kf9Hke495hrtCS1ybbJ1EJ19BoerZU",
  "key27": "5e37HZunvnNKwPkJaCcjDSASMoVjL92XqmNg4PZABd42CiKhH3r1ff4pV93JkS9xe52hm15qe8ReEp2o8bndtVmW",
  "key28": "5xMbSzezyrKqUGC92wDzimKU53JjkyZjUmGkHjwYf6JDPP5BAo2Snc5PvcTppVgTDnoiGRfV1A3G571WCREPcFJc",
  "key29": "5SRvmJPgCV6WbjcRZJPh6dmk9wgPg5Ubc7N1EoQmaVQD3vS4a9YgDjdoTnM4qx1gJs7h7w1cBbktk2ZZ6WD2xsaH",
  "key30": "P5wSPzjAvWoXmqXCQNCQWW55FMbg7Ha3LserCJWjrESBkppoHHeBa5X4sPCzUZTpHWg4xMEGvU6ZURKhFps1vTu",
  "key31": "4PuSt6NwLSWxxwrpHLbaMYqrPZzhV9pooKiu89kpd7yi6QYd32ZpXSwM1DiR9x4n9NZC3Aai2sk9xyUqU5ewvD62",
  "key32": "4AofLcbUHLQKyTHZCmva5MjTKC6JPPR9f1NmVaTdRPgKhcmzR5kvRcccmKEwvnHa13sjTm1HzxGEqQadEvXBrCci",
  "key33": "2foC6111g6hopEpfimZuuYTJpoaM5ozfdiUYd1dzknZbPbYhkWmqFokmPM5KfeHzocR2wyte6nEHzwqpDgXSs8Yy",
  "key34": "2W8ri3tMvjK9yrD4nU7f2pXqK5jsZm2ahFKeAnq1DpnBSZh3SiyxjZzdmY9RgNroFh8CMtmnfYXzJF3r7jyAJF4w",
  "key35": "X3K8pnovGYi421pQ86DWVbGcF27koezx5U9f6RnyqzwA7UWxLsZz2btmsZFQD7C6SudRiDuM6uUVGRZdtaGUw81",
  "key36": "4WfKR29LvyqQW9YZmNantv1pyjCezLPCVeQb82QB2akGsY9TRhaH1XaYgoLFN5XWRYeatkeujg9RZTCJhqH3fcbN",
  "key37": "399xjSv9e9uEkA7gUYaqGnFb3nbX1HsrH8MKFJAf9Fb1Le5qGGUya8N398ZL6DYggPU1teX4QXwe5UN9jqGsrC7m",
  "key38": "Bsg3eCDaNdS7GiGFKTXukrL2bPmD3z9Z4XmwyeSW8jpLr7EpozbQW4MeWFWyEJJvBePHnyKimf4qhXZkjq1c7Xu",
  "key39": "5enncoEzoq4hJ6V9C6bJuLen8vL5M1ihD8Er2PrpJ41EUaw6E3SU4oQd8YvTMYdg9LFqGX8tczAeRF55Lhrmr9XT",
  "key40": "oredcYb1Yz3aZPqe1j32XgpELmN2udZPDUj4WQebpD5dmxtxSSANeRcA2zbNFFgcHYLrWzosoEVU2VRyLZAK6jD",
  "key41": "vuhjMFo5yFmo5SdjMJJDf83s4UCMQFV2rB3PBipiLyj3meSUcupNLZ98yfRSTaMyxVRv1Q555YyRRMG1JHa5zfv",
  "key42": "3rvivjCQ8BWJjyFgqgZ3xqJQQPuDqDFtx31W4HCNAykZ72B9PWFe4TZz5s5vrBn1yJevhXj5AjYnPSrfaCdHkUoV"
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
