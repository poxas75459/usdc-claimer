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
    "5fNqqh5ETuXpnk9y7LcunWs5NKjqSWyiNdwhY6bxj61iSGehPGJyUqdUy3BW4o92RvWYHzx9u6dApXmGfhbDa82G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnyrdP1roR362XDvmFuf8fVWn6mnWC9r7uRmBSycM6DsstNLG6mNwtA1UnTHrefHUZyLUYv3NwY5qtCzbw4ZXgb",
  "key1": "3kktoHDLKTnU7bucvyMsSzGQcexT4AxogbdHDZ4Yc273N3DiuqnPkwQYdWXR8U4HWDr43xhNaRocLr1cExDVripo",
  "key2": "3wfA5isqoVFsbzsMDXikGkenPkaDhWf8hJz1iquduqxbtkAMJnu4TbYU6zzHyKAwdoub2MnuysthpdwhLqCphgDC",
  "key3": "2rKY9CuTaVVAT2LrcciWPZjaCFrpyuac363MszE2CAkgqj8xoH8ZDqfMKaHU8Vt1Njd4W3UijVP5mdHYTLjLZkfd",
  "key4": "3nm3ed4oGjScsyK3QYaHmSYcchD17MWpiXPpeSpUYp4Kfz37bwcvYcmbj16qD2PurEopaL5pcu8nZvGwQALx9Y1h",
  "key5": "5iDK9uNaNERbh3vELiAbtD1oMi3yxWwDumzRnfWM59ofZgnwVBntRoc9hByFoHmgeewFKQrkr827yJ4ZW6xStkS4",
  "key6": "31QHytNtcMysEyoW8LJMcmHwLtWv9itojMPh9wzDwjSErQWd5X4R15ynXbCMto7mw4YF8vShxCgiuizZyEwk7CJz",
  "key7": "678UMfcTgM4nZEYaPDLxHuRuagiuDxj6nrL7MaU8c6H49STPcgNvSMcm8DAwMj6sxKgbdniSnpvmW2yJG3etdGVD",
  "key8": "4McHFcnrgSmPkkbpk7fxdXVpmPJfThWR7hh8sezTBxvDgZqLYPDzuBbJAoGQTU8B72ehhZzoXUA6JmwLbTu7xdJe",
  "key9": "3DazoJAkqMAaxfzZoDRLjwon3HK9JdE4KxYCiiHj7dsZdLwAy4WGC2w2Yv3TYH2h7DoPVQMNEwHtwkwS5QzqqaKn",
  "key10": "2jEx9WEU65F2HKz3DeW31Rgbx7mU9KMWEkETRDtyJSL92MkaJ9Kf81zfwo4nFUbKhL4FprYYFvvLh823fAHpnbbR",
  "key11": "22t5RcrCkpZDLXXfmhbiqed4eiJx2DpLHeNKjgpnv8v5UJMndPQZcvhgxNuXmNL4rsSLsTqLTrHT4DPyUBGQPXH6",
  "key12": "cmLKS6WD6jLHf8VyT8RUCGFHCCEKr5StCHGm8aSftP7JivvvksmPtA1rZsabYmcfxyWHezKEMsq1WjuSHbmASGA",
  "key13": "2HyQLzXLTqVxnjZy9W9c2JkfH7vtgevcSZtAU9ieaT57D1KEx3jHM8S4UGY4i3UTWk4AneZnWeLKyiRSCfe2otPj",
  "key14": "25rH966QJT6JWaWArhDrCCYd5Kqdp7Gd5jctbbysvGhuEviQUtxgpr1uggMVFFvgUcTkt6qjhofW2a1XX5knemgQ",
  "key15": "4vVpdWUj2f4WgzmMbFcSDFf9eGKJua8HDLrewgD7iGotyg7AQ9E8DWuyq2Sdx5M7Hejgimyh9z8e5V9JmAASYTuZ",
  "key16": "23CuU4FCaJPRcabRLGPAT2QCUj1r1BmetUaU86S49Mzy715JtJWSZuTFzh9XaKUwVCi1tZGyGx2pDFLufhfEJhRc",
  "key17": "2xY3ZVa5SbfoZWSSnGY2YWGbmsWJfri4VEgzkkZSFGd7PApeADz1SBzUqtYnRFEkdzQLYcJHQpQHpuBauJFUpj3L",
  "key18": "3eQSQUpYsaFR2DHV5Yb8bZH7P5Fs4cHGRGsdQGGFaPPmNjxgpWvv98pTD87LgiP7vWV8vzKmBxKi6Y9nCPBPDxkH",
  "key19": "5SvhELhJp9gGjCF6peRb71NAhQC1Es4i5z3yxcPyRVVUhGgpJTFivMa7uwR4BZSZXM9d6sjLuDwHyhN5nfRDrBH6",
  "key20": "3ifM8n4zLXNaNbDSoiBYoXfFJfzyZmH6k4gYDrU6zK1NMwcvuMBfKobAmrW8rKSw2StB1cHVpph4DfSFuRwMUhfP",
  "key21": "5dnHqbnC7vCtGPqU8NWSpgAgu3Nc3fS8HXhaCgD46dsxPRX4RW8megrMtQPmTgsuGbHwqCx6ztgUetxXGiL3QuRp",
  "key22": "4zdyEzMHNA7SjcaXQsFELdi2sfxFwauA54CRP8kUdrpUoDngFkTBr34i7oWak8WLorCXGPoKmgDWXT4F4oJuCvCD",
  "key23": "a31bzzgH1Fcxic5jBZ5U66s9AGLVtx62QuY6rcKHMYCC5VRFkxrYUpY8VD8XJpkyyX1ugkSYMAA66gZG88TdXiX",
  "key24": "5F8QErVXWhwzZqS2ogmZQKaJJU6VC4YJ1GxwNMzjoBAmPk9CqpxRLfJosdheC18T3sZuqFJhZhxpweUGKEUywQba",
  "key25": "3uU8VVCa26QxevZfvS3LQ59xjSVc7hCk56SkNkv46nws6JyYQVqfCRP1HKjXPZUuL3jiQRvcUSEn7RHhv8EeeFgD",
  "key26": "5VojepaKJgC6WMAoif9YaUCQGQEfJqdM39op3vxcFE3Yi3KBQK67nrfiCYUFaZC8tnUzGwWLCt6Nqn2XagghAGcH",
  "key27": "Z496b4wb2Fbk1vzteoVM6eX4v2rScwbD1wPvtemP4mG98bxnohUfB5vv9t6trVfV1kWAsYocziPbVAhuoSUGNYR",
  "key28": "4cn5GzmHJT51DwhPy628F12vzAeJNPjUWDsEFZ6ySHUX7E5tQhMgwZtTsCEBNhuDkp8fCrpPwc5MmGXwTwSaq2eb",
  "key29": "3gVf2xgv3yZSroe4z6wkfeEFr5RVguzi4JiJKPChYyk5v9YMQm4wuTyyzYVxhueaSZQ1YhDXVtT3icZ6n5JWKnwS",
  "key30": "Uy6igYnBKMW6xpEWyYxR77nUndc76BU99hDfnA5rDi4DDwAwDqv9Js3k6Y2h7ZCWfvxzk6Wsuut2NmCGPuvoyoM",
  "key31": "5w3uSz52bgebATqc84Tb9H4qrHRQhP24bLk4CNJyQ3T53rLEmq8pQvTyrm8qZFR1aYxyz6yQTPHpWRSoByyE4Dud",
  "key32": "5WqeerK6Viu1YSq7UyiqQQBPJ1MQgmDtkzExU41hYuJ7o57jGpwcdkVaXYWVm1VfruaDLkRGkKzgaGcAhLGrAy3G",
  "key33": "2ZpQ46xa7V1DQYnquN6wFRWbR4bq1Xz14wyh2gErnNH4ufg3td1gEXrB6LExH76K4LHKUoFaUeTaWutkZQBWvBzH",
  "key34": "4fy43LYva6Y1j92CcqQxmkz7J5RXq1BhyZBWWyibGaYK6qfWe9kJyzFga4wn6nth3EWvKq3UyvLsqdfv5qSWG3Kj",
  "key35": "4Vf6eiadsmbmtxLKvE5dBf6fePmTpPkDycb2r3XKyS8J6CLBYvyXYdHZLtwsmxCTXkLSUjhzKPjs2hUTQwmmJxmh",
  "key36": "2LznT97ddEFSb59Yv2Urj4mc1nqfe768Lb7MMu4MqvKqJfBkHJdcRG1hjxLFxMXLGubKtpJPZN7toe55j7JaS6Z4",
  "key37": "4xPp1FdW3c2xujQeCwQX9YURz3ZdcDQwToC9nua81MhDemo3bp6PUKLuZ3vkhbvCJLfca3dFnmRguvftnpRwuhiw",
  "key38": "Ubmam6Q9DjyETV6FrNB3LZPXnSDPwd2n1Pr1KAQRotSR1fGDJduwipkTRU5Pn6ieat2GyEJcxbyXzEmJ9rjStiJ",
  "key39": "175MFkZBhYcy49D52ZMRXWNi3V1x1nPFW3wxYBj5m52Yp4KTffte1561Epugycp7VaigL1wgXJiuwLJyywxC6S8"
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
