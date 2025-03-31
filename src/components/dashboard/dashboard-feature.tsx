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
    "3L5ESExWQ3PGc4ftwpDKthF1Jxf7sdE7cMZNMsLUrJHxuviMW2T97yaRMPXGZ2pSBHnkRZ38wWy5VpmfAvH1EB53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5TL3LqbKunojT8DnnvqsCZ8zQfaHmJCex9ZtwShjtQUsnz9xefLXYy46EA31YQZqSajr1QqfBM4Q6CnN94zA2g",
  "key1": "3Y4cRpoewpgZZtLRsQ2FKvbJj1jcabJQ5cwQzx15ED4KLFY1JDRbSp2M7LuCqXu36ijtEPk3gtJV7RBnVd4jMV8",
  "key2": "aXo4innXPwppBxXLDZCApbyUydCmcARxUXuC3DzVtdWckZaB1ZKCB4tYqG4ajYMKLbvXfKK5xwbiLdeHyijZw2t",
  "key3": "51qV4vk1Y4LaSnzwuvVSNcuAocvW2JAYMCfYfNZUZ6b8WFizqWkdL2qHCGQw1pfceGUqYM5opJa4s6F9KRjJ2ma4",
  "key4": "25LYzqV22PzbQXuafSNHfee6t7KWHabhW8nJMcQurmELvrhM8hgMre5kSVpUX4W9noeJj7yaQu3mxbC6H8eYmtFh",
  "key5": "5q97aV7t11CUBruFHPdu7hHaeKLAUyTpnXKrP1EbJmiaxMm5shss8jho6Xmuy5KfR3Hti8tvde7bUBnyouJHgmqU",
  "key6": "3YkprMkJCQ87Lia8MJAnbZAjsjTpTFhkqhEFvJcLFdFsQXfmYVfPjJhkGT1eiFTdmpXGQZBr368tg6CRCv4FpKBm",
  "key7": "3wvakEnNstVmMNosdYEsozdufakwv1oCaKoyjywAhzHfkApSBVsBiXQq4zmMq8Jg53t7HErmT6K4GqGs12ANr1xv",
  "key8": "3jddCtjXWLu4zgawtrHi6hq4oGmcXwfdZP65khvUoCSkg3i93wDoBcvtgAEuxw7QuXB8RR921ooBf7ervd34c5ob",
  "key9": "4dV9WsZdCLUWKdeNqEM6QtApUfhFckmYAWWMFb9cc5oUa3qNbMrDPxR8MbgwTsegLfoiXq2EMpkksKiUqq5C8SRV",
  "key10": "53onSA6hRVTwvrE241QPVWJpXPZtmULTp6QkFn21Bvb3qtHiaJcuxzCACXZ6R6q4zaDjURz665gQqTL5Avz9erXW",
  "key11": "8jvkKmN6HBPpbX3S4FFpZP9AKSWGrUNzosLMUHCrZ5VJ1tRVtNAX88Y43p97c2EDUavJQLd8WZQstJ5bk7CvU8W",
  "key12": "64mf722LANts9ZbNFT4JJgbtYmfb1uMvdzEqUxDEgSnkuN13221711hX9UmU7dAg9KzKHxyTR7iaBSBHdofqrMGT",
  "key13": "2WNPsuMTbnVH42XWgXnv5b7docgqgW27HgbeqZ7ddF9aMeFv1AjTf4NUxgWmz2khUBHrU1g93ocbgKuv8AyQSMc3",
  "key14": "4aFmhaq4vWGQK4aTDN8xhWVmBe2WMbszBbje2sahQ5SooHooo3JdfU8hgM6sutgzG1XXXWaiZ93qRWuFXrJmji4H",
  "key15": "5Azzncpd1pPE2bYMzvXD2WLoBeM17w7mwDXt3CPSwEzG4ZAcepYBVbVT18WfihbLq9UFC1XXYoWjSCn1Ms7aerKW",
  "key16": "4C3DqZN8HPf4qXsxtzUHdQcK7Lc94y8yecSGiVaD3VDEFBroshtkzr4uJgZdPzohve4Toy99j3YuKFcbfKqPvpZm",
  "key17": "3oBKsoTEgQydxFohXVEcmZ24raztg93RVyRBSzdxGgHakYrDiVdXVBqNj9Fj6KyDVVmS1qDQQozmyoLmS25yevSG",
  "key18": "5Pf4dtjqG7rH5KoM921d66415jw3EJz5maiwRGw82CPpYz15DAYpPv1SZRxrR79C9W2kghJwdN7n7yxz1Ed4NUk7",
  "key19": "2LPrv8acnT23bkdXehbsF4wwDmeNMqWHwa7DUadU8whaFQXLZ5F6vaKA9tgjBeMq28XCSsGRDc9LsnzNYpPtfXvU",
  "key20": "27XJTZt3DmEmpY9jBuBD12AVqFndC7DtiS1hrJsX7uvRxMKm6Z2QP2Bzm5rhrAksAehm1SaSUuVs7QBBnzT67mQc",
  "key21": "2diK9eFLt7V9q1boPgLLmkynBkMpn7NMxoermnxhjuFW5hBnhhZcxDWgvYZ4fqn7adsF3u43g2L3Ny8dNou6pSUF",
  "key22": "3JYsHhv1YwY5Q3kijmQkVs3FwhZwHtZb3BUMez4xKPpFKqb2SzNVhhUG7741Asf3osshjrUnf4gFEsTpqwb4t3BV",
  "key23": "8FSdyDsVrSAt7AY9iUpQDnrYHHPPfxEMWY2EKxvcKc4VrVehCvtrnmvw2UjB8vrXESYSnZ1s2jLVr9igarjKT96",
  "key24": "49ByNaaRVTcGbJKNWJSQkiX6GxqDTqdcv93URrhuTvwLJD9vuxb4234TSyE1xSCg7yGBbqwLcLNBsDRGPmWvW9VK",
  "key25": "2TMPkT2TjWwiLfWo4NkpdDBJLzy8BNKaS7VM24k6ypFtFiQQTQvrd9Vm8bxpZ5jar1otcYL3nt1FHA9bVDrwZ4w6",
  "key26": "2ZrRr21irBZsJMLzLJg3Nwbf4QoFQrnggVQv8kS3E3bZzxEQVwSAYEYcBJuweiBCp5QcVxrA96mqGhZUAQJhULtz",
  "key27": "2bCGJc9ryEKWWsU9YjbKJh4VPs3C4JZCB9rGAib1wPLsb9yr1HqCsZAtXoEAtez1SL4LwpELCaKPneuwXyM4u1R6",
  "key28": "2Yw2tKaJ86B8TYRJStCxzZQd9cDz4HCNy5Bs886ou3qURRSSqTkivpCACsvvG9G92ywfojswmpbPFWuegbsc4jSp",
  "key29": "25P2grZKU9FjSmVhuHBF6JAe8J8ynZJyExxmQvYaiutmhcD1F5qW2LP6efmQdi5Zf5tz9PqqKGaqPcJ8zXZ516fE",
  "key30": "4KwwipVVqYQ9KqSFneDsBkZzsRjAywug1Nczst3gkL7sCfdSxEWx4sWJNWMhqo8yKqRGBqqSaJS8VacVGBeNDMBg",
  "key31": "2HP2DBjG8HVDVuEvXGq7fSPSajFPtKsPJs8K6UjYrtqpPbztymW1bjguzgyiZgzZ7n81XPqF9JNREhEgspQ1jGc3",
  "key32": "3xW72eUdRSp1aHxe7r6hWWAYUs4Bq3WJj9trMT3MpKzokP7j2GqMN35d1F68AGWSmDXDeqLYeq4TCzEC45ZRg2fW",
  "key33": "32qcWSbkD5cpAC2BEG3mN1XcWnF2hH4aejK9JmJt9wabZrcZ4DK6FWCuytsbwXogW4f1cdLLFNJJMH4h84BEvt2v"
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
