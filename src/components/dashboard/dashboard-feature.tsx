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
    "3NcDsKupNmwEp7zeehJnst4bViqwkagnJvpW1F4VqByVVE6CRh5s9DSD4kpp9SUpwcsJYUPoFcPFeM9ty9iyxzUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZvdNRwH7PySa7hBkiAhArWkrdjXhDKvBE9GXoT9H2JjiskyFww53HX72boXwKBiVh2sUUmed14FMFEdtNS3r3B",
  "key1": "TwThp2ZVvKcpTfgpeDVhxtRcUxTUWXvzS78uMw1r7xxSdeERLF5VXuNU6gVPJoLehfkae6zvGJwgCssxSsVLE1g",
  "key2": "ybkddr6sQSUWUhkArDNS6f2nKfxEQStWYjmY5DTgyY6qeX5CaBXMF3L149aEg86yi3rX1AbetHh1UL1mXu2UWE4",
  "key3": "3wihHcJ1Tg9oYcwAJU77fnZ9FpjMiXazsEfXR5WJA5ov3htqZCn6xcnLks3KkJKhaqYP1564Uja6djtQ1zMWyJSe",
  "key4": "3reufoqsCCDWQuBSEFw7mEXEGwFbrxwamBn1AbR3KeD2h4E83y1NaN6zLg6vjDzTd7Xbzn7feFpjYqBqRPGeFMwG",
  "key5": "5SkZkMhSzGd5WqPTmmQRAgd7MpGTpxra8iP2fC47DHWA2VWoxYZwQotc3aDtjsK1PfMxNfrsVVDqfedengnLMzFj",
  "key6": "4ePRm99vUGLc1HbURCBJQXzAVJEWnPHH7gn2HYCDSys6rNnmVCGn3EKgBD46E2MKYQeZr8QfRcUN4kvDETezq5M7",
  "key7": "HQJUKyn6NxcGzFe5koEayFoQmZN4e2turYE78F83chDtSWTzU7nqE8Ye9BsbvpaKUghi6ob1ydeX6ogNkTijVxc",
  "key8": "3TV5xh2sz6zyRYtTFZopbSrhVLbtdmwB8BJpfph6EJYJSzydYjMqsY6F6tPpAgkEr2NZohBhK9RUGWsZiwdq39Gb",
  "key9": "5JscsvCo3jeq4XVSKwJkmb1kCd6AhP2bCDF4t6rNsguu1v9DFBWn73Kemxq4udiS12ydBqniGXkHTcKJGAdUeiBj",
  "key10": "2bg2vCFxSsmKm6rqXgLDcBSVeFQ4jtneg7NtDAtxYtYAgq73yA6L4ErNAnWUkLwig2mZTcWECdUM5GZUCoR4RE9z",
  "key11": "2MKzjTXaC9JNXQrUYQzUjpQTE79paD29X713hidCDer3jJKZ5monWQcQaE3rC7Tp2Mb5o1ec3qgQsghF11idQCU8",
  "key12": "2GDxsJm9QwEZ5ioCU26C5N5H4wAaVHc1wqX5wZJvuLoLaFRf6kGDZB3nNFgnmmkYvfy6y2WoaipMt7K4cL1uodQa",
  "key13": "2mztEq28CsA6eTagcJNuXJjhgDGG5CJWaaSN6DA3CT9gQ93nv4S1mKXbqnopd9xPMmX7r34QKw4Kp3hw6bsAdcxv",
  "key14": "28CERw8whTrXiF2kFR5HHEqGhmLD4oGWwazELcJXYEN1aG4YCYNdPXBctnMGA5hqY9Vs5hnSgP8BWingSFk7U81A",
  "key15": "yJ7yi7ifsdTyvBYbHa2eRBBddYoNbAaQyvTmuCEvse4ghopc5Jp7NtJ12NFErTrcig67S52LG5grGWDuPskj2ow",
  "key16": "5sZdE37gKjmxRQDJRTzmgCzrrtzsdYZTnGaPtgwAE5J7p6uieTncHJG9tJsTx4X4dGiTF4vLMTW8Jg66qeFcauH2",
  "key17": "37REzcLqUZDbSXXMNbWnE3P6BPnfdXH7LrQcZuz2Xn6cQ9LdGfNe5Vx6YqwKueTX97ada2ganAgLipfSVBRBgSiK",
  "key18": "3mWDfTbEYk3MTeZf68mMRQLkqJammGkjEtDz55BbhhCywFbyFxzj3Zfgh5uC6Ae8ABDv95X6Bf21MQLDqYnDuvFo",
  "key19": "3PLy9FXaBxyWWvAoFBsfar2E3sC7gf8XbYTv9ZY4P2MPpSt1ZxmhWVoFiQLeePZqp27LCWKioQMX3skHgpUmMsd",
  "key20": "5srvmpVdU23QCqaFf8Qz7mANCgPMgTPcf9Nj9hew5SKpheMfqzqYK1Lb4TLHe89bfVXCbyJrsJLAR3te3H4BiDWB",
  "key21": "3vA3qLzbTjn79dQ4g85jFPkSHLPeyxydcra9Dvs9LbFvj3J2FFeCMZu2TcscZz4V1x52RaYPVFLRsah74m1PkWBC",
  "key22": "2aqbFsrvHWLcqU1irbuUD2XUDpbLC1FbtNaaXu77UTNJLXKKCJKGsnTvxm3HpTiPAkMZjj5hbkpVR5xVCXbUnbab",
  "key23": "4Qj6tFQKVbFErgiGVt4Yd4LeDS2puPxqYBXTv7wgPcF1Pae1xg7YTce4kmbaWQrrKjqmLheZGuhHtcKUh4zH9vpN",
  "key24": "LA4YjTUNXSb3SaqyU55Y6NqmZqVG1hJCeLCL22bAzDjhKB6wvLZFCDwcSaKMQ3Fo9MzmNChbSohUndYAmMLP4vb",
  "key25": "4JVSey8Pc3GySKgHZu44a5cPzHxHT6xmZanTGq8pyLBCnRoVxh7r86rMVoFqehQxWZPwyq87jVceDj2gdw27yVhx",
  "key26": "66mbmVg2CVTnYronobAynRxDdkT723gDELg4FDEJxQ8J7FdhrhSkexzaAbtVsAhch8n4QCRhSNbRUVjLys4P9SQA",
  "key27": "4dtxEZC8aNBdmrLXmfGiYvvF8kTw8BuCxDKnHtXkmzRdQzJRDt6kBAQqHmSQ9U8sHhngECenkhbC7koQsAscWQMS",
  "key28": "2v8N7xWq3NVfiH8KvrPeczs9nGT9vrfmkErBjfey7YGiTsbCzYg32aqMyWYzSyMmnxYSasJ2X6RpBfgQMP5CXein",
  "key29": "4mNvWgjFLXsti8L4UwSWTh8KxPVr5gnVz6Sw6oEWh8fHZjnC4BLWb62QdX5jsiFUnGP3j3aHT8xakiWYCCyffory",
  "key30": "3wgfcsrRbEY1gZB66JvEomkW9GnBarENQjBoeVV4SL6ZDHcUpJV3pjtu5aDn62KoCtb1zm6fA1Hr6EX12ucJG3CS",
  "key31": "5EXShxRMVomgtN43jqhaztkviiSbDU9f5YNVfHLng9kbThwFdnnJsmUmDDppmkamJidJ2nnmSKxFLZF7XZHvKegH",
  "key32": "4hAewVfA8xB9LhAt7tRtkhcmPxggELsKqzwhpqzVZyKQNDHa4bjjVQBJGDSfsUvXmcFwTivNZbjfaAWKzsD7D9fa",
  "key33": "3HKmRSfh4Kj8ZX2oyNL8Mkua7QbX9MzU87eevrmurY2hWinsGhMkzr9U3mbD7eXyhF77muBA6KSaTJSCNBQLenS4",
  "key34": "4RuMUNJov3GhwH1BnjpcPdW5P7JsFz2WCceSWGqzeVLuZMuG5s59H1uzsyUaQHTjJZtvymBurfj5Ga4LNzkFgHjT"
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
