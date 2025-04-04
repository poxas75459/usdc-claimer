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
    "3YyD9RVEfeoeaXdoLCA31HPYi1RJXkNcoFUMmhBqY3KAroiDtQHax62TB8Ev2FAn3bD4BvR5BN2bgqPncv1ogJp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERkiPrJYzW9tQSJ4wJ4RMJmpVQQQRMN3LqJUKwqVyQbdFEf8Nf5sHYx1MWPjVSNC2GEm2cRCaARciM8YJtrzFzT",
  "key1": "zaUv3eXEC8rge5ouNa7Ph2xqBrWBWwoSg5aUtD6VePpfQodHyfr5o6RfBQ5cFY9Roj8MZTkrkHGsUeSNEjfefzv",
  "key2": "3APrAthBp4b7eJNgNFroq7MSmJNpqao5kvaujLGFs5BRDLaCDhuYVR6fQ9fdweXYTML2GMTrNc3Y961sSPgTMiCP",
  "key3": "49YSNo9RpjAUae8ReZ5CapTjMMY5PE6Zzo8gRQdjy4AsUUpzby2zkmBgiPMJqSPbSSoU7hKs1fxGvBrGVj1xFyPf",
  "key4": "5r5vCa42CVcjUoxpUGJ6QAVYcLQNoxuaCzHgxk2iFH7H9XbExFvbpDgAhdDTBNbwtkXsgRfwQev1eUyMa5RJgY65",
  "key5": "3TmjbE7GZkbjSwWXfPS2NBqrG9fmoT8jzF6tvWKAYFDuMVqe4SwU3H8Z1vRwoGZVSuTTgQS6fMfMGK3t5nqmNsHq",
  "key6": "2P1RVPwJQVwPozM8qusPc9TrSYeTwX2VnVeACqgdzsXBhTyRjhWjWcXXjCvgXhLE5UqDXS2oSQgzFMxVsUZMH5cE",
  "key7": "62hgz5aggqdSNMrYBASCUiQhGKM18smFQRFUeXsYNR8QkmUQP13yDSKQZKfzDG1EGp4s5ZbWk2tjFBce9gPyCbgg",
  "key8": "5AsfUzg137pia4FXubtu8j5rkJjVSk7kNGzw2dTkAGzKjHueB4n7Q2mwYQknSz6uW7MXnm8savqoe7Yw7axqw9du",
  "key9": "kjex2ZvVh6RqDNtS83NTbWWmZVEyf8i3RkFHBDQPAEoXuyaBrQVfukgSTviJVv5NqbBZ4TgpLGWNWF5PYvuH3tJ",
  "key10": "4kD5kmjNc31KYkk3ZMYsq6Zj4ubXxj6opBgWAsNqUu47FaudqpKcGzomKyHL1GPR81aRDUf9P8CVbLskz8fKo4vR",
  "key11": "35ptzrP874oX3LXBMXjYKsfGL9VmjsBmHBoLyRKDEvfyEnps6Z7ZFYz4EtymWPCgN2Z3Ps5vKJiMY2hqw2Nbz8E7",
  "key12": "ZM942DwsMfWyrzpW2gHVdXUM8i8Anud7vMEtQLDJz1MYfB9yvkWcxsVfaRwua9QEcrLcQKBeeLpFYKz1E9jnhwt",
  "key13": "5pbHSXr9RmDSV3JAd5fxoars2Ntw6bhv2R8KV8PiU81icMHDKHCCyafDKf28yViumkAPjY84zTPAPU1UWSscnjAW",
  "key14": "36MiS1cTFENFZf29uEVRQ52cELt49uripUAFkVp2oh9AEf3uwSKBNHpYeMiFMg4TM7qBQGqy5JV3Q8QM4ndLYAwC",
  "key15": "39dEDENZbUEAXSuQkYNGpG1hhEbSytrgKFeRdKct2DM6DajN2dqPwQh6YbuCaweouwQAvACBqVyRgkyXB81fLsov",
  "key16": "4KodRemYuaCDcRRMqT2qKvS1j65xKr74DNPLM2HUWx3BWmoh7YxmVj9t2U51ZbRdJbkjhFU9FoSfqvYFvCDVTTqk",
  "key17": "wTrTXua4UeL63c1W3vsQFrdcqzvE112eQ2WvDsAhnyp7nKzh44b2kxzAmqxhJLstn9SaE4E9z9JKCL9vJLXbBii",
  "key18": "61d5TiSf4ucJxyLErBQ1gQH1MSerX6RHWJmFzZBqpnqPmZeAotiu3Yv8Eoz2eorET2m3XErCG6y11FueF9vHBgE6",
  "key19": "3zDS377N8aem4gmZmyAM8zhhS6cTn4d9DDkYqoZNDqYYZEhuEM8cgEwYK38Ctw2sFqUgXiyLPvve6hsH8iSCvkzm",
  "key20": "315s1idZkrcf5mkQLXXsEfyZ5QKFAKaQMBGBkrkTn4mYRaK4tm8PRH6jzdqfi1jsdCnNjsYtqG6GsypVQWZ4b7Ys",
  "key21": "wzF5fvM1eiR7AeEghXJ6pD7h2Pt4d4eU2M3ib9zEz4iqzfJFpJu4CR68EcjTDWnWKMxQwBEhs5ky4PAxLXEYrtv",
  "key22": "3CNsAYv5LNYCHpBo2dAvEB5YqrdL3bo3xgtPieACmfJA8xtUT79GYnPKLh7SWyeSBF43b4zbV5udtZ8nKhNMv9rG",
  "key23": "2Rw7iGdzj7a8g8WWuJr47dbeuc2ufcsxjGusQsTMnmXsUhjhjAAXwirhMNK9UAJDWEXrKHBLN3zgSuzHjDDbGvtw",
  "key24": "BtiZBmQvGMahSCuvoD4vcssDNBrMRGj9KW5uNDgjQszzXoV74q6rfFM1Soy6XEvwTepbwLD1d5mvdzf7eh5pSEC",
  "key25": "3qid8F6sBFa6YWUj3aRYLZu4XeL3Jxzb4DsiHhAC2we5LhVSYp4EsgJmwTxBdmcK8ynKZTrxBsYX7ug44u6QuWo5",
  "key26": "3gQQ3FJVzVkbJ6SM62XUsJuHt8ciLxQ4m5QtCB4MHfCXEAa2hT5Q1fuZ1mgrX9XCQm7d6xnUHBZmCjTpJaM1SAW7",
  "key27": "2KJmue2rCdYe7EZUpKA8n9Fv6YrnWkArFUKLwrnF4aPMmMFD4UqkhqdsenPGhJfYXNK6cGiSFtoE6mELfD91nG4e",
  "key28": "3cukkX3czV1Y19RESC1cFXgxESbwmUZEwEMRz8tV4dy9GiT5n53t2YMno5dcRvbVecM95zAeAhHiXEG9ktQH1UN4",
  "key29": "c53XRd2LrHgvc8TbWPg7U4TmEJs6ChLy3AuYGqK8NmnBq5aiLMGtEvjVK1RmdGBvi2C7xFic42BFLRL3r3UNiwn",
  "key30": "5T7cedby5YPspp6fB2hzpFx2ZoCutHwd8bCdjEP4V4zqgCKHcC8RYsFbTuGvjcqzX7tmDiqdcynVkjcZcxnprgTo",
  "key31": "4YmRA7cbBjimA6tT9VN6YhTr7C9MapWrFwLj96yFjWNDpspjy93uhwtqLwZvUDPFuvJrvwsCnNAUqzhSmyPd8vW2"
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
