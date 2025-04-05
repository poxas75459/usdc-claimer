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
    "63ENxCNQY8ynvK5YfhnjtJab1Vzy8CLowUbmEEX6qnqNNZ8N11gGU83FaZ9jvCee2frnug9zkFBmpk8a1G8qWd1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WStLEav6NDwAVckUa6XRY5U5wigGFh5RJaFBr4MX7VJwa91Le3EMVBWfvtYbazGbM5iDeTCUo6cgwAg74HvzzyP",
  "key1": "xEJuAx2ZkzmNYAEMZxvEd7qEuV51L5E4vZL9oNTAzE8FN2wrY4BXVK647FVFn2WH7diFi8KdQksMGGyseXeW5AQ",
  "key2": "2iMWYR1AfUmnP9ehWJ1aueLEmHyLeX2RZATBqQYfiGK3EVyjvqQ6hrxE5VeLdJkrWFeFyqXQkZFsdB9FYqioBs5h",
  "key3": "443SnrM9g9km7885PTNa7P8bFHyVd9TgEUarFBDvPvVyKyj15jyvPXMMvyHFuoXQRmDRmpnCm6fMoNAwhevn8EvT",
  "key4": "AukrJu3i1eyhrVZPG8BDPKBkkkgZGouoCh3KQizjg3oS5NQ2dR3TpNMZfoX72Jwaj1tghTFc6eyVKnaCyJgc4dm",
  "key5": "5KvG7ALNKN48cbEyg7yMxwinTs93nHxH2qXuvDZT5wpgXAmWMLFc1hHRdRwYYioPMQf62ktinxobrxyGGEJuWevB",
  "key6": "DFnnMtYqdHvX24uc9ZDkxfrR7bFiJvMTmSS1w9fdm7n7FNmDdcc27TyTAjBFtjwqTz3GiCkK6HBa5czcmsNhqJN",
  "key7": "42jQTu75QkaTBEUsnuKHd13S2Kp9QaAdhhAPFeC7esBgj9EtGECQ2Bf1riphvPnhfZ4KKTfuuicgXm1uHPVU5DyC",
  "key8": "5duqHPWHjqSXFCo2u4HdDeu45JjxU38LqLGU6GmT92MQpYGLtay4dMxf4uT8XBVehbyv7QWmkeYxAwDaVXNCk74w",
  "key9": "55dWKk2wjA6PgmdfCJfAdKRo3mgeheZZVdhv73cXHXk9FQTaAn1LpYzU56AyZbP5yMAhXZyF8a4h91dQqzc5456Q",
  "key10": "SeUhy3Y3fvbvEs6iz3dd3Aguu9rhrnWu3gQrrB5uuH93zFXLLYhzJDV5a84wqfhLLMYovi4Rd7dq5BFv1JsYvzE",
  "key11": "4ojcwJ44hz5vnDcmCRJpYjhxqfAFvxYUsPwcmNHwpELA8KdXgbq5wu1QuickZTF4BszHQ1QCgkn3opuVBMKQrjGe",
  "key12": "4bVdEcRVc42KAsiFgsxjWoLHDBGmZr2y9Z27EyXtrxN8CMA2UNEs8Tigb8W66PnvhzWZS29znZwDpv9fXwVytmbN",
  "key13": "2tfdYUY1rxb1EeXXo9ptJZM66NBNpN7PFqw89fevSmyt9RV26pcwifFzN4EFfKrxS1DAV1QxMyRPi4drrnmRGVwt",
  "key14": "3Hckbn6TeSYFnX8PCKwq74HTRjPLskByx7jZB2uujNRN9GcXd5u5o4aViBZWPMhbUA6cssxmjdeGCGHD34B45z4w",
  "key15": "3LXRP5dj6UDF7wGUQMbzuPAfvQcc7BVc9W9ksTnpS9Bwn5L1rTQ3KThLPZsmtjsYfimfh4Srhk7hEz1NrT5dqLKU",
  "key16": "4i21HQVfJbrYX9J9ur112CZ7KcxrKJGm1eqWSSEcF8VDU9NCrVbcfyvBoEcAeqzHBumW5S5n9zvcPShf3aDwgywx",
  "key17": "5XrxjJff6Wyqpc2fdhme1HNUDhafA9Wq68YiCJ5DRgNL5mBNBEAtqKLWkpfES4uXpN3RxMdR5oVXieYQ8FuRAMXV",
  "key18": "UVFCSbP4tj6h4KuTyNRb15JA5jgAwa2PqMkDez98LhKJ3WiHU3gnpDp4fLhcTQ48rDoKNAJmYcm5SJCvwKsbaed",
  "key19": "E8mFeQivhyFnAZvAoX7RriY8483LDKzdmMZdELRMZVWv1Po4599GReqG6VFVUFYwjDw3F9aKWkWfiGwf32TLPDb",
  "key20": "2iRRWQGUNpzMLpWi45D4z26kaq7rquCfAhKhWjmDdUJ5NR28U5srGvDXGK1pMmai1HkfatasfRqh78x9JTWPNGcR",
  "key21": "LpVg2eqHeL2SHEVQDPJJueMFxMsJGQbPknnYszPjCYhhy1uFcTx5Q36Z1rvkPx1aAcfWbsoRvTR1kQnCxmjCZNg",
  "key22": "2be86eyPHzJn4hrz7JstPDos4mKpTrrG8WdGYWMbYkQWLf8EJopsgrCCZfwsggbNxBvLiiyp3knuAob1GbwXBFyv",
  "key23": "5qyc2Rykh4mSg3MWQrKZZoBEexzq3nS2arF7YcPLPKmRuGqzqZuWAEhJhczXDusVFdixzabqUMJQbFe17bRJYoe9",
  "key24": "5RmpdPx8EtzWcx6U9qcQpKiPviH94ZxRmiAfYdbTKDpadkNNL3BoHD9FX4D4TU96gg4fJwQHa61BRxNWJ4ZVNg6s",
  "key25": "2dzXN3xTL64P1GgdRwAKVadryrqLRMFtSC3PDqe9duddfagB9kMJfGPM1NRZXKDkjdiHQSAiXxQSi9SNW1Uit8hy",
  "key26": "5j6jDuaz57S8iTdyVtMHqdjEfPe6Zt7KG63ta8auPdKSok2vGxcJpQkHGqm3cG6P8psA3qGrkVPZsAdZRK9ZuufF",
  "key27": "3nXWiA5yHkyfcZpSbAXc1cFx8EDJDESJwLoJEonAxEiGedxPqBjJLuF4uMss7oyxB75foaMmc26y43QNuFNXJLFv",
  "key28": "4BszmnsnKAgTfYm5K5JpsJpQbnEBAkLXp3WRSsmrThjrMUiySWhh49HAq2ekkscG7HcAgpBT7XGTZRW9igJ73fFh",
  "key29": "58gfj9UjfDZHsw5z5rzyaySXS3tbGoo2hAv5aHAsrreg1zhhDtgx7ejvxN7HczPomkYUv9wi4xeYjosTuEdpWmHX",
  "key30": "xKS1rqfQs43vLDhkaKfzqD6AQe9Fyj66CA8eyuhJQZ7Ff7aHYfCxmaB7fBWam21DHDxQr1bkuhRvk9MMHZtd6xo",
  "key31": "2ntAU9k8E8HPVktnuEXzCVc1zHVMcbrWUf5SCfyNwxYhy44d2f9jRk6nPpsqgDnbE7gxPsG9eU3ka5A2wUn81ctV",
  "key32": "3kiXE85TuNUabViAhJMSuQaUZia8nP6crRx18k2PqqTpcufVdV8ycm5oezEj9z37Epp7yue8upb9EaywY4twPQFQ",
  "key33": "3eAZoEq6NrpzG51hXNutb8Mg15JvwfZkbgZqVGckVuikncdCr559Cs8sDUqMyjKaRDfSMd7Xf3eWFumZjQTBiSsT",
  "key34": "3ESpbEgddex7Ch2nbonBGff1icK5QyWBnQ1QbLTrVs4pZA38Sh1zsgj5rrC4ww92DvViEjV7X1RYdmvgk2NsnCmC",
  "key35": "arDPYTFLMUD61maDyt6QHC4QvvHkEeh53pBCGRN9ZHMTtWYL5xqTADRvrpzAwjqRshePQ7gWn9hGPVQGJpHUAbB",
  "key36": "28CqFUchcva3rbM29LXPGp2xaviJQoaLmwchT3WMjuYcMUWgKKpJR9oRMpHGnpqrCtt5zPDfGE58xRScVzbrNPQo"
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
