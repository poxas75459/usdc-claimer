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
    "2kktsY1ePVRjtcAaBcS6Tu6VfRWarepwMRHcVnPunui1ShLsBM9nyiJ254KtVqAmuBb6taQhGCeESFwnpepiv2Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MCMYEjh6Nyt8q9GrFS4CfKbD2XqrFCEvqpTBdAFJK7fKieGbu24YpgKBnm4NX8oJ41Ab9XfCWneGFEycTPyvDk",
  "key1": "A58ZAnMRnYcV5NJkn2gx1cJbVj3Eex9b23db5WCMSqCkuYSRK3FvRDpcQ7pMffR2db4rNuduba78KPrxeHJG2wp",
  "key2": "5WGePQVjgZXTtKEqPDt1AkAhZ4F99gUp8EUeVLiHGxVYkiPvnfRMbBQfq37hHgSCLSsvbN2M8R3VNsaScdAqDSfA",
  "key3": "qD4XNn6FTDCxngPDVmdTwt2ERyLDNnBCQjnxmUEPFwTHfzGzBRSiqE75qSofMo86aezUrKJBRZESZKndoXXbDCo",
  "key4": "4RGxZyfW1LhEMsEFRGY2E7aMZoNTTtvViWFWkuiTEs1dGMKHBMhbSbghJMPw8d5qD4XgqHsccGUrRENoyKgTqFBR",
  "key5": "4rArwmpqokBS7bECabLgf7BGwGGjd72rLXD1rdRpoibWyAMbjNHbszbTXCXdg5L6hGpaLBarxx5t38nWki15HSWQ",
  "key6": "3Uupp51PnCS2hSZmBe51gz7LSYdWATrGVaR4trhiEsUUdcu5V8M69MUWJxD1eZ2d9C8FsQhXfzzpGxCLzSYh4Q26",
  "key7": "3hfYckSnzP2MRanb5rNDJwEhcvSSmkjnBa9yFwUMrH1FXHRnk7xVGrcKqDok5gY936gjbDzyAtK2yuVLgbubswgv",
  "key8": "3SdxsEGRhdVi68RvsSkVyr4KotUY28aobF1GXHLkYRAxQpzTyJQw3SbR5onKGN4aDfNUP8Az77gPZsda9ENyX8cq",
  "key9": "kC3VRghX25iSDDvKGcGrhKpfrEFJfCgWSvEHAh5P4fe8qSCLzxZmCPFLtsHrr3y6c83wEosj9gvpQAStZVUEEZM",
  "key10": "3XRfwSTiBnjN1mWo1pFSoVpUd1ZGwEwnxpgiiJfipXL7wEzkGco4RPA2qx5UkgdNjzmVzRVXVKS3tqHB49AqcV2j",
  "key11": "64c8ueBwgNyzwd5PfHHtJ9nRdKEFvKYSabvTwM763GUG5BGLs46g47BauiXhWGt2qdRwNhqZuVfeNAY1Zpe9275D",
  "key12": "3gQiEtZZKxyx5KKyEVGVV2GWUCmNuezN8se6hFStYctwLgPe5Rv15chzqCriTMmB7fW5ntEpsZhX5JoFSCkTDgLK",
  "key13": "4RymetD3AEUdYZUxPR28oFmga7AW1wQD1RPFq75T1BgQsvnwNCL4DcnyTzx2Ardf9YMALWFaA3Z6wWScC1gtrcVS",
  "key14": "21Jqy1uBbaoP924qJc11fXx9SgyBd9QxS65es9B3S7rAnc7xQux83uxTfsKoiLWWMeGV5cKUK3GxnJqtCJ45DgkX",
  "key15": "3LoKoiaX4hEkL7giEFCSUEXFpvJJeXSz8vUYrgWqwarbnTr9XyqxViyx1fV6jtizggewowKw31eURNEtLMmUYF4n",
  "key16": "61Hx7ePp7kKLHqMC9UqF7uoY7Zwv4tCFQ71tdWgcwJdtVpgw8wp3ud5rDGYfAkncVFXzfXVDPCgJCJVWiP4RHWD3",
  "key17": "4KC9gNG1md2gHFCCCqYTwmVs1BcJwpCVqBMrt3dhcMUCxnb2A1BdJPnNqeFJRvVoLeRuyEG8DzwsjSAKAuCTRoX9",
  "key18": "53bwxb9SJcdXuzRp3q9X5dxfP79rfw4BMdQF6VmuX1ZGajaKNhikDmHSNNraYbNmeRM1f7gAt1eEbaG45B62VHjy",
  "key19": "4zzNkVr8XLz5jt3TD8ZuHxmZ5wUkn5poDG21eLhWZSMQyWdyZLYNYYJQXFeyNwBQp7iRwWLJtKATqSDYsqP4Np9e",
  "key20": "2BKZijyT15TW9NK4edrcohRFgeNuQPcwKJ2Kr8wF1odyyMc7JoeLQY2Jis4P6YvoS8PdETq5BEqw2uaEENY23TkN",
  "key21": "2hAED9sW7Qbjsc8QMefH6LwQp2V9xMRSEWUjx7ht7nAurKD6U4Th9UFcCqiQerH2vRCG5Xs1y9szmSif5QnUKzkH",
  "key22": "K4tnuCdszNfm9jEMbVqqCjk7pnTKM4wdoWi8YraMnp6NQfoCT9dfgTDX5LvipomiUn9QGnotLhnh4AfQJeQwZ7k",
  "key23": "4iVZS31XnMVUewt5KFxraaUm1iESHTga1Neo4d5sdLkyLfgJ7p3rrWNjLPWshDWXH8ADRUkhoGBXxscuZnzbwktu",
  "key24": "3FVKdfmF6ySmjV7rnVnN22Lk2BGNF2CPMmEBnsqrtBR8y4nx9NfBy75mNgeiM5iAhu5QJrDgth6qEzFXZJavtH5P",
  "key25": "3FPicDoFESHtDogFF21YWhKtFg7cGVCv78xtH8UT4N29pA36ZX8nKofpEEu4EEP75ukraE2WQ79nuaa9XKX4n9yF",
  "key26": "3zNFN9S1jexNuyMYQVKmn3yARu55M4kociq3ng77YRTBKQTwa8s352vvfJei7FNnGRLrzUELhTTqesHv3x72xs6H",
  "key27": "5f46JyxeVvPFYMqFuTm139FmfV1t9C73EAdubFR9PgeJwMxYjWMw2xDRCvyET3jnyeit6W2mGcHaEgkJsmR42Lw2",
  "key28": "286eBy5VC51ZzGi2ZnyxFUWLbwSoGqJ2ARPkupwR7wv3K5kkrHj24uFAmrV4AWknWmKEjbtegxar8PEAJ4pCVvGc",
  "key29": "3WbueHpL5fJY7S5Tz2GYdMR2kPCucuNS8vrNxUbsXWS7v1ucof7jQTRxwM3fffPWXA1B8qsEpAxDS2tSUhUPUZD9",
  "key30": "5pgeHF1HpU1H5cKns7QAc27ZKg1qWWMwgJBEhwVJYPeZRR4sXzLvWk5nt1CD2mc85wC3ZQR1gWHwRamMTcvLJhWK",
  "key31": "4Vx2doouUVEGB6EdSfUuU4MCCRhG2FU1obo295aie7GC5D9DGukHTrKAJAMJFa54yreQJbWLdNk31qLnEG51EYUz",
  "key32": "4JCkXRhtzkQEfARiuPS8Rpn1BEdTKsRxcyHR73guXYzBwTx5VAxBTCHX9x1QwAQr3ZFUycbmL34V1tc6z9P2pSGP",
  "key33": "3udB9Wp4ohCn8rXG9ZSY9Haaq9KsNxrqaTWqH1mW97mMzDnLLxqc1RKCiQPCwDbCq7cEyQt9Mx7tuBMrBKkgmhNW",
  "key34": "55UUvRY23wCeGFmkbi6BECCQRC42ddDzJLzFJJSVvC8znXFtF6svmnubWQNNgkgq8q2Wc3JhDbRCSo2Z3EKGNqQs",
  "key35": "5jg3QgFgUfgUrntg7JLWQYFXvt9aKcWBruoViFpha7Y9gDsLx5FoAN9ewku8D2FQLHXv36QPetkZuecmcZzcRQPj",
  "key36": "44crvYrzVHsB8fNVbg4BaB23BPro8DMDM2gD7yT9mjfZbfRxesAjKrkhJZPZ8veR71KgBuPrY6FNzyTsHNXtqd59",
  "key37": "4RiiLceu24j52f2gt5EJN72iUMtMoyH8k8AfVcjJdNbGZ8ZAZcsruzA7fQFf8F1obGWcV3Wcw5GFB4kZQmUaBkjx",
  "key38": "iPxBQyZx8rbf4wy93qF7RWgXSjLngvp6CYeZzAwJxM7axD6juWzk67wHwHVZiz8aMoq7Rjk7eSLCWX6EYDEsdv5"
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
