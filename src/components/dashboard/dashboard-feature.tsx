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
    "2c5wtDzRYD6b663HxUEtLM5nQRyKAsM4AF4TAZnsVZSLavqVGybFMNqLoLmedXt3FCWztGNN7c7nQKvr1PqrpXBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MHH4x38HW1wUFkkNPs9vYq2LowYxBTLhH5QNn1ZHBguCdsTnmA94NecnnaDBXiMTpRrRv5XJFEy4rAapUyoX5Ge",
  "key1": "9VsQDbV8t3EVJAzjVYVuh4U7aMRiBYV7TQ3chpXdTMTbJm7KfPtSjiFLKGSAvwJiuQRnNbvMwo78hcRtuL5s55f",
  "key2": "2XYAsuoLUnDa1JYcgut7GTYE8pcuHMdnp9wWkyhiM4nfiu9rssKRjQk9KQUxG1PDFcRZF5EhAee2hVEL5UHAdZTe",
  "key3": "4cnfKEpzFPD4rsoCGg9h7rgm4JhXTEkNAdQ2vs7QPN8dC2RcZ3VcZ13yhFX2vTfzUH3BagrPiekMyD9UaJ8mqgRv",
  "key4": "57HR9gjtpG1to72Bq1XXDiJTHyevDLj17jt8ASRGBnWhgApCyHgz54kKm8wGREnNPiu1BjjM5ZYFh1FX45HcWU2",
  "key5": "48rjRfYeCLUZ9cPBKyVu89gfv2zYNBhQ17RuPfQZESBNbBXvrhP2b1hJz3WcF9tnYjBEBuWhG4R5w2Cbn2poudzh",
  "key6": "4n8Zxe6j1gUt9cW23KQnLBQ1Wsug6JFsWoiZbtFftBRUpBEjVvwNdFgM66sqMYaB7U9FoaUuRo6JuVTPboCbKf68",
  "key7": "2BY11xs8uxk9bBECzKFhDuSeGGkWpUJbdurbtBhhB4UjPkQNi7aRJt8DMxo1UzhaCTee7YQHVvRP3HY3Yzmfcwxg",
  "key8": "3c3ZLEzzcKgapmjfr1mVpVwh6sQMBxBJ6qEdpoZ2xSJ4aEExWm5DQ5FGWA2bmyJx4CPgwyFZaedEXYTzoKWDYcpD",
  "key9": "2Z8H8XBPGrEZqQLmnY72xstbptP63V7BFGP2wJdt3kqMdr8EAgqAnts4f3A8P92xunCVn3FuN7xZfiiDjuxZ5jFx",
  "key10": "2725DXuXKizRJF4vEvTnadztLWLDNRq3ezWWwhbteEL7JmB6CndFkUhCp3nhZCmCvRs58G3aKeDMrseBGeZWXxr6",
  "key11": "C6tqM6yFDh5LBNDgLcheZX87SUVfuvW2bgXECH7QZAkYBswqwDYz6RxqqSZhYFdacLQ8z5DQhqJizyZq4v4r46c",
  "key12": "y9F2c49RzG9x9eJNy4Y35G4dvVTx3KCyj6EYMwBb2e4oSAWr9Urx8pvJPaMikoAfW952CGBV2VrmGasLN6MxcNB",
  "key13": "1VrNe173eCfMS5cyAFHqVgKKcc7mA13cebvfjiZgL5RfU7uDd68UcqbU1JdADBmXgJjpn5fxKwEcftAcj3vye7q",
  "key14": "4maVDXGrH93xAYzJzYuKrurjKrJUgyzdecu91QSbqHeCH5TigsGj78mvvhwzAsURkfoVSNYtGscSbZ9z9aDZ9DsS",
  "key15": "5etdvgcuXkDgbFT2Q7EDMtQZbFoZRXg4JGnXDj7ThCpSvTYSQCogHq5Yt81ycpE3YTvpyrpSuVNiQ4Hp2DXbJ6E7",
  "key16": "5m24HqQiyw1gAcMf1wYNGTdJR3p615ZmFjb5j2YHBFFax6qZFEE43NmbFrjpnKDGRwMWQvUvotxnuFZr7br9SmAX",
  "key17": "3E3satsGYZ1CABjsaGRYv7d4dVxWgBPEdLbHALTvKDe1LxrKwDjHUmCGwPsA3jrmGt43sbhqiGFAEAB5em4rRm93",
  "key18": "4ZPrbPBPpecXPNKn6GB7scxxmrA2jHnEiqNHM7a7f4wPsVMKBQbKR5KcT1mRNHaQrFHdgkeGc23smXN27RrtVaCz",
  "key19": "5UYBSyxTJ3dJH96xyBgXqhzGNQa1sUU1HohFPcdroxhhtvfFHqoU2vHMGsPC9Y4chww5AwRcqt4ZANHsnMzYzXcy",
  "key20": "4VJDQNb2VgweC87c59fcu3koHGNZT3Eof4GA6kAqpiDwYGfNVgktt8P84Gn4jG1A5PfUkx7mfSqYJ3zTAx6bGvEq",
  "key21": "4fP75uJXpFdGPZqDeWtWSh8nS4LmQizCUACGGdNwcfyvXL7Ecv9sAYWUXXe6qYpn57eqcyt28JhahnkLhti8KUSB",
  "key22": "4XKZB425s3VKToKxZtRMWwfVUjjtvoi4WscGHqd6GL9cU4EkusYzhhz7e42Mmb4DEA9mceHUMdcbThp3N1TqHQ5T",
  "key23": "65F55CLXo6VGd9nW2XQzwezbDSY8AWAsRpU1BYoJkVgSwbFXQ5AkxD18BDcDEtEHAuSqSdBMbznVmKGBNAci2xzG",
  "key24": "C5YXk9pfSLF5o2WjYFD4vzqkNUohiqMQoDFT3Ew3NBzzSJGrGpFsrBfBqWB7YWnvPmzgNWrS5dkvm4wKvgopUw3",
  "key25": "4rvkEmSYanXCBtavcz3APBbobohUdJ1LgqnRJxxcCcP9h3DUbcqfsvvYr7SqfJCcWWfMUF7bfFoDJFUCWXBJBeXo",
  "key26": "2g9dYNvGXwErXN7YEX6funoPxK4tgoPWd2LtuFeAXtKNX86T1uwHVBbSaLVyzaF7kbjVD4nhwPnqAyADxjjCYL4y",
  "key27": "4QiomaGH9G9bi8gw3kXFa6UwziGHhW3aVWv4Qvd4NmDWyDGsxqzcReJXo3DiT6Q35JmjCu34t2J4zL5CpMVqF1jL",
  "key28": "g8z1uWvT76eNM7RmJgGFJbnyH7jJRJ2piwjvVpvuUEWrNoBUV7ePAwYe11VYwbYoXXt4vfuq3N1KvkVBHfy56EJ",
  "key29": "5Bi9HfV3h9Z849u8biX4E7Xc7cqxg2QxrxXMY4WP3NpQTAL9J3GVrqu2nmiZPBp6Zdkfa5ULx8YjabJWMFiWAS8v",
  "key30": "2SvNyrxC1jzM61dgyKYw26287tnKJcMsTfRpFUK43A59siUyi6YTzGTxrFrH1whjmw3mF692oJ7J2Qvzo99HK7Hj",
  "key31": "45uxaAWcpxAJwScAUHzeUNxqQDAkVim6uwNijKHa275pkxpLbd9131ybXg5Rndxr4F2TzQeTB2SqqddLHnQ9NP1V",
  "key32": "2qWpp9ZQUDoUYKLVpaAMbGeU7xQufJjWPY6KoYsiY9e6HeML31rtJe4oM4eeRZby1do5Wxp2pfYhbxQyyTux3Dgi",
  "key33": "5JJMH5GJg84dX98M3a3kA8LRJnQRt18Hq3zvKS7JuuNcpki5bmb1pK2dkLV2MANjo4kNZZRBnXhQQADuJDJCsRX1",
  "key34": "4x4vyM6MuDQ3HvuwUwRV7nGg8qVmugG6EDQYtTsWfqhEMgdNCJgy8Q2zMTy5oPSvXGejzX5qBfJwDrJduS1N4MsG",
  "key35": "2wKR8d8yFgswdvNcZzHCg9Sp7eQKFdcoi48JoJyTZnDFutsfbazZxFeaY4ocm8HGcNqeziAoWygYBzNRyJdRhHn5",
  "key36": "3gbNrXwVuxCs9jp7A6vRoogZg27SHK4HJmucRLGTDZAszdhEPxkrhziJ4iF7qL6hy4tQSHm2XNaBoinbChmPGYzZ",
  "key37": "4J9GK4YSTAofVLbdeGAip78Ui4aGkGovGrLdK9GvgWwqyrKtnj2aAgaavtsjuX1YMiorcXNP4SzN5bCZoZ8dvVwx",
  "key38": "5MSauKxJ3CiyJz7gjnwag8XwwV7sxEUzqq2aCyNQcinaKWdtKmToc8w8AV18gtMoaimWKooYaGkdDcZ4RHLGecx8",
  "key39": "3KsMM2Z1n4nNHkT3WsEDkgmwDpA3fjFKFEBFbPU4qu8cG8mPKvjrwbWGivzo4D8oozzoAum3aYeHTZa6Jh9P2m9i",
  "key40": "3fgziEHBcyN7UpoAuxtJjYeKF2aRmgAwkseN9J94SWEMNzKWYSMEVgsdJCdeQBmviNWJA7aNdrzwkVxDfohtV2rG",
  "key41": "3dNdYU8PZ6vHckEg2Tb3fn6x9wwX5Z1wsLJBmPMjrywLjqAeJzDetV6noBEg6tNUKXw9ebMDbUWPvixgjPNQPPto",
  "key42": "36o5VQR8z5ZWhywVHrKraExbZJoTApRRtTtz8MDVLHqfXYXDpVmeXQ9Ju3xGb4TA3gU5NE6UXVxCarQePb6Ddgob",
  "key43": "Hxyq72jGTHfCNbzBjxKMWuWBB7cEL2Y6PyMUSYY38ugjT5TJ6QeF2Gv79cNJ8sMZu74xgb6UogucMvosvAUruDR",
  "key44": "5gR2fvFMPkoBciQHVr6pEu9Y5oz5kbbiseSemJNVupfKWieox9pTtF4Cw58vot83wn9VryUDqNMirxwpLm1Jn1sd"
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
