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
    "5mFuCXHNYKCuL1SPzC1iZEjVSVJmHKTupvva9DwQgxdcUZyokY1Q1z6ztcFxhDtSjMFUYhCKKTD6ZkpB8nFbMgHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLLgmvCNKqDJSpLY5mheWijUfZ19QZfKHhzWhvs21DLZn3eem9M4DeUXBUd6y2BUDG12CXuwjAdjqcGpH1b9Dy6",
  "key1": "63xUjgXzsbFH3iYaDJSW6Mo7rjoH51S2Jz2G3dkH5p3qpbLLKZEMBwXC6e1wpZhEbLE2xZVKA6R5nRkXHTVmoWgU",
  "key2": "2zRg53oK1Ej8q9vP7Admj636cX1VzZAMdMY3qBZ7nc9ksdyrVDXDbDux4YvxGJc6s5bs1FyuyXY5UUyBoMKdCsJW",
  "key3": "2uPAf3HKC5KZKo8dHgjtLJsUk91sjTzZcEPvsazmgLzwz5rq9figbNLebmd393B1tJ6hm5zKBhun9zkkHgmfexru",
  "key4": "9XvCGLCaM1ut2QyBPXZ5YVC3rCcWbbrsm2QRdyJD58WNuqhFGkEbcgWa2Hp5tKD7EkYYjU9AyjYo5Efq5dPRfxz",
  "key5": "3tva6GuSUnSPQAzAgHQTa7dP39ctj4W1P3FtqYTMqcfT5Vf1fjdC8cFgbCd36YCEByGBo3AbQPBHf5oeQvQL4bWe",
  "key6": "2ekrsifJqdw6zvq5QomSvudXn443rVakCFvHc1hCeyybrnn7vyyUkY4fTnCTmSRTszyzo9sLvgPmhkLtRKnZwmkf",
  "key7": "4TPTJDjNGo38KM8YUoxf1Vn8Z2fsWnWpHLro1kC8oL1EaGZF5czBJVXL1ZoqY57uK9w5T4j1XM9RDLPQAGD9Wxwx",
  "key8": "4RvHjfskxeZgW14F7EKLV1VpAjsf1ppKTTumUu7AzKzRpSTtCro8EtHLLGnW3JPzi9M6jWGRNjwFS8YFo1JStyJM",
  "key9": "3mgs3JGAz4xUWLAxEs2gL7VnKCsWYL1twyLXFLU6bgNQpxmyzo9BS36boiG1ruTgL6CFqTYrKkDoFCaoHNMHGC87",
  "key10": "UjmkbGxwmpMYcAN4MVSeBhh1F2GP3LNKdGWwMCo2599YP1Bpq9t3VCUejPFpCpsnkjrZcHfxN2hErabW6ewLzEH",
  "key11": "KoDApCkfcyHej5uxgqZZ3DCtF8ynRtBEnE9EamGdu9FAEHqt5ch9oJwRehjiUMhAAvm3HfvHQ2hppzmRS3QyjXK",
  "key12": "4PYtPGHB9z6qFBnRkiXGTfHpDU5Zx2kVxD4aLUH6SttoSbZqu7L8h8tjngMDebk2tJQkMS4xNXZTQZoxPbPBECAK",
  "key13": "4zx3wY7EbvdVMErjYfUryzbzetokNixGxAgi6k39rxMhoxtvpkWqurQSZSB2VqPzF7N8eGn12nD2YM5miJ7AHPQG",
  "key14": "3YMjtKLFpaHRZsj1xcYABBYr6JfVZaHGSoJa2oHUdMQTDWvKxyPH9jEvHwLCB7MQjd167VFPRFCakw17g8rCwQw2",
  "key15": "5LWSgzQNqYLgqqghLrXcqYQBqo9aeMPGXYs64cWwMGpixCH7N97DJ6yohXXsRKP1NZe8ABL8BfEdnfYP8Hmns68r",
  "key16": "5cbG41EBWKKuy89tGfGmgsjV7zCQvMrEamTZH2k7Qd1tH4RLj1Xzo9MZ4tF1bxMJ5Da4Wk5Jj8Vo52C7W8xVhDv8",
  "key17": "3wafGJoaG5TLqdiFrL6pCSC3cB7nSnTtNUZrrr7XPXf4fMgBaDqWM8fqShsvUkezYTm8D13BkMJxpy9TmsEJVTFi",
  "key18": "2xNYD4osyFSdW4coxiDBuSVKPyoCi6bhqj96WJF2s5BeY2mMAJqNBNCkhrtwYAqhMnEhwytSDvU7SutWyM4sZGPt",
  "key19": "4s66g4HYR2SzFL6m1bu2wJep8Xzp9Rj92Whq1RwqvDLaVEvEswVpUYiHjzoHkg6jpqoNqz2xR97hco4L8nBciUHP",
  "key20": "2nZjFvyaCR6gVSSattK5woctWGyEEWHgUV6i9ZmMfGpZqePu5riZTY6xFb8D21smGFa4pTbkXe2TdEicBvgaPkN6",
  "key21": "4SWXLCAgJin9ZeLRYbMuJh4NfLY3tzsvX41hg5N47eXwQQnmhSoGiH2Q1KJDdt4noJhrStnN4sXmq411NSPGgrsA",
  "key22": "26m6tC3jNCsiepAubvWS2yPoctYqzNas7uGzNhyFDaKUjwEUVqFDe9UZ2FZuBPxszHFU2nvyBVZf7GFtRAC47sSV",
  "key23": "o9RGhEkcJyNL4VCK6n6mZFLwZMgk9PJmdQT4Z26JdTrMj7JW97VeQpohDV2qHT9yHHdLM9AzehdJ9HBZbkYENhH",
  "key24": "2NFBJmCZnHRBQq7pjQXcSGyQgKnzgfJYotYyLKCeFsBkyf8FsdqZBsXb6jVQY4VmAJEnfYdii5TDihGCRXXNoGG5",
  "key25": "5ZX5mDrp7KPJiu874P6AN9mFazMiuAFMs3FWddng74hqWXGas7WFsJTSn66dgX4Q293YsHnjHBksfWDa6BuPqunK",
  "key26": "57ypr9AQwusejLehbeWX6ZRmHwZMTxCwSxFx8pBGjfexPhxL4PNv6pEkP65huEAbWqGHuPL5NMi2XtcYoLVnvFTD",
  "key27": "HT91z7YsfqUM6KTiaUCxnDHW8HE4h4MuoXdNFJTz4j9BmgMpUHmsbEXyUPSj6EFZyJz157dN7kow9koRJNZc1R9",
  "key28": "5Lit9YnNta4Cbh8YBJQt3MobAQYS686KUKfBVH7WckvGBuXsA3ai1wgypoii3HMBwtds2E9wZbW1697ksAifqo2x",
  "key29": "Z5twDGpemu42qdUSQEyfKy7jwci3sJZ662UNJtLm3LJKVKhoScfnZxxh62DHTZVwBvyYzphhRtWNh27DsfrhSiD",
  "key30": "5bLkqq1UD8rNc7uXgEKZRPwmJMDHQ8W7uuKKGjWC6ANpyvXGHjA6zJhvycRzdp1VwhMBW4MEx2iQ7jzECQbwzzxu",
  "key31": "3ELLqX3zDVs3zaNAuXoYyq6CgjhZront3VDG8Z6a4HPy1c4TNZoZ6xezG98ibVuxTarz1qcNLjjbscyUhtwC61J6",
  "key32": "5F8iZhSvQqNLz4eDSURDUXK8ZwoY1LQKDV7rnyQy817xV4U72kc5T5d1G5AZDom2SFFNDSC9XokmqNQjEUshj8Cf",
  "key33": "5LuXQnoVhg4KfzCiB6HQhsm4prdktbuwR3kW4p3bdWEsXyV25tMfaXnBMjcnBbhFn6cF38cybNjAt7CReA2XwSrn",
  "key34": "2F8gCFgrTHyVpagSnWTtKFStvhb1woRsv89Q2TUdaGKDps6wuZTBDtGdr7suSd4pPeVxyWNs1qvXR4b2iDva8EiY",
  "key35": "3rwqkvDwDhTkbfYS8GDBM8SVK4BMSv8vnw8AC8sA3Qqpe8ZqRa1AEe32564NdFdFWWQM27UgUMZXWJCSVvCGXRrm",
  "key36": "47kymzyDaV4mpUWaRpmS9Jg74LNhgApb3KJuwgSjwBLG5DCwRgHnSJ3jpruXBvnDD9e6hdHiAQdkC6p938d1b1vk",
  "key37": "2TLjC8XBUcJ5HHckKvaiW4GNjnDovu6kx5t6oVCgihAN47n3bgbPEdcUrysdUEm5vTDZ6ZC9F1QqkhhnJpZjXhYP",
  "key38": "3En3NjuuYxrUo4euZnDenwNrUgKkPT3CwM8m4CkWMZyv5pp5WqWnFnY39ziKvebA4UUVoXr1wojTbeqEJBpYesJN",
  "key39": "zdY5D7vfxct84FzDJdfzQxqUoP8XtLwTjn44XwqCkqBAD3Mxvo2psNMaikDvWcoHWMeVzpJpPw3LKmVpvuRo3m1",
  "key40": "51Bjq3UmuR5DZffVg5gmddiDcaTGvUCBfMKJTzifVVXb9uoEs48UCBF7KJndrj1PVadDysmaWyMusGcANAooXUF3",
  "key41": "4HjqTZjmEdk3zwLgX6WDKp8TvxHsA8krkdCMKafG575Ste45jckbheo4KgoYj2kFqHmmc1cssNvLBANTmTZeS32Y",
  "key42": "5SAFptk554Kho72kVEm2iSUHLn1iJC32dieFKALAH1bJFfCTJyPN9zK67MwoYDhFhKKFXRqdSkwj6ABFzYZF3B5W",
  "key43": "4YikbewQikF22AUGM27X2NtWD9zNseW8YsvzvdXusGZ1nkv1GQWxsmi54vUztd9efWPcDSkESZcQP36hUYhSYxjF",
  "key44": "8Cw256p7EjApxnuRHoPVaak9jx9qTrvP4hWBQRbRKKNPx2QXgMTv8QUmN3cLLmctQdQvGisMHkZMyX3ouNBVF9S",
  "key45": "4Hk5mR8NVpWccX5LLVx2GWd4cPGVyETHmU3kng4yTGQsWnt9TsY1GfNmB7AFCzRwcTNj9ELQvcNiXxQkz6wrGQoD",
  "key46": "3TbGJC2fUVdNRww1t8rUaCMprwVxExzTT8ricEv7rtD8Ni4aiDb9obNoHLpR5AacoB8RGnpbVimMqFxho6uvjtfr"
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
