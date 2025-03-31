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
    "5whemc21YsEnZXZXy5R4J2uozzPN8mo3pz49KfnU4rFRshWGT1dW8W5iAaskDNeLVpjqT32UDTTz39LZ25WCRo4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhZCZuFxYVK9Y3pvmjddb7Yy8uXzqtqpfUJTDW5cs1hYUFGEeBXkEYnFpgYxktBp3Atw7E9Qsvx3SEs2dAAEXUK",
  "key1": "4g5xTYPNDZw8WbX6EYoKf8g8urJ7cyjSbQBUFaoKG7JLWfp4LkqX8P1XgTqEUMHercNhpBksEW7juF6yBHjhmMdK",
  "key2": "qVhJsaNn69XR9DonH8oWYXaQFysPCYTZ5oU5ebrTaB3a3gVy1P7EWaHbJQbRcgBMVrGHq4jnu9Jb1YRgJLwAHXm",
  "key3": "28bDCZjzYVQg2sg6NicDF47h4pZZfd5fpouvpvMqSMvn9PSMiNNtjf5WUmNaAuSb79hJt8rVy9dBYMQAYgbehLaZ",
  "key4": "38DttUVzKehVEE62TYPqiUJFQ6EYwxPwBQUSNJUSYXMQeZ84vT1jUUNfn97LRBwjsXjFzfQLrp1ko1CW7EqJ9jfB",
  "key5": "QLC1foFtuqCHpb6e1zpxoGGtEtVqnhfA4JZXQkCr1Pc6y6ndVxVmuhoumMZwTqPkskeTV5yZWxJVaV5NC9MKT6C",
  "key6": "LFb2cS9GLaUF4jq3xa2HpHfYRFdEVPTm5Wzc32dRA34Cfj7UUoquBRyaVsxUYbRLMkx693kz1DPm4TVYuXBJaWZ",
  "key7": "3WXasYJj2o3oR5jP9c6KE2dRdeEioZJsoucsuD4824GNsCXWseJU21TAg5bQwTfWh9b3Mq8gKZmhuwApnp3RaDwf",
  "key8": "2umfFR81bgae4L9bdF92xyUeKrJ698zLwokU3pDjAVzbw83164Aam18wo55gTqiQFk6YB8b63fbLe4ds37VDwmEL",
  "key9": "3ZGqud4ndBB228Wygk8zZHeuaUzaPG3bCfNkh4AK2T6HE8jt1BsK5C1tYuvt8AosdvoD8SZNk2wifoioR721iHCj",
  "key10": "2nfLbNEcS11fhVZ5WgrHqZYRTtBKUEx8e7vXdD4pXetpiCruVZaVAujxm5rwSLy8KdzZNjWk5hMKjVgRByJiqjeA",
  "key11": "5cEfKKmvt5NGuLbuHiNRiJwSVRxo1L4bsEXwqdk4V5i4GzZU7VMgBPdyTgwKDFidURbdv4yrb3Sok2q82PpueWFh",
  "key12": "4YEeNtonQkjPDnxn82iCbHTjcizb2k5Ki9AXakGdV9HzcsJDrz1ARxYh2xu7drTd4pGPQeqiFdP2stkcgAP4Exbs",
  "key13": "3h9QNpGUstaP9HoaGbGj467BWYqiHqrw6322zpnCFmfnM6rjEPjKESs4HbMT1UcWK68hm5tK2MNpDssTXm4EJy5v",
  "key14": "nGpP53J2boK3M35oth7Lubkn54qnDAmSecLef8KUFg1qwiuoTbW1rXoNBTciAZxY9WD8HUtxtecnVegUfLC5tHu",
  "key15": "2JeYixasic78GHyZazaiEAbCsr6xKM77nrqDd1fCKyTwQa8rFTq3KbRiyCiMSPbYY6MwFXmyXCLE2tWm3Zfoh69B",
  "key16": "225gKqJ6424uABqPr8nxjceXMXnVRjnNgUGEviyx27oZ2FE1q5uKFew1Kt2fuAivcVRYHJ5dNgjwcZe9TjFYiNXK",
  "key17": "2CNp7twfU8C6vGvasARoLwsQUBdALffboBQvLjT9pmsgYJq42kWQwmuQmtUKgJSeHnVtk4CkzoeRTxahfrvxJxra",
  "key18": "5JwNomEEQvWeuzgzcVNHm5hAaZh6y5yjTefbNsaytQhsPRYFfqDvhKPCHzhKX9avKgx3RvzT8qWKE6JnaAkxWUbb",
  "key19": "2NoP4HezwsQnJXpHWzACqmxfTorakADNpxmTK93zcFDTuo24gd4bhg8yaJtysHZZPKaeKnWMM9q7StcGibAvsYkA",
  "key20": "4ZDkVNbyH487gdkpTM7kQW3tfciSKrQCxede3UXEfqVw8Sj5QcMuPij8wjRggVmJtennf4PeLspr3DEfDPmDQxES",
  "key21": "3C5ZFWPtFcCPcrKYTsxC4sD7sQB4LZFbNRt6ZdftVuvXSCj9yLt21mbkMquEuYwFysaUM8Be2vph4kVbsub84xXt",
  "key22": "2FFW2r5cAkSfCbCUqHUx58eXJ7yw6pkat7mr9zhLEEoQaRDCAEKuDHLYGzeYN9UyikQWSKUUhGHNGunjP1W3zGeD",
  "key23": "21bWNG4qUq75H6mz8tT693Fnk153MSaFATwawPwPwaCD3ysnWi1YhSPVN7yZqSqTNBTgonSrZQazFg9AkZzioWMy",
  "key24": "nsCKiKc9Ta9MG3ikRnB4eTdeR4jSfs1tru8WtX7HTJBpyFV2yL7jnnfpdfCVgLXLmZyJ7GgFCr9i8orFW3QZRF9",
  "key25": "iRJVgNkXwQep4Vz9Ndq7Uz3Ex7WJLZL5btSpghqw9upDFvwo8FMmgKrwK7W9xPUb2kA2FQx5d7ajXU8wGXpwDyE",
  "key26": "31AbEyqnspHzZgnQDCc9X4LwnFMaDwCMFRg45r5ubasqA2ykk5e874N32Xac6nhbuu3gKYgQjuM4n77i2H3TranQ",
  "key27": "48LF6xKakkyrwoyaCn9T3KQNrKFZKo4fkNR52eLHYyE7Kb5m7RG4EoSzqTTa8Mmjp6Vf8NYFwcgKVyQMNHwyDRsY",
  "key28": "jjRrNt6Nsw9o1MqRAm76nbgz4UJHTmzK31DFnWAKJwbYNnM3L1zHapJEhvukshx9fbtyA1xW1dv1dwCGSD3uzKg",
  "key29": "ygGS2xtgc6jndHxkYnLSmfpc56Udj1TtwkQ3kLZjxGFQcXwNwBdEJwfzckNvSha7DmNb3jhoEr3UmvAoUtDva4N",
  "key30": "nBy1bKj8vfz2csPtKCVFXgk4fTE7pv1ZzMzjcSdRrmYLxGGWjmru9NqK4FTCvgG7B54zDbKR6cERZYCwvh5D3z4"
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
