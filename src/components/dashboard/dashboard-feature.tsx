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
    "3RrSCFZHKBc43B1osRorTCFxLMmkXkod1GmgKtvsuSz8QGpeGXfaiqTCsbAD43THZxHbQUPbCTMwDDi6sU3JUAdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EY6sKd6MFx7nRt1nZkRqDWXRt1sqgjQb4GBRmrF5gyuY8K2QPm6321PH6RwQLLHc8SvGyXMuuL4J2XuLe9dfEZ",
  "key1": "2F4eLRrAQxayfRtDYbgbC6dmSyPifBE529hq3yG2rrceWimTVYtX12NLZj4LGTT3vod96v6Fg6Y4SDinht82GzH6",
  "key2": "3J87PB3ogXLwMRqtqtZ8aepUggP6ELcYbytJLi9DGACo2SQidPsRHiByDJnv9HjdppzDtgqcFurRaJQsehbNAafY",
  "key3": "DWpNH1pbPYQyDU9xiri7eugo6wW3fpSnZS1YrjJ2VGraX3USFheUuiMaYzxeTrQbnrqLtM4v3njARpE2xV56b9J",
  "key4": "3xZ1kFibjP4Xt7JQMgtQoi9x6hDkJErNW5crNwXPJg2QmezVSiuxMRWhuooffEBPH4woYZxgUxT5qTCPUuEc4aKs",
  "key5": "R2T63Hi4u6noMNozLfB7knqhmrFb9Vbz9FyLBpJqvZjGm4r4yMXS7jsraVhmezHcTUm1aWPN4exbgHeihhm4EmE",
  "key6": "4urzXFTzzKT6rLkwDv8b9ivPFp5MfvE7tkUFm4YiYNbK88mtJ7nqtRP8iwqSJMXGaMjbWsCwSBs6tv2TK6pM6Mib",
  "key7": "37QCh3PUNfoprZYQfwytXuWS61uwUe1JnBxpBaD27hyai6pKJVKXnLLtpofshD4n2qFznATBF95Qn3gVdiurtsu9",
  "key8": "577JLR9GFMbEmaXExhVJA7BUdepjnaijgBC9ZzYonixgZg6jupjroM8N8HdQvAmVA9Rpi7UhgDxE19YjWZWxnbne",
  "key9": "4CxR9RCteEQsnd1QXHAifq73V1yvsv5BNUUMogJJBYjRQzqewAKcEdY2aJL2a2RVdXTtrkqKSVUkeQBRK7WM2FSD",
  "key10": "d8njMVwV3uzhWYq5zaGwYQG2J9hLtnZfbokTGVx6snd2dkuGx6Uuqjsgx6yXoA5R7nCkoSreZeDmUPHV6ViUYsi",
  "key11": "4nRfPEZuVZqd4poz2QzCeiCKKq4jHLkBcj1kwJckLsKVd1EGFxoHxV36eohpHDfn6iXNnv8i5rANYLAtTULuqkt6",
  "key12": "un5i9XkYrGsq5o9xFk4T74Lm1Atf7AmNJjkgb5TzVQZBHrPZNPQVy2pR3ZFQVzJFDZPrBqSEQSBwhDS12hZTrFe",
  "key13": "4rsQugPuUUMBoxMTdZ722wJXm7Efn7YctQA5M7M73hn2QjBjWZrHhQPnqoF9Yqwy4rM5Rt4syP5LqZADFeiAmFb3",
  "key14": "2PGoafgJVvu5iRFrVV4UuJ1cqR4o5RrN3RMb5gLaQe6zHkzwSEJzuLsCZLevzAwR5h5aAnYzbN6ESCxvyPUK7rVB",
  "key15": "5HjQ3aHwYLtTPsm2Wfg2ZtSkMLhFHx4ZmGtiZ7L16HBRwjfB5RoRAEJ6s7iiXNFN1uaiT3ydoMyDGCYsXjcwxAjg",
  "key16": "5VAWr9QnGZaEXxfb6v3vQsvS6XDj2XGsYdSbdB3WzmD3YD1P5DmSjAaYYg4XQfbvP4XMXZ6h5bB5msa6hJg99hYM",
  "key17": "orBGPQrvAhSd8MFiFaAQsQmj7F8MJKMffCxjiWaiyNJ5en1c6RzAYfXkTSiWpU9PQxQyb72qRRsGTgEBt1UhvDv",
  "key18": "45P79EZ4tKkmD7sihg6yx5XeoRLiDpPScguUopMicdP2tE4mXXnwNNgkq7dPmFw4c8zeaGAEb5u5k4tJZZGmcZYe",
  "key19": "2TdCPtJQ93X1yMFUQWtSyFxFkS8HTccCPZJdb1HAugvYJuKZNmdNxpFQGCF9v4iWf8fmn3EX1ZnQhFzKU3am3JJB",
  "key20": "5nuir3tKaUrwPwbFpWeTBPeo1EZ7GzxjpFCAzLT3FCvscFCMHmdC6J8Vk6RZTmuQFzXLokCRq1o14Bu2dAUpaCmS",
  "key21": "35bnZCBuFD5xVhYKKuidrEoasjUtKTH4ui6H3QKDddsMvCS7vwiA4vjbFvafwGTqzXZoYDHakCGo5GHVVUyij8Zw",
  "key22": "4FvqXaijVCH5fSi394HWe3KuaoAXrk5Q6cprfTayrScF3vmidNAf9bGNpQCnUWHhsy3t4gTJzz9SCRLRkb4KP46M",
  "key23": "2gvHYEszpUGXTYUvRnQvyNf7dQfEkc9JYsW5hdWSPra5WmmivaceFynHUeVGzV61NfXmXAVKDRG9ATtFvrQgovhC",
  "key24": "64tqZndnr9dJssc9vMgZyZzygyCdjGKdRqx9bUkab65wuxbow9WEj1U14XFXWV3qvyuNiyCKi7s2KnH5LJswvRXJ",
  "key25": "57VWmiGtSjFm1jmyjdGHZpybBCQpxAtoa5QN9tw5uUiYKHSRYcwtMP3TKYbVbdT7UTm7HYwifoKh4uQpKJ8ji5gB",
  "key26": "5US16bWtfZJdMpjt3PBuMfnwFLovaWgD2XgBj2S54gpdYBrFNqg8fu5v7gCb76AwpCXFNGc3iEBX3ixSBZv2ccRP",
  "key27": "2nkv7NfFyEnEQh8TtLauRKVvcxzHjixgomYGz8h3VCUEgUJg3dMWBrSefYwjPdRCFkELuNwPZnwSpWSMuPxTvtbj",
  "key28": "4K6k7qukLYXvZQekjbFD6SVTcboUs8wEj4ARjMEuvrVNTm1tyKc79GrsyNUfwrdpWKCwQMBVFyj6nnv7rcMQyXYk",
  "key29": "57feWeDmuzRiiNnMxFuS9NZNCgfcuratWLriHnoXmZ5w8sB2QrH2FQDqC62c839p9WwPgnkcg5DEv3fasYXq7BUL"
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
