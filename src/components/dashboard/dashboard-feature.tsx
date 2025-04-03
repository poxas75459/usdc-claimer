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
    "2ozyrKYFidjRWLqRnixeWQci1Cbtj583znKKgXHifbwK3iWJX4wNQ1yB88afXfEJfdPzemTXqp7XKpk1ebKaFiJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kycgGd98TSuUDzem3JXz3BzWdC1m2TQy46gatZQHKgcVSqhahGDa5A7YVjFgrsFt6dUdoGiyymTLMjWmZ3uS3Qo",
  "key1": "2f4a67gqA1BdubkXP8UfTtsZ48KP2YhcqV9M2BqcE1siJAxB1ZSKZjemcVYcNxUp6xydwoj4X5mkGdy9FNStL3AH",
  "key2": "w5MmW4aHYnKfmgpmMxyrwJTKq7hyu95jEgkaTKBYZhknAunuM6rMdr3UkMQee9SQRaCPm6fVwnZjLxXaiWfcT2u",
  "key3": "Q7jVk3VLQsJWno2gacVB94R3SC82XnmKi45NqXbyp1C27K8coxRy9sF9Avb9BXJVftHgufX8gqAfTZr3U677KX7",
  "key4": "3Z3egCgWY26mzSTN51UTdt6aWuKZLiAyeWJKg9fDdQCBDAj7qZ4BmgG3SfC18FPPqCpbPkyAojiJAwrc6qH5bwRh",
  "key5": "5nhRNbFF2YqypyWdU6Z4qT6iH9Z2CQkSwqMGcXGgxTA14tto6SVm15eSCCYPqU5nPuw14EiqR5uysxiMyjWz9Fuh",
  "key6": "4DJuH6WvGBZpRJZZ6W9KpZcE9iyqbM5CY5tXYieLXVT6p11Bq6H62ZnNS2NdkRHoGgFNdaTrBBKzfGZdQFWA3Es",
  "key7": "2hT1UB2U8iy9upqoDU1mjFALgXuoJdSJG267dFhpbVfdzMGzZ9FzxzSdS72NUDZDSmcFgEB8zNrN5UTXe5Dpucma",
  "key8": "4HEmDpAedvumzko2DsyCbtrwEGSgjiJDszFUnUwaXncUU1SuEScs9Pj7z4MD66eCbj3w6RnzkZkXbKrM4Rf65Zie",
  "key9": "4kqhbGpMQfS64nT1bNXnhpBztnjhBzP5f5F9XiqucXN6NMR7r9ByZxxZtzgMZ3NCYLzsMZ9vw48miX2Eo9FjZ956",
  "key10": "JVQt7Yazm3vcXpzLTDsCFAH2wZsG6LvT3udq9o3hVLG5bVd2EJKH6NKDAAqemB2Nc511N5oVGsuoMcVKpB42DGa",
  "key11": "2RyGTYtVv1aNBnumTQRgWshQmjyPDurDrHi5CRrK8H7L9zuqfwHR4SRdbPKgex5snAYft6rfQeNxH4kHccjWpT2k",
  "key12": "5CpjBHXTSYYYWuiXF5ZwX1eLRVMxBdTrYFnxpBv4iUXodq7v4VojL9kThmGGnfLXbYHbKsFTutxYDvts9WZMTHf9",
  "key13": "3VMfXa3gQ14m7kxH8M93E1ovmbQa27FgW2uQy5Wqx8c6bzy8FnPgbhcFk3aK2mj5zTkVEhQ6kMTAZ6CbmaHoJ7k9",
  "key14": "5qSqFRzdaZMo6Lodq67vVNgsyCGFhX16rrhEHYDz1CLP6ADeqkzDXQ9tAnUW9EFNUsFqcUXDSwJHyQYASr1HftnP",
  "key15": "57qy5RVfZgW8NtnwCXJmLpUe4JMixeNyK6cF5xVfaKuuqiXm3kSmjF6wCA2zvjT45iSY83wCJKdSe7CgjV6rkj2F",
  "key16": "bakobkvsARSYsnv6bGUzzmUsE3cU2yo4ESL1br7aQaCLhtYQo5Sbxy8B8dZvhnjcy2YTuRG2aRRmoAhwALB1SdC",
  "key17": "5cYdmTGy36KMiQm1fph5bEGmGPozqfkww2pz2uhvbzSApCCnN3MTtSn1vPn3P4VxupxmaeLB2aCo8CzuMTJ3govZ",
  "key18": "bfQXSfM9PhHAXZbxGYz9fx9MYVzsDmTFNqXd55UH9stTgfhoQng16dQ35fNSXMzCkQh97twbd95Y4nonwvNMo91",
  "key19": "3tavseqdfVaqzSMq7LgaiJ4QWURAtV6F4BUp8KH9uwYZfuy8JM815Cd8WLSCvt8YrCmRLGM65iG5PSw69broAVFx",
  "key20": "Ayt9P6TPHyPDjfJUtxXU48JzeMWK8suqCyrbv3MJ7Wj2Hk21bBY7uXiAJU7iaFSVHkb5XWHD2bNw5Twi1CmgnL8",
  "key21": "5JBPTmXWSfpUXwWH75YeLSpuEY4McDhnCQ9W81JQiHK5Wk79TAWRLjFbA18B27Uhd4Xm61v6zYostBiXsT13QSkn",
  "key22": "3AdRGBGx5bTipSfBsr6VZVmBehd7hGexqxodRDQVgoxdnwtjqP9E6wEZ5DbRfTjv5qcYS2od2jR1KRjFuhHJEmS3",
  "key23": "2AE6WWB5RQkZ3xqPH6kockGbyYU6fJqKgZYEdCajMvkJbbwgKK8wAkXgHbjzWcoUybDZjaWp6YzyNJK4XnADF8rc",
  "key24": "2N1FVwb6YVzp7Qrhw3wiFGnoWnTqVxQhMcZ9CHQ7iR4BHdNcmNvWRqVYCouBEp87byfWBLxMiCa7nrEgUff9N3yj"
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
