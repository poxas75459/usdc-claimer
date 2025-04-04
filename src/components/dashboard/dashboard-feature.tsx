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
    "21iAsttXfVqvs7SzU7qNbBD7hvnTHAqnYz3BGbLtF8wMtot6eaXRZQhgKG7s7RQwKh6g4cXwdhBhX2UW7aH78SFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsMc4Qnc5mX9ayMWQWQMnN8PwmGuFun6PizzXPSgUmubdNjU8JUxDYztMcq9Y9dQx18z81DW3MK52jtFuPeS1nH",
  "key1": "3CuTrf5N6E6uMNXVtEqyhmEgHfEPNA4Q9wTHbPsq8it9yRGdZ2BhCBwpRuQqwMph6gn3ZzcLLF5qoF53tkEPmNu5",
  "key2": "MyeunLDHnsq18X3h52jc2K3A6S8bRkYR3F1CmSzxKFboA2tPeLZg87nSY7j41neeSVHTJusZnxpLywwXm7DUgSQ",
  "key3": "5saifSMNMo4AfUnLSTrwZFEVUKfXsXfrwsRA5HDyznPK8mad87Xpugb7fb1XSrufE7cxGCeh64H9CaMaafF7dwkH",
  "key4": "8pxYEmLardmrU7U9Mykrn3RtLyHWjPd9TLmfYb2qYXhbiktaa5PhRV9d6G3wATwwffyfUCFXrjdpgb7d45Ba2wp",
  "key5": "3cExN6i5oWimzaijTc5SutxY3hx6iVNG3ZmW4TG8dsbNQonXvBcqcmFjWp1Jq6aL4KpuHU7MVh4ZVZdLsQVZKZu5",
  "key6": "2MQoZWDXzWZ1uSrawbTrW8q1ja9wDhLKirWyAh8UDgmCfJ4dxVak6qQ2Bios9J1CCszxasCWmQ6ys4P2rRuxzQfZ",
  "key7": "5dr5Q3yuCTjJ5YawGrqaPg3BgFaYsFcv4WaoHjE2CJp2YCmqzNhzZzXwK5URKgU6PetfWMwb6vbotsMFDwNx3Hh3",
  "key8": "2yWTbwJnsrLPw9sqDA9yzoECqJMV9Gi1bYZ2peT7m6CEZAJ1LKPYTu56Qb564cuvgrsFzBcVAQ3uDcLUKgHXU3nC",
  "key9": "3Aq381GnVsFv4PGXg3NvjwoMKpVu8PsXRbXpJpwLPiuztPie7BW3Y8242eCDpiCc71H6knnWbh5e48da8pa6KWKs",
  "key10": "qYQpex8qiRLoK9o4MEkqwZaKsybLneFv2NWUK7wYG2WUemQr7ajMvY7m8j9uN4URHYmPTY69z5RkL417Xseh9oY",
  "key11": "4TcrGEZ79RpZgJefMunp62kv8wWu8hKhuuvtHqsibg2RYuKQtNx6DyZmKnKgkF9994UitvGSRfzgqC2xz8oJ1gew",
  "key12": "533CqKbWgS2sTwRhnAMrRm3f4MLeFrHPvh7weoKvDsuJjzCxbwyX1GxyeXwDWF2V2PQqMLZgMCoQEmUz7dG5PWCh",
  "key13": "5WvpihfgPUCq1mALna6V3esrMEQ9M36MsqFgEvGhpuDa3rUJf2x5WDCUj5aB4xg9fehixzM5bRBaEH15RUm5QQe3",
  "key14": "3FKA223fjpwcGD4HoEArnQLZEkbcZ4aZeYYq3df3KV8q8jeaQZKvF93KA4U4vK5LYFmbYvbkAQfutoXBb6wdHEu8",
  "key15": "4oiUdFAvZ7BZKYpNW7ij8Xgt269dbiwp6YH7WYevd31buGBUYZErv7EyznVKbk9PYTCan177oJb7wd6nrm7gKjN4",
  "key16": "4AEaYCw2uVsgyCiNYMT69vkAUDbyhCne1rpiNQuGFnsPdy59pNnm1HhSRSbqMobZNUZwLo2udqeCVwWWXX2HwnXx",
  "key17": "3mMn9ukazDaKH2YMZTuLFNFjQimWJWRxKxQ223FGNBs5E5JizkqBhAW7mT2oq7oEd18MS6qG7yWQzmsVPae8uL7M",
  "key18": "3ZHTCxZzyjZuw2BKmSuV3BJQtfBzuJdpXtxYuUCTo4BiS7h4Pwp2pWV9c2q8gbCxGmc5tTx6w956gJUX3pLfTGxD",
  "key19": "2n1puN5kXQkxYtAQWqwRzgekBJqC3YiEVkGjc9H1VZHBWQ5eUK7VFsUPpbH1uVW21b9zjCNVm92dd3EhWnXc5azu",
  "key20": "VHMBU8FA98rahVpQhV5ZXhMtaEFfe9zAsBAqm1xLP8TGeevgeyyxa4EBc3B8kF3YxzagBrSREFJ7s2ykp3X4Dkn",
  "key21": "43VKSbX3dA4Z3Mk9mXtHknkkw9NArqwnjX7mUdcveP4GeJi6GSCDMS6hCtvcKA1pMFXEjHcqT17TAWrKqnXoD3Yc",
  "key22": "nBVpoyetfm8DcccmibFhvZWzmcJZ1cQL3jrqeJ9apSSVgqJzxFZxpnHX6TkFkPtPjr4F7ohzd9byWQsK3ykSGWL",
  "key23": "Esybu84tQHkzXYKzwXFcsxVKPRK1FYgBABPkYxCqVktxnARj4Ky7HKSX8kL4xdUEz3wEzNaSENZCrEXwX7rBFqe",
  "key24": "t9SZviLpaRYwWjMRUMqBx7nPU4SU1aN6YQEKRnwiSgEjC25j9AvveyNaYByodwNc6b68G86arFPM39fcQWuVUND",
  "key25": "i7EvXUwVGEc81uCvMNpB3i74tF6aLtY4SEzjBz2pUvgUKi34dFDhd5RfDQufk9XhnrrwHUn1qBDuisKUmugTo1W",
  "key26": "2t2pmuEBLjipXfAqcsggFdvWxV7iyHTkJsLm3miqSPbBPBugr3WEuGaeVqqamYRf3eVUJBZbWvpybib5Mqm4gLK6",
  "key27": "5DjZ3ehGowfsRrP16cLxLGcL38UGNQwfMMCAoFmXdKX5WuC1b3NxVQoqGx1vJVjYgRcBKTXjGtHd7LyUTUkHkySo",
  "key28": "iDfvHSAH4EXHHj7Bx8pVBHCPuYkadDzffSkb2jf6ygifdG7BUQgAkZoEcaqMkS3WfZoH6axS8jpcMAxqGMcGEuA",
  "key29": "36WYKvxxnS2scvhvufKWboFAVtU9W5waJMFBZv51KpfzskDa4QXgERRPNwuJT3xgca9MvyCSWyP9m3bSHBsCB1mU",
  "key30": "3XzfnTfsRXgRCaE2uqMHuNKQYXvranwFVyRctq6n1HzxidcUTtwfbPUeCCq785YwUttdpon6n1xtDWwHx2sVKzbc",
  "key31": "4ThLHCYeXegy3kxV5HMCi9EdS3rrTTcGaQrSmHvPz7ZnBCUggouEhxagrExbdYfRwHcBrvGhTYG5fgbAwqueG93q",
  "key32": "4ZUKC34EdA8rqU6yYhBb6DuQZM7s3TxPsYZdUeTzaW83daHfJfexrr9c5mPjao4MDdmPq2KJNj7VEbycLNvPqa93",
  "key33": "LJkkvftq9jRLs7PRWz8sC7MMTp22kdtw5n9K8aMfkijAz2HTZVGgzjiV3CxM39ZwtrsTjnBS3XBTA6xBLFXsCYb",
  "key34": "2AANFcaAoFKCUEdTsZ9t38M4jdeCRLekJKSC9zpnSeYoNP5hLyzRJfaAcF1P7QUykGvydnP3rQUztFybeBUvRN29",
  "key35": "28hypC5sn4BGGpmPGfXSLohgBr4xGQVGJbEkpzBeupv2VjHU1CjhoM3FSQLv6iLXPC6ajYxG5j78xVNrywUm5CeG",
  "key36": "ZAgGtpMuY26xUgJoVWiRQmsvjfFwbdtdEDSgnBTooJmRFH57v1LZ5rSCipkv37i5Y16kvsfQB3tJ6ydNTuaEEGq",
  "key37": "YFGVKTqwBmgEWWw4aWYmeCctaV25GNXZi4Y5gbPS8w4KRUxTXJXammr2iQLcL8r9FwxFgwZnbyNhBfGtyhF6nbF",
  "key38": "75fEBsqDUfMtScPerwD7aFu4bpji3E3716PAnJ9PED2phfrFdsgPfpzKnBuTC6rr6ZikwDLoHWjPXXBRgJCP8tZ",
  "key39": "4qc4A3TkZvnYQXXh7iztRyB7Fkn48Yfbdp1jGKUqzy6eDwxPBjVYjCqLmPZX7CistHRnTSXNpdinS5m9x1jW7FBW",
  "key40": "TAdjM41vfUBWE2vRqouCfcRgb7nyZWmuGiAe3MnZtJHTstX4bZSnVB8KwFNZivmfcytomsPHE8hGSymdVG7tn3J"
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
