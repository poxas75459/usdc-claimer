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
    "opTkNEHgjyhj4iFStVamzoTMquuHM6mLpmoKwWWTRR5PjasEEmvC5rHrC9WrJnMyhGZyfuxeCdSaR1VNanSdb1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPgoydL4HxvPCHPfapoeLyf28uNLFikZKVJ2mSUCK5x6xxep89UhQvuozaxyPxnfUSVcH8HFUivAnYtzcQiBeyA",
  "key1": "3svyeHtUYCkyYAeyfYe6CPpbKBANoASYGKq2nfSkzuQuGH8jWNw45i4DNYC2YhKihHrcE89Xeip2QSUt7dWeE8XQ",
  "key2": "365DVXge658HV5itVphVG4iWvg6jDqt9tJaxcDqUQFAtqh4pGeVRwBtmNPLKzZsK8serRiksLVgCEAL9MEeHu7Rw",
  "key3": "1n5DiGCsm1ayckyyDDsHxd8hVoBXmdcY29sppYQMMoE7PTy2WNmVf4dNa1kqWmxD2FX6BmJaAYtdwTu6ja22gRb",
  "key4": "5ki1S855jHKxheG6yA47dfLvxwdQf7ku1zRBrHdDwWjyiHuA6K6fMYJLkEP89kCTeu6UDGdgCxehcrNrP5qgCceH",
  "key5": "4zXT3gqyt6Fv6KFanBpYqoppPykABzHYUvHZfT8Hvgsq72fhLgMeC73Vw3P33PfhG2ASomSTj1LCDUPaLK4tkrj8",
  "key6": "4vZTnHiAiNt4FXXLDCaE95e8QAtPveYhMdaz31one5ZH8kLu9cUjiTQLh9Zk4K4KYg1qyRgdpoYghLyXBq1y3kZQ",
  "key7": "2Ys6P2ezF9Mm5eBiEjBLVCRqXoTjB8SiikTCZyiBq7MvHHmoobNSqnzqqnoU8hKaAMuiZ7opgHeeihmiz8TLKWBG",
  "key8": "4d6Zst4YSv4gqYQJLk8grDjUFvStQWJXuiemfH8sfAy5osvJTADcZsEAJ86ZEDFr2PY8DGgdBcde8kYokruydLZq",
  "key9": "4HvpN2N7zpMXnDNeyDi8KeVxa1DnwDwkKHDARmExEG4iXxcR5xGHtfkz1QbVyxsoVPZFpqdvvtXsfgqJVdABGsqx",
  "key10": "2gnfXKss5TZboX4WaynjvGXbHAa3pKeKmBJnDZnRGqL2DtHLUmQspn2VzTAqqDHRpK6HfLBcvPnJQDdC4PHT7saP",
  "key11": "28fTXgppU5RsPpQiyvfNpNBrexRPb8YsNvXdjVLobzY4g8gzZby5z8eHWcVjvwB9tJhC78sBmspNxVsrYPVpBKH4",
  "key12": "LgFC4GLCVs2mBwHUR9SP56CLHirEQiaP9iMMx4ACFx9SkVybiiTUTPQYU2NCYyccqogsyNHiBn3U9tmRnYfJuu2",
  "key13": "xQD3k46DezBhFUkitfYmgGrb3DtuUiyUuteEt97L4oADoE5WaB4Z1347zNZ8NeYhtMRJNgnpstwH8VAtD5uosF4",
  "key14": "5jzo9uNAvdKmB6vMqFwNRemhHZmBmc8xEbDyNUSi7U7wbubFTjdx7LRnyEsL5f4GAR7oF3kCAqiZNAnaw6rCoqCA",
  "key15": "615UhP3cVMWW32TPdGb8WEz5Qqd5P2W7dCRMAB1vY7n8Jnb52wPxQKgYW5dEW2dnW8S9dX5B2uWjDcxbcdqADHBg",
  "key16": "4oAFR5McCQmU7hZDTCH6aWNwyUGjEHo6Z7Cfp7KVnjV9gYzBx3nSbBsT2ii3CMs7LPoA8BAQZ1odXGnzkbrDTWRd",
  "key17": "2PvjifgcZ2FeEuxYTnnrWRh7RUQtnztcPGTtgg69B1hCuLTqn9MkmvaXU1zhHuFDKTcTWxGeRgpieGJE1ognn77F",
  "key18": "4wteJeywEgBSKocXMhu4MrrE9ZYqToh3K4wbn8TQBqLqBASUYaYxmHB98WZPwUgnFJ6C3avmR6xTMALEkdc9bnwf",
  "key19": "4PVR9zjsv3U96JNaF6ucF7VGTJhbuXFFzQUnMQX5Y3iHx8mfScsc5XXN4epmVZojpGNRrsAkMNrWyQKyTKXcFBEt",
  "key20": "ReJ3XHVbwn4dGc9t4NzZqr1QG73gcQ4M2mfEKBe6VE8bPDGHt3QFhUbf3Cg5wGrwwcwMy1oeQsbc3wv5SMqd9bo",
  "key21": "2VbAwCupzYsZaDSoVXZvFMrjtf8o6gBSpNNEtqBtGwWJpW3UBmBYHLKtVFW3VhJfLU2APGYvqgYSa1HpqdiSE3ob",
  "key22": "24wUZwdnMCqiUx98cHHV5J8pnNmmQ95JWCaVccUt1DQubme74Xzmnouypbg4ukN6V9YhwahvjEp1B4CA6g7mk36k",
  "key23": "544F1t4zvJdQMfVCWgWYbh1vKNY5uYbG3bCYC4QEuwBv7jpFhqiXsdDTTQ3BQq2593g6cr4xUdrRCRAm43Mr9oE5",
  "key24": "3DcF2aYY7w88xTg8jDXggE9r3tFDDVswpBCajPzQt5qTREHq3dMm3ZoDiBrXigbsBqkKxkFd12arwJCnRjmf5wUd",
  "key25": "25KeEPDLhEyQ2yw3BcWTLL9oRfTJP2DBYAeSx2w42j8jfoezjfDg83RUynkm6uefcQm9pa7Zig6PzHdsEs5Ntdy6",
  "key26": "4MvETVQq9jyCD9iu5iu783vrvze7RAwfcD9qfC8jwc5A4Dg5sJw3Taq4JBB2nsMDf2kDp4PHTcCKMN13crSMEBSa",
  "key27": "cdAAgmLdCEpC5oBLqZPrZPBwxhuUyrLkqDNrboyGKdzFSrzHGj7XSVtmrVRAZJ9Nh4LeCosM88Mz2xbCiybdrJt",
  "key28": "3XWM8jBMq6SKkaGhQVS5sSo5K2NUCiy9dMsscQb2iLicSjQMzrbc6XFzumiwHX3ZzrvHprBk42HcLcmfzojAi6X7",
  "key29": "3ce5ccqJLGrbP4xQau1oNuFZLgtb6AsMV5Ux78H5LaHPRL1G6MJh4dUqWJ4QGEpBwjTGQuEiz6X6F3R1cswcYf7i",
  "key30": "kujyt3VZNPuJMCe4QpSsP7GT7vb79QvhLaX2s7pT2D3LQXq5V6JAZkRJg6xrML3ayw6RUbQFtQdv4GZXffBe3n2",
  "key31": "3CLaQNwhGjh2eLxjxe7e9no2Y81U97YfyAqwz9MfTE1LcRScaQbrwmnPQUCdABXi7VtTREHyLbn1XY4Jz8Q1H6q8",
  "key32": "zSb1dRAGfcN8jNnb5hzamMVAYNCNH1bvzVYrbGhejKYn32Sp3DoTN5917Gcoz9z2nB117w12iwuDRDwtc8fcxtB",
  "key33": "49dgdfagYyjqwpKvXR8Nf1zLZCcD56oXytZ7MZ6GP5cXd1G55UNjtLd935mdDNHfY4JuUGPTJ61wBUzpBXKTMPU4",
  "key34": "3sAo6qE1rSvia9wAg7DXHdC6XGNKbyFZwyFeNauwiFg7KAU2UELtRcfayUVwJfbNHMN1F7NKt5Nb5pMMANf93RtQ",
  "key35": "32tD3qEWPoqmpcdWPdAiJw5sYWS6Yif5gx1UEKs2uxuo4Yp8rVUzCExcQqArKnoqhW5gouXKFpxiFTUGP1jfapJX",
  "key36": "3jLdu6vrNjxsky2c6f2aGDiob2Q9cketKAmTqFtC9iieNUUo6Q8DrMVBeyncLL74mfsGmQ7HR88641cL85uq9yRa",
  "key37": "3m1AaU3WARPzYjqbWTzru2FePjjiFSDkWrPWjZDmnNN1H238hEWgcsJxNR14MCtZ7cwtVBUGyuJrGVRPTAocoDuz",
  "key38": "bd4Fh2jGGE7xkHRfBAHbwmbXQrnnQ2WZWhfKWJgC7AhKcePBHZt3L65UnNsqtK1RWKqEijcjWno1mCBMEgU3xE6",
  "key39": "3nhce1qT1j1FNAFqwNyQ6d851pcisYKXtUvnc7rproNKoUvdwKC8tMAMqNGdBAhRXWtGy8dZaMwwCvKqXUmrwWRM",
  "key40": "24iKb1vvFRTS4dYWxyNMVJcrLFcsrsXxeKAxZydUv2WvP4CpMH9JZbKHzXyTH97XPEigh9XrSTKUPvnVmkHY6AaD",
  "key41": "38i1HbJauk2fh537xXbvADVSM9AEJ5PCKH7g8ZanaW8mAR6mDYtaFbTdmhdfJT2HtmAHxzBKciBEZLqTs3CBR7JR",
  "key42": "rE8MJ8Dsnawr7Zg2LfTgz6ooQWJYYdVJc8Xx4ZUTCnpNY2DP6XcAy4JQqZhcJUW7BoWAaBoMoi9CvD2DJWZxiuU",
  "key43": "4ACQtztEYZCdMsyMN2RyPHibhHHs4XcKT4kdE77sbZ5tfe8h7d1y84rY2SfAtjyK76MVC6VFu5aYtKY5kw9pnjdX"
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
