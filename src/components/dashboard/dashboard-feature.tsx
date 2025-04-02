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
    "5UVRBWAonAKzTCXAmp8j2X114E3JxoT51BfrbruqQEBKycdAsBEoG11wygtPned7bkaKzby5iPv8HT7dhQH1ZHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVijNXPbYtzvhcywmrkS6yHSrL9iUsFqesVrKFCe7zffqPV1RgsJXhpvnxwEuhTmKzhh6n4bLx6p7nUn8iYtLLL",
  "key1": "4fcmA9cPT7piQCacYLt5UMxB1f3XouCkHGoFBYQhs8FwGXNYdsyShAw2C4DuSjDBhZ8HrkeorpCo4L3GYbyYcaJW",
  "key2": "uw3tB8eQfoQd7zKSBBUAyLpYqbfEasr83Q5oeh7qKF713SjP6uGxoWptzYeL9fk7Rfh4DsEMmvJB3KBvhyq8XEo",
  "key3": "2a2g9fMAZj7hzaHvqpwmN1ds5dRgMdFraSp6LKAwQFim9hsZzpYsccCcdYSJGbKZmvVcD52hh38pbMAGWMTGKNBc",
  "key4": "SaL5eQ9mom25EgoF9yswf3duMFTrhwdD5qX3iKgXt6yg6WUkxXHG1yyjZAe6eNk2TLZJpTJAcztdkUgrvxrpckc",
  "key5": "jRKPV2nFeJjVNUkwKx5zCLLGJzbuupDhp85gyx3vRSzdic2HLvK355Lnvms1e2TUtUdcwVxtVQiTA18Ngt7WmJ1",
  "key6": "2mbByPreCywJkoHQFT1hb3Ce6DZjwBYbxvgrw2m7SqDcX3pQHs53gVofYmcugHmvkYfFAsjdXH7bq7JHAwa1mmCA",
  "key7": "4vBYcEw9iQJjnrU1c5cCjXREYmLurmosAAGe6JpuwuHyh1eqnwJejrbJNP15F6EYRUTbA2JD7w9Gawzh9dFCtBcg",
  "key8": "3uVVBAoxTckAACMd9NxHDPQ5SGu7q5bThiTfYSNEdFjvkkhmfKtWGTrmBnVjeCzyd5KnCpujHnq2L82nT9EMemqr",
  "key9": "28YPYbLUAkyHYd5uUqVGRpM5cV7umbAgK8B2NrhnpUi3Wp8fgPtKYwcNBQgphFmEpVCfjw6LTcUkgDgd7JDdVaoX",
  "key10": "3WMQ2CwfefwYq9TWp41uEeW7e6rTDkNqZMuBmAFmCUCbV89mpQj3kvHuqKYTyDS2AWbo6KrU3n842uKwRQrdeemi",
  "key11": "2ooG8R1vH4Ug1ce8uYA8oWzEB3YLXiZNRcsF8X1fjtKZEr9eHgzTTrno57sTf1YUyBS1wwTGi9gajpwRuQULcUQd",
  "key12": "tDNJtnHSMWnCcf1xj1dVcb9cfdmuSfTzYoX2UuYhAHTnAny7pCkNoiEEmbJqkoappVkf91MsbDZXpF5N1xkg96G",
  "key13": "3ytPsM6prkXgCuVEwwQBSdRrcK1KoRkXyiECr5YBYpxvJHzp3PhQ3az96bpTXC1dy6azsXj3kAWGzqJJmZkgjFfA",
  "key14": "3DVdN13hCvTQrwNLPsGxH9TFUgc3cChyZjSHs1ZpXmtwQHJyWEJuuQgj5a1UtdK1a6YptyxDW3ttdXusqZxC32Yf",
  "key15": "p6HDAmPBWuYs6qE4PQVprdzKWnMY4stfDt64TXfuUs9Fa5wfYvQNAzKA2c1HrjYNDjUfg2uotChjaN3XX96DRWe",
  "key16": "5E2fzcifZwaNiLw6biPBKc37JFLQhSN8hTvrM4WqFzNfcRLhL53s7PdnSy62Vja6A8GQ8tZTvGiKuV2mj4Ln54BC",
  "key17": "1F6gS4JtEPzAmKoz5xBdSMdKZFm1CvnWs4Wrmmv6u4wojDi8H9kYg6ZijvRfDNsC2fYhmdQZbdD3qiFyCcQXWWg",
  "key18": "4kPdeY3gepjZv2rT8R5PhneK9MfjVA9ZZyawcVe2DRucqvpuoEtFyGZKwbVsfx1NetjYArK2JoSHwMAjLdRc9wyK",
  "key19": "iZkMUbpoqbsgfYDxfTLivNtE5gZN9tBLEZR9Tz8Ka9HLgKcQk7bs3g5kUt1VGY9DCMr9WbVSqvjaDXGrActJf4R",
  "key20": "4JSzXTcWXxEPUHk6gN4mNMe5jPFYcPcT4R6cYefnnAwsEENo6UmYNr3NY6Zj11Yyey7a814Q5vW4445HFVr3aQgi",
  "key21": "ndCKZW2m8pyUo6bD1kn9yY1FEuuuHWEotB5c9gfx9VwtSYuXNAwxrqkC8GfE5NrnXBGp1HGJeejBBHgfh6K4HSw",
  "key22": "4XvfznfgFiYWQH1QdmzZ8Sbv7sJfrY5chhWu5uJEGN2Z17qhjpCwn2H8sNnCxfrgskrHMuecgQeQDCSgdxESU3JL",
  "key23": "2FNBHbLdqGr6uxJPieHF1CTfvvgj785E6Y8hbJoVMrjWCU4YVy3AfRBtvKj6vR1DmX9mYN5btG32KD4Nto3dkdZq",
  "key24": "4wVPoya689twPxFtWQ2oWQmEynKVAsx6qtT26UCUbTxUjNzBFg9yHyjArCEhY2jDDVddmt6EWSAx92gMLzVQh4yG",
  "key25": "z9QrcZx9nVn9WszoDoXmYGbGvhNJBW5C2HA3tUaZ1T1BXDUGxQPjeHtfEZbK1cLc86hJBS4ErHHNM9WRrBApkuW",
  "key26": "2zHnWwBNbsLELaXneFzwKr5a9fVTv36FKejtbvXoF9V3Xjnhy7B2bV5sVRH2iuzVwzW4pJo8gwJnkJtzb7RP7XSz",
  "key27": "7nG7PTaHjyebae2RLUczxpyeoCqUhZe3jquNyP1uX7vBi9xMcN7PcvS1ukA7yaQnwScyDZXVMqGZhHkF3ut21TH",
  "key28": "4cyUk2sRroH4HaGT3CyeDi3chC7ZQQkvAdnUGpL9BTcQfYnr6UVVP9y5VmFFwCgxBEKRUgystz4D3hfmVBqbN2gi",
  "key29": "2M4kn4eUP39DQPis9RzSEHQMvAoRuYrH6k1Ap6rt8d4V9Ssyos8dzBUhrgbH2rkh8YBM24dCs5atFihRSAyNFg3r",
  "key30": "1259mkYReC3CVhGEo1cQ7fLh9Radr4Mko7aLrWjfQzphmq78zVV6MLEdsbCdDqnDWgRMZXvce679Yny2ACxHKs2K",
  "key31": "3UVG4FW46mBBkyDQcTs9LBpfGoe1BmhCpwsaMq3mthUd1kKRpxPFyGyrvPcR1wHBiR3VYKuZWya9FhQ9qHbMegvz",
  "key32": "4PwM6tEvNBVmrVvpMu47nrhSHFWWiN6X8ekRoUBDaNBUXf7HWHDYGG74p3KnCWqbsv484WviGGfXDEC5VA4wqCDi",
  "key33": "4iLwxYE4nCmXFyykNUwDpWnAFph5DgEibHFKK85n7DjTHgymAi9hRsFa3vDS9Jhje1JcXZPHVrf9VzRCd2mPKDQd",
  "key34": "2EfUVLVcocPWKvUT8DwdBFrTas3f5EraVEQXtbfgtTDKzDofArR9nEcyqAz7BXzQB7uWZLhh546WdAwhq2k9fWo9",
  "key35": "3mrxRUP3iMYbuhuMVB4Cry8zw8QPe1WeScxeam5khNXmJMPfceR1SHDihHZoc9DaWBWAfNezZfBQNWm5FYb1YsQ8",
  "key36": "2Mh4FTCv5ZNH7B8LERvXjs6k7qcdHWd5byK1rbuBTCTutNWT4rduX3B3iGqhdUh35TKnqNQKpHWdCP4QoZhCUAUw",
  "key37": "2fdwVQ7izSG4Ts9uYwtZNicq3heTG9J39L48PcGBNpJGycStckjmSKJyHP4hF4h4TNVyytwpLyQCuu5wiPoWMYLZ",
  "key38": "5sAsUGfWgFEGzaAHBPd5ELEZLU2VGSHCTyZ5HGHiKYScbJgyPCtVVX8iohxyjhgQKNLyb6jC64KDpwXgZu6eNseD",
  "key39": "313k38w5iEQzUtZiAbkqWkRbfz3KzMekMkatDyXQN8EB1waxgvvUheA6R2arbQC3QJmECaHnuxwQToroMTqxmcU5",
  "key40": "1ACcxdBp2SRqNs62izt2aajz8bLWSC3meDkQmJBDt5V3BXA9xowPfD3jNiEBwKRaPD6D2BBUYjFmaqJjkVwiVum",
  "key41": "4gy4igC5ADz8xcrX8pxnzs2fNG6fs1HPQRZ5xubs7cjrWcbSVFoEgiHPsbw989TqgWrq1HXxwQ4RhbSXZwgYhDxv",
  "key42": "yRQky57Y2PjAfEnJVExskNUqfGuFd4r9KHfUndEQHZRoQRJ9VM4hjYHuB9ZxZXzRnkiLGeNeY2HWys5bnPHbapx",
  "key43": "2Dq3wiiF7DSwTHjBc8QU5ZroysUTRBaWF39rDS6T17ub8XfW4GWQaoMgRToMDm1JxaQzFfdq6vAhT4uKdry1YWsg",
  "key44": "1C1JMEGtjbzr2tWjkMK6RqmmuNaTLPkNZd1Qc5TmxrrQZN4xkgQ8KAvovhP3NNmZM8qFfXA9krDRthkRuvovw51",
  "key45": "3dcjzaeUyWnaoMBTLfAV1sc4dJFtjwrsBtiwTmTyLLGJNgYbpvH1efwzuAVLcGxFqdBeAyUog7tPwsSXFtsGk6rD",
  "key46": "5Qgaa5Z7XKitpeoqV3Vcqm8cdGedYyjMpGU1ACuz8rKJfTQUJuykoP2wqo9h2hm9rPTSnNFsyaKwAff6kfhXtgdT",
  "key47": "49e7meRYJmQMBXCxfpBME65c7KKQLGUtM6aSX2Gc6uuPzw8poNnTvCTaycQ3voKPmkMLyPN5S4DR9ciYcrXq9w6H",
  "key48": "2D5F6bNn742vT1o5oTaDhHZkdA49G3TrShKCvDmzCgZT8pMuHhXqxK3yHWaoWZ7DcuVWP7nCGqZo8WiLigATnTNv",
  "key49": "39KuyVs5t6hkKUjWvvCUiifyJBpzrPoisws34doy4uFQRzeENNk1oJURAdzQxWkvv5QS2sqtHray4L7mDtQSVAuD"
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
