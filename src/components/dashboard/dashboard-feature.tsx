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
    "3QtdJc3mek2DRbw6pVhqf4AVn5jyZ9SCoQobWixUy62etr1g3DKzFVLkoggKvnksZmsSfWK7GWF3bocixiBP1jb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChXgCdsrton4rTxmrBay1REr75ZyonXFFHmJU69jcwi7txH3Wb2vmKrfQqTZsziVwwHzAo51F22ZoPEaV3QFggA",
  "key1": "4b6bXMmJ9Vq9rrbEtwweZKdySJgUNgeemcvUVHAwqBM6Zdp8cytzoyagasNZeRz9C7k4aBjVxWpEQPxqCdvTeBVm",
  "key2": "2Yb558DXgiEnwLSE8ECy77CD2YgmtNcTfb4H1h6RKMbn5eff1ftCqkDjdjA41RH2BZgYh7KXn6yvUHZwAm6iozRU",
  "key3": "e87m2rMQ8BaMHt9ducMG1Gh5TTizXiaMieoeWZGAegTGKQpq7qz8GPHWko1uLhawSXeKduYdgeSmwZ8y9dcN5re",
  "key4": "43hZeFHSq6hrppatbpT9LseABJpAKcNHXgnJxrzVxqruxNSzdQh3ggDwvmh7to8EDTLTWfsqFgvqRHDD8Haa9gT3",
  "key5": "433XosjiYqZAhFrmumPixabhssy7xVfkhmRq5qdLxBZF4JUUjSHbkidoPDsPXCwyE1h4N7zEPReCa7HkBXyWg1af",
  "key6": "2UZEhihVKy91wWJm9GXyidb6RRKnGpJAxcemX2n1y41cw9a6f3xF6fwqRn4HbcwRtYk3FwPCnty9Sv5VNv8k8T5w",
  "key7": "2cWis5BtZ2FLd7jp8RjgpnUCoHtkUb9PsSqcycyRHEmLV8wjKtSQAkejjbRt9YRXPors27w2kux2Ki8jtuPXj2qM",
  "key8": "2uQXiZcJ2roLN4Zf4cfGv5SSUYg9Jz5nMD6sqfwC4JqUWhsxWDrMm3cu3LaXAtxkGPWjNEr4aLz6UNyeymA62y2F",
  "key9": "29G44Gh4Uuu9JkWTngoC6pGJCWk1Qbte7w7UvMQD4pZ5p4LJ5azCEZfau5B2sU3uk5MTHgBJSiHdMKd2c7GAjbnf",
  "key10": "Nfx1JrtPvuq7GdWDGNwPGCPmH4YFWrC7UvPCStit1hsaWRfBai92XXiihWmaoabrZ2G81Tzq1ZcqFJPaf2qTMxH",
  "key11": "uKpq57T2GhqNegrefv4LDv4afmzHNFJz5rw5fiGune2Xa4apSEqDPr7AYACWoAFy4D2JAf9uMFpjq9fPqVtbZLD",
  "key12": "2uHjXCU1hEUnTyE9GbUR6jzAR7aXQqmgA33F8HZrXtpbjoh8MQ2ejrKv4y9uGCRWgSSBeQtkngkHZWZaYNKPo4Fo",
  "key13": "64h6gzD4JqkFLSzYMd3YRyzsxgo93L3tXnZYwZgGZGAUYhbNpWnLMhkiwvPUGckZWEVutdAFZ1ZbdmN9mrCq6DXD",
  "key14": "nH11MbH3fG6fzRG8oqKgtQa6qANoMJjZgpdeXTzitrhs2zEApgVnVDFvaH9aAeb5MyoWM4hQvT9VJEps2zqiaX7",
  "key15": "32XApLtNo24aU9YpBpL1wcNitDVDCEpSaS4gzYyqJSeuvEZgfNrzZnbZ4FcN5j4VR272kJ5LURJHCdToCHuMdi8n",
  "key16": "3ycytG6cbX1nUe4UPdY7hjLmZnbHa4nmvszMrLeg8ZgyUbbnXE7EwArbnMwxjXavBAMycE3JkmXbkiretukuwcrW",
  "key17": "eEUhqXKh35X5DLAMMrhLfP4Cu821useNPEFodJ5agrUUxWTgu12RzvUcPdYSBeEtW8MNP5kfmVqkXycgNrHRB71",
  "key18": "5X2D8HD3h5bCWFj3BwjrBs8nRtCN82mbddXRxqhN8HUNEgG1KgDVNdZ45kUAqBXt4JpYZGBusJTUd8tHgZtw5EXP",
  "key19": "61smZJ5chxh6xcninwRbZh3p5pT15U91qsa35iDYFqYpgAi9GXW8nkUi3X4F42oVHo42TAi3wQSuuCSUAASFxKoz",
  "key20": "4TvcqRd2LyVHND7JRLCTGedg3mReR9tMPnE2cFdcbqLQ3n7QVmA2Bvcfeug4EfXZr9hU7uBXtrxjLN7MwqCuBiQ",
  "key21": "u9sUThAHbx5Ly93BpQa1MysxsmFWwBcz5GV3kMyfNhZD5criW3WG6MPcMn4LpEeYeNuS25UYLk7zgWrwU5DLGwc",
  "key22": "2HQbyoRGxrjkUVkRe7wqt9M2sWQ6Fv6UM33NZoLGuxbNcDGFrjhdyAYLbqFiQY7vNWbNZ8qGXvmEqi3m4bcJTNDM",
  "key23": "2n4gGRqjoypiQ5dNTjpA3rjzs6NahvebLRuAzYbWcWemE6yvYfpmELd77WdnKwagWTVghTdTq3MFgbQjFbW4rsF5",
  "key24": "5cpddtwfvZPrqfzNyd5MhRykS8sBEg6w4atizFckzqxB8pGSbDZRJ813ihzEicqfJAEkUCgin3FAGqzktcmYqiuQ",
  "key25": "5Azs7Q9DTSGGAWZ6pR45UdNmoeJznPbe5CrNnb7d4xmDdHNmq4qq7kVBhkajLQd8WPtG458BdfPr4R1TWgPNFngT",
  "key26": "63cSjpyhK9wLdHdB3if2JJvfu2wRZZ1uN8hwWaQA4bEb2tY3UBi7Uhrgt4ooQeJjkcyp7T8B3u47bG46dL7BgA2L",
  "key27": "3qbdi5akAy45rACijGaZ6fgUPjRRjoTnF4r36b5cFvVgai7Hv6XviHv9jnuo2ubYst2fD6ZZQxoVUuvts9h4gHCG",
  "key28": "31vf7Sun76U77SF92Vcm2tSdypPbMR3CAsn9UpWwJ11dawKCxYh5Qh1gmH4eoNQDsV6bFPjwYZBX2j3WdF6rBnWE",
  "key29": "DWhvGEwdfNfjYhHV6LJ8MHWQZTpSPpDe1mZDohWFuLTD6hAKentpUDzNmU2dpLHxFqJrw8X8nBqTpi1oNXY3o8D",
  "key30": "3rMMx21JjaYk5HXkLkeN7VKsggAJ9DHiPMBJpUMJeHT65GdWtLVZs1wckULRmbyZ8TDdyhMYRBygsdvReSoLz8Vo",
  "key31": "zAwPF2UHtkUngUSmueaBWVDwZBuDHCkcvsdrDvUc4hc36uGgJAJz7mKxk2GknyCy93Bbg7vLbzygSa7RNYj9gF4",
  "key32": "2a6hWQVK2Y3zX3VTk7Rj3JTNge6Y4HENiyEWvUVnJ4QuMBdzUoJB2VZtDA1faLnpdQRvbjs7KAbjd1dEH4Jfa85M",
  "key33": "3Jf49dzFV5itpW1HL9yd4ExTduCV79mVJHj1cF9efKyBW65byaehzXzpZRq3at63bdvzDVD2KppnUPSMjn4jAg92",
  "key34": "28PfA1F2CBM1YgYZuQzyA3sdPWn5Hf4v4iXSewtqk9SR3u5zoGqutXKwgPyCjBmHSCXFsLi8s3gzTbC5EKwoD5B7",
  "key35": "2fd7kBiNb8AXGXkiL3NFYFJGDkhThEY3r6uFuNZFArEtud7tR5zCNjbGfXwwSw1wc6aFVbGe8jC6ytu2dtCS9cKM",
  "key36": "pu6fDvS62QEi3PUVX5eM42cSkZpZ26qsn41L1zstQrMtery4XCfY2uXLrvNsSPU7h2f8M7gA59tKe1pTRMSS2Ch",
  "key37": "2AJYDfczUpFTrBgGLEwvmUpGSVK3m3Vh9wXnK5dUG1U8BV8X4qjfj63TvUGVWtTUZ7iKixsEbzg27RpvD7pPqk6R",
  "key38": "5NTC6XbZ73CPhasX2qdFRdEMPtMwLbPVixYKYMNFRh1m38mq5R1K65K5sTCK3j6z2FcVsMuQNwLVLRAEqGPQ5B9G",
  "key39": "5NRD1bzoA72UDqGqy9cqfEhKV5gm1FN47h1gqURnNdGzr5WXCC6JVR3Mg7FwkdeFRWKdtrrWcFsU5ce8ks14HrNA",
  "key40": "3MAB4vCNLVPFDP5fTxpckiJvprdtQquwrkSYhSyRredHRbtmiCrSbcaobahZ3b3pWSjCvG22tzbFiCM759XXKQKP",
  "key41": "3Vi6T6nFq8VEbVg2XNDJEKjpjqF4S2JbwQv4zAmKEUxPofXsTs9M9of6mVMZN6PWZJ7VivGXRFQSx6TSEtvBDwHL",
  "key42": "22K4i3B6dZEGr9VLeyLtbDjcgMP8687boaihJuTdR1URJP92sdQobbVbCodSuUTj4iZ6v58x6GUDeDYuCJVjim9h",
  "key43": "3TQzt346Bz4f4kdnuCkkrmp5winuayFMsgigHXqVC9DMaBZ4acLFhy22EeJxwY58pGWuTSqTwQop2vvogyFWFBmc",
  "key44": "v1ZUdyoY91h87JA2E82m6j4yPKaTtPduAU8oFKAPVtwGxhynLErJ5ofmBrzot24KWURYcBbiM4nJ1YfmXL3Rfg2",
  "key45": "3sag5FbPukNmQBSt36tBDJhEBSYzVfg9Q1hCyu9AweSusrMnkfEQv8v3i4ZhuSWQ6UFED8b3f3dy3VbpeQiCko8V",
  "key46": "56VPZqunyJBQ5YmHsg2dK7EcimV8DUN4cNbV2aRdsEow844n8bE9qghyi2YVg8iieHfADmH4ZVfj1QgU2JP6ySEi",
  "key47": "EPspzNefpo4UwKTLFY9tuSwk6XSqigwBGH2pftvKuUAxfb5dJwH3qYHDq9QN8DEtYMFV4atfKXDd4dWS7rvt8EM"
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
