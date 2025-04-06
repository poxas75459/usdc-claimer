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
    "REzNUs43GhGYM33t5DQFc3gKnTSwrdWTVf2i1FwAcvqBNPTsyX7XzdoSm7p5GzGD3gM4DzJ9Bcn1VV33m3BmD2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbArXUBQzzHHdMF3oACppMeJWVwQXQcCGA1Hrj4ETAR5xcjQHWsEzJWrDVq1RLFxQErPrnYzq9qhHeuvtBJj6jR",
  "key1": "2HuqpSTYdqTVPSkc9JPiZXZamacZKnLAaqo3YWqJus38MMYBCBAR4jFLpom6uv9Xbfb8QgRAfda7AUpEvvNAog4P",
  "key2": "4suf4W4uQMe8BB5iKkDvtPxBLhqMLfjef1Jbfvcea38TXPSKPV89CRVY8rEyUapUDNGMkiwphfzUnsicGk275wVi",
  "key3": "2bNPy5fF2DcDjw4pCWQRke6vtHfji8LYNUBTWGAscrg5JUx8A2Nq9HzypPDnGnd3wDAETLMj1Z2z2Tj7jcghQN4k",
  "key4": "3BcaUp6QX8HMGFJMWsVenMbLPDeSnNq9axqQrrA8MRHeW6KsXHa5vzNwTfrwNVKifyPjL7EQkvPnRnvRcdo5eSTd",
  "key5": "4sfKQVUAPmzbZRs7dWiWrsWzYz4bVv4KCjYCXtcnpkeRmdubbVHd728RACf9DHa6XBitmyYt5sxziVhjsjov2yZK",
  "key6": "dGvnmcLPMjzaYxGs2uZSLAijafWWkqrNEN9XAY4zMj8tWmDbRS5H5gr9CqmAjaDdTAf7LgPX9ZRCa1dCrsgUCP7",
  "key7": "dnr4rkdsFXT7yiY3yKrTdTKXQ6debvqwugWab2hB83XwSGcbDUoRSdM5ZHfrHhxA8yDbM4gRmu6oP8ih6uwdknB",
  "key8": "3GGFVfTSZQNKZUkos19iZEsyo6iC5myzomVMzRknHejgciWAMyD71iYCqaRQpztR6bbnuZue4hUZo6QC3wN5KRGo",
  "key9": "3jNAWyCasS9wgqpBeNM3gtcHgDWuvrz5tVbm7UguUxUHAcXLLadN3wT8s3MeiycW7fpEnf3x3dMqvU4bhiAELnPg",
  "key10": "4V81cGJNM4Dp4DacRDYRWyXPB8c4GC3cfZiL67q1KcTojupqMuBqN2qWSeRFwEjENAyWKxTcZ8mVKUNaeiLa5RNA",
  "key11": "5NKVpLF8x8ak9k4Z3BjgNSZByV6rcZdKV9g1j6MZEAZ6kEhovU2aTTHhSkBtsWwCsZCqMZtX7Q1MuXk6y9puJ8yo",
  "key12": "3irVdXgj6ZpCmT17TcaJMhrSXUA5v3zksS8Dg6aE56btuganwaSSutbinJ8v7keizef6yEC88mhwpweEdpe86rmw",
  "key13": "uTHhZjQhkRYdDj2FQPA2pociRGW1ErAvZGApcZYkP6FehKoqGaVdYUvmS1QbKrGTBcybhj5yJUGgtEPiAGGutio",
  "key14": "EXgfCdCMxWRD42iDpEgk1CpLcAt5xwcncZanUzB61AtzQmmDqz2JUVpBUKDu1cgskpRCncFgzKsiWUX9yCg3y4L",
  "key15": "4f19FkHsGQmMLBeysAcHK7yiJWWQTRBz64CtjSvsvwLpZRX15GjC5rRBUFEPJ2X3P6nfDfyo8z8RvrPeH73pcsTF",
  "key16": "5HzV2tYFMeTm7bPzpCBqM8dvYYCZYh4QE7znqVkETXQ86en5KLxTfShe6CG72NtQ3ZXzxXiuMkDkphECXTmGosLn",
  "key17": "2L78VDJhaNbJP9whXk8ptAkQp3vewYDvjybwV9ud2DPaGVepTTgxCn7isFV7rVCiVbNU6csB2dYTJzmrv9RfenVZ",
  "key18": "5UDqGXqDtNLLgiiYGZD6shAGvanhDMMZDJGNEByuH6damJ7MQVbCYdoQFQShDvFssX7HRTpeBqVg6x773N2CYekt",
  "key19": "4Y3tfb5wzvAn3A1qwMaKxQkmcdsptBDtLcdSn8ujuHHxeZsupVF1vtC8zKEys23XYFV8QLjXdiy4nqNkBK6VXetD",
  "key20": "4xCJp8X9Lge7s1sHQ4P263xg8KmPgV89bfVouhZKcy8zvU9gnn5AdAJeKjYBbQPmEryiJHDacc8bw6XzERcU4jCk",
  "key21": "2Ko55oHjCUqtA3zZKckivtFwAX8zkuyoNNoM5hhGbnyR9CDiZUiTBDwkmDMYg5w1yrafJdVwJMQFcW1cnddSSXkr",
  "key22": "4kkTSbMDYtovRVdsJ6ZUBkoE28tutxSMtkXwCBhEn5WgwPLVK6fmy6BLccEpnxQ26RpLxD2AvAZJERACqSjUQS2j",
  "key23": "4nLXAh8igvSUAeTEd4KD8SPyLTHzouzKGT4dCdY2urxDfjzTovgouUyJCVEZN7RT2wHe5qMsEg24qSc9gFx8kwZZ",
  "key24": "3vUjCehZiTK617uJdx1o1dmpZ1ktrKw8isDsP2VrK5JoVtU9P77MbSEmNChWgWv5tzwhHJVBrUmDSgAEfPsZaoM3",
  "key25": "5jKbPo4Z4jCwkinMW6izYBELEUTWGrwFpfHhEa4o3hRNVEi4kMtH1zgJDpmwNJYqu34LjVpUy5wM5GL6qPi8iPnv",
  "key26": "5CeV8387bMCyvPPaH8fNkV18JyWwTsEjYnkBwsim8GdzgZ9tgyAWJemxtyRVYmQ2dFCvKruqCviUD3ARyUDF2jk8",
  "key27": "uNXSpXger3nUhTzgG1psjmHmzcfNCFkjRoj8YXag94qDvPKPR5wmzTWcoEx8NwAJLabkD5c8uoGxELoLXBm9YuT",
  "key28": "qE86DZsnQHCNybKXkgHzm2xiZdtgKimoGVg533FakqV8Qhf2GUnMfrPjndocH1WrQ5U7ZVRbMzCF6PRrKLE4aYR",
  "key29": "tXcYjWzZyG24SLJGRXLxuVVb7fa3ZFKNBtdRoQeppbr9X9v6X1Td2uFVVntWEAcsku89dwNsLmhHTvEaTW3gME9",
  "key30": "2t3oksXfgbcVVtmjtX98iHL3Vp17P6m1AYbShxCJz5yWS7MRDeokCqPJvHAiZo9LM9ivp9borT51XgfcmqMAvDoY",
  "key31": "5K36aqF7BP3n29y5R6ugg6RaLBtDN6MorF6thvFFcVwynnXFDpgExJGAQ6T6973hmKNps6AAagCkwUkLKit8NZSP",
  "key32": "4k5EkhvqfsUxsvcvhpA2pYr2Rztt4Cbs1SAU5m9zPGLTzx2zqhCsZoSYCobGhmhGuauHaom9XH3nFsGcxX26FHhH",
  "key33": "qKnP27MfmNXqCM71zgLzywjMNAdyz2iGDfcFBH151ozWRSeR7zTswxhkUENR5ifEGiq8PVnCpQu5Qt6yeeqfmkp",
  "key34": "4wDrwMhzGtnshTWRxod7funvRHKsMvAm8EMrTyUctygVJ5e6ras6fLsNr5ydihc5TR2UrPkjWk3niT1CPtC5xaME",
  "key35": "3eX28otUoGv67npNFts7r7EgtWcGo8N5jhGxm4PpZY2cN5WZX86yvxEbqEztsDYpPk2r5YFn7GfbZAJ5eCR4pxai",
  "key36": "29a1oE9qnVN4LkSdCfu5t4uTkmMMMfFA76XqLpdn4VsxE5NNPaDuEcnvm6o8Ybps6jmUtFN1iBJcfZTuujHqhGJm",
  "key37": "CcVxNZASs3eUy4f3UNaH4okLTL3ZZ936tTDNhw5b4jszWDKMbeyeNAxCVhRHcZsHSQSf2rsquzPk4spAHiaz4iZ"
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
