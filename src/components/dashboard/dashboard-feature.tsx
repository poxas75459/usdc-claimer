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
    "5iHy8qD2Du2NYBmDMmu4CdhvspC2rQf5mJf9nTvwFzT7oyvb8PsVYWbKUbEX9a4dbUUX2rDuLhkPytQnc6mJNxDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJLat91AyeMZRJNGNnR3G6fJRavkmje7N3ViG2cCUfEbykrF6kGHnhDYi8H8pdcbktk43TvaZk6APdRfbNZ6X9e",
  "key1": "3ijQzwGLxHTsFRn7zRajTveULDvYDe9waFma7dJ84XALjJ5WPnwboAiudv6RvQkY9i9y5JvW165yVZTWp6Z1FxDC",
  "key2": "33YkuY4WGCddXCjMKDJgZCbvSHAyceDaYicDvwmoAsxP9gBYQupjiVAxEStej2VktncAQsqFuBXwMQGg3gnLfaCd",
  "key3": "JmwBvhKST2uZKsnGPw3w6o65hd8eHXTT1euyihnQmTc7QZLWZNv5pg7KerqhHcyMbqeiPetGpKS2KCgntM3HmUL",
  "key4": "5RS42DSQRHZYjSPByHJssdZoyJAn7eWEAdwb9NXE1RQJQ1GNj8ok54hPzTjzdK1mKEeGsHSxh2yAJ4xUPjrDzxkT",
  "key5": "5z92NBjBFjVwjdZyPWsXxkd8FkpJ6ghgxy5X2UFdcCMMgcFvmwu1TcdxD2cyq3YqibFGwmEytHrUhPeLWZbavezX",
  "key6": "3cuFjp7yEeyxh8qCe7Q7UXJFNYdbJVHaMeueH9gxScLeE3hW3zvepWmf5eM82oaGZ9iPXMHyGdYeJtawo43fo7uj",
  "key7": "4XuSaZzKBBDm7T2aEVhUeHKpos3GNKxLkFZCqMHmLLV8J6wXwifCjwXfNkUE7KAc8D8dyMyhhoAhACycH8Fn5ZAG",
  "key8": "3jYS2KyEf3thUJrh8YHQJLP48edrrCpbFjx36Fig6xHS7zJV23dZckMyw3pnpcw1eFJtbw8nE3u9MBkF1U5sdNpL",
  "key9": "4BUom6ZTY8ohRDCn16km62TRhWMDvaaJfsjHNzVqhsXZKCbXkkgtvCegYhY5esbABVWK4nH9kRdwDbEfQwa5Fy7q",
  "key10": "5DFkZJp4EucRtWF4B59EKaDjYXg69bzgfWaF1uqyfH1SoJHjv2xLVDE68PrNmNnzUwcLteJFnN7htQoMhuyGjS4e",
  "key11": "32AMys68qE7b2D7cQhpNp6kawSq1zpKoFGf6AaRPRaBcxqB4zVSoQtiQUMkf4RKpCwtw1WUhsZsip9Koi9W56nRa",
  "key12": "23wQWx7qGSAfVUJ5DSYzAjKwp3gucpamwdPyCBqsUFZP1RXurc5ntwe8qoG2Q9hmjpuCJd4XZd4x1cuPMtPtLb8V",
  "key13": "4TAK7vjhtce5JiY8FiqVtM7xb2CeT7GQDkpyjj3KkWWcjtWD614Zh3u5CfcpkUfUQo9kGjJtnrKMfjAkX3veiB9F",
  "key14": "3mJdeGTwFvyTeH1NiFbvbsPpmrDP7EAKJHh8DEXgAArEKdoVjdwYCHn7op4SQdvkFQtuRuUzaAw6rGDQY3eC3fHR",
  "key15": "33xQsNvr2DfwKaTHGQUpFB2vp5B3uHkwAp2Js5TMXxsQsiiAJ7nbywwekJ28mfLVDXi5qEQoeHHkAk454UoeNLSN",
  "key16": "2rFpnBhoy9axmiguC7QQ7j5nkvsrHjiKgVbY5XY3i9fNKN9CthxqxkD5k6eWbpsDFzhNUGJsTypS9Nx5azKVuN3o",
  "key17": "yesTg1n2LdNfrjdEZsP2cqKWLdYkDZ2XkRvk1UqwPRytkSuUYEXPcjZY5tHQCBPe1qcYjUcQCwnk2TqYPxz8BWo",
  "key18": "24E48w8NnGbFAuoP6NUYYyuaLTsPFd6HCVF23zFb5DhnSSSRBDq8ZjXrKtGDL6u6X2p1BL9UrN33kYPFhj6wDS2F",
  "key19": "3LEfn6qPg9vE4T32R7iKJzLDXcnGpGvep83ThzTSE9CDQbRPFpBwzpFRyNRfM2QSGejk5zjdBQKmva2TQERaYtLf",
  "key20": "58j7dqxv7MuMiLtMftaZ1PxR9WebjDEiYFx6FujEkv4H6SKbsjZMAEVV8v86tuSxjM42zad9XNbTynhor4gWt4AJ",
  "key21": "qBBmYt98CWZ68FbfeYcgVqat4SmWHpw5dPJNrHBXeRNuiTRPyURTNiX47bDn54VNa4oGgYKGZLEDfqVjgUE8f6d",
  "key22": "28noGeSEWcTCQbByqqeHQMBQni3d2D6FxCmSiMbk3VtQcY5D8aDkFLztpzhWmoRrUBHkMbYkvUgqtLDHxMCKvozo",
  "key23": "2izaPr6PKQKsRa1FKK38qEQnSRg4CWQQgAJTKTnM34gEEMDm35UgudomCqAbGGTAeGD3V1UknD36U8PkzDEHt6vz",
  "key24": "2PosZKkkU8T6XBMLrDep1JtYnE66GU1uxf7UmSpDSz7ukuLedXmaGsuJztLrJYwAmHK1oE5ySrKPcpMP1i1Knu9Q"
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
