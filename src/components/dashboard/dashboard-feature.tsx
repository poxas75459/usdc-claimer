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
    "2tshMfA4CbgVQJoy9YvDxzhL6v4zZAJzcbAnKPkKZ97FtjJcY9AShy79r6rmpGxyvgyA64V5nKniY2iNf3rzKUZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQ8j3sHmMYYKzGXXZ6fweifdKprzetvoEDnjGBRMhp3ZFAzo7VNqCxiEAwiDGNsqBMqhGTdMq5GRpd9kimh2CK",
  "key1": "2nXokA9MVCeAxTGxKVmugEgk2sPrQC82igcVRR7gAYZr5S2cQAiJAfG1qWSckF1DY1NVBFVUUXY5Tnn6vh3S4FL4",
  "key2": "4s4xPSFKcd1shxfSRZy1RszBahBhPumQN5RYpbfw3wkB33e66b8tB8kNYsCvbi3vbAXxK58TkUXGy9TodmWpZVcA",
  "key3": "24mMpkfbGhy9uNHYjUWnoCppR6wLeugLWoPqLe3VqMwyeL2QBFL3uNk3F4CF2qUfA3rajvvXNMpjiy6PUfa3ca8S",
  "key4": "Y857tjYWcqtDL9XYrhEV8VrXaaGW5bgWtVGH972ZkypHTNe9PcvbHujygfKaVmanPgMEKyetvzz7Uvsp7KzKBGM",
  "key5": "3N7tqp3T9DGtPrFskN4LtmvRRDHxtnvh9rGYPqqjJz8XY47nUg816q5VjFugBpmfZtfdiPdikkV7p2QcX9jwxf9K",
  "key6": "3MFACmY1Q8EpKfknR8Aq4yNvQfVnrpPqUCAysDvck42kgdRUbYszYgU92Qhf7oyy7dRQT8yZmwBfrYU7QKdPGUon",
  "key7": "3ninTCMZ24PFrS1oJBTufpjR8KFtavMKHF24sB1oPaRwrpozPFzAMWZFXCKHuqJAR6DJZScqh8cz2hK156GqhrkK",
  "key8": "VJXRg2fQLNaQV9PtZkpV76AKmLssgh9VQXcdbPf3WAbGJE1PQhCR5hzGQq1qZwLvhbRWnnXFFGeYqCm5vfYz8u8",
  "key9": "zfzHdAPoPxBeFDLsAuzLCNYRJkfbN6k1bPPLVxomTGsg1Ucmrp8ZMxLTANKRQgRU922bAaTyZGhtmWwLKsePvrx",
  "key10": "2qGontchHicQwQgLjgjPF1zjvn5cskLEdVd5sxv892oBZxvXAGBbmXtH9nsZrfF5dGMbGGJaCPAwsXu3q2dq512J",
  "key11": "C8TjBRxMkkFF3e3vDQnWo5sPrdNkhdpzn3KQi9A1csXe8ErDqLnKzwunqxJZRLrcmJFA13gppKtD5dUMUnkxNob",
  "key12": "BkrHG44vn6fBXXmBauFvgN5VS3bZXujCSUHZ8w4jdLaARRou3fZciwQfz2zg8yaTD4B5JXY3FZ44NcVWUy2aAMJ",
  "key13": "2hU9J9Ggp36eqsb1pjkC9uACofRK98n3JKxBfhdEMKjEjLxxXjMsG5jN99Qnw5jptWXxm7gZKrqLwPdRCZZXqWQN",
  "key14": "WvjJggZzaEjWpeoivLWAnqApKntx2krUpcHTkrzD7kWTDic79J6TvFbscv9wKiroBqbSL6NvwSQK7qR8bduMFaq",
  "key15": "4HWiWi6xW9nBDP7ZqePQ6GiKWkNHhEmaL5RGiUngTchLvF9eZbYeeJH4dZmciHySBCrVvdjLmjCn7e2o9kyFSUWs",
  "key16": "3DKeFapfipL5zSgpuXrDT7EhakLcm2wpxim5X1v9Ls7e4doNE4f7EfPcjAQL3DSFh7LqH4WBBRHivQPsokVETGAE",
  "key17": "2ion1oMBN4rZR7VSLB5bEWm79FZsZMjokBwDqvnAeSFULTsNhSQJpsPcGJhB44JTBUgCqNquh9zbj7UHjPTSyrzZ",
  "key18": "2yHBxKTHxKq4HyagBBzckYoRFRYfmsthmesKeXRyYQZZp9NAdiRujod15MV2vDAdN1BYhE1MFYdRGZFGVS1EyzfN",
  "key19": "2JmN2vASWt5aqgo5HvR7jdwBA7SAgasRhBQ6GC9s54jLVECmcHGCKDRvVTRUnw8r96NGtSw7xHbCkjRQ6v9wwkbJ",
  "key20": "2AHbwWFbmjkxbLT2gAbd36RzqnwN9zVWZLQEsv9WiK133F37sQgs18LKYXukgkTQfGy1wRGnRCceQyi4mB6zVu1d",
  "key21": "29bNMKnEiA2z1bri5vKytTemyrNRiF2hwWkHA6mWXiJytaGLfQGxWtMLMbW1rzW6QrbF12roBw7eHB97TMbehWRy",
  "key22": "5dZaNDCbw3xQSoBLLeGdhZzg25GSErVF4YyYaLLqMprhX3jbuSXURPPiAAzj6yULSxyjj6yPmASHxzXaP5nUyFJY",
  "key23": "3K5vHvDcMfekh9grDBv2WgjspzqHisZdcipyjpAHUTRgw2CFPSCxLdJn7p5ZthcLrAkQayZawVKvyrYuSjEK8hb1",
  "key24": "brskbSn9uedhK6Sz5SRBzPKU42c5HUBJL6NB6wLiFpYSpDYYiadVjsWt2bbBBkKT3v4cphtRLi53oiCfgeSYDjL",
  "key25": "2AUuGWNHRNZmX96VyTGgSVMn6qh16gJP537oQApzBAfQy333WykVHsfjqdgwguke76TK1xXjfbSwhRh9zJoJqhec",
  "key26": "9XtyjVXfACHHgZnpgVA83ahD9BB6kUqM1NtMJVmc3Yug1k9k2iACtnbkqQ63tBLmUyysVxnVgmTPqBV2Mm8mu8X",
  "key27": "3kPDeQgcNkbU9HBJz7NeniSML8KL5xTDcA2n33UgCwtYfBN2o6Xnob3d6AieYCJwm94PzTFRNfGwZghwHPkYM3By",
  "key28": "3Zx6PYsNNunK3gUNWsqQrePto51bDWk3qqW2H7SSuZccvXA2z4fYhKEJqv21ud3ecRN4Rn7sXgSPKfVuVLjufknE",
  "key29": "2jLjxyXY5bijkcrd5QnzrKfc2JeaxUfbsPgdWB5GT6J7iiSX2sfcNhaKy8XhR6qNfUj5ksjsB2gzMAsU1hbeK17m",
  "key30": "5oqRJnUmcfAwKViBBUozX53eoHQjYBw1BF5jS17HhwT3CNRjbJtGLZAFVo9ayfWaQrBMBFtnvmNzpWBSdZUbTUx",
  "key31": "4FChGFDHMqCwkPK4wuTgt4EsAJ1qTC3DiGQm3mBzARAVD6WXqNgbMimjgjxpcavYcGB9wUjAW9kKhi4rmZzesHM9",
  "key32": "37U8XzC9QAEs4PYXbxWLFLQVrueGnQMA1n3XEV1ZdUyVNf7RXaqkGwU12MCfZrJJsUKXi9gusnJK6J65NMhWpjtA",
  "key33": "4kRuEvvmD2ft3xUShhT7egHUrcbbo1GBYKsuVrzk3iAmuYHYk3xodZmnCDZY9iGX8gJhAYSitvPpUTJJ3GmZEYKk",
  "key34": "JdWqMBKraTfKUQV78Q3cynL13oXfzB75y9uhbeitNoJ53DEisz8rGUM4W5z2sDM8EumVebeqABvc5knYr6KdfaH",
  "key35": "4wVVshjsafJMKBBodLBqV83toeq8PdRCCrq81mcvvfuAMJh4ksZuRJR9hYQZxdLAyvkkTaJ2XYr93cV98xpWMG8p",
  "key36": "2dADE3iubuuYap3FQEBNmkXXbJ6GkywrNayhdyviyGL7NhF1sLrzK8Yjk1eRtJ62fstsiXXLqUFLke4QewJuiC1C",
  "key37": "5Ta1K6uzMPpa1KfiBZFRqVULzL85J9LWDNBpGyfGRAZ1pfeCumnT7W2p2rM5KBnaFBP2TWuepnBnYMvzT6tjiy8x"
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
