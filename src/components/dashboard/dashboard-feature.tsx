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
    "3qk9Y5UhxBPWvPUNFUvMEMDEczb5AqEertCp9pLeJgg6VKe4toP5n4gU3W4cuzTAWG4tRGrsWexwAFbtLiaox9ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ujAPQ388fQ9u5ycqBUV8ajGuCQgLDEaRRaCsGRxUk33PxKGX4HzvmmWVUV3uGXtUwCcUGddcsMusQYUgxagWTXG",
  "key1": "XPXytZLfJrugeftt5buXhH5kbz9bEyNVgXatkFafZZXgXSTcuAFJCaacTbrkrXBPEx7e8LrA132QnKXh1YGLexC",
  "key2": "3MA5dtrJfg525wZGvgZySdignCBDC5yvuX73H3RTG34UFq1MEVhbRdXhzduWeJj5PBG4J23eSktX75tSgNmJ7uy7",
  "key3": "2BDu1dTrSobZ1hidLmwm3eZwKdCcbrqSoAAw3NtdJz6WtmqmJj48c2e3bQtPnQ4ngZ6dNMh88X86nBbs1yej1iXR",
  "key4": "UczMbsABAVYFaZBb5WDifpp9Qnf1JtxugcbFV1A2m1RyXUyypz1RiXdz5X61aR7yZqzL6KGwfjodUhBXqxgbwpK",
  "key5": "2wnwe3gM22bdT5ULKuyNroMQmjuh6tCXq6i9hJCsQPLfsvzs58w68Fstd7qZoqk6t9p9cmRYBALkY51KyoRCfib3",
  "key6": "2KvU6L7WVrnBDwXyYofq4TUuTxPDfvNXLvyt3FzDUkriaqMwPj9pgsxhDvFRGjUYibzwwCH8TaFboTFMadfSe1T9",
  "key7": "uGxF2nYy2qRhriqEw7W6ib7crKJYNRg6yoLjTAjtUnTY7MdYGqmATG3Z25qXfQEnRgckWLqGqPAnKBrw8RV6ooP",
  "key8": "3juHF9jDaAtmX3iYW9pe3su2aemx9MAjne7dCNcfGxi7QQKMs4iV6o4p5RVzNuunqzhuxL9jgVUkBbRF5uDxUa4Z",
  "key9": "3S6ZYHfhSZfibdCWA3aXsQpRiRc76jyiXNby1fvCWCp327Nb8FbUp28LJbdsuQ1bawycbH4ZcFd4iTCNEJiLpniA",
  "key10": "4XUL6VWuafksHJWMNtVUcor6wbPPRGZaS1KHUKyD144bVJCZokNstznesnxQ4oazjVCA1qwUCuPtUHrANcp5zwzz",
  "key11": "23ZgbBRTh2VibJHecWw26zYeUVT1grBDC3Ecg7s3kGotXZF2LVoDtYFSDEREeKPkkR7DzsZ3cZ2eyx11iwquY5XJ",
  "key12": "zagDpnj3RZhbUmfrSH9n89KJ36MK9fctXbTuL8zRUdNCehseKkVnHae2mCaC82v8gvP1HHgKkMC82CXnkKqb8jo",
  "key13": "5yhuKH9PE5SG3T4G1HLNFtRQAfrQSvLbxKM4tWrnzUgcd3agMRKPwis7FJZfb2oS9KPKKQV8KNJU4YiFsvEGAtwh",
  "key14": "2P6JYvJVh5UHErcTvidgBnePsAPqGRLdc4nKb9Hhnn6ZhVGq2Ezv9sp3jTo7JwSHsB6z6HYahXxd33CRuncfNpsC",
  "key15": "39nXJrYHHsUXcnkyXSHcs6hZL8J3LvNUiyjHWh6JptoXDg39u5V4rnseyzRftBLrKcEDQuRvGN89TQgSXEVP4aDG",
  "key16": "5BdMrNiKa4gM8iuTKN3pU2M4cxbFCNYZTzwdeTdrEp87qmR9Ww7Ni7BsPxTJPNKmX6QUTYrPdq6ms3uBatyhpFhz",
  "key17": "3LtvPdfM6Eqe69PAvNUkHan6ci3B6ds5g3pMwhUeXdsvjcvnj1vKkt4dn7fxhHX5GLquHn4Y4nxMLbLHuhcdFW6U",
  "key18": "596WMbBdyjiTtL1d2KZsYdTh9vJjzj15MLtrudPP5sxSotbb8oZUnrBcW4PB84qEgajr13Ej4wYzG1kzgSzisVXe",
  "key19": "2mCtr3sBJnqFfKmmHGXnm6uvdvnApMpZkRq79DUBqC7RbbZW5StaeDwuLKfNTnAr3wP6WeJVKZjaDPivLJT1rBQk",
  "key20": "4uCmveLKakdfU9oyBdKMDZFuFyvFq46U1joWrPnE4KDGCVENgVRaE59v9EJZagnwiib6DeqRjP9dyqULCnDMCfYf",
  "key21": "2GzkUdHvgWijqVLtAL3EdeaBrCEVtdB353eistpzVC22cByRC6EcGVcsKa1GKHSNPFyFwTH6YLjCfbHo1jr2y9oZ",
  "key22": "2JtfRyyVoHR6fpkMMKyvQqPVFmhiF5SYgHJqtW9SXJ8m8XYPRamkC5QFC3V1k1yBKAvpcuGxJUYKnkszbRAxpjke",
  "key23": "4nwKmMxDFKW7YZ2X3n4N2Hbz2m4ctbN6ijG8v6BkTz7zxLAEnVtqcJp6DnmbEMmzjEutWay8dQtXBzV3AQJtM5HY",
  "key24": "DhbbY2i7MjpeL9o2d7XPvhXjDbRAMTZ4jXPR6uvvu2bR7D6i6yir2UDMpPQWQYQWCDTfrAXin1PuBQgaCHsKh8e",
  "key25": "SVxXydAXv8MBkvfmYz51qyiw87wfHup4bGC2RwbEHQdnDy9dF2wvG3UEoSan4rAjcKatby2hRMA5ZGVSX8vTSeP",
  "key26": "4Ji3Sufny9vDYR1291Lkp5SoJdBJy8fTFjM4t5CUUrZDhL9F4ZmAi1hhnp229Myeho4C4XGk3bVVa9cYpj5h6YAh",
  "key27": "hya5oW3RSMS4KCD96sK5oLNyJNpttzCujnBpFjgXzY1CAUeLzf7MJNRw57zkt3ymvBRNUUTPD2VEGmNLEs36DP5",
  "key28": "62rUAv7mT8VGzXzeqmZZ3gF9ELgYidYcKrnhBevNawUYqyGXZqdbZVDA4B6Ub7TuwskgtSzqB5MLE9JPyiv4s4id",
  "key29": "5UTG7R9ujrZVVfW3EURXPDpDdvHG9hgS4rFM789iuw7XZ8U68fMgrnuec82jsSwGhWTNWGefVfusr2fz37BpQGCw",
  "key30": "P9xvTikDNrSpfc9nY8L5cvtUSWbtGBMPM5ZAKXgk8kqD6rJK6yaLWjsV4HczwUs4oScbXfZgbEFZK2LsZoL3Gp5",
  "key31": "4La7vVE7HnTiZXDdXhCNF6jvbq8x3zv7LLyEpi5qns1FMGfPiaW4hRFq9cNRtkfLi99v8T8F8XEbH8n8zVxFS9Ya",
  "key32": "59mSHoQhbXXSAy6DZKVeQWJL4KUVwKZKWnMXfTZJwURsbtkY61pNWYFwBKw5MLsfAGcgZfirxMLLcpGsP9zbt4VM",
  "key33": "4PsBBmCMphpToJhdthw8Y8L59vEJ9SoJLxt6b6ebRq7Wei9PoSPZM7SnDTnCYrn8J9xkJsXhUTmb2YCzbKiFds4b"
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
