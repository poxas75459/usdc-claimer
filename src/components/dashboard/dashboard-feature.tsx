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
    "WwHG22jEwYNsu5h4BJNMfpsvrAXeJboXC4bC7Cc1ghGPoPM8a3m2ktMTpubix9th917PB7dst8zsc9EaqUz4NoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YD3NNTRDc1hfFszYQsNTaqKJD21s1U4NP25BkajGBuW7knMaMQp41wNC3f6wMw53wXd7WAZQdB7v8efbdUoVQMi",
  "key1": "4i3sHvbzNQbTRZxyuVtTPrbgfgsTV55fEvT1Gf5ecNfHpzANwCtY3eug9JkY9irbpFaUo3QsAZyhEuSD7u73aQLz",
  "key2": "5N7ny4EgQf9EBoBoo32P3H9fEYiMn71WaANNnPcLocuL73AAY1665PQLvyZgb8MFEXcA1GcdRqEVrhZTJFjdHqay",
  "key3": "5y3Rx2Hssc5XBJxyvPLFm5RNH3QkHQqTohijmrSEfB9Zxu8mVvdi3zHRPBvHDHPtEH4CQNJj6sZ4dkyHfXvX4af9",
  "key4": "uWXhZJUPU3ULx4xMSwFa4wETWdYsaBkF4bGSnmvzAnak2wdVJGu7LZyxYyRzE1bt8kK72cBpafsBv14Z766RMmG",
  "key5": "3BD5feEFHWP99TKgFG9hsLHV4gFCrpLGu9wpt8AsB7T3X6cFYVvxUn9ArJc2aRY91m8UtcMWmcFmtNU9diY6TC2C",
  "key6": "6gdDHsezYoSc3myciHJ6Tfj27SmojqjaqSEQYwyfr2bZyX3pu6EcckVtL6zaeAhKBbGb1tgUnAHXgBtmjKv8bvy",
  "key7": "2zMgGFdvJH79pxxaHWZaQGxYkA4GPjN7JeUmFw3vT1Y3egVbdRVYgA58G2BuiyKvQM4FvjGy3UG6mf9JPUsFQ7bT",
  "key8": "3dtGkUSMZXoATdbLeJ9brB3b7c1vztPcLwjK16SVzrshgsqntovdYEkhqm8UmxqGFPa8dtNkY6U6EnUvqMRki9mK",
  "key9": "bskSAcxqbYk9eeW2SpmWU8yev8SheazyDXdD7cX5SMzeMbD3CGwBe8WpL2GVvHzK1XSQ7kKHWzukn7zLZrVsVDM",
  "key10": "5h1suMjxJpzq1grkUzKEaBsi4UfrNgTZs7i6duvvUPo7MEousRVtXNrwX9wMnTqA5QyLtiJ2GobxhtPZNcSJHErN",
  "key11": "5NWwwFbmPARihRxBM6kApexMuy1aaP2s2kurNHvmBwinaTWEpQQEyw8UqciyjDED9myJtwBggoACjdyh5HPTpVz4",
  "key12": "2nMNRSuatppRE5jispxCEzuykWkysKuV5mz9oHiSD1EHvqp2thHoYAB3YqKesTzn9dPknBVLtCowrfDNKR13bG9M",
  "key13": "f7AxDqVeoso8nkgyGqVQRJHtE2c5VpEm1j7AcCgRyN7a5E6j6ecZ4ifgLfsEuvMzvrZ5yBfjVyb921MQB6pG4i2",
  "key14": "2YtGogP6kH78WjxSaYEDajZZyjmQp2MeoyQinWrVS8qGesA1kK4HK381E2So9wExoppmHDBFrAqyj4qskxfeFJ48",
  "key15": "4RiB9sJLHutAAxbJq6jhHx5bWgBfWK9nJpFEqsbX3CHx3gnRcYYkXdfDfxTMB5SkbFjCtVH8yPgLgsK5U9B6Jkgt",
  "key16": "4koX63vGs8NEEK7wSbMAfx7hQqJfwKE9JFnqUBAxiH6RuSAStLjj1WTJeAoFgFRUTfZvJGPHr3jtDiNPphyQWjmK",
  "key17": "4VbT7hCzih5GARuN993TeWjJdJoE9BWTwZHs9iJSxqaz1Kk8PCFi3zmSjkabPSTiqoMEjxy1WkSHHfHJhqHg58zE",
  "key18": "5Thq9Lzm6nJFfqFkKPefJUMZeHbyVobjkBwBqyKFuu8GfKMCaVpVAQ7tbwQrq6CbeC2sHcm8a2jBZnQWprZofnvf",
  "key19": "2tLoheKzMQf21zSeiq288FaDdtQ9aDwasVHSPthD4e5S4WZB86NrQTsy21tosaVuRMNSYzB9RkX2tkH4WB7vECqH",
  "key20": "32YcvoUq4TGgrgf3fREmrqgHfA9tTKJ19NZu2b4i47Waa3uobpzNCEuXJSfb7tE4xBcYgcGdKVkN16iVZXgYF3Km",
  "key21": "26NbKjBpq22JZ2SkDqnT4Xca58qXz5XxYtafZpZ1iPu3Dn5xJ5z7AYHb5AmnZLEheBWyEsAo5Ug9AtfcABxTDvfY",
  "key22": "2kj8LtzdHKZEMnJjr1xBz9XUtiqC4FvSJVjvmkKvt9qg9zzBfZsYXXE4p5g6DxMGYUr1fsy5M24NKqj1cp5yStdJ",
  "key23": "65qrFxrNZ2BtwEQZbuQUVumgZ8c4vDnLTJp1f18C1iV9fWeXZpkTGDA8DvgAgAGamiwenqvCB6MVUot3fqGynVG3",
  "key24": "RuQzPr9mpnDe6ZCgbpCJVCDUkMjR4H39GfspQ6j3EjF1VuEv6fBH1GWyNZdvz1hy38hpaiig8KRbGymkVtKXhQ5",
  "key25": "ydM52q8gVyv6jMm1Zxa1zvfRB3f8g6qZj85LSZCUdQekTMGMXZkWtXwcYgpSoeMNS8y46BfLXC6F41jyk9VwcRM",
  "key26": "5qYc1PA2kcJ97ByVJUZ3czU2VyH8g3EjyC44XzNg8GEpGzBH1jt8ehpGHzWj12qsNUs3MwFYQGoRZMqoA2gBPSPX",
  "key27": "3rC2XeBDtTea86QCfiGrzbkvAXTRZtgnXGutEh8tSXEqStuDrYJihzDhaXfwNnbrynw47XwqsyRTZcqcW6D4RTSk",
  "key28": "3PbiMiWLcUNScrEYLUhEzxUK21g29zSiVJW6CfHcxZzczsWdBHRfNrz5QNCsPmmDzavAPi5cQvLecV2Ktb2wCVzC",
  "key29": "3ratcBBRcYM3ZPRCAhpd5zA7LnKXzYQeXrkSduqJ4AndqDvkSR7ZRBYFkXHjYPzZS9s5yUPSPsUae8DKtaUqzajw",
  "key30": "31Y3b9KAp956P7D8nnerC7hUqyJAz3rWS3UbnNPC6yuQoobRT1w3ZaDZ8S2wcr6SDPzM2yRDV5CqX7Pv539uKiPo",
  "key31": "36kDvA6Nb87SxVEEtYvmj9yvnhF3jD6r7CYRXV2fcXB66fGo4hWLdiYjEiSQvYacaiAdbS57zhVqX6UpxZKDRStS",
  "key32": "3VHe3owiTaTFsW885c6nZ6Ph3br2CStEkbb4Vp2CPN961x6wcEPdZZBanJ4eH7sEKWmEggRrDwhbpPMNoiCJcXxi",
  "key33": "GkGxnA7H827f1RMhabE7PFMgF6i4C2SZpg14vYWPmSaB9JN1SBpd9S74JvpZcpj2SsLSqiHKTTWr2AP4Dcs9W3L",
  "key34": "3YnMhH3boSJkCRz2cb7DjmRPpy7M5thaAAkCGYEChV5tcZ3gjmDy9xwQsCevZpAjm1vBKYzyTWET3kbKvbW3k5fq",
  "key35": "8DGqoDhPJxRwiXezZRroectT2yWvMUESwCAgKPwsdreLSmZFRm6uEXF5GLbNXe6qLVz2GUCQ4ZVW9kvXsdjQVZ9",
  "key36": "5PvunjGaLV2aYGcEm5cVH2hWN3Aqa8a1fEYnKQf58RFUm7xfq1hYXfvXS32g1QxW3KuteExQNBxdXxv412enGZ6h",
  "key37": "54fYxEu3mLtBcSC71J2c55k6SvZssiHx7Y9mqYwZfhbuEUWSCVM92Gaf48dkQGnL7AvkDe1jTQgzrax21eCPveSf",
  "key38": "s5F61SDRHJERpyXqMTRmjLw2UBW5o7xFRSEfZEEeZQD84obYSBMsYRk3H9KGYkwyg6Nyrvs7uWqcpDGST6FSd3V",
  "key39": "SmVWEw2iBTLX7XJKHD1dUKchp7ANZApTPUaKweMEdmmkBq5FjryTWD8FM66gX29pe13ve7qJY6vHmMXJuBKQHY9",
  "key40": "3HpwAdwvh76RvCrbFV5v3zPis21HSs6WtFEmR9RoABcuZdPbHCU9kqMfFEP2cPwsLtzGMe4Bs5c4PcqMyDZLtyHj"
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
