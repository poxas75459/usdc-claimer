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
    "5gtVviwmBZej4zkh1bpfAUTp4SGvBbWf5q7BixeXue6HM8vRGb51d7r49Tjwk7UZAfcDwc85mx9D1YCzgw65RveU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UuAEpYjozi2VvJobqbaqvRNJfsD3Br9Wh4RrWVv5xNUpWsDMzG1WEcKBp3wgBBTe99DSLu9rgKPcGL8WLUYCQS7",
  "key1": "2JMcdociKS89mD23hFZd6VXPkftNEiiXaenw15pAp9uw3PBXKeLzxeNgDVj7NvuG6gpMr3RyFe6YtP45JvZFzf9k",
  "key2": "2wFYF4kheBH2PZ9egbE3xA7XviWerT3oscASLpVwamadMyqzTvCppCb41HHrpHoTjHhAQv31fWRGermCvg51swuN",
  "key3": "3MLsLHHCkW47meapV6tD18iqEfVXMVdrs6ee6Kg5THq1xwSKdkkZ6feMaRjTCJJtBVfeEx9XK67BvkoZi536khc5",
  "key4": "35TTvrt9bUzVcKbtr9i4rKaLpbYaMyGuh3GRCkUabKBC5NyU5KgdZEA2Rr7EvnySZnSEHKJhv71PtCpP3MhrxJ81",
  "key5": "2QsvoodLC56MmSog9YumQK53eDo76TVSr2ddrFUsrr8RTx1C3DDXWHzNNwuLF6Go3yWMWY71Q2CjLAHXAZzgdBL1",
  "key6": "42u3QAaGHxfh7UW27HExcwr96GkxTsZhe1Wj7RLygXSL4ExtZj6uxVsDAQKQJh2MFsMJ62iCq1XLxTAFwAJz33J9",
  "key7": "3eXoMwregRbzWqx1Cb6DZ325HFVYqt9NqQhAWzxLL6ny9DLDNFAT3A1XLexnwa7jQL7DrxZJwLHah2Cqt1pgTV7i",
  "key8": "1MtHWRDsvPoxP1tMZoPjcEtT9aK4z6ukqcch5LX3icQdPDLNVzHcw9ZUzbt6eoxCzWA3LTkfLx2eDqAwytF41AJ",
  "key9": "D6yqnVqfctLCtdLA5sDn2ttprb81vnDaijQxNGR6X6nXFvUNWGZoQK4Sbz5hEhePwPPBctsUgf7TucB6SVtfxVR",
  "key10": "3MET77v9MefgLuiWzg3MPVLdzXP1SgQBiLtGfnv5cKq2FsQdVFBHinaaaHNTdPrFF87AbNPnkG2AxcfeVtNLh5rc",
  "key11": "1QbQCQCMoZF3dn2qkyWvq7K7tT1cY7miE455hMNaJm4t2wuKLWDpVhgHtgFVStdeWCzCgAk4v4ntzaAzM3yDhtL",
  "key12": "3mhATbfuD8jWpZTPjnY9i8qtQMs98rucCco8rjg2DJfjvs4729EvPbYwjUbupdPfvC2XhAKYJrE5pXk6FxsoW84N",
  "key13": "59UGEtFY7J66KpN19CdeULMtX9pfSRMeZVgUmqsExhxWuf2wpD69GvaBwZduwzxpsu3MHNfeNfmx1HYjAgYBfd5t",
  "key14": "3Cz37PzGPSPG1imbAXwDu93UwHr42UAbRyvsc2yYDaCQ7T4o467nDTFkFEdYBEEFAG2YAUnDd7NWQ5i3DHMSMthx",
  "key15": "4JAcwMqTnJGxeoPAojnPcTD4h1yPrRBEJTM8ZTWS8vnyCzCHMyjMDTJCQjhYhX76BjYf4gkvdNjqgfu1AyxCSD9T",
  "key16": "2ZZ3egvuu6fojZgCdQEgursDaG3Y5BTXsvCDAgiSA8udnEzMx3Em3T5BqRvTYNjViFg6Gjqhxq7GjEKya5MuXopt",
  "key17": "5c4wTZpAosXFmcbjtqg9DVeUZmFfTjatEUdnfcCia8gnuxqQZsim8cChGeMcQKYLYbVMbuYxsV1b3zqWE7HwzkuE",
  "key18": "46YG4BYtFf3fPDrSEkLK9XRbh4kwLiP7PEGXp9wsJwShwnnGuwirc38PZJqRbD46twswNMqKL9AcehRLjEvvMjz4",
  "key19": "2CjEPUvsT6G88ypodos4E9EkX7NZiz9rFdFNfRvawsEps9MRJ4HHNuChhcgymgpqcR5DXjQncccGBxcFEP1Esq6X",
  "key20": "5UEudyncVKsYHhx9PKneTuNgLh96gX3oXNkLAmg3jQqDaYtfKfoz9CyWdxKYRvR2rG3CT5jo8Rtr6LdfZqMX3NN5",
  "key21": "2yff5wPMXtQqTV2NQ3AyDzc5fhv8n9sCVL9WSB4LEf4jGAX5J2AJkXKE9vX4CRHNywMnN89HHnUetYeZFVj81cZA",
  "key22": "5yY7d3Dqzn7gRVV8dxvTByP7V4sqezm9MCbxEPgHWMfPrUaVA9NxoPa3oF5y6T6ETomKFHFZrG51GouNpTnSUyHX",
  "key23": "4mQSE7pJadEWMa3zUWL2y3xMCzfyVchgAWWGypbYXHLGkgWGiQsitN7RdeCykrhQeLpJ6avoCWhv6zu5iRyUWTgo",
  "key24": "3nVodXG7TvMqFmSxY9o7Urs2nZGnPZSJQ7TEAmuKC7viKmpmQEiEF9JuY4wVT51hEF3FHDEpxbPzdsPEDnSxFnLs",
  "key25": "pv18Tk3o15tXaTJ4nZKgtebsC3VAS7HRiRDQw4ex2MZPjoLzFKP7ZtuV4c3AsBzA8hbxZKs4ZcMbQdvEoeh8ZTk",
  "key26": "3noYNW9qqKSL6FJbnumsxKsGDimui6hdVHRwWvJUDXns7ZuySirCwMiyeR1sJMjhLu2dNnNKjjZHy4sZ7PYqQnih",
  "key27": "5tMXg8wES1drnEbziCFTV1Y5iHAt39ct9bd523rxo2WidMcAVe7cpTSaxfRmq98TGjjAtjZRu9kGwdiACAEhC56B",
  "key28": "5VimmLtqzC72CbtE4k9oJ9WTKmmYtGThACiziDuWJWefyyBxaX2cBY1SWdBihtWkYZkUAawQk7cNf5rUJAm3cDJ",
  "key29": "3EToMJYLWZB9naFtUZsvjntQSgaBWnay1uk7ZdKYc5GvDvUzTkchLwWaCtXwKNT6WRRusBriQ3UgHgc4xGSTjnzd",
  "key30": "5r2yT2rUhBee58yN9eJ7e6K2fU8q8cR6VLo7HviJ8P5TpRHqyKrvxpG4tKWrZ4XRjPd27GKUCF52oChJAtDm86ih",
  "key31": "2rz4ves1LtVmhZjB5KyLVCj2Vv5VEMXZ5rJMZfACbhB3n1N4CD6UJ2GCiQT4G5o92wSi5F7W2xD3GFHidsPXryta",
  "key32": "2LunSWZV7TCnmVy7nhHtBQbcdtQsFwXg5yZKrg9dAYuehSR8pY4jY1WTmf2KuZJX5ddWr2ycWBuomkjE1PKUEXu2"
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
