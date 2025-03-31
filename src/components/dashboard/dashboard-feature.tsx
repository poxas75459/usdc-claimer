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
    "5dYhEgxqQGVjNQY2eEFNbx32AEfoGwtnqCvcQ6tNzNjaemFAirGvk5bkuSRvAEoUpwNJR8LnC28sEomYshs66FWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHZMKGRtyKXwwUNVwNdbdQFux4LsmJpxK2KNqkKHy2Ds8o4aoUGFkcjjtRr4LaagAqPGsisTjmQQfQtmdcxvD9F",
  "key1": "3GKZj5YZ3LmPGk6ktfbPeSPXdnAk6zSd4nHLwBm6aNa8Bj7J1adX42Fa6Xxff5hMDaEzFEcjVgUNa4Y6c9JKHj3h",
  "key2": "wrZtANe6Km7Kg94FHznRHeHipqxahwD1wBUWKEGwxtDE8dXmF9sU7N2i5BJ6JRuk2CK5P3KVRZKMdbbmV4URfz7",
  "key3": "2trhhu1bap41hUNvdyFHxq8QH9ZvXeySHJzq8dPt1a9yb3WJ5zk5AXxL9D1tEhG1CxcsYSPJF5dQhFBoS6Nfj1uz",
  "key4": "5KYe66ypeNxXBz4BkyhMiPNGxzZQwAMm3jofKJW5bGJ2hJZ12vfQCGY6CnNeezwztFUz4aXwTfysNoxuPVqCdEHt",
  "key5": "QrKPKRXLrc4RS9BymvjmS3CfjXpLTqCdkmLxzZsXEXM6BfyWFoQuKLixsJbhJtmhZFACD2espVWA3aKPaJLKpJP",
  "key6": "3142XFL6CoUnf6zcsWM5gJpq8kGB2qy4q6SCA3WnezzFjrhgxaWTuvcBv2FbW2odtdUj6vkYwRUcAqDFmoospvNE",
  "key7": "ZCHvD7UQ3dmyFQwHzRQ3ByW2oCaS5f9o5ZsHsFEriUTA1Z8qdiEAx1QUtFQYkzwZ5bQWTRDd629xP7HdgpYCmdx",
  "key8": "3eAFeBPaGhtZkcD9m67owThE9KR3Ef9pa86VGobhFiwAocQWxXQpUSvgfdhoG28WSRQExQVe928z9yozpfPZkTys",
  "key9": "2jVwoz7W6fppULJ4SjEkSgSYPzGyw5UjWXUW83VF7YMgrpM3eKbd1mWrfg4rZgbzu4rjDAnLbadGHmd8K5t4Vgpf",
  "key10": "51an4d6zvhqaxbvqAJNe6aUm4Xa4NujyQUbKTVCse5VSur9btdhVkUvd4zaFtaLh9WX8hS4scJo3ym98NXXVFSmN",
  "key11": "sT7agzp9XAH4JNcpxkwoWtKaz6H6BnKbgp1q5vMTWAWNJYo84CNQ5TtJ9G3dKpaiGmR7h83qbQdxgD9qUmgUXLX",
  "key12": "4hpsKfVNoZi2d4cD7rPYigiGGknz2BBhBCGobJmDcdRpf58cpgf8zUaFoNAZucaEfPcgv4jcvvkQK7CFtMQ3NLaN",
  "key13": "JKYneTBgRG5eZt6uJCQP4FikFw3kAdjLGG2prtWzG82esry6WUAX1rNB2ugMYg7NreVcaXZaJsAfLEmcya9oMLf",
  "key14": "4phe1sxGksLU1idyxUdS4FhUdUuJ9Khe94wT4mFFVhXi1UgHMRPPzaw1b4EMx9NjsqSVTLeVtJT447C28r3L9sD",
  "key15": "4UHFwhBFcNMMckBGT5mNKwo8rUJRwUKkbNpLtgjnCZX6ZvZknUaNEgwhuyY5DM3Z1G5cP38rULHJkwmfGaffuUgQ",
  "key16": "36mJVUauotn64vxYZ9ayCpPWfqrL8mPBnkbErN5d97RrLAM3Xeky33sUkSMK364TcpQ6LqRi3rQ8iVFjMVoCmrpM",
  "key17": "3txjLUTrBBsng7zL7zHPgnE2rGF7ZV7PcJFYxedTtnzgnNzwxbLqvy3ag1YL6APNhG3BfLfAZHCxXMQ3jKgsKyMA",
  "key18": "2ypkqi8u4ZNHraa1i6AhU5JSuovLfD3wLKXte7DwkpWpaA2K87CPi1JsHt43wDCoCZgPmpts37RWNPjhkG7EXvmF",
  "key19": "2WnGMv7sujTDC1hrDM4wvP839WcFnkszfTASCzLHE89EUU3XHRQ8vDdKihHNuxJe4KMvTwVMFERRPwE8tJrXgnSM",
  "key20": "272W1RR388rWQRXmZ2xNYJaitpAKfiwZRNGpJSAZaQg8xr4PYM9bBuL4zXLMjV46AmjwMSbuvqGWspaxqcnWK9mX",
  "key21": "2q4BAXn3qVimGqY88NV7dPqFtSCJGnALEZM8WziVUpgYp6JyqxAYB5iX77bXvmSPiTFE6JDA8FzJMoAPfbmUYKQB",
  "key22": "34NmjWVrEUTXHGGZ1KgoawbF1puRxwLNREv27gxMz28VXUjo1cVdxw8C514LZDaXxJXkjyqRJHvjAcxYBdSuhJPr",
  "key23": "2QtFVKwkfBcxsdYTgg3x74m6cWgyKk7Gcg4bKDWnBsuKBpoPHEDUqaRSji6U4XGJKr21niziejhLRP9dmfeSnszG",
  "key24": "4rrZqikYzuHSbWdoV6cjuTdJJoA3VJDFocnVmA1dyJ67yjMu9T214c6MVHUgGYXqDzSTx5zB9KQFgN3jZ6Qh1uS3",
  "key25": "4ACBvDDYMhQHdAK7wCXgPNT5vDim6aWj8k2ZerbZejYZKGwA6yrrT2gWpakXy8EHLdH6GqWfjPrBHumbRrXNWT5A",
  "key26": "5edW3XY195x9xGvE2rgvyuDgzcV6ZzCLyF1j9ujXqhLMiwFpdzAZvhYdxK742AB1CpUcdw3qGpsoJf82EyUWpugM",
  "key27": "3dMrKVuKjhQwrzaguoAScbJPZ2GBUBETKV8TriR6MFrVfk3Bmi3JXqhrkZ4kaLc3TKdXF2WsafTjeS18nwoJ1RAs",
  "key28": "4xsfgDRih1mfMyreVa4XJU789L1VYukTSr5YVgHBKsX3FrVsiUcZiHn9KreWfmZXW7rJJ5Pv6jaXLTatbW2UGPkt"
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
