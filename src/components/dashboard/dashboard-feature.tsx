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
    "49s3zC7KnnS2n3q58ugj7gipJsdrTk6oD6UUuhjho7gqwRAEcRX4UfJnsppn3FjxtsqAuQ17nZEDHzoEWauv7b1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmdkiNro3J5kFdBtf2Qoc9yF46hpJndMPKmZJAxh3XU4f2bU9XtQM6NkbKiiF3JPkZBv7jfgeAp8GXUjoHYTFho",
  "key1": "4pWPNiv8Yh1diibM2JoXv3f7FtiUWM6GDnwBdEtktESb14pV7djjQixqvrb9j7jrwd9pCvqwU7oQCC4YTg92DdPL",
  "key2": "3uLkSGknwqYBDoMpdk29NGDgWutnZbAoFMB2UxK14GBtTYwzrDVLoPZ8cq834oc1FcARxqXVC9fTLvhP6sEvBQPW",
  "key3": "BC7fS2mDBba35VX5XvxoKTsB2iCJU2k7USRJDJQ369s61MSKoosZB5yQHkspkCMv9ZbQd8KbhstMrxfgieQHcDn",
  "key4": "3Ldo2aci6hDAjTcc2okpMj8ioQue3wfmhbHCSHCZmmo39937UMsCpYEo3k7h9moM1mYVq26MnFQ4A17ygDu3JVwe",
  "key5": "4i4YCSdybAHCXkkHeovjtMxUaKWusGRcJrjzyGnxyCMGBPJ6v2ENMGiYQff3u9W8PiT6Bn38cM8pT6Ed61vjUnZR",
  "key6": "2aRmmf6eDjsN4CkNHttoSLxA45181g14z7hkJCzNxPtr1ns3gussEihoJYKhfSnUtpmHAJfrJi6BaQpLLzkF7Phd",
  "key7": "yPSkZEhceQc9p5j5aSNYBzoEdVHum4JmzcFPomePr5QJrHAw952DhrQUgF3FxvnpNyyH2YzeaQJCmQGjy3TEWwH",
  "key8": "42o1zXanW9tkmcQX2qBjxZhXQjd3EBvAgZu6xavHYAkYFCvcoCrq4Djre1ZQUMqmoA37YumDq3pzWpKGE8qP2eUC",
  "key9": "3HdPKjiPTVgfbKMzcWHAkZAVhkApb11yLQUV4pkw144GJBP9FQqrVBisoaTjkNzVup3nLoSJDuugxV46UAgmRARd",
  "key10": "2hyXbp7QrWLX9zfJYuPAQGuoPRrRqgBJpqVXvvfgvARYJEuFPRqmjcwLon3t1Uzigt4BUyhD26QLPBgst4XZyZ86",
  "key11": "3Y1D9bvAy1Ce1T7ef8B82jsVsLyE4fPoz7DSoTD7dFHRjxr4Z9hbzPgXixwkqNxD2Bmfcy3TAaRDscT5Beha9Vnb",
  "key12": "2ZqwYhVTXz99uz8dVypzCdYgerC4nr4JGw6mnqZahUk6P3esS3YknBXTbxYKBnZRuYVsqwDrEad8r5McYCZmAQPw",
  "key13": "4PkcQDQtGBM3vD9QEkWmJmb9CwF2wWBUkpvpjyYNR35uRVP3inuCLaof7QX2tGWjXzv6G6niwvnoGAAsefRN6EAJ",
  "key14": "bbEmhc8tesHRmky2rnPBBK8kCo5h65LXe6seF3N3UdFH5c1HLEJMQUuFot4zmgQdQKoFzkfSf9CtC8RR8rRJkRJ",
  "key15": "5MQ4pfMyqjfdscNPgkquippxxs16Rqi6GiJmWbvADaYDVBvR4khwZFPTaCZ5yP5C2BWGUgs3jzzKtMPCaK2nUN7v",
  "key16": "3zZwKtAmECkZinEV5kNLfAZ35q5nHm7WjEpUM6nbUtvXhPmwJ4FhXjpy4LoCbUxVQiwKx3FNsh7HJBy2cp6EA96p",
  "key17": "jrMv2m2CSiXS3dBeqq1UXEQ29w4ptof7oo1DHNuAGJ19sVrMUvXvYsGyxdP9hQDgcfExPXPnr7fz4QjyTHS1cVr",
  "key18": "5GhUFiN2oFjvYaCBoTpu5zq8uutuYmsrVNGZuhacC1KwfaCmqmMSCQZef4eBPHbPzN8u4SnHxrBNN5BbYmc6rGSi",
  "key19": "4yDaga1T7yhmJ9nytNUyRBzjvJYHCayLoP9Wj96Vx7PS6yMe71V5478naNr8ZnSB96YWPh8XokpNLc9bBCVQWuH7",
  "key20": "57ct5eobRjWLF1XSqtVoCDH6jxP5pZcDNLhBxGZ3fZRCX4YsmDQnocpKVJDqWDZfqgvo4Tvb43emzf5ArbEVHGmB",
  "key21": "44zH1b5GH78ooLpdHV73NDsxem2BiTJjTGoiRk3zKzcRGwix8FDYcZk5d9RgRWYXMAWLQhb9QxBe7txTFaq9w5SR",
  "key22": "j9QqwaiGhXVRd2tZwNtWVEV4WAMKhe1pdPvwRBfDNjjfL3jASngzmAF7ghVtS9RDhxrb8Sd4EbNpV2FfuEZ1Zqx",
  "key23": "5LKp5ENExA2Tv35haWC2sY8FsDPjxngg8yZs74mzLDhtVDgxnDxWG3MCnZA1wa4essKu7XV88MD9cYrL3dj4RYyi",
  "key24": "pXUGkSe8HNWeqzQdBf1mXqFfYdAqEAHsrowTB2mWeFxT5MSZ8WaCYdbZZZaVwbWayiNj2DpodHwnhjLsGeV8rme",
  "key25": "24Pf5BeCfeYhKkV2tLPgLMR7hAZ1xkn8AeBQgHdymYJt4D3QkfKfdqRAJ57JC3abxonox1T1BYVjMy6MoaNM5MD5",
  "key26": "D5feBXg5jy1idR6PKxnSMqZTUNxsPFp6YZyb3sQmEfZvuguydxCUebJuo4WT7Z6DjrtUu1bipb6Db3SbXo8Kcoy"
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
