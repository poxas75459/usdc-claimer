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
    "5ER9PuRZUETunjWTsPrK8wQg3wAciuyJEj5wp5GtCuaGNQUbuwcvA86gh9xmUeKUEhuwd1RAXUf1y4VgJqeABGxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvD7rcQ3jLCoU79FaHTBYGDGFb8m6udoECGj6nz9hqYSLu8mUfNmz26wSkiTP6jnHi2BoaPv5GDFLd8TQQ4zhzX",
  "key1": "gAkqSPzSzBSnz1S2dTctUvwghdSqnEspX8NTqu1B5MzVti1qatXWqpdj8SVHXETkz11teRMWBu2N7rcGVR2HaMj",
  "key2": "51Sa12mhiXpqFAbgufie2RswkfQ1dd1Z1gtJmtsLXojvn9iFqrShgj4ZK2EHfhmw9BvU9JTsRpU7BjSd7CmZ7RGR",
  "key3": "57jXpAnqDTVG4rX77F1uQ99ueGHVm9wpYY7kw57kGycnZQLEZP6MhgmJcu2mhDimEYWighn8Vt4hzNGC5ZhJ5diY",
  "key4": "3G3ipajyWCoFjYhJL1iw5wQEBiqTQ8R9HUUei1fRTeBiejBGegdZqNBvKsPbBBFkQxFp7srPiSwj3bA6zMCSNSou",
  "key5": "byaJnqWW4eZcYAXJLhjkHDGFrxeHnPrDzB4cZvHvNQjxvQVgAb4byZ8fiSpBnmr7HVsRurdVRDudbgZZPoLVh88",
  "key6": "4QddSsebLbYNPHBWer6XvKVynCo1QxA6xt77q56ycJXTx9VtZKk2Q4VjGb7E2JsFNDPMaEJHjeukWdBHa3SoaAaK",
  "key7": "5KXASB6xgQ63y7WB9MMpsuFB1WbLh6ma8Wao8nTJqBAsFkhF2M91MZotX2FFiCrBPDdAiexW8cPDRsdgxhNVPDt8",
  "key8": "3R4sARkCf5xq4XUC81Jjca7wDqJfw8x6S1aPSAUXX3kk7RWahbfKiye5dnN4KGaHNpEorW6TAABhkg8Zyq5qUANY",
  "key9": "2Vzmbbb4c7X4egCXos7yJ6rqWUjtEZJ63kznDiZheWuzeMUHiAVPGbA9FXnTMeWTLqveFbqu6QxajY2em4aDqA99",
  "key10": "3TTnVB9qQC2NWSZ9ccHGi8ehq9QMXaFqCzP2C9FKsAFz5fRqF1QdxxKzRJEGdRuFFT3tXaFkGQWxGmueqG5tHJUi",
  "key11": "3i8MqGE8Wv75htDWWnmo1uoCeTzePSUWASebgPXh1yzskpcFWeGgSxDgXvgF4bD3EY3tNJjcHhXGASBf2tjSo7cs",
  "key12": "RozMomTKbvsD3KTmGWsfi7xXzDh7hJejaub5kV3qcWKy7DFfJDoCQomx5NvPe3GG5U5vzeWyq8aYZHFmgZWNZEC",
  "key13": "2giYJe6dZXXNbDZLujdTjhpNhZyN76BzwexzJFnw4iTdXayQpng8VmJG6bNw2362F7FHpZ7JaYZFXFYka9UtnkL9",
  "key14": "4T3M7y19pH5dowWhy1YjtcjcSQror8Te4JhDfKNrtDpDkpDyWJf46Hncu2WV7H7MzVeGURjVpyno1AaPGuRNN1hN",
  "key15": "4zCCvMRvQG3c4ZCQsKYQEvdrNbWQwnHAMYZXr7f5bXTAFa8infveimEYZ35AMsBaRa3gRZjLNpfLQgfrmyH7WwfP",
  "key16": "4BfmgecvxXPQBNTVNNmeVAjy7ecEZBrnRgxkEt4cRyrutTdRkbkUVNLA6HXttETMWdnakNH3Li3iEB6rWQvHUvBJ",
  "key17": "cF5BvYVxySkX8SBuZZ4FDNVaeVQisaiy6PxGrTvonxSHGrdacom9hNv37K5zNwmACphvChUxSNGqAzWE3pD3APs",
  "key18": "5JoNsjkYDz1hVAEfNr1GcnDz2yD3mwRz4wwyPFouRpi398V6jNCzsWzCn6MAUPJgjnXwsRoDyP84y8y2xk9Gmi4R",
  "key19": "4YXLQTYyknFiywb6Ev9eBFsBzpjtJESVbWa7eGcLaAdhESDXWzyTQ6GY6QY9kRRtvE8HmC3bZSvzWdDJ91ENDMU1",
  "key20": "5kzFTBrkdDozrweUd1YKnRza6P9Bc4nYoVGrtrw45KB91BjVSgS25mBbtQNEnRuXQ6nCRmyFeFfSZXFnt8W1assV",
  "key21": "4AMzG1FfY7Zu7GpCyKkqwm2ZedZddHiuTVQGds75R1XcqYWRRV7G36GYfTHdyWZXcQaVCSoT9W3TBRMvn1FHjHZ",
  "key22": "3EvWZ42QHo2Xdr944QtbZVYzZt95Qc7FY6d8jxMyKEx6ABniNCLGrmLneq5dxB3V4BbS2VUfVCxmACPcSyY6wGdS",
  "key23": "r3LQXgpW4iCLVvUhhKQwft8ZSQNksw1BPvTaNt9fArpWsHYraTWiTqyKReSieMLZ6sfKBcVmBQcEePMRE1jrfLh",
  "key24": "4CbddvH9R7CUiH9Rw8XemudVm7jAhGPh4EKpEc23DcaBPGscJt1u9EYCafNo7pNR2vmWJPmBnMPU9BgxvxpiCRYb",
  "key25": "3JC7nvRyv3cHMmk2P8SH2fx6mLeVURZrkDWbihibEhjFYMU6t73Xgf8nLnx1AYS4KYkjqhp1f1xBNBMYjGUKWZdh",
  "key26": "5Q8ciefeSV7mSKF3gTKpznHqrTyJkDhb8qsMcXGb51xmCJi1Fe4LLDzeBF4DFULLv8m8sh9xtGYBN3HJ7WUATrhY",
  "key27": "29KKm7CDymiqjca1tJV2xjq4MgYaCrVmU9NJFPWX6z7J9hQHBz886MUX3NBrDsUT6rtuLfft5ghDihA64VRNTPVU",
  "key28": "2X2AgXbxKr5f2mKT84sZtfPpbHaBeqke7rW4GqStiMeDoR1dqff65PQn7iLdZTrasaoFTpGLdYj5iQfnQPKRSdiC",
  "key29": "2KRoEjRRhqmrds1BDdX1JUVZFbkfBebQo86diZbggYPREJXCwAS1rnnqBcx5CJMqEDpNtd5av6k3C5crdYyrWNDG",
  "key30": "Mg4udHYoWKohJE9j5A47zgANg2Kc4W9iSPS9G3Anm8dHEpwmta11Fjk28jiGpEVJjTzfDgpPHQtVDLbeXBpncTm",
  "key31": "3RtTuqEyVDR1BfAD7bKUSUEwSmN7J4oxdUbYjGCB8LZ5SZXq4Xj2ytX9yJoarKTSXeyiEyNh4BQruWFadscdi6BZ",
  "key32": "2vyi4vWK7C9NF4SskLj51qEX7UwgsbEWUAHpzpFvYnjPUvZPpwYEjLUiKvB5DJjh6QtvnsWHvqDHG9Ck5of5B7LH",
  "key33": "x8TfYb4z1yApCZ4s8dN8zCzR8vCBbfgDtKMdPL6Ccr1C1TgsCimM7H2eryKtysSbfUcdHGeGKYbe2g6wem8Bct2",
  "key34": "5VNw2URQsz9xnHnoiMSnhJ2y7YuQ8iKjafKXB1EtLCZ7bSe4WUBHS1S4NyZbeT3uxEwf7Ye5icLrDmLfqPCp3Hfo"
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
