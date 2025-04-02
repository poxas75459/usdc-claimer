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
    "2YA4b2p7HYKhF6P1v4Rk7H1erjT3Vna6LqPMh6yZSwt9s6VkUGUmfQfvFUJykNNSomHh2eLhG8tWYNv52HJCG4Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57G2cWG3v4EyXBpnihVx4PeNkLkAwzgqwXSUoHWpeqMbend82gxqT8HKEonsag1WTKkwRBi4UhkvgASpi7CiNnLi",
  "key1": "QKqF11NQxiMb2LzbdUVECWFGe23tsz5xrW8jraBuyP4FEqFfcmAsTKL1qja4qvJxQ78omuKNWE4zzU2Yr1TukBX",
  "key2": "4dEbGPjXdhZF9ZyM7ypqMyHCH72y8jE7NUpi4ayDAWtHtqCzvEL4vunZsYKmXu6WJuNs3fzeEQm9QDetAaH5SHWx",
  "key3": "5ayFu12e8A2ewkF9n5n4nxkdUGHUwpH2gnErdCJXMCGHeypqeM2QWHvJZzXsx8vuaQGeSTBRMhVSkoA4rr4FZ8iB",
  "key4": "389HpGE5suLPzD9L3kvJne4bdRY2VqCjtAKLexRouzKM6sWJeM7HqECdiXAhSwtq9bTL5gw8uirEjpx46z726vXe",
  "key5": "evJLQ7dwonAeRt92FDgtmcjgL1bHw1GBKY6FQNL8pJsK7zRWc67FgD7vrquFvcWxg1M6Z2NCqbCaZ8AG4QZuJ1K",
  "key6": "JnFDu4qDhhF4PVHELqzC39oyG7r9Rz3ELWcojmBKTdkzvmwbTikSLVLiTaNSZ9B67NUCSZXiM7F8Ky9P4LZmf1x",
  "key7": "3HwGvfZAiXvdjwTWL1zeygZNSmfLvCR8KExTBbSD7k3gksN5hLuwQx6FVQtWJo3W29npY3g3J7omDX85udh2CqYs",
  "key8": "3pMuSv6qQr2WwJh2Z5PZDh8XKcsL9AdwoHvDxiknKmuY9cVPjFg4vtQW4eiyKPcC5xdCuE2tjN7hbj2dmp5mfzUk",
  "key9": "5kW3E2e82KxkxkRBzirs8NRsTDaSkfKuVj3dRqYfiBcVQxg4k8uo6cZ8UNL8ANqAwk5KBhvKG1x8f9qqoESMRHUc",
  "key10": "5uAg5PnAgndjjdbVo7Lfei6ukNW7DsfuEvqVakhUyB5FVrfpTcRtTGV4FstubuosJZ5J64oBWSdNWHnZcjRfuHXy",
  "key11": "8ZBc5GzuCZAhpTqZjP4EqzVjunVbaV3aa6Nw1DeqVP1vrJuBgtEmr7iN8F1dsWxs8rZbMsrNQcQVL5Kw9mehdEC",
  "key12": "3AAbmrqx2PkN2viwqGdVhmJL6xPW1eKMnXLwJcXyMsZBaAVadkHRBWqwbY4zjaZH5XHUVJ9Tdfgd8s2zfVCTvKhD",
  "key13": "36QzppqtXdGTbo2PEQkAyJUUwE5ttLVc7Bj2XtbFQcN27pJtCEc5AkKuzceT3mVcaY8rPjgvKMdmYFUP4VJ6cBXE",
  "key14": "4J1xXBgk9jVWPYNb2BYGziVYoWdK1ssFCvEjn8e7kWFgxym93AiCgDuwibAVZxDnocucvXC3qXnGCwkeUaaXZn2z",
  "key15": "2wgK7eH6ogRW8X4AMqTjdviiRvtoCw8Szvu6MKqMkQM379eThPwa9dLTG5KtC4TMcEU8FxcfnwhW29jTUVzA5769",
  "key16": "4hL1HitVWwpumpKWm6ksFyT9b7dnbecx4ohKHPCXcqk5jmStMPMdgZG6avpuM2yMoaXrNixZeGkLJqPcY1vRZ6dr",
  "key17": "3TkFQCUHC6s8Ucg4b594uGXEcMr9QuV6V5zmherd76mVt87TZ9Nf9jELCbxgNphB4c7aFQD61gD78ip71kCK5yEs",
  "key18": "pEASRTkA5j8ncs8cMD8hSrH2VSo9xAXFyQmp2JNSdbpPXnhZCB7HRXBNaX3xLTF6DVdAqTmVWVMnWkak8zGPhfZ",
  "key19": "5HByt6yKokVUnKyzwvdUJBWpZa3VnPVs48S2DYTrnAzE6c8rmfFCxRRFC33aSgWFVBERX1mXNmUv9H3YyZzcazwR",
  "key20": "2RFz5vu7o5FmF7UNJs8ANBnXpdu5Fb9cdqwFH5RvQQC9M4Sb34wXdZLoyUsjPhcFQ4u8W9hGc7NnSZsTMFtCK7b7",
  "key21": "5tjNyrL3uhoRUVPzEJfohpXtgQaTgvHCMb6kwHG4fZN4nvNheS2E899FgxnVyPpDBU7hytJWBXT9XN2kQNpgx3e2",
  "key22": "4j1spAeue2HX1v2xVZJgXtpqnxFyJDAs55a7L59DmijdTXaeaZTg7aPpCStmDBbFR4AxhFKsKMJXUSyFzww4Veic",
  "key23": "3CjAffJ9z2grHEJJvScm9HiLVbXx87BDHxc6W8rhXo95aFqrBfYszoF5CiobiwJBEaLx3aahbijR3ZzzGr9UjHct",
  "key24": "4C43LK9YBbQPxKw7CnokHxLV6BDuBAVnREqa76iBNjyiUMCG7gDfahTEu9vwMmDjHACmzzNS4BSXtAmpjkFRsBh8",
  "key25": "Dsa9GYwkAM8ckYKLfDBkENMh9eZZsbvcUR58y832qQiCWYbryAyAcxiBw6wMyp3bv5g7ikA8AJE9rqNLAZskdt6",
  "key26": "28fVnb4ZzKtUgi8fj6WWxdxdAch2ma21KCEY4B3txu16jTf7qK9p1MnsbqtwhS4E1h9edSQQXpQVCMdQUKPzMcW9",
  "key27": "5LRFnHQsSBpXup4Eianj1Ro4dcFaNB37SrJfk8mgSD6x6jiTV1HCnPhpu5a6icnnq8cgEvEdhniRq3tK7kmZHgMA",
  "key28": "2jKuf2YPnyNfMHhBdC6CQxMFqeycZKXQg9S7HHoQszCVmJhHSv3aZN7MqpvZES1DTrATPHK6iX46zf3YtukZoyqd",
  "key29": "3fVYJpENP1KgAXnypRXg1azWTuyeeVnv219f2xdtBW7SKWh7xMBEvoLdWrPB8KHX9HwRcfJEKCEpwyH99nVop3cP",
  "key30": "GBECBBUJgvX26W8Dz7shhsL8zADmwb1EEUHekFMakgqTq972rPVZZqRE2e3VZDzWyWbMrEBbSoMaYPbfqgbQ21j",
  "key31": "3TriQBbj3gVRKs12xte2D5brTKkAYhHqC484yTN1otBiGxcqbDURiL4LKqxHCb6iVYQDPkf5A2h31hCcW8ysvHMs",
  "key32": "4hrAU9QQEPtq9Fp7HKreLmjsQKPbHHdeLb8Vu4PV9poPLM4D9XS2Aggzou1HTXv9mhZ7fjYu1sxUjP2x41afoLCw",
  "key33": "5WcLy9DNu28QCgxNh5wmG4oALJxqWkU9qAoTFxXmwaCYUoQn7vVAQ9FTrm9ZV6TSpYNnDDvg3H1hJvVb4VNEsB6z",
  "key34": "3yHi6GzXFYPSwgA6aR32oBRxERxPCT7n12h2kUtU5rnhXBUWLJpiH7ZyxXFWypvWQ36GgYwixVbCcmZTbDNy1gRJ",
  "key35": "4uqdGLaJXmoqgKA7Nqp24M83EZfedvNUZXGVDSP6ND8x5Kgc7j25Trnw7Ef9x24zGqBkDHtg7Q3okQgPV7e2D4xT",
  "key36": "54nrLjz6wHxQnDh46G6UnhTu19VcFfqoMx714SEY3NLk1srB42dGnPZdHanMdfzHd5Xa49wheX737X5pV5XRHFYT",
  "key37": "3wQYLd1UmtN3cqXQnh9DfyCr89KCA16Z99JxzhMYn2hh58ASfHW82rXpucs5XHfpi2ZsRqrDuftgJv1tCrvwskXx",
  "key38": "3SNkyXgKfNSYHfZAf1jcY1ft68a9DJTCbkzP251YxEtawYCBFCJVC4cgsCEfu5Jmq1vcAMa8x1akhh7zaMFZCG6Z",
  "key39": "4HTMgyFK4yf8nCkPYi6YxKy9auSoxCRdMFSc13gbbWcvmMT1GtFvJffisCt2w4nCe9YEkueY4MZFDByzPh7QehXV",
  "key40": "4FPW3p6Cc1Q5K2vsQf5AvNJv2SK5HsoKyAzaUq7R9YRXzieAZagwLQikzFauzkpvJqcwJEpzp6Ydd43tXh8iiV1i",
  "key41": "55rUH6rArJmKb2eG6nKuJkCbR1fpPzVzp3FtrHB1Ym8yLmcPdrRt9LVUAN8Y3BDWQjmzACh8S1fxa3PxQ67kHEn5",
  "key42": "4Hb4Gez6d77e8mksCVX6ekdii72ebUKJa8K3iUQbJXye2b2UDg79b9X6Cgk6HGbfwdc6CvRgkf5SoEsJWyc67LKv",
  "key43": "2SsGkkKzUJqvkBdzqzoFoqhtd98thgMTtXXERGkoC5raRdrY1tBZWEF835jW3QSdd8p9Cxzj7EvuZCabZ2JbnkjN",
  "key44": "riEEzZExfKz3GArbz5HJwAsgcjpWFWQ5b8Xg2XERJaTKrgT1pkBCoxHVZ9DmGcyHbQsmpQxc6he2JXQcmbqsCMh",
  "key45": "3wN4UDhYqmWcV2foXD1mBXe35zXo2w5w2Xw5Y19i3jAjvyDSPm3yK6iJmQYHqEvTosYH7qWaVJ9LV4Qrazu1yKz2"
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
