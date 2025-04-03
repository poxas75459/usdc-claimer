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
    "4EDTGmzW3RAVLfMdocWjqT3RZaDoBKPA1M4eVMfXUEosZG3k4MhDGzn1FvrQkeP5uYpdvnuDXo2xJijTQEe4cm54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519K76yDyyRdSx94ueF4JaLxSLiTX7utWfxTyvYSjgUbD3bvPiiJpJWahhdj8NZGLm6jKWaJTUFcaK13GSVCTEaw",
  "key1": "5R1ygs6gqYjuR8aiypSZcsRxo3V9XSiKNxUHbZhUQs19EbxvUhNNMwkwgpccpWFBzJ44v2ZDEtLgP9zHPvNySBG6",
  "key2": "3AE7wM8f34QCqwkHmtZVhqGiFCB8PRfsjrVS9XcRqtWQbXpuorVYe7m3Tg2F1aCdQSxnB6tvDy11xPpufuUiKKkj",
  "key3": "5QqviBsAJ9T5YvdkGPbE8uQybZqoX6qTAFMFEnNtwRy9G4HRd1Lb8DSCcRR9XYVpJtsV7XGQ1Riri9owcMcTxvTM",
  "key4": "3g8HPybXW5UTpVDM5N1gNb9udmHDN7Y8T4EKPdz5KsW1HrTCPH7aowSz4tkQstadakXguM2YkgSLsvRWfEkfUDgL",
  "key5": "2Uv4iSssRo6Kn1UnP7k1MtuGafFcEdHvU5W72U3vxDKn9GjW17EPC2iirb2drGvExxTc7pjSBs4EXYXZZZQHJ3PE",
  "key6": "51QFXs2hv7tcLTU7VbDui3FVcEeRzfKLBuD3eH3mJVLHMk4L8fmtkjzv9iSFEaw6aGB2sbkHuPUxNoiD3MdbUGr4",
  "key7": "4pAXhG1m9cGZz7KmiwdkFGpgVfAaWzMui1MZCUWms8SaXLksfPfJVha7jypDs82mP4pn6219L2HfubB5EwZbAbTE",
  "key8": "K1MUYLWxqc6QjcJY6g2kY8RH3nq4euoEj7mJHXVESQJjMcDqKXeCwF5jpADbGMNjm5GWkrAGuhiLuWcdLvxRCrN",
  "key9": "5gAaydZPxbZpJLyiG2p7MN4sacdJEYNJF3Nj63tv9MguvqXro5etLcTtmXHCewwpQpJsDoghB7Pcw3p8HN94T3Db",
  "key10": "2nrwQuEzmEviR66jMqgmEWMRt6UdfKtNnMKXCcNLwb6UvsDV5fShizyN8W9PrLH1LRV6WZ1cXNWKbiq2cgTGWftm",
  "key11": "3cFLZ4beND8i53SMHpnU3P85TTme5GKjaeQqQWPphYAREeY9XmwFiuD9fv8QeTg6UDzE6gL3ECwyjjMF1HT1ksYZ",
  "key12": "4w3wuGYWTfUkiuzHDbLkHViT4VJNCrNug71frjT87hwgoTxguu1ZsbFTQ297DgpYWxELL9hJBnT5emzSGNvZ7aCY",
  "key13": "3GBEGQhQok6F4bPjcbuJsQuSVZyHw5QQ16ZV731agWCYj2S2z6ehNbWP3Pm4toBT25HrCrSoPg3dRCAv4dhufEMU",
  "key14": "4SAQhWkYz2DdDVgJMXJ2xgoniZc8ND7UbSDHmHSrJ2TJJh8NXMxS7HpU8yUrjbmmc1DZ99bCqRNVQTcZuEKihWgg",
  "key15": "5rPdseDDPJ2gddSE1naYrwzctouciwTdx9QuuD2HQGv3Kev74xggQqpsd5xZqGTbiGhiqTmd2VxJ5iAyzQohZ9sr",
  "key16": "5aK6nkEkiDgUHz9PE1ZcksBfiiJGMKoWf9yQhd3kDbF1rWQ5SHTjXd5jADXKJHEViHgVyDuK59wVU16PUudnvfK3",
  "key17": "hfqF6CxLRJVbX6mK7v3rtQq7hwCYMon4nv6aPdXZmvUuNHKnF3nXi26ByFGbGAZJiVetaLUBmxYepmzUUEJ56zn",
  "key18": "2yd3PRedEZEP5fDKxaL6gjqf2DXbkjSLCJXcazPuBJuSJTV4uyJstUzZmM55UAzr2MKsmmXvyLhxfrKE5pjXBDyd",
  "key19": "4A1TqdRR8Pf3Xy1bXo8cMpPfpiBvY1i72UdsqNARsUEirGdAkZxj4VjuqFPyMVoeouKnUomw1ixJ1yuQU668VjXd",
  "key20": "2FFg5MUxMLNhfsEzak3FDmcXuuZMutWeodMkwCozcdSpHxj9NRZYDq1SqttYmFEjB6CcBfTu1PfiSAQqiVX7qmp8",
  "key21": "mdiy2FaWempNwQqdSHzorq4Xbxzpa7VMyxqRZEzUfGGSCuKBXE1Lx6dUFu5DmrJTYzMoMBaYQAxZ6FnVhPmZFcR",
  "key22": "2vsMnrQU7es4Z4iiDnivFvBJ1rr5uyizjqYjByDgF9ubSn6p1ua8xBDjyENgNDSE8qAjYDrvyYg9V5QYjFARsdcd",
  "key23": "2rAnQXdxhDUMgahkLeqJZYMH3LpSH51uodgp6hVWQ8cVm1AKEQ5BXKEK2ArSCPZAvtBzdmvSbgzxrFsjtbtz7teJ",
  "key24": "2X5dd2oUGuSJAHG3EW2AP62txVERxTa1S67NbGFPPDFXjbWA2nUfG1uGAyrjR2NjBrJkBHs5YPFL2AQiZgXcLM9i",
  "key25": "2g8JgC5qXqiZDF6ApSWi2fUmg8qTtFDGvDvnCAkBphiRet7xPMr6Wh2HazY1LdkujZaL4uycmu2kjw42csY9SvT5",
  "key26": "2RytubMNJcBqEuEMSzT5asJuc7HN9TAteqKWinsg1Tqf5xKQHkKWCB5jq95J6Aaw7iCkW4bA2hPJXdDtPzq3nexm",
  "key27": "2FvH5whPKoVHv5DQr9uPzDxckTufHwv4ZZgbZTd4qFfAFb6DNi2HmJbbpQzqsRmTB4qKwif1pxvavSDHMwqoaBfT",
  "key28": "Jrpo2tDMKU7WVywdYMGuxYTRvjkZLdtRBMKap62KH3qY94pD4VPgWkVWtXPK2YULy7U3jGo8FJXrqheA9X4Bj95"
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
