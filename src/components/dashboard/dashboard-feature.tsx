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
    "2ZkcusjMFZ8NWPb7f83Kb4QWB8jRJUk9eayghiXDNaP7wCKu1nAoSrWuBwspbH1UYkGc498XZ6xV1ZizktYT5ids"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NcrXbQ5Zvdhj8qhEkzXL7krFcLTgctW4x2s7thyVSJGXW3HmmRe3GyVLbW5PUefxdxLKYRj4tZxBgBaVDd8vL7n",
  "key1": "3LCdjY1yRGP4vJvRG7tg1gNsa6bRCjWVXqkBZZqERoWWvRfQbhx4r3pDNSA5MtNgvZa3yiQPSWRFFwQPA1Jh6QWf",
  "key2": "4z4rJSJrdpUzxbT8g71jnTqL1Q2GzRNvCpkwaGnNFt3Neq471jUpjRAKpWH3KE2FWjS88yKbMzFQHBBdBPNNNiW4",
  "key3": "3Nxervdv55hUVrxBKBsxTBqoxWaopBJARZSHydNfcAVxPhVMGtfGtyWdp99PhwGvvpSg7dLYerHVmtVN3qa4ijyH",
  "key4": "261eLkNTA53c9jQpFXsMKNGpniNJztjSxJ57F3Jm1BEAQcGE31xeis4gyZXwP1cV6QfqeYY8jhwamC5GjYdW5QpP",
  "key5": "3X3L1g54NXqdEMCwAH735segThysCmtDqGrgBhXiFeLZCksvVypSoCwuuhzfpAAVbKX3cQuPsziPKrftrzAe8Pcj",
  "key6": "43PjM6hwLyeDQan3wNxwCD5K4CDbZHYUeVWCZPLjxdpXCX46RCUS3c7HKfVpkUhfoiyVbBwwaSwmjhzfg1EVX5Ez",
  "key7": "4uq8GSHpdqF5tna4km1Y6hGACeNvpaP52aGEWvJF3dsNX4T7aWB879NrY247DYQtNoud5BJq7A8LZRirgjanzLuL",
  "key8": "pXtYwvvNs4zid6W1ieANvRAwZxwAoHyRQAroWffxiqLmjNxZNLp94XsSiPcm6UUMaYpXxodnPoo62Sh2zkbgN88",
  "key9": "RrQqRM8ZNZ2eVX9ddPKgB6fAYxK7NvV6Sf8poFskHeWLqVs6E2HM5eqogKWx4iUGfA1j8n7ofp4F5k3QjEvLVjC",
  "key10": "33uK1wTV1Drh9PHXLGTHLxTnvjNA9t3RG9oUJWDmp7FY5gZYr5Xb65vLi2JcoTKpqbmwkH6vk1w1APi2Jw3YPNf1",
  "key11": "3cr6Jkx6bzAT5JnYedYkHu7a21VVzZLBvnUdzXnMYPLC9JHRshbuKnB12EVH8QDjHbbqxA8cicVs4rmGZYS1GVkA",
  "key12": "5xMSGdGKn6AZ7S3PUBy9sCFw1pLBT1gUsE4iXYZ3RjYhfKNYbVn5ZwtyZQpMGxM4MeAnRJVcENfNnBv3dnzZgDwF",
  "key13": "4EmJC4ubJbAiDoJ9Ry5K3zRMfa4G81jzFUZGReeSZuKZnY6E85XFFSpaxvL2drMNbi2yEvRDigUaLVGKPLTqEQhx",
  "key14": "2NZEccsNFcAFvCs3NWSbzYTn6NzCQcx8PaWDzSNZYQnDmU5F8zjcFfLKmc3FaHqBR5xnww769P6ZV6o7jzTZEi2b",
  "key15": "2m5Dv4pgFou9PNDa1Ng2pRNksvXbpjNECTYPvwZQQ8b6cgsJw6Znz9hS761Y33t698uNrwGwnA9HNSKQB2Gvnui2",
  "key16": "2BYdb4Ec32EgT1AAxDCKPT9MPpzLcHERhJuFjt2MNVQQgiUT1Wr5N9qJQzekmWzZ5Qh49wbAmg39aajVDaiTY3YS",
  "key17": "xJ3rzc2CCA15jc6zkWhhebco9ykngxVN9zRgvcaGkdVztva3nZCCeabzzQ5oV51F84A1DEDEQk1843aLQDAwvDY",
  "key18": "2zosXCcjHK42gCeBDK3XvpCGH7ad8bpCrZc6gZ3a4GSDSDrtmczVtcatuixjyi7FALaExUpbaUwiyZjnJ7sErVJH",
  "key19": "MdvJGx2Zworz5whohoJa86eUEZ8LLwTpg1fUEWd5541RJwvkc1LFrqem4eq1kZf4m5ZAkJaSHd28E9omY6fZQSB",
  "key20": "3wAknsDgoTrLsxXCNsreow3uu3xjcB4xHgVLfVoJ5xYqGCAJqLHWgpXKC7DyP1y6hLAeyLNRLFRRFL2mbXnUYWAU",
  "key21": "4bjMzDuibsyHmqfB22cBPzis5eidZZiR38nZQg4mM257XDC929N1jWzah5SyMjgRGqHTqp3S4goon4PvdZAJfgjM",
  "key22": "36TgzarYngVcdNBqLJKHXaLuTmxyn4Vqm6o8GtGxooTotuS1hERQKVqm4b6HpdZWQ5PPnSSbfe1fR9RB4REByHqz",
  "key23": "3pfbAJWjPheyYJozVqchGyDK8TtXWDTmQvj18vyYoCSNkyAPVmWUFkMtjTzMChup3CSrKyncSvKaspEiUhZZHq8P",
  "key24": "4vZ49XuCo4WQyDieHw4cZTpn2W7WKAS2P9Es9picu13GwPGaSt2LeacnR2MEXnxxE2yC1rDH84zu74BF9LqUjAkc",
  "key25": "5k5bHyz5c7x4Jzqs7jEdYCjzeJdtAHHRLTcTKVLhgq9bMrb1ibjJhADQWT8G4A1NdwMwHvB9TNJEaLuSs62vUd7J",
  "key26": "4RSPyVdUzoJoe1WXmLvt2zBi1U9a8fZ2gePaWfXNHziV7jGaeL2LoxjJE8RS1b9shYHy4kxW8nd161yV1TN8t7uS",
  "key27": "2PqqdhvSRXxB83uJbWcYrD3bVeCLe3GNYq3VzUeDmAQwx74BsrqC1SMsQqEmcJAREdPhRAPqWP2Sk2nQPBbcwURB",
  "key28": "2rTsBE5pDGWMtbHX8vmbgMjtcjiFbdhSVKbxTutL3WCnFHU11iMKpeMwctRv3zTX7xyNNpkwJn4V6FhNMHKi7wed",
  "key29": "seCEieiER2XjYGv8vGexhoqPA5tW83vj6Fd6j1e3bh267agY3ETniQvshq7QMDDYHyHRxcG5dnejnMKLHs8EajQ",
  "key30": "5WLSoa4ncVgSX3HM5UBtqX6kfrk3BakwS43QawWmMuNcfg5UV2aviAXVF1mNWkebVwXmGSp7w7qpe8mUEQSaj1VG",
  "key31": "62bTrVMJQ2FKpUpCoU7Uf5dELcq8GDe5t7uNa1KHSdRVqAWcJxXdkRgTN168PMaBZPhJoqRBrEeBx48vVkFPmcoJ",
  "key32": "5abGiCkrT68xrVpEMfswzUe1makSZRfVY1Wj5F6u2AkqzFtbhPaM1QfpKGihJJiE9wD8BgLA7JHxpwbZjP8nkXry",
  "key33": "jnZaeuTfQph7wG5pSsKiMEG3t7BBFHkhDGGorr2wrDan7uHtbycYdRtDFUm5X4hUxjwz91FcS2j4MKuowfsQsyj",
  "key34": "3yeHo7T1D6XdE2eHmwBfoLDT4VxPaztNssiM7cXNR2uQFw33bY137SziHGbVBpZhWu9pqVPQ4V37UmqBxV9jxxQo",
  "key35": "3YadAseHKJjHSGXwcZNbiqfo2KtcrFXGcWTE66aJhEtBwbEHxrhwRe46XvWdoWAN1Pe3xChUaPixVZ9sJo5YsyHn",
  "key36": "5edVtQGkzk7NH6siwPf1kyUs2Af4pSSrtonvBLgno9rqBXTuFti9exrzm8RipSrX7UJqFLpNCvizVQFvYhJbxbXW",
  "key37": "2pgyrbQz4ALh2cwhwTVzGspUWWre5yvqfoRAb6cpfWNubWv3GCD6Ra7ajh8sDTyiYSsc67HRBo5oWnb9ExqLjrhv",
  "key38": "zxxa4826ryjNKhos5jbEXTvNahaHmygKch2TAygSaZRYsv6Ejc6tSYGTbgjpW4TNr2PAU6QbTWrMz9pSDwo7kx9",
  "key39": "5cJeKsfC1XToUPhZyZ74emPV7yTNJsTCXEXmAJu7Yy6nD2LDr4gRic2GFtG6sbipf4nU1DJTJJgjqArw2FHEW7Pn",
  "key40": "44fG61kRPvChvzd9hJuX31aiwjRxV19gnV6Ykt8vCtmM87BpjKR7krHuoKnuMp5bjqGNBR2ySKR677HCHd5asKBT",
  "key41": "4w4FRW2qdEcGtrwzDNzfoBAudDt8fS7sxgXRG2pdXuLEhmCUcDyKjj8VU6aoAxgpurBLJXLFnCUk5h3mLF8cq6Yu",
  "key42": "5Uobj5YCU9xBT9YhUMKg6WadqPBuC4LAH426SDNo3RZPWtgbYsYf8BFygxmew2NAPrQtxoY2yaTPLnfYh4hHKfvh",
  "key43": "37WzvmFjti5rrxJAbUCm2SFqFnL6jojXdvgogngDrg7zwBdBi8iTPMkfWn5xExCR69aVF3SQ5ffFGU2PAmgXbGgM",
  "key44": "f8Qqy1Gk9tzY9akYDoMsdPK28K4Jqvb3US6fxzjVmfawpprN1q6wqTAc7vyRyQ1AXBfjLfW91BpAu8stxYRN2hr",
  "key45": "54KcVrVLbKRjeQWFmKX8mNfuhhh7JAfsUEg6yjetMea4Gvev1JLv8fwRtufejzSjmwpTEgk247KK2ha2a9CcWk7B",
  "key46": "4rge8QzfZRkQ3WG4K6eHwkKFGpCs4NyaiTxWv9wBFUMe2JpzFKoMGco9eSj54ja1NyUKJcmpgH2qpXa5mVawXPez",
  "key47": "Q4o3b7rvmwrg2hgeiLv1zPggmArzNQT4D3dFfzLEjgdGoznbaDWw8djGt1zJ7DFh7zMtdV2QThTZC81GvWoXiXV",
  "key48": "5Nrg8xMNGGherRmxPH1c9aRSuQ6aToWqPzhxJx37mZ9CPnpr7G9dLdFeeZkvkR8KPLTAbSw2NRH5yGYnCvuLBW6x"
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
