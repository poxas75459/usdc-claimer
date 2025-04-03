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
    "2f1D72Rok52XLBz1GJ9LXmNKDnRNTeJyC6ayhzK62sMUZATa8q6zF9ZesAmME3J8DG3JpWKjFZc5bXLPHjAm9YYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9F4neJCDSujwcjK5GUcB91WC3EWQUKtkdKimyqBphX1sPFTHHbnYqcEt2vraVBRDXqJVJDUnPYGn96ojP2ftr7",
  "key1": "3RU4PXgkLY6QLeHUZqxtYe1DQgdv3p4JyALcTeG8djzXMsvcpekVcMJwz3Ef6z2zPV3LaJ18nheBd9BNeysUs3Ng",
  "key2": "47Jvuc7nPc1XzqRFCtwNQjVjyjCCQ6JkpeZq8kKk3wQoh2fJnRSbLAAL4AUxJubxiZ9GbaG2RSLxSb1hx3pPm3MV",
  "key3": "5gvFTaaVnjpsXLozyBz3ns84UkGvTkAGVz35gdS2udw6SfyNQuvEuD8aFr6kLEuMTwGt5T2E6snWTgMBfMDngjnp",
  "key4": "uXD66pyqpfvtqpUqHukkM4NUzJAB7PG9KtGk461YrQGqXYuKu2ht2hsMLc59GZYjSV8HqKFDjvXEjPSUkznVjeC",
  "key5": "2wfpPnvh1M1XkyBoRJfJm1hwSbXJNToj2bbbe1y2KFo4ALRBMuvH1f7uVKZozA2vsb1svbMR3ZJX3jkBuRKkp8a",
  "key6": "3nVBb6b5gp4QfqUUD1doRs9CaUSWW4TNUi45nk2WMmP9mY6DwGN3HzvAhLMDrD2cEc7FjyvKcELy1JfFK4fqnw73",
  "key7": "UKqpAJ2EEofKdNLBEhBRr7c9ddkysFzLPYooN5mhNi99YSZu7y9SYcJLZtFZGzJvb3X5xfErrZM2zRZ1Lbpw6a5",
  "key8": "3vn5Wy7k7pPZHm3bWjZ1Eusns4pZyvxG2LMHwEcXhGuP3BaUSWqR8CvcDL7zebZ8kf5XVYcHEP1dennjNVpr2NVw",
  "key9": "LK13NEYm6TZFmPbh5FFdxvdSEu16QUDSqfM8UcxRVTBjnFv3MJ7y7dgUVkv7b8um7WztPdwFXWqLjsLjmK3PgYB",
  "key10": "2yME5ran6DqKXzKnDatgq62bpEXNNbKCNUFp7FK7igao86crzTHW5R9RT6vJA9mz7Di8HFwJzM5oGRcBwHJ63vAU",
  "key11": "3xUU32cwZm1WxvyAwhRXNHxC5EJyTF8zRFwqTouxECHddWV5uWqohbDZeFa3wrhzvsFG6QgbhSEmmJxF7mo2SgWT",
  "key12": "2uwPWo3MRjzaokzqmGkJfaWbW5o9gcnmtMKYX6zWptx8VgPDoCaP31ZJJ7PxZW44BpzBe6kSi3VQJoH8RTAA3hvH",
  "key13": "NrbpNMwujwAKvHVXHgA7Ns73ngpNWoBhpwVbHXZGCc7MyExHTesU8FCUxrXwX8geAQE89xMdMvJkLLKsdowaAAC",
  "key14": "anGGxjGRRcxCFDCrVPRJ4bWoUFnGwEnccdyaUo5eZEmAjauxgwx2RM4LrotTeE2CUYphXYxUXFxiciHTWegvwbG",
  "key15": "4rdXMbCtJDbbdgkUsUyo72zRLivw4k8MnMWwjLyYzg5bWxxjRxzPViupLE2Gf9BMtdWTqvEXmgqjoqTdcdtdeptD",
  "key16": "2cbMSZ89yh8b1vJdp19VRAgCHxHDnhQYsT1e9MV4gvc2UZSXWLf85KEx2LViqy7Jnb6coWCu2WzFdXzi4XkQW1R5",
  "key17": "5Je2B9tPD5j7GC5K1R6wfYVd85DCnwbqr6nHYQJoHGC1ieQFNKT9ZzvUoxkbKz3bv1aKcxde3z3f84bthBt1bEfG",
  "key18": "mgvETs4EjRCGyvoBdvhWByq5CMTV8wozkqdrWrJPJBgSwqvjfsVVuEfJc8zhmohgn6AW6GtReJhZrjmpfiK3FXy",
  "key19": "5rdrc6kgUMAXf7Kc8Wy7CstJcj86tAjtWZRTBshd8Py2YWKRzNUw1Rtu9G4ALUveEjB96g26imBnsbpKfTq3dmN",
  "key20": "d5pzV7Rxsg9rBXyJBUNLvmmroP4F4dXgqvDZieDW8w6JogPMWR1xy5hqCV4qvZnLxD3Eja6VptwT7wWQNSLrLzw",
  "key21": "5DKRxoUUwfok6SUhJaJDUKm2cPdpnS7qdbHYhKX3QWaRdYEsNcKWqjrQxeebENAnLrg5pCsChtvtN3TgJSG5yYaD",
  "key22": "rET4Z4xEA9F132qv5JHps73aU2NevRkxkdF5akkdNRJXVRekRRSvo2hKK7Qc33ha5Px4B4pc1rPJzt7ooKGfDsZ",
  "key23": "2mPUbzkvZ6vVoSrMUBLzw2Rbhu1em8ksx7WPTxovmPXnqxT45TBuonEpq9g4yBK4xxR4aYhgf28RZGqzR8E9AM4v",
  "key24": "2s3htyAeaFditKCcpLPoRoSm6QM9h8c7j3zCuiWTQkqS5mVHmiaMPCqBEkijLHFc58b16i72KaniZRK4RQf6X37S",
  "key25": "64MBrXsPrPLa5axb19JHgn9tXXe5jyfFLzRQzkiHZ9iiLWgTivuqy7LVD6QUy5ZHWyyHoiuuRHcPqQV3SmXPEADx",
  "key26": "4YP4MoKqhuha8k8YjwTb1QBYYQypio1feCCz47yG2acJyAwLj6as3zfmRafKrgb8eWW7b8XCUepXhkUs6nTeLknq",
  "key27": "27qxa865StXLdhx9pUbGaA4gVFJeMY7ki6yU6dqYucvTpm5LSsgmT2NHjmGnGKF8qSrEcEPUju1MNcqZv9cu2v4g",
  "key28": "2DBX8xwmQ42b5hvAR9NXvuPQBDUc6cThsFqnGY2c6UAFkqSNC3ziEVXmfkik5hNL8mh9FRvsbaJDV9WAFoDXGFWM",
  "key29": "2f9LZjThYF4QASQzWvfdHopufFWmVfJcK5SuoDavfLjEYJcur3TtBTcfvpHXYhDRCUmPEFdqShPADTQSDrRi66Hp",
  "key30": "3viCsMbGA6YthVqFfKeSprJzAxKjLxbMAXDCzgCNc3eZyUWzR3BWfQvcuFqBwvDmJGEvGESiGH5UNiaPZj4RB7uM",
  "key31": "3JybLnFguUgtnJxDGW8WcyZR4sgAhknrhcz84NHuTdpFBpVbvMnHLZNJdG2C3EVZtsKV48zkVxc4BVgoSo3Wi9kt",
  "key32": "LHg2JbyFgb15TaFo9TSt98wkAxDxKy8GUcL2MoKiN6zjvmbuHHz6pUYU352ruadkaUTw4ShYWVav5fc6N7dpe7n",
  "key33": "4AVP4sd4AWfzpW3Zr4AJanC1C3oqywx4t4nKYZT5AMgWo4ZtSewz6Ps5ScuDn1RR4WYe4XgnwSoYq9pYWFSMpKMZ",
  "key34": "3aJSFKb4mQRQwjEZfiUP3gxcEVcRa7Pu4RrPusY7oDv5MkVK2DDub6Uj83uqdin6HBye1cEJEfbj75ioYFe5PyTZ",
  "key35": "5YnxeJziKhmCHPXmmeTHJ5fveLEgUNkZRKwF7sMRD1ipBCWyHBjL8cXBj3ahL8mun7ag3i2EjStM85GvYJQcXa5Z",
  "key36": "XjkPi5tggj4pxxoVA5HPxUaadaQYgNmjps7Lcw9kvcLuzVsr8QgWwvYCKzxR58ykLtirgCAHJVHh7MAFoP548XG",
  "key37": "5cnAQydbWQto8MXTZ97w4D1AbUBG4VrYm8V3rF6UmX3AQxSBAg9woiZyYYFYv7pNgQ2XMC9QMBhHbUGYvhuQhpA2",
  "key38": "4n11vvQywh9hVgvcVEnoKm4JJ4r7E16kgAW7xCgrs3tDHpzGwegzPZipszBcAfbUnXp3YFRjbSSe6xjMv7g282p9",
  "key39": "rQE3qq9ctWreuRGGyqWAdBssXcmB5mdECJF213CgMDXLMAneuYFUqs8buRSqpVU1DpdH2ZtVfLnLonTbHXZZ2nn",
  "key40": "4VotXJ8X5seF5R5KgAiDdUu9EnWoDKLCRVhqGuZX6qRQmAAnW6PLNKzQCw4FfznV4nfFdKoDiZNea9sBumC7yfsF",
  "key41": "4hmT1yYLXTfizM1GV2N7Z8GbsXaRL24SFfB2xyGvgNuDYG3QKRNiDe1Lxtkp2HFxFyLmEZLwQVBRFRkrTwnNxL4T",
  "key42": "2THpTTQYK3RxfuC3RSJdayGfmMXfxXGmMpDztCZZ3ySgY61aRCCBgVtjzGQ7MYwZxEQCSekPfna5bFZoqYFnTzvE",
  "key43": "4LGEezC6KSosoMjc438ecaPWv5BJqTF98Z6AHH8bPFhLUHL948VU89whZe5kv2xwMDdJbEzb8gqBfSMrXck6vUxU",
  "key44": "RpkBrUh2vjjerSL8kFE7ePde3nUVZ5NtfnZo8nESDE94Cqg88Kf4ABUR3aJmci1kvvJZYSAugKkiWi9996mBFcJ",
  "key45": "53YedKL2aq7Bk3NxTzJTrQy95G7FAU3eW5M2skFiZPekPJ8mzrmCVDJFJxM434hRKHiqxeMrCYSLCtZtknGJ2emE"
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
