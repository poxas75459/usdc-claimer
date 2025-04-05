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
    "2TzzTQhWk4avxwBHhPJykgABtQeVc6ebUmihdscUHSiajyLQpPLtNaM1Zz7HxJuVTBk18rsgAjraE9SFetWvTsLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2k5NSMwSUryVyaA4gS4fCmfcVjKsfc86xYoeB6q8iw8gUKfj9NUp2h4KEewxckz1sGn5CgWmMu32k1feNsTFG8",
  "key1": "8pPQ4deVqBhvTnC9Ex7WHx6yPVL3ZwRJy4YA5saUoeE4erGhxSr9t1K1hFcnKydpLPGJwoScpxHNBaiKPPnMZSG",
  "key2": "HfvBdWUEX3e2wK37HcGonZHtsgU85DhdLp6CNd7XQKEB8s3mXPkTP3esgYViVU9UFqZPqpaCKEVGbhcKeTYsJEj",
  "key3": "UzN48AdRqJkxju67Eae6UWQu5Xjgyk2EA5NU4ackkE6ZifV6u6TwgFo7NoHDdjecfZgYaDior8mzJW5wpbXzhQ1",
  "key4": "2oSaLeE4rA55HkmsirurJmZadi8GVVvjuZfR6ZEqi84u3eLiGBhFG26nWQVTgZtoD61C8bcTkcZDvxsNG881V6a5",
  "key5": "5Kf5ANBoimvZckaDqz1zxeYRQAJVFuB8WCgGZRQD2MiLzWraaU2yVxSQsCzvdn2iPBWdaekg1AWopKTc4KhPSUcH",
  "key6": "5udZPuYHqtpFw9oa6QRLvL1nvJErX6eGppZaDN9oEEfNLk88iMRLuztWNFG5znqZL5wmGeRyuJvrmXWrMefxmaPn",
  "key7": "4yvScXgwo5wpYtqZf8tcChXbP8v73pAHq1fDBDBoDa2uYJuuRrV1XgFJAAotgxdyjhtow3yq72wgrzZNTBTtzuTe",
  "key8": "496UJ6zSwuSCTcu4CHEJ6d7gE5Y6M4w19e54qriZUBvhj6SrhuUPFHE6nycEwLwopiwibNG1PM73Pw9FmkSFzYZt",
  "key9": "2E8gJ2jb7xkMuKhGNGwRzn4vkoH4dAkXsdJdayq1wsrViTVNBoSpDmZCTxQG3cnixTjmTADEuhjURGX67jgXqLAY",
  "key10": "RqiNcg7tQ6d8TSUAgSyXUfQkBnb3SJ14xrXfhtkgJeN2VsUeVEPixwWQgJHkxxq5bAVS8HNfu2Q2E1Wr7xEU3r6",
  "key11": "35sYLx8PDjgZC5SUKHyXvhCJEhScKFHVyC5XcyJFo4QQ1jH2SRqu6e85hb2ukmejc78aVxWu1dw8HCqhDg4gzTqd",
  "key12": "3JmX9ffpL1bSjAA5wrKwu7CFYX86kGAnEijMnGwYRuknAZqXaFpWh7P2X1X3yxkMBYwEMUpzhL3H9yK6PxTkacSR",
  "key13": "224iN5hnbkgNt7jK3NaDWnjkEEE1JnCdaYFeBnJrFAbWr8G4B48Vod6exjFeFVXrEi6DgeYqwbNSxGFQV8MzCtye",
  "key14": "5moUVKJavs7gNAb4PucN39tEvTrwep69YJZPgjRcgTrUEi5PMnkY6toBWH9ZE3jjbFr5UQKoc9zxc3bpnQNE7DXw",
  "key15": "78BbuyXHyBu78X7vCgucg6EvWLkfy1iQFq4X65DTka3nRWvP1a8dmpnncz8djwB8ZfSoibBjyhiSa3fiWGMrYh1",
  "key16": "2HGRKuUzQx3nnW7FTE6PPXwfpr2U8PyiS6CXBkaGxevMZHxJ7cKMdPvoN6ufNoRfiZutHZQK25W5MXs3PmLXQvcs",
  "key17": "2zFUeMBaZeniXPmi1E8d16cyBQUh5DxY3LzAqbzenoWGjF7TuCxupeQ2beYa6DfW5TUkVxMeYtKFkFqrUxwEYktc",
  "key18": "3pSjkRg1rBKRmJgdn6cqJWXxLcFvWsGo8YBDSzxCk5ZKZK7G8rDgbQCuGMUucXqy6LqYu9f21Q2ae4Fr9mdxxGzD",
  "key19": "2wbdp97BMpj5M9TxgLF8jtgXEEtvjGmSUYpkoMbz86TkpyrvKhsUYPZcDRCQbPkZxfvz5GEkSEkQ5bhTKVDWc84n",
  "key20": "4g7T6Bov3XgjwYQf5Px5FMKoNJnBMVZ3ZXUit37CXiPnxZCUVwknCaDCxvpBSVwyW8gztopJPrSKjbxuobCn9J2v",
  "key21": "45dFma25dQybubfDRq3yKDw1zd3PSLR85VTeeaF3KFpy5C9YT5pRRGL5J8fNCxGQ7sJUuKUDF8BYHBouf4rHsbun",
  "key22": "55E9Sj4JhBEE55PdLL42yJ5frHXHHqcYiHfap1cjYDq6uozwPr3AtBHCKThrWpLcYcJPVGU9KKkS2ueZYR18LTdX",
  "key23": "3A5P6XCuVdbbMorBE1VKR15vGjcj8fEjjZEiuJWAXdW394BnxJ3aLAokpwJzHRHPT8BZAZ5uw3trNo4JgvRhN27x",
  "key24": "5LaHru2Lm2Qqp27SSxEkGeBmFre91QBtcnsUUaGcGu2eeGmT9EW9kr8XR5XBPSx7RBnp6DYhybxFqD1D2nPn2PwW",
  "key25": "KXUbdwzwd3K6CNJxv73evXMdCpDGjrZUfoPGSbGmnhdxj8gjSrifAHWKWyFZC3n3UnenRbs6bFWYdj4xB1K7jZF",
  "key26": "XS28yxoSProh8E2ZQbb2HCrrqFMGp4vegG8B6HH5kAeaBJTFcnVvoZi56SweyBgGMYqBtfXTxGHEToePrYgpR38",
  "key27": "621gbkPSHJHqrTiVy1JZ5tdXVtnDkXRfoCfNFb9o1YVM4R4E4viADwKJmiSKuvC7c6jHy51kKT5AHUF6hjZ3Fyrw",
  "key28": "2K7C1WEm6Nvs1R342VSE5uHZMFQVWW9Jb3WSvck8xjPCpefZ1CnBaLyxB3HDpfCAsiNFu4YMPKjgnUkPBrWjVXEN",
  "key29": "XQ3zJdR9sioVZyZGvPuhuuryyycfyYUtWnx9S9W3DBbzjLpYXPiRDMokPMoBqCQ96W2Z9irHMRtRNBy26Tf9YMC",
  "key30": "3VF8LQmudQM6yTVxBHM1fGZcYbjf2uFQRKLHep1V56iRkfZoZN9WBzdTynKqePGpaR2bBZWXA3Z79HGRCFA4RRhV",
  "key31": "3ntNmWRR6T4nezUnQJe4AW8Yagst9H9HHD9xCom9t2195Wjx8H8FiF6bqiDRDfAYXTFjEpdzBdyJjBPbUPpzREeB"
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
