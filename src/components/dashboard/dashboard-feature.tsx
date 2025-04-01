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
    "4to6vNdAoBsVZLzd4hd1r1jQ5rtyF3AHTP32RLj9effqhQovZuGGiuF3ZSVRJPstGPJqHXEd4DV8mqp55HbxPExX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R149XzCNjs82V4inQU8pUad7n15rM3toM37b8DqBkQbQny91wrpNBgLb7WrD7uebuJqPTQKoSXgN1UPiBfh9xNc",
  "key1": "ypdyezJeunxzxVuLxJyxsu3sjTZC8CJAw639pTrWxyzNif8rQiJc9GCHGDGWPffeCMYiAEFCVD21Qtx1WhePWfN",
  "key2": "GrG83wNLYuYtvjh79w1njAxUJxk8vsbbRX5EEk489GtZbWjQMhPnwjvXHZagfYk2ee7Q173fppyedmCyqhrLH9K",
  "key3": "4DanS6cYF4Q89bS7gHdJpeWduGU5GsX1YPv9PabhNf36yQeqdw35U5DkdKtxCLPxs1mbow7m8Q52porU4EbwBdjQ",
  "key4": "45GbGeYaKaA865xZ1zFjcnzK9fqhkaLd4nmPrj6cei7QYdFuG7KBYKWcMymW6pCCh17x9HjbUkgPYZot9CweaFZD",
  "key5": "2HxHhvt5jHeVnhyjKxWu65zuK5sZTeFp1zHwRj6nUAYHgBus4DqkXMMYSueqMKMbDQYEiymXG98Ze3z5yK9SnKvo",
  "key6": "27FssJXRWz7FkcKEujriNvD27iRPQeA5adDYPe8BnMnK3w5SfYUmtP6cosfknz9iXaSJVBwCN8FbL7j65Hi4UWuC",
  "key7": "2G5HfBnEMAHDp4Xvzxi6pnLfG9R1u5PfupLZEJ593uWYSFZRN9gPJ2E7SMbPjpCAkVEJMeozHSjk6hMLM79uskfs",
  "key8": "3a5steMkA8JVrvZ3duibSLTYevpQYmgSjX4TFQuSYKYKCmgNRxUP4wvcAtyFjshS1AUJFMHsxuwbSeA3ZpSKbEAr",
  "key9": "2otcYDYfq1TRQjJytJn9XLrF3ECvSTw27eFNx6icEBTSFY18jB47fGL2sc9U7fZrB7R9siSgbbcCnt6JCNzfcqXX",
  "key10": "4tMkacEFczmjgcW2wdyZGP1Pae6pg5Po12XP6fppdSXvPvpoggEHD1fhmZVJYqexuarqcvq8xmWgTifKno1EhTqS",
  "key11": "3tZycrhEBcTr48fVoq59uhhFaM9fe1mH8DkyFb5D5j3S2RU3Z3J1NbiP8fW81m2eDVYbzLLUTU8der9Vq3p29Rej",
  "key12": "3tjhEFzpWszLra4D6dZzcFQtdpHQ5h8X6bw326mQunm5xsGe211f1iKKSUvhYx8ANK2zKJCbZgUfWSCY9wdmKEo",
  "key13": "47JKxZHLSY8eX2hihaom6BXh7dMr54VgUnhPa8hzWkJYFM5NnKeLFVq6qifPXkWgXUXcoMKBEwDF3pQZwmwpb7c9",
  "key14": "3uaHr4Cnxvt2bxTxSs9s9cam4Qi7w9ccuNTdqV7bYtVZbHPAbEa9HfMRBxk9ud9JYQZ1woi7qNcsZLrGQZZdhWJa",
  "key15": "EfFFjZpa4xBuUCxJMcDv8yoDX3qKAMaRdwREiHhRAEP9Gx8tyCBSNeTRs9bYtTqbcwnCWvgLbWQeqEYUvtv4JHQ",
  "key16": "473HMFG97gXmyfDr8tULLrNUsKt65AE3a2PCKB7JN6eMr3LPHAW9s61WUifxPquPr8yydgQ8aMVd2kYhVpgt9Mpb",
  "key17": "2uNyexGrB7qEyoCzQh1LHX69Yr9hHcYRhbYf9bNCVze1mLfWGVpmmeSHGf2Nw2y2HjXbavpru3vZ8TvaFG7zBzBi",
  "key18": "2QKY1J3fCSSKVxmeaFss6sPiLbaPn4aiJkq6LGofYSFue2QuPkeT8mChnrDrrG2KhUD8CGNVJEs74aH871SAT2eQ",
  "key19": "3HzS6N2UHcrDzjgZzjkdKXZAYpPBzot91wpS3cZttrE9vENQ9BdDkxQCBBUh77YYSCWtpTboK4ouPiHMZFzoECuG",
  "key20": "cUSMxmFPMC8PPaujPpMjgEW13xSx7HQZkmARTzcmVP8L4yrxrwwfaW9hH4f6aV79PVZKGsPDjo5GUrcgTHjY3Uo",
  "key21": "HYcfnzXjT2MWNScSDAc164rbAehwL2a5eWpkPVZdcEXpmTxqGTh3qDJLB5qBhT19kbkYZsecZbuaYN4YFGznGQi",
  "key22": "44RFjn5TPX3kjHkkFhVyh2fpaufRd4HC39XLQhdmEZooM8VFi3pwu5DMddb2s6UwS2A6fzfDz1N8pz5o3bJ3K676",
  "key23": "5sNjrggvDEdp191AM98s42ttEb6WZZtsCBgwgYpMNd1XPRpxrYfY6keH2oBjncq9FWusE63WHf8cY1dN27YnbAwe",
  "key24": "2UYdncmE5jT2CTmrSe9mkZJkpjwtwTZfY8AZR2YSam3JMk4L6xCQ4zYiSt5bPEHzm51UivHDLZu7dMh4upQm6PEo",
  "key25": "3uxpiipSEL5GWiok6Vg6rcqyCLgdFKd4NuNBATYN7JdkLiYa9WvtZDL4Kwh1KNs9wn3PsfUaYYhK5qK1JyavPzKK",
  "key26": "4R8iQ9zvvbGM1htNS91qtiPsyhFPoRqtgJjZZ1KbHdvPr5okoGh6wcV5JL8kQaRYafWUrLzfCeRVqa4oipatVmr5",
  "key27": "39vZyTy4vBk9GinsRTymyzJvcEaq4SSUrHrw5eRxfNmqmL7aLwaHhYTmLhkA5ifDfagVfusGLDx1BcgHuB2We3Dp",
  "key28": "2eMyWp8MQ7ES25oYyErUXrzb6xYkvikmM9m3ofE2TNV9r57uUNeRm9VoMwjhRQLZ61f9wRZptq3UfoQnHTUzbrDE",
  "key29": "4QrByXWqNfBVU8N1uVTPxuVjKdwSJpqSc9ruxqwWSxFCToKYcGeYR5juUejNGwyfAA2mZxFBvrDPWRuxXJXE8UW5",
  "key30": "4NNNt8swUAmx3b421pkTrqo8hNkvTXdqH9bYXykvTwFcihzMpHHADks932ZmN69heGF8ZAd8nsDxjhJSRrZbyJ6d"
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
