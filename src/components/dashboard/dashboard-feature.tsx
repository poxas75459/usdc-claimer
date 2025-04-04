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
    "46oTHfjmFMN1LgRyjwgCDGDt1aaRHj4X2oxVCvyRVbR1uCU8NoY7QRTmgLpNwBrX9ayakNTBNpr7C6Kd9azsRHJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rexKbUwUPzTUB9sG3JPt7RsR2W97pfEBKm5USbiN1yANXMF14FMKKg2NSpKtQ2XjoGAsK9i2wtospC4AFHwe8uT",
  "key1": "3GubVQXgrMrmWCa7YaFnV9GJSAoka6tbpLorv934PPDP4upJmZyg9ir7WDLJso6n53yhCU3SEuuEXdfDp6wGLJEF",
  "key2": "RzuZB3mSJkw7W3UmSTt7BQMtWZ5TJGuvSnpax4bAbCdv44Hi7BHmDUEVZYJcXsq3fmofaAYWjyubGV4cSLi8zeC",
  "key3": "24rzVvE5o6cgWfZEkdkWKwq6eDSfrkko2ojFZF4nRPMBoLvtzjNtsejwtbcEsvjzypab8FMGikWkjpv2kfneqRDM",
  "key4": "45ZL1Fby8RAthcfZnzHFcVJ2eV3j7EwxBd8rFb9DftujvVECywPfGH28ChBaCSBZpuGXhBKtxfHK4LYYeN8fSXvN",
  "key5": "L39oZ7kwtGG5rHh81R2j1mJJVWJDq8tEkkpm6itN18j1NDxAqY8mFYMAEUvXstmLAo8Ui7HaiCyceqXSzVrjuQS",
  "key6": "5LVRnD4wkHo9j9vC7zbGS5qbKpjnAnKuniX8pPJZRjLCDdpn1csuYrL5yPrG9tWe7UnQfXV6VHT4yvz3pxTMwb3m",
  "key7": "2JgpMsxXCo8j91FbMaWZkrGmkRGhdbeJM6Hg8H5NiC9s6T3pHQJPg2PcPNUUa4VvnFJ2BEVJLEu85pKzxZtaboAn",
  "key8": "4uVZmHzcSGmpcZ85rAuqjaFWjSZCpdfpr4ErSePkfaefGBRMNPkoVUQGLsc188wNofabq729P6dCgRNMpg4xRhNW",
  "key9": "4HDQcHgPnz2BLME7umTmm2c2P7yJtLihuaFWcyTQ4p88hdJwGXbbY9Myn5qM4sQuLYdNC8UrDqQRkUp6d3Td41ag",
  "key10": "5zVD6zbubdgEnmWxG1QeW4cQgc7c4ZG6ju1FC27eNdS9tBCL91SRZtct1KqYxHwMu8HF2uvyMh2gg3rU39xKKN7S",
  "key11": "4HA67xvfdb8XRJ7ew6aKqNUwnEzHD73BTniX6MXYBeVdofGzJTbG6xGxbFZTw1VhiJCwCsJgA6MykUQapMyWwEBB",
  "key12": "2BhgHkTzDovUYWZfj1LmmExYGQZyDpf3UrQhQXMdF2Z49K2fbhDBaQDj8va2ygt3e17VTbtFR97oAK6EcaK231AT",
  "key13": "PbSwbttNQNryNXcHPXo6aXkj5QCR4Mm1FkkCB3rkoEZ7C6LfR2hAV1kxW5h1wLNysaP83Q5pj7JEj9KruMPhXY9",
  "key14": "PJeKHJa1EymD9tU6GQQmz65gyXE5PrKTBz8btnTNjeRKuicXfbcWvWPkRN83k15965M9emF7PWoeT9aZvzFYYRN",
  "key15": "65Ek3aq8zMUtvzYQLuLF5xMMntfn8U1otnvg3YygK2Z2cHLkzVkmysRcXQPKGdXLUhRzEAKayxy8YTQZiQNGGKDG",
  "key16": "3VY4euRZt7f1Co6sfpLD6UJDC1orrGuT5msu3XAfqHCRraKRozhUtwGsNDSamdv5XnqDQvr3Rp7D3naAxdgU6DGr",
  "key17": "343A8UttqKy29oexUvX3ntxaChMV9QZDPeTubqB4Upaa5hZ562UR93eN5t1NygH341rhPFUYVUa2hNXxE11SDY7q",
  "key18": "QGkHzyQoa1K2e9tV6QNkMVTxvu64hBNZSqxDhFVrZW2j8g76G55kmLqLVvpBS3bFQSyHcyRkdi52TjnPuxE3CXc",
  "key19": "5J73WjWzmtwLqKkFRGLhEgDhXg6FdhCbT9AMVgmxxYH3zVcRGakDQuZEwSkNXFA9pgtqRxMuQ2rEUJ5RQ4Sipc2n",
  "key20": "3NQ3V1FiXjXctafhhN3AMzCAzp2CLBmNNALaDKsU2JKvciLFdUjNwJWWcNGGBuKBFWu1aNZqP6KG1UscUo4dmhpq",
  "key21": "2dBsvwg9gNis8NgD9CGinFJ1sutf25N89mNc7E2WCcJ3FBoWFYEYGqEVhGsQapsgNvN1NmLUJJwBLKFNSvvYshY5",
  "key22": "2iqRcZgciwAyTw9JMnWyBFyRpRGNkguCTVLSUYWJGkW4sUrgMgSL9su35NYXtXjPbRJMtjcVoVFaLKQ5pQ4kiJob",
  "key23": "2r8af1QmpKBoW8ajbYFLpcZhZDvjKw1HrJeezkCGZ7x9sjEvUXhUq4tXL3XUcFFDTg4hsqMDyPMAFYirsRm6otnD",
  "key24": "4esRNdyS34DG4JbuNEpkCykwEHAaSTJMRVQhmTe9uo3jw8oDgbAJqYxEHWTwWwtfHkJtWJZtPzGPjANzbyE4G19i",
  "key25": "57iNy42q9wXdNyWxDexdZJBR8eoKGvAaCe3wqVaqpkDLkAob6jGzghVCbEgpbq13s2hPMtepZNFRLabyu2uy2y43",
  "key26": "4Hdo7Yf39R1DZyZKY9bQuiY9YsSkxMm9uEmRfL3Djy8LQnpGSB8xGjrXWFr1ea1AtREbQSe8CQpfCrVqFmK7XMdi",
  "key27": "3wKebSwUYiKTn64VGZiFk7kHrg4EF5Hf5q8UzZ8fw4oKR7gUSD3Bij4jRgrBUe4xcjevWYyLQFHmFixfH3bKddnZ",
  "key28": "tGwVvEPXUz5MUxge1czCskygzbRgn89tAx197n4zEfx4xgSGupmy9Lb7veh8sCcrjSMYM4yLU6TGox2EeMWDcAm",
  "key29": "54gswb1cUySDNZHuEm6b8wpUBnftbTUZeLtmX3d6hquCVLiCFkxAcm5dTDUY2pdoXE6hv81jEfaQpySk1h7s9FmM",
  "key30": "3HhxhW8UQiPb3SVjN4XWJ31MemTWYWYQzpKeEZBFcJfFXHHhnkLNaPQhk58aBtFnrD1GLzhWMVkG5AmYrELayDP6",
  "key31": "y5BECtTmYgEJ7jrKSraqRibuufJT7g9QkYnhrRyG8ttCcx1LeyywKS9wdzSuKfzHJWD26M9B2AtuVynomLmdspR"
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
