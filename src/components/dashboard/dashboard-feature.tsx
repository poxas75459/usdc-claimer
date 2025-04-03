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
    "3kAFjvSCX7WCY7y7FSsQHgKAwj5Lxmv9n1ve4L4c8mmDtVeEfYxzLYvpsU4MLpzJuyW8Hy6V6RHFgeMHAt5jrXzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBZEjdDmaLmGMoyi46v3FDj8ArE5BFBpwKRTZFSmGF2WcpAf35aHZgrgyddbAjfAViB87vQ97MrdB6gZHjp2y1a",
  "key1": "x91crycYf7cfcFZn58ki9kB4ut2szbgjHBZuRRxFsjjxWGCXjN3rpWp5Z9m7KKe6rqEErarBYwfJeJGojSNr6Nq",
  "key2": "3pEDfN8jwtJZMMwRTsDiimEQrF9Bnwjea7ZwyTwrBprtqbTtmFQ1Eor6JDzMtxoEp8RADF8QDyoL2QE4chSaJBLH",
  "key3": "32RozCCRZoprj1jv2c6m349spDsma9uZRJgacSVvrbiC5GcDuepFuLUgjBKGNYco4B5ipwKz9xjCaz8PVWZ7Bp4F",
  "key4": "3maFwoy5z1GwY8pb9w5wwanQ1FkHnLz1nQyTFVN5pBwuWocVzWrt9WP6LczShL49MKRN1T6ZcvWXikdLUgjG7cMy",
  "key5": "51EoRj9LGyHKBfZjJhTQkK3HmPJD3fJhYmcy57WzfWmTHdw1U6Dd4mPTCyHxRY5eDJqCbHCVoS6dJ5MYHdAg3W2K",
  "key6": "2ySBMF1QyYbCTreQGXxbab4PBgaLghE5K2MxZMfGwg8Kn6AFa4pFLsQwAZfhKUA2cbyjnnW9iA9p7q5Fqd9baAC",
  "key7": "9Nf9aYBL59gqmvZMvag31mv8TQZ9UVeEm4Jfksn7R8SMsDQ3gGrLqHwx3UQoAwkZJ8iJuAjSWej68dUQ8TeEvhh",
  "key8": "RKgzeC85UWXYKQ7DPsTdy4bCJFKspFQ7QL1TBqzBbY522Wyb6bjcNipjejBYbv96Gv6gFeAD5vGb7gAqKYPs3Yc",
  "key9": "27kZiVV9Q46HFeYHWocwgo22oBrkruDUJ98dBzYmU4jXjcP1TzcYGnpmT39Fz6b4pXsWjXRcxhaXSdMnNda1h12e",
  "key10": "5pohGfL7p9bzWDFaRWpsCa3vKw22Xdx7QrNLbh2GjTKm8czY2PEqjHJxC8L1sM7B8ysnbDw6uSwxr8KEUU81J9Ry",
  "key11": "37fQqvh1RcSvi8rEjdUxRuuyHCD9vnWFaCeTNW2n9u19sa6KrPioHa8dNJSkUieDcRMpKiCtMVm22CHJLAUN9ycv",
  "key12": "5kdMpBf6WS2puxSyNL1K994aM95yewcPQMfNGz6nigs6WRAC71VmiBnqjbPYrdHK3NVYtc7HiikiZVqUoSEKLfXX",
  "key13": "4bdhTTS16FHkDK6JZonygw94v1LCyA6qpJgXG54Eqj8w8dxKrfjEdY7RMZhbwhYi7Tqn8dTig3oppisoNm6aGVtk",
  "key14": "3gcZzLFXoYWjCos8Q16B8qHMZ45Ys41hCmoTMHDL6YjyHJ5o7baGM7Akea2jiPh4QUb28VH6WLgeFdxP9Lw4A9Qk",
  "key15": "44uVrDnWEXoUorn6cgBfoWRmCGyNCyjjqptjb1YJc1HquVzD3iNcd3279uvKrFsAkeG6GEbQ5oDsYHdheoff1Qho",
  "key16": "rXnhHETtWaKprzfuyeozksQ1iqAvxAknaxniwDWhGa3a4ZLMwrJDxGhSXHaGhKhhdyKRs26WRuQe9VKF1C9YpPk",
  "key17": "4skfJgGGvJ456TrBTSVbqE1CRRjFCk6piRgEWUXcNFZ4G1CE5eohgk657QesShbPERNMYAjXF9hajmDQG9as9qQ3",
  "key18": "3auw8bo7rLkxi7RVYYAGadZGgAegvFPhmKauWHQbZ5jPcJu9TMoc4EbkeQ3AhBgi4NYjZjmgLCE5o24n2mBYyUhH",
  "key19": "34btwVRWjmrXPPcfyH5HdBoreBrwd4r9xYyhgbwnk71s1yervcUu4jdLctz8gXTt1NF95ymkaLRMAHZ2voVm8cSk",
  "key20": "47wBd2hGcmhhkQXSTjua6ek27tMv5ZR6em3qGPifUcUHAP1aq7Nprf8GVu4McLGUFzX9x76WtYk6h4GR6sXKKCQo",
  "key21": "5hT2pZ2nvNTQJVLSByonsqGLcA3paa99xvMw79b8jiG3pLK3x9cMMUczzQwxsHx9HcKgzVp3CRESrBUfeSBDfJyF",
  "key22": "2PjbmdWWMeHpQ9xtsGzRWR5x6LmvzpvU4vcMjHZWmy9v17bgejBwRuPZxJ3atEc59fX3PSE9aFog9ZLCUrNUCetx",
  "key23": "57VDTgq7bWh4JNCffeTMNnn6RxHrSoBar13hphdYfycG9v6QrkNbbei4kPPfK3dFpb5f5ZES6Q2UMRhi45NtcgDH",
  "key24": "5RjDTbeJKhA6QjURNxdpT6doAgQy14MrnPPJH7xR7ZHhtBJpHnGZSEdzDGrkDuny11boxtFePGZgXeStR7HkSMaS",
  "key25": "2jU6wyRu8qNpxpazs5qocYxnMokGL3EP97x748bQKk5TTYazBUrLZctmQKu864XFksYvxrrdnKgs5b5X17CsgLEy",
  "key26": "GdHxRvJdEZ137SoxtZKzcwmWVXfkSw2dqfXPtTqo775APjRadXkexorbqWK7p9wwHQUfV6zsbsjv7ygvumGq3Ee",
  "key27": "5nLb41esM45J1gN58mk9dmxkrvS119JBnMRNFmziXnSxg8FRRxcor6jKXJizxVsHX6d5dFh5o2V5PDpkV2V32f6D",
  "key28": "4myjKB6hYYjZiynhodnrWSPA3uCVKQA6B8W7KZZQA4Rre6KSsEcMWzXierTHS1oVpNwM95eNE2KxVmHGfhVzNKbU",
  "key29": "3H8tiW4smcA3QrV7qYDJHg13ikxBD4orPa91pibQab3jANQUB7oWubMyybvj5YtyjEagwS3bz55KP9QCWp53fhnt",
  "key30": "2duwHqNkAuVyrrqsom4tG4RuhJhYNwdTNnVvoQ9HJTW8exGx8B2W3Vfda7fRQPjmQDyfo44BFnHQ2m9FkykTupAA",
  "key31": "SrFRR7zK57E3k6nyf1qCYK8eF6qQ5y8mWQFjVMskV4vt2bucznxzc4RSYnFggLpVwXjeghPjnNchwq6g3WhXLJc",
  "key32": "y7n6dAbnAyWtNhQtSJHaZ6ic5N2E8uNJMBPW4KKVWLLNUPr3ociP4Wk71GkPwTM5tMfD53p6YBtZE2frwQxtkS6",
  "key33": "4jvA18QvDrV6Ly78tpQKnxwTdHWLHwD6ZoWcREKQf9vCESSndPvp1hdewbNVEnUcQMPCU4rUifn7bMJwAHwWmEj7",
  "key34": "2jGiCVLkKr57znrnUegmeaqzqCSKYC7brRb6Wisj4A9tZSc4b7QW3YuG23qqgntDqew3fdotFStkowfDcJYDvZwa",
  "key35": "CMw9rNeEAhQGZ6Wrx5EpXU763rMKDakHT8QW4SZCS2xw9o1Nb8d4wbCDXbsFDzj87qD8WzeqLyHTp95q8Sh6SfL",
  "key36": "3RFVwiAXoJ2PVqF1WV4bmScCq7K5fohQNWZSUtxNqKsDJJQubq6ETr2PvkD2JuVQ2HCy6QwgXZYZ8hgXPKTDjcfr"
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
