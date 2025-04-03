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
    "osEPjkmGVL7hZoDB1uXqYCnaBqRN11gABqraKp9jySfQAF2cBMjYyqN6sSaAcXCmprXz3kVtBK8F7cHp7Ng482C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgyHwpV1sUKB8zQVFbYC9frUw3GfSC1Y2R4GCevpwChVLryxYZjS5wBQN6bP2F9aCkeRkhetZ9RaG6eX3J4BwgV",
  "key1": "UV3cDEEbDQMxFrhzkvR2acpjTrwXGvPMYHYycXoawdv4wAF3EkQt191wgWtpK7wZ45i6XyeNZNw3ZRejo8Lt8Ve",
  "key2": "9AqXujZfccBXoSxu7gZ8rMXEv1euD4wt5vepj5xid6AwMkCcqeCvXEuh84rVLYBw9ncjNMW2VzyKp6DHRwQMHBj",
  "key3": "238wKrSLz3o9pmbk85WVCYJu6uHgg74gTBAvBTUUzxnUrW24A593aYGeA5ZryKv7rMUuQwk5VzszkMb2vBnhfJiS",
  "key4": "2NBNLE9A1t5LFKMv2WGigidHQwgXdKZhoDVnsKZntLXWCdggWKaRrJU2hGCmETbD7FZG9rUobEq8s6AuYwkvMtSQ",
  "key5": "5QcP5sGJQUaUhzGkKp3wzHYjFpJSdJ3jBn5FvYznVC5a4Y9gxh8gRG5tqiZUqJHanxH2fnvKMx5zFFL8RuamKpHb",
  "key6": "rmycR9WFBzDZ7dnFYwX9bLDHg8cNLwWLCsRYovm5pHHz5wkdgq5jQKiNKGKUfMsFpn3V5n539PzMZ5grXycjxrD",
  "key7": "2VFDFBKDmTFhiQGvVhuscCEdaLEwxseKtMmUmAK6oPjmgrU9wVimbxHhYvJ151Cv4fBEP16VviEoWGCbs6ev1Yso",
  "key8": "wxiTXR4V3vicH1xEWoo4mXuWSv2n1m4DjuDKraEmXpPBUThJNTsgfhxMKe3tFWRQF44nviteBNvW3wmkeUQS35A",
  "key9": "2AhwK1pqSMp83ertaXe16E3DEUg89CbvQBTwRGJHksHEjA115YqpnXi9poaeU6UW7iPhLcXdr71xgmYU5Z64X87n",
  "key10": "5AwWrTsPmAAnS2vYj4Jt2mtaRVDkCpSbB84jzRb6596HjBZPxz3jVyFf3gWG66qxRgnqSEZfVnWZTwy7F1q7YoVt",
  "key11": "5D38cYjJ5YSFNNW8XbC7Np89bBsXJmBUtikk69dDniuq1LFfKN6rUDKZy7Hgm9onDshVTDExdnyW3uw792o1UkdZ",
  "key12": "3qXqLcsmCbpnxJEJ6eXdMHtVbQ1BWnhB83xxVFr3eiKLa38xkeGfptSBNNDh7gUEhW2PPD2cCSGsRyH4RgfHxo2D",
  "key13": "5UbUV3CadQr6v7DhVRqMAnCHQnyn1ZT3kqT5ShKuEnizcMofcaq2bcMTbWStK31zvdWJccu7D9WT9eNHoXUVj59a",
  "key14": "5r7hxw4YBSwCCwDd89f8Z9f1BP6Vw6W4LKGfoyEuY6ydX3e9dga6HNNWEtCKaJpjMq6XRQ8N2efUTu9a1D5ra2gf",
  "key15": "EsnpkAKc1X7nfmnVVoHATgCfGnqMc7WgWrr25toM38maGLKjRZRwVLsjf5d46H7JFJ6sTEY5n7okD5gUbsso4za",
  "key16": "2kEP8SHUDcy67qWDGxyZJNtc3MnmQeYu5SGATVSYXsCkEWnsKFgBicExmBLHHNGUyBTBeHKhPtDxySHwjeRxs5TT",
  "key17": "TLksKHUxHA61DSUedLWDbQQhstJwyHtVKK8EuPRQ3zDGKNy3prUxsAJ74Sf8VQ5fBYqgfWmWiEf2jXpVWp9cqDz",
  "key18": "65A2DmyXC4g6tRxXYPz2vF7aE2gpANAFZBs1ALea6vbK6iW6o6Rp7RF8o9U2ZjFATiivhMHgiQS55MUB4gXZddgz",
  "key19": "4bpdS9suqY9zEPQhQFXVT316qZ24nvMHReaLDj3WVR8cUX4NhdrzQCUNYSTWKe97GyKXBfAcrhk2HjjfUVsbQyD8",
  "key20": "P5fsuSD79pVobxuc8AmweEphztFs8gf2CnQGvGGb7cNqyjJRNHdoUoEGG6koLiM8LnU6iqdBEPxNjxNovqBmXbF",
  "key21": "4niSrJqHxyfnU9a8eB2Vb6dWARtqAQxgG1ofC5urVbv6Se5ouzLd94QxtpsyDqgoj2r2LcaG8MLgFmu6PaZEwZgg",
  "key22": "4jes1mqSAcWgHj2ADQEgvdw4eWgQjaupfPWvQ1BZZa9UmcL2kcp4Z2oiHU11CcVFsBBV1GLTPSqTzJ7ppWk6gSTv",
  "key23": "5aeozzoa8hiBaSkhFZSZr97n4pdA1RUujbpPr3wMMdAD5wULrVzFYaiBqFD6nfivE5NiWnnKYna1bohR2kX2L2jg",
  "key24": "5B3oAk2ZEBMUWC4Sh8cBjxSX3q5tM3Lbz6hfKCcKiQqgVBR6P16iHujbFLf6c4urEEKuRYYoW9rdFNsisKmEocGT",
  "key25": "mXWtuFLHpzLncynKhRHLNa58auXycvKoCJEmvnFyw4dZJEaVvM6tLUQZ9mMeL18ekj69WgsoVxGGsP9Lfi8ujz7",
  "key26": "ea71zEAmz6GmgGwx5U1AF5eahwRa6genZeucZtSPuDHNGBHnQ31QxtC1TK48D1EfS11dCSYgzheXicUGEh3hFqe",
  "key27": "XyYw3LcZH92gcaB3dUNJSVMpXbhsuspQSL3ranqdNFSqvUnnMdTJ8cRfNsAXEnRrhkBxLA4VLXkiV1ei7Xn4VG1",
  "key28": "mX5if5hhqXCRpfZZh7dWnQJ7DXdKV5KZxjp2ywukde7dXoV4weVeq5twpKK7chC8mNATeb2S8NvY9AETC4fEg7a",
  "key29": "5SLicHn2RnGc3zGdWQtwqG3Mko6dstdEtVQ7SFtv694CY6JzCn6aB2cT3ZqGpwwecaqJLgxsH7jgneBdiLbyGp94",
  "key30": "5jWyn9SDbJNPyqEW9yGLGFKyw13ds5HhJSjPuKtaeStxjNfYWynZ38sncoNwJQchVcwZxfeM7jCQx1QjH63Zhfny",
  "key31": "3XzHRbJiAAC216dPRVcETmJ2zDXyeQDEFEAsGLC4Sx3Z7TTyApnk1v14QpgnhYkbhSai9X3usXfHsxT4KPG35dyz",
  "key32": "4bfigmDqTWraSsiq9mG9Adku5e73BWdd7r7dyWGbc6opPxREY2ckxZgDhdf3skYgTkpYcfCBVeg2CRjWDipF21og",
  "key33": "4kg7sxAvUMeebdf8FNUP5zmeaDBSNC7NXr2UETGKhQnV42zNcEo7djP599MWTBW3v7LJWWuthMWUa53mCXKpwqWW",
  "key34": "2dUV19CBwLuPmR27bWMUiKGxwpbefMvK6hQLFidKhz8egUL4XXeLCp9PKgShajRrQMQWC6HoVtnkhX7yVTb5vRRQ",
  "key35": "2n6dBAvZ8t25ttRKGCnEfx68ByccFSvPr2U67uKKemQEbaXGUeMHxEou5MtPJ5PVHrSFEaBeuvE36gfeRepQTkG8",
  "key36": "5B6iXZ4h3pa9rjgAfqzeNuptxaYdzpEfL3RVbJx6HpswZo2n39h3qSEmaGakgqHs7UYNoY3FU3isAAKoiFWuRt2f",
  "key37": "Ed3q2nLyFc8VeFBR1J6qEdsGZdmY9JndDVLooxbmF4BPva9VqQVtyideUcbq76VDe3sRDjfSorbYFyK2AkPft4P",
  "key38": "3wPjiMoKeq4Syi2HSS7gZP7xjmQS6kWcp2NuqkVndqsKRSZVo8sbYeremJx6CYYn2gmEvKvbU4BzAFAZetmU61BC",
  "key39": "i2cn7JcEZzG2Mq3bWQARKyYvax4v9FTDNpmAoyCxB7JSsNeBNYWjGcLQ6SPDqZBxFQW6PKJNknVcK5BZ8ZoBaAM",
  "key40": "4sApu6QNDguBE15toMjxwgyA1g2gVnPPW1BndZ2V5wTzAqq28BVciX5Bmmk7N9fj8Xz57PLfhYcnbZReiJmNpiPq",
  "key41": "4pKhUPDbq3kWvA76z944Em6ZhytTLoCP1pMhe9MYRwd7ShVygkFdhb8MAuKbM6QTtczGvobBFNUo5wEsipRirtUh",
  "key42": "2gezMYhcGMFZmdyxXsbYYvYe5wJaeZ8c6pvNKbJkub35xz9UZavdi31n5pKsXyxM6Jr5syW8UKE3EDutUWDPtUkd",
  "key43": "oJxgBwbot5V7J2mmLFXwQpNwcQ9cSqnLRhu5VoPbTVLxY4fGGcRSajXsbSsxL1LGVvFoeuEp7XskbQSfCkkKTCW",
  "key44": "mWU7NKfXXWad2XnL8b736iFMQQ2tBiU9YGRUHWiQQFUuhzNutBhaAVXTdWVo4dRvwdQg6BxajEcnAxWexLZ7STQ"
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
