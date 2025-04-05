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
    "22uLK5feAyqSTBM1ZmynGSVGemk6h9wif5CqX3hmNkq7uV97GQN99QwQrPA44YJk8v2U3pvgy55RP6C3C6dH1RLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fUvYPWewEng1bLYQcaVNU3WQf28T3W5QRZHtPrQhPGpAwsZwNKqkNLQYwU6x3VthPLQtP7aS5bY7unBUMV5Qzc",
  "key1": "56oMb7hoeAL4wSQJhrKuH2whpcuuSYApy2SzDUfnyJ8Kuf2AgLbTLJL3AAbT6Xqhxz2sXAHczePz5hujkk6wNbZg",
  "key2": "2zmLojfTKDFK24FwfEjZUjwTWinzec4yaY9RLH7ZEk5vm9coL42n3MdiVxDRF3se1QF8TpfujCwsw1EZyA1RpBpM",
  "key3": "3vXgHKcX9pdQNvgWaJ4zu1cDpqmGefmeFcLwYu7QRBrpRqP4dSTuEq2tiWvxgjCaHmP95edzFQx3hwiTrJAQ5xbQ",
  "key4": "4Njd1y5Xu6rpzS5p2cKSW47USW5nZXhxZBz4gDoi1C5GLefa6i6uqSDDoWhcK3CXsDbQY3hHyTW3kdhdpDpqrXYo",
  "key5": "3bJi2A1b9h5f17q4gfN1iMGtxVguXqdA3qu6x17bERDZWR2tdBeppusnFTduykfJW5DGiWtMxqr9452g8D5WqiKK",
  "key6": "3YCYyAoocbdspS1xGgzvzYWwP9T7Y1ntAbpHiMHWfx3Zx6MED4amY3MuroeZFUGzHxndrHbHPpvxsB7D4Q8mUNyq",
  "key7": "4Cis9UpMuGfBckz9WQ4MWM5UoGTxkTMKbZPVkSMRHZqXcrYxTSdWLVDzcE4h4995rydYEYGRs61qWspBVWJUsZy",
  "key8": "2UihJGp2XRtKbyGnvT59WvmGHM5vVanHeWJTK74rSKUydJ232tZ5SSGaJkECL8CQAWydVdBYJeAJS5y4kVrUPJPM",
  "key9": "4erAe3tFtb67QwkQ5H7HDBkAAz43QPaNBQJCDp7GLf8wyhoFyFeUnF55hzeAZcYDs4eLcVwB2Ga1mFirTFDJTqB5",
  "key10": "3oQMLLJsjfad6kLTV6aTjGSoNDsYSjSE8Tn65TU1k72P8MkCGaFtsgBvtnnjsn1ncXQ2udLUmqFyxxoSoBRUvEMj",
  "key11": "2DXkF3uRNjHTmrr7KQAsesafLioz7tuXVCxs7SyPEGD5FfMxsTnLGSpNE6GNXLQBBa2DgSsxKviPQhCeo2BdxPGV",
  "key12": "1XTn82NecmECTcr53ibTzUZJGMcHeqjYPsNk8DdZRQAa2oMiHrzhMBKA1faf8GVnxxTusJNNPQuG8gCjbPfanoy",
  "key13": "37qwKSaJfjq4NWZE1KcWByhPqRhYX9kWcpxzddcrDHpWbgL7cqa21hpvWYdm9yJ6pFwhs1umCjdQ8eF9GycsVQjq",
  "key14": "xgTX6zHWutEv6ZVg6E7Yw1kTAU5QrhGStZHo7myqb8AbWZDRFYsPhC53CLx9qDxmoNos9yoRTfJ7V1WN4VhvtfC",
  "key15": "296BNMYowTXs96CDaZ3rYAcmfxkAKKd5JoGRBRzWxaFrxhtH7ABmfarn655FDAeFhsnMekRCw32gNVQubmzJkyjZ",
  "key16": "5DdvxmoaahhufrKv69mrNbbMMCGJkoenTcco3XoMGF8PvxKM34WuMv7fxkuBDGrkjNqkFq6qF2Q7aN1xKpFVYkzx",
  "key17": "3iqGubKB79xQP47D6uwx76txPRuDGXC6qBw8v8amQunwteE72j7eLGmdwL7nj74c5tPkBfhV8YiTc8T6Sb6pgrEZ",
  "key18": "2ZPg4xH4chBDknBAQSTFfuHoyb71bSxSKWNHztR7FGiz9AT3UugMt54csvfSE23k8RavAo4gDbZX9YptNHZfJKb8",
  "key19": "4kxRRcWMv77esiuAp9Q8yjnfPz9UCZAQoovvy669CBEBFVWyKmi5BcdGbgD1NRHt5f84fvTEaobeHEGch8vmwp7q",
  "key20": "45iXe9y65NcV1Bs71mQKJK5K6Q46ahz9EYUmBDAsgTR8znBRdgPwJU5wKz8BdvchhhCJDKABCp3E5BdPEQepiUPV",
  "key21": "5dZcaEYYayJicPXqhenWuCf4nE5ChoYZJvgjkD3UG2NTvhNd5RA7gprG9Ljn7hmJyVsH3DxaKfi5Lxqve6153sdD",
  "key22": "5AUZvfGbm3twTJNFXnSFRoNeZEGVJabkC6uqf1UAmfCm31bFYsueyeE8FzWn12YvMbR1UC6aH2fJ7Cxe3GDK3hr9",
  "key23": "4nmu155LnsAos7tH7npjLouCfjUDvhccFD2L75HuumNX5FpY9rnnVhMY9PNTX7VcRgf7oJsWAskH6e246AQuu9QQ",
  "key24": "4nrPyhdwu1vF5eZsQ7QeRhSs3SuWvHRq9uNTWFDRSBywmNZ6c6TWuUjZktHqtUTq8mjGiNcC2TnqUn9t6NTyxHQz",
  "key25": "4wRNEBekR5LUcfizHLPvKk5xkSgtbYRJZjqPz9QSD8QRGmiLgvW1QTsFwCSzhnXQuBquGF4PtLPWhrWX2wPpTcfD",
  "key26": "261BxHEqa6TRdR4xKJyr2BSSpv1A7iJuM8AorzsGUV8mwRnjcG5DZTVfxUHLe18coRdzgxWNedQiokmcBtgp9b5o",
  "key27": "5UA8GMNUWEPE1KF9ThFw1BQnaqj5zsEd3MtMS2GKTVUowuHEaYkwakxSjFaN1tLgEcEv9jdMjYHhugNh1ZJaWy1X",
  "key28": "4QrtUMzpPpVBXENHfnGZYpX7MpUwJUKC4A2jErjhw98ajEnakveZMwD24vuuM3wAxWuazr5hKNF1zejHT3Nm9CFd",
  "key29": "4FkqHtgPqia49uFG4UDQUa3YTSeqkgKUsVjMjS1uLiwqvfZijTPkr4BUfCLHqQ4XFXrQJssqaC1eEtJDZMZqbiQs",
  "key30": "Uwqj3v1cyTJzrD19C9aUH1Me4nSWi3BFovjC8gFsgjxGmwmKapcR4P28WVfqcy2GvoRtgKG3neXXtTtfrJhMEMT",
  "key31": "3V2xdCk4WCu5XWsbVDqRH91D4rNza3MgM6DBDU3xfv5wjbmxPt6n5y14WM6UpavJTMVU8vPxniACWsSoQQha2bVE",
  "key32": "zmnUBhKmF3BQe1ragXsaySVb9BJaARepAoiyzJ88Ujcek6VL8Bu53boHyWom7eqZ9SxJ85Lh2m4eCzLYDftLyuU",
  "key33": "2gGEjrctnFJM6LT6moakqVLyVQUKWTV9DaPBFixH65BrypUNPyjFj51xvAEYdybCPsGBKeTaK5yCSX5vDZdwCE35",
  "key34": "3vfWEFx6fCnz8DpMZNGiQ6EgRLU1fPdRzc6dUPgxuG8T94M93gXbXEaNWYf4aLSwvEMKYnMzUroTz1vuW6ab5um2",
  "key35": "3gWdEtFmw5J4mAmE5SBCzWMfGjnTRwzwrAHASFmEAuWFRAsCYeGTgjEeQL6k1HfCfgV9LiAbaRjR3QXSY8ppjndp",
  "key36": "jENuDcGZG6G344JBxm9DDu9ZXzFoyu5MLPWQ9pbX5HdhTu6QRtdpr4EPmDr4QL5wqBPY8akQhwPHJMa7HZc4ye2"
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
