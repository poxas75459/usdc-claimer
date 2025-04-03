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
    "5sLQxjFGuQPyR7EiafKhD5xRJFwLTeCM14JXPEsibNLAWg32JpNg8ZW51cbNk9S8kFwSfrRXKXvQqt5GsFDikask"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQ2nuEorwmUtwxEZJ2z5UzQu31FXqLE9EyNpcyiDcmSi5smsYrScWNMbL4GSTXdMJWNkBEWvzLcXyVrssdRRJar",
  "key1": "3mXABt6vSQX9eiDFh6bNpiXCuKwWSpmh6eX4HDkYL13X67ZmHohEahJoPf5pbFuHBar16VyHZVcZsQrppEjb8ckV",
  "key2": "5jCZJW6tvPKeJuPciVr26MbqJxTwmmEtb3Ynm8fyaTfZkxbXnsM6yNXjxENKMaSYo9tUjaL6VKjCxa3wjt5HFVzP",
  "key3": "4ky2cME6xVQHj5SY8s3htgJ5U6gwj7m5ckE3UWsKJN2kHCH7sg19K5QvmQELef1LPyneo2Hnf9F1t7RBhjvGUnco",
  "key4": "4AnvW6ABodtZr9Nrv2iPBeAeaMb29gho4CiD7nnLYAQW5x2Yrx4CFt9NZzvnv2Kw4tn9MWy3CL7mRzBSX4453Z7L",
  "key5": "4VrWhjtsjvWEHe6JVThEQK7K9pQM8JpCeX1AjGN7iKixTcaE8QV4vdCj64RyuWHgDg9UtbGSYRRUuxd9zoCGEDTk",
  "key6": "4ErETAR8r8mhxK669UAAKcd2sSAwG379xzbf6DuCHxWQ4jsSFrh8JvfMTn1iQnZXUqWrFvAQH2YRBEmEytKGev9Q",
  "key7": "2Eypk59jpWXTgawyEZhcmHAwHbvPXLD2EvvWenSxAaeTEDY8JRJ6A8ma24FERTrc3mtUo45Ha555RcvqvyUpvjxS",
  "key8": "4s26G9aYK86Vq9C3yT5GKLrF9fdc73xvsEda6g2raVAz2jWQvEjuJjZ7jtDshwdqTiS17ncSTkbwQkv33RcLFjV5",
  "key9": "4nu4FVEMBivG2kHnbNsEST4ShrH13BtDe8kUxi7eBG9Hoh6pVfCce9g4ZnFhF7Fctmsvpwp1dPQmY2QxnKvAsgm1",
  "key10": "3bFS3cgBhXVWMHV9RUBgd5SNTp9bsXrtG9pKag6sprAUjwiAM4PtgKpmMtCQogvfKNFewWYtCNszujFQhXviA51i",
  "key11": "rs725woyuUK913WMdhRkTFzyJfZBsgqY4bUbY7gi1a5LCCpGQAz8Vd1khM2LQu1FvBpBm2DeWW1JuR57Gjg8qsH",
  "key12": "5HzfFUHnSKdYAPmBVKq33CzwBRrLrXvyf8C2Kk7UbfyDjhg8hB2bs3fyE4ytrMWtZab6SPQZHK6Yiko5UBgEXtpR",
  "key13": "5PKNcUViS2fN6oAQKB5E5ymPM3D1vEJqynrPFbsi1cWSwhxL39BASwnXaAjMNRuHfFxHD43yCbAkwZTCsZmASb31",
  "key14": "5hMsWYzLUa1Sk7xSpeVLk8YgEso9RD7pqY8VbKZ4nqS5zxnzdDSFojiqQ1ZTRHcZipffsfocXFn6EcBajEq25Zy3",
  "key15": "38kT1CtfrcQTQqcXVR2pm75J1F25dojR7BpwjfpasrwV8fmCMpUXtU5ztvpG84TAJzHEmL4Ketu7SeFxpuyqZijZ",
  "key16": "3bC4Sa1nWs1w8WHtkmjiWkCh9DCdFfaevpby3ghMsVEunsrRqbQKSkSgt8WuvqccfuuXTyuPd8uyeZYRDWZZkWEF",
  "key17": "5ZZAJRXyYTUtHLJbdu7Dh8UgBVf5RRP3K6cX4MX86fiHfJhd27Z22qVujUB8qf6naRCy4aKTU2r6Pq51gG1LeF3p",
  "key18": "4Z7Fm3aLDriQMvrhboFV9KumYTj138fRtsJCn9gJfm48FDKEC8MsBFHuBoGv4YRn1qxB165jDcwEDzVz1fmMX4Eh",
  "key19": "4xQq51AAqRupNn1UkTCb3EpdguhRPgzEK3mZLCtKikrxphUGiZEMJ8pgueK4j9uHBXDqqQRVVueT4yvAYFKooWgR",
  "key20": "3Ug8sjUJfGNx9g1Zb6MAH5tcpfT8kwQ9h5dsbKfN9maV3HK6VPZqkPTLZN2LNEZ26tfNSAp1tgYgpR6o7fo5yemd",
  "key21": "58DVehBbDBJmyWUPcE2U8utmCNZktoLyEmgCaDJYUSsSUQJd29d83qPpJBLMSJ9Jrnr2vDmjJUo5CeCwrSQVtjYm",
  "key22": "3RDF1gcVXTVoYVCPcwaZXyteJj92eV3LHs8LLtsagPF9jP1q7z2L5AqSorE3wpw25DDrUgBTVqjjCCsffxUJXYWE",
  "key23": "4eP5JMUhULBkAkepUt5tqGZHSz68NRkRLJJJD9V2DN6H9wGptzytHcJCfpwyrMgoCy1suziMvbrJKZAz4k2e3Rqe",
  "key24": "3eGBhYXJWiq3G6nvD3MdorFy5fookHgdXjTkXTnye85hDiWYou5esbf1uk5ea5RiczR3XJzR1JXK2zUp9P1A7kMx",
  "key25": "kDhPHkZSSxfosjy3LLFb2MLMn4VZ4yeZZZCKa5HYxQmxzXdusocf4P4eEMk4J4oFUVXjoapSFnipnphvhyyYAgS",
  "key26": "4aEZeXfqJFZwsUz1jbVycTSYgrpF2L2NmdbxvGHnBmzWZ6RYmBu5w6j3Jmzj3tLqtjAyyF5R6Sgt3nUyQeRPU7U1",
  "key27": "4DGoohUrz6MBDmvSR65skMwvFs59UsQGT5bWuXFKGoxxjLoEwMUThPg4PkZuHsRJzmNAXv5Wgv9Tjf7MT1S9tzLK",
  "key28": "4RTiekeBkLAQ6Zyxz9H3SHHd7w48UKwJvq6azzSe2JFdHvESfTg48RfDeysE6RdcEuUcTHxPDyLLA98Gqe6x2CJk",
  "key29": "65LuYhZqx7oq1HnJgepSGJFFnFDS56ki6X7zpNtTFnYcy2yr6wD9BXDVSCy5mYsWJBRDXWwDYAKH3dPhpqLbBHM2",
  "key30": "7d9mxe2Ra3kHuttUwZQtqdU5YkiUeywL8r1cXLAqpf1JzoTTf4dxcEATAZC8MwQQqnKhXFHXCRdmsPwAMmXxJNH"
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
