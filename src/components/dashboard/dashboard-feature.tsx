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
    "36NriZmqZ9KqptqScU1hBDiN3vyNJDGeodLXyENNETW2PhMzFo6epWq3raxXjn25KDWBj8u94FX5qTgfNDTG9h5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZE5kAy8y9pFHTrUCNvW7msWf2tZkyj9oFgmGMQ2UDJNYWJJCXXAaL8ncfqFPtpnr1LpjAjermorTfgZJNQRvAWc",
  "key1": "5TmWvJBMeKuDjNk1MhG3kxtHVJrJzhXPm7pkNsfaPBYW4gEagTt16Lw2L7TojTGvipHxa4rcost2eiaJJAQAwrQD",
  "key2": "3pdfh8D4uxgNHqCGtgnDHggcBjb1WMzP7fyHG8MC3KLVFDM3KPPM9ktdhHYRmynVGjhiQAMgeoA33xbp2SLQtAWn",
  "key3": "3UBn4dBVewqdKdhL4gsRKF8vi5vL3fztXFCdLtegmLrq1BXbF2Z3dKXyWWT2znPVAxu887qkXY2mCVXDtXbfLWa",
  "key4": "3p5sZRkkbWuRSnKbBPxGj6E18jhCGpmebGSbfo5h9TqCJb8V7nEyDs4HhgiMjooKEbaxtWREfd9zH7N8wn3pjEAo",
  "key5": "4N9GUnpc2zGu7s3sGA3jTAr1DQ2cMTtegvBfTmDLjKByFsdWW5QeeErMEbm5zSRgwHoszQN3x81PfSSpiqKCQX8T",
  "key6": "4BimVbnNPzrdXhbA4fjkt3SR5DRkzxGuwrb2swgFuKtitgswFLtKAW8e2BhCgy5YTBqcQG5F8GPoAnznxmTQQwgQ",
  "key7": "2KZkkzeCgR1UCiedDoXbQohgi2dMc6ShPZqxnWJJFXum5VvcECszmAjCSJuhCfNuFCseA3C2K3xrSHHop7S5KCVL",
  "key8": "46WyTmPiCkJet2wT8s9JANDDEbP1tEvnEBVSZz2WMqQi3pNaCCGJJsxQ1UNSvqGJx8xpNUsRubMo51K17vXqPtRJ",
  "key9": "3U4z66HSommDamYyLnZRCiQJUxW68YdhGr8zgnne98U6qjz7LByvZLnQbFGsXjArcTCuCpgsAQDULhSBwppmKNom",
  "key10": "LbXiYsDNgd6ibL2EJChJsk4z75DCLY9kbUjqkfCgfsM3auaFM8WY7nGNhUaj56FCHSWBYUK4Fq7SU6GWtAM3zCU",
  "key11": "53jTC73pgMS1JKDXZRQY2VVdABi119xSanMWaXL2WBBymy7LKjHS5BLPkxXjEsawJKiw7WMVWooQyuCsSEgn7NmV",
  "key12": "2mT5V6HGQCorpWc9RhcvR5YGemN4x3FgLubC3br7SQELgtAQCbD37cRBh4AQc6qpsB2Ej2XBXqEvstYR3UR6tHBF",
  "key13": "4mKbr9BhoMjCrNoGerSWTTg1iMeYXvcPXKPSH1RxqXNo71Ks779ZKWLedYV7kAzsdwiDK1ud3Kcbo1WURrGC5FA7",
  "key14": "2NitfFi65MBExfE9HXZZC1AX696qs26274brhDnBjG6tP1njDD6GEf4x8cMx9V1uH56i4mbM8Znm1XhXd2NpT8Jo",
  "key15": "4intEcUnNvDFtYUML62sW2jeofBrXRZNoAfZYWmokLzQYfVWkGKP9mdnnfo4iWaruJsnXw1iX3CH7c6P57BQbKCp",
  "key16": "4HTL8buzZBTTbHE7C21SVFySNxSu4JnMt2jkMvvXCHoN5eW2NEbAN7a3JfRuu8xyhLXxQtFwiqApDj1mBqJrMfTL",
  "key17": "43jdxKj41qqijvbqhbH6CQqgtQ2m2B4v47K4AKxnEuhVd45Mg7SPg2aEBgQXrctghSisMBttueS1PqQcom763562",
  "key18": "wmWFDedXat3ZGZA5LH3QYuYNi8yRtcLu3f3JDC1SeFXzT73L3Rv1RF5jkgu2ioifjp35ZRNt4vbxFB4gwCKL5GU",
  "key19": "C84YVCHb3GZQZVBESFvGEQGpJakNMs5tJ7cMSxvqcffGR5YLhoZwzvmszqihB98AhmsBUJHhWkWD2fpUSEnYd3N",
  "key20": "5BPzHGivrj5CNEXvC3EdJJrvgV3kBvHWjHLvUpay8qKgsJfCwjZCAE9zqvzBbBUGawCnzh1NKwEewWEoZB7jdsbY",
  "key21": "4TDgSzDFK5xq9USMhTgJi5mXMFf9KJtkFyha6q99zLt6ueScdMgeTeB4d4jx5eQkJmpLad1oh5TZxE1eW5jHeDYm",
  "key22": "65ox9gUUkSrwTyVC8LbLFz8MiyggyP6eyUVnbtkdGNf5n7uhoQEsmqh6P49ZDRmFAoJzrpTxQba8REXGohVLmj4D",
  "key23": "4ZepFWfEnhmBbydrZLYXTpYWfv1rGjkVEy9PkiNQ2XHbKbQzgsoiD3nW65HV9jPD3bkLVdbhwo72BcJB7wDuLjfA",
  "key24": "3jCDdKJdHXgSzy8GAfVTJ99PN7rUJx6C3Dw15v9i3jthtJiN8WCzPJPon3VuJpTw296qNZPhRApcer7gESrhdndx",
  "key25": "57VuLYmKhSsfmcUURRu8zL9yd3eUtQpKmTZAzkMqx6DVXTpQASfHcNBhGeG2FHNGuC9umiPJCnA5n8GxbJu9Bqr",
  "key26": "4GgLFP4YzhHa8LPRCeapwsYJJsdSTS4fjBbMiuy9Jm4ad5ibgUK1tJhhSFyKQ3pa1W8cBpjqcYmDVZm6VdXTtoNi",
  "key27": "2ZsxGsykap3drEDSJG6TuRksk19GDQ4GVrPacAzV9GVQHSKrnRuf5QuszYt1U6irdHgWGKuXPNu3fH9Fy9LRhAM8",
  "key28": "xLQx4CVDy4Ge6fvPJjkaiRZ9bY3gauH5icpekx7CcX28jEmH8jECay2b6Kw6PkvV7CDboudPXijPc7cXP62Evz5",
  "key29": "2VMUNVuMB75pnNepx5rDwGQ4SufssScXyG5FrS99NGeMi36SKwcuHCHjVXWYUm8X2GUfztMEiStwm6p5fg3EMoDE",
  "key30": "5hCJt2iWTbMFf6TmuDC9QKTVmVCyzZwhgoSe9q3g2iTwMVzKMTmeaXpR775spzBuAxqp5V8HoyZieA3hMj3phGfs",
  "key31": "3PgurdZX5uNyjprqw3o5WRRBLYfAMzFvg56u6nAGZCrpvigvf7ijshqJ9CNwVJGLpvWU1fq54bVXT2cMMPuxaAqb",
  "key32": "5rdRwkitj7HnNQNdkkW4hKNKxJLHkVtQ9vW3id9F6m5zaU2NuY4L2e2JvifyN8Fc2jF2vPxXSXX21V2QupzQstSm",
  "key33": "5d8QU5eV7gXKZU8mBMTfRcCF3NDJRsFhDKEJJgyvjEjy1CxtAJHoFJFi6uAQpoebL3GkRA2pKEkyRyxzdybB1qrv",
  "key34": "RcU22ceMWtXoa73AQ1gcnW4SNpBTFeG4nZ3fFECJM5sWTqBmn9z82eEXbzzUsPyR8Q7rwJ8q1ho1aAaWf9S9VhB",
  "key35": "34ravYXsjzJssvX8sSQw4kWFoRLqoJEV5i4Wy5KFdhRtqivryrFzsfyhiGRR5NZx6N4yumm6ZcXWGT3QYVpgB9B2",
  "key36": "5WhqjYNYww5wMDs3SwkpSYUrh8Mi8BmKCd1VWDgLXVDzomTY3946pvTKGkW3NkYLWKifefV5VhgG8FQwgdEhCobx",
  "key37": "21DPUQFdXjt6ZhHoNKgMptoLqbFyNJtnEH58ZQ62gau8njP9GcKcNuArHSsrEpX8zD8SBsXy3YvRLVAbMHGqydw7",
  "key38": "Z73K9mcYCo1fh3GyfUvEG9FrQNUnSDtvKYACt36RoY2NA1sP6UsYM8G1JNGjPcpNqk92yhgrmDaERZ4ftKeRVEQ",
  "key39": "5fySJhDVgBj4kgW7NnESiMYabyaU3nwhCh9pQg5c9tAJ86o3Np2Lv8xoRomL5z4ZqcMZNzHkZntebbnfqTXBUh89",
  "key40": "438nbCjZm1NxhtvaoHqExPKfksBDQXwMauZiRvVCn7FCuqpV15GTQ5y62XThrvt7MWzsAJnGM3dcKCgGG4iSuukG",
  "key41": "55PPTnRTqsitLJJPBzsBqpj4rsmCHnWsMy3hp74A9WofdqFxkrzYCgifSyLiVx1dsWqnXU1rrsFrCRwqtPVZ8G2j",
  "key42": "5NWwZdu5CEkagJA2Gd4utFbCLCQuhgjm8APsQKWe1T3sEveXYt44yvNDyGsP88k5o35VkZatAMDs6hqPG7u28UPt"
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
