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
    "2upumfh3A7boPbNzdpGz5qHtL2VqtMrpcuz2owV7EYRTsNqWdQj4T5zb6frYjyWp7KJoCxSYdLtwDXTxSNgBPcKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QXo9H38HCaCaLkanCHT2gC1kE9nuHhX7vDq5Lo99FeGsgfR7aJBbeRsZrMktddVQHjvNEwof3RcoZgsnRyBeMG",
  "key1": "4yTRFi6xnC2EvoDYzHewAzPia4JtSBTCmzrgiJ93HbLL4qvhVCpdZ9yn4yz53r5b9Cv3zdLs4GGSHLu6Hm44XEj4",
  "key2": "36Kk9jWC1LCA2DFU8Q9XVphyUtYNXBCpyB7P7u8L5ytsnUwSWUj4Td2KLcSc3JEexzzhsg9txxNW5cMpwP98Ljgd",
  "key3": "24XGa7kQsZF3PY5kiXS23w8GKorqVqn78ckhpYPjSSrB8fND2MVE2vcQ8RGwskQgse9kpgURFMh2ZSNzEfyW8GQg",
  "key4": "JXVZYWSaWzKgC12se35eYFUNSxcMBu5KNReVmL8ndrsVGuPbpCcgzkExLTHsP2FDciLvzXNYGF6eaeRj8roZwWv",
  "key5": "469iVSr6cCWN7cjidwU2DY2GC6bSd4GygKXPR7p8Aqfet5QQQnXSZuJgSYTQQQAJLgAyetKS86DqmGkSTwkATb8P",
  "key6": "4iaRFNiTJybTuyGVDMwGknRNzCyteVmAkbKm4kQ3rD57DSGAwLS2ASw1ETXuFyncQScA3TFYcbcBm16wcYN2mccu",
  "key7": "Y14zeeVB6op62Dngo7BPksYgwQj8A9muKB8RBMH85y6RuWLSBb1gXMF82AFSW16mJ7K9wMnnSnMcDgqVJGuFwnS",
  "key8": "2hjUuZP1duLuwbNqmmumKUfv69E45cQLxXJCQfqF2qCu7Z3kHciXKvHPKRekHQsHj2Y4ZartLfdcpnv6NFx3jmtH",
  "key9": "3irY26shmjHEQKkLicM6rYEWT4dBmDxHPDNyr1YwfskcDqXMeEJ9A2Z7BQnMze7dz28TMrhNRZ53HiuqLGYSM3AY",
  "key10": "5gVuTJeWZ2xnqqq3VQ93r2bbFhQ53CTDyiGJcy6AJcric26ZeTCb7GbfHFDwV9m4Q7vqKwNmZEKyxux2hU8xSgt9",
  "key11": "8AL3DAPZ4EgUEcjqic8RTGjFkChrn5QELm92wqD8mMeWoDep5a6QQTrGqKjAkfavbzE3pvy2quQn8RKpHLeyUNH",
  "key12": "D4vp5g3kNDKH61ZxgQ6j27HjZrkwd7LijZxxsbHVMVYhdUiNxEJzyusBeZ4r6ELekn3b6cEEbUSoFCfvqk95EQj",
  "key13": "3J4yFpZgZA3emozVEreKvnfnRa2dJFtCYKCWkg3fNwy4idbstsbvPnEf8kTTtiujtBj924Vtm1eL2tMgYZPnFtdd",
  "key14": "2m5ePAi8yJ6STfZ1a1Xik8GTTLjR2iDVHoavAeskX8n5uPP5bWWkghJEniuqqbFJG7xcDX3dijqckaZjLgySNBcq",
  "key15": "3EfmuworcrwxWNYPG9kPjLTU8YHjgfoDZgwYXjUHcVtvmMTWjVhEYZzFjiMs7YqHoy1ftWLPeb6AnhWq6VD11XFU",
  "key16": "5EHjjHoFLVBfXvbC5kCkjvLGN1XLxVBmDeZg31gNYSS4WP9Hg56XTQF6CVW6cWpQtK21mZZLUP1WU7Q55Th3JvaD",
  "key17": "p1dc2GueK1qmucdjw5epCUTfWthAd8P1r97bjoPQXYbQrjQ6JDnog6nu4wETmqhLoNKkEwWnDB2m5RyLqbcVmd9",
  "key18": "3mSHS3s6JZ9neGzdhxuhsqM38KUaH68M8TbAJwKeLeH7NmMaf2q6aRaZWT35abb7GmprWAhLFj2FyeHhtJG3pQRP",
  "key19": "4ZswqyHPB52u8XjiUYsUeEpsrXZTgaNV8SZRH9mkfn41xLCXUi1Bm8cUpazBvjKBe2WWTdqxJyDPkbFUsKopg7Rh",
  "key20": "3gLVi5q6x3JwFgvMAGwddQHC4Kw6gmBffc6eXYqxH65VR81w9LjLPfeuksburfNcHZRSrD9N1Ph8Svcd1pARvGkT",
  "key21": "3Z4Kzj3qY3YpT173vLxWrpA8GZGujaFYCxX7GgSihwha3Qa2dibDSuzjTAKGk8oqwAWhhhCwbWpdA6Gj69KM5zrR",
  "key22": "3qtXbmJkYkV9KMKfHnCVaZ6iFuqbarXzKNpEPLTAYAVzTAaCvpaNdVNXfq27GG41CdbXcgQbQ2BGGvAAvAPFZF6x",
  "key23": "juzj9ZwF9YbCJBoKi7G924r5t9Abz2oMnkL8pg1DTAaF1Z7avaucMPo77BLRXrzpfUinw5dhYhVqg8BVvX7KiAu",
  "key24": "nTGA5CgrZ3U44azUZQoUE1cErJn3o4hDMGAM4PJvuhbwBgZguVmuVJJ5nKBQLt5aSPWW8q9mha9mtp3nihFt8LX",
  "key25": "5gtCsqw9o5EuepciuQaTUhWV9xdgjrqzhGns73ZW1fPKZW82UXehTxYwvRXwfxh5VAoKeinTzN5XJaenFKzRswab",
  "key26": "5vXzkzjzNTDYS3kzsDigXYxJuPwBBJKatrAGsg4MeK3Lk36MDJvNtPYxmcTBmrz7bQTNHG4dKcm3yYw2iUAvA9D",
  "key27": "4QCSC9HvzpiZGfUFLgMHagEeMvwAPbX8YXitQqHXLdy9DhcH1JaCFAzTaNGJwNEr466DhbuAWjqpmf1YbFFnHZyS",
  "key28": "4GEcxKBsGDQfoTEi7WmN1RyjMbw78W86P8CaSo63Gm3zGNkesNs8gwJo4HLVrhhBEJDoyfdLK3NXDpaNWDWpTU9w",
  "key29": "AZRE1tbf4AsVuSAxU4CbeNwBR94f4kFQ7RC1D7V3BgyvwjQHkRsYaSGwmQ4zoCqdYjXYp5HbE375Fg2TrDCCcty",
  "key30": "45CdbH1niTJYPjDSSnbHxgSqyZKxRcKjjmjQpDw9MHjeyBDRYa2Ky4wbkGHUvvzTQS6UVjFHYvgwg1sKa5Ri9oJN",
  "key31": "2uuZ5neYSjgARB9F5dMeKYhHkewfKyXuUq4cbyrgoR8bBdq71dvv3YjqUKpZziEPuzfoxFeZZzL1G2ABNcHnMbc4",
  "key32": "NfKEJRTkRnC2VvxFKdbwgEcrJQKvXUaoKPemtp9LKEYCPKjS6S8nTHFtwxM82FfNB92N3ks6vPn1AGYKAW6ZU8E"
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
