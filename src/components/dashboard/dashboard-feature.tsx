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
    "3zWySFqPpBTQUjjUXKQxtRPTf7bVQJyQNkTy23frV9idRr4jmEVrSq3TCo54RwHrezBCmayhGAocS8WDy83CsPhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfqqpV85iU83ZRMVStX9opGu9VfKWrGJhYh6MFmE9XPPSbUMc6EZy52zwBnjSCdD19r2z2vPPYK6qfAeT2U7xCk",
  "key1": "2Cc7JknfeZfHUkqKUgJYbvAL8QUr1oVBQc3vwoVFgrK4319RkEd76X4w1MSGqnCPqBzWVrojcjAti8xyoR5UVaKo",
  "key2": "5tSAE3NAaZ9fZqRiz4fhnnUbyDqcGvTDj36myXtshWHCrnZTMsdy6G1NzEmf2yACHWn38sRwzJc4rTUZQe5cAawV",
  "key3": "suL21pioFogfnCbqVvBnZV7ns1kUV3q9FFDk8gGnDzYDTTpqFSAGqegHsAUTBQ8pBt9JTc5vTu7zCPfoeDxCmmz",
  "key4": "3hVG4Ap9LsJHzRr6pQ1Qz34NezUJqwtE5EnXUq2M7n5utP2tnceMyoRTThhGmEN84gpDhfQQiY6DPWVQRpMbz8kB",
  "key5": "5pSMNL1iDRihe6YeSEQCkzUQ7swv18Jx2ecER7Yb5vXhKQGjvHz3LSdQ65tFrPPLRUngTwtdGzBgMBRVmD2HYVUy",
  "key6": "3sBdNFBdXNyaoj6oUJsmXdssgVYXSVRMkhq5PuyqgELRWnBL3q38tPcFgzEPcfgEnBLPLtqdys8F5EjnKwVBURUr",
  "key7": "2PQftEtzGEcW82Lb9EJWfj8oUjZagYTfrxDcSvH5EuMopD1AWbVzJW2TzpL2aqVxPdz77iPBQ2hJ7ukEoJmY7R6f",
  "key8": "3DXes1gJeYP7RvNgu3nXEizufSmQmyGY7Rqh3rYztGqqHZKJnEdiAXVUprY4nsxZST4oNyPQf7U74ttH2L2X36Y5",
  "key9": "3By3sN8dLyfHaRSx4dELc4NCN1Y9izYDuYQU639FDEmPUrLSgadt83X9i9UL8bF1MF8myVfoEmTTH4PjEUqagZNc",
  "key10": "2Nh5VhQTg81NYNDFKF5x1BJ3TZvCmayF9m76EGXScv4e59RuUJ44VhPtZZyWAHW9rWLURmcAqLT1osi75dFs4Mvv",
  "key11": "4CrgnSc15qXWTashhSL1yUCHSAfntjzVfLYGoKcckfcFYyDVkWBPs6ikdAidWT9ygin7JjPKYVRfaR4X6RT5YCS1",
  "key12": "q9bie9GXdbZJg6BYmEtit6EQZ16XnmZoAJGsN544UVgLncppZMe9igJ8z5BBcMsbQ8hPebaT8BZgM7K5r6QTak1",
  "key13": "jQsk5EYgpQnSXozh1scmAkMRML93im3a4wNELqP5SZfR4KymRFUcRVnhm68ecuka94sDHXPVWUtEvhpLpbMG173",
  "key14": "2ri1CQCQquUsjhX9vKmLn2qRuKS6rcDRLyRHPoHCfzYnER1SM6wWXgW3ev92mbK7yszYdW4ZYtpDC1qdPCFSpXrt",
  "key15": "48RfqyiHWtPV8DarSLJ7mfS2jDbC7jHBT1PZH5rC56QbLSABTsZ91zhM8BvaJdEGN6ysv3EHY593ravphJFS9w8n",
  "key16": "5g4wMoamEtvwQTfLgTwu7uctSsD1huNDCpPRA7b36W1rxuz7C8crJjMfrAmtmRZfEyqw12ApH1oQgG1Zx7TBY8Gi",
  "key17": "5DVPXJGocAQHV14u4ZWoPmPNpFQFAqVgrg8x789KAEVJo2qXKgTaS89M5VvQGD1BUp5etrPBhRYwXarNV2EPanuc",
  "key18": "HsEPcvjxW23RA6hTVc3mDyzhaU4hDBoZEUEt7t7pkbeVJuuxGTzLGZgW97R6VuhjAJyTCqZapdkC4CKMWfBLNUx",
  "key19": "2fvC4ZzxC5k1STeonv1QVVrbWjuo5puQkKyipKMGjxxK62zLuYadza687RndKQZtQAhwYQxeUbvAfRKQzN5LvKj6",
  "key20": "uZRE8vogjG8BGaNDwnJcd73NwEY7Ymaao1DptuwnZh4u9ordaCD3wPnwKP6M3ttMGayjEDRAJT3Fw531d1CDP1j",
  "key21": "tzQCwMWrUiawtopwh5NgPJgZ1mThyeA9iA8Zh5qHUi78WkY9GBrwyX9zWNz8m8GijpfGhYmQWhexDnFACjwxcs3",
  "key22": "2SHz1aCQseUhtnEhtqb9zTjimFhvJZbyaDPcPZpBkVMmnc2oSspXrMUbC6Vm3gSPNHuvwfbJnQqAjxptK7Qqk1sk",
  "key23": "7JYjArhjtBJJ9DuPzcp9pe2E82tMeom3NrRRmQRLNzwiR8VMHE69APJau5j9tYW4L4FsA6BGtd9bQzdtsbjKPrR",
  "key24": "3oxKohBsQA4x9UjWYBfb2Rf2untfM7bcsXJzB2od5SXnHtcBjz4ds8uepgLJjaMKU3Z992uLZS5UezHFKx3knoTk",
  "key25": "Nj9QSgPZ7RhSEJwDKgi6UiG2s9kphm8ErJoKxHS6BKtTU6BUddEdjJbygXs4RYH53UD1kLkriFEeUAyjDgP3DzE",
  "key26": "5QCPL5bsCJ59P82QyQA7xaa95m1wwAdR8VNHrfYncU5cPg1a94rBFcE7SXHM4kYfcPijY4UzeYoVREvHjeVnRtjv",
  "key27": "5wv8wr1E5ZFyHkhdTHhBPf6m2AZ17mvDFDpF85QcoXhUudDHdWTfNYRfeb6CxubXGGH4ZB3DpbQTN5Lxou99rhxE",
  "key28": "u94hU11s1L4k6A9wL6Vv2bJ2KaJ4j7gU6erc21Y4PSqdCoi3zvdfBPEidVA7NCxF24bo8f7oZzu6J4r7q9dgAZf",
  "key29": "2aJy5sdoWjwxGhKMVbhtPrKjTyBg9rftnZ9oNUMjUDe3XkW3zBRD7yqmxnMzsqDeuAfXQmcVEgH7CB5rQ1SijN3W",
  "key30": "5Cc58Emsq53andDdscNpUoJk58o5jCMngEX3cdZUvojdmqLqtZ51i6X1X2amB9NY4wFU1gKM26dwaBKYFnZ3hgGe",
  "key31": "5tqoHWMG333N1Cj25QXi6ocXhHNgtoHXqMAifWrtLMsgBGiW5RCpNy7PYrgKKT2WhRNhnAFdAesoESuTsgi5q1WM",
  "key32": "5ddLbk2xLdyWLgCrQyDdtpcGnaDHkkBFbCpCRQdLJ1PFnKWB2UdFBCC97PyehGx4BkhFt6y2F8d5dwEZj5cKC8xr",
  "key33": "659Smg7hHTx3Mg7uye3VVk4nTNfHgykDLdXhZyqPCYLA3X4WkSX59rfsGxcZquQYAtRfV4oSJQ3KrAQEj66LeBhK"
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
