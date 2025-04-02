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
    "3bYQNFUR2ZmAufgE5f2JkwhoLMy4M7DY9yxRUvJzNv2ohhPcJPeFCa3PBE1wJpKPWAc7j9APFq45nfQS41wKRr5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqp3Ei5UEPf3Z6QAsuuc94eZzvHKc23rUNvJzcVY9k1LnEgKGADkCfmJC7MRaL1xNUh2Fa1gqjcqrjhG18Sb117",
  "key1": "3hZvmX6HweoHxUzgQ5Ru63B75EvJCusjyECYm1g1SLELJR9BCU4DEi1A3VLE6fDNyCZyUfPDEKgfKiZ32L4duvYs",
  "key2": "3a4Rrw5kHfhdujTt2TYghQ8Vuvq8KUUR4vEmicoLfaT8SvfCjNYkLxdGpnFwP5QJXSKC2YhvbofvWvZ7sGDU2P4k",
  "key3": "3VWtjmR4mw9ABpg2QQBoVP9tFwa1zWy5xRNXEKgdsYWND6XeLqonnP9mJMPM3UY25QxQFdwVjHKSojKUnGtnBdJy",
  "key4": "4UA2AqsoV2CfJGaCxKNbaRxXBhVceZNqcMaZUeaKeLerVezjSGYWeS2vrotgbNr3KEbgc7V7Ai6MM4YnwQDCRegH",
  "key5": "64upkKZETBTvnW5CXFpz8VuuHMhmZhEzUcqXDnTh7T9FVLDt7GoGt9JomQoKVUrMb24qXbfXrR5Th2Lu2gs56Lou",
  "key6": "55kYKUfgsqz9cM6iWvA9jvJwQBA4wfd1wQa6shVuj36qNz9P8GTnf6xWcSKKPjoLpcuHXNVanTAG11vcBK3BcMyu",
  "key7": "4s2D421grMLWf8pQsgXxmUCFWxgBB9Sd7QCniCqc7WHmS5NMJb6bCPQYuuQeJJqK6DhJcEPKG7AhnxUYyaJS5wsa",
  "key8": "2bPbM1CTgDeLnkJ743Gew7wZ1wjEAtBBWYUejKVNW6twr5B3shztBxygG8Shcx6E9GB5gG21Ep9vrZYWnwqqRsdU",
  "key9": "2FzaukVoEMDCMxDxKykmDy14bQS27ju4stcnqeq3wpzT8tANGtagsMGcLSYGSMWmeGcscXnNU2bYBhqQShhdQwS5",
  "key10": "5P1MLw8sDmypzhVntmmxxZTskiGdG2EWdjvCixaBYQNcYxnDSA5BovmmDqr6pbjiiDU8k6k5mA2Zqhg1GT1xRvvh",
  "key11": "41AiGM1gcqKKMh2F6nwRpNBH4BburEckWrUg6BWBxeMhbaZHxkd8hSjyqVzo4iMmDykf2VMf8t47p79k9LKF4fgb",
  "key12": "2P1mCzztwWAZSuFjTyMHRSjVQX4t52JE5JYRCeop2UFqX6bRUtRPDreSbtrpAwE8A8GuMirc6TV5Q1qy3TeoZfth",
  "key13": "2ffGvi4fVEfX2nUpW2AZJKpUXMEgmUd76zjorwzgfqP3b1kTGbiFk1Lw87wgxxJBpx2QeUhExr2sLpNP9y9bNB7G",
  "key14": "1BhPXfdR4U2idvpoESpY1xP7iojaLmPevwwJeL3KDeUtaDUB6GqqkfRyqdqQ4yF94HsVf3YyGYnvLAfVDyKEMyx",
  "key15": "56PsbrVwQ6bf6ktGgurY7v4bszrpHrpBRPVGqJrKFdyQCcwSg7uLnPh7A4wa3E5Lv7b4Ke2Bbbkq1b5dVKfZXPmR",
  "key16": "5EBmBZiMZrdrq7zoK18PhJ14dg5mNR3FqqLrTBrQheq6Vt1AzRT55UdHFMzfksqHAkkgXG1i58AXVAqAh9GwgLwu",
  "key17": "2Vh1dbvsgckkmNVH8R9ue2e9z4Fe1mdj5PTUSnsT7CXYyhVJuqYnNTTGTkoRvknZnfiopwjSNuBi5eUS7mLaoa3M",
  "key18": "t2Zc4SPCzYSkFdzJDUvKQBRkv48UV1gP2xmy17mTcVyzsig1TUXX4jEpyL5LqgJrY8HTkGZ1sPYPqsoh4JS86jb",
  "key19": "dHQ1NYYnvWcMMvNZtfLnXLp2vd8Ub6XWySpjbZCS5hHQZ8R8ZiEqgG1jMhhxa4YbPCQu8DYN55axoNGmSfwBK7J",
  "key20": "3w3ZTNTE7RxmQ7Z75BwTMAaqzQB27if82JDRf4NB1yGiFhHr9eQBCNgwK6XagbXghDn5S12YWN8jt8wXDPphjbM4",
  "key21": "2bRNWBNvY59hATNnZ6ejJ1idMkdD5VNhu1TCuqPwDJuBuY3fu8cokZGZ4mQS5H3i6m1Wyy7E2JYhAkz4tYebV1vT",
  "key22": "RRzc6qde6pFNrcSS3YFyoiWnRkPho8sGnrXn944dX2YnB56RzNS8vB566C11vXYW3SMpBJdjV7TcxMsCy9PsK2B",
  "key23": "2Cu1HMnEoNrruS6vqV1E7H6gnyc4FUxgdC3Q3CZ9rpSUz9Mnh23Da3iM1itniJS3F34hHKBb8EQ7Ngt47psbRLQ5",
  "key24": "3oD1W9KAciwGULyTkGwMa1pd2MFxhycF4eEQFzNKePLk63Zea2nCEmTCDDPxpwiVkqBFUBvyrhf6VgEnVZdDsVP6",
  "key25": "3nusPUvWNbmBSRZfoFnJyUJTtsPumrsehNxuX5AXS9Zzpwf5UELG4pMmkc5HaBQkQFB4YnJULEPGnXeeEcJ2pGJ7",
  "key26": "5izuynWQXLTgJgnnEjbJfAwBx7EwKVd8L78wnanJLigDrpQwd995nofhoTDD6SxpqgKVVGciddzbqWrBzsdiAjmf",
  "key27": "5JWhYRSf8xozezdWcuJ85nWQjvmoZjaTXiuFhZ4X5bcLt7GM5PzwKdJVJ7mcE1P3XSbiusuxn2SW3HoZTcP5r4gF",
  "key28": "3ByVGiC7vuyfdQTxZgvdNypLHVbCYsWbz1QV3j1a8GmiJcmyzZxDxk2KBF6UznEQfpxtL4jrugE9gsdhA9waskcU",
  "key29": "2cGNaqY21LmX34HWxKMBqE8SzozBsGSXAcZMWDnM4pgXNT1soUe6xBvvjKZgP3EAae9P92DiRypN7Z7h731R6hB9",
  "key30": "Tpep7h4jFcXYBNAebHQtWisy1fShkSRbLp4qns3jqv6SiFKcGjBvQKLUtyvipwAe36gwrChUTx9QZw1xNeBVEkt",
  "key31": "3uisFELPW1hDyV5pqF9UUo34CFHwAhurMEnkmoriSwdoozXa9kQouaYHmd5c4HmKbzocMvcP8pSmqYYLP3BSWcbJ"
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
