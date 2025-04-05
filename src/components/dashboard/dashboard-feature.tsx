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
    "3spisniDJ894978x6mEqjFRtdKgqmGYL8n8VGnz1RhXe4S9zsQaRFAL7YywijeMibNc9EdoejoY75buPzNaa4ni1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FU9euyESkjvk5okiDSdH1z99jCAjHMqrtSHBPJ9LQrhbPiEtcG5Fb7mLoYA3DrDZ472F2Y2LaDYc8SAKFWgGX4y",
  "key1": "2qnUxsi3AoqQsWkzdjdBYGVHVfWUeFZXBKDqHDTJyHHu5CChHJygnXrsaT2FZwwfTdvicTqPggYWBYdYrvB9PkDM",
  "key2": "dfSL7ckfg85WJtz7CUX3npj2j2451AE5o72AHUZB2DijSZjjyqv5qjAJnFPjTFucPKDUAbHCyQe7eJd6Nhy7enr",
  "key3": "46WSUD1MYbAVWuLR6BjWWy7ct5n7aFpy8zh9GqdHisdqyMC9NveQ7zkUykp3U3zqz921SN4zztZt6ySphaJpnRL1",
  "key4": "4CgQS2KKM7QuSgYYYoUnm1APoLvaZ6L4jwHSRve64LC3w2e7FkoDeAAknktjKKC1y1kHD4CQDuCMm1cA6VHeVT2a",
  "key5": "3LeqZVRNCGXGwTichdaj8gsCbD74KXo5QqDLRfH4N1bFQ35NA3cgJeS9hEHFQ3QXKq9kbvJeBzYJ5JDNNFcHTiN7",
  "key6": "PVS51jURQRFyaySAK17CE7GepAs75jBSGQdTLo26PPeVWzfUNFF95W92DVFt4PLLisu22N1NmftnkSVBFLAiJwY",
  "key7": "3ijjFLghQjwyUTBvoVHZo6ArQLd2rP9xSWfR57f6HPmiWKgL8vegZpwVkWdx9Up5pQDyPtiX4fJ9xrY5cQzZ7TBZ",
  "key8": "2dKQBeXTmNUZdvSUAtGAJQ8APUBWPTK5cGRAiVDj4P8jN6v8BTqiXhQQ6tCv1KWJCsVTdqPBThcHETpxbBqmPZWf",
  "key9": "3wEN4X4iZ3GgfAMe4yTD8teRx9f9EGJGKVj5gyUaUiyxTRV7aq1sqjD6PjhXNLj4VpfJXReT3vmXAxCzX1rWRcNE",
  "key10": "3zPAyXsYvEFt8w63yj6EBC2GRjT8RwLhW7aspqqbdtKU7gFhNuoVX6Ko3TfaQurfa1TEU6Yk4uqzTrmP833oDkep",
  "key11": "2RbHuQLtKVS6u9nG6viQkrBqiUc9gNQL7JBKgqEb85Tw5WTF126Q2ixANkox4KNKdqiTHkBpGbzfeAeDH69Zf1HJ",
  "key12": "5x198Mfs6TKG3YU4z5uSWbmpSdmspUUvTTyJMG6KgxKcr2CwvUWAy3j8dmtTveMW2feLAbeXmTeK9xQW7CY1Ajog",
  "key13": "4vvdf4qrf5ZVPcdGb9GGXVHPBzps6Hg7cFJyn8CRQDkRJAyWGJe6jJM2VhkQ1pc89c5Ly8Mqrh8MQwR4255Rq44c",
  "key14": "5fkRzSFyc4FUA72vCSpDMFgNwFEFUFUKuq8DjGaeaL3YFq4VEKECj7ycGUGx418rrBp5Sa3GynhuBjVcU4Z4BG1j",
  "key15": "3i5K39N7xNxnrrhrwpPNDKUey5kHu1w5xm5FDSs2J2qWFEVayHnwpPXQS7dmomsLsQUZeMauUreUEsBMto46uc7P",
  "key16": "2fGCAgZhwJZE9Cguj3uhMczhuyMC2dGufepuhcVpndvpXH45NRJgKHx9K7h332R5cu1bYY3gqTRY3NwEWYf31zY5",
  "key17": "2k3WTatMDUFXgTPM72LGEQFUyfpdpH5dPS4MzwWZmiFfsn3tR2zej9PNtLP66wFT5Z37PegZrHuYXK6XQzjdfbx8",
  "key18": "awL9DZ1MbkprBSpVg8KxXVns6fVahEXHzG4jEB9kB8a9V5BKeoFLvYatAs3Gc1LsvziMU7VGQecQHpiGyPY2eja",
  "key19": "2JhwhkDqZesNDFXTeLmo1vduQEi3GPuTsy4Uvvd22pXMRTbi7v86GKbwesyM25PkgQQRdu4gGMjMs1Ar2fyRxvh4",
  "key20": "35wMkVCyJE8wz6CjeX754QuU71hrGrBMsRCWX7hAnjNXQQHbx8P8AcCNL88HAkrozvAz2EGokvgwmTnFBSmWmWX",
  "key21": "2FEXYQ1iPQCUig79GCUhLDRytiwqGdSkaGdg18hArNLg34F118wnpiV1DhYwZfNcjC8CYBDss4DzemMzG1SkQ4u2",
  "key22": "3sZELpNCjLpJi9TpYcqjFvszUTGwNXiksvKPERjjDY7Y5inTkjA26rno4n2s9QBBHJ9MmQnEPVrLqDVgmJBo8czy",
  "key23": "968KNz8mnHr5E9Af7tH3ods3Gy4EbptpvLv1WCVrBp8E3u5cd63GY48pBWKicLEsuWbT4GUrmeAXHXg3ips8Ydj",
  "key24": "2f3FmqUqZfHBziFYd7jW5h3C83j9VstGSqbieMv4JH4Ak4VXaA1crGcaCf6LL61H75xxTQYvaufocrYyRyDZoEqV",
  "key25": "2DU2GNKH15Ff3QZY2Gowb7rYVZ89D4dZzZzbTzktV5jkwARcrqst1oLJe54ejfc7rTBeZ5uzWqHZkxbpX3h9Epa1",
  "key26": "gw6zZZfCgPqMjAUH9zPchPczMBoVrrjaRpNCzqXKrfwQwPD2W9zX6oysPdyrkeAZZo9gg45PNQHe3drnwiDfXZP",
  "key27": "2Ms6Az9a6unyUY7Ez1cbdUb7UeKAenaaogFtRraatQLNpkEo9tghDJajEdqbdNzJcKyCCnVidAs3EFv1mUUfTBCX",
  "key28": "4qCVHNN5s4Dar1EGSZRLgPoDD7jk6YLJkwKpAq2QniwWNf7sqCJoyiS2A67nwjBanjvTeAdHyuu9kp3Yanqk3TTy",
  "key29": "3u97FTcRzuBFiL5diYHEji7aN72eb2B6GAUn9YE1aCP8bWbMTUukvt4BMLdShCSHSGibcCJks43DbTbLeuSMe6YD",
  "key30": "4iAFWvczF2yxUem9722ecGeESawzSd8Nf9rwHkqYoVBazwxAKZA26cfrxqdkxPoY4ubNW7hKX1QQN75v9ngSbq1s",
  "key31": "2wpVk21dBWk7FiJ3wtiV4fuMPkXBPsQAVjRR744Y2JhmF39SMY3fEPyMRF1xRcZMB4De7ZXyP599g5pBSwGGJo2h",
  "key32": "2FpW2Lzxh1rsN4CBWd6tibsjTPGwapR4brjgMCi5SYaYfkofBJbgHHFfzqhkT98VHzHUG7k9EQr6CS5PR9fBMq8a",
  "key33": "43wHcG7wtCtUspGN6Jf1N2DgLBoVeXXniV17DsZixuGB4gL6jw8Sw2Z1soe86GfbA39g4Bs64tVmv1imcDw6iP88",
  "key34": "2nDgfCYMNrCb68xgGYNr2LCmALwKr4AAZE3oqMonGGuiJvFiN7bhfkRN8G111a8jWV3zmtcrncED1VP6SU6Y2GCs",
  "key35": "4r1EB1J3RQmbJuqD9fn11AjTrSnDRCLbDDyVrcNgekotgZiyYm5dAf1VVwd7qgNPQ5svhipMaubjzPrL8qdU5pwV",
  "key36": "3yJv8JHyhCPzAvvR41R5o767tvJCdg2ygFH4HxTvyU4nCR4SKjJvZKjg5bAoZ7FUmhshy7TjpDYyhR4ZQMfG1GCx",
  "key37": "4e5mFHjVSN2jvW8TbBEraDxdHfFYD3ECXuVQrYo38wtk7j9zzQRatFneHr6tN7hyJjYbhbAKdbRNgzaTQyH4PYm2",
  "key38": "s761BRi61Vw3G8a2uqBbSXDb1Fi7nsY5VvCarYvgqSWbxg5xxu8yVQLJEzkogZ5bUEsZSoJxTazfrXXcXboDJA1",
  "key39": "3NR791HGdwc5qkQJd5wyTtHy7JrkGkp6aX7cvXQZmTuC4TCfDQpjtuqWP35tzzaj8zZFXgWStbg2W7cLCXPcSRsu",
  "key40": "4GKXnVpZdDovJfkZ6VZgyb4c5FXaHz83CDaEWR8zv7qz9e26dvPgsQj4gQEJ9SEZyN74DQZUteynCgjwGxWugyU2",
  "key41": "gWiU6KthvSgz8cCUNhL5NB5yec6FRSYH3TWeUbVWrLUAUQRKVf1BaPBUq8wk9LDCawftHUucfoRJbPYGwSAWqXe",
  "key42": "rKqGyjmG45iRHjoiSbP2gyRvy9EPN9Ct79PEJ2mzVbXPfrK46A3nWvB8jjcHCxDQ1H2uaKoeK6j7CeyDEq5uzCj",
  "key43": "5xqnqP2u6SN9mFqFDY5fRLLz6tDML66JsGCRgqgE5HetuDAfs7KJwuePy6cMZgzUnN61eP3NtRbyBwfkq3BA3CA1"
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
