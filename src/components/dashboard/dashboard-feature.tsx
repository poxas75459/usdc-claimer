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
    "4cQyBqudr9TRrQYx9SFwCWT9QB5rq4BUQzoxnjed44rG2PhvhzwquWKQ233T54eqH9g8NgWeN3Mn3UnUo6WzRtXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThGfmGEqLZtRMUhp9nVWPocstJnAdwFsGisxRZcK2QHYDimSpRmm8sJxVFrRMvDACbnrwU45cQqscjU1RtCDAF4",
  "key1": "27g1FN5Hxgzh5UHFWFTeVSG8JqDgi1btE2H8XxtVkqGnP4uhfw5dKVmfrnAu48A54UZdaft6uy2aJA5AXNdxe9eb",
  "key2": "35mVYg2saJZyg4gJHyBQnWhxRFGvdcTt1RhAfWvDAQYZYhc8EJmkgkuQ6WDkMM4JMPuXADi3vJDeBPmVwGa6JNHY",
  "key3": "4FcenczfzrydP8KtB1J3Q7RVeNg2TUQzYsGALzDym4ac3kmK3XTq24xy7CRtQtwz1J8umi1WZf8VVKoypVVMWjj6",
  "key4": "3fmmjdYNNP4wRGcfEbsx2iEd117y5yB1zoWShtn1QeuhBxtTgaWQVf6Td88wfXF2KWwE55HDxhFaCPSctBg2D1za",
  "key5": "3dCmkxa6XebTpwFxnjqvCgV6Vysy3HzQxPuwbqazBtQccr2Mpe2yvJr1pafzpmuZAVNQMQ5RqZ1Dy1kPV4LeGjcX",
  "key6": "2kWDosSMafLQXrNKachBZrVauJyDMtZ5ofPo3GPFrMz4C2kSCt1KXEAad7rpjkXuwAq5DrDTYXbXDxeKCebHVNGo",
  "key7": "2dHvt7otdFLKhmeJHRKg8YSgSaxGc39PgjeQAcdfD4E8PxrhaQeB4KEFRyjxtpAZE8GJsuii6xZSqsAdkkgTuW6j",
  "key8": "5D6tf9TkKEYXKNqKZVXY54VQkxRjEHh1TivjeS8621pr2pMnpvG1VF2zT3cA9dPHbmNfAJ8HpCdoeaf3i7fRWwxy",
  "key9": "cxkv6YHWs8H3vQ9JdtiyM6fbpfpBBir7ov4kPivJ7HYymvYRroYaZDFjurY26NBbybegNow55orhn32HEsse1dT",
  "key10": "eBspdzNNXCNNCt3y18BV1zH8HqNZCotFX7szBtNxGX1Q4rDS59n9PRs437PfRF1ap9cHfkDjxUPTbiWbL5THnz2",
  "key11": "3L8xGTMseEoxxAPv9y1cprcDQxbWpaCdgjL2FKN4MPbb9PFLmxXCkAya2nUpHMXu8T7v1y37gfoaGiNyPfQwmsQm",
  "key12": "r14oXxvuN9L54qYAotKibtCzPf4rAqGerL6VNBUjXZ2cCKwfUJC9BgGZ8r4yAf3u7i1T5ggXGNxy2i3wHMbXWWK",
  "key13": "4Knt9e9qF8jgQmgGAXpWybKPsdguDNaQ6xQ3gHNSYvixKp7wBbZZrcVnV4xvseduZBjFNSepryD1QU31ULipgutT",
  "key14": "4JN1uMjqedWduHKy6jx2iZ4AAz2sYKWE4tqrGDdvBuFHXAiR4uAKyM1BBdE5BXDFTXzDEQHpJBVvNs3NKuvyhCei",
  "key15": "3RcRo5ciUYjxLwHDjmfbXT6ndoVqSVKhwjDEoDknMFnVJxDYFfWorBRwv1gdH2S2Tnn3RAVxSSa9NrrECNbdMDmU",
  "key16": "5wCe4DHnj89doQEu7H7z1EtMgP5ExpyBY7CixA3J4uLQBZHtjYdVd2FNfJzrHZ8T8k1RWFjr9eKqVc8LwP9zvLD8",
  "key17": "4cAKsJPXRBMHH5b5UyLY9v668iMeyzTiVDDjqwPPMGwvQk3CBow2Xfsqj4uW9686EyxA8tVWN6GwrX2PTmKdVkjB",
  "key18": "b4NvaHMv7PTju8AHFwLtnVpYoWbj27aPBk75ioNpoFLUPHCKNwhvkwNrAupVrDZZwN7RW6WdeM2fy3whqmqLSXa",
  "key19": "3sLnEVbpssNU2UKYoGaBp1ZtEAUpwPMw2yDhrATYNNqWWw6Rf1tyKvEjnW6fTJvtMAqVnfdjSMHQweWT8qTeQ9ET",
  "key20": "HBBBjwZgNibFfkpx3LgrXvWhR9vN9AcjRtsN9mR6cMYkH5v1V2LgKJeVAraBWUcWyGwoWsmraTf5XsavcJzq34g",
  "key21": "2spLqiZ4AwVTRasGWo4DuDht5prJ5up2aTFHZJ2cfzwFD1X3pWbkabwdRx4Fe95rboDbpt4ZGTxQq2zMcKVeuAkR",
  "key22": "3K7bZxMc5kWKtcNozK53vLin5brscLdrnhZnAwT8sGAY5RUVcmnQyVqE9a9UW18SgRe9SuT3Si3m1NbyM4k7wU6M",
  "key23": "4ixPWC1J1J3vTwn5VMxF4c5b6vjoNgkUQg3Zmkgc7xuX49zixU5u9JakHcGYPcPJzHF6wdXgnNvzcbE7b9pJCgWY",
  "key24": "3VqVm3JpaimgH3QfKm38ArcQQtR2SwVFgXNX4K7FPABGAFnU74fP2Zdt1bNcTZxrwXbsmfYADYUokvvoZFeUuDsY",
  "key25": "t4R26XazXKkqBwJjGexH3ooTiGBJLoPhXZ9Sv8yWbN24YYe1F529583otSM4Hrv8JmokkKNMDpVbuMj2yWBdZaD",
  "key26": "2Aex9CP17e3Jn8SpBP45aAZdPdvmkLZjX5XLPWisZqySetqqQoEnu7c3A7VzUZTHHxkqk1A16U8GN2fwwNgfN9t9",
  "key27": "3Fuizjwy8uhiq7GyTdnsCE1sQgheEnK3sNwaHNH8Rev7FEU8MnAowk2mcV4zEfW8sSMMYWg4h4LGgcmQD2eGkqHz",
  "key28": "836rB2Qd1rbaMTzeCW2y5aN6NYDANMPMz9nAZcUWqG2pFrWereUSiSBDkJ6rK1EZbj8QqF8MuQy9aF2mzqXe44R",
  "key29": "3bamwNtViZRJSHdWr25NFmYBis6FWsi8uNBso1mgNrh9K4Y87mhf2ThVb8pTUxU4Tjz6xhWLYCvV4MeWWLyz6eGs",
  "key30": "5QCpwqsn1guubnYNJS5Bx8wqZF89DH97JeWHRmtVwKNYSJqiMnnQSkyPdraDZPJen5r7Fhy3TUEo9QmCNBWzQHeQ"
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
