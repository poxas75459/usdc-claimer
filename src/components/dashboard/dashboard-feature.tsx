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
    "TvYXoiVpKUppVo1W5S6MnuAN4Gvp7LkyJR6WMq1BnB215eKUTpsqp5DzQ5NPP1UtGU2StKowWDwXVwYM3GBUCMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nm6uWGUnb6et5L3uNaNb2ddaRPjgqTpMyCt8ryJ5yX2Z1apx7nJ6QS4YZ4wo96GhDz9q5r1CQLegS2KQv6MPrtj",
  "key1": "3dTGDq534wuq7TomsMyHK3Z8JU8vnhc7HHbE7b9teavKvuEZ57NqV1WWewNyz59tRfDu11LugNhjXi1pzzxwbgj5",
  "key2": "2G41ejrPNu1QT8K8P6qHYvYHEo7WHGgjFWbwc33GrpdtRKJHE48ncW7KsaqP2kTZqGmt8p9qfUoHUH3ZYzp7o9o2",
  "key3": "2oxxSodgoyewG5DYzpiCWykCFSnp9ovQKwGB1Uo6uU9Lm93Fm5G5AEmbgCvpR6NZrAiqigb6mJfhDHccPxQvr92X",
  "key4": "31PnwJetPbkPwBgxkLLny6XVMhnNeriwcUA6e9dmAhWZmxBcMkTB7TGzkgGm7gzVQXJvkntbmRoY3kpGqUdebSF4",
  "key5": "5iJmo5RgtuLbZ7ZVjqU3RzCQGyRo3qQ58m1ecdiWnbEeY2S3PrA1ct28dXMjATxZyN7vtJJu6Qgj6DnxPaupjydB",
  "key6": "2NZSCq3Lfohe9WB5kpkxeZafNrWuPSyNkQR1CfwDQjjBz3BBhiE8xL9JjJyXKogTGGpXrAi8rw1yY6oCXeFvMxJF",
  "key7": "Po4aYsNtet2psYR9eEBHJincqd9SY5xp7Lk85h66ABhnHKfVczCL92abCV5iVZvjeXLHfPJufdSS7ZekP5bYRfS",
  "key8": "bPyiYxQTpmpJ2KNAonwgfaQNxFZu5kHBwSLRTeHuQg8ja26juFwUC93ZbA4t27YHJbo8Dc6Z96Hq2UeiLDK2G46",
  "key9": "2XH5Ubqap8iNmUoYokJxgf9oTcAmkWo5iwYGMGazVr16L7uRkD2G2f4xSGajzKEGY4cjVj9kooQtXko3V6JK63b3",
  "key10": "3WSsFhTp121NESVRCgBW21qkW6owRdwsu7ddTzPxXq17TEpDc3kQJHUoeMguXbpAndBsnWYyBFeRiv3y62RhYPYc",
  "key11": "kyXDK3AeFHyKPGWfhyXNfQqjox8v5WHomp1J1iC3oXRWxb7MntR4cBvWS3TBwf1SWqSKnoFDrCk9CbHtxbLSuoS",
  "key12": "3kg6utht64SwLmwAQRq7VzUFtmN1swRQb8afaedvCyXPLZEVZ5unCN9ooLQXufCyKwtDcJ1dy1PohcHufPZumYxQ",
  "key13": "2hk8KiApa3hcZQv1HocgoAEmGKvxnjmN2XUJe7fuTVwutUSCshbFv87dUWdu73At8q4jvGwYwHdoTATd59w8MBKn",
  "key14": "4kYNDrvzejGnbsBNSJACYxWW4wSPZmWvJuqFyecU5x724KPDJN9UgB42igZkrJDuAF8pawuyUPoDdbNEQUc8BpSw",
  "key15": "46e2oGf1PkRWj2MzAg3DuX6FirwFzHLy9McGrjrHetLtj3EB8LMtVhTShEXSAMhktSfLe7A3cNm8cfrRqPSqjmDh",
  "key16": "FtFGDYMrhYJAdaf5LeqPN6CY6GiyaxQvK65roJCpBWxxEDMxVaK8HLcczY79EtDEbMtAUq2Y28QHshALUj4ieLG",
  "key17": "5AwBrLdm54dR4kYtBCLJkQMauQbt1rA5KbM8pLwEJ7b1kfJF3akwLs7gjjpZG7VKh1Cc6vNWnMJjh9Ww5sacHWXH",
  "key18": "5w67FdBDMp7J33HAXh3boGBMF2PiNfWNkF2WRdV9DB15ZRu82C5RVGiE12goLS1aA1wrvKXeHribGHABj3ewGUC9",
  "key19": "2Yabsiz9vmFeUyKGm3Fnac4uTTr8FwCDurixgmXTiFQpZL9PdkhikrQ2L2LRt6N1PPuCYBZ4tRUTcxt7neVvbTWG",
  "key20": "3nYMkwsDQKNyHyt9v8TH7NcZL1zpvczCvwuhdUG5K77aD6yN6wcMDU2GY61Qfz6r6QvmrGLGpByqq83tQcMRC9sz",
  "key21": "5QeJpFe7UF7cNJLaKi3SSLT7ggSCE1i3XWEn8oWdHZouZSiSmfnzHf3DFNBK42MPFGYS1ZeaS4eDKZQVJpW5vKVw",
  "key22": "3FsPCtzKzGjygnQbJXg3Hi2yKrNFrSUFh4Tu79CaG471T2DGUg498VNXNbErCwEkRxDpLo2QpfeVZKbMuWhgFb6D",
  "key23": "2Gem7XrbyqFgcXaDF6XBwnpo7LU4KWXo7ohzN7VXtmYnMMkWmevXpHHu7FgGraut7ZqhKohjRswqCTKwbcpvywJ2",
  "key24": "571uRk8wcMj18xnKaUWTbRcx2Es5Au8kiXb1eTm5JpKbTHyUsz7hZMmuv4iYH3iBKeUJFNAoJeKGTDt2K9Z66LNZ",
  "key25": "5pTMhot67QT2CSW8thWQ7tc8q6nPjcAbr4sfnDBh44Y5pHmHHw1P7gaAeKfC59fJMXfoL1veNYUzsspMfH3K1cAG",
  "key26": "5sgxqu656Y1kY4Rpv8t2M2smygBoHFm66bY1M4ggpvPKXxd3f46mhySDpeJuzPLMcykuxh5irFUeEVkH1HpzfWaV",
  "key27": "4ZCSy34ddzgcm7Rn9cMvjEXht79isFWhBXDNgKgzHZEdqKXX8jCzLsqNt28V8HtQuqDcjJBXazb1BkeTF3yojbHw",
  "key28": "2hqbVXeSnPGtrvjWnwFAkQ41C3eyAyoTR1HskREWw3RsDzqHBpBNLQLrC4gNsCoDYhrCcPwdvLdBy6w2Fzwe9mjt",
  "key29": "3DUwZG9AHqDaa9HG1LK2PNU33gdmRbGxyHZ1pXNzLtZCYLd1ECd9hv6YzE5d8v4f53stYBFcLPhwDjivh6DZ7Xbk",
  "key30": "64EoMtdRjE1njDDTJ96CHV8jusa1hFsE22K9DMNqAgFpCm5mcxVoSaZXeheEiuTduF5wD2GvXRpuecufqZGroKL5",
  "key31": "3Ax7oM4KjPoeJyjpVqqidNGSvsHrdWmx2RPpdje4m8jHWcctkN4fdobHBob6vdeHSGa9ZApT2WW2SR8WVDR6UX1m",
  "key32": "5cJaMMJCkuHXZsBRoX1Fnr1d2SARr9YNVNoomnoba4FZqGwmmaQ8ioYd1pL3SSQJR9Avyzk1DGNdVuW6UtcAW6sA",
  "key33": "51cuATzwYPVXsr3bWeAnTNUVJtgqcKD1yYBt1GT6o1C1qRDHPnevhzhBPsSeheDWbjDAnEXJzNdKJnHtkT6NinPt",
  "key34": "3tCJjXXB2qzGijGcyJJ7HCZJBqY2SbTAy5cvMR16XrLLpVVMNH2TkcJReLm6JdvcvDkgKSjqQ4wrCU2wWDvbYsLa",
  "key35": "3oe6LhmshiM1kkmkskrRKjrzbUb3X6QzffpAENqKDnTZT4woxcFhsLSh5ieATMzr2JjM2PZBzGrdsNrMkPAyu7j4",
  "key36": "4WHeJwTAMiSKXn2exo7vfECfcXVzr4xbCL7HaADExuGUZXgCsuARtUhG4ChLUPjzHmjdgTGotmRsgig2ZFEm6rqs",
  "key37": "4GaxWJQLhyVL3uF8jgsSARihH4usTxLL9ZdCXZoDNZDQfgxMCyUdgyFU7p2WEWNZK19MXkdmzSZyZMjp2jvWHeLE",
  "key38": "32hcau3EUyqcpTmJp7JdMSQZBupUTzUKZ5tofcz1MxmQaTJZYcoG6gnG3r4gC1QwADUiMutoW4y7ywbgq9PwXUcg"
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
