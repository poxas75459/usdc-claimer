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
    "45Tn3ruPxgPHm7BmNcZwUArG6bsH2NAuk5tWPf4uwztoHNADFj8oWWJC5wxXAG9pmy2oYoFxeULEzcN77kpjJ36v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZeNhkZYBD8LfiguFk2NC8CXmpCRb14RGXyPqjdtDhTZBhG1WJwbAZXxERyHTKNMZkYZsX92XWu8Py2DcxEjU1y",
  "key1": "CxtT25ztSno7UiQBoY2cbtfhvhhWcsGda3n1nLJGoFvSaSerNFM1TEYrNwhXEmy4HkCERAWWhSzp1mzUQ9tL7W2",
  "key2": "4MadFnMhoJR3KHV8fWrbE6TkZjMzF41ASv72jqxqD6coqdSH4iMCMLf2ZjwbMDN5aZvFY1Dms7fAhSmG1vty7CXm",
  "key3": "B6NduqPGDozQfDqfb8RenixJUcicDDQss1UZ2nbVYz2bS8rZHVy3rXgESwUBVjUDBckvyKX2uyUUmBbb2Y2SoDr",
  "key4": "okAD8hny6P9YoPXmZ3ut1uS1hoepJsQHfCs5sAQvHDjxs78GrAh42BzEXkxonAjNZsPCBofgm66H5Br9u1McK4u",
  "key5": "3rA9QBMxQadgTro3wBc9JikEFBQo9z7jSLfudcWYNPLWwJ5kQd9JEwrcn3C9znqJHzXQd9c7eZVaURPbBAdwVK1c",
  "key6": "58gQn1hgqqBqQcGv8uowvux2rx3Bf5MmXTgJoi8zXguNqBjRf1PS77w2jRoCdggsyrjE7SaWUw3YfmumvjeM7vDU",
  "key7": "4Y8jLDHbEzKCzZR6gzRgXwWPTeidwimpgChftFRtwiqeUsTiSrNikCwjAVNM4oA8JKKXDUNHp76R9jbJDmzK9vkA",
  "key8": "382LdApQxCsBpTJc6vRJQY72di5ZvPP4AZ53sw8Cm1Nj2r5ufnaBGooXR9cVvuWYPH9MBuKbYVsAQVfe2JUY6rab",
  "key9": "3i4HEiboRS2TBD2Mp9fYJb654nobTKm2NC2oXJDjw7PTCpRfWmaqhYpWTbJQ3TEhmv6jxFUogKk6uU2L9M77eLEe",
  "key10": "4NdaeBjC8o5gz1gDJgdLRRAUiVYmnTasX1FmRnuaSzZoSJqTbTVVHo1MqE2imz6b6GB65A3o3EAneSmamraB1aqk",
  "key11": "2PYzr5wzWWu7vKbdsdJWS15o5Y4vXuwdDWzytjRLcghyJGieQG5o5mKA5kXQecxkQ1oy9WeporVDv2YFxYkbTD4E",
  "key12": "3LhhQ1ccm9hY6n2LXLC7jkyX2a79AbX7LmwVjvQvBnzekgaW68BTqbPCdyjGPSFKf97c1LhSiMQJRFQfWjgdGAv7",
  "key13": "5e3sAriyuYP2m3zyap7d5TfRwzUPofkMSRp4gAhrs2ujWLj8HiGndHxdDawU2ZDArYNAschmRzYFmwhCURXFXQ3G",
  "key14": "5cHLZGaSVdrXy5ycG9PaXFBxNucJ6v3hDxtqoa9RhGcxabXYLDPDn2hUBSUGydhCx92BbWKHSCxKse8KMBbNwH97",
  "key15": "yEV4H6hA4e8fccjSJnBGtmE8QiQSmwNRSKXHiFFJgNrTsxWuVi8CMuYcRM34Yny7GbstM6k4HHVHxhmS86WCsme",
  "key16": "JNAZEzmF4Moy4ySKENH6U6PPwVKXTbT1YDjswFe3EdXEEV5cE7kSywwadjYf5ZCsRjNsgsxgeNj5E1dtWXNoBFF",
  "key17": "5sStqT5LEi5GEqQoXkrCpiZTD8oyUwDinx158JbKMnDTdVUvpvhcnzCNZ8kpKokaVcSorA25kmydPWK4n2Tasvrk",
  "key18": "2ABFg6AN3k3uM8udTUdDbKPZ5PFiQZou4urRLCKhbiFWt6FS9wnJmSUDBPA5uHfz3uvWPTojyZrRXsg3JC9Zu7EL",
  "key19": "4LC4waxibQeA5MVkzhUszDAG9uiLafJo4whmcUkY4aRWxGyC1RbZgKi3rkuaf8BdYLFaUa7CHy2nAkUth1PDCbdQ",
  "key20": "VfSW3Jyp9y15ACHLhhT6ujQx4V3w18gcrGjr6fqw8fHppuJxcaKpd8wJWgkzwG3dyjWVMmgfbL41NqAFAfn9hpx",
  "key21": "2D4Tebri1LubR9avcR3gmEcqF3iZiLtBrZnabDDrm1oFsqRxSpMH6mnKjtXLPh9en6759DnkZ6QLARR6wpCXT36M",
  "key22": "2g7boBNummFQtVqLTocy8FTMZ3KJc4sSWnTQFXJkNPZMdrw4zx9S8h6UeoLfRv7U4bMhq3qhn3wNGeAVtJEyk4Dt",
  "key23": "5dQNVM6Uzu74JMB3yfwZCgfRbf5qhXjJMi6prMjBUqX3hcsgVTGEWST2z9Hc4MQ1o9puqw5mzZwMDUdxHCzB7Hg1",
  "key24": "2xySi6oh6yf2kaBw3Qjpyrsnfzw6u3eqv48ZZYRGB4iYYk7MeFsygNWzYMKfxwtMekMYC8xHReyVMD8NivdUdq3H",
  "key25": "z1D3XSDDWUv4CgLB7GiqyNaEVHHxw5QEyw7GXue1SV8ATE9tpRoqHcDnuGVz1hMR3PVKB8Cz4414ubfSqjCCATc",
  "key26": "43uHDiyRp5wXKYovNS1mj886rj8qsgDAdeNqYSLwSuoNRm1WVKJCnbV7QTdWpuPa8H9PHdVw6MvWTr6id4eNQE5C",
  "key27": "3zhQkLTsXwUfoE6Zh3RJAUHyAmhmBaBbxv4fCLhmC3bd22hLz61iHEcagEYGoyKXoCWjqjJVWWsh4j22i8qK9v2",
  "key28": "3nWps5mx9sNwVgYLhqnm5b3jo2bMtPdoW7DwhAGdQvuT8NXRq85vNuRCwTX6FQF99rMvnqhA1Q1NcW5unhRWt9PJ",
  "key29": "2jCtUTnJoAokjXS15A8vX67chC9AGZbrVE7NxTmbZrN5KVFkTUQ1abJbZ8fAuRW474KeJmEUo4ifzg6Bm1sJZcQ4",
  "key30": "u63Fa8iErg3XXxEMkLt9eaPHyZE21kprgBfe8wZj2kQKe1MbHWagXrZ4r8Pu452PQPexd2Lj6YzrKx3daFCSHWy"
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
