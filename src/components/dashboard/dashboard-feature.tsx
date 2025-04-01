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
    "2gijrup4sumeEoLnaLi4VCEFufRcxQ3MDMpwKDSZTbKTLC4Rd2iZV5WzBpdprekezChUcFtJTbzDuh4udWFhUY2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ftT1PJzYE8GivzYdz9RdLMea1ycWT1HB8oYi7FsprAJEHQHyRVeTxCK9ng7degdzXNE8TPe72Hao6Jekhr1hF3",
  "key1": "4zwQEZ6Q54X7owh97w2dik843bXtvxCpncmMSZgwrbzDFHXSmHVgA8fcod7seonUDTVhCxMnEV8aWq1TESL9FyFo",
  "key2": "3JuxAtcX2FjR1udejvyV8wG2mGGpjGpWF7bCebZkp9Qf6csoFwVR746GaC5FCFKyoZmG5sFqeVG6AbhSY4rxgc4q",
  "key3": "Gj99gjXTa1GDB8gjEva4jWTPAEAJhMt4QadvFNcWPptkWJYMz5gvykkNj3s3h952qGdLP4vVuqsVg6VoG7J4CdY",
  "key4": "4pwhaNFPags5Pngd4K5ksEPEbZbkx9z1YRsAFsVDSjKRif46KSjgwbZHLzhJeT5TiitTsdFMuef9B8V5sU9KvwPq",
  "key5": "2MjQjy9CxjEEZVML2xLjkRZLTvtzqTtmPURGBVLGtsJfgcjVCEEucv6mf2tCWS1jCsciiuNw9qDSiJf6gqNmF4T",
  "key6": "4UErPoLg9pou793ZSRUHY21svbxFw8LsYgvSJ2F9Rnp3kumaaAvif6MntpyPThTY9ojz7XF5ZEodGYroyAmkYMJE",
  "key7": "3wbcN83BCRjTxjSu3zVoEAVT4KkDn2GxywEQiSwtY5b6J4vNgAfw94izW5td6FdhnnXVXWSGo21ypLjAuNRbCgDw",
  "key8": "6PxXjpXwrcwciRxPkc3Xr8HXiFeeExNjAA7SxPvqtEj8rzGeU5Dy5Fb57psTFGcgTJgwQc54Pbuegh5G2EvUPYk",
  "key9": "3upYMAHPngo9YVfYZqj6Q8ydL3En6JDfDisB4ZKeVFAdv9oaZrTZxykrXRxyK63D5N5i3ew9AaATzT7AgjPNd5gc",
  "key10": "29YZRU3oL5hXcEAviD46zcHtzdS1KG13RUaaP5BaZym3kkmj7J9QxtJsxwVT1ZjgWwQBm1JuTE8QFkdNWkqk3iNL",
  "key11": "4qvrigvVUzqdHywJzbEHK7cUKT3viaAt2VKxATrqZmYvcwezVvCSJaofRvi1Ge6MZGYMhhNHJoyimrjgft9oRWGP",
  "key12": "2MxG343bWzEHrEzZgiYJYv7pAcYggzyD2ifRcrMpLVaGT8Y4EiAZDq1xCF5jpbYfQ39de7vj3FSHr3qDyh1tMaAV",
  "key13": "44KkBrMQneajcdqcoQK8Hncy8EBJkXGW4YgjtAPKq4wYr52yVg6kgT4FpXqZYXtGGNXrCGUi3FohDRreBmK5VxAq",
  "key14": "5nw4AUJ9z6QohiwZZjLZ7aaKxZuiF7naAo1SfBAFt3Sm7wAbHYEa58DsgTsmG3ZMSUywPkyzjEz4YPM3Pt27ugwS",
  "key15": "4VKVA67Ue1mqFpBPri9PansgxkeNSj53kWhKin8u98AZEZQcMDNgc94QdgDPhe7Q8af1ot9miWoz2vpKdYWgxq8M",
  "key16": "39XXiWTASxpZMuACQG31DSTAk7fp3wPMtK27tHtZkNW3yacpEfTaVZRqyMqCFhNR4LuW2gK1yRKLG59XCJ5W8o3S",
  "key17": "BWXGqQYMtmdWJwf9X1P4D8E6aPJepXfepuhgAYKbYNPdbcU6FxkjMGoCL7R21G1oTLTFrukDLKcasPEqPRSmcKu",
  "key18": "N4YuiSHxKBufc6KFsYaSj1w4xhnRrqzTdbXY9RbmMD8h7z7zzNgWWVQXdFshw6cbQAaRZd2jCs1qGDxLPY625Se",
  "key19": "3hJc9chhxGetPDafqbXcscqGYAKdDVw1xdH9CgxDeAzTL5cqgVJgpxrr53p9WF9WA6RmaunwNpyr4aQDkbrGGc7u",
  "key20": "5c2CdPhJq67bxbS6uEWS9JMWKXzQBfzAXbd4S4wRry9MWksWq9p6eLViQYbAneNUqLX4gpXnUBsxvmEsTAdG9ppo",
  "key21": "5DrXqCeRQoqjK12oEVRcqPevwBdTotvaf1aGrqPXKFYs8WA7Bti7G4nEcqRjqPWrWBQ3DmFpavPw8XPSX9RoF9No",
  "key22": "isniehZwWkP9gzTAMnj31ryWS7vpjGAuqWKN3LA4i8JVGRoWQzpjkLN8GtYMhYakkrfe8YtboFumjKqC9Nzo915",
  "key23": "Z14TA6s9CUUrPhQX98FxXWx7CPHryxbsWUc9QddhKV5MWMSRXrBs37m88817t6Zvg3taw3kftPBjfXrTQZtjHtf",
  "key24": "5RjBfLBxg87nBuatXXBDYfzBmTxMXVf4NKu8xDcjdGfhV6oK3E899N5TzjjwKv7kmzvzXh48mE4mY2LPv5qDcSkC",
  "key25": "5yJC7yTyyxpq7weS6njpV58LiKQbVwP3jvvpCBNP6zeshjDCw9gsiLKhe8v8uPXnqUbfJcM4Ts353yKA5US6VWb6",
  "key26": "571mueMWddLqVQzgaFG4Sko1ZF5RFS1zPerK6NKd4fmJv9CM7AD3s6VjEpZnF74nTYsUWUbbmnk77VNP8nZzvnYp"
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
