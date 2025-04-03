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
    "3pMXXuXZXpjdH4wDgyTZXq6Wtc7T3TKPX9xE4RFEUeZsNzd73grXw42u4wVcuLzxgrfDMWB6YeYAr3pukLwVgrNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1dQC9TeGqM68CnnZiW6QCPexdDd9bx7MpU1g6frbT7asKfAX4Npp8YdRS41bkAqhE45KXeeBCDtsVzLi5cEL5U",
  "key1": "43QK6vCfmrEy4sXg4iA9i4H36QXzWKskDqxEtdYVMLWLfDaayd8p7VgvNsGvsKkyyTXQMT7TwHyxM2QW8LAvaDm",
  "key2": "5KG1iqjp9sDL9TEzb5ap5tuZnP4d4gnoWzuBtnfik7ZB4fHBDrN76hhqdFKtP6hus6mNzcpim41YyjfsWPtUvB8W",
  "key3": "5uqTDJq567gYNKKWXitJJQFzFJjSFvRs68Q8FXWxixpT7oQZU4fJLpvczWP5jp7kn2jJg8WPXXpBCUa6HAGFBGng",
  "key4": "4cbwvxLkwXUfhbu8wxj1SpZu82RUanRdPvskBjA5xivS4o3kZ1PHogerq6bH65SkCRf2pNwFouveHHonea6AkGPC",
  "key5": "37Ft5pZygSQLD5syD25impqWKx5au35yVq5FppPggrfybvZuJdNnsDPASCkbE2hteLHRx4EwVCMWgXubnoAtCyYg",
  "key6": "4VEL43P7uizxFGgtrUuq4QHwnWhcoW6XX956UBJqBmcKdV8mpTRi7fP2ksg9RNfyfdBbkuGoyYeHFRoiGcfAmrWT",
  "key7": "3CPYGDHoCeCk2ZfZsSefBg7BzXKoJi6gFpwLt7bRBZM89N5natUvuhdd3EL77kW2DX3EXmm83ZshDxXKBnh8fBay",
  "key8": "4BiH1R3CTrHzCqXievTMZWzAdC5fLMuq3Myf21EmJcxuaYjU8aQ1uxpRGYr3DvzAzzFQwYakdAppW5v4iaXpWZHG",
  "key9": "3aJmkFw1SiFLbDBmgmLRuCY9xAeLPdzvbZ552CQ7NTFAtDCra3knifL2VQpMoKiT8pDdJiRWzcZMx3t1Pez3bxxt",
  "key10": "21NXXmwhYDc662yc8TZx13Vo3YbU681pEvBdiBzLtbzFnY56oAvfzXcgUKcDfRHTjBXuaxEQJ5DcUoqqqe5tB6dP",
  "key11": "4i8EJi9trabhGRgn5R1WtG9veHt8tA5uGa9H2oimv48tfA19qsx5GXu3L6wfyonNwHZZx4orDjcrXuax45LdSUhA",
  "key12": "55MVAH5fPGmpEo4ew8WCiYE28F86NDm9Z7RPe8wNgkPzDtCNxNCiDB1x9w4HmyGXhCH21zw2RsKFZY3xNWQL9Wdo",
  "key13": "Vo41W4VansEq5DnaJ2BLaKQy4hHs9XQUSmgWmgnUgw2f2m9B3j6GNTcAKc5ZvDY6zQwTrP5W7uuXcjNgJhaxCPd",
  "key14": "3bTdv51ZBj6BDocKpiyX5yBsUMRTSHFLQgkoWKvLkijP4fNmXN7io8E8B8za4HsefuFwHSzaD12wQxqrFefo5JUa",
  "key15": "59jVNW5at7pYq1uDjfRgjxsgJ6EmHMN2aGk3DkP3XPjqhZCMzV7T6RBhv1YRvjVb3pyDUVT71UNHcjZ7G9k5NHVR",
  "key16": "5ykr3K1bLa9eWAeWYqeUQHarQdomskWU21iQ6dHXAVLsQdydeD6mMpHGCviff2i6t6PJ6ShoU511VY2Dkzrf6z8i",
  "key17": "613jMrSxswYzPMPHefCuqMB6YUv81m7bDWvuEZk8xgybNRjbQoQNpF8jbQwaMdNpNArJGZmEF2FVhXEL6T8VXaZy",
  "key18": "5aQwRCoSiVe7TXyBemKsGZceQaZZErHMMBVWxFwJCtxx67aJ6e9hLQUgftmAVdy8no4XH8LkyAfSdrzmfAo2GDZt",
  "key19": "3yCC6zcdtVXbHaivzJNqQwEBvQponPjVnsF5D7ADoMHC1g5bkE8XDwA1qDfKWc9AyBc68i4taFboeQAu6RM9qAhi",
  "key20": "5VtxHqfYwr94pfHJDcKTYhATnozQw1ixh8fbYwoX5nc3ozDdJdU7eEmJ8P8LXBXMNGkWnydxWUBwtjbyCPCa3N9f",
  "key21": "3wHZ2n7B7WkshvPQH8EsV7w8r8xXk3JLRNgPLNrkRLD3Mm1rnpVWQWoZy6pkLeoE7F8LDmvzU24fx7FnKhmFKWNF",
  "key22": "5T1asKnCPpUg1DWUfgMckM33AfD5GhjiptkWNR2Rd1yKgSyBXa3TPjucQkzb6xjrZfXyG6hS6uwCz4mtj4oBwQgS",
  "key23": "wkbDCR5TdvwbmvTmjDDdkyh4z5evqPSfAdFLSbw9VcjaH4AJYU8NE9JkV1v2fowRGZPMZG2mqdaEBQTJzDZsLLj",
  "key24": "4KmCFeg5zbedpVMJkUQ566PcpHTHdxJ4Nh2ZEXgk3ogJKaozCWvuArTxp6fpZ1B4nBfUkcXqMR7yrFX2NoXgJ68S",
  "key25": "5qo1duo5YmdHGJjXtvkmsDP6kjbyR1aQAeHx9iBxhYqmPErFuHVvcpwRMaK9opBb2wg3xXjXhwTZETiSwWmmZdAd",
  "key26": "5mkMkR3PJdY9AHP4YZBHfLKXEqtLYhDR9oipEtGSDQDWeRQW9Xgi8382wxNXrNjgpqAQdAPgMMuq1MRjHFskAtfY",
  "key27": "3i4HjvNognN5d82nLNqmkwToyvY75FED73vqjYWJAYnLWk7LodEexYrnJ6okwMFXWp4Yy1a2kH5SWW8GFQa9qTjX",
  "key28": "5k1eFU8X9P8Cqe6LAkTx3Ni9Wqp6iVvay243essqTBJpsgdfVVxAeb3MYHu89HKC8fZrHvf9vmMNn7tZMufJPU19",
  "key29": "2o2dUUBLBQcZKYp3XUzYTnHLkxM1aKEuu2zrXv79TE8nrxxDY3mg7cbUrBMJcFpRvVmB18JFaf6ntKf5qEaDExxm",
  "key30": "5ZoqLGoVuD96EZucAtxRn2DwZko2s5FF9JJ3xJReHiKh1qhmagdVXVuC2gB6gtm5CtwQu5Nzr4MuhmvQ4YCV6HZQ",
  "key31": "jvHjE5wvDrEgJHMRSyYR7SnnZW2D7nzZqKNDYP2DQ5Py96LtuJCCVpgpxKQ1QT4smj3xiNvk11jbphHW8v2aqqt",
  "key32": "p1RM4gb5FGSCjXwMDjjsAkRqpLtEKjDdK1S4PQWKNoJuF4Hpbgo61HkvwF12v8NaAXmpsYCVLFqNvDTRaE6abU1",
  "key33": "5ApELPayaXxSP5H995q9RFSUxnJnGabDM1oiHryyy2M1iRrxwEMkTxURNWE7FpEE6aqnuji3rcMGoYB6jz6Lk3c8"
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
