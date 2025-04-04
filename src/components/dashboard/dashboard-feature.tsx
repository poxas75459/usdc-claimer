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
    "UpvK9Le4FgvSsoSjcWdfu3EERbFthECbEkYxkvzZwjLQ6Cdus9VgjioYby2gffcYxXii2a8bi6H4yhrvypfXpNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w14KU6x4fKQJZz4YJhPLZo3eE3MkMdr8BAJicUS1HWCSobHR6HphpWGqgG65cAzxfqNhwv6vbuWhuRKLyuLDVSF",
  "key1": "2e5KEuRJtw4JtkQZCkN8Ui8RWHqzZ7a8SqgncTvJCRVBhEBJ8oG9h8uqwniE2GmRxodjUvvve4SzQTVyFZ18Yt9u",
  "key2": "2G9qbdxd4EejYdKJcG3SJcowsx1NDhJoX7r4CZTprsYtHW17SdmY91B6vDDsCHpYBLUpwsxGHeougLBLs7RyXwvJ",
  "key3": "5hpjwQchpJ5uehoLYre7MhaETbLtnftheL8u9sn1FhGB23Zc1JXQPxHUvQKTd4nF9g5ru2R2rhriW58dV5Zdb23w",
  "key4": "3Ge4HVa3SrBNNYZWdahxvToTVSHLWCHwMU9YgnfW4jBkm9m8hCaFN3iZpg1veg2K7ABNLBKLC3hZk49Q8agpLMK8",
  "key5": "48J6jk61r8L8mfaqkEL3vMzDHrnHo6V5cVuYNnU4hCGAE884op95SL15KDgLFVRAMznbo1Lw1cvXg5nvmppdxaKn",
  "key6": "5BKqugEYCkvtUVpDfRBkJe78rAZnKu7x4dHA64yAT4NuXRJHYd4PMH5abWJUP6tVy6GoW68gxaokQDYD4sAMTQN3",
  "key7": "4RhMuVpaX9CeK31izEhyqBiF2CdgT3ZeBR6E32JFq1PnAxhZBCLnaUHFyeeLkcXhWeMtXDcu7vHH1rwnFii7GZEF",
  "key8": "2QRpmerL45uHBDGtF5SbJf2Uk45E34fnXQmjFrhygffKeWCRdarwNy5ya7rXEoVAirkqveCKE3rT5uD2AukFmdUE",
  "key9": "36uZpCghaNTRTXNj38kGgAsvG3CumQrCwpuF9LwzU4xNzT7QuGiJmM6jnDgPzHPari8mxie2U3J75R2irdrP3jm8",
  "key10": "4a6WSkPhM5px6ftxyvXQssucX9fWVpr1aZAfUskxTrpXKqQ1gpd1Ny4PtTwsTsMZNRSC3zHzvh9CNi15Sdc9mswd",
  "key11": "V4SRTpxCpeNPp4A66L82v5NcFyjci1aHp5mJshwXeDyjaeYCpbf7Cs8jhR4sCvBve24LXr7Dzm12XXVPXNGhEva",
  "key12": "V2wAwFvDfsfimyXVY267B9sQd5zs3oRgGaTmdcoTxj849b9Vkp7ZjztHLU8bzLVieypAGbXp3gUV4N4bMPMkFeo",
  "key13": "23Xvk3wHUEfiBP2g2dKGB2LoQEkNmjVrNDtUP6qnqeULfJXjcDwU3p9fqN6TPujTgRvu3Veohs38QTKdGe9cvXLk",
  "key14": "2jYNLXizVM6ELviDyW7GjATx1CFMyhAutSUZpsAw5jDRZz6nXwDPyjdjwMr1y7Jmd2y2tNoZQx1Rgo3iJVpGpJQ6",
  "key15": "3EC7wpqCaXBXBvwhkR1T5Uc4b8RdDavZAfSfQB7yGGSP9gN9ozWHYGhYw6fQiEgkDbwxUSPPXHkcVb2CGMD1XYwV",
  "key16": "4DriABry36h7rF7eC6o47f4BpkS2V9Fne8dvgpJnWWPEY1L9u7buQjqtTMgAhgnwaWTMuoLxRV3jfNF7h2iazM8H",
  "key17": "3xH1MRA2KXCceFbKfYxJoYw8VzuZNGd2ndyr2V4fecNZKKzJLqqtJyCbDGKZgSXrtPrdjmb9dXGjuhaLc1Ygp3oU",
  "key18": "2RvRK6nxvuUnjniWbJ58AW51YFmxxS3mM6Ly3xu4UjF2iDh2ffPGcexY5LY3Wid3EYTfxrGyXD85x9J9R8oKJU6f",
  "key19": "4zFWx6gHX9P2DFgBRXLyrZ1oR4KVSxiTT2NwMGnszKhrM5yx6D3M4GwVNTPrZrSMSUw4hRGYePioFxEATNcbAmti",
  "key20": "NWxDzQ3QJSjVnnXY1TakQYDuVjR4q6wJnMmRTYpKUzcFFcUejYH3qWQDXZrh8cXqtGEkkkSV5kWUJAK81bLxvd4",
  "key21": "4e6MAwC3MwG9dXm8Jawvw1YXBPeMjtPJnVrZ8tXGn2Q7tQqBMaWnhFEoPZA9iRBogndTAXYE3XCgFsUWm99nTnf",
  "key22": "35Ukc6xEe7yavkDdBBfGbHjksKzQjzrAJT58WANeroAUuAN5FEczqr44h1kiAjZ8vsz4QGphf9sqWuXHkxCAeaUQ",
  "key23": "L8U8QCkhMinWb7Qvv9HYjDmakJr5zjnr2FCNcsSaWzLggajeuh4fPYDpUpLfz4tGAppAzGo3PYeUHL26VHH6nWi",
  "key24": "4BJyU8bXEYPdjQYQybPJALC9qzPMF8jkWcTTxLnVAVqoAShwdWvGdoftpZ5qrgRDsi3ZDYv5e2cae4jQgRztcvkr",
  "key25": "3H9YYgVyebYGYkMJVATsPXRDKmB9sRnjR1zdG9m9zzj3hSZB945LX4kkp84Fx7nRcSoCLtDMFwhxubnze2vundPD",
  "key26": "62fVrkCCPjPDm5vAbyqbhimGQha6sCVD2tAKZ9Qb3jp2D7VJVu7jVWqMW5jMt3s2PG7kga3tV6jRQgwQDBN7bnCo",
  "key27": "4aSz8Aj7Nxp9HKufAgr1w6ZHbT5AVJiRdAyvkLYavG1cbYGpV62gvxJoimFmWh6aYMhThzDqkdwg6kTbp86yhMZV",
  "key28": "3R6VTNbXwMq6zWU74dKL51smR3z8KcoKqbUff2zJ3DY8yG2PcU5wZFgXEN4ryNcCkfcfUcndL1yTbays8QGDirUQ",
  "key29": "5LK4DmHSqMZAP3MhsCvhMC32qpMWZe7ZRRsNZ11VJhrRZLe4NyNnLQCmSHNMNFLoAttfKcjCsyi6xDX3NJpfcNq4",
  "key30": "37ycBajeJAPFSG5LhL5cg14JHwrmWc6L6E3rcJ6jGFzg1rq28Gj3D8JbcJGdsWDNNiK3kv6k34hTvbcbaiMV5fk1",
  "key31": "2hNTEDdYcsCvRBX4WR2WiqXpCTQNcQrkuFpKLkkCadAhujYzetYrdekWioi74HfaMdB4zkRiU23rEx3r11KzRoXG",
  "key32": "Dt9dTGSBwmPrz7tJ5iPTKRGZiEB3XscDn9g8YQste4NRX3Zy4d84dufjWNxVnrGUSK9zzpHjPXPyU2c4Lt5Uqvv",
  "key33": "2KJBsUVEGkcKgZiaK2avShJ64CV7FGYsVTVasGUvQncL5u6izBjMBrmVCjoiopkj3L2Y78oCbBuczfahaxKHKLy1"
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
